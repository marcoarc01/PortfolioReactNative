import { View, Text, Pressable, Image, Linking } from 'react-native';
import BackButton from '../components/backButton';

const projetos = [
  { nome: 'PortfolioReactNative', link: 'https://github.com/marcoarc01/PortfolioReactNative' },
  { nome: 'leetcode', link: 'https://github.com/marcoarc01/leetcode' },
  { nome: 'CapstoneMeta', link: 'https://github.com/marcoarc01/CapstoneMeta' },
  { nome: 'Projeto-portfolio', link: 'https://github.com/marcoarc01/Projeto-portfolio' },
  { nome: 'Introduzindo-React', link: 'https://github.com/marcoarc01/Introduzindo-React' },
  { nome: 'Little-Lemon-API-project', link: 'https://github.com/marcoarc01/Little-Lemon-API-project' },
];

const githubIcon = 'https://cdn-icons-png.flaticon.com/512/733/733553.png';

export default function Projetos() {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-900 px-6">
      <BackButton />
      <Text className="text-3xl font-bold text-white mb-8">Projetos</Text>

      {projetos.map((projeto) => (
        <Pressable
          key={projeto.nome}
          onPress={() => Linking.openURL(projeto.link)}
          className="flex-row items-center justify-center bg-neutral-800 rounded-xl w-80 h-16 mb-4"
          android_ripple={{ color: '#555' }}
        >
          <Image
            source={{ uri: githubIcon }}
            className="w-8 h-8 mr-3"
          />
          <Text className="text-white text-lg">{projeto.nome}</Text>
        </Pressable>
      ))}
    </View>
  );
}
