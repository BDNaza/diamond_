import * as react from 'react';
import React, { useState, useEffect, Component, Dimensions } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';
import ShowPrice from '../function/filter';
import DynamicallySelectedPicker from '../function/DD'


const bgimg = { uri: 'https://www.crane-a.co.jp/en/wp-content/themes/lotus_tcd039a/img/diamondapp/mobile/main-bg.jpg' };

export default function HomeScreen({ navigation }) {
    const { t, i18n } = useTranslation();

    // ***For Shape Picker*** //

    const [shapes, setShape] = React.useState([]);
    const [selectedShape, setSelectedShape] = useState("");

    const onChangeShape = React.useCallback((shapes) => {
        setShape(shapes);
    }, []);
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
                onChangeShape(responseJson.data)
                // AsyncStorage.setItem('id_espace',espaces[0].id_espace);
                // setSelectedValue();
            })
            .catch((error) => {
                console.error(error);
            });
    }, [onChangeShape]);


    // ***For Color Picker*** //
    const [colors, setColors] = React.useState([]);
    const [selectedColor, setSelectedColor] = useState("");
    const onChangeColors = React.useCallback((colors) => {
        setColors(colors);
    }, []);


    useEffect(() => {
        fetch("https://www.jewel-cafe-staff.com/api/color", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                onChangeColors(responseJson.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [onChangeColors]);

    // ***For Clarity Picker*** //
    const [clarities, setClarities] = React.useState([]);
    const [selectedClarity, setSelectedClarity] = useState("");

    const onChangeClarities = React.useCallback((clarities) => {
        setClarities(clarities);
    }, []);

    useEffect(() => {
        fetch('https://www.jewel-cafe-staff.com/api/clarity', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(responseJson => {
                onChangeClarities(responseJson.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [onChangeClarities]);

    // ***For Carat Picker*** //
    const [carats, setCarats] = React.useState([]);
    const [selectedCarat, setSelectedCarat] = useState(null);


    const onChangeCarats = React.useCallback((carats) => {
        setCarats(carats);
    }, []);
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
                onChangeCarats(responseJson.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [onChangeCarats]);



    return (
        <SafeAreaView style={styles.main} >
            <ImageBackground source={bgimg} resizeMode="cover" style={styles.background}>
                <View style={styles.head}>
                    <Image
                        source={require('../assets/navIcon/DiamondIcon.png')}
                        style={{
                            width: 30,
                            height: 30,
                            marginLeft: 80,
                            resizeMode: 'contain',
                            tintColor: '#fff',
                        }} />

                    <Text style={styles.headTitle}>
                        {t("Price")}
                    </Text>
                </View>

                <View style={styles.body}>
                    <Text style={styles.bodyTitle}>{t("Price-update")}{'\n'}{t("Price-update-date")}</Text>
                    <View style={styles.scrollArea}>
                        <View style={styles.pickertitle}>
                            <Text style={styles.scrollAreaTitle}>{t("Shape")}</Text>
                            <Text style={styles.scrollAreaTitle}>{t("Color")}</Text>
                            <Text style={styles.scrollAreaTitle}>{t("Clarity")}</Text>
                            <Text style={styles.scrollAreaTitle}>{t("Carat")}</Text>
                        </View>
                        <View>
                            <DynamicallySelectedPicker />
                        </View>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>{t("Calculate")}</Text>
                    </View>
                    <Text style={styles.resultNote}>
                        {t("Diamond_price")} {"\n"}
                        {t("Diamond_price/carat")}
                    </Text>
                    <View style={styles.priceListMain}>
                        <View
                            style={{
                                width: "40%",
                                height: 50,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRightWidth: 1,
                                borderRightColor: "#808080",
                            }}
                        >
                            <Image source={require('../assets/currency/usa.jpg')}></Image>
                            <Text style={styles.scrollAreaTitle2}>{"USD"}</Text>
                        </View>
                        <View style={{ width: '60%', height: 50,justifyContent: 'center', alignItems: 'center', }}>
                            <ShowPrice
                                selectedColor={selectedColor}
                            />

                        </View>
                        <View>
                        </View>
                    </View>
                </View>

                <View style={styles.nav} >

                </View>
            </ImageBackground >

        </SafeAreaView >

    );

}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    background: {
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
        paddingLeft: 5,
        fontSize: 30,
        width: '100%',

    },
    body: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyTitle: {
        color: '#fff',
        fontSize: 25,
        width: '70%',
        textAlign: 'center',
        paddingVertical: 10,
    },
    scrollArea: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'flex-start',
        width: '90%',
        height: 280,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#fff',
    },
    container: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column'
      
    },
    pickerSingleShape: {
        height: '100%',
        width: '17%',
    },
    pickerSingleColor: {
        height: '100%',
        width: '14%',
        alignItems: 'center'
    },
    pickerSingleClarity: {
        height: '100%',
        width: '17%',

    },
    pickerSingleCarat: {
        height: '100%',
        width: '25%',
        backgroundColor: '#fff'
    },
    pickerCarat: {
        width: 90,
        borderTopWidth: 2,
        borderTopColor: '#005fe9',
        borderBottomWidth: 2,
        borderBottomColor: '#005fe9',
        height: 40,
        marginTop: 80,
        textAlign: 'left',
        overlayColor: 'black',
        borderRadius: 0,
    },

    pickerColor: {
        width: 40,
        borderTopWidth: 2,
        borderTopColor: '#005fe9',
        borderBottomWidth: 2,
        borderBottomColor: '#005fe9',
        height: 40,
        marginTop: 80,
        textDecorationColor: 'black',
        textAlign: 'left',
    },

    pickerClarity: {
        width: 70,
        borderTopWidth: 2,
        borderTopColor: '#005fe9',
        borderBottomWidth: 2,
        borderBottomColor: '#005fe9',
        height: 40,
        marginTop: 80,
    },

    pickerShape: {
        width: 65,
        borderTopWidth: 2,
        borderTopColor: '#005fe9',
        borderBottomWidth: 2,
        borderBottomColor: '#005fe9',
        height: 40,
        marginTop: 80,
    },

    scrollAreaTitle: {
        color: '#000',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 15,
        paddingVertical: 15,
        width: '20%',
        // fontFamily:'Open Sans Light',
        // fontWeight:'600'
    },
    scrollAreaTitle2: {
        color: '#000',
        textAlign: 'center',
        fontSize: 15,
        paddingVertical: 15,
        width: '40%',
    },
    button: {
        width: '90%',
        height: 50,
        marginTop: 20,
        backgroundColor: 'blue',
        borderRadius: 5,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
    resultNote: {
        width: '90%',
        color: '#fff',
        marginTop: 10,
        marginBottom: 10,
        // fontFamily:'opensans',
        fontWeight: '600',
        fontSize: 15
    },
    priceListMain: {
        flexDirection: 'row',
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
    },
    pickerItems: {
        color: '#616161',
        fontSize: 10,
    },
    nav: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    navIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        justifyContent: 'center',
    },
    pickertitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
});
