(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6529],
  {
    10166: function (e, n, t) {
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
      var u = t(83356),
        c = t(42005),
        i = t(13038),
        r = t(24668),
        s = t(30640),
        f = t(12366),
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
    37606: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/invite/accepted",
        function () {
          return t(10166);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2888, 9774, 179], function () {
      return e((e.s = 37606));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=accepted-bb8c0272663609d2.js.map
