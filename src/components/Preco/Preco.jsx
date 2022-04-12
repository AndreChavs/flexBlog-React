import React from 'react'
import './preco.css'

const servicos = [
    'Planos Ilimitados', 'Acesso Restrito',
    'Conteúdo Secreto', 'Suporte 24hrs',
    'Compra Exclusiva', 'Download dos Itens'
]

const Preco = () => {
    return <section className='preco' id='preco'>
        <div className="preco-item">
            <h2>Cobre</h2>
            <span><sup>R$</sup>19</span>
            <ul>
                {servicos.map( (item, index) => {
                    if (index < servicos.length - 2) {                        
                        return <li key={item}>{item}</li>
                    }
                })}
            </ul>
            <a href="#" className='btn-preco'>Comprar</a>
        </div>
        {/*  */}
        <div className="preco-item">
            <h2>Prata</h2>
            <span><sup>R$</sup>39</span>
            <ul>
                {servicos.map( (item, index) => {
                    if (index < servicos.length - 1) {                        
                        return <li key={item}>{item}</li>
                    }
                })}
            </ul>
            <a href="#" className='btn-preco'>Comprar</a>
        </div>
        {/*  */}
        <div className="preco-item">
            <h2>Gold</h2>
            <span><sup>R$</sup>79</span>
            <ul>
                {servicos.map( item => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
            <a href="#" className='btn-preco'>Comprar</a>
        </div>
    </section>
}

export default Preco