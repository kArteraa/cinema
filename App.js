import styled from 'styled-components';
import Navigation from './screens/Navigation';
import { StatusBar } from 'expo-status-bar';
import { createContext, useContext, useState } from 'react';

const AppWrapper = styled.View`
    width: 100%;
    height: 100%;
    font-size: 20px;
    background-color: #2b2535;
`;

export const UserContext = createContext(null);

export default function App() {
    const [user, setUser] = useState(-1);
   
    return (
        <UserContext.Provider value={{user,setUser}}>
            <AppWrapper>
                <Navigation />
                {/* <StatusBar/> */}
            </AppWrapper>
        </UserContext.Provider>
    );
}
