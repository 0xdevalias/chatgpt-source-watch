(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9603],
  {
    22591: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          __N_SSP: function () {
            return b;
          },
          default: function () {
            return p;
          },
        });
      var n = t(18450),
        c = t(51018),
        o = t.n(c),
        u = t(35250);
      function i(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function s(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? i(Object(t), !0).forEach(function (r) {
                (0, n.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : i(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r)
                  );
                });
        }
        return e;
      }
      let a = o()(
          () =>
            Promise.all([
              t.e(8682),
              t.e(6835),
              t.e(5181),
              t.e(3050),
              t.e(8055),
              t.e(5938),
              t.e(2222),
            ]).then(t.bind(t, 64676)),
          { ssr: !1, loadableGenerated: { webpack: () => [64676] } }
        ),
        f = o()(() => t.e(8682).then(t.bind(t, 19455)), {
          ssr: !1,
          loadableGenerated: { webpack: () => [19455] },
        });
      var b = !0;
      function p(e) {
        return e.forceLandingPage
          ? (0, u.jsx)(f, s({}, e))
          : (0, u.jsx)(a, s({}, e));
      }
    },
    57647: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/search",
        function () {
          return t(22591);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [4736, 2888, 9774, 179], function () {
      return e((e.s = 57647));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=search-dc10d7a6939d92b5.js.map
