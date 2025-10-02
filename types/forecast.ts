import { ImageSourcePropType } from "react-native";

import { InfoCardsItem } from "./infoCard"

export interface tenDaysForecast {
  date: string;
  weather: string;
  maxTemp: string;
  minTemp: string;
  weatherIcon: ImageSourcePropType;
  cards: InfoCardsItem[];
}

export interface hourlyForecastItem {
  time: string;
  icon: ImageSourcePropType;
  temp: string;
}

export interface RainChanceItem {
  hour: string;
  chance: number;
}