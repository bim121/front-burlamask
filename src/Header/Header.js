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
                  <a>Вхід</a>
                  <a>Реєстрація</a>
                  <a>admin dashboard</a>
              </div>
            </div>
        </div>
    </>
  );
}

export default Header;