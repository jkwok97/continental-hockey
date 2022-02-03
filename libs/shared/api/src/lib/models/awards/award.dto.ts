import { AwardTypeEnum } from './awardType.enum';

export interface AwardDto {
  awardtypeid: AwardTypeEnum;
  cha_season: string;
  city: string;
  display_name: string;
  display_season: string;
  id: number;
  nhl_id: string;
  nickname: string;
  ownerfirst: string;
  ownerid: number;
  ownerlast: string;
  playerfirst: string;
  playerid: string;
  playerlast: string;
  teamcolor: string;
  teamid: number;
  teamlogo: string;
}
