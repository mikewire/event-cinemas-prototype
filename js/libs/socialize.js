﻿//https://cdn.gigya.com/js/socialize.min.js?apiKey=3_fEX2sZaS4aspllaaZyAv0C5zxFxzZCFXxeGtJ-SapZHNzRT_JIagnzk-fJLoThTh
//server injected code
if (typeof gigya == 'undefined') { gigya = new Object(); }
gigya.env = 'prod';
gigya.gaeDomain = 'chat.gigya.com';
gigya.build = { version: '2.17.2', time: 'Sun 07/01/2012 12:45:17.71 ' };
if (typeof gigya.partnerSettings == 'undefined') gigya.partnerSettings = { authMode: 'cookie', baseDomains: 'eventcinemas.com.au' };
//end server injected code
"undefined" == typeof gigya && (gigya = {}); "undefined" == typeof gigya.partnerSettings && (gigya.partnerSettings = { authMode: "cookie", baseDomain: "" });
"object" == typeof gigya && !0 == gigya.loaded && "object" == typeof console && console.warn ? console.warn("**** Socialize.js loaded twice ****") : function () {
    gigya.loaded = true; gigya.socialize = {}; gigya.gcs = {}; gigya.gm = {}; gigya.global = {}; if (!gigya.defaultEventMaps) gigya.defaultEventMaps = []; (function () {
        var a = gigya.partnerSettings.baseDomains; if (a && !gigya.partnerSettings.baseDomain) for (var a = a.split(","), b = 0; b < a.length; b++) {
            var c = a[b], d = document.domain.indexOf(c); if (d >= 0 && d == document.domain.length - c.length) {
                gigya.partnerSettings.baseDomain =
                c; break
            }
        } if (!gigya.partnerSettings.baseDomain) gigya.partnerSettings.baseDomain = ""
    })(); (function () {
        var a = navigator.userAgent.toLowerCase(), b = gigya, c = new Date, d = document.location.protocol + "//" + document.location.href.split("?")[0].split("#")[0].split("/")[2], f = a.indexOf("win") != -1, g = a.indexOf("msie") != -1, h = a.indexOf("msie 6.") != -1, i = a.indexOf("msie 7.") != -1, k = a.indexOf("msie 8.") != -1, n = a.indexOf("msie 9.") != -1, j = a.indexOf("chrome") != -1, l = a.indexOf("firefox") != -1, m = a.indexOf("opera") != -1, s = navigator.appVersion &&
        navigator.appVersion.toLowerCase().indexOf("safari") != -1 && navigator.appVersion.toLowerCase().indexOf("chrome") == -1, p = navigator.appVersion && navigator.appVersion.toLowerCase().indexOf("mac") != -1 ? true : false, r = a.indexOf("windows phone") != -1, t = window.postMessage != null && a.indexOf("msie") == -1, u = window.localStorage != null, w = document.compatMode == "BackCompat" && a.indexOf("msie") != -1, x = document.compatMode == "BackCompat", v; a: {
            v = ["iphone", "android", "midp", "240x320", "blackberry", "netfront", "nokia", "panasonic", "portalmmm",
            "sharp", "sie-", "sonyericsson", "symbian", "windows ce", "benq", "mda", "mot-", "opera mini", "philips", "pocket pc", "sagem", "samsung"]; for (var y in v) if (a.indexOf(v[y]) != -1) { v = true; break a } v = false
        } b.localInfo = { initTime: c, version: 0, pageDomain: d, userAgent: a, isWin: f, isIE: g, isIE6: h, isIE7: i, isIE8: k, isIE9: n, isChrome: j, isFF: l, isOpera: m, isSafari: s, isMAC: p, isWindowsPhone: r, supportsPostMessage: t, supportsLocalStorage: u, quirksMode: w, backCompat: x, isMobile: v }
    })(); gigya.events = {
        addMap: function (a) {
            gigya.defaultEventMaps.splice(0,
            0, a)
        }, global: {
            _eventHandlers: {}, _pendingEvents: {}, add: function (a, b, c, d) { c || (c = "other"); this._eventHandlers[a] || (this._eventHandlers[a] = []); this._eventHandlers[a].push({ handler: b, type: c, context: d }); if ((b = gigya.events.global._pendingEvents[a]) && c == "other") { gigya.events.global._pendingEvents[a] = []; for (a = 0; a < b.length; a++) { c = b[a]; gigya.events.global.dispatch(c.eventObj, c.params) } } }, remove: function () {
                for (var a = 0; a < this._eventHandlers.length; a++) if (e === this._eventHandlers[a]) {
                    this._eventHandlers.splice(a,
                    1); break
                }
            }, dispatch: function (a, b) {
                var c = a.isInternal, d = a.eventName.split(","); gigya.log.log('Dispatching global event "' + a.eventName + '" with this event object', a); for (var f = 0; f < d.length; f++) {
                    var g = d[f], h = "on" + g.substring(0, 1).toUpperCase() + g.substring(1); (h = gigya.utils.object.clone(this._eventHandlers[h])) || (h = []); var i = gigya.utils.object.clone(a); i.eventName = g; if (b && b.source) i.source = b.source; if (b && b.sourceData) i.sourceData = b.sourceData; g = ["component"]; c || g.push("other"); for (var k = 0; k < g.length; k++) for (var n =
                    g[k], j = 0; j < h.length; j++) { var q = h[j]; if (q.type == n) { var m = gigya.utils.object.clone(i); m.context == null && q.context != null && (m.context = q.context); m.context == null && delete m.context; n != "component" && l.handleSpecialFields(m); try { q.handler(m) } catch (s) { gigya.log.log('Error while trying to invoke "' + a.eventName + '" global event handler', s) } } } gigya.events._dispatchFromMaps(i, true); if (!c && typeof GenesisExchange_Gigya != "undefined" && typeof gigya_omniture_conf != "undefined") {
                        (new GenesisExchange_Gigya(gigya_omniture_conf)).processAction(i);
                        typeof myOmnitureIntegrationFunc != "undefined" && myOmnitureIntegrationFunc(gigya_omniture_conf, i)
                    }
                }
            }, dispatchWhenHandlerAdded: function (a, b) { var c = gigya.events.global._pendingEvents, d = "on" + a.eventName.substring(0, 1).toUpperCase() + a.eventName.substring(1); c[d] || (c[d] = []); c[d].push({ eventObj: a, params: b }) }
        }, dispatchErrorFromResponse: function (a, b) {
            b || (b = {}); var c = b; if (c.response) c = c.response; gigya.events.dispatchForWidget({
                eventName: "error", status: c.status ? c.status : "FAIL", statusMessage: c.statusMessage ? c.statusMessage :
                "General Server Error", errorMessage: c.errorMessage ? c.errorMessage : "General Server Error", errorDetails: c.errorDetails ? c.errorDetails : "", errorCode: c.errorCode ? c.errorCode : 500001
            }, a)
        }, dispatchInvalidParamError: function (a, b) {
            var c = { eventName: "error" }; if (typeof a[b] == "undefined" || a[b] == null) { c.errorCode = 400002; c.errorMessage = "Missing_required_parameter (" + b + ")" } else { c.errorCode = 400006; c.errorMessage = "Invalid_parameter_value (" + b + ")" } c.status = c.errorCode; c.statusMessage = c.errorMessage; this.dispatchForWidget(c,
            a)
        }, dispatchForWidget: function (a, b) {
            if (a && a.eventName) {
                var c = a.eventName; gigya.log.log('Dispatching widget event "' + c + '" for ' + b.lastSource + " with this event object", a); var d = "on" + c.substring(0, 1).toUpperCase() + c.substring(1); l.handleSpecialFields(a); for (var f = a.eventName.split(","), g, h = 0; h < f.length; h++) {
                    c = f[h]; d = "on" + c.substring(0, 1).toUpperCase() + c.substring(1); if (b.context) a.context = b.context; if (b && b.source) a.source = b.source; if (b && b.sourceData) a.sourceData = b.sourceData; try {
                        typeof b[d] == "function" &&
                        (g = b[d](a))
                    } catch (i) { } if (c != "login" && c != "logout" && c != "connectionRemoved" && c != "connectionAdded") { this._dispatchFromMaps(a); if (typeof GenesisExchange_Gigya != "undefined" && typeof gigya_omniture_conf != "undefined") { (new GenesisExchange_Gigya(gigya_omniture_conf)).processAction(a); typeof myOmnitureIntegrationFunc != "undefined" && myOmnitureIntegrationFunc(gigya_omniture_conf, a) } }
                } if (g != null) return g
            }
        }, _dispatchFromMaps: function (a) {
            for (var b = [], c = false, d = 0; d < gigya.defaultEventMaps.length; d++) {
                for (var f = gigya.defaultEventMaps[d].eventMap,
                g = gigya.defaultEventMaps[d].defaultMethod, h = 0; h < f.length; h++) { var i = f[h], k = []; if (!i.args) i.args = []; for (var n = 0; n < i.args.length; n++) k.push(gigya.utils.templates.fill(i.args[n], a)); i.events.split(","); n = "," + i.events.toLowerCase() + ","; if ((n.indexOf(",on" + a.eventName.toLowerCase() + ",") != -1 || n.indexOf("," + a.eventName.toLowerCase() + ",") != -1) && (!a.source && !i.sources || !i.sources || i.sources.indexOf(a.source) != -1)) { b.push(i); (i.method ? i.method : g).apply(this, k); i.override && (c = true) } } if (c) break
            }
        }
    }; gigya.external =
    {
        facebook: {
            _pendingRequests: [], _initializedTime: null, isLoaded: function () { return gigya.external.facebook._initializedTime != null && gigya.external.facebook.gigya.external.facebook._initializedTime > 0 }, isLoggedIn: false, isConnected: false, load: function (a) {
                if (!gigya.external.facebook._initializedTime) {
                    gigya.external.facebook._initializedTime = -1; window.setInterval(function () { gigya.external.facebook.refreshSession() }, 27E5); window.fbAsyncInit = function () {
                        var b = gigya.utils.object.clone(gigya.thisScript.globalConf.facebookInitParams);
                        b || (b = {}); b.appId = gigya.fbAppID; b.status = false; b.cookie = true; b.xfbml = true; b.oauth = true; FB.init(b); if (a != true) FB.getLoginStatus(function (a) {
                            gigya.external.facebook._initializedTime = (new Date).getTime(); gigya.external.facebook.isConnected = a.status == "connected"; gigya.external.facebook.isLoggedIn = a.status != "unknown"; gigya.events.global.dispatch({ eventName: "facebookLoaded", isLoggedIn: gigya.external.facebook.isLoggedIn, isConnected: gigya.external.facebook.isConnected }); gigya.socialize.addEventHandlers({ listenerType: "component" },
                            { listenerDescription: "listener for updating Facebook Connect session", onLogin: function () { gigya.external.facebook.refreshSession() }, onConnect: function () { gigya.external.facebook.refreshSession() }, onLogout: function () { gigya.external.facebook.refreshSession() } })
                        }, true); else { gigya.external.facebook._initializedTime = (new Date).getTime(); gigya.events.global.dispatch({ eventName: "facebookLoaded", isLoggedIn: gigya.external.facebook.isLoggedIn, isConnected: gigya.external.facebook.isConnected }) }
                    }; var b = document.createElement("div");
                    b.id = "fb-root"; gigya.utils.DOM.appendToBody(b); var c = document.createElement("script"); c.src = document.location.protocol + "//connect.facebook.net/" + gigya.thisScript.lang.full.replace("-", "_") + "/all.js"; var d = false; c.onload = c.onreadystatechange = function () { if (!d && (!this.readyState || this.readyState == "loaded")) { if (document.documentElement.style.display == "none") document.documentElement.style.display = ""; d = true } }; c.async = true; b.appendChild(c)
                }
            }, refreshSession: function () {
                if (typeof FB != "undefined") {
                    var a = function (a) {
                        gigya.external.facebook._initializedTime =
                        (new Date).getTime(); gigya.external.facebook.isConnected = a.status == "connected"; gigya.external.facebook.isLoggedIn = a.status != "unknown"; gigya.events.global.dispatch({ eventName: "FBCRefreshed" })
                    }; gigya.fbAppID && (FB && FB.getLoginStatus) && FB.getLoginStatus(a, true)
                }
            }, retryPending: function () { for (var a = gigya.external.facebook._pendingRequests, b = 0; b < a.length; b++) a[b].cmd.run(); gigya.external.facebook._pendingRequests = [] }, addPending: function (a, b) { gigya.external.facebook._pendingRequests.push({ cmd: a, response: b }) },
            getParams: function () { var a = {}; if (typeof FB != "undefined" && FB.getAuthResponse) try { var b = FB.getAuthResponse(); if (b) { if (b.userID != null) a.fb_UID = b.userID; if (b.accessToken != null) a.fb_at = b.accessToken; if (b.expiresIn != null) a.fb_exp = b.expiresIn } } catch (c) { } return a }
        }, openGraph: { getMetaTag: function (a) { for (var b = document.getElementsByTagName("meta"), c = 0; c < b.length; c++) if (b[c].getAttribute("property") == a && b[c].getAttribute("content")) return b[c].getAttribute("content") } }
    }; gigya.utils = {
        delegate: {
            create: function (a,
            b) { return function () { return b.apply(a, arguments) } }
        }, templates: {
            fill: function (a, b) {
                typeof a == "function" && (a = a(b)); var c = /(\$)(!?)([a-z_][a-z_.\d]*)([(][^()]*[)])?|(\$)(!?)\{([a-z_][a-z_.\d]*)([(][^()]*[)])?\}/gi; c.lastIndex = 0; for (var d = a, f = c.exec(d), g; f != null;) {
                    g = f[1] == "$" ? 0 : 4; var h = f[2 + g] == "!", i = f[3 + g]; g = f[4 + g]; g == null && (g = ""); i.substring(0, 1) == "." && (i = i.substring(1)); i.substring(0, 3) == "DBG" && (i = i.substring(3)); var k = ""; for (g = i + g; g != k;) {
                        var k = g, n = c.lastIndex; g = gigya.utils.templates.fill(k, b); c.lastIndex =
                        n
                    } k = ""; n = 0; if (b[i.split(".")[0]] != null) try { k = (new Function("o", "p", 'return eval("o." + p)'))(b, g) } catch (j) { } else { k = "$" + (h ? "!" : "") + g; n = 1 } d = h ? d.replace(f[0], "") : d.substr(0, f.index) + k + d.substr(f.index + f[0].length); c.lastIndex = f.index + n; f = c.exec(d)
                } return d
            }
        }, functions: {
            callFunction: function (a, b) { var c = eval(a), d = a.split("."); d.splice(d.length - 1, 1); d = eval(d.join(".")); c.apply(d, b) }, invokeOnPageLoad: function (a) {
                !document.readyState && document.body || document.readyState == "loaded" || document.readyState == "complete" ||
                document.readyState == "interactive" && document.body ? a() : window.attachEvent ? window.attachEvent("onload", a) : window.addEventListener && window.addEventListener("load", a, false)
            }, makePublic: function (a, b) { for (var c = a.split("."), d = window, f = 0; f < c.length - 1; f++) { var g = c[f]; d[g] || (d[g] = {}); d = d[g] } d[c[c.length - 1]] = b }
        }, window: {
            _openedWindows: [], open: function (a, b, c) {
                if (gigya.localInfo.isIE && a.length > 2048) gigya.utils.redirect(a.split("?")[0], [gigya.utils.URL.getParamsFromURL(a)], "POST", "_blank"); else {
                    typeof c == "undefined" &&
                    (c = "menubar=0,toolbar=0,resizable=1,width=960,height=680"); var d = c; try { var f = c.split("width=")[1].split(",")[0], g = c.split("height=")[1].split(",")[0], h = (screen.width - f) / 2, i = (screen.height - g) / 2; h < 0 && (h = 0); i < 0 && (i = 0); d = d + (",top=" + i + ",left=" + h) } catch (k) { } (a = window.open(a, b, d)) && a.focus && a.focus(); this._openedWindows[b] = a
                } return this._openedWindows[b] != null
            }, close: function (a) {
                if (gigya.utils.window._openedWindows[a] != null) try {
                    window.setTimeout(function () { gigya.utils.window._openedWindows[a] != null && gigya.utils.window._openedWindows[a].close() },
                    10); delete gigya.utils.window._openedWindows[a]
                } catch (b) { }
            }
        }, validation: { isExplicitTrue: function (a) { a = ("" + a).toLowerCase(); return a == "true" || a == "1" }, isExplicitFalse: function (a) { a = ("" + a).toLowerCase(); return a == "false" || a == "0" } }, object: {
            add: function (a, b) { for (var c in b) a[c] = b[c] }, getHash: function (a) { var b = [], c; for (c in a) b.push(c + "=" + a[c]); return b.sort().join("&") }, clone: function (a, b, c, d, f, g) {
                f || (f = 0); if (typeof a == "undefined" || a == null || typeof a == "function" && c) return null; if (a.constructor == Array) {
                    for (var h =
                    [], i = 0; i < a.length; i++) if (!c || typeof a[i] != "function") h[i] = b ? this.clone(a[i], b, c, d, f + 1, g) : a[i]; return h
                } if (typeof a == "object") { h = {}; for (i in a) if (!(g && i == "context") && (!c || typeof a[i] != "function")) h[i] = b ? this.clone(a[i], b, c, d, f + 1, g) : a[i]; return h } return a
            }, merge: function (a) { for (var b = {}, c = 0; c < a.length; c++) if (a[c] && a[c].length) for (var d = 0; d < a[c].length; d++) for (var f in a[c][d]) b[f] = a[c][d][f]; else for (f in a[c]) b[f] = a[c][f]; return b }, extractProperties: function (a, b, c) {
                if (a != null) {
                    b == null && (b = {}); if (a.constructor ==
                    Array) for (var d = 0; d < a.length; d++) this.extractProperties(a[d], b, c); else { (new Date).getTime(); if (typeof c == "string") { c = RegExp(c); for (d in a) c.test(d) && (b[d] = a[d]) } } return b
                }
            }, extractProperty: function (a, b) { return this.extractProperties(a, void 0, b)[b] }
        }, cookie: {
            get: function (a) { a = a.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1").replace(/^[ \t]+|[ \t]+$/g, ""); return (a = document.cookie.match(RegExp("(?:^|;)\\s?" + a + "=(.*?)(?:;|$)"))) && unescape(a[1]) }, set: function (a, b, c, d, f) {
                var g = document.domain, h = gigya.partnerSettings.baseDomain;
                d == null && (d = h.length > 0 && g.length >= h.length && g.lastIndexOf(h) == g.length - h.length ? h : g); c = c == null || c == "" ? 47304E7 : c == 0 ? null : c * 1E3; g = new Date; g.setTime(g.getTime() + c); a = a + "=" + escape(b) + (f ? "" : "; path=/") + (c == null ? "" : "; expires=" + g.toGMTString()) + (d && d != "" && d.indexOf(".") != -1 ? "; domain=" + d : ""); document.cookie = a
            }, remove: function (a) {
                var b = document.domain, c = gigya.partnerSettings.baseDomain; if (c.length > 0 && b.length >= c.length && b.lastIndexOf(c) == b.length - c.length) { this.set(a, "x", -1, c); this.set(a, "x", -1, c, true) } this.set(a,
                "x", -1, document.domain); this.set(a, "x", -1, document.domain, true); this.set(a, "x", -1, ""); this.set(a, "x", -1, "", true)
            }, getAll: function () { }
        }, sanitize: {
            sanitizeHTML: function (a) { return a == null || typeof a == "undefined" ? a : a.replace(/&/g, "&#38;").replace(/</g, "&#60;").replace(/>/g, "&#62;").replace(/\"/g, "&#34;").replace(/'/g, "&#39;").replace(/&#38;#173;/g, "&#173;") }, sanitizeAttribute: function (a) {
                return a == null || typeof a == "undefined" ? a : a.replace(/&/g, "&#38;").replace(/</g, "&#60;").replace(/>/g, "&#62;").replace(/\"/g,
                "&#34;").replace(/\=/g, "&#61;")
            }
        }, JSON: {
            serialize: function (a, b, c, d) {
                d || (d = 0); if (d > 10) return "[Too deep]"; var f = "", g = "", h = ""; if (c) for (var h = "\t", g = "\n", i = 0; i < d + 1; i++) f = f + h; var k = typeof a; if (k == "function") return k.toString(); if (k != "object" || a === null) { k == "string" && (a = '"' + a.replace(/\"/g, '\\"') + '"'); return "" + a } var n, j, l = [], m = a && a.constructor == Array; if (m) for (i = 0; i < a.length; i++) {
                    j = a[i]; k = typeof j; j == null || k == "undefined" ? j = "" : k == "string" ? j = '"' + j.replace(/\"/g, '\\"') + '"' : k == "function" ? j = b ? "[Function]" : "" :
                    j.parentNode && j.innerHTML ? j = "[HTML Element]" : j.constructor == Date ? j = "" : k == "object" && j !== null && (j = this.serialize(j, b, c, d + 1)); "" + j != "" && l.push(f + h + ("" + j))
                } else for (n in a) { j = a[n]; k = typeof j; j == null || k == "undefined" ? j = "" : k == "string" ? j = '"' + j.replace(/\"/g, '\\"') + '"' : k == "function" ? j = b ? "[Function]" : "" : j.parentNode && j.innerHTML ? j = "[HTML Element]" : j.constructor == Date ? j = "" : k == "object" && j !== null && (j = g + this.serialize(j, b, c, d + 1)); "" + j != "" && l.push(f + h + '"' + n.replace(/\"/g, '\\"') + '":' + ("" + j)) } return g + f + (m ? "[" : "{") +
                g + l.join("," + g) + g + f + (m ? "]" : "}")
            }, deserialize: function (a) { a === "" && (a = '""'); eval("var o"); try { eval("o=" + a) } catch (b) { } return o }
        }, viewport: {
            getScroll: function () {
                var a = 0, b = 0; if (typeof window.pageYOffset == "number") { b = window.pageYOffset; a = window.pageXOffset } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) { b = document.body.scrollTop; a = document.body.scrollLeft } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                    b = document.documentElement.scrollTop;
                    a = document.documentElement.scrollLeft
                } return { left: a, top: b }
            }, getFullSize: function () { var a = document.documentElement, b = document.body, c = a.clientHeight; if (c == 0) c = b.clientHeight; a = a.clientWidth; if (a == 0) a = b.clientWidth; return { w: a, h: c } }, getInnerSize: function () { var a = window.innerHeight, b = window.innerWidth; if (!a || a == 0) { a = document.body.clientHeight; b = document.body.clientWidth } return { w: b, h: a } }, getMiddleCenter: function () {
                var a = this.getScroll(), b = this.getSize(); return {
                    top: a.top + Math.floor(b.h / 2), left: a.left + Math.floor(b.w /
                    2)
                }
            }
        }, mouse: { _mouseEventObject: null, _moveEvent: function (a) { if (!a) a = window.event; gigya.utils.mouse._mouseEventObject = { clientX: a.clientX, clientY: a.clientY } } }, localStorage: { setItem: function () { }, getItem: function () { }, removeItem: function () { }, _getAllItems: function () { } }, redirect: function (a, b, c, d) {
            if (c && c.toLowerCase() == "post") {
                var c = document.createElement("form"), f = []; c.setAttribute("accept-charset", "UTF-8"); c.setAttribute("method", "POST"); c.setAttribute("action", a); d && c.setAttribute("target", d); for (d = 0; d <
                b.length; d++) { var g = b[d], h; for (h in g) (typeof g[h] == "boolean" || typeof g[h] == "string") && h != "eventName" && f.push('<textarea name="' + encodeURIComponent(h) + '">' + g[h] + "</textarea>") } c.innerHTML = f.join(""); c.style.display = "none"; gigya.utils.DOM.appendToBody(c); c.submit()
            } else {
                f = a.split("?"); a = f[0]; c = {}; if (f.length > 1) { f = f[1].split("&"); for (d = 0; d < f.length; d++) { g = f[d].split("="); c[decodeURIComponent(g[0])] = decodeURIComponent(g[1]) } } for (d = 0; d < b.length; d++) {
                    g = b[d]; for (h in g) if ((typeof g[h] == "boolean" || typeof g[h] ==
                    "string") && h != "eventName") c[h] = g[h]
                } b = []; for (h in c) b.push(h + "=" + encodeURIComponent(c[h])); document.location.href = a + "?" + b.join("&")
            }
        }, URL: {
            URLEncode: function (a) { return encodeURIComponent(a) }, URLDecode: function (a) { if (a == null) return ""; for (var b = [], c, d = 0; d < a.length; d++) { c = a.charAt(d); if (c == "%") if (a.charAt(d + 1).toLowerCase() == "u") { b.push(String.fromCharCode(parseInt("0x" + a.substring(d + 2, d + 6)))); d = d + 5 } else { b.push(String.fromCharCode(parseInt("0x" + a.substring(d + 1, d + 3)))); d = d + 2 } else c == "+" ? b.push(" ") : b.push(c) } return b.join("") },
            getParamsFromURL: function (a, b) { return a.indexOf("?") == -1 ? {} : gigya.utils.keyValue.deserialize(a.split("?")[1].split("#")[0], "&", b) }, getParamValueFromURL: function (a, b, c) { if (null == b || "" == b) return c; var d = b.indexOf("?"); if (d == -1) return c; d = "&" + b.substr(d + 1); b = d.toLowerCase().indexOf("&" + a.toLowerCase() + "="); if (b == -1) return c; a = d.substr(b + (1 + a.length + 1)) + "&"; b = a.indexOf("&"); return a.substr(0, b) }, addParamsToURL: function (a, b) {
                var c = gigya.utils.URL.getParamsFromURL(a); gigya.utils.object.add(c, b); return a.split("?")[0] +
                "?" + gigya.utils.keyValue.serialize(c, "&")
            }
        }, keyValue: {
            serialize: function (a, b) { var c = []; b || (b = "&"); for (var d in a) switch (typeof a[d]) { case "function": break; case "array": case "object": a[d] != null && c.push(d + "=" + gigya.utils.URL.URLEncode(gigya.utils.JSON.serialize(a[d]))); break; case "undefined": break; default: c.push(d + "=" + gigya.utils.URL.URLEncode(a[d])) } return c.join(b) }, deserialize: function (a, b, c, d) {
                var f = {}; if (!a) return f; b || (b = "&"); a = a.split(b); for (b = 0; b < a.length; b++) {
                    var g = a[b], h = g.indexOf("="), i =
                    g.substr(0, h); c && (i = i.toLowerCase()); g = g.substr(h + 1).replace(/\+/g, " "); try { f[i] = d ? unescape(g) : decodeURIComponent(g) } catch (k) { f[i] = unescape(g) }
                } return f
            }
        }, DOM: {
            _nextZIndex: 9E8, _popupContainers: [], _pseudoContainers: [], addEventListener: function (a, b, c) { window.addEventListener ? a.addEventListener(b, c, true) : a.attachEvent("on" + b, c) }, appendToBody: function (a) { document.body && (document.body.insertBefore && document.body.firstChild ? document.body.insertBefore(a, document.body.firstChild) : document.body.appendChild(a)) },
            createTopLevelDiv: function (a) { var b = document.createElement("div"); b.style.position = "absolute"; if (b.style.zIndex != null) b.style.zIndex = this._nextZIndex++; b.id = a; this.appendToBody(b); return b }, hideByID: function (a) { if (a = document.getElementById(a)) a.style.display = "none" }, showByID: function (a) { if (a = document.getElementById(a)) a.style.display = gigya.localInfo.isIE6 ? a.tagName == "TD" ? "table-cell" : a.tagName == "TR" ? "" : a.tagName == "TABLE" ? "" : "block" : "" }, clearByID: function (a) {
                try {
                    var b = document.getElementById(a); if (b !=
                    null) b.innerHTML = ""
                } catch (c) { }
            }
        }, SSO: {
            _domain: document.location.protocol + "//" + document.location.href.split("?")[0].split("#")[0].split("/")[2], _request: function (a, b) {
                b = gigya.utils.object.clone(b); if (gigya.partnerSettings.ssoKey) {
                    var c = this.getIframe(); b || (b = {}); var d = b.callback; b.callback = function (b) { gigya.log.log("SSO: About to invoke callback for " + a + " with this response", b); d && d(b) }; b.m = a; b.d = this._domain; b.lid = gigya.utils.xd._flashListenerID; if (b.legacyCrossSiteMethod && b.legacyCrossSiteMethod.toLowerCase() !=
                    "localstorage") b.lid = b.legacyCrossSiteMethod + ":" + gigya.utils.xd._flashListenerID; if (typeof b.callback == "function") { b.callbackID = "gig_sso_cb" + (new Date).getTime(); gigya.utils.xd.addMessageListener(b.callbackID, {}, b.callback); delete b.callback } b.sAPIKey = gigya.thisScript.APIKey; var f = gigya.utils.keyValue.serialize(b); c.src = "https://cdns.gigya.com/gs/sso.htm?APIKey=" + gigya.partnerSettings.ssoKey + "&version=1#" + (new Date).getTime() + "&" + f; gigya.log.log("SSO: Calling " + a, {
                        SSOKey: gigya.partnerSettings.ssoKey,
                        params: b
                    }); document.body ? gigya.utils.DOM.appendToBody(c) : gigya.utils.functions.invokeOnPageLoad(function () { gigya.utils.DOM.appendToBody(c) })
                } else b && b.callback && b.callback()
            }, getIframe: function () { var a = document.getElementById("gig_sso"); if (!a) { a = document.createElement("iframe"); a.style.width = "30px"; a.style.height = "10px"; a.style.position = "absolute"; a.style.top = "-1000px"; a.style.left = "-1000px"; a.id = "gig_sso" } return a }, getGroupToken: function (a) { this._request("getToken", a) }, setGroupTokenFromResponse: function (a,
            b, c) { var d = a.expires_in, d = d == null || d == "" ? 47304E7 : d == 0 ? null : d * 1E3, f = new Date; f.setTime(f.getTime() + d); gigya.utils.SSO.setGroupToken({ lt: a.login_token, expiration: d == null ? 0 : f.getTime(), legacyCrossSiteMethod: c, callback: b }) }, setGroupToken: function (a) { this._request("setToken", a) }, logout: function (a) { this._request("logout", a) }, removeGroupToken: function (a) { this._request("removeToken", a) }
        }, xd: {
            _listeners: {}, _flashListenerID: "flid" + (new Date).getTime(), _added: false, _addedLegacyMethods: {}, _onFlashMessage: function (a) {
                var a =
                gigya.utils.keyValue.deserialize(a, null, null, true), b = a.id, c = this._listeners[b]; if (c != null) { typeof c.callback == "function" && c.callback(a, c.context); this.removeMessageListener(b) }
            }, _onMessage: function (a) { var b = this; a && (a.data && a.data.split) && setTimeout(function () { var c = a.data.split("="), d = b._listeners[c[0]]; if (d != null) { if (typeof d.callback == "function") { var f = unescape(c[1]), f = gigya.utils.keyValue.deserialize(f, null, null, true); d.callback(f, d.context) } b.removeMessageListener(c[0]) } }, 100) }, addMessageListener: function (a,
            b, c) {
                this._listeners[a] = { callback: c, context: b, t: (new Date).getTime() }; a = "localstorage"; if (b && b.c && b.c.legacyCrossSiteMethod && b.c.legacyCrossSiteMethod.toLowerCase() != "localstorage") a = b.c.legacyCrossSiteMethod; var d = this; if (gigya.localInfo.supportsPostMessage) { if (!this._added) { window.addEventListener ? window.addEventListener("message", function (a) { d._onMessage(a) }, false) : window.attachEvent && window.attachEvent("onmessage", function (a) { d._onMessage(a) }); this._added = true } } else if (!this._addedLegacyMethods[a]) {
                    var f =
                    document.createElement("div"); f.style.width = "1px"; f.style.height = "1px"; f.style.overflow = "hidden"; f.style.position = "absolute"; f.style.left = "-1000px"; c = this._flashListenerID; a != "localstorage" && (c = b.c.legacyCrossSiteMethod + ":" + this._flashListenerID); var b = document.location.protocol + "//" + document.location.href.split("?")[0].split("#")[0].split("/")[2], g = (new Date).getTime(), h = document.createElement("object"); with (h) {
                        setAttribute("id", "eventsBroadcaster" + g); setAttribute("codebase", "https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0");
                        setAttribute("width", "50"); setAttribute("height", "50"); setAttribute("src", "https://cdns.gigya.com/GS/swf/eventsBroadcaster2.swf")
                    } g = document.createElement("param"); g.name = "movie"; g.setAttribute("value", "https://cdns.gigya.com/GS/swf/eventsBroadcaster2.swf"); h.appendChild(g); g = document.createElement("param"); g.setAttribute("name", "allowScriptAccess"); g.setAttribute("value", "always"); h.appendChild(g); g = document.createElement("param"); g.setAttribute("name", "FlashVars"); g.setAttribute("value", "action=listen&id=" +
                    c + "&eventName=loginComplete&callback=gigya.utils.xd._onFlashMessage&domain=" + b); h.appendChild(g); f.appendChild(h); gigya.utils.functions.invokeOnPageLoad(function () { gigya.utils.DOM.appendToBody(f); h.setAttribute("type", "application/x-shockwave-flash"); h.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000") }); this._addedLegacyMethods[a] = true
                }
            }, removeMessageListener: function (a) { delete this._listeners[a] }
        }, script: {
            _pending: {}, load: function (a, b, c, d) {
                var f = gigya.utils.script._pending; if (d &&
                f[a]) if (f[a].loaded) c && c(); else { f[a].onLoad.push(c); f[a].onError.push(b) } else {
                    d = function () {
                        var g = document.createElement("script"); g.async = true; g.type = "text/javascript"; g.charset = "UTF-8"; f[a] || (f[a] = { loaded: false, onLoad: [c], onError: [b] }); var d = f[a], i = false; g.onload = g.onreadystatechange = function () {
                            if (!i && (!this.readyState || this.readyState == "loaded")) {
                                f[a].loaded = true; for (var b = 0; b < d.onLoad.length; b++) if (typeof d.onLoad[b] == "function") d.onLoad[b](); i = true; setTimeout(function () { g.parentNode.removeChild(g) },
                                500)
                            }
                        }; g.onerror = function () { for (var b = 0; b < d.onError.length; b++) if (typeof d.onError[b] == "function") d.onError[b](); delete f[a] }; var k = document.getElementsByTagName("head"); k && k.length > 0 && k[0].appendChild(g); setTimeout(function () { g.src = a }, 1)
                    }; gigya.localInfo.isIE ? gigya.utils.functions.invokeOnPageLoad(d) : d()
                }
            }
        }, sessionCache: {
            set: function (a, b) {
                if (window.sessionStorage) {
                    var c; try { c = gigya.utils.JSON.deserialize(window.sessionStorage.getItem("gigyaCache")) } catch (d) { } c || (c = {}); b == null && c[a] ? delete c[a] : c[a] =
                    { response: b, time: (new Date).getTime() }; window.sessionStorage.setItem("gigyaCache", gigya.utils.JSON.serialize(c)); gigya.callsQueue.release("cache", "cache_" + a)
                }
            }, get: function (a, b, c) {
                if (window.sessionStorage) try {
                    if (!gigya.callsQueue.isActive("cache_" + a)) {
                        var d = window.sessionStorage.getItem("gigyaCache"), f = gigya.utils.JSON.deserialize(d), g = f ? f[a] : null; if (g) { if (b && b + g.time > (new Date).getTime()) { c(g.response); return } gigya.utils.sessionCache.remove(a); g = null } if (!g) {
                            gigya.callsQueue.hold("cache", "cache_" +
                            a); c(null); return
                        }
                    } gigya.callsQueue.isActive("cache_" + a) && gigya.callsQueue.waitFor("cache_" + a, gigya.utils.sessionCache.get, arguments)
                } catch (h) { c(null) }
            }, remove: function (a) { gigya.utils.sessionCache.set(a, null) }
        }, string: { format: function (a, b) { for (var c = 0; c < arguments.length - 1; c++) a = a.split("{" + c + "}").join(arguments[c + 1]); return a } }
    }; if (gigya.localInfo.supportsLocalStorage) gigya.utils.localStorage = {
        _getAllItems: function () { return window.localStorage }, setItem: function (a, b) { try { window.localStorage[a] = b } catch (c) { } },
        getItem: function (a) { return window.localStorage[a] }, removeItem: function (a) { window.localStorage.removeItem(a) }
    }; else if (gigya.localInfo.isIE6 || gigya.localInfo.isIE7) gigya.utils.localStorage = {
        _start: function () { if (!gigya.utils.localStorage.el) { gigya.utils.localStorage.el = document.createElement("div"); gigya.utils.localStorage.el.addBehavior("#default#userData"); gigya.utils.DOM.appendToBody(gigya.utils.localStorage.el) } }, _getAllItems: function () {
            this._load(); for (var a = {}, b = this.el.XMLDocument.firstChild.attributes,
            c = 0; c < b.length; c++) a[b[c].name] = b[c].value; return a
        }, _save: function () { try { this._start(); this.el.save("gigya_ud") } catch (a) { } }, _load: function () { try { this._start(); this.el.load("gigya_ud") } catch (a) { } }, setItem: function (a, b) { this._load(); this.el.setAttribute(a, b); this._save() }, getItem: function (a) { this._load(); return this.el.getAttribute(a) }, removeItem: function (a) { this._load(); this.el.removeAttribute(a); this._save() }, implementation: "userData behavior (IE6/IE7)"
    }; else if (gigya.localInfo.isFF) gigya.utils.localStorage =
    { setItem: function (a, b) { try { globalStorage[location.hostname][a] = b } catch (c) { } }, getItem: function (a) { return globalStorage[location.hostname][a] }, removeItem: function (a) { delete globalStorage[location.hostname][a] } }; gigya.utils.localStorage.setObject = function (a, b) { this.setItem(a, gigya.utils.JSON.serialize(b)) }; gigya.utils.localStorage.getObject = function (a) { a = this.getItem(a); try { a = gigya.utils.JSON.deserialize(a) } catch (b) { } return a }; document.attachEvent ? document.attachEvent("onmousemove", gigya.utils.mouse._moveEvent) :
    document.addEventListener && document.addEventListener("mousemove", gigya.utils.mouse._moveEvent, false); gigya.auth = {
        oAuthToken: { get: function (a) { return a.oauth_token } }, loginToken: {
            _getTokenCookieName: function (a) { if (!a) a = gigya.thisScript.APIKey; return a ? "glt_" + a : "_gig_lt" }, get: function (a) { return (a = gigya.utils.cookie.get(gigya.auth.loginToken._getTokenCookieName(a))) ? a.split("|")[0] : null }, set: function (a, b, c) {
                gigya.utils.localStorage.removeItem("gigyaSettings"); if (!a) a = gigya.thisScript.APIKey; if (a) {
                    gigya.utils.cookie.set("glt_" +
                    a, b, c); gigya.utils.cookie.remove("gac_" + a)
                } else gigya.utils.cookie.set("_gig_lt", b, c)
            }, setFromGAC: function () {
                if (gigya.thisScript.APIKey) {
                    var a = gigya.utils.cookie.get("gac_" + gigya.thisScript.APIKey); if (a) {
                        a.charAt(0) == '"' && a.charAt(a.length - 1) == '"' && (a = a.substring(1, a.length - 1)); if (gigya.callsQueue.isActive("API")) gigya.callsQueue.waitFor("API", gigya.auth.loginToken.setFromGAC, []); else {
                            gigya.socialize.notifyLogin({ neverTryGAC: true, authCode: a, APIKey: gigya.thisScript.APIKey, client_id: gigya.thisScript.APIKey },
                            { callback: function () { gigya.utils.cookie.remove("gac_" + gigya.thisScript.APIKey); gigya.callsQueue.release("GAC", "API"); gigya.socialize.refreshUI() } }); gigya.callsQueue.hold("GAC", "API")
                        }
                    }
                }
            }, setFromSSOResponse: function (a) { if (a.errorCode == 0) { gigya.auth.loginToken.set(gigya.thisScript.APIKey, a.login_token, a.expires_in); gigya.socialize.getUserInfo({ signIDs: true, callback: function (a) { a = gigya.socialize._addUserInfoToEvent(a, { eventName: "login" }, true); gigya.events.global.dispatch(a) } }) } }, remove: function (a) {
                gigya.auth.loginToken.get() &&
                gigya.utils.SSO.removeGroupToken(); if (!a) a = gigya.thisScript.APIKey; gigya.utils.cookie.remove("glt_" + a); gigya.utils.cookie.remove("_gig_lt")
            }, migrateExisting: function () { var a = gigya.utils.cookie.get("_gig_lt"); if (a && gigya.thisScript.APIKey && !gigya.auth.loginToken.get()) { gigya.utils.cookie.remove("_gig_lt"); gigya.auth.loginToken.set(null, a) } }, getTokenParam: function (a, b) {
                var c = gigya.utils.cookie.get(gigya.auth.loginToken._getTokenCookieName(a)); if (c) {
                    c = c.split("|"); return c.length > 1 ? gigya.utils.keyValue.deserialize(c[1])[b] :
                    null
                }
            }
        }
    }; gigya.log = {
        _isEnabled: function () { return gigya.utils.cookie.get("_gig_dbgConsole_log") == "1" }, _log: [], log: function (a, b) { if (gigya.log._isEnabled()) { var b = gigya.utils.object.clone(b, true, false, 4, null, true), c = a; b != null && (c = c + (":" + (typeof b == "object" ? "\n" : "") + gigya.utils.JSON.serialize(b, true, true))); gigya.log._log.push(c); typeof console == "object" && console.log(c); document.getElementById("gigya_log") != null && gigya.log.show && gigya.log.show() } }, logCall: function (a, b, c) {
            if (!c) c = b.lastSource; gigya.log.log("Calling " +
            a + (c && c != a ? " for " + c : "") + (b.source && c != b.source ? " initiated from " + b.source : "") + " with these params", b)
        }
    }; gigya.debug = function () { gigya.utils.script.load(gigya.thisScript.base + "/js/gigya.services.socialize.plugins.log.min.js", null, function () { gigya.log.showConfig() }, true) }; gigya.showLog = function () { gigya.utils.script.load(gigya.thisScript.base + "/js/gigya.services.socialize.plugins.log.min.js", null, function () { gigya.log.show() }, true) }; gigya.thisScript = {
        APIKey: null, protocol: document.location.protocol ==
        "http:" ? "http" : "https", base: null, params: {}, globalConf: {}, lang: {}, scriptElement: null, _getScriptElement: function () {
            for (var a = document.getElementsByTagName("script"), b = a.length - 1; b >= 0; b--) { var c = a[b], d = c.src.toLowerCase(); if (d != "" && (d.indexOf("//cdn.gigya.com") > -1 || d.indexOf("//cdns.gigya.com") > -1 || d.indexOf("?apikey=") > -1) && (d.indexOf("gigya.js") > -1 || d.indexOf("socialize.js") > -1 || d.indexOf("gsjssdk.js") > -1)) { gigya.thisScript.scriptElement = c; break } } if (gigya.thisScript.scriptElement) {
                gigya.thisScript.protocol =
                gigya.thisScript.scriptElement.src.toLowerCase().indexOf("https") == 0 ? "https" : "http"; gigya.thisScript.arPaths = gigya.thisScript.scriptElement.src.split("/"); gigya.thisScript.base = gigya.thisScript.arPaths[0] + "//" + gigya.thisScript.arPaths[2]; gigya.thisScript.URLParams = gigya.utils.URL.getParamsFromURL(gigya.thisScript.scriptElement.src, true)
            } else {
                gigya.thisScript.base = gigya.thisScript.protocol == "http" ? "http://cdn.gigya.com" : "https://cdns.gigya.com"; gigya.thisScript.URLParams = {}; window.setTimeout(gigya.thisScript._getScriptElement,
                200)
            } if (gigya.thisScript.scriptElement && gigya.thisScript.scriptElement.innerHTML.replace(/^\s+|\s+$/g, "") != "") try { gigya.thisScript.globalConf = gigya.utils.JSON.deserialize(gigya.thisScript.scriptElement.innerHTML); if (typeof gigya.thisScript.globalConf != "object") gigya.thisScript.globalConf = {} } catch (f) { alert("Gigya global configuration object parse error"); gigya.thisScript.globalConf = {} } if (typeof window.__gigyaConf == "object") gigya.thisScript.globalConf = gigya.utils.object.merge([gigya.thisScript.globalConf,
            window.__gigyaConf]); if (gigya.thisScript.URLParams.apikey) gigya.thisScript.APIKey = gigya.thisScript.URLParams.apikey; (b = gigya.thisScript.URLParams.lang) || (b = "en-US"); b = b.replace("_", "-").toLowerCase(); c = b.split("-"); a = c[0]; c = c.length > 1 ? c[1] : a; c = c.toUpperCase(); switch (b) { case "es-mx": case "pt-br": case "zh-cn": case "zh-hk": case "zh-tw": case "en-gb": case "te-st": break; default: b = a } gigya.thisScript.lang = { full: a + "-" + c, langCode: b, countryCode: c }
        }
    }; gigya.thisScript._getScriptElement(); gigya.thisScript.scriptElement ||
    window.setTimeout(gigya.thisScript._getScriptElement, 10); gigya.reports = {
        trackAddressBarShares: function () { if (gigya.thisScript.globalConf.trackAddressBarShares) { var a = gigya.auth.loginToken.getTokenParam(null, "UUID"), b = document.location.href.split("#"); if (b.length == 1 || b[1] == "") document.location.replace("#guid=" + (a ? a : "_")) } }, report: function (a, b, c, d, f, g) {
            if (a) {
                if (!b) b = gigya.thisScript.APIKey; if (gigya.callsQueue.isActive("API")) gigya.callsQueue.waitFor("API", gigya.reports.report, arguments); else {
                    var h = new Image(1,
                    1), i = { sdk: "js", f: "re", e: a, ak: b, cid: c, source: d, sourceData: f, now: (new Date).getTime(), ucid: gigya.partnerSettings.ucid }; if (g) for (var k in g) i[k] = g[k]; k = "https"; if (a == "load" || a == "loadc") k = gigya.thisScript.protocol; if (k == "https") i.gcid = gigya.partnerSettings.gcid; i = k + "://gscounters.gigya.com/gs/api.ashx?" + gigya.utils.keyValue.serialize(i); h.src = i
                }
            }
        }, reportLoad: function (a, b) {
            if (!b._reportedLoad && b.containerID) {
                b._reportedLoad = true; var c = "load"; if (a != "gigya.socialize.plugins.reactions.showReactionsBarUI") {
                    a ==
                    "gigya.socialize.plugins.simpleshare.showSimpleShareUI" && (c = "loadSimple"); this.report(c, b.APIKey, b.cid, b.source, b.sourceData)
                }
            }
        }
    }; gigya.socialize.showShareUI = function () {
        var a = gigya.utils.object.merge([gigya.thisScript.globalConf, arguments]), b = a.operationMode; b && (b = b.toLowerCase().replace(/ /g, "")); if (!a.containerID) { delete a.width; delete a.height } return b == "simpleshare" || b == "autodetect" && !l.canSendRequest(a) ? gigya.socialize.showSimpleShareUI(a) : l.showUI("share", "showShareUI", a, true, { width: 520, height: 320 },
        { width: 595, height: 324 }, "userAction")
    }; gigya.gm.showNotifications = function () { var a = gigya.utils.object.merge([gigya.thisScript.globalConf, arguments]), b = gigya.utils.localStorage.getObject("gmSettings"); if (!b || !b.disableNotifications) { a.containerID = "gigNotifications"; if (!document.getElementById(a.containerID)) { b = document.createElement("div"); b.id = a.containerID; b.style.position = "absolute"; b.style.left = "-1000px"; gigya.utils.DOM.appendToBody(b) } return l.showUI("gm.notifications", "showNotifications", a) } };
    gigya.socialize.showConnectUI = function () { this.showAddConnectionsUI.apply(this, Array.prototype.slice.apply(arguments)) }; gigya.socialize.login = function () { var a = gigya.utils.object.merge([gigya.thisScript.globalConf, arguments]); l.endPoint("login", a, function (a, c) { if (a.errorCode == 0) { a.dontClose || gigya.utils.window.close(c.id); gigya.utils.validation.isExplicitTrue(c.p.authCodeOnly) ? l.handleRESTResponse(c, { authCode: a.code }) : l.handleRESTResponse(c, a) } else l.handleRESTResponse(c, a) }) }; gigya.socialize.addConnection =
    function () { var a = gigya.utils.object.merge([gigya.thisScript.globalConf, arguments]); l.endPoint("addConnection", a, function (a, c) { a.dontClose || gigya.utils.window.close(c.id); l.handleRESTResponse(c, a) }) }; gigya.socialize.requestPermissions = function () { var a = gigya.utils.object.merge([gigya.thisScript.globalConf, arguments]); l.endPoint("requestPermissions", a, function (a, c) { a.dontClose || gigya.utils.window.close(c.id); l.handleRESTResponse(c, a) }) }; gigya.socialize.postBookmark = function () {
        var a = gigya.utils.object.merge([gigya.thisScript.globalConf,
        arguments]); if (!a.APIKey) a.APIKey = gigya.thisScript.APIKey; var b = {}; gigya.utils.object.extractProperties([a], b, l.APIParamSchema.postBookmark); b.sdk = "js"; if ((!b.URL || b.URL == "") && (!b.url || b.url == "") && b.userAction && !b.userAction.linkBack) for (var c = document.getElementsByTagName("meta"), d = 0; d < c.length; d++) if (c[d].getAttribute("property") == "og:url" && c[d].getAttribute("content")) { b.URL = c[d].getAttribute("content"); break } if (!b.URL && !b.url && b.userAction && !b.userAction.linkBack) b.URL = document.location.href;
        delete b.context; if (!b.provider) a.provider = ""; if (!b.providerKey && b.provider.toLowerCase() == "facebook") b.providerKey = gigya.external.openGraph.getMetaTag("fb:app_id"); var c = gigya.utils.keyValue.serialize(b), d = l.getBoookmarkSize(b.provider), f; d.w && d.h && (f = (a.enablePopupLocation ? "location=1," : "") + "menubar=0,toolbar=0,resizable=1,width=" + d.w + ",height=" + d.h); gigya.log.logCall("postBookmark", b); gigya.utils.window.open("https://socialize.gigya.com/gs/bookmark.aspx?" + c, "gs_bookmark_" + b.provider, f)
    }; gigya.socialize.trackReferrals =
    function () {
        var a = gigya.utils.object.merge([gigya.thisScript.globalConf, arguments]), b = a.APIKey ? a.APIKey : gigya.thisScript.APIKey, c = {}; document.location.href.indexOf("?") != -1 && (c = gigya.utils.keyValue.deserialize(document.location.href.split("?")[1])); if (!gigya.reportedReferrals) {
            var d, f = { url: document.location.href, ref: document.referrer }; if (c.fb_ref) { d = gigya.utils.keyValue.deserialize(c.fb_ref, ":"); f.uuid = d.uu; f.sn = d.p; d = d.s } else if (document.referrer && document.referrer.indexOf("://") != -1) {
                c = document.referrer.split("://")[1].split("/")[0];
                c.indexOf("www.") == 0 && (c = c.split("www.")[1]); var g = { "digg.com": "digg", "stumbleupon.com": "stumbleupon", "delicious.com": "delicious", "technorati.com": "technorati", "t.co": "twitter", "plus.url.google.com": "googlePlus", "facebook.com": "facebook" }; if (g[c]) f.sn = g[c]
            } if (!f.sn && (!document.referrer || document.referrer.indexOf("http://soc.li") == -1 && document.referrer.indexOf("https://soc.li") == -1)) {
                c = document.location.href.split("#guid="); if (c.length > 1) {
                    c = c[1].split("#")[0].split("&")[0]; if (c != gigya.auth.loginToken.getTokenParam(b,
                    "UUID")) { f.sn = "AddressBarShares"; f.uuid = c; c == "_" && delete f.uuid; document.location.replace("#"); gigya.reports.trackAddressBarShares(); f.url = document.location.href.split("#")[0] }
                }
            } f.sn && gigya.reports.report("linkback", b, a.cid, d, null, f); gigya.reportedReferrals = true
        } typeof a.callback == "function" && a.callback({ status: "OK", statusMessage: "", operation: "trackReferrals", context: a.context, errorMessage: "", errorCode: 0 })
    }; gigya.socialize.hideUI = function () {
        var a = gigya.utils.object.merge([gigya.thisScript.globalConf,
        arguments]); typeof a.callback == "function" && a.callback({ status: "OK", statusMessage: "", operation: "hideUI", context: a.context, errorMessage: "", errorCode: 0 })
    }; gigya.gcs.submitUserForm = function () {
        var a = {}, b = gigya.utils.object.merge([gigya.thisScript.globalConf, arguments]), c = document.getElementById(b.form); if (!c) (arForms = document.getElementsByName(b.form)) && arForms.length > 0 && (c = arForms[0]); for (var d = 0; d < c.elements.length; d++) {
            var f = c.elements[d]; if (f.name) {
                for (var g = f.name.split("."), h = a, i = 0; i < g.length - 1; i++) {
                    var k =
                    g[i]; h[k] || (h[k] = {}); h = h[k]
                } h[g[g.length - 1]] = f.value
            }
        } b.data = a; gigya.gcs.setUserData(b)
    }; gigya.socialize.addEventHandlers = function () { var a = gigya.utils.object.merge([gigya.thisScript.globalConf, arguments]), b; for (b in a) b.indexOf("on") == 0 && gigya.events.global.add(b, a[b], a.listenerType, a.context); typeof a.callback == "function" && a.callback({ status: "OK", statusMessage: "", errorCode: 0, errorMessage: "", operation: "addEventHandlers", context: a.context }) }; gigya.socialize.waitForService = function () {
        var a = gigya.utils.object.merge([gigya.thisScript.globalConf,
        arguments]), b = a.service; if (b) { b = b.toLowerCase(); if (b == "fbconnect" || b == "facebook") { b = a.callback; !gigya.external.facebook._initializedTime || gigya.external.facebook._initializedTime < 0 ? gigya.socialize.addEventHandlers({ listenerType: "component" }, { onFacebookLoaded: b, context: a.context }) : b({ context: a.context }) } }
    }; gigya.socialize.refreshUI = function () {
        var a = gigya.utils.object.merge([gigya.thisScript.globalConf, arguments]), b = a.callback; a.callback = function (c) {
            var d = { eventName: "login", isInternal: true }; if (a.provider) d.provider =
            a.provider; gigya.socialize._addUserInfoToEvent(c, d, true); if (a.context) d.context = a.context; gigya.events.global.dispatch(d); typeof b == "function" && b(c)
        }; gigya.socialize.getUserInfo(a)
    }; gigya.socialize.getProviderShareCounts = function () { var a = gigya.utils.object.merge([gigya.thisScript.globalConf, arguments]); gigya.utils.script.load(gigya.thisScript.base + "/js/gigya.services.socialize.plugins.shareCounts.min.js", null, function () { gigya.services.socialize.plugins.shareCounts.getProviderShareCounts(a) }, true) };
    gigya.callsQueue = {
        _q: {}, isActive: function (a) { if (!this._q[a]) return false; var b = 0, c; for (c in this._q[a].ids) b++; return b > 0 }, release: function (a, b) { if (this._q[b]) { delete this._q[b].ids[a]; if (!this.isActive(b)) { var c = this._q[b].q; for (this._q[b].q = []; c.length > 0;) { var d = c.splice(0, 1)[0]; d.func.apply(this, d.args); if (this.isActive(b)) { this._q[b].q = c; break } } } } }, hold: function (a, b) { this._q[b] || (this._q[b] = { q: [], ids: {} }); this._q[b].ids[a] = true }, waitFor: function (a, b, c) {
            this._q[a] || (this._q[a] = { q: [], ids: {} }); this._q[a].q.push({
                func: b,
                args: c
            })
        }
    }; gigya.socialize._injectFBC = function () { gigya.utils.functions.invokeOnPageLoad(gigya.external.facebook.load) }; var l = {
        canSendRequest: function () { var a = gigya.utils.object.merge([gigya.thisScript.globalConf, arguments]), b = gigya.partnerSettings.baseDomain, c = document.domain; return !(b && c.length >= b.length && c.lastIndexOf(b) == c.length - b.length && !gigya.auth.loginToken.get(a.APIKey) && !gigya.auth.oAuthToken.get(a)) }, showUI: function (a, b, c, d, f, g, h, i, k) {
            var n = "socialize", j = a; if (a.indexOf(".") != -1) {
                n = a.substr(0,
                a.indexOf(".")); j = a.substr(a.indexOf(".") + 1)
            } if (!i && !gigya.socialize.pluginsCoreLoaded) { gigya.callsQueue.hold("pluginsJS", "UI"); gigya.utils.script.load(gigya.thisScript.base + "/js/gigya.services.socialize.plugins.min.js", null, null, true); gigya.utils.script.load(gigya.thisScript.base + "/js/gigya.services." + n + ".plugins." + j + ".min.js", null, null, true) } if (gigya.callsQueue.isActive("UI")) gigya.callsQueue.waitFor("UI", l.showUI, arguments); else {
                f || (f = {}); g || (g = {}); h || (h = ""); var q = h.split("|"); if (c.containerID ==
                null) if (d) c.containerID = ""; else { gigya.events.dispatchInvalidParamError(c, "containerID"); return } var m = c.containerID; k && (m = ""); var s = m == "" || c.isPopup, p; for (p in f) c[p] == null && (c[p] = s && g[p] ? g[p] : f[p]); if (s) for (p in g) c[p] || (c[p] = f[p]); else gigya.utils.DOM.clearByID(m); for (m = 0; m < q.length; m++) { p = q[m]; if (p != "" && (c[p] == null || c[p] == "")) { gigya.events.dispatchInvalidParamError(c, p); return } } if (c.source) c.isPopup = false; else {
                    c.source = b == "showSimpleShareUI" ? "showShareUI" : b; q = {
                        showReactionsBarUI: ["barID"], showCommentsUI: ["categoryID",
                        "streamID"], showFeedUI: ["feedID"], showChatUI: ["configID", "streamID"]
                    }; if (!c.sourceData && q[b]) { for (var s = {}, r = false, m = 0; m < q[b].length; m++) { p = q[b][m]; if (c[p] != null) { r = true; s[p] = c[p] } } if (r) c.sourceData = s }
                } if (!c.stacktrace) c.stacktrace = []; if (!c.lang) c.lang = gigya.thisScript.lang.langCode; c.stacktrace.push({ source: b }); c.lastSource = b; if (!i) return gigya.socialize._AddJSRequest("gigya.services." + n + ".plugins." + j, "gigya.services." + n + ".plugins." + j + "." + b, true, c); gigya.utils.script.load(gigya.thisScript.base + "/js/gigya.services." +
                n + ".plugins." + j + ".min.js", null, function () { gigya.services[n].plugins[j][b](c, c, c) }, true)
            }
        }, getBoookmarkSize: function (a) {
            var b, c, a = a.toLowerCase(); switch (a) { case "facebook": b = 640; c = 370; break; case "myspace": b = 590; c = 595; break; case "twitter": b = 880; c = 585; break; case "messenger": b = 710; c = 905; break; case "linkedin": b = 560; c = 500; break; case "yahoobookmarks": b = 840; c = 975; break; case "digg": b = 1010; c = 1045; break; case "delicious": b = 890; c = 905; break; case "googlebookmarks": b = 710; c = 905; break; case "mixi": b = 640; c = 470 } return {
                w: b,
                h: c
            }
        }, getGigyaSettings: function (a) { var b = gigya.utils.localStorage.getItem("gigyaSettings"); try { b = gigya.utils.JSON.deserialize(b) } catch (c) { b = {} } b || (b = {}); return gigya.utils.JSON.serialize(b[a]) }, setGigyaSettings: function (a, b) { var c = gigya.utils.localStorage.getItem("gigyaSettings"); try { c = gigya.utils.JSON.deserialize(c) } catch (d) { c = {} } c || (c = {}); c[a] || (c[a] = {}); for (var f in b) c[a][f] = b[f]; gigya.utils.localStorage.setItem("gigyaSettings", gigya.utils.JSON.serialize(c)) }, delGigyaSettings: function (a) {
            if (a) {
                var b =
                gigya.utils.localStorage.getItem("gigyaSettings"); if (b) { b = gigya.utils.JSON.deserialize(b); delete b[a]; gigya.utils.localStorage.setItem("gigyaSettings", gigya.utils.JSON.serialize(b)) }
            } else gigya.utils.localStorage.removeItem("gigyaSettings")
        }, endPoint: function (a, b, c) {
            if (gigya.thisScript.APIKey && !b.APIKey) b.APIKey = gigya.thisScript.APIKey; var d = b.callback, f = b.context, g = b.authCodeOnly, h = a + "_" + (new Date).getTime(); gigya.utils.xd.addMessageListener(h, {
                id: h, c: b, p: b, i: b, callback: d, context: f, operation: b._operation ?
                b._operation : a, apiName: a
            }, c); var c = "https://socialize.gigya.com/socialize." + a + "?", d = {}, f = gigya.auth.loginToken.get(b.APIKey), i = gigya.auth.oAuthToken.get(b); if (a == "addConnection") { var k = b.connectWithoutLoginBehavior; k && (k = k.toLowerCase()); k == "loginexistinguser" && (d.x_loginIfExists = true); if ((f == "" || f == null) && (i == null || i == "")) { c = "https://socialize.gigya.com/socialize.login?"; b.userWasLoggedOut = true; if (k != "alwayslogin") d.x_temporary_account = true } } var n; b && b.provider && b[b.provider + "ExtraPermissions"] &&
            (n = b[b.provider + "ExtraPermissions"]); if (b && b.permissions && !n) { n = b.permissions; delete b.permissions } b.pending_registration = b.pendingRegistration != null ? b.pendingRegistration : b.newUsersPendingRegistration; b.alwaysForceAuthentication == true && (b.forceAuthentication = true); gigya.utils.object.extractProperties([b], d, l.APIParamSchema.common + "|" + l.APIParamSchema.login); for (var j in d) if (j.indexOf("x_") != 0) { d["x_" + j] = b[j]; delete d[j] } d.client_id = d.x_APIKey; delete d.x_APIKey; d.redirect_uri = "/GS/AfterLogin.aspx";
            d.response_type = g ? "code" : "server_token"; d.format = "jsonp"; d.x_sdk = "js"; d.authMode = gigya.partnerSettings.authMode; if (i) { d.oauth_token = i; d.authMode = "token" } n && (d.x_extraPermissions = n); if (gigya.partnerSettings.gcid) d.gcid = gigya.partnerSettings.gcid; if (gigya.partnerSettings.ucid) d.ucid = gigya.partnerSettings.ucid; g = gigya.utils.xd._flashListenerID; b.legacyCrossSiteMethod && b.legacyCrossSiteMethod.toLowerCase() != "localstorage" && (g = b.legacyCrossSiteMethod + ":" + gigya.utils.xd._flashListenerID); n = {
                domain: document.location.href.split("?")[0].split("#")[0],
                id: h, lid: g
            }; j = b.redirectURL; if (!j) j = document.location.href; g = b.authFlow ? b.authFlow : "popup"; if (g == "redirect" || gigya.localInfo.isWindowsPhone) { n.redirectURL = gigya.utils.URL.addParamsToURL(j, { gig_event: b.redirectURL ? null : a }); if (b.redirectURL != null) { n.addUserInfo = true; n.redirectMethod = b.redirectMethod } } if (b.provider && b.provider.toLowerCase() == "facebook") n.invite = b.invite; d.state = gigya.utils.keyValue.serialize(n); b.requestParams = d; n = gigya.utils.keyValue.serialize(d); var q; d && d.x_provider && (q = gigya.socialize._getProviderByName(d.x_provider.toLowerCase()));
            j = null; q != null && (j = (b.enablePopupLocation ? "location=1," : "") + "menubar=0,toolbar=0,resizable=1,scrollbars=1,width=" + q.width + ",height=" + q.height); gigya.reports.report(a, b.APIKey, b.cid, d.source, d.sourceData, { sn: q ? q.toString() : null }); gigya.log.logCall(a, b); g == "redirect" ? document.location.href = c + n : gigya.utils.window.open(c + n, h, j)
        }, getCommonNonOverridableParams: function (a) {
            if (!a) a = gigya.thisScript.APIKey; var b = {}, c = gigya.auth.loginToken.get(a); if (c != null) b.login_token = c; if (a != null) {
                a = gigya.utils.cookie.get("gltexp_" +
                a); if (a != null) b.loginTokenExp = a
            } if (gigya.partnerSettings.gcid) b.gcid = gigya.partnerSettings.gcid; if (gigya.partnerSettings.ucid) b.ucid = gigya.partnerSettings.ucid; if (gigya.customDomain) { var a = gigya.external.facebook.getParams(), d; for (d in a) b[d] = a[d] } return b
        }, processMergedParams: function (a, b) {
            if (b.hasOwnProperty("timestamp")) { b.UIDTimestamp = b.timestamp; delete b.timestamp } if (b.hasOwnProperty("signature") && a.indexOf("/") != 0) { b.UIDSig = b.signature; delete b.signature } if (b.hasOwnProperty("nonce")) {
                b.UIDNonce =
                b.nonce; delete b.nonce
            } if (b.hasOwnProperty("format") && !b.dataFormat) { b.dataFormat = b.format; delete b.format } b.hasOwnProperty("recipients") && (b.recipients = l.extractListOfGIGUIDs(b.recipients)); if (b.hasOwnProperty("friends")) { var c = l.extractListOfGIGUIDs(b.friends); b.UIDs.length > 0 && (b.UIDs = b.UIDs + ","); b.UIDs = b.UIDs + c }
        }, getCommonOverridableParams: function () { var a = {}; a.APIKey = gigya.thisScript.APIKey; return a }, convertIdentitiesArrayToObject: function (a) {
            if (a.identities == null) a.identities = {}; else if (a.identities.constructor ==
            Array) { var b = a.identities; a.identities = {}; for (var c = 0; c < b.length; c++) a.identities[b[c].provider] = new gigya.socialize.Identity(b[c]) }
        }, saveTokenFromResult: function (a, b, c) { a.hasOwnProperty("login_token") && gigya.auth.loginToken.set(b, a.login_token, a.expires_in, c) }, handleSpecialFields: function (a) {
            var b = gigya.socialize.Collection, c = function (a, b) { for (var c = [], d = 0, f = a[d]; f;) { c.push(new b(f)); c[d].identities && l.convertIdentitiesArrayToObject(c[d]); f = a[++d] } return c }; if (a.photos) a.photos = new b(a.photos, "");
            if (a.albums) a.albums = new b(a.albums, ""); if (a.contacts) a.contacts = new b(c(a.contacts, gigya.socialize.Contact), "email"); if (a.friend) a.friend = new b(c(a.friend, gigya.socialize.Friend), "UID"); if (a.user) a.user = new gigya.socialize.User(a.user); if (a.friends && a.friends instanceof Array) { for (var d = [], f = 0; f < a.friends.length; f++) d.push(a.friends[f].UID); a.UIDs = d.join(","); a.friends = new b(c(a.friends, gigya.socialize.Friend), "UID") }
        }, extractListOfGIGUIDs: function (a) {
            switch (typeof a) {
                case "string": return a; case "object": if (typeof a.UID !=
                "undefined") return a.UID; if (a instanceof gigya.socialize.Collection) { var b = []; a.each(function (a) { a = l.extractListOfGIGUIDs(a); a != null && a != "" && b.push(a) }); return b.join(",") }
            }
        }, APIParamSchema: {
            common: "APIKey|cid|oauth_token|login_token|source|sourceData", login: "provider|redirect_uri|pending_registration|lang|extraPermissions|permissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName",
            postBookmark: "provider|URL|url|title|description|cid|APIKey|shortURLs|source|sourceData|providerKey|thumbnailURL|tags|userAction"
        }, generateEventsFromResponse: function (a, b) {
            var c = b.operation; if (b.p && b.p.hasOwnProperty("getUserInfoFor")) { b.operation = c = b.p.getUserInfoFor; delete b.p.getUserInfoFor } var d; if (a.status == "OK") switch (c) {
                case "unlinkAccounts": case "deleteAccount": d = { eventName: "logout" }; break; case "linkAccounts": case "setUID": gigya.socialize._addUserInfoToEvent(a, d, true); break; case "removeConnection": case "disconnect": d =
                { eventName: "connectionRemoved,disconnect", provider: b.p.provider ? b.p.provider : "" }; gigya.socialize._addUserInfoToEvent(a, d); break; case "addConnection": case "connect": if (b.i.userWasLoggedOut && gigya.utils.validation.isExplicitTrue(a.user.isLoggedIn)) { d = { eventName: "login", provider: b.p.provider }; gigya.socialize._addUserInfoToEvent(a, d, true) } else { d = { eventName: "connectionAdded,connect", provider: b.p.provider }; gigya.socialize._addUserInfoToEvent(a, d) } break; case "login": d = { eventName: "login", provider: b.p.provider };
                    if (a.authCode) d.authCode = a.authCode; gigya.socialize._addUserInfoToEvent(a, d, true); var f = b.p.provider; if (a.user && f) { f = f.toLowerCase(); gigya.utils.cookie.set("_gig_llp", f); gigya.utils.cookie.set("_gig_llu", a.user.firstName ? a.user.firstName : "") } break; case "logout": d = { eventName: "logout" }; break; case "notifyLogin": if (!b.c.authCode) { d = { eventName: "login", provider: "site" }; gigya.socialize._addUserInfoToEvent(a, d, true) } if (b.p.context && b.p.context.eventOnSuccess) {
                        d = gigya.utils.object.clone(b.p.context.eventOnSuccess);
                        gigya.socialize._addUserInfoToEvent(a, d, true)
                    }
            } (c == "login" || c == "addConnection") && (b.p.redirectURL != null && b.p.redirectURL != "" && d && d.user) && gigya.utils.redirect(b.p.redirectURL, [d, d.user], b.p.redirectMethod); if (d != null) { d.context = b.context; gigya.events.global.dispatch(d, b.p) }
        }
    }; gigya.global.JPReqests = {}; gigya.global.JPCMD = function (a) { this.url = a; this.params = {}; this.ifrName = "gigyaPostIframe_" + (new Date).getTime(); this.callback = this.context = null }; gigya.global.JPCMD.prototype = {
        addParam: function (a, b) {
            this.params[a] =
            b; return this
        }, createParamFormElements: function () { var a = [], b = ""; for (b in this.params) { a = a.concat(['<textarea name="', b, '">']); typeof this.params[b] == "object" ? a.push(gigya.utils.URL.URLEncode(gigya.utils.JSON.serialize(this.params[b]))) : a.push(this.params[b]); a.push("</textarea>") } return a.join("") }, GetDataPendingTimeout: function (a) { return a <= 4 ? 500 : a <= 8 ? 1E3 : a <= 21 ? 2E3 : a <= 39 ? 5E3 : -1 }, hanldeJPResponse: function (a, b) {
            if (!b) { b = a.context ? a.context : a.state; if (!b) return } var c = gigya.global.JPReqests[b]; if (c) {
                c.retryTimerID !=
                null && window.clearTimeout(c.retryTimerID); c.loaded = true; var d = gigya.global.JPReqests[b].cmd.formDiv; d && d.parentNode && d.parentNode.removeChild(d); if (a.errorCode == 100001 && !a.dontTryAgain) {
                    if (c.cmd.retry == null) c.cmd.retry = 0; d = this.GetDataPendingTimeout(c.cmd.retry++); if (d > 0) window.setTimeout("gigya.global.JPReqests['" + b + "'].cmd.run(); delete gigya.global.JPReqests['" + b + "']", d); else {
                        gigya.global.JPReqests[b].cmd.presetResponse = {
                            status: "FAIL", statusMessage: "Data_Pending", errorCode: 100001, errorMessage: "Data_Pending",
                            dontTryAgain: true
                        }; gigya.global.JPReqests[b].cmd.run(b)
                    }
                } else {
                    a.dontTryAgain && delete a.dontTryAgain; if (!(a.errorCode == 403030 && c.cmd.onSessionExpired(a))) {
                        var f = function () { delete gigya.global.JPReqests[b]; typeof c.cmd.callback == "function" && c.cmd.callback(c.cmd.context, a, c.cmd.params.login_token) }, d = gigya.global.JPReqests[b].cmd.context.operation; a.errorCode == 403005 && gigya.partnerSettings.ssoKey && gigya.auth.loginToken.get() ? gigya.utils.SSO.getGroupToken({
                            callback: function (a) {
                                if (a.login_token && a.login_token.split("|")[0] !=
                                gigya.auth.loginToken.get()) { gigya.auth.loginToken.setFromSSOResponse(a); gigya.global.JPReqests[b].cmd.params.login_token = a.login_token.split("|")[0]; delete gigya.global.JPReqests[b].cmd.presetResponse; gigya.global.JPReqests[b].cmd.run(); delete gigya.global.JPReqests[b] } else f()
                            }
                        }) : gigya.partnerSettings.ssoKey && (d == "logout" || d == "deleteAccount") && a.errorCode == 0 && document.location.href != gigya.partnerSettings.ssoLogoutUrl ? gigya.utils.SSO.logout({
                            callback: function (b) {
                                l.logoutFromProviders(b.logoutURLs,
                                f, { UID: a.UID, UIDSignature: a.UIDSignature, signatureTimestamp: a.signatureTimestamp })
                            }
                        }) : f()
                    }
                }
            }
        }, onSessionExpired: function (a) { if (this.params.retryPossible == true) { this.params.retryPossible = false; gigya.external.facebook.addPending(this, a); return true } return false }, getFormHTML: function (a) {
            return ['<form accept-charset="UTF-8" id="coreDiv_Form_', this.ifrName, '" method="post" action="', this.params.methodURL ? this.params.methodURL : this.url, '" target="', this.ifrName, '">', this.createParamFormElements(), '<input type="submit" value="go" /></form><iframe ',
            gigya.localInfo.isIE6 ? ' src="' + gigya.thisScript.base + '/wildfire/DO_NOT_DELETE.htm"' : "", " onload=\"if (this.phase2==null) {this.phase2='1'; window.setTimeout(function(){document.getElementById('coreDiv_Form_" + this.ifrName + "').submit();},10)} else if (gigya.global.JPReqests['" + a + "']) { gigya.global.JPReqests['" + a + "'].cmd.run('" + a + "',true);}\"", ' id="', this.ifrName, '" name="', this.ifrName, '"></iframe>'].join("")
        }, run: function (a, b) {
            a == null && (a = "R" + (new Date).getTime() + "_" + Math.random()); this.lastSentRequestID =
            a; gigya.global.JPReqests[a] = { rid: a, cmd: this, retryTimerID: null }; this.addParam("callback", "gigya.global.JPCMD.prototype.hanldeJPResponse"); this.addParam("context", a); this.params.oauth_token ? this.addParam("authMode", "token") : this.addParam("authMode", "cookie"); if (this.presetResponse != null) gigya.utils.functions.callFunction(this.params.callback, [this.presetResponse, a]); else {
                var c = this.params.methodURL ? this.params.methodURL : this.url, d = gigya.utils.keyValue.serialize(this.params), f = 0, g = 8192; gigya.localInfo.isIE &&
                (f = 6144); if (this.params.maxLength) { f = 0; g = this.params.maxLength } if (b == true) { c = {}; gigya.utils.object.extractProperties(this.params, c, "APIKey|authMode|oauth_token|saveResponseID|login_token|methodURL"); gigya.socialize.sendRequest("getSavedResponse", c, this.params.context, null, null, this.useHTTP) } else if (c.length + 1 + d.length + f <= g) { var h = eval(this.params.callback), i = a; if (this.params.saveResponseID) i = this.params.saveResponseID; gigya.utils.script.load(c + "?" + d, function () { h({ context: i, errorCode: 500026, errorMessage: "Network_error" }) }) } else {
                    var k =
                    this; gigya.utils.functions.invokeOnPageLoad(function () { var b = document.getElementById("coreDiv_Forms"); if (b == null) { b = document.createElement("span"); b.id = "coreDiv_Forms"; b.style.display = "none"; gigya.utils.DOM.appendToBody(b) } var c = document.createElement("span"); k.addParam("saveResponseID", a); c.innerHTML = k.getFormHTML(a); b.appendChild(c); gigya.global.JPReqests[a].cmd.formDiv = c })
                }
            }
        }
    }; gigya.socialize._addUserInfoToEvent = function (a, b, c) {
        b == null && (b = {}); if (a.user != null) {
            b.user = gigya.utils.object.clone(a.user);
            a.isLoggedIn != null && (b.user.isLoggedIn = a.isLoggedIn); a.isSiteUID != null && (b.user.isSiteUID = a.isSiteUID); a.iRank != null && (b.user.iRank = a.iRank)
        } if (c) { gigya.utils.object.extractProperties(a, b, "signature|UIDSig|timestamp|UIDSignature|signatureTimestamp"); if (b.user != null) b.UID = a.user.UID } return b
    }; l.handleRESTResponse = function (a, b, c) {
        a.cacheKey && (b.errorCode == 0 ? gigya.utils.sessionCache.set(a.cacheKey, b) : gigya.utils.sessionCache.set(a.cacheKey, null)); var d = a.p.originalResponse ? a.p.originalResponse : b; if (b.userInfo) {
            if (typeof b.userInfo ==
            "string") b.userInfo = gigya.utils.JSON.deserialize(b.userInfo); b = b.userInfo
        } delete b.statusCode; delete b.statusReason; if (!b.hasOwnProperty("errorCode")) b.errorCode = 0; if (!b.hasOwnProperty("status")) b.status = b.errorCode == 0 ? "OK" : "FAIL"; if (!b.hasOwnProperty("errorMessage")) b.errorMessage = ""; if (!b.hasOwnProperty("statusMessage")) b.statusMessage = b.errorMessage; var f = { status: "OK", statusMessage: "", errorCode: 0, statusCode: 0, errorMessage: "", errorDetails: "", statusReason: "" }; if (b.errorCode == 403005 && gigya.auth.loginToken.get(a.c.APIKey) ==
        c) { gigya.auth.loginToken.remove(a.c.APIKey); switch (a.apiName) { case "setUserSettings": l.setGigyaSettings(a.p.group, a.p.settings); b = f; break; case "delUserSettings": l.delGigyaSettings(a.p.group); b = f; break; case "getUserSettings": c = l.getGigyaSettings(a.p.group); b = f; b.settings = c; break; case "logout": b = f } } if (b.errorCode == 0) {
            switch (a.apiName) {
                case "postComment": if (b.comment) try { b.comment = gigya.utils.JSON.deserialize(b.comment) } catch (g) { } break; case "notifyLogin": case "addConnection": case "login": case "getUserInfo": if (a.operation ==
                "isLoggedIn") { f = b; b = { loggedIn: gigya.utils.validation.isExplicitTrue(f.isLoggedIn) }; gigya.utils.object.extractProperties(f, b, "status|statusMessage|callId|errorCode|errorMessage|errorDetails|context") } else if (!b.authCode && !(a.apiName == "notifyLogin" && a.c.authCode)) {
                    f = b; b = { user: f }; gigya.utils.object.extractProperties(f, b, "status|statusMessage|callId|errorCode|errorMessage|errorDetails|settings|context|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID"); if (b.user.hasOwnProperty("UIDSig")) b.signature =
                    b.user.UIDSig; delete f.status; delete f.statusMessage; delete f.callId; delete f.errorCode; delete f.errorMessage; delete f.errorDetails; delete f.settings; delete f.context; if (f.age != "" && !isNaN(parseInt(f.age))) f.age = parseInt(f.age); (c = f.capabilities) || (c = ""); if (typeof f.capabilities != "object") f.capabilities = {}; c = c.toLowerCase(); f.capabilities = {
                        actions: c.indexOf("actions") > -1, friends: c.indexOf("friends") > -1, login: c.indexOf("login") > -1, status: c.indexOf("status") > -1, notifications: c.indexOf("notifications") >
                        -1, contacts: c.indexOf("contacts") > -1, photos: c.indexOf("photos") > -1
                    }; l.convertIdentitiesArrayToObject(f); if (typeof f.providers == "string") f.providers = f.providers.split(","); if (a.p.group && !b.settings) { c = l.getGigyaSettings(a.p.group); b.settings = c }
                } break; case "getAvailableProviders": f = {}; for (c = 0; c < b.availableProviders.length; c++) f[b.availableProviders[c].name] = b.availableProviders[c]; b.availableProviders = f; break; case "unlinkAccounts": case "deleteAccount": case "logout": gigya.auth.loginToken.remove(a.c.APIKey)
            } l.handleSpecialFields(b)
        } l.saveTokenFromResult(d,
        a.c.APIKey, a.c.legacyCrossSiteMethod); l.saveTokenFromResult(b, a.c.APIKey, a.c.legacyCrossSiteMethod); switch (a.apiName) { case "removeConnection": case "disconnect": if (b.errorCode == 0) { gigya.socialize.getUserInfo(a.p, { getUserInfoFor: a.operation, _operation: a.operation, originalResponse: d }); return } } if (b.errorCode == 403005 && a.apiName == "getUserInfo") {
            b.status = "OK"; b.statusMessage = ""; b.errorCode = 0; b.statusCode = 0; b.errorMessage = ""; b.errorDetails = ""; b.statusReason = ""; b.user = {
                UID: "", nickname: "", photoURL: "", thumbnailURL: "",
                isSiteUID: false, birthDay: 0, birthMonth: 0, birthYear: 0, gender: "", email: "", proxiedEmail: "", country: "", state: "", city: "", zip: "", firstName: "", lastName: "", profileURL: "", age: "", isLoggedIn: false, isConnected: false, isSiteUser: false, providers: [], identities: {}, timestamp: "", UIDSig: "", UIDSignature: "", signatureTimestamp: "", loginProvider: "", loginProviderUID: "", capabilities: { actions: false, friends: false, login: false, status: false, notifications: false, contacts: false, photos: false }
            }; a.p.group && l.getGigyaSettings(a.p.group)
        } try {
            if (b.settings &&
            typeof b.settings == "string") b.settings = gigya.utils.JSON.deserialize(b.settings)
        } catch (h) { } a.context != null ? b.context = a.context : delete b.context; delete a.p._operation; delete a.p.originalResponse; b.requestParams = a.p; b.operation = a.operation; var i = function () { a.cbCalled = true; l.generateEventsFromResponse(b, a, d); if (typeof a.callback == "function") { gigya.log.log("Calling callback for " + a.operation + " with this response object", b); a.callback(b) } }, f = a.p.forceProvidersLogout, k; b.connectedProviders ? k = b.connectedProviders.toLowerCase() :
        a.p.provider && (k = a.p.provider.toLowerCase()); if ((a.operation == "logout" || a.operation == "removeConnection" || a.operation == "deleteAccount") && k && !gigya.utils.validation.isExplicitFalse(f)) { f = function () { a.cbCalled || i() }; window.setTimeout(f, 5E3); l.logoutFromProviders(k, f) } else b.login_token ? gigya.utils.SSO.setGroupTokenFromResponse(b, i, a.c.legacyCrossSiteMethod) : d.login_token ? gigya.utils.SSO.setGroupTokenFromResponse(d, i, a.c.legacyCrossSiteMethod) : i()
    }; l.logoutFromProviders = function (a, b, c) {
        for (var d = a.split(","),
        f = 0, a = 0; a < d.length; a++) {
            var g = d[a], h, i = false, k = false, n = true, j = function () { f++; if (f == d.length) { g == "facebook" && gigya.external.facebook.refreshSession(); b() } }; switch (g) {
                case "facebook": if (gigya.fbAppID) { gigya.socialize.waitForService({ service: "facebook", callback: function () { gigya.external.facebook.isLoggedIn && FB.logout ? FB.logout(j) : j() } }); k = true } break; case "yahoo": h = "https://login.yahoo.com/config/login?.src=fpctx&amp;logout=1&r="; break; case "google": h = gigya.thisScript.protocol == "https" ? "https://google.com/accounts/Logout?r=1" :
                "https://www.google.com/accounts/Logout?r="; i = true; break; case "linkedin": h = "https://www.linkedin.com/secure/login?session_full_logout=&trk=hb_signout&r="; break; default: if (g.indexOf("http") == 0 && (g.indexOf("https://") == 0 && document.location.protocol == "https:" || document.location.protocol == "http:")) { h = g; i = true; n = false } else h = ""
            } if (h && h != "") {
                n && (h = h + (new Date).getTime()); c && (h = h + ((h.indexOf("?") != -1 ? "&" : "?") + gigya.utils.keyValue.serialize(c, "&"))); var l; if (i) {
                    var m = document.createElement("iframe"); m.style.width =
                    "30px"; m.style.height = "10px"; m.style.position = "absolute"; m.style.top = "-1000px"; m.style.left = "-1000px"; l = function (a) { var b; b = a && a.srcElement ? a.srcElement : a && a.target ? a.target : this; if (!b.loaded && b.parentNode) { b.loaded = true; j(); window.setTimeout(function () { try { document.body.removeChild(b) } catch (a) { } }, 5E3) } }; if (m.addEventListener) { m.addEventListener("load", l, false); m.addEventListener("error", l, false) } else if (m.attachEvent) {
                        m.attachEvent("onload", l); m.attachEvent("onerror", l); m.onerror = m.onload = m.onreadystatechange =
                        function (a) { (!m.readyState || m.readyState == "loaded" || m.readyState == "complete") && l(a) }; m.onerror = l
                    } m.src = h; gigya.utils.DOM.appendToBody(m)
                } else { i = new Image; l = function () { if (!this.loaded) { this.loaded = true; j() } }; i.onload = l; i.onerror = l; i.src = h }
            } else k || j()
        }
    }; gigya.socialize.sendRequest = function (a, b, c, d, f, g) {
        var h; if (a.indexOf(".") == -1) { h = "socialize.gigya.com"; a = "/socialize." + a } else {
            a.substr(0, 1) == "/" && (a = a.substr(1)); h = a.split(".")[0] + ".gigya.com"; if (h == "chat.gigya.com" && gigya.gaeDomain) h = gigya.gaeDomain;
            a = "/" + a
        } h = new gigya.global.JPCMD((g ? "http://" : "https://") + h + a); h.addParam("format", "jsonp"); h.addParam("sdk", "js"); h.useHTTP = g; b = typeof b == "object" && b.constructor == Array ? b : [b]; if (f != null && f.presetResponse != null) h.presetResponse = f.presetResponse; for (f = 0; f < b.length; f++) {
            var g = b[f], i; for (i in g) if (i != null && g.hasOwnProperty(i)) i == "context" ? h.context = g[i] : i == "presetResponse" ? h.presetResponse = g[i] : i == "callback" ? h.callback = g[i] : typeof g[i] != "function" && (typeof g[i] != "undefined" && g[i] != null) && h.addParam(i,
            g[i])
        } if (typeof d == "function") h.callback = d; if (c != null) h.context = c; h.run()
    }; (function () {
        var a = function (a, c, d, f, g, h) { this.ID = a; this.arDefaultCapabilities = g.split(","); this.displayName = c; this.name = c.toLowerCase().split(" ").join(""); if (this.name == "messenger") this.displayName = "Windows Live"; if (this.name == "customopenid") this.displayName = "OpenID"; this.width = d; this.height = f; this.windowOptions = "menubar=0,toolbar=0,resizable=1,scrollbars=1,width=" + d + ",height=" + f; this.explicitOnly = h; this.toString = function () { return this.name } };
        l._arProviders = [new a(64, "Facebook", 650, 400, "login,friends,actions,status,photos,places,checkins"), new a(9012, "Twitter", 800, 440, "login,friends,notifications,actions,status,places,checkins"), new a(9811, "Google", 410, 450, "login,contacts"), new a(9042, "LinkedIn", 865, 450, "login,friends,status,actions,notifications"), new a(9803, "Yahoo", 500, 567, "login,friends,actions,status,contacts,notifications"), new a(1047, "Messenger", 440, 420, "login,friends,actions,status,notifications"), new a(1, "MySpace", 610, 510, "login,friends,actions,status,photos,notifications"),
        new a(9003, "Digg", 730, 590, "login", true), new a(9007, "FourSquare", 1E3, 650, "login,friends,places,checkins"), new a(9809, "Orkut", 610, 510, "login,friends,status,actions,photos"), new a(8191, "Renren", 450, 350, "login,friends,status,actions"), new a(8203, "QQ", 570, 460, "login,actions"), new a(9821, "Sina", 640, 380, "login,status,actions"), new a(4228, "Mixi", 1E3, 720, "login,friends,actions,photos", true), new a(9830, "Yahoo Japan", 500, 567, "login,friends,actions", true), new a(8205, "Spiceworks", 640, 380, "login", true), new a(8190,
        "Kaixin", 610, 510, "login,friends"), new a(9041, "VKontakte", 610, 510, "login,friends,photos,status,actions"), new a(9800, "AOL", 530, 720, "login"), new a(4096, "WordPress", 700, 540, "login"), new a(256, "Blogger", 760, 400, "login"), new a(1041, "Hyves", 700, 540, "login"), new a(16, "LiveJournal", 670, 360, "login"), new a(1043, "VeriSign", 940, 500, "login"), new a(1024, "Typepad", 730, 590, "login"), new a(4120, "OpenID", 730, 590, "login"), new a(4218, "Netlog", 730, 590, "login", true), new a(4222, "SignOn", 870, 900, "login", true), new a(4224, "Orange France",
        730, 590, "login", true), new a(5002, "Livedoor", 970, 700, "login", true), new a(8202, "VZnet", 610, 510, "login"), new a(9216, "Skyrock", 610, 510, "login,friends,status", true), new a(5004, "Fox News", 730, 590, "login", true), new a(1051, "PayPal", 820, 660, "login", true), new a(4121, "Custom OpenID", 730, 590, "login", true), new a(6002, "Site", 730, 590, "", true)]
    })(); gigya.socialize._getProviderByName = function (a, b) { if (null == b) b = l._arProviders; for (var c = 0; c < b.length; c++) if (b[c].name.toLowerCase() == a.toLowerCase()) return b[c] }; gigya.socialize._getProviderByID =
    function (a, b) { if (null == b) b = l._arProviders; for (var c = 0; c < b.length; c++) if (b[c].ID == a) return b[c] }; gigya.socialize.hideProvidersByName = function (a, b, c) { b = b.toLowerCase(); b = b.split(" ").join("").toLowerCase().split(","); b = this.replaceWildcard(b, c); for (c = 0; c < b.length; c++) for (var d = 0; d < a.length; d++) { var f = a[d]; (f = f.toString()) && (f = f.toLowerCase()); f == b[c] && a.splice(d, 1) } return a }; gigya.socialize.getProvidersForRequiredCapabilities = function (a, b) {
        b == null && (b = ""); for (var c = [], d = 0; d < a.length; d++) {
            for (var f =
            a[d], g = true, h = 0; h < b.length; h++) { for (var i = false, k = 0; k < f.arDefaultCapabilities.length; k++) if (f.arDefaultCapabilities[k].toLowerCase() == b[h].toLowerCase()) { i = true; break } if (!i) { g = false; break } } g && c.push(f)
        } return c
    }; gigya.socialize.getAllProviders = function () { return l._arProviders.concat() }; gigya.socialize.getProvidersByName = function (a, b) {
        for (var a = ("" + a).split(" ").join("").toLowerCase(), c = ("" + a).split(","), c = this.replaceWildcard(c, b), d = [], f = 0; f < c.length; f++) {
            var g = gigya.socialize._getProviderByName(c[f],
            b); g != null && d.push(g)
        } return d
    }; gigya.socialize.replaceWildcard = function (a, b) { if (!b) b = l._arProviders; for (var c = [], d = 0; d < a.length; d++) if (a[d] == "*") for (var f = 0; f < b.length; f++) { for (var g = false, h = 0; h < a.length; h++) a[h].toLowerCase() == b[f].name.toLowerCase() && (g = true); !g && !b[f].explicitOnly && c.push(b[f].name) } else c.push(a[d]); return c }; (function () {
        for (var a = function (a, b, c, d, f, j) {
        this.name = a; this.type = b; this.needsAuth = gigya.utils.validation.isExplicitTrue(c); this.replacedBy = f; this.namespace = "socialize";
        this.fnPreprocessor = j; if (a.indexOf(".") != -1) { this.namespace = a.substr(0, a.indexOf(".")); this.name = a.substr(a.indexOf(".") + 1) } this.schema = l.APIParamSchema.common + "|" + d
        }, b = function (a, b, c, d, f, j, l, m, r) {
        this.type = 3; this.name = a; this.pluginName = b; this.allowPopup = c; this.defaultParams = d; this.defaultPopupParams = f; this.requiredParams = l; this.dontLoadPluginsCore = m; this.ignoreContainerID = r; this.namespace = "socialize"; if (a.indexOf(".") != -1) {
        this.namespace = a.substr(0, a.indexOf(".")); this.name = a.substr(a.indexOf(".") +
        1)
        } this.fnValidation = j
        }, c = function (a) {
        var b = a.name; a.namespace != "socialize" && (b = "/" + a.namespace + "." + a.name); if (a.type == 0) return function () {
        var c = {}, d = gigya.utils.object.merge([gigya.thisScript.globalConf, arguments]); d.neverTryGAC || gigya.auth.loginToken.setFromGAC(); if (gigya.callsQueue.isActive("API")) gigya.callsQueue.waitFor("API", gigya[a.namespace ? a.namespace : "socialize"][a.name], arguments); else {
        var f = { context: d.context, callback: d.callback, p: d, c: d, i: d, apiName: b }; b == "logout" && (gigya.partnerSettings.ssoLogoutUrl &&
        document.location.href == gigya.partnerSettings.ssoLogoutUrl) && (c = { _operation: c._operation, presetResponse: { context: f, status: "OK", statusMessage: "", errorCode: 0, errorMessage: "", dontTryAgain: true } }); a.needsAuth == 1 && !l.canSendRequest(d) && (c = b == "logout" ? { _operation: c._operation, presetResponse: { context: f, status: "OK", statusMessage: "", errorCode: 0, errorMessage: "", dontTryAgain: true } } : {
            _operation: c._operation, presetResponse: {
            context: f, status: "FAIL", statusMessage: "Unauthorized user", errorCode: 403005, errorMessage: "Unauthorized user",
            dontTryAgain: true
        }
        }); var j = l.getCommonOverridableParams(), q = l.getCommonNonOverridableParams(d.APIKey), m = gigya.utils.object.merge([gigya.thisScript.globalConf, j, d, c]); l.processMergedParams(b, m); j = a.name; if (m._operation) j = m._operation; f.operation = j; a.schema && !c.presetResponse && (m = gigya.utils.object.extractProperties(m, {}, a.schema)); m = gigya.utils.object.merge([m, q]); a.fnPreprocessor && a.fnPreprocessor(m); gigya.log.logCall(a.name, m, d.lastSource); var r = gigya.thisScript.protocol == "http" && !gigya.auth.oAuthToken.get(d) &&
        a.needsAuth == 0 && !gigya.auth.loginToken.get(d.APIKey) && a.name != "notifyLogin"; if (d.cacheTimeout && !m.presetResponse) { c = j + "_" + gigya.utils.object.getHash(m); f.cacheKey = c; gigya.utils.sessionCache.get(c, d.cacheTimeout, function (a) { if (a) { m.presetResponse = a; delete f.cacheKey } gigya.socialize.sendRequest(b, m, f, l.handleRESTResponse, null, r) }) } else gigya.socialize.sendRequest(b, m, f, l.handleRESTResponse, null, r)
        }
        }; if (a.type == 3) return function () {
        var b = gigya.utils.object.merge([gigya.thisScript.globalConf, arguments]);
        (!a.fnValidation || a.fnValidation(b)) && l.showUI(a.pluginName, a.name, b, a.allowPopup, a.defaultParams, a.defaultPopupParams, a.requiredParams, a.dontLoadPluginsCore, a.ignoreContainerID)
        }; if (a.type == 4) return function () { gigya.utils.object.merge([gigya.thisScript.globalConf, arguments])._operation = b; this[a.replacedBy].apply(this, Array.prototype.slice.apply(arguments)) }
        }, a = [new a("getAvailableProviders", 0, 0, "enabledProviders|disabledProviders|requiredCapabilities"), new a("notifyLogin", 0, 0, "siteUID|UIDTimestamp|UIDSig|UIDNonce|provider|authToken|tokenSecret|tokenExpiration|sessionHandle|sessionHandleExpiration|userInfo|providerSessions|sessionExpiration|authCode|includeAllIdentitiesincludeiRank|group|settings|extraFields|signIDs|newUser"),
        new a("shortenURL", 0, 0, "URL"), new a("convertAction", 0, 0, "userAction|provider"), new a("getReactionsCount", 0, 0, "barID|buttonIDs|reportLoad"), new a("incrementReactionsCount", 0, 0, "barID|buttonID|count"), new a("deleteAccount", 0, 1, []), new a("delUserSettings", 0, 1, "group|settings"), new a("getAlbums", 0, 1, "type|enabledProviders|disabledProviders"), new a("getContacts", 0, 1, "enabledProviders|disabledProviders"), new a("getFriendsInfo", 0, 1, "enabledProviders|disabledProviders|detailLevel|UIDs|siteUsersOnly|requiredCapabilities|signIDs"),
        new a("getPhotos", 0, 1, "enabledProviders|disabledProviders|albumIDs|tags"), new a("getRawData", 0, 1, "provider|UID|fields|dataFormat"), new a("getSessionInfo", 0, 1, "provider|paddingMode|encrypt|signIDs|encryptAll"), new a("getUserInfo", 0, 1, "enabledProviders|disabledProviders|signIDs|includeiRank|includeAllIdentities|extraFields|group|settings|includeOpenidUID"), new a("getUserSettings", 0, 1, "group|settings"), new a("getPlaces", 0, 1, "enabledProviders|disabledProviders|latitude|longitude|query|radius|unifyResults"),
        new a("checkin", 0, 1, "enabledProviders|disabledProviders|placeID|comment|latitude|longitude"), new a("logout", 0, 1, "signIDs", null, function (a) { if (gigya.partnerSettings.ssoKey) a.signIDs = true }), new a("notifyRegistration", 0, 1, "siteUID|UIDTimestamp|UIDSig"), new a("publishUserAction", 0, 1, "userAction|(.*?)UserAction|enabledProviders|disabledProviders|target|shortURLs|scope|privacy|feedID|userLocation|tags"), new a("removeConnection", 0, 1, "provider"), new a("sendNotification", 0, 1, "recipients|body|subject|shortURLs"),
        new a("setStatus", 0, 1, "shortURLs|status|enabledProviders|disabledProviders|.*?Status|userLocation"), new a("setUID", 0, 1, "siteUID|UIDTimestamp|UIDSig"), new a("setUserSettings", 0, 1, "group|settings"), new a("unlinkAccounts", 0, 1, []), new a("getFeed", 0, 0, "feedID|startTS|endTS|groups|limit|includeUID"), new a("sendEmail", 0, 0, "dontSendEmail|companyName|lang|emails|emailSubject|emailBody|linkBack|senderEmail|senderName|userMsg|shortURLs|userAction"), new a("facebookGraphOperation", 0, 0, "graphPath|graphParams|authRequired|method"),
        new a("getTopShares", 0, 0, "age|tag|limit"), new b("showLoginUI", "login", true, { width: 120, height: 110 }, { width: 280, height: 220 }), new b("showAddConnectionsUI", "login", true, { width: 110, height: 65 }, { width: 250, height: 200 }), new b("showFriendSelectorUI", "friendSelector", true, { width: 400, height: 360 }), new b("showFeedUI", "newsfeed", false, { width: 304, height: 265 }), new b("showChatUI", "chat", false, { width: 300, height: 450 }, null, function (a) {
        if (a.site) a.categoryID = a.site; if (a.stream) a.streamID = a.stream; if (a.skin) a.skinID = a.skin;
        return true
        }), new b("showCommentsUI", "comments", false, { width: 500 }), new b("showEditConnectionsUI", "edit", true, { width: 310, height: 250 }, { width: 310, height: 310 }), new b("showShareBarUI", "reactions", false, { shareCountCacheTimeout: 3E5 }, null, null, "userAction|shareButtons"), new b("showReactionsBarUI", "reactions", false, null, null, function (a) { if (!a.barID) a.barID = a.itemID; return true }, "userAction|barID|reactions"), new b("showMiniShareUI", "minishare", true, { width: 320, height: 153 }), new b("showRatingUI", "rating", false),
        new b("showFollowBarUI", "followbar", false, null, null, null, "buttons"), new b("showBookmarkUI", "bookmark", true, { width: 310, height: 250 }, { width: 310, height: 310 }), new b("showSimpleShareUI", "simpleshare", true, { width: 280, height: 175 }, null, null, "userAction", true, true), new b("gm.showUserStatusUI", "gm.userStatus", false, { width: 300 }, null, function (a) { return l.canSendRequest(a) }), new b("gm.showAchievementsUI", "gm.achievements", false, { width: 300, height: 100, excludeChallenges: "_default" }), new b("gm.showChallengeStatusUI",
        "gm.achievements", false, { width: 300, height: 100, challenge: "_default" }), new b("gm.showLeaderboardUI", "gm.leaderboard", false, { width: 300 }, null, function (a) { if (a && a.height) a.height = null; return true }), new a("connect", 4, null, null, "addConnection"), new a("disconnect", 4, null, null, "removeConnection"), new a("linkAccounts", 4, null, null, "setUID"), new a("showConnectUI", 4, null, null, "showAddConnectionsUI"), new a("showNewsfeedUI", 4, null, null, "showFeedUI"), new a("isLoggedIn", 4, null, null, "getUserInfo"), new a("gm.getChallengeStatus",
        0, 0, "UID|includeChallenges|excludeChallenges|details"), new a("gm.resetLevelStatus", 0, 1, "challenges"), new a("gm.getTopUsers", 0, 0, "challenge|totalCount|friendsCount|includeSelf|period"), new a("gm.getChallengeConfig", 0, 0, "UID|includeChallenges|excludeChallenges"), new a("gm.notifyAction", 0, 1, "action"), new a("comments.postComment", 0, 0, "categoryID|streamID|parentID|guestName|guestEmail|commentText|privacy|feedID|userAction|(.*?)UserAction|scope|enabledProviders|disabledProviders|shortURLs|commentTitle|ratings|tags|streamTags"),
        new a("comments.getComments", 0, 0, "categoryID|streamID|includeSettings|start|startTS|threadLimit|sort|threaded|threadDepth|includeStreamInfo|includeOpenidUID|includeUID|includeReplies|tags|dataFormat|includeUserOptions"), new a("comments.setStreamInfo", 0, 0, "categoryID|streamID|streamTitle|streamURL|streamInfoSig|streamTags"), new a("comments.getTopStreams", 0, 0, "categoryID|limit|maxStreamAge|includeLastComment|streamTag"), new a("comments.getTopRatedStreams", 0, 0, "categoryID|limit|maxStreamAge|ratingClass|minRatingsCount|streamTag"),
        new a("comments.getStreamInfo", 0, 0, "categoryID|streamID|streamIDs|includeLastComment"), new a("comments.flagComment", 0, 0, "categoryID|streamID|commentID"), new a("comments.vote", 0, 1, "categoryID|streamID|commentID|vote"), new a("comments.getUserVotes", 0, 1, "categoryID|streamID"), new a("comments.getUserComments", 0, 1, "categoryID|streamID|tag|senderUID|start|limit|sort|includeReplies|includeStreamInfo"), new a("comments.getFriendsComments", 0, 1, "categoryID|streamID|start|limit|includeUID|sort|includeReplies|includeStreamInfo"),
        new a("comments.getThread", 0, 0, "categoryID|streamID|commentID|start|includeUID|limit|threadDepth|sort"), new a("comments.deleteComment", 0, 1, "categoryID|streamID|commentID"), new a("comments.subscribe", 0, 0, "categoryID|streamID|email|lang"), new a("comments.unsubscribe", 0, 0, "categoryID|streamID|unsubscribeToken"), new a("comments.setUserOptions", 0, 1, "replyNotifications|notificationsEmail|notificationsLanguage"), new a("comments.getUserOptions", 0, 1, "APIKey"), new a("gcs.getUserData", 0, 1, "type|fields"), new a("gcs.setUserData",
        0, 1, "data|type|updateBehavior"), new a("gcs.search", 0, 0, "expTime|querySig|query"), new a("chat.getSettings", 0, 0, "categoryID|streamID|skinID"), new a("chat.getMessages", 0, 0, "categoryID|streamID|start|includeSettings"), new a("chat.postMessage", 0, 1, "categoryID|streamID|messageText|isPrivate"), new a("chat.resetChat", 0, 0, "categoryID|streamID|timestamp|chatSignature"), new a("chat.blockUser", 0, 0, "categoryID|streamID|UID|chatSignature"), new a("chat.deleteMessage", 0, 0, "categoryID|streamID|messageId|chatSignature")],
        b = 0; b < a.length; b++) { var d = a[b], f = "socialize"; if (d.namespace) f = d.namespace; gigya[f] || (gigya[f] = {}); gigya[f][d.name] = c(d) }
    })(); (function () {
        var a = {}, b = {
            User: "personwithuid+isLoggedIn|false,isConnected|false,isSiteUser|false,identities|{},providers|[],timestamp,UIDSig,UIDSignature,signatureTimestamp,loginProvider,loginProviderUID,capabilities|{}", Friend: "personwithuid+timestamp,friendshipSig,friendshipSignature,signatureTimestamp,timestamp,isSiteUser|false,identities|{}", Identity: "person+isExpiredSession|false,allowsLogin|false,providerUID,provider,isLoginIdentity|false,missingPermissions",
            Contact: "provider,firstName,lastName,nickname,email,photoURL", person: "nickname,photoURL,thumbnailURL,birthDay|0,birthMonth|0,birthYear|0,gender,email,proxiedEmail,country,state,city,zip,firstName,lastName,profileURL,age|0", personwithuid: "person+UID,isSiteUID|false", UserAction: "actorUID,actorNickname,actionName,date|new Date(),targets|[],images|[],actionData1,actionData2,iconURL,title,linkBack,userMessage,description,actionLinks|[],mediaItems|[],subtitle"
        }, c = function (a) {
            var d = {}, a = b[a]; if (a.indexOf("+") !=
            -1) { d = c(a.split("+")[0]); a = a.split("+")[1] } arFields = a.split(","); for (a = 0; a < arFields.length; a++) { var f = "", k = arFields[a].split("|"); if (k.length > 1) try { f = gigya.utils.JSON.deserialize(k[1]) } catch (l) { } d[k[0]] = f } return d
        }, d = function (b) { return function (c) { var d = a[b], f; for (f in d) this[f] = gigya.utils.object.clone(d[f]); if (typeof c == "object") for (f in c) this[f] = gigya.utils.object.clone(c[f]) } }, f; for (f in b) { a[f] = c(f); gigya.socialize[f] = d(f) } gigya.socialize.Collection = function (a, b) { this.arr = a; this._key = b ? b : "" };
        gigya.socialize.Collection.prototype = { asArray: function () { return this.arr }, each: function (a) { for (var b = 0, c = this.arr[b]; c;) { a(c, b); b++; c = this.arr[b] } }, getById: function (a) { typeof this._hash == "undefined" && this._buildHash(); return (this._hash ? this._hash : this.arr)[a] }, getSize: function () { return this.arr.length }, _buildHash: function () { var a = this._hash = {}, b = this._key; this.each(function (c) { a[typeof c[b] == "function" ? c[b]() : c[b]] = c }) } }; gigya.socialize.UserAction.prototype = {
            clone: function () {
                return new gigya.socialize.UserAction(gigya.utils.object.clone(this,
                true, true))
            }, getTemplate: function () { return this.titleTemplate }, setTemplate: function (a) { this.titleTemplate = a }, getActor: function () { return { UID: this.actorUID, nickname: this.actorNickname } }, setActionName: function (a) { this.actionName = a; return this }, getActionName: function () { return this.actionName }, getTemplateFields: function () { var a = [], b; for (b in this.templateFields) a.push(this.templateFields[b]); return new gigya.socialize.Collection(a, "fieldName") }, setTemplateField: function (a, b, c) {
                this.templateFields[a] = {
                    fieldName: a,
                    text: b, href: c
                }; return this
            }, getTemplateField: function (a) { return this.templateFields[a] ? this.templateFields[a] : null }, addTarget: function (a) { if (typeof a == "object") { this.targets.push({ UID: a.UID, nickname: a.nickname ? a.nickname : "" }); return this } if (typeof a == "string") { this.targets.push({ UID: a, nickname: "" }); return this } }, addActionLink: function (a, b) { this.actionLinks.push({ text: a, href: b ? b : "" }); return this }, addMediaItem: function (a) { this.mediaItems.push(a); return this }, setTitle: function (a) { this.title = a; return this },
            setLinkBack: function (a) { this.linkBack = a; return this }, setUserMessage: function (a) { this.userMessage = a ? a : ""; return this }, setDescription: function (a) { this.description = a ? a : ""; return this }, addImage: function (a, b) { this.addMediaItem({ type: "image", src: a, href: b }) }, getImages: function () { return new gigya.socialize.Collection(this.images, "") }, getTargets: function () { return new gigya.socialize.Collection(this.targets, "UID") }, setIconURL: function (a) { this.iconURL = a; return this }, getIconURL: function () { return this.iconURL },
            getDate: function () { return this.date }, setActionData1: function (a) { this.actionData1 = a; return this }, getActionData1: function () { return this.actionData1 }, setActionData2: function (a) { this.actionData2 = a; return this }, getActionData2: function () { return this.actionData2 }, setSubtitle: function (a) { this.subtitle = a; return this }, getSubtitle: function () { return this.subtitle }
        }
    })(); gigya.socialize.addEventHandlers({ listenerType: "component" }, { onFacebookLoaded: function () { gigya.external.facebook.retryPending() }, onFBCRefreshed: function () { gigya.external.facebook.retryPending() } });
    gigya.auth.loginToken.migrateExisting(); gigya.reports.trackAddressBarShares(); if (gigya.thisScript.APIKey) {
        var t = false; if (gigya.localInfo.isSafari) try { window.localStorage.setItem("gigTest", "1"); window.localStorage.removeItem("gigTest") } catch (x) { x.code === DOMException.QUOTA_EXCEEDED_ERR && window.localStorage.length === 0 && (t = true) } if (gigya.localInfo.isSafari && !t) {
            gigya.global._onIDs = function (a) {
                if (a && a.data && a.data.indexOf && a.data.indexOf("gcid=") == 0) {
                    a = gigya.utils.keyValue.deserialize(a.data); gigya.log.log("Safari IDs Proxy: Got callback with this response",
                    a); if (a) { gigya.partnerSettings.gcid = a.gcid; gigya.partnerSettings.ucid = a.ucid } gigya.callsQueue.release("safariIDs", "API"); a = gigya.global.ifrGcid; a.parentNode.removeChild(a); delete gigya.global.ifrGcid; window.removeEventListener("message", gigya.global._onIDs, false); delete gigya.global._onIDs
                }
            }; gigya.callsQueue.hold("safariIDs", "API"); window.addEventListener("message", gigya.global._onIDs, false); var r = document.createElement("iframe"), t = document.location.protocol + "//" + document.location.href.split("?")[0].split("#")[0].split("/")[2],
            w = gigya.partnerSettings.ssoKey || gigya.thisScript.APIKey; r.src = "https://cdns.gigya.com/gs/SafariIDsProxy.htm?APIKey=" + encodeURIComponent(w) + "&domain=" + encodeURIComponent(t); r.style.width = "30px"; r.style.height = "10px"; r.style.position = "absolute"; r.style.top = "-1000px"; r.style.left = "-1000px"; gigya.global.ifrGcid = r; gigya.log.log("Safari IDs Proxy: Calling getIDs", { apiKey: w, domain: t }); document.body ? gigya.utils.DOM.appendToBody(r) : gigya.utils.functions.invokeOnPageLoad(function () { gigya.utils.DOM.appendToBody(r) })
        }
    } gigya.auth.loginToken.setFromGAC();
    typeof gigya_omniture_conf != "undefined" && gigya.utils.functions.invokeOnPageLoad(function () { gigya.utils.script.load(gigya.thisScript.base + "/js/GenesisExchange_Gigya.min.js") }); gigya.utils.functions.invokeOnPageLoad(function () { gigya.reports.report("loadc", gigya.thisScript.APIKey, null, null, null, { sref: document.referrer }) }); gigya.thisScript.APIKey && gigya.utils.functions.invokeOnPageLoad(function () { window.setTimeout(function () { gigya.socialize.trackReferrals() }, 1E3) }); if (gigya.partnerSettings.ssoKey && gigya.thisScript.APIKey &&
    !gigya.auth.loginToken.get()) { gigya.callsQueue.hold("SSO", "API"); gigya.utils.SSO.getGroupToken({ callback: function (a) { gigya.auth.loginToken.setFromSSOResponse(a); gigya.callsQueue.release("SSO", "API") } }) } gigya.socialize.waitForService({
        service: "facebook", callback: function () {
            var a = gigya.external.facebook.getParams(); gigya.thisScript.globalConf.autoLogin && (a && a.fb_at && !gigya.auth.loginToken.get()) && gigya.socialize.notifyLogin({ providerSessions: { facebook: { authToken: a.fb_at, tokenExpiresIn: a.fb_exp } } }, {
                context: {
                    eventOnSuccess: {
                        eventName: "login",
                        provider: "facebook"
                    }
                }
            })
        }
    }); gigya.thisScript.globalConf.customEventMap && gigya.events.addMap(gigya.thisScript.globalConf.customEventMap); var u = gigya.utils.URL.getParamsFromURL(document.location.href); u.gig_event && (u.errorCode == 0 && gigya.auth.loginToken.get()) && gigya.utils.SSO.setGroupTokenFromResponse({ errorCode: 0, login_token: gigya.auth.loginToken.get(), expires_in: u.expires_in }, function () {
        gigya.socialize.getUserInfo({
            signIDs: true, callback: function (a) {
                a = gigya.socialize._addUserInfoToEvent(a, {
                    errorCode: u.errorCode,
                    eventName: u.gig_event
                }, true); gigya.events.global.dispatchWhenHandlerAdded(a)
            }
        })
    }, gigya.thisScript.globalConf.legacyCrossSiteMethod); gigya.utils.functions.makePublic("gigya.services.socialize", gigya.socialize); gigya.utils.functions.makePublic("gigya.services.gcs", gigya.gcs); gigya.utils.functions.makePublic("gigya.services.gm", gigya.gm); gigya.utils.functions.makePublic("gigya.services.comments", gigya.comments); gigya.utils.functions.makePublic("gigya._getLoggingStatus", gigya.log._isEnabled); typeof onGigyaServiceReady ==
    "function" && onGigyaServiceReady("socialize")
}();