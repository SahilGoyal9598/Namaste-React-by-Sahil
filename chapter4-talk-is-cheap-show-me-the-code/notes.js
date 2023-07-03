/*  

how to build a food ordering app
though process behind the app

1st thing : planning, code is easy to write (really!)
what to build, an how to go about it, 
Wireframe, mock UI

let's take pen and paper to make a mock ui

namaste food

header : logo(left hand), link(right hand side): home, cart, about, profile
body: search bar: search button,sorting, restaurant cards: image, title, star rating, cousines, time to take delivery,price 
footer : copyright, links:


components: main 3 pieces 
1. header
- logo
- Nav Items

2. body
- Search
- Restaurant Container
    - Restaurant Card
        - img
        - Name of Res
        - Star rating
        - ETA (delivery tim)
        - cuisine



3. footer
- Copyright
- Address
- Links
- Contact


*/

/*
top level component: where all the components reside
header, body, footer

component for a restaurant card
component is like a function that we can reuse it again and again

We will do a great thing using tailwind

one way to write css inline (not a preferred way)
styles are given using javascript object in JSX

<div className="res-card" style={{ backgroundColor: "#f0f0f0" }}> 1st bracket is telling that js code is coming from and 2nd bracket is for js object

dynamic cards

props : is a short form for properties, property is something which we can pass to a component
dynamically pass data to the component: pass it as a prop
porp are arguments to the function
passing props to a component is same as passing arguments to a function

<RestaurentCard
          res-name="Chopsy Paaasta"
          cuisine="Pasta, Chinese, Italian"
        />


        here res-name and cuisine are properties or passin props to a component
when you have to dynamically pass some data to a component you pass it as a prop

react will wrap the props into a js object
you can destructure it by using ({resNAme, cuisine}) and pass it as <h3>resName</h3> and <h3>cuisine</h3>
const {resName, cuisine} = props;

What is swiggy doing: config driven UI
Offers are available in bangalore, some other offers and cards will be different in gurugram from Bangalore

Website is driven by data : config , Delhi has different corousel, backend is controllling the UI

config is coming from the backend
https://iamrajatsingh1.medium.com/config-driven-ui-c8e93b730993

based on the data our UI will change

A swiggy restaurant data ans what its looks like

Great for future reference


"data": {
                  "type": "F",
                  "id": "344794",
                  "name": "Enoki - Fresh Asian Kitchen",
                  "uuid": "fd8d4bff-c18a-4089-b3ce-2f8d6cadc242",
                  "city": "2",
                  "area": "Sector 53",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "qihgvledhes8jpk5tt6p",
                  "cuisines": [
                    "Asian",
                    "Pan-Asian",
                    "Japanese",
                    "Chinese",
                    "Thai"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 100000,
                  "costForTwoString": "₹1000 FOR TWO",
                  "deliveryTime": 43,
                  "minDeliveryTime": 43,
                  "maxDeliveryTime": 43,
                  "slaString": "43 MINS",
                  "lastMileTravel": 5.800000190734863,
                  "slugs": {
                    "restaurant": "enoki-jalvayu-towers-jalvayu-towers",
                    "city": "gurgaon"
                  },
                  "cityState": "2",
                  "address": "031, Lower Ground Floor, South Point Mall, Golf Course Road, Gurgaon",
                  "locality": "South Point Mall",
                  "parentId": 280006,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 5500,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 5500,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5500",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7343243~p=1~eid=00000189-1c8d-c421-2cea-226800c7010f~srvts=1688401200161",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "5.8 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "₹200 OFF",
                    "subHeader": "ABOVE ₹1300",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "344794",
                    "deliveryTime": 43,
                    "minDeliveryTime": 43,
                    "maxDeliveryTime": 43,
                    "lastMileTravel": 5.800000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.2",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },



red color background in mumbai, green in kolkata etc


cuisines is an array Lets correct them

cloudinary : cdn (all the images on the CDN)
react


real world data will be array of objects


const {} = resData?.data; "?" this is optional chaining

index.js:1 Warning: Each child in a list should have a unique "key" prop.
each of the list item should have a unique property or a key
whenever we are looping over an array or using map then we need to pass key

but why we need to pass key: same level components we are looping over, they need to have unique ids,
suppose there is a new restaurant that came in at the 1st place then DOM/React has to insert a new restaurant component in the 1st place
if there is no key then react will re-render all the cards and if it has the id then it know which one is the new restaurant and at what place we need to place this card
react will clean the container and re-render the cards if there is no key

it will take a performance hit if there is no key
some people also use indexes as the key: this logically look right, but React itself says that don't use it
index as a key is an anti-pattern

if we don't have a unique key then: ask your backend to send the id, or we can use index as a key, but not using key is not acceptable

not using keys (not acceptable) <<<< index as key (not recommended) <<<< unique key

render, re-rendering, render cycle
*/
