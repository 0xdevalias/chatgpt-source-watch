(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6737],
  {
    49503: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return S;
          },
          default: function () {
            return E;
          },
        });
      var n = r(36112),
        a = r(50134),
        i = r(4399),
        o = r.n(i),
        c = r(74318),
        u = r(63265),
        s = r(63866),
        f = r(85958),
        l = r(32062),
        d = r(19954),
        p = r(73929),
        h = r(61236),
        y = r(82473),
        v = r(92347);
      r(88654);
      var b = r(44675);
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var m = "".concat(b.env.INTERNAL_API_URL, "/api"),
        O = v.ZF ? m : "https://chat.openai.com/backend-api";
      function _() {
        return (_ = (0, a.Z)(
          o().mark(function e(t) {
            var r, n, a, i, c, u, s;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (r = t.ids),
                      (n = []),
                      (a = (function (e, t) {
                        var r =
                          ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                        if (!r) {
                          if (
                            Array.isArray(e) ||
                            (r = (function (e, t) {
                              if (e) {
                                if ("string" == typeof e) return g(e, t);
                                var r = Object.prototype.toString
                                  .call(e)
                                  .slice(8, -1);
                                if (
                                  ("Object" === r &&
                                    e.constructor &&
                                    (r = e.constructor.name),
                                  "Map" === r || "Set" === r)
                                )
                                  return Array.from(e);
                                if (
                                  "Arguments" === r ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    r
                                  )
                                )
                                  return g(e, t);
                              }
                            })(e))
                          ) {
                            r && (e = r);
                            var n = 0,
                              a = function () {};
                            return {
                              s: a,
                              n: function () {
                                return n >= e.length
                                  ? { done: !0 }
                                  : { done: !1, value: e[n++] };
                              },
                              e: function (e) {
                                throw e;
                              },
                              f: a,
                            };
                          }
                          throw TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        }
                        var i,
                          o = !0,
                          c = !1;
                        return {
                          s: function () {
                            r = r.call(e);
                          },
                          n: function () {
                            var e = r.next();
                            return (o = e.done), e;
                          },
                          e: function (e) {
                            (c = !0), (i = e);
                          },
                          f: function () {
                            try {
                              o || null == r.return || r.return();
                            } finally {
                              if (c) throw i;
                            }
                          },
                        };
                      })(r));
                    try {
                      for (a.s(); !(i = a.n()).done; )
                        (c = i.value), n.push(["ids", c]);
                    } catch (e) {
                      a.e(e);
                    } finally {
                      a.f();
                    }
                    return (
                      (u = new URLSearchParams(n)),
                      (e.next = 7),
                      fetch("".concat(O, "/public/plugins/by-id?").concat(u), {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                      })
                    );
                  case 7:
                    if (200 !== (s = e.sent).status) {
                      e.next = 10;
                      break;
                    }
                    return e.abrupt("return", s.json());
                  case 10:
                    throw Error("Failed to get plugins by id: " + s.status);
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var w = r(70079),
        j = r(35250);
      function P(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : P(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      var S = !0;
      function E(e) {
        var t = e.sharedConversationId,
          r = (0, h.a)({
            queryKey: ["shared-conversation/".concat(t)],
            queryFn: function () {
              return l.ZP.getAuthedSharedConversation(t);
            },
          }),
          n = r.data,
          i = r.isError,
          v = (0, w.useState)(function () {
            return (0, d.OX)();
          })[0],
          b = (0, w.useState)(!1),
          g = b[0],
          m = b[1],
          O = (0, y.NL)();
        return (
          (0, w.useEffect)(
            function () {
              i && (window.location.href = (0, f.M5)(f.LT.SHARE_NOT_FOUND));
            },
            [i]
          ),
          (0, w.useEffect)(
            function () {
              function e() {
                return (e = (0, a.Z)(
                  o().mark(function e() {
                    var r, a, i;
                    return o().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!(n && v)) {
                              e.next = 9;
                              break;
                            }
                            if (
                              !(
                                (a =
                                  null !== (r = n.plugin_ids) && void 0 !== r
                                    ? r
                                    : []).length > 0
                              )
                            ) {
                              e.next = 7;
                              break;
                            }
                            return (
                              (e.next = 5),
                              (function (e) {
                                return _.apply(this, arguments);
                              })({ ids: a })
                            );
                          case 5:
                            (i = e.sent),
                              O.setQueryData(
                                i.items.map(function (e) {
                                  return e.id;
                                }),
                                i
                              );
                          case 7:
                            d.tQ.initThreadFromServerData(v, n, !0, t), m(!0);
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              !(function () {
                e.apply(this, arguments);
              })();
            },
            [n, t, v, O]
          ),
          g
            ? e.continueMode
              ? (0, j.jsx)(
                  c.ZP,
                  x(x({}, e.chatPageProps), {}, { clientThreadId: v })
                )
              : (0, j.jsx)(p.gB.Provider, {
                  value: { serverSharedThreadId: t },
                  children: (0, j.jsx)(u.Z, {
                    clientThreadId: v,
                    setClientThreadId: function () {},
                    initiallyHighlightedMessageId:
                      null == n ? void 0 : n.highlighted_message_id,
                    continueConversationUrl:
                      null == n ? void 0 : n.continue_conversation_url,
                  }),
                })
            : (0, j.jsx)("div", {
                className: "flex h-full items-center justify-center",
                children: (0, j.jsx)(s.Z, {
                  className: "text-gray-400 dark:text-gray-500",
                }),
              })
        );
      }
    },
    80027: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/share/e/[[...shareParams]]",
        function () {
          return r(49503);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 80027));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=[[...shareParams]]-080407fd516d7e1c.js.map
