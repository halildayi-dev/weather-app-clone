import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import Collapsible from "react-native-collapsible";


import { InfoCardsItem } from "../types/infoCard";
import { tenDaysForecast } from "../types/forecast";

import InfoCards from './InfoCards';

interface DailyCardProps {
  data: tenDaysForecast;
}


const DailyCard = ({ data }: DailyCardProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View className='bg-gray-300 m-2 px-2 py-2 rounded-xl'>
    <View className='flex flex-row gap-x-2 justify-between'>
      <View className='flex flex-col gap-y-2'>
        <Text>{data.date}</Text>
        <Text className='text-black/50'>{data.weather}</Text>
      </View>
      <View className='flex flex-col items-center gap-y-2'>
        <Text>{data.maxTemp} &deg;</Text>
        <Text>{data.minTemp} &deg;</Text>
      </View>
      <View>
        <Text>|</Text>
      </View>
      <View className='overflow-hidden'>
        <Image 
          source={data.weatherIcon}
          className='w-12 h-12'
        />
      </View>
      <TouchableOpacity
        className='w-5 h-5 rounded-full bg-white items-center justify-center'
        onPress={() => setIsCollapsed(!isCollapsed)}
      >
        <View>
          {isCollapsed ? 
            <Image 
              source={require("../assets/icons/caret-down.png")}
              className='w-3 h-3'
            />
            :
            <Image 
              source={require("../assets/icons/caret-up.png")}
              className='w-3 h-3'
            />
            }
        </View>
      </TouchableOpacity>

    </View>
     <Collapsible collapsed={isCollapsed} duration={400}>
        <View className="mt-3 bg-gray-200 p-3 rounded-lg">
          <View className="flex-row flex-wrap justify-between gap-2">
            {data.cards.map((item, index) => {
              return(
                <InfoCards 
                  key={index}
                  icon={item.icon}
                  info={item.info}
                  quantity={item.quantity}
                  directionIcon={item.directionIcon}
                  directionQuantity={item.directionQuantity}
                  color={item.color}
                />
              )
            })}
            

          </View>
        </View>
      </Collapsible>
    </View>
  )
}

export default DailyCard;