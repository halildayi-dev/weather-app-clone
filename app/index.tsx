import { useState } from "react";
import { ScrollView, View } from "react-native";

import BackgroundLayout from "@/components/BackgroundLayout";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ForecastButtons from "@/components/ForecastButtons";
import InfoCards from "@/components/InfoCards";
import HourlyForecast from "@/components/HourlyForecast";
import DayForecast from "@/components/DayForecast";
import RainChance from "@/components/RainChance";
import DailyCard from "@/components/DailyCard";

import { ForecastType } from "@/enums/ForecastType";
import { InfoCardsItem } from "../types/infoCard";
import { tenDaysForecast } from "../types/forecast";

function App() {
  const [selectedForecast, setSelectedForecast] = useState<ForecastType>(
    ForecastType.TODAY
  );

  const infoCardsData: InfoCardsItem[] = [
    {
      icon: require("../assets/icons/wind.png"),
      info: "Wind speed",
      quantity: "12 km/h",
      directionIcon: require("../assets/icons/caret-down.png"),
      directionQuantity: "2 km/h",
      color: "bg-red-500",
    },
    {
      icon: require("../assets/icons/rain.png"),
      info: "Rain chance",
      quantity: "24 %",
      directionIcon: require("../assets/icons/caret-up.png"),
      directionQuantity: "10 %",
      color: "bg-purple-500",
    },
    {
      icon: require("../assets/icons/water-waves.png"),
      info: "Pressure",
      quantity: "720 hpa",
      directionIcon: require("../assets/icons/caret-up.png"),
      directionQuantity: "32 hpa",
      color: "bg-purple-500",
    },
    {
      icon: require("../assets/icons/sun.png"),
      info: "UV Index",
      quantity: "2.3",
      directionIcon: require("../assets/icons/caret-down.png"),
      directionQuantity: "0.3",
      color: "bg-red-500",
    },
  ];

  const tenDaysForecastData: tenDaysForecast[] = [
    {
      date: "Today",
      weather: "Cloudy and sunny",
      maxTemp: "3",
      minTemp: "-2",
      weatherIcon: require("../assets/icons/cloud-sun.png"),
      cards: [
        {
          icon: require("../assets/icons/wind.png"),
          info: "Wind speed",
          quantity: "12 km/h",
          directionIcon: require("../assets/icons/caret-down.png"),
          directionQuantity: "2 km/h",
          color: "bg-red-500",
        },
        {
          icon: require("../assets/icons/rain.png"),
          info: "Rain chance",
          quantity: "24 %",
          directionIcon: require("../assets/icons/caret-up.png"),
          directionQuantity: "10 %",
          color: "bg-purple-500",
        },
        {
          icon: require("../assets/icons/water-waves.png"),
          info: "Pressure",
          quantity: "720 hpa",
          directionIcon: require("../assets/icons/caret-up.png"),
          directionQuantity: "32 hpa",
          color: "bg-purple-500",
        },
        {
          icon: require("../assets/icons/sun.png"),
          info: "UV Index",
          quantity: "2.3",
          directionIcon: require("../assets/icons/caret-down.png"),
          directionQuantity: "0.3",
          color: "bg-red-500",
        },
      ],
    },
    {
      date: "Tomorrow",
      weather: "Cloudy and sunny",
      maxTemp: "3",
      minTemp: "-2",
      weatherIcon: require("../assets/icons/cloud-sun.png"),
      cards: [
        {
          icon: require("../assets/icons/wind.png"),
          info: "Wind speed",
          quantity: "12 km/h",
          directionIcon: require("../assets/icons/caret-down.png"),
          directionQuantity: "2 km/h",
          color: "bg-red-500",
        },
        {
          icon: require("../assets/icons/rain.png"),
          info: "Rain chance",
          quantity: "24 %",
          directionIcon: require("../assets/icons/caret-up.png"),
          directionQuantity: "10 %",
          color: "bg-purple-500",
        },
        {
          icon: require("../assets/icons/water-waves.png"),
          info: "Pressure",
          quantity: "720 hpa",
          directionIcon: require("../assets/icons/caret-up.png"),
          directionQuantity: "32 hpa",
          color: "bg-purple-500",
        },
        {
          icon: require("../assets/icons/sun.png"),
          info: "UV Index",
          quantity: "2.3",
          directionIcon: require("../assets/icons/caret-down.png"),
          directionQuantity: "0.3",
          color: "bg-red-500",
        },
      ],
    },
    {
      date: "Thursday, Jan 20",
      weather: "Cloudy and sunny",
      maxTemp: "3",
      minTemp: "-2",
      weatherIcon: require("../assets/icons/cloud-sun.png"),
      cards: [
        {
          icon: require("../assets/icons/wind.png"),
          info: "Wind speed",
          quantity: "12 km/h",
          directionIcon: require("../assets/icons/caret-down.png"),
          directionQuantity: "2 km/h",
          color: "bg-red-500",
        },
        {
          icon: require("../assets/icons/rain.png"),
          info: "Rain chance",
          quantity: "24 %",
          directionIcon: require("../assets/icons/caret-up.png"),
          directionQuantity: "10 %",
          color: "bg-purple-500",
        },
        {
          icon: require("../assets/icons/water-waves.png"),
          info: "Pressure",
          quantity: "720 hpa",
          directionIcon: require("../assets/icons/caret-up.png"),
          directionQuantity: "32 hpa",
          color: "bg-purple-500",
        },
        {
          icon: require("../assets/icons/sun.png"),
          info: "UV Index",
          quantity: "2.3",
          directionIcon: require("../assets/icons/caret-down.png"),
          directionQuantity: "0.3",
          color: "bg-red-500",
        },
      ],
    },
    {
      date: "Wednesday, Jan 21",
      weather: "Cloudy and sunny",
      maxTemp: "3",
      minTemp: "-2",
      weatherIcon: require("../assets/icons/cloud-sun.png"),
      cards: [
        {
          icon: require("../assets/icons/wind.png"),
          info: "Wind speed",
          quantity: "12 km/h",
          directionIcon: require("../assets/icons/caret-down.png"),
          directionQuantity: "2 km/h",
          color: "bg-red-500",
        },
        {
          icon: require("../assets/icons/rain.png"),
          info: "Rain chance",
          quantity: "24 %",
          directionIcon: require("../assets/icons/caret-up.png"),
          directionQuantity: "10 %",
          color: "bg-purple-500",
        },
        {
          icon: require("../assets/icons/water-waves.png"),
          info: "Pressure",
          quantity: "720 hpa",
          directionIcon: require("../assets/icons/caret-up.png"),
          directionQuantity: "32 hpa",
          color: "bg-purple-500",
        },
        {
          icon: require("../assets/icons/sun.png"),
          info: "UV Index",
          quantity: "2.3",
          directionIcon: require("../assets/icons/caret-down.png"),
          directionQuantity: "0.3",
          color: "bg-red-500",
        },
      ],
    },
  ];

  const hourlyData = [
    {
      time: "Now",
      icon: require("../assets/icons/cloud-sun.png"),
      temp: "10°",
    },
    {
      time: "12:00",
      icon: require("../assets/icons/cloud-sun.png"),
      temp: "12°",
    },
    {
      time: "13:00",
      icon: require("../assets/icons/cloud-sun.png"),
      temp: "14°",
    },
    {
      time: "14:00",
      icon: require("../assets/icons/cloud-sun.png"),
      temp: "10°",
    },
    {
      time: "15:00",
      icon: require("../assets/icons/cloud-sun.png"),
      temp: "12°",
    },
    {
      time: "16:00",
      icon: require("../assets/icons/cloud-sun.png"),
      temp: "14°",
    },
    {
      time: "17:00",
      icon: require("../assets/icons/cloud-sun.png"),
      temp: "10°",
    },
    {
      time: "18:00",
      icon: require("../assets/icons/cloud-sun.png"),
      temp: "12°",
    },
    {
      time: "19:00",
      icon: require("../assets/icons/cloud-sun.png"),
      temp: "14°",
    },
    {
      time: "20:00",
      icon: require("../assets/icons/cloud-sun.png"),
      temp: "10°",
    },
    {
      time: "21:00",
      icon: require("../assets/icons/cloud-sun.png"),
      temp: "12°",
    },
    {
      time: "22:00",
      icon: require("../assets/icons/cloud-sun.png"),
      temp: "14°",
    },
  ];

  const timeData = [
    {
      icon: require("../assets/icons/sunrise.png"),
      info: "Sun rise",
      quantity: "4:20 AM",
      directionQuantity: "4h ago",
    },
    {
      icon: require("../assets/icons/sunset.png"),
      info: "Sunset",
      quantity: "4:50 PM",
      directionQuantity: "in 9 ",
    },
  ];

  // DayForecast.tsx
  const graphData = [];

  const rainChanceData = [
    { hour: "0 AM", chance: 0.3 },
    { hour: "1 AM", chance: 0.6 },
    { hour: "2 AM", chance: 0.8 },
    { hour: "3 AM", chance: 0.5 },
    { hour: "4 AM", chance: 0.5 },
    { hour: "5 AM", chance: 0.3 },
    { hour: "6 AM", chance: 0.6 },
    { hour: "7 AM", chance: 0.8 },
    { hour: "8 AM", chance: 0.5 },
    { hour: "9 AM", chance: 0.5 },
    { hour: "10 AM", chance: 0.8 },
    { hour: "11 AM", chance: 0.5 },
    { hour: "12 AM", chance: 0.5 },
    { hour: "1 PM", chance: 0.6 },
    { hour: "2 PM", chance: 0.8 },
    { hour: "3 PM", chance: 0.5 },
    { hour: "4 PM", chance: 0.5 },
    { hour: "5 PM", chance: 0.3 },
    { hour: "6 PM", chance: 0.6 },
    { hour: "7 PM", chance: 0.8 },
    { hour: "8 PM", chance: 0.5 },
    { hour: "9 PM", chance: 0.5 },
    { hour: "10 PM", chance: 0.8 },
    { hour: "11 PM", chance: 0.5 },
    { hour: "12 PM", chance: 0.5 },
  ];

  return (
    <ScrollView>
      <BackgroundLayout>
        <Header />
        <Hero />
      </BackgroundLayout>

      <ForecastButtons
        selected={selectedForecast}
        onSelect={setSelectedForecast}
      />

      {(selectedForecast === ForecastType.TODAY ||
        selectedForecast === ForecastType.TOMORROW) && (
        <>
          <View className="flex-row flex-wrap justify-between gap-2 px-2">
            {infoCardsData.map((item, index) => {
              return (
                <InfoCards
                  key={index}
                  icon={item.icon}
                  info={item.info}
                  quantity={item.quantity}
                  directionIcon={item.directionIcon}
                  directionQuantity={item.directionQuantity}
                  color={item.color}
                />
              );
            })}
          </View>

          <HourlyForecast data={hourlyData} />
          <DayForecast />
          <RainChance data={rainChanceData} />

          <View className="flex-row flex-wrap justify-between gap-2 px-2">
            {timeData.map((item, index) => {
              return (
                <InfoCards
                  key={index}
                  icon={item.icon}
                  info={item.info}
                  quantity={item.quantity}
                  directionQuantity={item.directionQuantity}
                />
              );
            })}
          </View>
        </>
      )}

      {selectedForecast === ForecastType.TEN_DAYS && (
        <>
          {tenDaysForecastData.map((item, index) => {
            return <DailyCard key={index} data={item} />;
          })}
        </>
      )}
    </ScrollView>
  );
}

export default App;
