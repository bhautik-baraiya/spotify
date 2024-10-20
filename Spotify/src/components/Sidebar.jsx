import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='w-[100%] h-full p-2 flex-col gap-2 text-white hidden lg:flex '>
                <div className='bg-[#121212] h-[20%] rounded flex flex-col justify-around'>
                    <div onClick={()=>navigate("/")} className='flex items-center gap-3 pl-8 cursor-pointer'>
                        <img src={assets.home_icon} className='w-6' />
                        <p className='font-bold '>Home</p>
                    </div>
                    <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                        <img src={assets.search_icon} className='w-6' />
                        <p className='font-bold '>Serach</p>
                    </div>
                </div>
                <div className="bg-[#121212] h-[85%] rounded  w-[100%]">
                    <div className='h-[10%] p-4 flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <img className='w-6' src={assets.stack_icon} alt="" />
                            <p>Your Library</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img className='w-4' src={assets.arrow_icon} alt="" />
                            <img className='w-4' src={assets.plus_icon} alt="" />
                        </div>
                    </div>
                    <div className='p-3 bg-[#242424] m-2 rounded font-semibold flex flex-col justify-start pl-4 '>
                        <h1>Create First Playlist</h1>
                        <p className='font-light '>It's easy we will help you</p>
                        <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 w-[55%] text-base'>Create playlist</button>
                    </div>
                    <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col justify-start pl-4 mt-4 '>
                        <h1>Lets findsome podcasts to follow</h1>
                        <p className='font-light '>we'll keep you update on new episodes</p>
                        <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 w-[60%] text-base'>Browse Podcast</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
