(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2144],
  {
    36241: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return S;
        },
      });
      var n = r(70557),
        i = r(65998),
        l = (function () {
          if ("undefined" != typeof window) {
            if (window.devicePixelRatio) return window.devicePixelRatio;
            var e = window.screen;
            if (e) return (e.deviceXDPI || 1) / (e.logicalXDPI || 1);
          }
          return 1;
        })(),
        o = {
          toTextLines: function (e) {
            var t,
              r = [];
            for (e = [].concat(e); e.length; )
              "string" == typeof (t = e.pop())
                ? r.unshift.apply(r, t.split("\n"))
                : Array.isArray(t)
                  ? e.push.apply(e, t)
                  : (0, n.k)(e) || r.unshift("" + t);
            return r;
          },
          textSize: function (e, t, r) {
            var n,
              i = [].concat(t),
              l = i.length,
              o = e.font,
              a = 0;
            for (n = 0, e.font = r.string; n < l; ++n)
              a = Math.max(e.measureText(i[n]).width, a);
            return (e.font = o), { height: l * r.lineHeight, width: a };
          },
          bound: function (e, t, r) {
            return Math.max(e, Math.min(t, r));
          },
          arrayDiff: function (e, t) {
            var r,
              n,
              i,
              l,
              o = e.slice(),
              a = [];
            for (r = 0, i = t.length; r < i; ++r)
              (l = t[r]),
                -1 === (n = o.indexOf(l)) ? a.push([l, 1]) : o.splice(n, 1);
            for (r = 0, i = o.length; r < i; ++r) a.push([o[r], -1]);
            return a;
          },
          rasterize: function (e) {
            return Math.round(e * l) / l;
          },
        };
      function a(e, t) {
        var r = t.x,
          n = t.y;
        if (null === r) return { x: 0, y: -1 };
        if (null === n) return { x: 1, y: 0 };
        var i = e.x - r,
          l = e.y - n,
          o = Math.sqrt(i * i + l * l);
        return { x: o ? i / o : 0, y: o ? l / o : -1 };
      }
      function s(e, t, r) {
        var n = 0;
        return (
          e < r.left ? (n |= 1) : e > r.right && (n |= 2),
          t < r.top ? (n |= 8) : t > r.bottom && (n |= 4),
          n
        );
      }
      function c(e, t) {
        var r,
          n,
          i = t.anchor,
          l = e;
        return (
          t.clamp &&
            (l = (function (e, t) {
              for (
                var r,
                  n,
                  i,
                  l = e.x0,
                  o = e.y0,
                  a = e.x1,
                  c = e.y1,
                  u = s(l, o, t),
                  d = s(a, c, t);
                u | d && !(u & d);
              )
                8 & (r = u || d)
                  ? ((n = l + ((a - l) * (t.top - o)) / (c - o)), (i = t.top))
                  : 4 & r
                    ? ((n = l + ((a - l) * (t.bottom - o)) / (c - o)),
                      (i = t.bottom))
                    : 2 & r
                      ? ((i = o + ((c - o) * (t.right - l)) / (a - l)),
                        (n = t.right))
                      : 1 & r &&
                        ((i = o + ((c - o) * (t.left - l)) / (a - l)),
                        (n = t.left)),
                  r === u
                    ? (u = s((l = n), (o = i), t))
                    : (d = s((a = n), (c = i), t));
              return { x0: l, x1: a, y0: o, y1: c };
            })(l, t.area)),
          "start" === i
            ? ((r = l.x0), (n = l.y0))
            : "end" === i
              ? ((r = l.x1), (n = l.y1))
              : ((r = (l.x0 + l.x1) / 2), (n = (l.y0 + l.y1) / 2)),
          (function (e, t, r, n, i) {
            switch (i) {
              case "center":
                r = n = 0;
                break;
              case "bottom":
                (r = 0), (n = 1);
                break;
              case "right":
                (r = 1), (n = 0);
                break;
              case "left":
                (r = -1), (n = 0);
                break;
              case "top":
                (r = 0), (n = -1);
                break;
              case "start":
                (r = -r), (n = -n);
                break;
              case "end":
                break;
              default:
                (i *= Math.PI / 180), (r = Math.cos(i)), (n = Math.sin(i));
            }
            return { x: e, y: t, vx: r, vy: n };
          })(r, n, e.vx, e.vy, t.align)
        );
      }
      var u = {
          arc: function (e, t) {
            var r = (e.startAngle + e.endAngle) / 2,
              n = Math.cos(r),
              i = Math.sin(r),
              l = e.innerRadius,
              o = e.outerRadius;
            return c(
              {
                x0: e.x + n * l,
                y0: e.y + i * l,
                x1: e.x + n * o,
                y1: e.y + i * o,
                vx: n,
                vy: i,
              },
              t
            );
          },
          point: function (e, t) {
            var r = a(e, t.origin),
              n = r.x * e.options.radius,
              i = r.y * e.options.radius;
            return c(
              {
                x0: e.x - n,
                y0: e.y - i,
                x1: e.x + n,
                y1: e.y + i,
                vx: r.x,
                vy: r.y,
              },
              t
            );
          },
          bar: function (e, t) {
            var r = a(e, t.origin),
              n = e.x,
              i = e.y,
              l = 0,
              o = 0;
            return (
              e.horizontal
                ? ((n = Math.min(e.x, e.base)), (l = Math.abs(e.base - e.x)))
                : ((i = Math.min(e.y, e.base)), (o = Math.abs(e.base - e.y))),
              c({ x0: n, y0: i + o, x1: n + l, y1: i, vx: r.x, vy: r.y }, t)
            );
          },
          fallback: function (e, t) {
            var r = a(e, t.origin);
            return c(
              {
                x0: e.x,
                y0: e.y,
                x1: e.x + (e.width || 0),
                y1: e.y + (e.height || 0),
                vx: r.x,
                vy: r.y,
              },
              t
            );
          },
        },
        d = o.rasterize,
        h = function (e, t, r, n) {
          (this._config = e),
            (this._index = n),
            (this._model = null),
            (this._rects = null),
            (this._ctx = t),
            (this._el = r);
        };
      (0, n.a4)(h.prototype, {
        _modelize: function (e, t, r, l) {
          var a,
            s = this._index,
            c = (0, n.a0)((0, n.a)([r.font, {}], l, s)),
            d = (0, n.a)([r.color, n.d.color], l, s);
          return {
            align: (0, n.a)([r.align, "center"], l, s),
            anchor: (0, n.a)([r.anchor, "center"], l, s),
            area: l.chart.chartArea,
            backgroundColor: (0, n.a)([r.backgroundColor, null], l, s),
            borderColor: (0, n.a)([r.borderColor, null], l, s),
            borderRadius: (0, n.a)([r.borderRadius, 0], l, s),
            borderWidth: (0, n.a)([r.borderWidth, 0], l, s),
            clamp: (0, n.a)([r.clamp, !1], l, s),
            clip: (0, n.a)([r.clip, !1], l, s),
            color: d,
            display: e,
            font: c,
            lines: t,
            offset: (0, n.a)([r.offset, 4], l, s),
            opacity: (0, n.a)([r.opacity, 1], l, s),
            origin: (function (e, t) {
              var r = t.chart.getDatasetMeta(t.datasetIndex).vScale;
              if (!r) return null;
              if (void 0 !== r.xCenter && void 0 !== r.yCenter)
                return { x: r.xCenter, y: r.yCenter };
              var n = r.getBasePixel();
              return e.horizontal ? { x: n, y: null } : { x: null, y: n };
            })(this._el, l),
            padding: (0, n.E)((0, n.a)([r.padding, 4], l, s)),
            positioner:
              (a = this._el) instanceof i.qi
                ? u.arc
                : a instanceof i.od
                  ? u.point
                  : a instanceof i.ZL
                    ? u.bar
                    : u.fallback,
            rotation: (0, n.a)([r.rotation, 0], l, s) * (Math.PI / 180),
            size: o.textSize(this._ctx, t, c),
            textAlign: (0, n.a)([r.textAlign, "start"], l, s),
            textShadowBlur: (0, n.a)([r.textShadowBlur, 0], l, s),
            textShadowColor: (0, n.a)([r.textShadowColor, d], l, s),
            textStrokeColor: (0, n.a)([r.textStrokeColor, d], l, s),
            textStrokeWidth: (0, n.a)([r.textStrokeWidth, 0], l, s),
          };
        },
        update: function (e) {
          var t,
            r,
            i,
            l,
            a,
            s,
            c,
            u,
            d,
            h,
            f = null,
            p = null,
            g = this._index,
            m = this._config,
            v = (0, n.a)([m.display, !0], e, g);
          v &&
            ((t = e.dataset.data[g]),
            (r = (0, n.v)((0, n.Q)(m.formatter, [t, e]), t)),
            (i = (0, n.k)(r) ? [] : o.toTextLines(r)).length) &&
            ((a = (l = f = this._modelize(v, i, m, e)).borderWidth || 0),
            (s = l.padding),
            (c = l.size.height),
            (d = -(u = l.size.width) / 2),
            (h = -c / 2),
            (p = {
              frame: {
                x: d - s.left - a,
                y: h - s.top - a,
                w: u + s.width + 2 * a,
                h: c + s.height + 2 * a,
              },
              text: { x: d, y: h, w: u, h: c },
            })),
            (this._model = f),
            (this._rects = p);
        },
        geometry: function () {
          return this._rects ? this._rects.frame : {};
        },
        rotation: function () {
          return this._model ? this._model.rotation : 0;
        },
        visible: function () {
          return this._model && this._model.opacity;
        },
        model: function () {
          return this._model;
        },
        draw: function (e, t) {
          var r,
            n,
            i,
            l,
            a,
            s = e.ctx,
            c = this._model,
            u = this._rects;
          this.visible() &&
            (s.save(),
            c.clip &&
              ((a = c.area),
              s.beginPath(),
              s.rect(a.left, a.top, a.right - a.left, a.bottom - a.top),
              s.clip()),
            (s.globalAlpha = o.bound(0, c.opacity, 1)),
            s.translate(d(t.x), d(t.y)),
            s.rotate(c.rotation),
            (r = u.frame),
            (n = c.backgroundColor),
            (i = c.borderColor),
            (l = c.borderWidth),
            (n || (i && l)) &&
              (s.beginPath(),
              (function (e, t, r, n, i, l) {
                var o = Math.PI / 2;
                if (l) {
                  var a = Math.min(l, i / 2, n / 2),
                    s = t + a,
                    c = r + a,
                    u = t + n - a,
                    d = r + i - a;
                  e.moveTo(t, c),
                    s < u && c < d
                      ? (e.arc(s, c, a, -Math.PI, -o),
                        e.arc(u, c, a, -o, 0),
                        e.arc(u, d, a, 0, o),
                        e.arc(s, d, a, o, Math.PI))
                      : s < u
                        ? (e.moveTo(s, r),
                          e.arc(u, c, a, -o, o),
                          e.arc(s, c, a, o, Math.PI + o))
                        : c < d
                          ? (e.arc(s, c, a, -Math.PI, 0),
                            e.arc(s, d, a, 0, Math.PI))
                          : e.arc(s, c, a, -Math.PI, Math.PI),
                    e.closePath(),
                    e.moveTo(t, r);
                } else e.rect(t, r, n, i);
              })(
                s,
                d(r.x) + l / 2,
                d(r.y) + l / 2,
                d(r.w) - l,
                d(r.h) - l,
                c.borderRadius
              ),
              s.closePath(),
              n && ((s.fillStyle = n), s.fill()),
              i &&
                l &&
                ((s.strokeStyle = i),
                (s.lineWidth = l),
                (s.lineJoin = "miter"),
                s.stroke())),
            (function (e, t, r, n) {
              var i,
                l,
                o,
                a,
                s,
                c,
                u = n.textAlign,
                h = n.color,
                f = !!h,
                p = n.font,
                g = t.length,
                m = n.textStrokeColor,
                v = n.textStrokeWidth,
                w = m && v;
              if (g && (f || w))
                for (
                  i = r,
                    l = p.lineHeight,
                    o = i.w,
                    a = i.x,
                    s = i.y + l / 2,
                    "center" === u
                      ? (a += o / 2)
                      : ("end" === u || "right" === u) && (a += o),
                    r = { h: l, w: o, x: a, y: s },
                    e.font = p.string,
                    e.textAlign = u,
                    e.textBaseline = "middle",
                    e.shadowBlur = n.textShadowBlur,
                    e.shadowColor = n.textShadowColor,
                    f && (e.fillStyle = h),
                    w &&
                      ((e.lineJoin = "round"),
                      (e.lineWidth = v),
                      (e.strokeStyle = m)),
                    c = 0,
                    g = t.length;
                  c < g;
                  ++c
                )
                  !(function (e, t, r) {
                    var n = e.shadowBlur,
                      i = r.stroked,
                      l = d(r.x),
                      o = d(r.y),
                      a = d(r.w);
                    i && e.strokeText(t, l, o, a),
                      r.filled &&
                        (n && i && (e.shadowBlur = 0),
                        e.fillText(t, l, o, a),
                        n && i && (e.shadowBlur = n));
                  })(e, t[c], {
                    stroked: w,
                    filled: f,
                    w: r.w,
                    x: r.x,
                    y: r.y + r.h * c,
                  });
            })(s, c.lines, u.text, c),
            s.restore());
        },
      });
      var f = Number.MIN_SAFE_INTEGER || -9007199254740991,
        p = Number.MAX_SAFE_INTEGER || 9007199254740991;
      function g(e, t, r) {
        var n = Math.cos(r),
          i = Math.sin(r),
          l = t.x,
          o = t.y;
        return {
          x: l + n * (e.x - l) - i * (e.y - o),
          y: o + i * (e.x - l) + n * (e.y - o),
        };
      }
      function m(e, t) {
        var r,
          n,
          i,
          l,
          o,
          a = p,
          s = f,
          c = t.origin;
        for (r = 0; r < e.length; ++r)
          (i = (n = e[r]).x - c.x),
            (l = n.y - c.y),
            (a = Math.min(a, (o = t.vx * i + t.vy * l))),
            (s = Math.max(s, o));
        return { min: a, max: s };
      }
      function v(e, t) {
        var r = t.x - e.x,
          n = t.y - e.y,
          i = Math.sqrt(r * r + n * n);
        return { vx: (t.x - e.x) / i, vy: (t.y - e.y) / i, origin: e, ln: i };
      }
      var w = function () {
        (this._rotation = 0), (this._rect = { x: 0, y: 0, w: 0, h: 0 });
      };
      function y(e, t, r) {
        var n = t.positioner(e, t),
          i = n.vx,
          l = n.vy;
        if (!i && !l) return { x: n.x, y: n.y };
        var o = r.w,
          a = r.h,
          s = t.rotation,
          c = Math.abs((o / 2) * Math.cos(s)) + Math.abs((a / 2) * Math.sin(s)),
          u = Math.abs((o / 2) * Math.sin(s)) + Math.abs((a / 2) * Math.cos(s)),
          d = 1 / Math.max(Math.abs(i), Math.abs(l));
        return (
          (c *= i * d),
          (u *= l * d),
          (c += t.offset * i),
          (u += t.offset * l),
          { x: n.x + c, y: n.y + u }
        );
      }
      (0, n.a4)(w.prototype, {
        center: function () {
          var e = this._rect;
          return { x: e.x + e.w / 2, y: e.y + e.h / 2 };
        },
        update: function (e, t, r) {
          (this._rotation = r),
            (this._rect = { x: t.x + e.x, y: t.y + e.y, w: t.w, h: t.h });
        },
        contains: function (e) {
          var t = this._rect;
          return !(
            (e = g(e, this.center(), -this._rotation)).x < t.x - 1 ||
            e.y < t.y - 1 ||
            e.x > t.x + t.w + 2 ||
            e.y > t.y + t.h + 2
          );
        },
        intersects: function (e) {
          var t,
            r,
            n,
            i = this._points(),
            l = e._points(),
            o = [v(i[0], i[1]), v(i[0], i[3])];
          for (
            this._rotation !== e._rotation &&
              o.push(v(l[0], l[1]), v(l[0], l[3])),
              t = 0;
            t < o.length;
            ++t
          )
            if (
              ((r = m(i, o[t])),
              (n = m(l, o[t])),
              r.max < n.min || n.max < r.min)
            )
              return !1;
          return !0;
        },
        _points: function () {
          var e = this._rect,
            t = this._rotation,
            r = this.center();
          return [
            g({ x: e.x, y: e.y }, r, t),
            g({ x: e.x + e.w, y: e.y }, r, t),
            g({ x: e.x + e.w, y: e.y + e.h }, r, t),
            g({ x: e.x, y: e.y + e.h }, r, t),
          ];
        },
      });
      var b = {
          prepare: function (e) {
            var t,
              r,
              n,
              i,
              l,
              o = [];
            for (t = 0, n = e.length; t < n; ++t)
              for (r = 0, i = e[t].length; r < i; ++r)
                (l = e[t][r]),
                  o.push(l),
                  (l.$layout = {
                    _box: new w(),
                    _hidable: !1,
                    _visible: !0,
                    _set: t,
                    _idx: l._index,
                  });
            return (
              o.sort(function (e, t) {
                var r = e.$layout,
                  n = t.$layout;
                return r._idx === n._idx ? n._set - r._set : n._idx - r._idx;
              }),
              this.update(o),
              o
            );
          },
          update: function (e) {
            var t,
              r,
              n,
              i,
              l,
              o = !1;
            for (t = 0, r = e.length; t < r; ++t)
              (i = (n = e[t]).model()),
                ((l = n.$layout)._hidable = i && "auto" === i.display),
                (l._visible = n.visible()),
                (o |= l._hidable);
            o &&
              (function (e) {
                var t, r, n, i, l, o, a;
                for (t = 0, r = e.length; t < r; ++t)
                  (i = (n = e[t]).$layout)._visible &&
                    ((a = new Proxy(n._el, {
                      get: (e, t) => e.getProps([t], !0)[t],
                    })),
                    (l = n.geometry()),
                    (o = y(a, n.model(), l)),
                    i._box.update(o, l, n.rotation()));
                !(function (e, t) {
                  var r, n, i, l;
                  for (r = e.length - 1; r >= 0; --r)
                    for (i = e[r].$layout, n = r - 1; n >= 0 && i._visible; --n)
                      (l = e[n].$layout)._visible &&
                        i._box.intersects(l._box) &&
                        t(i, l);
                })(e, function (e, t) {
                  var r = e._hidable,
                    n = t._hidable;
                  (r && n) || n ? (t._visible = !1) : r && (e._visible = !1);
                });
              })(e);
          },
          lookup: function (e, t) {
            var r, n;
            for (r = e.length - 1; r >= 0; --r)
              if ((n = e[r].$layout) && n._visible && n._box.contains(t))
                return e[r];
            return null;
          },
          draw: function (e, t) {
            var r, n, i, l, o, a;
            for (r = 0, n = t.length; r < n; ++r)
              (l = (i = t[r]).$layout)._visible &&
                ((o = i.geometry()),
                (a = y(i._el, i.model(), o)),
                l._box.update(a, o, i.rotation()),
                i.draw(e, a));
          },
        },
        x = "$datalabels",
        k = "$default";
      function C(e, t, r, i) {
        if (t) {
          var l,
            o = r.$context,
            a = r.$groups;
          t[a._set] &&
            (l = t[a._set][a._key]) &&
            !0 === (0, n.Q)(l, [o, i]) &&
            ((e[x]._dirty = !0), r.update(o));
        }
      }
      var S = {
        id: "datalabels",
        defaults: {
          align: "center",
          anchor: "center",
          backgroundColor: null,
          borderColor: null,
          borderRadius: 0,
          borderWidth: 0,
          clamp: !1,
          clip: !1,
          color: void 0,
          display: !0,
          font: {
            family: void 0,
            lineHeight: 1.2,
            size: void 0,
            style: void 0,
            weight: null,
          },
          formatter: function (e) {
            if ((0, n.k)(e)) return null;
            var t,
              r,
              i,
              l = e;
            if ((0, n.i)(e)) {
              if ((0, n.k)(e.label)) {
                if ((0, n.k)(e.r))
                  for (
                    i = 0, l = "", r = (t = Object.keys(e)).length;
                    i < r;
                    ++i
                  )
                    l += (0 !== i ? ", " : "") + t[i] + ": " + e[t[i]];
                else l = e.r;
              } else l = e.label;
            }
            return "" + l;
          },
          labels: void 0,
          listeners: {},
          offset: 4,
          opacity: 1,
          padding: { top: 4, right: 4, bottom: 4, left: 4 },
          rotation: 0,
          textAlign: "start",
          textStrokeColor: void 0,
          textStrokeWidth: 0,
          textShadowBlur: 0,
          textShadowColor: void 0,
        },
        beforeInit: function (e) {
          e[x] = { _actives: [] };
        },
        beforeUpdate: function (e) {
          var t = e[x];
          (t._listened = !1),
            (t._listeners = {}),
            (t._datasets = []),
            (t._labels = []);
        },
        afterDatasetUpdate: function (e, t, r) {
          var i,
            l,
            o,
            a,
            s,
            c,
            u,
            d,
            f,
            p,
            g,
            m,
            v,
            w,
            y = t.index,
            b = e[x],
            C = (b._datasets[y] = []),
            S = e.isDatasetVisible(y),
            M = e.data.datasets[y],
            R =
              ((i = r),
              (a = M.datalabels),
              (s = {}),
              (c = []),
              !1 === a
                ? null
                : (!0 === a && (a = {}),
                  (o = Object.keys(
                    (l = (i = (0, n.a4)({}, [i, a])).labels || {})
                  )),
                  delete i.labels,
                  o.length
                    ? o.forEach(function (e) {
                        l[e] && c.push((0, n.a4)({}, [i, l[e], { _key: e }]));
                      })
                    : c.push(i),
                  (s = c.reduce(function (e, t) {
                    return (
                      (0, n.F)(t.listeners || {}, function (r, n) {
                        (e[n] = e[n] || {}), (e[n][t._key || k] = r);
                      }),
                      delete t.listeners,
                      e
                    );
                  }, {})),
                  { labels: c, listeners: s })),
            E = t.meta.data || [],
            T = e.ctx;
          for (T.save(), u = 0, f = E.length; u < f; ++u)
            if (
              (((v = E[u])[x] = []),
              S && v && e.getDataVisibility(u) && !v.skip)
            )
              for (d = 0, p = R.labels.length; d < p; ++d)
                (m = (g = R.labels[d])._key),
                  ((w = new h(g, T, v, u)).$groups = { _set: y, _key: m || k }),
                  (w.$context = {
                    active: !1,
                    chart: e,
                    dataIndex: u,
                    dataset: M,
                    datasetIndex: y,
                  }),
                  w.update(w.$context),
                  v[x].push(w),
                  C.push(w);
          T.restore(),
            (0, n.a4)(b._listeners, R.listeners, {
              merger: function (e, r, n) {
                (r[e] = r[e] || {}), (r[e][t.index] = n[e]), (b._listened = !0);
              },
            });
        },
        afterUpdate: function (e) {
          e[x]._labels = b.prepare(e[x]._datasets);
        },
        afterDatasetsDraw: function (e) {
          b.draw(e, e[x]._labels);
        },
        beforeEvent: function (e, t) {
          if (e[x]._listened) {
            var r,
              n,
              i,
              l = t.event;
            switch (l.type) {
              case "mousemove":
              case "mouseout":
                !(function (e, t) {
                  var r,
                    n,
                    i,
                    l,
                    o,
                    a = e[x],
                    s = a._listeners;
                  if (s.enter || s.leave) {
                    if ("mousemove" === t.type) o = b.lookup(a._labels, t);
                    else if ("mouseout" !== t.type) return;
                    (l = a._hovered),
                      (a._hovered = o),
                      (r = o),
                      (l || r) &&
                        (l
                          ? r
                            ? l !== r && (i = n = !0)
                            : (i = !0)
                          : (n = !0),
                        i && C(e, s.leave, l, t),
                        n && C(e, s.enter, r, t));
                  }
                })(e, l);
                break;
              case "click":
                (i =
                  (n = (r = e[x])._listeners.click) &&
                  b.lookup(r._labels, l)) && C(e, n, i, l);
            }
          }
        },
        afterEvent: function (e) {
          var t,
            r,
            n,
            i,
            l,
            a,
            s,
            c = e[x],
            u = c._actives,
            d = (c._actives = e.getActiveElements()),
            h = o.arrayDiff(u, d);
          for (t = 0, r = h.length; t < r; ++t)
            if ((l = h[t])[1])
              for (n = 0, i = (s = l[0].element[x] || []).length; n < i; ++n)
                ((a = s[n]).$context.active = 1 === l[1]), a.update(a.$context);
          (c._dirty || h.length) && (b.update(c._labels), e.render()),
            delete c._dirty;
        },
      };
    },
    56911: function (e) {
      e.exports = function (e, t, r, n) {
        for (var i = -1, l = null == e ? 0 : e.length; ++i < l; ) {
          var o = e[i];
          t(n, o, r(o), e);
        }
        return n;
      };
    },
    34598: function (e, t, r) {
      var n = r(85036);
      e.exports = function (e, t) {
        return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1;
      };
    },
    60510: function (e) {
      e.exports = function (e, t, r) {
        for (var n = -1, i = null == e ? 0 : e.length; ++n < i; )
          if (r(t, e[n])) return !0;
        return !1;
      };
    },
    47651: function (e, t, r) {
      var n = r(25898);
      e.exports = function (e, t, r, i) {
        return (
          n(e, function (e, n, l) {
            t(i, e, r(e), l);
          }),
          i
        );
      };
    },
    83663: function (e) {
      e.exports = function (e, t, r, n) {
        for (var i = e.length, l = r + (n ? 1 : -1); n ? l-- : ++l < i; )
          if (t(e[l], l, e)) return l;
        return -1;
      };
    },
    26486: function (e) {
      var t = Object.prototype.hasOwnProperty;
      e.exports = function (e, r) {
        return null != e && t.call(e, r);
      };
    },
    85036: function (e, t, r) {
      var n = r(83663),
        i = r(18826),
        l = r(31154);
      e.exports = function (e, t, r) {
        return t == t ? l(e, t, r) : n(e, i, r);
      };
    },
    18826: function (e) {
      e.exports = function (e) {
        return e != e;
      };
    },
    78078: function (e) {
      var t = Math.ceil,
        r = Math.max;
      e.exports = function (e, n, i, l) {
        for (var o = -1, a = r(t((n - e) / (i || 1)), 0), s = Array(a); a--; )
          (s[l ? a : ++o] = e), (e += i);
        return s;
      };
    },
    18296: function (e, t, r) {
      var n = r(25561),
        i = r(34598),
        l = r(60510),
        o = r(8529),
        a = r(33295),
        s = r(33005);
      e.exports = function (e, t, r) {
        var c = -1,
          u = i,
          d = e.length,
          h = !0,
          f = [],
          p = f;
        if (r) (h = !1), (u = l);
        else if (d >= 200) {
          var g = t ? null : a(e);
          if (g) return s(g);
          (h = !1), (u = o), (p = new n());
        } else p = t ? [] : f;
        e: for (; ++c < d; ) {
          var m = e[c],
            v = t ? t(m) : m;
          if (((m = r || 0 !== m ? m : 0), h && v == v)) {
            for (var w = p.length; w--; ) if (p[w] === v) continue e;
            t && p.push(v), f.push(m);
          } else u(p, v, r) || (p !== f && p.push(v), f.push(m));
        }
        return f;
      };
    },
    48034: function (e, t, r) {
      var n = r(56911),
        i = r(47651),
        l = r(61757),
        o = r(2428);
      e.exports = function (e, t) {
        return function (r, a) {
          var s = o(r) ? n : i,
            c = t ? t() : {};
          return s(r, e, l(a, 2), c);
        };
      };
    },
    18364: function (e, t, r) {
      var n = r(78078),
        i = r(57209),
        l = r(73640);
      e.exports = function (e) {
        return function (t, r, o) {
          return (
            o && "number" != typeof o && i(t, r, o) && (r = o = void 0),
            (t = l(t)),
            void 0 === r ? ((r = t), (t = 0)) : (r = l(r)),
            (o = void 0 === o ? (t < r ? 1 : -1) : l(o)),
            n(t, r, o, e)
          );
        };
      };
    },
    33295: function (e, t, r) {
      var n = r(353),
        i = r(91530),
        l = r(33005),
        o =
          n && 1 / l(new n([, -0]))[1] == 1 / 0
            ? function (e) {
                return new n(e);
              }
            : i;
      e.exports = o;
    },
    31154: function (e) {
      e.exports = function (e, t, r) {
        for (var n = r - 1, i = e.length; ++n < i; ) if (e[n] === t) return n;
        return -1;
      };
    },
    90757: function (e, t, r) {
      var n = r(44140);
      e.exports = function (e) {
        return (null == e ? 0 : e.length) ? n(e, 1) : [];
      };
    },
    14015: function (e, t, r) {
      var n = r(80897),
        i = r(48034),
        l = Object.prototype.hasOwnProperty,
        o = i(function (e, t, r) {
          l.call(e, r) ? e[r].push(t) : n(e, r, [t]);
        });
      e.exports = o;
    },
    13284: function (e, t, r) {
      var n = r(26486),
        i = r(60706);
      e.exports = function (e, t) {
        return null != e && i(e, t, n);
      };
    },
    56707: function (e, t, r) {
      var n = r(18364)();
      e.exports = n;
    },
    23763: function (e, t, r) {
      var n = r(89678),
        i = r(6627);
      e.exports = function (e, t, r) {
        var l = !0,
          o = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return (
          i(r) &&
            ((l = "leading" in r ? !!r.leading : l),
            (o = "trailing" in r ? !!r.trailing : o)),
          n(e, t, { leading: l, maxWait: t, trailing: o })
        );
      };
    },
    73640: function (e, t, r) {
      var n = r(67948),
        i = 1 / 0;
      e.exports = function (e) {
        return e
          ? (e = n(e)) === i || e === -i
            ? (e < 0 ? -1 : 1) * 17976931348623157e292
            : e == e
              ? e
              : 0
          : 0 === e
            ? e
            : 0;
      };
    },
    55009: function (e, t, r) {
      var n = r(18296);
      e.exports = function (e) {
        return e && e.length ? n(e) : [];
      };
    },
    7235: function () {},
    4658: function (e, t, r) {
      var n, i, l;
      (i = [t, r(32811)]),
        void 0 !==
          (l =
            "function" ==
            typeof (n = function (e, t) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var r = t && t.__esModule ? t : { default: t };
              e.default = r.default;
            })
              ? n.apply(t, i)
              : n) && (e.exports = l);
    },
    32811: function (e, t, r) {
      var n, i, l;
      (i = [t, r(70079), r(39519)]),
        void 0 !==
          (l =
            "function" ==
            typeof (n = function (e, t, r) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.setHasSupportToCaptureOption = function (e) {
                  s = e;
                });
              var n = l(t),
                i = l(r);
              function l(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var o =
                  Object.assign ||
                  function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n]);
                    }
                    return e;
                  },
                a = (function () {
                  function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var n = t[r];
                      (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                    }
                  }
                  return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t;
                  };
                })(),
                s = !1;
              try {
                addEventListener(
                  "test",
                  null,
                  Object.defineProperty({}, "capture", {
                    get: function () {
                      s = !0;
                    },
                  })
                );
              } catch (e) {}
              function c() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : { capture: !0 };
                return s ? e : e.capture;
              }
              function u(e) {
                if ("touches" in e) {
                  var t = e.touches[0];
                  return { x: t.pageX, y: t.pageY };
                }
                return { x: e.screenX, y: e.screenY };
              }
              var d = (function (e) {
                function t() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function");
                  })(this, t);
                  for (
                    var e, r = arguments.length, n = Array(r), i = 0;
                    i < r;
                    i++
                  )
                    n[i] = arguments[i];
                  var l = (function (e, t) {
                    if (!e)
                      throw ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t && ("object" == typeof t || "function" == typeof t)
                      ? t
                      : e;
                  })(
                    this,
                    (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                      e,
                      [this].concat(n)
                    )
                  );
                  return (
                    (l._handleSwipeStart = l._handleSwipeStart.bind(l)),
                    (l._handleSwipeMove = l._handleSwipeMove.bind(l)),
                    (l._handleSwipeEnd = l._handleSwipeEnd.bind(l)),
                    (l._onMouseDown = l._onMouseDown.bind(l)),
                    (l._onMouseMove = l._onMouseMove.bind(l)),
                    (l._onMouseUp = l._onMouseUp.bind(l)),
                    (l._setSwiperRef = l._setSwiperRef.bind(l)),
                    l
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof t
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      t &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, t)
                          : (e.__proto__ = t));
                  })(t, e),
                  a(t, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        this.swiper &&
                          this.swiper.addEventListener(
                            "touchmove",
                            this._handleSwipeMove,
                            c({ capture: !0, passive: !1 })
                          );
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        this.swiper &&
                          this.swiper.removeEventListener(
                            "touchmove",
                            this._handleSwipeMove,
                            c({ capture: !0, passive: !1 })
                          );
                      },
                    },
                    {
                      key: "_onMouseDown",
                      value: function (e) {
                        this.props.allowMouseEvents &&
                          ((this.mouseDown = !0),
                          document.addEventListener("mouseup", this._onMouseUp),
                          document.addEventListener(
                            "mousemove",
                            this._onMouseMove
                          ),
                          this._handleSwipeStart(e));
                      },
                    },
                    {
                      key: "_onMouseMove",
                      value: function (e) {
                        this.mouseDown && this._handleSwipeMove(e);
                      },
                    },
                    {
                      key: "_onMouseUp",
                      value: function (e) {
                        (this.mouseDown = !1),
                          document.removeEventListener(
                            "mouseup",
                            this._onMouseUp
                          ),
                          document.removeEventListener(
                            "mousemove",
                            this._onMouseMove
                          ),
                          this._handleSwipeEnd(e);
                      },
                    },
                    {
                      key: "_handleSwipeStart",
                      value: function (e) {
                        var t = u(e),
                          r = t.x,
                          n = t.y;
                        (this.moveStart = { x: r, y: n }),
                          this.props.onSwipeStart(e);
                      },
                    },
                    {
                      key: "_handleSwipeMove",
                      value: function (e) {
                        if (this.moveStart) {
                          var t = u(e),
                            r = t.x,
                            n = t.y,
                            i = r - this.moveStart.x,
                            l = n - this.moveStart.y;
                          (this.moving = !0),
                            this.props.onSwipeMove({ x: i, y: l }, e) &&
                              e.cancelable &&
                              e.preventDefault(),
                            (this.movePosition = { deltaX: i, deltaY: l });
                        }
                      },
                    },
                    {
                      key: "_handleSwipeEnd",
                      value: function (e) {
                        this.props.onSwipeEnd(e);
                        var t = this.props.tolerance;
                        this.moving &&
                          this.movePosition &&
                          (this.movePosition.deltaX < -t
                            ? this.props.onSwipeLeft(1, e)
                            : this.movePosition.deltaX > t &&
                              this.props.onSwipeRight(1, e),
                          this.movePosition.deltaY < -t
                            ? this.props.onSwipeUp(1, e)
                            : this.movePosition.deltaY > t &&
                              this.props.onSwipeDown(1, e)),
                          (this.moveStart = null),
                          (this.moving = !1),
                          (this.movePosition = null);
                      },
                    },
                    {
                      key: "_setSwiperRef",
                      value: function (e) {
                        (this.swiper = e), this.props.innerRef(e);
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this.props,
                          t = (e.tagName, e.className),
                          r = e.style,
                          i = e.children,
                          l =
                            (e.allowMouseEvents,
                            e.onSwipeUp,
                            e.onSwipeDown,
                            e.onSwipeLeft,
                            e.onSwipeRight,
                            e.onSwipeStart,
                            e.onSwipeMove,
                            e.onSwipeEnd,
                            e.innerRef,
                            e.tolerance,
                            (function (e, t) {
                              var r = {};
                              for (var n in e)
                                !(t.indexOf(n) >= 0) &&
                                  Object.prototype.hasOwnProperty.call(e, n) &&
                                  (r[n] = e[n]);
                              return r;
                            })(e, [
                              "tagName",
                              "className",
                              "style",
                              "children",
                              "allowMouseEvents",
                              "onSwipeUp",
                              "onSwipeDown",
                              "onSwipeLeft",
                              "onSwipeRight",
                              "onSwipeStart",
                              "onSwipeMove",
                              "onSwipeEnd",
                              "innerRef",
                              "tolerance",
                            ]));
                        return n.default.createElement(
                          this.props.tagName,
                          o(
                            {
                              ref: this._setSwiperRef,
                              onMouseDown: this._onMouseDown,
                              onTouchStart: this._handleSwipeStart,
                              onTouchEnd: this._handleSwipeEnd,
                              className: t,
                              style: r,
                            },
                            l
                          ),
                          i
                        );
                      },
                    },
                  ]),
                  t
                );
              })(t.Component);
              (d.displayName = "ReactSwipe"),
                (d.propTypes = {
                  tagName: i.default.string,
                  className: i.default.string,
                  style: i.default.object,
                  children: i.default.node,
                  allowMouseEvents: i.default.bool,
                  onSwipeUp: i.default.func,
                  onSwipeDown: i.default.func,
                  onSwipeLeft: i.default.func,
                  onSwipeRight: i.default.func,
                  onSwipeStart: i.default.func,
                  onSwipeMove: i.default.func,
                  onSwipeEnd: i.default.func,
                  innerRef: i.default.func,
                  tolerance: i.default.number.isRequired,
                }),
                (d.defaultProps = {
                  tagName: "div",
                  allowMouseEvents: !1,
                  onSwipeUp: function () {},
                  onSwipeDown: function () {},
                  onSwipeLeft: function () {},
                  onSwipeRight: function () {},
                  onSwipeStart: function () {},
                  onSwipeMove: function () {},
                  onSwipeEnd: function () {},
                  innerRef: function () {},
                  tolerance: 0,
                }),
                (e.default = d);
            })
              ? n.apply(t, i)
              : n) && (e.exports = l);
    },
    63346: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.default = function (e, t, r) {
          var n = 0 === e ? e : e + t;
          return (
            "translate3d(" +
            ("horizontal" === r ? [n, 0, 0] : [0, n, 0]).join(",") +
            ")"
          );
        });
    },
    36816: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fadeAnimationHandler =
          t.slideStopSwipingHandler =
          t.slideSwipeAnimationHandler =
          t.slideAnimationHandler =
            void 0);
      var n,
        i = r(70079),
        l = (n = r(63346)) && n.__esModule ? n : { default: n },
        o = r(67759);
      function a(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                var n;
                (n = r[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : a(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      (t.slideAnimationHandler = function (e, t) {
        var r = {},
          n = t.selectedItem,
          a = i.Children.count(e.children) - 1;
        if (e.infiniteLoop && (n < 0 || n > a))
          return (
            n < 0
              ? e.centerMode &&
                e.centerSlidePercentage &&
                "horizontal" === e.axis
                ? (r.itemListStyle = (0, o.setPosition)(
                    -(a + 2) * e.centerSlidePercentage -
                      (100 - e.centerSlidePercentage) / 2,
                    e.axis
                  ))
                : (r.itemListStyle = (0, o.setPosition)(
                    -(100 * (a + 2)),
                    e.axis
                  ))
              : n > a && (r.itemListStyle = (0, o.setPosition)(0, e.axis)),
            r
          );
        var c = (0, o.getPosition)(n, e),
          u = (0, l.default)(c, "%", e.axis),
          d = e.transitionTime + "ms";
        return (
          (r.itemListStyle = {
            WebkitTransform: u,
            msTransform: u,
            OTransform: u,
            transform: u,
          }),
          t.swiping ||
            (r.itemListStyle = s(
              s({}, r.itemListStyle),
              {},
              {
                WebkitTransitionDuration: d,
                MozTransitionDuration: d,
                OTransitionDuration: d,
                transitionDuration: d,
                msTransitionDuration: d,
              }
            )),
          r
        );
      }),
        (t.slideSwipeAnimationHandler = function (e, t, r, n) {
          var l = {},
            a = "horizontal" === t.axis,
            s = i.Children.count(t.children),
            c = (0, o.getPosition)(r.selectedItem, t),
            u = t.infiniteLoop
              ? (0, o.getPosition)(s - 1, t) - 100
              : (0, o.getPosition)(s - 1, t),
            d = a ? e.x : e.y,
            h = d;
          0 === c && d > 0 && (h = 0), c === u && d < 0 && (h = 0);
          var f = c + 100 / (r.itemSize / h),
            p = Math.abs(d) > t.swipeScrollTolerance;
          return (
            t.infiniteLoop &&
              p &&
              (0 === r.selectedItem && f > -100
                ? (f -= 100 * s)
                : r.selectedItem === s - 1 && f < -(100 * s) && (f += 100 * s)),
            (!t.preventMovementUntilSwipeScrollTolerance ||
              p ||
              r.swipeMovementStarted) &&
              (r.swipeMovementStarted || n({ swipeMovementStarted: !0 }),
              (l.itemListStyle = (0, o.setPosition)(f, t.axis))),
            p && !r.cancelClick && n({ cancelClick: !0 }),
            l
          );
        }),
        (t.slideStopSwipingHandler = function (e, t) {
          var r = (0, o.getPosition)(t.selectedItem, e);
          return { itemListStyle: (0, o.setPosition)(r, e.axis) };
        }),
        (t.fadeAnimationHandler = function (e, t) {
          var r = e.transitionTime + "ms",
            n = "ease-in-out",
            i = {
              position: "absolute",
              display: "block",
              zIndex: -2,
              minHeight: "100%",
              opacity: 0,
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              transitionTimingFunction: n,
              msTransitionTimingFunction: n,
              MozTransitionTimingFunction: n,
              WebkitTransitionTimingFunction: n,
              OTransitionTimingFunction: n,
            };
          return (
            t.swiping ||
              (i = s(
                s({}, i),
                {},
                {
                  WebkitTransitionDuration: r,
                  MozTransitionDuration: r,
                  OTransitionDuration: r,
                  transitionDuration: r,
                  msTransitionDuration: r,
                }
              )),
            {
              slideStyle: i,
              selectedStyle: s(
                s({}, i),
                {},
                { opacity: 1, position: "relative" }
              ),
              prevStyle: s({}, i),
            }
          );
        });
    },
    48170: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== f(e) && "function" != typeof e))
            return { default: e };
          var t = h();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var l = n ? Object.getOwnPropertyDescriptor(e, i) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(r, i, l)
                : (r[i] = e[i]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(70079)),
        i = d(r(4658)),
        l = d(r(45007)),
        o = d(r(59032)),
        a = d(r(19657)),
        s = d(r(52147)),
        c = r(67759),
        u = r(36816);
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function h() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function f(e) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function p() {
        return (p =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                x(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : g(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function v(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function w(e, t) {
        return (w =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function y(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function x(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var k = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && w(e, t);
        })(g, e);
        var t,
          r,
          d,
          h =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r,
                n = b(g);
              if (t) {
                var i = b(this).constructor;
                r = Reflect.construct(n, arguments, i);
              } else r = n.apply(this, arguments);
              return (e = r) && ("object" === f(e) || "function" == typeof e)
                ? e
                : y(this);
            });
        function g(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, g),
            x(y((t = h.call(this, e))), "thumbsRef", void 0),
            x(y(t), "carouselWrapperRef", void 0),
            x(y(t), "listRef", void 0),
            x(y(t), "itemsRef", void 0),
            x(y(t), "timer", void 0),
            x(y(t), "animationHandler", void 0),
            x(y(t), "setThumbsRef", function (e) {
              t.thumbsRef = e;
            }),
            x(y(t), "setCarouselWrapperRef", function (e) {
              t.carouselWrapperRef = e;
            }),
            x(y(t), "setListRef", function (e) {
              t.listRef = e;
            }),
            x(y(t), "setItemsRef", function (e, r) {
              t.itemsRef || (t.itemsRef = []), (t.itemsRef[r] = e);
            }),
            x(y(t), "autoPlay", function () {
              !(1 >= n.Children.count(t.props.children)) &&
                (t.clearAutoPlay(),
                t.props.autoPlay &&
                  (t.timer = setTimeout(function () {
                    t.increment();
                  }, t.props.interval)));
            }),
            x(y(t), "clearAutoPlay", function () {
              t.timer && clearTimeout(t.timer);
            }),
            x(y(t), "resetAutoPlay", function () {
              t.clearAutoPlay(), t.autoPlay();
            }),
            x(y(t), "stopOnHover", function () {
              t.setState({ isMouseEntered: !0 }, t.clearAutoPlay);
            }),
            x(y(t), "startOnLeave", function () {
              t.setState({ isMouseEntered: !1 }, t.autoPlay);
            }),
            x(y(t), "isFocusWithinTheCarousel", function () {
              return (
                !!t.carouselWrapperRef &&
                !!(
                  (0, a.default)().activeElement === t.carouselWrapperRef ||
                  t.carouselWrapperRef.contains((0, a.default)().activeElement)
                )
              );
            }),
            x(y(t), "navigateWithKeyboard", function (e) {
              if (t.isFocusWithinTheCarousel()) {
                var r = "horizontal" === t.props.axis,
                  n = {
                    ArrowUp: 38,
                    ArrowRight: 39,
                    ArrowDown: 40,
                    ArrowLeft: 37,
                  },
                  i = r ? n.ArrowRight : n.ArrowDown,
                  l = r ? n.ArrowLeft : n.ArrowUp;
                i === e.keyCode
                  ? t.increment()
                  : l === e.keyCode && t.decrement();
              }
            }),
            x(y(t), "updateSizes", function () {
              if (
                t.state.initialized &&
                t.itemsRef &&
                0 !== t.itemsRef.length
              ) {
                var e = "horizontal" === t.props.axis,
                  r = t.itemsRef[0];
                if (r) {
                  var n = e ? r.clientWidth : r.clientHeight;
                  t.setState({ itemSize: n }),
                    t.thumbsRef && t.thumbsRef.updateSizes();
                }
              }
            }),
            x(y(t), "setMountState", function () {
              t.setState({ hasMount: !0 }), t.updateSizes();
            }),
            x(y(t), "handleClickItem", function (e, r) {
              if (0 !== n.Children.count(t.props.children)) {
                if (t.state.cancelClick) {
                  t.setState({ cancelClick: !1 });
                  return;
                }
                t.props.onClickItem(e, r),
                  e !== t.state.selectedItem && t.setState({ selectedItem: e });
              }
            }),
            x(y(t), "handleOnChange", function (e, r) {
              1 >= n.Children.count(t.props.children) || t.props.onChange(e, r);
            }),
            x(y(t), "handleClickThumb", function (e, r) {
              t.props.onClickThumb(e, r), t.moveTo(e);
            }),
            x(y(t), "onSwipeStart", function (e) {
              t.setState({ swiping: !0 }), t.props.onSwipeStart(e);
            }),
            x(y(t), "onSwipeEnd", function (e) {
              t.setState({
                swiping: !1,
                cancelClick: !1,
                swipeMovementStarted: !1,
              }),
                t.props.onSwipeEnd(e),
                t.clearAutoPlay(),
                t.state.autoPlay && t.autoPlay();
            }),
            x(y(t), "onSwipeMove", function (e, r) {
              t.props.onSwipeMove(r);
              var n = t.props.swipeAnimationHandler(
                e,
                t.props,
                t.state,
                t.setState.bind(y(t))
              );
              return t.setState(m({}, n)), !!Object.keys(n).length;
            }),
            x(y(t), "decrement", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1;
              t.moveTo(t.state.selectedItem - ("number" == typeof e ? e : 1));
            }),
            x(y(t), "increment", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1;
              t.moveTo(t.state.selectedItem + ("number" == typeof e ? e : 1));
            }),
            x(y(t), "moveTo", function (e) {
              if ("number" == typeof e) {
                var r = n.Children.count(t.props.children) - 1;
                e < 0 && (e = t.props.infiniteLoop ? r : 0),
                  e > r && (e = t.props.infiniteLoop ? 0 : r),
                  t.selectItem({ selectedItem: e }),
                  t.state.autoPlay &&
                    !1 === t.state.isMouseEntered &&
                    t.resetAutoPlay();
              }
            }),
            x(y(t), "onClickNext", function () {
              t.increment(1);
            }),
            x(y(t), "onClickPrev", function () {
              t.decrement(1);
            }),
            x(y(t), "onSwipeForward", function () {
              t.increment(1),
                t.props.emulateTouch && t.setState({ cancelClick: !0 });
            }),
            x(y(t), "onSwipeBackwards", function () {
              t.decrement(1),
                t.props.emulateTouch && t.setState({ cancelClick: !0 });
            }),
            x(y(t), "changeItem", function (e) {
              return function (r) {
                ((0, c.isKeyboardEvent)(r) && "Enter" !== r.key) || t.moveTo(e);
              };
            }),
            x(y(t), "selectItem", function (e) {
              t.setState(
                m({ previousItem: t.state.selectedItem }, e),
                function () {
                  t.setState(t.animationHandler(t.props, t.state));
                }
              ),
                t.handleOnChange(
                  e.selectedItem,
                  n.Children.toArray(t.props.children)[e.selectedItem]
                );
            }),
            x(y(t), "getInitialImage", function () {
              var e = t.props.selectedItem,
                r = t.itemsRef && t.itemsRef[e];
              return ((r && r.getElementsByTagName("img")) || [])[0];
            }),
            x(y(t), "getVariableItemHeight", function (e) {
              var r = t.itemsRef && t.itemsRef[e];
              if (t.state.hasMount && r && r.children.length) {
                var n = r.children[0].getElementsByTagName("img") || [];
                if (n.length > 0) {
                  var i = n[0];
                  i.complete ||
                    i.addEventListener("load", function e() {
                      t.forceUpdate(), i.removeEventListener("load", e);
                    });
                }
                var l = (n[0] || r.children[0]).clientHeight;
                return l > 0 ? l : null;
              }
              return null;
            });
          var t,
            r = {
              initialized: !1,
              previousItem: e.selectedItem,
              selectedItem: e.selectedItem,
              hasMount: !1,
              isMouseEntered: !1,
              autoPlay: e.autoPlay,
              swiping: !1,
              swipeMovementStarted: !1,
              cancelClick: !1,
              itemSize: 1,
              itemListStyle: {},
              slideStyle: {},
              selectedStyle: {},
              prevStyle: {},
            };
          return (
            (t.animationHandler =
              ("function" == typeof e.animationHandler && e.animationHandler) ||
              ("fade" === e.animationHandler && u.fadeAnimationHandler) ||
              u.slideAnimationHandler),
            (t.state = m(m({}, r), t.animationHandler(e, r))),
            t
          );
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.children && this.setupCarousel();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e, t) {
                e.children ||
                  !this.props.children ||
                  this.state.initialized ||
                  this.setupCarousel(),
                  !e.autoFocus && this.props.autoFocus && this.forceFocus(),
                  t.swiping &&
                    !this.state.swiping &&
                    this.setState(
                      m(
                        {},
                        this.props.stopSwipingHandler(this.props, this.state)
                      )
                    ),
                  (e.selectedItem !== this.props.selectedItem ||
                    e.centerMode !== this.props.centerMode) &&
                    (this.updateSizes(), this.moveTo(this.props.selectedItem)),
                  e.autoPlay !== this.props.autoPlay &&
                    (this.props.autoPlay
                      ? this.setupAutoPlay()
                      : this.destroyAutoPlay(),
                    this.setState({ autoPlay: this.props.autoPlay }));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.destroyCarousel();
              },
            },
            {
              key: "setupCarousel",
              value: function () {
                var e = this;
                this.bindEvents(),
                  this.state.autoPlay &&
                    n.Children.count(this.props.children) > 1 &&
                    this.setupAutoPlay(),
                  this.props.autoFocus && this.forceFocus(),
                  this.setState({ initialized: !0 }, function () {
                    var t = e.getInitialImage();
                    t && !t.complete
                      ? t.addEventListener("load", e.setMountState)
                      : e.setMountState();
                  });
              },
            },
            {
              key: "destroyCarousel",
              value: function () {
                this.state.initialized &&
                  (this.unbindEvents(), this.destroyAutoPlay());
              },
            },
            {
              key: "setupAutoPlay",
              value: function () {
                this.autoPlay();
                var e = this.carouselWrapperRef;
                this.props.stopOnHover &&
                  e &&
                  (e.addEventListener("mouseenter", this.stopOnHover),
                  e.addEventListener("mouseleave", this.startOnLeave));
              },
            },
            {
              key: "destroyAutoPlay",
              value: function () {
                this.clearAutoPlay();
                var e = this.carouselWrapperRef;
                this.props.stopOnHover &&
                  e &&
                  (e.removeEventListener("mouseenter", this.stopOnHover),
                  e.removeEventListener("mouseleave", this.startOnLeave));
              },
            },
            {
              key: "bindEvents",
              value: function () {
                (0, s.default)().addEventListener("resize", this.updateSizes),
                  (0, s.default)().addEventListener(
                    "DOMContentLoaded",
                    this.updateSizes
                  ),
                  this.props.useKeyboardArrows &&
                    (0, a.default)().addEventListener(
                      "keydown",
                      this.navigateWithKeyboard
                    );
              },
            },
            {
              key: "unbindEvents",
              value: function () {
                (0, s.default)().removeEventListener(
                  "resize",
                  this.updateSizes
                ),
                  (0, s.default)().removeEventListener(
                    "DOMContentLoaded",
                    this.updateSizes
                  );
                var e = this.getInitialImage();
                e && e.removeEventListener("load", this.setMountState),
                  this.props.useKeyboardArrows &&
                    (0, a.default)().removeEventListener(
                      "keydown",
                      this.navigateWithKeyboard
                    );
              },
            },
            {
              key: "forceFocus",
              value: function () {
                var e;
                null === (e = this.carouselWrapperRef) ||
                  void 0 === e ||
                  e.focus();
              },
            },
            {
              key: "renderItems",
              value: function (e) {
                var t = this;
                return this.props.children
                  ? n.Children.map(this.props.children, function (r, i) {
                      var o = i === t.state.selectedItem,
                        a = i === t.state.previousItem,
                        s =
                          (o && t.state.selectedStyle) ||
                          (a && t.state.prevStyle) ||
                          t.state.slideStyle ||
                          {};
                      t.props.centerMode &&
                        "horizontal" === t.props.axis &&
                        (s = m(
                          m({}, s),
                          {},
                          { minWidth: t.props.centerSlidePercentage + "%" }
                        )),
                        t.state.swiping &&
                          t.state.swipeMovementStarted &&
                          (s = m(m({}, s), {}, { pointerEvents: "none" }));
                      var c = {
                        ref: function (e) {
                          return t.setItemsRef(e, i);
                        },
                        key: "itemKey" + i + (e ? "clone" : ""),
                        className: l.default.ITEM(
                          !0,
                          i === t.state.selectedItem,
                          i === t.state.previousItem
                        ),
                        onClick: t.handleClickItem.bind(t, i, r),
                        style: s,
                      };
                      return n.default.createElement(
                        "li",
                        c,
                        t.props.renderItem(r, {
                          isSelected: i === t.state.selectedItem,
                          isPrevious: i === t.state.previousItem,
                        })
                      );
                    })
                  : [];
              },
            },
            {
              key: "renderControls",
              value: function () {
                var e = this,
                  t = this.props,
                  r = t.showIndicators,
                  i = t.labels,
                  l = t.renderIndicator,
                  o = t.children;
                return r
                  ? n.default.createElement(
                      "ul",
                      { className: "control-dots" },
                      n.Children.map(o, function (t, r) {
                        return (
                          l &&
                          l(
                            e.changeItem(r),
                            r === e.state.selectedItem,
                            r,
                            i.item
                          )
                        );
                      })
                    )
                  : null;
              },
            },
            {
              key: "renderStatus",
              value: function () {
                return this.props.showStatus
                  ? n.default.createElement(
                      "p",
                      { className: "carousel-status" },
                      this.props.statusFormatter(
                        this.state.selectedItem + 1,
                        n.Children.count(this.props.children)
                      )
                    )
                  : null;
              },
            },
            {
              key: "renderThumbs",
              value: function () {
                return this.props.showThumbs &&
                  this.props.children &&
                  0 !== n.Children.count(this.props.children)
                  ? n.default.createElement(
                      o.default,
                      {
                        ref: this.setThumbsRef,
                        onSelectItem: this.handleClickThumb,
                        selectedItem: this.state.selectedItem,
                        transitionTime: this.props.transitionTime,
                        thumbWidth: this.props.thumbWidth,
                        labels: this.props.labels,
                        emulateTouch: this.props.emulateTouch,
                      },
                      this.props.renderThumbs(this.props.children)
                    )
                  : null;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                if (
                  !this.props.children ||
                  0 === n.Children.count(this.props.children)
                )
                  return null;
                var t =
                    this.props.swipeable &&
                    n.Children.count(this.props.children) > 1,
                  r = "horizontal" === this.props.axis,
                  o =
                    this.props.showArrows &&
                    n.Children.count(this.props.children) > 1,
                  a =
                    (o &&
                      (this.state.selectedItem > 0 ||
                        this.props.infiniteLoop)) ||
                    !1,
                  s =
                    (o &&
                      (this.state.selectedItem <
                        n.Children.count(this.props.children) - 1 ||
                        this.props.infiniteLoop)) ||
                    !1,
                  c = this.renderItems(!0),
                  u = c.shift(),
                  d = c.pop(),
                  h = {
                    className: l.default.SLIDER(!0, this.state.swiping),
                    onSwipeMove: this.onSwipeMove,
                    onSwipeStart: this.onSwipeStart,
                    onSwipeEnd: this.onSwipeEnd,
                    style: this.state.itemListStyle,
                    tolerance: this.props.swipeScrollTolerance,
                  },
                  f = {};
                if (r) {
                  if (
                    ((h.onSwipeLeft = this.onSwipeForward),
                    (h.onSwipeRight = this.onSwipeBackwards),
                    this.props.dynamicHeight)
                  ) {
                    var g = this.getVariableItemHeight(this.state.selectedItem);
                    f.height = g || "auto";
                  }
                } else
                  (h.onSwipeUp =
                    "natural" === this.props.verticalSwipe
                      ? this.onSwipeBackwards
                      : this.onSwipeForward),
                    (h.onSwipeDown =
                      "natural" === this.props.verticalSwipe
                        ? this.onSwipeForward
                        : this.onSwipeBackwards),
                    (h.style = m(
                      m({}, h.style),
                      {},
                      { height: this.state.itemSize }
                    )),
                    (f.height = this.state.itemSize);
                return n.default.createElement(
                  "div",
                  {
                    "aria-label": this.props.ariaLabel,
                    className: l.default.ROOT(this.props.className),
                    ref: this.setCarouselWrapperRef,
                    tabIndex: this.props.useKeyboardArrows ? 0 : void 0,
                  },
                  n.default.createElement(
                    "div",
                    {
                      className: l.default.CAROUSEL(!0),
                      style: { width: this.props.width },
                    },
                    this.renderControls(),
                    this.props.renderArrowPrev(
                      this.onClickPrev,
                      a,
                      this.props.labels.leftArrow
                    ),
                    n.default.createElement(
                      "div",
                      {
                        className: l.default.WRAPPER(!0, this.props.axis),
                        style: f,
                      },
                      t
                        ? n.default.createElement(
                            i.default,
                            p({ tagName: "ul", innerRef: this.setListRef }, h, {
                              allowMouseEvents: this.props.emulateTouch,
                            }),
                            this.props.infiniteLoop && d,
                            this.renderItems(),
                            this.props.infiniteLoop && u
                          )
                        : n.default.createElement(
                            "ul",
                            {
                              className: l.default.SLIDER(
                                !0,
                                this.state.swiping
                              ),
                              ref: function (t) {
                                return e.setListRef(t);
                              },
                              style: this.state.itemListStyle || {},
                            },
                            this.props.infiniteLoop && d,
                            this.renderItems(),
                            this.props.infiniteLoop && u
                          )
                    ),
                    this.props.renderArrowNext(
                      this.onClickNext,
                      s,
                      this.props.labels.rightArrow
                    ),
                    this.renderStatus()
                  ),
                  this.renderThumbs()
                );
              },
            },
          ]),
          v(g.prototype, r),
          d && v(g, d),
          g
        );
      })(n.default.Component);
      (t.default = k),
        x(k, "displayName", "Carousel"),
        x(k, "defaultProps", {
          ariaLabel: void 0,
          axis: "horizontal",
          centerSlidePercentage: 80,
          interval: 3e3,
          labels: {
            leftArrow: "previous slide / item",
            rightArrow: "next slide / item",
            item: "slide item",
          },
          onClickItem: c.noop,
          onClickThumb: c.noop,
          onChange: c.noop,
          onSwipeStart: function () {},
          onSwipeEnd: function () {},
          onSwipeMove: function () {
            return !1;
          },
          preventMovementUntilSwipeScrollTolerance: !1,
          renderArrowPrev: function (e, t, r) {
            return n.default.createElement("button", {
              type: "button",
              "aria-label": r,
              className: l.default.ARROW_PREV(!t),
              onClick: e,
            });
          },
          renderArrowNext: function (e, t, r) {
            return n.default.createElement("button", {
              type: "button",
              "aria-label": r,
              className: l.default.ARROW_NEXT(!t),
              onClick: e,
            });
          },
          renderIndicator: function (e, t, r, i) {
            return n.default.createElement("li", {
              className: l.default.DOT(t),
              onClick: e,
              onKeyDown: e,
              value: r,
              key: r,
              role: "button",
              tabIndex: 0,
              "aria-label": "".concat(i, " ").concat(r + 1),
            });
          },
          renderItem: function (e) {
            return e;
          },
          renderThumbs: function (e) {
            var t = n.Children.map(e, function (e) {
              var t = e;
              if (
                ("img" !== e.type &&
                  (t = n.Children.toArray(e.props.children).find(function (e) {
                    return "img" === e.type;
                  })),
                t)
              )
                return t;
            });
            return 0 ===
              t.filter(function (e) {
                return e;
              }).length
              ? (console.warn(
                  "No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"
                ),
                [])
              : t;
          },
          statusFormatter: c.defaultStatusFormatter,
          selectedItem: 0,
          showArrows: !0,
          showIndicators: !0,
          showStatus: !0,
          showThumbs: !0,
          stopOnHover: !0,
          swipeScrollTolerance: 5,
          swipeable: !0,
          transitionTime: 350,
          verticalSwipe: "standard",
          width: "100%",
          animationHandler: "slide",
          swipeAnimationHandler: u.slideSwipeAnimationHandler,
          stopSwipingHandler: u.slideStopSwipingHandler,
        });
    },
    80634: function () {},
    67759: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.setPosition =
          t.getPosition =
          t.isKeyboardEvent =
          t.defaultStatusFormatter =
          t.noop =
            void 0);
      var n,
        i = r(70079),
        l = (n = r(63346)) && n.__esModule ? n : { default: n };
      (t.noop = function () {}),
        (t.defaultStatusFormatter = function (e, t) {
          return "".concat(e, " of ").concat(t);
        }),
        (t.isKeyboardEvent = function (e) {
          return !!e && e.hasOwnProperty("key");
        }),
        (t.getPosition = function (e, t) {
          if ((t.infiniteLoop && ++e, 0 === e)) return 0;
          var r = i.Children.count(t.children);
          if (t.centerMode && "horizontal" === t.axis) {
            var n = -e * t.centerSlidePercentage,
              l = r - 1;
            return (
              e && (e !== l || t.infiniteLoop)
                ? (n += (100 - t.centerSlidePercentage) / 2)
                : e === l && (n += 100 - t.centerSlidePercentage),
              n
            );
          }
          return -(100 * e);
        }),
        (t.setPosition = function (e, t) {
          var r = {};
          return (
            [
              "WebkitTransform",
              "MozTransform",
              "MsTransform",
              "OTransform",
              "transform",
              "msTransform",
            ].forEach(function (n) {
              r[n] = (0, l.default)(e, "%", t);
            }),
            r
          );
        });
    },
    59032: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== d(e) && "function" != typeof e))
            return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var l = n ? Object.getOwnPropertyDescriptor(e, i) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(r, i, l)
                : (r[i] = e[i]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(70079)),
        i = c(r(45007)),
        l = r(14280),
        o = c(r(63346)),
        a = c(r(4658)),
        s = c(r(52147));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function d(e) {
        return (d =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function h() {
        return (h =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function g(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m(e) {
        return (m = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function v(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var w = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && p(e, t);
        })(w, e);
        var t,
          r,
          c,
          u =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r,
                n = m(w);
              if (t) {
                var i = m(this).constructor;
                r = Reflect.construct(n, arguments, i);
              } else r = n.apply(this, arguments);
              return (e = r) && ("object" === d(e) || "function" == typeof e)
                ? e
                : g(this);
            });
        function w(e) {
          var t;
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, w),
            v(g((t = u.call(this, e))), "itemsWrapperRef", void 0),
            v(g(t), "itemsListRef", void 0),
            v(g(t), "thumbsRef", void 0),
            v(g(t), "setItemsWrapperRef", function (e) {
              t.itemsWrapperRef = e;
            }),
            v(g(t), "setItemsListRef", function (e) {
              t.itemsListRef = e;
            }),
            v(g(t), "setThumbsRef", function (e, r) {
              t.thumbsRef || (t.thumbsRef = []), (t.thumbsRef[r] = e);
            }),
            v(g(t), "updateSizes", function () {
              if (t.props.children && t.itemsWrapperRef && t.thumbsRef) {
                var e = n.Children.count(t.props.children),
                  r = t.itemsWrapperRef.clientWidth,
                  i = t.props.thumbWidth
                    ? t.props.thumbWidth
                    : (0, l.outerWidth)(t.thumbsRef[0]),
                  o = Math.floor(r / i),
                  a = o < e,
                  s = a ? e - o : 0;
                t.setState(function (e, r) {
                  return {
                    itemSize: i,
                    visibleItems: o,
                    firstItem: a ? t.getFirstItem(r.selectedItem) : 0,
                    lastPosition: s,
                    showArrows: a,
                  };
                });
              }
            }),
            v(g(t), "handleClickItem", function (e, r, n) {
              if (!n.hasOwnProperty("key") || "Enter" === n.key) {
                var i = t.props.onSelectItem;
                "function" == typeof i && i(e, r);
              }
            }),
            v(g(t), "onSwipeStart", function () {
              t.setState({ swiping: !0 });
            }),
            v(g(t), "onSwipeEnd", function () {
              t.setState({ swiping: !1 });
            }),
            v(g(t), "onSwipeMove", function (e) {
              var r = e.x;
              if (
                !t.state.itemSize ||
                !t.itemsWrapperRef ||
                !t.state.visibleItems
              )
                return !1;
              var i = n.Children.count(t.props.children),
                l = -(100 * t.state.firstItem) / t.state.visibleItems;
              0 === l && r > 0 && (r = 0),
                l ===
                  -(100 * Math.max(i - t.state.visibleItems, 0)) /
                    t.state.visibleItems &&
                  r < 0 &&
                  (r = 0);
              var a = l + 100 / (t.itemsWrapperRef.clientWidth / r);
              return (
                t.itemsListRef &&
                  [
                    "WebkitTransform",
                    "MozTransform",
                    "MsTransform",
                    "OTransform",
                    "transform",
                    "msTransform",
                  ].forEach(function (e) {
                    t.itemsListRef.style[e] = (0, o.default)(
                      a,
                      "%",
                      t.props.axis
                    );
                  }),
                !0
              );
            }),
            v(g(t), "slideRight", function (e) {
              t.moveTo(t.state.firstItem - ("number" == typeof e ? e : 1));
            }),
            v(g(t), "slideLeft", function (e) {
              t.moveTo(t.state.firstItem + ("number" == typeof e ? e : 1));
            }),
            v(g(t), "moveTo", function (e) {
              (e =
                (e = e < 0 ? 0 : e) >= t.state.lastPosition
                  ? t.state.lastPosition
                  : e),
                t.setState({ firstItem: e });
            }),
            (t.state = {
              selectedItem: e.selectedItem,
              swiping: !1,
              showArrows: !1,
              firstItem: 0,
              visibleItems: 0,
              lastPosition: 0,
            }),
            t
          );
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                this.setupThumbs();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                this.props.selectedItem !== this.state.selectedItem &&
                  this.setState({
                    selectedItem: this.props.selectedItem,
                    firstItem: this.getFirstItem(this.props.selectedItem),
                  }),
                  this.props.children !== e.children && this.updateSizes();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.destroyThumbs();
              },
            },
            {
              key: "setupThumbs",
              value: function () {
                (0, s.default)().addEventListener("resize", this.updateSizes),
                  (0, s.default)().addEventListener(
                    "DOMContentLoaded",
                    this.updateSizes
                  ),
                  this.updateSizes();
              },
            },
            {
              key: "destroyThumbs",
              value: function () {
                (0, s.default)().removeEventListener(
                  "resize",
                  this.updateSizes
                ),
                  (0, s.default)().removeEventListener(
                    "DOMContentLoaded",
                    this.updateSizes
                  );
              },
            },
            {
              key: "getFirstItem",
              value: function (e) {
                var t = e;
                return (
                  e >= this.state.lastPosition && (t = this.state.lastPosition),
                  e < this.state.firstItem + this.state.visibleItems &&
                    (t = this.state.firstItem),
                  e < this.state.firstItem && (t = e),
                  t
                );
              },
            },
            {
              key: "renderItems",
              value: function () {
                var e = this;
                return this.props.children.map(function (t, r) {
                  var l = i.default.ITEM(!1, r === e.state.selectedItem),
                    o = {
                      key: r,
                      ref: function (t) {
                        return e.setThumbsRef(t, r);
                      },
                      className: l,
                      onClick: e.handleClickItem.bind(
                        e,
                        r,
                        e.props.children[r]
                      ),
                      onKeyDown: e.handleClickItem.bind(
                        e,
                        r,
                        e.props.children[r]
                      ),
                      "aria-label": ""
                        .concat(e.props.labels.item, " ")
                        .concat(r + 1),
                      style: { width: e.props.thumbWidth },
                    };
                  return n.default.createElement(
                    "li",
                    h({}, o, { role: "button", tabIndex: 0 }),
                    t
                  );
                });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                if (!this.props.children) return null;
                var t = n.Children.count(this.props.children) > 1,
                  r = this.state.showArrows && this.state.firstItem > 0,
                  l =
                    this.state.showArrows &&
                    this.state.firstItem < this.state.lastPosition,
                  s = {},
                  c = -this.state.firstItem * (this.state.itemSize || 0),
                  u = (0, o.default)(c, "px", this.props.axis),
                  d = this.props.transitionTime + "ms";
                return (
                  (s = {
                    WebkitTransform: u,
                    MozTransform: u,
                    MsTransform: u,
                    OTransform: u,
                    transform: u,
                    msTransform: u,
                    WebkitTransitionDuration: d,
                    MozTransitionDuration: d,
                    MsTransitionDuration: d,
                    OTransitionDuration: d,
                    transitionDuration: d,
                    msTransitionDuration: d,
                  }),
                  n.default.createElement(
                    "div",
                    { className: i.default.CAROUSEL(!1) },
                    n.default.createElement(
                      "div",
                      {
                        className: i.default.WRAPPER(!1),
                        ref: this.setItemsWrapperRef,
                      },
                      n.default.createElement("button", {
                        type: "button",
                        className: i.default.ARROW_PREV(!r),
                        onClick: function () {
                          return e.slideRight();
                        },
                        "aria-label": this.props.labels.leftArrow,
                      }),
                      t
                        ? n.default.createElement(
                            a.default,
                            {
                              tagName: "ul",
                              className: i.default.SLIDER(
                                !1,
                                this.state.swiping
                              ),
                              onSwipeLeft: this.slideLeft,
                              onSwipeRight: this.slideRight,
                              onSwipeMove: this.onSwipeMove,
                              onSwipeStart: this.onSwipeStart,
                              onSwipeEnd: this.onSwipeEnd,
                              style: s,
                              innerRef: this.setItemsListRef,
                              allowMouseEvents: this.props.emulateTouch,
                            },
                            this.renderItems()
                          )
                        : n.default.createElement(
                            "ul",
                            {
                              className: i.default.SLIDER(
                                !1,
                                this.state.swiping
                              ),
                              ref: function (t) {
                                return e.setItemsListRef(t);
                              },
                              style: s,
                            },
                            this.renderItems()
                          ),
                      n.default.createElement("button", {
                        type: "button",
                        className: i.default.ARROW_NEXT(!l),
                        onClick: function () {
                          return e.slideLeft();
                        },
                        "aria-label": this.props.labels.rightArrow,
                      })
                    )
                  )
                );
              },
            },
          ]),
          f(w.prototype, r),
          c && f(w, c),
          w
        );
      })(n.Component);
      (t.default = w),
        v(w, "displayName", "Thumbs"),
        v(w, "defaultProps", {
          axis: "horizontal",
          labels: {
            leftArrow: "previous slide / item",
            rightArrow: "next slide / item",
            item: "slide item",
          },
          selectedItem: 0,
          thumbWidth: 80,
          transitionTime: 350,
        });
    },
    45007: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n,
        i = (n = r(65443)) && n.__esModule ? n : { default: n };
      t.default = {
        ROOT: function (e) {
          var t, r, n;
          return (0, i.default)(
            ((t = { "carousel-root": !0 }),
            (r = e || ""),
            (n = !!e),
            r in t
              ? Object.defineProperty(t, r, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[r] = n),
            t)
          );
        },
        CAROUSEL: function (e) {
          return (0, i.default)({ carousel: !0, "carousel-slider": e });
        },
        WRAPPER: function (e, t) {
          return (0, i.default)({
            "thumbs-wrapper": !e,
            "slider-wrapper": e,
            "axis-horizontal": "horizontal" === t,
            "axis-vertical": "horizontal" !== t,
          });
        },
        SLIDER: function (e, t) {
          return (0, i.default)({ thumbs: !e, slider: e, animated: !t });
        },
        ITEM: function (e, t, r) {
          return (0, i.default)({
            thumb: !e,
            slide: e,
            selected: t,
            previous: r,
          });
        },
        ARROW_PREV: function (e) {
          return (0, i.default)({
            "control-arrow control-prev": !0,
            "control-disabled": e,
          });
        },
        ARROW_NEXT: function (e) {
          return (0, i.default)({
            "control-arrow control-next": !0,
            "control-disabled": e,
          });
        },
        DOT: function (e) {
          return (0, i.default)({ dot: !0, selected: e });
        },
      };
    },
    14280: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.outerWidth = void 0),
        (t.outerWidth = function (e) {
          var t = e.offsetWidth,
            r = getComputedStyle(e);
          return t + (parseInt(r.marginLeft) + parseInt(r.marginRight));
        });
    },
    54721: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "lr", {
        enumerable: !0,
        get: function () {
          return n.default;
        },
      });
      var n = i(r(48170));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      r(80634), i(r(59032));
    },
    19657: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.default = function () {
          return document;
        });
    },
    52147: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.default = function () {
          return window;
        });
    },
    75329: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ni: function () {
          return a;
        },
        Zu: function () {
          return o;
        },
        be: function () {
          return i;
        },
        yR: function () {
          return s;
        },
      });
      var n = r(70079);
      function i(e) {
        return {
          "--gdg-accent-color": e.accentColor,
          "--gdg-accent-fg": e.accentFg,
          "--gdg-accent-light": e.accentLight,
          "--gdg-text-dark": e.textDark,
          "--gdg-text-medium": e.textMedium,
          "--gdg-text-light": e.textLight,
          "--gdg-text-bubble": e.textBubble,
          "--gdg-bg-icon-header": e.bgIconHeader,
          "--gdg-fg-icon-header": e.fgIconHeader,
          "--gdg-text-header": e.textHeader,
          "--gdg-text-group-header": e.textGroupHeader ?? e.textHeader,
          "--gdg-text-header-selected": e.textHeaderSelected,
          "--gdg-bg-cell": e.bgCell,
          "--gdg-bg-cell-medium": e.bgCellMedium,
          "--gdg-bg-header": e.bgHeader,
          "--gdg-bg-header-has-focus": e.bgHeaderHasFocus,
          "--gdg-bg-header-hovered": e.bgHeaderHovered,
          "--gdg-bg-bubble": e.bgBubble,
          "--gdg-bg-bubble-selected": e.bgBubbleSelected,
          "--gdg-bg-search-result": e.bgSearchResult,
          "--gdg-border-color": e.borderColor,
          "--gdg-horizontal-border-color":
            e.horizontalBorderColor ?? e.borderColor,
          "--gdg-drilldown-border": e.drilldownBorder,
          "--gdg-link-color": e.linkColor,
          "--gdg-cell-horizontal-padding": `${e.cellHorizontalPadding}px`,
          "--gdg-cell-vertical-padding": `${e.cellVerticalPadding}px`,
          "--gdg-header-font-style": e.headerFontStyle,
          "--gdg-base-font-style": e.baseFontStyle,
          "--gdg-marker-font-style": e.markerFontStyle,
          "--gdg-font-family": e.fontFamily,
          "--gdg-editor-font-size": e.editorFontSize,
          ...(void 0 === e.roundingRadius
            ? {}
            : { "--gdg-rounding-radius": `${e.roundingRadius}px` }),
        };
      }
      let l = {
        accentColor: "#4F5DFF",
        accentFg: "#FFFFFF",
        accentLight: "rgba(62, 116, 253, 0.1)",
        textDark: "#313139",
        textMedium: "#737383",
        textLight: "#B2B2C0",
        textBubble: "#313139",
        bgIconHeader: "#737383",
        fgIconHeader: "#FFFFFF",
        textHeader: "#313139",
        textGroupHeader: "#313139BB",
        textHeaderSelected: "#FFFFFF",
        bgCell: "#FFFFFF",
        bgCellMedium: "#FAFAFB",
        bgHeader: "#F7F7F8",
        bgHeaderHasFocus: "#E9E9EB",
        bgHeaderHovered: "#EFEFF1",
        bgBubble: "#EDEDF3",
        bgBubbleSelected: "#FFFFFF",
        bgSearchResult: "#fff9e3",
        borderColor: "rgba(115, 116, 131, 0.16)",
        drilldownBorder: "rgba(0, 0, 0, 0)",
        linkColor: "#4F5DFF",
        cellHorizontalPadding: 8,
        cellVerticalPadding: 3,
        headerIconSize: 18,
        headerFontStyle: "600 13px",
        baseFontStyle: "13px",
        markerFontStyle: "9px",
        fontFamily:
          "Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif",
        editorFontSize: "13px",
        lineHeight: 1.4,
      };
      function o() {
        return l;
      }
      let a = n.createContext(l);
      function s(e, ...t) {
        let r = { ...e };
        for (let e of t)
          if (void 0 !== e)
            for (let t in e) e.hasOwnProperty(t) && (r[t] = e[t]);
        return (
          (void 0 === r.headerFontFull ||
            e.fontFamily !== r.fontFamily ||
            e.headerFontStyle !== r.headerFontStyle) &&
            (r.headerFontFull = `${r.headerFontStyle} ${r.fontFamily}`),
          (void 0 === r.baseFontFull ||
            e.fontFamily !== r.fontFamily ||
            e.baseFontStyle !== r.baseFontStyle) &&
            (r.baseFontFull = `${r.baseFontStyle} ${r.fontFamily}`),
          (void 0 === r.markerFontFull ||
            e.fontFamily !== r.fontFamily ||
            e.markerFontStyle !== r.markerFontStyle) &&
            (r.markerFontFull = `${r.markerFontStyle} ${r.fontFamily}`),
          r
        );
      }
    },
    29879: function (e, t, r) {
      "use strict";
      function n(e) {}
      function i(e = "This should not happen") {
        throw Error(e);
      }
      function l(e, t = "Assertion failed") {
        if (!e) return i(t);
      }
      function o(e, t) {
        return i(t ?? "Hell froze over");
      }
      function a(e, t) {
        try {
          return e();
        } catch {
          return t;
        }
      }
      r.d(t, {
        NG: function () {
          return n;
        },
        hu: function () {
          return l;
        },
        vE: function () {
          return o;
        },
        vZ: function () {
          return function e(t, r) {
            let n, i;
            if (t === r) return !0;
            if (t && r && (n = t.constructor) === r.constructor) {
              if (n === Date) return t.getTime() === r.getTime();
              if (n === RegExp) return t.toString() === r.toString();
              if (n === Array) {
                if ((i = t.length) === r.length) for (; i-- && e(t[i], r[i]); );
                return -1 === i;
              }
              if (!n || "object" == typeof t) {
                for (n in ((i = 0), t))
                  if (
                    (s.call(t, n) && ++i && !s.call(r, n)) ||
                    !(n in r) ||
                    !e(t[n], r[n])
                  )
                    return !1;
                return Object.keys(r).length === i;
              }
            }
            return t != t && r != r;
          };
        },
        wY: function () {
          return a;
        },
      });
      let s = Object.prototype.hasOwnProperty;
    },
    72003: function (e, t, r) {
      "use strict";
      let n;
      r.d(t, {
        F: function () {
          return r8;
        },
      });
      var i,
        l,
        o = r(70079),
        a = r(29879),
        s = r(95182),
        c = r(55009),
        u = r(90757),
        d = r(56707),
        h = r(89678),
        f = r(15777);
      function p(e, t, r, n, i = !1) {
        let l = o.useRef();
        (l.current = t),
          o.useEffect(() => {
            if (null === r || void 0 === r.addEventListener) return;
            let t = (e) => {
              l.current?.call(r, e);
            };
            return (
              r.addEventListener(e, t, { passive: n, capture: i }),
              () => {
                r.removeEventListener(e, t, { capture: i });
              }
            );
          }, [e, r, n, i]);
      }
      function g(e, t) {
        return void 0 === e ? void 0 : t;
      }
      let m = Math.PI,
        v = (e, t, r) => ({
          x1: e - r / 2,
          y1: t - r / 2,
          x2: e + r / 2,
          y2: t + r / 2,
        }),
        w = (e, t, r, n, i) => {
          switch (e) {
            case "left":
              return Math.floor(t) + n + i / 2;
            case "center":
              return Math.floor(t + r / 2);
            case "right":
              return Math.floor(t + r) - n - i / 2;
          }
        },
        y = (e, t, r) => Math.min(e, t - 2 * r),
        b = (e, t, r) => r.x1 <= e && e <= r.x2 && r.y1 <= t && t <= r.y2,
        x = (e) => {
          let t = e.fgColor ?? "currentColor";
          return o.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            o.createElement("path", {
              d: "M12.7073 7.05029C7.87391 11.8837 10.4544 9.30322 6.03024 13.7273C5.77392 13.9836 5.58981 14.3071 5.50189 14.6587L4.52521 18.5655C4.38789 19.1148 4.88543 19.6123 5.43472 19.475L9.34146 18.4983C9.69313 18.4104 10.0143 18.2286 10.2706 17.9722L16.9499 11.2929",
              stroke: t,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              fill: "none",
              vectorEffect: "non-scaling-stroke",
            }),
            o.createElement("path", {
              d: "M20.4854 4.92901L19.0712 3.5148C18.2901 2.73375 17.0238 2.73375 16.2428 3.5148L14.475 5.28257C15.5326 7.71912 16.4736 8.6278 18.7176 9.52521L20.4854 7.75744C21.2665 6.97639 21.2665 5.71006 20.4854 4.92901Z",
              stroke: t,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              fill: "none",
              vectorEffect: "non-scaling-stroke",
            })
          );
        },
        k = (e) => {
          let t = e.fgColor ?? "currentColor";
          return o.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            o.createElement("path", {
              d: "M19 6L10.3802 17L5.34071 11.8758",
              vectorEffect: "non-scaling-stroke",
              stroke: t,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        },
        C = RegExp(
          "^[^A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿]*[֑-߿יִ-﷽ﹰ-ﻼ]"
        );
      function S(e) {
        return C.test(e) ? "rtl" : "not-rtl";
      }
      function M() {
        if ("undefined" == typeof document) return 0;
        if (void 0 !== n) return n;
        let e = document.createElement("p");
        (e.style.width = "100%"), (e.style.height = "200px");
        let t = document.createElement("div");
        (t.id = "testScrollbar"),
          (t.style.position = "absolute"),
          (t.style.top = "0px"),
          (t.style.left = "0px"),
          (t.style.visibility = "hidden"),
          (t.style.width = "200px"),
          (t.style.height = "150px"),
          (t.style.overflow = "hidden"),
          t.append(e),
          document.body.append(t);
        let r = e.offsetWidth;
        t.style.overflow = "scroll";
        let i = e.offsetWidth;
        return r === i && (i = t.clientWidth), t.remove(), (n = r - i);
      }
      let R = Symbol();
      function E(e) {
        if (0 === e.length) return "";
        let t = 0,
          r = 0;
        for (let n of e) {
          if ((r += n.length) > 1e4) break;
          t++;
        }
        return e.slice(0, t).join(", ");
      }
      var T = new Map(),
        I = new Map(),
        P = new Map();
      function z(e, t, r, n) {
        var i, l;
        let o = I.get(r);
        if (n && void 0 !== o && o.count > 2e4) {
          let n = P.get(r);
          if (
            (void 0 === n &&
              ((n = (function (e, t) {
                var r;
                let n = new Map(),
                  i = 0;
                for (let t of "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.-+=?") {
                  let r = e.measureText(t).width;
                  n.set(t, r), (i += r);
                }
                let l = i / n.size,
                  o = (t / l + 3) / 4;
                for (let e of n.keys())
                  n.set(e, (null != (r = n.get(e)) ? r : l) * o);
                return n;
              })(e, o.size)),
              P.set(r, n)),
            o.count > 5e5)
          ) {
            let e = 0;
            for (let r of t) e += null != (i = n.get(r)) ? i : o.size;
            return 1.01 * e;
          }
          let l = e.measureText(t);
          return (
            (function (e, t, r, n, i) {
              var l, o, a;
              let s = 0,
                c = {};
              for (let t of e)
                (s += null != (l = r.get(t)) ? l : i),
                  (c[t] = (null != (o = c[t]) ? o : 0) + 1);
              let u = t - s;
              for (let e of Object.keys(c)) {
                let t = c[e],
                  l = null != (a = r.get(e)) ? a : i,
                  o = (((l * t) / s) * u * n) / t,
                  d = l + o;
                r.set(e, d);
              }
            })(t, l.width, n, Math.max(0.05, 1 - o.count / 2e5), o.size),
            I.set(r, { count: o.count + t.length, size: o.size }),
            l.width
          );
        }
        let a = e.measureText(t),
          s = a.width / t.length;
        if ((null != (l = null == o ? void 0 : o.count) ? l : 0) > 2e4)
          return a.width;
        if (void 0 === o) I.set(r, { count: t.length, size: s });
        else {
          let e = s - o.size,
            n = t.length / (o.count + t.length),
            i = o.size + e * n;
          I.set(r, { count: o.count + t.length, size: i });
        }
        return a.width;
      }
      function H(e, t) {
        return (e ?? "") === (t ?? "");
      }
      function A(e, t) {
        let [r, n] = e;
        return r >= t.x && r < t.x + t.width && n >= t.y && n < t.y + t.height;
      }
      function L(e, t) {
        return e?.[0] === t?.[0] && e?.[1] === t?.[1];
      }
      function O(e) {
        return [e.x + e.width - 1, e.y + e.height - 1];
      }
      function D(e, t, r) {
        let n = r.x,
          i = r.x + r.width - 1,
          l = r.y,
          o = r.y + r.height - 1,
          [a, s] = e;
        if (s < l || s > o) return !1;
        if (void 0 === t.span) return a >= n && a <= i;
        let [c, u] = t.span;
        return (c >= n && c <= i) || (u >= n && c <= i) || (c < n && u > i);
      }
      function F(e, t) {
        let r = e;
        if (void 0 !== t) {
          let n = [...e],
            i = r[t.src];
          t.src > t.dest
            ? (n.splice(t.src, 1), n.splice(t.dest, 0, i))
            : (n.splice(t.dest + 1, 0, i), n.splice(t.src, 1)),
            (r = n = n.map((t, r) => ({ ...t, sticky: e[r].sticky })));
        }
        return r;
      }
      function _(e, t) {
        let r = 0,
          n = F(e, t);
        for (let e = 0; e < n.length; e++) {
          let t = n[e];
          if (t.sticky) r += t.width;
          else break;
        }
        return r;
      }
      function $(e, t, r) {
        if ("number" == typeof r) return t * r;
        {
          let n = 0;
          for (let i = e - t; i < e; i++) n += r(i);
          return n;
        }
      }
      function N(e, t, r, n, i) {
        let l = F(e, n),
          o = [];
        for (let e of l)
          if (e.sticky) o.push(e);
          else break;
        if (o.length > 0) for (let e of o) r -= e.width;
        let a = t,
          s = i ?? 0;
        for (; s <= r && a < l.length; ) (s += l[a].width), a++;
        for (let e = t; e < a; e++) {
          let t = l[e];
          t.sticky || o.push(t);
        }
        return o;
      }
      let W = 0,
        B = {},
        j = "undefined" == typeof window;
      function V(e, t, r, n) {
        return `${e}_${n ?? t?.font}_${r}`;
      }
      function X(e, t, r) {
        let n = V(e, t, "middle", r),
          i = B[n];
        return (
          void 0 === i && ((i = t.measureText(e)), (B[n] = i), W++),
          W > 1e4 && ((B = {}), (W = 0)),
          i
        );
      }
      function U(e, t) {
        return (
          "string" != typeof t && (t = t.baseFontFull),
          (function (e, t) {
            for (let e of Y) if (e.key === t) return e.val;
            let r = K(e, "alphabetic"),
              n =
                -(
                  K(e, "middle").actualBoundingBoxDescent -
                  r.actualBoundingBoxDescent
                ) +
                r.actualBoundingBoxAscent / 2;
            return Y.push({ key: t, val: n }), n;
          })(e, t)
        );
      }
      function K(e, t) {
        e.save(), (e.textBaseline = t);
        let r = e.measureText("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        return e.restore(), r;
      }
      !(async function () {
        j ||
          document?.fonts?.ready === void 0 ||
          (await document.fonts.ready,
          (W = 0),
          (B = {}),
          T.clear(),
          P.clear(),
          I.clear());
      })();
      let Y = [];
      function G(e, t, r) {
        let { ctx: n, theme: i } = e,
          l = t ?? {},
          o = r ?? i.textDark;
        return o !== l.fillStyle && ((n.fillStyle = o), (l.fillStyle = o)), l;
      }
      function q(e, t, r, n, i, l, o, a, s) {
        "right" === s
          ? e.fillText(
              t,
              r + i - (a.cellHorizontalPadding + 0.5),
              n + l / 2 + o
            )
          : "center" === s
            ? e.fillText(t, r + i / 2, n + l / 2 + o)
            : e.fillText(t, r + a.cellHorizontalPadding + 0.5, n + l / 2 + o);
      }
      function Z(e, t) {
        let r = X("ABCi09jgqpy", e, t);
        return r.actualBoundingBoxAscent + r.actualBoundingBoxDescent;
      }
      function Q(e, t, r, n, i) {
        let { ctx: l, rect: o, theme: a } = e,
          { x: s, y: c, width: u, height: d } = o;
        (n = n ?? !1) ||
          (t = (function (e, t) {
            e.includes("\n") && (e = e.split(/\r?\n/, 1)[0]);
            let r = t / 4;
            return e.length > r && (e = e.slice(0, r)), e;
          })(t, u));
        let h = U(l, a),
          f = "rtl" === S(t);
        if (
          (void 0 === r && f && (r = "right"),
          f && (l.direction = "rtl"),
          t.length > 0)
        ) {
          let e = !1;
          "right" === r
            ? ((l.textAlign = "right"), (e = !0))
            : void 0 !== r && "left" !== r && ((l.textAlign = r), (e = !0)),
            n
              ? (function (e, t, r, n, i, l, o, a, s, c) {
                  let u = a.baseFontFull,
                    d = (function (e, t, r, n, i, l) {
                      let o = `${t}_${r}_${n}px`,
                        a = T.get(o);
                      if (void 0 !== a) return a;
                      if (n <= 0) return [];
                      let s = [],
                        c = t.split(`
`),
                        u = I.get(r),
                        d = void 0 === u ? t.length : (n / u.size) * 1.5,
                        h = i && void 0 !== u && u.count > 2e4;
                      for (let t of c) {
                        let i = z(e, t.slice(0, Math.max(0, d)), r, h),
                          l = Math.min(t.length, d);
                        if (i <= n) s.push(t);
                        else {
                          for (; i > n; ) {
                            let o = (function (e, t, r, n, i, l, o, a) {
                                if (t.length <= 1) return t.length;
                                if (i < r) return -1;
                                let s = Math.floor((r / i) * l),
                                  c = z(e, t.slice(0, Math.max(0, s)), n, o),
                                  u = null == a ? void 0 : a(t);
                                if (c !== r) {
                                  if (c < r) {
                                    for (; c < r; )
                                      s++,
                                        (c = z(
                                          e,
                                          t.slice(0, Math.max(0, s)),
                                          n,
                                          o
                                        ));
                                    s--;
                                  } else
                                    for (; c > r; ) {
                                      let r =
                                        void 0 !== u
                                          ? 0
                                          : t.lastIndexOf(" ", s - 1);
                                      r > 0 ? (s = r) : s--,
                                        (c = z(
                                          e,
                                          t.slice(0, Math.max(0, s)),
                                          n,
                                          o
                                        ));
                                    }
                                }
                                if (" " !== t[s]) {
                                  let e = 0;
                                  if (void 0 === u) e = t.lastIndexOf(" ", s);
                                  else
                                    for (let t of u) {
                                      if (t > s) break;
                                      e = t;
                                    }
                                  e > 0 && (s = e);
                                }
                                return s;
                              })(e, t, n, r, i, l, h, void 0),
                              a = t.slice(0, Math.max(0, o));
                            (t = t.slice(a.length)),
                              s.push(a),
                              (i = z(e, t.slice(0, Math.max(0, d)), r, h)),
                              (l = Math.min(t.length, d));
                          }
                          i > 0 && s.push(t);
                        }
                      }
                      return (
                        (s = s.map((e, t) =>
                          0 === t ? e.trimEnd() : e.trim()
                        )),
                        T.set(o, s),
                        T.size > 500 && T.delete(T.keys().next().value),
                        s
                      );
                    })(e, t, u, i - 2 * a.cellHorizontalPadding, c ?? !1),
                    h = Z(e, u),
                    f = a.lineHeight * h,
                    p = h + f * (d.length - 1),
                    g = p + a.cellVerticalPadding > l;
                  g && (e.save(), e.rect(r, n, i, l), e.clip());
                  let m = n + l / 2 - p / 2,
                    v = Math.max(n + a.cellVerticalPadding, m);
                  for (let t of d)
                    if ((q(e, t, r, v, i, h, o, a, s), (v += f) > n + l)) break;
                  g && e.restore();
                })(l, t, s, c, u, d, h, a, r, i)
              : q(l, t, s, c, u, d, h, a, r),
            e && (l.textAlign = "start"),
            f && (l.direction = "inherit");
        }
      }
      function J(e, t, r, n, i, l) {
        "number" == typeof l && (l = { tl: l, tr: l, br: l, bl: l }),
          (l = {
            tl: Math.max(0, Math.min(l.tl, i / 2, n / 2)),
            tr: Math.max(0, Math.min(l.tr, i / 2, n / 2)),
            bl: Math.max(0, Math.min(l.bl, i / 2, n / 2)),
            br: Math.max(0, Math.min(l.br, i / 2, n / 2)),
          }),
          e.moveTo(t + l.tl, r),
          e.arcTo(t + n, r, t + n, r + l.tr, l.tr),
          e.arcTo(t + n, r + i, t + n - l.br, r + i, l.br),
          e.arcTo(t, r + i, t, r + i - l.bl, l.bl),
          e.arcTo(t, r, t + l.tl, r, l.tl);
      }
      function ee(e, t, r, n, i, l, o, a, s, c, u, d, h, f, p) {
        let g = { x: 0, y: l + c, width: 0, height: 0 };
        if (e >= f.length || t >= u || t < -2 || e < 0) return g;
        let m = l - i;
        if (e >= d) {
          let t = o > e ? -1 : 1,
            r = _(f);
          g.x += r + s;
          for (let r = o; r !== e; r += t)
            g.x += f[1 === t ? r : r - 1].width * t;
        } else for (let t = 0; t < e; t++) g.x += f[t].width;
        if (((g.width = f[e].width + 1), -1 === t)) (g.y = i), (g.height = m);
        else if (-2 === t) {
          (g.y = 0), (g.height = i);
          let t = e,
            n = f[e].group,
            l = f[e].sticky;
          for (; t > 0 && H(f[t - 1].group, n) && f[t - 1].sticky === l; ) {
            let e = f[t - 1];
            (g.x -= e.width), (g.width += e.width), t--;
          }
          let o = e;
          for (
            ;
            o + 1 < f.length && H(f[o + 1].group, n) && f[o + 1].sticky === l;
          ) {
            let e = f[o + 1];
            (g.width += e.width), o++;
          }
          if (!l) {
            let e = _(f),
              t = g.x - e;
            t < 0 && ((g.x -= t), (g.width += t)),
              g.x + g.width > r && (g.width = r - g.x);
          }
        } else if (t >= u - h) {
          let e = u - t;
          for (g.y = n; e > 0; ) {
            let r = t + e - 1;
            (g.height = "number" == typeof p ? p : p(r)),
              (g.y -= g.height),
              e--;
          }
          g.height += 1;
        } else {
          let e = a > t ? -1 : 1;
          if ("number" == typeof p) {
            let e = t - a;
            g.y += e * p;
          } else for (let r = a; r !== t; r += e) g.y += p(r) * e;
          g.height = ("number" == typeof p ? p : p(t)) + 1;
        }
        return g;
      }
      function et(e, t) {
        return (t + 2) * 2097152 + e;
      }
      function er(e) {
        return Math.floor(e / 2097152) - 2;
      }
      function en(e) {
        return [e % 2097152, er(e)];
      }
      class ei {
        visibleWindow = { x: 0, y: 0, width: 0, height: 0 };
        freezeCols = 0;
        freezeRows = [];
        isInWindow = (e) => {
          let t = e % 2097152,
            r = er(e),
            n = this.visibleWindow,
            i = (t >= n.x && t <= n.x + n.width) || t < this.freezeCols,
            l =
              (r >= n.y && r <= n.y + n.height) || this.freezeRows.includes(r);
          return i && l;
        };
        setWindow(e, t, r) {
          (this.visibleWindow.x === e.x &&
            this.visibleWindow.y === e.y &&
            this.visibleWindow.width === e.width &&
            this.visibleWindow.height === e.height &&
            this.freezeCols === t &&
            (0, a.vZ)(this.freezeRows, r)) ||
            ((this.visibleWindow = e),
            (this.freezeCols = t),
            (this.freezeRows = r),
            this.clearOutOfWindow());
        }
      }
      class el extends ei {
        cache = new Map();
        setValue = (e, t) => {
          this.cache.set(et(e[0], e[1]), t);
        };
        getValue = (e) => this.cache.get(et(e[0], e[1]));
        clearOutOfWindow = () => {
          for (let [e] of this.cache.entries())
            this.isInWindow(e) || this.cache.delete(e);
        };
      }
      class eo {
        cells;
        constructor(e = []) {
          this.cells = new Set(e.map((e) => et(e[0], e[1])));
        }
        add(e) {
          this.cells.add(et(e[0], e[1]));
        }
        has(e) {
          return void 0 !== e && this.cells.has(et(e[0], e[1]));
        }
        remove(e) {
          this.cells.delete(et(e[0], e[1]));
        }
        clear() {
          this.cells.clear();
        }
        get size() {
          return this.cells.size;
        }
        hasHeader() {
          for (let e of this.cells) if (0 > er(e)) return !0;
          return !1;
        }
        hasItemInRectangle(e) {
          for (let t = e.y; t < e.y + e.height; t++)
            for (let r = e.x; r < e.x + e.width; r++)
              if (this.cells.has(et(r, t))) return !0;
          return !1;
        }
        hasItemInRegion(e) {
          for (let t of e) if (this.hasItemInRectangle(t)) return !0;
          return !1;
        }
        *values() {
          for (let e of this.cells) yield en(e);
        }
      }
      class ea {
        onSettled;
        spriteMap = new Map();
        headerIcons;
        inFlight = 0;
        constructor(e, t) {
          (this.onSettled = t), (this.headerIcons = e ?? {});
        }
        drawSprite(e, t, r, n, i, l, o, a = 1) {
          let [s, c] =
              "normal" === t
                ? [o.bgIconHeader, o.fgIconHeader]
                : "selected" === t
                  ? ["white", o.accentColor]
                  : [o.accentColor, o.bgHeader],
            u = l * Math.ceil(window.devicePixelRatio),
            d = `${s}_${c}_${u}_${e}`,
            h = this.spriteMap.get(d);
          if (void 0 === h) {
            let t = this.headerIcons[e];
            if (void 0 === t) return;
            let r = (h = document.createElement("canvas")).getContext("2d");
            if (null === r) return;
            let n = new Image();
            (n.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
              t({ fgColor: c, bgColor: s })
            )}`),
              this.spriteMap.set(d, h);
            let i = n.decode();
            if (void 0 === i) return;
            this.inFlight++,
              i
                .then(() => {
                  r.drawImage(n, 0, 0, u, u);
                })
                .finally(() => {
                  this.inFlight--, 0 === this.inFlight && this.onSettled();
                });
          } else
            a < 1 && (r.globalAlpha = a),
              r.drawImage(h, 0, 0, u, u, n, i, l, l),
              a < 1 && (r.globalAlpha = 1);
        }
      }
      var es = r(14015),
        ec = r(75329);
      let eu = {},
        ed = null;
      function eh(e) {
        let t = e.toLowerCase().trim();
        if (void 0 !== eu[t]) return eu[t];
        ((ed =
          ed ||
          (function () {
            let e = document.createElement("div");
            return (
              (e.style.opacity = "0"),
              (e.style.pointerEvents = "none"),
              (e.style.position = "fixed"),
              document.body.append(e),
              e
            );
          })()).style.color = "#000"),
          (ed.style.color = t);
        let r = getComputedStyle(ed).color;
        (ed.style.color = "#fff"), (ed.style.color = t);
        let n = getComputedStyle(ed).color;
        if (n !== r) return [0, 0, 0, 1];
        let i = n
          .replace(/[^\d.,]/g, "")
          .split(",")
          .map(Number.parseFloat);
        return (
          i.length < 4 && i.push(1),
          (i = i.map((e) => (Number.isNaN(e) ? 0 : e))),
          (eu[t] = i),
          i
        );
      }
      function ef(e, t) {
        let [r, n, i] = eh(e);
        return `rgba(${r}, ${n}, ${i}, ${t})`;
      }
      function ep(e, t) {
        if (void 0 === t) return e;
        let [r, n, i, l] = eh(e);
        if (1 === l) return e;
        let [o, a, s, c] = eh(t),
          u = l + c * (1 - l);
        return `rgba(${(l * r + c * o * (1 - l)) / u}, ${
          (l * n + c * a * (1 - l)) / u
        }, ${(l * i + c * s * (1 - l)) / u}, ${u})`;
      }
      function eg(
        e,
        t,
        r,
        n,
        i,
        l,
        o,
        s,
        c = -20,
        u = -20,
        d = 32,
        h = "center"
      ) {
        let p = Math.floor(i + o / 2),
          g = t.roundingRadius ?? 4,
          m = y(d, o, t.cellVerticalPadding),
          x = m / 2,
          k = w(h, n, l, t.cellHorizontalPadding, m),
          C = b(n + c, i + u, v(k, p, m));
        switch (r) {
          case !0:
            e.beginPath(),
              J(e, k - m / 2, p - m / 2, m, m, g),
              (e.fillStyle = s ? t.accentColor : t.textMedium),
              e.fill(),
              e.beginPath(),
              e.moveTo(k - x + m / 4.23, p - x + m / 1.97),
              e.lineTo(k - x + m / 2.42, p - x + m / 1.44),
              e.lineTo(k - x + m / 1.29, p - x + m / 3.25),
              (e.strokeStyle = t.bgCell),
              (e.lineJoin = "round"),
              (e.lineCap = "round"),
              (e.lineWidth = 1.9),
              e.stroke();
            break;
          case f.qF:
          case !1:
            e.beginPath(),
              J(e, k - m / 2 + 0.5, p - m / 2 + 0.5, m - 1, m - 1, g),
              (e.lineWidth = 1),
              (e.strokeStyle = C ? t.textDark : t.textMedium),
              e.stroke();
            break;
          case f.sd:
            e.beginPath(),
              J(e, k - m / 2, p - m / 2, m, m, g),
              (e.fillStyle = C ? t.textMedium : t.textLight),
              e.fill(),
              e.beginPath(),
              e.moveTo(k - m / 3, p),
              e.lineTo(k + m / 3, p),
              (e.strokeStyle = t.bgCell),
              (e.lineCap = "round"),
              (e.lineWidth = 1.9),
              e.stroke();
            break;
          default:
            (0, a.vE)(r);
        }
      }
      function em(e, t) {
        let r = Math.min(e.x, t.x),
          n = Math.min(e.y, t.y),
          i = Math.max(e.x + e.width, t.x + t.width) - r,
          l = Math.max(e.y + e.height, t.y + t.height) - n;
        return { x: r, y: n, width: i, height: l };
      }
      let ev = { kind: f.p6.Loading, allowOverlay: !1 },
        ew = [0, 0],
        ey = { x: 0, y: 0, width: 0, height: 0 },
        eb = [void 0, () => void 0],
        ex = !1;
      function ek() {
        ex = !0;
      }
      function eC(
        e,
        t,
        r,
        n,
        i,
        l,
        o,
        a,
        s,
        c,
        u,
        d,
        h,
        p,
        g,
        m,
        v,
        w,
        y,
        b,
        x,
        k,
        C,
        S,
        M
      ) {
        let R, E, T;
        void 0 !== v &&
          v[0][0] === r &&
          v[0][1] === n &&
          ((R = v[1][0]), (E = v[1][1])),
          (ew[0] = r),
          (ew[1] = n),
          (ey.x = o),
          (ey.y = a),
          (ey.width = s),
          (ey.height = c),
          (eb[0] = C.getValue(ew)),
          (eb[1] = (e) => C.setValue(ew, e)),
          (ex = !1);
        let I = {
            ctx: e,
            theme: d,
            col: r,
            row: n,
            cell: t,
            rect: ey,
            highlighted: u,
            cellFillColor: h,
            hoverAmount: m,
            frameTime: y,
            hoverX: R,
            drawState: eb,
            hoverY: E,
            imageLoader: p,
            spriteManager: g,
            hyperWrapping: w,
            overrideCursor: void 0 !== R ? M : void 0,
            requestAnimationFrame: ek,
          },
          P = (function (e, t, r, n, i, l) {
            let { ctx: o, rect: a, theme: s } = e,
              c = Number.MAX_SAFE_INTEGER;
            if (void 0 !== t && (c = r - t) < 500) {
              let e = 1 - c / 500;
              (o.globalAlpha = e),
                (o.fillStyle = s.bgSearchResult),
                o.fillRect(
                  a.x + 1,
                  a.y + 1,
                  a.width - (i ? 2 : 1),
                  a.height - (l ? 2 : 1)
                ),
                (o.globalAlpha = 1),
                void 0 !== n && (n.fillStyle = s.bgSearchResult);
            }
            return c < 500;
          })(I, t.lastUpdated, y, x, i, l),
          z = S(t);
        if (void 0 !== z) {
          x?.renderer !== z && (x?.deprep?.(I), (x = void 0));
          let e = z.drawPrep?.(I, x);
          void 0 === b || (0, f.rs)(I.cell)
            ? z.draw(I, t)
            : b(I, () => z.draw(I, t)),
            (T =
              void 0 === e
                ? void 0
                : {
                    deprep: e?.deprep,
                    fillStyle: e?.fillStyle,
                    font: e?.font,
                    renderer: z,
                  });
        }
        return (P || ex) && k?.(ew), T;
      }
      function eS(e, t, r, n, i, l, o, a, s, c, u, d, h, f, p, g, m, v = !1) {
        if (void 0 !== s) {
          for (let t of (e.beginPath(), e.save(), e.rect(0, 0, l, o), s))
            e.rect(t.x + 1, t.y + 1, t.width - 1, t.height - 1);
          e.clip("evenodd");
        }
        let w = m.horizontalBorderColor ?? m.borderColor,
          y = m.borderColor,
          b = 0,
          x = l,
          k = 0,
          C = o;
        if (void 0 !== a && a.length > 0)
          for (let e of ((b = Number.MAX_SAFE_INTEGER),
          (k = Number.MAX_SAFE_INTEGER),
          (x = Number.MIN_SAFE_INTEGER),
          (C = Number.MIN_SAFE_INTEGER),
          a))
            (b = Math.min(b, e.x - 1)),
              (x = Math.max(x, e.x + e.width + 1)),
              (k = Math.min(k, e.y - 1)),
              (C = Math.max(C, e.y + e.height + 1));
        let S = [];
        e.beginPath();
        let M = 0.5;
        for (let e = 0; e < t.length; e++) {
          let r = t[e];
          if (0 === r.width) continue;
          M += r.width;
          let i = r.sticky ? M : M + n;
          i >= b &&
            i <= x &&
            f(e + 1) &&
            S.push({
              x1: i,
              y1: Math.max(c, k),
              x2: i,
              y2: Math.min(o, C),
              color: y,
            });
        }
        let R = o + 0.5;
        for (let e = g - p; e < g; e++)
          (R -= d(e)), S.push({ x1: b, y1: R, x2: x, y2: R, color: w });
        if (!0 !== v) {
          let e = u + 0.5,
            t = r,
            n = R;
          for (; e + i < n; ) {
            let r = e + i;
            if (r >= k && r <= C - 1) {
              let e = h?.(t);
              S.push({
                x1: b,
                y1: r,
                x2: x,
                y2: r,
                color: e?.horizontalBorderColor ?? e?.borderColor ?? w,
              });
            }
            (e += d(t)), t++;
          }
        }
        let E = es(S, (e) => e.color);
        for (let t of Object.keys(E)) {
          for (let r of ((e.strokeStyle = t), E[t]))
            e.moveTo(r.x1, r.y1), e.lineTo(r.x2, r.y2);
          e.stroke(), e.beginPath();
        }
        void 0 !== s && e.restore();
      }
      function eM(e, t) {
        let r = [],
          n = e.x + e.width - 26 * t.length,
          i = e.y + e.height / 2 - 13;
        for (let e = 0; e < t.length; e++)
          r.push({ x: n, y: i, width: 26, height: 26 }), (n += 26);
        return r;
      }
      function eR(e, t, r) {
        return (
          t >= e.x && t <= e.x + e.width && r >= e.y && r <= e.y + e.height
        );
      }
      function eE(e, t, r, n, i) {
        return i
          ? { x: e, y: t, width: 30, height: Math.min(30, n) }
          : {
              x: e + r - 30,
              y: Math.max(t, t + n / 2 - 15),
              width: 30,
              height: Math.min(30, n),
            };
      }
      function eT(e, t, r, n, i, l, o, a, s, c, u, d, h, p, g) {
        if (p) {
          let o;
          l.title === f.qT && (o = !0),
            l.title === f.YK && (o = !1),
            !0 !== o && (e.globalAlpha = c),
            eg(e, a, o, t, r, n, i, !1, void 0, void 0, 18),
            !0 !== o && (e.globalAlpha = 1);
          return;
        }
        let m = a.cellHorizontalPadding,
          v = o ? a.textHeaderSelected : a.textHeader,
          w = !0 === l.hasMenu && (s || (d && o)),
          y = h ? t + n - m : t + m;
        if (void 0 !== l.icon) {
          let t = o ? "selected" : "normal";
          "highlight" === l.style && (t = o ? "selected" : "special");
          let n = a.headerIconSize;
          u.drawSprite(l.icon, t, e, h ? y - n : y, r + (i - n) / 2, n, a),
            void 0 !== l.overlayIcon &&
              u.drawSprite(
                l.overlayIcon,
                o ? "selected" : "special",
                e,
                h ? y - n + 9 : y + 9,
                r + ((i - 18) / 2 + 6),
                18,
                a
              ),
            (y += Math.ceil(1.3 * n) * (h ? -1 : 1));
        }
        if (w && !0 === l.hasMenu && n > 35) {
          let r = h ? 35 : n - 35,
            i = h ? 24.5 : n - 24.5,
            l = e.createLinearGradient(t, 0, t + n, 0),
            o = ef(v, 0);
          l.addColorStop(h ? 1 : 0, v),
            l.addColorStop(r / n, v),
            l.addColorStop(i / n, o),
            l.addColorStop(h ? 0 : 1, o),
            (e.fillStyle = l);
        } else e.fillStyle = v;
        if (
          (h && (e.textAlign = "right"),
          e.fillText(l.title, y, r + i / 2 + U(e, a.headerFontFull)),
          h && (e.textAlign = "left"),
          w && !0 === l.hasMenu)
        ) {
          if (void 0 === l.menuIcon || l.menuIcon === f.pN.Triangle) {
            e.beginPath();
            let t = g.x + g.width / 2 - 5.5,
              r = g.y + g.height / 2 - 3;
            !(function (e, t, r) {
              let n;
              let i = function (e, t) {
                  let r = t.x - e.x,
                    n = t.y - e.y,
                    i = Math.sqrt(r * r + n * n),
                    l = r / i,
                    o = n / i;
                  return {
                    x: r,
                    y: t.y - e.y,
                    len: i,
                    nx: l,
                    ny: o,
                    ang: Math.atan2(o, l),
                  };
                },
                l = t.length,
                o = t[l - 1];
              for (let r = 0; r < l; r++) {
                let a,
                  s = t[r % l],
                  c = t[(r + 1) % l],
                  u = i(s, o),
                  d = i(s, c),
                  h = u.nx * d.ny - u.ny * d.nx,
                  f = u.nx * d.nx - -(u.ny * d.ny),
                  p = Math.asin(h < -1 ? -1 : h > 1 ? 1 : h),
                  g = 1,
                  m = !1;
                f < 0
                  ? p < 0
                    ? (p = Math.PI + p)
                    : ((p = Math.PI - p), (g = -1), (m = !0))
                  : p > 0 && ((g = -1), (m = !0)),
                  (n = void 0 !== s.radius ? s.radius : 1);
                let v = p / 2,
                  w = Math.abs((Math.cos(v) * n) / Math.sin(v));
                a =
                  w > Math.min(u.len / 2, d.len / 2)
                    ? Math.abs(
                        ((w = Math.min(u.len / 2, d.len / 2)) * Math.sin(v)) /
                          Math.cos(v)
                      )
                    : n;
                let y = s.x + d.nx * w,
                  b = s.y + d.ny * w;
                (y += -d.ny * a * g),
                  (b += d.nx * a * g),
                  e.arc(
                    y,
                    b,
                    a,
                    u.ang + (Math.PI / 2) * g,
                    d.ang - (Math.PI / 2) * g,
                    m
                  ),
                  (o = s),
                  (s = c);
              }
              e.closePath();
            })(
              e,
              [
                { x: t, y: r },
                { x: t + 11, y: r },
                { x: t + 5.5, y: r + 6 },
              ],
              0
            ),
              (e.fillStyle = v),
              e.fill();
          } else if (l.menuIcon === f.pN.Dots) {
            e.beginPath();
            let t = g.x + g.width / 2,
              r = g.y + g.height / 2;
            e.arc(t, r - 4.375, 1.25, 0, 2 * Math.PI, !1),
              e.arc(t, r, 1.25, 0, 2 * Math.PI, !1),
              e.arc(t, r + 4.375, 1.25, 0, 2 * Math.PI, !1),
              (e.fillStyle = v),
              e.fill();
          } else {
            let t = g.x + (g.width - a.headerIconSize) / 2,
              r = g.y + (g.height - a.headerIconSize) / 2;
            u.drawSprite(l.menuIcon, "normal", e, t, r, a.headerIconSize, a);
          }
        }
      }
      function eI(e, t, r, n, i, l, o, a, s, c, u, d, h, p) {
        let g = l.title.startsWith(f.Gf),
          m = "rtl" === S(l.title),
          v = eE(t, r, n, i, m);
        if (void 0 !== h) {
          let f = l;
          g && (f = { ...l, title: "" }),
            h(
              {
                ctx: e,
                theme: a,
                rect: { x: t, y: r, width: n, height: i },
                column: f,
                columnIndex: f.sourceIndex,
                isSelected: o,
                hoverAmount: u,
                isHovered: s,
                hasSelectedCell: c,
                spriteManager: d,
                menuBounds: v,
              },
              () => eT(e, t, r, n, i, l, o, a, s, u, d, p, m, g, v)
            );
        } else eT(e, t, r, n, i, l, o, a, s, u, d, p, m, g, v);
      }
      function eP(e, t, r, n, i, l, o, a) {
        return e <= i + o && i <= e + r && t <= l + a && l <= t + n;
      }
      function ez(e, t, r, n, i, l, o) {
        let a, s;
        let [c, u] = e,
          d = o.find((e) => !e.sticky)?.sourceIndex ?? 0;
        if (u > d) {
          let e = Math.max(c, d),
            a = t,
            h = n;
          for (let t = l.sourceIndex - 1; t >= e; t--)
            (a -= o[t].width), (h += o[t].width);
          for (let e = l.sourceIndex + 1; e <= u; e++) h += o[e].width;
          s = { x: a, y: r, width: h, height: i };
        }
        if (d > c) {
          let e = Math.min(u, d - 1),
            s = t,
            h = n;
          for (let e = l.sourceIndex - 1; e >= c; e--)
            (s -= o[e].width), (h += o[e].width);
          for (let t = l.sourceIndex + 1; t <= e; t++) h += o[t].width;
          a = { x: s, y: r, width: h, height: i };
        }
        return [a, s];
      }
      function eH(
        e,
        t,
        r,
        n,
        i,
        l,
        o,
        a,
        s,
        c,
        u,
        d,
        h,
        p,
        g,
        m,
        v,
        w,
        y,
        b,
        x,
        k,
        C,
        S,
        M,
        R,
        E,
        T,
        I,
        P,
        z,
        H,
        A,
        L,
        O
      ) {
        let F,
          _,
          N = b?.size ?? Number.MAX_SAFE_INTEGER,
          W = performance.now(),
          B = P.baseFontFull;
        e.font = B;
        let j = { ctx: e },
          V = [0, 0],
          X = v > 0 ? $(s, v, c) : 0;
        return (
          e_(t, a, l, o, i, (t, l, o, a, $) => {
            let U;
            let K = Math.max(0, a - l),
              Y = l + K,
              G = i + 1,
              q = t.width - K,
              Z = n - i - 1;
            if (y.length > 0) {
              let e = !1;
              for (let t = 0; t < y.length; t++) {
                let r = y[t];
                if (eP(Y, G, q, Z, r.x, r.y, r.width, r.height)) {
                  e = !0;
                  break;
                }
              }
              if (!e) return;
            }
            let Q = () => {
                e.save(), e.beginPath(), e.rect(Y, G, q, Z), e.clip();
              },
              J = x.columns.hasIndex(t.sourceIndex),
              ee = d(t.group ?? "").overrideTheme,
              et =
                void 0 === t.themeOverride && void 0 === ee
                  ? P
                  : (0, ec.yR)(P, ee, t.themeOverride),
              er = et.baseFontFull;
            return (
              er !== B && ((B = er), (e.font = er)),
              Q(),
              eF($, o, n, s, c, v, w, (i, o, c, d, v) => {
                let w, $;
                if (
                  o < 0 ||
                  ((V[0] = t.sourceIndex),
                  (V[1] = o),
                  void 0 !== b && !b.has(V))
                )
                  return;
                if (y.length > 0) {
                  let e = !1;
                  for (let r = 0; r < y.length; r++) {
                    let n = y[r];
                    if (eP(l, i, t.width, c, n.x, n.y, n.width, n.height)) {
                      e = !0;
                      break;
                    }
                  }
                  if (!e) return;
                }
                let K = x.rows.hasIndex(o),
                  Y = p.hasIndex(o),
                  G = o < s ? u(V) : ev,
                  q = l,
                  Z = t.width,
                  ee = !1,
                  en = !1;
                if (void 0 !== G.span) {
                  let [n, s] = G.span,
                    u = `${o},${n},${s},${t.sticky}`;
                  if ((void 0 === F && (F = new Set()), F.has(u))) {
                    N--;
                    return;
                  }
                  {
                    let n = ez(G.span, l, i, t.width, c, t, r),
                      o = t.sticky ? n[0] : n[1];
                    if (
                      (t.sticky || void 0 === n[0] || (en = !0), void 0 !== o)
                    ) {
                      (q = o.x),
                        (Z = o.width),
                        F.add(u),
                        e.restore(),
                        (U = void 0),
                        e.save(),
                        e.beginPath();
                      let t = Math.max(0, a - o.x);
                      e.rect(o.x + t, i, o.width - t, c),
                        void 0 === _ && (_ = []),
                        _.push({
                          x: o.x + t,
                          y: i,
                          width: o.width - t,
                          height: c,
                        }),
                        e.clip(),
                        (ee = !0);
                    }
                  }
                }
                let ei = h?.(o),
                  el =
                    v && t.trailingRowOptions?.themeOverride !== void 0
                      ? t.trailingRowOptions?.themeOverride
                      : void 0,
                  eo =
                    void 0 === G.themeOverride && void 0 === ei && void 0 === el
                      ? et
                      : (0, ec.yR)(et, ei, el, G.themeOverride);
                e.beginPath();
                let ea =
                    void 0 !== x.current &&
                    V[1] === x.current.cell[1] &&
                    (void 0 === G.span
                      ? x.current.cell[0] === V[0]
                      : x.current.cell[0] >= G.span[0] &&
                        x.current.cell[0] <= G.span[1]),
                  es = (function (e, t, r) {
                    let n = 0;
                    if (void 0 === r.current) return n;
                    for (let i of (D(e, t, r.current.range) && n++,
                    r.current.rangeStack))
                      D(e, t, i) && n++;
                    return n;
                  })(V, G, x),
                  eu =
                    void 0 !== G.span &&
                    x.columns.some(
                      (e) =>
                        void 0 !== G.span && e >= G.span[0] && e <= G.span[1]
                    );
                ea && !g && m ? (es = 0) : ea && (es = Math.max(es, 1)),
                  eu && es++,
                  !ea && (K && es++, J && !v && es++);
                let ed =
                  G.kind === f.p6.Protected ? eo.bgCellMedium : eo.bgCell;
                if (((d || ed !== P.bgCell) && (w = ep(ed, w)), es > 0 || Y)) {
                  Y && (w = ep(eo.bgHeader, w));
                  for (let e = 0; e < es; e++) w = ep(eo.accentLight, w);
                } else if (void 0 !== k) {
                  for (let e of k)
                    if (e[0] === t.sourceIndex && e[1] === o) {
                      w = ep(eo.bgSearchResult, w);
                      break;
                    }
                }
                if (void 0 !== C)
                  for (let e = 0; e < C.length; e++) {
                    let r = C[e],
                      n = r.range;
                    "solid-outline" !== r.style &&
                      n.x <= t.sourceIndex &&
                      t.sourceIndex < n.x + n.width &&
                      n.y <= o &&
                      o < n.y + n.height &&
                      (w = ep(r.color, w));
                  }
                let eh = !1;
                if (void 0 !== b) {
                  let t = i + 1,
                    r = (d ? t + c - 1 : Math.min(t + c - 1, n - X)) - t;
                  (r !== c - 1 || q + 1 <= a) &&
                    ((eh = !0),
                    e.save(),
                    e.beginPath(),
                    e.rect(q + 1, t, Z - 1, r),
                    e.clip()),
                    (w = void 0 === w ? eo.bgCell : ep(w, eo.bgCell));
                }
                let ef = t.sourceIndex === r.length - 1,
                  eg = o === s - 1;
                void 0 !== w &&
                  ((e.fillStyle = w),
                  void 0 !== U && (U.fillStyle = w),
                  void 0 !== b
                    ? e.fillRect(
                        q + 1,
                        i + 1,
                        Z - (ef ? 2 : 1),
                        c - (eg ? 2 : 1)
                      )
                    : e.fillRect(q, i, Z, c)),
                  "faded" === G.style && (e.globalAlpha = 0.6);
                for (let e = 0; e < R.length; e++) {
                  let r = R[e];
                  if (r.item[0] === t.sourceIndex && r.item[1] === o) {
                    $ = r;
                    break;
                  }
                }
                if (Z > O && !en) {
                  let r = eo.baseFontFull;
                  r !== B && ((e.font = r), (B = r)),
                    (U = eC(
                      e,
                      G,
                      t.sourceIndex,
                      o,
                      ef,
                      eg,
                      q,
                      i,
                      Z,
                      c,
                      es > 0,
                      eo,
                      w ?? eo.bgCell,
                      S,
                      M,
                      $?.hoverAmount ?? 0,
                      E,
                      I,
                      W,
                      T,
                      U,
                      z,
                      H,
                      A,
                      L
                    ));
                }
                return (
                  eh && e.restore(),
                  "faded" === G.style && (e.globalAlpha = 1),
                  N--,
                  ee &&
                    (e.restore(),
                    U?.deprep?.(j),
                    (U = void 0),
                    Q(),
                    (B = er),
                    (e.font = er)),
                  N <= 0
                );
              }),
              e.restore(),
              N <= 0
            );
          }),
          _
        );
      }
      function eA(e, t, r, n, i, l, o, a, s, c, u, d, h, f, p, g) {
        let m = p?.filter((e) => "no-outline" !== e.style);
        if (void 0 === m || 0 === m.length) return;
        let v = _(a),
          w = $(f, h, d),
          y = [s, 0, a.length, f - h],
          b = [v, 0, t, r - w],
          x = m.map((e) => {
            let p = e.range,
              g = e.style ?? "dashed";
            return (function (e, t, r, n, i) {
              let [l, o, a, s] = t,
                [c, u, d, h] = i,
                { x: f, y: p, width: g, height: m } = e,
                v = [];
              if (g <= 0 || m <= 0) return v;
              let w = f + g,
                y = p + m,
                b = f < l,
                x = p < o,
                k = f + g > a,
                C = p + m > s,
                S = (f > l && f < a) || (w > l && w < a) || (f < l && w > a),
                M = (p > o && p < s) || (y > o && y < s) || (p < o && y > s);
              if (S && M) {
                let e = Math.max(f, l),
                  t = Math.max(p, o),
                  r = Math.min(w, a),
                  n = Math.min(y, s);
                v.push({
                  rect: { x: e, y: t, width: r - e, height: n - t },
                  clip: { x: c, y: u, width: d - c + 1, height: h - u + 1 },
                });
              }
              if (b && x) {
                let e = Math.min(w, l),
                  t = Math.min(y, o);
                v.push({
                  rect: { x: f, y: p, width: e - f, height: t - p },
                  clip: { x: 0, y: 0, width: c + 1, height: u + 1 },
                });
              }
              if (x && S) {
                let e = Math.max(f, l),
                  t = Math.min(w, a),
                  r = Math.min(y, o);
                v.push({
                  rect: { x: e, y: p, width: t - e, height: r - p },
                  clip: { x: c, y: 0, width: d - c + 1, height: u + 1 },
                });
              }
              if (x && k) {
                let e = Math.max(f, a),
                  t = Math.min(y, o);
                v.push({
                  rect: { x: e, y: p, width: w - e, height: t - p },
                  clip: { x: d, y: 0, width: r - d + 1, height: u + 1 },
                });
              }
              if (b && M) {
                let e = Math.max(p, o),
                  t = Math.min(w, l),
                  r = Math.min(y, s);
                v.push({
                  rect: { x: f, y: e, width: t - f, height: r - e },
                  clip: { x: 0, y: u, width: c + 1, height: h - u + 1 },
                });
              }
              if (k && M) {
                let e = Math.max(f, a),
                  t = Math.max(p, o),
                  n = Math.min(y, s);
                v.push({
                  rect: { x: e, y: t, width: w - e, height: n - t },
                  clip: { x: d, y: u, width: r - d + 1, height: h - u + 1 },
                });
              }
              if (b && C) {
                let e = Math.max(p, s),
                  t = Math.min(w, l);
                v.push({
                  rect: { x: f, y: e, width: t - f, height: y - e },
                  clip: { x: 0, y: h, width: c + 1, height: n - h + 1 },
                });
              }
              if (C && S) {
                let e = Math.max(f, l),
                  t = Math.max(p, s),
                  r = Math.min(w, a);
                v.push({
                  rect: { x: e, y: t, width: r - e, height: y - t },
                  clip: { x: c, y: h, width: d - c + 1, height: n - h + 1 },
                });
              }
              if (k && C) {
                let e = Math.max(f, a),
                  t = Math.max(p, s);
                v.push({
                  rect: { x: e, y: t, width: w - e, height: y - t },
                  clip: { x: d, y: h, width: r - d + 1, height: n - h + 1 },
                });
              }
              return v;
            })(p, y, t, r, b).map((p) => {
              let m = p.rect,
                v = ee(m.x, m.y, t, r, u, c + u, n, i, l, o, f, s, h, a, d),
                w =
                  1 === m.width && 1 === m.height
                    ? v
                    : ee(
                        m.x + m.width - 1,
                        m.y + m.height - 1,
                        t,
                        r,
                        u,
                        c + u,
                        n,
                        i,
                        l,
                        o,
                        f,
                        s,
                        h,
                        a,
                        d
                      );
              return (
                m.x + m.width >= a.length && (w.width -= 1),
                m.y + m.height >= f && (w.height -= 1),
                {
                  color: e.color,
                  style: g,
                  clip: p.clip,
                  rect: (function (e, t, r, n) {
                    if (
                      e.x > t ||
                      e.y > r ||
                      (e.x < 0 &&
                        e.y < 0 &&
                        e.x + e.width > t &&
                        e.y + e.height > r)
                    )
                      return;
                    if (
                      e.x >= 0 &&
                      e.y >= 0 &&
                      e.x + e.width <= t &&
                      e.y + e.height <= r
                    )
                      return e;
                    let i = -4 - e.x,
                      l = e.x + e.width - (t + 4),
                      o = -4 - e.y,
                      a = e.y + e.height - (r + 4),
                      s = i > 0 ? e.x + Math.floor(i / n) * n : e.x,
                      c =
                        l > 0
                          ? e.x + e.width - Math.floor(l / n) * n
                          : e.x + e.width,
                      u = o > 0 ? e.y + Math.floor(o / n) * n : e.y;
                    return {
                      x: s,
                      y: u,
                      width: c - s,
                      height:
                        (a > 0
                          ? e.y + e.height - Math.floor(a / n) * n
                          : e.y + e.height) - u,
                    };
                  })(
                    {
                      x: v.x,
                      y: v.y,
                      width: w.x + w.width - v.x,
                      height: w.y + w.height - v.y,
                    },
                    t,
                    r,
                    8
                  ),
                }
              );
            });
          }),
          k = () => {
            e.lineWidth = 1;
            let n = !1;
            for (let o of x)
              for (let a of o)
                if (
                  a?.rect !== void 0 &&
                  eP(
                    0,
                    0,
                    t,
                    r,
                    a.rect.x,
                    a.rect.y,
                    a.rect.width,
                    a.rect.height
                  )
                ) {
                  var i, l;
                  let t = n,
                    r =
                      ((i = a.clip),
                      (l = a.rect),
                      !(i.x <= l.x) ||
                        !(i.y <= l.y) ||
                        !(i.x + i.width >= l.x + l.width) ||
                        !(i.y + i.height >= l.y + l.height));
                  r &&
                    (e.save(),
                    e.rect(a.clip.x, a.clip.y, a.clip.width, a.clip.height),
                    e.clip()),
                    "dashed" !== a.style || n
                      ? ("solid" === a.style || "solid-outline" === a.style) &&
                        n &&
                        (e.setLineDash([]), (n = !1))
                      : (e.setLineDash([5, 3]), (n = !0)),
                    (e.strokeStyle =
                      "solid-outline" === a.style
                        ? ep(ep(a.color, g.borderColor), g.bgCell)
                        : ef(a.color, 1)),
                    e.strokeRect(
                      a.rect.x + 0.5,
                      a.rect.y + 0.5,
                      a.rect.width - 1,
                      a.rect.height - 1
                    ),
                    r && (e.restore(), (n = t));
                }
            n && e.setLineDash([]);
          };
        return k(), k;
      }
      function eL(e, t, r, n, i) {
        e.beginPath(),
          e.moveTo(t, r),
          e.lineTo(t, n),
          (e.lineWidth = 2),
          (e.strokeStyle = i),
          e.stroke(),
          (e.globalAlpha = 1);
      }
      function eO(e, t, r, n, i, l, o, a, s, c, u, d, h, f, p, g, m) {
        let v, w;
        if (void 0 === u.current) return;
        let y = u.current.range,
          b = u.current.cell,
          x = [y.x + y.width - 1, y.y + y.height - 1];
        if (
          (b[1] >= m && x[1] >= m) ||
          !o.some((e) => e.sourceIndex === b[0] || e.sourceIndex === x[0])
        )
          return;
        let [k, C] = u.current.cell,
          S = h(u.current.cell),
          M = S.span ?? [k, k],
          R = C >= m - f,
          E = f > 0 && !R ? $(m, f, d) - 1 : 0,
          T = x[1];
        if (
          (e_(o, n, i, l, c, (n, i, l, o, c) => {
            if (n.sticky && k > n.sourceIndex) return;
            let u = n.sourceIndex < M[0],
              h = n.sourceIndex > M[1],
              y = n.sourceIndex === x[0];
            if (y || (!u && !h))
              return (
                eF(c, l, r, m, d, f, p, (l, c, d) => {
                  if (c !== C && c !== T) return;
                  let f = i,
                    p = n.width,
                    b = n.sourceIndex === a.length - 1,
                    x = c === m - 1;
                  if (void 0 !== S.span) {
                    let e = ez(S.span, i, l, n.width, d, n, a),
                      t = n.sticky ? e[0] : e[1];
                    void 0 !== t && ((f = t.x), (p = t.width));
                  }
                  let k = c === C && !u && !h && void 0 === v;
                  return (
                    c === T &&
                      y &&
                      g &&
                      (w = () => {
                        !(o > f) ||
                          n.sticky ||
                          k ||
                          (e.beginPath(), e.rect(o, 0, t - o, r), e.clip()),
                          e.beginPath(),
                          e.rect(f + p - 4, l + d - 4, 4, 4),
                          (e.fillStyle =
                            n.themeOverride?.accentColor ?? s.accentColor),
                          e.fill();
                      }),
                    k &&
                      (v = () => {
                        o > f &&
                          !n.sticky &&
                          (e.beginPath(), e.rect(o, 0, t - o, r), e.clip()),
                          e.beginPath(),
                          e.rect(
                            f + 0.5,
                            l + 0.5,
                            p - (b ? 1 : 0),
                            d - (x ? 1 : 0)
                          ),
                          (e.strokeStyle =
                            n.themeOverride?.accentColor ?? s.accentColor),
                          (e.lineWidth = 1),
                          e.stroke();
                      }),
                    void 0 !== v && (!g || void 0 !== w)
                  );
                }),
                void 0 !== v && (!g || void 0 !== w)
              );
          }),
          void 0 === v && void 0 === w)
        )
          return;
        let I = () => {
          e.save(),
            e.beginPath(),
            e.rect(0, c, t, r - c - E),
            e.clip(),
            v?.(),
            w?.(),
            e.restore();
        };
        return I(), I;
      }
      function eD(e, t) {
        var r, n;
        let i, l;
        let {
          canvas: o,
          headerCanvas: s,
          width: c,
          height: u,
          cellXOffset: d,
          cellYOffset: h,
          translateX: f,
          translateY: p,
          mappedColumns: g,
          enableGroups: m,
          freezeColumns: v,
          dragAndDropState: w,
          theme: y,
          drawFocus: b,
          headerHeight: x,
          groupHeaderHeight: k,
          disabledRows: C,
          rowHeight: S,
          verticalBorder: M,
          overrideCursor: R,
          isResizing: E,
          selection: T,
          fillHandle: I,
          freezeTrailingRows: P,
          rows: z,
          getCellContent: H,
          getGroupDetails: A,
          getRowThemeOverride: L,
          isFocused: D,
          drawHeaderCallback: F,
          prelightCells: W,
          drawCellCallback: B,
          highlightRegions: j,
          resizeCol: V,
          imageLoader: X,
          lastBlitData: K,
          hoverValues: Y,
          hyperWrapping: G,
          hoverInfo: q,
          spriteManager: Z,
          maxScaleFactor: Q,
          hasAppendRow: J,
          touchMode: ee,
          enqueue: et,
          renderStateProvider: er,
          getCellRenderer: en,
          renderStrategy: ei,
          bufferA: el,
          bufferB: eo,
          damage: ea,
          minimumCellWidth: es,
        } = e;
        if (0 === c || 0 === u) return;
        let eu = "double-buffer" === ei,
          ed = Math.min(Q, Math.ceil(window.devicePixelRatio ?? 1)),
          eh =
            "direct" !== ei &&
            (function (e, t) {
              if (
                void 0 === t ||
                e.width !== t.width ||
                e.height !== t.height ||
                e.theme !== t.theme ||
                e.headerHeight !== t.headerHeight ||
                e.rowHeight !== t.rowHeight ||
                e.rows !== t.rows ||
                e.freezeColumns !== t.freezeColumns ||
                e.getRowThemeOverride !== t.getRowThemeOverride ||
                e.isFocused !== t.isFocused ||
                e.isResizing !== t.isResizing ||
                e.verticalBorder !== t.verticalBorder ||
                e.getCellContent !== t.getCellContent ||
                e.highlightRegions !== t.highlightRegions ||
                e.selection !== t.selection ||
                e.dragAndDropState !== t.dragAndDropState ||
                e.prelightCells !== t.prelightCells ||
                e.touchMode !== t.touchMode ||
                e.maxScaleFactor !== t.maxScaleFactor
              )
                return !1;
              if (e.mappedColumns !== t.mappedColumns) {
                let r;
                if (
                  e.mappedColumns.length > 100 ||
                  e.mappedColumns.length !== t.mappedColumns.length
                )
                  return !1;
                for (let n = 0; n < e.mappedColumns.length; n++) {
                  let i = e.mappedColumns[n],
                    l = t.mappedColumns[n];
                  if ((0, a.vZ)(i, l)) continue;
                  if (void 0 !== r || i.width === l.width) return !1;
                  let { width: o, ...s } = i,
                    { width: c, ...u } = l;
                  if (!(0, a.vZ)(s, u)) return !1;
                  r = n;
                }
                return void 0 === r || r;
              }
              return !0;
            })(e, t);
        (o.width !== c * ed || o.height !== u * ed) &&
          ((o.width = c * ed),
          (o.height = u * ed),
          (o.style.width = c + "px"),
          (o.style.height = u + "px"));
        let eg = m ? k + x : x,
          em = eg + 1;
        (s.width !== c * ed || s.height !== em * ed) &&
          ((s.width = c * ed),
          (s.height = em * ed),
          (s.style.width = c + "px"),
          (s.style.height = em + "px")),
          eu &&
            (el.width !== c * ed || el.height !== u * ed) &&
            ((el.width = c * ed),
            (el.height = u * ed),
            void 0 !== K.current && (K.current.aBufferScroll = void 0)),
          eu &&
            (eo.width !== c * ed || eo.height !== u * ed) &&
            ((eo.width = c * ed),
            (eo.height = u * ed),
            void 0 !== K.current && (K.current.bBufferScroll = void 0));
        let ev = K.current;
        if (
          !0 === eh &&
          d === ev?.cellXOffset &&
          h === ev?.cellYOffset &&
          f === ev?.translateX &&
          p === ev?.translateY
        )
          return;
        let ew = null;
        eu && (ew = o.getContext("2d", { alpha: !1 }));
        let ey = s.getContext("2d", { alpha: !1 }),
          eb = (i = eu
            ? void 0 !== ea
              ? ev?.lastBuffer === "b"
                ? eo
                : el
              : ev?.lastBuffer === "b"
                ? el
                : eo
            : o).getContext("2d", { alpha: !1 }),
          ex = eu ? (i === el ? eo : el) : o;
        if (null === ey || null === eb) return;
        let ek = "number" == typeof S ? () => S : S;
        ey.save(),
          eb.save(),
          ey.beginPath(),
          eb.beginPath(),
          (ey.textBaseline = "middle"),
          (eb.textBaseline = "middle"),
          1 !== ed && (ey.scale(ed, ed), eb.scale(ed, ed));
        let eC = N(g, d, c, w, f),
          eE = [],
          eT = b && T.current?.cell[1] === h && 0 === p,
          ez = !1;
        if (void 0 !== j) {
          for (let e of j)
            if ("no-outline" !== e.style && e.range.y === h && 0 === p) {
              ez = !0;
              break;
            }
        }
        let eD = () => {
          !(function (e, t, r, n, i, l, o, a, s, c, u, d, h, f, p, g, m, v, w) {
            let y = o + a;
            if (y <= 0) return;
            (e.fillStyle = d.bgHeader), e.fillRect(0, 0, i, y);
            let [b, x] = n?.[0] ?? [],
              k = d.headerFontFull;
            (e.font = k),
              e_(t, 0, l, 0, y, (t, n, i, l) => {
                if (void 0 !== m && !m.has([t.sourceIndex, -1])) return;
                let p = Math.max(0, l - n);
                e.save(),
                  e.beginPath(),
                  e.rect(n + p, a, t.width - p, o),
                  e.clip();
                let y = g(t.group ?? "").overrideTheme,
                  k =
                    void 0 === t.themeOverride && void 0 === y
                      ? d
                      : (0, ec.yR)(d, y, t.themeOverride);
                k.bgHeader !== d.bgHeader &&
                  ((e.fillStyle = k.bgHeader), e.fill()),
                  k !== d && (e.font = k.baseFontFull);
                let C = u.columns.hasIndex(t.sourceIndex),
                  S = void 0 !== s || c,
                  M = !S && -1 === x && b === t.sourceIndex,
                  R = S
                    ? 0
                    : f.find(
                        (e) => e.item[0] === t.sourceIndex && e.item[1] === -1
                      )?.hoverAmount ?? 0,
                  E =
                    u?.current !== void 0 &&
                    u.current.cell[0] === t.sourceIndex,
                  T = C ? k.accentColor : E ? k.bgHeaderHasFocus : k.bgHeader,
                  I = r ? a : 0,
                  P = 0 === t.sourceIndex ? 0 : 1;
                C
                  ? ((e.fillStyle = T), e.fillRect(n + P, I, t.width - P, o))
                  : (E || R > 0) &&
                    (e.beginPath(),
                    e.rect(n + P, I, t.width - P, o),
                    E && ((e.fillStyle = k.bgHeaderHasFocus), e.fill()),
                    R > 0 &&
                      ((e.globalAlpha = R),
                      (e.fillStyle = k.bgHeaderHovered),
                      e.fill(),
                      (e.globalAlpha = 1))),
                  eI(e, n, I, t.width, o, t, C, k, M, E, R, h, v, w),
                  e.restore();
              }),
              r &&
                (function (e, t, r, n, i, l, o, a, s, c, u, d) {
                  let [h, f] = l?.[0] ?? [],
                    p = 0;
                  e$(t, r, n, i, (t, r, n, s, g, m) => {
                    if (
                      void 0 !== d &&
                      !d.hasItemInRectangle({
                        x: t[0],
                        y: -2,
                        width: t[1] - t[0] + 1,
                        height: 1,
                      })
                    )
                      return;
                    e.save(), e.beginPath(), e.rect(n, s, g, m), e.clip();
                    let v = u(r),
                      w =
                        v?.overrideTheme === void 0
                          ? o
                          : (0, ec.yR)(o, v.overrideTheme),
                      y = -2 === f && void 0 !== h && h >= t[0] && h <= t[1],
                      b = y ? w.bgHeaderHovered : w.bgHeader;
                    if (
                      (b !== o.bgHeader && ((e.fillStyle = b), e.fill()),
                      (e.fillStyle = w.textGroupHeader ?? w.textHeader),
                      void 0 !== v)
                    ) {
                      let t = n;
                      if (
                        (void 0 !== v.icon &&
                          (a.drawSprite(
                            v.icon,
                            "normal",
                            e,
                            t + 8,
                            (i - 20) / 2,
                            20,
                            w
                          ),
                          (t += 26)),
                        e.fillText(
                          v.name,
                          t + 8,
                          i / 2 + U(e, o.headerFontFull)
                        ),
                        void 0 !== v.actions && y)
                      ) {
                        let t = eM(
                          { x: n, y: s, width: g, height: m },
                          v.actions
                        );
                        e.beginPath();
                        let r = t[0].x - 10,
                          o = n + g - r;
                        e.rect(r, 0, o, i);
                        let c = e.createLinearGradient(r, 0, r + o, 0),
                          u = ef(b, 0);
                        c.addColorStop(0, u),
                          c.addColorStop(10 / o, b),
                          c.addColorStop(1, b),
                          (e.fillStyle = c),
                          e.fill(),
                          (e.globalAlpha = 0.6);
                        let [d, h] = l?.[1] ?? [-1, -1];
                        for (let r = 0; r < v.actions.length; r++) {
                          let i = v.actions[r],
                            l = t[r],
                            o = eR(l, d + n, h);
                          o && (e.globalAlpha = 1),
                            a.drawSprite(
                              i.icon,
                              "normal",
                              e,
                              l.x + l.width / 2 - 10,
                              l.y + l.height / 2 - 10,
                              20,
                              w
                            ),
                            o && (e.globalAlpha = 0.6);
                        }
                        e.globalAlpha = 1;
                      }
                    }
                    0 !== n &&
                      c(t[0]) &&
                      (e.beginPath(),
                      e.moveTo(n + 0.5, 0),
                      e.lineTo(n + 0.5, i),
                      (e.strokeStyle = o.borderColor),
                      (e.lineWidth = 1),
                      e.stroke()),
                      e.restore(),
                      (p = n + g);
                  }),
                    e.beginPath(),
                    e.moveTo(p + 0.5, 0),
                    e.lineTo(p + 0.5, i),
                    e.moveTo(0, i + 0.5),
                    e.lineTo(r, i + 0.5),
                    (e.strokeStyle = o.borderColor),
                    (e.lineWidth = 1),
                    e.stroke();
                })(e, t, i, l, a, n, d, h, 0, p, g, m);
          })(ey, eC, m, q, c, f, x, k, w, E, T, y, Z, Y, M, A, ea, F, ee),
            eS(
              ey,
              eC,
              h,
              f,
              p,
              c,
              u,
              void 0,
              void 0,
              k,
              eg,
              ek,
              L,
              M,
              P,
              z,
              y,
              !0
            ),
            ey.beginPath(),
            ey.moveTo(0, em - 0.5),
            ey.lineTo(c, em - 0.5),
            (ey.strokeStyle = ep(
              y.headerBottomBorderColor ??
                y.horizontalBorderColor ??
                y.borderColor,
              y.bgHeader
            )),
            ey.stroke(),
            ez && eA(ey, c, u, d, h, f, p, g, v, x, k, S, P, z, j, y),
            eT && eO(ey, c, u, h, f, p, eC, g, y, eg, T, ek, H, P, J, I, z);
        };
        if (void 0 !== ea) {
          let e = eC[eC.length - 1].sourceIndex + 1,
            t = ea.hasItemInRegion([
              { x: d, y: -2, width: e, height: 2 },
              { x: d, y: h, width: e, height: 300 },
              { x: 0, y: h, width: v, height: 300 },
              { x: d, y: z - P, width: e, height: P, when: P > 0 },
            ]),
            r = (e) => {
              eH(
                e,
                eC,
                g,
                u,
                eg,
                f,
                p,
                h,
                z,
                ek,
                H,
                A,
                L,
                C,
                D,
                b,
                P,
                J,
                eE,
                ea,
                T,
                W,
                j,
                X,
                Z,
                Y,
                q,
                B,
                G,
                y,
                et,
                er,
                en,
                R,
                es
              );
              let t = T.current;
              I &&
                b &&
                void 0 !== t &&
                ea.has(O(t.range)) &&
                eO(e, c, u, h, f, p, eC, g, y, eg, T, ek, H, P, J, I, z);
            };
          t &&
            (r(eb),
            null !== ew &&
              (ew.save(),
              ew.scale(ed, ed),
              (ew.textBaseline = "middle"),
              r(ew),
              ew.restore()),
            ea.hasHeader()) &&
            (void 0 !== ea &&
              0 !== ea.size &&
              (ey.beginPath(),
              e$(eC, c, f, k, (e, t, r, n, i, l) => {
                ea.hasItemInRectangle({
                  x: e[0],
                  y: -2,
                  width: e[1] - e[0] + 1,
                  height: 1,
                }) && ey.rect(r, n, i, l);
              }),
              e_(eC, h, f, p, eg, (e, t, r, n) => {
                let i = Math.max(0, n - t),
                  l = e.width - i - 1;
                ea.has([e.sourceIndex, -1]) && ey.rect(t + i + 1, k, l, eg - k);
              }),
              ey.clip()),
            eD()),
            eb.restore(),
            ey.restore();
          return;
        }
        if (
          ((!0 !== eh ||
            d !== ev?.cellXOffset ||
            f !== ev?.translateX ||
            eT !== ev?.mustDrawFocusOnHeader ||
            ez !== ev?.mustDrawHighlightRingsOnHeader) &&
            eD(),
          !0 === eh)
        ) {
          (0, a.hu)(void 0 !== ex && void 0 !== ev);
          let { regions: e } = (function (
            e,
            t,
            r,
            n,
            i,
            l,
            o,
            a,
            s,
            c,
            u,
            d,
            h,
            f,
            p,
            g,
            m,
            v,
            w
          ) {
            let y = [];
            e.imageSmoothingEnabled = !1;
            let b = Math.min(i.cellYOffset, o),
              x = Math.max(i.cellYOffset, o),
              k = 0;
            if ("number" == typeof v) k += (x - b) * v;
            else for (let e = b; e < x; e++) k += v(e);
            o > i.cellYOffset && (k = -k), (k += s - i.translateY);
            let C = Math.min(i.cellXOffset, l),
              S = Math.max(i.cellXOffset, l),
              M = 0;
            for (let e = C; e < S; e++) M += g[e].width;
            l > i.cellXOffset && (M = -M), (M += a - i.translateX);
            let R = _(m);
            if ((R > 0 && R++, 0 !== M && 0 !== k)) return { regions: [] };
            let E = c > 0 ? $(h, c, v) : 0,
              T = u - R - Math.abs(M),
              I = d - f - E - Math.abs(k) - 1;
            if (T > 150 && I > 150) {
              let i = {
                sx: 0,
                sy: 0,
                sw: u * p,
                sh: d * p,
                dx: 0,
                dy: 0,
                dw: u * p,
                dh: d * p,
              };
              if (
                (k > 0
                  ? ((i.sy = (f + 1) * p),
                    (i.sh = I * p),
                    (i.dy = (k + f + 1) * p),
                    (i.dh = I * p),
                    y.push({ x: 0, y: f, width: u, height: k + 1 }))
                  : k < 0 &&
                    ((i.sy = (-k + f + 1) * p),
                    (i.sh = I * p),
                    (i.dy = (f + 1) * p),
                    (i.dh = I * p),
                    y.push({ x: 0, y: d + k - E, width: u, height: -k + E })),
                M > 0
                  ? ((i.sx = R * p),
                    (i.sw = T * p),
                    (i.dx = (M + R) * p),
                    (i.dw = T * p),
                    y.push({ x: R - 1, y: 0, width: M + 2, height: d }))
                  : M < 0 &&
                    ((i.sx = (R - M) * p),
                    (i.sw = T * p),
                    (i.dx = R * p),
                    (i.dw = T * p),
                    y.push({ x: u + M, y: 0, width: -M, height: d })),
                e.setTransform(1, 0, 0, 1, 0, 0),
                w)
              ) {
                if (
                  R > 0 &&
                  0 !== M &&
                  0 === k &&
                  (void 0 === n || r?.[1] !== !1)
                ) {
                  let r = R * p,
                    n = d * p;
                  e.drawImage(t, 0, 0, r, n, 0, 0, r, n);
                }
                if (
                  E > 0 &&
                  0 === M &&
                  0 !== k &&
                  (void 0 === n || r?.[0] !== !1)
                ) {
                  let r = (d - E) * p,
                    n = u * p,
                    i = E * p;
                  e.drawImage(t, 0, r, n, i, 0, r, n, i);
                }
              }
              e.drawImage(t, i.sx, i.sy, i.sw, i.sh, i.dx, i.dy, i.dw, i.dh),
                e.scale(p, p);
            }
            return (e.imageSmoothingEnabled = !0), { regions: y };
          })(
            eb,
            ex,
            ex === el ? ev.aBufferScroll : ev.bBufferScroll,
            ex === el ? ev.bBufferScroll : ev.aBufferScroll,
            ev,
            d,
            h,
            f,
            p,
            P,
            c,
            u,
            z,
            eg,
            ed,
            g,
            eC,
            S,
            eu
          );
          eE = e;
        } else
          !1 !== eh &&
            ((0, a.hu)(void 0 !== ev),
            (eE = (function (e, t, r, n, i, l, o, a, s, c) {
              let u = [];
              return (
                t !== e.cellXOffset ||
                  r !== e.cellYOffset ||
                  n !== e.translateX ||
                  i !== e.translateY ||
                  e_(s, r, n, i, a, (e, t, r, n) => {
                    if (e.sourceIndex === c) {
                      let e = Math.max(t, n) + 1;
                      return (
                        u.push({ x: e, y: 0, width: l - e, height: o }), !0
                      );
                    }
                  }),
                u
              );
            })(ev, d, h, f, p, c, u, eg, eC, eh)));
        !(function (e, t, r, n, i, l, o, a, s) {
          let c = !1;
          for (let e of t)
            if (!e.sticky) {
              c = o(e.sourceIndex);
              break;
            }
          let u = s.horizontalBorderColor ?? s.borderColor,
            d = s.borderColor,
            h = c ? _(t) : 0;
          if (
            (0 !== h &&
              (e.beginPath(),
              e.moveTo(h + 0.5, 0),
              e.lineTo(h + 0.5, n),
              (e.strokeStyle = ep(d, s.bgCell)),
              e.stroke()),
            i > 0)
          ) {
            let t = $(l, i, a);
            e.beginPath(),
              e.moveTo(0, n - t + 0.5),
              e.lineTo(r, n - t + 0.5),
              (e.strokeStyle = ep(u, s.bgCell)),
              e.stroke();
          }
        })(eb, eC, c, u, P, z, M, ek, y);
        let eN = eA(eb, c, u, d, h, f, p, g, v, x, k, S, P, z, j, y),
          eW = b
            ? eO(eb, c, u, h, f, p, eC, g, y, eg, T, ek, H, P, J, I, z)
            : void 0;
        if (((eb.fillStyle = y.bgCell), eE.length > 0)) {
          for (let e of (eb.beginPath(), eE))
            eb.rect(e.x, e.y, e.width, e.height);
          eb.clip(), eb.fill(), eb.beginPath();
        } else eb.fillRect(0, 0, c, u);
        let eB = eH(
          eb,
          eC,
          g,
          u,
          eg,
          f,
          p,
          h,
          z,
          ek,
          H,
          A,
          L,
          C,
          D,
          b,
          P,
          J,
          eE,
          ea,
          T,
          W,
          j,
          X,
          Z,
          Y,
          q,
          B,
          G,
          y,
          et,
          er,
          en,
          R,
          es
        );
        (r = T.rows),
          (n = eE),
          void 0 === ea &&
            eC[eC.length - 1] === g[eC.length - 1] &&
            e_(eC, h, f, p, eg, (e, t, i, l, o) => {
              if (e !== eC[eC.length - 1]) return;
              let a = Math.max((t += e.width), l);
              a > c ||
                (eb.save(),
                eb.beginPath(),
                eb.rect(a, eg + 1, 1e4, u - eg - 1),
                eb.clip(),
                eF(o, i, u, z, ek, P, J, (e, i, l, o) => {
                  if (
                    !o &&
                    n.length > 0 &&
                    !n.some((r) =>
                      eP(t, e, 1e4, l, r.x, r.y, r.width, r.height)
                    )
                  )
                    return;
                  let a = r.hasIndex(i),
                    s = C.hasIndex(i);
                  eb.beginPath();
                  let c = L?.(i),
                    u = void 0 === c ? y : (0, ec.yR)(y, c);
                  u.bgCell !== y.bgCell &&
                    ((eb.fillStyle = u.bgCell), eb.fillRect(t, e, 1e4, l)),
                    s &&
                      ((eb.fillStyle = u.bgHeader), eb.fillRect(t, e, 1e4, l)),
                    a &&
                      ((eb.fillStyle = u.accentLight),
                      eb.fillRect(t, e, 1e4, l));
                }),
                eb.restore());
            }),
          eS(eb, eC, h, f, p, c, u, eE, eB, k, eg, ek, L, M, P, z, y),
          eN?.(),
          eW?.(),
          E &&
            e_(
              eC,
              0,
              f,
              0,
              eg,
              (e, t) =>
                e.sourceIndex === V &&
                (eL(
                  ey,
                  t + e.width,
                  0,
                  eg + 1,
                  ep(y.resizeIndicatorColor ?? y.accentLight, y.bgHeader)
                ),
                eL(
                  eb,
                  t + e.width,
                  eg,
                  u,
                  ep(y.resizeIndicatorColor ?? y.accentLight, y.bgCell)
                ),
                !0)
            ),
          null !== ew &&
            ((ew.fillStyle = y.bgCell),
            ew.fillRect(0, 0, c, u),
            ew.drawImage(eb.canvas, 0, 0));
        let ej =
          ((l = 0),
          e_(
            eC,
            h,
            f,
            p,
            eg,
            (e, t, r, n, i) => (
              eF(i, r, u, z, ek, P, J, (e, t, r, n) => {
                n || (l = Math.max(t, l));
              }),
              !0
            )
          ),
          l);
        X?.setWindow(
          { x: d, y: h, width: eC.length, height: ej - h },
          v,
          Array.from({ length: P }, (e, t) => z - 1 - t)
        );
        let eV = void 0 !== ev && (d !== ev.cellXOffset || f !== ev.translateX),
          eX = void 0 !== ev && (h !== ev.cellYOffset || p !== ev.translateY);
        (K.current = {
          cellXOffset: d,
          cellYOffset: h,
          translateX: f,
          translateY: p,
          mustDrawFocusOnHeader: eT,
          mustDrawHighlightRingsOnHeader: ez,
          lastBuffer: eu ? (i === el ? "a" : "b") : void 0,
          aBufferScroll: i === el ? [eV, eX] : ev?.aBufferScroll,
          bBufferScroll: i === eo ? [eV, eX] : ev?.bBufferScroll,
        }),
          eb.restore(),
          ey.restore();
      }
      function eF(e, t, r, n, i, l, o, a) {
        let s = t,
          c = e,
          u = n - l;
        for (; s < r && c < u; ) {
          let e = i(c);
          if (!0 === a(s, c, e, !1, o && c === n - 1)) break;
          (s += e), c++;
        }
        s = r;
        for (let e = 0; e < l; e++) {
          let t = i((c = n - 1 - e));
          a((s -= t), c, t, !0, o && c === n - 1);
        }
      }
      function e_(e, t, r, n, i, l) {
        let o = 0,
          a = 0,
          s = i + n;
        for (let n of e) {
          let e = n.sticky ? a : o + r;
          if (!0 === l(n, e, s, a, t)) break;
          (o += n.width), (a += n.sticky ? n.width : 0);
        }
      }
      function e$(e, t, r, n, i) {
        let l = 0,
          o = 0;
        for (let a = 0; a < e.length; a++) {
          let s = e[a],
            c = a + 1,
            u = s.width;
          for (
            s.sticky && (o += u);
            c < e.length &&
            H(e[c].group, s.group) &&
            e[c].sticky === e[a].sticky;
          ) {
            let t = e[c];
            (u += t.width), c++, a++, t.sticky && (o += t.width);
          }
          let d = l + (s.sticky ? 0 : r),
            h = s.sticky ? 0 : Math.max(0, o - d),
            f = Math.min(u - h, t - (d + h));
          i(
            [s.sourceIndex, e[c - 1].sourceIndex],
            s.group ?? "",
            d + h,
            0,
            f,
            n
          ),
            (l += u);
        }
      }
      class eN {
        callback;
        constructor(e) {
          this.callback = e;
        }
        currentHoveredItem = void 0;
        leavingItems = [];
        lastAnimationTime;
        addToLeavingItems = (e) => {
          this.leavingItems.some((t) => L(t.item, e.item)) ||
            this.leavingItems.push(e);
        };
        removeFromLeavingItems = (e) => {
          let t = this.leavingItems.find((t) => L(t.item, e));
          return (
            (this.leavingItems = this.leavingItems.filter((e) => e !== t)),
            t?.hoverAmount ?? 0
          );
        };
        cleanUpLeavingElements = () => {
          this.leavingItems = this.leavingItems.filter(
            (e) => e.hoverAmount > 0
          );
        };
        shouldStep = () => {
          let e = this.leavingItems.length > 0,
            t =
              void 0 !== this.currentHoveredItem &&
              this.currentHoveredItem.hoverAmount < 1;
          return e || t;
        };
        getAnimatingItems = () =>
          void 0 !== this.currentHoveredItem
            ? [...this.leavingItems, this.currentHoveredItem]
            : this.leavingItems.map((e) => ({
                ...e,
                hoverAmount: (function (e) {
                  let t = e - 1;
                  return t * t * t + 1;
                })(e.hoverAmount),
              }));
        step = (e) => {
          if (void 0 === this.lastAnimationTime) this.lastAnimationTime = e;
          else {
            let t = (e - this.lastAnimationTime) / 80;
            for (let e of this.leavingItems)
              e.hoverAmount = s(e.hoverAmount - t, 0, 1);
            void 0 !== this.currentHoveredItem &&
              (this.currentHoveredItem.hoverAmount = s(
                this.currentHoveredItem.hoverAmount + t,
                0,
                1
              ));
            let r = this.getAnimatingItems();
            this.callback(r), this.cleanUpLeavingElements();
          }
          this.shouldStep()
            ? ((this.lastAnimationTime = e),
              window.requestAnimationFrame(this.step))
            : (this.lastAnimationTime = void 0);
        };
        setHovered = (e) => {
          if (!L(this.currentHoveredItem?.item, e)) {
            if (
              (void 0 !== this.currentHoveredItem &&
                this.addToLeavingItems(this.currentHoveredItem),
              void 0 !== e)
            ) {
              let t = this.removeFromLeavingItems(e);
              this.currentHoveredItem = { item: e, hoverAmount: t };
            } else this.currentHoveredItem = void 0;
            void 0 === this.lastAnimationTime &&
              window.requestAnimationFrame(this.step);
          }
        };
      }
      class eW {
        fn;
        val;
        constructor(e) {
          this.fn = e;
        }
        get value() {
          return this.val ?? (this.val = this.fn());
        }
      }
      let eB = new eW(() => window.navigator.userAgent.includes("Firefox")),
        ej = new eW(
          () =>
            window.navigator.userAgent.includes("Mac OS") &&
            window.navigator.userAgent.includes("Safari") &&
            !window.navigator.userAgent.includes("Chrome")
        ),
        eV = new eW(() =>
          window.navigator.platform.toLowerCase().startsWith("mac")
        ),
        eX = "header",
        eU = "group-header",
        eK = "out-of-bounds";
      function eY(e, t) {
        return (
          e === t ||
          (e?.kind === "out-of-bounds"
            ? e?.kind === t?.kind &&
              e?.location[0] === t?.location[0] &&
              e?.location[1] === t?.location[1] &&
              e?.region[0] === t?.region[0] &&
              e?.region[1] === t?.region[1]
            : e?.kind === t?.kind &&
              e?.location[0] === t?.location[0] &&
              e?.location[1] === t?.location[1])
        );
      }
      ((i = l || (l = {}))[(i.Start = -2)] = "Start"),
        (i[(i.StartPadding = -1)] = "StartPadding"),
        (i[(i.Center = 0)] = "Center"),
        (i[(i.EndPadding = 1)] = "EndPadding"),
        (i[(i.End = 2)] = "End");
      let eG = (e, t) => {
        if (e.kind === f.p6.Custom) return e.copyData;
        let r = t?.(e);
        return r?.getAccessibilityString(e) ?? "";
      };
      var eq = o.memo(
        o.forwardRef((e, t) => {
          let {
              width: r,
              height: n,
              accessibilityHeight: i,
              columns: c,
              cellXOffset: u,
              cellYOffset: g,
              headerHeight: m,
              fillHandle: v = !1,
              groupHeaderHeight: w,
              rowHeight: y,
              rows: b,
              getCellContent: x,
              getRowThemeOverride: k,
              onHeaderMenuClick: C,
              enableGroups: R,
              isFilling: E,
              onCanvasFocused: T,
              onCanvasBlur: I,
              isFocused: P,
              selection: z,
              freezeColumns: H,
              onContextMenu: A,
              freezeTrailingRows: L,
              fixedShadowX: D = !0,
              fixedShadowY: F = !0,
              drawFocusRing: $ = !0,
              onMouseDown: W,
              onMouseUp: B,
              onMouseMoveRaw: j,
              onMouseMove: V,
              onItemHovered: X,
              dragAndDropState: U,
              firstColAccessible: K,
              onKeyDown: Y,
              onKeyUp: G,
              highlightRegions: q,
              canvasRef: Z,
              onDragStart: Q,
              onDragEnd: J,
              eventTargetRef: er,
              isResizing: ei,
              resizeColumn: es,
              isDragging: ec,
              isDraggable: eu = !1,
              allowResize: ed,
              disabledRows: eh,
              hasAppendRow: ef,
              getGroupDetails: ep,
              theme: eg,
              prelightCells: em,
              headerIcons: ev,
              verticalBorder: ew,
              drawCell: ey,
              drawHeader: eb,
              onCellFocused: ex,
              onDragOverCell: ek,
              onDrop: eS,
              onDragLeave: eT,
              imageWindowLoader: eP,
              smoothScrollX: ez = !1,
              smoothScrollY: eH = !1,
              experimental: eA,
              getCellRenderer: eL,
            } = e,
            eO = e.translateX ?? 0,
            eF = e.translateY ?? 0,
            e_ = Math.max(H, Math.min(c.length - 1, u)),
            e$ = o.useRef(null),
            eW = o.useRef(),
            [eV, eq] = o.useState(!1),
            eZ = o.useRef([]),
            eQ = o.useRef(),
            [eJ, e0] = o.useState(),
            [e1, e2] = o.useState(),
            e3 = o.useRef(null),
            [e7, e6] = o.useState(),
            [e5, e4] = o.useState(!1),
            e8 = o.useRef(e5);
          e8.current = e5;
          let e9 = o.useMemo(
              () =>
                new ea(ev, () => {
                  (tm.current = void 0), tw.current();
                }),
              [ev]
            ),
            te = R ? w + m : m,
            tt = o.useRef(-1),
            tr = (eA?.enableFirefoxRescaling ?? !1) && eB.value,
            tn = (eA?.enableSafariRescaling ?? !1) && ej.value;
          o.useLayoutEffect(() => {
            1 !== window.devicePixelRatio &&
              (tr || tn) &&
              (-1 !== tt.current && eq(!0),
              window.clearTimeout(tt.current),
              (tt.current = window.setTimeout(() => {
                eq(!1), (tt.current = -1);
              }, 200)));
          }, [g, e_, eO, eF, tr, tn]);
          let ti = o.useMemo(
              () => c.map((e, t) => ({ ...e, sourceIndex: t, sticky: t < H })),
              [c, H]
            ),
            tl = D ? _(ti, U) : 0,
            to = o.useCallback(
              (e, t, i) => {
                let l = e.getBoundingClientRect();
                if (t >= ti.length || i >= b) return;
                let o = l.width / r,
                  a = ee(t, i, r, n, w, te, e_, g, eO, eF, b, H, L, ti, y);
                return (
                  1 !== o &&
                    ((a.x *= o), (a.y *= o), (a.width *= o), (a.height *= o)),
                  (a.x += l.x),
                  (a.y += l.y),
                  a
                );
              },
              [r, n, w, te, e_, g, eO, eF, b, H, L, ti, y]
            ),
            ta = o.useCallback(
              (e, t, i, o) => {
                let s;
                let c = e.getBoundingClientRect(),
                  u = c.width / r,
                  d = (t - c.left) / u,
                  h = (i - c.top) / u,
                  f = N(ti, e_, r, void 0, eO),
                  p = 0,
                  x = 0;
                o instanceof MouseEvent && ((p = o.button), (x = o.buttons));
                let k = (function (e, t, r) {
                    let n = 0;
                    for (let i of t) {
                      if (e <= (i.sticky ? n : n + (r ?? 0)) + i.width)
                        return i.sourceIndex;
                      n += i.width;
                    }
                    return -1;
                  })(d, f, eO),
                  C = (function (e, t, r, n, i, l, o, a, s, c) {
                    let u = n + i;
                    if (r && e <= i) return -2;
                    if (e <= u) return -1;
                    let d = t;
                    for (let t = 0; t < c; t++) {
                      let r = l - 1 - t;
                      if (e >= (d -= "number" == typeof o ? o : o(r))) return r;
                    }
                    let h = l - c,
                      f = e - (s ?? 0);
                    if ("number" == typeof o) {
                      let e = Math.floor((f - u) / o) + a;
                      if (e >= h) return;
                      return e;
                    }
                    {
                      let e = u;
                      for (let t = a; t < h; t++) {
                        let r = o(t);
                        if (f <= e + r) return t;
                        e += r;
                      }
                      return;
                    }
                  })(h, n, R, m, w, b, y, g, eF, L),
                  S = o?.shiftKey === !0,
                  E = o?.ctrlKey === !0,
                  T = o?.metaKey === !0,
                  I =
                    (void 0 !== o && !(o instanceof MouseEvent)) ||
                    o?.pointerType === "touch",
                  P = [d < 0 ? -1 : r < d ? 1 : 0, h < te ? -1 : n < h ? 1 : 0];
                if (
                  -1 === k ||
                  h < 0 ||
                  d < 0 ||
                  void 0 === C ||
                  d > r ||
                  h > n
                ) {
                  let i = d > r ? 1 : d < 0 ? -1 : 0,
                    o = h > n ? 1 : h < 0 ? -1 : 0,
                    c = 2 * i,
                    u = 2 * o;
                  0 === i && (c = -1 === k ? l.EndPadding : l.Center),
                    0 === o && (u = void 0 === C ? l.EndPadding : l.Center);
                  let f = !1;
                  if (-1 === k && -1 === C) {
                    let r = to(e, ti.length - 1, -1);
                    (0, a.hu)(void 0 !== r), (f = t < r.x + r.width + 5);
                  }
                  let g = (d > r && d < r + M()) || (h > n && h < n + M());
                  s = {
                    kind: eK,
                    location: [
                      -1 !== k ? k : d < 0 ? 0 : ti.length - 1,
                      C ?? b - 1,
                    ],
                    region: [c, u],
                    shiftKey: S,
                    ctrlKey: E,
                    metaKey: T,
                    isEdge: f,
                    isTouch: I,
                    button: p,
                    buttons: x,
                    scrollEdge: P,
                    isMaybeScrollbar: g,
                  };
                } else if (C <= -1) {
                  let r = to(e, k, C);
                  (0, a.hu)(void 0 !== r);
                  let n = void 0 !== r && r.x + r.width - t <= 5,
                    l = k - 1;
                  t - r.x <= 5 && l >= 0
                    ? ((n = !0),
                      (r = to(e, l, C)),
                      (0, a.hu)(void 0 !== r),
                      (s = {
                        kind: R && -2 === C ? eU : eX,
                        location: [l, C],
                        bounds: r,
                        group: ti[l].group ?? "",
                        isEdge: n,
                        shiftKey: S,
                        ctrlKey: E,
                        metaKey: T,
                        isTouch: I,
                        localEventX: t - r.x,
                        localEventY: i - r.y,
                        button: p,
                        buttons: x,
                        scrollEdge: P,
                      }))
                    : (s = {
                        kind: R && -2 === C ? eU : eX,
                        group: ti[k].group ?? "",
                        location: [k, C],
                        bounds: r,
                        isEdge: n,
                        shiftKey: S,
                        ctrlKey: E,
                        metaKey: T,
                        isTouch: I,
                        localEventX: t - r.x,
                        localEventY: i - r.y,
                        button: p,
                        buttons: x,
                        scrollEdge: P,
                      });
                } else {
                  let r = to(e, k, C);
                  (0, a.hu)(void 0 !== r);
                  let n = void 0 !== r && r.x + r.width - t < 5,
                    l = !1;
                  if (v && void 0 !== z.current) {
                    let r = O(z.current.range),
                      n = to(e, r[0], r[1]);
                    if (void 0 !== n) {
                      let e = n.x + n.width - 2,
                        r = n.y + n.height - 2;
                      l = 6 > Math.abs(e - t) && 6 > Math.abs(r - i);
                    }
                  }
                  s = {
                    kind: "cell",
                    location: [k, C],
                    bounds: r,
                    isEdge: n,
                    shiftKey: S,
                    ctrlKey: E,
                    isFillHandle: l,
                    metaKey: T,
                    isTouch: I,
                    localEventX: t - r.x,
                    localEventY: i - r.y,
                    button: p,
                    buttons: x,
                    scrollEdge: P,
                  };
                }
                return s;
              },
              [r, ti, e_, eO, n, R, m, w, b, y, g, eF, L, to, v, z, te]
            ),
            [ts] = eJ ?? [],
            tc = o.useRef(() => {}),
            tu = o.useRef(eJ);
          tu.current = eJ;
          let [td, th] = o.useMemo(() => {
            let e = document.createElement("canvas"),
              t = document.createElement("canvas");
            return (
              (e.style.display = "none"),
              (e.style.opacity = "0"),
              (e.style.position = "fixed"),
              (t.style.display = "none"),
              (t.style.opacity = "0"),
              (t.style.position = "fixed"),
              [e, t]
            );
          }, []);
          o.useLayoutEffect(
            () => (
              document.documentElement.append(td),
              document.documentElement.append(th),
              () => {
                td.remove(), th.remove();
              }
            ),
            [td, th]
          );
          let tf = o.useMemo(() => new el(), []),
            tp = tr && eV ? 1 : tn && eV ? 2 : 5,
            tg = eA?.disableMinimumCellWidth === !0 ? 1 : 10,
            tm = o.useRef(),
            tv = o.useCallback(() => {
              let e = e$.current,
                t = e3.current;
              if (null === e || null === t) return;
              let i = !1,
                l = tm.current,
                o = {
                  canvas: e,
                  bufferA: td,
                  bufferB: th,
                  headerCanvas: t,
                  width: r,
                  height: n,
                  cellXOffset: e_,
                  cellYOffset: g,
                  translateX: Math.round(eO),
                  translateY: Math.round(eF),
                  mappedColumns: ti,
                  enableGroups: R,
                  freezeColumns: H,
                  dragAndDropState: U,
                  theme: eg,
                  headerHeight: m,
                  groupHeaderHeight: w,
                  disabledRows: eh ?? f.EV.empty(),
                  rowHeight: y,
                  verticalBorder: ew,
                  isResizing: ei,
                  resizeCol: es,
                  isFocused: P,
                  selection: z,
                  fillHandle: v,
                  drawCellCallback: ey,
                  hasAppendRow: ef,
                  overrideCursor: (e) => {
                    (i = !0), e6(e);
                  },
                  maxScaleFactor: tp,
                  freezeTrailingRows: L,
                  rows: b,
                  drawFocus: $,
                  getCellContent: x,
                  getGroupDetails: ep ?? ((e) => ({ name: e })),
                  getRowThemeOverride: k,
                  drawHeaderCallback: eb,
                  prelightCells: em,
                  highlightRegions: q,
                  imageLoader: eP,
                  lastBlitData: eQ,
                  damage: eW.current,
                  hoverValues: eZ.current,
                  hoverInfo: tu.current,
                  spriteManager: e9,
                  scrolling: eV,
                  hyperWrapping: eA?.hyperWrapping ?? !1,
                  touchMode: e5,
                  enqueue: tc.current,
                  renderStateProvider: tf,
                  renderStrategy:
                    eA?.renderStrategy ??
                    (ej.value ? "double-buffer" : "single-buffer"),
                  getCellRenderer: eL,
                  minimumCellWidth: tg,
                };
              void 0 === o.damage
                ? ((tm.current = o), eD(o, l))
                : eD(o, void 0),
                !i &&
                  (void 0 === o.damage || o.damage.has(tu?.current?.[0])) &&
                  e6(void 0);
            }, [
              td,
              th,
              r,
              n,
              e_,
              g,
              eO,
              eF,
              ti,
              R,
              H,
              U,
              eg,
              m,
              w,
              eh,
              y,
              ew,
              ei,
              ef,
              es,
              P,
              z,
              v,
              L,
              b,
              $,
              tp,
              x,
              ep,
              k,
              ey,
              eb,
              em,
              q,
              eP,
              e9,
              eV,
              eA?.hyperWrapping,
              eA?.renderStrategy,
              e5,
              tf,
              eL,
              tg,
            ]),
            tw = o.useRef(tv);
          o.useLayoutEffect(() => {
            tv(), (tw.current = tv);
          }, [tv]),
            o.useLayoutEffect(() => {
              (async () => {
                document?.fonts?.ready !== void 0 &&
                  (await document.fonts.ready,
                  (tm.current = void 0),
                  tw.current());
              })();
            }, []);
          let ty = o.useCallback((e) => {
              (eW.current = e), tw.current(), (eW.current = void 0);
            }, []),
            tb = (function (e) {
              let t = o.useRef([]),
                r = o.useRef(0),
                n = o.useRef(e);
              n.current = e;
              let i = o.useCallback(() => {
                let e = () => {
                  let e = t.current.map(en);
                  (t.current = []),
                    n.current(new eo(e)),
                    t.current.length > 0 ? r.current++ : (r.current = 0);
                };
                window.requestAnimationFrame(
                  r.current > 600 ? () => window.requestAnimationFrame(e) : e
                );
              }, []);
              return o.useCallback(
                (e) => {
                  0 === t.current.length && i();
                  let r = et(e[0], e[1]);
                  t.current.includes(r) || t.current.push(r);
                },
                [i]
              );
            })(ty);
          tc.current = tb;
          let tx = o.useCallback(
            (e) => {
              ty(new eo(e.map((e) => e.cell)));
            },
            [ty]
          );
          eP.setCallback(ty);
          let [tk, tC] = o.useState(!1),
            [tS, tM] = ts ?? [],
            tR = void 0 !== tS && -1 === tM,
            tE = void 0 !== tS && -2 === tM,
            tT = !1,
            tI = !1,
            tP = e7;
          if (
            void 0 === tP &&
            void 0 !== tS &&
            void 0 !== tM &&
            tM > -1 &&
            tM < b
          ) {
            let e = x([tS, tM], !0);
            (tT =
              e.kind === f.$o.NewRow ||
              (e.kind === f.$o.Marker && "number" !== e.markerKind)),
              (tI = e.kind === f.p6.Boolean && (0, f.kf)(e)),
              (tP = e.cursor);
          }
          let tz = e1 ?? !1,
            tH = ec
              ? "grabbing"
              : tz || ei
                ? "col-resize"
                : tk || E
                  ? "crosshair"
                  : void 0 !== tP
                    ? tP
                    : tR || tT || tI || tE
                      ? "pointer"
                      : "default",
            tA = o.useMemo(
              () => ({ contain: "strict", display: "block", cursor: tH }),
              [tH]
            ),
            tL = o.useRef("default"),
            tO = er?.current;
          null != tO &&
            tL.current !== tA.cursor &&
            (tO.style.cursor = tL.current = tA.cursor);
          let tD = o.useCallback(
              (e, t, r, n) => {
                if (void 0 === ep) return;
                let i = ep(e);
                if (void 0 !== i.actions) {
                  for (let [e, l] of eM(t, i.actions).entries())
                    if (eR(l, r + t.x, n + l.y)) return i.actions[e];
                }
              },
              [ep]
            ),
            tF = o.useCallback(
              (e, t, r, n) => {
                let i = c[t];
                if (!ec && !ei && !0 === i.hasMenu && !e1) {
                  let l = to(e, t, -1);
                  (0, a.hu)(void 0 !== l);
                  let o = eE(l.x, l.y, l.width, l.height, "rtl" === S(i.title));
                  if (
                    r > o.x &&
                    r < o.x + o.width &&
                    n > o.y &&
                    n < o.y + o.height
                  )
                    return l;
                }
              },
              [c, to, e1, ec, ei]
            ),
            t_ = o.useRef(0),
            t$ = o.useRef(),
            tN = o.useRef(!1),
            tW = o.useCallback(
              (e) => {
                let t, r;
                let n = e$.current,
                  i = er?.current;
                if (null === n || (e.target !== n && e.target !== i)) return;
                if (
                  ((tN.current = !0),
                  e instanceof MouseEvent
                    ? ((t = e.clientX), (r = e.clientY))
                    : ((t = e.touches[0].clientX), (r = e.touches[0].clientY)),
                  e.target === i && null !== i)
                ) {
                  let e = i.getBoundingClientRect();
                  if (t > e.right || r > e.bottom) return;
                }
                let l = ta(n, t, r, e);
                (t$.current = l.location),
                  l.isTouch && (t_.current = Date.now()),
                  e8.current !== l.isTouch && e4(l.isTouch),
                  (l.kind !== eX || void 0 === tF(n, l.location[0], t, r)) &&
                    (l.kind !== eU ||
                      void 0 ===
                        tD(l.group, l.bounds, l.localEventX, l.localEventY)) &&
                    (W?.(l),
                    !l.isTouch &&
                      !0 !== eu &&
                      eu !== l.kind &&
                      l.button < 3 &&
                      1 !== l.button &&
                      e.preventDefault());
              },
              [er, eu, ta, tD, tF, W]
            );
          p("touchstart", tW, window, !1), p("mousedown", tW, window, !1);
          let tB = o.useRef(0),
            tj = o.useCallback(
              (e) => {
                let t, r;
                let n = tB.current;
                tB.current = Date.now();
                let i = e$.current;
                if (((tN.current = !1), void 0 === B || null === i)) return;
                let l = er?.current,
                  o = e.target !== i && e.target !== l,
                  a = !0;
                if (e instanceof MouseEvent) {
                  if (
                    ((t = e.clientX),
                    (r = e.clientY),
                    (a = e.button < 3),
                    "touch" === e.pointerType)
                  )
                    return;
                } else
                  (t = e.changedTouches[0].clientX),
                    (r = e.changedTouches[0].clientY);
                let s = ta(i, t, r, e);
                s.isTouch &&
                  0 !== t_.current &&
                  Date.now() - t_.current > 500 &&
                  (s = { ...s, isLongTouch: !0 }),
                  0 !== n &&
                    Date.now() - n < (s.isTouch ? 1e3 : 500) &&
                    (s = { ...s, isDoubleClick: !0 }),
                  e8.current !== s.isTouch && e4(s.isTouch),
                  !o && e.cancelable && a && e.preventDefault();
                let [c] = s.location,
                  u = tF(i, c, t, r);
                if (s.kind === eX && void 0 !== u) {
                  (0 !== s.button ||
                    t$.current?.[0] !== c ||
                    t$.current?.[1] !== -1) &&
                    B(s, !0);
                  return;
                }
                if (s.kind === eU) {
                  let e = tD(s.group, s.bounds, s.localEventX, s.localEventY);
                  if (void 0 !== e) {
                    0 === s.button && e.onClick(s);
                    return;
                  }
                }
                B(s, o);
              },
              [B, er, ta, tF, tD]
            );
          p("mouseup", tj, window, !1),
            p("touchend", tj, window, !1),
            p(
              "click",
              o.useCallback(
                (e) => {
                  let t, r;
                  let n = e$.current;
                  if (null === n) return;
                  let i = er?.current,
                    l = e.target !== n && e.target !== i,
                    o = !0;
                  e instanceof MouseEvent
                    ? ((t = e.clientX), (r = e.clientY), (o = e.button < 3))
                    : ((t = e.changedTouches[0].clientX),
                      (r = e.changedTouches[0].clientY));
                  let a = ta(n, t, r, e);
                  e8.current !== a.isTouch && e4(a.isTouch),
                    !l && e.cancelable && o && e.preventDefault();
                  let [s] = a.location,
                    c = tF(n, s, t, r);
                  if (a.kind === eX && void 0 !== c)
                    0 === a.button &&
                      t$.current?.[0] === s &&
                      t$.current?.[1] === -1 &&
                      C?.(s, c);
                  else if (a.kind === eU) {
                    let e = tD(a.group, a.bounds, a.localEventX, a.localEventY);
                    void 0 !== e && 0 === a.button && e.onClick(a);
                  }
                },
                [er, ta, tF, C, tD]
              ),
              window,
              !1
            ),
            p(
              "contextmenu",
              o.useCallback(
                (e) => {
                  let t = e$.current,
                    r = er?.current;
                  null !== t &&
                    (e.target === t || e.target === r) &&
                    void 0 !== A &&
                    A(ta(t, e.clientX, e.clientY, e), () => {
                      e.cancelable && e.preventDefault();
                    });
                },
                [er, ta, A]
              ),
              er?.current ?? null,
              !1
            );
          let tV = o.useCallback((e) => {
              (eW.current = new eo(e.map((e) => e.item))),
                (eZ.current = e),
                tw.current(),
                (eW.current = void 0);
            }, []),
            tX = o.useMemo(() => new eN(tV), [tV]),
            tU = o.useRef(tX);
          (tU.current = tX),
            o.useLayoutEffect(() => {
              let e = tU.current;
              if (void 0 === ts || ts[1] < 0) {
                e.setHovered(ts);
                return;
              }
              let t = x(ts, !0),
                r = eL(t);
              e.setHovered(
                (void 0 === r && t.kind === f.p6.Custom) || r?.needsHover === !0
                  ? ts
                  : void 0
              );
            }, [x, eL, ts]);
          let tK = o.useRef();
          p(
            "mousemove",
            o.useCallback(
              (e) => {
                let t = e$.current;
                if (null === t) return;
                let r = er?.current,
                  n = e.target !== t && e.target !== r,
                  i = ta(t, e.clientX, e.clientY, e);
                if (
                  "out-of-bounds" !== i.kind &&
                  n &&
                  !tN.current &&
                  !i.isTouch
                )
                  return;
                let l = (e, t) => {
                  e0((r) =>
                    r !== e &&
                    (r?.[0][0] !== e?.[0][0] ||
                      r?.[0][1] !== e?.[0][1] ||
                      ((r?.[1][0] !== e?.[1][0] || r?.[1][1] !== e?.[1][1]) &&
                        t))
                      ? e
                      : r
                  );
                };
                if (eY(i, tK.current)) {
                  if ("cell" === i.kind || i.kind === eX || i.kind === eU) {
                    let e = !1,
                      t = !0;
                    if ("cell" === i.kind) {
                      let r = x(i.location);
                      e = t =
                        eL(r)?.needsHoverPosition ?? r.kind === f.p6.Custom;
                    } else i.kind === eU && (e = !0);
                    let r = [i.location, [i.localEventX, i.localEventY]];
                    l(r, t), (tu.current = r), e && ty(new eo([i.location]));
                  }
                } else
                  X?.(i),
                    l(
                      i.kind === eK
                        ? void 0
                        : [i.location, [i.localEventX, i.localEventY]],
                      !0
                    ),
                    (tK.current = i);
                let o = i.location[0] >= (K ? 0 : 1);
                e2(i.kind === eX && i.isEdge && o && !0 === ed),
                  tC("cell" === i.kind && i.isFillHandle),
                  j?.(e),
                  V(i);
              },
              [er, ta, K, ed, j, V, X, x, eL, ty]
            ),
            window,
            !0
          );
          let tY = o.useCallback(
              (e) => {
                let t, r;
                let n = e$.current;
                null !== n &&
                  (void 0 !== z.current &&
                    ((t = to(n, z.current.cell[0], z.current.cell[1])),
                    (r = z.current.cell)),
                  Y?.({
                    bounds: t,
                    stopPropagation: () => e.stopPropagation(),
                    preventDefault: () => e.preventDefault(),
                    cancel: () => void 0,
                    ctrlKey: e.ctrlKey,
                    metaKey: e.metaKey,
                    shiftKey: e.shiftKey,
                    altKey: e.altKey,
                    key: e.key,
                    keyCode: e.keyCode,
                    rawEvent: e,
                    location: r,
                  }));
              },
              [Y, z, to]
            ),
            tG = o.useCallback(
              (e) => {
                let t, r;
                let n = e$.current;
                null !== n &&
                  (void 0 !== z.current &&
                    ((t = to(n, z.current.cell[0], z.current.cell[1])),
                    (r = z.current.cell)),
                  G?.({
                    bounds: t,
                    stopPropagation: () => e.stopPropagation(),
                    preventDefault: () => e.preventDefault(),
                    cancel: () => void 0,
                    ctrlKey: e.ctrlKey,
                    metaKey: e.metaKey,
                    shiftKey: e.shiftKey,
                    altKey: e.altKey,
                    key: e.key,
                    keyCode: e.keyCode,
                    rawEvent: e,
                    location: r,
                  }));
              },
              [G, z, to]
            ),
            tq = o.useCallback(
              (e) => {
                (e$.current = e), void 0 !== Z && (Z.current = e);
              },
              [Z]
            );
          p(
            "dragstart",
            o.useCallback(
              (e) => {
                let t, r, n, i, l;
                let o = e$.current;
                if (null === o || !1 === eu || ei) {
                  e.preventDefault();
                  return;
                }
                let s = ta(o, e.clientX, e.clientY);
                if (!0 !== eu && s.kind !== eu) {
                  e.preventDefault();
                  return;
                }
                let c = !1;
                if (
                  (Q?.({
                    ...s,
                    setData: (e, n) => {
                      (t = e), (r = n);
                    },
                    setDragImage: (e, t, r) => {
                      (n = e), (i = t), (l = r);
                    },
                    preventDefault: () => (c = !0),
                    defaultPrevented: () => c,
                  }),
                  c || void 0 === t || void 0 === r || null === e.dataTransfer)
                )
                  e.preventDefault();
                else if (
                  (e.dataTransfer.setData(t, r),
                  (e.dataTransfer.effectAllowed = "copyLink"),
                  void 0 !== n && void 0 !== i && void 0 !== l)
                )
                  e.dataTransfer.setDragImage(n, i, l);
                else {
                  let [t, r] = s.location;
                  if (void 0 !== r) {
                    let n = document.createElement("canvas"),
                      i = to(o, t, r);
                    (0, a.hu)(void 0 !== i);
                    let l = Math.ceil(window.devicePixelRatio ?? 1);
                    (n.width = i.width * l), (n.height = i.height * l);
                    let s = n.getContext("2d");
                    null !== s &&
                      (s.scale(l, l),
                      (s.textBaseline = "middle"),
                      -1 === r
                        ? ((s.font = eg.headerFontFull),
                          (s.fillStyle = eg.bgHeader),
                          s.fillRect(0, 0, n.width, n.height),
                          eI(
                            s,
                            0,
                            0,
                            i.width,
                            i.height,
                            ti[t],
                            !1,
                            eg,
                            !1,
                            !1,
                            0,
                            e9,
                            eb,
                            !1
                          ))
                        : ((s.font = eg.baseFontFull),
                          (s.fillStyle = eg.bgCell),
                          s.fillRect(0, 0, n.width, n.height),
                          eC(
                            s,
                            x([t, r]),
                            0,
                            r,
                            !1,
                            !1,
                            0,
                            0,
                            i.width,
                            i.height,
                            !1,
                            eg,
                            eg.bgCell,
                            eP,
                            e9,
                            1,
                            void 0,
                            !1,
                            0,
                            void 0,
                            void 0,
                            void 0,
                            tf,
                            eL,
                            () => void 0
                          ))),
                      (n.style.left = "-100%"),
                      (n.style.position = "absolute"),
                      (n.style.width = `${i.width}px`),
                      (n.style.height = `${i.height}px`),
                      document.body.append(n),
                      e.dataTransfer.setDragImage(n, i.width / 2, i.height / 2),
                      window.setTimeout(() => {
                        n.remove();
                      }, 0);
                  }
                }
              },
              [eu, ei, ta, Q, to, eg, ti, e9, eb, x, eP, tf, eL]
            ),
            er?.current ?? null,
            !1,
            !1
          );
          let tZ = o.useRef();
          p(
            "dragover",
            o.useCallback(
              (e) => {
                let t = e$.current;
                if (
                  (void 0 !== eS && e.preventDefault(),
                  null === t || void 0 === ek)
                )
                  return;
                let [r, n] = ta(t, e.clientX, e.clientY).location,
                  i = r - (K ? 0 : 1),
                  [l, o] = tZ.current ?? [];
                (l !== i || o !== n) &&
                  ((tZ.current = [i, n]), ek([i, n], e.dataTransfer));
              },
              [K, ta, ek, eS]
            ),
            er?.current ?? null,
            !1,
            !1
          ),
            p(
              "dragend",
              o.useCallback(() => {
                (tZ.current = void 0), J?.();
              }, [J]),
              er?.current ?? null,
              !1,
              !1
            ),
            p(
              "drop",
              o.useCallback(
                (e) => {
                  let t = e$.current;
                  if (null === t || void 0 === eS) return;
                  e.preventDefault();
                  let [r, n] = ta(t, e.clientX, e.clientY).location;
                  eS([r - (K ? 0 : 1), n], e.dataTransfer);
                },
                [K, ta, eS]
              ),
              er?.current ?? null,
              !1,
              !1
            ),
            p(
              "dragleave",
              o.useCallback(() => {
                eT?.();
              }, [eT]),
              er?.current ?? null,
              !1,
              !1
            );
          let tQ = o.useRef(z);
          tQ.current = z;
          let tJ = o.useRef(null),
            t0 = o.useCallback(
              (e) => {
                null !== e$.current &&
                  e$.current.contains(document.activeElement) &&
                  (null === e && void 0 !== tQ.current.current
                    ? Z?.current?.focus({ preventScroll: !0 })
                    : null !== e && e.focus({ preventScroll: !0 }),
                  (tJ.current = e));
              },
              [Z]
            );
          o.useImperativeHandle(
            t,
            () => ({
              focus: () => {
                let e = tJ.current;
                null !== e && document.contains(e)
                  ? e.focus({ preventScroll: !0 })
                  : Z?.current?.focus({ preventScroll: !0 });
              },
              getBounds: (e, t) => {
                if (void 0 !== Z && null !== Z.current)
                  return to(Z.current, e ?? 0, t ?? -1);
              },
              damage: tx,
            }),
            [Z, tx, to]
          );
          let t1 = o.useRef(),
            t2 = (function (e, t, r) {
              let [n, i] = o.useState(e),
                l = o.useRef(!0);
              o.useEffect(
                () => () => {
                  l.current = !1;
                },
                []
              );
              let a = o.useRef(
                h((e) => {
                  l.current && i(e);
                }, 200)
              );
              return (
                o.useLayoutEffect(() => {
                  l.current && a.current(() => e());
                }, t),
                n
              );
            })(
              () => {
                if (r < 50 || eA?.disableAccessibilityTree === !0) return null;
                let e = N(ti, e_, r, U, eO),
                  t = K ? 0 : -1;
                K || e[0]?.sourceIndex !== 0 || (e = e.slice(1));
                let [n, l] = z.current?.cell ?? [],
                  a = z.current?.range,
                  s = e.map((e) => e.sourceIndex),
                  c = d(g, Math.min(b, g + i));
                return (
                  void 0 === n ||
                    void 0 === l ||
                    (s.includes(n) && c.includes(l)) ||
                    t0(null),
                  o.createElement(
                    "table",
                    {
                      key: "access-tree",
                      role: "grid",
                      "aria-rowcount": b + 1,
                      "aria-multiselectable": "true",
                      "aria-colcount": ti.length + t,
                    },
                    o.createElement(
                      "thead",
                      { role: "rowgroup" },
                      o.createElement(
                        "tr",
                        { role: "row", "aria-rowindex": 1 },
                        e.map((e) =>
                          o.createElement(
                            "th",
                            {
                              role: "columnheader",
                              "aria-selected": z.columns.hasIndex(
                                e.sourceIndex
                              ),
                              "aria-colindex": e.sourceIndex + 1 + t,
                              tabIndex: -1,
                              onFocus: (t) => {
                                if (t.target !== tJ.current)
                                  return ex?.([e.sourceIndex, -1]);
                              },
                              key: e.sourceIndex,
                            },
                            e.title
                          )
                        )
                      )
                    ),
                    o.createElement(
                      "tbody",
                      { role: "rowgroup" },
                      c.map((r) =>
                        o.createElement(
                          "tr",
                          {
                            role: "row",
                            "aria-selected": z.rows.hasIndex(r),
                            key: r,
                            "aria-rowindex": r + 2,
                          },
                          e.map((e) => {
                            let i = e.sourceIndex,
                              s = et(i, r),
                              c = n === i && l === r,
                              u =
                                void 0 !== a &&
                                i >= a.x &&
                                i < a.x + a.width &&
                                r >= a.y &&
                                r < a.y + a.height,
                              d = `glide-cell-${i}-${r}`,
                              h = [i, r],
                              p = x(h, !0);
                            return o.createElement(
                              "td",
                              {
                                key: s,
                                role: "gridcell",
                                "aria-colindex": i + 1 + t,
                                "aria-selected": u,
                                "aria-readonly": (0, f.rs)(p) || !(0, f.Qo)(p),
                                id: d,
                                "data-testid": d,
                                onClick: () => {
                                  let e = Z?.current;
                                  if (null != e)
                                    return Y?.({
                                      bounds: to(e, i, r),
                                      cancel: () => void 0,
                                      preventDefault: () => void 0,
                                      stopPropagation: () => void 0,
                                      ctrlKey: !1,
                                      key: "Enter",
                                      keyCode: 13,
                                      metaKey: !1,
                                      shiftKey: !1,
                                      altKey: !1,
                                      rawEvent: void 0,
                                      location: h,
                                    });
                                },
                                onFocusCapture: (e) => {
                                  if (
                                    e.target !== tJ.current &&
                                    (t1.current?.[0] !== i ||
                                      t1.current?.[1] !== r)
                                  )
                                    return (t1.current = h), ex?.(h);
                                },
                                ref: c ? t0 : void 0,
                                tabIndex: -1,
                              },
                              eG(p, eL)
                            );
                          })
                        )
                      )
                    )
                  )
                );
              },
              [r, ti, e_, U, eO, b, g, i, z, t0, x, Z, Y, to, ex],
              0
            ),
            t3 = 0 !== H && D ? (e_ > H ? 1 : s(-eO / 100, 0, 1)) : 0,
            t7 = -(32 * g) + eF,
            t6 = F ? s(-t7 / 100, 0, 1) : 0,
            t5 = o.useMemo(
              () =>
                t3 || t6
                  ? o.createElement(
                      o.Fragment,
                      null,
                      t3 > 0 &&
                        o.createElement("div", {
                          id: "shadow-x",
                          style: {
                            position: "absolute",
                            top: 0,
                            left: tl,
                            width: r - tl,
                            height: n,
                            opacity: t3,
                            pointerEvents: "none",
                            transition: ez ? void 0 : "opacity 0.2s",
                            boxShadow:
                              "inset 13px 0 10px -13px rgba(0, 0, 0, 0.2)",
                          },
                        }),
                      t6 > 0 &&
                        o.createElement("div", {
                          id: "shadow-y",
                          style: {
                            position: "absolute",
                            top: te,
                            left: 0,
                            width: r,
                            height: n,
                            opacity: t6,
                            pointerEvents: "none",
                            transition: eH ? void 0 : "opacity 0.2s",
                            boxShadow:
                              "inset 0 13px 10px -13px rgba(0, 0, 0, 0.2)",
                          },
                        })
                    )
                  : null,
              [t3, t6, tl, r, ez, te, n, eH]
            ),
            t4 = o.useMemo(
              () => ({ position: "absolute", top: 0, left: 0 }),
              []
            );
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "canvas",
              {
                "data-testid": "data-grid-canvas",
                tabIndex: 0,
                onKeyDown: tY,
                onKeyUp: tG,
                onFocus: T,
                onBlur: I,
                ref: tq,
                style: tA,
              },
              t2
            ),
            o.createElement("canvas", { ref: e3, style: t4 }),
            t5
          );
        })
      );
      function eZ(e, t, r, n) {
        return s(
          Math.round(t - (e.growOffset ?? 0)),
          Math.ceil(r),
          Math.floor(n)
        );
      }
      var eQ = (e) => {
          let [t, r] = o.useState(),
            [n, i] = o.useState(),
            [l, a] = o.useState(),
            [s, c] = o.useState(),
            [u, d] = o.useState(!1),
            [h, f] = o.useState(),
            [p, g] = o.useState(),
            [m, v] = o.useState(),
            [w, y] = o.useState(!1),
            [b, x] = o.useState(),
            {
              onHeaderMenuClick: k,
              getCellContent: C,
              onColumnMoved: S,
              onColumnResize: M,
              onColumnResizeStart: R,
              onColumnResizeEnd: E,
              gridRef: T,
              maxColumnWidth: I,
              minColumnWidth: P,
              onRowMoved: z,
              lockColumns: H,
              onColumnProposeMove: A,
              onMouseDown: L,
              onMouseUp: O,
              onItemHovered: D,
              onDragStart: F,
              canvasRef: _,
            } = e,
            $ = (M ?? E ?? R) !== void 0,
            { columns: N, selection: W } = e,
            B = W.columns,
            j = o.useCallback(
              (e) => {
                let [t, r] = e.location;
                void 0 !== l && s !== t && t >= H
                  ? (d(!0), c(t))
                  : void 0 !== p && void 0 !== r
                    ? (y(!0), v(Math.max(0, r)))
                    : D?.(e);
              },
              [l, p, s, D, H]
            ),
            V = void 0 !== S,
            X = o.useCallback(
              (e) => {
                if (0 === e.button) {
                  let [t, n] = e.location;
                  if ("out-of-bounds" === e.kind && e.isEdge && $) {
                    let e = T?.current?.getBounds(N.length - 1, -1);
                    void 0 !== e && (r(e.x), i(N.length - 1));
                  } else if ("header" === e.kind && t >= H) {
                    let n = _?.current;
                    if (e.isEdge && $ && n) {
                      r(e.bounds.x), i(t);
                      let l = n.getBoundingClientRect().width / n.offsetWidth,
                        o = e.bounds.width / l;
                      R?.(N[t], o, t, o + (N[t].growOffset ?? 0));
                    } else "header" === e.kind && V && (f(e.bounds.x), a(t));
                  } else
                    "cell" === e.kind &&
                      H > 0 &&
                      0 === t &&
                      void 0 !== n &&
                      void 0 !== z &&
                      (x(e.bounds.y), g(n));
                }
                L?.(e);
              },
              [L, $, H, z, T, N, V, R, _]
            ),
            U = o.useCallback(
              (e, t) => {
                u || w || k?.(e, t);
              },
              [u, w, k]
            ),
            K = o.useRef(-1),
            Y = o.useCallback(() => {
              (K.current = -1),
                g(void 0),
                v(void 0),
                x(void 0),
                y(!1),
                a(void 0),
                c(void 0),
                f(void 0),
                d(!1),
                i(void 0),
                r(void 0);
            }, []),
            G = o.useCallback(
              (e, t) => {
                if (0 === e.button) {
                  if (void 0 !== n) {
                    if (B?.hasIndex(n) === !0)
                      for (let e of B) {
                        if (e === n) continue;
                        let t = N[e],
                          r = eZ(t, K.current, P, I);
                        M?.(t, r, e, r + (t.growOffset ?? 0));
                      }
                    let e = eZ(N[n], K.current, P, I);
                    if (
                      (E?.(N[n], e, n, e + (N[n].growOffset ?? 0)),
                      B.hasIndex(n))
                    )
                      for (let e of B) {
                        if (e === n) continue;
                        let t = N[e],
                          r = eZ(t, K.current, P, I);
                        E?.(t, r, e, r + (t.growOffset ?? 0));
                      }
                  }
                  Y(),
                    void 0 !== l && void 0 !== s && S?.(l, s),
                    void 0 !== p && void 0 !== m && z?.(p, m);
                }
                O?.(e, t);
              },
              [O, n, l, s, p, m, B, E, N, P, I, M, S, z, Y]
            ),
            q = o.useMemo(() => {
              if (void 0 !== l && void 0 !== s && l !== s && A?.(l, s) !== !1)
                return { src: l, dest: s };
            }, [l, s, A]),
            Z = o.useCallback(
              (e) => {
                let r = _?.current;
                if (void 0 !== l && void 0 !== h)
                  Math.abs(e.clientX - h) > 20 && d(!0);
                else if (void 0 !== p && void 0 !== b)
                  Math.abs(e.clientY - b) > 20 && y(!0);
                else if (void 0 !== n && void 0 !== t && r) {
                  let i = r.getBoundingClientRect().width / r.offsetWidth,
                    l = (e.clientX - t) / i,
                    o = N[n],
                    a = eZ(o, l, P, I);
                  if (
                    (M?.(o, a, n, a + (o.growOffset ?? 0)),
                    (K.current = l),
                    B?.first() === n)
                  )
                    for (let e of B) {
                      if (e === n) continue;
                      let t = N[e],
                        r = eZ(t, K.current, P, I);
                      M?.(t, r, e, r + (t.growOffset ?? 0));
                    }
                }
              },
              [l, h, p, b, n, t, N, P, I, M, B, _]
            ),
            Q = o.useCallback(
              (e, t) => {
                if (void 0 === p || void 0 === m) return C(e, t);
                let [r, n] = e;
                return (
                  n === m ? (n = p) : (n > m && (n -= 1), n >= p && (n += 1)),
                  C([r, n], t)
                );
              },
              [p, m, C]
            ),
            J = o.useCallback(
              (e) => {
                F?.(e), e.defaultPrevented() || Y();
              },
              [Y, F]
            );
          return o.createElement(eq, {
            accessibilityHeight: e.accessibilityHeight,
            canvasRef: e.canvasRef,
            cellXOffset: e.cellXOffset,
            cellYOffset: e.cellYOffset,
            columns: e.columns,
            disabledRows: e.disabledRows,
            drawFocusRing: e.drawFocusRing,
            drawHeader: e.drawHeader,
            drawCell: e.drawCell,
            enableGroups: e.enableGroups,
            eventTargetRef: e.eventTargetRef,
            experimental: e.experimental,
            fillHandle: e.fillHandle,
            firstColAccessible: e.firstColAccessible,
            fixedShadowX: e.fixedShadowX,
            fixedShadowY: e.fixedShadowY,
            freezeColumns: e.freezeColumns,
            getCellRenderer: e.getCellRenderer,
            getGroupDetails: e.getGroupDetails,
            getRowThemeOverride: e.getRowThemeOverride,
            groupHeaderHeight: e.groupHeaderHeight,
            headerHeight: e.headerHeight,
            headerIcons: e.headerIcons,
            height: e.height,
            highlightRegions: e.highlightRegions,
            imageWindowLoader: e.imageWindowLoader,
            resizeColumn: n,
            isDraggable: e.isDraggable,
            isFilling: e.isFilling,
            isFocused: e.isFocused,
            onCanvasBlur: e.onCanvasBlur,
            onCanvasFocused: e.onCanvasFocused,
            onCellFocused: e.onCellFocused,
            onContextMenu: e.onContextMenu,
            onDragEnd: e.onDragEnd,
            onDragLeave: e.onDragLeave,
            onDragOverCell: e.onDragOverCell,
            onDrop: e.onDrop,
            onKeyDown: e.onKeyDown,
            onKeyUp: e.onKeyUp,
            onMouseMove: e.onMouseMove,
            prelightCells: e.prelightCells,
            rowHeight: e.rowHeight,
            rows: e.rows,
            selection: e.selection,
            smoothScrollX: e.smoothScrollX,
            smoothScrollY: e.smoothScrollY,
            theme: e.theme,
            freezeTrailingRows: e.freezeTrailingRows,
            hasAppendRow: e.hasAppendRow,
            translateX: e.translateX,
            translateY: e.translateY,
            verticalBorder: e.verticalBorder,
            width: e.width,
            getCellContent: Q,
            isResizing: void 0 !== n,
            onHeaderMenuClick: U,
            isDragging: u,
            onItemHovered: j,
            onDragStart: J,
            onMouseDown: X,
            allowResize: $,
            onMouseUp: G,
            dragAndDropState: q,
            onMouseMoveRaw: Z,
            ref: T,
          });
        },
        eJ = r(78228),
        e0 = (e, t, r) => {
          let n = (0, o.useRef)(null),
            i = (0, o.useRef)(null),
            l = (0, o.useRef)(null),
            a = (0, o.useRef)(0),
            s = (0, o.useRef)(t);
          s.current = t;
          let c = r.current;
          (0, o.useEffect)(() => {
            let t = () => {
                if (!1 === i.current && null !== c) {
                  let e = [c.scrollLeft, c.scrollTop];
                  if (l.current?.[0] === e[0] && l.current?.[1] === e[1]) {
                    if (a.current > 10) {
                      (l.current = null), (i.current = null);
                      return;
                    }
                    a.current++;
                  } else
                    (a.current = 0), s.current(e[0], e[1]), (l.current = e);
                  n.current = window.setTimeout(t, 1e3 / 120);
                }
              },
              r = () => {
                (i.current = !0),
                  (l.current = null),
                  null !== n.current &&
                    (window.clearTimeout(n.current), (n.current = null));
              },
              o = (e) => {
                0 === e.touches.length &&
                  ((i.current = !1),
                  (a.current = 0),
                  (n.current = window.setTimeout(t, 1e3 / 120)));
              };
            if (e && null !== c)
              return (
                c.addEventListener("touchstart", r),
                c.addEventListener("touchend", o),
                () => {
                  c.removeEventListener("touchstart", r),
                    c.removeEventListener("touchend", o),
                    null !== n.current && window.clearTimeout(n.current);
                }
              );
          }, [e, c]);
        };
      let e1 = (0, eJ.z)("div")({
          name: "ScrollRegionStyle",
          class: "gdg-s1dgczr6",
          propsAsIs: !1,
          vars: { "s1dgczr6-0": [(e) => (e.isSafari ? "scroll" : "auto")] },
        }),
        e2 = (e) => {
          let {
              children: t,
              clientHeight: r,
              scrollHeight: n,
              scrollWidth: i,
              update: l,
              draggable: a,
              className: s,
              preventDiagonalScrolling: c = !1,
              paddingBottom: u = 0,
              paddingRight: d = 0,
              rightElement: h,
              rightElementProps: f,
              kineticScrollPerfHack: g = !1,
              scrollRef: m,
              initialSize: v,
            } = e,
            w = [],
            y = f?.sticky ?? !1,
            b = f?.fill ?? !1,
            x = o.useRef(0),
            k = o.useRef(0),
            C = o.useRef(null),
            S = "undefined" == typeof window ? 1 : window.devicePixelRatio,
            M = o.useRef({
              scrollLeft: 0,
              scrollTop: 0,
              lockDirection: void 0,
            }),
            R = o.useRef(null),
            E = (function (e) {
              let [t, r] = o.useState(!1),
                n = "undefined" == typeof window ? null : window,
                i = o.useRef(0);
              return (
                p(
                  "touchstart",
                  o.useCallback(() => {
                    window.clearTimeout(i.current), r(!0);
                  }, []),
                  n,
                  !0,
                  !1
                ),
                p(
                  "touchend",
                  o.useCallback(
                    (t) => {
                      0 === t.touches.length &&
                        (i.current = window.setTimeout(() => r(!1), e));
                    },
                    [e]
                  ),
                  n,
                  !0,
                  !1
                ),
                t
              );
            })(200),
            [T, I] = o.useState(!0),
            P = o.useRef(0);
          o.useLayoutEffect(() => {
            if (!T || E || void 0 === M.current.lockDirection) return;
            let e = C.current;
            if (null === e) return;
            let [t, r] = M.current.lockDirection;
            void 0 !== t
              ? (e.scrollLeft = t)
              : void 0 !== r && (e.scrollTop = r),
              (M.current.lockDirection = void 0);
          }, [E, T]);
          let z = o.useCallback(
            (e, t) => {
              let r = C.current;
              if (null === r) return;
              (t = t ?? r.scrollTop), (e = e ?? r.scrollLeft);
              let i = M.current.scrollTop,
                o = M.current.scrollLeft,
                a = e - o,
                s = t - i;
              E &&
                0 !== a &&
                0 !== s &&
                (Math.abs(a) > 3 || Math.abs(s) > 3) &&
                c &&
                void 0 === M.current.lockDirection &&
                (M.current.lockDirection =
                  Math.abs(a) < Math.abs(s) ? [o, void 0] : [void 0, i]);
              let h = M.current.lockDirection;
              (e = h?.[0] ?? e),
                (t = h?.[1] ?? t),
                (M.current.scrollLeft = e),
                (M.current.scrollTop = t);
              let f = r.clientWidth,
                p = r.clientHeight,
                g = t,
                m = k.current - g,
                v = r.scrollHeight - p;
              if (
                ((k.current = g),
                v > 0 &&
                  (Math.abs(m) > 2e3 || 0 === g || g === v) &&
                  n > r.scrollHeight + 5)
              ) {
                let e = (g / v) * (n - p);
                x.current = e - g;
              }
              void 0 !== h &&
                (window.clearTimeout(P.current),
                I(!1),
                (P.current = window.setTimeout(() => I(!0), 200))),
                l({
                  x: e,
                  y: g + x.current,
                  width: f - d,
                  height: p - u,
                  paddingRight: R.current?.clientWidth ?? 0,
                });
            },
            [u, d, n, l, c, E]
          );
          e0(g && ej.value, z, C);
          let H = o.useRef(z);
          H.current = z;
          let A = o.useRef(),
            L = o.useRef(!1);
          o.useLayoutEffect(() => {
            L.current ? z() : (L.current = !0);
          }, [z, u, d]);
          let O = o.useCallback(
              (e) => {
                (C.current = e), void 0 !== m && (m.current = e);
              },
              [m]
            ),
            D = 0,
            F = 0;
          for (
            w.push(
              o.createElement("div", {
                key: D++,
                style: { width: i, height: 0 },
              })
            );
            F < n;
          ) {
            let e = Math.min(5e6, n - F);
            w.push(
              o.createElement("div", {
                key: D++,
                style: { width: 0, height: e },
              })
            ),
              (F += e);
          }
          let {
            ref: _,
            width: $,
            height: N,
          } = (function (e) {
            let t = (0, o.useRef)(null),
              [r, n] = (0, o.useState)({ width: e?.[0], height: e?.[1] });
            return (
              (0, o.useLayoutEffect)(() => {
                let e = new window.ResizeObserver((e) => {
                  for (let t of e) {
                    let { width: e, height: r } = (t && t.contentRect) || {};
                    n((t) =>
                      t.width === e && t.height === r
                        ? t
                        : { width: e, height: r }
                    );
                  }
                });
                return (
                  t.current && e.observe(t.current, void 0),
                  () => {
                    e.disconnect();
                  }
                );
              }, [t.current]),
              { ref: t, ...r }
            );
          })(v);
          return ("undefined" != typeof window &&
            (A.current?.height !== N || A.current?.width !== $) &&
            (window.setTimeout(() => H.current(), 0),
            (A.current = { width: $, height: N })),
          ($ ?? 0) === 0 || (N ?? 0) === 0)
            ? o.createElement("div", { ref: _ })
            : o.createElement(
                "div",
                { ref: _ },
                o.createElement(
                  e1,
                  { isSafari: ej.value },
                  o.createElement("div", { className: "dvn-underlay" }, t),
                  o.createElement(
                    "div",
                    {
                      ref: O,
                      style: A.current,
                      draggable: a,
                      onDragStart: (e) => {
                        a || (e.stopPropagation(), e.preventDefault());
                      },
                      className: "dvn-scroller " + (s ?? ""),
                      onScroll: () => z(),
                    },
                    o.createElement(
                      "div",
                      {
                        className:
                          "dvn-scroll-inner" +
                          (void 0 === h ? " dvn-hidden" : ""),
                      },
                      o.createElement("div", { className: "dvn-stack" }, w),
                      void 0 !== h &&
                        o.createElement(
                          o.Fragment,
                          null,
                          !b &&
                            o.createElement("div", { className: "dvn-spacer" }),
                          o.createElement(
                            "div",
                            {
                              ref: R,
                              style: {
                                height: N,
                                maxHeight: r - Math.ceil(S % 1),
                                position: "sticky",
                                top: 0,
                                paddingLeft: 1,
                                marginBottom: -40,
                                marginRight: d,
                                flexGrow: b ? 1 : void 0,
                                right: y ? d ?? 0 : void 0,
                                pointerEvents: "auto",
                              },
                            },
                            h
                          )
                        )
                    )
                  )
                )
              );
        };
      var e3 = (e) => {
        let {
            columns: t,
            rows: r,
            rowHeight: n,
            headerHeight: i,
            groupHeaderHeight: l,
            enableGroups: a,
            freezeColumns: s,
            experimental: c,
            nonGrowWidth: u,
            clientSize: d,
            className: h,
            onVisibleRegionChanged: f,
            scrollRef: p,
            preventDiagonalScrolling: g,
            rightElement: m,
            rightElementProps: v,
            overscrollX: w,
            overscrollY: y,
            initialSize: b,
            smoothScrollX: x = !1,
            smoothScrollY: k = !1,
            isDraggable: C,
          } = e,
          { paddingRight: S, paddingBottom: M } = c ?? {},
          [R, E] = d,
          T = o.useRef(),
          I = o.useRef(),
          P = o.useRef(),
          z = o.useRef(),
          H = a ? i + l : i;
        if ("number" == typeof n) H += r * n;
        else for (let e = 0; e < r; e++) H += n(e);
        void 0 !== y && (H += y);
        let A = o.useRef(),
          L = o.useCallback(() => {
            if (void 0 === A.current) return;
            let e = { ...A.current },
              i = 0,
              l = e.x < 0 ? -e.x : 0,
              o = 0,
              a = 0;
            e.x = e.x < 0 ? 0 : e.x;
            let c = 0;
            for (let e = 0; e < s; e++) c += t[e].width;
            for (let r of t) {
              let t = i - c;
              if (e.x >= t + r.width) (i += r.width), a++, o++;
              else if (e.x > t) (i += r.width), x ? (l += t - e.x) : a++, o++;
              else if (e.x + e.width > t) (i += r.width), o++;
              else break;
            }
            let u = 0,
              d = 0,
              h = 0;
            if ("number" == typeof n)
              k
                ? (u = (d = Math.floor(e.y / n)) * n - e.y)
                : (d = Math.ceil(e.y / n)),
                (h = Math.ceil(e.height / n) + d),
                u < 0 && h++;
            else {
              let t = 0;
              for (let i = 0; i < r; i++) {
                let r = n(i),
                  l = t + (k ? 0 : r / 2);
                if (e.y >= t + r) (t += r), d++, h++;
                else if (e.y > l) (t += r), k ? (u += l - e.y) : d++, h++;
                else if (e.y + e.height > r / 2 + t) (t += r), h++;
                else break;
              }
            }
            let p = { x: a, y: d, width: o - a, height: h - d },
              g = T.current;
            (void 0 === g ||
              g.y !== p.y ||
              g.x !== p.x ||
              g.height !== p.height ||
              g.width !== p.width ||
              I.current !== l ||
              P.current !== u ||
              e.width !== z.current?.[0] ||
              e.height !== z.current?.[1]) &&
              (f?.(
                { x: a, y: d, width: o - a, height: h - d },
                e.width,
                e.height,
                e.paddingRight ?? 0,
                l,
                u
              ),
              (T.current = p),
              (I.current = l),
              (P.current = u),
              (z.current = [e.width, e.height]));
          }, [t, n, r, f, s, x, k]),
          O = o.useCallback(
            (e) => {
              (A.current = e), L();
            },
            [L]
          );
        return (
          o.useEffect(() => {
            L();
          }, [L]),
          o.createElement(
            e2,
            {
              scrollRef: p,
              className: h,
              kineticScrollPerfHack: c?.kineticScrollPerfHack,
              preventDiagonalScrolling: g,
              draggable: !0 === C || "string" == typeof C,
              scrollWidth: u + Math.max(0, w ?? 0) + (S ?? 0),
              scrollHeight: H + (M ?? 0),
              clientHeight: E,
              rightElement: m,
              paddingBottom: M,
              paddingRight: S,
              rightElementProps: v,
              update: O,
              initialSize: b,
            },
            o.createElement(eQ, {
              eventTargetRef: p,
              width: R,
              height: E,
              accessibilityHeight: e.accessibilityHeight,
              canvasRef: e.canvasRef,
              cellXOffset: e.cellXOffset,
              cellYOffset: e.cellYOffset,
              columns: e.columns,
              disabledRows: e.disabledRows,
              enableGroups: e.enableGroups,
              fillHandle: e.fillHandle,
              firstColAccessible: e.firstColAccessible,
              fixedShadowX: e.fixedShadowX,
              fixedShadowY: e.fixedShadowY,
              freezeColumns: e.freezeColumns,
              getCellContent: e.getCellContent,
              getCellRenderer: e.getCellRenderer,
              getGroupDetails: e.getGroupDetails,
              getRowThemeOverride: e.getRowThemeOverride,
              groupHeaderHeight: e.groupHeaderHeight,
              headerHeight: e.headerHeight,
              highlightRegions: e.highlightRegions,
              imageWindowLoader: e.imageWindowLoader,
              isFilling: e.isFilling,
              isFocused: e.isFocused,
              lockColumns: e.lockColumns,
              maxColumnWidth: e.maxColumnWidth,
              minColumnWidth: e.minColumnWidth,
              onHeaderMenuClick: e.onHeaderMenuClick,
              onMouseMove: e.onMouseMove,
              prelightCells: e.prelightCells,
              rowHeight: e.rowHeight,
              rows: e.rows,
              selection: e.selection,
              theme: e.theme,
              freezeTrailingRows: e.freezeTrailingRows,
              hasAppendRow: e.hasAppendRow,
              translateX: e.translateX,
              translateY: e.translateY,
              onColumnProposeMove: e.onColumnProposeMove,
              verticalBorder: e.verticalBorder,
              drawFocusRing: e.drawFocusRing,
              drawHeader: e.drawHeader,
              drawCell: e.drawCell,
              experimental: e.experimental,
              gridRef: e.gridRef,
              headerIcons: e.headerIcons,
              isDraggable: e.isDraggable,
              onCanvasBlur: e.onCanvasBlur,
              onCanvasFocused: e.onCanvasFocused,
              onCellFocused: e.onCellFocused,
              onColumnMoved: e.onColumnMoved,
              onColumnResize: e.onColumnResize,
              onColumnResizeEnd: e.onColumnResizeEnd,
              onColumnResizeStart: e.onColumnResizeStart,
              onContextMenu: e.onContextMenu,
              onDragEnd: e.onDragEnd,
              onDragLeave: e.onDragLeave,
              onDragOverCell: e.onDragOverCell,
              onDragStart: e.onDragStart,
              onDrop: e.onDrop,
              onItemHovered: e.onItemHovered,
              onKeyDown: e.onKeyDown,
              onKeyUp: e.onKeyUp,
              onMouseDown: e.onMouseDown,
              onMouseUp: e.onMouseUp,
              onRowMoved: e.onRowMoved,
              smoothScrollX: e.smoothScrollX,
              smoothScrollY: e.smoothScrollY,
            })
          )
        );
      };
      let e7 = (0, eJ.z)("div")({
          name: "SearchWrapper",
          class: "gdg-seveqep",
          propsAsIs: !1,
        }),
        e6 = o.createElement(
          "svg",
          { className: "button-icon", viewBox: "0 0 512 512" },
          o.createElement("path", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "48",
            d: "M112 244l144-144 144 144M256 120v292",
          })
        ),
        e5 = o.createElement(
          "svg",
          { className: "button-icon", viewBox: "0 0 512 512" },
          o.createElement("path", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "48",
            d: "M112 268l144 144 144-144M256 392V100",
          })
        ),
        e4 = o.createElement(
          "svg",
          { className: "button-icon", viewBox: "0 0 512 512" },
          o.createElement("path", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "32",
            d: "M368 368L144 144M368 144L144 368",
          })
        );
      var e8 = (e) => {
          let {
              canvasRef: t,
              cellYOffset: r,
              rows: n,
              columns: i,
              searchInputRef: l,
              searchValue: s,
              searchResults: c,
              onSearchValueChange: u,
              getCellsForSelection: d,
              onSearchResultsChanged: h,
              showSearch: p = !1,
              onSearchClose: g,
            } = e,
            [m] = o.useState(
              () => "search-box-" + Math.round(1e3 * Math.random())
            ),
            [v, w] = o.useState(""),
            y = s ?? v,
            b = o.useCallback(
              (e) => {
                w(e), u?.(e);
              },
              [u]
            ),
            [x, k] = o.useState(),
            C = o.useRef(x);
          (C.current = x),
            o.useEffect(() => {
              void 0 !== c &&
                (c.length > 0
                  ? k((e) => ({
                      rowsSearched: n,
                      results: c.length,
                      selectedIndex: e?.selectedIndex ?? -1,
                    }))
                  : k(void 0));
            }, [n, c]);
          let S = o.useRef(new AbortController()),
            M = o.useRef(),
            [R, E] = o.useState([]),
            T = c ?? R,
            I = o.useCallback(() => {
              void 0 !== M.current &&
                (window.cancelAnimationFrame(M.current),
                (M.current = void 0),
                S.current.abort());
            }, []),
            P = o.useRef(r);
          P.current = r;
          let z = o.useCallback(
              (e) => {
                let t = RegExp(
                    e.replace(/([$()*+.?[\\\]^{|}-])/g, "\\$1"),
                    "i"
                  ),
                  r = P.current,
                  l = Math.min(10, n),
                  o = 0;
                k(void 0), E([]);
                let s = [],
                  c = async () => {
                    if (void 0 === d) return;
                    let e = performance.now(),
                      u = n - o,
                      p = d(
                        {
                          x: 0,
                          y: r,
                          width: i.length,
                          height: Math.min(l, u, n - r),
                        },
                        S.current.signal
                      );
                    "function" == typeof p && (p = await p());
                    let g = !1;
                    for (let [e, n] of p.entries())
                      for (let [i, l] of n.entries()) {
                        let n;
                        switch (l.kind) {
                          case f.p6.Text:
                          case f.p6.Number:
                            n = l.displayData;
                            break;
                          case f.p6.Uri:
                          case f.p6.Markdown:
                            n = l.data;
                            break;
                          case f.p6.Boolean:
                            n =
                              "boolean" == typeof l.data
                                ? l.data.toString()
                                : void 0;
                            break;
                          case f.p6.Image:
                          case f.p6.Bubble:
                            n = l.data.join("\uD83D\uDC33");
                            break;
                          case f.p6.Custom:
                            n = l.copyData;
                        }
                        void 0 !== n &&
                          t.test(n) &&
                          (s.push([i, e + r]), (g = !0));
                      }
                    let m = performance.now();
                    g && E([...s]), (o += p.length), (0, a.hu)(o <= n);
                    let v = C.current?.selectedIndex ?? -1;
                    k({ results: s.length, rowsSearched: o, selectedIndex: v }),
                      h?.(s, v),
                      r + l >= n ? (r = 0) : (r += l),
                      (l = Math.ceil((10 / Math.max(m - e, 1)) * l)),
                      o < n &&
                        s.length < 1e3 &&
                        (M.current = window.requestAnimationFrame(c));
                  };
                I(), (M.current = window.requestAnimationFrame(c));
              },
              [I, i.length, d, h, n]
            ),
            H = o.useCallback(() => {
              g?.(), k(void 0), E([]), h?.([], -1), I(), t?.current?.focus();
            }, [I, t, g, h]),
            A = o.useCallback(
              (e) => {
                b(e.target.value),
                  void 0 === c &&
                    ("" === e.target.value
                      ? (k(void 0), E([]), I())
                      : z(e.target.value));
              },
              [z, I, b, c]
            );
          o.useEffect(() => {
            p &&
              null !== l.current &&
              (b(""), l.current.focus({ preventScroll: !0 }));
          }, [p, l, b]);
          let L = o.useCallback(
              (e) => {
                if ((e?.stopPropagation?.(), void 0 === x)) return;
                let t = (x.selectedIndex + 1) % x.results;
                k({ ...x, selectedIndex: t }), h?.(T, t);
              },
              [x, h, T]
            ),
            O = o.useCallback(
              (e) => {
                if ((e?.stopPropagation?.(), void 0 === x)) return;
                let t = (x.selectedIndex - 1) % x.results;
                t < 0 && (t += x.results),
                  k({ ...x, selectedIndex: t }),
                  h?.(T, t);
              },
              [h, T, x]
            ),
            D = o.useCallback(
              (e) => {
                ((e.ctrlKey || e.metaKey) && "KeyF" === e.nativeEvent.code) ||
                "Escape" === e.key
                  ? (H(), e.stopPropagation(), e.preventDefault())
                  : "Enter" === e.key && (e.shiftKey ? O() : L());
              },
              [H, L, O]
            );
          o.useEffect(
            () => () => {
              I();
            },
            [I]
          );
          let [F, _] = o.useState(!1);
          o.useEffect(() => {
            if (p) _(!0);
            else {
              let e = setTimeout(() => _(!1), 150);
              return () => clearTimeout(e);
            }
          }, [p]);
          let $ = o.useMemo(() => {
            let e;
            if (!p && !F) return null;
            void 0 !== x &&
              ((e =
                x.results >= 1e3
                  ? "over 1000"
                  : `${x.results} result${1 !== x.results ? "s" : ""}`),
              x.selectedIndex >= 0 && (e = `${x.selectedIndex + 1} of ${e}`));
            let t = (e) => {
                e.stopPropagation();
              },
              r = Math.floor(((x?.rowsSearched ?? 0) / n) * 100),
              i = { width: `${r}%` };
            return o.createElement(
              e7,
              {
                className: p ? "" : "out",
                onMouseDown: t,
                onMouseMove: t,
                onMouseUp: t,
                onClick: t,
              },
              o.createElement(
                "div",
                { className: "gdg-search-bar-inner" },
                o.createElement("input", {
                  id: m,
                  "aria-hidden": !p,
                  "data-testid": "search-input",
                  ref: l,
                  onChange: A,
                  value: y,
                  tabIndex: p ? void 0 : -1,
                  onKeyDownCapture: D,
                }),
                o.createElement(
                  "button",
                  {
                    "aria-label": "Previous Result",
                    "aria-hidden": !p,
                    tabIndex: p ? void 0 : -1,
                    onClick: O,
                    disabled: (x?.results ?? 0) === 0,
                  },
                  e6
                ),
                o.createElement(
                  "button",
                  {
                    "aria-label": "Next Result",
                    "aria-hidden": !p,
                    tabIndex: p ? void 0 : -1,
                    onClick: L,
                    disabled: (x?.results ?? 0) === 0,
                  },
                  e5
                ),
                void 0 !== g &&
                  o.createElement(
                    "button",
                    {
                      "aria-label": "Close Search",
                      "aria-hidden": !p,
                      "data-testid": "search-close-button",
                      tabIndex: p ? void 0 : -1,
                      onClick: H,
                    },
                    e4
                  )
              ),
              void 0 !== x
                ? o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                      "div",
                      { className: "gdg-search-status" },
                      o.createElement(
                        "div",
                        { "data-testid": "search-result-area" },
                        e
                      )
                    ),
                    o.createElement("div", {
                      className: "gdg-search-progress",
                      style: i,
                    })
                  )
                : o.createElement(
                    "div",
                    { className: "gdg-search-status" },
                    o.createElement("label", { htmlFor: m }, "Type to search")
                  )
            );
          }, [p, F, x, n, m, l, A, y, D, O, L, g, H]);
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(e3, {
              prelightCells: T,
              accessibilityHeight: e.accessibilityHeight,
              canvasRef: e.canvasRef,
              cellXOffset: e.cellXOffset,
              cellYOffset: e.cellYOffset,
              className: e.className,
              clientSize: e.clientSize,
              columns: e.columns,
              disabledRows: e.disabledRows,
              enableGroups: e.enableGroups,
              fillHandle: e.fillHandle,
              firstColAccessible: e.firstColAccessible,
              nonGrowWidth: e.nonGrowWidth,
              fixedShadowX: e.fixedShadowX,
              fixedShadowY: e.fixedShadowY,
              freezeColumns: e.freezeColumns,
              getCellContent: e.getCellContent,
              getCellRenderer: e.getCellRenderer,
              getGroupDetails: e.getGroupDetails,
              getRowThemeOverride: e.getRowThemeOverride,
              groupHeaderHeight: e.groupHeaderHeight,
              headerHeight: e.headerHeight,
              highlightRegions: e.highlightRegions,
              imageWindowLoader: e.imageWindowLoader,
              initialSize: e.initialSize,
              isFilling: e.isFilling,
              isFocused: e.isFocused,
              lockColumns: e.lockColumns,
              maxColumnWidth: e.maxColumnWidth,
              minColumnWidth: e.minColumnWidth,
              onHeaderMenuClick: e.onHeaderMenuClick,
              onMouseMove: e.onMouseMove,
              onVisibleRegionChanged: e.onVisibleRegionChanged,
              overscrollX: e.overscrollX,
              overscrollY: e.overscrollY,
              preventDiagonalScrolling: e.preventDiagonalScrolling,
              rightElement: e.rightElement,
              rightElementProps: e.rightElementProps,
              rowHeight: e.rowHeight,
              rows: e.rows,
              scrollRef: e.scrollRef,
              selection: e.selection,
              theme: e.theme,
              freezeTrailingRows: e.freezeTrailingRows,
              hasAppendRow: e.hasAppendRow,
              translateX: e.translateX,
              translateY: e.translateY,
              verticalBorder: e.verticalBorder,
              onColumnProposeMove: e.onColumnProposeMove,
              drawFocusRing: e.drawFocusRing,
              drawCell: e.drawCell,
              drawHeader: e.drawHeader,
              experimental: e.experimental,
              gridRef: e.gridRef,
              headerIcons: e.headerIcons,
              isDraggable: e.isDraggable,
              onCanvasBlur: e.onCanvasBlur,
              onCanvasFocused: e.onCanvasFocused,
              onCellFocused: e.onCellFocused,
              onColumnMoved: e.onColumnMoved,
              onColumnResize: e.onColumnResize,
              onColumnResizeEnd: e.onColumnResizeEnd,
              onColumnResizeStart: e.onColumnResizeStart,
              onContextMenu: e.onContextMenu,
              onDragEnd: e.onDragEnd,
              onDragLeave: e.onDragLeave,
              onDragOverCell: e.onDragOverCell,
              onDragStart: e.onDragStart,
              onDrop: e.onDrop,
              onItemHovered: e.onItemHovered,
              onKeyDown: e.onKeyDown,
              onKeyUp: e.onKeyUp,
              onMouseDown: e.onMouseDown,
              onMouseUp: e.onMouseUp,
              onRowMoved: e.onRowMoved,
              smoothScrollX: e.smoothScrollX,
              smoothScrollY: e.smoothScrollY,
            }),
            $
          );
        },
        e9 = r(20956);
      let te = (0, eJ.z)("input")({
          name: "RenameInput",
          class: "gdg-r17m35ur",
          propsAsIs: !1,
          vars: {
            "r17m35ur-0": [(e) => Math.max(16, e.targetHeight - 10), "px"],
          },
        }),
        tt = (e) => {
          let {
              bounds: t,
              group: r,
              onClose: n,
              canvasBounds: i,
              onFinish: l,
            } = e,
            [a, s] = o.useState(r);
          return o.createElement(
            e9.Z,
            {
              style: {
                position: "absolute",
                left: t.x - i.left + 1,
                top: t.y - i.top,
                width: t.width - 2,
                height: t.height,
              },
              className: "gdg-c1tqibwd",
              onClickOutside: n,
            },
            o.createElement(te, {
              targetHeight: t.height,
              "data-testid": "group-rename-input",
              value: a,
              onBlur: n,
              onFocus: (e) => e.target.setSelectionRange(0, a.length),
              onChange: (e) => s(e.target.value),
              onKeyDown: (e) => {
                "Enter" === e.key ? l(a) : "Escape" === e.key && n();
              },
              autoFocus: !0,
            })
          );
        };
      function tr(e, t, r, n, i, l, o, a, s) {
        let c = 0,
          u =
            void 0 === i
              ? []
              : i.map((r) => {
                  let i = (function (e, t, r, n) {
                    let i = n(t);
                    return i?.measure?.(e, t, r) ?? 150;
                  })(e, r[n], t, s);
                  return (c = Math.max(c, i)), i;
                });
        if (u.length > 5 && a) {
          c = 0;
          let e = 0;
          for (let t of u) e += t;
          let t = e / u.length;
          for (let e = 0; e < u.length; e++)
            u[e] >= 2 * t ? (u[e] = 0) : (c = Math.max(c, u[e]));
        }
        let d = Math.max(
          Math.ceil(l),
          Math.min(
            Math.floor(o),
            Math.ceil(
              (c = Math.max(
                c,
                e.measureText(r.title).width + 16 + (void 0 === r.icon ? 0 : 28)
              ))
            )
          )
        );
        return { ...r, width: d };
      }
      function tn(e, t, r) {
        let n = (function e(t, r) {
          var n;
          if (0 === t.length) return !1;
          if (t.includes("|")) {
            for (let n of t.split("|")) if (e(n, r)) return !0;
            return !1;
          }
          let i = !1,
            l = !1,
            o = !1,
            a = !1,
            s = t.split("+");
          if (
            void 0 === (n = s.pop()) ||
            (n.length > 1 && n.startsWith("_")
              ? Number.parseInt(n.slice(1)) !== r.keyCode
              : 1 === n.length && n >= "a" && n <= "z"
                ? n.toUpperCase().codePointAt(0) !== r.keyCode
                : n !== r.key)
          )
            return !1;
          if ("any" === s[0]) return !0;
          for (let e of s)
            switch (e) {
              case "ctrl":
                i = !0;
                break;
              case "shift":
                l = !0;
                break;
              case "alt":
                o = !0;
                break;
              case "meta":
                a = !0;
                break;
              case "primary":
                eV.value ? (a = !0) : (i = !0);
            }
          return (
            r.altKey === o &&
            r.ctrlKey === i &&
            r.shiftKey === l &&
            r.metaKey === a
          );
        })(e, t);
        return n && (r.didMatch = !0), n;
      }
      function ti(e, t) {
        return (
          (t ? /[\t\n",]/ : /[\t\n"]/).test(e) &&
            (e = `"${e.replace(/"/g, '""')}"`),
          e
        );
      }
      function tl(e) {
        return e
          .replace(/\t/g, "    ")
          .replace(/ {2,}/g, (e) => "<span> </span>".repeat(e.length));
      }
      function to(e) {
        return (
          '"' +
          e
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;") +
          '"'
        );
      }
      function ta(e) {
        let t;
        let r = document.createElement("html");
        r.innerHTML = e.replace(/&nbsp;/g, " ");
        let n = r.querySelector("table");
        if (null === n) return;
        let i = [n],
          l = [];
        for (; i.length > 0; ) {
          let e = i.pop();
          if (void 0 === e) break;
          if (e instanceof HTMLTableElement || "TBODY" === e.nodeName)
            i.push(...[...e.children].reverse());
          else if (e instanceof HTMLTableRowElement)
            void 0 !== t && l.push(t),
              (t = []),
              i.push(...[...e.children].reverse());
          else if (e instanceof HTMLTableCellElement) {
            let r = e.cloneNode(!0),
              n =
                1 === r.children.length && "P" === r.children[0].nodeName
                  ? r.children[0]
                  : null,
              i = n?.children.length === 1 && "FONT" === n.children[0].nodeName;
            for (let e of r.querySelectorAll("br")) e.replaceWith("\n");
            let l = r.getAttribute("gdg-raw-value"),
              o = r.getAttribute("gdg-format") ?? "string";
            if (null !== r.querySelector("a"))
              t?.push({
                rawValue: r.querySelector("a")?.getAttribute("href") ?? "",
                formatted: r.textContent ?? "",
                format: o,
              });
            else if (null !== r.querySelector("ol")) {
              let e = r.querySelectorAll("li");
              t?.push({
                rawValue: [...e].map(
                  (e) => e.getAttribute("gdg-raw-value") ?? ""
                ),
                formatted: [...e].map((e) => e.textContent ?? ""),
                format: "string-array",
              });
            } else if (null !== l)
              t?.push({
                rawValue: l
                  .replace(/&quot;/g, '"')
                  .replace(/&lt;/g, "<")
                  .replace(/&gt;/g, ">")
                  .replace(/&amp;/g, "&"),
                formatted: r.textContent ?? "",
                format: o,
              });
            else {
              let e = r.textContent ?? "";
              i && (e = e.replace(/\n(?!\n)/g, "")),
                t?.push({ rawValue: e ?? "", formatted: e ?? "", format: o });
            }
          }
        }
        return void 0 !== t && l.push(t), l;
      }
      function ts(e) {
        return (
          e.startsWith('"') &&
            e.endsWith('"') &&
            (e = e.slice(1, -1).replace(/""/g, '"')),
          e
        );
      }
      function tc(e, t, r) {
        let n = (function (e, t) {
            let r = e.map((e, r) => {
              let n = t[r];
              return e.map((e) =>
                void 0 !== e.span && e.span[0] !== n
                  ? { formatted: "", rawValue: "", format: "string" }
                  : (function (e) {
                      if (void 0 !== e.copyData)
                        return {
                          formatted: e.copyData,
                          rawValue: e.copyData,
                          format: "string",
                        };
                      switch (e.kind) {
                        case f.p6.Boolean:
                          return {
                            formatted:
                              !0 === e.data
                                ? "TRUE"
                                : !1 === e.data
                                  ? "FALSE"
                                  : e.data === f.sd
                                    ? "INDETERMINATE"
                                    : "",
                            rawValue: e.data,
                            format: "boolean",
                          };
                        case f.p6.Custom:
                          return {
                            formatted: e.copyData,
                            rawValue: e.copyData,
                            format: "string",
                          };
                        case f.p6.Image:
                        case f.p6.Bubble:
                          return {
                            formatted: e.data,
                            rawValue: e.data,
                            format: "string-array",
                          };
                        case f.p6.Drilldown:
                          return {
                            formatted: e.data.map((e) => e.text),
                            rawValue: e.data.map((e) => e.text),
                            format: "string-array",
                          };
                        case f.p6.Text:
                          return {
                            formatted: e.displayData ?? e.data,
                            rawValue: e.data,
                            format: "string",
                          };
                        case f.p6.Uri:
                          return {
                            formatted: e.displayData ?? e.data,
                            rawValue: e.data,
                            format: "url",
                          };
                        case f.p6.Markdown:
                        case f.p6.RowID:
                          return {
                            formatted: e.data,
                            rawValue: e.data,
                            format: "string",
                          };
                        case f.p6.Number:
                          return {
                            formatted: e.displayData,
                            rawValue: e.data,
                            format: "number",
                          };
                        case f.p6.Loading:
                          return {
                            formatted: "#LOADING",
                            rawValue: "",
                            format: "string",
                          };
                        case f.p6.Protected:
                          return {
                            formatted: "************",
                            rawValue: "",
                            format: "string",
                          };
                        default:
                          (0, a.vE)(e);
                      }
                    })(e)
              );
            });
            return {
              textPlain: (function (e) {
                let t = [];
                for (let r of e) {
                  let e = [];
                  for (let t of r)
                    "url" === t.format
                      ? e.push(t.rawValue?.toString() ?? "")
                      : "string-array" === t.format
                        ? e.push(t.formatted.map((e) => ti(e, !0)).join(","))
                        : e.push(ti(t.formatted, !1));
                  t.push(e.join("	"));
                }
                return t.join("\n");
              })(r),
              textHtml: (function (e) {
                let t = [];
                for (let r of (t.push(
                  '<style type="text/css"><!--br {mso-data-placement:same-cell;}--></style>',
                  "<table><tbody>"
                ),
                e)) {
                  for (let e of (t.push("<tr>"), r)) {
                    let r = `gdg-format="${e.format}"`;
                    "url" === e.format
                      ? t.push(
                          `<td ${r}><a href="${e.rawValue}">${tl(
                            e.formatted
                          )}</a></td>`
                        )
                      : "string-array" === e.format
                        ? t.push(
                            `<td ${r}><ol>${e.formatted
                              .map(
                                (t, r) =>
                                  `<li gdg-raw-value=${to(e.rawValue[r])}>` +
                                  tl(t) +
                                  "</li>"
                              )
                              .join("")}</ol></td>`
                          )
                        : t.push(
                            `<td gdg-raw-value=${to(
                              e.rawValue?.toString() ?? ""
                            )} ${r}>${tl(e.formatted)}</td>`
                          );
                  }
                  t.push("</tr>");
                }
                return t.push("</tbody></table>"), t.join("");
              })(r),
            };
          })(e, t),
          i = (e) => {
            window.navigator.clipboard?.writeText(e);
          },
          l = (e, t) =>
            window.navigator.clipboard?.write !== void 0 &&
            (window.navigator.clipboard.write([
              new ClipboardItem({
                "text/plain": new Blob([e], { type: "text/plain" }),
                "text/html": new Blob([t], { type: "text/html" }),
              }),
            ]),
            !0);
        window.navigator.clipboard?.write !== void 0 ||
        r?.clipboardData !== void 0
          ? ((e, t) => {
              try {
                if (void 0 === r || null === r.clipboardData)
                  throw Error("No clipboard data");
                r?.clipboardData?.setData("text/plain", e),
                  r?.clipboardData?.setData("text/html", t);
              } catch {
                l(e, t) || i(e);
              }
            })(n.textPlain, n.textHtml)
          : i(n.textPlain),
          r?.preventDefault();
      }
      function tu(e) {
        return "string" == typeof e ? e : `${e}px`;
      }
      let td = (0, eJ.z)("div")({
          name: "Wrapper",
          class: "gdg-wmyidgi",
          propsAsIs: !1,
          vars: {
            "wmyidgi-0": [(e) => e.innerWidth],
            "wmyidgi-1": [(e) => e.innerHeight],
          },
        }),
        th = (e) => {
          let { inWidth: t, inHeight: r, children: n, ...i } = e;
          return o.createElement(
            td,
            { innerHeight: tu(r), innerWidth: tu(t), ...i },
            n
          );
        },
        tf = {
          downFill: !1,
          rightFill: !1,
          clear: !0,
          closeOverlay: !0,
          acceptOverlayDown: !0,
          acceptOverlayUp: !0,
          acceptOverlayLeft: !0,
          acceptOverlayRight: !0,
          copy: !0,
          paste: !0,
          cut: !0,
          search: !1,
          delete: !0,
          activateCell: !0,
          scrollToSelectedCell: !0,
          goToFirstCell: !0,
          goToFirstColumn: !0,
          goToFirstRow: !0,
          goToLastCell: !0,
          goToLastColumn: !0,
          goToLastRow: !0,
          goToNextPage: !0,
          goToPreviousPage: !0,
          selectToFirstCell: !0,
          selectToFirstColumn: !0,
          selectToFirstRow: !0,
          selectToLastCell: !0,
          selectToLastColumn: !0,
          selectToLastRow: !0,
          selectAll: !0,
          selectRow: !0,
          selectColumn: !0,
          goUpCell: !0,
          goRightCell: !0,
          goDownCell: !0,
          goLeftCell: !0,
          goUpCellRetainSelection: !0,
          goRightCellRetainSelection: !0,
          goDownCellRetainSelection: !0,
          goLeftCellRetainSelection: !0,
          selectGrowUp: !0,
          selectGrowRight: !0,
          selectGrowDown: !0,
          selectGrowLeft: !0,
        };
      function tp(e, t) {
        return !0 === e ? t : !1 === e ? "" : e;
      }
      function tg(e) {
        let t = eV.value;
        return {
          activateCell: tp(e.activateCell, " |Enter|shift+Enter"),
          clear: tp(e.clear, "any+Escape"),
          closeOverlay: tp(e.closeOverlay, "any+Escape"),
          acceptOverlayDown: tp(e.acceptOverlayDown, "Enter"),
          acceptOverlayUp: tp(e.acceptOverlayUp, "shift+Enter"),
          acceptOverlayLeft: tp(e.acceptOverlayLeft, "shift+Tab"),
          acceptOverlayRight: tp(e.acceptOverlayRight, "Tab"),
          copy: e.copy,
          cut: e.cut,
          delete: tp(e.delete, t ? "Backspace|Delete" : "Delete"),
          downFill: tp(e.downFill, "primary+_68"),
          scrollToSelectedCell: tp(e.scrollToSelectedCell, "primary+Enter"),
          goDownCell: tp(e.goDownCell, "ArrowDown"),
          goDownCellRetainSelection: tp(
            e.goDownCellRetainSelection,
            "alt+ArrowDown"
          ),
          goLeftCell: tp(e.goLeftCell, "ArrowLeft|shift+Tab"),
          goLeftCellRetainSelection: tp(
            e.goLeftCellRetainSelection,
            "alt+ArrowLeft"
          ),
          goRightCell: tp(e.goRightCell, "ArrowRight|Tab"),
          goRightCellRetainSelection: tp(
            e.goRightCellRetainSelection,
            "alt+ArrowRight"
          ),
          goUpCell: tp(e.goUpCell, "ArrowUp"),
          goUpCellRetainSelection: tp(e.goUpCellRetainSelection, "alt+ArrowUp"),
          goToFirstCell: tp(e.goToFirstCell, "primary+Home"),
          goToFirstColumn: tp(e.goToFirstColumn, "Home|primary+ArrowLeft"),
          goToFirstRow: tp(e.goToFirstRow, "primary+ArrowUp"),
          goToLastCell: tp(e.goToLastCell, "primary+End"),
          goToLastColumn: tp(e.goToLastColumn, "End|primary+ArrowRight"),
          goToLastRow: tp(e.goToLastRow, "primary+ArrowDown"),
          goToNextPage: tp(e.goToNextPage, "PageDown"),
          goToPreviousPage: tp(e.goToPreviousPage, "PageUp"),
          paste: e.paste,
          rightFill: tp(e.rightFill, "primary+_82"),
          search: tp(e.search, "primary+f"),
          selectAll: tp(e.selectAll, "primary+a"),
          selectColumn: tp(e.selectColumn, "ctrl+ "),
          selectGrowDown: tp(e.selectGrowDown, "shift+ArrowDown"),
          selectGrowLeft: tp(e.selectGrowLeft, "shift+ArrowLeft"),
          selectGrowRight: tp(e.selectGrowRight, "shift+ArrowRight"),
          selectGrowUp: tp(e.selectGrowUp, "shift+ArrowUp"),
          selectRow: tp(e.selectRow, "shift+ "),
          selectToFirstCell: tp(e.selectToFirstCell, "primary+shift+Home"),
          selectToFirstColumn: tp(
            e.selectToFirstColumn,
            "primary+shift+ArrowLeft"
          ),
          selectToFirstRow: tp(e.selectToFirstRow, "primary+shift+ArrowUp"),
          selectToLastCell: tp(e.selectToLastCell, "primary+shift+End"),
          selectToLastColumn: tp(
            e.selectToLastColumn,
            "primary+shift+ArrowRight"
          ),
          selectToLastRow: tp(e.selectToLastRow, "primary+shift+ArrowDown"),
        };
      }
      let tm = o.lazy(async () => await r.e(9610).then(r.bind(r, 89610))),
        tv = 0;
      function tw(e, t) {
        return void 0 === e ||
          0 === t ||
          (0 === e.columns.length && void 0 === e.current)
          ? e
          : {
              current:
                void 0 === e.current
                  ? void 0
                  : {
                      cell: [e.current.cell[0] + t, e.current.cell[1]],
                      range: { ...e.current.range, x: e.current.range.x + t },
                      rangeStack: e.current.rangeStack.map((e) => ({
                        ...e,
                        x: e.x + t,
                      })),
                    },
              rows: e.rows,
              columns: e.columns.offset(t),
            };
      }
      let ty = { kind: f.p6.Loading, allowOverlay: !1 },
        tb = { columns: f.EV.empty(), rows: f.EV.empty(), current: void 0 },
        tx = o.forwardRef((e, t) => {
          var r, n, i, l, m, v;
          let [w, y] = o.useState(tb),
            [b, x] = o.useState(),
            k = o.useRef(null),
            C = o.useRef(null),
            [S, E] = o.useState(),
            T = o.useRef(null),
            I = o.useRef(),
            P = "undefined" == typeof window ? null : window,
            {
              rowMarkers: z = "none",
              rowMarkerWidth: O,
              imageEditorOverride: D,
              getRowThemeOverride: F,
              markdownDivCreateNode: _,
              width: N,
              height: W,
              columns: B,
              rows: j,
              getCellContent: V,
              onCellClicked: X,
              onCellActivated: U,
              onFillPattern: K,
              onFinishedEditing: Y,
              coercePasteValue: G,
              drawHeader: q,
              drawCell: Z,
              onHeaderClicked: Q,
              onColumnProposeMove: J,
              spanRangeBehavior: ee = "default",
              onGroupHeaderClicked: et,
              onCellContextMenu: er,
              className: en,
              onHeaderContextMenu: ei,
              getCellsForSelection: el,
              onGroupHeaderContextMenu: eo,
              onGroupHeaderRenamed: ea,
              onCellEdited: es,
              onCellsEdited: eu,
              onSearchResultsChanged: ed,
              searchResults: eh,
              onSearchValueChange: ep,
              searchValue: eg,
              onKeyDown: ev,
              onKeyUp: ew,
              keybindings: ey,
              onRowAppended: eb,
              onColumnMoved: ex,
              validateCell: ek,
              highlightRegions: eC,
              rangeSelect: eS = "rect",
              columnSelect: eM = "multi",
              rowSelect: eE = "multi",
              rangeSelectionBlending: eT = "exclusive",
              columnSelectionBlending: eI = "exclusive",
              rowSelectionBlending: eP = "exclusive",
              onDelete: ez,
              onDragStart: eH,
              onMouseMove: eA,
              onPaste: eL,
              copyHeaders: eO = !1,
              freezeColumns: eD = 0,
              cellActivationBehavior: eF = "second-click",
              rowSelectionMode: e_ = "auto",
              rowMarkerStartIndex: e$ = 1,
              rowMarkerTheme: eN,
              onHeaderMenuClick: eW,
              getGroupDetails: eB,
              onSearchClose: ej,
              onItemHovered: eG,
              onSelectionCleared: eq,
              showSearch: eZ,
              onVisibleRegionChanged: eQ,
              gridSelection: eJ,
              onGridSelectionChange: e0,
              minColumnWidth: e1 = 50,
              maxColumnWidth: e2 = 500,
              maxColumnAutoWidth: e3,
              provideEditor: e7,
              trailingRowOptions: e6,
              freezeTrailingRows: e5 = 0,
              allowedFillDirections: e4 = "orthogonal",
              scrollOffsetX: e9,
              scrollOffsetY: te,
              verticalBorder: ti,
              onDragOverCell: tl,
              onDrop: to,
              onColumnResize: tu,
              onColumnResizeEnd: td,
              onColumnResizeStart: tp,
              customRenderers: tx,
              fillHandle: tk,
              drawFocusRing: tC,
              experimental: tS,
              fixedShadowX: tM,
              fixedShadowY: tR,
              headerIcons: tE,
              imageWindowLoader: tT,
              initialSize: tI,
              isDraggable: tP,
              onDragLeave: tz,
              onRowMoved: tH,
              overscrollX: tA,
              overscrollY: tL,
              preventDiagonalScrolling: tO,
              rightElement: tD,
              rightElementProps: tF,
              trapFocus: t_ = !1,
              smoothScrollX: t$,
              smoothScrollY: tN,
              scaleToRem: tW = !1,
              rowHeight: tB = 34,
              headerHeight: tj = 36,
              groupHeaderHeight: tV = tj,
              theme: tX,
              isOutsideClick: tU,
              renderers: tK,
            } = e,
            tY = Math.max(e1, 20),
            tG = Math.max(e2, tY),
            tq = Math.max(e3 ?? tG, tY),
            tZ = o.useMemo(
              () =>
                "undefined" == typeof window
                  ? { fontSize: "16px" }
                  : window.getComputedStyle(document.documentElement),
              []
            ).fontSize,
            {
              rowHeight: tQ,
              headerHeight: tJ,
              groupHeaderHeight: t0,
              theme: t1,
              overscrollX: t2,
              overscrollY: t3,
            } = (function ({
              rowHeight: e,
              headerHeight: t,
              groupHeaderHeight: r,
              theme: n,
              overscrollX: i,
              overscrollY: l,
              scaleToRem: a,
              remSize: s,
            }) {
              let [c, u, d, h, f, p] = o.useMemo(() => {
                if (!a || 16 === s) return [e, t, r, n, i, l];
                let o = s / 16,
                  c = (0, ec.Zu)();
                return [
                  "number" == typeof e ? e * o : (t) => Math.ceil(e(t) * o),
                  Math.ceil(t * o),
                  Math.ceil(r * o),
                  {
                    ...n,
                    headerIconSize: (n?.headerIconSize ?? c.headerIconSize) * o,
                    cellHorizontalPadding:
                      (n?.cellHorizontalPadding ?? c.cellHorizontalPadding) * o,
                    cellVerticalPadding:
                      (n?.cellVerticalPadding ?? c.cellVerticalPadding) * o,
                  },
                  Math.ceil((i ?? 0) * o),
                  Math.ceil((l ?? 0) * o),
                ];
              }, [r, t, i, l, s, e, a, n]);
              return {
                rowHeight: c,
                headerHeight: u,
                groupHeaderHeight: d,
                theme: h,
                overscrollX: f,
                overscrollY: p,
              };
            })({
              groupHeaderHeight: tV,
              headerHeight: tj,
              overscrollX: tA,
              overscrollY: tL,
              remSize: o.useMemo(() => Number.parseFloat(tZ), [tZ]),
              rowHeight: tB,
              scaleToRem: tW,
              theme: tX,
            }),
            t7 = (function (e) {
              let t = (function (e) {
                let t = o.useRef(e);
                return (
                  (0, a.vZ)(e, t.current) || (t.current = e),
                  o.useMemo(() => t.current, [t.current])
                );
              })(e);
              return o.useMemo(() => {
                if (void 0 === t) return tg(tf);
                let e = {
                  ...t,
                  goToNextPage:
                    t?.goToNextPage ?? t?.pageDown ?? tf.goToNextPage,
                  goToPreviousPage:
                    t?.goToPreviousPage ?? t?.pageUp ?? tf.goToPreviousPage,
                  goToFirstCell:
                    t?.goToFirstCell ?? t?.first ?? tf.goToFirstCell,
                  goToLastCell: t?.goToLastCell ?? t?.last ?? tf.goToLastCell,
                  selectToFirstCell:
                    t?.selectToFirstCell ?? t?.first ?? tf.selectToFirstCell,
                  selectToLastCell:
                    t?.selectToLastCell ?? t?.last ?? tf.selectToLastCell,
                };
                return tg({ ...tf, ...e });
              }, [t]);
            })(ey),
            t6 = O ?? (j > 1e4 ? 48 : j > 1e3 ? 44 : j > 100 ? 36 : 32),
            t5 = "none" !== z,
            t4 = t5 ? 1 : 0,
            t8 = void 0 !== eb,
            t9 = e6?.sticky === !0,
            [re, rt] = o.useState(!1),
            rr = o.useCallback(() => {
              void 0 !== ej ? ej() : rt(!1);
            }, [ej]),
            rn =
              o.useMemo(
                () => (void 0 === eJ ? void 0 : tw(eJ, t4)),
                [eJ, t4]
              ) ?? w,
            ri = o.useRef(new AbortController());
          o.useEffect(
            () => () => {
              ri?.current.abort();
            },
            []
          );
          let [rl, ro] = (function (e, t, r, n, i) {
              let l = o.useCallback(
                  (r) => {
                    if (!0 === e) {
                      let e = [];
                      for (let n = r.y; n < r.y + r.height; n++) {
                        let l = [];
                        for (let e = r.x; e < r.x + r.width; e++)
                          e < 0 || n >= i
                            ? l.push({ kind: f.p6.Loading, allowOverlay: !1 })
                            : l.push(t([e, n]));
                        e.push(l);
                      }
                      return e;
                    }
                    return e?.(r, n.signal) ?? [];
                  },
                  [n.signal, t, e, i]
                ),
                a = void 0 !== e ? l : void 0,
                s = o.useCallback(
                  (e) => {
                    if (void 0 === a) return [];
                    let t = { ...e, x: e.x - r };
                    if (t.x < 0) {
                      (t.x = 0), t.width--;
                      let e = a(t, n.signal);
                      return "function" == typeof e
                        ? async () =>
                            (await e()).map((e) => [
                              { kind: f.p6.Loading, allowOverlay: !1 },
                              ...e,
                            ])
                        : e.map((e) => [
                            { kind: f.p6.Loading, allowOverlay: !1 },
                            ...e,
                          ]);
                    }
                    return a(t, n.signal);
                  },
                  [n.signal, a, r]
                );
              return [void 0 !== e ? s : void 0, a];
            })(el, V, t4, ri.current, j),
            ra = o.useCallback(
              (e, t, r) => {
                if (void 0 === ek) return !0;
                let n = [e[0] - t4, e[1]];
                return ek?.(n, t, r);
              },
              [t4, ek]
            ),
            rs = o.useRef(eJ),
            rc = o.useCallback(
              (e, t) => {
                t &&
                  (e = (function (e, t, r, n, i) {
                    let l = e;
                    if (
                      "allowPartial" === n ||
                      void 0 === e.current ||
                      void 0 === t
                    )
                      return e;
                    let o = !1;
                    do {
                      if (e?.current === void 0) break;
                      let n = e.current?.range,
                        a = [];
                      if (n.width > 2) {
                        let e = t(
                          { x: n.x, y: n.y, width: 1, height: n.height },
                          i.signal
                        );
                        if ("function" == typeof e) return l;
                        a.push(...e);
                        let r = t(
                          {
                            x: n.x + n.width - 1,
                            y: n.y,
                            width: 1,
                            height: n.height,
                          },
                          i.signal
                        );
                        if ("function" == typeof r) return l;
                        a.push(...r);
                      } else {
                        let e = t(
                          { x: n.x, y: n.y, width: n.width, height: n.height },
                          i.signal
                        );
                        if ("function" == typeof e) return l;
                        a.push(...e);
                      }
                      let s = n.x - r,
                        c = n.x + n.width - 1 - r;
                      for (let e of a)
                        for (let t of e)
                          void 0 !== t.span &&
                            ((s = Math.min(t.span[0], s)),
                            (c = Math.max(t.span[1], c)));
                      s === n.x - r && c === n.x + n.width - 1 - r
                        ? (o = !0)
                        : (e = {
                            current: {
                              cell: e.current.cell ?? [0, 0],
                              range: {
                                x: s + r,
                                y: n.y,
                                width: c - s + 1,
                                height: n.height,
                              },
                              rangeStack: e.current.rangeStack,
                            },
                            columns: e.columns,
                            rows: e.rows,
                          });
                    } while (!o);
                    return e;
                  })(e, rl, t4, ee, ri.current)),
                  void 0 !== e0
                    ? ((rs.current = tw(e, -t4)), e0(rs.current))
                    : y(e);
              },
              [e0, rl, t4, ee]
            ),
            ru = g(
              tu,
              o.useCallback(
                (e, t, r, n) => {
                  tu?.(B[r - t4], t, r - t4, n);
                },
                [tu, t4, B]
              )
            ),
            rd = g(
              td,
              o.useCallback(
                (e, t, r, n) => {
                  td?.(B[r - t4], t, r - t4, n);
                },
                [td, t4, B]
              )
            ),
            rh = g(
              tp,
              o.useCallback(
                (e, t, r, n) => {
                  tp?.(B[r - t4], t, r - t4, n);
                },
                [tp, t4, B]
              )
            ),
            rf = g(
              q,
              o.useCallback(
                (e, t) =>
                  q?.({ ...e, columnIndex: e.columnIndex - t4 }, t) ?? !1,
                [q, t4]
              )
            ),
            rp = g(
              Z,
              o.useCallback(
                (e, t) => Z?.({ ...e, col: e.col - t4 }, t) ?? !1,
                [Z, t4]
              )
            ),
            rg = o.useCallback(
              (e) => {
                if (void 0 !== ez) {
                  let t = ez(tw(e, -t4));
                  return "boolean" == typeof t ? t : tw(t, t4);
                }
                return !0;
              },
              [ez, t4]
            ),
            [rm, rv, rw] =
              ((r = rn),
              (n = rc),
              (i = eT),
              (l = eI),
              (m = eP),
              (v = eS),
              [
                o.useCallback(
                  (e, t, o, a) => {
                    ("cell" === v || "multi-cell" === v) &&
                      void 0 !== e &&
                      (e = {
                        ...e,
                        range: {
                          x: e.cell[0],
                          y: e.cell[1],
                          width: 1,
                          height: 1,
                        },
                      });
                    let s = "mixed" === i && (o || "drag" === a),
                      c = "mixed" === l && s,
                      u = "mixed" === m && s,
                      d = {
                        current:
                          void 0 === e
                            ? void 0
                            : {
                                ...e,
                                rangeStack:
                                  "drag" === a
                                    ? r.current?.rangeStack ?? []
                                    : [],
                              },
                        columns: c ? r.columns : f.EV.empty(),
                        rows: u ? r.rows : f.EV.empty(),
                      };
                    o &&
                      ("multi-rect" === v || "multi-cell" === v) &&
                      void 0 !== d.current &&
                      void 0 !== r.current &&
                      (d = {
                        ...d,
                        current: {
                          ...d.current,
                          rangeStack: [
                            ...r.current.rangeStack,
                            r.current.range,
                          ],
                        },
                      }),
                      n(d, t);
                  },
                  [l, r, i, v, m, n]
                ),
                o.useCallback(
                  (e, t, o) => {
                    let a;
                    if (
                      ((e = e ?? r.rows),
                      void 0 !== t && (e = e.add(t)),
                      "exclusive" === m && e.length > 0)
                    )
                      a = { current: void 0, columns: f.EV.empty(), rows: e };
                    else {
                      let t = o && "mixed" === i,
                        n = o && "mixed" === l;
                      a = {
                        current: t ? r.current : void 0,
                        columns: n ? r.columns : f.EV.empty(),
                        rows: e,
                      };
                    }
                    n(a, !1);
                  },
                  [l, r, i, m, n]
                ),
                o.useCallback(
                  (e, t, o) => {
                    let a;
                    if (
                      ((e = e ?? r.columns),
                      void 0 !== t && (e = e.add(t)),
                      "exclusive" === l && e.length > 0)
                    )
                      a = { current: void 0, rows: f.EV.empty(), columns: e };
                    else {
                      let t = o && "mixed" === i,
                        n = o && "mixed" === m;
                      a = {
                        current: t ? r.current : void 0,
                        rows: n ? r.rows : f.EV.empty(),
                        columns: e,
                      };
                    }
                    n(a, !1);
                  },
                  [l, r, i, m, n]
                ),
              ]),
            ry = o.useMemo(() => (0, ec.yR)((0, ec.Zu)(), t1), [t1]),
            [rb, rx] = o.useState([0, 0, 0]),
            rk = o.useMemo(() => {
              if (void 0 === tK) return {};
              let e = {};
              for (let t of tK) e[t.kind] = t;
              return e;
            }, [tK]),
            rC = o.useCallback(
              (e) =>
                e.kind !== f.p6.Custom
                  ? rk[e.kind]
                  : tx?.find((t) => t.isMatch(e)),
              [tx, rk]
            ),
            { sizedColumns: rS, nonGrowWidth: rM } = (function (
              e,
              t,
              r,
              n,
              i,
              l,
              a,
              s,
              c
            ) {
              let u = o.useRef(t),
                d = o.useRef(r),
                h = o.useRef(a);
              (u.current = t), (d.current = r), (h.current = a);
              let [p, g] = o.useMemo(() => {
                if ("undefined" == typeof window) return [null, null];
                let e = document.createElement("canvas");
                return (
                  (e.style.display = "none"),
                  (e.style.opacity = "0"),
                  (e.style.position = "fixed"),
                  [e, e.getContext("2d", { alpha: !1 })]
                );
              }, []);
              o.useLayoutEffect(
                () => (
                  p && document.documentElement.append(p),
                  () => {
                    p?.remove();
                  }
                ),
                [p]
              );
              let m = o.useRef({}),
                v = o.useRef(),
                [w, y] = o.useState();
              return (
                o.useLayoutEffect(() => {
                  let t = d.current;
                  if (void 0 === t || e.every(f.Sq)) return;
                  let r = Math.max(1, 10 - Math.floor(e.length / 1e4)),
                    n = 0;
                  r < u.current && r > 1 && (r--, (n = 1));
                  let i = {
                      x: 0,
                      y: 0,
                      width: e.length,
                      height: Math.min(u.current, r),
                    },
                    l = { x: 0, y: u.current - 1, width: e.length, height: 1 };
                  (async () => {
                    let r;
                    let o = t(i, c.signal),
                      a = n > 0 ? t(l, c.signal) : void 0;
                    (r = "object" == typeof o ? o : await (0, f.rL)(o)),
                      void 0 !== a &&
                        (r =
                          "object" == typeof a
                            ? [...r, ...a]
                            : [...r, ...(await (0, f.rL)(a))]),
                      (v.current = e),
                      y(r);
                  })();
                }, [c.signal, e]),
                o.useMemo(() => {
                  let t = e.every(f.Sq)
                      ? e
                      : null === g
                        ? e.map((e) =>
                            (0, f.Sq)(e) ? e : { ...e, width: 150 }
                          )
                        : ((g.font = h.current.baseFontFull),
                          e.map((t, r) => {
                            if ((0, f.Sq)(t)) return t;
                            if (void 0 !== m.current[t.id])
                              return { ...t, width: m.current[t.id] };
                            if (
                              void 0 === w ||
                              v.current !== e ||
                              void 0 === t.id
                            )
                              return { ...t, width: 150 };
                            let n = tr(g, a, t, r, w, i, l, !0, s);
                            return (m.current[t.id] = n.width), n;
                          })),
                    r = 0,
                    o = 0,
                    c = [];
                  for (let [e, n] of t.entries())
                    (r += n.width),
                      void 0 !== n.grow &&
                        n.grow > 0 &&
                        ((o += n.grow), c.push(e));
                  if (r < n && c.length > 0) {
                    let e = [...t],
                      i = n - r,
                      l = i;
                    for (let r = 0; r < c.length; r++) {
                      let n = c[r],
                        a = (t[n].grow ?? 0) / o,
                        s =
                          r === c.length - 1
                            ? l
                            : Math.min(l, Math.floor(i * a));
                      (e[n] = {
                        ...t[n],
                        growOffset: s,
                        width: t[n].width + s,
                      }),
                        (l -= s);
                    }
                    t = e;
                  }
                  return { sizedColumns: t, nonGrowWidth: r };
                }, [n, e, g, w, a, i, l, s])
              );
            })(
              B,
              j,
              ro,
              rb[0] - (0 === t4 ? 0 : t6) - rb[2],
              tY,
              tq,
              ry,
              rC,
              ri.current
            );
          "none" !== z && (rM += t6);
          let rR = o.useMemo(() => rS.some((e) => void 0 !== e.group), [rS]),
            rE = rR ? tJ + t0 : tJ,
            rT = rn.rows.length,
            rI = "none" === z ? "" : 0 === rT ? f.YK : rT === j ? f.qT : f.iJ,
            rP = o.useMemo(
              () =>
                "none" === z
                  ? rS
                  : [
                      {
                        title: rI,
                        width: t6,
                        icon: void 0,
                        hasMenu: !1,
                        style: "normal",
                        themeOverride: eN,
                      },
                      ...rS,
                    ],
              [rS, t6, z, rI, eN]
            ),
            [rz, rH] = o.useMemo(
              () => [
                void 0 !== te && "number" == typeof tQ
                  ? Math.floor(te / tQ)
                  : 0,
                void 0 !== te && "number" == typeof tQ ? -(te % tQ) : 0,
              ],
              [te, tQ]
            ),
            rA = o.useRef({ height: 1, width: 1, x: 0, y: 0 }),
            rL = o.useMemo(
              () => ({
                x: rA.current.x,
                y: rz,
                width: rA.current.width ?? 1,
                height: rA.current.height ?? 1,
                ty: rH,
              }),
              [rH, rz]
            ),
            rO = o.useRef(!1),
            [rD, rF, r_] = (function (e) {
              let t = o.useRef([R, e]);
              t.current[1] !== e && (t.current[0] = e), (t.current[1] = e);
              let [r, n] = o.useState(e),
                [, i] = o.useState(),
                l = o.useCallback((e) => {
                  let r = t.current[0];
                  (r === R || (e = "function" == typeof e ? e(r) : e) !== r) &&
                    (r !== R && i({}),
                    n((t) => ("function" == typeof e ? e(r === R ? t : r) : e)),
                    (t.current[0] = R));
                }, []),
                a = o.useCallback(() => {
                  (t.current[0] = R), i({});
                }, []);
              return [t.current[0] === R ? r : t.current[0], l, a];
            })(rL);
          rA.current = rD;
          let r$ = (rD.height ?? 1) > 1;
          o.useLayoutEffect(() => {
            void 0 !== te &&
              null !== T.current &&
              r$ &&
              T.current.scrollTop !== te &&
              ((T.current.scrollTop = te),
              T.current.scrollTop !== te && r_(),
              (rO.current = !0));
          }, [te, r$, r_]);
          let rN = (rD.width ?? 1) > 1;
          o.useLayoutEffect(() => {
            void 0 !== e9 &&
              null !== T.current &&
              rN &&
              T.current.scrollLeft !== e9 &&
              ((T.current.scrollLeft = e9),
              T.current.scrollLeft !== e9 && r_(),
              (rO.current = !0));
          }, [e9, rN, r_]);
          let rW = rD.x + t4,
            rB = rD.y,
            rj = o.useRef(null),
            rV = o.useCallback((e) => {
              !0 === e
                ? rj.current?.focus()
                : window.requestAnimationFrame(() => {
                    rj.current?.focus();
                  });
            }, []),
            rX = t8 ? j + 1 : j,
            rU = o.useCallback(
              (e) => {
                let t =
                    0 === t4
                      ? e
                      : e.map((e) => ({
                          ...e,
                          location: [e.location[0] - t4, e.location[1]],
                        })),
                  r = eu?.(t);
                if (!0 !== r) for (let e of t) es?.(e.location, e.value);
                return r;
              },
              [es, eu, t4]
            ),
            [rK, rY] = o.useState(),
            rG =
              void 0 !== rn.current &&
              rn.current.range.width * rn.current.range.height > 1
                ? rn.current.range
                : void 0,
            rq = o.useMemo(() => {
              if (
                (void 0 === eC || 0 === eC.length) &&
                void 0 === rG &&
                void 0 === rK
              )
                return;
              let e = [];
              if (void 0 !== eC)
                for (let t of eC) {
                  let r = rP.length - t.range.x - t4;
                  r > 0 &&
                    e.push({
                      color: t.color,
                      range: {
                        ...t.range,
                        x: t.range.x + t4,
                        width: Math.min(r, t.range.width),
                      },
                      style: t.style,
                    });
                }
              return (
                void 0 !== rK &&
                  e.push({
                    color: ef(ry.accentColor, 0),
                    range: rK,
                    style: "dashed",
                  }),
                void 0 !== rG &&
                  e.push({
                    color: ef(ry.accentColor, 0.5),
                    range: rG,
                    style: "solid-outline",
                  }),
                e.length > 0 ? e : void 0
              );
            }, [rK, rG, eC, rP.length, ry.accentColor, t4]),
            rZ = o.useRef(rP);
          rZ.current = rP;
          let rQ = o.useCallback(
              ([e, t], r = !1) => {
                let n = t8 && t === rX - 1;
                if (0 === e && t5)
                  return n
                    ? ty
                    : {
                        kind: f.$o.Marker,
                        allowOverlay: !1,
                        checked: rn?.rows.hasIndex(t) === !0,
                        markerKind: "clickable-number" === z ? "number" : z,
                        row: e$ + t,
                        drawHandle: void 0 !== tH,
                        cursor: "clickable-number" === z ? "pointer" : void 0,
                      };
                if (n) {
                  let t = e === t4 ? e6?.hint ?? "" : "",
                    r = rZ.current[e];
                  if (r?.trailingRowOptions?.disabled === !0) return ty;
                  {
                    let e = r?.trailingRowOptions?.hint ?? t,
                      n = r?.trailingRowOptions?.addIcon ?? e6?.addIcon;
                    return {
                      kind: f.$o.NewRow,
                      hint: e,
                      allowOverlay: !1,
                      icon: n,
                    };
                  }
                }
                {
                  let n = e - t4;
                  if (r || tS?.strict === !0) {
                    let e = rA.current,
                      r =
                        e.x > n ||
                        n > e.x + e.width ||
                        e.y > t ||
                        t > e.y + e.height ||
                        t >= r5.current,
                      i =
                        n === e.extras?.selected?.[0] &&
                        t === e.extras?.selected[1],
                      l = !1;
                    if (e.extras?.freezeRegions !== void 0) {
                      for (let r of e.extras.freezeRegions)
                        if (eR(r, n, t)) {
                          l = !0;
                          break;
                        }
                    }
                    if (r && !i && !l) return ty;
                  }
                  let i = V([n, t]);
                  return (
                    0 !== t4 &&
                      void 0 !== i.span &&
                      (i = { ...i, span: [i.span[0] + t4, i.span[1] + t4] }),
                    i
                  );
                }
              },
              [
                t8,
                rX,
                t5,
                rn?.rows,
                tH,
                z,
                t4,
                e6?.hint,
                e6?.addIcon,
                tS?.strict,
                V,
                e$,
              ]
            ),
            rJ = o.useCallback(
              (e) => {
                let t = eB?.(e) ?? { name: e };
                return (
                  void 0 !== ea &&
                    "" !== e &&
                    (t = {
                      icon: t.icon,
                      name: t.name,
                      overrideTheme: t.overrideTheme,
                      actions: [
                        ...(t.actions ?? []),
                        {
                          title: "Rename",
                          icon: "renameIcon",
                          onClick: (e) =>
                            nc({ group: t.name, bounds: e.bounds }),
                        },
                      ],
                    }),
                  t
                );
              },
              [eB, ea]
            ),
            r0 = o.useCallback(
              (e) => {
                let [t, r] = e.cell,
                  n = rP[t],
                  i = n?.group !== void 0 ? rJ(n.group)?.overrideTheme : void 0,
                  l = n?.themeOverride,
                  o = F?.(r);
                x({
                  ...e,
                  theme: (0, ec.yR)(ry, i, l, o, e.content.themeOverride),
                });
              },
              [F, rP, rJ, ry]
            ),
            r1 = o.useCallback(
              (e, t, r) => {
                if (void 0 === rn.current) return;
                let [n, i] = rn.current.cell,
                  l = rQ([n, i]);
                if (l.kind !== f.p6.Boolean && l.allowOverlay) {
                  let t = l;
                  if (void 0 !== r)
                    switch (t.kind) {
                      case f.p6.Number: {
                        let e = (0, a.wY)(
                          () => ("-" === r ? -0 : Number.parseFloat(r)),
                          0
                        );
                        t = { ...t, data: Number.isNaN(e) ? 0 : e };
                        break;
                      }
                      case f.p6.Text:
                      case f.p6.Markdown:
                      case f.p6.Uri:
                        t = { ...t, data: r };
                    }
                  r0({
                    target: e,
                    content: t,
                    initialValue: r,
                    cell: [n, i],
                    highlight: void 0 === r,
                    forceEditMode: void 0 !== r,
                  });
                } else
                  l.kind === f.p6.Boolean &&
                    t &&
                    !0 !== l.readonly &&
                    (rU([
                      {
                        location: rn.current.cell,
                        value: { ...l, data: !0 !== l.data },
                      },
                    ]),
                    rj.current?.damage([{ cell: rn.current.cell }]));
              },
              [rQ, rn, rU, r0]
            ),
            r2 = o.useCallback(
              (e, t) => {
                let r = rj.current?.getBounds(e, t);
                if (void 0 === r || null === T.current) return;
                let n = rQ([e, t]);
                n.allowOverlay &&
                  r0({
                    target: r,
                    content: n,
                    initialValue: void 0,
                    highlight: !0,
                    cell: [e, t],
                    forceEditMode: !0,
                  });
              },
              [rQ, r0]
            ),
            r3 = o.useCallback(
              (e, t, r = "both", n = 0, i = 0, l) => {
                if (null !== T.current) {
                  let o = rj.current,
                    a = C.current,
                    s =
                      "number" != typeof e
                        ? "cell" === e.unit
                          ? e.amount
                          : void 0
                        : e,
                    c =
                      "number" != typeof t
                        ? "cell" === t.unit
                          ? t.amount
                          : void 0
                        : t,
                    u =
                      "number" != typeof e && "px" === e.unit
                        ? e.amount
                        : void 0,
                    d =
                      "number" != typeof t && "px" === t.unit
                        ? t.amount
                        : void 0;
                  if (null !== o && null !== a) {
                    let h = { x: 0, y: 0, width: 0, height: 0 },
                      f = 0,
                      p = 0;
                    if (
                      (void 0 !== s || void 0 !== c) &&
                      (0 ===
                        (h = o.getBounds((s ?? 0) + t4, c ?? 0) ?? h).width ||
                        0 === h.height)
                    )
                      return;
                    let g = a.getBoundingClientRect(),
                      m = g.width / a.offsetWidth;
                    if (
                      (void 0 !== u &&
                        (h = {
                          ...h,
                          x: u - g.left - T.current.scrollLeft,
                          width: 1,
                        }),
                      void 0 !== d &&
                        (h = {
                          ...h,
                          y: d + g.top - T.current.scrollTop,
                          height: 1,
                        }),
                      void 0 !== h)
                    ) {
                      let o = {
                          x: h.x - n,
                          y: h.y - i,
                          width: h.width + 2 * n,
                          height: h.height + 2 * i,
                        },
                        a = 0;
                      for (let e = 0; e < eD; e++) a += rS[e].width;
                      let s = 0,
                        c = e5 + (t9 ? 1 : 0);
                      c > 0 && (s = $(rX, c, tQ));
                      let u = a * m + g.left + t4 * t6 * m,
                        d = g.right,
                        v = g.top + rE * m,
                        w = g.bottom - s * m,
                        y = h.width + 2 * n;
                      switch (l?.hAlign) {
                        case "start":
                          d = u + y;
                          break;
                        case "end":
                          u = d - y;
                          break;
                        case "center":
                          d = (u = Math.floor((u + d) / 2) - y / 2) + y;
                      }
                      let b = h.height + 2 * i;
                      switch (l?.vAlign) {
                        case "start":
                          w = v + b;
                          break;
                        case "end":
                          v = w - b;
                          break;
                        case "center":
                          w = (v = Math.floor((v + w) / 2) - b / 2) + b;
                      }
                      u > o.x
                        ? (f = o.x - u)
                        : d < o.x + o.width && (f = o.x + o.width - d),
                        v > o.y
                          ? (p = o.y - v)
                          : w < o.y + o.height && (p = o.y + o.height - w),
                        "vertical" === r || ("number" == typeof e && e < eD)
                          ? (f = 0)
                          : ("horizontal" === r ||
                              ("number" == typeof t && t >= rX - c)) &&
                            (p = 0),
                        (0 !== f || 0 !== p) &&
                          (1 !== m && ((f /= m), (p /= m)),
                          T.current.scrollTo(
                            f + T.current.scrollLeft,
                            p + T.current.scrollTop
                          ));
                    }
                  }
                }
              },
              [t4, e5, t6, rE, eD, rS, rX, t9, tQ]
            ),
            r7 = o.useRef(r2),
            r6 = o.useRef(V),
            r5 = o.useRef(j);
          (r7.current = r2), (r6.current = V), (r5.current = j);
          let r4 = o.useCallback(
              async (e, t = !0) => {
                let r;
                let n = rP[e];
                if (n?.trailingRowOptions?.disabled === !0) return;
                let i = eb?.(),
                  l = !0;
                void 0 !== i &&
                  ("top" === (r = await i) && (l = !1),
                  "number" == typeof r && (l = !1));
                let o = 0,
                  a = () => {
                    if (r5.current <= j) {
                      o < 500 && window.setTimeout(a, o), (o = 50 + 2 * o);
                      return;
                    }
                    let n = "number" == typeof r ? r : l ? j : 0;
                    nj.current(e - t4, n),
                      rm(
                        {
                          cell: [e, n],
                          range: { x: e, y: n, width: 1, height: 1 },
                        },
                        !1,
                        !1,
                        "edit"
                      );
                    let i = r6.current([e - t4, n]);
                    i.allowOverlay &&
                      (0, f.Qo)(i) &&
                      !0 !== i.readonly &&
                      t &&
                      window.setTimeout(() => {
                        r7.current(e, n);
                      }, 0);
                  };
                a();
              },
              [rP, eb, t4, j, rm]
            ),
            r8 = o.useCallback(
              (e) => {
                let t =
                  rS[e]?.trailingRowOptions?.targetColumn ?? e6?.targetColumn;
                if ("number" == typeof t) return t + (t5 ? 1 : 0);
                if ("object" == typeof t) {
                  let e = B.indexOf(t);
                  if (e >= 0) return e + (t5 ? 1 : 0);
                }
              },
              [rS, B, t5, e6?.targetColumn]
            ),
            r9 = o.useRef(),
            ne = o.useRef(),
            nt = o.useCallback(
              (e, t) => {
                let [r, n] = t;
                return (0, ec.yR)(
                  ry,
                  rP[r]?.themeOverride,
                  F?.(n),
                  e.themeOverride
                );
              },
              [F, rP, ry]
            ),
            nr = o.useCallback(
              (e) => {
                let t = eV.value ? e.metaKey : e.ctrlKey,
                  r = t && "multi" === eE,
                  n = t && "multi" === eM,
                  [i, l] = e.location,
                  o = rn.columns,
                  s = rn.rows,
                  [c, u] = rn.current?.cell ?? [];
                if ("cell" === e.kind) {
                  if (
                    ((ne.current = void 0),
                    (ni.current = [i, l]),
                    0 === i && t5)
                  ) {
                    if (
                      (!0 === t8 && l === j) ||
                      "number" === z ||
                      "none" === eE
                    )
                      return;
                    let n = rQ(e.location);
                    if (n.kind !== f.$o.Marker) return;
                    if (void 0 !== tH) {
                      let t = rC(n);
                      (0, a.hu)(t?.kind === f.$o.Marker);
                      let r = t?.onClick?.({
                        ...e,
                        cell: n,
                        posX: e.localEventX,
                        posY: e.localEventY,
                        bounds: e.bounds,
                        theme: nt(n, e.location),
                        preventDefault: () => void 0,
                      });
                      if (void 0 === r || r.checked === n.checked) return;
                    }
                    x(void 0), rV();
                    let i = s.hasIndex(l),
                      o = r9.current;
                    if (
                      "multi" === eE &&
                      (e.shiftKey || !0 === e.isLongTouch) &&
                      void 0 !== o &&
                      s.hasIndex(o)
                    ) {
                      let e = [Math.min(o, l), Math.max(o, l) + 1];
                      r || "multi" === e_
                        ? rv(void 0, e, !0)
                        : rv(f.EV.fromSingleSelection(e), void 0, r);
                    } else
                      r || e.isTouch || "multi" === e_
                        ? i
                          ? rv(s.remove(l), void 0, !0)
                          : (rv(void 0, l, !0), (r9.current = l))
                        : i && 1 === s.length
                          ? rv(f.EV.empty(), void 0, t)
                          : (rv(f.EV.fromSingleSelection(l), void 0, t),
                            (r9.current = l));
                  } else if (i >= t4 && t8 && l === j) r4(r8(i) ?? i);
                  else if (c !== i || u !== l) {
                    let r = rQ(e.location),
                      n = rC(r);
                    if (n?.onSelect !== void 0) {
                      let t = !1;
                      if (
                        (n.onSelect({
                          ...e,
                          cell: r,
                          posX: e.localEventX,
                          posY: e.localEventY,
                          bounds: e.bounds,
                          preventDefault: () => (t = !0),
                          theme: nt(r, e.location),
                        }),
                        t)
                      )
                        return;
                    }
                    let o = t9 && l === j,
                      a = t9 && void 0 !== rn && rn.current?.cell[1] === j;
                    if (
                      (e.shiftKey || !0 === e.isLongTouch) &&
                      void 0 !== c &&
                      void 0 !== u &&
                      void 0 !== rn.current &&
                      !a
                    ) {
                      if (o) return;
                      let e = Math.min(i, c),
                        r = Math.max(i, c),
                        n = Math.min(l, u),
                        a = Math.max(l, u);
                      rm(
                        {
                          ...rn.current,
                          range: {
                            x: e,
                            y: n,
                            width: r - e + 1,
                            height: a - n + 1,
                          },
                        },
                        !0,
                        t,
                        "click"
                      ),
                        (r9.current = void 0),
                        rV();
                    } else
                      rm(
                        {
                          cell: [i, l],
                          range: { x: i, y: l, width: 1, height: 1 },
                        },
                        !0,
                        t,
                        "click"
                      ),
                        (r9.current = void 0),
                        x(void 0),
                        rV();
                  }
                } else if ("header" === e.kind) {
                  if (((ni.current = [i, l]), x(void 0), t5 && 0 === i))
                    (r9.current = void 0),
                      (ne.current = void 0),
                      "multi" === eE &&
                        (s.length !== j
                          ? rv(f.EV.fromSingleSelection([0, j]), void 0, t)
                          : rv(f.EV.empty(), void 0, t),
                        rV());
                  else {
                    let r = ne.current;
                    if (
                      "multi" === eM &&
                      (e.shiftKey || !0 === e.isLongTouch) &&
                      void 0 !== r &&
                      o.hasIndex(r)
                    ) {
                      let e = [Math.min(r, i), Math.max(r, i) + 1];
                      n
                        ? rw(void 0, e, t)
                        : rw(f.EV.fromSingleSelection(e), void 0, t);
                    } else
                      n
                        ? (o.hasIndex(i)
                            ? rw(o.remove(i), void 0, t)
                            : rw(void 0, i, t),
                          (ne.current = i))
                        : "none" !== eM &&
                          (rw(f.EV.fromSingleSelection(i), void 0, t),
                          (ne.current = i));
                    (r9.current = void 0), rV();
                  }
                } else
                  e.kind === eU
                    ? (ni.current = [i, l])
                    : e.kind !== eK ||
                      e.isMaybeScrollbar ||
                      (rc(tb, !1),
                      x(void 0),
                      rV(),
                      eq?.(),
                      (r9.current = void 0),
                      (ne.current = void 0));
              },
              [
                r4,
                eM,
                rV,
                rC,
                r8,
                rQ,
                rn,
                t5,
                t9,
                eq,
                tH,
                t4,
                z,
                eE,
                e_,
                j,
                rm,
                rc,
                rw,
                rv,
                t8,
                nt,
              ]
            ),
            nn = o.useRef(!1),
            ni = o.useRef(),
            nl = o.useRef(rD),
            no = o.useRef(),
            na = o.useCallback(
              (e) => {
                if (
                  ((nd.current = !1),
                  (nl.current = rA.current),
                  0 !== e.button && 1 !== e.button)
                ) {
                  no.current = void 0;
                  return;
                }
                let t = performance.now();
                (no.current = {
                  button: e.button,
                  time: t,
                  location: e.location,
                }),
                  e?.kind === "header" && (nn.current = !0);
                let r = "cell" === e.kind && e.isFillHandle;
                (!r && "cell" !== e.kind && e.isEdge) ||
                  (E({ previousSelection: rn, fillHandle: r }),
                  (ni.current = void 0),
                  e.isTouch || 0 !== e.button || r
                    ? e.isTouch || 1 !== e.button || (ni.current = e.location)
                    : nr(e));
              },
              [rn, nr]
            ),
            [ns, nc] = o.useState(),
            nu = o.useCallback(
              (e) => {
                if (e.kind !== eU || "multi" !== eM) return;
                let t = eV.value ? e.metaKey : e.ctrlKey,
                  [r] = e.location,
                  n = rn.columns;
                if (r < t4) return;
                let i = rP[r],
                  l = r,
                  o = r;
                for (let e = r - 1; e >= t4 && H(i.group, rP[e].group); e--)
                  l--;
                for (
                  let e = r + 1;
                  e < rP.length && H(i.group, rP[e].group);
                  e++
                )
                  o++;
                if ((rV(), t)) {
                  if (n.hasAll([l, o + 1])) {
                    let e = n;
                    for (let t = l; t <= o; t++) e = e.remove(t);
                    rw(e, void 0, t);
                  } else rw(void 0, [l, o + 1], t);
                } else rw(f.EV.fromSingleSelection([l, o + 1]), void 0, t);
              },
              [eM, rV, rn.columns, rP, t4, rw]
            ),
            nd = o.useRef(!1),
            nh = o.useCallback(
              async (e) => {
                if (void 0 !== rl && void 0 !== ru) {
                  let t = rA.current.y,
                    r = rl(
                      {
                        x: e,
                        y: t,
                        width: 1,
                        height: Math.min(rA.current.height, j - t),
                      },
                      ri.current.signal
                    );
                  "object" != typeof r && (r = await r());
                  let n = rS[e - t4],
                    i = document
                      .createElement("canvas")
                      .getContext("2d", { alpha: !1 });
                  if (null !== i) {
                    i.font = ry.baseFontFull;
                    let t = tr(i, ry, n, 0, r, tY, tG, !1, rC);
                    ru?.(n, t.width, e, t.width);
                  }
                }
              },
              [rS, rl, tG, ry, tY, ru, t4, j, rC]
            ),
            [nf, np] = o.useState(),
            ng = o.useCallback(
              async (e, t) => {
                let r = e.current?.range;
                if (void 0 === r || void 0 === rl || void 0 === t.current)
                  return;
                let n = t.current.range;
                if (void 0 !== K) {
                  let e = !1;
                  if (
                    (K({
                      fillDestination: { ...n, x: n.x - t4 },
                      patternSource: { ...r, x: r.x - t4 },
                      preventDefault: () => (e = !0),
                    }),
                    e)
                  )
                    return;
                }
                let i = rl(r, ri.current.signal);
                "object" != typeof i && (i = await i());
                let l = i,
                  o = [];
                for (let e = 0; e < n.width; e++)
                  for (let t = 0; t < n.height; t++) {
                    let i = [n.x + e, n.y + t];
                    if (A(i, r)) continue;
                    let a = l[t % r.height][e % r.width];
                    !(0, f.rs)(a) &&
                      (0, f.Qo)(a) &&
                      o.push({ location: i, value: { ...a } });
                  }
                rU(o), rj.current?.damage(o.map((e) => ({ cell: e.location })));
              },
              [rl, rU, K, t4]
            ),
            nm = o.useCallback(() => {
              void 0 === rn.current ||
                rn.current.range.width <= 1 ||
                ng(
                  {
                    ...rn,
                    current: {
                      ...rn.current,
                      range: { ...rn.current.range, width: 1 },
                    },
                  },
                  rn
                );
            }, [ng, rn]),
            nv = o.useCallback(() => {
              void 0 === rn.current ||
                rn.current.range.height <= 1 ||
                ng(
                  {
                    ...rn,
                    current: {
                      ...rn.current,
                      range: { ...rn.current.range, height: 1 },
                    },
                  },
                  rn
                );
            }, [ng, rn]),
            nw = o.useCallback(
              (e, t) => {
                if ((E(void 0), rY(void 0), np(void 0), (nn.current = !1), t))
                  return;
                if (
                  S?.fillHandle === !0 &&
                  void 0 !== rn.current &&
                  S.previousSelection?.current !== void 0
                ) {
                  if (void 0 === rK) return;
                  let e = {
                    ...rn,
                    current: {
                      ...rn.current,
                      range: em(S.previousSelection.current.range, rK),
                    },
                  };
                  ng(S.previousSelection, e), rc(e, !0);
                  return;
                }
                let [r, n] = e.location,
                  [i, l] = ni.current ?? [],
                  o = () => {
                    nd.current = !0;
                  },
                  a = (t) => {
                    let a = t.isTouch || (i === r && l === n);
                    if (
                      (a && X?.([r - t4, n], { ...t, preventDefault: o }),
                      1 === t.button)
                    )
                      return !nd.current;
                    if (!nd.current) {
                      let i = rQ(e.location),
                        l = rC(i);
                      if (void 0 !== l && void 0 !== l.onClick && a) {
                        let r = l.onClick({
                          ...t,
                          cell: i,
                          posX: t.localEventX,
                          posY: t.localEventY,
                          bounds: t.bounds,
                          theme: nt(i, e.location),
                          preventDefault: o,
                        });
                        void 0 !== r &&
                          !(0, f.rs)(r) &&
                          (0, f.T9)(r) &&
                          (rU([{ location: t.location, value: r }]),
                          rj.current?.damage([{ cell: t.location }]));
                      }
                      if (nd.current || void 0 === rn.current) return !1;
                      let s = !1;
                      switch (eF) {
                        case "double-click":
                        case "second-click": {
                          if (S?.previousSelection?.current?.cell === void 0)
                            break;
                          let [e, i] = rn.current.cell,
                            [l, o] = S.previousSelection.current.cell;
                          s =
                            r === e &&
                            r === l &&
                            n === i &&
                            n === o &&
                            (!0 === t.isDoubleClick || "second-click" === eF);
                          break;
                        }
                        case "single-click":
                          s = !0;
                      }
                      if (s) return U?.([r - t4, n]), r1(t.bounds, !1), !0;
                    }
                    return !1;
                  },
                  s = e.location[0] - t4;
                if (e.isTouch) {
                  let t = rA.current,
                    n = nl.current;
                  if (t.x !== n.x || t.y !== n.y) return;
                  if (!0 === e.isLongTouch) {
                    if ("cell" === e.kind && L(rn.current?.cell, e.location)) {
                      er?.([s, e.location[1]], { ...e, preventDefault: o });
                      return;
                    }
                    if ("header" === e.kind && rn.columns.hasIndex(r)) {
                      ei?.(s, { ...e, preventDefault: o });
                      return;
                    }
                    if (e.kind === eU) {
                      if (s < 0) return;
                      eo?.(s, { ...e, preventDefault: o });
                      return;
                    }
                  }
                  "cell" === e.kind
                    ? a(e) || nr(e)
                    : e.kind === eU
                      ? et?.(s, { ...e, preventDefault: o })
                      : (e.kind === eX && Q?.(s, { ...e, preventDefault: o }),
                        nr(e));
                  return;
                }
                if ("header" === e.kind) {
                  if (s < 0) return;
                  e.isEdge
                    ? !0 === e.isDoubleClick && nh(r)
                    : 0 === e.button &&
                      r === i &&
                      n === l &&
                      Q?.(s, { ...e, preventDefault: o });
                }
                if (e.kind === eU) {
                  if (s < 0) return;
                  0 !== e.button ||
                    r !== i ||
                    n !== l ||
                    (et?.(s, { ...e, preventDefault: o }), nd.current || nu(e));
                }
                "cell" === e.kind && (0 === e.button || 1 === e.button) && a(e),
                  (ni.current = void 0);
              },
              [
                S,
                rn,
                t4,
                rK,
                ng,
                rc,
                X,
                rQ,
                rC,
                eF,
                nt,
                rU,
                U,
                r1,
                er,
                ei,
                eo,
                nr,
                et,
                Q,
                nh,
                nu,
              ]
            ),
            ny = o.useCallback(
              (e) => {
                let t = { ...e, location: [e.location[0] - t4, e.location[1]] };
                eA?.(t),
                  void 0 !== S &&
                    0 === e.buttons &&
                    (E(void 0), rY(void 0), np(void 0), (nn.current = !1)),
                  np((t) =>
                    nn.current
                      ? [e.scrollEdge[0], 0]
                      : e.scrollEdge[0] === t?.[0] && e.scrollEdge[1] === t[1]
                        ? t
                        : void 0 === S || (no.current?.location[0] ?? 0) < t4
                          ? void 0
                          : e.scrollEdge
                  );
              },
              [S, eA, t4]
            ),
            nb = o.useCallback(
              (e, t) => {
                eW?.(e - t4, t);
              },
              [eW, t4]
            ),
            nx = rn?.current?.cell,
            nk = o.useCallback(
              (e, t, r, n, i, l) => {
                rO.current = !1;
                let o = nx;
                void 0 !== o && (o = [o[0] - t4, o[1]]);
                let a =
                    0 === eD
                      ? void 0
                      : { x: 0, y: e.y, width: eD, height: e.height },
                  s = [];
                void 0 !== a && s.push(a),
                  e5 > 0 &&
                    (s.push({
                      x: e.x - t4,
                      y: j - e5,
                      width: e.width,
                      height: e5,
                    }),
                    eD > 0 &&
                      s.push({ x: 0, y: j - e5, width: eD, height: e5 }));
                let c = {
                  x: e.x - t4,
                  y: e.y,
                  width: e.width,
                  height: t8 && e.y + e.height >= j ? e.height - 1 : e.height,
                  tx: i,
                  ty: l,
                  extras: { selected: o, freezeRegion: a, freezeRegions: s },
                };
                (rA.current = c),
                  rF(c),
                  rx([t, r, n]),
                  eQ?.(c, c.tx, c.ty, c.extras);
              },
              [nx, t4, t8, j, eD, e5, rF, eQ]
            ),
            nC = g(
              ex,
              o.useCallback(
                (e, t) => {
                  ex?.(e - t4, t - t4),
                    "none" !== eM &&
                      rw(f.EV.fromSingleSelection(t), void 0, !0);
                },
                [eM, ex, t4, rw]
              )
            ),
            nS = o.useRef(!1),
            nM = o.useCallback(
              (e) => {
                if (0 === e.location[0] && t4 > 0) {
                  e.preventDefault();
                  return;
                }
                eH?.({ ...e, location: [e.location[0] - t4, e.location[1]] }),
                  e.defaultPrevented() || (nS.current = !0),
                  E(void 0);
              },
              [eH, t4]
            ),
            nR = o.useCallback(() => {
              nS.current = !1;
            }, []),
            nE = o.useRef(),
            nT = o.useCallback(
              (e) => {
                if (
                  !eY(e, nE.current) &&
                  ((nE.current = e),
                  no?.current?.button === void 0 || !(no.current.button >= 1))
                ) {
                  if (
                    0 !== e.buttons &&
                    void 0 !== S &&
                    no.current?.location[0] === 0 &&
                    0 === e.location[0] &&
                    1 === t4 &&
                    "multi" === eE &&
                    S.previousSelection &&
                    !S.previousSelection.rows.hasIndex(
                      no.current.location[1]
                    ) &&
                    rn.rows.hasIndex(no.current.location[1])
                  ) {
                    let t = Math.min(no.current.location[1], e.location[1]),
                      r = Math.max(no.current.location[1], e.location[1]) + 1;
                    rv(f.EV.fromSingleSelection([t, r]), void 0, !1);
                  }
                  if (
                    0 !== e.buttons &&
                    void 0 !== S &&
                    void 0 !== rn.current &&
                    !nS.current &&
                    !nn.current &&
                    ("rect" === eS || "multi-rect" === eS)
                  ) {
                    let [t, r] = rn.current.cell,
                      [n, i] = e.location;
                    if (
                      (i < 0 && (i = rA.current.y),
                      !0 === S.fillHandle &&
                        S.previousSelection?.current !== void 0)
                    )
                      rY(
                        (function (e, t, r, n) {
                          if ("any" === n)
                            return em(e, { x: t, y: r, width: 1, height: 1 });
                          if (
                            ("vertical" === n && (t = e.x),
                            "horizontal" === n && (r = e.y),
                            A([t, r], e))
                          )
                            return;
                          let i = t - e.x,
                            l = e.x + e.width - t,
                            o = r - e.y + 1,
                            a = e.y + e.height - r,
                            s = Math.min(
                              "vertical" === n ? Number.MAX_SAFE_INTEGER : i,
                              "vertical" === n ? Number.MAX_SAFE_INTEGER : l,
                              "horizontal" === n ? Number.MAX_SAFE_INTEGER : o,
                              "horizontal" === n ? Number.MAX_SAFE_INTEGER : a
                            );
                          return s === a
                            ? {
                                x: e.x,
                                y: e.y + e.height,
                                width: e.width,
                                height: r - e.y - e.height + 1,
                              }
                            : s === o
                              ? {
                                  x: e.x,
                                  y: r,
                                  width: e.width,
                                  height: e.y - r,
                                }
                              : s === l
                                ? {
                                    x: e.x + e.width,
                                    y: e.y,
                                    width: t - e.x - e.width + 1,
                                    height: e.height,
                                  }
                                : {
                                    x: t,
                                    y: e.y,
                                    width: e.x - t,
                                    height: e.height,
                                  };
                        })(
                          S.previousSelection.current.range,
                          n,
                          (i = Math.min(i, t9 ? j - 1 : j)),
                          e4
                        )
                      );
                    else {
                      if (t9 && r === j) return;
                      if (t9 && i === j) {
                        if (e.kind !== eK) return;
                        i--;
                      }
                      let l = (n = Math.max(n, t4)) - t,
                        o = i - r,
                        a = {
                          x: l >= 0 ? t : n,
                          y: o >= 0 ? r : i,
                          width: Math.abs(l) + 1,
                          height: Math.abs(o) + 1,
                        };
                      rm({ ...rn.current, range: a }, !0, !1, "drag");
                    }
                  }
                  eG?.({ ...e, location: [e.location[0] - t4, e.location[1]] });
                }
              },
              [e4, S, t4, eE, rn, eS, eG, rv, t9, j, rm]
            );
          !(function (e, t, r) {
            let n = o.useRef(0),
              [i, l] = e ?? [0, 0];
            o.useEffect(() => {
              if (0 === i && 0 === l) {
                n.current = 0;
                return;
              }
              let e = !1,
                o = 0,
                a = (s) => {
                  if (!e) {
                    if (0 === o) o = s;
                    else {
                      let e = s - o;
                      n.current = Math.min(1, n.current + e / 1300);
                      let a = n.current ** 1.618 * e * 2;
                      t.current?.scrollBy(i * a, l * a), (o = s), r?.();
                    }
                    window.requestAnimationFrame(a);
                  }
                };
              return (
                window.requestAnimationFrame(a),
                () => {
                  e = !0;
                }
              );
            }, [t, i, l, r]);
          })(
            nf,
            T,
            o.useCallback(() => {
              let e = nE.current;
              if (void 0 === e) return;
              let [t, r] = e.scrollEdge,
                [n, i] = e.location,
                l = rA.current;
              -1 === t
                ? (n = l.extras?.freezeRegion?.x ?? l.x)
                : 1 === t && (n = l.x + l.width),
                -1 === r
                  ? (i = Math.max(0, l.y))
                  : 1 === r && (i = Math.min(j - 1, l.y + l.height)),
                (n = s(n, 0, rP.length - 1)),
                (i = s(i, 0, j - 1)),
                nT({ ...e, location: [n, i] });
            }, [rP.length, nT, j])
          );
          let nI = o.useCallback(
              (e) => {
                if (void 0 === rn.current) return;
                let [t, r] = e,
                  [n, i] = rn.current.cell,
                  l = rn.current.range,
                  o = l.x,
                  s = l.x + l.width,
                  h = l.y,
                  f = l.y + l.height;
                if (0 !== r)
                  switch (r) {
                    case 2:
                      (f = j), (h = i), r3(0, f, "vertical");
                      break;
                    case -2:
                      (h = 0), (f = i + 1), r3(0, h, "vertical");
                      break;
                    case 1:
                      h < i
                        ? r3(0, ++h, "vertical")
                        : r3(0, (f = Math.min(j, f + 1)), "vertical");
                      break;
                    case -1:
                      f > i + 1
                        ? r3(0, --f, "vertical")
                        : r3(0, (h = Math.max(0, h - 1)), "vertical");
                      break;
                    default:
                      (0, a.vE)(r);
                  }
                if (0 !== t) {
                  if (2 === t)
                    (s = rP.length), (o = n), r3(s - 1 - t4, 0, "horizontal");
                  else if (-2 === t)
                    (o = t4), (s = n + 1), r3(o - t4, 0, "horizontal");
                  else {
                    let e = [];
                    if (void 0 !== rl) {
                      let t = rl(
                        { x: o, y: h, width: s - o - t4, height: f - h },
                        ri.current.signal
                      );
                      "object" == typeof t &&
                        (e = c(
                          u(
                            u(t)
                              .filter((e) => void 0 !== e.span)
                              .map((e) =>
                                d(
                                  (e.span?.[0] ?? 0) + 1,
                                  (e.span?.[1] ?? 0) + 1
                                )
                              )
                          )
                        ));
                    }
                    if (1 === t) {
                      let t = !1;
                      if (o < n) {
                        if (e.length > 0) {
                          let r = d(o + 1, n + 1).find(
                            (t) => !e.includes(t - t4)
                          );
                          void 0 !== r && ((o = r), (t = !0));
                        } else o++, (t = !0);
                        t && r3(o, 0, "horizontal");
                      }
                      t ||
                        r3(
                          (s = Math.min(rP.length, s + 1)) - 1 - t4,
                          0,
                          "horizontal"
                        );
                    } else if (-1 === t) {
                      let t = !1;
                      if (s > n + 1) {
                        if (e.length > 0) {
                          let r = d(s - 1, n, -1).find(
                            (t) => !e.includes(t - t4)
                          );
                          void 0 !== r && ((s = r), (t = !0));
                        } else s--, (t = !0);
                        t && r3(s - t4, 0, "horizontal");
                      }
                      t || r3((o = Math.max(t4, o - 1)) - t4, 0, "horizontal");
                    } else (0, a.vE)(t);
                  }
                }
                rm(
                  {
                    cell: rn.current.cell,
                    range: { x: o, y: h, width: s - o, height: f - h },
                  },
                  !0,
                  !1,
                  "keyboard-select"
                );
              },
              [rl, rn, rP.length, t4, j, r3, rm]
            ),
            nP = o.useCallback(
              (e, t, r, n) => {
                let i = rX - (r ? 0 : 1);
                if (
                  ((e = s(e, t4, rS.length - 1 + t4)),
                  (t = s(t, 0, i)),
                  e === nx?.[0] && t === nx?.[1])
                )
                  return !1;
                if (n && void 0 !== rn.current) {
                  let r = [...rn.current.rangeStack];
                  (rn.current.range.width > 1 || rn.current.range.height > 1) &&
                    r.push(rn.current.range),
                    rc(
                      {
                        ...rn,
                        current: {
                          cell: [e, t],
                          range: { x: e, y: t, width: 1, height: 1 },
                          rangeStack: r,
                        },
                      },
                      !0
                    );
                } else
                  rm(
                    {
                      cell: [e, t],
                      range: { x: e, y: t, width: 1, height: 1 },
                    },
                    !0,
                    !1,
                    "keyboard-nav"
                  );
                return (
                  void 0 !== I.current &&
                    I.current[0] === e &&
                    I.current[1] === t &&
                    (I.current = void 0),
                  r3(e - t4, t),
                  !0
                );
              },
              [rX, t4, rS.length, nx, rn, r3, rc, rm]
            ),
            nz = o.useCallback(
              (e, t) => {
                b?.cell !== void 0 &&
                  void 0 !== e &&
                  (0, f.T9)(e) &&
                  (rU([{ location: b.cell, value: e }]),
                  window.requestAnimationFrame(() => {
                    rj.current?.damage([{ cell: b.cell }]);
                  })),
                  rV(!0),
                  x(void 0);
                let [r, n] = t;
                if (void 0 !== rn.current && (0 !== r || 0 !== n)) {
                  let t = rn.current.cell[1] === rX - 1 && void 0 !== e;
                  nP(
                    s(rn.current.cell[0] + r, 0, rP.length - 1),
                    s(rn.current.cell[1] + n, 0, rX - 1),
                    t,
                    !1
                  );
                }
                Y?.(e, t);
              },
              [b?.cell, rV, rn, Y, rU, rX, nP, rP.length]
            ),
            nH = o.useMemo(() => `gdg-overlay-${tv++}`, []),
            nA = o.useCallback(
              (e) => {
                rV();
                let t = [];
                for (let r = e.x; r < e.x + e.width; r++)
                  for (let n = e.y; n < e.y + e.height; n++) {
                    let e;
                    let i = V([r - t4, n]);
                    if (i.allowOverlay || i.kind === f.p6.Boolean) {
                      if (i.kind === f.p6.Custom) {
                        let t = rC(i),
                          r = t?.provideEditor?.(i);
                        t?.onDelete !== void 0
                          ? (e = t.onDelete(i))
                          : (0, f.DP)(r) && (e = r?.deletedValue?.(i));
                      } else if (
                        ((0, f.T9)(i) && i.allowOverlay) ||
                        i.kind === f.p6.Boolean
                      ) {
                        let t = rC(i);
                        e = t?.onDelete?.(i);
                      }
                      void 0 !== e &&
                        !(0, f.rs)(e) &&
                        (0, f.T9)(e) &&
                        t.push({ location: [r, n], value: e });
                    }
                  }
                rU(t), rj.current?.damage(t.map((e) => ({ cell: e.location })));
              },
              [rV, V, rC, rU, t4]
            ),
            nL = void 0 !== b,
            nO = o.useCallback(
              (e) => {
                let t = () => {
                    e.stopPropagation(), e.preventDefault();
                  },
                  r = { didMatch: !1 },
                  { bounds: n } = e,
                  i = rn.columns,
                  l = rn.rows;
                if (!nL && tn(t7.clear, e, r)) rc(tb, !1), eq?.();
                else if (!nL && tn(t7.selectAll, e, r))
                  rc(
                    {
                      columns: f.EV.empty(),
                      rows: f.EV.empty(),
                      current: {
                        cell: rn.current?.cell ?? [t4, 0],
                        range: { x: t4, y: 0, width: B.length, height: j },
                        rangeStack: [],
                      },
                    },
                    !1
                  );
                else if (tn(t7.search, e, r))
                  k?.current?.focus({ preventScroll: !0 }), rt(!0);
                else if (tn(t7.delete, e, r)) {
                  let e = rg?.(rn) ?? !0;
                  if (!1 !== e) {
                    let t = !0 === e ? rn : e;
                    if (void 0 !== t.current)
                      for (let e of (nA(t.current.range), t.current.rangeStack))
                        nA(e);
                    for (let e of t.rows)
                      nA({ x: t4, y: e, width: B.length, height: 1 });
                    for (let e of t.columns)
                      nA({ x: e, y: 0, width: 1, height: j });
                  }
                }
                if (r.didMatch) return t(), !0;
                if (void 0 === rn.current) return !1;
                let [o, a] = rn.current.cell,
                  s = !1,
                  c = !1;
                tn(t7.scrollToSelectedCell, e, r)
                  ? nj.current(o - t4, a)
                  : "none" !== eM && tn(t7.selectColumn, e, r)
                    ? i.hasIndex(o)
                      ? rw(i.remove(o), void 0, !0)
                      : "single" === eM
                        ? rw(f.EV.fromSingleSelection(o), void 0, !0)
                        : rw(void 0, o, !0)
                    : "none" !== eE && tn(t7.selectRow, e, r)
                      ? l.hasIndex(a)
                        ? rv(l.remove(a), void 0, !0)
                        : "single" === eE
                          ? rv(f.EV.fromSingleSelection(a), void 0, !0)
                          : rv(void 0, a, !0)
                      : !nL && void 0 !== n && tn(t7.activateCell, e, r)
                        ? a === j && t8
                          ? window.setTimeout(() => {
                              r4(r8(o) ?? o);
                            }, 0)
                          : (U?.([o - t4, a]), r1(n, !0))
                        : rn.current.range.height > 1 && tn(t7.downFill, e, r)
                          ? nv()
                          : rn.current.range.width > 1 && tn(t7.rightFill, e, r)
                            ? nm()
                            : tn(t7.goToNextPage, e, r)
                              ? (a += Math.max(1, rA.current.height - 4))
                              : tn(t7.goToPreviousPage, e, r)
                                ? (a -= Math.max(1, rA.current.height - 4))
                                : tn(t7.goToFirstCell, e, r)
                                  ? (x(void 0), (a = 0), (o = 0))
                                  : tn(t7.goToLastCell, e, r)
                                    ? (x(void 0),
                                      (a = Number.MAX_SAFE_INTEGER),
                                      (o = Number.MAX_SAFE_INTEGER))
                                    : tn(t7.selectToFirstCell, e, r)
                                      ? (x(void 0), nI([-2, -2]))
                                      : tn(t7.selectToLastCell, e, r)
                                        ? (x(void 0), nI([2, 2]))
                                        : nL
                                          ? (tn(t7.closeOverlay, e, r) &&
                                              x(void 0),
                                            tn(t7.acceptOverlayDown, e, r) &&
                                              (x(void 0), a++),
                                            tn(t7.acceptOverlayUp, e, r) &&
                                              (x(void 0), a--),
                                            tn(t7.acceptOverlayLeft, e, r) &&
                                              (x(void 0), o--),
                                            tn(t7.acceptOverlayRight, e, r) &&
                                              (x(void 0), o++))
                                          : (tn(t7.goDownCell, e, r)
                                              ? (a += 1)
                                              : tn(t7.goUpCell, e, r)
                                                ? (a -= 1)
                                                : tn(t7.goRightCell, e, r)
                                                  ? (o += 1)
                                                  : tn(t7.goLeftCell, e, r)
                                                    ? (o -= 1)
                                                    : tn(
                                                          t7.goDownCellRetainSelection,
                                                          e,
                                                          r
                                                        )
                                                      ? ((a += 1), (s = !0))
                                                      : tn(
                                                            t7.goUpCellRetainSelection,
                                                            e,
                                                            r
                                                          )
                                                        ? ((a -= 1), (s = !0))
                                                        : tn(
                                                              t7.goRightCellRetainSelection,
                                                              e,
                                                              r
                                                            )
                                                          ? ((o += 1), (s = !0))
                                                          : tn(
                                                                t7.goLeftCellRetainSelection,
                                                                e,
                                                                r
                                                              )
                                                            ? ((o -= 1),
                                                              (s = !0))
                                                            : tn(
                                                                  t7.goToLastRow,
                                                                  e,
                                                                  r
                                                                )
                                                              ? (a = j - 1)
                                                              : tn(
                                                                    t7.goToFirstRow,
                                                                    e,
                                                                    r
                                                                  )
                                                                ? (a =
                                                                    Number.MIN_SAFE_INTEGER)
                                                                : tn(
                                                                      t7.goToLastColumn,
                                                                      e,
                                                                      r
                                                                    )
                                                                  ? (o =
                                                                      Number.MAX_SAFE_INTEGER)
                                                                  : tn(
                                                                        t7.goToFirstColumn,
                                                                        e,
                                                                        r
                                                                      )
                                                                    ? (o =
                                                                        Number.MIN_SAFE_INTEGER)
                                                                    : ("rect" ===
                                                                        eS ||
                                                                        "multi-rect" ===
                                                                          eS) &&
                                                                      (tn(
                                                                        t7.selectGrowDown,
                                                                        e,
                                                                        r
                                                                      )
                                                                        ? nI([
                                                                            0,
                                                                            1,
                                                                          ])
                                                                        : tn(
                                                                              t7.selectGrowUp,
                                                                              e,
                                                                              r
                                                                            )
                                                                          ? nI([
                                                                              0,
                                                                              -1,
                                                                            ])
                                                                          : tn(
                                                                                t7.selectGrowRight,
                                                                                e,
                                                                                r
                                                                              )
                                                                            ? nI(
                                                                                [
                                                                                  1,
                                                                                  0,
                                                                                ]
                                                                              )
                                                                            : tn(
                                                                                  t7.selectGrowLeft,
                                                                                  e,
                                                                                  r
                                                                                )
                                                                              ? nI(
                                                                                  [
                                                                                    -1,
                                                                                    0,
                                                                                  ]
                                                                                )
                                                                              : tn(
                                                                                    t7.selectToLastRow,
                                                                                    e,
                                                                                    r
                                                                                  )
                                                                                ? nI(
                                                                                    [
                                                                                      0,
                                                                                      2,
                                                                                    ]
                                                                                  )
                                                                                : tn(
                                                                                      t7.selectToFirstRow,
                                                                                      e,
                                                                                      r
                                                                                    )
                                                                                  ? nI(
                                                                                      [
                                                                                        0,
                                                                                        -2,
                                                                                      ]
                                                                                    )
                                                                                  : tn(
                                                                                        t7.selectToLastColumn,
                                                                                        e,
                                                                                        r
                                                                                      )
                                                                                    ? nI(
                                                                                        [
                                                                                          2,
                                                                                          0,
                                                                                        ]
                                                                                      )
                                                                                    : tn(
                                                                                        t7.selectToFirstColumn,
                                                                                        e,
                                                                                        r
                                                                                      ) &&
                                                                                      nI(
                                                                                        [
                                                                                          -2,
                                                                                          0,
                                                                                        ]
                                                                                      )),
                                            (c = r.didMatch));
                let u = nP(o, a, !1, s),
                  d = r.didMatch;
                return d && (u || !c || t_) && t(), d;
              },
              [
                nL,
                rn,
                t7,
                eM,
                eE,
                eS,
                t4,
                j,
                nP,
                rc,
                eq,
                B.length,
                rg,
                t_,
                nA,
                rw,
                rv,
                t8,
                r8,
                r4,
                U,
                r1,
                nv,
                nm,
                nI,
              ]
            ),
            nD = o.useCallback(
              (e) => {
                let t = !1;
                if (
                  (void 0 !== ev &&
                    ev({
                      ...e,
                      cancel: () => {
                        t = !0;
                      },
                    }),
                  t || nO(e) || void 0 === rn.current)
                )
                  return;
                let [r, n] = rn.current.cell,
                  i = rA.current;
                if (
                  !e.metaKey &&
                  !e.ctrlKey &&
                  void 0 !== rn.current &&
                  1 === e.key.length &&
                  /[ -~]/g.test(e.key) &&
                  void 0 !== e.bounds &&
                  (0, f.Qo)(V([r - t4, Math.max(0, Math.min(n, j - 1))]))
                ) {
                  if (
                    (!t9 || n !== j) &&
                    (i.y > n ||
                      n > i.y + i.height ||
                      i.x > r ||
                      r > i.x + i.width)
                  )
                    return;
                  r1(e.bounds, !0, e.key),
                    e.stopPropagation(),
                    e.preventDefault();
                }
              },
              [ev, nO, rn, V, t4, j, t9, r1]
            ),
            nF = o.useCallback(
              (e, t) => {
                let r = e.location[0] - t4;
                if (
                  ("header" === e.kind && ei?.(r, { ...e, preventDefault: t }),
                  e.kind === eU)
                ) {
                  if (r < 0) return;
                  eo?.(r, { ...e, preventDefault: t });
                }
                if ("cell" === e.kind) {
                  let [n, i] = e.location;
                  er?.([r, i], { ...e, preventDefault: t }),
                    !(function (e, t) {
                      let [r, n] = t;
                      if (e.columns.hasIndex(r) || e.rows.hasIndex(n))
                        return !0;
                      if (void 0 !== e.current) {
                        if (L(e.current.cell, t)) return !0;
                        for (let t of [
                          e.current.range,
                          ...e.current.rangeStack,
                        ])
                          if (
                            r >= t.x &&
                            r < t.x + t.width &&
                            n >= t.y &&
                            n < t.y + t.height
                          )
                            return !0;
                      }
                      return !1;
                    })(rn, e.location) && nP(n, i, !1, !1);
                }
              },
              [rn, er, eo, ei, t4, nP]
            ),
            n_ = o.useCallback(
              async (e) => {
                let t;
                if (!t7.paste) return;
                function r(e, t, r, n) {
                  let i =
                    "object" == typeof r
                      ? r?.join("\n") ?? ""
                      : r?.toString() ?? "";
                  if (!(0, f.rs)(e) && (0, f.Qo)(e) && !0 !== e.readonly) {
                    let l = G?.(i, e);
                    if (void 0 !== l && (0, f.T9)(l))
                      return { location: t, value: l };
                    let o = rC(e);
                    if (void 0 === o) return;
                    if (o.kind === f.p6.Custom) {
                      (0, a.hu)(e.kind === f.p6.Custom);
                      let r = o.onPaste?.(i, e.data);
                      if (void 0 === r) return;
                      return { location: t, value: { ...e, data: r } };
                    }
                    {
                      let l = o.onPaste?.(i, e, {
                        formatted: n,
                        formattedString:
                          "string" == typeof n ? n : n?.join("\n"),
                        rawValue: r,
                      });
                      if (void 0 === l) return;
                      return (
                        (0, a.hu)(l.kind === e.kind), { location: t, value: l }
                      );
                    }
                  }
                }
                let n = rn.columns,
                  i = rn.rows,
                  l =
                    T.current?.contains(document.activeElement) === !0 ||
                    C.current?.contains(document.activeElement) === !0;
                if (
                  (void 0 !== rn.current
                    ? (t = [rn.current.range.x, rn.current.range.y])
                    : 1 === n.length
                      ? (t = [n.first() ?? 0, 0])
                      : 1 === i.length && (t = [t4, i.first() ?? 0]),
                  l && void 0 !== t)
                ) {
                  let n, i;
                  let l = "text/plain",
                    o = "text/html";
                  if (void 0 !== navigator.clipboard.read)
                    for (let e of await navigator.clipboard.read()) {
                      if (e.types.includes(o)) {
                        let t = await e.getType(o),
                          r = ta(await t.text());
                        if (void 0 !== r) {
                          n = r;
                          break;
                        }
                      }
                      e.types.includes(l) &&
                        (i = await (await e.getType(l)).text());
                    }
                  else if (void 0 !== navigator.clipboard.readText)
                    i = await navigator.clipboard.readText();
                  else {
                    if (void 0 === e || e?.clipboardData === null) return;
                    e.clipboardData.types.includes(o) &&
                      (n = ta(e.clipboardData.getData(o))),
                      void 0 === n &&
                        e.clipboardData.types.includes(l) &&
                        (i = e.clipboardData.getData(l));
                  }
                  let [a, s] = t,
                    c = [];
                  do {
                    if (void 0 === eL) {
                      let e = r(
                        rQ(t),
                        t,
                        i ??
                          n
                            ?.map((e) => e.map((e) => e.rawValue).join("	"))
                            .join("	") ??
                          "",
                        void 0
                      );
                      void 0 !== e && c.push(e);
                      break;
                    }
                    if (void 0 === n) {
                      if (void 0 === i) return;
                      n = (function (e) {
                        var t;
                        let r;
                        ((t = r || (r = {}))[(t.None = 0)] = "None"),
                          (t[(t.inString = 1)] = "inString"),
                          (t[(t.inStringPostQuote = 2)] = "inStringPostQuote");
                        let n = [],
                          i = [],
                          l = 0,
                          o = r.None;
                        e = e.replace(/\r\n/g, "\n");
                        let a = 0;
                        for (let t of e) {
                          switch (o) {
                            case r.None:
                              "	" === t || "\n" === t
                                ? (i.push(e.slice(l, a)),
                                  (l = a + 1),
                                  "\n" === t && (n.push(i), (i = [])))
                                : '"' === t && (o = r.inString);
                              break;
                            case r.inString:
                              '"' === t && (o = r.inStringPostQuote);
                              break;
                            case r.inStringPostQuote:
                              '"' === t
                                ? (o = r.inString)
                                : (("	" === t || "\n" === t) &&
                                    (i.push(ts(e.slice(l, a))),
                                    (l = a + 1),
                                    "\n" === t && (n.push(i), (i = []))),
                                  (o = r.None));
                          }
                          a++;
                        }
                        return (
                          l < e.length && i.push(ts(e.slice(l, e.length))),
                          n.push(i),
                          n.map((e) =>
                            e.map((e) => ({
                              rawValue: e,
                              formatted: e,
                              format: "string",
                            }))
                          )
                        );
                      })(i);
                    }
                    if (
                      !1 === eL ||
                      ("function" == typeof eL &&
                        eL?.(
                          [t[0] - t4, t[1]],
                          n.map((e) =>
                            e.map((e) => e.rawValue?.toString() ?? "")
                          )
                        ) !== !0)
                    )
                      return;
                    for (let [e, t] of n.entries()) {
                      if (e + s >= j) break;
                      for (let [n, i] of t.entries()) {
                        let t = [n + a, e + s],
                          [l, o] = t;
                        if (l >= rP.length || o >= rX) continue;
                        let u = r(rQ(t), t, i.rawValue, i.formatted);
                        void 0 !== u && c.push(u);
                      }
                    }
                  } while (!1);
                  rU(c),
                    rj.current?.damage(c.map((e) => ({ cell: e.location })));
                }
              },
              [G, rC, rQ, rn, t7.paste, rP.length, rU, rX, eL, t4, j]
            );
          p("paste", n_, P, !1, !0);
          let n$ = o.useCallback(
            async (e, t) => {
              if (!t7.copy) return;
              let r =
                  !0 === t ||
                  T.current?.contains(document.activeElement) === !0 ||
                  C.current?.contains(document.activeElement) === !0,
                n = rn.columns,
                i = rn.rows,
                l = (t, r) => {
                  eO
                    ? tc(
                        [
                          r.map((e) => ({
                            kind: f.p6.Text,
                            data: B[e].title,
                            displayData: B[e].title,
                            allowOverlay: !1,
                          })),
                          ...t,
                        ],
                        r,
                        e
                      )
                    : tc(t, r, e);
                };
              if (r && void 0 !== rl) {
                if (void 0 !== rn.current) {
                  let e = rl(rn.current.range, ri.current.signal);
                  "object" != typeof e && (e = await e()),
                    l(
                      e,
                      d(
                        rn.current.range.x - t4,
                        rn.current.range.x + rn.current.range.width - t4
                      )
                    );
                } else if (void 0 !== i && i.length > 0) {
                  let e = [...i].map((e) => {
                    let t = rl(
                      { x: t4, y: e, width: B.length, height: 1 },
                      ri.current.signal
                    );
                    return "object" == typeof t ? t[0] : t().then((e) => e[0]);
                  });
                  l(
                    e.some((e) => e instanceof Promise)
                      ? await Promise.all(e)
                      : e,
                    d(B.length)
                  );
                } else if (n.length > 0) {
                  let e = [],
                    t = [];
                  for (let r of n) {
                    let n = rl(
                      { x: r, y: 0, width: 1, height: j },
                      ri.current.signal
                    );
                    "object" != typeof n && (n = await n()),
                      e.push(n),
                      t.push(r - t4);
                  }
                  l(
                    1 === e.length
                      ? e[0]
                      : e.reduce((e, t) => e.map((e, r) => [...e, ...t[r]])),
                    t
                  );
                }
              }
            },
            [B, rl, rn, t7.copy, t4, j, eO]
          );
          p("copy", n$, P, !1, !1),
            p(
              "cut",
              o.useCallback(
                async (e) => {
                  if (
                    t7.cut &&
                    (T.current?.contains(document.activeElement) === !0 ||
                      C.current?.contains(document.activeElement) === !0) &&
                    (await n$(e), void 0 !== rn.current)
                  ) {
                    let e = {
                        current: {
                          cell: rn.current.cell,
                          range: rn.current.range,
                          rangeStack: [],
                        },
                        rows: f.EV.empty(),
                        columns: f.EV.empty(),
                      },
                      t = rg?.(e);
                    !1 !== t &&
                      void 0 !== (e = !0 === t ? e : t).current &&
                      nA(e.current.range);
                  }
                },
                [nA, rn, t7.cut, n$, rg]
              ),
              P,
              !1,
              !1
            );
          let nN = o.useCallback(
              (e, t) => {
                if (void 0 !== ed) {
                  0 !== t4 && (e = e.map((e) => [e[0] - t4, e[1]])), ed(e, t);
                  return;
                }
                if (0 === e.length || -1 === t) return;
                let [r, n] = e[t];
                (void 0 === I.current ||
                  I.current[0] !== r ||
                  I.current[1] !== n) &&
                  ((I.current = [r, n]), nP(r, n, !1, !1));
              },
              [ed, t4, nP]
            ),
            [nW, nB] = eJ?.current?.cell ?? [],
            nj = o.useRef(r3);
          (nj.current = r3),
            o.useLayoutEffect(() => {
              rO.current ||
                void 0 === nW ||
                void 0 === nB ||
                (nW === rs.current?.current?.cell[0] &&
                  nB === rs.current?.current?.cell[1]) ||
                nj.current(nW, nB),
                (rO.current = !1);
            }, [nW, nB]);
          let nV =
            void 0 !== rn.current &&
            (rn.current.cell[0] >= rP.length || rn.current.cell[1] >= rX);
          o.useLayoutEffect(() => {
            nV && rc(tb, !1);
          }, [nV, rc]);
          let nX = o.useMemo(
              () =>
                !0 === t8 && e6?.tint === !0
                  ? f.EV.fromSingleSelection(rX - 1)
                  : f.EV.empty(),
              [rX, t8, e6?.tint]
            ),
            nU = o.useCallback(
              (e) => ("boolean" == typeof ti ? ti : ti?.(e - t4) ?? !0),
              [t4, ti]
            ),
            nK = o.useMemo(() => {
              if (void 0 === ns || null === C.current) return null;
              let { bounds: e, group: t } = ns,
                r = C.current.getBoundingClientRect();
              return o.createElement(tt, {
                bounds: e,
                group: t,
                canvasBounds: r,
                onClose: () => nc(void 0),
                onFinish: (e) => {
                  nc(void 0), ea?.(t, e);
                },
              });
            }, [ea, ns]),
            nY = Math.min(rP.length, eD + (t5 ? 1 : 0));
          o.useImperativeHandle(
            t,
            () => ({
              appendRow: (e, t) => r4(e + t4, t),
              updateCells: (e) => (
                0 !== t4 &&
                  (e = e.map((e) => ({ cell: [e.cell[0] + t4, e.cell[1]] }))),
                rj.current?.damage(e)
              ),
              getBounds: (e, t) => {
                if (C?.current !== null && T?.current !== null) {
                  if (void 0 === e && void 0 === t) {
                    let e = C.current.getBoundingClientRect(),
                      t = e.width / T.current.clientWidth;
                    return {
                      x: e.x - T.current.scrollLeft * t,
                      y: e.y - T.current.scrollTop * t,
                      width: T.current.scrollWidth * t,
                      height: T.current.scrollHeight * t,
                    };
                  }
                  return rj.current?.getBounds((e ?? 0) + t4, t);
                }
              },
              focus: () => rj.current?.focus(),
              emit: async (e) => {
                switch (e) {
                  case "delete":
                    nD({
                      bounds: void 0,
                      cancel: () => void 0,
                      stopPropagation: () => void 0,
                      preventDefault: () => void 0,
                      ctrlKey: !1,
                      key: "Delete",
                      keyCode: 46,
                      metaKey: !1,
                      shiftKey: !1,
                      altKey: !1,
                      rawEvent: void 0,
                      location: void 0,
                    });
                    break;
                  case "fill-right":
                    nD({
                      bounds: void 0,
                      cancel: () => void 0,
                      stopPropagation: () => void 0,
                      preventDefault: () => void 0,
                      ctrlKey: !0,
                      key: "r",
                      keyCode: 82,
                      metaKey: !1,
                      shiftKey: !1,
                      altKey: !1,
                      rawEvent: void 0,
                      location: void 0,
                    });
                    break;
                  case "fill-down":
                    nD({
                      bounds: void 0,
                      cancel: () => void 0,
                      stopPropagation: () => void 0,
                      preventDefault: () => void 0,
                      ctrlKey: !0,
                      key: "d",
                      keyCode: 68,
                      metaKey: !1,
                      shiftKey: !1,
                      altKey: !1,
                      rawEvent: void 0,
                      location: void 0,
                    });
                    break;
                  case "copy":
                    await n$(void 0, !0);
                    break;
                  case "paste":
                    await n_();
                }
              },
              scrollTo: r3,
              remeasureColumns: (e) => {
                for (let t of e) nh(t + t4);
              },
            }),
            [r4, nh, n$, nD, n_, t4, r3]
          );
          let [nG, nq] = nx ?? [],
            nZ = o.useCallback(
              (e) => {
                let [t, r] = e;
                if (-1 === r) {
                  "none" !== eM &&
                    (rw(f.EV.fromSingleSelection(t), void 0, !1), rV());
                  return;
                }
                (nG !== t || nq !== r) &&
                  (rm(
                    { cell: e, range: { x: t, y: r, width: 1, height: 1 } },
                    !0,
                    !1,
                    "keyboard-nav"
                  ),
                  r3(t, r));
              },
              [eM, rV, r3, nG, nq, rm, rw]
            ),
            [nQ, nJ] = o.useState(!1),
            n0 = o.useRef(
              h((e) => {
                nJ(e);
              }, 5)
            ),
            n1 = o.useCallback(() => {
              n0.current(!0),
                void 0 === rn.current &&
                  0 === rn.columns.length &&
                  0 === rn.rows.length &&
                  void 0 === S &&
                  rm(
                    {
                      cell: [t4, rB],
                      range: { x: t4, y: rB, width: 1, height: 1 },
                    },
                    !0,
                    !1,
                    "keyboard-select"
                  );
            }, [rB, rn, S, t4, rm]),
            n2 = o.useCallback(() => {
              n0.current(!1);
            }, []),
            [n3, n7] = o.useMemo(() => {
              let e;
              let t = tS?.scrollbarWidthOverride ?? M(),
                r = j + (t8 ? 1 : 0);
              if ("number" == typeof tQ) e = rE + r * tQ;
              else {
                let t = 0,
                  n = Math.min(r, 10);
                for (let e = 0; e < n; e++) t += tQ(e);
                e = rE + r * (t = Math.floor(t / n));
              }
              e += t;
              let n = rP.reduce((e, t) => t.width + e, 0) + t;
              return [`${Math.min(1e5, n)}px`, `${Math.min(1e5, e)}px`];
            }, [rP, tS?.scrollbarWidthOverride, tQ, j, t8, rE]);
          return o.createElement(
            ec.Ni.Provider,
            { value: ry },
            o.createElement(
              th,
              {
                style: (0, ec.be)(ry),
                className: en,
                inWidth: N ?? n3,
                inHeight: W ?? n7,
              },
              o.createElement(e8, {
                fillHandle: tk,
                drawFocusRing: tC,
                experimental: tS,
                fixedShadowX: tM,
                fixedShadowY: tR,
                getRowThemeOverride: F,
                headerIcons: tE,
                imageWindowLoader: tT,
                initialSize: tI,
                isDraggable: tP,
                onDragLeave: tz,
                onRowMoved: tH,
                overscrollX: t2,
                overscrollY: t3,
                preventDiagonalScrolling: tO,
                rightElement: tD,
                rightElementProps: tF,
                smoothScrollX: t$,
                smoothScrollY: tN,
                className: en,
                enableGroups: rR,
                onCanvasFocused: n1,
                onCanvasBlur: n2,
                canvasRef: C,
                onContextMenu: nF,
                theme: ry,
                cellXOffset: rW,
                cellYOffset: rB,
                accessibilityHeight: rD.height,
                onDragEnd: nR,
                columns: rP,
                nonGrowWidth: rM,
                drawHeader: rf,
                onColumnProposeMove: J,
                drawCell: rp,
                disabledRows: nX,
                freezeColumns: nY,
                lockColumns: t4,
                firstColAccessible: 0 === t4,
                getCellContent: rQ,
                minColumnWidth: tY,
                maxColumnWidth: tG,
                searchInputRef: k,
                showSearch: eZ ?? re,
                onSearchClose: rr,
                highlightRegions: rq,
                getCellsForSelection: rl,
                getGroupDetails: rJ,
                headerHeight: tJ,
                isFocused: nQ,
                groupHeaderHeight: rR ? t0 : 0,
                freezeTrailingRows: e5 + (t8 && e6?.sticky === !0 ? 1 : 0),
                hasAppendRow: t8,
                onColumnResize: ru,
                onColumnResizeEnd: rd,
                onColumnResizeStart: rh,
                onCellFocused: nZ,
                onColumnMoved: nC,
                onDragStart: nM,
                onHeaderMenuClick: nb,
                onItemHovered: nT,
                isFilling: S?.fillHandle === !0,
                onMouseMove: ny,
                onKeyDown: nD,
                onKeyUp: ew,
                onMouseDown: na,
                onMouseUp: nw,
                onDragOverCell: tl,
                onDrop: to,
                onSearchResultsChanged: nN,
                onVisibleRegionChanged: nk,
                clientSize: rb,
                rowHeight: tQ,
                searchResults: eh,
                searchValue: eg,
                onSearchValueChange: ep,
                rows: rX,
                scrollRef: T,
                selection: rn,
                translateX: rD.tx,
                translateY: rD.ty,
                verticalBorder: nU,
                gridRef: rj,
                getCellRenderer: rC,
              }),
              nK,
              void 0 !== b &&
                o.createElement(
                  o.Suspense,
                  { fallback: null },
                  o.createElement(tm, {
                    ...b,
                    validateCell: ra,
                    id: nH,
                    getCellRenderer: rC,
                    className:
                      tS?.isSubGrid === !0 ? "click-outside-ignore" : void 0,
                    provideEditor: e7,
                    imageEditorOverride: D,
                    onFinishEditing: nz,
                    markdownDivCreateNode: _,
                    isOutsideClick: tU,
                  })
                )
            )
          );
        }),
        tk = {
          getAccessibilityString: (e) => e.data?.toString() ?? "false",
          kind: f.p6.Boolean,
          needsHover: !0,
          useLabel: !1,
          needsHoverPosition: !0,
          measure: () => 50,
          draw: (e) =>
            (function (e, t, r, n) {
              if (!r && t === f.qF) return;
              let {
                  ctx: i,
                  hoverAmount: l,
                  theme: o,
                  rect: a,
                  highlighted: s,
                  hoverX: c,
                  hoverY: u,
                  cell: { contentAlign: d },
                } = e,
                { x: h, y: p, width: g, height: m } = a,
                v = r ? 0.65 + 0.35 * l : 0.4;
              t === f.qF && (v *= l),
                0 !== v &&
                  ((i.globalAlpha = v),
                  eg(i, o, t, h, p, g, m, s, c, u, n, d),
                  (i.globalAlpha = 1));
            })(e, e.cell.data, (0, f.kf)(e.cell), e.cell.maxSize ?? 20),
          onDelete: (e) => ({ ...e, data: !1 }),
          onClick: (e) => {
            let { cell: t, posX: r, posY: n, bounds: i, theme: l } = e,
              { width: o, height: a, x: s, y: c } = i,
              u = t.maxSize ?? 20,
              d = Math.floor(i.y + a / 2),
              h = y(u, a, l.cellVerticalPadding),
              p = v(
                w(t.contentAlign ?? "center", s, o, l.cellHorizontalPadding, h),
                d,
                h
              ),
              g = b(s + r, c + n, p);
            if ((0, f.kf)(t) && g) return { ...t, data: !0 !== t.data };
          },
          onPaste: (e, t) => {
            let r = f.qF;
            return (
              "true" === e.toLowerCase()
                ? (r = !0)
                : "false" === e.toLowerCase()
                  ? (r = !1)
                  : "indeterminate" === e.toLowerCase() && (r = f.sd),
              r === t.data ? void 0 : { ...t, data: r }
            );
          },
        },
        tC = (0, eJ.z)("div")({
          name: "BubblesOverlayEditorStyle",
          class: "gdg-b1ygi5by",
          propsAsIs: !1,
        });
      var tS = (e) => {
        let { bubbles: t } = e;
        return o.createElement(
          tC,
          null,
          t.map((e, t) =>
            o.createElement("div", { key: t, className: "boe-bubble" }, e)
          ),
          o.createElement("textarea", { className: "gdg-input", autoFocus: !0 })
        );
      };
      let tM = {
          getAccessibilityString: (e) => E(e.data),
          kind: f.p6.Bubble,
          needsHover: !1,
          useLabel: !1,
          needsHoverPosition: !1,
          measure: (e, t, r) =>
            t.data.reduce((t, r) => e.measureText(r).width + t + 20, 0) +
            2 * r.cellHorizontalPadding -
            4,
          draw: (e) =>
            (function (e, t) {
              let { rect: r, theme: n, ctx: i, highlighted: l } = e,
                { x: o, y: a, width: s, height: c } = r,
                u = o + n.cellHorizontalPadding,
                d = [];
              for (let e of t) {
                if (u > o + s) break;
                let t = X(e, i, n.baseFontFull).width;
                d.push({ x: u, width: t }), (u += t + 16 + 4);
              }
              for (let e of (i.beginPath(), d))
                J(
                  i,
                  e.x,
                  a + (c - 20) / 2,
                  e.width + 16,
                  20,
                  n.roundingRadius ?? 10
                );
              for (let [e, r] of ((i.fillStyle = l
                ? n.bgBubbleSelected
                : n.bgBubble),
              i.fill(),
              d.entries()))
                i.beginPath(),
                  (i.fillStyle = n.textBubble),
                  i.fillText(t[e], r.x + 8, a + c / 2 + U(i, n));
            })(e, e.cell.data),
          provideEditor: () => (e) => {
            let { value: t } = e;
            return o.createElement(tS, { bubbles: t.data });
          },
          onPaste: () => void 0,
        },
        tR = (0, eJ.z)("div")({
          name: "DrilldownOverlayEditorStyle",
          class: "gdg-d4zsq0x",
          propsAsIs: !1,
        });
      var tE = (e) => {
        let { drilldowns: t } = e;
        return o.createElement(
          tR,
          null,
          t.map((e, t) =>
            o.createElement(
              "div",
              { key: t, className: "doe-bubble" },
              void 0 !== e.img && o.createElement("img", { src: e.img }),
              o.createElement("div", null, e.text)
            )
          )
        );
      };
      let tT = {
          getAccessibilityString: (e) => E(e.data.map((e) => e.text)),
          kind: f.p6.Drilldown,
          needsHover: !1,
          useLabel: !1,
          needsHoverPosition: !1,
          measure: (e, t, r) =>
            t.data.reduce(
              (t, r) =>
                e.measureText(r.text).width +
                t +
                20 +
                (void 0 !== r.img ? 18 : 0),
              0
            ) +
            2 * r.cellHorizontalPadding -
            4,
          draw: (e) =>
            (function (e, t) {
              let {
                  rect: r,
                  theme: n,
                  ctx: i,
                  imageLoader: l,
                  col: o,
                  row: a,
                } = e,
                { x: s, width: c } = r,
                u = n.baseFontFull,
                d = Z(i, u),
                h = Math.min(
                  r.height,
                  Math.max(16, 2 * Math.ceil(d * n.lineHeight))
                ),
                f = Math.floor(r.y + (r.height - h) / 2),
                p = h - 10,
                g = s + n.cellHorizontalPadding,
                m = n.roundingRadius ?? 6,
                v = (function (e, t, r, n) {
                  let i = Math.ceil(window.devicePixelRatio),
                    l = r - 10,
                    o = r * i,
                    a = n + 5,
                    s = 3 * n,
                    c = (s + 10) * i,
                    u = `${e},${t},${i},${r}`;
                  if (void 0 !== tI[u])
                    return {
                      el: tI[u],
                      height: o,
                      width: c,
                      middleWidth: 4 * i,
                      sideWidth: a * i,
                      padding: 5 * i,
                      dpr: i,
                    };
                  let d = document.createElement("canvas"),
                    h = d.getContext("2d");
                  return null === h
                    ? null
                    : ((d.width = c),
                      (d.height = o),
                      h.scale(i, i),
                      (tI[u] = d),
                      h.beginPath(),
                      J(h, 5, 5, s, l, n),
                      (h.shadowColor = "rgba(24, 25, 34, 0.4)"),
                      (h.shadowBlur = 1),
                      (h.fillStyle = e),
                      h.fill(),
                      (h.shadowColor = "rgba(24, 25, 34, 0.3)"),
                      (h.shadowOffsetY = 1),
                      (h.shadowBlur = 5),
                      (h.fillStyle = e),
                      h.fill(),
                      (h.shadowOffsetY = 0),
                      (h.shadowBlur = 0),
                      (h.shadowBlur = 0),
                      h.beginPath(),
                      J(h, 5.5, 5.5, s, l, n),
                      (h.strokeStyle = t),
                      (h.lineWidth = 1),
                      h.stroke(),
                      {
                        el: d,
                        height: o,
                        width: c,
                        sideWidth: a * i,
                        middleWidth: n * i,
                        padding: 5 * i,
                        dpr: i,
                      });
                })(n.bgCell, n.drilldownBorder, h, m),
                w = [];
              for (let e of t) {
                if (g > s + c) break;
                let t = X(e.text, i, u).width,
                  r = 0;
                void 0 !== e.img &&
                  void 0 !== l.loadOrGetImage(e.img, o, a) &&
                  (r = p - 8 + 4);
                let n = t + r + 16;
                w.push({ x: g, width: n }), (g += n + 4);
              }
              if (null !== v) {
                let {
                    el: e,
                    height: t,
                    middleWidth: r,
                    sideWidth: n,
                    width: l,
                    dpr: o,
                    padding: a,
                  } = v,
                  s = n / o,
                  c = a / o;
                for (let o of w) {
                  let a = Math.floor(o.x),
                    u = Math.floor(o.width),
                    d = u - (s - c) * 2;
                  (i.imageSmoothingEnabled = !1),
                    i.drawImage(e, 0, 0, n, t, a - c, f, s, h),
                    d > 0 && i.drawImage(e, n, 0, r, t, a + (s - c), f, d, h),
                    i.drawImage(e, l - n, 0, n, t, a + u - (s - c), f, s, h),
                    (i.imageSmoothingEnabled = !0);
                }
              }
              for (let [e, r] of (i.beginPath(), w.entries())) {
                let s = t[e],
                  c = r.x + 8;
                if (void 0 !== s.img) {
                  let e = l.loadOrGetImage(s.img, o, a);
                  if (void 0 !== e) {
                    let t = p - 8,
                      r = 0,
                      l = 0,
                      o = e.width,
                      a = e.height;
                    o > a
                      ? ((r += (o - a) / 2), (o = a))
                      : a > o && ((l += (a - o) / 2), (a = o)),
                      i.beginPath(),
                      J(i, c, f + h / 2 - t / 2, t, t, n.roundingRadius ?? 3),
                      i.save(),
                      i.clip(),
                      i.drawImage(e, r, l, o, a, c, f + h / 2 - t / 2, t, t),
                      i.restore(),
                      (c += t + 4);
                  }
                }
                i.beginPath(),
                  (i.fillStyle = n.textBubble),
                  i.fillText(s.text, c, f + h / 2 + U(i, n));
              }
            })(e, e.cell.data),
          provideEditor: () => (e) => {
            let { value: t } = e;
            return o.createElement(tE, { drilldowns: t.data });
          },
          onPaste: () => void 0,
        },
        tI = {},
        tP = (0, eJ.z)("div")({
          name: "ImageOverlayEditorStyle",
          class: "gdg-i2iowwq",
          propsAsIs: !1,
        });
      var tz = r(54721);
      let tH = (e) => {
          let { urls: t, canWrite: r, onEditClick: n, renderImage: i } = e,
            l = t.filter((e) => "" !== e);
          if (0 === l.length) return null;
          let a = l.length > 1;
          return o.createElement(
            tP,
            { "data-testid": "GDG-default-image-overlay-editor" },
            o.createElement(
              tz.lr,
              {
                showArrows: a,
                showThumbs: !1,
                swipeable: a,
                emulateTouch: a,
                infiniteLoop: a,
              },
              l.map((e) => {
                let t =
                  i?.(e) ?? o.createElement("img", { draggable: !1, src: e });
                return o.createElement(
                  "div",
                  { className: "gdg-centering-container", key: e },
                  t
                );
              })
            ),
            r &&
              n &&
              o.createElement(
                "button",
                { className: "gdg-edit-icon", onClick: n },
                o.createElement(x, null)
              )
          );
        },
        tA = {
          getAccessibilityString: (e) => e.data.join(", "),
          kind: f.p6.Image,
          needsHover: !1,
          useLabel: !1,
          needsHoverPosition: !1,
          draw: (e) =>
            (function (e, t, r, n) {
              let {
                  rect: i,
                  col: l,
                  row: o,
                  theme: a,
                  ctx: s,
                  imageLoader: c,
                } = e,
                { x: u, y: d, height: h, width: f } = i,
                p = h - 2 * a.cellVerticalPadding,
                g = [],
                m = 0;
              for (let e = 0; e < t.length; e++) {
                let r = t[e];
                if (0 === r.length) continue;
                let n = c.loadOrGetImage(r, l, o);
                void 0 !== n &&
                  ((g[e] = n), (m += n.width * (p / n.height) + 4));
              }
              if (0 === m) return;
              m -= 4;
              let v = u + a.cellHorizontalPadding;
              for (let e of ("right" === n
                ? (v = Math.floor(u + f - a.cellHorizontalPadding - m))
                : "center" === n && (v = Math.floor(u + f / 2 - m / 2)),
              g)) {
                if (void 0 === e) continue;
                let t = e.width * (p / e.height);
                r > 0 &&
                  (s.beginPath(),
                  J(s, v, d + a.cellVerticalPadding, t, p, r),
                  s.save(),
                  s.clip()),
                  s.drawImage(e, v, d + a.cellVerticalPadding, t, p),
                  r > 0 && s.restore(),
                  (v += t + 4);
              }
            })(
              e,
              e.cell.displayData ?? e.cell.data,
              e.cell.rounding ?? e.theme.roundingRadius ?? 4,
              e.cell.contentAlign
            ),
          measure: (e, t) => 50 * t.data.length,
          onDelete: (e) => ({ ...e, data: [] }),
          provideEditor: () => (e) => {
            let { value: t, onFinishedEditing: r, imageEditorOverride: n } = e;
            return o.createElement(n ?? tH, {
              urls: t.data,
              canWrite: !1 !== t.readonly,
              onCancel: r,
              onChange: (e) => {
                r({ ...t, data: [e] });
              },
            });
          },
          onPaste: (e, t) => {
            let r = (e = e.trim())
              .split(",")
              .map((e) => {
                try {
                  return new URL(e), e;
                } catch {
                  return;
                }
              })
              .filter((e) => void 0 !== e);
            if (
              !(
                r.length === t.data.length && r.every((e, r) => e === t.data[r])
              )
            )
              return { ...t, data: r };
          },
        },
        tL = {
          getAccessibilityString: () => "",
          kind: f.p6.Loading,
          needsHover: !1,
          useLabel: !1,
          needsHoverPosition: !1,
          measure: () => 120,
          draw: (e) => {
            let { cell: t, col: r, row: n, ctx: i, rect: l, theme: o } = e;
            if (void 0 === t.skeletonWidth || 0 === t.skeletonWidth) return;
            let a = t.skeletonWidth;
            if (
              void 0 !== t.skeletonWidthVariability &&
              t.skeletonWidthVariability > 0
            ) {
              let e;
              a += Math.round(
                ((e = 49632 * r + 325176 * n),
                (e ^= e << 13),
                (e ^= e >> 17),
                ((e ^= e << 5) / 4294967295) * 2 * t.skeletonWidthVariability)
              );
            }
            let s = o.cellHorizontalPadding,
              c =
                t.skeletonHeight ??
                Math.min(18, l.height - 2 * o.cellVerticalPadding);
            J(
              i,
              l.x + s,
              l.y + (l.height - c) / 2,
              a,
              c,
              o.roundingRadius ?? 3
            ),
              (i.fillStyle = ef(o.textDark, 0.1)),
              i.fill();
          },
          onPaste: () => void 0,
        };
      function tO() {
        return {
          async: !1,
          breaks: !1,
          extensions: null,
          gfm: !0,
          hooks: null,
          pedantic: !1,
          renderer: null,
          silent: !1,
          tokenizer: null,
          walkTokens: null,
        };
      }
      let tD = tO(),
        tF = /[&<>"']/,
        t_ = RegExp(tF.source, "g"),
        t$ = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
        tN = RegExp(t$.source, "g"),
        tW = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        },
        tB = (e) => tW[e];
      function tj(e, t) {
        if (t) {
          if (tF.test(e)) return e.replace(t_, tB);
        } else if (t$.test(e)) return e.replace(tN, tB);
        return e;
      }
      let tV = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
        tX = /(^|[^\[])\^/g;
      function tU(e, t) {
        let r = "string" == typeof e ? e : e.source;
        t = t || "";
        let n = {
          replace: (e, t) => {
            let i = "string" == typeof t ? t : t.source;
            return (i = i.replace(tX, "$1")), (r = r.replace(e, i)), n;
          },
          getRegex: () => new RegExp(r, t),
        };
        return n;
      }
      function tK(e) {
        try {
          e = encodeURI(e).replace(/%25/g, "%");
        } catch (e) {
          return null;
        }
        return e;
      }
      let tY = { exec: () => null };
      function tG(e, t) {
        let r = e
            .replace(/\|/g, (e, t, r) => {
              let n = !1,
                i = t;
              for (; --i >= 0 && "\\" === r[i]; ) n = !n;
              return n ? "|" : " |";
            })
            .split(/ \|/),
          n = 0;
        if (
          (r[0].trim() || r.shift(),
          r.length > 0 && !r[r.length - 1].trim() && r.pop(),
          t)
        ) {
          if (r.length > t) r.splice(t);
          else for (; r.length < t; ) r.push("");
        }
        for (; n < r.length; n++) r[n] = r[n].trim().replace(/\\\|/g, "|");
        return r;
      }
      function tq(e, t, r) {
        let n = e.length;
        if (0 === n) return "";
        let i = 0;
        for (; i < n; ) {
          let l = e.charAt(n - i - 1);
          if (l !== t || r) {
            if (l !== t && r) i++;
            else break;
          } else i++;
        }
        return e.slice(0, n - i);
      }
      function tZ(e, t, r, n) {
        let i = t.href,
          l = t.title ? tj(t.title) : null,
          o = e[1].replace(/\\([\[\]])/g, "$1");
        if ("!" !== e[0].charAt(0)) {
          n.state.inLink = !0;
          let e = {
            type: "link",
            raw: r,
            href: i,
            title: l,
            text: o,
            tokens: n.inlineTokens(o),
          };
          return (n.state.inLink = !1), e;
        }
        return { type: "image", raw: r, href: i, title: l, text: tj(o) };
      }
      class tQ {
        options;
        rules;
        lexer;
        constructor(e) {
          this.options = e || tD;
        }
        space(e) {
          let t = this.rules.block.newline.exec(e);
          if (t && t[0].length > 0) return { type: "space", raw: t[0] };
        }
        code(e) {
          let t = this.rules.block.code.exec(e);
          if (t) {
            let e = t[0].replace(/^ {1,4}/gm, "");
            return {
              type: "code",
              raw: t[0],
              codeBlockStyle: "indented",
              text: this.options.pedantic ? e : tq(e, "\n"),
            };
          }
        }
        fences(e) {
          let t = this.rules.block.fences.exec(e);
          if (t) {
            let e = t[0],
              r = (function (e, t) {
                let r = e.match(/^(\s+)(?:```)/);
                if (null === r) return t;
                let n = r[1];
                return t
                  .split("\n")
                  .map((e) => {
                    let t = e.match(/^\s+/);
                    if (null === t) return e;
                    let [r] = t;
                    return r.length >= n.length ? e.slice(n.length) : e;
                  })
                  .join("\n");
              })(e, t[3] || "");
            return {
              type: "code",
              raw: e,
              lang: t[2]
                ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1")
                : t[2],
              text: r,
            };
          }
        }
        heading(e) {
          let t = this.rules.block.heading.exec(e);
          if (t) {
            let e = t[2].trim();
            if (/#$/.test(e)) {
              let t = tq(e, "#");
              this.options.pedantic
                ? (e = t.trim())
                : (!t || / $/.test(t)) && (e = t.trim());
            }
            return {
              type: "heading",
              raw: t[0],
              depth: t[1].length,
              text: e,
              tokens: this.lexer.inline(e),
            };
          }
        }
        hr(e) {
          let t = this.rules.block.hr.exec(e);
          if (t) return { type: "hr", raw: t[0] };
        }
        blockquote(e) {
          let t = this.rules.block.blockquote.exec(e);
          if (t) {
            let e = tq(t[0].replace(/^ *>[ \t]?/gm, ""), "\n"),
              r = this.lexer.state.top;
            this.lexer.state.top = !0;
            let n = this.lexer.blockTokens(e);
            return (
              (this.lexer.state.top = r),
              { type: "blockquote", raw: t[0], tokens: n, text: e }
            );
          }
        }
        list(e) {
          let t = this.rules.block.list.exec(e);
          if (t) {
            let r = t[1].trim(),
              n = r.length > 1,
              i = {
                type: "list",
                raw: "",
                ordered: n,
                start: n ? +r.slice(0, -1) : "",
                loose: !1,
                items: [],
              };
            (r = n ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`),
              this.options.pedantic && (r = n ? r : "[*+-]");
            let l = RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),
              o = "",
              a = "",
              s = !1;
            for (; e; ) {
              let r,
                n = !1;
              if (!(t = l.exec(e)) || this.rules.block.hr.test(e)) break;
              (o = t[0]), (e = e.substring(o.length));
              let c = t[2]
                  .split("\n", 1)[0]
                  .replace(/^\t+/, (e) => " ".repeat(3 * e.length)),
                u = e.split("\n", 1)[0],
                d = 0;
              this.options.pedantic
                ? ((d = 2), (a = c.trimStart()))
                : ((d = (d = t[2].search(/[^ ]/)) > 4 ? 1 : d),
                  (a = c.slice(d)),
                  (d += t[1].length));
              let h = !1;
              if (
                (!c &&
                  /^ *$/.test(u) &&
                  ((o += u + "\n"), (e = e.substring(u.length + 1)), (n = !0)),
                !n)
              ) {
                let t = RegExp(
                    `^ {0,${Math.min(
                      3,
                      d - 1
                    )}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`
                  ),
                  r = RegExp(
                    `^ {0,${Math.min(
                      3,
                      d - 1
                    )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
                  ),
                  n = RegExp(`^ {0,${Math.min(3, d - 1)}}(?:\`\`\`|~~~)`),
                  i = RegExp(`^ {0,${Math.min(3, d - 1)}}#`);
                for (; e; ) {
                  let l = e.split("\n", 1)[0];
                  if (
                    ((u = l),
                    this.options.pedantic &&
                      (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                    n.test(u) || i.test(u) || t.test(u) || r.test(e))
                  )
                    break;
                  if (u.search(/[^ ]/) >= d || !u.trim())
                    a += "\n" + u.slice(d);
                  else {
                    if (
                      h ||
                      c.search(/[^ ]/) >= 4 ||
                      n.test(c) ||
                      i.test(c) ||
                      r.test(c)
                    )
                      break;
                    a += "\n" + u;
                  }
                  h || u.trim() || (h = !0),
                    (o += l + "\n"),
                    (e = e.substring(l.length + 1)),
                    (c = u.slice(d));
                }
              }
              !i.loose &&
                (s ? (i.loose = !0) : /\n *\n *$/.test(o) && (s = !0));
              let f = null;
              this.options.gfm &&
                (f = /^\[[ xX]\] /.exec(a)) &&
                ((r = "[ ] " !== f[0]), (a = a.replace(/^\[[ xX]\] +/, ""))),
                i.items.push({
                  type: "list_item",
                  raw: o,
                  task: !!f,
                  checked: r,
                  loose: !1,
                  text: a,
                  tokens: [],
                }),
                (i.raw += o);
            }
            (i.items[i.items.length - 1].raw = o.trimEnd()),
              (i.items[i.items.length - 1].text = a.trimEnd()),
              (i.raw = i.raw.trimEnd());
            for (let e = 0; e < i.items.length; e++)
              if (
                ((this.lexer.state.top = !1),
                (i.items[e].tokens = this.lexer.blockTokens(
                  i.items[e].text,
                  []
                )),
                !i.loose)
              ) {
                let t = i.items[e].tokens.filter((e) => "space" === e.type),
                  r = t.length > 0 && t.some((e) => /\n.*\n/.test(e.raw));
                i.loose = r;
              }
            if (i.loose)
              for (let e = 0; e < i.items.length; e++) i.items[e].loose = !0;
            return i;
          }
        }
        html(e) {
          let t = this.rules.block.html.exec(e);
          if (t)
            return {
              type: "html",
              block: !0,
              raw: t[0],
              pre: "pre" === t[1] || "script" === t[1] || "style" === t[1],
              text: t[0],
            };
        }
        def(e) {
          let t = this.rules.block.def.exec(e);
          if (t) {
            let e = t[1].toLowerCase().replace(/\s+/g, " "),
              r = t[2]
                ? t[2]
                    .replace(/^<(.*)>$/, "$1")
                    .replace(this.rules.inline.anyPunctuation, "$1")
                : "",
              n = t[3]
                ? t[3]
                    .substring(1, t[3].length - 1)
                    .replace(this.rules.inline.anyPunctuation, "$1")
                : t[3];
            return { type: "def", tag: e, raw: t[0], href: r, title: n };
          }
        }
        table(e) {
          let t = this.rules.block.table.exec(e);
          if (!t || !/[:|]/.test(t[2])) return;
          let r = tG(t[1]),
            n = t[2].replace(/^\||\| *$/g, "").split("|"),
            i =
              t[3] && t[3].trim()
                ? t[3].replace(/\n[ \t]*$/, "").split("\n")
                : [],
            l = { type: "table", raw: t[0], header: [], align: [], rows: [] };
          if (r.length === n.length) {
            for (let e of n)
              /^ *-+: *$/.test(e)
                ? l.align.push("right")
                : /^ *:-+: *$/.test(e)
                  ? l.align.push("center")
                  : /^ *:-+ *$/.test(e)
                    ? l.align.push("left")
                    : l.align.push(null);
            for (let e of r)
              l.header.push({ text: e, tokens: this.lexer.inline(e) });
            for (let e of i)
              l.rows.push(
                tG(e, l.header.length).map((e) => ({
                  text: e,
                  tokens: this.lexer.inline(e),
                }))
              );
            return l;
          }
        }
        lheading(e) {
          let t = this.rules.block.lheading.exec(e);
          if (t)
            return {
              type: "heading",
              raw: t[0],
              depth: "=" === t[2].charAt(0) ? 1 : 2,
              text: t[1],
              tokens: this.lexer.inline(t[1]),
            };
        }
        paragraph(e) {
          let t = this.rules.block.paragraph.exec(e);
          if (t) {
            let e =
              "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
            return {
              type: "paragraph",
              raw: t[0],
              text: e,
              tokens: this.lexer.inline(e),
            };
          }
        }
        text(e) {
          let t = this.rules.block.text.exec(e);
          if (t)
            return {
              type: "text",
              raw: t[0],
              text: t[0],
              tokens: this.lexer.inline(t[0]),
            };
        }
        escape(e) {
          let t = this.rules.inline.escape.exec(e);
          if (t) return { type: "escape", raw: t[0], text: tj(t[1]) };
        }
        tag(e) {
          let t = this.rules.inline.tag.exec(e);
          if (t)
            return (
              !this.lexer.state.inLink && /^<a /i.test(t[0])
                ? (this.lexer.state.inLink = !0)
                : this.lexer.state.inLink &&
                  /^<\/a>/i.test(t[0]) &&
                  (this.lexer.state.inLink = !1),
              !this.lexer.state.inRawBlock &&
              /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
                ? (this.lexer.state.inRawBlock = !0)
                : this.lexer.state.inRawBlock &&
                  /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
                  (this.lexer.state.inRawBlock = !1),
              {
                type: "html",
                raw: t[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                block: !1,
                text: t[0],
              }
            );
        }
        link(e) {
          let t = this.rules.inline.link.exec(e);
          if (t) {
            let e = t[2].trim();
            if (!this.options.pedantic && /^</.test(e)) {
              if (!/>$/.test(e)) return;
              let t = tq(e.slice(0, -1), "\\");
              if ((e.length - t.length) % 2 == 0) return;
            } else {
              let e = (function (e, t) {
                if (-1 === e.indexOf(t[1])) return -1;
                let r = 0;
                for (let n = 0; n < e.length; n++)
                  if ("\\" === e[n]) n++;
                  else if (e[n] === t[0]) r++;
                  else if (e[n] === t[1] && --r < 0) return n;
                return -1;
              })(t[2], "()");
              if (e > -1) {
                let r = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
                (t[2] = t[2].substring(0, e)),
                  (t[0] = t[0].substring(0, r).trim()),
                  (t[3] = "");
              }
            }
            let r = t[2],
              n = "";
            if (this.options.pedantic) {
              let e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);
              e && ((r = e[1]), (n = e[3]));
            } else n = t[3] ? t[3].slice(1, -1) : "";
            return (
              (r = r.trim()),
              /^</.test(r) &&
                (r =
                  this.options.pedantic && !/>$/.test(e)
                    ? r.slice(1)
                    : r.slice(1, -1)),
              tZ(
                t,
                {
                  href: r
                    ? r.replace(this.rules.inline.anyPunctuation, "$1")
                    : r,
                  title: n
                    ? n.replace(this.rules.inline.anyPunctuation, "$1")
                    : n,
                },
                t[0],
                this.lexer
              )
            );
          }
        }
        reflink(e, t) {
          let r;
          if (
            (r = this.rules.inline.reflink.exec(e)) ||
            (r = this.rules.inline.nolink.exec(e))
          ) {
            let e = t[(r[2] || r[1]).replace(/\s+/g, " ").toLowerCase()];
            if (!e) {
              let e = r[0].charAt(0);
              return { type: "text", raw: e, text: e };
            }
            return tZ(r, e, r[0], this.lexer);
          }
        }
        emStrong(e, t, r = "") {
          let n = this.rules.inline.emStrongLDelim.exec(e);
          if (
            !(!n || (n[3] && r.match(/[\p{L}\p{N}]/u))) &&
            (!(n[1] || n[2]) || !r || this.rules.inline.punctuation.exec(r))
          ) {
            let r = [...n[0]].length - 1,
              i,
              l,
              o = r,
              a = 0,
              s =
                "*" === n[0][0]
                  ? this.rules.inline.emStrongRDelimAst
                  : this.rules.inline.emStrongRDelimUnd;
            for (
              s.lastIndex = 0, t = t.slice(-1 * e.length + r);
              null != (n = s.exec(t));
            ) {
              if (!(i = n[1] || n[2] || n[3] || n[4] || n[5] || n[6])) continue;
              if (((l = [...i].length), n[3] || n[4])) {
                o += l;
                continue;
              }
              if ((n[5] || n[6]) && r % 3 && !((r + l) % 3)) {
                a += l;
                continue;
              }
              if ((o -= l) > 0) continue;
              l = Math.min(l, l + o + a);
              let t = [...n[0]][0].length,
                s = e.slice(0, r + n.index + t + l);
              if (Math.min(r, l) % 2) {
                let e = s.slice(1, -1);
                return {
                  type: "em",
                  raw: s,
                  text: e,
                  tokens: this.lexer.inlineTokens(e),
                };
              }
              let c = s.slice(2, -2);
              return {
                type: "strong",
                raw: s,
                text: c,
                tokens: this.lexer.inlineTokens(c),
              };
            }
          }
        }
        codespan(e) {
          let t = this.rules.inline.code.exec(e);
          if (t) {
            let e = t[2].replace(/\n/g, " "),
              r = /[^ ]/.test(e),
              n = /^ /.test(e) && / $/.test(e);
            return (
              r && n && (e = e.substring(1, e.length - 1)),
              (e = tj(e, !0)),
              { type: "codespan", raw: t[0], text: e }
            );
          }
        }
        br(e) {
          let t = this.rules.inline.br.exec(e);
          if (t) return { type: "br", raw: t[0] };
        }
        del(e) {
          let t = this.rules.inline.del.exec(e);
          if (t)
            return {
              type: "del",
              raw: t[0],
              text: t[2],
              tokens: this.lexer.inlineTokens(t[2]),
            };
        }
        autolink(e) {
          let t = this.rules.inline.autolink.exec(e);
          if (t) {
            let e, r;
            return (
              (r = "@" === t[2] ? "mailto:" + (e = tj(t[1])) : (e = tj(t[1]))),
              {
                type: "link",
                raw: t[0],
                text: e,
                href: r,
                tokens: [{ type: "text", raw: e, text: e }],
              }
            );
          }
        }
        url(e) {
          let t;
          if ((t = this.rules.inline.url.exec(e))) {
            let e, r;
            if ("@" === t[2]) r = "mailto:" + (e = tj(t[0]));
            else {
              let n;
              do
                (n = t[0]),
                  (t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "");
              while (n !== t[0]);
              (e = tj(t[0])), (r = "www." === t[1] ? "http://" + t[0] : t[0]);
            }
            return {
              type: "link",
              raw: t[0],
              text: e,
              href: r,
              tokens: [{ type: "text", raw: e, text: e }],
            };
          }
        }
        inlineText(e) {
          let t = this.rules.inline.text.exec(e);
          if (t) {
            let e;
            return (
              (e = this.lexer.state.inRawBlock ? t[0] : tj(t[0])),
              { type: "text", raw: t[0], text: e }
            );
          }
        }
      }
      let tJ =
          /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
        t0 = /(?:[*+-]|\d{1,9}[.)])/,
        t1 = tU(
          /^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/
        )
          .replace(/bull/g, t0)
          .getRegex(),
        t2 =
          /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
        t3 = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
        t7 = tU(
          /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/
        )
          .replace("label", t3)
          .replace(
            "title",
            /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
          )
          .getRegex(),
        t6 = tU(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
          .replace(/bull/g, t0)
          .getRegex(),
        t5 =
          "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
        t4 = /<!--(?!-?>)[\s\S]*?(?:-->|$)/,
        t8 = tU(
          "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
          "i"
        )
          .replace("comment", t4)
          .replace("tag", t5)
          .replace(
            "attribute",
            / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
          )
          .getRegex(),
        t9 = tU(t2)
          .replace("hr", tJ)
          .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
          .replace("|lheading", "")
          .replace("|table", "")
          .replace("blockquote", " {0,3}>")
          .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
          .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
          .replace(
            "html",
            "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
          )
          .replace("tag", t5)
          .getRegex(),
        re = {
          blockquote: tU(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
            .replace("paragraph", t9)
            .getRegex(),
          code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
          def: t7,
          fences:
            /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
          heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
          hr: tJ,
          html: t8,
          lheading: t1,
          list: t6,
          newline: /^(?: *(?:\n|$))+/,
          paragraph: t9,
          table: tY,
          text: /^[^\n]+/,
        },
        rt = tU(
          "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
        )
          .replace("hr", tJ)
          .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
          .replace("blockquote", " {0,3}>")
          .replace("code", " {4}[^\\n]")
          .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
          .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
          .replace(
            "html",
            "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
          )
          .replace("tag", t5)
          .getRegex(),
        rr = {
          ...re,
          table: rt,
          paragraph: tU(t2)
            .replace("hr", tJ)
            .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
            .replace("|lheading", "")
            .replace("table", rt)
            .replace("blockquote", " {0,3}>")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace(
              "html",
              "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
            )
            .replace("tag", t5)
            .getRegex(),
        },
        rn = {
          ...re,
          html: tU(
            "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
          )
            .replace("comment", t4)
            .replace(
              /tag/g,
              "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
            )
            .getRegex(),
          def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
          heading: /^(#{1,6})(.*)(?:\n+|$)/,
          fences: tY,
          lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
          paragraph: tU(t2)
            .replace("hr", tJ)
            .replace("heading", " *#{1,6} *[^\n]")
            .replace("lheading", t1)
            .replace("|table", "")
            .replace("blockquote", " {0,3}>")
            .replace("|fences", "")
            .replace("|list", "")
            .replace("|html", "")
            .replace("|tag", "")
            .getRegex(),
        },
        ri = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        rl = /^( {2,}|\\)\n(?!\s*$)/,
        ro = "\\p{P}$+<=>`^|~",
        ra = tU(/^((?![*_])[\spunctuation])/, "u")
          .replace(/punctuation/g, ro)
          .getRegex(),
        rs = tU(
          /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
          "u"
        )
          .replace(/punct/g, ro)
          .getRegex(),
        rc = tU(
          "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])",
          "gu"
        )
          .replace(/punct/g, ro)
          .getRegex(),
        ru = tU(
          "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])",
          "gu"
        )
          .replace(/punct/g, ro)
          .getRegex(),
        rd = tU(/\\([punct])/, "gu")
          .replace(/punct/g, ro)
          .getRegex(),
        rh = tU(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
          .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
          .replace(
            "email",
            /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/
          )
          .getRegex(),
        rf = tU(t4).replace("(?:-->|$)", "-->").getRegex(),
        rp = tU(
          "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
        )
          .replace("comment", rf)
          .replace(
            "attribute",
            /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/
          )
          .getRegex(),
        rg = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
        rm = tU(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
          .replace("label", rg)
          .replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
          .replace(
            "title",
            /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/
          )
          .getRegex(),
        rv = tU(/^!?\[(label)\]\[(ref)\]/)
          .replace("label", rg)
          .replace("ref", t3)
          .getRegex(),
        rw = tU(/^!?\[(ref)\](?:\[\])?/)
          .replace("ref", t3)
          .getRegex(),
        ry = tU("reflink|nolink(?!\\()", "g")
          .replace("reflink", rv)
          .replace("nolink", rw)
          .getRegex(),
        rb = {
          _backpedal: tY,
          anyPunctuation: rd,
          autolink: rh,
          blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
          br: rl,
          code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
          del: tY,
          emStrongLDelim: rs,
          emStrongRDelimAst: rc,
          emStrongRDelimUnd: ru,
          escape: ri,
          link: rm,
          nolink: rw,
          punctuation: ra,
          reflink: rv,
          reflinkSearch: ry,
          tag: rp,
          text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
          url: tY,
        },
        rx = {
          ...rb,
          link: tU(/^!?\[(label)\]\((.*?)\)/)
            .replace("label", rg)
            .getRegex(),
          reflink: tU(/^!?\[(label)\]\s*\[([^\]]*)\]/)
            .replace("label", rg)
            .getRegex(),
        },
        rk = {
          ...rb,
          escape: tU(ri).replace("])", "~|])").getRegex(),
          url: tU(
            /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
            "i"
          )
            .replace(
              "email",
              /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/
            )
            .getRegex(),
          _backpedal:
            /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
          del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
          text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
        },
        rC = {
          ...rk,
          br: tU(rl).replace("{2,}", "*").getRegex(),
          text: tU(rk.text)
            .replace("\\b_", "\\b_| {2,}\\n")
            .replace(/\{2,\}/g, "*")
            .getRegex(),
        },
        rS = { normal: re, gfm: rr, pedantic: rn },
        rM = { normal: rb, gfm: rk, breaks: rC, pedantic: rx };
      class rR {
        tokens;
        options;
        state;
        tokenizer;
        inlineQueue;
        constructor(e) {
          (this.tokens = []),
            (this.tokens.links = Object.create(null)),
            (this.options = e || tD),
            (this.options.tokenizer = this.options.tokenizer || new tQ()),
            (this.tokenizer = this.options.tokenizer),
            (this.tokenizer.options = this.options),
            (this.tokenizer.lexer = this),
            (this.inlineQueue = []),
            (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
          let t = { block: rS.normal, inline: rM.normal };
          this.options.pedantic
            ? ((t.block = rS.pedantic), (t.inline = rM.pedantic))
            : this.options.gfm &&
              ((t.block = rS.gfm),
              this.options.breaks
                ? (t.inline = rM.breaks)
                : (t.inline = rM.gfm)),
            (this.tokenizer.rules = t);
        }
        static get rules() {
          return { block: rS, inline: rM };
        }
        static lex(e, t) {
          return new rR(t).lex(e);
        }
        static lexInline(e, t) {
          return new rR(t).inlineTokens(e);
        }
        lex(e) {
          (e = e.replace(/\r\n|\r/g, "\n")), this.blockTokens(e, this.tokens);
          for (let e = 0; e < this.inlineQueue.length; e++) {
            let t = this.inlineQueue[e];
            this.inlineTokens(t.src, t.tokens);
          }
          return (this.inlineQueue = []), this.tokens;
        }
        blockTokens(e, t = []) {
          let r, n, i, l;
          for (
            e = this.options.pedantic
              ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "")
              : e.replace(
                  /^( *)(\t+)/gm,
                  (e, t, r) => t + "    ".repeat(r.length)
                );
            e;
          )
            if (
              !(
                this.options.extensions &&
                this.options.extensions.block &&
                this.options.extensions.block.some(
                  (n) =>
                    !!(r = n.call({ lexer: this }, e, t)) &&
                    ((e = e.substring(r.raw.length)), t.push(r), !0)
                )
              )
            ) {
              if ((r = this.tokenizer.space(e))) {
                (e = e.substring(r.raw.length)),
                  1 === r.raw.length && t.length > 0
                    ? (t[t.length - 1].raw += "\n")
                    : t.push(r);
                continue;
              }
              if ((r = this.tokenizer.code(e))) {
                (e = e.substring(r.raw.length)),
                  (n = t[t.length - 1]) &&
                  ("paragraph" === n.type || "text" === n.type)
                    ? ((n.raw += "\n" + r.raw),
                      (n.text += "\n" + r.text),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        n.text))
                    : t.push(r);
                continue;
              }
              if (
                (r = this.tokenizer.fences(e)) ||
                (r = this.tokenizer.heading(e)) ||
                (r = this.tokenizer.hr(e)) ||
                (r = this.tokenizer.blockquote(e)) ||
                (r = this.tokenizer.list(e)) ||
                (r = this.tokenizer.html(e))
              ) {
                (e = e.substring(r.raw.length)), t.push(r);
                continue;
              }
              if ((r = this.tokenizer.def(e))) {
                (e = e.substring(r.raw.length)),
                  (n = t[t.length - 1]) &&
                  ("paragraph" === n.type || "text" === n.type)
                    ? ((n.raw += "\n" + r.raw),
                      (n.text += "\n" + r.raw),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        n.text))
                    : this.tokens.links[r.tag] ||
                      (this.tokens.links[r.tag] = {
                        href: r.href,
                        title: r.title,
                      });
                continue;
              }
              if (
                (r = this.tokenizer.table(e)) ||
                (r = this.tokenizer.lheading(e))
              ) {
                (e = e.substring(r.raw.length)), t.push(r);
                continue;
              }
              if (
                ((i = e),
                this.options.extensions && this.options.extensions.startBlock)
              ) {
                let t,
                  r = 1 / 0,
                  n = e.slice(1);
                this.options.extensions.startBlock.forEach((e) => {
                  "number" == typeof (t = e.call({ lexer: this }, n)) &&
                    t >= 0 &&
                    (r = Math.min(r, t));
                }),
                  r < 1 / 0 && r >= 0 && (i = e.substring(0, r + 1));
              }
              if (this.state.top && (r = this.tokenizer.paragraph(i))) {
                (n = t[t.length - 1]),
                  l && "paragraph" === n.type
                    ? ((n.raw += "\n" + r.raw),
                      (n.text += "\n" + r.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        n.text))
                    : t.push(r),
                  (l = i.length !== e.length),
                  (e = e.substring(r.raw.length));
                continue;
              }
              if ((r = this.tokenizer.text(e))) {
                (e = e.substring(r.raw.length)),
                  (n = t[t.length - 1]) && "text" === n.type
                    ? ((n.raw += "\n" + r.raw),
                      (n.text += "\n" + r.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        n.text))
                    : t.push(r);
                continue;
              }
              if (e) {
                let t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(t);
                  break;
                }
                throw Error(t);
              }
            }
          return (this.state.top = !0), t;
        }
        inline(e, t = []) {
          return this.inlineQueue.push({ src: e, tokens: t }), t;
        }
        inlineTokens(e, t = []) {
          let r, n, i, l, o, a;
          let s = e;
          if (this.tokens.links) {
            let e = Object.keys(this.tokens.links);
            if (e.length > 0)
              for (
                ;
                null != (l = this.tokenizer.rules.inline.reflinkSearch.exec(s));
              )
                e.includes(l[0].slice(l[0].lastIndexOf("[") + 1, -1)) &&
                  (s =
                    s.slice(0, l.index) +
                    "[" +
                    "a".repeat(l[0].length - 2) +
                    "]" +
                    s.slice(
                      this.tokenizer.rules.inline.reflinkSearch.lastIndex
                    ));
          }
          for (; null != (l = this.tokenizer.rules.inline.blockSkip.exec(s)); )
            s =
              s.slice(0, l.index) +
              "[" +
              "a".repeat(l[0].length - 2) +
              "]" +
              s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
          for (
            ;
            null != (l = this.tokenizer.rules.inline.anyPunctuation.exec(s));
          )
            s =
              s.slice(0, l.index) +
              "++" +
              s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
          for (; e; )
            if (
              (o || (a = ""),
              (o = !1),
              !(
                this.options.extensions &&
                this.options.extensions.inline &&
                this.options.extensions.inline.some(
                  (n) =>
                    !!(r = n.call({ lexer: this }, e, t)) &&
                    ((e = e.substring(r.raw.length)), t.push(r), !0)
                )
              ))
            ) {
              if ((r = this.tokenizer.escape(e))) {
                (e = e.substring(r.raw.length)), t.push(r);
                continue;
              }
              if ((r = this.tokenizer.tag(e))) {
                (e = e.substring(r.raw.length)),
                  (n = t[t.length - 1]) &&
                  "text" === r.type &&
                  "text" === n.type
                    ? ((n.raw += r.raw), (n.text += r.text))
                    : t.push(r);
                continue;
              }
              if ((r = this.tokenizer.link(e))) {
                (e = e.substring(r.raw.length)), t.push(r);
                continue;
              }
              if ((r = this.tokenizer.reflink(e, this.tokens.links))) {
                (e = e.substring(r.raw.length)),
                  (n = t[t.length - 1]) &&
                  "text" === r.type &&
                  "text" === n.type
                    ? ((n.raw += r.raw), (n.text += r.text))
                    : t.push(r);
                continue;
              }
              if (
                (r = this.tokenizer.emStrong(e, s, a)) ||
                (r = this.tokenizer.codespan(e)) ||
                (r = this.tokenizer.br(e)) ||
                (r = this.tokenizer.del(e)) ||
                (r = this.tokenizer.autolink(e)) ||
                (!this.state.inLink && (r = this.tokenizer.url(e)))
              ) {
                (e = e.substring(r.raw.length)), t.push(r);
                continue;
              }
              if (
                ((i = e),
                this.options.extensions && this.options.extensions.startInline)
              ) {
                let t,
                  r = 1 / 0,
                  n = e.slice(1);
                this.options.extensions.startInline.forEach((e) => {
                  "number" == typeof (t = e.call({ lexer: this }, n)) &&
                    t >= 0 &&
                    (r = Math.min(r, t));
                }),
                  r < 1 / 0 && r >= 0 && (i = e.substring(0, r + 1));
              }
              if ((r = this.tokenizer.inlineText(i))) {
                (e = e.substring(r.raw.length)),
                  "_" !== r.raw.slice(-1) && (a = r.raw.slice(-1)),
                  (o = !0),
                  (n = t[t.length - 1]) && "text" === n.type
                    ? ((n.raw += r.raw), (n.text += r.text))
                    : t.push(r);
                continue;
              }
              if (e) {
                let t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(t);
                  break;
                }
                throw Error(t);
              }
            }
          return t;
        }
      }
      class rE {
        options;
        constructor(e) {
          this.options = e || tD;
        }
        code(e, t, r) {
          let n = (t || "").match(/^\S*/)?.[0];
          return ((e = e.replace(/\n$/, "") + "\n"), n)
            ? '<pre><code class="language-' +
                tj(n) +
                '">' +
                (r ? e : tj(e, !0)) +
                "</code></pre>\n"
            : "<pre><code>" + (r ? e : tj(e, !0)) + "</code></pre>\n";
        }
        blockquote(e) {
          return `<blockquote>
${e}</blockquote>
`;
        }
        html(e, t) {
          return e;
        }
        heading(e, t, r) {
          return `<h${t}>${e}</h${t}>
`;
        }
        hr() {
          return "<hr>\n";
        }
        list(e, t, r) {
          let n = t ? "ol" : "ul";
          return (
            "<" +
            n +
            (t && 1 !== r ? ' start="' + r + '"' : "") +
            ">\n" +
            e +
            "</" +
            n +
            ">\n"
          );
        }
        listitem(e, t, r) {
          return `<li>${e}</li>
`;
        }
        checkbox(e) {
          return (
            "<input " +
            (e ? 'checked="" ' : "") +
            'disabled="" type="checkbox">'
          );
        }
        paragraph(e) {
          return `<p>${e}</p>
`;
        }
        table(e, t) {
          return (
            t && (t = `<tbody>${t}</tbody>`),
            "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
          );
        }
        tablerow(e) {
          return `<tr>
${e}</tr>
`;
        }
        tablecell(e, t) {
          let r = t.header ? "th" : "td";
          return (
            (t.align ? `<${r} align="${t.align}">` : `<${r}>`) +
            e +
            `</${r}>
`
          );
        }
        strong(e) {
          return `<strong>${e}</strong>`;
        }
        em(e) {
          return `<em>${e}</em>`;
        }
        codespan(e) {
          return `<code>${e}</code>`;
        }
        br() {
          return "<br>";
        }
        del(e) {
          return `<del>${e}</del>`;
        }
        link(e, t, r) {
          let n = tK(e);
          if (null === n) return r;
          let i = '<a href="' + (e = n) + '"';
          return t && (i += ' title="' + t + '"'), (i += ">" + r + "</a>");
        }
        image(e, t, r) {
          let n = tK(e);
          if (null === n) return r;
          e = n;
          let i = `<img src="${e}" alt="${r}"`;
          return t && (i += ` title="${t}"`), (i += ">");
        }
        text(e) {
          return e;
        }
      }
      class rT {
        strong(e) {
          return e;
        }
        em(e) {
          return e;
        }
        codespan(e) {
          return e;
        }
        del(e) {
          return e;
        }
        html(e) {
          return e;
        }
        text(e) {
          return e;
        }
        link(e, t, r) {
          return "" + r;
        }
        image(e, t, r) {
          return "" + r;
        }
        br() {
          return "";
        }
      }
      class rI {
        options;
        renderer;
        textRenderer;
        constructor(e) {
          (this.options = e || tD),
            (this.options.renderer = this.options.renderer || new rE()),
            (this.renderer = this.options.renderer),
            (this.renderer.options = this.options),
            (this.textRenderer = new rT());
        }
        static parse(e, t) {
          return new rI(t).parse(e);
        }
        static parseInline(e, t) {
          return new rI(t).parseInline(e);
        }
        parse(e, t = !0) {
          let r = "";
          for (let n = 0; n < e.length; n++) {
            let i = e[n];
            if (
              this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[i.type]
            ) {
              let e = this.options.extensions.renderers[i.type].call(
                { parser: this },
                i
              );
              if (
                !1 !== e ||
                ![
                  "space",
                  "hr",
                  "heading",
                  "code",
                  "table",
                  "blockquote",
                  "list",
                  "html",
                  "paragraph",
                  "text",
                ].includes(i.type)
              ) {
                r += e || "";
                continue;
              }
            }
            switch (i.type) {
              case "space":
                continue;
              case "hr":
                r += this.renderer.hr();
                continue;
              case "heading":
                r += this.renderer.heading(
                  this.parseInline(i.tokens),
                  i.depth,
                  this.parseInline(i.tokens, this.textRenderer).replace(
                    tV,
                    (e, t) =>
                      "colon" === (t = t.toLowerCase())
                        ? ":"
                        : "#" === t.charAt(0)
                          ? "x" === t.charAt(1)
                            ? String.fromCharCode(parseInt(t.substring(2), 16))
                            : String.fromCharCode(+t.substring(1))
                          : ""
                  )
                );
                continue;
              case "code":
                r += this.renderer.code(i.text, i.lang, !!i.escaped);
                continue;
              case "table": {
                let e = "",
                  t = "";
                for (let e = 0; e < i.header.length; e++)
                  t += this.renderer.tablecell(
                    this.parseInline(i.header[e].tokens),
                    { header: !0, align: i.align[e] }
                  );
                e += this.renderer.tablerow(t);
                let n = "";
                for (let e = 0; e < i.rows.length; e++) {
                  let r = i.rows[e];
                  t = "";
                  for (let e = 0; e < r.length; e++)
                    t += this.renderer.tablecell(
                      this.parseInline(r[e].tokens),
                      { header: !1, align: i.align[e] }
                    );
                  n += this.renderer.tablerow(t);
                }
                r += this.renderer.table(e, n);
                continue;
              }
              case "blockquote": {
                let e = this.parse(i.tokens);
                r += this.renderer.blockquote(e);
                continue;
              }
              case "list": {
                let e = i.ordered,
                  t = i.start,
                  n = i.loose,
                  l = "";
                for (let e = 0; e < i.items.length; e++) {
                  let t = i.items[e],
                    r = t.checked,
                    o = t.task,
                    a = "";
                  if (t.task) {
                    let e = this.renderer.checkbox(!!r);
                    n
                      ? t.tokens.length > 0 && "paragraph" === t.tokens[0].type
                        ? ((t.tokens[0].text = e + " " + t.tokens[0].text),
                          t.tokens[0].tokens &&
                            t.tokens[0].tokens.length > 0 &&
                            "text" === t.tokens[0].tokens[0].type &&
                            (t.tokens[0].tokens[0].text =
                              e + " " + t.tokens[0].tokens[0].text))
                        : t.tokens.unshift({ type: "text", text: e + " " })
                      : (a += e + " ");
                  }
                  (a += this.parse(t.tokens, n)),
                    (l += this.renderer.listitem(a, o, !!r));
                }
                r += this.renderer.list(l, e, t);
                continue;
              }
              case "html":
                r += this.renderer.html(i.text, i.block);
                continue;
              case "paragraph":
                r += this.renderer.paragraph(this.parseInline(i.tokens));
                continue;
              case "text": {
                let l = i,
                  o = l.tokens ? this.parseInline(l.tokens) : l.text;
                for (; n + 1 < e.length && "text" === e[n + 1].type; )
                  o +=
                    "\n" +
                    ((l = e[++n]).tokens ? this.parseInline(l.tokens) : l.text);
                r += t ? this.renderer.paragraph(o) : o;
                continue;
              }
              default: {
                let e = 'Token with "' + i.type + '" type was not found.';
                if (this.options.silent) return console.error(e), "";
                throw Error(e);
              }
            }
          }
          return r;
        }
        parseInline(e, t) {
          t = t || this.renderer;
          let r = "";
          for (let n = 0; n < e.length; n++) {
            let i = e[n];
            if (
              this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[i.type]
            ) {
              let e = this.options.extensions.renderers[i.type].call(
                { parser: this },
                i
              );
              if (
                !1 !== e ||
                ![
                  "escape",
                  "html",
                  "link",
                  "image",
                  "strong",
                  "em",
                  "codespan",
                  "br",
                  "del",
                  "text",
                ].includes(i.type)
              ) {
                r += e || "";
                continue;
              }
            }
            switch (i.type) {
              case "escape":
              case "text":
                r += t.text(i.text);
                break;
              case "html":
                r += t.html(i.text);
                break;
              case "link":
                r += t.link(i.href, i.title, this.parseInline(i.tokens, t));
                break;
              case "image":
                r += t.image(i.href, i.title, i.text);
                break;
              case "strong":
                r += t.strong(this.parseInline(i.tokens, t));
                break;
              case "em":
                r += t.em(this.parseInline(i.tokens, t));
                break;
              case "codespan":
                r += t.codespan(i.text);
                break;
              case "br":
                r += t.br();
                break;
              case "del":
                r += t.del(this.parseInline(i.tokens, t));
                break;
              default: {
                let e = 'Token with "' + i.type + '" type was not found.';
                if (this.options.silent) return console.error(e), "";
                throw Error(e);
              }
            }
          }
          return r;
        }
      }
      class rP {
        options;
        constructor(e) {
          this.options = e || tD;
        }
        static passThroughHooks = new Set([
          "preprocess",
          "postprocess",
          "processAllTokens",
        ]);
        preprocess(e) {
          return e;
        }
        postprocess(e) {
          return e;
        }
        processAllTokens(e) {
          return e;
        }
      }
      class rz {
        defaults = tO();
        options = this.setOptions;
        parse = this.#e(rR.lex, rI.parse);
        parseInline = this.#e(rR.lexInline, rI.parseInline);
        Parser = rI;
        Renderer = rE;
        TextRenderer = rT;
        Lexer = rR;
        Tokenizer = tQ;
        Hooks = rP;
        constructor(...e) {
          this.use(...e);
        }
        walkTokens(e, t) {
          let r = [];
          for (let n of e)
            switch (((r = r.concat(t.call(this, n))), n.type)) {
              case "table":
                for (let e of n.header)
                  r = r.concat(this.walkTokens(e.tokens, t));
                for (let e of n.rows)
                  for (let n of e) r = r.concat(this.walkTokens(n.tokens, t));
                break;
              case "list":
                r = r.concat(this.walkTokens(n.items, t));
                break;
              default: {
                let e = n;
                this.defaults.extensions?.childTokens?.[e.type]
                  ? this.defaults.extensions.childTokens[e.type].forEach(
                      (n) => {
                        r = r.concat(this.walkTokens(e[n], t));
                      }
                    )
                  : e.tokens && (r = r.concat(this.walkTokens(e.tokens, t)));
              }
            }
          return r;
        }
        use(...e) {
          let t = this.defaults.extensions || {
            renderers: {},
            childTokens: {},
          };
          return (
            e.forEach((e) => {
              let r = { ...e };
              if (
                ((r.async = this.defaults.async || r.async || !1),
                e.extensions &&
                  (e.extensions.forEach((e) => {
                    if (!e.name) throw Error("extension name required");
                    if ("renderer" in e) {
                      let r = t.renderers[e.name];
                      r
                        ? (t.renderers[e.name] = function (...t) {
                            let n = e.renderer.apply(this, t);
                            return !1 === n && (n = r.apply(this, t)), n;
                          })
                        : (t.renderers[e.name] = e.renderer);
                    }
                    if ("tokenizer" in e) {
                      if (
                        !e.level ||
                        ("block" !== e.level && "inline" !== e.level)
                      )
                        throw Error(
                          "extension level must be 'block' or 'inline'"
                        );
                      let r = t[e.level];
                      r ? r.unshift(e.tokenizer) : (t[e.level] = [e.tokenizer]),
                        e.start &&
                          ("block" === e.level
                            ? t.startBlock
                              ? t.startBlock.push(e.start)
                              : (t.startBlock = [e.start])
                            : "inline" === e.level &&
                              (t.startInline
                                ? t.startInline.push(e.start)
                                : (t.startInline = [e.start])));
                    }
                    "childTokens" in e &&
                      e.childTokens &&
                      (t.childTokens[e.name] = e.childTokens);
                  }),
                  (r.extensions = t)),
                e.renderer)
              ) {
                let t = this.defaults.renderer || new rE(this.defaults);
                for (let r in e.renderer) {
                  if (!(r in t)) throw Error(`renderer '${r}' does not exist`);
                  if ("options" === r) continue;
                  let n = e.renderer[r],
                    i = t[r];
                  t[r] = (...e) => {
                    let r = n.apply(t, e);
                    return !1 === r && (r = i.apply(t, e)), r || "";
                  };
                }
                r.renderer = t;
              }
              if (e.tokenizer) {
                let t = this.defaults.tokenizer || new tQ(this.defaults);
                for (let r in e.tokenizer) {
                  if (!(r in t)) throw Error(`tokenizer '${r}' does not exist`);
                  if (["options", "rules", "lexer"].includes(r)) continue;
                  let n = e.tokenizer[r],
                    i = t[r];
                  t[r] = (...e) => {
                    let r = n.apply(t, e);
                    return !1 === r && (r = i.apply(t, e)), r;
                  };
                }
                r.tokenizer = t;
              }
              if (e.hooks) {
                let t = this.defaults.hooks || new rP();
                for (let r in e.hooks) {
                  if (!(r in t)) throw Error(`hook '${r}' does not exist`);
                  if ("options" === r) continue;
                  let n = e.hooks[r],
                    i = t[r];
                  rP.passThroughHooks.has(r)
                    ? (t[r] = (e) => {
                        if (this.defaults.async)
                          return Promise.resolve(n.call(t, e)).then((e) =>
                            i.call(t, e)
                          );
                        let r = n.call(t, e);
                        return i.call(t, r);
                      })
                    : (t[r] = (...e) => {
                        let r = n.apply(t, e);
                        return !1 === r && (r = i.apply(t, e)), r;
                      });
                }
                r.hooks = t;
              }
              if (e.walkTokens) {
                let t = this.defaults.walkTokens,
                  n = e.walkTokens;
                r.walkTokens = function (e) {
                  let r = [];
                  return (
                    r.push(n.call(this, e)),
                    t && (r = r.concat(t.call(this, e))),
                    r
                  );
                };
              }
              this.defaults = { ...this.defaults, ...r };
            }),
            this
          );
        }
        setOptions(e) {
          return (this.defaults = { ...this.defaults, ...e }), this;
        }
        lexer(e, t) {
          return rR.lex(e, t ?? this.defaults);
        }
        parser(e, t) {
          return rI.parse(e, t ?? this.defaults);
        }
        #e(e, t) {
          return (r, n) => {
            let i = { ...n },
              l = { ...this.defaults, ...i };
            !0 === this.defaults.async &&
              !1 === i.async &&
              (l.silent ||
                console.warn(
                  "marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."
                ),
              (l.async = !0));
            let o = this.#t(!!l.silent, !!l.async);
            if (null == r)
              return o(Error("marked(): input parameter is undefined or null"));
            if ("string" != typeof r)
              return o(
                Error(
                  "marked(): input parameter is of type " +
                    Object.prototype.toString.call(r) +
                    ", string expected"
                )
              );
            if ((l.hooks && (l.hooks.options = l), l.async))
              return Promise.resolve(l.hooks ? l.hooks.preprocess(r) : r)
                .then((t) => e(t, l))
                .then((e) => (l.hooks ? l.hooks.processAllTokens(e) : e))
                .then((e) =>
                  l.walkTokens
                    ? Promise.all(this.walkTokens(e, l.walkTokens)).then(
                        () => e
                      )
                    : e
                )
                .then((e) => t(e, l))
                .then((e) => (l.hooks ? l.hooks.postprocess(e) : e))
                .catch(o);
            try {
              l.hooks && (r = l.hooks.preprocess(r));
              let n = e(r, l);
              l.hooks && (n = l.hooks.processAllTokens(n)),
                l.walkTokens && this.walkTokens(n, l.walkTokens);
              let i = t(n, l);
              return l.hooks && (i = l.hooks.postprocess(i)), i;
            } catch (e) {
              return o(e);
            }
          };
        }
        #t(e, t) {
          return (r) => {
            if (
              ((r.message +=
                "\nPlease report this to https://github.com/markedjs/marked."),
              e)
            ) {
              let e =
                "<p>An error occurred:</p><pre>" +
                tj(r.message + "", !0) +
                "</pre>";
              return t ? Promise.resolve(e) : e;
            }
            if (t) return Promise.reject(r);
            throw r;
          };
        }
      }
      let rH = new rz();
      function rA(e, t) {
        return rH.parse(e, t);
      }
      (rA.options = rA.setOptions =
        function (e) {
          return (
            rH.setOptions(e),
            (rA.defaults = rH.defaults),
            (tD = rA.defaults),
            rA
          );
        }),
        (rA.getDefaults = tO),
        (rA.defaults = tD),
        (rA.use = function (...e) {
          return (
            rH.use(...e), (rA.defaults = rH.defaults), (tD = rA.defaults), rA
          );
        }),
        (rA.walkTokens = function (e, t) {
          return rH.walkTokens(e, t);
        }),
        (rA.parseInline = rH.parseInline),
        (rA.Parser = rI),
        (rA.parser = rI.parse),
        (rA.Renderer = rE),
        (rA.TextRenderer = rT),
        (rA.Lexer = rR),
        (rA.lexer = rR.lex),
        (rA.Tokenizer = tQ),
        (rA.Hooks = rP),
        (rA.parse = rA),
        rA.options,
        rA.setOptions,
        rA.use,
        rA.walkTokens,
        rA.parseInline,
        rI.parse,
        rR.lex;
      let rL = (0, eJ.z)("div")({
        name: "MarkdownContainer",
        class: "gdg-mnuv029",
        propsAsIs: !1,
      });
      class rO extends o.PureComponent {
        targetElement = null;
        renderMarkdownIntoDiv() {
          let { targetElement: e, props: t } = this;
          if (null === e) return;
          let { contents: r, createNode: n } = t,
            i = rA(r),
            l = document.createRange();
          l.selectNodeContents(e), l.deleteContents();
          let o = n?.(i);
          if (void 0 === o) {
            let e = document.createElement("template");
            (e.innerHTML = i), (o = e.content);
          }
          for (let t of (e.append(o), e.getElementsByTagName("a")))
            (t.target = "_blank"), (t.rel = "noreferrer noopener");
        }
        containerRefHook = (e) => {
          (this.targetElement = e), this.renderMarkdownIntoDiv();
        };
        render() {
          return (
            this.renderMarkdownIntoDiv(),
            o.createElement(rL, { ref: this.containerRefHook })
          );
        }
      }
      let rD = (0, eJ.z)("textarea")({
          name: "InputBox",
          class: "gdg-izpuzkl",
          propsAsIs: !1,
        }),
        rF = (0, eJ.z)("div")({
          name: "ShadowBox",
          class: "gdg-s69h75o",
          propsAsIs: !1,
        }),
        r_ = (0, eJ.z)("div")({
          name: "GrowingEntryStyle",
          class: "gdg-g1y0xocz",
          propsAsIs: !1,
        }),
        r$ = 0,
        rN = (e) => {
          let {
              placeholder: t,
              value: r,
              onKeyDown: n,
              highlight: i,
              altNewline: l,
              validatedSelection: s,
              ...c
            } = e,
            { onChange: u, className: d } = c,
            h = o.useRef(null),
            f = r ?? "";
          (0, a.hu)(
            void 0 !== u,
            "GrowingEntry must be a controlled input area"
          );
          let [p] = o.useState(() => "input-box-" + (r$ = (r$ + 1) % 1e7));
          o.useEffect(() => {
            let e = h.current;
            if (null === e || e.disabled) return;
            let t = f.toString().length;
            e.focus(), e.setSelectionRange(i ? 0 : t, t);
          }, []),
            o.useLayoutEffect(() => {
              if (void 0 !== s) {
                let e = "number" == typeof s ? [s, null] : s;
                h.current?.setSelectionRange(e[0], e[1]);
              }
            }, [s]);
          let g = o.useCallback(
            (e) => {
              ("Enter" === e.key && e.shiftKey && !0 === l) || n?.(e);
            },
            [l, n]
          );
          return o.createElement(
            r_,
            { className: "gdg-growing-entry" },
            o.createElement(rF, { className: d }, f + "\n"),
            o.createElement(rD, {
              ...c,
              className: (d ?? "") + " gdg-input",
              id: p,
              ref: h,
              onKeyDown: g,
              value: f,
              placeholder: t,
              dir: "auto",
            })
          );
        },
        rW = (0, eJ.z)("div")({
          name: "MarkdownOverlayEditorStyle",
          class: "gdg-m1pnx84e",
          propsAsIs: !1,
          vars: { "m1pnx84e-0": [(e) => e.targetWidth, "px"] },
        }),
        rB = (e) => {
          let {
              value: t,
              onChange: r,
              forceEditMode: n,
              createNode: i,
              targetRect: l,
              onFinish: a,
              validatedSelection: s,
            } = e,
            c = t.data,
            u = !0 === t.readonly,
            [d, h] = o.useState("" === c || n),
            f = o.useCallback(() => {
              h((e) => !e);
            }, []),
            p = c ? "gdg-ml-6" : "";
          return d
            ? o.createElement(
                rW,
                { targetWidth: l.width - 20 },
                o.createElement(rN, {
                  autoFocus: !0,
                  highlight: !1,
                  validatedSelection: s,
                  value: c,
                  onKeyDown: (e) => {
                    "Enter" === e.key && e.stopPropagation();
                  },
                  onChange: r,
                }),
                o.createElement(
                  "div",
                  {
                    className: `gdg-edit-icon gdg-checkmark-hover ${p}`,
                    onClick: () => a(t),
                  },
                  o.createElement(k, null)
                )
              )
            : o.createElement(
                rW,
                { targetWidth: l.width },
                o.createElement(rO, { contents: c, createNode: i }),
                !u &&
                  o.createElement(
                    o.Fragment,
                    null,
                    o.createElement("div", { className: "spacer" }),
                    o.createElement(
                      "div",
                      {
                        className: `gdg-edit-icon gdg-edit-hover ${p}`,
                        onClick: f,
                      },
                      o.createElement(x, null)
                    )
                  ),
                o.createElement("textarea", {
                  className: "gdg-md-edit-textarea gdg-input",
                  autoFocus: !0,
                })
              );
        },
        rj = {
          getAccessibilityString: (e) => e.data?.toString() ?? "",
          kind: f.p6.Markdown,
          needsHover: !1,
          needsHoverPosition: !1,
          drawPrep: G,
          measure: (e, t, r) => {
            let n = t.data.split("\n")[0];
            return e.measureText(n).width + 2 * r.cellHorizontalPadding;
          },
          draw: (e) => Q(e, e.cell.data, e.cell.contentAlign),
          onDelete: (e) => ({ ...e, data: "" }),
          provideEditor: () => (e) => {
            let {
              onChange: t,
              value: r,
              target: n,
              onFinishedEditing: i,
              markdownDivCreateNode: l,
              forceEditMode: a,
              validatedSelection: s,
            } = e;
            return o.createElement(rB, {
              onFinish: i,
              targetRect: n,
              value: r,
              validatedSelection: s,
              onChange: (e) => t({ ...r, data: e.target.value }),
              forceEditMode: a,
              createNode: l,
            });
          },
          onPaste: (e, t) => (e === t.data ? void 0 : { ...t, data: e }),
        },
        rV = {
          getAccessibilityString: (e) => e.row.toString(),
          kind: f.$o.Marker,
          needsHover: !0,
          needsHoverPosition: !1,
          drawPrep: function (e, t) {
            let { ctx: r, theme: n } = e,
              i = n.markerFontFull,
              l = t ?? {};
            return (
              l?.font !== i && ((r.font = i), (l.font = i)),
              (l.deprep = rX),
              (r.textAlign = "center"),
              l
            );
          },
          measure: () => 44,
          draw: (e) =>
            (function (e, t, r, n, i) {
              let { ctx: l, rect: o, hoverAmount: a, theme: s } = e,
                { x: c, y: u, width: d, height: h } = o,
                f = r ? 1 : "checkbox-visible" === n ? 0.6 + 0.4 * a : a;
              if ("number" !== n && f > 0) {
                l.globalAlpha = f;
                let e = 7 * (r ? a : 1);
                if (
                  (eg(
                    l,
                    s,
                    r,
                    i ? c + e : c,
                    u,
                    i ? d - e : d,
                    h,
                    !0,
                    void 0,
                    void 0,
                    18
                  ),
                  i)
                ) {
                  for (let e of ((l.globalAlpha = a), l.beginPath(), [3, 6]))
                    for (let t of [-5, -1, 3])
                      l.rect(c + e, u + h / 2 + t, 2, 2);
                  (l.fillStyle = s.textLight), l.fill(), l.beginPath();
                }
                l.globalAlpha = 1;
              }
              if ("number" === n || ("both" === n && !r)) {
                let e = t.toString(),
                  r = s.markerFontFull;
                "both" === n && 0 !== a && (l.globalAlpha = 1 - a),
                  (l.fillStyle = s.textLight),
                  (l.font = r),
                  l.fillText(e, c + d / 2, u + h / 2 + U(l, r)),
                  0 !== a && (l.globalAlpha = 1);
              }
            })(
              e,
              e.cell.row,
              e.cell.checked,
              e.cell.markerKind,
              e.cell.drawHandle
            ),
          onClick: (e) => {
            let { bounds: t, cell: r, posX: n, posY: i } = e,
              { width: l, height: o } = t;
            if (
              10 >= Math.abs(n - (r.drawHandle ? 7 + (l - 7) / 2 : l / 2)) &&
              10 >= Math.abs(i - o / 2)
            )
              return { ...r, checked: !r.checked };
          },
          onPaste: () => void 0,
        };
      function rX(e) {
        let { ctx: t } = e;
        t.textAlign = "start";
      }
      let rU = {
          getAccessibilityString: () => "",
          kind: f.$o.NewRow,
          needsHover: !0,
          needsHoverPosition: !1,
          measure: () => 200,
          draw: (e) =>
            (function (e, t, r) {
              let {
                  ctx: n,
                  rect: i,
                  hoverAmount: l,
                  theme: o,
                  spriteManager: a,
                } = e,
                { x: s, y: c, width: u, height: d } = i;
              n.beginPath(),
                (n.globalAlpha = l),
                n.rect(s + 1, c + 1, u, d - 2),
                (n.fillStyle = o.bgHeaderHovered),
                n.fill(),
                (n.globalAlpha = 1),
                n.beginPath();
              let h = "" !== t,
                f = 0;
              if (void 0 !== r) {
                let e = d - 8;
                a.drawSprite(r, "normal", n, s + 4, c + 4, e, o, h ? 1 : l),
                  (f = e);
              } else {
                f = 24;
                let e = h ? 12 : 12 * l,
                  t = h ? 0 : (1 - l) * 6,
                  r = o.cellHorizontalPadding + 4;
                e > 0 &&
                  (n.moveTo(s + r + t, c + d / 2),
                  n.lineTo(s + r + t + e, c + d / 2),
                  n.moveTo(s + r + t + 0.5 * e, c + d / 2 - 0.5 * e),
                  n.lineTo(s + r + t + 0.5 * e, c + d / 2 + 0.5 * e),
                  (n.lineWidth = 2),
                  (n.strokeStyle = o.bgIconHeader),
                  (n.lineCap = "round"),
                  n.stroke());
              }
              (n.fillStyle = o.textMedium),
                n.fillText(
                  t,
                  f + s + o.cellHorizontalPadding + 0.5,
                  c + d / 2 + U(n, o)
                ),
                n.beginPath();
            })(e, e.cell.hint, e.cell.icon),
          onPaste: () => void 0,
        },
        rK = o.lazy(async () => await r.e(5719).then(r.bind(r, 25719))),
        rY = {
          getAccessibilityString: (e) => e.data?.toString() ?? "",
          kind: f.p6.Number,
          needsHover: !1,
          needsHoverPosition: !1,
          useLabel: !0,
          drawPrep: G,
          draw: (e) => Q(e, e.cell.displayData, e.cell.contentAlign),
          measure: (e, t, r) =>
            e.measureText(t.displayData).width + 2 * r.cellHorizontalPadding,
          onDelete: (e) => ({ ...e, data: void 0 }),
          provideEditor: () => (e) => {
            let {
              isHighlighted: t,
              onChange: r,
              value: n,
              validatedSelection: i,
            } = e;
            return o.createElement(
              o.Suspense,
              { fallback: null },
              o.createElement(rK, {
                highlight: t,
                disabled: !0 === n.readonly,
                value: n.data,
                fixedDecimals: n.fixedDecimals,
                allowNegative: n.allowNegative,
                thousandSeparator: n.thousandSeparator,
                decimalSeparator: n.decimalSeparator,
                validatedSelection: i,
                onChange: (e) =>
                  r({
                    ...n,
                    data: Number.isNaN(e.floatValue ?? 0) ? 0 : e.floatValue,
                  }),
              })
            );
          },
          onPaste: (e, t, r) => {
            let n =
              "number" == typeof r.rawValue
                ? r.rawValue
                : Number.parseFloat(
                    "string" == typeof r.rawValue ? r.rawValue : e
                  );
            if (!Number.isNaN(n) && t.data !== n)
              return {
                ...t,
                data: n,
                displayData: r.formattedString ?? t.displayData,
              };
          },
        },
        rG = {
          getAccessibilityString: () => "",
          measure: () => 108,
          kind: f.p6.Protected,
          needsHover: !1,
          needsHoverPosition: !1,
          draw: function (e) {
            let { ctx: t, theme: r, rect: n } = e,
              { x: i, y: l, height: o } = n;
            t.beginPath();
            let a = i + r.cellHorizontalPadding + 2.5,
              s = l + o / 2,
              c = 2.5 * Math.cos((30 * m) / 180),
              u = 2.5 * Math.sin((30 * m) / 180);
            for (let e = 0; e < 12; e++)
              t.moveTo(a, s - 2.5),
                t.lineTo(a, s + 2.5),
                t.moveTo(a + c, s - u),
                t.lineTo(a - c, s + u),
                t.moveTo(a - c, s - u),
                t.lineTo(a + c, s + u),
                (a += 8);
            (t.lineWidth = 1.1),
              (t.lineCap = "square"),
              (t.strokeStyle = r.textLight),
              t.stroke();
          },
          onPaste: () => void 0,
        },
        rq = {
          getAccessibilityString: (e) => e.data?.toString() ?? "",
          kind: f.p6.RowID,
          needsHover: !1,
          needsHoverPosition: !1,
          drawPrep: (e, t) => G(e, t, e.theme.textLight),
          draw: (e) => Q(e, e.cell.data, e.cell.contentAlign),
          measure: (e, t, r) =>
            e.measureText(t.data).width + 2 * r.cellHorizontalPadding,
          provideEditor: () => (e) => {
            let {
              isHighlighted: t,
              onChange: r,
              value: n,
              validatedSelection: i,
            } = e;
            return o.createElement(rN, {
              highlight: t,
              autoFocus: !0 !== n.readonly,
              disabled: !1 !== n.readonly,
              value: n.data,
              validatedSelection: i,
              onChange: (e) => r({ ...n, data: e.target.value }),
            });
          },
          onPaste: () => void 0,
        },
        rZ = {
          getAccessibilityString: (e) => e.data?.toString() ?? "",
          kind: f.p6.Text,
          needsHover: !1,
          needsHoverPosition: !1,
          drawPrep: G,
          useLabel: !0,
          draw: (e) => (
            Q(
              e,
              e.cell.displayData,
              e.cell.contentAlign,
              e.cell.allowWrapping,
              e.hyperWrapping
            ),
            !0
          ),
          measure: (e, t, r) =>
            Math.max(
              ...t.displayData
                .split("\n", !0 === t.allowWrapping ? void 0 : 1)
                .map((t) => e.measureText(t).width)
            ) +
            2 * r.cellHorizontalPadding,
          onDelete: (e) => ({ ...e, data: "" }),
          provideEditor: (e) => ({
            disablePadding: !0 === e.allowWrapping,
            editor: (t) => {
              let {
                isHighlighted: r,
                onChange: n,
                value: i,
                validatedSelection: l,
              } = t;
              return o.createElement(rN, {
                style:
                  !0 === e.allowWrapping ? { padding: "3px 8.5px" } : void 0,
                highlight: r,
                autoFocus: !0 !== i.readonly,
                disabled: !0 === i.readonly,
                altNewline: !0,
                value: i.data,
                validatedSelection: l,
                onChange: (e) => n({ ...i, data: e.target.value }),
              });
            },
          }),
          onPaste: (e, t, r) =>
            e === t.data
              ? void 0
              : {
                  ...t,
                  data: e,
                  displayData: r.formattedString ?? t.displayData,
                },
        },
        rQ = (0, eJ.z)("div")({
          name: "UriOverlayEditorStyle",
          class: "gdg-u1rrojo",
          propsAsIs: !1,
        });
      var rJ = (e) => {
        let {
            uri: t,
            onChange: r,
            forceEditMode: n,
            readonly: i,
            validatedSelection: l,
            preview: a,
          } = e,
          [s, c] = o.useState("" === t || n),
          u = o.useCallback(() => {
            c(!0);
          }, []);
        return s
          ? o.createElement(rN, {
              validatedSelection: l,
              highlight: !0,
              autoFocus: !0,
              value: t,
              onChange: r,
            })
          : o.createElement(
              rQ,
              null,
              o.createElement(
                "a",
                {
                  className: "gdg-link-area",
                  href: t,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                a
              ),
              !i &&
                o.createElement(
                  "div",
                  { className: "gdg-edit-icon", onClick: u },
                  o.createElement(x, null)
                ),
              o.createElement("textarea", {
                className: "gdg-input",
                autoFocus: !0,
              })
            );
      };
      function r0(e, t, r, n) {
        let i = r.cellHorizontalPadding,
          l = t.height / 2 - e.actualBoundingBoxAscent / 2,
          o = e.width,
          a = e.actualBoundingBoxAscent;
        return (
          "right" === n
            ? (i = t.width - o - r.cellHorizontalPadding)
            : "center" === n && (i = t.width / 2 - o / 2),
          { x: i, y: l, width: o, height: a }
        );
      }
      let r1 = [
          rV,
          rU,
          tk,
          tM,
          tT,
          tA,
          tL,
          rj,
          rY,
          rG,
          rq,
          rZ,
          {
            getAccessibilityString: (e) => e.data?.toString() ?? "",
            kind: f.p6.Uri,
            needsHover: !0,
            needsHoverPosition: !0,
            useLabel: !0,
            drawPrep: G,
            draw: (e) => {
              let {
                  cell: t,
                  theme: r,
                  overrideCursor: n,
                  hoverX: i,
                  hoverY: l,
                  rect: o,
                  ctx: a,
                } = e,
                s = t.displayData ?? t.data;
              if (
                void 0 !== n &&
                !0 === t.hoverEffect &&
                void 0 !== i &&
                void 0 !== l
              ) {
                let {
                  x: c,
                  y: u,
                  width: d,
                  height: h,
                } = r0(X(s, a, r.baseFontFull), o, r, t.contentAlign);
                if (
                  i >= c - 4 &&
                  i <= c - 4 + d + 8 &&
                  l >= u - 4 &&
                  l <= u - 4 + h + 8
                ) {
                  let i = U(a, r.baseFontFull);
                  n("pointer");
                  let l = u - i;
                  a.beginPath(),
                    a.moveTo(o.x + c, Math.floor(o.y + l + h + 5) + 0.5),
                    a.lineTo(o.x + c + d, Math.floor(o.y + l + h + 5) + 0.5),
                    (a.strokeStyle = r.textDark),
                    a.stroke(),
                    a.save(),
                    (a.fillStyle = e.cellFillColor),
                    Q({ ...e, rect: { ...o, x: o.x - 1 } }, s, t.contentAlign),
                    Q({ ...e, rect: { ...o, x: o.x - 2 } }, s, t.contentAlign),
                    Q({ ...e, rect: { ...o, x: o.x + 1 } }, s, t.contentAlign),
                    Q({ ...e, rect: { ...o, x: o.x + 2 } }, s, t.contentAlign),
                    a.restore();
                }
              }
              Q(e, s, t.contentAlign);
            },
            onClick: (e) => {
              let { cell: t, bounds: r, posX: n, posY: i, theme: l } = e,
                o = t.displayData ?? t.data;
              if (!0 !== t.hoverEffect || void 0 === t.onClickUri) return;
              let a = B[V(o, void 0, "middle", l.baseFontFull)];
              if (void 0 === a) return;
              let s = r0(a, r, l, t.contentAlign);
              eR(
                {
                  x: s.x - 4,
                  y: s.y - 4,
                  width: s.width + 8,
                  height: s.height + 8,
                },
                n,
                i
              ) && t.onClickUri(e);
            },
            measure: (e, t, r) =>
              e.measureText(t.displayData ?? t.data).width +
              2 * r.cellHorizontalPadding,
            onDelete: (e) => ({ ...e, data: "" }),
            provideEditor: (e) => (t) => {
              let {
                onChange: r,
                value: n,
                forceEditMode: i,
                validatedSelection: l,
              } = t;
              return o.createElement(rJ, {
                forceEditMode:
                  i || (!0 === e.hoverEffect && void 0 !== e.onClickUri),
                uri: n.data,
                preview: n.displayData ?? n.data,
                validatedSelection: l,
                readonly: !0 === n.readonly,
                onChange: (e) => r({ ...n, data: e.target.value }),
              });
            },
            onPaste: (e, t, r) =>
              e === t.data
                ? void 0
                : {
                    ...t,
                    data: e,
                    displayData: r.formattedString ?? t.displayData,
                  },
          },
        ],
        r2 =
          '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">',
        r3 = (e) => {
          let t = e.fgColor,
            r = e.bgColor;
          return `${r2}
<path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${r}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.29 4.947a3.368 3.368 0 014.723.04 3.375 3.375 0 01.041 4.729l-.009.009-1.596 1.597a3.367 3.367 0 01-5.081-.364.71.71 0 011.136-.85 1.95 1.95 0 002.942.21l1.591-1.593a1.954 1.954 0 00-.027-2.733 1.95 1.95 0 00-2.732-.027l-.91.907a.709.709 0 11-1.001-1.007l.915-.911.007-.007z" fill="${t}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.55 8.678a3.368 3.368 0 015.082.364.71.71 0 01-1.136.85 1.95 1.95 0 00-2.942-.21l-1.591 1.593a1.954 1.954 0 00.027 2.733 1.95 1.95 0 002.73.028l.906-.906a.709.709 0 111.003 1.004l-.91.91-.008.01a3.368 3.368 0 01-4.724-.042 3.375 3.375 0 01-.041-4.728l.009-.009L6.55 8.678z" fill="${t}"/>
</svg>
  `;
        },
        r7 = {
          headerRowID: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `
    ${r2}<rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/><path d="M15.75 4h-1.5a.25.25 0 0 0-.177.074L9.308 8.838a3.75 3.75 0 1 0 1.854 1.854l1.155-1.157.967.322a.5.5 0 0 0 .65-.55l-.18-1.208.363-.363.727.331a.5.5 0 0 0 .69-.59l-.254-.904.647-.647A.25.25 0 0 0 16 5.75v-1.5a.25.25 0 0 0-.25-.25zM7.5 13.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" fill="${t}"/></svg>`;
          },
          headerNumber: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `${r2}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${r}"/>
    <path d="M6.52 12.78H5.51V8.74l-1.33.47v-.87l2.29-.83h.05v5.27zm5.2 0H8.15v-.69l1.7-1.83a6.38 6.38 0 0 0 .34-.4c.09-.11.16-.22.22-.32s.1-.19.12-.27a.9.9 0 0 0 0-.56.63.63 0 0 0-.15-.23.58.58 0 0 0-.22-.15.75.75 0 0 0-.29-.05c-.27 0-.48.08-.62.23a.95.95 0 0 0-.2.65H8.03c0-.24.04-.46.13-.67a1.67 1.67 0 0 1 .97-.91c.23-.1.49-.14.77-.14.26 0 .5.04.7.11.21.08.38.18.52.32.14.13.25.3.32.48a1.74 1.74 0 0 1 .03 1.13 2.05 2.05 0 0 1-.24.47 4.16 4.16 0 0 1-.35.47l-.47.5-1 1.05h2.32v.8zm1.8-3.08h.55c.28 0 .48-.06.61-.2a.76.76 0 0 0 .2-.55.8.8 0 0 0-.05-.28.56.56 0 0 0-.13-.22.6.6 0 0 0-.23-.15.93.93 0 0 0-.32-.05.92.92 0 0 0-.29.05.72.72 0 0 0-.23.12.57.57 0 0 0-.21.46H12.4a1.3 1.3 0 0 1 .5-1.04c.15-.13.33-.23.54-.3a2.48 2.48 0 0 1 1.4 0c.2.06.4.15.55.28.15.13.27.28.36.47.08.19.13.4.13.65a1.15 1.15 0 0 1-.2.65 1.36 1.36 0 0 1-.58.49c.15.05.28.12.38.2a1.14 1.14 0 0 1 .43.62c.03.13.05.26.05.4 0 .25-.05.47-.14.66a1.42 1.42 0 0 1-.4.49c-.16.13-.35.23-.58.3a2.51 2.51 0 0 1-.73.1c-.22 0-.44-.03-.65-.09a1.8 1.8 0 0 1-.57-.28 1.43 1.43 0 0 1-.4-.47 1.41 1.41 0 0 1-.15-.66h1a.66.66 0 0 0 .22.5.87.87 0 0 0 .58.2c.25 0 .45-.07.6-.2a.71.71 0 0 0 .21-.56.97.97 0 0 0-.06-.36.61.61 0 0 0-.18-.25.74.74 0 0 0-.28-.15 1.33 1.33 0 0 0-.37-.04h-.55V9.7z" fill="${t}"/>
  </svg>`;
          },
          headerCode: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `
    ${r2}<rect x="2" y="2" width="16" height="16" rx="4" fill="${r}"/><path d="m12.223 13.314 3.052-2.826a.65.65 0 0 0 0-.984l-3.052-2.822c-.27-.25-.634-.242-.865.022-.232.263-.206.636.056.882l2.601 2.41-2.601 2.41c-.262.245-.288.619-.056.882.231.263.595.277.865.026Zm-4.444.005c.266.25.634.241.866-.027.231-.263.206-.636-.06-.882L5.983 10l2.602-2.405c.266-.25.291-.62.06-.887-.232-.263-.596-.272-.866-.022L4.723 9.51a.653.653 0 0 0 0 .983l3.056 2.827Z" fill="${t}"/></svg>`;
          },
          headerString: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `${r2}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${r}"/>
  <path d="M8.182 12.4h3.636l.655 1.6H14l-3.454-8H9.455L6 14h1.527l.655-1.6zM10 7.44l1.36 3.651H8.64L10 7.441z" fill="${t}"/>
</svg>`;
          },
          headerBoolean: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `${r2}
    <path
        d="M16.2222 2H3.77778C2.8 2 2 2.8 2 3.77778V16.2222C2 17.2 2.8 18 3.77778 18H16.2222C17.2 18 17.9911 17.2 17.9911 16.2222L18 3.77778C18 2.8 17.2 2 16.2222 2Z"
        fill="${r}"
    />
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.66667 6.66669C5.73368 6.66669 4.16667 8.15907 4.16667 10C4.16667 11.841 5.73368 13.3334 7.66667 13.3334H12.3333C14.2663 13.3334 15.8333 11.841 15.8333 10C15.8333 8.15907 14.2663 6.66669 12.3333 6.66669H7.66667ZM12.5 12.5C13.8807 12.5 15 11.3807 15 10C15 8.61931 13.8807 7.50002 12.5 7.50002C11.1193 7.50002 10 8.61931 10 10C10 11.3807 11.1193 12.5 12.5 12.5Z"
        fill="${t}"
    />
</svg>`;
          },
          headerAudioUri: r3,
          headerVideoUri: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `${r2}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${r}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.138a.5.5 0 00.748.434l5.492-3.138a.5.5 0 000-.868L7.748 6.427A.5.5 0 007 6.862v6.276z" fill="${t}"/>
</svg>`;
          },
          headerEmoji: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `
    ${r2}
    <path d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 9.17A4.17 4.17 0 0 1 5.83 10 4.17 4.17 0 0 1 10 5.83 4.17 4.17 0 0 1 14.17 10 4.17 4.17 0 0 1 10 14.17z" fill="${t}"/>
    <path d="M8.33 8.21a.83.83 0 1 0-.03 1.67.83.83 0 0 0 .03-1.67zm3.34 0a.83.83 0 1 0-.04 1.67.83.83 0 0 0 .04-1.67z" fill="${t}"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.53 13.9a2.82 2.82 0 0 1-5.06 0l.77-.38a1.97 1.97 0 0 0 3.52 0l.77.39z" fill="${t}"/>
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${r}"/>
    <path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 11a5 5 0 1 1 .01-10.01A5 5 0 0 1 10 15z" fill="${t}"/>
    <path d="M8 7.86a1 1 0 1 0-.04 2 1 1 0 0 0 .04-2zm4 0a1 1 0 1 0-.04 2 1 1 0 0 0 .04-2z" fill="${t}"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.53 11.9a2.82 2.82 0 0 1-5.06 0l.77-.38a1.97 1.97 0 0 0 3.52 0l.77.39z" fill="${t}"/>
  </svg>`;
          },
          headerImage: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `${r2}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${r}"/>
  <path opacity=".5" fill-rule="evenodd" clip-rule="evenodd" d="M12.499 10.801a.5.5 0 01.835 0l2.698 4.098a.5.5 0 01-.418.775H10.22a.5.5 0 01-.417-.775l2.697-4.098z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07 8.934a.5.5 0 01.824 0l4.08 5.958a.5.5 0 01-.412.782h-8.16a.5.5 0 01-.413-.782l4.08-5.958zM13.75 8.333a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z" fill="${t}"/>
</svg>`;
          },
          headerUri: r3,
          headerPhone: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `
    ${r2}
    <path fill="${t}" d="M3 3h14v14H3z"/>
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2zm-7.24 9.78h1.23c.15 0 .27.06.36.18l.98 1.28a.43.43 0 0 1-.05.58l-1.2 1.21a.45.45 0 0 1-.6.04A6.72 6.72 0 0 1 7.33 10c0-.61.1-1.2.25-1.78a6.68 6.68 0 0 1 2.12-3.3.44.44 0 0 1 .6.04l1.2 1.2c.16.17.18.42.05.59l-.98 1.29a.43.43 0 0 1-.36.17H8.98A5.38 5.38 0 0 0 8.67 10c0 .62.11 1.23.3 1.79z" fill="${r}"/>
  </svg>`;
          },
          headerMarkdown: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `
    ${r2}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${r}"/>
    <path d="m13.49 13.15-2.32-3.27h1.4V7h1.86v2.88h1.4l-2.34 3.27zM11 13H9v-3l-1.5 1.92L6 10v3H4V7h2l1.5 2L9 7h2v6z" fill="${t}"/>
  </svg>`;
          },
          headerDate: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `${r2}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${r}"/>
  <path d="M14.8 4.182h-.6V3H13v1.182H7V3H5.8v1.182h-.6c-.66 0-1.2.532-1.2 1.182v9.454C4 15.468 4.54 16 5.2 16h9.6c.66 0 1.2-.532 1.2-1.182V5.364c0-.65-.54-1.182-1.2-1.182zm0 10.636H5.2V7.136h9.6v7.682z" fill="${t}"/>
</svg>`;
          },
          headerTime: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `
    ${r2}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${r}"/>
    <path d="M10 4a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zm0 10.8A4.8 4.8 0 0 1 5.2 10a4.8 4.8 0 1 1 4.8 4.8z" fill="${t}"/>
    <path d="M10 7H9v3.93L12.5 13l.5-.8-3-1.76V7z" fill="${t}"/>
  </svg>`;
          },
          headerEmail: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `${r2}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.643a1.357 1.357 0 100 2.714 1.357 1.357 0 000-2.714zM7.357 10a2.643 2.643 0 115.286 0 2.643 2.643 0 01-5.286 0z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.589 4.898A5.643 5.643 0 0115.643 10v.5a2.143 2.143 0 01-4.286 0V8a.643.643 0 011.286 0v2.5a.857.857 0 001.714 0V10a4.357 4.357 0 10-1.708 3.46.643.643 0 01.782 1.02 5.643 5.643 0 11-5.842-9.582z" fill="${t}"/>
</svg>`;
          },
          headerReference: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `
    ${r2}
    <rect x="2" y="8" width="10" height="8" rx="2" fill="${r}"/>
    <rect x="8" y="4" width="10" height="8" rx="2" fill="${r}"/>
    <path d="M10.68 7.73V6l2.97 3.02-2.97 3.02v-1.77c-2.13 0-3.62.7-4.68 2.2.43-2.15 1.7-4.31 4.68-4.74z" fill="${t}"/>
  </svg>`;
          },
          headerIfThenElse: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `${r2}
  <path fill="${t}" d="M4 3h12v14H4z"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 2A1.6 1.6 0 002 3.6v12.8A1.6 1.6 0 003.6 18h12.8a1.6 1.6 0 001.6-1.6V3.6A1.6 1.6 0 0016.4 2H3.6zm11.3 10.8a.7.7 0 01.7.7v1.4a.7.7 0 01-.7.7h-1.4a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.6-.693.117.117 0 00.1-.115V10.35a.117.117 0 00-.117-.116h-2.8a.117.117 0 00-.117.116v2.333c0 .064.053.117.117.117h.117a.7.7 0 01.7.7v1.4a.7.7 0 01-.7.7H9.3a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.7-.7h.117a.117.117 0 00.117-.117V10.35a.117.117 0 00-.117-.117h-2.8a.117.117 0 00-.117.117v2.342c0 .058.042.106.1.115a.7.7 0 01.6.693v1.4a.7.7 0 01-.7.7H5.1a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.7-.7h.35a.116.116 0 00.116-.117v-2.45c0-.515.418-.933.934-.933h2.917a.117.117 0 00.117-.117V6.85a.117.117 0 00-.117-.116h-2.45a.7.7 0 01-.7-.7V5.1a.7.7 0 01.7-.7h6.067a.7.7 0 01.7.7v.934a.7.7 0 01-.7.7h-2.45a.117.117 0 00-.118.116v2.333c0 .064.053.117.117.117H13.5c.516 0 .934.418.934.934v2.45c0 .063.052.116.116.116h.35z" fill="${r}"/>
</svg>`;
          },
          headerSingleValue: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `
    ${r2}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/>
    <path d="M9.98 13.33c.45 0 .74-.3.73-.75l-.01-.1-.16-1.67 1.45 1.05a.81.81 0 0 0 .5.18c.37 0 .72-.32.72-.76 0-.3-.17-.54-.49-.68l-1.63-.77 1.63-.77c.32-.14.49-.37.49-.67 0-.45-.34-.76-.71-.76a.81.81 0 0 0-.5.18l-1.47 1.03.16-1.74.01-.08c.01-.46-.27-.76-.72-.76-.46 0-.76.32-.75.76l.01.08.16 1.74-1.47-1.03a.77.77 0 0 0-.5-.18.74.74 0 0 0-.72.76c0 .3.17.53.49.67l1.63.77-1.62.77c-.32.14-.5.37-.5.68 0 .44.35.75.72.75a.78.78 0 0 0 .5-.17L9.4 10.8l-.16 1.68v.09c-.02.44.28.75.74.75z" fill="${t}"/>
  </svg>`;
          },
          headerLookup: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `
    ${r2}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/>
    <path d="M8 5.83H5.83a.83.83 0 0 0 0 1.67h1.69A4.55 4.55 0 0 1 8 5.83zm-.33 3.34H5.83a.83.83 0 0 0 0 1.66h2.72a4.57 4.57 0 0 1-.88-1.66zM5.83 12.5a.83.83 0 0 0 0 1.67h7.5a.83.83 0 1 0 0-1.67h-7.5zm8.8-2.9a3.02 3.02 0 0 0 .46-1.6c0-1.66-1.32-3-2.94-3C10.52 5 9.2 6.34 9.2 8s1.31 3 2.93 3c.58 0 1.11-.17 1.56-.47l2.04 2.08.93-.94-2.04-2.08zm-2.48.07c-.9 0-1.63-.75-1.63-1.67s.73-1.67 1.63-1.67c.9 0 1.63.75 1.63 1.67s-.73 1.67-1.63 1.67z" fill="${t}"/>
  </svg>`;
          },
          headerTextTemplate: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `${r2}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/>
  <path d="M7.676 4.726V3l2.976 3.021-2.976 3.022v-1.77c-2.125 0-3.613.69-4.676 2.201.425-2.158 1.7-4.316 4.676-4.748zM10.182 14.4h3.636l.655 1.6H16l-3.454-8h-1.091L8 16h1.527l.655-1.6zM12 9.44l1.36 3.65h-2.72L12 9.44z" fill="${t}"/>
</svg>`;
          },
          headerMath: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `${r2}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.167 5.417a.833.833 0 100 1.666h4.166a.833.833 0 100-1.666H4.167z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.083 4.167a.833.833 0 10-1.666 0v4.166a.833.833 0 101.666 0V4.167zM11.667 5.417a.833.833 0 100 1.666h4.166a.833.833 0 100-1.666h-4.166zM5.367 11.688a.833.833 0 00-1.179 1.179l2.947 2.946a.833.833 0 001.178-1.178l-2.946-2.947z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.313 12.867a.833.833 0 10-1.178-1.179l-2.947 2.947a.833.833 0 101.179 1.178l2.946-2.946z" fill="${t}"/>
  <path d="M10.833 12.5c0-.46.373-.833.834-.833h4.166a.833.833 0 110 1.666h-4.166a.833.833 0 01-.834-.833zM10.833 15c0-.46.373-.833.834-.833h4.166a.833.833 0 110 1.666h-4.166a.833.833 0 01-.834-.833z" fill="${t}"/>
</svg>`;
          },
          headerRollup: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `
    ${r2}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${r}"/>
    <path d="M10 8.84a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32zm3.02 3.61a3.92 3.92 0 0 0 .78-3.28.49.49 0 1 0-.95.2c.19.87-.02 1.78-.58 2.47a2.92 2.92 0 1 1-4.13-4.08 2.94 2.94 0 0 1 2.43-.62.49.49 0 1 0 .17-.96 3.89 3.89 0 1 0 2.28 6.27zM10 4.17a5.84 5.84 0 0 0-5.44 7.93.49.49 0 1 0 .9-.35 4.86 4.86 0 1 1 2.5 2.67.49.49 0 1 0-.4.88c.76.35 1.6.54 2.44.53a5.83 5.83 0 0 0 0-11.66zm3.02 3.5a.7.7 0 1 0-1.4 0 .7.7 0 0 0 1.4 0zm-6.97 5.35a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4z" fill="${t}"/>
  </svg>`;
          },
          headerJoinStrings: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `${r2}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/>
  <path d="M12.4 13.565c1.865-.545 3.645-2.083 3.645-4.396 0-1.514-.787-2.604-2.071-2.604C12.69 6.565 12 7.63 12 8.939c1.114.072 1.865.726 1.865 1.683 0 .933-.8 1.647-1.84 2.023l.375.92zM4 5h6v2H4zM4 9h5v2H4zM4 13h4v2H4z" fill="${t}"/>
</svg>`;
          },
          headerSplitString: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `
    ${r2}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/>
    <path d="M12.4 13.56c1.86-.54 3.65-2.08 3.65-4.4 0-1.5-.8-2.6-2.08-2.6S12 7.64 12 8.95c1.11.07 1.86.73 1.86 1.68 0 .94-.8 1.65-1.83 2.03l.37.91zM4 5h6v2H4zm0 4h5v2H4zm0 4h4v2H4z" fill="${t}"/>
  </svg>`;
          },
          headerGeoDistance: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `${r2}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${r}"/>
  <path d="M10 7a1 1 0 100-2v2zm0 6a1 1 0 100 2v-2zm0-8H7v2h3V5zm-3 6h5V9H7v2zm5 2h-2v2h2v-2zm1-1a1 1 0 01-1 1v2a3 3 0 003-3h-2zm-1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zM4 8a3 3 0 003 3V9a1 1 0 01-1-1H4zm3-3a3 3 0 00-3 3h2a1 1 0 011-1V5z" fill="${t}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.856 12.014a.5.5 0 00-.712.702L5.409 14l-1.265 1.284a.5.5 0 00.712.702l1.255-1.274 1.255 1.274a.5.5 0 00.712-.702L6.813 14l1.265-1.284a.5.5 0 00-.712-.702L6.11 13.288l-1.255-1.274zM12.856 4.014a.5.5 0 00-.712.702L13.409 6l-1.265 1.284a.5.5 0 10.712.702l1.255-1.274 1.255 1.274a.5.5 0 10.712-.702L14.813 6l1.265-1.284a.5.5 0 00-.712-.702L14.11 5.288l-1.255-1.274z" fill="${t}"/>
</svg>`;
          },
          headerArray: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `${r2}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${r}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 7.25a.75.75 0 000-1.5h-6.5a.75.75 0 100 1.5h6.5zM15 10a.75.75 0 01-.75.75h-6.5a.75.75 0 010-1.5h6.5A.75.75 0 0115 10zm-.75 4.25a.75.75 0 000-1.5h-6.5a.75.75 0 000 1.5h6.5zm-8.987-7a.75.75 0 100-1.5.75.75 0 000 1.5zm.75 2.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 4.25a.75.75 0 100-1.5.75.75 0 000 1.5z" fill="${t}"/>
</svg>`;
          },
          rowOwnerOverlay: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 15v1h14v-2.5c0-.87-.44-1.55-.98-2.04a6.19 6.19 0 0 0-1.9-1.14 12.1 12.1 0 0 0-2.48-.67A4 4 0 1 0 5 6a4 4 0 0 0 2.36 3.65c-.82.13-1.7.36-2.48.67-.69.28-1.37.65-1.9 1.13A2.8 2.8 0 0 0 2 13.5V15z" fill="${r}" stroke="${t}" stroke-width="2"/>
  </svg>`;
          },
          protectedColumnOverlay: (e) => {
            let t = e.fgColor,
              r = e.bgColor;
            return `
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.43 6.04v-.18a3.86 3.86 0 0 0-7.72 0v.18A2.15 2.15 0 0 0 3 8.14v5.72C3 15.04 3.96 16 5.14 16H12c1.18 0 2.14-.96 2.14-2.14V8.14c0-1.03-.73-1.9-1.71-2.1zM7.86 6v-.14a.71.71 0 1 1 1.43 0V6H7.86z" fill="${r}" stroke="${t}" stroke-width="2"/>
  </svg>
`;
          },
          renameIcon: (e) => {
            let t = e.bgColor;
            return `${r2}
    <path stroke="${t}" stroke-width="2" d="M12 3v14"/>
    <path stroke="${t}" stroke-width="2" stroke-linecap="round" d="M10 4h4m-4 12h4"/>
    <path d="M11 14h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4v2h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4v2ZM9.5 8H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4.5v2H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h4.5v2Z" fill="${t}"/>
  </svg>
`;
          },
        };
      var r6 = r(23763);
      let r5 = [];
      class r4 extends ei {
        imageLoaded = () => void 0;
        loadedLocations = [];
        cache = {};
        setCallback(e) {
          this.imageLoaded = e;
        }
        sendLoaded = r6(() => {
          this.imageLoaded(new eo(this.loadedLocations)),
            (this.loadedLocations = []);
        }, 20);
        clearOutOfWindow = () => {
          for (let e of Object.keys(this.cache)) {
            let t = this.cache[e],
              r = !1;
            for (let e = 0; e < t.cells.length; e++) {
              let n = t.cells[e];
              if (this.isInWindow(n)) {
                r = !0;
                break;
              }
            }
            r
              ? (t.cells = t.cells.filter(this.isInWindow))
              : (t.cancel(), delete this.cache[e]);
          }
        };
        loadImage(e, t, r, n) {
          let i = !1,
            l = r5.pop() ?? new Image(),
            o = !1,
            a = {
              img: void 0,
              cells: [et(t, r)],
              url: e,
              cancel: () => {
                o ||
                  ((o = !0),
                  r5.length < 12 ? r5.unshift(l) : i || (l.src = ""));
              },
            },
            s = new Promise((e) => l.addEventListener("load", () => e(null)));
          requestAnimationFrame(async () => {
            try {
              (l.src = e), await s, await l.decode();
              let t = this.cache[n];
              if (void 0 !== t && !o) {
                for (let e of ((t.img = l), t.cells))
                  this.loadedLocations.push(en(e));
                (i = !0), this.sendLoaded();
              }
            } catch {
              a.cancel();
            }
          }),
            (this.cache[n] = a);
        }
        loadOrGetImage(e, t, r) {
          let n = this.cache[e];
          if (void 0 !== n) {
            let e = et(t, r);
            return n.cells.includes(e) || n.cells.push(e), n.img;
          }
          this.loadImage(e, t, r, e);
        }
      }
      let r8 = o.forwardRef((e, t) => {
        let r = o.useMemo(() => ({ ...r7, ...e.headerIcons }), [e.headerIcons]),
          n = o.useMemo(
            () => e.imageWindowLoader ?? new r4(),
            [e.imageWindowLoader]
          );
        return o.createElement(tx, {
          ...e,
          renderers: r1,
          headerIcons: r,
          ref: t,
          imageWindowLoader: n,
        });
      });
    },
    20956: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(70079);
      class i extends n.PureComponent {
        wrapperRef = n.createRef();
        componentDidMount() {
          document.addEventListener("touchend", this.clickOutside, !0),
            document.addEventListener("mousedown", this.clickOutside, !0),
            document.addEventListener("contextmenu", this.clickOutside, !0);
        }
        componentWillUnmount() {
          document.removeEventListener("touchend", this.clickOutside, !0),
            document.removeEventListener("mousedown", this.clickOutside, !0),
            document.removeEventListener("contextmenu", this.clickOutside, !0);
        }
        clickOutside = (e) => {
          if (
            (!this.props.isOutsideClick || this.props.isOutsideClick(e)) &&
            null !== this.wrapperRef.current &&
            !this.wrapperRef.current.contains(e.target)
          ) {
            let t = e.target;
            for (; null !== t; ) {
              if (t.classList.contains("click-outside-ignore")) return;
              t = t.parentElement;
            }
            this.props.onClickOutside();
          }
        };
        render() {
          let { onClickOutside: e, isOutsideClick: t, ...r } = this.props;
          return n.createElement(
            "div",
            { ...r, ref: this.wrapperRef },
            this.props.children
          );
        }
      }
    },
    15777: function (e, t, r) {
      "use strict";
      let n;
      r.d(t, {
        $o: function () {
          return d;
        },
        DP: function () {
          return M;
        },
        EV: function () {
          return E;
        },
        Gf: function () {
          return m;
        },
        Qo: function () {
          return S;
        },
        Sq: function () {
          return b;
        },
        T9: function () {
          return k;
        },
        YK: function () {
          return w;
        },
        iJ: function () {
          return y;
        },
        kf: function () {
          return R;
        },
        p6: function () {
          return s;
        },
        pN: function () {
          return u;
        },
        qF: function () {
          return p;
        },
        qT: function () {
          return v;
        },
        rL: function () {
          return x;
        },
        rs: function () {
          return C;
        },
        sd: function () {
          return g;
        },
      });
      var i,
        l,
        o,
        a,
        s,
        c,
        u,
        d,
        h = r(29879),
        f = r(13284);
      let p = null,
        g = void 0;
      ((i = s || (s = {})).Uri = "uri"),
        (i.Text = "text"),
        (i.Image = "image"),
        (i.RowID = "row-id"),
        (i.Number = "number"),
        (i.Bubble = "bubble"),
        (i.Boolean = "boolean"),
        (i.Loading = "loading"),
        (i.Markdown = "markdown"),
        (i.Drilldown = "drilldown"),
        (i.Protected = "protected"),
        (i.Custom = "custom"),
        ((l = c || (c = {})).HeaderRowID = "headerRowID"),
        (l.HeaderCode = "headerCode"),
        (l.HeaderNumber = "headerNumber"),
        (l.HeaderString = "headerString"),
        (l.HeaderBoolean = "headerBoolean"),
        (l.HeaderAudioUri = "headerAudioUri"),
        (l.HeaderVideoUri = "headerVideoUri"),
        (l.HeaderEmoji = "headerEmoji"),
        (l.HeaderImage = "headerImage"),
        (l.HeaderUri = "headerUri"),
        (l.HeaderPhone = "headerPhone"),
        (l.HeaderMarkdown = "headerMarkdown"),
        (l.HeaderDate = "headerDate"),
        (l.HeaderTime = "headerTime"),
        (l.HeaderEmail = "headerEmail"),
        (l.HeaderReference = "headerReference"),
        (l.HeaderIfThenElse = "headerIfThenElse"),
        (l.HeaderSingleValue = "headerSingleValue"),
        (l.HeaderLookup = "headerLookup"),
        (l.HeaderTextTemplate = "headerTextTemplate"),
        (l.HeaderMath = "headerMath"),
        (l.HeaderRollup = "headerRollup"),
        (l.HeaderJoinStrings = "headerJoinStrings"),
        (l.HeaderSplitString = "headerSplitString"),
        (l.HeaderGeoDistance = "headerGeoDistance"),
        (l.HeaderArray = "headerArray"),
        (l.RowOwnerOverlay = "rowOwnerOverlay"),
        (l.ProtectedColumnOverlay = "protectedColumnOverlay"),
        ((o = u || (u = {})).Triangle = "triangle"),
        (o.Dots = "dots");
      let m = "___gdg_header_cell_",
        v = m + "checked",
        w = m + "unchecked",
        y = m + "indeterminate";
      function b(e) {
        return "width" in e && "number" == typeof e.width;
      }
      async function x(e) {
        return "object" == typeof e ? e : await e();
      }
      function k(e) {
        return (
          e.kind !== s.Loading &&
          e.kind !== s.Bubble &&
          e.kind !== s.RowID &&
          e.kind !== s.Protected &&
          e.kind !== s.Drilldown &&
          ((0, h.NG)(e), !0)
        );
      }
      function C(e) {
        return e.kind === d.Marker || e.kind === d.NewRow;
      }
      function S(e) {
        return (
          !!k(e) &&
          e.kind !== s.Image &&
          (e.kind === s.Text ||
          e.kind === s.Number ||
          e.kind === s.Markdown ||
          e.kind === s.Uri ||
          e.kind === s.Custom ||
          e.kind === s.Boolean
            ? !0 !== e.readonly
            : void (0, h.vE)(e, "A cell was passed with an invalid kind"))
        );
      }
      function M(e) {
        return f(e, "editor");
      }
      function R(e) {
        return !e.readonly;
      }
      ((a = d || (d = {})).NewRow = "new-row"), (a.Marker = "marker");
      class E {
        items;
        constructor(e) {
          this.items = e;
        }
        static empty = () => n ?? (n = new E([]));
        static fromSingleSelection = (e) => E.empty().add(e);
        offset(e) {
          return 0 === e
            ? this
            : new E(this.items.map((t) => [t[0] + e, t[1] + e]));
        }
        add(e) {
          return new E(
            (function (e) {
              if (0 === e.length) return [];
              let t = [...e],
                r = [];
              for (let e of (t.sort(function (e, t) {
                return e[0] - t[0];
              }),
              r.push([...t[0]]),
              t.slice(1))) {
                let t = r[r.length - 1];
                t[1] < e[0] ? r.push([...e]) : t[1] < e[1] && (t[1] = e[1]);
              }
              return r;
            })([...this.items, "number" == typeof e ? [e, e + 1] : e])
          );
        }
        remove(e) {
          let t = [...this.items],
            r = "number" == typeof e ? e : e[0],
            n = "number" == typeof e ? e + 1 : e[1];
          for (let [e, i] of t.entries()) {
            let [l, o] = i;
            if (l <= n && r <= o) {
              let i = [];
              l < r && i.push([l, r]),
                n < o && i.push([n, o]),
                t.splice(e, 1, ...i);
            }
          }
          return new E(t);
        }
        first() {
          if (0 !== this.items.length) return this.items[0][0];
        }
        last() {
          if (0 !== this.items.length) return this.items.slice(-1)[0][1] - 1;
        }
        hasIndex(e) {
          for (let t = 0; t < this.items.length; t++) {
            let [r, n] = this.items[t];
            if (e >= r && e < n) return !0;
          }
          return !1;
        }
        hasAll(e) {
          for (let t = e[0]; t < e[1]; t++) if (!this.hasIndex(t)) return !1;
          return !0;
        }
        some(e) {
          for (let t of this) if (e(t)) return !0;
          return !1;
        }
        equals(e) {
          if (e === this) return !0;
          if (e.items.length !== this.items.length) return !1;
          for (let t = 0; t < this.items.length; t++) {
            let r = e.items[t],
              n = this.items[t];
            if (r[0] !== n[0] || r[1] !== n[1]) return !1;
          }
          return !0;
        }
        toArray() {
          let e = [];
          for (let [t, r] of this.items) for (let n = t; n < r; n++) e.push(n);
          return e;
        }
        get length() {
          let e = 0;
          for (let [t, r] of this.items) e += r - t;
          return e;
        }
        *[Symbol.iterator]() {
          for (let [e, t] of this.items) for (let r = e; r < t; r++) yield r;
        }
      }
    },
    78228: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return h;
        },
      });
      var n = r(60934),
        i =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        l = (0, n.Z)(function (e) {
          return (
            i.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              91 > e.charCodeAt(2))
          );
        }),
        o = r(70079),
        a = function () {
          let e = Array.prototype.slice.call(arguments).filter(Boolean),
            t = {},
            r = [];
          e.forEach((e) => {
            (e ? e.split(" ") : []).forEach((e) => {
              if (e.startsWith("atm_")) {
                let [, r] = e.split("_");
                t[r] = e;
              } else r.push(e);
            });
          });
          let n = [];
          for (let e in t)
            Object.prototype.hasOwnProperty.call(t, e) && n.push(t[e]);
          return n.push(...r), n.join(" ");
        },
        s = (e) => e.toUpperCase() === e,
        c = (e) => (t) => -1 === e.indexOf(t),
        u = (e, t) => {
          let r = {};
          return (
            Object.keys(e)
              .filter(c(t))
              .forEach((t) => {
                r[t] = e[t];
              }),
            r
          );
        },
        d = (e, t) => {},
        h = function (e) {
          return (t) => {
            let r = (r, n) => {
                let { as: i = e, class: c = "" } = r,
                  h = (function (e, t, r) {
                    let n = u(t, r);
                    if (!e) {
                      let e = "function" == typeof l ? { default: l } : l;
                      Object.keys(n).forEach((t) => {
                        e.default(t) || delete n[t];
                      });
                    }
                    return n;
                  })(
                    void 0 === t.propsAsIs
                      ? !(
                          "string" == typeof i &&
                          -1 === i.indexOf("-") &&
                          !s(i[0])
                        )
                      : t.propsAsIs,
                    r,
                    ["as", "class"]
                  );
                (h.ref = n),
                  (h.className = t.atomic
                    ? a(t.class, h.className || c)
                    : a(h.className || c, t.class));
                let { vars: f } = t;
                if (f) {
                  let e = {};
                  for (let n in f) {
                    let i = f[n],
                      l = i[0],
                      o = i[1] || "",
                      a = "function" == typeof l ? l(r) : l;
                    d(a, t.name), (e[`--${n}`] = `${a}${o}`);
                  }
                  let n = h.style || {},
                    i = Object.keys(n);
                  i.length > 0 &&
                    i.forEach((t) => {
                      e[t] = n[t];
                    }),
                    (h.style = e);
                }
                return e.__linaria && e !== i
                  ? ((h.as = i), o.createElement(e, h))
                  : o.createElement(i, h);
              },
              n = o.forwardRef
                ? o.forwardRef(r)
                : (e) => r(u(e, ["innerRef"]), e.innerRef);
            return (
              (n.displayName = t.name),
              (n.__linaria = { className: t.class || "", extends: e }),
              n
            );
          };
        };
    },
  },
]);
//# sourceMappingURL=2144.eeb3b67bff97205d.js.map
