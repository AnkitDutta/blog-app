import React, {useState, useEffect} from 'react'
import axios from 'axios';
function Blog() {
  const [data, setData] = useState(false);

  const id = window.location.pathname.split('/')[2];

  useEffect(() => {
    axios.post('http://127.0.0.1:5000/getBlogs',{'id':id})
    .then((res) => {
      setData(res.data[0]);
      console.log(res.data);
    })
},[])
// bg-gradient-to-bl from-purple-700 to-slate-900
return (
  <div className='flex flex-col items-center bg-gray-200  h-screen w-screen px-10 pb-10'>
    <a 
      href={'/'}
      className='flex items-center justify-center no-underline p-4 text-6xl mb-16 font-serif font-extrabold hover:tracking-widest duration-200 ease-in-out tracking-wide bg-white text-black w-screen'
    >
        BLO
        <span className='text-amber-400'>GG</span>
        O
    </a>
            <div 
              className='
                flex 
                px-10 
                m-auto 
                rounded-lg 
                bg-gradient-to-bl from-amber-200 via-yellow-400 to-yellow-600 
                h-full 
                w-1/2 
                overflow-y-auto
                scroll-smooth
                no-scrollbar
              '
            >   
          {data?
              <div className='p-5'>
                <div className='text-4xl mb-8 text-center leading-tight font-serif'>{data.title}</div>
                <div className='text-xl  text-center tracking-wide leading-relaxed' >{data.content} </div>
                <div className='my-6 w-full text-center text-lg'>~{data.createdBy}</div>
              </div>
              :
              <div className='mx-auto p-5 text-2xl'>Loading...</div>
            } 
            </div>
              </div>
  )
}
export default Blog