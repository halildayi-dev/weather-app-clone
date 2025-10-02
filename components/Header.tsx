import { View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View className="w-full flex flex-row justify-between bg-transparent">
      <Text className="ms-5 text-xl text-white">Kharkiv, Ukraine</Text>
      <View className="me-5 h-5 w-5 overflow-hidden">
        <Image
          source={require("../assets/icons/search.png")}
          resizeMode="cover"
          className="h-full w-full"
        />
      </View>
    </View>
  );
};

export default Header;