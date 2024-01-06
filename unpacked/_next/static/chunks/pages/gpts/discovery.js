(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3415],
  {
    26057: function (n, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          __N_SSP: function () {
            return a;
          },
          default: function () {
            return d;
          },
        });
      var u = r(94734),
        t = r(61305),
        f = r(7144),
        i = r(1890),
        l = r(25349),
        o = r(99893),
        s = r(70079),
        c = r(56276),
        _ = r(35250),
        a = !0;
      function d(n) {
        var e = "store_anon" === n.kind;
        return ((0, s.useEffect)(
          function () {
            l.A.publicEvent(o.M.pageView, {
              page: "gpts/discovery",
              isAnon: e,
              referrer: n.referrer,
            });
          },
          [e, n.referrer]
        ),
        e)
          ? (0, _.jsx)("div", {
              className:
                "relative flex h-full w-full flex-1 flex-col overflow-auto",
              children: (0, _.jsx)(u.fN, { anon: !0 }),
            })
          : (0, _.jsx)(p, {});
      }
      function p() {
        var n = (0, f.hz)();
        return null == n
          ? null
          : null != n && n.includes(i.L0.GizmoStore)
            ? (0, _.jsx)(t.Z, { children: (0, _.jsx)(u.fN, {}) })
            : (0, _.jsx)(c.default, {});
      }
    },
    73429: function (n, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/gpts/discovery",
        function () {
          return r(26057);
        },
      ]);
    },
  },
  function (n) {
    n.O(0, [6276, 9774, 2888, 179], function () {
      return n((n.s = 73429));
    }),
      (_N_E = n.O());
  },
]);
