(function () {
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


var $ae700833c52cbd3790c778eadb14c07e$export$9099ad97b570f7c = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;


function $e4445ce001b6549dd861c1044bbb3636$var$validate(uuid) {
    return typeof uuid === 'string' && $ae700833c52cbd3790c778eadb14c07e$export$9099ad97b570f7c.test(uuid);
}
var $e4445ce001b6549dd861c1044bbb3636$export$9099ad97b570f7c = $e4445ce001b6549dd861c1044bbb3636$var$validate;


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
    if (!$e4445ce001b6549dd861c1044bbb3636$export$9099ad97b570f7c(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
var $46d941dbafbd459fd8c0f3ef1201321a$export$9099ad97b570f7c = $46d941dbafbd459fd8c0f3ef1201321a$var$stringify;


function $b34a38bc0d849075d20cf20e7c9cbb98$var$v4(options, buf, offset) {
    options = options || {
    };
    var rnds = options.random || (options.rng || $746842f83862dd3a80fb8e13adc02d33$export$9099ad97b570f7c)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(var i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return $46d941dbafbd459fd8c0f3ef1201321a$export$9099ad97b570f7c(rnds);
}
var $b34a38bc0d849075d20cf20e7c9cbb98$export$9099ad97b570f7c = $b34a38bc0d849075d20cf20e7c9cbb98$var$v4;



function $cbe2ad1457763550f6af9927987c7fe8$export$76f9b6656a0717ff(call, args = []) {
    return {
        id: $b34a38bc0d849075d20cf20e7c9cbb98$export$9099ad97b570f7c(),
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



var $5273ce60da920d0018a81c5f2d4c1c78$exports = {};
/* moduleRaid v5
 * https://github.com/@pedroslopez/moduleRaid
 *
 * Copyright pixeldesu, pedroslopez and other contributors
 * Licensed under the MIT License
 * https://github.com/pedroslopez/moduleRaid/blob/master/LICENSE
 */ const $5273ce60da920d0018a81c5f2d4c1c78$var$moduleRaid = function() {
    $5273ce60da920d0018a81c5f2d4c1c78$var$moduleRaid.mID = Math.random().toString(36).substring(7);
    $5273ce60da920d0018a81c5f2d4c1c78$var$moduleRaid.mObj = {
    };
    fillModuleArray = function() {
        (window.webpackChunkbuild || window.webpackChunkwhatsapp_web_client).push([
            [
                $5273ce60da920d0018a81c5f2d4c1c78$var$moduleRaid.mID
            ],
            {
            },
            function(e) {
                Object.keys(e.m).forEach(function(mod) {
                    $5273ce60da920d0018a81c5f2d4c1c78$var$moduleRaid.mObj[mod] = e(mod);
                });
            }
        ]);
    };
    fillModuleArray();
    get = function get1(id) {
        return $5273ce60da920d0018a81c5f2d4c1c78$var$moduleRaid.mObj[id];
    };
    findModule = function findModule1(query) {
        results = [];
        modules = Object.keys($5273ce60da920d0018a81c5f2d4c1c78$var$moduleRaid.mObj);
        modules.forEach(function(mKey) {
            mod = $5273ce60da920d0018a81c5f2d4c1c78$var$moduleRaid.mObj[mKey];
            if (typeof mod !== 'undefined') {
                if (typeof query === 'string') {
                    if (typeof mod.default === 'object') {
                        for(key in mod.default)if (key == query) results.push(mod);
                    }
                    for(key in mod)if (key == query) results.push(mod);
                } else if (typeof query === 'function') {
                    if (query(mod)) results.push(mod);
                } else throw new TypeError('findModule can only find via string and function, ' + typeof query + ' was passed');
            }
        });
        return results;
    };
    return {
        modules: $5273ce60da920d0018a81c5f2d4c1c78$var$moduleRaid.mObj,
        constructors: $5273ce60da920d0018a81c5f2d4c1c78$var$moduleRaid.cArr,
        findModule: findModule,
        get: get
    };
};
if ("object" === 'object' && $5273ce60da920d0018a81c5f2d4c1c78$exports) $5273ce60da920d0018a81c5f2d4c1c78$exports = $5273ce60da920d0018a81c5f2d4c1c78$var$moduleRaid;
else window.mR = $5273ce60da920d0018a81c5f2d4c1c78$var$moduleRaid();


const $cc7eefdea2be830668001a2675f53239$export$168769d619198f0e = -1;
let $cc7eefdea2be830668001a2675f53239$export$e99aca06d93e4790 = null;
let $cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85 = null;
let $cc7eefdea2be830668001a2675f53239$export$b10c0dd0c37a51ed = null;
let $cc7eefdea2be830668001a2675f53239$export$b2e1c60589d7aa4a = null;
let $cc7eefdea2be830668001a2675f53239$export$6db489c4a85b10e9 = null;
function $cc7eefdea2be830668001a2675f53239$export$1ae46d8c282b5fe() {
    const moduleRaid = $5273ce60da920d0018a81c5f2d4c1c78$exports();
    $cc7eefdea2be830668001a2675f53239$export$e99aca06d93e4790 = moduleRaid.findModule('queryLinkPreview')[0].default;
    $cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85 = moduleRaid.findModule('Chat')[1].default;
    $cc7eefdea2be830668001a2675f53239$export$b10c0dd0c37a51ed = moduleRaid.findModule('Cmd')[0].Cmd;
    $cc7eefdea2be830668001a2675f53239$export$b2e1c60589d7aa4a = moduleRaid.findModule('Conn')[0].Conn;
    $cc7eefdea2be830668001a2675f53239$export$6db489c4a85b10e9 = moduleRaid.findModule('Socket')[0].Socket;
    const m = 'module not found';
    if (!$cc7eefdea2be830668001a2675f53239$export$e99aca06d93e4790) $3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c('WapModule', m);
    if (!$cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85) $3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c('ChatModule', m);
    if (!$cc7eefdea2be830668001a2675f53239$export$b10c0dd0c37a51ed) $3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c('CmdModule', m);
    if (!$cc7eefdea2be830668001a2675f53239$export$b2e1c60589d7aa4a) $3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c('ConnModule', m);
    if (!$cc7eefdea2be830668001a2675f53239$export$6db489c4a85b10e9) $3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c('SocketModule', m);
}
$3b57b66137570d1c84c98d2f0399e362$export$aeb55d3aff9ee19c('WhatsApp Web version:', $5df67e6f80ccf75f84467a6dcb98ad3e$export$8d78b4e784c2dc2c()); //# sourceMappingURL=WWAProvider.js.map


function $5df67e6f80ccf75f84467a6dcb98ad3e$export$8d78b4e784c2dc2c() {
    // @ts-ignore
    return window.Debug.VERSION;
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$17ddd2680d61b57() {
    return $cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Chat._models;
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$3d3dc3a79d695ef5() {
    return $cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Chat.filter((c)=>c.pin
    );
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$493051e30ede8ad4(chatId) {
    return $5df67e6f80ccf75f84467a6dcb98ad3e$export$17ddd2680d61b57().filter((chat)=>!chat.mute.isMute && chat.id.toString() !== chatId
    );
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$102bfaa06fddd872(chatId) {
    return $cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Chat.get(chatId);
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$45d16a2f22cb3dc0(wid) {
    return $cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Chat.get(wid);
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$7c71a3a6bebd7227(chatTitle) {
    return $cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Chat._models.find((chat)=>{
        return chat.title() === chatTitle;
    });
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$457406a3a98cf305() {
    return $cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Chat.getActive();
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$ab35766eec46a671(chat) {
    if (chat.mute.isMuted != true) chat.mute.setMute($cc7eefdea2be830668001a2675f53239$export$168769d619198f0e, false);
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$d79374f6825fa8de(chat) {
    if (chat.mute.isMuted != false) chat.mute.setMute(0, false);
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$a269e5013b100441(chat) {
    if (chat.archive != true) chat.archive = true;
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$2dc24d2401c7365f(chat) {
    if (chat.archive != false) chat.archive = false;
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$f4a8128ec2a0ed6c(chatId) {
    const chat = $cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Chat.get(chatId);
    $cc7eefdea2be830668001a2675f53239$export$b10c0dd0c37a51ed.openChatAt(chat);
    return chat;
}
async function $5df67e6f80ccf75f84467a6dcb98ad3e$export$43b518be2b6d92e8() {
    await $cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Chat.sync();
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$e184ec158528326f() {
    return Boolean($cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Mute.getGlobalSounds());
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$c28e8233adb0070b(state) {
    $cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Mute.setGlobalSounds(state);
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$6883309f699d5bd0(chatId) {
    const chat = $cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Chat.get(chatId);
    const styleEl = document.createElement('style');
    document.head.appendChild(styleEl);
    const styleSheet = styleEl.sheet;
    if (!styleSheet) throw new Error("No stylesheet");
    styleSheet === null || styleSheet === void 0 || styleSheet.insertRule("._21opK { display: none }", 0);
    $cc7eefdea2be830668001a2675f53239$export$b10c0dd0c37a51ed.markChatUnread(chat, 0);
    window.setTimeout(()=>styleEl.remove()
    , 10000);
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$66a398bfd91d2a45(chatId) {
    const chat = $cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Chat.get(chatId);
    $cc7eefdea2be830668001a2675f53239$export$b10c0dd0c37a51ed.markChatUnread(chat, 1);
}
async function $5df67e6f80ccf75f84467a6dcb98ad3e$export$ff5de66344c98a72(chatId) {
    const result = await $cc7eefdea2be830668001a2675f53239$export$e99aca06d93e4790.profilePicFind(chatId);
    return result.eurl || null;
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$caa865573843e58d() {
    return $cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Chat._models.filter((c)=>c.hasUnread
    );
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$var$setRetryTime(time) {
    $cc7eefdea2be830668001a2675f53239$export$6db489c4a85b10e9.retryTimestamp = time;
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$var$appIsOnline() {
    return $cc7eefdea2be830668001a2675f53239$export$6db489c4a85b10e9.state === 'CONNECTED';
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$var$appIsRetryConnecting() {
    return $cc7eefdea2be830668001a2675f53239$export$6db489c4a85b10e9.retryTimestamp != null;
}
function $5df67e6f80ccf75f84467a6dcb98ad3e$export$78ec6d7e5ecaa9a3(timeout) {
    if ($5df67e6f80ccf75f84467a6dcb98ad3e$var$appIsRetryConnecting()) $5df67e6f80ccf75f84467a6dcb98ad3e$var$setRetryTime(0);
    else {
        let rate = 0;
        const stepRate = 100;
        const maxRate = timeout;
        const interval = setInterval(()=>{
            if ($5df67e6f80ccf75f84467a6dcb98ad3e$var$appIsOnline() || rate >= maxRate) {
                clearInterval(interval);
                return;
            } else if ($5df67e6f80ccf75f84467a6dcb98ad3e$var$appIsRetryConnecting()) $5df67e6f80ccf75f84467a6dcb98ad3e$var$setRetryTime(0);
            rate += stepRate;
        }, stepRate);
    }
} //# sourceMappingURL=WWAController.js.map



class $72054ea3922abc01a0248379ded17993$export$5be347be2439fb8 {
    static fromWWAChat(wwaChat) {
        return {
            id: wwaChat.id,
            isGroup: wwaChat.isGroup,
            name: wwaChat.name,
            title: wwaChat.title(),
            hasUnread: wwaChat.unreadCount > 0,
            unreadCount: wwaChat.unreadCount,
            previewMessage: wwaChat.previewMessage && wwaChat.previewMessage.text ? wwaChat.previewMessage.text : null,
            archive: wwaChat.archive,
            pinned: wwaChat.pin
        };
    }
} //# sourceMappingURL=ChatFabric.js.map



const $5f59491bef83328729ff5fbe93ad469c$var$INTERVAL_MS = 100;
// State
const $5f59491bef83328729ff5fbe93ad469c$var$retentionsByChatId = new Map();
// Helpers
function $5f59491bef83328729ff5fbe93ad469c$var$getChatRetentions(chatId) {
    const retentions = $5f59491bef83328729ff5fbe93ad469c$var$retentionsByChatId.get(chatId);
    if (!retentions) return new Map();
    return retentions;
}
function $5f59491bef83328729ff5fbe93ad469c$var$retentionIsAppliedToChat(chatId, retentionType) {
    const validatorsByRetentionType = $5f59491bef83328729ff5fbe93ad469c$var$retentionsByChatId.get(chatId);
    if (!validatorsByRetentionType) return false;
    return validatorsByRetentionType.has(retentionType);
}
function $5f59491bef83328729ff5fbe93ad469c$export$1142fd4cbb1d570e(chatId, retentionType, validator, setter, cleaner) {
    if ($5f59491bef83328729ff5fbe93ad469c$var$retentionIsAppliedToChat(chatId, retentionType)) return; // Retention already applied
    // Set initially
    setter($5df67e6f80ccf75f84467a6dcb98ad3e$export$102bfaa06fddd872(chatId));
    // Update state
    const chatRetentions = $5f59491bef83328729ff5fbe93ad469c$var$getChatRetentions(chatId);
    chatRetentions.set(retentionType, {
        validator: validator,
        setter: setter,
        cleaner: cleaner
    });
    $5f59491bef83328729ff5fbe93ad469c$var$retentionsByChatId.set(chatId, chatRetentions);
}
function $5f59491bef83328729ff5fbe93ad469c$export$98434d872ed8f03(chatId, retentionType) {
    const chatRetentions = $5f59491bef83328729ff5fbe93ad469c$var$getChatRetentions(chatId);
    const effectFncs = chatRetentions.get(retentionType);
    if (!effectFncs) return;
    // Update state
    chatRetentions.delete(retentionType);
    $5f59491bef83328729ff5fbe93ad469c$var$retentionsByChatId.set(chatId, chatRetentions);
    // Set value used to chat before retention applying.
    const { cleaner: cleaner  } = effectFncs;
    cleaner($5df67e6f80ccf75f84467a6dcb98ad3e$export$102bfaa06fddd872(chatId));
}
setInterval(()=>{
    Array.from($5f59491bef83328729ff5fbe93ad469c$var$retentionsByChatId.entries()).forEach(([chatId, retentions])=>{
        const chat = $5df67e6f80ccf75f84467a6dcb98ad3e$export$102bfaa06fddd872(chatId);
        retentions.forEach(({ validator: validator , setter: setter  })=>validator(chat) && setter(chat)
        );
    });
}, $5f59491bef83328729ff5fbe93ad469c$var$INTERVAL_MS); //# sourceMappingURL=RetentionEffectChat.js.map



function $999f5a1ece7c1601612f170678cf799b$export$80f9fae01c7a1bc6(chatId) {
    // Set state
    const initialChat = $5df67e6f80ccf75f84467a6dcb98ad3e$export$102bfaa06fddd872(chatId);
    const chatArchivedByUser = initialChat.archive;
    const validator = (chat)=>{
        return chat.archive !== true;
    };
    const setter = (chat)=>{
        $5df67e6f80ccf75f84467a6dcb98ad3e$export$a269e5013b100441(chat);
    };
    const cleaner = (chat)=>{
        if (chatArchivedByUser) return;
        $5df67e6f80ccf75f84467a6dcb98ad3e$export$2dc24d2401c7365f(chat);
    };
    $5f59491bef83328729ff5fbe93ad469c$export$1142fd4cbb1d570e(initialChat.id.toString(), 'archive', validator, setter, cleaner);
}
function $999f5a1ece7c1601612f170678cf799b$export$c5f42a89b5b6d7bc(chatId) {
    $5f59491bef83328729ff5fbe93ad469c$export$98434d872ed8f03(chatId, 'archive');
}
function $999f5a1ece7c1601612f170678cf799b$export$5e5e95aa383685c6(chatId) {
    // Set state
    const initialChat = $5df67e6f80ccf75f84467a6dcb98ad3e$export$102bfaa06fddd872(chatId);
    const chatMutedByUser = initialChat.mute.isMuted;
    const validator = (chat)=>{
        return chat.mute.isMuted !== true;
    };
    const setter = (chat)=>{
        $5df67e6f80ccf75f84467a6dcb98ad3e$export$ab35766eec46a671(chat);
    };
    const cleaner = (chat)=>{
        if (chatMutedByUser) return;
        $5df67e6f80ccf75f84467a6dcb98ad3e$export$d79374f6825fa8de(chat);
    };
    $5f59491bef83328729ff5fbe93ad469c$export$1142fd4cbb1d570e(initialChat.id.toString(), 'mute', validator, setter, cleaner);
}
function $999f5a1ece7c1601612f170678cf799b$export$1ff6940fbda22674(chatId) {
    $5f59491bef83328729ff5fbe93ad469c$export$98434d872ed8f03(chatId, 'mute');
} //# sourceMappingURL=RetentionArchiveChat.js.map


class $2307bf605ed5121e95972906d8440604$export$62f24bd6940be5f8 {
    static fromWWAContact(wwaContact) {
        return {
            id: wwaContact.id,
            displayName: wwaContact.displayName
        };
    }
} //# sourceMappingURL=ContactFabric.js.map


// @ts-ignore
const $62d6d1afe8a78cf338e58faff70ebe6f$var$browser = chrome;
const $62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions = new Map();
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.findChatByTitle, (chatTitle)=>{
    const chat = $5df67e6f80ccf75f84467a6dcb98ad3e$export$7c71a3a6bebd7227(chatTitle);
    return chat ? $72054ea3922abc01a0248379ded17993$export$5be347be2439fb8.fromWWAChat(chat) : null; // e.g.: Phone contact without WhatsApp chat
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.updateChatModels, (chats)=>{
    return chats.map((chat)=>{
        const updatedWWAChat = $5df67e6f80ccf75f84467a6dcb98ad3e$export$102bfaa06fddd872(chat.id);
        return $72054ea3922abc01a0248379ded17993$export$5be347be2439fb8.fromWWAChat(updatedWWAChat);
    });
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.muteChatLocally, (chat)=>{
    $999f5a1ece7c1601612f170678cf799b$export$5e5e95aa383685c6(chat.id);
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.unmuteChatsLocally, (chats)=>{
    for (const chat of chats)$999f5a1ece7c1601612f170678cf799b$export$1ff6940fbda22674(chat.id);
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.muteNonMutedChatsExceptChat, (chat)=>{
    const WWAChatsForMute = $5df67e6f80ccf75f84467a6dcb98ad3e$export$493051e30ede8ad4(chat.id.toString());
    // Mute non muted chats
    WWAChatsForMute.forEach((chat1)=>$999f5a1ece7c1601612f170678cf799b$export$5e5e95aa383685c6(chat1.id)
    );
    return WWAChatsForMute.map($72054ea3922abc01a0248379ded17993$export$5be347be2439fb8.fromWWAChat);
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.archiveChatLocally, (chat)=>{
    $999f5a1ece7c1601612f170678cf799b$export$80f9fae01c7a1bc6(chat.id);
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.unArchiveChatLocally, (chat)=>{
    $999f5a1ece7c1601612f170678cf799b$export$c5f42a89b5b6d7bc(chat.id);
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.getChatById, (chatId)=>{
    const chat = $5df67e6f80ccf75f84467a6dcb98ad3e$export$102bfaa06fddd872(chatId);
    return $72054ea3922abc01a0248379ded17993$export$5be347be2439fb8.fromWWAChat(chat);
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.openChat, (chat)=>{
    const WWAChat = $5df67e6f80ccf75f84467a6dcb98ad3e$export$f4a8128ec2a0ed6c(chat.id);
    return $72054ea3922abc01a0248379ded17993$export$5be347be2439fb8.fromWWAChat(WWAChat);
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.getOpenedChat, ()=>{
    const chat = $5df67e6f80ccf75f84467a6dcb98ad3e$export$457406a3a98cf305();
    return chat ? $72054ea3922abc01a0248379ded17993$export$5be347be2439fb8.fromWWAChat(chat) : null;
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.refreshWWChats, async ()=>{
    await $5df67e6f80ccf75f84467a6dcb98ad3e$export$43b518be2b6d92e8();
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.setChatsSounds, (state)=>{
    $5df67e6f80ccf75f84467a6dcb98ad3e$export$c28e8233adb0070b(state);
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.getChatsSoundsState, ()=>{
    return $5df67e6f80ccf75f84467a6dcb98ad3e$export$e184ec158528326f();
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.markChatAsRead, (chatId)=>{
    $5df67e6f80ccf75f84467a6dcb98ad3e$export$6883309f699d5bd0(chatId);
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.markChatUnread, (chatId)=>{
    $5df67e6f80ccf75f84467a6dcb98ad3e$export$66a398bfd91d2a45(chatId);
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.getProfilePicUrl, async (chat)=>{
    return await $5df67e6f80ccf75f84467a6dcb98ad3e$export$ff5de66344c98a72(chat.id);
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.getUnreadChats, ()=>{
    return $5df67e6f80ccf75f84467a6dcb98ad3e$export$caa865573843e58d().map($72054ea3922abc01a0248379ded17993$export$5be347be2439fb8.fromWWAChat);
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.enableOfflineMode, (enable)=>{
    window['WebSocketWrapper'].setBlockMode(enable);
    if (enable) window['WebSocketWrapper'].closeAll();
    else $5df67e6f80ccf75f84467a6dcb98ad3e$export$78ec6d7e5ecaa9a3(30000);
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.isOfflineModeEnabled, ()=>{
    return window['WebSocketWrapper'].isBlocked();
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.set($79ba1ac996accdfb0162ac0d8cb02bcc$export$a3bfcfbc59c6c960.getPinnedChats, ()=>{
    return $5df67e6f80ccf75f84467a6dcb98ad3e$export$3d3dc3a79d695ef5().map($72054ea3922abc01a0248379ded17993$export$5be347be2439fb8.fromWWAChat);
});
$cc7eefdea2be830668001a2675f53239$export$1ae46d8c282b5fe();
const $62d6d1afe8a78cf338e58faff70ebe6f$var$extBridgePort = $62d6d1afe8a78cf338e58faff70ebe6f$var$browser.runtime.connect('edpkmlkdnhgboaagheijhfnphkndpekd', {
    name: $79ba1ac996accdfb0162ac0d8cb02bcc$export$ce596a179b780573.WWA_EXTERNAL_CONNECTOR
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$extBridgePort.onMessage.addListener((request)=>{
    $62d6d1afe8a78cf338e58faff70ebe6f$var$handleRequest(request);
});
// Move to EventBus
$cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Msg.on('add', async (msg)=>{
    const user = $cc7eefdea2be830668001a2675f53239$export$b2e1c60589d7aa4a.wid;
    if (!msg.isNewMsg) return;
    if (msg.id.fromMe) return;
    $62d6d1afe8a78cf338e58faff70ebe6f$var$extBridgePort.postMessage({
        action: "NEW_MESSAGE",
        payload: {
            msg: msg,
            user: user
        }
    });
});
// Move to EventBus
$cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Msg.on('add', async (msg)=>{
    const user = $cc7eefdea2be830668001a2675f53239$export$b2e1c60589d7aa4a.wid;
    $62d6d1afe8a78cf338e58faff70ebe6f$var$extBridgePort.postMessage({
        action: "LOG",
        payload: {
            type: "INFO",
            message: "New message",
            payload: {
                msg: msg,
                user: user
            }
        }
    });
});
$62d6d1afe8a78cf338e58faff70ebe6f$var$extBridgePort.onDisconnect.addListener($62d6d1afe8a78cf338e58faff70ebe6f$var$handlePortDisconnection);
async function $62d6d1afe8a78cf338e58faff70ebe6f$var$handleRequest(request) {
    let result;
    let error;
    try {
        if ($62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.has(request.call)) {
            const callerFunc = $62d6d1afe8a78cf338e58faff70ebe6f$var$callerFunctions.get(request.call);
            if (request.args) result = await callerFunc(...request.args);
            else result = await callerFunc();
        } else throw new Error(`Caller ${request.call} not defined`);
    } catch (e) {
        console.error(e, "request=", request);
        error = e;
    }
    $62d6d1afe8a78cf338e58faff70ebe6f$var$extBridgePort.postMessage($cbe2ad1457763550f6af9927987c7fe8$export$2ec2860c66d81812(request.id, result, error, request));
}
function $62d6d1afe8a78cf338e58faff70ebe6f$var$handlePortDisconnection(port) {
    $5df67e6f80ccf75f84467a6dcb98ad3e$export$c28e8233adb0070b(true);
}
/*
EventBus.ts
*/ const $62d6d1afe8a78cf338e58faff70ebe6f$var$eventPort = $62d6d1afe8a78cf338e58faff70ebe6f$var$browser.runtime.connect('edpkmlkdnhgboaagheijhfnphkndpekd', {
    name: $79ba1ac996accdfb0162ac0d8cb02bcc$export$ce596a179b780573.WWA_EVENTS_CONNECTOR
});
function $62d6d1afe8a78cf338e58faff70ebe6f$var$publishEvent(event, args) {
    $62d6d1afe8a78cf338e58faff70ebe6f$var$eventPort.postMessage({
        name: event,
        data: args
    });
}
$cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Presence.on('change', (event)=>{
    if (event.id) {
        const chat = $5df67e6f80ccf75f84467a6dcb98ad3e$export$45d16a2f22cb3dc0(event.id);
        if (event.isGroup && event.chatstates._models) event.chatstates._models.forEach(({ id: id , type: type  })=>{
            if (type) {
                var user = null;
                if (chat.isUser) {
                    console.log('isgroup');
                    user = $5df67e6f80ccf75f84467a6dcb98ad3e$export$45d16a2f22cb3dc0(id);
                } else if (chat.isGroup) {
                    console.log('isuser');
                    user = chat.groupMetadata.participants.get(id).__x_contact;
                }
                console.log('user', user);
                if (user) $62d6d1afe8a78cf338e58faff70ebe6f$var$publishEvent($79ba1ac996accdfb0162ac0d8cb02bcc$export$622c3ccfccf5c362.CHAT_CHANGED_STATUS, [
                    $72054ea3922abc01a0248379ded17993$export$5be347be2439fb8.fromWWAChat(chat),
                    $2307bf605ed5121e95972906d8440604$export$62f24bd6940be5f8.fromWWAContact(user),
                    type
                ]);
            }
        });
        else if (event.isUser && event.chatstate) {
            const type = event.chatstate.type;
            const chatObj = $72054ea3922abc01a0248379ded17993$export$5be347be2439fb8.fromWWAChat(chat);
            $62d6d1afe8a78cf338e58faff70ebe6f$var$publishEvent($79ba1ac996accdfb0162ac0d8cb02bcc$export$622c3ccfccf5c362.CHAT_CHANGED_STATUS, [
                chatObj,
                chatObj,
                type
            ]);
        }
    }
});
$cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Chat.on('change:pin', (chat)=>{
    $62d6d1afe8a78cf338e58faff70ebe6f$var$publishEvent($79ba1ac996accdfb0162ac0d8cb02bcc$export$622c3ccfccf5c362.CHAT_CHANGED_PIN, [
        $72054ea3922abc01a0248379ded17993$export$5be347be2439fb8.fromWWAChat(chat)
    ]);
});
$cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Chat.on('change:unreadCount', (chat)=>{
    $62d6d1afe8a78cf338e58faff70ebe6f$var$publishEvent($79ba1ac996accdfb0162ac0d8cb02bcc$export$622c3ccfccf5c362.CHAT_CHANGED_UNREAD_COUNT, [
        $72054ea3922abc01a0248379ded17993$export$5be347be2439fb8.fromWWAChat(chat)
    ]);
});
$cc7eefdea2be830668001a2675f53239$export$bdc36877f2856e85.Msg.on('add', (message)=>{
    $62d6d1afe8a78cf338e58faff70ebe6f$var$publishEvent($79ba1ac996accdfb0162ac0d8cb02bcc$export$622c3ccfccf5c362.CHAT_NEW_MESSAGE, [
        message
    ]);
}); //# sourceMappingURL=ExternalConnector.js.map

})();
