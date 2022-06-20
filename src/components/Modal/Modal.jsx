import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import CheckCircle from "../../assets/svg/check-circle.svg"
import "./style.scss"


const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};


const Modal = ({ title, tasks, handleClose, darkMode }) => {

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className={`modal ${darkMode ? 'dark' : 'light'}`}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="modal-header">
                    <span>{title}</span>
                    <span className="close" onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#6338fb" viewBox="0 0 24 24">
                            <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
                        </svg>
                    </span>
                </div>
                <div className="tasks">
                    {
                        tasks.map((item, idx) => {
                            return (
                                <div key={idx} className="task">
                                    <img src={CheckCircle} alt="" />
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </motion.div>
        </Backdrop>
    );
};


export default Modal;