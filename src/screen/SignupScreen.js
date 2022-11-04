import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
	const { state, signup, clearErrorMessage } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<NavigationEvents onWillBlur={clearErrorMessage} />
			<AuthForm
				headerText='Sign Up for Tracker'
				errorMessage={state.errorMessage}
				submitButtonText='Sign Up'
				onSubmit={({ email, password }) => signup({ email, password })}
			/>
			<Spacer />
			<NavLink routeName='Signin' text='Already have an account? Sign in' />
		</View>
	);
};

SignupScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyConten: "center",
		marginTop: 250,
	},
	errorMessage: {
		fontSize: 16,
		color: "red",
		marginLeft: 15,
		marginTop: 15,
	},
});

export default SignupScreen;
