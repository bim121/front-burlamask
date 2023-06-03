import React from 'react';
import style from './Header.module.css';
import { Search } from '../Search/Search';
import { NavLink } from 'react-router-dom';

const Header = ({changedPhotos, setChangedPhotos, duplicateChangedPhotos, isMainPage = true}) => {
  return (
    <>
        <div className={style.header}>
            <div className={style.wrapper}>
              <div className={style.image__logo}>
                <NavLink to = '/'><img src="burlamask.png" alt="logo" className={style.logotype}/></NavLink>
              </div>
              <div className={style.links}>
                  {isMainPage ? <Search changedPhotos={changedPhotos} setChangedPhotos={setChangedPhotos} duplicateChangedPhotos={duplicateChangedPhotos}/> : null}
                  <a>admin dashboard</a>
              </div>
            </div>
        </div>
    </>
  );
}

export default Header;