import { Link } from 'expo-router';
import { Text, View, Pressable, Image } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 bg-neutral-900 justify-center items-center px-6">
      <Image
        source={require('../assets/fotoperfilmarco.jpeg')}
        style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 24 }}
        resizeMode="cover"
      />

      <Text className="text-white text-3xl mb-8 font-bold">Portfólio de Marco</Text>

      <LinkButton href="/sobre" label="Sobre" />
      <LinkButton href="/tecnologias" label="Tecnologias" />
      <LinkButton href="/projetos" label="Projetos" />
      <LinkButton href="/jogoDaSenha" label="Jogo da Senha" />
      <LinkButton href="/contato" label="Contato" />
    </View>
  );
}

function LinkButton({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} asChild>
      <Pressable className="bg-blue-600 px-6 py-3 rounded-xl mb-4 w-full max-w-xs items-center">
        <Text className="text-white">{label}</Text>
      </Pressable>
    </Link>
  );
}
