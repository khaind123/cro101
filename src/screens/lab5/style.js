import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    container2: {
        flex: 1,
        flexDirection: 'column',
    },

    img: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    detail: {
        marginLeft: 55,
    },

    text: {
        fontSize: 50,
        color: 'white',
    },

    textHA: {
        fontSize: 27,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 370,
        marginLeft: 20,
    },

    textGia: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 23,
        marginLeft: 25,
    },

    smlText: {
        fontSize: 20,
        color: 'white',
    },

    button: {
        width: 100,
        height: 50,
        backgroundColor: 'white',
        marginTop: 30,
        justifyContent: 'center',
        borderRadius: 10,
    },

    buttonGia: {
        width: 100,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: 250,
    },

    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        padding: 9,
    },

    buttonText2: {
        color: 'blue',
        fontWeight: 'bold',
        padding: 7,
        fontSize: 20,
    },

    f1: {
        flex: 7,
    },
    
    f2: {
        flex: 4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    
    f3: {
        backgroundColor: 'blue',
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});