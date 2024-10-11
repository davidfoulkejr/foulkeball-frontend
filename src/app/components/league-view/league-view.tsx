import * as React from "react";
import { useApiContext } from "../../contexts/api-context";
import "../../App.css";
import "./league-view.css";
import { Accordion } from "../library/Accordion/accordion";
import { MatchupLine } from "../matchup-line";

export const LeagueView: React.FC<{}> = () => {
	const { getLeagueSchedule } = useApiContext();
	const [weeks, setWeeks] = React.useState([]);
	React.useEffect(() => {
		setWeeks(getLeagueSchedule());
	}, [getLeagueSchedule]);

	return (
		<div className="league-schedule-container flex column gap-md">
			{weeks.map((week: any) => (
				<Accordion
					key={week.label.split(' ').join('-')}
					title={week.label}
					content={
						<div>
							{week.games.map((game: {away: string; home: string;}) => (
								<MatchupLine {...game} />
							))}
						</div>
					}
				/>
			))}
		</div>
	);
};
