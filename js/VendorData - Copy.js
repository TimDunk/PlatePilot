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
}
]`;

var allVendorsData=`
[
	{
		"id": 1,
		"name": "KFC1",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"toppings":{
			"28789063": {
				"id": 28789063,
				"name": "Beverage - Sugar Level",
				"description": "",
				"quantity_minimum": 1,
				"quantity_maximum": 1,
				"options": [
					{
						"id": 195015008,
						"product_id": 152794040,
						"name": "Standard Sweetness",
						"description": "",
						"price": 0,
						"remote_code": ""
					},
					{
						"id": 195015009,
						"product_id": 152794036,
						"name": "Half Sweetness (Recommend)",
						"description": "",
						"price": 0,
						"remote_code": "",
						"variation_tag_map": {
							"popular": [
								153715809,
								153715804,
								153715823,
								153715815,
								153715811,
								153715826,
								153715799,
								153715808,
								153715838,
								153715844,
								153715843
							]
						}
					}
				],
				"type": "choice-group"
			}
		},
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork",
						"varationsArr":[28789063,28789064]
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 2,
		"name": "KFC2",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 3,
		"name": "KFC 5points",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 5,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 4,
		"name": "KFC 3 points",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 3.5,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 5,
		"name": "KFC 5 Nearest",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.34893,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 6,
		"name": "KFC 6 Fastest",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.34893,
			"longitude": -6.24298
		},
		"primaryCuisineId": 4,
		"cuisines": [
			1,
			4,
			8,
			9
		],
		"minDeliveryTime": 10,
		"minDeliveryTotal": 10,
		"ratedLevel": 4.5,
		"deliveryFee": 3.5,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 7,
		"name": "KFC 7",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.95899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 5,
		"cuisines": [
			1,
			5,
			10,
			11
		],
		"minDeliveryTime": 12,
		"minDeliveryTotal": 8,
		"ratedLevel": 2,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 1,
		"name": "KFC",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	},
	{
		"id": 30,
		"name": "KFC The last one",
		"address": {
			"country": "Ireland",
			"county": "Dublin",
			"city": "Dublin",
			"district": "Dublin 1",
			"detailAddress": "National College of Ireland, Mayor Street Lower",
			"postCode": "D01 K6W2",
			"latitude": 53.35899,
			"longitude": -6.24298
		},
		"primaryCuisineId": 1,
		"cuisines": [
			1,
			2,
			5,
			7
		],
		"minDeliveryTime": 20,
		"minDeliveryTotal": 10,
		"ratedLevel": 4,
		"deliveryFee": 3,
		"menuCategoryArr": [
			{
				"id": 1,
				"category": "category1",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Pork",
						"price": 20,
						"isAvailable": true,
						"description": "Good pork"
					}
				]
			},
			{
				"id": 2,
				"category": "category2",
				"menuItemArr": [
					{
						"id": 1,
						"name": "Noodle",
						"price": 20,
						"isAvailable": true,
						"description": "Good noodle"
					}
				]
			}
		],
		"picture": "cs2ym-listing.webp"
	}
]
`;