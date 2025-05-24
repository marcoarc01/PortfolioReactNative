import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function BackButton() {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.back()}
      style={{
        position: 'absolute',
        top: 60,
        left: 20,
        zIndex: 1000,
        padding: 8,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 8,
      }}
      android_ripple={{ color: '#ccc' }}
    >
      <Feather name="arrow-left" size={24} color="white" />
    </Pressable>
  );
}
