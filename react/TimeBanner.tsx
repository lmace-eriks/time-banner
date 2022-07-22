import React, { useEffect, useState, useRef } from 'react';

// Styles
import styles from "./styles.css";

interface TimeBannerProps {

}

const TimeBanner: StorefrontFunctionComponent<TimeBannerProps> = ({ }) => {

  return (
    <div>Time Banner</div>
  )
}

TimeBanner.schema = {
  title: 'Time Banner',
  description: '',
  type: 'object',
  properties: {}
}

export default TimeBanner;