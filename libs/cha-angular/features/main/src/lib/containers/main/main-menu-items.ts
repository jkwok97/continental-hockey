import { MenuItem } from 'primeng/api';

export const mainMenuItems: MenuItem[] = [
  {
    label: 'Home',
    items: [
      {
        label: 'Summary',
        routerLink: ['/home/summary'],
      },
      {
        label: 'History',
        items: [
          {
            label: 'Franchise',
            routerLink: ['/home/franchise'],
          },
          {
            label: 'Players',
            routerLink: ['/home/current-players'],
          },
          {
            label: 'Goalies',
            routerLink: ['/home/current-goalies'],
          },
          {
            label: 'Awards',
            routerLink: ['/home/awards'],
          },
        ],
      },
      { label: 'Logout' },
    ],
  },
  {
    label: 'League',
    items: [
      {
        label: 'Current Stats',
        items: [
          {
            label: 'Teams Leaders',
            routerLink: ['/league/stats/teams-leaders'],
          },
          {
            label: 'Players Leaders',
            routerLink: ['/league/stats/players-leaders'],
          },
          {
            label: 'Goalies Leaders',
            routerLink: ['/league/stats/goalies-leaders'],
          },
          {
            label: 'Teams Detailed',
            routerLink: ['/league/stats/teams-detailed'],
          },
          {
            label: 'Players Detailed',
            routerLink: ['/league/stats/players-detailed'],
          },
          {
            label: 'Goalies Detailed',
            routerLink: ['/league/stats/goalies-detailed'],
          },
        ],
      },
      {
        label: 'Game Updates',
        items: [
          {
            label: 'Current Days',
            routerLink: ['/league/games/current'],
          },
          {
            label: 'Upcoming Days',
            routerLink: ['/league/games/upcoming'],
          },
          {
            label: 'All Days',
            routerLink: ['/league/games/all'],
          },
          {
            label: 'Playoffs',
            routerLink: ['/league/games/playoffs'],
          },
        ],
      },
      {
        // TODO MAKE THESE DYNAMIC
        label: 'Teams',
        items: [
          {
            label: 'North West Division',
            items: [
              {
                label: 'Kelowna Mountaineers',
                routerLink: ['/league/teams/8'],
              },
              {
                label: 'Oakland Assassins',
                routerLink: ['/league/teams/13'],
              },
              {
                label: 'San Francisco Fighting Cocks',
                routerLink: ['/league/teams/16'],
              },
              {
                label: 'Victoria Stellar Jays',
                routerLink: ['/league/teams/53'],
              },
              {
                label: 'Sacremento Storm',
                routerLink: ['/league/teams/61'],
              },
            ],
          },
          {
            label: 'South West Division',
            items: [
              {
                label: 'Chyenne Desperado',
                routerLink: ['/league/teams/4'],
              },
              {
                label: 'Lone Star Brahmas',
                routerLink: ['/league/teams/9'],
              },
              {
                label: 'Memphis Hound Dogs',
                routerLink: ['/league/teams/10'],
              },
              {
                label: 'Oklahoma City Oil Barons',
                routerLink: ['/league/teams/14'],
              },
              {
                label: 'Wichita Wolfpack',
                routerLink: ['/league/teams/21'],
              },
            ],
          },
          {
            label: 'North East Division',
            items: [
              {
                label: 'Green Bay Glory',
                routerLink: ['/league/teams/6'],
              },
              {
                label: 'Indianapolis Goats',
                routerLink: ['/league/teams/7'],
              },
              {
                label: 'Milwaukee Ice Dragons',
                routerLink: ['/league/teams/11'],
              },
              {
                label: 'Mississauga North Stars',
                routerLink: ['/league/teams/12'],
              },
              {
                label: 'Peoria Prowlers',
                routerLink: ['/league/teams/15'],
              },
            ],
          },
          {
            label: 'South East Division',
            items: [
              {
                label: 'Atlanta Flashers',
                routerLink: ['/league/teams/2'],
              },
              {
                label: 'Augusta Green Jackets',
                routerLink: ['/league/teams/3'],
              },
              {
                label: 'Cincinnati Cyclones',
                routerLink: ['/league/teams/5'],
              },
              {
                label: 'Staten Island Killer Bees',
                routerLink: ['/league/teams/19'],
              },
              {
                label: 'St.Johns Vikings',
                routerLink: ['/league/teams/60'],
              },
            ],
          },
        ],
      },
      {
        label: 'Trades',
        routerLink: ['/league/trades'],
      },
      {
        label: 'Salaries & Ratings',
        routerLink: ['/league/salaries-ratings'],
      },
      {
        label: 'Waiver Priority',
        routerLink: ['/league/waivers'],
      },
      {
        label: 'Historic Stats',
        items: [
          {
            label: 'Teams',
            routerLink: ['/league/history/teams'],
          },
          {
            label: 'Players',
            routerLink: ['/league/history/players'],
          },
          {
            label: 'Goalies',
            routerLink: ['/league/history/goalies'],
          },
        ],
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
