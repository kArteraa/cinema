import styled from "styled-components";

const ReservationItem = ({row,column,price}) => {
    return ( 
        <ReservationItemText>Ряд {row}, Место {column}, Цена {price} Р. </ReservationItemText>
     );
}
 
export default ReservationItem;

const ReservationItemText = styled.Text`
    border:1px solid #fff;
    padding:10px;
    margin-bottom:20px;
`