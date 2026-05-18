function Vd(f, h) {
    for (var i = 0; i < h.length; i++) {
        const d = h[i];
        if (typeof d != "string" && !Array.isArray(d)) {
            for (const a in d)
                if (a !== "default" && !(a in f)) {
                    const c = Object.getOwnPropertyDescriptor(d, a);
                    c && Object.defineProperty(f, a, c.get ? c : {
                        enumerable: !0,
                        get: () => d[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const h = document.createElement("link").relList;
    if (h && h.supports && h.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        d(a);
    new MutationObserver(a => {
        for (const c of a)
            if (c.type === "childList")
                for (const w of c.addedNodes)
                    w.tagName === "LINK" && w.rel === "modulepreload" && d(w)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(a) {
        const c = {};
        return a.integrity && (c.integrity = a.integrity),
        a.referrerPolicy && (c.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? c.credentials = "include" : a.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin",
        c
    }
    function d(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const c = i(a);
        fetch(a.href, c)
    }
}
)();
function Oc(f) {
    return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f
}
var Lu = {
    exports: {}
}
  , Er = {}
  , zu = {
    exports: {}
}
  , ae = {};
var ec;
function Hd() {
    if (ec)
        return ae;
    ec = 1;
    var f = Symbol.for("react.element")
      , h = Symbol.for("react.portal")
      , i = Symbol.for("react.fragment")
      , d = Symbol.for("react.strict_mode")
      , a = Symbol.for("react.profiler")
      , c = Symbol.for("react.provider")
      , w = Symbol.for("react.context")
      , E = Symbol.for("react.forward_ref")
      , S = Symbol.for("react.suspense")
      , T = Symbol.for("react.memo")
      , z = Symbol.for("react.lazy")
      , A = Symbol.iterator;
    function L(g) {
        return g === null || typeof g != "object" ? null : (g = A && g[A] || g["@@iterator"],
        typeof g == "function" ? g : null)
    }
    var M = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , Z = Object.assign
      , V = {};
    function re(g, C, ue) {
        this.props = g,
        this.context = C,
        this.refs = V,
        this.updater = ue || M
    }
    re.prototype.isReactComponent = {},
    re.prototype.setState = function(g, C) {
        if (typeof g != "object" && typeof g != "function" && g != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, C, "setState")
    }
    ,
    re.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate")
    }
    ;
    function $() {}
    $.prototype = re.prototype;
    function oe(g, C, ue) {
        this.props = g,
        this.context = C,
        this.refs = V,
        this.updater = ue || M
    }
    var J = oe.prototype = new $;
    J.constructor = oe,
    Z(J, re.prototype),
    J.isPureReactComponent = !0;
    var W = Array.isArray
      , ge = Object.prototype.hasOwnProperty
      , I = {
        current: null
    }
      , H = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function K(g, C, ue) {
        var ie, ce = {}, de = null, fe = null;
        if (C != null)
            for (ie in C.ref !== void 0 && (fe = C.ref),
            C.key !== void 0 && (de = "" + C.key),
            C)
                ge.call(C, ie) && !H.hasOwnProperty(ie) && (ce[ie] = C[ie]);
        var se = arguments.length - 2;
        if (se === 1)
            ce.children = ue;
        else if (1 < se) {
            for (var me = Array(se), Ae = 0; Ae < se; Ae++)
                me[Ae] = arguments[Ae + 2];
            ce.children = me
        }
        if (g && g.defaultProps)
            for (ie in se = g.defaultProps,
            se)
                ce[ie] === void 0 && (ce[ie] = se[ie]);
        return {
            $$typeof: f,
            type: g,
            key: de,
            ref: fe,
            props: ce,
            _owner: I.current
        }
    }
    function O(g, C) {
        return {
            $$typeof: f,
            type: g.type,
            key: C,
            ref: g.ref,
            props: g.props,
            _owner: g._owner
        }
    }
    function X(g) {
        return typeof g == "object" && g !== null && g.$$typeof === f
    }
    function G(g) {
        var C = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + g.replace(/[=:]/g, function(ue) {
            return C[ue]
        })
    }
    var Y = /\/+/g;
    function j(g, C) {
        return typeof g == "object" && g !== null && g.key != null ? G("" + g.key) : C.toString(36)
    }
    function b(g, C, ue, ie, ce) {
        var de = typeof g;
        (de === "undefined" || de === "boolean") && (g = null);
        var fe = !1;
        if (g === null)
            fe = !0;
        else
            switch (de) {
            case "string":
            case "number":
                fe = !0;
                break;
            case "object":
                switch (g.$$typeof) {
                case f:
                case h:
                    fe = !0
                }
            }
        if (fe)
            return fe = g,
            ce = ce(fe),
            g = ie === "" ? "." + j(fe, 0) : ie,
            W(ce) ? (ue = "",
            g != null && (ue = g.replace(Y, "$&/") + "/"),
            b(ce, C, ue, "", function(Ae) {
                return Ae
            })) : ce != null && (X(ce) && (ce = O(ce, ue + (!ce.key || fe && fe.key === ce.key ? "" : ("" + ce.key).replace(Y, "$&/") + "/") + g)),
            C.push(ce)),
            1;
        if (fe = 0,
        ie = ie === "" ? "." : ie + ":",
        W(g))
            for (var se = 0; se < g.length; se++) {
                de = g[se];
                var me = ie + j(de, se);
                fe += b(de, C, ue, me, ce)
            }
        else if (me = L(g),
        typeof me == "function")
            for (g = me.call(g),
            se = 0; !(de = g.next()).done; )
                de = de.value,
                me = ie + j(de, se++),
                fe += b(de, C, ue, me, ce);
        else if (de === "object")
            throw C = String(g),
            Error("Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead.");
        return fe
    }
    function Le(g, C, ue) {
        if (g == null)
            return g;
        var ie = []
          , ce = 0;
        return b(g, ie, "", "", function(de) {
            return C.call(ue, de, ce++)
        }),
        ie
    }
    function Te(g) {
        if (g._status === -1) {
            var C = g._result;
            C = C(),
            C.then(function(ue) {
                (g._status === 0 || g._status === -1) && (g._status = 1,
                g._result = ue)
            }, function(ue) {
                (g._status === 0 || g._status === -1) && (g._status = 2,
                g._result = ue)
            }),
            g._status === -1 && (g._status = 0,
            g._result = C)
        }
        if (g._status === 1)
            return g._result.default;
        throw g._result
    }
    var ke = {
        current: null
    }
      , x = {
        transition: null
    }
      , ne = {
        ReactCurrentDispatcher: ke,
        ReactCurrentBatchConfig: x,
        ReactCurrentOwner: I
    };
    function B() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return ae.Children = {
        map: Le,
        forEach: function(g, C, ue) {
            Le(g, function() {
                C.apply(this, arguments)
            }, ue)
        },
        count: function(g) {
            var C = 0;
            return Le(g, function() {
                C++
            }),
            C
        },
        toArray: function(g) {
            return Le(g, function(C) {
                return C
            }) || []
        },
        only: function(g) {
            if (!X(g))
                throw Error("React.Children.only expected to receive a single React element child.");
            return g
        }
    },
    ae.Component = re,
    ae.Fragment = i,
    ae.Profiler = a,
    ae.PureComponent = oe,
    ae.StrictMode = d,
    ae.Suspense = S,
    ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne,
    ae.act = B,
    ae.cloneElement = function(g, C, ue) {
        if (g == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var ie = Z({}, g.props)
          , ce = g.key
          , de = g.ref
          , fe = g._owner;
        if (C != null) {
            if (C.ref !== void 0 && (de = C.ref,
            fe = I.current),
            C.key !== void 0 && (ce = "" + C.key),
            g.type && g.type.defaultProps)
                var se = g.type.defaultProps;
            for (me in C)
                ge.call(C, me) && !H.hasOwnProperty(me) && (ie[me] = C[me] === void 0 && se !== void 0 ? se[me] : C[me])
        }
        var me = arguments.length - 2;
        if (me === 1)
            ie.children = ue;
        else if (1 < me) {
            se = Array(me);
            for (var Ae = 0; Ae < me; Ae++)
                se[Ae] = arguments[Ae + 2];
            ie.children = se
        }
        return {
            $$typeof: f,
            type: g.type,
            key: ce,
            ref: de,
            props: ie,
            _owner: fe
        }
    }
    ,
    ae.createContext = function(g) {
        return g = {
            $$typeof: w,
            _currentValue: g,
            _currentValue2: g,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        g.Provider = {
            $$typeof: c,
            _context: g
        },
        g.Consumer = g
    }
    ,
    ae.createElement = K,
    ae.createFactory = function(g) {
        var C = K.bind(null, g);
        return C.type = g,
        C
    }
    ,
    ae.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ae.forwardRef = function(g) {
        return {
            $$typeof: E,
            render: g
        }
    }
    ,
    ae.isValidElement = X,
    ae.lazy = function(g) {
        return {
            $$typeof: z,
            _payload: {
                _status: -1,
                _result: g
            },
            _init: Te
        }
    }
    ,
    ae.memo = function(g, C) {
        return {
            $$typeof: T,
            type: g,
            compare: C === void 0 ? null : C
        }
    }
    ,
    ae.startTransition = function(g) {
        var C = x.transition;
        x.transition = {};
        try {
            g()
        } finally {
            x.transition = C
        }
    }
    ,
    ae.unstable_act = B,
    ae.useCallback = function(g, C) {
        return ke.current.useCallback(g, C)
    }
    ,
    ae.useContext = function(g) {
        return ke.current.useContext(g)
    }
    ,
    ae.useDebugValue = function() {}
    ,
    ae.useDeferredValue = function(g) {
        return ke.current.useDeferredValue(g)
    }
    ,
    ae.useEffect = function(g, C) {
        return ke.current.useEffect(g, C)
    }
    ,
    ae.useId = function() {
        return ke.current.useId()
    }
    ,
    ae.useImperativeHandle = function(g, C, ue) {
        return ke.current.useImperativeHandle(g, C, ue)
    }
    ,
    ae.useInsertionEffect = function(g, C) {
        return ke.current.useInsertionEffect(g, C)
    }
    ,
    ae.useLayoutEffect = function(g, C) {
        return ke.current.useLayoutEffect(g, C)
    }
    ,
    ae.useMemo = function(g, C) {
        return ke.current.useMemo(g, C)
    }
    ,
    ae.useReducer = function(g, C, ue) {
        return ke.current.useReducer(g, C, ue)
    }
    ,
    ae.useRef = function(g) {
        return ke.current.useRef(g)
    }
    ,
    ae.useState = function(g) {
        return ke.current.useState(g)
    }
    ,
    ae.useSyncExternalStore = function(g, C, ue) {
        return ke.current.useSyncExternalStore(g, C, ue)
    }
    ,
    ae.useTransition = function() {
        return ke.current.useTransition()
    }
    ,
    ae.version = "18.3.1",
    ae
}
var tc;
function li() {
    return tc || (tc = 1,
    zu.exports = Hd()),
    zu.exports
}
var nc;
function Qd() {
    if (nc)
        return Er;
    nc = 1;
    var f = li()
      , h = Symbol.for("react.element")
      , i = Symbol.for("react.fragment")
      , d = Object.prototype.hasOwnProperty
      , a = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , c = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function w(E, S, T) {
        var z, A = {}, L = null, M = null;
        T !== void 0 && (L = "" + T),
        S.key !== void 0 && (L = "" + S.key),
        S.ref !== void 0 && (M = S.ref);
        for (z in S)
            d.call(S, z) && !c.hasOwnProperty(z) && (A[z] = S[z]);
        if (E && E.defaultProps)
            for (z in S = E.defaultProps,
            S)
                A[z] === void 0 && (A[z] = S[z]);
        return {
            $$typeof: h,
            type: E,
            key: L,
            ref: M,
            props: A,
            _owner: a.current
        }
    }
    return Er.Fragment = i,
    Er.jsx = w,
    Er.jsxs = w,
    Er
}
var rc;
function Wd() {
    return rc || (rc = 1,
    Lu.exports = Qd()),
    Lu.exports
}
var Np = Wd()
  , sn = li();
const Kd = Oc(sn)
  , Rp = Vd({
    __proto__: null,
    default: Kd
}, [sn]);
var Dl = {}
  , Mu = {
    exports: {}
}
  , Xe = {}
  , Iu = {
    exports: {}
}
  , Du = {};
var lc;
function qd() {
    return lc || (lc = 1,
    (function(f) {
        function h(x, ne) {
            var B = x.length;
            x.push(ne);
            e: for (; 0 < B; ) {
                var g = B - 1 >>> 1
                  , C = x[g];
                if (0 < a(C, ne))
                    x[g] = ne,
                    x[B] = C,
                    B = g;
                else
                    break e
            }
        }
        function i(x) {
            return x.length === 0 ? null : x[0]
        }
        function d(x) {
            if (x.length === 0)
                return null;
            var ne = x[0]
              , B = x.pop();
            if (B !== ne) {
                x[0] = B;
                e: for (var g = 0, C = x.length, ue = C >>> 1; g < ue; ) {
                    var ie = 2 * (g + 1) - 1
                      , ce = x[ie]
                      , de = ie + 1
                      , fe = x[de];
                    if (0 > a(ce, B))
                        de < C && 0 > a(fe, ce) ? (x[g] = fe,
                        x[de] = B,
                        g = de) : (x[g] = ce,
                        x[ie] = B,
                        g = ie);
                    else if (de < C && 0 > a(fe, B))
                        x[g] = fe,
                        x[de] = B,
                        g = de;
                    else
                        break e
                }
            }
            return ne
        }
        function a(x, ne) {
            var B = x.sortIndex - ne.sortIndex;
            return B !== 0 ? B : x.id - ne.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var c = performance;
            f.unstable_now = function() {
                return c.now()
            }
        } else {
            var w = Date
              , E = w.now();
            f.unstable_now = function() {
                return w.now() - E
            }
        }
        var S = []
          , T = []
          , z = 1
          , A = null
          , L = 3
          , M = !1
          , Z = !1
          , V = !1
          , re = typeof setTimeout == "function" ? setTimeout : null
          , $ = typeof clearTimeout == "function" ? clearTimeout : null
          , oe = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function J(x) {
            for (var ne = i(T); ne !== null; ) {
                if (ne.callback === null)
                    d(T);
                else if (ne.startTime <= x)
                    d(T),
                    ne.sortIndex = ne.expirationTime,
                    h(S, ne);
                else
                    break;
                ne = i(T)
            }
        }
        function W(x) {
            if (V = !1,
            J(x),
            !Z)
                if (i(S) !== null)
                    Z = !0,
                    Te(ge);
                else {
                    var ne = i(T);
                    ne !== null && ke(W, ne.startTime - x)
                }
        }
        function ge(x, ne) {
            Z = !1,
            V && (V = !1,
            $(K),
            K = -1),
            M = !0;
            var B = L;
            try {
                for (J(ne),
                A = i(S); A !== null && (!(A.expirationTime > ne) || x && !G()); ) {
                    var g = A.callback;
                    if (typeof g == "function") {
                        A.callback = null,
                        L = A.priorityLevel;
                        var C = g(A.expirationTime <= ne);
                        ne = f.unstable_now(),
                        typeof C == "function" ? A.callback = C : A === i(S) && d(S),
                        J(ne)
                    } else
                        d(S);
                    A = i(S)
                }
                if (A !== null)
                    var ue = !0;
                else {
                    var ie = i(T);
                    ie !== null && ke(W, ie.startTime - ne),
                    ue = !1
                }
                return ue
            } finally {
                A = null,
                L = B,
                M = !1
            }
        }
        var I = !1
          , H = null
          , K = -1
          , O = 5
          , X = -1;
        function G() {
            return !(f.unstable_now() - X < O)
        }
        function Y() {
            if (H !== null) {
                var x = f.unstable_now();
                X = x;
                var ne = !0;
                try {
                    ne = H(!0, x)
                } finally {
                    ne ? j() : (I = !1,
                    H = null)
                }
            } else
                I = !1
        }
        var j;
        if (typeof oe == "function")
            j = function() {
                oe(Y)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var b = new MessageChannel
              , Le = b.port2;
            b.port1.onmessage = Y,
            j = function() {
                Le.postMessage(null)
            }
        } else
            j = function() {
                re(Y, 0)
            }
            ;
        function Te(x) {
            H = x,
            I || (I = !0,
            j())
        }
        function ke(x, ne) {
            K = re(function() {
                x(f.unstable_now())
            }, ne)
        }
        f.unstable_IdlePriority = 5,
        f.unstable_ImmediatePriority = 1,
        f.unstable_LowPriority = 4,
        f.unstable_NormalPriority = 3,
        f.unstable_Profiling = null,
        f.unstable_UserBlockingPriority = 2,
        f.unstable_cancelCallback = function(x) {
            x.callback = null
        }
        ,
        f.unstable_continueExecution = function() {
            Z || M || (Z = !0,
            Te(ge))
        }
        ,
        f.unstable_forceFrameRate = function(x) {
            0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < x ? Math.floor(1e3 / x) : 5
        }
        ,
        f.unstable_getCurrentPriorityLevel = function() {
            return L
        }
        ,
        f.unstable_getFirstCallbackNode = function() {
            return i(S)
        }
        ,
        f.unstable_next = function(x) {
            switch (L) {
            case 1:
            case 2:
            case 3:
                var ne = 3;
                break;
            default:
                ne = L
            }
            var B = L;
            L = ne;
            try {
                return x()
            } finally {
                L = B
            }
        }
        ,
        f.unstable_pauseExecution = function() {}
        ,
        f.unstable_requestPaint = function() {}
        ,
        f.unstable_runWithPriority = function(x, ne) {
            switch (x) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                x = 3
            }
            var B = L;
            L = x;
            try {
                return ne()
            } finally {
                L = B
            }
        }
        ,
        f.unstable_scheduleCallback = function(x, ne, B) {
            var g = f.unstable_now();
            switch (typeof B == "object" && B !== null ? (B = B.delay,
            B = typeof B == "number" && 0 < B ? g + B : g) : B = g,
            x) {
            case 1:
                var C = -1;
                break;
            case 2:
                C = 250;
                break;
            case 5:
                C = 1073741823;
                break;
            case 4:
                C = 1e4;
                break;
            default:
                C = 5e3
            }
            return C = B + C,
            x = {
                id: z++,
                callback: ne,
                priorityLevel: x,
                startTime: B,
                expirationTime: C,
                sortIndex: -1
            },
            B > g ? (x.sortIndex = B,
            h(T, x),
            i(S) === null && x === i(T) && (V ? ($(K),
            K = -1) : V = !0,
            ke(W, B - g))) : (x.sortIndex = C,
            h(S, x),
            Z || M || (Z = !0,
            Te(ge))),
            x
        }
        ,
        f.unstable_shouldYield = G,
        f.unstable_wrapCallback = function(x) {
            var ne = L;
            return function() {
                var B = L;
                L = ne;
                try {
                    return x.apply(this, arguments)
                } finally {
                    L = B
                }
            }
        }
    }
    )(Du)),
    Du
}
var oc;
function Yd() {
    return oc || (oc = 1,
    Iu.exports = qd()),
    Iu.exports
}
var uc;
function Gd() {
    if (uc)
        return Xe;
    uc = 1;
    var f = li()
      , h = Yd();
    function i(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var d = new Set
      , a = {};
    function c(e, t) {
        w(e, t),
        w(e + "Capture", t)
    }
    function w(e, t) {
        for (a[e] = t,
        e = 0; e < t.length; e++)
            d.add(t[e])
    }
    var E = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , S = Object.prototype.hasOwnProperty
      , T = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , z = {}
      , A = {};
    function L(e) {
        return S.call(A, e) ? !0 : S.call(z, e) ? !1 : T.test(e) ? A[e] = !0 : (z[e] = !0,
        !1)
    }
    function M(e, t, n, r) {
        if (n !== null && n.type === 0)
            return !1;
        switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
            e !== "data-" && e !== "aria-");
        default:
            return !1
        }
    }
    function Z(e, t, n, r) {
        if (t === null || typeof t > "u" || M(e, t, n, r))
            return !0;
        if (r)
            return !1;
        if (n !== null)
            switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
            }
        return !1
    }
    function V(e, t, n, r, l, o, u) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = r,
        this.attributeNamespace = l,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = o,
        this.removeEmptyString = u
    }
    var re = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        re[e] = new V(e,0,!1,e,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
        var t = e[0];
        re[t] = new V(t,1,!1,e[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        re[e] = new V(e,2,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        re[e] = new V(e,2,!1,e,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        re[e] = new V(e,3,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        re[e] = new V(e,3,!0,e,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(e) {
        re[e] = new V(e,4,!1,e,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(e) {
        re[e] = new V(e,6,!1,e,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(e) {
        re[e] = new V(e,5,!1,e.toLowerCase(),null,!1,!1)
    });
    var $ = /[\-:]([a-z])/g;
    function oe(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace($, oe);
        re[t] = new V(t,1,!1,e,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace($, oe);
        re[t] = new V(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace($, oe);
        re[t] = new V(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(e) {
        re[e] = new V(e,1,!1,e.toLowerCase(),null,!1,!1)
    }),
    re.xlinkHref = new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(e) {
        re[e] = new V(e,1,!1,e.toLowerCase(),null,!0,!0)
    });
    function J(e, t, n, r) {
        var l = re.hasOwnProperty(t) ? re[t] : null;
        (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Z(t, n, l, r) && (n = null),
        r || l === null ? L(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
        r = l.attributeNamespace,
        n === null ? e.removeAttribute(t) : (l = l.type,
        n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
        r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }
    var W = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , ge = Symbol.for("react.element")
      , I = Symbol.for("react.portal")
      , H = Symbol.for("react.fragment")
      , K = Symbol.for("react.strict_mode")
      , O = Symbol.for("react.profiler")
      , X = Symbol.for("react.provider")
      , G = Symbol.for("react.context")
      , Y = Symbol.for("react.forward_ref")
      , j = Symbol.for("react.suspense")
      , b = Symbol.for("react.suspense_list")
      , Le = Symbol.for("react.memo")
      , Te = Symbol.for("react.lazy")
      , ke = Symbol.for("react.offscreen")
      , x = Symbol.iterator;
    function ne(e) {
        return e === null || typeof e != "object" ? null : (e = x && e[x] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var B = Object.assign, g;
    function C(e) {
        if (g === void 0)
            try {
                throw Error()
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                g = t && t[1] || ""
            }
        return `
` + g + e
    }
    var ue = !1;
    function ie(e, t) {
        if (!e || ue)
            return "";
        ue = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (k) {
                        var r = k
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (k) {
                        r = k
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (k) {
                    r = k
                }
                e()
            }
        } catch (k) {
            if (k && r && typeof k.stack == "string") {
                for (var l = k.stack.split(`
`), o = r.stack.split(`
`), u = l.length - 1, s = o.length - 1; 1 <= u && 0 <= s && l[u] !== o[s]; )
                    s--;
                for (; 1 <= u && 0 <= s; u--,
                s--)
                    if (l[u] !== o[s]) {
                        if (u !== 1 || s !== 1)
                            do
                                if (u--,
                                s--,
                                0 > s || l[u] !== o[s]) {
                                    var p = `
` + l[u].replace(" at new ", " at ");
                                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)),
                                    p
                                }
                            while (1 <= u && 0 <= s);
                        break
                    }
            }
        } finally {
            ue = !1,
            Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? C(e) : ""
    }
    function ce(e) {
        switch (e.tag) {
        case 5:
            return C(e.type);
        case 16:
            return C("Lazy");
        case 13:
            return C("Suspense");
        case 19:
            return C("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = ie(e.type, !1),
            e;
        case 11:
            return e = ie(e.type.render, !1),
            e;
        case 1:
            return e = ie(e.type, !0),
            e;
        default:
            return ""
        }
    }
    function de(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case H:
            return "Fragment";
        case I:
            return "Portal";
        case O:
            return "Profiler";
        case K:
            return "StrictMode";
        case j:
            return "Suspense";
        case b:
            return "SuspenseList"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case G:
                return (e.displayName || "Context") + ".Consumer";
            case X:
                return (e._context.displayName || "Context") + ".Provider";
            case Y:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case Le:
                return t = e.displayName || null,
                t !== null ? t : de(e.type) || "Memo";
            case Te:
                t = e._payload,
                e = e._init;
                try {
                    return de(e(t))
                } catch {}
            }
        return null
    }
    function fe(e) {
        var t = e.type;
        switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
            e = e.displayName || e.name || "",
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return de(t);
        case 8:
            return t === K ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
        }
        return null
    }
    function se(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function me(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Ae(e) {
        var t = me(e) ? "checked" : "value"
          , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var l = n.get
              , o = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return l.call(this)
                },
                set: function(u) {
                    r = "" + u,
                    o.call(this, u)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
            {
                getValue: function() {
                    return r
                },
                setValue: function(u) {
                    r = "" + u
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function _r(e) {
        e._valueTracker || (e._valueTracker = Ae(e))
    }
    function ui(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
          , r = "";
        return e && (r = me(e) ? e.checked ? "true" : "false" : e.value),
        e = r,
        e !== n ? (t.setValue(e),
        !0) : !1
    }
    function Pr(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    function Al(e, t) {
        var n = t.checked;
        return B({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        })
    }
    function ii(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue
          , r = t.checked != null ? t.checked : t.defaultChecked;
        n = se(t.value != null ? t.value : n),
        e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }
    function si(e, t) {
        t = t.checked,
        t != null && J(e, "checked", t, !1)
    }
    function Fl(e, t) {
        si(e, t);
        var n = se(t.value)
          , r = t.type;
        if (n != null)
            r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? Ol(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ol(e, t.type, se(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }
    function ai(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
                return;
            t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        n = e.name,
        n !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        n !== "" && (e.name = n)
    }
    function Ol(e, t, n) {
        (t !== "number" || Pr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    var Fn = Array.isArray;
    function fn(e, t, n, r) {
        if (e = e.options,
        t) {
            t = {};
            for (var l = 0; l < n.length; l++)
                t["$" + n[l]] = !0;
            for (n = 0; n < e.length; n++)
                l = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== l && (e[n].selected = l),
                l && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + se(n),
            t = null,
            l = 0; l < e.length; l++) {
                if (e[l].value === n) {
                    e[l].selected = !0,
                    r && (e[l].defaultSelected = !0);
                    return
                }
                t !== null || e[l].disabled || (t = e[l])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Ul(e, t) {
        if (t.dangerouslySetInnerHTML != null)
            throw Error(i(91));
        return B({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }
    function ci(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children,
            t = t.defaultValue,
            n != null) {
                if (t != null)
                    throw Error(i(92));
                if (Fn(n)) {
                    if (1 < n.length)
                        throw Error(i(93));
                    n = n[0]
                }
                t = n
            }
            t == null && (t = ""),
            n = t
        }
        e._wrapperState = {
            initialValue: se(n)
        }
    }
    function fi(e, t) {
        var n = se(t.value)
          , r = se(t.defaultValue);
        n != null && (n = "" + n,
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r)
    }
    function di(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }
    function pi(e) {
        switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function jl(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? pi(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var Nr, hi = (function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, l)
            })
        }
        : e
    }
    )(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
            e.innerHTML = t;
        else {
            for (Nr = Nr || document.createElement("div"),
            Nr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Nr.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; t.firstChild; )
                e.appendChild(t.firstChild)
        }
    });
    function On(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Un = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , Wc = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Un).forEach(function(e) {
        Wc.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1),
            Un[t] = Un[e]
        })
    });
    function mi(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Un.hasOwnProperty(e) && Un[e] ? ("" + t).trim() : t + "px"
    }
    function gi(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var r = n.indexOf("--") === 0
                  , l = mi(n, t[n], r);
                n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, l) : e[n] = l
            }
    }
    var Kc = B({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function Vl(e, t) {
        if (t) {
            if (Kc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
                throw Error(i(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null)
                    throw Error(i(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                    throw Error(i(61))
            }
            if (t.style != null && typeof t.style != "object")
                throw Error(i(62))
        }
    }
    function Hl(e, t) {
        if (e.indexOf("-") === -1)
            return typeof t.is == "string";
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Ql = null;
    function Wl(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Kl = null
      , dn = null
      , pn = null;
    function vi(e) {
        if (e = ir(e)) {
            if (typeof Kl != "function")
                throw Error(i(280));
            var t = e.stateNode;
            t && (t = Jr(t),
            Kl(e.stateNode, e.type, t))
        }
    }
    function yi(e) {
        dn ? pn ? pn.push(e) : pn = [e] : dn = e
    }
    function wi() {
        if (dn) {
            var e = dn
              , t = pn;
            if (pn = dn = null,
            vi(e),
            t)
                for (e = 0; e < t.length; e++)
                    vi(t[e])
        }
    }
    function Si(e, t) {
        return e(t)
    }
    function ki() {}
    var ql = !1;
    function Ei(e, t, n) {
        if (ql)
            return e(t, n);
        ql = !0;
        try {
            return Si(e, t, n)
        } finally {
            ql = !1,
            (dn !== null || pn !== null) && (ki(),
            wi())
        }
    }
    function jn(e, t) {
        var n = e.stateNode;
        if (n === null)
            return null;
        var r = Jr(n);
        if (r === null)
            return null;
        n = r[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type,
            r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !r;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (n && typeof n != "function")
            throw Error(i(231, t, typeof n));
        return n
    }
    var Yl = !1;
    if (E)
        try {
            var Vn = {};
            Object.defineProperty(Vn, "passive", {
                get: function() {
                    Yl = !0
                }
            }),
            window.addEventListener("test", Vn, Vn),
            window.removeEventListener("test", Vn, Vn)
        } catch {
            Yl = !1
        }
    function qc(e, t, n, r, l, o, u, s, p) {
        var k = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, k)
        } catch (P) {
            this.onError(P)
        }
    }
    var Hn = !1
      , Rr = null
      , Tr = !1
      , Gl = null
      , Yc = {
        onError: function(e) {
            Hn = !0,
            Rr = e
        }
    };
    function Gc(e, t, n, r, l, o, u, s, p) {
        Hn = !1,
        Rr = null,
        qc.apply(Yc, arguments)
    }
    function Jc(e, t, n, r, l, o, u, s, p) {
        if (Gc.apply(this, arguments),
        Hn) {
            if (Hn) {
                var k = Rr;
                Hn = !1,
                Rr = null
            } else
                throw Error(i(198));
            Tr || (Tr = !0,
            Gl = k)
        }
    }
    function Gt(e) {
        var t = e
          , n = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (n = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? n : null
    }
    function Ci(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function _i(e) {
        if (Gt(e) !== e)
            throw Error(i(188))
    }
    function Xc(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Gt(e),
            t === null)
                throw Error(i(188));
            return t !== e ? null : e
        }
        for (var n = e, r = t; ; ) {
            var l = n.return;
            if (l === null)
                break;
            var o = l.alternate;
            if (o === null) {
                if (r = l.return,
                r !== null) {
                    n = r;
                    continue
                }
                break
            }
            if (l.child === o.child) {
                for (o = l.child; o; ) {
                    if (o === n)
                        return _i(l),
                        e;
                    if (o === r)
                        return _i(l),
                        t;
                    o = o.sibling
                }
                throw Error(i(188))
            }
            if (n.return !== r.return)
                n = l,
                r = o;
            else {
                for (var u = !1, s = l.child; s; ) {
                    if (s === n) {
                        u = !0,
                        n = l,
                        r = o;
                        break
                    }
                    if (s === r) {
                        u = !0,
                        r = l,
                        n = o;
                        break
                    }
                    s = s.sibling
                }
                if (!u) {
                    for (s = o.child; s; ) {
                        if (s === n) {
                            u = !0,
                            n = o,
                            r = l;
                            break
                        }
                        if (s === r) {
                            u = !0,
                            r = o,
                            n = l;
                            break
                        }
                        s = s.sibling
                    }
                    if (!u)
                        throw Error(i(189))
                }
            }
            if (n.alternate !== r)
                throw Error(i(190))
        }
        if (n.tag !== 3)
            throw Error(i(188));
        return n.stateNode.current === n ? e : t
    }
    function Pi(e) {
        return e = Xc(e),
        e !== null ? Ni(e) : null
    }
    function Ni(e) {
        if (e.tag === 5 || e.tag === 6)
            return e;
        for (e = e.child; e !== null; ) {
            var t = Ni(e);
            if (t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var Ri = h.unstable_scheduleCallback
      , Ti = h.unstable_cancelCallback
      , Zc = h.unstable_shouldYield
      , $c = h.unstable_requestPaint
      , Ne = h.unstable_now
      , bc = h.unstable_getCurrentPriorityLevel
      , Jl = h.unstable_ImmediatePriority
      , xi = h.unstable_UserBlockingPriority
      , xr = h.unstable_NormalPriority
      , ef = h.unstable_LowPriority
      , Li = h.unstable_IdlePriority
      , Lr = null
      , ht = null;
    function tf(e) {
        if (ht && typeof ht.onCommitFiberRoot == "function")
            try {
                ht.onCommitFiberRoot(Lr, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
    }
    var it = Math.clz32 ? Math.clz32 : lf
      , nf = Math.log
      , rf = Math.LN2;
    function lf(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (nf(e) / rf | 0) | 0
    }
    var zr = 64
      , Mr = 4194304;
    function Qn(e) {
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
        }
    }
    function Ir(e, t) {
        var n = e.pendingLanes;
        if (n === 0)
            return 0;
        var r = 0
          , l = e.suspendedLanes
          , o = e.pingedLanes
          , u = n & 268435455;
        if (u !== 0) {
            var s = u & ~l;
            s !== 0 ? r = Qn(s) : (o &= u,
            o !== 0 && (r = Qn(o)))
        } else
            u = n & ~l,
            u !== 0 ? r = Qn(u) : o !== 0 && (r = Qn(o));
        if (r === 0)
            return 0;
        if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r,
        o = t & -t,
        l >= o || l === 16 && (o & 4194240) !== 0))
            return t;
        if ((r & 4) !== 0 && (r |= n & 16),
        t = e.entangledLanes,
        t !== 0)
            for (e = e.entanglements,
            t &= r; 0 < t; )
                n = 31 - it(t),
                l = 1 << n,
                r |= e[n],
                t &= ~l;
        return r
    }
    function of(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function uf(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
            var u = 31 - it(o)
              , s = 1 << u
              , p = l[u];
            p === -1 ? ((s & n) === 0 || (s & r) !== 0) && (l[u] = of(s, t)) : p <= t && (e.expiredLanes |= s),
            o &= ~s
        }
    }
    function Xl(e) {
        return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }
    function zi() {
        var e = zr;
        return zr <<= 1,
        (zr & 4194240) === 0 && (zr = 64),
        e
    }
    function Zl(e) {
        for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
        return t
    }
    function Wn(e, t, n) {
        e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
        e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - it(t),
        e[t] = n
    }
    function sf(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n; ) {
            var l = 31 - it(n)
              , o = 1 << l;
            t[l] = 0,
            r[l] = -1,
            e[l] = -1,
            n &= ~o
        }
    }
    function $l(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
            var r = 31 - it(n)
              , l = 1 << r;
            l & t | e[r] & t && (e[r] |= t),
            n &= ~l
        }
    }
    var ve = 0;
    function Mi(e) {
        return e &= -e,
        1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Ii, bl, Di, Bi, Ai, eo = !1, Dr = [], Tt = null, xt = null, Lt = null, Kn = new Map, qn = new Map, zt = [], af = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Fi(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Tt = null;
            break;
        case "dragenter":
        case "dragleave":
            xt = null;
            break;
        case "mouseover":
        case "mouseout":
            Lt = null;
            break;
        case "pointerover":
        case "pointerout":
            Kn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            qn.delete(t.pointerId)
        }
    }
    function Yn(e, t, n, r, l, o) {
        return e === null || e.nativeEvent !== o ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: o,
            targetContainers: [l]
        },
        t !== null && (t = ir(t),
        t !== null && bl(t)),
        e) : (e.eventSystemFlags |= r,
        t = e.targetContainers,
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e)
    }
    function cf(e, t, n, r, l) {
        switch (t) {
        case "focusin":
            return Tt = Yn(Tt, e, t, n, r, l),
            !0;
        case "dragenter":
            return xt = Yn(xt, e, t, n, r, l),
            !0;
        case "mouseover":
            return Lt = Yn(Lt, e, t, n, r, l),
            !0;
        case "pointerover":
            var o = l.pointerId;
            return Kn.set(o, Yn(Kn.get(o) || null, e, t, n, r, l)),
            !0;
        case "gotpointercapture":
            return o = l.pointerId,
            qn.set(o, Yn(qn.get(o) || null, e, t, n, r, l)),
            !0
        }
        return !1
    }
    function Oi(e) {
        var t = Jt(e.target);
        if (t !== null) {
            var n = Gt(t);
            if (n !== null) {
                if (t = n.tag,
                t === 13) {
                    if (t = Ci(n),
                    t !== null) {
                        e.blockedOn = t,
                        Ai(e.priority, function() {
                            Di(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Br(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = no(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type,n);
                Ql = r,
                n.target.dispatchEvent(r),
                Ql = null
            } else
                return t = ir(n),
                t !== null && bl(t),
                e.blockedOn = n,
                !1;
            t.shift()
        }
        return !0
    }
    function Ui(e, t, n) {
        Br(e) && n.delete(t)
    }
    function ff() {
        eo = !1,
        Tt !== null && Br(Tt) && (Tt = null),
        xt !== null && Br(xt) && (xt = null),
        Lt !== null && Br(Lt) && (Lt = null),
        Kn.forEach(Ui),
        qn.forEach(Ui)
    }
    function Gn(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        eo || (eo = !0,
        h.unstable_scheduleCallback(h.unstable_NormalPriority, ff)))
    }
    function Jn(e) {
        function t(l) {
            return Gn(l, e)
        }
        if (0 < Dr.length) {
            Gn(Dr[0], e);
            for (var n = 1; n < Dr.length; n++) {
                var r = Dr[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (Tt !== null && Gn(Tt, e),
        xt !== null && Gn(xt, e),
        Lt !== null && Gn(Lt, e),
        Kn.forEach(t),
        qn.forEach(t),
        n = 0; n < zt.length; n++)
            r = zt[n],
            r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < zt.length && (n = zt[0],
        n.blockedOn === null); )
            Oi(n),
            n.blockedOn === null && zt.shift()
    }
    var hn = W.ReactCurrentBatchConfig
      , Ar = !0;
    function df(e, t, n, r) {
        var l = ve
          , o = hn.transition;
        hn.transition = null;
        try {
            ve = 1,
            to(e, t, n, r)
        } finally {
            ve = l,
            hn.transition = o
        }
    }
    function pf(e, t, n, r) {
        var l = ve
          , o = hn.transition;
        hn.transition = null;
        try {
            ve = 4,
            to(e, t, n, r)
        } finally {
            ve = l,
            hn.transition = o
        }
    }
    function to(e, t, n, r) {
        if (Ar) {
            var l = no(e, t, n, r);
            if (l === null)
                So(e, t, r, Fr, n),
                Fi(e, r);
            else if (cf(l, e, t, n, r))
                r.stopPropagation();
            else if (Fi(e, r),
            t & 4 && -1 < af.indexOf(e)) {
                for (; l !== null; ) {
                    var o = ir(l);
                    if (o !== null && Ii(o),
                    o = no(e, t, n, r),
                    o === null && So(e, t, r, Fr, n),
                    o === l)
                        break;
                    l = o
                }
                l !== null && r.stopPropagation()
            } else
                So(e, t, r, null, n)
        }
    }
    var Fr = null;
    function no(e, t, n, r) {
        if (Fr = null,
        e = Wl(r),
        e = Jt(e),
        e !== null)
            if (t = Gt(e),
            t === null)
                e = null;
            else if (n = t.tag,
            n === 13) {
                if (e = Ci(t),
                e !== null)
                    return e;
                e = null
            } else if (n === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else
                t !== e && (e = null);
        return Fr = e,
        null
    }
    function ji(e) {
        switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (bc()) {
            case Jl:
                return 1;
            case xi:
                return 4;
            case xr:
            case ef:
                return 16;
            case Li:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var Mt = null
      , ro = null
      , Or = null;
    function Vi() {
        if (Or)
            return Or;
        var e, t = ro, n = t.length, r, l = "value"in Mt ? Mt.value : Mt.textContent, o = l.length;
        for (e = 0; e < n && t[e] === l[e]; e++)
            ;
        var u = n - e;
        for (r = 1; r <= u && t[n - r] === l[o - r]; r++)
            ;
        return Or = l.slice(e, 1 < r ? 1 - r : void 0)
    }
    function Ur(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function jr() {
        return !0
    }
    function Hi() {
        return !1
    }
    function Ze(e) {
        function t(n, r, l, o, u) {
            this._reactName = n,
            this._targetInst = l,
            this.type = r,
            this.nativeEvent = o,
            this.target = u,
            this.currentTarget = null;
            for (var s in e)
                e.hasOwnProperty(s) && (n = e[s],
                this[s] = n ? n(o) : o[s]);
            return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? jr : Hi,
            this.isPropagationStopped = Hi,
            this
        }
        return B(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = jr)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = jr)
            },
            persist: function() {},
            isPersistent: jr
        }),
        t
    }
    var mn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, lo = Ze(mn), Xn = B({}, mn, {
        view: 0,
        detail: 0
    }), hf = Ze(Xn), oo, uo, Zn, Vr = B({}, Xn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: so,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== Zn && (Zn && e.type === "mousemove" ? (oo = e.screenX - Zn.screenX,
            uo = e.screenY - Zn.screenY) : uo = oo = 0,
            Zn = e),
            oo)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : uo
        }
    }), Qi = Ze(Vr), mf = B({}, Vr, {
        dataTransfer: 0
    }), gf = Ze(mf), vf = B({}, Xn, {
        relatedTarget: 0
    }), io = Ze(vf), yf = B({}, mn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), wf = Ze(yf), Sf = B({}, mn, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), kf = Ze(Sf), Ef = B({}, mn, {
        data: 0
    }), Wi = Ze(Ef), Cf = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, _f = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Pf = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Nf(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Pf[e]) ? !!t[e] : !1
    }
    function so() {
        return Nf
    }
    var Rf = B({}, Xn, {
        key: function(e) {
            if (e.key) {
                var t = Cf[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Ur(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _f[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: so,
        charCode: function(e) {
            return e.type === "keypress" ? Ur(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Ur(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , Tf = Ze(Rf)
      , xf = B({}, Vr, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Ki = Ze(xf)
      , Lf = B({}, Xn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: so
    })
      , zf = Ze(Lf)
      , Mf = B({}, mn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , If = Ze(Mf)
      , Df = B({}, Vr, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Bf = Ze(Df)
      , Af = [9, 13, 27, 32]
      , ao = E && "CompositionEvent"in window
      , $n = null;
    E && "documentMode"in document && ($n = document.documentMode);
    var Ff = E && "TextEvent"in window && !$n
      , qi = E && (!ao || $n && 8 < $n && 11 >= $n)
      , Yi = " "
      , Gi = !1;
    function Ji(e, t) {
        switch (e) {
        case "keyup":
            return Af.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Xi(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var gn = !1;
    function Of(e, t) {
        switch (e) {
        case "compositionend":
            return Xi(t);
        case "keypress":
            return t.which !== 32 ? null : (Gi = !0,
            Yi);
        case "textInput":
            return e = t.data,
            e === Yi && Gi ? null : e;
        default:
            return null
        }
    }
    function Uf(e, t) {
        if (gn)
            return e === "compositionend" || !ao && Ji(e, t) ? (e = Vi(),
            Or = ro = Mt = null,
            gn = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return qi && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var jf = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Zi(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!jf[e.type] : t === "textarea"
    }
    function $i(e, t, n, r) {
        yi(r),
        t = qr(t, "onChange"),
        0 < t.length && (n = new lo("onChange","change",null,n,r),
        e.push({
            event: n,
            listeners: t
        }))
    }
    var bn = null
      , er = null;
    function Vf(e) {
        gs(e, 0)
    }
    function Hr(e) {
        var t = kn(e);
        if (ui(t))
            return e
    }
    function Hf(e, t) {
        if (e === "change")
            return t
    }
    var bi = !1;
    if (E) {
        var co;
        if (E) {
            var fo = "oninput"in document;
            if (!fo) {
                var es = document.createElement("div");
                es.setAttribute("oninput", "return;"),
                fo = typeof es.oninput == "function"
            }
            co = fo
        } else
            co = !1;
        bi = co && (!document.documentMode || 9 < document.documentMode)
    }
    function ts() {
        bn && (bn.detachEvent("onpropertychange", ns),
        er = bn = null)
    }
    function ns(e) {
        if (e.propertyName === "value" && Hr(er)) {
            var t = [];
            $i(t, er, e, Wl(e)),
            Ei(Vf, t)
        }
    }
    function Qf(e, t, n) {
        e === "focusin" ? (ts(),
        bn = t,
        er = n,
        bn.attachEvent("onpropertychange", ns)) : e === "focusout" && ts()
    }
    function Wf(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Hr(er)
    }
    function Kf(e, t) {
        if (e === "click")
            return Hr(t)
    }
    function qf(e, t) {
        if (e === "input" || e === "change")
            return Hr(t)
    }
    function Yf(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var st = typeof Object.is == "function" ? Object.is : Yf;
    function tr(e, t) {
        if (st(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (r = 0; r < n.length; r++) {
            var l = n[r];
            if (!S.call(t, l) || !st(e[l], t[l]))
                return !1
        }
        return !0
    }
    function rs(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function ls(e, t) {
        var n = rs(e);
        e = 0;
        for (var r; n; ) {
            if (n.nodeType === 3) {
                if (r = e + n.textContent.length,
                e <= t && r >= t)
                    return {
                        node: n,
                        offset: t - e
                    };
                e = r
            }
            e: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = rs(n)
        }
    }
    function os(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? os(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function us() {
        for (var e = window, t = Pr(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                e = t.contentWindow;
            else
                break;
            t = Pr(e.document)
        }
        return t
    }
    function po(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    function Gf(e) {
        var t = us()
          , n = e.focusedElem
          , r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && os(n.ownerDocument.documentElement, n)) {
            if (r !== null && po(n)) {
                if (t = r.start,
                e = r.end,
                e === void 0 && (e = t),
                "selectionStart"in n)
                    n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                    e = e.getSelection();
                    var l = n.textContent.length
                      , o = Math.min(r.start, l);
                    r = r.end === void 0 ? o : Math.min(r.end, l),
                    !e.extend && o > r && (l = r,
                    r = o,
                    o = l),
                    l = ls(n, o);
                    var u = ls(n, r);
                    l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(),
                    t.setStart(l.node, l.offset),
                    e.removeAllRanges(),
                    o > r ? (e.addRange(t),
                    e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset),
                    e.addRange(t)))
                }
            }
            for (t = [],
            e = n; e = e.parentNode; )
                e.nodeType === 1 && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
            for (typeof n.focus == "function" && n.focus(),
            n = 0; n < t.length; n++)
                e = t[n],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
        }
    }
    var Jf = E && "documentMode"in document && 11 >= document.documentMode
      , vn = null
      , ho = null
      , nr = null
      , mo = !1;
    function is(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        mo || vn == null || vn !== Pr(r) || (r = vn,
        "selectionStart"in r && po(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
        r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }),
        nr && tr(nr, r) || (nr = r,
        r = qr(ho, "onSelect"),
        0 < r.length && (t = new lo("onSelect","select",null,t,n),
        e.push({
            event: t,
            listeners: r
        }),
        t.target = vn)))
    }
    function Qr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
    }
    var yn = {
        animationend: Qr("Animation", "AnimationEnd"),
        animationiteration: Qr("Animation", "AnimationIteration"),
        animationstart: Qr("Animation", "AnimationStart"),
        transitionend: Qr("Transition", "TransitionEnd")
    }
      , go = {}
      , ss = {};
    E && (ss = document.createElement("div").style,
    "AnimationEvent"in window || (delete yn.animationend.animation,
    delete yn.animationiteration.animation,
    delete yn.animationstart.animation),
    "TransitionEvent"in window || delete yn.transitionend.transition);
    function Wr(e) {
        if (go[e])
            return go[e];
        if (!yn[e])
            return e;
        var t = yn[e], n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in ss)
                return go[e] = t[n];
        return e
    }
    var as = Wr("animationend")
      , cs = Wr("animationiteration")
      , fs = Wr("animationstart")
      , ds = Wr("transitionend")
      , ps = new Map
      , hs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function It(e, t) {
        ps.set(e, t),
        c(t, [e])
    }
    for (var vo = 0; vo < hs.length; vo++) {
        var yo = hs[vo]
          , Xf = yo.toLowerCase()
          , Zf = yo[0].toUpperCase() + yo.slice(1);
        It(Xf, "on" + Zf)
    }
    It(as, "onAnimationEnd"),
    It(cs, "onAnimationIteration"),
    It(fs, "onAnimationStart"),
    It("dblclick", "onDoubleClick"),
    It("focusin", "onFocus"),
    It("focusout", "onBlur"),
    It(ds, "onTransitionEnd"),
    w("onMouseEnter", ["mouseout", "mouseover"]),
    w("onMouseLeave", ["mouseout", "mouseover"]),
    w("onPointerEnter", ["pointerout", "pointerover"]),
    w("onPointerLeave", ["pointerout", "pointerover"]),
    c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var rr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , $f = new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));
    function ms(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n,
        Jc(r, t, void 0, e),
        e.currentTarget = null
    }
    function gs(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var r = e[n]
              , l = r.event;
            r = r.listeners;
            e: {
                var o = void 0;
                if (t)
                    for (var u = r.length - 1; 0 <= u; u--) {
                        var s = r[u]
                          , p = s.instance
                          , k = s.currentTarget;
                        if (s = s.listener,
                        p !== o && l.isPropagationStopped())
                            break e;
                        ms(l, s, k),
                        o = p
                    }
                else
                    for (u = 0; u < r.length; u++) {
                        if (s = r[u],
                        p = s.instance,
                        k = s.currentTarget,
                        s = s.listener,
                        p !== o && l.isPropagationStopped())
                            break e;
                        ms(l, s, k),
                        o = p
                    }
            }
        }
        if (Tr)
            throw e = Gl,
            Tr = !1,
            Gl = null,
            e
    }
    function we(e, t) {
        var n = t[No];
        n === void 0 && (n = t[No] = new Set);
        var r = e + "__bubble";
        n.has(r) || (vs(t, e, 2, !1),
        n.add(r))
    }
    function wo(e, t, n) {
        var r = 0;
        t && (r |= 4),
        vs(n, e, r, t)
    }
    var Kr = "_reactListening" + Math.random().toString(36).slice(2);
    function lr(e) {
        if (!e[Kr]) {
            e[Kr] = !0,
            d.forEach(function(n) {
                n !== "selectionchange" && ($f.has(n) || wo(n, !1, e),
                wo(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Kr] || (t[Kr] = !0,
            wo("selectionchange", !1, t))
        }
    }
    function vs(e, t, n, r) {
        switch (ji(t)) {
        case 1:
            var l = df;
            break;
        case 4:
            l = pf;
            break;
        default:
            l = to
        }
        n = l.bind(null, t, n, e),
        l = void 0,
        !Yl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
        r ? l !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: l
        }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
            passive: l
        }) : e.addEventListener(t, n, !1)
    }
    function So(e, t, n, r, l) {
        var o = r;
        if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
            e: for (; ; ) {
                if (r === null)
                    return;
                var u = r.tag;
                if (u === 3 || u === 4) {
                    var s = r.stateNode.containerInfo;
                    if (s === l || s.nodeType === 8 && s.parentNode === l)
                        break;
                    if (u === 4)
                        for (u = r.return; u !== null; ) {
                            var p = u.tag;
                            if ((p === 3 || p === 4) && (p = u.stateNode.containerInfo,
                            p === l || p.nodeType === 8 && p.parentNode === l))
                                return;
                            u = u.return
                        }
                    for (; s !== null; ) {
                        if (u = Jt(s),
                        u === null)
                            return;
                        if (p = u.tag,
                        p === 5 || p === 6) {
                            r = o = u;
                            continue e
                        }
                        s = s.parentNode
                    }
                }
                r = r.return
            }
        Ei(function() {
            var k = o
              , P = Wl(n)
              , N = [];
            e: {
                var _ = ps.get(e);
                if (_ !== void 0) {
                    var D = lo
                      , U = e;
                    switch (e) {
                    case "keypress":
                        if (Ur(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        D = Tf;
                        break;
                    case "focusin":
                        U = "focus",
                        D = io;
                        break;
                    case "focusout":
                        U = "blur",
                        D = io;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        D = io;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        D = Qi;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        D = gf;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        D = zf;
                        break;
                    case as:
                    case cs:
                    case fs:
                        D = wf;
                        break;
                    case ds:
                        D = If;
                        break;
                    case "scroll":
                        D = hf;
                        break;
                    case "wheel":
                        D = Bf;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        D = kf;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        D = Ki
                    }
                    var Q = (t & 4) !== 0
                      , Re = !Q && e === "scroll"
                      , v = Q ? _ !== null ? _ + "Capture" : null : _;
                    Q = [];
                    for (var m = k, y; m !== null; ) {
                        y = m;
                        var R = y.stateNode;
                        if (y.tag === 5 && R !== null && (y = R,
                        v !== null && (R = jn(m, v),
                        R != null && Q.push(or(m, R, y)))),
                        Re)
                            break;
                        m = m.return
                    }
                    0 < Q.length && (_ = new D(_,U,null,n,P),
                    N.push({
                        event: _,
                        listeners: Q
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (_ = e === "mouseover" || e === "pointerover",
                    D = e === "mouseout" || e === "pointerout",
                    _ && n !== Ql && (U = n.relatedTarget || n.fromElement) && (Jt(U) || U[St]))
                        break e;
                    if ((D || _) && (_ = P.window === P ? P : (_ = P.ownerDocument) ? _.defaultView || _.parentWindow : window,
                    D ? (U = n.relatedTarget || n.toElement,
                    D = k,
                    U = U ? Jt(U) : null,
                    U !== null && (Re = Gt(U),
                    U !== Re || U.tag !== 5 && U.tag !== 6) && (U = null)) : (D = null,
                    U = k),
                    D !== U)) {
                        if (Q = Qi,
                        R = "onMouseLeave",
                        v = "onMouseEnter",
                        m = "mouse",
                        (e === "pointerout" || e === "pointerover") && (Q = Ki,
                        R = "onPointerLeave",
                        v = "onPointerEnter",
                        m = "pointer"),
                        Re = D == null ? _ : kn(D),
                        y = U == null ? _ : kn(U),
                        _ = new Q(R,m + "leave",D,n,P),
                        _.target = Re,
                        _.relatedTarget = y,
                        R = null,
                        Jt(P) === k && (Q = new Q(v,m + "enter",U,n,P),
                        Q.target = y,
                        Q.relatedTarget = Re,
                        R = Q),
                        Re = R,
                        D && U)
                            t: {
                                for (Q = D,
                                v = U,
                                m = 0,
                                y = Q; y; y = wn(y))
                                    m++;
                                for (y = 0,
                                R = v; R; R = wn(R))
                                    y++;
                                for (; 0 < m - y; )
                                    Q = wn(Q),
                                    m--;
                                for (; 0 < y - m; )
                                    v = wn(v),
                                    y--;
                                for (; m--; ) {
                                    if (Q === v || v !== null && Q === v.alternate)
                                        break t;
                                    Q = wn(Q),
                                    v = wn(v)
                                }
                                Q = null
                            }
                        else
                            Q = null;
                        D !== null && ys(N, _, D, Q, !1),
                        U !== null && Re !== null && ys(N, Re, U, Q, !0)
                    }
                }
                e: {
                    if (_ = k ? kn(k) : window,
                    D = _.nodeName && _.nodeName.toLowerCase(),
                    D === "select" || D === "input" && _.type === "file")
                        var q = Hf;
                    else if (Zi(_))
                        if (bi)
                            q = qf;
                        else {
                            q = Wf;
                            var ee = Qf
                        }
                    else
                        (D = _.nodeName) && D.toLowerCase() === "input" && (_.type === "checkbox" || _.type === "radio") && (q = Kf);
                    if (q && (q = q(e, k))) {
                        $i(N, q, n, P);
                        break e
                    }
                    ee && ee(e, _, k),
                    e === "focusout" && (ee = _._wrapperState) && ee.controlled && _.type === "number" && Ol(_, "number", _.value)
                }
                switch (ee = k ? kn(k) : window,
                e) {
                case "focusin":
                    (Zi(ee) || ee.contentEditable === "true") && (vn = ee,
                    ho = k,
                    nr = null);
                    break;
                case "focusout":
                    nr = ho = vn = null;
                    break;
                case "mousedown":
                    mo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    mo = !1,
                    is(N, n, P);
                    break;
                case "selectionchange":
                    if (Jf)
                        break;
                case "keydown":
                case "keyup":
                    is(N, n, P)
                }
                var te;
                if (ao)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var le = "onCompositionStart";
                            break e;
                        case "compositionend":
                            le = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            le = "onCompositionUpdate";
                            break e
                        }
                        le = void 0
                    }
                else
                    gn ? Ji(e, n) && (le = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (le = "onCompositionStart");
                le && (qi && n.locale !== "ko" && (gn || le !== "onCompositionStart" ? le === "onCompositionEnd" && gn && (te = Vi()) : (Mt = P,
                ro = "value"in Mt ? Mt.value : Mt.textContent,
                gn = !0)),
                ee = qr(k, le),
                0 < ee.length && (le = new Wi(le,e,null,n,P),
                N.push({
                    event: le,
                    listeners: ee
                }),
                te ? le.data = te : (te = Xi(n),
                te !== null && (le.data = te)))),
                (te = Ff ? Of(e, n) : Uf(e, n)) && (k = qr(k, "onBeforeInput"),
                0 < k.length && (P = new Wi("onBeforeInput","beforeinput",null,n,P),
                N.push({
                    event: P,
                    listeners: k
                }),
                P.data = te))
            }
            gs(N, t)
        })
    }
    function or(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }
    function qr(e, t) {
        for (var n = t + "Capture", r = []; e !== null; ) {
            var l = e
              , o = l.stateNode;
            l.tag === 5 && o !== null && (l = o,
            o = jn(e, n),
            o != null && r.unshift(or(e, o, l)),
            o = jn(e, t),
            o != null && r.push(or(e, o, l))),
            e = e.return
        }
        return r
    }
    function wn(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5);
        return e || null
    }
    function ys(e, t, n, r, l) {
        for (var o = t._reactName, u = []; n !== null && n !== r; ) {
            var s = n
              , p = s.alternate
              , k = s.stateNode;
            if (p !== null && p === r)
                break;
            s.tag === 5 && k !== null && (s = k,
            l ? (p = jn(n, o),
            p != null && u.unshift(or(n, p, s))) : l || (p = jn(n, o),
            p != null && u.push(or(n, p, s)))),
            n = n.return
        }
        u.length !== 0 && e.push({
            event: t,
            listeners: u
        })
    }
    var bf = /\r\n?/g
      , ed = /\u0000|\uFFFD/g;
    function ws(e) {
        return (typeof e == "string" ? e : "" + e).replace(bf, `
`).replace(ed, "")
    }
    function Yr(e, t, n) {
        if (t = ws(t),
        ws(e) !== t && n)
            throw Error(i(425))
    }
    function Gr() {}
    var ko = null
      , Eo = null;
    function Co(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var _o = typeof setTimeout == "function" ? setTimeout : void 0
      , td = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Ss = typeof Promise == "function" ? Promise : void 0
      , nd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ss < "u" ? function(e) {
        return Ss.resolve(null).then(e).catch(rd)
    }
    : _o;
    function rd(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Po(e, t) {
        var n = t
          , r = 0;
        do {
            var l = n.nextSibling;
            if (e.removeChild(n),
            l && l.nodeType === 8)
                if (n = l.data,
                n === "/$") {
                    if (r === 0) {
                        e.removeChild(l),
                        Jn(t);
                        return
                    }
                    r--
                } else
                    n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = l
        } while (n);
        Jn(t)
    }
    function Dt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    function ks(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Sn = Math.random().toString(36).slice(2)
      , mt = "__reactFiber$" + Sn
      , ur = "__reactProps$" + Sn
      , St = "__reactContainer$" + Sn
      , No = "__reactEvents$" + Sn
      , ld = "__reactListeners$" + Sn
      , od = "__reactHandles$" + Sn;
    function Jt(e) {
        var t = e[mt];
        if (t)
            return t;
        for (var n = e.parentNode; n; ) {
            if (t = n[St] || n[mt]) {
                if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                    for (e = ks(e); e !== null; ) {
                        if (n = e[mt])
                            return n;
                        e = ks(e)
                    }
                return t
            }
            e = n,
            n = e.parentNode
        }
        return null
    }
    function ir(e) {
        return e = e[mt] || e[St],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }
    function kn(e) {
        if (e.tag === 5 || e.tag === 6)
            return e.stateNode;
        throw Error(i(33))
    }
    function Jr(e) {
        return e[ur] || null
    }
    var Ro = []
      , En = -1;
    function Bt(e) {
        return {
            current: e
        }
    }
    function Se(e) {
        0 > En || (e.current = Ro[En],
        Ro[En] = null,
        En--)
    }
    function ye(e, t) {
        En++,
        Ro[En] = e.current,
        e.current = t
    }
    var At = {}
      , Ue = Bt(At)
      , Ke = Bt(!1)
      , Xt = At;
    function Cn(e, t) {
        var n = e.type.contextTypes;
        if (!n)
            return At;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
        var l = {}, o;
        for (o in n)
            l[o] = t[o];
        return r && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = l),
        l
    }
    function qe(e) {
        return e = e.childContextTypes,
        e != null
    }
    function Xr() {
        Se(Ke),
        Se(Ue)
    }
    function Es(e, t, n) {
        if (Ue.current !== At)
            throw Error(i(168));
        ye(Ue, t),
        ye(Ke, n)
    }
    function Cs(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes,
        typeof r.getChildContext != "function")
            return n;
        r = r.getChildContext();
        for (var l in r)
            if (!(l in t))
                throw Error(i(108, fe(e) || "Unknown", l));
        return B({}, n, r)
    }
    function Zr(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || At,
        Xt = Ue.current,
        ye(Ue, e),
        ye(Ke, Ke.current),
        !0
    }
    function _s(e, t, n) {
        var r = e.stateNode;
        if (!r)
            throw Error(i(169));
        n ? (e = Cs(e, t, Xt),
        r.__reactInternalMemoizedMergedChildContext = e,
        Se(Ke),
        Se(Ue),
        ye(Ue, e)) : Se(Ke),
        ye(Ke, n)
    }
    var kt = null
      , $r = !1
      , To = !1;
    function Ps(e) {
        kt === null ? kt = [e] : kt.push(e)
    }
    function ud(e) {
        $r = !0,
        Ps(e)
    }
    function Ft() {
        if (!To && kt !== null) {
            To = !0;
            var e = 0
              , t = ve;
            try {
                var n = kt;
                for (ve = 1; e < n.length; e++) {
                    var r = n[e];
                    do
                        r = r(!0);
                    while (r !== null)
                }
                kt = null,
                $r = !1
            } catch (l) {
                throw kt !== null && (kt = kt.slice(e + 1)),
                Ri(Jl, Ft),
                l
            } finally {
                ve = t,
                To = !1
            }
        }
        return null
    }
    var _n = []
      , Pn = 0
      , br = null
      , el = 0
      , tt = []
      , nt = 0
      , Zt = null
      , Et = 1
      , Ct = "";
    function $t(e, t) {
        _n[Pn++] = el,
        _n[Pn++] = br,
        br = e,
        el = t
    }
    function Ns(e, t, n) {
        tt[nt++] = Et,
        tt[nt++] = Ct,
        tt[nt++] = Zt,
        Zt = e;
        var r = Et;
        e = Ct;
        var l = 32 - it(r) - 1;
        r &= ~(1 << l),
        n += 1;
        var o = 32 - it(t) + l;
        if (30 < o) {
            var u = l - l % 5;
            o = (r & (1 << u) - 1).toString(32),
            r >>= u,
            l -= u,
            Et = 1 << 32 - it(t) + l | n << l | r,
            Ct = o + e
        } else
            Et = 1 << o | n << l | r,
            Ct = e
    }
    function xo(e) {
        e.return !== null && ($t(e, 1),
        Ns(e, 1, 0))
    }
    function Lo(e) {
        for (; e === br; )
            br = _n[--Pn],
            _n[Pn] = null,
            el = _n[--Pn],
            _n[Pn] = null;
        for (; e === Zt; )
            Zt = tt[--nt],
            tt[nt] = null,
            Ct = tt[--nt],
            tt[nt] = null,
            Et = tt[--nt],
            tt[nt] = null
    }
    var $e = null
      , be = null
      , Ee = !1
      , at = null;
    function Rs(e, t) {
        var n = ut(5, null, null, 0);
        n.elementType = "DELETED",
        n.stateNode = t,
        n.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [n],
        e.flags |= 16) : t.push(n)
    }
    function Ts(e, t) {
        switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
            t !== null ? (e.stateNode = t,
            $e = e,
            be = Dt(t.firstChild),
            !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
            t !== null ? (e.stateNode = t,
            $e = e,
            be = null,
            !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
            t !== null ? (n = Zt !== null ? {
                id: Et,
                overflow: Ct
            } : null,
            e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            },
            n = ut(18, null, null, 0),
            n.stateNode = t,
            n.return = e,
            e.child = n,
            $e = e,
            be = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function zo(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }
    function Mo(e) {
        if (Ee) {
            var t = be;
            if (t) {
                var n = t;
                if (!Ts(e, t)) {
                    if (zo(e))
                        throw Error(i(418));
                    t = Dt(n.nextSibling);
                    var r = $e;
                    t && Ts(e, t) ? Rs(r, n) : (e.flags = e.flags & -4097 | 2,
                    Ee = !1,
                    $e = e)
                }
            } else {
                if (zo(e))
                    throw Error(i(418));
                e.flags = e.flags & -4097 | 2,
                Ee = !1,
                $e = e
            }
        }
    }
    function xs(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
            e = e.return;
        $e = e
    }
    function tl(e) {
        if (e !== $e)
            return !1;
        if (!Ee)
            return xs(e),
            Ee = !0,
            !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !Co(e.type, e.memoizedProps)),
        t && (t = be)) {
            if (zo(e))
                throw Ls(),
                Error(i(418));
            for (; t; )
                Rs(e, t),
                t = Dt(t.nextSibling)
        }
        if (xs(e),
        e.tag === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(i(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                be = Dt(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            n !== "$" && n !== "$!" && n !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                be = null
            }
        } else
            be = $e ? Dt(e.stateNode.nextSibling) : null;
        return !0
    }
    function Ls() {
        for (var e = be; e; )
            e = Dt(e.nextSibling)
    }
    function Nn() {
        be = $e = null,
        Ee = !1
    }
    function Io(e) {
        at === null ? at = [e] : at.push(e)
    }
    var id = W.ReactCurrentBatchConfig;
    function sr(e, t, n) {
        if (e = n.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner,
                n) {
                    if (n.tag !== 1)
                        throw Error(i(309));
                    var r = n.stateNode
                }
                if (!r)
                    throw Error(i(147, e));
                var l = r
                  , o = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(u) {
                    var s = l.refs;
                    u === null ? delete s[o] : s[o] = u
                }
                ,
                t._stringRef = o,
                t)
            }
            if (typeof e != "string")
                throw Error(i(284));
            if (!n._owner)
                throw Error(i(290, e))
        }
        return e
    }
    function nl(e, t) {
        throw e = Object.prototype.toString.call(t),
        Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }
    function zs(e) {
        var t = e._init;
        return t(e._payload)
    }
    function Ms(e) {
        function t(v, m) {
            if (e) {
                var y = v.deletions;
                y === null ? (v.deletions = [m],
                v.flags |= 16) : y.push(m)
            }
        }
        function n(v, m) {
            if (!e)
                return null;
            for (; m !== null; )
                t(v, m),
                m = m.sibling;
            return null
        }
        function r(v, m) {
            for (v = new Map; m !== null; )
                m.key !== null ? v.set(m.key, m) : v.set(m.index, m),
                m = m.sibling;
            return v
        }
        function l(v, m) {
            return v = Kt(v, m),
            v.index = 0,
            v.sibling = null,
            v
        }
        function o(v, m, y) {
            return v.index = y,
            e ? (y = v.alternate,
            y !== null ? (y = y.index,
            y < m ? (v.flags |= 2,
            m) : y) : (v.flags |= 2,
            m)) : (v.flags |= 1048576,
            m)
        }
        function u(v) {
            return e && v.alternate === null && (v.flags |= 2),
            v
        }
        function s(v, m, y, R) {
            return m === null || m.tag !== 6 ? (m = _u(y, v.mode, R),
            m.return = v,
            m) : (m = l(m, y),
            m.return = v,
            m)
        }
        function p(v, m, y, R) {
            var q = y.type;
            return q === H ? P(v, m, y.props.children, R, y.key) : m !== null && (m.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Te && zs(q) === m.type) ? (R = l(m, y.props),
            R.ref = sr(v, m, y),
            R.return = v,
            R) : (R = Nl(y.type, y.key, y.props, null, v.mode, R),
            R.ref = sr(v, m, y),
            R.return = v,
            R)
        }
        function k(v, m, y, R) {
            return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = Pu(y, v.mode, R),
            m.return = v,
            m) : (m = l(m, y.children || []),
            m.return = v,
            m)
        }
        function P(v, m, y, R, q) {
            return m === null || m.tag !== 7 ? (m = un(y, v.mode, R, q),
            m.return = v,
            m) : (m = l(m, y),
            m.return = v,
            m)
        }
        function N(v, m, y) {
            if (typeof m == "string" && m !== "" || typeof m == "number")
                return m = _u("" + m, v.mode, y),
                m.return = v,
                m;
            if (typeof m == "object" && m !== null) {
                switch (m.$$typeof) {
                case ge:
                    return y = Nl(m.type, m.key, m.props, null, v.mode, y),
                    y.ref = sr(v, null, m),
                    y.return = v,
                    y;
                case I:
                    return m = Pu(m, v.mode, y),
                    m.return = v,
                    m;
                case Te:
                    var R = m._init;
                    return N(v, R(m._payload), y)
                }
                if (Fn(m) || ne(m))
                    return m = un(m, v.mode, y, null),
                    m.return = v,
                    m;
                nl(v, m)
            }
            return null
        }
        function _(v, m, y, R) {
            var q = m !== null ? m.key : null;
            if (typeof y == "string" && y !== "" || typeof y == "number")
                return q !== null ? null : s(v, m, "" + y, R);
            if (typeof y == "object" && y !== null) {
                switch (y.$$typeof) {
                case ge:
                    return y.key === q ? p(v, m, y, R) : null;
                case I:
                    return y.key === q ? k(v, m, y, R) : null;
                case Te:
                    return q = y._init,
                    _(v, m, q(y._payload), R)
                }
                if (Fn(y) || ne(y))
                    return q !== null ? null : P(v, m, y, R, null);
                nl(v, y)
            }
            return null
        }
        function D(v, m, y, R, q) {
            if (typeof R == "string" && R !== "" || typeof R == "number")
                return v = v.get(y) || null,
                s(m, v, "" + R, q);
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                case ge:
                    return v = v.get(R.key === null ? y : R.key) || null,
                    p(m, v, R, q);
                case I:
                    return v = v.get(R.key === null ? y : R.key) || null,
                    k(m, v, R, q);
                case Te:
                    var ee = R._init;
                    return D(v, m, y, ee(R._payload), q)
                }
                if (Fn(R) || ne(R))
                    return v = v.get(y) || null,
                    P(m, v, R, q, null);
                nl(m, R)
            }
            return null
        }
        function U(v, m, y, R) {
            for (var q = null, ee = null, te = m, le = m = 0, Be = null; te !== null && le < y.length; le++) {
                te.index > le ? (Be = te,
                te = null) : Be = te.sibling;
                var he = _(v, te, y[le], R);
                if (he === null) {
                    te === null && (te = Be);
                    break
                }
                e && te && he.alternate === null && t(v, te),
                m = o(he, m, le),
                ee === null ? q = he : ee.sibling = he,
                ee = he,
                te = Be
            }
            if (le === y.length)
                return n(v, te),
                Ee && $t(v, le),
                q;
            if (te === null) {
                for (; le < y.length; le++)
                    te = N(v, y[le], R),
                    te !== null && (m = o(te, m, le),
                    ee === null ? q = te : ee.sibling = te,
                    ee = te);
                return Ee && $t(v, le),
                q
            }
            for (te = r(v, te); le < y.length; le++)
                Be = D(te, v, le, y[le], R),
                Be !== null && (e && Be.alternate !== null && te.delete(Be.key === null ? le : Be.key),
                m = o(Be, m, le),
                ee === null ? q = Be : ee.sibling = Be,
                ee = Be);
            return e && te.forEach(function(qt) {
                return t(v, qt)
            }),
            Ee && $t(v, le),
            q
        }
        function Q(v, m, y, R) {
            var q = ne(y);
            if (typeof q != "function")
                throw Error(i(150));
            if (y = q.call(y),
            y == null)
                throw Error(i(151));
            for (var ee = q = null, te = m, le = m = 0, Be = null, he = y.next(); te !== null && !he.done; le++,
            he = y.next()) {
                te.index > le ? (Be = te,
                te = null) : Be = te.sibling;
                var qt = _(v, te, he.value, R);
                if (qt === null) {
                    te === null && (te = Be);
                    break
                }
                e && te && qt.alternate === null && t(v, te),
                m = o(qt, m, le),
                ee === null ? q = qt : ee.sibling = qt,
                ee = qt,
                te = Be
            }
            if (he.done)
                return n(v, te),
                Ee && $t(v, le),
                q;
            if (te === null) {
                for (; !he.done; le++,
                he = y.next())
                    he = N(v, he.value, R),
                    he !== null && (m = o(he, m, le),
                    ee === null ? q = he : ee.sibling = he,
                    ee = he);
                return Ee && $t(v, le),
                q
            }
            for (te = r(v, te); !he.done; le++,
            he = y.next())
                he = D(te, v, le, he.value, R),
                he !== null && (e && he.alternate !== null && te.delete(he.key === null ? le : he.key),
                m = o(he, m, le),
                ee === null ? q = he : ee.sibling = he,
                ee = he);
            return e && te.forEach(function(jd) {
                return t(v, jd)
            }),
            Ee && $t(v, le),
            q
        }
        function Re(v, m, y, R) {
            if (typeof y == "object" && y !== null && y.type === H && y.key === null && (y = y.props.children),
            typeof y == "object" && y !== null) {
                switch (y.$$typeof) {
                case ge:
                    e: {
                        for (var q = y.key, ee = m; ee !== null; ) {
                            if (ee.key === q) {
                                if (q = y.type,
                                q === H) {
                                    if (ee.tag === 7) {
                                        n(v, ee.sibling),
                                        m = l(ee, y.props.children),
                                        m.return = v,
                                        v = m;
                                        break e
                                    }
                                } else if (ee.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Te && zs(q) === ee.type) {
                                    n(v, ee.sibling),
                                    m = l(ee, y.props),
                                    m.ref = sr(v, ee, y),
                                    m.return = v,
                                    v = m;
                                    break e
                                }
                                n(v, ee);
                                break
                            } else
                                t(v, ee);
                            ee = ee.sibling
                        }
                        y.type === H ? (m = un(y.props.children, v.mode, R, y.key),
                        m.return = v,
                        v = m) : (R = Nl(y.type, y.key, y.props, null, v.mode, R),
                        R.ref = sr(v, m, y),
                        R.return = v,
                        v = R)
                    }
                    return u(v);
                case I:
                    e: {
                        for (ee = y.key; m !== null; ) {
                            if (m.key === ee)
                                if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                                    n(v, m.sibling),
                                    m = l(m, y.children || []),
                                    m.return = v,
                                    v = m;
                                    break e
                                } else {
                                    n(v, m);
                                    break
                                }
                            else
                                t(v, m);
                            m = m.sibling
                        }
                        m = Pu(y, v.mode, R),
                        m.return = v,
                        v = m
                    }
                    return u(v);
                case Te:
                    return ee = y._init,
                    Re(v, m, ee(y._payload), R)
                }
                if (Fn(y))
                    return U(v, m, y, R);
                if (ne(y))
                    return Q(v, m, y, R);
                nl(v, y)
            }
            return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
            m !== null && m.tag === 6 ? (n(v, m.sibling),
            m = l(m, y),
            m.return = v,
            v = m) : (n(v, m),
            m = _u(y, v.mode, R),
            m.return = v,
            v = m),
            u(v)) : n(v, m)
        }
        return Re
    }
    var Rn = Ms(!0)
      , Is = Ms(!1)
      , rl = Bt(null)
      , ll = null
      , Tn = null
      , Do = null;
    function Bo() {
        Do = Tn = ll = null
    }
    function Ao(e) {
        var t = rl.current;
        Se(rl),
        e._currentValue = t
    }
    function Fo(e, t, n) {
        for (; e !== null; ) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
                break;
            e = e.return
        }
    }
    function xn(e, t) {
        ll = e,
        Do = Tn = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ye = !0),
        e.firstContext = null)
    }
    function rt(e) {
        var t = e._currentValue;
        if (Do !== e)
            if (e = {
                context: e,
                memoizedValue: t,
                next: null
            },
            Tn === null) {
                if (ll === null)
                    throw Error(i(308));
                Tn = e,
                ll.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else
                Tn = Tn.next = e;
        return t
    }
    var bt = null;
    function Oo(e) {
        bt === null ? bt = [e] : bt.push(e)
    }
    function Ds(e, t, n, r) {
        var l = t.interleaved;
        return l === null ? (n.next = n,
        Oo(t)) : (n.next = l.next,
        l.next = n),
        t.interleaved = n,
        _t(e, r)
    }
    function _t(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t),
        n = e,
        e = e.return; e !== null; )
            e.childLanes |= t,
            n = e.alternate,
            n !== null && (n.childLanes |= t),
            n = e,
            e = e.return;
        return n.tag === 3 ? n.stateNode : null
    }
    var Ot = !1;
    function Uo(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function Bs(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }
    function Pt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Ut(e, t, n) {
        var r = e.updateQueue;
        if (r === null)
            return null;
        if (r = r.shared,
        (pe & 2) !== 0) {
            var l = r.pending;
            return l === null ? t.next = t : (t.next = l.next,
            l.next = t),
            r.pending = t,
            _t(e, n)
        }
        return l = r.interleaved,
        l === null ? (t.next = t,
        Oo(r)) : (t.next = l.next,
        l.next = t),
        r.interleaved = t,
        _t(e, n)
    }
    function ol(e, t, n) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            $l(e, n)
        }
    }
    function As(e, t) {
        var n = e.updateQueue
          , r = e.alternate;
        if (r !== null && (r = r.updateQueue,
        n === r)) {
            var l = null
              , o = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var u = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    o === null ? l = o = u : o = o.next = u,
                    n = n.next
                } while (n !== null);
                o === null ? l = o = t : o = o.next = t
            } else
                l = o = t;
            n = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects
            },
            e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
    }
    function ul(e, t, n, r) {
        var l = e.updateQueue;
        Ot = !1;
        var o = l.firstBaseUpdate
          , u = l.lastBaseUpdate
          , s = l.shared.pending;
        if (s !== null) {
            l.shared.pending = null;
            var p = s
              , k = p.next;
            p.next = null,
            u === null ? o = k : u.next = k,
            u = p;
            var P = e.alternate;
            P !== null && (P = P.updateQueue,
            s = P.lastBaseUpdate,
            s !== u && (s === null ? P.firstBaseUpdate = k : s.next = k,
            P.lastBaseUpdate = p))
        }
        if (o !== null) {
            var N = l.baseState;
            u = 0,
            P = k = p = null,
            s = o;
            do {
                var _ = s.lane
                  , D = s.eventTime;
                if ((r & _) === _) {
                    P !== null && (P = P.next = {
                        eventTime: D,
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    });
                    e: {
                        var U = e
                          , Q = s;
                        switch (_ = t,
                        D = n,
                        Q.tag) {
                        case 1:
                            if (U = Q.payload,
                            typeof U == "function") {
                                N = U.call(D, N, _);
                                break e
                            }
                            N = U;
                            break e;
                        case 3:
                            U.flags = U.flags & -65537 | 128;
                        case 0:
                            if (U = Q.payload,
                            _ = typeof U == "function" ? U.call(D, N, _) : U,
                            _ == null)
                                break e;
                            N = B({}, N, _);
                            break e;
                        case 2:
                            Ot = !0
                        }
                    }
                    s.callback !== null && s.lane !== 0 && (e.flags |= 64,
                    _ = l.effects,
                    _ === null ? l.effects = [s] : _.push(s))
                } else
                    D = {
                        eventTime: D,
                        lane: _,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    },
                    P === null ? (k = P = D,
                    p = N) : P = P.next = D,
                    u |= _;
                if (s = s.next,
                s === null) {
                    if (s = l.shared.pending,
                    s === null)
                        break;
                    _ = s,
                    s = _.next,
                    _.next = null,
                    l.lastBaseUpdate = _,
                    l.shared.pending = null
                }
            } while (!0);
            if (P === null && (p = N),
            l.baseState = p,
            l.firstBaseUpdate = k,
            l.lastBaseUpdate = P,
            t = l.shared.interleaved,
            t !== null) {
                l = t;
                do
                    u |= l.lane,
                    l = l.next;
                while (l !== t)
            } else
                o === null && (l.shared.lanes = 0);
            nn |= u,
            e.lanes = u,
            e.memoizedState = N
        }
    }
    function Fs(e, t, n) {
        if (e = t.effects,
        t.effects = null,
        e !== null)
            for (t = 0; t < e.length; t++) {
                var r = e[t]
                  , l = r.callback;
                if (l !== null) {
                    if (r.callback = null,
                    r = n,
                    typeof l != "function")
                        throw Error(i(191, l));
                    l.call(r)
                }
            }
    }
    var ar = {}
      , gt = Bt(ar)
      , cr = Bt(ar)
      , fr = Bt(ar);
    function en(e) {
        if (e === ar)
            throw Error(i(174));
        return e
    }
    function jo(e, t) {
        switch (ye(fr, t),
        ye(cr, e),
        ye(gt, ar),
        e = t.nodeType,
        e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : jl(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
            t = e.namespaceURI || null,
            e = e.tagName,
            t = jl(t, e)
        }
        Se(gt),
        ye(gt, t)
    }
    function Ln() {
        Se(gt),
        Se(cr),
        Se(fr)
    }
    function Os(e) {
        en(fr.current);
        var t = en(gt.current)
          , n = jl(t, e.type);
        t !== n && (ye(cr, e),
        ye(gt, n))
    }
    function Vo(e) {
        cr.current === e && (Se(gt),
        Se(cr))
    }
    var Ce = Bt(0);
    function il(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var Ho = [];
    function Qo() {
        for (var e = 0; e < Ho.length; e++)
            Ho[e]._workInProgressVersionPrimary = null;
        Ho.length = 0
    }
    var sl = W.ReactCurrentDispatcher
      , Wo = W.ReactCurrentBatchConfig
      , tn = 0
      , _e = null
      , ze = null
      , Ie = null
      , al = !1
      , dr = !1
      , pr = 0
      , sd = 0;
    function je() {
        throw Error(i(321))
    }
    function Ko(e, t) {
        if (t === null)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!st(e[n], t[n]))
                return !1;
        return !0
    }
    function qo(e, t, n, r, l, o) {
        if (tn = o,
        _e = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        sl.current = e === null || e.memoizedState === null ? dd : pd,
        e = n(r, l),
        dr) {
            o = 0;
            do {
                if (dr = !1,
                pr = 0,
                25 <= o)
                    throw Error(i(301));
                o += 1,
                Ie = ze = null,
                t.updateQueue = null,
                sl.current = hd,
                e = n(r, l)
            } while (dr)
        }
        if (sl.current = dl,
        t = ze !== null && ze.next !== null,
        tn = 0,
        Ie = ze = _e = null,
        al = !1,
        t)
            throw Error(i(300));
        return e
    }
    function Yo() {
        var e = pr !== 0;
        return pr = 0,
        e
    }
    function vt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ie === null ? _e.memoizedState = Ie = e : Ie = Ie.next = e,
        Ie
    }
    function lt() {
        if (ze === null) {
            var e = _e.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = ze.next;
        var t = Ie === null ? _e.memoizedState : Ie.next;
        if (t !== null)
            Ie = t,
            ze = e;
        else {
            if (e === null)
                throw Error(i(310));
            ze = e,
            e = {
                memoizedState: ze.memoizedState,
                baseState: ze.baseState,
                baseQueue: ze.baseQueue,
                queue: ze.queue,
                next: null
            },
            Ie === null ? _e.memoizedState = Ie = e : Ie = Ie.next = e
        }
        return Ie
    }
    function hr(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function Go(e) {
        var t = lt()
          , n = t.queue;
        if (n === null)
            throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = ze
          , l = r.baseQueue
          , o = n.pending;
        if (o !== null) {
            if (l !== null) {
                var u = l.next;
                l.next = o.next,
                o.next = u
            }
            r.baseQueue = l = o,
            n.pending = null
        }
        if (l !== null) {
            o = l.next,
            r = r.baseState;
            var s = u = null
              , p = null
              , k = o;
            do {
                var P = k.lane;
                if ((tn & P) === P)
                    p !== null && (p = p.next = {
                        lane: 0,
                        action: k.action,
                        hasEagerState: k.hasEagerState,
                        eagerState: k.eagerState,
                        next: null
                    }),
                    r = k.hasEagerState ? k.eagerState : e(r, k.action);
                else {
                    var N = {
                        lane: P,
                        action: k.action,
                        hasEagerState: k.hasEagerState,
                        eagerState: k.eagerState,
                        next: null
                    };
                    p === null ? (s = p = N,
                    u = r) : p = p.next = N,
                    _e.lanes |= P,
                    nn |= P
                }
                k = k.next
            } while (k !== null && k !== o);
            p === null ? u = r : p.next = s,
            st(r, t.memoizedState) || (Ye = !0),
            t.memoizedState = r,
            t.baseState = u,
            t.baseQueue = p,
            n.lastRenderedState = r
        }
        if (e = n.interleaved,
        e !== null) {
            l = e;
            do
                o = l.lane,
                _e.lanes |= o,
                nn |= o,
                l = l.next;
            while (l !== e)
        } else
            l === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
    }
    function Jo(e) {
        var t = lt()
          , n = t.queue;
        if (n === null)
            throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch
          , l = n.pending
          , o = t.memoizedState;
        if (l !== null) {
            n.pending = null;
            var u = l = l.next;
            do
                o = e(o, u.action),
                u = u.next;
            while (u !== l);
            st(o, t.memoizedState) || (Ye = !0),
            t.memoizedState = o,
            t.baseQueue === null && (t.baseState = o),
            n.lastRenderedState = o
        }
        return [o, r]
    }
    function Us() {}
    function js(e, t) {
        var n = _e
          , r = lt()
          , l = t()
          , o = !st(r.memoizedState, l);
        if (o && (r.memoizedState = l,
        Ye = !0),
        r = r.queue,
        Xo(Qs.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || Ie !== null && Ie.memoizedState.tag & 1) {
            if (n.flags |= 2048,
            mr(9, Hs.bind(null, n, r, l, t), void 0, null),
            De === null)
                throw Error(i(349));
            (tn & 30) !== 0 || Vs(n, t, l)
        }
        return l
    }
    function Vs(e, t, n) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = _e.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        _e.updateQueue = t,
        t.stores = [e]) : (n = t.stores,
        n === null ? t.stores = [e] : n.push(e))
    }
    function Hs(e, t, n, r) {
        t.value = n,
        t.getSnapshot = r,
        Ws(t) && Ks(e)
    }
    function Qs(e, t, n) {
        return n(function() {
            Ws(t) && Ks(e)
        })
    }
    function Ws(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !st(e, n)
        } catch {
            return !0
        }
    }
    function Ks(e) {
        var t = _t(e, 1);
        t !== null && pt(t, e, 1, -1)
    }
    function qs(e) {
        var t = vt();
        return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: hr,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = fd.bind(null, _e, e),
        [t.memoizedState, e]
    }
    function mr(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        },
        t = _e.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        _e.updateQueue = t,
        t.lastEffect = e.next = e) : (n = t.lastEffect,
        n === null ? t.lastEffect = e.next = e : (r = n.next,
        n.next = e,
        e.next = r,
        t.lastEffect = e)),
        e
    }
    function Ys() {
        return lt().memoizedState
    }
    function cl(e, t, n, r) {
        var l = vt();
        _e.flags |= e,
        l.memoizedState = mr(1 | t, n, void 0, r === void 0 ? null : r)
    }
    function fl(e, t, n, r) {
        var l = lt();
        r = r === void 0 ? null : r;
        var o = void 0;
        if (ze !== null) {
            var u = ze.memoizedState;
            if (o = u.destroy,
            r !== null && Ko(r, u.deps)) {
                l.memoizedState = mr(t, n, o, r);
                return
            }
        }
        _e.flags |= e,
        l.memoizedState = mr(1 | t, n, o, r)
    }
    function Gs(e, t) {
        return cl(8390656, 8, e, t)
    }
    function Xo(e, t) {
        return fl(2048, 8, e, t)
    }
    function Js(e, t) {
        return fl(4, 2, e, t)
    }
    function Xs(e, t) {
        return fl(4, 4, e, t)
    }
    function Zs(e, t) {
        if (typeof t == "function")
            return e = e(),
            t(e),
            function() {
                t(null)
            }
            ;
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function $s(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        fl(4, 4, Zs.bind(null, t, e), n)
    }
    function Zo() {}
    function bs(e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Ko(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
    }
    function ea(e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Ko(t, r[1]) ? r[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
    }
    function ta(e, t, n) {
        return (tn & 21) === 0 ? (e.baseState && (e.baseState = !1,
        Ye = !0),
        e.memoizedState = n) : (st(n, t) || (n = zi(),
        _e.lanes |= n,
        nn |= n,
        e.baseState = !0),
        t)
    }
    function ad(e, t) {
        var n = ve;
        ve = n !== 0 && 4 > n ? n : 4,
        e(!0);
        var r = Wo.transition;
        Wo.transition = {};
        try {
            e(!1),
            t()
        } finally {
            ve = n,
            Wo.transition = r
        }
    }
    function na() {
        return lt().memoizedState
    }
    function cd(e, t, n) {
        var r = Qt(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ra(e))
            la(t, n);
        else if (n = Ds(e, t, n, r),
        n !== null) {
            var l = We();
            pt(n, e, r, l),
            oa(n, t, r)
        }
    }
    function fd(e, t, n) {
        var r = Qt(e)
          , l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (ra(e))
            la(t, l);
        else {
            var o = e.alternate;
            if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
            o !== null))
                try {
                    var u = t.lastRenderedState
                      , s = o(u, n);
                    if (l.hasEagerState = !0,
                    l.eagerState = s,
                    st(s, u)) {
                        var p = t.interleaved;
                        p === null ? (l.next = l,
                        Oo(t)) : (l.next = p.next,
                        p.next = l),
                        t.interleaved = l;
                        return
                    }
                } catch {}
            n = Ds(e, t, l, r),
            n !== null && (l = We(),
            pt(n, e, r, l),
            oa(n, t, r))
        }
    }
    function ra(e) {
        var t = e.alternate;
        return e === _e || t !== null && t === _e
    }
    function la(e, t) {
        dr = al = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
    }
    function oa(e, t, n) {
        if ((n & 4194240) !== 0) {
            var r = t.lanes;
            r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            $l(e, n)
        }
    }
    var dl = {
        readContext: rt,
        useCallback: je,
        useContext: je,
        useEffect: je,
        useImperativeHandle: je,
        useInsertionEffect: je,
        useLayoutEffect: je,
        useMemo: je,
        useReducer: je,
        useRef: je,
        useState: je,
        useDebugValue: je,
        useDeferredValue: je,
        useTransition: je,
        useMutableSource: je,
        useSyncExternalStore: je,
        useId: je,
        unstable_isNewReconciler: !1
    }
      , dd = {
        readContext: rt,
        useCallback: function(e, t) {
            return vt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: rt,
        useEffect: Gs,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null,
            cl(4194308, 4, Zs.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return cl(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return cl(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = vt();
            return t = t === void 0 ? null : t,
            e = e(),
            n.memoizedState = [e, t],
            e
        },
        useReducer: function(e, t, n) {
            var r = vt();
            return t = n !== void 0 ? n(t) : t,
            r.memoizedState = r.baseState = t,
            e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            },
            r.queue = e,
            e = e.dispatch = cd.bind(null, _e, e),
            [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = vt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: qs,
        useDebugValue: Zo,
        useDeferredValue: function(e) {
            return vt().memoizedState = e
        },
        useTransition: function() {
            var e = qs(!1)
              , t = e[0];
            return e = ad.bind(null, e[1]),
            vt().memoizedState = e,
            [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = _e
              , l = vt();
            if (Ee) {
                if (n === void 0)
                    throw Error(i(407));
                n = n()
            } else {
                if (n = t(),
                De === null)
                    throw Error(i(349));
                (tn & 30) !== 0 || Vs(r, t, n)
            }
            l.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return l.queue = o,
            Gs(Qs.bind(null, r, o, e), [e]),
            r.flags |= 2048,
            mr(9, Hs.bind(null, r, o, n, t), void 0, null),
            n
        },
        useId: function() {
            var e = vt()
              , t = De.identifierPrefix;
            if (Ee) {
                var n = Ct
                  , r = Et;
                n = (r & ~(1 << 32 - it(r) - 1)).toString(32) + n,
                t = ":" + t + "R" + n,
                n = pr++,
                0 < n && (t += "H" + n.toString(32)),
                t += ":"
            } else
                n = sd++,
                t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
      , pd = {
        readContext: rt,
        useCallback: bs,
        useContext: rt,
        useEffect: Xo,
        useImperativeHandle: $s,
        useInsertionEffect: Js,
        useLayoutEffect: Xs,
        useMemo: ea,
        useReducer: Go,
        useRef: Ys,
        useState: function() {
            return Go(hr)
        },
        useDebugValue: Zo,
        useDeferredValue: function(e) {
            var t = lt();
            return ta(t, ze.memoizedState, e)
        },
        useTransition: function() {
            var e = Go(hr)[0]
              , t = lt().memoizedState;
            return [e, t]
        },
        useMutableSource: Us,
        useSyncExternalStore: js,
        useId: na,
        unstable_isNewReconciler: !1
    }
      , hd = {
        readContext: rt,
        useCallback: bs,
        useContext: rt,
        useEffect: Xo,
        useImperativeHandle: $s,
        useInsertionEffect: Js,
        useLayoutEffect: Xs,
        useMemo: ea,
        useReducer: Jo,
        useRef: Ys,
        useState: function() {
            return Jo(hr)
        },
        useDebugValue: Zo,
        useDeferredValue: function(e) {
            var t = lt();
            return ze === null ? t.memoizedState = e : ta(t, ze.memoizedState, e)
        },
        useTransition: function() {
            var e = Jo(hr)[0]
              , t = lt().memoizedState;
            return [e, t]
        },
        useMutableSource: Us,
        useSyncExternalStore: js,
        useId: na,
        unstable_isNewReconciler: !1
    };
    function ct(e, t) {
        if (e && e.defaultProps) {
            t = B({}, t),
            e = e.defaultProps;
            for (var n in e)
                t[n] === void 0 && (t[n] = e[n]);
            return t
        }
        return t
    }
    function $o(e, t, n, r) {
        t = e.memoizedState,
        n = n(r, t),
        n = n == null ? t : B({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var pl = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Gt(e) === e : !1
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = We()
              , l = Qt(e)
              , o = Pt(r, l);
            o.payload = t,
            n != null && (o.callback = n),
            t = Ut(e, o, l),
            t !== null && (pt(t, e, l, r),
            ol(t, e, l))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = We()
              , l = Qt(e)
              , o = Pt(r, l);
            o.tag = 1,
            o.payload = t,
            n != null && (o.callback = n),
            t = Ut(e, o, l),
            t !== null && (pt(t, e, l, r),
            ol(t, e, l))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = We()
              , r = Qt(e)
              , l = Pt(n, r);
            l.tag = 2,
            t != null && (l.callback = t),
            t = Ut(e, l, r),
            t !== null && (pt(t, e, r, n),
            ol(t, e, r))
        }
    };
    function ua(e, t, n, r, l, o, u) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, u) : t.prototype && t.prototype.isPureReactComponent ? !tr(n, r) || !tr(l, o) : !0
    }
    function ia(e, t, n) {
        var r = !1
          , l = At
          , o = t.contextType;
        return typeof o == "object" && o !== null ? o = rt(o) : (l = qe(t) ? Xt : Ue.current,
        r = t.contextTypes,
        o = (r = r != null) ? Cn(e, l) : At),
        t = new t(n,o),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = pl,
        e.stateNode = t,
        t._reactInternals = e,
        r && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = l,
        e.__reactInternalMemoizedMaskedChildContext = o),
        t
    }
    function sa(e, t, n, r) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && pl.enqueueReplaceState(t, t.state, null)
    }
    function bo(e, t, n, r) {
        var l = e.stateNode;
        l.props = n,
        l.state = e.memoizedState,
        l.refs = {},
        Uo(e);
        var o = t.contextType;
        typeof o == "object" && o !== null ? l.context = rt(o) : (o = qe(t) ? Xt : Ue.current,
        l.context = Cn(e, o)),
        l.state = e.memoizedState,
        o = t.getDerivedStateFromProps,
        typeof o == "function" && ($o(e, t, o, n),
        l.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
        t !== l.state && pl.enqueueReplaceState(l, l.state, null),
        ul(e, n, l, r),
        l.state = e.memoizedState),
        typeof l.componentDidMount == "function" && (e.flags |= 4194308)
    }
    function zn(e, t) {
        try {
            var n = ""
              , r = t;
            do
                n += ce(r),
                r = r.return;
            while (r);
            var l = n
        } catch (o) {
            l = `
Error generating stack: ` + o.message + `
` + o.stack
        }
        return {
            value: e,
            source: t,
            stack: l,
            digest: null
        }
    }
    function eu(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        }
    }
    function tu(e, t) {
        try {
            console.error(t.value)
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    var md = typeof WeakMap == "function" ? WeakMap : Map;
    function aa(e, t, n) {
        n = Pt(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Sl || (Sl = !0,
            gu = r),
            tu(e, t)
        }
        ,
        n
    }
    function ca(e, t, n) {
        n = Pt(-1, n),
        n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var l = t.value;
            n.payload = function() {
                return r(l)
            }
            ,
            n.callback = function() {
                tu(e, t)
            }
        }
        var o = e.stateNode;
        return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
            tu(e, t),
            typeof r != "function" && (Vt === null ? Vt = new Set([this]) : Vt.add(this));
            var u = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: u !== null ? u : ""
            })
        }
        ),
        n
    }
    function fa(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new md;
            var l = new Set;
            r.set(t, l)
        } else
            l = r.get(t),
            l === void 0 && (l = new Set,
            r.set(t, l));
        l.has(n) || (l.add(n),
        e = xd.bind(null, e, t, n),
        t.then(e, e))
    }
    function da(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
                return e;
            e = e.return
        } while (e !== null);
        return null
    }
    function pa(e, t, n, r, l) {
        return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128,
        n.flags |= 131072,
        n.flags &= -52805,
        n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pt(-1, 1),
        t.tag = 2,
        Ut(n, t, 1))),
        n.lanes |= 1),
        e) : (e.flags |= 65536,
        e.lanes = l,
        e)
    }
    var gd = W.ReactCurrentOwner
      , Ye = !1;
    function Qe(e, t, n, r) {
        t.child = e === null ? Is(t, null, n, r) : Rn(t, e.child, n, r)
    }
    function ha(e, t, n, r, l) {
        n = n.render;
        var o = t.ref;
        return xn(t, l),
        r = qo(e, t, n, r, o, l),
        n = Yo(),
        e !== null && !Ye ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~l,
        Nt(e, t, l)) : (Ee && n && xo(t),
        t.flags |= 1,
        Qe(e, t, r, l),
        t.child)
    }
    function ma(e, t, n, r, l) {
        if (e === null) {
            var o = n.type;
            return typeof o == "function" && !Cu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
            t.type = o,
            ga(e, t, o, r, l)) : (e = Nl(n.type, null, r, t, t.mode, l),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (o = e.child,
        (e.lanes & l) === 0) {
            var u = o.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : tr,
            n(u, r) && e.ref === t.ref)
                return Nt(e, t, l)
        }
        return t.flags |= 1,
        e = Kt(o, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function ga(e, t, n, r, l) {
        if (e !== null) {
            var o = e.memoizedProps;
            if (tr(o, r) && e.ref === t.ref)
                if (Ye = !1,
                t.pendingProps = r = o,
                (e.lanes & l) !== 0)
                    (e.flags & 131072) !== 0 && (Ye = !0);
                else
                    return t.lanes = e.lanes,
                    Nt(e, t, l)
        }
        return nu(e, t, n, r, l)
    }
    function va(e, t, n) {
        var r = t.pendingProps
          , l = r.children
          , o = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden")
            if ((t.mode & 1) === 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                ye(In, et),
                et |= n;
            else {
                if ((n & 1073741824) === 0)
                    return e = o !== null ? o.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    ye(In, et),
                    et |= e,
                    null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                r = o !== null ? o.baseLanes : n,
                ye(In, et),
                et |= r
            }
        else
            o !== null ? (r = o.baseLanes | n,
            t.memoizedState = null) : r = n,
            ye(In, et),
            et |= r;
        return Qe(e, t, l, n),
        t.child
    }
    function ya(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
        t.flags |= 2097152)
    }
    function nu(e, t, n, r, l) {
        var o = qe(n) ? Xt : Ue.current;
        return o = Cn(t, o),
        xn(t, l),
        n = qo(e, t, n, r, o, l),
        r = Yo(),
        e !== null && !Ye ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~l,
        Nt(e, t, l)) : (Ee && r && xo(t),
        t.flags |= 1,
        Qe(e, t, n, l),
        t.child)
    }
    function wa(e, t, n, r, l) {
        if (qe(n)) {
            var o = !0;
            Zr(t)
        } else
            o = !1;
        if (xn(t, l),
        t.stateNode === null)
            ml(e, t),
            ia(t, n, r),
            bo(t, n, r, l),
            r = !0;
        else if (e === null) {
            var u = t.stateNode
              , s = t.memoizedProps;
            u.props = s;
            var p = u.context
              , k = n.contextType;
            typeof k == "object" && k !== null ? k = rt(k) : (k = qe(n) ? Xt : Ue.current,
            k = Cn(t, k));
            var P = n.getDerivedStateFromProps
              , N = typeof P == "function" || typeof u.getSnapshotBeforeUpdate == "function";
            N || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s !== r || p !== k) && sa(t, u, r, k),
            Ot = !1;
            var _ = t.memoizedState;
            u.state = _,
            ul(t, r, u, l),
            p = t.memoizedState,
            s !== r || _ !== p || Ke.current || Ot ? (typeof P == "function" && ($o(t, n, P, r),
            p = t.memoizedState),
            (s = Ot || ua(t, n, s, r, _, p, k)) ? (N || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = r,
            t.memoizedState = p),
            u.props = r,
            u.state = p,
            u.context = k,
            r = s) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            r = !1)
        } else {
            u = t.stateNode,
            Bs(e, t),
            s = t.memoizedProps,
            k = t.type === t.elementType ? s : ct(t.type, s),
            u.props = k,
            N = t.pendingProps,
            _ = u.context,
            p = n.contextType,
            typeof p == "object" && p !== null ? p = rt(p) : (p = qe(n) ? Xt : Ue.current,
            p = Cn(t, p));
            var D = n.getDerivedStateFromProps;
            (P = typeof D == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s !== N || _ !== p) && sa(t, u, r, p),
            Ot = !1,
            _ = t.memoizedState,
            u.state = _,
            ul(t, r, u, l);
            var U = t.memoizedState;
            s !== N || _ !== U || Ke.current || Ot ? (typeof D == "function" && ($o(t, n, D, r),
            U = t.memoizedState),
            (k = Ot || ua(t, n, k, r, _, U, p) || !1) ? (P || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, U, p),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, U, p)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = r,
            t.memoizedState = U),
            u.props = r,
            u.state = U,
            u.context = p,
            r = k) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024),
            r = !1)
        }
        return ru(e, t, n, r, o, l)
    }
    function ru(e, t, n, r, l, o) {
        ya(e, t);
        var u = (t.flags & 128) !== 0;
        if (!r && !u)
            return l && _s(t, n, !1),
            Nt(e, t, o);
        r = t.stateNode,
        gd.current = t;
        var s = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1,
        e !== null && u ? (t.child = Rn(t, e.child, null, o),
        t.child = Rn(t, null, s, o)) : Qe(e, t, s, o),
        t.memoizedState = r.state,
        l && _s(t, n, !0),
        t.child
    }
    function Sa(e) {
        var t = e.stateNode;
        t.pendingContext ? Es(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Es(e, t.context, !1),
        jo(e, t.containerInfo)
    }
    function ka(e, t, n, r, l) {
        return Nn(),
        Io(l),
        t.flags |= 256,
        Qe(e, t, n, r),
        t.child
    }
    var lu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function ou(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }
    function Ea(e, t, n) {
        var r = t.pendingProps, l = Ce.current, o = !1, u = (t.flags & 128) !== 0, s;
        if ((s = u) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
        s ? (o = !0,
        t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
        ye(Ce, l & 1),
        e === null)
            return Mo(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824,
            null) : (u = r.children,
            e = r.fallback,
            o ? (r = t.mode,
            o = t.child,
            u = {
                mode: "hidden",
                children: u
            },
            (r & 1) === 0 && o !== null ? (o.childLanes = 0,
            o.pendingProps = u) : o = Rl(u, r, 0, null),
            e = un(e, r, n, null),
            o.return = t,
            e.return = t,
            o.sibling = e,
            t.child = o,
            t.child.memoizedState = ou(n),
            t.memoizedState = lu,
            e) : uu(t, u));
        if (l = e.memoizedState,
        l !== null && (s = l.dehydrated,
        s !== null))
            return vd(e, t, u, r, s, l, n);
        if (o) {
            o = r.fallback,
            u = t.mode,
            l = e.child,
            s = l.sibling;
            var p = {
                mode: "hidden",
                children: r.children
            };
            return (u & 1) === 0 && t.child !== l ? (r = t.child,
            r.childLanes = 0,
            r.pendingProps = p,
            t.deletions = null) : (r = Kt(l, p),
            r.subtreeFlags = l.subtreeFlags & 14680064),
            s !== null ? o = Kt(s, o) : (o = un(o, u, n, null),
            o.flags |= 2),
            o.return = t,
            r.return = t,
            r.sibling = o,
            t.child = r,
            r = o,
            o = t.child,
            u = e.child.memoizedState,
            u = u === null ? ou(n) : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions
            },
            o.memoizedState = u,
            o.childLanes = e.childLanes & ~n,
            t.memoizedState = lu,
            r
        }
        return o = e.child,
        e = o.sibling,
        r = Kt(o, {
            mode: "visible",
            children: r.children
        }),
        (t.mode & 1) === 0 && (r.lanes = n),
        r.return = t,
        r.sibling = null,
        e !== null && (n = t.deletions,
        n === null ? (t.deletions = [e],
        t.flags |= 16) : n.push(e)),
        t.child = r,
        t.memoizedState = null,
        r
    }
    function uu(e, t) {
        return t = Rl({
            mode: "visible",
            children: t
        }, e.mode, 0, null),
        t.return = e,
        e.child = t
    }
    function hl(e, t, n, r) {
        return r !== null && Io(r),
        Rn(t, e.child, null, n),
        e = uu(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function vd(e, t, n, r, l, o, u) {
        if (n)
            return t.flags & 256 ? (t.flags &= -257,
            r = eu(Error(i(422))),
            hl(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child,
            t.flags |= 128,
            null) : (o = r.fallback,
            l = t.mode,
            r = Rl({
                mode: "visible",
                children: r.children
            }, l, 0, null),
            o = un(o, l, u, null),
            o.flags |= 2,
            r.return = t,
            o.return = t,
            r.sibling = o,
            t.child = r,
            (t.mode & 1) !== 0 && Rn(t, e.child, null, u),
            t.child.memoizedState = ou(u),
            t.memoizedState = lu,
            o);
        if ((t.mode & 1) === 0)
            return hl(e, t, u, null);
        if (l.data === "$!") {
            if (r = l.nextSibling && l.nextSibling.dataset,
            r)
                var s = r.dgst;
            return r = s,
            o = Error(i(419)),
            r = eu(o, r, void 0),
            hl(e, t, u, r)
        }
        if (s = (u & e.childLanes) !== 0,
        Ye || s) {
            if (r = De,
            r !== null) {
                switch (u & -u) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
                }
                l = (l & (r.suspendedLanes | u)) !== 0 ? 0 : l,
                l !== 0 && l !== o.retryLane && (o.retryLane = l,
                _t(e, l),
                pt(r, e, l, -1))
            }
            return Eu(),
            r = eu(Error(i(421))),
            hl(e, t, u, r)
        }
        return l.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = Ld.bind(null, e),
        l._reactRetry = t,
        null) : (e = o.treeContext,
        be = Dt(l.nextSibling),
        $e = t,
        Ee = !0,
        at = null,
        e !== null && (tt[nt++] = Et,
        tt[nt++] = Ct,
        tt[nt++] = Zt,
        Et = e.id,
        Ct = e.overflow,
        Zt = t),
        t = uu(t, r.children),
        t.flags |= 4096,
        t)
    }
    function Ca(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t),
        Fo(e.return, t, n)
    }
    function iu(e, t, n, r, l) {
        var o = e.memoizedState;
        o === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: l
        } : (o.isBackwards = t,
        o.rendering = null,
        o.renderingStartTime = 0,
        o.last = r,
        o.tail = n,
        o.tailMode = l)
    }
    function _a(e, t, n) {
        var r = t.pendingProps
          , l = r.revealOrder
          , o = r.tail;
        if (Qe(e, t, r.children, n),
        r = Ce.current,
        (r & 2) !== 0)
            r = r & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && Ca(e, n, t);
                    else if (e.tag === 19)
                        Ca(e, n, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            r &= 1
        }
        if (ye(Ce, r),
        (t.mode & 1) === 0)
            t.memoizedState = null;
        else
            switch (l) {
            case "forwards":
                for (n = t.child,
                l = null; n !== null; )
                    e = n.alternate,
                    e !== null && il(e) === null && (l = n),
                    n = n.sibling;
                n = l,
                n === null ? (l = t.child,
                t.child = null) : (l = n.sibling,
                n.sibling = null),
                iu(t, !1, l, n, o);
                break;
            case "backwards":
                for (n = null,
                l = t.child,
                t.child = null; l !== null; ) {
                    if (e = l.alternate,
                    e !== null && il(e) === null) {
                        t.child = l;
                        break
                    }
                    e = l.sibling,
                    l.sibling = n,
                    n = l,
                    l = e
                }
                iu(t, !0, n, null, o);
                break;
            case "together":
                iu(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
            }
        return t.child
    }
    function ml(e, t) {
        (t.mode & 1) === 0 && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
    }
    function Nt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies),
        nn |= t.lanes,
        (n & t.childLanes) === 0)
            return null;
        if (e !== null && t.child !== e.child)
            throw Error(i(153));
        if (t.child !== null) {
            for (e = t.child,
            n = Kt(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null; )
                e = e.sibling,
                n = n.sibling = Kt(e, e.pendingProps),
                n.return = t;
            n.sibling = null
        }
        return t.child
    }
    function yd(e, t, n) {
        switch (t.tag) {
        case 3:
            Sa(t),
            Nn();
            break;
        case 5:
            Os(t);
            break;
        case 1:
            qe(t.type) && Zr(t);
            break;
        case 4:
            jo(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context
              , l = t.memoizedProps.value;
            ye(rl, r._currentValue),
            r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState,
            r !== null)
                return r.dehydrated !== null ? (ye(Ce, Ce.current & 1),
                t.flags |= 128,
                null) : (n & t.child.childLanes) !== 0 ? Ea(e, t, n) : (ye(Ce, Ce.current & 1),
                e = Nt(e, t, n),
                e !== null ? e.sibling : null);
            ye(Ce, Ce.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0,
            (e.flags & 128) !== 0) {
                if (r)
                    return _a(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState,
            l !== null && (l.rendering = null,
            l.tail = null,
            l.lastEffect = null),
            ye(Ce, Ce.current),
            r)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            va(e, t, n)
        }
        return Nt(e, t, n)
    }
    var Pa, su, Na, Ra;
    Pa = function(e, t) {
        for (var n = t.child; n !== null; ) {
            if (n.tag === 5 || n.tag === 6)
                e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n,
                n = n.child;
                continue
            }
            if (n === t)
                break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === t)
                    return;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
    }
    ,
    su = function() {}
    ,
    Na = function(e, t, n, r) {
        var l = e.memoizedProps;
        if (l !== r) {
            e = t.stateNode,
            en(gt.current);
            var o = null;
            switch (n) {
            case "input":
                l = Al(e, l),
                r = Al(e, r),
                o = [];
                break;
            case "select":
                l = B({}, l, {
                    value: void 0
                }),
                r = B({}, r, {
                    value: void 0
                }),
                o = [];
                break;
            case "textarea":
                l = Ul(e, l),
                r = Ul(e, r),
                o = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Gr)
            }
            Vl(n, r);
            var u;
            n = null;
            for (k in l)
                if (!r.hasOwnProperty(k) && l.hasOwnProperty(k) && l[k] != null)
                    if (k === "style") {
                        var s = l[k];
                        for (u in s)
                            s.hasOwnProperty(u) && (n || (n = {}),
                            n[u] = "")
                    } else
                        k !== "dangerouslySetInnerHTML" && k !== "children" && k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && k !== "autoFocus" && (a.hasOwnProperty(k) ? o || (o = []) : (o = o || []).push(k, null));
            for (k in r) {
                var p = r[k];
                if (s = l?.[k],
                r.hasOwnProperty(k) && p !== s && (p != null || s != null))
                    if (k === "style")
                        if (s) {
                            for (u in s)
                                !s.hasOwnProperty(u) || p && p.hasOwnProperty(u) || (n || (n = {}),
                                n[u] = "");
                            for (u in p)
                                p.hasOwnProperty(u) && s[u] !== p[u] && (n || (n = {}),
                                n[u] = p[u])
                        } else
                            n || (o || (o = []),
                            o.push(k, n)),
                            n = p;
                    else
                        k === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0,
                        s = s ? s.__html : void 0,
                        p != null && s !== p && (o = o || []).push(k, p)) : k === "children" ? typeof p != "string" && typeof p != "number" || (o = o || []).push(k, "" + p) : k !== "suppressContentEditableWarning" && k !== "suppressHydrationWarning" && (a.hasOwnProperty(k) ? (p != null && k === "onScroll" && we("scroll", e),
                        o || s === p || (o = [])) : (o = o || []).push(k, p))
            }
            n && (o = o || []).push("style", n);
            var k = o;
            (t.updateQueue = k) && (t.flags |= 4)
        }
    }
    ,
    Ra = function(e, t, n, r) {
        n !== r && (t.flags |= 4)
    }
    ;
    function gr(e, t) {
        if (!Ee)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t),
                    t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n),
                    n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
            }
    }
    function Ve(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , n = 0
          , r = 0;
        if (t)
            for (var l = e.child; l !== null; )
                n |= l.lanes | l.childLanes,
                r |= l.subtreeFlags & 14680064,
                r |= l.flags & 14680064,
                l.return = e,
                l = l.sibling;
        else
            for (l = e.child; l !== null; )
                n |= l.lanes | l.childLanes,
                r |= l.subtreeFlags,
                r |= l.flags,
                l.return = e,
                l = l.sibling;
        return e.subtreeFlags |= r,
        e.childLanes = n,
        t
    }
    function wd(e, t, n) {
        var r = t.pendingProps;
        switch (Lo(t),
        t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ve(t),
            null;
        case 1:
            return qe(t.type) && Xr(),
            Ve(t),
            null;
        case 3:
            return r = t.stateNode,
            Ln(),
            Se(Ke),
            Se(Ue),
            Qo(),
            r.pendingContext && (r.context = r.pendingContext,
            r.pendingContext = null),
            (e === null || e.child === null) && (tl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            at !== null && (wu(at),
            at = null))),
            su(e, t),
            Ve(t),
            null;
        case 5:
            Vo(t);
            var l = en(fr.current);
            if (n = t.type,
            e !== null && t.stateNode != null)
                Na(e, t, n, r, l),
                e.ref !== t.ref && (t.flags |= 512,
                t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(i(166));
                    return Ve(t),
                    null
                }
                if (e = en(gt.current),
                tl(t)) {
                    r = t.stateNode,
                    n = t.type;
                    var o = t.memoizedProps;
                    switch (r[mt] = t,
                    r[ur] = o,
                    e = (t.mode & 1) !== 0,
                    n) {
                    case "dialog":
                        we("cancel", r),
                        we("close", r);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        we("load", r);
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < rr.length; l++)
                            we(rr[l], r);
                        break;
                    case "source":
                        we("error", r);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        we("error", r),
                        we("load", r);
                        break;
                    case "details":
                        we("toggle", r);
                        break;
                    case "input":
                        ii(r, o),
                        we("invalid", r);
                        break;
                    case "select":
                        r._wrapperState = {
                            wasMultiple: !!o.multiple
                        },
                        we("invalid", r);
                        break;
                    case "textarea":
                        ci(r, o),
                        we("invalid", r)
                    }
                    Vl(n, o),
                    l = null;
                    for (var u in o)
                        if (o.hasOwnProperty(u)) {
                            var s = o[u];
                            u === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && Yr(r.textContent, s, e),
                            l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && Yr(r.textContent, s, e),
                            l = ["children", "" + s]) : a.hasOwnProperty(u) && s != null && u === "onScroll" && we("scroll", r)
                        }
                    switch (n) {
                    case "input":
                        _r(r),
                        ai(r, o, !0);
                        break;
                    case "textarea":
                        _r(r),
                        di(r);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof o.onClick == "function" && (r.onclick = Gr)
                    }
                    r = l,
                    t.updateQueue = r,
                    r !== null && (t.flags |= 4)
                } else {
                    u = l.nodeType === 9 ? l : l.ownerDocument,
                    e === "http://www.w3.org/1999/xhtml" && (e = pi(n)),
                    e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"),
                    e.innerHTML = "<script><\/script>",
                    e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, {
                        is: r.is
                    }) : (e = u.createElement(n),
                    n === "select" && (u = e,
                    r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n),
                    e[mt] = t,
                    e[ur] = r,
                    Pa(e, t, !1, !1),
                    t.stateNode = e;
                    e: {
                        switch (u = Hl(n, r),
                        n) {
                        case "dialog":
                            we("cancel", e),
                            we("close", e),
                            l = r;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            we("load", e),
                            l = r;
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < rr.length; l++)
                                we(rr[l], e);
                            l = r;
                            break;
                        case "source":
                            we("error", e),
                            l = r;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            we("error", e),
                            we("load", e),
                            l = r;
                            break;
                        case "details":
                            we("toggle", e),
                            l = r;
                            break;
                        case "input":
                            ii(e, r),
                            l = Al(e, r),
                            we("invalid", e);
                            break;
                        case "option":
                            l = r;
                            break;
                        case "select":
                            e._wrapperState = {
                                wasMultiple: !!r.multiple
                            },
                            l = B({}, r, {
                                value: void 0
                            }),
                            we("invalid", e);
                            break;
                        case "textarea":
                            ci(e, r),
                            l = Ul(e, r),
                            we("invalid", e);
                            break;
                        default:
                            l = r
                        }
                        Vl(n, l),
                        s = l;
                        for (o in s)
                            if (s.hasOwnProperty(o)) {
                                var p = s[o];
                                o === "style" ? gi(e, p) : o === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0,
                                p != null && hi(e, p)) : o === "children" ? typeof p == "string" ? (n !== "textarea" || p !== "") && On(e, p) : typeof p == "number" && On(e, "" + p) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (a.hasOwnProperty(o) ? p != null && o === "onScroll" && we("scroll", e) : p != null && J(e, o, p, u))
                            }
                        switch (n) {
                        case "input":
                            _r(e),
                            ai(e, r, !1);
                            break;
                        case "textarea":
                            _r(e),
                            di(e);
                            break;
                        case "option":
                            r.value != null && e.setAttribute("value", "" + se(r.value));
                            break;
                        case "select":
                            e.multiple = !!r.multiple,
                            o = r.value,
                            o != null ? fn(e, !!r.multiple, o, !1) : r.defaultValue != null && fn(e, !!r.multiple, r.defaultValue, !0);
                            break;
                        default:
                            typeof l.onClick == "function" && (e.onclick = Gr)
                        }
                        switch (n) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            r = !!r.autoFocus;
                            break e;
                        case "img":
                            r = !0;
                            break e;
                        default:
                            r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                t.flags |= 2097152)
            }
            return Ve(t),
            null;
        case 6:
            if (e && t.stateNode != null)
                Ra(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(i(166));
                if (n = en(fr.current),
                en(gt.current),
                tl(t)) {
                    if (r = t.stateNode,
                    n = t.memoizedProps,
                    r[mt] = t,
                    (o = r.nodeValue !== n) && (e = $e,
                    e !== null))
                        switch (e.tag) {
                        case 3:
                            Yr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Yr(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    o && (t.flags |= 4)
                } else
                    r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                    r[mt] = t,
                    t.stateNode = r
            }
            return Ve(t),
            null;
        case 13:
            if (Se(Ce),
            r = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Ee && be !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
                    Ls(),
                    Nn(),
                    t.flags |= 98560,
                    o = !1;
                else if (o = tl(t),
                r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o)
                            throw Error(i(318));
                        if (o = t.memoizedState,
                        o = o !== null ? o.dehydrated : null,
                        !o)
                            throw Error(i(317));
                        o[mt] = t
                    } else
                        Nn(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Ve(t),
                    o = !1
                } else
                    at !== null && (wu(at),
                    at = null),
                    o = !0;
                if (!o)
                    return t.flags & 65536 ? t : null
            }
            return (t.flags & 128) !== 0 ? (t.lanes = n,
            t) : (r = r !== null,
            r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
            (t.mode & 1) !== 0 && (e === null || (Ce.current & 1) !== 0 ? Me === 0 && (Me = 3) : Eu())),
            t.updateQueue !== null && (t.flags |= 4),
            Ve(t),
            null);
        case 4:
            return Ln(),
            su(e, t),
            e === null && lr(t.stateNode.containerInfo),
            Ve(t),
            null;
        case 10:
            return Ao(t.type._context),
            Ve(t),
            null;
        case 17:
            return qe(t.type) && Xr(),
            Ve(t),
            null;
        case 19:
            if (Se(Ce),
            o = t.memoizedState,
            o === null)
                return Ve(t),
                null;
            if (r = (t.flags & 128) !== 0,
            u = o.rendering,
            u === null)
                if (r)
                    gr(o, !1);
                else {
                    if (Me !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (u = il(e),
                            u !== null) {
                                for (t.flags |= 128,
                                gr(o, !1),
                                r = u.updateQueue,
                                r !== null && (t.updateQueue = r,
                                t.flags |= 4),
                                t.subtreeFlags = 0,
                                r = n,
                                n = t.child; n !== null; )
                                    o = n,
                                    e = r,
                                    o.flags &= 14680066,
                                    u = o.alternate,
                                    u === null ? (o.childLanes = 0,
                                    o.lanes = e,
                                    o.child = null,
                                    o.subtreeFlags = 0,
                                    o.memoizedProps = null,
                                    o.memoizedState = null,
                                    o.updateQueue = null,
                                    o.dependencies = null,
                                    o.stateNode = null) : (o.childLanes = u.childLanes,
                                    o.lanes = u.lanes,
                                    o.child = u.child,
                                    o.subtreeFlags = 0,
                                    o.deletions = null,
                                    o.memoizedProps = u.memoizedProps,
                                    o.memoizedState = u.memoizedState,
                                    o.updateQueue = u.updateQueue,
                                    o.type = u.type,
                                    e = u.dependencies,
                                    o.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }),
                                    n = n.sibling;
                                return ye(Ce, Ce.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && Ne() > Dn && (t.flags |= 128,
                    r = !0,
                    gr(o, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = il(u),
                    e !== null) {
                        if (t.flags |= 128,
                        r = !0,
                        n = e.updateQueue,
                        n !== null && (t.updateQueue = n,
                        t.flags |= 4),
                        gr(o, !0),
                        o.tail === null && o.tailMode === "hidden" && !u.alternate && !Ee)
                            return Ve(t),
                            null
                    } else
                        2 * Ne() - o.renderingStartTime > Dn && n !== 1073741824 && (t.flags |= 128,
                        r = !0,
                        gr(o, !1),
                        t.lanes = 4194304);
                o.isBackwards ? (u.sibling = t.child,
                t.child = u) : (n = o.last,
                n !== null ? n.sibling = u : t.child = u,
                o.last = u)
            }
            return o.tail !== null ? (t = o.tail,
            o.rendering = t,
            o.tail = t.sibling,
            o.renderingStartTime = Ne(),
            t.sibling = null,
            n = Ce.current,
            ye(Ce, r ? n & 1 | 2 : n & 1),
            t) : (Ve(t),
            null);
        case 22:
        case 23:
            return ku(),
            r = t.memoizedState !== null,
            e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
            r && (t.mode & 1) !== 0 ? (et & 1073741824) !== 0 && (Ve(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(i(156, t.tag))
    }
    function Sd(e, t) {
        switch (Lo(t),
        t.tag) {
        case 1:
            return qe(t.type) && Xr(),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Ln(),
            Se(Ke),
            Se(Ue),
            Qo(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 5:
            return Vo(t),
            null;
        case 13:
            if (Se(Ce),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(i(340));
                Nn()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return Se(Ce),
            null;
        case 4:
            return Ln(),
            null;
        case 10:
            return Ao(t.type._context),
            null;
        case 22:
        case 23:
            return ku(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var gl = !1
      , He = !1
      , kd = typeof WeakSet == "function" ? WeakSet : Set
      , F = null;
    function Mn(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function")
                try {
                    n(null)
                } catch (r) {
                    Pe(e, t, r)
                }
            else
                n.current = null
    }
    function au(e, t, n) {
        try {
            n()
        } catch (r) {
            Pe(e, t, r)
        }
    }
    var Ta = !1;
    function Ed(e, t) {
        if (ko = Ar,
        e = us(),
        po(e)) {
            if ("selectionStart"in e)
                var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var r = n.getSelection && n.getSelection();
                    if (r && r.rangeCount !== 0) {
                        n = r.anchorNode;
                        var l = r.anchorOffset
                          , o = r.focusNode;
                        r = r.focusOffset;
                        try {
                            n.nodeType,
                            o.nodeType
                        } catch {
                            n = null;
                            break e
                        }
                        var u = 0
                          , s = -1
                          , p = -1
                          , k = 0
                          , P = 0
                          , N = e
                          , _ = null;
                        t: for (; ; ) {
                            for (var D; N !== n || l !== 0 && N.nodeType !== 3 || (s = u + l),
                            N !== o || r !== 0 && N.nodeType !== 3 || (p = u + r),
                            N.nodeType === 3 && (u += N.nodeValue.length),
                            (D = N.firstChild) !== null; )
                                _ = N,
                                N = D;
                            for (; ; ) {
                                if (N === e)
                                    break t;
                                if (_ === n && ++k === l && (s = u),
                                _ === o && ++P === r && (p = u),
                                (D = N.nextSibling) !== null)
                                    break;
                                N = _,
                                _ = N.parentNode
                            }
                            N = D
                        }
                        n = s === -1 || p === -1 ? null : {
                            start: s,
                            end: p
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (Eo = {
            focusedElem: e,
            selectionRange: n
        },
        Ar = !1,
        F = t; F !== null; )
            if (t = F,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                F = e;
            else
                for (; F !== null; ) {
                    t = F;
                    try {
                        var U = t.alternate;
                        if ((t.flags & 1024) !== 0)
                            switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (U !== null) {
                                    var Q = U.memoizedProps
                                      , Re = U.memoizedState
                                      , v = t.stateNode
                                      , m = v.getSnapshotBeforeUpdate(t.elementType === t.type ? Q : ct(t.type, Q), Re);
                                    v.__reactInternalSnapshotBeforeUpdate = m
                                }
                                break;
                            case 3:
                                var y = t.stateNode.containerInfo;
                                y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(i(163))
                            }
                    } catch (R) {
                        Pe(t, t.return, R)
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        F = e;
                        break
                    }
                    F = t.return
                }
        return U = Ta,
        Ta = !1,
        U
    }
    function vr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null,
        r !== null) {
            var l = r = r.next;
            do {
                if ((l.tag & e) === e) {
                    var o = l.destroy;
                    l.destroy = void 0,
                    o !== void 0 && au(t, n, o)
                }
                l = l.next
            } while (l !== r)
        }
    }
    function vl(e, t) {
        if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r()
                }
                n = n.next
            } while (n !== t)
        }
    }
    function cu(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            e.tag,
            e = n,
            typeof t == "function" ? t(e) : t.current = e
        }
    }
    function xa(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        xa(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && (delete t[mt],
        delete t[ur],
        delete t[No],
        delete t[ld],
        delete t[od])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    function La(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }
    function za(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || La(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function fu(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
            t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
            t.insertBefore(e, n)) : (t = n,
            t.appendChild(e)),
            n = n._reactRootContainer,
            n != null || t.onclick !== null || (t.onclick = Gr));
        else if (r !== 4 && (e = e.child,
        e !== null))
            for (fu(e, t, n),
            e = e.sibling; e !== null; )
                fu(e, t, n),
                e = e.sibling
    }
    function du(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child,
        e !== null))
            for (du(e, t, n),
            e = e.sibling; e !== null; )
                du(e, t, n),
                e = e.sibling
    }
    var Fe = null
      , ft = !1;
    function jt(e, t, n) {
        for (n = n.child; n !== null; )
            Ma(e, t, n),
            n = n.sibling
    }
    function Ma(e, t, n) {
        if (ht && typeof ht.onCommitFiberUnmount == "function")
            try {
                ht.onCommitFiberUnmount(Lr, n)
            } catch {}
        switch (n.tag) {
        case 5:
            He || Mn(n, t);
        case 6:
            var r = Fe
              , l = ft;
            Fe = null,
            jt(e, t, n),
            Fe = r,
            ft = l,
            Fe !== null && (ft ? (e = Fe,
            n = n.stateNode,
            e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Fe.removeChild(n.stateNode));
            break;
        case 18:
            Fe !== null && (ft ? (e = Fe,
            n = n.stateNode,
            e.nodeType === 8 ? Po(e.parentNode, n) : e.nodeType === 1 && Po(e, n),
            Jn(e)) : Po(Fe, n.stateNode));
            break;
        case 4:
            r = Fe,
            l = ft,
            Fe = n.stateNode.containerInfo,
            ft = !0,
            jt(e, t, n),
            Fe = r,
            ft = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!He && (r = n.updateQueue,
            r !== null && (r = r.lastEffect,
            r !== null))) {
                l = r = r.next;
                do {
                    var o = l
                      , u = o.destroy;
                    o = o.tag,
                    u !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && au(n, t, u),
                    l = l.next
                } while (l !== r)
            }
            jt(e, t, n);
            break;
        case 1:
            if (!He && (Mn(n, t),
            r = n.stateNode,
            typeof r.componentWillUnmount == "function"))
                try {
                    r.props = n.memoizedProps,
                    r.state = n.memoizedState,
                    r.componentWillUnmount()
                } catch (s) {
                    Pe(n, t, s)
                }
            jt(e, t, n);
            break;
        case 21:
            jt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (He = (r = He) || n.memoizedState !== null,
            jt(e, t, n),
            He = r) : jt(e, t, n);
            break;
        default:
            jt(e, t, n)
        }
    }
    function Ia(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new kd),
            t.forEach(function(r) {
                var l = zd.bind(null, e, r);
                n.has(r) || (n.add(r),
                r.then(l, l))
            })
        }
    }
    function dt(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var r = 0; r < n.length; r++) {
                var l = n[r];
                try {
                    var o = e
                      , u = t
                      , s = u;
                    e: for (; s !== null; ) {
                        switch (s.tag) {
                        case 5:
                            Fe = s.stateNode,
                            ft = !1;
                            break e;
                        case 3:
                            Fe = s.stateNode.containerInfo,
                            ft = !0;
                            break e;
                        case 4:
                            Fe = s.stateNode.containerInfo,
                            ft = !0;
                            break e
                        }
                        s = s.return
                    }
                    if (Fe === null)
                        throw Error(i(160));
                    Ma(o, u, l),
                    Fe = null,
                    ft = !1;
                    var p = l.alternate;
                    p !== null && (p.return = null),
                    l.return = null
                } catch (k) {
                    Pe(l, t, k)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null; )
                Da(t, e),
                t = t.sibling
    }
    function Da(e, t) {
        var n = e.alternate
          , r = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (dt(t, e),
            yt(e),
            r & 4) {
                try {
                    vr(3, e, e.return),
                    vl(3, e)
                } catch (Q) {
                    Pe(e, e.return, Q)
                }
                try {
                    vr(5, e, e.return)
                } catch (Q) {
                    Pe(e, e.return, Q)
                }
            }
            break;
        case 1:
            dt(t, e),
            yt(e),
            r & 512 && n !== null && Mn(n, n.return);
            break;
        case 5:
            if (dt(t, e),
            yt(e),
            r & 512 && n !== null && Mn(n, n.return),
            e.flags & 32) {
                var l = e.stateNode;
                try {
                    On(l, "")
                } catch (Q) {
                    Pe(e, e.return, Q)
                }
            }
            if (r & 4 && (l = e.stateNode,
            l != null)) {
                var o = e.memoizedProps
                  , u = n !== null ? n.memoizedProps : o
                  , s = e.type
                  , p = e.updateQueue;
                if (e.updateQueue = null,
                p !== null)
                    try {
                        s === "input" && o.type === "radio" && o.name != null && si(l, o),
                        Hl(s, u);
                        var k = Hl(s, o);
                        for (u = 0; u < p.length; u += 2) {
                            var P = p[u]
                              , N = p[u + 1];
                            P === "style" ? gi(l, N) : P === "dangerouslySetInnerHTML" ? hi(l, N) : P === "children" ? On(l, N) : J(l, P, N, k)
                        }
                        switch (s) {
                        case "input":
                            Fl(l, o);
                            break;
                        case "textarea":
                            fi(l, o);
                            break;
                        case "select":
                            var _ = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!o.multiple;
                            var D = o.value;
                            D != null ? fn(l, !!o.multiple, D, !1) : _ !== !!o.multiple && (o.defaultValue != null ? fn(l, !!o.multiple, o.defaultValue, !0) : fn(l, !!o.multiple, o.multiple ? [] : "", !1))
                        }
                        l[ur] = o
                    } catch (Q) {
                        Pe(e, e.return, Q)
                    }
            }
            break;
        case 6:
            if (dt(t, e),
            yt(e),
            r & 4) {
                if (e.stateNode === null)
                    throw Error(i(162));
                l = e.stateNode,
                o = e.memoizedProps;
                try {
                    l.nodeValue = o
                } catch (Q) {
                    Pe(e, e.return, Q)
                }
            }
            break;
        case 3:
            if (dt(t, e),
            yt(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Jn(t.containerInfo)
                } catch (Q) {
                    Pe(e, e.return, Q)
                }
            break;
        case 4:
            dt(t, e),
            yt(e);
            break;
        case 13:
            dt(t, e),
            yt(e),
            l = e.child,
            l.flags & 8192 && (o = l.memoizedState !== null,
            l.stateNode.isHidden = o,
            !o || l.alternate !== null && l.alternate.memoizedState !== null || (mu = Ne())),
            r & 4 && Ia(e);
            break;
        case 22:
            if (P = n !== null && n.memoizedState !== null,
            e.mode & 1 ? (He = (k = He) || P,
            dt(t, e),
            He = k) : dt(t, e),
            yt(e),
            r & 8192) {
                if (k = e.memoizedState !== null,
                (e.stateNode.isHidden = k) && !P && (e.mode & 1) !== 0)
                    for (F = e,
                    P = e.child; P !== null; ) {
                        for (N = F = P; F !== null; ) {
                            switch (_ = F,
                            D = _.child,
                            _.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                vr(4, _, _.return);
                                break;
                            case 1:
                                Mn(_, _.return);
                                var U = _.stateNode;
                                if (typeof U.componentWillUnmount == "function") {
                                    r = _,
                                    n = _.return;
                                    try {
                                        t = r,
                                        U.props = t.memoizedProps,
                                        U.state = t.memoizedState,
                                        U.componentWillUnmount()
                                    } catch (Q) {
                                        Pe(r, n, Q)
                                    }
                                }
                                break;
                            case 5:
                                Mn(_, _.return);
                                break;
                            case 22:
                                if (_.memoizedState !== null) {
                                    Fa(N);
                                    continue
                                }
                            }
                            D !== null ? (D.return = _,
                            F = D) : Fa(N)
                        }
                        P = P.sibling
                    }
                e: for (P = null,
                N = e; ; ) {
                    if (N.tag === 5) {
                        if (P === null) {
                            P = N;
                            try {
                                l = N.stateNode,
                                k ? (o = l.style,
                                typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = N.stateNode,
                                p = N.memoizedProps.style,
                                u = p != null && p.hasOwnProperty("display") ? p.display : null,
                                s.style.display = mi("display", u))
                            } catch (Q) {
                                Pe(e, e.return, Q)
                            }
                        }
                    } else if (N.tag === 6) {
                        if (P === null)
                            try {
                                N.stateNode.nodeValue = k ? "" : N.memoizedProps
                            } catch (Q) {
                                Pe(e, e.return, Q)
                            }
                    } else if ((N.tag !== 22 && N.tag !== 23 || N.memoizedState === null || N === e) && N.child !== null) {
                        N.child.return = N,
                        N = N.child;
                        continue
                    }
                    if (N === e)
                        break e;
                    for (; N.sibling === null; ) {
                        if (N.return === null || N.return === e)
                            break e;
                        P === N && (P = null),
                        N = N.return
                    }
                    P === N && (P = null),
                    N.sibling.return = N.return,
                    N = N.sibling
                }
            }
            break;
        case 19:
            dt(t, e),
            yt(e),
            r & 4 && Ia(e);
            break;
        case 21:
            break;
        default:
            dt(t, e),
            yt(e)
        }
    }
    function yt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null; ) {
                        if (La(n)) {
                            var r = n;
                            break e
                        }
                        n = n.return
                    }
                    throw Error(i(160))
                }
                switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (On(l, ""),
                    r.flags &= -33);
                    var o = za(e);
                    du(e, o, l);
                    break;
                case 3:
                case 4:
                    var u = r.stateNode.containerInfo
                      , s = za(e);
                    fu(e, s, u);
                    break;
                default:
                    throw Error(i(161))
                }
            } catch (p) {
                Pe(e, e.return, p)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function Cd(e, t, n) {
        F = e,
        Ba(e)
    }
    function Ba(e, t, n) {
        for (var r = (e.mode & 1) !== 0; F !== null; ) {
            var l = F
              , o = l.child;
            if (l.tag === 22 && r) {
                var u = l.memoizedState !== null || gl;
                if (!u) {
                    var s = l.alternate
                      , p = s !== null && s.memoizedState !== null || He;
                    s = gl;
                    var k = He;
                    if (gl = u,
                    (He = p) && !k)
                        for (F = l; F !== null; )
                            u = F,
                            p = u.child,
                            u.tag === 22 && u.memoizedState !== null ? Oa(l) : p !== null ? (p.return = u,
                            F = p) : Oa(l);
                    for (; o !== null; )
                        F = o,
                        Ba(o),
                        o = o.sibling;
                    F = l,
                    gl = s,
                    He = k
                }
                Aa(e)
            } else
                (l.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = l,
                F = o) : Aa(e)
        }
    }
    function Aa(e) {
        for (; F !== null; ) {
            var t = F;
            if ((t.flags & 8772) !== 0) {
                var n = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            He || vl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !He)
                                if (n === null)
                                    r.componentDidMount();
                                else {
                                    var l = t.elementType === t.type ? n.memoizedProps : ct(t.type, n.memoizedProps);
                                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var o = t.updateQueue;
                            o !== null && Fs(t, o, r);
                            break;
                        case 3:
                            var u = t.updateQueue;
                            if (u !== null) {
                                if (n = null,
                                t.child !== null)
                                    switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1:
                                        n = t.child.stateNode
                                    }
                                Fs(t, u, n)
                            }
                            break;
                        case 5:
                            var s = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = s;
                                var p = t.memoizedProps;
                                switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    p.autoFocus && n.focus();
                                    break;
                                case "img":
                                    p.src && (n.src = p.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var k = t.alternate;
                                if (k !== null) {
                                    var P = k.memoizedState;
                                    if (P !== null) {
                                        var N = P.dehydrated;
                                        N !== null && Jn(N)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(i(163))
                        }
                    He || t.flags & 512 && cu(t)
                } catch (_) {
                    Pe(t, t.return, _)
                }
            }
            if (t === e) {
                F = null;
                break
            }
            if (n = t.sibling,
            n !== null) {
                n.return = t.return,
                F = n;
                break
            }
            F = t.return
        }
    }
    function Fa(e) {
        for (; F !== null; ) {
            var t = F;
            if (t === e) {
                F = null;
                break
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return,
                F = n;
                break
            }
            F = t.return
        }
    }
    function Oa(e) {
        for (; F !== null; ) {
            var t = F;
            try {
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        vl(4, t)
                    } catch (p) {
                        Pe(t, n, p)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (p) {
                            Pe(t, l, p)
                        }
                    }
                    var o = t.return;
                    try {
                        cu(t)
                    } catch (p) {
                        Pe(t, o, p)
                    }
                    break;
                case 5:
                    var u = t.return;
                    try {
                        cu(t)
                    } catch (p) {
                        Pe(t, u, p)
                    }
                }
            } catch (p) {
                Pe(t, t.return, p)
            }
            if (t === e) {
                F = null;
                break
            }
            var s = t.sibling;
            if (s !== null) {
                s.return = t.return,
                F = s;
                break
            }
            F = t.return
        }
    }
    var _d = Math.ceil
      , yl = W.ReactCurrentDispatcher
      , pu = W.ReactCurrentOwner
      , ot = W.ReactCurrentBatchConfig
      , pe = 0
      , De = null
      , xe = null
      , Oe = 0
      , et = 0
      , In = Bt(0)
      , Me = 0
      , yr = null
      , nn = 0
      , wl = 0
      , hu = 0
      , wr = null
      , Ge = null
      , mu = 0
      , Dn = 1 / 0
      , Rt = null
      , Sl = !1
      , gu = null
      , Vt = null
      , kl = !1
      , Ht = null
      , El = 0
      , Sr = 0
      , vu = null
      , Cl = -1
      , _l = 0;
    function We() {
        return (pe & 6) !== 0 ? Ne() : Cl !== -1 ? Cl : Cl = Ne()
    }
    function Qt(e) {
        return (e.mode & 1) === 0 ? 1 : (pe & 2) !== 0 && Oe !== 0 ? Oe & -Oe : id.transition !== null ? (_l === 0 && (_l = zi()),
        _l) : (e = ve,
        e !== 0 || (e = window.event,
        e = e === void 0 ? 16 : ji(e.type)),
        e)
    }
    function pt(e, t, n, r) {
        if (50 < Sr)
            throw Sr = 0,
            vu = null,
            Error(i(185));
        Wn(e, n, r),
        ((pe & 2) === 0 || e !== De) && (e === De && ((pe & 2) === 0 && (wl |= n),
        Me === 4 && Wt(e, Oe)),
        Je(e, r),
        n === 1 && pe === 0 && (t.mode & 1) === 0 && (Dn = Ne() + 500,
        $r && Ft()))
    }
    function Je(e, t) {
        var n = e.callbackNode;
        uf(e, t);
        var r = Ir(e, e === De ? Oe : 0);
        if (r === 0)
            n !== null && Ti(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
        else if (t = r & -r,
        e.callbackPriority !== t) {
            if (n != null && Ti(n),
            t === 1)
                e.tag === 0 ? ud(ja.bind(null, e)) : Ps(ja.bind(null, e)),
                nd(function() {
                    (pe & 6) === 0 && Ft()
                }),
                n = null;
            else {
                switch (Mi(r)) {
                case 1:
                    n = Jl;
                    break;
                case 4:
                    n = xi;
                    break;
                case 16:
                    n = xr;
                    break;
                case 536870912:
                    n = Li;
                    break;
                default:
                    n = xr
                }
                n = Ga(n, Ua.bind(null, e))
            }
            e.callbackPriority = t,
            e.callbackNode = n
        }
    }
    function Ua(e, t) {
        if (Cl = -1,
        _l = 0,
        (pe & 6) !== 0)
            throw Error(i(327));
        var n = e.callbackNode;
        if (Bn() && e.callbackNode !== n)
            return null;
        var r = Ir(e, e === De ? Oe : 0);
        if (r === 0)
            return null;
        if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t)
            t = Pl(e, r);
        else {
            t = r;
            var l = pe;
            pe |= 2;
            var o = Ha();
            (De !== e || Oe !== t) && (Rt = null,
            Dn = Ne() + 500,
            ln(e, t));
            do
                try {
                    Rd();
                    break
                } catch (s) {
                    Va(e, s)
                }
            while (!0);
            Bo(),
            yl.current = o,
            pe = l,
            xe !== null ? t = 0 : (De = null,
            Oe = 0,
            t = Me)
        }
        if (t !== 0) {
            if (t === 2 && (l = Xl(e),
            l !== 0 && (r = l,
            t = yu(e, l))),
            t === 1)
                throw n = yr,
                ln(e, 0),
                Wt(e, r),
                Je(e, Ne()),
                n;
            if (t === 6)
                Wt(e, r);
            else {
                if (l = e.current.alternate,
                (r & 30) === 0 && !Pd(l) && (t = Pl(e, r),
                t === 2 && (o = Xl(e),
                o !== 0 && (r = o,
                t = yu(e, o))),
                t === 1))
                    throw n = yr,
                    ln(e, 0),
                    Wt(e, r),
                    Je(e, Ne()),
                    n;
                switch (e.finishedWork = l,
                e.finishedLanes = r,
                t) {
                case 0:
                case 1:
                    throw Error(i(345));
                case 2:
                    on(e, Ge, Rt);
                    break;
                case 3:
                    if (Wt(e, r),
                    (r & 130023424) === r && (t = mu + 500 - Ne(),
                    10 < t)) {
                        if (Ir(e, 0) !== 0)
                            break;
                        if (l = e.suspendedLanes,
                        (l & r) !== r) {
                            We(),
                            e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = _o(on.bind(null, e, Ge, Rt), t);
                        break
                    }
                    on(e, Ge, Rt);
                    break;
                case 4:
                    if (Wt(e, r),
                    (r & 4194240) === r)
                        break;
                    for (t = e.eventTimes,
                    l = -1; 0 < r; ) {
                        var u = 31 - it(r);
                        o = 1 << u,
                        u = t[u],
                        u > l && (l = u),
                        r &= ~o
                    }
                    if (r = l,
                    r = Ne() - r,
                    r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _d(r / 1960)) - r,
                    10 < r) {
                        e.timeoutHandle = _o(on.bind(null, e, Ge, Rt), r);
                        break
                    }
                    on(e, Ge, Rt);
                    break;
                case 5:
                    on(e, Ge, Rt);
                    break;
                default:
                    throw Error(i(329))
                }
            }
        }
        return Je(e, Ne()),
        e.callbackNode === n ? Ua.bind(null, e) : null
    }
    function yu(e, t) {
        var n = wr;
        return e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
        e = Pl(e, t),
        e !== 2 && (t = Ge,
        Ge = n,
        t !== null && wu(t)),
        e
    }
    function wu(e) {
        Ge === null ? Ge = e : Ge.push.apply(Ge, e)
    }
    function Pd(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores,
                n !== null))
                    for (var r = 0; r < n.length; r++) {
                        var l = n[r]
                          , o = l.getSnapshot;
                        l = l.value;
                        try {
                            if (!st(o(), l))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
                n.return = t,
                t = n;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Wt(e, t) {
        for (t &= ~hu,
        t &= ~wl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t; ) {
            var n = 31 - it(t)
              , r = 1 << n;
            e[n] = -1,
            t &= ~r
        }
    }
    function ja(e) {
        if ((pe & 6) !== 0)
            throw Error(i(327));
        Bn();
        var t = Ir(e, 0);
        if ((t & 1) === 0)
            return Je(e, Ne()),
            null;
        var n = Pl(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = Xl(e);
            r !== 0 && (t = r,
            n = yu(e, r))
        }
        if (n === 1)
            throw n = yr,
            ln(e, 0),
            Wt(e, t),
            Je(e, Ne()),
            n;
        if (n === 6)
            throw Error(i(345));
        return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        on(e, Ge, Rt),
        Je(e, Ne()),
        null
    }
    function Su(e, t) {
        var n = pe;
        pe |= 1;
        try {
            return e(t)
        } finally {
            pe = n,
            pe === 0 && (Dn = Ne() + 500,
            $r && Ft())
        }
    }
    function rn(e) {
        Ht !== null && Ht.tag === 0 && (pe & 6) === 0 && Bn();
        var t = pe;
        pe |= 1;
        var n = ot.transition
          , r = ve;
        try {
            if (ot.transition = null,
            ve = 1,
            e)
                return e()
        } finally {
            ve = r,
            ot.transition = n,
            pe = t,
            (pe & 6) === 0 && Ft()
        }
    }
    function ku() {
        et = In.current,
        Se(In)
    }
    function ln(e, t) {
        e.finishedWork = null,
        e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1,
        td(n)),
        xe !== null)
            for (n = xe.return; n !== null; ) {
                var r = n;
                switch (Lo(r),
                r.tag) {
                case 1:
                    r = r.type.childContextTypes,
                    r != null && Xr();
                    break;
                case 3:
                    Ln(),
                    Se(Ke),
                    Se(Ue),
                    Qo();
                    break;
                case 5:
                    Vo(r);
                    break;
                case 4:
                    Ln();
                    break;
                case 13:
                    Se(Ce);
                    break;
                case 19:
                    Se(Ce);
                    break;
                case 10:
                    Ao(r.type._context);
                    break;
                case 22:
                case 23:
                    ku()
                }
                n = n.return
            }
        if (De = e,
        xe = e = Kt(e.current, null),
        Oe = et = t,
        Me = 0,
        yr = null,
        hu = wl = nn = 0,
        Ge = wr = null,
        bt !== null) {
            for (t = 0; t < bt.length; t++)
                if (n = bt[t],
                r = n.interleaved,
                r !== null) {
                    n.interleaved = null;
                    var l = r.next
                      , o = n.pending;
                    if (o !== null) {
                        var u = o.next;
                        o.next = l,
                        r.next = u
                    }
                    n.pending = r
                }
            bt = null
        }
        return e
    }
    function Va(e, t) {
        do {
            var n = xe;
            try {
                if (Bo(),
                sl.current = dl,
                al) {
                    for (var r = _e.memoizedState; r !== null; ) {
                        var l = r.queue;
                        l !== null && (l.pending = null),
                        r = r.next
                    }
                    al = !1
                }
                if (tn = 0,
                Ie = ze = _e = null,
                dr = !1,
                pr = 0,
                pu.current = null,
                n === null || n.return === null) {
                    Me = 1,
                    yr = t,
                    xe = null;
                    break
                }
                e: {
                    var o = e
                      , u = n.return
                      , s = n
                      , p = t;
                    if (t = Oe,
                    s.flags |= 32768,
                    p !== null && typeof p == "object" && typeof p.then == "function") {
                        var k = p
                          , P = s
                          , N = P.tag;
                        if ((P.mode & 1) === 0 && (N === 0 || N === 11 || N === 15)) {
                            var _ = P.alternate;
                            _ ? (P.updateQueue = _.updateQueue,
                            P.memoizedState = _.memoizedState,
                            P.lanes = _.lanes) : (P.updateQueue = null,
                            P.memoizedState = null)
                        }
                        var D = da(u);
                        if (D !== null) {
                            D.flags &= -257,
                            pa(D, u, s, o, t),
                            D.mode & 1 && fa(o, k, t),
                            t = D,
                            p = k;
                            var U = t.updateQueue;
                            if (U === null) {
                                var Q = new Set;
                                Q.add(p),
                                t.updateQueue = Q
                            } else
                                U.add(p);
                            break e
                        } else {
                            if ((t & 1) === 0) {
                                fa(o, k, t),
                                Eu();
                                break e
                            }
                            p = Error(i(426))
                        }
                    } else if (Ee && s.mode & 1) {
                        var Re = da(u);
                        if (Re !== null) {
                            (Re.flags & 65536) === 0 && (Re.flags |= 256),
                            pa(Re, u, s, o, t),
                            Io(zn(p, s));
                            break e
                        }
                    }
                    o = p = zn(p, s),
                    Me !== 4 && (Me = 2),
                    wr === null ? wr = [o] : wr.push(o),
                    o = u;
                    do {
                        switch (o.tag) {
                        case 3:
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var v = aa(o, p, t);
                            As(o, v);
                            break e;
                        case 1:
                            s = p;
                            var m = o.type
                              , y = o.stateNode;
                            if ((o.flags & 128) === 0 && (typeof m.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Vt === null || !Vt.has(y)))) {
                                o.flags |= 65536,
                                t &= -t,
                                o.lanes |= t;
                                var R = ca(o, s, t);
                                As(o, R);
                                break e
                            }
                        }
                        o = o.return
                    } while (o !== null)
                }
                Wa(n)
            } catch (q) {
                t = q,
                xe === n && n !== null && (xe = n = n.return);
                continue
            }
            break
        } while (!0)
    }
    function Ha() {
        var e = yl.current;
        return yl.current = dl,
        e === null ? dl : e
    }
    function Eu() {
        (Me === 0 || Me === 3 || Me === 2) && (Me = 4),
        De === null || (nn & 268435455) === 0 && (wl & 268435455) === 0 || Wt(De, Oe)
    }
    function Pl(e, t) {
        var n = pe;
        pe |= 2;
        var r = Ha();
        (De !== e || Oe !== t) && (Rt = null,
        ln(e, t));
        do
            try {
                Nd();
                break
            } catch (l) {
                Va(e, l)
            }
        while (!0);
        if (Bo(),
        pe = n,
        yl.current = r,
        xe !== null)
            throw Error(i(261));
        return De = null,
        Oe = 0,
        Me
    }
    function Nd() {
        for (; xe !== null; )
            Qa(xe)
    }
    function Rd() {
        for (; xe !== null && !Zc(); )
            Qa(xe)
    }
    function Qa(e) {
        var t = Ya(e.alternate, e, et);
        e.memoizedProps = e.pendingProps,
        t === null ? Wa(e) : xe = t,
        pu.current = null
    }
    function Wa(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return,
            (t.flags & 32768) === 0) {
                if (n = wd(n, t, et),
                n !== null) {
                    xe = n;
                    return
                }
            } else {
                if (n = Sd(n, t),
                n !== null) {
                    n.flags &= 32767,
                    xe = n;
                    return
                }
                if (e !== null)
                    e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
                else {
                    Me = 6,
                    xe = null;
                    return
                }
            }
            if (t = t.sibling,
            t !== null) {
                xe = t;
                return
            }
            xe = t = e
        } while (t !== null);
        Me === 0 && (Me = 5)
    }
    function on(e, t, n) {
        var r = ve
          , l = ot.transition;
        try {
            ot.transition = null,
            ve = 1,
            Td(e, t, n, r)
        } finally {
            ot.transition = l,
            ve = r
        }
        return null
    }
    function Td(e, t, n, r) {
        do
            Bn();
        while (Ht !== null);
        if ((pe & 6) !== 0)
            throw Error(i(327));
        n = e.finishedWork;
        var l = e.finishedLanes;
        if (n === null)
            return null;
        if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
            throw Error(i(177));
        e.callbackNode = null,
        e.callbackPriority = 0;
        var o = n.lanes | n.childLanes;
        if (sf(e, o),
        e === De && (xe = De = null,
        Oe = 0),
        (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || kl || (kl = !0,
        Ga(xr, function() {
            return Bn(),
            null
        })),
        o = (n.flags & 15990) !== 0,
        (n.subtreeFlags & 15990) !== 0 || o) {
            o = ot.transition,
            ot.transition = null;
            var u = ve;
            ve = 1;
            var s = pe;
            pe |= 4,
            pu.current = null,
            Ed(e, n),
            Da(n, e),
            Gf(Eo),
            Ar = !!ko,
            Eo = ko = null,
            e.current = n,
            Cd(n),
            $c(),
            pe = s,
            ve = u,
            ot.transition = o
        } else
            e.current = n;
        if (kl && (kl = !1,
        Ht = e,
        El = l),
        o = e.pendingLanes,
        o === 0 && (Vt = null),
        tf(n.stateNode),
        Je(e, Ne()),
        t !== null)
            for (r = e.onRecoverableError,
            n = 0; n < t.length; n++)
                l = t[n],
                r(l.value, {
                    componentStack: l.stack,
                    digest: l.digest
                });
        if (Sl)
            throw Sl = !1,
            e = gu,
            gu = null,
            e;
        return (El & 1) !== 0 && e.tag !== 0 && Bn(),
        o = e.pendingLanes,
        (o & 1) !== 0 ? e === vu ? Sr++ : (Sr = 0,
        vu = e) : Sr = 0,
        Ft(),
        null
    }
    function Bn() {
        if (Ht !== null) {
            var e = Mi(El)
              , t = ot.transition
              , n = ve;
            try {
                if (ot.transition = null,
                ve = 16 > e ? 16 : e,
                Ht === null)
                    var r = !1;
                else {
                    if (e = Ht,
                    Ht = null,
                    El = 0,
                    (pe & 6) !== 0)
                        throw Error(i(331));
                    var l = pe;
                    for (pe |= 4,
                    F = e.current; F !== null; ) {
                        var o = F
                          , u = o.child;
                        if ((F.flags & 16) !== 0) {
                            var s = o.deletions;
                            if (s !== null) {
                                for (var p = 0; p < s.length; p++) {
                                    var k = s[p];
                                    for (F = k; F !== null; ) {
                                        var P = F;
                                        switch (P.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            vr(8, P, o)
                                        }
                                        var N = P.child;
                                        if (N !== null)
                                            N.return = P,
                                            F = N;
                                        else
                                            for (; F !== null; ) {
                                                P = F;
                                                var _ = P.sibling
                                                  , D = P.return;
                                                if (xa(P),
                                                P === k) {
                                                    F = null;
                                                    break
                                                }
                                                if (_ !== null) {
                                                    _.return = D,
                                                    F = _;
                                                    break
                                                }
                                                F = D
                                            }
                                    }
                                }
                                var U = o.alternate;
                                if (U !== null) {
                                    var Q = U.child;
                                    if (Q !== null) {
                                        U.child = null;
                                        do {
                                            var Re = Q.sibling;
                                            Q.sibling = null,
                                            Q = Re
                                        } while (Q !== null)
                                    }
                                }
                                F = o
                            }
                        }
                        if ((o.subtreeFlags & 2064) !== 0 && u !== null)
                            u.return = o,
                            F = u;
                        else
                            e: for (; F !== null; ) {
                                if (o = F,
                                (o.flags & 2048) !== 0)
                                    switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        vr(9, o, o.return)
                                    }
                                var v = o.sibling;
                                if (v !== null) {
                                    v.return = o.return,
                                    F = v;
                                    break e
                                }
                                F = o.return
                            }
                    }
                    var m = e.current;
                    for (F = m; F !== null; ) {
                        u = F;
                        var y = u.child;
                        if ((u.subtreeFlags & 2064) !== 0 && y !== null)
                            y.return = u,
                            F = y;
                        else
                            e: for (u = m; F !== null; ) {
                                if (s = F,
                                (s.flags & 2048) !== 0)
                                    try {
                                        switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            vl(9, s)
                                        }
                                    } catch (q) {
                                        Pe(s, s.return, q)
                                    }
                                if (s === u) {
                                    F = null;
                                    break e
                                }
                                var R = s.sibling;
                                if (R !== null) {
                                    R.return = s.return,
                                    F = R;
                                    break e
                                }
                                F = s.return
                            }
                    }
                    if (pe = l,
                    Ft(),
                    ht && typeof ht.onPostCommitFiberRoot == "function")
                        try {
                            ht.onPostCommitFiberRoot(Lr, e)
                        } catch {}
                    r = !0
                }
                return r
            } finally {
                ve = n,
                ot.transition = t
            }
        }
        return !1
    }
    function Ka(e, t, n) {
        t = zn(n, t),
        t = aa(e, t, 1),
        e = Ut(e, t, 1),
        t = We(),
        e !== null && (Wn(e, 1, t),
        Je(e, t))
    }
    function Pe(e, t, n) {
        if (e.tag === 3)
            Ka(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Ka(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
                        e = zn(n, e),
                        e = ca(t, e, 1),
                        t = Ut(t, e, 1),
                        e = We(),
                        t !== null && (Wn(t, 1, e),
                        Je(t, e));
                        break
                    }
                }
                t = t.return
            }
    }
    function xd(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t),
        t = We(),
        e.pingedLanes |= e.suspendedLanes & n,
        De === e && (Oe & n) === n && (Me === 4 || Me === 3 && (Oe & 130023424) === Oe && 500 > Ne() - mu ? ln(e, 0) : hu |= n),
        Je(e, t)
    }
    function qa(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Mr,
        Mr <<= 1,
        (Mr & 130023424) === 0 && (Mr = 4194304)));
        var n = We();
        e = _t(e, t),
        e !== null && (Wn(e, t, n),
        Je(e, n))
    }
    function Ld(e) {
        var t = e.memoizedState
          , n = 0;
        t !== null && (n = t.retryLane),
        qa(e, n)
    }
    function zd(e, t) {
        var n = 0;
        switch (e.tag) {
        case 13:
            var r = e.stateNode
              , l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(i(314))
        }
        r !== null && r.delete(t),
        qa(e, n)
    }
    var Ya;
    Ya = function(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || Ke.current)
                Ye = !0;
            else {
                if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
                    return Ye = !1,
                    yd(e, t, n);
                Ye = (e.flags & 131072) !== 0
            }
        else
            Ye = !1,
            Ee && (t.flags & 1048576) !== 0 && Ns(t, el, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 2:
            var r = t.type;
            ml(e, t),
            e = t.pendingProps;
            var l = Cn(t, Ue.current);
            xn(t, n),
            l = qo(null, t, r, e, l, n);
            var o = Yo();
            return t.flags |= 1,
            typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
            t.memoizedState = null,
            t.updateQueue = null,
            qe(r) ? (o = !0,
            Zr(t)) : o = !1,
            t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
            Uo(t),
            l.updater = pl,
            t.stateNode = l,
            l._reactInternals = t,
            bo(t, r, e, n),
            t = ru(null, t, r, !0, o, n)) : (t.tag = 0,
            Ee && o && xo(t),
            Qe(null, t, l, n),
            t = t.child),
            t;
        case 16:
            r = t.elementType;
            e: {
                switch (ml(e, t),
                e = t.pendingProps,
                l = r._init,
                r = l(r._payload),
                t.type = r,
                l = t.tag = Id(r),
                e = ct(r, e),
                l) {
                case 0:
                    t = nu(null, t, r, e, n);
                    break e;
                case 1:
                    t = wa(null, t, r, e, n);
                    break e;
                case 11:
                    t = ha(null, t, r, e, n);
                    break e;
                case 14:
                    t = ma(null, t, r, ct(r.type, e), n);
                    break e
                }
                throw Error(i(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type,
            l = t.pendingProps,
            l = t.elementType === r ? l : ct(r, l),
            nu(e, t, r, l, n);
        case 1:
            return r = t.type,
            l = t.pendingProps,
            l = t.elementType === r ? l : ct(r, l),
            wa(e, t, r, l, n);
        case 3:
            e: {
                if (Sa(t),
                e === null)
                    throw Error(i(387));
                r = t.pendingProps,
                o = t.memoizedState,
                l = o.element,
                Bs(e, t),
                ul(t, r, null, n);
                var u = t.memoizedState;
                if (r = u.element,
                o.isDehydrated)
                    if (o = {
                        element: r,
                        isDehydrated: !1,
                        cache: u.cache,
                        pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                        transitions: u.transitions
                    },
                    t.updateQueue.baseState = o,
                    t.memoizedState = o,
                    t.flags & 256) {
                        l = zn(Error(i(423)), t),
                        t = ka(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                        l = zn(Error(i(424)), t),
                        t = ka(e, t, r, n, l);
                        break e
                    } else
                        for (be = Dt(t.stateNode.containerInfo.firstChild),
                        $e = t,
                        Ee = !0,
                        at = null,
                        n = Is(t, null, r, n),
                        t.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling;
                else {
                    if (Nn(),
                    r === l) {
                        t = Nt(e, t, n);
                        break e
                    }
                    Qe(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Os(t),
            e === null && Mo(t),
            r = t.type,
            l = t.pendingProps,
            o = e !== null ? e.memoizedProps : null,
            u = l.children,
            Co(r, l) ? u = null : o !== null && Co(r, o) && (t.flags |= 32),
            ya(e, t),
            Qe(e, t, u, n),
            t.child;
        case 6:
            return e === null && Mo(t),
            null;
        case 13:
            return Ea(e, t, n);
        case 4:
            return jo(t, t.stateNode.containerInfo),
            r = t.pendingProps,
            e === null ? t.child = Rn(t, null, r, n) : Qe(e, t, r, n),
            t.child;
        case 11:
            return r = t.type,
            l = t.pendingProps,
            l = t.elementType === r ? l : ct(r, l),
            ha(e, t, r, l, n);
        case 7:
            return Qe(e, t, t.pendingProps, n),
            t.child;
        case 8:
            return Qe(e, t, t.pendingProps.children, n),
            t.child;
        case 12:
            return Qe(e, t, t.pendingProps.children, n),
            t.child;
        case 10:
            e: {
                if (r = t.type._context,
                l = t.pendingProps,
                o = t.memoizedProps,
                u = l.value,
                ye(rl, r._currentValue),
                r._currentValue = u,
                o !== null)
                    if (st(o.value, u)) {
                        if (o.children === l.children && !Ke.current) {
                            t = Nt(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child,
                        o !== null && (o.return = t); o !== null; ) {
                            var s = o.dependencies;
                            if (s !== null) {
                                u = o.child;
                                for (var p = s.firstContext; p !== null; ) {
                                    if (p.context === r) {
                                        if (o.tag === 1) {
                                            p = Pt(-1, n & -n),
                                            p.tag = 2;
                                            var k = o.updateQueue;
                                            if (k !== null) {
                                                k = k.shared;
                                                var P = k.pending;
                                                P === null ? p.next = p : (p.next = P.next,
                                                P.next = p),
                                                k.pending = p
                                            }
                                        }
                                        o.lanes |= n,
                                        p = o.alternate,
                                        p !== null && (p.lanes |= n),
                                        Fo(o.return, n, t),
                                        s.lanes |= n;
                                        break
                                    }
                                    p = p.next
                                }
                            } else if (o.tag === 10)
                                u = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (u = o.return,
                                u === null)
                                    throw Error(i(341));
                                u.lanes |= n,
                                s = u.alternate,
                                s !== null && (s.lanes |= n),
                                Fo(u, n, t),
                                u = o.sibling
                            } else
                                u = o.child;
                            if (u !== null)
                                u.return = o;
                            else
                                for (u = o; u !== null; ) {
                                    if (u === t) {
                                        u = null;
                                        break
                                    }
                                    if (o = u.sibling,
                                    o !== null) {
                                        o.return = u.return,
                                        u = o;
                                        break
                                    }
                                    u = u.return
                                }
                            o = u
                        }
                Qe(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type,
            r = t.pendingProps.children,
            xn(t, n),
            l = rt(l),
            r = r(l),
            t.flags |= 1,
            Qe(e, t, r, n),
            t.child;
        case 14:
            return r = t.type,
            l = ct(r, t.pendingProps),
            l = ct(r.type, l),
            ma(e, t, r, l, n);
        case 15:
            return ga(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type,
            l = t.pendingProps,
            l = t.elementType === r ? l : ct(r, l),
            ml(e, t),
            t.tag = 1,
            qe(r) ? (e = !0,
            Zr(t)) : e = !1,
            xn(t, n),
            ia(t, r, l),
            bo(t, r, l, n),
            ru(null, t, r, !0, e, n);
        case 19:
            return _a(e, t, n);
        case 22:
            return va(e, t, n)
        }
        throw Error(i(156, t.tag))
    }
    ;
    function Ga(e, t) {
        return Ri(e, t)
    }
    function Md(e, t, n, r) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function ut(e, t, n, r) {
        return new Md(e,t,n,r)
    }
    function Cu(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Id(e) {
        if (typeof e == "function")
            return Cu(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof,
            e === Y)
                return 11;
            if (e === Le)
                return 14
        }
        return 2
    }
    function Kt(e, t) {
        var n = e.alternate;
        return n === null ? (n = ut(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.type = e.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = e.flags & 14680064,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
    }
    function Nl(e, t, n, r, l, o) {
        var u = 2;
        if (r = e,
        typeof e == "function")
            Cu(e) && (u = 1);
        else if (typeof e == "string")
            u = 5;
        else
            e: switch (e) {
            case H:
                return un(n.children, l, o, t);
            case K:
                u = 8,
                l |= 8;
                break;
            case O:
                return e = ut(12, n, t, l | 2),
                e.elementType = O,
                e.lanes = o,
                e;
            case j:
                return e = ut(13, n, t, l),
                e.elementType = j,
                e.lanes = o,
                e;
            case b:
                return e = ut(19, n, t, l),
                e.elementType = b,
                e.lanes = o,
                e;
            case ke:
                return Rl(n, l, o, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case X:
                        u = 10;
                        break e;
                    case G:
                        u = 9;
                        break e;
                    case Y:
                        u = 11;
                        break e;
                    case Le:
                        u = 14;
                        break e;
                    case Te:
                        u = 16,
                        r = null;
                        break e
                    }
                throw Error(i(130, e == null ? e : typeof e, ""))
            }
        return t = ut(u, n, t, l),
        t.elementType = e,
        t.type = r,
        t.lanes = o,
        t
    }
    function un(e, t, n, r) {
        return e = ut(7, e, r, t),
        e.lanes = n,
        e
    }
    function Rl(e, t, n, r) {
        return e = ut(22, e, r, t),
        e.elementType = ke,
        e.lanes = n,
        e.stateNode = {
            isHidden: !1
        },
        e
    }
    function _u(e, t, n) {
        return e = ut(6, e, null, t),
        e.lanes = n,
        e
    }
    function Pu(e, t, n) {
        return t = ut(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    function Dd(e, t, n, r, l) {
        this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Zl(0),
        this.expirationTimes = Zl(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Zl(0),
        this.identifierPrefix = r,
        this.onRecoverableError = l,
        this.mutableSourceEagerHydrationData = null
    }
    function Nu(e, t, n, r, l, o, u, s, p) {
        return e = new Dd(e,t,n,s,p),
        t === 1 ? (t = 1,
        o === !0 && (t |= 8)) : t = 0,
        o = ut(3, null, null, t),
        e.current = o,
        o.stateNode = e,
        o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        Uo(o),
        e
    }
    function Bd(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: I,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }
    function Ja(e) {
        if (!e)
            return At;
        e = e._reactInternals;
        e: {
            if (Gt(e) !== e || e.tag !== 1)
                throw Error(i(170));
            var t = e;
            do {
                switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (qe(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                t = t.return
            } while (t !== null);
            throw Error(i(171))
        }
        if (e.tag === 1) {
            var n = e.type;
            if (qe(n))
                return Cs(e, n, t)
        }
        return t
    }
    function Xa(e, t, n, r, l, o, u, s, p) {
        return e = Nu(n, r, !0, e, l, o, u, s, p),
        e.context = Ja(null),
        n = e.current,
        r = We(),
        l = Qt(n),
        o = Pt(r, l),
        o.callback = t ?? null,
        Ut(n, o, l),
        e.current.lanes = l,
        Wn(e, l, r),
        Je(e, r),
        e
    }
    function Tl(e, t, n, r) {
        var l = t.current
          , o = We()
          , u = Qt(l);
        return n = Ja(n),
        t.context === null ? t.context = n : t.pendingContext = n,
        t = Pt(o, u),
        t.payload = {
            element: e
        },
        r = r === void 0 ? null : r,
        r !== null && (t.callback = r),
        e = Ut(l, t, u),
        e !== null && (pt(e, l, u, o),
        ol(e, l, u)),
        u
    }
    function xl(e) {
        return e = e.current,
        e.child ? (e.child.tag === 5,
        e.child.stateNode) : null
    }
    function Za(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }
    function Ru(e, t) {
        Za(e, t),
        (e = e.alternate) && Za(e, t)
    }
    function Ad() {
        return null
    }
    var $a = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    }
    ;
    function Tu(e) {
        this._internalRoot = e
    }
    Ll.prototype.render = Tu.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(i(409));
        Tl(e, t, null, null)
    }
    ,
    Ll.prototype.unmount = Tu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            rn(function() {
                Tl(null, e, null, null)
            }),
            t[St] = null
        }
    }
    ;
    function Ll(e) {
        this._internalRoot = e
    }
    Ll.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Bi();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++)
                ;
            zt.splice(n, 0, e),
            n === 0 && Oi(e)
        }
    }
    ;
    function xu(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function zl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }
    function ba() {}
    function Fd(e, t, n, r, l) {
        if (l) {
            if (typeof r == "function") {
                var o = r;
                r = function() {
                    var k = xl(u);
                    o.call(k)
                }
            }
            var u = Xa(t, r, e, 0, null, !1, !1, "", ba);
            return e._reactRootContainer = u,
            e[St] = u.current,
            lr(e.nodeType === 8 ? e.parentNode : e),
            rn(),
            u
        }
        for (; l = e.lastChild; )
            e.removeChild(l);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var k = xl(p);
                s.call(k)
            }
        }
        var p = Nu(e, 0, !1, null, null, !1, !1, "", ba);
        return e._reactRootContainer = p,
        e[St] = p.current,
        lr(e.nodeType === 8 ? e.parentNode : e),
        rn(function() {
            Tl(t, p, n, r)
        }),
        p
    }
    function Ml(e, t, n, r, l) {
        var o = n._reactRootContainer;
        if (o) {
            var u = o;
            if (typeof l == "function") {
                var s = l;
                l = function() {
                    var p = xl(u);
                    s.call(p)
                }
            }
            Tl(t, u, e, l)
        } else
            u = Fd(n, t, e, l, r);
        return xl(u)
    }
    Ii = function(e) {
        switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Qn(t.pendingLanes);
                n !== 0 && ($l(t, n | 1),
                Je(t, Ne()),
                (pe & 6) === 0 && (Dn = Ne() + 500,
                Ft()))
            }
            break;
        case 13:
            rn(function() {
                var r = _t(e, 1);
                if (r !== null) {
                    var l = We();
                    pt(r, e, 1, l)
                }
            }),
            Ru(e, 1)
        }
    }
    ,
    bl = function(e) {
        if (e.tag === 13) {
            var t = _t(e, 134217728);
            if (t !== null) {
                var n = We();
                pt(t, e, 134217728, n)
            }
            Ru(e, 134217728)
        }
    }
    ,
    Di = function(e) {
        if (e.tag === 13) {
            var t = Qt(e)
              , n = _t(e, t);
            if (n !== null) {
                var r = We();
                pt(n, e, t, r)
            }
            Ru(e, t)
        }
    }
    ,
    Bi = function() {
        return ve
    }
    ,
    Ai = function(e, t) {
        var n = ve;
        try {
            return ve = e,
            t()
        } finally {
            ve = n
        }
    }
    ,
    Kl = function(e, t, n) {
        switch (t) {
        case "input":
            if (Fl(e, n),
            t = n.name,
            n.type === "radio" && t != null) {
                for (n = e; n.parentNode; )
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = Jr(r);
                        if (!l)
                            throw Error(i(90));
                        ui(r),
                        Fl(r, l)
                    }
                }
            }
            break;
        case "textarea":
            fi(e, n);
            break;
        case "select":
            t = n.value,
            t != null && fn(e, !!n.multiple, t, !1)
        }
    }
    ,
    Si = Su,
    ki = rn;
    var Od = {
        usingClientEntryPoint: !1,
        Events: [ir, kn, Jr, yi, wi, Su]
    }
      , kr = {
        findFiberByHostInstance: Jt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , Ud = {
        bundleType: kr.bundleType,
        version: kr.version,
        rendererPackageName: kr.rendererPackageName,
        rendererConfig: kr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: W.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Pi(e),
            e === null ? null : e.stateNode
        },
        findFiberByHostInstance: kr.findFiberByHostInstance || Ad,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Il = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Il.isDisabled && Il.supportsFiber)
            try {
                Lr = Il.inject(Ud),
                ht = Il
            } catch {}
    }
    return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Od,
    Xe.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!xu(t))
            throw Error(i(200));
        return Bd(e, t, null, n)
    }
    ,
    Xe.createRoot = function(e, t) {
        if (!xu(e))
            throw Error(i(299));
        var n = !1
          , r = ""
          , l = $a;
        return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        t = Nu(e, 1, !1, null, null, n, !1, r, l),
        e[St] = t.current,
        lr(e.nodeType === 8 ? e.parentNode : e),
        new Tu(t)
    }
    ,
    Xe.findDOMNode = function(e) {
        if (e == null)
            return null;
        if (e.nodeType === 1)
            return e;
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","),
            Error(i(268, e)));
        return e = Pi(t),
        e = e === null ? null : e.stateNode,
        e
    }
    ,
    Xe.flushSync = function(e) {
        return rn(e)
    }
    ,
    Xe.hydrate = function(e, t, n) {
        if (!zl(t))
            throw Error(i(200));
        return Ml(null, e, t, !0, n)
    }
    ,
    Xe.hydrateRoot = function(e, t, n) {
        if (!xu(e))
            throw Error(i(405));
        var r = n != null && n.hydratedSources || null
          , l = !1
          , o = ""
          , u = $a;
        if (n != null && (n.unstable_strictMode === !0 && (l = !0),
        n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        t = Xa(t, null, e, 1, n ?? null, l, !1, o, u),
        e[St] = t.current,
        lr(e),
        r)
            for (e = 0; e < r.length; e++)
                n = r[e],
                l = n._getVersion,
                l = l(n._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
        return new Ll(t)
    }
    ,
    Xe.render = function(e, t, n) {
        if (!zl(t))
            throw Error(i(200));
        return Ml(null, e, t, !1, n)
    }
    ,
    Xe.unmountComponentAtNode = function(e) {
        if (!zl(e))
            throw Error(i(40));
        return e._reactRootContainer ? (rn(function() {
            Ml(null, null, e, !1, function() {
                e._reactRootContainer = null,
                e[St] = null
            })
        }),
        !0) : !1
    }
    ,
    Xe.unstable_batchedUpdates = Su,
    Xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!zl(n))
            throw Error(i(200));
        if (e == null || e._reactInternals === void 0)
            throw Error(i(38));
        return Ml(e, t, n, !1, r)
    }
    ,
    Xe.version = "18.3.1-next-f1338f8080-20240426",
    Xe
}
var ic;
function Jd() {
    if (ic)
        return Mu.exports;
    ic = 1;
    function f() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
            } catch (h) {
                console.error(h)
            }
    }
    return f(),
    Mu.exports = Gd(),
    Mu.exports
}
var sc;
function Xd() {
    if (sc)
        return Dl;
    sc = 1;
    var f = Jd();
    return Dl.createRoot = f.createRoot,
    Dl.hydrateRoot = f.hydrateRoot,
    Dl
}
var Tp = Xd();
const Zd = f => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , $d = f => f.replace(/^([A-Z])|[\s-_]+(\w)/g, (h, i, d) => d ? d.toUpperCase() : i.toLowerCase())
  , ac = f => {
    const h = $d(f);
    return h.charAt(0).toUpperCase() + h.slice(1)
}
  , Uc = (...f) => f.filter( (h, i, d) => !!h && h.trim() !== "" && d.indexOf(h) === i).join(" ").trim()
  , bd = f => {
    for (const h in f)
        if (h.startsWith("aria-") || h === "role" || h === "title")
            return !0
}
;
var ep = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const tp = sn.forwardRef( ({color: f="currentColor", size: h=24, strokeWidth: i=2, absoluteStrokeWidth: d, className: a="", children: c, iconNode: w, ...E}, S) => sn.createElement("svg", {
    ref: S,
    ...ep,
    width: h,
    height: h,
    stroke: f,
    strokeWidth: d ? Number(i) * 24 / Number(h) : i,
    className: Uc("lucide", a),
    ...!c && !bd(E) && {
        "aria-hidden": "true"
    },
    ...E
}, [...w.map( ([T,z]) => sn.createElement(T, z)), ...Array.isArray(c) ? c : [c]]));
const np = (f, h) => {
    const i = sn.forwardRef( ({className: d, ...a}, c) => sn.createElement(tp, {
        ref: c,
        iconNode: h,
        className: Uc(`lucide-${Zd(ac(f))}`, `lucide-${f}`, d),
        ...a
    }));
    return i.displayName = ac(f),
    i
}
;
const rp = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]
  , xp = np("circle-alert", rp);
var An = {}, Bu, cc;
function lp() {
    return cc || (cc = 1,
    Bu = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then
    }
    ),
    Bu
}
var Au = {}, Yt = {}, fc;
function an() {
    if (fc)
        return Yt;
    fc = 1;
    let f;
    const h = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
    return Yt.getSymbolSize = function(d) {
        if (!d)
            throw new Error('"version" cannot be null or undefined');
        if (d < 1 || d > 40)
            throw new Error('"version" should be in range from 1 to 40');
        return d * 4 + 17
    }
    ,
    Yt.getSymbolTotalCodewords = function(d) {
        return h[d]
    }
    ,
    Yt.getBCHDigit = function(i) {
        let d = 0;
        for (; i !== 0; )
            d++,
            i >>>= 1;
        return d
    }
    ,
    Yt.setToSJISFunction = function(d) {
        if (typeof d != "function")
            throw new Error('"toSJISFunc" is not a valid function.');
        f = d
    }
    ,
    Yt.isKanjiModeEnabled = function() {
        return typeof f < "u"
    }
    ,
    Yt.toSJIS = function(d) {
        return f(d)
    }
    ,
    Yt
}
var Fu = {}, dc;
function oi() {
    return dc || (dc = 1,
    (function(f) {
        f.L = {
            bit: 1
        },
        f.M = {
            bit: 0
        },
        f.Q = {
            bit: 3
        },
        f.H = {
            bit: 2
        };
        function h(i) {
            if (typeof i != "string")
                throw new Error("Param is not a string");
            switch (i.toLowerCase()) {
            case "l":
            case "low":
                return f.L;
            case "m":
            case "medium":
                return f.M;
            case "q":
            case "quartile":
                return f.Q;
            case "h":
            case "high":
                return f.H;
            default:
                throw new Error("Unknown EC Level: " + i)
            }
        }
        f.isValid = function(d) {
            return d && typeof d.bit < "u" && d.bit >= 0 && d.bit < 4
        }
        ,
        f.from = function(d, a) {
            if (f.isValid(d))
                return d;
            try {
                return h(d)
            } catch {
                return a
            }
        }
    }
    )(Fu)),
    Fu
}
var Ou, pc;
function op() {
    if (pc)
        return Ou;
    pc = 1;
    function f() {
        this.buffer = [],
        this.length = 0
    }
    return f.prototype = {
        get: function(h) {
            const i = Math.floor(h / 8);
            return (this.buffer[i] >>> 7 - h % 8 & 1) === 1
        },
        put: function(h, i) {
            for (let d = 0; d < i; d++)
                this.putBit((h >>> i - d - 1 & 1) === 1)
        },
        getLengthInBits: function() {
            return this.length
        },
        putBit: function(h) {
            const i = Math.floor(this.length / 8);
            this.buffer.length <= i && this.buffer.push(0),
            h && (this.buffer[i] |= 128 >>> this.length % 8),
            this.length++
        }
    },
    Ou = f,
    Ou
}
var Uu, hc;
function up() {
    if (hc)
        return Uu;
    hc = 1;
    function f(h) {
        if (!h || h < 1)
            throw new Error("BitMatrix size must be defined and greater than 0");
        this.size = h,
        this.data = new Uint8Array(h * h),
        this.reservedBit = new Uint8Array(h * h)
    }
    return f.prototype.set = function(h, i, d, a) {
        const c = h * this.size + i;
        this.data[c] = d,
        a && (this.reservedBit[c] = !0)
    }
    ,
    f.prototype.get = function(h, i) {
        return this.data[h * this.size + i]
    }
    ,
    f.prototype.xor = function(h, i, d) {
        this.data[h * this.size + i] ^= d
    }
    ,
    f.prototype.isReserved = function(h, i) {
        return this.reservedBit[h * this.size + i]
    }
    ,
    Uu = f,
    Uu
}
var ju = {}, mc;
function ip() {
    return mc || (mc = 1,
    (function(f) {
        const h = an().getSymbolSize;
        f.getRowColCoords = function(d) {
            if (d === 1)
                return [];
            const a = Math.floor(d / 7) + 2
              , c = h(d)
              , w = c === 145 ? 26 : Math.ceil((c - 13) / (2 * a - 2)) * 2
              , E = [c - 7];
            for (let S = 1; S < a - 1; S++)
                E[S] = E[S - 1] - w;
            return E.push(6),
            E.reverse()
        }
        ,
        f.getPositions = function(d) {
            const a = []
              , c = f.getRowColCoords(d)
              , w = c.length;
            for (let E = 0; E < w; E++)
                for (let S = 0; S < w; S++)
                    E === 0 && S === 0 || E === 0 && S === w - 1 || E === w - 1 && S === 0 || a.push([c[E], c[S]]);
            return a
        }
    }
    )(ju)),
    ju
}
var Vu = {}, gc;
function sp() {
    if (gc)
        return Vu;
    gc = 1;
    const f = an().getSymbolSize
      , h = 7;
    return Vu.getPositions = function(d) {
        const a = f(d);
        return [[0, 0], [a - h, 0], [0, a - h]]
    }
    ,
    Vu
}
var Hu = {}, vc;
function ap() {
    return vc || (vc = 1,
    (function(f) {
        f.Patterns = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        };
        const h = {
            N1: 3,
            N2: 3,
            N3: 40,
            N4: 10
        };
        f.isValid = function(a) {
            return a != null && a !== "" && !isNaN(a) && a >= 0 && a <= 7
        }
        ,
        f.from = function(a) {
            return f.isValid(a) ? parseInt(a, 10) : void 0
        }
        ,
        f.getPenaltyN1 = function(a) {
            const c = a.size;
            let w = 0
              , E = 0
              , S = 0
              , T = null
              , z = null;
            for (let A = 0; A < c; A++) {
                E = S = 0,
                T = z = null;
                for (let L = 0; L < c; L++) {
                    let M = a.get(A, L);
                    M === T ? E++ : (E >= 5 && (w += h.N1 + (E - 5)),
                    T = M,
                    E = 1),
                    M = a.get(L, A),
                    M === z ? S++ : (S >= 5 && (w += h.N1 + (S - 5)),
                    z = M,
                    S = 1)
                }
                E >= 5 && (w += h.N1 + (E - 5)),
                S >= 5 && (w += h.N1 + (S - 5))
            }
            return w
        }
        ,
        f.getPenaltyN2 = function(a) {
            const c = a.size;
            let w = 0;
            for (let E = 0; E < c - 1; E++)
                for (let S = 0; S < c - 1; S++) {
                    const T = a.get(E, S) + a.get(E, S + 1) + a.get(E + 1, S) + a.get(E + 1, S + 1);
                    (T === 4 || T === 0) && w++
                }
            return w * h.N2
        }
        ,
        f.getPenaltyN3 = function(a) {
            const c = a.size;
            let w = 0
              , E = 0
              , S = 0;
            for (let T = 0; T < c; T++) {
                E = S = 0;
                for (let z = 0; z < c; z++)
                    E = E << 1 & 2047 | a.get(T, z),
                    z >= 10 && (E === 1488 || E === 93) && w++,
                    S = S << 1 & 2047 | a.get(z, T),
                    z >= 10 && (S === 1488 || S === 93) && w++
            }
            return w * h.N3
        }
        ,
        f.getPenaltyN4 = function(a) {
            let c = 0;
            const w = a.data.length;
            for (let S = 0; S < w; S++)
                c += a.data[S];
            return Math.abs(Math.ceil(c * 100 / w / 5) - 10) * h.N4
        }
        ;
        function i(d, a, c) {
            switch (d) {
            case f.Patterns.PATTERN000:
                return (a + c) % 2 === 0;
            case f.Patterns.PATTERN001:
                return a % 2 === 0;
            case f.Patterns.PATTERN010:
                return c % 3 === 0;
            case f.Patterns.PATTERN011:
                return (a + c) % 3 === 0;
            case f.Patterns.PATTERN100:
                return (Math.floor(a / 2) + Math.floor(c / 3)) % 2 === 0;
            case f.Patterns.PATTERN101:
                return a * c % 2 + a * c % 3 === 0;
            case f.Patterns.PATTERN110:
                return (a * c % 2 + a * c % 3) % 2 === 0;
            case f.Patterns.PATTERN111:
                return (a * c % 3 + (a + c) % 2) % 2 === 0;
            default:
                throw new Error("bad maskPattern:" + d)
            }
        }
        f.applyMask = function(a, c) {
            const w = c.size;
            for (let E = 0; E < w; E++)
                for (let S = 0; S < w; S++)
                    c.isReserved(S, E) || c.xor(S, E, i(a, S, E))
        }
        ,
        f.getBestMask = function(a, c) {
            const w = Object.keys(f.Patterns).length;
            let E = 0
              , S = 1 / 0;
            for (let T = 0; T < w; T++) {
                c(T),
                f.applyMask(T, a);
                const z = f.getPenaltyN1(a) + f.getPenaltyN2(a) + f.getPenaltyN3(a) + f.getPenaltyN4(a);
                f.applyMask(T, a),
                z < S && (S = z,
                E = T)
            }
            return E
        }
    }
    )(Hu)),
    Hu
}
var Bl = {}, yc;
function jc() {
    if (yc)
        return Bl;
    yc = 1;
    const f = oi()
      , h = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81]
      , i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
    return Bl.getBlocksCount = function(a, c) {
        switch (c) {
        case f.L:
            return h[(a - 1) * 4 + 0];
        case f.M:
            return h[(a - 1) * 4 + 1];
        case f.Q:
            return h[(a - 1) * 4 + 2];
        case f.H:
            return h[(a - 1) * 4 + 3];
        default:
            return
        }
    }
    ,
    Bl.getTotalCodewordsCount = function(a, c) {
        switch (c) {
        case f.L:
            return i[(a - 1) * 4 + 0];
        case f.M:
            return i[(a - 1) * 4 + 1];
        case f.Q:
            return i[(a - 1) * 4 + 2];
        case f.H:
            return i[(a - 1) * 4 + 3];
        default:
            return
        }
    }
    ,
    Bl
}
var Qu = {}, Cr = {}, wc;
function cp() {
    if (wc)
        return Cr;
    wc = 1;
    const f = new Uint8Array(512)
      , h = new Uint8Array(256);
    return (function() {
        let d = 1;
        for (let a = 0; a < 255; a++)
            f[a] = d,
            h[d] = a,
            d <<= 1,
            d & 256 && (d ^= 285);
        for (let a = 255; a < 512; a++)
            f[a] = f[a - 255]
    }
    )(),
    Cr.log = function(d) {
        if (d < 1)
            throw new Error("log(" + d + ")");
        return h[d]
    }
    ,
    Cr.exp = function(d) {
        return f[d]
    }
    ,
    Cr.mul = function(d, a) {
        return d === 0 || a === 0 ? 0 : f[h[d] + h[a]]
    }
    ,
    Cr
}
var Sc;
function fp() {
    return Sc || (Sc = 1,
    (function(f) {
        const h = cp();
        f.mul = function(d, a) {
            const c = new Uint8Array(d.length + a.length - 1);
            for (let w = 0; w < d.length; w++)
                for (let E = 0; E < a.length; E++)
                    c[w + E] ^= h.mul(d[w], a[E]);
            return c
        }
        ,
        f.mod = function(d, a) {
            let c = new Uint8Array(d);
            for (; c.length - a.length >= 0; ) {
                const w = c[0];
                for (let S = 0; S < a.length; S++)
                    c[S] ^= h.mul(a[S], w);
                let E = 0;
                for (; E < c.length && c[E] === 0; )
                    E++;
                c = c.slice(E)
            }
            return c
        }
        ,
        f.generateECPolynomial = function(d) {
            let a = new Uint8Array([1]);
            for (let c = 0; c < d; c++)
                a = f.mul(a, new Uint8Array([1, h.exp(c)]));
            return a
        }
    }
    )(Qu)),
    Qu
}
var Wu, kc;
function dp() {
    if (kc)
        return Wu;
    kc = 1;
    const f = fp();
    function h(i) {
        this.genPoly = void 0,
        this.degree = i,
        this.degree && this.initialize(this.degree)
    }
    return h.prototype.initialize = function(d) {
        this.degree = d,
        this.genPoly = f.generateECPolynomial(this.degree)
    }
    ,
    h.prototype.encode = function(d) {
        if (!this.genPoly)
            throw new Error("Encoder not initialized");
        const a = new Uint8Array(d.length + this.degree);
        a.set(d);
        const c = f.mod(a, this.genPoly)
          , w = this.degree - c.length;
        if (w > 0) {
            const E = new Uint8Array(this.degree);
            return E.set(c, w),
            E
        }
        return c
    }
    ,
    Wu = h,
    Wu
}
var Ku = {}, qu = {}, Yu = {}, Ec;
function Vc() {
    return Ec || (Ec = 1,
    Yu.isValid = function(h) {
        return !isNaN(h) && h >= 1 && h <= 40
    }
    ),
    Yu
}
var wt = {}, Cc;
function Hc() {
    if (Cc)
        return wt;
    Cc = 1;
    const f = "[0-9]+"
      , h = "[A-Z $%*+\\-./:]+";
    let i = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    i = i.replace(/u/g, "\\u");
    const d = "(?:(?![A-Z0-9 $%*+\\-./:]|" + i + `)(?:.|[\r
]))+`;
    wt.KANJI = new RegExp(i,"g"),
    wt.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),
    wt.BYTE = new RegExp(d,"g"),
    wt.NUMERIC = new RegExp(f,"g"),
    wt.ALPHANUMERIC = new RegExp(h,"g");
    const a = new RegExp("^" + i + "$")
      , c = new RegExp("^" + f + "$")
      , w = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    return wt.testKanji = function(S) {
        return a.test(S)
    }
    ,
    wt.testNumeric = function(S) {
        return c.test(S)
    }
    ,
    wt.testAlphanumeric = function(S) {
        return w.test(S)
    }
    ,
    wt
}
var _c;
function cn() {
    return _c || (_c = 1,
    (function(f) {
        const h = Vc()
          , i = Hc();
        f.NUMERIC = {
            id: "Numeric",
            bit: 1,
            ccBits: [10, 12, 14]
        },
        f.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13]
        },
        f.BYTE = {
            id: "Byte",
            bit: 4,
            ccBits: [8, 16, 16]
        },
        f.KANJI = {
            id: "Kanji",
            bit: 8,
            ccBits: [8, 10, 12]
        },
        f.MIXED = {
            bit: -1
        },
        f.getCharCountIndicator = function(c, w) {
            if (!c.ccBits)
                throw new Error("Invalid mode: " + c);
            if (!h.isValid(w))
                throw new Error("Invalid version: " + w);
            return w >= 1 && w < 10 ? c.ccBits[0] : w < 27 ? c.ccBits[1] : c.ccBits[2]
        }
        ,
        f.getBestModeForData = function(c) {
            return i.testNumeric(c) ? f.NUMERIC : i.testAlphanumeric(c) ? f.ALPHANUMERIC : i.testKanji(c) ? f.KANJI : f.BYTE
        }
        ,
        f.toString = function(c) {
            if (c && c.id)
                return c.id;
            throw new Error("Invalid mode")
        }
        ,
        f.isValid = function(c) {
            return c && c.bit && c.ccBits
        }
        ;
        function d(a) {
            if (typeof a != "string")
                throw new Error("Param is not a string");
            switch (a.toLowerCase()) {
            case "numeric":
                return f.NUMERIC;
            case "alphanumeric":
                return f.ALPHANUMERIC;
            case "kanji":
                return f.KANJI;
            case "byte":
                return f.BYTE;
            default:
                throw new Error("Unknown mode: " + a)
            }
        }
        f.from = function(c, w) {
            if (f.isValid(c))
                return c;
            try {
                return d(c)
            } catch {
                return w
            }
        }
    }
    )(qu)),
    qu
}
var Pc;
function pp() {
    return Pc || (Pc = 1,
    (function(f) {
        const h = an()
          , i = jc()
          , d = oi()
          , a = cn()
          , c = Vc()
          , w = 7973
          , E = h.getBCHDigit(w);
        function S(L, M, Z) {
            for (let V = 1; V <= 40; V++)
                if (M <= f.getCapacity(V, Z, L))
                    return V
        }
        function T(L, M) {
            return a.getCharCountIndicator(L, M) + 4
        }
        function z(L, M) {
            let Z = 0;
            return L.forEach(function(V) {
                const re = T(V.mode, M);
                Z += re + V.getBitsLength()
            }),
            Z
        }
        function A(L, M) {
            for (let Z = 1; Z <= 40; Z++)
                if (z(L, Z) <= f.getCapacity(Z, M, a.MIXED))
                    return Z
        }
        f.from = function(M, Z) {
            return c.isValid(M) ? parseInt(M, 10) : Z
        }
        ,
        f.getCapacity = function(M, Z, V) {
            if (!c.isValid(M))
                throw new Error("Invalid QR Code version");
            typeof V > "u" && (V = a.BYTE);
            const re = h.getSymbolTotalCodewords(M)
              , $ = i.getTotalCodewordsCount(M, Z)
              , oe = (re - $) * 8;
            if (V === a.MIXED)
                return oe;
            const J = oe - T(V, M);
            switch (V) {
            case a.NUMERIC:
                return Math.floor(J / 10 * 3);
            case a.ALPHANUMERIC:
                return Math.floor(J / 11 * 2);
            case a.KANJI:
                return Math.floor(J / 13);
            case a.BYTE:
            default:
                return Math.floor(J / 8)
            }
        }
        ,
        f.getBestVersionForData = function(M, Z) {
            let V;
            const re = d.from(Z, d.M);
            if (Array.isArray(M)) {
                if (M.length > 1)
                    return A(M, re);
                if (M.length === 0)
                    return 1;
                V = M[0]
            } else
                V = M;
            return S(V.mode, V.getLength(), re)
        }
        ,
        f.getEncodedBits = function(M) {
            if (!c.isValid(M) || M < 7)
                throw new Error("Invalid QR Code version");
            let Z = M << 12;
            for (; h.getBCHDigit(Z) - E >= 0; )
                Z ^= w << h.getBCHDigit(Z) - E;
            return M << 12 | Z
        }
    }
    )(Ku)),
    Ku
}
var Gu = {}, Nc;
function hp() {
    if (Nc)
        return Gu;
    Nc = 1;
    const f = an()
      , h = 1335
      , i = 21522
      , d = f.getBCHDigit(h);
    return Gu.getEncodedBits = function(c, w) {
        const E = c.bit << 3 | w;
        let S = E << 10;
        for (; f.getBCHDigit(S) - d >= 0; )
            S ^= h << f.getBCHDigit(S) - d;
        return (E << 10 | S) ^ i
    }
    ,
    Gu
}
var Ju = {}, Xu, Rc;
function mp() {
    if (Rc)
        return Xu;
    Rc = 1;
    const f = cn();
    function h(i) {
        this.mode = f.NUMERIC,
        this.data = i.toString()
    }
    return h.getBitsLength = function(d) {
        return 10 * Math.floor(d / 3) + (d % 3 ? d % 3 * 3 + 1 : 0)
    }
    ,
    h.prototype.getLength = function() {
        return this.data.length
    }
    ,
    h.prototype.getBitsLength = function() {
        return h.getBitsLength(this.data.length)
    }
    ,
    h.prototype.write = function(d) {
        let a, c, w;
        for (a = 0; a + 3 <= this.data.length; a += 3)
            c = this.data.substr(a, 3),
            w = parseInt(c, 10),
            d.put(w, 10);
        const E = this.data.length - a;
        E > 0 && (c = this.data.substr(a),
        w = parseInt(c, 10),
        d.put(w, E * 3 + 1))
    }
    ,
    Xu = h,
    Xu
}
var Zu, Tc;
function gp() {
    if (Tc)
        return Zu;
    Tc = 1;
    const f = cn()
      , h = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
    function i(d) {
        this.mode = f.ALPHANUMERIC,
        this.data = d
    }
    return i.getBitsLength = function(a) {
        return 11 * Math.floor(a / 2) + 6 * (a % 2)
    }
    ,
    i.prototype.getLength = function() {
        return this.data.length
    }
    ,
    i.prototype.getBitsLength = function() {
        return i.getBitsLength(this.data.length)
    }
    ,
    i.prototype.write = function(a) {
        let c;
        for (c = 0; c + 2 <= this.data.length; c += 2) {
            let w = h.indexOf(this.data[c]) * 45;
            w += h.indexOf(this.data[c + 1]),
            a.put(w, 11)
        }
        this.data.length % 2 && a.put(h.indexOf(this.data[c]), 6)
    }
    ,
    Zu = i,
    Zu
}
var $u, xc;
function vp() {
    if (xc)
        return $u;
    xc = 1;
    const f = cn();
    function h(i) {
        this.mode = f.BYTE,
        typeof i == "string" ? this.data = new TextEncoder().encode(i) : this.data = new Uint8Array(i)
    }
    return h.getBitsLength = function(d) {
        return d * 8
    }
    ,
    h.prototype.getLength = function() {
        return this.data.length
    }
    ,
    h.prototype.getBitsLength = function() {
        return h.getBitsLength(this.data.length)
    }
    ,
    h.prototype.write = function(i) {
        for (let d = 0, a = this.data.length; d < a; d++)
            i.put(this.data[d], 8)
    }
    ,
    $u = h,
    $u
}
var bu, Lc;
function yp() {
    if (Lc)
        return bu;
    Lc = 1;
    const f = cn()
      , h = an();
    function i(d) {
        this.mode = f.KANJI,
        this.data = d
    }
    return i.getBitsLength = function(a) {
        return a * 13
    }
    ,
    i.prototype.getLength = function() {
        return this.data.length
    }
    ,
    i.prototype.getBitsLength = function() {
        return i.getBitsLength(this.data.length)
    }
    ,
    i.prototype.write = function(d) {
        let a;
        for (a = 0; a < this.data.length; a++) {
            let c = h.toSJIS(this.data[a]);
            if (c >= 33088 && c <= 40956)
                c -= 33088;
            else if (c >= 57408 && c <= 60351)
                c -= 49472;
            else
                throw new Error("Invalid SJIS character: " + this.data[a] + `
Make sure your charset is UTF-8`);
            c = (c >>> 8 & 255) * 192 + (c & 255),
            d.put(c, 13)
        }
    }
    ,
    bu = i,
    bu
}
var ei = {
    exports: {}
}, zc;
function wp() {
    return zc || (zc = 1,
    (function(f) {
        var h = {
            single_source_shortest_paths: function(i, d, a) {
                var c = {}
                  , w = {};
                w[d] = 0;
                var E = h.PriorityQueue.make();
                E.push(d, 0);
                for (var S, T, z, A, L, M, Z, V, re; !E.empty(); ) {
                    S = E.pop(),
                    T = S.value,
                    A = S.cost,
                    L = i[T] || {};
                    for (z in L)
                        L.hasOwnProperty(z) && (M = L[z],
                        Z = A + M,
                        V = w[z],
                        re = typeof w[z] > "u",
                        (re || V > Z) && (w[z] = Z,
                        E.push(z, Z),
                        c[z] = T))
                }
                if (typeof a < "u" && typeof w[a] > "u") {
                    var $ = ["Could not find a path from ", d, " to ", a, "."].join("");
                    throw new Error($)
                }
                return c
            },
            extract_shortest_path_from_predecessor_list: function(i, d) {
                for (var a = [], c = d; c; )
                    a.push(c),
                    i[c],
                    c = i[c];
                return a.reverse(),
                a
            },
            find_path: function(i, d, a) {
                var c = h.single_source_shortest_paths(i, d, a);
                return h.extract_shortest_path_from_predecessor_list(c, a)
            },
            PriorityQueue: {
                make: function(i) {
                    var d = h.PriorityQueue, a = {}, c;
                    i = i || {};
                    for (c in d)
                        d.hasOwnProperty(c) && (a[c] = d[c]);
                    return a.queue = [],
                    a.sorter = i.sorter || d.default_sorter,
                    a
                },
                default_sorter: function(i, d) {
                    return i.cost - d.cost
                },
                push: function(i, d) {
                    var a = {
                        value: i,
                        cost: d
                    };
                    this.queue.push(a),
                    this.queue.sort(this.sorter)
                },
                pop: function() {
                    return this.queue.shift()
                },
                empty: function() {
                    return this.queue.length === 0
                }
            }
        };
        f.exports = h
    }
    )(ei)),
    ei.exports
}
var Mc;
function Sp() {
    return Mc || (Mc = 1,
    (function(f) {
        const h = cn()
          , i = mp()
          , d = gp()
          , a = vp()
          , c = yp()
          , w = Hc()
          , E = an()
          , S = wp();
        function T($) {
            return unescape(encodeURIComponent($)).length
        }
        function z($, oe, J) {
            const W = [];
            let ge;
            for (; (ge = $.exec(J)) !== null; )
                W.push({
                    data: ge[0],
                    index: ge.index,
                    mode: oe,
                    length: ge[0].length
                });
            return W
        }
        function A($) {
            const oe = z(w.NUMERIC, h.NUMERIC, $)
              , J = z(w.ALPHANUMERIC, h.ALPHANUMERIC, $);
            let W, ge;
            return E.isKanjiModeEnabled() ? (W = z(w.BYTE, h.BYTE, $),
            ge = z(w.KANJI, h.KANJI, $)) : (W = z(w.BYTE_KANJI, h.BYTE, $),
            ge = []),
            oe.concat(J, W, ge).sort(function(H, K) {
                return H.index - K.index
            }).map(function(H) {
                return {
                    data: H.data,
                    mode: H.mode,
                    length: H.length
                }
            })
        }
        function L($, oe) {
            switch (oe) {
            case h.NUMERIC:
                return i.getBitsLength($);
            case h.ALPHANUMERIC:
                return d.getBitsLength($);
            case h.KANJI:
                return c.getBitsLength($);
            case h.BYTE:
                return a.getBitsLength($)
            }
        }
        function M($) {
            return $.reduce(function(oe, J) {
                const W = oe.length - 1 >= 0 ? oe[oe.length - 1] : null;
                return W && W.mode === J.mode ? (oe[oe.length - 1].data += J.data,
                oe) : (oe.push(J),
                oe)
            }, [])
        }
        function Z($) {
            const oe = [];
            for (let J = 0; J < $.length; J++) {
                const W = $[J];
                switch (W.mode) {
                case h.NUMERIC:
                    oe.push([W, {
                        data: W.data,
                        mode: h.ALPHANUMERIC,
                        length: W.length
                    }, {
                        data: W.data,
                        mode: h.BYTE,
                        length: W.length
                    }]);
                    break;
                case h.ALPHANUMERIC:
                    oe.push([W, {
                        data: W.data,
                        mode: h.BYTE,
                        length: W.length
                    }]);
                    break;
                case h.KANJI:
                    oe.push([W, {
                        data: W.data,
                        mode: h.BYTE,
                        length: T(W.data)
                    }]);
                    break;
                case h.BYTE:
                    oe.push([{
                        data: W.data,
                        mode: h.BYTE,
                        length: T(W.data)
                    }])
                }
            }
            return oe
        }
        function V($, oe) {
            const J = {}
              , W = {
                start: {}
            };
            let ge = ["start"];
            for (let I = 0; I < $.length; I++) {
                const H = $[I]
                  , K = [];
                for (let O = 0; O < H.length; O++) {
                    const X = H[O]
                      , G = "" + I + O;
                    K.push(G),
                    J[G] = {
                        node: X,
                        lastCount: 0
                    },
                    W[G] = {};
                    for (let Y = 0; Y < ge.length; Y++) {
                        const j = ge[Y];
                        J[j] && J[j].node.mode === X.mode ? (W[j][G] = L(J[j].lastCount + X.length, X.mode) - L(J[j].lastCount, X.mode),
                        J[j].lastCount += X.length) : (J[j] && (J[j].lastCount = X.length),
                        W[j][G] = L(X.length, X.mode) + 4 + h.getCharCountIndicator(X.mode, oe))
                    }
                }
                ge = K
            }
            for (let I = 0; I < ge.length; I++)
                W[ge[I]].end = 0;
            return {
                map: W,
                table: J
            }
        }
        function re($, oe) {
            let J;
            const W = h.getBestModeForData($);
            if (J = h.from(oe, W),
            J !== h.BYTE && J.bit < W.bit)
                throw new Error('"' + $ + '" cannot be encoded with mode ' + h.toString(J) + `.
 Suggested mode is: ` + h.toString(W));
            switch (J === h.KANJI && !E.isKanjiModeEnabled() && (J = h.BYTE),
            J) {
            case h.NUMERIC:
                return new i($);
            case h.ALPHANUMERIC:
                return new d($);
            case h.KANJI:
                return new c($);
            case h.BYTE:
                return new a($)
            }
        }
        f.fromArray = function(oe) {
            return oe.reduce(function(J, W) {
                return typeof W == "string" ? J.push(re(W, null)) : W.data && J.push(re(W.data, W.mode)),
                J
            }, [])
        }
        ,
        f.fromString = function(oe, J) {
            const W = A(oe, E.isKanjiModeEnabled())
              , ge = Z(W)
              , I = V(ge, J)
              , H = S.find_path(I.map, "start", "end")
              , K = [];
            for (let O = 1; O < H.length - 1; O++)
                K.push(I.table[H[O]].node);
            return f.fromArray(M(K))
        }
        ,
        f.rawSplit = function(oe) {
            return f.fromArray(A(oe, E.isKanjiModeEnabled()))
        }
    }
    )(Ju)),
    Ju
}
var Ic;
function kp() {
    if (Ic)
        return Au;
    Ic = 1;
    const f = an()
      , h = oi()
      , i = op()
      , d = up()
      , a = ip()
      , c = sp()
      , w = ap()
      , E = jc()
      , S = dp()
      , T = pp()
      , z = hp()
      , A = cn()
      , L = Sp();
    function M(I, H) {
        const K = I.size
          , O = c.getPositions(H);
        for (let X = 0; X < O.length; X++) {
            const G = O[X][0]
              , Y = O[X][1];
            for (let j = -1; j <= 7; j++)
                if (!(G + j <= -1 || K <= G + j))
                    for (let b = -1; b <= 7; b++)
                        Y + b <= -1 || K <= Y + b || (j >= 0 && j <= 6 && (b === 0 || b === 6) || b >= 0 && b <= 6 && (j === 0 || j === 6) || j >= 2 && j <= 4 && b >= 2 && b <= 4 ? I.set(G + j, Y + b, !0, !0) : I.set(G + j, Y + b, !1, !0))
        }
    }
    function Z(I) {
        const H = I.size;
        for (let K = 8; K < H - 8; K++) {
            const O = K % 2 === 0;
            I.set(K, 6, O, !0),
            I.set(6, K, O, !0)
        }
    }
    function V(I, H) {
        const K = a.getPositions(H);
        for (let O = 0; O < K.length; O++) {
            const X = K[O][0]
              , G = K[O][1];
            for (let Y = -2; Y <= 2; Y++)
                for (let j = -2; j <= 2; j++)
                    Y === -2 || Y === 2 || j === -2 || j === 2 || Y === 0 && j === 0 ? I.set(X + Y, G + j, !0, !0) : I.set(X + Y, G + j, !1, !0)
        }
    }
    function re(I, H) {
        const K = I.size
          , O = T.getEncodedBits(H);
        let X, G, Y;
        for (let j = 0; j < 18; j++)
            X = Math.floor(j / 3),
            G = j % 3 + K - 8 - 3,
            Y = (O >> j & 1) === 1,
            I.set(X, G, Y, !0),
            I.set(G, X, Y, !0)
    }
    function $(I, H, K) {
        const O = I.size
          , X = z.getEncodedBits(H, K);
        let G, Y;
        for (G = 0; G < 15; G++)
            Y = (X >> G & 1) === 1,
            G < 6 ? I.set(G, 8, Y, !0) : G < 8 ? I.set(G + 1, 8, Y, !0) : I.set(O - 15 + G, 8, Y, !0),
            G < 8 ? I.set(8, O - G - 1, Y, !0) : G < 9 ? I.set(8, 15 - G - 1 + 1, Y, !0) : I.set(8, 15 - G - 1, Y, !0);
        I.set(O - 8, 8, 1, !0)
    }
    function oe(I, H) {
        const K = I.size;
        let O = -1
          , X = K - 1
          , G = 7
          , Y = 0;
        for (let j = K - 1; j > 0; j -= 2)
            for (j === 6 && j--; ; ) {
                for (let b = 0; b < 2; b++)
                    if (!I.isReserved(X, j - b)) {
                        let Le = !1;
                        Y < H.length && (Le = (H[Y] >>> G & 1) === 1),
                        I.set(X, j - b, Le),
                        G--,
                        G === -1 && (Y++,
                        G = 7)
                    }
                if (X += O,
                X < 0 || K <= X) {
                    X -= O,
                    O = -O;
                    break
                }
            }
    }
    function J(I, H, K) {
        const O = new i;
        K.forEach(function(b) {
            O.put(b.mode.bit, 4),
            O.put(b.getLength(), A.getCharCountIndicator(b.mode, I)),
            b.write(O)
        });
        const X = f.getSymbolTotalCodewords(I)
          , G = E.getTotalCodewordsCount(I, H)
          , Y = (X - G) * 8;
        for (O.getLengthInBits() + 4 <= Y && O.put(0, 4); O.getLengthInBits() % 8 !== 0; )
            O.putBit(0);
        const j = (Y - O.getLengthInBits()) / 8;
        for (let b = 0; b < j; b++)
            O.put(b % 2 ? 17 : 236, 8);
        return W(O, I, H)
    }
    function W(I, H, K) {
        const O = f.getSymbolTotalCodewords(H)
          , X = E.getTotalCodewordsCount(H, K)
          , G = O - X
          , Y = E.getBlocksCount(H, K)
          , j = O % Y
          , b = Y - j
          , Le = Math.floor(O / Y)
          , Te = Math.floor(G / Y)
          , ke = Te + 1
          , x = Le - Te
          , ne = new S(x);
        let B = 0;
        const g = new Array(Y)
          , C = new Array(Y);
        let ue = 0;
        const ie = new Uint8Array(I.buffer);
        for (let me = 0; me < Y; me++) {
            const Ae = me < b ? Te : ke;
            g[me] = ie.slice(B, B + Ae),
            C[me] = ne.encode(g[me]),
            B += Ae,
            ue = Math.max(ue, Ae)
        }
        const ce = new Uint8Array(O);
        let de = 0, fe, se;
        for (fe = 0; fe < ue; fe++)
            for (se = 0; se < Y; se++)
                fe < g[se].length && (ce[de++] = g[se][fe]);
        for (fe = 0; fe < x; fe++)
            for (se = 0; se < Y; se++)
                ce[de++] = C[se][fe];
        return ce
    }
    function ge(I, H, K, O) {
        let X;
        if (Array.isArray(I))
            X = L.fromArray(I);
        else if (typeof I == "string") {
            let Le = H;
            if (!Le) {
                const Te = L.rawSplit(I);
                Le = T.getBestVersionForData(Te, K)
            }
            X = L.fromString(I, Le || 40)
        } else
            throw new Error("Invalid data");
        const G = T.getBestVersionForData(X, K);
        if (!G)
            throw new Error("The amount of data is too big to be stored in a QR Code");
        if (!H)
            H = G;
        else if (H < G)
            throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + G + `.
`);
        const Y = J(H, K, X)
          , j = f.getSymbolSize(H)
          , b = new d(j);
        return M(b, H),
        Z(b),
        V(b, H),
        $(b, K, 0),
        H >= 7 && re(b, H),
        oe(b, Y),
        isNaN(O) && (O = w.getBestMask(b, $.bind(null, b, K))),
        w.applyMask(O, b),
        $(b, K, O),
        {
            modules: b,
            version: H,
            errorCorrectionLevel: K,
            maskPattern: O,
            segments: X
        }
    }
    return Au.create = function(H, K) {
        if (typeof H > "u" || H === "")
            throw new Error("No input text");
        let O = h.M, X, G;
        return typeof K < "u" && (O = h.from(K.errorCorrectionLevel, h.M),
        X = T.from(K.version),
        G = w.from(K.maskPattern),
        K.toSJISFunc && f.setToSJISFunction(K.toSJISFunc)),
        ge(H, X, O, G)
    }
    ,
    Au
}
var ti = {}, ni = {}, Dc;
function Qc() {
    return Dc || (Dc = 1,
    (function(f) {
        function h(i) {
            if (typeof i == "number" && (i = i.toString()),
            typeof i != "string")
                throw new Error("Color should be defined as hex string");
            let d = i.slice().replace("#", "").split("");
            if (d.length < 3 || d.length === 5 || d.length > 8)
                throw new Error("Invalid hex color: " + i);
            (d.length === 3 || d.length === 4) && (d = Array.prototype.concat.apply([], d.map(function(c) {
                return [c, c]
            }))),
            d.length === 6 && d.push("F", "F");
            const a = parseInt(d.join(""), 16);
            return {
                r: a >> 24 & 255,
                g: a >> 16 & 255,
                b: a >> 8 & 255,
                a: a & 255,
                hex: "#" + d.slice(0, 6).join("")
            }
        }
        f.getOptions = function(d) {
            d || (d = {}),
            d.color || (d.color = {});
            const a = typeof d.margin > "u" || d.margin === null || d.margin < 0 ? 4 : d.margin
              , c = d.width && d.width >= 21 ? d.width : void 0
              , w = d.scale || 4;
            return {
                width: c,
                scale: c ? 4 : w,
                margin: a,
                color: {
                    dark: h(d.color.dark || "#000000ff"),
                    light: h(d.color.light || "#ffffffff")
                },
                type: d.type,
                rendererOpts: d.rendererOpts || {}
            }
        }
        ,
        f.getScale = function(d, a) {
            return a.width && a.width >= d + a.margin * 2 ? a.width / (d + a.margin * 2) : a.scale
        }
        ,
        f.getImageWidth = function(d, a) {
            const c = f.getScale(d, a);
            return Math.floor((d + a.margin * 2) * c)
        }
        ,
        f.qrToImageData = function(d, a, c) {
            const w = a.modules.size
              , E = a.modules.data
              , S = f.getScale(w, c)
              , T = Math.floor((w + c.margin * 2) * S)
              , z = c.margin * S
              , A = [c.color.light, c.color.dark];
            for (let L = 0; L < T; L++)
                for (let M = 0; M < T; M++) {
                    let Z = (L * T + M) * 4
                      , V = c.color.light;
                    if (L >= z && M >= z && L < T - z && M < T - z) {
                        const re = Math.floor((L - z) / S)
                          , $ = Math.floor((M - z) / S);
                        V = A[E[re * w + $] ? 1 : 0]
                    }
                    d[Z++] = V.r,
                    d[Z++] = V.g,
                    d[Z++] = V.b,
                    d[Z] = V.a
                }
        }
    }
    )(ni)),
    ni
}
var Bc;
function Ep() {
    return Bc || (Bc = 1,
    (function(f) {
        const h = Qc();
        function i(a, c, w) {
            a.clearRect(0, 0, c.width, c.height),
            c.style || (c.style = {}),
            c.height = w,
            c.width = w,
            c.style.height = w + "px",
            c.style.width = w + "px"
        }
        function d() {
            try {
                return document.createElement("canvas")
            } catch {
                throw new Error("You need to specify a canvas element")
            }
        }
        f.render = function(c, w, E) {
            let S = E
              , T = w;
            typeof S > "u" && (!w || !w.getContext) && (S = w,
            w = void 0),
            w || (T = d()),
            S = h.getOptions(S);
            const z = h.getImageWidth(c.modules.size, S)
              , A = T.getContext("2d")
              , L = A.createImageData(z, z);
            return h.qrToImageData(L.data, c, S),
            i(A, T, z),
            A.putImageData(L, 0, 0),
            T
        }
        ,
        f.renderToDataURL = function(c, w, E) {
            let S = E;
            typeof S > "u" && (!w || !w.getContext) && (S = w,
            w = void 0),
            S || (S = {});
            const T = f.render(c, w, S)
              , z = S.type || "image/png"
              , A = S.rendererOpts || {};
            return T.toDataURL(z, A.quality)
        }
    }
    )(ti)),
    ti
}
var ri = {}, Ac;
function Cp() {
    if (Ac)
        return ri;
    Ac = 1;
    const f = Qc();
    function h(a, c) {
        const w = a.a / 255
          , E = c + '="' + a.hex + '"';
        return w < 1 ? E + " " + c + '-opacity="' + w.toFixed(2).slice(1) + '"' : E
    }
    function i(a, c, w) {
        let E = a + c;
        return typeof w < "u" && (E += " " + w),
        E
    }
    function d(a, c, w) {
        let E = ""
          , S = 0
          , T = !1
          , z = 0;
        for (let A = 0; A < a.length; A++) {
            const L = Math.floor(A % c)
              , M = Math.floor(A / c);
            !L && !T && (T = !0),
            a[A] ? (z++,
            A > 0 && L > 0 && a[A - 1] || (E += T ? i("M", L + w, .5 + M + w) : i("m", S, 0),
            S = 0,
            T = !1),
            L + 1 < c && a[A + 1] || (E += i("h", z),
            z = 0)) : S++
        }
        return E
    }
    return ri.render = function(c, w, E) {
        const S = f.getOptions(w)
          , T = c.modules.size
          , z = c.modules.data
          , A = T + S.margin * 2
          , L = S.color.light.a ? "<path " + h(S.color.light, "fill") + ' d="M0 0h' + A + "v" + A + 'H0z"/>' : ""
          , M = "<path " + h(S.color.dark, "stroke") + ' d="' + d(z, T, S.margin) + '"/>'
          , Z = 'viewBox="0 0 ' + A + " " + A + '"'
          , re = '<svg xmlns="http://www.w3.org/2000/svg" ' + (S.width ? 'width="' + S.width + '" height="' + S.width + '" ' : "") + Z + ' shape-rendering="crispEdges">' + L + M + `</svg>
`;
        return typeof E == "function" && E(null, re),
        re
    }
    ,
    ri
}
var Fc;
function _p() {
    if (Fc)
        return An;
    Fc = 1;
    const f = lp()
      , h = kp()
      , i = Ep()
      , d = Cp();
    function a(c, w, E, S, T) {
        const z = [].slice.call(arguments, 1)
          , A = z.length
          , L = typeof z[A - 1] == "function";
        if (!L && !f())
            throw new Error("Callback required as last argument");
        if (L) {
            if (A < 2)
                throw new Error("Too few arguments provided");
            A === 2 ? (T = E,
            E = w,
            w = S = void 0) : A === 3 && (w.getContext && typeof T > "u" ? (T = S,
            S = void 0) : (T = S,
            S = E,
            E = w,
            w = void 0))
        } else {
            if (A < 1)
                throw new Error("Too few arguments provided");
            return A === 1 ? (E = w,
            w = S = void 0) : A === 2 && !w.getContext && (S = E,
            E = w,
            w = void 0),
            new Promise(function(M, Z) {
                try {
                    const V = h.create(E, S);
                    M(c(V, w, S))
                } catch (V) {
                    Z(V)
                }
            }
            )
        }
        try {
            const M = h.create(E, S);
            T(null, c(M, w, S))
        } catch (M) {
            T(M)
        }
    }
    return An.create = h.create,
    An.toCanvas = a.bind(null, i.render),
    An.toDataURL = a.bind(null, i.renderToDataURL),
    An.toString = a.bind(null, function(c, w, E) {
        return d.render(c, E)
    }),
    An
}
var Pp = _p();
const Lp = Oc(Pp);
export {xp as C, Lp as Q, Rp as R, sn as a, Kd as b, np as c, Tp as d, Oc as g, Np as j, Jd as r};
//# sourceMappingURL=browser-QtzkJKuE.js.map
