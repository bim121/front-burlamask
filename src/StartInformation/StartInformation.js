import React from 'react';
import style from "./StartInformation.module.css";

const StartInformation= () => {
  return (
    <div className={style.wrapper}>
      <div className={style.startInformation}>
          <div className={style.textBlock}>
              <p><span>BurlaMask</span></p>
              <p>face swap service</p>
              <p className={style.text}>
                  With the help of this service, <span>you can easily swap faces</span> on photos without any problems!
              </p>
          </div>
          <div className={style.startImage}>
              <img src="startImage.png" className = {style.image} alt ="#"></img>
          </div>
      </div>
    </div>
  );
}

export default StartInformation;