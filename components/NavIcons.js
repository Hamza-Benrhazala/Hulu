import styles from '../styles/Home.module.css'
import Hulu from '../public/hulu_logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function NavIcons({title}) {
	
	return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
  		<div className={styles.HeaderIcon} >
        <div style= {{display: "flex"}} >
          <Link href="/">
            <div data-title ="Home" className={styles.Icon} >
              <svg width={35} height={35} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <p>Home</p>
            </div>
          </Link>
          <Link href="/trending">
            <div data-title ="Trending" className={styles.Icon}>
             <svg width={35} height={35} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
             </svg>
             <p>Trending</p> 
            </div>
          </Link>
          <div data-title ="Verified" className={styles.Icon}>
            <svg width={35} height={35} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <p>Verified</p>
          </div>
          <div data-title ="Collection" className={styles.Icon}>
            <svg width={35} height={35} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p>Collection</p>
          </div>
          <Link href="/search">
            <div data-title ="Search" className={styles.Icon}>
              <svg width={35} height={35} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p>Search</p>
            </div>
          </Link>
          <div data-title ="Profile" className={styles.Icon}>
            <svg width={35} height={35} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <p>Profile</p>
          </div>
        </div>
        <Image width ={120} height={65} src={Hulu} alt="Hulu logo" />
      </div>
    </>
  )
}