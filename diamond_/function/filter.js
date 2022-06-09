// import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{ useState, useEffect } from "react";
import { ColorPicker } from "../function/currencyDropdown";

function ShowPrice(selectedColor, selectedClarity, selectedCarat) {
  // console.log(selectedColor)
  //console.log("Selected Color: ", selectedColor.selectedColor);
  const time = 20;
  const [data, setData] = useState("")
  const [count, setCount] = useState(time)
  //console.log("Selected Color: ", selectedColor.selectedColor);
  const [isStart, setIsStart] = useState(false);


  // temp set interval starts //
  useEffect(() => {
    if (isStart) {
      const timer = setInterval(() => {
        console.log(count);
        if (count > 0) {
          setCount(count - 1)
        } else {
          setCount('Times up');
          clearInterval(timer);
        }
      }, 1000);
    }
  }, [isStart]);

  // temp set interval ends //

  tempUseEffect(selectedColor.selectedColor);

  return (

    <View
      style={{
        width: "60%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.scrollAreaTitle}></Text>
    </View>
  );

  //   }
};

function tempUseEffect(selectedColorId) {

  const Component = ({ selectedColorId }) => {
    useEffect(() => {

      console.log("PASSED ID = " + selectedColorId);

      fetch("https://www.jewel-cafe-staff.com/api/showPrice", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          
          // const test = JSON.stringify(selectedValue.selectedValue);

          console.log("Selected Color: ", selectedColor.selectedColor);
          // console.log("Selected Clarity: ", selectedClarity.selectedClarity);
          // console.log("Selected Carat: ", selectedCarat.selectedCarat);
          const filtered = responseJson.data.filter(
            (item) =>
              item.id_shape === "1" &&
              item.id_color === "1" &&
              item.id_clarity === "1" &&
              item.id_carat === "1"
          );
          console.log("Filtered Data Price: ", filtered[0].price);
          // const setData = JSON.parse(filtered[0].price);
          // setData = diamondPrice;
          // setData = JSON.parse(diamondPrice);


          // console.log("Filtered Data Price Parsed: ", setData);
          // console.log("Filtered Data Price: ", setData);

          // this.setState({
          //   data: diamondPrice,
          // });

        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  }



}

const styles = StyleSheet.create({
  scrollAreaTitle: {
    color: "#000",
    textAlign: "center",
    fontSize: 15,
    paddingVertical: 15,
    paddingLeft: 110,
    width: "200%",
  },
});

export default ShowPrice;
// module.exports = ShowPrice;