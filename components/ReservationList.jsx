import styled from 'styled-components';
import ReservationItem from './ReservationItem';
import { Button } from 'react-native';
const ReservationList = ({ reservationPlace,reservationHandler, price, totalPrice }) => {
    const totalPriceText = `Забронировать: ${totalPrice} Р.`;
    if (reservationPlace.length) {
        return (
            <ReservationListView>
                <ReservationListTitle>Ваши места</ReservationListTitle>
                {reservationPlace.map((place,index) => (
                    <ReservationItem key={index} row={place.row} column={place.column} price={price} />
                ))}
                <Button onPress={reservationHandler} title={totalPriceText} />
            </ReservationListView>
            
        );
    }
};

export default ReservationList;

const ReservationListView = styled.View`
    width: 80%;
    height: auto;
    margin: 30px auto 0 auto;
    background-color: #3a3a3c;
    padding: 20px;
    margin-bottom: 20px;
`;

const ReservationListTitle = styled.Text`
    font-size: 20px;
    font-weight: 700;
    margin-bottom:20px;
`;
