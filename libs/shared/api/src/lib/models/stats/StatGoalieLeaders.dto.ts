import { StatGoalieLeaderDto } from './StatGoalieLeader.dto';

export interface StatGoalieLeadersDto {
  shotsFaced: StatGoalieLeaderDto[];
  gaa: StatGoalieLeaderDto[];
  savePct: StatGoalieLeaderDto[];
  shutouts: StatGoalieLeaderDto[];
  wins: StatGoalieLeaderDto[];
}
