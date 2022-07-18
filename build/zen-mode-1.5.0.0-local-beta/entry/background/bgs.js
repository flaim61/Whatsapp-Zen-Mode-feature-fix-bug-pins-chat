(function () {
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
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


var $7IzVc = parcelRequire("7IzVc");

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


(/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.onInstalled.addListener((details)=>{
    if (details.reason !== "update") return;
    $75605af2bd24a8f997f225d6e3053d25$export$3e230dcbe028f88e({
        [$178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.RELEASE_NOTES_VIEWED]: false
    });
}); //# sourceMappingURL=read-release-notes-bgs.js.map



var $7IzVc = parcelRequire("7IzVc");
// 1. Makes extn icon active on https://web.whatsapp.com/; disabled otherwise.
const $cebe3e013d20f009d58e300d4a35db4a$var$reloadReasons = new Set([
    "install",
    "update"
]);
(/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.onInstalled.addListener(async function({ reason: reason  }) {
    if ($cebe3e013d20f009d58e300d4a35db4a$var$reloadReasons.has(reason)) {
        const level = await (/*@__PURE__*/$parcel$interopDefault($7IzVc)).notifications.getPermissionLevel();
        const manifest = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.getManifest();
        const name = manifest.name;
        const version = manifest.version;
        Notification.requestPermission();
        if (level === "granted") (/*@__PURE__*/$parcel$interopDefault($7IzVc)).notifications.create({
            title: `${name} ${version}`,
            message: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_update_notification_message"),
            iconUrl: (/*@__PURE__*/$parcel$interopDefault($7IzVc)).extension.getURL("assets/logo/logo.png"),
            type: "basic",
            buttons: [
                {
                    title: `${String.fromCharCode(8207)}${(/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage("ZM_update_notification_ok_button_label")}`
                }
            ]
        });
        else (/*@__PURE__*/$parcel$interopDefault($7IzVc)).tabs.create({
            url: "onboarding.html"
        });
    }
    (/*@__PURE__*/$parcel$interopDefault($7IzVc)).declarativeContent.onPageChanged.removeRules(undefined, function() {
        (/*@__PURE__*/$parcel$interopDefault($7IzVc)).declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new (/*@__PURE__*/$parcel$interopDefault($7IzVc)).declarativeContent.PageStateMatcher({
                        pageUrl: {
                            hostEquals: "web.whatsapp.com",
                            schemes: [
                                "https"
                            ]
                        }
                    }), 
                ],
                actions: [
                    new (/*@__PURE__*/$parcel$interopDefault($7IzVc)).declarativeContent.ShowPageAction()
                ]
            }, 
        ]);
    });
}); //# sourceMappingURL=activate-extn-icon.js.map



var $7IzVc = parcelRequire("7IzVc");
var $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$exports = {};
// shim for using process in browser
var $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$var$process = $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$exports = {
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


const $ba868928026753b9d1b1a0ba4fd930e2$export$6f7c4fd0f02f4bbb = {
    prod: ()=>false
    ,
    dev: ()=>!$ba868928026753b9d1b1a0ba4fd930e2$export$6f7c4fd0f02f4bbb.prod()
    ,
    webApp: ()=>!$ba868928026753b9d1b1a0ba4fd930e2$export$6f7c4fd0f02f4bbb.server() && !$ba868928026753b9d1b1a0ba4fd930e2$export$6f7c4fd0f02f4bbb.extn()
    ,
    server: ()=>$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$exports && $7aba3dcfae3cc0fd0a24d7c5cb2bec0a$exports.versions && !!$7aba3dcfae3cc0fd0a24d7c5cb2bec0a$exports.versions.node
    ,
    extn: ()=>$ba868928026753b9d1b1a0ba4fd930e2$export$6f7c4fd0f02f4bbb.extnBS() || $ba868928026753b9d1b1a0ba4fd930e2$export$6f7c4fd0f02f4bbb.extnCS()
    ,
    extnBS: ()=>Boolean(chrome && chrome.permissions !== undefined)
    ,
    extnCS: ()=>Boolean(chrome && chrome.permissions === undefined && chrome.storage)
};
// eslint-disable-next-line functional/immutable-data
globalThis.Env = $ba868928026753b9d1b1a0ba4fd930e2$export$6f7c4fd0f02f4bbb; //# sourceMappingURL=env.js.map


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
    if (!$ba868928026753b9d1b1a0ba4fd930e2$export$6f7c4fd0f02f4bbb.dev()) return;
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




function $fd82251cdb016b17f286e893650ce49a$export$e97d7ee1900b5400() {
    const defaultState = [
        {
            key: $178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.HIDDEN_CONTACTS,
            defaultValue: []
        },
        {
            key: $178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.RELEASE_NOTES_VIEWED,
            defaultValue: false
        },
        {
            key: $178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.ZEN_MODE_STATUS,
            defaultValue: false
        },
        {
            key: $178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.SMART_MUTE_STATUS,
            defaultValue: false
        },
        {
            key: $178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.SETTINGS_MENU,
            defaultValue: false
        },
        {
            key: $178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.SCHEDULED_HIDDEN,
            defaultValue: {
                chats: {
                },
                hidden: []
            }
        },
        {
            key: $178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.PINNED_CHATS_STATUS_ENABLED,
            defaultValue: true
        }, 
    ];
    // https://github.com/typescript-eslint/typescript-eslint/issues/3116 .
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    defaultState.forEach(async (descr)=>{
        const currentValue = await $75605af2bd24a8f997f225d6e3053d25$export$bb57858f777bdbc5($178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.HIDDEN_CONTACTS);
        if (currentValue === undefined) $75605af2bd24a8f997f225d6e3053d25$export$3e230dcbe028f88e({
            [descr.key]: descr.defaultValue
        });
    });
} //# sourceMappingURL=default-state.js.map



$3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c("STATUS: State machine running.");
// 0. Sets default state for state items that are undefined.
$fd82251cdb016b17f286e893650ce49a$export$e97d7ee1900b5400();
// 1.1. Kb shortcut.
(/*@__PURE__*/$parcel$interopDefault($7IzVc)).commands.onCommand.addListener((command)=>{
    $3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c(`STATUS: ${command} command received from keyboard`);
    $1724c5be4cdd4cfb57ea785ab83d7ce6$var$check_message_AND_run_procedure(command);
});
// 1.2. Extn icon click.
(/*@__PURE__*/$parcel$interopDefault($7IzVc)).pageAction.onClicked.addListener(()=>{
    $3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c(`STATUS: page action click received`);
    $1724c5be4cdd4cfb57ea785ab83d7ce6$var$check_message_AND_run_procedure($178a527f21424d31065cefc09ec3ec96$export$211ed39b03f3f464.TOGGLE_ZEN_MODE);
});
// 1.3. Edle state listeners.
(/*@__PURE__*/$parcel$interopDefault($7IzVc)).idle.onStateChanged.addListener((idleState)=>{
    switch(idleState){
        case "active":
            $1724c5be4cdd4cfb57ea785ab83d7ce6$var$check_message_AND_run_procedure($178a527f21424d31065cefc09ec3ec96$export$211ed39b03f3f464.CHECK_ZENMORNING);
            break;
    }
});
async function $1724c5be4cdd4cfb57ea785ab83d7ce6$var$check_message_AND_run_procedure(commandOrMessage) {
    // @ts-ignore
    if (!Object.values($178a527f21424d31065cefc09ec3ec96$export$211ed39b03f3f464).includes(commandOrMessage)) return;
    const tabs = await (/*@__PURE__*/$parcel$interopDefault($7IzVc)).tabs.query({
        url: '*://web.whatsapp.com/*'
    });
    tabs.forEach((tab)=>{
        if (!tab.id) return;
        // 2. Sends the command to CS toggle Zen mode.
        (/*@__PURE__*/$parcel$interopDefault($7IzVc)).tabs.sendMessage(tab.id, {
            action: commandOrMessage
        });
    });
    $3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c(`STATUS: ${JSON.stringify({
        action: commandOrMessage
    })} msg sent to the page`);
} //# sourceMappingURL=state-machine-bgs.js.map



var $7IzVc = parcelRequire("7IzVc");


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


const $f817aac3e19f642cefc7891f923664b9$var$tabIdToWWABridge = {
};
function $f817aac3e19f642cefc7891f923664b9$var$handleWAProviderPort(port) {
    var _a;
    if (port.sender && port.sender.tab && port.sender.tab.id) {
        const senderTabId = port.sender.tab.id;
        const tabPorts = (_a = $f817aac3e19f642cefc7891f923664b9$var$tabIdToWWABridge[senderTabId]) !== null && _a !== void 0 ? _a : {
        };
        switch(port.name){
            case $79ba1ac996accdfb0162ac0d8cb02bcc$export$ce596a179b780573.WWA_EXTENSION_CONNECTOR:
                tabPorts.extensionControllerPort = port;
                port.onMessage.addListener((message)=>{
                    const tabPorts1 = $f817aac3e19f642cefc7891f923664b9$var$tabIdToWWABridge[senderTabId];
                    if (tabPorts1 && tabPorts1.externalPagePort) tabPorts1.externalPagePort.postMessage(message);
                });
                break;
            case $79ba1ac996accdfb0162ac0d8cb02bcc$export$ce596a179b780573.WWA_EXTERNAL_CONNECTOR:
                tabPorts.externalPagePort = port;
                port.onMessage.addListener((message)=>{
                    const tabPorts1 = $f817aac3e19f642cefc7891f923664b9$var$tabIdToWWABridge[senderTabId];
                    if (tabPorts1 && tabPorts1.extensionControllerPort) tabPorts1.extensionControllerPort.postMessage(message);
                });
                break;
            case $79ba1ac996accdfb0162ac0d8cb02bcc$export$ce596a179b780573.WWA_EVENTS_CONNECTOR:
                if (port.sender.id) tabPorts.eventsPagePort = port;
                port.onMessage.addListener((message)=>{
                    const tabPorts1 = $f817aac3e19f642cefc7891f923664b9$var$tabIdToWWABridge[senderTabId];
                    if (tabPorts1 && tabPorts1.eventsPagePort) tabPorts1.eventsPagePort.postMessage(message);
                });
                break;
        }
        $f817aac3e19f642cefc7891f923664b9$var$tabIdToWWABridge[senderTabId] = tabPorts;
    }
}
(/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.onConnect.addListener(function(port) {
    $f817aac3e19f642cefc7891f923664b9$var$handleWAProviderPort(port);
});
(/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.onConnectExternal.addListener(function(externalPort) {
    $f817aac3e19f642cefc7891f923664b9$var$handleWAProviderPort(externalPort);
});
(/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.onMessageExternal.addListener(function(message, sender) {
});
(/*@__PURE__*/$parcel$interopDefault($7IzVc)).runtime.onMessage.addListener(function(message) {
    const { type: type , payload: payload  } = message;
    if (type === 'setAlarm') (/*@__PURE__*/$parcel$interopDefault($7IzVc)).alarms.create(payload.chat.id, {
        delayInMinutes: payload.delay
    });
});
async function $f817aac3e19f642cefc7891f923664b9$var$alarmsWorker(alarmInfo) {
    const hiddenContacts = await $75605af2bd24a8f997f225d6e3053d25$export$bb57858f777bdbc5($178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.HIDDEN_CONTACTS);
    if (!hiddenContacts) return;
    const currentChat = hiddenContacts.find((item)=>item.id === alarmInfo.name
    );
    hiddenContacts.splice(hiddenContacts.findIndex((item)=>item.id === alarmInfo.name
    ), 1);
    (/*@__PURE__*/$parcel$interopDefault($7IzVc)).tabs.query({
    }).then((tabs)=>{
        if (tabs && tabs.length) tabs.forEach((tab)=>{
            (/*@__PURE__*/$parcel$interopDefault($7IzVc)).tabs.sendMessage(tab.id, {
                type: 'unhideChat',
                payload: {
                    chat: currentChat
                }
            });
        });
    });
}
(/*@__PURE__*/$parcel$interopDefault($7IzVc)).alarms.onAlarm.addListener(function(alarmInfo) {
    if (alarmInfo.name !== 'alarm_HiddenChatDaemon') $f817aac3e19f642cefc7891f923664b9$var$alarmsWorker(alarmInfo);
});
function $f817aac3e19f642cefc7891f923664b9$var$closeCurrentTab() {
    (/*@__PURE__*/$parcel$interopDefault($7IzVc)).tabs.query({
        active: true,
        currentWindow: true
    }).then((tabs)=>{
        const curTabId = tabs[0].id;
        (/*@__PURE__*/$parcel$interopDefault($7IzVc)).tabs.remove(curTabId);
    });
} //# sourceMappingURL=BackgroundBridge.js.map



var $7IzVc = parcelRequire("7IzVc");




var $7IzVc = parcelRequire("7IzVc");
function $5e9d5ede18b7f82894e7ff4ac7a72831$export$643645ab66de58a9(onChanged) {
    $5e9d5ede18b7f82894e7ff4ac7a72831$var$subToStorageChangesForever($178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.HIDDEN_CONTACTS, (changes)=>{
        onChanged(changes.newValue, changes.oldValue);
    });
}
function $5e9d5ede18b7f82894e7ff4ac7a72831$export$3e9cbf693d3aad25(onChanged) {
    $5e9d5ede18b7f82894e7ff4ac7a72831$var$subToStorageChangesForever($178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.ZEN_MORNING_CHAT, (changes)=>{
        onChanged(changes.newValue);
    });
}
function $5e9d5ede18b7f82894e7ff4ac7a72831$export$873232d545959ef1(onChanged) {
    $5e9d5ede18b7f82894e7ff4ac7a72831$var$subToStorageChangesForever($178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.PINNED_CHATS_STATUS_ENABLED, (changes)=>{
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
    const hiddenChats = (_a = await $75605af2bd24a8f997f225d6e3053d25$export$bb57858f777bdbc5($178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.HIDDEN_CONTACTS)) !== null && _a !== void 0 ? _a : [];
    return hiddenChats;
}
async function $5e9d5ede18b7f82894e7ff4ac7a72831$export$39d34aa0b96cb223() {
    var _a;
    const visibiltyShedule = (_a = await $75605af2bd24a8f997f225d6e3053d25$export$bb57858f777bdbc5($178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.SCHEDULED_HIDDEN)) !== null && _a !== void 0 ? _a : [];
    return visibiltyShedule;
}
async function $5e9d5ede18b7f82894e7ff4ac7a72831$export$e935a5065530786c(chatId) {
    const chats = await $5e9d5ede18b7f82894e7ff4ac7a72831$export$dce2ca6d3072504a();
    return chats.find((c)=>c.id === chatId
    );
}
async function $5e9d5ede18b7f82894e7ff4ac7a72831$var$setHiddenChats(chats) {
    await $75605af2bd24a8f997f225d6e3053d25$export$3e230dcbe028f88e({
        [$178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.HIDDEN_CONTACTS]: chats
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
        $5e9d5ede18b7f82894e7ff4ac7a72831$export$39d34aa0b96cb223().then((storage)=>{
            this.сhatsVisibilityShedule = storage[$55c0b04dd9e78091684f39ba8d9ce4c7$export$fa2c9e201ef31409.STORAGE_TAG] || [];
        });
        this.updateChatsVisibility();
        this.setMessageListeners();
        this.setAlarms();
    }
    hideChat(chat) {
        this.hiddenChats.push(chat);
        $5e9d5ede18b7f82894e7ff4ac7a72831$export$4912ef1085d27909(chat);
    }
    showChat(chat) {
        this.hiddenChats = this.hiddenChats.filter(({ id: id  })=>chat.id != id
        );
        $5e9d5ede18b7f82894e7ff4ac7a72831$export$7ab9bd4f04cb7801(chat);
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
$55c0b04dd9e78091684f39ba8d9ce4c7$export$fa2c9e201ef31409.STORAGE_TAG = $178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.SCHEDULED_HIDDEN;
$55c0b04dd9e78091684f39ba8d9ce4c7$export$fa2c9e201ef31409.DAEMON_NAME = 'alarm_HiddenChatDaemon'; //# sourceMappingURL=VisibilitySheduler.js.map




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
        const debugModeStatus = await $75605af2bd24a8f997f225d6e3053d25$export$bb57858f777bdbc5($178a527f21424d31065cefc09ec3ec96$export$662ab677c15eaf24.DEBUG_MODE_STATUS);
        if (debugModeStatus) {
            const currentLog = await this.getLog();
            const truncatedLog = currentLog.slice(-$61e7c543e7f869a8225d09e06b1bbb88$var$MAX_LOG_ENTRIES - 1);
            const newLog = [
                ...truncatedLog,
                logItem
            ];
            await $75605af2bd24a8f997f225d6e3053d25$export$3e230dcbe028f88e({
                [$61e7c543e7f869a8225d09e06b1bbb88$var$STORAGE_LOGGER_KEY]: newLog
            });
        }
    }
    async getLog() {
        const currentLog = await $75605af2bd24a8f997f225d6e3053d25$export$bb57858f777bdbc5($61e7c543e7f869a8225d09e06b1bbb88$var$STORAGE_LOGGER_KEY) || [];
        return currentLog;
    }
    async clearLog() {
        return await $75605af2bd24a8f997f225d6e3053d25$export$3e230dcbe028f88e({
            [$61e7c543e7f869a8225d09e06b1bbb88$var$STORAGE_LOGGER_KEY]: []
        });
    }
}
const $61e7c543e7f869a8225d09e06b1bbb88$export$42a9043674814096 = new $61e7c543e7f869a8225d09e06b1bbb88$var$Logger();


new $55c0b04dd9e78091684f39ba8d9ce4c7$export$fa2c9e201ef31409();
window.onerror = function(errorMsg, url, lineNumber, column, errorObj) {
    const payload = {
        errorMsg: errorMsg,
        url: url,
        lineNumber: lineNumber,
        column: column,
        errorObj: errorObj
    };
    $61e7c543e7f869a8225d09e06b1bbb88$export$42a9043674814096.log("ERROR", "Caught background script error", payload);
    return true;
};

})();
