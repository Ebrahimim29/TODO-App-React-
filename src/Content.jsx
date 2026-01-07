import Gallery from "./gallery/Gallery";
import Posts from "./posts/Posts";
import Todos from "./todos/Todos";
import Users from "./users/Users";
import style from "./style.module.css";
import contentBgImage from "./assets/Image/3.jpeg";
import { useContext } from "react";
import { MainContext } from "./context/MainContext";

const Content = () => {

    const {showMenu, setShowMenu} = useContext(MainContext)

    const handleShowMenu = (event) =>{
        event.stopPropagation() //یعنی از المان والد پیروی نکن
        setShowMenu(!showMenu)
        console.log(showMenu);
        
    }

    return(
        <div className={style.content_section} style={{backgroundImage: `url(${contentBgImage})`}}
            onClick={() => {setShowMenu(false)}}>
            <i className={`${style.menu_button} fas fa-bars text-danger m-2 pointer`}
            onClick={handleShowMenu}></i>
            <Users/>
            <Posts/>
            <Gallery/>
            <Todos/>
        </div>
    )
};

export default Content;