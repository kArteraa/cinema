import styled from 'styled-components';
import Movie from './Movie';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useEffect, useState,useContext } from 'react';

const MoviesListWrapper = styled.View`
    padding: 20px 0px 0 0px;
`;

const MovieFlatList = styled.FlatList`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
`;

const MoviesList = ({navigation}) => {
    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get("http://192.168.0.107/queries/getMovies.php")
        .then(({data}) => {
            setData(data);
        }).catch(err => {
            alert("Ошибка");
        })
    },[]);


    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Movie",{...item})}>
            <Movie title={item.name} genre={item.genre} img={item.img} rating={item.rating_age} />
        </TouchableOpacity>
    );

    return (
        <MoviesListWrapper>
            <MovieFlatList data={data} renderItem={renderItem} numColumns="2" />
        </MoviesListWrapper>
    );
};

export default MoviesList;
