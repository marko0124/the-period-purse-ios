import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, KeyboardAvoidingView } from 'react-native';
import OnboardingBackground from '../../ios/tppapp/Images.xcassets/SplashScreenBackground.imageset/background.png'
import { STACK_SCREENS } from './Welcome';
import { BackButton } from '../home/components/BackButtonComponent';
import { WideButton } from './components/ButtonComponents';
import { BackButtonContainer } from './components/ContainerComponents';
import { PageTitle, InputLabel } from './components/TextComponents'

export default function Password ({ navigation }) {
  return (
  <ImageBackground source={OnboardingBackground} style={styles.container}>
    <BackButtonContainer>
        <BackButton onPress={() => {navigation.navigate(STACK_SCREENS["Registration"])}}/>
        <View style={{width: 320, height: 40}}>
          <PageTitle>Registration</PageTitle>
        </View>
      </BackButtonContainer>

      <View style={styles.labelBorder}>
        <InputLabel>PASSWORD</InputLabel>
        <TextInput style={styles.input} placeholder="At least 6 characters" autoCapitalize="none" secureTextEntry={true}/>
      </View>

      <KeyboardAvoidingView 
        style={{flex: 1}} 
        enabled behavior={ Platform.OS === 'ios'? 'padding': null}
        keyboardVerticalOffset={30}>
        <View style={{height: "80%"}}></View>
        <WideButton title="Continue" color="#5A9F93" onPress={() => navigation.navigate(STACK_SCREENS["Success"])}/>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  }, 
  input: {
    fontFamily: "Avenir", 
    fontSize: 14,
    height: 35
  },
  labelBorder: {
    alignSelf: "center",
    width: "90%",
    height: 80,
    borderWidth: 2,
    borderColor: "#5A9F93",
    borderRadius: 10,
    padding: 18, 
    marginTop: 200
  }
});