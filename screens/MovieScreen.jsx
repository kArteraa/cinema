import styled from 'styled-components';
import Session from '../components/Session';
import MovieHeader from '../components/MovieHeader';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Header from "../components/Header";
import { useEffect,useState } from 'react';
import axios from 'axios';

const MovieScreen = ({ route,navigation }) => {
    const [data,setData] = useState([]);
    const {id,name,genre,rating_age,img} = route.params;
 
    useEffect(() => {
        axios.get(`http://192.168.0.107/queries/getSessions.php?id=${id}`)
        .then(({data}) => {
            setData(data);
        }).catch(err => {
            alert("Ошибка");
        })
    },[]);
    
    navigation.setOptions({title:name});
    
    return (
        <>
            <Header navigation={navigation} />
            <MovieHeader title={name} genre={genre} rating={rating_age} img={img} />
            <MovieContent>
                <MovieContentTitle>Список сеансов</MovieContentTitle>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("Tickets",{...route.params,id:item.id})}>
                            <Session key={item.id} time={item.datee} price={item.price} />
                        </TouchableOpacity>
                    )}
                />
            </MovieContent>
        </>
    );
};

export default MovieScreen;

const MovieContent = styled.View`
    padding: 20px;
`;

const MovieContentTitle = styled.Text`
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #fff;
    padding-bottom: 10px;
`;
