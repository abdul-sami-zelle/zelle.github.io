'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ba445575fbe9e0e4e8c52bd85f46b7df",
".git/config": "cb81c79c2ba9cf02fb21962e52845a9c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "fc6710ba609de43e443ccc0a39b34cd6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "018fcb6001d6846d4f0c28095a9532d2",
".git/logs/refs/heads/main": "b1cab7e1f36fd117e3636349dd9e4677",
".git/logs/refs/remotes/origin/main": "ae5d0dbfb54a5919d969fd48c62cace1",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/06/3064c1af12472c291ecafcb89087460f7cf18d": "5ccaec612bebe6b713cb0bcfed696877",
".git/objects/10/7659f9c443391a605e729781748b30ef0bc4bd": "d0b5efc6ac3441ef2d8fd686124ade56",
".git/objects/14/6c34f8d5f3c88c1c227129cf29fd0c77e7789b": "c6e4e5881ecaf917df10d960e37cb695",
".git/objects/1a/432d64f48f5268451d1b47c581082f2d4c1894": "0f5a8f96cd33b436b4299dde011d79af",
".git/objects/2b/9ef40880d845fe265005a3b1f76fa16606f877": "1dcf24ae9b9349b9e1383910595d6a53",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/34/53844bf9fe408dc7b8df5c06f975c4c61ff0b6": "a811b530125b2d4469bb67f13233f14a",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/97b3c3a435ee320d3fd7b4800549ca79c84f95": "95709d45f9e2639b1c2a9ed5b3184cc5",
".git/objects/41/0687d477b8f908a9caec78bcf7374e477b8417": "ceba713857ddab8f8eeaf8c769b05e0b",
".git/objects/44/0afb0a89405e1f91a7c8544b7efa211880dcfe": "05ffd75e6d2f5da18dfb3cd28fb33601",
".git/objects/46/62a63a72fc865c68f3b70805215b32cbdb6cb9": "2335eb8b24400a8f49f839874cad1577",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/50/09a6e428d3f2a7e459739bc1101cddf5d55b87": "eb38b6d2fa1a7c9db9d56d5b0129f2ca",
".git/objects/50/7305270833888c4d7b2aa7e3289770654a26ce": "78d84d4b9ca83bdac54aa0362b8b501d",
".git/objects/51/db7b06704b69c7579220024a9e4472b0efa4d4": "50dbff61cdd2418887daef62d5ba9580",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/f38de365ed9bf50e698e66fa13c337c39899a3": "39e80f9e6fcc21e3415fba013565bc34",
".git/objects/5d/69e26053197f6b48432d024e8433bbebf0ff6d": "f66980e0f5f6259ada073313ac54b9db",
".git/objects/5f/9117be91147f85a20541d8726759f8a59689e6": "e7c1c732c1693a1198626a855cf00e6d",
".git/objects/60/1210600eb8b99342419ac533b3ba64c64d404a": "96a6591dd404148aa1b7cf5d791528c4",
".git/objects/60/fe9439e5476bf990461587dec08f18fc8659be": "de42763607b3a26afefcf9c0e4a5742f",
".git/objects/61/b24ba456eb7ebbe3459565bd89a35c5c88b337": "5b82ba6877b3c4a68c15a44d0092362d",
".git/objects/6c/1b9a8888095fa5052e7c65586726e186fd809d": "00d804717064a60dc8ff923c76decb64",
".git/objects/70/5d65c3e184b40d7172232bace7db170d4c18f5": "f7e2259b04070f25bc6822e8fb1e0d39",
".git/objects/72/82d7eb8d5294b10cee63bb8e30aab4eff6360a": "70ba2e0bd41f6e2195de7a7e1b129938",
".git/objects/73/c9c9826bd113cd5779688f1a18e21837708a59": "ff7c8c735fcc32820ca09f7cc7f3f14d",
".git/objects/74/76c8b5088c83ee934addde896aa0b1360479d1": "14d30453a8c175c0c50fc00d498dae2f",
".git/objects/75/dccf3156f77002f47e39d90de32d41645f7e32": "41c9684a59b97a88f8b4e45d6f24e6bf",
".git/objects/7b/807b7c03ff4b4386227574e9dfcd106514fccb": "f5f875d35cfa2ddeba6ef3f95c02307a",
".git/objects/7d/40fdaae67165984c2f0a9f46bf50f5e8e1dd01": "9ea1fe3b85db62676be3efc52ce08d66",
".git/objects/81/f9c6214debb312777c07bf3cdb6446e0253c2b": "382d991f82c8943114683aa5e54fcd67",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/360672c3ef6c90a2ab298dd539508501674c43": "233c0d5605c25df920e7ecef9c58c09a",
".git/objects/95/e8a44f2c92c534ebcefe80fb5922f646bc3a53": "221418b721a4429ebe61b2b841ed78cc",
".git/objects/96/4c5c1222f5db213e5ad06cfcabf161367645bc": "4273d0bee00a50c6b904f78e5ffb3490",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/96/b9a0bf05bb74942e3de0e1178b8b9be9337808": "ba652d1bb0089c07bd64e9ba06d269e6",
".git/objects/a2/344de38de5697c9681ec52bd289e54ac8fa150": "f4dbe1a8b872ec171e11a486a0a772b0",
".git/objects/a2/6a9aed4ed31208f5fb1be69f4a022c2dfbf80f": "8fccb55aa27b9011cd18c3bdc03750a3",
".git/objects/a7/09e91e29809471c8c34ed01e722076b548fbb6": "bf931fa98c97cc8a7a0c9bbe2cfd830f",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a9/64f0bd2125c9eb21ed9e8a310357b9bb6c1e34": "a4f2415efda019b9c1225f8b2ec88ffa",
".git/objects/a9/71bcd65d44cc85c29b245fe0449d70746de586": "e3af804eb72045a80cadf01534aa4fbb",
".git/objects/a9/e242895c8a1d1e9bf52795ef1493ecefab289a": "341ab3680c5abf2729a2071fccfef036",
".git/objects/aa/81d4274b95e7922f66e5e8a1f6071180af6296": "9cf0835c827b29d52a2ff8c67821bc79",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "3080af10963ea38c151b75e2d931108c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/73d46b822da108de7774d37ed07aeb15ebf56e": "b6a333adf21e389877fedbf1e2a7eeaf",
".git/objects/b8/dfa88cbccc819895622f5f5df0f3bf44b2e430": "aa76eb4bad3a3535dec9a7f86e9a6f00",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/883736a02ec79b24e371f670a09dd57002d673": "acce88a0af1edae441e3a52240e311cb",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/c4d3c27588a0e1e73345f7b1ae009e1fc3e7b4": "c565b2a2c5a664803c3087b32e8943a3",
".git/objects/bd/80c36d5642ce4de391d1634361b9a446d13078": "3b22b93161cbb4a4c37f9ee8a62cdc8d",
".git/objects/bf/b05bee93e7d3e2bdd84c1aed25775ed162d09a": "07ef1903b2fdc8d51d2142775eccb8bf",
".git/objects/c1/26fde57521093e281092bb234d764062578033": "d677fc41125dc504182469cf82cdc469",
".git/objects/c3/3473731c98b15c2e1625fec3ab3be98d632a5e": "81d5a6193fe3c686b85c66ac81bb3940",
".git/objects/c3/a184ed8916d3ce626ba73817c30a7ff4bf7af4": "94c42950d407858622383ce73540fc66",
".git/objects/c5/c0fdeb8c8d0c1ceb8ccb9bd5af37c7cc1c53eb": "8a24cd75b21ed862c08303a8cdc3d988",
".git/objects/c7/3f243ab10f6d490cde984650da14491186a185": "b05f0add34515e6de543260782fd89c2",
".git/objects/cc/937263a7ca28c640b2d33f42481bf5d4be1fd2": "e431c10016afbeb462dde85a79c573dd",
".git/objects/cc/d07f6acac0ba653d73ba8f102d5404e73f929d": "b8b12177b7f8cce2f27fe7021d859f0b",
".git/objects/d2/2e11a8e9299631ff48559cf9493a03c51bae61": "eb7e2da9cc6570b5cdd54c847fbb96d0",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/2751a2c320d8009e4218a6848d16209199bd85": "b82db7e3f99218618d07657f0bdfac24",
".git/objects/d9/ad65c5141bb7f5f4af3ed766068f9fd8274c45": "9be45f969e53142fd8869e2b1160b931",
".git/objects/db/07fb18aeafaba1b157b7d31b4254dafe2435af": "4e0f4fa31586f8fe2a61a9e669a89957",
".git/objects/df/5b8ea4418dd70621419215bb84027bb7e3e8d9": "e79bb095ae231f4dcd6162948becea35",
".git/objects/e0/e25ba1f597846601f244ac2a184b50107ae149": "3b071c73fd471493f67fd72184b0251c",
".git/objects/e2/301115626f5677d1f03e79f31804396bb066ce": "24aa5fbae22c2c304771d5e5e9c4d842",
".git/objects/e5/34012beeb87714fe7eb181590e68bfe75a32d8": "cca7873a2bdf07fbc2620c1ed5fbe877",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/e6981183b30780ebdb59469491f18e4f4545f9": "189909401731222c83b0ead88671993c",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/ce578d4d7c4da0cd0e1e77c58b32ddd900b465": "272426be21b97245337781b0904fd2c1",
".git/objects/e9/638274ac18ab75c170d200825065d160396961": "3a8f0466b9bfd327f968b336da7504d9",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "c1065f1df5759d7094e0bf053a6a9351",
".git/objects/ea/a87d9c5b4a9fc80b7876fbaeff476472464c3f": "769f45d6b2aea7c36025c6b4d33cd60e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/f9/18e1a0576683c0ada6a5dbf909f423012bad3a": "ee806d654a08838c84e9a771284172a6",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/ff/85c312a9a1de7fcb7e07cf2f065263d413f5f2": "34f85991bc1ae5c043dd6e98c79c6801",
".git/objects/ff/e18658b7032cf6f09b476b2cd6d0c81228d2a2": "2366c883f886352495beb31def841ced",
".git/refs/heads/main": "69559af6dfdfb190584e1be410f58dd4",
".git/refs/remotes/origin/main": "69559af6dfdfb190584e1be410f58dd4",
"assets/AssetManifest.bin": "0e73dbcea6cbd33ea69efe19df9ebb29",
"assets/AssetManifest.json": "36b7e949174e23cf77b7d1e0a6c9dd3c",
"assets/assets/images/beads.png": "e816b27d6c7cc6fc253e071ccc74abf5",
"assets/assets/images/breakfast.png": "10574dbd1c6338a0c0c24d2075aec68e",
"assets/assets/images/footer.png": "76cd4564475390e3956f737c74c6a88f",
"assets/assets/images/header.png": "ca19c979047f382e38d0ffa06ce32910",
"assets/assets/images/in.png": "654d2184a8c5ac8b3fd75e629200c41f",
"assets/assets/images/leave.png": "de04b323260951daf7ddfffef925c821",
"assets/assets/images/off.png": "71ffd92659e6a6439f0dcaa7bcdb30e5",
"assets/assets/images/other.png": "ba8cd0bd40a64f6cdfb5cad75600387d",
"assets/assets/images/out1.png": "be6ef405ffdfdd25ed568e28a2774fcb",
"assets/assets/images/phone-call.png": "90411b4799ad060c4861bab153ff37d2",
"assets/assets/images/shiftend.png": "4a1f4b19d9fb89136164ec27273e43f9",
"assets/assets/images/shiftStart.png": "7a2f72b2875371b49c98cacb5abe7bd0",
"assets/assets/images/star.png": "969a85a132f594be3c8dfb38ff6b8abd",
"assets/assets/images/totalHours.png": "17a2dffee3ffbe7a51a86dffcd81397e",
"assets/assets/images/zelle.png": "bce7de7908dc6c03c82f9e6a183d1eaa",
"assets/FontManifest.json": "9d53feceacfcd55450704c5c6ee6486d",
"assets/fonts/MaterialIcons-Regular.otf": "773c686abcba0813db02f61daf61439b",
"assets/NOTICES": "ac0eb20ea4a30d1bc0540e30a918ece1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/simple_circular_progress_bar/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "189da68ba1eb355ee78a56cf72bcc508",
"/": "189da68ba1eb355ee78a56cf72bcc508",
"main.dart.js": "b7b301790f4a11b2d97e4371d3744dbb",
"manifest.json": "ecd658e0be85900c145d7404297c8fd4",
"version.json": "31ec19eebf8581eba17324e2016615bb"};
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
