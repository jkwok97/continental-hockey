import { MenuItem } from 'primeng/api';

export const mainMenuItems: MenuItem[] = [
  {
    label: 'Home',
    items: [
      { label: 'Summary' },
      {
        label: 'History',
        items: [
          { label: 'Franchise' },
          { label: 'Players' },
          { label: 'Goalies' },
          { label: 'Awards' },
        ],
      },
    ],
  },
  {
    label: 'League',
    items: [
      {
        label: 'Current Stats',
        items: [
          { label: 'Teams Leaders' },
          { label: 'Players Leaders' },
          { label: 'Goalies Leaders' },
          { label: 'Teams Detailed' },
          { label: 'Players Detailed' },
          { label: 'Goalies Detailed' },
        ],
      },
      {
        label: 'Game Updates',
        items: [
          { label: 'Current Days' },
          { label: 'All Days' },
          { label: 'Playoffs' },
        ],
      },
      {
        label: 'Teams',
        items: [
          {
            label: 'North West Division',
            items: [
              { label: 'Kelowna Mountaineers' },
              { label: 'Oakland Assassins' },
              { label: 'San Francisco Fighting Cocks' },
              { label: 'Victoria Stellar Jays' },
              { label: 'Sacremento Storm' },
            ],
          },
          {
            label: 'South West Division',
            items: [
              { label: 'Chyenne Desperado' },
              { label: 'Lone Star Brahmas' },
              { label: 'Memphis Hound Dogs' },
              { label: 'Oklahoma City Oil Barons' },
              { label: 'Wichita Wolfpack' },
            ],
          },
          {
            label: 'North East Division',
            items: [
              { label: 'Green Bay Glory' },
              { label: 'Indianapolis Goats' },
              { label: 'Milwaukee Ice Dragons' },
              { label: 'Mississauga North Stars' },
              { label: 'Peoria Prowlers' },
            ],
          },
          {
            label: 'South East Division',
            items: [
              { label: 'Atlanta Flashers' },
              { label: 'Augusta Green Jackets' },
              { label: 'Cincinnati Cyclones' },
              { label: 'Staten Island Killer Bees' },
              { label: 'St.Johns Vikings' },
            ],
          },
        ],
      },
      {
        label: 'Salaries',
      },
      {
        label: 'Trades',
      },
      {
        label: 'Ratings',
      },
      {
        label: 'Waiver Priority',
      },
      {
        label: 'Historic Stats',
        items: [{ label: 'Teams' }, { label: 'Players' }, { label: 'Goalies' }],
      },
    ],
  },
  {
    label: 'NHL',
    items: [
      { label: 'Leaders' },
      { label: 'Statistics' },
      { label: 'Twitter Updates' },
    ],
  },
  {
    label: 'Draft',
    items: [{ label: 'Current' }, { label: 'History' }],
  },
  {
    label: 'Awards',
    items: [
      { label: 'Champions' },
      { label: 'Leading Scorer' },
      { label: 'Best Defenseman' },
      { label: 'Best Rookie' },
      { label: 'Best Goalie' },
      { label: 'Best GM' },
      { label: 'Best Season' },
    ],
  },
  {
    label: 'Rules & Prizing',
    items: [
      { label: 'Player Equalization' },
      { label: 'Draft Lottery' },
      { label: 'Emergency Goaltender' },
      { label: 'Player Protection' },
      { label: 'Rosters' },
      { label: 'Waivers' },
      { label: 'Winnings Allocation' },
    ],
  },
];
