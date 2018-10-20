/*!
 * jQuery JavaScript Library v1.11.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-17T15:27Z
 */
function expandTabs(e) {
    if (0 == e.find(".is-active").size()) {
        var t = e.closest(".accordion__section"),
            n = e.find(".js-accordion-body"),
            i = e.find(".js-accordion-title"),
            o = t.index();
        if ($(".js-accordion-body").not(n).slideUp(), $(".js-accordion-title").not(i).removeClass("is-active"), i.toggleClass("is-active"), n.stop().slideToggle(), !e.parents().hasClass("accordions")) return;
        var r = e.closest(".accordions").find(".accordions__images");
        r.find("img").eq(o).addClass("is-active").siblings().removeClass("is-active")
    }
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = oe.type(e);
        return "function" === n || oe.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (oe.isFunction(t)) return oe.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return oe.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (pe.test(t)) return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return oe.inArray(e, t) >= 0 !== n
        })
    }

    function o(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function r(e) {
        var t = we[e] = {};
        return oe.each(e.match(be) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        he.addEventListener ? (he.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1)) : (he.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
    }

    function a() {
        (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (s(), oe.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Ce, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Se.test(n) ? oe.parseJSON(n) : n
                } catch (o) {}
                oe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function d(e) {
        var t;
        for (t in e)
            if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, i) {
        if (oe.acceptData(e)) {
            var o, r, s = oe.expando,
                a = e.nodeType,
                l = a ? oe.cache : e,
                d = a ? e[s] : e[s] && s;
            if (d && l[d] && (i || l[d].data) || void 0 !== n || "string" != typeof t) return d || (d = a ? e[s] = V.pop() || oe.guid++ : s), l[d] || (l[d] = a ? {} : {
                toJSON: oe.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[d] = oe.extend(l[d], t) : l[d].data = oe.extend(l[d].data, t)), r = l[d], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[oe.camelCase(t)] = n), "string" == typeof t ? (o = r[t], null == o && (o = r[oe.camelCase(t)])) : o = r, o
        }
    }

    function u(e, t, n) {
        if (oe.acceptData(e)) {
            var i, o, r = e.nodeType,
                s = r ? oe.cache : e,
                a = r ? e[oe.expando] : oe.expando;
            if (s[a]) {
                if (t && (i = n ? s[a] : s[a].data)) {
                    oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in i ? t = [t] : (t = oe.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                    for (; o--;) delete i[t[o]];
                    if (n ? !d(i) : !oe.isEmptyObject(i)) return
                }(n || (delete s[a].data, d(s[a]))) && (r ? oe.cleanData([e], !0) : ne.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }

    function p() {
        return !0
    }

    function f() {
        return !1
    }

    function h() {
        try {
            return he.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = Me.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, i, o = 0,
            r = typeof e.getElementsByTagName !== Te ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Te ? e.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || oe.nodeName(i, t) ? r.push(i) : oe.merge(r, g(i, t));
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], r) : r
    }

    function v(e) {
        Ne.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type, e
    }

    function w(e) {
        var t = Ye.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) oe._data(n, "globalEval", !t || oe._data(t[i], "globalEval"))
    }

    function k(e, t) {
        if (1 === t.nodeType && oe.hasData(e)) {
            var n, i, o, r = oe._data(e),
                s = oe._data(t, r),
                a = r.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (i = 0, o = a[n].length; o > i; i++) oe.event.add(t, n, a[n][i])
            }
            s.data && (s.data = oe.extend({}, s.data))
        }
    }

    function T(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[oe.expando]) {
                o = oe._data(t);
                for (i in o.events) oe.removeEvent(t, i, o.handle);
                t.removeAttribute(oe.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !oe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ne.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function S(t, n) {
        var i, o = oe(n.createElement(t)).appendTo(n.body),
            r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : oe.css(o[0], "display");
        return o.detach(), r
    }

    function C(e) {
        var t = he,
            n = Ze[e];
        return n || (n = S(e, t), "none" !== n && n || (Ke = (Ke || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), n = S(e, t), Ke.detach()), Ze[e] = n), n
    }

    function $(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function E(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = pt.length; o--;)
            if (t = pt[o] + n, t in e) return t;
        return i
    }

    function A(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (r[s] = oe._data(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ae(i) && (r[s] = oe._data(i, "olddisplay", C(i.nodeName)))) : (o = Ae(i), (n && "none" !== n || !o) && oe._data(i, "olddisplay", o ? n : oe.css(i, "display"))));
        for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function j(e, t, n) {
        var i = lt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function N(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += oe.css(e, n + Ee[r], !0, o)), i ? ("content" === n && (s -= oe.css(e, "padding" + Ee[r], !0, o)), "margin" !== n && (s -= oe.css(e, "border" + Ee[r] + "Width", !0, o))) : (s += oe.css(e, "padding" + Ee[r], !0, o), "padding" !== n && (s += oe.css(e, "border" + Ee[r] + "Width", !0, o)));
        return s
    }

    function D(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = et(e),
            s = ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = tt(e, t, r), (0 > o || null == o) && (o = e.style[t]), it.test(o)) return o;
            i = s && (ne.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + N(e, t, n || (s ? "border" : "content"), i, r) + "px"
    }

    function L(e, t, n, i, o) {
        return new L.prototype.init(e, t, n, i, o)
    }

    function H() {
        return setTimeout(function() {
            ft = void 0
        }), ft = oe.now()
    }

    function _(e, t) {
        var n, i = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Ee[o], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function O(e, t, n) {
        for (var i, o = (bt[t] || []).concat(bt["*"]), r = 0, s = o.length; s > r; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function M(e, t, n) {
        var i, o, r, s, a, l, d, c, u = this,
            p = {},
            f = e.style,
            h = e.nodeType && Ae(e),
            m = oe._data(e, "fxshow");
        n.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], d = oe.css(e, "display"), c = "none" === d ? oe._data(e, "olddisplay") || C(e.nodeName) : d, "inline" === c && "none" === oe.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.shrinkWrapBlocks() || u.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], mt.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i]) continue;
                    h = !0
                }
                p[i] = m && m[i] || oe.style(e, i)
            } else d = void 0;
        if (oe.isEmptyObject(p)) "inline" === ("none" === d ? C(e.nodeName) : d) && (f.display = d);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = oe._data(e, "fxshow", {}), r && (m.hidden = !h), h ? oe(e).show() : u.done(function() {
                oe(e).hide()
            }), u.done(function() {
                var t;
                oe._removeData(e, "fxshow");
                for (t in p) oe.style(e, t, p[t])
            });
            for (i in p) s = O(h ? m[i] : 0, i, u), i in m || (m[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function P(e, t) {
        var n, i, o, r, s;
        for (n in e)
            if (i = oe.camelCase(n), o = t[i], r = e[n], oe.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = oe.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
    }

    function z(e, t, n) {
        var i, o, r = 0,
            s = yt.length,
            a = oe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = ft || H(), n = Math.max(0, d.startTime + d.duration - t), i = n / d.duration || 0, r = 1 - i, s = 0, l = d.tweens.length; l > s; s++) d.tweens[s].run(r);
                return a.notifyWith(e, [d, r, n]), 1 > r && l ? n : (a.resolveWith(e, [d]), !1)
            },
            d = a.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ft || H(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = oe.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                    return d.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? d.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) d.tweens[n].run(1);
                    return t ? a.resolveWith(e, [d, t]) : a.rejectWith(e, [d, t]), this
                }
            }),
            c = d.props;
        for (P(c, d.opts.specialEasing); s > r; r++)
            if (i = yt[r].call(d, e, c, d.opts)) return i;
        return oe.map(c, O, d), oe.isFunction(d.opts.start) && d.opts.start.call(e, d), oe.fx.timer(oe.extend(l, {
            elem: e,
            anim: d,
            queue: d.opts.queue
        })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }

    function q(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(be) || [];
            if (oe.isFunction(n))
                for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function F(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, oe.each(e[a] || [], function(e, a) {
                var d = a(t, n, i);
                return "string" != typeof d || s || r[d] ? s ? !(l = d) : void 0 : (t.dataTypes.unshift(d), o(d), !1)
            }), l
        }
        var r = {},
            s = e === It;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function W(e, t) {
        var n, i, o = oe.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && oe.extend(!0, e, n), e
    }

    function R(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o)
            for (s in a)
                if (a[s] && a[s].test(o)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (s in n) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    r = s;
                    break
                }
                i || (i = s)
            }
            r = r || i
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function I(e, t, n, i) {
        var o, r, s, a, l, d = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
        for (r = c.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = d[l + " " + r] || d["* " + r], !s)
                for (o in d)
                    if (a = o.split(" "), a[1] === r && (s = d[l + " " + a[0]] || d["* " + a[0]])) {
                        s === !0 ? s = d[o] : d[o] !== !0 && (r = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: s ? u : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function B(e, t, n, i) {
        var o;
        if (oe.isArray(t)) oe.each(t, function(t, o) {
            n || Yt.test(e) ? i(e, o) : B(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== oe.type(t)) i(e, t);
        else
            for (o in t) B(e + "[" + o + "]", t[o], n, i)
    }

    function U() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function X() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function Y(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var V = [],
        G = V.slice,
        J = V.concat,
        Q = V.push,
        K = V.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        ne = {},
        ie = "1.11.2",
        oe = function(e, t) {
            return new oe.fn.init(e, t)
        },
        re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        se = /^-ms-/,
        ae = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: ie,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return G.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return oe.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Q,
        sort: V.sort,
        splice: V.splice
    }, oe.extend = oe.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            d = !1;
        for ("boolean" == typeof s && (d = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (o = arguments[a]))
                for (i in o) e = s[i], n = o[i], s !== n && (d && n && (oe.isPlainObject(n) || (t = oe.isArray(n))) ? (t ? (t = !1, r = e && oe.isArray(e) ? e : []) : r = e && oe.isPlainObject(e) ? e : {}, s[i] = oe.extend(d, r, n)) : void 0 !== n && (s[i] = n));
        return s
    }, oe.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === oe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !oe.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && oe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(se, "ms-").replace(ae, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var o, r = 0,
                s = e.length,
                a = n(e);
            if (i) {
                if (a)
                    for (; s > r && (o = t.apply(e[r], i), o !== !1); r++);
                else
                    for (r in e)
                        if (o = t.apply(e[r], i), o === !1) break
            } else if (a)
                for (; s > r && (o = t.call(e[r], r, e[r]), o !== !1); r++);
            else
                for (r in e)
                    if (o = t.call(e[r], r, e[r]), o === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(re, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : Q.call(i, e)), i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (K) return K.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[o++] = t[i++];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i, o = [], r = 0, s = e.length, a = !n; s > r; r++) i = !t(e[r], r), i !== a && o.push(e[r]);
            return o
        },
        map: function(e, t, i) {
            var o, r = 0,
                s = e.length,
                a = n(e),
                l = [];
            if (a)
                for (; s > r; r++) o = t(e[r], r, i), null != o && l.push(o);
            else
                for (r in e) o = t(e[r], r, i), null != o && l.push(o);
            return J.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), oe.isFunction(e) ? (n = G.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(G.call(arguments)))
            }, i.guid = e.guid = e.guid || oe.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var de =
        /*!
         * Sizzle CSS Selector Engine v2.2.0-pre
         * http://sizzlejs.com/
         *
         * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-12-16
         */
        function(e) {
            function t(e, t, n, i) {
                var o, r, s, a, l, d, u, f, h, m;
                if ((t ? t.ownerDocument || t : F) !== L && D(t), t = t || L, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
                if (!i && _) {
                    if (11 !== a && (o = ye.exec(e)))
                        if (s = o[1]) {
                            if (9 === a) {
                                if (r = t.getElementById(s), !r || !r.parentNode) return n;
                                if (r.id === s) return n.push(r), n
                            } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && z(t, r) && r.id === s) return n.push(r), n
                        } else {
                            if (o[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = o[3]) && x.getElementsByClassName) return K.apply(n, t.getElementsByClassName(s)), n
                        }
                    if (x.qsa && (!O || !O.test(e))) {
                        if (f = u = q, h = t, m = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            for (d = C(e), (u = t.getAttribute("id")) ? f = u.replace(we, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = d.length; l--;) d[l] = f + p(d[l]);
                            h = be.test(e) && c(t.parentNode) || t, m = d.join(",")
                        }
                        if (m) try {
                            return K.apply(n, h.querySelectorAll(m)), n
                        } catch (g) {} finally {
                            u || t.removeAttribute("id")
                        }
                    }
                }
                return E(e.replace(le, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[q] = !0, e
            }

            function o(e) {
                var t = L.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) k.attrHandle[n[i]] = t
            }

            function s(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function a(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function d(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function u() {}

            function p(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function f(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    r = R++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) return e(t, n, r)
                } : function(t, n, s) {
                    var a, l, d = [W, r];
                    if (s) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || o) {
                                if (l = t[q] || (t[q] = {}), (a = l[i]) && a[0] === W && a[1] === r) return d[2] = a[2];
                                if (l[i] = d, d[2] = e(t, n, s)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, i) {
                for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
                return i
            }

            function g(e, t, n, i, o) {
                for (var r, s = [], a = 0, l = e.length, d = null != t; l > a; a++)(r = e[a]) && (!n || n(r, i, o)) && (s.push(r), d && t.push(a));
                return s
            }

            function v(e, t, n, o, r, s) {
                return o && !o[q] && (o = v(o)), r && !r[q] && (r = v(r, s)), i(function(i, s, a, l) {
                    var d, c, u, p = [],
                        f = [],
                        h = s.length,
                        v = i || m(t || "*", a.nodeType ? [a] : a, []),
                        y = !e || !i && t ? v : g(v, p, e, a, l),
                        b = n ? r || (i ? e : h || o) ? [] : s : y;
                    if (n && n(y, b, a, l), o)
                        for (d = g(b, f), o(d, [], a, l), c = d.length; c--;)(u = d[c]) && (b[f[c]] = !(y[f[c]] = u));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (d = [], c = b.length; c--;)(u = b[c]) && d.push(y[c] = u);
                                r(null, b = [], d, l)
                            }
                            for (c = b.length; c--;)(u = b[c]) && (d = r ? ee(i, u) : p[c]) > -1 && (i[d] = !(s[d] = u))
                        }
                    } else b = g(b === s ? b.splice(h, b.length) : b), r ? r(null, s, b, l) : K.apply(s, b)
                })
            }

            function y(e) {
                for (var t, n, i, o = e.length, r = k.relative[e[0].type], s = r || k.relative[" "], a = r ? 1 : 0, l = f(function(e) {
                        return e === t
                    }, s, !0), d = f(function(e) {
                        return ee(t, e) > -1
                    }, s, !0), c = [function(e, n, i) {
                        var o = !r && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : d(e, n, i));
                        return t = null, o
                    }]; o > a; a++)
                    if (n = k.relative[e[a].type]) c = [f(h(c), n)];
                    else {
                        if (n = k.filter[e[a].type].apply(null, e[a].matches), n[q]) {
                            for (i = ++a; o > i && !k.relative[e[i].type]; i++);
                            return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(le, "$1"), n, i > a && y(e.slice(a, i)), o > i && y(e = e.slice(i)), o > i && p(e))
                        }
                        c.push(n)
                    }
                return h(c)
            }

            function b(e, n) {
                var o = n.length > 0,
                    r = e.length > 0,
                    s = function(i, s, a, l, d) {
                        var c, u, p, f = 0,
                            h = "0",
                            m = i && [],
                            v = [],
                            y = A,
                            b = i || r && k.find.TAG("*", d),
                            w = W += null == y ? 1 : Math.random() || .1,
                            x = b.length;
                        for (d && (A = s !== L && s); h !== x && null != (c = b[h]); h++) {
                            if (r && c) {
                                for (u = 0; p = e[u++];)
                                    if (p(c, s, a)) {
                                        l.push(c);
                                        break
                                    }
                                d && (W = w)
                            }
                            o && ((c = !p && c) && f--, i && m.push(c))
                        }
                        if (f += h, o && h !== f) {
                            for (u = 0; p = n[u++];) p(m, v, s, a);
                            if (i) {
                                if (f > 0)
                                    for (; h--;) m[h] || v[h] || (v[h] = J.call(l));
                                v = g(v)
                            }
                            K.apply(l, v), d && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return d && (W = w, A = y), m
                    };
                return o ? i(s) : s
            }
            var w, x, k, T, S, C, $, E, A, j, N, D, L, H, _, O, M, P, z, q = "sizzle" + 1 * new Date,
                F = e.document,
                W = 0,
                R = 0,
                I = n(),
                B = n(),
                U = n(),
                X = function(e, t) {
                    return e === t && (N = !0), 0
                },
                Y = 1 << 31,
                V = {}.hasOwnProperty,
                G = [],
                J = G.pop,
                Q = G.push,
                K = G.push,
                Z = G.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = ie.replace("w", "w#"),
                re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
                se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                ae = new RegExp(ne + "+", "g"),
                le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                de = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                pe = new RegExp(se),
                fe = new RegExp("^" + oe + "$"),
                he = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + re),
                    PSEUDO: new RegExp("^" + se),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                we = /'|\\/g,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                ke = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Te = function() {
                    D()
                };
            try {
                K.apply(G = Z.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
            } catch (Se) {
                K = {
                    apply: G.length ? function(e, t) {
                        Q.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            x = t.support = {}, S = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, D = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : F;
                return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, H = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), _ = !S(i), x.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), x.getElementsByTagName = o(function(e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                }), x.getElementsByClassName = ve.test(i.getElementsByClassName), x.getById = o(function(e) {
                    return H.appendChild(e).id = q, !i.getElementsByName || !i.getElementsByName(q).length
                }), x.getById ? (k.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && _) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, k.filter.ID = function(e) {
                    var t = e.replace(xe, ke);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete k.find.ID, k.filter.ID = function(e) {
                    var t = e.replace(xe, ke);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), k.find.TAG = x.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, k.find.CLASS = x.getElementsByClassName && function(e, t) {
                    return _ ? t.getElementsByClassName(e) : void 0
                }, M = [], O = [], (x.qsa = ve.test(i.querySelectorAll)) && (o(function(e) {
                    H.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + q + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || O.push(".#.+[+~]")
                }), o(function(e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                })), (x.matchesSelector = ve.test(P = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
                    x.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), M.push("!=", se)
                }), O = O.length && new RegExp(O.join("|")), M = M.length && new RegExp(M.join("|")), t = ve.test(H.compareDocumentPosition), z = t || ve.test(H.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, X = t ? function(e, t) {
                    if (e === t) return N = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === F && z(F, e) ? -1 : t === i || t.ownerDocument === F && z(F, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return N = !0, 0;
                    var n, o = 0,
                        r = e.parentNode,
                        a = t.parentNode,
                        l = [e],
                        d = [t];
                    if (!r || !a) return e === i ? -1 : t === i ? 1 : r ? -1 : a ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                    if (r === a) return s(e, t);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (n = t; n = n.parentNode;) d.unshift(n);
                    for (; l[o] === d[o];) o++;
                    return o ? s(l[o], d[o]) : l[o] === F ? -1 : d[o] === F ? 1 : 0
                }, i) : L
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== L && D(e), n = n.replace(ue, "='$1']"), x.matchesSelector && _ && (!M || !M.test(n)) && (!O || !O.test(n))) try {
                    var i = P.call(e, n);
                    if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (o) {}
                return t(n, L, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== L && D(e), z(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== L && D(e);
                var n = k.attrHandle[t.toLowerCase()],
                    i = n && V.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
                return void 0 !== i ? i : x.attributes || !_ ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (N = !x.detectDuplicates, j = !x.sortStable && e.slice(0), e.sort(X), N) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return j = null, e
            }, T = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += T(t);
                return n
            }, k = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xe, ke), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, ke), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(xe, ke).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = I[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && I(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(o) {
                            var r = t.attr(o, e);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var d, c, u, p, f, h, m = r !== s ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (u = t; u = u[m];)
                                            if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (c = g[q] || (g[q] = {}), d = c[e] || [], f = d[0] === W && d[1], p = d[0] === W && d[2], u = f && g.childNodes[f]; u = ++f && u && u[m] || (p = f = 0) || h.pop();)
                                        if (1 === u.nodeType && ++p && u === t) {
                                            c[e] = [W, f, p];
                                            break
                                        }
                                } else if (y && (d = (t[q] || (t[q] = {}))[e]) && d[0] === W) p = d[1];
                                else
                                    for (;
                                        (u = ++f && u && u[m] || (p = f = 0) || h.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++p || (y && ((u[q] || (u[q] = {}))[e] = [W, p]), u !== t)););
                                return p -= o, p === i || p % i === 0 && p / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var o, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[q] ? r(n) : r.length > 1 ? (o = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, o = r(e, n), s = o.length; s--;) i = ee(e, o[s]), e[i] = !(t[i] = o[s])
                        }) : function(e) {
                            return r(e, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            o = $(e.replace(le, "$1"));
                        return o[q] ? i(function(e, t, n, i) {
                            for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                        }) : function(e, i, r) {
                            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(xe, ke),
                            function(t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, ke).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === H
                    },
                    focus: function(e) {
                        return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !k.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return me.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: d(function() {
                        return [0]
                    }),
                    last: d(function(e, t) {
                        return [t - 1]
                    }),
                    eq: d(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: d(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: d(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: d(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: d(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, k.pseudos.nth = k.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) k.pseudos[w] = a(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) k.pseudos[w] = l(w);
            return u.prototype = k.filters = k.pseudos, k.setFilters = new u, C = t.tokenize = function(e, n) {
                var i, o, r, s, a, l, d, c = B[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = e, l = [], d = k.preFilter; a;) {
                    (!i || (o = de.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ce.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(le, " ")
                    }), a = a.slice(i.length));
                    for (s in k.filter) !(o = he[s].exec(a)) || d[s] && !(o = d[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? t.error(e) : B(e, l).slice(0)
            }, $ = t.compile = function(e, t) {
                var n, i = [],
                    o = [],
                    r = U[e + " "];
                if (!r) {
                    for (t || (t = C(e)), n = t.length; n--;) r = y(t[n]), r[q] ? i.push(r) : o.push(r);
                    r = U(e, b(o, i)), r.selector = e
                }
                return r
            }, E = t.select = function(e, t, n, i) {
                var o, r, s, a, l, d = "function" == typeof e && e,
                    u = !i && C(e = d.selector || e);
                if (n = n || [], 1 === u.length) {
                    if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === t.nodeType && _ && k.relative[r[1].type]) {
                        if (t = (k.find.ID(s.matches[0].replace(xe, ke), t) || [])[0], !t) return n;
                        d && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !k.relative[a = s.type]);)
                        if ((l = k.find[a]) && (i = l(s.matches[0].replace(xe, ke), be.test(r[0].type) && c(t.parentNode) || t))) {
                            if (r.splice(o, 1), e = i.length && p(r), !e) return K.apply(n, i), n;
                            break
                        }
                }
                return (d || $(e, u))(i, t, !_, n, be.test(e) && c(t.parentNode) || t), n
            }, x.sortStable = q.split("").sort(X).join("") === q, x.detectDuplicates = !!N, D(), x.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(L.createElement("div"))
            }), o(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), o(function(e) {
                return null == e.getAttribute("disabled")
            }) || r(te, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
    oe.find = de, oe.expr = de.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = de.uniqueSort, oe.text = de.getText, oe.isXMLDoc = de.isXML, oe.contains = de.contains;
    var ce = oe.expr.match.needsContext,
        ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pe = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                for (t = 0; o > t; t++)
                    if (oe.contains(i[t], this)) return !0
            }));
            for (t = 0; o > t; t++) oe.find(e, i[t], n);
            return n = this.pushStack(o > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ce.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var fe, he = e.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = oe.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || fe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), ue.test(n[1]) && oe.isPlainObject(t))
                        for (n in t) oe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (i = he.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return fe.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = he, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? "undefined" != typeof fe.ready ? fe.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
        };
    ge.prototype = oe.fn, fe = oe(he);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.extend({
        dir: function(e, t, n) {
            for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !oe(o).is(n));) 1 === o.nodeType && i.push(o), o = o[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), oe.fn.extend({
        has: function(e) {
            var t, n = oe(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (oe.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], s = ce.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? oe.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return oe.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return oe.dir(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return oe.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return oe.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return oe.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return oe.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return oe.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return oe.sibling(e.firstChild)
        },
        contents: function(e) {
            return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(n, i) {
            var o = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = oe.filter(i, o)), this.length > 1 && (ye[e] || (o = oe.unique(o)), ve.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var be = /\S+/g,
        we = {};
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? we[e] || r(e) : oe.extend({}, e);
        var t, n, i, o, s, a, l = [],
            d = !e.once && [],
            c = function(r) {
                for (n = e.memory && r, i = !0, s = a || 0, a = 0, o = l.length, t = !0; l && o > s; s++)
                    if (l[s].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, l && (d ? d.length && c(d.shift()) : n ? l = [] : u.disable())
            },
            u = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function r(t) {
                            oe.each(t, function(t, n) {
                                var i = oe.type(n);
                                "function" === i ? e.unique && u.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), t ? o = l.length : n && (a = i, c(n))
                    }
                    return this
                },
                remove: function() {
                    return l && oe.each(arguments, function(e, n) {
                        for (var i;
                            (i = oe.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (o >= i && o--, s >= i && s--)
                    }), this
                },
                has: function(e) {
                    return e ? oe.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = d = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return d = void 0, n || u.disable(), this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(e, n) {
                    return !l || i && !d || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? d.push(n) : c(n)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, oe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return oe.Deferred(function(n) {
                            oe.each(t, function(t, r) {
                                var s = oe.isFunction(e[t]) && e[t];
                                o[r[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? oe.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, oe.each(t, function(e, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, i, o = 0,
                r = G.call(arguments),
                s = r.length,
                a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : oe.Deferred(),
                d = function(e, n, i) {
                    return function(o) {
                        n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && oe.isFunction(r[o].promise) ? r[o].promise().done(d(o, i, r)).fail(l.reject).progress(d(o, n, t)) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    });
    var xe;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--oe.readyWait : !oe.isReady) {
                if (!he.body) return setTimeout(oe.ready);
                oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (xe.resolveWith(he, [oe]), oe.fn.triggerHandler && (oe(he).triggerHandler("ready"), oe(he).off("ready")))
            }
        }
    }), oe.ready.promise = function(t) {
        if (!xe)
            if (xe = oe.Deferred(), "complete" === he.readyState) setTimeout(oe.ready);
            else if (he.addEventListener) he.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1);
        else {
            he.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == e.frameElement && he.documentElement
            } catch (i) {}
            n && n.doScroll && ! function o() {
                if (!oe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    s(), oe.ready()
                }
            }()
        }
        return xe.promise(t)
    };
    var ke, Te = "undefined";
    for (ke in oe(ne)) break;
    ne.ownLast = "0" !== ke, ne.inlineBlockNeedsLayout = !1, oe(function() {
            var e, t, n, i;
            n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = he.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), oe.acceptData = function(e) {
            var t = oe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ce = /([A-Z])/g;
    oe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando], !!e && !d(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return u(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return u(e, t, !0)
        }
    }), oe.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = oe.data(r), 1 === r.nodeType && !oe._data(r, "parsedAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(r, i, o[i])));
                    oe._data(r, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                oe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                oe.data(this, e, t)
            }) : r ? l(r, e, oe.data(r, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                oe.removeData(this, e)
            })
        }
    }), oe.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = oe._data(e, t), n && (!i || oe.isArray(n) ? i = oe._data(e, t, oe.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = oe.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = oe._queueHooks(e, t),
                s = function() {
                    oe.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return oe._data(e, n) || oe._data(e, n, {
                empty: oe.Callbacks("once memory").add(function() {
                    oe._removeData(e, t + "queue"), oe._removeData(e, n)
                })
            })
        }
    }), oe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = oe.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = oe._data(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ee = ["Top", "Right", "Bottom", "Left"],
        Ae = function(e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        je = oe.access = function(e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                d = null == n;
            if ("object" === oe.type(n)) {
                o = !0;
                for (a in n) oe.access(e, t, a, n[a], !0, r, s)
            } else if (void 0 !== i && (o = !0, oe.isFunction(i) || (s = !0), d && (s ? (t.call(e, i), t = null) : (d = t, t = function(e, t, n) {
                    return d.call(oe(e), n)
                })), t))
                for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : d ? t.call(e) : l ? t(e[0], n) : r
        },
        Ne = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = he.createElement("input"),
            t = he.createElement("div"),
            n = he.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ne.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, i = he.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var De = /^(?:input|select|textarea)$/i,
        Le = /^key/,
        He = /^(?:mouse|pointer|contextmenu)|click/,
        _e = /^(?:focusinfocus|focusoutblur)$/,
        Oe = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, d, c, u, p, f, h, m, g = oe._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = oe.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return typeof oe === Te || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(be) || [""], a = t.length; a--;) r = Oe.exec(t[a]) || [], f = m = r[1], h = (r[2] || "").split(".").sort(), f && (d = oe.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = oe.event.special[f] || {}, u = oe.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && oe.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, l), (p = s[f]) || (p = s[f] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), oe.event.global[f] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, d, c, u, p, f, h, m, g = oe.hasData(e) && oe._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(be) || [""], d = t.length; d--;)
                    if (a = Oe.exec(t[d]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (u = oe.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, p = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) s = p[r], !o && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(r, 1), s.selector && p.delegateCount--, u.remove && u.remove.call(e, s));
                        l && !p.length && (u.teardown && u.teardown.call(e, h, g.handle) !== !1 || oe.removeEvent(e, f, g.handle), delete c[f])
                    } else
                        for (f in c) oe.event.remove(e, f + t[d], n, i, !0);
                oe.isEmptyObject(c) && (delete g.handle, oe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var r, s, a, l, d, c, u, p = [i || he],
                f = te.call(t, "type") ? t.type : t,
                h = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = c = i = i || he, 3 !== i.nodeType && 8 !== i.nodeType && !_e.test(f + oe.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), s = f.indexOf(":") < 0 && "on" + f, t = t[oe.expando] ? t : new oe.Event(f, "object" == typeof t && t),
                    t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), d = oe.event.special[f] || {}, o || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!o && !d.noBubble && !oe.isWindow(i)) {
                    for (l = d.delegateType || f, _e.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), c = a;
                    c === (i.ownerDocument || he) && p.push(c.defaultView || c.parentWindow || e)
                }
                for (u = 0;
                    (a = p[u++]) && !t.isPropagationStopped();) t.type = u > 1 ? l : d.bindType || f, r = (oe._data(a, "events") || {})[t.type] && oe._data(a, "handle"), r && r.apply(a, n), r = s && a[s], r && r.apply && oe.acceptData(a) && (t.result = r.apply(a, n), t.result === !1 && t.preventDefault());
                if (t.type = f, !o && !t.isDefaultPrevented() && (!d._default || d._default.apply(p.pop(), n) === !1) && oe.acceptData(i) && s && i[f] && !oe.isWindow(i)) {
                    c = i[s], c && (i[s] = null), oe.event.triggered = f;
                    try {
                        i[f]()
                    } catch (m) {}
                    oe.event.triggered = void 0, c && (i[s] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, n, i, o, r, s = [],
                a = G.call(arguments),
                l = (oe._data(this, "events") || {})[e.type] || [],
                d = oe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, e) !== !1) {
                for (s = oe.event.handlers.call(this, e, l), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, r = 0;
                        (i = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], r = 0; a > r; r++) i = t[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? oe(n, this).index(l) >= 0 : oe.find(n, this, null, [l]).length), o[n] && o.push(i);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        fix: function(e) {
            if (e[oe.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = He.test(o) ? this.mouseHooks : Le.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, r = t.button,
                    s = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || he, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? oe.event.trigger(o, null, t) : oe.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, oe.removeEvent = he.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === Te && (e[i] = null), e.detachEvent(i, n))
    }, oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : f) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return (!o || o !== i && !oe.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.submitBubbles || (oe.event.special.submit = {
        setup: function() {
            return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = oe.nodeName(t, "input") || oe.nodeName(t, "button") ? t.form : void 0;
                n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), oe._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (oe.event.special.change = {
        setup: function() {
            return De.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), oe.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, e, !0)
            })), !1) : void oe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                De.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
                }), oe._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return oe.event.remove(this, "._change"), !De.test(this.nodeName)
        }
    }), ne.focusinBubbles || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e), !0)
        };
        oe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = oe._data(i, t);
                o || i.addEventListener(e, n, !0), oe._data(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = oe._data(i, t) - 1;
                o ? oe._data(i, t, o) : (i.removeEventListener(e, n, !0), oe._removeData(i, t))
            }
        }
    }), oe.fn.extend({
        on: function(e, t, n, i, o) {
            var r, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (r in e) this.on(r, t, n, e[r], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = f;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return oe().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = oe.guid++)), this.each(function() {
                oe.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function() {
                oe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? oe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Pe = / jQuery\d+="(?:null|\d+)"/g,
        ze = new RegExp("<(?:" + Me + ")[\\s/>]", "i"),
        qe = /^\s+/,
        Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        We = /<([\w:]+)/,
        Re = /<tbody/i,
        Ie = /<|&#?\w+;/,
        Be = /<(?:script|style|link)/i,
        Ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Xe = /^$|\/(?:java|ecma)script/i,
        Ye = /^true\/(.*)/,
        Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Je = m(he),
        Qe = Je.appendChild(he.createElement("div"));
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, oe.extend({
        clone: function(e, t, n) {
            var i, o, r, s, a, l = oe.contains(e.ownerDocument, e);
            if (ne.html5Clone || oe.isXMLDoc(e) || !ze.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Qe.innerHTML = e.outerHTML, Qe.removeChild(r = Qe.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (i = g(r), a = g(e), s = 0; null != (o = a[s]); ++s) i[s] && T(o, i[s]);
            if (t)
                if (n)
                    for (a = a || g(e), i = i || g(r), s = 0; null != (o = a[s]); s++) k(o, i[s]);
                else k(e, r);
            return i = g(r, "script"), i.length > 0 && x(i, !l && g(e, "script")), i = a = o = null, r
        },
        buildFragment: function(e, t, n, i) {
            for (var o, r, s, a, l, d, c, u = e.length, p = m(t), f = [], h = 0; u > h; h++)
                if (r = e[h], r || 0 === r)
                    if ("object" === oe.type(r)) oe.merge(f, r.nodeType ? [r] : r);
                    else if (Ie.test(r)) {
                for (a = a || p.appendChild(t.createElement("div")), l = (We.exec(r) || ["", ""])[1].toLowerCase(), c = Ge[l] || Ge._default, a.innerHTML = c[1] + r.replace(Fe, "<$1></$2>") + c[2], o = c[0]; o--;) a = a.lastChild;
                if (!ne.leadingWhitespace && qe.test(r) && f.push(t.createTextNode(qe.exec(r)[0])), !ne.tbody)
                    for (r = "table" !== l || Re.test(r) ? "<table>" !== c[1] || Re.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;) oe.nodeName(d = r.childNodes[o], "tbody") && !d.childNodes.length && r.removeChild(d);
                for (oe.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = p.lastChild
            } else f.push(t.createTextNode(r));
            for (a && p.removeChild(a), ne.appendChecked || oe.grep(g(f, "input"), v), h = 0; r = f[h++];)
                if ((!i || -1 === oe.inArray(r, i)) && (s = oe.contains(r.ownerDocument, r), a = g(p.appendChild(r), "script"), s && x(a), n))
                    for (o = 0; r = a[o++];) Xe.test(r.type || "") && n.push(r);
            return a = null, p
        },
        cleanData: function(e, t) {
            for (var n, i, o, r, s = 0, a = oe.expando, l = oe.cache, d = ne.deleteExpando, c = oe.event.special; null != (n = e[s]); s++)
                if ((t || oe.acceptData(n)) && (o = n[a], r = o && l[o])) {
                    if (r.events)
                        for (i in r.events) c[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], d ? delete n[a] : typeof n.removeAttribute !== Te ? n.removeAttribute(a) : n[a] = null, V.push(o))
                }
        }
    }), oe.fn.extend({
        text: function(e) {
            return je(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? oe.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || oe.cleanData(g(n)), n.parentNode && (t && oe.contains(n.ownerDocument, n) && x(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && oe.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && oe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return je(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Pe, "") : void 0;
                if ("string" == typeof e && !Be.test(e) && (ne.htmlSerialize || !ze.test(e)) && (ne.leadingWhitespace || !qe.test(e)) && !Ge[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Fe, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, oe.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = J.apply([], e);
            var n, i, o, r, s, a, l = 0,
                d = this.length,
                c = this,
                u = d - 1,
                p = e[0],
                f = oe.isFunction(p);
            if (f || d > 1 && "string" == typeof p && !ne.checkClone && Ue.test(p)) return this.each(function(n) {
                var i = c.eq(n);
                f && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
            });
            if (d && (a = oe.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (r = oe.map(g(a, "script"), b), o = r.length; d > l; l++) i = a, l !== u && (i = oe.clone(i, !0, !0), o && oe.merge(r, g(i, "script"))), t.call(this[l], i, l);
                if (o)
                    for (s = r[r.length - 1].ownerDocument, oe.map(r, w), l = 0; o > l; l++) i = r[l], Xe.test(i.type || "") && !oe._data(i, "globalEval") && oe.contains(s, i) && (i.src ? oe._evalUrl && oe._evalUrl(i.src) : oe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ve, "")));
                a = n = null
            }
            return this
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var n, i = 0, o = [], r = oe(e), s = r.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), oe(r[i])[t](n), Q.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Ke, Ze = {};
    ! function() {
        var e;
        ne.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, i;
            return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
        }
    }();
    var et, tt, nt = /^margin/,
        it = new RegExp("^(" + $e + ")(?!px)[a-z%]+$", "i"),
        ot = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        }, tt = function(e, t, n) {
            var i, o, r, s, a = e.style;
            return n = n || et(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)), it.test(s) && nt.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 === s ? s : s + ""
        }) : he.documentElement.currentStyle && (et = function(e) {
            return e.currentStyle
        }, tt = function(e, t, n) {
            var i, o, r, s, a = e.style;
            return n = n || et(e), s = n ? n[t] : void 0, null == s && a && a[t] && (s = a[t]), it.test(s) && !ot.test(t) && (i = a.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
        }),
        function() {
            function t() {
                var t, n, i, o;
                n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = s = !1, l = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(t, null) || {}).top, s = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, o = t.appendChild(he.createElement("div")), o.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight), t.removeChild(o)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = t.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === o[0].offsetHeight, a && (o[0].style.display = "", o[1].style.display = "none", a = 0 === o[0].offsetHeight), n.removeChild(i))
            }
            var n, i, o, r, s, a, l;
            n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], i = o && o.style, i && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, oe.extend(ne, {
                reliableHiddenOffsets: function() {
                    return null == a && t(), a
                },
                boxSizingReliable: function() {
                    return null == s && t(), s
                },
                pixelPosition: function() {
                    return null == r && t(), r
                },
                reliableMarginRight: function() {
                    return null == l && t(), l
                }
            }))
        }(), oe.swap = function(e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = s[r];
            return o
        };
    var rt = /alpha\([^)]*\)/i,
        st = /opacity\s*=\s*([^)]*)/,
        at = /^(none|table(?!-c[ea]).+)/,
        lt = new RegExp("^(" + $e + ")(.*)$", "i"),
        dt = new RegExp("^([+-])=(" + $e + ")", "i"),
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ut = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pt = ["Webkit", "O", "Moz", "ms"];
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = oe.camelCase(t),
                    l = e.style;
                if (t = oe.cssProps[a] || (oe.cssProps[a] = E(l, a)), s = oe.cssHooks[t] || oe.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t];
                if (r = typeof n, "string" === r && (o = dt.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(oe.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || oe.cssNumber[a] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try {
                    l[t] = n
                } catch (d) {}
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = oe.camelCase(t);
            return t = oe.cssProps[a] || (oe.cssProps[a] = E(e.style, a)), s = oe.cssHooks[t] || oe.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = tt(e, t, i)), "normal" === r && t in ut && (r = ut[t]), "" === n || n ? (o = parseFloat(r), n === !0 || oe.isNumeric(o) ? o || 0 : r) : r
        }
    }), oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? at.test(oe.css(e, "display")) && 0 === e.offsetWidth ? oe.swap(e, ct, function() {
                    return D(e, t, i)
                }) : D(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var o = i && et(e);
                return j(e, n, i ? N(e, t, i, ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), ne.opacity || (oe.cssHooks.opacity = {
        get: function(e, t) {
            return st.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                o = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === oe.trim(r.replace(rt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = rt.test(r) ? r.replace(rt, o) : r + " " + o)
        }
    }), oe.cssHooks.marginRight = $(ne.reliableMarginRight, function(e, t) {
        return t ? oe.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Ee[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, nt.test(e) || (oe.cssHooks[e + t].set = j)
    }), oe.fn.extend({
        css: function(e, t) {
            return je(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (oe.isArray(t)) {
                    for (i = et(e), o = t.length; o > s; s++) r[t[s]] = oe.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ae(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = L, L.prototype = {
        constructor: L,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = L.propHooks[this.prop];
            return e && e.get ? e.get(this) : L.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = L.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
        }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, oe.fx = L.prototype.init, oe.fx.step = {};
    var ft, ht, mt = /^(?:toggle|show|hide)$/,
        gt = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$", "i"),
        vt = /queueHooks$/,
        yt = [M],
        bt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = gt.exec(t),
                    r = o && o[3] || (oe.cssNumber[e] ? "" : "px"),
                    s = (oe.cssNumber[e] || "px" !== r && +i) && gt.exec(oe.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], o = o || [], s = +i || 1;
                    do a = a || ".5", s /= a, oe.style(n.elem, e, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    oe.Animation = oe.extend(z, {
            tweener: function(e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; o > i; i++) n = e[i], bt[n] = bt[n] || [], bt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? yt.unshift(e) : yt.push(e)
            }
        }), oe.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: n || !n && t || oe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !oe.isFunction(t) && t
            };
            return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
            }, i
        }, oe.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = oe.isEmptyObject(e),
                    r = oe.speed(t, n, i),
                    s = function() {
                        var t = z(this, oe.extend({}, e), r);
                        (o || oe._data(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = oe.timers,
                        s = oe._data(this);
                    if (o) s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && vt.test(o) && i(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    (t || !n) && oe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = oe._data(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = oe.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, oe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function(e, t) {
            var n = oe.fn[t];
            oe.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, i, o)
            }
        }), oe.each({
            slideDown: _("show"),
            slideUp: _("hide"),
            slideToggle: _("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            oe.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), oe.timers = [], oe.fx.tick = function() {
            var e, t = oe.timers,
                n = 0;
            for (ft = oe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || oe.fx.stop(), ft = void 0
        }, oe.fx.timer = function(e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function() {
            ht || (ht = setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function() {
            clearInterval(ht), ht = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function(e, t) {
            return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e, t, n, i, o;
            t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = he.createElement("select"), o = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = o.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !o.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
        }();
    var wt = /\r/g;
    oe.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0]; {
                if (arguments.length) return i = oe.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, oe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                });
                if (o) return t = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)
            }
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (n = i[l], (n.selected || l === o) && (ne.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(), r) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = oe.makeArray(t), s = o.length; s--;)
                        if (i = o[s], oe.inArray(oe.valHooks.option.get(i), r) >= 0) try {
                            i.selected = n = !0
                        } catch (a) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) >= 0 : void 0
            }
        }, ne.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var xt, kt, Tt = oe.expr.attrHandle,
        St = /^(?:checked|selected)$/i,
        Ct = ne.getSetAttribute,
        $t = ne.input;
    oe.fn.extend({
        attr: function(e, t) {
            return je(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === Te ? oe.prop(e, t, n) : (1 === r && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? kt : xt)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = oe.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void oe.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                r = t && t.match(be);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? $t && Ct || !St.test(n) ? e[i] = !1 : e[oe.camelCase("default-" + n)] = e[i] = !1 : oe.attr(e, n, ""), e.removeAttribute(Ct ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), kt = {
        set: function(e, t, n) {
            return t === !1 ? oe.removeAttr(e, n) : $t && Ct || !St.test(n) ? e.setAttribute(!Ct && oe.propFix[n] || n, n) : e[oe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Tt[t] || oe.find.attr;
        Tt[t] = $t && Ct || !St.test(t) ? function(e, t, i) {
            var o, r;
            return i || (r = Tt[t], Tt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, Tt[t] = r), o
        } : function(e, t, n) {
            return n ? void 0 : e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), $t && Ct || (oe.attrHooks.value = {
        set: function(e, t, n) {
            return oe.nodeName(e, "input") ? void(e.defaultValue = t) : xt && xt.set(e, t, n)
        }
    }), Ct || (xt = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Tt.id = Tt.name = Tt.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, oe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: xt.set
    }, oe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            xt.set(e, "" === t ? !1 : t, n)
        }
    }, oe.each(["width", "height"], function(e, t) {
        oe.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ne.style || (oe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Et = /^(?:input|select|textarea|button|object)$/i,
        At = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return je(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = oe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), oe.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, o, r, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return r = 1 !== s || !oe.isXMLDoc(e), r && (t = oe.propFix[t] || t, o = oe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Et.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || oe.each(["href", "src"], function(e, t) {
        oe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    }), ne.enctype || (oe.propFix.enctype = "encoding");
    var jt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a = 0,
                l = this.length,
                d = "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).addClass(e.call(this, t, this.className))
            });
            if (d)
                for (t = (e || "").match(be) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : " ")) {
                        for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = oe.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a = 0,
                l = this.length,
                d = 0 === arguments.length || "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).removeClass(e.call(this, t, this.className))
            });
            if (d)
                for (t = (e || "").match(be) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : "")) {
                        for (r = 0; o = t[r++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        s = e ? oe.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
                oe(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, i = 0, o = oe(this), r = e.match(be) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(n === Te || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : oe._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jt, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Nt = oe.now(),
        Dt = /\?/,
        Lt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            o = oe.trim(t + "");
        return o && !oe.trim(o.replace(Lt, function(e, t, o, r) {
            return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "")
        })) ? Function("return " + o)() : oe.error("Invalid JSON: " + t)
    }, oe.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (o) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
    };
    var Ht, _t, Ot = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        zt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qt = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        Wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Rt = {},
        It = {},
        Bt = "*/".concat("*");
    try {
        _t = location.href
    } catch (Ut) {
        _t = he.createElement("a"), _t.href = "", _t = _t.href
    }
    Ht = Wt.exec(_t.toLowerCase()) || [], oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _t,
            type: "GET",
            isLocal: zt.test(Ht[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? W(W(e, oe.ajaxSettings), t) : W(oe.ajaxSettings, e)
        },
        ajaxPrefilter: q(Rt),
        ajaxTransport: q(It),
        ajax: function(e, t) {
            function n(e, t, n, i) {
                var o, c, v, y, w, k = t;
                2 !== b && (b = 2, a && clearTimeout(a), d = void 0, s = i || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (y = R(u, x, n)), y = I(u, y, x, o), o ? (u.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (oe.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (oe.etag[r] = w)), 204 === e || "HEAD" === u.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, c = y.data, v = y.error, o = !v)) : (v = k, (e || !k) && (k = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || k) + "", o ? h.resolveWith(p, [c, k, x]) : h.rejectWith(p, [x, k, v]), x.statusCode(g), g = void 0, l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [x, u, o ? c : v]), m.fireWith(p, [x, k]), l && (f.trigger("ajaxComplete", [x, u]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, o, r, s, a, l, d, c, u = oe.ajaxSetup({}, t),
                p = u.context || u,
                f = u.context && (p.nodeType || p.jquery) ? oe(p) : oe.event,
                h = oe.Deferred(),
                m = oe.Callbacks("once memory"),
                g = u.statusCode || {},
                v = {},
                y = {},
                b = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Pt.exec(s);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (u.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return d && d.abort(t), n(0, t), this
                    }
                };
            if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, u.url = ((e || u.url || _t) + "").replace(Ot, "").replace(Ft, Ht[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = oe.trim(u.dataType || "*").toLowerCase().match(be) || [""], null == u.crossDomain && (i = Wt.exec(u.url.toLowerCase()), u.crossDomain = !(!i || i[1] === Ht[1] && i[2] === Ht[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ht[3] || ("http:" === Ht[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = oe.param(u.data, u.traditional)), F(Rt, u, t, x), 2 === b) return x;
            l = oe.event && u.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !qt.test(u.type), r = u.url, u.hasContent || (u.data && (r = u.url += (Dt.test(r) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Mt.test(r) ? r.replace(Mt, "$1_=" + Nt++) : r + (Dt.test(r) ? "&" : "?") + "_=" + Nt++)), u.ifModified && (oe.lastModified[r] && x.setRequestHeader("If-Modified-Since", oe.lastModified[r]), oe.etag[r] && x.setRequestHeader("If-None-Match", oe.etag[r])), (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : u.accepts["*"]);
            for (o in u.headers) x.setRequestHeader(o, u.headers[o]);
            if (u.beforeSend && (u.beforeSend.call(p, x, u) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[o](u[o]);
            if (d = F(It, u, t, x)) {
                x.readyState = 1, l && f.trigger("ajaxSend", [x, u]), u.async && u.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                }, u.timeout));
                try {
                    b = 1, d.send(v, n)
                } catch (k) {
                    if (!(2 > b)) throw k;
                    n(-1, k)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, n, i, o) {
            return oe.isFunction(n) && (o = o || i, i = n, n = void 0), oe.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function(e) {
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = oe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
    }, oe.expr.filters.visible = function(e) {
        return !oe.expr.filters.hidden(e)
    };
    var Xt = /%20/g,
        Yt = /\[\]$/,
        Vt = /\r?\n/g,
        Gt = /^(?:submit|button|image|reset|file)$/i,
        Jt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) B(n, e[n], t, o);
        return i.join("&").replace(Xt, "+")
    }, oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Jt.test(this.nodeName) && !Gt.test(e) && (this.checked || !Ne.test(e))
            }).map(function(e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Vt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Vt, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || X()
    } : U;
    var Qt = 0,
        Kt = {},
        Zt = oe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Kt) Kt[e](void 0, !0)
    }), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && oe.ajaxTransport(function(e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function(n, i) {
                    var o, r = e.xhr(),
                        s = ++Qt;
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) r[o] = e.xhrFields[o];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                    r.send(e.hasContent && e.data || null), t = function(n, o) {
                        var a, l, d;
                        if (t && (o || 4 === r.readyState))
                            if (delete Kt[s], t = void 0, r.onreadystatechange = oe.noop, o) 4 !== r.readyState && r.abort();
                            else {
                                d = {}, a = r.status, "string" == typeof r.responseText && (d.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (c) {
                                    l = ""
                                }
                                a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
                            }
                        d && i(a, l, d, r.getAllResponseHeaders())
                    }, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Kt[s] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = he.head || oe("head")[0] || he.documentElement;
            return {
                send: function(i, o) {
                    t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = en.pop() || oe.expando + "_" + Nt++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, s, a = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(tn, "$1" + o) : t.jsonp !== !1 && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || oe.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, en.push(o)), s && oe.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), oe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || he;
        var i = ue.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = oe.buildFragment([e], t, o), o && o.length && oe(o).remove(), oe.merge([], i.childNodes))
    };
    var nn = oe.fn.load;
    oe.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = oe.trim(e.slice(a, e.length)), e = e.slice(0, a)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && oe.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    };
    var on = e.document.documentElement;
    oe.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, d, c = oe.css(e, "position"),
                u = oe(e),
                p = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), r = oe.css(e, "top"), l = oe.css(e, "left"), d = ("absolute" === c || "fixed" === c) && oe.inArray("auto", [r, l]) > -1, d ? (i = u.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : u.css(p)
        }
    }, oe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            if (r) return t = r.documentElement, oe.contains(t, o) ? (typeof o.getBoundingClientRect !== Te && (i = o.getBoundingClientRect()), n = Y(r), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === oe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (n = e.offset()), n.top += oe.css(e[0], "borderTopWidth", !0), n.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - oe.css(i, "marginTop", !0),
                    left: t.left - n.left - oe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || on; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || on
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        oe.fn[e] = function(i) {
            return je(this, function(e, i, o) {
                var r = Y(e);
                return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? oe(r).scrollLeft() : o, n ? o : oe(r).scrollTop()) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = $(ne.pixelPosition, function(e, n) {
            return n ? (n = tt(e, t), it.test(n) ? oe(e).position()[t] + "px" : n) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            oe.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || o === !0 ? "margin" : "border");
                return je(this, function(t, n, i) {
                    var o;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? oe.css(t, n, s) : oe.style(t, n, i, s)
                }, t, r ? i : void 0, r, null)
            }
        })
    }), oe.fn.size = function() {
        return this.length
    }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var rn = e.jQuery,
        sn = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = sn), t && e.jQuery === oe && (e.jQuery = rn), oe
    }, typeof t === Te && (e.jQuery = e.$ = oe), oe
}),
function(e, t) {
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, i = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function(t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        refreshCSRFTokens: function() {
            var t = e("meta[name=csrf-token]").attr("content"),
                n = e("meta[name=csrf-param]").attr("content");
            e('form input[name="' + n + '"]').val(t)
        },
        fire: function(t, n, i) {
            var o = e.Event(n);
            return t.trigger(o, i), o.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e[0].href
        },
        handleRemote: function(i) {
            var o, r, s, a, l, d;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                    o = i.attr("method"), r = i.attr("action"), s = i.serializeArray();
                    var c = i.data("ujs:submit-button");
                    c && (s.push(c), i.data("ujs:submit-button", null))
                } else i.is(n.inputChangeSelector) ? (o = i.data("method"), r = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", r = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (o = i.data("method"), r = n.href(i), s = i.data("params") || null);
                return d = {
                    type: o || "GET",
                    data: s,
                    dataType: l,
                    beforeSend: function(e, o) {
                        return o.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), n.fire(i, "ajax:beforeSend", [e, o]) ? void i.trigger("ajax:send", e) : !1
                    },
                    success: function(e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: n.isCrossDomain(r)
                }, a && (d.xhrFields = {
                    withCredentials: a
                }), r && (d.url = r), n.ajax(d)
            }
            return !1
        },
        isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e, n.href = n.href, !n.protocol || !n.host || t.protocol + "//" + t.host != n.protocol + "//" + n.host
            } catch (i) {
                return !0
            }
        },
        handleMethod: function(i) {
            var o = n.href(i),
                r = i.data("method"),
                s = i.attr("target"),
                a = e("meta[name=csrf-token]").attr("content"),
                l = e("meta[name=csrf-param]").attr("content"),
                d = e('<form method="post" action="' + o + '"></form>'),
                c = '<input name="_method" value="' + r + '" type="hidden" />';
            l === t || a === t || n.isCrossDomain(o) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && d.attr("target", s), d.hide().append(c).appendTo("body"), d.submit()
        },
        formElements: function(t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function(t) {
            n.formElements(t, n.disableSelector).each(function() {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function(e) {
            var n, i;
            n = e.is("button") ? "html" : "val", i = e.data("disable-with"), e.data("ujs:enable-with", e[n]()), i !== t && e[n](i), e.prop("disabled", !0)
        },
        enableFormElements: function(t) {
            n.formElements(t, n.enableSelector).each(function() {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function(e) {
            var t = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
        },
        allowAction: function(e) {
            var t, i = e.data("confirm"),
                o = !1;
            return i ? (n.fire(e, "confirm") && (o = n.confirm(i), t = n.fire(e, "confirm:complete", [o])), o && t) : !0
        },
        blankInputs: function(t, n, i) {
            var o, r, s = e(),
                a = n || "input,textarea",
                l = t.find(a);
            return l.each(function() {
                if (o = e(this), r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : o.val(), !r == !i) {
                    if (o.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length) return !0;
                    s = s.add(o)
                }
            }), s.length ? s : !1
        },
        nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function(e) {
            var i = e.data("disable-with");
            e.data("ujs:enable-with", e.html()), i !== t && e.html(i), e.bind("click.railsDisable", function(e) {
                return n.stopEverything(e)
            })
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
        }
    }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
        e.crossDomain || n.CSRFProtection(i)
    }), e(window).on("pageshow.rails", function() {
        e(e.rails.enableSelector).each(function() {
            var t = e(this);
            t.data("ujs:enable-with") && e.rails.enableFormElement(t)
        }), e(e.rails.linkDisableSelector).each(function() {
            var t = e(this);
            t.data("ujs:enable-with") && e.rails.enableElement(t)
        })
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(e(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
        n.enableFormElement(e(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function(i) {
        var o = e(this),
            r = o.data("method"),
            s = o.data("params"),
            a = i.metaKey || i.ctrlKey;
        if (!n.allowAction(o)) return n.stopEverything(i);
        if (!a && o.is(n.linkDisableSelector) && n.disableElement(o), o.data("remote") !== t) {
            if (a && (!r || "GET" === r) && !s) return !0;
            var l = n.handleRemote(o);
            return l === !1 ? n.enableElement(o) : l.fail(function() {
                n.enableElement(o)
            }), !1
        }
        return r ? (n.handleMethod(o), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function(t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var o = n.handleRemote(i);
        return o === !1 ? n.enableFormElement(i) : o.fail(function() {
            n.enableFormElement(i)
        }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function(t) {
        var i = e(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
        var o, r, s = e(this),
            a = s.data("remote") !== t;
        if (!n.allowAction(s)) return n.stopEverything(i);
        if (s.attr("novalidate") == t && (o = n.blankInputs(s, n.requiredInputSelector), o && n.fire(s, "ajax:aborted:required", [o]))) return n.stopEverything(i);
        if (a) {
            if (r = n.nonBlankInputs(s, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(s)
                }, 13);
                var l = n.fire(s, "ajax:aborted:file", [r]);
                return l || setTimeout(function() {
                    n.enableFormElements(s)
                }, 13), l
            }
            return n.handleRemote(s), !1
        }
        setTimeout(function() {
            n.disableFormElements(s)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function(t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        var o = i.attr("name"),
            r = o ? {
                name: o,
                value: i.val()
            } : null;
        i.closest("form").data("ujs:submit-button", r)
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
        this == t.target && n.disableFormElements(e(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
        this == t.target && n.enableFormElements(e(this))
    }), e(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, i) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(t),
                appendDots: e(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, n) {
                    return e('<button type="button" />').text(n + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(t), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(t).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = n++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
        }
        var n = 0;
        return t
    }(), t.prototype.activateADA = function() {
        var e = this;
        e.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
        var o = this;
        if ("boolean" == typeof n) i = n, n = null;
        else if (0 > n || n >= o.slideCount) return !1;
        o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : i === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function(t, n) {
        var i = {},
            o = this;
        o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (t = -t), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, n) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e), o.options.vertical === !1 ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
            },
            complete: function() {
                n && n.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), o.options.vertical === !1 ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function() {
            o.disableTransition(), n.call()
        }, o.options.speed))
    }, t.prototype.getNavTarget = function() {
        var t = this,
            n = t.options.asNavFor;
        return n && null !== n && (n = e(n).not(t.$slider)), n
    }, t.prototype.asNavFor = function(t) {
        var n = this,
            i = n.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function(e) {
        var t = this,
            n = {};
        t.options.fade === !1 ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 === 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function() {
        var t, n, i = this;
        if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
        var e, t, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 0) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; o > e; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var d = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var c = e * s + (t * a.options.slidesPerRow + n);
                        r.get(c) && d.appendChild(r.get(c))
                    }
                    l.appendChild(d)
                }
                i.appendChild(l)
            }
            a.$slider.empty().append(i), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function(t, n) {
        var i, o, r, s = this,
            a = !1,
            l = s.$slider.width(),
            d = window.innerWidth || e(window).width();
        if ("window" === s.respondTo ? r = d : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(d, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            o = null;
            for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (s.originalSettings.mobileFirst === !1 ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), t === !0 && (s.currentSlide = s.options.initialSlide),
                s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || a === !1 || s.$slider.trigger("breakpoint", [s, a])
        }
    }, t.prototype.changeSlide = function(t, n) {
        var i, o, r, s = this,
            a = e(t.currentTarget);
        switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll !== 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
            case "previous":
                o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
                break;
            case "next":
                o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
                break;
            case "index":
                var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function(e) {
        var t, n, i = this;
        if (t = i.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];
        else
            for (var o in t) {
                if (e < t[o]) {
                    e = n;
                    break
                }
                n = t[o]
            }
        return e
    }, t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.options.accessibility === !0 && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), t.options.accessibility === !0 && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 0 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function(e) {
        var t = this;
        t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function(t) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
    }, t.prototype.disableTransition = function(e) {
        var t = this,
            n = {};
        n[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.fadeSlide = function(e, t) {
        var n = this;
        n.cssTransitions === !1 ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function() {
            n.disableTransition(e), t.call()
        }, n.options.speed))
    }, t.prototype.fadeSlideOut = function(e) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        var e = this;
        return e.currentSlide
    }, t.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            n = 0,
            i = 0;
        if (e.options.infinite === !0)
            if (e.slideCount <= e.options.slidesToShow) ++i;
            else
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (e.options.centerMode === !0) i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }, t.prototype.getLeft = function(e) {
        var t, n, i, o, r = this,
            s = 0;
        return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, r.options.vertical === !0 && r.options.centerMode === !0 && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll !== 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), r.options.centerMode === !0 && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : r.options.centerMode === !0 && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = r.options.vertical === !1 ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, r.options.variableWidth === !0 && (i = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = r.options.rtl === !0 ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, r.options.centerMode === !0 && (i = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = r.options.rtl === !0 ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        var t = this;
        return t.options[e]
    }, t.prototype.getNavigableIndexes = function() {
        var e, t = this,
            n = 0,
            i = 0,
            o = [];
        for (t.options.infinite === !1 ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > n;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, t.prototype.getSlick = function() {
        return this
    }, t.prototype.getSlideCount = function() {
        var t, n, i, o = this;
        return i = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(t, r) {
            return r.offsetLeft - i + e(r).outerWidth() / 2 > -1 * o.swipeLeft ? (n = r, !1) : void 0
        }), t = Math.abs(e(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        var n = this;
        n.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function(t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
    }, t.prototype.initADA = function() {
        var t = this,
            n = Math.ceil(t.slideCount / t.options.slidesToShow),
            i = t.getNavigableIndexes().filter(function(e) {
                return e >= 0 && e < t.slideCount
            });
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) {
            var o = i.indexOf(n);
            if (e(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + t.instanceUid + n,
                    tabindex: -1
                }), -1 !== o) {
                var r = "slick-slide-control" + t.instanceUid + o;
                e("#" + r).length && e(this).attr({
                    "aria-describedby": r
                })
            }
        }), t.$dots.attr("role", "tablist").find("li").each(function(o) {
            var r = i[o];
            e(this).attr({
                role: "presentation"
            }), e(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + t.instanceUid + o,
                "aria-controls": "slick-slide" + t.instanceUid + r,
                "aria-label": o + 1 + " of " + n,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(t.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var o = t.currentSlide, r = o + t.options.slidesToShow; r > o; o++) t.options.focusOnChange ? t.$slides.eq(o).attr({
            tabindex: "0"
        }) : t.$slides.eq(o).removeAttr("tabindex");
        t.activateADA()
    }, t.prototype.initArrowEvents = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), t.options.accessibility === !0 && t.$dots.on("keydown.slick", t.keyHandler)), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
    }, t.prototype.initUI = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: t.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: t.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this),
                    n = e(this).attr("data-lazy"),
                    i = e(this).attr("data-srcset"),
                    o = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), s.$slider.trigger("lazyLoaded", [s, t, n])
                    })
                }, r.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n])
                }, r.src = n
            })
        }
        var n, i, o, r, s = this;
        if (s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = Math.ceil(o + s.options.slidesToShow), s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++)), n = s.$slider.find(".slick-slide").slice(o, r), "anticipated" === s.options.lazyLoad)
            for (var a = o - 1, l = r, d = s.$slider.find(".slick-slide"), c = 0; c < s.options.slidesToScroll; c++) 0 > a && (a = s.slideCount - 1), n = n.add(d.eq(a)), n = n.add(d.eq(l)), a--, l++;
        t(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), t(i))
    }, t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function(t) {
        var n = this;
        if (!n.unslicked && (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), n.options.accessibility === !0 && (n.initADA(), n.options.focusOnChange))) {
            var i = e(n.$slides.get(n.currentSlide));
            i.attr("tabindex", 0).focus()
        }
    }, t.prototype.prev = t.prototype.slickPrev = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var n, i, o, r, s, a = this,
            l = e("img[data-lazy]", a.$slider);
        l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), s = document.createElement("img"), s.onload = function() {
            o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), a.options.adaptiveHeight === !0 && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
        }, s.onerror = function() {
            3 > t ? setTimeout(function() {
                a.progressiveLazyLoad(t + 1)
            }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
        }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
    }, t.prototype.refresh = function(t) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
            currentSlide: n
        }), o.init(), t || o.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function() {
        var t, n, i, o = this,
            r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
            o.respondTo = o.options.respondTo || "window";
            for (t in r)
                if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
                    for (n = r[t].breakpoint; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                    o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
                }
            o.breakpoints.sort(function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }, t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
        var i = this;
        return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : i.slideCount - 1) : e = t === !0 ? --e : e, i.slideCount < 1 || 0 > e || e > i.slideCount - 1 ? !1 : (i.unload(), n === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
    }, t.prototype.setCSS = function(e) {
        var t, n, i = this,
            o = {};
        i.options.rtl === !0 && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, i.transformsEnabled === !1 ? i.$slideTrack.css(o) : (o = {}, i.cssTransitions === !1 ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function() {
        var e = this;
        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
        var t, n = this;
        n.$slides.each(function(i, o) {
            t = n.slideWidth * i * -1, n.options.rtl === !0 ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }), n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }, t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, n, i, o, r, s = this,
            a = !1;
        if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")), "single" === r) s.options[i] = o;
        else if ("multiple" === r) e.each(i, function(e, t) {
            s.options[e] = t
        });
        else if ("responsive" === r)
            for (n in o)
                if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
                else {
                    for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                    s.options.responsive.push(o[n])
                }
        a && (s.unload(), s.reinit())
    }, t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
    }, t.prototype.setSlideClasses = function(e) {
        var t, n, i, o, r = this;
        if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), r.options.centerMode === !0) {
            var s = r.options.slidesToShow % 2 === 0 ? 1 : 0;
            t = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
        } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = r.options.infinite === !0 ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        ("ondemand" === r.options.lazyLoad || "anticipated" === r.options.lazyLoad) && r.lazyLoad()
    }, t.prototype.setupInfinite = function() {
        var t, n, i, o = this;
        if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (n = null, o.slideCount > o.options.slidesToShow)) {
            for (i = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < i + o.slideCount; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.interrupt = function(e) {
        var t = this;
        e || t.autoPlay(), t.interrupted = e
    }, t.prototype.selectHandler = function(t) {
        var n = this,
            i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        return o || (o = 0), n.slideCount <= n.options.slidesToShow ? void n.slideHandler(o, !1, !0) : void n.slideHandler(o)
    }, t.prototype.slideHandler = function(e, t, n) {
        var i, o, r, s, a, l = null,
            d = this;
        return t = t || !1, d.animating === !0 && d.options.waitForAnimate === !0 || d.options.fade === !0 && d.currentSlide === e ? void 0 : (t === !1 && d.asNavFor(e), i = e, l = d.getLeft(i), s = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? s : d.swipeLeft, d.options.infinite === !1 && d.options.centerMode === !1 && (0 > e || e > d.getDotCount() * d.options.slidesToScroll) ? void(d.options.fade === !1 && (i = d.currentSlide, n !== !0 && d.slideCount > d.options.slidesToShow ? d.animateSlide(s, function() {
            d.postSlide(i)
        }) : d.postSlide(i))) : d.options.infinite === !1 && d.options.centerMode === !0 && (0 > e || e > d.slideCount - d.options.slidesToScroll) ? void(d.options.fade === !1 && (i = d.currentSlide, n !== !0 && d.slideCount > d.options.slidesToShow ? d.animateSlide(s, function() {
            d.postSlide(i)
        }) : d.postSlide(i))) : (d.options.autoplay && clearInterval(d.autoPlayTimer), o = 0 > i ? d.slideCount % d.options.slidesToScroll !== 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + i : i >= d.slideCount ? d.slideCount % d.options.slidesToScroll !== 0 ? 0 : i - d.slideCount : i, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), r = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = d.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide)), d.updateDots(), d.updateArrows(), d.options.fade === !0 ? (n !== !0 ? (d.fadeSlideOut(r), d.fadeSlide(o, function() {
            d.postSlide(o)
        })) : d.postSlide(o), void d.animateHeight()) : void(n !== !0 && d.slideCount > d.options.slidesToShow ? d.animateSlide(l, function() {
            d.postSlide(o)
        }) : d.postSlide(o))))
    }, t.prototype.startLoad = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= i && i >= 315 ? o.options.rtl === !1 ? "left" : "right" : i >= 135 && 225 >= i ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? i >= 35 && 135 >= i ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function(e) {
        var t, n, i = this;
        if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
        if (i.interrupted = !1, i.shouldClick = i.touchObject.swipeLength > 10 ? !1 : !0, void 0 === i.touchObject.curX) return !1;
        if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
                case "left":
                case "down":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function(e) {
        var t, n, i, o, r, s, a = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !a.dragging || a.scrolling || r && 1 !== r.length ? !1 : (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (a.options.verticalSwiping === !0 && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (a.options.rtl === !1 ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), a.options.verticalSwiping === !0 && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, a.options.infinite === !1 && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), a.options.vertical === !1 ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, a.options.verticalSwiping === !0 && (a.swipeLeft = t + i * o), a.options.fade === !0 || a.options.touchMove === !1 ? !1 : a.animating === !0 ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft)))
    }, t.prototype.swipeStart = function(e) {
        var t, n = this;
        return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0))
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function() {
        var e, t = this;
        e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
            0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function() {
        var e, n, i = this,
            o = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            s = i.length;
        for (e = 0; s > e; e++)
            if ("object" == typeof o || "undefined" == typeof o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), "undefined" != typeof n) return n;
        return i
    }
}),
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.11
 *
 * Requires: jQuery 1.2.2+
 */
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
    function t(t) {
        var s = t || window.event,
            a = l.call(arguments, 1),
            d = 0,
            u = 0,
            p = 0,
            f = 0,
            h = 0,
            m = 0;
        if (t = e.event.fix(s), t.type = "mousewheel", "detail" in s && (p = -1 * s.detail), "wheelDelta" in s && (p = s.wheelDelta), "wheelDeltaY" in s && (p = s.wheelDeltaY), "wheelDeltaX" in s && (u = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (u = -1 * p, p = 0), d = 0 === p ? u : p, "deltaY" in s && (p = -1 * s.deltaY, d = p), "deltaX" in s && (u = s.deltaX, 0 === p && (d = -1 * u)), 0 !== p || 0 !== u) {
            if (1 === s.deltaMode) {
                var g = e.data(this, "mousewheel-line-height");
                d *= g, p *= g, u *= g
            } else if (2 === s.deltaMode) {
                var v = e.data(this, "mousewheel-page-height");
                d *= v, p *= v, u *= v
            }
            if (f = Math.max(Math.abs(p), Math.abs(u)), (!r || r > f) && (r = f, i(s, f) && (r /= 40)), i(s, f) && (d /= 40, u /= 40, p /= 40), d = Math[d >= 1 ? "floor" : "ceil"](d / r), u = Math[u >= 1 ? "floor" : "ceil"](u / r), p = Math[p >= 1 ? "floor" : "ceil"](p / r), c.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                h = t.clientX - y.left, m = t.clientY - y.top
            }
            return t.deltaX = u, t.deltaY = p, t.deltaFactor = r, t.offsetX = h, t.offsetY = m, t.deltaMode = 0, a.unshift(t, d, u, p), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, a)
        }
    }

    function n() {
        r = null
    }

    function i(e, t) {
        return c.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
    }
    var o, r, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var d = s.length; d;) e.event.fixHooks[s[--d]] = e.event.mouseHooks;
    var c = e.event.special.mousewheel = {
        version: "3.1.11",
        setup: function() {
            if (this.addEventListener)
                for (var n = a.length; n;) this.addEventListener(a[--n], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", c.getLineHeight(this)), e.data(this, "mousewheel-page-height", c.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var n = a.length; n;) this.removeEventListener(a[--n], t, !1);
            else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(t) {
            var n = e(t)["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10)
        },
        getPageHeight: function(t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}),
/*! jssocials - v0.2.0 - 2015-05-17
 * http://js-socials.com
 * Copyright (c) 2015 Artem Tabalin; Licensed MIT */
function(e, t, n) {
    function i(e, n) {
        var i = t(e);
        i.data(r, this), this._$element = i, this.shares = [], this._init(n), this._render()
    }
    var o = "JSSocials",
        r = o,
        s = function(e, n) {
            return t.isFunction(e) ? e.apply(n, t.makeArray(arguments).slice(2)) : e
        },
        a = /(\.(jpeg|png|gif|bmp)$|^data:image\/(jpeg|png|gif|bmp);base64)/i,
        l = /(&?[a-zA-Z0-9]+=)\{([a-zA-Z0-9]+)\}/g,
        d = {
            G: 1e9,
            M: 1e6,
            K: 1e3
        },
        c = [];
    i.prototype = {
        url: "",
        text: "",
        showLabel: function(e) {
            return this.showCount === !1 ? e > this.smallScreenWidth : e >= this.largeScreenWidth
        },
        showCount: function(e) {
            return e <= this.smallScreenWidth ? "inside" : !0
        },
        smallScreenWidth: 640,
        largeScreenWidth: 1024,
        resizeTimeout: 200,
        elementClass: "jssocials",
        sharesClass: "jssocials-shares",
        shareClass: "jssocials-share",
        shareButtonClass: "jssocials-share-button",
        shareLinkClass: "jssocials-share-link",
        shareLogoClass: "jssocials-share-logo",
        shareLabelClass: "jssocials-share-label",
        shareLinkCountClass: "jssocials-share-link-count",
        shareCountBoxClass: "jssocials-share-count-box",
        shareCountClass: "jssocials-share-count",
        shareZeroCountClass: "jssocials-share-no-count",
        _init: function(e) {
            this._initDefaults(), t.extend(this, e), this._initShares(), this._attachWindowResizeCallback()
        },
        _initDefaults: function() {
            this.url = e.location.href, this.text = t("meta[name=description]").attr("content") || t("title").text()
        },
        _initShares: function() {
            this.shares = t.map(this.shares, t.proxy(function(e) {
                "string" == typeof e && (e = {
                    share: e
                });
                var n = e.share && c[e.share];
                if (!n && !e.renderer) throw Error("Share '" + e.share + "' is not found");
                return t.extend({
                    url: this.url,
                    text: this.text
                }, n, e)
            }, this))
        },
        _attachWindowResizeCallback: function() {
            t(e).on("resize", t.proxy(this._windowResizeHandler, this))
        },
        _detachWindowResizeCallback: function() {
            t(e).off("resize", this._windowResizeHandler)
        },
        _windowResizeHandler: function() {
            (t.isFunction(this.showLabel) || t.isFunction(this.showCount)) && (e.clearTimeout(this._resizeTimer), this._resizeTimer = setTimeout(t.proxy(this.refresh, this), this.resizeTimeout))
        },
        _render: function() {
            this._clear(), this._defineOptionsByScreen(), this._$element.addClass(this.elementClass), this._$shares = t("<div>").addClass(this.sharesClass).appendTo(this._$element), this._renderShares()
        },
        _defineOptionsByScreen: function() {
            this._screenWidth = t(e).width(), this._showLabel = s(this.showLabel, this, this._screenWidth), this._showCount = s(this.showCount, this, this._screenWidth)
        },
        _renderShares: function() {
            t.each(this.shares, t.proxy(function(e, t) {
                this._renderShare(t)
            }, this))
        },
        _renderShare: function(e) {
            var n;
            n = t.isFunction(e.renderer) ? t(e.renderer()) : this._createShare(e), n.addClass(this.shareClass).addClass(e.share ? "jssocials-share-" + e.share : "").addClass(e.css).appendTo(this._$shares)
        },
        _createShare: function(e) {
            var n = t("<div>"),
                i = this._createShareLink(e).appendTo(n);
            if (this._showCount) {
                var o = "inside" === this._showCount,
                    r = o ? i : t("<div>").addClass(this.shareCountBoxClass).appendTo(n);
                r.addClass(o ? this.shareLinkCountClass : this.shareCountBoxClass), this._renderShareCount(e, r)
            }
            return n
        },
        _createShareLink: function(e) {
            var n = t("<a>").addClass(this.shareLinkClass).attr({
                href: this._getShareUrl(e),
                target: "_blank"
            }).append(this._createShareLogo(e));
            return this._showLabel && n.append(this._createShareLabel(e)), n
        },
        _getShareUrl: function(e) {
            var t = s(e.shareUrl, e);
            return this._formatShareUrl(t, e)
        },
        _createShareLogo: function(e) {
            var n = e.logo,
                i = a.test(n) ? t("<img>").attr("src", e.logo) : t("<i>").addClass(n);
            return i.addClass(this.shareLogoClass), i
        },
        _createShareLabel: function(e) {
            return t("<span>").addClass(this.shareLabelClass).text(e.label)
        },
        _renderShareCount: function(e, n) {
            var i = t("<span>").addClass(this.shareCountClass);
            n.addClass(this.shareZeroCountClass).append(i), this._loadCount(e).done(t.proxy(function(e) {
                e && (n.removeClass(this.shareZeroCountClass), i.text(e))
            }, this))
        },
        _loadCount: function(e) {
            var n = t.Deferred(),
                i = this._getCountUrl(e);
            if (!i) return n.resolve(0).promise();
            var o = t.proxy(function(t) {
                n.resolve(this._getCountValue(t, e))
            }, this);
            return t.getJSON(i).done(o).fail(function() {
                t.get(i).done(o).fail(function() {
                    n.resolve(0)
                })
            }), n.promise()
        },
        _getCountUrl: function(e) {
            var t = s(e.countUrl, e);
            return this._formatShareUrl(t, e)
        },
        _getCountValue: function(e, n) {
            var i = (t.isFunction(n.getCount) ? n.getCount(e) : e) || 0;
            return "string" == typeof i ? i : this._formatNumber(i)
        },
        _formatNumber: function(e) {
            return t.each(d, function(t, n) {
                return e >= n ? (e = parseFloat((e / n).toFixed(2)) + t, !1) : void 0
            }), e
        },
        _formatShareUrl: function(t, n) {
            return t.replace(l, function(t, i, o) {
                var r = n[o] || "";
                return r ? i + e.encodeURIComponent(r) : ""
            })
        },
        _clear: function() {
            e.clearTimeout(this._resizeTimer), this._$element.empty()
        },
        refresh: function() {
            this._render()
        },
        destroy: function() {
            this._clear(), this._detachWindowResizeCallback(), this._$element.removeClass(this.elementClass).removeData(r)
        },
        option: function(e, t) {
            return 1 === arguments.length ? this[e] : (this[e] = t, void this.refresh())
        }
    }, t.fn.jsSocials = function(e) {
        var o = t.makeArray(arguments),
            s = o.slice(1),
            a = this;
        return this.each(function() {
            var o, l = t(this),
                d = l.data(r);
            if (d)
                if ("string" == typeof e) {
                    if (o = d[e].apply(d, s), o !== n && o !== d) return a = o, !1
                } else d._detachWindowResizeCallback(), d._init(e), d._render();
            else new i(l, e)
        }), a
    };
    var u = function(e) {
        var n;
        t.isPlainObject(e) ? n = i.prototype : (n = c[e], e = arguments[1] || {}), t.extend(n, e)
    };
    e.jsSocials = {
        Socials: i,
        shares: c,
        setDefaults: u
    }
}(window, jQuery),
function(e, t, n, i) {
    t.extend(n.shares, {
        email: {
            label: "E-mail",
            logo: "fa fa-at",
            shareUrl: "mailto:?subject={text}&body={url}",
            countUrl: ""
        },
        twitter: {
            label: "Tweet",
            logo: "fa fa-twitter",
            shareUrl: "https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",
            countUrl: "https://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",
            getCount: function(e) {
                return e.count
            }
        },
        facebook: {
            label: "Like",
            logo: "fa fa-facebook",
            shareUrl: "https://facebook.com/sharer/sharer.php?u={url}",
            countUrl: function() {
                return "https://graph.facebook.com/fql?q=SELECT total_count FROM link_stat WHERE url='" + e.encodeURIComponent(this.url) + "'"
            },
            getCount: function(e) {
                return e.data.length && e.data[0].total_count || 0
            }
        },
        googleplus: {
            label: "+1",
            logo: "fa fa-google-plus",
            shareUrl: "https://plus.google.com/share?url={url}",
            countUrl: function() {
                return "https://cors-anywhere.herokuapp.com/https://plusone.google.com/_/+1/fastbutton?url=" + e.encodeURIComponent(this.url)
            },
            getCount: function(e) {
                return parseFloat((e.match(/\{c: ([.0-9E]+)/) || [])[1])
            }
        },
        linkedin: {
            label: "Share",
            logo: "fa fa-linkedin",
            shareUrl: "https://www.linkedin.com/shareArticle?url={url}",
            countUrl: "https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
            getCount: function(e) {
                return e.count
            }
        },
        pinterest: {
            label: "Pin it",
            logo: "fa fa-pinterest",
            shareUrl: "https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",
            countUrl: "https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",
            getCount: function(e) {
                return e.count
            }
        }
    })
}(window, jQuery, window.jsSocials), $(document).ready(function() {
    const e = $(window),
        t = ($(document), $(".accordion__text"));
    e.width() > 1023 && t.mouseenter(function() {
        event.preventDefault(), expandTabs($(this))
    }), e.width() < 1024 && ($(".accordion").slick({
        arrows: !1,
        infinite: !1,
        dots: !0,
        centerMode: !0,
        centerPadding: "20px",
        adaptiveHeight: !0
    }), $(".plans").slick({
        arrows: !1,
        infinite: !1,
        dots: !0,
        adaptiveHeight: !0
    }), $(".steps .steps__inner").slick({
        arrows: !1,
        infinite: !1,
        dots: !0,
        adaptiveHeight: !0,
        centerMode: !0,
        centerPadding: "30px"
    }), $(".features").slick({
        arrows: !1,
        infinite: !1,
        dots: !0,
        adaptiveHeight: !0
    }), $(".stories").slick({
        arrows: !1,
        infinite: !1,
        adaptiveHeight: !0,
        centerMode: !0,
        centerPadding: "30px"
    }));
    const n = $("#nav-secondary .nav__inner"),
        i = $("#nav-secondary .nav__actions");
    e.on("load resize", function() {
        e.outerWidth() > 99999 ? i.addClass("hidden") : i.removeClass("hidden")
    }), $("#next").on("click", function() {
        n.stop().animate({
            scrollLeft: n.scrollLeft() + 120
        })
    }), $("#prev").on("click", function() {
        n.stop().animate({
            scrollLeft: n.scrollLeft() - 120
        })
    }), e.on("scroll", function() {
        $(".header").toggleClass("scrolled", e.scrollTop() > 50)
    }), $(".nav-trigger").on("click", function(e) {
        e.preventDefault(), $(this).toggleClass("active"), $(".header .header__menu").toggleClass("active")
    }), $(".testimonials .testimonials__body").slick({
        arrows: !1,
        fade: !0,
        infinite: !1,
        asNavFor: ".testimonials__nav ul",
        responsive: [{
            breakpoint: 1024,
            settings: {
                fade: !1,
                centerMode: !0,
                centerPadding: "10px"
            }
        }]
    }), $(".testimonials .testimonials__nav ul").slick({
        slidesToShow: 5,
        arrows: !1,
        asNavFor: ".testimonials .testimonials__body",
        focusOnSelect: !0
    }), $(".tabs .tabs__nav a").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        $(this).parent().addClass("current").siblings().removeClass("current"), $(t).addClass("current").siblings().removeClass("current")
    })
});