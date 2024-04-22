"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3472],
  {
    93472: function (e, t, l) {
      l.r(t),
        l.d(t, {
          default: function () {
            return S;
          },
        });
      var s,
        r,
        a = l(73017),
        n = l(16244),
        i = l(36607),
        o = l(42005),
        c = l(24668),
        u = l(81643),
        x = l(10518),
        m = l(34777),
        d = l(70079),
        f = l(1454),
        h = l(6020),
        p = l(21389),
        g = l(48044),
        j = l(35250),
        N =
          (((s = N || {}).StatsigUser = "Statsig User"),
          (s.FeatureGates = "Feature Gates"),
          (s.Features = "Features"),
          (s.ExperimentalFeatureGates = "Experimental Gates"),
          (s.ExperimentalExperiments = "Experimental Experiments"),
          s);
      function v(e) {
        var t;
        let { onClose: l, isWidgetVisible: s } = e,
          r = (0, c.hz)();
        if (!(0, g.T)() || !h.Statsig.initializeCalled()) return null;
        let a = h.Statsig.getCurrentUser();
        return (0, j.jsx)(n.Z, {
          isOpen: s,
          onClose: l,
          size: "custom",
          className:
            "flex h-[600px] max-h-[60vh] max-w-2xl flex-col [&>div:nth-child(2)]:overflow-y-hidden",
          type: "success",
          title: "Experimentation DevTools",
          noPadding: !0,
          showCloseButton: !0,
          children: (0, j.jsxs)(u.fC, {
            defaultValue: N.StatsigUser,
            className: "flex h-full flex-row gap-6 p-4",
            orientation: "vertical",
            children: [
              (0, j.jsx)(u.aV, {
                className:
                  "flex min-w-[180px] max-w-[200px] flex-shrink-0 flex-col gap-2",
                children: Object.values(N).map((e) =>
                  (0, j.jsx)(
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
              (0, j.jsx)(u.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: N.StatsigUser,
                children: (0, j.jsx)("pre", {
                  className: "text-sm",
                  children: JSON.stringify(a, null, 2),
                }),
              }),
              (0, j.jsx)(u.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: N.Features,
                children:
                  null !==
                    (t =
                      null == r
                        ? void 0
                        : r.map((e) =>
                            (0, j.jsx)(
                              k,
                              {
                                children: (0, j.jsx)("p", {
                                  children: String(e),
                                }),
                              },
                              e
                            )
                          )) && void 0 !== t
                    ? t
                    : null,
              }),
              (0, j.jsx)(u.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: N.FeatureGates,
                children: Object.entries(x.tz).map((e) => {
                  let [t, l] = e;
                  return (0, j.jsx)(w, { codeName: t, statsigName: l }, t);
                }),
              }),
              (0, j.jsx)(u.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: N.ExperimentalFeatureGates,
                children: Object.entries(m.SP).map((e) => {
                  let [t, l] = e;
                  return (0, j.jsx)(y, { codeName: t, statsigName: l }, t);
                }),
              }),
              (0, j.jsx)(u.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: N.ExperimentalExperiments,
                children: Object.entries(m.LA).map((e) => {
                  let [t, l] = e;
                  return (0, j.jsx)(b, { codeName: t, statsigName: l }, t);
                }),
              }),
            ],
          }),
        });
      }
      function w(e) {
        let { codeName: t, statsigName: l } = e,
          s =
            "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/gates/".concat(
              l
            ),
          { isLoading: r, value: a } = (0, x.sB)(l);
        return (0, j.jsxs)(k, {
          children: [
            (0, j.jsx)("a", {
              href: s,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, j.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                r ? (0, j.jsx)(o.Z, {}) : null,
                (0, j.jsx)("p", {
                  className: "font-mono",
                  children: String(a),
                }),
              ],
            }),
          ],
        });
      }
      function y(e) {
        let { codeName: t, statsigName: l } = e,
          s =
            "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/gates/".concat(
              l
            ),
          { isLoading: r, value: a } = (0, m.fW)(l),
          { 0: n, 1: c } = (0, d.useState)(""),
          { gates: u } = h.Statsig.getAllOverrides(),
          x = null != u[l];
        return (0, j.jsxs)(k, {
          children: [
            (0, j.jsx)("a", {
              href: s,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, j.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                r ? (0, j.jsx)(o.Z, {}) : null,
                x
                  ? (0, j.jsx)(f.Hov, {
                      className: "text-red-500",
                      title: "Local override",
                    })
                  : null,
                (0, j.jsx)("p", {
                  className: "font-mono",
                  children: String(a),
                }),
                (0, j.jsx)(i.Z, {
                  name: "override",
                  type: "text",
                  color: "neutral",
                  placeholder: "Override",
                  value: n,
                  onChange: (e) => {
                    c(e.currentTarget.value);
                  },
                  className: "mr-px w-20",
                  onPressEnter: (e) => {
                    (0, m.Gh)(l, "true" === e || ("false" !== e && null));
                  },
                }),
              ],
            }),
          ],
        });
      }
      function b(e) {
        let { codeName: t, statsigName: l } = e,
          s =
            "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/experiments/".concat(
              l
            ),
          { isLoading: r, config: a } = (0, m.mK)(l),
          n = a.get(x.Hy.TREATMENT, x.wA.CONTROL),
          { 0: c, 1: u } = (0, d.useState)(""),
          { configs: p } = h.Statsig.getAllOverrides(),
          g = null != p[l];
        return (0, j.jsxs)(k, {
          children: [
            (0, j.jsx)("a", {
              href: s,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, j.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                r ? (0, j.jsx)(o.Z, {}) : null,
                g
                  ? (0, j.jsx)(f.Hov, {
                      className: "text-red-500",
                      title: "Local override",
                    })
                  : null,
                (0, j.jsx)("p", {
                  className: "font-mono",
                  children: String(n),
                }),
                (0, j.jsx)(i.Z, {
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
                    (0, m.mY)(l, e ? { [x.Hy.TREATMENT]: e } : null);
                  },
                }),
              ],
            }),
          ],
        });
      }
      let k = p.Z.div(
        r ||
          (r = (0, a.Z)([
            "flex items-center justify-between border-b border-token-border-light py-3 text-sm text-token-text-primary last-of-type:border-b-0",
          ]))
      );
      var E = l(61678);
      function S() {
        let { 0: e, 1: t } = (0, d.useState)(!1);
        return (0, g.T)()
          ? (0, j.jsxs)(j.Fragment, {
              children: [
                (0, j.jsx)("button", {
                  onClick: () => {
                    t((e) => !e);
                  },
                  className:
                    "btn-neutral box-content flex h-6 w-6 items-center justify-center rounded-full text-xs text-token-text-secondary",
                  children: (0, j.jsx)(f.NNy, { className: "icon-sm" }),
                }),
                (0, j.jsx)(v, {
                  isWidgetVisible: e,
                  onClose: () => {
                    t(!1);
                  },
                }),
                (0, j.jsx)(O, {}),
              ],
            })
          : null;
      }
      function O() {
        let e = m.VG.AnonChatLayer,
          t = m.yp.ANON_COMPOSER_DISPLAY_VARIANT,
          { layer: l } = (0, m.AH)(e),
          s = l.get(t, E.tg.Default);
        return (
          (0, d.useEffect)(() => {
            let l = (l) => {
              if (l.ctrlKey && "2" === l.key) {
                let l = s === E.tg.Default ? E.tg.Hedgehog : E.tg.Default;
                (0, m.H9)(e, { [t]: l });
              }
            };
            return (
              window.addEventListener("keydown", l),
              () => {
                window.removeEventListener("keydown", l);
              }
            );
          }, [e, s, t]),
          null
        );
      }
    },
  },
]);
//# sourceMappingURL=3472.d3ee6c3b89fde6d7.js.map
