import { motion } from 'framer-motion'



const Service = ({ icon, title, name, arrow, onToggle }) => {

    const dropIn = {
        hidden: {
            y: "-25vh",
            opacity: 0,
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.2,
                type: "spring",
                damping: 25,
                stiffness: 500,
            },
        },
    }


    return (
        <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
        >
            <div className="service">
                <img class="icon" src={icon} />
                <div className="title">
                    {title}
                </div>
                <div className="button" onClick={() => onToggle(name, title)}>
                    View More
                    <img className="arrow" src={arrow} alt="" />
                </div>
            </div>
        </motion.div>
    );
}

export default Service;