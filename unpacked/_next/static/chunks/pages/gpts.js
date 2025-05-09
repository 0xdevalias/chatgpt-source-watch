(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [106],
  {
    47188: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return f;
          },
          default: function () {
            return x;
          },
        });
      var o = n(14592),
        r = n(47247),
        i = n.n(r),
        s = n(35250);
      function a() {
        let e = "Explore GPTs",
          t =
            "Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills.";
        return (0, s.jsxs)(i(), {
          children: [
            (0, s.jsx)("title", { children: e }),
            (0, s.jsx)("meta", { name: "title", content: e }, "title"),
            (0, s.jsx)(
              "meta",
              { property: "og:site_name", content: "ChatGPT" },
              "og:site_name"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:type", content: "website" },
              "og:type"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:title", content: e },
              "og:title"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:url", content: "/gpts" },
              "og:url"
            ),
            (0, s.jsx)(
              "meta",
              { name: "description", content: t },
              "description"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:description", content: t },
              "og:description"
            ),
            (0, s.jsx)(
              "meta",
              {
                property: "og:image",
                content:
                  "https://cdn.oaistatic.com/_next/static/media/gpts-og.772bef1f.jpg",
              },
              "og:image"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:image:width", content: "1200" },
              "og:image:width"
            ),
            (0, s.jsx)(
              "meta",
              { property: "og:image:height", content: "630" },
              "og:image:height"
            ),
          ],
        });
      }
      var c = n(1277),
        l = n(36138),
        u = n(47712),
        p = n(38801),
        g = n(67852),
        d = n(70079),
        f = !0;
      function x(e) {
        var t;
        let n = "store_anon" === e.kind,
          r = null === (t = (0, u.t)()) || void 0 === t ? void 0 : t.planType;
        return ((0, d.useEffect)(() => {
          (r || n) &&
            p.A.logEvent(g.M.pageView, {
              page: "gpts/discovery",
              isAnon: n,
              referrer: e.referrer,
              plan_type: r,
            });
        }, [n, e.referrer, r]),
        n)
          ? (0, s.jsxs)("div", {
              className: "relative h-full w-full flex-1 flex-col overflow-auto",
              children: [(0, s.jsx)(a, {}), (0, s.jsx)(o.fN, { anon: !0 })],
            })
          : (0, s.jsx)(m, {});
      }
      function m() {
        return null == (0, u.hz)()
          ? null
          : (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(l.r, {}),
                (0, s.jsx)(c.Z, { children: (0, s.jsx)(o.fN, {}) }),
              ],
            });
      }
    },
    1277: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var o = n(55837),
        r = n(64349),
        i = n(3042),
        s = n(41409),
        a = n(81264),
        c = n(74346),
        l = n(35250);
      function u(e) {
        let { children: t } = e,
          n = (0, s.useRouter)();
        return (0, l.jsx)(r.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, l.jsxs)(i.ZP, {
            onNewThread: () => {
              n.push("/");
            },
            children: [
              (0, l.jsx)(c.Dy, {}),
              (0, l.jsx)(o.Z, { activeId: void 0 }),
            ],
          }),
          children: (0, l.jsx)(a.Z, { children: t }),
        });
      }
    },
    60692: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/gpts",
        function () {
          return n(47188);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [4736, 2888, 9774, 179], function () {
      return e((e.s = 60692));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=gpts-2f1723e4bc885593.js.map
