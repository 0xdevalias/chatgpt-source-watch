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
        o = r(7144),
        s = r(1890),
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
          t = (0, o.t)(),
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
          t.features.includes(s.L0.GizmoStore) &&
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
          o = e.cursor,
          s = e.canRemoveRecent,
          i = e.createRowType;
        return (0, x.jsxs)(v.b1, {
          title: r,
          children: [
            null != i && (0, x.jsx)(m.at, { type: i }),
            n.map(function (e) {
              return (0, x.jsx)(
                m.r1,
                { gizmoResource: e.resource, canRemoveRecent: s },
                e.resource.gizmo.id
              );
            }),
            null != o &&
              (0, x.jsx)(b, {
                cutId: t,
                cursor: o,
                fetchOnMount: 0 === n.length,
              }),
          ],
        });
      }
      function b(e) {
        var t = e.cutId,
          r = e.cursor,
          o = e.fetchOnMount,
          s = (0, a.useState)(o),
          i = s[0],
          l = s[1],
          u = (0, p.Fi)(t, void 0, 8, r, i),
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
        w = r(3359),
        N = r(36638);
      function k(e) {
        var t = e.children,
          r = (0, o.t)();
        return null == r
          ? null
          : r.canInteractWithGizmos()
            ? (0, x.jsxs)("div", {
                children: [
                  t,
                  (0, x.jsx)("div", {
                    className: "fixed bottom-3 right-3",
                    children: (0, x.jsx)(w.Z, {}),
                  }),
                ],
              })
            : r.hasPaidSubscription()
              ? null
              : (0, x.jsx)(P, {
                  button: (0, x.jsx)(d.z, {
                    onClick: function () {
                      return (0, N.MG)();
                    },
                    children: "Upgrade to ChatGPT Plus",
                  }),
                  children: "GPTs are gradually rolling out to Plus users",
                });
      }
      function P(e) {
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
          children: (0, x.jsx)(k, { children: (0, x.jsx)(h, {}) }),
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
        o = r(29703),
        s = r(14972),
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
            (0, d.jsx)(o.N, { gizmo: t }),
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
          children: (0, d.jsx)(s.nI, { className: "h-8 w-8" }),
        });
      }
    },
    94734: function (e, t, r) {
      r.d(t, {
        fN: function () {
          return ek;
        },
        b1: function () {
          return eL;
        },
      });
      var n,
        o,
        s,
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
        w = r(28595),
        N = r(29787),
        k = r(37068),
        P = r(19992),
        z = r(53315),
        S = r(52327),
        E = r(46789),
        O = r(48442),
        C = r(98992),
        M = r(17575),
        R = r(70794),
        T =
          (((n = T || {})[(n.Open = 0)] = "Open"),
          (n[(n.Closed = 1)] = "Closed"),
          n),
        I =
          (((o = I || {})[(o.TogglePopover = 0)] = "TogglePopover"),
          (o[(o.ClosePopover = 1)] = "ClosePopover"),
          (o[(o.SetButton = 2)] = "SetButton"),
          (o[(o.SetButtonId = 3)] = "SetButtonId"),
          (o[(o.SetPanel = 4)] = "SetPanel"),
          (o[(o.SetPanelId = 5)] = "SetPanelId"),
          o);
      let G = {
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
        Z = (0, x.createContext)(null);
      function A(e) {
        let t = (0, x.useContext)(Z);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, A), t);
        }
        return t;
      }
      Z.displayName = "PopoverContext";
      let L = (0, x.createContext)(null);
      function _(e) {
        let t = (0, x.useContext)(L);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, _), t);
        }
        return t;
      }
      L.displayName = "PopoverAPIContext";
      let D = (0, x.createContext)(null);
      function F() {
        return (0, x.useContext)(D);
      }
      D.displayName = "PopoverGroupContext";
      let B = (0, x.createContext)(null);
      function U(e, t) {
        return (0, g.E)(t.type, G, e, t);
      }
      B.displayName = "PopoverPanelContext";
      let V = (0, h.yV)(function (e, t) {
          var r;
          let n = `headlessui-popover-button-${(0, b.M)()}`,
            o = `headlessui-popover-panel-${(0, b.M)()}`,
            s = (0, x.useRef)(null),
            i = (0, y.T)(
              t,
              (0, y.h)((e) => {
                s.current = e;
              })
            ),
            l = (0, x.useReducer)(U, {
              popoverState: 1,
              button: null,
              buttonId: n,
              panel: null,
              panelId: o,
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
            p = (0, E.i)(null != (r = s.current) ? r : c);
          (0, x.useEffect)(() => m({ type: 3, buttonId: n }), [n, m]),
            (0, x.useEffect)(() => m({ type: 5, panelId: o }), [o, m]);
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
              () => ({ buttonId: n, panelId: o, close: () => m({ type: 1 }) }),
              [n, o, m]
            ),
            w = F(),
            P = null == w ? void 0 : w.registerPopover,
            S = (0, M.z)(() => {
              var e;
              return null !=
                (e = null == w ? void 0 : w.isFocusWithinPopoverGroup())
                ? e
                : (null == p ? void 0 : p.activeElement) &&
                    ((null == c ? void 0 : c.contains(p.activeElement)) ||
                      (null == u ? void 0 : u.contains(p.activeElement)));
            });
          (0, x.useEffect)(() => (null == P ? void 0 : P(j)), [P, j]),
            (0, O.O)(
              null == p ? void 0 : p.defaultView,
              "focus",
              (e) => {
                var t, r, n, o;
                0 === a &&
                  (S() ||
                    !c ||
                    !u ||
                    (null !=
                      (r = null == (t = d.current) ? void 0 : t.contains) &&
                      r.call(t, e.target)) ||
                    (null !=
                      (o = null == (n = f.current) ? void 0 : n.contains) &&
                      o.call(n, e.target)) ||
                    m({ type: 1 }));
              },
              !0
            ),
            (0, z.O)(
              [c, u],
              (e, t) => {
                m({ type: 1 }),
                  (0, N.sP)(t, N.tJ.Loose) ||
                    (e.preventDefault(), null == c || c.focus());
              },
              0 === a
            );
          let C = (0, M.z)((e) => {
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
            R = (0, x.useMemo)(() => ({ close: C, isPortalled: v }), [C, v]),
            T = (0, x.useMemo)(() => ({ open: 0 === a, close: C }), [a, C]);
          return x.createElement(
            Z.Provider,
            { value: l },
            x.createElement(
              L.Provider,
              { value: R },
              x.createElement(
                k.up,
                { value: (0, g.E)(a, { 0: k.ZM.Open, 1: k.ZM.Closed }) },
                (0, h.sY)({
                  ourProps: { ref: i },
                  theirProps: e,
                  slot: T,
                  defaultTag: "div",
                  name: "Popover",
                })
              )
            )
          );
        }),
        q = (0, h.yV)(function (e, t) {
          let [r, n] = A("Popover.Button"),
            { isPortalled: o } = _("Popover.Button"),
            s = (0, x.useRef)(null),
            i = `headlessui-focus-sentinel-${(0, b.M)()}`,
            l = F(),
            a = null == l ? void 0 : l.closeOthers,
            c = (0, x.useContext)(B),
            u = null !== c && c === r.panelId,
            d = (0, y.T)(s, t, u ? null : (e) => n({ type: 2, button: e })),
            f = (0, y.T)(s, t),
            m = (0, E.i)(s),
            p = (0, M.z)((e) => {
              var t, o, i;
              if (u) {
                if (1 === r.popoverState) return;
                switch (e.key) {
                  case j.R.Space:
                  case j.R.Enter:
                    e.preventDefault(),
                      null == (o = (t = e.target).click) || o.call(t),
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
                      !s.current ||
                      ((null == m ? void 0 : m.activeElement) &&
                        !s.current.contains(m.activeElement))
                    )
                      return;
                    e.preventDefault(), e.stopPropagation(), n({ type: 1 });
                }
            }),
            v = (0, M.z)((e) => {
              u || (e.key === j.R.Space && e.preventDefault());
            }),
            k = (0, M.z)((t) => {
              var o, s;
              (0, w.P)(t.currentTarget) ||
                e.disabled ||
                (u
                  ? (n({ type: 1 }), null == (o = r.button) || o.focus())
                  : (t.preventDefault(),
                    t.stopPropagation(),
                    1 === r.popoverState && (null == a || a(r.buttonId)),
                    n({ type: 0 }),
                    null == (s = r.button) || s.focus()));
            }),
            z = (0, M.z)((e) => {
              e.preventDefault(), e.stopPropagation();
            }),
            S = 0 === r.popoverState,
            O = (0, x.useMemo)(() => ({ open: S }), [S]),
            T = (0, P.f)(e, s),
            I = u
              ? { ref: f, type: T, onKeyDown: p, onClick: k }
              : {
                  ref: d,
                  id: r.buttonId,
                  type: T,
                  "aria-expanded": e.disabled ? void 0 : 0 === r.popoverState,
                  "aria-controls": r.panel ? r.panelId : void 0,
                  onKeyDown: p,
                  onKeyUp: v,
                  onClick: k,
                  onMouseDown: z,
                },
            G = (0, R.l)(),
            Z = (0, M.z)(() => {
              let e = r.panel;
              e &&
                (0, g.E)(G.current, {
                  [R.N.Forwards]: () => (0, N.jA)(e, N.TO.First),
                  [R.N.Backwards]: () => (0, N.jA)(e, N.TO.Last),
                });
            });
          return x.createElement(
            x.Fragment,
            null,
            (0, h.sY)({
              ourProps: I,
              theirProps: e,
              slot: O,
              defaultTag: "button",
              name: "Popover.Button",
            }),
            S &&
              !u &&
              o &&
              x.createElement(C._, {
                id: i,
                features: C.A.Focusable,
                as: "button",
                type: "button",
                onFocus: Z,
              })
          );
        }),
        $ = h.AN.RenderStrategy | h.AN.Static,
        Y = (0, h.yV)(function (e, t) {
          let [{ popoverState: r }, n] = A("Popover.Overlay"),
            o = (0, y.T)(t),
            s = `headlessui-popover-overlay-${(0, b.M)()}`,
            i = (0, k.oJ)(),
            l = null !== i ? i === k.ZM.Open : 0 === r,
            a = (0, M.z)((e) => {
              if ((0, w.P)(e.currentTarget)) return e.preventDefault();
              n({ type: 1 });
            }),
            c = (0, x.useMemo)(() => ({ open: 0 === r }), [r]);
          return (0, h.sY)({
            ourProps: { ref: o, id: s, "aria-hidden": !0, onClick: a },
            theirProps: e,
            slot: c,
            defaultTag: "div",
            features: $,
            visible: l,
            name: "Popover.Overlay",
          });
        }),
        H = h.AN.RenderStrategy | h.AN.Static,
        W = Object.assign(V, {
          Button: q,
          Overlay: Y,
          Panel: (0, h.yV)(function (e, t) {
            let { focus: r = !1, ...n } = e,
              [o, s] = A("Popover.Panel"),
              { close: i, isPortalled: l } = _("Popover.Panel"),
              a = `headlessui-focus-sentinel-before-${(0, b.M)()}`,
              c = `headlessui-focus-sentinel-after-${(0, b.M)()}`,
              u = (0, x.useRef)(null),
              d = (0, y.T)(u, t, (e) => {
                s({ type: 4, panel: e });
              }),
              f = (0, E.i)(u),
              m = (0, k.oJ)(),
              p = null !== m ? m === k.ZM.Open : 0 === o.popoverState,
              v = (0, M.z)((e) => {
                var t;
                if (e.key === j.R.Escape) {
                  if (
                    0 !== o.popoverState ||
                    !u.current ||
                    ((null == f ? void 0 : f.activeElement) &&
                      !u.current.contains(f.activeElement))
                  )
                    return;
                  e.preventDefault(),
                    e.stopPropagation(),
                    s({ type: 1 }),
                    null == (t = o.button) || t.focus();
                }
              });
            (0, x.useEffect)(() => {
              var t;
              e.static ||
                (1 === o.popoverState &&
                  (null == (t = e.unmount) || t) &&
                  s({ type: 4, panel: null }));
            }, [o.popoverState, e.unmount, e.static, s]),
              (0, x.useEffect)(() => {
                if (!r || 0 !== o.popoverState || !u.current) return;
                let e = null == f ? void 0 : f.activeElement;
                u.current.contains(e) || (0, N.jA)(u.current, N.TO.First);
              }, [r, u, o.popoverState]);
            let w = (0, x.useMemo)(
                () => ({ open: 0 === o.popoverState, close: i }),
                [o, i]
              ),
              P = {
                ref: d,
                id: o.panelId,
                onKeyDown: v,
                onBlur:
                  r && 0 === o.popoverState
                    ? (e) => {
                        var t, r, n, i, l;
                        let a = e.relatedTarget;
                        !a ||
                          !u.current ||
                          (null != (t = u.current) && t.contains(a)) ||
                          (s({ type: 1 }),
                          ((null ==
                          (n =
                            null == (r = o.beforePanelSentinel.current)
                              ? void 0
                              : r.contains)
                            ? void 0
                            : n.call(r, a)) ||
                            (null ==
                            (l =
                              null == (i = o.afterPanelSentinel.current)
                                ? void 0
                                : i.contains)
                              ? void 0
                              : l.call(i, a))) &&
                            a.focus({ preventScroll: !0 }));
                      }
                    : void 0,
                tabIndex: -1,
              },
              z = (0, R.l)(),
              S = (0, M.z)(() => {
                let e = u.current;
                e &&
                  (0, g.E)(z.current, {
                    [R.N.Forwards]: () => {
                      (0, N.jA)(e, N.TO.First);
                    },
                    [R.N.Backwards]: () => {
                      var e;
                      null == (e = o.button) || e.focus({ preventScroll: !0 });
                    },
                  });
              }),
              O = (0, M.z)(() => {
                let e = u.current;
                e &&
                  (0, g.E)(z.current, {
                    [R.N.Forwards]: () => {
                      var e, t, r;
                      if (!o.button) return;
                      let n = (0, N.GO)(),
                        s = n.indexOf(o.button),
                        i = n.slice(0, s + 1),
                        l = [...n.slice(s + 1), ...i];
                      for (let n of l.slice())
                        if (
                          (null ==
                          (t =
                            null == (e = null == n ? void 0 : n.id)
                              ? void 0
                              : e.startsWith)
                            ? void 0
                            : t.call(e, "headlessui-focus-sentinel-")) ||
                          (null == (r = o.panel) ? void 0 : r.contains(n))
                        ) {
                          let e = l.indexOf(n);
                          -1 !== e && l.splice(e, 1);
                        }
                      (0, N.jA)(l, N.TO.First, !1);
                    },
                    [R.N.Backwards]: () => (0, N.jA)(e, N.TO.Last),
                  });
              });
            return x.createElement(
              B.Provider,
              { value: o.panelId },
              p &&
                l &&
                x.createElement(C._, {
                  id: a,
                  ref: o.beforePanelSentinel,
                  features: C.A.Focusable,
                  as: "button",
                  type: "button",
                  onFocus: S,
                }),
              (0, h.sY)({
                ourProps: P,
                theirProps: n,
                slot: w,
                defaultTag: "div",
                features: H,
                visible: p,
                name: "Popover.Panel",
              }),
              p &&
                l &&
                x.createElement(C._, {
                  id: c,
                  ref: o.afterPanelSentinel,
                  features: C.A.Focusable,
                  as: "button",
                  type: "button",
                  onFocus: O,
                })
            );
          }),
          Group: (0, h.yV)(function (e, t) {
            let r = (0, x.useRef)(null),
              n = (0, y.T)(r, t),
              [o, s] = (0, x.useState)([]),
              i = (0, M.z)((e) => {
                s((t) => {
                  let r = t.indexOf(e);
                  if (-1 !== r) {
                    let e = t.slice();
                    return e.splice(r, 1), e;
                  }
                  return t;
                });
              }),
              l = (0, M.z)((e) => (s((t) => [...t, e]), () => i(e))),
              a = (0, M.z)(() => {
                var e;
                let t = (0, S.r)(r);
                if (!t) return !1;
                let n = t.activeElement;
                return (
                  !!(null != (e = r.current) && e.contains(n)) ||
                  o.some((e) => {
                    var r, o;
                    return (
                      (null == (r = t.getElementById(e.buttonId))
                        ? void 0
                        : r.contains(n)) ||
                      (null == (o = t.getElementById(e.panelId))
                        ? void 0
                        : o.contains(n))
                    );
                  })
                );
              }),
              c = (0, M.z)((e) => {
                for (let t of o) t.buttonId !== e && t.close();
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
              D.Provider,
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
        J = r(69101),
        Q = r(19841),
        ee = r(43356),
        et = r(61888),
        er = r(73040),
        en = r.n(er),
        eo = r(10721),
        es = r(1454),
        ei = r(32004),
        el = r(70671),
        ea = r(94968),
        ec = r(21389),
        eu = r(8844),
        ed = r(218),
        ef = r(90166),
        em = r(41202),
        ep = r(56685),
        ev = r(85528),
        ex = r(65865),
        eg = r(79505),
        eh = r(5063),
        ey = r(35250);
      function eb(e, t) {
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
      function ej(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eb(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eb(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function ew(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var eN = ec.Z.div(
        s ||
          (s = (0, a.Z)([
            "grid grid-cols-1 gap-x-1.5 gap-y-1 md:gap-x-2 md:gap-y-1.5 lg:grid-cols-2 lg:gap-x-3 lg:gap-y-2.5",
          ]))
      );
      function ek(e) {
        var t,
          r,
          n,
          o = e.anon,
          s = (0, x.useState)(function () {
            return J.m.getItem(J.F.GizmoDiscoveryLocale);
          }),
          i = s[0],
          a = s[1],
          c = function (e) {
            a(e), J.m.setItem(J.F.GizmoDiscoveryLocale, e);
          },
          d = (0, u.z5)(i),
          f = d.data,
          p = d.isLoading,
          g =
            null !== (t = null == f ? void 0 : f.locale) && void 0 !== t
              ? t
              : i,
          h = (0, x.useState)({}),
          y = h[0],
          b = h[1],
          j = (0, x.useState)({}),
          w = j[0],
          N = j[1],
          k = (0, x.useMemo)(
            function () {
              return (0, et.uniqBy)(
                (0, et.compact)(
                  null == f
                    ? void 0
                    : f.cuts.map(function (e) {
                        return { id: e.info.id, name: e.info.display_group };
                      })
                ),
                "name"
              );
            },
            [f]
          ),
          P = (0, x.useRef)(null),
          z =
            null !==
              (r = k.find(function (e) {
                return w[e.id];
              })) && void 0 !== r
              ? r
              : k[0];
        (0, x.useEffect)(
          function () {
            b(function (e) {
              var t = {};
              return (
                k.forEach(function (r) {
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
          [k]
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
                                if ("string" == typeof e) return ew(e, t);
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
                                  return ew(e, t);
                              }
                            })(e))
                          ) {
                            r && (e = r);
                            var n = 0,
                              o = function () {};
                            return {
                              s: o,
                              n: function () {
                                return n >= e.length
                                  ? { done: !0 }
                                  : { done: !1, value: e[n++] };
                              },
                              e: function (e) {
                                throw e;
                              },
                              f: o,
                            };
                          }
                          throw TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        }
                        var s,
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
                            (l = !0), (s = e);
                          },
                          f: function () {
                            try {
                              i || null == r.return || r.return();
                            } finally {
                              if (l) throw s;
                            }
                          },
                        };
                      })(k);
                    try {
                      for (r.s(); !(t = r.n()).done; ) {
                        var n = (function () {
                          var r = t.value,
                            n = y[r.id];
                          if (null == n || "function" == typeof n)
                            return { v: void 0 };
                          (null == n ? void 0 : n.current) != null &&
                            e.target === n.current &&
                            N(function (t) {
                              return ej(
                                ej({}, t),
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
                Object.values(y).forEach(function (t) {
                  "function" != typeof t &&
                    (null == t ? void 0 : t.current) != null &&
                    e.observe(t.current);
                }),
                function () {
                  Object.values(y).forEach(function (t) {
                    "function" != typeof t &&
                      (null == t ? void 0 : t.current) != null &&
                      e.unobserve(t.current);
                  });
                }
              );
            },
            [y, k]
          );
        var S = (0, x.useRef)(null),
          E = (0, x.useRef)(null),
          O = (0, x.useState)(0),
          C = O[0],
          M = O[1];
        return ((0, x.useEffect)(
          function () {
            var e = E.current,
              t = function () {
                null != e && M(e.scrollTop);
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
          [E, M]
        ),
        p)
          ? (0, ey.jsxs)(ey.Fragment, {
              children: [
                o
                  ? (0, ey.jsx)(ev.S, {
                      redirectUrl: (0, v.cy)(),
                      className:
                        "sticky top-0 z-30 h-14 bg-white dark:bg-gray-800",
                    })
                  : (0, ey.jsx)(eE, { locale: g, setLocale: c }),
                (0, ey.jsx)("div", {
                  className: "flex h-full w-full items-center justify-center",
                  children: (0, ey.jsx)(m.Z, {}),
                }),
              ],
            })
          : (0, ey.jsxs)("div", {
              ref: E,
              className: "h-full overflow-y-auto",
              children: [
                o
                  ? (0, ey.jsx)(ev.S, {
                      redirectUrl: (0, v.cy)(),
                      className:
                        "sticky top-0 z-30 h-14 bg-white dark:bg-gray-800",
                    })
                  : (0, ey.jsx)(eE, {
                      pageSearchRef: S,
                      locale: g,
                      setLocale: c,
                    }),
                (0, ey.jsxs)("div", {
                  className: "mx-auto max-w-3xl overflow-x-clip px-4",
                  children: [
                    (0, ey.jsx)(eP, {}),
                    !o &&
                      (0, ey.jsx)(eT, {
                        ref: S,
                        className:
                          "z-20 mb-6 mt-2 flex-grow shadow-[0px_10px_10px_-6px_rgba(0,0,0,0.04)]",
                        inputClassName: "md:h-14 h-12 text-base pl-12",
                        iconClassName: "left-6",
                        resultsSizeOffset: Math.min(C - 260, -110),
                      }),
                    k.length > 1 &&
                      (0, ey.jsx)(ez, {
                        displayGroups: k,
                        currentDisplayGroup: z,
                        scrollToDisplayGroup: function (e) {
                          var t,
                            r,
                            n = null !== (t = y[e.id]) && void 0 !== t ? t : P;
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
                    (0, ey.jsx)("div", { ref: P, className: "scroll-mt-28" }),
                    null !==
                      (n =
                        null == f
                          ? void 0
                          : f.cuts.map(function (e) {
                              var t, r, n;
                              return "featured" === e.info.display_type
                                ? (0, ey.jsx)(
                                    eO,
                                    {
                                      info: e.info,
                                      items: e.list.items,
                                      ref:
                                        null !== (t = y[e.info.id]) &&
                                        void 0 !== t
                                          ? t
                                          : void 0,
                                    },
                                    e.info.id
                                  )
                                : (0, ey.jsx)(
                                    eM,
                                    {
                                      info: e.info,
                                      items: e.list.items,
                                      cursor:
                                        null !== (r = e.list.cursor) &&
                                        void 0 !== r
                                          ? r
                                          : void 0,
                                      ref:
                                        null !== (n = y[e.info.id]) &&
                                        void 0 !== n
                                          ? n
                                          : void 0,
                                    },
                                    e.info.id
                                  );
                            })) && void 0 !== n
                      ? n
                      : [],
                  ],
                }),
                (null == f ? void 0 : f.workspace_filtered) &&
                  (0, ey.jsx)(eS, {}),
              ],
            });
      }
      function eP() {
        return (0, ey.jsxs)("div", {
          className: "mb-6",
          children: [
            (0, ey.jsx)("div", {
              className:
                "my-2 text-center text-3xl font-bold md:my-4 md:text-5xl",
              children: (0, ey.jsx)(ei.Z, ej({}, e_.discoverySplashHeader)),
            }),
            (0, ey.jsx)("div", {
              className:
                "mx-auto w-full text-center text-sm font-light text-token-text-secondary md:text-lg md:leading-tight",
              children: (0, ey.jsx)(
                ei.Z,
                ej({}, e_.discoverySplashDescription)
              ),
            }),
          ],
        });
      }
      function ez(e) {
        var t = e.displayGroups,
          r = e.currentDisplayGroup,
          n = e.scrollToDisplayGroup,
          o = (0, x.useRef)(null),
          s = (0, x.useState)(!1),
          i = s[0],
          l = s[1],
          a = (0, x.useState)(!1),
          c = a[0],
          u = a[1];
        return (
          (0, x.useEffect)(
            function () {
              var e = o.current,
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
            [o]
          ),
          (0, ey.jsxs)("div", {
            className:
              "relative sticky top-14 z-10 mb-12 w-screen bg-white py-2 text-sm dark:bg-gray-800 md:w-full md:pb-0",
            children: [
              i &&
                (0, ey.jsx)("div", {
                  className:
                    "absolute left-0 top-0 z-10 flex hidden h-full items-end bg-gradient-to-r from-white from-50% to-transparent pr-8 dark:from-gray-800 md:block",
                  children: (0, ey.jsx)("button", {
                    className:
                      "mt-2 rounded-full bg-gray-100 p-1 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600",
                    onClick: function () {
                      null != o.current &&
                        o.current.scrollBy({ left: -400, behavior: "smooth" });
                    },
                    children: (0, ey.jsx)(eh.FX, { className: "icon-sm" }),
                  }),
                }),
              (0, ey.jsx)("div", {
                className:
                  "no-scrollbar flex scroll-m-5 gap-1.5 overflow-x-auto md:overflow-hidden",
                ref: o,
                children: t.map(function (e) {
                  return (0, ey.jsx)(
                    "div",
                    {
                      className: (0, Q.default)(
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
                (0, ey.jsx)("div", {
                  className:
                    "absolute right-0 top-0 hidden h-full bg-gradient-to-l from-white from-50% to-transparent pl-8 dark:from-gray-800 md:block",
                  children: (0, ey.jsx)("button", {
                    className:
                      "mt-2 rounded-full bg-gray-100 p-1 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600",
                    onClick: function () {
                      null != o.current &&
                        o.current.scrollBy({ left: 400, behavior: "smooth" });
                    },
                    children: (0, ey.jsx)(eh.Gb, { className: "icon-sm" }),
                  }),
                }),
            ],
          })
        );
      }
      function eS() {
        var e = (0, el.Z)(),
          t = (0, ed.$3)(),
          r = (0, p.tN)(function (e) {
            return e.isDesktopNavCollapsed;
          });
        return (0, ey.jsxs)("div", {
          className: (0, Q.default)(
            "fixed bottom-0 flex w-full items-center justify-center gap-2 bg-gray-100 p-3 text-sm text-token-text-tertiary dark:bg-gray-700",
            !r && "md:w-[calc(100%-16rem)]"
          ),
          children: [
            (0, ey.jsx)(eh.Oz, { className: "icon-sm" }),
            e.formatMessage(e_.discoveryThirdPartyGPTsDisabled, {
              workspaceName: t,
            }),
          ],
        });
      }
      function eE(e) {
        var t = e.pageSearchRef,
          r = e.locale,
          n = e.setLocale,
          o = (0, v.AA)(),
          s = (0, eo.useRouter)(),
          i = (0, el.Z)(),
          l = (0, x.useState)(!1),
          a = l[0],
          u = l[1],
          m = (0, x.useState)(!1),
          p = m[0],
          g = m[1];
        return (
          (0, x.useEffect)(
            function () {
              if (null == t || "function" == typeof t) {
                u(!1);
                return;
              }
              var e = null == t ? void 0 : t.current,
                r = new IntersectionObserver(
                  function (t) {
                    t.forEach(function (t) {
                      t.target === e && u(!t.isIntersecting);
                    });
                  },
                  { root: null, rootMargin: "20px", threshold: 0.5 }
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
          (0, ey.jsx)(ey.Fragment, {
            children: (0, ey.jsxs)(d.QT, {
              className:
                "z-30 mx-auto flex w-full justify-center gap-2 whitespace-nowrap pt-[1.125rem]",
              children: [
                (0, ey.jsx)("div", {
                  className: (0, Q.default)(
                    "w-[calc((100%-768px)/2)] min-w-fit",
                    p ? "hidden lg:flex" : "flex"
                  ),
                  children: (0, ey.jsx)(ef.u, {
                    side: "right",
                    label:
                      r === f.AR.GLOBAL
                        ? i.formatMessage(e_.discoveryGlobalViewOn)
                        : i.formatMessage(e_.discoveryGlobalViewOff),
                    children: (0, ey.jsx)("button", {
                      className:
                        "cursor-pointer rounded-lg px-4 py-3 hover:bg-gray-100 dark:text-gray-600 dark:hover:bg-gray-700",
                      onClick: function () {
                        r === f.AR.GLOBAL ? n(f.AR.ENGLISH) : n(f.AR.GLOBAL);
                      },
                      children: (0, ey.jsx)(eh.Fr, {
                        className: (0, Q.default)(
                          "icon-sm",
                          r === f.AR.GLOBAL
                            ? "text-token-text-primary"
                            : "text-token-text-tertiary"
                        ),
                      }),
                    }),
                  }),
                }),
                (0, ey.jsx)(eT, {
                  className: "max-w-3xl flex-grow",
                  inputClassName: (0, Q.default)(
                    "h-10 text-sm pl-9",
                    !a && "hidden"
                  ),
                  iconClassName: "left-4",
                  open: p,
                  setOpen: g,
                  resultsSizeOffset: -90,
                }),
                (0, ey.jsxs)("div", {
                  className: (0, Q.default)(
                    "w-[calc((100%-768px)/2)] min-w-fit justify-end gap-2",
                    p ? "hidden lg:flex" : "flex"
                  ),
                  children: [
                    (0, ey.jsx)("button", {
                      color: "neutral",
                      onClick: function () {
                        s.push("/gpts/mine", void 0, { shallow: !0 }),
                          X.A.logEvent(K.M.storeMyGizmos);
                      },
                      className:
                        "rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600",
                      children: (0, ey.jsx)(ei.Z, ej({}, e_.discoveryMyGPTs)),
                    }),
                    (0, ey.jsxs)(c.z, {
                      color: "primary",
                      onClick: function () {
                        return X.A.logEvent(K.M.storeCreateGizmo);
                      },
                      className: "focus:ring-0 focus:ring-offset-0",
                      as: "link",
                      to: o,
                      openNewTab: !0,
                      children: [
                        (0, ey.jsx)(eh.Ro, { className: "icon-sm -mx-1" }),
                        (0, ey.jsx)(ei.Z, ej({}, e_.discoveryCreateGPT)),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var eO = (0, x.forwardRef)(function (e, t) {
        var r = e.info,
          n = e.items;
        return (0, ey.jsx)(eL, {
          title: r.title,
          description: r.description,
          ref: t,
          children: (0, ey.jsx)(eN, {
            children: n.map(function (e, t) {
              return (0, ey.jsx)(
                eC,
                { resource: e.resource },
                "".concat(t, "-").concat(e.resource.gizmo.id)
              );
            }),
          }),
        });
      });
      function eC(e) {
        var t,
          r,
          n,
          o = e.resource,
          s =
            null === (t = o.gizmo.vanity_metrics) || void 0 === t
              ? void 0
              : t.num_conversations_str;
        return (0, ey.jsx)(ep.h9, {
          children: (0, ey.jsxs)(en(), {
            href: (0, u.m_)(o),
            shallow: !0,
            className:
              "flex h-24 items-center gap-5 overflow-hidden rounded-xl bg-gray-50 px-7 py-8 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 md:h-32 lg:h-36",
            target: "_blank",
            children: [
              (0, ey.jsx)(eg.Z, {
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
                className: "h-16 w-16 flex-shrink-0 md:h-24 md:w-24",
              }),
              (0, ey.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, ey.jsx)("div", {
                    className: "font-medium line-clamp-2 md:text-lg",
                    children: o.gizmo.display.name,
                  }),
                  (0, ey.jsx)("span", {
                    className: "text-xs line-clamp-2 md:line-clamp-3",
                    children: o.gizmo.display.description,
                  }),
                  (0, ey.jsxs)("div", {
                    className:
                      "mt-1 flex justify-start gap-1 text-xs font-light text-token-text-tertiary line-clamp-1",
                    children: [
                      (0, ey.jsx)(ex.ZP, {
                        gizmo: o,
                        className: "text-xs",
                        hideLink: !0,
                      }),
                      s &&
                        (0, ey.jsxs)(ey.Fragment, {
                          children: [
                            (0, ey.jsx)("span", {
                              className: "text-[10px]",
                              children: "•",
                            }),
                            (0, ey.jsx)(eh.M4, { className: "mt-0.5 h-3 w-3" }),
                            s,
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
      var eM = (0, x.forwardRef)(function (e, t) {
        var r,
          n = e.info,
          o = e.items,
          s = e.cursor,
          i = (0, x.useState)(0 === o.length),
          l = i[0],
          a = i[1],
          d = (0, u.Fi)(n.id, n.locale, 6, s, l),
          f = d.data,
          p = d.hasNextPage,
          v = d.fetchNextPage,
          g = d.isFetchingNextPage,
          h =
            null !==
              (r =
                null == f
                  ? void 0
                  : f.pages.flatMap(function (e) {
                      return e.list.items;
                    })) && void 0 !== r
              ? r
              : [];
        (0, x.useEffect)(
          function () {
            0 === o.length && v();
          },
          [v, o.length]
        );
        var y = (0, x.useState)(h.length),
          b = y[0],
          j = y[1],
          w = (0, x.useRef)(null),
          N = (function (
            e = 0.1,
            { startDelay: t = 0, from: r = 0, ease: n } = {}
          ) {
            return (o, s) => {
              let i =
                  "number" == typeof r
                    ? r
                    : (function (e, t) {
                        if ("first" === e) return 0;
                        {
                          let r = t - 1;
                          return "last" === e ? r : r / 2;
                        }
                      })(r, s),
                l = e * Math.abs(i - o);
              if (n) {
                let t = s * e,
                  r = (0, ee.R)(n);
                l = r(l / t) * t;
              }
              return t + l;
            };
          })(0.1);
        return (
          (0, x.useEffect)(
            function () {
              if (h.length > b) {
                var e;
                j(h.length),
                  null === (e = w.current) ||
                    void 0 === e ||
                    e.scrollIntoView({ behavior: "smooth", block: "nearest" });
              }
            },
            [h.length, b]
          ),
          (0, ey.jsxs)(eL, {
            title: n.title,
            description: n.description,
            ref: t,
            children: [
              (0, ey.jsxs)(eN, {
                children: [
                  o.map(function (e, t) {
                    return (0, ey.jsx)(
                      eR,
                      { resource: e.resource, rank: t + 1, cutId: n.id },
                      t
                    );
                  }),
                  h.map(function (e, t) {
                    return (0, ey.jsx)(
                      eR,
                      {
                        resource: e.resource,
                        rank: o.length + t + 1,
                        cutId: n.id,
                        delay: N(t - b, h.length - b),
                      },
                      t
                    );
                  }),
                ],
              }),
              (!l || p || g) &&
                null != s &&
                (0, ey.jsx)(c.z, {
                  color: "neutral",
                  onClick: function () {
                    a(!0),
                      X.A.publicEvent(K.M.storeLoadMore, { section: n.id }),
                      v();
                  },
                  className:
                    "mt-2 h-10 w-full focus:ring-0 focus:ring-offset-0 md:mt-3",
                  children: g
                    ? (0, ey.jsx)(m.Z, {})
                    : (0, ey.jsx)(ei.Z, ej({}, e_.discoveryLoadMore)),
                }),
              (0, ey.jsx)("div", { ref: w }),
            ],
          })
        );
      });
      function eR(e) {
        var t,
          r,
          n,
          o = e.resource,
          s = e.rank,
          i = e.cutId,
          l = e.delay,
          a =
            null === (t = o.gizmo.vanity_metrics) || void 0 === t
              ? void 0
              : t.num_conversations_str;
        return (0, ey.jsx)(ep.h9, {
          delay: l,
          children: (0, ey.jsxs)(
            en(),
            {
              href: (0, u.m_)(o),
              shallow: !0,
              className:
                "flex h-[104px] items-center gap-2.5 overflow-hidden rounded-xl px-1 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 md:px-3 md:py-4 lg:px-3",
              target: "_blank",
              onClick: function () {
                X.A.publicEvent(K.M.storeClickGizmo, {
                  gizmo_id: o.gizmo.id,
                  position: s,
                  section: i,
                });
              },
              children: [
                (0, ey.jsx)("div", {
                  className:
                    "text-md flex w-8 shrink-0 items-center justify-center font-semibold",
                  children: s,
                }),
                (0, ey.jsxs)("div", {
                  className:
                    "flex w-full flex-grow items-center gap-4 overflow-hidden",
                  children: [
                    (0, ey.jsx)(eg.Z, {
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
                      className: "h-12 w-12 flex-shrink-0",
                    }),
                    (0, ey.jsxs)("div", {
                      className: "overflow-hidden text-ellipsis break-words",
                      children: [
                        (0, ey.jsx)("span", {
                          className:
                            "text-sm font-medium leading-tight line-clamp-2",
                          children: o.gizmo.display.name,
                        }),
                        (0, ey.jsx)("span", {
                          className: "text-xs line-clamp-3",
                          children: o.gizmo.display.description,
                        }),
                        (0, ey.jsxs)("div", {
                          className:
                            "mt-1 flex items-center gap-1 text-ellipsis whitespace-nowrap pr-1 text-xs text-token-text-tertiary",
                          children: [
                            (0, ey.jsx)(ex.ZP, {
                              gizmo: o,
                              className: "text-xs",
                              hideLink: !0,
                            }),
                            a &&
                              (0, ey.jsxs)(ey.Fragment, {
                                children: [
                                  (0, ey.jsx)("span", {
                                    className: "text-[8px]",
                                    children: "•",
                                  }),
                                  (0, ey.jsx)(eh.M4, { className: "h-3 w-3" }),
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
            o.gizmo.id
          ),
        });
      }
      var eT = (0, x.forwardRef)(function (e, t) {
          var r = e.className,
            n = e.inputClassName,
            o = e.iconClassName,
            s = e.open,
            i = e.setOpen,
            l = e.resultsSizeOffset,
            a = (0, el.Z)(),
            c = (0, x.useState)(""),
            u = c[0],
            d = c[1],
            f = (0, x.useState)(!1),
            m = f[0],
            p = f[1],
            v = null != s ? s : m,
            g = null != i ? i : p,
            h = (0, x.useRef)(null);
          (0, x.useEffect)(
            function () {
              if (v) {
                var e = function (e) {
                    if ("Escape" === e.key) {
                      var t;
                      g(!1),
                        null === (t = h.current) || void 0 === t || t.blur();
                    }
                  },
                  r = function (e) {
                    var r;
                    e.target instanceof Node &&
                      "function" != typeof t &&
                      !(
                        null != t &&
                        null !== (r = t.current) &&
                        void 0 !== r &&
                        r.contains(e.target)
                      ) &&
                      g(!1);
                  };
                return (
                  document.addEventListener("keydown", e, !1),
                  document.addEventListener("mousedown", r, !1),
                  function () {
                    document.removeEventListener("keydown", e, !1),
                      document.removeEventListener("mousedown", r, !1);
                  }
                );
              }
            },
            [v, g, h, t]
          );
          var y = (0, x.useState)(),
            b = y[0],
            j = y[1];
          return (
            (0, x.useEffect)(
              function () {
                var e,
                  t = function () {
                    var e;
                    j(
                      null === (e = window.visualViewport) || void 0 === e
                        ? void 0
                        : e.height
                    );
                  };
                return (
                  null === (e = window.visualViewport) ||
                    void 0 === e ||
                    e.addEventListener("resize", t),
                  t(),
                  function () {
                    var e;
                    null === (e = window.visualViewport) ||
                      void 0 === e ||
                      e.removeEventListener("resize", t);
                  }
                );
              },
              [j]
            ),
            (0, ey.jsxs)(W, {
              as: "div",
              className: (0, Q.default)("group relative rounded-xl", r),
              ref: t,
              children: [
                (0, ey.jsx)(es.jRj, {
                  className: (0, Q.default)(
                    "pointer-none absolute left-3 top-0 mr-2 h-full text-gray-500",
                    o
                  ),
                  size: 16,
                }),
                (0, ey.jsx)("input", {
                  className: (0, Q.default)(
                    "hover:dark-border-gray-500 z-10 w-full rounded-xl border border-gray-200 py-2 pr-3 font-normal outline-0 delay-100",
                    v
                      ? "border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                      : "hover:border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 hover:dark:bg-gray-700",
                    n
                  ),
                  placeholder: a.formatMessage(e_.discoverySearch),
                  value: u,
                  onChange: function (e) {
                    return d(e.target.value);
                  },
                  onFocus: function () {
                    g(!0), X.A.publicEvent(K.M.searchOpened);
                  },
                  onBlurCapture: function (e) {
                    var t, r;
                    (null !== (t = e.relatedTarget) &&
                      void 0 !== t &&
                      t.hasAttribute("href") &&
                      (null === (r = e.relatedTarget) || void 0 === r
                        ? void 0
                        : r.getAttribute("target")) === "_blank") ||
                      g(!1);
                  },
                  ref: h,
                }),
                (0, ey.jsx)(em.m, {
                  show: v,
                  children: (0, ey.jsx)(W.Panel, {
                    static: !0,
                    className:
                      "absolute top-[calc(100%-10px)] w-full overflow-y-auto rounded-lg rounded-t-none border border-t-0 border-gray-300 bg-white pb-2 pt-4 dark:border-gray-600 dark:bg-gray-700",
                    style: {
                      maxHeight: null != b ? b + (null != l ? l : 0) : "100vh",
                    },
                    children: (0, ey.jsx)(eZ, { query: u }),
                  }),
                }),
              ],
            })
          );
        }),
        eI = ec.Z.div(
          i ||
            (i = (0, a.Z)([
              "pb-2 px-4 text-xs font-medium text-token-text-tertiary",
            ]))
        );
      function eG() {
        return (0, ey.jsx)("div", {
          className: "flex items-center justify-center py-1",
          children: (0, ey.jsx)(m.Z, {}),
        });
      }
      function eZ(e) {
        var t = e.query,
          r = (0, x.useState)(""),
          n = r[0],
          o = r[1],
          s = (0, x.useRef)((0, eu.Z)());
        (0, x.useEffect)(function () {
          X.A.publicEvent(K.M.searchStart);
        }, []),
          (0, x.useEffect)(
            function () {
              var e = setTimeout(function () {
                o(t);
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
              ((s.current = (0, eu.Z)()),
              l.items.length > 0
                ? Promise.all(
                    l.items.map(function (e, t) {
                      X.A.publicEvent(K.M.searchDisplayResult, {
                        search_id: s.current,
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
        var c = (0, u.Fi)("recent", void 0, 3),
          d = c.data,
          f = c.isLoading;
        if ("" === t) {
          if (f) return (0, ey.jsx)(eG, {});
          if (null != d) {
            var m = d.pages.flatMap(function (e) {
              return e.list.items;
            });
            return m.length > 0
              ? (0, ey.jsxs)(ey.Fragment, {
                  children: [
                    (0, ey.jsx)(eI, {
                      children: (0, ey.jsx)(
                        ei.Z,
                        ej({}, e_.discoverySearchRecentlyUsed)
                      ),
                    }),
                    m.map(function (e, r) {
                      return (0, ey.jsx)(
                        eA,
                        {
                          searchId: s.current,
                          position: r,
                          query: t,
                          resource: e.resource,
                        },
                        e.resource.gizmo.id
                      );
                    }),
                  ],
                })
              : (0, ey.jsx)(eI, {
                  children: (0, ey.jsx)(
                    ei.Z,
                    ej({}, e_.discoverySearchRecentlyUsedEmpty)
                  ),
                });
          }
        }
        return a
          ? (0, ey.jsx)(eG, {})
          : l && 0 !== l.items.length
            ? (0, ey.jsxs)(ey.Fragment, {
                children: [
                  (0, ey.jsx)(eI, {
                    children: (0, ey.jsx)(
                      ei.Z,
                      ej({}, e_.discoverySearchResults)
                    ),
                  }),
                  l.items.map(function (e, r) {
                    return (0, ey.jsx)(
                      eA,
                      {
                        searchId: s.current,
                        position: r,
                        resource: e,
                        query: t,
                      },
                      e.gizmo.id
                    );
                  }),
                ],
              })
            : (0, ey.jsx)("div", {
                className: "mx-2",
                children: (0, ey.jsx)(eI, {
                  children: (0, ey.jsx)(
                    ei.Z,
                    ej({}, e_.discoveryNoResultsSearch)
                  ),
                }),
              });
      }
      function eA(e) {
        var t,
          r,
          n,
          o = e.searchId,
          s = e.resource,
          i = e.position,
          l = e.query,
          a =
            null === (t = s.gizmo.vanity_metrics) || void 0 === t
              ? void 0
              : t.num_conversations_str;
        return (0, ey.jsxs)(en(), {
          href: (0, u.m_)(s),
          className:
            "mx-2 flex gap-3 rounded-lg px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-600",
          target: "_blank",
          onClick: function () {
            X.A.publicEvent(K.M.storeClickGizmo, {
              search_id: o,
              gizmo_id: s.gizmo.id,
              position: i,
              query: l,
              section: "search",
            });
          },
          children: [
            (0, ey.jsx)(eg.Z, {
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
              className: "h-8 w-8 shrink-0",
            }),
            (0, ey.jsxs)("div", {
              className: "flex flex-col truncate",
              children: [
                (0, ey.jsx)("span", {
                  className: "truncate text-sm font-medium",
                  children: s.gizmo.display.name,
                }),
                (0, ey.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    (0, ey.jsx)(ex.ZP, {
                      gizmo: s,
                      className: "truncate text-xs font-medium",
                      hideLink: !0,
                    }),
                    a &&
                      (0, ey.jsxs)(ey.Fragment, {
                        children: [
                          (0, ey.jsx)("span", {
                            className:
                              "text-[10px] font-light text-token-text-tertiary",
                            children: "•",
                          }),
                          (0, ey.jsxs)("div", {
                            className:
                              "flex items-center gap-1 font-medium text-token-text-tertiary",
                            children: [
                              (0, ey.jsx)(eh.M4, { className: "icon-sm" }),
                              (0, ey.jsx)("span", {
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
      var eL = (0, x.forwardRef)(function (e, t) {
          var r = e.title,
            n = e.description,
            o = e.className,
            s = e.children;
          return (0, ey.jsxs)("div", {
            ref: t,
            className: "scroll-mt-28 last:h-[calc(100vh-8rem)]",
            children: [
              (0, ey.jsxs)(ep.h9, {
                animateTap: !1,
                children: [
                  (0, ey.jsx)("div", {
                    className: "text-xl font-medium md:text-2xl",
                    children: r,
                  }),
                  n &&
                    (0, ey.jsx)("div", {
                      className:
                        "text-sm text-token-text-tertiary md:text-base",
                      children: n,
                    }),
                ],
              }),
              (0, ey.jsx)("div", {
                className: (0, Q.default)("mb-10 mt-4", o),
                children: s,
              }),
            ],
          });
        }),
        e_ = (0, ea.vU)({
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
          discoveryGlobalViewOn: {
            id: "gizmo.discovery.globalViewOn",
            defaultMessage: "Global View On",
          },
          discoveryGlobalViewOff: {
            id: "gizmo.discovery.globalViewOff",
            defaultMessage: "Global View Off",
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
        o = r(4399),
        s = r.n(o),
        i = r(3554),
        l = r(21120),
        a = r(37097),
        c = r(4748),
        u = r(35250);
      function d(e) {
        var t,
          r = e.gizmoId,
          o = e.onSuccess,
          d = e.onClose,
          f = (0, a.kb)(),
          m =
            ((t = (0, n.Z)(
              s().mark(function e() {
                return s().wrap(
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
                          o(), (e.next = 9);
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
        o = r(83562),
        s = r(35212),
        i = r(10721),
        l = r(8024),
        a = r(17080),
        c = r(35250);
      function u(e) {
        var t = e.children,
          r = (0, i.useRouter)();
        return (0, c.jsx)(s.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, c.jsxs)(o.ZP, {
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
          return A;
        },
        h9: function () {
          return R;
        },
        r1: function () {
          return I;
        },
      });
      var n,
        o,
        s,
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
        w = r(73040),
        N = r.n(w),
        k = r(10721),
        P = r(70079),
        z = r(70671),
        S = r(94968),
        E = r(21389),
        O = r(65865),
        C = r(87942),
        M = r(35250);
      function R(e) {
        var t = e.delay,
          r = e.animateTap,
          n = e.children;
        return (0, M.jsx)(j.E.div, {
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
      function T(e) {
        var t,
          r,
          n = e.gizmoResource,
          o =
            null === (t = n.gizmo.vanity_metrics) || void 0 === t
              ? void 0
              : t.num_conversations_str,
          s =
            null !== (r = n.gizmo.share_recipient) && void 0 !== r
              ? r
              : v.Zz.Private,
          i = (0, x.XA)(s),
          l = (0, z.Z)();
        return (0, M.jsxs)("div", {
          children: [
            n.gizmo.share_recipient !== v.Zz.Private && null != o
              ? (0, M.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, M.jsx)(f.M4, { className: "icon-sm" }),
                    (0, M.jsx)("span", {
                      children: l.formatMessage(D.conversationCountStrLabel, {
                        numConvos: o,
                      }),
                    }),
                  ],
                })
              : void 0,
            (0, M.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [
                s === v.Zz.Link || s === v.Zz.Marketplace
                  ? (0, M.jsx)(f.Ao, { className: "icon-sm" })
                  : s === v.Zz.Workspace
                    ? (0, M.jsx)(f.oq, { className: "icon-sm" })
                    : (0, M.jsx)(f.LX, { className: "icon-sm" }),
                (0, M.jsx)("span", { className: "line-clamp-1", children: i }),
              ],
            }),
          ],
        });
      }
      function I(e) {
        var t,
          r,
          n,
          o = e.gizmoResource,
          s = e.canRemoveRecent,
          i = (0, k.useRouter)(),
          l = (0, x.XX)(o),
          m = (0, d.Sg)(o),
          p = !!(null === (t = o.gizmo.tags) || void 0 === t
            ? void 0
            : t.includes(v.U9.FirstParty));
        return (0, M.jsx)(L, {
          href: m ? (0, h.AA)(o.gizmo.id) : (0, d.m_)(o),
          icon: (0, M.jsx)(c.Z, {
            isFirstParty: p,
            src:
              null !==
                (r =
                  null == o ? void 0 : o.gizmo.display.profile_picture_url) &&
              void 0 !== r
                ? r
                : void 0,
            className: "h-[42px] w-[42px] flex-shrink-0",
          }),
          title: o.gizmo.display.name || u.zf,
          isDraft: m,
          description:
            null !== (n = o.gizmo.display.description) && void 0 !== n ? n : "",
          byline: l
            ? (0, M.jsx)(T, { gizmoResource: o })
            : (0, M.jsx)(O.ZP, { gizmo: o }),
          buttons: (0, M.jsxs)(M.Fragment, {
            children: [
              l &&
                (0, M.jsx)(a.u, {
                  label: "Edit GPT",
                  className: "flex justify-center",
                  side: "top",
                  children: (0, M.jsx)("button", {
                    className:
                      "rounded-lg px-3 py-2 text-token-text-primary transition-transform duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",
                    onClick: function () {
                      i.push((0, h.AA)(o.gizmo.id), void 0, { shallow: !0 });
                    },
                    children: (0, M.jsx)(f.eu, { className: "icon-sm" }),
                  }),
                }),
              (0, M.jsx)(_, {
                gizmoResource: o,
                isOwner: l,
                canRemoveRecent: s,
              }),
            ],
          }),
        });
      }
      function G() {
        return (0, M.jsx)("span", {
          className:
            "rounded-full bg-blue-100 px-1.5 py-0.5 text-[10px] font-medium text-blue-600",
          children: "Beta",
        });
      }
      ((s || (s = {})).Grid1 = "grid-1"),
        ((n = i || (i = {})).Enabled = "enabled"),
        (n.ComingSoon = "coming-soon");
      var Z = E.Z.div(
        o ||
          (o = (0, l.Z)([
            "flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full border border-dashed\n",
            "",
          ])),
        function (e) {
          return e.$disabled
            ? ""
            : "border-black bg-white dark:border-gray-500 dark:bg-gray-700";
        }
      );
      function A(e) {
        var t = e.type,
          r = (0, h.J8)(),
          n = t === i.ComingSoon;
        return (0, M.jsxs)(a.E, {
          disabled: !n,
          label: "GPT creation will be available in the coming weeks",
          children: [
            (0, M.jsx)(L, {
              href: r,
              disabled: n,
              icon: (0, M.jsx)(Z, {
                $disabled: n,
                children: (0, M.jsx)(f.Ro, {
                  className: (0, b.default)("icon-sm", n && "opacity-30"),
                }),
              }),
              title: (0, M.jsxs)("div", {
                className: "flex items-center gap-1",
                children: ["Create a GPT ", (0, M.jsx)(G, {})],
              }),
              description:
                "Customize a version of ChatGPT for a specific purpose",
              byline: n
                ? (0, M.jsx)("div", {
                    className: "flex items-center justify-end",
                    children: (0, M.jsx)("div", {
                      className: "flex items-center",
                      children: "Coming soon",
                    }),
                  })
                : void 0,
            }),
            (0, M.jsx)("div", {
              className: "h-px bg-gray-100 dark:bg-gray-700",
            }),
          ],
        });
      }
      function L(e) {
        var t = e.href,
          r = e.icon,
          n = e.title,
          o = e.isDraft,
          s = e.description,
          i = e.byline,
          l = e.buttons,
          c = e.disabled,
          u = e.className,
          d = (0, b.default)(
            "flex items-center px-2 py-4 rounded-xl",
            c ? "" : "hover:bg-gray-50 dark:hover:bg-gray-700",
            u
          ),
          f = (0, M.jsxs)(M.Fragment, {
            children: [
              (0, M.jsxs)("div", {
                className:
                  "flex grow items-center overflow-hidden md:w-3/5 md:grow-0",
                children: [
                  r,
                  (0, M.jsxs)("div", {
                    className: (0, b.default)(
                      "grow overflow-hidden pl-4 pr-9 leading-tight",
                      c ? "opacity-50" : "hover:cursor-pointer"
                    ),
                    children: [
                      (0, M.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, M.jsx)("span", {
                            className: "font-medium",
                            children: n,
                          }),
                          void 0 !== o &&
                            o &&
                            (0, M.jsx)(a.u, {
                              label: "Draft",
                              className: "flex justify-center",
                              side: "top",
                              children: (0, M.jsx)("div", {
                                className:
                                  "m-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-600",
                              }),
                            }),
                        ],
                      }),
                      (0, M.jsx)("div", {
                        className:
                          "overflow-hidden text-ellipsis break-words text-sm line-clamp-2",
                        children: s,
                      }),
                      null != i &&
                        (0, M.jsx)("div", {
                          className:
                            "text-ellipsis text-sm text-gray-500 md:hidden",
                          children: i,
                        }),
                    ],
                  }),
                ],
              }),
              null != i &&
                (0, M.jsx)("div", {
                  className:
                    "hidden flex-1 text-ellipsis text-sm text-gray-500 md:block",
                  children: i,
                }),
              null != l &&
                (0, M.jsx)("div", {
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
          ? (0, M.jsx)(R, {
              children: (0, M.jsx)("span", { className: d, children: f }),
            })
          : (0, M.jsx)(R, {
              children: (0, M.jsx)(N(), {
                className: d,
                href: t,
                shallow: !0,
                children: f,
              }),
            });
      }
      function _(e) {
        var t = e.gizmoResource,
          r = e.isOwner,
          n = e.canRemoveRecent,
          o = (0, P.useState)(!1),
          s = o[0],
          i = o[1],
          l = (0, P.useState)(!1),
          a = l[0],
          c = l[1];
        return r || n
          ? (0, M.jsxs)(M.Fragment, {
              children: [
                (0, M.jsxs)(y.fC, {
                  open: a,
                  onOpenChange: function (e) {
                    return c(e);
                  },
                  children: [
                    (0, M.jsx)(y.xz, {
                      asChild: !0,
                      children: (0, M.jsx)("button", {
                        color: "neutral",
                        className:
                          "rounded-lg bg-transparent px-3 py-2 text-token-text-primary duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",
                        onClick: function () {
                          c(function (e) {
                            return !e;
                          });
                        },
                        children: (0, M.jsx)(f.Yr, { className: "icon-md" }),
                      }),
                    }),
                    (0, M.jsx)(y.Uv, {
                      children: (0, M.jsxs)(y.VY, {
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
                            ? (0, M.jsxs)(p.UA, {
                                color: "danger",
                                onClick: function () {
                                  i(!0);
                                },
                                children: [
                                  (0, M.jsx)(f.a_, { className: "icon-md" }),
                                  "Delete GPT",
                                ],
                              })
                            : (0, M.jsx)(M.Fragment, {}),
                          n &&
                            (0, M.jsx)(p.UA, {
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
                s &&
                  (0, M.jsx)(g.h, {
                    children: (0, M.jsx)(C.b, {
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
      var D = (0, S.vU)({
        conversationCountStrLabel: {
          id: "gizmo.gpt.grid.conversationCountStrLabel",
          defaultMessage: "{numConvos} Chats",
        },
      });
    },
  },
]);
//# sourceMappingURL=6276-2338ce0de8ee0b5d.js.map
