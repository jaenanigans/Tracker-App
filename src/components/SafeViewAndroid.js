import React from "react";
import { View, StyleSheet, Platform, StatusBar } from "react-native";

const SafeAreaAndroid = ({ children }) => {
	return <View style={styles.AndroidSafeArea}>{children}</View>;
};

const styles = StyleSheet.create({
	AndroidSafeArea: {
		flex: 1,
		backgroundColor: "white",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
});

export default SafeAreaAndroid;
