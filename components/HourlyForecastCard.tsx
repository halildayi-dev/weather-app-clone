import { View, Text, Image } from "react-native";
import { hourlyForecastItem } from "@/types/forecast";

interface HourlyForecastCardProps {
  HourlyForecastItem: hourlyForecastItem;
}

const HourlyForecastCard = ({ HourlyForecastItem }: HourlyForecastCardProps) => {
  const { time, icon, temp } = HourlyForecastItem;

  return (
    <View className="flex flex-col items-center rounded-lg px-4 py-2">

      <Text className="text-sm font-medium">{time}</Text>

      <View className="my-1 overflow-hidden">
        <Image source={icon} className="h-10 w-10" resizeMode="contain" />
      </View>

      <Text className="text-base font-semibold">{temp}</Text>
    </View>
  );
};

export default HourlyForecastCard;
