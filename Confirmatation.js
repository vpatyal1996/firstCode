import { AppState, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import colors from './Colors'
import Button from './Button'

const Lock = ({ navigation }) => {
    const [passcode, setPasscode] = useState('');

    const pinEnter = (newPin) => {
        if (newPin.length <= 6) {
            setPasscode(newPin);
        }
    };

    useEffect(() => {
        if (passcode.length === 6) {
            navigation.navigate("Home");
        setPasscode('');

        }
    }, [passcode, navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.mainText}>Confirm Secret Code</Text>
                <Text style={styles.text2}>Please enter your 6 digit Code</Text>
            </View>

            <View style={styles.codeContainer}>
                {[...Array(6).keys()].map((index) => (
                    <View key={index} style={[styles.code, index < passcode.length && styles.codeFilled]}></View>
                ))}
            </View>

            <View style={styles.numberContainer}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
                    <Button
                        key={number}
                        name={number.toString()}
                        buttonStyle={[styles.numberText, passcode.length === 6 ]}
                        textColor={styles.textbtn}
                        onPress={() => pinEnter(passcode + number)}
                        
                    />
                ))}

                

            </View>
        </SafeAreaView>
    )
}

export default Lock

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    textContainer: {

    },
    mainText: {
        fontSize: 33,
        textAlign: "center",
        color: colors.Black
    },
    text2: {
        fontSize: 17,
        textAlign: "center",
    },
    text3: {
        textAlign: "center",
        marginVertical: 20,
        color: 'red',
    },
    codeContainer: {
        marginTop: 22,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    code: {
        width: 13,
        height: 13,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: colors.Black,
        backgroundColor: colors.White
    },
    codeFilled: {
        backgroundColor: colors.grayNew, 
    },
    numberContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: 250,
        height: 250,
        justifyContent: "center",
        marginLeft: 80,
        marginTop: 20,
        alignItems: "center",
    },
    numberText: {
        width: 71,
        height: 60,
        borderRadius: 70,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightgrey,
        margin: 6
    },

    textbtn: {
        fontSize: 25,
        textAlign: "center",
        color: colors.Black,
        fontWeight: "bold"
    },
})