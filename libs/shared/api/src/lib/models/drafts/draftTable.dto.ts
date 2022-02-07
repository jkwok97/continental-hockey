import { TeamsEnum } from '../teams';

export interface DraftTableDto {
  id: number;
  city: string;
  nickname: string;
  shortname: string;
  team_id: TeamsEnum;
  teamlogo: string;
  round_one: TeamsEnum;
  round_two: TeamsEnum;
  round_three: TeamsEnum;
  round_four: TeamsEnum;
  round_five: TeamsEnum;
}
