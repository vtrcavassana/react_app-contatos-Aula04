import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';


const ContatoInput = (props) => {
    const [nome, setNome] = useState ('');
    const [telefone, setTelefone] = useState ('');

    const capturaNome = (nome) => {
        setNome(nome)
      };
    
      const capturaTelefone = (telefone) => {
        setTelefone(telefone)
      };
    
    return (
        <View style = {styles.contato}>
            <TextInput
              placeholder = "Nome"
              style = {styles.contatoInputText}
              onChangeText = {capturaNome}
              value = {nome}
            />
            <TextInput
              placeholder = "Telefone"
              style = {styles.contatoInputText}
              onChangeText = {capturaTelefone}
              value = {telefone}
               keyboardType = {'number-pad'}
            />
            <Button
              title = "Add"
              onPress = {() => props.onAdicionarContato(nome, telefone)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contato: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    contatoInputText: {
      width: '80%',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      padding: 2,
      marginBottom: 8
    }
});

export default ContatoInput;