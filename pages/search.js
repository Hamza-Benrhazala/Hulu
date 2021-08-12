import {useState, useEffect} from 'react'
import styles from '../styles/Home.module.css'
import Router, {useRouter} from 'next/router'
import NavIcons from '../components/NavIcons.js'
import Results from '../components/results.js'
import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../public/avatar.jpg'


export default function Search({SearchRes, movieResult}) {

	const [keyword, SetKeyword] = useState();

	const [sData, SetSData] = useState([]);

	const router = useRouter()

	const {genre} = router.query

	function handleSearch(e) {
	   const q = e.target.value
	   if(q) {
	   	SetKeyword(q)
	   	Router.push(`?q=${q}`)
	   }
	   else SetKeyword('')
	}
	
	const Persons= SearchRes.filter((item) => item.media_type === "person")

	const Person = Persons.map((person) => {
		const BASE_URL = "https://image.tmdb.org/t/p/w200"
		return (
        <div key ={person.id} className={styles.person} >
	        <Image
	        width={200}
	        height={200}
	        src={person.profile_path ? `${BASE_URL}${person.profile_path}` 
	        : Avatar}
	        alt={person.name}
	        />
	        <p>{person.name}</p>
        </div>
        )
	})

	// console.log(Persons);

	console.log(movieResult);

	return (
		<>
			<NavIcons title="Search | Hulu" />
			<ul className= {styles.SearchUl} >
			  <li>
			    <input
			    type="text"
			    placeholder="Type something..."
			    onChange= {handleSearch}
			    />
			  </li>
			  {/*<li className= {keyword && searchItems ? styles.Container : undefined}>
			    {keyword && searchItems ? ElSearchResults : undefined}
			  </li>*/}
			</ul>
			<div className={styles.personContainer}>
				{keyword ? Person : undefined}
			</div>
			{keyword ? <Results data={SearchRes}
			SimilarMoviesData = {movieResult.results} /> : undefined}
		</>
	)
}
export async function getServerSideProps(context) {

  const API_KEY = process.env.API_KEY;
  
  const url = "https://api.themoviedb.org/3";

  const keyword= context.query.q;

  const movieId= context.query.movie;

  const SearchReq = await fetch(`${url}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(keyword)}`)
  .then(res => res.json())

  const movieReq = await fetch(      
  `${url}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`).then(mRes => mRes.json())

  if (!SearchReq) {
    return {
      notFound: true,
    }
  }

  if (!movieReq) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      SearchRes: SearchReq.results,
      movieResult: movieReq,
    }
  }
}