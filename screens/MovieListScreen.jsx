import MoviesList from '../components/MoviesList';
import Header from "../components/Header";

const MovieListScreen = ({ navigation }) => {
    return (
        <>
            <Header navigation={navigation} />
            <MoviesList navigation={navigation} />
        </>
    );
};

export default MovieListScreen;
