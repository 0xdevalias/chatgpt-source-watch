(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6529],
  {
    73864: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return a;
          },
          default: function () {
            return o;
          },
        });
      var u = t(22615),
        c = t(85452),
        i = t(53362),
        r = t(47712),
        s = t(86268),
        f = t(41409),
        l = t(70079),
        _ = t(35250),
        a = !0;
      function o() {
        let e = (0, f.useRouter)(),
          n = (0, r.hz)();
        return (
          (0, l.useEffect)(() => {
            e &&
              (async () => {
                try {
                  let t = await i.Z.getCheckoutLink(n);
                  e.replace(t.url);
                } catch (n) {
                  if (
                    n instanceof s.Q0 &&
                    (null == n ? void 0 : n.message) == u.D7.ALREADY_PAID
                  ) {
                    e.push("/");
                    return;
                  }
                }
              })();
          }, [e, n]),
          (0, _.jsx)("div", {
            className: "flex h-full w-full items-center justify-center",
            children: (0, _.jsx)(c.Z, {}),
          })
        );
      }
    },
    30487: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/invite/accepted",
        function () {
          return t(73864);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [4736, 2888, 9774, 179], function () {
      return e((e.s = 30487));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=accepted-f02fc3028f80cd8c.js.map
