import * as React from "react";

export enum AppView {
	League = "League",
	Teams = "Teams",
	Team = "Team",
}
export interface IViewContext {
	selectedView: AppView;
	setSelectedView: (tab: AppView) => {};
}
export const ViewContext = React.createContext({
	selectedView: AppView.League,
	setSelectedView: (tab: AppView) => {},
});

export const useViewContext = () => React.useContext(ViewContext);

export const ViewContextProvider: React.FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	const [selectedView, setSelectedView] = React.useState(AppView.League);
	return (
		<ViewContext.Provider value={{ selectedView, setSelectedView }}>
			{children}
		</ViewContext.Provider>
	);
};
