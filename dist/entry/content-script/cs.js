(function () {
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequirea80e"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      let init = $parcel$inits[id];
      delete $parcel$inits[id];
      let module = {id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequirea80e"] = parcelRequire;
}
parcelRequire.register("Cywlu", function(module, exports) {
parcelRequire("3BLK4");
parcelRequire("6ztMt");
parcelRequire("bjDva");
parcelRequire("7ACIA");
parcelRequire("6xybI");
// Explain: https://github.com/parcel-bundler/parcel/issues/5865.
// import "../../features/extension-can/display-zen-mode-ui/zen-mode-ui.css";
let zenModeOn = null;
let iconUpdaterInterval = null;
window.onerror = function(errorMsg, url, lineNumber, column, errorObj) {
    const payload = {
        errorMsg,
        url,
        lineNumber,
        column,
        errorObj
    };
    const extBridgePort = chrome.runtime.connect('%%EXTENSION_GLOBAL_ID%%', {
        name: '0YHQvtGB0Lg='
    });
    extBridgePort.postMessage({
        action: "LOG",
        payload: {
            type: "ERROR",
            message: "Content script error",
            payload
        }
    });
    return true;
};
// function updateExtensionIcon() {
//   const icon = document.querySelector(".zen-mode-icon");
//   if (icon) {
//     icon.src = chrome.runtime.getURL(
//       `images/icons/${zenModeOn ? "logo-off.png" : "logo.png"}`,
//     );
//   }
// }
function runEmbedded() {
    const regularIconURL = "https://web.whatsapp.com/img/favicon_c5088e888c97ad440a61d247596f88e5.png";
    const originalAppendFunc = document.head.appendChild;
    let currentTitle = document.title;
    let currentFaviconURL = null;
    let faviconBypass = false;
    currentFaviconURL = readFaviconURL();
    if (zenModeOn) {
        document.title = "WhatsApp";
        defineCustomTitleProperty();
        setFavicon(regularIconURL);
    }
    document.head.appendChild = function(el) {
        if (zenModeOn && el.id === "favicon") {
            if (!faviconBypass) {
                currentFaviconURL = el.href;
                if (el.href !== regularIconURL) {
                    return;
                }
            }
        }
        return originalAppendFunc.call(document.head, el);
    };
    function setFavicon(url) {
        const faviconLink = document.querySelector("#favicon");
        faviconLink && faviconLink.remove();
        const newFavicon = document.createElement("link");
        newFavicon.setAttribute("id", "favicon"), newFavicon.setAttribute("rel", "shortcut icon"), newFavicon.setAttribute("type", "image/png"), newFavicon.setAttribute("href", url), newFavicon.setAttribute("src", url);
        faviconBypass = true;
        document.head.appendChild(newFavicon);
        faviconBypass = false;
    }
    function defineCustomTitleProperty() {
        Object.defineProperty(document, "title", {
            configurable: true,
            enumerable: true,
            writable: true
        });
    }
    function messageHandler(e) {
        if (e.data.action === "zenModeOn") {
            zenModeOn = e.data.data;
            if (zenModeOn) {
                currentTitle = document.title;
                document.title = "WhatsApp";
                defineCustomTitleProperty();
                setFavicon(regularIconURL);
            } else {
                const recentTitle = document.title;
                delete document.title;
                document.title = recentTitle || currentTitle;
                setFavicon(currentFaviconURL);
            }
        } else if (e.data.action === "updateCurrentFavicon") {
            currentFaviconURL = readFaviconURL();
        }
    }
    function readFaviconURL() {
        const faviconLink = document.querySelector("#favicon");
        return faviconLink.href;
    }
    window.addEventListener("message", messageHandler, false);
}
function embed(fn) {
    const script = document.createElement("script");
    script.text = `(function(){let zenModeOn=${zenModeOn};(${fn.toString()})()})();`;
    document.documentElement.appendChild(script);
}
return;

});
parcelRequire.register("3BLK4", function(module, exports) {

var $7IzVc = parcelRequire("7IzVc");

var $1NYDb = parcelRequire("1NYDb");

var $6yWuz = parcelRequire("6yWuz");

var $Iq2i6 = parcelRequire("Iq2i6");

var $6wA4v = parcelRequire("6wA4v");
$1NYDb.devprint("STATUS: Waiting for TOGGLE_ZEN_MODE command.");
// 1. Waits for a command to take orders from the BGS SM.
(/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.onMessage.addListener(async (command)=>{
    // 2. Take action.
    switch(command.action){
        case $Iq2i6.Commands.TOGGLE_ZEN_MODE:
            $6yWuz.toggle_Zen_mode();
            break;
        case $Iq2i6.Commands.CHECK_ZENMORNING:
            $6wA4v.checkZenMorningChatState();
            break;
    }
}); //# sourceMappingURL=state-machine-cs.js.map

});
parcelRequire.register("7IzVc", function(module, exports) {
(function(global, factory) {
    if (typeof define === "function" && define.amd) define("webextension-polyfill", [
        "module"
    ], factory);
    else if (typeof exports !== "undefined") factory(module);
    else {
        var mod = {
            exports: {
            }
        };
        factory(mod);
        global.browser = mod.exports;
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function(module) {
    /* webextension-polyfill - v0.8.0 - Tue Apr 20 2021 11:27:38 */ /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */ /* vim: set sts=2 sw=2 et tw=80: */ /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */ "use strict";
    if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
        const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
        const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
        // optimization for Firefox. Since Spidermonkey does not fully parse the
        // contents of a function until the first time it's called, and since it will
        // never actually need to be called, this allows the polyfill to be included
        // in Firefox nearly for free.
        const wrapAPIs = (extensionAPIs)=>{
            // NOTE: apiMetadata is associated to the content of the api-metadata.json file
            // at build time by replacing the following "include" with the content of the
            // JSON file.
            const apiMetadata = {
                "alarms": {
                    "clear": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "clearAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "get": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "bookmarks": {
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getChildren": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getRecent": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getSubTree": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTree": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "move": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeTree": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "browserAction": {
                    "disable": {
                        "minArgs": 0,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "enable": {
                        "minArgs": 0,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "getBadgeBackgroundColor": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getBadgeText": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getPopup": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTitle": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "openPopup": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "setBadgeBackgroundColor": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setBadgeText": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setIcon": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "setPopup": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setTitle": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "browsingData": {
                    "remove": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "removeCache": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeCookies": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeDownloads": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeFormData": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeHistory": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeLocalStorage": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removePasswords": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removePluginData": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "settings": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "commands": {
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "contextMenus": {
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "cookies": {
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAllCookieStores": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "set": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "devtools": {
                    "inspectedWindow": {
                        "eval": {
                            "minArgs": 1,
                            "maxArgs": 2,
                            "singleCallbackArg": false
                        }
                    },
                    "panels": {
                        "create": {
                            "minArgs": 3,
                            "maxArgs": 3,
                            "singleCallbackArg": true
                        },
                        "elements": {
                            "createSidebarPane": {
                                "minArgs": 1,
                                "maxArgs": 1
                            }
                        }
                    }
                },
                "downloads": {
                    "cancel": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "download": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "erase": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getFileIcon": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "open": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "pause": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeFile": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "resume": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "show": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "extension": {
                    "isAllowedFileSchemeAccess": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "isAllowedIncognitoAccess": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "history": {
                    "addUrl": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "deleteAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "deleteRange": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "deleteUrl": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getVisits": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "i18n": {
                    "detectLanguage": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAcceptLanguages": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "identity": {
                    "launchWebAuthFlow": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "idle": {
                    "queryState": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "management": {
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getSelf": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "setEnabled": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "uninstallSelf": {
                        "minArgs": 0,
                        "maxArgs": 1
                    }
                },
                "notifications": {
                    "clear": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getPermissionLevel": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "pageAction": {
                    "getPopup": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTitle": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "hide": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setIcon": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "setPopup": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setTitle": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "show": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "permissions": {
                    "contains": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "request": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "runtime": {
                    "getBackgroundPage": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getPlatformInfo": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "openOptionsPage": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "requestUpdateCheck": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "sendMessage": {
                        "minArgs": 1,
                        "maxArgs": 3
                    },
                    "sendNativeMessage": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "setUninstallURL": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "sessions": {
                    "getDevices": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getRecentlyClosed": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "restore": {
                        "minArgs": 0,
                        "maxArgs": 1
                    }
                },
                "storage": {
                    "local": {
                        "clear": {
                            "minArgs": 0,
                            "maxArgs": 0
                        },
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "remove": {
                            "minArgs": 1,
                            "maxArgs": 1
                        },
                        "set": {
                            "minArgs": 1,
                            "maxArgs": 1
                        }
                    },
                    "managed": {
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        }
                    },
                    "sync": {
                        "clear": {
                            "minArgs": 0,
                            "maxArgs": 0
                        },
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "remove": {
                            "minArgs": 1,
                            "maxArgs": 1
                        },
                        "set": {
                            "minArgs": 1,
                            "maxArgs": 1
                        }
                    }
                },
                "tabs": {
                    "captureVisibleTab": {
                        "minArgs": 0,
                        "maxArgs": 2
                    },
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "detectLanguage": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "discard": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "duplicate": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "executeScript": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getCurrent": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getZoom": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getZoomSettings": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "goBack": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "goForward": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "highlight": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "insertCSS": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "move": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "query": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "reload": {
                        "minArgs": 0,
                        "maxArgs": 2
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeCSS": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "sendMessage": {
                        "minArgs": 2,
                        "maxArgs": 3
                    },
                    "setZoom": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "setZoomSettings": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "update": {
                        "minArgs": 1,
                        "maxArgs": 2
                    }
                },
                "topSites": {
                    "get": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "webNavigation": {
                    "getAllFrames": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getFrame": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "webRequest": {
                    "handlerBehaviorChanged": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "windows": {
                    "create": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getCurrent": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getLastFocused": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                }
            };
            if (Object.keys(apiMetadata).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
            /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */ class DefaultWeakMap extends WeakMap {
                constructor(createItem, items){
                    super(items);
                    this.createItem = createItem;
                }
                get(key) {
                    if (!this.has(key)) this.set(key, this.createItem(key));
                    return super.get(key);
                }
            }
            /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */ const isThenable = (value)=>{
                return value && typeof value === "object" && typeof value.then === "function";
            };
            /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */ const makeCallback = (promise, metadata)=>{
                return (...callbackArgs)=>{
                    if (extensionAPIs.runtime.lastError) promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                    else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) promise.resolve(callbackArgs[0]);
                    else promise.resolve(callbackArgs);
                };
            };
            const pluralizeArguments = (numArgs)=>numArgs == 1 ? "argument" : "arguments"
            ;
            /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */ const wrapAsyncFunction = (name, metadata)=>{
                return function asyncFunctionWrapper(target, ...args) {
                    if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                    if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                    return new Promise((resolve, reject)=>{
                        if (metadata.fallbackToNoCallback) // This API method has currently no callback on Chrome, but it return a promise on Firefox,
                        // and so the polyfill will try to call it with a callback first, and it will fallback
                        // to not passing the callback if the first call fails.
                        try {
                            target[name](...args, makeCallback({
                                resolve,
                                reject
                            }, metadata));
                        } catch (cbError) {
                            console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                            target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                            // use the unsupported callback anymore.
                            metadata.fallbackToNoCallback = false;
                            metadata.noCallback = true;
                            resolve();
                        }
                        else if (metadata.noCallback) {
                            target[name](...args);
                            resolve();
                        } else target[name](...args, makeCallback({
                            resolve,
                            reject
                        }, metadata));
                    });
                };
            };
            /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */ const wrapMethod = (target, method, wrapper)=>{
                return new Proxy(method, {
                    apply (targetMethod, thisObj, args) {
                        return wrapper.call(thisObj, target, ...args);
                    }
                });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */ const wrapObject = (target, wrappers = {
            }, metadata = {
            })=>{
                let cache = Object.create(null);
                let handlers = {
                    has (proxyTarget, prop) {
                        return prop in target || prop in cache;
                    },
                    get (proxyTarget, prop, receiver) {
                        if (prop in cache) return cache[prop];
                        if (!(prop in target)) return undefined;
                        let value1 = target[prop];
                        if (typeof value1 === "function") {
                            // This is a method on the underlying object. Check if we need to do
                            // any wrapping.
                            if (typeof wrappers[prop] === "function") // We have a special-case wrapper for this method.
                            value1 = wrapMethod(target, target[prop], wrappers[prop]);
                            else if (hasOwnProperty(metadata, prop)) {
                                // This is an async method that we have metadata for. Create a
                                // Promise wrapper for it.
                                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                                value1 = wrapMethod(target, target[prop], wrapper);
                            } else // This is a method that we don't know or care about. Return the
                            // original method, bound to the underlying object.
                            value1 = value1.bind(target);
                        } else if (typeof value1 === "object" && value1 !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) // This is an object that we need to do some wrapping for the children
                        // of. Create a sub-object wrapper for it with the appropriate child
                        // metadata.
                        value1 = wrapObject(value1, wrappers[prop], metadata[prop]);
                        else if (hasOwnProperty(metadata, "*")) // Wrap all properties in * namespace.
                        value1 = wrapObject(value1, wrappers[prop], metadata["*"]);
                        else {
                            // We don't need to do any wrapping for this property,
                            // so just forward all access to the underlying object.
                            Object.defineProperty(cache, prop, {
                                configurable: true,
                                enumerable: true,
                                get () {
                                    return target[prop];
                                },
                                set (value) {
                                    target[prop] = value;
                                }
                            });
                            return value1;
                        }
                        cache[prop] = value1;
                        return value1;
                    },
                    set (proxyTarget, prop, value, receiver) {
                        if (prop in cache) cache[prop] = value;
                        else target[prop] = value;
                        return true;
                    },
                    defineProperty (proxyTarget, prop, desc) {
                        return Reflect.defineProperty(cache, prop, desc);
                    },
                    deleteProperty (proxyTarget, prop) {
                        return Reflect.deleteProperty(cache, prop);
                    }
                }; // Per contract of the Proxy API, the "get" proxy handler must return the
                // original value of the target if that value is declared read-only and
                // non-configurable. For this reason, we create an object with the
                // prototype set to `target` instead of using `target` directly.
                // Otherwise we cannot return a custom object for APIs that
                // are declared read-only and non-configurable, such as `chrome.devtools`.
                //
                // The proxy handlers themselves will still use the original `target`
                // instead of the `proxyTarget`, so that the methods and properties are
                // dereferenced via the original targets.
                let proxyTarget = Object.create(target);
                return new Proxy(proxyTarget, handlers);
            };
            /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */ const wrapEvent = (wrapperMap)=>({
                    addListener (target, listener, ...args) {
                        target.addListener(wrapperMap.get(listener), ...args);
                    },
                    hasListener (target, listener) {
                        return target.hasListener(wrapperMap.get(listener));
                    },
                    removeListener (target, listener) {
                        target.removeListener(wrapperMap.get(listener));
                    }
                })
            ;
            const onRequestFinishedWrappers = new DefaultWeakMap((listener)=>{
                if (typeof listener !== "function") return listener;
                /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */ return function onRequestFinished(req) {
                    const wrappedReq = wrapObject(req, {
                    }, {
                        getContent: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    });
                    listener(wrappedReq);
                };
            }); // Keep track if the deprecation warning has been logged at least once.
            let loggedSendResponseDeprecationWarning = false;
            const onMessageWrappers = new DefaultWeakMap((listener)=>{
                if (typeof listener !== "function") return listener;
                /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */ return function onMessage(message, sender, sendResponse) {
                    let didCallSendResponse = false;
                    let wrappedSendResponse;
                    let sendResponsePromise = new Promise((resolve)=>{
                        wrappedSendResponse = function(response) {
                            if (!loggedSendResponseDeprecationWarning) {
                                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                                loggedSendResponseDeprecationWarning = true;
                            }
                            didCallSendResponse = true;
                            resolve(response);
                        };
                    });
                    let result;
                    try {
                        result = listener(message, sender, wrappedSendResponse);
                    } catch (err) {
                        result = Promise.reject(err);
                    }
                    const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
                    // wrappedSendResponse synchronously, we can exit earlier
                    // because there will be no response sent from this listener.
                    if (result !== true && !isResultThenable && !didCallSendResponse) return false;
                     // A small helper to send the message if the promise resolves
                    // and an error if the promise rejects (a wrapped sendMessage has
                    // to translate the message into a resolved promise or a rejected
                    // promise).
                    const sendPromisedResult = (promise)=>{
                        promise.then((msg)=>{
                            // send the message value.
                            sendResponse(msg);
                        }, (error)=>{
                            // Send a JSON representation of the error if the rejected value
                            // is an instance of error, or the object itself otherwise.
                            let message1;
                            if (error && (error instanceof Error || typeof error.message === "string")) message1 = error.message;
                            else message1 = "An unexpected error occurred";
                            sendResponse({
                                __mozWebExtensionPolyfillReject__: true,
                                message: message1
                            });
                        }).catch((err)=>{
                            // Print an error on the console if unable to send the response.
                            console.error("Failed to send onMessage rejected reply", err);
                        });
                    }; // If the listener returned a Promise, send the resolved value as a
                    // result, otherwise wait the promise related to the wrappedSendResponse
                    // callback to resolve and send it as a response.
                    if (isResultThenable) sendPromisedResult(result);
                    else sendPromisedResult(sendResponsePromise);
                     // Let Chrome know that the listener is replying.
                    return true;
                };
            });
            const wrappedSendMessageCallback = ({ reject , resolve  }, reply)=>{
                if (extensionAPIs.runtime.lastError) {
                    // Detect when none of the listeners replied to the sendMessage call and resolve
                    // the promise to undefined as in Firefox.
                    // See https://github.com/mozilla/webextension-polyfill/issues/130
                    if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) resolve();
                    else reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (reply && reply.__mozWebExtensionPolyfillReject__) // Convert back the JSON representation of the error into
                // an Error instance.
                reject(new Error(reply.message));
                else resolve(reply);
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args)=>{
                if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                return new Promise((resolve, reject)=>{
                    const wrappedCb = wrappedSendMessageCallback.bind(null, {
                        resolve,
                        reject
                    });
                    args.push(wrappedCb);
                    apiNamespaceObj.sendMessage(...args);
                });
            };
            const staticWrappers = {
                devtools: {
                    network: {
                        onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                    }
                },
                runtime: {
                    onMessage: wrapEvent(onMessageWrappers),
                    onMessageExternal: wrapEvent(onMessageWrappers),
                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                        minArgs: 1,
                        maxArgs: 3
                    })
                },
                tabs: {
                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                        minArgs: 2,
                        maxArgs: 3
                    })
                }
            };
            const settingMetadata = {
                clear: {
                    minArgs: 1,
                    maxArgs: 1
                },
                get: {
                    minArgs: 1,
                    maxArgs: 1
                },
                set: {
                    minArgs: 1,
                    maxArgs: 1
                }
            };
            apiMetadata.privacy = {
                network: {
                    "*": settingMetadata
                },
                services: {
                    "*": settingMetadata
                },
                websites: {
                    "*": settingMetadata
                }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
        };
        if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
         // The build process adds a UMD wrapper around this file, which makes the
        // `module` variable available.
        module.exports = wrapAPIs(chrome);
    } else module.exports = browser;
});

});

parcelRequire.register("1NYDb", function(module, exports) {

$parcel$export(module.exports, "devprint", () => $3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c);

var $5FY3s = parcelRequire("5FY3s");
// Make devprint global for ease of debugging - no need to import explicitly.
// todo-2: all globalThis assignments sd be dome through a helper
globalThis.devprint = $3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c;
/**
 * @description: Prints to console in dev environment; accepts optional indents
 * @exampleInput: 'foo', 2
 * @exampleOutput: console.log('  foo')
 * @pure: false: depends on env_is, prints to console
 * @hasTests: false
 */ const $3b57b66137570d1c84c98d2f0399e362$var$PrinterTypes = {
    LOG: "LOG",
    WARN: "WARN",
    ERROR: "ERROR"
};
function $3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c(textToPrint, relatedObject, type, indentsNum) {
    if (!$5FY3s.env_is.dev()) return;
    const printer = {
        [$3b57b66137570d1c84c98d2f0399e362$var$PrinterTypes.LOG]: console.log,
        [$3b57b66137570d1c84c98d2f0399e362$var$PrinterTypes.WARN]: console.warn,
        [$3b57b66137570d1c84c98d2f0399e362$var$PrinterTypes.ERROR]: console.error
    };
    if (!type) // eslint-disable-next-line no-param-reassign
    type = $3b57b66137570d1c84c98d2f0399e362$var$PrinterTypes.LOG;
    const tabs = indentsNum ? " ".repeat(indentsNum) : "";
    // const tabs = indentsNum ? "\t".repeat(indentsNum) : ""; // Tabs
    relatedObject !== undefined ? printer[type](tabs + textToPrint, relatedObject) : printer[type](tabs + textToPrint);
}
/* eslint-disable functional/immutable-data */ $3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c.warn = function warn(text, obj) {
    return $3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c(text, obj, $3b57b66137570d1c84c98d2f0399e362$var$PrinterTypes.WARN);
};
$3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c.error = function error(text, obj) {
    return $3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c(text, obj, $3b57b66137570d1c84c98d2f0399e362$var$PrinterTypes.ERROR);
}; /* eslint-enable functional/immutable-data */  //# sourceMappingURL=devprint.js.map

});
parcelRequire.register("5FY3s", function(module, exports) {

$parcel$export(module.exports, "env_is", () => $ba868928026753b9d1b1a0ba4fd930e2$export$6f7c4fd0f02f4bbb);

var $3JAaW = parcelRequire("3JAaW");
const $ba868928026753b9d1b1a0ba4fd930e2$export$6f7c4fd0f02f4bbb = {
    prod: ()=>false
    ,
    dev: ()=>!$ba868928026753b9d1b1a0ba4fd930e2$export$6f7c4fd0f02f4bbb.prod()
    ,
    webApp: ()=>!$ba868928026753b9d1b1a0ba4fd930e2$export$6f7c4fd0f02f4bbb.server() && !$ba868928026753b9d1b1a0ba4fd930e2$export$6f7c4fd0f02f4bbb.extn()
    ,
    server: ()=>$3JAaW && $3JAaW.versions && !!$3JAaW.versions.node
    ,
    extn: ()=>$ba868928026753b9d1b1a0ba4fd930e2$export$6f7c4fd0f02f4bbb.extnBS() || $ba868928026753b9d1b1a0ba4fd930e2$export$6f7c4fd0f02f4bbb.extnCS()
    ,
    extnBS: ()=>Boolean(chrome && chrome.permissions !== undefined)
    ,
    extnCS: ()=>Boolean(chrome && chrome.permissions === undefined && chrome.storage)
};
// eslint-disable-next-line functional/immutable-data
globalThis.Env = $ba868928026753b9d1b1a0ba4fd930e2$export$6f7c4fd0f02f4bbb; //# sourceMappingURL=env.js.map

});
parcelRequire.register("3JAaW", function(module, exports) {
// shim for using process in browser
var $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedSetTimeout;
var $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedClearTimeout;
function $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedSetTimeout = setTimeout;
        else $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedSetTimeout = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$defaultSetTimout;
    } catch (e) {
        $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedSetTimeout = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedClearTimeout = clearTimeout;
        else $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedClearTimeout = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$defaultClearTimeout;
    } catch (e) {
        $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedClearTimeout = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$defaultClearTimeout;
    }
})();
function $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$runTimeout(fun) {
    if ($7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedSetTimeout === $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$defaultSetTimout || !$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedSetTimeout) && setTimeout) {
        $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$runClearTimeout(marker) {
    if ($7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedClearTimeout === $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$defaultClearTimeout || !$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedClearTimeout) && clearTimeout) {
        $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$queue = [];
var $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$draining = false;
var $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$currentQueue;
var $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$queueIndex = -1;
function $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cleanUpNextTick() {
    if (!$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$draining || !$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$currentQueue) return;
    $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$draining = false;
    if ($7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$currentQueue.length) $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$queue = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$currentQueue.concat($7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$queue);
    else $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$queueIndex = -1;
    if ($7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$queue.length) $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$drainQueue();
}
function $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$drainQueue() {
    if ($7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$draining) return;
    var timeout = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$runTimeout($7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$cleanUpNextTick);
    $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$draining = true;
    var len = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$queue.length;
    while(len){
        $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$currentQueue = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$queue;
        $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$queue = [];
        while((++$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$queueIndex) < len)if ($7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$currentQueue) $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$currentQueue[$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$queueIndex].run();
        $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$queueIndex = -1;
        len = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$queue.length;
    }
    $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$currentQueue = null;
    $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$draining = false;
    $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$runClearTimeout(timeout);
}
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$queue.push(new $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$Item(fun, args));
    if ($7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$queue.length === 1 && !$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$draining) $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$runTimeout($7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$drainQueue);
};
// v8 likes predictible objects
function $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.title = 'browser';
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.browser = true;
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.env = {
};
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.argv = [];
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.version = ''; // empty string to avoid regexp issues
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.versions = {
};
function $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$noop() {
}
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.on = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$noop;
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.addListener = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$noop;
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.once = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$noop;
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.off = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$noop;
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.removeListener = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$noop;
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.removeAllListeners = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$noop;
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.emit = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$noop;
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.prependListener = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$noop;
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.prependOnceListener = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$noop;
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.listeners = function(name) {
    return [];
};
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.cwd = function() {
    return '/';
};
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process.umask = function() {
    return 0;
};

});



parcelRequire.register("6yWuz", function(module, exports) {

$parcel$export(module.exports, "toggle_Zen_mode", () => $d7a8cd5808370173fb35adafa7b8521b$export$4d1223311a4d8835);
$parcel$export(module.exports, "apply_Zen_mode_status", () => $d7a8cd5808370173fb35adafa7b8521b$export$262e79ad8795ce58);
$parcel$export(module.exports, "set_Zen_mode_status", () => $d7a8cd5808370173fb35adafa7b8521b$export$c7955b010ba27fc);
$parcel$export(module.exports, "toggle_Zen_mode_on_page", () => $d7a8cd5808370173fb35adafa7b8521b$export$46cb427d82afeae0);
$parcel$export(module.exports, "get_Zen_mode_status", () => $d7a8cd5808370173fb35adafa7b8521b$export$65b8832b02c0b56);

var $1NYDb = parcelRequire("1NYDb");

var $3zu8t = parcelRequire("3zu8t");

var $1oTL5 = parcelRequire("1oTL5");

var $2f9nT = parcelRequire("2f9nT");

var $7pCU8 = parcelRequire("7pCU8");

var $Iq2i6 = parcelRequire("Iq2i6");

var $4gcVu = parcelRequire("4gcVu");

var $1cPNT = parcelRequire("1cPNT");

var $3wQgT = parcelRequire("3wQgT");
$1NYDb.devprint("STATUS: Waiting for TOGGLE_ZEN_MODE command.");
async function $d7a8cd5808370173fb35adafa7b8521b$export$4d1223311a4d8835() {
    const zenModeStatus = await $d7a8cd5808370173fb35adafa7b8521b$export$65b8832b02c0b56();
    const newZenModeStatus = $d7a8cd5808370173fb35adafa7b8521b$var$toggle_Zen_mode_status(zenModeStatus);
    await $d7a8cd5808370173fb35adafa7b8521b$export$262e79ad8795ce58(newZenModeStatus);
}
function $d7a8cd5808370173fb35adafa7b8521b$var$toggle_Zen_mode_status(status) {
    return status === $Iq2i6.ZenModeStatuses.ON ? $Iq2i6.ZenModeStatuses.OFF : $Iq2i6.ZenModeStatuses.ON;
}
async function $d7a8cd5808370173fb35adafa7b8521b$export$262e79ad8795ce58(status) {
    await $d7a8cd5808370173fb35adafa7b8521b$export$2585d13eaa07ca30(status);
    await $d7a8cd5808370173fb35adafa7b8521b$export$c7955b010ba27fc(status);
    await $d7a8cd5808370173fb35adafa7b8521b$export$46cb427d82afeae0(status);
}
async function $d7a8cd5808370173fb35adafa7b8521b$export$2585d13eaa07ca30(status) {
    if (status === $Iq2i6.ZenModeStatuses.ON) {
        const openedChat = await new Promise((resolve)=>$4gcVu.getOpenedChat(resolve)
        );
        if (!openedChat) return $7pCU8.process_error(new Error('Opened chat is required'));
        await $3zu8t.set_extn_storage_item({
            [$Iq2i6.StateItemNames.ZEN_MODE_CHAT]: openedChat
        });
    } else await $3zu8t.remove_extn_storage_item($Iq2i6.StateItemNames.ZEN_MODE_CHAT);
}
async function $d7a8cd5808370173fb35adafa7b8521b$export$c7955b010ba27fc(status) {
    await $3zu8t.set_extn_storage_item({
        [$Iq2i6.StateItemNames.ZEN_MODE_STATUS]: status === $Iq2i6.ZenModeStatuses.ON
    });
    $d7a8cd5808370173fb35adafa7b8521b$var$lastZenModeState = status;
    $1NYDb.devprint(`STATUS: Zen Mode is ${status}`);
}
async function $d7a8cd5808370173fb35adafa7b8521b$export$65b8832b02c0b56() {
    const isZenModeON = await $3zu8t.get_extn_storage_item_value($Iq2i6.StateItemNames.ZEN_MODE_STATUS);
    return isZenModeON ? $Iq2i6.ZenModeStatuses.ON : $Iq2i6.ZenModeStatuses.OFF;
}
let $d7a8cd5808370173fb35adafa7b8521b$var$lastTargetedChat;
let $d7a8cd5808370173fb35adafa7b8521b$var$lastZenModeState;
let $d7a8cd5808370173fb35adafa7b8521b$var$zenMutedChats = [];
async function $d7a8cd5808370173fb35adafa7b8521b$export$46cb427d82afeae0(mode) {
    const logoUrl = await $3wQgT.getZenModeLogoUrlByState(mode);
    document.querySelectorAll('.ZenModeLogo').forEach((node)=>{
        $2f9nT.set_el_style(node, {
            "background-image": `url('${logoUrl}')`
        });
    });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const sidebarEl = $1oTL5.DOM.get_el($Iq2i6.Selectors.WA_SIDEBAR);
    $2f9nT.set_el_style(sidebarEl.parentElement, {
        display: mode === $Iq2i6.ZenModeStatuses.ON ? "none" : "initial"
    });
    // Note: That one's invisible by def, but still present in DOM.
    const contactInfoPanelEl = $1oTL5.DOM.get_el($Iq2i6.Selectors.WA_CONTACT_INFO_PANEL);
    if (!contactInfoPanelEl) {
        $7pCU8.throw_DOM_error($Iq2i6.Selectors.WA_CONTACT_INFO_PANEL, "WA_CONTACT_INFO_PANEL");
        return;
    }
    $2f9nT.set_el_style(contactInfoPanelEl, {
        display: mode === $Iq2i6.ZenModeStatuses.ON ? "none" : "initial"
    });
    if (mode === $Iq2i6.ZenModeStatuses.ON) {
        const chat = await $3zu8t.get_extn_storage_item_value($Iq2i6.StateItemNames.ZEN_MODE_CHAT);
        $4gcVu.muteNonMutedChatsExceptChat(chat, (mutedChats)=>{
            $d7a8cd5808370173fb35adafa7b8521b$var$zenMutedChats = mutedChats;
        });
        $4gcVu.getOpenedChat(async (openedChat)=>{
            if (!openedChat || openedChat.id !== chat.id) {
                openedChat = await new Promise((resolve)=>$4gcVu.openChat(chat, resolve)
                );
                if (!openedChat) return $7pCU8.process_error(new Error('Opened chat is missed' + JSON.stringify(openedChat)));
            }
            if (mode === $d7a8cd5808370173fb35adafa7b8521b$var$lastZenModeState) {
                $1cPNT.bindChatsToTitleUnread(openedChat);
                $d7a8cd5808370173fb35adafa7b8521b$var$lastTargetedChat = openedChat;
            }
        });
    } else if (mode === $Iq2i6.ZenModeStatuses.OFF) {
        if ($d7a8cd5808370173fb35adafa7b8521b$var$lastTargetedChat) $1cPNT.unbindAllChatsToTitle();
        if ($d7a8cd5808370173fb35adafa7b8521b$var$zenMutedChats) $4gcVu.unmuteChatsLocally($d7a8cd5808370173fb35adafa7b8521b$var$zenMutedChats);
    }
} //# sourceMappingURL=toggle-zen-mode.js.map

});
parcelRequire.register("3zu8t", function(module, exports) {

$parcel$export(module.exports, "remove_extn_storage_item", () => $75605af2bd24a8f997f225d6e3053d25$export$a055d1ac565865ce);
$parcel$export(module.exports, "get_extn_storage_item_value", () => $75605af2bd24a8f997f225d6e3053d25$export$bb57858f777bdbc5);
$parcel$export(module.exports, "set_extn_storage_item", () => $75605af2bd24a8f997f225d6e3053d25$export$3e230dcbe028f88e);

var $7IzVc = parcelRequire("7IzVc");
async function $75605af2bd24a8f997f225d6e3053d25$export$3e230dcbe028f88e(item, sync = false) {
    if (sync) await (/*@__PURE__*/$parcel$interopDefault($7IzVc)).storage.sync.set(item);
    else await (/*@__PURE__*/$parcel$interopDefault($7IzVc)).storage.local.set(item);
}
async function $75605af2bd24a8f997f225d6e3053d25$export$bb57858f777bdbc5(itemKey, sync = false) {
    if (itemKey !== undefined) {
        const itemObject = sync ? await (/*@__PURE__*/$parcel$interopDefault($7IzVc)).storage.sync.get(itemKey) : await (/*@__PURE__*/$parcel$interopDefault($7IzVc)).storage.local.get(itemKey);
        return itemObject[itemKey];
    } else {
        const data = sync ? await (/*@__PURE__*/$parcel$interopDefault($7IzVc)).storage.sync.get() : await (/*@__PURE__*/$parcel$interopDefault($7IzVc)).storage.local.get();
        return data;
    }
}
async function $75605af2bd24a8f997f225d6e3053d25$export$a055d1ac565865ce(itemKey, sync = false) {
    if (sync) await (/*@__PURE__*/$parcel$interopDefault($7IzVc)).storage.sync.remove(itemKey);
    else await (/*@__PURE__*/$parcel$interopDefault($7IzVc)).storage.local.remove(itemKey);
}
async function $75605af2bd24a8f997f225d6e3053d25$export$6e5a4fea25672324(sync = false) {
    if (sync) await (/*@__PURE__*/$parcel$interopDefault($7IzVc)).storage.sync.clear();
    else await (/*@__PURE__*/$parcel$interopDefault($7IzVc)).storage.local.clear();
} //# sourceMappingURL=storage.js.map

});

parcelRequire.register("1oTL5", function(module, exports) {

$parcel$export(module.exports, "DOM", () => $2e0d60012d0cdbd48ce4369419f28563$export$793b499ad2591e55);

var $6bFfq = parcelRequire("6bFfq");

var $3hs1Q = parcelRequire("3hs1Q");

var $3h5SU = parcelRequire("3h5SU");
const $2e0d60012d0cdbd48ce4369419f28563$export$793b499ad2591e55 = {
    /**
     * @description: Similar to document.body.querySelector; accepts parentEl arg.
     * @exampleInput:  "input" | "foo" | "foo", <someDiv/>
     * @exampleOutput: <input> | null | <span>foo</span>
     * @sideEffects: DOM traversal
     * @hasTests: no
     */ create_el ({ attributes: attributes , html: html , tag: tag , text: text ,  }) {
        const element = document.createElement(tag);
        // Explain: Reassignment by design. Don't want null assert here. Dangerously set inner HTML by design.
        /* eslint-disable functional/immutable-data,@typescript-eslint/non-nullable-type-assertion-style*/ // eslint-disable-next-line no-unsanitized/property
        if (Boolean(html)) element.innerHTML = html;
        if (Boolean(text)) element.innerText = text;
        /* eslint-enable functional/immutable-data,@typescript-eslint/non-nullable-type-assertion-style*/ if (attributes) $3h5SU.set_el_attributes(element, attributes);
        return element;
    },
    /**
     * @description: Similar to document.body.querySelector; accepts parentEl arg.
     * @exampleInput:  "input" | "foo" | "foo", <someDiv/>
     * @exampleOutput: <input> | null | <span>foo</span>
     * @sideEffects: DOM traversal
     * @hasTests: no
     */ get_el (selector, parentEl = document.body) {
        return parentEl.querySelector(selector);
    },
    /**
     * @description: Similar to document.body.querySelectorAll; unless onlyVisible flag is set; accepts parentEl arg.
     * @exampleInput:  "input"                                  | "input", <someDiv/> | "input", <someDiv/>, true .
     * @exampleOutput: [<input>, <input style="display: none">] | [<input>]           | [] .
     * @sideEffects: DOM traversal.
     * @hasTests: no.
     */ get_els (selector, parentEl = document.body, onlyVisible = false) {
        const elArray = [
            ...parentEl.querySelectorAll(selector)
        ];
        return onlyVisible ? elArray.filter($3hs1Q.is_el_visible) : elArray;
    },
    /**
     * @description: Similar to document.body.querySelectorAll; unless onlyVisible flag is set; accepts parentEl arg.
     * @exampleInput:  "input"                                  | "input", <someDiv/> | "input", <someDiv/>, true .
     * @exampleOutput: [<input>, <input style="display: none">] | [<input>]           | [] .
     * @sideEffects: DOM traversal.
     * @hasTests: no.
     */ get_input_els (selector, parentEl = document.body, onlyVisible = false) {
        const elArray = [
            ...parentEl.querySelectorAll(selector)
        ];
        return onlyVisible ? elArray.filter($3hs1Q.is_el_visible) : elArray;
    },
    /**
     * @description: Checks if page has a given text string.
     * @exampleInput:  "foo"
     * @exampleOutput: true
     * @sideEffects: DOM traversal
     * @hasTests: no
     */ includes_text (text) {
        return document.body.innerText.includes(text);
    },
    /**
     * @description: Removes an El from DOM; returns true or false
     * @exampleInput:  "#element" (found in DOM) | "#element" (not found in DOM)
     * @exampleOutput: true                      | false
     * @sideEffects: DOM manipulation
     * @hasTests: no
     */ remove_el (selector) {
        const el = $2e0d60012d0cdbd48ce4369419f28563$export$793b499ad2591e55.get_el(selector);
        if (el) {
            el.remove();
            return true;
        }
        return false;
    },
    /**
     * @description: Looks for a selector in document body every {pollMs}; does this for ...
     *               {waitMs}. If within {waitMs} Element is found - returns Element; ...
     *               otherwise returns null.
     * @exampleInput:  ".foo"                  | '#non-existent'
     * @exampleOutput: <div class="foo"></div> | null
     * @sideEffects: DOM traversal
     * @hasTests: no
     */ async wait_and_get_el (selector, waitMs = 3000, pollMs = 100) {
        return new Promise((resolve)=>{
            // Explain: This interval timer checks for the presence of Element every 100ms;
            // if found - resolves the promise with Element and clears overall timer.
            const intervalHandle = setInterval(()=>{
                const el = $2e0d60012d0cdbd48ce4369419f28563$export$793b499ad2591e55.get_el(selector);
                if (el) {
                    clearInterval(intervalHandle);
                    clearTimeout(timeoutHandle);
                    resolve(el);
                }
            }, pollMs);
            // Explain: This overall timer waits for 3000ms; if by that time Element is not ...
            // found - resolves the promise with null and clears interval timer.
            const timeoutHandle = setTimeout(()=>{
                clearInterval(intervalHandle);
                resolve(null);
            }, waitMs);
        });
    },
    async wait_to_include_text (text, waitMs, pollMs) {
        return $6bFfq.wait_for_fn_to_return_true($2e0d60012d0cdbd48ce4369419f28563$export$793b499ad2591e55.includes_text, [
            text
        ], waitMs, pollMs);
    }
}; //# sourceMappingURL=DOM-shortcuts.js.map

});
parcelRequire.register("6bFfq", function(module, exports) {

$parcel$export(module.exports, "wait_for_fn_to_return_true", () => $cb52ba3bff08ce0694ccefa12e2d39a6$export$c47ae6886184cc32);
async function $cb52ba3bff08ce0694ccefa12e2d39a6$export$9f9964aa1637ba06(time) {
    // prettier-ignore
    // eslint-disable-next-line promise/avoid-new
    return new Promise((resolve)=>setTimeout(resolve, time)
    );
}
const $cb52ba3bff08ce0694ccefa12e2d39a6$export$b82e7eff1db0af9e = async ()=>$cb52ba3bff08ce0694ccefa12e2d39a6$export$9f9964aa1637ba06(10)
;
const $cb52ba3bff08ce0694ccefa12e2d39a6$export$e975371be88f0606 = async ()=>$cb52ba3bff08ce0694ccefa12e2d39a6$export$9f9964aa1637ba06(100)
;
const $cb52ba3bff08ce0694ccefa12e2d39a6$export$696cacb452e96dac = async ()=>$cb52ba3bff08ce0694ccefa12e2d39a6$export$9f9964aa1637ba06(500)
;
const $cb52ba3bff08ce0694ccefa12e2d39a6$export$88d94d421b9361a5 = async ()=>$cb52ba3bff08ce0694ccefa12e2d39a6$export$9f9964aa1637ba06(1000)
;
const $cb52ba3bff08ce0694ccefa12e2d39a6$export$820d560c5b65c3e6 = async ()=>$cb52ba3bff08ce0694ccefa12e2d39a6$export$9f9964aa1637ba06(2000)
;
const $cb52ba3bff08ce0694ccefa12e2d39a6$export$adf32b010eb35cab = async ()=>$cb52ba3bff08ce0694ccefa12e2d39a6$export$9f9964aa1637ba06(3000)
;
const $cb52ba3bff08ce0694ccefa12e2d39a6$export$ab54b0c5991e7208 = async ()=>$cb52ba3bff08ce0694ccefa12e2d39a6$export$9f9964aa1637ba06(5000)
;
async function $cb52ba3bff08ce0694ccefa12e2d39a6$export$c47ae6886184cc32(fn, fnArgs, waitMs = 3000, pollMs = 100) {
    return new Promise((resolve)=>{
        // Explain: This interval timer checks for fn to return true every 100ms;
        // if found - resolves the promise with Element and clears overall timer.
        const intervalHandle = setInterval(()=>{
            const result = fnArgs ? fn(...fnArgs) : fn();
            if (result) {
                clearInterval(intervalHandle);
                clearTimeout(timeoutHandle);
                resolve(true);
            }
        }, pollMs);
        // Explain: This overall timer waits for 3000ms; if by that time fn has not ...
        // returned true - resolves the promise with null and clears interval timer.
        const timeoutHandle = setTimeout(()=>{
            clearInterval(intervalHandle);
            resolve(null);
        }, waitMs);
    });
} //# sourceMappingURL=wait.js.map

});

parcelRequire.register("3hs1Q", function(module, exports) {

$parcel$export(module.exports, "is_el_visible", () => $6bd1bd0b40c6765c8077d74e460c93e3$export$1dcb035d18575374);
function $6bd1bd0b40c6765c8077d74e460c93e3$export$1dcb035d18575374(el) {
    return(// https://stackoverflow.com/a/33456469/4507580
    Boolean(el.offsetWidth || el.offsetHeight || el.getClientRects().length) && !$6bd1bd0b40c6765c8077d74e460c93e3$var$isHiddenByCSS(el));
}
function $6bd1bd0b40c6765c8077d74e460c93e3$var$isHiddenByCSS(el) {
    return el.style.display === "none" || el.style.visibility === "hidden" || parseFloat(el.style.opacity) < 0.1;
} //# sourceMappingURL=is-el-visible.js.map

});

parcelRequire.register("3h5SU", function(module, exports) {

$parcel$export(module.exports, "set_el_attributes", () => $6ba1487ae4e458566a2387582c30bbb3$export$923e18c5c7e1f255);
function $6ba1487ae4e458566a2387582c30bbb3$export$923e18c5c7e1f255(el, attributes) {
    Object.entries(attributes).forEach((entry)=>{
        // Explain: TS has incorrect typings for .setAttribute.
        // @ts-ignore
        el.setAttribute(...entry);
    });
    return el;
} //# sourceMappingURL=set-el-attributes.js.map

});


parcelRequire.register("2f9nT", function(module, exports) {

$parcel$export(module.exports, "set_el_style", () => $49be40963613225902eca2a0040991b4$export$4461241cf18601f);
function $49be40963613225902eca2a0040991b4$export$4461241cf18601f(el, styleObj) {
    Object.entries(styleObj).forEach((entry)=>el.style.setProperty(...entry)
    );
    return el;
} //# sourceMappingURL=set-el-style.js.map

});

parcelRequire.register("7pCU8", function(module, exports) {

$parcel$export(module.exports, "throw_DOM_error", () => $f3944af0ee5850a7ed7011d7335d46ff$export$3244383389b34b9e);
$parcel$export(module.exports, "process_error", () => $f3944af0ee5850a7ed7011d7335d46ff$export$a6ea1f364a8a51a9);
function $f3944af0ee5850a7ed7011d7335d46ff$export$a6ea1f364a8a51a9(errorOrErrorMessage) {
    // Explain: By design.
    // eslint-disable-next-line functional/no-throw-statement
    if (errorOrErrorMessage instanceof Error) throw errorOrErrorMessage;
    // Explain: By design.
    // eslint-disable-next-line no-console
    console.error(errorOrErrorMessage);
}
function $f3944af0ee5850a7ed7011d7335d46ff$export$3244383389b34b9e(selector, selectorName) {
    $f3944af0ee5850a7ed7011d7335d46ff$export$a6ea1f364a8a51a9(Error(`Cannot find ${selectorName} ("${selector}") element. Check that its selector is in the DOM`));
} //# sourceMappingURL=process-error.js.map

});

parcelRequire.register("Iq2i6", function(module, exports) {

$parcel$export(module.exports, "URLS", () => $178a527f21424d31065cefc09ec3ec96$export$18569626f2c768eb);
$parcel$export(module.exports, "ZenModeStatuses", () => $178a527f21424d31065cefc09ec3ec96$export$834ebfe5c40bc25);
$parcel$export(module.exports, "ZEN_MORNING_HOUR", () => $178a527f21424d31065cefc09ec3ec96$export$e772ddb465e8deb2);
$parcel$export(module.exports, "Commands", () => $178a527f21424d31065cefc09ec3ec96$export$211ed39b03f3f464);
$parcel$export(module.exports, "StateItemNames", () => $178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24);
$parcel$export(module.exports, "Selectors", () => $178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767);
const $178a527f21424d31065cefc09ec3ec96$export$18569626f2c768eb = {
    FEEDBACK_EMAIL: "mailto:usezenmode@gmail.com",
    INTRO_PAGE: "https://google.com",
    PROXY: "https://cors-anywhere.herokuapp.com:443/"
};
var $178a527f21424d31065cefc09ec3ec96$export$211ed39b03f3f464;
(function(Commands) {
    Commands["TOGGLE_ZEN_MODE"] = "TOGGLE_ZEN_MODE";
    Commands["CHECK_ZENMORNING"] = "CHECK_ZENMORNING";
})($178a527f21424d31065cefc09ec3ec96$export$211ed39b03f3f464 || ($178a527f21424d31065cefc09ec3ec96$export$211ed39b03f3f464 = {
}));
var $178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24;
(function(StateItemNames) {
    StateItemNames["HIDDEN_CONTACTS"] = "HIDDEN_CONTACTS";
    StateItemNames["ZEN_MORNING_CHAT"] = "ZEN_MORNING_CHAT";
    StateItemNames["RELEASE_NOTES_VIEWED"] = "RELEASE_NOTES_VIEWED";
    StateItemNames["ZEN_MODE_STATUS"] = "ZEN_MODE_STATUS";
    StateItemNames["ZEN_MODE_CHAT"] = "ZEN_MODE_CHAT";
    StateItemNames["LAST_ACTIVITY_DATE"] = "LAST_ACTIVITY_DATE";
    StateItemNames["ZEN_MODE_FORCE_BY_ZEN_MORNING"] = "ZEN_MODE_FORCE_BY_ZEN_MORNING";
    StateItemNames["SMART_MUTE_STATUS"] = "SMART_MUTE_STATUS";
    StateItemNames["AUTO_READ_HIDDEN_CONVERSATIONS_STATUS"] = "AUTO_READ_HIDDEN_CONVERSATIONS_STATUS";
    StateItemNames["SETTINGS_MENU"] = "SETTINGS_MENU";
    StateItemNames["SCHEDULED_HIDDEN"] = "SCHEDULED_HIDDEN";
    StateItemNames["DEBUG_MODE_STATUS"] = "DEBUG_MODE_STATUS";
    StateItemNames["PINNED_CHATS_STATUS_ENABLED"] = "PINNED_CHATS_STATUS_ENABLED";
    StateItemNames["WAS_SHOWN_PINNED_CHATS_STATUS_ONBOARDING"] = "WAS_SHOWN_PINNED_CHATS_STATUS_ONBOARDING";
})($178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24 || ($178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24 = {
}));
var $178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767;
(function(Selectors) {
    // Note: there are 2 regions; we need the 1st.
    Selectors["WA_CONTACT_LIST"] = "#pane-side [role=grid]";
    // Attention: Non-exclusive! Other unrelated els have this too.
    Selectors["WA_CONTACT_NAME"] = "span.ggj6brxn[title]";
    Selectors["WA_CONTACT_SECOND_DIV"] = "[role='gridcell']";
    Selectors["WA_CONTACT_ELEMENT_HOVERED_DIV"] = ".vq6sj:hover";
    Selectors["WA_CONTACT_ICON_CLASS_NAME"] = "_2TiQe";
    Selectors["WA_CONTACT_UNREAD_SPAN"] = "._38M1B";
    Selectors["WA_TARGETED_CHAT_TITLE"] = "#main > header span[title]";
    // Explain: WA ctx menu get rendered to dom only on RMB click. Since we need to use it's ..
    // class to style our own ctx menu - we have to hard code the name of the class.
    // WA_CONTACT_CTX_MENU = "#app span:nth-of-type(4) > div",
    // WA_CONTACT_CTX_MENU_LIST = "#app span:nth-of-type(4) > div ul",
    // WA_CONTACT_CTX_MENU_LIST_ITEM = "#app span:nth-of-type(4) > div ul li",
    // WA_CONTACT_CTX_MENU_ITEM_CONTENTS_DIV = "#app span:nth-of-type(4) > div ul [role='button']",
    Selectors["WA_BACK_BTN"] = "._27F2N [data-testid=back]";
    Selectors["WA_CONTACT_WRAPPER_CLASS"] = "vq6sj";
    Selectors["WA_CONTACT_CONTAINER"] = "._ccCW";
    Selectors["WA_CONTACT_INFO_CONTAINER"] = "._3vPI2";
    Selectors["WA_CONTACT_CTX_MENU"] = "#app > div > span > .o--vV";
    Selectors["WA_CONTACT_CTX_MENU_LIST"] = "._19rjv";
    Selectors["WA_GENERAL_CTX_MENU"] = "._1R3Un ._1qAEq._11bi2";
    Selectors["WA_LEFT_CONTAINER"] = "._1sMV6";
    Selectors["WA_LEFT_HEADER_BUTTONS"] = "._3UaCz > span";
    // Explain: Looks like it's not needed.
    Selectors["WA_CONTACT_CTX_MENU_ITEM_CONTENTS_DIV"] = "._11srW, ._2xxet";
    Selectors["WA_HIDDEN_LABEL_CONTAINER"] = "._1SjZ2 ._2TiQe._2SDbp";
    Selectors["WA_CONTACT_INFO_PANEL"] = "#app > div > div > div:nth-of-type(2) > div:nth-of-type(1)";
    Selectors["WA_SIDEBAR"] = "#side";
    Selectors["WA_USER_NAVBAR"] = "#main header";
    Selectors["ZM_CTX_MENU"] = "#ZenMode__contextMenu";
    Selectors["ZM_CTX_MENU_ITEM"] = ".ZenMode__contextMenuItem";
    Selectors["ZM_HIDE_CONTACT_CTX_MENU_ITEM"] = "#ZenMode__hideContact";
    Selectors["ZM_UNHIDE_CONTACT_CTX_MENU_ITEM"] = "#ZenMode__unhideContact";
    Selectors["ZM_ZENMORNING_CONTACT_CTX_MENU_ITEM"] = "#ZenMode__zenMorning";
    Selectors["ZM_VISIBILITY_SHEDULER_CTX_MENU_ITEM"] = "#ZenMode__visibilitySheduler";
    Selectors["ZM_ZENMORNING_CONTACT_SUNICON"] = "#ZenMode__zenMorning__sunIcon";
    Selectors["ZM_ZENMORNING_AREA"] = "#ZenMode__zenMorningArea";
    Selectors["ZM_ZENMORNING_AREA_FOOTER"] = "#ZenMode__zenMorningArea__footer";
    Selectors["ZM_RELEASE_NOTES_AREA"] = "#ZenMode__releaseNotes";
    Selectors["ZM_RELEASE_NOTES_AREA_CLOSE_BTN"] = "#ZenMode__releaseNotes__closeBtn";
    Selectors["ZM_RELEASE_NOTES_AREA_VERSION"] = "#ZenMode__releaseNotes__version";
    Selectors["ZM_CTX_MENU_ITEM_SMARTMUTE"] = "#ZenMode__contextMenuItem__smartMute";
    Selectors["ZM_SMARTMUTE_SOUNDICON"] = "#ZenMode__smartMute__soundIcon";
    Selectors["ZM_SMARTMUTE_TEXT"] = "#ZenMode__smartMute__text";
    Selectors["ZM_CTX_MENU_ITEM_DEBUG_MODE"] = "#ZenMode__contextMenuItem__debugMode";
    Selectors["ZM_CTX_MENU_ITEM_DEBUG_TEXT"] = "#ZenMode__contextMenuItem__debugMode__text";
    Selectors["ZM_CTX_MENU_ITEM_DEBUG_SWITCH_ICON"] = "#ZenMode__contextMenuItem__debugMode__switchIcon";
    Selectors["ZM_DEBUG_MODE_INDICATOR"] = "#ZenMode__debugModeIndidcator";
    Selectors["ZM_TOGGLE_BUTTON"] = "#ZenMode__toggle";
    Selectors["ZM_TOGGLE_BUTTON_CHEVRON"] = "#ZenMode__toggle__chevron";
    Selectors["ZM_BADGE"] = "#ZenMode__badge";
    Selectors["ZM_TRELLO_LIST_CONTENT"] = "js-list-content";
    Selectors["ZM_HIDE_POPUP"] = "#ZenMode_hide_popup";
    Selectors["ZM_VISIBILITY_SHEDULER_POPUP"] = "#ZenMode__visibilityShedulerPopup";
    Selectors["ZM_TRELLO_POP_OVER"] = "div.pop-over";
    Selectors["ZM_TRELLO_POP_OVER_CONTENT"] = "div.pop-over-content";
    Selectors["ZM_TRELLO_POP_OVER_LIST"] = "pop-over-list";
    Selectors["ZM_TRELLO_WINDOW_OVERLAY"] = "div.window-overlay";
    Selectors["ZM_TRELLO_LIST_HEADER"] = "list-header-extras";
    Selectors["ZM_TRELLO_CLOSE_POP_OVER_BTN"] = "a.pop-over-header-close-btn";
})($178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767 || ($178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767 = {
}));
var $178a527f21424d31065cefc09ec3ec96$export$9ff519afaa1072d3;
(function(ZenDomDataAttributes) {
    ZenDomDataAttributes["chat-id"] = "zm-data-chat-id";
})($178a527f21424d31065cefc09ec3ec96$export$9ff519afaa1072d3 || ($178a527f21424d31065cefc09ec3ec96$export$9ff519afaa1072d3 = {
}));
var $178a527f21424d31065cefc09ec3ec96$export$834ebfe5c40bc25;
(function(ZenModeStatuses) {
    ZenModeStatuses["ON"] = "ON";
    ZenModeStatuses["OFF"] = "OFF";
})($178a527f21424d31065cefc09ec3ec96$export$834ebfe5c40bc25 || ($178a527f21424d31065cefc09ec3ec96$export$834ebfe5c40bc25 = {
}));
const $178a527f21424d31065cefc09ec3ec96$export$e772ddb465e8deb2 = 4;
const $178a527f21424d31065cefc09ec3ec96$export$c8baed79a55c86cb = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18">\n<path fill="currentColor" d="M11.52 9.206c0-1.4-.778-2.567-1.944-3.111v1.711L11.52 9.75v-.544zm1.945 0c0 .7-.156 1.4-.389 2.022l1.167 1.167c.544-.933.778-2.1.778-3.267 0-3.344-2.333-6.144-5.444-6.844v1.633c2.255.778 3.888 2.8 3.888 5.289zm-11.433-7L1.02 3.217l3.656 3.656H1.02v4.667h3.111l3.889 3.889v-5.211l3.344 3.344c-.544.389-1.089.7-1.789.933v1.633a6.64 6.64 0 0 0 2.878-1.4l1.556 1.556 1.011-1.011-7-7-5.988-6.067zm5.988.778L6.387 4.617 8.02 6.25V2.984z"></path></svg>`;
const $178a527f21424d31065cefc09ec3ec96$export$ead476313b4f9c8f = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384" fill="currentColor">\n<g>\n	<g>\n		<g>\n			<path d="M288,192c0-37.653-21.76-70.187-53.333-85.867v171.84C266.24,262.187,288,229.653,288,192z"/>\n			<polygon points="0,128 0,256 85.333,256 192,362.667 192,21.333 85.333,128    "/>\n			<path d="M234.667,4.907V48.96C296.32,67.307,341.333,124.373,341.333,192S296.32,316.693,234.667,335.04v44.053     C320.107,359.68,384,283.413,384,192S320.107,24.32,234.667,4.907z"/>\n		</g>\n	</g>\n</g>\n</svg>`;
const $178a527f21424d31065cefc09ec3ec96$export$6aacc25eb95f1ba1 = `&#x2713;`; //# sourceMappingURL=dictionary.js.map

});

parcelRequire.register("4gcVu", function(module, exports) {

$parcel$export(module.exports, "findChatByTitle", () => $8c046132b69016d28a2293c89eede610$export$2a376d7df9a2a354);
$parcel$export(module.exports, "getOpenedChat", () => $8c046132b69016d28a2293c89eede610$export$457406a3a98cf305);
$parcel$export(module.exports, "archiveChatLocally", () => $8c046132b69016d28a2293c89eede610$export$a269e5013b100441);
$parcel$export(module.exports, "turnOffChatsSounds", () => $8c046132b69016d28a2293c89eede610$export$8976711687167714);
$parcel$export(module.exports, "markChatUnread", () => $8c046132b69016d28a2293c89eede610$export$66a398bfd91d2a45);
$parcel$export(module.exports, "muteChatLocally", () => $8c046132b69016d28a2293c89eede610$export$ab35766eec46a671);
$parcel$export(module.exports, "unArchiveChatLocally", () => $8c046132b69016d28a2293c89eede610$export$3ed1db5f66860a16);
$parcel$export(module.exports, "muteNonMutedChatsExceptChat", () => $8c046132b69016d28a2293c89eede610$export$fce81e19348fd126);
$parcel$export(module.exports, "enableOfflineMode", () => $8c046132b69016d28a2293c89eede610$export$8e9b7686204271b4);
$parcel$export(module.exports, "getProfilePicUrl", () => $8c046132b69016d28a2293c89eede610$export$ff5de66344c98a72);
$parcel$export(module.exports, "isOfflineModeEnabled", () => $8c046132b69016d28a2293c89eede610$export$362a6c0cf355a52);
$parcel$export(module.exports, "getPinnedChats", () => $8c046132b69016d28a2293c89eede610$export$3d3dc3a79d695ef5);
$parcel$export(module.exports, "unmuteChatsLocally", () => $8c046132b69016d28a2293c89eede610$export$af56749b1fc740);
$parcel$export(module.exports, "turnOnChatsSounds", () => $8c046132b69016d28a2293c89eede610$export$1320171098f463d0);
$parcel$export(module.exports, "updateChatModels", () => $8c046132b69016d28a2293c89eede610$export$108e29aecb2e6b14);
$parcel$export(module.exports, "openChat", () => $8c046132b69016d28a2293c89eede610$export$f4a8128ec2a0ed6c);
$parcel$export(module.exports, "getUnreadChats", () => $8c046132b69016d28a2293c89eede610$export$caa865573843e58d);

var $7IzVc = parcelRequire("7IzVc");

var $3HH7x = parcelRequire("3HH7x");

var $6cJ25 = parcelRequire("6cJ25");

var $2Sxce = parcelRequire("2Sxce");

var $2YKaR = parcelRequire("2YKaR");
const $8c046132b69016d28a2293c89eede610$var$requestIdToPromiseProto = {
};
const $8c046132b69016d28a2293c89eede610$var$pageBridgePort = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.connect('%%EXTENSION_GLOBAL_ID%%', {
    name: $3HH7x.BridgePortType.WWA_EXTENSION_CONNECTOR
});
$8c046132b69016d28a2293c89eede610$var$pageBridgePort.onMessage.addListener(async (response)=>{
    if (response.action === "LOG") {
        const { type: type , message: message , payload: payload  } = response.payload;
        try {
            await $2YKaR.logger.log(type, message, payload);
        } catch (e) {
            console.error(e);
        }
        return;
    }
    if (response.action === "NEW_MESSAGE") return await $8c046132b69016d28a2293c89eede610$var$processChatMessage(response);
    const requestId = response.id;
    if (requestId) {
        const callback = $8c046132b69016d28a2293c89eede610$var$requestIdToPromiseProto[requestId];
        if (callback) {
            if (response.result) callback(response.result);
            else callback();
        }
        delete $8c046132b69016d28a2293c89eede610$var$requestIdToPromiseProto[response.id];
    }
});
async function $8c046132b69016d28a2293c89eede610$var$processChatMessage(response) {
    const { msg: msg , user: user  } = response.payload;
    const userId = user.toString();
    const chatId = msg.fromMe ? msg.to : msg.from;
    const chat = await $2Sxce.getHiddenChatById(chatId);
    if (chat === null || chat === void 0 ? void 0 : chat.isGroup) {
        const isMentioned = msg.mentionedJidList.find((mentionedJid)=>mentionedJid === userId
        );
        const isQuoted = msg.quotedParticipant === userId;
        if (isMentioned || isQuoted) {
            $2Sxce.removeHiddenChats(chat);
            return;
        }
    }
    return;
}
/*
  @depricated Use callProvider based on promise
 */ function $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback(call, args, callback) {
    const request = $6cJ25.generateBasicWWARequest(call, args);
    $8c046132b69016d28a2293c89eede610$var$requestIdToPromiseProto[request.id] = callback;
    $8c046132b69016d28a2293c89eede610$var$pageBridgePort.postMessage(request);
}
function $8c046132b69016d28a2293c89eede610$var$callProvider(call, args) {
    return new Promise((resolve, _)=>{
        $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback(call, args, resolve);
    });
}
function $8c046132b69016d28a2293c89eede610$export$2a376d7df9a2a354(chatTitle, callback) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.findChatByTitle, [
        chatTitle
    ], callback);
}
function $8c046132b69016d28a2293c89eede610$export$108e29aecb2e6b14(chats, callback) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.updateChatModels, [
        chats
    ], callback);
}
function $8c046132b69016d28a2293c89eede610$export$ab35766eec46a671(chat, callback) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.muteChatLocally, [
        chat
    ], callback);
}
function $8c046132b69016d28a2293c89eede610$export$af56749b1fc740(chats, callback) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.unmuteChatsLocally, [
        chats
    ], callback);
}
function $8c046132b69016d28a2293c89eede610$export$fce81e19348fd126(chat, callback) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.muteNonMutedChatsExceptChat, [
        chat
    ], callback);
}
function $8c046132b69016d28a2293c89eede610$export$a269e5013b100441(chat, callback) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.archiveChatLocally, [
        chat
    ], callback);
}
function $8c046132b69016d28a2293c89eede610$export$3ed1db5f66860a16(chat, callback) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.unArchiveChatLocally, [
        chat
    ], callback);
}
function $8c046132b69016d28a2293c89eede610$export$f0b94c2a521642ab(chatId, callback) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.getChatById, [
        chatId
    ], callback);
}
function $8c046132b69016d28a2293c89eede610$export$f4a8128ec2a0ed6c(chat, callback) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.openChat, [
        chat
    ], callback);
}
function $8c046132b69016d28a2293c89eede610$export$457406a3a98cf305(callback) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.getOpenedChat, [], callback);
}
function $8c046132b69016d28a2293c89eede610$export$a58cf04a1f90ed5f(callback) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.refreshWWChats, [], callback);
}
function $8c046132b69016d28a2293c89eede610$export$1320171098f463d0(callback) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.setChatsSounds, [
        true
    ], callback);
}
function $8c046132b69016d28a2293c89eede610$export$8976711687167714(callback) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.setChatsSounds, [
        false
    ], callback);
}
function $8c046132b69016d28a2293c89eede610$export$b96f80a469148b4e(callback) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.getChatsSoundsState, [], callback);
}
function $8c046132b69016d28a2293c89eede610$export$6883309f699d5bd0(chatId) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.markChatAsRead, [
        chatId
    ]);
}
function $8c046132b69016d28a2293c89eede610$export$66a398bfd91d2a45(chatId) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.markChatUnread, [
        chatId
    ]);
}
function $8c046132b69016d28a2293c89eede610$export$ff5de66344c98a72(chat, callback) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.getProfilePicUrl, [
        chat
    ], callback);
}
function $8c046132b69016d28a2293c89eede610$export$caa865573843e58d(callback) {
    $8c046132b69016d28a2293c89eede610$var$callProviderFunctionWithCallback($3HH7x.WWAProviderCall.getUnreadChats, [], callback);
}
function $8c046132b69016d28a2293c89eede610$export$8e9b7686204271b4(enable) {
    return $8c046132b69016d28a2293c89eede610$var$callProvider($3HH7x.WWAProviderCall.enableOfflineMode, [
        enable
    ]);
}
function $8c046132b69016d28a2293c89eede610$export$362a6c0cf355a52() {
    return $8c046132b69016d28a2293c89eede610$var$callProvider($3HH7x.WWAProviderCall.isOfflineModeEnabled, []);
}
function $8c046132b69016d28a2293c89eede610$export$3d3dc3a79d695ef5() {
    return $8c046132b69016d28a2293c89eede610$var$callProvider($3HH7x.WWAProviderCall.getPinnedChats, []);
} //# sourceMappingURL=ExtensionConnector.js.map

});
parcelRequire.register("3HH7x", function(module, exports) {

$parcel$export(module.exports, "InternalEvent", () => $79ba1ac996accdfb0162ac0d8cb02bcc$export$622c3ccfccf5c362);
$parcel$export(module.exports, "WWAProviderCall", () => $79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960);
$parcel$export(module.exports, "BridgePortType", () => $79ba1ac996accdfb0162ac0d8cb02bcc$export$ce596a179b780573);
var $79ba1ac996accdfb0162ac0d8cb02bcc$export$ce596a179b780573;
(function(BridgePortType) {
    BridgePortType["WWA_EXTENSION_CONNECTOR"] = "0LLQsNGC0YbQsNC/";
    BridgePortType["WWA_EXTERNAL_CONNECTOR"] = "0YHQvtGB0Lg=";
    BridgePortType["WWA_EVENTS_CONNECTOR"] = "0KXRg9CZ";
})($79ba1ac996accdfb0162ac0d8cb02bcc$export$ce596a179b780573 || ($79ba1ac996accdfb0162ac0d8cb02bcc$export$ce596a179b780573 = {
}));
var $79ba1ac996accdfb0162ac0d8cb02bcc$export$622c3ccfccf5c362;
(function(InternalEvent) {
    InternalEvent["CHAT_CHANGED_UNREAD_COUNT"] = "CHAT_CHANGED_UNREAD_COUNT";
    InternalEvent["CHAT_NEW_MESSAGE"] = "CHAT_NEW_MESSAGE";
    InternalEvent["CHAT_CHANGED_PIN"] = "CHAT_CHANGED_PIN";
    InternalEvent["CHAT_CHANGED_STATUS"] = "CHAT_CHANGED_STATUS";
})($79ba1ac996accdfb0162ac0d8cb02bcc$export$622c3ccfccf5c362 || ($79ba1ac996accdfb0162ac0d8cb02bcc$export$622c3ccfccf5c362 = {
}));
var $79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960;
(function(WWAProviderCall) {
    WWAProviderCall[WWAProviderCall["findChatByTitle"] = 0] = "findChatByTitle";
    WWAProviderCall[WWAProviderCall["updateChatModels"] = 1] = "updateChatModels";
    WWAProviderCall[WWAProviderCall["muteChatLocally"] = 2] = "muteChatLocally";
    WWAProviderCall[WWAProviderCall["unmuteChatsLocally"] = 3] = "unmuteChatsLocally";
    WWAProviderCall[WWAProviderCall["archiveChatLocally"] = 4] = "archiveChatLocally";
    WWAProviderCall[WWAProviderCall["unArchiveChatLocally"] = 5] = "unArchiveChatLocally";
    WWAProviderCall[WWAProviderCall["muteNonMutedChatsExceptChat"] = 6] = "muteNonMutedChatsExceptChat";
    WWAProviderCall[WWAProviderCall["setChatsSounds"] = 7] = "setChatsSounds";
    WWAProviderCall[WWAProviderCall["getChatsSoundsState"] = 8] = "getChatsSoundsState";
    WWAProviderCall[WWAProviderCall["getChatById"] = 9] = "getChatById";
    WWAProviderCall[WWAProviderCall["getOpenedChat"] = 10] = "getOpenedChat";
    WWAProviderCall[WWAProviderCall["openChat"] = 11] = "openChat";
    WWAProviderCall[WWAProviderCall["refreshWWChats"] = 12] = "refreshWWChats";
    WWAProviderCall[WWAProviderCall["markChatAsRead"] = 13] = "markChatAsRead";
    WWAProviderCall[WWAProviderCall["markChatUnread"] = 14] = "markChatUnread";
    WWAProviderCall[WWAProviderCall["getProfilePicUrl"] = 15] = "getProfilePicUrl";
    WWAProviderCall[WWAProviderCall["getUnreadChats"] = 16] = "getUnreadChats";
    WWAProviderCall[WWAProviderCall["enableOfflineMode"] = 17] = "enableOfflineMode";
    WWAProviderCall[WWAProviderCall["isOfflineModeEnabled"] = 18] = "isOfflineModeEnabled";
    WWAProviderCall[WWAProviderCall["getPinnedChats"] = 19] = "getPinnedChats";
})($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960 || ($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960 = {
})); //# sourceMappingURL=types.js.map

});

parcelRequire.register("6cJ25", function(module, exports) {

$parcel$export(module.exports, "generateBasicWWARequest", () => $cbe2ad1457763550f6af9927987c7fe8$export$76f9b6656a0717ff);
$parcel$export(module.exports, "generateBasicWWAResponse", () => $cbe2ad1457763550f6af9927987c7fe8$export$2ec2860c66d81812);

var $5sjxQ = parcelRequire("5sjxQ");
function $cbe2ad1457763550f6af9927987c7fe8$export$76f9b6656a0717ff(call, args = []) {
    return {
        id: $5sjxQ.default(),
        call: call,
        args: args
    };
}
function $cbe2ad1457763550f6af9927987c7fe8$export$2ec2860c66d81812(id, result, error, request) {
    const requestResult = {
        id: id
    };
    if (error) {
        requestResult.error = error;
        requestResult.original = request;
    }
    if (result) requestResult.result = result;
    return requestResult;
} //# sourceMappingURL=Utils.js.map

});
parcelRequire.register("5sjxQ", function(module, exports) {

$parcel$export(module.exports, "default", () => $b34a38bc0d849075d20cf20e7c9cbb98$export$9099ad97b570f7c);

var $3xEKY = parcelRequire("3xEKY");

var $29GKt = parcelRequire("29GKt");
function $b34a38bc0d849075d20cf20e7c9cbb98$var$v4(options, buf, offset) {
    options = options || {
    };
    var rnds = options.random || (options.rng || $3xEKY.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(var i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return $29GKt.default(rnds);
}
var $b34a38bc0d849075d20cf20e7c9cbb98$export$9099ad97b570f7c = $b34a38bc0d849075d20cf20e7c9cbb98$var$v4;

});
parcelRequire.register("3xEKY", function(module, exports) {

$parcel$export(module.exports, "default", () => $746842f83862dd3a80fb8e13adc02d33$export$9099ad97b570f7c);
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var $746842f83862dd3a80fb8e13adc02d33$var$getRandomValues;
var $746842f83862dd3a80fb8e13adc02d33$var$rnds8 = new Uint8Array(16);
function $746842f83862dd3a80fb8e13adc02d33$export$9099ad97b570f7c() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!$746842f83862dd3a80fb8e13adc02d33$var$getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
        // find the complete implementation of crypto (msCrypto) on IE11.
        $746842f83862dd3a80fb8e13adc02d33$var$getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
        if (!$746842f83862dd3a80fb8e13adc02d33$var$getRandomValues) throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
    return $746842f83862dd3a80fb8e13adc02d33$var$getRandomValues($746842f83862dd3a80fb8e13adc02d33$var$rnds8);
}

});

parcelRequire.register("29GKt", function(module, exports) {

$parcel$export(module.exports, "default", () => $46d941dbafbd459fd8c0f3ef1201321a$export$9099ad97b570f7c);

var $6WJuw = parcelRequire("6WJuw");
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var $46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex = [];
for(var $46d941dbafbd459fd8c0f3ef1201321a$var$i = 0; $46d941dbafbd459fd8c0f3ef1201321a$var$i < 256; ++$46d941dbafbd459fd8c0f3ef1201321a$var$i)$46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex.push(($46d941dbafbd459fd8c0f3ef1201321a$var$i + 256).toString(16).substr(1));
function $46d941dbafbd459fd8c0f3ef1201321a$var$stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    var uuid = ($46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex[arr[offset + 0]] + $46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex[arr[offset + 1]] + $46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex[arr[offset + 2]] + $46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex[arr[offset + 3]] + '-' + $46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex[arr[offset + 4]] + $46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex[arr[offset + 5]] + '-' + $46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex[arr[offset + 6]] + $46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex[arr[offset + 7]] + '-' + $46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex[arr[offset + 8]] + $46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex[arr[offset + 9]] + '-' + $46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex[arr[offset + 10]] + $46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex[arr[offset + 11]] + $46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex[arr[offset + 12]] + $46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex[arr[offset + 13]] + $46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex[arr[offset + 14]] + $46d941dbafbd459fd8c0f3ef1201321a$var$byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!$6WJuw.default(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
var $46d941dbafbd459fd8c0f3ef1201321a$export$9099ad97b570f7c = $46d941dbafbd459fd8c0f3ef1201321a$var$stringify;

});
parcelRequire.register("6WJuw", function(module, exports) {

$parcel$export(module.exports, "default", () => $e4445ce001b6549dd861c1044bbb3636$export$9099ad97b570f7c);

var $5j9Rx = parcelRequire("5j9Rx");
function $e4445ce001b6549dd861c1044bbb3636$var$validate(uuid) {
    return typeof uuid === 'string' && $5j9Rx.default.test(uuid);
}
var $e4445ce001b6549dd861c1044bbb3636$export$9099ad97b570f7c = $e4445ce001b6549dd861c1044bbb3636$var$validate;

});
parcelRequire.register("5j9Rx", function(module, exports) {

$parcel$export(module.exports, "default", () => $ae700833c52cbd3790c778eadb14c07e$export$9099ad97b570f7c);
var $ae700833c52cbd3790c778eadb14c07e$export$9099ad97b570f7c = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

});






parcelRequire.register("2Sxce", function(module, exports) {

$parcel$export(module.exports, "addHiddenChats", () => $5e9d5ede18b7f82894e7ff4ac7a72831$export$4912ef1085d27909);
$parcel$export(module.exports, "subscribeForeverZenMorningChatChanges", () => $5e9d5ede18b7f82894e7ff4ac7a72831$export$3e9cbf693d3aad25);
$parcel$export(module.exports, "getHiddenChats", () => $5e9d5ede18b7f82894e7ff4ac7a72831$export$dce2ca6d3072504a);
$parcel$export(module.exports, "removeHiddenChats", () => $5e9d5ede18b7f82894e7ff4ac7a72831$export$7ab9bd4f04cb7801);
$parcel$export(module.exports, "subscribeForeverPinnedChatsStatusChanges", () => $5e9d5ede18b7f82894e7ff4ac7a72831$export$873232d545959ef1);
$parcel$export(module.exports, "getVisibiltyShedule", () => $5e9d5ede18b7f82894e7ff4ac7a72831$export$39d34aa0b96cb223);
$parcel$export(module.exports, "isHiddenChat", () => $5e9d5ede18b7f82894e7ff4ac7a72831$export$ecb066fb689ac95b);
$parcel$export(module.exports, "subscribeForeverHiddenChatChanges", () => $5e9d5ede18b7f82894e7ff4ac7a72831$export$643645ab66de58a9);
$parcel$export(module.exports, "getHiddenChatById", () => $5e9d5ede18b7f82894e7ff4ac7a72831$export$e935a5065530786c);

var $3zu8t = parcelRequire("3zu8t");

var $Iq2i6 = parcelRequire("Iq2i6");

var $7IzVc = parcelRequire("7IzVc");
function $5e9d5ede18b7f82894e7ff4ac7a72831$export$643645ab66de58a9(onChanged) {
    $5e9d5ede18b7f82894e7ff4ac7a72831$var$subToStorageChangesForever($Iq2i6.StateItemNames.HIDDEN_CONTACTS, (changes)=>{
        onChanged(changes.newValue, changes.oldValue);
    });
}
function $5e9d5ede18b7f82894e7ff4ac7a72831$export$3e9cbf693d3aad25(onChanged) {
    $5e9d5ede18b7f82894e7ff4ac7a72831$var$subToStorageChangesForever($Iq2i6.StateItemNames.ZEN_MORNING_CHAT, (changes)=>{
        onChanged(changes.newValue);
    });
}
function $5e9d5ede18b7f82894e7ff4ac7a72831$export$873232d545959ef1(onChanged) {
    $5e9d5ede18b7f82894e7ff4ac7a72831$var$subToStorageChangesForever($Iq2i6.StateItemNames.PINNED_CHATS_STATUS_ENABLED, (changes)=>{
        onChanged(changes.newValue);
    });
}
function $5e9d5ede18b7f82894e7ff4ac7a72831$var$subToStorageChangesForever(key, onChanged, initValue = true) {
    if (initValue) (/*@__PURE__*/$parcel$interopDefault($7IzVc)).storage.local.get(key).then((value)=>{
        const v = value[key];
        if (v != undefined) onChanged({
            newValue: v,
            oldValue: v
        });
    });
    (/*@__PURE__*/$parcel$interopDefault($7IzVc)).storage.onChanged.addListener((changes, areaName)=>{
        if (areaName === 'local' && changes.hasOwnProperty(key)) onChanged(changes[key]);
    });
}
async function $5e9d5ede18b7f82894e7ff4ac7a72831$export$dce2ca6d3072504a() {
    var _a;
    const hiddenChats = (_a = await $3zu8t.get_extn_storage_item_value($Iq2i6.StateItemNames.HIDDEN_CONTACTS)) !== null && _a !== void 0 ? _a : [];
    return hiddenChats;
}
async function $5e9d5ede18b7f82894e7ff4ac7a72831$export$39d34aa0b96cb223() {
    var _a;
    const visibiltyShedule = (_a = await $3zu8t.get_extn_storage_item_value($Iq2i6.StateItemNames.SCHEDULED_HIDDEN)) !== null && _a !== void 0 ? _a : [];
    return visibiltyShedule;
}
async function $5e9d5ede18b7f82894e7ff4ac7a72831$export$e935a5065530786c(chatId) {
    const chats = await $5e9d5ede18b7f82894e7ff4ac7a72831$export$dce2ca6d3072504a();
    return chats.find((c)=>c.id === chatId
    );
}
async function $5e9d5ede18b7f82894e7ff4ac7a72831$var$setHiddenChats(chats) {
    await $3zu8t.set_extn_storage_item({
        [$Iq2i6.StateItemNames.HIDDEN_CONTACTS]: chats
    });
}
async function $5e9d5ede18b7f82894e7ff4ac7a72831$export$4912ef1085d27909(...chats) {
    const storageChats = await $5e9d5ede18b7f82894e7ff4ac7a72831$export$dce2ca6d3072504a();
    for (const chat of chats){
        const chatId = chat.id;
        const chatIndex = storageChats.findIndex((c)=>c.id === chatId
        );
        if (chatIndex === -1) storageChats.push(chat);
        else storageChats[chatIndex] = chat;
    }
    $5e9d5ede18b7f82894e7ff4ac7a72831$var$setHiddenChats(storageChats);
}
async function $5e9d5ede18b7f82894e7ff4ac7a72831$export$7ab9bd4f04cb7801(...chats) {
    const storageChats = await $5e9d5ede18b7f82894e7ff4ac7a72831$export$dce2ca6d3072504a();
    for (const chat of chats)storageChats.splice(storageChats.findIndex((c)=>c.id === chat.id
    ), 1);
    $5e9d5ede18b7f82894e7ff4ac7a72831$var$setHiddenChats(storageChats);
}
function $5e9d5ede18b7f82894e7ff4ac7a72831$export$ae122510dc35a4cb() {
    $5e9d5ede18b7f82894e7ff4ac7a72831$var$setHiddenChats([]);
}
async function $5e9d5ede18b7f82894e7ff4ac7a72831$export$e9c54ee1fde58dad(chatId) {
    const storageChats = await $5e9d5ede18b7f82894e7ff4ac7a72831$export$dce2ca6d3072504a();
    return storageChats.some((c)=>c.id === chatId
    );
}
async function $5e9d5ede18b7f82894e7ff4ac7a72831$export$368993be82b7693e(chatTitle) {
    const storageChats = await $5e9d5ede18b7f82894e7ff4ac7a72831$export$dce2ca6d3072504a();
    return storageChats.some((c)=>c.title === chatTitle
    );
}
async function $5e9d5ede18b7f82894e7ff4ac7a72831$export$ecb066fb689ac95b(chat) {
    return $5e9d5ede18b7f82894e7ff4ac7a72831$export$e9c54ee1fde58dad(chat.id);
} //# sourceMappingURL=Storage.js.map

});

parcelRequire.register("2YKaR", function(module, exports) {

$parcel$export(module.exports, "logger", () => $61e7c543e7f869a8225d09e06b1bbb88$export$42a9043674814096);

var $3zu8t = parcelRequire("3zu8t");

var $Iq2i6 = parcelRequire("Iq2i6");
var $61e7c543e7f869a8225d09e06b1bbb88$export$1709c8025ac7f958;
(function(LoggerEventType) {
    LoggerEventType["INFO"] = "INFO";
    LoggerEventType["WARNING"] = "WARNING";
    LoggerEventType["ERROR"] = "ERROR";
})($61e7c543e7f869a8225d09e06b1bbb88$export$1709c8025ac7f958 || ($61e7c543e7f869a8225d09e06b1bbb88$export$1709c8025ac7f958 = {
}));
const $61e7c543e7f869a8225d09e06b1bbb88$var$MAX_LOG_ENTRIES = 300;
const $61e7c543e7f869a8225d09e06b1bbb88$var$STORAGE_LOGGER_KEY = "LOG";
class $61e7c543e7f869a8225d09e06b1bbb88$var$Logger {
    async log(type, message, payload) {
        const logItem = {
            datetime: Date.now(),
            type: type,
            message: message,
            payload: payload && JSON.stringify(payload)
        };
        const debugModeStatus = await $3zu8t.get_extn_storage_item_value($Iq2i6.StateItemNames.DEBUG_MODE_STATUS);
        if (debugModeStatus) {
            const currentLog = await this.getLog();
            const truncatedLog = currentLog.slice(-$61e7c543e7f869a8225d09e06b1bbb88$var$MAX_LOG_ENTRIES - 1);
            const newLog = [
                ...truncatedLog,
                logItem
            ];
            await $3zu8t.set_extn_storage_item({
                [$61e7c543e7f869a8225d09e06b1bbb88$var$STORAGE_LOGGER_KEY]: newLog
            });
        }
    }
    async getLog() {
        const currentLog = await $3zu8t.get_extn_storage_item_value($61e7c543e7f869a8225d09e06b1bbb88$var$STORAGE_LOGGER_KEY) || [];
        return currentLog;
    }
    async clearLog() {
        return await $3zu8t.set_extn_storage_item({
            [$61e7c543e7f869a8225d09e06b1bbb88$var$STORAGE_LOGGER_KEY]: []
        });
    }
}
const $61e7c543e7f869a8225d09e06b1bbb88$export$42a9043674814096 = new $61e7c543e7f869a8225d09e06b1bbb88$var$Logger();

});


parcelRequire.register("1cPNT", function(module, exports) {

$parcel$export(module.exports, "unbindAllChatsToTitle", () => $27a8b7af7792c965a2b27d5cb4008dbe$export$16a1d9a2f8741852);
$parcel$export(module.exports, "bindChatsToTitleUnread", () => $27a8b7af7792c965a2b27d5cb4008dbe$export$d11b0b4184f37c1e);

var $4gcVu = parcelRequire("4gcVu");

var $1NYDb = parcelRequire("1NYDb");

var $1oTL5 = parcelRequire("1oTL5");

var $3h5SU = parcelRequire("3h5SU");
const $27a8b7af7792c965a2b27d5cb4008dbe$var$EMPTY_FAVICON_SRC = "/img/favicon_c5088e888c97ad440a61d247596f88e5.png";
let $27a8b7af7792c965a2b27d5cb4008dbe$var$originalTitleValue;
let $27a8b7af7792c965a2b27d5cb4008dbe$var$originalFavIconSrc;
let $27a8b7af7792c965a2b27d5cb4008dbe$var$bindedChats = [];
const $27a8b7af7792c965a2b27d5cb4008dbe$var$titleObserver = new MutationObserver((mutations)=>{
    const mutation = mutations[0];
    $1NYDb.devprint('mutation', mutation);
    if ($27a8b7af7792c965a2b27d5cb4008dbe$var$originalTitleValue && mutation && mutation.addedNodes[0] && mutation.addedNodes[0].textContent !== "WhatsApp") $27a8b7af7792c965a2b27d5cb4008dbe$var$originalTitleValue = mutation.addedNodes[0].textContent;
    if ($27a8b7af7792c965a2b27d5cb4008dbe$var$bindedChats && $27a8b7af7792c965a2b27d5cb4008dbe$var$bindedChats.length > 0) {
        if (mutation) {
            if (!$27a8b7af7792c965a2b27d5cb4008dbe$var$originalTitleValue) {
                const oldTitleNode = mutation.removedNodes[0];
                if (oldTitleNode) $27a8b7af7792c965a2b27d5cb4008dbe$var$originalTitleValue = oldTitleNode.textContent;
                setTimeout(()=>{
                    const favIconEl = $1oTL5.DOM.get_el('#favicon', document.head);
                    $1NYDb.devprint('favIconEl', favIconEl);
                    if (favIconEl) $27a8b7af7792c965a2b27d5cb4008dbe$var$originalFavIconSrc = favIconEl.getAttribute('src');
                }, 300);
            }
            $27a8b7af7792c965a2b27d5cb4008dbe$export$29411b3df469cadc();
        }
    }
});
function $27a8b7af7792c965a2b27d5cb4008dbe$var$getTitleByUnreadSum(unreadSum, isZenModeON) {
    if (unreadSum > 0 && !isZenModeON) return `(${unreadSum}) WhatsApp`;
    else return 'WhatsApp';
}
function $27a8b7af7792c965a2b27d5cb4008dbe$export$29411b3df469cadc(isZenModeON) {
    $4gcVu.updateChatModels($27a8b7af7792c965a2b27d5cb4008dbe$var$bindedChats, (updatedChats)=>{
        let unreadSum = 0;
        updatedChats.forEach((c)=>{
            unreadSum += c.unreadCount;
        });
        const newTitle = $27a8b7af7792c965a2b27d5cb4008dbe$var$getTitleByUnreadSum(unreadSum, isZenModeON);
        if (document.title != newTitle) document.title = newTitle;
        $27a8b7af7792c965a2b27d5cb4008dbe$var$setFavicon($27a8b7af7792c965a2b27d5cb4008dbe$var$EMPTY_FAVICON_SRC);
    });
}
$27a8b7af7792c965a2b27d5cb4008dbe$var$titleObserver.observe(document.getElementsByTagName('title')[0], {
    subtree: true,
    characterData: true,
    childList: true
});
function $27a8b7af7792c965a2b27d5cb4008dbe$export$d11b0b4184f37c1e(...chats) {
    chats.forEach((chat, i)=>{
        const findedChat = $27a8b7af7792c965a2b27d5cb4008dbe$var$bindedChats.find((c)=>c && c.id === chat.id
        );
        if (findedChat) chats.splice(i, 1);
    });
    $27a8b7af7792c965a2b27d5cb4008dbe$var$bindedChats.push(...chats);
    $27a8b7af7792c965a2b27d5cb4008dbe$export$29411b3df469cadc();
}
function $27a8b7af7792c965a2b27d5cb4008dbe$export$16a1d9a2f8741852() {
    $27a8b7af7792c965a2b27d5cb4008dbe$var$bindedChats = [];
    $27a8b7af7792c965a2b27d5cb4008dbe$var$resetTitleAndIcon();
}
function $27a8b7af7792c965a2b27d5cb4008dbe$var$setFavicon(src) {
    if (src) {
        const favIconEl = $1oTL5.DOM.get_el('#favicon', document.head);
        if (favIconEl) $3h5SU.set_el_attributes(favIconEl, {
            src: src,
            href: src
        });
    }
}
function $27a8b7af7792c965a2b27d5cb4008dbe$var$resetTitleAndIcon() {
    if ($27a8b7af7792c965a2b27d5cb4008dbe$var$originalTitleValue) document.title = $27a8b7af7792c965a2b27d5cb4008dbe$var$originalTitleValue;
    if ($27a8b7af7792c965a2b27d5cb4008dbe$var$originalFavIconSrc) $27a8b7af7792c965a2b27d5cb4008dbe$var$setFavicon($27a8b7af7792c965a2b27d5cb4008dbe$var$originalFavIconSrc);
    $27a8b7af7792c965a2b27d5cb4008dbe$var$originalTitleValue = null;
    $27a8b7af7792c965a2b27d5cb4008dbe$var$originalFavIconSrc = null;
} //# sourceMappingURL=bind-title-to-value.js.map

});

parcelRequire.register("3wQgT", function(module, exports) {

$parcel$export(module.exports, "getZenModeLogoUrlByState", () => $73f9ca8e44c83cfd34b39115e8d31599$export$9ea74e352f920d3d);
$parcel$export(module.exports, "constructZenModeLogoIcon", () => $73f9ca8e44c83cfd34b39115e8d31599$export$73eb9d6242f8bcb8);

var $Iq2i6 = parcelRequire("Iq2i6");

var $6yWuz = parcelRequire("6yWuz");

var $7IzVc = parcelRequire("7IzVc");
async function $73f9ca8e44c83cfd34b39115e8d31599$export$9ea74e352f920d3d(zenModeStatus) {
    if (!zenModeStatus) zenModeStatus = await $6yWuz.get_Zen_mode_status();
    return (/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.getURL(`assets/logo/${zenModeStatus === $Iq2i6.ZenModeStatuses.ON ? "logo-off.png" : "logo.png"}`);
}
async function $73f9ca8e44c83cfd34b39115e8d31599$export$73eb9d6242f8bcb8(logoUrl) {
    if (!logoUrl) logoUrl = await $73f9ca8e44c83cfd34b39115e8d31599$export$9ea74e352f920d3d();
    const div = document.createElement('DIV');
    div.className = 'ZenModeLogo';
    div.style.backgroundImage = `url('${logoUrl}')`;
    return div;
} //# sourceMappingURL=getZenModeIcon.js.map

});


parcelRequire.register("6wA4v", function(module, exports) {

$parcel$export(module.exports, "setZenMorning", () => $03754c023bdc15faf2dc5afefd141728$export$22440f02d82a7bb8);
$parcel$export(module.exports, "isZenMorningChat", () => $03754c023bdc15faf2dc5afefd141728$export$c76ead8e971fa141);
$parcel$export(module.exports, "checkZenMorningChatState", () => $03754c023bdc15faf2dc5afefd141728$export$f43179a28d3a43d);
$parcel$export(module.exports, "getZenMorningChat", () => $03754c023bdc15faf2dc5afefd141728$export$d6ef1801f8b673d4);
$parcel$export(module.exports, "unsetZenMorning", () => $03754c023bdc15faf2dc5afefd141728$export$ef05ca4b7d87eba);

var $tvVsZ = parcelRequire("tvVsZ");

var $1oTL5 = parcelRequire("1oTL5");

var $Iq2i6 = parcelRequire("Iq2i6");

var $3zu8t = parcelRequire("3zu8t");

var $2f9nT = parcelRequire("2f9nT");

var $2eVOQ = parcelRequire("2eVOQ");

var $38ck6 = parcelRequire("38ck6");

var $7feap = parcelRequire("7feap");

var $4gcVu = parcelRequire("4gcVu");

var $6yWuz = parcelRequire("6yWuz");
function $03754c023bdc15faf2dc5afefd141728$export$22440f02d82a7bb8() {
    let zenMorningAreaEl = $1oTL5.DOM.get_el($Iq2i6.Selectors.ZM_ZENMORNING_AREA);
    if (!zenMorningAreaEl) {
        zenMorningAreaEl = $2eVOQ.construct_zenmorning_area();
        document.body.appendChild(zenMorningAreaEl);
    }
    $2f9nT.set_el_style(zenMorningAreaEl, {
        display: 'unset'
    });
    zenMorningAreaEl === null || zenMorningAreaEl === void 0 || zenMorningAreaEl.addEventListener('click', function listener(e) {
        // @ts-ignore
        const buttonWithAction = e.target.closest('[data-action]');
        if (!buttonWithAction) return;
        switch(buttonWithAction.dataset.action){
            case 'ok':
                $2f9nT.set_el_style(zenMorningAreaEl, {
                    display: "none"
                });
                $03754c023bdc15faf2dc5afefd141728$var$toggleZenMorningForHoveredChat(true);
                break;
            case 'cancel':
                $2f9nT.set_el_style(zenMorningAreaEl, {
                    display: "none"
                });
        }
        zenMorningAreaEl === null || zenMorningAreaEl === void 0 || zenMorningAreaEl.removeEventListener('click', listener);
    });
}
function $03754c023bdc15faf2dc5afefd141728$export$ef05ca4b7d87eba() {
    if ($38ck6.lastHoveredChat) $03754c023bdc15faf2dc5afefd141728$var$toggleZenMorningForHoveredChat(false);
    $3zu8t.remove_extn_storage_item($Iq2i6.StateItemNames.ZEN_MORNING_CHAT);
}
async function $03754c023bdc15faf2dc5afefd141728$var$toggleZenMorning(chat, turnZenMorning) {
    if (turnZenMorning && await $03754c023bdc15faf2dc5afefd141728$export$c76ead8e971fa141(chat)) return;
    const oldZenMorningChat = await $03754c023bdc15faf2dc5afefd141728$export$d6ef1801f8b673d4();
    if (turnZenMorning) await $3zu8t.set_extn_storage_item({
        [$Iq2i6.StateItemNames.ZEN_MORNING_CHAT]: chat
    });
    else await $3zu8t.remove_extn_storage_item($Iq2i6.StateItemNames.ZEN_MORNING_CHAT);
}
async function $03754c023bdc15faf2dc5afefd141728$var$toggleZenMorningForHoveredChat(turnZenMorning) {
    if ($38ck6.lastHoveredChat) $03754c023bdc15faf2dc5afefd141728$var$toggleZenMorning($38ck6.lastHoveredChat, turnZenMorning);
}
async function $03754c023bdc15faf2dc5afefd141728$export$c76ead8e971fa141(chat) {
    const zenMorningChat = await $03754c023bdc15faf2dc5afefd141728$export$d6ef1801f8b673d4();
    if (zenMorningChat) return zenMorningChat.name === chat.name;
    else return false;
}
async function $03754c023bdc15faf2dc5afefd141728$export$d6ef1801f8b673d4() {
    return await $3zu8t.get_extn_storage_item_value($Iq2i6.StateItemNames.ZEN_MORNING_CHAT);
}
async function $03754c023bdc15faf2dc5afefd141728$export$f43179a28d3a43d(zenMorningChat) {
    zenMorningChat = zenMorningChat || await $03754c023bdc15faf2dc5afefd141728$export$d6ef1801f8b673d4();
    if (zenMorningChat) {
        if (await $7feap.isZenMorningTime()) {
            await $3zu8t.set_extn_storage_item({
                [$Iq2i6.StateItemNames.LAST_ACTIVITY_DATE]: (/*@__PURE__*/$parcel$interopDefault($tvVsZ))().toJSON(),
                [$Iq2i6.StateItemNames.ZEN_MODE_FORCE_BY_ZEN_MORNING]: true
            });
            $4gcVu.openChat(zenMorningChat, ()=>{
                $6yWuz.apply_Zen_mode_status($Iq2i6.ZenModeStatuses.ON);
            });
        }
    }
}
async function $03754c023bdc15faf2dc5afefd141728$var$resetForcedZenMorning() {
    const zenModeStatus = await $6yWuz.get_Zen_mode_status();
    const zenForcedByZMorning = await $3zu8t.get_extn_storage_item_value($Iq2i6.StateItemNames.ZEN_MODE_FORCE_BY_ZEN_MORNING);
    if (zenModeStatus === $Iq2i6.ZenModeStatuses.ON && zenForcedByZMorning) {
        await $6yWuz.set_Zen_mode_status($Iq2i6.ZenModeStatuses.OFF);
        await $3zu8t.set_extn_storage_item({
            [$Iq2i6.StateItemNames.ZEN_MODE_FORCE_BY_ZEN_MORNING]: false
        });
    }
}
$03754c023bdc15faf2dc5afefd141728$var$resetForcedZenMorning(); //# sourceMappingURL=setZenMorning.js.map

});
parcelRequire.register("tvVsZ", function(module, exports) {
(function(global, factory) {
    typeof exports === 'object' && "object" !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.moment = factory();
})(this, function() {
    'use strict';
    var hookCallback;
    function hooks() {
        return hookCallback.apply(null, arguments);
    }
    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }
    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }
    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }
    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(obj).length === 0;
        else {
            var k;
            for(k in obj){
                if (hasOwnProp(obj, k)) return false;
            }
            return true;
        }
    }
    function isUndefined(input) {
        return input === void 0;
    }
    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }
    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }
    function map(arr, fn) {
        var res = [], i;
        for(i = 0; i < arr.length; ++i)res.push(fn(arr[i], i));
        return res;
    }
    function extend(a, b) {
        for(var i in b)if (hasOwnProp(b, i)) a[i] = b[i];
        if (hasOwnProp(b, 'toString')) a.toString = b.toString;
        if (hasOwnProp(b, 'valueOf')) a.valueOf = b.valueOf;
        return a;
    }
    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }
    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
        };
    }
    function getParsingFlags(m) {
        if (m._pf == null) m._pf = defaultParsingFlags();
        return m._pf;
    }
    var some;
    if (Array.prototype.some) some = Array.prototype.some;
    else some = function(fun) {
        var t = Object(this), len = t.length >>> 0, i;
        for(i = 0; i < len; i++){
            if (i in t && fun.call(this, t[i], i, t)) return true;
        }
        return false;
    };
    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i) {
                return i != null;
            }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
            if (m._strict) isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
            if (Object.isFrozen == null || !Object.isFrozen(m)) m._isValid = isNowValid;
            else return isNowValid;
        }
        return m._isValid;
    }
    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) extend(getParsingFlags(m), flags);
        else getParsingFlags(m).userInvalidated = true;
        return m;
    }
    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [], updateInProgress = false;
    function copyConfig(to, from) {
        var i, prop, val;
        if (!isUndefined(from._isAMomentObject)) to._isAMomentObject = from._isAMomentObject;
        if (!isUndefined(from._i)) to._i = from._i;
        if (!isUndefined(from._f)) to._f = from._f;
        if (!isUndefined(from._l)) to._l = from._l;
        if (!isUndefined(from._strict)) to._strict = from._strict;
        if (!isUndefined(from._tzm)) to._tzm = from._tzm;
        if (!isUndefined(from._isUTC)) to._isUTC = from._isUTC;
        if (!isUndefined(from._offset)) to._offset = from._offset;
        if (!isUndefined(from._pf)) to._pf = getParsingFlags(from);
        if (!isUndefined(from._locale)) to._locale = from._locale;
        if (momentProperties.length > 0) for(i = 0; i < momentProperties.length; i++){
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) to[prop] = val;
        }
        return to;
    }
    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) this._d = new Date(NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }
    function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }
    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) console.warn('Deprecation warning: ' + msg);
    }
    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function() {
            if (hooks.deprecationHandler != null) hooks.deprecationHandler(null, msg);
            if (firstTime) {
                var args = [], arg, i, key;
                for(i = 0; i < arguments.length; i++){
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for(key in arguments[0])if (hasOwnProp(arguments[0], key)) arg += key + ': ' + arguments[0][key] + ', ';
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else arg = arguments[i];
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }
    var deprecations = {
    };
    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) hooks.deprecationHandler(name, msg);
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }
    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;
    function isFunction(input) {
        return typeof Function !== 'undefined' && input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }
    function set(config) {
        var prop, i;
        for(i in config)if (hasOwnProp(config, i)) {
            prop = config[i];
            if (isFunction(prop)) this[i] = prop;
            else this['_' + i] = prop;
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
    }
    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({
        }, parentConfig), prop;
        for(prop in childConfig)if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {
                };
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) res[prop] = childConfig[prop];
            else delete res[prop];
        }
        for(prop in parentConfig)if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) // make sure changes to properties don't modify parent config
        res[prop] = extend({
        }, res[prop]);
        return res;
    }
    function Locale(config) {
        if (config != null) this.set(config);
    }
    var keys;
    if (Object.keys) keys = Object.keys;
    else keys = function(obj) {
        var i, res = [];
        for(i in obj)if (hasOwnProp(obj, i)) res.push(i);
        return res;
    };
    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    };
    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }
    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign = number >= 0;
        return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {
    }, formatTokenFunctions = {
    };
    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') func = function() {
            return this[callback]();
        };
        if (token) formatTokenFunctions[token] = func;
        if (padded) formatTokenFunctions[padded[0]] = function() {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
        if (ordinal) formatTokenFunctions[ordinal] = function() {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) return input.replace(/^\[|\]$/g, '');
        return input.replace(/\\/g, '');
    }
    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;
        for(i = 0, length = array.length; i < length; i++)if (formatTokenFunctions[array[i]]) array[i] = formatTokenFunctions[array[i]];
        else array[i] = removeFormattingTokens(array[i]);
        return function(mom) {
            var output = '', i1;
            for(i1 = 0; i1 < length; i1++)output += isFunction(array[i1]) ? array[i1].call(mom, format) : array[i1];
            return output;
        };
    }
    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) return m.localeData().invalidDate();
        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](m);
    }
    function expandFormat(format, locale) {
        var i = 5;
        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }
        localFormattingTokens.lastIndex = 0;
        while(i >= 0 && localFormattingTokens.test(format)){
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }
        return format;
    }
    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };
    function longDateFormat(key) {
        var format = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) return format;
        this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
            if (tok === 'MMMM' || tok === 'MM' || tok === 'DD' || tok === 'dddd') return tok.slice(1);
            return tok;
        }).join('');
        return this._longDateFormat[key];
    }
    var defaultInvalidDate = 'Invalid date';
    function invalidDate() {
        return this._invalidDate;
    }
    var defaultOrdinal = '%d', defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }
    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    };
    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }
    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }
    var aliases = {
    };
    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }
    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }
    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {
        }, normalizedProp, prop;
        for(prop in inputObject)if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) normalizedInput[normalizedProp] = inputObject[prop];
        }
        return normalizedInput;
    }
    var priorities = {
    };
    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }
    function getPrioritizedUnits(unitsObj) {
        var units = [], u;
        for(u in unitsObj)if (hasOwnProp(unitsObj, u)) units.push({
            unit: u,
            priority: priorities[u]
        });
        units.sort(function(a, b) {
            return a.priority - b.priority;
        });
        return units;
    }
    function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    function absFloor(number) {
        if (number < 0) // -0 -> 0
        return Math.ceil(number) || 0;
        else return Math.floor(number);
    }
    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) value = absFloor(coercedNumber);
        return value;
    }
    function makeGetSet(unit, keepTime) {
        return function(value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else return get(this, unit);
        };
    }
    function get(mom, unit) {
        return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }
    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                value = toInt(value);
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            } else mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
    // MOMENTS
    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) return this[units]();
        return this;
    }
    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units), i;
            for(i = 0; i < prioritized.length; i++)this[prioritized[i].unit](units[prioritized[i].unit]);
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) return this[units](value);
        }
        return this;
    }
    var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
    regexes = {
    };
    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function(isStrict, localeData) {
            return isStrict && strictRegex ? strictRegex : regex;
        };
    }
    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) return new RegExp(unescapeFormat(token));
        return regexes[token](config._strict, config._locale);
    }
    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }
    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    var tokens = {
    };
    function addParseToken(token, callback) {
        var i, func = callback;
        if (typeof token === 'string') token = [
            token
        ];
        if (isNumber(callback)) func = function(input, array) {
            array[callback] = toInt(input);
        };
        for(i = 0; i < token.length; i++)tokens[token[i]] = func;
    }
    function addWeekParseToken(token, callback) {
        addParseToken(token, function(input, array, config, token1) {
            config._w = config._w || {
            };
            callback(input, config._w, config, token1);
        });
    }
    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) tokens[token](input, config._a, config, token);
    }
    var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
    function mod(n, x) {
        return (n % x + x) % x;
    }
    var indexOf;
    if (Array.prototype.indexOf) indexOf = Array.prototype.indexOf;
    else indexOf = function(o) {
        // I know
        var i;
        for(i = 0; i < this.length; ++i){
            if (this[i] === o) return i;
        }
        return -1;
    };
    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) return NaN;
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    }
    // FORMATTING
    addFormatToken('M', [
        'MM',
        2
    ], 'Mo', function() {
        return this.month() + 1;
    });
    addFormatToken('MMM', 0, 0, function(format) {
        return this.localeData().monthsShort(this, format);
    });
    addFormatToken('MMMM', 0, 0, function(format) {
        return this.localeData().months(this, format);
    });
    // ALIASES
    addUnitAlias('month', 'M');
    // PRIORITY
    addUnitPriority('month', 8);
    // PARSING
    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function(isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function(isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });
    addParseToken([
        'M',
        'MM'
    ], function(input, array) {
        array[MONTH] = toInt(input) - 1;
    });
    addParseToken([
        'MMM',
        'MMMM'
    ], function(input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) array[MONTH] = month;
        else getParsingFlags(config).invalidMonth = input;
    });
    // LOCALES
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
    function localeMonths(m, format) {
        if (!m) return isArray(this._months) ? this._months : this._months['standalone'];
        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }
    function localeMonthsShort(m, format) {
        if (!m) return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }
    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for(i = 0; i < 12; ++i){
                mom = createUTC([
                    2000,
                    i
                ]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) return ii;
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) return ii;
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;
        if (this._monthsParseExact) return handleStrictParse.call(this, monthName, format, strict);
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }
        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for(i = 0; i < 12; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                i
            ]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) return i;
            else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) return i;
            else if (!strict && this._monthsParse[i].test(monthName)) return i;
        }
    }
    // MOMENTS
    function setMonth(mom, value) {
        var dayOfMonth;
        if (!mom.isValid()) // No op
        return mom;
        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) value = toInt(value);
            else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) return mom;
            }
        }
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }
    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else return get(this, 'Month');
    }
    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }
    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) computeMonthsParse.call(this);
            if (isStrict) return this._monthsShortStrictRegex;
            else return this._monthsShortRegex;
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) this._monthsShortRegex = defaultMonthsShortRegex;
            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }
    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) computeMonthsParse.call(this);
            if (isStrict) return this._monthsStrictRegex;
            else return this._monthsRegex;
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) this._monthsRegex = defaultMonthsRegex;
            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
    }
    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }
        var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
        for(i = 0; i < 12; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                i
            ]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for(i = 0; i < 12; i++){
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for(i = 0; i < 24; i++)mixedPieces[i] = regexEscape(mixedPieces[i]);
        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }
    // FORMATTING
    addFormatToken('Y', 0, 0, function() {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });
    addFormatToken(0, [
        'YY',
        2
    ], 0, function() {
        return this.year() % 100;
    });
    addFormatToken(0, [
        'YYYY',
        4
    ], 0, 'year');
    addFormatToken(0, [
        'YYYYY',
        5
    ], 0, 'year');
    addFormatToken(0, [
        'YYYYYY',
        6,
        true
    ], 0, 'year');
    // ALIASES
    addUnitAlias('year', 'y');
    // PRIORITIES
    addUnitPriority('year', 1);
    // PARSING
    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);
    addParseToken([
        'YYYYY',
        'YYYYYY'
    ], YEAR);
    addParseToken('YYYY', function(input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function(input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function(input, array) {
        array[YEAR] = parseInt(input, 10);
    });
    // HELPERS
    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }
    // HOOKS
    hooks.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };
    // MOMENTS
    var getSetYear = makeGetSet('FullYear', true);
    function getIsLeapYear() {
        return isLeapYear(this.year());
    }
    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) date.setFullYear(y);
        } else date = new Date(y, m, d, h, M, s, ms);
        return date;
    }
    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) date.setUTCFullYear(y);
        } else date = new Date(Date.UTC.apply(null, arguments));
        return date;
    }
    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var fwd = 7 + dow - doy, // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
    }
    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }
        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }
    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }
        return {
            week: resWeek,
            year: resYear
        };
    }
    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }
    // FORMATTING
    addFormatToken('w', [
        'ww',
        2
    ], 'wo', 'week');
    addFormatToken('W', [
        'WW',
        2
    ], 'Wo', 'isoWeek');
    // ALIASES
    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');
    // PRIORITIES
    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);
    // PARSING
    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken([
        'w',
        'ww',
        'W',
        'WW'
    ], function(input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });
    // HELPERS
    // LOCALES
    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }
    var defaultLocaleWeek = {
        dow: 0,
        doy: 6
    };
    function localeFirstDayOfWeek() {
        return this._week.dow;
    }
    function localeFirstDayOfYear() {
        return this._week.doy;
    }
    // MOMENTS
    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }
    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }
    // FORMATTING
    addFormatToken('d', 0, 'do', 'day');
    addFormatToken('dd', 0, 0, function(format) {
        return this.localeData().weekdaysMin(this, format);
    });
    addFormatToken('ddd', 0, 0, function(format) {
        return this.localeData().weekdaysShort(this, format);
    });
    addFormatToken('dddd', 0, 0, function(format) {
        return this.localeData().weekdays(this, format);
    });
    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');
    // ALIASES
    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');
    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);
    // PARSING
    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function(isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function(isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function(isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });
    addWeekParseToken([
        'dd',
        'ddd',
        'dddd'
    ], function(input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) week.d = weekday;
        else getParsingFlags(config).invalidWeekday = input;
    });
    addWeekParseToken([
        'd',
        'e',
        'E'
    ], function(input, week, config, token) {
        week[token] = toInt(input);
    });
    // HELPERS
    function parseWeekday(input, locale) {
        if (typeof input !== 'string') return input;
        if (!isNaN(input)) return parseInt(input, 10);
        input = locale.weekdaysParse(input);
        if (typeof input === 'number') return input;
        return null;
    }
    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') return locale.weekdaysParse(input) % 7 || 7;
        return isNaN(input) ? null : input;
    }
    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }
    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'), defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'), defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
        return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
    }
    function localeWeekdaysShort(m) {
        return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }
    function localeWeekdaysMin(m) {
        return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }
    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for(i = 0; i < 7; ++i){
                mom = createUTC([
                    2000,
                    1
                ]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }
    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;
        if (this._weekdaysParseExact) return handleStrictParse$1.call(this, weekdayName, format, strict);
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }
        for(i = 0; i < 7; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                1
            ]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) return i;
            else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) return i;
            else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) return i;
            else if (!strict && this._weekdaysParse[i].test(weekdayName)) return i;
        }
    }
    // MOMENTS
    function getSetDayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else return day;
    }
    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }
    function getSetISODayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else return this.day() || 7;
    }
    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysStrictRegex;
            else return this._weekdaysRegex;
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) this._weekdaysRegex = defaultWeekdaysRegex;
            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }
    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysShortStrictRegex;
            else return this._weekdaysShortRegex;
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }
    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysMinStrictRegex;
            else return this._weekdaysMinRegex;
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }
    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
        for(i = 0; i < 7; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                1
            ]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }
    // FORMATTING
    function hFormat() {
        return this.hours() % 12 || 12;
    }
    function kFormat() {
        return this.hours() || 24;
    }
    addFormatToken('H', [
        'HH',
        2
    ], 0, 'hour');
    addFormatToken('h', [
        'hh',
        2
    ], 0, hFormat);
    addFormatToken('k', [
        'kk',
        2
    ], 0, kFormat);
    addFormatToken('hmm', 0, 0, function() {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken('hmmss', 0, 0, function() {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken('Hmm', 0, 0, function() {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken('Hmmss', 0, 0, function() {
        return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }
    meridiem('a', true);
    meridiem('A', false);
    // ALIASES
    addUnitAlias('hour', 'h');
    // PRIORITY
    addUnitPriority('hour', 13);
    // PARSING
    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }
    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken([
        'H',
        'HH'
    ], HOUR);
    addParseToken([
        'k',
        'kk'
    ], function(input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken([
        'a',
        'A'
    ], function(input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken([
        'h',
        'hh'
    ], function(input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });
    // LOCALES
    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    getSetHour = makeGetSet('Hours', true);
    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) return isLower ? 'pm' : 'PM';
        else return isLower ? 'am' : 'AM';
    }
    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
    };
    // internal storage for locale config files
    var locales = {
    }, localeFamilies = {
    }, globalLocale;
    function commonPrefix(arr1, arr2) {
        var i, minl = Math.min(arr1.length, arr2.length);
        for(i = 0; i < minl; i += 1){
            if (arr1[i] !== arr2[i]) return i;
        }
        return minl;
    }
    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }
    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;
        while(i < names.length){
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while(j > 0){
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) return locale;
                if (next && next.length >= j && commonPrefix(split, next) >= j - 1) break;
                j--;
            }
            i++;
        }
        return globalLocale;
    }
    function loadLocale(name) {
        var oldLocale = null, aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (locales[name] === undefined && "object" !== 'undefined' && module && module.exports) try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = undefined;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {
            // mark as not found to avoid repeating expensive file require call causing high CPU
            // when trying to find en-US, en_US, en-us for every format call
            locales[name] = null; // null means not found
        }
        return locales[name];
    }
    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) data = getLocale(key);
            else data = defineLocale(key, values);
            if (data) // moment.duration._locale = moment._locale = data;
            globalLocale = data;
            else if (typeof console !== 'undefined' && console.warn) //warn user if arguments are passed but the locale could not be set
            console.warn('Locale ' + key + ' not found. Did you forget to load it?');
        }
        return globalLocale._abbr;
    }
    function defineLocale(name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride', "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) parentConfig = locales[config.parentLocale]._config;
                else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) parentConfig = locale._config;
                    else {
                        if (!localeFamilies[config.parentLocale]) localeFamilies[config.parentLocale] = [];
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));
            if (localeFamilies[name]) localeFamilies[name].forEach(function(x) {
                defineLocale(x.name, x.config);
            });
            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);
            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }
    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            if (locales[name] != null && locales[name].parentLocale != null) // Update existing child locale in-place to avoid memory-leaks
            locales[name].set(mergeConfigs(locales[name]._config, config));
            else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) parentConfig = tmpLocale._config;
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) // updateLocale is called for creating a new locale
                // Set abbr so it will have a name (getters return
                // undefined otherwise).
                config.abbr = name;
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }
            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) getSetGlobalLocale(name);
            } else if (locales[name] != null) delete locales[name];
        }
        return locales[name];
    }
    // returns locale data
    function getLocale(key) {
        var locale;
        if (key && key._locale && key._locale._abbr) key = key._locale._abbr;
        if (!key) return globalLocale;
        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) return locale;
            key = [
                key
            ];
        }
        return chooseLocale(key);
    }
    function listLocales() {
        return keys(locales);
    }
    function checkOverflow(m) {
        var overflow, a = m._a;
        if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) overflow = DATE;
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) overflow = WEEK;
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) overflow = WEEKDAY;
            getParsingFlags(m).overflow = overflow;
        }
        return m;
    }
    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
        [
            'YYYYYY-MM-DD',
            /[+-]\d{6}-\d\d-\d\d/
        ],
        [
            'YYYY-MM-DD',
            /\d{4}-\d\d-\d\d/
        ],
        [
            'GGGG-[W]WW-E',
            /\d{4}-W\d\d-\d/
        ],
        [
            'GGGG-[W]WW',
            /\d{4}-W\d\d/,
            false
        ],
        [
            'YYYY-DDD',
            /\d{4}-\d{3}/
        ],
        [
            'YYYY-MM',
            /\d{4}-\d\d/,
            false
        ],
        [
            'YYYYYYMMDD',
            /[+-]\d{10}/
        ],
        [
            'YYYYMMDD',
            /\d{8}/
        ],
        [
            'GGGG[W]WWE',
            /\d{4}W\d{3}/
        ],
        [
            'GGGG[W]WW',
            /\d{4}W\d{2}/,
            false
        ],
        [
            'YYYYDDD',
            /\d{7}/
        ],
        [
            'YYYYMM',
            /\d{6}/,
            false
        ],
        [
            'YYYY',
            /\d{4}/,
            false
        ], 
    ], // iso time formats and regexes
    isoTimes = [
        [
            'HH:mm:ss.SSSS',
            /\d\d:\d\d:\d\d\.\d+/
        ],
        [
            'HH:mm:ss,SSSS',
            /\d\d:\d\d:\d\d,\d+/
        ],
        [
            'HH:mm:ss',
            /\d\d:\d\d:\d\d/
        ],
        [
            'HH:mm',
            /\d\d:\d\d/
        ],
        [
            'HHmmss.SSSS',
            /\d\d\d\d\d\d\.\d+/
        ],
        [
            'HHmmss,SSSS',
            /\d\d\d\d\d\d,\d+/
        ],
        [
            'HHmmss',
            /\d\d\d\d\d\d/
        ],
        [
            'HHmm',
            /\d\d\d\d/
        ],
        [
            'HH',
            /\d\d/
        ], 
    ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    // date from iso format
    function configFromISO(config) {
        var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat;
        if (match) {
            getParsingFlags(config).iso = true;
            for(i = 0, l = isoDates.length; i < l; i++)if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for(i = 0, l = isoTimes.length; i < l; i++)if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) tzFormat = 'Z';
                else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else config._isValid = false;
    }
    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10), 
        ];
        if (secondStr) result.push(parseInt(secondStr, 10));
        return result;
    }
    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) return 2000 + year;
        else if (year <= 999) return 1900 + year;
        return year;
    }
    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }
    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) return obsOffsets[obsOffset];
        else if (militaryOffset) // the only allowed military tz is Z
        return 0;
        else {
            var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }
    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) return;
            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);
            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            getParsingFlags(config).rfc2822 = true;
        } else config._isValid = false;
    }
    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }
        configFromISO(config);
        if (config._isValid === false) delete config._isValid;
        else return;
        configFromRFC2822(config);
        if (config._isValid === false) delete config._isValid;
        else return;
        if (config._strict) config._isValid = false;
        else // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }
    hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    });
    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) return a;
        if (b != null) return b;
        return c;
    }
    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate(), 
        ];
        return [
            nowValue.getFullYear(),
            nowValue.getMonth(),
            nowValue.getDate()
        ];
    }
    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;
        if (config._d) return;
        currentDate = currentDateArray(config);
        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) dayOfYearFromWeekInfo(config);
        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) getParsingFlags(config)._overflowDayOfYear = true;
            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }
        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for(i = 0; i < 3 && config._a[i] == null; ++i)config._a[i] = input[i] = currentDate[i];
        // Zero out whatever was not defaulted, including time
        for(; i < 7; i++)config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        if (config._nextDay) config._a[HOUR] = 24;
        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) getParsingFlags(config).weekdayMismatch = true;
    }
    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) weekdayOverflow = true;
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            // Default to current week.
            week = defaults(w.w, curWeek.week);
            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) weekdayOverflow = true;
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) weekdayOverflow = true;
            } else // default to beginning of week
            weekday = dow;
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) getParsingFlags(config)._overflowWeeks = true;
        else if (weekdayOverflow != null) getParsingFlags(config)._overflowWeekday = true;
        else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }
    // constant that refers to the ISO standard
    hooks.ISO_8601 = function() {
    };
    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function() {
    };
    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i, i, parsedInput, tokens1, token, skipped, stringLength = string.length, totalParsedInputLength = 0, era;
        tokens1 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        for(i = 0; i < tokens1.length; i++){
            token = tokens1[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) getParsingFlags(config).unusedInput.push(skipped);
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) getParsingFlags(config).empty = false;
                else getParsingFlags(config).unusedTokens.push(token);
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) getParsingFlags(config).unusedTokens.push(token);
        }
        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) getParsingFlags(config).unusedInput.push(string);
        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) getParsingFlags(config).bigHour = undefined;
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        configFromArray(config);
        checkOverflow(config);
    }
    function meridiemFixWrap(locale, hour, meridiem1) {
        var isPm;
        if (meridiem1 == null) // nothing to do
        return hour;
        if (locale.meridiemHour != null) return locale.meridiemHour(hour, meridiem1);
        else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem1);
            if (isPm && hour < 12) hour += 12;
            if (!isPm && hour === 12) hour = 0;
            return hour;
        } else // this is not supposed to happen
        return hour;
    }
    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false;
        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }
        for(i = 0; i < config._f.length; i++){
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({
            }, config);
            if (config._useUTC != null) tempConfig._useUTC = config._useUTC;
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (isValid(tempConfig)) validFormatFound = true;
            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (!bestFormatIsValid) {
                if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) bestFormatIsValid = true;
                }
            } else if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
        extend(config, bestMoment || tempConfig);
    }
    function configFromObject(config) {
        if (config._d) return;
        var i = normalizeObjectUnits(config._i), dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map([
            i.year,
            i.month,
            dayOrDate,
            i.hour,
            i.minute,
            i.second,
            i.millisecond
        ], function(obj) {
            return obj && parseInt(obj, 10);
        });
        configFromArray(config);
    }
    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }
        return res;
    }
    function prepareConfig(config) {
        var input = config._i, format = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || format === undefined && input === '') return createInvalid({
            nullInput: true
        });
        if (typeof input === 'string') config._i = input = config._locale.preparse(input);
        if (isMoment(input)) return new Moment(checkOverflow(input));
        else if (isDate(input)) config._d = input;
        else if (isArray(format)) configFromStringAndArray(config);
        else if (format) configFromStringAndFormat(config);
        else configFromInput(config);
        if (!isValid(config)) config._d = null;
        return config;
    }
    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) config._d = new Date(hooks.now());
        else if (isDate(input)) config._d = new Date(input.valueOf());
        else if (typeof input === 'string') configFromString(config);
        else if (isArray(input)) {
            config._a = map(input.slice(0), function(obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) configFromObject(config);
        else if (isNumber(input)) // from milliseconds
        config._d = new Date(input);
        else hooks.createFromInputFallback(config);
    }
    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {
        };
        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }
        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }
        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) input = undefined;
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        return createFromConfig(c);
    }
    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }
    var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) return other < this ? this : other;
        else return createInvalid();
    }), prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) return other > this ? this : other;
        else return createInvalid();
    });
    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) moments = moments[0];
        if (!moments.length) return createLocal();
        res = moments[0];
        for(i = 1; i < moments.length; ++i)if (!moments[i].isValid() || moments[i][fn](res)) res = moments[i];
        return res;
    }
    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isBefore', args);
    }
    function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isAfter', args);
    }
    var now = function() {
        return Date.now ? Date.now() : +new Date();
    };
    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond', 
    ];
    function isDurationValid(m) {
        var key, unitHasDecimal = false, i;
        for(key in m){
            if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) return false;
        }
        for(i = 0; i < ordering.length; ++i)if (m[ordering[i]]) {
            if (unitHasDecimal) return false; // only allow non-integers for smallest unit
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) unitHasDecimal = true;
        }
        return true;
    }
    function isValid$1() {
        return this._isValid;
    }
    function createInvalid$1() {
        return createDuration(NaN);
    }
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration), years = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months = normalizedInput.month || 0, weeks = normalizedInput.week || normalizedInput.isoWeek || 0, days = normalizedInput.day || 0, hours = normalizedInput.hour || 0, minutes = normalizedInput.minute || 0, seconds = normalizedInput.second || 0, milliseconds = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput);
        // representation for dateAddRemove
        this._milliseconds = +milliseconds + seconds * 1000 + minutes * 60000 + hours * 3600000; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;
        this._data = {
        };
        this._locale = getLocale();
        this._bubble();
    }
    function isDuration(obj) {
        return obj instanceof Duration;
    }
    function absRound(number) {
        if (number < 0) return Math.round(-1 * number) * -1;
        else return Math.round(number);
    }
    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
        for(i = 0; i < len; i++)if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) diffs++;
        return diffs + lengthDiff;
    }
    // FORMATTING
    function offset(token, separator) {
        addFormatToken(token, 0, 0, function() {
            var offset1 = this.utcOffset(), sign = '+';
            if (offset1 < 0) {
                offset1 = -offset1;
                sign = '-';
            }
            return sign + zeroFill(~~(offset1 / 60), 2) + separator + zeroFill(~~offset1 % 60, 2);
        });
    }
    offset('Z', ':');
    offset('ZZ', '');
    // PARSING
    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken([
        'Z',
        'ZZ'
    ], function(input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });
    // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;
    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher), chunk, parts, minutes;
        if (matches === null) return null;
        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || [
            '-',
            0,
            0
        ];
        minutes = +(parts[1] * 60) + toInt(parts[2]);
        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }
    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else return createLocal(input).local();
    }
    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }
    // HOOKS
    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function() {
    };
    // MOMENTS
    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset1 = this._offset || 0, localAdjust;
        if (!this.isValid()) return input != null ? this : NaN;
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) return this;
            } else if (Math.abs(input) < 16 && !keepMinutes) input = input * 60;
            if (!this._isUTC && keepLocalTime) localAdjust = getDateOffset(this);
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) this.add(localAdjust, 'm');
            if (offset1 !== input) {
                if (!keepLocalTime || this._changeInProgress) addSubtract(this, createDuration(input - offset1, 'm'), 1, false);
                else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else return this._isUTC ? offset1 : getDateOffset(this);
    }
    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') input = -input;
            this.utcOffset(input, keepLocalTime);
            return this;
        } else return -this.utcOffset();
    }
    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }
    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) this.subtract(getDateOffset(this), 'm');
        }
        return this;
    }
    function setOffsetToParsedOffset() {
        if (this._tzm != null) this.utcOffset(this._tzm, false, true);
        else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) this.utcOffset(tZone);
            else this.utcOffset(0, true);
        }
        return this;
    }
    function hasAlignedHourOffset(input) {
        if (!this.isValid()) return false;
        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
    }
    function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) return this._isDSTShifted;
        var c = {
        }, other;
        copyConfig(c, this);
        c = prepareConfig(c);
        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else this._isDSTShifted = false;
        return this._isDSTShifted;
    }
    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }
    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }
    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }
    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function createDuration(input, key) {
        var duration = input, // matching against regexp is expensive, do it on demand
        match = null, sign, ret, diffRes;
        if (isDuration(input)) duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
        };
        else if (isNumber(input) || !isNaN(+input)) {
            duration = {
            };
            if (key) duration[key] = +input;
            else duration.milliseconds = +input;
        } else if (match = aspNetRegex.exec(input)) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign
            };
        } else if (match = isoRegex.exec(input)) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign)
            };
        } else if (duration == null) // checks for null or undefined
        duration = {
        };
        else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
            duration = {
            };
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, '_locale')) ret._locale = input._locale;
        if (isDuration(input) && hasOwnProp(input, '_isValid')) ret._isValid = input._isValid;
        return ret;
    }
    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;
    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }
    function positiveMomentsDifference(base, other) {
        var res = {
        };
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) --res.months;
        res.milliseconds = +other - +base.clone().add(res.months, 'M');
        return res;
    }
    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) return {
            milliseconds: 0,
            months: 0
        };
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) res = positiveMomentsDifference(base, other);
        else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }
        return res;
    }
    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function(val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val;
                val = period;
                period = tmp;
            }
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }
    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds, days = absRound(duration._days), months = absRound(duration._months);
        if (!mom.isValid()) // No op
        return;
        updateOffset = updateOffset == null ? true : updateOffset;
        if (months) setMonth(mom, get(mom, 'Month') + months * isAdding);
        if (days) set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        if (milliseconds) mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        if (updateOffset) hooks.updateOffset(mom, days || months);
    }
    var add = createAdder(1, 'add'), subtract = createAdder(-1, 'subtract');
    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }
    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
    }
    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            'years',
            'year',
            'y',
            'months',
            'month',
            'M',
            'days',
            'day',
            'd',
            'dates',
            'date',
            'D',
            'hours',
            'hour',
            'h',
            'minutes',
            'minute',
            'm',
            'seconds',
            'second',
            's',
            'milliseconds',
            'millisecond',
            'ms', 
        ], i, property;
        for(i = 0; i < properties.length; i += 1){
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
    }
    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input), dataTypeTest = false;
        if (arrayTest) dataTypeTest = input.filter(function(item) {
            return !isNumber(item) && isString(input);
        }).length === 0;
        return arrayTest && dataTypeTest;
    }
    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            'sameDay',
            'nextDay',
            'lastDay',
            'nextWeek',
            'lastWeek',
            'sameElse', 
        ], i, property;
        for(i = 0; i < properties.length; i += 1){
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
    }
    function getCalendarFormat(myMoment, now1) {
        var diff = myMoment.diff(now1, 'days', true);
        return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
    }
    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (!arguments[0]) {
                time = undefined;
                formats = undefined;
            } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now1 = time || createLocal(), sod = cloneWithOffset(now1, this).startOf('day'), format = hooks.calendarFormat(this, sod) || 'sameElse', output = formats && (isFunction(formats[format]) ? formats[format].call(this, now1) : formats[format]);
        return this.format(output || this.localeData().calendar(format, this, createLocal(now1)));
    }
    function clone() {
        return new Moment(this);
    }
    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') return this.valueOf() > localInput.valueOf();
        else return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') return this.valueOf() < localInput.valueOf();
        else return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from), localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) return false;
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }
    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input), inputMs;
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') return this.valueOf() === localInput.valueOf();
        else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }
    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }
    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }
    function diff(input, units, asFloat) {
        var that, zoneDelta, output;
        if (!this.isValid()) return NaN;
        that = cloneWithOffset(input, this);
        if (!that.isValid()) return NaN;
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 60000;
        units = normalizeUnits(units);
        switch(units){
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1000;
                break; // 1000
            case 'minute':
                output = (this - that) / 60000;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 3600000;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 86400000;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 604800000;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }
        return asFloat ? output : absFloor(output);
    }
    function monthDiff(a, b) {
        if (a.date() < b.date()) // end-of-month calculations work correct when the start month has more
        // days than the end month.
        return -monthDiff(b, a);
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'), anchor2, adjust;
        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }
        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }
    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }
    function toISOString(keepOffset) {
        if (!this.isValid()) return null;
        var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) return this.toDate().toISOString();
            else return new Date(this.valueOf() + this.utcOffset() * 60000).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */ function inspect() {
        if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)';
        var func = 'moment', zone = '', prefix, year, datetime, suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
    }
    function format(inputString) {
        if (!inputString) inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }
    function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) return createDuration({
            to: this,
            from: time
        }).locale(this.locale()).humanize(!withoutSuffix);
        else return this.localeData().invalidDate();
    }
    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }
    function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) return createDuration({
            from: this,
            to: time
        }).locale(this.locale()).humanize(!withoutSuffix);
        else return this.localeData().invalidDate();
    }
    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }
    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;
        if (key === undefined) return this._locale._abbr;
        else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) this._locale = newLocaleData;
            return this;
        }
    }
    var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function(key) {
        if (key === undefined) return this.localeData();
        else return this.locale(key);
    });
    function localeData() {
        return this._locale;
    }
    var MS_PER_SECOND = 1000, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = 3506328 * MS_PER_HOUR;
    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }
    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) // preserve leap years using a full 400 year cycle, then reset
        return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        else return new Date(y, m, d).valueOf();
    }
    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) // preserve leap years using a full 400 year cycle, then reset
        return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        else return Date.UTC(y, m, d);
    }
    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) return this;
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch(units){
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }
    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) return this;
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch(units){
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }
    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }
    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }
    function toDate() {
        return new Date(this.valueOf());
    }
    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(), 
        ];
    }
    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }
    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }
    function isValid$2() {
        return isValid(this);
    }
    function parsingFlags() {
        return extend({
        }, getParsingFlags(this));
    }
    function invalidAt() {
        return getParsingFlags(this).overflow;
    }
    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }
    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');
    addFormatToken('y', [
        'y',
        1
    ], 'yo', 'eraYear');
    addFormatToken('y', [
        'yy',
        2
    ], 0, 'eraYear');
    addFormatToken('y', [
        'yyy',
        3
    ], 0, 'eraYear');
    addFormatToken('y', [
        'yyyy',
        4
    ], 0, 'eraYear');
    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);
    addParseToken([
        'N',
        'NN',
        'NNN',
        'NNNN',
        'NNNNN'
    ], function(input, array, config, token) {
        var era = config._locale.erasParse(input, token, config._strict);
        if (era) getParsingFlags(config).era = era;
        else getParsingFlags(config).invalidEra = input;
    });
    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);
    addParseToken([
        'y',
        'yy',
        'yyy',
        'yyyy'
    ], YEAR);
    addParseToken([
        'yo'
    ], function(input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) match = input.match(config._locale._eraYearOrdinalRegex);
        if (config._locale.eraYearOrdinalParse) array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        else array[YEAR] = parseInt(input, 10);
    });
    function localeEras(m, format1) {
        var i, l, date, eras = this._eras || getLocale('en')._eras;
        for(i = 0, l = eras.length; i < l; ++i){
            switch(typeof eras[i].since){
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }
            switch(typeof eras[i].until){
                case 'undefined':
                    eras[i].until = Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }
    function localeErasParse(eraName, format1, strict) {
        var i, l, eras = this.eras(), name, abbr, narrow;
        eraName = eraName.toUpperCase();
        for(i = 0, l = eras.length; i < l; ++i){
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();
            if (strict) switch(format1){
                case 'N':
                case 'NN':
                case 'NNN':
                    if (abbr === eraName) return eras[i];
                    break;
                case 'NNNN':
                    if (name === eraName) return eras[i];
                    break;
                case 'NNNNN':
                    if (narrow === eraName) return eras[i];
                    break;
            }
            else if ([
                name,
                abbr,
                narrow
            ].indexOf(eraName) >= 0) return eras[i];
        }
    }
    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? 1 : -1;
        if (year === undefined) return hooks(era.since).year();
        else return hooks(era.since).year() + (year - era.offset) * dir;
    }
    function getEraName() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].name;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].name;
        }
        return '';
    }
    function getEraNarrow() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].narrow;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].narrow;
        }
        return '';
    }
    function getEraAbbr() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].abbr;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].abbr;
        }
        return '';
    }
    function getEraYear() {
        var i, l, dir, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            dir = eras[i].since <= eras[i].until ? 1 : -1;
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
        }
        return this.year();
    }
    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) computeErasParse.call(this);
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }
    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) computeErasParse.call(this);
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }
    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) computeErasParse.call(this);
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }
    function matchEraAbbr(isStrict, locale1) {
        return locale1.erasAbbrRegex(isStrict);
    }
    function matchEraName(isStrict, locale1) {
        return locale1.erasNameRegex(isStrict);
    }
    function matchEraNarrow(isStrict, locale1) {
        return locale1.erasNarrowRegex(isStrict);
    }
    function matchEraYearOrdinal(isStrict, locale1) {
        return locale1._eraYearOrdinalRegex || matchUnsigned;
    }
    function computeErasParse() {
        var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
        for(i = 0, l = eras.length; i < l; ++i){
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));
            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
        }
        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp('^(' + narrowPieces.join('|') + ')', 'i');
    }
    // FORMATTING
    addFormatToken(0, [
        'gg',
        2
    ], 0, function() {
        return this.weekYear() % 100;
    });
    addFormatToken(0, [
        'GG',
        2
    ], 0, function() {
        return this.isoWeekYear() % 100;
    });
    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [
            token,
            token.length
        ], 0, getter);
    }
    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
    // ALIASES
    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');
    // PRIORITY
    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);
    // PARSING
    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);
    addWeekParseToken([
        'gggg',
        'ggggg',
        'GGGG',
        'GGGGG'
    ], function(input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });
    addWeekParseToken([
        'gg',
        'GG'
    ], function(input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });
    // MOMENTS
    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }
    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }
    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }
    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }
    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) return weekOfYear(this, dow, doy).year;
        else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) week = weeksTarget;
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }
    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }
    // FORMATTING
    addFormatToken('Q', 0, 'Qo', 'quarter');
    // ALIASES
    addUnitAlias('quarter', 'Q');
    // PRIORITY
    addUnitPriority('quarter', 7);
    // PARSING
    addRegexToken('Q', match1);
    addParseToken('Q', function(input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });
    // MOMENTS
    function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }
    // FORMATTING
    addFormatToken('D', [
        'DD',
        2
    ], 'Do', 'date');
    // ALIASES
    addUnitAlias('date', 'D');
    // PRIORITY
    addUnitPriority('date', 9);
    // PARSING
    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function(isStrict, locale1) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ? locale1._dayOfMonthOrdinalParse || locale1._ordinalParse : locale1._dayOfMonthOrdinalParseLenient;
    });
    addParseToken([
        'D',
        'DD'
    ], DATE);
    addParseToken('Do', function(input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });
    // MOMENTS
    var getSetDayOfMonth = makeGetSet('Date', true);
    // FORMATTING
    addFormatToken('DDD', [
        'DDDD',
        3
    ], 'DDDo', 'dayOfYear');
    // ALIASES
    addUnitAlias('dayOfYear', 'DDD');
    // PRIORITY
    addUnitPriority('dayOfYear', 4);
    // PARSING
    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken([
        'DDD',
        'DDDD'
    ], function(input, array, config) {
        config._dayOfYear = toInt(input);
    });
    // HELPERS
    // MOMENTS
    function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 86400000) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }
    // FORMATTING
    addFormatToken('m', [
        'mm',
        2
    ], 0, 'minute');
    // ALIASES
    addUnitAlias('minute', 'm');
    // PRIORITY
    addUnitPriority('minute', 14);
    // PARSING
    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken([
        'm',
        'mm'
    ], MINUTE);
    // MOMENTS
    var getSetMinute = makeGetSet('Minutes', false);
    // FORMATTING
    addFormatToken('s', [
        'ss',
        2
    ], 0, 'second');
    // ALIASES
    addUnitAlias('second', 's');
    // PRIORITY
    addUnitPriority('second', 15);
    // PARSING
    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken([
        's',
        'ss'
    ], SECOND);
    // MOMENTS
    var getSetSecond = makeGetSet('Seconds', false);
    // FORMATTING
    addFormatToken('S', 0, 0, function() {
        return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, [
        'SS',
        2
    ], 0, function() {
        return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, [
        'SSS',
        3
    ], 0, 'millisecond');
    addFormatToken(0, [
        'SSSS',
        4
    ], 0, function() {
        return this.millisecond() * 10;
    });
    addFormatToken(0, [
        'SSSSS',
        5
    ], 0, function() {
        return this.millisecond() * 100;
    });
    addFormatToken(0, [
        'SSSSSS',
        6
    ], 0, function() {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, [
        'SSSSSSS',
        7
    ], 0, function() {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, [
        'SSSSSSSS',
        8
    ], 0, function() {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, [
        'SSSSSSSSS',
        9
    ], 0, function() {
        return this.millisecond() * 1000000;
    });
    // ALIASES
    addUnitAlias('millisecond', 'ms');
    // PRIORITY
    addUnitPriority('millisecond', 16);
    // PARSING
    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    var token, getSetMillisecond;
    for(token = 'SSSS'; token.length <= 9; token += 'S')addRegexToken(token, matchUnsigned);
    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }
    for(token = 'S'; token.length <= 9; token += 'S')addParseToken(token, parseMs);
    getSetMillisecond = makeGetSet('Milliseconds', false);
    // FORMATTING
    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');
    // MOMENTS
    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }
    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }
    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) proto[Symbol.for('nodejs.util.inspect.custom')] = function() {
        return 'Moment<' + this.format() + '>';
    };
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
    function createUnix(input) {
        return createLocal(input * 1000);
    }
    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }
    function preParsePostFormat(string) {
        return string;
    }
    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;
    function get$1(format1, index, field, setter) {
        var locale1 = getLocale(), utc = createUTC().set(setter, index);
        return locale1[field](utc, format1);
    }
    function listMonthsImpl(format1, index, field) {
        if (isNumber(format1)) {
            index = format1;
            format1 = undefined;
        }
        format1 = format1 || '';
        if (index != null) return get$1(format1, index, field, 'month');
        var i, out = [];
        for(i = 0; i < 12; i++)out[i] = get$1(format1, i, field, 'month');
        return out;
    }
    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format1, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format1)) {
                index = format1;
                format1 = undefined;
            }
            format1 = format1 || '';
        } else {
            format1 = localeSorted;
            index = format1;
            localeSorted = false;
            if (isNumber(format1)) {
                index = format1;
                format1 = undefined;
            }
            format1 = format1 || '';
        }
        var locale1 = getLocale(), shift = localeSorted ? locale1._week.dow : 0, i, out = [];
        if (index != null) return get$1(format1, (index + shift) % 7, field, 'day');
        for(i = 0; i < 7; i++)out[i] = get$1(format1, (i + shift) % 7, field, 'day');
        return out;
    }
    function listMonths(format1, index) {
        return listMonthsImpl(format1, index, 'months');
    }
    function listMonthsShort(format1, index) {
        return listMonthsImpl(format1, index, 'monthsShort');
    }
    function listWeekdays(localeSorted, format1, index) {
        return listWeekdaysImpl(localeSorted, format1, index, 'weekdays');
    }
    function listWeekdaysShort(localeSorted, format1, index) {
        return listWeekdaysImpl(localeSorted, format1, index, 'weekdaysShort');
    }
    function listWeekdaysMin(localeSorted, format1, index) {
        return listWeekdaysImpl(localeSorted, format1, index, 'weekdaysMin');
    }
    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD'
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC'
            }, 
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
            var b = number % 10, output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
        }
    });
    // Side effect imports
    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
    var mathAbs = Math.abs;
    function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
    }
    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
    }
    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }
    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }
    function absCeil(number) {
        if (number < 0) return Math.floor(number);
        else return Math.ceil(number);
    }
    function bubble() {
        var milliseconds = this._milliseconds, days = this._days, months = this._months, data = this._data, seconds, minutes, hours, years, monthsFromDays;
        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
            milliseconds += absCeil(monthsToDays(months) + days) * 86400000;
            days = 0;
            months = 0;
        }
        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;
        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24);
        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));
        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
        return this;
    }
    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }
    function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }
    function as(units) {
        if (!this.isValid()) return NaN;
        var days, months, milliseconds = this._milliseconds;
        units = normalizeUnits(units);
        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 86400000;
            months = this._months + daysToMonths(days);
            switch(units){
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch(units){
                case 'week':
                    return days / 7 + milliseconds / 604800000;
                case 'day':
                    return days + milliseconds / 86400000;
                case 'hour':
                    return days * 24 + milliseconds / 3600000;
                case 'minute':
                    return days * 1440 + milliseconds / 60000;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 86400000) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }
    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) return NaN;
        return this._milliseconds + this._days * 86400000 + this._months % 12 * 2592000000 + toInt(this._months / 12) * 31536000000;
    }
    function makeAs(alias) {
        return function() {
            return this.as(alias);
        };
    }
    var asMilliseconds = makeAs('ms'), asSeconds = makeAs('s'), asMinutes = makeAs('m'), asHours = makeAs('h'), asDays = makeAs('d'), asWeeks = makeAs('w'), asMonths = makeAs('M'), asQuarters = makeAs('Q'), asYears = makeAs('y');
    function clone$1() {
        return createDuration(this);
    }
    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }
    function makeGetter(name) {
        return function() {
            return this.isValid() ? this._data[name] : NaN;
        };
    }
    var milliseconds = makeGetter('milliseconds'), seconds = makeGetter('seconds'), minutes = makeGetter('minutes'), hours = makeGetter('hours'), days = makeGetter('days'), months = makeGetter('months'), years = makeGetter('years');
    function weeks() {
        return absFloor(this.days() / 7);
    }
    var round = Math.round, thresholds = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
    };
    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale1) {
        return locale1.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function relativeTime$1(posNegDuration, withoutSuffix, thresholds1, locale1) {
        var duration = createDuration(posNegDuration).abs(), seconds1 = round(duration.as('s')), minutes1 = round(duration.as('m')), hours1 = round(duration.as('h')), days1 = round(duration.as('d')), months1 = round(duration.as('M')), weeks1 = round(duration.as('w')), years1 = round(duration.as('y')), a = seconds1 <= thresholds1.ss && [
            's',
            seconds1
        ] || seconds1 < thresholds1.s && [
            'ss',
            seconds1
        ] || minutes1 <= 1 && [
            'm'
        ] || minutes1 < thresholds1.m && [
            'mm',
            minutes1
        ] || hours1 <= 1 && [
            'h'
        ] || hours1 < thresholds1.h && [
            'hh',
            hours1
        ] || days1 <= 1 && [
            'd'
        ] || days1 < thresholds1.d && [
            'dd',
            days1
        ];
        if (thresholds1.w != null) a = a || weeks1 <= 1 && [
            'w'
        ] || weeks1 < thresholds1.w && [
            'ww',
            weeks1
        ];
        a = a || months1 <= 1 && [
            'M'
        ] || months1 < thresholds1.M && [
            'MM',
            months1
        ] || years1 <= 1 && [
            'y'
        ] || [
            'yy',
            years1
        ];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale1;
        return substituteTimeAgo.apply(null, a);
    }
    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) return round;
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }
    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) return false;
        if (limit === undefined) return thresholds[threshold];
        thresholds[threshold] = limit;
        if (threshold === 's') thresholds.ss = limit - 1;
        return true;
    }
    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var withSuffix = false, th = thresholds, locale1, output;
        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') withSuffix = argWithSuffix;
        if (typeof argThresholds === 'object') {
            th = Object.assign({
            }, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) th.ss = argThresholds.s - 1;
        }
        locale1 = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale1);
        if (withSuffix) output = locale1.pastFuture(+this, output);
        return locale1.postformat(output);
    }
    var abs$1 = Math.abs;
    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }
    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) return this.localeData().invalidDate();
        var seconds1 = abs$1(this._milliseconds) / 1000, days1 = abs$1(this._days), months1 = abs$1(this._months), minutes1, hours1, years1, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
        if (!total) // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
        // 3600 seconds -> 60 minutes -> 1 hour
        minutes1 = absFloor(seconds1 / 60);
        hours1 = absFloor(minutes1 / 60);
        seconds1 %= 60;
        minutes1 %= 60;
        // 12 months -> 1 year
        years1 = absFloor(months1 / 12);
        months1 %= 12;
        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds1 ? seconds1.toFixed(3).replace(/\.?0+$/, '') : '';
        totalSign = total < 0 ? '-' : '';
        ymSign = sign(this._months) !== sign(total) ? '-' : '';
        daysSign = sign(this._days) !== sign(total) ? '-' : '';
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
        return totalSign + 'P' + (years1 ? ymSign + years1 + 'Y' : '') + (months1 ? ymSign + months1 + 'M' : '') + (days1 ? daysSign + days1 + 'D' : '') + (hours1 || minutes1 || seconds1 ? 'T' : '') + (hours1 ? hmsSign + hours1 + 'H' : '') + (minutes1 ? hmsSign + minutes1 + 'M' : '') + (seconds1 ? hmsSign + s + 'S' : '');
    }
    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;
    // FORMATTING
    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');
    // PARSING
    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function(input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function(input, array, config) {
        config._d = new Date(toInt(input));
    });
    //! moment.js
    hooks.version = '2.29.1';
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;
    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
        DATE: 'YYYY-MM-DD',
        TIME: 'HH:mm',
        TIME_SECONDS: 'HH:mm:ss',
        TIME_MS: 'HH:mm:ss.SSS',
        WEEK: 'GGGG-[W]WW',
        MONTH: 'YYYY-MM'
    };
    return hooks;
});

});

parcelRequire.register("2eVOQ", function(module, exports) {

$parcel$export(module.exports, "construct_zenmorning_area", () => $49a0919f8417bad5476f4bac50447d9f$export$befd6a234f207d4a);

var $1oTL5 = parcelRequire("1oTL5");

var $Iq2i6 = parcelRequire("Iq2i6");

var $7IzVc = parcelRequire("7IzVc");
function $49a0919f8417bad5476f4bac50447d9f$export$befd6a234f207d4a() {
    const areaEl = $1oTL5.DOM.create_el({
        tag: "div",
        attributes: {
            id: $Iq2i6.Selectors.ZM_ZENMORNING_AREA.substring(1),
            class: '_3J6wB'
        }
    });
    const headerEl = $1oTL5.DOM.create_el({
        tag: "h1",
        text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("WA_contactCtxMenuItem_zenMorning")
    });
    areaEl.appendChild(headerEl);
    const zenMorningDescEl = $1oTL5.DOM.create_el({
        tag: "p",
        text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_zenMorning_description")
    });
    areaEl.appendChild(zenMorningDescEl);
    const footerEl = $1oTL5.DOM.create_el({
        tag: "ul",
        attributes: {
            id: $Iq2i6.Selectors.ZM_ZENMORNING_AREA_FOOTER.substring(1)
        }
    });
    [
        'cancel',
        'ok'
    ].forEach((action)=>{
        let text = '';
        switch(action){
            case 'cancel':
                text = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage('ZM_noBtn');
                break;
            case 'ok':
                text = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage('ZM_yesBtn');
        }
        const btn = $1oTL5.DOM.create_el({
            tag: 'button',
            attributes: {
                'data-action': action
            },
            text: text
        });
        footerEl.append(btn);
    });
    areaEl.append(footerEl);
    return areaEl;
} //# sourceMappingURL=construct-zenmorning-area.js.map

});

parcelRequire.register("38ck6", function(module, exports) {

$parcel$export(module.exports, "lastHoveredChat", () => $66ea5e8596dd8bb7d9ed1d237c63f357$export$ad345ac12e461640);
$parcel$export(module.exports, "attach_hide_contact_item", () => $66ea5e8596dd8bb7d9ed1d237c63f357$export$52ae0184d0ee62b6);

var $1oTL5 = parcelRequire("1oTL5");

var $7pCU8 = parcelRequire("7pCU8");

var $2HYB2 = parcelRequire("2HYB2");

var $4Prwr = parcelRequire("4Prwr");

var $OgUiv = parcelRequire("OgUiv");

var $Iq2i6 = parcelRequire("Iq2i6");

var $4gcVu = parcelRequire("4gcVu");

var $2Sxce = parcelRequire("2Sxce");

var $6wA4v = parcelRequire("6wA4v");

var $3C3AO = parcelRequire("3C3AO");

var $XxiED = parcelRequire("XxiED");
let $66ea5e8596dd8bb7d9ed1d237c63f357$export$ad345ac12e461640;
function $66ea5e8596dd8bb7d9ed1d237c63f357$export$52ae0184d0ee62b6(node) {
    // prettier-ignore
    // Explain: It shouldn't be a ZM element using WA styling; eg ZM_CTX_MENU or RN area .
    if ([
        $Iq2i6.Selectors.ZM_RELEASE_NOTES_AREA.substring(1),
        $Iq2i6.Selectors.ZM_CTX_MENU.substring(1), 
    ].includes(node.id)) return;
    const waContactCtxMenuEl = $1oTL5.DOM.get_el($Iq2i6.Selectors.WA_CONTACT_CTX_MENU);
    if (!waContactCtxMenuEl) {
        $7pCU8.throw_DOM_error($Iq2i6.Selectors.WA_CONTACT_CTX_MENU, "WA_CONTACT_CTX_MENU");
        return;
    }
    const waContactCtxMenuListEl = $1oTL5.DOM.get_el("ul > div", waContactCtxMenuEl);
    if (!waContactCtxMenuListEl) {
        $7pCU8.throw_DOM_error($Iq2i6.Selectors.WA_CONTACT_CTX_MENU, "WA_CONTACT_CTX_MENU");
        return;
    }
    const hoveredContactTitle = $OgUiv.get_hovered_contact_raw_title();
    $4gcVu.findChatByTitle(hoveredContactTitle, async (hoveredChat)=>{
        if (!hoveredChat) return;
        $66ea5e8596dd8bb7d9ed1d237c63f357$export$ad345ac12e461640 = hoveredChat;
        const isHidden = await $2Sxce.isHiddenChat(hoveredChat);
        const menuItemEl = isHidden ? $4Prwr.construct_Unhide_contact_ctx_menu_item() : $2HYB2.construct_Hide_contact_ctx_menu_item();
        menuItemEl.classList.add('first');
        const zenMorningItemEl = $3C3AO.construct_zenMorning_contact_ctx_menu_item(await $6wA4v.isZenMorningChat(hoveredChat));
        const visibilityShedulerItemEl = $XxiED.construct_visibilty_sheduler_ctx_menu_item();
        waContactCtxMenuListEl.append(menuItemEl, visibilityShedulerItemEl);
        waContactCtxMenuListEl.click(); // Corrects ctx menu visualization.
    });
} //# sourceMappingURL=attach_hide_contact_item.js.map

});
parcelRequire.register("2HYB2", function(module, exports) {

$parcel$export(module.exports, "construct_Hide_contact_ctx_menu_item", () => $5904fd5217acb64a36c9ebba76b31e1c$export$e09083d3ca6e8725);

var $7IzVc = parcelRequire("7IzVc");

var $Iq2i6 = parcelRequire("Iq2i6");

var $3kKpl = parcelRequire("3kKpl");

var $1oTL5 = parcelRequire("1oTL5");

var $4KPZ6 = parcelRequire("4KPZ6");
function $5904fd5217acb64a36c9ebba76b31e1c$export$e09083d3ca6e8725() {
    const iconUrl = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.getURL('assets/whatsapp/hide-snooze-chat.png');
    const img = $1oTL5.DOM.create_el({
        tag: "img",
        attributes: {
            src: iconUrl,
            id: "WA_contactCtxMenuItem_hide_id"
        }
    });
    const menuItemEl = $3kKpl.constructFakeCtxMenuItem([
        img,
        (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("WA_contactCtxMenuItem_hide")
    ], $5904fd5217acb64a36c9ebba76b31e1c$var$hidePopup);
    menuItemEl.id = $Iq2i6.Selectors.ZM_HIDE_CONTACT_CTX_MENU_ITEM.substring(1);
    return menuItemEl;
}
function $5904fd5217acb64a36c9ebba76b31e1c$var$hidePopup() {
    const hideChatAreaEl = $4KPZ6.construct_hide_popup_area();
    document.body.appendChild(hideChatAreaEl);
// set_el_style(DOM.get_el(Selectors.ZM_HIDE_POPUP), {display: "initial"});
} //# sourceMappingURL=construct-hide-contact-item.js.map

});
parcelRequire.register("3kKpl", function(module, exports) {

$parcel$export(module.exports, "constructFakeCtxMenuItem", () => $6d90f4cd61ce219230922bf2b990b9c5$export$a0d6d7ef2b183cf0);
/**
 * Used to emulate native hover effect
 */ const $6d90f4cd61ce219230922bf2b990b9c5$var$handleMouseOver = (e)=>{
    // @ts-ignore
    let targetItem = e.target.closest('._3UHfW');
    let targetClass = 'H774S';
    if (!targetItem) {
        // @ts-ignore
        targetItem = e.target.closest('.fakeCtxMenuItemOpts');
        targetClass = 'show';
        if (!targetItem) return;
    }
    targetItem.classList.add(targetClass);
    targetItem.onmouseout = ()=>{
        targetItem.classList.remove(targetClass);
        targetItem.onmouseout = null; // Clear memory
    };
};
function $6d90f4cd61ce219230922bf2b990b9c5$export$a0d6d7ef2b183cf0(domNodes, action, children = []) {
    const li = document.createElement('LI');
    li.className = "_1wMaz _18oo2 fakeCtxMenuItem";
    if (typeof action === 'string') li.setAttribute('data-action', action);
    else li.addEventListener('click', (evt)=>{
        evt.stopImmediatePropagation();
        action();
    });
    li.innerHTML = '<div class="_2oldI dJxPU"></div>';
    if (typeof action === 'string' && children.length > 0) {
        li.className = "_1wMaz _18oo2 fakeCtxMenuItem fakeCtxMenuItemOpts";
        const itemLis = children.map((item)=>$6d90f4cd61ce219230922bf2b990b9c5$export$a0d6d7ef2b183cf0([
                item.domNode
            ], item.action)
        );
        li.innerHTML += '<ul class="o--vV _1qAEq fakeCtxMenuSettings"></ul>';
        li.children[1].append(...itemLis);
    }
    li.children[0].append(...domNodes);
    li.addEventListener('mouseover', $6d90f4cd61ce219230922bf2b990b9c5$var$handleMouseOver);
    return li;
} //# sourceMappingURL=construct-zen-mode-ctx-menu-item.js.map

});

parcelRequire.register("4KPZ6", function(module, exports) {

$parcel$export(module.exports, "construct_hide_popup_area", () => $9c3fdb41c514a8b7bfd89b2f1806a00c$export$cc1f162fd1d6ab47);

var $1oTL5 = parcelRequire("1oTL5");

var $2f9nT = parcelRequire("2f9nT");

var $Iq2i6 = parcelRequire("Iq2i6");

var $7IzVc = parcelRequire("7IzVc");

var $55f7H = parcelRequire("55f7H");

var $2Sxce = parcelRequire("2Sxce");

var $38ck6 = parcelRequire("38ck6");
function $9c3fdb41c514a8b7bfd89b2f1806a00c$export$cc1f162fd1d6ab47() {
    const hidePopupArea = $1oTL5.DOM.create_el({
        tag: "div",
        attributes: {
            id: $Iq2i6.Selectors.ZM_HIDE_POPUP.substring(1),
            class: '_3J6wB'
        }
    });
    const headerEl = $1oTL5.DOM.create_el({
        tag: "div",
        attributes: {
            class: "hide-popup-title"
        }
    });
    const headerTitle = $1oTL5.DOM.create_el({
        tag: "h1",
        text: `${(/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_hide_popup_title")}`
    });
    headerEl.appendChild(headerTitle);
    hidePopupArea.appendChild(headerEl);
    const warningArea = $1oTL5.DOM.create_el({
        tag: "div",
        attributes: {
            class: "ZenMode__warning-area"
        }
    });
    hidePopupArea.appendChild(warningArea);
    const hidePopupFormEl = $1oTL5.DOM.create_el({
        tag: "form"
    });
    hidePopupArea.appendChild(hidePopupFormEl);
    const hidePopupGroupHours = $1oTL5.DOM.create_el({
        tag: "label",
        attributes: {
            class: 'hide-popup-group'
        }
    });
    hidePopupGroupHours.appendChild($1oTL5.DOM.create_el({
        attributes: {
            checked: '',
            type: 'radio',
            value: "hours",
            name: "hideRadio",
            class: "hide-popup-radio"
        },
        tag: "input"
    }));
    hidePopupGroupHours.appendChild($1oTL5.DOM.create_el({
        text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_hide_popup_hours"),
        tag: "span"
    }));
    hidePopupFormEl.appendChild(hidePopupGroupHours);
    const hidePopupGroupDay = $1oTL5.DOM.create_el({
        tag: "label",
        attributes: {
            class: 'hide-popup-group'
        }
    });
    hidePopupGroupDay.appendChild($1oTL5.DOM.create_el({
        attributes: {
            type: 'radio',
            value: "day",
            name: "hideRadio",
            class: "hide-popup-radio"
        },
        tag: "input"
    }));
    hidePopupGroupDay.appendChild($1oTL5.DOM.create_el({
        text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_hide_popup_day"),
        tag: 'span'
    }));
    hidePopupFormEl.appendChild(hidePopupGroupDay);
    const hidePopupGroupWeek = $1oTL5.DOM.create_el({
        tag: "label",
        attributes: {
            class: 'hide-popup-group'
        }
    });
    hidePopupGroupWeek.appendChild($1oTL5.DOM.create_el({
        attributes: {
            type: 'radio',
            value: "week",
            name: "hideRadio",
            class: "hide-popup-radio"
        },
        tag: "input"
    }));
    hidePopupGroupWeek.appendChild($1oTL5.DOM.create_el({
        text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_hide_popup_week"),
        tag: 'span'
    }));
    hidePopupFormEl.appendChild(hidePopupGroupWeek);
    const buttonsContainer = $1oTL5.DOM.create_el({
        tag: "div",
        attributes: {
            class: 'hide-popup-buttons-container'
        }
    });
    hidePopupFormEl.appendChild(buttonsContainer);
    const hidePopupButton = $1oTL5.DOM.create_el({
        tag: "div",
        attributes: {
            class: 'hide-popup-button',
            type: "button"
        },
        text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("WA_contactCtxMenuItem_hide")
    });
    hidePopupButton.onclick = function(e) {
        e.preventDefault();
        const elems = $1oTL5.DOM.get_input_els(".hide-popup-radio");
        let selectedValue;
        if (elems && elems.length) elems.forEach((item)=>{
            if (item.checked) selectedValue = item.value;
        });
        if (selectedValue === "hours") {
            $55f7H.hide_contact(480);
            $2f9nT.set_el_style(hidePopupArea, {
                display: "none"
            });
        } else if (selectedValue === "day") {
            $55f7H.hide_contact(1440);
            $2f9nT.set_el_style(hidePopupArea, {
                display: "none"
            });
        } else if (selectedValue === "week") {
            $55f7H.hide_contact(10080);
            $2f9nT.set_el_style(hidePopupArea, {
                display: "none"
            });
        }
    };
    buttonsContainer.appendChild(hidePopupButton);
    const closeBtnEl = $1oTL5.DOM.create_el({
        tag: "div",
        text: "x",
        attributes: {
            class: "hide-popup-close-btn"
        }
    });
    closeBtnEl.addEventListener("click", ()=>$2f9nT.set_el_style(hidePopupArea, {
            display: "none"
        })
    , $1oTL5.DOM.remove_el($Iq2i6.Selectors.ZM_HIDE_POPUP));
    hidePopupArea.appendChild(closeBtnEl);
    window.addEventListener('click', (e)=>{
        if (e.target.closest($Iq2i6.Selectors.ZM_HIDE_POPUP)) return;
    });
    $2Sxce.getVisibiltyShedule().then((shedule)=>{
        const hoveredChatId = $38ck6.lastHoveredChat === null || $38ck6.lastHoveredChat === void 0 ? void 0 : $38ck6.lastHoveredChat.id;
        if (hoveredChatId && shedule.find((s)=>s[0].id === hoveredChatId
        )) {
            const warningMessage = $1oTL5.DOM.create_el({
                tag: "span",
                text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_Warning")
            });
            warningArea.append(warningMessage);
        }
    });
    return hidePopupArea;
} //# sourceMappingURL=construct-chat-popup.js.map

});
parcelRequire.register("55f7H", function(module, exports) {

$parcel$export(module.exports, "unhide_contact", () => $a710347b043a9afbf2b1358f573cb0fc$export$e79bddf5842b10f4);
$parcel$export(module.exports, "hide_contact", () => $a710347b043a9afbf2b1358f573cb0fc$export$f6fa5ff82577cef1);
$parcel$export(module.exports, "renderHiddenLabel", () => $a710347b043a9afbf2b1358f573cb0fc$export$9acbf6480ddd0e39);

var $13vOd = parcelRequire("13vOd");

var $2Sxce = parcelRequire("2Sxce");

var $7pCU8 = parcelRequire("7pCU8");

var $38ck6 = parcelRequire("38ck6");

var $7IzVc = parcelRequire("7IzVc");

var $Iq2i6 = parcelRequire("Iq2i6");
function $a710347b043a9afbf2b1358f573cb0fc$export$f6fa5ff82577cef1(chosenDelay) {
    $a710347b043a9afbf2b1358f573cb0fc$var$set_hide_contact(true, chosenDelay);
// lastHoveredChat = null;
}
function $a710347b043a9afbf2b1358f573cb0fc$export$e79bddf5842b10f4() {
    $13vOd.hide_WA_context_menu();
    $a710347b043a9afbf2b1358f573cb0fc$var$set_hide_contact(false);
// lastHoveredChat = null;
}
function $a710347b043a9afbf2b1358f573cb0fc$var$set_hide_contact(hide, chosenDelay) {
    if (!$38ck6.lastHoveredChat) {
        $7pCU8.process_error("Hover chat not define");
        return;
    }
    if (hide) {
        if (chosenDelay) (/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.sendMessage({
            type: 'setAlarm',
            payload: {
                chat: $38ck6.lastHoveredChat,
                delay: chosenDelay
            }
        });
        $2Sxce.addHiddenChats($38ck6.lastHoveredChat);
    } else {
        $2Sxce.removeHiddenChats($38ck6.lastHoveredChat);
        (/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.sendMessage({
            type: 'deleteShedule',
            payload: {
                chat: [
                    $38ck6.lastHoveredChat.id
                ]
            }
        });
    }
}
function $a710347b043a9afbf2b1358f573cb0fc$export$9acbf6480ddd0e39(chatEl) {
    const span = chatEl.querySelector($Iq2i6.Selectors.WA_HIDDEN_LABEL_CONTAINER);
    if (!span) return;
    span.innerHTML = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage('ZM_hidden');
}
(/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.onMessage.addListener(function(message) {
    const { type: type , payload: payload  } = message;
    if (type === "unhideChat") $2Sxce.removeHiddenChats(payload.chat);
}); //# sourceMappingURL=hide-contact.js.map

});
parcelRequire.register("13vOd", function(module, exports) {

$parcel$export(module.exports, "hide_WA_context_menu", () => $22b7f6438926c9e18b420f4c9c1f7d7d$export$ddff898cf20ece35);

var $1oTL5 = parcelRequire("1oTL5");

var $2f9nT = parcelRequire("2f9nT");

var $Iq2i6 = parcelRequire("Iq2i6");

var $1NYDb = parcelRequire("1NYDb");
function $22b7f6438926c9e18b420f4c9c1f7d7d$export$ddff898cf20ece35() {
    const WA_ctxMenuEl = $1oTL5.DOM.get_el($Iq2i6.Selectors.WA_CONTACT_CTX_MENU);
    $1NYDb.devprint("WA_ctxMenuEl=", WA_ctxMenuEl);
    $1NYDb.devprint("hide_WA_context_menu");
    $2f9nT.set_el_style(WA_ctxMenuEl, {
        display: "none"
    });
} //# sourceMappingURL=hide-wa-context-menu.js.map

});




parcelRequire.register("4Prwr", function(module, exports) {

$parcel$export(module.exports, "construct_Unhide_contact_ctx_menu_item", () => $9eb0a9f835ebe9c473d6d10b66143405$export$27c957668d529b36);

var $7IzVc = parcelRequire("7IzVc");

var $55f7H = parcelRequire("55f7H");

var $Iq2i6 = parcelRequire("Iq2i6");

var $3kKpl = parcelRequire("3kKpl");
function $9eb0a9f835ebe9c473d6d10b66143405$export$27c957668d529b36() {
    const menuItemEl = $3kKpl.constructFakeCtxMenuItem([
        (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("WA_contactCtxMenuItem_unhide")
    ], $55f7H.unhide_contact);
    menuItemEl.id = $Iq2i6.Selectors.ZM_UNHIDE_CONTACT_CTX_MENU_ITEM.substring(1);
    return menuItemEl;
} //# sourceMappingURL=construct-unhide-contact-item.js.map

});

parcelRequire.register("OgUiv", function(module, exports) {

$parcel$export(module.exports, "get_hovered_contact_raw_title", () => $1aa459404e8e428cdff2754f857ecef7$export$837b429b1dbda476);

var $1oTL5 = parcelRequire("1oTL5");

var $7pCU8 = parcelRequire("7pCU8");

var $2gZcA = parcelRequire("2gZcA");

var $3y5Ap = parcelRequire("3y5Ap");

var $Iq2i6 = parcelRequire("Iq2i6");
function $1aa459404e8e428cdff2754f857ecef7$export$fdbcda058e347265() {
    const hoveredDivEl = $2gZcA.get_hovered_contact_el();
    if (!hoveredDivEl) $7pCU8.throw_DOM_error($Iq2i6.Selectors.WA_CONTACT_ELEMENT_HOVERED_DIV, "WA_CONTACT_ELEMENT_HOVERED_DIV");
    const contactNameEl = $1oTL5.DOM.get_el($Iq2i6.Selectors.WA_CONTACT_NAME, hoveredDivEl);
    if (!contactNameEl) $7pCU8.throw_DOM_error($Iq2i6.Selectors.WA_CONTACT_NAME, "WA_CONTACT_NAME");
    const rawText = contactNameEl.textContent;
    // Explain: If contact name contains emojis - we must get rid of them.
    return $3y5Ap.clean_of_non_std_chars(rawText);
}
function $1aa459404e8e428cdff2754f857ecef7$export$837b429b1dbda476() {
    const hoveredDivEl = $2gZcA.get_hovered_contact_el();
    if (!hoveredDivEl) $7pCU8.throw_DOM_error($Iq2i6.Selectors.WA_CONTACT_ELEMENT_HOVERED_DIV, "WA_CONTACT_ELEMENT_HOVERED_DIV");
    const contactNameEl = $1oTL5.DOM.get_el($Iq2i6.Selectors.WA_CONTACT_NAME, hoveredDivEl);
    if (!contactNameEl) $7pCU8.throw_DOM_error($Iq2i6.Selectors.WA_CONTACT_NAME, "WA_CONTACT_NAME");
    return contactNameEl.getAttribute('title');
} //# sourceMappingURL=get-hovered-contact-name.js.map

});
parcelRequire.register("2gZcA", function(module, exports) {

$parcel$export(module.exports, "get_hovered_contact_el", () => $4ab74e32997221545faf2fb8d98356eb$export$1a0d6f88d60af7ec);

var $Iq2i6 = parcelRequire("Iq2i6");

var $1oTL5 = parcelRequire("1oTL5");
function $4ab74e32997221545faf2fb8d98356eb$export$1a0d6f88d60af7ec() {
    return $1oTL5.DOM.get_el($Iq2i6.Selectors.WA_CONTACT_ELEMENT_HOVERED_DIV);
} //# sourceMappingURL=get-hovered-contact-el.js.map

});

parcelRequire.register("3y5Ap", function(module, exports) {

$parcel$export(module.exports, "clean_of_non_std_chars", () => $74a2f8328988a4bf2d0f4811d632e070$export$f01206d2ecdfe82e);
function $74a2f8328988a4bf2d0f4811d632e070$export$f01206d2ecdfe82e(str) {
    // WARNING: Backslash is still being removed in this implementation.
    return str.replace(/[^\p{L}\p{N}\p{P}\p{Z}{^$=+±\\'|`\\~<>}]/gu, "").trim();
} //# sourceMappingURL=clean.js.map

});


parcelRequire.register("3C3AO", function(module, exports) {

$parcel$export(module.exports, "construct_zenMorning_contact_ctx_menu_item", () => $76bd469f728aec2e9c396644af306741$export$84d5f3467cf40e1b);

var $3h5SU = parcelRequire("3h5SU");

var $7IzVc = parcelRequire("7IzVc");

var $Iq2i6 = parcelRequire("Iq2i6");

var $6wA4v = parcelRequire("6wA4v");

var $3kKpl = parcelRequire("3kKpl");

var $13vOd = parcelRequire("13vOd");
function $76bd469f728aec2e9c396644af306741$export$84d5f3467cf40e1b(contactWithZenMorning) {
    const menuItemEl = $3kKpl.constructFakeCtxMenuItem([
        (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage(contactWithZenMorning ? "WA_contactCtxMenuItem_cancelZenMorning" : "WA_contactCtxMenuItem_zenMorning")
    ], ()=>{
        contactWithZenMorning ? $6wA4v.unsetZenMorning() : $6wA4v.setZenMorning();
        $13vOd.hide_WA_context_menu();
    });
    $3h5SU.set_el_attributes(menuItemEl, {
        id: $Iq2i6.Selectors.ZM_ZENMORNING_CONTACT_CTX_MENU_ITEM.substring(1)
    });
    return menuItemEl;
} //# sourceMappingURL=construct-zenmorning-contact-item.js.map

});

parcelRequire.register("XxiED", function(module, exports) {

$parcel$export(module.exports, "construct_visibilty_sheduler_ctx_menu_item", () => $1f8d38e676405ffb40b5cdf1080494c4$export$3444b2ae31ad37f7);

var $7IzVc = parcelRequire("7IzVc");

var $Iq2i6 = parcelRequire("Iq2i6");

var $3kKpl = parcelRequire("3kKpl");

var $1oTL5 = parcelRequire("1oTL5");

var $2f9nT = parcelRequire("2f9nT");
function $1f8d38e676405ffb40b5cdf1080494c4$export$3444b2ae31ad37f7() {
    const menuItemEl = $3kKpl.constructFakeCtxMenuItem([
        (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("WA_contactCtxMenuItem_visibiltySheduler")
    ], $1f8d38e676405ffb40b5cdf1080494c4$var$shedulerPopup);
    menuItemEl.id = $Iq2i6.Selectors.ZM_VISIBILITY_SHEDULER_CTX_MENU_ITEM.substring(1);
    return menuItemEl;
}
function $1f8d38e676405ffb40b5cdf1080494c4$var$shedulerPopup() {
    $2f9nT.set_el_style($1oTL5.DOM.get_el($Iq2i6.Selectors.ZM_VISIBILITY_SHEDULER_POPUP), {
        display: "initial"
    });
} //# sourceMappingURL=construct-visibility-sheduler-item.js.map

});


parcelRequire.register("7feap", function(module, exports) {

$parcel$export(module.exports, "isZenMorningTime", () => $ee117e069ab91a22c6070365076d0026$export$4f69d9ee62c4ff73);

var $tvVsZ = parcelRequire("tvVsZ");

var $Iq2i6 = parcelRequire("Iq2i6");

var $3zu8t = parcelRequire("3zu8t");
async function $ee117e069ab91a22c6070365076d0026$export$4f69d9ee62c4ff73() {
    const lastActivityDate = await $3zu8t.get_extn_storage_item_value($Iq2i6.StateItemNames.LAST_ACTIVITY_DATE);
    const today = (/*@__PURE__*/$parcel$interopDefault($tvVsZ))();
    const isMorning = today.hour() >= $Iq2i6.ZEN_MORNING_HOUR;
    if (!lastActivityDate) return isMorning;
    const [normalizedTodayDate, normalizedLastDate] = [
        today,
        (/*@__PURE__*/$parcel$interopDefault($tvVsZ))(lastActivityDate)
    ].map((date)=>{
        date.set('hour', $Iq2i6.ZEN_MORNING_HOUR);
        date.set('minute', 0);
        date.set('second', 0);
        date.set('millisecond', 0);
        return date;
    });
    return isMorning && normalizedTodayDate.isAfter(normalizedLastDate);
} //# sourceMappingURL=isZenMorningTime.js.map

});



parcelRequire.register("6ztMt", function(module, exports) {

var $1oTL5 = parcelRequire("1oTL5");

var $1NYDb = parcelRequire("1NYDb");

var $6W0Bp = parcelRequire("6W0Bp");

var $Iq2i6 = parcelRequire("Iq2i6");

var $43WeT = parcelRequire("43WeT");
// 1. Sets an interval timer to attach Zen mode UI in case of:
$d7f1a4cf3de2ba79384e3686e0075a1c$var$keep_Zen_mode_UI_attached();
function $d7f1a4cf3de2ba79384e3686e0075a1c$var$keep_Zen_mode_UI_attached() {
    setInterval($d7f1a4cf3de2ba79384e3686e0075a1c$var$attach_Zen_mode_UI, $43WeT.TIME.TENTH_OF_A_SECOND);
    $1NYDb.devprint("STATUS: Waiting for user to log in and open any chat.");
}
async function $d7f1a4cf3de2ba79384e3686e0075a1c$var$attach_Zen_mode_UI() {
    // 1.1. It is not already attached.
    // Explain: If the icon is already present - exit.
    if ($1oTL5.DOM.get_el($Iq2i6.Selectors.ZM_TOGGLE_BUTTON)) return;
    // 1.2. User navbar el is present (meaning WA has loaded and User clicked into any chat).
    // Explain: If WA user navbar not present - means either User is not yet logged in;
    // or not not a particular chat. In both cases - exit.
    const leftHeaderButtonsEl = $1oTL5.DOM.get_el($Iq2i6.Selectors.WA_LEFT_HEADER_BUTTONS);
    if (!leftHeaderButtonsEl) return;
    // 2. Attaches Zen mode UI to the page.
    // 2.1. Constructs the UI.
    const [debugVersionInfoEl, ZenModeBtnEl, releaseNotesAreaEl, visibilityShedulerAreaEl, offlineModeInfoEl] = $6W0Bp.construct_Zen_mode_UI();
    leftHeaderButtonsEl.prepend(ZenModeBtnEl);
    leftHeaderButtonsEl.prepend(offlineModeInfoEl);
    leftHeaderButtonsEl.prepend(debugVersionInfoEl);
    const permanentZM_elsAreNotYetAttached = $1oTL5.DOM.get_el($Iq2i6.Selectors.ZM_RELEASE_NOTES_AREA) === null;
    if (permanentZM_elsAreNotYetAttached) document.body.appendChild(releaseNotesAreaEl);
    const permanentZM_visibilityShedulerAreaElNotYetAttached = $1oTL5.DOM.get_el($Iq2i6.Selectors.ZM_VISIBILITY_SHEDULER_POPUP) === null;
    if (permanentZM_visibilityShedulerAreaElNotYetAttached) document.body.appendChild(visibilityShedulerAreaEl);
    $1NYDb.devprint("STATUS: UI attached.");
} //# sourceMappingURL=attach-zen-mode-ui.js.map

});
parcelRequire.register("6W0Bp", function(module, exports) {

$parcel$export(module.exports, "construct_Zen_mode_UI", () => $e3e2234c83188c4f12ca1f64f4530c1c$export$9d3548fe92c9a0ca);

var $1NYDb = parcelRequire("1NYDb");

var $1IC7e = parcelRequire("1IC7e");

var $2cO91 = parcelRequire("2cO91");

var $y7N5s = parcelRequire("y7N5s");

var $4vgyo = parcelRequire("4vgyo");

var $4dZYf = parcelRequire("4dZYf");
function $e3e2234c83188c4f12ca1f64f4530c1c$export$9d3548fe92c9a0ca() {
    const ZMMenuButtonEl = $1IC7e.constructZMMenuButton();
    const releaseNotesAreaEl = $2cO91.construct_release_notes_area();
    const visibilityShedulerAreaEl = $y7N5s.constructVisibilityShedulerPopup();
    const debugVersionInfoEl = $4vgyo.constructDebugVersionInfo();
    const offlineModeInfoEl = $4dZYf.buildOfflineModeIcon();
    $1NYDb.devprint("STATUS: UI constructed.");
    return [
        debugVersionInfoEl,
        ZMMenuButtonEl,
        releaseNotesAreaEl,
        visibilityShedulerAreaEl,
        offlineModeInfoEl
    ];
} //# sourceMappingURL=construct-zen-mode-ui.js.map

});
parcelRequire.register("1IC7e", function(module, exports) {

$parcel$export(module.exports, "constructZMMenuButton", () => $38801c26dcc44152b58269432063f0b9$export$3c817dd369dac417);

var $3h5SU = parcelRequire("3h5SU");

var $3zu8t = parcelRequire("3zu8t");

var $Iq2i6 = parcelRequire("Iq2i6");

var $3z0NR = parcelRequire("3z0NR");

var $2f9nT = parcelRequire("2f9nT");

var $7IzVc = parcelRequire("7IzVc");
function $38801c26dcc44152b58269432063f0b9$export$3c817dd369dac417() {
    const ZenModeBtnEl = document.createElement("div");
    $3h5SU.set_el_attributes(ZenModeBtnEl, {
        id: $Iq2i6.Selectors.ZM_TOGGLE_BUTTON.substring(1),
        class: 'ZenModeLogo'
    });
    $2f9nT.set_el_style(ZenModeBtnEl, {
        "background-image": `url('${(/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.getURL('assets/logo/logo.png')}')`
    });
    const toggleZMMenuByClick = (e)=>{
        e.stopPropagation();
        if ($3z0NR.default.isVisible) $3z0NR.default.isVisible = false;
        else $3z0NR.default.tieToAnchor(ZenModeBtnEl.getBoundingClientRect());
    };
    // .addEventListener("click", toggle_Zen_mode);
    ZenModeBtnEl.addEventListener("click", toggleZMMenuByClick);
    ZenModeBtnEl.addEventListener("contextmenu", (e)=>{
        e.preventDefault();
        toggleZMMenuByClick(e);
    });
    // Explain: Create or not badgeEl based on State.
    $3zu8t.get_extn_storage_item_value($Iq2i6.StateItemNames.RELEASE_NOTES_VIEWED).then((isReleaseNotesViewed)=>{
        if (!isReleaseNotesViewed) {
            const badgeEl = document.createElement("span");
            $3h5SU.set_el_attributes(badgeEl, {
                id: $Iq2i6.Selectors.ZM_BADGE.substring(1)
            });
            ZenModeBtnEl.appendChild(badgeEl);
        }
    });
    return ZenModeBtnEl;
} //# sourceMappingURL=construct-zm-toggle-btn.js.map

});
parcelRequire.register("3z0NR", function(module, exports) {

$parcel$export(module.exports, "debugModeItems", () => $75202baef46dada787ba48480f81b3f6$export$f75998ff82209d09);
$parcel$export(module.exports, "debugModeActions", () => $75202baef46dada787ba48480f81b3f6$export$470347692ff4b4e1);
$parcel$export(module.exports, "default", () => $75202baef46dada787ba48480f81b3f6$export$9099ad97b570f7c);

var $7pMZw = parcelRequire("7pMZw");

var $7IzVc = parcelRequire("7IzVc");

var $6Ljqg = parcelRequire("6Ljqg");

var $1oTL5 = parcelRequire("1oTL5");

var $Iq2i6 = parcelRequire("Iq2i6");

var $2f9nT = parcelRequire("2f9nT");

var $1D9RT = parcelRequire("1D9RT");

var $3zu8t = parcelRequire("3zu8t");

var $3onxL = parcelRequire("3onxL");

var $4gcVu = parcelRequire("4gcVu");

var $2YKaR = parcelRequire("2YKaR");

var $2tC57 = parcelRequire("2tC57");

var $4dZYf = parcelRequire("4dZYf");

var $5UHyq = parcelRequire("5UHyq");
let $75202baef46dada787ba48480f81b3f6$var$ZMMenuItems = [
    {
        action: "unreadChats",
        domNode: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_ctxMenuItem_unreadChats"),
        makeAction: async ()=>$4gcVu.getUnreadChats($3onxL.presentUnreadChats)
    },
    {
        action: "releaseNotes",
        domNode: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_ctxMenuItem_releaseNotes"),
        makeAction: ()=>{
            const releaseNotesAreaEl = $1oTL5.DOM.get_el($Iq2i6.Selectors.ZM_RELEASE_NOTES_AREA);
            $2f9nT.set_el_style(releaseNotesAreaEl, {
                display: "initial"
            });
            $1D9RT.remove_badge_el();
            $3zu8t.set_extn_storage_item({
                [$Iq2i6.StateItemNames.RELEASE_NOTES_VIEWED]: true
            });
        }
    },
    {
        action: "smartMute",
        domNode: $6Ljqg.construct_smartMute_menu_item(),
        makeAction: $6Ljqg.toggleSmartMute
    },
    {
        action: "showPinnedChatsStatus",
        domNode: $5UHyq.buildPinnedChatsStatusMenuItem(),
        makeAction: $5UHyq.togglePinnedChatsStatusMode
    },
    {
        action: "offlineMode",
        domNode: $4dZYf.buildOfflineModeMenuItem(),
        makeAction: $4dZYf.toggleOfflineMode
    },
    {
        action: "debugMode",
        domNode: $2tC57.constructDebugModeMenuItem(),
        makeAction: $2tC57.toggleDebugMode
    },
    {
        action: "sendFeedback",
        domNode: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_ctxMenuItem_contactUs"),
        makeAction: ()=>{
            const subject = "Zen Mode extension feedback";
            window.open(`${$Iq2i6.URLS.FEEDBACK_EMAIL}?subject=${subject}`);
        }
    }, 
];
const $75202baef46dada787ba48480f81b3f6$export$f75998ff82209d09 = [
    {
        action: "getLog",
        domNode: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_ctxMenuItem_debugModeCopyToClipboard"),
        makeAction: async ()=>{
            const log = await $2YKaR.logger.getLog();
            await navigator.clipboard.writeText(JSON.stringify(log));
            window.alert("Copied to clipboard");
        }
    },
    {
        action: "clearLog",
        domNode: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_ctxMenuItem_debugModeClearLog"),
        makeAction: async ()=>{
            await $2YKaR.logger.clearLog();
            window.alert("Extension log is cleared");
        }
    }, 
];
$75202baef46dada787ba48480f81b3f6$var$ZMMenuItems = [
    ...$75202baef46dada787ba48480f81b3f6$var$ZMMenuItems
];
const $75202baef46dada787ba48480f81b3f6$export$470347692ff4b4e1 = $75202baef46dada787ba48480f81b3f6$export$f75998ff82209d09.map((it)=>it.action
);
class $75202baef46dada787ba48480f81b3f6$var$ZMCtxMenu extends $7pMZw.FakeCtxMenu {
    constructor(menuItems){
        super("ZM", menuItems);
        /**
         * Used to change chat by item click.
         */ this.handleItemClick = (e)=>{
            const { item: item  } = e.detail;
            if (item.makeAction) item.makeAction();
            this.isVisible = false;
        };
        // Initial render
        document.body.append(this._node);
        this._setEventListeners();
    }
    addItems(newItems) {
        this._removeEventListeners();
        super.addItems(newItems);
        this._setEventListeners();
    }
    removeItems(actions) {
        this._removeEventListeners();
        super.removeItems(actions);
        this._setEventListeners();
    }
    _removeEventListeners() {
        if (this._node) {
            // @ts-ignore
            this._node.removeEventListener("itemClick", this.handleItemClick);
            // @ts-ignore
            this._node.removeEventListener("clickToEmptySpace", ()=>this.isVisible = false
            );
        }
    }
    _setEventListeners() {
        // @ts-ignore
        this._node.addEventListener("itemClick", this.handleItemClick);
        // @ts-ignore
        this._node.addEventListener("clickToEmptySpace", ()=>this.isVisible = false
        );
    }
}
var $75202baef46dada787ba48480f81b3f6$export$9099ad97b570f7c = new $75202baef46dada787ba48480f81b3f6$var$ZMCtxMenu($75202baef46dada787ba48480f81b3f6$var$ZMMenuItems);

});
parcelRequire.register("7pMZw", function(module, exports) {

$parcel$export(module.exports, "FakeCtxMenu", () => $f3aa5d494a12b3ebd346e85953f970fa$export$6e9e6d4e891de24);

var $7pCU8 = parcelRequire("7pCU8");

var $3kKpl = parcelRequire("3kKpl");
class $f3aa5d494a12b3ebd346e85953f970fa$export$6e9e6d4e891de24 {
    constructor(type, items){
        this._node = null;
        this._isVisible = false;
        /**
         * Fired by click. Used to handle menu item action.
         */ this.handleClick = (e)=>{
            // @ts-ignore
            const targetItem = e.target.closest("[data-action]");
            if (!targetItem) return;
            let item = this.items.find((item1)=>item1.action === targetItem.dataset.action || item1.children && item1.children.find((item2)=>item2.action === targetItem.dataset.action
                )
            );
            // TODO: implement
            if (item === null || item === void 0 ? void 0 : item.children) item = item.children.find((item1)=>item1.action === targetItem.dataset.action
            );
            if (!item) return $7pCU8.process_error(new Error("Ctx menu item not found with action:" + targetItem.dataset.action));
            // Continue if there are context menu item and chat.
            e.stopPropagation();
            targetItem.dispatchEvent(new CustomEvent("itemClick", {
                bubbles: true,
                detail: {
                    item: item
                }
            }));
        };
        /**
         * Used to close by click to empty space (exclude menu node).
         */ this.handleClickToEmptySpace = (e)=>{
            if (!this._node || !this.isVisible) return;
            if (this._node.contains(e.target)) return; // Click inside ctx menu
            // Any click outside ctx menu
            this._node.dispatchEvent(new CustomEvent("clickToEmptySpace", {
                bubbles: true
            }));
        };
        this._type = type;
        this.items = items;
        // Render node
        this._node = this._render();
        // Set listeners
        this._node.addEventListener("click", this.handleClick);
        window.addEventListener("click", this.handleClickToEmptySpace);
        window.addEventListener("contextmenu", this.handleClickToEmptySpace, true);
    }
    get node() {
        return this._node;
    }
    get isVisible() {
        return this._isVisible;
    }
    set isVisible(value) {
        if (this._isVisible === value) return;
        // Set state
        this._isVisible = value;
        // Render
        if (!this._node) return;
        if (this._isVisible) {
            this._node.style.animationDuration = ".2s";
            this._node.style.animationName = "showFakeCtxMenu";
        } else {
            this._node.style.animationDuration = ".1s";
            this._node.style.animationName = "hideFakeCtxMenu";
        }
    }
    tieToAnchor(anchorCoords) {
        if (!this._node) return $7pCU8.process_error(new Error("node is required" + this._node));
        if (!document.body.contains(this._node)) document.body.append(this._node);
        // Set state
        this.isVisible = true;
        // Set menu coords depending anchor coords
        const direction = document.documentElement.getAttribute("dir");
        const left = anchorCoords.left + anchorCoords.width / 2;
        let xOrigin = "left";
        if (direction === "RTL" && left + this._node.clientWidth > window.innerWidth) {
            xOrigin = "right";
            this._node.style.left = left - this._node.clientWidth + "px";
        } else this._node.style.left = left + "px";
        if (window.innerHeight > anchorCoords.bottom + this._node.clientHeight) {
            this._node.style.transformOrigin = `${xOrigin} top`;
            this._node.style.top = anchorCoords.bottom + "px";
            this._node.style.bottom = ""; // Clear memory
        } else {
            this._node.style.transformOrigin = `${xOrigin} bottom`;
            this._node.style.bottom = window.innerHeight - anchorCoords.top + "px";
            this._node.style.top = ""; // Clear memory
        }
    }
    _render() {
        if (!this._node) {
            const itemLis = this.items.map((item)=>$3kKpl.constructFakeCtxMenuItem([
                    item.domNode
                ], item.action, item.children)
            );
            const div = document.createElement("DIV");
            div.className = "o--vV _1qAEq fakeCtxMenu";
            div.setAttribute("data-menu-type", this._type);
            div.tabIndex = -1;
            div.style.opacity = "0";
            div.style.transform = "scale(0)";
            div.innerHTML = `<ul></ul>`;
            // Items appending
            div.children[0].append(...itemLis);
            return div;
        }
        return this._node;
    }
    _domUpdate() {
        var _a, _b;
        (_a = this._node) === null || _a === void 0 || _a.removeEventListener("click", this.handleClick);
        // window.removeEventListener("click", this.handleClickToEmptySpace);
        // window.removeEventListener("contextmenu", this.handleClickToEmptySpace, true);
        (_b = this._node) === null || _b === void 0 || _b.remove();
        this._node = null;
        this._node = this._render();
        this._node.addEventListener("click", this.handleClick);
        // window.addEventListener("click", this.handleClickToEmptySpace);
        // window.addEventListener("contextmenu", this.handleClickToEmptySpace, true);
        document.body.append(this._node);
    }
    addItems(newItems) {
        this.items = [
            ...this.items,
            ...newItems
        ];
        this._domUpdate();
    }
    removeItems(actions) {
        const actionsSet = new Set(actions);
        this.items = this.items.filter((it)=>!actionsSet.has(it.action)
        );
        this._domUpdate();
    }
} //# sourceMappingURL=FakeCtxMenu.js.map

});

parcelRequire.register("6Ljqg", function(module, exports) {

$parcel$export(module.exports, "toggleSmartMute", () => $de36fb89f2a691306cda114c58b435a9$export$46ab1971f536e9a1);
$parcel$export(module.exports, "construct_smartMute_menu_item", () => $de36fb89f2a691306cda114c58b435a9$export$24a419c305ff9b95);
$parcel$export(module.exports, "setSmartMuteStatus", () => $de36fb89f2a691306cda114c58b435a9$export$2cbd2828d635e332);
$parcel$export(module.exports, "getSmartMuteStatus", () => $de36fb89f2a691306cda114c58b435a9$export$a5f1a91f61ec1546);

var $7IzVc = parcelRequire("7IzVc");

var $3zu8t = parcelRequire("3zu8t");

var $Iq2i6 = parcelRequire("Iq2i6");

var $4gcVu = parcelRequire("4gcVu");

var $1oTL5 = parcelRequire("1oTL5");

var $3h5SU = parcelRequire("3h5SU");
const $de36fb89f2a691306cda114c58b435a9$var$SWITCH_ON = `\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n        <path d="M17 7H7a5 5 0 0 0-5 5 5 5 0 0 0 5 5h10a5 5 0 0 0 5-5 5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3 3 3 0 0 1-3 3Z"/>\n    </svg>\n    `;
const $de36fb89f2a691306cda114c58b435a9$var$SWITCH_OFF = `\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n        <path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>\n    </svg>\n`;
function $de36fb89f2a691306cda114c58b435a9$export$24a419c305ff9b95() {
    const text = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_ctxMenuItem_smartMute_ON");
    const menuItem = document.createElement('DIV');
    $3h5SU.set_el_attributes(menuItem, {
        id: $Iq2i6.Selectors.ZM_CTX_MENU_ITEM_SMARTMUTE.substring(1),
        title: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_ctxMenuItem_smartMute_desc"),
        class: 'ZenMode__contextMenuItem__withIcon'
    });
    const textEl = $1oTL5.DOM.create_el({
        tag: 'span',
        attributes: {
            id: $Iq2i6.Selectors.ZM_SMARTMUTE_TEXT.substring(1)
        },
        text: text
    });
    const soundIconEl = $1oTL5.DOM.create_el({
        tag: 'i',
        attributes: {
            id: $Iq2i6.Selectors.ZM_SMARTMUTE_SOUNDICON.substring(1)
        },
        html: $de36fb89f2a691306cda114c58b435a9$var$SWITCH_ON
    });
    menuItem.append(textEl, soundIconEl);
    return menuItem;
}
async function $de36fb89f2a691306cda114c58b435a9$export$46ab1971f536e9a1() {
    // Set state
    const smartMuteStatus = await $de36fb89f2a691306cda114c58b435a9$export$a5f1a91f61ec1546();
    await $de36fb89f2a691306cda114c58b435a9$export$2cbd2828d635e332(!smartMuteStatus);
}
async function $de36fb89f2a691306cda114c58b435a9$export$2cbd2828d635e332(smartMuteStatus) {
    // Save to storage
    await $3zu8t.set_extn_storage_item({
        [$Iq2i6.StateItemNames.SMART_MUTE_STATUS]: smartMuteStatus
    });
    // Render changes
    if (smartMuteStatus) $4gcVu.turnOffChatsSounds();
    else $4gcVu.turnOnChatsSounds();
    const smartMuteItem = $1oTL5.DOM.get_el($Iq2i6.Selectors.ZM_CTX_MENU_ITEM_SMARTMUTE);
    if (smartMuteItem) {
        const smartMuteText = $1oTL5.DOM.get_el($Iq2i6.Selectors.ZM_SMARTMUTE_TEXT, smartMuteItem);
        const smartMuteIcon = $1oTL5.DOM.get_el($Iq2i6.Selectors.ZM_SMARTMUTE_SOUNDICON, smartMuteItem);
        if (smartMuteText && smartMuteIcon) {
            smartMuteText.textContent = smartMuteStatus ? (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_ctxMenuItem_smartMute_OFF") : (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_ctxMenuItem_smartMute_ON");
            smartMuteIcon.innerHTML = smartMuteStatus ? $de36fb89f2a691306cda114c58b435a9$var$SWITCH_ON : $de36fb89f2a691306cda114c58b435a9$var$SWITCH_OFF;
        }
        smartMuteItem.style.color = smartMuteStatus ? 'var(--active-tab-marker)' : '';
    }
}
async function $de36fb89f2a691306cda114c58b435a9$export$a5f1a91f61ec1546() {
    return Boolean(await $3zu8t.get_extn_storage_item_value($Iq2i6.StateItemNames.SMART_MUTE_STATUS));
} //# sourceMappingURL=SmartMute.js.map

});

parcelRequire.register("1D9RT", function(module, exports) {

$parcel$export(module.exports, "remove_badge_el", () => $359bf6f2dd762791703a862cf726c71b$export$d3e599ef74732fc);

var $1oTL5 = parcelRequire("1oTL5");

var $Iq2i6 = parcelRequire("Iq2i6");
function $359bf6f2dd762791703a862cf726c71b$export$d3e599ef74732fc() {
    $1oTL5.DOM.remove_el($Iq2i6.Selectors.ZM_BADGE);
} //# sourceMappingURL=remove-ver-num-badge.js.map

});

parcelRequire.register("3onxL", function(module, exports) {

$parcel$export(module.exports, "presentUnreadChats", () => $6f7d97e27c02f17ba21cc2cb6fa8872a$export$152a80560f9a3391);

var $2UhIp = parcelRequire("2UhIp");

var $6ZcfW = parcelRequire("6ZcfW");

var $4gcVu = parcelRequire("4gcVu");

var $7IzVc = parcelRequire("7IzVc");

var $6U6TO = parcelRequire("6U6TO");

var $3HH7x = parcelRequire("3HH7x");

var $liFRs = parcelRequire("liFRs");
const $6f7d97e27c02f17ba21cc2cb6fa8872a$var$unreadChatCtxMenu = new $liFRs.DrawerChatCtxMenu([
    {
        action: "unread",
        domNode: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("WA_contactCtxMenuItem_mark_unread"),
        chatChange: (chat)=>{
            $4gcVu.markChatUnread(chat.id);
        }
    }, 
]);
function $6f7d97e27c02f17ba21cc2cb6fa8872a$export$152a80560f9a3391(chats) {
    const drawer = $2UhIp.constructBaseLeftDrawerItemList((/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_navigation_unreadChats"), chats, ()=>{
    }, (chat)=>{
        if (!chat.archive) return $6ZcfW.constructChatItem(chat, ()=>{
            $4gcVu.openChat(chat);
        }, (e)=>{
            var _a;
            e.stopPropagation();
            e.preventDefault();
            if (((_a = $6f7d97e27c02f17ba21cc2cb6fa8872a$var$unreadChatCtxMenu.chat) === null || _a === void 0 ? void 0 : _a.id) === chat.id) $6f7d97e27c02f17ba21cc2cb6fa8872a$var$unreadChatCtxMenu.detachChat(chat);
            else $6f7d97e27c02f17ba21cc2cb6fa8872a$var$unreadChatCtxMenu.attachToChat(chat, e.target.getBoundingClientRect());
        }).htmlElement;
        else return null;
    }, ()=>{
    });
    $6U6TO.WWEvents.on($3HH7x.InternalEvent.CHAT_CHANGED_UNREAD_COUNT, (chat)=>{
        const chatFromDrawerIndex = chats.findIndex((c)=>c.id === chat.id
        );
        if (chatFromDrawerIndex !== -1) {
            chats.splice(chatFromDrawerIndex, 1, chat);
            drawer.clear();
            drawer.set(chats);
        } else {
            chats.push(chat);
            drawer.add(chat);
        }
    });
    drawer.open();
    return drawer;
} //# sourceMappingURL=UnreadChats.js.map

});
parcelRequire.register("2UhIp", function(module, exports) {

$parcel$export(module.exports, "constructBaseLeftDrawerItemList", () => $5f8ad4567f6a4df97edc0a243c9eafbd$export$2e6da05f2d96e5f0);

var $1oTL5 = parcelRequire("1oTL5");

var $1NYDb = parcelRequire("1NYDb");
const $5f8ad4567f6a4df97edc0a243c9eafbd$var$DRAWER_TITLE_ID = 'fakeElLikeWAArchiveTITLE';
const $5f8ad4567f6a4df97edc0a243c9eafbd$var$DRAWER_ITEMS_CONTAINER_ID = 'CHATS_CONTAINER_ID';
const $5f8ad4567f6a4df97edc0a243c9eafbd$var$DRAWER_CONTAINER_HEIGHT_PX = 72;
const $5f8ad4567f6a4df97edc0a243c9eafbd$var$DRAWER_UP_BUTTON_ID = 'backButton';
const $5f8ad4567f6a4df97edc0a243c9eafbd$var$DRAWER_EMPTY_PLUG_ID = 'emptyPlugId';
function $5f8ad4567f6a4df97edc0a243c9eafbd$var$createEmptyPlug(subTitle) {
    document.body.insertAdjacentHTML('afterbegin', `\n  <div id="${$5f8ad4567f6a4df97edc0a243c9eafbd$var$DRAWER_EMPTY_PLUG_ID}" class="cm280p3y p357zi0d ggj6brxn f8m0rgwh gndfcl4n ac2vgrno ppled2lx gq7nj7y3 td5bf8pq eynyaxvo l3k7h4x6 hp667wtd qfejxiq4">\n      <div class="p357zi0d tvf2evcx oq44ahr5 lb5m6g5c gndfcl4n ac2vgrno f6essjlf j19d4s4u pcx1034m r2u2pyhj myzbk5ck f2yrvmhs g9p5wyxn i0tg5vk9 aoogvgrq o2zu3hjb">\n         <span data-testid="empty-archived" data-icon="empty-archived" class="">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" width="90" height="90">\n               <path fill="currentColor" d="M71.109 24.113l-4.288-5.222c-.594-.934-1.825-1.528-3.396-1.528h-36.85a5.083 5.083 0 0 0-3.693 1.528l-3.991 5.222c-.934 1.231-1.528 2.462-1.528 3.991v38.377a6.16 6.16 0 0 0 6.156 6.156h42.962a6.16 6.16 0 0 0 6.156-6.156V28.104c0-1.529-.595-2.76-1.528-3.991zM45.042 61.896L28.146 45h10.741v-6.156h12.269V45h10.741L45.042 61.896zM23.859 23.519l2.462-3.057H63.17l2.759 3.057h-42.07z"></path>\n            </svg>\n         </span>\n      </div>\n      <div class="_2Vemb">${subTitle}</div>\n   </div>\n`);
    return document.getElementById($5f8ad4567f6a4df97edc0a243c9eafbd$var$DRAWER_EMPTY_PLUG_ID);
}
function $5f8ad4567f6a4df97edc0a243c9eafbd$export$2e6da05f2d96e5f0(title, items, onBackButtonClick, constructItemEl, onClickOnItemEl, emptyPlugSubTitle = '') {
    const leftDrawerContainer = (()=>{
        const element = $1oTL5.DOM.get_el('.ldL67._2i3T7');
        if (!element) throw Error('WWALeftDrawerContainer not presented');
        return element;
    })();
    function constructRootDrawer() {
        const drawerEl = document.createElement('span');
        drawerEl.className = 'vXLk5';
        drawerEl.innerHTML = `\n        <div class="_1N4rE" tabindex="-1" style="height: 100%; transform: translateX(0%);">\n          <span class="_2J8hu">\n             <div class="ihvf49ua p357zi0d f8m0rgwh ppled2lx tkdu00h0 gfz4du6o r7fjleex jv8uhy2r lhggkp7q qq0sjtgm ln8gz9je tm2tP copyable-area">\n                <header class="_1PGhQ">\n                   <div class="_1Yy4I" data-animate-drawer-title="true">\n                      <div class="_2-1k7">\n                         <button id='${$5f8ad4567f6a4df97edc0a243c9eafbd$var$DRAWER_UP_BUTTON_ID}' class="_18eKe" aria-label="Назад">\n                            <span data-testid="back" data-icon="back" class="">\n                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">\n                                  <path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z"></path>\n                               </svg>\n                            </span>\n                         </button>\n                      </div>\n                      <div id="${$5f8ad4567f6a4df97edc0a243c9eafbd$var$DRAWER_TITLE_ID}" class="_1FrBz"></div>\n                   </div>\n                </header>\n                <div id="${$5f8ad4567f6a4df97edc0a243c9eafbd$var$DRAWER_ITEMS_CONTAINER_ID}" class="_3Bc7H KPJpj"></div>\n             </div>\n             <div hidden="" style="display: none;"></div>\n          </span>\n        </div>\n        <div hidden="" style="display: none;"></div>\n    `;
        leftDrawerContainer.insertAdjacentElement('beforeend', drawerEl);
        drawerEl.remove();
        const itemsContainerEl = $1oTL5.DOM.get_el('#' + $5f8ad4567f6a4df97edc0a243c9eafbd$var$DRAWER_ITEMS_CONTAINER_ID, drawerEl);
        return {
            backButtonEl: $1oTL5.DOM.get_el('#' + $5f8ad4567f6a4df97edc0a243c9eafbd$var$DRAWER_UP_BUTTON_ID, drawerEl),
            itemsContainerEl: itemsContainerEl,
            emptyPlugContainerEl: itemsContainerEl,
            drawerEl: drawerEl,
            titleEl: $1oTL5.DOM.get_el('#' + $5f8ad4567f6a4df97edc0a243c9eafbd$var$DRAWER_TITLE_ID, drawerEl)
        };
    }
    const { drawerEl: drawerEl , titleEl: titleEl , backButtonEl: backButtonEl , itemsContainerEl: itemsContainerEl , emptyPlugContainerEl: emptyPlugContainerEl  } = constructRootDrawer();
    const itemElToItem = new Map();
    let currentEmptyPlugEl;
    function setEmptyPlugEl(element) {
        if (element) {
            if (currentEmptyPlugEl) currentEmptyPlugEl.remove();
            currentEmptyPlugEl = emptyPlugContainerEl.insertAdjacentElement('afterbegin', element);
        } else if (currentEmptyPlugEl) {
            currentEmptyPlugEl.remove();
            currentEmptyPlugEl = null;
        }
    }
    function addAndShowDrawer() {
        leftDrawerContainer.insertAdjacentElement('beforeend', drawerEl);
    }
    function releaseDrawer() {
        drawerEl.innerHTML = '';
        drawerEl.remove();
        itemElToItem.clear();
    }
    function bindItem(item) {
        const itemEl = constructItemEl(item);
        if (itemEl) {
            itemEl.onclick = (event)=>{
                onClickOnItemEl(event, item);
            };
            itemsContainerEl.appendChild(itemEl);
            itemElToItem.set(itemEl, item);
        }
    }
    function clearItem(item) {
        for (const e of itemElToItem.entries())if (item === e[1]) {
            const itemEl = e[0];
            itemElToItem.delete(itemEl);
            itemEl.remove();
            return;
        }
    }
    function clearItems() {
        itemsContainerEl.innerHTML = '';
        itemElToItem.clear();
    }
    function onItemsChange() {
        $1NYDb.devprint('itemElToItem.size > 0', itemElToItem.size > 0);
        $1NYDb.devprint('itemElToItem', itemElToItem);
        if (itemElToItem.size > 0) setEmptyPlugEl(null);
        else setEmptyPlugEl($5f8ad4567f6a4df97edc0a243c9eafbd$var$createEmptyPlug(emptyPlugSubTitle));
    }
    titleEl.textContent = title;
    backButtonEl.addEventListener('click', (event)=>{
        onBackButtonClick(event);
        releaseDrawer();
    });
    for (const item of items)bindItem(item);
    onItemsChange();
    return {
        set: (item1)=>{
            clearItems();
            item1.forEach(bindItem);
            onItemsChange();
        },
        add: (item1)=>{
            bindItem(item1);
            onItemsChange();
        },
        remove: (item1)=>{
            clearItem(item1);
            onItemsChange();
        },
        clear: ()=>{
            clearItems();
            onItemsChange();
        },
        close: releaseDrawer,
        open: addAndShowDrawer
    };
} //# sourceMappingURL=LeftDrawerItemList.js.map

});

parcelRequire.register("6ZcfW", function(module, exports) {

$parcel$export(module.exports, "constructChatItem", () => $e592a3aeccb24bbc295a58c8a6d032f0$export$3ba16c747acddb25);

var $7IzVc = parcelRequire("7IzVc");

var $4gcVu = parcelRequire("4gcVu");
const $e592a3aeccb24bbc295a58c8a6d032f0$var$CHAT_ID = 'fake-chat-container';
const $e592a3aeccb24bbc295a58c8a6d032f0$var$PROFILE_PIC_ID = 'profile-pic';
const $e592a3aeccb24bbc295a58c8a6d032f0$var$ARROW_BUTTON_ID = 'fake-arrow-button';
const $e592a3aeccb24bbc295a58c8a6d032f0$var$PROFILE_PIC = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.getURL("assets/whatsapp/profile.svg");
const $e592a3aeccb24bbc295a58c8a6d032f0$var$GROUP_PIC = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.getURL("assets/whatsapp/group.svg");
function $e592a3aeccb24bbc295a58c8a6d032f0$export$3ba16c747acddb25(chat, onClick, onArrow, tags = []) {
    const pic = chat.isGroup ? $e592a3aeccb24bbc295a58c8a6d032f0$var$GROUP_PIC : $e592a3aeccb24bbc295a58c8a6d032f0$var$PROFILE_PIC;
    const chatTitle = `\n  <span dir="auto" title="${chat.name}" class="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr i0jNr">\n    ${chat.title}\n  </span>\n  `;
    const arrowHTML = onArrow ? `\n  <button id="${$e592a3aeccb24bbc295a58c8a6d032f0$var$ARROW_BUTTON_ID}" class="l7jjieqr qg8w82as jdwybkuq qnz2jpws s4k44ver fewfhwl7" aria-label="Open the chat context menu" aria-hidden="true" tabindex="0" style="width: 20px; opacity: 1;" pointerevents="none">\n    <span data-testid="down" data-icon="down" class="">\n        <svg viewBox="0 0 19 20" width="19" height="20" class="">\n          <path fill="currentColor" d="m3.8 6.7 5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"></path>\n        </svg>\n    </span>\n  </button>\n  ` : '';
    const tagsHTML = tags.map((value)=>`\n  <span class="_1pJ9J _3f7yK">${value}</span>`
    ).join('');
    const unreaderHTML = chat.hasUnread || chat.unreadCount === -1 ? `\n  <div class="_1pJ9J">\n    <span class="l7jjieqr cfzgl7ar ei5e7seu h0viaqh7 tpmajp1w c0uhu3dl riy2oczp dsh4tgtl sy6s5v3r gz7w46tb lyutrhe2 qfejxiq4 fewfhwl7 ovhn1urg ap18qm3b ikwl5qvt j90th5db aumms1qt" aria-label="">\n    ${chat.unreadCount > 0 ? chat.unreadCount : ''}\n    </span>\n  </div>\n  ` : '';
    const previewHTML = chat.previewMessage ? `\n  <span class="Hy9nV" title="${chat.previewMessage}">\n    <span dir="auto" class="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr i0jNr">\n      ${chat.previewMessage}\n    </span>\n  </span>\n  ` : '';
    const div = document.createElement('div');
    div.id = $e592a3aeccb24bbc295a58c8a6d032f0$var$CHAT_ID;
    div.innerHTML = `\n  <div class="_3m_Xw" style="z-index: 0; transition: none 0s ease 0s; height: 72px; transform: translateY(0px);">\n    <div tabindex="-1" aria-selected="false" role="row">\n      <div data-testid="cell-frame-container" class="_2nY6U vq6sj _3C4Vf">\n        <div class="_2EU3r">\n           <div class="HONz8">\n            <div class="_3GlyB" style="height: 49px; width: 49px;">\n              <img id="${$e592a3aeccb24bbc295a58c8a6d032f0$var$PROFILE_PIC_ID}" src="${pic}" alt="" draggable="false" class="_8hzr9 M0JmA i0jNr" style="visibility: visible;">\n            </div>\n           </div>\n        </div>\n        <div class="_3OvU8">\n           <div role="gridcell" aria-colindex="2" class="_3vPI2">\n              <div class="zoWT4">${chatTitle}</div>\n              <div class="_1i_wG"></div>\n           </div>\n           <div class="_37FrU">\n              <div class="_1qB8f">${previewHTML}</div>\n              <div role="gridcell" aria-colindex="1" class="_1i_wG">\n                <span>${tagsHTML}</span>\n                <span>${unreaderHTML}</span>\n                <span>${arrowHTML}</span>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  `;
    $4gcVu.getProfilePicUrl(chat, (picUrl)=>{
        if (picUrl) {
            const pic1 = div.querySelector('#' + $e592a3aeccb24bbc295a58c8a6d032f0$var$PROFILE_PIC_ID);
            if (pic1) pic1.setAttribute('src', picUrl);
        }
    });
    div.oncontextmenu = function(e) {
        e.stopPropagation();
        e.preventDefault();
    };
    if (onClick) div.addEventListener('click', onClick);
    if (onArrow) {
        const button = div.querySelector('#' + $e592a3aeccb24bbc295a58c8a6d032f0$var$ARROW_BUTTON_ID);
        if (button) button.addEventListener('click', onArrow);
    }
    return {
        htmlElement: div
    };
} //# sourceMappingURL=ChatItem.js.map

});

parcelRequire.register("6U6TO", function(module, exports) {

$parcel$export(module.exports, "WWEvents", () => $e2e094f78005e1737315daae626b3186$export$41b2195c00a645a8);

var $7IzVc = parcelRequire("7IzVc");

var $3HH7x = parcelRequire("3HH7x");

var $4jc2y = parcelRequire("4jc2y");
const $e2e094f78005e1737315daae626b3186$var$port = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.connect((/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.id, {
    name: $3HH7x.BridgePortType.WWA_EVENTS_CONNECTOR
});
class $e2e094f78005e1737315daae626b3186$var$EventsTransmitter {
    constructor(port, emitter){
        this.port = port;
        this.emitter = emitter;
        this.initialize();
    }
    initialize() {
        this.port.onMessage.addListener((event)=>{
            event.name;
            if (event.data) this.emitter.emit(event.name, ...event.data);
            else this.emitter.emit(event.name);
        });
    }
    on(event, listener) {
        this.emitter.on(event, listener);
    }
}
const $e2e094f78005e1737315daae626b3186$export$41b2195c00a645a8 = new $e2e094f78005e1737315daae626b3186$var$EventsTransmitter($e2e094f78005e1737315daae626b3186$var$port, new $4jc2y.EventEmitter());

});
parcelRequire.register("4jc2y", function(module, exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
var $8d99711476c1247b82bd4cd02f701229$var$R = typeof Reflect === 'object' ? Reflect : null;
var $8d99711476c1247b82bd4cd02f701229$var$ReflectApply = $8d99711476c1247b82bd4cd02f701229$var$R && typeof $8d99711476c1247b82bd4cd02f701229$var$R.apply === 'function' ? $8d99711476c1247b82bd4cd02f701229$var$R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var $8d99711476c1247b82bd4cd02f701229$var$ReflectOwnKeys;
if ($8d99711476c1247b82bd4cd02f701229$var$R && typeof $8d99711476c1247b82bd4cd02f701229$var$R.ownKeys === 'function') $8d99711476c1247b82bd4cd02f701229$var$ReflectOwnKeys = $8d99711476c1247b82bd4cd02f701229$var$R.ownKeys;
else if (Object.getOwnPropertySymbols) $8d99711476c1247b82bd4cd02f701229$var$ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else $8d99711476c1247b82bd4cd02f701229$var$ReflectOwnKeys = function ReflectOwnKeys1(target) {
    return Object.getOwnPropertyNames(target);
};
function $8d99711476c1247b82bd4cd02f701229$var$ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var $8d99711476c1247b82bd4cd02f701229$var$NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function $8d99711476c1247b82bd4cd02f701229$var$EventEmitter() {
    $8d99711476c1247b82bd4cd02f701229$var$EventEmitter.init.call(this);
}
module.exports = $8d99711476c1247b82bd4cd02f701229$var$EventEmitter;
module.exports.once = $8d99711476c1247b82bd4cd02f701229$var$once;
// Backwards-compat with node 0.10.x
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.EventEmitter = $8d99711476c1247b82bd4cd02f701229$var$EventEmitter;
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype._events = undefined;
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype._eventsCount = 0;
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var $8d99711476c1247b82bd4cd02f701229$var$defaultMaxListeners = 10;
function $8d99711476c1247b82bd4cd02f701229$var$checkListener(listener) {
    if (typeof listener !== 'function') throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty($8d99711476c1247b82bd4cd02f701229$var$EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
        return $8d99711476c1247b82bd4cd02f701229$var$defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== 'number' || arg < 0 || $8d99711476c1247b82bd4cd02f701229$var$NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
        $8d99711476c1247b82bd4cd02f701229$var$defaultMaxListeners = arg;
    }
});
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || $8d99711476c1247b82bd4cd02f701229$var$NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
    this._maxListeners = n;
    return this;
};
function $8d99711476c1247b82bd4cd02f701229$var$_getMaxListeners(that) {
    if (that._maxListeners === undefined) return $8d99711476c1247b82bd4cd02f701229$var$EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return $8d99711476c1247b82bd4cd02f701229$var$_getMaxListeners(this);
};
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === 'error';
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === 'function') $8d99711476c1247b82bd4cd02f701229$var$ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = $8d99711476c1247b82bd4cd02f701229$var$arrayClone(handler, len);
        for(var i = 0; i < len; ++i)$8d99711476c1247b82bd4cd02f701229$var$ReflectApply(listeners[i], this, args);
    }
    return true;
};
function $8d99711476c1247b82bd4cd02f701229$var$_addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    $8d99711476c1247b82bd4cd02f701229$var$checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit('newListener', type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === 'function') // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = $8d99711476c1247b82bd4cd02f701229$var$_getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
            w.name = 'MaxListenersExceededWarning';
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            $8d99711476c1247b82bd4cd02f701229$var$ProcessEmitWarning(w);
        }
    }
    return target;
}
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.addListener = function addListener(type, listener) {
    return $8d99711476c1247b82bd4cd02f701229$var$_addListener(this, type, listener, false);
};
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.on = $8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.addListener;
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return $8d99711476c1247b82bd4cd02f701229$var$_addListener(this, type, listener, true);
};
function $8d99711476c1247b82bd4cd02f701229$var$onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function $8d99711476c1247b82bd4cd02f701229$var$_onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = $8d99711476c1247b82bd4cd02f701229$var$onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.once = function once(type, listener) {
    $8d99711476c1247b82bd4cd02f701229$var$checkListener(listener);
    this.on(type, $8d99711476c1247b82bd4cd02f701229$var$_onceWrap(this, type, listener));
    return this;
};
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    $8d99711476c1247b82bd4cd02f701229$var$checkListener(listener);
    this.prependListener(type, $8d99711476c1247b82bd4cd02f701229$var$_onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    $8d99711476c1247b82bd4cd02f701229$var$checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if ((--this._eventsCount) === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
        }
    } else if (typeof list !== 'function') {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else $8d99711476c1247b82bd4cd02f701229$var$spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
    }
    return this;
};
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.off = $8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.removeListener;
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if ((--this._eventsCount) === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === 'function') this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function $8d99711476c1247b82bd4cd02f701229$var$_listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === 'function') return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? $8d99711476c1247b82bd4cd02f701229$var$unwrapListeners(evlistener) : $8d99711476c1247b82bd4cd02f701229$var$arrayClone(evlistener, evlistener.length);
}
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.listeners = function listeners(type) {
    return $8d99711476c1247b82bd4cd02f701229$var$_listeners(this, type, true);
};
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return $8d99711476c1247b82bd4cd02f701229$var$_listeners(this, type, false);
};
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') return emitter.listenerCount(type);
    else return $8d99711476c1247b82bd4cd02f701229$var$listenerCount.call(emitter, type);
};
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.listenerCount = $8d99711476c1247b82bd4cd02f701229$var$listenerCount;
function $8d99711476c1247b82bd4cd02f701229$var$listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === 'function') return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
$8d99711476c1247b82bd4cd02f701229$var$EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? $8d99711476c1247b82bd4cd02f701229$var$ReflectOwnKeys(this._events) : [];
};
function $8d99711476c1247b82bd4cd02f701229$var$arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function $8d99711476c1247b82bd4cd02f701229$var$spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function $8d99711476c1247b82bd4cd02f701229$var$unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function $8d99711476c1247b82bd4cd02f701229$var$once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === 'function') emitter.removeListener('error', errorListener);
            resolve([].slice.call(arguments));
        }
        $8d99711476c1247b82bd4cd02f701229$var$eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== 'error') $8d99711476c1247b82bd4cd02f701229$var$addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function $8d99711476c1247b82bd4cd02f701229$var$addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === 'function') $8d99711476c1247b82bd4cd02f701229$var$eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
}
function $8d99711476c1247b82bd4cd02f701229$var$eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === 'function') {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === 'function') // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

});


parcelRequire.register("liFRs", function(module, exports) {

$parcel$export(module.exports, "DrawerChatCtxMenu", () => $0b49df3bfaad08da3febacdef41a7542$export$8f74e30fcecf9cee);

var $7pMZw = parcelRequire("7pMZw");

var $7pCU8 = parcelRequire("7pCU8");
class $0b49df3bfaad08da3febacdef41a7542$export$8f74e30fcecf9cee extends $7pMZw.FakeCtxMenu {
    constructor(items){
        super('drawerChat', items);
        this.chat = null;
        this.attachToChat = (chat, anchorCoords)=>{
            if (this.chat) {
                if (this.chat.id === chat.id) {
                    this.tieToAnchor(anchorCoords);
                    return;
                }
                this.detachChat(chat);
            }
            this.chat = chat;
            this.tieToAnchor(anchorCoords);
        };
        this.detachChat = (chat)=>{
            if (this.chat && this.chat.id !== chat.id) return;
            this.chat = null;
            this.isVisible = false;
        };
        /**
         * Used to change chat by item click.
         */ this.handleItemClick = (e)=>{
            var _a;
            const { item: item  } = e.detail;
            if (!this.chat) return $7pCU8.process_error(new Error('Chat not attached:' + JSON.stringify(this.chat)));
            item.chatChange(this.chat);
            (_a = this._node) === null || _a === void 0 || _a.remove();
        };
        // @ts-ignore
        this._node.addEventListener('itemClick', this.handleItemClick);
        // @ts-ignore
        this._node.addEventListener('clickToEmptySpace', ()=>this.detachChat(this.chat)
        );
    }
} //# sourceMappingURL=DrawerChatCtxMenu.js.map

});


parcelRequire.register("2tC57", function(module, exports) {

$parcel$export(module.exports, "constructDebugModeMenuItem", () => $5168629b2d4459124ca6933c5470259d$export$5c4373b62113655a);
$parcel$export(module.exports, "setDebugModeStatus", () => $5168629b2d4459124ca6933c5470259d$export$9afe9ccdd47c4459);
$parcel$export(module.exports, "toggleDebugMode", () => $5168629b2d4459124ca6933c5470259d$export$e3009bddd375c6ea);
$parcel$export(module.exports, "getDebugModeStatus", () => $5168629b2d4459124ca6933c5470259d$export$9edb96532accb387);

var $7IzVc = parcelRequire("7IzVc");

var $1oTL5 = parcelRequire("1oTL5");

var $3h5SU = parcelRequire("3h5SU");

var $3zu8t = parcelRequire("3zu8t");

var $Iq2i6 = parcelRequire("Iq2i6");

var $3z0NR = parcelRequire("3z0NR");
const $5168629b2d4459124ca6933c5470259d$var$SWITCH_ON = `\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n        <path d="M17 7H7a5 5 0 0 0-5 5 5 5 0 0 0 5 5h10a5 5 0 0 0 5-5 5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3 3 3 0 0 1-3 3Z"/>\n    </svg>\n    `;
const $5168629b2d4459124ca6933c5470259d$var$SWITCH_OFF = `\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n        <path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>\n    </svg>\n`;
function $5168629b2d4459124ca6933c5470259d$export$5c4373b62113655a() {
    const text = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_ctxMenuItem_debug_mode");
    const menuItem = document.createElement("DIV");
    $3h5SU.set_el_attributes(menuItem, {
        id: $Iq2i6.Selectors.ZM_CTX_MENU_ITEM_DEBUG_MODE.substring(1),
        class: "ZenMode__contextMenuItem__withIcon ZenMode_debugMode"
    });
    const textEl = $1oTL5.DOM.create_el({
        tag: "span",
        attributes: {
            id: $Iq2i6.Selectors.ZM_CTX_MENU_ITEM_DEBUG_TEXT.substring(1)
        },
        text: text
    });
    const soundIconEl = $1oTL5.DOM.create_el({
        tag: "i",
        attributes: {
            id: $Iq2i6.Selectors.ZM_CTX_MENU_ITEM_DEBUG_SWITCH_ICON.substring(1)
        },
        html: $5168629b2d4459124ca6933c5470259d$var$SWITCH_OFF
    });
    menuItem.append(textEl, soundIconEl);
    return menuItem;
}
async function $5168629b2d4459124ca6933c5470259d$export$9edb96532accb387() {
    return Boolean(await $3zu8t.get_extn_storage_item_value($Iq2i6.StateItemNames.DEBUG_MODE_STATUS));
}
async function $5168629b2d4459124ca6933c5470259d$export$9afe9ccdd47c4459(debugModeStatus) {
    await $3zu8t.set_extn_storage_item({
        [$Iq2i6.StateItemNames.DEBUG_MODE_STATUS]: debugModeStatus
    });
    const debugModeIndicator = $1oTL5.DOM.get_el($Iq2i6.Selectors.ZM_DEBUG_MODE_INDICATOR);
    if (debugModeIndicator) debugModeIndicator.innerText = debugModeStatus ? (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_ctxMenuItem_debug_mode") : "";
    const debugModeIcon = $1oTL5.DOM.get_el($Iq2i6.Selectors.ZM_CTX_MENU_ITEM_DEBUG_SWITCH_ICON);
    if (debugModeIcon) debugModeIcon.innerHTML = debugModeStatus ? $5168629b2d4459124ca6933c5470259d$var$SWITCH_ON : $5168629b2d4459124ca6933c5470259d$var$SWITCH_OFF;
    if (debugModeStatus) $3z0NR.default.addItems($3z0NR.debugModeItems);
    else $3z0NR.default.removeItems($3z0NR.debugModeActions);
}
async function $5168629b2d4459124ca6933c5470259d$export$e3009bddd375c6ea() {
    const debugModeStatus = await $5168629b2d4459124ca6933c5470259d$export$9edb96532accb387();
    await $5168629b2d4459124ca6933c5470259d$export$9afe9ccdd47c4459(!debugModeStatus);
} //# sourceMappingURL=debugMode.js.map

});

parcelRequire.register("4dZYf", function(module, exports) {

$parcel$export(module.exports, "buildOfflineModeMenuItem", () => $8ad8b261742490ac0df5379acd8f2c48$export$c053ed25bf4fdcc3);
$parcel$export(module.exports, "toggleOfflineMode", () => $8ad8b261742490ac0df5379acd8f2c48$export$11a40de69760651);
$parcel$export(module.exports, "buildOfflineModeIcon", () => $8ad8b261742490ac0df5379acd8f2c48$export$f524fa437e6efe6c);

var $7IzVc = parcelRequire("7IzVc");

var $1oTL5 = parcelRequire("1oTL5");

var $3h5SU = parcelRequire("3h5SU");

var $2f9nT = parcelRequire("2f9nT");

var $32V2j = parcelRequire("32V2j");

var $32V2j = parcelRequire("32V2j");

var $4gcVu = parcelRequire("4gcVu");
const $8ad8b261742490ac0df5379acd8f2c48$var$SWITCH_ON = `\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n        <path d="M17 7H7a5 5 0 0 0-5 5 5 5 0 0 0 5 5h10a5 5 0 0 0 5-5 5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3 3 3 0 0 1-3 3Z"/>\n    </svg>\n    `;
const $8ad8b261742490ac0df5379acd8f2c48$var$SWITCH_OFF = `\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n        <path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>\n    </svg>\n`;
function $8ad8b261742490ac0df5379acd8f2c48$export$c053ed25bf4fdcc3() {
    const text = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage('ZM_ctxMenuItem_offline_mode');
    const menuItem = document.createElement('div');
    $3h5SU.set_el_attributes(menuItem, {
        id: $32V2j.ZM_CTX_MENU_ITEM_OFFLINE_MODE_ID,
        class: "ZenMode__contextMenuItem__withIcon"
    });
    const textEl = $1oTL5.DOM.create_el({
        tag: "span",
        attributes: {
            id: $32V2j.ZM_CTX_MENU_ITEM_OFFLINE_MODE_TEXT_ID
        },
        text: text
    });
    const iconEl = $1oTL5.DOM.create_el({
        tag: "i",
        attributes: {
            id: $32V2j.ZM_CTX_MENU_ITEM_OFFLINE_MODE_BUTTON_ID
        },
        html: $8ad8b261742490ac0df5379acd8f2c48$var$SWITCH_OFF
    });
    menuItem.append(textEl, iconEl);
    $8ad8b261742490ac0df5379acd8f2c48$var$updateMenuItem(iconEl);
    return menuItem;
}
function $8ad8b261742490ac0df5379acd8f2c48$export$f524fa437e6efe6c() {
    const icon = document.createElement('div');
    const iconUrl = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.getURL('assets/whatsapp/offline-mode-icon.png');
    $3h5SU.set_el_attributes(icon, {
        id: $32V2j.ZM_CTX_MENU_ITEM_OFFLINE_MODE_ICON_ID
    });
    $2f9nT.set_el_style(icon, {
        'background-image': `url(${iconUrl})`,
        display: 'none'
    });
    icon.addEventListener('click', ()=>{
        $8ad8b261742490ac0df5379acd8f2c48$export$11a40de69760651();
    });
    return icon;
}
function $8ad8b261742490ac0df5379acd8f2c48$export$60ae5f234b77035d(visible) {
    const icon = document.getElementById($32V2j.ZM_CTX_MENU_ITEM_OFFLINE_MODE_ICON_ID);
    $2f9nT.set_el_style(icon, {
        display: visible ? 'block' : 'none'
    });
}
async function $8ad8b261742490ac0df5379acd8f2c48$var$updateMenuItem(button, enable = null) {
    if (button) {
        if (enable == null) enable = await $8ad8b261742490ac0df5379acd8f2c48$var$getDebugModeStatus();
        button.innerHTML = enable ? $8ad8b261742490ac0df5379acd8f2c48$var$SWITCH_ON : $8ad8b261742490ac0df5379acd8f2c48$var$SWITCH_OFF;
    }
}
async function $8ad8b261742490ac0df5379acd8f2c48$var$setOfflineMode(enable) {
    const button = document.getElementById($32V2j.ZM_CTX_MENU_ITEM_OFFLINE_MODE_BUTTON_ID);
    if (button) $8ad8b261742490ac0df5379acd8f2c48$var$updateMenuItem(button, enable);
    $8ad8b261742490ac0df5379acd8f2c48$export$60ae5f234b77035d(enable);
    return await $4gcVu.enableOfflineMode(enable);
}
function $8ad8b261742490ac0df5379acd8f2c48$var$getDebugModeStatus() {
    return $4gcVu.isOfflineModeEnabled();
}
async function $8ad8b261742490ac0df5379acd8f2c48$export$11a40de69760651() {
    const enabled = await $8ad8b261742490ac0df5379acd8f2c48$var$getDebugModeStatus();
    return $8ad8b261742490ac0df5379acd8f2c48$var$setOfflineMode(!enabled);
} //# sourceMappingURL=offlineMode.js.map

});
parcelRequire.register("32V2j", function(module, exports) {

$parcel$export(module.exports, "CHAT_NODE_CLASS", () => $641e34f2857e5cebf16742838e0eb43b$export$a7981353a56cb5b0);
$parcel$export(module.exports, "ZM_CTX_MENU_ITEM_OFFLINE_MODE_ICON_ID", () => $641e34f2857e5cebf16742838e0eb43b$export$b60e589bdd5cc1e2);
$parcel$export(module.exports, "CHAT_LIST_SELECTOR", () => $641e34f2857e5cebf16742838e0eb43b$export$d0fde353573a88b1);
$parcel$export(module.exports, "ZM_CTX_MENU_ITEM_PINNED_STATUS_TEXT_ID", () => $641e34f2857e5cebf16742838e0eb43b$export$7734a91c85c47a47);
$parcel$export(module.exports, "CHAT_NODE_INFO_SELECTOR", () => $641e34f2857e5cebf16742838e0eb43b$export$c550ffc6e23a0e3b);
$parcel$export(module.exports, "ZM_CTX_MENU_ITEM_OFFLINE_MODE_BUTTON_ID", () => $641e34f2857e5cebf16742838e0eb43b$export$5af29c9b5d7d16c1);
$parcel$export(module.exports, "ZEN_MORNING_SUN_ID", () => $641e34f2857e5cebf16742838e0eb43b$export$91f7d0b3a8ca70c9);
$parcel$export(module.exports, "CHAT_NODE_TITLE_ATTR", () => $641e34f2857e5cebf16742838e0eb43b$export$1101c667a3c2abbd);
$parcel$export(module.exports, "ZM_CTX_MENU_ITEM_OFFLINE_MODE_TEXT_ID", () => $641e34f2857e5cebf16742838e0eb43b$export$1f95d12452e6d18);
$parcel$export(module.exports, "ZM_CTX_MENU_ITEM_OFFLINE_MODE_ID", () => $641e34f2857e5cebf16742838e0eb43b$export$4fce8dd5a25d2e7a);
$parcel$export(module.exports, "ZM_CTX_MENU_ITEM_PINNED_STATUS_ID", () => $641e34f2857e5cebf16742838e0eb43b$export$634fcb9e83881989);
$parcel$export(module.exports, "ZM_CTX_MENU_ITEM_PINNED_STATUS_BUTTON_ID", () => $641e34f2857e5cebf16742838e0eb43b$export$815a8505fe937d22);
$parcel$export(module.exports, "CHAT_NODE_TITLE_SELECTOR", () => $641e34f2857e5cebf16742838e0eb43b$export$9a865f6b6716ee9e);

var $Iq2i6 = parcelRequire("Iq2i6");
const $641e34f2857e5cebf16742838e0eb43b$export$d0fde353573a88b1 = $Iq2i6.Selectors.WA_CONTACT_LIST;
const $641e34f2857e5cebf16742838e0eb43b$export$ae5cb952bee8cf33 = 'div';
const $641e34f2857e5cebf16742838e0eb43b$export$a7981353a56cb5b0 = $Iq2i6.Selectors.WA_CONTACT_WRAPPER_CLASS;
const $641e34f2857e5cebf16742838e0eb43b$export$c550ffc6e23a0e3b = '._3OvU8';
const $641e34f2857e5cebf16742838e0eb43b$export$c3ae9bda2d211fa7 = '_1lPgH';
const $641e34f2857e5cebf16742838e0eb43b$export$9a865f6b6716ee9e = $Iq2i6.Selectors.WA_CONTACT_NAME;
const $641e34f2857e5cebf16742838e0eb43b$export$1101c667a3c2abbd = 'title';
const $641e34f2857e5cebf16742838e0eb43b$export$91f7d0b3a8ca70c9 = $Iq2i6.Selectors.ZM_ZENMORNING_CONTACT_SUNICON.substring(1);
const $641e34f2857e5cebf16742838e0eb43b$export$4fce8dd5a25d2e7a = 'ZM_CTX_MENU_ITEM_OFFLINE_MODE_ID';
const $641e34f2857e5cebf16742838e0eb43b$export$1f95d12452e6d18 = 'ZM_CTX_MENU_ITEM_OFFLINE_MODE_TEXT_ID';
const $641e34f2857e5cebf16742838e0eb43b$export$5af29c9b5d7d16c1 = 'ZenMode__contextMenuItem__offlineMode__switchIcon';
const $641e34f2857e5cebf16742838e0eb43b$export$b60e589bdd5cc1e2 = 'ZenMode__offlineModeIcon';
const $641e34f2857e5cebf16742838e0eb43b$export$634fcb9e83881989 = 'ZM_CTX_MENU_ITEM_PINNED_STATUS_ID';
const $641e34f2857e5cebf16742838e0eb43b$export$7734a91c85c47a47 = 'ZM_CTX_MENU_ITEM_PINNED_STATUS_TEXT_ID';
const $641e34f2857e5cebf16742838e0eb43b$export$815a8505fe937d22 = 'ZenMode__contextMenuItem__pinnedChatsStatus__switchIcon';

});


parcelRequire.register("5UHyq", function(module, exports) {

$parcel$export(module.exports, "buildPinnedChatsStatusMenuItem", () => $c2556f57902db76dd795e0d4d7851dcb$export$6124af0a816f0431);
$parcel$export(module.exports, "togglePinnedChatsStatusMode", () => $c2556f57902db76dd795e0d4d7851dcb$export$7688de6cfef4bba1);

var $7IzVc = parcelRequire("7IzVc");

var $1oTL5 = parcelRequire("1oTL5");

var $3h5SU = parcelRequire("3h5SU");

var $3zu8t = parcelRequire("3zu8t");

var $Iq2i6 = parcelRequire("Iq2i6");

var $32V2j = parcelRequire("32V2j");

var $32V2j = parcelRequire("32V2j");
const $c2556f57902db76dd795e0d4d7851dcb$var$SWITCH_ON = `\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n        <path d="M17 7H7a5 5 0 0 0-5 5 5 5 0 0 0 5 5h10a5 5 0 0 0 5-5 5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3 3 3 0 0 1-3 3Z"/>\n    </svg>\n    `;
const $c2556f57902db76dd795e0d4d7851dcb$var$SWITCH_OFF = `\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n        <path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>\n    </svg>\n`;
function $c2556f57902db76dd795e0d4d7851dcb$export$6124af0a816f0431() {
    const text = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage('ZM_ctxMenuItem_pinned_status');
    const menuItem = document.createElement('div');
    $3h5SU.set_el_attributes(menuItem, {
        id: $32V2j.ZM_CTX_MENU_ITEM_PINNED_STATUS_ID,
        class: "ZenMode__contextMenuItem__withIcon"
    });
    const textEl = $1oTL5.DOM.create_el({
        tag: "span",
        attributes: {
            id: $32V2j.ZM_CTX_MENU_ITEM_PINNED_STATUS_TEXT_ID
        },
        text: text
    });
    const iconEl = $1oTL5.DOM.create_el({
        tag: "i",
        attributes: {
            id: $32V2j.ZM_CTX_MENU_ITEM_PINNED_STATUS_BUTTON_ID
        },
        html: $c2556f57902db76dd795e0d4d7851dcb$var$SWITCH_OFF
    });
    menuItem.append(textEl, iconEl);
    try {
        $c2556f57902db76dd795e0d4d7851dcb$var$updateMenuItem(iconEl);
    } catch (e) {
        console.log(e);
    }
    return menuItem;
}
async function $c2556f57902db76dd795e0d4d7851dcb$var$updateMenuItem(button, enable = null) {
    if (button) {
        if (enable == null) enable = await $c2556f57902db76dd795e0d4d7851dcb$var$getStatusEnabled();
        button.innerHTML = enable ? $c2556f57902db76dd795e0d4d7851dcb$var$SWITCH_ON : $c2556f57902db76dd795e0d4d7851dcb$var$SWITCH_OFF;
    }
}
async function $c2556f57902db76dd795e0d4d7851dcb$var$getStatusEnabled() {
    return Boolean(await $3zu8t.get_extn_storage_item_value($Iq2i6.StateItemNames.PINNED_CHATS_STATUS_ENABLED));
}
function $c2556f57902db76dd795e0d4d7851dcb$var$setStatusEnabled(enabled) {
    $3zu8t.set_extn_storage_item({
        [$Iq2i6.StateItemNames.PINNED_CHATS_STATUS_ENABLED]: enabled
    });
}
async function $c2556f57902db76dd795e0d4d7851dcb$export$7688de6cfef4bba1() {
    const enabled = await $c2556f57902db76dd795e0d4d7851dcb$var$getStatusEnabled();
    $c2556f57902db76dd795e0d4d7851dcb$var$updateMenuItem(document.getElementById($32V2j.ZM_CTX_MENU_ITEM_PINNED_STATUS_BUTTON_ID), !enabled);
    $c2556f57902db76dd795e0d4d7851dcb$var$setStatusEnabled(!enabled);
} //# sourceMappingURL=pinnedChatsStatus.js.map

});



parcelRequire.register("2cO91", function(module, exports) {

$parcel$export(module.exports, "construct_release_notes_area", () => $48807101102de8c4b059f4f213a48436$export$f81075e0f687de24);

var $1oTL5 = parcelRequire("1oTL5");

var $2f9nT = parcelRequire("2f9nT");

var $Iq2i6 = parcelRequire("Iq2i6");

var $eugld = parcelRequire("eugld");

var $7IzVc = parcelRequire("7IzVc");
function $48807101102de8c4b059f4f213a48436$export$f81075e0f687de24() {
    const manifest = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.getManifest();
    const releaseNotesAreaEl = $1oTL5.DOM.create_el({
        tag: "div",
        attributes: {
            id: $Iq2i6.Selectors.ZM_RELEASE_NOTES_AREA.substring(1),
            class: '_3J6wB'
        }
    });
    const headerEl = $1oTL5.DOM.create_el({
        tag: "h1",
        text: `${(/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_releaseNotes")} ${manifest.version}`
    });
    releaseNotesAreaEl.appendChild(headerEl);
    // Explain: We'll keep support for multiple RNs in release-notes.yaml.
    // But in current ver we only use one RN.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const release = (/*@__PURE__*/$parcel$interopDefault($eugld)).release;
    const description = release.description;
    const changes = release.changes;
    const link = release.link;
    const releaseNotesDescriptionEl = $1oTL5.DOM.create_el({
        tag: "div"
    });
    releaseNotesDescriptionEl.innerHTML = description;
    releaseNotesAreaEl.appendChild(releaseNotesDescriptionEl);
    const releaseNotesListEl = $1oTL5.DOM.create_el({
        tag: "ul"
    });
    releaseNotesAreaEl.appendChild(releaseNotesListEl);
    changes.forEach((descr, i)=>{
        const noteEl = $1oTL5.DOM.create_el({
            tag: "li",
            html: descr
        });
        releaseNotesListEl.appendChild(noteEl);
    });
    const linkEl = $1oTL5.DOM.create_el({
        tag: "div"
    });
    linkEl.innerHTML = link;
    releaseNotesListEl.appendChild(linkEl);
    const closeBtnEl = $1oTL5.DOM.create_el({
        tag: "div",
        text: "x",
        attributes: {
            id: $Iq2i6.Selectors.ZM_RELEASE_NOTES_AREA_CLOSE_BTN.substring(1)
        }
    });
    closeBtnEl.addEventListener("click", ()=>$2f9nT.set_el_style(releaseNotesAreaEl, {
            display: "none"
        })
    );
    releaseNotesAreaEl.appendChild(closeBtnEl);
    window.addEventListener('click', (e)=>{
        if (e.target.closest($Iq2i6.Selectors.ZM_RELEASE_NOTES_AREA)) return;
        $2f9nT.set_el_style(releaseNotesAreaEl, {
            display: "none"
        });
    });
    return releaseNotesAreaEl;
} //# sourceMappingURL=construct-release-notes-item.js.map

});
parcelRequire.register("eugld", function(module, exports) {
module.exports = {
    "release": {
        "description": "<b>Public beta version <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Marie_Curie\">Marie Curie</a></b>",
        "changes": [
            "1.Zen menu changes"
        ],
        "link": "<a target=\"_blank\" href=\"https://github.com/zen-mode/Whatsapp-Zen-Mode/blob/main/ReleaseNotes.md\">See previous versions</a>"
    }
};

});


parcelRequire.register("y7N5s", function(module, exports) {

$parcel$export(module.exports, "constructVisibilityShedulerPopup", () => $1215ba71401b69ff2f0db2c6a61e0cd5$export$203376e1790ad21);

var $7IzVc = parcelRequire("7IzVc");

var $1oTL5 = parcelRequire("1oTL5");

var $2f9nT = parcelRequire("2f9nT");

var $Iq2i6 = parcelRequire("Iq2i6");

var $38ck6 = parcelRequire("38ck6");

var $2BOpd = parcelRequire("2BOpd");

var $60Et5 = parcelRequire("60Et5");

var $60Et5 = parcelRequire("60Et5");
const $1215ba71401b69ff2f0db2c6a61e0cd5$var$DEFAULT_WEEKDAYS_START_TIME = 480;
const $1215ba71401b69ff2f0db2c6a61e0cd5$var$DEFAULT_WEEKDAYS_STOP_TIME = 1200;
const $1215ba71401b69ff2f0db2c6a61e0cd5$var$daysLabels = {
    [$2BOpd.DayOfTheWeek.SUN]: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_Sunday"),
    [$2BOpd.DayOfTheWeek.MON]: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_Monday"),
    [$2BOpd.DayOfTheWeek.TUE]: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_Tuesday"),
    [$2BOpd.DayOfTheWeek.WED]: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_Wednesday"),
    [$2BOpd.DayOfTheWeek.THU]: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_Thursday"),
    [$2BOpd.DayOfTheWeek.FRI]: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_Friday"),
    [$2BOpd.DayOfTheWeek.SAT]: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_Saturday")
};
function $1215ba71401b69ff2f0db2c6a61e0cd5$export$203376e1790ad21() {
    let currentChatShedule = {
        [$2BOpd.DayOfTheWeek.SUN]: undefined,
        [$2BOpd.DayOfTheWeek.MON]: undefined,
        [$2BOpd.DayOfTheWeek.TUE]: undefined,
        [$2BOpd.DayOfTheWeek.WED]: undefined,
        [$2BOpd.DayOfTheWeek.THU]: undefined,
        [$2BOpd.DayOfTheWeek.FRI]: undefined,
        [$2BOpd.DayOfTheWeek.SAT]: undefined
    };
    let shedule = {
        [$2BOpd.DayOfTheWeek.SUN]: undefined,
        [$2BOpd.DayOfTheWeek.MON]: undefined,
        [$2BOpd.DayOfTheWeek.TUE]: undefined,
        [$2BOpd.DayOfTheWeek.WED]: undefined,
        [$2BOpd.DayOfTheWeek.THU]: undefined,
        [$2BOpd.DayOfTheWeek.FRI]: undefined,
        [$2BOpd.DayOfTheWeek.SAT]: undefined
    };
    let currentScheduleVariant = $2BOpd.VisibilitySheduleVariant.Everyday;
    let selectedSheduleVariant = $2BOpd.VisibilitySheduleVariant.Everyday;
    const popup = $1oTL5.DOM.create_el({
        tag: "div",
        attributes: {
            id: $Iq2i6.Selectors.ZM_VISIBILITY_SHEDULER_POPUP.substring(1),
            class: "_3J6wB"
        }
    });
    const description = $1oTL5.DOM.create_el({
        tag: "div",
        html: `${(/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_description")}<br />${(/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_description1")}`,
        attributes: {
            class: "ZenMode_visibility-sheduler_description"
        }
    });
    const sheduleTitle = $1oTL5.DOM.create_el({
        tag: "div",
        html: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_title"),
        attributes: {
            class: "ZenMode_visibility-sheduler_title"
        }
    });
    const customShedulerFormContainer = $1oTL5.DOM.create_el({
        tag: "div"
    });
    const weekdaysDescriptionContainer = $1oTL5.DOM.create_el({
        tag: "div"
    });
    schedulerCalled(popup);
    function schedulerCalled(popup1) {
        const options = {
            rootMargin: '0px',
            threshold: 1
        };
        var observer = new IntersectionObserver((entries, observer1)=>{
            entries.forEach((entry)=>{
                if (entry.intersectionRatio > 0) {
                    currentChatShedule = shedule;
                    currentScheduleVariant = selectedSheduleVariant;
                }
            });
        }, options);
        observer.observe(popup1);
    }
    popup.append(description, sheduleTitle);
    popup.addEventListener("click", (e)=>e.stopPropagation()
    );
    const sheduleTypeSelector = $1oTL5.DOM.create_el({
        tag: "select",
        attributes: {
            class: "ZenMode__select",
            id: "SheduleTypeSelector",
            value: "Custom"
        }
    });
    const typeSelectorContainer = $1oTL5.DOM.create_el({
        tag: "div",
        attributes: {
            class: "ZenMode__sheduler_row"
        }
    });
    const onCustomFromTimeSelectionChange = (day)=>{
        return function() {
            const time = this.value;
            const toTimeSelector = $1oTL5.DOM.get_el(`#CustomToTimeSelector${day}`);
            const timeSeparator = $1oTL5.DOM.get_el(`#CustomTimeSeparator${day}`);
            if (time === "none") {
                toTimeSelector.style.visibility = "hidden";
                timeSeparator.style.visibility = "hidden";
                shedule[day] = undefined;
            } else {
                toTimeSelector.style.visibility = "visible";
                timeSeparator.style.visibility = "visible";
            }
            if (shedule[day]) shedule[day][0] = time;
            else shedule[day] = [
                time,
                time + 30
            ];
            const fromSelectedIndex = this.selectedIndex;
            const toSelectedIndex = toTimeSelector.selectedIndex;
            toTimeSelector.selectedIndex = Math.max(fromSelectedIndex, toSelectedIndex);
            shedule[day][1] = toTimeSelector.value;
            const toTimeOptions = toTimeSelector.getElementsByTagName("option");
            for(let i = 0; i < toTimeOptions.length; i++)if (i >= fromSelectedIndex) toTimeOptions[i].disabled = false;
            else toTimeOptions[i].disabled = true;
        };
    };
    const onCustomToTimeSelectionChange = (day)=>{
        return function() {
            const time = this.value;
            shedule[day][1] = time;
        };
    };
    function onWeekdaysFromTimeSelector() {
        const fromTime = Number(this.value);
        const toTimeSelector = $1oTL5.DOM.get_el(`#WeekdayToTimeSelector`);
        const fromSelectedIndex = this.selectedIndex;
        const toSelectedIndex = toTimeSelector.selectedIndex;
        toTimeSelector.selectedIndex = Math.max(fromSelectedIndex, toSelectedIndex);
        const toTimeOptions = toTimeSelector.getElementsByTagName("option");
        for(let i = 0; i < toTimeOptions.length; i++)if (i >= fromSelectedIndex) toTimeOptions[i].disabled = false;
        else toTimeOptions[i].disabled = true;
        const toTime = Number(toTimeSelector.value);
        const weekdayShedule = [
            fromTime,
            toTime
        ];
        shedule = {
            [$2BOpd.DayOfTheWeek.SUN]: weekdayShedule,
            [$2BOpd.DayOfTheWeek.MON]: weekdayShedule,
            [$2BOpd.DayOfTheWeek.TUE]: weekdayShedule,
            [$2BOpd.DayOfTheWeek.WED]: weekdayShedule,
            [$2BOpd.DayOfTheWeek.THU]: weekdayShedule,
            [$2BOpd.DayOfTheWeek.FRI]: undefined,
            [$2BOpd.DayOfTheWeek.SAT]: undefined
        };
    }
    function onWeekdaysToTimeSelector() {
        const toTime = Number(this.value);
        const fromTimeSelector = $1oTL5.DOM.get_el(`#WeekdayFromTimeSelector`);
        const fromTime = Number(fromTimeSelector.value);
        const weekdayShedule = [
            fromTime,
            toTime
        ];
        shedule = {
            [$2BOpd.DayOfTheWeek.SUN]: weekdayShedule,
            [$2BOpd.DayOfTheWeek.MON]: weekdayShedule,
            [$2BOpd.DayOfTheWeek.TUE]: weekdayShedule,
            [$2BOpd.DayOfTheWeek.WED]: weekdayShedule,
            [$2BOpd.DayOfTheWeek.THU]: weekdayShedule,
            [$2BOpd.DayOfTheWeek.FRI]: undefined,
            [$2BOpd.DayOfTheWeek.SAT]: undefined
        };
    }
    sheduleTypeSelector.onchange = function() {
        const value = this.value;
        selectedSheduleVariant = value;
        switch(value){
            case $2BOpd.VisibilitySheduleVariant.Everyday:
                $1215ba71401b69ff2f0db2c6a61e0cd5$var$removeForms();
                break;
            case $2BOpd.VisibilitySheduleVariant.Weekdays:
                $1215ba71401b69ff2f0db2c6a61e0cd5$var$removeForms();
                const weekdaysShedulerForm = $1oTL5.DOM.create_el({
                    tag: "div",
                    attributes: {
                        id: "WeekdaysShedulerForm"
                    }
                });
                const fromTimeSelector = $60Et5.construct_time_selector({
                    onChange: onWeekdaysFromTimeSelector,
                    id: "WeekdayFromTimeSelector",
                    disableAboveSelected: false,
                    value: $1215ba71401b69ff2f0db2c6a61e0cd5$var$DEFAULT_WEEKDAYS_START_TIME
                });
                const toTimeSelector = $60Et5.construct_time_selector({
                    onChange: onWeekdaysToTimeSelector,
                    id: "WeekdayToTimeSelector",
                    disableAboveSelected: true,
                    value: $1215ba71401b69ff2f0db2c6a61e0cd5$var$DEFAULT_WEEKDAYS_STOP_TIME
                });
                const separator = $1oTL5.DOM.create_el({
                    tag: "span",
                    text: "-"
                });
                weekdaysShedulerForm.append(fromTimeSelector, separator, toTimeSelector);
                const description1 = $1oTL5.DOM.create_el({
                    tag: "span",
                    attributes: {
                        id: "WeekdaysDescription"
                    },
                    text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_weekdays_description")
                });
                weekdaysDescriptionContainer.append(description1);
                typeSelectorContainer.append(weekdaysShedulerForm);
                break;
            case $2BOpd.VisibilitySheduleVariant.Custom:
                $1215ba71401b69ff2f0db2c6a61e0cd5$var$removeForms();
                const customShedulerForm = $1oTL5.DOM.create_el({
                    tag: "div",
                    attributes: {
                        id: "CustomShedulerForm"
                    }
                });
                const customShedulerOptions = [
                    ...Array(7)
                ].map((_, day)=>{
                    const container = $1oTL5.DOM.create_el({
                        tag: "div",
                        attributes: {
                            class: "ZenMode__sheduler_row"
                        }
                    });
                    const label = $1oTL5.DOM.create_el({
                        tag: "div",
                        text: $1215ba71401b69ff2f0db2c6a61e0cd5$var$daysLabels[day],
                        attributes: {
                            class: "ZenMode__sheduler_weekday-label"
                        }
                    });
                    const fromTimeSelector1 = $60Et5.construct_time_selector({
                        onChange: onCustomFromTimeSelectionChange(day.toString()),
                        includeNone: true
                    });
                    const toTimeSelector1 = $60Et5.construct_time_selector({
                        onChange: onCustomToTimeSelectionChange(day.toString()),
                        id: `CustomToTimeSelector${day}`
                    });
                    toTimeSelector1.style.visibility = "hidden";
                    const separator1 = $1oTL5.DOM.create_el({
                        tag: "span",
                        text: "-",
                        attributes: {
                            style: "visibility: hidden",
                            id: `CustomTimeSeparator${day}`
                        }
                    });
                    container.append(label, fromTimeSelector1, separator1, toTimeSelector1);
                    return container;
                });
                customShedulerOptions.forEach((option)=>{
                    customShedulerForm.appendChild(option);
                });
                customShedulerFormContainer.appendChild(customShedulerForm);
        }
    };
    const sheduleTypeSelectorOptions = [
        $1oTL5.DOM.create_el({
            tag: "option",
            text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_All_the_time"),
            attributes: {
                value: $2BOpd.VisibilitySheduleVariant.Everyday
            }
        }),
        $1oTL5.DOM.create_el({
            tag: "option",
            text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_weekdays"),
            attributes: {
                value: $2BOpd.VisibilitySheduleVariant.Weekdays
            }
        }),
        $1oTL5.DOM.create_el({
            tag: "option",
            text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_custom"),
            attributes: {
                value: $2BOpd.VisibilitySheduleVariant.Custom
            }
        }), 
    ];
    sheduleTypeSelectorOptions.forEach((option)=>sheduleTypeSelector.appendChild(option)
    );
    typeSelectorContainer.appendChild(sheduleTypeSelector);
    popup.append(typeSelectorContainer, weekdaysDescriptionContainer, customShedulerFormContainer);
    const closeBtnEl = $1oTL5.DOM.create_el({
        tag: "div",
        text: "x",
        attributes: {
            class: "hide-popup-close-btn"
        }
    });
    closeBtnEl.addEventListener("click", function() {
        if (JSON.stringify(currentChatShedule) != JSON.stringify(shedule) || currentScheduleVariant != selectedSheduleVariant) {
            console.log("Asking if they really want to close");
            createClosePopup(popup);
            $2f9nT.set_el_style(popup, {
                "pointer-events": "none"
            });
        } else $2f9nT.set_el_style(popup, {
            display: "none"
        });
    });
    popup.appendChild(closeBtnEl);
    // returns to the original version when window was just opened
    function resetToPreviousVersion() {
        if (selectedSheduleVariant != currentScheduleVariant) {
            sheduleTypeSelector.value = selectedSheduleVariant = currentScheduleVariant;
            sheduleTypeSelector.dispatchEvent(new Event('change'));
            switch(selectedSheduleVariant){
                case $2BOpd.VisibilitySheduleVariant.Custom:
                    const customShedulerForm = $1oTL5.DOM.get_el(`#CustomShedulerForm`);
                    for(const day in shedule)if (shedule[day]) {
                        let customShedulerFromSelect = customShedulerForm === null || customShedulerForm === void 0 ? void 0 : customShedulerForm.childNodes[day].getElementsByTagName('select')[0];
                        customShedulerFromSelect.value = String(shedule[day][0]);
                        let customShedulerToSelect = customShedulerForm === null || customShedulerForm === void 0 ? void 0 : customShedulerForm.childNodes[day].getElementsByTagName('select')[1];
                        customShedulerToSelect.value = String(shedule[day][1]);
                        customShedulerFromSelect === null || customShedulerFromSelect === void 0 || customShedulerFromSelect.dispatchEvent(new Event('change'));
                        customShedulerToSelect === null || customShedulerToSelect === void 0 || customShedulerToSelect.dispatchEvent(new Event('change'));
                        shedule = currentChatShedule;
                    }
                    break;
                case $2BOpd.VisibilitySheduleVariant.Weekdays:
                    if (shedule[$2BOpd.DayOfTheWeek.MON]) {
                        const WeekdayFromTimeSelector = $1oTL5.DOM.get_el(`#WeekdayFromTimeSelector`);
                        WeekdayFromTimeSelector.value = String(shedule[$2BOpd.DayOfTheWeek.MON][0]);
                        const WeekdayToTimeSelector = $1oTL5.DOM.get_el(`#WeekdayToTimeSelector`);
                        WeekdayToTimeSelector.value = String(shedule[$2BOpd.DayOfTheWeek.MON][1]);
                        WeekdayFromTimeSelector === null || WeekdayFromTimeSelector === void 0 || WeekdayFromTimeSelector.dispatchEvent(new Event('change'));
                        WeekdayToTimeSelector === null || WeekdayToTimeSelector === void 0 || WeekdayToTimeSelector.dispatchEvent(new Event('change'));
                        shedule = currentChatShedule;
                    }
                    break;
            }
        }
    }
    function createClosePopup(popup1) {
        console.log("Creating close popup");
        const closePopup = $1oTL5.DOM.create_el({
            tag: "div",
            attributes: {
                class: "close-popup"
            }
        });
        const titleOfClosePopup = $1oTL5.DOM.create_el({
            tag: "div",
            text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_close_popup_title"),
            attributes: {
                class: "closepopup-title"
            }
        });
        closePopup.append(titleOfClosePopup);
        const closePopupButtonsContainer = $1oTL5.DOM.create_el({
            tag: "div",
            attributes: {
                class: "closepopup-buttons-container"
            }
        });
        const closePopupYesButton = $1oTL5.DOM.create_el({
            tag: "div",
            attributes: {
                class: "closepopup-button-yes-button",
                type: "button"
            },
            text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_close_popup_yes_button")
        });
        closePopupYesButton.addEventListener("click", ()=>{
            resetToPreviousVersion();
            closePopup.remove();
            $2f9nT.set_el_style(popup1, {
                "pointer-events": "initial"
            });
            $2f9nT.set_el_style(popup1, {
                display: "none"
            });
        });
        closePopupButtonsContainer.append(closePopupYesButton);
        const closePopupNoButton = $1oTL5.DOM.create_el({
            tag: "div",
            attributes: {
                class: "closepopup-button-no-button",
                type: "button"
            },
            text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_close_popup_no_button")
        });
        closePopupNoButton.addEventListener("click", ()=>{
            $2f9nT.set_el_style(popup1, {
                "pointer-events": "initial"
            });
            closePopup.remove();
        });
        closePopupButtonsContainer.append(closePopupNoButton);
        closePopup.append(closePopupButtonsContainer);
        popup1.append(closePopup);
    }
    const buttonsContainer = $1oTL5.DOM.create_el({
        tag: "div",
        attributes: {
            class: "hide-popup-buttons-container"
        }
    });
    const addSheduleButton = $1oTL5.DOM.create_el({
        tag: "div",
        attributes: {
            class: "hide-popup-button ZenMode__sheduler_apply-button",
            type: "button"
        },
        text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_confirmation_button_label")
    });
    addSheduleButton.onclick = function(e) {
        e.preventDefault();
        $2f9nT.set_el_style(popup, {
            display: "none"
        });
        if ($38ck6.lastHoveredChat) {
            if (selectedSheduleVariant !== $2BOpd.VisibilitySheduleVariant.Everyday) {
                (/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.sendMessage({
                    type: "setShedule",
                    payload: {
                        chat: $38ck6.lastHoveredChat,
                        shedule: shedule
                    }
                });
                return;
            }
            (/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.sendMessage({
                type: "deleteShedule",
                payload: {
                    chat: $38ck6.lastHoveredChat
                }
            });
        }
    };
    buttonsContainer.appendChild(addSheduleButton);
    popup.appendChild(buttonsContainer);
    return popup;
}
function $1215ba71401b69ff2f0db2c6a61e0cd5$var$removeForms() {
    $1oTL5.DOM.remove_el("#WeekdaysShedulerForm");
    $1oTL5.DOM.remove_el("#CustomShedulerForm");
    $1oTL5.DOM.remove_el("#WeekdaysDescription");
} //# sourceMappingURL=VisibilityShedulerPopup.js.map

});
parcelRequire.register("2BOpd", function(module, exports) {

$parcel$export(module.exports, "VisibilitySheduleVariant", () => $55c0b04dd9e78091684f39ba8d9ce4c7$export$74f9512ba1f4659c);
$parcel$export(module.exports, "VisibilitySheduler", () => $55c0b04dd9e78091684f39ba8d9ce4c7$export$fa2c9e201ef31409);
$parcel$export(module.exports, "DayOfTheWeek", () => $55c0b04dd9e78091684f39ba8d9ce4c7$export$b51a7f8a2714fde9);

var $7IzVc = parcelRequire("7IzVc");

var $Iq2i6 = parcelRequire("Iq2i6");

var $2Sxce = parcelRequire("2Sxce");
var $55c0b04dd9e78091684f39ba8d9ce4c7$export$b51a7f8a2714fde9;
(function(DayOfTheWeek) {
    DayOfTheWeek["SUN"] = "0";
    DayOfTheWeek["MON"] = "1";
    DayOfTheWeek["TUE"] = "2";
    DayOfTheWeek["WED"] = "3";
    DayOfTheWeek["THU"] = "4";
    DayOfTheWeek["FRI"] = "5";
    DayOfTheWeek["SAT"] = "6";
})($55c0b04dd9e78091684f39ba8d9ce4c7$export$b51a7f8a2714fde9 || ($55c0b04dd9e78091684f39ba8d9ce4c7$export$b51a7f8a2714fde9 = {
}));
var $55c0b04dd9e78091684f39ba8d9ce4c7$export$74f9512ba1f4659c;
(function(VisibilitySheduleVariant) {
    VisibilitySheduleVariant["Everyday"] = "Everyday";
    VisibilitySheduleVariant["Weekdays"] = "Weekdays";
    VisibilitySheduleVariant["Custom"] = "Custom";
})($55c0b04dd9e78091684f39ba8d9ce4c7$export$74f9512ba1f4659c || ($55c0b04dd9e78091684f39ba8d9ce4c7$export$74f9512ba1f4659c = {
}));
class $55c0b04dd9e78091684f39ba8d9ce4c7$export$fa2c9e201ef31409 {
    constructor(){
        this.сhatsVisibilityShedule = [];
        this.handleMessages = (message, sender, sendResponse)=>{
            const { type: type , payload: payload  } = message;
            switch(type){
                case 'setShedule':
                    {
                        const { chat: chat , shedule: shedule  } = payload;
                        this.setShedule(chat, shedule);
                        break;
                    }
                case 'deleteShedule':
                    {
                        const { chat: chat  } = payload;
                        chat.forEach((it)=>this.deleteShedule(it)
                        );
                        break;
                    }
            }
        };
        this.hiddenChats = [];
        this.runDaemon();
    }
    runDaemon() {
        $2Sxce.getVisibiltyShedule().then((storage)=>{
            this.сhatsVisibilityShedule = storage[$55c0b04dd9e78091684f39ba8d9ce4c7$export$fa2c9e201ef31409.STORAGE_TAG] || [];
        });
        this.updateChatsVisibility();
        this.setMessageListeners();
        this.setAlarms();
    }
    hideChat(chat) {
        this.hiddenChats.push(chat);
        $2Sxce.addHiddenChats(chat);
    }
    showChat(chat) {
        this.hiddenChats = this.hiddenChats.filter(({ id: id  })=>chat.id != id
        );
        $2Sxce.removeHiddenChats(chat);
    }
    setAlarms() {
        (/*@__PURE__*/$parcel$interopDefault($7IzVc)).alarms.clear($55c0b04dd9e78091684f39ba8d9ce4c7$export$fa2c9e201ef31409.DAEMON_NAME);
        (/*@__PURE__*/$parcel$interopDefault($7IzVc)).alarms.create($55c0b04dd9e78091684f39ba8d9ce4c7$export$fa2c9e201ef31409.DAEMON_NAME, {
            delayInMinutes: 1,
            periodInMinutes: 1
        });
        (/*@__PURE__*/$parcel$interopDefault($7IzVc)).alarms.onAlarm.addListener(({ name: name  })=>{
            if (name === $55c0b04dd9e78091684f39ba8d9ce4c7$export$fa2c9e201ef31409.DAEMON_NAME) this.updateChatsVisibility();
        });
    }
    getChatsForHide() {
        const dateTime = new Date();
        const day = dateTime.getDay();
        const time = dateTime.getHours() * 60 + dateTime.getMinutes();
        return this.сhatsVisibilityShedule.reduce((result, curr)=>{
            const [chat, chatShedule] = curr;
            const currentDayChatShedule = chatShedule[day];
            if (!currentDayChatShedule) result.push(chat);
            if (currentDayChatShedule) {
                const [start, end] = currentDayChatShedule;
                if (time <= start || time >= end) result.push(chat);
            }
            return result;
        }, []);
    }
    setShedule(chat, newShedule) {
        if (!this.сhatsVisibilityShedule.find(([{ id: id  }, _])=>id === chat.id
        )) {
            const newVisibilityShedule = [
                ...this.сhatsVisibilityShedule,
                [
                    chat,
                    newShedule
                ]
            ];
            this.updateShedule(newVisibilityShedule);
            return;
        }
        const newVisibilityShedule = this.сhatsVisibilityShedule.map(([{ id: id  }, shedule])=>chat.id === id ? [
                chat,
                newShedule
            ] : [
                chat,
                shedule
            ]
        );
        this.updateShedule(newVisibilityShedule);
    }
    updateShedule(newVisibilityShedule) {
        (/*@__PURE__*/$parcel$interopDefault($7IzVc)).storage.local.set({
            [$55c0b04dd9e78091684f39ba8d9ce4c7$export$fa2c9e201ef31409.STORAGE_TAG]: newVisibilityShedule
        }).then(()=>{
            this.сhatsVisibilityShedule = newVisibilityShedule;
            this.updateChatsVisibility();
        });
    }
    setMessageListeners() {
        (/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.onMessage.addListener(this.handleMessages);
    }
    deleteShedule(chat) {
        const newVisibilityShedule = this.сhatsVisibilityShedule.filter(([{ id: id  }, _])=>chat.id !== id
        );
        this.updateShedule(newVisibilityShedule);
    }
    updateChatsVisibility() {
        const chatsForHide = this.getChatsForHide();
        const chatsToShow = this.hiddenChats.filter((chatId)=>!chatsForHide.includes(chatId)
        );
        const newHiddenChats = chatsForHide.filter((chatId)=>!this.hiddenChats.includes(chatId)
        );
        newHiddenChats.forEach((chatId)=>this.hideChat(chatId)
        );
        chatsToShow.forEach((chatId)=>this.showChat(chatId)
        );
    }
}
$55c0b04dd9e78091684f39ba8d9ce4c7$export$fa2c9e201ef31409.STORAGE_TAG = $Iq2i6.StateItemNames.SCHEDULED_HIDDEN;
$55c0b04dd9e78091684f39ba8d9ce4c7$export$fa2c9e201ef31409.DAEMON_NAME = 'alarm_HiddenChatDaemon'; //# sourceMappingURL=VisibilitySheduler.js.map

});

parcelRequire.register("60Et5", function(module, exports) {

$parcel$export(module.exports, "construct_time_selector", () => $c57caf24739fbe3115a6b1cab0e3608d$export$e00cd29af01a7044);

var $7IzVc = parcelRequire("7IzVc");

var $1oTL5 = parcelRequire("1oTL5");
const $c57caf24739fbe3115a6b1cab0e3608d$var$TIME_INTERVAL = 30;
const $c57caf24739fbe3115a6b1cab0e3608d$var$DEFAULT_SELECTED_VALUE = 480;
function $c57caf24739fbe3115a6b1cab0e3608d$export$e00cd29af01a7044(config) {
    const { onChange: onChange , id: id , includeNone: includeNone , value: value = $c57caf24739fbe3115a6b1cab0e3608d$var$DEFAULT_SELECTED_VALUE , disableAboveSelected: disableAboveSelected  } = config;
    const defaultSelectedValue = includeNone ? undefined : value;
    let timeSelectorOptions = $c57caf24739fbe3115a6b1cab0e3608d$var$getTimeSelectorOptions($c57caf24739fbe3115a6b1cab0e3608d$var$TIME_INTERVAL, defaultSelectedValue, disableAboveSelected);
    if (includeNone) timeSelectorOptions = $c57caf24739fbe3115a6b1cab0e3608d$var$addNoneOption(timeSelectorOptions);
    const attributes = {
        class: "ZenMode__select"
    };
    if (id) attributes["id"] = id;
    if (value) attributes["value"] = value.toString();
    const timeSelector = $1oTL5.DOM.create_el({
        tag: "select",
        attributes: attributes
    });
    timeSelector.onchange = onChange;
    timeSelectorOptions.forEach((option)=>{
        timeSelector.appendChild(option);
    });
    return timeSelector;
}
function $c57caf24739fbe3115a6b1cab0e3608d$var$addNoneOption(options) {
    const noneOption = $1oTL5.DOM.create_el({
        tag: "option",
        attributes: {
            value: "none"
        },
        text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_visibilty_sheduler_time_selector_none")
    });
    return [
        noneOption,
        ...options
    ];
}
function $c57caf24739fbe3115a6b1cab0e3608d$var$getTimeSelectorOptions(timeInterval, defaultSelected, disableAboveSelected) {
    let time = 0;
    const timeList = [];
    while(time < 1440){
        timeList.push(time);
        time += timeInterval;
    }
    const timeOptions = timeList.map((value)=>{
        const hours24 = Math.floor(value / 60);
        const minutes = value % 60;
        const minutesString = minutes < 10 ? `0${minutes}` : minutes;
        const timePostfix = hours24 < 12 ? "AM" : "PM";
        const hours12 = hours24 % 12 || 12;
        const label = `${hours12}:${minutesString} ${timePostfix}`;
        const isDisabled = defaultSelected && disableAboveSelected && value < defaultSelected;
        const optionElement = $1oTL5.DOM.create_el({
            tag: "option",
            attributes: {
                value: value.toString()
            },
            text: label
        });
        if (defaultSelected === value) optionElement.setAttribute("selected", "1");
        if (isDisabled) optionElement.setAttribute("disabled", "1");
        return optionElement;
    });
    return timeOptions;
} //# sourceMappingURL=TimeSelector.js.map

});


parcelRequire.register("4vgyo", function(module, exports) {

$parcel$export(module.exports, "constructDebugVersionInfo", () => $93ff529f0cb6f4e6d3ad285eae790705$export$109c594d6c429e6b);

var $3h5SU = parcelRequire("3h5SU");

var $Iq2i6 = parcelRequire("Iq2i6");
function $93ff529f0cb6f4e6d3ad285eae790705$export$109c594d6c429e6b() {
    const el = document.createElement("div");
    $3h5SU.set_el_attributes(el, {
        id: $Iq2i6.Selectors.ZM_DEBUG_MODE_INDICATOR.substring(1)
    });
    el.innerText = "";
    el.style.margin = "0 10px";
    return el;
} //# sourceMappingURL=construct-debug-version-info.js.map

});


parcelRequire.register("43WeT", function(module, exports) {

$parcel$export(module.exports, "TIME", () => $8583dc78b9594f8378d255316b24f60f$export$af8a555b2c4ba07e);
const $8583dc78b9594f8378d255316b24f60f$export$af8a555b2c4ba07e = {
    SECONDS_IN_ONE_MINUTE: 60,
    TENTH_OF_A_SECOND: 100,
    QUARTER_SECOND: 250,
    HALF_A_SECOND: 500,
    ONE_SECOND: 1000,
    TWO_SECONDS: 2000,
    THREE_SECONDS: 3000,
    FIVE_SECONDS: 5000,
    TEN_SECONDS: 10000,
    FIFTEEN_SECONDS: 15000,
    HALF_A_MINUTE: 30000,
    MS_IN_ONE_SECOND: 1000,
    TIMEOUT_MAX: 2147483647,
    ONE_MONTH_30: 2592000000
}; //# sourceMappingURL=time.js.map

});


parcelRequire.register("bjDva", function(module, exports) {

var $1oTL5 = parcelRequire("1oTL5");

var $1NYDb = parcelRequire("1NYDb");

var $Iq2i6 = parcelRequire("Iq2i6");

var $43WeT = parcelRequire("43WeT");

var $2f5Cv = parcelRequire("2f5Cv");

var $38ck6 = parcelRequire("38ck6");

var $2Sxce = parcelRequire("2Sxce");

var $24LQj = parcelRequire("24LQj");

var $6wA4v = parcelRequire("6wA4v");

var $6Ljqg = parcelRequire("6Ljqg");

var $1s4Ph = parcelRequire("1s4Ph");

var $42zOB = parcelRequire("42zOB");

var $6yWuz = parcelRequire("6yWuz");

var $55f7H = parcelRequire("55f7H");

var $5lupe = parcelRequire("5lupe");

var $4gcVu = parcelRequire("4gcVu");

var $3OHMf = parcelRequire("3OHMf");

var $20i72 = parcelRequire("20i72");

var $2gZcA = parcelRequire("2gZcA");

var $2tC57 = parcelRequire("2tC57");
const $05ff4e865e9172577e473d322649542e$var$CONTACT_CONTEXT_MENU_CUSTOM_ITEMS_COUNT = 3;
const $05ff4e865e9172577e473d322649542e$var$CHAT_CONTEXT_MENU_CUSTOM_ITEMS_COUNT = 1;
let $05ff4e865e9172577e473d322649542e$export$6420db14e714e6bd = false;
// Attaches DOM observer and checks for tf conditions:
const $05ff4e865e9172577e473d322649542e$var$observer = new MutationObserver(async (mutations)=>{
    mutations.filter((mutation)=>mutation.type !== 'attributes'
    ).forEach((mutation)=>{
        [
            ...mutation.addedNodes
        ].filter((node)=>node && $05ff4e865e9172577e473d322649542e$var$node_is_Element(node)
        ).forEach(async (node)=>{
            const htmlEl = node;
            // If WA contact context menu is present - Attach 'Hide contact' item.
            if ($1oTL5.DOM.get_el($Iq2i6.Selectors.WA_CONTACT_CTX_MENU) === htmlEl) {
                // Explain: If there is no hovered el in the DOM - it means the WA ctx menu has been..
                // invoked from chat area, not contact list area.
                const hoveredDivEl = $2gZcA.get_hovered_contact_el();
                if (hoveredDivEl) $38ck6.attach_hide_contact_item(htmlEl);
                else $42zOB.attachUIToMainContactCtxMenu(htmlEl);
                const customMenuItemsCount = hoveredDivEl ? $05ff4e865e9172577e473d322649542e$var$CONTACT_CONTEXT_MENU_CUSTOM_ITEMS_COUNT : $05ff4e865e9172577e473d322649542e$var$CHAT_CONTEXT_MENU_CUSTOM_ITEMS_COUNT;
                $20i72.fixContextMenuPosition(htmlEl, customMenuItemsCount);
            }
            // On page load - hides the contacts that were hidden by user previously.
            if ($1oTL5.DOM.get_el($Iq2i6.Selectors.WA_CONTACT_LIST, htmlEl)) {
                if (!$05ff4e865e9172577e473d322649542e$export$6420db14e714e6bd) {
                    $2f5Cv.injectWAPageProvider();
                    $05ff4e865e9172577e473d322649542e$export$6420db14e714e6bd = true;
                }
                const zenModeStatus = await $6yWuz.get_Zen_mode_status();
                const hiddenChats = await $2Sxce.getHiddenChats();
                const zenMorningChat = await $6wA4v.getZenMorningChat();
                const smartMuteStatus = await $6Ljqg.getSmartMuteStatus();
                const debugModeStatus = await $2tC57.getDebugModeStatus();
                // Explain: Wait for all rendering and animations to complete; otherwise - buggy.
                setTimeout(()=>{
                    // Zen mode activation
                    $6yWuz.toggle_Zen_mode_on_page(zenModeStatus);
                    // Hidden chats
                    hiddenChats.forEach((hiddenChat)=>{
                        $24LQj.setChatVisibility(hiddenChat, false, smartMuteStatus);
                        const chatEl = $3OHMf.get_contact_el_by_chat_name(hiddenChat.title);
                        if (!chatEl) return;
                        $55f7H.renderHiddenLabel(chatEl);
                    });
                    // Check smart mute
                    $6Ljqg.setSmartMuteStatus(smartMuteStatus);
                    $2tC57.setDebugModeStatus(debugModeStatus);
                    // Open zen morning contact
                    $6wA4v.checkZenMorningChatState(zenMorningChat);
                }, $43WeT.TIME.ONE_SECOND);
            }
            const menuEl = htmlEl.closest($Iq2i6.Selectors.WA_GENERAL_CTX_MENU);
            if (menuEl) $1s4Ph.trackArchivedChatsVisibility(menuEl);
            if (htmlEl.classList.contains($Iq2i6.Selectors.WA_CONTACT_CONTAINER.substring(1))) {
                const chatElInfo = htmlEl.querySelector($Iq2i6.Selectors.WA_CONTACT_INFO_CONTAINER);
                if (chatElInfo) {
                    const rawChatTitle = $5lupe.get_chat_el_raw_title(chatElInfo);
                    $4gcVu.findChatByTitle(rawChatTitle, async (chat)=>{
                        if (!chat || !await $2Sxce.isHiddenChat(chat)) return;
                        $55f7H.renderHiddenLabel(chatElInfo);
                    });
                }
            }
        });
    });
});
$05ff4e865e9172577e473d322649542e$var$observer.observe(document.body, {
    attributes: true,
    attributeFilter: [
        "style"
    ],
    attributeOldValue: true,
    childList: true,
    subtree: true
});
$1NYDb.devprint("STATUS: DOM observers attached.");
function $05ff4e865e9172577e473d322649542e$var$node_is_Element(node) {
    return node instanceof Element;
} //# sourceMappingURL=attach-DOM-observers.js.map

});
parcelRequire.register("2f5Cv", function(module, exports) {

$parcel$export(module.exports, "injectSocketWrapper", () => $49b603e2bbbe2c2199dc9bf184423bea$export$e6bf1ed6b63f6d50);
$parcel$export(module.exports, "injectWAPageProvider", () => $49b603e2bbbe2c2199dc9bf184423bea$export$d5581ded2a558d92);

var $7IzVc = parcelRequire("7IzVc");

var $3h5SU = parcelRequire("3h5SU");
function $49b603e2bbbe2c2199dc9bf184423bea$var$createScript(localScript) {
    const scriptEl = document.createElement('script');
    $3h5SU.set_el_attributes(scriptEl, {
        src: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.getURL(localScript)
    });
    return scriptEl;
}
function $49b603e2bbbe2c2199dc9bf184423bea$export$d5581ded2a558d92() {
    const root = document.head || document.documentElement;
    root.appendChild($49b603e2bbbe2c2199dc9bf184423bea$var$createScript('whatsapp/ExternalConnector.js'));
}
function $49b603e2bbbe2c2199dc9bf184423bea$export$e6bf1ed6b63f6d50() {
    const root = document.head || document.documentElement;
    root.appendChild($49b603e2bbbe2c2199dc9bf184423bea$var$createScript('whatsapp/WebSocketWrapper.js'));
} //# sourceMappingURL=ExternalInjector.js.map

});

parcelRequire.register("24LQj", function(module, exports) {

$parcel$export(module.exports, "setChatVisibility", () => $443e11a608cd2a534be52292152d40b4$export$a9f84210fafcc5c1);

var $4gcVu = parcelRequire("4gcVu");

var $2Sxce = parcelRequire("2Sxce");

var $6Ljqg = parcelRequire("6Ljqg");
function $443e11a608cd2a534be52292152d40b4$export$a9f84210fafcc5c1(chat, isVisible, smartMuteStatus) {
    if (isVisible) {
        if (!smartMuteStatus) $4gcVu.unmuteChatsLocally([
            chat
        ]);
        $4gcVu.unArchiveChatLocally(chat);
    } else {
        if (!smartMuteStatus) $4gcVu.muteChatLocally(chat);
        $4gcVu.archiveChatLocally(chat);
    }
}
$2Sxce.subscribeForeverHiddenChatChanges(async (hiddenChats, oldHiddenChats)=>{
    const smartMuteStatus = await $6Ljqg.getSmartMuteStatus();
    const hiddenChatIds = hiddenChats.map((c)=>c.id
    );
    hiddenChats.forEach((hiddenChat)=>$443e11a608cd2a534be52292152d40b4$export$a9f84210fafcc5c1(hiddenChat, false, smartMuteStatus)
    );
    oldHiddenChats.forEach((hiddenChat)=>{
        if (!hiddenChatIds.includes(hiddenChat.id)) $443e11a608cd2a534be52292152d40b4$export$a9f84210fafcc5c1(hiddenChat, true, smartMuteStatus);
    });
}); //# sourceMappingURL=set-chat-visibility.js.map

});

parcelRequire.register("1s4Ph", function(module, exports) {

$parcel$export(module.exports, "trackArchivedChatsVisibility", () => $2fbc982acc84984155799ff65352e5b5$export$26b5a460ac755fe3);

var $2Sxce = parcelRequire("2Sxce");

var $4gcVu = parcelRequire("4gcVu");

var $Iq2i6 = parcelRequire("Iq2i6");

var $7pCU8 = parcelRequire("7pCU8");
function $2fbc982acc84984155799ff65352e5b5$export$26b5a460ac755fe3(menuEl) {
    var _a, _b;
    const archivedMenuItem = (_b = (_a = menuEl.children[0]) === null || _a === void 0 ? void 0 : _a.children[3]) === null || _b === void 0 ? void 0 : _b.children[0];
    if (!archivedMenuItem) return $7pCU8.process_error(new Error('Not archive menu item'));
    const archivedItemOnClick = async ()=>{
        archivedMenuItem.removeEventListener('click', archivedItemOnClick); // Clear memory
        const hiddenChats = await $2Sxce.getHiddenChats();
        hiddenChats.forEach((hiddenChat)=>{
            $4gcVu.unArchiveChatLocally(hiddenChat);
        });
        setTimeout(()=>{
            const buttonBack = document.querySelector($Iq2i6.Selectors.WA_BACK_BTN);
            if (!buttonBack) return $7pCU8.process_error(new Error('The Back button is required' + buttonBack));
            const backOnClick = ()=>{
                buttonBack.removeEventListener('click', backOnClick); // Clear memory
                hiddenChats.forEach((hiddenChat)=>{
                    $4gcVu.archiveChatLocally(hiddenChat);
                });
                const archivedChatsLeftBlock = buttonBack.closest($Iq2i6.Selectors.WA_LEFT_CONTAINER);
                // @ts-ignore
                setTimeout(()=>archivedChatsLeftBlock.style.setProperty('display', 'none')
                );
            };
            buttonBack.addEventListener('click', backOnClick, true);
        });
    };
    archivedMenuItem.addEventListener('click', archivedItemOnClick, true);
} //# sourceMappingURL=track-archived-chats-visibility.js.map

});

parcelRequire.register("42zOB", function(module, exports) {

$parcel$export(module.exports, "attachUIToMainContactCtxMenu", () => $84cb205ba4c4c97ee63954235512247c$export$791cacbe5ceab493);

var $1oTL5 = parcelRequire("1oTL5");

var $2gZcA = parcelRequire("2gZcA");

var $7pCU8 = parcelRequire("7pCU8");

var $Iq2i6 = parcelRequire("Iq2i6");

var $4gcVu = parcelRequire("4gcVu");

var $6yWuz = parcelRequire("6yWuz");

var $7IzVc = parcelRequire("7IzVc");

var $3kKpl = parcelRequire("3kKpl");

var $3wQgT = parcelRequire("3wQgT");

var $13vOd = parcelRequire("13vOd");
function $84cb205ba4c4c97ee63954235512247c$export$791cacbe5ceab493(node) {
    const hoveredDivEl = $2gZcA.get_hovered_contact_el();
    if (hoveredDivEl) return;
    const waContactCtxMenuEl = $1oTL5.DOM.get_el($Iq2i6.Selectors.WA_CONTACT_CTX_MENU);
    if (!waContactCtxMenuEl) {
        $7pCU8.throw_DOM_error($Iq2i6.Selectors.WA_CONTACT_CTX_MENU, "WA_CONTACT_CTX_MENU");
        return;
    }
    const waContactCtxMenuListEl = $1oTL5.DOM.get_el("ul > div", waContactCtxMenuEl);
    if (!waContactCtxMenuListEl) {
        $7pCU8.throw_DOM_error($Iq2i6.Selectors.WA_CONTACT_CTX_MENU, "WA_CONTACT_CTX_MENU");
        return;
    }
    $4gcVu.getOpenedChat(async (openedChat)=>{
        const zenModeIcon = await $3wQgT.constructZenModeLogoIcon();
        zenModeIcon.classList.add('ZenModeLogoInlined');
        const zenModeItemEl = $3kKpl.constructFakeCtxMenuItem([
            (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage('ZM_ctxMenuItem_zenMode'),
            zenModeIcon
        ], ()=>{
            $6yWuz.toggle_Zen_mode();
            $13vOd.hide_WA_context_menu();
        });
        zenModeItemEl.classList.add('first');
        waContactCtxMenuListEl.append(zenModeItemEl);
        waContactCtxMenuListEl.click(); // Corrects ctx menu visualization.
    });
} //# sourceMappingURL=attachUIToMainContactCtxMenu.js.map

});

parcelRequire.register("5lupe", function(module, exports) {

$parcel$export(module.exports, "get_chat_el_raw_title", () => $02d55c272289ced230d229a84ca2ea46$export$7eb7b79c205555a);

var $5496x = parcelRequire("5496x");
function $02d55c272289ced230d229a84ca2ea46$export$7eb7b79c205555a(el) {
    return $5496x.get_contact_el_particles_AND_is_it_read(el).nameEl.getAttribute('title');
} //# sourceMappingURL=get-contact-el-name.js.map

});
parcelRequire.register("5496x", function(module, exports) {

$parcel$export(module.exports, "get_contact_el_particles_AND_is_it_read", () => $a67b5e2e0d66485a4626c4dfb16b49e2$export$4874a1047e69f87);

var $7pCU8 = parcelRequire("7pCU8");

var $Iq2i6 = parcelRequire("Iq2i6");
function $a67b5e2e0d66485a4626c4dfb16b49e2$export$4874a1047e69f87(contactEl) {
    if (!contactEl) $7pCU8.process_error(Error(`Contact element is required.`));
    const [topSectionEl, bottomSectionEl] = contactEl.children;
    if (!topSectionEl || !bottomSectionEl) throw new Error('Contact element need includes top and bottom sections');
    const [nameEl, timeEl, lastMsgEl] = [
        topSectionEl === null || topSectionEl === void 0 ? void 0 : topSectionEl.querySelector($Iq2i6.Selectors.WA_CONTACT_NAME),
        topSectionEl === null || topSectionEl === void 0 ? void 0 : topSectionEl.children[1],
        bottomSectionEl === null || bottomSectionEl === void 0 ? void 0 : bottomSectionEl.children[0]
    ];
    // prettier-ignore
    // eslint-disable-next-line max-len
    return {
        nameEl: nameEl,
        timeEl: timeEl,
        lastMsgEl: lastMsgEl,
        bottomSectionEl: bottomSectionEl
    };
} //# sourceMappingURL=get-contact-el-particles.js.map

});


parcelRequire.register("3OHMf", function(module, exports) {

$parcel$export(module.exports, "get_contact_el_by_chat_name", () => $7d7135e8d8d24032c0261540b4a6eb98$export$fad1ff835cc57495);

var $Iq2i6 = parcelRequire("Iq2i6");
function $7d7135e8d8d24032c0261540b4a6eb98$export$fad1ff835cc57495(chatTitle) {
    const titleEl = document.querySelector(`${$Iq2i6.Selectors.WA_CONTACT_CONTAINER}[title="${chatTitle}"]`);
    if (!titleEl) return null;
    return titleEl.closest($Iq2i6.Selectors.WA_CONTACT_INFO_CONTAINER);
} //# sourceMappingURL=get-contact-el-by-contact-name.js.map

});

parcelRequire.register("20i72", function(module, exports) {

$parcel$export(module.exports, "fixContextMenuPosition", () => $41de5894abfa24299fe75f287da06bce$export$b5d72ed6c7564308);
const $41de5894abfa24299fe75f287da06bce$var$CONTEXT_MENU_BOTTOM_MARGIN = 32;
const $41de5894abfa24299fe75f287da06bce$var$MENU_PADDING = 9;
const $41de5894abfa24299fe75f287da06bce$var$MENU_ITEM_HEIGHT = 40;
const $41de5894abfa24299fe75f287da06bce$export$b5d72ed6c7564308 = (htmlEl, customItemsCount)=>{
    const nativeItemsCount = htmlEl.querySelectorAll("._2qR8G._1wMaz._18oo2").length;
    const targetHeight = (customItemsCount + nativeItemsCount) * $41de5894abfa24299fe75f287da06bce$var$MENU_ITEM_HEIGHT + $41de5894abfa24299fe75f287da06bce$var$MENU_PADDING * 2;
    const rect = htmlEl.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const heightLimit = viewportHeight - $41de5894abfa24299fe75f287da06bce$var$CONTEXT_MENU_BOTTOM_MARGIN;
    if (rect.top + targetHeight >= heightLimit && !htmlEl.style.bottom) htmlEl.style.top = `${heightLimit - targetHeight}px`;
};

});


parcelRequire.register("7ACIA", function(module, exports) {

var $hc9DY = parcelRequire("hc9DY");

var $2Sxce = parcelRequire("2Sxce");

var $32V2j = parcelRequire("32V2j");

var $32V2j = parcelRequire("32V2j");

var $14PeC = parcelRequire("14PeC");

var $39tXf = parcelRequire("39tXf");

var $6Daf3 = parcelRequire("6Daf3");
let $f96838feed935a0320b9e37896532dbe$var$_zenMorningChat = null;
const $f96838feed935a0320b9e37896532dbe$var$chatListWatcher = new MutationObserver((mutations)=>{
    for(let i = mutations.length - 1; i > -1; i--){
        const m = mutations[i];
        if (m.addedNodes.length) $f96838feed935a0320b9e37896532dbe$var$onChatListUpdated(m);
    }
});
function $f96838feed935a0320b9e37896532dbe$var$cE(e) {
    return e.nodeType === Node.ELEMENT_NODE && e.tagName !== 'SVG' && e.tagName !== 'IMG' && e.tagName !== 'path' && e.id !== $32V2j.ZEN_MORNING_SUN_ID;
}
function $f96838feed935a0320b9e37896532dbe$var$onChatListUpdated(m) {
    if ($f96838feed935a0320b9e37896532dbe$var$_zenMorningChat) {
        const addedNodes = m.addedNodes;
        if (addedNodes) for(let i = addedNodes.length - 1; i > -1; i--){
            const e = addedNodes[i];
            if ($f96838feed935a0320b9e37896532dbe$var$cE(e)) $f96838feed935a0320b9e37896532dbe$var$updateChatElementState(e);
        }
    }
}
function $f96838feed935a0320b9e37896532dbe$var$updateChatElementState(e) {
    const chatNode = new $hc9DY.ChatNode(e, true, false);
    const title = chatNode.title();
    if ($f96838feed935a0320b9e37896532dbe$var$_zenMorningChat && $f96838feed935a0320b9e37896532dbe$var$_zenMorningChat.title === title) $6Daf3.setSunTo(chatNode);
    else $6Daf3.clearSun(chatNode.node);
}
function $f96838feed935a0320b9e37896532dbe$var$refreshVisibleChatsState() {
    $39tXf.getMainListChatElements().forEach($f96838feed935a0320b9e37896532dbe$var$updateChatElementState);
}
$2Sxce.subscribeForeverZenMorningChatChanges((chat)=>{
    $f96838feed935a0320b9e37896532dbe$var$_zenMorningChat = chat;
    $f96838feed935a0320b9e37896532dbe$var$refreshVisibleChatsState();
});
$14PeC.observerOn($f96838feed935a0320b9e37896532dbe$var$chatListWatcher, ()=>{
    $f96838feed935a0320b9e37896532dbe$var$refreshVisibleChatsState();
    return document.querySelector($32V2j.CHAT_LIST_SELECTOR);
}, ()=>{
    var e = document.querySelector($32V2j.CHAT_LIST_SELECTOR);
    return e ? e.hasChildNodes() : false;
}, {
    attributes: false,
    childList: true,
    subtree: true,
    characterData: false
});

});
parcelRequire.register("hc9DY", function(module, exports) {

$parcel$export(module.exports, "ChatNode", () => $091cf014542849e51c9a7ac57d6cecef$export$abd0154504c322c0);

var $32V2j = parcelRequire("32V2j");

var $32V2j = parcelRequire("32V2j");
class $091cf014542849e51c9a7ac57d6cecef$export$abd0154504c322c0 {
    static _cclass = `.${$32V2j.CHAT_NODE_CLASS}`;
    constructor(node, findClosest = true, checkIsChat = true){
        this.node = findClosest ? node.closest($091cf014542849e51c9a7ac57d6cecef$export$abd0154504c322c0._cclass) : node;
        if (checkIsChat && !this._check()) throw 'Node is not root chat element' + node.classList;
    }
    _check() {
        return this.node && this.node.classList.contains($32V2j.CHAT_NODE_CLASS);
    }
    title() {
        if (!this._titleNode) this._titleNode = this.node.querySelector($32V2j.CHAT_NODE_TITLE_SELECTOR);
        return this._titleNode.getAttribute($32V2j.CHAT_NODE_TITLE_ATTR) ?? void 0;
    }
    infoContainer() {
        if (!this._infoNode) this._infoNode = this.node.querySelector($32V2j.CHAT_NODE_INFO_SELECTOR);
        return this._infoNode;
    }
}

});

parcelRequire.register("14PeC", function(module, exports) {

$parcel$export(module.exports, "observerOn", () => $236a22e4d6d0ee23119da6c86eb135c6$export$fb7a2e817a08aadb);
function $236a22e4d6d0ee23119da6c86eb135c6$export$fb7a2e817a08aadb(observer, target, matcher, oOptions = {
}) {
    if (matcher()) observer.observe(target(), oOptions);
    else setTimeout(()=>$236a22e4d6d0ee23119da6c86eb135c6$export$fb7a2e817a08aadb(observer, target, matcher, oOptions)
    , 50);
}

});

parcelRequire.register("39tXf", function(module, exports) {

$parcel$export(module.exports, "getMainListChatElements", () => $67989dce6333b36dd91bdadab9b6fe2e$export$561afe7f1c05a8f9);

var $32V2j = parcelRequire("32V2j");
function $67989dce6333b36dd91bdadab9b6fe2e$export$561afe7f1c05a8f9() {
    return document.querySelector($32V2j.CHAT_LIST_SELECTOR)?.childNodes ?? [];
}

});

parcelRequire.register("6Daf3", function(module, exports) {

$parcel$export(module.exports, "setSunTo", () => $d9e58ea61a570df461953af1f428b197$export$cf4927c73e76e1df);
$parcel$export(module.exports, "clearSun", () => $d9e58ea61a570df461953af1f428b197$export$85362f00a519f81a);

var $32V2j = parcelRequire("32V2j");
const $d9e58ea61a570df461953af1f428b197$var$sunNode = (()=>{
    const s = document.createElement('div');
    s.innerText = '\uD83C\uDF1E';
    s.id = $32V2j.ZEN_MORNING_SUN_ID;
    return s;
})();
function $d9e58ea61a570df461953af1f428b197$export$cf4927c73e76e1df(chatNode) {
    chatNode.infoContainer().append($d9e58ea61a570df461953af1f428b197$var$sunNode);
}
function $d9e58ea61a570df461953af1f428b197$export$85362f00a519f81a(element) {
    if (element.querySelector('#' + $32V2j.ZEN_MORNING_SUN_ID)) $d9e58ea61a570df461953af1f428b197$var$sunNode.remove();
}

});


parcelRequire.register("6xybI", function(module, exports) {

var $7IzVc = parcelRequire("7IzVc");

var $6U6TO = parcelRequire("6U6TO");

var $4gcVu = parcelRequire("4gcVu");

var $2Sxce = parcelRequire("2Sxce");

var $3HH7x = parcelRequire("3HH7x");

var $3zu8t = parcelRequire("3zu8t");

var $Iq2i6 = parcelRequire("Iq2i6");

var $1oTL5 = parcelRequire("1oTL5");
let $d6ebf425022ea359f96d1ad76934e9de$var$wasShownOnboarding;
let $d6ebf425022ea359f96d1ad76934e9de$var$openedChat;
async function $d6ebf425022ea359f96d1ad76934e9de$var$getStatusOfOnboarding() {
    return Boolean(await $3zu8t.get_extn_storage_item_value($Iq2i6.StateItemNames.WAS_SHOWN_PINNED_CHATS_STATUS_ONBOARDING));
}
function $d6ebf425022ea359f96d1ad76934e9de$var$showHiddenItemIfExistNewMessage() {
    let chatPinsItems = document.getElementsByClassName('inchat-status-item');
    if (chatPinsItems) {
        for (let item of chatPinsItems)if (item.querySelector('.inchat-status-item-container').querySelector('.inchat-status-item-body').querySelector('#unreadMark')) {
            var newMessageCount = item.querySelector('.inchat-status-item-container').querySelector('.inchat-status-item-body').querySelector('#unreadMark').querySelector('span').textContent;
            if (newMessageCount != localStorage.getItem(item.id + '-unreadCount')) {
                localStorage.setItem(item.id + '-unreadCount', newMessageCount);
                localStorage.setItem(item.id, 'show');
                document.getElementById(item.id).style.display = 'block';
            }
        }
    }
}
function $d6ebf425022ea359f96d1ad76934e9de$var$getChatContainer() {
    $d6ebf425022ea359f96d1ad76934e9de$var$showHiddenItemIfExistNewMessage();
    return document.getElementById('inchat-status-container');
}
function $d6ebf425022ea359f96d1ad76934e9de$var$getSelectorFromChat(chat) {
    var _a;
    const alph = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    ];
    var newId = '';
    (_a = chat.id.split('@')[0]) === null || _a === void 0 || _a.split('').forEach((num)=>{
        newId += alph[num];
    });
    return newId;
}
function $d6ebf425022ea359f96d1ad76934e9de$var$getChatItem(chat) {
    const container = $d6ebf425022ea359f96d1ad76934e9de$var$getChatContainer();
    if (container) return container.querySelector('#' + $d6ebf425022ea359f96d1ad76934e9de$var$getSelectorFromChat(chat));
    else return null;
}
function $d6ebf425022ea359f96d1ad76934e9de$var$injectContainerInChat() {
    let chatMessagesDiv = document.getElementsByClassName('_2gzeB')[0];
    if (chatMessagesDiv && !$d6ebf425022ea359f96d1ad76934e9de$var$getChatContainer()) {
        const div = document.createElement('div');
        div.id = 'inchat-status-container';
        chatMessagesDiv.append(div);
        return chatMessagesDiv;
    }
    return null;
}
function $d6ebf425022ea359f96d1ad76934e9de$var$createBaseItem(chat, user, status = '') {
    const showUnreadMark = chat.unreadCount > 0 || chat.unreadCount == -1;
    const isActiveStatus = status === 'composing';
    const needToShow = (showUnreadMark || isActiveStatus) && $d6ebf425022ea359f96d1ad76934e9de$var$openedChat.id != chat.id;
    var title;
    switch(status){
        case 'composing':
            if (chat.isGroup) title = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage('pinnedChatsStatus_group_typing').replace('%user_name', user.displayName).replace('%chat_title', chat.title);
            else title = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage('pinnedChatsStatus_user_typing').replace('%chat_title', chat.title);
            break;
        case 'recording':
            if (chat.isGroup) title = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage('pinnedChatsStatus_group_recording').replace('%user_name', user.displayName).replace('%chat_title', chat.title);
            else title = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage('pinnedChatsStatus_user_recording').replace('%chat_title', chat.title);
            break;
        default:
            title = chat.title;
    }
    const pinIcon = `\n<img src="${(/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.getURL('assets/whatsapp/pin.svg')}" class="pin-icon">`;
    const titleSpan = `\n<span class="inchat-title">${title}</span>`;
    const unreadMark = showUnreadMark ? `\n<div id="unreadMark">\n<span>${chat.unreadCount == -1 ? '' : chat.unreadCount}</span></div>` : '';
    const hideMark = `\n<div id="hideMark">\n<span>x</span></div>`;
    const unreadIcon = `\n<img src="${(/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.getURL('assets/whatsapp/message.svg')}" class="unread-icon" style="visibility: ${showUnreadMark ? 'visible' : 'hidden'};">`;
    const main = document.createElement('div');
    main.className = 'inchat-status-item';
    main.id = $d6ebf425022ea359f96d1ad76934e9de$var$getSelectorFromChat(chat);
    main.className += ' ' + localStorage.getItem(main.id);
    const container = document.createElement('div');
    container.className = 'inchat-status-item-container';
    const body = document.createElement('div');
    body.innerHTML = `${hideMark}${pinIcon}${titleSpan}${unreadIcon}${unreadMark}`;
    body.className = 'inchat-status-item-body';
    body.querySelector('#hideMark').addEventListener('click', function(event) {
        event.stopPropagation();
        document.getElementById(main.id).style.display = 'none';
        localStorage.setItem(main.id, 'hidden');
        localStorage.setItem(main.id + '-unreadCount', chat.unreadCount);
    });
    container.append(body);
    main.append(container);
    main.onclick = function(e) {
        localStorage.setItem(main.id, 'show');
        localStorage.setItem(main.id + '-unreadCount', 0);
        $4gcVu.openChat(chat);
        main.remove();
    };
    if (!needToShow) main.style.display = 'none';
    if (needToShow && !$d6ebf425022ea359f96d1ad76934e9de$var$wasShownOnboarding) $d6ebf425022ea359f96d1ad76934e9de$var$showOnboarding();
    return main;
}
function $d6ebf425022ea359f96d1ad76934e9de$var$showOnboarding() {
    const container = $d6ebf425022ea359f96d1ad76934e9de$var$getChatContainer();
    const onboardingContainer = $1oTL5.DOM.create_el({
        tag: "div",
        attributes: {
            id: "pinned-chat-onborading"
        },
        text: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage('pinned_chat_onboarding')
    });
    const onboardingContainerClose = $1oTL5.DOM.create_el({
        tag: "span",
        attributes: {
            id: "pinned-chat-onborading-close"
        },
        text: "x"
    });
    onboardingContainer.append(onboardingContainerClose);
    container === null || container === void 0 || container.append(onboardingContainer);
    $3zu8t.set_extn_storage_item({
        [$Iq2i6.StateItemNames.WAS_SHOWN_PINNED_CHATS_STATUS_ONBOARDING]: true
    });
    onboardingContainerClose.addEventListener("click", function() {
        onboardingContainer.remove();
    });
    setTimeout(function() {
        onboardingContainer.remove();
    }, 10000);
    $d6ebf425022ea359f96d1ad76934e9de$var$wasShownOnboarding = true;
}
function $d6ebf425022ea359f96d1ad76934e9de$var$addChat(...chat) {
    const container = $d6ebf425022ea359f96d1ad76934e9de$var$getChatContainer();
    if (container) container.append(...chat.map((c)=>$d6ebf425022ea359f96d1ad76934e9de$var$createBaseItem(c, $d6ebf425022ea359f96d1ad76934e9de$var$cachedChatStatus[c.id])
    ));
}
function $d6ebf425022ea359f96d1ad76934e9de$var$removeChat(chat) {
    var _a;
    (_a = $d6ebf425022ea359f96d1ad76934e9de$var$getChatItem(chat)) === null || _a === void 0 || _a.remove();
}
function $d6ebf425022ea359f96d1ad76934e9de$var$hasChat(chat) {
    //console.log('hasChat', chat, getChatItem(chat));
    return Boolean($d6ebf425022ea359f96d1ad76934e9de$var$getChatItem(chat));
}
const $d6ebf425022ea359f96d1ad76934e9de$var$cachedChatStatus = {
};
function $d6ebf425022ea359f96d1ad76934e9de$var$updateChat(chat, user, status = '') {
    var _a;
    if (!status) status = $d6ebf425022ea359f96d1ad76934e9de$var$cachedChatStatus[chat.id];
    else $d6ebf425022ea359f96d1ad76934e9de$var$cachedChatStatus[chat.id] = status;
    (_a = $d6ebf425022ea359f96d1ad76934e9de$var$getChatItem(chat)) === null || _a === void 0 || _a.remove();
    const container = $d6ebf425022ea359f96d1ad76934e9de$var$getChatContainer();
    container === null || container === void 0 || container.insertBefore($d6ebf425022ea359f96d1ad76934e9de$var$createBaseItem(chat, user, status), container.firstChild);
}
$6U6TO.WWEvents.on($3HH7x.InternalEvent.CHAT_CHANGED_STATUS, (chat, user, status)=>{
    if ($d6ebf425022ea359f96d1ad76934e9de$var$hasChat(chat)) //console.log('New Status for ', chat.name, status)
    $d6ebf425022ea359f96d1ad76934e9de$var$updateChat(chat, user, status);
});
$6U6TO.WWEvents.on($3HH7x.InternalEvent.CHAT_CHANGED_PIN, (chat)=>{
    if ($d6ebf425022ea359f96d1ad76934e9de$var$hasChat(chat)) {
        if (!chat.pinned) $d6ebf425022ea359f96d1ad76934e9de$var$removeChat(chat);
    } else if (chat.pinned) $d6ebf425022ea359f96d1ad76934e9de$var$addChat(chat);
});
$6U6TO.WWEvents.on($3HH7x.InternalEvent.CHAT_CHANGED_UNREAD_COUNT, (chat)=>{
    //console.log("CHAT_CHANGED_UNREAD_COUNT", chat);
    if ($d6ebf425022ea359f96d1ad76934e9de$var$hasChat(chat)) $d6ebf425022ea359f96d1ad76934e9de$var$updateChat(chat, chat);
});
let $d6ebf425022ea359f96d1ad76934e9de$var$injectionInterval;
function $d6ebf425022ea359f96d1ad76934e9de$var$disableStatuses() {
    if ($d6ebf425022ea359f96d1ad76934e9de$var$injectionInterval) clearInterval($d6ebf425022ea359f96d1ad76934e9de$var$injectionInterval);
    const container = $d6ebf425022ea359f96d1ad76934e9de$var$getChatContainer();
    if (container) container.remove();
}
async function $d6ebf425022ea359f96d1ad76934e9de$var$enableStatuses() {
    //console.log("ENABLING STATUSES");
    $d6ebf425022ea359f96d1ad76934e9de$var$wasShownOnboarding = await $d6ebf425022ea359f96d1ad76934e9de$var$getStatusOfOnboarding();
    $d6ebf425022ea359f96d1ad76934e9de$var$injectionInterval = setInterval(async function() {
        if ($d6ebf425022ea359f96d1ad76934e9de$var$injectContainerInChat()) {
            //console.log("Injecting container in chat");
            $d6ebf425022ea359f96d1ad76934e9de$var$openedChat = await new Promise((resolve)=>$4gcVu.getOpenedChat(resolve)
            );
            //console.log(openedChat);
            let pinnedChats = await $4gcVu.getPinnedChats();
            //console.log("Getting pinned chats", pinnedChats);
            $d6ebf425022ea359f96d1ad76934e9de$var$addChat(...pinnedChats);
        }
    }, 100);
}
$2Sxce.subscribeForeverPinnedChatsStatusChanges((enabled)=>{
    if (enabled) $d6ebf425022ea359f96d1ad76934e9de$var$enableStatuses();
    else $d6ebf425022ea359f96d1ad76934e9de$var$disableStatuses();
}); //# sourceMappingURL=InchatPinsStatus.js.map

});



parcelRequire("Cywlu");
})();
