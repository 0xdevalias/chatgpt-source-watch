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
          return eS;
        },
        b1: function () {
          return eD;
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
        v = r(73582),
        x = r(5974),
        g = r(28818),
        h = r(70079),
        y = r(78983),
        b = r(4911),
        j = r(14699),
        w = r(58194),
        N = r(86499),
        k = r(28595),
        P = r(29787),
        z = r(37068),
        S = r(19992),
        E = r(53315),
        O = r(52327),
        M = r(46789),
        C = r(48442),
        R = r(98992),
        T = r(17575),
        I = r(70794),
        L =
          (((n = L || {})[(n.Open = 0)] = "Open"),
          (n[(n.Closed = 1)] = "Closed"),
          n),
        G =
          (((o = G || {})[(o.TogglePopover = 0)] = "TogglePopover"),
          (o[(o.ClosePopover = 1)] = "ClosePopover"),
          (o[(o.SetButton = 2)] = "SetButton"),
          (o[(o.SetButtonId = 3)] = "SetButtonId"),
          (o[(o.SetPanel = 4)] = "SetPanel"),
          (o[(o.SetPanelId = 5)] = "SetPanelId"),
          o);
      let Z = {
          0: (e) => ({
            ...e,
            popoverState: (0, y.E)(e.popoverState, { 0: 1, 1: 0 }),
          }),
          1: (e) => (1 === e.popoverState ? e : { ...e, popoverState: 1 }),
          2: (e, t) => (e.button === t.button ? e : { ...e, button: t.button }),
          3: (e, t) =>
            e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId },
          4: (e, t) => (e.panel === t.panel ? e : { ...e, panel: t.panel }),
          5: (e, t) =>
            e.panelId === t.panelId ? e : { ...e, panelId: t.panelId },
        },
        A = (0, h.createContext)(null);
      function _(e) {
        let t = (0, h.useContext)(A);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, _), t);
        }
        return t;
      }
      A.displayName = "PopoverContext";
      let F = (0, h.createContext)(null);
      function D(e) {
        let t = (0, h.useContext)(F);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, D), t);
        }
        return t;
      }
      F.displayName = "PopoverAPIContext";
      let B = (0, h.createContext)(null);
      function U() {
        return (0, h.useContext)(B);
      }
      B.displayName = "PopoverGroupContext";
      let V = (0, h.createContext)(null);
      function $(e, t) {
        return (0, y.E)(t.type, Z, e, t);
      }
      V.displayName = "PopoverPanelContext";
      let q = (0, b.yV)(function (e, t) {
          var r;
          let n = `headlessui-popover-button-${(0, w.M)()}`,
            o = `headlessui-popover-panel-${(0, w.M)()}`,
            s = (0, h.useRef)(null),
            i = (0, j.T)(
              t,
              (0, j.h)((e) => {
                s.current = e;
              })
            ),
            l = (0, h.useReducer)($, {
              popoverState: 1,
              button: null,
              buttonId: n,
              panel: null,
              panelId: o,
              beforePanelSentinel: (0, h.createRef)(),
              afterPanelSentinel: (0, h.createRef)(),
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
            p = (0, M.i)(null != (r = s.current) ? r : c);
          (0, h.useEffect)(() => m({ type: 3, buttonId: n }), [n, m]),
            (0, h.useEffect)(() => m({ type: 5, panelId: o }), [o, m]);
          let v = (0, h.useMemo)(() => {
              if (!c || !u) return !1;
              for (let e of document.querySelectorAll("body > *"))
                if (
                  Number(null == e ? void 0 : e.contains(c)) ^
                  Number(null == e ? void 0 : e.contains(u))
                )
                  return !0;
              return !1;
            }, [c, u]),
            x = (0, h.useMemo)(
              () => ({ buttonId: n, panelId: o, close: () => m({ type: 1 }) }),
              [n, o, m]
            ),
            g = U(),
            N = null == g ? void 0 : g.registerPopover,
            k = (0, T.z)(() => {
              var e;
              return null !=
                (e = null == g ? void 0 : g.isFocusWithinPopoverGroup())
                ? e
                : (null == p ? void 0 : p.activeElement) &&
                    ((null == c ? void 0 : c.contains(p.activeElement)) ||
                      (null == u ? void 0 : u.contains(p.activeElement)));
            });
          (0, h.useEffect)(() => (null == N ? void 0 : N(x)), [N, x]),
            (0, C.O)(
              null == p ? void 0 : p.defaultView,
              "focus",
              (e) => {
                var t, r, n, o;
                0 === a &&
                  (k() ||
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
            (0, E.O)(
              [c, u],
              (e, t) => {
                m({ type: 1 }),
                  (0, P.sP)(t, P.tJ.Loose) ||
                    (e.preventDefault(), null == c || c.focus());
              },
              0 === a
            );
          let S = (0, T.z)((e) => {
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
            O = (0, h.useMemo)(() => ({ close: S, isPortalled: v }), [S, v]),
            R = (0, h.useMemo)(() => ({ open: 0 === a, close: S }), [a, S]);
          return h.createElement(
            A.Provider,
            { value: l },
            h.createElement(
              F.Provider,
              { value: O },
              h.createElement(
                z.up,
                { value: (0, y.E)(a, { 0: z.ZM.Open, 1: z.ZM.Closed }) },
                (0, b.sY)({
                  ourProps: { ref: i },
                  theirProps: e,
                  slot: R,
                  defaultTag: "div",
                  name: "Popover",
                })
              )
            )
          );
        }),
        W = (0, b.yV)(function (e, t) {
          let [r, n] = _("Popover.Button"),
            { isPortalled: o } = D("Popover.Button"),
            s = (0, h.useRef)(null),
            i = `headlessui-focus-sentinel-${(0, w.M)()}`,
            l = U(),
            a = null == l ? void 0 : l.closeOthers,
            c = (0, h.useContext)(V),
            u = null !== c && c === r.panelId,
            d = (0, j.T)(s, t, u ? null : (e) => n({ type: 2, button: e })),
            f = (0, j.T)(s, t),
            m = (0, M.i)(s),
            p = (0, T.z)((e) => {
              var t, o, i;
              if (u) {
                if (1 === r.popoverState) return;
                switch (e.key) {
                  case N.R.Space:
                  case N.R.Enter:
                    e.preventDefault(),
                      null == (o = (t = e.target).click) || o.call(t),
                      n({ type: 1 }),
                      null == (i = r.button) || i.focus();
                }
              } else
                switch (e.key) {
                  case N.R.Space:
                  case N.R.Enter:
                    e.preventDefault(),
                      e.stopPropagation(),
                      1 === r.popoverState && (null == a || a(r.buttonId)),
                      n({ type: 0 });
                    break;
                  case N.R.Escape:
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
            v = (0, T.z)((e) => {
              u || (e.key === N.R.Space && e.preventDefault());
            }),
            x = (0, T.z)((t) => {
              var o, s;
              (0, k.P)(t.currentTarget) ||
                e.disabled ||
                (u
                  ? (n({ type: 1 }), null == (o = r.button) || o.focus())
                  : (t.preventDefault(),
                    t.stopPropagation(),
                    1 === r.popoverState && (null == a || a(r.buttonId)),
                    n({ type: 0 }),
                    null == (s = r.button) || s.focus()));
            }),
            g = (0, T.z)((e) => {
              e.preventDefault(), e.stopPropagation();
            }),
            z = 0 === r.popoverState,
            E = (0, h.useMemo)(() => ({ open: z }), [z]),
            O = (0, S.f)(e, s),
            C = u
              ? { ref: f, type: O, onKeyDown: p, onClick: x }
              : {
                  ref: d,
                  id: r.buttonId,
                  type: O,
                  "aria-expanded": e.disabled ? void 0 : 0 === r.popoverState,
                  "aria-controls": r.panel ? r.panelId : void 0,
                  onKeyDown: p,
                  onKeyUp: v,
                  onClick: x,
                  onMouseDown: g,
                },
            L = (0, I.l)(),
            G = (0, T.z)(() => {
              let e = r.panel;
              e &&
                (0, y.E)(L.current, {
                  [I.N.Forwards]: () => (0, P.jA)(e, P.TO.First),
                  [I.N.Backwards]: () => (0, P.jA)(e, P.TO.Last),
                });
            });
          return h.createElement(
            h.Fragment,
            null,
            (0, b.sY)({
              ourProps: C,
              theirProps: e,
              slot: E,
              defaultTag: "button",
              name: "Popover.Button",
            }),
            z &&
              !u &&
              o &&
              h.createElement(R._, {
                id: i,
                features: R.A.Focusable,
                as: "button",
                type: "button",
                onFocus: G,
              })
          );
        }),
        Y = b.AN.RenderStrategy | b.AN.Static,
        H = (0, b.yV)(function (e, t) {
          let [{ popoverState: r }, n] = _("Popover.Overlay"),
            o = (0, j.T)(t),
            s = `headlessui-popover-overlay-${(0, w.M)()}`,
            i = (0, z.oJ)(),
            l = null !== i ? i === z.ZM.Open : 0 === r,
            a = (0, T.z)((e) => {
              if ((0, k.P)(e.currentTarget)) return e.preventDefault();
              n({ type: 1 });
            }),
            c = (0, h.useMemo)(() => ({ open: 0 === r }), [r]);
          return (0, b.sY)({
            ourProps: { ref: o, id: s, "aria-hidden": !0, onClick: a },
            theirProps: e,
            slot: c,
            defaultTag: "div",
            features: Y,
            visible: l,
            name: "Popover.Overlay",
          });
        }),
        X = b.AN.RenderStrategy | b.AN.Static,
        K = Object.assign(q, {
          Button: W,
          Overlay: H,
          Panel: (0, b.yV)(function (e, t) {
            let { focus: r = !1, ...n } = e,
              [o, s] = _("Popover.Panel"),
              { close: i, isPortalled: l } = D("Popover.Panel"),
              a = `headlessui-focus-sentinel-before-${(0, w.M)()}`,
              c = `headlessui-focus-sentinel-after-${(0, w.M)()}`,
              u = (0, h.useRef)(null),
              d = (0, j.T)(u, t, (e) => {
                s({ type: 4, panel: e });
              }),
              f = (0, M.i)(u),
              m = (0, z.oJ)(),
              p = null !== m ? m === z.ZM.Open : 0 === o.popoverState,
              v = (0, T.z)((e) => {
                var t;
                if (e.key === N.R.Escape) {
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
            (0, h.useEffect)(() => {
              var t;
              e.static ||
                (1 === o.popoverState &&
                  (null == (t = e.unmount) || t) &&
                  s({ type: 4, panel: null }));
            }, [o.popoverState, e.unmount, e.static, s]),
              (0, h.useEffect)(() => {
                if (!r || 0 !== o.popoverState || !u.current) return;
                let e = null == f ? void 0 : f.activeElement;
                u.current.contains(e) || (0, P.jA)(u.current, P.TO.First);
              }, [r, u, o.popoverState]);
            let x = (0, h.useMemo)(
                () => ({ open: 0 === o.popoverState, close: i }),
                [o, i]
              ),
              g = {
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
              k = (0, I.l)(),
              S = (0, T.z)(() => {
                let e = u.current;
                e &&
                  (0, y.E)(k.current, {
                    [I.N.Forwards]: () => {
                      (0, P.jA)(e, P.TO.First);
                    },
                    [I.N.Backwards]: () => {
                      var e;
                      null == (e = o.button) || e.focus({ preventScroll: !0 });
                    },
                  });
              }),
              E = (0, T.z)(() => {
                let e = u.current;
                e &&
                  (0, y.E)(k.current, {
                    [I.N.Forwards]: () => {
                      var e, t, r;
                      if (!o.button) return;
                      let n = (0, P.GO)(),
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
                      (0, P.jA)(l, P.TO.First, !1);
                    },
                    [I.N.Backwards]: () => (0, P.jA)(e, P.TO.Last),
                  });
              });
            return h.createElement(
              V.Provider,
              { value: o.panelId },
              p &&
                l &&
                h.createElement(R._, {
                  id: a,
                  ref: o.beforePanelSentinel,
                  features: R.A.Focusable,
                  as: "button",
                  type: "button",
                  onFocus: S,
                }),
              (0, b.sY)({
                ourProps: g,
                theirProps: n,
                slot: x,
                defaultTag: "div",
                features: X,
                visible: p,
                name: "Popover.Panel",
              }),
              p &&
                l &&
                h.createElement(R._, {
                  id: c,
                  ref: o.afterPanelSentinel,
                  features: R.A.Focusable,
                  as: "button",
                  type: "button",
                  onFocus: E,
                })
            );
          }),
          Group: (0, b.yV)(function (e, t) {
            let r = (0, h.useRef)(null),
              n = (0, j.T)(r, t),
              [o, s] = (0, h.useState)([]),
              i = (0, T.z)((e) => {
                s((t) => {
                  let r = t.indexOf(e);
                  if (-1 !== r) {
                    let e = t.slice();
                    return e.splice(r, 1), e;
                  }
                  return t;
                });
              }),
              l = (0, T.z)((e) => (s((t) => [...t, e]), () => i(e))),
              a = (0, T.z)(() => {
                var e;
                let t = (0, O.r)(r);
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
              c = (0, T.z)((e) => {
                for (let t of o) t.buttonId !== e && t.close();
              }),
              u = (0, h.useMemo)(
                () => ({
                  registerPopover: l,
                  unregisterPopover: i,
                  isFocusWithinPopoverGroup: a,
                  closeOthers: c,
                }),
                [l, i, a, c]
              ),
              d = (0, h.useMemo)(() => ({}), []);
            return h.createElement(
              B.Provider,
              { value: u },
              (0, b.sY)({
                ourProps: { ref: n },
                theirProps: e,
                slot: d,
                defaultTag: "div",
                name: "Popover.Group",
              })
            );
          }),
        });
      var J = r(25349),
        Q = r(99893),
        ee = r(69101),
        et = r(19841),
        er = r(43356),
        en = r(61888),
        eo = r(73040),
        es = r.n(eo),
        ei = r(10721),
        el = r(1454),
        ea = r(32004),
        ec = r(70671),
        eu = r(94968),
        ed = r(21389),
        ef = r(8844),
        em = r(218),
        ep = r(90166),
        ev = r(44247),
        ex = r(41202),
        eg = r(56685),
        eh = r(85528),
        ey = r(65865),
        eb = r(79505),
        ej = r(5063),
        ew = r(35250);
      function eN(e, t) {
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
      function ek(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eN(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eN(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function eP(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var ez = ed.Z.div(
        s ||
          (s = (0, a.Z)([
            "grid grid-cols-1 gap-x-1.5 gap-y-1 md:gap-x-2 md:gap-y-1.5 lg:grid-cols-2 lg:gap-x-3 lg:gap-y-2.5",
          ]))
      );
      function eS(e) {
        var t,
          r,
          n,
          o = e.anon,
          s = (0, h.useState)(function () {
            return ee.m.getItem(ee.F.GizmoDiscoveryLocale);
          }),
          i = s[0],
          a = s[1],
          c = function (e) {
            a(e), ee.m.setItem(ee.F.GizmoDiscoveryLocale, e);
          },
          d = (0, v.ec)(v.F_.isPersonalWorkspace),
          f = (0, u.z5)(i, !!o || d),
          p = f.data,
          x = f.isLoading,
          y = f.isError,
          b =
            null !== (t = null == p ? void 0 : p.locale) && void 0 !== t
              ? t
              : i,
          j = (0, h.useRef)({}),
          w = (0, h.useState)({}),
          N = w[0],
          k = w[1],
          P = (0, h.useMemo)(
            function () {
              return (0, en.uniqBy)(
                (0, en.compact)(
                  null == p
                    ? void 0
                    : p.cuts.map(function (e) {
                        return { id: e.info.id, name: e.info.display_group };
                      })
                ),
                "name"
              );
            },
            [p]
          ),
          z = (0, h.useRef)(null),
          S =
            null !==
              (r = P.find(function (e) {
                return N[e.id];
              })) && void 0 !== r
              ? r
              : P[0];
        (0, h.useEffect)(
          function () {
            var e = j.current,
              t = new IntersectionObserver(
                function (t) {
                  t.forEach(function (t) {
                    var r,
                      n = (function (e, t) {
                        var r =
                          ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                        if (!r) {
                          if (
                            Array.isArray(e) ||
                            (r = (function (e, t) {
                              if (e) {
                                if ("string" == typeof e) return eP(e, t);
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
                                  return eP(e, t);
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
                      })(P);
                    try {
                      for (n.s(); !(r = n.n()).done; )
                        !(function () {
                          var n = r.value,
                            o = e[n.id];
                          null != o &&
                            t.target === o &&
                            k(function (e) {
                              return ek(
                                ek({}, e),
                                {},
                                (0, l.Z)({}, n.id, t.isIntersecting)
                              );
                            });
                        })();
                    } catch (e) {
                      n.e(e);
                    } finally {
                      n.f();
                    }
                  });
                },
                { root: null, rootMargin: "-96px", threshold: 0.1 }
              );
            return (
              Object.values(e).forEach(function (e) {
                null != e && t.observe(e);
              }),
              function () {
                Object.values(e).forEach(function (e) {
                  null != e && t.unobserve(e);
                });
              }
            );
          },
          [j, P]
        );
        var E = (0, h.useRef)(null),
          O = (0, h.useRef)(null),
          M = (0, h.useState)(0),
          C = M[0],
          R = M[1];
        return ((0, h.useEffect)(
          function () {
            var e = O.current,
              t = function () {
                null != e && R(e.scrollTop);
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
          [O, R]
        ),
        x || y)
          ? (0, ew.jsxs)(ew.Fragment, {
              children: [
                o
                  ? (0, ew.jsx)(eh.S, {
                      redirectUrl: (0, g.cy)(),
                      className:
                        "sticky top-0 z-30 h-14 bg-white dark:bg-gray-800",
                    })
                  : (0, ew.jsx)(eC, { locale: b, setLocale: c }),
                (0, ew.jsx)("div", {
                  className: "flex h-full w-full items-center justify-center",
                  children: y
                    ? (0, ew.jsx)(ev.Z, {
                        type: "danger",
                        children: (0, ew.jsx)(ea.Z, ek({}, eB.discoveryError)),
                      })
                    : (0, ew.jsx)(m.Z, {}),
                }),
              ],
            })
          : (0, ew.jsxs)("div", {
              ref: O,
              className: "h-full overflow-y-auto",
              children: [
                o
                  ? (0, ew.jsx)(eh.S, {
                      redirectUrl: (0, g.cy)(),
                      className:
                        "sticky top-0 z-30 h-14 bg-white dark:bg-gray-800",
                    })
                  : (0, ew.jsx)(eC, {
                      pageSearchRef: E,
                      locale: b,
                      setLocale: c,
                    }),
                (0, ew.jsxs)("div", {
                  className: "mx-auto max-w-3xl overflow-x-clip px-4",
                  children: [
                    (0, ew.jsx)(eE, {}),
                    !o &&
                      (0, ew.jsx)(eG, {
                        ref: E,
                        className:
                          "z-20 mb-6 mt-2 flex-grow shadow-[0px_10px_10px_-6px_rgba(0,0,0,0.04)]",
                        inputClassName: "md:h-14 h-12 text-base pl-12",
                        iconClassName: "left-6",
                        resultsSizeOffset: Math.min(C - 260, -110),
                      }),
                    P.length > 1 &&
                      (0, ew.jsx)(eO, {
                        displayGroups: P,
                        currentDisplayGroup: S,
                        scrollToDisplayGroup: function (e) {
                          var t;
                          (null !== (t = j.current[e.id]) && void 0 !== t
                            ? t
                            : z.current
                          ).scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        },
                      }),
                    (0, ew.jsx)("div", { ref: z, className: "scroll-mt-28" }),
                    null !==
                      (n =
                        null == p
                          ? void 0
                          : p.cuts.map(function (e) {
                              var t;
                              return "featured" === e.info.display_type
                                ? (0, ew.jsx)(
                                    eR,
                                    {
                                      info: e.info,
                                      items: e.list.items,
                                      ref: function (t) {
                                        null != t && (j.current[e.info.id] = t);
                                      },
                                    },
                                    e.info.id
                                  )
                                : (0, ew.jsx)(
                                    eI,
                                    {
                                      info: e.info,
                                      items: e.list.items,
                                      cursor:
                                        null !== (t = e.list.cursor) &&
                                        void 0 !== t
                                          ? t
                                          : void 0,
                                      ref: function (t) {
                                        null != t && (j.current[e.info.id] = t);
                                      },
                                      anon: o,
                                    },
                                    e.info.id
                                  );
                            })) && void 0 !== n
                      ? n
                      : [],
                  ],
                }),
                (null == p ? void 0 : p.workspace_filtered) &&
                  (0, ew.jsx)(eM, {}),
              ],
            });
      }
      function eE() {
        return (0, ew.jsxs)("div", {
          className: "mb-6",
          children: [
            (0, ew.jsx)("div", {
              className:
                "my-2 text-center text-3xl font-bold md:my-4 md:text-5xl",
              children: (0, ew.jsx)(ea.Z, ek({}, eB.discoverySplashHeader)),
            }),
            (0, ew.jsx)("div", {
              className:
                "mx-auto w-full text-center text-sm font-light text-token-text-secondary md:text-lg md:leading-tight",
              children: (0, ew.jsx)(
                ea.Z,
                ek({}, eB.discoverySplashDescription)
              ),
            }),
          ],
        });
      }
      function eO(e) {
        var t = e.displayGroups,
          r = e.currentDisplayGroup,
          n = e.scrollToDisplayGroup,
          o = (0, h.useRef)(null),
          s = (0, h.useRef)({}),
          i = (0, h.useState)(!1),
          l = i[0],
          a = i[1];
        (0, h.useEffect)(
          function () {
            if (!l && null != r) {
              var e = s.current[r.id];
              if (null != e) {
                var t = o.current;
                null != t &&
                  (t.scrollLeft > e.offsetLeft
                    ? t.scrollBy({
                        left: e.offsetLeft - t.scrollLeft - 20,
                        behavior: "smooth",
                      })
                    : t.scrollLeft + t.clientWidth <
                        e.offsetLeft + e.clientWidth &&
                      t.scrollBy({
                        left:
                          e.offsetLeft +
                          e.clientWidth -
                          t.clientWidth -
                          t.scrollLeft +
                          20,
                        behavior: "smooth",
                      }));
              }
            }
          },
          [r, l]
        );
        var c = (0, h.useState)(!1),
          u = c[0],
          d = c[1],
          f = (0, h.useState)(!1),
          m = f[0],
          p = f[1];
        return (
          (0, h.useEffect)(
            function () {
              var e = o.current,
                t = function () {
                  null != e &&
                    (d(e.scrollLeft > 0),
                    p(e.scrollLeft + e.clientWidth < e.scrollWidth));
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
          (0, ew.jsxs)("div", {
            className:
              "relative sticky top-14 z-10 -ml-4 mb-12 w-screen bg-white py-2 text-sm dark:bg-gray-800 md:ml-0 md:w-full md:pb-0",
            children: [
              u &&
                (0, ew.jsx)("div", {
                  className:
                    "absolute left-0 top-0 z-10 flex hidden h-full items-end bg-gradient-to-r from-white from-50% to-transparent pr-8 dark:from-gray-800 md:block",
                  children: (0, ew.jsx)("button", {
                    className:
                      "mt-2 rounded-full bg-gray-100 p-1 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600",
                    onClick: function () {
                      null != o.current &&
                        o.current.scrollBy({ left: -400, behavior: "smooth" });
                    },
                    children: (0, ew.jsx)(ej.FX, { className: "icon-sm" }),
                  }),
                }),
              (0, ew.jsx)("div", {
                className:
                  "no-scrollbar flex scroll-m-5 gap-1.5 overflow-x-auto md:overflow-hidden",
                ref: o,
                children: t.map(function (e) {
                  return (0, ew.jsx)(
                    "div",
                    {
                      className: (0, et.default)(
                        "cursor-pointer scroll-mx-5 whitespace-nowrap rounded-3xl px-3 py-2 first:ml-4 last:mr-4 md:px-2 md:first:ml-0 md:last:mr-0",
                        e.id === (null == r ? void 0 : r.id)
                          ? "border-token-text-primary bg-black text-white dark:bg-gray-100 dark:text-gray-800 md:rounded-none md:border-b-2 md:bg-transparent md:text-black dark:md:bg-transparent dark:md:text-white"
                          : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 md:rounded-lg md:bg-transparent md:text-token-text-tertiary md:hover:bg-gray-50 dark:md:bg-transparent dark:md:hover:bg-gray-700"
                      ),
                      onClick: function () {
                        a(!0),
                          n(e),
                          setTimeout(function () {
                            a(!1);
                          }, 1e3);
                      },
                      ref: function (t) {
                        null != t && (s.current[e.id] = t);
                      },
                      children: e.name,
                    },
                    e.id
                  );
                }),
              }),
              m &&
                (0, ew.jsx)("div", {
                  className:
                    "absolute right-0 top-0 hidden h-full bg-gradient-to-l from-white from-50% to-transparent pl-8 dark:from-gray-800 md:block",
                  children: (0, ew.jsx)("button", {
                    className:
                      "mt-2 rounded-full bg-gray-100 p-1 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600",
                    onClick: function () {
                      null != o.current &&
                        o.current.scrollBy({ left: 400, behavior: "smooth" });
                    },
                    children: (0, ew.jsx)(ej.Gb, { className: "icon-sm" }),
                  }),
                }),
            ],
          })
        );
      }
      function eM() {
        var e = (0, ec.Z)(),
          t = (0, em.$3)(),
          r = (0, p.tN)(function (e) {
            return e.isDesktopNavCollapsed;
          });
        return (0, ew.jsxs)("div", {
          className: (0, et.default)(
            "fixed bottom-0 flex w-full items-center justify-center gap-2 bg-gray-100 p-3 text-sm text-token-text-tertiary dark:bg-gray-700",
            !r && "md:w-[calc(100%-16rem)]"
          ),
          children: [
            (0, ew.jsx)(ej.Oz, { className: "icon-sm" }),
            e.formatMessage(eB.discoveryThirdPartyGPTsDisabled, {
              workspaceName: t,
            }),
          ],
        });
      }
      function eC(e) {
        var t = e.pageSearchRef,
          r = e.locale,
          n = e.setLocale,
          o = (0, g.AA)(),
          s = (0, ei.useRouter)(),
          i = (0, ec.Z)(),
          l = (0, x.w$)(),
          a = (0, h.useState)(!1),
          u = a[0],
          m = a[1],
          p = (0, h.useState)(!1),
          v = p[0],
          y = p[1];
        return (
          (0, h.useEffect)(
            function () {
              if (null == t || "function" == typeof t) {
                m(!1);
                return;
              }
              var e = null == t ? void 0 : t.current,
                r = new IntersectionObserver(
                  function (t) {
                    t.forEach(function (t) {
                      t.target === e && m(!t.isIntersecting);
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
          (0, ew.jsx)(ew.Fragment, {
            children: (0, ew.jsxs)(d.QT, {
              className:
                "z-30 mx-auto flex w-full justify-center gap-2 whitespace-nowrap pt-[1.125rem]",
              children: [
                (0, ew.jsx)("div", {
                  className: (0, et.default)(
                    "w-[calc((100%-768px)/2)] min-w-fit",
                    v ? "hidden lg:flex" : "flex"
                  ),
                  children: (0, ew.jsx)(ep.u, {
                    side: "right",
                    label:
                      r === f.AR.GLOBAL
                        ? i.formatMessage(eB.discoveryGlobalViewOn)
                        : i.formatMessage(eB.discoveryGlobalViewOff),
                    children: (0, ew.jsx)("button", {
                      className:
                        "cursor-pointer rounded-lg px-4 py-3 hover:bg-gray-100 dark:text-gray-600 dark:hover:bg-gray-700",
                      onClick: function () {
                        r === f.AR.GLOBAL ? n(f.AR.ENGLISH) : n(f.AR.GLOBAL);
                      },
                      children: (0, ew.jsx)(ej.Fr, {
                        className: (0, et.default)(
                          "icon-sm",
                          r === f.AR.GLOBAL
                            ? "text-token-text-primary"
                            : "text-token-text-tertiary"
                        ),
                      }),
                    }),
                  }),
                }),
                (0, ew.jsx)(eG, {
                  className: "max-w-3xl flex-grow",
                  inputClassName: (0, et.default)(
                    "h-10 text-sm pl-9",
                    !u && "hidden"
                  ),
                  iconClassName: "left-4",
                  open: v,
                  setOpen: y,
                  resultsSizeOffset: -90,
                  placeholder: l
                    ? i.formatMessage(eB.discoverySearch)
                    : i.formatMessage(eB.discoverySearchSmall),
                }),
                (0, ew.jsxs)("div", {
                  className: (0, et.default)(
                    "w-[calc((100%-768px)/2)] min-w-fit justify-end gap-2",
                    v ? "hidden lg:flex" : "flex"
                  ),
                  children: [
                    (0, ew.jsx)("button", {
                      color: "neutral",
                      onClick: function () {
                        s.push("/gpts/mine", void 0, { shallow: !0 }),
                          J.A.logEvent(Q.M.storeMyGizmos);
                      },
                      className:
                        "rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600",
                      children: (0, ew.jsx)(ea.Z, ek({}, eB.discoveryMyGPTs)),
                    }),
                    (0, ew.jsxs)(c.z, {
                      color: "primary",
                      onClick: function () {
                        return J.A.logEvent(Q.M.storeCreateGizmo);
                      },
                      className: "focus:ring-0 focus:ring-offset-0",
                      as: "link",
                      to: o,
                      children: [
                        (0, ew.jsx)(ej.Ro, { className: "icon-sm -mx-1" }),
                        (0, ew.jsx)(ea.Z, ek({}, eB.discoveryCreateGPT)),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var eR = (0, h.forwardRef)(function (e, t) {
        var r = e.info,
          n = e.items;
        return (0, ew.jsx)(eD, {
          title: r.title,
          description: r.description,
          ref: t,
          children: (0, ew.jsx)(ez, {
            children: n.map(function (e, t) {
              return (0, ew.jsx)(
                eT,
                { resource: e.resource },
                "".concat(t, "-").concat(e.resource.gizmo.id)
              );
            }),
          }),
        });
      });
      function eT(e) {
        var t,
          r,
          n,
          o = e.resource,
          s =
            null === (t = o.gizmo.vanity_metrics) || void 0 === t
              ? void 0
              : t.num_conversations_str;
        return (0, ew.jsx)(eg.h9, {
          children: (0, ew.jsxs)(es(), {
            href: (0, u.m_)(o),
            shallow: !0,
            className:
              "flex h-24 items-center gap-5 overflow-hidden rounded-xl bg-gray-50 px-7 py-8 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 md:h-32 lg:h-36",
            target: "_blank",
            children: [
              (0, ew.jsx)(eb.Z, {
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
              (0, ew.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, ew.jsx)("div", {
                    className: "font-medium line-clamp-2 md:text-lg",
                    children: o.gizmo.display.name,
                  }),
                  (0, ew.jsx)("span", {
                    className: "text-xs line-clamp-2 md:line-clamp-3",
                    children: o.gizmo.display.description,
                  }),
                  (0, ew.jsxs)("div", {
                    className:
                      "mt-1 flex justify-start gap-1 text-xs font-light text-token-text-tertiary line-clamp-1",
                    children: [
                      (0, ew.jsx)(ey.ZP, {
                        gizmo: o,
                        className: "text-xs",
                        hideLink: !0,
                      }),
                      s &&
                        (0, ew.jsxs)(ew.Fragment, {
                          children: [
                            (0, ew.jsx)("span", {
                              className: "text-[10px]",
                              children: "•",
                            }),
                            (0, ew.jsx)(ej.M4, { className: "mt-0.5 h-3 w-3" }),
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
      var eI = (0, h.forwardRef)(function (e, t) {
        var r,
          n = e.info,
          o = e.items,
          s = e.cursor,
          i = e.anon,
          l = (0, h.useState)(0 === o.length),
          a = l[0],
          d = l[1],
          f = (0, u.Fi)(n.id, n.locale, 6, s, a),
          p = f.data,
          v = f.hasNextPage,
          x = f.fetchNextPage,
          g = f.isFetchingNextPage,
          y = f.isError,
          b =
            null !==
              (r =
                null == p
                  ? void 0
                  : p.pages.flatMap(function (e) {
                      return e.list.items;
                    })) && void 0 !== r
              ? r
              : [];
        (0, h.useEffect)(
          function () {
            0 === o.length && x();
          },
          [x, o.length]
        );
        var j = (0, h.useState)(b.length),
          w = j[0],
          N = j[1],
          k = (0, h.useRef)(null),
          P = (function (
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
                  r = (0, er.R)(n);
                l = r(l / t) * t;
              }
              return t + l;
            };
          })(0.1);
        return (
          (0, h.useEffect)(
            function () {
              if (b.length > w) {
                var e;
                N(b.length),
                  null === (e = k.current) ||
                    void 0 === e ||
                    e.scrollIntoView({ behavior: "smooth", block: "nearest" });
              }
            },
            [b.length, w]
          ),
          (0, ew.jsxs)(eD, {
            title: n.title,
            description: n.description,
            ref: t,
            children: [
              (0, ew.jsxs)(ez, {
                children: [
                  o.map(function (e, t) {
                    return (0, ew.jsx)(
                      eL,
                      { resource: e.resource, rank: t + 1, cutId: n.id },
                      t
                    );
                  }),
                  b.map(function (e, t) {
                    return (0, ew.jsx)(
                      eL,
                      {
                        resource: e.resource,
                        rank: o.length + t + 1,
                        cutId: n.id,
                        delay: P(t - w, b.length - w),
                      },
                      t
                    );
                  }),
                ],
              }),
              (!a || v || g || y) &&
                !i &&
                null != s &&
                (0, ew.jsx)(c.z, {
                  color: y ? "danger-outline" : "neutral",
                  onClick: function () {
                    d(!0),
                      J.A.publicEvent(Q.M.storeLoadMore, { section: n.id }),
                      x();
                  },
                  className:
                    "mt-2 h-10 w-full focus:ring-0 focus:ring-offset-0 md:mt-3",
                  children: y
                    ? (0, ew.jsx)(ea.Z, ek({}, eB.discoveryLoadMoreError))
                    : g
                      ? (0, ew.jsx)(m.Z, {})
                      : (0, ew.jsx)(ea.Z, ek({}, eB.discoveryLoadMore)),
                }),
              (0, ew.jsx)("div", { ref: k }),
            ],
          })
        );
      });
      function eL(e) {
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
        return (0, ew.jsx)(eg.h9, {
          delay: l,
          children: (0, ew.jsxs)(
            es(),
            {
              href: (0, u.m_)(o),
              shallow: !0,
              className:
                "flex h-[104px] items-center gap-2.5 overflow-hidden rounded-xl px-1 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 md:px-3 md:py-4 lg:px-3",
              target: "_blank",
              onClick: function () {
                J.A.publicEvent(Q.M.storeClickGizmo, {
                  gizmo_id: o.gizmo.id,
                  position: s,
                  section: i,
                });
              },
              children: [
                (0, ew.jsx)("div", {
                  className:
                    "text-md flex w-8 shrink-0 items-center justify-center font-semibold",
                  children: s,
                }),
                (0, ew.jsxs)("div", {
                  className:
                    "flex w-full flex-grow items-center gap-4 overflow-hidden",
                  children: [
                    (0, ew.jsx)(eb.Z, {
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
                    (0, ew.jsxs)("div", {
                      className: "overflow-hidden text-ellipsis break-words",
                      children: [
                        (0, ew.jsx)("span", {
                          className:
                            "text-sm font-medium leading-tight line-clamp-2",
                          children: o.gizmo.display.name,
                        }),
                        (0, ew.jsx)("span", {
                          className: "text-xs line-clamp-3",
                          children: o.gizmo.display.description,
                        }),
                        (0, ew.jsxs)("div", {
                          className:
                            "mt-1 flex items-center gap-1 text-ellipsis whitespace-nowrap pr-1 text-xs text-token-text-tertiary",
                          children: [
                            (0, ew.jsx)(ey.ZP, {
                              gizmo: o,
                              className: "text-xs",
                              hideLink: !0,
                            }),
                            a &&
                              (0, ew.jsxs)(ew.Fragment, {
                                children: [
                                  (0, ew.jsx)("span", {
                                    className: "text-[8px]",
                                    children: "•",
                                  }),
                                  (0, ew.jsx)(ej.M4, { className: "h-3 w-3" }),
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
      var eG = (0, h.forwardRef)(function (e, t) {
          var r = e.className,
            n = e.inputClassName,
            o = e.iconClassName,
            s = e.open,
            i = e.setOpen,
            l = e.resultsSizeOffset,
            a = e.placeholder,
            c = (0, ec.Z)(),
            u = (0, h.useState)(""),
            d = u[0],
            f = u[1],
            m = (0, h.useState)(!1),
            p = m[0],
            v = m[1],
            x = null != s ? s : p,
            g = null != i ? i : v,
            y = (0, h.useRef)(null);
          (0, h.useEffect)(
            function () {
              if (x) {
                var e = function (e) {
                    if ("Escape" === e.key) {
                      var t;
                      g(!1),
                        null === (t = y.current) || void 0 === t || t.blur();
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
            [x, g, y, t]
          );
          var b = (0, h.useState)(),
            j = b[0],
            w = b[1];
          return (
            (0, h.useEffect)(
              function () {
                var e,
                  t = function () {
                    var e;
                    w(
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
              [w]
            ),
            (0, ew.jsxs)(K, {
              as: "div",
              className: (0, et.default)("group relative rounded-xl", r),
              ref: t,
              children: [
                (0, ew.jsx)(el.jRj, {
                  className: (0, et.default)(
                    "pointer-none absolute left-3 top-0 mr-2 h-full text-gray-500",
                    o
                  ),
                  size: 16,
                }),
                (0, ew.jsx)("input", {
                  className: (0, et.default)(
                    "hover:dark-border-gray-500 z-10 w-full rounded-xl border border-gray-200 py-2 pr-3 font-normal outline-0 delay-100",
                    x
                      ? "border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                      : "hover:border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 hover:dark:bg-gray-700",
                    n
                  ),
                  placeholder:
                    null != a ? a : c.formatMessage(eB.discoverySearch),
                  value: d,
                  onChange: function (e) {
                    return f(e.target.value);
                  },
                  onFocus: function () {
                    g(!0), J.A.publicEvent(Q.M.searchOpened);
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
                  ref: y,
                }),
                (0, ew.jsx)(ex.m, {
                  show: x,
                  children: (0, ew.jsx)(K.Panel, {
                    static: !0,
                    className:
                      "absolute top-[calc(100%-10px)] w-full overflow-y-auto rounded-lg rounded-t-none border border-t-0 border-gray-300 bg-white pb-2 pt-4 dark:border-gray-600 dark:bg-gray-700",
                    style: {
                      maxHeight: null != j ? j + (null != l ? l : 0) : "100vh",
                    },
                    children: (0, ew.jsx)(e_, { query: d }),
                  }),
                }),
              ],
            })
          );
        }),
        eZ = ed.Z.div(
          i ||
            (i = (0, a.Z)([
              "pb-2 px-4 text-xs font-medium text-token-text-tertiary",
            ]))
        );
      function eA() {
        return (0, ew.jsx)("div", {
          className: "flex items-center justify-center py-1",
          children: (0, ew.jsx)(m.Z, {}),
        });
      }
      function e_(e) {
        var t = e.query,
          r = (0, h.useState)(""),
          n = r[0],
          o = r[1],
          s = (0, h.useRef)((0, ef.Z)());
        (0, h.useEffect)(function () {
          J.A.publicEvent(Q.M.searchStart);
        }, []),
          (0, h.useEffect)(
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
        (0, h.useEffect)(
          function () {
            !a &&
              l &&
              ((s.current = (0, ef.Z)()),
              l.items.length > 0
                ? Promise.all(
                    l.items.map(function (e, t) {
                      J.A.publicEvent(Q.M.searchDisplayResult, {
                        search_id: s.current,
                        gizmo_id: e.gizmo.id,
                        position: t,
                        query: n,
                      });
                    })
                  )
                : J.A.publicEvent(Q.M.searchNoResults, { query: n }));
          },
          [l, a, n]
        );
        var c = (0, u.Fi)("recent", void 0, 3),
          d = c.data,
          f = c.isLoading;
        if ("" === t) {
          if (f) return (0, ew.jsx)(eA, {});
          if (null != d) {
            var m = d.pages.flatMap(function (e) {
              return e.list.items;
            });
            return m.length > 0
              ? (0, ew.jsxs)(ew.Fragment, {
                  children: [
                    (0, ew.jsx)(eZ, {
                      children: (0, ew.jsx)(
                        ea.Z,
                        ek({}, eB.discoverySearchRecentlyUsed)
                      ),
                    }),
                    m.map(function (e, r) {
                      return (0, ew.jsx)(
                        eF,
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
              : (0, ew.jsx)(eZ, {
                  children: (0, ew.jsx)(
                    ea.Z,
                    ek({}, eB.discoverySearchRecentlyUsedEmpty)
                  ),
                });
          }
        }
        return a
          ? (0, ew.jsx)(eA, {})
          : l && 0 !== l.items.length
            ? (0, ew.jsxs)(ew.Fragment, {
                children: [
                  (0, ew.jsx)(eZ, {
                    children: (0, ew.jsx)(
                      ea.Z,
                      ek({}, eB.discoverySearchResults)
                    ),
                  }),
                  l.items.map(function (e, r) {
                    return (0, ew.jsx)(
                      eF,
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
            : (0, ew.jsx)("div", {
                className: "mx-2",
                children: (0, ew.jsx)(eZ, {
                  children: (0, ew.jsx)(
                    ea.Z,
                    ek({}, eB.discoveryNoResultsSearch)
                  ),
                }),
              });
      }
      function eF(e) {
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
        return (0, ew.jsxs)(es(), {
          href: (0, u.m_)(s),
          className:
            "mx-2 flex gap-3 rounded-lg px-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-600",
          target: "_blank",
          onClick: function () {
            J.A.publicEvent(Q.M.storeClickGizmo, {
              search_id: o,
              gizmo_id: s.gizmo.id,
              position: i,
              query: l,
              section: "search",
            });
          },
          children: [
            (0, ew.jsx)(eb.Z, {
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
            (0, ew.jsxs)("div", {
              className: "flex flex-col truncate",
              children: [
                (0, ew.jsx)("span", {
                  className: "truncate text-sm font-medium",
                  children: s.gizmo.display.name,
                }),
                (0, ew.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    (0, ew.jsx)(ey.ZP, {
                      gizmo: s,
                      className: "truncate text-xs font-medium",
                      hideLink: !0,
                    }),
                    a &&
                      (0, ew.jsxs)(ew.Fragment, {
                        children: [
                          (0, ew.jsx)("span", {
                            className:
                              "text-[10px] font-light text-token-text-tertiary",
                            children: "•",
                          }),
                          (0, ew.jsxs)("div", {
                            className:
                              "flex items-center gap-1 font-medium text-token-text-tertiary",
                            children: [
                              (0, ew.jsx)(ej.M4, { className: "icon-sm" }),
                              (0, ew.jsx)("span", {
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
      var eD = (0, h.forwardRef)(function (e, t) {
          var r = e.title,
            n = e.description,
            o = e.className,
            s = e.children;
          return (0, ew.jsxs)("div", {
            ref: t,
            className: "scroll-mt-28 last:h-[calc(100vh-8rem)]",
            children: [
              (0, ew.jsxs)(eg.h9, {
                animateTap: !1,
                children: [
                  (0, ew.jsx)("div", {
                    className: "text-xl font-medium md:text-2xl",
                    children: r,
                  }),
                  n &&
                    (0, ew.jsx)("div", {
                      className:
                        "text-sm text-token-text-tertiary md:text-base",
                      children: n,
                    }),
                ],
              }),
              (0, ew.jsx)("div", {
                className: (0, et.default)("mb-10 mt-4", o),
                children: s,
              }),
            ],
          });
        }),
        eB = (0, eu.vU)({
          discoveryEmpty: {
            id: "gizmo.discovery.empty",
            defaultMessage: "Nothing to discover",
          },
          discoveryNoResultsSearch: {
            id: "gizmo.discovery.search.empty",
            defaultMessage: "No results found",
          },
          discoveryError: {
            id: "gizmo.discovery.error",
            defaultMessage: "Error loading GPTs",
          },
          discoverySearch: {
            id: "gizmo.discovery.search",
            defaultMessage: "Search public GPTs",
          },
          discoverySearchSmall: {
            id: "gizmo.discovery.searchSmall",
            defaultMessage: "Search",
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
          discoveryLoadMoreError: {
            id: "gizmo.discovery.loadMoreError",
            defaultMessage: "Error loading more",
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
        a = r(5813),
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
          return Z;
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
        y = r(99715),
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
        M = r(87942),
        C = r(35250);
      function R(e) {
        var t = e.delay,
          r = e.animateTap,
          n = e.children;
        return (0, C.jsx)(j.E.div, {
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
        return (0, C.jsxs)("div", {
          children: [
            n.gizmo.share_recipient !== v.Zz.Private && null != o
              ? (0, C.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, C.jsx)(f.M4, { className: "icon-sm" }),
                    (0, C.jsx)("span", {
                      children: l.formatMessage(F.conversationCountStrLabel, {
                        numConvos: o,
                      }),
                    }),
                  ],
                })
              : void 0,
            (0, C.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [
                s === v.Zz.Link || s === v.Zz.Marketplace
                  ? (0, C.jsx)(f.Ao, { className: "icon-sm" })
                  : s === v.Zz.Workspace
                    ? (0, C.jsx)(f.oq, { className: "icon-sm" })
                    : (0, C.jsx)(f.LX, { className: "icon-sm" }),
                (0, C.jsx)("span", { className: "line-clamp-1", children: i }),
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
        return (0, C.jsx)(A, {
          href: m ? (0, h.AA)(o.gizmo.id) : (0, d.m_)(o),
          icon: (0, C.jsx)(c.Z, {
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
            ? (0, C.jsx)(T, { gizmoResource: o })
            : (0, C.jsx)(O.ZP, { gizmo: o }),
          buttons: (0, C.jsxs)(C.Fragment, {
            children: [
              l &&
                (0, C.jsx)(a.u, {
                  label: "Edit GPT",
                  className: "flex justify-center",
                  side: "top",
                  children: (0, C.jsx)("button", {
                    className:
                      "rounded-lg px-3 py-2 text-token-text-primary transition-transform duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",
                    onClick: function () {
                      i.push((0, h.AA)(o.gizmo.id), void 0, { shallow: !0 });
                    },
                    children: (0, C.jsx)(f.eu, { className: "icon-sm" }),
                  }),
                }),
              (0, C.jsx)(_, {
                gizmoResource: o,
                isOwner: l,
                canRemoveRecent: s,
              }),
            ],
          }),
        });
      }
      function L() {
        return (0, C.jsx)("span", {
          className:
            "rounded-full bg-blue-100 px-1.5 py-0.5 text-[10px] font-medium text-blue-600",
          children: "Beta",
        });
      }
      ((s || (s = {})).Grid1 = "grid-1"),
        ((n = i || (i = {})).Enabled = "enabled"),
        (n.ComingSoon = "coming-soon");
      var G = E.Z.div(
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
      function Z(e) {
        var t = e.type,
          r = (0, h.J8)(),
          n = t === i.ComingSoon;
        return (0, C.jsxs)(a.E, {
          disabled: !n,
          label: "GPT creation will be available in the coming weeks",
          children: [
            (0, C.jsx)(A, {
              href: r,
              disabled: n,
              icon: (0, C.jsx)(G, {
                $disabled: n,
                children: (0, C.jsx)(f.Ro, {
                  className: (0, b.default)("icon-sm", n && "opacity-30"),
                }),
              }),
              title: (0, C.jsxs)("div", {
                className: "flex items-center gap-1",
                children: ["Create a GPT ", (0, C.jsx)(L, {})],
              }),
              description:
                "Customize a version of ChatGPT for a specific purpose",
              byline: n
                ? (0, C.jsx)("div", {
                    className: "flex items-center justify-end",
                    children: (0, C.jsx)("div", {
                      className: "flex items-center",
                      children: "Coming soon",
                    }),
                  })
                : void 0,
            }),
            (0, C.jsx)("div", {
              className: "h-px bg-gray-100 dark:bg-gray-700",
            }),
          ],
        });
      }
      function A(e) {
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
          f = (0, C.jsxs)(C.Fragment, {
            children: [
              (0, C.jsxs)("div", {
                className:
                  "flex grow items-center overflow-hidden md:w-3/5 md:grow-0",
                children: [
                  r,
                  (0, C.jsxs)("div", {
                    className: (0, b.default)(
                      "grow overflow-hidden pl-4 pr-9 leading-tight",
                      c ? "opacity-50" : "hover:cursor-pointer"
                    ),
                    children: [
                      (0, C.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, C.jsx)("span", {
                            className: "font-medium",
                            children: n,
                          }),
                          void 0 !== o &&
                            o &&
                            (0, C.jsx)(a.u, {
                              label: "Draft",
                              className: "flex justify-center",
                              side: "top",
                              children: (0, C.jsx)("div", {
                                className:
                                  "m-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-600",
                              }),
                            }),
                        ],
                      }),
                      (0, C.jsx)("div", {
                        className:
                          "overflow-hidden text-ellipsis break-words text-sm line-clamp-2",
                        children: s,
                      }),
                      null != i &&
                        (0, C.jsx)("div", {
                          className:
                            "text-ellipsis text-sm text-gray-500 md:hidden",
                          children: i,
                        }),
                    ],
                  }),
                ],
              }),
              null != i &&
                (0, C.jsx)("div", {
                  className:
                    "hidden flex-1 text-ellipsis text-sm text-gray-500 md:block",
                  children: i,
                }),
              null != l &&
                (0, C.jsx)("div", {
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
          ? (0, C.jsx)(R, {
              children: (0, C.jsx)("span", { className: d, children: f }),
            })
          : (0, C.jsx)(R, {
              children: (0, C.jsx)(N(), {
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
          ? (0, C.jsxs)(C.Fragment, {
              children: [
                (0, C.jsxs)(y.fC, {
                  open: a,
                  onOpenChange: function (e) {
                    return c(e);
                  },
                  children: [
                    (0, C.jsx)(y.xz, {
                      asChild: !0,
                      children: (0, C.jsx)("button", {
                        color: "neutral",
                        className:
                          "rounded-lg bg-transparent px-3 py-2 text-token-text-primary duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",
                        onClick: function () {
                          c(function (e) {
                            return !e;
                          });
                        },
                        children: (0, C.jsx)(f.Yr, { className: "icon-md" }),
                      }),
                    }),
                    (0, C.jsx)(y.Uv, {
                      children: (0, C.jsxs)(y.VY, {
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
                            ? (0, C.jsxs)(p.UA, {
                                color: "danger",
                                onClick: function () {
                                  i(!0);
                                },
                                children: [
                                  (0, C.jsx)(f.a_, { className: "icon-md" }),
                                  "Delete GPT",
                                ],
                              })
                            : (0, C.jsx)(C.Fragment, {}),
                          n &&
                            (0, C.jsx)(p.UA, {
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
                  (0, C.jsx)(g.h, {
                    children: (0, C.jsx)(M.b, {
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
//# sourceMappingURL=6276-d41d321c9ff543e0.js.map
