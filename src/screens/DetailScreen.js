import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles, { COLORS } from '../styles';
import { useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { addToCart } from '../reducers/userSlice';

const DetailScreen = ({ navigation, route }) => {

    const dispatch = useDispatch();

    const product = route.params;

    const [noOfItem, setNoOfItem] = useState(1);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <View style={styles.innerHeader}>
                <Icon
                    name="arrow-left"
                    size={28}
                    onPress={() => navigation.goBack()}
                />
                <Text style={{fontSize: 18, fontWeight: 'bold', flexShrink: 1, paddingHorizontal: 10}}>{product.title}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                    <Icon
                        name="shopping-cart"
                        size={28}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: product.thumbnail
                    }}
                    style={{ height: '100%', width: '100%', resizeMode: 'contain'}}
                />
            </View>

            <View style={styles.detailContainer}>
                <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'flex-end'}}>
                    <View style={styles.line} />
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Best Choice</Text>
                </View>

                <View style={{marginLeft: 20, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', flexShrink: 1, paddingRight: 15}}>{product.title}</Text>
                    <View style={styles.priceTag}>
                        <Text style={{ color: COLORS.white, marginLeft: 15, fontWeight: 'bold', fontSize: 14}}>${product.price}</Text>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 20, marginTop: 10}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
                    <Text style={{ color: 'grey', fontSize: 16, lineHeight: 22, marginTop: 10}}>
                        {product.description}
                    </Text>

                    <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => setNoOfItem(noOfItem - 1)}>
                            <View style={styles.broderBtn}>
                                <Text style={styles.borderBtnText}>-</Text>
                            </View>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20, marginHorizontal: 20, fontWeight: 'bold'}}>{noOfItem}</Text>
                            <TouchableOpacity onPress={() => setNoOfItem(noOfItem + 1)}>
                            <View style={styles.broderBtn}>
                                <Text style={styles.borderBtnText}>+</Text>
                            </View>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => dispatch(addToCart(product))}>
                            <View style={styles.buyBtn}>
                                <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>Add to Cart</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DetailScreen;