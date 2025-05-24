import { View, Text, Image } from 'react-native';
import BackButton from '../components/backButton';

const tecnologias = [
  { nome: 'Python', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
  { nome: 'Django', logo: require('../assets/django.png') },
  { nome: 'JavaScript', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
  { nome: 'React', logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
  { nome: 'React Native', logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
  { nome: 'Java', logo: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
  { nome: 'GitHub', logo: 'https://cdn-icons-png.flaticon.com/512/733/733553.png' },
];

export default function Tecnologias() {
  return (
    <View className="flex-1 bg-neutral-900 items-center justify-center px-6">
      <BackButton />
      <Text className="text-3xl font-bold text-white mb-8">Tecnologias</Text>

      {tecnologias.map((tec) => (
        <View
          key={tec.nome}
          className="bg-neutral-800 rounded-xl px-4 py-3 mb-4 w-72 flex-row items-center justify-center"
        >
          <Image
            source={typeof tec.logo === 'string' ? { uri: tec.logo } : tec.logo}
            className="w-8 h-8 mr-4"
          />
          <Text className="text-white text-xl">{tec.nome}</Text>
        </View>
      ))}
    </View>
  );
}
