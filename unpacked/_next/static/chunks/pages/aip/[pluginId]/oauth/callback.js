(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2758],
  {
    40005: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          __N_SSP: function () {
            return f;
          },
          default: function () {
            return l;
          },
        });
      var n = r(18450),
        c = r(95407),
        u = r(33471),
        o = r(53362),
        a = r(41409),
        s = r(70079),
        i = r(35250);
      function p(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var f = !0;
      function l(t) {
        return (0, i.jsx)(
          O,
          (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? p(Object(r), !0).forEach(function (e) {
                    (0, n.Z)(t, e, r[e]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : p(Object(r)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(r, e)
                      );
                    });
            }
            return t;
          })({}, t)
        );
      }
      function O(t) {
        let { pluginId: e, code: r, state: n, error: p, errorDesc: f } = t,
          l = (0, a.useRouter)(),
          O = (0, s.useRef)(!1);
        return (
          (0, s.useEffect)(() => {
            !0 !== O.current &&
              ((O.current = !0),
              (async function () {
                let t = ""
                  .concat("https://chat.openai.com", "/aip/")
                  .concat(e, "/oauth/callback");
                try {
                  let a = await o.Z.pluginOauthCallback(e, r, t, n);
                  if (a.success) {
                    let t = new URL(
                      (0, u.M5)(u.LT.OAUTH_SUCCESS, a.redirect_path)
                    );
                    t.searchParams.set("oauth_success", "true"),
                      l.push(t.toString());
                  } else {
                    var c;
                    l.push(
                      (0, u.M5)(
                        u.LT.CUSTOM_ERROR,
                        a.redirect_path,
                        null !== (c = a.error) && void 0 !== c ? c : a.message
                      )
                    );
                  }
                } catch (t) {
                  l.push(
                    "/?model=gpt-4-plugins&loginAip=".concat(
                      e,
                      "&loginSuccess=false"
                    )
                  );
                }
              })());
          }, [e, r, n, l]),
          (0, s.useEffect)(() => {
            p &&
              c.m.danger("".concat(p).concat(f ? ": ".concat(f) : ""), {
                duration: 5,
              });
          }, [p, f]),
          (0, i.jsx)("div", {})
        );
      }
    },
    67713: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/aip/[pluginId]/oauth/callback",
        function () {
          return r(40005);
        },
      ]);
    },
  },
  function (t) {
    t.O(0, [4736, 2888, 9774, 179], function () {
      return t((t.s = 67713));
    }),
      (_N_E = t.O());
  },
]);
//# sourceMappingURL=callback-13971f7bb8cd9145.js.map
