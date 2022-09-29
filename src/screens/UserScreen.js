import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from "react-redux";
import styles from '../styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { signout } from '../reducers/userSlice';

const UserScreen = () => {

    const dispatch = useDispatch();

    const logout = async() => {
        try{
          await AsyncStorage.removeItem('token');
          dispatch(signout())
        }catch(e){
          console.warn(e);
        }
    }

    return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.buttonSubmit} onPress={() => logout()}>
            <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 16}}>LOGOUT</Text>
        </TouchableOpacity>
    </SafeAreaView>
    )
}

export default UserScreen;