import { Provider } from "react-redux";
import { store }    from "../state/store/index.js";

export function StoreProvider({ children }) {
	return (
		<Provider store={ store }>
			{ children }
		</Provider>
	);
}