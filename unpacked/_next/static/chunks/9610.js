"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9610],
  {
    89610: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return s;
          },
        });
      var i = r(70079),
        a = r(99581),
        n = r(20956),
        l = r(75329),
        o = r(15777);
      let d = (0, r(78228).z)("div")({
        name: "DataGridOverlayEditorStyle",
        class: "gdg-d19meir1",
        propsAsIs: !1,
        vars: {
          "d19meir1-0": [(e) => e.targetY, "px"],
          "d19meir1-1": [(e) => e.targetX - 1, "px"],
          "d19meir1-2": [(e) => e.targetY - 1, "px"],
          "d19meir1-3": [(e) => e.targetWidth + 2, "px"],
          "d19meir1-4": [(e) => e.targetHeight + 2, "px"],
          "d19meir1-5": [(e) => e.targetY + 10, "px"],
          "d19meir1-6": [(e) => Math.max(0, (e.targetHeight - 28) / 2), "px"],
        },
      });
      var s = (e) => {
        let t, r;
        let {
            target: s,
            content: u,
            onFinishEditing: c,
            forceEditMode: g,
            initialValue: v,
            imageEditorOverride: m,
            markdownDivCreateNode: f,
            highlight: p,
            className: h,
            theme: y,
            id: b,
            cell: E,
            validateCell: k,
            getCellRenderer: C,
            provideEditor: w,
            isOutsideClick: x,
          } = e,
          [D, P] = i.useState(g ? u : void 0),
          S = i.useRef(D ?? u);
        S.current = D ?? u;
        let [N, O] = i.useState(
            () => void 0 === k || !((0, o.T9)(u) && k?.(E, u, S.current) === !1)
          ),
          F = i.useCallback(
            (e, t) => {
              c(N ? e : void 0, t);
            },
            [N, c]
          ),
          I = i.useCallback(
            (e) => {
              if (void 0 !== k && void 0 !== e && (0, o.T9)(e)) {
                let t = k(E, e, S.current);
                !1 === t ? O(!1) : ("object" == typeof t && (e = t), O(!0));
              }
              P(e);
            },
            [E, k]
          ),
          M = i.useRef(!1),
          R = i.useRef(void 0),
          T = i.useCallback(() => {
            F(D, [0, 0]), (M.current = !0);
          }, [D, F]),
          A = i.useCallback(
            (e, t) => {
              F(e, t ?? R.current ?? [0, 0]), (M.current = !0);
            },
            [F]
          ),
          H = i.useCallback(
            async (e) => {
              let t = !1;
              "Escape" === e.key
                ? (e.stopPropagation(),
                  e.preventDefault(),
                  (R.current = [0, 0]))
                : "Enter" !== e.key || e.shiftKey
                  ? "Tab" === e.key &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (R.current = [e.shiftKey ? -1 : 1, 0]),
                    (t = !0))
                  : (e.stopPropagation(),
                    e.preventDefault(),
                    (R.current = [0, 1]),
                    (t = !0)),
                window.setTimeout(() => {
                  M.current ||
                    void 0 === R.current ||
                    (F(t ? D : void 0, R.current), (M.current = !0));
                }, 0);
            },
            [F, D]
          ),
          Y = D ?? u,
          [_, K] = i.useMemo(() => {
            if ((0, o.rs)(u)) return [];
            let e = w?.(u);
            return void 0 !== e ? [e, !1] : [C(u)?.provideEditor?.(u), !1];
          }, [u, C, w]),
          { ref: W, style: X } = (function () {
            let [e, t] = (function () {
                let [e, t] = i.useState();
                return [e ?? void 0, t];
              })(),
              [r, a] = i.useState(0),
              [n, l] = i.useState(!0);
            return (
              i.useLayoutEffect(() => {
                if (void 0 === e || !("IntersectionObserver" in window)) return;
                let t = new IntersectionObserver(
                  (e) => {
                    0 !== e.length && l(e[0].isIntersecting);
                  },
                  { threshold: 1 }
                );
                return t.observe(e), () => t.disconnect();
              }, [e]),
              i.useEffect(() => {
                let t;
                if (n || void 0 === e) return;
                let r = () => {
                  let { right: i } = e.getBoundingClientRect();
                  a((e) => Math.min(e + window.innerWidth - i - 10, 0)),
                    (t = requestAnimationFrame(r));
                };
                return (
                  (t = requestAnimationFrame(r)),
                  () => {
                    void 0 !== t && cancelAnimationFrame(t);
                  }
                );
              }, [e, n]),
              {
                ref: t,
                style: i.useMemo(
                  () => ({ transform: `translateX(${r}px)` }),
                  [r]
                ),
              }
            );
          })(),
          q = !0,
          B = !0;
        if (void 0 !== _) {
          (q = !0 !== _.disablePadding), (B = !0 !== _.disableStyling);
          let e = (0, o.DP)(_);
          e && (r = _.styleOverride);
          let a = e ? _.editor : _;
          t = i.createElement(a, {
            isHighlighted: p,
            onChange: I,
            value: Y,
            initialValue: v,
            onFinishedEditing: A,
            validatedSelection: (0, o.T9)(Y) ? Y.selectionRange : void 0,
            forceEditMode: g,
            target: s,
            imageEditorOverride: m,
            markdownDivCreateNode: f,
            isValid: N,
            theme: y,
          });
        }
        r = { ...r, ...X };
        let G = document.getElementById("portal");
        if (null === G)
          return (
            console.error(
              'Cannot open Data Grid overlay editor, because portal not found.  Please add `<div id="portal" />` as the last child of your `<body>`.'
            ),
            null
          );
        let V = B ? "gdg-style" : "gdg-unstyle";
        return (
          N || (V += " gdg-invalid"),
          q && (V += " gdg-pad"),
          (0, a.createPortal)(
            i.createElement(
              l.Ni.Provider,
              { value: y },
              i.createElement(
                n.Z,
                {
                  style: (0, l.be)(y),
                  className: h,
                  onClickOutside: T,
                  isOutsideClick: x,
                },
                i.createElement(
                  d,
                  {
                    ref: W,
                    id: b,
                    className: V,
                    style: r,
                    as: !0 === K ? "label" : void 0,
                    targetX: s.x,
                    targetY: s.y,
                    targetWidth: s.width,
                    targetHeight: s.height,
                  },
                  i.createElement(
                    "div",
                    { className: "gdg-clip-region", onKeyDown: H },
                    t
                  )
                )
              )
            ),
            G
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=9610.aead845693cd969c.js.map
