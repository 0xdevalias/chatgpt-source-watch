(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9390],
  {
    7007: function (e, n, u) {
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
      var t = u(9182),
        r = u(33979),
        i = u(47712),
        o = u(33471),
        s = u(41409),
        c = u.n(s),
        l = u(70079),
        a = u(48021),
        f = u(43189),
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
          ? (0, _.jsx)(r.V9, { gizmoId: h, remixSourceId: C, version: E })
          : null;
      }
    },
    24893: function (e, n, u) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/gpts/editor/[slug]",
        function () {
          return u(7007);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [4736, 2888, 9774, 179], function () {
      return e((e.s = 24893));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=[slug]-c1af7a1f5b82cb72.js.map
