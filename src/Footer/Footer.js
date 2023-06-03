import React from 'react';
import style from "./Footer.module.css";

const Footer= () => {
  return (
    <>
        <footer>
            <div className={style.footer}>
            <div className={style.footerContent}>
                <a href = "#!"><img src = "burlamask.png" className={style.logotype} alt = "#"></img></a>
                <div className = {style.footerText}>
                    <div className = {style.footerColumn}>
                      <a href = "#!">Our telegram chat</a>
                      <a href = "#!">Support</a>
                      <a href = "#!">About us</a>
                    </div>
                    <div className = {style.footerColumn}>
                      <a href = "#!">Contacts</a>
                      <a href = "#!">Status</a>
                      <a href = "#!">Instructions</a>
                    </div>
                </div>
            </div>
            <div className = {style.copyInfo}>
                <p className={style.copyInfoText}>©2023 BurlaMask. All rights reserved</p>
            </div>
            </div>
        </footer>
    </>
  );
}

export default Footer;                