import * as React from 'react';
import { useApiContext } from '../../contexts/api-context';
import { TeamLine } from '../team-line';

interface IMatchupLineProps {
    home: string;
    away: string;
}
export const MatchupLine: React.FC<IMatchupLineProps> = ({home, away}) => {
    const {getOneTeamBio} = useApiContext();
    const homeTeam = getOneTeamBio(home);
    const awayTeam = getOneTeamBio(away);
    return (
        <div className="flex row center gap-md">
            <TeamLine team={awayTeam} />
            <span>at</span>
            <TeamLine team={homeTeam} />
        </div>
    )
}