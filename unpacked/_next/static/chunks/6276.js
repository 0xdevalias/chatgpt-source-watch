"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6276],
  {
    56276: function (e, t, r) {
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return S;
          },
          default: function () {
            return E;
          },
        });
      var n = r(36112),
        s = r(7144),
        o = r(1890),
        i = r(83380),
        l = r(10721),
        a = r(70079),
        c = r(32004),
        u = r(94968),
        d = r(91559),
        f = r(63866),
        m = r(56685),
        p = r(37097),
        v = r(94734),
        x = r(35250);
      function g(e, t) {
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
      function h() {
        var e,
          t = (0, s.t)(),
          r = (0, l.useRouter)(),
          n = (0, p.Yp)(),
          a = n.data,
          c = n.isLoading;
        if (
          ((0, i.yx)({
            resetThreadAction: function () {
              r.push("/");
            },
          }),
          null == t)
        )
          return null;
        var u =
          null !==
            (e =
              null == a
                ? void 0
                : a.cuts.map(function (e) {
                    return {
                      cutId: e.info.id,
                      title: e.info.title,
                      items: e.list.items,
                      cursor: e.list.cursor,
                    };
                  })) && void 0 !== e
            ? e
            : [];
        return (
          t.features.includes(o.L0.GizmoStore) &&
            (u = u.filter(function (e) {
              return "mine" === e.cutId;
            })),
          u.some(function (e) {
            return "mine" === e.cutId;
          }) ||
            u.unshift({
              cutId: "mine",
              title: "My GPTs",
              items: [],
              cursor: null,
            }),
          (0, x.jsx)("div", {
            className: "mx-auto max-w-3xl px-4 py-12",
            children: c
              ? (0, x.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, x.jsx)(f.Z, {}),
                })
              : u.map(function (e) {
                  return (0, x.jsx)(
                    y,
                    {
                      cutId: e.cutId,
                      title: e.title,
                      items: e.items,
                      cursor: e.cursor,
                      createRowType:
                        "mine" == e.cutId
                          ? t.canCreateGizmos()
                            ? m.a7.Enabled
                            : m.a7.ComingSoon
                          : void 0,
                      canRemoveRecent: "recent" === e.cutId,
                    },
                    e.cutId
                  );
                }),
          })
        );
      }
      function y(e) {
        var t = e.cutId,
          r = e.title,
          n = e.items,
          s = e.cursor,
          o = e.canRemoveRecent,
          i = e.createRowType;
        return (0, x.jsxs)(v.b1, {
          title: r,
          children: [
            null != i && (0, x.jsx)(m.at, { type: i }),
            n.map(function (e) {
              return (0, x.jsx)(
                m.r1,
                { gizmoResource: e.resource, canRemoveRecent: o },
                e.resource.gizmo.id
              );
            }),
            null != s &&
              (0, x.jsx)(b, {
                cutId: t,
                cursor: s,
                fetchOnMount: 0 === n.length,
              }),
          ],
        });
      }
      function b(e) {
        var t = e.cutId,
          r = e.cursor,
          s = e.fetchOnMount,
          o = (0, a.useState)(s),
          i = o[0],
          l = o[1],
          u = (0, p.Fi)(t, 8, r, i),
          f = u.data,
          v = u.hasNextPage,
          h = u.fetchNextPage,
          y = u.isLoading;
        return (0, x.jsxs)("div", {
          children: [
            (0, x.jsx)("div", {
              children:
                null == f
                  ? void 0
                  : f.pages.flatMap(function (e) {
                      return e.list.items.map(function (e) {
                        var t = e.resource;
                        return (0, x.jsx)(
                          m.r1,
                          { gizmoResource: t },
                          t.gizmo.id
                        );
                      });
                    }),
            }),
            !i || v || y
              ? (0, x.jsx)(d.z, {
                  color: "neutral",
                  onClick: function () {
                    i ? h() : l(!0);
                  },
                  loading: y,
                  className: "w-full",
                  children: (0, x.jsx)(
                    c.Z,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? g(Object(r), !0).forEach(function (t) {
                              (0, n.Z)(e, t, r[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(r)
                              )
                            : g(Object(r)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                                );
                              });
                      }
                      return e;
                    })({}, j.discoveryLoadMore)
                  ),
                })
              : null,
          ],
        });
      }
      var j = (0, u.vU)({
          discoveryLoadMore: {
            id: "gizmo.mygpts.loadMore",
            defaultMessage: "Load more",
          },
        }),
        N = r(3359),
        P = r(36638);
      function w(e) {
        var t = e.children,
          r = (0, s.t)();
        return null == r
          ? null
          : r.canInteractWithGizmos()
            ? (0, x.jsxs)("div", {
                children: [
                  t,
                  (0, x.jsx)("div", {
                    className: "fixed bottom-3 right-3",
                    children: (0, x.jsx)(N.Z, {}),
                  }),
                ],
              })
            : r.hasPaidSubscription()
              ? null
              : (0, x.jsx)(k, {
                  button: (0, x.jsx)(d.z, {
                    onClick: function () {
                      return (0, P.MG)();
                    },
                    children: "Upgrade to ChatGPT Plus",
                  }),
                  children: "GPTs are gradually rolling out to Plus users",
                });
      }
      function k(e) {
        var t = e.children,
          r = e.button;
        return (0, x.jsx)("div", {
          className: "flex h-full w-full items-center justify-center",
          children: (0, x.jsxs)("div", {
            className: "flex max-w-sm flex-col gap-4 p-6 text-center",
            children: [
              (0, x.jsx)("h2", { children: t }),
              (0, x.jsx)("div", { className: "m-auto", children: r }),
            ],
          }),
        });
      }
      var z = r(61305),
        S = !0;
      function E() {
        return (0, x.jsx)(z.Z, {
          children: (0, x.jsx)(w, { children: (0, x.jsx)(h, {}) }),
        });
      }
    },
    85528: function (e, t, r) {
      r.d(t, {
        S: function () {
          return m;
        },
        X: function () {
          return f;
        },
      });
      var n = r(37097),
        s = r(29703),
        o = r(14972),
        i = r(19841),
        l = r(73040),
        a = r.n(l),
        c = r(2454),
        u = r(67404),
        d = r(35250);
      function f(e) {
        var t = e.gizmo,
          r = (0, n.i6)(t);
        return (0, d.jsxs)("div", {
          className: "flex h-full flex-col",
          children: [
            (0, d.jsx)(s.N, { gizmo: t }),
            (0, d.jsx)(m, { redirectUrl: r }),
            (0, d.jsx)("div", {
              className: "flex grow flex-col items-center justify-center p-2",
              children: (0, d.jsx)(u.r, {
                gizmo: t,
                isOwner: !1,
                isAnon: !0,
                children: (0, d.jsxs)("div", {
                  className: "mt-7 flex flex-col gap-4",
                  children: [
                    (0, d.jsx)(c.p, {
                      href: "/auth/login?next=".concat(r),
                      children: "Sign up to chat",
                    }),
                    (0, d.jsx)("div", {
                      className: "text-sm text-token-text-tertiary",
                      children: "Requires ChatGPT Plus",
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function m(e) {
        var t = e.redirectUrl,
          r = e.className;
        return (0, d.jsxs)("div", {
          className: (0, i.default)(
            "flex items-center justify-between px-7 py-4",
            r
          ),
          children: [
            (0, d.jsx)(p, {}),
            (0, d.jsx)(a(), {
              href: null != t ? "/auth/login?next=".concat(t) : "/auth/login",
              className:
                "flex items-center rounded-lg bg-green-600 px-4 py-2 font-medium text-white transition hover:opacity-70",
              children: "Sign up",
            }),
          ],
        });
      }
      function p() {
        return (0, d.jsx)(a(), {
          href: "/",
          children: (0, d.jsx)(o.nI, { className: "h-8 w-8" }),
        });
      }
    },
    94734: function (e, t, r) {
      r.d(t, {
        fN: function () {
          return eN;
        },
        b1: function () {
          return e_;
        },
      });
      var n,
        s,
        o,
        i,
        l = r(36112),
        a = r(90038),
        c = r(91559),
        u = r(37097),
        d = r(49668),
        f = r(52336),
        m = r(63866),
        p = r(18008),
        v = r(28818),
        x = r(70079),
        g = r(78983),
        h = r(4911),
        y = r(14699),
        b = r(58194),
        j = r(86499),
        N = r(28595),
        P = r(29787),
        w = r(37068),
        k = r(19992),
        z = r(53315),
        S = r(52327),
        E = r(46789),
        C = r(48442),
        M = r(98992),
        R = r(17575),
        T = r(70794),
        O =
          (((n = O || {})[(n.Open = 0)] = "Open"),
          (n[(n.Closed = 1)] = "Closed"),
          n),
        I =
          (((s = I || {})[(s.TogglePopover = 0)] = "TogglePopover"),
          (s[(s.ClosePopover = 1)] = "ClosePopover"),
          (s[(s.SetButton = 2)] = "SetButton"),
          (s[(s.SetButtonId = 3)] = "SetButtonId"),
          (s[(s.SetPanel = 4)] = "SetPanel"),
          (s[(s.SetPanelId = 5)] = "SetPanelId"),
          s);
      let Z = {
          0: (e) => ({
            ...e,
            popoverState: (0, g.E)(e.popoverState, { 0: 1, 1: 0 }),
          }),
          1: (e) => (1 === e.popoverState ? e : { ...e, popoverState: 1 }),
          2: (e, t) => (e.button === t.button ? e : { ...e, button: t.button }),
          3: (e, t) =>
            e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId },
          4: (e, t) => (e.panel === t.panel ? e : { ...e, panel: t.panel }),
          5: (e, t) =>
            e.panelId === t.panelId ? e : { ...e, panelId: t.panelId },
        },
        _ = (0, x.createContext)(null);
      function G(e) {
        let t = (0, x.useContext)(_);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, G), t);
        }
        return t;
      }
      _.displayName = "PopoverContext";
      let A = (0, x.createContext)(null);
      function D(e) {
        let t = (0, x.useContext)(A);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, D), t);
        }
        return t;
      }
      A.displayName = "PopoverAPIContext";
      let F = (0, x.createContext)(null);
      function L() {
        return (0, x.useContext)(F);
      }
      F.displayName = "PopoverGroupContext";
      let U = (0, x.createContext)(null);
      function B(e, t) {
        return (0, g.E)(t.type, Z, e, t);
      }
      U.displayName = "PopoverPanelContext";
      let q = (0, h.yV)(function (e, t) {
          var r;
          let n = `headlessui-popover-button-${(0, b.M)()}`,
            s = `headlessui-popover-panel-${(0, b.M)()}`,
            o = (0, x.useRef)(null),
            i = (0, y.T)(
              t,
              (0, y.h)((e) => {
                o.current = e;
              })
            ),
            l = (0, x.useReducer)(B, {
              popoverState: 1,
              button: null,
              buttonId: n,
              panel: null,
              panelId: s,
              beforePanelSentinel: (0, x.createRef)(),
              afterPanelSentinel: (0, x.createRef)(),
            }),
            [
              {
                popoverState: a,
                button: c,
                panel: u,
                beforePanelSentinel: d,
                afterPanelSentinel: f,
              },
              m,
            ] = l,
            p = (0, E.i)(null != (r = o.current) ? r : c);
          (0, x.useEffect)(() => m({ type: 3, buttonId: n }), [n, m]),
            (0, x.useEffect)(() => m({ type: 5, panelId: s }), [s, m]);
          let v = (0, x.useMemo)(() => {
              if (!c || !u) return !1;
              for (let e of document.querySelectorAll("body > *"))
                if (
                  Number(null == e ? void 0 : e.contains(c)) ^
                  Number(null == e ? void 0 : e.contains(u))
                )
                  return !0;
              return !1;
            }, [c, u]),
            j = (0, x.useMemo)(
              () => ({ buttonId: n, panelId: s, close: () => m({ type: 1 }) }),
              [n, s, m]
            ),
            N = L(),
            k = null == N ? void 0 : N.registerPopover,
            S = (0, R.z)(() => {
              var e;
              return null !=
                (e = null == N ? void 0 : N.isFocusWithinPopoverGroup())
                ? e
                : (null == p ? void 0 : p.activeElement) &&
                    ((null == c ? void 0 : c.contains(p.activeElement)) ||
                      (null == u ? void 0 : u.contains(p.activeElement)));
            });
          (0, x.useEffect)(() => (null == k ? void 0 : k(j)), [k, j]),
            (0, C.O)(
              null == p ? void 0 : p.defaultView,
              "focus",
              (e) => {
                var t, r, n, s;
                0 === a &&
                  (S() ||
                    !c ||
                    !u ||
                    (null !=
                      (r = null == (t = d.current) ? void 0 : t.contains) &&
                      r.call(t, e.target)) ||
                    (null !=
                      (s = null == (n = f.current) ? void 0 : n.contains) &&
                      s.call(n, e.target)) ||
                    m({ type: 1 }));
              },
              !0
            ),
            (0, z.O)(
              [c, u],
              (e, t) => {
                m({ type: 1 }),
                  (0, P.sP)(t, P.tJ.Loose) ||
                    (e.preventDefault(), null == c || c.focus());
              },
              0 === a
            );
          let M = (0, R.z)((e) => {
              m({ type: 1 });
              let t = e
                ? e instanceof HTMLElement
                  ? e
                  : "current" in e && e.current instanceof HTMLElement
                    ? e.current
                    : c
                : c;
              null == t || t.focus();
            }),
            T = (0, x.useMemo)(() => ({ close: M, isPortalled: v }), [M, v]),
            O = (0, x.useMemo)(() => ({ open: 0 === a, close: M }), [a, M]);
          return x.createElement(
            _.Provider,
            { value: l },
            x.createElement(
              A.Provider,
              { value: T },
              x.createElement(
                w.up,
                { value: (0, g.E)(a, { 0: w.ZM.Open, 1: w.ZM.Closed }) },
                (0, h.sY)({
                  ourProps: { ref: i },
                  theirProps: e,
                  slot: O,
                  defaultTag: "div",
                  name: "Popover",
                })
              )
            )
          );
        }),
        $ = (0, h.yV)(function (e, t) {
          let [r, n] = G("Popover.Button"),
            { isPortalled: s } = D("Popover.Button"),
            o = (0, x.useRef)(null),
            i = `headlessui-focus-sentinel-${(0, b.M)()}`,
            l = L(),
            a = null == l ? void 0 : l.closeOthers,
            c = (0, x.useContext)(U),
            u = null !== c && c === r.panelId,
            d = (0, y.T)(o, t, u ? null : (e) => n({ type: 2, button: e })),
            f = (0, y.T)(o, t),
            m = (0, E.i)(o),
            p = (0, R.z)((e) => {
              var t, s, i;
              if (u) {
                if (1 === r.popoverState) return;
                switch (e.key) {
                  case j.R.Space:
                  case j.R.Enter:
                    e.preventDefault(),
                      null == (s = (t = e.target).click) || s.call(t),
                      n({ type: 1 }),
                      null == (i = r.button) || i.focus();
                }
              } else
                switch (e.key) {
                  case j.R.Space:
                  case j.R.Enter:
                    e.preventDefault(),
                      e.stopPropagation(),
                      1 === r.popoverState && (null == a || a(r.buttonId)),
                      n({ type: 0 });
                    break;
                  case j.R.Escape:
                    if (0 !== r.popoverState)
                      return null == a ? void 0 : a(r.buttonId);
                    if (
                      !o.current ||
                      ((null == m ? void 0 : m.activeElement) &&
                        !o.current.contains(m.activeElement))
                    )
                      return;
                    e.preventDefault(), e.stopPropagation(), n({ type: 1 });
                }
            }),
            v = (0, R.z)((e) => {
              u || (e.key === j.R.Space && e.preventDefault());
            }),
            w = (0, R.z)((t) => {
              var s, o;
              (0, N.P)(t.currentTarget) ||
                e.disabled ||
                (u
                  ? (n({ type: 1 }), null == (s = r.button) || s.focus())
                  : (t.preventDefault(),
                    t.stopPropagation(),
                    1 === r.popoverState && (null == a || a(r.buttonId)),
                    n({ type: 0 }),
                    null == (o = r.button) || o.focus()));
            }),
            z = (0, R.z)((e) => {
              e.preventDefault(), e.stopPropagation();
            }),
            S = 0 === r.popoverState,
            C = (0, x.useMemo)(() => ({ open: S }), [S]),
            O = (0, k.f)(e, o),
            I = u
              ? { ref: f, type: O, onKeyDown: p, onClick: w }
              : {
                  ref: d,
                  id: r.buttonId,
                  type: O,
                  "aria-expanded": e.disabled ? void 0 : 0 === r.popoverState,
                  "aria-controls": r.panel ? r.panelId : void 0,
                  onKeyDown: p,
                  onKeyUp: v,
                  onClick: w,
                  onMouseDown: z,
                },
            Z = (0, T.l)(),
            _ = (0, R.z)(() => {
              let e = r.panel;
              e &&
                (0, g.E)(Z.current, {
                  [T.N.Forwards]: () => (0, P.jA)(e, P.TO.First),
                  [T.N.Backwards]: () => (0, P.jA)(e, P.TO.Last),
                });
            });
          return x.createElement(
            x.Fragment,
            null,
            (0, h.sY)({
              ourProps: I,
              theirProps: e,
              slot: C,
              defaultTag: "button",
              name: "Popover.Button",
            }),
            S &&
              !u &&
              s &&
              x.createElement(M._, {
                id: i,
                features: M.A.Focusable,
                as: "button",
                type: "button",
                onFocus: _,
              })
          );
        }),
        Y = h.AN.RenderStrategy | h.AN.Static,
        V = (0, h.yV)(function (e, t) {
          let [{ popoverState: r }, n] = G("Popover.Overlay"),
            s = (0, y.T)(t),
            o = `headlessui-popover-overlay-${(0, b.M)()}`,
            i = (0, w.oJ)(),
            l = null !== i ? i === w.ZM.Open : 0 === r,
            a = (0, R.z)((e) => {
              if ((0, N.P)(e.currentTarget)) return e.preventDefault();
              n({ type: 1 });
            }),
            c = (0, x.useMemo)(() => ({ open: 0 === r }), [r]);
          return (0, h.sY)({
            ourProps: { ref: s, id: o, "aria-hidden": !0, onClick: a },
            theirProps: e,
            slot: c,
            defaultTag: "div",
            features: Y,
            visible: l,
            name: "Popover.Overlay",
          });
        }),
        W = h.AN.RenderStrategy | h.AN.Static,
        H = Object.assign(q, {
          Button: $,
          Overlay: V,
          Panel: (0, h.yV)(function (e, t) {
            let { focus: r = !1, ...n } = e,
              [s, o] = G("Popover.Panel"),
              { close: i, isPortalled: l } = D("Popover.Panel"),
              a = `headlessui-focus-sentinel-before-${(0, b.M)()}`,
              c = `headlessui-focus-sentinel-after-${(0, b.M)()}`,
              u = (0, x.useRef)(null),
              d = (0, y.T)(u, t, (e) => {
                o({ type: 4, panel: e });
              }),
              f = (0, E.i)(u),
              m = (0, w.oJ)(),
              p = null !== m ? m === w.ZM.Open : 0 === s.popoverState,
              v = (0, R.z)((e) => {
                var t;
                if (e.key === j.R.Escape) {
                  if (
                    0 !== s.popoverState ||
                    !u.current ||
                    ((null == f ? void 0 : f.activeElement) &&
                      !u.current.contains(f.activeElement))
                  )
                    return;
                  e.preventDefault(),
                    e.stopPropagation(),
                    o({ type: 1 }),
                    null == (t = s.button) || t.focus();
                }
              });
            (0, x.useEffect)(() => {
              var t;
              e.static ||
                (1 === s.popoverState &&
                  (null == (t = e.unmount) || t) &&
                  o({ type: 4, panel: null }));
            }, [s.popoverState, e.unmount, e.static, o]),
              (0, x.useEffect)(() => {
                if (!r || 0 !== s.popoverState || !u.current) return;
                let e = null == f ? void 0 : f.activeElement;
                u.current.contains(e) || (0, P.jA)(u.current, P.TO.First);
              }, [r, u, s.popoverState]);
            let N = (0, x.useMemo)(
                () => ({ open: 0 === s.popoverState, close: i }),
                [s, i]
              ),
              k = {
                ref: d,
                id: s.panelId,
                onKeyDown: v,
                onBlur:
                  r && 0 === s.popoverState
                    ? (e) => {
                        var t, r, n, i, l;
                        let a = e.relatedTarget;
                        !a ||
                          !u.current ||
                          (null != (t = u.current) && t.contains(a)) ||
                          (o({ type: 1 }),
                          ((null ==
                          (n =
                            null == (r = s.beforePanelSentinel.current)
                              ? void 0
                              : r.contains)
                            ? void 0
                            : n.call(r, a)) ||
                            (null ==
                            (l =
                              null == (i = s.afterPanelSentinel.current)
                                ? void 0
                                : i.contains)
                              ? void 0
                              : l.call(i, a))) &&
                            a.focus({ preventScroll: !0 }));
                      }
                    : void 0,
                tabIndex: -1,
              },
              z = (0, T.l)(),
              S = (0, R.z)(() => {
                let e = u.current;
                e &&
                  (0, g.E)(z.current, {
                    [T.N.Forwards]: () => {
                      (0, P.jA)(e, P.TO.First);
                    },
                    [T.N.Backwards]: () => {
                      var e;
                      null == (e = s.button) || e.focus({ preventScroll: !0 });
                    },
                  });
              }),
              C = (0, R.z)(() => {
                let e = u.current;
                e &&
                  (0, g.E)(z.current, {
                    [T.N.Forwards]: () => {
                      var e, t, r;
                      if (!s.button) return;
                      let n = (0, P.GO)(),
                        o = n.indexOf(s.button),
                        i = n.slice(0, o + 1),
                        l = [...n.slice(o + 1), ...i];
                      for (let n of l.slice())
                        if (
                          (null ==
                          (t =
                            null == (e = null == n ? void 0 : n.id)
                              ? void 0
                              : e.startsWith)
                            ? void 0
                            : t.call(e, "headlessui-focus-sentinel-")) ||
                          (null == (r = s.panel) ? void 0 : r.contains(n))
                        ) {
                          let e = l.indexOf(n);
                          -1 !== e && l.splice(e, 1);
                        }
                      (0, P.jA)(l, P.TO.First, !1);
                    },
                    [T.N.Backwards]: () => (0, P.jA)(e, P.TO.Last),
                  });
              });
            return x.createElement(
              U.Provider,
              { value: s.panelId },
              p &&
                l &&
                x.createElement(M._, {
                  id: a,
                  ref: s.beforePanelSentinel,
                  features: M.A.Focusable,
                  as: "button",
                  type: "button",
                  onFocus: S,
                }),
              (0, h.sY)({
                ourProps: k,
                theirProps: n,
                slot: N,
                defaultTag: "div",
                features: W,
                visible: p,
                name: "Popover.Panel",
              }),
              p &&
                l &&
                x.createElement(M._, {
                  id: c,
                  ref: s.afterPanelSentinel,
                  features: M.A.Focusable,
                  as: "button",
                  type: "button",
                  onFocus: C,
                })
            );
          }),
          Group: (0, h.yV)(function (e, t) {
            let r = (0, x.useRef)(null),
              n = (0, y.T)(r, t),
              [s, o] = (0, x.useState)([]),
              i = (0, R.z)((e) => {
                o((t) => {
                  let r = t.indexOf(e);
                  if (-1 !== r) {
                    let e = t.slice();
                    return e.splice(r, 1), e;
                  }
                  return t;
                });
              }),
              l = (0, R.z)((e) => (o((t) => [...t, e]), () => i(e))),
              a = (0, R.z)(() => {
                var e;
                let t = (0, S.r)(r);
                if (!t) return !1;
                let n = t.activeElement;
                return (
                  !!(null != (e = r.current) && e.contains(n)) ||
                  s.some((e) => {
                    var r, s;
                    return (
                      (null == (r = t.getElementById(e.buttonId))
                        ? void 0
                        : r.contains(n)) ||
                      (null == (s = t.getElementById(e.panelId))
                        ? void 0
                        : s.contains(n))
                    );
                  })
                );
              }),
              c = (0, R.z)((e) => {
                for (let t of s) t.buttonId !== e && t.close();
              }),
              u = (0, x.useMemo)(
                () => ({
                  registerPopover: l,
                  unregisterPopover: i,
                  isFocusWithinPopoverGroup: a,
                  closeOthers: c,
                }),
                [l, i, a, c]
              ),
              d = (0, x.useMemo)(() => ({}), []);
            return x.createElement(
              F.Provider,
              { value: u },
              (0, h.sY)({
                ourProps: { ref: n },
                theirProps: e,
                slot: d,
                defaultTag: "div",
                name: "Popover.Group",
              })
            );
          }),
        });
      var X = r(25349),
        K = r(99893),
        J = r(19841),
        Q = r(43356),
        ee = r(61888),
        et = r(73040),
        er = r.n(et),
        en = r(10721),
        es = r(1454),
        eo = r(32004),
        ei = r(70671),
        el = r(94968),
        ea = r(21389),
        ec = r(8844),
        eu = r(218),
        ed = r(41202),
        ef = r(56685),
        em = r(85528),
        ep = r(65865),
        ev = r(79505),
        ex = r(5063),
        eg = r(35250);
      function eh(e, t) {
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
      function ey(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eh(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eh(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function eb(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var ej = ea.Z.div(
        o ||
          (o = (0, a.Z)([
            "grid grid-cols-1 gap-x-1.5 gap-y-1 md:gap-x-2 md:gap-y-1.5 lg:grid-cols-2 lg:gap-x-3 lg:gap-y-2.5",
          ]))
      );
      function eN(e) {
        var t,
          r,
          n = e.anon,
          s = (0, u.z5)(),
          o = s.data,
          i = s.isLoading,
          a = (0, x.useState)({}),
          c = a[0],
          d = a[1],
          f = (0, x.useState)({}),
          p = f[0],
          g = f[1],
          h = (0, x.useMemo)(
            function () {
              return (0, ee.uniqBy)(
                (0, ee.compact)(
                  null == o
                    ? void 0
                    : o.cuts.map(function (e) {
                        return { id: e.info.id, name: e.info.display_group };
                      })
                ),
                "name"
              );
            },
            [o]
          ),
          y = (0, x.useRef)(null),
          b =
            null !==
              (t = h.find(function (e) {
                return p[e.id];
              })) && void 0 !== t
              ? t
              : h[0];
        (0, x.useEffect)(
          function () {
            d(function (e) {
              var t = {};
              return (
                h.forEach(function (r) {
                  var n;
                  null != r.name &&
                    (t[r.id] =
                      null !== (n = e[r.id]) && void 0 !== n
                        ? n
                        : (0, x.createRef)());
                }),
                t
              );
            });
          },
          [h]
        ),
          (0, x.useEffect)(
            function () {
              var e = new IntersectionObserver(
                function (e) {
                  e.forEach(function (e) {
                    var t,
                      r = (function (e, t) {
                        var r =
                          ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                        if (!r) {
                          if (
                            Array.isArray(e) ||
                            (r = (function (e, t) {
                              if (e) {
                                if ("string" == typeof e) return eb(e, t);
                                var r = Object.prototype.toString
                                  .call(e)
                                  .slice(8, -1);
                                if (
                                  ("Object" === r &&
                                    e.constructor &&
                                    (r = e.constructor.name),
                                  "Map" === r || "Set" === r)
                                )
                                  return Array.from(e);
                                if (
                                  "Arguments" === r ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    r
                                  )
                                )
                                  return eb(e, t);
                              }
                            })(e))
                          ) {
                            r && (e = r);
                            var n = 0,
                              s = function () {};
                            return {
                              s: s,
                              n: function () {
                                return n >= e.length
                                  ? { done: !0 }
                                  : { done: !1, value: e[n++] };
                              },
                              e: function (e) {
                                throw e;
                              },
                              f: s,
                            };
                          }
                          throw TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        }
                        var o,
                          i = !0,
                          l = !1;
                        return {
                          s: function () {
                            r = r.call(e);
                          },
                          n: function () {
                            var e = r.next();
                            return (i = e.done), e;
                          },
                          e: function (e) {
                            (l = !0), (o = e);
                          },
                          f: function () {
                            try {
                              i || null == r.return || r.return();
                            } finally {
                              if (l) throw o;
                            }
                          },
                        };
                      })(h);
                    try {
                      for (r.s(); !(t = r.n()).done; ) {
                        var n = (function () {
                          var r = t.value,
                            n = c[r.id];
                          if (null == n || "function" == typeof n)
                            return { v: void 0 };
                          (null == n ? void 0 : n.current) != null &&
                            e.target === n.current &&
                            g(function (t) {
                              return ey(
                                ey({}, t),
                                {},
                                (0, l.Z)({}, r.id, e.isIntersecting)
                              );
                            });
                        })();
                        if ("object" == typeof n) return n.v;
                      }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                  });
                },
                { root: null, rootMargin: "-96px", threshold: 0.1 }
              );
              return (
                Object.values(c).forEach(function (t) {
                  "function" != typeof t &&
                    (null == t ? void 0 : t.current) != null &&
                    e.observe(t.current);
                }),
                function () {
                  Object.values(c).forEach(function (t) {
                    "function" != typeof t &&
                      (null == t ? void 0 : t.current) != null &&
                      e.unobserve(t.current);
                  });
                }
              );
            },
            [c, h]
          );
        var j = (0, x.useRef)(null);
        return i
          ? (0, eg.jsx)("div", {
              className: "flex h-full w-full items-center justify-center",
              children: (0, eg.jsx)(m.Z, {}),
            })
          : (0, eg.jsxs)(eg.Fragment, {
              children: [
                n
                  ? (0, eg.jsx)(em.S, {
                      redirectUrl: (0, v.cy)(),
                      className: "sticky top-0 z-30 h-14 dark:bg-gray-800",
                    })
                  : (0, eg.jsx)(ez, { pageSearchRef: j }),
                (0, eg.jsxs)("div", {
                  className: "mx-auto max-w-3xl overflow-x-clip px-4",
                  children: [
                    (0, eg.jsx)(eP, {}),
                    !n &&
                      (0, eg.jsx)(eR, {
                        className:
                          "z-20 mb-6 mt-2 flex-grow shadow-[0px_10px_10px_-3px_rgba(0,0,0,0.05)]",
                        inputClassName: "md:h-14 h-12 text-base pl-12",
                        iconClassName: "left-6",
                        ref: j,
                      }),
                    h.length > 1 &&
                      (0, eg.jsx)(ew, {
                        displayGroups: h,
                        currentDisplayGroup: b,
                        scrollToDisplayGroup: function (e) {
                          var t,
                            r,
                            n = null !== (t = c[e.id]) && void 0 !== t ? t : y;
                          "function" != typeof n &&
                            (null == n ||
                              null === (r = n.current) ||
                              void 0 === r ||
                              r.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              }));
                        },
                      }),
                    (0, eg.jsx)("div", { ref: y, className: "scroll-mt-24" }),
                    null !==
                      (r =
                        null == o
                          ? void 0
                          : o.cuts.map(function (e) {
                              var t, r, n;
                              return "featured" === e.info.display_type
                                ? (0, eg.jsx)(
                                    eS,
                                    {
                                      title: e.info.title,
                                      description: e.info.description,
                                      items: e.list.items,
                                      ref:
                                        null !== (t = c[e.info.id]) &&
                                        void 0 !== t
                                          ? t
                                          : void 0,
                                    },
                                    e.info.id
                                  )
                                : (0, eg.jsx)(
                                    eC,
                                    {
                                      title: e.info.title,
                                      description: e.info.description,
                                      items: e.list.items,
                                      cutId: e.info.id,
                                      cursor:
                                        null !== (r = e.list.cursor) &&
                                        void 0 !== r
                                          ? r
                                          : void 0,
                                      ref:
                                        null !== (n = c[e.info.id]) &&
                                        void 0 !== n
                                          ? n
                                          : void 0,
                                    },
                                    e.info.id
                                  );
                            })) && void 0 !== r
                      ? r
                      : [],
                  ],
                }),
                (null == o ? void 0 : o.workspace_filtered) &&
                  (0, eg.jsx)(ek, {}),
              ],
            });
      }
      function eP() {
        return (0, eg.jsxs)("div", {
          className: "mb-6",
          children: [
            (0, eg.jsx)("div", {
              className:
                "my-2 text-center text-3xl font-bold md:my-4 md:text-5xl",
              children: (0, eg.jsx)(eo.Z, ey({}, eG.discoverySplashHeader)),
            }),
            (0, eg.jsx)("div", {
              className:
                "mx-auto w-full text-center text-sm font-light text-token-text-secondary md:text-lg md:leading-tight",
              children: (0, eg.jsx)(
                eo.Z,
                ey({}, eG.discoverySplashDescription)
              ),
            }),
          ],
        });
      }
      function ew(e) {
        var t = e.displayGroups,
          r = e.currentDisplayGroup,
          n = e.scrollToDisplayGroup,
          s = (0, x.useRef)(null),
          o = (0, x.useState)(!1),
          i = o[0],
          l = o[1],
          a = (0, x.useState)(!1),
          c = a[0],
          u = a[1];
        return (
          (0, x.useEffect)(
            function () {
              var e = s.current,
                t = function () {
                  null != e &&
                    (l(e.scrollLeft > 0),
                    u(e.scrollLeft + e.clientWidth < e.scrollWidth));
                };
              return (
                null == e || e.addEventListener("scroll", t),
                window.addEventListener("resize", t),
                t(),
                function () {
                  null == e || e.removeEventListener("scroll", t),
                    window.removeEventListener("resize", t);
                }
              );
            },
            [s]
          ),
          (0, eg.jsxs)("div", {
            className:
              "relative sticky top-14 z-10 mb-12 w-screen bg-white pb-2 text-sm dark:bg-gray-800 md:w-full md:pb-0",
            children: [
              i &&
                (0, eg.jsx)("div", {
                  className:
                    "absolute left-0 top-0 z-10 flex hidden h-full items-end bg-gradient-to-r from-white from-50% to-transparent pr-8 dark:from-gray-800 md:block",
                  children: (0, eg.jsx)("button", {
                    className:
                      "mt-2 rounded-full bg-gray-100 p-1 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600",
                    onClick: function () {
                      null != s.current &&
                        s.current.scrollBy({ left: -400, behavior: "smooth" });
                    },
                    children: (0, eg.jsx)(ex.FX, { className: "icon-sm" }),
                  }),
                }),
              (0, eg.jsx)("div", {
                className:
                  "no-scrollbar flex scroll-m-5 gap-1.5 overflow-x-auto md:overflow-hidden",
                ref: s,
                children: t.map(function (e) {
                  return (0, eg.jsx)(
                    "div",
                    {
                      className: (0, J.default)(
                        "cursor-pointer whitespace-nowrap rounded-3xl px-3 py-2 md:px-2",
                        e.id === (null == r ? void 0 : r.id)
                          ? "border-token-text-primary bg-black text-white dark:bg-gray-100 dark:text-gray-800 md:rounded-none md:border-b-2 md:bg-transparent md:text-black dark:md:bg-transparent dark:md:text-white"
                          : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 md:rounded-lg md:bg-transparent md:text-token-text-tertiary md:hover:bg-gray-50 dark:md:bg-transparent dark:md:hover:bg-gray-700"
                      ),
                      onClick: function () {
                        n(e);
                      },
                      children: e.name,
                    },
                    e.id
                  );
                }),
              }),
              c &&
                (0, eg.jsx)("div", {
                  className:
                    "absolute right-0 top-0 hidden h-full bg-gradient-to-l from-white from-50% to-transparent pl-8 dark:from-gray-800 md:block",
                  children: (0, eg.jsx)("button", {
                    className:
                      "mt-2 rounded-full bg-gray-100 p-1 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600",
                    onClick: function () {
                      null != s.current &&
                        s.current.scrollBy({ left: 400, behavior: "smooth" });
                    },
                    children: (0, eg.jsx)(ex.Gb, { className: "icon-sm" }),
                  }),
                }),
            ],
          })
        );
      }
      function ek() {
        var e = (0, ei.Z)(),
          t = (0, eu.$3)(),
          r = (0, p.tN)(function (e) {
            return e.isDesktopNavCollapsed;
          });
        return (0, eg.jsxs)("div", {
          className: (0, J.default)(
            "fixed bottom-0 flex w-full items-center justify-center gap-2 bg-gray-100 p-3 text-sm text-token-text-tertiary dark:bg-gray-700",
            !r && "md:w-[calc(100%-16rem)]"
          ),
          children: [
            (0, eg.jsx)(ex.Oz, { className: "icon-sm" }),
            e.formatMessage(eG.discoveryThirdPartyGPTsDisabled, {
              workspaceName: t,
            }),
          ],
        });
      }
      function ez(e) {
        var t = e.pageSearchRef,
          r = (0, v.AA)(),
          n = (0, en.useRouter)(),
          s = (0, x.useState)(!1),
          o = s[0],
          i = s[1];
        return (
          (0, x.useEffect)(
            function () {
              if (null == t || "function" == typeof t) {
                i(!0);
                return;
              }
              var e = null == t ? void 0 : t.current,
                r = new IntersectionObserver(
                  function (t) {
                    t.forEach(function (t) {
                      t.target === e && i(!t.isIntersecting);
                    });
                  },
                  { root: null, rootMargin: "20px", threshold: 1 }
                );
              return (
                null != e && r.observe(e),
                function () {
                  null != e && r.unobserve(e);
                }
              );
            },
            [t]
          ),
          (0, eg.jsx)(eg.Fragment, {
            children: (0, eg.jsxs)(d.QT, {
              className:
                "z-30 mx-auto flex w-full justify-center gap-2 whitespace-nowrap",
              children: [
                (0, eg.jsx)("div", { className: "w-[calc((100%-768px)/2)]" }),
                (0, eg.jsx)(eR, {
                  className: "max-w-3xl flex-grow",
                  inputClassName: (0, J.default)(
                    "h-10 text-sm pl-9",
                    !o && "hidden"
                  ),
                  iconClassName: "left-4",
                }),
                (0, eg.jsxs)("div", {
                  className:
                    "flex flex min-w-[calc((100%-768px)/2)] justify-end gap-2",
                  children: [
                    (0, eg.jsx)("button", {
                      color: "neutral",
                      onClick: function () {
                        n.push("/gpts/mine", void 0, { shallow: !0 }),
                          X.A.logEvent(K.M.storeMyGizmos);
                      },
                      className:
                        "rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600",
                      children: (0, eg.jsx)(eo.Z, ey({}, eG.discoveryMyGPTs)),
                    }),
                    (0, eg.jsxs)(c.z, {
                      color: "primary",
                      onClick: function () {
                        return X.A.logEvent(K.M.storeCreateGizmo);
                      },
                      className: "focus:ring-0 focus:ring-offset-0",
                      as: "link",
                      to: r,
                      openNewTab: !0,
                      children: [
                        (0, eg.jsx)(ex.Ro, { className: "icon-sm -mx-1" }),
                        (0, eg.jsx)(eo.Z, ey({}, eG.discoveryCreateGPT)),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var eS = (0, x.forwardRef)(function (e, t) {
        var r = e.title,
          n = e.description,
          s = e.items;
        return (0, eg.jsx)(e_, {
          title: r,
          description: n,
          ref: t,
          children: (0, eg.jsx)(ej, {
            children: s.map(function (e, t) {
              return (0, eg.jsx)(
                eE,
                { resource: e.resource },
                "".concat(t, "-").concat(e.resource.gizmo.id)
              );
            }),
          }),
        });
      });
      function eE(e) {
        var t,
          r,
          n,
          s = e.resource,
          o =
            null === (t = s.gizmo.vanity_metrics) || void 0 === t
              ? void 0
              : t.num_conversations_str;
        return (0, eg.jsx)(ef.h9, {
          children: (0, eg.jsxs)(er(), {
            href: (0, u.m_)(s),
            shallow: !0,
            className:
              "flex h-24 items-center gap-5 overflow-hidden rounded-xl bg-gray-50 px-7 py-8 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 md:h-32 lg:h-36",
            target: "_blank",
            children: [
              (0, eg.jsx)(ev.Z, {
                isFirstParty: !!(
                  null !== (r = s.gizmo.tags) &&
                  void 0 !== r &&
                  r.includes(f.U9.FirstParty)
                ),
                src:
                  null !== (n = s.gizmo.display.profile_picture_url) &&
                  void 0 !== n
                    ? n
                    : void 0,
                className: "h-16 w-16 flex-shrink-0 md:h-24 md:w-24",
              }),
              (0, eg.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, eg.jsx)("div", {
                    className: "font-medium line-clamp-2 md:text-lg",
                    children: s.gizmo.display.name,
                  }),
                  (0, eg.jsx)("span", {
                    className: "text-xs line-clamp-2 md:line-clamp-3",
                    children: s.gizmo.display.description,
                  }),
                  (0, eg.jsxs)("div", {
                    className:
                      "mt-1 flex justify-start gap-1 text-xs font-light text-token-text-tertiary line-clamp-1",
                    children: [
                      (0, eg.jsx)(ep.ZP, { gizmo: s, className: "text-xs" }),
                      o &&
                        (0, eg.jsxs)(eg.Fragment, {
                          children: [
                            (0, eg.jsx)("span", {
                              className: "text-[10px]",
                              children: "•",
                            }),
                            (0, eg.jsx)(ex.M4, { className: "mt-0.5 h-3 w-3" }),
                            o,
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var eC = (0, x.forwardRef)(function (e, t) {
        var r,
          n = e.items,
          s = e.title,
          o = e.description,
          i = e.cutId,
          l = e.cursor,
          a = (0, x.useState)(0 === n.length),
          d = a[0],
          f = a[1],
          p = (0, u.Fi)(i, 5, l, d),
          v = p.data,
          g = p.hasNextPage,
          h = p.fetchNextPage,
          y = p.isFetchingNextPage,
          b =
            null !==
              (r =
                null == v
                  ? void 0
                  : v.pages.flatMap(function (e) {
                      return e.list.items;
                    })) && void 0 !== r
              ? r
              : [];
        (0, x.useEffect)(
          function () {
            0 === n.length && h();
          },
          [h, n.length]
        );
        var j = (0, x.useState)(b.length),
          N = j[0],
          P = j[1],
          w = (0, x.useRef)(null),
          k = (function (
            e = 0.1,
            { startDelay: t = 0, from: r = 0, ease: n } = {}
          ) {
            return (s, o) => {
              let i =
                  "number" == typeof r
                    ? r
                    : (function (e, t) {
                        if ("first" === e) return 0;
                        {
                          let r = t - 1;
                          return "last" === e ? r : r / 2;
                        }
                      })(r, o),
                l = e * Math.abs(i - s);
              if (n) {
                let t = o * e,
                  r = (0, Q.R)(n);
                l = r(l / t) * t;
              }
              return t + l;
            };
          })(0.1);
        return (
          (0, x.useEffect)(
            function () {
              if (b.length > N) {
                var e;
                P(b.length),
                  null === (e = w.current) ||
                    void 0 === e ||
                    e.scrollIntoView({ behavior: "smooth", block: "nearest" });
              }
            },
            [b.length, N]
          ),
          (0, eg.jsxs)(e_, {
            title: s,
            description: o,
            ref: t,
            children: [
              (0, eg.jsxs)(ej, {
                children: [
                  n.map(function (e, t) {
                    return (0, eg.jsx)(
                      eM,
                      { resource: e.resource, rank: t + 1, cutId: i },
                      t
                    );
                  }),
                  b.map(function (e, t) {
                    return (0, eg.jsx)(
                      eM,
                      {
                        resource: e.resource,
                        rank: n.length + t + 1,
                        cutId: i,
                        delay: k(t - N, b.length - N),
                      },
                      t
                    );
                  }),
                ],
              }),
              (!d || g || y) &&
                null != l &&
                (0, eg.jsx)(c.z, {
                  color: "neutral",
                  onClick: function () {
                    f(!0),
                      X.A.publicEvent(K.M.storeLoadMore, { section: i }),
                      h();
                  },
                  className:
                    "mt-2 h-10 w-full focus:ring-0 focus:ring-offset-0 md:mt-3",
                  children: y
                    ? (0, eg.jsx)(m.Z, {})
                    : (0, eg.jsx)(eo.Z, ey({}, eG.discoveryLoadMore)),
                }),
              (0, eg.jsx)("div", { ref: w }),
            ],
          })
        );
      });
      function eM(e) {
        var t,
          r,
          n,
          s = e.resource,
          o = e.rank,
          i = e.cutId,
          l = e.delay,
          a =
            null === (t = s.gizmo.vanity_metrics) || void 0 === t
              ? void 0
              : t.num_conversations_str;
        return (0, eg.jsx)(ef.h9, {
          delay: l,
          children: (0, eg.jsxs)(
            er(),
            {
              href: (0, u.m_)(s),
              shallow: !0,
              className:
                "flex h-[104px] items-center gap-2.5 overflow-hidden rounded-xl px-1 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 md:px-3 md:py-4 lg:px-3",
              target: "_blank",
              onClick: function () {
                X.A.publicEvent(K.M.storeClickGizmo, {
                  gizmo_id: s.gizmo.id,
                  position: o,
                  section: i,
                });
              },
              children: [
                (0, eg.jsx)("div", {
                  className:
                    "text-md flex w-8 shrink-0 items-center justify-center font-semibold",
                  children: o,
                }),
                (0, eg.jsxs)("div", {
                  className:
                    "flex w-full flex-grow items-center gap-4 overflow-hidden",
                  children: [
                    (0, eg.jsx)(ev.Z, {
                      isFirstParty: !!(
                        null !== (r = s.gizmo.tags) &&
                        void 0 !== r &&
                        r.includes(f.U9.FirstParty)
                      ),
                      src:
                        null !== (n = s.gizmo.display.profile_picture_url) &&
                        void 0 !== n
                          ? n
                          : void 0,
                      className: "h-12 w-12 flex-shrink-0",
                    }),
                    (0, eg.jsxs)("div", {
                      className: "overflow-hidden text-ellipsis break-words",
                      children: [
                        (0, eg.jsx)("span", {
                          className:
                            "text-sm font-medium leading-tight line-clamp-2",
                          children: s.gizmo.display.name,
                        }),
                        (0, eg.jsx)("span", {
                          className: "text-xs line-clamp-3",
                          children: s.gizmo.display.description,
                        }),
                        (0, eg.jsxs)("div", {
                          className:
                            "mt-1 flex items-center gap-1 text-ellipsis whitespace-nowrap pr-1 text-xs text-token-text-tertiary",
                          children: [
                            (0, eg.jsx)(ep.ZP, {
                              gizmo: s,
                              className: "text-xs",
                            }),
                            a &&
                              (0, eg.jsxs)(eg.Fragment, {
                                children: [
                                  (0, eg.jsx)("span", {
                                    className: "text-[8px]",
                                    children: "•",
                                  }),
                                  (0, eg.jsx)(ex.M4, { className: "h-3 w-3" }),
                                  a,
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            s.gizmo.id
          ),
        });
      }
      var eR = (0, x.forwardRef)(function (e, t) {
          var r = e.className,
            n = e.inputClassName,
            s = e.iconClassName,
            o = (0, ei.Z)(),
            i = (0, x.useState)(""),
            l = i[0],
            a = i[1],
            c = (0, x.useState)(!1),
            u = c[0],
            d = c[1];
          return (0, eg.jsxs)(H, {
            as: "div",
            className: (0, J.default)("group relative rounded-xl", r),
            ref: t,
            children: [
              (0, eg.jsx)(es.jRj, {
                className: (0, J.default)(
                  "pointer-none absolute left-3 top-0 mr-2 h-full text-gray-500",
                  s
                ),
                size: 16,
              }),
              (0, eg.jsx)("input", {
                className: (0, J.default)(
                  "hover:dark-border-gray-500 z-10 w-full rounded-xl border border-gray-200 py-2 pr-3 font-normal outline-0 delay-100",
                  u
                    ? "border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                    : "hover:border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 hover:dark:bg-gray-700",
                  n
                ),
                placeholder: o.formatMessage(eG.discoverySearch),
                value: l,
                onChange: function (e) {
                  return a(e.target.value);
                },
                onFocus: function () {
                  d(!0), X.A.publicEvent(K.M.searchOpened);
                },
                onBlurCapture: function (e) {
                  var t, r;
                  (null !== (t = e.relatedTarget) &&
                    void 0 !== t &&
                    t.hasAttribute("href") &&
                    (null === (r = e.relatedTarget) || void 0 === r
                      ? void 0
                      : r.getAttribute("target")) === "_blank") ||
                    d(!1);
                },
              }),
              (0, eg.jsx)(ed.m, {
                show: u,
                children: (0, eg.jsx)(H.Panel, {
                  static: !0,
                  className:
                    "absolute top-[calc(100%-10px)] max-h-[calc(100vh-320px)] w-full overflow-y-auto rounded-lg rounded-t-none border border-t-0 border-gray-300 bg-white pb-2 pt-4 dark:border-gray-600 dark:bg-gray-700",
                  children: (0, eg.jsx)(eI, { query: l }),
                }),
              }),
            ],
          });
        }),
        eT = ea.Z.div(
          i ||
            (i = (0, a.Z)([
              "pb-2 px-4 text-xs font-medium text-token-text-tertiary",
            ]))
        );
      function eO() {
        return (0, eg.jsx)("div", {
          className: "flex items-center justify-center py-1",
          children: (0, eg.jsx)(m.Z, {}),
        });
      }
      function eI(e) {
        var t = e.query,
          r = (0, x.useState)(""),
          n = r[0],
          s = r[1],
          o = (0, x.useRef)((0, ec.Z)());
        (0, x.useEffect)(function () {
          X.A.publicEvent(K.M.searchStart);
        }, []),
          (0, x.useEffect)(
            function () {
              var e = setTimeout(function () {
                s(t);
              }, 250);
              return function () {
                clearTimeout(e);
              };
            },
            [t]
          );
        var i = (0, u.K9)(n),
          l = i.data,
          a = i.isLoading;
        (0, x.useEffect)(
          function () {
            !a &&
              l &&
              ((o.current = (0, ec.Z)()),
              l.items.length > 0
                ? Promise.all(
                    l.items.map(function (e, t) {
                      X.A.publicEvent(K.M.searchDisplayResult, {
                        search_id: o.current,
                        gizmo_id: e.gizmo.id,
                        position: t,
                        query: n,
                      });
                    })
                  )
                : X.A.publicEvent(K.M.searchNoResults, { query: n }));
          },
          [l, a, n]
        );
        var c = (0, u.Fi)("recent", 3),
          d = c.data,
          f = c.isLoading;
        if ("" === t) {
          if (f) return (0, eg.jsx)(eO, {});
          if (null != d) {
            var m = d.pages.flatMap(function (e) {
              return e.list.items;
            });
            return m.length > 0
              ? (0, eg.jsxs)(eg.Fragment, {
                  children: [
                    (0, eg.jsx)(eT, {
                      children: (0, eg.jsx)(
                        eo.Z,
                        ey({}, eG.discoverySearchRecentlyUsed)
                      ),
                    }),
                    m.map(function (e, r) {
                      return (0, eg.jsx)(
                        eZ,
                        {
                          searchId: o.current,
                          position: r,
                          query: t,
                          resource: e.resource,
                        },
                        e.resource.gizmo.id
                      );
                    }),
                  ],
                })
              : (0, eg.jsx)(eT, {
                  children: (0, eg.jsx)(
                    eo.Z,
                    ey({}, eG.discoverySearchRecentlyUsedEmpty)
                  ),
                });
          }
        }
        return a
          ? (0, eg.jsx)(eO, {})
          : l && 0 !== l.items.length
            ? (0, eg.jsxs)(eg.Fragment, {
                children: [
                  (0, eg.jsx)(eT, {
                    children: (0, eg.jsx)(
                      eo.Z,
                      ey({}, eG.discoverySearchResults)
                    ),
                  }),
                  l.items.map(function (e, r) {
                    return (0, eg.jsx)(
                      eZ,
                      {
                        searchId: o.current,
                        position: r,
                        resource: e,
                        query: t,
                      },
                      e.gizmo.id
                    );
                  }),
                ],
              })
            : (0, eg.jsx)("div", {
                className: "mx-2",
                children: (0, eg.jsx)(eT, {
                  children: (0, eg.jsx)(
                    eo.Z,
                    ey({}, eG.discoveryNoResultsSearch)
                  ),
                }),
              });
      }
      function eZ(e) {
        var t,
          r,
          n,
          s = e.searchId,
          o = e.resource,
          i = e.position,
          l = e.query,
          a =
            null === (t = o.gizmo.vanity_metrics) || void 0 === t
              ? void 0
              : t.num_conversations_str;
        return (0, eg.jsxs)(er(), {
          href: (0, u.m_)(o),
          className:
            "mx-2 flex gap-3 rounded-lg px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-600",
          target: "_blank",
          onClick: function () {
            X.A.publicEvent(K.M.storeClickGizmo, {
              search_id: s,
              gizmo_id: o.gizmo.id,
              position: i,
              query: l,
              section: "search",
            });
          },
          children: [
            (0, eg.jsx)(ev.Z, {
              isFirstParty: !!(
                null !== (r = o.gizmo.tags) &&
                void 0 !== r &&
                r.includes(f.U9.FirstParty)
              ),
              src:
                null !== (n = o.gizmo.display.profile_picture_url) &&
                void 0 !== n
                  ? n
                  : void 0,
              className: "h-8 w-8 shrink-0",
            }),
            (0, eg.jsxs)("div", {
              className: "flex flex-col truncate",
              children: [
                (0, eg.jsx)("span", {
                  className: "truncate text-sm font-medium",
                  children: o.gizmo.display.name,
                }),
                (0, eg.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    (0, eg.jsx)(ep.ZP, {
                      gizmo: o,
                      className: "truncate text-xs font-medium",
                      hideLink: !0,
                    }),
                    a &&
                      (0, eg.jsxs)(eg.Fragment, {
                        children: [
                          (0, eg.jsx)("span", {
                            className:
                              "text-[10px] font-light text-token-text-tertiary",
                            children: "•",
                          }),
                          (0, eg.jsxs)("div", {
                            className:
                              "flex items-center gap-1 font-medium text-token-text-tertiary",
                            children: [
                              (0, eg.jsx)(ex.M4, { className: "icon-sm" }),
                              (0, eg.jsx)("span", {
                                className: "text-xs line-clamp-1",
                                children: a,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var e_ = (0, x.forwardRef)(function (e, t) {
          var r = e.title,
            n = e.description,
            s = e.className,
            o = e.children;
          return (0, eg.jsxs)("div", {
            ref: t,
            className: "scroll-mt-24 last:h-[calc(100vh-6rem)]",
            children: [
              (0, eg.jsxs)(ef.h9, {
                animateTap: !1,
                children: [
                  (0, eg.jsx)("div", {
                    className: "text-xl font-medium md:text-2xl",
                    children: r,
                  }),
                  n &&
                    (0, eg.jsx)("div", {
                      className:
                        "text-sm text-token-text-tertiary md:text-base",
                      children: n,
                    }),
                ],
              }),
              (0, eg.jsx)("div", {
                className: (0, J.default)("mb-10 mt-4", s),
                children: o,
              }),
            ],
          });
        }),
        eG = (0, el.vU)({
          discoveryEmpty: {
            id: "gizmo.discovery.empty",
            defaultMessage: "Nothing to discover",
          },
          discoveryNoResultsSearch: {
            id: "gizmo.discovery.search.empty",
            defaultMessage: "No results found",
          },
          discoverySearch: {
            id: "gizmo.discovery.search",
            defaultMessage: "Search public GPTs",
          },
          discoverySearchRecentlyUsed: {
            id: "gizmo.discovery.search.recentlyUsed",
            defaultMessage: "Recently Used",
          },
          discoverySearchRecentlyUsedEmpty: {
            id: "gizmo.discovery.search.recentlyUsedEmpty",
            defaultMessage: "No recently used GPTs",
          },
          discoverySearchResults: {
            id: "gizmo.discovery.search.results",
            defaultMessage: "Search Results",
          },
          discoveryLoadMore: {
            id: "gizmo.discovery.loadMore",
            defaultMessage: "See more",
          },
          discoveryMyGPTs: {
            id: "gizmo.discovery.myGPTs",
            defaultMessage: "My GPTs",
          },
          discoveryCreateGPT: {
            id: "gizmo.discovery.createGPT",
            defaultMessage: "Create",
          },
          discoveryThirdPartyGPTsDisabled: {
            id: "gizmo.discovery.thirdPartyGPTsDisabled",
            defaultMessage:
              "Your admin has blocked GPTs created outside {workspaceName}.",
          },
          discoverySplashHeader: {
            id: "gizmo.discovery.splashHeader",
            defaultMessage: "GPTs",
          },
          discoverySplashDescription: {
            id: "gizmo.discovery.splashDescription",
            defaultMessage:
              "Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills.",
          },
        });
    },
    87942: function (e, t, r) {
      r.d(t, {
        b: function () {
          return d;
        },
      });
      var n = r(50134),
        s = r(4399),
        o = r.n(s),
        i = r(3554),
        l = r(21120),
        a = r(37097),
        c = r(4748),
        u = r(35250);
      function d(e) {
        var t,
          r = e.gizmoId,
          s = e.onSuccess,
          d = e.onClose,
          f = (0, a.kb)(),
          m =
            ((t = (0, n.Z)(
              o().mark(function e() {
                return o().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            f.mutateAsync({ gizmoId: r })
                          );
                        case 3:
                          s(), (e.next = 9);
                          break;
                        case 6:
                          (e.prev = 6),
                            (e.t0 = e.catch(0)),
                            c.m.danger(
                              "Failed to delete gizmo. Please try again."
                            );
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 6]]
                );
              })
            )),
            function () {
              return t.apply(this, arguments);
            });
        return (0, u.jsx)(l.Z, {
          isOpen: !0,
          onClose: d,
          type: "danger",
          title: "Delete GPT",
          primaryButton: (0, u.jsx)(i.ZP.Button, {
            title: "Delete GPT",
            color: "danger",
            loading: f.isPending,
            onClick: function () {
              m();
            },
          }),
          secondaryButton: (0, u.jsx)(i.ZP.Button, {
            title: "Cancel",
            color: "neutral",
            onClick: d,
          }),
          children: (0, u.jsx)("div", {
            className: "text-sm",
            children:
              "Are you sure you want to delete this GPT? This cannot be undone.",
          }),
        });
      }
    },
    61305: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return u;
        },
      });
      var n = r(49516),
        s = r(83562),
        o = r(35212),
        i = r(10721),
        l = r(8024),
        a = r(17080),
        c = r(35250);
      function u(e) {
        var t = e.children,
          r = (0, i.useRouter)();
        return (0, c.jsx)(o.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, c.jsxs)(s.ZP, {
            onNewThread: function () {
              r.push("/");
            },
            children: [
              (0, c.jsx)(a.Dy, {}),
              (0, c.jsx)(n.Z, { activeId: void 0 }),
            ],
          }),
          children: (0, c.jsx)(l.Z, { children: t }),
        });
      }
    },
    56685: function (e, t, r) {
      r.d(t, {
        a7: function () {
          return i;
        },
        at: function () {
          return G;
        },
        h9: function () {
          return T;
        },
        r1: function () {
          return I;
        },
      });
      var n,
        s,
        o,
        i,
        l = r(90038),
        a = r(90166),
        c = r(79505),
        u = r(25736),
        d = r(37097),
        f = r(5063),
        m = r(14711),
        p = r(49668),
        v = r(52336),
        x = r(9559);
      r(52467);
      var g = r(26369),
        h = r(28818),
        y = r(47428),
        b = r(19841),
        j = r(97296),
        N = r(73040),
        P = r.n(N),
        w = r(10721),
        k = r(70079),
        z = r(70671),
        S = r(94968),
        E = r(21389),
        C = r(65865),
        M = r(87942),
        R = r(35250);
      function T(e) {
        var t = e.delay,
          r = e.animateTap,
          n = e.children;
        return (0, R.jsx)(j.E.div, {
          whileTap: { scale: void 0 === r || r ? 0.98 : void 0 },
          initial: { opacity: 0, translateY: 5 },
          animate: {
            opacity: 1,
            translateY: 0,
            transition: {
              duration: 0.3,
              ease: "easeIn",
              delay: null != t ? t : 0,
            },
          },
          children: n,
        });
      }
      function O(e) {
        var t,
          r,
          n = e.gizmoResource,
          s =
            null === (t = n.gizmo.vanity_metrics) || void 0 === t
              ? void 0
              : t.num_conversations_str,
          o =
            null !== (r = n.gizmo.share_recipient) && void 0 !== r
              ? r
              : v.Zz.Private,
          i = (0, x.XA)(o),
          l = (0, z.Z)();
        return (0, R.jsxs)("div", {
          children: [
            n.gizmo.share_recipient !== v.Zz.Private && null != s
              ? (0, R.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, R.jsx)(f.M4, { className: "icon-sm" }),
                    (0, R.jsx)("span", {
                      children: l.formatMessage(F.conversationCountStrLabel, {
                        numConvos: s,
                      }),
                    }),
                  ],
                })
              : void 0,
            (0, R.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [
                o === v.Zz.Link || o === v.Zz.Marketplace
                  ? (0, R.jsx)(f.Ao, { className: "icon-sm" })
                  : o === v.Zz.Workspace
                    ? (0, R.jsx)(f.oq, { className: "icon-sm" })
                    : (0, R.jsx)(f.LX, { className: "icon-sm" }),
                (0, R.jsx)("span", { className: "line-clamp-1", children: i }),
              ],
            }),
          ],
        });
      }
      function I(e) {
        var t,
          r,
          n,
          s = e.gizmoResource,
          o = e.canRemoveRecent,
          i = (0, w.useRouter)(),
          l = (0, x.XX)(s),
          m = (0, d.Sg)(s),
          p = !!(null === (t = s.gizmo.tags) || void 0 === t
            ? void 0
            : t.includes(v.U9.FirstParty));
        return (0, R.jsx)(A, {
          href: m ? (0, h.AA)(s.gizmo.id) : (0, d.m_)(s),
          icon: (0, R.jsx)(c.Z, {
            isFirstParty: p,
            src:
              null !==
                (r =
                  null == s ? void 0 : s.gizmo.display.profile_picture_url) &&
              void 0 !== r
                ? r
                : void 0,
            className: "h-[42px] w-[42px] flex-shrink-0",
          }),
          title: s.gizmo.display.name || u.zf,
          isDraft: m,
          description:
            null !== (n = s.gizmo.display.description) && void 0 !== n ? n : "",
          byline: l
            ? (0, R.jsx)(O, { gizmoResource: s })
            : (0, R.jsx)(C.ZP, { gizmo: s }),
          buttons: (0, R.jsxs)(R.Fragment, {
            children: [
              l &&
                (0, R.jsx)(a.u, {
                  label: "Edit GPT",
                  className: "flex justify-center",
                  side: "top",
                  children: (0, R.jsx)("button", {
                    className:
                      "rounded-lg px-3 py-2 text-token-text-primary transition-transform duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",
                    onClick: function () {
                      i.push((0, h.AA)(s.gizmo.id), void 0, { shallow: !0 });
                    },
                    children: (0, R.jsx)(f.eu, { className: "icon-sm" }),
                  }),
                }),
              (0, R.jsx)(D, {
                gizmoResource: s,
                isOwner: l,
                canRemoveRecent: o,
              }),
            ],
          }),
        });
      }
      function Z() {
        return (0, R.jsx)("span", {
          className:
            "rounded-full bg-blue-100 px-1.5 py-0.5 text-[10px] font-medium text-blue-600",
          children: "Beta",
        });
      }
      ((o || (o = {})).Grid1 = "grid-1"),
        ((n = i || (i = {})).Enabled = "enabled"),
        (n.ComingSoon = "coming-soon");
      var _ = E.Z.div(
        s ||
          (s = (0, l.Z)([
            "flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full border border-dashed\n",
            "",
          ])),
        function (e) {
          return e.$disabled
            ? ""
            : "border-black bg-white dark:border-gray-500 dark:bg-gray-700";
        }
      );
      function G(e) {
        var t = e.type,
          r = (0, h.J8)(),
          n = t === i.ComingSoon;
        return (0, R.jsxs)(a.E, {
          disabled: !n,
          label: "GPT creation will be available in the coming weeks",
          children: [
            (0, R.jsx)(A, {
              href: r,
              disabled: n,
              icon: (0, R.jsx)(_, {
                $disabled: n,
                children: (0, R.jsx)(f.Ro, {
                  className: (0, b.default)("icon-sm", n && "opacity-30"),
                }),
              }),
              title: (0, R.jsxs)("div", {
                className: "flex items-center gap-1",
                children: ["Create a GPT ", (0, R.jsx)(Z, {})],
              }),
              description:
                "Customize a version of ChatGPT for a specific purpose",
              byline: n
                ? (0, R.jsx)("div", {
                    className: "flex items-center justify-end",
                    children: (0, R.jsx)("div", {
                      className: "flex items-center",
                      children: "Coming soon",
                    }),
                  })
                : void 0,
            }),
            (0, R.jsx)("div", {
              className: "h-px bg-gray-100 dark:bg-gray-700",
            }),
          ],
        });
      }
      function A(e) {
        var t = e.href,
          r = e.icon,
          n = e.title,
          s = e.isDraft,
          o = e.description,
          i = e.byline,
          l = e.buttons,
          c = e.disabled,
          u = e.className,
          d = (0, b.default)(
            "flex items-center px-2 py-4 rounded-xl",
            c ? "" : "hover:bg-gray-50 dark:hover:bg-gray-700",
            u
          ),
          f = (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsxs)("div", {
                className:
                  "flex grow items-center overflow-hidden md:w-3/5 md:grow-0",
                children: [
                  r,
                  (0, R.jsxs)("div", {
                    className: (0, b.default)(
                      "grow overflow-hidden pl-4 pr-9 leading-tight",
                      c ? "opacity-50" : "hover:cursor-pointer"
                    ),
                    children: [
                      (0, R.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, R.jsx)("span", {
                            className: "font-medium",
                            children: n,
                          }),
                          void 0 !== s &&
                            s &&
                            (0, R.jsx)(a.u, {
                              label: "Draft",
                              className: "flex justify-center",
                              side: "top",
                              children: (0, R.jsx)("div", {
                                className:
                                  "m-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-600",
                              }),
                            }),
                        ],
                      }),
                      (0, R.jsx)("div", {
                        className:
                          "overflow-hidden text-ellipsis break-words text-sm line-clamp-2",
                        children: o,
                      }),
                      null != i &&
                        (0, R.jsx)("div", {
                          className:
                            "text-ellipsis text-sm text-gray-500 md:hidden",
                          children: i,
                        }),
                    ],
                  }),
                ],
              }),
              null != i &&
                (0, R.jsx)("div", {
                  className:
                    "hidden flex-1 text-ellipsis text-sm text-gray-500 md:block",
                  children: i,
                }),
              null != l &&
                (0, R.jsx)("div", {
                  onClick: function (e) {
                    e.preventDefault();
                  },
                  onPointerDownCapture: function (e) {
                    e.stopPropagation();
                  },
                  className:
                    "flex h-9 shrink-0 justify-end gap-2 font-medium md:w-[100px]",
                  children: l,
                }),
            ],
          });
        return c
          ? (0, R.jsx)(T, {
              children: (0, R.jsx)("span", { className: d, children: f }),
            })
          : (0, R.jsx)(T, {
              children: (0, R.jsx)(P(), {
                className: d,
                href: t,
                shallow: !0,
                children: f,
              }),
            });
      }
      function D(e) {
        var t = e.gizmoResource,
          r = e.isOwner,
          n = e.canRemoveRecent,
          s = (0, k.useState)(!1),
          o = s[0],
          i = s[1],
          l = (0, k.useState)(!1),
          a = l[0],
          c = l[1];
        return r || n
          ? (0, R.jsxs)(R.Fragment, {
              children: [
                (0, R.jsxs)(y.fC, {
                  open: a,
                  onOpenChange: function (e) {
                    return c(e);
                  },
                  children: [
                    (0, R.jsx)(y.xz, {
                      asChild: !0,
                      children: (0, R.jsx)("button", {
                        color: "neutral",
                        className:
                          "rounded-lg bg-transparent px-3 py-2 text-token-text-primary duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",
                        onClick: function () {
                          c(function (e) {
                            return !e;
                          });
                        },
                        children: (0, R.jsx)(f.Yr, { className: "icon-md" }),
                      }),
                    }),
                    (0, R.jsx)(y.Uv, {
                      children: (0, R.jsxs)(y.VY, {
                        className:
                          "min-w-[180px] max-w-xs rounded-lg border border-gray-100 bg-token-surface-primary shadow-lg dark:border-gray-700",
                        side: "top",
                        align: "end",
                        sideOffset: 6,
                        onClick: function (e) {
                          e.preventDefault();
                        },
                        children: [
                          r
                            ? (0, R.jsxs)(p.UA, {
                                color: "danger",
                                onClick: function () {
                                  i(!0);
                                },
                                children: [
                                  (0, R.jsx)(f.a_, { className: "icon-md" }),
                                  "Delete GPT",
                                ],
                              })
                            : (0, R.jsx)(R.Fragment, {}),
                          n &&
                            (0, R.jsx)(p.UA, {
                              onClick: function () {
                                m.U.removeFromRecent(t.gizmo.id);
                              },
                              children: "Remove from Recent",
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                o &&
                  (0, R.jsx)(g.h, {
                    children: (0, R.jsx)(M.b, {
                      gizmoId: t.gizmo.id,
                      onSuccess: function () {
                        i(!1);
                      },
                      onClose: function () {
                        i(!1);
                      },
                    }),
                  }),
              ],
            })
          : null;
      }
      var F = (0, S.vU)({
        conversationCountStrLabel: {
          id: "gizmo.gpt.grid.conversationCountStrLabel",
          defaultMessage: "{numConvos} Chats",
        },
      });
    },
  },
]);
