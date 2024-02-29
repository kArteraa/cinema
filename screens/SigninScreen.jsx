import styled from 'styled-components';
import Header from '../components/Header';
import { Text } from 'react-native';
import { Button } from 'react-native';
import axios from 'axios';
import { useState,useEffect,useContext } from 'react';
import { UserContext } from '../App';

const SigninScreen = ({ navigation }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const {setUser,user} = useContext(UserContext);

    const signHandler = () => {
        axios.get(`http://192.168.0.107/queries/signin.php?password=${password}&login=${login}`)
        .then(({data}) => {
            if (!data) {
                alert("Пользователь не найден!");
            } else {

                setUser(data.id);
                navigation.navigate("Home");
            }
            
        
        }).catch(err => {
            alert("Ошибка");
        })
    }

    return (
        <>
            <Header navigation={navigation} />

            <SigninScreenView>
                <Text
                    style={{
                        textAlign: 'center',
                        paddingTop: 50,
                        fontSize: 25,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                    }}
                >
                    Авторизация
                </Text>
                <SigninForm>
                    <Text style={{ marginBottom: 10 }}>Логин</Text>
                    <SigninInput onChangeText={(value) => setLogin(value)} />
                    <Text style={{ marginBottom: 10 }}>Пароль</Text>
                    <SigninInput onChangeText={(value) => setPassword(value)} />
                    <Button onPress={signHandler} title="Войти" />
                    <Text style={{ marginBottom: 10 }}></Text>
                    <Button onPress={() => navigation.navigate("Signup")}  title="Регистрация" />
                </SigninForm>
            </SigninScreenView>
        </>
    );
};

export default SigninScreen;

const SigninScreenView = styled.View`
    width: 100%;
    height: 100%;
    background-color: rgba(91, 36, 152, 1);
`;

const SigninForm = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #111;
    border-radius: 50px 50px 0 0;
    height: 70%;
    padding: 20px 50px 0 50px;
    display: flex;
`;

const SigninInput = styled.TextInput`
    width: 100%;
    padding: 10px;
    background-color: rgba(225, 218, 235, 1);
    height: 40px;
    margin: 0 auto 30px auto;
    border-radius: 10px;
`;
