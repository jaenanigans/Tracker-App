import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
	//run ngrok on http 3000
	baseURL: "",
});

instance.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export default instance;
