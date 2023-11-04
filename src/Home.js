import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Blog from './Blog';
import AddBlog from './AddBlog';



function Home() {
    const [data, setData] = useState(false);
    const [id, setId] = useState(0);

    // function handleTitleClick(i){
    //     setId(i);       
    //     axios.post('http://127.0.0.1:5000/getBlogs',{'id':i})
    //     .then((res) => {
    //         localStorage.setItem("id", JSON.stringify(i));
    //         console.log(res);
    //     });     
    // }
    
    function handleSubmit(){
        
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/')
        .then((res) => {
            setData(res.data);
            console.log(res.data);
        })
    }, []) 
    // bg-gradient-to-b from-violet-600 via-violet-900 to-violet-900
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col  items-center justify-center h-[40vh]'>
                <div className='text-6xl mb-4 font-serif font-extrabold hover:tracking-widest duration-200 ease-in-out tracking-wide bg-clip-text cursor-pointer '>
                    BLO
                    <span className='text-yellow-400'>GG</span>
                    O
                </div>
                <div className='text-black text-xl font-light tracking-widest'>
                    ADD YOUR OWN BLOGGO TODAY!
                </div>

                <AddBlog/>

                
            </div>
            <div className='h-screen bg-gray-100 p-12'>
                    <div className='grid grid-cols-4 gap-25'>
                        {/* {map} use karo yaha */}
                        {data?
                            data.map((data,idx)=> {
                                // console.log(data)
                                return (
                                    <div className='flex flex-col h-[65vh] w-72 items-center bg-white'>
                                        <div className='h-1/2'>
                                            <img className='h-52' src='https://wallpapercave.com/wp/sw7VnqY.jpg'/>
                                        </div>
                                        
                                        <div className='flex flex-col items-center justify-center space-y-4'>
                                            <div className='text-center h-1/5 font-light text-lg w-full'>
                                                {data.genre}
                                            </div>

                                            {/* Fix the content vertical alignment. Not in Center.  */}
                                            <div className='p-2 text-center content-center h-3/5 w-full'>
                                                <a 
                                                    href={`/getBlogs/${data.id}`} 
                                                    key={idx} 
                                                    className='text-xl text-black font-serif no-underline tracking-wide'
                                                >
                                                    {data.title.slice(0,80)}
                                                </a>
                                            </div>
                                            <div className='mt-5 font-light text-lg text-center h-1/5 w-full'>
                                                26th November, 2023
                                            </div>
                                        </div>
                                    </div>
                                )
                            }):
                            <div>Loading...</div>
                        }
                    </div>
            </div>
        </div>
  )
}

export default Home
