import { View, Text, ScrollView, Image } from "react-native";
import * as Progress from "react-native-progress";

import { RainChanceItem } from "@/types/forecast";

interface RainChanceProps {
  data: RainChanceItem[];
}

const RainChance = ({ data }: RainChanceProps) => {
  return (
    <View className="flex flex-col bg-gray-300 m-2 rounded-lg">

      <View className="flex flex-row gap-x-2 items-center py-1 px-2">
        <View className="h-8 w-8 rounded-full bg-white items-center justify-center">
          <Image
            source={require("../assets/icons/rain.png")}
            className="w-5 h-5"
          />
        </View>
        <Text className="font-semibold">Chance of rain</Text>
      </View>

      <ScrollView
        style={{ height: 200 }}
        className="w-full px-2"
        contentContainerStyle={{ paddingBottom: 8, rowGap: 8 }}
        showsVerticalScrollIndicator={true}
        nestedScrollEnabled={true}
      >
        {data.map((item, index) => (
          <View
            key={index}
            style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}
          >
            <Text style={{ width: 50 }}>{item.hour}</Text>

            <Progress.Bar
              progress={item.chance}
              height={10}
              width={200}
              color="#a855f7"
              unfilledColor="#E5E7EB"
              borderWidth={0}
              borderRadius={5} 
              style={{ marginHorizontal: 10}}
            />

            <Text style={{ width: 40 }}>{Math.round(item.chance * 100)}%</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RainChance;
