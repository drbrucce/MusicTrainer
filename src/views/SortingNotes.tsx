import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, Button, View } from 'react-native'

const styles = StyleSheet.create({
    wrapperFullCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
      flex:1,
    },
    wrapperHalf: {
        flex:2
    },
    wrapperMain: {
        backgroundColor: '#323232'
    },
    whiteColorText:{
        color: 'white'
    },
    bigText:{
        fontSize: 30,
        fontWeight: "bold"
    },
    hugeText:{
        fontSize: 100,
        fontWeight: "bold"

    },
    bigCircle: {
        width:285, 
        height: 285, 
        backgroundColor: '#6C82D2',
        borderRadius: 142, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
  });
  

export default class SortingNotes extends Component {
    render() {
        return (
            <View style={[styles.wrapper, styles.wrapperMain]}>
                <View style={[styles.wrapperHalf, styles.wrapperFullCenter]}>
                    <View >
                        <Text style={styles.whiteColorText}> Instrumento: </Text>
                        <TextInput style={styles.whiteColorText}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.whiteColorText}> Tipo de Notas: </Text>
                        <TextInput style={styles.whiteColorText}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.whiteColorText}> Tempo entre as Notas: </Text>
                        <TextInput style={styles.whiteColorText}></TextInput>
                    </View>
                    <View>
                        <Button title="Iniciar"></Button>
                        <Button title="Parar"></Button>
                    </View>
                    
                </View>
                <View style={[styles.wrapper, styles.wrapperFullCenter]}>
                    <View style={styles.bigCircle}>
                        <Text style={[styles.whiteColorText, styles.bigText]}> Nota </Text>
                        <Text style={[styles.whiteColorText, styles.hugeText]}> B </Text>
                        <Text style={styles.whiteColorText}> Tempo Restante </Text>
                        <Text style={styles.whiteColorText}> 01:00 </Text>
                    </View>
                </View>
                
            </View>
        )
    }
}




