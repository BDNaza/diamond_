import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import DropDownPicker from 'react-native-dropdown-picker';
// import CurrencyDropdown from '../function/currencyDropdown';


const bgimg = { uri: 'https://www.crane-a.co.jp/en/wp-content/themes/lotus_tcd039a/img/diamondapp/mobile/main-bg.jpg' };

export default function CalculatorScreen({ navigation }) {
  const { t, i18n } = useTranslation();


  const onColorOpen = useCallback(() => {
    setClarityOpen(false);
    setShapeOpen(false);
    setDiscountOpen(false);
    setPurchaseOpen(false);
  }, []);

  const onClarityOpen = useCallback(() => {
    setColorOpen(false);
    setShapeOpen(false);
    setDiscountOpen(false);
    setPurchaseOpen(false);
  }, []);
  const onShapeOpen = useCallback(() => {
    setColorOpen(false);
    setClarityOpen(false);
    setDiscountOpen(false);
    setPurchaseOpen(false);
  }, []);
  const onDiscountOpen = useCallback(() => {
    setColorOpen(false);
    setClarityOpen(false);
    setShapeOpen(false);
    setPurchaseOpen(false);
  }, []);
  const onPurchaseOpen = useCallback(() => {
    setColorOpen(false);
    setClarityOpen(false);
    setShapeOpen(false);
    setDiscountOpen(false);
  }, []);


  //color
  const [colorOpen, setColorOpen] = useState(false);
  const [colorvalue, setColorValue] = useState('1');
  const [coloritems, setColorItems] = useState([
    { label: 'D', value: '1' },
    { label: 'E', value: '2' },
    { label: 'F', value: '3' },
    { label: 'G', value: '4' },
    { label: 'H', value: '5' },
    { label: 'I', value: '6' },
    { label: 'J', value: '7' },
    { label: 'K', value: '8' },
    { label: 'L', value: '9' },
    { label: 'M', value: '10' },
    { label: 'N', value: '11' }
  ]);
  // console.log(colorvalue + 'color');
  //clarity
  const [clarityOpen, setClarityOpen] = useState(false);
  const [clarityvalue, setClarityValue] = useState('1');
  const [clarityitems, setClarityItems] = useState([
    { label: 'IF', value: '1' },
    { label: 'VVS1', value: '2' },
    { label: 'VVS2', value: '3' },
    { label: 'VS1', value: '4' },
    { label: 'VS2', value: '5' },
    { label: 'SI1', value: '6' },
    { label: 'SI2', value: '7' },
    { label: 'SI3', value: '8' },
    { label: 'I1', value: '9' },
    { label: 'I2', value: '10' },
    { label: 'I3', value: '11' },
  ]);
  // console.log(clarityvalue + 'clarity');
  //carat

  const [number, onChangeNumber] = React.useState(null);
  const LOWER_LIMIT = 0.00;
  const HIGHER_LIMIT = 10.99;
  const currentCaratValue = ["0", ".", "0", "0"];
  const [text, setText] = React.useState('');


  const onChangeText = (newText) => {
    if (newText > 10.99) {
      setText((10.99).toString())
    }
    else {
      if (newText >= 0.00 && newText <= 10.99) {
        let splitNumber = newText;
        const myArray = splitNumber.toString().split(".");
        if (myArray[0] == 6 || myArray[0] == 7 || myArray[0] == 8 || myArray[0] == 9) {
          if (myArray[1] === undefined) {
            return;
          }
          myArray[0] = 0
          setText((myArray[0] + '.' + myArray[1]).toString())
        }
        
        else {
          setText(newText.toString());
          // console.log(newText + 'test1');
        }
      }
      else {
        setText(newText.toString());
      }


      // setText((0.01).toString())
    }


  }

  //shape
  const [shapeOpen, setShapeOpen] = useState(false);
  const [shapevalue, setShapeValue] = useState('1');
  const [shapeitems, setShapeItems] = useState([
    {
      label: 'Round',
      value: '1',

    },]);

  //Cut Discount
  const [discountOpen, setDiscountOpen] = useState(false);
  const [discountvalue, setDiscountValue] = useState('30');
  const [discountitems, setDiscountItems] = useState([
    {
      label: '30% - Very Good',
      value: '30',

    },
    {
      label: '40% - Good',
      value: '40',

    },
    {
      label: '50% - Fair',
      value: '50',
    },
    {
      label: '60% - Poor',
      value: '60',
    },
  ]);

  //Purchase Price
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [purchasevalue, setPurchaseValue] = useState('20');
  const [purchaseitems, setPurchaseItems] = useState([
    {
      label: '20%',
      value: '20',

    },
    {
      label: '30%',
      value: '30',

    },
    {
      label: '40%',
      value: '40',
    },
    {
      label: '50%',
      value: '50',
    },
    {
      label: '60%',
      value: '60',
    },
    {
      label: '70%',
      value: '70',
    },
    {
      label: '80%',
      value: '80',
    },
  ]);

  const reset = () => {
    setColorValue('E')
    setClarityValue('FL')
    setText(LOWER_LIMIT)
    setShapeValue('Round')
    setDiscountValue('30%')
    setPurchaseValue('30% - Min price')
  }

  //Currency Dropdown
  const [currencyOpen, setCurrencyOpen] = useState(false);
    const [currencyvalue, setCurrencyValue] = useState('USD');
    const [currencyitems, setCurrencyItems] = useState([
        {
            label: 'USD',
            value: 'USD',
            icon: () => (<Image source={require('../assets/currency/usa.jpg')} />),
        },
        {
            label: 'MYR',
            value: 'MYR',
            icon: () => (<Image source={require('../assets/currency/my.jpg')} />),
        },
        {
            label: 'YEN',
            value: 'YEN',
            icon: () => (<Image source={require('../assets/currency/jp.jpg')} />),
        },
        {
            label: 'TWD',
            value: 'TWD',
            icon: () => (<Image source={require('../assets/currency/tw.jpg')} />),
        },
        {
            label: 'SGD',
            value: 'SGD',
            icon: () => (<Image source={require('../assets/currency/sg.jpg')} />),
        },
    ]);


  const [data, setData] = useState("")
  // const [caratData, setCaratData] = useState("")
  const calcPrice = () => {
      // { console.log('Color Calc', colorvalue) }
      // { console.log('Clarity Calc', clarityvalue) }
      // { console.log('Carat Calc', text) }
      // { console.log('Cut Disc Calc', discountvalue) }
      // { console.log('Purchase Price Calc', purchasevalue) }
      { console.log('Currency: ', currencyvalue) }
      // const text = JSON.stringify(text);
      // { console.log('Carat Calc', text) }

      if (text >= 0.01 && text <= 0.03 ) {

          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (test) =>
            test.id_shape === "1" &&
            test.id_color === colorvalue &&
            test.id_clarity === clarityvalue &&
            test.id_carat === "1"
          );
            const priceInHundreds = filtered[0].price * 100.00;
            const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
            const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
            const diamondPrice = JSON.stringify(afterPurchaseDiscount)
            setData(diamondPrice.replace(/\"/g, ""));
          })
          .catch((error) => {
            console.error(error);
            });
      
      } else if (text >= 0.04 && text <= 0.07) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "2"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));

          })
          .catch((error) => {
            console.error(error);
            });
        
      } else if (text >= 0.08 && text <= 0.14) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "3"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));

          })
          .catch((error) => {
            console.error(error);
            });
      
      } else if (text >= 0.15 && text <= 0.17) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "4"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));

          })
          .catch((error) => {
            console.error(error);
            });
      
      } else if (text >= 0.18 && text <= 0.22) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "5"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));

          })
          .catch((error) => {
            console.error(error);
            });
      
      } else if (text >= 0.23 && text <= 0.29) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "6"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));

          })
          .catch((error) => {
            console.error(error);
            });
      
      } else if (text >= 0.30 && text <= 0.39) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "7"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));

          })
          .catch((error) => {
            console.error(error);
            });
      
      } else if (text >= 0.40 && text <= 0.49) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "8"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));

          })
          .catch((error) => {
            console.error(error);
            });
      
      } else if (text >= 0.50 && text <= 0.69) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "9"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));


          })
          .catch((error) => {
            console.error(error);
            });
        
      } else if (text >= 0.70 && text <= 0.89) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "10"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));

          })
          .catch((error) => {
            console.error(error);
            });
      
      } else if (text >= 0.90 && text <= 0.99) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "11"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));

          })
          .catch((error) => {
            console.error(error);
            });
        
      } else if (text >= 1.00 && text <= 1.49) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "12"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));


          })
          .catch((error) => {
            console.error(error);
            });
       
      } else if (text >= 1.50 && text <= 1.99) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "13"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));

          })
          .catch((error) => {
            console.error(error);
            });
      
      } else if (text >= 2.00 && text <= 2.99) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "14"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));

          })
          .catch((error) => {
            console.error(error);
            });
      
      } else if (text >= 3.00 && text <= 3.99) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "15"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));

          })
          .catch((error) => {
            console.error(error);
            });
      
      } else if (text >= 4.00 && text <= 4.99) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "16"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));

          })
          .catch((error) => {
            console.error(error);
            });
      
      } else if (text >= 5.00 && text <= 5.99) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "17"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));

          })
          .catch((error) => {
            console.error(error);
            });
      
      } else if (text >= 10.00 && text <= 10.99) {
      
          fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(responseJson => {
          // console.log(responseJson.data);
          const filtered = responseJson.data.filter(
            (item) =>
            item.id_shape === "1" &&
            item.id_color === colorvalue &&
            item.id_clarity === clarityvalue &&
            item.id_carat === "18"
          );
          const priceInHundreds = filtered[0].price * 100.00;
          const afterCutDiscount = priceInHundreds - (discountvalue/100 * priceInHundreds);
          const afterPurchaseDiscount = afterCutDiscount - (purchasevalue/100 * afterCutDiscount);
          const diamondPrice = JSON.stringify(afterPurchaseDiscount)
          setData(diamondPrice.replace(/\"/g, ""));

          })
          .catch((error) => {
            console.error(error);
            });

      } 
      // else {
      
      // }
      

      };



  return (
    <SafeAreaView style={styles.main} >
      <ImageBackground source={bgimg} resizeMode="cover" style={styles.background}>
        <View style={styles.head}>
          <Text style={styles.headTitle}>{t("Calculator")}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.scrollArea}>
            <View style={{ width: '50%', justifyContent: 'space-evenly', }}>
              <Text style={{ color: '#fff', marginBottom: -10, fontWeight: '600', fontSize: 15 }}>{t("Color")}</Text>
              <DropDownPicker //Color
                selectedValue={coloritems}
                defaultValue={'E'}
                open={colorOpen}
                onOpen={onColorOpen}
                value={colorvalue}
                items={coloritems}
                setOpen={setColorOpen}
                setValue={setColorValue}
                setItems={setColorItems}
                zIndex={3000}
                zIndexInverse={1000}
                style={{
                  borderColor: '#fff',
                  height: 50,
                  width: '95%',
                  textAlign: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 5

                }}

                dropDownContainerStyle={{
                  borderColor: '#D3D3D3',
                  backgroundColor: '#D3D3D3',
                  height: 90,
                  width: '95%'
                }}

              />


              <Text style={{ color: '#fff', marginBottom: -10,  fontWeight: '600', fontSize: 15 }}>{t("Carat")}</Text>
              <TextInput //Carat
                style={{
                  height: 50,
                  width: '95%',
                  borderWidth: 1,
                  marginTop: 2,
                  padding: 10,
                  backgroundColor: '#fff',
                  borderColor: '#fff',
                  borderRadius: 5
                }}
                onChangeText={onChangeText}
                value={text}
                placeholder="0.2ct"
                keyboardType="decimal-pad"
                maxLength={5}
                returnKeyType={'done'}
                keyboardAppearance={'default'}
                autoCorrect={true}


              />

            </View>

            <View style={{ width: '50%', justifyContent: 'space-evenly' }}>

              <Text style={{ color: '#fff', marginBottom: -10, fontWeight: '600', fontSize: 15 }}>{t("Clarity")}</Text>
              <DropDownPicker //Clarity
                selectedValue={clarityitems}
                defaultValue={'FL'}
                open={clarityOpen}
                onOpen={onClarityOpen}
                setOpen={setClarityOpen}
                value={clarityvalue}
                items={clarityitems}
                setValue={setClarityValue}
                setItems={setClarityItems}
                zIndex={3000}
                zIndexInverse={1000}
                // onValueChange={(value, index) => setValue(value)}
                style={{
                  borderColor: '#fff',
                  height: 50,
                  width: '95%',
                  borderRadius: 5
                }}
                dropDownContainerStyle={{
                  borderColor: '#D3D3D3',
                  backgroundColor: '#D3D3D3',
                  height: 90,
                  width: '95%',
                }}
              />


              <Text style={{ color: '#fff', marginBottom: -10, fontWeight: '600', fontSize: 15 }}>{t("Shape")}</Text>
              <DropDownPicker //Shape
                selectedValue={shapeitems}
                defaultValue={'Round'}
                open={shapeOpen}
                onOpen={onShapeOpen}
                value={shapevalue}
                items={shapeitems}
                setOpen={setShapeOpen}
                setValue={setShapeValue}
                setItems={setShapeItems}
                zIndex={2000}
                zIndexInverse={2000}
                style={{
                  borderColor: '#fff',
                  height: 50,
                  width: '95%',
                  borderRadius: 5
                }}
                dropDownContainerStyle={{
                  borderColor: '#D3D3D3',
                  backgroundColor: '#D3D3D3',
                  width: '95%',
                }}
              />

            </View>
          </View>

          <View style={{ flexDirection: 'column', height: '40%', width: '90%', justifyContent: 'space-between', }} >
            <Text style={{ color: '#fff', textAlign: 'left', marginBottom: -10, fontWeight: '600' }}>{t("Discount")}</Text>
            <DropDownPicker //discount
              selectedValue={discountitems}
              defaultValue={'30%'}
              open={discountOpen}
              onOpen={onDiscountOpen}
              value={discountvalue}
              items={discountitems}
              setOpen={setDiscountOpen}
              setValue={setDiscountValue}
              setItems={setDiscountItems}
              zIndex={3000}
              zIndexInverse={1000}
              // onValueChange={(value, index) => setValue(value)}
              style={{
                borderColor: '#fff',
                height: 50,
                width: '100%',
                alignItems: 'center',
                marginVertical: 5
              }}
              dropDownContainerStyle={{
                borderColor: '#D3D3D3',
                backgroundColor: '#D3D3D3',
                height: 150,
              }}
            />
            <Text style={{ color: '#fff', textAlign: 'left', marginBottom: -10,  fontWeight: '600' }}>{t("PurchasePrice")}</Text>
            <DropDownPicker //purchase price
              selectedValue={purchaseitems}
              defaultValue={'30% - Min Price'}
              open={purchaseOpen}
              onOpen={onPurchaseOpen}
              value={purchasevalue}
              items={purchaseitems}
              setOpen={setPurchaseOpen}
              setValue={setPurchaseValue}
              setItems={setPurchaseItems}
              zIndex={2000}
              zIndexInverse={2000}
              // onValueChange={(value, index) => setValue(value)}
              style={{
                borderColor: '#fff',
                height: 50,
                width: '100%',
                alignItems: 'center',
                marginVertical: 5,
              }}
              dropDownContainerStyle={{
                borderColor: '#D3D3D3',
                backgroundColor: '#D3D3D3',
                height: 90,
              }}
              labelStyle={{
                // textAlign: 'center',
              }}
            />

            <View>
              <View style={{
                flexDirection: 'row',
                // display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                marginVertical: 10,
                alignItems: 'center'
              }}>
                <View style={{
                  width: "49%",
                  height: 50,
                  backgroundColor: 'blue',
                  justifyContent: 'center',
                  borderRadius: 5,
                }}>
                  <TouchableOpacity
                    style={{ alignItems: 'center', }}
                    onPress={calcPrice}
                  >
                  <Text style={{ color: '#fff', textAlign: 'center',  fontWeight: '600' }}>{t("Calculate")}</Text>
                  </TouchableOpacity>
                </View>
                <View style={{
                  width: '49%',
                  height: 50,
                  borderWidth: 1,
                  borderColor: '#fff',
                  justifyContent: 'center',
                  borderRadius: 5,
                  backgroundColor: '#fffff00'
                }}>
                  <TouchableOpacity
                    style={{ alignItems: 'center', }}
                    onPress={reset}
                  >
                    <Text
                      style={{ color: '#fff',  fontWeight: '600' }}>
                      {t("Reset")}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: '5%' }}>
            <Text style={styles.resultNote}>
              {t("Diamond_price")}
            </Text>
            <View style={styles.priceListMain}>
              <View style={{
                width: '38%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRightWidth: 1,
                borderRightColor: '#808080'
              }}>
                {/* <CurrencyDropdown /> */}
                <DropDownPicker
                  selectedValue={currencyitems}
                  defaultValue={'MYR'}
                  open={currencyOpen}
                  // onOpen={onCurrencyOpen}
                  value={currencyvalue}
                  items={currencyitems}
                  setOpen={setCurrencyOpen}
                  setValue={setCurrencyValue}
                  setItems={setCurrencyItems}
                  // onValueChange={(value, index) => setValue(value)}
                  style={{
                      borderColor: '#fff',
                      height: 50,
                  }}
                  dropDownContainerStyle={{
                      borderColor: '#D3D3D3',
                      height: 140,
                  }}
              />
              </View>
              <View style={{
                width: '60%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={styles.scrollAreaTitle2}>{data}</Text>
              </View>
              <View></View>
            </View>
          </View>
        </View>

      </ImageBackground >
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  }, background: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
  head: {
    width: '100%',
    height: '8%',
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headTitle: {
    color: '#fff',
    textAlign: 'left',
    paddingLeft: 20,
    fontSize: 30,
    width: '100%',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollArea: {
    height: '35%',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    // backgroundColor:'blue'

  },
  dropdownarea: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#fff',


  },
  resultNote: {
    width: '90%',
    color: '#fff',
    marginTop: 10,
    marginBottom: 10,
    
    fontWeight: '600'
  },
  scrollAreaTitle2: {
    color: '#000',
    textAlign: 'center',
    fontSize: 15,
    paddingVertical: 15,
    width: '40%',
},
  priceListMain: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },

});