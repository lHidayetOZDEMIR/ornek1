import React from "react";

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native";

export default class Welcome extends React.Component {
    render() {
        return (

            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../images/logo-128.png')}></Image>
                    <Text style={styles.title}>AGU BUGU</Text>
                </View>
                <View style={styles.infoContainer}>
                    <TouchableOpacity style={styles.buttonContainer}  onPress={()=> this.props.navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>GİRİŞ YAP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}  onPress={()=> this.props.navigation.navigate('Signin')}>
                        <Text style={styles.buttonText}>KAYIT OL</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    logo: {
        width: 128,
        height: 128,
        marginBottom: 5,

    },
    title: {
        color: '#f7c744',
        fontSize: 20,
        marginTop: 5,
        opacity: 0.9
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 220,
        padding:20,
        
    },
    buttonContainer: {
        borderRadius:3,
        backgroundColor: '#f7c744',
        paddingVertical: 15,
        marginTop: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32, 53, 70)',
        fontWeight: 'bold',
        fontSize: 18
    }
})