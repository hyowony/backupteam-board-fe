const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieParser());

const users = [{ id: "noggong", password: "1234" }];

app.get("/", (req, res) => {
  console.log(req.cookieparser);
  console.log("hello routing");
  const id = req.body.id;
  const password = req.body.password;

  const user = users.find(
    (user) => user.id === id && password === user.password
  );

  if (!user) {
    return res.status(404).json({ result: "not found" });
  }

  res.cookie("user_id", user.id);
  res.send({ result: "okay" });
});

const articles = [
  {
    id: 1,
    name: "Wanda Embery",
    email: "wembery0@aboutads.info",
    password: "qqpk5d8iY",
    created_at: "2022-12-15T23:12:45Z",
  },
  {
    id: 2,
    name: "Hayes Farquhar",
    email: "hfarquhar1@symantec.com",
    password: "JSFSK0H1TL",
    created_at: "2022-05-11T19:33:50Z",
  },
  {
    id: 3,
    name: "Austine Derkes",
    email: "aderkes2@webs.com",
    password: "ypXI8Z",
    created_at: "2022-02-16T01:13:02Z",
  },
  {
    id: 4,
    name: "Paige Seelbach",
    email: "pseelbach3@house.gov",
    password: "Xe4QZX",
    created_at: "2022-05-16T01:58:34Z",
  },
  {
    id: 5,
    name: "Elfie Coumbe",
    email: "ecoumbe4@odnoklassniki.ru",
    password: "VUEDnbu2X",
    created_at: "2022-01-22T12:20:35Z",
  },
  {
    id: 6,
    name: "Zared Isaacs",
    email: "zisaacs5@alexa.com",
    password: "DMaHmKdT1L",
    created_at: "2022-10-10T23:00:28Z",
  },
  {
    id: 7,
    name: "Ruthann Major",
    email: "rmajor6@alexa.com",
    password: "TCmjlqVoGhAO",
    created_at: "2022-03-11T18:35:11Z",
  },
  {
    id: 8,
    name: "Kristyn Fowell",
    email: "kfowell7@baidu.com",
    password: "D4sxoOCMM49N",
    created_at: "2022-03-13T09:26:33Z",
  },
  {
    id: 9,
    name: "Jessalin Ramsier",
    email: "jramsier8@blinklist.com",
    password: "0Iaj8kdpJuS",
    created_at: "2022-10-03T17:39:54Z",
  },
  {
    id: 10,
    name: "Regan Capelow",
    email: "rcapelow9@dot.gov",
    password: "M4KZR9VEqT",
    created_at: "2022-11-10T21:08:57Z",
  },
  {
    id: 11,
    name: "Anthe Bulbrook",
    email: "abulbrooka@dot.gov",
    password: "lH9wATmDOI3B",
    created_at: "2022-07-15T08:38:55Z",
  },
  {
    id: 12,
    name: "Mischa Van Velden",
    email: "mvanb@behance.net",
    password: "nMGTXXzupv",
    created_at: "2022-04-02T10:56:51Z",
  },
  {
    id: 13,
    name: "Lamont Delamere",
    email: "ldelamerec@seesaa.net",
    password: "JHRMWT",
    created_at: "2022-09-08T03:09:50Z",
  },
  {
    id: 14,
    name: "Hortensia Wardingly",
    email: "hwardinglyd@usa.gov",
    password: "4lMwQ5JJRVma",
    created_at: "2022-05-06T11:43:30Z",
  },
  {
    id: 15,
    name: "Homer Reany",
    email: "hreanye@craigslist.org",
    password: "1PicZmYN",
    created_at: "2022-03-08T14:39:58Z",
  },
  {
    id: 16,
    name: "Britt Wroath",
    email: "bwroathf@vinaora.com",
    password: "E8PCJ0DOj8B",
    created_at: "2022-03-24T21:06:30Z",
  },
  {
    id: 17,
    name: "Rubi Fucher",
    email: "rfucherg@imageshack.us",
    password: "rdOs1gWDw",
    created_at: "2022-07-01T23:16:54Z",
  },
  {
    id: 18,
    name: "Stanleigh Willeson",
    email: "swillesonh@de.vu",
    password: "cVxWwiz",
    created_at: "2022-10-14T23:28:17Z",
  },
  {
    id: 19,
    name: "Jessalyn Crighten",
    email: "jcrighteni@google.nl",
    password: "PngGGH0XY",
    created_at: "2022-07-12T19:54:06Z",
  },
  {
    id: 20,
    name: "Linet MacElroy",
    email: "lmacelroyj@elegantthemes.com",
    password: "UZxrNfBp5qt",
    created_at: "2022-09-20T19:46:39Z",
  },
  {
    id: 21,
    name: "Meaghan Gunner",
    email: "mgunnerk@mayoclinic.com",
    password: "rCPdur0ljmO",
    created_at: "2022-12-31T19:06:06Z",
  },
  {
    id: 22,
    name: "Danica Shuttell",
    email: "dshuttelll@ed.gov",
    password: "OY1c7A",
    created_at: "2022-06-01T02:57:10Z",
  },
  {
    id: 23,
    name: "Lorie Reuble",
    email: "lreublem@sakura.ne.jp",
    password: "DY7hLG0ZStV",
    created_at: "2022-08-30T04:00:32Z",
  },
  {
    id: 24,
    name: "Davidson Putson",
    email: "dputsonn@psu.edu",
    password: "WSe4fBx",
    created_at: "2022-10-30T08:00:15Z",
  },
  {
    id: 25,
    name: "Kelley Kentish",
    email: "kkentisho@nih.gov",
    password: "PZUUdjB",
    created_at: "2022-07-29T04:09:24Z",
  },
  {
    id: 26,
    name: "La verne Lafford",
    email: "lvernep@prlog.org",
    password: "HgjdSaf",
    created_at: "2022-04-24T00:12:13Z",
  },
  {
    id: 27,
    name: "Darin Tabbernor",
    email: "dtabbernorq@ox.ac.uk",
    password: "W3DoXeZPFP",
    created_at: "2022-06-03T17:47:26Z",
  },
  {
    id: 28,
    name: "Babita McLaggan",
    email: "bmclagganr@symantec.com",
    password: "76jnE0cknQ",
    created_at: "2022-08-07T11:10:46Z",
  },
  {
    id: 29,
    name: "Jordon Delves",
    email: "jdelvess@theatlantic.com",
    password: "RfzINh",
    created_at: "2022-04-11T15:35:52Z",
  },
  {
    id: 30,
    name: "Frederico Grigs",
    email: "fgrigst@amazon.com",
    password: "cNjS7IpqYk",
    created_at: "2022-07-22T09:35:37Z",
  },
  {
    id: 31,
    name: "Rakel Giercke",
    email: "rgierckeu@weather.com",
    password: "lzPvd5Awy9O0",
    created_at: "2022-12-03T07:41:00Z",
  },
  {
    id: 32,
    name: "Tracy Praill",
    email: "tpraillv@tinypic.com",
    password: "gmQKE2V",
    created_at: "2022-07-03T10:52:30Z",
  },
  {
    id: 33,
    name: "Alysia Baynton",
    email: "abayntonw@ca.gov",
    password: "VThC9WupE",
    created_at: "2022-05-27T09:27:56Z",
  },
  {
    id: 34,
    name: "Crosby Gentric",
    email: "cgentricx@amazon.com",
    password: "ovdXZDmazLz",
    created_at: "2022-02-05T23:26:14Z",
  },
  {
    id: 35,
    name: "Abbie Bottrell",
    email: "abottrelly@comsenz.com",
    password: "BVhC3kfel5q",
    created_at: "2022-10-29T03:37:22Z",
  },
  {
    id: 36,
    name: "Claudina Spellard",
    email: "cspellardz@123-reg.co.uk",
    password: "pRAMkr",
    created_at: "2022-09-10T07:05:48Z",
  },
  {
    id: 37,
    name: "Melamie Cotta",
    email: "mcotta10@forbes.com",
    password: "6pZNij10hnXK",
    created_at: "2022-03-12T10:00:17Z",
  },
  {
    id: 38,
    name: "Demetrius Cowpertwait",
    email: "dcowpertwait11@squarespace.com",
    password: "eeLQ3p",
    created_at: "2022-02-06T22:18:22Z",
  },
  {
    id: 39,
    name: "Brien Elflain",
    email: "belflain12@slate.com",
    password: "NeOGFnKDP",
    created_at: "2022-10-09T00:02:37Z",
  },
  {
    id: 40,
    name: "Judith Maghull",
    email: "jmaghull13@dion.ne.jp",
    password: "xu8NbgDqY9I",
    created_at: "2022-07-18T13:26:14Z",
  },
  {
    id: 41,
    name: "Marty Kille",
    email: "mkille14@sphinn.com",
    password: "EHT7LcnGjT",
    created_at: "2022-04-24T22:32:05Z",
  },
  {
    id: 42,
    name: "Meridith Simonutti",
    email: "msimonutti15@europa.eu",
    password: "NxDhd3N6",
    created_at: "2022-12-29T05:40:04Z",
  },
  {
    id: 43,
    name: "Grazia Samuel",
    email: "gsamuel16@altervista.org",
    password: "pxypB6zGrLtP",
    created_at: "2022-02-22T14:59:49Z",
  },
  {
    id: 44,
    name: "Kelly Winterburn",
    email: "kwinterburn17@histats.com",
    password: "8Zx5EyczR",
    created_at: "2022-05-08T05:11:57Z",
  },
  {
    id: 45,
    name: "Melonie Pieter",
    email: "mpieter18@theatlantic.com",
    password: "Yf8r2X0PFX",
    created_at: "2022-11-10T00:46:06Z",
  },
  {
    id: 46,
    name: "Susanna Calvert",
    email: "scalvert19@networksolutions.com",
    password: "YaJO0nsh",
    created_at: "2022-12-21T13:42:10Z",
  },
  {
    id: 47,
    name: "Berke Gronous",
    email: "bgronous1a@sun.com",
    password: "iLFYCPx1d3C",
    created_at: "2022-08-25T00:36:43Z",
  },
  {
    id: 48,
    name: "Alika Flaunier",
    email: "aflaunier1b@nbcnews.com",
    password: "DeuH7KWZK7t",
    created_at: "2022-11-11T05:06:24Z",
  },
  {
    id: 49,
    name: "Peterus Zanettini",
    email: "pzanettini1c@state.gov",
    password: "zcjYh4EB1pP",
    created_at: "2022-09-02T02:08:58Z",
  },
  {
    id: 50,
    name: "Corey Venners",
    email: "cvenners1d@blogspot.com",
    password: "36fd9pFJOitQ",
    created_at: "2022-11-13T17:36:26Z",
  },
  {
    id: 51,
    name: "Dwayne Terbruggen",
    email: "dterbruggen1e@reference.com",
    password: "oD2xVqClk",
    created_at: "2022-04-17T14:30:21Z",
  },
  {
    id: 52,
    name: "Lyman Zmitrichenko",
    email: "lzmitrichenko1f@bluehost.com",
    password: "F6Th1Yv8HT",
    created_at: "2022-01-26T05:29:11Z",
  },
  {
    id: 53,
    name: "Dame Rouse",
    email: "drouse1g@arstechnica.com",
    password: "qP4uFdScgVC",
    created_at: "2022-05-31T07:49:20Z",
  },
  {
    id: 54,
    name: "Heall Dignan",
    email: "hdignan1h@princeton.edu",
    password: "u2iW9tJR9zy",
    created_at: "2022-07-10T23:12:12Z",
  },
  {
    id: 55,
    name: "Violante Stares",
    email: "vstares1i@newyorker.com",
    password: "BZvuYR",
    created_at: "2022-07-18T18:08:58Z",
  },
  {
    id: 56,
    name: "Raven Vinau",
    email: "rvinau1j@whitehouse.gov",
    password: "SgUIwh",
    created_at: "2022-08-29T09:31:55Z",
  },
  {
    id: 57,
    name: "Ray Feeham",
    email: "rfeeham1k@google.co.jp",
    password: "uIk3ekDk0JN",
    created_at: "2022-09-10T00:53:57Z",
  },
  {
    id: 58,
    name: "Forester Satterfitt",
    email: "fsatterfitt1l@unblog.fr",
    password: "6uHe9IygNG2",
    created_at: "2022-04-13T06:47:25Z",
  },
  {
    id: 59,
    name: "Arabela Sainsberry",
    email: "asainsberry1m@lycos.com",
    password: "IBvt5R4MH",
    created_at: "2022-05-10T18:43:34Z",
  },
  {
    id: 60,
    name: "Redford Goldsberry",
    email: "rgoldsberry1n@mac.com",
    password: "LNlyW5W",
    created_at: "2022-02-11T11:21:18Z",
  },
  {
    id: 61,
    name: "Elayne Gorrie",
    email: "egorrie1o@spiegel.de",
    password: "rJNUt1ibnXo",
    created_at: "2022-06-20T07:51:25Z",
  },
  {
    id: 62,
    name: "Blisse Dammarell",
    email: "bdammarell1p@vinaora.com",
    password: "GBlPHG",
    created_at: "2022-08-23T14:43:46Z",
  },
  {
    id: 63,
    name: "Halley Rean",
    email: "hrean1q@linkedin.com",
    password: "ekf4Q1Ed4mm",
    created_at: "2022-04-24T22:50:25Z",
  },
  {
    id: 64,
    name: "Christiane Petrelli",
    email: "cpetrelli1r@toplist.cz",
    password: "ir70YYY94uHv",
    created_at: "2022-02-11T10:49:51Z",
  },
  {
    id: 65,
    name: "Cloe Jacobowits",
    email: "cjacobowits1s@youtube.com",
    password: "2jjcN1",
    created_at: "2022-04-28T10:19:36Z",
  },
  {
    id: 66,
    name: "Legra De Vries",
    email: "lde1t@stumbleupon.com",
    password: "Nhm1JAkK",
    created_at: "2022-12-07T00:45:48Z",
  },
  {
    id: 67,
    name: "Leesa Forshaw",
    email: "lforshaw1u@nifty.com",
    password: "SOnxVum96M",
    created_at: "2022-06-20T14:51:30Z",
  },
  {
    id: 68,
    name: "Benjamen Urien",
    email: "burien1v@flickr.com",
    password: "mRkD9fWEK",
    created_at: "2022-12-23T01:07:29Z",
  },
  {
    id: 69,
    name: "Oriana Jolly",
    email: "ojolly1w@telegraph.co.uk",
    password: "JrFhHcGS6Jbm",
    created_at: "2022-03-03T04:05:52Z",
  },
  {
    id: 70,
    name: "Caty Lombard",
    email: "clombard1x@aol.com",
    password: "BFvENolzvJsP",
    created_at: "2022-03-14T18:20:18Z",
  },
  {
    id: 71,
    name: "Luz Watting",
    email: "lwatting1y@etsy.com",
    password: "GFLLmWvr",
    created_at: "2022-08-02T19:17:47Z",
  },
  {
    id: 72,
    name: "Hughie De Rechter",
    email: "hde1z@1und1.de",
    password: "oyrttgSB",
    created_at: "2022-03-03T06:52:17Z",
  },
  {
    id: 73,
    name: "Troy Meneo",
    email: "tmeneo20@taobao.com",
    password: "iRDad0kYi3ir",
    created_at: "2022-06-25T03:07:22Z",
  },
  {
    id: 74,
    name: "Genia Cogan",
    email: "gcogan21@ocn.ne.jp",
    password: "btAaPe",
    created_at: "2022-08-29T00:49:11Z",
  },
  {
    id: 75,
    name: "Henderson Schneider",
    email: "hschneider22@ehow.com",
    password: "gqlRaZtlAK",
    created_at: "2022-12-27T20:11:57Z",
  },
  {
    id: 76,
    name: "Mattie Snepp",
    email: "msnepp23@nbcnews.com",
    password: "a9kpadJCikC",
    created_at: "2022-06-03T08:43:49Z",
  },
  {
    id: 77,
    name: "Nichole Judkin",
    email: "njudkin24@pbs.org",
    password: "b1DuZK7",
    created_at: "2022-09-11T07:13:52Z",
  },
  {
    id: 78,
    name: "Gerald Duetschens",
    email: "gduetschens25@bbc.co.uk",
    password: "vtw6Hy",
    created_at: "2022-02-09T08:20:46Z",
  },
  {
    id: 79,
    name: "Stacy Livoir",
    email: "slivoir26@sbwire.com",
    password: "cxo3PHp3R",
    created_at: "2022-11-14T16:08:05Z",
  },
  {
    id: 80,
    name: "Rosaleen Ramsdale",
    email: "rramsdale27@cnet.com",
    password: "efn3McaqbY",
    created_at: "2022-05-02T16:27:27Z",
  },
  {
    id: 81,
    name: "Adelle Kurton",
    email: "akurton28@vimeo.com",
    password: "xDtqEibcWZp",
    created_at: "2022-11-17T01:53:52Z",
  },
  {
    id: 82,
    name: "Jordanna Reiach",
    email: "jreiach29@sun.com",
    password: "11HMkJnSKw",
    created_at: "2022-01-22T16:22:29Z",
  },
  {
    id: 83,
    name: "Obidiah Jeannot",
    email: "ojeannot2a@chronoengine.com",
    password: "yA6sHeMMXU",
    created_at: "2022-12-20T13:16:55Z",
  },
  {
    id: 84,
    name: "Ruthi Coveney",
    email: "rcoveney2b@hubpages.com",
    password: "dYwK1w",
    created_at: "2022-08-13T13:19:24Z",
  },
  {
    id: 85,
    name: "Reggis Normabell",
    email: "rnormabell2c@statcounter.com",
    password: "teRane12V",
    created_at: "2022-05-02T18:38:19Z",
  },
  {
    id: 86,
    name: "Floris McMenemy",
    email: "fmcmenemy2d@mapquest.com",
    password: "tPPz1zA",
    created_at: "2022-05-12T09:37:52Z",
  },
  {
    id: 87,
    name: "Barbi Clipston",
    email: "bclipston2e@hao123.com",
    password: "gIyJHfZR73",
    created_at: "2022-05-10T02:48:55Z",
  },
  {
    id: 88,
    name: "Alain Danovich",
    email: "adanovich2f@state.gov",
    password: "qj5aDt4J1",
    created_at: "2022-05-27T21:04:20Z",
  },
  {
    id: 89,
    name: "Nicolette Goschalk",
    email: "ngoschalk2g@latimes.com",
    password: "A1yzlFOq",
    created_at: "2022-07-15T04:42:20Z",
  },
  {
    id: 90,
    name: "Morten Watkins",
    email: "mwatkins2h@example.com",
    password: "vl1xD3LOD2",
    created_at: "2022-07-08T04:26:55Z",
  },
  {
    id: 91,
    name: "Kaylee Jakoubec",
    email: "kjakoubec2i@epa.gov",
    password: "mClCvv5obw",
    created_at: "2022-06-16T07:57:54Z",
  },
  {
    id: 92,
    name: "Jimmy Weld",
    email: "jweld2j@tripadvisor.com",
    password: "DqydZSdv6OK6",
    created_at: "2022-02-21T04:30:34Z",
  },
  {
    id: 93,
    name: "Duke Davsley",
    email: "ddavsley2k@pinterest.com",
    password: "8ZCgct1X",
    created_at: "2022-05-15T21:17:54Z",
  },
  {
    id: 94,
    name: "Tuck Francis",
    email: "tfrancis2l@msn.com",
    password: "gSq11rwcL",
    created_at: "2022-12-24T00:14:58Z",
  },
  {
    id: 95,
    name: "Meredith Spendlove",
    email: "mspendlove2m@spiegel.de",
    password: "G0ZF7Nn1VR6J",
    created_at: "2022-07-02T05:45:27Z",
  },
  {
    id: 96,
    name: "Margot Haward",
    email: "mhaward2n@census.gov",
    password: "Bc5yrTsnGo",
    created_at: "2022-12-04T02:00:12Z",
  },
  {
    id: 97,
    name: "Kimmy Hulks",
    email: "khulks2o@google.de",
    password: "1WLi8MDvaE",
    created_at: "2022-11-27T07:46:19Z",
  },
  {
    id: 98,
    name: "Margette Scaplehorn",
    email: "mscaplehorn2p@parallels.com",
    password: "YVXs2g1",
    created_at: "2022-08-11T18:58:40Z",
  },
  {
    id: 99,
    name: "Mead Lantiff",
    email: "mlantiff2q@imageshack.us",
    password: "6KP6GMQRYJx",
    created_at: "2022-07-24T18:57:14Z",
  },
  {
    id: 100,
    name: "Trix Hannaby",
    email: "thannaby2r@home.pl",
    password: "i53QEBXp5o",
    created_at: "2022-05-27T03:19:27Z",
  },
];

app.get("/articles", (req, res) => {
  res.send(articles.splice(0, 10));
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/html/home.html");
});

app.get("/profile", (req, res) => {
  const id = req.cookies.user_id;

  const user = users.find((user) => user.id === id);
  console.log(user);
  res.sendFile(__dirname + "/html/profile.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/html/login.html");
});

app.listen(9000, () => {
  console.log("프론트 시작");
});
