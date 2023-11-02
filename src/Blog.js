import React, {useState, useEffect} from 'react'
import axios from 'axios';


function Blog() {
  const [data, setData] = useState(false);

  const id = window.location.pathname.split('/')[2];

  useEffect(() => {
    axios.post('http://127.0.0.1:5000/getBlogs',{'id':id})
    .then((res) => {
      setData(res.data[0]);
      // console.log(res.data);
    })
}, [])

return (
  <div className='bg-purple-700 h-screen w-full p-4'>
      {/* BLOG PAGE Params: {window.location.pathname.split('/getBlogs')} */}
      <div className='bg-slate-400 opacity h-[95%] w-full rounded-md'>
        {
          data?
            <div>
              <div className='p-3 text-xl'> TITLE: {data.title} </div>
              <div className='p-3 text-xl'> CONTENT: {data.content} </div>
            </div>
            :
            <div className=''>Loading...</div>
        }
      </div>
    </div>
  )
}
// onClick={() => {handleTitleClick(data.id)}}
export default Blog
