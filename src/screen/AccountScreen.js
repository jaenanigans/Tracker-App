import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import SafeAreaAndroid from "../components/SafeViewAndroid";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);

	return (
		<SafeAreaAndroid>
			<Text style={styles.accountText}>Logout</Text>
			<Spacer>
				<Button title='Sign Out' onPress={signout} />
			</Spacer>
		</SafeAreaAndroid>
	);
};

AccountScreen.navigationOptions = {
	title: "Account",
	tabBarIcon: <FontAwesome name='gear' size={20} />,
};

const styles = StyleSheet.create({
	accountText: {
		fontSize: 18,
		marginTop: 25,
		marginLeft: 15,
	},
});

export default AccountScreen;
