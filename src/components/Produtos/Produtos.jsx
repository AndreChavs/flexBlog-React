import React from 'react'
import './produtos.css'
import produto1 from '../img/produtos1.jpg'
import produto2 from '../img/produtos2.jpg'
import produto3 from '../img/produtos3.jpg'


const Produtos = () => {
    return <section className='container produtos' id='produtos'>
        <h1>Produtos</h1>
        <div className='produtos-content'>
            <div className="produto-item purple">
                <h2>Purple</h2>
                <img src={produto1} alt="produto_purple" />
            </div>
            <div className="produto-item pink">
                <h2>Pink</h2>
                <img src={produto2} alt="produto_pink" />
            </div>
            <div className="produto-item blue">
                <h2>Blue</h2>
                <img src={produto3} alt="produto_blue" />
            </div>
        </div>
    </section>
}

export default Produtos