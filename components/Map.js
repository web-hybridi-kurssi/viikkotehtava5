import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";




export default function Map(props) {
    const [markers, setMarkers] = useState([])

    const showMarker = (e) => {
        const coords = e.nativeEvent.coordinate
        const tempMarkers = [...markers, coords]
        setMarkers(tempMarkers)
    }
    
    /*useEffect(() => {
        (async() => {
          getUserPosition()
        })()
      }, [])*/
    
      
    return(
        <MapView
        style={styles.map}
        region={props.location}
        onLongPress={showMarker}
        >
        <Marker title="My location"
                    coordinate={props.location}
                    pinColor="blue"></Marker>
        {markers.map((coords, index) => (
                <Marker key={index}
                coordinate={{latitude: coords.latitude, longitude: coords.longitude}}
        />
            ))}
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%'
    }
})