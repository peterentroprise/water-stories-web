if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise((async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},a=(a,i)=>{Promise.all(a.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(a)};self.define=(a,n,c)=>{i[a]||(i[a]=Promise.resolve().then((()=>{let i={};const s={uri:location.origin+a.slice(1)};return Promise.all(n.map((a=>{switch(a){case"exports":return i;case"module":return s;default:return e(a)}}))).then((e=>{const a=c(...e);return i.default||(i.default=a),i}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0a301732.8756dde9f6db2c6257b4.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/152ee75d4f6fb99e773b360169fd08751cd6fb11.062077a8a2a60beec19f.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/1a48c3c1.0b305247cf28054b7de1.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/1bfc9850.a98b85c67d1519c51774.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/26.6ed9f305fc6903caa28d.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/29107295.048b7aea0477e1114fa5.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/4fce5b33ebf47c5d3c5fe4da56e2e3a2ae273499.b077c2fb2157a4c8ab8a.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/5523e5b54c3ab67378f3e1b0015cab828c23e29c.4f655cf8ffabdd1a41d7.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/b434e420e28776ab9df4bcd9d89da971193ad7c1.a35a9d3de2d2625f9f3d.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/b98bc7c3.d5c155ea1a867c0fa35a.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/commons.ec5ae365244ca14f3189.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/d64684d8.d1c8a80d592aacc0e9f2.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/ea88be26.978ae4a26918b322d3cc.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/framework.ca1d8b977e4b74fa6381.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/main-a51181f44a8321cb2f15.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/pages/_app-51ff3eeedff4abfe4ee7.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/pages/_error-ffd2aa12a19c7681bdfb.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/pages/client-a8ec2402c02fd22447ec.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/pages/client/account-9d6d2a5c998abcca0e0e.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/pages/client/auth/signin-3556d5bacb53f51a3013.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/pages/client/browse-85ba02b8bb26736f98fb.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/pages/client/explore-5f330304227b25bac58d.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/pages/client/search-566de0e5059cc9ea8611.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/pages/client/stories/%5Bslug%5D-7fd96252acddf1b47c73.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/pages/index-cde050dd78c3149c1c40.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/polyfills-2adcea37722f99bf613d.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/chunks/webpack-8b2c24faaa50e1f961cc.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/css/fa64cb3daae0c3f006ed.css",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-all-400-normal.f12fae79347f9ab66b184ec93757c600.woff",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-all-500-normal.47d79c80c094ad11b18290de3e78e063.woff",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-all-600-normal.87fb93a9fd6d2dfd29d56a019c56cee6.woff",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-all-700-normal.c03f9676af417b628e313ec11c6ddd8d.woff",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-all-800-normal.034c9f841aee0ee9dac7fa41c4adff27.woff",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-latin-400-normal.1e3ade16373e5c750d4e1752d5ef2654.woff2",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-latin-500-normal.1e3ade16373e5c750d4e1752d5ef2654.woff2",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-latin-600-normal.1e3ade16373e5c750d4e1752d5ef2654.woff2",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-latin-700-normal.1e3ade16373e5c750d4e1752d5ef2654.woff2",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-latin-800-normal.1e3ade16373e5c750d4e1752d5ef2654.woff2",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-latin-ext-400-normal.82ca89e377b3519c3ceb983da410a1af.woff2",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-latin-ext-500-normal.82ca89e377b3519c3ceb983da410a1af.woff2",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-latin-ext-600-normal.82ca89e377b3519c3ceb983da410a1af.woff2",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-latin-ext-700-normal.82ca89e377b3519c3ceb983da410a1af.woff2",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-latin-ext-800-normal.82ca89e377b3519c3ceb983da410a1af.woff2",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-vietnamese-400-normal.4e6fd9bd745931bcbfabda899128e712.woff2",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-vietnamese-500-normal.4e6fd9bd745931bcbfabda899128e712.woff2",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-vietnamese-600-normal.4e6fd9bd745931bcbfabda899128e712.woff2",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-vietnamese-700-normal.4e6fd9bd745931bcbfabda899128e712.woff2",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/media/mulish-vietnamese-800-normal.4e6fd9bd745931bcbfabda899128e712.woff2",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/oY12eSRK4ZpABV0zDqmJ3/_buildManifest.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/_next/static/oY12eSRK4ZpABV0zDqmJ3/_ssgManifest.js",revision:"oY12eSRK4ZpABV0zDqmJ3"},{url:"/algolia/satellite.css",revision:"3417716a984cc5350a3447dd3b87f38b"},{url:"/android/android-launchericon-144-144.png",revision:"d12bf1a5cb8e411c9f392a1b185cb314"},{url:"/android/android-launchericon-192-192.png",revision:"5a28883544e117f6050ac78634a515d0"},{url:"/android/android-launchericon-48-48.png",revision:"92d129a43b294adf0742c0708f60cf31"},{url:"/android/android-launchericon-512-512.png",revision:"6fd49beed6968f49bbe5d594651f9a0a"},{url:"/android/android-launchericon-72-72.png",revision:"fa5bcca7351dbaea20847f648cbf927d"},{url:"/android/android-launchericon-96-96.png",revision:"cd20160bbb5f0dbeca5456a91e7cd8d5"},{url:"/chrome/chrome-extensionmanagementpage-48-48.png",revision:"92d129a43b294adf0742c0708f60cf31"},{url:"/chrome/chrome-favicon-16-16.png",revision:"671ef22a06e292e8f5a5e0eb9b8e6d57"},{url:"/chrome/chrome-installprocess-128-128.png",revision:"573e38a0fd811605b7d2cf2cac1b4247"},{url:"/favicon.ico",revision:"4ff59fef4ad8bd2547e3db47bac48f20"},{url:"/firefox/firefox-general-128-128.png",revision:"573e38a0fd811605b7d2cf2cac1b4247"},{url:"/firefox/firefox-general-16-16.png",revision:"671ef22a06e292e8f5a5e0eb9b8e6d57"},{url:"/firefox/firefox-general-256-256.png",revision:"2deecf75b959169fd8049c0389f72fe3"},{url:"/firefox/firefox-general-32-32.png",revision:"b0da5543c00e969c8a022fb6d4f75afb"},{url:"/firefox/firefox-general-48-48.png",revision:"92d129a43b294adf0742c0708f60cf31"},{url:"/firefox/firefox-general-64-64.png",revision:"0b13970be889b2fb7160b0ed5276e7d4"},{url:"/firefox/firefox-general-90-90.png",revision:"288ea9fe2235997fbf9f4bba5f27f0d7"},{url:"/firefox/firefox-marketplace-128-128.png",revision:"573e38a0fd811605b7d2cf2cac1b4247"},{url:"/firefox/firefox-marketplace-512-512.png",revision:"6fd49beed6968f49bbe5d594651f9a0a"},{url:"/fonts/canela/canela.css",revision:"729fc5f50bf4c2f1c93dfd10aff8a6f9"},{url:"/fonts/canela/canelaweb-black.ttf",revision:"365928576c11a83334056f6c4230aef7"},{url:"/fonts/canela/canelaweb-black.woff",revision:"0dbf308115d3f9ce35abfc6bd9eb596e"},{url:"/fonts/canela/canelaweb-blackitalic.ttf",revision:"9c894f0ceb67504289db8f263f1fb362"},{url:"/fonts/canela/canelaweb-blackitalic.woff",revision:"d01cf6585fcbbcfe1119e9f34dd35694"},{url:"/fonts/canela/canelaweb-bold.ttf",revision:"6818be00a80261ebb52ab58e7a00286b"},{url:"/fonts/canela/canelaweb-bold.woff",revision:"8f946067d3a4809517a2f23a5a8f29cf"},{url:"/fonts/canela/canelaweb-medium.ttf",revision:"7425ac4fe6a48d1c8ef44327e3acd4c1"},{url:"/fonts/canela/canelaweb-medium.woff",revision:"939532e4afe970d4c23a60489d721da1"},{url:"/fonts/canela/canelaweb-mediumitalic.ttf",revision:"ad4161db98efb7ebe504067667bc9e93"},{url:"/fonts/canela/canelaweb-mediumitalic.woff",revision:"7900a07842d84023db6c004afbfefba8"},{url:"/fonts/canela/canelaweb-mediumitalic_1.woff",revision:"7900a07842d84023db6c004afbfefba8"},{url:"/fonts/canela/canelaweb-regular.ttf",revision:"abfa8988799373fcaa6b1d5cc9881f5b"},{url:"/fonts/canela/canelaweb-regular.woff",revision:"947bebcfcd1c71257a280d2ea2b9b006"},{url:"/fonts/canela/canelaweb-regularitalic.ttf",revision:"5282ba16bd9774ea7161f5eee71ea13a"},{url:"/fonts/canela/canelaweb-regularitalic.woff",revision:"e2e0585374c1c788e9c8424cb9608325"},{url:"/fonts/canela/canelaweb-thin.ttf",revision:"9da29911b4a1e074f20c42013d418dcd"},{url:"/fonts/canela/canelaweb-thinitalic.ttf",revision:"5bb857b85bd83ef1de1858078a71efec"},{url:"/fonts/canela/canelaweb-thinitalic.woff",revision:"afe79757905eccc641d003d48941444e"},{url:"/images/logo.png",revision:"42ac468df9c717dec2b47870000cb25d"},{url:"/images/logo_transparent.png",revision:"d24d7e1d6a09155706778ef9c420307f"},{url:"/manifest.json",revision:"f0f9f9f095f50f0bea536db43be2101d"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
