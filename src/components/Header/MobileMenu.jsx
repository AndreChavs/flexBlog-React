import React from 'react'

const MobileMenu = ({menuMobile, handleMenu}) => {
    return <div className='menu-mobile' ref={menuMobile} onClick={handleMenu}>
        <div className='icon'></div>                
    </div>
}

export default MobileMenu