import { useState, useEffect, useRef, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Link } from 'react-scroll'
import Moon from '../../assets/svg/moon.svg'
import Sun from '../../assets/svg/sun.svg'
import Home from '../../assets/images/home.png'
import About from '../../assets/images/about.png'
import Skills from '../../assets/images/skills.png'
import Services from '../../assets/images/services.png'
import Projects from '../../assets/images/projects.png'
import ContactMe from '../../assets/images/contact.png'
import './Navbar.scss'


const Navbar = () => {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext)
    const [width, setWidth] = useState(window.innerWidth)
    const [scrollY, setScrollY] = useState(window.scrollY)
    const [fixedBottom, setFixedBottom] = useState(false)
    const navRef = useRef()
    const icons = [Home, About, Skills, Services, Projects, ContactMe]


    window.onresize = () => {
        setWidth(window.innerWidth)
    }

    window.onscroll = () => {
        setScrollY(window.scrollY)
    }


    useEffect(() => {
        if (width < 992) {
            navRef.current.classList.add('fixed-bottom')
            setFixedBottom(true)
        }
        else if (width >= 992 && scrollY > 120) {
            navRef.current.classList.add('fixed-bottom')
            setFixedBottom(true)
        }
        else {
            navRef.current.classList.remove('fixed-bottom')
            setFixedBottom(false)
        }


    }, [width, scrollY])


    const navigation = [
        {
            title: "Home",
            path: "home"
        },
        {
            title: "About",
            path: "about"
        },
        {
            title: "Skills",
            path: "skills"
        },
        {
            title: "Services",
            path: "services"
        },
        {
            title: "Projects",
            path: "projects"
        },
        {
            title: "Contact Me",
            path: "contactMe"
        }
    ]

    const handleToggle = () => {
        toggleDarkMode()
    }


    return (
        <nav className="nav-primary">
            <div className="nav-container">
                <div className="brand">
                    <Link
                        activeClass='active'
                        to="home"
                        smooth={true}
                        spy={true}
                    >
                        Mohamed Hamed
                    </Link>

                    {/* <div className="menu-btn">
                        <button
                            onClick={() => setExpanded(!expanded)}
                        >
                            {
                                expanded ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#6338fb" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="#f3f3f3" viewBox="0 0 24 24">
                                    <path fill="#0092E4" d="M10,13H3a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,20H4V15H9ZM21,2H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,9H15V4h5Zm1,4H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,21,13Zm-1,7H15V15h5ZM10,2H3A1,1,0,0,0,2,3v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,10,2ZM9,9H4V4H9Z" />
                                </svg>)
                            }
                        </button>
                    </div> */}
                </div>
                <div className={`nav-items`}>
                    <ul ref={navRef}>
                        {
                            navigation.map((item, idx) => {
                                return (<li
                                    key={idx}
                                    className="nav-item"
                                >
                                    <Link
                                        activeClass='active'
                                        to={item.path}
                                        smooth={true}
                                        spy={true}
                                        duration={500}
                                    >
                                        {
                                            fixedBottom ?
                                                (<span>
                                                    <img
                                                        src={icons[idx]}
                                                        alt={item.title}
                                                    />
                                                </span>
                                                )
                                                : item.title
                                        }
                                    </Link>
                                </li>)
                            })
                        }
                    </ul>
                    <span className="toggle-theme" onClick={handleToggle}>
                        <img
                            src={Moon} alt=""
                        />
                        <img
                            src={Sun} alt=""
                        />
                        <span
                            // style={darkMode ? { left: '2px' } : { right: '2px' }}
                            className={`circle ${darkMode ? 'right' : 'left'}`}></span>
                    </span>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;