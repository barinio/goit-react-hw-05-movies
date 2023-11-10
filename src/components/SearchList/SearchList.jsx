import { useLocation } from 'react-router-dom';

import NotInfo from 'components/NotInfo/NotInfo';
import { defaultImg } from 'services/imgDefault';
import { MovieLink } from './SearchList.styled';
import { MoviesList } from 'components/TrendingList/TrendingList.styled';

const SearchList = ({ searchResult: { results } }) => {
  const location = useLocation();
  return (
    <>
      <div className="container">
        <MoviesList>
          {results?.length > 0 ? (
            results.map(({ id, poster_path, title }) => (
              <li key={id}>
                <MovieLink to={`${id}`} state={{ from: location }}>
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
            ))
          ) : (
            <NotInfo />
          )}
        </MoviesList>
      </div>
    </>
  );
};

export default SearchList;
