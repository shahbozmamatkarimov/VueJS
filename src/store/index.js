import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            count: 0,
            images: [
                {
                    "id": "102",
                    "author": "Ben Moore",
                    "width": 4320,
                    "height": 3240,
                    "url": "https://unsplash.com/photos/pJILiyPdrXI",
                    "download_url": "https://picsum.photos/id/102/4320/3240",
                    "country": "Aland Islands hj,dbham bdhasbndb  dsbhfha hadsfskjab dklsjabdadds fhabbbbbbbbbbds dhbansdfm,, heabkehdsghdb ",
                    "date": "13-05-2018"
                },
                {
                    "id": "103",
                    "author": "Ilham Rahmansyah",
                    "width": 2592,
                    "height": 1936,
                    "url": "https://unsplash.com/photos/DwTZwZYi9Ww",
                    "download_url": "https://picsum.photos/id/103/2592/1936",
                    "country": "Aland Islands",
                    "date": "22-05-2016"
                },
                {
                    "id": "104",
                    "author": "Dyaa Eldin",
                    "width": 3840,
                    "height": 2160,
                    "url": "https://unsplash.com/photos/2fl-ocJ5MOA",
                    "download_url": "https://picsum.photos/id/104/3840/2160",
                    "country": "Aland Islands",
                    "date": "28-10-2018"
                },
                {
                    "id": "106",
                    "author": "Arvee Marie",
                    "width": 2592,
                    "height": 1728,
                    "url": "https://unsplash.com/photos/YnfGtpt2gf4",
                    "download_url": "https://picsum.photos/id/106/2592/1728",
                    "country": "Aland Islands",
                    "date": "26-07-2017"
                },
                {
                    "id": "107",
                    "author": "Lukas Schweizer",
                    "width": 5000,
                    "height": 3333,
                    "url": "https://unsplash.com/photos/9VWOr22LhVI",
                    "download_url": "https://picsum.photos/id/107/5000/3333",
                    "country": "Aland Islands",
                    "date": "18-11-2016"
                },
                {
                    "id": "108",
                    "author": "Florian Klauer",
                    "width": 2000,
                    "height": 1333,
                    "url": "https://unsplash.com/photos/t1mqA3V3-7g",
                    "download_url": "https://picsum.photos/id/108/2000/1333",
                    "country": "Aland Islands",
                    "date": "15-05-2021"
                },
                {
                    "id": "109",
                    "author": "Zwaddi",
                    "width": 4287,
                    "height": 2392,
                    "url": "https://unsplash.com/photos/YvYBOSiBJE8",
                    "download_url": "https://picsum.photos/id/109/4287/2392",
                    "country": "Aland Islands",
                    "date": "07-08-2015"
                },
                {
                    "id": "110",
                    "author": "Kenneth Thewissen",
                    "width": 5000,
                    "height": 3333,
                    "url": "https://unsplash.com/photos/D76DklsG-5U",
                    "download_url": "https://picsum.photos/id/110/5000/3333",
                    "country": "Aland Islands",
                    "date": "05-01-2020"
                },
                {
                    "id": "111",
                    "author": "Gabe Rodriguez",
                    "width": 4400,
                    "height": 2656,
                    "url": "https://unsplash.com/photos/eLUegVAjN7s",
                    "download_url": "https://picsum.photos/id/111/4400/2656",
                    "country": "Aland Islands",
                    "date": "08-11-2017"
                },
                {
                    "id": "112",
                    "author": "Zugr",
                    "width": 4200,
                    "height": 2800,
                    "url": "https://unsplash.com/photos/kmF_Aq8gkp0",
                    "download_url": "https://picsum.photos/id/112/4200/2800",
                    "country": "Aland Islands",
                    "date": "28-09-2020"
                },
                {
                    "id": "113",
                    "author": "Zugr",
                    "width": 4168,
                    "height": 2464,
                    "url": "https://unsplash.com/photos/yZf1quatKCA",
                    "download_url": "https://picsum.photos/id/113/4168/2464",
                    "country": "Aland Islands",
                    "date": "13-05-2022"
                },
                {
                    "id": "114",
                    "author": "Brian Gonzalez",
                    "width": 3264,
                    "height": 2448,
                    "url": "https://unsplash.com/photos/llYg8Ni43fc",
                    "download_url": "https://picsum.photos/id/114/3264/2448",
                    "country": "Aland Islands",
                    "date": "19-01-2017"
                },
                {
                    "id": "115",
                    "author": "Christian Hebell",
                    "width": 1500,
                    "height": 1000,
                    "url": "https://unsplash.com/photos/A6S-q3D67Ss",
                    "download_url": "https://picsum.photos/id/115/1500/1000",
                    "country": "Aland Islands",
                    "date": "08-06-2019"
                },
                {
                    "id": "116",
                    "author": "Anton Sulsky",
                    "width": 3504,
                    "height": 2336,
                    "url": "https://unsplash.com/photos/YcfCXxo7rpc",
                    "download_url": "https://picsum.photos/id/116/3504/2336",
                    "country": "Aland Islands",
                    "date": "17-03-2015"
                },
                {
                    "id": "117",
                    "author": "Daniel Ebersole",
                    "width": 1544,
                    "height": 1024,
                    "url": "https://unsplash.com/photos/Q14J2k8VE3U",
                    "download_url": "https://picsum.photos/id/117/1544/1024",
                    "country": "Aland Islands",
                    "date": "26-04-2017"
                },
                {
                    "id": "118",
                    "author": "Rick Waalders",
                    "width": 1500,
                    "height": 1000,
                    "url": "https://unsplash.com/photos/d-Cr8MEW5Uc",
                    "download_url": "https://picsum.photos/id/118/1500/1000",
                    "country": "Aland Islands",
                    "date": "27-02-2022"
                },
                {
                    "id": "119",
                    "author": "Nadir Balcikli",
                    "width": 3264,
                    "height": 2176,
                    "url": "https://unsplash.com/photos/wE9nUW7tMmk",
                    "download_url": "https://picsum.photos/id/119/3264/2176",
                    "country": "Aland Islands",
                    "date": "17-12-2020"
                },
                {
                    "id": "120",
                    "author": "Guillaume",
                    "width": 4928,
                    "height": 3264,
                    "url": "https://unsplash.com/photos/_DA3D5P71qs",
                    "download_url": "https://picsum.photos/id/120/4928/3264",
                    "country": "Aland Islands",
                    "date": "19-04-2018"
                },
                {
                    "id": "121",
                    "author": "Radio Pink",
                    "width": 1600,
                    "height": 1067,
                    "url": "https://unsplash.com/photos/p-bkdO43shE",
                    "download_url": "https://picsum.photos/id/121/1600/1067",
                    "country": "Aland Islands",
                    "date": "27-03-2021"
                },
                {
                    "id": "122",
                    "author": "Vadim Sherbakov",
                    "width": 4147,
                    "height": 2756,
                    "url": "https://unsplash.com/photos/xS_RzdD5CFE",
                    "download_url": "https://picsum.photos/id/122/4147/2756",
                    "country": "Aland Islands",
                    "date": "21-11-2021"
                },
                {
                    "id": "123",
                    "author": "Mark Doda",
                    "width": 4928,
                    "height": 3264,
                    "url": "https://unsplash.com/photos/tS9hJOnmKK8",
                    "download_url": "https://picsum.photos/id/123/4928/3264",
                    "country": "Aland Islands",
                    "date": "08-02-2020"
                },
                {
                    "id": "124",
                    "author": "Anton Sulsky",
                    "width": 3504,
                    "height": 2336,
                    "url": "https://unsplash.com/photos/fj0tFloTPGQ",
                    "download_url": "https://picsum.photos/id/124/3504/2336",
                    "country": "Aland Islands",
                    "date": "11-02-2017"
                },
                {
                    "id": "125",
                    "author": "Rick Waalders",
                    "width": 1500,
                    "height": 1000,
                    "url": "https://unsplash.com/photos/3HlgJNdnD7I",
                    "download_url": "https://picsum.photos/id/125/1500/1000",
                    "country": "Aland Islands",
                    "date": "15-01-2020"
                },
                {
                    "id": "126",
                    "author": "Zugr",
                    "width": 4272,
                    "height": 2511,
                    "url": "https://unsplash.com/photos/asrWX-lU3RE",
                    "download_url": "https://picsum.photos/id/126/4272/2511",
                    "country": "Aland Islands",
                    "date": "04-11-2016"
                },
                {
                    "id": "127",
                    "author": "Marcin Czerwinski",
                    "width": 4032,
                    "height": 2272,
                    "url": "https://unsplash.com/photos/rf-0DQu5M6Y",
                    "download_url": "https://picsum.photos/id/127/4032/2272",
                    "country": "Aland Islands",
                    "date": "18-06-2018"
                },
                {
                    "id": "128",
                    "author": "Matteo Minelli",
                    "width": 3823,
                    "height": 2549,
                    "url": "https://unsplash.com/photos/hlnucYOsL-c",
                    "download_url": "https://picsum.photos/id/128/3823/2549",
                    "country": "Aland Islands",
                    "date": "20-10-2016"
                },
                {
                    "id": "129",
                    "author": "Charlie Foster",
                    "width": 4910,
                    "height": 3252,
                    "url": "https://unsplash.com/photos/A88emaZe7d8",
                    "download_url": "https://picsum.photos/id/129/4910/3252",
                    "country": "Aland Islands",
                    "date": "12-04-2021"
                },
                {
                    "id": "130",
                    "author": "Ryan Jacques",
                    "width": 3807,
                    "height": 2538,
                    "url": "https://unsplash.com/photos/ywiAen4L4qA",
                    "download_url": "https://picsum.photos/id/130/3807/2538",
                    "country": "Aland Islands",
                    "date": "10-09-2017"
                },
                {
                    "id": "131",
                    "author": "Charlie Foster",
                    "width": 4698,
                    "height": 3166,
                    "url": "https://unsplash.com/photos/yPaskTQiNjA",
                    "download_url": "https://picsum.photos/id/131/4698/3166",
                    "country": "Aland Islands",
                    "date": "25-11-2019"
                },
                {
                    "id": "132",
                    "author": "Peter Besser",
                    "width": 1600,
                    "height": 1066,
                    "url": "https://unsplash.com/photos/gq4kE8KRP8c",
                    "download_url": "https://picsum.photos/id/132/1600/1066",
                    "country": "Aland Islands",
                    "date": "22-11-2021"
                },
                {
                    "id": "133",
                    "author": "Dietmar Becker",
                    "width": 2742,
                    "height": 1828,
                    "url": "https://unsplash.com/photos/8Zt0xOOK4nI",
                    "download_url": "https://picsum.photos/id/133/2742/1828",
                    "country": "Aland Islands",
                    "date": "26-12-2020"
                },
                {
                    "id": "134",
                    "author": "Charlie Foster",
                    "width": 4928,
                    "height": 3264,
                    "url": "https://unsplash.com/photos/Osl4I3IS9Cw",
                    "download_url": "https://picsum.photos/id/134/4928/3264",
                    "country": "Aland Islands",
                    "date": "26-10-2016"
                },
                {
                    "id": "135",
                    "author": "Yuriy Khimanin",
                    "width": 2560,
                    "height": 1920,
                    "url": "https://unsplash.com/photos/o4H20aIIAt8",
                    "download_url": "https://picsum.photos/id/135/2560/1920",
                    "country": "Aland Islands",
                    "date": "17-04-2016"
                },
                {
                    "id": "136",
                    "author": "Marcin Czerwinski",
                    "width": 4032,
                    "height": 2272,
                    "url": "https://unsplash.com/photos/2wugfiddtXw",
                    "download_url": "https://picsum.photos/id/136/4032/2272",
                    "country": "Aland Islands",
                    "date": "08-05-2020"
                },
                {
                    "id": "137",
                    "author": "Vladimir Kramer",
                    "width": 4752,
                    "height": 3168,
                    "url": "https://unsplash.com/photos/xzZtV9ED5Bs",
                    "download_url": "https://picsum.photos/id/137/4752/3168",
                    "country": "Aland Islands",
                    "date": "26-08-2015"
                },
                {
                    "id": "139",
                    "author": "Steve Richey",
                    "width": 3465,
                    "height": 3008,
                    "url": "https://unsplash.com/photos/M-1MRfncLk0",
                    "download_url": "https://picsum.photos/id/139/3465/3008",
                    "country": "Aland Islands",
                    "date": "31-10-2017"
                },
                {
                    "id": "140",
                    "author": "Kundan Ramisetti",
                    "width": 2448,
                    "height": 2448,
                    "url": "https://unsplash.com/photos/Acfgb7bc-Bc",
                    "download_url": "https://picsum.photos/id/140/2448/2448",
                    "country": "Aland Islands",
                    "date": "23-01-2022"
                },
                {
                    "id": "141",
                    "author": "Greg Shield",
                    "width": 2048,
                    "height": 1365,
                    "url": "https://unsplash.com/photos/v9eNihIWh8k",
                    "download_url": "https://picsum.photos/id/141/2048/1365",
                    "country": "Aland Islands",
                    "date": "30-11-2015"
                },
                {
                    "id": "142",
                    "author": "Vadim Sherbakov",
                    "width": 4272,
                    "height": 2848,
                    "url": "https://unsplash.com/photos/KSyemQIWwP8",
                    "download_url": "https://picsum.photos/id/142/4272/2848",
                    "country": "Aland Islands",
                    "date": "04-12-2022"
                },
                {
                    "id": "143",
                    "author": "Steve Richey",
                    "width": 3600,
                    "height": 2385,
                    "url": "https://unsplash.com/photos/6xqAK6oAeHA",
                    "download_url": "https://picsum.photos/id/143/3600/2385",
                    "country": "Aland Islands",
                    "date": "11-07-2020"
                },
                {
                    "id": "144",
                    "author": "Mouly Kumar",
                    "width": 4912,
                    "height": 2760,
                    "url": "https://unsplash.com/photos/TuOiIpkIea8",
                    "download_url": "https://picsum.photos/id/144/4912/2760",
                    "country": "Aland Islands",
                    "date": "15-09-2017"
                },
                {
                    "id": "145",
                    "author": "Lucas Boesche",
                    "width": 4288,
                    "height": 2848,
                    "url": "https://unsplash.com/photos/VkuuTRkcRqw",
                    "download_url": "https://picsum.photos/id/145/4288/2848",
                    "country": "Aland Islands",
                    "date": "14-01-2015"
                },
                {
                    "id": "146",
                    "author": "Florian Klauer",
                    "width": 5000,
                    "height": 3333,
                    "url": "https://unsplash.com/photos/GG0jOrmwqtw",
                    "download_url": "https://picsum.photos/id/146/5000/3333",
                    "country": "Aland Islands",
                    "date": "20-09-2022"
                },
                {
                    "id": "147",
                    "author": "Kundan Ramisetti",
                    "width": 2448,
                    "height": 2448,
                    "url": "https://unsplash.com/photos/OODWPtfXAF0",
                    "download_url": "https://picsum.photos/id/147/2448/2448",
                    "country": "Aland Islands",
                    "date": "01-12-2016"
                },
                {
                    "id": "149",
                    "author": "Guillaume",
                    "width": 3454,
                    "height": 2288,
                    "url": "https://unsplash.com/photos/revxuIor0nY",
                    "download_url": "https://picsum.photos/id/149/3454/2288",
                    "country": "Aland Islands",
                    "date": "19-08-2020"
                },
                {
                    "id": "151",
                    "author": "Edoardo Loru",
                    "width": 4288,
                    "height": 3216,
                    "url": "https://unsplash.com/photos/xPfj_Kdcal4",
                    "download_url": "https://picsum.photos/id/151/4288/3216",
                    "country": "Aland Islands",
                    "date": "26-05-2015"
                },
                {
                    "id": "152",
                    "author": "Steven Spassov",
                    "width": 3888,
                    "height": 2592,
                    "url": "https://unsplash.com/photos/tVIqMgGlAG0",
                    "download_url": "https://picsum.photos/id/152/3888/2592",
                    "country": "Aland Islands",
                    "date": "14-11-2020"
                },
                {
                    "id": "153",
                    "author": "Charlie Foster",
                    "width": 4763,
                    "height": 3155,
                    "url": "https://unsplash.com/photos/xpkmxDGPz0Y",
                    "download_url": "https://picsum.photos/id/153/4763/3155",
                    "country": "Aland Islands",
                    "date": "17-05-2019"
                },
                {
                    "id": "154",
                    "author": "Christopher Sardegna",
                    "width": 3264,
                    "height": 2176,
                    "url": "https://unsplash.com/photos/x_jTtMOOMd4",
                    "download_url": "https://picsum.photos/id/154/3264/2176",
                    "country": "Aland Islands",
                    "date": "21-07-2022"
                },
                {
                    "id": "155",
                    "author": "Christopher Sardegna",
                    "width": 3264,
                    "height": 2176,
                    "url": "https://unsplash.com/photos/4f7r1LuPYj8",
                    "download_url": "https://picsum.photos/id/155/3264/2176",
                    "country": "Aland Islands",
                    "date": "20-01-2021"
                },
                {
                    "id": "156",
                    "author": "Christopher Sardegna",
                    "width": 2177,
                    "height": 3264,
                    "url": "https://unsplash.com/photos/iRyGmA_no2Q",
                    "download_url": "https://picsum.photos/id/156/2177/3264",
                    "country": "Aland Islands",
                    "date": "09-06-2020"
                },
                {
                    "id": "157",
                    "author": "koichi nakajima",
                    "width": 5000,
                    "height": 3914,
                    "url": "https://unsplash.com/photos/HFbRnCjWHsk",
                    "download_url": "https://picsum.photos/id/157/5000/3914",
                    "country": "Aland Islands",
                    "date": "27-03-2017"
                },
                {
                    "id": "158",
                    "author": "Daniel Robert",
                    "width": 4836,
                    "height": 3224,
                    "url": "https://unsplash.com/photos/MRxD-J9-4ps",
                    "download_url": "https://picsum.photos/id/158/4836/3224",
                    "country": "Aland Islands",
                    "date": "07-01-2019"
                },
                {
                    "id": "159",
                    "author": "Shyamanta Baruah",
                    "width": 5000,
                    "height": 2460,
                    "url": "https://unsplash.com/photos/kxqvE41_07k",
                    "download_url": "https://picsum.photos/id/159/5000/2460",
                    "country": "Aland Islands",
                    "date": "30-06-2018"
                },
                {
                    "id": "160",
                    "author": "Thom",
                    "width": 3200,
                    "height": 2119,
                    "url": "https://unsplash.com/photos/Zdcq3iKly6g",
                    "download_url": "https://picsum.photos/id/160/3200/2119",
                    "country": "Aland Islands",
                    "date": "12-06-2021"
                },
                {
                    "id": "161",
                    "author": "Chloe Benko-Prieur",
                    "width": 4240,
                    "height": 2832,
                    "url": "https://unsplash.com/photos/ti4uz330CwU",
                    "download_url": "https://picsum.photos/id/161/4240/2832",
                    "country": "Aland Islands",
                    "date": "08-08-2015"
                },
                {
                    "id": "162",
                    "author": "Dillon McIntosh",
                    "width": 1500,
                    "height": 998,
                    "url": "https://unsplash.com/photos/SlGVAKyP20U",
                    "download_url": "https://picsum.photos/id/162/1500/998",
                    "country": "Aland Islands",
                    "date": "28-03-2018"
                },
                {
                    "id": "163",
                    "author": "Linh Nguyen",
                    "width": 2000,
                    "height": 1333,
                    "url": "https://unsplash.com/photos/oFAVqfTSby8",
                    "download_url": "https://picsum.photos/id/163/2000/1333",
                    "country": "Aland Islands",
                    "date": "13-02-2020"
                },
                {
                    "id": "164",
                    "author": "Linh Nguyen",
                    "width": 1200,
                    "height": 800,
                    "url": "https://unsplash.com/photos/agkblvPff5U",
                    "download_url": "https://picsum.photos/id/164/1200/800",
                    "country": "Aland Islands",
                    "date": "06-10-2018"
                },
                {
                    "id": "165",
                    "author": "Linh Nguyen",
                    "width": 2000,
                    "height": 1333,
                    "url": "https://unsplash.com/photos/xjXz8GKXcTI",
                    "download_url": "https://picsum.photos/id/165/2000/1333",
                    "country": "Aland Islands",
                    "date": "14-08-2019"
                },
                {
                    "id": "166",
                    "author": "Romain Briaux",
                    "width": 1280,
                    "height": 720,
                    "url": "https://unsplash.com/photos/yD3PXDV7Sjc",
                    "download_url": "https://picsum.photos/id/166/1280/720",
                    "country": "Aland Islands",
                    "date": "11-01-2021"
                },
                {
                    "id": "167",
                    "author": "petradr",
                    "width": 2896,
                    "height": 1944,
                    "url": "https://unsplash.com/photos/WqK_xV_hbug",
                    "download_url": "https://picsum.photos/id/167/2896/1944",
                    "country": "Aland Islands",
                    "date": "10-08-2018"
                },
                {
                    "id": "168",
                    "author": "Joeri Römer",
                    "width": 1920,
                    "height": 1280,
                    "url": "https://unsplash.com/photos/Xne1N4yZuOY",
                    "download_url": "https://picsum.photos/id/168/1920/1280",
                    "country": "Aland Islands",
                    "date": "12-01-2019"
                },
                {
                    "id": "169",
                    "author": "Noel Lopez",
                    "width": 2500,
                    "height": 1662,
                    "url": "https://unsplash.com/photos/BjelfpszQDw",
                    "download_url": "https://picsum.photos/id/169/2500/1662",
                    "country": "Aland Islands",
                    "date": "11-07-2019"
                },
                {
                    "id": "170",
                    "author": "Noel Lopez",
                    "width": 2500,
                    "height": 1667,
                    "url": "https://unsplash.com/photos/LbS_k_c3BYA",
                    "download_url": "https://picsum.photos/id/170/2500/1667",
                    "country": "Aland Islands",
                    "date": "08-06-2021"
                },
                {
                    "id": "171",
                    "author": "Riley Briggs",
                    "width": 2048,
                    "height": 1536,
                    "url": "https://unsplash.com/photos/cSe3oKQ03OQ",
                    "download_url": "https://picsum.photos/id/171/2048/1536",
                    "country": "Aland Islands",
                    "date": "07-02-2017"
                },
                {
                    "id": "172",
                    "author": "Aleksi Tappura",
                    "width": 2000,
                    "height": 1325,
                    "url": "https://unsplash.com/photos/TQeX8khR54I",
                    "download_url": "https://picsum.photos/id/172/2000/1325",
                    "country": "Aland Islands",
                    "date": "13-12-2021"
                },
                {
                    "id": "173",
                    "author": "Linh Nguyen",
                    "width": 1200,
                    "height": 737,
                    "url": "https://unsplash.com/photos/J8k-gzI0Zy0",
                    "download_url": "https://picsum.photos/id/173/1200/737",
                    "country": "Aland Islands",
                    "date": "30-10-2022"
                },
                {
                    "id": "174",
                    "author": "Linh Nguyen",
                    "width": 1600,
                    "height": 589,
                    "url": "https://unsplash.com/photos/YYegjUYIVeg",
                    "download_url": "https://picsum.photos/id/174/1600/589",
                    "country": "Aland Islands",
                    "date": "27-02-2018"
                },
                {
                    "id": "175",
                    "author": "petradr",
                    "width": 2896,
                    "height": 1944,
                    "url": "https://unsplash.com/photos/8hgm6mKK04U",
                    "download_url": "https://picsum.photos/id/175/2896/1944",
                    "country": "Aland Islands",
                    "date": "02-12-2019"
                },
                {
                    "id": "176",
                    "author": "Good Free Photos",
                    "width": 2500,
                    "height": 1662,
                    "url": "https://unsplash.com/photos/WO4bxwzHRe8",
                    "download_url": "https://picsum.photos/id/176/2500/1662",
                    "country": "Aland Islands",
                    "date": "02-06-2020"
                },
                {
                    "id": "177",
                    "author": "Danka & Peter",
                    "width": 2515,
                    "height": 1830,
                    "url": "https://unsplash.com/photos/tvicgTdh7Fg",
                    "download_url": "https://picsum.photos/id/177/2515/1830",
                    "country": "Aland Islands",
                    "date": "03-10-2018"
                },
                {
                    "id": "178",
                    "author": "Thanun Buranapong",
                    "width": 2592,
                    "height": 1936,
                    "url": "https://unsplash.com/photos/JbeBraLha7U",
                    "download_url": "https://picsum.photos/id/178/2592/1936",
                    "country": "Aland Islands",
                    "date": "22-05-2016"
                },
                {
                    "id": "179",
                    "author": "Angelina Odemchuk",
                    "width": 2048,
                    "height": 1365,
                    "url": "https://unsplash.com/photos/lp0IFw6YqZg",
                    "download_url": "https://picsum.photos/id/179/2048/1365",
                    "country": "Aland Islands",
                    "date": "15-09-2018"
                },
                {
                    "id": "180",
                    "author": "Galymzhan Abdugalimov",
                    "width": 2400,
                    "height": 1600,
                    "url": "https://unsplash.com/photos/ICW6QYOcdlg",
                    "download_url": "https://picsum.photos/id/180/2400/1600",
                    "country": "Aland Islands",
                    "date": "09-01-2018"
                },
                {
                    "id": "181",
                    "author": "Nick Turner",
                    "width": 1920,
                    "height": 1189,
                    "url": "https://unsplash.com/photos/0EjvnhOkPLM",
                    "download_url": "https://picsum.photos/id/181/1920/1189",
                    "country": "Aland Islands",
                    "date": "21-02-2018"
                },
                {
                    "id": "182",
                    "author": "Andrea Boldizsar",
                    "width": 2896,
                    "height": 1944,
                    "url": "https://unsplash.com/photos/BwgKUh9tN84",
                    "download_url": "https://picsum.photos/id/182/2896/1944",
                    "country": "Aland Islands",
                    "date": "06-07-2017"
                },
                {
                    "id": "183",
                    "author": "müllermarc",
                    "width": 2316,
                    "height": 1544,
                    "url": "https://unsplash.com/photos/k7bQqdUf954",
                    "download_url": "https://picsum.photos/id/183/2316/1544",
                    "country": "Aland Islands",
                    "date": "16-10-2016"
                },
                {
                    "id": "184",
                    "author": "Tim de Groot",
                    "width": 4288,
                    "height": 2848,
                    "url": "https://unsplash.com/photos/yNGQ830uFB4",
                    "download_url": "https://picsum.photos/id/184/4288/2848",
                    "country": "Aland Islands",
                    "date": "09-02-2022"
                },
                {
                    "id": "185",
                    "author": "Tim de Groot",
                    "width": 3995,
                    "height": 2662,
                    "url": "https://unsplash.com/photos/M_eB1UjE0do",
                    "download_url": "https://picsum.photos/id/185/3995/2662",
                    "country": "Aland Islands",
                    "date": "25-10-2015"
                },
                {
                    "id": "186",
                    "author": "Simon Pape",
                    "width": 2048,
                    "height": 1275,
                    "url": "https://unsplash.com/photos/2kc8bigeqEI",
                    "download_url": "https://picsum.photos/id/186/2048/1275",
                    "country": "Aland Islands",
                    "date": "26-01-2022"
                },
                {
                    "id": "187",
                    "author": "Andre Koch",
                    "width": 4000,
                    "height": 2667,
                    "url": "https://unsplash.com/photos/oSf8ePoG9NU",
                    "download_url": "https://picsum.photos/id/187/4000/2667",
                    "country": "Aland Islands",
                    "date": "06-04-2016"
                },
                {
                    "id": "188",
                    "author": "Wojtek Witkowski",
                    "width": 2896,
                    "height": 1936,
                    "url": "https://unsplash.com/photos/1fpyA_z2woY",
                    "download_url": "https://picsum.photos/id/188/2896/1936",
                    "country": "Aland Islands",
                    "date": "17-09-2016"
                },
                {
                    "id": "189",
                    "author": "Buzo Jesús",
                    "width": 2048,
                    "height": 1536,
                    "url": "https://unsplash.com/photos/pHM4a_RZSLE",
                    "download_url": "https://picsum.photos/id/189/2048/1536",
                    "country": "Aland Islands",
                    "date": "15-06-2022"
                },
                {
                    "id": "190",
                    "author": "James Forbes",
                    "width": 2048,
                    "height": 1365,
                    "url": "https://unsplash.com/photos/jrzvClypPq8",
                    "download_url": "https://picsum.photos/id/190/2048/1365",
                    "country": "Aland Islands",
                    "date": "03-12-2017"
                },
                {
                    "id": "191",
                    "author": "Alex Talmon",
                    "width": 2560,
                    "height": 1707,
                    "url": "https://unsplash.com/photos/6iat9p85VnQ",
                    "download_url": "https://picsum.photos/id/191/2560/1707",
                    "country": "Aland Islands",
                    "date": "09-01-2017"
                },
                {
                    "id": "192",
                    "author": "Adam Przewoski",
                    "width": 2352,
                    "height": 2352,
                    "url": "https://unsplash.com/photos/umchkHwkdyM",
                    "download_url": "https://picsum.photos/id/192/2352/2352",
                    "country": "Aland Islands",
                    "date": "24-07-2022"
                },
                {
                    "id": "193",
                    "author": "Vadim Sherbakov",
                    "width": 3578,
                    "height": 2451,
                    "url": "https://unsplash.com/photos/d6ebY-faOO0",
                    "download_url": "https://picsum.photos/id/193/3578/2451",
                    "country": "Aland Islands",
                    "date": "09-05-2022"
                },
                {
                    "id": "194",
                    "author": "Aleksi Tappura",
                    "width": 2000,
                    "height": 1325,
                    "url": "https://unsplash.com/photos/hVOv8me9ue8",
                    "download_url": "https://picsum.photos/id/194/2000/1325",
                    "country": "Aland Islands",
                    "date": "04-04-2020"
                },
                {
                    "id": "195",
                    "author": "Matthew Skinner",
                    "width": 768,
                    "height": 1024,
                    "url": "https://unsplash.com/photos/t05kfHeygbE",
                    "download_url": "https://picsum.photos/id/195/768/1024",
                    "country": "Aland Islands",
                    "date": "18-11-2018"
                },
                {
                    "id": "196",
                    "author": "Dyaa Eldin Moustafa",
                    "width": 2048,
                    "height": 1536,
                    "url": "https://unsplash.com/photos/mR_HR8NZwg8",
                    "download_url": "https://picsum.photos/id/196/2048/1536",
                    "country": "Aland Islands",
                    "date": "15-10-2017"
                },
                {
                    "id": "197",
                    "author": "Kholodnitskiy Maksim",
                    "width": 4272,
                    "height": 2848,
                    "url": "https://unsplash.com/photos/n6TWNDfyPwk",
                    "download_url": "https://picsum.photos/id/197/4272/2848",
                    "country": "Aland Islands",
                    "date": "17-09-2017"
                },
                {
                    "id": "198",
                    "author": "Sylwia Bartyzel",
                    "width": 3456,
                    "height": 2304,
                    "url": "https://unsplash.com/photos/FC9mIjVT-Yw",
                    "download_url": "https://picsum.photos/id/198/3456/2304",
                    "country": "Aland Islands",
                    "date": "28-09-2015"
                },
                {
                    "id": "199",
                    "author": "Beto Galetto",
                    "width": 2592,
                    "height": 1728,
                    "url": "https://unsplash.com/photos/RL0l7Zk5PxU",
                    "download_url": "https://picsum.photos/id/199/2592/1728",
                    "country": "Aland Islands",
                    "date": "28-06-2017"
                },
                {
                    "id": "200",
                    "author": "Elias Carlsson",
                    "width": 1920,
                    "height": 1280,
                    "url": "https://unsplash.com/photos/wSb8d-ke5-4",
                    "download_url": "https://picsum.photos/id/200/1920/1280",
                    "country": "Aland Islands",
                    "date": "05-10-2021"
                },
                {
                    "id": "201",
                    "author": "Craig Garner",
                    "width": 5000,
                    "height": 3333,
                    "url": "https://unsplash.com/photos/YoadQb46v6k",
                    "download_url": "https://picsum.photos/id/201/5000/3333",
                    "country": "Aland Islands",
                    "date": "14-06-2017"
                },
                {
                    "id": "202",
                    "author": "Glen Carrie",
                    "width": 2392,
                    "height": 1260,
                    "url": "https://unsplash.com/photos/xlAmGyZE7Zg",
                    "download_url": "https://picsum.photos/id/202/2392/1260",
                    "country": "Aland Islands",
                    "date": "12-09-2022"
                },
                {
                    "id": "203",
                    "author": "Diogo Tavares",
                    "width": 4032,
                    "height": 3024,
                    "url": "https://unsplash.com/photos/PFZTiiJnjag",
                    "download_url": "https://picsum.photos/id/203/4032/3024",
                    "country": "Aland Islands",
                    "date": "18-05-2019"
                },
                {
                    "id": "204",
                    "author": "Tiago Gerken",
                    "width": 5000,
                    "height": 3333,
                    "url": "https://unsplash.com/photos/vCqmY3bfqfo",
                    "download_url": "https://picsum.photos/id/204/5000/3333",
                    "country": "Aland Islands",
                    "date": "19-03-2022"
                },
                {
                    "id": "206",
                    "author": "Philipp Reiner",
                    "width": 2880,
                    "height": 1800,
                    "url": "https://unsplash.com/photos/qPJ6eRAMmCM",
                    "download_url": "https://picsum.photos/id/206/2880/1800",
                    "country": "Aland Islands",
                    "date": "20-08-2019"
                }
            ],
            filter1: [],
            input: '',
            title: 'Products',
            navbar: false,
        };
    },
    mutations: {
        search(state) {
            state.filter1 = [];
            if (state.title == ' Trending') {
                state.images.filter(img => {
                    if (img.width > 4500) {
                        state.filter1.push(img);
                    }
                });
            }

            else if (state.title == ' New') {
                state.images.filter(img => {
                    let date = img.date.split('-');
                    if (date[2] >= 2022 && parseInt(date[0]) > 1 && parseInt(date[1]) > 1) {
                        state.filter1.push(img);
                    }
                });
            } else if (state.title == ' Products') {
                state.filter1 = state.images;
            } else {
                state.filter1 = state.images;
            }

            if (state.input) {
                const filter2 = state.filter1
                state.filter1 = [];
                filter2.filter(img => {
                    if (img.author.toLowerCase().match(state.input.toLowerCase())) {
                        state.filter1.push(img);
                    }
                });
            }
        },

        welcome(state) {
            state.filter1 = state.images;
        },

        posts() {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(res => res.json())
                .then(post => console.log(post))
        },
    },
})

export default store