import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const ContatoItem = (props) => {
  return (
    <TouchableOpacity delayLongPress = {1100} onLongPress = {props.onDelete.bind(this, props.id)}>
      <View style = {styles.listaDeContatos}>
        <Text>{props.id}</Text>
        <Text>{props.nome}</Text>
        <Text>{props.telefone}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listaDeContatos: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
});

export default ContatoItem;