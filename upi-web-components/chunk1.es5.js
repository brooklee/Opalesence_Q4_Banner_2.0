/*! Built with http://stenciljs.com */
UpiWebComponents.loadBundle("./chunk1.js", ["exports"], function (e) { window.UpiWebComponents.h; var n = "/", t = "./", r = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g"); function i(e) { return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"); } function a(e) { return e.replace(/([=!:$/()])/g, "\\$1"); } function u(e) { return e && e.sensitive ? "" : "i"; } function o(e, l, p) { return e instanceof RegExp ? function (e, n) { if (!n)
    return e; var t = e.source.match(/\((?!\?)/g); if (t)
    for (var r = 0; r < t.length; r++)
        n.push({ name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, pattern: null }); return e; }(e, l) : Array.isArray(e) ? function (e, n, t) { for (var r = [], i = 0; i < e.length; i++)
    r.push(o(e[i], n, t).source); return new RegExp("(?:" + r.join("|") + ")", u(t)); }(e, l, p) : function (e, o, l) { return function (e, r, a) { for (var o = (a = a || {}).strict, l = !1 !== a.end, p = i(a.delimiter || n), s = a.delimiters || t, c = [].concat(a.endsWith || []).map(i).concat("$").join("|"), f = "", h = !1, d = 0; d < e.length; d++) {
    var g = e[d];
    if ("string" == typeof g)
        f += i(g), h = d === e.length - 1 && s.indexOf(g[g.length - 1]) > -1;
    else {
        var m = i(g.prefix), x = g.repeat ? "(?:" + g.pattern + ")(?:" + m + "(?:" + g.pattern + "))*" : g.pattern;
        r && r.push(g), g.optional ? g.partial ? f += m + "(" + x + ")?" : f += "(?:" + m + "(" + x + "))?" : f += m + "(" + x + ")";
    }
} return l ? (o || (f += "(?:" + p + ")?"), f += "$" === c ? "$" : "(?=" + c + ")") : (o || (f += "(?:" + p + "(?=" + c + "))?"), h || (f += "(?=" + p + "|" + c + ")")), new RegExp("^" + f, u(a)); }(function (e, u) { for (var o, l = [], p = 0, s = 0, c = "", f = u && u.delimiter || n, h = u && u.delimiters || t, d = !1; null !== (o = r.exec(e));) {
    var g = o[0], m = o[1], x = o.index;
    if (c += e.slice(s, x), s = x + g.length, m)
        c += m[1], d = !0;
    else {
        var v = "", $ = e[s], y = o[2], w = o[3], E = o[4], b = o[5];
        if (!d && c.length) {
            var R = c.length - 1;
            h.indexOf(c[R]) > -1 && (v = c[R], c = c.slice(0, R));
        }
        c && (l.push(c), c = "", d = !1);
        var j = "" !== v && void 0 !== $ && $ !== v, O = "+" === b || "*" === b, W = "?" === b || "*" === b, k = v || f, A = w || E;
        l.push({ name: y || p++, prefix: v, delimiter: k, optional: W, repeat: O, partial: j, pattern: A ? a(A) : "[^" + i(k) + "]+?" });
    }
} return (c || s < e.length) && l.push(c + e.substr(s)), l; }(e, l), o, l); }(e, l, p); } var l = {}; var p = 0; e.matchPath = function (e, n) {
    if (n === void 0) { n = {}; }
    "string" == typeof n && (n = { path: n });
    var _a = n.path, t = _a === void 0 ? "/" : _a, _b = n.exact, r = _b === void 0 ? !1 : _b, _c = n.strict, i = _c === void 0 ? !1 : _c, _d = function (e, n) { var t = "" + n.end + n.strict, r = l[t] || (l[t] = {}), i = JSON.stringify(e); if (r[i])
        return r[i]; var a = [], u = { re: o(e, a, n), keys: a }; return p < 1e4 && (r[i] = u, p += 1), u; }(t, { end: r, strict: i }), a = _d.re, u = _d.keys, s = a.exec(e);
    if (!s)
        return null;
    var c = s[0], f = s.slice(1), h = e === c;
    return r && !h ? null : { path: t, url: "/" === t && "" === c ? "/" : c, isExact: h, params: u.reduce(function (e, n, t) { return e[n.name] = f[t], e; }, {}) };
}; });
