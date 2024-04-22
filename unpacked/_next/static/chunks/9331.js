"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9331],
  {
    39331: function (e, t, s) {
      s.r(t),
        s.d(t, {
          InternalDevToolsEntryPoint: function () {
            return A;
          },
        });
      var l,
        r,
        n = s(73017),
        a = s(16244),
        i = s(36607),
        o = s(42005),
        c = s(24668),
        x = s(81643),
        d = s(10518),
        u = s(34777),
        m = s(70079),
        h = s(1454),
        f = s(6020),
        p = s(21389),
        g = s(22977),
        j = s(35250),
        v =
          (((l = v || {}).StatsigUser = "Statsig User"),
          (l.FeatureGates = "Feature Gates"),
          (l.Features = "Features"),
          (l.ExperimentalFeatureGates = "Experimental Gates"),
          (l.ExperimentalExperiments = "Experimental Experiments"),
          l);
      function N(e) {
        var t;
        let { onClose: s, isWidgetVisible: l } = e,
          r = (0, c.hz)();
        if (!(0, g.j)() || !f.Statsig.initializeCalled()) return null;
        let n = f.Statsig.getCurrentUser();
        return (0, j.jsx)(a.Z, {
          isOpen: l,
          onClose: s,
          size: "custom",
          className:
            "flex h-[600px] max-h-[60vh] max-w-2xl flex-col [&>div:nth-child(2)]:overflow-y-hidden",
          type: "success",
          title: "Experimentation DevTools",
          noPadding: !0,
          showCloseButton: !0,
          children: (0, j.jsxs)(x.fC, {
            defaultValue: v.StatsigUser,
            className: "flex h-full flex-row gap-6 p-4",
            orientation: "vertical",
            children: [
              (0, j.jsx)(x.aV, {
                className:
                  "flex min-w-[180px] max-w-[200px] flex-shrink-0 flex-col gap-2",
                children: Object.values(v).map((e) =>
                  (0, j.jsx)(
                    x.xz,
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
              (0, j.jsx)(x.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: v.StatsigUser,
                children: (0, j.jsx)("pre", {
                  className: "text-sm",
                  children: JSON.stringify(n, null, 2),
                }),
              }),
              (0, j.jsx)(x.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: v.Features,
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
              (0, j.jsx)(x.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: v.FeatureGates,
                children: Object.entries(d.tz).map((e) => {
                  let [t, s] = e;
                  return (0, j.jsx)(w, { codeName: t, statsigName: s }, t);
                }),
              }),
              (0, j.jsx)(x.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: v.ExperimentalFeatureGates,
                children: Object.entries(u.SP).map((e) => {
                  let [t, s] = e;
                  return (0, j.jsx)(y, { codeName: t, statsigName: s }, t);
                }),
              }),
              (0, j.jsx)(x.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: v.ExperimentalExperiments,
                children: Object.entries(u.LA).map((e) => {
                  let [t, s] = e;
                  return (0, j.jsx)(b, { codeName: t, statsigName: s }, t);
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
          { isLoading: r, value: n } = (0, d.sB)(s);
        return (0, j.jsxs)(k, {
          children: [
            (0, j.jsx)("a", {
              href: l,
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
          { isLoading: r, value: n } = (0, u.fW)(s),
          { 0: a, 1: c } = (0, m.useState)(""),
          { gates: x } = f.Statsig.getAllOverrides(),
          d = null != x[s];
        return (0, j.jsxs)(k, {
          children: [
            (0, j.jsx)("a", {
              href: l,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, j.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                r ? (0, j.jsx)(o.Z, {}) : null,
                d
                  ? (0, j.jsx)(h.Hov, {
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
                  value: a,
                  onChange: (e) => {
                    c(e.currentTarget.value);
                  },
                  className: "mr-px w-20",
                  onPressEnter: (e) => {
                    (0, u.Gh)(s, "true" === e || ("false" !== e && null));
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
          { isLoading: r, config: n } = (0, u.mK)(s),
          a = n.get(d.Hy.TREATMENT, d.wA.CONTROL),
          { 0: c, 1: x } = (0, m.useState)(""),
          { configs: p } = f.Statsig.getAllOverrides(),
          g = null != p[s];
        return (0, j.jsxs)(k, {
          children: [
            (0, j.jsx)("a", {
              href: l,
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
                  ? (0, j.jsx)(h.Hov, {
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
                  value: c,
                  onChange: (e) => {
                    x(e.currentTarget.value);
                  },
                  className: "mr-px w-20",
                  onPressEnter: (e) => {
                    (0, u.mY)(s, e ? { [d.Hy.TREATMENT]: e } : null);
                  },
                }),
              ],
            }),
          ],
        });
      }
      let k = p.Z.div(
        r ||
          (r = (0, n.Z)([
            "flex items-center justify-between border-b border-token-border-light py-3 text-sm text-token-text-primary last-of-type:border-b-0",
          ]))
      );
      var E = s(55289),
        S = s(43803),
        C = s(8402),
        O = s(38117);
      function F() {
        let e = (0, g.j)(),
          t = u.VG.AnonChatLayer,
          s = u.yp.ANON_COMPOSER_DISPLAY_VARIANT,
          { layer: l } = (0, u.U3)(t),
          r = l.get(s, O.tg.Default);
        return (
          (0, m.useEffect)(() => {
            let l = [
                {
                  isShortcut: (e) => e.ctrlKey && "2" === e.key,
                  toggle: () => {
                    let e = r === O.tg.Default ? O.tg.Hedgehog : O.tg.Default;
                    (0, u.H9)(t, { [s]: e });
                  },
                },
              ],
              n = (t) => {
                if (e) for (let e of l) e.isShortcut(t) && e.toggle();
              };
            return (
              window.addEventListener("keydown", n),
              () => {
                window.removeEventListener("keydown", n);
              }
            );
          }, [e, t, r, s]),
          null
        );
      }
      var T = s(18405),
        V = s(7813);
      function A() {
        let e = (0, g.j)(),
          { 0: t, 1: s } = (0, m.useState)(!1);
        return e
          ? (0, j.jsxs)(j.Fragment, {
              children: [
                (0, j.jsxs)(V.v, {
                  as: "div",
                  className: "group relative",
                  children: [
                    (0, j.jsx)(V.v.Button, {
                      className:
                        "flex items-center justify-center rounded-full border border-token-border-light text-token-text-secondary",
                      children: (0, j.jsx)("div", {
                        className:
                          "flex h-6 w-6 items-center justify-center text-xs",
                        children: (0, j.jsx)(h.NNy, { className: "icon-sm" }),
                      }),
                    }),
                    (0, j.jsx)(S.m, {
                      children: (0, j.jsxs)(V.v.Items, {
                        className:
                          "popover absolute bottom-full right-0 z-20 mb-2 w-full min-w-[200px] overflow-hidden rounded-md border border-token-border-light bg-token-main-surface-primary p-1.5 shadow-lg outline-none",
                        children: [
                          (0, j.jsx)(E.s, {
                            children: (0, j.jsx)("span", {
                              className: "truncate text-xs text-[#FF00FF]",
                              children: "Internal only",
                            }),
                          }),
                          (0, j.jsxs)(E.s, {
                            onClick: () => {
                              s((e) => !e);
                            },
                            children: [
                              (0, j.jsx)(C.Gi, { className: "icon-md" }),
                              "Experimentation",
                            ],
                          }),
                          (0, j.jsxs)(E.s, {
                            onClick: () => {
                              T.vm.showLatencyDevTools();
                            },
                            children: [
                              (0, j.jsx)(h.DKx, { className: "icon-md" }),
                              "Latency",
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, j.jsx)(F, {}),
                (0, j.jsx)(N, {
                  isWidgetVisible: t,
                  onClose: () => {
                    s(!1);
                  },
                }),
              ],
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=9331.de1c504e36884da4.js.map
