import React from 'react'
import { Article, Brand, CTA, Feature, Navbar } from './comp'
import { Footer, Blog, Features, Header, Possibility, Whatis} from './cont';
import "./App.css"

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <Whatis/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App