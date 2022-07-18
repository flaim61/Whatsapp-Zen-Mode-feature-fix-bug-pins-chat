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
let $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloStatus = null;
let $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloIcon = null;
let $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloContextImg = null;
let $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloContextList = null;
let $0ad124333bfa6c13ec319b5a597a7e6c$var$isAddedContextOptions = false;
let $0ad124333bfa6c13ec319b5a597a7e6c$var$isHideColumn = null;
let $0ad124333bfa6c13ec319b5a597a7e6c$var$selectedColumn = -1;
let $0ad124333bfa6c13ec319b5a597a7e6c$var$enabledObservers = false;
let $0ad124333bfa6c13ec319b5a597a7e6c$var$isAddedIcon = false;
let $0ad124333bfa6c13ec319b5a597a7e6c$var$initStorage = false;
const $0ad124333bfa6c13ec319b5a597a7e6c$var$config = {
    attributes: true,
    childList: true,
    subtree: true
};
function $0ad124333bfa6c13ec319b5a597a7e6c$var$updateIcon(status) {
    if ($0ad124333bfa6c13ec319b5a597a7e6c$var$trelloIcon) $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloIcon.classList.toggle('zen-mode_On');
    if ($0ad124333bfa6c13ec319b5a597a7e6c$var$trelloContextImg) $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloContextImg.classList.toggle('zen-mode_On');
}
function $0ad124333bfa6c13ec319b5a597a7e6c$var$updateBackground() {
    if ($0ad124333bfa6c13ec319b5a597a7e6c$var$trelloStatus && document.querySelector('.card-detail-window')) {
        document.querySelector($178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767.ZM_TRELLO_WINDOW_OVERLAY).classList.add('Zen-mode-active-overlay');
        document.querySelector('.card-detail-window').classList.add('card-detail-border');
    } else if (document.querySelector($178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767.ZM_TRELLO_WINDOW_OVERLAY).classList.contains('Zen-mode-active-overlay')) document.querySelector($178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767.ZM_TRELLO_WINDOW_OVERLAY).classList.remove('Zen-mode-active-overlay');
}
function $0ad124333bfa6c13ec319b5a597a7e6c$var$handleIconClick() {
    $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloStatus = !$0ad124333bfa6c13ec319b5a597a7e6c$var$trelloStatus;
    $0ad124333bfa6c13ec319b5a597a7e6c$var$updateIcon($0ad124333bfa6c13ec319b5a597a7e6c$var$trelloStatus);
    chrome.storage.local.set({
        TRELLO_STATUS: $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloStatus
    }, function() {
    });
    $0ad124333bfa6c13ec319b5a597a7e6c$var$updateBackground();
}
function $0ad124333bfa6c13ec319b5a597a7e6c$var$addIcon(status) {
    const siblingButton = //COMMENT: change parent element for create menu button.
    //document.querySelector('[data-test-id="header-create-menu-button"]') ||
    //document.querySelector('[aria-label="Create board or Workspace"]') ||
    //document.querySelector('[data-test-id="header-info-button"]') ||
    //document.querySelector('[aria-label="Open information menu"]') ||
    document.querySelector('[data-test-id="header-notifications-button"]') || document.querySelector('[aria-label="Notifications"]') || document.querySelector('[data-test-id="header-member-menu-button"]') || document.querySelector('[aria-label="Open member menu"]');
    const parent = siblingButton && siblingButton.parentElement;
    if (parent) {
        $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloIcon = document.createElement('div');
        $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloIcon.classList.add('zen-mode-trello-icon');
        if (status) $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloIcon.classList.toggle('zen-mode_On');
        $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloIcon.addEventListener('click', $0ad124333bfa6c13ec319b5a597a7e6c$var$handleIconClick);
        parent.prepend($0ad124333bfa6c13ec319b5a597a7e6c$var$trelloIcon);
    } else console.log('no parent found');
}
function $0ad124333bfa6c13ec319b5a597a7e6c$var$addElementInContext(element) {
    let parent = document.querySelector($178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767.ZM_TRELLO_POP_OVER_CONTENT);
    if (parent) {
        let pop_over_list = document.getElementsByClassName($178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767.ZM_TRELLO_POP_OVER_LIST);
        if (pop_over_list && pop_over_list.item(pop_over_list.length - 1).parentElement) pop_over_list.item(pop_over_list.length - 1).parentElement.append(element);
    }
}
function $0ad124333bfa6c13ec319b5a597a7e6c$var$addContextMenu() {
    if (!$0ad124333bfa6c13ec319b5a597a7e6c$var$isAddedContextOptions) {
        let stripCutter = document.createElement('hr');
        $0ad124333bfa6c13ec319b5a597a7e6c$var$addElementInContext(stripCutter);
        $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloContextImg = document.createElement('div');
        $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloContextImg.classList.add('zen-mode-trello-context-icon');
        if ($0ad124333bfa6c13ec319b5a597a7e6c$var$trelloStatus) $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloContextImg.classList.toggle('zen-mode_On');
        $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloContextList = document.createElement('ul');
        let li_item = document.createElement('li');
        li_item.classList.add('zen-mode__context-menu');
        li_item.textContent = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage('ZM_Trello_Context_ZenMode');
        li_item.addEventListener('click', function() {
            $0ad124333bfa6c13ec319b5a597a7e6c$var$handleIconClick();
            $0ad124333bfa6c13ec319b5a597a7e6c$var$hidePopOver();
        });
        li_item.appendChild($0ad124333bfa6c13ec319b5a597a7e6c$var$trelloContextImg);
        $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloContextList.appendChild(li_item);
        let hideOption = document.createElement('li');
        hideOption.classList.add('hide-or-show-option');
        hideOption.addEventListener('click', $0ad124333bfa6c13ec319b5a597a7e6c$var$hideOrShowColumnOption);
        if ($0ad124333bfa6c13ec319b5a597a7e6c$var$isHideColumn) hideOption.innerText = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage('ZM_Trello_Hide_Options');
        else hideOption.innerText = (/*@__PURE__*/$parcel$interopDefault($7IzVc)).i18n.getMessage('ZM_Trello_Show_Options');
        $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloContextList.appendChild(hideOption);
        $0ad124333bfa6c13ec319b5a597a7e6c$var$addElementInContext($0ad124333bfa6c13ec319b5a597a7e6c$var$trelloContextList);
        $0ad124333bfa6c13ec319b5a597a7e6c$var$isAddedContextOptions = true;
    }
}
function $0ad124333bfa6c13ec319b5a597a7e6c$var$hideOrShowColumnOption() {
    let list_wrappers = document.getElementsByClassName($178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767.ZM_TRELLO_LIST_CONTENT);
    if ($0ad124333bfa6c13ec319b5a597a7e6c$var$isHideColumn) {
        for (let item of list_wrappers)if (!item.classList.contains('selected-column')) item.classList.remove('show_column');
    } else {
        for (let item of list_wrappers)if (!item.classList.contains('selected-column')) item.classList.add('show_column');
    }
    $0ad124333bfa6c13ec319b5a597a7e6c$var$isHideColumn = !$0ad124333bfa6c13ec319b5a597a7e6c$var$isHideColumn;
    chrome.storage.local.set({
        HIDE_COLUMNS: $0ad124333bfa6c13ec319b5a597a7e6c$var$isHideColumn
    }, function() {
    });
    $0ad124333bfa6c13ec319b5a597a7e6c$var$hidePopOver();
}
function $0ad124333bfa6c13ec319b5a597a7e6c$var$hidePopOver() {
    let pop_over_close_btn = document.querySelector($178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767.ZM_TRELLO_CLOSE_POP_OVER_BTN);
    let event = new Event("click", {
        bubbles: true
    });
    pop_over_close_btn.dispatchEvent(event);
}
function $0ad124333bfa6c13ec319b5a597a7e6c$var$addEventListenerForListButton() {
    let button_list = document.getElementsByClassName($178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767.ZM_TRELLO_LIST_HEADER);
    for (let item of button_list)item.addEventListener('click', function() {
        $0ad124333bfa6c13ec319b5a597a7e6c$var$removeSelectedColumns();
        let parent = this.parentElement.parentElement;
        parent.classList.add('selected-column');
        $0ad124333bfa6c13ec319b5a597a7e6c$var$checkSelectedIndex();
        $0ad124333bfa6c13ec319b5a597a7e6c$var$isAddedContextOptions = false;
    });
}
function $0ad124333bfa6c13ec319b5a597a7e6c$var$removeSelectedColumns() {
    let list_wrappers = document.getElementsByClassName($178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767.ZM_TRELLO_LIST_CONTENT);
    for (let item of list_wrappers)if (item.classList.contains('selected-column')) item.classList.remove('selected-column');
}
function $0ad124333bfa6c13ec319b5a597a7e6c$var$checkSelectedIndex() {
    let list_wrappers = document.getElementsByClassName($178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767.ZM_TRELLO_LIST_CONTENT);
    for(let i = 0; i < list_wrappers.length; i++)if (list_wrappers[i].classList.contains('selected-column')) chrome.storage.local.set({
        SELECTED_ITEM: i
    }, function() {
    });
}
function $0ad124333bfa6c13ec319b5a597a7e6c$var$addObservers() {
    let pop_over = document.querySelector($178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767.ZM_TRELLO_POP_OVER);
    if (pop_over) {
        const observer = new MutationObserver(function(mutationsList, observer1) {
            for (let mutation of mutationsList)if (mutation.type === 'childList') $0ad124333bfa6c13ec319b5a597a7e6c$var$addContextMenu();
        });
        observer.observe(pop_over, $0ad124333bfa6c13ec319b5a597a7e6c$var$config);
    }
    let board = document.getElementById('board');
    if (board) {
        const board_observer = new MutationObserver(function(mutationsList, observer) {
            for (let mutation of mutationsList)if (mutation.type === 'childList') $0ad124333bfa6c13ec319b5a597a7e6c$var$addEventListenerForListButton();
        });
        board_observer.observe(board, $0ad124333bfa6c13ec319b5a597a7e6c$var$config);
    }
    let window_overlay = document.querySelector($178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767.ZM_TRELLO_WINDOW_OVERLAY);
    if (window_overlay) {
        const window_overlay_observer = new MutationObserver(function(mutationsList, observer) {
            for (let mutation of mutationsList)if (mutation.type === 'childList') $0ad124333bfa6c13ec319b5a597a7e6c$var$updateBackground();
        });
        window_overlay_observer.observe(window_overlay, $0ad124333bfa6c13ec319b5a597a7e6c$var$config);
    }
}
//func for hide or show columns on the board
function $0ad124333bfa6c13ec319b5a597a7e6c$var$typeColumns(show) {
    let list_wrappers = document.getElementsByClassName($178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767.ZM_TRELLO_LIST_CONTENT);
    for (let item of list_wrappers)if (show) item.classList.add('show_column');
    else item.classList.remove('show_column');
}
//get local storage data
chrome.storage.local.get({
    TRELLO_STATUS: true,
    HIDE_COLUMNS: true,
    SELECTED_ITEM: -1
}, function(value) {
    $0ad124333bfa6c13ec319b5a597a7e6c$var$trelloStatus = value.TRELLO_STATUS;
    $0ad124333bfa6c13ec319b5a597a7e6c$var$isHideColumn = value.HIDE_COLUMNS;
    $0ad124333bfa6c13ec319b5a597a7e6c$var$selectedColumn = value.SELECTED_ITEM;
    $0ad124333bfa6c13ec319b5a597a7e6c$var$initStorage = true;
});
const $0ad124333bfa6c13ec319b5a597a7e6c$var$observer = new MutationObserver(async (mutations)=>{
    mutations.filter((mutation)=>mutation.type === 'childList'
    ).forEach((mutation)=>{
        if (!$0ad124333bfa6c13ec319b5a597a7e6c$var$isAddedIcon && document.getElementById('header') && $0ad124333bfa6c13ec319b5a597a7e6c$var$initStorage) {
            $0ad124333bfa6c13ec319b5a597a7e6c$var$addIcon($0ad124333bfa6c13ec319b5a597a7e6c$var$trelloStatus);
            $0ad124333bfa6c13ec319b5a597a7e6c$var$isAddedIcon = true;
        }
        if (!$0ad124333bfa6c13ec319b5a597a7e6c$var$enabledObservers && document.getElementById('board')) //if we get data from local storage
        {
            if ($0ad124333bfa6c13ec319b5a597a7e6c$var$initStorage) {
                //add observers for columns and icon zen mode
                $0ad124333bfa6c13ec319b5a597a7e6c$var$addObservers();
                //if one columns should be showing
                if (!$0ad124333bfa6c13ec319b5a597a7e6c$var$isHideColumn && $0ad124333bfa6c13ec319b5a597a7e6c$var$selectedColumn > -1) {
                    let list_wrappers = document.getElementsByClassName($178a527f21424d31065cefc09ec3ec96$export$6cb619fb08fd0767.ZM_TRELLO_LIST_CONTENT);
                    list_wrappers[$0ad124333bfa6c13ec319b5a597a7e6c$var$selectedColumn].classList.add('selected-column');
                    for (let item of list_wrappers)if (item.classList.contains('selected-column')) item.classList.add('show_column');
                    else item.classList.remove('show_column');
                } else //show all columns
                $0ad124333bfa6c13ec319b5a597a7e6c$var$typeColumns(true);
                $0ad124333bfa6c13ec319b5a597a7e6c$var$enabledObservers = true;
            }
        }
        if ($0ad124333bfa6c13ec319b5a597a7e6c$var$isAddedIcon && $0ad124333bfa6c13ec319b5a597a7e6c$var$enabledObservers) $0ad124333bfa6c13ec319b5a597a7e6c$var$observer.disconnect();
    });
});
$0ad124333bfa6c13ec319b5a597a7e6c$var$observer.observe(document.body, $0ad124333bfa6c13ec319b5a597a7e6c$var$config);

})();
