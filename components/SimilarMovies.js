import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Router, {useRouter} from 'next/router'

export default function SimilarMovies({movie, BASE_URL, setclickedData, SimilarMoviesData}) {
	
	const router = useRouter()

	const {genre} = router.query;


	function getClickedSimilarMovie(id) {
		const clickedSimilarThumb = SimilarMoviesData.map(x => {
		  if (id === x.id) {
		    Router.push(`?genre=${genre}&movie=${movie.id}`)
		    setclickedData(movie)
		  }
		})
	}

	return ( 
		<div id = {movie.id}
		key = {movie.id}
		className= {styles.similarMovies}
		onClick= {()=> getClickedSimilarMovie(movie.id)}
		>
		  <Image
		  style= {{margin: '0'}}
		  width={250} 
		  height={350} 
		  src= { `${BASE_URL}${movie.poster_path}`||
		  `${BASE_URL}${movie.backdrop_path}`}
		  alt={movie.title}
		  />
		  <div className={styles.rating}>{movie.vote_average.toFixed(1) || "N/A"}</div>
		  <p title={movie.title} style= {{fontSize: "1.2em", fontWeight: "bold", cursor: "pointer"}}>{movie.title}</p>
		</div>
	);
}