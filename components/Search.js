import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'
import Router, {useRouter} from 'next/router'
import Image from 'next/image'

export default function Search({SearchResult}) {
	
	const BASE_URL = "https://image.tmdb.org/t/p/w300"
	
	//console.log(SearchResult)
	
	const Person = <img width= {45} height= {45} src= { 
			`${BASE_URL}${SearchResult.profile_path}`} />

	const MOrTv = 	<img width= {45} height= {45} src= { 
			`${BASE_URL}${SearchResult.poster_path}` || `${BASE_URL}${SearchResult.backdrop_path}`} />	
	
	return (	
    <div>
		<p title= {SearchResult.title || SearchResult.name} style= {{padding: "5px 0 5px 10px", color: "white", whiteSpace: "nowrap", overflow: "hidden", textOverflow: 'ellipsis'}} >{SearchResult.title || SearchResult.name}</p>
    </div>
	)
}