import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AccountScreen from "./src/screen/AccountScreen";
import SigninScreen from "./src/screen/SigninScreen";
import SignupScreen from "./src/screen/SignupScreen";
import TrackCreateScreen from "./src/screen/TrackCreateScreen";
import TrackDetailScreen from "./src/screen/TrackDetailScreen";
import TrackListScreen from "./src/screen/TrackListScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screen/ResolveAuthScreen";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProdiver } from "./src/context/TrackContext";
import { FontAwesome } from "@expo/vector-icons";

const trackListFlow = createStackNavigator({
	TrackList: TrackListScreen,
	TrackDetail: TrackDetailScreen,
});

trackListFlow.navigationOptions = {
	title: "Tracks",
	tabBarIcon: <FontAwesome name='th-list' size={20} />,
};

const switchNavigator = createSwitchNavigator({
	ResolveAuth: ResolveAuthScreen,
	loginFlow: createStackNavigator({
		Signup: SignupScreen,
		Signin: SigninScreen,
	}),
	mainFlow: createBottomTabNavigator({
		trackListFlow,
		TrackCreate: TrackCreateScreen,
		Account: AccountScreen,
	}),
});

const App = createAppContainer(switchNavigator);

export default () => {
	return (
		<TrackProdiver>
			<LocationProvider>
				<AuthProvider>
					<App
						ref={(navigator) => {
							setNavigator(navigator);
						}}
					/>
				</AuthProvider>
			</LocationProvider>
		</TrackProdiver>
	);
};
