if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,p)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let b={};const l=e=>i(e,r),c={module:{uri:r},exports:b,require:l};a[r]=Promise.all(s.map((e=>c[e]||l(e)))).then((e=>(p(...e),b)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"appDir/immutable/assets/_page.9ed780b8.css",revision:"02e3ea194b1dc4d03fa548024defc5a2"},{url:"appDir/immutable/assets/2.ea6465d0.css",revision:"d7740a8e892675e6e4b48697cde1e015"},{url:"appDir/immutable/chunks/index.be433088.js",revision:"7427c6bfbcc87f6df18379c386beca72"},{url:"appDir/immutable/chunks/navigation.64c017ae.js",revision:"5244a508911ca67579928b87f999153a"},{url:"appDir/immutable/chunks/preload-helper.a4192956.js",revision:"36120f4bc1c2f1587453ed2218949f28"},{url:"appDir/immutable/chunks/singletons.cbdc4dcd.js",revision:"d666abba4d85359bdfeeef89839eccb7"},{url:"appDir/immutable/chunks/stores.6dadeee3.js",revision:"49e917752bf402c6aff5ecd4db5b5178"},{url:"appDir/immutable/chunks/virtual_pwa-register.a6d223e5.js",revision:"fc2e1c0d52e1021de4f1aa6f10986aaa"},{url:"appDir/immutable/chunks/workbox-window.prod.es5.a7b12eab.js",revision:"ed0c862094c41f455cdef837aa7dafd2"},{url:"appDir/immutable/entry/app.79c0d3c3.js",revision:"e8801a8fcb458c7c6e8ab4c29687e17f"},{url:"appDir/immutable/entry/start.772dd621.js",revision:"a4d780cf5884a805b695bd800ce54f3e"},{url:"appDir/immutable/nodes/0.d54e4a68.js",revision:"1d7dc5d3827383995b38df273e2b63a1"},{url:"appDir/immutable/nodes/1.a2fb7ad5.js",revision:"7a2d8c8fa21b183cae3906a1f829dd77"},{url:"appDir/immutable/nodes/2.6300b7d4.js",revision:"836544fe39922b715c5acaa052f338fd"},{url:"appDir/immutable/nodes/3.f08e0962.js",revision:"a6a0a71215bdb4b45afce14972a151e5"},{url:"apple-icon-180.png",revision:"63e8b3f21629b7be54b24d3f3229054c"},{url:"apple-splash-1125-2436.jpg",revision:"7f95a407a1cc81bc004829da9d5245d0"},{url:"apple-splash-1136-640.jpg",revision:"014d454e6dcc08b2fa98f2c453e0b455"},{url:"apple-splash-1170-2532.jpg",revision:"f0682409dd87a4dc9aa9a9783df26ad4"},{url:"apple-splash-1242-2208.jpg",revision:"e1a4e50ca6c7c4734236983de042de4f"},{url:"apple-splash-1242-2688.jpg",revision:"b8b71e3b8aae259faf0179b9e2db881b"},{url:"apple-splash-1284-2778.jpg",revision:"22e91b7fe56762e7ba49990bda6291eb"},{url:"apple-splash-1334-750.jpg",revision:"6d4991b9098191f7a461a94b85ea0bfb"},{url:"apple-splash-1536-2048.jpg",revision:"c52b5a813b38d159f8727311d6db8877"},{url:"apple-splash-1620-2160.jpg",revision:"bef838b9f3f0fda538cb16a9e3a19c98"},{url:"apple-splash-1668-2224.jpg",revision:"62915bf125217e5bbb44cfb64e954bd5"},{url:"apple-splash-1668-2388.jpg",revision:"a38c27757a5de30febe35cef5d6d7389"},{url:"apple-splash-1792-828.jpg",revision:"5f6aee61cf1310b65771bcd35c40c35c"},{url:"apple-splash-2048-1536.jpg",revision:"ee4a4503bd1d1ab5eba5cad517f7ae11"},{url:"apple-splash-2048-2732.jpg",revision:"87b6a9a3ee2357dafc2ab68eb75d87f0"},{url:"apple-splash-2160-1620.jpg",revision:"9b9450f581c34a258dfb5c6d48113229"},{url:"apple-splash-2208-1242.jpg",revision:"bf2b3803163a928c2edfdb785932f713"},{url:"apple-splash-2224-1668.jpg",revision:"2b9afc54a1d933ff13d3e3442751b497"},{url:"apple-splash-2388-1668.jpg",revision:"e5afa770b1c41f4cd3fcb3ed3b6e2201"},{url:"apple-splash-2436-1125.jpg",revision:"87afba7ac06314eab29d2bbfc4a32e6b"},{url:"apple-splash-2532-1170.jpg",revision:"618146f5c3e25c5b26404ec48e7bc0fa"},{url:"apple-splash-2688-1242.jpg",revision:"0302d90cad5a86be5e4dd8db76987156"},{url:"apple-splash-2732-2048.jpg",revision:"70687161445485ea269b931514008c9e"},{url:"apple-splash-2778-1284.jpg",revision:"a7e4a7441b1e96bf8402d4a8c33b3b8e"},{url:"apple-splash-640-1136.jpg",revision:"21d1543f3257349e497e2541d523e6e3"},{url:"apple-splash-750-1334.jpg",revision:"f654c1d85d3b329ce1cc50fa93f15462"},{url:"apple-splash-828-1792.jpg",revision:"03435ca70c14ae50086b6365274bbe17"},{url:"apple-touch-icon-180x180.png",revision:"a41ba9290f846578e75e888b4f1edf7d"},{url:"favicon.ico",revision:"757f454ead35b14432a6d15441153d80"},{url:"favicon.png",revision:"353b2e071eaaa074f4c81ca267aaabf9"},{url:"logo.svg",revision:"910321494238713c7f59f83b3610dc54"},{url:"manifest-icon-192.png",revision:"9edbfa485fe86242ba67cb82f3a2daa7"},{url:"manifest-icon-512.png",revision:"5975dadccee074eb000ad53cc7e51bf0"},{url:"maskable-icon-512x512.png",revision:"051ce2bdff7ab8c3e11094c91e6a9e42"},{url:"pwa-192x192.png",revision:"0daa0fedc0d49e0928bb2cf4a61ce524"},{url:"pwa-512x512.png",revision:"d519b52e9e44954ea7a5b17251e58592"},{url:"pwa-64x64.png",revision:"2a2fd03c978ee7b3c6901219537038ce"},{url:"sprites/busyplanet.png",revision:"248903ec80f83f0e1cedf1f2d4f199ba"},{url:"sprites/busyplanet@2x.png",revision:"5970f2b877766d9141b2dc1056360670"},{url:"mystyle.json",revision:"f3696ea6d434b7fee6d987c6e631ce80"},{url:"/busyplanet/",revision:"2252f139bb1cbc2d390e416e9a8c500f"},{url:"manifest.webmanifest",revision:"c62bccd1f461c7b63df5c706624a5aa3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/busyplanet/"),{denylist:[/\.zip$/,/\.pmtiles$/]}))}));
