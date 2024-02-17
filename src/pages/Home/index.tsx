import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  SpinContainer,
  LoadingIndicator,
  CardsContainer,
} from "./styles";
import { ApplicationState } from "~/store/types";
import { listMoviesRequest } from "~/store/redux/movies/actions";
import MovieCard from "./MovieCard";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: ApplicationState) => state.movies.data);
  const loading = useSelector(
    (state: ApplicationState) => state.movies.loading
  );

  useEffect(() => {
    if (movies.length === 0) dispatch(listMoviesRequest());
  }, []);

  return (
    <Container>
      {loading ? (
        <SpinContainer>
          <LoadingIndicator />
        </SpinContainer>
      ) : (
        <CardsContainer>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </CardsContainer>
      )}
    </Container>
  );
};

export default Home;
