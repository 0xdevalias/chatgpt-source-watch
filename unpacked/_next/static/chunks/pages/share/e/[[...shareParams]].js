(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6737],
  {
    49503: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return P;
          },
          default: function () {
            return x;
          },
        });
      var n = r(36112),
        i = r(50134),
        o = r(4399),
        a = r.n(o),
        u = r(55842),
        c = r(40670),
        s = r(63866),
        f = r(85958),
        l = r(95412),
        d = r(22004),
        p = r(73929),
        h = r(61236),
        y = r(82473);
      r(88654);
      var v = r(44675);
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var g = "".concat(v.env.INTERNAL_API_URL, "/api");
      function m() {
        return (m = (0, i.Z)(
          a().mark(function e(t) {
            var r, n, i, o, u, c, s;
            return a().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (r = t.ids),
                      (n = []),
                      (i = (function (e, t) {
                        var r =
                          ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                        if (!r) {
                          if (
                            Array.isArray(e) ||
                            (r = (function (e, t) {
                              if (e) {
                                if ("string" == typeof e) return b(e, t);
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
                                  return b(e, t);
                              }
                            })(e))
                          ) {
                            r && (e = r);
                            var n = 0,
                              i = function () {};
                            return {
                              s: i,
                              n: function () {
                                return n >= e.length
                                  ? { done: !0 }
                                  : { done: !1, value: e[n++] };
                              },
                              e: function (e) {
                                throw e;
                              },
                              f: i,
                            };
                          }
                          throw TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        }
                        var o,
                          a = !0,
                          u = !1;
                        return {
                          s: function () {
                            r = r.call(e);
                          },
                          n: function () {
                            var e = r.next();
                            return (a = e.done), e;
                          },
                          e: function (e) {
                            (u = !0), (o = e);
                          },
                          f: function () {
                            try {
                              a || null == r.return || r.return();
                            } finally {
                              if (u) throw o;
                            }
                          },
                        };
                      })(r));
                    try {
                      for (i.s(); !(o = i.n()).done; )
                        (u = o.value), n.push(["ids", u]);
                    } catch (e) {
                      i.e(e);
                    } finally {
                      i.f();
                    }
                    return (
                      (c = new URLSearchParams(n)),
                      (e.next = 7),
                      fetch("".concat(g, "/public/plugins/by-id?").concat(c), {
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
      var O = r(70079),
        _ = r(35250);
      function w(e, t) {
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
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : w(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      var P = !0;
      function x(e) {
        var t = e.sharedConversationId,
          r = (0, h.a)({
            queryKey: ["shared-conversation/".concat(t)],
            queryFn: function () {
              return l.Z.getAuthedSharedConversation(t);
            },
          }),
          n = r.data,
          o = r.isError,
          v = (0, O.useState)(function () {
            return (0, d.OX)();
          })[0],
          b = (0, O.useState)(!1),
          g = b[0],
          w = b[1],
          P = (0, y.NL)();
        return (
          (0, O.useEffect)(
            function () {
              o && (window.location.href = (0, f.M5)(f.LT.SHARE_NOT_FOUND));
            },
            [o]
          ),
          (0, O.useEffect)(
            function () {
              function e() {
                return (e = (0, i.Z)(
                  a().mark(function e() {
                    var r, i, o;
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!(n && v)) {
                              e.next = 9;
                              break;
                            }
                            if (
                              !(
                                (i =
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
                                return m.apply(this, arguments);
                              })({ ids: i })
                            );
                          case 5:
                            (o = e.sent),
                              P.setQueryData(
                                o.items.map(function (e) {
                                  return e.id;
                                }),
                                o
                              );
                          case 7:
                            d.tQ.initThreadFromServerData(v, n, !0, t), w(!0);
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
            [n, t, v, P]
          ),
          g
            ? e.continueMode
              ? (0, _.jsx)(
                  u.ZP,
                  j(j({}, e.chatPageProps), {}, { clientThreadId: v })
                )
              : (0, _.jsx)(p.gB.Provider, {
                  value: { serverSharedThreadId: t },
                  children: (0, _.jsx)(c.Z, {
                    clientThreadId: v,
                    setClientThreadId: function () {},
                    initiallyHighlightedMessageId:
                      null == n ? void 0 : n.highlighted_message_id,
                    continueConversationUrl:
                      null == n ? void 0 : n.continue_conversation_url,
                  }),
                })
            : (0, _.jsx)("div", {
                className: "flex h-full items-center justify-center",
                children: (0, _.jsx)(s.Z, {
                  className: "text-token-text-tertiary",
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
//# sourceMappingURL=[[...shareParams]]-15cfe86e19a4388f.js.map
