"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9111],
  {
    39111: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return a;
          },
        });
      var n = r(39827),
        c = r(37482),
        o = r(23260),
        i = r(37074),
        p = r(66983),
        s = r(35250);
      function u(e, t) {
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
      function a(e) {
        let { json: t, jsonViewProps: r } = e,
          a = (0, c.Gv)();
        return (0, s.jsx)(
          o.ZP,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? u(Object(r), !0).forEach(function (t) {
                    (0, n.Z)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : u(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      );
                    });
            }
            return e;
          })(
            {
              enableClipboard: !0,
              displayDataTypes: !1,
              displayObjectSize: !1,
              value: t,
              style: a ? i.$ : p.W,
              shortenTextAfterLength: 120,
            },
            r
          )
        );
      }
    },
  },
]);
//# sourceMappingURL=9111.0b856f5de33541f4.js.map
