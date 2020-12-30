(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
})({
    "./assets/js/main.js": function(module, exports) {
        eval("/*JUMBO ANIMATION */\nlet jumboTL = gsap.timeline();\njumboTL.fromTo('#jumbo .transparent-color', {\n  opacity: 1,\n  backgroundColor: 'black'\n}, {\n  opacity: 0.5,\n  duration: 2\n}).fromTo('header .logo', {\n  x: -200,\n  opacity: 0\n}, {\n  x: 0,\n  opacity: 1,\n  duration: 1.3\n}).fromTo('header .menu', {\n  x: 200,\n  opacity: 0\n}, {\n  x: 0,\n  opacity: 1,\n  duration: 1.3\n}, '>-1.3').fromTo('#jumbo .titles h1', {\n  x: 0,\n  opacity: 0\n}, {\n  x: window.innerWidth * 0.1,\n  opacity: 1,\n  duration: 1\n}, '>-.3').fromTo('#jumbo .titles h2', {\n  x: 0,\n  opacity: 0\n}, {\n  x: window.innerWidth * 0.11,\n  opacity: 1,\n  duration: 1\n}, '>-.7').fromTo('#jumbo .state', {\n  x: '100%'\n}, {\n  x: 0,\n  duration: 1\n}).fromTo('#jumbo .store-info', {\n  y: '100%'\n}, {\n  y: 0,\n  duration: 1\n}, '>-1.8').fromTo('#jumbo .store-info img', {\n  y: 400,\n  opacity: 0\n}, {\n  y: 0,\n  opacity: 1,\n  duration: 1,\n  stagger: 0.2\n}, '>-1.8');\n/*TWO COLLECTION SECTION */\n\nconst twoCollectionTL = gsap.timeline();\ntwoCollectionTL.fromTo('#twoCollections .col-md-6', {\n  y: 200,\n  opacity: 0\n}, {\n  y: 0,\n  opacity: 1,\n  duration: 1\n}).fromTo('#twoCollections .left-c span', {\n  y: 200,\n  opacity: 0\n}, {\n  y: 0,\n  opacity: 1,\n  duration: 1\n}).fromTo('#twoCollections .right-c span', {\n  y: 300,\n  opacity: 0\n}, {\n  y: -100,\n  opacity: 1,\n  duration: 1\n}, '>-.8');\n/*SCROLL ANIMATION */\n\nlet homeController = new ScrollMagic.Controller();\nlet twoCollscene = new ScrollMagic.Scene({\n  triggerElement: '#twoCollections',\n  triggerHook: 1,\n  reverse: false,\n  offset: 100,\n  duration: 0 // duration: document.querySelector('#twoCollections').offsetHeight\n\n}).setTween(twoCollectionTL) // .addIndicators()\n.addTo(homeController);\n/*HEADER ANIMATION */\n\nconst headerTL = gsap.timeline();\nheaderTL.fromTo('header', {\n  backgroundColor: 'rgba(0,0,0,0)'\n}, {\n  backgroundColor: 'rgba(0,0,0,1)',\n  duration: 0.4\n}, '>-.4').fromTo('header .logo a', {\n  scale: 1\n}, {\n  scale: 0.8,\n  duration: 0.5\n}, '>-.4');\nlet headerScene = new ScrollMagic.Scene({\n  triggerElement: '#jumbo',\n  triggerHook: 1,\n  reverse: true,\n  offset: document.querySelector('#jumbo').offsetHeight + 100,\n  duration: 0 // duration: document.querySelector('#twoCollections').offsetHeight\n\n}).setTween(headerTL) // .addIndicators()\n.addTo(homeController);\n/*HORIZONTAL SALE ANIMATION */\n\nconst horizontalSaleTL = gsap.timeline();\nhorizontalSaleTL.fromTo('#horizontal-sale', {\n  opacity: 0\n}, {\n  opacity: 1\n}).fromTo('#horizontal-sale .percent-number', {\n  scale: 0\n}, {\n  scale: 1,\n  duration: 1\n}).fromTo('#horizontal-sale .title', {\n  scale: 0\n}, {\n  scale: 1\n}, '>-1');\nlet horizontalSaleScene = new ScrollMagic.Scene({\n  triggerElement: '#horizontal-sale',\n  triggerHook: 1,\n  reverse: true,\n  offset: 150,\n  duration: document.querySelector('#horizontal-sale').offsetHeight // duration: document.querySelector('#twoCollections').offsetHeight\n\n}).setTween(horizontalSaleTL) // .addIndicators()\n.addTo(homeController);\n/*PRODUCTS GROUP ANIMATION */\n\nconst productsGroupTL = gsap.timeline();\nproductsGroupTL.fromTo('#products-group .product-bg', {\n  opacity: 0,\n  y: 150\n}, {\n  opacity: 1,\n  y: 0,\n  stagger: 0.3,\n  duration: 0.3\n});\nlet productsGroupScene = new ScrollMagic.Scene({\n  triggerElement: '#products-group',\n  triggerHook: 1,\n  reverse: false,\n  offset: 200,\n  duration: 0 // duration: document.querySelector('#twoCollections').offsetHeight\n\n}).setTween(productsGroupTL) // .addIndicators()\n.addTo(homeController);\n/*FOOTER ANIMATION */\n\nconst footerTL = gsap.timeline();\nfooterTL.fromTo('footer .footer-fade-in', {\n  opacity: 0,\n  y: 100\n}, {\n  opacity: 1,\n  y: 0,\n  stagger: 0.3,\n  duration: 0.3\n});\nlet footerScene = new ScrollMagic.Scene({\n  triggerElement: 'footer',\n  triggerHook: 1,\n  reverse: false,\n  offset: 0,\n  duration: 0 // duration: document.querySelector('#twoCollections').offsetHeight\n\n}).setTween(footerTL) // .addIndicators()\n.addTo(homeController); // MOBILE MENU Animation\n\nconst mobileMenuTL = gsap.timeline({\n  paused: true\n});\nmobileMenuTL.fromTo('#mobile-menu', {\n  x: '-100%'\n}, {\n  x: 0,\n  duration: 0.7,\n  delay: 1\n}).fromTo('#mobile-menu .menu .link', {\n  y: 50,\n  opacity: 0\n}, {\n  y: 0,\n  opacity: 1,\n  duration: 0.7,\n  stagger: 0.2\n});\nconst openMobileMenu = document.querySelector('.open-mobile-menu');\nopenMobileMenu.addEventListener('click', () => {\n  mobileMenuTL.play();\n});\nconst closeMobileMenu = document.querySelector('.close-mobile-menu');\ncloseMobileMenu.addEventListener('click', () => {\n  mobileMenuTL.reverse();\n});\n\nconst mobileModeOn = () => {\n  if (window.innerWidth <= 991) {\n    document.querySelector('header .menu').classList.add('mobile-mode');\n  } else {\n    document.querySelector('header .menu').classList.remove('mobile-mode');\n  }\n};\n\nmobileModeOn();\nwindow.addEventListener('resize', function (event) {\n  mobileModeOn();\n}); // if (navigator.serviceWorker) {\n// \tnavigator.serviceWorker\n// \t\t.register('/sw.js')\n// \t\t.then(function(registration) {\n// \t\t\t// console.log(\n// \t\t\t// \t'ServiceWorker registration successful with scope:',\n// \t\t\t// \tregistration.scope\n// \t\t\t// );\n// \t\t})\n// \t\t.catch(function(error) {\n// \t\t\tconsole.log('ServiceWorker registration failed:', error);\n// \t\t});\n// }\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});