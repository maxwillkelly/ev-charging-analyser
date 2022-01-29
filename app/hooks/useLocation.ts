import React, { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { LocationObject } from "expo-location";

const useLocation = () => {
    const [location, setLocation] = useState<LocationObject>();
    const [error, setError] = useState<string>();

    useEffect(() => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setError('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
    }, [])
};

export default useLocation;
