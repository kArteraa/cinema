import styled from 'styled-components';
import Header from '../components/Header';
import { useEffect,useContext,useState } from 'react';
import { Text } from 'react-native';
import ReservationItem from '../components/ReservationItem';
import { UserContext } from '../App';
import { ScrollView } from 'react-native';
import axios from 'axios';

const ProfileScreen = ({navigation}) => {
    const [reservationPlace,setReservationPlace] = useState([]);
    const [data,setData] = useState([]);
    const {user} = useContext(UserContext);

    useEffect(() => {
        axios.get(`http://192.168.0.107/queries/getUser.php?id=${user}`)
        .then(({data}) => {
            setData(data);
        }).catch(err => {
            alert("Ошибка");
        })
    },[]);

    useEffect(() => {
        axios.get(`http://192.168.0.107/queries/getReservations.php?id=${user}`)
        .then(({data}) => {
            console.log(data);
            setReservationPlace(data);
        }).catch(err => {
            alert("Ошибка");
        })
    },[]);

    return (
        <>
            <Header navigation={navigation} />
            <ProfileText>Ваше Имя: {data.name}</ProfileText>
            <ProfileText>Ваша Фамилия: {data.surname}</ProfileText>
            <ProfileText>Ваша бронь:</ProfileText>
            <ScrollView>
                {reservationPlace.map((place,index) => (
                    <ReservationBlockItem>
                        <Text style={{fontWeight:700,fontSize:20}}>{place.name}</Text>
                        <Text style={{marginTop:10,marginBottom:10}}>Время начала: {place.date}</Text>
                        <ReservationItem key={index} row={place.row} column={place.column} price={place.price} />
                    </ReservationBlockItem>
                    
                ))}
            </ScrollView>
        </>
    );
};

export default ProfileScreen;

const ProfileText = styled.Text`
    padding-left:20px;
    margin:10px;
`

const ReservationBlockItem = styled.View`
    display:flex;
    flex-direction:column;
    padding:20px 20px 0 20px;
    border:1px solid #eee;
    background-color:#000;
`