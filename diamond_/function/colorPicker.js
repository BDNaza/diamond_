import React, { useState, useEffect } from "react";
import { View, Picker, StyleSheet} from "react-native";


function ColorPicker({colors = [], color, selectedValue, setSelectedValue, setColors, setColor}) {

    return (
        <View style={styles.screen}>
              <Picker
                  selectedValue= {selectedValue ? selectedValue : ""}
                  mode="dropdown" // Android only
                  style={styles.picker}
                  itemStyle={{ fontSize: 13 }}
                  onValueChange={(itemValue) => setSelectedValue(itemValue)}
                  >
                  {colors.map((value, i) => {
                      return <Picker.Item fontSize="13" key={i} value={value.id} label={value.color_code} />
                  })}
    
              </Picker>
              
        </View>
    );
    
}
export default ColorPicker;
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
        width: 80,
    },
});
