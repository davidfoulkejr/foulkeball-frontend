import * as React from "react";
import {
	getAllTeamBios,
	getOneTeamBio,
	getLeagueSchedule,
	getTeamSchedule,
} from "../services/schedule-api";

export interface IApiContext {
	getAllTeamBios: () => any;
	getOneTeamBio: (team: string) => any;
	getLeagueSchedule: () => any;
	getTeamSchedule: (team: string) => any;
}
const defaultApiContext = {
	getAllTeamBios: () => {},
	getOneTeamBio: (_team: string) => {},
	getLeagueSchedule: () => {},
	getTeamSchedule: (_team: string) => {},
};
export const ApiContext = React.createContext<IApiContext>(defaultApiContext);
export const useApiContext = () => React.useContext(ApiContext);
export const ApiContextProvider: React.FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return (
		<ApiContext.Provider
			value={{
				getAllTeamBios,
				getOneTeamBio,
				getLeagueSchedule,
				getTeamSchedule,
			}}
		>
			{children}
		</ApiContext.Provider>
	);
};
