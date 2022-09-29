import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const COLORS = {
    white: 'white',
    dark: 'black',
    primarylight: '#C4DDFF',
    primaryDark: "#001D6E",
    warning: '#FEE2C5',
    danger: 'red',
    light: 'rgba(255,255,255,0.8)'
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primarylight,
        padding: 20,
        minHeight: '100%'
    },
    title: {
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20
    },
    inputBox: {
        backgroundColor: COLORS.white,
        padding: 20,
        marginTop: 20,
        borderRadius: 10
    },
    buttonSubmit:{
        padding: 20,
        backgroundColor: 'yellow',
        marginTop: 40,
        borderRadius: 10
    },
    errorBox:{
        backgroundColor: COLORS.danger,
        color: COLORS.white,
        padding: 10,
        borderRadius: 10
    },
    card: {
        height: 225,
        backgroundColor: COLORS.white,
        width: screenWidth / 2 - 30,
        marginHorizontal: 4,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15
    },
    innerHeader: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer: {
        flex: 0.45,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailContainer:{
        flex: 0.55,
        backgroundColor: COLORS.primarylight,
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30
    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: COLORS.primaryDark,
        marginBottom: 5,
        marginRight: 3
    },
    priceTag: {
        backgroundColor: COLORS.primaryDark,
        width: 80,
        height: 40,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent: 'center'
    },
    broderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    broderBtnText: {
        fontWeight: "bold",
        fontSize: 28
    },
    buyBtn: {
        width: 150,
        height: 50,
        backgroundColor: COLORS.primaryDark,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    searchContainer: {
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchInput: {
        fontSize: 18,
        fontWeight: "bold",
        color: COLORS.dark,
        flex: 1,
        paddingLeft: 15
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: COLORS.primaryDark,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset:{
          width: 0,
          height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    cartItemWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.light,
        alignItems: 'center',
        paddingVertical: 15
    }
});

export default styles;