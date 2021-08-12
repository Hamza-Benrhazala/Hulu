import {useState, useEffect} from 'react'
import styles from '../styles/Home.module.css'
import Router, {useRouter} from 'next/router'
import NavIcons from '../components/NavIcons.js'
import Results from '../components/results.js'
import Head from 'next/head'

export default function Trending({TrendingResults, TrendSimilairRes}) {

	return (
    <>
		<NavIcons title="Trending | Hulu"/>
		<Results
		data = {TrendingResults}
		SimilarMoviesData= {TrendSimilairRes.results}
		/>
	</>
   	)
}

export async function getServerSideProps(context) {

  const API_KEY = process.env.API_KEY;
  
  const url = "https://api.themoviedb.org/3";

  const movieId= context.query.movie;

  const TrendingReq = await fetch(`${url}/trending/all/week?api_key=${API_KEY}&language=en-US`)
  .then(res => res.json())
  .catch((er)=> console.log(er))

  if (!TrendingReq) {
      return {
        notFound: true,
      }
    }

  const movieReq = await fetch(      
  `${url}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`)
  .then(mRes => mRes.json())
  .catch((er)=> console.log(er))

  if (!movieReq) {
      return {
        notFound: true,
      }
    }

  return {
    props: {
      TrendingResults: TrendingReq.results,
      TrendSimilairRes: movieReq
    }
  }
}