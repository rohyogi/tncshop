import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


import styles from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { signinRequest } from '../externalAPI';

const LoginScreen = () => {

    const dispatch = useDispatch();

    const { error } = useSelector(state => state.user);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Login Here</Text>

        {error !== null && <Text style={styles.errorBox}>{error}</Text>}
        <TextInput
            placeholder="Username"
            mode="outlined"
            value={username}
            onChangeText={setUsername}
            style={styles.inputBox}
            autoCapitalize='none'
        />
        <TextInput
            placeholder="Password"
            mode="outlined"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.inputBox}
            autoCapitalize='none'
        />
        <TouchableOpacity style={styles.buttonSubmit} onPress={() => dispatch(signinRequest({username, password}))}>
            <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 16}}>LOGIN</Text>
        </TouchableOpacity>
    </SafeAreaView>
    )
};

export default LoginScreen;