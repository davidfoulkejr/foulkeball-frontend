import * as React from "react";
import { AppView, useViewContext } from "../../contexts/view-context";
import "./tab-container.css";
import { LeagueView } from "../league-view";
import { TeamsView } from "../teams-view";

export const TabContainer: React.FC<{}> = () => {
	const { selectedView } = useViewContext();
	switch (selectedView) {
		case AppView.League:
			return <LeagueView />;
		case AppView.Teams:
			return <TeamsView />;
		default:
			return <h2 className="error">Oops! Page not found!</h2>;
	}
};
