import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Keyboard } from 'react-native';
import ContatoInput from './componentes/ContatoInput';
import ContatoItem from './componentes/ContatoItem';

export default function App() {
  const [contatos, setContatos] = useState ([]);
  const [id, setId] = useState (10);

  const removerContato = (idASerRemovida) => {
    setContatos (contatos => {
      return contatos.filter ((contato) => {
        return contato.id !== idASerRemovida
      })
    });
  };

  const adicionarContato = (nome, telefone) => {
    Keyboard.dismiss();
    setContatos(contatos => {
      //console.log(contatos); para checar os ID's pelo terminal
      setId(id + 2);
      return [...contatos, {
        id: id.toString(),
        nome: nome,
        telefone: telefone
      }];
    });
  }

  return (
    <View style = {styles.container}>
      <View>
        <ContatoInput
          onAdicionarContato = {adicionarContato}
        />
        </View>
        <FlatList
          data = {contatos}
          renderItem = {
            contato => (
              // Mostra o ID (10) + nome + tel
              <ContatoItem
                id = {contato.item.id}
                nome = {contato.item.nome}
                telefone = {contato.item.telefone}
                onDelete = {removerContato}
              />
            )
          }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
})