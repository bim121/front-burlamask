import React from 'react';
import style from './Header.module.css';
import { Search } from '../Search/Search';

const Header = ({changedPhotos, setChangedPhotos, duplicateChangedPhotos}) => {
  return (
    <>
        <div className={style.header}>
            <div className={style.wrapper}>
              <div className={style.image__logo}>
                  <img src="burlamask.png" alt="logo" className={style.logotype}/>
              </div>
              <div className={style.links}>
                  <Search changedPhotos={changedPhotos} setChangedPhotos={setChangedPhotos} duplicateChangedPhotos={duplicateChangedPhotos}/>
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