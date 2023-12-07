'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5fc10240b73452c6a64964c44206397c",
"index.html": "669b00c80a73cf47c20f5923d8d4dd91",
"/": "669b00c80a73cf47c20f5923d8d4dd91",
"main.dart.js": "14dd39a527ddd195a696c2b293856875",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "e9e941139ec0f8231effd2fe9dbbf9e3",
"icons/Icon-192.png": "7d8372cdf68a30cc41718682dd278bf6",
"icons/Icon-maskable-192.png": "7d8372cdf68a30cc41718682dd278bf6",
"icons/Icon-maskable-512.png": "5386cbfac91be178706f4f2536442621",
"icons/Icon-512.png": "5386cbfac91be178706f4f2536442621",
"manifest.json": "77c5988df4959f561c79052739d172d7",
".git/config": "c92bcac86effa4bab8e0825e29c7833b",
".git/objects/61/a5b9a11c4d5fa856fcff2bfd45fba686f67ead": "329310ef059f8d0436103fe61c3509e9",
".git/objects/61/8b7f27e819e3c9eb96bd56a275cd772c746a73": "25d0fd253671edee7d0e3826b6658905",
".git/objects/0d/63d2e2f7286e3758569910ad5cfe4fc9cee735": "b3f42fa4e6417386a9b4dbaa7b651f48",
".git/objects/68/1a2ddee4f3921c67f9bee1e643e53d7af0bb09": "9ebb180ee9fbb33a9054a710d0b3418a",
".git/objects/68/31da7ab040aa9ff06064a2e9f43b8210a2523b": "37da7f2db39ee94bb5528a0399adb2d9",
".git/objects/3b/2405ca1f9814edef69266eb07731f5ec55b6f0": "bbd317028341801cd4b390ac77316160",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/32/2d2cf3a616b64614ef794622ffa5f38a42444d": "19596f3ea4339fe8526dfc0a3dc0d377",
".git/objects/35/af0f274f6bd4f13ac1a6cd6a15a3f3177be8a1": "ce95d6be27e7b18ee8f71887d2355fd5",
".git/objects/69/623961aa0d2a579d69da0d7fa15cd45a747b7a": "f946a623c5bb090681ce3d412eea8994",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/0b/31c16ef408240f4ecb87b6b433e6f5cbfed6f6": "9f3783873483d3a4ce0fd9f6cf78ed42",
".git/objects/5a/a10e3d865324418eae045941001368702873dc": "a029c0650fc4b2a073fa8b42988225d3",
".git/objects/5f/e5c6913b269d524eb42c1f58ca445aa013a8f7": "11ab728ea4f84f005feb4d2ec2d09bbb",
".git/objects/9d/8cc69fb79f5d2caf85d6761edc14d24e18873e": "f3f6799b143d05cd81a146054e53f792",
".git/objects/9c/7cf654309bd4166d49a86b8e1a0e6f1bcad3ae": "d9dcdffd519e40c12b95599770c50ec7",
".git/objects/02/46226685450fdd58c580e12929a9a7f544eb76": "6572ec976f310150bf4228c7272df4af",
".git/objects/02/1a09c020c70421f78eb3d431f5a3c355b7b70e": "7928541bbd623bd449aa463dbc1e6f0d",
".git/objects/ac/13384818d3b73395bf6fda4b876b21a3e693e9": "8b87ed31ede29b8291f7ab9936c393cd",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d1/9064bb1b99fbcab13aed3e7b00f7f5042f40b1": "68992951741532a8cc96c1a1b76b6968",
".git/objects/d8/b185a993a1ef6b27c72f9b2053d67ac6d3f32e": "23eb5189bf36c03ed69aa577477379bb",
".git/objects/ab/34e3d710cb1afe013acce4400d799c954c502e": "7bfd5a3b88b223e88461fd8ef5ba946c",
".git/objects/e5/377adcd6535fd5c201c826771ff8d0f658399c": "feb463bf0c45b7e16ea9e3e060074110",
".git/objects/f4/6ba738b88dc19834115835037050ec96bba1cf": "840e82fa3bc1a8013af6b4969f348320",
".git/objects/c0/d1c034ce388ae0f23efb2fb2111f88ee3d7ed8": "fa65ca208333cbf06f1d54c69ec77708",
".git/objects/e3/597adbf4c9f8cc1620551b546196d37d7f9f5d": "27dbb1d19a97341eb575982beb0635c9",
".git/objects/e3/431c4ae20dbf3e7001842cacefd511534d89db": "46aca05fd5a25e55e5bdcb8a3d24e8da",
".git/objects/c6/e2fa74367fb88510bbab07e201812ec26e7e23": "30e1c1f252f3d706a30dad1d83b824de",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/42d6e81ae168b9906e6c89997c817f23ecda67": "debd579957a59e75acf3957aafe6371d",
".git/objects/45/7392936fdc543b325e0173e9fa1acb3946efc4": "f2018faac3e87a2c9df3b48b2fa7df9d",
".git/objects/1a/c978f304797cfab06c2da33e66ac1fc7d743ac": "5006d4372653d47f6b94a21bcb6ddbaf",
".git/objects/7b/afbb5b4c4501cb09229300c3245b19c6581bb1": "1abc7df58f8c84d16616220505a4da0b",
".git/objects/8a/6ea6d1811b3a6b1922cdbaea9c63a4b7162a74": "2ac846492a264a18d31c62c9b20cfa25",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/86/0b0bb6dd09ee535aed38fea235ea95785ad89e": "e90a55c011c2837272064c85d4545ec4",
".git/objects/72/c7c0ae529a2e4ba2f2921543c8ff09ca0b5ac8": "aea891904deb3af79900f1efd954df17",
".git/objects/2f/3276887d8df4dba11370b27b163d77faa633a1": "48ac860537d385bd3298488b8ff52492",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/6b/f12c451df1c772f921879af8fa55ced5e2da8b": "60eedf0331b3ae8f7c7763616344fa64",
".git/objects/6b/5c61ef30f93cd92aef3a9c256cd335f60090d4": "850ea17925a960b83cff48f041110e09",
".git/objects/38/f1819537af0ca1774400502bc55646f42916b1": "56bdf2841acb698c463f6cdb79cd93f3",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/62/b35e68b4d6e212133ba0401cc1dcec0d2f6339": "6a4afc858aa72c6e78797f235449fa5d",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/ad116528e95f9cf44274d1767ab4fc5b438e55": "9480e53825f35ff38b08ad092053fc32",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/99/6978c337a68e3781cff81b207a2e53ebe3ab74": "a2b9a5acca07f163a281806ca666b42e",
".git/objects/97/a561d3bba7254d28317787475ef43b28508d41": "e186551c75f3f47db9146181612e3d3a",
".git/objects/97/149e55f741364ed84c8ef5ef583d83a99507b0": "bebeb84932fedfd964ed26276be805fd",
".git/objects/63/8f4e27fa4f9861444acdb591d576eb63bc8c2c": "c0cec6504a70edd830ad3ba323a39000",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/d3/944accc7af7667d930fb24c72ab73c804b822d": "6891fbe79484cc440e0393f6f9b73fcf",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/d5/3fc01eb64f95ad09577aacd9a266f51964eee4": "101466c79270f39a8ab005208bf3d5cc",
".git/objects/b9/31f437902df42b73f44109968ac1e337f77a4c": "1f8764c6ce61700e2d0c2906910e8ec8",
".git/objects/c3/9ccc96bc70ef3f4f70664062772ab860eb9885": "44551389baf4e6188dbd77f504eafe79",
".git/objects/cc/04c95b62d024f251c3f1bf7d1982d0760ff988": "16365c5f7c94d5380c7a62015af73304",
".git/objects/cc/f44210c6dcb08704b7fc27856f28b1ae566792": "367c15726b51b46f0458cde21b412455",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/eccd9b1f2d63faade3db9857e943431ac1879f": "1db86729a65b2c8145af0971dc8a731d",
".git/objects/e8/610ec499873ffc5f7d1c865e32e4ca8dd11e72": "544efd9bffd0804137f422bb4d77d280",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c2/3e7cdf2bbc4b9400948af7f16ebf6f1b53dec3": "87f2652ccd5351032d58c37c7674dc4f",
".git/objects/e9/489d6472fdd2caa97bc31c1ef41b7015755151": "4d92799b73e0d2219838a3b19043f37d",
".git/objects/e0/9f875f87c01670d04cd636b8687db2ae741acb": "b5a3949e3fc568e69d093d31eeb00aa9",
".git/objects/46/1176676d969e6576ebabaf59f3932b5b085166": "272c5e4a8ea5aa780becb9525b9def98",
".git/objects/46/a94cec07b4cdfb0c2f9e1b71bea3d60235dab1": "c4675673b2ac50a635f720d5cbdbde4e",
".git/objects/2d/420680d7f2ffe8fcff7ac260ad5a5d71d3cb84": "0fa35fd3f51bcbfe446d55243fffff36",
".git/objects/1b/a904ef4bd0aef11e175eb3b10ef5363f5db0c3": "f07652cb6dc7b9aa12ba65abf1e4f721",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/24/ce54603d7cdb4be122271d2b5b2f3a3d4a7bca": "cc542e4b14839b89588631990821b0ae",
".git/objects/23/79b03b908c0fb09e736f22dd16cb07546d44e6": "233ec12ec03e03b26bf0717da3b43cf6",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/15/e3cd33d86e2b2ad20e762e83eea7df6cd6ca5e": "489d58ccb7f83bc7c683de15db264ffd",
".git/objects/85/7dbc6d3e1361972aaa4ee00e05e871f1ee4b52": "48cf0c101c4fe6e3299bd3d6ed38df88",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/2b/df0650ef323fb921943387f9ff77e10b85c2c8": "9d205a0876f87213b2e8e114eb65aaa4",
".git/objects/2b/844a74eb8d85b68ed4fa61d1abd05aeb083c1a": "3cb74915bcd6f1abdcb5ade99f11ee88",
".git/objects/47/e69405802a071d018867a3b5f04b49c8d4f087": "c42301d84d5cd44432d81b604c8c4735",
".git/objects/7a/c519ec4cffbba0c5ea21ad0601502db41d941d": "632272b0748b24537edcf647a4e7d709",
".git/objects/14/bb7dd25c60250e1591dd0b1ee4bebea99fd4ec": "c3540bf8fdcdfc61380d074ecfa410bb",
".git/objects/22/5b7620d12044910a34a6f528bf124313828826": "251e22397e6c959e095ea2e4aa53cb70",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "ed46d718a515fd35553d7642f1298ef6",
".git/logs/refs/heads/main": "82355d026eae9cb400fa9b56f09b6228",
".git/logs/refs/remotes/origin/main": "4c0d812c57abbf8fb1a93130b498940e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "8f90ba93fd58561f74acdd79857e5621",
".git/refs/remotes/origin/main": "8f90ba93fd58561f74acdd79857e5621",
".git/index": "c1da37661304f26eae2361a52eded97c",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "20838e2ea551d2dbb9f127e2fc0d22ff",
"assets/images/pic114.png": "17beab7c354f1e71ff2801109b8f0edb",
"assets/images/pic101.png": "e2bed538041a197d6c44537b30d1a26d",
"assets/images/pic115.png": "550c98a93dd1c3125e4614ee3151e3ea",
"assets/images/pic103.png": "a0d5184f8ba106025f0e3a2a168db839",
"assets/images/pic117.png": "7e928df851c015cc5f450da2f48411ec",
"assets/images/pic506.png": "3c62dca1da5ea47cee95324888147879",
"assets/images/pic1.jpeg": "058c415d17839e7864345ff82c2c4db7",
"assets/images/pic106.png": "c2b2c7bd15ba676b42b146cf0257a8e9",
"assets/images/pic105.png": "96385896ceff1f85b15ed6984a1be730",
"assets/images/pic501.png": "4b16cfe4e55171a08a01126ba4495ef2",
"assets/images/pic104.png": "fed0d69678a987180c5f88908bc0d978",
"assets/images/pic109.jfif": "0631080de0efd9d3fc49852662e783cc",
"assets/images/pic9.jpg": "3afc29061b7096887276615bde19a7b0",
"assets/images/pic9.png": "a820837a0e326b88db0e06e520ba0b67",
"assets/images/pic8.jpg": "29041bd87a06ac88a870978d0ff531ae",
"assets/images/pic10.jpg": "018ba627ba61a1f9f56bd8bb52a9a387",
"assets/images/pic113.jfif": "2befdab3740fa4cbe2de3dc7a798a49f",
"assets/images/pic11.jpg": "59ba0916147e71c5ad34eacb4e2d7df7",
"assets/images/pic112.jfif": "fdf64ddd6b3459eca1afc9bc5902e270",
"assets/images/pic108.jfif": "ccd28b4c096d1977d027f14708e0e7a7",
"assets/images/pic118.jpeg": "8d44ad2ab33d538cba0efac7852b5f6b",
"assets/images/pic3.png": "14b61ff3fbf71e2aa236380ee44a2d85",
"assets/images/pic2.png": "3a483d7fade84b3b89b2f422511b9f6e",
"assets/images/pic102.gif": "c0224f6324f10974e0482820b1fe8a9d",
"assets/images/pic107.jfif": "a20876a9adbf141c66610b7852422e8a",
"assets/images/pic6.jpg": "b4c58c2d54b612e2c83596b109a71793",
"assets/images/pic110.jfif": "886435a9874555d371649e0bddf26eff",
"assets/images/hnpp.png": "89426ffa100d195bca5658b60218327d",
"assets/images/pic7.jpg": "67944bdffd3e281e1750a4b89f312fe1",
"assets/images/healthway.png": "c525d5ab8a8b78408fae596968df7423",
"assets/images/pic119.jpeg": "6d49ab73d023784d5036c78c45ab3967",
"assets/images/pic111.gif": "88612f94478814faac69b0c63a4780fb",
"assets/images/pic5.jpg": "ecddcb730edf455705e72a6b66130033",
"assets/images/pic4.jpg": "62faf8feb0638161021fb8f822453071",
"assets/images/pic121.png": "1f3bbe6d1220201e931afd6b91970a8f",
"assets/images/BIODATA.pdf": "0098a2c4f561807c9f0064ccb22dd185",
"assets/images/pic120.png": "ea39b948bcc12495cc2825782b9e645f",
"assets/images/deedy_resume.pdf": "7abb4d1961631143d23600178b3cb8f5",
"assets/images/pic116.jfif": "fef16bfc930bbb9e3eb2553ed1da8b6c",
"assets/AssetManifest.json": "630d9f002c27d23efb14328f4ba5f8ae",
"assets/NOTICES": "c6716691faf00825bf4ceb2855abf734",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "4c36e651c4fe203454305859b4c3697b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "61304d8cd411725718ddc83a9bf74eff",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "791f04c8d1c18ac65a97d406f1b6a47d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "1af5f3a3a58ab3827fecca04b515c9eb",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "3785d0e68fa082ec202d71de78984c5e",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
