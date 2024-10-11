import * as React from "react";
import { useApiContext } from "../../contexts/api-context";
import "../../App.css";
import "./league-view.css";

export const LeagueView: React.FC<{}> = () => {
	const { getLeagueSchedule } = useApiContext();
	const [weeks, setWeeks] = React.useState([]);
	React.useEffect(() => {
		setWeeks(getLeagueSchedule());
	}, [getLeagueSchedule]);

	return (
		<div className="league-schedule-container flex column gap-md">
			{weeks.map((week: any) => (
				<div key={week.label.split(" ").join("-")} className="week-card">
					{week.label}
				</div>
			))}
		</div>
	);
};
