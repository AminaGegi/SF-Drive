import React, {useState} from "react"
import "../styles/Footer.scss"
import Header from "./Header";
import Main from "./Main/Main";

function Footer () {
       return <React.Fragment>
           <footer>
               <div className="footer__frame">
                   <div className="footer__frame-copy">
                       © SkillDrive Inc. 2020
                   </div>
                   <div className="footer__frame-links">
                       <a href="https://vk.com/feed" target="_blank" rel="nofollow" className="icon-vk is-animated" />
                       <a href="https://www.instagram.com/" target="_blank" rel="nofollow" className="icon-insta is-animated" />
                       <a href="https://ru-ru.facebook.com/" target="_blank" rel="nofollow" className="icon-facebook is-animated" />
                   </div>
               </div>
           </footer>
    </React.Fragment>
}




export default Footer;