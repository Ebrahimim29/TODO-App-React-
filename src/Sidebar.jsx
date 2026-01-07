import style from './style.module.css';
import avatarImage from './assets/Image/2.jpg';
import sidebarBgImage from './assets/Image/1.jpeg';
import { useContext } from 'react';
import { MainContext } from './context/MainContext';

const Sidebar = () => {

    const {showMenu, setShowMenu} = useContext(MainContext)

    return(

        <div className={`${style.sidebar_section} bg-secondary`} 
        style={{
            backgroundImage: `linear-gradient(#12382881, #3a2a2a7a, #0b2b3a42), url(${sidebarBgImage})`,
            ...(showMenu ? {right: 0} : {})
        }}
        >
            <ul className={`${style.sidebar_list} m-0 p-0`}>
                <li className={style.sidebar_avatar}>
                    <img src={avatarImage} alt="" />
                </li>
                <li>
                    <a href="/">کاربران</a>
                </li>
                <li>
                    <a href="/">پست ها</a>
                </li>
                <li>
                    <a href="/">گالری</a>
                </li>
                <li>
                    <a href="/">کار ها</a>
                </li>
            </ul>

        </div>
    )
};

export default Sidebar;