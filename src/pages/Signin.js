import React from "react";

import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    Image,
    Platform,
} from "react-native";

export default class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TextInputName: '',
            TextInputPassword: '',
            TextInputRePassword: '',
        };
    }
    CheckTextInput = () => {
        if (this.state.TextInputName != '') {
            if (this.state.TextInputPassword != '') {
                if (this.state.TextInputRePassword != '') {
                    if (this.state.TextInputRePassword == this.state.TextInputPassword ) {
                        alert('Kayıt başarılı.');
                        this.props.navigation.navigate('Welcome')
                    } else {
                        alert('Tekrar edilen şifre aynı değil.');
                    }
                } else {
                    alert('Lütfen şifre tekrar girin.');
                }
            } else {
                alert('Lütfen şifre girin.');
            }
        } else {
            alert('Lütfen kullanıcı adı girin.');
        }
    };
    render() {
        return (
            <SafeAreaView style={styles.container} >
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>

                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer2}>
                                <Image style={styles.logo} source={require('../../images/logo-64.png')}></Image>
                                <Text style={styles.title}>AGU BUGU</Text>
                            </View>
                            <View style={styles.infoContainer}>

                                <TextInput style={styles.input}
                                    placeholder="Kullanıcı adı"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onChangeText={TextInputName => this.setState({ TextInputName })}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                />
                                <TextInput style={styles.input}
                                    placeholder="Şifre"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='go'
                                    secureTextEntry
                                    onChangeText={TextInputPassword => this.setState({ TextInputPassword })}
                                    autoCorrect={false}
                                    ref={"txtPassword"}
                                    onSubmitEditing={() => this.refs.txtPassword2.focus()}
                                />
                                <TextInput style={styles.input}
                                    placeholder="Şifre Tekrar"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='go'
                                    secureTextEntry
                                    onChangeText={TextInputRePassword => this.setState({ TextInputRePassword })}
                                    autoCorrect={false}
                                    ref={"txtPassword2"}
                                />
                                <View style={styles.buttons}>
                                    <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate('Welcome')}>
                                        <Image style={styles.backButtonImage} source={require('../../images/back4.png')}></Image>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.loginButton} onPress={this.CheckTextInput}>
                                        <Text style={styles.loginButtonText}>KAYIT OL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
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
    logoContainer2: {
        alignItems: 'center',
        marginBottom: 250
    },
    logo: {
        width: 64,
        height: 64,
        marginBottom: 5,

    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        marginTop: 5,
        opacity: 0.9
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 280,
        padding: 20,

    },
    input: {
        height: 45,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 15,
        paddingHorizontal: 10
    },
    buttons: {
        flexDirection: 'row',
    },
    backButton: {
        borderRadius: 3,
        backgroundColor: '#f7c744',
        marginRight: 5,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    backButtonImage: {
        width: 30,
        height: 30,
    },

    loginButton: {
        borderRadius: 3,
        backgroundColor: '#f7c744',
        flex: 4,
        paddingVertical: 15,
        marginTop: 15
    },
    loginButtonText: {
        textAlign: 'center',
        color: 'rgb(32, 53, 70)',
        fontWeight: 'bold',
        fontSize: 18
    }

})