(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7825],
  {
    8995: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          __N_SSP: function () {
            return a;
          },
          default: function () {
            return p;
          },
        });
      var r = n(36112),
        o = n(40318),
        c = n(78762),
        u = n(25349),
        i = n(29887),
        f = n(70079),
        s = n(35250);
      function O(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var a = !0;
      function p(t) {
        return (0, s.jsx)(
          l,
          (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? O(Object(n), !0).forEach(function (e) {
                    (0, r.Z)(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : O(Object(n)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(n, e)
                      );
                    });
            }
            return t;
          })({}, t)
        );
      }
      function l(t) {
        var e = t.federatedLogoutUri,
          n = (0, c.H)(function () {
            u.A.reset(function () {
              (0, i.signOut)({ callbackUrl: e || window.location.origin });
            });
          });
        return (
          (0, f.useEffect)(n, [n]),
          (0, f.useEffect)(function () {
            (0, o.I)();
          }, []),
          null
        );
      }
    },
    3499: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/logout",
        function () {
          return n(8995);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [9774, 2888, 179], function () {
      return t((t.s = 3499));
    }),
      (_N_E = t.O());
  },
]);
//# sourceMappingURL=logout-d0da5c26107ed0b9.js.map
