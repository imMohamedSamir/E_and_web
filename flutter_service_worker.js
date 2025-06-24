'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8439beb8b1732c0a2985d22d90c57484",
".git/config": "077c2c50e856c7805e395a28ed6c35db",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2dcbaadcc05c10dc9a0275ca1c3a10b2",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "963eaa0981e50ef8a4cb7c5e609edbb8",
".git/logs/refs/heads/main": "2e533e790e6ad78693e887c4f46e022a",
".git/logs/refs/remotes/origin/main": "67dded655c1ccd1555cce2fe2c30a4db",
".git/objects/02/b8b170b3af2ba49f6427e25f392915a4834c83": "03ad22f26803cb7538defedd9d9bcaac",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/5e53a119605146e2fe57099c68cfcba65517e6": "90511a6e2975ae1cb49ccdb987be4eca",
".git/objects/0c/e7db06b9724d198213046acf495e3ffdf34dcc": "014ee390afc566d723d42ce6dfbdde8f",
".git/objects/13/a71d9af4afe92fcfccebe07f86eff871fe88b6": "e851d4964bb2370a7a40b2dbfc5da272",
".git/objects/1c/00441fbb5886b1bb92835e59840f83ec58661e": "c8a96360bc69ea7ad72e932f1a3416f0",
".git/objects/1d/839420bb363b5621e9b86b9931de535eadf8ec": "ad2741364757e524fe0bdd1b5901f421",
".git/objects/20/6852777856bd3a8b10a23d232de01022fc0401": "dd66b6f4ea6003650ff6a88567548163",
".git/objects/27/4a58f0c7c97ce49854ce960af017594c2bc573": "923c988de77bb18d78c2f14f45136e80",
".git/objects/27/85f5bf9a5e602d38bb989b03a440f24b711dff": "cdf2f2f9988c895954280f70c4b3b0b4",
".git/objects/2c/36ec4964e1d5b11a08f08bf8d708a440c53220": "c9622d4740168d4fc54535da822981fb",
".git/objects/31/50c7917870cd78cf79cec64d7d83e34da368ed": "a108deb4ecd36c200a604ee5cbf4e2b8",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/d95427278792bb4f22c601de82bec46cd68750": "9d35fb52743cc1374ac83182effb6c64",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/b58a62dbe2ac201870d1b84c33b3099cdaed9d": "b8ffb2662fd7071289afd8e47bc9665b",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/f57cc7964a84d82c6a2002f6ae70d8e057710c": "3881a3aa723c6d49e4bdbc96db54a1d7",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/77f274d0401c73ee5731ef071baaa074c2e920": "1a616f54e75e67f9f490da2f01905566",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/3766a4070eb6f5f6794758c1697e396c728832": "23a9973477b0a990f4b690303e236603",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/a8f48c70aeeb2fc7ec01c04fa3f5c428645267": "b511f9f8b46c884cb8c4c32437f23e0b",
".git/objects/5b/ca98426928852c203e4a209cda856dc1a3a5ff": "5f60bf3c2d2f79888fb7e64eec9a4803",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/67/040202c78fa063868c693fd5f5d26534a23fb2": "e6f91800abc96a2e78cd0e18f8cd6c86",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/80/db50d6afacda0e23c57f12f32909c123aa532c": "e3f9465ff3ad1519dc61d3e8f5c683d0",
".git/objects/82/8f429c1a01bdc42209e4162932500dc7cdf8a1": "3072d525b8edb876fafa7277441ce3e0",
".git/objects/85/13ba15696f35ef1a7fdce780c1358b79995847": "46f8d86a8ea7277377caa68d46fdae32",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/2b90353f01df950706509c50f86be683a67837": "36c82cdeaed6e4b8fda85e8d9b1b66e3",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/94/b4ef6766b19c0c3b758f30dc5dab0b2e176fba": "1800b8b673bb8b93019d94638abcd686",
".git/objects/96/018a92995116ceda36000cc340a85920a2b153": "bdde1d176712208534a857c5fce16b4f",
".git/objects/96/0c6bc5d7488f982c237dd4b9217f50fc75dbca": "20d3cb3ab16163497938a5c693643418",
".git/objects/9a/5dfe42c60a039aabdbddd12d088b47bb9e1cd8": "9bdd075c1669eb7fcae5911cb94b0f1f",
".git/objects/9c/795917b08c6e0aea08c6a86468c11343439e43": "4658a951d99049a1b07b2265ebfee680",
".git/objects/a2/b67a1d03f6e400a1b937abc872a69d4586f22b": "da629e04d77f2131392018d61ffffc6b",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/d40799f685060246b0a681360949683cd0468b": "ec70053d522c25795b1d6e917f5a9b99",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ac/8fc909c8c08b0a93250ab18025eaa7a5696067": "250249c3b766c299e01c96cd42df9fc8",
".git/objects/ae/c11fc0b7eb9df380f3a019a7d968181ed5cc7a": "93d68e03bf583a85631d355ac9af8463",
".git/objects/af/901332cf971b2a371e9d79b8054d2c3e25ed79": "d708b1a9b79517ebb94ec11305ac6cb3",
".git/objects/b4/4229cdb22c96306e53c0a2f27a78c90b5f6c37": "c83bc689018fdc32b9e2f88f9379f70d",
".git/objects/b7/01dda0544b8e094ca84e19730673c470d828a8": "df56a7131c4053aadcb014501f5b7f6f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/c0dbf5feb5f8279cc3ebb0cb47e38ba6f700ae": "9b624124b80aaf6952dd63c4678c1d5d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/4bbaa9dca69cde0c9a4affbe43f65a9729c3d5": "63aac3eb789cb777ff38a5d2076a1c26",
".git/objects/cd/b8442522f28a445cab8798a769f3bc5337751a": "76c664644a2dd981a7a722c3f0ac5c56",
".git/objects/cf/2fe14225c2be0c5909d7b23ec60452d2e66790": "cd76c9d06a436ec0711ff4a25fcbb188",
".git/objects/d1/94455ec80deb0ec5004ccf8cce73b959d0ccc3": "2915f4d770a35bce6a5485089bb1871d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/f7b3fa3dd4cf0bbf726128803748bf53c64723": "aa0722e5a65cd1de8c9d24eecbf3c635",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e1/8330885234775b2405666c4acbd25397c334f3": "36931d2594a874daa5bf4088edd8ec8e",
".git/objects/e1/c17eb005994550818cf58ad8c243ebe3f7bf2b": "4dd16d832d5ba6d5c48506d9218ec331",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/bc018577e53af192cdc736de0d4a3645fe9d99": "c7a3783089145916f811d5d5e5482cdf",
".git/objects/fb/afc22143018258ffd89d05e8f388d2f27099c1": "b0db4d9af34c9dc9b7e302c95bf99588",
".git/objects/fc/d2cda9945d90fbf12f25254e18de76eac862fa": "44330e839541c82b25729fb5a0bdb48d",
".git/refs/heads/main": "694364f76473104e7160c4c1f9220661",
".git/refs/remotes/origin/main": "1e2e322f0dd769c335ff14f27868ddbe",
"assets/AssetManifest.bin": "aa4c22a036c15238de87f6b9c4ca8cdb",
"assets/AssetManifest.bin.json": "42f1d1e2cbfdab792ebf110993d1247a",
"assets/AssetManifest.json": "579790eda2c6e1ed17d10f82c296fb9c",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/fonts/MaterialIcons-Regular.otf": "4ffb1622d4d4b465822274051fe7c3d5",
"assets/NOTICES": "0b89ada0340076b11ff34f97f243262c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shorebird.yaml": "a7994898ddcdf2dfb72c12fff72cf077",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "053174d17c17dc9e596115821d0d5bfe",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9d7472c3aaa29ac914a6d72184cf2591",
"/": "9d7472c3aaa29ac914a6d72184cf2591",
"main.dart.js": "8b32a1deb058b00ae57ba5bb774a7c45",
"manifest.json": "a70e10a060a13a1c05f732b5072628a6",
"splash/img/dark-1x.png": "11bb1a48043c3afe8c0b7854863a8257",
"splash/img/dark-2x.png": "5b712a3ec5406811a797ba0df986df62",
"splash/img/dark-3x.png": "7a0b2236e471d3c3d5fb108afb2fe5a1",
"splash/img/dark-4x.png": "114da2685bfe5b19aedc2f1d182484e6",
"splash/img/light-1x.png": "11bb1a48043c3afe8c0b7854863a8257",
"splash/img/light-2x.png": "5b712a3ec5406811a797ba0df986df62",
"splash/img/light-3x.png": "7a0b2236e471d3c3d5fb108afb2fe5a1",
"splash/img/light-4x.png": "114da2685bfe5b19aedc2f1d182484e6",
"version.json": "04dde59f03e362f27bfaaafaaaa77eab"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
