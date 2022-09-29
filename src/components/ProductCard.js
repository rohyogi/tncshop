import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles, { COLORS } from '../styles';
import { useDispatch } from "react-redux";
import { addToCart } from '../reducers/userSlice';

const ProductCard = ({product, navigation}) => {

    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Detail", product)}>
            <View style={styles.card}>
                <View style={{height: 100, alignItems: 'center'}}>
                    <Image
                        style={{ height: '100%', width: '100%', resizeMode: 'contain'}}
                        source={{
                            uri: product.thumbnail
                        }}
                    />
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 10}}>{product.title}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
                    <Text style={{fontSize: 16, fontWeight:'bold'}}>${product.price}</Text>
                    <TouchableOpacity onPress={() => dispatch(addToCart(product))}>
                        <View
                            style={{
                                height: 25,
                                width: 25,
                                backgroundColor: COLORS.primaryDark,
                                borderRadius: 5,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold', lineHeight: 25}}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard;