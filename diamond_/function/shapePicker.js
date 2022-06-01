import React, { useState, useEffect } from "react";
// import axios from "axios";
import { View, Picker, StyleSheet } from "react-native";


function ShapePicker(props) {
  const [shapes, setShape] = React.useState([]);
  // const [selectedValue, setSelectedValue] = useState(null);
  

  useEffect(() => {
      fetch('https://www.jewel-cafe-staff.com/api/shape', {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
     })
      .then(response => response.json())
      .then(responseJson => {
          setShape(responseJson.data)
          // AsyncStorage.setItem('id_espace',espaces[0].id_espace);
          //   setSelectedValue();
      })
      .catch((error) => {
          console.error(error);
        });
    }, []);

  return (

      <View style={styles.screen}>
              <Picker
                  selectedValue={shapes}
                  mode="dropdown" // Android only
                  style={styles.picker}
                  itemStyle={{ fontSize: 13 }}
                  onValueChange={console.log((itemValue) => setShape({ itemValue }))}
                >
                  { shapes.map((value, i) => {
                      return <Picker.Item fontSize="13" key={i} value={value.id} label={value.shape} />
                  })}
              </Picker>
             </View> 
  );
}
export default ShapePicker;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'yellow',
    },
    text: {
        fontSize: 24,
    },
    picker: {
        // marginVertical: 30,
        width: 100,
    },
});
