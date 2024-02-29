import styled from "styled-components";
const MovieHeader = ({title,genre,rating,img}) => {
    return ( 
        <MovieHeaderView>
                <BackgroundImage
                    source={{
                        uri: img,
                    }}
                />
                <Blur />
                <MovieHeaderInfo>
                    <MovieHeaderInfoTitle>{title}</MovieHeaderInfoTitle>
                    <MovieHeaderInfoGenre>{genre}</MovieHeaderInfoGenre>
                    <MovieHeaderInfoTime>1 час 25 мин</MovieHeaderInfoTime>
                </MovieHeaderInfo>
                <MovieHeaderRating>{rating}</MovieHeaderRating>
        </MovieHeaderView>
    );
}
 
export default MovieHeader;

const MovieHeaderView = styled.View`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #fff;

    padding: 10px 20px;

    backdrop-filter: blur(20px) saturate(120%) contrast(200%);
    background-color: rgba(240, 116, 39, 0.4);
`;

const BackgroundImage = styled.Image`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
`;

const Blur = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background-color: rgba(148,87,235, 0.85);
`;

const MovieHeaderInfo = styled.View`
    width: 60%;
`;

const MovieHeaderInfoTitle = styled.Text`
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 20px;
`;

const MovieHeaderInfoGenre = styled.Text`
    margin-bottom: 10px;
    font-size: 12px;
    color: #eee;
`;

const MovieHeaderInfoTime = styled.Text`
    font-size: 12px;
    color: #eee;
`;

const MovieHeaderRating = styled.Text``;