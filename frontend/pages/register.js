import { useState } from 'react'
import Navbar from '../components/navbar'
import axios from 'axios'
import config from '../config/config'

export default function Register({ token }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const profileUser = async () => {
        console.log('token: ', token)
        const users = await axios.get(`${config.URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log('user: ', users.data)
    }

    const register = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/register`,
                { username, email, password })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.data.message)
        }
        catch (e) {
            console.log(e)
        }

    }

    const registerForm = () => (
        <div class="bg-teal-100 flex">
            <div class="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
                <br></br><br></br>
                <h5 class="text-center text-teal-900 text-6xl font-medium mb-2">Register Form</h5>
                <div class="text-center text-teal-900 text-xl font-medium mb-2">
                    <br></br>
                    Status :  {status}
                </div>
                <br></br>
                <form action="" class="mt-2 flex flex-col lg:w-1/2 w-8/12">

                    <div class="flex flex-wrap items-stretch w-full mb-4 relative h-20 bg-teal-200 items-center rounded mb-6 pr-10">
                        <div class="flex -mr-px justify-center w-15 p-4">
                            <span
                                class="flex items-center leading-normal bg-teal-200 px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                                <i class="fas fa-user-circle"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            class="bg-teal-100 flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-15 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                            placeholder="username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div class="flex flex-wrap items-stretch w-full mb-4 relative h-20 bg-teal-200 items-center rounded mb-6 pr-10">
                        <div class="flex -mr-px justify-center w-15 p-4">
                            <span
                                class="flex items-center leading-normal bg-teal-200 px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                                <i class="fas fa-envelope"></i>
                            </span>
                        </div>
                        <input
                            type="email"
                            class="bg-teal-100 flex-shrink flex-grow flex-auto leading-normal flex-1 w-px border-0 h-15 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div class="flex flex-wrap items-stretch w-full mb-4 relative h-20 bg-teal-200 items-center rounded mb-6 pr-10">
                        <div class="flex -mr-px justify-center w-15 p-4">
                            <span
                                class="flex items-center leading-normal bg-teal-200 px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                                <i class="fas fa-lock"></i>
                            </span>
                        </div>
                        <input
                            type="password"
                            class="bg-teal-100 flex-shrink flex-grow flex-auto leading-normal flex-1 w-px border-0 h-15 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </form>
                <div class="flex justify-center">
                    <div class="flex items-stretch justify-center px-6 py-8">
                        <button type="button" class=" inline-block px-6 py-2.5 bg-teal-900 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-teal-900 hover:shadow-lg focus:bg-teal-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-500 active:shadow-lg transition duration-150 ease-in-out"
                            onClick={register}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <body class="bg-teal-100">
            <Navbar />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
            />
            {registerForm()}
        </body>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}