import React, { useState, useEffect } from "react";
import { View, Picker, StyleSheet } from "react-native";


function CaratPicker() {
    const [carats, setCarats] = React.useState([]);
    const [selectedValue, setSelectedValue] = useState(null);
  
    useEffect(() => {
        fetch('https://www.jewel-cafe-staff.com/api/carat', {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
       })
        .then(response => response.json())
        .then(responseJson => {
            setCarats(responseJson.data)
        })
        .catch((error) => {
            console.error(error);
          });
      }, []);
    return (
        <View style={styles.screen}>
            <Picker
                  selectedValue={selectedValue ? selectedValue.id : null}
                  mode="dropdown" // Android only
                  style={styles.picker}
                  itemStyle={{ fontSize: 13 }}
                  onValueChange={(itemValue) => setSelectedValue({ id: itemValue })}>
                  { carats.map((value, i) => {
                      return <Picker.Item fontSize="13" key={i} value={value.id} label={value.carat_range} />
                  })}
             </Picker>
        </View>
    );
}
export default CaratPicker;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    text: {
        fontSize: 24,
    },
    picker: {
        // marginVertical: 30,
        width: 100,
    },
});
