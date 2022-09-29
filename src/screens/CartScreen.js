import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles';
import { useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import Loading from '../components/Loading';
import CartItem from '../components/CartItem';

const CartScreen = ({ navigation }) => {

    const cartItems = useSelector(state => state.user.cart);
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerHeader}>
                <Icon
                    name="arrow-left"
                    size={28}
                    onPress={() => navigation.goBack()}
                />
                <Text style={{fontSize: 18, fontWeight: 'bold', flexShrink: 1, paddingHorizontal: 10}}>Your Cart</Text>
                <TouchableOpacity onPress={() => navigation.navigate("User")}>
                    <Icon
                        name="user"
                        size={28}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: 5,
                        paddingBottom: 80
                    }}
                    numColumns={1}
                    data={cartItems}
                    renderItem={({item}) => (<CartItem
                        cartProduct={item}
                    />)}
                    keyExtractor={(item, index) => index}
                />
            </View>
        </SafeAreaView>
    )
}

export default CartScreen;