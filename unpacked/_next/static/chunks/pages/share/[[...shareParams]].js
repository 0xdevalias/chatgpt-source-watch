(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [165],
  {
    34537: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/share/[[...shareParams]]",
        function () {
          return r(74387);
        },
      ]);
    },
    74387: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return w;
          },
          config: function () {
            return C;
          },
          default: function () {
            return O;
          },
        });
      var n = r(39324),
        a = r(71209),
        i = r(22830),
        o = r(35250),
        u = r(35448),
        l = r(16578),
        s = r.n(l),
        d = r(70079),
        c = r(1454),
        f = r(3001),
        _ = r(35290),
        h = r(21172),
        v = r(38317),
        p = r(37541),
        m = r(32983),
        y = r(82841),
        g = r(36218),
        b = r(75527),
        x = r(71047),
        j = r(9356);
      function P(e) {
        var t = e.sharedConversationId,
          r = e.userCountry,
          n = e.initiallyHighlightedMessageId,
          a = e.continueConversationUrl,
          i = (0, d.useMemo)(function () {
            return { app: g.VY, origin: "chat" };
          }, []),
          u = (0, b.GR)(t);
        return (0, o.jsx)(y.Af.Provider, {
          value: i,
          children: (0, o.jsx)(m.gB.Provider, {
            value: !0,
            children: (0, o.jsxs)(m.XA.Provider, {
              value: u,
              children: [
                (0, o.jsx)(x.Z, { userCountry: r }),
                (0, o.jsx)(j.Z, {
                  clientThreadId: t,
                  setClientThreadId: function () {},
                  initiallyHighlightedMessageId: n,
                  continueConversationUrl: a,
                  isStaticSharedThread: !0,
                }),
              ],
            }),
          }),
        });
      }
      var w = !0,
        C = { runtime: "nodejs" },
        k = (0, f.vU)({
          home: {
            id: "sharedConversation.home",
            defaultMessage: "Home",
            description: "Home link text in error message",
          },
        });
      function O(e) {
        if ("error" === e.serverResponse.type)
          return (0, o.jsx)(M, { error: e.serverResponse.error });
        var t = (0, a._)((0, n._)({}, e), {
          conversationData: e.serverResponse.data,
        });
        return e.continueMode
          ? (0, o.jsx)(D, (0, n._)({}, t))
          : e.moderationMode
          ? (0, o.jsx)(p.Z, { children: (0, o.jsx)(T, (0, n._)({}, t)) })
          : (0, o.jsx)(T, (0, n._)({}, t));
      }
      function D(e) {
        var t = (0, i._)(
          (0, d.useState)(function () {
            return (0, b.OX)();
          }),
          1
        )[0];
        b.tQ.initThreadFromServerData(
          t,
          e.conversationData,
          !0,
          e.sharedConversationId
        );
        var r = (0, u.NL)();
        return (null != e.plugins &&
          r.setQueryData(
            e.plugins.map(function (e) {
              return e.id;
            }),
            e.plugins
          ),
        null != e.chatPageProps)
          ? (0, o.jsx)(
              h.default,
              (0, a._)((0, n._)({}, e.chatPageProps), { clientThreadId: t })
            )
          : null;
      }
      function T(e) {
        b.tQ.initThreadFromServerData(
          e.sharedConversationId,
          e.conversationData,
          !0
        );
        var t = (0, u.NL)();
        return (
          null != e.plugins &&
            t.setQueryData(
              e.plugins.map(function (e) {
                return e.id;
              }),
              e.plugins
            ),
          (0, o.jsx)(
            P,
            (0, a._)((0, n._)({}, e), {
              initiallyHighlightedMessageId:
                e.conversationData.highlighted_message_id,
              continueConversationUrl:
                e.conversationData.continue_conversation_url,
            })
          )
        );
      }
      function M(e) {
        var t = e.error;
        return (0, o.jsx)("div", {
          className: "mx-8 mt-8 flex flex-col items-center sm:mt-16",
          children: (0, o.jsxs)("div", {
            className: "max-w-xl rounded-lg bg-red-500 px-8 py-4 text-white",
            role: "alert",
            children: [
              (0, o.jsx)("div", { children: t }),
              (0, o.jsx)("div", {
                className: "mt-4",
                children: (0, o.jsxs)(s(), {
                  href: "/",
                  className: "flex items-center gap-2",
                  children: [
                    (0, o.jsx)(v.ZP, { icon: c.m6D }),
                    (0, o.jsx)(_.Z, (0, n._)({}, k.home)),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    21654: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(39324),
        a = r(71209);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          noSSR: function () {
            return l;
          },
          default: function () {
            return s;
          },
        });
      var i = r(64838),
        o = (r(70079), i._(r(1905)));
      function u(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function l(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      function s(e, t) {
        var r = o.default,
          i = {
            loading: function (e) {
              return e.error, e.isLoading, e.pastDelay, null;
            },
          };
        e instanceof Promise
          ? (i.loader = function () {
              return e;
            })
          : "function" == typeof e
          ? (i.loader = e)
          : "object" == typeof e && (i = n._({}, i, e));
        var s = (i = n._({}, i, t)).loader;
        return (i.loadableGenerated &&
          ((i = n._({}, i, i.loadableGenerated)), delete i.loadableGenerated),
        "boolean" != typeof i.ssr || i.ssr)
          ? r(
              a._(n._({}, i), {
                loader: function () {
                  return null != s
                    ? s().then(u)
                    : Promise.resolve(
                        u(function () {
                          return null;
                        })
                      );
                },
              })
            )
          : (delete i.webpack, delete i.modules, l(r, i));
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    48326: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "LoadableContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      var n = r(64838)._(r(70079)).default.createContext(null);
    },
    1905: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(51217),
        a = r(31819),
        i = r(39324),
        o = r(71209);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return p;
          },
        });
      var u = r(64838)._(r(70079)),
        l = r(48326),
        s = [],
        d = [],
        c = !1;
      function f(e) {
        var t = e(),
          r = { loading: !0, loaded: null, error: null };
        return (
          (r.promise = t
            .then(function (e) {
              return (r.loading = !1), (r.loaded = e), e;
            })
            .catch(function (e) {
              throw ((r.loading = !1), (r.error = e), e);
            })),
          r
        );
      }
      var _ = (function () {
        function e(t, r) {
          n._(this, e),
            (this._loadFn = t),
            (this._opts = r),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        return (
          a._(e, [
            {
              key: "promise",
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: "retry",
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  r = this._opts;
                t.loading &&
                  ("number" == typeof r.delay &&
                    (0 === r.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 });
                        }, r.delay))),
                  "number" == typeof r.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 });
                    }, r.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update({}), e._clearTimeouts();
                    })
                    .catch(function (t) {
                      e._update({}), e._clearTimeouts();
                    }),
                  this._update({});
              },
            },
            {
              key: "_update",
              value: function (e) {
                (this._state = i._(
                  o._(i._({}, this._state), {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  }),
                  e
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: "_clearTimeouts",
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: "getCurrentValue",
              value: function () {
                return this._state;
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]),
          e
        );
      })();
      function h(e) {
        return (function (e, t) {
          var r = function () {
              if (!o) {
                var t = new _(e, i);
                o = {
                  getCurrentValue: t.getCurrentValue.bind(t),
                  subscribe: t.subscribe.bind(t),
                  retry: t.retry.bind(t),
                  promise: t.promise.bind(t),
                };
              }
              return o.promise();
            },
            n = function () {
              r();
              var e = u.default.useContext(l.LoadableContext);
              e &&
                Array.isArray(i.modules) &&
                i.modules.forEach(function (t) {
                  e(t);
                });
            },
            a = function (e, t) {
              n();
              var r = u.default.useSyncExternalStore(
                o.subscribe,
                o.getCurrentValue,
                o.getCurrentValue
              );
              return (
                u.default.useImperativeHandle(
                  t,
                  function () {
                    return { retry: o.retry };
                  },
                  []
                ),
                u.default.useMemo(
                  function () {
                    var t;
                    return r.loading || r.error
                      ? u.default.createElement(i.loading, {
                          isLoading: r.loading,
                          pastDelay: r.pastDelay,
                          timedOut: r.timedOut,
                          error: r.error,
                          retry: o.retry,
                        })
                      : r.loaded
                      ? u.default.createElement(
                          (t = r.loaded) && t.default ? t.default : t,
                          e
                        )
                      : null;
                  },
                  [e, r]
                )
              );
            },
            i = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              t
            ),
            o = null;
          if (!c) {
            var s = i.webpack ? i.webpack() : i.modules;
            s &&
              d.push(function (e) {
                var t = !0,
                  n = !1,
                  a = void 0;
                try {
                  for (
                    var i, o = s[Symbol.iterator]();
                    !(t = (i = o.next()).done);
                    t = !0
                  ) {
                    var u = i.value;
                    if (-1 !== e.indexOf(u)) return r();
                  }
                } catch (e) {
                  (n = !0), (a = e);
                } finally {
                  try {
                    t || null == o.return || o.return();
                  } finally {
                    if (n) throw a;
                  }
                }
              });
          }
          return (
            (a.preload = function () {
              return r();
            }),
            (a.displayName = "LoadableComponent"),
            u.default.forwardRef(a)
          );
        })(f, e);
      }
      function v(e, t) {
        for (var r = []; e.length; ) {
          var n = e.pop();
          r.push(n(t));
        }
        return Promise.all(r).then(function () {
          if (e.length) return v(e, t);
        });
      }
      (h.preloadAll = function () {
        return new Promise(function (e, t) {
          v(s).then(e, t);
        });
      }),
        (h.preloadReady = function (e) {
          return (
            void 0 === e && (e = []),
            new Promise(function (t) {
              var r = function () {
                return (c = !0), t();
              };
              v(d, e).then(r, r);
            })
          );
        }),
        (window.__NEXT_PRELOADREADY = h.preloadReady);
      var p = h;
    },
    70060: function (e, t, r) {
      e.exports = r(21654);
    },
  },
  function (e) {
    e.O(
      0,
      [960, 246, 798, 882, 741, 786, 706, 724, 97, 734, 774, 888, 179],
      function () {
        return e((e.s = 34537));
      }
    ),
      (_N_E = e.O());
  },
]);
