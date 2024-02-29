import styled from 'styled-components';
import Header from '../components/Header';
import { Text } from 'react-native';
import { Button } from 'react-native';
import { ScrollView } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

const SignupScreen = ({ navigation }) => {
  
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const regHandler = () => {
 
        axios.get(`http://192.168.0.107/queries/register.php?name=${name}&surname=${surname}&password=${password}&login=${login}`)
        .then(() => {
            alert("Успешная регистрация!");
            navigation.navigate("Signin");
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
                    Регистрация
                </Text>

                <SigninForm>
                    <ScrollView>
                        <Text style={{ marginBottom: 10 }}>Имя</Text>
                        <SigninInput onChangeText={text => setName(text)} />
                        <Text style={{ marginBottom: 10 }}>Фамилия</Text>
                        <SigninInput onChangeText={(value) => setSurname(value)} />
                        <Text style={{ marginBottom: 10 }}>Логин</Text>
                        <SigninInput onChangeText={(value) => setLogin(value)} />
                        <Text style={{ marginBottom: 10 }}>Пароль</Text>
                        <SigninInput onChangeText={(value) => setPassword(value)} />
                        <Text style={{ marginBottom: 10 }}>Повторите пароль</Text>
                        <SigninInput onChangeText={(value) => setPasswordConfirm(value)} />
                        <Button onPress={regHandler} title="Зарегистрироваться" />
                        <Text style={{ marginBottom: 10 }}></Text>
                        <Button onPress={() => navigation.navigate('Signin')} title="Авторизация" />
                    </ScrollView>
                </SigninForm>
            </SigninScreenView>
        </>
    );
};

export default SignupScreen;

const SigninScreenView = styled.View`
    position: relative;
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
    padding: 20px 50px 50px 50px;
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
