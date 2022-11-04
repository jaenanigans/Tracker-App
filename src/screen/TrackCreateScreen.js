import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import Map from "../components/Map";
import { Text } from "react-native-elements";
import SafeAreaAndroid from "../components/SafeViewAndroid";
//import "../_mockLocation";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { withNavigationFocus } from "react-navigation";
import TrackForm from "../components/TrackForm";
import { FontAwesome } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
	const {
		addLocation,
		state: { recording },
	} = useContext(LocationContext);
	const callback = useCallback(
		(location) => {
			addLocation(location, recording);
		},
		[recording]
	);
	const [err] = useLocation(isFocused || recording, callback);

	return (
		<SafeAreaAndroid>
			<Text h3>Create a Track</Text>
			<Map />
			{err ? <Text>Please enable location service</Text> : null}
			<TrackForm />
		</SafeAreaAndroid>
	);
};

TrackCreateScreen.navigationOptions = {
	title: "Add track",
	tabBarIcon: <FontAwesome name='plus' size={20} />,
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
