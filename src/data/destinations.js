export const destinations = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    description:
      'Experience royal palaces, magnificent forts, colorful culture, desert landscapes and the timeless heritage of Rajasthan.',
    image:
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Amber Fort palace overlooking Jaipur in Rajasthan, India',
    highlights: ['Jaipur', 'Udaipur', 'Jaisalmer', 'Jodhpur'],
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    description:
      'Discover breathtaking mountains, serene lakes, lush valleys and unforgettable experiences in the paradise of Kashmir.',
    image:
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Snow-covered Himalayan peaks and valleys in Kashmir',
    highlights: ['Dal Lake', 'Gulmarg', 'Pahalgam', 'Sonamarg'],
  },
  {
    id: 'east-india',
    name: 'East India',
    description:
      'Explore the core states of East India — ancient history, mineral-rich forests, coastal temples and the Himalayas-to-delta expanse of West Bengal. (Northeast India is a separate destination.)',
    image:
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Landscapes of Eastern India',
    highlights: ['Bihar', 'Jharkhand', 'Odisha', 'West Bengal'],
    coreStates: [
      {
        name: 'Bihar',
        description:
          'Located on the Indo-Gangetic plain, known for rich ancient history.',
      },
      {
        name: 'Jharkhand',
        description:
          'A hilly, heavily forested state on the Chhota Nagpur Plateau rich in minerals.',
      },
      {
        name: 'Odisha',
        description:
          'Stretches along the Bay of Bengal and Eastern Ghats, known for its temples.',
      },
      {
        name: 'West Bengal',
        description:
          'Spans from the Himalayas down to the Bay of Bengal delta.',
      },
    ],
  },
  {
    id: 'south-india',
    name: 'South India',
    description:
      'Discover beautiful beaches, lush hill stations, temples, backwaters, wildlife and the rich traditions of South India.',
    image:
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Traditional houseboat on Kerala backwaters in South India',
    highlights: ['Kerala', 'Karnataka', 'Tamil Nadu', 'Goa'],
  },
  {
    id: 'north-india',
    name: 'North India',
    description:
      'Journey through sacred cities, Himalayan foothills, heritage monuments and vibrant cultural experiences across North India.',
    image:
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Taj Mahal at sunrise in Agra, North India',
    highlights: ['Delhi', 'Agra', 'Varanasi', 'Himachal'],
  },
  {
    id: 'west-india',
    name: 'West India',
    description:
      'Unwind on golden beaches, explore Portuguese heritage, enjoy coastal cuisine and create relaxed memories by the Arabian Sea.',
    image:
      'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Palm-lined beach coastline along the west coast of India',
    highlights: ['Maharashtra', 'Gujarat', 'Goa'],
  },
  {
    id: 'northeast',
    name: 'Northeast India',
    description:
      'Experience living root bridges, tribal cultures, rolling tea gardens and untouched landscapes across India’s Northeast.',
    image:
      'https://images.unsplash.com/photo-1742494267580-e026d3737f65?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Living root bridge spanning a stream in Meghalaya, Northeast India',
    highlights: ['Meghalaya', 'Sikkim', 'Arunachal', 'Assam', 'Nagaland', 'Mizoram', 'Tripura'],
    states: [
      {
        name: 'Mizoram',
        places: [
          'Aizawl',
          'Reiek',
          'Hmuifang',
          'Champhai',
          'Thenzawl',
          'Vantawng Falls',
          'Phawngpui National Park',
          'Serchhip',
        ],
      },
      {
        name: 'Tripura',
        places: [
          'Agartala',
          'Ujjayanta Palace',
          'Neermahal Palace',
          'Unakoti',
          'Sepahijala Wildlife Sanctuary',
          'Jampui Hills',
          'Pilak',
          'Tripura Sundari Temple',
        ],
      },
      {
        name: 'Sikkim',
        places: [
          'Gangtok',
          'Tsomgo Lake',
          'Nathula Pass',
          'North Sikkim',
          'Lachung',
          'Yumthang Valley',
          'Lachen',
          'Pelling',
          'Ravangla',
          'Namchi',
          'Zuluk',
          'Gurudongmar Lake',
        ],
      },
    ],
  },
  {
    id: 'central-india',
    name: 'Central India',
    description:
      'Explore ancient temples, wildlife sanctuaries, historic forts and the heartland culture of Central India.',
    image:
      'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Historic temple architecture in Central India',
    highlights: ['Khajuraho', 'Bandhavgarh', 'Orchha', 'Bhopal'],
  },
];
