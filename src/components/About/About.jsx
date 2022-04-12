import React from 'react'
import './about.css'
import img1 from '../img/sobre1.jpg'
import img2 from '../img/sobre2.jpg'

const About = () => {
    return <section className='container sobre' id='sobre'>
        <div className="sobre-info">
            <h1>Sobre</h1>
            <p>O que temos que ter sempre
                 em mente é que a determinação clara de 
                 objetivos afeta positivamente a correta 
                 previsão das condições inegavelmente 
                 apropriadas objetivos.
            </p>
            <p>O que temos que ter sempre em mente 
                é que a determinação clara de objetivos 
                afeta positivamente a correta previsão das 
                condições inegavelmente apropriadas 
                objetivos.
            </p>
        </div>
        <div className='img'>
            <img src={img1} alt="site1" />
        </div>
        <div className='img'>
            <img src={img2} alt="site2" />
        </div>
    </section>
}

export default About