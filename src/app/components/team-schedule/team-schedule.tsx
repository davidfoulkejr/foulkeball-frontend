import * as React from "react";
import { useApiContext } from "../../contexts/api-context";
import "./team-schedule.css";
import { TeamLine } from "../team-line";

export interface ITeamScheduleProps {
	team: {
		logo: string;
		name: string;
		abbreviation: string;
	};
}
export const TeamSchedule: React.FC<ITeamScheduleProps> = ({ team }) => {
	const { getTeamSchedule } = useApiContext();
	const schedule = getTeamSchedule(team.abbreviation);
	return (
		<div className="flex fill column center">
			{schedule.map(
				(week: {
					week: string;
					location: string;
					opponent: ITeamScheduleProps["team"];
				}) => (
					<div>
						{week.opponent ? (
							<div className="flex row matchup">
								<span>{week.location === "Home" ? "vs." : "at"}</span>
								<TeamLine team={week.opponent} />
							</div>
						) : (
							<div>BYE</div>
						)}
					</div>
				)
			)}
		</div>
	);
};
