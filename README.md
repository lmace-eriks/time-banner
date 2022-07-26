# TimeBanner

## What this App does
Displays an advertisment or banner on a time sensitive basis. When the endDate passes, the banner removes itself from the page. This App will build the banner for you, or let you display a banner you've created in another block.

## Site Editor
Customizable in VTEX's Site Editor.

## VTEX Block Example
```
"timebanner#current-sale": {
    // "children": [
    //   "rich-text#children-override"
    // ],
    "props": {
      "imgSrc": "absolute-path-to-image.jpg",
      "title": "Title of Sale",
      "subTitle": "Subtitle of Sale",
      "callToAction": "Call To Action Text",
      "link": "/relative-or-absolute-path-to-url.html",
      "newTab": false,
      "textPos": "bottom",
      "startDate": "2022-07-20",
      "endDate": "2022-08-15"
    }
  }
```

## Children
If the children prop is defined, the TimeBanner will display the child blocks only. The startDate and endDate will still function. The other props are ignored.

## Props

* imgSrc - String - Absolute path to image. Any aspect ratio you'd like.
* title - String - Title of Sale.
* subTitle - String - Subtitle of Sale.
* callToAction - String - Defaults to "Learn More".
* link - String - Relative or Absolute path to URL.
* newTab - Boolean - Defaults to false. Open link in new tab or parent tab.
* textPos - Enum - Position of text on image. Options are:
  * top
  * bottom
  * left
  * right
  * center
  * topLeft
  * topRight
  * bottomLeft
  * bottomRight
* startDate - String - Date to start showing banner.
  * Must be in YYYY-MM-DD format.
  * Will begin showing at 12:00:00am on this date.
* endDate - String - Date to stop showing banner.
  * Must be in YYYY-MM-DD format.
  * Will stop showing at 11:59:59pm on this date.