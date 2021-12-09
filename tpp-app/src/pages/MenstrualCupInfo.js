import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import CupImage from 'tpp-app/ios/tppapp/Images.xcassets/InfoPageImages/Cup-2x.png';

export default function MenstrualCupInfo() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
            source= {CupImage}
            style={styles.image}
                />
        <Text style={styles.titleText}>Menstrual Cup</Text>
        
        <Text style={styles.bodyText}>
        Just popping in to let you know - the earliest versions of the menstrual cup were designed in 
        1932 and made of natural rubber. Today, menstrual cups are typically made of silicone, which is
        flexible, durable and anti-bacterial.
        
        Menstrual cups are cost effective and sustainable, with almost no waste created each cycle. A 
        cup costs about $40 CAD and can last at least two years.
        
        A menstrual cup can be used for up to 12 hours, depending on your menstrual flow. It does take
        a few uses to learn how often you want to “empty” your cup, and this can vary for each cycle 
        and for every person.
        </Text>
        
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        position: 'absolute', 
        width: 81, 
        height: 130, 
        left: 160, 
        top: 139, 
        bottom: 560
    },
    titleText: {
        position: 'absolute',
        textAlign: 'center',
        fontFamily: 'Avenir',
        left: '15.47%',
        right: '13.6%',
        top: '35.84%',
        bottom: '58.5%',
        fontWeight: '800',
        fontSize: 34,
        lineHeight: 46,
        letterSpacing: -0.02
    },
    bodyText: {
           position: 'absolute',
           textAlign: 'center',
           fontFamily: 'Avenir',
           fontSize: 14,
           lineHeight: 19,
           letterSpacing: -0.3,
           left: '14.13%',
           right: '14.13%',
           top: '45.94%',
           bottom: '4.68%'},
    
});