import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'
import Image from "next/image";

const Profile1 = ({ token }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }

    return (
        <body class="bg-teal-100">
            <Navbar />
            <br></br><br></br>
            <div class="flex justify-center">
                <div class="rounded-lg shadow-xl bg-teal-200">
                    <br></br><br></br>
                    <div class="flex items-stretch  justify-center">
                        <Image src="/ProfileLan.jpg" alt="my picture" width={500} height={400} />
                    </div>
                    <div class="p-6">
                        <h5 class="text-center text-gray-900 text-xl font-medium mb-2">User profile</h5>
                        <br></br>
                        <b>Token :</b> {token.substring(0, 80)}... <br />
                        <br></br>
                        <b>User information :</b> {JSON.stringify(user)} <br />
                        <div class="flex items-stretch justify-center px-6 py-8">
                            <button type="button" class=" inline-block px-6 py-2 bg-teal-900 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-teal-900 hover:shadow-lg focus:bg-teal-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-500 active:shadow-lg transition duration-150 ease-in-out">
                                {<a href='/'>กลับไปยังหน้าแรก</a>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br></br><br></br>
        </body>
    )
}

export default withAuth(Profile1)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}