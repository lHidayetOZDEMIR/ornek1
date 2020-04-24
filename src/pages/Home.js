import React, { Fragment, useState } from 'react';

import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    Picker,
    Alert,
    Image,
    TouchableOpacity,
} from "react-native";



export default class Home extends React.Component {


    constructor() {
        super();
        this.state = { PickerSelectedVal: '', inputText: '', responseText: '', lang: '' };
    }

    postTranslateService = (text, lang) => {
        fetch("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200421T145304Z.b73777f7323a15b6.a21bc2449d645746062cc76f65dcc20715687702&lang=" + lang + "&text=" + text)
            .then((res) => res.json())
            .then((res) => {
                console.disableYellowBox = true;     
                console.log(res.text)
                //  this.setState({responseText: res.text})
                if (res.text != null) {
                    //alert(lang);
                    //alert(res.text);
                    this.setState({ responseText: res.text })
                }
                else {
                    console.log(error)
                }
                //this.setState.responseText(res.text)
            })
            .catch((error) => {
                console.log(error)
            });
    }
    render() {
        return (

            <Fragment style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.container}>
                    <ScrollView contentInsetAdjustmentBehavior="automatic">
                        <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <Image style={styles.logo} source={require('../../images/logo-64.png')}></Image>
                            <Text style={styles.title}>AGU BUGU</Text>
                        </View>
                        <View>
                            <View>
                                <Picker
                                    style={styles.picker}
                                    selectedValue={this.state.PickerSelectedVal}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ PickerSelectedVal: itemValue })} >

                                    <Picker.Item label="Dil seçiniz..." value="tr" />
                                    <Picker.Item label="Türkçe" value="tr" />
                                    <Picker.Item label="İngilizce" value="en" />
                                    <Picker.Item label="Almanca" value="de" />
                                    <Picker.Item label="Japonca" value="ja" />
                                    <Picker.Item label="İspanyolca" value="es" />


                                </Picker>
                            </View>
                            <TextInput style={styles.input}
                                placeholder="Metin Girin"
                                placeholderTextColor='rgba(255,255,255,0.8)'
                                //numberOfLines={5}
                                multiline={true}
                                onChangeText={text => this.setState({ inputText: text })}
                            />
                            <TouchableOpacity onPress={this.postTranslateService(this.state.inputText, this.state.PickerSelectedVal)}></TouchableOpacity>
                            <Text style={styles.responseText}>{this.state.responseText}</Text>
                        </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    },
    logoContainer:{
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
    },
    logo: {
        width: 64,
        height: 64,
        marginBottom:5,

    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        marginTop: 5,
        opacity: 0.9,
        marginBottom: 10,
    },
    picker: {
        marginHorizontal: 130,
        color: '#FFF',
    },
    input: {
        color: '#FFF',
        fontSize: 20,
        height: 100,
        marginHorizontal: 7,
        borderBottomWidth: 2,
        borderColor: '#f7c744',
        marginBottom: 10
    },
    responseText: {
        justifyContent: 'center',
        color: '#FFF',
        fontSize: 20,
        height: 150,
        marginHorizontal: 7,
        borderColor: '#f7c744'
    }
})