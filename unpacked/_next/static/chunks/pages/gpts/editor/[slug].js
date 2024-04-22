(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9390],
  {
    82885: function (e, n, u) {
      "use strict";
      u.r(n),
        u.d(n, {
          __N_SSP: function () {
            return d;
          },
          default: function () {
            return E;
          },
        });
      var t = u(89691),
        r = u(3358),
        i = u(24668),
        o = u(19892),
        s = u(12366),
        c = u.n(s),
        l = u(70079),
        a = u(45534),
        f = u(58849),
        _ = u(35250),
        d = !0;
      function E() {
        var e;
        let n = (0, i.t)();
        (e = null == n || n.canCreateGizmos()),
          (0, l.useEffect)(() => {
            e ||
              c().replace((0, o.M5)(o.LT.NO_ACCESS), void 0, { shallow: !0 });
          }, [e]);
        let u = (0, s.useRouter)(),
          d = u.query.slug,
          E = u.query.version,
          h = d ? (0, t.CR)(d) : void 0,
          { remixFrom: C } = u.query;
        return ((0, l.useEffect)(() => {
          (0, f.rS)().then((e) => {
            a.ZP.initializeAndGatherData(e);
          });
        }, []),
        (0, l.useEffect)(() => {
          null == n || n.canCreateGizmos() || u.push("/");
        }, [n, u]),
        null != n && n.canCreateGizmos())
          ? (0, _.jsx)(r.V, { gizmoId: h, remixSourceId: C, version: E })
          : null;
      }
    },
    13173: function (e, n, u) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/gpts/editor/[slug]",
        function () {
          return u(82885);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [4736, 2888, 9774, 179], function () {
      return e((e.s = 13173));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=[slug]-6a35077a8e1b5c7a.js.map
