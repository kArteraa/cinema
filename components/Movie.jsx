import styled from 'styled-components';

const Movie = ({ title, rating, genre, img }) => {
    return (
        <MovieItem>
            <MovieItemImage
                source={{
                    uri: img,
                }}
            />
            <MovieItemInfo>
                <MovieItemText>{title}</MovieItemText>
                <MovieItemGenre>{genre}</MovieItemGenre>
            </MovieItemInfo>

            <MovieItemRating>{rating}</MovieItemRating>
        </MovieItem>
    );
};

export default Movie;

const MovieItem = styled.View`
    width: 175px;
    height: 250px;
    margin: 0 10px 10px 10px;
    
`;

const MovieItemInfo = styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30%;
    background-color: rgba(204, 12, 131, 0.8);
    border-radius: 0 0 10px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 5px;
`;

const MovieItemText = styled.Text`
    text-align: center;
    font-weight: 700;
    padding-top: 5px;
`;

const MovieItemGenre = styled.Text`
    font-size: 12px;
`;

const MovieItemRating = styled.Text`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 2px 7px;

    border-radius: 5px;

    font-size: 12px;
`;

const MovieItemImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;
