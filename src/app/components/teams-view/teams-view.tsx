import * as React from "react";
import { useApiContext } from "../../contexts/api-context";
import "../../App.css";
import "./teams-view.css";
import { Accordion } from "../library/Accordion/accordion";
import { TeamLine } from "../team-line";
import { TeamSchedule } from "../team-schedule";

export const TeamsView = () => {
	const { getAllTeamBios } = useApiContext();
	const [teamBios, setTeamBios] = React.useState([]);
	React.useEffect(() => {
		setTeamBios(getAllTeamBios());
	}, [getAllTeamBios]);

	return (
		<div className="teams-view-container flex column">
			{teamBios.map(
				(team: { logo: string; name: string; abbreviation: string }) => {
					return (
						<Accordion
							key={team.abbreviation}
							title={<TeamLine team={team} />}
							content={
								<div className="flex column gap-md">
									<TeamSchedule team={team} />
								</div>
							}
						/>
					);
				}
			)}
		</div>
	);
};
