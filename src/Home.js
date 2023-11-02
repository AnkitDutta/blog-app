import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Blog from './Blog';



function Home() {
    const [data, setData] = useState(false);
    const [id, setId] = useState(0);

    function handleTitleClick(i){
        setId(i);       
        axios.post('http://127.0.0.1:5000/getBlogs',{'id':i})
        .then((res) => {
            localStorage.setItem("id", JSON.stringify(i));
            console.log(res);
        });     
    } 

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/')
        .then((res) => {
            setData(res.data);
            console.log(res.data);
        })
    }, []) 

    return (
        <div className=''>
            <div className='bg-gradient-to-b from-violet-600 via-violet-900 to-violet-900 flex items-center justify-center h-[50vh]'>
                <div className='text-5xl font-extrabold hover:tracking-wider duration-200 ease-in-out text-white'>BLOGGO</div>
            </div>
            <div className='h-[50vh] flex'>
                <div className='grid grid-cols-4 gap-28 my-10 ml-10'>
                    {/* {map} use karo yaha */}
                    {data?
                        data.map((data,idx)=> {
                            // console.log(data)
                            return (
                                    <div className='flex flex-col h-64 p-3 bg-indigo-500'>
                                        <img src='https://th.bing.com/th/id/OIP.3l2nfzcHhMemSZooiH3B3AHaFj?pid=ImgDet&rs=1' className='w-25 h-[67%] mb-3'></img>
                                        
                                        <a href={`/getBlogs/${data.id}`}  key={idx} className='mb-2 cursor-pointer text-xl text-white font-bold'>{data.title.slice(0,50)}</a>
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
