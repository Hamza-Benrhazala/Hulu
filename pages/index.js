import { useState } from "react";
import requests from "../utils/requests.js";
import Header from "../components/Header.js";
import Results from "../components/results.js";
import Filters from "../components/Filters.js";
import NavIcons from "../components/NavIcons.js";

export default function Home({ results, movieResult }) {
  const [, setData] = useState(results);

  const [isSortByopen, setIsSortByopen] = useState(false);

  const [controlledSwiper, setControlledSwiper] = useState(null);

  const [, setSearchItems] = useState(true);

  return (
    <div onClick={() => setSearchItems(false)}>
      <div
        onClick={() => {
          if (isSortByopen) setIsSortByopen(!isSortByopen);
        }}
      >
        <NavIcons title="Hulu | Watch Your Favorite Movies Online" />
        <Header controlledSwiper={controlledSwiper} />
        <Filters
          data={results}
          setData={setData}
          isSortByopen={isSortByopen}
          setIsSortByopen={setIsSortByopen}
        />
        <Results
          data={results}
          SimilarMoviesData={movieResult.results}
          setControlledSwiper={setControlledSwiper}
        />
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const API_KEY = process.env.API_KEY;

  const url = "https://api.themoviedb.org/3";

  const genre = context.query.genre || "toprated";

  const movieId = context.query.movie;

  const movieReq = await fetch(
    `${url}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`
  ).then((mRes) => mRes.json());

  const request = await fetch(
    `${url}${requests[genre]?.url || requests.toprated.url}`
  ).then((res) => res.json());

  if (!movieReq) {
    return {
      notFound: true
    };
  }

  if (!request) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      results: request.results,
      movieResult: movieReq
    }
  };
}
