import React, { ReactChildren, useEffect, useState } from "react";
// import { canUseDOM } from "vtex.render-runtime";
import { formatTextPosition } from "./utils";

// Styles
import styles from "./styles.css";

interface TimeBannerProps {
  startDate: string
  endDate: string
  imgSrc: string
  title: string
  subTitle: string
  callToAction: string
  link: string
  newTab: boolean
  textPos: TextPosEnum
  children: ReactChildren
}

enum TextPosEnum {
  top = "top",
  bottom = "bottom",
  left = "left",
  right = "right",
  center = "center",
  topLeft = "topLeft",
  topRight = "topRight",
  bottomLeft = "bottomLeft",
  bottomRight = "bottomRight"
}

const TimeBanner: StorefrontFunctionComponent<TimeBannerProps> = ({ children, startDate, endDate, imgSrc, textPos, title, subTitle, link, newTab, callToAction }) => {
  // const [openGate, setOpenGate] = useState<Boolean>(true);
  const [showBanner, setShowBanner] = useState<Boolean>(false);

  const hasChildren: Boolean = !!React.Children.toArray(children).length;
  const penultimateMillisecond = 86399999;
  const defaultCallToAction = "Learn More";

  useEffect(() => {
    // if (!openGate) return;
    // setOpenGate(false);

    const nowMS = Date.now();
    const startDateMS = Date.parse(startDate);
    const endDateMS = Date.parse(endDate) + penultimateMillisecond;

    // Start Date has not come --
    if (startDateMS > nowMS) return;

    // End Date has passed --
    if (endDateMS < nowMS) return;

    // Dates not defined -- 
    if (!startDate || !endDate) return;

    // No Children and No Image Source --
    if (!hasChildren && !imgSrc) return;

    // If all props are valid, show banner --
    setShowBanner(true);
  })

  const defaultContent =
    <a href={link} target={newTab ? "_blank" : "_self"} rel="noreferrer">
      <div style={formatTextPosition(textPos)} className={styles.timeBanner}>
        <img src={imgSrc} alt={title} className={styles.image} />
        <div className={styles.textContainer}>
          {title && <p className={styles.titleText}>{title}</p>}
          {subTitle && <p className={styles.subTitleText}>{subTitle}</p>}
          <p className={styles.actionText}>{callToAction || defaultCallToAction}</p>
        </div>
      </div>
    </a>

  if (showBanner) {
    return (
      <div className={styles.timeBannerContainer}>
        <div className={styles.timeBannerWrapper}>
          {hasChildren ? children : defaultContent}
        </div>
      </div>
    )
  } else {
    return (<></>)
  }
}

TimeBanner.schema = {
  title: "Time Banner",
  description: "",
  type: "object",
  properties: {
    title: {
      title: "Title",
      type: "string"
    },
    subTitle: {
      title: "Sub Title",
      type: "string"
    },
    callToAction: {
      title: "Call To Action Text",
      description: "Text inside button.",
      type: "string"
    },
    textPos: {
      title: "Text Position",
      description: "Where the text and renders over the image.",
      enum: ["top",
        "bottom",
        "left",
        "right",
        "center",
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight"],
      default: "center",
      type: "string"
    },
    imgSrc: {
      title: "Image Source",
      description: "REQUIRED | Absolute path to image.",
      type: "string"
    },
    link: {
      title: "Call To Action URL Link",
      type: "string"
    },
    newTab: {
      title: "Open Link in New Tab?",
      type: "boolean",
      default: false
    },
    startDate: {
      title: "Banner Start Date",
      description: "YYYY-MM-DD - 12:00:00am on this date.",
      type: "string",
      default: "1970-01-01"
    },
    endDate: {
      title: "Banner End Date",
      description: "YYYY-MM-DD - 11:59:59pm on this date.",
      type: "string",
      default: "2100-01-01"
    }
  }
}

export default TimeBanner;