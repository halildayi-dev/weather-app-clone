import { View, Text, Image } from "react-native";

const Hero = () => {
  return (
    <View className="h-full flex flex-col justify-between px-2 py-2">

      <View className="mt-auto flex flex-row items-center justify-between">
        <View className="flex flex-row items-end gap-x-1">
          <Text className="text-6xl text-white">3 &deg;</Text>
          <Text className="text-white">Feels like -2 &deg;</Text>
        </View>

        <View className="flex flex-col items-center overflow-hidden">
          <Image
            source={require("../assets/app-images/cloud-sun.png")}
            className="h-[100px] w-[100px]"
          />
          <Text className="text-lg text-white">Cloudy</Text>
        </View>
      </View>

      <View className="mb-auto mt-auto flex flex-row items-end justify-between">
        <Text className="text-white">January 18, 16:14</Text>
        <View className="flex flex-col">
          <Text className="text-white">Day 3 &deg;</Text>
          <Text className="text-white">Night -1 &deg;</Text>
        </View>
      </View>
    </View>
  );
};

export default Hero;