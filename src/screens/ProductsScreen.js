import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Loading from './../components/Loading';

import { getAllProducts } from './../externalAPI';

import styles, { COLORS } from '../styles';

import { useDispatch, useSelector } from "react-redux";
import ProductCard from '../components/ProductCard';

import Icon from 'react-native-vector-icons/FontAwesome';

const ProductsScreen = ({ navigation }) => {

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const {products} = useSelector((state) => state.product);

    useEffect(() => {
        setLoading(true);
        dispatch(getAllProducts());
        setLoading(false);
    }, []);

    return (
    <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
                <Text style={{ fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
                <Text style={{fontWeight: 'bold', fontSize: 38, color: COLORS.primaryDark}}>TNC Shop</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <Icon
                    name="shopping-cart"
                    size={28}
                />
            </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, marginBottom: 10, flexDirection: 'row'}}>
            <View style={styles.searchContainer}>
                <Icon
                    name="search"
                    size={25}
                    style={{
                        marginLeft: 20,

                    }}
                />
                <TextInput
                    placeholder="Search"
                    style={styles.searchInput}
                />
            </View>

            <View style={styles.sortBtn}>
                <Icon
                    name="sliders"
                    size={30}
                    color={COLORS.white}
                />
            </View>
        </View>
        <View>
            {loading ? <Loading /> : <FlatList
                columnWrapperStyle={{ justifyContent: "space-between" }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 5,
                    paddingBottom: 300
                }}
                numColumns={2}
                data={products}
                renderItem={({item}) => (<ProductCard
                    product={item}
                    navigation={navigation}
                />)}
                keyExtractor={(item, index) => index}
            />}
        </View>
    </SafeAreaView>
    )
}

export default ProductsScreen;