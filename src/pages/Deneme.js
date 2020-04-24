import React, { Fragment, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Picker,
  Alert,
  Platform,
  StyleSheet,
} from 'react-native';

const Deneme = () => {

  
  const [inputText, setText] = useState('');
  const [responseText, setResponse] = useState('');
  const [PickerSelectedVal,setState]=useState('');

  
  function getSelectedPickerValue(){
    Alert.alert("Selected country is : " +PickerSelectedVal);
  };
  

  function postTranslateService(text,lang) {
    //fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200421T145304Z.b73777f7323a15b6.a21bc2449d645746062cc76f65dcc20715687702&lang=tr-en&text=' + text)
    fetch("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200421T145304Z.b73777f7323a15b6.a21bc2449d645746062cc76f65dcc20715687702&lang=" +lang+ "&text=" + text)
      .then((res) => res.json())
      .then((res) => {
        alert(lang);
        console.log(res.text)
        setResponse(res.text)
      })
      .catch((error) => {
        console.log(error)
      });
  };
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">

          <View>
                            <View>
                        <Picker
                            selectedValue={this.state.PickerSelectedVal}
                            onValueChange={(itemValue, itemIndex) => setState({PickerSelectedVal: itemValue})} >

                            <Picker.Item label="India" value="India" />
                            <Picker.Item label="USA" value="USA" />
                            <Picker.Item label="China" value="China" />
                            <Picker.Item label="Russia" value="Russia" />
                            <Picker.Item label="United Kingdom" value="United Kingdom" />
                            <Picker.Item label="France" value="France" />

                          </Picker>

                          <Button title="Get Selected Picker Value" onPress={()=> getSelectedPickerValue()}/>
                        </View>
            <Text> En-Tr</Text>
            <TextInput
              numberOfLines={5}
              multiline={true}
              style={{ height: 120, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => setText(text) }
            />
            <Button
              title="Translate"
              color="#ff6600"
              onPress={() => postTranslateService(inputText,"ja")}
            />
            <Text>{'Response: ' +responseText}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>

    
  );
};

export default Deneme;