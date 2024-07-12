const getImage = require("./image.js")

const restaurants = [
    {
        image: [],
        name: "The Rustic Kitchen",
        price: "$$",
        location: "New York City, USA",
        cuisine: "Italian",
        description: "Experience the taste of Italy at The Rustic Kitchen, where every dish is crafted with care using the finest ingredients sourced from local farms and artisans. Indulge in our signature pasta dishes, wood-fired pizzas, and decadent desserts while enjoying the warm ambiance of our rustic dining space."
    },
    {
        image: [],
        name: "Sushi Haven",
        price: "$$$",
        location: "Los Angeles, USA",
        cuisine: "Japanese",
        description: "Step into the world of sushi perfection at Sushi Haven, where traditional Japanese craftsmanship meets modern culinary innovation. Our skilled chefs meticulously prepare each piece of sashimi and sushi roll to perfection, offering an unforgettable dining experience that will transport you to the streets of Tokyo."
    },
    {
        image: [],
        name: "Taco Fiesta",
        price: "$",
        location: "Austin, USA",
        cuisine: "Mexican",
        description: "Embark on a flavor-packed journey through Mexico at Taco Fiesta, where every bite tells a story of tradition and passion. From our mouthwatering tacos and burritos to our refreshing margaritas, our vibrant taqueria is a celebration of Mexican culture and cuisine that will leave your taste buds tingling with delight."
    },
    {
        image: [],
        name: "Mediterranean Grill",
        price: "$$",
        location: "Chicago, USA",
        cuisine: "Mediterranean",
        description: "Transport yourself to the sun-kissed shores of the Mediterranean at our Grill, where the bold flavors and vibrant colors of the region come to life in every dish. From our succulent grilled meats to our fresh salads and mezze platters, our menu is a culinary journey through the diverse landscapes of the Mediterranean."
    },
    {
        image: [],
        name: "Spice of India",
        price: "$$",
        location: "San Francisco, USA",
        cuisine: "Indian",
        description: "Experience the rich and aromatic flavors of India at Spice of India, where each dish is a culinary masterpiece bursting with spices and herbs. From our fragrant curries to our sizzling tandoori specialties, our menu showcases the diversity and complexity of Indian cuisine in every mouthwatering bite."
    },
    {
        image: [],
        name: "Big Apple Bistro",
        price: "$$",
        location: "New York City, New York",
        cuisine: "American",
        description: "Savor the flavors of the Big Apple at our bustling bistro in the heart of New York City. From classic New York-style pizzas to gourmet burgers and artisanal cocktails, our menu offers a taste of the city that never sleeps."
    },
    {
        image: [],
        name: "Golden Gate Grill",
        price: "$$$",
        location: "San Francisco, California",
        cuisine: "Seafood",
        description: "Indulge in fresh seafood delights with a stunning view of the iconic Golden Gate Bridge at our waterfront grill. From succulent Dungeness crab to buttery lobster rolls, our menu celebrates the bounty of the Pacific Ocean."
    },
    {
        image: [],
        name: "Deep Dish Delight",
        price: "$$",
        location: "Chicago, Illinois",
        cuisine: "Italian",
        description: "Experience the quintessential taste of Chicago with our mouthwatering deep-dish pizzas, piled high with layers of cheese, sauce, and toppings. With a crispy crust and hearty fillings, each slice is a taste of Windy City tradition."
    },
    {
        image: [],
        name: "Southern Smokehouse",
        price: "$$",
        location: "Austin, Texas",
        cuisine: "Barbecue",
        description: "Treat your taste buds to the bold flavors of Texas barbecue at our smokehouse in Austin. From tender brisket to spicy smoked sausages, our slow-cooked meats and savory sides are sure to satisfy your cravings."
    },
    {
        image: [],
        name: "Sunshine State Diner",
        price: "$",
        location: "Miami, Florida",
        cuisine: "Cuban",
        description: "Escape to the tropics with a taste of Cuba at our lively diner in Miami. From savory empanadas to succulent lechón asado, our menu is bursting with the vibrant flavors and colors of the Caribbean."
    },
    {
        image: [],
        name: "Rocky Mountain Café",
        price: "$$",
        location: "Denver, Colorado",
        cuisine: "Southwestern",
        description: "Elevate your dining experience with the bold and spicy flavors of the Southwest at our café nestled in the heart of the Rocky Mountains. From smoky chili to zesty tacos, our menu is a celebration of the region's culinary heritage."
    },
    {
        image: [],
        name: "Pacific Pier Seafood",
        price: "$$$",
        location: "Seattle, Washington",
        cuisine: "Seafood",
        description: "Dive into a seafood feast at our restaurant overlooking the bustling piers of Seattle. From succulent Alaskan king crab legs to buttery Pacific salmon, our menu showcases the best of the Pacific Northwest's bounty."
    },
    {
        image: [],
        name: "Music City BBQ",
        price: "$$",
        location: "Nashville, Tennessee",
        cuisine: "Barbecue",
        description: "Get ready to tap your toes and satisfy your cravings with the smoky goodness of Tennessee barbecue at our lively eatery in Music City. From tangy pulled pork to melt-in-your-mouth ribs, our barbecue is sure to hit all the right notes."
    },
    {
        image: [],
        name: "Desert Oasis Café",
        price: "$$",
        location: "Phoenix, Arizona",
        cuisine: "Southwestern",
        description: "Experience the flavors of the desert Southwest at our café in the heart of Phoenix. From spicy green chile stew to crispy carne asada tacos, our menu is a culinary journey through the rugged landscapes of Arizona."
    },
    {
        image: [],
        name: "Bayou Bites",
        price: "$$",
        location: "New Orleans, Louisiana",
        cuisine: "Cajun/Creole",
        description: "Let the good times roll with a taste of the Bayou at our vibrant eatery in the heart of New Orleans. From savory gumbo to spicy jambalaya, our menu is a celebration of the rich culinary heritage of Louisiana."
    },
    {
        image: [],
        name: "Mile High Steakhouse",
        price: "$$$",
        location: "Denver, Colorado",
        cuisine: "Steakhouse",
        description: "Elevate your dining experience to new heights at our upscale steakhouse in the heart of Denver. From perfectly aged ribeye steaks to tender filet mignon, each bite is a culinary journey through the flavors of the Rocky Mountains."
    },
    {
        image: [],
        name: "Golden State Sushi",
        price: "$$",
        location: "Los Angeles, California",
        cuisine: "Japanese",
        description: "Immerse yourself in the art of sushi at our sleek and stylish restaurant in the heart of Los Angeles. From delicate sashimi to creative maki rolls, our menu showcases the freshest ingredients and finest flavors of Japanese cuisine."
    },
    {
        image: [],
        name: "Tex-Mex Taqueria",
        price: "$",
        location: "San Antonio, Texas",
        cuisine: "Mexican",
        description: "Experience the vibrant flavors of Texas-Mexican cuisine at our lively taqueria in San Antonio. From spicy carne asada tacos to cheesy quesadillas, our menu is a fiesta for your taste buds."
    },
    {
        image: [],
        name: "Big Sky BBQ",
        price: "$$",
        location: "Bozeman, Montana",
        cuisine: "Barbecue",
        description: "Savor the smoky goodness of Montana barbecue at our rustic eatery in Bozeman. From slow-cooked brisket to tangy barbecue ribs, each bite is a taste of Big Sky Country."
    },
    {
        image: [],
        name: "Empire State Eats",
        price: "$$",
        location: "New York City, New York",
        cuisine: "International",
        description: "Embark on a culinary adventure around the globe at our eclectic eatery in the heart of New York City. From savory street food to exotic entrees, our menu celebrates the diverse flavors of the world's cuisines."
    },
    {
        image: [],
        name: "Cascade Café",
        price: "$$",
        location: "Portland, Oregon",
        cuisine: "Pacific Northwest",
        description: "Discover the bounty of the Pacific Northwest at our charming café in Portland. From fresh-caught seafood to seasonal salads, our menu highlights the region's rich culinary heritage and farm-to-table ethos."
    },
    {
        image: [],
        name: "Windy City Diner",
        price: "$",
        location: "Chicago, Illinois",
        cuisine: "American",
        description: "Step into a slice of Americana at our retro diner in the heart of Chicago. From classic burgers to fluffy pancakes, our menu is a nostalgic journey through the comfort foods of the Windy City."
    },
    {
        image: [],
        name: "Sunshine State Bistro",
        price: "$$",
        location: "Miami, Florida",
        cuisine: "Mediterranean",
        description: "Transport your taste buds to the shores of the Mediterranean at our vibrant bistro in Miami. From fresh seafood to aromatic kebabs, our menu is a celebration of sun-kissed flavors and coastal cuisine."
    },
    {
        image: [],
        name: "Rocky Mountain Roastery",
        price: "$",
        location: "Boulder, Colorado",
        cuisine: "Coffeehouse",
        description: "Start your day on the right foot with a cup of locally roasted coffee from our cozy roastery in Boulder. From rich espresso to creamy lattes, each sip is a taste of the Rockies."
    },
    {
        image: [],
        name: "Grand Canyon Grill",
        price: "$$",
        location: "Flagstaff, Arizona",
        cuisine: "Southwestern",
        description: "Experience the flavors of the Southwest with a breathtaking view of the Grand Canyon at our grill in Flagstaff. From spicy green chile stew to sizzling fajitas, our menu captures the essence of Arizona cuisine."
    },
    {
        image: [],
        name: "Sizzling Salsa Cantina",
        price: "$$",
        location: "San Antonio, Texas",
        cuisine: "Mexican",
        description: "Experience the vibrant flavors of Mexico at our cantina in San Antonio. From sizzling fajitas to tangy ceviche, each dish is a fiesta for your taste buds. Don't forget to pair your meal with one of our handcrafted margaritas or a cold cerveza for the full experience!"
    },
    {
        image: [],
        name: "Sunset Grill & Bar",
        price: "$$$",
        location: "Miami Beach, Florida",
        cuisine: "Seafood",
        description: "Sip on a cocktail and watch the sunset over the ocean at our grill and bar in Miami Beach. From fresh lobster tails to grilled mahi-mahi, our menu is a celebration of coastal cuisine. Relax in our beachfront setting and let the soothing sounds of the waves wash your worries away."
    },
    {
        image: [],
        name: "Mile High Diner",
        price: "$",
        location: "Denver, Colorado",
        cuisine: "American",
        description: "Elevate your dining experience at our retro diner in Denver. From fluffy pancakes to juicy burgers, our menu offers classic comfort food with a modern twist. Step back in time with our nostalgic decor and enjoy a taste of Americana in the heart of the Mile High City."
    },
    {
        image: [],
        name: "Crescent City Café",
        price: "$$",
        location: "New Orleans, Louisiana",
        cuisine: "Southern",
        description: "Indulge in the flavors of the South at our charming café in New Orleans. From fluffy beignets to savory shrimp and grits, each bite is a taste of Southern hospitality. Sit back and soak in the lively atmosphere of the French Quarter as you enjoy our soulful dishes and friendly service."
    },
    {
        image: [],
        name: "Harborview Oyster Bar",
        price: "$$$",
        location: "Seattle, Washington",
        cuisine: "Seafood",
        description: "Savor the briny goodness of fresh oysters at our waterfront bar in Seattle. From creamy chowder to plump shellfish, our menu celebrates the bounty of the Pacific Northwest. Pair your seafood feast with one of our locally brewed craft beers or a glass of Washington wine for a truly Pacific-inspired dining experience."
    },
    {
        image: [],
        name: "Misty Mountain Café",
        price: "$$",
        location: "Asheville, North Carolina",
        cuisine: "Southern",
        description: "Escape to the mountains and unwind at our cozy café in Asheville. From hearty biscuits and gravy to flaky buttermilk biscuits, our menu is a tribute to Southern comfort food. Take in the breathtaking views of the Blue Ridge Mountains as you enjoy a leisurely meal with friends and family."
    },
    {
        image: [],
        name: "Golden Gate Grill",
        price: "$$$",
        location: "San Francisco, California",
        cuisine: "California Cuisine",
        description: "Indulge in the diverse flavors of California cuisine at our iconic grill overlooking the Golden Gate Bridge. From fresh seafood to farm-fresh salads, our menu reflects the bounty of the Golden State's land and sea. Sip on a glass of Napa Valley wine and soak in the stunning views of the bay as you dine in style."
    },
    {
        image: [],
        name: "Big Apple Bistro",
        price: "$$",
        location: "New York City, New York",
        cuisine: "American",
        description: "Discover the hustle and bustle of the Big Apple at our lively bistro in the heart of New York City. From classic deli sandwiches to hearty burgers, our menu celebrates the melting pot of American flavors found in the city that never sleeps. Fuel up for a day of sightseeing or unwind after a long day of exploring with a delicious meal at our bustling eatery."
    },
    {
        image: [],
        name: "Desert Oasis Café",
        price: "$",
        location: "Scottsdale, Arizona",
        cuisine: "Southwestern",
        description: "Escape the heat and relax in the shade of our oasis café in Scottsdale. From refreshing prickly pear margaritas to zesty carne asada tacos, our menu offers a taste of the Southwest's vibrant culinary scene. Enjoy live music on our outdoor patio or cool off indoors with one of our signature frozen cocktails."
    },
    {
        image: [],
        name: "Pacific Pearl Sushi",
        price: "$$",
        location: "Honolulu, Hawaii",
        cuisine: "Japanese",
        description: "Journey to the shores of Hawaii with a visit to our sushi haven in Honolulu. From fresh ahi poke bowls to decadent nigiri platters, each bite is a taste of the Pacific's bounty. Immerse yourself in the laid-back island vibes as you sample our sushi creations and sip on tropical cocktails."
    },
    {
        image: [],
        name: "Lone Star Steakhouse",
        price: "$$$",
        location: "Austin, Texas",
        cuisine: "Steakhouse",
        description: "Saddle up and savor the bold flavors of Texas at our steakhouse in Austin. From juicy ribeyes to tender filets, our menu showcases the Lone Star State's love affair with beef. Pair your steak with one of our signature sides and a glass of Texas whiskey for a true taste of the Wild West."
    }
];

const pictures = [
    "https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg",
    "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg",
    "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg",
    "https://images.pexels.com/photos/262882/pexels-photo-262882.jpeg",
    "https://images.pexels.com/photos/114974/pexels-photo-114974.jpeg",
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg",
    "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg",
    "https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg",
    "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg",
    "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg",
    "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    "https://images.pexels.com/photos/590477/pexels-photo-590477.jpeg",
    "https://images.pexels.com/photos/196648/pexels-photo-196648.jpeg",
    "https://images.pexels.com/photos/903376/pexels-photo-903376.jpeg",
    "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg",
    "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg",
    "https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg",
    "https://images.pexels.com/photos/995743/pexels-photo-995743.jpeg",
    "https://images.pexels.com/photos/251808/pexels-photo-251808.jpeg",
    "https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg",
    "https://images.pexels.com/photos/3184188/pexels-photo-3184188.jpeg",
    "https://images.pexels.com/photos/1243337/pexels-photo-1243337.jpeg",
    "https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg",
    "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg",
    "https://images.pexels.com/photos/1673876/pexels-photo-1673876.jpeg",
    "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg",
    "https://images.pexels.com/photos/3184195/pexels-photo-3184195.jpeg",
    "https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg",
    "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg",
    "https://images.pexels.com/photos/3184193/pexels-photo-3184193.jpeg",
    "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg",
    "https://images.pexels.com/photos/95949/pexels-photo-95949.jpeg",
    "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg",
    "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg",
    "https://images.pexels.com/photos/210897/pexels-photo-210897.jpeg",
    "https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg",
    "https://images.pexels.com/photos/2145/sea-sunset-beach-couple.jpg",
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    "https://images.pexels.com/photos/313715/pexels-photo-313715.jpeg",
    "https://images.pexels.com/photos/1123248/pexels-photo-1123248.jpeg",
    "https://images.pexels.com/photos/265940/pexels-photo-265940.jpeg",
    "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
    "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg",
    "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg",
    "https://images.pexels.com/photos/1194234/pexels-photo-1194234.jpeg",
    "https://images.pexels.com/photos/3184177/pexels-photo-3184177.jpeg",
    "https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg",
    "https://images.pexels.com/photos/3171202/pexels-photo-3171202.jpeg",
    "https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg",
    "https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg",
    "https://images.pexels.com/photos/1974594/pexels-photo-1974594.jpeg",
    "https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg",
    "https://images.pexels.com/photos/3171204/pexels-photo-3171204.jpeg",
    "https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg",
    "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg",
    "https://images.pexels.com/photos/1247677/pexels-photo-1247677.jpeg",
    "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg",
    "https://images.pexels.com/photos/1813505/pexels-photo-1813505.jpeg",
    "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg",
    "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    "https://images.pexels.com/photos/1191403/pexels-photo-1191403.jpeg",
    "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg",
    "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg",
    "https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg",
    "https://images.pexels.com/photos/821069/pexels-photo-821069.jpeg",
    "https://images.pexels.com/photos/2899737/pexels-photo-2899737.jpeg",
    "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg",
    "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg",
    "https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg",
    "https://images.pexels.com/photos/1703272/pexels-photo-1703272.jpeg",
    "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg",
    "https://images.pexels.com/photos/872835/pexels-photo-872835.jpeg",
    "https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg",
    "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg",
    "https://images.pexels.com/photos/568370/pexels-photo-568370.jpeg",
    "https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg",
    "https://images.pexels.com/photos/2067470/pexels-photo-2067470.jpeg",
    "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg",
    "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
    "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
    "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg",
    "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
    "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg",
    "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
    "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg",
    "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg",
    "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg",
    "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg",
    "https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg",
    "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg",
    "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg",
    "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg",
    "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg",
    "https://images.pexels.com/photos/1819669/pexels-photo-1819669.jpeg",
    "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg",
    "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg",
    "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
    "https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg",
    "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg",
    "https://images.pexels.com/photos/1907098/pexels-photo-1907098.jpeg",
    "https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg",
    "https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg",
    "https://images.pexels.com/photos/1267315/pexels-photo-1267315.jpeg",
    "https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg",
    "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg",
    "https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg",
    "https://images.pexels.com/photos/1383776/pexels-photo-1383776.jpeg",
    "https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg",
    "https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg",
    "https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg",
    "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg",
    "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg",
    "https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg",
    "https://images.pexels.com/photos/903376/pexels-photo-903376.jpeg",
    "https://images.pexels.com/photos/225228/pexels-photo-225228.jpeg",
    "https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg",
    "https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg",
    "https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg",
    "https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg",
    "https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg",
    "https://images.pexels.com/photos/313700/pexels-photo-313700.jpeg",
    "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg",
    "https://images.pexels.com/photos/791810/pexels-photo-791810.jpeg",
    "https://images.pexels.com/photos/831012/pexels-photo-831012.jpeg",
    "https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg",
    "https://images.pexels.com/photos/750843/pexels-photo-750843.jpeg",
    "https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg",
    "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg",
    "https://images.pexels.com/photos/1342641/pexels-photo-1342641.jpeg",
    "https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg",
    "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg",
    "https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg",
    "https://images.pexels.com/photos/1378424/pexels-photo-1378424.jpeg",
    "https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg",
    "https://images.pexels.com/photos/1237073/pexels-photo-1237073.jpeg",
    "https://images.pexels.com/photos/1449775/pexels-photo-1449775.jpeg",
    "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg",
    "https://images.pexels.com/photos/995743/pexels-photo-995743.jpeg",
    "https://images.pexels.com/photos/821054/pexels-photo-821054.jpeg",
    "https://images.pexels.com/photos/984888/pexels-photo-984888.jpeg",
    "https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg",
    "https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg",
    "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg",
    "https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg",
    "https://images.pexels.com/photos/1251196/pexels-photo-1251196.jpeg",
    "https://images.pexels.com/photos/693269/pexels-photo-693269.jpeg",
    "https://images.pexels.com/photos/2351274/pexels-photo-2351274.jpeg",
    "https://images.pexels.com/photos/734562/pexels-photo-734562.jpeg",
    "https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg",
    "https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg",
    "https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg",
    "https://images.pexels.com/photos/2290070/pexels-photo-2290070.jpeg",
    "https://images.pexels.com/photos/375889/pexels-photo-375889.jpeg",
    "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg"
]

function getRandomDate(start, end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

const startDate = new Date(2023, 0, 1);
const endDate = new Date(2024, 11, 31);

const randomDates = Array.from({ length: 40 }, () => getRandomDate(startDate, endDate));

const addDates = () => {
    for (let i = 0; i < restaurants.length; ++i) {
        restaurants[i].createdOn = randomDates[i]
    }
}
addDates()

// const fs = require('fs').promises;

// const fetchData = async () => {
//     const imageUrls = await getImage()
//     try {
//         const data = JSON.stringify(imageUrls, null, 2); // Format the array as a JSON string
//         await fs.writeFile('output2.txt', data, 'utf8');
//         console.log('File has been saved!');
//     } catch (err) {
//         console.error('Error writing to file', err);
//     }

// }

// fetchData()


// async function saveArrayToFile(images, filename) {
//     try {
//         const data = JSON.stringify(images, null, 2); // Format the array as a JSON string
//         await fs.writeFile(filename, data, 'utf8');
//         console.log('File has been saved!');
//     } catch (err) {
//         console.error('Error writing to file', err);
//     }
// }


// saveArrayToFile(images, 'output.txt');



const fetchData = async () => {
    try {
        // const imageUrls = await getImage() no need as I've already stored the pictures in the pictures array
        for (let i = 0; i < pictures.length; i++) {
            const restaurantIndex = i % restaurants.length;
            restaurants[restaurantIndex].image.push({ url: pictures[i] });
            restaurants[restaurantIndex].author = "66911201c3f6b9539fd5a8d6";
        }
        return restaurants
    } catch (error) {
        console.error('Error:', error.message)
    }

};

fetchData()

module.exports = fetchData

