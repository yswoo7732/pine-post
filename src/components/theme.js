import { common } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const palette = {
  background: {
    default: "#fff",
  },
  primary: {
    main: "#000000",
    10: "#E6FAEE",
    20: "#CCF4DC",
    40: "#99E9B9",
    60: "#66DE97",
    80: "#33D374",
    100: "#00C851",
    120: "#00AA51",
    140: "#008636",
    160: "#006836",
    180: "#004A36",
  },
  secondary: {
    main: "#000000",
    pink: {
      10: "#FFEFF0",
      20: "#FFDFE0",
      40: "#FFC0C1",
      60: "#FFA0A2",
      80: "#FF8183",
      100: "#FF6164",
      120: "#E94A4D",
      140: "#CC3639",
      160: "#A72629",
      180: "#731719",
    },
    orange: {
      10: "#FFF5E6",
      20: "#FFEBCC",
      40: "#FFD699",
      60: "#FFC266",
      80: "#FFAD33",
      100: "#FF9900",
      120: "#E78A00",
      140: "#BE6700",
      160: "#80490A",
      180: "#512B00",
    },
    yellow: {
      10: "#FFFBE6",
      20: "#FFF7CC",
      40: "#FFEF99",
      60: "#FFE766",
      80: "#FFDE33",
      100: "#FFD600",
      120: "#F3AF00",
      140: "#C28C00",
      160: "#876100",
      180: "#422F00",
    },
    green: {
      10: "#E6FAEE",
      20: "#CCF4DC",
      40: "#99E9B9",
      60: "#66DE97",
      80: "#33D374",
      100: "#00C851",
      120: "#00AA51",
      140: "#008636",
      160: "#006836",
      180: "#004A36",
    },
    skyblue: {
      10: "#EAF5FF",
      20: "#D5EBFE",
      40: "#ABD7FE",
      60: "#81C4FD",
      80: "#57B0FD",
      100: "#2D9CFC",
      120: "#0F85EB",
      140: "#146BCA",
      160: "#1A5596",
      180: "#1C4066",
    },
    blue: {
      10: "#EBEDF8",
      20: "#D6DCF1",
      40: "#ADB9E4",
      60: "#8496D6",
      80: "#5C73C9",
      100: "#3350BB",
      120: "#3B47B8",
      140: "#394299",
      160: "#31387C",
      180: "#282C56",
    },
    opium: {
      10: "#F4F1F1",
      20: "#E9E2E2",
      40: "#D2C5C5",
      60: "#BCA9A9",
      80: "#A68C8C",
      100: "#8F6F6F",
      120: "#6D5E5E",
      140: "#4D4444",
      160: "#2F2D2D",
    },
    black: {
      10: "#F5F5F5",
      20: "#EEEEEE",
      30: "#DDDDDD",
      40: "#CCCCCC",
      50: "#BBBBBB",
      60: "#AAAAAA",
      70: "#888888",
      80: "#666666",
      90: "#333333",
      100: "#000000",
    },
  },
  neutral: {
    10: "#F5F5F5",
    20: "#EEEEEE",
    30: "#DDDDDD",
    40: "#CCCCCC",
    50: "#BBBBBB",
    60: "#AAAAAA",
    70: "#888888",
    80: "#666666",
    90: "#333333",
    100: "#000000",
  },
  success: {
    main: "#2D9CFC",
    10: "#EAF5FF",
    20: "#D5EBFE",
    40: "ABD7FE",
    60: "#81C4FD",
    80: "#57B0FD",
    100: "#2D9CFC",
    120: "#0F85EB",
    140: "#146BCA",
    160: "#1A5596",
    180: "#1C4066",
  },
  warning: {
    main: "#FF9900",
    10: "#FFF5E6",
    20: "#FFEBCC",
    40: "#FFD699",
    60: "#FFC266",
    80: "#FFAD33",
    100: "#FF9900",
    120: "#E78A00",
    140: "#BE6700",
    160: "#80490A",
    180: "#512B00",
  },
  error: {
    main: "#FF6164",
    10: "#FFEFF0",
    20: "#FFDFE0",
    40: "#FFC0C1",
    60: "#FFA0A2",
    80: "#FF8183",
    100: "#FF6164",
    120: "#E94A4D",
    140: "#CC3639",
    160: "#A72629",
    180: "#731719",
  },
  button: {
    basic: {
      10: "#F5F5F5",
      20: "#E7E7E7",
      30: "#DDDDDD",
      40: "#CCCCCC",
      50: "#BBBBBB",
      60: "#AAAAAA",
      70: "#888888",
      80: "#666666",
      90: "#333333",
      100: "#000000",
    },
  },
};
const typography = {
  fontFamily: "LIFEPLUS",
  body1: { fontWeight: 500, lineHeight: "1.625rem", color: "#000000" },
  h1: { fontSize: "1.5rem", fontWeight: 700, lineHeight: "2.375rem" },
  h2: { fontSize: "1.375rem", fontWeight: 700, lineHeight: "2.125rem" },
  h3: { fontSize: "1.25rem", fontWeight: 700, lineHeight: "2rem" },
  h4: { fontSize: "1.125rem", fontWeight: 700, lineHeight: "1.75rem" },
  h5: { fontSize: "1rem", fontWeight: 700, lineHeight: "1.625rem" },
  h6: { fontSize: "0.875rem", fontWeight: 700, lineHeight: "1.375rem" },
  h7: { fontSize: "0.75rem", fontWeight: 700, lineHeight: "1.125rem" },
  xs: { fontSize: "0.75rem", lineHeight: "1.125rem", fontFamily: "LIFEPLUS" },
  sm: { fontSize: "0.875rem", lineHeight: "1.375rem", fontFamily: "LIFEPLUS" },
  m: { fontSize: "1rem", lineHeight: "1.625rem", fontFamily: "LIFEPLUS" },
  lg: { fontSize: "1.125rem", lineHeight: "1.75rem", fontFamily: "LIFEPLUS" },
  xsB: {
    fontSize: "0.75rem",
    lineHeight: "1.125rem",
    fontWeight: 700,
    fontFamily: "LIFEPLUS",
  },
  smB: {
    fontSize: "0.875rem",
    lineHeight: "1.375rem",
    fontWeight: 700,
    fontFamily: "LIFEPLUS",
  },
  mB: {
    fontSize: "1rem",
    lineHeight: "1.625rem",
    fontWeight: 700,
    fontFamily: "LIFEPLUS",
  },
  lgB: {
    fontSize: "1.125rem",
    lineHeight: "1.625rem",
    fontWeight: 700,
    fontFamily: "LIFEPLUS",
  },
  xlB: {
    fontSize: "1.625rem",
    lineHeight: "2.375rem",
    fontWeight: 700,
    fontFamily: "LIFEPLUS",
  },
  xxlB: {
    fontSize: "2rem",
    lineHeight: "2.625rem",
    fontWeight: 700,
    fontFamily: "LIFEPLUS",
  },
  numXLB: {
    fontSize: "1.25rem",
    fontWeight: 800,
    lineHeight: "2rem",
    fontFamily: "NanumSquare",
  },
  numLB: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    fontWeight: 800,
    fontFamily: "NanumSquare",
  },
  numMB: {
    fontSize: "1rem",
    lineHeight: "1.625rem",
    fontWeight: 800,
    fontFamily: "NanumSquare",
  },
  numSB: {
    fontSize: "0.875rem",
    lineHeight: "1.375rem",
    fontWeight: 800,
    fontFamily: "NanumSquare",
  },
  numXSB: {
    fontSize: "0.75rem",
    lineHeight: "1.125rem",
    fontWeight: 800,
    fontFamily: "NanumSquare",
  },
  numXL: {
    fontSize: "1.25rem",
    fontWeight: 700,
    lineHeight: "2rem",
    fontFamily: "NanumSquare",
  },
  numL: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    fontWeight: 700,
    fontFamily: "NanumSquare",
  },
  numM: {
    fontSize: "1rem",
    lineHeight: "1.625rem",
    fontWeight: 700,
    fontFamily: "NanumSquare",
  },
  numS: {
    fontSize: "0.875rem",
    lineHeight: "1.375rem",
    fontWeight: 700,
    fontFamily: "NanumSquare",
  },
  numXS: {
    fontSize: "0.75rem",
    lineHeight: "1.125rem",
    fontWeight: 700,
    fontFamily: "NanumSquare",
  },
  "2xl": { fontSize: "1.5rem" },
  "3xl": { fontSize: "1.875rem" },
  "4xl": { fontSize: "2.25rem" },
  "5xl": { fontSize: "3rem" },
  "6xl": { fontSize: "4rem" },
  button: {
    fontWeight: 700,
    fontSize: "1rem",
  },
};

const components = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
      disableTouchRipple: true,
      focusRipple: true,
    },
  },
  MuiButton: {
    defaultProps: {
      color: "info",
      size: "large",
      typography: typography.h4,
      disableTouchRipple: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 10,
        boxShadow: "none",
      },
      containedPrimary: {
        backgroundColor: palette.button.basic[100],
        "&:hover": {
          backgroundColor: palette.button.basic[100],
          boxShadow: "none",
        },
        "&:focus": {
          backgroundColor: palette.button.basic[100],
          border: `2px solid ${palette.button.basic[60]}`,
          boxShadow: "none",
        },
        "&:disabled": {
          backgroundColor: palette.button.basic[40],
          boxShadow: "none",
          color: palette.button.basic[40],
        },
        "&:active": {
          backgroundColor: palette.button.basic[90],
          boxShadow: "0 2px 6px -2px rgba(0, 0, 0, 0.06)",
        },
      },
      containedSecondary: {
        backgroundColor: palette.button.basic[20],
        color: palette.neutral[100],
        boxShadow: "none",
        "&:hover": {
          backgroundColor: palette.button.basic[20],
          boxShadow: "none",
        },
        "&:active": {
          backgroundColor: palette.button.basic[30],
        },
      },
      containedInfo: {
        backgroundColor: palette.button.basic[100],
        "&:hover": {
          backgroundColor: palette.button.basic[100],
          boxShadow: "none",
        },
        "&:focus": {
          backgroundColor: palette.button.basic[100],
          border: `2px solid ${palette.button.basic[90]}`,
          boxShadow: "none",
        },
        "&:disabled": {
          backgroundColor: palette.button.basic[40],
          boxShadow: "none",
          color: palette.button.basic[10],
        },
        "&:active": {
          backgroundColor: palette.button.basic[90],
          boxShadow: "0 2px 6px -2px rgba(0, 0, 0, 0.06)",
        },
      },
      basic: {
        backgroundColor: palette.button.basic[100],
        color: "#fff",
        "&:hover": {
          backgroundColor: palette.button.basic[100],
          boxShadow: "none",
        },
        "&:focus": {
          backgroundColor: palette.button.basic[100],
          boxShadow: "none",
        },
        "&:disabled": {
          backgroundColor: palette.button.basic[40],
          boxShadow: "none",
          color: palette.button.basic[10],
        },
        "&:active": {
          backgroundColor: palette.button.basic[90],
          boxShadow: "none",
        },
      },
      text: {
        backgroundColor: common.white,
        color: common.black,
        "&:active": {
          backgroundColor: common.white,
          boxShadow: "none",
        },
        "&:hover": {
          backgroundColor: common.white,
          boxShadow: "none",
        },
        "&:focus": {
          backgroundColor: palette.secondary.black[10],
          boxShadow: "none",
        },
        "&:disabled": {
          boxShadow: "none",
          backgroundColor: common.white,
          color: palette.secondary.black[40],
        },
      },
      highlighted: {
        color: common.white,
        backgroundColor: palette.primary[100],
        borderColor: palette.primary[30],
        "&:hover": {
          backgroundColor: palette.primary[100],
          borderColor: palette.primary[30],
          boxShadow: "none",
        },
        "&:focus": {
          backgroundColor: palette.primary[10],
          borderColor: palette.primary[40],
          boxShadow: "none",
        },
        "&:disabled": {
          boxShadow: "none",
          backgroundColor: common.white,
          color: palette.secondary.black[40],
        },
      },
      sizeLarge: {
        width: "100%",
        height: "60px",
        fontSize: typography.h4.fontSize,
      },
      sizeMedium: {
        width: "100%",
        height: "48px",
        fontSize: typography.m.fontSize,
      },
      sizeSmall: {
        width: "100%",
        height: "40px",
        fontSize: typography.sm.fontSize,
      },
      sizeXSmall: {
        width: "100%",
        height: "32px",
        fontSize: typography.xs.fontSize,
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        height: 70,
        minHeight: 70,
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        height: 70,
        minHeight: 70,
        backgroundColor: "#ffffff",
        color: palette.neutral[100],
        boxShadow: "none",
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        typography: "h4",
        borderRadius: 15,
        padding: "1.5rem 1.25rem 1.25rem",
        h2: {
          padding: 0,
        },
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: "1.5rem 0 0",
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      textColorPrimary: {
        color: palette.neutral[60],
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        "& .MuiTabs-indicatorSpan": {
          maxWidth: 40,
          width: "100%",
          backgroundColor: palette.neutral[100],
        },
      },
    },
  },
  MuiTableContainer: {
    styleOverrides: {
      root: {
        boxShadow: "none",
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: palette.neutral[30],
        checked: {
          color: palette.neutral[100],
        },
      },
    },
  },
  MuiSnackbar: {
    styleOverrides: {
      root: {
        left: 24,
        right: 24,
        top: 0,
        pointerEvents: "none",
      },
    },
  },
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        borderRadius: 5,
        padding: "15px 20px",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        fontWeight: 700,
        input: {
          color: palette.neutral[100],
          "&::placeholder": {
            color: palette.neutral[40],
            textAlign: "center",
          },
        },
        "&::before": {
          borderBottomColor: palette.neutral[30],
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        color: palette.neutral[60],
      },
    },
  },
};

const theme = createTheme({
  typography,
  palette,
  components,
});

export default theme;
