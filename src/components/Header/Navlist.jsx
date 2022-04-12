import React from 'react'

const Navlist = ({listRef, listMenu}) => {
    return <ul className='navlist' ref={listRef}>
        {listMenu.map( item => {
            return <li key={item}>
                <a href={`#${item}`}>{item}</a>
            </li>
        })}
    </ul>
}

export default Navlist