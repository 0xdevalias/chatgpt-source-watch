(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3415],
  {
    26057: function (e, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          __N_SSP: function () {
            return h;
          },
          default: function () {
            return w;
          },
        });
      var t = r(94734),
        i = r(61305),
        u = r(7144),
        l = r(1890),
        s = r(25349),
        c = r(99893),
        f = r(29124),
        o = r.n(f),
        a = r(70079),
        d = r(56276),
        _ = r(35250),
        h = !0;
      function w(e) {
        var n = "store_anon" === e.kind;
        return ((0, a.useEffect)(
          function () {
            s.A.publicEvent(c.M.pageView, {
              page: "gpts/discovery",
              isAnon: n,
              referrer: e.referrer,
            });
          },
          [n, e.referrer]
        ),
        n)
          ? (0, _.jsx)("div", {
              className: "relative h-full w-full flex-1 flex-col overflow-auto",
              children: (0, _.jsx)(t.fN, { anon: !0 }),
            })
          : (0, _.jsx)(x, {});
      }
      function x() {
        var e = (0, u.hz)();
        return null == e
          ? null
          : null != e && e.includes(l.L0.GizmoStore)
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(o(), {
                    children: (0, _.jsx)("meta", {
                      name: "viewport",
                      content:
                        "width=device-width, initial-scale=1, maximum-scale=1",
                    }),
                  }),
                  (0, _.jsx)(i.Z, { children: (0, _.jsx)(t.fN, {}) }),
                ],
              })
            : (0, _.jsx)(d.default, {});
      }
    },
    73429: function (e, n, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/gpts/discovery",
        function () {
          return r(26057);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [6276, 9774, 2888, 179], function () {
      return e((e.s = 73429));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=discovery-78503cb778e29802.js.map
