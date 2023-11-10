import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { getTrendingMovies } from 'services/api';
import { defaultImg } from 'services/imgDefault';
import { MovieLink, Title, TrendingTodayList } from './TrendingList.styled';
import Pagination from 'components/Pagination/Pagination';

function TrendingList() {
  const [trendsMovies, setTrendsMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const trendingMovie = async () => {
      try {
        const films = await getTrendingMovies(page);
        setTotalPages(Math.floor(films.total_pages / 20));
        setSearchParams({ page: page });
        setTrendsMovies(films);
        return;
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    trendingMovie();
  }, [page, setSearchParams]);

  return (
    <>
      <div className="container">
        <Title>Trending today</Title>
        <TrendingTodayList>
          {trendsMovies.results?.map(({ id, poster_path, title }) => (
            <li key={id}>
              <MovieLink to={`movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : defaultImg
                  }
                  alt={title}
                  width={264}
                  height={396}
                />
                <h3>{title}</h3>
              </MovieLink>
            </li>
          ))}
        </TrendingTodayList>
        {trendsMovies.length !== 0 && page <= totalPages && !error && (
          <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        )}
      </div>
    </>
  );
}

export default TrendingList;
