const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/finalprojectApp", (err) => {
    if (!err) return console.log("db connected");
    console.log(err);
});

const fruit = require("../models/fruits");

const fruits = [
    new fruit({
        type:"fruits",
        src: "https://png.pngtree.com/png-vector/20210713/ourlarge/pngtree-organic-guava-fruit-png-image_3591750.jpg",
        name: "Guava",
        desc: "Guava is an excellent source of dietary fibe and the ultimate superfood with the highest concentration of antioxidants",
        price: 12,
        offer:0,

        quantity: 5
    }),
    new fruit({
        type:"fruits",
        src: "https://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg",
        name: "Apple",
        desc: "apples, crisped to perfection. With a crisp and delicious taste and no added sugar, preservatives or anything extra, kids will love these",
        price: 13,
        offer:0,

        quantity: 5

    }),

    new fruit({
        type:"fruits",

        src: "https://produits.bienmanger.com/30249-0w470h470_Fresh_Oranges_From_Spain.jpg",
        name: "Orange",
        desc: "Organic is a delicious and nutritious fruit that is packed with vitamins and minerals. Grown without the use of synthetic pesticides or fertilizers",
        price: 13,
        offer:10,

        quantity: 7
    }),

    new fruit({
        type:"fruits",

        src: "https://bjs.scene7.com/is/image/bjs/28378?$bjs-Zoom$",
        name: "Banana",
        desc: "dried Organic Banana is prepared from sound, properly ripened fruit which has been dried to the specified moisture range, washed",
        price: 13,
        offer:0,

        quantity: 7

    }),

    new fruit({
        type:"fruits",

        src: "https://images.albertsons-media.com/is/image/ABS/184700047?$ng-ecom-pdp-mobile$&defaultImage=Not_Available",
        name: "pear",
        desc: "Pears are native to Asia and Europe. Mildly sweet and rich in flavor pears offer crunchiness of apples yet juicy as peach and nectarine.",
        price: 19,
        offer:30,

        quantity: 4


    }),

    new fruit({
        type:"fruits",

        src: "https://metropolitan-market.com/wp-content/uploads/2018/07/local-peaches-peach-o-rama-metropolitan-market.jpg  ",
        name: "peach",
        desc: "Peaches store a broad range of nutrients such as vitamin A, beta-carotene, and vitamin C. They are also a good source of vitamin E, vitamin K, vitamin B1, vitamin B2, vitamin B3, vitamin B-6, folate, and pantothenic acid",
        price: 13,
        offer:0,

        quantity: 4


    }),

    new fruit({
        type:"fruits",

        src: "https://media.istockphoto.com/id/179246843/photo/fresh-apricots-isolated-on-white.jpg?s=612x612&w=0&k=20&c=DbRsLTOMHcFA3qnPu8Ueqqv-i3ZPtKkzP_cX_AUnSCg=",
        name: "apricot",
        desc: "apricots are organic, grown and processed without any artificial inputs; have no added sugar or preservatives",
        price: 19,
        offer:0,

        quantity: 7


    }),

    new fruit({
        type:"fruits",

        src: "https://media.istockphoto.com/id/471878331/photo/red-plum-fruit.jpg?s=612x612&w=0&k=20&c=DqJBfM3T_aA9es3WTimQjNe7GumY6kW1R3_n7mEsfyM=",
        name: "plum",
        desc: "excellent antioxidant, promote digestive health, have a low glycemic index",
        price: 19,
        offer:0,

        quantity: 7


    }),

    new fruit({
        type:"fruits",

        src: "https://media.istockphoto.com/id/482728017/photo/kiwi.jpg?s=612x612&w=0&k=20&c=bBHFCNDXhcD2zRc6YmkrZu6ytTwMUeSRRdM1VVc1Dog=",
        name: "kiwi",
        desc: " Kiwis have more Vitamin C than citrus and can be used in marinades as a meat tenderizer",
        price: 19,
        offer:20,

        quantity: 7


    }),

    new fruit({
        type:"fruits",

        src: "https://media.istockphoto.com/id/869246292/photo/fresh-pineapple-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=IZBgmcmY9Dg_PEkqzqwPPDyAilJ8R3vtYZwzTz6oiEw=",
        name: "pineapple",
        desc: " free of artificial or synthetic fertilizers and full of unforgettable, great tasting flavor. ",
        price: 19,
        offer:0,

        quantity: 5


    }),

    new fruit({
        type:"fruits",

        src: "https://cdn.shopify.com/s/files/1/0104/1059/0266/products/water-melon_large_a5014e18-0b00-4481-98e1-04ae9bad0122.jpg?v=1566981123",
        name: "watermelon",
        desc: "Watermelon consists mostly of water (91%) and carbs (7.5%). It provides almost no protein or fat and is very low in calories. ",
        price: 19,
        offer:0,

        quantity: 6


    }),

    new fruit({
        type:"fruits",

        src: "https://media.istockphoto.com/id/177097147/photo/grape.jpg?s=612x612&w=0&k=20&c=vKKl23mgTg4J2C6ZXHTdh5vfRDVqQLZp5E-EnZEB6C0=",
        name: "grapes",
        desc: "eating fresh grapes may prevent the accumulation of harmful oxidized cholesterol as well as the development of atherosclerotic lesions.",
        price: 14,
        offer:30,

        quantity: 8


    }),

    new fruit({
        type:"fruits",

        src: "https://media.istockphoto.com/id/672122684/photo/fresh-avocado-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bjK8AmG0yRswdRg_WpiCfvr0J6uQk7NZRZy6tte8E4E=",
        name: "avocado",
        desc: "Avocados are known for their rich, nutty flavor and creamy texture. Not only are they delicious but they are also deliver health benefits because they are high in good fats",
        price: 12,
        offer:0,

        quantity: 7


    }),


    new fruit({
        type:"fruits",

        src: "https://tusupertogo.com/wp-content/uploads/2020/05/22203.jpg",
        name: "blueberry",
        desc: "Organic Blueberries are fleshy fruits with a bit of acid taste, bluish-black color and small size",
        price: 17,
        offer:0,

        quantity: 7


    }),

    new fruit({
        type:"fruits",

        src: "https://www.newdirectionsaromatics.ca/images/products/main/PricklypearCO_v1.jpg",
        name: "prickly pear",
        desc: "It's high in fiber, antioxidants and carotenoids. ",
        price: 19,
        offer:0,

        quantity: 7


    }),

    new fruit({
        type:"fruits",

        src: "https://media.istockphoto.com/id/1156644825/photo/coco-coconut-with-half-and-leaves-isolated-on-white-background-image.jpg?s=612x612&w=0&k=20&c=-xL7WMGBfePlCvDo9i9-RlWD_xM12f1Au0YiFYzqpXY=",
        name: "coconut",
        desc: "Coconut contains potassium, magnesium, and sodium, which are all essential for regulating your body's water content as well as many heart, ...",
        price: 16,
        offer:0,

        quantity: 7


    }),

    new fruit({
        type:"fruits",

        src: "https://produits.bienmanger.com/33591-0w470h470_Organic_Fresh_Mango.jpg ",
        name: "mango",
        desc: "They are a great source of magnesium and potassium, both of which are connected to lower blood pressure and a regular pulse.",
        price: 19,
        offer:20,

        quantity: 7


    }),

    new fruit({
        type:"fruits",

        src: "https://target.scene7.com/is/image/Target/GUEST_95c6384a-7d40-4b61-8198-3d6a1598af5f?wid=488&hei=488&fmt=pjpeg  ",
        name: "Strawberry",
        desc: "Strawberries are good for your whole body. They naturally deliver vitamins, fiber, and particularly high levels of antioxidants known as polyphenols ",
        price: 16,
        offer:0,

        quantity: 12


    }),

    new fruit({
        type:"fruits",

        src: "https://media.istockphoto.com/id/157665528/photo/fresh-tangerine.jpg?s=612x612&w=0&k=20&c=NwGBR1LVybYconhGt5I3KYbec7aWK1bQzr98PmSDTlw=",
        name: "mandarin",
        desc: "Mandarin have even more beta-carotene and beta-cryptoxanthin than common oranges, making them excellent additions to your diet",
        price: 13,
        offer:0,

        quantity: 9


    }),

    new fruit({
        type:"fruits",

        src: "https://cdn.shopify.com/s/files/1/0104/1059/0266/products/pomegranate.png?v=1541589453",
        name: "pomegranate",
        desc: "Pomegranates are rich in antioxidants and flavonoids, both of which are known to prevent free radicals from damaging your cells",
        price: 18,
        offer:0,

        quantity: 4


    }),

    new fruit({
        type:"fruits",

        src: "https://media.istockphoto.com/id/464387287/photo/bunch-of-cherries.jpg?s=612x612&w=0&k=20&c=nL3BAsDDKN24jriZexcCsRAA3Q62mBsy4ORSPOG5_sk=",
        name: "Cherry",
        desc: "Cherries are rich in antioxidants. These are natural chemicals that can help your body deal with day-to-day damage to your cells. The havoc may come from normal metabolism, inflammation, exercise, smoking, pollution, or radiation. Some studies show that both sweet and tart cherries help reduce this damage.",
        price: 20,
        offer:0,

        quantity: 90


    }),
]

var num=0;
for (var i=0 ;i<fruits.length; i++){
    console.log(i);
    fruits[i].save((error,data)=>{
        if(!error){
        console.log(data);
        num++;
        if(num===fruits.length){
            mongoose.disconnect();
        }
    
    }else{
        console.log(error);
    }
        
    })
}