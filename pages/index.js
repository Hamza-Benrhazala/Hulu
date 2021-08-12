import {useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import requests from '../utils/requests.js'
import Header from '../components/Header.js'
import Results from '../components/results.js'
import Thumbnail from '../components/thumbnail.js'
import Filters from '../components/Filters.js'
import Router, {useRouter} from 'next/router'
import Link from 'next/link'
import SearchIcon from '@material-ui/icons/Search'
import Hulu from '../public/hulu_logo.png'
import NavIcons from '../components/NavIcons.js'

export default function Home({results, movieResult}) {

  const [data, setData] = useState(results)

  const [isSortByopen, setIsSortByopen] = useState(false)

  const [controlledSwiper, setControlledSwiper] = useState(null);

  const [keyword, SetKeyword] = useState();

  const [sData, SetSData] = useState([]);

  const [searchItems, setSearchItems] = useState(true)

  const router = useRouter()

  const {genre} = router.query

  // function handleSearch(e) {
  //    const q = e.target.value
  //    if(q) SetKeyword(q)
  //    else SetKeyword('')
  // }

  // useEffect(async() => {
  //   if (keyword) {
  //     Router.push(`?genre=${genre || "toprated"}&q=${keyword}`)
  //     const API_KEY = '14b0a966f2e070912953d42efcfb3c2e'
  //     const url = "https://api.themoviedb.org/3";
  //     const SearchReq = await fetch(`${url}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(keyword)}`)
  //     .then(res => res.json())
  //     SetSData(SearchReq.results)
  //   }
  // },[keyword])

  return (
    <div onClick= {()=> setSearchItems(false)} >
      <div onClick= {() => {if(isSortByopen) setIsSortByopen(!isSortByopen)}} >
        <NavIcons
        title= "Hulu | Watch Your Favorite Movies Online"
        />
        <Header controlledSwiper= {controlledSwiper} />
        <Filters 
        data = {results}
        setData= {setData}
        isSortByopen= {isSortByopen}
        setIsSortByopen= {setIsSortByopen}
          /> 
        <Results
        data = {results}
        SimilarMoviesData = {movieResult.results}
        setControlledSwiper= {setControlledSwiper}
        />
      </div>
    </div>
  )
}
export async function getServerSideProps(context) {

  const API_KEY = process.env.API_KEY;
  
  const url = "https://api.themoviedb.org/3";
  
  const genre= context.query.genre || "toprated";
  
  const movieId= context.query.movie;

  const keyword= context.query.q;
  
  const movieReq = await fetch(      
  `${url}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`)
  .then(mRes => mRes.json())
  .catch((er)=> console.log(er))
  
  const request = await fetch(      
    `${url}${requests[genre]?.url ||
     requests.toprated.url}`)
  .then(res => res.json())
  .catch((er)=> console.log(er))

  if (!movieReq) {
    return {
      notFound: true,
    }
  }

  if (!request) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      results: request.results,
      movieResult: movieReq,
    }
  }
}
