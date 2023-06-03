import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <>
        <div className={style.header}>
            <div className={style.wrapper}>
              <div className={style.image__logo}>
                  <img src="burlamask.png" alt="logo" className={style.logotype}/>
              </div>
              <div className={style.links}>
                  <img src = "loop.png" className={style.loop} onClick={focusInput}></img>
                  <input className={style.headerInput} id="search"></input>
                  <a>Вхід</a>
                  <a>Реєстрація</a>
                  <a>admin dashboard</a>
              </div>
            </div>
        </div>
    </>
  );
}

function focusInput() {
  document.getElementById("search").focus();
}

export default Header;