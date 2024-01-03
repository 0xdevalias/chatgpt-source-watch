(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7825],
  {
    8995: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          __N_SSP: function () {
            return s;
          },
          default: function () {
            return O;
          },
        });
      var r = n(36112),
        o = n(40318),
        c = n(20225),
        u = n(70079),
        i = n(35250);
      function f(t, e) {
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
      var s = !0;
      function O(t) {
        return (0, i.jsx)(
          a,
          (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? f(Object(n), !0).forEach(function (e) {
                    (0, r.Z)(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : f(Object(n)).forEach(function (e) {
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
      function a(t) {
        var e = t.federatedLogoutUri;
        return (
          (0, u.useEffect)(
            function () {
              (0, c.signOut)({ callbackUrl: e || window.location.origin });
            },
            [e]
          ),
          (0, u.useEffect)(function () {
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
