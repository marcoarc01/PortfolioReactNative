import React, { useState } from 'react';
import { View, Text, TextInput, Alert, FlatList, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import BackButton from '../components/backButton';



function gerarSenhaAleatoria() {
  let senha = '';
  for (let i = 0; i < 4; i++) {
    senha += Math.floor(Math.random() * 10).toString();
  }
  return senha;
}

export default function JogoDaSenha() {
  const [senha, setSenha] = useState(gerarSenhaAleatoria());
  const [tentativa, setTentativa] = useState('');
  const [historico, setHistorico] = useState<
    { tentativa: string; resultado: string }[]
  >([]);

  function verificarTentativa() {
    if (tentativa.length !== 4) {
      Alert.alert('Erro', 'Digite uma tentativa de 4 dígitos.');
      return;
    }

    let resultado = '';

    for (let i = 0; i < 4; i++) {
      if (tentativa[i] === senha[i]) {
        resultado += '✔️';
      } else if (senha.includes(tentativa[i])) {
        resultado += '⚠️';
      } else {
        resultado += '❌';
      }
    }

    const novaTentativa = { tentativa, resultado };
    setHistorico([novaTentativa, ...historico]);
    setTentativa('');

    if (resultado === '✔️✔️✔️✔️') {
      Alert.alert('Parabéns!', 'Você venceu!', [
        {
          text: 'OK',
          onPress: () => {
            reiniciarJogo();
          },
        },
      ]);
    }
  }

  function reiniciarJogo() {
    setSenha(gerarSenhaAleatoria());
    setHistorico([]);
    setTentativa('');
  }

  function mostrarSenha() {
    Alert.alert('Senha secreta', senha, [{ text: 'OK' }], { cancelable: true });
  }

  return (
    <View className="flex-1 bg-neutral-900 px-5 pt-28">
      <BackButton />

      <Text className="text-white text-3xl font-bold mb-8 text-center">Jogo da Senha</Text>

      <TextInput
        keyboardType="numeric"
        maxLength={4}
        placeholder="Digite 4 dígitos"
        placeholderTextColor="#888"
        className="bg-gray-800 text-white rounded-lg px-4 py-3 mb-5 text-xl"
        value={tentativa}
        onChangeText={setTentativa}
      />

      <Pressable
        onPress={verificarTentativa}
        className="bg-blue-600 rounded-xl py-3 mb-4 items-center"
        android_ripple={{ color: '#004d99' }}
      >
        <Text className="text-white text-lg font-semibold">Tentar</Text>
      </Pressable>

      <Pressable
        onPress={mostrarSenha}
        className="bg-yellow-600 rounded-xl py-3 mb-4 items-center"
        android_ripple={{ color: '#b38600' }}
      >
        <Text className="text-white text-lg font-semibold">Mostrar senha</Text>
      </Pressable>

      <Pressable
        onPress={reiniciarJogo}
        className="bg-red-600 rounded-xl py-3 mb-4 items-center"
        android_ripple={{ color: '#b33' }}
      >
        <Text className="text-white text-lg font-semibold">Reiniciar jogo</Text>
      </Pressable>

      <Text className="text-gray-300 text-xl font-semibold mb-3">Tentativas anteriores:</Text>

      {historico.length === 0 ? (
        <Text className="text-gray-500 italic">Nenhuma tentativa ainda.</Text>
      ) : (
        <FlatList
          data={historico}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <Text className="text-white text-lg mb-1">
              {item.tentativa} - {item.resultado}
            </Text>
          )}
          style={{ maxHeight: 250 }}
        />
      )}
    </View>
  );
}
