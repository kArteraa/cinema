import styled from "styled-components";
const Session = ({price,time}) => {
    return ( 

        <MovieContentSession>
                    <MovieContentSessionTime>{time}</MovieContentSessionTime>
                    <MovieContentSessionPrice>{price} Р.</MovieContentSessionPrice>
        </MovieContentSession>
     );
}
 
export default Session;

const MovieContentSession = styled.View`
    width:150px;
    height:50px;
    margin:20px auto 0 auto;
    border:1px solid gray;
    border-radius:10px;

    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    
`

const MovieContentSessionTime = styled.Text`
    font-weight:700;
    font-size:18px;
`

const MovieContentSessionPrice = styled.Text`
`
