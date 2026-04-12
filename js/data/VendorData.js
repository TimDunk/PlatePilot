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
    "primaryCuisineId": 9,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 13.91,
    "ratedLevel": 2.5,
    "deliveryFee": 1.06,
    "picture": "chicken-dish-restaurant-table.jpg",
    "cuisines": [
      1,
      5,
      9,
      11,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "24 St Stephen's Green, D03, Dublin City, Ireland",
      "postCode": "D03 N8NZ",
      "latitude": 53.33076,
      "longitude": -6.25863
    }
  },
  {
    "id": 2,
    "name": "Pho King",
    "primaryCuisineId": 12,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 12.98,
    "ratedLevel": 5.0,
    "deliveryFee": 4.58,
    "picture": "cs2ym-listing.webp",
    "cuisines": [
      6,
      8,
      12,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "2 Merrion Square, D02, Dublin City, Ireland",
      "postCode": "D02 3SJ0",
      "latitude": 53.29963,
      "longitude": -6.27812
    }
  },
  {
    "id": 3,
    "name": "Noodle House",
    "primaryCuisineId": 9,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 9.5,
    "ratedLevel": 4.0,
    "deliveryFee": 3.04,
    "picture": "dani-ZLqxSzvVr7I-unsplash.jpg",
    "cuisines": [
      4,
      9,
      11,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "112 Merrion Square, D02, Dublin City, Ireland",
      "postCode": "D02 YT6P",
      "latitude": 53.34083,
      "longitude": -6.24391
    }
  },
  {
    "id": 4,
    "name": "The Liffey Lamb",
    "primaryCuisineId": 7,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 12.48,
    "ratedLevel": 5.0,
    "deliveryFee": 3.66,
    "picture": "demi-deherrera-L-sm1B4L1Ns-unsplash.jpg",
    "cuisines": [
      3,
      7,
      10,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "5 Leeson Street, D07, Dublin City, Ireland",
      "postCode": "D07 OTLS",
      "latitude": 53.2907,
      "longitude": -6.28108
    }
  },
  {
    "id": 5,
    "name": "Dublin Bay Bistro",
    "primaryCuisineId": 11,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 13.06,
    "ratedLevel": 5.0,
    "deliveryFee": 2.77,
    "picture": "emre-NZMeJsrMC8U-unsplash.jpg",
    "cuisines": [
      1,
      4,
      5,
      11,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "35 Merrion Square, D06, Dublin City, Ireland",
      "postCode": "D06 70MO",
      "latitude": 53.3909,
      "longitude": -6.26741
    }
  },
  {
    "id": 6,
    "name": "The Emerald Onion",
    "primaryCuisineId": 9,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 10.81,
    "ratedLevel": 3.5,
    "deliveryFee": 4.1,
    "picture": "grilled-salmon-with-asparagus-white-plate-isolated-white-background.jpg",
    "cuisines": [
      3,
      4,
      8,
      9,
      10
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "41 Camden Street, D04, Dublin City, Ireland",
      "postCode": "D04 C2BN",
      "latitude": 53.31252,
      "longitude": -6.27737
    }
  },
  {
    "id": 7,
    "name": "Clover & Co.",
    "primaryCuisineId": 6,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 13.32,
    "ratedLevel": 3.5,
    "deliveryFee": 4.98,
    "picture": "jason-w-kSlL887znkE-unsplash.jpg",
    "cuisines": [
      3,
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
      "detailAddress": "43 St Stephen's Green, D02, Dublin City, Ireland",
      "postCode": "D02 J78R",
      "latitude": 53.3404,
      "longitude": -6.22938
    }
  },
  {
    "id": 8,
    "name": "The Spire Social",
    "primaryCuisineId": 9,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 10.55,
    "ratedLevel": 3.0,
    "deliveryFee": 4.1,
    "picture": "jayden-sim-pQmlo0juG50-unsplash.jpg",
    "cuisines": [
      6,
      9,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "126 Abbey Street, D01, Dublin City, Ireland",
      "postCode": "D01 D4RZ",
      "latitude": 53.37888,
      "longitude": -6.25458
    }
  },
  {
    "id": 9,
    "name": "Wicklow Way Kitchen",
    "primaryCuisineId": 9,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 8.93,
    "ratedLevel": 3.5,
    "deliveryFee": 1.93,
    "picture": "little-delicious-cake-with-cream-marmalade-top-inside-blue-plate-blue.jpg",
    "cuisines": [
      8,
      9,
      11,
      12,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "39 Abbey Street, D06, Dublin City, Ireland",
      "postCode": "D06 7PMF",
      "latitude": 53.32587,
      "longitude": -6.2428
    }
  },
  {
    "id": 10,
    "name": "Molly Malone\u2019s Morsels",
    "primaryCuisineId": 12,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 13.71,
    "ratedLevel": 3.5,
    "deliveryFee": 4.25,
    "picture": "main-course-restaurant.jpg",
    "cuisines": [
      2,
      10,
      12,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "80 Abbey Street, D01, Dublin City, Ireland",
      "postCode": "D01 W6WH",
      "latitude": 53.38907,
      "longitude": -6.22554
    }
  },
  {
    "id": 11,
    "name": "The Boxty House",
    "primaryCuisineId": 11,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 10.08,
    "ratedLevel": 3.0,
    "deliveryFee": 3.9,
    "picture": "mike-kenneally-tNALoIZhqVM-unsplash.jpg",
    "cuisines": [
      2,
      10,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "50 Parnell Square, D08, Dublin City, Ireland",
      "postCode": "D08 KO91",
      "latitude": 53.28259,
      "longitude": -6.22271
    }
  },
  {
    "id": 12,
    "name": "Guinness & Grain",
    "primaryCuisineId": 10,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 7.65,
    "ratedLevel": 4.0,
    "deliveryFee": 3.27,
    "picture": "mike-kenneally-zlwDJoKTuA8-unsplash.jpg",
    "cuisines": [
      9,
      10
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "91 Capel Street, D08, Dublin City, Ireland",
      "postCode": "D08 SDZR",
      "latitude": 53.38027,
      "longitude": -6.29228
    }
  },
  {
    "id": 13,
    "name": "The Brazen Baker",
    "primaryCuisineId": 2,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 12.74,
    "ratedLevel": 3.5,
    "deliveryFee": 2.6,
    "picture": "mixed-vegetable-salad-with-colorful-food.jpg",
    "cuisines": [
      1,
      2,
      8,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "121 Mountjoy Square, D08, Dublin City, Ireland",
      "postCode": "D08 HGP3",
      "latitude": 53.33933,
      "longitude": -6.27531
    }
  },
  {
    "id": 14,
    "name": "Ha\u2019penny Harvest",
    "primaryCuisineId": 14,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 13.97,
    "ratedLevel": 4.5,
    "deliveryFee": 3.07,
    "picture": "nathan-dumlao-6VhPY27jdps-unsplash.jpg",
    "cuisines": [
      1,
      4,
      6,
      12,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "68 Abbey Street, D07, Dublin City, Ireland",
      "postCode": "D07 LWDF",
      "latitude": 53.30787,
      "longitude": -6.2794
    }
  },
  {
    "id": 15,
    "name": "St. Stephen\u2019s Steakhouse",
    "primaryCuisineId": 1,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 7.44,
    "ratedLevel": 4.5,
    "deliveryFee": 4.9,
    "picture": "nathan-dumlao-r-KfktlyBL0-unsplash.jpg",
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
      "district": "D08",
      "detailAddress": "67 Abbey Street, D08, Dublin City, Ireland",
      "postCode": "D08 OAYB",
      "latitude": 53.36075,
      "longitude": -6.27279
    }
  },
  {
    "id": 16,
    "name": "The Celtic Crust",
    "primaryCuisineId": 14,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 11.9,
    "ratedLevel": 3.5,
    "deliveryFee": 3.83,
    "picture": "pexels-293447046-15355056.jpg",
    "cuisines": [
      8,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "35 Temple Bar, D07, Dublin City, Ireland",
      "postCode": "D07 AHY6",
      "latitude": 53.29421,
      "longitude": -6.24859
    }
  },
  {
    "id": 17,
    "name": "Dubliner\u2019s Delight",
    "primaryCuisineId": 4,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 14.43,
    "ratedLevel": 3.0,
    "deliveryFee": 1.09,
    "picture": "pexels-aditya-mara-425995080-17223835.jpg",
    "cuisines": [
      4,
      5,
      8,
      12,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "61 Amiens Street, D02, Dublin City, Ireland",
      "postCode": "D02 WOOA",
      "latitude": 53.35738,
      "longitude": -6.28417
    }
  },
  {
    "id": 18,
    "name": "The Liberty Larder",
    "primaryCuisineId": 13,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 9.92,
    "ratedLevel": 2.5,
    "deliveryFee": 3.96,
    "picture": "pexels-aditya-mara-425995080-17433352 (1).jpg",
    "cuisines": [
      3,
      10,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "127 Trinity College, D03, Dublin City, Ireland",
      "postCode": "D03 27BF",
      "latitude": 53.34543,
      "longitude": -6.26334
    }
  },
  {
    "id": 19,
    "name": "Temple Bar Tapas",
    "primaryCuisineId": 10,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 9.0,
    "ratedLevel": 5.0,
    "deliveryFee": 4.9,
    "picture": "pexels-aditya-mara-425995080-17433352.jpg",
    "cuisines": [
      3,
      4,
      7,
      9,
      10
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "83 Parnell Square, D06, Dublin City, Ireland",
      "postCode": "D06 0P63",
      "latitude": 53.28911,
      "longitude": -6.25455
    }
  },
  {
    "id": 20,
    "name": "The GPO Grill",
    "primaryCuisineId": 6,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 9.41,
    "ratedLevel": 5.0,
    "deliveryFee": 3.91,
    "picture": "pexels-alejandro-aznar-155337093-28525142.jpg",
    "cuisines": [
      3,
      6,
      10
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "115 Temple Bar, D01, Dublin City, Ireland",
      "postCode": "D01 SSTO",
      "latitude": 53.37453,
      "longitude": -6.2463
    }
  },
  {
    "id": 21,
    "name": "Phoenix Park Pantry",
    "primaryCuisineId": 10,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 8.3,
    "ratedLevel": 4.0,
    "deliveryFee": 1.86,
    "picture": "pexels-ali-dashti-506667798-17696679.jpg",
    "cuisines": [
      9,
      10
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "59 Trinity College, D04, Dublin City, Ireland",
      "postCode": "D04 TMRX",
      "latitude": 53.37866,
      "longitude": -6.21311
    }
  },
  {
    "id": 22,
    "name": "River Liffey Roast",
    "primaryCuisineId": 7,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 7.47,
    "ratedLevel": 4.5,
    "deliveryFee": 4.12,
    "picture": "pexels-ar-kay-768552413-34270741.jpg",
    "cuisines": [
      7,
      8
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "30 Temple Bar, D01, Dublin City, Ireland",
      "postCode": "D01 XJX5",
      "latitude": 53.35941,
      "longitude": -6.22733
    }
  },
  {
    "id": 23,
    "name": "The Shelbourne Spoon",
    "primaryCuisineId": 14,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 12.13,
    "ratedLevel": 4.5,
    "deliveryFee": 2.33,
    "picture": "pexels-athul-santhosh-1483733062-35532834.jpg",
    "cuisines": [
      13,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "29 Amiens Street, D06, Dublin City, Ireland",
      "postCode": "D06 6GTL",
      "latitude": 53.36896,
      "longitude": -6.27086
    }
  },
  {
    "id": 24,
    "name": "Castle Street Canteen",
    "primaryCuisineId": 14,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 8.16,
    "ratedLevel": 5.0,
    "deliveryFee": 4.64,
    "picture": "pexels-athul-santhosh-1483733062-35532841.jpg",
    "cuisines": [
      6,
      10,
      11,
      12,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "47 Temple Bar, D07, Dublin City, Ireland",
      "postCode": "D07 TMS9",
      "latitude": 53.31792,
      "longitude": -6.28022
    }
  },
  {
    "id": 25,
    "name": "The Velvet Vine",
    "primaryCuisineId": 7,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 13.13,
    "ratedLevel": 3.5,
    "deliveryFee": 4.58,
    "picture": "pexels-burakeroglu3-35479252.jpg",
    "cuisines": [
      7,
      8
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "87 Capel Street, D04, Dublin City, Ireland",
      "postCode": "D04 YH05",
      "latitude": 53.36951,
      "longitude": -6.24186
    }
  },
  {
    "id": 26,
    "name": "Kildare Street Kitchen",
    "primaryCuisineId": 5,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 13.04,
    "ratedLevel": 2.5,
    "deliveryFee": 1.09,
    "picture": "pexels-caio-niceas-2148806704-37017289.jpg",
    "cuisines": [
      3,
      4,
      5,
      12,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "34 Abbey Street, D01, Dublin City, Ireland",
      "postCode": "D01 4JTT",
      "latitude": 53.29359,
      "longitude": -6.21353
    }
  },
  {
    "id": 27,
    "name": "The Rustic Reindeer",
    "primaryCuisineId": 13,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 10.75,
    "ratedLevel": 5.0,
    "deliveryFee": 2.79,
    "picture": "pexels-chaitaastic-2124699.jpg",
    "cuisines": [
      2,
      7,
      12,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "84 Dame Street, D02, Dublin City, Ireland",
      "postCode": "D02 E2JY",
      "latitude": 53.35653,
      "longitude": -6.21685
    }
  },
  {
    "id": 28,
    "name": "Potluck Provisions",
    "primaryCuisineId": 14,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 14.0,
    "ratedLevel": 3.5,
    "deliveryFee": 1.07,
    "picture": "pexels-change-c-c-974768353-27039864.jpg",
    "cuisines": [
      8,
      13,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "2 Amiens Street, D04, Dublin City, Ireland",
      "postCode": "D04 2WCK",
      "latitude": 53.28347,
      "longitude": -6.22291
    }
  },
  {
    "id": 29,
    "name": "Neon Noodle Bar",
    "primaryCuisineId": 12,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 9.81,
    "ratedLevel": 3.0,
    "deliveryFee": 3.98,
    "picture": "pexels-change-c-c-974768353-27039870.jpg",
    "cuisines": [
      5,
      7,
      10,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "95 Dame Street, D02, Dublin City, Ireland",
      "postCode": "D02 9P31",
      "latitude": 53.3435,
      "longitude": -6.22505
    }
  },
  {
    "id": 30,
    "name": "Sake on South William",
    "primaryCuisineId": 10,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 10.12,
    "ratedLevel": 3.5,
    "deliveryFee": 1.27,
    "picture": "pexels-davegarcia-33626560.jpg",
    "cuisines": [
      1,
      4,
      6,
      10,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "133 North Wall, D06, Dublin City, Ireland",
      "postCode": "D06 4G3Z",
      "latitude": 53.34525,
      "longitude": -6.28379
    }
  },
  {
    "id": 31,
    "name": "The Ginger Grove",
    "primaryCuisineId": 3,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 12.31,
    "ratedLevel": 4.0,
    "deliveryFee": 4.92,
    "picture": "pexels-ds-rexy-2154705051-36957557.jpg",
    "cuisines": [
      1,
      3,
      7,
      9,
      10
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "47 Dorset Street, D01, Dublin City, Ireland",
      "postCode": "D01 H396",
      "latitude": 53.3169,
      "longitude": -6.275
    }
  },
  {
    "id": 32,
    "name": "Tokyo Terrace",
    "primaryCuisineId": 8,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 12.01,
    "ratedLevel": 3.0,
    "deliveryFee": 1.0,
    "picture": "pexels-firman-marek_brew-2148918143-36998847.jpg",
    "cuisines": [
      8,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "118 Henry Street, D05, Dublin City, Ireland",
      "postCode": "D05 6X4S",
      "latitude": 53.34762,
      "longitude": -6.26182
    }
  },
  {
    "id": 33,
    "name": "Silk Road Spices",
    "primaryCuisineId": 6,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 7.61,
    "ratedLevel": 3.5,
    "deliveryFee": 3.2,
    "picture": "pexels-gu-ko-2150570603-36964131.jpg",
    "cuisines": [
      4,
      6,
      9,
      11,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "91 Temple Bar, D07, Dublin City, Ireland",
      "postCode": "D07 CM3C",
      "latitude": 53.36567,
      "longitude": -6.26786
    }
  },
  {
    "id": 34,
    "name": "Zen Garden Zen",
    "primaryCuisineId": 7,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 14.58,
    "ratedLevel": 5.0,
    "deliveryFee": 2.32,
    "picture": "pexels-gu-ko-2150570603-36964138.jpg",
    "cuisines": [
      1,
      4,
      6,
      7,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "100 Baggot Street, D01, Dublin City, Ireland",
      "postCode": "D01 H9DE",
      "latitude": 53.32403,
      "longitude": -6.27728
    }
  },
  {
    "id": 35,
    "name": "Bamboo Bowl",
    "primaryCuisineId": 1,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 7.9,
    "ratedLevel": 2.5,
    "deliveryFee": 3.35,
    "picture": "pexels-gu-ko-2150570603-36964158.jpg",
    "cuisines": [
      1,
      4,
      6,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "110 O'Connell Street, D04, Dublin City, Ireland",
      "postCode": "D04 FJ11",
      "latitude": 53.38881,
      "longitude": -6.27699
    }
  },
  {
    "id": 36,
    "name": "The Wok Way",
    "primaryCuisineId": 14,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 8.14,
    "ratedLevel": 3.5,
    "deliveryFee": 4.06,
    "picture": "pexels-gursher-gill-63702010-8148149.jpg",
    "cuisines": [
      8,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "13 Amiens Street, D01, Dublin City, Ireland",
      "postCode": "D01 9O0T",
      "latitude": 53.27954,
      "longitude": -6.24786
    }
  },
  {
    "id": 37,
    "name": "Origami Eats",
    "primaryCuisineId": 1,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 14.7,
    "ratedLevel": 4.5,
    "deliveryFee": 3.42,
    "picture": "pexels-hussain-hussaini-715213188-32986967.jpg",
    "cuisines": [
      1,
      12,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "24 Marlborough Street, D03, Dublin City, Ireland",
      "postCode": "D03 R5XZ",
      "latitude": 53.35798,
      "longitude": -6.2265
    }
  },
  {
    "id": 38,
    "name": "Kimchi Kingdom",
    "primaryCuisineId": 4,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 9.77,
    "ratedLevel": 4.5,
    "deliveryFee": 3.84,
    "picture": "pexels-iamabdullahsheik-9738981.jpg",
    "cuisines": [
      4,
      7
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "111 Mary Street, D01, Dublin City, Ireland",
      "postCode": "D01 EZZH",
      "latitude": 53.28198,
      "longitude": -6.27419
    }
  },
  {
    "id": 39,
    "name": "Lotus Leaf",
    "primaryCuisineId": 14,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 13.77,
    "ratedLevel": 2.5,
    "deliveryFee": 4.8,
    "picture": "pexels-jack-baghel-2199968-20395293.jpg",
    "cuisines": [
      1,
      7,
      13,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "67 Henry Street, D02, Dublin City, Ireland",
      "postCode": "D02 5KDG",
      "latitude": 53.37378,
      "longitude": -6.24401
    }
  },
  {
    "id": 40,
    "name": "Red Dragon Diner",
    "primaryCuisineId": 7,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 11.59,
    "ratedLevel": 3.5,
    "deliveryFee": 4.86,
    "picture": "pexels-jack-baghel-2199968-20395296.jpg",
    "cuisines": [
      3,
      7,
      9
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "109 Leeson Street, D04, Dublin City, Ireland",
      "postCode": "D04 9HGC",
      "latitude": 53.28992,
      "longitude": -6.28121
    }
  },
  {
    "id": 41,
    "name": "Thai Temple",
    "primaryCuisineId": 4,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 12.31,
    "ratedLevel": 4.5,
    "deliveryFee": 3.43,
    "picture": "pexels-jack-baghel-2199968-20395298.jpg",
    "cuisines": [
      4,
      6,
      10
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "49 Mary Street, D07, Dublin City, Ireland",
      "postCode": "D07 CDSG",
      "latitude": 53.38276,
      "longitude": -6.21777
    }
  },
  {
    "id": 42,
    "name": "Miso Mid-City",
    "primaryCuisineId": 14,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 12.67,
    "ratedLevel": 3.0,
    "deliveryFee": 1.6,
    "picture": "pexels-jcabrera-5041495.jpg",
    "cuisines": [
      3,
      7,
      10,
      11,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "138 Dorset Street, D08, Dublin City, Ireland",
      "postCode": "D08 EOF4",
      "latitude": 53.33224,
      "longitude": -6.26881
    }
  },
  {
    "id": 43,
    "name": "Curry Corner Dublin",
    "primaryCuisineId": 11,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 14.06,
    "ratedLevel": 4.0,
    "deliveryFee": 2.2,
    "picture": "pexels-jkreat0r-32986476.jpg",
    "cuisines": [
      4,
      9,
      10,
      11,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "27 Baggot Street, D03, Dublin City, Ireland",
      "postCode": "D03 B6MW",
      "latitude": 53.32022,
      "longitude": -6.25069
    }
  },
  {
    "id": 44,
    "name": "Szechuan Spire",
    "primaryCuisineId": 1,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 13.52,
    "ratedLevel": 4.0,
    "deliveryFee": 3.49,
    "picture": "pexels-jkreat0r-32986491.jpg",
    "cuisines": [
      1,
      3,
      11,
      12,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "82 Dame Street, D06, Dublin City, Ireland",
      "postCode": "D06 W54M",
      "latitude": 53.3982,
      "longitude": -6.23609
    }
  },
  {
    "id": 45,
    "name": "Bao Bun Bar",
    "primaryCuisineId": 12,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 7.07,
    "ratedLevel": 2.5,
    "deliveryFee": 4.46,
    "picture": "pexels-joao-socola-26036810-6763281.jpg",
    "cuisines": [
      7,
      8,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "27 Dame Street, D08, Dublin City, Ireland",
      "postCode": "D08 DHOY",
      "latitude": 53.39198,
      "longitude": -6.27868
    }
  },
  {
    "id": 46,
    "name": "Dim Sum District",
    "primaryCuisineId": 3,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 10.19,
    "ratedLevel": 4.5,
    "deliveryFee": 1.5,
    "picture": "pexels-kartik-kacha-1056371-2569760.jpg",
    "cuisines": [
      3,
      6,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "63 Merrion Square, D06, Dublin City, Ireland",
      "postCode": "D06 6K30",
      "latitude": 53.28843,
      "longitude": -6.23736
    }
  },
  {
    "id": 47,
    "name": "The Golden Chopstick",
    "primaryCuisineId": 1,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 14.89,
    "ratedLevel": 2.5,
    "deliveryFee": 4.29,
    "picture": "pexels-kawerodriguess-19264270.jpg",
    "cuisines": [
      1,
      8
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "5 Temple Bar, D08, Dublin City, Ireland",
      "postCode": "D08 Z1RY",
      "latitude": 53.3712,
      "longitude": -6.26385
    }
  },
  {
    "id": 48,
    "name": "Monsoon Munchies",
    "primaryCuisineId": 1,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 11.92,
    "ratedLevel": 3.0,
    "deliveryFee": 2.26,
    "picture": "pexels-kunal-lakhotia-781256899-28674525.jpg",
    "cuisines": [
      1,
      3
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "109 Dorset Street, D08, Dublin City, Ireland",
      "postCode": "D08 8D3Y",
      "latitude": 53.34495,
      "longitude": -6.22645
    }
  },
  {
    "id": 49,
    "name": "Little Italy Liffey",
    "primaryCuisineId": 4,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 12.72,
    "ratedLevel": 2.5,
    "deliveryFee": 4.3,
    "picture": "pexels-kunal-lakhotia-781256899-28674560.jpg",
    "cuisines": [
      3,
      4
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "54 North Wall, D08, Dublin City, Ireland",
      "postCode": "D08 KXOZ",
      "latitude": 53.32232,
      "longitude": -6.21545
    }
  },
  {
    "id": 50,
    "name": "The Pasta Pilot",
    "primaryCuisineId": 11,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 8.72,
    "ratedLevel": 3.0,
    "deliveryFee": 2.22,
    "picture": "pexels-kunal-lakhotia-781256899-28674660.jpg",
    "cuisines": [
      1,
      7,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "115 Dorset Street, D01, Dublin City, Ireland",
      "postCode": "D01 71PM",
      "latitude": 53.38209,
      "longitude": -6.27868
    }
  },
  {
    "id": 51,
    "name": "Tuscan Terrace",
    "primaryCuisineId": 11,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 12.62,
    "ratedLevel": 4.5,
    "deliveryFee": 1.55,
    "picture": "pexels-kunal-lakhotia-781256899-28674705.jpg",
    "cuisines": [
      2,
      6,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "150 Leeson Street, D02, Dublin City, Ireland",
      "postCode": "D02 KXSD",
      "latitude": 53.2909,
      "longitude": -6.26227
    }
  },
  {
    "id": 52,
    "name": "Olive & Oregano",
    "primaryCuisineId": 8,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 13.81,
    "ratedLevel": 5.0,
    "deliveryFee": 4.0,
    "picture": "pexels-kunal-lakhotia-781256899-28675074.jpg",
    "cuisines": [
      8,
      9
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "140 Parnell Square, D03, Dublin City, Ireland",
      "postCode": "D03 WY2B",
      "latitude": 53.31174,
      "longitude": -6.22442
    }
  },
  {
    "id": 53,
    "name": "Napoli Northside",
    "primaryCuisineId": 2,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 12.47,
    "ratedLevel": 4.0,
    "deliveryFee": 3.65,
    "picture": "pexels-mahesh-kumar-ganesan-2148232589-35514447.jpg",
    "cuisines": [
      2,
      11,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "112 Temple Bar, D03, Dublin City, Ireland",
      "postCode": "D03 PRO4",
      "latitude": 53.31677,
      "longitude": -6.22789
    }
  },
  {
    "id": 54,
    "name": "Roma\u2019s Retreat",
    "primaryCuisineId": 3,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 14.01,
    "ratedLevel": 4.0,
    "deliveryFee": 4.3,
    "picture": "pexels-markus-winkler-1430818-32443613.jpg",
    "cuisines": [
      3,
      7,
      9,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "21 Temple Bar, D08, Dublin City, Ireland",
      "postCode": "D08 T715",
      "latitude": 53.36552,
      "longitude": -6.22128
    }
  },
  {
    "id": 55,
    "name": "The Garlic Grove",
    "primaryCuisineId": 3,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 7.29,
    "ratedLevel": 5.0,
    "deliveryFee": 3.95,
    "picture": "pexels-marvin-sacdalan-276316567-13065199.jpg",
    "cuisines": [
      3,
      5
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "107 Capel Street, D03, Dublin City, Ireland",
      "postCode": "D03 8ZWD",
      "latitude": 53.35655,
      "longitude": -6.22277
    }
  },
  {
    "id": 56,
    "name": "Pesto & Pine",
    "primaryCuisineId": 1,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 14.86,
    "ratedLevel": 3.5,
    "deliveryFee": 1.92,
    "picture": "pexels-marvin-sacdalan-276316567-13065202.jpg",
    "cuisines": [
      1,
      7
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "60 Grafton Street, D07, Dublin City, Ireland",
      "postCode": "D07 4MAE",
      "latitude": 53.3945,
      "longitude": -6.21437
    }
  },
  {
    "id": 57,
    "name": "Adriatic Artisan",
    "primaryCuisineId": 9,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 7.92,
    "ratedLevel": 4.5,
    "deliveryFee": 3.11,
    "picture": "pexels-miltonphotography-34217296.jpg",
    "cuisines": [
      1,
      6,
      9
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "101 Baggot Street, D05, Dublin City, Ireland",
      "postCode": "D05 ENGY",
      "latitude": 53.36941,
      "longitude": -6.28886
    }
  },
  {
    "id": 58,
    "name": "Mediterranean Mist",
    "primaryCuisineId": 5,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 9.39,
    "ratedLevel": 4.5,
    "deliveryFee": 2.59,
    "picture": "pexels-miltonphotography-35066811.jpg",
    "cuisines": [
      1,
      3,
      5
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "11 Parnell Square, D06, Dublin City, Ireland",
      "postCode": "D06 NDZW",
      "latitude": 53.31623,
      "longitude": -6.2316
    }
  },
  {
    "id": 59,
    "name": "The Greek Garrison",
    "primaryCuisineId": 7,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 11.28,
    "ratedLevel": 5.0,
    "deliveryFee": 4.85,
    "picture": "pexels-miltonphotography-35066816.jpg",
    "cuisines": [
      4,
      7
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "126 Capel Street, D04, Dublin City, Ireland",
      "postCode": "D04 CCHL",
      "latitude": 53.31359,
      "longitude": -6.25131
    }
  },
  {
    "id": 60,
    "name": "Pizza PlatePilot",
    "primaryCuisineId": 3,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 11.51,
    "ratedLevel": 2.5,
    "deliveryFee": 2.63,
    "picture": "pexels-miltonphotography-35267270.jpg",
    "cuisines": [
      3,
      6,
      9
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "110 Dame Street, D05, Dublin City, Ireland",
      "postCode": "D05 DHG6",
      "latitude": 53.31069,
      "longitude": -6.29052
    }
  },
  {
    "id": 61,
    "name": "Basil & Burrata",
    "primaryCuisineId": 7,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 13.21,
    "ratedLevel": 4.5,
    "deliveryFee": 1.02,
    "picture": "pexels-miltonphotography-35267285.jpg",
    "cuisines": [
      4,
      7,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "85 Camden Street, D02, Dublin City, Ireland",
      "postCode": "D02 ESBX",
      "latitude": 53.29549,
      "longitude": -6.28252
    }
  },
  {
    "id": 62,
    "name": "The Sicilian Slice",
    "primaryCuisineId": 11,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 13.75,
    "ratedLevel": 5.0,
    "deliveryFee": 2.15,
    "picture": "pexels-miltonphotography-35267287.jpg",
    "cuisines": [
      7,
      8,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "15 Merrion Square, D08, Dublin City, Ireland",
      "postCode": "D08 7S58",
      "latitude": 53.29498,
      "longitude": -6.29035
    }
  },
  {
    "id": 63,
    "name": "Vine & Verona",
    "primaryCuisineId": 5,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 9.79,
    "ratedLevel": 2.5,
    "deliveryFee": 4.16,
    "picture": "pexels-mohamed9380-36984981.jpg",
    "cuisines": [
      4,
      5,
      10
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "25 Capel Street, D08, Dublin City, Ireland",
      "postCode": "D08 L7O4",
      "latitude": 53.38133,
      "longitude": -6.29232
    }
  },
  {
    "id": 64,
    "name": "Marcello\u2019s Morsels",
    "primaryCuisineId": 3,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 13.53,
    "ratedLevel": 5.0,
    "deliveryFee": 2.39,
    "picture": "pexels-mony-cruz-743773620-28951526.jpg",
    "cuisines": [
      3,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "32 North Wall, D07, Dublin City, Ireland",
      "postCode": "D07 XWDH",
      "latitude": 53.27979,
      "longitude": -6.24074
    }
  },
  {
    "id": 65,
    "name": "Coastal Calzone",
    "primaryCuisineId": 14,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 10.14,
    "ratedLevel": 5.0,
    "deliveryFee": 2.65,
    "picture": "pexels-nadin-sh-78971847-11596066.jpg",
    "cuisines": [
      1,
      4,
      11,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "114 Dame Street, D08, Dublin City, Ireland",
      "postCode": "D08 2DEC",
      "latitude": 53.31072,
      "longitude": -6.27554
    }
  },
  {
    "id": 66,
    "name": "The Fig & Feta",
    "primaryCuisineId": 8,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 8.98,
    "ratedLevel": 5.0,
    "deliveryFee": 3.0,
    "picture": "pexels-nano-erdozain-120534369-29101361.jpg",
    "cuisines": [
      8,
      12,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "74 Parnell Square, D08, Dublin City, Ireland",
      "postCode": "D08 DN4E",
      "latitude": 53.36428,
      "longitude": -6.25382
    }
  },
  {
    "id": 67,
    "name": "Lemon & Laurel",
    "primaryCuisineId": 1,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 8.51,
    "ratedLevel": 4.0,
    "deliveryFee": 3.11,
    "picture": "pexels-nano-erdozain-120534369-29233922.jpg",
    "cuisines": [
      1,
      5,
      7,
      12,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "112 Dame Street, D07, Dublin City, Ireland",
      "postCode": "D07 CPOC",
      "latitude": 53.30579,
      "longitude": -6.23069
    }
  },
  {
    "id": 68,
    "name": "Adriatic Anchor",
    "primaryCuisineId": 5,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 11.25,
    "ratedLevel": 4.0,
    "deliveryFee": 2.06,
    "picture": "pexels-obenkural-18062057.jpg",
    "cuisines": [
      4,
      5,
      6
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "142 Grafton Street, D08, Dublin City, Ireland",
      "postCode": "D08 5NJL",
      "latitude": 53.39631,
      "longitude": -6.26682
    }
  },
  {
    "id": 69,
    "name": "The Heavy Hitter Burger",
    "primaryCuisineId": 3,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 14.52,
    "ratedLevel": 3.5,
    "deliveryFee": 2.7,
    "picture": "pexels-parvin-aktar-1151929052-26245461.jpg",
    "cuisines": [
      3,
      4,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "105 Henry Street, D04, Dublin City, Ireland",
      "postCode": "D04 1D9S",
      "latitude": 53.35756,
      "longitude": -6.23496
    }
  },
  {
    "id": 70,
    "name": "Smokestack South",
    "primaryCuisineId": 2,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 9.03,
    "ratedLevel": 3.0,
    "deliveryFee": 1.19,
    "picture": "pexels-prabal-9609840.jpg",
    "cuisines": [
      2,
      8,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "34 Abbey Street, D05, Dublin City, Ireland",
      "postCode": "D05 1MJ4",
      "latitude": 53.2878,
      "longitude": -6.24647
    }
  },
  {
    "id": 71,
    "name": "The Bun Barn",
    "primaryCuisineId": 13,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 11.62,
    "ratedLevel": 3.5,
    "deliveryFee": 2.67,
    "picture": "pexels-prabal-9609861.jpg",
    "cuisines": [
      5,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D04",
      "detailAddress": "147 North Wall, D04, Dublin City, Ireland",
      "postCode": "D04 2MX5",
      "latitude": 53.32101,
      "longitude": -6.22351
    }
  },
  {
    "id": 72,
    "name": "Patty Pilot",
    "primaryCuisineId": 9,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 12.75,
    "ratedLevel": 5.0,
    "deliveryFee": 1.5,
    "picture": "pexels-rakhmatsuwandi-36982088.jpg",
    "cuisines": [
      9,
      10,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "51 Camden Street, D07, Dublin City, Ireland",
      "postCode": "D07 60OF",
      "latitude": 53.34883,
      "longitude": -6.2812
    }
  },
  {
    "id": 73,
    "name": "Grill & Grain",
    "primaryCuisineId": 3,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 7.67,
    "ratedLevel": 4.0,
    "deliveryFee": 1.15,
    "picture": "pexels-shalini-shakthi-152664094-34159111.jpg",
    "cuisines": [
      3,
      6,
      7,
      12,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "70 Dame Street, D01, Dublin City, Ireland",
      "postCode": "D01 MRSW",
      "latitude": 53.28342,
      "longitude": -6.27205
    }
  },
  {
    "id": 74,
    "name": "The Sizzling Skillet",
    "primaryCuisineId": 1,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 8.56,
    "ratedLevel": 5.0,
    "deliveryFee": 2.99,
    "picture": "pexels-shootsaga-30748997.jpg",
    "cuisines": [
      1,
      3,
      6,
      8,
      10
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D05",
      "detailAddress": "135 St Stephen's Green, D05, Dublin City, Ireland",
      "postCode": "D05 AJKZ",
      "latitude": 53.3889,
      "longitude": -6.23605
    }
  },
  {
    "id": 75,
    "name": "Bourbon & Brisket",
    "primaryCuisineId": 5,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 13.25,
    "ratedLevel": 3.0,
    "deliveryFee": 4.33,
    "picture": "pexels-shootsaga-30858402.jpg",
    "cuisines": [
      5,
      10,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "37 Mountjoy Square, D03, Dublin City, Ireland",
      "postCode": "D03 GATN",
      "latitude": 53.28365,
      "longitude": -6.292
    }
  },
  {
    "id": 76,
    "name": "The Burger Bastion",
    "primaryCuisineId": 3,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 13.54,
    "ratedLevel": 3.5,
    "deliveryFee": 2.67,
    "picture": "pexels-shootsaga-33428723.jpg",
    "cuisines": [
      3,
      6,
      7,
      11,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "62 Dame Street, D08, Dublin City, Ireland",
      "postCode": "D08 88SM",
      "latitude": 53.31455,
      "longitude": -6.26445
    }
  },
  {
    "id": 77,
    "name": "Fire & Fork",
    "primaryCuisineId": 7,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 10.96,
    "ratedLevel": 2.5,
    "deliveryFee": 2.61,
    "picture": "pexels-shootsaga-36701469.jpg",
    "cuisines": [
      4,
      7
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "130 Grafton Street, D08, Dublin City, Ireland",
      "postCode": "D08 8NHE",
      "latitude": 53.29367,
      "longitude": -6.24527
    }
  },
  {
    "id": 78,
    "name": "The Rusty Rig",
    "primaryCuisineId": 1,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 8.26,
    "ratedLevel": 5.0,
    "deliveryFee": 1.13,
    "picture": "pexels-shouravsheikh-11170284.jpg",
    "cuisines": [
      1,
      4
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "128 Baggot Street, D03, Dublin City, Ireland",
      "postCode": "D03 5PT5",
      "latitude": 53.29001,
      "longitude": -6.27085
    }
  },
  {
    "id": 79,
    "name": "Urban Umami",
    "primaryCuisineId": 7,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 7.24,
    "ratedLevel": 3.0,
    "deliveryFee": 2.91,
    "picture": "pexels-talha-kugu-2160759144-37006563.jpg",
    "cuisines": [
      5,
      6,
      7,
      11,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "144 Mary Street, D06, Dublin City, Ireland",
      "postCode": "D06 LCN9",
      "latitude": 53.38981,
      "longitude": -6.27156
    }
  },
  {
    "id": 80,
    "name": "The Daily Grind Diner",
    "primaryCuisineId": 8,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 12.8,
    "ratedLevel": 3.0,
    "deliveryFee": 3.0,
    "picture": "pexels-thomas-nahar-15365650-6363501.jpg",
    "cuisines": [
      8,
      9
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "51 St Stephen's Green, D06, Dublin City, Ireland",
      "postCode": "D06 ZC5S",
      "latitude": 53.35952,
      "longitude": -6.29288
    }
  },
  {
    "id": 81,
    "name": "Midnight Munchies",
    "primaryCuisineId": 5,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 13.13,
    "ratedLevel": 4.0,
    "deliveryFee": 3.71,
    "picture": "pexels-thrissurkaranphotography-12865862.jpg",
    "cuisines": [
      2,
      5,
      8,
      12,
      13
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "94 Mountjoy Square, D03, Dublin City, Ireland",
      "postCode": "D03 39L5",
      "latitude": 53.28369,
      "longitude": -6.27478
    }
  },
  {
    "id": 82,
    "name": "The Fryer\u2019s Fortress",
    "primaryCuisineId": 4,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 10.37,
    "ratedLevel": 5.0,
    "deliveryFee": 1.73,
    "picture": "pexels-urianrivera-33490824.jpg",
    "cuisines": [
      3,
      4,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "25 Parnell Square, D03, Dublin City, Ireland",
      "postCode": "D03 K5DC",
      "latitude": 53.34666,
      "longitude": -6.29186
    }
  },
  {
    "id": 83,
    "name": "Wingman West",
    "primaryCuisineId": 14,
    "minDeliveryTime": 15,
    "minDeliveryTotal": 11.17,
    "ratedLevel": 5.0,
    "deliveryFee": 2.03,
    "picture": "pexels-valeriya-29380186.jpg",
    "cuisines": [
      8,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "97 Dame Street, D01, Dublin City, Ireland",
      "postCode": "D01 FBH5",
      "latitude": 53.3855,
      "longitude": -6.25367
    }
  },
  {
    "id": 84,
    "name": "The Perched Pigeon",
    "primaryCuisineId": 14,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 12.53,
    "ratedLevel": 4.5,
    "deliveryFee": 4.26,
    "picture": "pexels-valeriya-34759405.jpg",
    "cuisines": [
      6,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "68 Henry Street, D01, Dublin City, Ireland",
      "postCode": "D01 KX0W",
      "latitude": 53.34149,
      "longitude": -6.26989
    }
  },
  {
    "id": 85,
    "name": "Brew & Batter",
    "primaryCuisineId": 12,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 9.47,
    "ratedLevel": 4.5,
    "deliveryFee": 4.88,
    "picture": "pexels-vikeph-20432787.jpg",
    "cuisines": [
      2,
      4,
      6,
      9,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "8 Camden Street, D03, Dublin City, Ireland",
      "postCode": "D03 42BW",
      "latitude": 53.28031,
      "longitude": -6.27821
    }
  },
  {
    "id": 86,
    "name": "The Healthy Habit",
    "primaryCuisineId": 9,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 13.7,
    "ratedLevel": 5.0,
    "deliveryFee": 2.94,
    "picture": "pexels-vivaan-rupani-7351635.jpg",
    "cuisines": [
      2,
      9
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D02",
      "detailAddress": "109 Temple Bar, D02, Dublin City, Ireland",
      "postCode": "D02 AP5Y",
      "latitude": 53.2891,
      "longitude": -6.28464
    }
  },
  {
    "id": 87,
    "name": "Morning Mist Muffins",
    "primaryCuisineId": 5,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 12.84,
    "ratedLevel": 4.5,
    "deliveryFee": 3.35,
    "picture": "pexels-willians-huerta-2157111846-34831926.jpg",
    "cuisines": [
      4,
      5,
      8,
      10,
      12
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "10 North Wall, D01, Dublin City, Ireland",
      "postCode": "D01 P3WN",
      "latitude": 53.28988,
      "longitude": -6.23044
    }
  },
  {
    "id": 88,
    "name": "The Daily Dough",
    "primaryCuisineId": 13,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 11.2,
    "ratedLevel": 4.5,
    "deliveryFee": 3.33,
    "picture": "pexels-willians-huerta-2157111846-34875011.jpg",
    "cuisines": [
      1,
      2,
      11,
      13,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D01",
      "detailAddress": "122 Temple Bar, D01, Dublin City, Ireland",
      "postCode": "D01 KOEE",
      "latitude": 53.30256,
      "longitude": -6.28897
    }
  },
  {
    "id": 89,
    "name": "Sourdough Street",
    "primaryCuisineId": 3,
    "minDeliveryTime": 12,
    "minDeliveryTotal": 9.98,
    "ratedLevel": 4.0,
    "deliveryFee": 4.16,
    "picture": "pexels-yankrukov-8818657.jpg",
    "cuisines": [
      3,
      11
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "10 Dorset Street, D07, Dublin City, Ireland",
      "postCode": "D07 99N1",
      "latitude": 53.36662,
      "longitude": -6.28922
    }
  },
  {
    "id": 90,
    "name": "Leafy Larder",
    "primaryCuisineId": 9,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 12.87,
    "ratedLevel": 4.0,
    "deliveryFee": 1.2,
    "picture": "pexels-zhor-abdellkader-2157344860-36939711.jpg",
    "cuisines": [
      4,
      7,
      9
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D08",
      "detailAddress": "20 Mountjoy Square, D08, Dublin City, Ireland",
      "postCode": "D08 RZOY",
      "latitude": 53.39552,
      "longitude": -6.25646
    }
  },
  {
    "id": 91,
    "name": "The Coffee Cloud",
    "primaryCuisineId": 14,
    "minDeliveryTime": 10,
    "minDeliveryTotal": 9.7,
    "ratedLevel": 3.5,
    "deliveryFee": 1.32,
    "picture": "stir-fried-macaroni-with-tomato-chili-pepper-seeds-basil-white-dish.jpg",
    "cuisines": [
      8,
      11,
      12,
      13,
      14
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D03",
      "detailAddress": "139 Dorset Street, D03, Dublin City, Ireland",
      "postCode": "D03 G1T0",
      "latitude": 53.34531,
      "longitude": -6.29087
    }
  },
  {
    "id": 92,
    "name": "Bean & Barley",
    "primaryCuisineId": 4,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 12.28,
    "ratedLevel": 3.5,
    "deliveryFee": 4.39,
    "picture": "stir-fried-spaghetti-beautifully-arranged-white-plate.jpg",
    "cuisines": [
      4,
      9
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "47 Mountjoy Square, D07, Dublin City, Ireland",
      "postCode": "D07 8FW7",
      "latitude": 53.36452,
      "longitude": -6.24292
    }
  },
  {
    "id": 93,
    "name": "The Pastry Post",
    "primaryCuisineId": 2,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 10.49,
    "ratedLevel": 4.0,
    "deliveryFee": 3.61,
    "picture": "top-view-delicious-vegetable-salad-inside-plate-grey-background.jpg",
    "cuisines": [
      2,
      7
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "117 Abbey Street, D06, Dublin City, Ireland",
      "postCode": "D06 HP6C",
      "latitude": 53.31049,
      "longitude": -6.21632
    }
  },
  {
    "id": 94,
    "name": "Kale & Quinoa",
    "primaryCuisineId": 9,
    "minDeliveryTime": 20,
    "minDeliveryTotal": 12.74,
    "ratedLevel": 4.0,
    "deliveryFee": 3.97,
    "picture": "top-view-fried-chicken-with-cucumber-cherry-tomatoes.jpg",
    "cuisines": [
      7,
      9
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D06",
      "detailAddress": "73 Abbey Street, D06, Dublin City, Ireland",
      "postCode": "D06 PTPX",
      "latitude": 53.34164,
      "longitude": -6.28448
    }
  },
  {
    "id": 95,
    "name": "The Whipped Whisk",
    "primaryCuisineId": 8,
    "minDeliveryTime": 18,
    "minDeliveryTotal": 10.85,
    "ratedLevel": 4.5,
    "deliveryFee": 1.07,
    "picture": "top-view-half-cut-spring-rolls-with-shrimp-lettuce-served-with-avocado.jpg",
    "cuisines": [
      4,
      8
    ],
    "address": {
      "country": "Ireland",
      "county": "Dublin",
      "city": "Dublin",
      "district": "D07",
      "detailAddress": "51 Temple Bar, D07, Dublin City, Ireland",
      "postCode": "D07 DT05",
      "latitude": 53.31084,
      "longitude": -6.23298
    }
  }
]
`;