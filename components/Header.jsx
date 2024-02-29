import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { Modal } from 'react-native';
import { useState } from 'react';
import ModalInner from './ModalInner';

const HeaderWrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    background-color: rgba(0,0,0, 0.6);

    padding: 10px 20px;
`;

const HeaderText = styled.Text`
    font-size: 20px;
    margin:0 5px;
`;
const HeaderTextFull = styled.Text`
    font-size: 20px;
    margin: 0 5px;
    color: #111; 
`;
const HeaderTextView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const HeaderTextSpan = styled.View`
    background-color: #F07427;
    border-radius:10px;
`;

const Header = ({navigation}) => {

    const [isVisible,setIsVisible] = useState(false);
    const toggleModal = (state) => {
        setIsVisible(state);
    }

    return (
        <HeaderWrapper>
            <HeaderTextView>
                <HeaderText>Zxcuser2</HeaderText>
                
                <HeaderTextSpan>
                    <HeaderTextFull>Cinema</HeaderTextFull>
                </HeaderTextSpan>
            </HeaderTextView>
            <Feather name="menu" size={24} color="black" onPress={() => toggleModal(true)} />
            <Modal visible={isVisible}>
                <ModalInner navigation={navigation} toggleModal={toggleModal} />
            </Modal>
            
        </HeaderWrapper>
    );
};

export default Header;
