import { View, Text } from 'react-native';
import BackButton from '../components/backButton';


export default function Sobre() {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-900 px-6">
      <BackButton />
      <Text className="text-3xl font-bold text-white mb-4">Sobre Mim</Text>
      <Text className="text-white text-center">
        Olá, me chamo Marco Antonio, atualmente estou cursando bacharelado em Ciência da Computação. Minha
        jornada é guiada pela vontade em criar soluções tecnológicas inovadoras,
        práticas e eficientes, capazes de impactar positivamente. Acredito que a
        computação pode transformar realidades, e é isso que me inspira
        diariamente na minha trajetória acadêmica e profissional.
      </Text>
    </View>
  );
}
