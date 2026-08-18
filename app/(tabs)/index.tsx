import "@/global.css";
import { Text, View } from "react-native";
import { Link } from 'expo-router';
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Radhe Radhe
      </Text>
      <Link href={"/onboarding"} className='mt-4 p-5 rounded-xl bg-primary text-white tracking-tight'>
        Go To Onboarding
      </Link>
    </View>
  );
}