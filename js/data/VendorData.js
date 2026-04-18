// Author： Xuquan Deng

var currentCustomerData=`
{
	"id":25163329,
	"address":{
		"country":"Ireland",
		"county":"Dublin",
		"city":"Dublin",
		"district":"Dublin 1",
		"detailAddress":"National College of Ireland, Mayor Street Lower",
		"postCode":"D01 K6W2",
		"latitude":53.34893,
		"longitude":-6.24298
	}
}
`;

var cuisineData=`
[
{
"id":1,
"text":"Chinese"
},
{
"id":2,
"text":"American"
},
{
"id":3,
"text":"Mexican"
},
{
"id":4,
"text":"Pho"
},
{
"id":5,
"text":"Japanese"
},
{
"id":6,
"text":"Burger"
},
{
"id":7,
"text":"Noodles"
},
{
"id":8,
"text":"Siu Mei"
},
{
"id":9,
"text":"Coffee"
},
{
"id":10,
"text":"Cantonese"
},
{
"id":11,
"text":"Bubble Tea"
},
{
"id":12,
"text":"Korean"
},
{
"id":13,
"text":"French"
},
{
"id":14,
"text":"British"
},
{
"id":15,
"text":"Indian"
}
]`;

var allVendorsData=`
[
  {
    "id": 1,
    "name": "Golden Dragon",
    "primaryCuisineId": 11,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 12.63,
    "ratedLevel": 4.0,
    "deliveryFee": 2.68,
    "picture": "chicken-dish-restaurant-table.webp",
    "cuisines": [
      1,
      3,
      5,
      9,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "46 Temple Bar, D02, Dublin City, Ireland",
      "postCode": "D02 CR5B",
      "latitude": 53.33719,
      "longitude": -6.23256
    }
  },
  {
    "id": 2,
    "name": "Pho King",
    "primaryCuisineId": 10,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 10.4,
    "ratedLevel": 4.5,
    "deliveryFee": 4.67,
    "picture": "dani-ZLqxSzvVr7I-unsplash.webp",
    "cuisines": [
      4,
      10,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "75 Grafton Street, D05, Dublin City, Ireland",
      "postCode": "D05 YO3W",
      "latitude": 53.35091,
      "longitude": -6.28316
    }
  },
  {
    "id": 3,
    "name": "Noodle House",
    "primaryCuisineId": 6,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 11.74,
    "ratedLevel": 3.5,
    "deliveryFee": 1.23,
    "picture": "demi-deherrera-L-sm1B4L1Ns-unsplash.webp",
    "cuisines": [
      6,
      8,
      9,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "67 Amiens Street, D08, Dublin City, Ireland",
      "postCode": "D08 MADX",
      "latitude": 53.2996,
      "longitude": -6.26007
    }
  },
  {
    "id": 4,
    "name": "The Liffey Lamb",
    "primaryCuisineId": 7,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 9.5,
    "ratedLevel": 2.5,
    "deliveryFee": 3.66,
    "picture": "emre-NZMeJsrMC8U-unsplash.webp",
    "cuisines": [
      6,
      7,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "132 Leeson Street, D06, Dublin City, Ireland",
      "postCode": "D06 KPCB",
      "latitude": 53.36896,
      "longitude": -6.27047
    }
  },
  {
    "id": 5,
    "name": "Dublin Bay Bistro",
    "primaryCuisineId": 13,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 9.29,
    "ratedLevel": 2.5,
    "deliveryFee": 4.78,
    "picture": "grilled-salmon-with-asparagus-white-plate-isolated-white-background.webp",
    "cuisines": [
      9,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "32 Amiens Street, D03, Dublin City, Ireland",
      "postCode": "D03 AK6S",
      "latitude": 53.38848,
      "longitude": -6.25845
    }
  },
  {
    "id": 6,
    "name": "The Emerald Onion",
    "primaryCuisineId": 13,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 14.37,
    "ratedLevel": 4.5,
    "deliveryFee": 2.93,
    "picture": "jason-w-kSlL887znkE-unsplash.webp",
    "cuisines": [
      9,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "59 Grafton Street, D03, Dublin City, Ireland",
      "postCode": "D03 RXJC",
      "latitude": 53.28227,
      "longitude": -6.24444
    }
  },
  {
    "id": 7,
    "name": "Clover & Co.",
    "primaryCuisineId": 7,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 7.55,
    "ratedLevel": 3.0,
    "deliveryFee": 1.23,
    "picture": "jayden-sim-pQmlo0juG50-unsplash.webp",
    "cuisines": [
      7,
      8
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "47 Grafton Street, D05, Dublin City, Ireland",
      "postCode": "D05 LMG0",
      "latitude": 53.35623,
      "longitude": -6.27518
    }
  },
  {
    "id": 8,
    "name": "The Spire Social",
    "primaryCuisineId": 7,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 11.14,
    "ratedLevel": 4.0,
    "deliveryFee": 3.63,
    "picture": "little-delicious-cake-with-cream-marmalade-top-inside-blue-plate-blue.webp",
    "cuisines": [
      2,
      7,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "138 Dame Street, D05, Dublin City, Ireland",
      "postCode": "D05 LO0O",
      "latitude": 53.36368,
      "longitude": -6.26085
    }
  },
  {
    "id": 9,
    "name": "Wicklow Way Kitchen",
    "primaryCuisineId": 5,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 8.42,
    "ratedLevel": 4.0,
    "deliveryFee": 3.59,
    "picture": "main-course-restaurant.webp",
    "cuisines": [
      3,
      5,
      7,
      10,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "130 O'Connell Street, D06, Dublin City, Ireland",
      "postCode": "D06 NMJ6",
      "latitude": 53.30316,
      "longitude": -6.26064
    }
  },
  {
    "id": 10,
    "name": "Molly Malone\u2019s Morsels",
    "primaryCuisineId": 11,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 14.52,
    "ratedLevel": 4.5,
    "deliveryFee": 2.72,
    "picture": "mike-kenneally-tNALoIZhqVM-unsplash.webp",
    "cuisines": [
      1,
      2,
      8,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "43 Henry Street, D06, Dublin City, Ireland",
      "postCode": "D06 HZLX",
      "latitude": 53.27986,
      "longitude": -6.25315
    }
  },
  {
    "id": 11,
    "name": "The Boxty House",
    "primaryCuisineId": 3,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 7.91,
    "ratedLevel": 2.5,
    "deliveryFee": 3.0,
    "picture": "mike-kenneally-zlwDJoKTuA8-unsplash.webp",
    "cuisines": [
      1,
      3,
      4,
      8
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "64 Dame Street, D03, Dublin City, Ireland",
      "postCode": "D03 3KMR",
      "latitude": 53.30736,
      "longitude": -6.22402
    }
  },
  {
    "id": 12,
    "name": "Guinness & Grain",
    "primaryCuisineId": 13,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 12.5,
    "ratedLevel": 4.0,
    "deliveryFee": 2.71,
    "picture": "mixed-vegetable-salad-with-colorful-food.webp",
    "cuisines": [
      2,
      13,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "75 Mary Street, D03, Dublin City, Ireland",
      "postCode": "D03 O8XO",
      "latitude": 53.33185,
      "longitude": -6.25519
    }
  },
  {
    "id": 13,
    "name": "The Brazen Baker",
    "primaryCuisineId": 1,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 11.21,
    "ratedLevel": 4.0,
    "deliveryFee": 4.33,
    "picture": "nathan-dumlao-6VhPY27jdps-unsplash.webp",
    "cuisines": [
      1,
      6,
      7
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "95 Merrion Square, D01, Dublin City, Ireland",
      "postCode": "D01 LMJG",
      "latitude": 53.2939,
      "longitude": -6.27293
    }
  },
  {
    "id": 14,
    "name": "Ha\u2019penny Harvest",
    "primaryCuisineId": 2,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 11.73,
    "ratedLevel": 4.5,
    "deliveryFee": 3.71,
    "picture": "nathan-dumlao-r-KfktlyBL0-unsplash.webp",
    "cuisines": [
      1,
      2,
      5
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "127 Trinity College, D05, Dublin City, Ireland",
      "postCode": "D05 PGAR",
      "latitude": 53.34977,
      "longitude": -6.219
    }
  },
  {
    "id": 15,
    "name": "St. Stephen\u2019s Steakhouse",
    "primaryCuisineId": 9,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 10.62,
    "ratedLevel": 3.5,
    "deliveryFee": 2.55,
    "picture": "pexels-293447046-15355056.webp",
    "cuisines": [
      2,
      7,
      9,
      10,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "138 Capel Street, D04, Dublin City, Ireland",
      "postCode": "D04 M6NG",
      "latitude": 53.35625,
      "longitude": -6.25357
    }
  },
  {
    "id": 16,
    "name": "The Celtic Crust",
    "primaryCuisineId": 1,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 11.29,
    "ratedLevel": 5.0,
    "deliveryFee": 1.01,
    "picture": "pexels-aditya-mara-425995080-17223835.webp",
    "cuisines": [
      1,
      5,
      11,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "82 Dorset Street, D03, Dublin City, Ireland",
      "postCode": "D03 0FT9",
      "latitude": 53.28634,
      "longitude": -6.25352
    }
  },
  {
    "id": 17,
    "name": "Dubliner\u2019s Delight",
    "primaryCuisineId": 3,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 14.9,
    "ratedLevel": 5.0,
    "deliveryFee": 4.12,
    "picture": "pexels-aditya-mara-425995080-17433352.webp",
    "cuisines": [
      3,
      5,
      7,
      8,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "125 Henry Street, D05, Dublin City, Ireland",
      "postCode": "D05 ML30",
      "latitude": 53.34872,
      "longitude": -6.23563
    }
  },
  {
    "id": 18,
    "name": "The Liberty Larder",
    "primaryCuisineId": 8,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 9.2,
    "ratedLevel": 4.0,
    "deliveryFee": 1.97,
    "picture": "pexels-alejandro-aznar-155337093-28525142.webp",
    "cuisines": [
      1,
      6,
      8,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "54 O'Connell Street, D05, Dublin City, Ireland",
      "postCode": "D05 S49N",
      "latitude": 53.31917,
      "longitude": -6.25302
    }
  },
  {
    "id": 19,
    "name": "Temple Bar Tapas",
    "primaryCuisineId": 9,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 11.44,
    "ratedLevel": 2.5,
    "deliveryFee": 2.28,
    "picture": "pexels-ali-dashti-506667798-17696679.webp",
    "cuisines": [
      6,
      9
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "83 Amiens Street, D03, Dublin City, Ireland",
      "postCode": "D03 GAT5",
      "latitude": 53.35014,
      "longitude": -6.23487
    }
  },
  {
    "id": 20,
    "name": "The GPO Grill",
    "primaryCuisineId": 5,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 13.73,
    "ratedLevel": 4.5,
    "deliveryFee": 2.48,
    "picture": "pexels-ar-kay-768552413-34270741.webp",
    "cuisines": [
      1,
      3,
      5,
      6,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "6 Merrion Square, D02, Dublin City, Ireland",
      "postCode": "D02 X0TZ",
      "latitude": 53.39183,
      "longitude": -6.27586
    }
  },
  {
    "id": 21,
    "name": "Phoenix Park Pantry",
    "primaryCuisineId": 3,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 7.07,
    "ratedLevel": 3.0,
    "deliveryFee": 2.33,
    "picture": "pexels-athul-santhosh-1483733062-35532834.webp",
    "cuisines": [
      2,
      3,
      12,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "53 St Stephen's Green, D06, Dublin City, Ireland",
      "postCode": "D06 TZ6H",
      "latitude": 53.36183,
      "longitude": -6.24747
    }
  },
  {
    "id": 22,
    "name": "River Liffey Roast",
    "primaryCuisineId": 13,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 9.36,
    "ratedLevel": 3.5,
    "deliveryFee": 4.85,
    "picture": "pexels-athul-santhosh-1483733062-35532841.webp",
    "cuisines": [
      1,
      2,
      4,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "124 Leeson Street, D08, Dublin City, Ireland",
      "postCode": "D08 YC9X",
      "latitude": 53.2971,
      "longitude": -6.21879
    }
  },
  {
    "id": 23,
    "name": "The Shelbourne Spoon",
    "primaryCuisineId": 14,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 13.41,
    "ratedLevel": 3.0,
    "deliveryFee": 4.36,
    "picture": "pexels-burakeroglu3-35479252.webp",
    "cuisines": [
      5,
      12,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "15 Henry Street, D02, Dublin City, Ireland",
      "postCode": "D02 PJE7",
      "latitude": 53.30136,
      "longitude": -6.2513
    }
  },
  {
    "id": 24,
    "name": "Castle Street Canteen",
    "primaryCuisineId": 7,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 14.03,
    "ratedLevel": 3.0,
    "deliveryFee": 2.84,
    "picture": "pexels-caio-niceas-2148806704-37017289.webp",
    "cuisines": [
      3,
      7
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "106 Mountjoy Square, D05, Dublin City, Ireland",
      "postCode": "D05 TF4K",
      "latitude": 53.31643,
      "longitude": -6.2755
    }
  },
  {
    "id": 25,
    "name": "The Velvet Vine",
    "primaryCuisineId": 12,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 12.77,
    "ratedLevel": 4.5,
    "deliveryFee": 2.32,
    "picture": "pexels-catscoming-1359328.webp",
    "cuisines": [
      9,
      11,
      12,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "132 Parnell Square, D08, Dublin City, Ireland",
      "postCode": "D08 K7R5",
      "latitude": 53.31531,
      "longitude": -6.24634
    }
  },
  {
    "id": 26,
    "name": "Kildare Street Kitchen",
    "primaryCuisineId": 2,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 12.6,
    "ratedLevel": 3.0,
    "deliveryFee": 4.68,
    "picture": "pexels-chaitaastic-2124699.webp",
    "cuisines": [
      2,
      11,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "52 North Wall, D02, Dublin City, Ireland",
      "postCode": "D02 FORB",
      "latitude": 53.3748,
      "longitude": -6.26606
    }
  },
  {
    "id": 27,
    "name": "The Rustic Reindeer",
    "primaryCuisineId": 1,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 9.95,
    "ratedLevel": 4.5,
    "deliveryFee": 2.32,
    "picture": "pexels-change-c-c-974768353-27039864.webp",
    "cuisines": [
      1,
      5,
      7
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "147 Abbey Street, D07, Dublin City, Ireland",
      "postCode": "D07 YDZO",
      "latitude": 53.37389,
      "longitude": -6.28071
    }
  },
  {
    "id": 28,
    "name": "Potluck Provisions",
    "primaryCuisineId": 13,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 8.18,
    "ratedLevel": 3.0,
    "deliveryFee": 4.19,
    "picture": "pexels-change-c-c-974768353-27039870.webp",
    "cuisines": [
      9,
      13,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "1 Amiens Street, D08, Dublin City, Ireland",
      "postCode": "D08 275D",
      "latitude": 53.31387,
      "longitude": -6.22692
    }
  },
  {
    "id": 29,
    "name": "Neon Noodle Bar",
    "primaryCuisineId": 12,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 8.88,
    "ratedLevel": 2.5,
    "deliveryFee": 4.73,
    "picture": "pexels-davegarcia-33626560.webp",
    "cuisines": [
      2,
      12,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "9 Henry Street, D02, Dublin City, Ireland",
      "postCode": "D02 4YDL",
      "latitude": 53.29133,
      "longitude": -6.25849
    }
  },
  {
    "id": 30,
    "name": "Sake on South William",
    "primaryCuisineId": 14,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 13.3,
    "ratedLevel": 3.0,
    "deliveryFee": 4.77,
    "picture": "pexels-ds-rexy-2154705051-36957557.webp",
    "cuisines": [
      3,
      5,
      7,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "72 Grafton Street, D05, Dublin City, Ireland",
      "postCode": "D05 S2CR",
      "latitude": 53.3209,
      "longitude": -6.24119
    }
  },
  {
    "id": 31,
    "name": "The Ginger Grove",
    "primaryCuisineId": 9,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 13.48,
    "ratedLevel": 5.0,
    "deliveryFee": 4.81,
    "picture": "pexels-firman-marek_brew-2148918143-36998847.webp",
    "cuisines": [
      7,
      9
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "63 St Stephen's Green, D05, Dublin City, Ireland",
      "postCode": "D05 1Y3H",
      "latitude": 53.36087,
      "longitude": -6.24411
    }
  },
  {
    "id": 32,
    "name": "Tokyo Terrace",
    "primaryCuisineId": 6,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 14.1,
    "ratedLevel": 5.0,
    "deliveryFee": 3.97,
    "picture": "pexels-gu-ko-2150570603-36964131.webp",
    "cuisines": [
      4,
      6,
      9,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "61 Mary Street, D02, Dublin City, Ireland",
      "postCode": "D02 NJPL",
      "latitude": 53.29691,
      "longitude": -6.21935
    }
  },
  {
    "id": 33,
    "name": "Silk Road Spices",
    "primaryCuisineId": 3,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 10.14,
    "ratedLevel": 3.0,
    "deliveryFee": 4.8,
    "picture": "pexels-gu-ko-2150570603-36964138.webp",
    "cuisines": [
      2,
      3,
      4,
      10,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "12 Dame Street, D06, Dublin City, Ireland",
      "postCode": "D06 MXEB",
      "latitude": 53.31671,
      "longitude": -6.23277
    }
  },
  {
    "id": 34,
    "name": "Zen Garden Zen",
    "primaryCuisineId": 9,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 14.79,
    "ratedLevel": 3.0,
    "deliveryFee": 2.47,
    "picture": "pexels-gu-ko-2150570603-36964158.webp",
    "cuisines": [
      1,
      2,
      4,
      9,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "120 Merrion Square, D06, Dublin City, Ireland",
      "postCode": "D06 DA68",
      "latitude": 53.31152,
      "longitude": -6.27337
    }
  },
  {
    "id": 35,
    "name": "Bamboo Bowl",
    "primaryCuisineId": 2,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 10.56,
    "ratedLevel": 2.5,
    "deliveryFee": 3.23,
    "picture": "pexels-gursher-gill-63702010-8148149.webp",
    "cuisines": [
      2,
      4
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "6 Parnell Square, D08, Dublin City, Ireland",
      "postCode": "D08 O8P4",
      "latitude": 53.31545,
      "longitude": -6.29267
    }
  },
  {
    "id": 36,
    "name": "The Wok Way",
    "primaryCuisineId": 11,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 9.45,
    "ratedLevel": 4.5,
    "deliveryFee": 4.52,
    "picture": "pexels-hussain-hussaini-715213188-32986967.webp",
    "cuisines": [
      11,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "119 Henry Street, D04, Dublin City, Ireland",
      "postCode": "D04 9H0G",
      "latitude": 53.28272,
      "longitude": -6.23881
    }
  },
  {
    "id": 37,
    "name": "Origami Eats",
    "primaryCuisineId": 10,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 12.92,
    "ratedLevel": 4.0,
    "deliveryFee": 3.06,
    "picture": "pexels-iamabdullahsheik-9738981.webp",
    "cuisines": [
      1,
      3,
      6,
      10
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "109 St Stephen's Green, D03, Dublin City, Ireland",
      "postCode": "D03 7X7T",
      "latitude": 53.39123,
      "longitude": -6.28688
    }
  },
  {
    "id": 38,
    "name": "Kimchi Kingdom",
    "primaryCuisineId": 7,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 10.13,
    "ratedLevel": 4.0,
    "deliveryFee": 3.99,
    "picture": "pexels-jack-baghel-2199968-20395293.webp",
    "cuisines": [
      5,
      7,
      8,
      10,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "145 Dame Street, D08, Dublin City, Ireland",
      "postCode": "D08 E1Z1",
      "latitude": 53.32372,
      "longitude": -6.25892
    }
  },
  {
    "id": 39,
    "name": "Lotus Leaf",
    "primaryCuisineId": 1,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 7.32,
    "ratedLevel": 4.0,
    "deliveryFee": 4.09,
    "picture": "pexels-jack-baghel-2199968-20395296.webp",
    "cuisines": [
      1,
      2,
      6,
      8
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "92 Capel Street, D05, Dublin City, Ireland",
      "postCode": "D05 HGFK",
      "latitude": 53.39617,
      "longitude": -6.21847
    }
  },
  {
    "id": 40,
    "name": "Red Dragon Diner",
    "primaryCuisineId": 3,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 12.34,
    "ratedLevel": 3.5,
    "deliveryFee": 4.76,
    "picture": "pexels-jack-baghel-2199968-20395298.webp",
    "cuisines": [
      3,
      5,
      6
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "141 O'Connell Street, D06, Dublin City, Ireland",
      "postCode": "D06 KPCZ",
      "latitude": 53.33163,
      "longitude": -6.23889
    }
  },
  {
    "id": 41,
    "name": "Thai Temple",
    "primaryCuisineId": 1,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 11.41,
    "ratedLevel": 5.0,
    "deliveryFee": 4.93,
    "picture": "pexels-jcabrera-5041495.webp",
    "cuisines": [
      1,
      4,
      6,
      7,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "136 Parnell Square, D04, Dublin City, Ireland",
      "postCode": "D04 DB7S",
      "latitude": 53.27953,
      "longitude": -6.23385
    }
  },
  {
    "id": 42,
    "name": "Miso Mid-City",
    "primaryCuisineId": 14,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 14.75,
    "ratedLevel": 3.0,
    "deliveryFee": 2.87,
    "picture": "pexels-jkreat0r-32986476.webp",
    "cuisines": [
      5,
      7,
      9,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "110 Dame Street, D04, Dublin City, Ireland",
      "postCode": "D04 GNDG",
      "latitude": 53.39281,
      "longitude": -6.24268
    }
  },
  {
    "id": 43,
    "name": "Curry Corner Dublin",
    "primaryCuisineId": 4,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 8.69,
    "ratedLevel": 4.0,
    "deliveryFee": 1.91,
    "picture": "pexels-jkreat0r-32986491.webp",
    "cuisines": [
      4,
      9
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "12 Temple Bar, D08, Dublin City, Ireland",
      "postCode": "D08 4CNO",
      "latitude": 53.2849,
      "longitude": -6.22206
    }
  },
  {
    "id": 44,
    "name": "Szechuan Spire",
    "primaryCuisineId": 7,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 14.69,
    "ratedLevel": 4.0,
    "deliveryFee": 2.53,
    "picture": "pexels-joao-socola-26036810-6763281.webp",
    "cuisines": [
      2,
      3,
      7,
      12,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "65 Abbey Street, D03, Dublin City, Ireland",
      "postCode": "D03 4J8T",
      "latitude": 53.35501,
      "longitude": -6.23644
    }
  },
  {
    "id": 45,
    "name": "Bao Bun Bar",
    "primaryCuisineId": 12,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 12.83,
    "ratedLevel": 5.0,
    "deliveryFee": 4.32,
    "picture": "pexels-kartik-kacha-1056371-2569760.webp",
    "cuisines": [
      2,
      3,
      5,
      11,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "110 Capel Street, D03, Dublin City, Ireland",
      "postCode": "D03 OO8Z",
      "latitude": 53.38838,
      "longitude": -6.27852
    }
  },
  {
    "id": 46,
    "name": "Dim Sum District",
    "primaryCuisineId": 13,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 13.24,
    "ratedLevel": 5.0,
    "deliveryFee": 4.08,
    "picture": "pexels-kawerodriguess-19264270.webp",
    "cuisines": [
      3,
      7,
      11,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "125 St Stephen's Green, D05, Dublin City, Ireland",
      "postCode": "D05 KJ1Z",
      "latitude": 53.38161,
      "longitude": -6.2248
    }
  },
  {
    "id": 47,
    "name": "The Golden Chopstick",
    "primaryCuisineId": 3,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 7.16,
    "ratedLevel": 3.0,
    "deliveryFee": 4.42,
    "picture": "pexels-kunal-lakhotia-781256899-28674525.webp",
    "cuisines": [
      3,
      4
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "103 Dame Street, D07, Dublin City, Ireland",
      "postCode": "D07 R18H",
      "latitude": 53.31164,
      "longitude": -6.24414
    }
  },
  {
    "id": 48,
    "name": "Monsoon Munchies",
    "primaryCuisineId": 4,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 13.06,
    "ratedLevel": 2.5,
    "deliveryFee": 1.32,
    "picture": "pexels-kunal-lakhotia-781256899-28674560.webp",
    "cuisines": [
      2,
      4,
      8,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "10 Temple Bar, D01, Dublin City, Ireland",
      "postCode": "D01 T19L",
      "latitude": 53.28603,
      "longitude": -6.26396
    }
  },
  {
    "id": 49,
    "name": "Little Italy Liffey",
    "primaryCuisineId": 2,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 9.08,
    "ratedLevel": 4.0,
    "deliveryFee": 4.97,
    "picture": "pexels-kunal-lakhotia-781256899-28674660.webp",
    "cuisines": [
      2,
      7,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "94 Henry Street, D05, Dublin City, Ireland",
      "postCode": "D05 6BHO",
      "latitude": 53.35328,
      "longitude": -6.2765
    }
  },
  {
    "id": 50,
    "name": "The Pasta Pilot",
    "primaryCuisineId": 1,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 9.61,
    "ratedLevel": 4.0,
    "deliveryFee": 4.1,
    "picture": "pexels-kunal-lakhotia-781256899-28674705.webp",
    "cuisines": [
      1,
      5,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "34 Trinity College, D04, Dublin City, Ireland",
      "postCode": "D04 Y2MC",
      "latitude": 53.39601,
      "longitude": -6.28646
    }
  },
  {
    "id": 51,
    "name": "Tuscan Terrace",
    "primaryCuisineId": 6,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 12.84,
    "ratedLevel": 5.0,
    "deliveryFee": 4.29,
    "picture": "pexels-kunal-lakhotia-781256899-28675074.webp",
    "cuisines": [
      4,
      6,
      9,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "86 North Wall, D04, Dublin City, Ireland",
      "postCode": "D04 6KAC",
      "latitude": 53.28392,
      "longitude": -6.22383
    }
  },
  {
    "id": 52,
    "name": "Olive & Oregano",
    "primaryCuisineId": 5,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 12.58,
    "ratedLevel": 5.0,
    "deliveryFee": 3.03,
    "picture": "pexels-mahesh-kumar-ganesan-2148232589-35514447.webp",
    "cuisines": [
      5,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "101 Trinity College, D03, Dublin City, Ireland",
      "postCode": "D03 W0W4",
      "latitude": 53.33594,
      "longitude": -6.21617
    }
  },
  {
    "id": 53,
    "name": "Napoli Northside",
    "primaryCuisineId": 12,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 8.23,
    "ratedLevel": 3.0,
    "deliveryFee": 2.51,
    "picture": "pexels-markus-winkler-1430818-32443613.webp",
    "cuisines": [
      2,
      4,
      9,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "99 Merrion Square, D08, Dublin City, Ireland",
      "postCode": "D08 RLWM",
      "latitude": 53.38346,
      "longitude": -6.22192
    }
  },
  {
    "id": 54,
    "name": "Roma\u2019s Retreat",
    "primaryCuisineId": 7,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 11.84,
    "ratedLevel": 2.5,
    "deliveryFee": 2.57,
    "picture": "pexels-marvin-sacdalan-276316567-13065199.webp",
    "cuisines": [
      4,
      6,
      7,
      11,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "104 Capel Street, D05, Dublin City, Ireland",
      "postCode": "D05 9373",
      "latitude": 53.3191,
      "longitude": -6.26512
    }
  },
  {
    "id": 55,
    "name": "The Garlic Grove",
    "primaryCuisineId": 13,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 10.82,
    "ratedLevel": 5.0,
    "deliveryFee": 3.65,
    "picture": "pexels-marvin-sacdalan-276316567-13065202.webp",
    "cuisines": [
      1,
      7,
      10,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "100 Dame Street, D06, Dublin City, Ireland",
      "postCode": "D06 D4BY",
      "latitude": 53.31119,
      "longitude": -6.25652
    }
  },
  {
    "id": 56,
    "name": "Pesto & Pine",
    "primaryCuisineId": 12,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 13.68,
    "ratedLevel": 5.0,
    "deliveryFee": 3.74,
    "picture": "pexels-miltonphotography-34217296.webp",
    "cuisines": [
      5,
      10,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "96 Baggot Street, D04, Dublin City, Ireland",
      "postCode": "D04 S7BK",
      "latitude": 53.35711,
      "longitude": -6.26506
    }
  },
  {
    "id": 57,
    "name": "Adriatic Artisan",
    "primaryCuisineId": 8,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 13.7,
    "ratedLevel": 4.5,
    "deliveryFee": 4.15,
    "picture": "pexels-miltonphotography-35066811.webp",
    "cuisines": [
      6,
      8,
      9,
      12,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "122 Marlborough Street, D03, Dublin City, Ireland",
      "postCode": "D03 00ZG",
      "latitude": 53.34855,
      "longitude": -6.23574
    }
  },
  {
    "id": 58,
    "name": "Mediterranean Mist",
    "primaryCuisineId": 8,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 7.55,
    "ratedLevel": 5.0,
    "deliveryFee": 2.17,
    "picture": "pexels-miltonphotography-35066816.webp",
    "cuisines": [
      8,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "114 Mary Street, D03, Dublin City, Ireland",
      "postCode": "D03 E6CM",
      "latitude": 53.28792,
      "longitude": -6.23858
    }
  },
  {
    "id": 59,
    "name": "The Greek Garrison",
    "primaryCuisineId": 13,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 10.43,
    "ratedLevel": 2.5,
    "deliveryFee": 4.17,
    "picture": "pexels-miltonphotography-35267270.webp",
    "cuisines": [
      7,
      9,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "31 Temple Bar, D05, Dublin City, Ireland",
      "postCode": "D05 SXFG",
      "latitude": 53.33956,
      "longitude": -6.25826
    }
  },
  {
    "id": 60,
    "name": "Pizza PlatePilot",
    "primaryCuisineId": 8,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 8.09,
    "ratedLevel": 4.5,
    "deliveryFee": 3.87,
    "picture": "pexels-miltonphotography-35267285.webp",
    "cuisines": [
      8,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "91 Dorset Street, D03, Dublin City, Ireland",
      "postCode": "D03 S2JR",
      "latitude": 53.28639,
      "longitude": -6.28659
    }
  },
  {
    "id": 61,
    "name": "Basil & Burrata",
    "primaryCuisineId": 8,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 7.39,
    "ratedLevel": 2.5,
    "deliveryFee": 4.58,
    "picture": "pexels-miltonphotography-35267287.webp",
    "cuisines": [
      1,
      8,
      10
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "17 Trinity College, D06, Dublin City, Ireland",
      "postCode": "D06 B39K",
      "latitude": 53.35974,
      "longitude": -6.23931
    }
  },
  {
    "id": 62,
    "name": "The Sicilian Slice",
    "primaryCuisineId": 3,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 9.42,
    "ratedLevel": 3.5,
    "deliveryFee": 3.85,
    "picture": "pexels-mohamed9380-36984981.webp",
    "cuisines": [
      3,
      6,
      7
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "68 Trinity College, D08, Dublin City, Ireland",
      "postCode": "D08 BP5K",
      "latitude": 53.28257,
      "longitude": -6.23256
    }
  },
  {
    "id": 63,
    "name": "Vine & Verona",
    "primaryCuisineId": 14,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 13.7,
    "ratedLevel": 3.5,
    "deliveryFee": 1.32,
    "picture": "pexels-mony-cruz-743773620-28951526.webp",
    "cuisines": [
      3,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "34 Baggot Street, D03, Dublin City, Ireland",
      "postCode": "D03 Z13S",
      "latitude": 53.30654,
      "longitude": -6.24517
    }
  },
  {
    "id": 64,
    "name": "Marcello\u2019s Morsels",
    "primaryCuisineId": 8,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 13.23,
    "ratedLevel": 5.0,
    "deliveryFee": 1.56,
    "picture": "pexels-nadin-sh-78971847-11596066.webp",
    "cuisines": [
      1,
      5,
      6,
      8
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "43 Abbey Street, D04, Dublin City, Ireland",
      "postCode": "D04 M9JM",
      "latitude": 53.32232,
      "longitude": -6.22996
    }
  },
  {
    "id": 65,
    "name": "Coastal Calzone",
    "primaryCuisineId": 10,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 12.18,
    "ratedLevel": 5.0,
    "deliveryFee": 4.54,
    "picture": "pexels-nadiye-samli-633420477-32191353.webp",
    "cuisines": [
      2,
      6,
      9,
      10,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "139 Dame Street, D04, Dublin City, Ireland",
      "postCode": "D04 FYZD",
      "latitude": 53.28343,
      "longitude": -6.26364
    }
  },
  {
    "id": 66,
    "name": "The Fig & Feta",
    "primaryCuisineId": 9,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 8.02,
    "ratedLevel": 4.5,
    "deliveryFee": 1.88,
    "picture": "pexels-nano-erdozain-120534369-29101361.webp",
    "cuisines": [
      6,
      9
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "63 Trinity College, D07, Dublin City, Ireland",
      "postCode": "D07 W446",
      "latitude": 53.36784,
      "longitude": -6.26283
    }
  },
  {
    "id": 67,
    "name": "Lemon & Laurel",
    "primaryCuisineId": 6,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 11.83,
    "ratedLevel": 4.5,
    "deliveryFee": 3.96,
    "picture": "pexels-nano-erdozain-120534369-29233922.webp",
    "cuisines": [
      6,
      9,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "113 North Wall, D06, Dublin City, Ireland",
      "postCode": "D06 5481",
      "latitude": 53.29071,
      "longitude": -6.26163
    }
  },
  {
    "id": 68,
    "name": "Adriatic Anchor",
    "primaryCuisineId": 6,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 7.86,
    "ratedLevel": 2.5,
    "deliveryFee": 3.77,
    "picture": "pexels-obenkural-18062057.webp",
    "cuisines": [
      6,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "5 Dame Street, D08, Dublin City, Ireland",
      "postCode": "D08 6ORT",
      "latitude": 53.3518,
      "longitude": -6.28215
    }
  },
  {
    "id": 69,
    "name": "The Heavy Hitter Burger",
    "primaryCuisineId": 8,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 7.28,
    "ratedLevel": 2.5,
    "deliveryFee": 1.84,
    "picture": "pexels-parvin-aktar-1151929052-26245461.webp",
    "cuisines": [
      2,
      8,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "38 Capel Street, D08, Dublin City, Ireland",
      "postCode": "D08 RW87",
      "latitude": 53.33386,
      "longitude": -6.28676
    }
  },
  {
    "id": 70,
    "name": "Smokestack South",
    "primaryCuisineId": 11,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 13.81,
    "ratedLevel": 3.0,
    "deliveryFee": 4.41,
    "picture": "pexels-prabal-9609840.webp",
    "cuisines": [
      6,
      7,
      9,
      11,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "86 Mary Street, D07, Dublin City, Ireland",
      "postCode": "D07 7CWR",
      "latitude": 53.39287,
      "longitude": -6.28089
    }
  },
  {
    "id": 71,
    "name": "The Bun Barn",
    "primaryCuisineId": 1,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 14.49,
    "ratedLevel": 2.5,
    "deliveryFee": 3.5,
    "picture": "pexels-prabal-9609861.webp",
    "cuisines": [
      1,
      6,
      10,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "2 Dame Street, D08, Dublin City, Ireland",
      "postCode": "D08 NO76",
      "latitude": 53.37652,
      "longitude": -6.2768
    }
  },
  {
    "id": 72,
    "name": "Patty Pilot",
    "primaryCuisineId": 10,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 9.67,
    "ratedLevel": 3.0,
    "deliveryFee": 2.71,
    "picture": "pexels-rakhmatsuwandi-36982088.webp",
    "cuisines": [
      3,
      5,
      10,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "64 Marlborough Street, D04, Dublin City, Ireland",
      "postCode": "D04 A0B1",
      "latitude": 53.34462,
      "longitude": -6.26566
    }
  },
  {
    "id": 73,
    "name": "Grill & Grain",
    "primaryCuisineId": 1,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 13.52,
    "ratedLevel": 2.5,
    "deliveryFee": 4.12,
    "picture": "pexels-shalini-shakthi-152664094-34159111.webp",
    "cuisines": [
      1,
      6,
      10,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "112 Amiens Street, D03, Dublin City, Ireland",
      "postCode": "D03 E3T8",
      "latitude": 53.3317,
      "longitude": -6.22207
    }
  },
  {
    "id": 74,
    "name": "The Sizzling Skillet",
    "primaryCuisineId": 12,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 11.6,
    "ratedLevel": 4.0,
    "deliveryFee": 3.37,
    "picture": "pexels-shootsaga-30748997.webp",
    "cuisines": [
      5,
      8,
      10,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "18 Henry Street, D06, Dublin City, Ireland",
      "postCode": "D06 TB7R",
      "latitude": 53.36033,
      "longitude": -6.27592
    }
  },
  {
    "id": 75,
    "name": "Bourbon & Brisket",
    "primaryCuisineId": 1,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 12.51,
    "ratedLevel": 3.0,
    "deliveryFee": 3.74,
    "picture": "pexels-shootsaga-30858402.webp",
    "cuisines": [
      1,
      4,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "138 Abbey Street, D08, Dublin City, Ireland",
      "postCode": "D08 9P8B",
      "latitude": 53.28343,
      "longitude": -6.29224
    }
  },
  {
    "id": 76,
    "name": "The Burger Bastion",
    "primaryCuisineId": 7,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 11.81,
    "ratedLevel": 4.0,
    "deliveryFee": 3.08,
    "picture": "pexels-shootsaga-33428723.webp",
    "cuisines": [
      2,
      3,
      5,
      7,
      9
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "66 Mountjoy Square, D04, Dublin City, Ireland",
      "postCode": "D04 3SDM",
      "latitude": 53.37753,
      "longitude": -6.22531
    }
  },
  {
    "id": 77,
    "name": "Fire & Fork",
    "primaryCuisineId": 5,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 7.79,
    "ratedLevel": 4.0,
    "deliveryFee": 2.44,
    "picture": "pexels-shootsaga-36701469.webp",
    "cuisines": [
      1,
      5,
      10,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "49 Henry Street, D06, Dublin City, Ireland",
      "postCode": "D06 2SLY",
      "latitude": 53.37144,
      "longitude": -6.22931
    }
  },
  {
    "id": 78,
    "name": "The Rusty Rig",
    "primaryCuisineId": 3,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 8.47,
    "ratedLevel": 3.5,
    "deliveryFee": 2.99,
    "picture": "pexels-shouravsheikh-11170284.webp",
    "cuisines": [
      2,
      3,
      9,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "132 Parnell Square, D02, Dublin City, Ireland",
      "postCode": "D02 1T29",
      "latitude": 53.31007,
      "longitude": -6.25844
    }
  },
  {
    "id": 79,
    "name": "Urban Umami",
    "primaryCuisineId": 13,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 14.07,
    "ratedLevel": 4.5,
    "deliveryFee": 2.14,
    "picture": "pexels-talha-kugu-2160759144-37006563.webp",
    "cuisines": [
      6,
      9,
      12,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "134 Capel Street, D02, Dublin City, Ireland",
      "postCode": "D02 P956",
      "latitude": 53.31316,
      "longitude": -6.23581
    }
  },
  {
    "id": 80,
    "name": "The Daily Grind Diner",
    "primaryCuisineId": 4,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 13.45,
    "ratedLevel": 4.5,
    "deliveryFee": 4.61,
    "picture": "pexels-thomas-nahar-15365650-6363501.webp",
    "cuisines": [
      4,
      5
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "106 North Wall, D08, Dublin City, Ireland",
      "postCode": "D08 M6T5",
      "latitude": 53.35647,
      "longitude": -6.29298
    }
  },
  {
    "id": 81,
    "name": "Midnight Munchies",
    "primaryCuisineId": 13,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 12.81,
    "ratedLevel": 3.5,
    "deliveryFee": 1.95,
    "picture": "pexels-thrissurkaranphotography-12865862.webp",
    "cuisines": [
      3,
      7,
      11,
      13,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "112 Leeson Street, D08, Dublin City, Ireland",
      "postCode": "D08 X49H",
      "latitude": 53.33728,
      "longitude": -6.23189
    }
  },
  {
    "id": 82,
    "name": "The Fryer\u2019s Fortress",
    "primaryCuisineId": 14,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 14.04,
    "ratedLevel": 5.0,
    "deliveryFee": 4.79,
    "picture": "pexels-urianrivera-33490824.webp",
    "cuisines": [
      1,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "5 Grafton Street, D07, Dublin City, Ireland",
      "postCode": "D07 RE94",
      "latitude": 53.32951,
      "longitude": -6.2756
    }
  },
  {
    "id": 83,
    "name": "Wingman West",
    "primaryCuisineId": 4,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 13.28,
    "ratedLevel": 3.0,
    "deliveryFee": 3.3,
    "picture": "pexels-valeriya-29380186.webp",
    "cuisines": [
      4,
      10
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "16 Amiens Street, D03, Dublin City, Ireland",
      "postCode": "D03 5C26",
      "latitude": 53.34435,
      "longitude": -6.25857
    }
  },
  {
    "id": 84,
    "name": "The Perched Pigeon",
    "primaryCuisineId": 8,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 8.75,
    "ratedLevel": 4.5,
    "deliveryFee": 4.11,
    "picture": "pexels-valeriya-34759405.webp",
    "cuisines": [
      8,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "64 Dame Street, D03, Dublin City, Ireland",
      "postCode": "D03 XPBB",
      "latitude": 53.33309,
      "longitude": -6.23062
    }
  },
  {
    "id": 85,
    "name": "Brew & Batter",
    "primaryCuisineId": 9,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 7.97,
    "ratedLevel": 4.0,
    "deliveryFee": 4.29,
    "picture": "pexels-vikeph-20432787.webp",
    "cuisines": [
      2,
      6,
      9
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "117 Dame Street, D03, Dublin City, Ireland",
      "postCode": "D03 THYZ",
      "latitude": 53.32235,
      "longitude": -6.27998
    }
  },
  {
    "id": 86,
    "name": "The Healthy Habit",
    "primaryCuisineId": 14,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 10.38,
    "ratedLevel": 3.5,
    "deliveryFee": 2.03,
    "picture": "pexels-vivaan-rupani-7351635.webp",
    "cuisines": [
      9,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "101 Leeson Street, D08, Dublin City, Ireland",
      "postCode": "D08 Z8LP",
      "latitude": 53.3667,
      "longitude": -6.21552
    }
  },
  {
    "id": 87,
    "name": "Morning Mist Muffins",
    "primaryCuisineId": 7,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 8.17,
    "ratedLevel": 4.5,
    "deliveryFee": 3.62,
    "picture": "pexels-willians-huerta-2157111846-34831926.webp",
    "cuisines": [
      7,
      8
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "99 Amiens Street, D04, Dublin City, Ireland",
      "postCode": "D04 M80K",
      "latitude": 53.32979,
      "longitude": -6.21844
    }
  },
  {
    "id": 88,
    "name": "The Daily Dough",
    "primaryCuisineId": 6,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 8.21,
    "ratedLevel": 3.5,
    "deliveryFee": 3.83,
    "picture": "pexels-willians-huerta-2157111846-34875011.webp",
    "cuisines": [
      3,
      6,
      7,
      10
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "58 O'Connell Street, D05, Dublin City, Ireland",
      "postCode": "D05 46ZR",
      "latitude": 53.33677,
      "longitude": -6.21506
    }
  },
  {
    "id": 89,
    "name": "Sourdough Street",
    "primaryCuisineId": 6,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 13.91,
    "ratedLevel": 4.0,
    "deliveryFee": 2.71,
    "picture": "pexels-yankrukov-8818657.webp",
    "cuisines": [
      4,
      6,
      9,
      12,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "126 Dame Street, D08, Dublin City, Ireland",
      "postCode": "D08 DXTJ",
      "latitude": 53.38931,
      "longitude": -6.26672
    }
  },
  {
    "id": 90,
    "name": "Leafy Larder",
    "primaryCuisineId": 14,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 12.75,
    "ratedLevel": 3.0,
    "deliveryFee": 3.01,
    "picture": "pexels-zhor-abdellkader-2157344860-36939711.webp",
    "cuisines": [
      1,
      5,
      11,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "139 Dorset Street, D04, Dublin City, Ireland",
      "postCode": "D04 E2JS",
      "latitude": 53.29307,
      "longitude": -6.2511
    }
  },
  {
    "id": 91,
    "name": "The Coffee Cloud",
    "primaryCuisineId": 11,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 9.68,
    "ratedLevel": 3.5,
    "deliveryFee": 4.25,
    "picture": "stir-fried-macaroni-with-tomato-chili-pepper-seeds-basil-white-dish.webp",
    "cuisines": [
      2,
      6,
      10,
      11,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "95 Camden Street, D02, Dublin City, Ireland",
      "postCode": "D02 J4YR",
      "latitude": 53.37486,
      "longitude": -6.28338
    }
  },
  {
    "id": 92,
    "name": "Bean & Barley",
    "primaryCuisineId": 2,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 8.17,
    "ratedLevel": 2.5,
    "deliveryFee": 1.3,
    "picture": "stir-fried-spaghetti-beautifully-arranged-white-plate.webp",
    "cuisines": [
      2,
      4,
      8
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "136 O'Connell Street, D05, Dublin City, Ireland",
      "postCode": "D05 YH5H",
      "latitude": 53.38345,
      "longitude": -6.27739
    }
  },
  {
    "id": 93,
    "name": "The Pastry Post",
    "primaryCuisineId": 1,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 7.93,
    "ratedLevel": 5.0,
    "deliveryFee": 4.47,
    "picture": "top-view-delicious-vegetable-salad-inside-plate-grey-background.webp",
    "cuisines": [
      1,
      4
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "137 Temple Bar, D05, Dublin City, Ireland",
      "postCode": "D05 GEZ3",
      "latitude": 53.31425,
      "longitude": -6.25339
    }
  },
  {
    "id": 94,
    "name": "Kale & Quinoa",
    "primaryCuisineId": 3,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 9.1,
    "ratedLevel": 3.0,
    "deliveryFee": 3.49,
    "picture": "top-view-fried-chicken-with-cucumber-cherry-tomatoes.webp",
    "cuisines": [
      3,
      7,
      8,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "60 Mary Street, D06, Dublin City, Ireland",
      "postCode": "D06 6Z5D",
      "latitude": 53.30965,
      "longitude": -6.25303
    }
  },
  {
    "id": 95,
    "name": "The Whipped Whisk",
    "primaryCuisineId": 9,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 8.62,
    "ratedLevel": 3.0,
    "deliveryFee": 1.2,
    "picture": "top-view-half-cut-spring-rolls-with-shrimp-lettuce-served-with-avocado.webp",
    "cuisines": [
      4,
      5,
      9
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "75 Merrion Square, D07, Dublin City, Ireland",
      "postCode": "D07 YYH0",
      "latitude": 53.31781,
      "longitude": -6.25417
    }
  }
]
`;