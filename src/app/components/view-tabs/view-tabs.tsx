import * as React from "react";
import { AppView, useViewContext } from "../../contexts/view-context";
import "../../App.css";
import "./view-tabs.css";

export interface IViewTabsProps {}
export const ViewTabs: React.FC<IViewTabsProps> = () => {
	const { setSelectedView } = useViewContext();
	const handleClick = (ev: React.MouseEvent) => {
		const id = ev.currentTarget?.id;
		switch (id) {
			case "league":
				setSelectedView(AppView.League);
				return;
			case "teams":
				setSelectedView(AppView.Teams);
				return;
			default:
				console.log("No corresponding view found for button:", id);
				return;
		}
	};

	return (
		<div className="flex row center gap-md">
			<button id="league" onClick={handleClick}>
				By Week
			</button>
			<button id="teams" onClick={handleClick}>
				By Team
			</button>
		</div>
	);
};
