import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import config from '../config/config'

export default function Logout({ token }) {

    const [status, setStatus] = useState('')

    useEffect(() => {
        logout()
    }, [])

    const logout = async () => {
        console.log('remove token: ', token)
        let result = await axios.get(`${config.URL}/logout`, { withCredentials: true })
        setStatus("Logout successful")
    }

    return (
        <body class="bg-teal-100">
            <Navbar />
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <div class="flex justify-center">
                <div class="rounded-lg shadow-xl bg-teal-200">
                    <div class="p-6">
                        <br></br>
                        <h5 class="text-center text-teal-900 text-4xl font-medium mb-2">Logout Successful</h5>
                        <div class="flex items-stretch justify-center px-6 py-8">
                            <br></br>
                            <button type="button" class=" inline-block px-6 py-2 bg-teal-900 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-teal-900 hover:shadow-lg focus:bg-teal-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-500 active:shadow-lg transition duration-150 ease-in-out">
                                {<a href='/'>กลับไปยังหน้าแรก</a>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}