import { useMemo } from "react";

export type PageTypographyProps = {
  headingFont?: string;
  bodyFont?: string;
  headingWeight?: string | number;
  bodyWeight?: string | number;
  primaryColor?: string;
  headingSize?: number;
  bodySize?: number;
  headingLetterSpacing?: number;
};

export type LandingPageCustomization = {
  headingFont?: string;
  bodyFont?: string;
  headingWeight?: string | number;
  bodyWeight?: string | number;
  primaryColor?: string;
  headingSize?: number;
  bodySize?: number;
  headingLetterSpacing?: number;
  customCss?: string;
};

export function splitTypographyProps<T extends Record<string, any>>(
  props: T & PageTypographyProps
): [PageTypographyProps, Omit<T, keyof PageTypographyProps>] {
  const {
    headingFont,
    bodyFont,
    headingWeight,
    bodyWeight,
    primaryColor,
    headingSize,
    bodySize,
    headingLetterSpacing,
    ...frameProps
  } = props;

  return [
    {
      headingFont,
      bodyFont,
      headingWeight,
      bodyWeight,
      primaryColor,
      headingSize,
      bodySize,
      headingLetterSpacing,
    },
    frameProps as Omit<T, keyof PageTypographyProps>,
  ];
}

export function usePageTypography(
  defaultRecipe: Record<string, any> = {},
  overrides: PageTypographyProps = {}
): LandingPageCustomization {
  return useMemo(() => {
    return {
      ...defaultRecipe,
      ...Object.fromEntries(
        Object.entries(overrides).filter(([_, v]) => v !== undefined)
      ),
    };
  }, [defaultRecipe, overrides]);
}

const CUSTOMIZATION_STYLE_ID = "threeui-customization-style";

export function applyPageCustomization(
  frame: HTMLIFrameElement | null,
  customization?: LandingPageCustomization
) {
  if (!frame || !customization) return;
  try {
    const doc = frame.contentDocument;
    if (!doc) return;

    let styleEl = doc.getElementById(CUSTOMIZATION_STYLE_ID) as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = doc.createElement("style");
      styleEl.id = CUSTOMIZATION_STYLE_ID;
      doc.head.appendChild(styleEl);
    }

    const rules: string[] = [];
    if (customization.primaryColor) {
      rules.push(`--pink: ${customization.primaryColor} !important;`);
      rules.push(`--pink-bright: ${customization.primaryColor} !important;`);
    }
    if (customization.headingFont) {
      rules.push(`--serif: "${customization.headingFont}", serif !important;`);
    }
    if (customization.bodyFont) {
      rules.push(`font-family: "${customization.bodyFont}", sans-serif !important;`);
    }

    styleEl.textContent = rules.length ? `:root { ${rules.join(" ")} }` : "";
  } catch (e) {
    // Cross-origin access might fail; postPageCustomization handles postMessage fallback
  }
}

export function postPageCustomization(
  frame: HTMLIFrameElement | null,
  customization?: LandingPageCustomization
) {
  if (!frame?.contentWindow || !customization) return;
  try {
    frame.contentWindow.postMessage(
      { type: "threeui-page-customization", customization },
      "*"
    );
  } catch (e) {
    // ignore
  }
}
