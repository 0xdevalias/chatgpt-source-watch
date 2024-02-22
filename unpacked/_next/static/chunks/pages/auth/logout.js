(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7825],
  {
    99959: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return O;
          },
          default: function () {
            return b;
          },
        });
      var n = r(50134),
        c = r(36112),
        o = r(4399),
        u = r.n(o),
        i = r(40318),
        s = r(70079),
        a = r(98083),
        f = r(29887),
        l = r(35250);
      function p(e, t) {
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
      var O = !0;
      function b(e) {
        return (0, l.jsx)(
          w,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? p(Object(r), !0).forEach(function (t) {
                    (0, c.Z)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : p(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      );
                    });
            }
            return e;
          })({}, e)
        );
      }
      function w(e) {
        var t,
          r,
          c = e.federatedLogoutUri,
          o =
            ((t = (0, n.Z)(
              u().mark(function e() {
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), a.A.reset();
                        case 3:
                          e.next = 8;
                          break;
                        case 5:
                          (e.prev = 5),
                            (e.t0 = e.catch(0)),
                            console.error(
                              "Failed to reset ProductEventLogger on logout",
                              e.t0
                            );
                        case 8:
                          return (
                            (e.prev = 8),
                            (e.next = 11),
                            (0, f.signOut)({
                              callbackUrl:
                                null != c ? c : window.location.origin,
                            })
                          );
                        case 11:
                          e.next = 16;
                          break;
                        case 13:
                          (e.prev = 13),
                            (e.t1 = e.catch(8)),
                            console.error("Next auth signout failed", e.t1);
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [0, 5],
                    [8, 13],
                  ]
                );
              })
            )),
            (r = (0, s.useRef)(!1)),
            function () {
              r.current || (t(), (r.current = !0));
            });
        return (
          (0, s.useEffect)(o, [o]),
          (0, s.useEffect)(function () {
            (0, i.I)();
          }, []),
          null
        );
      }
    },
    3499: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/logout",
        function () {
          return r(99959);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 3499));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=logout-296a1f68f894060a.js.map
