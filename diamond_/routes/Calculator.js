import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import DropDownPicker from 'react-native-dropdown-picker';



import CurrencyDropdown from '../function/currencyDropdown';




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
  const [colorvalue, setColorValue] = useState('E');
  const [coloritems, setColorItems] = useState([
    {
      label: 'E',
      value: 'E',

    },
    {
      label: 'F',
      value: 'F',

    },
    {
      label: 'G',
      value: 'G',
    },
    {
      label: 'H',
      value: 'H',
    },
    {
      label: 'I',
      value: 'I',
    },
  ]);

  //clarity
  const [clarityOpen, setClarityOpen] = useState(false);
  const [clarityvalue, setClarityValue] = useState('FL');
  const [clarityitems, setClarityItems] = useState([
    {
      label: 'FL',
      value: 'FL',

    },
    {
      label: 'VVS',
      value: 'VVS',

    },
    {
      label: 'VS',
      value: 'VS',
    },
    {
      label: 'SI',
      value: '2SI',
    },
    {
      label: 'I',
      value: 'I',
    },
  ]);

  //carat

  const [number, onChangeNumber] = React.useState(null);
  const LOWER_LIMIT = 0.00;
  const HIGHER_LIMIT = 10.99;
  const currentCaratValue = ["0", ".", "0", "0"];
  const [text, setText] = React.useState('');

  // const onCheckLimit = (nvalue) => {
  //   const parsedQty = Number.parseFloat(nvalue)
  //   // const parsedQty
  //   if (Number.isNaN(parsedQty)) {
  //     setText(0) //setter for state
  //   } else if (parsedQty > 10.99) {
  //     setText((10.99).toString())
  //   } else {
  //     setText(parsedQty.toString())
  //   }
  //   console.log(text)
  // }


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
          console.log(newText + 'test1');
        }
      }
      else {
        setText(newText.toString());
      }


      // setText((0.01).toString())
    }


  }


  // const onChangeText = (newText) => {
  //   if (newText < LOWER_LIMIT && newText > HIGHER_LIMIT) {
  //     return;
  //   }
  //   setText(newText);
  //   console.log(newText+'new text')
  //   //do shift left

  // }

  // const onChangeText = (newText) => {
  //   if (newText < LOWER_LIMIT) {
  //     newText = 0;

  //   }
  //   else if (newText >= 11) {
  //     newText = 10.99;

  //   }
  //   else {
  //     var pasrt = newText.toString().split('.');
  //     t3ole = parts[0];
  //     this.dec = Number("." + parts[1]).toFixed(2);
  //     if (whole == 6 || whole == 7 || whole == 8 || whole == 9) {
  //       whole = 0;
  //       parts = this.whole + this.dec;
  //     }

  //   }
  //   setText(newText);
  //   console.log(newText + 'new text')
  //   //do shift left

  // }











  //shape
  const [shapeOpen, setShapeOpen] = useState(false);
  const [shapevalue, setShapeValue] = useState('Round');
  const [shapeitems, setShapeItems] = useState([
    {
      label: 'Round',
      value: 'Round',

    },]);

  //discount
  const [discountOpen, setDiscountOpen] = useState(false);
  const [discountvalue, setDiscountValue] = useState('30%');
  const [discountitems, setDiscountItems] = useState([
    {
      label: '30%',
      value: '30%',

    },
    {
      label: '40%',
      value: '40%',

    },
    {
      label: '50%',
      value: '50%',
    },
    {
      label: '60%',
      value: '60%',
    },
    {
      label: '70%',
      value: '70%',
    },
  ]);

  //discount
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [purchasevalue, setPurchaseValue] = useState('30% - Min price');
  const [purchaseitems, setPurchaseItems] = useState([
    {
      label: '30% - Min price',
      value: '30% - Min price',

    },
    {
      label: '50% - Mid price',
      value: '50% - Mid price',

    },
    {
      label: '90% - Max price',
      value: '90% - Max price',
    }
  ]);

  const reset = () => {
    setColorValue('E')
    setClarityValue('FL')
    setText(LOWER_LIMIT)
    setShapeValue('Round')
    setDiscountValue('30%')
    setPurchaseValue('30% - Min price')
  }
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
                  <Text style={{ color: '#fff', textAlign: 'center',  fontWeight: '600' }}>{t("Calculate")}</Text>
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
                <CurrencyDropdown />
              </View>
              <View style={{
                width: '60%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
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
  priceListMain: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },

});