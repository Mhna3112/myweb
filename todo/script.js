  const MONTHS = ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'];
  const PRIORITIES = { high: 'Cao', medium: 'Vừa', low: 'Thấp' };

  let currentDate = new Date();
  let selectedDate = toKey(new Date());
  let currentPopupView = 'timeline';
  let currentEditingTask = null;
  let contextTargetDateKey = '';
  let activeImageModalDateKey = '';
  let tempDayImageBase64 = '';

  // ===== CHỈ CÁC NGÀY LỄ, TẾT & KỶ NIỆM LỚN CỦA VIỆT NAM =====
  const SOLAR_HOLIDAYS = {
    '01-01': '🎉 Tết Dương Lịch',
    '02-03': '🚩 Thành lập Đảng CSVN',
    '02-27': '🩺 Thầy thuốc VN',
    '03-26': '🚩 Đoàn TNCS Hồ Chí Minh',
    '04-30': '⭐ Giải phóng Miền Nam',
    '05-01': '🛠 Quốc tế Lao động',
    '05-07': '🎖 Chiến thắng Điện Biên Phủ',
    '05-19': '🌟 Sinh nhật Bác Hồ',
    '06-28': '👨‍👩‍👧 Ngày Gia đình VN',
    '07-27': '🕯 Thương binh Liệt sĩ',
    '08-19': '🎖 CMT8 & CAND',
    '09-02': '🇻🇳 Quốc Khánh VN',
    '10-10': '🏛 Giải phóng Thủ đô',
    '10-20': '💐 Phụ nữ Việt Nam',
    '11-20': '📚 Nhà giáo Việt Nam',
    '12-22': '🛡 QĐND Việt Nam'
  };

  const LUNAR_HOLIDAYS = {
    '12-23': '🐟 Ông Công Ông Táo',
    '12-29': '🎆 Tất Niên',
    '12-30': '🎆 Đêm Giao Thừa',
    '01-01': '🏮 Mùng 1 Tết',
    '01-02': '🏮 Mùng 2 Tết',
    '01-03': '🏮 Mùng 3 Tết',
    '01-15': '🌕 Rằm Tháng Giêng',
    '03-10': '👑 Giỗ Tổ Hùng Vương',
    '05-05': '🌾 Tết Đoan Ngọ',
    '07-15': '🪷 Lễ Vu Lan',
    '08-15': '🥮 Tết Trung Thu'
  };

  // Thuật toán Âm Lịch Việt Nam
  function getLunarDate(d, m, y) {
    const INT = Math.floor;
    const a = INT((14 - m) / 12);
    const y1 = y + 4800 - a;
    const m1 = m + 12 * a - 3;
    const jd = d + INT((153 * m1 + 2) / 5) + 365 * y1 + INT(y1 / 4) - INT(y1 / 100) + INT(y1 / 400) - 32045;
    
    const k = INT((jd - 2415021.0769986) / 29.530588853);
    let s0 = 2415021.0769986 + k * 29.530588853;
    let day = jd - INT(s0) + 1;
    if (day <= 0) day += 30;
    if (day > 30) day -= 30;
    
    let lunarMonth = ((k + 11) % 12) + 1;
    let lunarDay = INT(day);
    if (lunarDay === 0) lunarDay = 1;
    
    return { day: lunarDay, month: lunarMonth, year: y };
  }

  function getHolidayInfo(d, m, y) {
    const solarKey = String(m).padStart(2, '0') + '-' + String(d).padStart(2, '0');
    if (SOLAR_HOLIDAYS[solarKey]) {
      return { name: SOLAR_HOLIDAYS[solarKey], isSolar: true };
    }

    const lunar = getLunarDate(d, m, y);
    const lunarKey = String(lunar.month).padStart(2, '0') + '-' + String(lunar.day).padStart(2, '0');
    if (LUNAR_HOLIDAYS[lunarKey]) {
      return { name: LUNAR_HOLIDAYS[lunarKey], isSolar: false, lunar };
    }

    return null;
  }

  // ===== Firebase Realtime Database =====
  const firebaseConfig = {
    apiKey: "AIzaSyDmOuXoqmdiY11wh5qXvywkTD5p4Zuq6gQ",
    authDomain: "todo-4607d.firebaseapp.com",
    databaseURL: "https://todo-4607d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todo-4607d",
    storageBucket: "todo-4607d.firebasestorage.app",
    messagingSenderId: "77478705142",
    appId: "1:77478705142:web:16365dbde61938eeffb9d7",
    measurementId: "G-1ZXG30G6EN"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  let tasks = {};
  let dayColors = {}; // { 'YYYY-MM-DD': '#hexColor' }
  let dayImages = {}; // { 'YYYY-MM-DD': 'url or base64' }
  let syncStatus = 'Đang kết nối...';
  let parsedImportTasks = [];

  function toKey(d) {
    return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
  }

  // Lắng nghe dữ liệu công việc realtime
  db.ref('tasks').on('value', snap => {
    tasks = snap.val() || {};
    syncStatus = 'Đã đồng bộ ✓';
    render();
  }, err => {
    syncStatus = 'Lỗi kết nối: ' + err.message;
  });

  // Lắng nghe màu nền riêng của từng ô ngày realtime
  db.ref('dayColors').on('value', snap => {
    dayColors = snap.val() || {};
    renderCalendar();
  });

  // Lắng nghe ảnh nền riêng của từng ô ngày realtime
  db.ref('dayImages').on('value', snap => {
    dayImages = snap.val() || {};
    renderCalendar();
  });

  function save() {
    syncStatus = 'Đang lưu...';
    db.ref('tasks').set(tasks)
      .then(() => { syncStatus = 'Đã đồng bộ ✓'; updateSyncStatus(); })
      .catch(e => { syncStatus = 'Lỗi: ' + e.message; updateSyncStatus(); });
    updateSyncStatus();
  }

  function saveDayColors() {
    db.ref('dayColors').set(dayColors);
  }

  function saveDayImages() {
    db.ref('dayImages').set(dayImages);
  }

  function updateSyncStatus() {
    const el = document.getElementById('syncStatus');
    if (el) el.textContent = syncStatus;
  }

  function getTasks(key) { return tasks[key] || []; }

  function fmtDate(key) {
    if (!key) return '';
    const parts = key.split('-').map(Number);
    if (parts.length !== 3) return key;
    const [y,m,d] = parts;
    const days = ['Chủ nhật','Thứ hai','Thứ ba','Thứ tư','Thứ năm','Thứ sáu','Thứ bảy'];
    const dt = new Date(y, m-1, d);
    const holiday = getHolidayInfo(d, m, y);
    const holidayText = holiday ? ` (${holiday.name})` : '';
    return days[dt.getDay()] + ', ' + d + '/' + m + '/' + y + holidayText;
  }

  function render() {
    renderCalendar();
    renderSideTaskList();
    renderPopupTasks();
    renderStats();
    updateSyncStatus();
  }

  // ===== Render Lịch Tháng Chính (Có màu nền / ảnh nền riêng từng ô + ngày lễ) =====
  function renderCalendar() {
    const y = currentDate.getFullYear(), m = currentDate.getMonth();
    document.getElementById('calTitle').textContent = MONTHS[m] + ' ' + y;

    const first = new Date(y, m, 1);
    let startDay = first.getDay() - 1;
    if (startDay < 0) startDay = 6;

    const daysInMonth = new Date(y, m+1, 0).getDate();
    const todayKey = toKey(new Date());
    const grid = document.getElementById('daysGrid');
    grid.innerHTML = '';

    for (let i = 0; i < startDay; i++) {
      grid.insertAdjacentHTML('beforeend', '<div class="day empty"></div>');
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const key = y + '-' + String(m+1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
      const dayTasks = getTasks(key);
      const dots = dayTasks.slice(0, 5).map(t => {
        let c = 'dot';
        if (t.done) c += ' done';
        else if (t.priority === 'high') c += ' high';
        return '<div class="' + c + '"></div>';
      }).join('');

      const lunar = getLunarDate(d, m+1, y);
      const holiday = getHolidayInfo(d, m+1, y);
      const holidayBadge = holiday ? `<div class="holiday-badge" title="${holiday.name}">${holiday.name}</div>` : '';
      const holidayClass = holiday ? ' is-holiday' : '';

      // Tùy biến màu hoặc ảnh nền riêng cho từng ô ngày
      const customImg = dayImages[key] || '';
      const customColor = dayColors[key] || '';
      let customStyle = '';
      let imgClass = '';

      if (customImg) {
        imgClass = ' has-bg-img';
        customStyle = `style="background-image: linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.65)), url('${customImg}'); border-color: rgba(255,255,255,0.25);"`;
      } else if (customColor) {
        customStyle = `style="background-color:${customColor}; border-color:${customColor};"`;
      } else if (holiday) {
        imgClass = ' has-bg-img';
      }

      const cls = 'day' + imgClass + holidayClass + (key === todayKey ? ' today' : '') + (key === selectedDate ? ' selected' : '');
      
      grid.insertAdjacentHTML('beforeend',
        `<div class="${cls}" ${customStyle} onclick="onDayClick('${key}')" oncontextmenu="handleDayContextMenu(event, '${key}')" title="Chuột trái: Mở chi tiết | Chuột phải: Đổi màu/ảnh ô ngày này">
          <div class="day-top-row">
            <span class="d-num">${d}</span>
            <span class="lunar-num">${lunar.day}/${lunar.month}</span>
          </div>
          ${holidayBadge}
          <div class="dots">${dots}</div>
        </div>`);
    }
  }

  function onDayClick(key) {
    selectedDate = key;
    render();
    openDayDetailModal();
  }

  function openDayDetailModal() {
    document.getElementById('dayDetailModal').classList.add('active');
    renderPopupTasks();
    if (currentPopupView === 'timeline') {
      scrollToRelevantHour();
    }
  }

  function closeDayDetailModal() {
    document.getElementById('dayDetailModal').classList.remove('active');
  }

  // Đổi màu nền cho ngày đang chọn
  function setDayBgColor(color) {
    if (!color) {
      delete dayColors[selectedDate];
    } else {
      dayColors[selectedDate] = color;
      delete dayImages[selectedDate]; // Bỏ ảnh nếu chọn màu
      saveDayImages();
    }
    saveDayColors();
    renderCalendar();
  }

  // Đổi màu nền từ menu chuột phải
  function handleDayContextMenu(e, dateKey) {
    e.preventDefault();
    contextTargetDateKey = dateKey;
    selectedDate = dateKey;
    render();

    const menu = document.getElementById('contextColorMenu');
    document.getElementById('contextColorTitle').textContent = 'Tùy biến ô ngày: ' + dateKey;
    menu.style.left = `${Math.min(e.clientX, window.innerWidth - 220)}px`;
    menu.style.top = `${Math.min(e.clientY, window.innerHeight - 120)}px`;
    menu.classList.add('active');
  }

  function setDayBgColorContext(color) {
    const key = contextTargetDateKey || selectedDate;
    if (!color) {
      delete dayColors[key];
    } else {
      dayColors[key] = color;
      delete dayImages[key];
      saveDayImages();
    }
    saveDayColors();
    renderCalendar();
    document.getElementById('contextColorMenu').classList.remove('active');
  }

  // ===== TÙY BIẾN ẢNH NỀN CHO Ô NGÀY =====
  function openDayImageModal(dateKey) {
    activeImageModalDateKey = dateKey || selectedDate;
    document.getElementById('imgModalDateLabel').textContent = activeImageModalDateKey;
    document.getElementById('contextColorMenu').classList.remove('active');
    
    const existingImg = dayImages[activeImageModalDateKey] || '';
    tempDayImageBase64 = existingImg;
    document.getElementById('dayImageUrlInput').value = existingImg.startsWith('data:') ? '' : existingImg;
    document.getElementById('dayImageFileInput').value = '';
    updateDayImagePreview(existingImg);

    document.getElementById('dayImageModal').classList.add('active');
  }

  function closeDayImageModal() {
    document.getElementById('dayImageModal').classList.remove('active');
    tempDayImageBase64 = '';
  }

  function updateDayImagePreview(src) {
    const preview = document.getElementById('dayImgPreviewBox');
    if (src) {
      preview.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('${src}')`;
      preview.innerHTML = `<span style="color:#fff;font-weight:600;text-shadow:0 1px 4px #000;">Xem trước: Ngày ${activeImageModalDateKey}</span>`;
    } else {
      preview.style.backgroundImage = 'none';
      preview.innerHTML = '<span>Chưa chọn hình ảnh</span>';
    }
  }

  function handleDayImageUrlInput() {
    const url = document.getElementById('dayImageUrlInput').value.trim();
    tempDayImageBase64 = url;
    updateDayImagePreview(url);
  }

  function handleDayImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
      const img = new Image();
      img.onload = function() {
        // Nén ảnh bằng Canvas tối đa 400x400 để load mượt & đồng bộ nhẹ
        const canvas = document.createElement('canvas');
        const maxDim = 400;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxDim) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          }
        } else {
          if (height > maxDim) {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.82);
        tempDayImageBase64 = compressedBase64;
        document.getElementById('dayImageUrlInput').value = '';
        updateDayImagePreview(compressedBase64);
      };
      img.src = evt.target.result;
    };
    reader.readAsDataURL(file);
  }

  function applyDayImage() {
    if (!tempDayImageBase64) {
      alert('Vui lòng chọn hoặc dán đường dẫn hình ảnh trước!');
      return;
    }
    dayImages[activeImageModalDateKey] = tempDayImageBase64;
    saveDayImages();
    renderCalendar();
    closeDayImageModal();
  }

  function removeDayImage() {
    delete dayImages[activeImageModalDateKey];
    saveDayImages();
    renderCalendar();
    closeDayImageModal();
  }

  // Tự động đóng menu chuột phải khi click ra ngoài
  document.addEventListener('click', (e) => {
    const menu = document.getElementById('contextColorMenu');
    if (menu && !menu.contains(e.target)) {
      menu.classList.remove('active');
    }
  });

  function renderSideTaskList() {
    document.getElementById('taskDate').textContent = fmtDate(selectedDate);
    const list = document.getElementById('sideTaskList');
    const dayTasks = getTasks(selectedDate);

    if (dayTasks.length === 0) {
      list.innerHTML = '<div class="empty-tasks">Không có công việc nào cho ngày này</div>';
      return;
    }

    list.innerHTML = dayTasks.map((t, i) =>
      `<div class="task ${t.done ? 'done' : ''}">
        <input type="checkbox" ${t.done ? 'checked' : ''} onchange="toggleTask(${i})">
        <div class="task-info">
          <div class="task-title">${esc(t.title)}</div>
          <div class="task-meta">
            ${t.time ? '<span class="task-time">🕐 ' + t.time + '</span>' : ''}
            <span class="task-priority p-${t.priority || 'medium'}">${PRIORITIES[t.priority] || 'Vừa'}</span>
          </div>
        </div>
        <button class="btn-del" onclick="deleteTask(${i})" title="Xóa">✕</button>
      </div>`
    ).join('');
  }

  function renderPopupTasks() {
    const titleEl = document.getElementById('modalDayTitle');
    if (titleEl) titleEl.textContent = fmtDate(selectedDate);

    if (currentPopupView === 'timeline') {
      document.getElementById('timelineContainer').style.display = 'block';
      document.getElementById('popupTaskList').style.display = 'none';
      renderTimelineView();
    } else {
      document.getElementById('timelineContainer').style.display = 'none';
      document.getElementById('popupTaskList').style.display = 'flex';
      renderPopupListView();
    }
  }

  function switchPopupView(mode) {
    currentPopupView = mode;
    document.getElementById('btnViewTimeline').classList.toggle('active', mode === 'timeline');
    document.getElementById('btnViewList').classList.toggle('active', mode === 'list');
    renderPopupTasks();
    if (mode === 'timeline') scrollToRelevantHour();
  }

  function renderTimelineView() {
    const dayTasks = getTasks(selectedDate);
    const untimedSec = document.getElementById('untimedSection');
    const untimedList = document.getElementById('untimedTaskList');
    const hoursList = document.getElementById('timelineHoursList');

    const untimedTasks = [];
    const hourlyTasks = Array.from({ length: 24 }, () => []);

    dayTasks.forEach((t, originalIndex) => {
      const taskWithIdx = { ...t, originalIndex };
      if (!t.time) {
        untimedTasks.push(taskWithIdx);
      } else {
        const hour = parseInt(t.time.split(':')[0], 10);
        if (!isNaN(hour) && hour >= 0 && hour <= 23) {
          hourlyTasks[hour].push(taskWithIdx);
        } else {
          untimedTasks.push(taskWithIdx);
        }
      }
    });

    if (untimedTasks.length > 0) {
      untimedSec.style.display = 'block';
      untimedList.innerHTML = untimedTasks.map(t => renderTaskCardHTML(t, selectedDate)).join('');
    } else {
      untimedSec.style.display = 'none';
      untimedList.innerHTML = '';
    }

    const todayKey = toKey(new Date());
    const isToday = selectedDate === todayKey;
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    let html = '';
    for (let h = 0; h < 24; h++) {
      const hourStr = String(h).padStart(2, '0') + ':00';
      const tasksInThisHour = hourlyTasks[h];

      let markerHTML = '';
      if (isToday && h === currentHour) {
        const topPercent = (currentMinute / 60) * 100;
        markerHTML = `<div class="current-time-marker" style="top:${topPercent}%;" title="Thời gian hiện tại: ${String(currentHour).padStart(2,'0')}:${String(currentMinute).padStart(2,'0')}"></div>`;
      }

      html += `
        <div class="timeline-row" id="timeRow_${h}">
          ${markerHTML}
          <div class="timeline-hour">${hourStr}</div>
          <div class="timeline-slot" onclick="handleSlotClick(event, '${hourStr}')">
            ${tasksInThisHour.map(t => renderTaskCardHTML(t, selectedDate)).join('')}
            <div class="slot-empty-btn" onclick="event.stopPropagation(); quickAddAtHour('${hourStr}')">+ Thêm lúc ${hourStr}</div>
          </div>
        </div>
      `;
    }

    hoursList.innerHTML = html;
  }

  function renderTaskCardHTML(t, dateKey) {
    const pClass = 'p-' + (t.priority || 'medium');
    const pLabel = PRIORITIES[t.priority] || 'Vừa';
    const isDone = t.done ? ' done' : '';

    return `
      <div class="timeline-task ${pClass}${isDone}" onclick="openEditTaskModal('${dateKey}', ${t.originalIndex})">
        <input type="checkbox" ${t.done ? 'checked' : ''} onclick="event.stopPropagation();" onchange="toggleTaskByIndex('${dateKey}', ${t.originalIndex})">
        <div class="task-info">
          <div class="task-title">${esc(t.title)}</div>
          <div class="task-meta">
            ${t.time ? `<span class="task-time-badge">🕐 ${t.time}</span>` : ''}
            <span class="task-priority ${pClass}">${pLabel}</span>
          </div>
        </div>
        <div class="task-actions" onclick="event.stopPropagation();">
          <button class="btn-icon" onclick="openEditTaskModal('${dateKey}', ${t.originalIndex})" title="Chỉnh sửa công việc">✏</button>
          <button class="btn-icon del" onclick="deleteTaskByIndex('${dateKey}', ${t.originalIndex})" title="Xóa">✕</button>
        </div>
      </div>
    `;
  }

  function renderPopupListView() {
    const list = document.getElementById('popupTaskList');
    const dayTasks = getTasks(selectedDate);

    if (dayTasks.length === 0) {
      list.innerHTML = '<div class="empty-tasks">Không có công việc nào cho ngày này</div>';
      return;
    }

    list.innerHTML = dayTasks.map((t, i) => renderTaskCardHTML({ ...t, originalIndex: i }, selectedDate)).join('');
  }

  function renderStats() {
    let total = 0, done = 0;
    Object.values(tasks).forEach(arr => {
      if (Array.isArray(arr)) {
        total += arr.length;
        done += arr.filter(t => t.done).length;
      }
    });
    document.getElementById('statTotal').textContent = total;
    document.getElementById('statDone').textContent = done;
    document.getElementById('statPending').textContent = total - done;
  }

  function esc(s) {
    if (s === undefined || s === null) return '';
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function changeMonth(delta) {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + delta, 1);
    render();
  }

  function goToday() {
    currentDate = new Date();
    selectedDate = toKey(new Date());
    render();
  }

  function goTodayModal() {
    currentDate = new Date();
    selectedDate = toKey(new Date());
    render();
    if (currentPopupView === 'timeline') {
      scrollToRelevantHour();
    }
  }

  function changeSelectedDay(delta) {
    const parts = selectedDate.split('-').map(Number);
    const d = new Date(parts[0], parts[1]-1, parts[2] + delta);
    selectedDate = toKey(d);
    currentDate = new Date(d.getFullYear(), d.getMonth(), 1);
    render();
    if (currentPopupView === 'timeline') {
      scrollToRelevantHour();
    }
  }

  function scrollToRelevantHour() {
    setTimeout(() => {
      const container = document.getElementById('timelineContainer');
      if (!container) return;

      const now = new Date();
      let targetHour = selectedDate === toKey(now) ? now.getHours() : 8;

      const dayTasks = getTasks(selectedDate);
      const times = dayTasks.map(t => t.time).filter(Boolean).map(tm => parseInt(tm.split(':')[0], 10));
      if (times.length > 0) {
        targetHour = Math.min(...times);
      }

      const row = document.getElementById(`timeRow_${targetHour}`);
      if (row) {
        container.scrollTo({ top: row.offsetTop - 10, behavior: 'smooth' });
      }
    }, 100);
  }

  function addSideTask() {
    const input = document.getElementById('sideTaskInput');
    const title = input.value.trim();
    if (!title) return;
    const time = document.getElementById('sideTaskTime').value;
    const priority = document.getElementById('sideTaskPriority').value;
    if (!tasks[selectedDate]) tasks[selectedDate] = [];
    tasks[selectedDate].push({ title, time, priority, done: false });
    save();
    input.value = '';
    document.getElementById('sideTaskTime').value = '';
    render();
  }

  function addPopupTask() {
    const input = document.getElementById('popupTaskInput');
    const title = input.value.trim();
    if (!title) return;
    const time = document.getElementById('popupTaskTime').value;
    const priority = document.getElementById('popupTaskPriority').value;
    if (!tasks[selectedDate]) tasks[selectedDate] = [];
    tasks[selectedDate].push({ title, time, priority, done: false });
    save();
    input.value = '';
    document.getElementById('popupTaskTime').value = '';
    render();
  }

  function quickAddAtHour(hourStr) {
    document.getElementById('popupTaskTime').value = hourStr;
    const input = document.getElementById('popupTaskInput');
    input.focus();
    input.placeholder = `Việc lúc ${hourStr}...`;
  }

  function handleSlotClick(e, hourStr) {
    if (e.target.classList.contains('timeline-slot')) {
      quickAddAtHour(hourStr);
    }
  }

  function toggleTask(i) {
    tasks[selectedDate][i].done = !tasks[selectedDate][i].done;
    save();
    render();
  }

  function deleteTask(i) {
    tasks[selectedDate].splice(i, 1);
    if (tasks[selectedDate].length === 0) delete tasks[selectedDate];
    save();
    render();
  }

  function toggleTaskByIndex(dateKey, idx) {
    if (tasks[dateKey] && tasks[dateKey][idx]) {
      tasks[dateKey][idx].done = !tasks[dateKey][idx].done;
      save();
      render();
    }
  }

  function deleteTaskByIndex(dateKey, idx) {
    if (tasks[dateKey]) {
      tasks[dateKey].splice(idx, 1);
      if (tasks[dateKey].length === 0) delete tasks[dateKey];
      save();
      render();
    }
  }

  // ===== MODAL CHỈNH SỬA CHI TIẾT CÔNG VIỆC =====
  function openEditTaskModal(dateKey, idx) {
    if (!tasks[dateKey] || !tasks[dateKey][idx]) return;
    const task = tasks[dateKey][idx];
    currentEditingTask = { dateKey, index: idx, originalTask: { ...task } };

    document.getElementById('editTaskTitle').value = task.title || '';
    document.getElementById('editTaskDate').value = dateKey;
    document.getElementById('editTaskTime').value = task.time || '';
    document.getElementById('editTaskPriority').value = task.priority || 'medium';
    document.getElementById('editTaskDone').checked = !!task.done;

    document.getElementById('editTaskModal').classList.add('active');
  }

  function closeEditTaskModal() {
    document.getElementById('editTaskModal').classList.remove('active');
    currentEditingTask = null;
  }

  function saveEditedTask() {
    if (!currentEditingTask) return;
    const newTitle = document.getElementById('editTaskTitle').value.trim();
    if (!newTitle) {
      alert('Vui lòng nhập tên công việc!');
      return;
    }

    const newDate = document.getElementById('editTaskDate').value || currentEditingTask.dateKey;
    const newTime = document.getElementById('editTaskTime').value;
    const newPriority = document.getElementById('editTaskPriority').value;
    const newDone = document.getElementById('editTaskDone').checked;

    const oldDate = currentEditingTask.dateKey;
    const oldIndex = currentEditingTask.index;

    if (tasks[oldDate]) {
      tasks[oldDate].splice(oldIndex, 1);
      if (tasks[oldDate].length === 0) delete tasks[oldDate];
    }

    if (!tasks[newDate]) tasks[newDate] = [];
    tasks[newDate].push({
      title: newTitle,
      time: newTime,
      priority: newPriority,
      done: newDone
    });

    save();
    selectedDate = newDate;
    const [y, m] = newDate.split('-').map(Number);
    currentDate = new Date(y, m-1, 1);

    closeEditTaskModal();
    render();
  }

  function deleteEditingTask() {
    if (!currentEditingTask) return;
    if (confirm('Bạn có chắc muốn xóa công việc này?')) {
      const { dateKey, index } = currentEditingTask;
      if (tasks[dateKey]) {
        tasks[dateKey].splice(index, 1);
        if (tasks[dateKey].length === 0) delete tasks[dateKey];
        save();
        closeEditTaskModal();
        render();
      }
    }
  }

  // ===== MODAL XÓA DỮ LIỆU TOÀN BỘ / THEO NGÀY CHỈ ĐỊNH =====
  function openDeleteModal() {
    document.getElementById('delTargetDate').value = selectedDate;
    document.getElementById('delRangeStart').value = selectedDate;
    document.getElementById('delRangeEnd').value = selectedDate;
    document.getElementById('deleteModal').classList.add('active');
  }

  function closeDeleteModal() {
    document.getElementById('deleteModal').classList.remove('active');
  }

  function toggleDeleteTypeUI() {
    const type = document.querySelector('input[name="deleteType"]:checked').value;
    document.getElementById('deleteSingleDateInput').style.display = type === 'singleDate' ? 'block' : 'none';
    document.getElementById('deleteRangeDateInput').style.display = type === 'dateRange' ? 'flex' : 'none';
  }

  function confirmExecuteDelete() {
    const type = document.querySelector('input[name="deleteType"]:checked').value;

    if (type === 'all') {
      if (confirm('CẢNH BÁO CAO: Bạn có CHẮC CHẮN muốn XÓA TOÀN BỘ tất cả công việc của tất cả các ngày không? Dữ liệu không thể khôi phục!')) {
        tasks = {};
        dayColors = {};
        dayImages = {};
        save();
        saveDayColors();
        saveDayImages();
        render();
        closeDeleteModal();
        alert('Đã xóa toàn bộ dữ liệu lịch!');
      }
      return;
    }

    if (type === 'singleDate') {
      const d = document.getElementById('delTargetDate').value;
      if (!d) { alert('Vui lòng chọn ngày cần xóa!'); return; }
      const count = getTasks(d).length;
      if (count === 0) { alert(`Không có công việc nào trong ngày ${d}!`); return; }
      if (confirm(`Bạn có chắc muốn xóa ${count} công việc của ngày ${d}?`)) {
        delete tasks[d];
        save();
        render();
        closeDeleteModal();
        alert(`Đã xóa công việc của ngày ${d}!`);
      }
      return;
    }

    if (type === 'dateRange') {
      const start = document.getElementById('delRangeStart').value;
      const end = document.getElementById('delRangeEnd').value;
      if (!start || !end) { alert('Vui lòng chọn đủ ngày bắt đầu và kết thúc!'); return; }
      if (start > end) { alert('Ngày bắt đầu phải nhỏ hơn hoặc bằng ngày kết thúc!'); return; }

      let deletedDays = 0, deletedTasks = 0;
      Object.keys(tasks).forEach(k => {
        if (k >= start && k <= end) {
          deletedTasks += (tasks[k] || []).length;
          delete tasks[k];
          deletedDays++;
        }
      });

      if (deletedTasks === 0) {
        alert('Không tìm thấy công việc nào trong khoảng ngày này!');
        return;
      }

      save();
      render();
      closeDeleteModal();
      alert(`Đã xóa ${deletedTasks} công việc trong khoảng từ ${start} đến ${end}!`);
      return;
    }

    if (type === 'completedOnly') {
      let count = 0;
      Object.keys(tasks).forEach(k => {
        const remaining = (tasks[k] || []).filter(t => !t.done);
        count += (tasks[k].length - remaining.length);
        if (remaining.length === 0) {
          delete tasks[k];
        } else {
          tasks[k] = remaining;
        }
      });

      if (count === 0) {
        alert('Không có công việc đã hoàn thành nào để dọn dẹp!');
        return;
      }

      save();
      render();
      closeDeleteModal();
      alert(`Đã dọn dẹp xóa bỏ ${count} công việc đã hoàn thành!`);
    }
  }

  // ===== TIỆN ÍCH DÁN NHANH VÀO NGÀY ĐANG CHỌN =====
  function quickPasteToCurrentDay() {
    openExcelModal();
    switchExcelTab('paste');
    const radioTarget = document.querySelector('input[name="importMode"][value="targetCurrent"]');
    if (radioTarget) radioTarget.checked = true;
  }

  // ===== XỬ LÝ MODAL & TABS NHẬP / XUẤT EXCEL =====
  function openExcelModal() {
    document.getElementById('excelModal').classList.add('active');
    document.getElementById('currentDateOptionLabel').textContent = fmtDate(selectedDate);
    document.getElementById('exportSelectedDateLabel').textContent = fmtDate(selectedDate);
  }

  function closeExcelModal() {
    document.getElementById('excelModal').classList.remove('active');
    parsedImportTasks = [];
    document.getElementById('excelFileInput').value = '';
    document.getElementById('pasteInput').value = '';
    document.getElementById('previewSection').style.display = 'none';
    document.getElementById('btnConfirmImport').style.display = 'none';
  }

  function switchExcelTab(tab) {
    document.getElementById('tabFileBtn').classList.toggle('active', tab === 'file');
    document.getElementById('tabPasteBtn').classList.toggle('active', tab === 'paste');
    document.getElementById('tabExportBtn').classList.toggle('active', tab === 'export');

    document.getElementById('tabFileContent').style.display = tab === 'file' ? 'block' : 'none';
    document.getElementById('tabPasteContent').style.display = tab === 'paste' ? 'block' : 'none';
    document.getElementById('tabExportContent').style.display = tab === 'export' ? 'flex' : 'none';

    document.getElementById('importOptionsSection').style.display = tab === 'export' ? 'none' : 'flex';
  }

  const dropZone = document.getElementById('dropZone');
  ['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => { e.preventDefault(); dropZone.classList.add('dragover'); }, false);
  });
  ['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => { e.preventDefault(); dropZone.classList.remove('dragover'); }, false);
  });
  dropZone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length) handleFiles(files[0]);
  });

  function handleExcelFileSelect(e) {
    const file = e.target.files[0];
    if (file) handleFiles(file);
  }

  function handleFiles(file) {
    const reader = new FileReader();
    const isText = file.name.endsWith('.csv') || file.name.endsWith('.txt');

    reader.onload = function(e) {
      try {
        let wb;
        if (isText) {
          wb = XLSX.read(e.target.result, { type: 'string', raw: false });
        } else {
          const data = new Uint8Array(e.target.result);
          wb = XLSX.read(data, { type: 'array', cellDates: true });
        }
        processWorkbook(wb);
      } catch (err) {
        alert('Lỗi khi đọc file Excel/CSV: ' + err.message);
      }
    };

    if (isText) {
      reader.readAsText(file, 'UTF-8');
    } else {
      reader.readAsArrayBuffer(file);
    }
  }

  function processWorkbook(wb) {
    const firstSheetName = wb.SheetNames[0];
    const worksheet = wb.Sheets[firstSheetName];
    const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });
    if (!rows || rows.length === 0) {
      alert('File không có dữ liệu!');
      return;
    }
    parseRowsToTasks(rows);
  }

  function handlePasteInput() {
    const text = document.getElementById('pasteInput').value.trim();
    if (!text) {
      parsedImportTasks = [];
      renderImportPreview([]);
      return;
    }

    const lines = text.split(/\r?\n/);
    const rows = lines.map(line => {
      if (line.includes('\t')) return line.split('\t');
      return parseCSVLine(line);
    });

    parseRowsToTasks(rows);
  }

  function parseCSVLine(text) {
    const result = [];
    let cur = '', inQuote = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (c === '"') {
        inQuote = !inQuote;
      } else if (c === ',' && !inQuote) {
        result.push(cur.trim());
        cur = '';
      } else {
        cur += c;
      }
    }
    result.push(cur.trim());
    return result;
  }

  function parseRowsToTasks(rows) {
    parsedImportTasks = [];
    if (!rows || rows.length === 0) return;

    let startIndex = 0;
    let colMap = { date: -1, title: -1, time: -1, priority: -1, done: -1 };

    const firstRow = rows[0].map(c => String(c).toLowerCase().trim());
    let hasHeader = false;

    firstRow.forEach((col, idx) => {
      if (col.includes('ngày') || col.includes('ngay') || col.includes('date')) { colMap.date = idx; hasHeader = true; }
      else if (col.includes('tiêu đề') || col.includes('công việc') || col.includes('task') || col.includes('title') || col.includes('nội dung') || col.includes('viec')) { colMap.title = idx; hasHeader = true; }
      else if (col.includes('giờ') || col.includes('thời gian') || col.includes('time') || col.includes('gio')) { colMap.time = idx; hasHeader = true; }
      else if (col.includes('ưu tiên') || col.includes('mức độ') || col.includes('priority') || col.includes('uu tien')) { colMap.priority = idx; hasHeader = true; }
      else if (col.includes('hoàn thành') || col.includes('trạng thái') || col.includes('done') || col.includes('status') || col.includes('xong')) { colMap.done = idx; hasHeader = true; }
    });

    if (hasHeader) {
      startIndex = 1;
      if (colMap.title === -1 && rows[0].length >= 1) colMap.title = (colMap.date === 0 ? 1 : 0);
    } else {
      const totalCols = rows[0].length;
      if (totalCols === 1) {
        colMap = { date: -1, title: 0, time: -1, priority: -1, done: -1 };
      } else if (totalCols === 2) {
        if (isValidDateString(rows[0][0])) {
          colMap = { date: 0, title: 1, time: -1, priority: -1, done: -1 };
        } else {
          colMap = { date: -1, title: 0, time: 1, priority: -1, done: -1 };
        }
      } else {
        colMap = { date: 0, title: 1, time: 2, priority: 3, done: 4 };
      }
    }

    for (let i = startIndex; i < rows.length; i++) {
      const row = rows[i];
      if (!row || row.length === 0 || row.every(cell => !cell || String(cell).trim() === '')) continue;

      let rawDate = colMap.date !== -1 ? row[colMap.date] : '';
      let rawTitle = colMap.title !== -1 ? row[colMap.title] : (row[0] || '');
      let rawTime = colMap.time !== -1 ? row[colMap.time] : '';
      let rawPriority = colMap.priority !== -1 ? row[colMap.priority] : '';
      let rawDone = colMap.done !== -1 ? row[colMap.done] : '';

      const title = String(rawTitle || '').trim();
      if (!title) continue;

      const dateKey = normalizeDate(rawDate);
      const time = normalizeTime(rawTime);
      const priority = normalizePriority(rawPriority);
      const done = normalizeDone(rawDone);

      parsedImportTasks.push({
        date: dateKey,
        title: title,
        time: time,
        priority: priority,
        done: done
      });
    }

    renderImportPreview(parsedImportTasks);
  }

  function isValidDateString(str) {
    if (!str) return false;
    if (str instanceof Date) return true;
    const s = String(str).trim();
    return /\d{4}[-/.]\d{1,2}[-/.]\d{1,2}/.test(s) || /\d{1,2}[-/.]\d{1,2}[-/.]\d{4}/.test(s);
  }

  function normalizeDate(val) {
    if (!val) return '';
    if (val instanceof Date && !isNaN(val)) return toKey(val);
    if (typeof val === 'number') {
      const d = new Date(Math.round((val - 25569) * 86400 * 1000));
      if (!isNaN(d)) return toKey(d);
    }
    const str = String(val).trim();
    let m = str.match(/^(\d{4})[-/. ](\d{1,2})[-/. ](\d{1,2})/);
    if (m) return `${m[1]}-${String(m[2]).padStart(2,'0')}-${String(m[3]).padStart(2,'0')}`;
    m = str.match(/^(\d{1,2})[-/. ](\d{1,2})[-/. ](\d{4})/);
    if (m) return `${m[3]}-${String(m[2]).padStart(2,'0')}-${String(m[1]).padStart(2,'0')}`;
    return '';
  }

  function normalizeTime(val) {
    if (!val) return '';
    if (typeof val === 'number') {
      const totalSeconds = Math.round(val * 86400);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`;
    }
    const str = String(val).trim();
    const m = str.match(/^(\d{1,2})[:.](\d{1,2})/);
    if (m) return `${String(m[1]).padStart(2,'0')}:${String(m[2]).padStart(2,'0')}`;
    return '';
  }

  function normalizePriority(val) {
    if (!val) return 'medium';
    const s = String(val).toLowerCase().trim();
    if (s === 'high' || s === 'cao' || s === 'gấp' || s === 'khẩn' || s === '1') return 'high';
    if (s === 'low' || s === 'thấp' || s === 'nhẹ' || s === '3') return 'low';
    return 'medium';
  }

  function normalizeDone(val) {
    if (!val) return false;
    if (typeof val === 'boolean') return val;
    const s = String(val).toLowerCase().trim();
    return s === '1' || s === 'true' || s === 'x' || s === 'v' || s === 'rồi' || s === 'xong' || s === 'hoàn thành' || s === 'done' || s === 'yes';
  }

  function renderImportPreview(list) {
    const previewSec = document.getElementById('previewSection');
    const btnConfirm = document.getElementById('btnConfirmImport');
    const tbody = document.getElementById('previewTableBody');

    if (!list || list.length === 0) {
      previewSec.style.display = 'none';
      btnConfirm.style.display = 'none';
      tbody.innerHTML = '';
      return;
    }

    previewSec.style.display = 'flex';
    btnConfirm.style.display = 'inline-flex';
    document.getElementById('previewCount').textContent = list.length + ' công việc';

    tbody.innerHTML = list.map(item => {
      const displayDate = item.date || `<i style="color:var(--silver-dim);">(Dùng ngày chọn: ${selectedDate})</i>`;
      const pText = PRIORITIES[item.priority] || 'Vừa';
      const pClass = 'p-' + item.priority;
      const statusText = item.done ? '<span style="color:#4ade80;">✓ Đã xong</span>' : '<span style="color:var(--text-dim);">○ Chưa xong</span>';

      return `<tr>
        <td>${displayDate}</td>
        <td style="font-weight:500;">${esc(item.title)}</td>
        <td>${item.time ? '🕐 ' + item.time : '-'}</td>
        <td><span class="task-priority ${pClass}">${pText}</span></td>
        <td>${statusText}</td>
      </tr>`;
    }).join('');
  }

  function confirmImport() {
    if (parsedImportTasks.length === 0) {
      alert('Không có dữ liệu hợp lệ để nhập!');
      return;
    }

    const mode = document.querySelector('input[name="importMode"]:checked').value;
    let countAdded = 0;

    if (mode === 'replace') {
      if (!confirm('CẢNH BÁO: Chế độ "Ghi đè hoàn toàn" sẽ XÓA TẤT CẢ công việc hiện có trên lịch. Bạn có chắc chắn muốn tiếp tục?')) {
        return;
      }
      tasks = {};
    }

    parsedImportTasks.forEach(item => {
      let targetDate = item.date;
      if (!targetDate || mode === 'targetCurrent') {
        targetDate = selectedDate;
      }

      if (!tasks[targetDate]) tasks[targetDate] = [];
      tasks[targetDate].push({
        title: item.title,
        time: item.time || '',
        priority: item.priority || 'medium',
        done: item.done || false
      });
      countAdded++;
    });

    save();
    render();
    closeExcelModal();
    alert(`Đã nhập thành công ${countAdded} công việc vào Lịch!`);
  }

  function downloadExcelTemplate() {
    const templateData = [
      {
        "Ngày (YYYY-MM-DD hoặc DD/MM/YYYY)": "2026-08-19",
        "Tên công việc": "Họp triển khai kế hoạch tuần",
        "Giờ (HH:MM)": "08:30",
        "Ưu tiên (Cao/Vừa/Thấp)": "Cao",
        "Đã hoàn thành (1/0)": 0
      },
      {
        "Ngày (YYYY-MM-DD hoặc DD/MM/YYYY)": "2026-08-19",
        "Tên công việc": "Kiểm tra email khách hàng",
        "Giờ (HH:MM)": "11:00",
        "Ưu tiên (Cao/Vừa/Thấp)": "Vừa",
        "Đã hoàn thành (1/0)": 1
      },
      {
        "Ngày (YYYY-MM-DD hoặc DD/MM/YYYY)": "2026-08-20",
        "Tên công việc": "Gửi báo cáo định kỳ",
        "Giờ (HH:MM)": "16:00",
        "Ưu tiên (Cao/Vừa/Thấp)": "Thấp",
        "Đã hoàn thành (1/0)": 0
      }
    ];

    const ws = XLSX.utils.json_to_sheet(templateData);
    ws['!cols'] = [
      { wch: 32 },
      { wch: 35 },
      { wch: 15 },
      { wch: 22 },
      { wch: 20 }
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "MauCongViec");
    XLSX.writeFile(wb, "Mau_Nhap_Lich_Cong_Viec.xlsx");
  }

  function exportDataToExcel(scope) {
    const exportList = [];

    if (scope === 'selected') {
      const dayTasks = getTasks(selectedDate);
      if (dayTasks.length === 0) {
        alert('Không có công việc nào trong ngày đang chọn để xuất!');
        return;
      }
      dayTasks.forEach(t => {
        exportList.push({
          "Ngày": selectedDate,
          "Tên công việc": t.title,
          "Giờ": t.time || '',
          "Ưu tiên": PRIORITIES[t.priority] || 'Vừa',
          "Trạng thái": t.done ? 'Đã hoàn thành' : 'Chưa hoàn thành'
        });
      });
    } else {
      let total = 0;
      Object.keys(tasks).sort().forEach(dateKey => {
        const arr = tasks[dateKey];
        if (Array.isArray(arr)) {
          arr.forEach(t => {
            total++;
            exportList.push({
              "Ngày": dateKey,
              "Tên công việc": t.title,
              "Giờ": t.time || '',
              "Ưu tiên": PRIORITIES[t.priority] || 'Vừa',
              "Trạng thái": t.done ? 'Đã hoàn thành' : 'Chưa hoàn thành'
            });
          });
        }
      });

      if (total === 0) {
        alert('Chưa có công việc nào trong hệ thống để xuất!');
        return;
      }
    }

    const ws = XLSX.utils.json_to_sheet(exportList);
    ws['!cols'] = [{ wch: 15 }, { wch: 40 }, { wch: 12 }, { wch: 15 }, { wch: 18 }];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "LichCongViec");
    const fileName = scope === 'selected' ? `Lich_Cong_Viec_${selectedDate}.xlsx` : `Lich_Cong_Viec_Toan_Bo_${toKey(new Date())}.xlsx`;
    XLSX.writeFile(wb, fileName);
  }

  function exportDataToJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tasks, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `Backup_Lich_Cong_Viec_${toKey(new Date())}.json`);
    dlAnchorElem.click();
  }

  render();

  // ===== Thông báo việc cần làm =====
  let notified = new Set();
  updateNotiBtn();

  function updateNotiBtn() {
    const btn = document.getElementById('btnNoti');
    if (!btn) return;
    const on = 'Notification' in window && Notification.permission === 'granted';
    btn.textContent = on ? '🔔' : '🔕';
    btn.title = on ? 'Thông báo đang bật' : 'Bật thông báo';
  }

  function enableNotifications() {
    if (!('Notification' in window)) { alert('Thiết bị không hỗ trợ thông báo'); return; }
    Notification.requestPermission().then(p => {
      updateNotiBtn();
      if (p === 'granted') new Notification('Lịch Công Việc', { body: 'Đã bật thông báo ✓' });
    });
  }

  setInterval(() => {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    const todayKey = toKey(new Date());
    const now = new Date();
    const hhmm = String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0');
    getTasks(todayKey).forEach((t, i) => {
      if (t.time && !t.done && t.time <= hhmm) {
        const id = todayKey + ':' + i + ':' + t.time;
        if (!notified.has(id)) {
          notified.add(id);
          new Notification('⏰ ' + (t.priority === 'high' ? '🔴 Quan trọng: ' : '') + t.title, {
            body: 'Đến giờ làm: ' + t.time + ' hôm nay'
          });
        }
      }
    });
  }, 30000);
