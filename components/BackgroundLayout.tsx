import { ReactNode } from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface BackgroundLayoutProps {
  children: ReactNode;
}

const BackgroundLayout = ({ children }: BackgroundLayoutProps) => {
  return (
    <ImageBackground
      source={require("../assets/app-images/hero-background.png")}
      resizeMode="cover"
      className="w-full h-[250px] flex flex-col"
    >
      <SafeAreaView className="flex-1">
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default BackgroundLayout;
