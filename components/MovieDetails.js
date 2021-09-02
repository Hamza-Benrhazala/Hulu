import Image from 'next/image';
import styles from '../styles/Home.module.css'
import SimilarMovies from '../components/SimilarMovies.js'
import Router, {useRouter} from 'next/router'
import { useSpring, animated, config } from 'react-spring'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CloseIcon from '@material-ui/icons/Close';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard]);

export default function MovieDetails({result, setclickedData, isThumbPressed, setThumbPressed, BASE_URL, SimilarMoviesData, setControlledSwiper}) {
  
  const props = useSpring({
    from: {opacity: 0},
    to: {opacity: 1}, 
    delay: 300,
    config: config.gentle,
  })

  const router = useRouter()

  const {genre} = router.query

  const {movie} = router.query

  let similarMovies;

  if(SimilarMoviesData) {
    similarMovies = SimilarMoviesData.map(movie =>
      <SwiperSlide key = {movie.id}>
      <SimilarMovies
      key = {movie.id}
      movie ={movie}
      BASE_URL= {BASE_URL}
      SimilarMoviesData= {SimilarMoviesData}
      setclickedData= {setclickedData}
      />
      </SwiperSlide> 
    )
  }

  return (
    <div className= {styles.container__movieDetails}>
      <div className={styles.shadowContainer} onClick={()=> {setThumbPressed(false);window.document.body.classList.remove(`${styles.bodyDisabled}`)}} ></div>
      <div style= {{display: "flex"}}>
        <animated.div style= {props} >
          <div className= {styles.movieDetails}>
            <div className= {styles.childMovieDetails}>
              <Image
              width={300}
              height={450}
              src={ `${BASE_URL}${result.poster_path}`||
              `${BASE_URL}${result.backdrop_path}`}
              alt={result.title}
              />
              <div className= {styles.details}>
                <p className= {styles.title}>{result.title}</p>
                <p className= {styles.overview}>{result.overview}</p>
                <p className= {styles.Popularity}><span>Popularity: </span>{result.popularity}</p>
                <p className= {styles.releaseDate}><span>Release date: </span>{result.release_date}</p>
              </div>
            </div>
            <CloseIcon fontSize="large" className= {styles.x} onClick={()=> {setThumbPressed(false);window.document.body.classList.remove(`${styles.bodyDisabled}`)}}/>
            <div className= {styles.container__similarMovies}>
              <Swiper
              containerModifierClass= "swiper-OO"
              slidesPerView= {4}
              spaceBetween= {20}
              setWrapperSize= "true"
              scrollbar= {{ draggable: true}}
              mousewheel= {{invert: true, sensitivity: 2}}
              navigation= {
                { 
                  nextEl: `.${styles.swiperSimilarNext}`, 
                  prevEl: `.${styles.swiperSimilarPrev}`,
                  disabledClass: `${styles.swiperButtonDisabled}`
                }
              }
              onSwiper={(swiper) => {
                swiper.wrapperEl.classList
                .add(`${styles.swiperFlex}`)
              }}
              breakpoints={
                {320: {slidesPerView: 1}, 500: {slidesPerView: 2}, 900: {slidesPerView: 3}, 1100: {slidesPerView: 4}}

              }
              >
                {similarMovies}
                <div className= {styles.swiperSimilarPrev}>
                  <div className= {styles.prevArrow}></div>
                </div>
                <div className={styles.swiperSimilarNext}>
                  <div className= {styles.nextArrow}></div>
                </div>
              </Swiper>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  )
}