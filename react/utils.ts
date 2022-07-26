import { CSSProperties } from "react";

export const formatTextPosition = (textPos: string) => {
    let inlineStyle: CSSProperties = {};

    switch (textPos) {
      case "top":
        inlineStyle = {
          justifyContent: "center",
          alignItems: "flex-start"
        }
        break;
      case "bottom":
        inlineStyle = {
          justifyContent: "center",
          alignItems: "flex-end"
        }
        break;
      case "left":
        inlineStyle = {
          justifyContent: "flex-start",
          alignItems: "center"
        }
        break;
      case "right":
        inlineStyle = {
          justifyContent: "flex-end",
          alignItems: "center"
        }
        break;
      case "topLeft":
        inlineStyle = {
          justifyContent: "flex-start",
          alignItems: "flex-start"
        }
        break;
      case "topRight":
        inlineStyle = {
          justifyContent: "flex-end",
          alignItems: "flex-start"
        }
        break;
      case "bottomLeft":
        inlineStyle = {
          justifyContent: "flex-start",
          alignItems: "flex-end"
        }
        break;
      case "bottomRight":
        inlineStyle = {
          justifyContent: "flex-end",
          alignItems: "flex-end"
        }
        break;

      default:
        inlineStyle = {
          justifyContent: "center",
          alignItems: "center"
        }
        break;
    }
    return inlineStyle;
  }