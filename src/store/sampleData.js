export default [
  {
    id: 1,
    name: 'America',
    parent: { id: null },
    children: [
      {
        id: 11,
        name: 'United States of America',
        parent: { id: 1 },
        children: [
          {
            id: 111,
            name: 'California',
            parent: { id: 11 },
            children: [
              {
                id: 1111,
                name: 'Los Angeles',
                parent: { id: 111 },
                children: []
              },
              {
                id: 1112,
                name: 'San Francisco',
                parent: { id: 111 },
                children: []
              }
            ]
          },
          {
            id: 112,
            name: 'Texas',
            parent: { id: 11 },
            children: [
              {
                id: 1121,
                name: 'Houston',
                parent: { id: 112 },
                children: []
              },
              {
                id: 1122,
                name: 'Dallas',
                parent: { id: 112 },
                children: []
              }
            ]
          },
          {
            id: 113,
            name: 'Florida',
            parent: { id: 11 },
            children: [
              {
                id: 1131,
                name: 'Miami',
                parent: { id: 113 },
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 12,
        name: 'Canada',
        parent: { id: 1 },
        children: [
          {
            id: 121,
            name: 'Montreal',
            parent: { id: 12 },
            children: []
          },
          {
            id: 122,
            name: 'Quebec',
            parent: { id: 12 },
            children: []
          },
          {
            id: 123,
            name: 'Toronto',
            parent: { id: 12 },
            children: []
          }
        ]
      },
      {
        id: 13,
        name: 'Mexico',
        parent: { id: 1 },
        children: [
          {
            id: 131,
            name: 'Mexico City',
            parent: { id: 13 },
            children: []
          },
          {
            id: 132,
            name: 'Guadalajara',
            parent: { id: 13 },
            children: []
          }
        ]
      },
      {
        id: 14,
        name: 'Brazil',
        parent: { id: 1 },
        children: [
          {
            id: 141,
            name: 'Rio de Janeiro',
            parent: { id: 14 },
            children: []
          },
          {
            id: 142,
            name: 'Belém',
            parent: { id: 14 },
            children: []
          },
          {
            id: 143,
            name: 'Brasilia',
            parent: { id: 14 },
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Europe',
    parent: { id: null },
    children: [
      {
        id: 21,
        name: 'France',
        parent: { id: 2 },
        children: [
          {
            id: 211,
            name: 'Paris',
            parent: { id: 21 },
            children: [
              {
                id: 2111,
                name: 'Champs Elysées',
                parent: { id: 211 },
                children: []
              },
              {
                id: 2112,
                name: 'Invalides',
                parent: { id: 211 },
                children: []
              }
            ]
          },
          {
            id: 212,
            name: 'Lyon',
            parent: { id: 21 },
            children: []
          },
          {
            id: 213,
            name: 'Marseille',
            parent: { id: 21 },
            children: []
          }
        ]
      },
      {
        id: 22,
        name: 'United Kingdom',
        parent: { id: 2 },
        children: [
          {
            id: 221,
            name: 'England',
            parent: { id: 22 },
            children: [
              {
                id: 2211,
                name: 'London',
                parent: { id: 221 },
                children: []
              },
              {
                id: 2212,
                name: 'Oxford',
                parent: { id: 221 },
                children: []
              }
            ]
          },
          {
            id: 222,
            name: 'Scotland',
            parent: { id: 22 },
            children: [
              {
                id: 2221,
                name: 'Glasgow',
                parent: { id: 222 },
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 23,
        name: 'Germany',
        parent: { id: 2 },
        children: [
          {
            id: 231,
            name: 'Berlin',
            parent: { id: 23 },
            children: []
          },
          {
            id: 232,
            name: 'Köln',
            parent: { id: 23 },
            children: []
          },
          {
            id: 233,
            name: 'Frankfürt',
            parent: { id: 23 },
            children: []
          }
        ]
      },
      {
        id: 24,
        name: 'Spain',
        parent: { id: 2 },
        children: [
          {
            id: 241,
            name: 'Madrid',
            parent: { id: 24 },
            children: []
          },
          {
            id: 242,
            name: 'Sevilla',
            parent: { id: 24 },
            children: []
          },
          {
            id: 243,
            name: 'Barcelona',
            parent: { id: 24 },
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Asia',
    parent: { id: null },
    children: [
      {
        id: 31,
        name: 'Popular Republic of China',
        parent: { id: 3 },
        children: [
          {
            id: 311,
            name: 'Pekin',
            parent: { id: 31 },
            children: []
          },
          {
            id: 312,
            name: 'Shangaï',
            parent: { id: 31 },
            children: []
          },
          {
            id: 313,
            name: 'Hong Kong',
            parent: { id: 31 },
            children: []
          }
        ]
      },
      {
        id: 32,
        name: 'Japan',
        parent: { id: 3 },
        children: [
          {
            id: 321,
            name: 'Tokyo',
            parent: { id: 32 },
            children: []
          },
          {
            id: 322,
            name: 'Osaka',
            parent: { id: 32 },
            children: []
          }
        ]
      },
      {
        id: 33,
        name: 'India',
        parent: { id: 3 },
        children: [
          {
            id: 331,
            name: 'New Delhi',
            parent: { id: 33 },
            children: []
          },
          {
            id: 332,
            name: 'Bombay',
            parent: { id: 33 },
            children: []
          },
          {
            id: 333,
            name: 'Calcutta',
            parent: { id: 33 },
            children: []
          }
        ]
      },
      {
        id: 34,
        name: 'Thailand',
        parent: { id: 3 },
        children: [
          {
            id: 341,
            name: 'Bangkok',
            parent: { id: 34 },
            children: []
          },
          {
            id: 342,
            name: 'Phuket',
            parent: { id: 34 },
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Africa',
    parent: { id: null },
    children: [
      {
        id: 41,
        name: 'Morroco',
        parent: { id: 4 },
        children: [
          {
            id: 411,
            name: 'Casablanca',
            parent: { id: 41 },
            children: []
          },
          {
            id: 412,
            name: 'Marrakech',
            parent: { id: 41 },
            children: []
          }
        ]
      },
      {
        id: 42,
        name: 'Ivory Coast',
        parent: { id: 4 },
        children: [
          {
            id: 421,
            name: 'Abidjan',
            parent: { id: 42 },
            children: []
          }
        ]
      },
      {
        id: 43,
        name: 'South Africa',
        parent: { id: 4 },
        children: [
          {
            id: 431,
            name: 'Johannesburg',
            parent: { id: 43 },
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'Oceania',
    parent: { id: null },
    children: [
      {
        id: 51,
        name: 'Australia',
        parent: { id: 5 },
        children: [
          {
            id: 511,
            name: 'Sidney',
            parent: { id: 51 },
            children: []
          },
          {
            id: 512,
            name: 'Adelaïde',
            parent: { id: 51 },
            children: []
          }
        ]
      },
      {
        id: 52,
        name: 'New Zealand',
        parent: { id: 5 },
        children: [
          {
            id: 521,
            name: 'Auckland',
            parent: { id: 52 },
            children: []
          },
          {
            id: 522,
            name: 'Wellington',
            parent: { id: 52 },
            children: []
          }
        ]
      }
    ]
  }
]
