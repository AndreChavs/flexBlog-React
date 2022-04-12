import React from "react"
import Superinfo from "./components/Superinfo/Superinfo"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import "./App.css"
import Produtos from "./components/Produtos/Produtos"
import Preco from "./components/Preco/Preco"
import Qualidade from "./components/Qualidade/Qualidade"
import Newslatter from "./components/Newslatter/Newslatter"
import Footer from "./components/Footer"
import Introducao from "./components/Introducao"

const App = () => {
  return <>
    <Superinfo />
    <Header />
    <Introducao />
    <About />
    <Produtos />
    <Preco />
    <Qualidade />
    <Newslatter />
    <Footer />
  </>
}

export default App
