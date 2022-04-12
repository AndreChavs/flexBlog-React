import React from 'react'
import './header.css'
import MobileMenu from './MobileMenu'
import Navlist from './Navlist'

const listMenu = ['sobre','produtos','preço','qualidade']
const Header = () => {
    // const [classes, setClasses] = React.useState(['menu-mobile'])
    const [status, setStatus] = React.useState(false)
    const listRef = React.useRef()
    const menuMobile = React.useRef()
    function handleMenu() {
        setStatus(!status)
        // console.log(status) //2º
    }
    React.useEffect(  () => {
        // console.log(status) //1º 2x
        if (status) {
            listRef.current.classList.add('active')
            menuMobile.current.classList.add('active')
        } else {
            listRef.current.classList.remove('active')
            menuMobile.current.classList.remove('active')
        }
    },[status])
    return <header className='header'>
        <nav className='container navbar'>
            <div className="logo">
                <a href="#">FlexBlog</a>
            </div>
            <MobileMenu menuMobile={menuMobile} handleMenu={handleMenu}/>
            <Navlist listRef={listRef} listMenu={listMenu}/>
        </nav>
    </header>
    
}

export default Header