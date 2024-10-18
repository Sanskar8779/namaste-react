import React from "react";
import ReactDOM from "react-dom/client";

/**
 *  Header
 *      - Logo
 *      - Nav Items
 *  Body
 *      - Search
 *      - Resturant Container
 *          -Resturant Card
 *              - Resturant Name
 *              - Image
 *              - dish name
 *              - Rating
 *              - Cuisine
 *              - Time to deliver
 *  Footer
 *      - Copyright
 *      - Links
 *      - Address
 *      - Contact
 */

const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img
					className="logo"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXm-Lz1wqab2UY4q-vR2b1nEBH3NHEPpIsA&s"
				/>
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

const resList = [
	{
		info: {
			id: "151076",
			name: "Captain Olive",
			cloudinaryImageId: "f5f9d4821b9c667a424d971079f95815",
			locality: "2nd Stage",
			areaName: "BTM Layout",
			costForTwo: "₹350 for two",
			cuisines: [
				"Burgers",
				"American",
				"shawarma",
				"Rolls & Wraps",
				"Beverages",
				"Fast Food",
				"Continental",
			],
			avgRating: 4.3,
			parentId: "21078",
			avgRatingString: "4.3",
			totalRatingsString: "9.0K+",
			sla: {
				deliveryTime: 30,
				lastMileTravel: 9.2,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "9.2 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-10-17 06:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "15% OFF",
				subHeader: "ABOVE ₹900",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-880b17a8-c3d8-4fb6-8213-9831b1c30e1f",
		},
		cta: {
			link: "https://www.swiggy.com/city/bangalore/captain-olive-2nd-stage-btm-layout-rest151076",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "337335",
			name: "Kannur food kitchen",
			cloudinaryImageId: "a27weqanhnszqiuzsoik",
			locality: "1st  Stage",
			areaName: "BTM Layout",
			costForTwo: "₹200 for two",
			cuisines: ["Kerala", "Biryani", "Beverages"],
			avgRating: 4.1,
			parentId: "114756",
			avgRatingString: "4.1",
			totalRatingsString: "20K+",
			sla: {
				deliveryTime: 29,
				lastMileTravel: 7.9,
				serviceability: "SERVICEABLE",
				slaString: "25-30 mins",
				lastMileTravelString: "7.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-10-17 04:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-880b17a8-c3d8-4fb6-8213-9831b1c30e1f",
		},
		cta: {
			link: "https://www.swiggy.com/city/bangalore/kannur-food-kitchen-1st-stage-btm-layout-rest337335",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "468221",
			name: "AL-Arabic Shawarma",
			cloudinaryImageId: "vfvqc04xichrloipqz3t",
			locality: "New Thippasandra",
			areaName: "Indiranagar",
			costForTwo: "₹200 for two",
			cuisines: ["Arabian", "Snacks"],
			avgRating: 4.2,
			parentId: "396951",
			avgRatingString: "4.2",
			totalRatingsString: "1.2K+",
			sla: {
				deliveryTime: 31,
				lastMileTravel: 9.3,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "9.3 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-10-17 05:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-880b17a8-c3d8-4fb6-8213-9831b1c30e1f",
		},
		cta: {
			link: "https://www.swiggy.com/city/bangalore/al-arabic-shawarma-new-thippasandra-indiranagar-rest468221",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "709119",
			name: "Irani Std. Tea",
			cloudinaryImageId: "1e756ee8d230b65d570f7e8e70f7062c",
			locality: "6th Main Rd",
			areaName: "Indiranagar",
			costForTwo: "₹200 for two",
			cuisines: ["Beverages", "Snacks", "Fast Food"],
			avgRating: 4.2,
			parentId: "374583",
			avgRatingString: "4.2",
			totalRatingsString: "673",
			sla: {
				deliveryTime: 27,
				lastMileTravel: 6.7,
				serviceability: "SERVICEABLE",
				slaString: "25-30 mins",
				lastMileTravelString: "6.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-10-23 00:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹125 OFF",
				subHeader: "ABOVE ₹299",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-880b17a8-c3d8-4fb6-8213-9831b1c30e1f",
		},
		cta: {
			link: "https://www.swiggy.com/city/bangalore/irani-std-tea-6th-main-rd-indiranagar-rest709119",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "770772",
			name: "Olio - The Wood Fired Pizzeria",
			cloudinaryImageId: "4b44c7921b1b6073a4ffa58b38f8def1",
			locality: "Ali Askar Road",
			areaName: "R.T. Nagar",
			costForTwo: "₹300 for two",
			cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
			avgRating: 4.4,
			parentId: "11633",
			avgRatingString: "4.4",
			totalRatingsString: "590",
			sla: {
				deliveryTime: 31,
				lastMileTravel: 3,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "3.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-10-17 05:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹125 OFF",
				subHeader: "ABOVE ₹249",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-880b17a8-c3d8-4fb6-8213-9831b1c30e1f",
		},
		cta: {
			link: "https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-ali-askar-road-r-t-nagar-rest770772",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "464509",
			name: "Leon's - Burgers & Wings (Leon Grill)",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_464509.jpg",
			locality: "Frazer Town",
			areaName: "Frazer Town",
			costForTwo: "₹300 for two",
			cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
			avgRating: 4.5,
			parentId: "371281",
			avgRatingString: "4.5",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 26,
				lastMileTravel: 4.7,
				serviceability: "SERVICEABLE",
				slaString: "25-30 mins",
				lastMileTravelString: "4.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-10-17 03:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "15% OFF",
				subHeader: "ABOVE ₹2000",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "4.6",
					ratingCount: "723",
				},
				source: "GOOGLE",
				sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-880b17a8-c3d8-4fb6-8213-9831b1c30e1f",
		},
		cta: {
			link: "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-frazer-town-rest464509",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "495055",
			name: "Afghani Tandoori Hub",
			cloudinaryImageId: "s2guefjyf6zplthuzkzg",
			locality: "BTM Layout",
			areaName: "BTM Layout",
			costForTwo: "₹250 for two",
			cuisines: ["Biryani", "Chinese", "North Indian", "Snacks"],
			avgRating: 3.4,
			parentId: "472116",
			avgRatingString: "3.4",
			totalRatingsString: "3.2K+",
			sla: {
				deliveryTime: 31,
				lastMileTravel: 7.4,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "7.4 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-10-17 23:59:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹125 OFF",
				subHeader: "ABOVE ₹299",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "1.6",
					ratingCount: "55",
				},
				source: "GOOGLE",
				sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-880b17a8-c3d8-4fb6-8213-9831b1c30e1f",
		},
		cta: {
			link: "https://www.swiggy.com/city/bangalore/afghani-tandoori-hub-btm-layout-rest495055",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "291456",
			name: "The Fritter Company",
			cloudinaryImageId: "3660c857274de528702f316b4a7a1996",
			locality: "2nd Stage",
			areaName: "Btm Layout",
			costForTwo: "₹200 for two",
			cuisines: [
				"Burgers",
				"American",
				"shawarma",
				"Rolls & Wraps",
				"Beverages",
				"Fast Food",
				"Continental",
			],
			avgRating: 4.4,
			parentId: "21135",
			avgRatingString: "4.4",
			totalRatingsString: "4.0K+",
			sla: {
				deliveryTime: 28,
				lastMileTravel: 9.2,
				serviceability: "SERVICEABLE",
				slaString: "25-30 mins",
				lastMileTravelString: "9.2 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-10-17 06:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "15% OFF",
				subHeader: "ABOVE ₹900",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-880b17a8-c3d8-4fb6-8213-9831b1c30e1f",
		},
		cta: {
			link: "https://www.swiggy.com/city/bangalore/the-fritter-company-2nd-stage-btm-layout-rest291456",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
];

// const ResturantCard = (props) =>
// THis is called destructuring of props
const ResturantCard = (props) => {
	const { resData } = props;
	const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
		resData?.info;
	return (
		<div
			className="res-card"
			style={{
				// The first bracket tells that It is going to be JS
				// The second bracket gives the JS object
				backgroundColor: "#f0f0f0",
			}}
		>
			<img
				className="res-logo"
				alt="res-img"
				src={
					"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
					cloudinaryImageId
				}
			/>
			<h3>{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRating} ⭐</h4>
			<h4>{sla.deliveryTime} mins</h4>
			<h4>{costForTwo}</h4>
		</div>
	);
};

// not using key(not acceptable) <<< index as a key <<<<<< unique id

const Body = () => {
	return (
		<div className="body">
			<div className="search">Search</div>
			<div className="res-container">
				{/* // Map filter reduce in JS */}
				{resList.map((resturant) => (
					<ResturantCard
						key={resturant.info.id} /*This is the unique key*/
						resData={resturant}
					/>
				))}
			</div>
		</div>
	);
};

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
