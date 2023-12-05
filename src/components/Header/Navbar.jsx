import classNames from "classnames"
import { NavLink } from "react-router-dom"
import { Switch } from '@headlessui/react'
import { useState } from "react"

export default function Navbar() {

    const [language, setLanguage] = useState(false)

  return (
    <>
        <nav className="text-xl font-medium flex items-center gap-12 max-lg:hidden">
            
            <NavLink 
            to="/" 
            className={ ({isActive}) => (
                classNames(
                    "hover:text-dark transition-colors",
                    {
                    "after:bg-main hover:after:bg-dark after:w-2/3 after:h-1 after:block after:rounded-lg " : isActive
                })
            )} >
                Anasayfa
            </NavLink>

            <NavLink 
            to="/services" 
            className={(({isActive}) => (
                classNames(
                    "hover:text-dark transition-colors",
                    {
                    "after:bg-main hover:after:bg-dark after:w-2/3 after:h-1 after:block after:rounded-lg " : isActive
                })
            ))} >
                Hizmetlerimiz
            </NavLink>

            <NavLink 
            to="/portfolio" 
            className={(({isActive}) => (
                classNames(
                    "hover:text-dark transition-colors",
                    {
                    "after:bg-main hover:after:bg-dark after:w-2/3 after:h-1 after:block after:rounded-lg " : isActive
                })
            ))} >
                Portfolyomuz
            </NavLink>

            <NavLink 
            to="/about" 
            className={(({isActive}) => (
                classNames(
                    "hover:text-dark transition-colors",
                    {
                    "after:bg-main hover:after:bg-dark after:w-2/3 after:h-1 after:block after:rounded-lg " : isActive
                })
            ))} >
                Hakkımızda
            </NavLink>

            <NavLink 
            to="/contact" 
            className={(({isActive}) => (
                classNames(
                    "hover:text-dark transition-colors",
                    {
                    "after:bg-main hover:after:bg-dark after:w-2/3 after:h-1 after:block after:rounded-lg " : isActive
                })
            ))} >
                İletişim
            </NavLink>

        </nav>
        <div className="flex text-md">
            <Switch
            checked={language}
            onChange={setLanguage}
            className={`bg-main text-light relative inline-flex h-8 w-16 items-center rounded-full`}
            >
                <span className={classNames("ml-2 z-10",{
                    "text-dark" : !language
                })}>
                    TR
                </span>
                <span
                    className={`${
                    language ? 'translate-x-[34px]' : 'translate-x-[5px]'
                    } absolute h-6 w-6 transform rounded-full bg-white transition `}
                >
                    
                </span>
                
                <span className={classNames("ml-3 z-10",{
                    "text-dark" : language
                })}>
                    EN
                </span>
                
            </Switch>
        </div>
    </>
  )
}
