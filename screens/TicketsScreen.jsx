import MovieHeader from '../components/MovieHeader';
import Rows from '../components/Rows';
import ReservationList from '../components/ReservationList';
import { useState,useContext } from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import { UserContext } from '../App';
import axios from 'axios';

const TicketsScreen = ({ route, navigation }) => {
    const [reservationPlace, setReservationPlace] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const { id,name, genre, rating_age, img } = route.params;
    const {user} = useContext(UserContext);

    const placeTouched = (row, column, f) => {
        if (f == 1) {
            setReservationPlace([...reservationPlace, { row: row, column: column }]);
            setTotalPrice(totalPrice + 100);
        } else {
            setReservationPlace(
                reservationPlace.filter(
                    (item) => JSON.stringify(item) !== JSON.stringify({ row: row, column: column }),
                ),
            );
            setTotalPrice(totalPrice - 100);
        }
    };

    const reservationHandler = () => {
        console.log(user);
        if (user == -1) {
            alert("Для бронирования нужно авторизироваться!");
        } else {
            axios.post(`http://192.168.0.107/queries/createReservation.php`,{reservationPlace,id,user})
            .then(({data}) => {
                console.log(data);
                alert("Места забронированы!");
                setReservationPlace([]);
                navigation.navigate("Profile");
            }).catch(err => {
                alert("Ошибка");
            })
        }
    }

    return (
        <>
            <Header navigation={navigation} />
            <ScrollView>
                <MovieHeader title={name} genre={genre} rating={rating_age} img={img} />
                <Rows placeTouched={placeTouched} />
                <ReservationList
                    reservationPlace={reservationPlace}
                    reservationHandler={reservationHandler}
                    price="100"
                    totalPrice={totalPrice}
                />
            </ScrollView>
        </>
    );
};

export default TicketsScreen;
