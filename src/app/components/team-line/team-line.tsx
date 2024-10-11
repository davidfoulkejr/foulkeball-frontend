import * as React from "react";
import "../../App.css";

export interface ITeamLineProps {
	team: {
		logo: string;
		name: string;
		abbreviation: string;
	};
}
export const TeamLine: React.FC<ITeamLineProps> = ({ team }) => {
	return (
		<div className="flex row gap-md">
			<img className="logo" src={team.logo} alt={`${team.name} logo`} />
			<span>
				{team.name} ({team.abbreviation})
			</span>
		</div>
	);
};
