"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6002],
  {
    86529: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return O;
          },
        });
      var s,
        n,
        a,
        l = r(36112),
        i = r(90038),
        o = r(3125),
        c = r(21120),
        u = r(998),
        m = r(63866),
        x = r(7144),
        d = r(81643),
        f = r(14765),
        h = r(90458),
        g = r(70079),
        v = r(1454),
        p = r(6020),
        N = r(21389),
        j = r(50537),
        w = r(35250);
      function y(e) {
        var t,
          r = e.onClose,
          s = e.isWidgetVisible,
          n = (0, x.hz)();
        if (!(0, j.T)()) return null;
        var l = p.Statsig.getCurrentUser();
        return (0, w.jsx)(c.Z, {
          isOpen: s,
          onClose: r,
          size: "custom",
          className:
            "flex h-[600px] max-h-[60vh] max-w-2xl flex-col [&>div:nth-child(2)]:overflow-y-hidden",
          type: "success",
          title: "Experimentation DevTools",
          noPadding: !0,
          showCloseButton: !0,
          children: (0, w.jsxs)(d.fC, {
            defaultValue: a.StatsigUser,
            className: "flex h-full flex-row gap-6 p-4",
            orientation: "vertical",
            children: [
              (0, w.jsx)(d.aV, {
                className:
                  "flex min-w-[180px] max-w-[200px] flex-shrink-0 flex-col gap-2",
                children: Object.values(a).map(function (e) {
                  return (0, w.jsx)(
                    d.xz,
                    {
                      className:
                        "flex rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-white dark:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:text-token-text-primary",
                      value: e,
                      children: e,
                    },
                    e
                  );
                }),
              }),
              (0, w.jsx)(d.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: a.StatsigUser,
                children: (0, w.jsx)("pre", {
                  className: "text-sm",
                  children: JSON.stringify(l, null, 2),
                }),
              }),
              (0, w.jsx)(d.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: a.Features,
                children:
                  null !==
                    (t =
                      null == n
                        ? void 0
                        : n.map(function (e) {
                            return (0, w.jsx)(
                              T,
                              {
                                children: (0, w.jsx)("p", {
                                  children: String(e),
                                }),
                              },
                              e
                            );
                          })) && void 0 !== t
                    ? t
                    : null,
              }),
              (0, w.jsx)(d.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: a.FeatureGates,
                children: Object.entries(f.tz).map(function (e) {
                  var t = (0, o.Z)(e, 2),
                    r = t[0],
                    s = t[1];
                  return (0, w.jsx)(b, { codeName: r, statsigName: s }, r);
                }),
              }),
              (0, w.jsx)(d.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: a.ExperimentalFeatureGates,
                children: Object.entries(h.SP).map(function (e) {
                  var t = (0, o.Z)(e, 2),
                    r = t[0],
                    s = t[1];
                  return (0, w.jsx)(E, { codeName: r, statsigName: s }, r);
                }),
              }),
              (0, w.jsx)(d.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: a.ExperimentalExperiments,
                children: Object.entries(h.LA).map(function (e) {
                  var t = (0, o.Z)(e, 2),
                    r = t[0],
                    s = t[1];
                  return (0, w.jsx)(k, { codeName: r, statsigName: s }, r);
                }),
              }),
            ],
          }),
        });
      }
      function b(e) {
        var t = e.codeName,
          r = e.statsigName,
          s = (0, f.sB)(r),
          n = s.isLoading,
          a = s.value;
        return (0, w.jsxs)(T, {
          children: [
            (0, w.jsx)("a", {
              href: "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/gates/".concat(
                r
              ),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, w.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                n ? (0, w.jsx)(m.Z, {}) : null,
                (0, w.jsx)("p", {
                  className: "font-mono",
                  children: String(a),
                }),
              ],
            }),
          ],
        });
      }
      function E(e) {
        var t = e.codeName,
          r = e.statsigName,
          s = (0, h.fW)(r),
          n = s.isLoading,
          a = s.value,
          l = (0, g.useState)(""),
          i = l[0],
          o = l[1],
          c = null != p.Statsig.getAllOverrides().gates[r];
        return (0, w.jsxs)(T, {
          children: [
            (0, w.jsx)("a", {
              href: "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/gates/".concat(
                r
              ),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, w.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                n ? (0, w.jsx)(m.Z, {}) : null,
                c
                  ? (0, w.jsx)(v.Hov, {
                      className: "text-red-500",
                      title: "Local override",
                    })
                  : null,
                (0, w.jsx)("p", {
                  className: "font-mono",
                  children: String(a),
                }),
                (0, w.jsx)(u.Z, {
                  name: "override",
                  type: "text",
                  color: "neutral",
                  placeholder: "Override",
                  value: i,
                  onChange: function (e) {
                    o(e.currentTarget.value);
                  },
                  className: "mr-px w-20",
                  onPressEnter: function (e) {
                    (0, h.Gh)(r, "true" === e || ("false" !== e && null));
                  },
                }),
              ],
            }),
          ],
        });
      }
      function k(e) {
        var t = e.codeName,
          r = e.statsigName,
          s = (0, h.mK)(r),
          n = s.isLoading,
          a = s.config.get(f.Hy.TREATMENT, f.wA.CONTROL),
          i = (0, g.useState)(""),
          o = i[0],
          c = i[1],
          x = null != p.Statsig.getAllOverrides().configs[r];
        return (0, w.jsxs)(T, {
          children: [
            (0, w.jsx)("a", {
              href: "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/experiments/".concat(
                r
              ),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, w.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                n ? (0, w.jsx)(m.Z, {}) : null,
                x
                  ? (0, w.jsx)(v.Hov, {
                      className: "text-red-500",
                      title: "Local override",
                    })
                  : null,
                (0, w.jsx)("p", {
                  className: "font-mono",
                  children: String(a),
                }),
                (0, w.jsx)(u.Z, {
                  name: "override",
                  type: "text",
                  color: "neutral",
                  placeholder: "Override",
                  value: o,
                  onChange: function (e) {
                    c(e.currentTarget.value);
                  },
                  className: "mr-px w-20",
                  onPressEnter: function (e) {
                    (0, h.mY)(r, e ? (0, l.Z)({}, f.Hy.TREATMENT, e) : null);
                  },
                }),
              ],
            }),
          ],
        });
      }
      ((s = a || (a = {})).StatsigUser = "Statsig User"),
        (s.FeatureGates = "Feature Gates"),
        (s.Features = "Features"),
        (s.ExperimentalFeatureGates = "Experimental Gates"),
        (s.ExperimentalExperiments = "Experimental Experiments");
      var T = N.Z.div(
        n ||
          (n = (0, i.Z)([
            "flex items-center justify-between border-b border-token-border-light py-3 text-sm text-token-text-primary last-of-type:border-b-0",
          ]))
      );
      function O() {
        var e = (0, g.useState)(!1),
          t = e[0],
          r = e[1];
        return (0, j.T)()
          ? (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsx)("button", {
                  onClick: function () {
                    r(function (e) {
                      return !e;
                    });
                  },
                  className:
                    "btn-neutral box-content flex h-6 w-6 items-center justify-center rounded-full text-xs text-token-text-secondary",
                  children: (0, w.jsx)(v.NNy, { className: "icon-sm" }),
                }),
                (0, w.jsx)(y, {
                  isWidgetVisible: t,
                  onClose: function () {
                    r(!1);
                  },
                }),
                (0, w.jsx)(S, {}),
              ],
            })
          : null;
      }
      function S() {
        var e = (0, h.mK)(h.LA.Hedgehog1A).config.get(
          f.Hy.TREATMENT,
          f.wA.CONTROL
        );
        return (
          (0, g.useEffect)(
            function () {
              var t = function (t) {
                t.ctrlKey &&
                  "2" === t.key &&
                  (0, h.mY)(
                    h.LA.Hedgehog1A,
                    (0, l.Z)(
                      {},
                      f.Hy.TREATMENT,
                      e === f.wA.CONTROL ? f.wA.TEST : f.wA.CONTROL
                    )
                  );
              };
              return (
                window.addEventListener("keydown", t),
                function () {
                  window.removeEventListener("keydown", t);
                }
              );
            },
            [e]
          ),
          null
        );
      }
    },
  },
]);
//# sourceMappingURL=6002.5d08126d9ab9c8e2.js.map
