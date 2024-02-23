"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3472],
  {
    93472: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return k;
          },
        });
      var l,
        r,
        n = s(73017),
        a = s(16244),
        i = s(36607),
        o = s(42005),
        c = s(24668),
        u = s(81643),
        x = s(27282),
        m = s(34777),
        d = s(70079),
        f = s(1454),
        h = s(6020),
        p = s(21389),
        g = s(48044),
        N = s(35250),
        j =
          (((l = j || {}).StatsigUser = "Statsig User"),
          (l.FeatureGates = "Feature Gates"),
          (l.Features = "Features"),
          (l.ExperimentalFeatureGates = "Experimental Gates"),
          (l.ExperimentalExperiments = "Experimental Experiments"),
          l);
      function v(e) {
        var t;
        let { onClose: s, isWidgetVisible: l } = e,
          r = (0, c.hz)();
        if (!(0, g.T)()) return null;
        let n = h.Statsig.getCurrentUser();
        return (0, N.jsx)(a.Z, {
          isOpen: l,
          onClose: s,
          size: "custom",
          className:
            "flex h-[600px] max-h-[60vh] max-w-2xl flex-col [&>div:nth-child(2)]:overflow-y-hidden",
          type: "success",
          title: "Experimentation DevTools",
          noPadding: !0,
          showCloseButton: !0,
          children: (0, N.jsxs)(u.fC, {
            defaultValue: j.StatsigUser,
            className: "flex h-full flex-row gap-6 p-4",
            orientation: "vertical",
            children: [
              (0, N.jsx)(u.aV, {
                className:
                  "flex min-w-[180px] max-w-[200px] flex-shrink-0 flex-col gap-2",
                children: Object.values(j).map((e) =>
                  (0, N.jsx)(
                    u.xz,
                    {
                      className:
                        "flex rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-white dark:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:text-token-text-primary",
                      value: e,
                      children: e,
                    },
                    e
                  )
                ),
              }),
              (0, N.jsx)(u.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: j.StatsigUser,
                children: (0, N.jsx)("pre", {
                  className: "text-sm",
                  children: JSON.stringify(n, null, 2),
                }),
              }),
              (0, N.jsx)(u.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: j.Features,
                children:
                  null !==
                    (t =
                      null == r
                        ? void 0
                        : r.map((e) =>
                            (0, N.jsx)(
                              E,
                              {
                                children: (0, N.jsx)("p", {
                                  children: String(e),
                                }),
                              },
                              e
                            )
                          )) && void 0 !== t
                    ? t
                    : null,
              }),
              (0, N.jsx)(u.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: j.FeatureGates,
                children: Object.entries(x.tz).map((e) => {
                  let [t, s] = e;
                  return (0, N.jsx)(w, { codeName: t, statsigName: s }, t);
                }),
              }),
              (0, N.jsx)(u.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: j.ExperimentalFeatureGates,
                children: Object.entries(m.SP).map((e) => {
                  let [t, s] = e;
                  return (0, N.jsx)(y, { codeName: t, statsigName: s }, t);
                }),
              }),
              (0, N.jsx)(u.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: j.ExperimentalExperiments,
                children: Object.entries(m.LA).map((e) => {
                  let [t, s] = e;
                  return (0, N.jsx)(b, { codeName: t, statsigName: s }, t);
                }),
              }),
            ],
          }),
        });
      }
      function w(e) {
        let { codeName: t, statsigName: s } = e,
          l =
            "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/gates/".concat(
              s
            ),
          { isLoading: r, value: n } = (0, x.sB)(s);
        return (0, N.jsxs)(E, {
          children: [
            (0, N.jsx)("a", {
              href: l,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, N.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                r ? (0, N.jsx)(o.Z, {}) : null,
                (0, N.jsx)("p", {
                  className: "font-mono",
                  children: String(n),
                }),
              ],
            }),
          ],
        });
      }
      function y(e) {
        let { codeName: t, statsigName: s } = e,
          l =
            "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/gates/".concat(
              s
            ),
          { isLoading: r, value: n } = (0, m.fW)(s),
          { 0: a, 1: c } = (0, d.useState)(""),
          { gates: u } = h.Statsig.getAllOverrides(),
          x = null != u[s];
        return (0, N.jsxs)(E, {
          children: [
            (0, N.jsx)("a", {
              href: l,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, N.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                r ? (0, N.jsx)(o.Z, {}) : null,
                x
                  ? (0, N.jsx)(f.Hov, {
                      className: "text-red-500",
                      title: "Local override",
                    })
                  : null,
                (0, N.jsx)("p", {
                  className: "font-mono",
                  children: String(n),
                }),
                (0, N.jsx)(i.Z, {
                  name: "override",
                  type: "text",
                  color: "neutral",
                  placeholder: "Override",
                  value: a,
                  onChange: (e) => {
                    c(e.currentTarget.value);
                  },
                  className: "mr-px w-20",
                  onPressEnter: (e) => {
                    (0, m.Gh)(s, "true" === e || ("false" !== e && null));
                  },
                }),
              ],
            }),
          ],
        });
      }
      function b(e) {
        let { codeName: t, statsigName: s } = e,
          l =
            "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/experiments/".concat(
              s
            ),
          { isLoading: r, config: n } = (0, m.mK)(s),
          a = n.get(x.Hy.TREATMENT, x.wA.CONTROL),
          { 0: c, 1: u } = (0, d.useState)(""),
          { configs: p } = h.Statsig.getAllOverrides(),
          g = null != p[s];
        return (0, N.jsxs)(E, {
          children: [
            (0, N.jsx)("a", {
              href: l,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, N.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                r ? (0, N.jsx)(o.Z, {}) : null,
                g
                  ? (0, N.jsx)(f.Hov, {
                      className: "text-red-500",
                      title: "Local override",
                    })
                  : null,
                (0, N.jsx)("p", {
                  className: "font-mono",
                  children: String(a),
                }),
                (0, N.jsx)(i.Z, {
                  name: "override",
                  type: "text",
                  color: "neutral",
                  placeholder: "Override",
                  value: c,
                  onChange: (e) => {
                    u(e.currentTarget.value);
                  },
                  className: "mr-px w-20",
                  onPressEnter: (e) => {
                    (0, m.mY)(s, e ? { [x.Hy.TREATMENT]: e } : null);
                  },
                }),
              ],
            }),
          ],
        });
      }
      let E = p.Z.div(
        r ||
          (r = (0, n.Z)([
            "flex items-center justify-between border-b border-token-border-light py-3 text-sm text-token-text-primary last-of-type:border-b-0",
          ]))
      );
      function k() {
        let { 0: e, 1: t } = (0, d.useState)(!1);
        return (0, g.T)()
          ? (0, N.jsxs)(N.Fragment, {
              children: [
                (0, N.jsx)("button", {
                  onClick: () => {
                    t((e) => !e);
                  },
                  className:
                    "btn-neutral box-content flex h-6 w-6 items-center justify-center rounded-full text-xs text-token-text-secondary",
                  children: (0, N.jsx)(f.NNy, { className: "icon-sm" }),
                }),
                (0, N.jsx)(v, {
                  isWidgetVisible: e,
                  onClose: () => {
                    t(!1);
                  },
                }),
                (0, N.jsx)(T, {}),
              ],
            })
          : null;
      }
      function T() {
        let { config: e } = (0, m.mK)(m.LA.Hedgehog1A),
          t = e.get(x.Hy.TREATMENT, x.wA.CONTROL);
        return (
          (0, d.useEffect)(() => {
            let e = (e) => {
              e.ctrlKey &&
                "2" === e.key &&
                (0, m.mY)(m.LA.Hedgehog1A, {
                  [x.Hy.TREATMENT]:
                    t === x.wA.CONTROL ? x.wA.TEST : x.wA.CONTROL,
                });
            };
            return (
              window.addEventListener("keydown", e),
              () => {
                window.removeEventListener("keydown", e);
              }
            );
          }, [t]),
          null
        );
      }
    },
  },
]);
//# sourceMappingURL=3472.c63200a5c100c707.js.map
