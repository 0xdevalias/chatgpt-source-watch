(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7825],
  {
    54490: function (t, r, e) {
      "use strict";
      e.r(r),
        e.d(r, {
          __N_SSP: function () {
            return l;
          },
          default: function () {
            return O;
          },
        });
      var n = e(18450),
        o = e(50171),
        c = e(66315),
        u = e(69096),
        i = e(70079),
        f = e(35250);
      function s(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      let a = async (t) => {
        await (0, u.signOut)({ callbackUrl: t }), (0, o.I)();
      };
      var l = !0;
      function O(t) {
        return (0, f.jsx)(
          p,
          (function (t) {
            for (var r = 1; r < arguments.length; r++) {
              var e = null != arguments[r] ? arguments[r] : {};
              r % 2
                ? s(Object(e), !0).forEach(function (r) {
                    (0, n.Z)(t, r, e[r]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(e)
                    )
                  : s(Object(e)).forEach(function (r) {
                      Object.defineProperty(
                        t,
                        r,
                        Object.getOwnPropertyDescriptor(e, r)
                      );
                    });
            }
            return t;
          })({}, t)
        );
      }
      function p(t) {
        let { federatedLogoutUri: r } = t;
        return (
          (0, i.useEffect)(() => {
            a(null != r ? r : window.location.origin).catch((t) =>
              c.U.addError(Error("Failed to logout", { cause: t }))
            );
          }, [r]),
          null
        );
      }
    },
    41722: function (t, r, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/logout",
        function () {
          return e(54490);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [4736, 2888, 9774, 179], function () {
      return t((t.s = 41722));
    }),
      (_N_E = t.O());
  },
]);
//# sourceMappingURL=logout-928f02b99db16f87.js.map
