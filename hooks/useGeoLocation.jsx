import { useEffect, useState } from 'react'
import * as Location from "expo-location";

const useGeoLocation = () => {
    const [location, setLocation] = useState({});
    useEffect(()=>{
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }
      
            let locations = await Location.getCurrentPositionAsync({ enableHighAccuracy: Location.Accuracy.Highest });
            setLocation(locations);
          })();
    },[]);
    
    return location;
}

export default useGeoLocation;
