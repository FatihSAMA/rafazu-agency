import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { images } from "~/constants/images";

export default function Footer(){
    return(
        <footer className="bg-dark text-light pb-5">
            <div className="wrapper flex justify-between ">
            
                <div className="h-[60px]">
                    <img src={images.logo} alt="Rafazu Agency Logo" className="h-full" />
                </div>

                <nav className="text-xl font-medium flex items-center gap-12 max-lg:flex-col">
            
                    <NavLink 
                    to="/" 
                    className={ ({isActive}) => (
                        classNames(
                            "hover:text-main transition-colors"
                            ,
                            {
                            "text-main" : isActive
                        })
                    )} >
                        Anasayfa
                    </NavLink>
                    
                    <NavLink 
                    to="/services" 
                    className={ ({isActive}) => (
                        classNames(
                            "hover:text-main transition-colors"
                            ,
                            {
                            "text-main" : isActive
                        })
                    )} >
                        Hizmetlerimiz
                    </NavLink>

                    <NavLink 
                    to="/portfolio" 
                    className={ ({isActive}) => (
                        classNames(
                            "hover:text-main transition-colors"
                            ,
                            {
                            "text-main" : isActive
                        })
                    )} >
                        Portfolyomuz
                    </NavLink>

                    <NavLink 
                    to="/about" 
                    className={ ({isActive}) => (
                        classNames(
                            "hover:text-main transition-colors"
                            ,
                            {
                            "text-main" : isActive
                        })
                    )} >
                        Hakkımızda
                    </NavLink>

                    <NavLink 
                    to="/contact" 
                    className={ ({isActive}) => (
                        classNames(
                            "hover:text-main transition-colors"
                            ,
                            {
                            "text-main" : isActive
                        })
                    )} >
                        İletişim
                    </NavLink>

                   

                </nav>

                <div></div>




            </div>
            
            <div className="wrapper mt-5 bg-light h-[1px] w-full"></div>
            <div className="flex items-center justify-center text-xl mt-5">
                © 2023 Rafazu, All Rights Reserved
            </div>

        </footer>
    )
}