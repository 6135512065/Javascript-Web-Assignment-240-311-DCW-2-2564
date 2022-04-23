import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home({ token }) {

  return (
    <body class="bg-teal-100">

      <Navbar />
      <div>
        <br></br><br></br>

        <div class="flex items-stretch  justify-center">
          <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">ยินดีต้องรับเข้าสู่สถานที่ท่องเที่ยวในเกาะพีพี</h1>
        </div>

        <div class="flex items-stretch  justify-center">
          <h2 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">รวมจุดเช็คอินยอดฮิตที่เที่ยวเกาะพีพี อ่าวมาหยา ปิเละลากูน สวยขนาดนี้ ไม่ไปไม่ได้แล้ว!</h2>
        </div>

        <br></br>

        <div class="flex items-stretch  justify-center">
          <div class="bg-teal-300 rounded overflow-hidden shadow-lg mr-4">
            <br></br>
            <h1 class="text-center mx-auto mb-6 text-2xl font-semibold text-black lg:text-3xl">ดำน้ำตื้นที่เกาะไม้ไผ่</h1>
            <div class="flex flex-wrap justify-center">
              <img
                src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1630402143/blog/vobhzhcxr5r2pfzxmflj.webp"
                class="max-w-sm h-auto shadow-lg mr-4"
                alt="..."
              />
              <img
                src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1630402143/blog/vobhzhcxr5r2pfzxmflj.webp"
                class="max-w-sm h-auto shadow-lg"
                alt="..."
              />
            </div>
            <div class="px-6 py-4">
              <div class="text-center font-bold text-xl mb-2">{<a href='/content1'>The Coldest Sunset</a>}</div>
              <p class="text-gray-700 text-center text-lg	">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>

      </div>
    </body>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}