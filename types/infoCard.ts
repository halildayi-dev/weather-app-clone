import { ImageSourcePropType } from "react-native";

export interface InfoCardsItem {
  icon: ImageSourcePropType;
  info: string;
  quantity: string;
  directionIcon?: ImageSourcePropType;
  directionQuantity: string;
  color?: string;
}