import { View, Text, Image } from "react-native";
import { InfoCardsItem as InfoCardsProps } from "../types/infoCard";

const InfoCards = ({
  icon,
  info,
  quantity,
  directionIcon,
  directionQuantity,
  color,
}: InfoCardsProps) => {
  return (
    <View className="w-[48%] flex flex-row items-center rounded-lg bg-gray-300 px-1 py-5 gap-x-1">

      <View className="h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white">
        <Image source={icon} className="h-5 w-5" />
      </View>

      <View className="flex flex-col">
        <Text>{info}</Text>
        <Text>{quantity}</Text>
      </View>

      <View className="ml-auto justify-end">
        <View className="flex flex-row items-center gap-x-1">
          {directionIcon && (
            <View
              className={`h-4 w-4 items-center justify-center overflow-hidden rounded-full ${color}`}
            >
              <Image source={directionIcon} className="h-2 w-2" />
            </View>
          )}
          <Text className="text-xs">{directionQuantity}</Text>
        </View>
      </View>
    </View>
  );
};

export default InfoCards;
