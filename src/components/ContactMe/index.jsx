import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Phone from '../../assets/svg/phone.svg'
import Email from '../../assets/svg/envelope.svg'
import Location from '../../assets/svg/map-marker.svg'
import Message from '../../assets/svg/message.svg'
import './ContactMe.scss'


const ContactMe = ({ darkMode }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    useEffect(() => {
        const fields = [...form.current.elements].slice(1, 4)

        fields.forEach(field => {
            if(darkMode) field.classList.add('dark')
            else field.classList.remove('dark')

            if (field.value == '') {
                field.classList.remove('valid')
                field.classList.add('invalid')
            }
            else {
                field.classList.add('valid')
                field.classList.remove('invalid')
            }
        })

    }, [name, email, message, darkMode])


    const form = useRef()
    const notify = ({ type, msg }) => {
        if (type === "success") toast.success(msg);
        else if (type === "error") toast.error(msg);
        else if (type === "warning") toast.warning(msg);
    }

    //  toast.promise(sendEmail,
    //     {
    //         pending: "Your message is pending",
    //         success: "Thanks for contacting me",
    //         error: 'Something went wrong'
    //     })


    const resetFields = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (!name || !email) {
            notify({ type: 'warning', msg: 'Please enter your name and email address' })
            return
        }
        else if (!message) {
            notify({ type: 'warning', msg: 'Please enter a message' })
            return
        }
        emailjs.sendForm('service_argmzea', 'template_5f89kkc', form.current, '6_fFIWWbVuILzbviD')
            .then((result) => {
                console.log(result.text);
                resetFields()
                notify({ type: 'success', msg: 'Thanks for contacting me' })
            }, (error) => {
                console.log(error.text);
            })
    }


    return (
        <div className="ContactMe" id="contactMe">
            <div className="header">
                <div className="title">
                    Contact Me
                </div>
                <div className="description">
                    Get in touch
                </div>
            </div>
            <div className="container">
                <div className="infos">
                    <div className="info">
                        <a href="tel:+22231312531">
                            <img src={Phone} alt="" />
                        </a>
                        <div className="right">
                            <div className="title">Call Me</div>
                            <div className="subtitle">+222 31312531</div>
                        </div>
                    </div>
                    <div className="info">
                        <a href="mailto:mdhamed0238@gmail.com">
                            <img src={Email} alt="" />
                        </a>
                        <div className="right">
                            <div className="title">Email</div>
                            <div className="subtitle">mdhamed0238@gmail.com</div>
                        </div>

                    </div>
                    <div className="info">
                        <a href="https://goo.gl/maps/NfMWSiDaA1guVdqP6">
                            <img src={Location} alt="" />
                        </a>
                        <div className="right">
                            <div className="title">Location</div>
                            <div className="subtitle">Mauritania - Nouakchott E-nord</div>
                        </div>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className={`contact-form ${darkMode ? 'dark' : ''}`}>
                    <input type="hidden" name="to_name" value="Mohamed Hamed" />
                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input"
                        />
                        <label htmlFor="name" className="label">Name</label>
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input"
                        />
                        <label htmlFor="email" className="label">Email</label>
                    </div>
                    <div className="input-group">
                        <textarea
                            type="text"
                            name="message"
                            id="message"
                            className="input"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <label htmlFor="message" className="label">Message</label>
                    </div>


                    <button
                        className="button"
                    >Send Message
                        <img src={Message} alt="" />
                    </button>
                </form>
            </div>


            <ToastContainer
                position='bottom-right'
                autoClose={5000}
                pauseOnFocusLoss
                pauseOnHover
                draggable
                closeOnClick
            />
        </div>
    );
}

export default ContactMe;