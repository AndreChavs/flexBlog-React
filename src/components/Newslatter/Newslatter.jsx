import React from 'react'
import './newslatter.css'

const Newslatter = () => {
    return <section className='newslatter'>
        <div className="newslatter-info">
            <h1>Newslatter</h1>
            <p>Assine e fique por dentro das novidades</p>
        </div>
        <div className="newslatter-contato">
            <form>            
                <input type="email" placeholder='seu Email' name="email" id="email" />
                <button type="submit">Assinar</button>
            </form>
        </div>
    </section>
}

export default Newslatter