import { useState, useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'



function App() {
	const { darkMode } = useContext(ThemeContext)

	
	return (
		<>
			<div className={darkMode ? 'container-dark' : 'container-light'}>
				<Navbar />
				<Home />
				<About />
				<Skills darkMode={darkMode} />
				<Services darkMode={darkMode} />
				<Projects />
				<ContactMe darkMode={darkMode} />
				<Footer />
			</div>
		</>
	)
}

export default App
