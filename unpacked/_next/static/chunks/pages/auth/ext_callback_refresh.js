(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1905],
  {
    61150: function (n, t, u) {
      "use strict";
      u.r(t),
        u.d(t, {
          __N_SSP: function () {
            return f;
          },
          default: function () {
            return c;
          },
        });
      var e = u(41409),
        r = u(70079),
        _ = u(35250),
        f = !0;
      function c() {
        return (0, _.jsx)(s, {});
      }
      function s() {
        let n = (0, e.useRouter)(),
          { next: t } = n.query,
          u = "string" == typeof t && t.startsWith("/") ? t : "/";
        return (
          (0, r.useEffect)(() => {
            n.push(u);
          }, [u, n]),
          null
        );
      }
    },
    10276: function (n, t, u) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/ext_callback_refresh",
        function () {
          return u(61150);
        },
      ]);
    },
  },
  function (n) {
    n.O(0, [4736, 2888, 9774, 179], function () {
      return n((n.s = 10276));
    }),
      (_N_E = n.O());
  },
]);
//# sourceMappingURL=ext_callback_refresh-26d06457a2476987.js.map
