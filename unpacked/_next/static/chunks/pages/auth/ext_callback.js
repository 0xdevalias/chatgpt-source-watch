(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4191],
  {
    1157: function (n, t, u) {
      "use strict";
      u.r(t),
        u.d(t, {
          default: function () {
            return o;
          },
        });
      var e = u(69096),
        r = u(41409),
        c = u(70079),
        f = u(35250);
      function o() {
        return (0, f.jsx)(s, {});
      }
      function s() {
        let n = (0, r.useRouter)(),
          { isReady: t } = n,
          { next: u } = n.query,
          f =
            "/auth/ext_callback_refresh?next=" +
            encodeURIComponent(
              "string" == typeof u && u.startsWith("/") ? u : "/"
            );
        return (
          (0, c.useEffect)(() => {
            t && (0, e.signIn)("auth0", { callbackUrl: f || "/" });
          }, [t]),
          null
        );
      }
    },
    63944: function (n, t, u) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/ext_callback",
        function () {
          return u(1157);
        },
      ]);
    },
  },
  function (n) {
    n.O(0, [4736, 2888, 9774, 179], function () {
      return n((n.s = 63944));
    }),
      (_N_E = n.O());
  },
]);
//# sourceMappingURL=ext_callback-29040f6682e64dc0.js.map
