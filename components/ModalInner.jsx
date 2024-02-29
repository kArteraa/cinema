import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { UserContext } from '../App';
import { useContext } from 'react';

const ModalInner = ({ toggleModal,navigation }) => {

    const {user,setUser} = useContext(UserContext);

    const navItemClicked=  (link) => {
        toggleModal(false);
        navigation.navigate(link);
    }
    if (user == -1) {
        return (
        
            <ModalInnerView>
                <AntDesign
                    style={{ marginLeft: 'auto' }}
                    onPress={() => toggleModal(false)}
                    name="close"
                    size={24}
                    color="black"
                />
                <TouchableOpacity onPress={() => navItemClicked("Home")}>
                    <ModalInnerItem>Фильмы</ModalInnerItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navItemClicked("Signin")}>
                    <ModalInnerItem>Авторизация</ModalInnerItem>
                </TouchableOpacity>
            </ModalInnerView>
        );
    } else {
        return (
        
            <ModalInnerView>
                <AntDesign
                    style={{ marginLeft: 'auto' }}
                    onPress={() => toggleModal(false)}
                    name="close"
                    size={24}
                    color="black"
                />
                <TouchableOpacity onPress={() => navItemClicked("Profile")}>
                    <ModalInnerItem>Профиль</ModalInnerItem>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => navItemClicked("Home")}>
                    <ModalInnerItem>Фильмы</ModalInnerItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setUser(-1)}>
                    <ModalInnerItem>Выход</ModalInnerItem>
                </TouchableOpacity>
            </ModalInnerView>
        );
    }
   
};

export default ModalInner;

const ModalInnerView = styled.View`
    padding: 20px;
`;

const ModalInnerItem = styled.Text`
    margin-top: 10px;
    text-align: center;
    padding: 10px 0 10px 0;
    border-top-width: 2px;
    border-top-style: solid;
    border-top-color: gray;

    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: gray;
`;
