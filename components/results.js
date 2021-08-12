import styles from '../styles/Home.module.css'
import Thumbnail from './thumbnail.js'
import {useState, useEffect} from 'react'

export default function Results({data, setData, SimilarMoviesData, setControlledSwiper}) {

	const thumbnailVar = data.map( result => {
		if(result.media_type !== "person" && result.overview ) {
			return (
		    	<Thumbnail
			    key = {result.id}
			    result = {result}
			    data={data}
			    SimilarMoviesData= {SimilarMoviesData}
			    setControlledSwiper = {setControlledSwiper}
			    />
	        )
		}
	})

	return (
	<div className={styles.container} >
   		{thumbnailVar}
	</div>
	)
}