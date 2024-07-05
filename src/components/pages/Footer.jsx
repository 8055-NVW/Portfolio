import { useState } from 'react'
import axios from 'axios'
// popup import
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailwhite from '../../assets/email-white.svg'
import githubwhite from '../../assets/github-white.svg'
import linkedinwhite from '../../assets/linkedin-white.svg'

export default function Footer({ contactRef }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const myEmail = import.meta.env.VITE_EMAIL
    const serviceId = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_PUBLIC_KEY

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                from_name: name,
                from_email: email,
                to_name: 'Vivian',
                message: message,
            }
        }

        try {
            const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
            console.log(res)
            setName('')
            setEmail('')
            setMessage('')
            toast.success('Email has been sent successfully!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } catch (error) {
            console.log(error)
            toast.error('Failed to send the email. Please try again.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    return (
        <footer ref={contactRef} className='bg-[#00000036]/35 backdrop-blur-md footer md:footer-center block '>
            <div className=" p-5  px-8 pb-7 text-primary-content flex flex-col  md:flex-row items-center justify-center">
                <div className="flex flex-col  text-2xl text-slate-100">
                    <p className="text-4xl font-bold text-slate-50 pb-5 w-full text-center">Lets Connect</p>
                    <div className='flex'>                   
                    <a href={`mailto:${myEmail}`} target="blank" className="mx-5 md:my-8">
                        <img src={emailwhite} alt="email" className='h-[50px] ' />
                    </a>
                    <a href="https://www.linkedin.com/in/vivian-lopes-44094798/" target="blank" className="mx-5 md:my-8">
                        <img src={linkedinwhite} alt="linkedin" className='h-[50px]' />
                    </a>
                    <a href='https://github.com/8055-NVW' target="blank" className="mx-5 md:my-8">
                        <img src={githubwhite} alt="github" className='svg h-[50px]' />
                    </a>
                    </div>
                    {/* <div className='cursor'></div> */}
                </div>
                <div className="border-2 w-60 md:h-[300px] md:w-0 rounded-full my-5 md:mx-5"></div>
                <div className='bg-[#000000ab] p-5 rounded-xl w-full max-w-[800px]'>
                    <p className="text-lg font-semibold text-slate-50 w-full  text-center pb-2">Get in Touch</p>

                    <form onSubmit={handleSubmit} className="emailForm text-slate-100">
                        <input
                            className='bg-black rounded w-full p-2 my-2 text-slate-100'
                            type="text"
                            placeholder="Your Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className='bg-black rounded w-full p-2 my-2 text-slate-100'
                            type="email"
                            placeholder="Your Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            className='bg-black rounded w-full p-2 my-2 text-slate-100'
                            placeholder="Some Text"
                            required
                            cols="5"
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        >
                        </textarea>
                        <div className='flex w-full justify-center items-center'>
                            <button
                                type="submit"
                                className="relative  inline-flex h-8 mt-3 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                <span
                                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span
                                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                    Send Email
                                </span>
                            </button>
                        </div>
                    </form>
                </div>

            </div>
            <div className='w-full flex items-center justify-center  bg-white p-3'>
                <p className=" text-black ">Made by Vivian.L</p>
            </div>
            <ToastContainer />
        </footer>
    )
}