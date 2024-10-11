import * as React from "react";
import { ApiContextProvider } from "./contexts/api-context";
import { ViewContextProvider } from "./contexts/view-context";
import { ViewTabs } from "./components/view-tabs/view-tabs";
import { TabContainer } from "./components/tab-container";
import "./App.css";

function App() {
	return (
		<div className="flex fill center">
			<ApiContextProvider>
				<ViewContextProvider>
					<div className="flex column app-container gap-md">
						<ViewTabs />
						<TabContainer />
					</div>
				</ViewContextProvider>
			</ApiContextProvider>
		</div>
	);
}

export default App;
