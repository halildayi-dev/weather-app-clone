import { View, Text, Image, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const DayForecast = () => {
  return (
    <View className="flex flex-col bg-gray-300 m-2 rounded-lg">
      <View className="flex flex-row gap-x-2 items-center py-1 px-2">
        <View className="h-8 w-8 rounded-full bg-white items-center justify-center">
          <Image
            source={require("../assets/icons/calendar.png")}
            className="w-5 h-5"
          />
        </View>
        <Text className="font-semibold">Day Forecast</Text>
      </View>

      <View className="items-center">
        <LineChart
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                data: [5, 7, 4, 9, 6, 8, 9],
                color: (opacity = 1) => `rgba(168, 85, 247, ${opacity})`,
              },
            ],
          }}
          width={screenWidth - 30} // ekran genişliği - margin
          height={180}
          yAxisSuffix="°"
          chartConfig={{
            backgroundGradientFrom: "#D1D5DB",
            backgroundGradientTo: "#D1D5DB",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(168, 85, 247, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            propsForDots: {
              r: "4",
              strokeWidth: "1",
              stroke: "#a855f7",
            },
            propsForBackgroundLines: {
              stroke: "#4b5563",
              strokeDasharray: "",
            },
          }}
          withVerticalLines={false}
          bezier
          style={{
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

export default DayForecast;
