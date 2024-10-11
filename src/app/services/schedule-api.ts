import { teamSchedules, leagueSchedule, nflTeams } from "../../data/index";

export const getAllTeamBios = () => nflTeams;
export const getOneTeamBio = (team: string) =>
	nflTeams.find((tm) => team === tm.abbreviation || team === tm.name);
export const getLeagueSchedule = () => {
	return leagueSchedule.map((week) => {
		const games = week.games.map(({ away_team: away, home_team: home }) => ({
			away: getOneTeamBio(away),
			home: getOneTeamBio(home),
		}));
		return { ...week, games };
	});
};
export const getTeamSchedule = (teamAbbreviation: string) => {
	const teamSchedule =
		teamSchedules[teamAbbreviation as keyof typeof teamSchedules] || undefined;
	if (!teamSchedule) {
		throw Error("Team not found!");
	}

	return teamSchedule.map((week) => {
		let opponentAbbreviation = week.opponent;
		if (week.location === "Away") {
			opponentAbbreviation = opponentAbbreviation.slice(1);
		}
		const opponent = getOneTeamBio(opponentAbbreviation);
		return { ...week, opponent };
	});
};
