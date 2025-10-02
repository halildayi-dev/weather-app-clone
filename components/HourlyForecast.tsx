import { View, Text, Image, ScrollView } from "react-native";
import { hourlyForecastItem } from "@/types/forecast";

import HourlyForecastCard from "./HourlyForecastCard";

interface HourlyForecastProps {
  data: hourlyForecastItem[];
}

const HourlyForecast = ({ data }: HourlyForecastProps) => {
  return (
    <View className="m-2 flex flex-col rounded-lg bg-gray-300">

      <View className="flex flex-row items-center gap-x-2 px-2 py-1">
        <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
          <Image
            source={require("../assets/icons/wall-clock.png")}
            className="h-5 w-5"
          />
        </View>
        <Text className="font-medium">Hourly forecast</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="w-full px-2"
        //contentContainerClassName=""
      >
        {data.map((item, index) => (
          <HourlyForecastCard key={index} HourlyForecastItem={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HourlyForecast;
