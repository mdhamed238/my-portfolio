import { useState } from 'react'
import Service from './Service'
import Brackets from '../../assets/svg/brackets-curly.svg'
import Server from '../../assets/svg/server-network.svg'
import UserSquare from '../../assets/svg/user-square.svg'
import arrowRight from '../../assets/svg/arrow-right.svg'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from '../Modal/Modal'
import './Services.scss'


const Services = ({ darkMode }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentService, setCurrentService] = useState(null)
    const [title, setTitle] = useState("")
    const [services, setServices] = useState({
        frontend: [
            "I develop the user interface",
            "Web page development",
            "I perform UI tests to optimize performance",
            "Implementing design on mobile websites"
        ],
        backend: [
            "I develop functional web applications",
            "I build reusable code for future use",
            "Troubleshoot and debug applications",
            "I implement secure user authentication",
        ],
        design: [
            "I design the user interface",
            "I create UX element interactions",
            "I position your company brand",
            "I design the the logo"
        ]
    })

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const handleToggle = (name, title) => {
        setCurrentService(name)
        setTitle(title)
        modalOpen ? close() : open();
    }


    return (
        <div className="Services" id="services">
            <div className="header">
                <div className="title">
                    Services
                </div>
                <div className="description">
                    What i offer
                </div>
            </div>
            <div className="services">
                <Service
                    icon={Brackets}
                    title="Frontend developer"
                    name="frontend"
                    arrow={arrowRight}
                    onToggle={handleToggle}
                />
                <Service
                    icon={Server}
                    title="Backend developer"
                    name="backend"
                    arrow={arrowRight}
                    onToggle={handleToggle}
                />
                <Service
                    icon={UserSquare}
                    title="UI / UX design"
                    name="design"
                    arrow={arrowRight}
                    onToggle={handleToggle}
                />
            </div>


            {/* Modal */}
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true} t
                onExitComplete={() => null}
            >
                {modalOpen && <Modal
                    title={title}
                    tasks={services[currentService]}
                    handleClose={close}
                    darkMode={darkMode}
                />}
            </AnimatePresence>
        </div>
    );
}

export default Services;