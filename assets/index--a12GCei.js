(async ()=>{
    (function() {
        const b = document.createElement("link").relList;
        if (b && b.supports && b.supports("modulepreload")) return;
        for (const O of document.querySelectorAll('link[rel="modulepreload"]'))o(O);
        new MutationObserver((O)=>{
            for (const D of O)if (D.type === "childList") for (const q of D.addedNodes)q.tagName === "LINK" && q.rel === "modulepreload" && o(q);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function M(O) {
            const D = {};
            return O.integrity && (D.integrity = O.integrity), O.referrerPolicy && (D.referrerPolicy = O.referrerPolicy), O.crossOrigin === "use-credentials" ? D.credentials = "include" : O.crossOrigin === "anonymous" ? D.credentials = "omit" : D.credentials = "same-origin", D;
        }
        function o(O) {
            if (O.ep) return;
            O.ep = !0;
            const D = M(O);
            fetch(O.href, D);
        }
    })();
    var tf = {
        exports: {}
    }, Su = {};
    var i0;
    function ky() {
        if (i0) return Su;
        i0 = 1;
        var y = Symbol.for("react.transitional.element"), b = Symbol.for("react.fragment");
        function M(o, O, D) {
            var q = null;
            if (D !== void 0 && (q = "" + D), O.key !== void 0 && (q = "" + O.key), "key" in O) {
                D = {};
                for(var K in O)K !== "key" && (D[K] = O[K]);
            } else D = O;
            return O = D.ref, {
                $$typeof: y,
                type: o,
                key: q,
                ref: O !== void 0 ? O : null,
                props: D
            };
        }
        return Su.Fragment = b, Su.jsx = M, Su.jsxs = M, Su;
    }
    var f0;
    function Wy() {
        return f0 || (f0 = 1, tf.exports = ky()), tf.exports;
    }
    var S = Wy(), ef = {
        exports: {}
    }, w = {};
    var s0;
    function $y() {
        if (s0) return w;
        s0 = 1;
        var y = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), q = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), V = Symbol.iterator;
        function Z(s) {
            return s === null || typeof s != "object" ? null : (s = V && s[V] || s["@@iterator"], typeof s == "function" ? s : null);
        }
        var al = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, cl = Object.assign, dl = {};
        function Tl(s, A, H) {
            this.props = s, this.context = A, this.refs = dl, this.updater = H || al;
        }
        Tl.prototype.isReactComponent = {}, Tl.prototype.setState = function(s, A) {
            if (typeof s != "object" && typeof s != "function" && s != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, s, A, "setState");
        }, Tl.prototype.forceUpdate = function(s) {
            this.updater.enqueueForceUpdate(this, s, "forceUpdate");
        };
        function mt() {}
        mt.prototype = Tl.prototype;
        function gt(s, A, H) {
            this.props = s, this.context = A, this.refs = dl, this.updater = H || al;
        }
        var yl = gt.prototype = new mt;
        yl.constructor = gt, cl(yl, Tl.prototype), yl.isPureReactComponent = !0;
        var Bl = Array.isArray, k = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        }, Zl = Object.prototype.hasOwnProperty;
        function Ll(s, A, H, U, C, P) {
            return H = P.ref, {
                $$typeof: y,
                type: s,
                key: A,
                ref: H !== void 0 ? H : null,
                props: P
            };
        }
        function Vl(s, A) {
            return Ll(s.type, A, void 0, void 0, void 0, s.props);
        }
        function pt(s) {
            return typeof s == "object" && s !== null && s.$$typeof === y;
        }
        function Be(s) {
            var A = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + s.replace(/[=:]/g, function(H) {
                return A[H];
            });
        }
        var Ot = /\/+/g;
        function Cl(s, A) {
            return typeof s == "object" && s !== null && s.key != null ? Be("" + s.key) : A.toString(36);
        }
        function me() {}
        function ge(s) {
            switch(s.status){
                case "fulfilled":
                    return s.value;
                case "rejected":
                    throw s.reason;
                default:
                    switch(typeof s.status == "string" ? s.then(me, me) : (s.status = "pending", s.then(function(A) {
                        s.status === "pending" && (s.status = "fulfilled", s.value = A);
                    }, function(A) {
                        s.status === "pending" && (s.status = "rejected", s.reason = A);
                    })), s.status){
                        case "fulfilled":
                            return s.value;
                        case "rejected":
                            throw s.reason;
                    }
            }
            throw s;
        }
        function Yl(s, A, H, U, C) {
            var P = typeof s;
            (P === "undefined" || P === "boolean") && (s = null);
            var L = !1;
            if (s === null) L = !0;
            else switch(P){
                case "bigint":
                case "string":
                case "number":
                    L = !0;
                    break;
                case "object":
                    switch(s.$$typeof){
                        case y:
                        case b:
                            L = !0;
                            break;
                        case N:
                            return L = s._init, Yl(L(s._payload), A, H, U, C);
                    }
            }
            if (L) return C = C(s), L = U === "" ? "." + Cl(s, 0) : U, Bl(C) ? (H = "", L != null && (H = L.replace(Ot, "$&/") + "/"), Yl(C, A, H, "", function(Vt) {
                return Vt;
            })) : C != null && (pt(C) && (C = Vl(C, H + (C.key == null || s && s.key === C.key ? "" : ("" + C.key).replace(Ot, "$&/") + "/") + L)), A.push(C)), 1;
            L = 0;
            var Fl = U === "" ? "." : U + ":";
            if (Bl(s)) for(var vl = 0; vl < s.length; vl++)U = s[vl], P = Fl + Cl(U, vl), L += Yl(U, A, H, P, C);
            else if (vl = Z(s), typeof vl == "function") for(s = vl.call(s), vl = 0; !(U = s.next()).done;)U = U.value, P = Fl + Cl(U, vl++), L += Yl(U, A, H, P, C);
            else if (P === "object") {
                if (typeof s.then == "function") return Yl(ge(s), A, H, U, C);
                throw A = String(s), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
            }
            return L;
        }
        function p(s, A, H) {
            if (s == null) return s;
            var U = [], C = 0;
            return Yl(s, U, "", "", function(P) {
                return A.call(H, P, C++);
            }), U;
        }
        function R(s) {
            if (s._status === -1) {
                var A = s._result;
                A = A(), A.then(function(H) {
                    (s._status === 0 || s._status === -1) && (s._status = 1, s._result = H);
                }, function(H) {
                    (s._status === 0 || s._status === -1) && (s._status = 2, s._result = H);
                }), s._status === -1 && (s._status = 0, s._result = A);
            }
            if (s._status === 1) return s._result.default;
            throw s._result;
        }
        var X = typeof reportError == "function" ? reportError : function(s) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var A = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
                    error: s
                });
                if (!window.dispatchEvent(A)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", s);
                return;
            }
            console.error(s);
        };
        function rl() {}
        return w.Children = {
            map: p,
            forEach: function(s, A, H) {
                p(s, function() {
                    A.apply(this, arguments);
                }, H);
            },
            count: function(s) {
                var A = 0;
                return p(s, function() {
                    A++;
                }), A;
            },
            toArray: function(s) {
                return p(s, function(A) {
                    return A;
                }) || [];
            },
            only: function(s) {
                if (!pt(s)) throw Error("React.Children.only expected to receive a single React element child.");
                return s;
            }
        }, w.Component = Tl, w.Fragment = M, w.Profiler = O, w.PureComponent = gt, w.StrictMode = o, w.Suspense = z, w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, w.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(s) {
                return k.H.useMemoCache(s);
            }
        }, w.cache = function(s) {
            return function() {
                return s.apply(null, arguments);
            };
        }, w.cloneElement = function(s, A, H) {
            if (s == null) throw Error("The argument must be a React element, but you passed " + s + ".");
            var U = cl({}, s.props), C = s.key, P = void 0;
            if (A != null) for(L in A.ref !== void 0 && (P = void 0), A.key !== void 0 && (C = "" + A.key), A)!Zl.call(A, L) || L === "key" || L === "__self" || L === "__source" || L === "ref" && A.ref === void 0 || (U[L] = A[L]);
            var L = arguments.length - 2;
            if (L === 1) U.children = H;
            else if (1 < L) {
                for(var Fl = Array(L), vl = 0; vl < L; vl++)Fl[vl] = arguments[vl + 2];
                U.children = Fl;
            }
            return Ll(s.type, C, void 0, void 0, P, U);
        }, w.createContext = function(s) {
            return s = {
                $$typeof: q,
                _currentValue: s,
                _currentValue2: s,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, s.Provider = s, s.Consumer = {
                $$typeof: D,
                _context: s
            }, s;
        }, w.createElement = function(s, A, H) {
            var U, C = {}, P = null;
            if (A != null) for(U in A.key !== void 0 && (P = "" + A.key), A)Zl.call(A, U) && U !== "key" && U !== "__self" && U !== "__source" && (C[U] = A[U]);
            var L = arguments.length - 2;
            if (L === 1) C.children = H;
            else if (1 < L) {
                for(var Fl = Array(L), vl = 0; vl < L; vl++)Fl[vl] = arguments[vl + 2];
                C.children = Fl;
            }
            if (s && s.defaultProps) for(U in L = s.defaultProps, L)C[U] === void 0 && (C[U] = L[U]);
            return Ll(s, P, void 0, void 0, null, C);
        }, w.createRef = function() {
            return {
                current: null
            };
        }, w.forwardRef = function(s) {
            return {
                $$typeof: K,
                render: s
            };
        }, w.isValidElement = pt, w.lazy = function(s) {
            return {
                $$typeof: N,
                _payload: {
                    _status: -1,
                    _result: s
                },
                _init: R
            };
        }, w.memo = function(s, A) {
            return {
                $$typeof: E,
                type: s,
                compare: A === void 0 ? null : A
            };
        }, w.startTransition = function(s) {
            var A = k.T, H = {};
            k.T = H;
            try {
                var U = s(), C = k.S;
                C !== null && C(H, U), typeof U == "object" && U !== null && typeof U.then == "function" && U.then(rl, X);
            } catch (P) {
                X(P);
            } finally{
                k.T = A;
            }
        }, w.unstable_useCacheRefresh = function() {
            return k.H.useCacheRefresh();
        }, w.use = function(s) {
            return k.H.use(s);
        }, w.useActionState = function(s, A, H) {
            return k.H.useActionState(s, A, H);
        }, w.useCallback = function(s, A) {
            return k.H.useCallback(s, A);
        }, w.useContext = function(s) {
            return k.H.useContext(s);
        }, w.useDebugValue = function() {}, w.useDeferredValue = function(s, A) {
            return k.H.useDeferredValue(s, A);
        }, w.useEffect = function(s, A, H) {
            var U = k.H;
            if (typeof H == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
            return U.useEffect(s, A);
        }, w.useId = function() {
            return k.H.useId();
        }, w.useImperativeHandle = function(s, A, H) {
            return k.H.useImperativeHandle(s, A, H);
        }, w.useInsertionEffect = function(s, A) {
            return k.H.useInsertionEffect(s, A);
        }, w.useLayoutEffect = function(s, A) {
            return k.H.useLayoutEffect(s, A);
        }, w.useMemo = function(s, A) {
            return k.H.useMemo(s, A);
        }, w.useOptimistic = function(s, A) {
            return k.H.useOptimistic(s, A);
        }, w.useReducer = function(s, A, H) {
            return k.H.useReducer(s, A, H);
        }, w.useRef = function(s) {
            return k.H.useRef(s);
        }, w.useState = function(s) {
            return k.H.useState(s);
        }, w.useSyncExternalStore = function(s, A, H) {
            return k.H.useSyncExternalStore(s, A, H);
        }, w.useTransition = function() {
            return k.H.useTransition();
        }, w.version = "19.1.0", w;
    }
    var r0;
    function df() {
        return r0 || (r0 = 1, ef.exports = $y()), ef.exports;
    }
    var el = df(), af = {
        exports: {}
    }, _u = {}, uf = {
        exports: {}
    }, nf = {};
    var o0;
    function Fy() {
        return o0 || (o0 = 1, function(y) {
            function b(p, R) {
                var X = p.length;
                p.push(R);
                l: for(; 0 < X;){
                    var rl = X - 1 >>> 1, s = p[rl];
                    if (0 < O(s, R)) p[rl] = R, p[X] = s, X = rl;
                    else break l;
                }
            }
            function M(p) {
                return p.length === 0 ? null : p[0];
            }
            function o(p) {
                if (p.length === 0) return null;
                var R = p[0], X = p.pop();
                if (X !== R) {
                    p[0] = X;
                    l: for(var rl = 0, s = p.length, A = s >>> 1; rl < A;){
                        var H = 2 * (rl + 1) - 1, U = p[H], C = H + 1, P = p[C];
                        if (0 > O(U, X)) C < s && 0 > O(P, U) ? (p[rl] = P, p[C] = X, rl = C) : (p[rl] = U, p[H] = X, rl = H);
                        else if (C < s && 0 > O(P, X)) p[rl] = P, p[C] = X, rl = C;
                        else break l;
                    }
                }
                return R;
            }
            function O(p, R) {
                var X = p.sortIndex - R.sortIndex;
                return X !== 0 ? X : p.id - R.id;
            }
            if (y.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
                var D = performance;
                y.unstable_now = function() {
                    return D.now();
                };
            } else {
                var q = Date, K = q.now();
                y.unstable_now = function() {
                    return q.now() - K;
                };
            }
            var z = [], E = [], N = 1, V = null, Z = 3, al = !1, cl = !1, dl = !1, Tl = !1, mt = typeof setTimeout == "function" ? setTimeout : null, gt = typeof clearTimeout == "function" ? clearTimeout : null, yl = typeof setImmediate < "u" ? setImmediate : null;
            function Bl(p) {
                for(var R = M(E); R !== null;){
                    if (R.callback === null) o(E);
                    else if (R.startTime <= p) o(E), R.sortIndex = R.expirationTime, b(z, R);
                    else break;
                    R = M(E);
                }
            }
            function k(p) {
                if (dl = !1, Bl(p), !cl) if (M(z) !== null) cl = !0, Zl || (Zl = !0, Cl());
                else {
                    var R = M(E);
                    R !== null && Yl(k, R.startTime - p);
                }
            }
            var Zl = !1, Ll = -1, Vl = 5, pt = -1;
            function Be() {
                return Tl ? !0 : !(y.unstable_now() - pt < Vl);
            }
            function Ot() {
                if (Tl = !1, Zl) {
                    var p = y.unstable_now();
                    pt = p;
                    var R = !0;
                    try {
                        l: {
                            cl = !1, dl && (dl = !1, gt(Ll), Ll = -1), al = !0;
                            var X = Z;
                            try {
                                t: {
                                    for(Bl(p), V = M(z); V !== null && !(V.expirationTime > p && Be());){
                                        var rl = V.callback;
                                        if (typeof rl == "function") {
                                            V.callback = null, Z = V.priorityLevel;
                                            var s = rl(V.expirationTime <= p);
                                            if (p = y.unstable_now(), typeof s == "function") {
                                                V.callback = s, Bl(p), R = !0;
                                                break t;
                                            }
                                            V === M(z) && o(z), Bl(p);
                                        } else o(z);
                                        V = M(z);
                                    }
                                    if (V !== null) R = !0;
                                    else {
                                        var A = M(E);
                                        A !== null && Yl(k, A.startTime - p), R = !1;
                                    }
                                }
                                break l;
                            } finally{
                                V = null, Z = X, al = !1;
                            }
                            R = void 0;
                        }
                    } finally{
                        R ? Cl() : Zl = !1;
                    }
                }
            }
            var Cl;
            if (typeof yl == "function") Cl = function() {
                yl(Ot);
            };
            else if (typeof MessageChannel < "u") {
                var me = new MessageChannel, ge = me.port2;
                me.port1.onmessage = Ot, Cl = function() {
                    ge.postMessage(null);
                };
            } else Cl = function() {
                mt(Ot, 0);
            };
            function Yl(p, R) {
                Ll = mt(function() {
                    p(y.unstable_now());
                }, R);
            }
            y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(p) {
                p.callback = null;
            }, y.unstable_forceFrameRate = function(p) {
                0 > p || 125 < p ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Vl = 0 < p ? Math.floor(1e3 / p) : 5;
            }, y.unstable_getCurrentPriorityLevel = function() {
                return Z;
            }, y.unstable_next = function(p) {
                switch(Z){
                    case 1:
                    case 2:
                    case 3:
                        var R = 3;
                        break;
                    default:
                        R = Z;
                }
                var X = Z;
                Z = R;
                try {
                    return p();
                } finally{
                    Z = X;
                }
            }, y.unstable_requestPaint = function() {
                Tl = !0;
            }, y.unstable_runWithPriority = function(p, R) {
                switch(p){
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        p = 3;
                }
                var X = Z;
                Z = p;
                try {
                    return R();
                } finally{
                    Z = X;
                }
            }, y.unstable_scheduleCallback = function(p, R, X) {
                var rl = y.unstable_now();
                switch(typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? rl + X : rl) : X = rl, p){
                    case 1:
                        var s = -1;
                        break;
                    case 2:
                        s = 250;
                        break;
                    case 5:
                        s = 1073741823;
                        break;
                    case 4:
                        s = 1e4;
                        break;
                    default:
                        s = 5e3;
                }
                return s = X + s, p = {
                    id: N++,
                    callback: R,
                    priorityLevel: p,
                    startTime: X,
                    expirationTime: s,
                    sortIndex: -1
                }, X > rl ? (p.sortIndex = X, b(E, p), M(z) === null && p === M(E) && (dl ? (gt(Ll), Ll = -1) : dl = !0, Yl(k, X - rl))) : (p.sortIndex = s, b(z, p), cl || al || (cl = !0, Zl || (Zl = !0, Cl()))), p;
            }, y.unstable_shouldYield = Be, y.unstable_wrapCallback = function(p) {
                var R = Z;
                return function() {
                    var X = Z;
                    Z = R;
                    try {
                        return p.apply(this, arguments);
                    } finally{
                        Z = X;
                    }
                };
            };
        }(nf)), nf;
    }
    var d0;
    function Iy() {
        return d0 || (d0 = 1, uf.exports = Fy()), uf.exports;
    }
    var cf = {
        exports: {}
    }, Ql = {};
    var y0;
    function Py() {
        if (y0) return Ql;
        y0 = 1;
        var y = df();
        function b(z) {
            var E = "https://react.dev/errors/" + z;
            if (1 < arguments.length) {
                E += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var N = 2; N < arguments.length; N++)E += "&args[]=" + encodeURIComponent(arguments[N]);
            }
            return "Minified React error #" + z + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function M() {}
        var o = {
            d: {
                f: M,
                r: function() {
                    throw Error(b(522));
                },
                D: M,
                C: M,
                L: M,
                m: M,
                X: M,
                S: M,
                M
            },
            p: 0,
            findDOMNode: null
        }, O = Symbol.for("react.portal");
        function D(z, E, N) {
            var V = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: O,
                key: V == null ? null : "" + V,
                children: z,
                containerInfo: E,
                implementation: N
            };
        }
        var q = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function K(z, E) {
            if (z === "font") return "";
            if (typeof E == "string") return E === "use-credentials" ? E : "";
        }
        return Ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Ql.createPortal = function(z, E) {
            var N = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11) throw Error(b(299));
            return D(z, E, null, N);
        }, Ql.flushSync = function(z) {
            var E = q.T, N = o.p;
            try {
                if (q.T = null, o.p = 2, z) return z();
            } finally{
                q.T = E, o.p = N, o.d.f();
            }
        }, Ql.preconnect = function(z, E) {
            typeof z == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, o.d.C(z, E));
        }, Ql.prefetchDNS = function(z) {
            typeof z == "string" && o.d.D(z);
        }, Ql.preinit = function(z, E) {
            if (typeof z == "string" && E && typeof E.as == "string") {
                var N = E.as, V = K(N, E.crossOrigin), Z = typeof E.integrity == "string" ? E.integrity : void 0, al = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
                N === "style" ? o.d.S(z, typeof E.precedence == "string" ? E.precedence : void 0, {
                    crossOrigin: V,
                    integrity: Z,
                    fetchPriority: al
                }) : N === "script" && o.d.X(z, {
                    crossOrigin: V,
                    integrity: Z,
                    fetchPriority: al,
                    nonce: typeof E.nonce == "string" ? E.nonce : void 0
                });
            }
        }, Ql.preinitModule = function(z, E) {
            if (typeof z == "string") if (typeof E == "object" && E !== null) {
                if (E.as == null || E.as === "script") {
                    var N = K(E.as, E.crossOrigin);
                    o.d.M(z, {
                        crossOrigin: N,
                        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
                        nonce: typeof E.nonce == "string" ? E.nonce : void 0
                    });
                }
            } else E == null && o.d.M(z);
        }, Ql.preload = function(z, E) {
            if (typeof z == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
                var N = E.as, V = K(N, E.crossOrigin);
                o.d.L(z, N, {
                    crossOrigin: V,
                    integrity: typeof E.integrity == "string" ? E.integrity : void 0,
                    nonce: typeof E.nonce == "string" ? E.nonce : void 0,
                    type: typeof E.type == "string" ? E.type : void 0,
                    fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
                    referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
                    imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
                    imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
                    media: typeof E.media == "string" ? E.media : void 0
                });
            }
        }, Ql.preloadModule = function(z, E) {
            if (typeof z == "string") if (E) {
                var N = K(E.as, E.crossOrigin);
                o.d.m(z, {
                    as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
                    crossOrigin: N,
                    integrity: typeof E.integrity == "string" ? E.integrity : void 0
                });
            } else o.d.m(z);
        }, Ql.requestFormReset = function(z) {
            o.d.r(z);
        }, Ql.unstable_batchedUpdates = function(z, E) {
            return z(E);
        }, Ql.useFormState = function(z, E, N) {
            return q.H.useFormState(z, E, N);
        }, Ql.useFormStatus = function() {
            return q.H.useHostTransitionStatus();
        }, Ql.version = "19.1.0", Ql;
    }
    var h0;
    function lh() {
        if (h0) return cf.exports;
        h0 = 1;
        function y() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
            } catch (b) {
                console.error(b);
            }
        }
        return y(), cf.exports = Py(), cf.exports;
    }
    var v0;
    function th() {
        if (v0) return _u;
        v0 = 1;
        var y = Iy(), b = df(), M = lh();
        function o(l) {
            var t = "https://react.dev/errors/" + l;
            if (1 < arguments.length) {
                t += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var e = 2; e < arguments.length; e++)t += "&args[]=" + encodeURIComponent(arguments[e]);
            }
            return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function O(l) {
            return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
        }
        function D(l) {
            var t = l, e = l;
            if (l.alternate) for(; t.return;)t = t.return;
            else {
                l = t;
                do t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return;
                while (l);
            }
            return t.tag === 3 ? e : null;
        }
        function q(l) {
            if (l.tag === 13) {
                var t = l.memoizedState;
                if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
            }
            return null;
        }
        function K(l) {
            if (D(l) !== l) throw Error(o(188));
        }
        function z(l) {
            var t = l.alternate;
            if (!t) {
                if (t = D(l), t === null) throw Error(o(188));
                return t !== l ? null : l;
            }
            for(var e = l, a = t;;){
                var u = e.return;
                if (u === null) break;
                var n = u.alternate;
                if (n === null) {
                    if (a = u.return, a !== null) {
                        e = a;
                        continue;
                    }
                    break;
                }
                if (u.child === n.child) {
                    for(n = u.child; n;){
                        if (n === e) return K(u), l;
                        if (n === a) return K(u), t;
                        n = n.sibling;
                    }
                    throw Error(o(188));
                }
                if (e.return !== a.return) e = u, a = n;
                else {
                    for(var c = !1, i = u.child; i;){
                        if (i === e) {
                            c = !0, e = u, a = n;
                            break;
                        }
                        if (i === a) {
                            c = !0, a = u, e = n;
                            break;
                        }
                        i = i.sibling;
                    }
                    if (!c) {
                        for(i = n.child; i;){
                            if (i === e) {
                                c = !0, e = n, a = u;
                                break;
                            }
                            if (i === a) {
                                c = !0, a = n, e = u;
                                break;
                            }
                            i = i.sibling;
                        }
                        if (!c) throw Error(o(189));
                    }
                }
                if (e.alternate !== a) throw Error(o(190));
            }
            if (e.tag !== 3) throw Error(o(188));
            return e.stateNode.current === e ? l : t;
        }
        function E(l) {
            var t = l.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return l;
            for(l = l.child; l !== null;){
                if (t = E(l), t !== null) return t;
                l = l.sibling;
            }
            return null;
        }
        var N = Object.assign, V = Symbol.for("react.element"), Z = Symbol.for("react.transitional.element"), al = Symbol.for("react.portal"), cl = Symbol.for("react.fragment"), dl = Symbol.for("react.strict_mode"), Tl = Symbol.for("react.profiler"), mt = Symbol.for("react.provider"), gt = Symbol.for("react.consumer"), yl = Symbol.for("react.context"), Bl = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), Zl = Symbol.for("react.suspense_list"), Ll = Symbol.for("react.memo"), Vl = Symbol.for("react.lazy"), pt = Symbol.for("react.activity"), Be = Symbol.for("react.memo_cache_sentinel"), Ot = Symbol.iterator;
        function Cl(l) {
            return l === null || typeof l != "object" ? null : (l = Ot && l[Ot] || l["@@iterator"], typeof l == "function" ? l : null);
        }
        var me = Symbol.for("react.client.reference");
        function ge(l) {
            if (l == null) return null;
            if (typeof l == "function") return l.$$typeof === me ? null : l.displayName || l.name || null;
            if (typeof l == "string") return l;
            switch(l){
                case cl:
                    return "Fragment";
                case Tl:
                    return "Profiler";
                case dl:
                    return "StrictMode";
                case k:
                    return "Suspense";
                case Zl:
                    return "SuspenseList";
                case pt:
                    return "Activity";
            }
            if (typeof l == "object") switch(l.$$typeof){
                case al:
                    return "Portal";
                case yl:
                    return (l.displayName || "Context") + ".Provider";
                case gt:
                    return (l._context.displayName || "Context") + ".Consumer";
                case Bl:
                    var t = l.render;
                    return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
                case Ll:
                    return t = l.displayName || null, t !== null ? t : ge(l.type) || "Memo";
                case Vl:
                    t = l._payload, l = l._init;
                    try {
                        return ge(l(t));
                    } catch  {}
            }
            return null;
        }
        var Yl = Array.isArray, p = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, rl = [], s = -1;
        function A(l) {
            return {
                current: l
            };
        }
        function H(l) {
            0 > s || (l.current = rl[s], rl[s] = null, s--);
        }
        function U(l, t) {
            s++, rl[s] = l.current, l.current = t;
        }
        var C = A(null), P = A(null), L = A(null), Fl = A(null);
        function vl(l, t) {
            switch(U(L, t), U(P, l), U(C, null), t.nodeType){
                case 9:
                case 11:
                    l = (l = t.documentElement) && (l = l.namespaceURI) ? qo(l) : 0;
                    break;
                default:
                    if (l = t.tagName, t = t.namespaceURI) t = qo(t), l = Bo(t, l);
                    else switch(l){
                        case "svg":
                            l = 1;
                            break;
                        case "math":
                            l = 2;
                            break;
                        default:
                            l = 0;
                    }
            }
            H(C), U(C, l);
        }
        function Vt() {
            H(C), H(P), H(L);
        }
        function Xn(l) {
            l.memoizedState !== null && U(Fl, l);
            var t = C.current, e = Bo(t, l.type);
            t !== e && (U(P, l), U(C, e));
        }
        function pu(l) {
            P.current === l && (H(C), H(P)), Fl.current === l && (H(Fl), hu._currentValue = X);
        }
        var Qn = Object.prototype.hasOwnProperty, Zn = y.unstable_scheduleCallback, Ln = y.unstable_cancelCallback, z0 = y.unstable_shouldYield, M0 = y.unstable_requestPaint, Et = y.unstable_now, O0 = y.unstable_getCurrentPriorityLevel, hf = y.unstable_ImmediatePriority, vf = y.unstable_UserBlockingPriority, Eu = y.unstable_NormalPriority, D0 = y.unstable_LowPriority, mf = y.unstable_IdlePriority, N0 = y.log, U0 = y.unstable_setDisableYieldValue, Ea = null, Il = null;
        function wt(l) {
            if (typeof N0 == "function" && U0(l), Il && typeof Il.setStrictMode == "function") try {
                Il.setStrictMode(Ea, l);
            } catch  {}
        }
        var Pl = Math.clz32 ? Math.clz32 : j0, R0 = Math.log, H0 = Math.LN2;
        function j0(l) {
            return l >>>= 0, l === 0 ? 32 : 31 - (R0(l) / H0 | 0) | 0;
        }
        var xu = 256, Tu = 4194304;
        function be(l) {
            var t = l & 42;
            if (t !== 0) return t;
            switch(l & -l){
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
                    return 64;
                case 128:
                    return 128;
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
                    return l & 4194048;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return l & 62914560;
                case 67108864:
                    return 67108864;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 0;
                default:
                    return l;
            }
        }
        function Au(l, t, e) {
            var a = l.pendingLanes;
            if (a === 0) return 0;
            var u = 0, n = l.suspendedLanes, c = l.pingedLanes;
            l = l.warmLanes;
            var i = a & 134217727;
            return i !== 0 ? (a = i & ~n, a !== 0 ? u = be(a) : (c &= i, c !== 0 ? u = be(c) : e || (e = i & ~l, e !== 0 && (u = be(e))))) : (i = a & ~n, i !== 0 ? u = be(i) : c !== 0 ? u = be(c) : e || (e = a & ~l, e !== 0 && (u = be(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : u;
        }
        function xa(l, t) {
            return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
        }
        function q0(l, t) {
            switch(l){
                case 1:
                case 2:
                case 4:
                case 8:
                case 64:
                    return t + 250;
                case 16:
                case 32:
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
                    return -1;
                case 67108864:
                case 134217728:
                case 268435456:
                case 536870912:
                case 1073741824:
                    return -1;
                default:
                    return -1;
            }
        }
        function gf() {
            var l = xu;
            return xu <<= 1, (xu & 4194048) === 0 && (xu = 256), l;
        }
        function bf() {
            var l = Tu;
            return Tu <<= 1, (Tu & 62914560) === 0 && (Tu = 4194304), l;
        }
        function Vn(l) {
            for(var t = [], e = 0; 31 > e; e++)t.push(l);
            return t;
        }
        function Ta(l, t) {
            l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
        }
        function B0(l, t, e, a, u, n) {
            var c = l.pendingLanes;
            l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
            var i = l.entanglements, f = l.expirationTimes, v = l.hiddenUpdates;
            for(e = c & ~e; 0 < e;){
                var _ = 31 - Pl(e), T = 1 << _;
                i[_] = 0, f[_] = -1;
                var m = v[_];
                if (m !== null) for(v[_] = null, _ = 0; _ < m.length; _++){
                    var g = m[_];
                    g !== null && (g.lane &= -536870913);
                }
                e &= ~T;
            }
            a !== 0 && Sf(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
        }
        function Sf(l, t, e) {
            l.pendingLanes |= t, l.suspendedLanes &= ~t;
            var a = 31 - Pl(t);
            l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 4194090;
        }
        function _f(l, t) {
            var e = l.entangledLanes |= t;
            for(l = l.entanglements; e;){
                var a = 31 - Pl(e), u = 1 << a;
                u & t | l[a] & t && (l[a] |= t), e &= ~u;
            }
        }
        function wn(l) {
            switch(l){
                case 2:
                    l = 1;
                    break;
                case 8:
                    l = 4;
                    break;
                case 32:
                    l = 16;
                    break;
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
                    l = 128;
                    break;
                case 268435456:
                    l = 134217728;
                    break;
                default:
                    l = 0;
            }
            return l;
        }
        function Kn(l) {
            return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function pf() {
            var l = R.p;
            return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : t0(l.type));
        }
        function C0(l, t) {
            var e = R.p;
            try {
                return R.p = l, t();
            } finally{
                R.p = e;
            }
        }
        var Kt = Math.random().toString(36).slice(2), Gl = "__reactFiber$" + Kt, Kl = "__reactProps$" + Kt, Ce = "__reactContainer$" + Kt, Jn = "__reactEvents$" + Kt, Y0 = "__reactListeners$" + Kt, G0 = "__reactHandles$" + Kt, Ef = "__reactResources$" + Kt, Aa = "__reactMarker$" + Kt;
        function kn(l) {
            delete l[Gl], delete l[Kl], delete l[Jn], delete l[Y0], delete l[G0];
        }
        function Ye(l) {
            var t = l[Gl];
            if (t) return t;
            for(var e = l.parentNode; e;){
                if (t = e[Ce] || e[Gl]) {
                    if (e = t.alternate, t.child !== null || e !== null && e.child !== null) for(l = Xo(l); l !== null;){
                        if (e = l[Gl]) return e;
                        l = Xo(l);
                    }
                    return t;
                }
                l = e, e = l.parentNode;
            }
            return null;
        }
        function Ge(l) {
            if (l = l[Gl] || l[Ce]) {
                var t = l.tag;
                if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return l;
            }
            return null;
        }
        function za(l) {
            var t = l.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
            throw Error(o(33));
        }
        function Xe(l) {
            var t = l[Ef];
            return t || (t = l[Ef] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function Dl(l) {
            l[Aa] = !0;
        }
        var xf = new Set, Tf = {};
        function Se(l, t) {
            Qe(l, t), Qe(l + "Capture", t);
        }
        function Qe(l, t) {
            for(Tf[l] = t, l = 0; l < t.length; l++)xf.add(t[l]);
        }
        var X0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Af = {}, zf = {};
        function Q0(l) {
            return Qn.call(zf, l) ? !0 : Qn.call(Af, l) ? !1 : X0.test(l) ? zf[l] = !0 : (Af[l] = !0, !1);
        }
        function zu(l, t, e) {
            if (Q0(t)) if (e === null) l.removeAttribute(t);
            else {
                switch(typeof e){
                    case "undefined":
                    case "function":
                    case "symbol":
                        l.removeAttribute(t);
                        return;
                    case "boolean":
                        var a = t.toLowerCase().slice(0, 5);
                        if (a !== "data-" && a !== "aria-") {
                            l.removeAttribute(t);
                            return;
                        }
                }
                l.setAttribute(t, "" + e);
            }
        }
        function Mu(l, t, e) {
            if (e === null) l.removeAttribute(t);
            else {
                switch(typeof e){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        l.removeAttribute(t);
                        return;
                }
                l.setAttribute(t, "" + e);
            }
        }
        function Dt(l, t, e, a) {
            if (a === null) l.removeAttribute(e);
            else {
                switch(typeof a){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        l.removeAttribute(e);
                        return;
                }
                l.setAttributeNS(t, e, "" + a);
            }
        }
        var Wn, Mf;
        function Ze(l) {
            if (Wn === void 0) try {
                throw Error();
            } catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                Wn = t && t[1] || "", Mf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Wn + l + Mf;
        }
        var $n = !1;
        function Fn(l, t) {
            if (!l || $n) return "";
            $n = !0;
            var e = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var a = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (t) {
                                var T = function() {
                                    throw Error();
                                };
                                if (Object.defineProperty(T.prototype, "props", {
                                    set: function() {
                                        throw Error();
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(T, []);
                                    } catch (g) {
                                        var m = g;
                                    }
                                    Reflect.construct(l, [], T);
                                } else {
                                    try {
                                        T.call();
                                    } catch (g) {
                                        m = g;
                                    }
                                    l.call(T.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (g) {
                                    m = g;
                                }
                                (T = l()) && typeof T.catch == "function" && T.catch(function() {});
                            }
                        } catch (g) {
                            if (g && m && typeof g.stack == "string") return [
                                g.stack,
                                m.stack
                            ];
                        }
                        return [
                            null,
                            null
                        ];
                    }
                };
                a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
                u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot"
                });
                var n = a.DetermineComponentFrameRoot(), c = n[0], i = n[1];
                if (c && i) {
                    var f = c.split(`
`), v = i.split(`
`);
                    for(u = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot");)a++;
                    for(; u < v.length && !v[u].includes("DetermineComponentFrameRoot");)u++;
                    if (a === f.length || u === v.length) for(a = f.length - 1, u = v.length - 1; 1 <= a && 0 <= u && f[a] !== v[u];)u--;
                    for(; 1 <= a && 0 <= u; a--, u--)if (f[a] !== v[u]) {
                        if (a !== 1 || u !== 1) do if (a--, u--, 0 > u || f[a] !== v[u]) {
                            var _ = `
` + f[a].replace(" at new ", " at ");
                            return l.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", l.displayName)), _;
                        }
                        while (1 <= a && 0 <= u);
                        break;
                    }
                }
            } finally{
                $n = !1, Error.prepareStackTrace = e;
            }
            return (e = l ? l.displayName || l.name : "") ? Ze(e) : "";
        }
        function Z0(l) {
            switch(l.tag){
                case 26:
                case 27:
                case 5:
                    return Ze(l.type);
                case 16:
                    return Ze("Lazy");
                case 13:
                    return Ze("Suspense");
                case 19:
                    return Ze("SuspenseList");
                case 0:
                case 15:
                    return Fn(l.type, !1);
                case 11:
                    return Fn(l.type.render, !1);
                case 1:
                    return Fn(l.type, !0);
                case 31:
                    return Ze("Activity");
                default:
                    return "";
            }
        }
        function Of(l) {
            try {
                var t = "";
                do t += Z0(l), l = l.return;
                while (l);
                return t;
            } catch (e) {
                return `
Error generating stack: ` + e.message + `
` + e.stack;
            }
        }
        function it(l) {
            switch(typeof l){
                case "bigint":
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                    return l;
                case "object":
                    return l;
                default:
                    return "";
            }
        }
        function Df(l) {
            var t = l.type;
            return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function L0(l) {
            var t = Df(l) ? "checked" : "value", e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t), a = "" + l[t];
            if (!l.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
                var u = e.get, n = e.set;
                return Object.defineProperty(l, t, {
                    configurable: !0,
                    get: function() {
                        return u.call(this);
                    },
                    set: function(c) {
                        a = "" + c, n.call(this, c);
                    }
                }), Object.defineProperty(l, t, {
                    enumerable: e.enumerable
                }), {
                    getValue: function() {
                        return a;
                    },
                    setValue: function(c) {
                        a = "" + c;
                    },
                    stopTracking: function() {
                        l._valueTracker = null, delete l[t];
                    }
                };
            }
        }
        function Ou(l) {
            l._valueTracker || (l._valueTracker = L0(l));
        }
        function Nf(l) {
            if (!l) return !1;
            var t = l._valueTracker;
            if (!t) return !0;
            var e = t.getValue(), a = "";
            return l && (a = Df(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1;
        }
        function Du(l) {
            if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
            try {
                return l.activeElement || l.body;
            } catch  {
                return l.body;
            }
        }
        var V0 = /[\n"\\]/g;
        function ft(l) {
            return l.replace(V0, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function In(l, t, e, a, u, n, c, i) {
            l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + it(t)) : l.value !== "" + it(t) && (l.value = "" + it(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), t != null ? Pn(l, c, it(t)) : e != null ? Pn(l, c, it(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + it(i) : l.removeAttribute("name");
        }
        function Uf(l, t, e, a, u, n, c, i) {
            if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
                if (!(n !== "submit" && n !== "reset" || t != null)) return;
                e = e != null ? "" + it(e) : "", t = t != null ? "" + it(t) : e, i || t === l.value || (l.value = t), l.defaultValue = t;
            }
            a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = i ? l.checked : !!a, l.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c);
        }
        function Pn(l, t, e) {
            t === "number" && Du(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
        }
        function Le(l, t, e, a) {
            if (l = l.options, t) {
                t = {};
                for(var u = 0; u < e.length; u++)t["$" + e[u]] = !0;
                for(e = 0; e < l.length; e++)u = t.hasOwnProperty("$" + l[e].value), l[e].selected !== u && (l[e].selected = u), u && a && (l[e].defaultSelected = !0);
            } else {
                for(e = "" + it(e), t = null, u = 0; u < l.length; u++){
                    if (l[u].value === e) {
                        l[u].selected = !0, a && (l[u].defaultSelected = !0);
                        return;
                    }
                    t !== null || l[u].disabled || (t = l[u]);
                }
                t !== null && (t.selected = !0);
            }
        }
        function Rf(l, t, e) {
            if (t != null && (t = "" + it(t), t !== l.value && (l.value = t), e == null)) {
                l.defaultValue !== t && (l.defaultValue = t);
                return;
            }
            l.defaultValue = e != null ? "" + it(e) : "";
        }
        function Hf(l, t, e, a) {
            if (t == null) {
                if (a != null) {
                    if (e != null) throw Error(o(92));
                    if (Yl(a)) {
                        if (1 < a.length) throw Error(o(93));
                        a = a[0];
                    }
                    e = a;
                }
                e == null && (e = ""), t = e;
            }
            e = it(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a);
        }
        function Ve(l, t) {
            if (t) {
                var e = l.firstChild;
                if (e && e === l.lastChild && e.nodeType === 3) {
                    e.nodeValue = t;
                    return;
                }
            }
            l.textContent = t;
        }
        var w0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function jf(l, t, e) {
            var a = t.indexOf("--") === 0;
            e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || w0.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
        }
        function qf(l, t, e) {
            if (t != null && typeof t != "object") throw Error(o(62));
            if (l = l.style, e != null) {
                for(var a in e)!e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
                for(var u in t)a = t[u], t.hasOwnProperty(u) && e[u] !== a && jf(l, u, a);
            } else for(var n in t)t.hasOwnProperty(n) && jf(l, n, t[n]);
        }
        function lc(l) {
            if (l.indexOf("-") === -1) return !1;
            switch(l){
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
                    return !0;
            }
        }
        var K0 = new Map([
            [
                "acceptCharset",
                "accept-charset"
            ],
            [
                "htmlFor",
                "for"
            ],
            [
                "httpEquiv",
                "http-equiv"
            ],
            [
                "crossOrigin",
                "crossorigin"
            ],
            [
                "accentHeight",
                "accent-height"
            ],
            [
                "alignmentBaseline",
                "alignment-baseline"
            ],
            [
                "arabicForm",
                "arabic-form"
            ],
            [
                "baselineShift",
                "baseline-shift"
            ],
            [
                "capHeight",
                "cap-height"
            ],
            [
                "clipPath",
                "clip-path"
            ],
            [
                "clipRule",
                "clip-rule"
            ],
            [
                "colorInterpolation",
                "color-interpolation"
            ],
            [
                "colorInterpolationFilters",
                "color-interpolation-filters"
            ],
            [
                "colorProfile",
                "color-profile"
            ],
            [
                "colorRendering",
                "color-rendering"
            ],
            [
                "dominantBaseline",
                "dominant-baseline"
            ],
            [
                "enableBackground",
                "enable-background"
            ],
            [
                "fillOpacity",
                "fill-opacity"
            ],
            [
                "fillRule",
                "fill-rule"
            ],
            [
                "floodColor",
                "flood-color"
            ],
            [
                "floodOpacity",
                "flood-opacity"
            ],
            [
                "fontFamily",
                "font-family"
            ],
            [
                "fontSize",
                "font-size"
            ],
            [
                "fontSizeAdjust",
                "font-size-adjust"
            ],
            [
                "fontStretch",
                "font-stretch"
            ],
            [
                "fontStyle",
                "font-style"
            ],
            [
                "fontVariant",
                "font-variant"
            ],
            [
                "fontWeight",
                "font-weight"
            ],
            [
                "glyphName",
                "glyph-name"
            ],
            [
                "glyphOrientationHorizontal",
                "glyph-orientation-horizontal"
            ],
            [
                "glyphOrientationVertical",
                "glyph-orientation-vertical"
            ],
            [
                "horizAdvX",
                "horiz-adv-x"
            ],
            [
                "horizOriginX",
                "horiz-origin-x"
            ],
            [
                "imageRendering",
                "image-rendering"
            ],
            [
                "letterSpacing",
                "letter-spacing"
            ],
            [
                "lightingColor",
                "lighting-color"
            ],
            [
                "markerEnd",
                "marker-end"
            ],
            [
                "markerMid",
                "marker-mid"
            ],
            [
                "markerStart",
                "marker-start"
            ],
            [
                "overlinePosition",
                "overline-position"
            ],
            [
                "overlineThickness",
                "overline-thickness"
            ],
            [
                "paintOrder",
                "paint-order"
            ],
            [
                "panose-1",
                "panose-1"
            ],
            [
                "pointerEvents",
                "pointer-events"
            ],
            [
                "renderingIntent",
                "rendering-intent"
            ],
            [
                "shapeRendering",
                "shape-rendering"
            ],
            [
                "stopColor",
                "stop-color"
            ],
            [
                "stopOpacity",
                "stop-opacity"
            ],
            [
                "strikethroughPosition",
                "strikethrough-position"
            ],
            [
                "strikethroughThickness",
                "strikethrough-thickness"
            ],
            [
                "strokeDasharray",
                "stroke-dasharray"
            ],
            [
                "strokeDashoffset",
                "stroke-dashoffset"
            ],
            [
                "strokeLinecap",
                "stroke-linecap"
            ],
            [
                "strokeLinejoin",
                "stroke-linejoin"
            ],
            [
                "strokeMiterlimit",
                "stroke-miterlimit"
            ],
            [
                "strokeOpacity",
                "stroke-opacity"
            ],
            [
                "strokeWidth",
                "stroke-width"
            ],
            [
                "textAnchor",
                "text-anchor"
            ],
            [
                "textDecoration",
                "text-decoration"
            ],
            [
                "textRendering",
                "text-rendering"
            ],
            [
                "transformOrigin",
                "transform-origin"
            ],
            [
                "underlinePosition",
                "underline-position"
            ],
            [
                "underlineThickness",
                "underline-thickness"
            ],
            [
                "unicodeBidi",
                "unicode-bidi"
            ],
            [
                "unicodeRange",
                "unicode-range"
            ],
            [
                "unitsPerEm",
                "units-per-em"
            ],
            [
                "vAlphabetic",
                "v-alphabetic"
            ],
            [
                "vHanging",
                "v-hanging"
            ],
            [
                "vIdeographic",
                "v-ideographic"
            ],
            [
                "vMathematical",
                "v-mathematical"
            ],
            [
                "vectorEffect",
                "vector-effect"
            ],
            [
                "vertAdvY",
                "vert-adv-y"
            ],
            [
                "vertOriginX",
                "vert-origin-x"
            ],
            [
                "vertOriginY",
                "vert-origin-y"
            ],
            [
                "wordSpacing",
                "word-spacing"
            ],
            [
                "writingMode",
                "writing-mode"
            ],
            [
                "xmlnsXlink",
                "xmlns:xlink"
            ],
            [
                "xHeight",
                "x-height"
            ]
        ]), J0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Nu(l) {
            return J0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
        }
        var tc = null;
        function ec(l) {
            return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
        }
        var we = null, Ke = null;
        function Bf(l) {
            var t = Ge(l);
            if (t && (l = t.stateNode)) {
                var e = l[Kl] || null;
                l: switch(l = t.stateNode, t.type){
                    case "input":
                        if (In(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), t = e.name, e.type === "radio" && t != null) {
                            for(e = l; e.parentNode;)e = e.parentNode;
                            for(e = e.querySelectorAll('input[name="' + ft("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++){
                                var a = e[t];
                                if (a !== l && a.form === l.form) {
                                    var u = a[Kl] || null;
                                    if (!u) throw Error(o(90));
                                    In(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
                                }
                            }
                            for(t = 0; t < e.length; t++)a = e[t], a.form === l.form && Nf(a);
                        }
                        break l;
                    case "textarea":
                        Rf(l, e.value, e.defaultValue);
                        break l;
                    case "select":
                        t = e.value, t != null && Le(l, !!e.multiple, t, !1);
                }
            }
        }
        var ac = !1;
        function Cf(l, t, e) {
            if (ac) return l(t, e);
            ac = !0;
            try {
                var a = l(t);
                return a;
            } finally{
                if (ac = !1, (we !== null || Ke !== null) && (mn(), we && (t = we, l = Ke, Ke = we = null, Bf(t), l))) for(t = 0; t < l.length; t++)Bf(l[t]);
            }
        }
        function Ma(l, t) {
            var e = l.stateNode;
            if (e === null) return null;
            var a = e[Kl] || null;
            if (a === null) return null;
            e = a[t];
            l: switch(t){
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
                    (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
                    break l;
                default:
                    l = !1;
            }
            if (l) return null;
            if (e && typeof e != "function") throw Error(o(231, t, typeof e));
            return e;
        }
        var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), uc = !1;
        if (Nt) try {
            var Oa = {};
            Object.defineProperty(Oa, "passive", {
                get: function() {
                    uc = !0;
                }
            }), window.addEventListener("test", Oa, Oa), window.removeEventListener("test", Oa, Oa);
        } catch  {
            uc = !1;
        }
        var Jt = null, nc = null, Uu = null;
        function Yf() {
            if (Uu) return Uu;
            var l, t = nc, e = t.length, a, u = "value" in Jt ? Jt.value : Jt.textContent, n = u.length;
            for(l = 0; l < e && t[l] === u[l]; l++);
            var c = e - l;
            for(a = 1; a <= c && t[e - a] === u[n - a]; a++);
            return Uu = u.slice(l, 1 < a ? 1 - a : void 0);
        }
        function Ru(l) {
            var t = l.keyCode;
            return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
        }
        function Hu() {
            return !0;
        }
        function Gf() {
            return !1;
        }
        function Jl(l) {
            function t(e, a, u, n, c) {
                this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = c, this.currentTarget = null;
                for(var i in l)l.hasOwnProperty(i) && (e = l[i], this[i] = e ? e(n) : n[i]);
                return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Hu : Gf, this.isPropagationStopped = Gf, this;
            }
            return N(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Hu);
                },
                stopPropagation: function() {
                    var e = this.nativeEvent;
                    e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Hu);
                },
                persist: function() {},
                isPersistent: Hu
            }), t;
        }
        var _e = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(l) {
                return l.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, ju = Jl(_e), Da = N({}, _e, {
            view: 0,
            detail: 0
        }), k0 = Jl(Da), cc, ic, Na, qu = N({}, Da, {
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
            getModifierState: sc,
            button: 0,
            buttons: 0,
            relatedTarget: function(l) {
                return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
            },
            movementX: function(l) {
                return "movementX" in l ? l.movementX : (l !== Na && (Na && l.type === "mousemove" ? (cc = l.screenX - Na.screenX, ic = l.screenY - Na.screenY) : ic = cc = 0, Na = l), cc);
            },
            movementY: function(l) {
                return "movementY" in l ? l.movementY : ic;
            }
        }), Xf = Jl(qu), W0 = N({}, qu, {
            dataTransfer: 0
        }), $0 = Jl(W0), F0 = N({}, Da, {
            relatedTarget: 0
        }), fc = Jl(F0), I0 = N({}, _e, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), P0 = Jl(I0), ld = N({}, _e, {
            clipboardData: function(l) {
                return "clipboardData" in l ? l.clipboardData : window.clipboardData;
            }
        }), td = Jl(ld), ed = N({}, _e, {
            data: 0
        }), Qf = Jl(ed), ad = {
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
        }, ud = {
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
        }, nd = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function cd(l) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(l) : (l = nd[l]) ? !!t[l] : !1;
        }
        function sc() {
            return cd;
        }
        var id = N({}, Da, {
            key: function(l) {
                if (l.key) {
                    var t = ad[l.key] || l.key;
                    if (t !== "Unidentified") return t;
                }
                return l.type === "keypress" ? (l = Ru(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? ud[l.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: sc,
            charCode: function(l) {
                return l.type === "keypress" ? Ru(l) : 0;
            },
            keyCode: function(l) {
                return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
            },
            which: function(l) {
                return l.type === "keypress" ? Ru(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
            }
        }), fd = Jl(id), sd = N({}, qu, {
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
        }), Zf = Jl(sd), rd = N({}, Da, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: sc
        }), od = Jl(rd), dd = N({}, _e, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), yd = Jl(dd), hd = N({}, qu, {
            deltaX: function(l) {
                return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
            },
            deltaY: function(l) {
                return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), vd = Jl(hd), md = N({}, _e, {
            newState: 0,
            oldState: 0
        }), gd = Jl(md), bd = [
            9,
            13,
            27,
            32
        ], rc = Nt && "CompositionEvent" in window, Ua = null;
        Nt && "documentMode" in document && (Ua = document.documentMode);
        var Sd = Nt && "TextEvent" in window && !Ua, Lf = Nt && (!rc || Ua && 8 < Ua && 11 >= Ua), Vf = " ", wf = !1;
        function Kf(l, t) {
            switch(l){
                case "keyup":
                    return bd.indexOf(t.keyCode) !== -1;
                case "keydown":
                    return t.keyCode !== 229;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1;
            }
        }
        function Jf(l) {
            return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
        }
        var Je = !1;
        function _d(l, t) {
            switch(l){
                case "compositionend":
                    return Jf(t);
                case "keypress":
                    return t.which !== 32 ? null : (wf = !0, Vf);
                case "textInput":
                    return l = t.data, l === Vf && wf ? null : l;
                default:
                    return null;
            }
        }
        function pd(l, t) {
            if (Je) return l === "compositionend" || !rc && Kf(l, t) ? (l = Yf(), Uu = nc = Jt = null, Je = !1, l) : null;
            switch(l){
                case "paste":
                    return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend":
                    return Lf && t.locale !== "ko" ? null : t.data;
                default:
                    return null;
            }
        }
        var Ed = {
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
        function kf(l) {
            var t = l && l.nodeName && l.nodeName.toLowerCase();
            return t === "input" ? !!Ed[l.type] : t === "textarea";
        }
        function Wf(l, t, e, a) {
            we ? Ke ? Ke.push(a) : Ke = [
                a
            ] : we = a, t = En(t, "onChange"), 0 < t.length && (e = new ju("onChange", "change", null, e, a), l.push({
                event: e,
                listeners: t
            }));
        }
        var Ra = null, Ha = null;
        function xd(l) {
            No(l, 0);
        }
        function Bu(l) {
            var t = za(l);
            if (Nf(t)) return l;
        }
        function $f(l, t) {
            if (l === "change") return t;
        }
        var Ff = !1;
        if (Nt) {
            var oc;
            if (Nt) {
                var dc = "oninput" in document;
                if (!dc) {
                    var If = document.createElement("div");
                    If.setAttribute("oninput", "return;"), dc = typeof If.oninput == "function";
                }
                oc = dc;
            } else oc = !1;
            Ff = oc && (!document.documentMode || 9 < document.documentMode);
        }
        function Pf() {
            Ra && (Ra.detachEvent("onpropertychange", ls), Ha = Ra = null);
        }
        function ls(l) {
            if (l.propertyName === "value" && Bu(Ha)) {
                var t = [];
                Wf(t, Ha, l, ec(l)), Cf(xd, t);
            }
        }
        function Td(l, t, e) {
            l === "focusin" ? (Pf(), Ra = t, Ha = e, Ra.attachEvent("onpropertychange", ls)) : l === "focusout" && Pf();
        }
        function Ad(l) {
            if (l === "selectionchange" || l === "keyup" || l === "keydown") return Bu(Ha);
        }
        function zd(l, t) {
            if (l === "click") return Bu(t);
        }
        function Md(l, t) {
            if (l === "input" || l === "change") return Bu(t);
        }
        function Od(l, t) {
            return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
        }
        var lt = typeof Object.is == "function" ? Object.is : Od;
        function ja(l, t) {
            if (lt(l, t)) return !0;
            if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
            var e = Object.keys(l), a = Object.keys(t);
            if (e.length !== a.length) return !1;
            for(a = 0; a < e.length; a++){
                var u = e[a];
                if (!Qn.call(t, u) || !lt(l[u], t[u])) return !1;
            }
            return !0;
        }
        function ts(l) {
            for(; l && l.firstChild;)l = l.firstChild;
            return l;
        }
        function es(l, t) {
            var e = ts(l);
            l = 0;
            for(var a; e;){
                if (e.nodeType === 3) {
                    if (a = l + e.textContent.length, l <= t && a >= t) return {
                        node: e,
                        offset: t - l
                    };
                    l = a;
                }
                l: {
                    for(; e;){
                        if (e.nextSibling) {
                            e = e.nextSibling;
                            break l;
                        }
                        e = e.parentNode;
                    }
                    e = void 0;
                }
                e = ts(e);
            }
        }
        function as(l, t) {
            return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? as(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
        }
        function us(l) {
            l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
            for(var t = Du(l.document); t instanceof l.HTMLIFrameElement;){
                try {
                    var e = typeof t.contentWindow.location.href == "string";
                } catch  {
                    e = !1;
                }
                if (e) l = t.contentWindow;
                else break;
                t = Du(l.document);
            }
            return t;
        }
        function yc(l) {
            var t = l && l.nodeName && l.nodeName.toLowerCase();
            return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
        }
        var Dd = Nt && "documentMode" in document && 11 >= document.documentMode, ke = null, hc = null, qa = null, vc = !1;
        function ns(l, t, e) {
            var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
            vc || ke == null || ke !== Du(a) || (a = ke, "selectionStart" in a && yc(a) ? a = {
                start: a.selectionStart,
                end: a.selectionEnd
            } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
                anchorNode: a.anchorNode,
                anchorOffset: a.anchorOffset,
                focusNode: a.focusNode,
                focusOffset: a.focusOffset
            }), qa && ja(qa, a) || (qa = a, a = En(hc, "onSelect"), 0 < a.length && (t = new ju("onSelect", "select", null, t, e), l.push({
                event: t,
                listeners: a
            }), t.target = ke)));
        }
        function pe(l, t) {
            var e = {};
            return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
        }
        var We = {
            animationend: pe("Animation", "AnimationEnd"),
            animationiteration: pe("Animation", "AnimationIteration"),
            animationstart: pe("Animation", "AnimationStart"),
            transitionrun: pe("Transition", "TransitionRun"),
            transitionstart: pe("Transition", "TransitionStart"),
            transitioncancel: pe("Transition", "TransitionCancel"),
            transitionend: pe("Transition", "TransitionEnd")
        }, mc = {}, cs = {};
        Nt && (cs = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
        function Ee(l) {
            if (mc[l]) return mc[l];
            if (!We[l]) return l;
            var t = We[l], e;
            for(e in t)if (t.hasOwnProperty(e) && e in cs) return mc[l] = t[e];
            return l;
        }
        var is = Ee("animationend"), fs = Ee("animationiteration"), ss = Ee("animationstart"), Nd = Ee("transitionrun"), Ud = Ee("transitionstart"), Rd = Ee("transitioncancel"), rs = Ee("transitionend"), os = new Map, gc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        gc.push("scrollEnd");
        function bt(l, t) {
            os.set(l, t), Se(t, [
                l
            ]);
        }
        var ds = new WeakMap;
        function st(l, t) {
            if (typeof l == "object" && l !== null) {
                var e = ds.get(l);
                return e !== void 0 ? e : (t = {
                    value: l,
                    source: t,
                    stack: Of(t)
                }, ds.set(l, t), t);
            }
            return {
                value: l,
                source: t,
                stack: Of(t)
            };
        }
        var rt = [], $e = 0, bc = 0;
        function Cu() {
            for(var l = $e, t = bc = $e = 0; t < l;){
                var e = rt[t];
                rt[t++] = null;
                var a = rt[t];
                rt[t++] = null;
                var u = rt[t];
                rt[t++] = null;
                var n = rt[t];
                if (rt[t++] = null, a !== null && u !== null) {
                    var c = a.pending;
                    c === null ? u.next = u : (u.next = c.next, c.next = u), a.pending = u;
                }
                n !== 0 && ys(e, u, n);
            }
        }
        function Yu(l, t, e, a) {
            rt[$e++] = l, rt[$e++] = t, rt[$e++] = e, rt[$e++] = a, bc |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
        }
        function Sc(l, t, e, a) {
            return Yu(l, t, e, a), Gu(l);
        }
        function Fe(l, t) {
            return Yu(l, null, null, t), Gu(l);
        }
        function ys(l, t, e) {
            l.lanes |= e;
            var a = l.alternate;
            a !== null && (a.lanes |= e);
            for(var u = !1, n = l.return; n !== null;)n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
            return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - Pl(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [
                t
            ] : a.push(t), t.lane = e | 536870912), n) : null;
        }
        function Gu(l) {
            if (50 < cu) throw cu = 0, Ai = null, Error(o(185));
            for(var t = l.return; t !== null;)l = t, t = l.return;
            return l.tag === 3 ? l.stateNode : null;
        }
        var Ie = {};
        function Hd(l, t, e, a) {
            this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function tt(l, t, e, a) {
            return new Hd(l, t, e, a);
        }
        function _c(l) {
            return l = l.prototype, !(!l || !l.isReactComponent);
        }
        function Ut(l, t) {
            var e = l.alternate;
            return e === null ? (e = tt(l.tag, t, l.key, l.mode), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
        }
        function hs(l, t) {
            l.flags &= 65011714;
            var e = l.alternate;
            return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }), l;
        }
        function Xu(l, t, e, a, u, n) {
            var c = 0;
            if (a = l, typeof l == "function") _c(l) && (c = 1);
            else if (typeof l == "string") c = qy(l, e, C.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
            else l: switch(l){
                case pt:
                    return l = tt(31, e, t, u), l.elementType = pt, l.lanes = n, l;
                case cl:
                    return xe(e.children, u, n, t);
                case dl:
                    c = 8, u |= 24;
                    break;
                case Tl:
                    return l = tt(12, e, t, u | 2), l.elementType = Tl, l.lanes = n, l;
                case k:
                    return l = tt(13, e, t, u), l.elementType = k, l.lanes = n, l;
                case Zl:
                    return l = tt(19, e, t, u), l.elementType = Zl, l.lanes = n, l;
                default:
                    if (typeof l == "object" && l !== null) switch(l.$$typeof){
                        case mt:
                        case yl:
                            c = 10;
                            break l;
                        case gt:
                            c = 9;
                            break l;
                        case Bl:
                            c = 11;
                            break l;
                        case Ll:
                            c = 14;
                            break l;
                        case Vl:
                            c = 16, a = null;
                            break l;
                    }
                    c = 29, e = Error(o(130, l === null ? "null" : typeof l, "")), a = null;
            }
            return t = tt(c, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t;
        }
        function xe(l, t, e, a) {
            return l = tt(7, l, a, t), l.lanes = e, l;
        }
        function pc(l, t, e) {
            return l = tt(6, l, null, t), l.lanes = e, l;
        }
        function Ec(l, t, e) {
            return t = tt(4, l.children !== null ? l.children : [], l.key, t), t.lanes = e, t.stateNode = {
                containerInfo: l.containerInfo,
                pendingChildren: null,
                implementation: l.implementation
            }, t;
        }
        var Pe = [], la = 0, Qu = null, Zu = 0, ot = [], dt = 0, Te = null, Rt = 1, Ht = "";
        function Ae(l, t) {
            Pe[la++] = Zu, Pe[la++] = Qu, Qu = l, Zu = t;
        }
        function vs(l, t, e) {
            ot[dt++] = Rt, ot[dt++] = Ht, ot[dt++] = Te, Te = l;
            var a = Rt;
            l = Ht;
            var u = 32 - Pl(a) - 1;
            a &= ~(1 << u), e += 1;
            var n = 32 - Pl(t) + u;
            if (30 < n) {
                var c = u - u % 5;
                n = (a & (1 << c) - 1).toString(32), a >>= c, u -= c, Rt = 1 << 32 - Pl(t) + u | e << u | a, Ht = n + l;
            } else Rt = 1 << n | e << u | a, Ht = l;
        }
        function xc(l) {
            l.return !== null && (Ae(l, 1), vs(l, 1, 0));
        }
        function Tc(l) {
            for(; l === Qu;)Qu = Pe[--la], Pe[la] = null, Zu = Pe[--la], Pe[la] = null;
            for(; l === Te;)Te = ot[--dt], ot[dt] = null, Ht = ot[--dt], ot[dt] = null, Rt = ot[--dt], ot[dt] = null;
        }
        var wl = null, Sl = null, tl = !1, ze = null, xt = !1, Ac = Error(o(519));
        function Me(l) {
            var t = Error(o(418, ""));
            throw Ya(st(t, l)), Ac;
        }
        function ms(l) {
            var t = l.stateNode, e = l.type, a = l.memoizedProps;
            switch(t[Gl] = l, t[Kl] = a, e){
                case "dialog":
                    F("cancel", t), F("close", t);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    F("load", t);
                    break;
                case "video":
                case "audio":
                    for(e = 0; e < fu.length; e++)F(fu[e], t);
                    break;
                case "source":
                    F("error", t);
                    break;
                case "img":
                case "image":
                case "link":
                    F("error", t), F("load", t);
                    break;
                case "details":
                    F("toggle", t);
                    break;
                case "input":
                    F("invalid", t), Uf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), Ou(t);
                    break;
                case "select":
                    F("invalid", t);
                    break;
                case "textarea":
                    F("invalid", t), Hf(t, a.value, a.defaultValue, a.children), Ou(t);
            }
            e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || jo(t.textContent, e) ? (a.popover != null && (F("beforetoggle", t), F("toggle", t)), a.onScroll != null && F("scroll", t), a.onScrollEnd != null && F("scrollend", t), a.onClick != null && (t.onclick = xn), t = !0) : t = !1, t || Me(l);
        }
        function gs(l) {
            for(wl = l.return; wl;)switch(wl.tag){
                case 5:
                case 13:
                    xt = !1;
                    return;
                case 27:
                case 3:
                    xt = !0;
                    return;
                default:
                    wl = wl.return;
            }
        }
        function Ba(l) {
            if (l !== wl) return !1;
            if (!tl) return gs(l), tl = !0, !1;
            var t = l.tag, e;
            if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || Qi(l.type, l.memoizedProps)), e = !e), e && Sl && Me(l), gs(l), t === 13) {
                if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
                l: {
                    for(l = l.nextSibling, t = 0; l;){
                        if (l.nodeType === 8) if (e = l.data, e === "/$") {
                            if (t === 0) {
                                Sl = _t(l.nextSibling);
                                break l;
                            }
                            t--;
                        } else e !== "$" && e !== "$!" && e !== "$?" || t++;
                        l = l.nextSibling;
                    }
                    Sl = null;
                }
            } else t === 27 ? (t = Sl, se(l.type) ? (l = wi, wi = null, Sl = l) : Sl = t) : Sl = wl ? _t(l.stateNode.nextSibling) : null;
            return !0;
        }
        function Ca() {
            Sl = wl = null, tl = !1;
        }
        function bs() {
            var l = ze;
            return l !== null && ($l === null ? $l = l : $l.push.apply($l, l), ze = null), l;
        }
        function Ya(l) {
            ze === null ? ze = [
                l
            ] : ze.push(l);
        }
        var zc = A(null), Oe = null, jt = null;
        function kt(l, t, e) {
            U(zc, t._currentValue), t._currentValue = e;
        }
        function qt(l) {
            l._currentValue = zc.current, H(zc);
        }
        function Mc(l, t, e) {
            for(; l !== null;){
                var a = l.alternate;
                if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
                l = l.return;
            }
        }
        function Oc(l, t, e, a) {
            var u = l.child;
            for(u !== null && (u.return = l); u !== null;){
                var n = u.dependencies;
                if (n !== null) {
                    var c = u.child;
                    n = n.firstContext;
                    l: for(; n !== null;){
                        var i = n;
                        n = u;
                        for(var f = 0; f < t.length; f++)if (i.context === t[f]) {
                            n.lanes |= e, i = n.alternate, i !== null && (i.lanes |= e), Mc(n.return, e, l), a || (c = null);
                            break l;
                        }
                        n = i.next;
                    }
                } else if (u.tag === 18) {
                    if (c = u.return, c === null) throw Error(o(341));
                    c.lanes |= e, n = c.alternate, n !== null && (n.lanes |= e), Mc(c, e, l), c = null;
                } else c = u.child;
                if (c !== null) c.return = u;
                else for(c = u; c !== null;){
                    if (c === l) {
                        c = null;
                        break;
                    }
                    if (u = c.sibling, u !== null) {
                        u.return = c.return, c = u;
                        break;
                    }
                    c = c.return;
                }
                u = c;
            }
        }
        function Ga(l, t, e, a) {
            l = null;
            for(var u = t, n = !1; u !== null;){
                if (!n) {
                    if ((u.flags & 524288) !== 0) n = !0;
                    else if ((u.flags & 262144) !== 0) break;
                }
                if (u.tag === 10) {
                    var c = u.alternate;
                    if (c === null) throw Error(o(387));
                    if (c = c.memoizedProps, c !== null) {
                        var i = u.type;
                        lt(u.pendingProps.value, c.value) || (l !== null ? l.push(i) : l = [
                            i
                        ]);
                    }
                } else if (u === Fl.current) {
                    if (c = u.alternate, c === null) throw Error(o(387));
                    c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(hu) : l = [
                        hu
                    ]);
                }
                u = u.return;
            }
            l !== null && Oc(t, l, e, a), t.flags |= 262144;
        }
        function Lu(l) {
            for(l = l.firstContext; l !== null;){
                if (!lt(l.context._currentValue, l.memoizedValue)) return !0;
                l = l.next;
            }
            return !1;
        }
        function De(l) {
            Oe = l, jt = null, l = l.dependencies, l !== null && (l.firstContext = null);
        }
        function Xl(l) {
            return Ss(Oe, l);
        }
        function Vu(l, t) {
            return Oe === null && De(l), Ss(l, t);
        }
        function Ss(l, t) {
            var e = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: e,
                next: null
            }, jt === null) {
                if (l === null) throw Error(o(308));
                jt = t, l.dependencies = {
                    lanes: 0,
                    firstContext: t
                }, l.flags |= 524288;
            } else jt = jt.next = t;
            return e;
        }
        var jd = typeof AbortController < "u" ? AbortController : function() {
            var l = [], t = this.signal = {
                aborted: !1,
                addEventListener: function(e, a) {
                    l.push(a);
                }
            };
            this.abort = function() {
                t.aborted = !0, l.forEach(function(e) {
                    return e();
                });
            };
        }, qd = y.unstable_scheduleCallback, Bd = y.unstable_NormalPriority, Ml = {
            $$typeof: yl,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function Dc() {
            return {
                controller: new jd,
                data: new Map,
                refCount: 0
            };
        }
        function Xa(l) {
            l.refCount--, l.refCount === 0 && qd(Bd, function() {
                l.controller.abort();
            });
        }
        var Qa = null, Nc = 0, ta = 0, ea = null;
        function Cd(l, t) {
            if (Qa === null) {
                var e = Qa = [];
                Nc = 0, ta = Ri(), ea = {
                    status: "pending",
                    value: void 0,
                    then: function(a) {
                        e.push(a);
                    }
                };
            }
            return Nc++, t.then(_s, _s), t;
        }
        function _s() {
            if (--Nc === 0 && Qa !== null) {
                ea !== null && (ea.status = "fulfilled");
                var l = Qa;
                Qa = null, ta = 0, ea = null;
                for(var t = 0; t < l.length; t++)(0, l[t])();
            }
        }
        function Yd(l, t) {
            var e = [], a = {
                status: "pending",
                value: null,
                reason: null,
                then: function(u) {
                    e.push(u);
                }
            };
            return l.then(function() {
                a.status = "fulfilled", a.value = t;
                for(var u = 0; u < e.length; u++)(0, e[u])(t);
            }, function(u) {
                for(a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)(0, e[u])(void 0);
            }), a;
        }
        var ps = p.S;
        p.S = function(l, t) {
            typeof t == "object" && t !== null && typeof t.then == "function" && Cd(l, t), ps !== null && ps(l, t);
        };
        var Ne = A(null);
        function Uc() {
            var l = Ne.current;
            return l !== null ? l : hl.pooledCache;
        }
        function wu(l, t) {
            t === null ? U(Ne, Ne.current) : U(Ne, t.pool);
        }
        function Es() {
            var l = Uc();
            return l === null ? null : {
                parent: Ml._currentValue,
                pool: l
            };
        }
        var Za = Error(o(460)), xs = Error(o(474)), Ku = Error(o(542)), Rc = {
            then: function() {}
        };
        function Ts(l) {
            return l = l.status, l === "fulfilled" || l === "rejected";
        }
        function Ju() {}
        function As(l, t, e) {
            switch(e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Ju, Ju), t = e), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw l = t.reason, Ms(l), l;
                default:
                    if (typeof t.status == "string") t.then(Ju, Ju);
                    else {
                        if (l = hl, l !== null && 100 < l.shellSuspendCounter) throw Error(o(482));
                        l = t, l.status = "pending", l.then(function(a) {
                            if (t.status === "pending") {
                                var u = t;
                                u.status = "fulfilled", u.value = a;
                            }
                        }, function(a) {
                            if (t.status === "pending") {
                                var u = t;
                                u.status = "rejected", u.reason = a;
                            }
                        });
                    }
                    switch(t.status){
                        case "fulfilled":
                            return t.value;
                        case "rejected":
                            throw l = t.reason, Ms(l), l;
                    }
                    throw La = t, Za;
            }
        }
        var La = null;
        function zs() {
            if (La === null) throw Error(o(459));
            var l = La;
            return La = null, l;
        }
        function Ms(l) {
            if (l === Za || l === Ku) throw Error(o(483));
        }
        var Wt = !1;
        function Hc(l) {
            l.updateQueue = {
                baseState: l.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    lanes: 0,
                    hiddenCallbacks: null
                },
                callbacks: null
            };
        }
        function jc(l, t) {
            l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
                baseState: l.baseState,
                firstBaseUpdate: l.firstBaseUpdate,
                lastBaseUpdate: l.lastBaseUpdate,
                shared: l.shared,
                callbacks: null
            });
        }
        function $t(l) {
            return {
                lane: l,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function Ft(l, t, e) {
            var a = l.updateQueue;
            if (a === null) return null;
            if (a = a.shared, (ul & 2) !== 0) {
                var u = a.pending;
                return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = Gu(l), ys(l, null, e), t;
            }
            return Yu(l, a, t, e), Gu(l);
        }
        function Va(l, t, e) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
                var a = t.lanes;
                a &= l.pendingLanes, e |= a, t.lanes = e, _f(l, e);
            }
        }
        function qc(l, t) {
            var e = l.updateQueue, a = l.alternate;
            if (a !== null && (a = a.updateQueue, e === a)) {
                var u = null, n = null;
                if (e = e.firstBaseUpdate, e !== null) {
                    do {
                        var c = {
                            lane: e.lane,
                            tag: e.tag,
                            payload: e.payload,
                            callback: null,
                            next: null
                        };
                        n === null ? u = n = c : n = n.next = c, e = e.next;
                    }while (e !== null);
                    n === null ? u = n = t : n = n.next = t;
                } else u = n = t;
                e = {
                    baseState: a.baseState,
                    firstBaseUpdate: u,
                    lastBaseUpdate: n,
                    shared: a.shared,
                    callbacks: a.callbacks
                }, l.updateQueue = e;
                return;
            }
            l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t;
        }
        var Bc = !1;
        function wa() {
            if (Bc) {
                var l = ea;
                if (l !== null) throw l;
            }
        }
        function Ka(l, t, e, a) {
            Bc = !1;
            var u = l.updateQueue;
            Wt = !1;
            var n = u.firstBaseUpdate, c = u.lastBaseUpdate, i = u.shared.pending;
            if (i !== null) {
                u.shared.pending = null;
                var f = i, v = f.next;
                f.next = null, c === null ? n = v : c.next = v, c = f;
                var _ = l.alternate;
                _ !== null && (_ = _.updateQueue, i = _.lastBaseUpdate, i !== c && (i === null ? _.firstBaseUpdate = v : i.next = v, _.lastBaseUpdate = f));
            }
            if (n !== null) {
                var T = u.baseState;
                c = 0, _ = v = f = null, i = n;
                do {
                    var m = i.lane & -536870913, g = m !== i.lane;
                    if (g ? (I & m) === m : (a & m) === m) {
                        m !== 0 && m === ta && (Bc = !0), _ !== null && (_ = _.next = {
                            lane: 0,
                            tag: i.tag,
                            payload: i.payload,
                            callback: null,
                            next: null
                        });
                        l: {
                            var Q = l, Y = i;
                            m = t;
                            var sl = e;
                            switch(Y.tag){
                                case 1:
                                    if (Q = Y.payload, typeof Q == "function") {
                                        T = Q.call(sl, T, m);
                                        break l;
                                    }
                                    T = Q;
                                    break l;
                                case 3:
                                    Q.flags = Q.flags & -65537 | 128;
                                case 0:
                                    if (Q = Y.payload, m = typeof Q == "function" ? Q.call(sl, T, m) : Q, m == null) break l;
                                    T = N({}, T, m);
                                    break l;
                                case 2:
                                    Wt = !0;
                            }
                        }
                        m = i.callback, m !== null && (l.flags |= 64, g && (l.flags |= 8192), g = u.callbacks, g === null ? u.callbacks = [
                            m
                        ] : g.push(m));
                    } else g = {
                        lane: m,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    }, _ === null ? (v = _ = g, f = T) : _ = _.next = g, c |= m;
                    if (i = i.next, i === null) {
                        if (i = u.shared.pending, i === null) break;
                        g = i, i = g.next, g.next = null, u.lastBaseUpdate = g, u.shared.pending = null;
                    }
                }while (!0);
                _ === null && (f = T), u.baseState = f, u.firstBaseUpdate = v, u.lastBaseUpdate = _, n === null && (u.shared.lanes = 0), ne |= c, l.lanes = c, l.memoizedState = T;
            }
        }
        function Os(l, t) {
            if (typeof l != "function") throw Error(o(191, l));
            l.call(t);
        }
        function Ds(l, t) {
            var e = l.callbacks;
            if (e !== null) for(l.callbacks = null, l = 0; l < e.length; l++)Os(e[l], t);
        }
        var aa = A(null), ku = A(0);
        function Ns(l, t) {
            l = Zt, U(ku, l), U(aa, t), Zt = l | t.baseLanes;
        }
        function Cc() {
            U(ku, Zt), U(aa, aa.current);
        }
        function Yc() {
            Zt = ku.current, H(aa), H(ku);
        }
        var It = 0, J = null, il = null, Al = null, Wu = !1, ua = !1, Ue = !1, $u = 0, Ja = 0, na = null, Gd = 0;
        function El() {
            throw Error(o(321));
        }
        function Gc(l, t) {
            if (t === null) return !1;
            for(var e = 0; e < t.length && e < l.length; e++)if (!lt(l[e], t[e])) return !1;
            return !0;
        }
        function Xc(l, t, e, a, u, n) {
            return It = n, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, p.H = l === null || l.memoizedState === null ? yr : hr, Ue = !1, n = e(a, u), Ue = !1, ua && (n = Rs(t, e, a, u)), Us(l), n;
        }
        function Us(l) {
            p.H = en;
            var t = il !== null && il.next !== null;
            if (It = 0, Al = il = J = null, Wu = !1, Ja = 0, na = null, t) throw Error(o(300));
            l === null || Nl || (l = l.dependencies, l !== null && Lu(l) && (Nl = !0));
        }
        function Rs(l, t, e, a) {
            J = l;
            var u = 0;
            do {
                if (ua && (na = null), Ja = 0, ua = !1, 25 <= u) throw Error(o(301));
                if (u += 1, Al = il = null, l.updateQueue != null) {
                    var n = l.updateQueue;
                    n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
                }
                p.H = Kd, n = t(e, a);
            }while (ua);
            return n;
        }
        function Xd() {
            var l = p.H, t = l.useState()[0];
            return t = typeof t.then == "function" ? ka(t) : t, l = l.useState()[0], (il !== null ? il.memoizedState : null) !== l && (J.flags |= 1024), t;
        }
        function Qc() {
            var l = $u !== 0;
            return $u = 0, l;
        }
        function Zc(l, t, e) {
            t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
        }
        function Lc(l) {
            if (Wu) {
                for(l = l.memoizedState; l !== null;){
                    var t = l.queue;
                    t !== null && (t.pending = null), l = l.next;
                }
                Wu = !1;
            }
            It = 0, Al = il = J = null, ua = !1, Ja = $u = 0, na = null;
        }
        function kl() {
            var l = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return Al === null ? J.memoizedState = Al = l : Al = Al.next = l, Al;
        }
        function zl() {
            if (il === null) {
                var l = J.alternate;
                l = l !== null ? l.memoizedState : null;
            } else l = il.next;
            var t = Al === null ? J.memoizedState : Al.next;
            if (t !== null) Al = t, il = l;
            else {
                if (l === null) throw J.alternate === null ? Error(o(467)) : Error(o(310));
                il = l, l = {
                    memoizedState: il.memoizedState,
                    baseState: il.baseState,
                    baseQueue: il.baseQueue,
                    queue: il.queue,
                    next: null
                }, Al === null ? J.memoizedState = Al = l : Al = Al.next = l;
            }
            return Al;
        }
        function Vc() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function ka(l) {
            var t = Ja;
            return Ja += 1, na === null && (na = []), l = As(na, l, t), t = J, (Al === null ? t.memoizedState : Al.next) === null && (t = t.alternate, p.H = t === null || t.memoizedState === null ? yr : hr), l;
        }
        function Fu(l) {
            if (l !== null && typeof l == "object") {
                if (typeof l.then == "function") return ka(l);
                if (l.$$typeof === yl) return Xl(l);
            }
            throw Error(o(438, String(l)));
        }
        function wc(l) {
            var t = null, e = J.updateQueue;
            if (e !== null && (t = e.memoCache), t == null) {
                var a = J.alternate;
                a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
                    data: a.data.map(function(u) {
                        return u.slice();
                    }),
                    index: 0
                })));
            }
            if (t == null && (t = {
                data: [],
                index: 0
            }), e === null && (e = Vc(), J.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0) for(e = t.data[t.index] = Array(l), a = 0; a < l; a++)e[a] = Be;
            return t.index++, e;
        }
        function Bt(l, t) {
            return typeof t == "function" ? t(l) : t;
        }
        function Iu(l) {
            var t = zl();
            return Kc(t, il, l);
        }
        function Kc(l, t, e) {
            var a = l.queue;
            if (a === null) throw Error(o(311));
            a.lastRenderedReducer = e;
            var u = l.baseQueue, n = a.pending;
            if (n !== null) {
                if (u !== null) {
                    var c = u.next;
                    u.next = n.next, n.next = c;
                }
                t.baseQueue = u = n, a.pending = null;
            }
            if (n = l.baseState, u === null) l.memoizedState = n;
            else {
                t = u.next;
                var i = c = null, f = null, v = t, _ = !1;
                do {
                    var T = v.lane & -536870913;
                    if (T !== v.lane ? (I & T) === T : (It & T) === T) {
                        var m = v.revertLane;
                        if (m === 0) f !== null && (f = f.next = {
                            lane: 0,
                            revertLane: 0,
                            action: v.action,
                            hasEagerState: v.hasEagerState,
                            eagerState: v.eagerState,
                            next: null
                        }), T === ta && (_ = !0);
                        else if ((It & m) === m) {
                            v = v.next, m === ta && (_ = !0);
                            continue;
                        } else T = {
                            lane: 0,
                            revertLane: v.revertLane,
                            action: v.action,
                            hasEagerState: v.hasEagerState,
                            eagerState: v.eagerState,
                            next: null
                        }, f === null ? (i = f = T, c = n) : f = f.next = T, J.lanes |= m, ne |= m;
                        T = v.action, Ue && e(n, T), n = v.hasEagerState ? v.eagerState : e(n, T);
                    } else m = {
                        lane: T,
                        revertLane: v.revertLane,
                        action: v.action,
                        hasEagerState: v.hasEagerState,
                        eagerState: v.eagerState,
                        next: null
                    }, f === null ? (i = f = m, c = n) : f = f.next = m, J.lanes |= T, ne |= T;
                    v = v.next;
                }while (v !== null && v !== t);
                if (f === null ? c = n : f.next = i, !lt(n, l.memoizedState) && (Nl = !0, _ && (e = ea, e !== null))) throw e;
                l.memoizedState = n, l.baseState = c, l.baseQueue = f, a.lastRenderedState = n;
            }
            return u === null && (a.lanes = 0), [
                l.memoizedState,
                a.dispatch
            ];
        }
        function Jc(l) {
            var t = zl(), e = t.queue;
            if (e === null) throw Error(o(311));
            e.lastRenderedReducer = l;
            var a = e.dispatch, u = e.pending, n = t.memoizedState;
            if (u !== null) {
                e.pending = null;
                var c = u = u.next;
                do n = l(n, c.action), c = c.next;
                while (c !== u);
                lt(n, t.memoizedState) || (Nl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
            }
            return [
                n,
                a
            ];
        }
        function Hs(l, t, e) {
            var a = J, u = zl(), n = tl;
            if (n) {
                if (e === void 0) throw Error(o(407));
                e = e();
            } else e = t();
            var c = !lt((il || u).memoizedState, e);
            c && (u.memoizedState = e, Nl = !0), u = u.queue;
            var i = Bs.bind(null, a, u, l);
            if (Wa(2048, 8, i, [
                l
            ]), u.getSnapshot !== t || c || Al !== null && Al.memoizedState.tag & 1) {
                if (a.flags |= 2048, ca(9, Pu(), qs.bind(null, a, u, e, t), null), hl === null) throw Error(o(349));
                n || (It & 124) !== 0 || js(a, t, e);
            }
            return e;
        }
        function js(l, t, e) {
            l.flags |= 16384, l = {
                getSnapshot: t,
                value: e
            }, t = J.updateQueue, t === null ? (t = Vc(), J.updateQueue = t, t.stores = [
                l
            ]) : (e = t.stores, e === null ? t.stores = [
                l
            ] : e.push(l));
        }
        function qs(l, t, e, a) {
            t.value = e, t.getSnapshot = a, Cs(t) && Ys(l);
        }
        function Bs(l, t, e) {
            return e(function() {
                Cs(t) && Ys(l);
            });
        }
        function Cs(l) {
            var t = l.getSnapshot;
            l = l.value;
            try {
                var e = t();
                return !lt(l, e);
            } catch  {
                return !0;
            }
        }
        function Ys(l) {
            var t = Fe(l, 2);
            t !== null && ct(t, l, 2);
        }
        function kc(l) {
            var t = kl();
            if (typeof l == "function") {
                var e = l;
                if (l = e(), Ue) {
                    wt(!0);
                    try {
                        e();
                    } finally{
                        wt(!1);
                    }
                }
            }
            return t.memoizedState = t.baseState = l, t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Bt,
                lastRenderedState: l
            }, t;
        }
        function Gs(l, t, e, a) {
            return l.baseState = e, Kc(l, il, typeof a == "function" ? a : Bt);
        }
        function Qd(l, t, e, a, u) {
            if (tn(l)) throw Error(o(485));
            if (l = t.action, l !== null) {
                var n = {
                    payload: u,
                    action: l,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(c) {
                        n.listeners.push(c);
                    }
                };
                p.T !== null ? e(!0) : n.isTransition = !1, a(n), e = t.pending, e === null ? (n.next = t.pending = n, Xs(t, n)) : (n.next = e.next, t.pending = e.next = n);
            }
        }
        function Xs(l, t) {
            var e = t.action, a = t.payload, u = l.state;
            if (t.isTransition) {
                var n = p.T, c = {};
                p.T = c;
                try {
                    var i = e(u, a), f = p.S;
                    f !== null && f(c, i), Qs(l, t, i);
                } catch (v) {
                    Wc(l, t, v);
                } finally{
                    p.T = n;
                }
            } else try {
                n = e(u, a), Qs(l, t, n);
            } catch (v) {
                Wc(l, t, v);
            }
        }
        function Qs(l, t, e) {
            e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
                Zs(l, t, a);
            }, function(a) {
                return Wc(l, t, a);
            }) : Zs(l, t, e);
        }
        function Zs(l, t, e) {
            t.status = "fulfilled", t.value = e, Ls(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, Xs(l, e)));
        }
        function Wc(l, t, e) {
            var a = l.pending;
            if (l.pending = null, a !== null) {
                a = a.next;
                do t.status = "rejected", t.reason = e, Ls(t), t = t.next;
                while (t !== a);
            }
            l.action = null;
        }
        function Ls(l) {
            l = l.listeners;
            for(var t = 0; t < l.length; t++)(0, l[t])();
        }
        function Vs(l, t) {
            return t;
        }
        function ws(l, t) {
            if (tl) {
                var e = hl.formState;
                if (e !== null) {
                    l: {
                        var a = J;
                        if (tl) {
                            if (Sl) {
                                t: {
                                    for(var u = Sl, n = xt; u.nodeType !== 8;){
                                        if (!n) {
                                            u = null;
                                            break t;
                                        }
                                        if (u = _t(u.nextSibling), u === null) {
                                            u = null;
                                            break t;
                                        }
                                    }
                                    n = u.data, u = n === "F!" || n === "F" ? u : null;
                                }
                                if (u) {
                                    Sl = _t(u.nextSibling), a = u.data === "F!";
                                    break l;
                                }
                            }
                            Me(a);
                        }
                        a = !1;
                    }
                    a && (t = e[0]);
                }
            }
            return e = kl(), e.memoizedState = e.baseState = t, a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Vs,
                lastRenderedState: t
            }, e.queue = a, e = rr.bind(null, J, a), a.dispatch = e, a = kc(!1), n = li.bind(null, J, !1, a.queue), a = kl(), u = {
                state: t,
                dispatch: null,
                action: l,
                pending: null
            }, a.queue = u, e = Qd.bind(null, J, u, n, e), u.dispatch = e, a.memoizedState = l, [
                t,
                e,
                !1
            ];
        }
        function Ks(l) {
            var t = zl();
            return Js(t, il, l);
        }
        function Js(l, t, e) {
            if (t = Kc(l, t, Vs)[0], l = Iu(Bt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var a = ka(t);
            } catch (c) {
                throw c === Za ? Ku : c;
            }
            else a = t;
            t = zl();
            var u = t.queue, n = u.dispatch;
            return e !== t.memoizedState && (J.flags |= 2048, ca(9, Pu(), Zd.bind(null, u, e), null)), [
                a,
                n,
                l
            ];
        }
        function Zd(l, t) {
            l.action = t;
        }
        function ks(l) {
            var t = zl(), e = il;
            if (e !== null) return Js(t, e, l);
            zl(), t = t.memoizedState, e = zl();
            var a = e.queue.dispatch;
            return e.memoizedState = l, [
                t,
                a,
                !1
            ];
        }
        function ca(l, t, e, a) {
            return l = {
                tag: l,
                create: e,
                deps: a,
                inst: t,
                next: null
            }, t = J.updateQueue, t === null && (t = Vc(), J.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
        }
        function Pu() {
            return {
                destroy: void 0,
                resource: void 0
            };
        }
        function Ws() {
            return zl().memoizedState;
        }
        function ln(l, t, e, a) {
            var u = kl();
            a = a === void 0 ? null : a, J.flags |= l, u.memoizedState = ca(1 | t, Pu(), e, a);
        }
        function Wa(l, t, e, a) {
            var u = zl();
            a = a === void 0 ? null : a;
            var n = u.memoizedState.inst;
            il !== null && a !== null && Gc(a, il.memoizedState.deps) ? u.memoizedState = ca(t, n, e, a) : (J.flags |= l, u.memoizedState = ca(1 | t, n, e, a));
        }
        function $s(l, t) {
            ln(8390656, 8, l, t);
        }
        function Fs(l, t) {
            Wa(2048, 8, l, t);
        }
        function Is(l, t) {
            return Wa(4, 2, l, t);
        }
        function Ps(l, t) {
            return Wa(4, 4, l, t);
        }
        function lr(l, t) {
            if (typeof t == "function") {
                l = l();
                var e = t(l);
                return function() {
                    typeof e == "function" ? e() : t(null);
                };
            }
            if (t != null) return l = l(), t.current = l, function() {
                t.current = null;
            };
        }
        function tr(l, t, e) {
            e = e != null ? e.concat([
                l
            ]) : null, Wa(4, 4, lr.bind(null, t, l), e);
        }
        function $c() {}
        function er(l, t) {
            var e = zl();
            t = t === void 0 ? null : t;
            var a = e.memoizedState;
            return t !== null && Gc(t, a[1]) ? a[0] : (e.memoizedState = [
                l,
                t
            ], l);
        }
        function ar(l, t) {
            var e = zl();
            t = t === void 0 ? null : t;
            var a = e.memoizedState;
            if (t !== null && Gc(t, a[1])) return a[0];
            if (a = l(), Ue) {
                wt(!0);
                try {
                    l();
                } finally{
                    wt(!1);
                }
            }
            return e.memoizedState = [
                a,
                t
            ], a;
        }
        function Fc(l, t, e) {
            return e === void 0 || (It & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = e, l = co(), J.lanes |= l, ne |= l, e);
        }
        function ur(l, t, e, a) {
            return lt(e, t) ? e : aa.current !== null ? (l = Fc(l, e, a), lt(l, t) || (Nl = !0), l) : (It & 42) === 0 ? (Nl = !0, l.memoizedState = e) : (l = co(), J.lanes |= l, ne |= l, t);
        }
        function nr(l, t, e, a, u) {
            var n = R.p;
            R.p = n !== 0 && 8 > n ? n : 8;
            var c = p.T, i = {};
            p.T = i, li(l, !1, t, e);
            try {
                var f = u(), v = p.S;
                if (v !== null && v(i, f), f !== null && typeof f == "object" && typeof f.then == "function") {
                    var _ = Yd(f, a);
                    $a(l, t, _, nt(l));
                } else $a(l, t, a, nt(l));
            } catch (T) {
                $a(l, t, {
                    then: function() {},
                    status: "rejected",
                    reason: T
                }, nt());
            } finally{
                R.p = n, p.T = c;
            }
        }
        function Ld() {}
        function Ic(l, t, e, a) {
            if (l.tag !== 5) throw Error(o(476));
            var u = cr(l).queue;
            nr(l, u, t, X, e === null ? Ld : function() {
                return ir(l), e(a);
            });
        }
        function cr(l) {
            var t = l.memoizedState;
            if (t !== null) return t;
            t = {
                memoizedState: X,
                baseState: X,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Bt,
                    lastRenderedState: X
                },
                next: null
            };
            var e = {};
            return t.next = {
                memoizedState: e,
                baseState: e,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Bt,
                    lastRenderedState: e
                },
                next: null
            }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
        }
        function ir(l) {
            var t = cr(l).next.queue;
            $a(l, t, {}, nt());
        }
        function Pc() {
            return Xl(hu);
        }
        function fr() {
            return zl().memoizedState;
        }
        function sr() {
            return zl().memoizedState;
        }
        function Vd(l) {
            for(var t = l.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var e = nt();
                        l = $t(e);
                        var a = Ft(t, l, e);
                        a !== null && (ct(a, t, e), Va(a, t, e)), t = {
                            cache: Dc()
                        }, l.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function wd(l, t, e) {
            var a = nt();
            e = {
                lane: a,
                revertLane: 0,
                action: e,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, tn(l) ? or(t, e) : (e = Sc(l, t, e, a), e !== null && (ct(e, l, a), dr(e, t, a)));
        }
        function rr(l, t, e) {
            var a = nt();
            $a(l, t, e, a);
        }
        function $a(l, t, e, a) {
            var u = {
                lane: a,
                revertLane: 0,
                action: e,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (tn(l)) or(t, u);
            else {
                var n = l.alternate;
                if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
                    var c = t.lastRenderedState, i = n(c, e);
                    if (u.hasEagerState = !0, u.eagerState = i, lt(i, c)) return Yu(l, t, u, 0), hl === null && Cu(), !1;
                } catch  {} finally{}
                if (e = Sc(l, t, u, a), e !== null) return ct(e, l, a), dr(e, t, a), !0;
            }
            return !1;
        }
        function li(l, t, e, a) {
            if (a = {
                lane: 2,
                revertLane: Ri(),
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, tn(l)) {
                if (t) throw Error(o(479));
            } else t = Sc(l, e, a, 2), t !== null && ct(t, l, 2);
        }
        function tn(l) {
            var t = l.alternate;
            return l === J || t !== null && t === J;
        }
        function or(l, t) {
            ua = Wu = !0;
            var e = l.pending;
            e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
        }
        function dr(l, t, e) {
            if ((e & 4194048) !== 0) {
                var a = t.lanes;
                a &= l.pendingLanes, e |= a, t.lanes = e, _f(l, e);
            }
        }
        var en = {
            readContext: Xl,
            use: Fu,
            useCallback: El,
            useContext: El,
            useEffect: El,
            useImperativeHandle: El,
            useLayoutEffect: El,
            useInsertionEffect: El,
            useMemo: El,
            useReducer: El,
            useRef: El,
            useState: El,
            useDebugValue: El,
            useDeferredValue: El,
            useTransition: El,
            useSyncExternalStore: El,
            useId: El,
            useHostTransitionStatus: El,
            useFormState: El,
            useActionState: El,
            useOptimistic: El,
            useMemoCache: El,
            useCacheRefresh: El
        }, yr = {
            readContext: Xl,
            use: Fu,
            useCallback: function(l, t) {
                return kl().memoizedState = [
                    l,
                    t === void 0 ? null : t
                ], l;
            },
            useContext: Xl,
            useEffect: $s,
            useImperativeHandle: function(l, t, e) {
                e = e != null ? e.concat([
                    l
                ]) : null, ln(4194308, 4, lr.bind(null, t, l), e);
            },
            useLayoutEffect: function(l, t) {
                return ln(4194308, 4, l, t);
            },
            useInsertionEffect: function(l, t) {
                ln(4, 2, l, t);
            },
            useMemo: function(l, t) {
                var e = kl();
                t = t === void 0 ? null : t;
                var a = l();
                if (Ue) {
                    wt(!0);
                    try {
                        l();
                    } finally{
                        wt(!1);
                    }
                }
                return e.memoizedState = [
                    a,
                    t
                ], a;
            },
            useReducer: function(l, t, e) {
                var a = kl();
                if (e !== void 0) {
                    var u = e(t);
                    if (Ue) {
                        wt(!0);
                        try {
                            e(t);
                        } finally{
                            wt(!1);
                        }
                    }
                } else u = t;
                return a.memoizedState = a.baseState = u, l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: l,
                    lastRenderedState: u
                }, a.queue = l, l = l.dispatch = wd.bind(null, J, l), [
                    a.memoizedState,
                    l
                ];
            },
            useRef: function(l) {
                var t = kl();
                return l = {
                    current: l
                }, t.memoizedState = l;
            },
            useState: function(l) {
                l = kc(l);
                var t = l.queue, e = rr.bind(null, J, t);
                return t.dispatch = e, [
                    l.memoizedState,
                    e
                ];
            },
            useDebugValue: $c,
            useDeferredValue: function(l, t) {
                var e = kl();
                return Fc(e, l, t);
            },
            useTransition: function() {
                var l = kc(!1);
                return l = nr.bind(null, J, l.queue, !0, !1), kl().memoizedState = l, [
                    !1,
                    l
                ];
            },
            useSyncExternalStore: function(l, t, e) {
                var a = J, u = kl();
                if (tl) {
                    if (e === void 0) throw Error(o(407));
                    e = e();
                } else {
                    if (e = t(), hl === null) throw Error(o(349));
                    (I & 124) !== 0 || js(a, t, e);
                }
                u.memoizedState = e;
                var n = {
                    value: e,
                    getSnapshot: t
                };
                return u.queue = n, $s(Bs.bind(null, a, n, l), [
                    l
                ]), a.flags |= 2048, ca(9, Pu(), qs.bind(null, a, n, e, t), null), e;
            },
            useId: function() {
                var l = kl(), t = hl.identifierPrefix;
                if (tl) {
                    var e = Ht, a = Rt;
                    e = (a & ~(1 << 32 - Pl(a) - 1)).toString(32) + e, t = "«" + t + "R" + e, e = $u++, 0 < e && (t += "H" + e.toString(32)), t += "»";
                } else e = Gd++, t = "«" + t + "r" + e.toString(32) + "»";
                return l.memoizedState = t;
            },
            useHostTransitionStatus: Pc,
            useFormState: ws,
            useActionState: ws,
            useOptimistic: function(l) {
                var t = kl();
                t.memoizedState = t.baseState = l;
                var e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = e, t = li.bind(null, J, !0, e), e.dispatch = t, [
                    l,
                    t
                ];
            },
            useMemoCache: wc,
            useCacheRefresh: function() {
                return kl().memoizedState = Vd.bind(null, J);
            }
        }, hr = {
            readContext: Xl,
            use: Fu,
            useCallback: er,
            useContext: Xl,
            useEffect: Fs,
            useImperativeHandle: tr,
            useInsertionEffect: Is,
            useLayoutEffect: Ps,
            useMemo: ar,
            useReducer: Iu,
            useRef: Ws,
            useState: function() {
                return Iu(Bt);
            },
            useDebugValue: $c,
            useDeferredValue: function(l, t) {
                var e = zl();
                return ur(e, il.memoizedState, l, t);
            },
            useTransition: function() {
                var l = Iu(Bt)[0], t = zl().memoizedState;
                return [
                    typeof l == "boolean" ? l : ka(l),
                    t
                ];
            },
            useSyncExternalStore: Hs,
            useId: fr,
            useHostTransitionStatus: Pc,
            useFormState: Ks,
            useActionState: Ks,
            useOptimistic: function(l, t) {
                var e = zl();
                return Gs(e, il, l, t);
            },
            useMemoCache: wc,
            useCacheRefresh: sr
        }, Kd = {
            readContext: Xl,
            use: Fu,
            useCallback: er,
            useContext: Xl,
            useEffect: Fs,
            useImperativeHandle: tr,
            useInsertionEffect: Is,
            useLayoutEffect: Ps,
            useMemo: ar,
            useReducer: Jc,
            useRef: Ws,
            useState: function() {
                return Jc(Bt);
            },
            useDebugValue: $c,
            useDeferredValue: function(l, t) {
                var e = zl();
                return il === null ? Fc(e, l, t) : ur(e, il.memoizedState, l, t);
            },
            useTransition: function() {
                var l = Jc(Bt)[0], t = zl().memoizedState;
                return [
                    typeof l == "boolean" ? l : ka(l),
                    t
                ];
            },
            useSyncExternalStore: Hs,
            useId: fr,
            useHostTransitionStatus: Pc,
            useFormState: ks,
            useActionState: ks,
            useOptimistic: function(l, t) {
                var e = zl();
                return il !== null ? Gs(e, il, l, t) : (e.baseState = l, [
                    l,
                    e.queue.dispatch
                ]);
            },
            useMemoCache: wc,
            useCacheRefresh: sr
        }, ia = null, Fa = 0;
        function an(l) {
            var t = Fa;
            return Fa += 1, ia === null && (ia = []), As(ia, l, t);
        }
        function Ia(l, t) {
            t = t.props.ref, l.ref = t !== void 0 ? t : null;
        }
        function un(l, t) {
            throw t.$$typeof === V ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(o(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
        }
        function vr(l) {
            var t = l._init;
            return t(l._payload);
        }
        function mr(l) {
            function t(d, r) {
                if (l) {
                    var h = d.deletions;
                    h === null ? (d.deletions = [
                        r
                    ], d.flags |= 16) : h.push(r);
                }
            }
            function e(d, r) {
                if (!l) return null;
                for(; r !== null;)t(d, r), r = r.sibling;
                return null;
            }
            function a(d) {
                for(var r = new Map; d !== null;)d.key !== null ? r.set(d.key, d) : r.set(d.index, d), d = d.sibling;
                return r;
            }
            function u(d, r) {
                return d = Ut(d, r), d.index = 0, d.sibling = null, d;
            }
            function n(d, r, h) {
                return d.index = h, l ? (h = d.alternate, h !== null ? (h = h.index, h < r ? (d.flags |= 67108866, r) : h) : (d.flags |= 67108866, r)) : (d.flags |= 1048576, r);
            }
            function c(d) {
                return l && d.alternate === null && (d.flags |= 67108866), d;
            }
            function i(d, r, h, x) {
                return r === null || r.tag !== 6 ? (r = pc(h, d.mode, x), r.return = d, r) : (r = u(r, h), r.return = d, r);
            }
            function f(d, r, h, x) {
                var j = h.type;
                return j === cl ? _(d, r, h.props.children, x, h.key) : r !== null && (r.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Vl && vr(j) === r.type) ? (r = u(r, h.props), Ia(r, h), r.return = d, r) : (r = Xu(h.type, h.key, h.props, null, d.mode, x), Ia(r, h), r.return = d, r);
            }
            function v(d, r, h, x) {
                return r === null || r.tag !== 4 || r.stateNode.containerInfo !== h.containerInfo || r.stateNode.implementation !== h.implementation ? (r = Ec(h, d.mode, x), r.return = d, r) : (r = u(r, h.children || []), r.return = d, r);
            }
            function _(d, r, h, x, j) {
                return r === null || r.tag !== 7 ? (r = xe(h, d.mode, x, j), r.return = d, r) : (r = u(r, h), r.return = d, r);
            }
            function T(d, r, h) {
                if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return r = pc("" + r, d.mode, h), r.return = d, r;
                if (typeof r == "object" && r !== null) {
                    switch(r.$$typeof){
                        case Z:
                            return h = Xu(r.type, r.key, r.props, null, d.mode, h), Ia(h, r), h.return = d, h;
                        case al:
                            return r = Ec(r, d.mode, h), r.return = d, r;
                        case Vl:
                            var x = r._init;
                            return r = x(r._payload), T(d, r, h);
                    }
                    if (Yl(r) || Cl(r)) return r = xe(r, d.mode, h, null), r.return = d, r;
                    if (typeof r.then == "function") return T(d, an(r), h);
                    if (r.$$typeof === yl) return T(d, Vu(d, r), h);
                    un(d, r);
                }
                return null;
            }
            function m(d, r, h, x) {
                var j = r !== null ? r.key : null;
                if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return j !== null ? null : i(d, r, "" + h, x);
                if (typeof h == "object" && h !== null) {
                    switch(h.$$typeof){
                        case Z:
                            return h.key === j ? f(d, r, h, x) : null;
                        case al:
                            return h.key === j ? v(d, r, h, x) : null;
                        case Vl:
                            return j = h._init, h = j(h._payload), m(d, r, h, x);
                    }
                    if (Yl(h) || Cl(h)) return j !== null ? null : _(d, r, h, x, null);
                    if (typeof h.then == "function") return m(d, r, an(h), x);
                    if (h.$$typeof === yl) return m(d, r, Vu(d, h), x);
                    un(d, h);
                }
                return null;
            }
            function g(d, r, h, x, j) {
                if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint") return d = d.get(h) || null, i(r, d, "" + x, j);
                if (typeof x == "object" && x !== null) {
                    switch(x.$$typeof){
                        case Z:
                            return d = d.get(x.key === null ? h : x.key) || null, f(r, d, x, j);
                        case al:
                            return d = d.get(x.key === null ? h : x.key) || null, v(r, d, x, j);
                        case Vl:
                            var W = x._init;
                            return x = W(x._payload), g(d, r, h, x, j);
                    }
                    if (Yl(x) || Cl(x)) return d = d.get(h) || null, _(r, d, x, j, null);
                    if (typeof x.then == "function") return g(d, r, h, an(x), j);
                    if (x.$$typeof === yl) return g(d, r, h, Vu(r, x), j);
                    un(r, x);
                }
                return null;
            }
            function Q(d, r, h, x) {
                for(var j = null, W = null, B = r, G = r = 0, Rl = null; B !== null && G < h.length; G++){
                    B.index > G ? (Rl = B, B = null) : Rl = B.sibling;
                    var ll = m(d, B, h[G], x);
                    if (ll === null) {
                        B === null && (B = Rl);
                        break;
                    }
                    l && B && ll.alternate === null && t(d, B), r = n(ll, r, G), W === null ? j = ll : W.sibling = ll, W = ll, B = Rl;
                }
                if (G === h.length) return e(d, B), tl && Ae(d, G), j;
                if (B === null) {
                    for(; G < h.length; G++)B = T(d, h[G], x), B !== null && (r = n(B, r, G), W === null ? j = B : W.sibling = B, W = B);
                    return tl && Ae(d, G), j;
                }
                for(B = a(B); G < h.length; G++)Rl = g(B, d, G, h[G], x), Rl !== null && (l && Rl.alternate !== null && B.delete(Rl.key === null ? G : Rl.key), r = n(Rl, r, G), W === null ? j = Rl : W.sibling = Rl, W = Rl);
                return l && B.forEach(function(he) {
                    return t(d, he);
                }), tl && Ae(d, G), j;
            }
            function Y(d, r, h, x) {
                if (h == null) throw Error(o(151));
                for(var j = null, W = null, B = r, G = r = 0, Rl = null, ll = h.next(); B !== null && !ll.done; G++, ll = h.next()){
                    B.index > G ? (Rl = B, B = null) : Rl = B.sibling;
                    var he = m(d, B, ll.value, x);
                    if (he === null) {
                        B === null && (B = Rl);
                        break;
                    }
                    l && B && he.alternate === null && t(d, B), r = n(he, r, G), W === null ? j = he : W.sibling = he, W = he, B = Rl;
                }
                if (ll.done) return e(d, B), tl && Ae(d, G), j;
                if (B === null) {
                    for(; !ll.done; G++, ll = h.next())ll = T(d, ll.value, x), ll !== null && (r = n(ll, r, G), W === null ? j = ll : W.sibling = ll, W = ll);
                    return tl && Ae(d, G), j;
                }
                for(B = a(B); !ll.done; G++, ll = h.next())ll = g(B, d, G, ll.value, x), ll !== null && (l && ll.alternate !== null && B.delete(ll.key === null ? G : ll.key), r = n(ll, r, G), W === null ? j = ll : W.sibling = ll, W = ll);
                return l && B.forEach(function(Jy) {
                    return t(d, Jy);
                }), tl && Ae(d, G), j;
            }
            function sl(d, r, h, x) {
                if (typeof h == "object" && h !== null && h.type === cl && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
                    switch(h.$$typeof){
                        case Z:
                            l: {
                                for(var j = h.key; r !== null;){
                                    if (r.key === j) {
                                        if (j = h.type, j === cl) {
                                            if (r.tag === 7) {
                                                e(d, r.sibling), x = u(r, h.props.children), x.return = d, d = x;
                                                break l;
                                            }
                                        } else if (r.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Vl && vr(j) === r.type) {
                                            e(d, r.sibling), x = u(r, h.props), Ia(x, h), x.return = d, d = x;
                                            break l;
                                        }
                                        e(d, r);
                                        break;
                                    } else t(d, r);
                                    r = r.sibling;
                                }
                                h.type === cl ? (x = xe(h.props.children, d.mode, x, h.key), x.return = d, d = x) : (x = Xu(h.type, h.key, h.props, null, d.mode, x), Ia(x, h), x.return = d, d = x);
                            }
                            return c(d);
                        case al:
                            l: {
                                for(j = h.key; r !== null;){
                                    if (r.key === j) if (r.tag === 4 && r.stateNode.containerInfo === h.containerInfo && r.stateNode.implementation === h.implementation) {
                                        e(d, r.sibling), x = u(r, h.children || []), x.return = d, d = x;
                                        break l;
                                    } else {
                                        e(d, r);
                                        break;
                                    }
                                    else t(d, r);
                                    r = r.sibling;
                                }
                                x = Ec(h, d.mode, x), x.return = d, d = x;
                            }
                            return c(d);
                        case Vl:
                            return j = h._init, h = j(h._payload), sl(d, r, h, x);
                    }
                    if (Yl(h)) return Q(d, r, h, x);
                    if (Cl(h)) {
                        if (j = Cl(h), typeof j != "function") throw Error(o(150));
                        return h = j.call(h), Y(d, r, h, x);
                    }
                    if (typeof h.then == "function") return sl(d, r, an(h), x);
                    if (h.$$typeof === yl) return sl(d, r, Vu(d, h), x);
                    un(d, h);
                }
                return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, r !== null && r.tag === 6 ? (e(d, r.sibling), x = u(r, h), x.return = d, d = x) : (e(d, r), x = pc(h, d.mode, x), x.return = d, d = x), c(d)) : e(d, r);
            }
            return function(d, r, h, x) {
                try {
                    Fa = 0;
                    var j = sl(d, r, h, x);
                    return ia = null, j;
                } catch (B) {
                    if (B === Za || B === Ku) throw B;
                    var W = tt(29, B, null, d.mode);
                    return W.lanes = x, W.return = d, W;
                } finally{}
            };
        }
        var fa = mr(!0), gr = mr(!1), yt = A(null), Tt = null;
        function Pt(l) {
            var t = l.alternate;
            U(Ol, Ol.current & 1), U(yt, l), Tt === null && (t === null || aa.current !== null || t.memoizedState !== null) && (Tt = l);
        }
        function br(l) {
            if (l.tag === 22) {
                if (U(Ol, Ol.current), U(yt, l), Tt === null) {
                    var t = l.alternate;
                    t !== null && t.memoizedState !== null && (Tt = l);
                }
            } else le();
        }
        function le() {
            U(Ol, Ol.current), U(yt, yt.current);
        }
        function Ct(l) {
            H(yt), Tt === l && (Tt = null), H(Ol);
        }
        var Ol = A(0);
        function nn(l) {
            for(var t = l; t !== null;){
                if (t.tag === 13) {
                    var e = t.memoizedState;
                    if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || Vi(e))) return t;
                } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                    if ((t.flags & 128) !== 0) return t;
                } else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue;
                }
                if (t === l) break;
                for(; t.sibling === null;){
                    if (t.return === null || t.return === l) return null;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
            return null;
        }
        function ti(l, t, e, a) {
            t = l.memoizedState, e = e(a, t), e = e == null ? t : N({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
        }
        var ei = {
            enqueueSetState: function(l, t, e) {
                l = l._reactInternals;
                var a = nt(), u = $t(a);
                u.payload = t, e != null && (u.callback = e), t = Ft(l, u, a), t !== null && (ct(t, l, a), Va(t, l, a));
            },
            enqueueReplaceState: function(l, t, e) {
                l = l._reactInternals;
                var a = nt(), u = $t(a);
                u.tag = 1, u.payload = t, e != null && (u.callback = e), t = Ft(l, u, a), t !== null && (ct(t, l, a), Va(t, l, a));
            },
            enqueueForceUpdate: function(l, t) {
                l = l._reactInternals;
                var e = nt(), a = $t(e);
                a.tag = 2, t != null && (a.callback = t), t = Ft(l, a, e), t !== null && (ct(t, l, e), Va(t, l, e));
            }
        };
        function Sr(l, t, e, a, u, n, c) {
            return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, c) : t.prototype && t.prototype.isPureReactComponent ? !ja(e, a) || !ja(u, n) : !0;
        }
        function _r(l, t, e, a) {
            l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && ei.enqueueReplaceState(t, t.state, null);
        }
        function Re(l, t) {
            var e = t;
            if ("ref" in t) {
                e = {};
                for(var a in t)a !== "ref" && (e[a] = t[a]);
            }
            if (l = l.defaultProps) {
                e === t && (e = N({}, e));
                for(var u in l)e[u] === void 0 && (e[u] = l[u]);
            }
            return e;
        }
        var cn = typeof reportError == "function" ? reportError : function(l) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                    error: l
                });
                if (!window.dispatchEvent(t)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", l);
                return;
            }
            console.error(l);
        };
        function pr(l) {
            cn(l);
        }
        function Er(l) {
            console.error(l);
        }
        function xr(l) {
            cn(l);
        }
        function fn(l, t) {
            try {
                var e = l.onUncaughtError;
                e(t.value, {
                    componentStack: t.stack
                });
            } catch (a) {
                setTimeout(function() {
                    throw a;
                });
            }
        }
        function Tr(l, t, e) {
            try {
                var a = l.onCaughtError;
                a(e.value, {
                    componentStack: e.stack,
                    errorBoundary: t.tag === 1 ? t.stateNode : null
                });
            } catch (u) {
                setTimeout(function() {
                    throw u;
                });
            }
        }
        function ai(l, t, e) {
            return e = $t(e), e.tag = 3, e.payload = {
                element: null
            }, e.callback = function() {
                fn(l, t);
            }, e;
        }
        function Ar(l) {
            return l = $t(l), l.tag = 3, l;
        }
        function zr(l, t, e, a) {
            var u = e.type.getDerivedStateFromError;
            if (typeof u == "function") {
                var n = a.value;
                l.payload = function() {
                    return u(n);
                }, l.callback = function() {
                    Tr(t, e, a);
                };
            }
            var c = e.stateNode;
            c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
                Tr(t, e, a), typeof u != "function" && (ce === null ? ce = new Set([
                    this
                ]) : ce.add(this));
                var i = a.stack;
                this.componentDidCatch(a.value, {
                    componentStack: i !== null ? i : ""
                });
            });
        }
        function Jd(l, t, e, a, u) {
            if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                if (t = e.alternate, t !== null && Ga(t, e, u, !0), e = yt.current, e !== null) {
                    switch(e.tag){
                        case 13:
                            return Tt === null ? Mi() : e.alternate === null && _l === 0 && (_l = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === Rc ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = new Set([
                                a
                            ]) : t.add(a), Di(l, a, u)), !1;
                        case 22:
                            return e.flags |= 65536, a === Rc ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    a
                                ])
                            }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = new Set([
                                a
                            ]) : e.add(a)), Di(l, a, u)), !1;
                    }
                    throw Error(o(435, e.tag));
                }
                return Di(l, a, u), Mi(), !1;
            }
            if (tl) return t = yt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== Ac && (l = Error(o(422), {
                cause: a
            }), Ya(st(l, e)))) : (a !== Ac && (t = Error(o(423), {
                cause: a
            }), Ya(st(t, e))), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = st(a, e), u = ai(l.stateNode, a, u), qc(l, u), _l !== 4 && (_l = 2)), !1;
            var n = Error(o(520), {
                cause: a
            });
            if (n = st(n, e), nu === null ? nu = [
                n
            ] : nu.push(n), _l !== 4 && (_l = 2), t === null) return !0;
            a = st(a, e), e = t;
            do {
                switch(e.tag){
                    case 3:
                        return e.flags |= 65536, l = u & -u, e.lanes |= l, l = ai(e.stateNode, a, l), qc(e, l), !1;
                    case 1:
                        if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ce === null || !ce.has(n)))) return e.flags |= 65536, u &= -u, e.lanes |= u, u = Ar(u), zr(u, l, e, a), qc(e, u), !1;
                }
                e = e.return;
            }while (e !== null);
            return !1;
        }
        var Mr = Error(o(461)), Nl = !1;
        function Hl(l, t, e, a) {
            t.child = l === null ? gr(t, null, e, a) : fa(t, l.child, e, a);
        }
        function Or(l, t, e, a, u) {
            e = e.render;
            var n = t.ref;
            if ("ref" in a) {
                var c = {};
                for(var i in a)i !== "ref" && (c[i] = a[i]);
            } else c = a;
            return De(t), a = Xc(l, t, e, c, n, u), i = Qc(), l !== null && !Nl ? (Zc(l, t, u), Yt(l, t, u)) : (tl && i && xc(t), t.flags |= 1, Hl(l, t, a, u), t.child);
        }
        function Dr(l, t, e, a, u) {
            if (l === null) {
                var n = e.type;
                return typeof n == "function" && !_c(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, Nr(l, t, n, a, u)) : (l = Xu(e.type, null, a, t, t.mode, u), l.ref = t.ref, l.return = t, t.child = l);
            }
            if (n = l.child, !oi(l, u)) {
                var c = n.memoizedProps;
                if (e = e.compare, e = e !== null ? e : ja, e(c, a) && l.ref === t.ref) return Yt(l, t, u);
            }
            return t.flags |= 1, l = Ut(n, a), l.ref = t.ref, l.return = t, t.child = l;
        }
        function Nr(l, t, e, a, u) {
            if (l !== null) {
                var n = l.memoizedProps;
                if (ja(n, a) && l.ref === t.ref) if (Nl = !1, t.pendingProps = a = n, oi(l, u)) (l.flags & 131072) !== 0 && (Nl = !0);
                else return t.lanes = l.lanes, Yt(l, t, u);
            }
            return ui(l, t, e, a, u);
        }
        function Ur(l, t, e) {
            var a = t.pendingProps, u = a.children, n = l !== null ? l.memoizedState : null;
            if (a.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (a = n !== null ? n.baseLanes | e : e, l !== null) {
                        for(u = t.child = l.child, n = 0; u !== null;)n = n | u.lanes | u.childLanes, u = u.sibling;
                        t.childLanes = n & ~a;
                    } else t.childLanes = 0, t.child = null;
                    return Rr(l, t, a, e);
                }
                if ((e & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, l !== null && wu(t, n !== null ? n.cachePool : null), n !== null ? Ns(t, n) : Cc(), br(t);
                else return t.lanes = t.childLanes = 536870912, Rr(l, t, n !== null ? n.baseLanes | e : e, e);
            } else n !== null ? (wu(t, n.cachePool), Ns(t, n), le(), t.memoizedState = null) : (l !== null && wu(t, null), Cc(), le());
            return Hl(l, t, u, e), t.child;
        }
        function Rr(l, t, e, a) {
            var u = Uc();
            return u = u === null ? null : {
                parent: Ml._currentValue,
                pool: u
            }, t.memoizedState = {
                baseLanes: e,
                cachePool: u
            }, l !== null && wu(t, null), Cc(), br(t), l !== null && Ga(l, t, a, !0), null;
        }
        function sn(l, t) {
            var e = t.ref;
            if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof e != "function" && typeof e != "object") throw Error(o(284));
                (l === null || l.ref !== e) && (t.flags |= 4194816);
            }
        }
        function ui(l, t, e, a, u) {
            return De(t), e = Xc(l, t, e, a, void 0, u), a = Qc(), l !== null && !Nl ? (Zc(l, t, u), Yt(l, t, u)) : (tl && a && xc(t), t.flags |= 1, Hl(l, t, e, u), t.child);
        }
        function Hr(l, t, e, a, u, n) {
            return De(t), t.updateQueue = null, e = Rs(t, a, e, u), Us(l), a = Qc(), l !== null && !Nl ? (Zc(l, t, n), Yt(l, t, n)) : (tl && a && xc(t), t.flags |= 1, Hl(l, t, e, n), t.child);
        }
        function jr(l, t, e, a, u) {
            if (De(t), t.stateNode === null) {
                var n = Ie, c = e.contextType;
                typeof c == "object" && c !== null && (n = Xl(c)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = ei, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Hc(t), c = e.contextType, n.context = typeof c == "object" && c !== null ? Xl(c) : Ie, n.state = t.memoizedState, c = e.getDerivedStateFromProps, typeof c == "function" && (ti(t, e, c, a), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && ei.enqueueReplaceState(n, n.state, null), Ka(t, a, n, u), wa(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
            } else if (l === null) {
                n = t.stateNode;
                var i = t.memoizedProps, f = Re(e, i);
                n.props = f;
                var v = n.context, _ = e.contextType;
                c = Ie, typeof _ == "object" && _ !== null && (c = Xl(_));
                var T = e.getDerivedStateFromProps;
                _ = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, _ || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || v !== c) && _r(t, n, a, c), Wt = !1;
                var m = t.memoizedState;
                n.state = m, Ka(t, a, n, u), wa(), v = t.memoizedState, i || m !== v || Wt ? (typeof T == "function" && (ti(t, e, T, a), v = t.memoizedState), (f = Wt || Sr(t, e, f, a, m, v, c)) ? (_ || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = v), n.props = a, n.state = v, n.context = c, a = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
            } else {
                n = t.stateNode, jc(l, t), c = t.memoizedProps, _ = Re(e, c), n.props = _, T = t.pendingProps, m = n.context, v = e.contextType, f = Ie, typeof v == "object" && v !== null && (f = Xl(v)), i = e.getDerivedStateFromProps, (v = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== T || m !== f) && _r(t, n, a, f), Wt = !1, m = t.memoizedState, n.state = m, Ka(t, a, n, u), wa();
                var g = t.memoizedState;
                c !== T || m !== g || Wt || l !== null && l.dependencies !== null && Lu(l.dependencies) ? (typeof i == "function" && (ti(t, e, i, a), g = t.memoizedState), (_ = Wt || Sr(t, e, _, a, m, g, f) || l !== null && l.dependencies !== null && Lu(l.dependencies)) ? (v || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, g, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, g, f)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && m === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && m === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = g), n.props = a, n.state = g, n.context = f, a = _) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && m === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && m === l.memoizedState || (t.flags |= 1024), a = !1);
            }
            return n = a, sn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = fa(t, l.child, null, u), t.child = fa(t, null, e, u)) : Hl(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = Yt(l, t, u), l;
        }
        function qr(l, t, e, a) {
            return Ca(), t.flags |= 256, Hl(l, t, e, a), t.child;
        }
        var ni = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function ci(l) {
            return {
                baseLanes: l,
                cachePool: Es()
            };
        }
        function ii(l, t, e) {
            return l = l !== null ? l.childLanes & ~e : 0, t && (l |= ht), l;
        }
        function Br(l, t, e) {
            var a = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, c;
            if ((c = n) || (c = l !== null && l.memoizedState === null ? !1 : (Ol.current & 2) !== 0), c && (u = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
                if (tl) {
                    if (u ? Pt(t) : le(), tl) {
                        var i = Sl, f;
                        if (f = i) {
                            l: {
                                for(f = i, i = xt; f.nodeType !== 8;){
                                    if (!i) {
                                        i = null;
                                        break l;
                                    }
                                    if (f = _t(f.nextSibling), f === null) {
                                        i = null;
                                        break l;
                                    }
                                }
                                i = f;
                            }
                            i !== null ? (t.memoizedState = {
                                dehydrated: i,
                                treeContext: Te !== null ? {
                                    id: Rt,
                                    overflow: Ht
                                } : null,
                                retryLane: 536870912,
                                hydrationErrors: null
                            }, f = tt(18, null, null, 0), f.stateNode = i, f.return = t, t.child = f, wl = t, Sl = null, f = !0) : f = !1;
                        }
                        f || Me(t);
                    }
                    if (i = t.memoizedState, i !== null && (i = i.dehydrated, i !== null)) return Vi(i) ? t.lanes = 32 : t.lanes = 536870912, null;
                    Ct(t);
                }
                return i = a.children, a = a.fallback, u ? (le(), u = t.mode, i = rn({
                    mode: "hidden",
                    children: i
                }, u), a = xe(a, u, e, null), i.return = t, a.return = t, i.sibling = a, t.child = i, u = t.child, u.memoizedState = ci(e), u.childLanes = ii(l, c, e), t.memoizedState = ni, a) : (Pt(t), fi(t, i));
            }
            if (f = l.memoizedState, f !== null && (i = f.dehydrated, i !== null)) {
                if (n) t.flags & 256 ? (Pt(t), t.flags &= -257, t = si(l, t, e)) : t.memoizedState !== null ? (le(), t.child = l.child, t.flags |= 128, t = null) : (le(), u = a.fallback, i = t.mode, a = rn({
                    mode: "visible",
                    children: a.children
                }, i), u = xe(u, i, e, null), u.flags |= 2, a.return = t, u.return = t, a.sibling = u, t.child = a, fa(t, l.child, null, e), a = t.child, a.memoizedState = ci(e), a.childLanes = ii(l, c, e), t.memoizedState = ni, t = u);
                else if (Pt(t), Vi(i)) {
                    if (c = i.nextSibling && i.nextSibling.dataset, c) var v = c.dgst;
                    c = v, a = Error(o(419)), a.stack = "", a.digest = c, Ya({
                        value: a,
                        source: null,
                        stack: null
                    }), t = si(l, t, e);
                } else if (Nl || Ga(l, t, e, !1), c = (e & l.childLanes) !== 0, Nl || c) {
                    if (c = hl, c !== null && (a = e & -e, a = (a & 42) !== 0 ? 1 : wn(a), a = (a & (c.suspendedLanes | e)) !== 0 ? 0 : a, a !== 0 && a !== f.retryLane)) throw f.retryLane = a, Fe(l, a), ct(c, l, a), Mr;
                    i.data === "$?" || Mi(), t = si(l, t, e);
                } else i.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, Sl = _t(i.nextSibling), wl = t, tl = !0, ze = null, xt = !1, l !== null && (ot[dt++] = Rt, ot[dt++] = Ht, ot[dt++] = Te, Rt = l.id, Ht = l.overflow, Te = t), t = fi(t, a.children), t.flags |= 4096);
                return t;
            }
            return u ? (le(), u = a.fallback, i = t.mode, f = l.child, v = f.sibling, a = Ut(f, {
                mode: "hidden",
                children: a.children
            }), a.subtreeFlags = f.subtreeFlags & 65011712, v !== null ? u = Ut(v, u) : (u = xe(u, i, e, null), u.flags |= 2), u.return = t, a.return = t, a.sibling = u, t.child = a, a = u, u = t.child, i = l.child.memoizedState, i === null ? i = ci(e) : (f = i.cachePool, f !== null ? (v = Ml._currentValue, f = f.parent !== v ? {
                parent: v,
                pool: v
            } : f) : f = Es(), i = {
                baseLanes: i.baseLanes | e,
                cachePool: f
            }), u.memoizedState = i, u.childLanes = ii(l, c, e), t.memoizedState = ni, a) : (Pt(t), e = l.child, l = e.sibling, e = Ut(e, {
                mode: "visible",
                children: a.children
            }), e.return = t, e.sibling = null, l !== null && (c = t.deletions, c === null ? (t.deletions = [
                l
            ], t.flags |= 16) : c.push(l)), t.child = e, t.memoizedState = null, e);
        }
        function fi(l, t) {
            return t = rn({
                mode: "visible",
                children: t
            }, l.mode), t.return = l, l.child = t;
        }
        function rn(l, t) {
            return l = tt(22, l, null, t), l.lanes = 0, l.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }, l;
        }
        function si(l, t, e) {
            return fa(t, l.child, null, e), l = fi(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
        }
        function Cr(l, t, e) {
            l.lanes |= t;
            var a = l.alternate;
            a !== null && (a.lanes |= t), Mc(l.return, t, e);
        }
        function ri(l, t, e, a, u) {
            var n = l.memoizedState;
            n === null ? l.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: a,
                tail: e,
                tailMode: u
            } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = e, n.tailMode = u);
        }
        function Yr(l, t, e) {
            var a = t.pendingProps, u = a.revealOrder, n = a.tail;
            if (Hl(l, t, a.children, e), a = Ol.current, (a & 2) !== 0) a = a & 1 | 2, t.flags |= 128;
            else {
                if (l !== null && (l.flags & 128) !== 0) l: for(l = t.child; l !== null;){
                    if (l.tag === 13) l.memoizedState !== null && Cr(l, e, t);
                    else if (l.tag === 19) Cr(l, e, t);
                    else if (l.child !== null) {
                        l.child.return = l, l = l.child;
                        continue;
                    }
                    if (l === t) break l;
                    for(; l.sibling === null;){
                        if (l.return === null || l.return === t) break l;
                        l = l.return;
                    }
                    l.sibling.return = l.return, l = l.sibling;
                }
                a &= 1;
            }
            switch(U(Ol, a), u){
                case "forwards":
                    for(e = t.child, u = null; e !== null;)l = e.alternate, l !== null && nn(l) === null && (u = e), e = e.sibling;
                    e = u, e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null), ri(t, !1, u, e, n);
                    break;
                case "backwards":
                    for(e = null, u = t.child, t.child = null; u !== null;){
                        if (l = u.alternate, l !== null && nn(l) === null) {
                            t.child = u;
                            break;
                        }
                        l = u.sibling, u.sibling = e, e = u, u = l;
                    }
                    ri(t, !0, e, null, n);
                    break;
                case "together":
                    ri(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
            return t.child;
        }
        function Yt(l, t, e) {
            if (l !== null && (t.dependencies = l.dependencies), ne |= t.lanes, (e & t.childLanes) === 0) if (l !== null) {
                if (Ga(l, t, e, !1), (e & t.childLanes) === 0) return null;
            } else return null;
            if (l !== null && t.child !== l.child) throw Error(o(153));
            if (t.child !== null) {
                for(l = t.child, e = Ut(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null;)l = l.sibling, e = e.sibling = Ut(l, l.pendingProps), e.return = t;
                e.sibling = null;
            }
            return t.child;
        }
        function oi(l, t) {
            return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Lu(l)));
        }
        function kd(l, t, e) {
            switch(t.tag){
                case 3:
                    vl(t, t.stateNode.containerInfo), kt(t, Ml, l.memoizedState.cache), Ca();
                    break;
                case 27:
                case 5:
                    Xn(t);
                    break;
                case 4:
                    vl(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    kt(t, t.type, t.memoizedProps.value);
                    break;
                case 13:
                    var a = t.memoizedState;
                    if (a !== null) return a.dehydrated !== null ? (Pt(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? Br(l, t, e) : (Pt(t), l = Yt(l, t, e), l !== null ? l.sibling : null);
                    Pt(t);
                    break;
                case 19:
                    var u = (l.flags & 128) !== 0;
                    if (a = (e & t.childLanes) !== 0, a || (Ga(l, t, e, !1), a = (e & t.childLanes) !== 0), u) {
                        if (a) return Yr(l, t, e);
                        t.flags |= 128;
                    }
                    if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), U(Ol, Ol.current), a) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, Ur(l, t, e);
                case 24:
                    kt(t, Ml, l.memoizedState.cache);
            }
            return Yt(l, t, e);
        }
        function Gr(l, t, e) {
            if (l !== null) if (l.memoizedProps !== t.pendingProps) Nl = !0;
            else {
                if (!oi(l, e) && (t.flags & 128) === 0) return Nl = !1, kd(l, t, e);
                Nl = (l.flags & 131072) !== 0;
            }
            else Nl = !1, tl && (t.flags & 1048576) !== 0 && vs(t, Zu, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    l: {
                        l = t.pendingProps;
                        var a = t.elementType, u = a._init;
                        if (a = u(a._payload), t.type = a, typeof a == "function") _c(a) ? (l = Re(a, l), t.tag = 1, t = jr(null, t, a, l, e)) : (t.tag = 0, t = ui(null, t, a, l, e));
                        else {
                            if (a != null) {
                                if (u = a.$$typeof, u === Bl) {
                                    t.tag = 11, t = Or(null, t, a, l, e);
                                    break l;
                                } else if (u === Ll) {
                                    t.tag = 14, t = Dr(null, t, a, l, e);
                                    break l;
                                }
                            }
                            throw t = ge(a) || a, Error(o(306, t, ""));
                        }
                    }
                    return t;
                case 0:
                    return ui(l, t, t.type, t.pendingProps, e);
                case 1:
                    return a = t.type, u = Re(a, t.pendingProps), jr(l, t, a, u, e);
                case 3:
                    l: {
                        if (vl(t, t.stateNode.containerInfo), l === null) throw Error(o(387));
                        a = t.pendingProps;
                        var n = t.memoizedState;
                        u = n.element, jc(l, t), Ka(t, a, null, e);
                        var c = t.memoizedState;
                        if (a = c.cache, kt(t, Ml, a), a !== n.cache && Oc(t, [
                            Ml
                        ], e, !0), wa(), a = c.element, n.isDehydrated) if (n = {
                            element: a,
                            isDehydrated: !1,
                            cache: c.cache
                        }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
                            t = qr(l, t, a, e);
                            break l;
                        } else if (a !== u) {
                            u = st(Error(o(424)), t), Ya(u), t = qr(l, t, a, e);
                            break l;
                        } else {
                            switch(l = t.stateNode.containerInfo, l.nodeType){
                                case 9:
                                    l = l.body;
                                    break;
                                default:
                                    l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
                            }
                            for(Sl = _t(l.firstChild), wl = t, tl = !0, ze = null, xt = !0, e = gr(t, null, a, e), t.child = e; e;)e.flags = e.flags & -3 | 4096, e = e.sibling;
                        }
                        else {
                            if (Ca(), a === u) {
                                t = Yt(l, t, e);
                                break l;
                            }
                            Hl(l, t, a, e);
                        }
                        t = t.child;
                    }
                    return t;
                case 26:
                    return sn(l, t), l === null ? (e = Vo(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : tl || (e = t.type, l = t.pendingProps, a = Tn(L.current).createElement(e), a[Gl] = t, a[Kl] = l, ql(a, e, l), Dl(a), t.stateNode = a) : t.memoizedState = Vo(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
                case 27:
                    return Xn(t), l === null && tl && (a = t.stateNode = Qo(t.type, t.pendingProps, L.current), wl = t, xt = !0, u = Sl, se(t.type) ? (wi = u, Sl = _t(a.firstChild)) : Sl = u), Hl(l, t, t.pendingProps.children, e), sn(l, t), l === null && (t.flags |= 4194304), t.child;
                case 5:
                    return l === null && tl && ((u = a = Sl) && (a = Ey(a, t.type, t.pendingProps, xt), a !== null ? (t.stateNode = a, wl = t, Sl = _t(a.firstChild), xt = !1, u = !0) : u = !1), u || Me(t)), Xn(t), u = t.type, n = t.pendingProps, c = l !== null ? l.memoizedProps : null, a = n.children, Qi(u, n) ? a = null : c !== null && Qi(u, c) && (t.flags |= 32), t.memoizedState !== null && (u = Xc(l, t, Xd, null, null, e), hu._currentValue = u), sn(l, t), Hl(l, t, a, e), t.child;
                case 6:
                    return l === null && tl && ((l = e = Sl) && (e = xy(e, t.pendingProps, xt), e !== null ? (t.stateNode = e, wl = t, Sl = null, l = !0) : l = !1), l || Me(t)), null;
                case 13:
                    return Br(l, t, e);
                case 4:
                    return vl(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = fa(t, null, a, e) : Hl(l, t, a, e), t.child;
                case 11:
                    return Or(l, t, t.type, t.pendingProps, e);
                case 7:
                    return Hl(l, t, t.pendingProps, e), t.child;
                case 8:
                    return Hl(l, t, t.pendingProps.children, e), t.child;
                case 12:
                    return Hl(l, t, t.pendingProps.children, e), t.child;
                case 10:
                    return a = t.pendingProps, kt(t, t.type, a.value), Hl(l, t, a.children, e), t.child;
                case 9:
                    return u = t.type._context, a = t.pendingProps.children, De(t), u = Xl(u), a = a(u), t.flags |= 1, Hl(l, t, a, e), t.child;
                case 14:
                    return Dr(l, t, t.type, t.pendingProps, e);
                case 15:
                    return Nr(l, t, t.type, t.pendingProps, e);
                case 19:
                    return Yr(l, t, e);
                case 31:
                    return a = t.pendingProps, e = t.mode, a = {
                        mode: a.mode,
                        children: a.children
                    }, l === null ? (e = rn(a, e), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = Ut(l.child, a), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
                case 22:
                    return Ur(l, t, e);
                case 24:
                    return De(t), a = Xl(Ml), l === null ? (u = Uc(), u === null && (u = hl, n = Dc(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = {
                        parent: a,
                        cache: u
                    }, Hc(t), kt(t, Ml, u)) : ((l.lanes & e) !== 0 && (jc(l, t), Ka(t, null, null, e), wa()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = {
                        parent: a,
                        cache: a
                    }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), kt(t, Ml, a)) : (a = n.cache, kt(t, Ml, a), a !== u.cache && Oc(t, [
                        Ml
                    ], e, !0))), Hl(l, t, t.pendingProps.children, e), t.child;
                case 29:
                    throw t.pendingProps;
            }
            throw Error(o(156, t.tag));
        }
        function Gt(l) {
            l.flags |= 4;
        }
        function Xr(l, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
            else if (l.flags |= 16777216, !Wo(t)) {
                if (t = yt.current, t !== null && ((I & 4194048) === I ? Tt !== null : (I & 62914560) !== I && (I & 536870912) === 0 || t !== Tt)) throw La = Rc, xs;
                l.flags |= 8192;
            }
        }
        function on(l, t) {
            t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? bf() : 536870912, l.lanes |= t, da |= t);
        }
        function Pa(l, t) {
            if (!tl) switch(l.tailMode){
                case "hidden":
                    t = l.tail;
                    for(var e = null; t !== null;)t.alternate !== null && (e = t), t = t.sibling;
                    e === null ? l.tail = null : e.sibling = null;
                    break;
                case "collapsed":
                    e = l.tail;
                    for(var a = null; e !== null;)e.alternate !== null && (a = e), e = e.sibling;
                    a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
            }
        }
        function gl(l) {
            var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
            if (t) for(var u = l.child; u !== null;)e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = l, u = u.sibling;
            else for(u = l.child; u !== null;)e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling;
            return l.subtreeFlags |= a, l.childLanes = e, t;
        }
        function Wd(l, t, e) {
            var a = t.pendingProps;
            switch(Tc(t), t.tag){
                case 31:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return gl(t), null;
                case 1:
                    return gl(t), null;
                case 3:
                    return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), qt(Ml), Vt(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (Ba(t) ? Gt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, bs())), gl(t), null;
                case 26:
                    return e = t.memoizedState, l === null ? (Gt(t), e !== null ? (gl(t), Xr(t, e)) : (gl(t), t.flags &= -16777217)) : e ? e !== l.memoizedState ? (Gt(t), gl(t), Xr(t, e)) : (gl(t), t.flags &= -16777217) : (l.memoizedProps !== a && Gt(t), gl(t), t.flags &= -16777217), null;
                case 27:
                    pu(t), e = L.current;
                    var u = t.type;
                    if (l !== null && t.stateNode != null) l.memoizedProps !== a && Gt(t);
                    else {
                        if (!a) {
                            if (t.stateNode === null) throw Error(o(166));
                            return gl(t), null;
                        }
                        l = C.current, Ba(t) ? ms(t) : (l = Qo(u, a, e), t.stateNode = l, Gt(t));
                    }
                    return gl(t), null;
                case 5:
                    if (pu(t), e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Gt(t);
                    else {
                        if (!a) {
                            if (t.stateNode === null) throw Error(o(166));
                            return gl(t), null;
                        }
                        if (l = C.current, Ba(t)) ms(t);
                        else {
                            switch(u = Tn(L.current), l){
                                case 1:
                                    l = u.createElementNS("http://www.w3.org/2000/svg", e);
                                    break;
                                case 2:
                                    l = u.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                                    break;
                                default:
                                    switch(e){
                                        case "svg":
                                            l = u.createElementNS("http://www.w3.org/2000/svg", e);
                                            break;
                                        case "math":
                                            l = u.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                                            break;
                                        case "script":
                                            l = u.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                                            break;
                                        case "select":
                                            l = typeof a.is == "string" ? u.createElement("select", {
                                                is: a.is
                                            }) : u.createElement("select"), a.multiple ? l.multiple = !0 : a.size && (l.size = a.size);
                                            break;
                                        default:
                                            l = typeof a.is == "string" ? u.createElement(e, {
                                                is: a.is
                                            }) : u.createElement(e);
                                    }
                            }
                            l[Gl] = t, l[Kl] = a;
                            l: for(u = t.child; u !== null;){
                                if (u.tag === 5 || u.tag === 6) l.appendChild(u.stateNode);
                                else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                                    u.child.return = u, u = u.child;
                                    continue;
                                }
                                if (u === t) break l;
                                for(; u.sibling === null;){
                                    if (u.return === null || u.return === t) break l;
                                    u = u.return;
                                }
                                u.sibling.return = u.return, u = u.sibling;
                            }
                            t.stateNode = l;
                            l: switch(ql(l, e, a), e){
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l = !!a.autoFocus;
                                    break l;
                                case "img":
                                    l = !0;
                                    break l;
                                default:
                                    l = !1;
                            }
                            l && Gt(t);
                        }
                    }
                    return gl(t), t.flags &= -16777217, null;
                case 6:
                    if (l && t.stateNode != null) l.memoizedProps !== a && Gt(t);
                    else {
                        if (typeof a != "string" && t.stateNode === null) throw Error(o(166));
                        if (l = L.current, Ba(t)) {
                            if (l = t.stateNode, e = t.memoizedProps, a = null, u = wl, u !== null) switch(u.tag){
                                case 27:
                                case 5:
                                    a = u.memoizedProps;
                            }
                            l[Gl] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || jo(l.nodeValue, e)), l || Me(t);
                        } else l = Tn(l).createTextNode(a), l[Gl] = t, t.stateNode = l;
                    }
                    return gl(t), null;
                case 13:
                    if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                        if (u = Ba(t), a !== null && a.dehydrated !== null) {
                            if (l === null) {
                                if (!u) throw Error(o(318));
                                if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
                                u[Gl] = t;
                            } else Ca(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            gl(t), u = !1;
                        } else u = bs(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
                        if (!u) return t.flags & 256 ? (Ct(t), t) : (Ct(t), null);
                    }
                    if (Ct(t), (t.flags & 128) !== 0) return t.lanes = e, t;
                    if (e = a !== null, l = l !== null && l.memoizedState !== null, e) {
                        a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool);
                        var n = null;
                        a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048);
                    }
                    return e !== l && e && (t.child.flags |= 8192), on(t, t.updateQueue), gl(t), null;
                case 4:
                    return Vt(), l === null && Bi(t.stateNode.containerInfo), gl(t), null;
                case 10:
                    return qt(t.type), gl(t), null;
                case 19:
                    if (H(Ol), u = t.memoizedState, u === null) return gl(t), null;
                    if (a = (t.flags & 128) !== 0, n = u.rendering, n === null) if (a) Pa(u, !1);
                    else {
                        if (_l !== 0 || l !== null && (l.flags & 128) !== 0) for(l = t.child; l !== null;){
                            if (n = nn(l), n !== null) {
                                for(t.flags |= 128, Pa(u, !1), l = n.updateQueue, t.updateQueue = l, on(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null;)hs(e, l), e = e.sibling;
                                return U(Ol, Ol.current & 1 | 2), t.child;
                            }
                            l = l.sibling;
                        }
                        u.tail !== null && Et() > hn && (t.flags |= 128, a = !0, Pa(u, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!a) if (l = nn(n), l !== null) {
                            if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, on(t, l), Pa(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !tl) return gl(t), null;
                        } else 2 * Et() - u.renderingStartTime > hn && e !== 536870912 && (t.flags |= 128, a = !0, Pa(u, !1), t.lanes = 4194304);
                        u.isBackwards ? (n.sibling = t.child, t.child = n) : (l = u.last, l !== null ? l.sibling = n : t.child = n, u.last = n);
                    }
                    return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Et(), t.sibling = null, l = Ol.current, U(Ol, a ? l & 1 | 2 : l & 1), t) : (gl(t), null);
                case 22:
                case 23:
                    return Ct(t), Yc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (gl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : gl(t), e = t.updateQueue, e !== null && on(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && H(Ne), null;
                case 24:
                    return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), qt(Ml), gl(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(o(156, t.tag));
        }
        function $d(l, t) {
            switch(Tc(t), t.tag){
                case 1:
                    return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
                case 3:
                    return qt(Ml), Vt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return pu(t), null;
                case 13:
                    if (Ct(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
                        if (t.alternate === null) throw Error(o(340));
                        Ca();
                    }
                    return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
                case 19:
                    return H(Ol), null;
                case 4:
                    return Vt(), null;
                case 10:
                    return qt(t.type), null;
                case 22:
                case 23:
                    return Ct(t), Yc(), l !== null && H(Ne), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
                case 24:
                    return qt(Ml), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function Qr(l, t) {
            switch(Tc(t), t.tag){
                case 3:
                    qt(Ml), Vt();
                    break;
                case 26:
                case 27:
                case 5:
                    pu(t);
                    break;
                case 4:
                    Vt();
                    break;
                case 13:
                    Ct(t);
                    break;
                case 19:
                    H(Ol);
                    break;
                case 10:
                    qt(t.type);
                    break;
                case 22:
                case 23:
                    Ct(t), Yc(), l !== null && H(Ne);
                    break;
                case 24:
                    qt(Ml);
            }
        }
        function lu(l, t) {
            try {
                var e = t.updateQueue, a = e !== null ? e.lastEffect : null;
                if (a !== null) {
                    var u = a.next;
                    e = u;
                    do {
                        if ((e.tag & l) === l) {
                            a = void 0;
                            var n = e.create, c = e.inst;
                            a = n(), c.destroy = a;
                        }
                        e = e.next;
                    }while (e !== u);
                }
            } catch (i) {
                ol(t, t.return, i);
            }
        }
        function te(l, t, e) {
            try {
                var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
                if (u !== null) {
                    var n = u.next;
                    a = n;
                    do {
                        if ((a.tag & l) === l) {
                            var c = a.inst, i = c.destroy;
                            if (i !== void 0) {
                                c.destroy = void 0, u = t;
                                var f = e, v = i;
                                try {
                                    v();
                                } catch (_) {
                                    ol(u, f, _);
                                }
                            }
                        }
                        a = a.next;
                    }while (a !== n);
                }
            } catch (_) {
                ol(t, t.return, _);
            }
        }
        function Zr(l) {
            var t = l.updateQueue;
            if (t !== null) {
                var e = l.stateNode;
                try {
                    Ds(t, e);
                } catch (a) {
                    ol(l, l.return, a);
                }
            }
        }
        function Lr(l, t, e) {
            e.props = Re(l.type, l.memoizedProps), e.state = l.memoizedState;
            try {
                e.componentWillUnmount();
            } catch (a) {
                ol(l, t, a);
            }
        }
        function tu(l, t) {
            try {
                var e = l.ref;
                if (e !== null) {
                    switch(l.tag){
                        case 26:
                        case 27:
                        case 5:
                            var a = l.stateNode;
                            break;
                        case 30:
                            a = l.stateNode;
                            break;
                        default:
                            a = l.stateNode;
                    }
                    typeof e == "function" ? l.refCleanup = e(a) : e.current = a;
                }
            } catch (u) {
                ol(l, t, u);
            }
        }
        function At(l, t) {
            var e = l.ref, a = l.refCleanup;
            if (e !== null) if (typeof a == "function") try {
                a();
            } catch (u) {
                ol(l, t, u);
            } finally{
                l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
            }
            else if (typeof e == "function") try {
                e(null);
            } catch (u) {
                ol(l, t, u);
            }
            else e.current = null;
        }
        function Vr(l) {
            var t = l.type, e = l.memoizedProps, a = l.stateNode;
            try {
                l: switch(t){
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        e.autoFocus && a.focus();
                        break l;
                    case "img":
                        e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
                }
            } catch (u) {
                ol(l, l.return, u);
            }
        }
        function di(l, t, e) {
            try {
                var a = l.stateNode;
                gy(a, l.type, e, t), a[Kl] = t;
            } catch (u) {
                ol(l, l.return, u);
            }
        }
        function wr(l) {
            return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && se(l.type) || l.tag === 4;
        }
        function yi(l) {
            l: for(;;){
                for(; l.sibling === null;){
                    if (l.return === null || wr(l.return)) return null;
                    l = l.return;
                }
                for(l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18;){
                    if (l.tag === 27 && se(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
                    l.child.return = l, l = l.child;
                }
                if (!(l.flags & 2)) return l.stateNode;
            }
        }
        function hi(l, t, e) {
            var a = l.tag;
            if (a === 5 || a === 6) l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = xn));
            else if (a !== 4 && (a === 27 && se(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null)) for(hi(l, t, e), l = l.sibling; l !== null;)hi(l, t, e), l = l.sibling;
        }
        function dn(l, t, e) {
            var a = l.tag;
            if (a === 5 || a === 6) l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
            else if (a !== 4 && (a === 27 && se(l.type) && (e = l.stateNode), l = l.child, l !== null)) for(dn(l, t, e), l = l.sibling; l !== null;)dn(l, t, e), l = l.sibling;
        }
        function Kr(l) {
            var t = l.stateNode, e = l.memoizedProps;
            try {
                for(var a = l.type, u = t.attributes; u.length;)t.removeAttributeNode(u[0]);
                ql(t, a, e), t[Gl] = l, t[Kl] = e;
            } catch (n) {
                ol(l, l.return, n);
            }
        }
        var Xt = !1, xl = !1, vi = !1, Jr = typeof WeakSet == "function" ? WeakSet : Set, Ul = null;
        function Fd(l, t) {
            if (l = l.containerInfo, Gi = Nn, l = us(l), yc(l)) {
                if ("selectionStart" in l) var e = {
                    start: l.selectionStart,
                    end: l.selectionEnd
                };
                else l: {
                    e = (e = l.ownerDocument) && e.defaultView || window;
                    var a = e.getSelection && e.getSelection();
                    if (a && a.rangeCount !== 0) {
                        e = a.anchorNode;
                        var u = a.anchorOffset, n = a.focusNode;
                        a = a.focusOffset;
                        try {
                            e.nodeType, n.nodeType;
                        } catch  {
                            e = null;
                            break l;
                        }
                        var c = 0, i = -1, f = -1, v = 0, _ = 0, T = l, m = null;
                        t: for(;;){
                            for(var g; T !== e || u !== 0 && T.nodeType !== 3 || (i = c + u), T !== n || a !== 0 && T.nodeType !== 3 || (f = c + a), T.nodeType === 3 && (c += T.nodeValue.length), (g = T.firstChild) !== null;)m = T, T = g;
                            for(;;){
                                if (T === l) break t;
                                if (m === e && ++v === u && (i = c), m === n && ++_ === a && (f = c), (g = T.nextSibling) !== null) break;
                                T = m, m = T.parentNode;
                            }
                            T = g;
                        }
                        e = i === -1 || f === -1 ? null : {
                            start: i,
                            end: f
                        };
                    } else e = null;
                }
                e = e || {
                    start: 0,
                    end: 0
                };
            } else e = null;
            for(Xi = {
                focusedElem: l,
                selectionRange: e
            }, Nn = !1, Ul = t; Ul !== null;)if (t = Ul, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null) l.return = t, Ul = l;
            else for(; Ul !== null;){
                switch(t = Ul, n = t.alternate, l = t.flags, t.tag){
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((l & 1024) !== 0 && n !== null) {
                            l = void 0, e = t, u = n.memoizedProps, n = n.memoizedState, a = e.stateNode;
                            try {
                                var Q = Re(e.type, u, e.elementType === e.type);
                                l = a.getSnapshotBeforeUpdate(Q, n), a.__reactInternalSnapshotBeforeUpdate = l;
                            } catch (Y) {
                                ol(e, e.return, Y);
                            }
                        }
                        break;
                    case 3:
                        if ((l & 1024) !== 0) {
                            if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9) Li(l);
                            else if (e === 1) switch(l.nodeName){
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Li(l);
                                    break;
                                default:
                                    l.textContent = "";
                            }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((l & 1024) !== 0) throw Error(o(163));
                }
                if (l = t.sibling, l !== null) {
                    l.return = t.return, Ul = l;
                    break;
                }
                Ul = t.return;
            }
        }
        function kr(l, t, e) {
            var a = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    ee(l, e), a & 4 && lu(5, e);
                    break;
                case 1:
                    if (ee(l, e), a & 4) if (l = e.stateNode, t === null) try {
                        l.componentDidMount();
                    } catch (c) {
                        ol(e, e.return, c);
                    }
                    else {
                        var u = Re(e.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
                        } catch (c) {
                            ol(e, e.return, c);
                        }
                    }
                    a & 64 && Zr(e), a & 512 && tu(e, e.return);
                    break;
                case 3:
                    if (ee(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
                        if (t = null, e.child !== null) switch(e.child.tag){
                            case 27:
                            case 5:
                                t = e.child.stateNode;
                                break;
                            case 1:
                                t = e.child.stateNode;
                        }
                        try {
                            Ds(l, t);
                        } catch (c) {
                            ol(e, e.return, c);
                        }
                    }
                    break;
                case 27:
                    t === null && a & 4 && Kr(e);
                case 26:
                case 5:
                    ee(l, e), t === null && a & 4 && Vr(e), a & 512 && tu(e, e.return);
                    break;
                case 12:
                    ee(l, e);
                    break;
                case 13:
                    ee(l, e), a & 4 && Fr(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = cy.bind(null, e), Ty(l, e))));
                    break;
                case 22:
                    if (a = e.memoizedState !== null || Xt, !a) {
                        t = t !== null && t.memoizedState !== null || xl, u = Xt;
                        var n = xl;
                        Xt = a, (xl = t) && !n ? ae(l, e, (e.subtreeFlags & 8772) !== 0) : ee(l, e), Xt = u, xl = n;
                    }
                    break;
                case 30:
                    break;
                default:
                    ee(l, e);
            }
        }
        function Wr(l) {
            var t = l.alternate;
            t !== null && (l.alternate = null, Wr(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && kn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
        }
        var ml = null, Wl = !1;
        function Qt(l, t, e) {
            for(e = e.child; e !== null;)$r(l, t, e), e = e.sibling;
        }
        function $r(l, t, e) {
            if (Il && typeof Il.onCommitFiberUnmount == "function") try {
                Il.onCommitFiberUnmount(Ea, e);
            } catch  {}
            switch(e.tag){
                case 26:
                    xl || At(e, t), Qt(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
                    break;
                case 27:
                    xl || At(e, t);
                    var a = ml, u = Wl;
                    se(e.type) && (ml = e.stateNode, Wl = !1), Qt(l, t, e), ru(e.stateNode), ml = a, Wl = u;
                    break;
                case 5:
                    xl || At(e, t);
                case 6:
                    if (a = ml, u = Wl, ml = null, Qt(l, t, e), ml = a, Wl = u, ml !== null) if (Wl) try {
                        (ml.nodeType === 9 ? ml.body : ml.nodeName === "HTML" ? ml.ownerDocument.body : ml).removeChild(e.stateNode);
                    } catch (n) {
                        ol(e, t, n);
                    }
                    else try {
                        ml.removeChild(e.stateNode);
                    } catch (n) {
                        ol(e, t, n);
                    }
                    break;
                case 18:
                    ml !== null && (Wl ? (l = ml, Go(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), bu(l)) : Go(ml, e.stateNode));
                    break;
                case 4:
                    a = ml, u = Wl, ml = e.stateNode.containerInfo, Wl = !0, Qt(l, t, e), ml = a, Wl = u;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    xl || te(2, e, t), xl || te(4, e, t), Qt(l, t, e);
                    break;
                case 1:
                    xl || (At(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && Lr(e, t, a)), Qt(l, t, e);
                    break;
                case 21:
                    Qt(l, t, e);
                    break;
                case 22:
                    xl = (a = xl) || e.memoizedState !== null, Qt(l, t, e), xl = a;
                    break;
                default:
                    Qt(l, t, e);
            }
        }
        function Fr(l, t) {
            if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
                bu(l);
            } catch (e) {
                ol(t, t.return, e);
            }
        }
        function Id(l) {
            switch(l.tag){
                case 13:
                case 19:
                    var t = l.stateNode;
                    return t === null && (t = l.stateNode = new Jr), t;
                case 22:
                    return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Jr), t;
                default:
                    throw Error(o(435, l.tag));
            }
        }
        function mi(l, t) {
            var e = Id(l);
            t.forEach(function(a) {
                var u = iy.bind(null, l, a);
                e.has(a) || (e.add(a), a.then(u, u));
            });
        }
        function et(l, t) {
            var e = t.deletions;
            if (e !== null) for(var a = 0; a < e.length; a++){
                var u = e[a], n = l, c = t, i = c;
                l: for(; i !== null;){
                    switch(i.tag){
                        case 27:
                            if (se(i.type)) {
                                ml = i.stateNode, Wl = !1;
                                break l;
                            }
                            break;
                        case 5:
                            ml = i.stateNode, Wl = !1;
                            break l;
                        case 3:
                        case 4:
                            ml = i.stateNode.containerInfo, Wl = !0;
                            break l;
                    }
                    i = i.return;
                }
                if (ml === null) throw Error(o(160));
                $r(n, c, u), ml = null, Wl = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
            }
            if (t.subtreeFlags & 13878) for(t = t.child; t !== null;)Ir(t, l), t = t.sibling;
        }
        var St = null;
        function Ir(l, t) {
            var e = l.alternate, a = l.flags;
            switch(l.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    et(t, l), at(l), a & 4 && (te(3, l, l.return), lu(3, l), te(5, l, l.return));
                    break;
                case 1:
                    et(t, l), at(l), a & 512 && (xl || e === null || At(e, e.return)), a & 64 && Xt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
                    break;
                case 26:
                    var u = St;
                    if (et(t, l), at(l), a & 512 && (xl || e === null || At(e, e.return)), a & 4) {
                        var n = e !== null ? e.memoizedState : null;
                        if (a = l.memoizedState, e === null) if (a === null) if (l.stateNode === null) {
                            l: {
                                a = l.type, e = l.memoizedProps, u = u.ownerDocument || u;
                                t: switch(a){
                                    case "title":
                                        n = u.getElementsByTagName("title")[0], (!n || n[Aa] || n[Gl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a), u.head.insertBefore(n, u.querySelector("head > title"))), ql(n, a, e), n[Gl] = l, Dl(n), a = n;
                                        break l;
                                    case "link":
                                        var c = Jo("link", "href", u).get(a + (e.href || ""));
                                        if (c) {
                                            for(var i = 0; i < c.length; i++)if (n = c[i], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                                                c.splice(i, 1);
                                                break t;
                                            }
                                        }
                                        n = u.createElement(a), ql(n, a, e), u.head.appendChild(n);
                                        break;
                                    case "meta":
                                        if (c = Jo("meta", "content", u).get(a + (e.content || ""))) {
                                            for(i = 0; i < c.length; i++)if (n = c[i], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                                                c.splice(i, 1);
                                                break t;
                                            }
                                        }
                                        n = u.createElement(a), ql(n, a, e), u.head.appendChild(n);
                                        break;
                                    default:
                                        throw Error(o(468, a));
                                }
                                n[Gl] = l, Dl(n), a = n;
                            }
                            l.stateNode = a;
                        } else ko(u, l.type, l.stateNode);
                        else l.stateNode = Ko(u, a, l.memoizedProps);
                        else n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, a === null ? ko(u, l.type, l.stateNode) : Ko(u, a, l.memoizedProps)) : a === null && l.stateNode !== null && di(l, l.memoizedProps, e.memoizedProps);
                    }
                    break;
                case 27:
                    et(t, l), at(l), a & 512 && (xl || e === null || At(e, e.return)), e !== null && a & 4 && di(l, l.memoizedProps, e.memoizedProps);
                    break;
                case 5:
                    if (et(t, l), at(l), a & 512 && (xl || e === null || At(e, e.return)), l.flags & 32) {
                        u = l.stateNode;
                        try {
                            Ve(u, "");
                        } catch (g) {
                            ol(l, l.return, g);
                        }
                    }
                    a & 4 && l.stateNode != null && (u = l.memoizedProps, di(l, u, e !== null ? e.memoizedProps : u)), a & 1024 && (vi = !0);
                    break;
                case 6:
                    if (et(t, l), at(l), a & 4) {
                        if (l.stateNode === null) throw Error(o(162));
                        a = l.memoizedProps, e = l.stateNode;
                        try {
                            e.nodeValue = a;
                        } catch (g) {
                            ol(l, l.return, g);
                        }
                    }
                    break;
                case 3:
                    if (Mn = null, u = St, St = An(t.containerInfo), et(t, l), St = u, at(l), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
                        bu(t.containerInfo);
                    } catch (g) {
                        ol(l, l.return, g);
                    }
                    vi && (vi = !1, Pr(l));
                    break;
                case 4:
                    a = St, St = An(l.stateNode.containerInfo), et(t, l), at(l), St = a;
                    break;
                case 12:
                    et(t, l), at(l);
                    break;
                case 13:
                    et(t, l), at(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Ei = Et()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, mi(l, a)));
                    break;
                case 22:
                    u = l.memoizedState !== null;
                    var f = e !== null && e.memoizedState !== null, v = Xt, _ = xl;
                    if (Xt = v || u, xl = _ || f, et(t, l), xl = _, Xt = v, at(l), a & 8192) l: for(t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (e === null || f || Xt || xl || He(l)), e = null, t = l;;){
                        if (t.tag === 5 || t.tag === 26) {
                            if (e === null) {
                                f = e = t;
                                try {
                                    if (n = f.stateNode, u) c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                                    else {
                                        i = f.stateNode;
                                        var T = f.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null;
                                        i.style.display = m == null || typeof m == "boolean" ? "" : ("" + m).trim();
                                    }
                                } catch (g) {
                                    ol(f, f.return, g);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (e === null) {
                                f = t;
                                try {
                                    f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                                } catch (g) {
                                    ol(f, f.return, g);
                                }
                            }
                        } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
                            t.child.return = t, t = t.child;
                            continue;
                        }
                        if (t === l) break l;
                        for(; t.sibling === null;){
                            if (t.return === null || t.return === l) break l;
                            e === t && (e = null), t = t.return;
                        }
                        e === t && (e = null), t.sibling.return = t.return, t = t.sibling;
                    }
                    a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, mi(l, e))));
                    break;
                case 19:
                    et(t, l), at(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, mi(l, a)));
                    break;
                case 30:
                    break;
                case 21:
                    break;
                default:
                    et(t, l), at(l);
            }
        }
        function at(l) {
            var t = l.flags;
            if (t & 2) {
                try {
                    for(var e, a = l.return; a !== null;){
                        if (wr(a)) {
                            e = a;
                            break;
                        }
                        a = a.return;
                    }
                    if (e == null) throw Error(o(160));
                    switch(e.tag){
                        case 27:
                            var u = e.stateNode, n = yi(l);
                            dn(l, n, u);
                            break;
                        case 5:
                            var c = e.stateNode;
                            e.flags & 32 && (Ve(c, ""), e.flags &= -33);
                            var i = yi(l);
                            dn(l, i, c);
                            break;
                        case 3:
                        case 4:
                            var f = e.stateNode.containerInfo, v = yi(l);
                            hi(l, v, f);
                            break;
                        default:
                            throw Error(o(161));
                    }
                } catch (_) {
                    ol(l, l.return, _);
                }
                l.flags &= -3;
            }
            t & 4096 && (l.flags &= -4097);
        }
        function Pr(l) {
            if (l.subtreeFlags & 1024) for(l = l.child; l !== null;){
                var t = l;
                Pr(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
            }
        }
        function ee(l, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)kr(l, t.alternate, t), t = t.sibling;
        }
        function He(l) {
            for(l = l.child; l !== null;){
                var t = l;
                switch(t.tag){
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        te(4, t, t.return), He(t);
                        break;
                    case 1:
                        At(t, t.return);
                        var e = t.stateNode;
                        typeof e.componentWillUnmount == "function" && Lr(t, t.return, e), He(t);
                        break;
                    case 27:
                        ru(t.stateNode);
                    case 26:
                    case 5:
                        At(t, t.return), He(t);
                        break;
                    case 22:
                        t.memoizedState === null && He(t);
                        break;
                    case 30:
                        He(t);
                        break;
                    default:
                        He(t);
                }
                l = l.sibling;
            }
        }
        function ae(l, t, e) {
            for(e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;){
                var a = t.alternate, u = l, n = t, c = n.flags;
                switch(n.tag){
                    case 0:
                    case 11:
                    case 15:
                        ae(u, n, e), lu(4, n);
                        break;
                    case 1:
                        if (ae(u, n, e), a = n, u = a.stateNode, typeof u.componentDidMount == "function") try {
                            u.componentDidMount();
                        } catch (v) {
                            ol(a, a.return, v);
                        }
                        if (a = n, u = a.updateQueue, u !== null) {
                            var i = a.stateNode;
                            try {
                                var f = u.shared.hiddenCallbacks;
                                if (f !== null) for(u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)Os(f[u], i);
                            } catch (v) {
                                ol(a, a.return, v);
                            }
                        }
                        e && c & 64 && Zr(n), tu(n, n.return);
                        break;
                    case 27:
                        Kr(n);
                    case 26:
                    case 5:
                        ae(u, n, e), e && a === null && c & 4 && Vr(n), tu(n, n.return);
                        break;
                    case 12:
                        ae(u, n, e);
                        break;
                    case 13:
                        ae(u, n, e), e && c & 4 && Fr(u, n);
                        break;
                    case 22:
                        n.memoizedState === null && ae(u, n, e), tu(n, n.return);
                        break;
                    case 30:
                        break;
                    default:
                        ae(u, n, e);
                }
                t = t.sibling;
            }
        }
        function gi(l, t) {
            var e = null;
            l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && Xa(e));
        }
        function bi(l, t) {
            l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Xa(l));
        }
        function zt(l, t, e, a) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)lo(l, t, e, a), t = t.sibling;
        }
        function lo(l, t, e, a) {
            var u = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    zt(l, t, e, a), u & 2048 && lu(9, t);
                    break;
                case 1:
                    zt(l, t, e, a);
                    break;
                case 3:
                    zt(l, t, e, a), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Xa(l)));
                    break;
                case 12:
                    if (u & 2048) {
                        zt(l, t, e, a), l = t.stateNode;
                        try {
                            var n = t.memoizedProps, c = n.id, i = n.onPostCommit;
                            typeof i == "function" && i(c, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
                        } catch (f) {
                            ol(t, t.return, f);
                        }
                    } else zt(l, t, e, a);
                    break;
                case 13:
                    zt(l, t, e, a);
                    break;
                case 23:
                    break;
                case 22:
                    n = t.stateNode, c = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? zt(l, t, e, a) : eu(l, t) : n._visibility & 2 ? zt(l, t, e, a) : (n._visibility |= 2, sa(l, t, e, a, (t.subtreeFlags & 10256) !== 0)), u & 2048 && gi(c, t);
                    break;
                case 24:
                    zt(l, t, e, a), u & 2048 && bi(t.alternate, t);
                    break;
                default:
                    zt(l, t, e, a);
            }
        }
        function sa(l, t, e, a, u) {
            for(u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;){
                var n = l, c = t, i = e, f = a, v = c.flags;
                switch(c.tag){
                    case 0:
                    case 11:
                    case 15:
                        sa(n, c, i, f, u), lu(8, c);
                        break;
                    case 23:
                        break;
                    case 22:
                        var _ = c.stateNode;
                        c.memoizedState !== null ? _._visibility & 2 ? sa(n, c, i, f, u) : eu(n, c) : (_._visibility |= 2, sa(n, c, i, f, u)), u && v & 2048 && gi(c.alternate, c);
                        break;
                    case 24:
                        sa(n, c, i, f, u), u && v & 2048 && bi(c.alternate, c);
                        break;
                    default:
                        sa(n, c, i, f, u);
                }
                t = t.sibling;
            }
        }
        function eu(l, t) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;){
                var e = l, a = t, u = a.flags;
                switch(a.tag){
                    case 22:
                        eu(e, a), u & 2048 && gi(a.alternate, a);
                        break;
                    case 24:
                        eu(e, a), u & 2048 && bi(a.alternate, a);
                        break;
                    default:
                        eu(e, a);
                }
                t = t.sibling;
            }
        }
        var au = 8192;
        function ra(l) {
            if (l.subtreeFlags & au) for(l = l.child; l !== null;)to(l), l = l.sibling;
        }
        function to(l) {
            switch(l.tag){
                case 26:
                    ra(l), l.flags & au && l.memoizedState !== null && Cy(St, l.memoizedState, l.memoizedProps);
                    break;
                case 5:
                    ra(l);
                    break;
                case 3:
                case 4:
                    var t = St;
                    St = An(l.stateNode.containerInfo), ra(l), St = t;
                    break;
                case 22:
                    l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = au, au = 16777216, ra(l), au = t) : ra(l));
                    break;
                default:
                    ra(l);
            }
        }
        function eo(l) {
            var t = l.alternate;
            if (t !== null && (l = t.child, l !== null)) {
                t.child = null;
                do t = l.sibling, l.sibling = null, l = t;
                while (l !== null);
            }
        }
        function uu(l) {
            var t = l.deletions;
            if ((l.flags & 16) !== 0) {
                if (t !== null) for(var e = 0; e < t.length; e++){
                    var a = t[e];
                    Ul = a, uo(a, l);
                }
                eo(l);
            }
            if (l.subtreeFlags & 10256) for(l = l.child; l !== null;)ao(l), l = l.sibling;
        }
        function ao(l) {
            switch(l.tag){
                case 0:
                case 11:
                case 15:
                    uu(l), l.flags & 2048 && te(9, l, l.return);
                    break;
                case 3:
                    uu(l);
                    break;
                case 12:
                    uu(l);
                    break;
                case 22:
                    var t = l.stateNode;
                    l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, yn(l)) : uu(l);
                    break;
                default:
                    uu(l);
            }
        }
        function yn(l) {
            var t = l.deletions;
            if ((l.flags & 16) !== 0) {
                if (t !== null) for(var e = 0; e < t.length; e++){
                    var a = t[e];
                    Ul = a, uo(a, l);
                }
                eo(l);
            }
            for(l = l.child; l !== null;){
                switch(t = l, t.tag){
                    case 0:
                    case 11:
                    case 15:
                        te(8, t, t.return), yn(t);
                        break;
                    case 22:
                        e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, yn(t));
                        break;
                    default:
                        yn(t);
                }
                l = l.sibling;
            }
        }
        function uo(l, t) {
            for(; Ul !== null;){
                var e = Ul;
                switch(e.tag){
                    case 0:
                    case 11:
                    case 15:
                        te(8, e, t);
                        break;
                    case 23:
                    case 22:
                        if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                            var a = e.memoizedState.cachePool.pool;
                            a != null && a.refCount++;
                        }
                        break;
                    case 24:
                        Xa(e.memoizedState.cache);
                }
                if (a = e.child, a !== null) a.return = e, Ul = a;
                else l: for(e = l; Ul !== null;){
                    a = Ul;
                    var u = a.sibling, n = a.return;
                    if (Wr(a), a === e) {
                        Ul = null;
                        break l;
                    }
                    if (u !== null) {
                        u.return = n, Ul = u;
                        break l;
                    }
                    Ul = n;
                }
            }
        }
        var Pd = {
            getCacheForType: function(l) {
                var t = Xl(Ml), e = t.data.get(l);
                return e === void 0 && (e = l(), t.data.set(l, e)), e;
            }
        }, ly = typeof WeakMap == "function" ? WeakMap : Map, ul = 0, hl = null, $ = null, I = 0, nl = 0, ut = null, ue = !1, oa = !1, Si = !1, Zt = 0, _l = 0, ne = 0, je = 0, _i = 0, ht = 0, da = 0, nu = null, $l = null, pi = !1, Ei = 0, hn = 1 / 0, vn = null, ce = null, jl = 0, ie = null, ya = null, ha = 0, xi = 0, Ti = null, no = null, cu = 0, Ai = null;
        function nt() {
            if ((ul & 2) !== 0 && I !== 0) return I & -I;
            if (p.T !== null) {
                var l = ta;
                return l !== 0 ? l : Ri();
            }
            return pf();
        }
        function co() {
            ht === 0 && (ht = (I & 536870912) === 0 || tl ? gf() : 536870912);
            var l = yt.current;
            return l !== null && (l.flags |= 32), ht;
        }
        function ct(l, t, e) {
            (l === hl && (nl === 2 || nl === 9) || l.cancelPendingCommit !== null) && (va(l, 0), fe(l, I, ht, !1)), Ta(l, e), ((ul & 2) === 0 || l !== hl) && (l === hl && ((ul & 2) === 0 && (je |= e), _l === 4 && fe(l, I, ht, !1)), Mt(l));
        }
        function io(l, t, e) {
            if ((ul & 6) !== 0) throw Error(o(327));
            var a = !e && (t & 124) === 0 && (t & l.expiredLanes) === 0 || xa(l, t), u = a ? ay(l, t) : Oi(l, t, !0), n = a;
            do {
                if (u === 0) {
                    oa && !a && fe(l, t, 0, !1);
                    break;
                } else {
                    if (e = l.current.alternate, n && !ty(e)) {
                        u = Oi(l, t, !1), n = !1;
                        continue;
                    }
                    if (u === 2) {
                        if (n = t, l.errorRecoveryDisabledLanes & n) var c = 0;
                        else c = l.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
                        if (c !== 0) {
                            t = c;
                            l: {
                                var i = l;
                                u = nu;
                                var f = i.current.memoizedState.isDehydrated;
                                if (f && (va(i, c).flags |= 256), c = Oi(i, c, !1), c !== 2) {
                                    if (Si && !f) {
                                        i.errorRecoveryDisabledLanes |= n, je |= n, u = 4;
                                        break l;
                                    }
                                    n = $l, $l = u, n !== null && ($l === null ? $l = n : $l.push.apply($l, n));
                                }
                                u = c;
                            }
                            if (n = !1, u !== 2) continue;
                        }
                    }
                    if (u === 1) {
                        va(l, 0), fe(l, t, 0, !0);
                        break;
                    }
                    l: {
                        switch(a = l, n = u, n){
                            case 0:
                            case 1:
                                throw Error(o(345));
                            case 4:
                                if ((t & 4194048) !== t) break;
                            case 6:
                                fe(a, t, ht, !ue);
                                break l;
                            case 2:
                                $l = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(o(329));
                        }
                        if ((t & 62914560) === t && (u = Ei + 300 - Et(), 10 < u)) {
                            if (fe(a, t, ht, !ue), Au(a, 0, !0) !== 0) break l;
                            a.timeoutHandle = Co(fo.bind(null, a, e, $l, vn, pi, t, ht, je, da, ue, n, 2, -0, 0), u);
                            break l;
                        }
                        fo(a, e, $l, vn, pi, t, ht, je, da, ue, n, 0, -0, 0);
                    }
                }
                break;
            }while (!0);
            Mt(l);
        }
        function fo(l, t, e, a, u, n, c, i, f, v, _, T, m, g) {
            if (l.timeoutHandle = -1, T = t.subtreeFlags, (T & 8192 || (T & 16785408) === 16785408) && (yu = {
                stylesheets: null,
                count: 0,
                unsuspend: By
            }, to(t), T = Yy(), T !== null)) {
                l.cancelPendingCommit = T(mo.bind(null, l, t, n, e, a, u, c, i, f, _, 1, m, g)), fe(l, n, c, !v);
                return;
            }
            mo(l, t, n, e, a, u, c, i, f);
        }
        function ty(l) {
            for(var t = l;;){
                var e = t.tag;
                if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null))) for(var a = 0; a < e.length; a++){
                    var u = e[a], n = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!lt(n(), u)) return !1;
                    } catch  {
                        return !1;
                    }
                }
                if (e = t.child, t.subtreeFlags & 16384 && e !== null) e.return = t, t = e;
                else {
                    if (t === l) break;
                    for(; t.sibling === null;){
                        if (t.return === null || t.return === l) return !0;
                        t = t.return;
                    }
                    t.sibling.return = t.return, t = t.sibling;
                }
            }
            return !0;
        }
        function fe(l, t, e, a) {
            t &= ~_i, t &= ~je, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
            for(var u = t; 0 < u;){
                var n = 31 - Pl(u), c = 1 << n;
                a[n] = -1, u &= ~c;
            }
            e !== 0 && Sf(l, e, t);
        }
        function mn() {
            return (ul & 6) === 0 ? (iu(0), !1) : !0;
        }
        function zi() {
            if ($ !== null) {
                if (nl === 0) var l = $.return;
                else l = $, jt = Oe = null, Lc(l), ia = null, Fa = 0, l = $;
                for(; l !== null;)Qr(l.alternate, l), l = l.return;
                $ = null;
            }
        }
        function va(l, t) {
            var e = l.timeoutHandle;
            e !== -1 && (l.timeoutHandle = -1, Sy(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), zi(), hl = l, $ = e = Ut(l.current, null), I = t, nl = 0, ut = null, ue = !1, oa = xa(l, t), Si = !1, da = ht = _i = je = ne = _l = 0, $l = nu = null, pi = !1, (t & 8) !== 0 && (t |= t & 32);
            var a = l.entangledLanes;
            if (a !== 0) for(l = l.entanglements, a &= t; 0 < a;){
                var u = 31 - Pl(a), n = 1 << u;
                t |= l[u], a &= ~n;
            }
            return Zt = t, Cu(), e;
        }
        function so(l, t) {
            J = null, p.H = en, t === Za || t === Ku ? (t = zs(), nl = 3) : t === xs ? (t = zs(), nl = 4) : nl = t === Mr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ut = t, $ === null && (_l = 1, fn(l, st(t, l.current)));
        }
        function ro() {
            var l = p.H;
            return p.H = en, l === null ? en : l;
        }
        function oo() {
            var l = p.A;
            return p.A = Pd, l;
        }
        function Mi() {
            _l = 4, ue || (I & 4194048) !== I && yt.current !== null || (oa = !0), (ne & 134217727) === 0 && (je & 134217727) === 0 || hl === null || fe(hl, I, ht, !1);
        }
        function Oi(l, t, e) {
            var a = ul;
            ul |= 2;
            var u = ro(), n = oo();
            (hl !== l || I !== t) && (vn = null, va(l, t)), t = !1;
            var c = _l;
            l: do try {
                if (nl !== 0 && $ !== null) {
                    var i = $, f = ut;
                    switch(nl){
                        case 8:
                            zi(), c = 6;
                            break l;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            yt.current === null && (t = !0);
                            var v = nl;
                            if (nl = 0, ut = null, ma(l, i, f, v), e && oa) {
                                c = 0;
                                break l;
                            }
                            break;
                        default:
                            v = nl, nl = 0, ut = null, ma(l, i, f, v);
                    }
                }
                ey(), c = _l;
                break;
            } catch (_) {
                so(l, _);
            }
            while (!0);
            return t && l.shellSuspendCounter++, jt = Oe = null, ul = a, p.H = u, p.A = n, $ === null && (hl = null, I = 0, Cu()), c;
        }
        function ey() {
            for(; $ !== null;)yo($);
        }
        function ay(l, t) {
            var e = ul;
            ul |= 2;
            var a = ro(), u = oo();
            hl !== l || I !== t ? (vn = null, hn = Et() + 500, va(l, t)) : oa = xa(l, t);
            l: do try {
                if (nl !== 0 && $ !== null) {
                    t = $;
                    var n = ut;
                    t: switch(nl){
                        case 1:
                            nl = 0, ut = null, ma(l, t, n, 1);
                            break;
                        case 2:
                        case 9:
                            if (Ts(n)) {
                                nl = 0, ut = null, ho(t);
                                break;
                            }
                            t = function() {
                                nl !== 2 && nl !== 9 || hl !== l || (nl = 7), Mt(l);
                            }, n.then(t, t);
                            break l;
                        case 3:
                            nl = 7;
                            break l;
                        case 4:
                            nl = 5;
                            break l;
                        case 7:
                            Ts(n) ? (nl = 0, ut = null, ho(t)) : (nl = 0, ut = null, ma(l, t, n, 7));
                            break;
                        case 5:
                            var c = null;
                            switch($.tag){
                                case 26:
                                    c = $.memoizedState;
                                case 5:
                                case 27:
                                    var i = $;
                                    if (!c || Wo(c)) {
                                        nl = 0, ut = null;
                                        var f = i.sibling;
                                        if (f !== null) $ = f;
                                        else {
                                            var v = i.return;
                                            v !== null ? ($ = v, gn(v)) : $ = null;
                                        }
                                        break t;
                                    }
                            }
                            nl = 0, ut = null, ma(l, t, n, 5);
                            break;
                        case 6:
                            nl = 0, ut = null, ma(l, t, n, 6);
                            break;
                        case 8:
                            zi(), _l = 6;
                            break l;
                        default:
                            throw Error(o(462));
                    }
                }
                uy();
                break;
            } catch (_) {
                so(l, _);
            }
            while (!0);
            return jt = Oe = null, p.H = a, p.A = u, ul = e, $ !== null ? 0 : (hl = null, I = 0, Cu(), _l);
        }
        function uy() {
            for(; $ !== null && !z0();)yo($);
        }
        function yo(l) {
            var t = Gr(l.alternate, l, Zt);
            l.memoizedProps = l.pendingProps, t === null ? gn(l) : $ = t;
        }
        function ho(l) {
            var t = l, e = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = Hr(e, t, t.pendingProps, t.type, void 0, I);
                    break;
                case 11:
                    t = Hr(e, t, t.pendingProps, t.type.render, t.ref, I);
                    break;
                case 5:
                    Lc(t);
                default:
                    Qr(e, t), t = $ = hs(t, Zt), t = Gr(e, t, Zt);
            }
            l.memoizedProps = l.pendingProps, t === null ? gn(l) : $ = t;
        }
        function ma(l, t, e, a) {
            jt = Oe = null, Lc(t), ia = null, Fa = 0;
            var u = t.return;
            try {
                if (Jd(l, u, t, e, I)) {
                    _l = 1, fn(l, st(e, l.current)), $ = null;
                    return;
                }
            } catch (n) {
                if (u !== null) throw $ = u, n;
                _l = 1, fn(l, st(e, l.current)), $ = null;
                return;
            }
            t.flags & 32768 ? (tl || a === 1 ? l = !0 : oa || (I & 536870912) !== 0 ? l = !1 : (ue = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = yt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), vo(t, l)) : gn(t);
        }
        function gn(l) {
            var t = l;
            do {
                if ((t.flags & 32768) !== 0) {
                    vo(t, ue);
                    return;
                }
                l = t.return;
                var e = Wd(t.alternate, t, Zt);
                if (e !== null) {
                    $ = e;
                    return;
                }
                if (t = t.sibling, t !== null) {
                    $ = t;
                    return;
                }
                $ = t = l;
            }while (t !== null);
            _l === 0 && (_l = 5);
        }
        function vo(l, t) {
            do {
                var e = $d(l.alternate, l);
                if (e !== null) {
                    e.flags &= 32767, $ = e;
                    return;
                }
                if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
                    $ = l;
                    return;
                }
                $ = l = e;
            }while (l !== null);
            _l = 6, $ = null;
        }
        function mo(l, t, e, a, u, n, c, i, f) {
            l.cancelPendingCommit = null;
            do bn();
            while (jl !== 0);
            if ((ul & 6) !== 0) throw Error(o(327));
            if (t !== null) {
                if (t === l.current) throw Error(o(177));
                if (n = t.lanes | t.childLanes, n |= bc, B0(l, e, n, c, i, f), l === hl && ($ = hl = null, I = 0), ya = t, ie = l, ha = e, xi = n, Ti = u, no = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, fy(Eu, function() {
                    return po(), null;
                })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
                    a = p.T, p.T = null, u = R.p, R.p = 2, c = ul, ul |= 4;
                    try {
                        Fd(l, t, e);
                    } finally{
                        ul = c, R.p = u, p.T = a;
                    }
                }
                jl = 1, go(), bo(), So();
            }
        }
        function go() {
            if (jl === 1) {
                jl = 0;
                var l = ie, t = ya, e = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || e) {
                    e = p.T, p.T = null;
                    var a = R.p;
                    R.p = 2;
                    var u = ul;
                    ul |= 4;
                    try {
                        Ir(t, l);
                        var n = Xi, c = us(l.containerInfo), i = n.focusedElem, f = n.selectionRange;
                        if (c !== i && i && i.ownerDocument && as(i.ownerDocument.documentElement, i)) {
                            if (f !== null && yc(i)) {
                                var v = f.start, _ = f.end;
                                if (_ === void 0 && (_ = v), "selectionStart" in i) i.selectionStart = v, i.selectionEnd = Math.min(_, i.value.length);
                                else {
                                    var T = i.ownerDocument || document, m = T && T.defaultView || window;
                                    if (m.getSelection) {
                                        var g = m.getSelection(), Q = i.textContent.length, Y = Math.min(f.start, Q), sl = f.end === void 0 ? Y : Math.min(f.end, Q);
                                        !g.extend && Y > sl && (c = sl, sl = Y, Y = c);
                                        var d = es(i, Y), r = es(i, sl);
                                        if (d && r && (g.rangeCount !== 1 || g.anchorNode !== d.node || g.anchorOffset !== d.offset || g.focusNode !== r.node || g.focusOffset !== r.offset)) {
                                            var h = T.createRange();
                                            h.setStart(d.node, d.offset), g.removeAllRanges(), Y > sl ? (g.addRange(h), g.extend(r.node, r.offset)) : (h.setEnd(r.node, r.offset), g.addRange(h));
                                        }
                                    }
                                }
                            }
                            for(T = [], g = i; g = g.parentNode;)g.nodeType === 1 && T.push({
                                element: g,
                                left: g.scrollLeft,
                                top: g.scrollTop
                            });
                            for(typeof i.focus == "function" && i.focus(), i = 0; i < T.length; i++){
                                var x = T[i];
                                x.element.scrollLeft = x.left, x.element.scrollTop = x.top;
                            }
                        }
                        Nn = !!Gi, Xi = Gi = null;
                    } finally{
                        ul = u, R.p = a, p.T = e;
                    }
                }
                l.current = t, jl = 2;
            }
        }
        function bo() {
            if (jl === 2) {
                jl = 0;
                var l = ie, t = ya, e = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || e) {
                    e = p.T, p.T = null;
                    var a = R.p;
                    R.p = 2;
                    var u = ul;
                    ul |= 4;
                    try {
                        kr(l, t.alternate, t);
                    } finally{
                        ul = u, R.p = a, p.T = e;
                    }
                }
                jl = 3;
            }
        }
        function So() {
            if (jl === 4 || jl === 3) {
                jl = 0, M0();
                var l = ie, t = ya, e = ha, a = no;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? jl = 5 : (jl = 0, ya = ie = null, _o(l, l.pendingLanes));
                var u = l.pendingLanes;
                if (u === 0 && (ce = null), Kn(e), t = t.stateNode, Il && typeof Il.onCommitFiberRoot == "function") try {
                    Il.onCommitFiberRoot(Ea, t, void 0, (t.current.flags & 128) === 128);
                } catch  {}
                if (a !== null) {
                    t = p.T, u = R.p, R.p = 2, p.T = null;
                    try {
                        for(var n = l.onRecoverableError, c = 0; c < a.length; c++){
                            var i = a[c];
                            n(i.value, {
                                componentStack: i.stack
                            });
                        }
                    } finally{
                        p.T = t, R.p = u;
                    }
                }
                (ha & 3) !== 0 && bn(), Mt(l), u = l.pendingLanes, (e & 4194090) !== 0 && (u & 42) !== 0 ? l === Ai ? cu++ : (cu = 0, Ai = l) : cu = 0, iu(0);
            }
        }
        function _o(l, t) {
            (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Xa(t)));
        }
        function bn(l) {
            return go(), bo(), So(), po();
        }
        function po() {
            if (jl !== 5) return !1;
            var l = ie, t = xi;
            xi = 0;
            var e = Kn(ha), a = p.T, u = R.p;
            try {
                R.p = 32 > e ? 32 : e, p.T = null, e = Ti, Ti = null;
                var n = ie, c = ha;
                if (jl = 0, ya = ie = null, ha = 0, (ul & 6) !== 0) throw Error(o(331));
                var i = ul;
                if (ul |= 4, ao(n.current), lo(n, n.current, c, e), ul = i, iu(0, !1), Il && typeof Il.onPostCommitFiberRoot == "function") try {
                    Il.onPostCommitFiberRoot(Ea, n);
                } catch  {}
                return !0;
            } finally{
                R.p = u, p.T = a, _o(l, t);
            }
        }
        function Eo(l, t, e) {
            t = st(e, t), t = ai(l.stateNode, t, 2), l = Ft(l, t, 2), l !== null && (Ta(l, 2), Mt(l));
        }
        function ol(l, t, e) {
            if (l.tag === 3) Eo(l, l, e);
            else for(; t !== null;){
                if (t.tag === 3) {
                    Eo(t, l, e);
                    break;
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ce === null || !ce.has(a))) {
                        l = st(e, l), e = Ar(2), a = Ft(t, e, 2), a !== null && (zr(e, a, t, l), Ta(a, 2), Mt(a));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function Di(l, t, e) {
            var a = l.pingCache;
            if (a === null) {
                a = l.pingCache = new ly;
                var u = new Set;
                a.set(t, u);
            } else u = a.get(t), u === void 0 && (u = new Set, a.set(t, u));
            u.has(e) || (Si = !0, u.add(e), l = ny.bind(null, l, t, e), t.then(l, l));
        }
        function ny(l, t, e) {
            var a = l.pingCache;
            a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, hl === l && (I & e) === e && (_l === 4 || _l === 3 && (I & 62914560) === I && 300 > Et() - Ei ? (ul & 2) === 0 && va(l, 0) : _i |= e, da === I && (da = 0)), Mt(l);
        }
        function xo(l, t) {
            t === 0 && (t = bf()), l = Fe(l, t), l !== null && (Ta(l, t), Mt(l));
        }
        function cy(l) {
            var t = l.memoizedState, e = 0;
            t !== null && (e = t.retryLane), xo(l, e);
        }
        function iy(l, t) {
            var e = 0;
            switch(l.tag){
                case 13:
                    var a = l.stateNode, u = l.memoizedState;
                    u !== null && (e = u.retryLane);
                    break;
                case 19:
                    a = l.stateNode;
                    break;
                case 22:
                    a = l.stateNode._retryCache;
                    break;
                default:
                    throw Error(o(314));
            }
            a !== null && a.delete(t), xo(l, e);
        }
        function fy(l, t) {
            return Zn(l, t);
        }
        var Sn = null, ga = null, Ni = !1, _n = !1, Ui = !1, qe = 0;
        function Mt(l) {
            l !== ga && l.next === null && (ga === null ? Sn = ga = l : ga = ga.next = l), _n = !0, Ni || (Ni = !0, ry());
        }
        function iu(l, t) {
            if (!Ui && _n) {
                Ui = !0;
                do for(var e = !1, a = Sn; a !== null;){
                    if (l !== 0) {
                        var u = a.pendingLanes;
                        if (u === 0) var n = 0;
                        else {
                            var c = a.suspendedLanes, i = a.pingedLanes;
                            n = (1 << 31 - Pl(42 | l) + 1) - 1, n &= u & ~(c & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
                        }
                        n !== 0 && (e = !0, Mo(a, n));
                    } else n = I, n = Au(a, a === hl ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || xa(a, n) || (e = !0, Mo(a, n));
                    a = a.next;
                }
                while (e);
                Ui = !1;
            }
        }
        function sy() {
            To();
        }
        function To() {
            _n = Ni = !1;
            var l = 0;
            qe !== 0 && (by() && (l = qe), qe = 0);
            for(var t = Et(), e = null, a = Sn; a !== null;){
                var u = a.next, n = Ao(a, t);
                n === 0 ? (a.next = null, e === null ? Sn = u : e.next = u, u === null && (ga = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (_n = !0)), a = u;
            }
            iu(l);
        }
        function Ao(l, t) {
            for(var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n;){
                var c = 31 - Pl(n), i = 1 << c, f = u[c];
                f === -1 ? ((i & e) === 0 || (i & a) !== 0) && (u[c] = q0(i, t)) : f <= t && (l.expiredLanes |= i), n &= ~i;
            }
            if (t = hl, e = I, e = Au(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, e === 0 || l === t && (nl === 2 || nl === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && Ln(a), l.callbackNode = null, l.callbackPriority = 0;
            if ((e & 3) === 0 || xa(l, e)) {
                if (t = e & -e, t === l.callbackPriority) return t;
                switch(a !== null && Ln(a), Kn(e)){
                    case 2:
                    case 8:
                        e = vf;
                        break;
                    case 32:
                        e = Eu;
                        break;
                    case 268435456:
                        e = mf;
                        break;
                    default:
                        e = Eu;
                }
                return a = zo.bind(null, l), e = Zn(e, a), l.callbackPriority = t, l.callbackNode = e, t;
            }
            return a !== null && a !== null && Ln(a), l.callbackPriority = 2, l.callbackNode = null, 2;
        }
        function zo(l, t) {
            if (jl !== 0 && jl !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
            var e = l.callbackNode;
            if (bn() && l.callbackNode !== e) return null;
            var a = I;
            return a = Au(l, l === hl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (io(l, a, t), Ao(l, Et()), l.callbackNode != null && l.callbackNode === e ? zo.bind(null, l) : null);
        }
        function Mo(l, t) {
            if (bn()) return null;
            io(l, t, !0);
        }
        function ry() {
            _y(function() {
                (ul & 6) !== 0 ? Zn(hf, sy) : To();
            });
        }
        function Ri() {
            return qe === 0 && (qe = gf()), qe;
        }
        function Oo(l) {
            return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Nu("" + l);
        }
        function Do(l, t) {
            var e = t.ownerDocument.createElement("input");
            return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
        }
        function oy(l, t, e, a, u) {
            if (t === "submit" && e && e.stateNode === u) {
                var n = Oo((u[Kl] || null).action), c = a.submitter;
                c && (t = (t = c[Kl] || null) ? Oo(t.formAction) : c.getAttribute("formAction"), t !== null && (n = t, c = null));
                var i = new ju("action", "action", null, a, u);
                l.push({
                    event: i,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (a.defaultPrevented) {
                                    if (qe !== 0) {
                                        var f = c ? Do(u, c) : new FormData(u);
                                        Ic(e, {
                                            pending: !0,
                                            data: f,
                                            method: u.method,
                                            action: n
                                        }, null, f);
                                    }
                                } else typeof n == "function" && (i.preventDefault(), f = c ? Do(u, c) : new FormData(u), Ic(e, {
                                    pending: !0,
                                    data: f,
                                    method: u.method,
                                    action: n
                                }, n, f));
                            },
                            currentTarget: u
                        }
                    ]
                });
            }
        }
        for(var Hi = 0; Hi < gc.length; Hi++){
            var ji = gc[Hi], dy = ji.toLowerCase(), yy = ji[0].toUpperCase() + ji.slice(1);
            bt(dy, "on" + yy);
        }
        bt(is, "onAnimationEnd"), bt(fs, "onAnimationIteration"), bt(ss, "onAnimationStart"), bt("dblclick", "onDoubleClick"), bt("focusin", "onFocus"), bt("focusout", "onBlur"), bt(Nd, "onTransitionRun"), bt(Ud, "onTransitionStart"), bt(Rd, "onTransitionCancel"), bt(rs, "onTransitionEnd"), Qe("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]), Qe("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]), Qe("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]), Qe("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]), Se("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Se("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Se("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), Se("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Se("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Se("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var fu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), hy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fu));
        function No(l, t) {
            t = (t & 4) !== 0;
            for(var e = 0; e < l.length; e++){
                var a = l[e], u = a.event;
                a = a.listeners;
                l: {
                    var n = void 0;
                    if (t) for(var c = a.length - 1; 0 <= c; c--){
                        var i = a[c], f = i.instance, v = i.currentTarget;
                        if (i = i.listener, f !== n && u.isPropagationStopped()) break l;
                        n = i, u.currentTarget = v;
                        try {
                            n(u);
                        } catch (_) {
                            cn(_);
                        }
                        u.currentTarget = null, n = f;
                    }
                    else for(c = 0; c < a.length; c++){
                        if (i = a[c], f = i.instance, v = i.currentTarget, i = i.listener, f !== n && u.isPropagationStopped()) break l;
                        n = i, u.currentTarget = v;
                        try {
                            n(u);
                        } catch (_) {
                            cn(_);
                        }
                        u.currentTarget = null, n = f;
                    }
                }
            }
        }
        function F(l, t) {
            var e = t[Jn];
            e === void 0 && (e = t[Jn] = new Set);
            var a = l + "__bubble";
            e.has(a) || (Uo(t, l, 2, !1), e.add(a));
        }
        function qi(l, t, e) {
            var a = 0;
            t && (a |= 4), Uo(e, l, a, t);
        }
        var pn = "_reactListening" + Math.random().toString(36).slice(2);
        function Bi(l) {
            if (!l[pn]) {
                l[pn] = !0, xf.forEach(function(e) {
                    e !== "selectionchange" && (hy.has(e) || qi(e, !1, l), qi(e, !0, l));
                });
                var t = l.nodeType === 9 ? l : l.ownerDocument;
                t === null || t[pn] || (t[pn] = !0, qi("selectionchange", !1, t));
            }
        }
        function Uo(l, t, e, a) {
            switch(t0(t)){
                case 2:
                    var u = Qy;
                    break;
                case 8:
                    u = Zy;
                    break;
                default:
                    u = $i;
            }
            e = u.bind(null, t, e, l), u = void 0, !uc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? l.addEventListener(t, e, {
                capture: !0,
                passive: u
            }) : l.addEventListener(t, e, !0) : u !== void 0 ? l.addEventListener(t, e, {
                passive: u
            }) : l.addEventListener(t, e, !1);
        }
        function Ci(l, t, e, a, u) {
            var n = a;
            if ((t & 1) === 0 && (t & 2) === 0 && a !== null) l: for(;;){
                if (a === null) return;
                var c = a.tag;
                if (c === 3 || c === 4) {
                    var i = a.stateNode.containerInfo;
                    if (i === u) break;
                    if (c === 4) for(c = a.return; c !== null;){
                        var f = c.tag;
                        if ((f === 3 || f === 4) && c.stateNode.containerInfo === u) return;
                        c = c.return;
                    }
                    for(; i !== null;){
                        if (c = Ye(i), c === null) return;
                        if (f = c.tag, f === 5 || f === 6 || f === 26 || f === 27) {
                            a = n = c;
                            continue l;
                        }
                        i = i.parentNode;
                    }
                }
                a = a.return;
            }
            Cf(function() {
                var v = n, _ = ec(e), T = [];
                l: {
                    var m = os.get(l);
                    if (m !== void 0) {
                        var g = ju, Q = l;
                        switch(l){
                            case "keypress":
                                if (Ru(e) === 0) break l;
                            case "keydown":
                            case "keyup":
                                g = fd;
                                break;
                            case "focusin":
                                Q = "focus", g = fc;
                                break;
                            case "focusout":
                                Q = "blur", g = fc;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                g = fc;
                                break;
                            case "click":
                                if (e.button === 2) break l;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                g = Xf;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                g = $0;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                g = od;
                                break;
                            case is:
                            case fs:
                            case ss:
                                g = P0;
                                break;
                            case rs:
                                g = yd;
                                break;
                            case "scroll":
                            case "scrollend":
                                g = k0;
                                break;
                            case "wheel":
                                g = vd;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                g = td;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                g = Zf;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                g = gd;
                        }
                        var Y = (t & 4) !== 0, sl = !Y && (l === "scroll" || l === "scrollend"), d = Y ? m !== null ? m + "Capture" : null : m;
                        Y = [];
                        for(var r = v, h; r !== null;){
                            var x = r;
                            if (h = x.stateNode, x = x.tag, x !== 5 && x !== 26 && x !== 27 || h === null || d === null || (x = Ma(r, d), x != null && Y.push(su(r, x, h))), sl) break;
                            r = r.return;
                        }
                        0 < Y.length && (m = new g(m, Q, null, e, _), T.push({
                            event: m,
                            listeners: Y
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    l: {
                        if (m = l === "mouseover" || l === "pointerover", g = l === "mouseout" || l === "pointerout", m && e !== tc && (Q = e.relatedTarget || e.fromElement) && (Ye(Q) || Q[Ce])) break l;
                        if ((g || m) && (m = _.window === _ ? _ : (m = _.ownerDocument) ? m.defaultView || m.parentWindow : window, g ? (Q = e.relatedTarget || e.toElement, g = v, Q = Q ? Ye(Q) : null, Q !== null && (sl = D(Q), Y = Q.tag, Q !== sl || Y !== 5 && Y !== 27 && Y !== 6) && (Q = null)) : (g = null, Q = v), g !== Q)) {
                            if (Y = Xf, x = "onMouseLeave", d = "onMouseEnter", r = "mouse", (l === "pointerout" || l === "pointerover") && (Y = Zf, x = "onPointerLeave", d = "onPointerEnter", r = "pointer"), sl = g == null ? m : za(g), h = Q == null ? m : za(Q), m = new Y(x, r + "leave", g, e, _), m.target = sl, m.relatedTarget = h, x = null, Ye(_) === v && (Y = new Y(d, r + "enter", Q, e, _), Y.target = h, Y.relatedTarget = sl, x = Y), sl = x, g && Q) t: {
                                for(Y = g, d = Q, r = 0, h = Y; h; h = ba(h))r++;
                                for(h = 0, x = d; x; x = ba(x))h++;
                                for(; 0 < r - h;)Y = ba(Y), r--;
                                for(; 0 < h - r;)d = ba(d), h--;
                                for(; r--;){
                                    if (Y === d || d !== null && Y === d.alternate) break t;
                                    Y = ba(Y), d = ba(d);
                                }
                                Y = null;
                            }
                            else Y = null;
                            g !== null && Ro(T, m, g, Y, !1), Q !== null && sl !== null && Ro(T, sl, Q, Y, !0);
                        }
                    }
                    l: {
                        if (m = v ? za(v) : window, g = m.nodeName && m.nodeName.toLowerCase(), g === "select" || g === "input" && m.type === "file") var j = $f;
                        else if (kf(m)) if (Ff) j = Md;
                        else {
                            j = Ad;
                            var W = Td;
                        }
                        else g = m.nodeName, !g || g.toLowerCase() !== "input" || m.type !== "checkbox" && m.type !== "radio" ? v && lc(v.elementType) && (j = $f) : j = zd;
                        if (j && (j = j(l, v))) {
                            Wf(T, j, e, _);
                            break l;
                        }
                        W && W(l, m, v), l === "focusout" && v && m.type === "number" && v.memoizedProps.value != null && Pn(m, "number", m.value);
                    }
                    switch(W = v ? za(v) : window, l){
                        case "focusin":
                            (kf(W) || W.contentEditable === "true") && (ke = W, hc = v, qa = null);
                            break;
                        case "focusout":
                            qa = hc = ke = null;
                            break;
                        case "mousedown":
                            vc = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            vc = !1, ns(T, e, _);
                            break;
                        case "selectionchange":
                            if (Dd) break;
                        case "keydown":
                        case "keyup":
                            ns(T, e, _);
                    }
                    var B;
                    if (rc) l: {
                        switch(l){
                            case "compositionstart":
                                var G = "onCompositionStart";
                                break l;
                            case "compositionend":
                                G = "onCompositionEnd";
                                break l;
                            case "compositionupdate":
                                G = "onCompositionUpdate";
                                break l;
                        }
                        G = void 0;
                    }
                    else Je ? Kf(l, e) && (G = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (G = "onCompositionStart");
                    G && (Lf && e.locale !== "ko" && (Je || G !== "onCompositionStart" ? G === "onCompositionEnd" && Je && (B = Yf()) : (Jt = _, nc = "value" in Jt ? Jt.value : Jt.textContent, Je = !0)), W = En(v, G), 0 < W.length && (G = new Qf(G, l, null, e, _), T.push({
                        event: G,
                        listeners: W
                    }), B ? G.data = B : (B = Jf(e), B !== null && (G.data = B)))), (B = Sd ? _d(l, e) : pd(l, e)) && (G = En(v, "onBeforeInput"), 0 < G.length && (W = new Qf("onBeforeInput", "beforeinput", null, e, _), T.push({
                        event: W,
                        listeners: G
                    }), W.data = B)), oy(T, l, v, e, _);
                }
                No(T, t);
            });
        }
        function su(l, t, e) {
            return {
                instance: l,
                listener: t,
                currentTarget: e
            };
        }
        function En(l, t) {
            for(var e = t + "Capture", a = []; l !== null;){
                var u = l, n = u.stateNode;
                if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ma(l, e), u != null && a.unshift(su(l, u, n)), u = Ma(l, t), u != null && a.push(su(l, u, n))), l.tag === 3) return a;
                l = l.return;
            }
            return [];
        }
        function ba(l) {
            if (l === null) return null;
            do l = l.return;
            while (l && l.tag !== 5 && l.tag !== 27);
            return l || null;
        }
        function Ro(l, t, e, a, u) {
            for(var n = t._reactName, c = []; e !== null && e !== a;){
                var i = e, f = i.alternate, v = i.stateNode;
                if (i = i.tag, f !== null && f === a) break;
                i !== 5 && i !== 26 && i !== 27 || v === null || (f = v, u ? (v = Ma(e, n), v != null && c.unshift(su(e, v, f))) : u || (v = Ma(e, n), v != null && c.push(su(e, v, f)))), e = e.return;
            }
            c.length !== 0 && l.push({
                event: t,
                listeners: c
            });
        }
        var vy = /\r\n?/g, my = /\u0000|\uFFFD/g;
        function Ho(l) {
            return (typeof l == "string" ? l : "" + l).replace(vy, `
`).replace(my, "");
        }
        function jo(l, t) {
            return t = Ho(t), Ho(l) === t;
        }
        function xn() {}
        function fl(l, t, e, a, u, n) {
            switch(e){
                case "children":
                    typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ve(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ve(l, "" + a);
                    break;
                case "className":
                    Mu(l, "class", a);
                    break;
                case "tabIndex":
                    Mu(l, "tabindex", a);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    Mu(l, e, a);
                    break;
                case "style":
                    qf(l, a, n);
                    break;
                case "data":
                    if (t !== "object") {
                        Mu(l, "data", a);
                        break;
                    }
                case "src":
                case "href":
                    if (a === "" && (t !== "a" || e !== "href")) {
                        l.removeAttribute(e);
                        break;
                    }
                    if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                        l.removeAttribute(e);
                        break;
                    }
                    a = Nu("" + a), l.setAttribute(e, a);
                    break;
                case "action":
                case "formAction":
                    if (typeof a == "function") {
                        l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break;
                    } else typeof n == "function" && (e === "formAction" ? (t !== "input" && fl(l, t, "name", u.name, u, null), fl(l, t, "formEncType", u.formEncType, u, null), fl(l, t, "formMethod", u.formMethod, u, null), fl(l, t, "formTarget", u.formTarget, u, null)) : (fl(l, t, "encType", u.encType, u, null), fl(l, t, "method", u.method, u, null), fl(l, t, "target", u.target, u, null)));
                    if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                        l.removeAttribute(e);
                        break;
                    }
                    a = Nu("" + a), l.setAttribute(e, a);
                    break;
                case "onClick":
                    a != null && (l.onclick = xn);
                    break;
                case "onScroll":
                    a != null && F("scroll", l);
                    break;
                case "onScrollEnd":
                    a != null && F("scrollend", l);
                    break;
                case "dangerouslySetInnerHTML":
                    if (a != null) {
                        if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
                        if (e = a.__html, e != null) {
                            if (u.children != null) throw Error(o(60));
                            l.innerHTML = e;
                        }
                    }
                    break;
                case "multiple":
                    l.multiple = a && typeof a != "function" && typeof a != "symbol";
                    break;
                case "muted":
                    l.muted = a && typeof a != "function" && typeof a != "symbol";
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                    break;
                case "autoFocus":
                    break;
                case "xlinkHref":
                    if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                        l.removeAttribute("xlink:href");
                        break;
                    }
                    e = Nu("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
                    break;
                case "contentEditable":
                case "spellCheck":
                case "draggable":
                case "value":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                    a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
                    break;
                case "inert":
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                    a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
                    break;
                case "capture":
                case "download":
                    a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
                    break;
                case "cols":
                case "rows":
                case "size":
                case "span":
                    a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
                    break;
                case "rowSpan":
                case "start":
                    a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
                    break;
                case "popover":
                    F("beforetoggle", l), F("toggle", l), zu(l, "popover", a);
                    break;
                case "xlinkActuate":
                    Dt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                    break;
                case "xlinkArcrole":
                    Dt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                    break;
                case "xlinkRole":
                    Dt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
                    break;
                case "xlinkShow":
                    Dt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
                    break;
                case "xlinkTitle":
                    Dt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
                    break;
                case "xlinkType":
                    Dt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
                    break;
                case "xmlBase":
                    Dt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                    break;
                case "xmlLang":
                    Dt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                    break;
                case "xmlSpace":
                    Dt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                    break;
                case "is":
                    zu(l, "is", a);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = K0.get(e) || e, zu(l, e, a));
            }
        }
        function Yi(l, t, e, a, u, n) {
            switch(e){
                case "style":
                    qf(l, a, n);
                    break;
                case "dangerouslySetInnerHTML":
                    if (a != null) {
                        if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
                        if (e = a.__html, e != null) {
                            if (u.children != null) throw Error(o(60));
                            l.innerHTML = e;
                        }
                    }
                    break;
                case "children":
                    typeof a == "string" ? Ve(l, a) : (typeof a == "number" || typeof a == "bigint") && Ve(l, "" + a);
                    break;
                case "onScroll":
                    a != null && F("scroll", l);
                    break;
                case "onScrollEnd":
                    a != null && F("scrollend", l);
                    break;
                case "onClick":
                    a != null && (l.onclick = xn);
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "innerHTML":
                case "ref":
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    if (!Tf.hasOwnProperty(e)) l: {
                        if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), t = e.slice(2, u ? e.length - 7 : void 0), n = l[Kl] || null, n = n != null ? n[e] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof a == "function")) {
                            typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, u);
                            break l;
                        }
                        e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : zu(l, e, a);
                    }
            }
        }
        function ql(l, t, e) {
            switch(t){
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "img":
                    F("error", l), F("load", l);
                    var a = !1, u = !1, n;
                    for(n in e)if (e.hasOwnProperty(n)) {
                        var c = e[n];
                        if (c != null) switch(n){
                            case "src":
                                a = !0;
                                break;
                            case "srcSet":
                                u = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(o(137, t));
                            default:
                                fl(l, t, n, c, e, null);
                        }
                    }
                    u && fl(l, t, "srcSet", e.srcSet, e, null), a && fl(l, t, "src", e.src, e, null);
                    return;
                case "input":
                    F("invalid", l);
                    var i = n = c = u = null, f = null, v = null;
                    for(a in e)if (e.hasOwnProperty(a)) {
                        var _ = e[a];
                        if (_ != null) switch(a){
                            case "name":
                                u = _;
                                break;
                            case "type":
                                c = _;
                                break;
                            case "checked":
                                f = _;
                                break;
                            case "defaultChecked":
                                v = _;
                                break;
                            case "value":
                                n = _;
                                break;
                            case "defaultValue":
                                i = _;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (_ != null) throw Error(o(137, t));
                                break;
                            default:
                                fl(l, t, a, _, e, null);
                        }
                    }
                    Uf(l, n, i, f, v, c, u, !1), Ou(l);
                    return;
                case "select":
                    F("invalid", l), a = c = n = null;
                    for(u in e)if (e.hasOwnProperty(u) && (i = e[u], i != null)) switch(u){
                        case "value":
                            n = i;
                            break;
                        case "defaultValue":
                            c = i;
                            break;
                        case "multiple":
                            a = i;
                        default:
                            fl(l, t, u, i, e, null);
                    }
                    t = n, e = c, l.multiple = !!a, t != null ? Le(l, !!a, t, !1) : e != null && Le(l, !!a, e, !0);
                    return;
                case "textarea":
                    F("invalid", l), n = u = a = null;
                    for(c in e)if (e.hasOwnProperty(c) && (i = e[c], i != null)) switch(c){
                        case "value":
                            a = i;
                            break;
                        case "defaultValue":
                            u = i;
                            break;
                        case "children":
                            n = i;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (i != null) throw Error(o(91));
                            break;
                        default:
                            fl(l, t, c, i, e, null);
                    }
                    Hf(l, a, u, n), Ou(l);
                    return;
                case "option":
                    for(f in e)if (e.hasOwnProperty(f) && (a = e[f], a != null)) switch(f){
                        case "selected":
                            l.selected = a && typeof a != "function" && typeof a != "symbol";
                            break;
                        default:
                            fl(l, t, f, a, e, null);
                    }
                    return;
                case "dialog":
                    F("beforetoggle", l), F("toggle", l), F("cancel", l), F("close", l);
                    break;
                case "iframe":
                case "object":
                    F("load", l);
                    break;
                case "video":
                case "audio":
                    for(a = 0; a < fu.length; a++)F(fu[a], l);
                    break;
                case "image":
                    F("error", l), F("load", l);
                    break;
                case "details":
                    F("toggle", l);
                    break;
                case "embed":
                case "source":
                case "link":
                    F("error", l), F("load", l);
                case "area":
                case "base":
                case "br":
                case "col":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "track":
                case "wbr":
                case "menuitem":
                    for(v in e)if (e.hasOwnProperty(v) && (a = e[v], a != null)) switch(v){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, t));
                        default:
                            fl(l, t, v, a, e, null);
                    }
                    return;
                default:
                    if (lc(t)) {
                        for(_ in e)e.hasOwnProperty(_) && (a = e[_], a !== void 0 && Yi(l, t, _, a, e, void 0));
                        return;
                    }
            }
            for(i in e)e.hasOwnProperty(i) && (a = e[i], a != null && fl(l, t, i, a, e, null));
        }
        function gy(l, t, e, a) {
            switch(t){
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "input":
                    var u = null, n = null, c = null, i = null, f = null, v = null, _ = null;
                    for(g in e){
                        var T = e[g];
                        if (e.hasOwnProperty(g) && T != null) switch(g){
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                f = T;
                            default:
                                a.hasOwnProperty(g) || fl(l, t, g, null, a, T);
                        }
                    }
                    for(var m in a){
                        var g = a[m];
                        if (T = e[m], a.hasOwnProperty(m) && (g != null || T != null)) switch(m){
                            case "type":
                                n = g;
                                break;
                            case "name":
                                u = g;
                                break;
                            case "checked":
                                v = g;
                                break;
                            case "defaultChecked":
                                _ = g;
                                break;
                            case "value":
                                c = g;
                                break;
                            case "defaultValue":
                                i = g;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (g != null) throw Error(o(137, t));
                                break;
                            default:
                                g !== T && fl(l, t, m, g, a, T);
                        }
                    }
                    In(l, c, i, f, v, _, n, u);
                    return;
                case "select":
                    g = c = i = m = null;
                    for(n in e)if (f = e[n], e.hasOwnProperty(n) && f != null) switch(n){
                        case "value":
                            break;
                        case "multiple":
                            g = f;
                        default:
                            a.hasOwnProperty(n) || fl(l, t, n, null, a, f);
                    }
                    for(u in a)if (n = a[u], f = e[u], a.hasOwnProperty(u) && (n != null || f != null)) switch(u){
                        case "value":
                            m = n;
                            break;
                        case "defaultValue":
                            i = n;
                            break;
                        case "multiple":
                            c = n;
                        default:
                            n !== f && fl(l, t, u, n, a, f);
                    }
                    t = i, e = c, a = g, m != null ? Le(l, !!e, m, !1) : !!a != !!e && (t != null ? Le(l, !!e, t, !0) : Le(l, !!e, e ? [] : "", !1));
                    return;
                case "textarea":
                    g = m = null;
                    for(i in e)if (u = e[i], e.hasOwnProperty(i) && u != null && !a.hasOwnProperty(i)) switch(i){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            fl(l, t, i, null, a, u);
                    }
                    for(c in a)if (u = a[c], n = e[c], a.hasOwnProperty(c) && (u != null || n != null)) switch(c){
                        case "value":
                            m = u;
                            break;
                        case "defaultValue":
                            g = u;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (u != null) throw Error(o(91));
                            break;
                        default:
                            u !== n && fl(l, t, c, u, a, n);
                    }
                    Rf(l, m, g);
                    return;
                case "option":
                    for(var Q in e)if (m = e[Q], e.hasOwnProperty(Q) && m != null && !a.hasOwnProperty(Q)) switch(Q){
                        case "selected":
                            l.selected = !1;
                            break;
                        default:
                            fl(l, t, Q, null, a, m);
                    }
                    for(f in a)if (m = a[f], g = e[f], a.hasOwnProperty(f) && m !== g && (m != null || g != null)) switch(f){
                        case "selected":
                            l.selected = m && typeof m != "function" && typeof m != "symbol";
                            break;
                        default:
                            fl(l, t, f, m, a, g);
                    }
                    return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                    for(var Y in e)m = e[Y], e.hasOwnProperty(Y) && m != null && !a.hasOwnProperty(Y) && fl(l, t, Y, null, a, m);
                    for(v in a)if (m = a[v], g = e[v], a.hasOwnProperty(v) && m !== g && (m != null || g != null)) switch(v){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (m != null) throw Error(o(137, t));
                            break;
                        default:
                            fl(l, t, v, m, a, g);
                    }
                    return;
                default:
                    if (lc(t)) {
                        for(var sl in e)m = e[sl], e.hasOwnProperty(sl) && m !== void 0 && !a.hasOwnProperty(sl) && Yi(l, t, sl, void 0, a, m);
                        for(_ in a)m = a[_], g = e[_], !a.hasOwnProperty(_) || m === g || m === void 0 && g === void 0 || Yi(l, t, _, m, a, g);
                        return;
                    }
            }
            for(var d in e)m = e[d], e.hasOwnProperty(d) && m != null && !a.hasOwnProperty(d) && fl(l, t, d, null, a, m);
            for(T in a)m = a[T], g = e[T], !a.hasOwnProperty(T) || m === g || m == null && g == null || fl(l, t, T, m, a, g);
        }
        var Gi = null, Xi = null;
        function Tn(l) {
            return l.nodeType === 9 ? l : l.ownerDocument;
        }
        function qo(l) {
            switch(l){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function Bo(l, t) {
            if (l === 0) switch(t){
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0;
            }
            return l === 1 && t === "foreignObject" ? 0 : l;
        }
        function Qi(l, t) {
            return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var Zi = null;
        function by() {
            var l = window.event;
            return l && l.type === "popstate" ? l === Zi ? !1 : (Zi = l, !0) : (Zi = null, !1);
        }
        var Co = typeof setTimeout == "function" ? setTimeout : void 0, Sy = typeof clearTimeout == "function" ? clearTimeout : void 0, Yo = typeof Promise == "function" ? Promise : void 0, _y = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yo < "u" ? function(l) {
            return Yo.resolve(null).then(l).catch(py);
        } : Co;
        function py(l) {
            setTimeout(function() {
                throw l;
            });
        }
        function se(l) {
            return l === "head";
        }
        function Go(l, t) {
            var e = t, a = 0, u = 0;
            do {
                var n = e.nextSibling;
                if (l.removeChild(e), n && n.nodeType === 8) if (e = n.data, e === "/$") {
                    if (0 < a && 8 > a) {
                        e = a;
                        var c = l.ownerDocument;
                        if (e & 1 && ru(c.documentElement), e & 2 && ru(c.body), e & 4) for(e = c.head, ru(e), c = e.firstChild; c;){
                            var i = c.nextSibling, f = c.nodeName;
                            c[Aa] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && c.rel.toLowerCase() === "stylesheet" || e.removeChild(c), c = i;
                        }
                    }
                    if (u === 0) {
                        l.removeChild(n), bu(t);
                        return;
                    }
                    u--;
                } else e === "$" || e === "$?" || e === "$!" ? u++ : a = e.charCodeAt(0) - 48;
                else a = 0;
                e = n;
            }while (e);
            bu(t);
        }
        function Li(l) {
            var t = l.firstChild;
            for(t && t.nodeType === 10 && (t = t.nextSibling); t;){
                var e = t;
                switch(t = t.nextSibling, e.nodeName){
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        Li(e), kn(e);
                        continue;
                    case "SCRIPT":
                    case "STYLE":
                        continue;
                    case "LINK":
                        if (e.rel.toLowerCase() === "stylesheet") continue;
                }
                l.removeChild(e);
            }
        }
        function Ey(l, t, e, a) {
            for(; l.nodeType === 1;){
                var u = e;
                if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
                } else if (a) {
                    if (!l[Aa]) switch(t){
                        case "meta":
                            if (!l.hasAttribute("itemprop")) break;
                            return l;
                        case "link":
                            if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
                            if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title)) break;
                            return l;
                        case "style":
                            if (l.hasAttribute("data-precedence")) break;
                            return l;
                        case "script":
                            if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
                            return l;
                        default:
                            return l;
                    }
                } else if (t === "input" && l.type === "hidden") {
                    var n = u.name == null ? null : "" + u.name;
                    if (u.type === "hidden" && l.getAttribute("name") === n) return l;
                } else return l;
                if (l = _t(l.nextSibling), l === null) break;
            }
            return null;
        }
        function xy(l, t, e) {
            if (t === "") return null;
            for(; l.nodeType !== 3;)if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = _t(l.nextSibling), l === null)) return null;
            return l;
        }
        function Vi(l) {
            return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
        }
        function Ty(l, t) {
            var e = l.ownerDocument;
            if (l.data !== "$?" || e.readyState === "complete") t();
            else {
                var a = function() {
                    t(), e.removeEventListener("DOMContentLoaded", a);
                };
                e.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
            }
        }
        function _t(l) {
            for(; l != null; l = l.nextSibling){
                var t = l.nodeType;
                if (t === 1 || t === 3) break;
                if (t === 8) {
                    if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
                    if (t === "/$") return null;
                }
            }
            return l;
        }
        var wi = null;
        function Xo(l) {
            l = l.previousSibling;
            for(var t = 0; l;){
                if (l.nodeType === 8) {
                    var e = l.data;
                    if (e === "$" || e === "$!" || e === "$?") {
                        if (t === 0) return l;
                        t--;
                    } else e === "/$" && t++;
                }
                l = l.previousSibling;
            }
            return null;
        }
        function Qo(l, t, e) {
            switch(t = Tn(e), l){
                case "html":
                    if (l = t.documentElement, !l) throw Error(o(452));
                    return l;
                case "head":
                    if (l = t.head, !l) throw Error(o(453));
                    return l;
                case "body":
                    if (l = t.body, !l) throw Error(o(454));
                    return l;
                default:
                    throw Error(o(451));
            }
        }
        function ru(l) {
            for(var t = l.attributes; t.length;)l.removeAttributeNode(t[0]);
            kn(l);
        }
        var vt = new Map, Zo = new Set;
        function An(l) {
            return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
        }
        var Lt = R.d;
        R.d = {
            f: Ay,
            r: zy,
            D: My,
            C: Oy,
            L: Dy,
            m: Ny,
            X: Ry,
            S: Uy,
            M: Hy
        };
        function Ay() {
            var l = Lt.f(), t = mn();
            return l || t;
        }
        function zy(l) {
            var t = Ge(l);
            t !== null && t.tag === 5 && t.type === "form" ? ir(t) : Lt.r(l);
        }
        var Sa = typeof document > "u" ? null : document;
        function Lo(l, t, e) {
            var a = Sa;
            if (a && typeof t == "string" && t) {
                var u = ft(t);
                u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), Zo.has(u) || (Zo.add(u), l = {
                    rel: l,
                    crossOrigin: e,
                    href: t
                }, a.querySelector(u) === null && (t = a.createElement("link"), ql(t, "link", l), Dl(t), a.head.appendChild(t)));
            }
        }
        function My(l) {
            Lt.D(l), Lo("dns-prefetch", l, null);
        }
        function Oy(l, t) {
            Lt.C(l, t), Lo("preconnect", l, t);
        }
        function Dy(l, t, e) {
            Lt.L(l, t, e);
            var a = Sa;
            if (a && l && t) {
                var u = 'link[rel="preload"][as="' + ft(t) + '"]';
                t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + ft(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + ft(e.imageSizes) + '"]')) : u += '[href="' + ft(l) + '"]';
                var n = u;
                switch(t){
                    case "style":
                        n = _a(l);
                        break;
                    case "script":
                        n = pa(l);
                }
                vt.has(n) || (l = N({
                    rel: "preload",
                    href: t === "image" && e && e.imageSrcSet ? void 0 : l,
                    as: t
                }, e), vt.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(ou(n)) || t === "script" && a.querySelector(du(n)) || (t = a.createElement("link"), ql(t, "link", l), Dl(t), a.head.appendChild(t)));
            }
        }
        function Ny(l, t) {
            Lt.m(l, t);
            var e = Sa;
            if (e && l) {
                var a = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + ft(a) + '"][href="' + ft(l) + '"]', n = u;
                switch(a){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        n = pa(l);
                }
                if (!vt.has(n) && (l = N({
                    rel: "modulepreload",
                    href: l
                }, t), vt.set(n, l), e.querySelector(u) === null)) {
                    switch(a){
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (e.querySelector(du(n))) return;
                    }
                    a = e.createElement("link"), ql(a, "link", l), Dl(a), e.head.appendChild(a);
                }
            }
        }
        function Uy(l, t, e) {
            Lt.S(l, t, e);
            var a = Sa;
            if (a && l) {
                var u = Xe(a).hoistableStyles, n = _a(l);
                t = t || "default";
                var c = u.get(n);
                if (!c) {
                    var i = {
                        loading: 0,
                        preload: null
                    };
                    if (c = a.querySelector(ou(n))) i.loading = 5;
                    else {
                        l = N({
                            rel: "stylesheet",
                            href: l,
                            "data-precedence": t
                        }, e), (e = vt.get(n)) && Ki(l, e);
                        var f = c = a.createElement("link");
                        Dl(f), ql(f, "link", l), f._p = new Promise(function(v, _) {
                            f.onload = v, f.onerror = _;
                        }), f.addEventListener("load", function() {
                            i.loading |= 1;
                        }), f.addEventListener("error", function() {
                            i.loading |= 2;
                        }), i.loading |= 4, zn(c, t, a);
                    }
                    c = {
                        type: "stylesheet",
                        instance: c,
                        count: 1,
                        state: i
                    }, u.set(n, c);
                }
            }
        }
        function Ry(l, t) {
            Lt.X(l, t);
            var e = Sa;
            if (e && l) {
                var a = Xe(e).hoistableScripts, u = pa(l), n = a.get(u);
                n || (n = e.querySelector(du(u)), n || (l = N({
                    src: l,
                    async: !0
                }, t), (t = vt.get(u)) && Ji(l, t), n = e.createElement("script"), Dl(n), ql(n, "link", l), e.head.appendChild(n)), n = {
                    type: "script",
                    instance: n,
                    count: 1,
                    state: null
                }, a.set(u, n));
            }
        }
        function Hy(l, t) {
            Lt.M(l, t);
            var e = Sa;
            if (e && l) {
                var a = Xe(e).hoistableScripts, u = pa(l), n = a.get(u);
                n || (n = e.querySelector(du(u)), n || (l = N({
                    src: l,
                    async: !0,
                    type: "module"
                }, t), (t = vt.get(u)) && Ji(l, t), n = e.createElement("script"), Dl(n), ql(n, "link", l), e.head.appendChild(n)), n = {
                    type: "script",
                    instance: n,
                    count: 1,
                    state: null
                }, a.set(u, n));
            }
        }
        function Vo(l, t, e, a) {
            var u = (u = L.current) ? An(u) : null;
            if (!u) throw Error(o(446));
            switch(l){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof e.precedence == "string" && typeof e.href == "string" ? (t = _a(e.href), e = Xe(u).hoistableStyles, a = e.get(t), a || (a = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    }, e.set(t, a)), a) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                case "link":
                    if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
                        l = _a(e.href);
                        var n = Xe(u).hoistableStyles, c = n.get(l);
                        if (c || (u = u.ownerDocument || u, c = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, n.set(l, c), (n = u.querySelector(ou(l))) && !n._p && (c.instance = n, c.state.loading = 5), vt.has(l) || (e = {
                            rel: "preload",
                            as: "style",
                            href: e.href,
                            crossOrigin: e.crossOrigin,
                            integrity: e.integrity,
                            media: e.media,
                            hrefLang: e.hrefLang,
                            referrerPolicy: e.referrerPolicy
                        }, vt.set(l, e), n || jy(u, l, e, c.state))), t && a === null) throw Error(o(528, ""));
                        return c;
                    }
                    if (t && a !== null) throw Error(o(529, ""));
                    return null;
                case "script":
                    return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = pa(e), e = Xe(u).hoistableScripts, a = e.get(t), a || (a = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null
                    }, e.set(t, a)), a) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                default:
                    throw Error(o(444, l));
            }
        }
        function _a(l) {
            return 'href="' + ft(l) + '"';
        }
        function ou(l) {
            return 'link[rel="stylesheet"][' + l + "]";
        }
        function wo(l) {
            return N({}, l, {
                "data-precedence": l.precedence,
                precedence: null
            });
        }
        function jy(l, t, e, a) {
            l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
                return a.loading |= 1;
            }), t.addEventListener("error", function() {
                return a.loading |= 2;
            }), ql(t, "link", e), Dl(t), l.head.appendChild(t));
        }
        function pa(l) {
            return '[src="' + ft(l) + '"]';
        }
        function du(l) {
            return "script[async]" + l;
        }
        function Ko(l, t, e) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var a = l.querySelector('style[data-href~="' + ft(e.href) + '"]');
                    if (a) return t.instance = a, Dl(a), a;
                    var u = N({}, e, {
                        "data-href": e.href,
                        "data-precedence": e.precedence,
                        href: null,
                        precedence: null
                    });
                    return a = (l.ownerDocument || l).createElement("style"), Dl(a), ql(a, "style", u), zn(a, e.precedence, l), t.instance = a;
                case "stylesheet":
                    u = _a(e.href);
                    var n = l.querySelector(ou(u));
                    if (n) return t.state.loading |= 4, t.instance = n, Dl(n), n;
                    a = wo(e), (u = vt.get(u)) && Ki(a, u), n = (l.ownerDocument || l).createElement("link"), Dl(n);
                    var c = n;
                    return c._p = new Promise(function(i, f) {
                        c.onload = i, c.onerror = f;
                    }), ql(n, "link", a), t.state.loading |= 4, zn(n, e.precedence, l), t.instance = n;
                case "script":
                    return n = pa(e.src), (u = l.querySelector(du(n))) ? (t.instance = u, Dl(u), u) : (a = e, (u = vt.get(n)) && (a = N({}, e), Ji(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), Dl(u), ql(u, "link", a), l.head.appendChild(u), t.instance = u);
                case "void":
                    return null;
                default:
                    throw Error(o(443, t.type));
            }
            else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, zn(a, e.precedence, l));
            return t.instance;
        }
        function zn(l, t, e) {
            for(var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, c = 0; c < a.length; c++){
                var i = a[c];
                if (i.dataset.precedence === t) n = i;
                else if (n !== u) break;
            }
            n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
        }
        function Ki(l, t) {
            l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
        }
        function Ji(l, t) {
            l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
        }
        var Mn = null;
        function Jo(l, t, e) {
            if (Mn === null) {
                var a = new Map, u = Mn = new Map;
                u.set(e, a);
            } else u = Mn, a = u.get(e), a || (a = new Map, u.set(e, a));
            if (a.has(l)) return a;
            for(a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++){
                var n = e[u];
                if (!(n[Aa] || n[Gl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var c = n.getAttribute(t) || "";
                    c = l + c;
                    var i = a.get(c);
                    i ? i.push(n) : a.set(c, [
                        n
                    ]);
                }
            }
            return a;
        }
        function ko(l, t, e) {
            l = l.ownerDocument || l, l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null);
        }
        function qy(l, t, e) {
            if (e === 1 || t.itemProp != null) return !1;
            switch(l){
                case "meta":
                case "title":
                    return !0;
                case "style":
                    if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                    return !0;
                case "link":
                    if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                    switch(t.rel){
                        case "stylesheet":
                            return l = t.disabled, typeof t.precedence == "string" && l == null;
                        default:
                            return !0;
                    }
                case "script":
                    if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
            }
            return !1;
        }
        function Wo(l) {
            return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
        }
        var yu = null;
        function By() {}
        function Cy(l, t, e) {
            if (yu === null) throw Error(o(475));
            var a = yu;
            if (t.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (t.state.loading & 4) === 0) {
                if (t.instance === null) {
                    var u = _a(e.href), n = l.querySelector(ou(u));
                    if (n) {
                        l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = On.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = n, Dl(n);
                        return;
                    }
                    n = l.ownerDocument || l, e = wo(e), (u = vt.get(u)) && Ki(e, u), n = n.createElement("link"), Dl(n);
                    var c = n;
                    c._p = new Promise(function(i, f) {
                        c.onload = i, c.onerror = f;
                    }), ql(n, "link", e), t.instance = n;
                }
                a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = On.bind(a), l.addEventListener("load", t), l.addEventListener("error", t));
            }
        }
        function Yy() {
            if (yu === null) throw Error(o(475));
            var l = yu;
            return l.stylesheets && l.count === 0 && ki(l, l.stylesheets), 0 < l.count ? function(t) {
                var e = setTimeout(function() {
                    if (l.stylesheets && ki(l, l.stylesheets), l.unsuspend) {
                        var a = l.unsuspend;
                        l.unsuspend = null, a();
                    }
                }, 6e4);
                return l.unsuspend = t, function() {
                    l.unsuspend = null, clearTimeout(e);
                };
            } : null;
        }
        function On() {
            if (this.count--, this.count === 0) {
                if (this.stylesheets) ki(this, this.stylesheets);
                else if (this.unsuspend) {
                    var l = this.unsuspend;
                    this.unsuspend = null, l();
                }
            }
        }
        var Dn = null;
        function ki(l, t) {
            l.stylesheets = null, l.unsuspend !== null && (l.count++, Dn = new Map, t.forEach(Gy, l), Dn = null, On.call(l));
        }
        function Gy(l, t) {
            if (!(t.state.loading & 4)) {
                var e = Dn.get(l);
                if (e) var a = e.get(null);
                else {
                    e = new Map, Dn.set(l, e);
                    for(var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++){
                        var c = u[n];
                        (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c), a = c);
                    }
                    a && e.set(null, a);
                }
                u = t.instance, c = u.getAttribute("data-precedence"), n = e.get(c) || a, n === a && e.set(null, u), e.set(c, u), this.count++, a = On.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
            }
        }
        var hu = {
            $$typeof: yl,
            Provider: null,
            Consumer: null,
            _currentValue: X,
            _currentValue2: X,
            _threadCount: 0
        };
        function Xy(l, t, e, a, u, n, c, i) {
            this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Vn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vn(0), this.hiddenUpdates = Vn(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = new Map;
        }
        function $o(l, t, e, a, u, n, c, i, f, v, _, T) {
            return l = new Xy(l, t, e, c, i, f, v, T), t = 1, n === !0 && (t |= 24), n = tt(3, null, null, t), l.current = n, n.stateNode = l, t = Dc(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
                element: a,
                isDehydrated: e,
                cache: t
            }, Hc(n), l;
        }
        function Fo(l) {
            return l ? (l = Ie, l) : Ie;
        }
        function Io(l, t, e, a, u, n) {
            u = Fo(u), a.context === null ? a.context = u : a.pendingContext = u, a = $t(t), a.payload = {
                element: e
            }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = Ft(l, a, t), e !== null && (ct(e, l, t), Va(e, l, t));
        }
        function Po(l, t) {
            if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
                var e = l.retryLane;
                l.retryLane = e !== 0 && e < t ? e : t;
            }
        }
        function Wi(l, t) {
            Po(l, t), (l = l.alternate) && Po(l, t);
        }
        function l0(l) {
            if (l.tag === 13) {
                var t = Fe(l, 67108864);
                t !== null && ct(t, l, 67108864), Wi(l, 67108864);
            }
        }
        var Nn = !0;
        function Qy(l, t, e, a) {
            var u = p.T;
            p.T = null;
            var n = R.p;
            try {
                R.p = 2, $i(l, t, e, a);
            } finally{
                R.p = n, p.T = u;
            }
        }
        function Zy(l, t, e, a) {
            var u = p.T;
            p.T = null;
            var n = R.p;
            try {
                R.p = 8, $i(l, t, e, a);
            } finally{
                R.p = n, p.T = u;
            }
        }
        function $i(l, t, e, a) {
            if (Nn) {
                var u = Fi(a);
                if (u === null) Ci(l, t, a, Un, e), e0(l, a);
                else if (Vy(u, l, t, e, a)) a.stopPropagation();
                else if (e0(l, a), t & 4 && -1 < Ly.indexOf(l)) {
                    for(; u !== null;){
                        var n = Ge(u);
                        if (n !== null) switch(n.tag){
                            case 3:
                                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                                    var c = be(n.pendingLanes);
                                    if (c !== 0) {
                                        var i = n;
                                        for(i.pendingLanes |= 2, i.entangledLanes |= 2; c;){
                                            var f = 1 << 31 - Pl(c);
                                            i.entanglements[1] |= f, c &= ~f;
                                        }
                                        Mt(n), (ul & 6) === 0 && (hn = Et() + 500, iu(0));
                                    }
                                }
                                break;
                            case 13:
                                i = Fe(n, 2), i !== null && ct(i, n, 2), mn(), Wi(n, 2);
                        }
                        if (n = Fi(a), n === null && Ci(l, t, a, Un, e), n === u) break;
                        u = n;
                    }
                    u !== null && a.stopPropagation();
                } else Ci(l, t, a, null, e);
            }
        }
        function Fi(l) {
            return l = ec(l), Ii(l);
        }
        var Un = null;
        function Ii(l) {
            if (Un = null, l = Ye(l), l !== null) {
                var t = D(l);
                if (t === null) l = null;
                else {
                    var e = t.tag;
                    if (e === 13) {
                        if (l = q(t), l !== null) return l;
                        l = null;
                    } else if (e === 3) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                        l = null;
                    } else t !== l && (l = null);
                }
            }
            return Un = l, null;
        }
        function t0(l) {
            switch(l){
                case "beforetoggle":
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
                case "toggle":
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
                    return 2;
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
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 8;
                case "message":
                    switch(O0()){
                        case hf:
                            return 2;
                        case vf:
                            return 8;
                        case Eu:
                        case D0:
                            return 32;
                        case mf:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var Pi = !1, re = null, oe = null, de = null, vu = new Map, mu = new Map, ye = [], Ly = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function e0(l, t) {
            switch(l){
                case "focusin":
                case "focusout":
                    re = null;
                    break;
                case "dragenter":
                case "dragleave":
                    oe = null;
                    break;
                case "mouseover":
                case "mouseout":
                    de = null;
                    break;
                case "pointerover":
                case "pointerout":
                    vu.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    mu.delete(t.pointerId);
            }
        }
        function gu(l, t, e, a, u, n) {
            return l === null || l.nativeEvent !== n ? (l = {
                blockedOn: t,
                domEventName: e,
                eventSystemFlags: a,
                nativeEvent: n,
                targetContainers: [
                    u
                ]
            }, t !== null && (t = Ge(t), t !== null && l0(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
        }
        function Vy(l, t, e, a, u) {
            switch(t){
                case "focusin":
                    return re = gu(re, l, t, e, a, u), !0;
                case "dragenter":
                    return oe = gu(oe, l, t, e, a, u), !0;
                case "mouseover":
                    return de = gu(de, l, t, e, a, u), !0;
                case "pointerover":
                    var n = u.pointerId;
                    return vu.set(n, gu(vu.get(n) || null, l, t, e, a, u)), !0;
                case "gotpointercapture":
                    return n = u.pointerId, mu.set(n, gu(mu.get(n) || null, l, t, e, a, u)), !0;
            }
            return !1;
        }
        function a0(l) {
            var t = Ye(l.target);
            if (t !== null) {
                var e = D(t);
                if (e !== null) {
                    if (t = e.tag, t === 13) {
                        if (t = q(e), t !== null) {
                            l.blockedOn = t, C0(l.priority, function() {
                                if (e.tag === 13) {
                                    var a = nt();
                                    a = wn(a);
                                    var u = Fe(e, a);
                                    u !== null && ct(u, e, a), Wi(e, a);
                                }
                            });
                            return;
                        }
                    } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
                        l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
                        return;
                    }
                }
            }
            l.blockedOn = null;
        }
        function Rn(l) {
            if (l.blockedOn !== null) return !1;
            for(var t = l.targetContainers; 0 < t.length;){
                var e = Fi(l.nativeEvent);
                if (e === null) {
                    e = l.nativeEvent;
                    var a = new e.constructor(e.type, e);
                    tc = a, e.target.dispatchEvent(a), tc = null;
                } else return t = Ge(e), t !== null && l0(t), l.blockedOn = e, !1;
                t.shift();
            }
            return !0;
        }
        function u0(l, t, e) {
            Rn(l) && e.delete(t);
        }
        function wy() {
            Pi = !1, re !== null && Rn(re) && (re = null), oe !== null && Rn(oe) && (oe = null), de !== null && Rn(de) && (de = null), vu.forEach(u0), mu.forEach(u0);
        }
        function Hn(l, t) {
            l.blockedOn === t && (l.blockedOn = null, Pi || (Pi = !0, y.unstable_scheduleCallback(y.unstable_NormalPriority, wy)));
        }
        var jn = null;
        function n0(l) {
            jn !== l && (jn = l, y.unstable_scheduleCallback(y.unstable_NormalPriority, function() {
                jn === l && (jn = null);
                for(var t = 0; t < l.length; t += 3){
                    var e = l[t], a = l[t + 1], u = l[t + 2];
                    if (typeof a != "function") {
                        if (Ii(a || e) === null) continue;
                        break;
                    }
                    var n = Ge(e);
                    n !== null && (l.splice(t, 3), t -= 3, Ic(n, {
                        pending: !0,
                        data: u,
                        method: e.method,
                        action: a
                    }, a, u));
                }
            }));
        }
        function bu(l) {
            function t(f) {
                return Hn(f, l);
            }
            re !== null && Hn(re, l), oe !== null && Hn(oe, l), de !== null && Hn(de, l), vu.forEach(t), mu.forEach(t);
            for(var e = 0; e < ye.length; e++){
                var a = ye[e];
                a.blockedOn === l && (a.blockedOn = null);
            }
            for(; 0 < ye.length && (e = ye[0], e.blockedOn === null);)a0(e), e.blockedOn === null && ye.shift();
            if (e = (l.ownerDocument || l).$$reactFormReplay, e != null) for(a = 0; a < e.length; a += 3){
                var u = e[a], n = e[a + 1], c = u[Kl] || null;
                if (typeof n == "function") c || n0(e);
                else if (c) {
                    var i = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (u = n, c = n[Kl] || null) i = c.formAction;
                        else if (Ii(u) !== null) continue;
                    } else i = c.action;
                    typeof i == "function" ? e[a + 1] = i : (e.splice(a, 3), a -= 3), n0(e);
                }
            }
        }
        function lf(l) {
            this._internalRoot = l;
        }
        qn.prototype.render = lf.prototype.render = function(l) {
            var t = this._internalRoot;
            if (t === null) throw Error(o(409));
            var e = t.current, a = nt();
            Io(e, a, l, t, null, null);
        }, qn.prototype.unmount = lf.prototype.unmount = function() {
            var l = this._internalRoot;
            if (l !== null) {
                this._internalRoot = null;
                var t = l.containerInfo;
                Io(l.current, 2, null, l, null, null), mn(), t[Ce] = null;
            }
        };
        function qn(l) {
            this._internalRoot = l;
        }
        qn.prototype.unstable_scheduleHydration = function(l) {
            if (l) {
                var t = pf();
                l = {
                    blockedOn: null,
                    target: l,
                    priority: t
                };
                for(var e = 0; e < ye.length && t !== 0 && t < ye[e].priority; e++);
                ye.splice(e, 0, l), e === 0 && a0(l);
            }
        };
        var c0 = b.version;
        if (c0 !== "19.1.0") throw Error(o(527, c0, "19.1.0"));
        R.findDOMNode = function(l) {
            var t = l._reactInternals;
            if (t === void 0) throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
            return l = z(t), l = l !== null ? E(l) : null, l = l === null ? null : l.stateNode, l;
        };
        var Ky = {
            bundleType: 0,
            version: "19.1.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: p,
            reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var Bn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!Bn.isDisabled && Bn.supportsFiber) try {
                Ea = Bn.inject(Ky), Il = Bn;
            } catch  {}
        }
        return _u.createRoot = function(l, t) {
            if (!O(l)) throw Error(o(299));
            var e = !1, a = "", u = pr, n = Er, c = xr, i = null;
            return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (i = t.unstable_transitionCallbacks)), t = $o(l, 1, !1, null, null, e, a, u, n, c, i, null), l[Ce] = t.current, Bi(l), new lf(t);
        }, _u.hydrateRoot = function(l, t, e) {
            if (!O(l)) throw Error(o(299));
            var a = !1, u = "", n = pr, c = Er, i = xr, f = null, v = null;
            return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (f = e.unstable_transitionCallbacks), e.formState !== void 0 && (v = e.formState)), t = $o(l, 1, !0, t, e ?? null, a, u, n, c, i, f, v), t.context = Fo(null), e = t.current, a = nt(), a = wn(a), u = $t(a), u.callback = null, Ft(e, u, a), e = a, t.current.lanes = e, Ta(t, e), Mt(t), l[Ce] = t.current, Bi(l), new qn(t);
        }, _u.version = "19.1.0", _u;
    }
    var m0;
    function eh() {
        if (m0) return af.exports;
        m0 = 1;
        function y() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
            } catch (b) {
                console.error(b);
            }
        }
        return y(), af.exports = th(), af.exports;
    }
    var ah = eh();
    const uh = ()=>S.jsx("footer", {
            className: "sm:px-4 py-2 text-center text-sm text-gray-400 border-t-2 border-gray-700",
            children: S.jsxs("div", {
                className: "flex flex-wrap items-center justify-center gap-0.5 sm:gap-1",
                children: [
                    S.jsx("span", {
                        children: "Built by "
                    }),
                    S.jsx("a", {
                        href: "https://github.com/bp7968h",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-purple-400 hover:text-purple-300 font-semibold",
                        children: "@bp7968h"
                    }),
                    S.jsx("span", {
                        children: "using "
                    }),
                    S.jsx("span", {
                        className: "text-orange-400 font-semibold",
                        children: "Rust"
                    }),
                    S.jsx("span", {
                        children: ","
                    }),
                    S.jsx("span", {
                        className: "text-indigo-400 font-semibold",
                        children: "WebAssembly"
                    }),
                    S.jsx("span", {
                        children: " & "
                    }),
                    S.jsx("span", {
                        className: "text-cyan-400 font-semibold",
                        children: "React"
                    })
                ]
            })
        }), nh = "/chip8.svg", ch = ({ navItems: y })=>S.jsxs("header", {
            className: "bg-gray-900 text-white p-4 flex items-center justify-between border-b-2 border-gray-700",
            children: [
                S.jsxs("div", {
                    className: "flex items-center",
                    children: [
                        S.jsx("img", {
                            src: nh,
                            alt: "CHIP-8 Logo",
                            className: "h-10 w-10 invert"
                        }),
                        S.jsx("span", {
                            className: "text-3xl font-bold text-purple-400 mr-1.5",
                            children: "CHIP-8"
                        }),
                        S.jsx("span", {
                            className: "sr-only sm:not-sr-only text-sm text-gray-400",
                            children: "Emulator"
                        })
                    ]
                }),
                S.jsx("nav", {
                    className: "flex items-center space-x-6",
                    children: y.map((b, M)=>S.jsxs("a", {
                            href: b.href,
                            className: "flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-200",
                            title: b.title,
                            target: b.external ? "_blank" : void 0,
                            rel: b.external ? "noopener noreferrer" : void 0,
                            children: [
                                S.jsx("img", {
                                    src: b.src,
                                    alt: b.title,
                                    className: "h-7 w-7 mr-1"
                                }),
                                S.jsx("span", {
                                    className: "sr-only sm:not-sr-only text-lg",
                                    children: b.text
                                })
                            ]
                        }, b.text + M.toString()))
                })
            ]
        }), ih = [
        {
            href: "https://github.com/bp7968h/chip8-emu",
            title: "GitHub Repository",
            text: "Github",
            src: "/github.svg",
            external: !0
        }
    ], fh = ({ children: y })=>S.jsxs("div", {
            className: "flex flex-col min-h-screen min-w-screen",
            children: [
                S.jsx(ch, {
                    navItems: ih
                }),
                S.jsx("main", {
                    className: "lg:flex-grow lg:h-0",
                    children: y
                }),
                S.jsx(uh, {})
            ]
        }), sh = ({ children: y, style: b })=>S.jsx("div", {
            className: `flex flex-col py-2 px-2 gap-2  lg:flex-row lg:py-8 lg:px-16 h-full ${b || ""}`,
            children: y
        }), ff = ({ children: y, className: b })=>S.jsx("div", {
            className: `bg-card rounded-xl shadow-lg p-4 ${b || ""}`,
            children: y
        }), ve = ({ title: y, children: b, className: M })=>S.jsxs("div", {
            className: M,
            children: [
                S.jsx("h2", {
                    className: "text-xl font-bold text-white mb-4",
                    children: y
                }),
                b
            ]
        }), rh = ({ children: y, selected: b = !1, onClick: M, className: o })=>S.jsx("li", {
            className: `
        rounded-md flex items-center justify-between text-gray-50
        ${b ? "bg-gray-700 bg-opacity-60" : "border border-gray-600"}
        ${M ? "cursor-pointer hover:bg-gray-700/50 transition-colors duration-150" : ""}
        ${o || ""}
      `,
            onClick: M,
            children: y
        }), _0 = ({ items: y, onItemClick: b, className: M, renderItem: o, renderRight: O, getItemKey: D, isItemSelected: q, listItemClassName: K })=>S.jsx("ul", {
            className: `${M || ""}`,
            children: y.map((z)=>S.jsxs(rh, {
                    onClick: b ? ()=>b(z) : void 0,
                    selected: q ? q(z) : !1,
                    className: K || "",
                    children: [
                        o(z),
                        O && O(z)
                    ]
                }, D(z)))
        }), oh = ({ games: y, onGameSelect: b, selectedGameId: M })=>S.jsx(ve, {
            title: "Game Library",
            children: S.jsx(_0, {
                items: y,
                onItemClick: (o)=>b(o),
                className: "space-y-2 flex-grow",
                listItemClassName: "p-3",
                renderItem: (o)=>S.jsxs("div", {
                        className: "flex items-center",
                        children: [
                            S.jsx("span", {
                                className: "w-2 h-2 rounded-full mr-2 bg-purple-400"
                            }),
                            S.jsx("span", {
                                className: `${o.id === M ? "text-gray-50" : "text-gray-300"} font-semibold text-base`,
                                children: o.title
                            })
                        ]
                    }),
                renderRight: (o)=>S.jsx("span", {
                        className: "text-sm font-mono text-gray-400",
                        children: o.author
                    }),
                getItemKey: (o)=>o.id,
                isItemSelected: (o)=>o.id === M
            })
        }), dh = 64, yh = 32, hh = (y, b = dh, M = yh)=>{
        const [o, O] = el.useState(0), D = el.useCallback(()=>{
            const q = typeof y == "function" ? null : y?.current;
            if (!q) return;
            const { clientWidth: K, clientHeight: z } = q;
            q.width = K, q.height = z;
            const E = Math.floor(K / b), N = Math.floor(z / M), V = Math.min(E, N);
            O(V);
        }, [
            y,
            M,
            b
        ]);
        return el.useEffect(()=>{
            const q = typeof y == "function" ? null : y?.current;
            if (!q) return;
            if (typeof window > "u" || !window.ResizeObserver) {
                D();
                return;
            }
            const K = new ResizeObserver((z)=>{
                z[0] && z[0].target === q && D();
            });
            return K.observe(q), ()=>{
                K.unobserve(q);
            };
        }, [
            y,
            D
        ]), el.useEffect(()=>{
            D();
        }, [
            y,
            D
        ]), {
            pixelSize: o,
            calculateCanvasDimensions: D
        };
    }, vh = "/assets/chip8_core_bg-CoHZxNVF.wasm", mh = async (y = {}, b)=>{
        let M;
        if (b.startsWith("data:")) {
            const o = b.replace(/^data:.*?base64,/, "");
            let O;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") O = Buffer.from(o, "base64");
            else if (typeof atob == "function") {
                const D = atob(o);
                O = new Uint8Array(D.length);
                for(let q = 0; q < D.length; q++)O[q] = D.charCodeAt(q);
            } else throw new Error("Cannot decode base64-encoded data URL");
            M = await WebAssembly.instantiate(O, y);
        } else {
            const o = await fetch(b), O = o.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && O.startsWith("application/wasm")) M = await WebAssembly.instantiateStreaming(o, y);
            else {
                const D = await o.arrayBuffer();
                M = await WebAssembly.instantiate(D, y);
            }
        }
        return M.instance.exports;
    };
    let bl;
    function gh(y) {
        bl = y;
    }
    const bh = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
    let p0 = new bh("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    p0.decode();
    let Cn = null;
    function yf() {
        return (Cn === null || Cn.byteLength === 0) && (Cn = new Uint8Array(bl.memory.buffer)), Cn;
    }
    function E0(y, b) {
        return y = y >>> 0, p0.decode(yf().subarray(y, y + b));
    }
    function Sh(y, b) {
        return y = y >>> 0, yf().subarray(y / 1, y / 1 + b);
    }
    let x0 = 0;
    function _h(y, b) {
        const M = b(y.length * 1, 1) >>> 0;
        return yf().set(y, M / 1), x0 = y.length, M;
    }
    const ph = Object.freeze({
        On: 1,
        1: "On",
        Off: 0,
        0: "Off"
    }), g0 = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((y)=>bl.__wbg_processor_free(y >>> 0, 1));
    class Eh {
        __destroy_into_raw() {
            const b = this.__wbg_ptr;
            return this.__wbg_ptr = 0, g0.unregister(this), b;
        }
        free() {
            const b = this.__destroy_into_raw();
            bl.__wbg_processor_free(b, 0);
        }
        get_screen_data() {
            const b = bl.processor_get_screen_data(this.__wbg_ptr);
            var M = Sh(b[0], b[1]).slice();
            return bl.__wbindgen_free(b[0], b[1] * 1, 1), M;
        }
        constructor(){
            const b = bl.processor_new();
            return this.__wbg_ptr = b >>> 0, g0.register(this, this.__wbg_ptr, this), this;
        }
        static SCREEN_WIDTH() {
            return bl.processor_SCREEN_WIDTH() >>> 0;
        }
        static SCREEN_HEIGHT() {
            return bl.processor_SCREEN_HEIGHT() >>> 0;
        }
        load(b) {
            const M = _h(b, bl.__wbindgen_malloc), o = x0;
            bl.processor_load(this.__wbg_ptr, M, o);
        }
        screen() {
            return bl.processor_screen(this.__wbg_ptr) >>> 0;
        }
        opcodeBufferPtr() {
            return bl.processor_opcodeBufferPtr(this.__wbg_ptr) >>> 0;
        }
        key_press(b) {
            bl.processor_key_press(this.__wbg_ptr, b);
        }
        key_release(b) {
            bl.processor_key_release(this.__wbg_ptr, b);
        }
        cycle() {
            bl.processor_cycle(this.__wbg_ptr);
        }
        execute(b) {
            bl.processor_execute(this.__wbg_ptr, b);
        }
        tick_timers() {
            bl.processor_tick_timers(this.__wbg_ptr);
        }
        reset() {
            bl.processor_reset(this.__wbg_ptr);
        }
        program_counter() {
            return bl.processor_program_counter(this.__wbg_ptr);
        }
        stack_pointer() {
            return bl.processor_stack_pointer(this.__wbg_ptr);
        }
        i_register() {
            return bl.processor_i_register(this.__wbg_ptr);
        }
    }
    function xh(y) {
        console.log(y);
    }
    function Th() {
        return Math.random();
    }
    function Ah() {
        const y = bl.__wbindgen_export_0, b = y.grow(4);
        y.set(0, void 0), y.set(b + 0, void 0), y.set(b + 1, null), y.set(b + 2, !0), y.set(b + 3, !1);
    }
    function zh(y, b) {
        return E0(y, b);
    }
    function Mh(y, b) {
        throw new Error(E0(y, b));
    }
    URL = globalThis.URL;
    const pl = await mh({
        "./chip8_core_bg.js": {
            __wbindgen_string_new: zh,
            __wbg_log_c222819a41e063d3: xh,
            __wbg_random_3ad904d98382defe: Th,
            __wbindgen_throw: Mh,
            __wbindgen_init_externref_table: Ah
        }
    }, vh), T0 = pl.memory, Oh = pl.__wbg_processor_free, Dh = pl.processor_get_screen_data, Nh = pl.processor_new, Uh = pl.processor_SCREEN_WIDTH, Rh = pl.processor_SCREEN_HEIGHT, Hh = pl.processor_load, jh = pl.processor_screen, qh = pl.processor_opcodeBufferPtr, Bh = pl.processor_key_press, Ch = pl.processor_key_release, Yh = pl.processor_cycle, Gh = pl.processor_execute, Xh = pl.processor_tick_timers, Qh = pl.processor_reset, Zh = pl.processor_program_counter, Lh = pl.processor_stack_pointer, Vh = pl.processor_i_register, wh = pl.__wbindgen_export_0, Kh = pl.__wbindgen_free, Jh = pl.__wbindgen_malloc, A0 = pl.__wbindgen_start, kh = Object.freeze(Object.defineProperty({
        __proto__: null,
        __wbg_processor_free: Oh,
        __wbindgen_export_0: wh,
        __wbindgen_free: Kh,
        __wbindgen_malloc: Jh,
        __wbindgen_start: A0,
        memory: T0,
        processor_SCREEN_HEIGHT: Rh,
        processor_SCREEN_WIDTH: Uh,
        processor_cycle: Yh,
        processor_execute: Gh,
        processor_get_screen_data: Dh,
        processor_i_register: Vh,
        processor_key_press: Bh,
        processor_key_release: Ch,
        processor_load: Hh,
        processor_new: Nh,
        processor_opcodeBufferPtr: qh,
        processor_program_counter: Zh,
        processor_reset: Qh,
        processor_screen: jh,
        processor_stack_pointer: Lh,
        processor_tick_timers: Xh
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    gh(kh);
    A0();
    const Wh = "#A3A0FF", b0 = "#000000", Yn = 64, sf = 32, $h = ({ className: y, processorRef: b, memoryRef: M, screenUpdateTrigger: o })=>{
        const O = el.useRef(null), { pixelSize: D } = hh(O, Yn, sf), q = el.useCallback(()=>{
            const K = O.current;
            if (!K || D === 0 || !M.current || !b.current) return;
            const z = K.getContext("2d");
            if (!z) return;
            const E = b.current.screen();
            if (E === null) {
                console.warn("Screen pointer is null, cannot draw display.");
                return;
            }
            const N = new Uint8Array(M.current.buffer, E, Yn * sf);
            z.fillStyle = b0, z.fillRect(0, 0, K.width, K.height);
            for(let V = 0; V < sf; V++)for(let Z = 0; Z < Yn; Z++){
                const al = V * Yn + Z;
                z.fillStyle = N[al] == ph.Off ? b0 : Wh, z.fillRect(Z * D, V * D, D, D);
            }
        }, [
            D,
            b,
            M
        ]);
        return el.useEffect(()=>{
            q();
        }, [
            q,
            o
        ]), S.jsx("canvas", {
            ref: O,
            className: `bg-card rounded-xl w-full mb-2 ${y || ""}`,
            children: "Your browser does not support the canvas element."
        });
    }, Fh = ({ onLoadGame: y, setUploadedGameInfo: b })=>{
        const M = el.useRef(null), o = ()=>{
            M.current && M.current.click();
        }, O = (D)=>{
            const q = D.target.files;
            if (q && q.length > 0) {
                const K = q[0], z = new FileReader;
                z.onload = (E)=>{
                    if (E.target && E.target.result) {
                        const N = E.target.result, V = new Uint8Array(N);
                        y(V);
                        let Z = K.name.split(".")[0];
                        Z.includes("_") ? Z = Z.split("_").map((al)=>al[0].toUpperCase() + al.slice(1).toLowerCase()).join(" ") : Z = Z.charAt(0).toUpperCase() + Z.slice(1).toLowerCase(), b({
                            author: "Unknown",
                            description: [
                                {
                                    key: "info",
                                    action: "No data available"
                                }
                            ],
                            filename: K.name,
                            id: Z,
                            size: K.size / 1e3,
                            title: Z,
                            year: 0
                        });
                    }
                }, z.onerror = (E)=>{
                    console.error("Error reading file:", E);
                }, z.readAsArrayBuffer(K);
            }
        };
        return S.jsx(ve, {
            title: "Upload Game",
            children: S.jsxs("div", {
                className: "border-2 border-dashed border-purple-500 rounded-lg p-8 text-center text-purple-400 flex-shrink-0",
                children: [
                    S.jsxs("button", {
                        onClick: o,
                        className: `
            bg-gradient-to-b from-[#6366f1] to-[#4f46e5]
            hover:from-[#4f46e5] hover:to-[#6366f1]
            text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-200
          `,
                        children: [
                            "Browse Files",
                            S.jsx("input", {
                                type: "file",
                                accept: ".ch8,.chip8",
                                ref: M,
                                onChange: O,
                                className: "hidden"
                            })
                        ]
                    }),
                    S.jsx("p", {
                        className: "text-xs font-mono text-gray-400 mt-4",
                        children: "Supports: .ch8, .chip8"
                    })
                ]
            })
        });
    }, Ih = ({ isGameLoaded: y, isRunning: b, onPlayPause: M, onReset: o })=>S.jsx(ve, {
            title: "Controls",
            children: S.jsxs("div", {
                className: "flex flex-wrap items-center gap-4 justify-center",
                children: [
                    S.jsxs("button", {
                        className: `
                        text-white font-bold py-2 px-4 rounded-md shadow-md flex items-center
                        ${b ? "bg-yellow-700 hover:bg-yellow-600 focus:ring-yellow-500" : "bg-green-700 hover:bg-green-600 focus:ring-green-500"}
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none // Styles for disabled state
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 // Focus styles for accessibility
                    `,
                        "aria-label": "Play Emulator",
                        onClick: M,
                        disabled: !y && !b,
                        children: [
                            S.jsx("span", {
                                className: "mr-1 text-base",
                                children: b ? "⏸" : "▶"
                            }),
                            " ",
                            b ? "PAUSE" : "PLAY"
                        ]
                    }),
                    S.jsxs("button", {
                        className: `
                        bg-red-700 hover:bg-red-600 focus:ring-red-500 // Use a slightly different hover
                        text-white font-bold py-2 px-4 rounded-md flex items-center
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none // Styles for disabled state
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 // Focus styles for accessibility
                    `,
                        "aria-label": "Reset Emulator",
                        onClick: o,
                        disabled: !y,
                        children: [
                            S.jsx("span", {
                                className: "mr-1 text-base",
                                children: "↻"
                            }),
                            " RESET"
                        ]
                    })
                ]
            })
        }), rf = [
        {
            chip8: "1",
            qwerty: "1"
        },
        {
            chip8: "2",
            qwerty: "2"
        },
        {
            chip8: "3",
            qwerty: "3"
        },
        {
            chip8: "C",
            qwerty: "4"
        },
        {
            chip8: "4",
            qwerty: "Q"
        },
        {
            chip8: "5",
            qwerty: "W"
        },
        {
            chip8: "6",
            qwerty: "E"
        },
        {
            chip8: "D",
            qwerty: "R"
        },
        {
            chip8: "7",
            qwerty: "A"
        },
        {
            chip8: "8",
            qwerty: "S"
        },
        {
            chip8: "9",
            qwerty: "D"
        },
        {
            chip8: "E",
            qwerty: "F"
        },
        {
            chip8: "A",
            qwerty: "Z"
        },
        {
            chip8: "0",
            qwerty: "X"
        },
        {
            chip8: "B",
            qwerty: "C"
        },
        {
            chip8: "F",
            qwerty: "V"
        }
    ], Ph = ({ className: y })=>S.jsxs("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: `w-4 h-4 ${y || ""}`,
            children: [
                S.jsx("g", {
                    id: "SVGRepo_bgCarrier",
                    strokeWidth: "0"
                }),
                S.jsx("g", {
                    id: "SVGRepo_tracerCarrier",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                S.jsx("g", {
                    id: "SVGRepo_iconCarrier",
                    children: S.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M17.5303 10.0303C17.8232 9.73744 17.8232 9.26256 17.5303 8.96967L12.5303 3.96967C12.2374 3.67678 11.7626 3.67678 11.4697 3.96967L6.46967 8.96967C6.17678 9.26256 6.17678 9.73744 6.46967 10.0303C6.76256 10.3232 7.23744 10.3232 7.53033 10.0303L11.25 6.31066L11.25 14.5C11.25 15.2133 11.0298 16.3 10.3913 17.1868C9.7804 18.0353 8.75556 18.75 7 18.75C6.58579 18.75 6.25 19.0858 6.25 19.5C6.25 19.9142 6.58579 20.25 7 20.25C9.24444 20.25 10.7196 19.298 11.6087 18.0632C12.4702 16.8667 12.75 15.4534 12.75 14.5L12.75 6.31066L16.4697 10.0303C16.7626 10.3232 17.2374 10.3232 17.5303 10.0303Z",
                        fill: "currentColor"
                    })
                })
            ]
        }), lv = ({ className: y })=>S.jsx(ve, {
            title: "Keyboard Mapping",
            className: y,
            children: S.jsxs("div", {
                className: "flex flex-col items-center gap-y-1",
                children: [
                    S.jsxs("div", {
                        className: "flex flex-row justify-center gap-x-1 w-full",
                        children: [
                            S.jsx("h3", {
                                className: "sr-only lg:not-sr-only",
                                children: "Chip8"
                            }),
                            rf.map((b)=>S.jsx("div", {
                                    className: "w-6 h-5 lg:w-8 lg:h-6 bg-gray-700 border border-gray-600 rounded-md flex items-center justify-center flex-shrink-0",
                                    children: S.jsx("span", {
                                        className: "font-mono text-gray-50 text-sm",
                                        children: b.chip8
                                    })
                                }, `chip8-${b.chip8}`))
                        ]
                    }),
                    S.jsxs("div", {
                        className: "flex flex-row justify-center gap-x-1 w-full",
                        children: [
                            S.jsx("span", {
                                className: "sr-only lg:not-sr-only text-purple-400",
                                children: "-----"
                            }),
                            rf.map((b)=>S.jsx("div", {
                                    className: "flex flex-col items-center w-6 lg:w-8 flex-shrink-0",
                                    children: S.jsx(Ph, {
                                        className: "text-purple-400"
                                    })
                                }, `pointer-${b.chip8}`))
                        ]
                    }),
                    S.jsxs("div", {
                        className: "flex flex-row justify-center gap-x-1 w-full",
                        children: [
                            S.jsx("h3", {
                                className: "sr-only lg:not-sr-only",
                                children: "Qwerty"
                            }),
                            rf.map((b)=>S.jsx("div", {
                                    className: "w-6 h-5 lg:w-8 lg:h-6 bg-gray-700 border border-gray-600 rounded-md flex items-center justify-center flex-shrink-0",
                                    children: S.jsx("span", {
                                        className: "font-mono text-gray-50 text-sm",
                                        children: b.qwerty
                                    })
                                }, `qwerty-${b.qwerty}`))
                        ]
                    })
                ]
            })
        }), tv = ({ availableGameInfo: y, className: b })=>y ? S.jsx(ve, {
            title: "Game Information",
            children: S.jsxs("div", {
                className: `flex flex-row justify-around ${b || ""}`,
                children: [
                    S.jsxs("div", {
                        children: [
                            S.jsx("p", {
                                className: "text-sm text-gray-400 mb-1",
                                children: "Now Playing:"
                            }),
                            S.jsx("h3", {
                                className: "text-2xl font-bold text-purple-400 mb-2",
                                children: y.title
                            })
                        ]
                    }),
                    S.jsxs("div", {
                        className: "space-y-1 mb-4",
                        children: [
                            S.jsxs("p", {
                                className: "text-sm text-gray-300",
                                children: [
                                    S.jsx("span", {
                                        className: "font-semibold text-gray-400",
                                        children: "Size:"
                                    }),
                                    " ",
                                    y.size,
                                    "KB"
                                ]
                            }),
                            S.jsxs("p", {
                                className: "text-sm text-gray-300",
                                children: [
                                    S.jsx("span", {
                                        className: "font-semibold text-gray-400",
                                        children: "Year:"
                                    }),
                                    " ",
                                    y.year == 0 ? "____" : y.year
                                ]
                            })
                        ]
                    })
                ]
            })
        }) : S.jsx(ve, {
            title: "Game Information",
            children: S.jsx("div", {
                className: `flex items-center justify-center ${b || ""}`,
                children: S.jsx("div", {
                    children: S.jsx("p", {
                        className: "text-sm text-gray-400 mb-1",
                        children: "Select game from game library or upload game and press PLAY."
                    })
                })
            })
        }), of = 10, ev = 60, av = ({ processorRef: y, animationFrameIdRef: b, setSelectedGameInfo: M })=>{
        const [o, O] = el.useState(!1), [D, q] = el.useState(!1), [K, z] = el.useState("stopped"), [E, N] = el.useState(0), [V, Z] = el.useState(0), al = el.useRef(0), cl = el.useRef([]), dl = el.useCallback((yl)=>{
            if (y.current === null) return;
            const Bl = yl - al.current;
            if (al.current = yl, Bl > 0) {
                cl.current.push(Bl), cl.current.length > ev && cl.current.shift();
                const Zl = 1e3 / (cl.current.reduce((Ll, Vl)=>Ll + Vl, 0) / cl.current.length);
                Z(Math.round(Zl));
            }
            for(let k = 0; k < of; k++)y.current.cycle();
            y.current.tick_timers(), N((k)=>k + 1), D && (b.current = requestAnimationFrame(dl));
        }, [
            D,
            b,
            y
        ]);
        el.useEffect(()=>(D ? (z("running"), al.current = performance.now(), b.current = requestAnimationFrame(dl)) : (b.current !== null && (cancelAnimationFrame(b.current), b.current = null), z(o ? "paused" : "stopped")), ()=>{
                b.current !== null && cancelAnimationFrame(b.current);
            }), [
            D,
            dl,
            b
        ]);
        const Tl = el.useCallback((yl)=>{
            y.current && (y.current.load(yl), O(!0), q(!1), z("paused"), N((Bl)=>Bl + 1), console.log("Game loaded."));
        }, [
            y
        ]), mt = el.useCallback(()=>{
            o && q((yl)=>(yl || (al.current = performance.now()), !yl));
        }, [
            o
        ]), gt = el.useCallback(()=>{
            y.current && (q(!1), y.current.reset(), z("stopped"), O(!1), M(null), N((yl)=>yl + 1));
        }, [
            y
        ]);
        return {
            isGameLoaded: o,
            isRunning: D,
            emulatorStatus: K,
            screenUpdateTrigger: E,
            fps: V,
            handleLoadGame: Tl,
            handlePlayPause: mt,
            handleReset: gt
        };
    }, uv = ({ className: y, opCodes: b })=>S.jsx(ve, {
            title: "CPU Instructions",
            className: `flex flex-col ${y || ""}`,
            children: S.jsxs("section", {
                className: "flex flex-col px-0 py-1 gap-4 lg:max-h-[290px] overflow-hidden",
                children: [
                    S.jsx("div", {
                        className: "flex flex-col mb-1 flex-shrink-0",
                        children: S.jsx("span", {
                            className: "text-base font-semibold text-gray-400",
                            children: "Last 10 executions"
                        })
                    }),
                    S.jsx(_0, {
                        className: "space-y-2 overflow-y-auto",
                        items: b,
                        getItemKey: (M)=>M.id,
                        listItemClassName: "p-0",
                        renderItem: (M)=>S.jsx("div", {
                                className: "bg-gray-700 bg-opacity-50 py-1 rounded-md text-gray-50 font-mono text-xs w-full text-center",
                                children: M.opcode
                            })
                    })
                ]
            })
        }), Gn = ()=>S.jsx("hr", {
            className: "border-gray-700 w-full my-4"
        }), nv = (y)=>{
        switch(y){
            case "info":
            case "running":
                return "text-green-500";
            case "warn":
            case "paused":
                return "text-amber-500";
            case "erro":
            case "stopped":
                return "text-red-500";
            default:
                return "text-gray-400";
        }
    }, cv = ({ className: y, processorRef: b, screenUpdateTrigger: M, fps: o, emulatorStatus: O, memoryRef: D })=>{
        const [q, K] = el.useState({
            I: "_",
            PC: "_",
            SP: "_"
        }), [z, E] = el.useState([]);
        return el.useEffect(()=>{
            const N = b.current, V = D.current;
            if (!N || !V) return;
            K({
                I: `0x${N.i_register().toString(16).toUpperCase().padStart(3, "0")}`,
                PC: `0x${N.program_counter().toString(16).toUpperCase().padStart(3, "0")}`,
                SP: N.stack_pointer().toString()
            });
            const Z = N.opcodeBufferPtr(), al = new Uint16Array(V.buffer, Z, of), cl = [];
            for(let dl = 0; dl < of; dl++){
                const Tl = al[dl];
                cl.push({
                    id: Date.now() + dl,
                    opcode: `0x${Tl.toString(16).toUpperCase().padStart(4, "0")}`
                });
            }
            E(cl);
        }, [
            M,
            b,
            D
        ]), S.jsxs(ve, {
            title: "CPU Status",
            className: `flex flex-col h-full ${y || ""}`,
            children: [
                S.jsx("h3", {
                    className: `text-2xl font-bold ${nv(O)} mx-2`,
                    children: O.toUpperCase()
                }),
                S.jsx("section", {
                    className: "mb-2 flex-shrink-0",
                    children: S.jsxs("div", {
                        className: "flex flex-row gap-2 justify-around mt-1 text-sm font-mono text-gray-50",
                        children: [
                            S.jsxs("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    S.jsx("span", {
                                        className: "text-gray-400",
                                        children: "FPS:"
                                    }),
                                    S.jsx("span", {
                                        className: "font-mono text-gray-50",
                                        children: o
                                    })
                                ]
                            }),
                            S.jsxs("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    S.jsx("span", {
                                        className: "text-gray-400 text-xs",
                                        children: "I:"
                                    }),
                                    S.jsx("span", {
                                        className: "text-gray-50",
                                        children: q.I
                                    })
                                ]
                            }),
                            S.jsxs("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    S.jsx("span", {
                                        className: "text-gray-400 text-xs",
                                        children: "PC:"
                                    }),
                                    S.jsx("span", {
                                        className: "text-gray-50",
                                        children: q.PC
                                    })
                                ]
                            }),
                            S.jsxs("div", {
                                className: "flex flex-col items-start",
                                children: [
                                    S.jsx("span", {
                                        className: "text-gray-400 text-xs",
                                        children: "SP:"
                                    }),
                                    S.jsx("span", {
                                        className: "text-gray-50",
                                        children: q.SP
                                    })
                                ]
                            }),
                            S.jsx("div", {
                                className: "hidden sm:block"
                            })
                        ]
                    })
                }),
                S.jsx(Gn, {}),
                S.jsx(uv, {
                    opCodes: z
                })
            ]
        });
    }, iv = ()=>{
        const y = el.useRef(null), b = el.useRef(null), M = el.useRef(null);
        return el.useEffect(()=>((async ()=>{
                try {
                    const O = new Eh;
                    y.current = O, b.current = T0;
                } catch (O) {
                    console.error("Failed to initialize Chip8 processor: ", O);
                }
            })(), ()=>{
                M.current !== null && cancelAnimationFrame(M.current);
            }), []), {
            processorRef: y,
            memoryRef: b,
            animationFrameIdRef: M
        };
    }, S0 = {
        1: 1,
        2: 2,
        3: 3,
        4: 12,
        q: 4,
        w: 5,
        e: 6,
        r: 13,
        a: 7,
        s: 8,
        d: 9,
        f: 14,
        z: 10,
        x: 0,
        c: 11,
        v: 15
    }, fv = ({ processorRef: y, isRunning: b })=>{
        el.useEffect(()=>{
            const M = (O)=>{
                if (!y.current || !b) return;
                const D = S0[O.key.toLowerCase()];
                D !== void 0 && y.current.key_press(D);
            }, o = (O)=>{
                if (!y.current || !b) return;
                const D = S0[O.key.toLowerCase()];
                D !== void 0 && y.current.key_release(D);
            };
            return document.addEventListener("keydown", M), document.addEventListener("keyup", o), ()=>{
                document.removeEventListener("keydown", M), document.removeEventListener("keyup", o);
            };
        }, [
            y,
            b
        ]);
    }, sv = [
        {
            id: "space_invaders",
            title: "Space Invaders",
            filename: "space_invaders.ch8",
            size: 1.3,
            author: "David Winter",
            year: 1978,
            description: [
                {
                    key: "info",
                    action: "Destroy obstacle by shooting or escape by moving"
                },
                {
                    key: "5",
                    action: "Shoot"
                },
                {
                    key: "4",
                    action: "Move Left"
                },
                {
                    key: "6",
                    action: "Move Right"
                }
            ]
        },
        {
            id: "pong",
            title: "Pong",
            filename: "pong.ch8",
            size: .246,
            author: "Unknown",
            year: 1972,
            description: [
                {
                    key: "info",
                    action: "Single player pong game"
                },
                {
                    key: "1",
                    action: "Move Up"
                },
                {
                    key: "Q",
                    action: "Move Down"
                }
            ]
        },
        {
            id: "tetris",
            title: "Tetris",
            filename: "tetris.ch8",
            size: .494,
            author: "Fran Dachille",
            year: 1984,
            description: [
                {
                    key: "4",
                    action: "Left Rotate"
                },
                {
                    key: "5",
                    action: "Left Move"
                },
                {
                    key: "6",
                    action: "Right Move"
                },
                {
                    key: "1",
                    action: "Drop"
                },
                {
                    key: "info",
                    action: "Increases slightly every 5 lines, peaks at 45 lines"
                }
            ]
        },
        {
            id: "astro_dodge",
            title: "Astro Dodge",
            filename: "astro_dodge.ch8",
            size: 1.1,
            author: "Revival Studios",
            year: 2008,
            description: [
                {
                    key: "info",
                    action: "Make your way through asteroids field and dodge asteroids and score points"
                },
                {
                    key: "W",
                    action: "Start"
                },
                {
                    key: "2",
                    action: "Move Up"
                },
                {
                    key: "Q",
                    action: "Move Left"
                },
                {
                    key: "E",
                    action: "Move Right"
                },
                {
                    key: "S",
                    action: "Move Down"
                }
            ]
        },
        {
            id: "hidden",
            title: "Hidden",
            filename: "hidden.ch8",
            size: .85,
            author: "David Winter",
            year: 1996,
            description: [
                {
                    key: "info",
                    action: "Find all identical cards in minimum time"
                },
                {
                    key: "2",
                    action: "Move Down"
                },
                {
                    key: "4",
                    action: "Move Left"
                },
                {
                    key: "5",
                    action: "Show card"
                },
                {
                    key: "6",
                    action: "Move right"
                },
                {
                    key: "8",
                    action: "Move up"
                }
            ]
        },
        {
            id: "breakout",
            title: "Breakout",
            filename: "breakout.ch8",
            size: .28,
            author: "David Winter",
            year: 1997,
            description: [
                {
                    key: "info",
                    action: "Break all the brixs with 5 lives"
                },
                {
                    key: "Q",
                    action: "Move Left"
                },
                {
                    key: "E",
                    action: "Move Right"
                }
            ]
        }
    ], rv = ()=>{
        const { processorRef: y, memoryRef: b, animationFrameIdRef: M } = iv(), [o, O] = el.useState(null), { isGameLoaded: D, isRunning: q, emulatorStatus: K, screenUpdateTrigger: z, fps: E, handleLoadGame: N, handlePlayPause: V, handleReset: Z } = av({
            processorRef: y,
            animationFrameIdRef: M,
            setSelectedGameInfo: O
        });
        fv({
            processorRef: y,
            isRunning: q
        });
        const al = async (cl)=>{
            try {
                const dl = await fetch(`/roms/${cl.filename}`);
                if (!dl.ok) throw new Error(`Failed to fetch ${cl.filename}: ${dl.statusText}`);
                const Tl = await dl.arrayBuffer(), mt = new Uint8Array(Tl);
                N(mt), O(cl);
            } catch (dl) {
                console.error("Error loading game from library:", dl);
            }
        };
        return S.jsxs(sh, {
            children: [
                S.jsx(ff, {
                    className: "lg:w-[25%]",
                    children: S.jsxs("div", {
                        className: "flex flex-col justify-between",
                        children: [
                            S.jsx(oh, {
                                games: sv,
                                onGameSelect: al,
                                selectedGameId: o?.id || null
                            }),
                            S.jsx(Gn, {}),
                            S.jsx(Fh, {
                                onLoadGame: N,
                                setUploadedGameInfo: O
                            })
                        ]
                    })
                }),
                S.jsxs("div", {
                    className: "lg:flex-1 flex flex-col",
                    children: [
                        S.jsx($h, {
                            className: "h-[70%]",
                            memoryRef: b,
                            processorRef: y,
                            screenUpdateTrigger: z
                        }),
                        S.jsxs(ff, {
                            className: "flex-1",
                            children: [
                                S.jsx(Ih, {
                                    isGameLoaded: D,
                                    isRunning: q,
                                    onPlayPause: V,
                                    onReset: Z
                                }),
                                S.jsx(Gn, {}),
                                S.jsx(lv, {})
                            ]
                        })
                    ]
                }),
                S.jsxs(ff, {
                    className: "lg:w-[30%] felx flex-col max-h-full",
                    children: [
                        S.jsx(tv, {
                            className: "h-[20%]",
                            availableGameInfo: o
                        }),
                        S.jsx(Gn, {}),
                        S.jsx(cv, {
                            className: "flex-1",
                            processorRef: y,
                            memoryRef: b,
                            screenUpdateTrigger: z,
                            emulatorStatus: K,
                            fps: E
                        })
                    ]
                })
            ]
        });
    };
    function ov() {
        return S.jsx(fh, {
            children: S.jsx(rv, {})
        });
    }
    ah.createRoot(document.getElementById("root")).render(S.jsx(el.StrictMode, {
        children: S.jsx(ov, {})
    }));
})();
