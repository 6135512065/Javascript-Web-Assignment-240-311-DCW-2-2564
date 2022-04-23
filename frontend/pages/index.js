import Navbar from '../components/navbar'

export default function Home({ token }) {

  return (
    <body class="bg-teal-100">
      <Navbar />
      <div>
        <br></br><br></br>
        <div class="flex items-stretch  justify-center flex-shrink-0 text-teal-900 mr-6">
          <span class="font-semibold text-5xl tracking-tight">ยินดีต้องรับเข้าสู่สถานที่ท่องเที่ยวในเกาะพีพี</span>
        </div>
        <br></br>
        <div class="flex items-stretch  justify-center flex-shrink-0 text-teal-900 mr-6">
          <span class="font-semibold text-4xl tracking-tight">แหล่งรวบรวมจุดเช็คอินยอดฮิตบนเกาะพีพี</span>
        </div>
        <br></br><br></br>
        <div class="flex items-stretch  justify-center">
          <div class="bg-teal-300 rounded overflow-hidden shadow-lg mr-4">
            <br></br>
            <div class="flex items-stretch  justify-center flex-shrink-0 text-teal-900 mr-6">
              <span class="font-semibold text-2xl tracking-tight">ออกสำรวจหาดต่าง ๆ บนรอบเกาะพีพีดอน</span>
            </div>
            <div class="flex flex-wrap justify-center ml-8 mr-8 mt-4 mb-2 ">
              <img
                src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1630402143/blog/vobhzhcxr5r2pfzxmflj.webp"
                class="max-w-sm h-auto shadow-lg mr-4"
                alt="..."
              />
              <img
                src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1630402100/blog/v4awyk9siurqhybwy3ul.webp"
                class="max-w-sm h-auto shadow-lg"
                alt="..."
              />
            </div>
            <div class="flex items-stretch justify-center px-6 py-4">
              <button type="button" class=" inline-block px-6 py-2.5 bg-teal-900 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-teal-900 hover:shadow-lg focus:bg-teal-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-500 active:shadow-lg transition duration-150 ease-in-out">
                {<a href='/content1'>กดเพื่อดูรายละเอียดเพิ่มเติม</a>}
              </button>
            </div>
          </div>
        </div>
        <br></br><br></br>
        <div class="flex items-stretch  justify-center">
          <div class="bg-teal-300 rounded overflow-hidden shadow-lg mr-4">
            <br></br>
            <div class="flex items-stretch  justify-center flex-shrink-0 text-teal-900 mr-6">
              <span class="font-semibold text-2xl tracking-tight">ตามเก็บทุกเกาะให้ครบที่เกาะพีพีเล</span>
            </div>
            <div class="flex flex-wrap justify-center ml-8 mr-8 mt-4 mb-2 ">
              <img
                src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1630402244/blog/d21bj2lmdljl142tw78l.webp"
                class="max-w-sm h-auto shadow-lg mr-4"
                alt="..."
              />
              <img
                src="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1630402539/blog/rovtfkxavw0vrgsu4jpc.webp"
                class="max-w-sm h-auto shadow-lg mr-4"
                alt="..."
              />
            </div>
            <div class="flex items-stretch justify-center px-6 py-4">
              <button type="button" class=" inline-block px-6 py-2.5 bg-teal-900 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-teal-900 hover:shadow-lg focus:bg-teal-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-500 active:shadow-lg transition duration-150 ease-in-out">
                {<a href='/content2'>กดเพื่อดูรายละเอียดเพิ่มเติม</a>}
              </button>
            </div>
          </div>
        </div>
        <br></br><br></br>
      </div>
    </body>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}