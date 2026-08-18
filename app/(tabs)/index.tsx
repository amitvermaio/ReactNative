import "@/global.css";
import { Text, View } from "react-native";
import { Link } from 'expo-router';
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Radhe Radhe
      </Text>
      <Link href={"/onboarding"} className='mt-4 p-5 rounded-xl bg-primary text-white tracking-tight'>
        Go To Onboarding
      </Link>
    </SafeAreaView>
  );
}