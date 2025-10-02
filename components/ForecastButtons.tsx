import { View, Text, TouchableOpacity } from "react-native";
import { ForecastType } from "../enums/ForecastType";

interface ForecastButtonsProps {
  selected: ForecastType;
  onSelect: (type: ForecastType) => void;
}

const buttonConfig = [
  { label: "Today", type: ForecastType.TODAY },
  { label: "Tomorrow", type: ForecastType.TOMORROW },
  { label: "10 days", type: ForecastType.TEN_DAYS },
];

const ForecastButtons = ({ selected, onSelect }: ForecastButtonsProps) => {
  return (
    <View className="m-2 h-auto w-auto flex flex-row justify-between gap-x-4">
      {buttonConfig.map((btn) => {
        const isSelected = selected === btn.type;
        return (
          <TouchableOpacity
            key={btn.type}
            className={`flex-1 items-center rounded-xl py-2 ${
              isSelected ? "bg-purple-300" : "bg-white"
            }`}
            onPress={() => onSelect(btn.type)}
          >
            <Text
              className={`text-lg ${
                isSelected ? "text-purple-800" : "text-black"
              }`}
            >
              {btn.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ForecastButtons;
