import colors from "@siimple/colors";
import base from "@siimple/preset-base";
export default {
    ...base,
    useRootStyles: true,
    useBorderBox: true,
    prefix: "",
    colors: {
        ...base.colors,
        primary: colors.blue["500"],
        secondary: colors.mint["600"],
        text: colors.gray["800"],
        background: "#fff",
        muted: colors.gray["200"],
    },
    colorModes: {
        dark: {
            text: "#fff",
            background: colors.gray["800"],
        },
    },
    fonts: {
        body: "'Roboto',sans-serif",
        heading: "'Montserrat',sans-serif",
        code: "monospace",
    },
    //breakpoints
    breakpoints: {
        mobile: {
            max: "600px",
        },
        tablet: {
            min: "600px",
        },
        desktop: {
            min: "1200px",
        },
    },
    root: {
        margin: "0px",
        padding: "0px",
    },
};