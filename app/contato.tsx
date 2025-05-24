import { View, Text, Pressable, Image, ScrollView, Linking, Alert } from 'react-native';
import BackButton from '../components/backButton';

export default function Contato() {
  const contatos = [
    {
      nome: 'LinkedIn',
      imagem: require('../assets/linkedin.png'),
      url: 'https://www.linkedin.com/in/marco-arcoverde/',
    },
    {
      nome: 'GitHub',
      imagem: require('../assets/logotipo.png'),
      url: 'https://github.com/marcoarc01',
    },
    {
      nome: 'Email',
      imagem: require('../assets/o-email.png'),
      url: 'mailto:arcoverde.marco@hotmail.com',
    },
  ];

  const abrirLink = (url: string) => {
    Linking.openURL(url).catch(() => {
      Alert.alert('Erro', 'Não foi possível abrir o link.');
    });
  };

  return (
    <View className="flex-1 bg-neutral-900">
      <BackButton />

      <Text className="text-white text-2xl font-bold text-center mt-16 mb-8">
        Meus Contatos
      </Text>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        className="flex-1"
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {contatos.map((contato, index) => (
          <View
            key={index}
            className="w-screen items-center justify-center px-6"
          >
            <Image
              source={contato.imagem}
              style={{ width: 180, height: 180, marginBottom: 24 }}
              resizeMode="contain"
            />
            <Text className="text-white text-xl font-semibold mb-4">
              {contato.nome}
            </Text>
            <Pressable
              onPress={() => abrirLink(contato.url)}
              className="bg-blue-600 px-6 py-3 rounded-xl"
            >
              <Text className="text-white font-semibold">Acessar {contato.nome}</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
