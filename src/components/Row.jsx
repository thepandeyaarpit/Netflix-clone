import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Row = ({title, fetchURL}) => {

    const [movies, setMovies] = useState([])

    useEffect(()=>{
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    },[fetchURL])

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center'>
            <div id={'slider'}>
                {movies.map((item, id) => {
                    <div className='w-[160px] sm:w[200px] md:w-[240px] lg:w[280px] inline-block cursor-pointer relative p-2'>
                        <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                    </div>
                })}
            </div>
        </div>
    </>
  )
}

export default Row