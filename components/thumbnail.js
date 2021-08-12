import {useState, useEffect} from 'react'
import Router, {useRouter} from 'next/router'
import Image from 'next/image'
import Document from 'next/document'
import styles from '../styles/Home.module.css'
import MovieDetails from '../components/MovieDetails.js'
import requests from '../utils/requests.js'
import Poster from '../public/Poster.jpg'

export default function Thumbnail({result, data, setData, SimilarMoviesData, setControlledSwiper}) {

  const router = useRouter()

  const {genre} = router.query
  
  const {q} = router.query

  const BASE_URL = "https://image.tmdb.org/t/p/w300"
  
  const [isThumbPressed, setThumbPressed] = useState(false)
  
  const [clickedData, setclickedData] = useState("")

  function clickedThumbnail(id, e) {
    
    window.document.body.classList.add(`${styles.bodyDisabled}`)
    
    const clickedThumb = data.map(data => {
        if (id === data.id) {
          
          Router.push(q ? `?q=${q}&movie=${data.id}` : `${ genre ? `?genre=${genre}&movie=${data.id}` :  `?movie=${data.id}`}`)   
          setclickedData(data)
          
          setThumbPressed(true)
        }
    })
  }
  
  const movieDetails = (
   <MovieDetails
    result = {clickedData}
    setclickedData= {setclickedData}
    BASE_URL = {BASE_URL}
    setThumbPressed = {setThumbPressed}
    isThumbPressed= {isThumbPressed}
    SimilarMoviesData= {SimilarMoviesData}
    setControlledSwiper= {setControlledSwiper} 
    />
  );

  return (
    <div>
      <div className={styles.thumbnail} onClick = {() => {clickedThumbnail(result.id)}} >
        <Image
        width={300} 
        height={450} 
        src= {result.poster_path ? `${BASE_URL}${result.poster_path}` :
        Poster} />
        <div className={styles.rating}>{result.vote_average || "N/A"}</div>
        <p title={result.overview} className={styles.overview}>{result.overview}</p>
        <h2 title={result.title || result.name} className={styles.title} >{result.title || result.name}</h2>
        <p className={styles.date}>{result.release_date || result.first_air_date} • <svg style= {{verticalAlign: "top"}} width={20} height={20} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
</svg> {result.vote_count}</p>
      </div>
      {isThumbPressed ? movieDetails : undefined }
    </div> 
  )
}