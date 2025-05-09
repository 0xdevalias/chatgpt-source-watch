(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2774],
  {
    2208: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          DynamicDrawingCanvas: function () {
            return v;
          },
        });
      var n = r(18450),
        o = r(67739),
        a = r(62014),
        l = r(61888),
        u = r(68003),
        s = r.n(u),
        i = r(70079),
        c = r(35250);
      let f = ["drawingCanvasRef"];
      function p(e, t) {
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
      function v(e) {
        let { drawingCanvasRef: t } = e,
          r = (0, o.Z)(e, f);
        return (0, c.jsx)(
          d,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? p(Object(r), !0).forEach(function (t) {
                    (0, n.Z)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : p(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      );
                    });
            }
            return e;
          })({ ref: t }, r)
        );
      }
      let d = (0, i.forwardRef)(function (e, t) {
        var r;
        let {
            color: n,
            dashedOutlineColor: o,
            cursorWidth: a,
            canvasWidth: u,
            canvasHeight: f,
            currentDrawnShape: p,
            onNewDrawnShape: v,
          } = e,
          d = (0, i.useRef)(null),
          g = (0, i.useRef)(null),
          { 0: C, 1: y } = (0, i.useState)(),
          { 0: O, 1: k } = (0, i.useState)(!1);
        (0, i.useImperativeHandle)(t, () => ({
          getImageData: () => {
            var e;
            let t = h(d);
            null != p && (b(p), s().view.update());
            let r =
              null === (e = t.getContext("2d")) || void 0 === e
                ? void 0
                : e.getImageData(0, 0, t.width, t.height);
            if (null == r) throw Error("Failed to get image data from canvas");
            return null != p && null != o && m(p, new (s().Color)(o)), r;
          },
        }));
        let j = (0, i.useMemo)(
            () =>
              (0, l.throttle)((e) => {
                if (null != g.current) {
                  let t = w(e.point, h(d)),
                    r = (function (e, t, r) {
                      let n = e.getDistance(t),
                        o = new (s().Rectangle)(
                          e.subtract([r / 2, r / 2]),
                          new (s().Size)(n + r, r)
                        ),
                        a = new (s().Size)(r / 2, r / 2),
                        l = new (s().Path.Rectangle)(o, a);
                      return l.rotate(t.subtract(e).angle, e), l;
                    })(g.current.prevPoint, t, a);
                  if (null != g.current.shape) {
                    let e = g.current.shape;
                    (g.current.shape = g.current.shape.unite(r)),
                      e.remove(),
                      r.remove();
                  } else g.current.shape = r;
                  (g.current.shape.fillColor = new (s().Color)(n)),
                    (g.current.prevPoint = t);
                }
              }, 50),
            [n, a]
          ),
          E = (0, i.useCallback)((e) => j(e), [j]),
          P = (0, i.useCallback)(() => {
            var e;
            if (
              (j.cancel(),
              (null === (e = g.current) || void 0 === e ? void 0 : e.shape) !=
                null)
            ) {
              let e = new (s().Path.Rectangle)({
                  point: [0, 0],
                  size: s().view.size,
                }),
                t = g.current.shape.intersect(e);
              (t.fillColor = new (s().Color)(n)),
                null != o && m(t, new (s().Color)(o)),
                v(t),
                g.current.shape.remove(),
                e.remove();
            }
            (g.current = null), k(!1);
          }, [j, n, o, v]),
          x = (0, i.useCallback)(
            (e) => {
              let t = null;
              null != p && (b((t = p.clone())), p.remove()),
                (g.current = { shape: t, prevPoint: w(e.point, h(d)) }),
                k(!0);
            },
            [p]
          ),
          D = (0, i.useCallback)(() => {
            null != p && p.dashArray.length > 0 && (p.dashOffset += 0.2);
          }, [p]),
          L = (0, i.useCallback)((e) => {
            e.preventDefault();
          }, []),
          S = (0, i.useCallback)((e) => {
            "mouse" === e.pointerType &&
              y(new (s().Point)([e.offsetX, e.offsetY]));
          }, []),
          _ = (0, i.useCallback)((e) => {
            "mouse" === e.pointerType &&
              y(new (s().Point)([e.offsetX, e.offsetY]));
          }, []),
          R = (0, i.useCallback)((e) => {
            "mouse" === e.pointerType && y(void 0);
          }, []);
        (0, i.useEffect)(() => {
          s().setup(h(d)), (s().view.viewSize = new (s().Size)(u, f));
        }, []),
          (0, i.useEffect)(() => {
            s().project.activeLayer.removeChildren(),
              null != p && s().project.activeLayer.addChild(p);
          }, [p]),
          (0, i.useEffect)(() => {
            let e = h(d);
            return (
              e.addEventListener("pointerover", S),
              e.addEventListener("pointermove", _),
              e.addEventListener("pointerout", R),
              e.addEventListener("touchstart", L),
              () => {
                e.removeEventListener("pointerover", S),
                  e.removeEventListener("pointermove", _),
                  e.removeEventListener("pointerout", R),
                  e.removeEventListener("touchstart", L);
              }
            );
          }, [S, _, R, L]),
          (0, i.useEffect)(
            () => (
              s().view.on("mousedown", x),
              s().view.on("mousedrag", E),
              s().view.on("mouseup", P),
              s().view.on("frame", D),
              () => {
                s().view.off("mousedown", x),
                  s().view.off("mousedrag", E),
                  s().view.off("mouseup", P),
                  s().view.off("frame", D);
              }
            ),
            [x, E, P, D]
          );
        let z = d.current ? (a * (r = d.current).offsetWidth) / r.width : a;
        return (0, c.jsxs)("div", {
          className: "relative h-full w-full cursor-none",
          children: [
            (0, c.jsx)("canvas", {
              ref: d,
              width: u,
              height: f,
              className: "h-full w-full",
              "data-paper-hidpi": "off",
            }),
            C &&
              (0, c.jsx)("div", {
                className:
                  "pointer-events-none absolute left-0 top-0 rounded-full border-[3px] shadow-[0_2px_3px_0_rgba(0,0,0,0.25)]",
                style: {
                  width: "".concat(z, "px"),
                  height: "".concat(z, "px"),
                  transform: "translate("
                    .concat(C.x - z / 2, "px, ")
                    .concat(C.y - z / 2, "px) scale(")
                    .concat(O ? 1 : 1.05, ")"),
                },
              }),
          ],
        });
      });
      function h(e) {
        return (0, a.S)(e.current);
      }
      function w(e, t) {
        return e.multiply(t.width / t.offsetWidth);
      }
      function m(e, t) {
        (e.strokeColor = t),
          (e.strokeWidth = 2),
          (e.strokeCap = "round"),
          (e.dashArray = [6, 8]),
          (e.dashOffset = 0);
      }
      function b(e) {
        (e.strokeColor = null),
          (e.strokeWidth = 0),
          (e.dashArray = []),
          (e.dashOffset = 0);
      }
    },
    16094: function () {},
    79465: function () {},
  },
]);
//# sourceMappingURL=2774.62aa612d4e279f8f.js.map
