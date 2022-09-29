import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles, { COLORS } from '../styles';
import { useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { removeFromCart } from '../reducers/userSlice';

const CartItem = ({cartProduct}) => {
    const dispatch = useDispatch();
    return (
    <View style={styles.cartItemWrapper}>
        <View>
            <Image
                style={{ height: 40, width: 60, resizeMode: 'contain'}}
                source={{
                    uri: cartProduct.thumbnail
                }}
            />
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 10, width: 100, flexShrink: 1}}>{cartProduct.title}</Text>
        <Text style={{fontSize: 16, fontWeight:'bold'}}>${cartProduct.price}</Text>
        <TouchableOpacity onPress={() => dispatch(removeFromCart(cartProduct))} style={{marginLeft: 10}}>
            <Icon
                name="times-circle"
                size={28}
                color={COLORS.danger}
            />
        </TouchableOpacity>
    </View>
    )
}

export default CartItem;