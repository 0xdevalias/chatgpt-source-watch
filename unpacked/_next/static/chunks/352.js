"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [352],
  {
    12498: function (t, e, n) {
      n.d(e, {
        YR: function () {
          return b;
        },
        w9: function () {
          return g;
        },
      });
      var r,
        i = n(27748),
        s = n(79134),
        o = n(60314);
      let l = (t, e) =>
        !t.selection.empty &&
        (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
      function a(t, e, n = !1) {
        for (let r = t; r; r = "start" == e ? r.firstChild : r.lastChild) {
          if (r.isTextblock) return !0;
          if (n && 1 != r.childCount) break;
        }
        return !1;
      }
      function u(t) {
        if (!t.parent.type.spec.isolating)
          for (let e = t.depth - 1; e >= 0; e--) {
            if (t.index(e) > 0) return t.doc.resolve(t.before(e + 1));
            if (t.node(e).type.spec.isolating) break;
          }
        return null;
      }
      function h(t) {
        if (!t.parent.type.spec.isolating)
          for (let e = t.depth - 1; e >= 0; e--) {
            let n = t.node(e);
            if (t.index(e) + 1 < n.childCount)
              return t.doc.resolve(t.after(e + 1));
            if (n.type.spec.isolating) break;
          }
        return null;
      }
      function c(t) {
        for (let e = 0; e < t.edgeCount; e++) {
          let { type: n } = t.edge(e);
          if (n.isTextblock && !n.hasRequiredAttrs()) return n;
        }
        return null;
      }
      function p(t, e, n) {
        let r,
          l,
          u,
          h = e.nodeBefore,
          c = e.nodeAfter,
          p,
          d;
        if (h.type.spec.isolating || c.type.spec.isolating) return !1;
        if (
          ((r = e.nodeBefore),
          (l = e.nodeAfter),
          (u = e.index()),
          r &&
            l &&
            r.type.compatibleContent(l.type) &&
            (!r.content.size && e.parent.canReplace(u - 1, u)
              ? (n &&
                  n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()),
                !0)
              : !!(
                  e.parent.canReplace(u, u + 1) &&
                  (l.isTextblock || (0, i.Mn)(t.doc, e.pos))
                ) &&
                (n &&
                  n(
                    t.tr
                      .clearIncompatible(
                        e.pos,
                        r.type,
                        r.contentMatchAt(r.childCount)
                      )
                      .join(e.pos)
                      .scrollIntoView()
                  ),
                !0)))
        )
          return !0;
        let f = e.parent.canReplace(e.index(), e.index() + 1);
        if (
          f &&
          (p = (d = h.contentMatchAt(h.childCount)).findWrapping(c.type)) &&
          d.matchType(p[0] || c.type).validEnd
        ) {
          if (n) {
            let r = e.pos + c.nodeSize,
              o = s.HY.empty;
            for (let t = p.length - 1; t >= 0; t--)
              o = s.HY.from(p[t].create(null, o));
            o = s.HY.from(h.copy(o));
            let l = t.tr.step(
                new i.FC(
                  e.pos - 1,
                  r,
                  e.pos,
                  r,
                  new s.p2(o, 1, 0),
                  p.length,
                  !0
                )
              ),
              a = r + 2 * p.length;
            (0, i.Mn)(l.doc, a) && l.join(a), n(l.scrollIntoView());
          }
          return !0;
        }
        let m = o.Y1.findFrom(e, 1),
          g = m && m.$from.blockRange(m.$to),
          k = g && (0, i.k9)(g);
        if (null != k && k >= e.depth)
          return n && n(t.tr.lift(g, k).scrollIntoView()), !0;
        if (f && a(c, "start", !0) && a(h, "end")) {
          let r = h,
            o = [];
          for (; o.push(r), !r.isTextblock; ) r = r.lastChild;
          let l = c,
            a = 1;
          for (; !l.isTextblock; l = l.firstChild) a++;
          if (r.canReplace(r.childCount, r.childCount, l.content)) {
            if (n) {
              let r = s.HY.empty;
              for (let t = o.length - 1; t >= 0; t--)
                r = s.HY.from(o[t].copy(r));
              n(
                t.tr
                  .step(
                    new i.FC(
                      e.pos - o.length,
                      e.pos + c.nodeSize,
                      e.pos + a,
                      e.pos + c.nodeSize - a,
                      new s.p2(r, o.length, 0),
                      0,
                      !0
                    )
                  )
                  .scrollIntoView()
              );
            }
            return !0;
          }
        }
        return !1;
      }
      function d(t) {
        return function (e, n) {
          let r = e.selection,
            i = t < 0 ? r.$from : r.$to,
            s = i.depth;
          for (; i.node(s).isInline; ) {
            if (!s) return !1;
            s--;
          }
          return (
            !!i.node(s).isTextblock &&
            (n &&
              n(
                e.tr.setSelection(
                  o.Bs.create(e.doc, t < 0 ? i.start(s) : i.end(s))
                )
              ),
            !0)
          );
        };
      }
      let f = d(-1),
        m = d(1);
      function g(t, e = null) {
        return function (n, r) {
          let { empty: i, $cursor: s, ranges: o } = n.selection;
          if (
            (i && !s) ||
            !(function (t, e, n) {
              for (let r = 0; r < e.length; r++) {
                let { $from: i, $to: s } = e[r],
                  o =
                    0 == i.depth && t.inlineContent && t.type.allowsMarkType(n);
                if (
                  (t.nodesBetween(i.pos, s.pos, (t) => {
                    if (o) return !1;
                    o = t.inlineContent && t.type.allowsMarkType(n);
                  }),
                  o)
                )
                  return !0;
              }
              return !1;
            })(n.doc, o, t)
          )
            return !1;
          if (r) {
            if (s)
              r(
                t.isInSet(n.storedMarks || s.marks())
                  ? n.tr.removeStoredMark(t)
                  : n.tr.addStoredMark(t.create(e))
              );
            else {
              let i = !1,
                s = n.tr;
              for (let e = 0; !i && e < o.length; e++) {
                let { $from: r, $to: s } = o[e];
                i = n.doc.rangeHasMark(r.pos, s.pos, t);
              }
              for (let n = 0; n < o.length; n++) {
                let { $from: r, $to: l } = o[n];
                if (i) s.removeMark(r.pos, l.pos, t);
                else {
                  let n = r.pos,
                    i = l.pos,
                    o = r.nodeAfter,
                    a = l.nodeBefore,
                    u = o && o.isText ? /^\s*/.exec(o.text)[0].length : 0,
                    h = a && a.isText ? /\s*$/.exec(a.text)[0].length : 0;
                  n + u < i && ((n += u), (i -= h)),
                    s.addMark(n, i, t.create(e));
                }
              }
              r(s.scrollIntoView());
            }
          }
          return !0;
        };
      }
      function k(...t) {
        return function (e, n, r) {
          for (let i = 0; i < t.length; i++) if (t[i](e, n, r)) return !0;
          return !1;
        };
      }
      let y = k(
          l,
          (t, e, n) => {
            let r = (function (t, e) {
              let { $cursor: n } = t.selection;
              return n &&
                (e ? e.endOfTextblock("backward", t) : !(n.parentOffset > 0))
                ? n
                : null;
            })(t, n);
            if (!r) return !1;
            let l = u(r);
            if (!l) {
              let n = r.blockRange(),
                s = n && (0, i.k9)(n);
              return (
                null != s && (e && e(t.tr.lift(n, s).scrollIntoView()), !0)
              );
            }
            let h = l.nodeBefore;
            if (!h.type.spec.isolating && p(t, l, e)) return !0;
            if (
              0 == r.parent.content.size &&
              (a(h, "end") || o.qv.isSelectable(h))
            ) {
              let n = (0, i.dR)(t.doc, r.before(), r.after(), s.p2.empty);
              if (n && n.slice.size < n.to - n.from) {
                if (e) {
                  let r = t.tr.step(n);
                  r.setSelection(
                    a(h, "end")
                      ? o.Y1.findFrom(
                          r.doc.resolve(r.mapping.map(l.pos, -1)),
                          -1
                        )
                      : o.qv.create(r.doc, l.pos - h.nodeSize)
                  ),
                    e(r.scrollIntoView());
                }
                return !0;
              }
            }
            return (
              !!h.isAtom &&
              l.depth == r.depth - 1 &&
              (e && e(t.tr.delete(l.pos - h.nodeSize, l.pos).scrollIntoView()),
              !0)
            );
          },
          (t, e, n) => {
            let { $head: r, empty: i } = t.selection,
              s = r;
            if (!i) return !1;
            if (r.parent.isTextblock) {
              if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
                return !1;
              s = u(r);
            }
            let l = s && s.nodeBefore;
            return (
              !!(l && o.qv.isSelectable(l)) &&
              (e &&
                e(
                  t.tr
                    .setSelection(o.qv.create(t.doc, s.pos - l.nodeSize))
                    .scrollIntoView()
                ),
              !0)
            );
          }
        ),
        x = k(
          l,
          (t, e, n) => {
            let r = (function (t, e) {
              let { $cursor: n } = t.selection;
              return n &&
                (e
                  ? e.endOfTextblock("forward", t)
                  : !(n.parentOffset < n.parent.content.size))
                ? n
                : null;
            })(t, n);
            if (!r) return !1;
            let l = h(r);
            if (!l) return !1;
            let u = l.nodeAfter;
            if (p(t, l, e)) return !0;
            if (
              0 == r.parent.content.size &&
              (a(u, "start") || o.qv.isSelectable(u))
            ) {
              let n = (0, i.dR)(t.doc, r.before(), r.after(), s.p2.empty);
              if (n && n.slice.size < n.to - n.from) {
                if (e) {
                  let r = t.tr.step(n);
                  r.setSelection(
                    a(u, "start")
                      ? o.Y1.findFrom(r.doc.resolve(r.mapping.map(l.pos)), 1)
                      : o.qv.create(r.doc, r.mapping.map(l.pos))
                  ),
                    e(r.scrollIntoView());
                }
                return !0;
              }
            }
            return (
              !!u.isAtom &&
              l.depth == r.depth - 1 &&
              (e && e(t.tr.delete(l.pos, l.pos + u.nodeSize).scrollIntoView()),
              !0)
            );
          },
          (t, e, n) => {
            let { $head: r, empty: i } = t.selection,
              s = r;
            if (!i) return !1;
            if (r.parent.isTextblock) {
              if (
                n
                  ? !n.endOfTextblock("forward", t)
                  : r.parentOffset < r.parent.content.size
              )
                return !1;
              s = h(r);
            }
            let l = s && s.nodeAfter;
            return (
              !!(l && o.qv.isSelectable(l)) &&
              (e &&
                e(
                  t.tr.setSelection(o.qv.create(t.doc, s.pos)).scrollIntoView()
                ),
              !0)
            );
          }
        ),
        _ = {
          Enter: k(
            (t, e) => {
              let { $head: n, $anchor: r } = t.selection;
              return (
                !!(n.parent.type.spec.code && n.sameParent(r)) &&
                (e && e(t.tr.insertText("\n").scrollIntoView()), !0)
              );
            },
            (t, e) => {
              let n = t.selection,
                { $from: r, $to: i } = n;
              if (
                n instanceof o.C1 ||
                r.parent.inlineContent ||
                i.parent.inlineContent
              )
                return !1;
              let s = c(i.parent.contentMatchAt(i.indexAfter()));
              if (!s || !s.isTextblock) return !1;
              if (e) {
                let n = (
                    !r.parentOffset && i.index() < i.parent.childCount ? r : i
                  ).pos,
                  l = t.tr.insert(n, s.createAndFill());
                l.setSelection(o.Bs.create(l.doc, n + 1)),
                  e(l.scrollIntoView());
              }
              return !0;
            },
            (t, e) => {
              let { $cursor: n } = t.selection;
              if (!n || n.parent.content.size) return !1;
              if (n.depth > 1 && n.after() != n.end(-1)) {
                let r = n.before();
                if ((0, i.Ax)(t.doc, r))
                  return e && e(t.tr.split(r).scrollIntoView()), !0;
              }
              let r = n.blockRange(),
                s = r && (0, i.k9)(r);
              return (
                null != s && (e && e(t.tr.lift(r, s).scrollIntoView()), !0)
              );
            },
            (t, e) => {
              let { $from: n, $to: s } = t.selection;
              if (t.selection instanceof o.qv && t.selection.node.isBlock)
                return (
                  !!(n.parentOffset && (0, i.Ax)(t.doc, n.pos)) &&
                  (e && e(t.tr.split(n.pos).scrollIntoView()), !0)
                );
              if (!n.parent.isBlock) return !1;
              if (e) {
                let l = s.parentOffset == s.parent.content.size,
                  a = t.tr;
                (t.selection instanceof o.Bs || t.selection instanceof o.C1) &&
                  a.deleteSelection();
                let u =
                    0 == n.depth
                      ? null
                      : c(n.node(-1).contentMatchAt(n.indexAfter(-1))),
                  h = r && r(s.parent, l),
                  p = h ? [h] : l && u ? [{ type: u }] : void 0,
                  d = (0, i.Ax)(a.doc, a.mapping.map(n.pos), 1, p);
                if (
                  (!p &&
                    !d &&
                    (0, i.Ax)(
                      a.doc,
                      a.mapping.map(n.pos),
                      1,
                      u ? [{ type: u }] : void 0
                    ) &&
                    (u && (p = [{ type: u }]), (d = !0)),
                  d &&
                    (a.split(a.mapping.map(n.pos), 1, p),
                    !l && !n.parentOffset && n.parent.type != u))
                ) {
                  let t = a.mapping.map(n.before()),
                    e = a.doc.resolve(t);
                  u &&
                    n.node(-1).canReplaceWith(e.index(), e.index() + 1, u) &&
                    a.setNodeMarkup(a.mapping.map(n.before()), u);
                }
                e(a.scrollIntoView());
              }
              return !0;
            }
          ),
          "Mod-Enter": (t, e) => {
            let { $head: n, $anchor: r } = t.selection;
            if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
            let i = n.node(-1),
              s = n.indexAfter(-1),
              l = c(i.contentMatchAt(s));
            if (!l || !i.canReplaceWith(s, s, l)) return !1;
            if (e) {
              let r = n.after(),
                i = t.tr.replaceWith(r, r, l.createAndFill());
              i.setSelection(o.Y1.near(i.doc.resolve(r), 1)),
                e(i.scrollIntoView());
            }
            return !0;
          },
          Backspace: y,
          "Mod-Backspace": y,
          "Shift-Backspace": y,
          Delete: x,
          "Mod-Delete": x,
          "Mod-a": (t, e) => (e && e(t.tr.setSelection(new o.C1(t.doc))), !0),
        },
        C = {
          "Ctrl-h": _.Backspace,
          "Alt-Backspace": _["Mod-Backspace"],
          "Ctrl-d": _.Delete,
          "Ctrl-Alt-Backspace": _["Mod-Delete"],
          "Alt-Delete": _["Mod-Delete"],
          "Alt-d": _["Mod-Delete"],
          "Ctrl-a": f,
          "Ctrl-e": m,
        };
      for (let t in _) C[t] = _[t];
      let b = (
        "undefined" != typeof navigator
          ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
          : "undefined" != typeof os &&
            !!os.platform &&
            "darwin" == os.platform()
      )
        ? C
        : _;
    },
    81093: function (t, e, n) {
      n.d(e, {
        m8: function () {
          return _;
        },
        KX: function () {
          return b;
        },
        Yw: function () {
          return C;
        },
      });
      var r = function () {};
      (r.prototype.append = function (t) {
        return t.length
          ? ((t = r.from(t)),
            (!this.length && t) ||
              (t.length < 200 && this.leafAppend(t)) ||
              (this.length < 200 && t.leafPrepend(this)) ||
              this.appendInner(t))
          : this;
      }),
        (r.prototype.prepend = function (t) {
          return t.length ? r.from(t).append(this) : this;
        }),
        (r.prototype.appendInner = function (t) {
          return new s(this, t);
        }),
        (r.prototype.slice = function (t, e) {
          return (void 0 === t && (t = 0),
          void 0 === e && (e = this.length),
          t >= e)
            ? r.empty
            : this.sliceInner(Math.max(0, t), Math.min(this.length, e));
        }),
        (r.prototype.get = function (t) {
          if (!(t < 0) && !(t >= this.length)) return this.getInner(t);
        }),
        (r.prototype.forEach = function (t, e, n) {
          void 0 === e && (e = 0),
            void 0 === n && (n = this.length),
            e <= n
              ? this.forEachInner(t, e, n, 0)
              : this.forEachInvertedInner(t, e, n, 0);
        }),
        (r.prototype.map = function (t, e, n) {
          void 0 === e && (e = 0), void 0 === n && (n = this.length);
          var r = [];
          return (
            this.forEach(
              function (e, n) {
                return r.push(t(e, n));
              },
              e,
              n
            ),
            r
          );
        }),
        (r.from = function (t) {
          return t instanceof r ? t : t && t.length ? new i(t) : r.empty;
        });
      var i = (function (t) {
        function e(e) {
          t.call(this), (this.values = e);
        }
        t && (e.__proto__ = t),
          (e.prototype = Object.create(t && t.prototype)),
          (e.prototype.constructor = e);
        var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
        return (
          (e.prototype.flatten = function () {
            return this.values;
          }),
          (e.prototype.sliceInner = function (t, n) {
            return 0 == t && n == this.length
              ? this
              : new e(this.values.slice(t, n));
          }),
          (e.prototype.getInner = function (t) {
            return this.values[t];
          }),
          (e.prototype.forEachInner = function (t, e, n, r) {
            for (var i = e; i < n; i++)
              if (!1 === t(this.values[i], r + i)) return !1;
          }),
          (e.prototype.forEachInvertedInner = function (t, e, n, r) {
            for (var i = e - 1; i >= n; i--)
              if (!1 === t(this.values[i], r + i)) return !1;
          }),
          (e.prototype.leafAppend = function (t) {
            if (this.length + t.length <= 200)
              return new e(this.values.concat(t.flatten()));
          }),
          (e.prototype.leafPrepend = function (t) {
            if (this.length + t.length <= 200)
              return new e(t.flatten().concat(this.values));
          }),
          (n.length.get = function () {
            return this.values.length;
          }),
          (n.depth.get = function () {
            return 0;
          }),
          Object.defineProperties(e.prototype, n),
          e
        );
      })(r);
      r.empty = new i([]);
      var s = (function (t) {
          function e(e, n) {
            t.call(this),
              (this.left = e),
              (this.right = n),
              (this.length = e.length + n.length),
              (this.depth = Math.max(e.depth, n.depth) + 1);
          }
          return (
            t && (e.__proto__ = t),
            (e.prototype = Object.create(t && t.prototype)),
            (e.prototype.constructor = e),
            (e.prototype.flatten = function () {
              return this.left.flatten().concat(this.right.flatten());
            }),
            (e.prototype.getInner = function (t) {
              return t < this.left.length
                ? this.left.get(t)
                : this.right.get(t - this.left.length);
            }),
            (e.prototype.forEachInner = function (t, e, n, r) {
              var i = this.left.length;
              if (
                (e < i &&
                  !1 === this.left.forEachInner(t, e, Math.min(n, i), r)) ||
                (n > i &&
                  !1 ===
                    this.right.forEachInner(
                      t,
                      Math.max(e - i, 0),
                      Math.min(this.length, n) - i,
                      r + i
                    ))
              )
                return !1;
            }),
            (e.prototype.forEachInvertedInner = function (t, e, n, r) {
              var i = this.left.length;
              if (
                (e > i &&
                  !1 ===
                    this.right.forEachInvertedInner(
                      t,
                      e - i,
                      Math.max(n, i) - i,
                      r + i
                    )) ||
                (n < i &&
                  !1 ===
                    this.left.forEachInvertedInner(t, Math.min(e, i), n, r))
              )
                return !1;
            }),
            (e.prototype.sliceInner = function (t, e) {
              if (0 == t && e == this.length) return this;
              var n = this.left.length;
              return e <= n
                ? this.left.slice(t, e)
                : t >= n
                  ? this.right.slice(t - n, e - n)
                  : this.left.slice(t, n).append(this.right.slice(0, e - n));
            }),
            (e.prototype.leafAppend = function (t) {
              var n = this.right.leafAppend(t);
              if (n) return new e(this.left, n);
            }),
            (e.prototype.leafPrepend = function (t) {
              var n = this.left.leafPrepend(t);
              if (n) return new e(n, this.right);
            }),
            (e.prototype.appendInner = function (t) {
              return this.left.depth >= Math.max(this.right.depth, t.depth) + 1
                ? new e(this.left, new e(this.right, t))
                : new e(this, t);
            }),
            e
          );
        })(r),
        o = n(27748),
        l = n(60314);
      class a {
        constructor(t, e) {
          (this.items = t), (this.eventCount = e);
        }
        popEvent(t, e) {
          let n, r, i, s;
          if (0 == this.eventCount) return null;
          let o = this.items.length;
          for (; ; o--)
            if (this.items.get(o - 1).selection) {
              --o;
              break;
            }
          e && (r = (n = this.remapping(o, this.items.length)).maps.length);
          let l = t.tr,
            h = [],
            c = [];
          return (
            this.items.forEach(
              (t, e) => {
                if (!t.step) {
                  n || (r = (n = this.remapping(o, e + 1)).maps.length),
                    r--,
                    c.push(t);
                  return;
                }
                if (n) {
                  c.push(new u(t.map));
                  let e = t.step.map(n.slice(r)),
                    i;
                  e &&
                    l.maybeStep(e).doc &&
                    ((i = l.mapping.maps[l.mapping.maps.length - 1]),
                    h.push(new u(i, void 0, void 0, h.length + c.length))),
                    r--,
                    i && n.appendMap(i, r);
                } else l.maybeStep(t.step);
                if (t.selection)
                  return (
                    (i = n ? t.selection.map(n.slice(r)) : t.selection),
                    (s = new a(
                      this.items.slice(0, o).append(c.reverse().concat(h)),
                      this.eventCount - 1
                    )),
                    !1
                  );
              },
              this.items.length,
              0
            ),
            { remaining: s, transform: l, selection: i }
          );
        }
        addTransform(t, e, n, r) {
          var i, s;
          let o,
            l = [],
            h = this.eventCount,
            p = this.items,
            d = !r && p.length ? p.get(p.length - 1) : null;
          for (let n = 0; n < t.steps.length; n++) {
            let i = t.steps[n].invert(t.docs[n]),
              s = new u(t.mapping.maps[n], i, e),
              o;
            (o = d && d.merge(s)) &&
              ((s = o), n ? l.pop() : (p = p.slice(0, p.length - 1))),
              l.push(s),
              e && (h++, (e = void 0)),
              r || (d = s);
          }
          let f = h - n.depth;
          return (
            f > c &&
              ((i = p),
              (s = f),
              i.forEach((t, e) => {
                if (t.selection && 0 == s--) return (o = e), !1;
              }),
              (p = i.slice(o)),
              (h -= f)),
            new a(p.append(l), h)
          );
        }
        remapping(t, e) {
          let n = new o.vs();
          return (
            this.items.forEach(
              (e, r) => {
                let i =
                  null != e.mirrorOffset && r - e.mirrorOffset >= t
                    ? n.maps.length - e.mirrorOffset
                    : void 0;
                n.appendMap(e.map, i);
              },
              t,
              e
            ),
            n
          );
        }
        addMaps(t) {
          return 0 == this.eventCount
            ? this
            : new a(this.items.append(t.map((t) => new u(t))), this.eventCount);
        }
        rebased(t, e) {
          if (!this.eventCount) return this;
          let n = [],
            r = Math.max(0, this.items.length - e),
            i = t.mapping,
            s = t.steps.length,
            o = this.eventCount;
          this.items.forEach((t) => {
            t.selection && o--;
          }, r);
          let l = e;
          this.items.forEach((e) => {
            let r = i.getMirror(--l);
            if (null == r) return;
            s = Math.min(s, r);
            let a = i.maps[r];
            if (e.step) {
              let s = t.steps[r].invert(t.docs[r]),
                h = e.selection && e.selection.map(i.slice(l + 1, r));
              h && o++, n.push(new u(a, s, h));
            } else n.push(new u(a));
          }, r);
          let h = [];
          for (let t = e; t < s; t++) h.push(new u(i.maps[t]));
          let c = new a(this.items.slice(0, r).append(h).append(n), o);
          return (
            c.emptyItemCount() > 500 &&
              (c = c.compress(this.items.length - n.length)),
            c
          );
        }
        emptyItemCount() {
          let t = 0;
          return (
            this.items.forEach((e) => {
              !e.step && t++;
            }),
            t
          );
        }
        compress(t = this.items.length) {
          let e = this.remapping(0, t),
            n = e.maps.length,
            i = [],
            s = 0;
          return (
            this.items.forEach(
              (r, o) => {
                if (o >= t) i.push(r), r.selection && s++;
                else if (r.step) {
                  let t = r.step.map(e.slice(n)),
                    o = t && t.getMap();
                  if ((n--, o && e.appendMap(o, n), t)) {
                    let l = r.selection && r.selection.map(e.slice(n));
                    l && s++;
                    let a = new u(o.invert(), t, l),
                      h,
                      c = i.length - 1;
                    (h = i.length && i[c].merge(a)) ? (i[c] = h) : i.push(a);
                  }
                } else r.map && n--;
              },
              this.items.length,
              0
            ),
            new a(r.from(i.reverse()), s)
          );
        }
      }
      a.empty = new a(r.empty, 0);
      class u {
        constructor(t, e, n, r) {
          (this.map = t),
            (this.step = e),
            (this.selection = n),
            (this.mirrorOffset = r);
        }
        merge(t) {
          if (this.step && t.step && !t.selection) {
            let e = t.step.merge(this.step);
            if (e) return new u(e.getMap().invert(), e, this.selection);
          }
        }
      }
      class h {
        constructor(t, e, n, r, i) {
          (this.done = t),
            (this.undone = e),
            (this.prevRanges = n),
            (this.prevTime = r),
            (this.prevComposition = i);
        }
      }
      let c = 20;
      function p(t) {
        let e = [];
        return t.forEach((t, n, r, i) => e.push(r, i)), e;
      }
      function d(t, e) {
        if (!t) return null;
        let n = [];
        for (let r = 0; r < t.length; r += 2) {
          let i = e.map(t[r], 1),
            s = e.map(t[r + 1], -1);
          i <= s && n.push(i, s);
        }
        return n;
      }
      function f(t, e, n, r) {
        let i = k(e),
          s = y.get(e).spec.config,
          o = (r ? t.undone : t.done).popEvent(e, i);
        if (!o) return;
        let l = o.selection.resolve(o.transform.doc),
          a = (r ? t.done : t.undone).addTransform(
            o.transform,
            e.selection.getBookmark(),
            s,
            i
          ),
          u = new h(r ? a : o.remaining, r ? o.remaining : a, null, 0, -1);
        n(
          o.transform
            .setSelection(l)
            .setMeta(y, { redo: r, historyState: u })
            .scrollIntoView()
        );
      }
      let m = !1,
        g = null;
      function k(t) {
        let e = t.plugins;
        if (g != e) {
          (m = !1), (g = e);
          for (let t = 0; t < e.length; t++)
            if (e[t].spec.historyPreserveItems) {
              m = !0;
              break;
            }
        }
        return m;
      }
      let y = new l.H$("history"),
        x = new l.H$("closeHistory");
      function _(t = {}) {
        return (
          (t = {
            depth: t.depth || 100,
            newGroupDelay: t.newGroupDelay || 500,
          }),
          new l.Sy({
            key: y,
            state: {
              init: () => new h(a.empty, a.empty, null, 0, -1),
              apply: (e, n, r) =>
                (function (t, e, n, r) {
                  let i = n.getMeta(y),
                    s;
                  if (i) return i.historyState;
                  n.getMeta(x) && (t = new h(t.done, t.undone, null, 0, -1));
                  let o = n.getMeta("appendedTransaction");
                  if (0 == n.steps.length) return t;
                  if (o && o.getMeta(y))
                    return o.getMeta(y).redo
                      ? new h(
                          t.done.addTransform(n, void 0, r, k(e)),
                          t.undone,
                          p(n.mapping.maps[n.steps.length - 1]),
                          t.prevTime,
                          t.prevComposition
                        )
                      : new h(
                          t.done,
                          t.undone.addTransform(n, void 0, r, k(e)),
                          null,
                          t.prevTime,
                          t.prevComposition
                        );
                  if (
                    !1 === n.getMeta("addToHistory") ||
                    (o && !1 === o.getMeta("addToHistory"))
                  )
                    return (s = n.getMeta("rebased"))
                      ? new h(
                          t.done.rebased(n, s),
                          t.undone.rebased(n, s),
                          d(t.prevRanges, n.mapping),
                          t.prevTime,
                          t.prevComposition
                        )
                      : new h(
                          t.done.addMaps(n.mapping.maps),
                          t.undone.addMaps(n.mapping.maps),
                          d(t.prevRanges, n.mapping),
                          t.prevTime,
                          t.prevComposition
                        );
                  {
                    let i = n.getMeta("composition"),
                      s =
                        0 == t.prevTime ||
                        (!o &&
                          t.prevComposition != i &&
                          (t.prevTime < (n.time || 0) - r.newGroupDelay ||
                            !(function (t, e) {
                              if (!e) return !1;
                              if (!t.docChanged) return !0;
                              let n = !1;
                              return (
                                t.mapping.maps[0].forEach((t, r) => {
                                  for (let i = 0; i < e.length; i += 2)
                                    t <= e[i + 1] && r >= e[i] && (n = !0);
                                }),
                                n
                              );
                            })(n, t.prevRanges))),
                      l = o
                        ? d(t.prevRanges, n.mapping)
                        : p(n.mapping.maps[n.steps.length - 1]);
                    return new h(
                      t.done.addTransform(
                        n,
                        s ? e.selection.getBookmark() : void 0,
                        r,
                        k(e)
                      ),
                      a.empty,
                      l,
                      n.time,
                      null == i ? t.prevComposition : i
                    );
                  }
                })(n, r, e, t),
            },
            config: t,
            props: {
              handleDOMEvents: {
                beforeinput(t, e) {
                  let n = e.inputType,
                    r = "historyUndo" == n ? C : "historyRedo" == n ? b : null;
                  return !!r && (e.preventDefault(), r(t.state, t.dispatch));
                },
              },
            },
          })
        );
      }
      let C = (t, e) => {
          let n = y.getState(t);
          return !!n && 0 != n.done.eventCount && (e && f(n, t, e, !1), !0);
        },
        b = (t, e) => {
          let n = y.getState(t);
          return !!n && 0 != n.undone.eventCount && (e && f(n, t, e, !0), !0);
        };
    },
    71307: function (t, e, n) {
      n.d(e, {
        Hw: function () {
          return o;
        },
        S0: function () {
          return a;
        },
        VK: function () {
          return s;
        },
        zK: function () {
          return u;
        },
      });
      var r = n(60314),
        i = n(27748);
      class s {
        constructor(t, e, n = {}) {
          (this.match = t),
            (this.match = t),
            (this.handler =
              "string" == typeof e
                ? function (t, n, r, i) {
                    let s = e;
                    if (n[1]) {
                      let t = n[0].lastIndexOf(n[1]);
                      s += n[0].slice(t + n[1].length);
                      let e = (r += t) - i;
                      e > 0 && ((s = n[0].slice(t - e, t) + s), (r = i));
                    }
                    return t.tr.insertText(s, r, i);
                  }
                : e),
            (this.undoable = !1 !== n.undoable),
            (this.inCode = n.inCode || !1);
        }
      }
      function o({ rules: t }) {
        let e = new r.Sy({
          state: {
            init: () => null,
            apply(t, e) {
              return (
                t.getMeta(this) || (t.selectionSet || t.docChanged ? null : e)
              );
            },
          },
          props: {
            handleTextInput: (n, r, i, s) => l(n, r, i, s, t, e),
            handleDOMEvents: {
              compositionend: (n) => {
                setTimeout(() => {
                  let { $cursor: r } = n.state.selection;
                  r && l(n, r.pos, r.pos, "", t, e);
                });
              },
            },
          },
          isInputRules: !0,
        });
        return e;
      }
      function l(t, e, n, r, i, s) {
        if (t.composing) return !1;
        let o = t.state,
          l = o.doc.resolve(e),
          a =
            l.parent.textBetween(
              Math.max(0, l.parentOffset - 500),
              l.parentOffset,
              null,
              "￼"
            ) + r;
        for (let u = 0; u < i.length; u++) {
          let h = i[u];
          if (l.parent.type.spec.code) {
            if (!h.inCode) continue;
          } else if ("only" === h.inCode) continue;
          let c = h.match.exec(a),
            p = c && h.handler(o, c, e - (c[0].length - r.length), n);
          if (p)
            return (
              h.undoable &&
                p.setMeta(s, { transform: p, from: e, to: n, text: r }),
              t.dispatch(p),
              !0
            );
        }
        return !1;
      }
      function a(t, e, n = null, r) {
        return new s(t, (t, s, o, l) => {
          let a = n instanceof Function ? n(s) : n,
            u = t.tr.delete(o, l),
            h = u.doc.resolve(o).blockRange(),
            c = h && (0, i.nd)(h, e, a);
          if (!c) return null;
          u.wrap(h, c);
          let p = u.doc.resolve(o - 1).nodeBefore;
          return (
            p &&
              p.type == e &&
              (0, i.Mn)(u.doc, o - 1) &&
              (!r || r(s, p)) &&
              u.join(o - 1),
            u
          );
        });
      }
      function u(t, e, n = null) {
        return new s(t, (t, r, i, s) => {
          let o = t.doc.resolve(i),
            l = n instanceof Function ? n(r) : n;
          return o.node(-1).canReplaceWith(o.index(-1), o.indexAfter(-1), e)
            ? t.tr.delete(i, s).setBlockType(i, i, e, l)
            : null;
        });
      }
      new s(/--$/, "—"),
        new s(/\.\.\.$/, "…"),
        new s(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "“"),
        new s(/"$/, "”"),
        new s(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "‘"),
        new s(/'$/, "’");
    },
    88488: function (t, e, n) {
      n.d(e, {
        h: function () {
          return p;
        },
      });
      for (
        var r = {
            8: "Backspace",
            9: "Tab",
            10: "Enter",
            12: "NumLock",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            44: "PrintScreen",
            45: "Insert",
            46: "Delete",
            59: ";",
            61: "=",
            91: "Meta",
            92: "Meta",
            106: "*",
            107: "+",
            108: ",",
            109: "-",
            110: ".",
            111: "/",
            144: "NumLock",
            145: "ScrollLock",
            160: "Shift",
            161: "Shift",
            162: "Control",
            163: "Control",
            164: "Alt",
            165: "Alt",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
          },
          i = {
            48: ")",
            49: "!",
            50: "@",
            51: "#",
            52: "$",
            53: "%",
            54: "^",
            55: "&",
            56: "*",
            57: "(",
            59: ":",
            61: "+",
            173: "_",
            186: ":",
            187: "+",
            188: "<",
            189: "_",
            190: ">",
            191: "?",
            192: "~",
            219: "{",
            220: "|",
            221: "}",
            222: '"',
          },
          s = "undefined" != typeof navigator && /Mac/.test(navigator.platform),
          o =
            "undefined" != typeof navigator &&
            /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(
              navigator.userAgent
            ),
          l = 0;
        l < 10;
        l++
      )
        r[48 + l] = r[96 + l] = String(l);
      for (var l = 1; l <= 24; l++) r[l + 111] = "F" + l;
      for (var l = 65; l <= 90; l++)
        (r[l] = String.fromCharCode(l + 32)), (i[l] = String.fromCharCode(l));
      for (var a in r) i.hasOwnProperty(a) || (i[a] = r[a]);
      var u = n(60314);
      let h =
        "undefined" != typeof navigator &&
        /Mac|iP(hone|[oa]d)/.test(navigator.platform);
      function c(t, e, n = !0) {
        return (
          e.altKey && (t = "Alt-" + t),
          e.ctrlKey && (t = "Ctrl-" + t),
          e.metaKey && (t = "Meta-" + t),
          n && e.shiftKey && (t = "Shift-" + t),
          t
        );
      }
      function p(t) {
        let e;
        return new u.Sy({
          props: {
            handleKeyDown:
              ((e = (function (t) {
                let e = Object.create(null);
                for (let n in t)
                  e[
                    (function (t) {
                      let e,
                        n,
                        r,
                        i,
                        s = t.split(/-(?!$)/),
                        o = s[s.length - 1];
                      "Space" == o && (o = " ");
                      for (let t = 0; t < s.length - 1; t++) {
                        let o = s[t];
                        if (/^(cmd|meta|m)$/i.test(o)) i = !0;
                        else if (/^a(lt)?$/i.test(o)) e = !0;
                        else if (/^(c|ctrl|control)$/i.test(o)) n = !0;
                        else if (/^s(hift)?$/i.test(o)) r = !0;
                        else if (/^mod$/i.test(o)) h ? (i = !0) : (n = !0);
                        else throw Error("Unrecognized modifier name: " + o);
                      }
                      return (
                        e && (o = "Alt-" + o),
                        n && (o = "Ctrl-" + o),
                        i && (o = "Meta-" + o),
                        r && (o = "Shift-" + o),
                        o
                      );
                    })(n)
                  ] = t[n];
                return e;
              })(t)),
              function (t, n) {
                var l;
                let a =
                    ("Esc" ==
                      (l =
                        (!(
                          (s &&
                            n.metaKey &&
                            n.shiftKey &&
                            !n.ctrlKey &&
                            !n.altKey) ||
                          (o && n.shiftKey && n.key && 1 == n.key.length) ||
                          "Unidentified" == n.key
                        ) &&
                          n.key) ||
                        (n.shiftKey ? i : r)[n.keyCode] ||
                        n.key ||
                        "Unidentified") && (l = "Escape"),
                    "Del" == l && (l = "Delete"),
                    "Left" == l && (l = "ArrowLeft"),
                    "Up" == l && (l = "ArrowUp"),
                    "Right" == l && (l = "ArrowRight"),
                    "Down" == l && (l = "ArrowDown"),
                    l),
                  u,
                  h = e[c(a, n)];
                if (h && h(t.state, t.dispatch, t)) return !0;
                if (1 == a.length && " " != a) {
                  if (n.shiftKey) {
                    let r = e[c(a, n, !1)];
                    if (r && r(t.state, t.dispatch, t)) return !0;
                  }
                  if (
                    (n.shiftKey ||
                      n.altKey ||
                      n.metaKey ||
                      a.charCodeAt(0) > 127) &&
                    (u = r[n.keyCode]) &&
                    u != a
                  ) {
                    let r = e[c(u, n)];
                    if (r && r(t.state, t.dispatch, t)) return !0;
                  }
                }
                return !1;
              }),
          },
        });
      }
    },
    55681: function (t, e, n) {
      n.d(e, {
        xj: function () {
          return eW;
        },
        nZ: function () {
          return eU;
        },
        EU: function () {
          return eZ;
        },
        Dm: function () {
          return eY;
        },
        fK: function () {
          return eL;
        },
      });
      var r,
        i,
        s,
        o,
        l,
        a,
        u,
        h,
        c,
        p,
        d,
        f = {};
      n.r(f),
        n.d(f, {
          decode: function () {
            return C;
          },
          encode: function () {
            return v;
          },
          format: function () {
            return A;
          },
          parse: function () {
            return R;
          },
        });
      var m = {};
      n.r(m),
        n.d(m, {
          Any: function () {
            return L;
          },
          Cc: function () {
            return $;
          },
          Cf: function () {
            return j;
          },
          P: function () {
            return N;
          },
          S: function () {
            return q;
          },
          Z: function () {
            return P;
          },
        });
      var g = {};
      n.r(g),
        n.d(g, {
          arrayReplaceAt: function () {
            return te;
          },
          assign: function () {
            return tt;
          },
          escapeHtml: function () {
            return td;
          },
          escapeRE: function () {
            return tm;
          },
          fromCodePoint: function () {
            return tr;
          },
          has: function () {
            return Q;
          },
          isMdAsciiPunct: function () {
            return tx;
          },
          isPunctChar: function () {
            return ty;
          },
          isSpace: function () {
            return tg;
          },
          isString: function () {
            return K;
          },
          isValidEntityCode: function () {
            return tn;
          },
          isWhiteSpace: function () {
            return tk;
          },
          lib: function () {
            return tC;
          },
          normalizeReference: function () {
            return t_;
          },
          unescapeAll: function () {
            return ta;
          },
          unescapeMd: function () {
            return tl;
          },
        });
      var k = {};
      n.r(k),
        n.d(k, {
          parseLinkDestination: function () {
            return tw;
          },
          parseLinkLabel: function () {
            return tb;
          },
          parseLinkTitle: function () {
            return tv;
          },
        });
      var y = n(79134);
      let x = {};
      function _(t, e) {
        "string" != typeof e && (e = _.defaultChars);
        let n = (function (t) {
          let e = x[t];
          if (e) return e;
          e = x[t] = [];
          for (let t = 0; t < 128; t++) {
            let n = String.fromCharCode(t);
            e.push(n);
          }
          for (let n = 0; n < t.length; n++) {
            let r = t.charCodeAt(n);
            e[r] = "%" + ("0" + r.toString(16).toUpperCase()).slice(-2);
          }
          return e;
        })(e);
        return t.replace(/(%[a-f0-9]{2})+/gi, function (t) {
          let e = "";
          for (let r = 0, i = t.length; r < i; r += 3) {
            let s = parseInt(t.slice(r + 1, r + 3), 16);
            if (s < 128) {
              e += n[s];
              continue;
            }
            if ((224 & s) == 192 && r + 3 < i) {
              let n = parseInt(t.slice(r + 4, r + 6), 16);
              if ((192 & n) == 128) {
                let t = ((s << 6) & 1984) | (63 & n);
                t < 128 ? (e += "��") : (e += String.fromCharCode(t)), (r += 3);
                continue;
              }
            }
            if ((240 & s) == 224 && r + 6 < i) {
              let n = parseInt(t.slice(r + 4, r + 6), 16),
                i = parseInt(t.slice(r + 7, r + 9), 16);
              if ((192 & n) == 128 && (192 & i) == 128) {
                let t = ((s << 12) & 61440) | ((n << 6) & 4032) | (63 & i);
                t < 2048 || (t >= 55296 && t <= 57343)
                  ? (e += "���")
                  : (e += String.fromCharCode(t)),
                  (r += 6);
                continue;
              }
            }
            if ((248 & s) == 240 && r + 9 < i) {
              let n = parseInt(t.slice(r + 4, r + 6), 16),
                i = parseInt(t.slice(r + 7, r + 9), 16),
                o = parseInt(t.slice(r + 10, r + 12), 16);
              if ((192 & n) == 128 && (192 & i) == 128 && (192 & o) == 128) {
                let t =
                  ((s << 18) & 1835008) |
                  ((n << 12) & 258048) |
                  ((i << 6) & 4032) |
                  (63 & o);
                t < 65536 || t > 1114111
                  ? (e += "����")
                  : ((t -= 65536),
                    (e += String.fromCharCode(
                      55296 + (t >> 10),
                      56320 + (1023 & t)
                    ))),
                  (r += 9);
                continue;
              }
            }
            e += "�";
          }
          return e;
        });
      }
      (_.defaultChars = ";/?:@&=+$,#"), (_.componentChars = "");
      var C = _;
      let b = {};
      function w(t, e, n) {
        "string" != typeof e && ((n = e), (e = w.defaultChars)),
          void 0 === n && (n = !0);
        let r = (function (t) {
            let e = b[t];
            if (e) return e;
            e = b[t] = [];
            for (let t = 0; t < 128; t++) {
              let n = String.fromCharCode(t);
              /^[0-9a-z]$/i.test(n)
                ? e.push(n)
                : e.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
            }
            for (let n = 0; n < t.length; n++) e[t.charCodeAt(n)] = t[n];
            return e;
          })(e),
          i = "";
        for (let e = 0, s = t.length; e < s; e++) {
          let o = t.charCodeAt(e);
          if (
            n &&
            37 === o &&
            e + 2 < s &&
            /^[0-9a-f]{2}$/i.test(t.slice(e + 1, e + 3))
          ) {
            (i += t.slice(e, e + 3)), (e += 2);
            continue;
          }
          if (o < 128) {
            i += r[o];
            continue;
          }
          if (o >= 55296 && o <= 57343) {
            if (o >= 55296 && o <= 56319 && e + 1 < s) {
              let n = t.charCodeAt(e + 1);
              if (n >= 56320 && n <= 57343) {
                (i += encodeURIComponent(t[e] + t[e + 1])), e++;
                continue;
              }
            }
            i += "%EF%BF%BD";
            continue;
          }
          i += encodeURIComponent(t[e]);
        }
        return i;
      }
      (w.defaultChars = ";/?:@&=+$,-_.!~*'()#"),
        (w.componentChars = "-_.!~*'()");
      var v = w;
      function A(t) {
        let e = "";
        return (
          (e +=
            (t.protocol || "") +
            (t.slashes ? "//" : "") +
            (t.auth ? t.auth + "@" : "")),
          t.hostname && -1 !== t.hostname.indexOf(":")
            ? (e += "[" + t.hostname + "]")
            : (e += t.hostname || ""),
          (e +=
            (t.port ? ":" + t.port : "") +
            (t.pathname || "") +
            (t.search || "") +
            (t.hash || ""))
        );
      }
      function D() {
        (this.protocol = null),
          (this.slashes = null),
          (this.auth = null),
          (this.port = null),
          (this.hostname = null),
          (this.hash = null),
          (this.search = null),
          (this.pathname = null);
      }
      let E = /^([a-z0-9.+-]+:)/i,
        S = /:[0-9]*$/,
        F = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        M = ["%", "/", "?", ";", "#"].concat(
          ["'"].concat(
            ["{", "}", "|", "\\", "^", "`"].concat([
              "<",
              ">",
              '"',
              "`",
              " ",
              "\r",
              "\n",
              "	",
            ])
          )
        ),
        T = ["/", "?", "#"],
        I = /^[+a-z0-9A-Z_-]{0,63}$/,
        z = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        O = { javascript: !0, "javascript:": !0 },
        B = {
          http: !0,
          https: !0,
          ftp: !0,
          gopher: !0,
          file: !0,
          "http:": !0,
          "https:": !0,
          "ftp:": !0,
          "gopher:": !0,
          "file:": !0,
        };
      (D.prototype.parse = function (t, e) {
        let n, r, i;
        let s = t;
        if (((s = s.trim()), !e && 1 === t.split("#").length)) {
          let t = F.exec(s);
          if (t)
            return (this.pathname = t[1]), t[2] && (this.search = t[2]), this;
        }
        let o = E.exec(s);
        if (
          (o &&
            ((n = (o = o[0]).toLowerCase()),
            (this.protocol = o),
            (s = s.substr(o.length))),
          (e || o || s.match(/^\/\/[^@\/]+@[^@\/]+/)) &&
            (i = "//" === s.substr(0, 2)) &&
            !(o && O[o]) &&
            ((s = s.substr(2)), (this.slashes = !0)),
          !O[o] && (i || (o && !B[o])))
        ) {
          let t,
            e,
            n = -1;
          for (let t = 0; t < T.length; t++)
            -1 !== (r = s.indexOf(T[t])) && (-1 === n || r < n) && (n = r);
          -1 !== (e = -1 === n ? s.lastIndexOf("@") : s.lastIndexOf("@", n)) &&
            ((t = s.slice(0, e)), (s = s.slice(e + 1)), (this.auth = t)),
            (n = -1);
          for (let t = 0; t < M.length; t++)
            -1 !== (r = s.indexOf(M[t])) && (-1 === n || r < n) && (n = r);
          -1 === n && (n = s.length), ":" === s[n - 1] && n--;
          let i = s.slice(0, n);
          (s = s.slice(n)),
            this.parseHost(i),
            (this.hostname = this.hostname || "");
          let o =
            "[" === this.hostname[0] &&
            "]" === this.hostname[this.hostname.length - 1];
          if (!o) {
            let t = this.hostname.split(/\./);
            for (let e = 0, n = t.length; e < n; e++) {
              let n = t[e];
              if (n && !n.match(I)) {
                let r = "";
                for (let t = 0, e = n.length; t < e; t++)
                  n.charCodeAt(t) > 127 ? (r += "x") : (r += n[t]);
                if (!r.match(I)) {
                  let r = t.slice(0, e),
                    i = t.slice(e + 1),
                    o = n.match(z);
                  o && (r.push(o[1]), i.unshift(o[2])),
                    i.length && (s = i.join(".") + s),
                    (this.hostname = r.join("."));
                  break;
                }
              }
            }
          }
          this.hostname.length > 255 && (this.hostname = ""),
            o &&
              (this.hostname = this.hostname.substr(
                1,
                this.hostname.length - 2
              ));
        }
        let l = s.indexOf("#");
        -1 !== l && ((this.hash = s.substr(l)), (s = s.slice(0, l)));
        let a = s.indexOf("?");
        return (
          -1 !== a && ((this.search = s.substr(a)), (s = s.slice(0, a))),
          s && (this.pathname = s),
          B[n] && this.hostname && !this.pathname && (this.pathname = ""),
          this
        );
      }),
        (D.prototype.parseHost = function (t) {
          let e = S.exec(t);
          e &&
            (":" !== (e = e[0]) && (this.port = e.substr(1)),
            (t = t.substr(0, t.length - e.length))),
            t && (this.hostname = t);
        });
      var R = function (t, e) {
          if (t && t instanceof D) return t;
          let n = new D();
          return n.parse(t, e), n;
        },
        N =
          /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,
        q =
          /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,
        L =
          /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
        $ = /[\0-\x1F\x7F-\x9F]/,
        j =
          /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,
        P = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
        J = new Uint16Array(
          'ᵁ<\xd5ıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\x00\x00\x00\x00\x00\x00ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig耻\xc6䃆P耻&䀦cute耻\xc1䃁reve;䄂Āiyx}rc耻\xc2䃂;䐐r;쀀\ud835\udd04rave耻\xc0䃀pha;䎑acr;䄀d;橓Āgp\x9d\xa1on;䄄f;쀀\ud835\udd38plyFunction;恡ing耻\xc5䃅Ācs\xbe\xc3r;쀀\ud835\udc9cign;扔ilde耻\xc3䃃ml耻\xc4䃄Ѐaceforsu\xe5\xfb\xfeėĜĢħĪĀcr\xea\xf2kslash;或Ŷ\xf6\xf8;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀\ud835\udd05pf;쀀\ud835\udd39eve;䋘c\xf2ēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻\xa9䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻\xc7䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷\xf2ſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀\ud835\udc9epĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀\ud835\udd07Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\x00\x00\x00͔͂\x00Ѕf;쀀\ud835\udd3bƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegra\xecȹoɴ͹\x00\x00ͻ\xbb͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔e\xe5ˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\x00\x00ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\x00ц\x00ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\x00ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀\ud835\udc9frok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻\xd0䃐cute耻\xc9䃉ƀaiyӒӗӜron;䄚rc耻\xca䃊;䐭ot;䄖r;쀀\ud835\udd08rave耻\xc8䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\x00\x00ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀\ud835\udd3csilon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻\xcb䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀\ud835\udd09lledɓ֗\x00\x00֣mallSquare;旼erySmallSquare;斪Ͱֺ\x00ֿ\x00\x00ׄf;쀀\ud835\udd3dAll;戀riertrf;愱c\xf2׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀\ud835\udd0a;拙pf;쀀\ud835\udd3eeater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀\ud835\udca2;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\x00ڲf;愍izontalLine;攀Āctۃۅ\xf2کrok;䄦mpńېۘownHum\xf0įqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻\xcd䃍Āiyܓܘrc耻\xce䃎;䐘ot;䄰r;愑rave耻\xcc䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lie\xf3ϝǴ݉\x00ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀\ud835\udd40a;䎙cr;愐ilde;䄨ǫޚ\x00ޞcy;䐆l耻\xcf䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀\ud835\udd0dpf;쀀\ud835\udd41ǣ߇\x00ߌr;쀀\ud835\udca5rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀\ud835\udd0epf;쀀\ud835\udd42cr;쀀\ud835\udca6րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\x00ࣃbleBracket;柦nǔࣈ\x00࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ight\xe1Μs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀\ud835\udd0fĀ;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊight\xe1οight\xe1ϊf;쀀\ud835\udd43erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂ\xf2ࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀\ud835\udd10nusPlus;戓pf;쀀\ud835\udd44c\xf2੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘\xeb૙eryThi\xee૙tedĀGL૸ଆreaterGreate\xf2ٳessLes\xf3ੈLine;䀊r;쀀\ud835\udd11ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀\ud835\udca9ilde耻\xd1䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻\xd3䃓Āiy෎ීrc耻\xd4䃔;䐞blac;䅐r;쀀\ud835\udd12rave耻\xd2䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀\ud835\udd46enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀\ud835\udcaaash耻\xd8䃘iŬื฼de耻\xd5䃕es;樷ml耻\xd6䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀\ud835\udd13i;䎦;䎠usMinus;䂱Āipຢອncareplan\xe5ڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀\ud835\udcab;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀\ud835\udd14pf;愚cr;쀀\ud835\udcac؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻\xae䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r\xbbཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\x00စbleBracket;柧nǔည\x00နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀\ud835\udd16ortȀDLRUᄪᄴᄾᅉownArrow\xbbОeftArrow\xbb࢚ightArrow\xbb࿝pArrow;憑gma;䎣allCircle;战pf;쀀\ud835\udd4aɲᅭ\x00\x00ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀\ud835\udcaear;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Th\xe1ྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et\xbbሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻\xde䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀\ud835\udd17Āeiቻ኉ǲኀ\x00ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀\ud835\udd4bipleDot;惛Āctዖዛr;쀀\ud835\udcafrok;䅦ૡዷጎጚጦ\x00ጬጱ\x00\x00\x00\x00\x00ጸጽ፷ᎅ\x00᏿ᐄᐊᐐĀcrዻጁute耻\xda䃚rĀ;oጇገ憟cir;楉rǣጓ\x00጖y;䐎ve;䅬Āiyጞጣrc耻\xdb䃛;䐣blac;䅰r;쀀\ud835\udd18rave耻\xd9䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀\ud835\udd4cЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥own\xe1ϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀\ud835\udcb0ilde;䅨ml耻\xdc䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀\ud835\udd19pf;쀀\ud835\udd4dcr;쀀\ud835\udcb1dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀\ud835\udd1apf;쀀\ud835\udd4ecr;쀀\ud835\udcb2Ȁfiosᓋᓐᓒᓘr;쀀\ud835\udd1b;䎞pf;쀀\ud835\udd4fcr;쀀\ud835\udcb3ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻\xdd䃝Āiyᔉᔍrc;䅶;䐫r;쀀\ud835\udd1cpf;쀀\ud835\udd50cr;쀀\ud835\udcb4ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\x00ᕛoWidt\xe8૙a;䎖r;愨pf;愤cr;쀀\ud835\udcb5௡ᖃᖊᖐ\x00ᖰᖶᖿ\x00\x00\x00\x00ᗆᗛᗫᙟ᙭\x00ᚕ᚛ᚲᚹ\x00ᚾcute耻\xe1䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻\xe2䃢te肻\xb4̆;䐰lig耻\xe6䃦Ā;r\xb2ᖺ;쀀\ud835\udd1erave耻\xe0䃠ĀepᗊᗖĀfpᗏᗔsym;愵\xe8ᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\x00\x00ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e\xbbᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢\xbb\xb9arr;捼Āgpᙣᙧon;䄅f;쀀\ud835\udd52΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒ\xf1ᚃing耻\xe5䃥ƀctyᚡᚦᚨr;쀀\ud835\udcb6;䀪mpĀ;e዁ᚯ\xf1ʈilde耻\xe3䃣ml耻\xe4䃤Āciᛂᛈonin\xf4ɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e\xbbᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰s\xe9ᜌno\xf5ēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀\ud835\udd1fg΀costuvwឍឝឳេ៕៛៞ƀaiuបពរ\xf0ݠrc;旯p\xbb፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\x00\x00ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄e\xe5ᑄ\xe5ᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\x00ᠳƲᠯ\x00ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀\ud835\udd53Ā;tᏋᡣom\xbbᏌtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻\xa6䂦Ȁceioᥑᥖᥚᥠr;쀀\ud835\udcb7mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t\xbb᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\x00᧨ᨑᨕᨲ\x00ᨷᩐ\x00\x00᪴\x00\x00᫁\x00\x00ᬡᬮ᭍᭒\x00᯽\x00ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁\xeeړȀaeiu᧰᧻ᨁᨅǰ᧵\x00᧸s;橍on;䄍dil耻\xe7䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻\xb8ƭptyv;榲t脀\xa2;eᨭᨮ䂢r\xe4Ʋr;쀀\ud835\udd20ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark\xbbᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\x00\x00᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟\xbbཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it\xbb᪼ˬ᫇᫔᫺\x00ᬊonĀ;eᫍᫎ䀺Ā;q\xc7\xc6ɭ᫙\x00\x00᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁\xeeᅠeĀmx᫱᫶ent\xbb᫩e\xf3ɍǧ᫾\x00ᬇĀ;dኻᬂot;橭n\xf4Ɇƀfryᬐᬔᬗ;쀀\ud835\udd54o\xe4ɔ脀\xa9;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀\ud835\udcb8Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\x00\x00᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\x00\x00ᯒre\xe3᭳u\xe3᭵ee;拎edge;拏en耻\xa4䂤earrowĀlrᯮ᯳eft\xbbᮀight\xbbᮽe\xe4ᯝĀciᰁᰇonin\xf4Ƿnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍r\xf2΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸\xf2ᄳhĀ;vᱚᱛ怐\xbbऊūᱡᱧarow;椏a\xe3̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻\xb0䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀\ud835\udd21arĀlrᲳᲵ\xbbࣜ\xbbသʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀\xf7;o᳧ᳰntimes;拇n\xf8᳷cy;䑒cɯᴆ\x00\x00ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀\ud835\udd55ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedg\xe5\xfanƀadhᄮᵝᵧownarrow\xf3ᲃarpoonĀlrᵲᵶef\xf4Ჴigh\xf4ᲶŢᵿᶅkaro\xf7གɯᶊ\x00\x00ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀\ud835\udcb9;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃r\xf2Щa\xf2ྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴo\xf4ᲉĀcsḎḔute耻\xe9䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻\xea䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀\ud835\udd22ƀ;rsṐṑṗ檚ave耻\xe8䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et\xbbẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀\ud835\udd56ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on\xbbớ;䏵ȀcsuvỪỳἋἣĀioữḱrc\xbbḮɩỹ\x00\x00ỻ\xedՈantĀglἂἆtr\xbbṝess\xbbṺƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯o\xf4͒ĀahὉὋ;䎷耻\xf0䃰Āmrὓὗl耻\xeb䃫o;悬ƀcipὡὤὧl;䀡s\xf4ծĀeoὬὴctatio\xeeՙnential\xe5չৡᾒ\x00ᾞ\x00ᾡᾧ\x00\x00ῆῌ\x00ΐ\x00ῦῪ \x00 ⁚llingdotse\xf1Ṅy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\x00\x00᾽g;耀ﬀig;耀ﬄ;쀀\ud835\udd23lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\x00ῳf;쀀\ud835\udd57ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\x00⁐β•‥‧‪‬\x00‮耻\xbd䂽;慓耻\xbc䂼;慕;慙;慛Ƴ‴\x00‶;慔;慖ʴ‾⁁\x00\x00⁃耻\xbe䂾;慗;慜5;慘ƶ⁌\x00⁎;慚;慝8;慞l;恄wn;挢cr;쀀\ud835\udcbbࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lan\xf4٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀\ud835\udd24Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox\xbbℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀\ud835\udd58Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\x00↎pro\xf8₞r;楸qĀlqؿ↖les\xf3₈i\xed٫Āen↣↭rtneqq;쀀≩︀\xc5↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽r\xf2ΠȀilmr⇐⇔⇗⇛rs\xf0ᒄf\xbb․il\xf4کĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it\xbb∊lip;怦con;抹r;쀀\ud835\udd25sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀\ud835\udd59bar;怕ƀclt≯≴≸r;쀀\ud835\udcbdas\xe8⇴rok;䄧Ābp⊂⊇ull;恃hen\xbbᱛૡ⊣\x00⊪\x00⊸⋅⋎\x00⋕⋳\x00\x00⋸⌢⍧⍢⍿\x00⎆⎪⎴cute耻\xed䃭ƀ;iyݱ⊰⊵rc耻\xee䃮;䐸Ācx⊼⊿y;䐵cl耻\xa1䂡ĀfrΟ⋉;쀀\ud835\udd26rave耻\xec䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓in\xe5ގar\xf4ܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝do\xf4⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙er\xf3ᕣ\xe3⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀\ud835\udd5aa;䎹uest耻\xbf䂿Āci⎊⎏r;쀀\ud835\udcbenʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\x00⎼cy;䑖l耻\xef䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀\ud835\udd27ath;䈷pf;쀀\ud835\udd5bǣ⏬\x00⏱r;쀀\ud835\udcbfrcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀\ud835\udd28reen;䄸cy;䑅cy;䑜pf;쀀\ud835\udd5ccr;쀀\ud835\udcc0஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼r\xf2৆\xf2Εail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\x00⒪\x00⒱\x00\x00\x00\x00\x00⒵Ⓔ\x00ⓆⓈⓍ\x00⓹ute;䄺mptyv;榴ra\xeeࡌbda;䎻gƀ;dlࢎⓁⓃ;榑\xe5ࢎ;檅uo耻\xab䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝\xeb≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼\xecࢰ\xe2┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□a\xe9⓶arpoonĀdu▯▴own\xbbњp\xbb०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoon\xf3྘quigarro\xf7⇰hreetimes;拋ƀ;qs▋ও◺lan\xf4বʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋ppro\xf8Ⓠot;拖qĀgq♃♅\xf4উgt\xf2⒌\xf4ছi\xedলƀilr♕࣡♚sht;楼;쀀\ud835\udd29Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖r\xf2◁orne\xf2ᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che\xbb⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox\xbb⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽r\xebࣁgƀlmr⛿✍✔eftĀar০✇ight\xe1৲apsto;柼ight\xe1৽parrowĀlr✥✩ef\xf4⓭ight;憬ƀafl✶✹✽r;榅;쀀\ud835\udd5dus;樭imes;樴š❋❏st;戗\xe1ፎƀ;ef❗❘᠀旊nge\xbb❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇r\xf2ࢨorne\xf2ᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀\ud835\udcc1mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹re\xe5◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀\xc5⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻\xaf䂯Āet⡗⡙;時Ā;e⡞⡟朠se\xbb⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻ow\xeeҌef\xf4ए\xf0Ꮡker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle\xbbᘦr;쀀\ud835\udd2ao;愧ƀcdn⢯⢴⣉ro耻\xb5䂵Ȁ;acdᑤ⢽⣀⣄s\xf4ᚧir;櫰ot肻\xb7Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛\xf2−\xf0ઁĀdp⣩⣮els;抧f;쀀\ud835\udd5eĀct⣸⣽r;쀀\ud835\udcc2pos\xbbᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la\xbb˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉ro\xf8඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\x00⧣p肻\xa0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\x00⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸ui\xf6ୣĀei⩊⩎ar;椨\xed஘istĀ;s஠டr;쀀\ud835\udd2bȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lan\xf4௢i\xed௪Ā;rஶ⪁\xbbஷƀAap⪊⪍⪑r\xf2⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹r\xf2⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro\xf7⫁ightarro\xf7⪐ƀ;qs఻⪺⫪lan\xf4ౕĀ;sౕ⫴\xbbశi\xedౝĀ;rవ⫾iĀ;eచథi\xe4ඐĀpt⬌⬑f;쀀\ud835\udd5f膀\xac;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lle\xec୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳u\xe5ಥĀ;cಘ⭸Ā;eಒ⭽\xf1ಘȀAait⮈⮋⮝⮧r\xf2⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow\xbb⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉u\xe5൅;쀀\ud835\udcc3ortɭ⬅\x00\x00⯖ar\xe1⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭\xe5೸\xe5ഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗ\xf1സȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇ\xecௗlde耻\xf1䃱\xe7ృiangleĀlrⱒⱜeftĀ;eచⱚ\xf1దightĀ;eೋⱥ\xf1೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00ⴭ\x00ⴸⵈⵠⵥ⵲ⶄᬇ\x00\x00ⶍⶫ\x00ⷈⷎ\x00ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻\xf3䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻\xf4䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀\ud835\udd2cͯ⵹\x00\x00⵼\x00ⶂn;䋛ave耻\xf2䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨr\xf2᪀Āir⶝ⶠr;榾oss;榻n\xe5๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀\ud835\udd60ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨r\xf2᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f\xbbⷿ耻\xaa䂪耻\xba䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧\xf2⸁ash耻\xf8䃸l;折iŬⸯ⸴de耻\xf5䃵esĀ;aǛ⸺s;樶ml耻\xf6䃶bar;挽ૡ⹞\x00⹽\x00⺀⺝\x00⺢⺹\x00\x00⻋ຜ\x00⼓\x00\x00⼫⾼\x00⿈rȀ;astЃ⹧⹲຅脀\xb6;l⹭⹮䂶le\xecЃɩ⹸\x00\x00⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀\ud835\udd2dƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕ma\xf4੶ne;明ƀ;tv⺿⻀⻈䏀chfork\xbb´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎\xf6⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻\xb1ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀\ud835\udd61nd耻\xa3䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷u\xe5໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾ppro\xf8⽃urlye\xf1໙\xf1໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨i\xedໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺\xf0⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴\xef໻rel;抰Āci⿀⿅r;쀀\ud835\udcc5;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀\ud835\udd2epf;쀀\ud835\udd62rime;恗cr;쀀\ud835\udcc6ƀaeo⿸〉〓tĀei⿾々rnion\xf3ڰnt;樖stĀ;e【】䀿\xf1Ἑ\xf4༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがr\xf2Ⴓ\xf2ϝail;検ar\xf2ᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕i\xe3ᅮmptyv;榳gȀ;del࿑らるろ;榒;榥\xe5࿑uo耻\xbb䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞\xeb≝\xf0✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶al\xf3༞ƀabrョリヮr\xf2៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗\xec࿲\xe2ヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜn\xe5Ⴛar\xf4ྩt;断ƀilrㅩဣㅮsht;楽;쀀\ud835\udd2fĀaoㅷㆆrĀduㅽㅿ\xbbѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭa\xe9トarpoonĀduㆻㆿow\xeeㅾp\xbb႒eftĀah㇊㇐rrow\xf3࿪arpoon\xf3Ցightarrows;應quigarro\xf7ニhreetimes;拌g;䋚ingdotse\xf1ἲƀahm㈍㈐㈓r\xf2࿪a\xf2Ց;怏oustĀ;a㈞㈟掱che\xbb㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾r\xebဃƀafl㉇㉊㉎r;榆;쀀\ud835\udd63us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒ar\xf2㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀\ud835\udcc7Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠re\xe5ㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\x00㍺㎤\x00\x00㏬㏰\x00㐨㑈㑚㒭㒱㓊㓱\x00㘖\x00\x00㘳cute;䅛qu\xef➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\x00㋼;檸on;䅡u\xe5ᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓i\xedሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒\xeb∨Ā;oਸ਼਴t耻\xa7䂧i;䀻war;椩mĀin㍩\xf0nu\xf3\xf1t;朶rĀ;o㍶⁕쀀\ud835\udd30Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\x00\x00㎜i\xe4ᑤara\xec⹯耻\xad䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲ar\xf2ᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetm\xe9㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀\ud835\udd64aĀdr㑍ЂesĀ;u㑔㑕晠it\xbb㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍\xf1ᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝\xf1ᆮƀ;afᅻ㒦ְrť㒫ֱ\xbbᅼar\xf2ᅈȀcemt㒹㒾㓂㓅r;쀀\ud835\udcc8tm\xee\xf1i\xec㐕ar\xe6ᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psilo\xeeỠh\xe9⺯s\xbb⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦ppro\xf8㋺urlye\xf1ᇾ\xf1ᇳƀaes㖂㖈㌛ppro\xf8㌚q\xf1㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻\xb9䂹耻\xb2䂲耻\xb3䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨\xeb∮Ā;oਫ਩war;椪lig耻\xdf䃟௡㙑㙝㙠ዎ㙳㙹\x00㙾㛂\x00\x00\x00\x00\x00㛛㜃\x00㜉㝬\x00\x00\x00㞇ɲ㙖\x00\x00㙛get;挖;䏄r\xeb๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀\ud835\udd31Ȁeiko㚆㚝㚵㚼ǲ㚋\x00㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮ppro\xf8዁im\xbbኬs\xf0ኞĀas㚺㚮\xf0዁rn耻\xfe䃾Ǭ̟㛆⋧es膀\xd7;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀\xe1⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀\ud835\udd65rk;櫚\xe1㍢rime;怴ƀaip㜏㜒㝤d\xe5ቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own\xbbᶻeftĀ;e⠀㜾\xf1म;扜ightĀ;e㊪㝋\xf1ၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀\ud835\udcc9;䑆cy;䑛rok;䅧Āio㞋㞎x\xf4᝷headĀlr㞗㞠eftarro\xf7ࡏightarrow\xbbཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶r\xf2ϭar;楣Ācr㟜㟢ute耻\xfa䃺\xf2ᅐrǣ㟪\x00㟭y;䑞ve;䅭Āiy㟵㟺rc耻\xfb䃻;䑃ƀabh㠃㠆㠋r\xf2Ꭽlac;䅱a\xf2ᏃĀir㠓㠘sht;楾;쀀\ud835\udd32rave耻\xf9䃹š㠧㠱rĀlr㠬㠮\xbbॗ\xbbႃlk;斀Āct㠹㡍ɯ㠿\x00\x00㡊rnĀ;e㡅㡆挜r\xbb㡆op;挏ri;旸Āal㡖㡚cr;䅫肻\xa8͉Āgp㡢㡦on;䅳f;쀀\ud835\udd66̀adhlsuᅋ㡸㡽፲㢑㢠own\xe1ᎳarpoonĀlr㢈㢌ef\xf4㠭igh\xf4㠯iƀ;hl㢙㢚㢜䏅\xbbᏺon\xbb㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\x00\x00㣁rnĀ;e㢼㢽挝r\xbb㢽op;挎ng;䅯ri;旹cr;쀀\ud835\udccaƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨\xbb᠓Āam㣯㣲r\xf2㢨l耻\xfc䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠r\xf2ϷarĀ;v㤦㤧櫨;櫩as\xe8ϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖app\xe1␕othin\xe7ẖƀhir㓫⻈㥙op\xf4⾵Ā;hᎷ㥢\xefㆍĀiu㥩㥭gm\xe1㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟et\xe1㚜iangleĀlr㦪㦯eft\xbbथight\xbbၑy;䐲ash\xbbံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨa\xf2ᑩr;쀀\ud835\udd33tr\xe9㦮suĀbp㧯㧱\xbbജ\xbb൙pf;쀀\ud835\udd67ro\xf0໻tr\xe9㦴Ācu㨆㨋r;쀀\ud835\udccbĀbp㨐㨘nĀEe㦀㨖\xbb㥾nĀEe㦒㨞\xbb㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀\ud835\udd34pf;쀀\ud835\udd68Ā;eᑹ㩦at\xe8ᑹcr;쀀\ud835\udcccૣណ㪇\x00㪋\x00㪐㪛\x00\x00㪝㪨㪫㪯\x00\x00㫃㫎\x00㫘ៜ៟tr\xe9៑r;쀀\ud835\udd35ĀAa㪔㪗r\xf2σr\xf2৶;䎾ĀAa㪡㪤r\xf2θr\xf2৫a\xf0✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀\ud835\udd69im\xe5ឲĀAa㫇㫊r\xf2ώr\xf2ਁĀcq㫒ីr;쀀\ud835\udccdĀpt៖㫜r\xe9។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻\xfd䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻\xa5䂥r;쀀\ud835\udd36cy;䑗pf;쀀\ud835\udd6acr;쀀\ud835\udcceĀcm㬦㬩y;䑎l耻\xff䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡tr\xe6ᕟa;䎶r;쀀\ud835\udd37cy;䐶grarr;懝pf;쀀\ud835\udd6bcr;쀀\ud835\udccfĀjn㮅㮇;怍j;怌'
            .split("")
            .map((t) => t.charCodeAt(0))
        ),
        H = new Uint16Array(
          "Ȁaglq	\x15\x18\x1bɭ\x0f\x00\x00\x12p;䀦os;䀧t;䀾t;䀼uot;䀢"
            .split("")
            .map((t) => t.charCodeAt(0))
        );
      let W = new Map([
          [0, 65533],
          [128, 8364],
          [130, 8218],
          [131, 402],
          [132, 8222],
          [133, 8230],
          [134, 8224],
          [135, 8225],
          [136, 710],
          [137, 8240],
          [138, 352],
          [139, 8249],
          [140, 338],
          [142, 381],
          [145, 8216],
          [146, 8217],
          [147, 8220],
          [148, 8221],
          [149, 8226],
          [150, 8211],
          [151, 8212],
          [152, 732],
          [153, 8482],
          [154, 353],
          [155, 8250],
          [156, 339],
          [158, 382],
          [159, 376],
        ]),
        V =
          null !== (a = String.fromCodePoint) && void 0 !== a
            ? a
            : function (t) {
                let e = "";
                return (
                  t > 65535 &&
                    ((t -= 65536),
                    (e += String.fromCharCode(((t >>> 10) & 1023) | 55296)),
                    (t = 56320 | (1023 & t))),
                  (e += String.fromCharCode(t))
                );
              };
      function Z(t) {
        return function (e, n) {
          let r = "",
            i = 0,
            s = 0;
          for (; (s = e.indexOf("&", s)) >= 0; ) {
            if (
              ((r += e.slice(i, s)),
              (i = s),
              (s += 1),
              e.charCodeAt(s) === u.NUM)
            ) {
              let t = s + 1,
                o = 10,
                l = e.charCodeAt(t);
              (l | u.To_LOWER_BIT) === u.LOWER_X &&
                ((o = 16), (s += 1), (t += 1));
              do l = e.charCodeAt(++s);
              while (
                (l >= u.ZERO && l <= u.NINE) ||
                (16 === o &&
                  (l | u.To_LOWER_BIT) >= u.LOWER_A &&
                  (l | u.To_LOWER_BIT) <= u.LOWER_F)
              );
              if (t !== s) {
                let l = parseInt(e.substring(t, s), o);
                if (e.charCodeAt(s) === u.SEMI) s += 1;
                else if (n) continue;
                (r += (function (t) {
                  var e;
                  return V(
                    (t >= 55296 && t <= 57343) || t > 1114111
                      ? 65533
                      : null !== (e = W.get(t)) && void 0 !== e
                        ? e
                        : t
                  );
                })(l)),
                  (i = s);
              }
              continue;
            }
            let o = 0,
              l = 1,
              a = 0,
              c = t[0];
            for (
              ;
              s < e.length &&
              !(
                (a = (function (t, e, n, r) {
                  let i = (e & h.BRANCH_LENGTH) >> 7,
                    s = e & h.JUMP_TABLE;
                  if (0 === i) return 0 !== s && r === s ? n : -1;
                  if (s) {
                    let e = r - s;
                    return e < 0 || e >= i ? -1 : t[n + e] - 1;
                  }
                  let o = n,
                    l = o + i - 1;
                  for (; o <= l; ) {
                    let e = (o + l) >>> 1,
                      n = t[e];
                    if (n < r) o = e + 1;
                    else {
                      if (!(n > r)) return t[e + i];
                      l = e - 1;
                    }
                  }
                  return -1;
                })(t, c, a + 1, e.charCodeAt(s))) < 0
              );
              s++, l++
            ) {
              let r = (c = t[a]) & h.VALUE_LENGTH;
              if (r) {
                (n && e.charCodeAt(s) !== u.SEMI) || ((o = a), (l = 0));
                let t = (r >> 14) - 1;
                if (0 === t) break;
                a += t;
              }
            }
            if (0 !== o) {
              let e = (t[o] & h.VALUE_LENGTH) >> 14;
              (r +=
                1 === e
                  ? String.fromCharCode(t[o] & ~h.VALUE_LENGTH)
                  : 2 === e
                    ? String.fromCharCode(t[o + 1])
                    : String.fromCharCode(t[o + 1], t[o + 2])),
                (i = s - l + 1);
            }
          }
          return r + e.slice(i);
        };
      }
      ((r = u || (u = {}))[(r.NUM = 35)] = "NUM"),
        (r[(r.SEMI = 59)] = "SEMI"),
        (r[(r.ZERO = 48)] = "ZERO"),
        (r[(r.NINE = 57)] = "NINE"),
        (r[(r.LOWER_A = 97)] = "LOWER_A"),
        (r[(r.LOWER_F = 102)] = "LOWER_F"),
        (r[(r.LOWER_X = 120)] = "LOWER_X"),
        (r[(r.To_LOWER_BIT = 32)] = "To_LOWER_BIT"),
        ((i = h || (h = {}))[(i.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
        (i[(i.BRANCH_LENGTH = 16256)] = "BRANCH_LENGTH"),
        (i[(i.JUMP_TABLE = 127)] = "JUMP_TABLE");
      let U = Z(J);
      Z(H);
      let Y = new Map([
        [34, "&quot;"],
        [38, "&amp;"],
        [39, "&apos;"],
        [60, "&lt;"],
        [62, "&gt;"],
      ]);
      function G(t, e) {
        return function (n) {
          let r;
          let i = 0,
            s = "";
          for (; (r = t.exec(n)); )
            i !== r.index && (s += n.substring(i, r.index)),
              (s += e.get(r[0].charCodeAt(0))),
              (i = r.index + 1);
          return s + n.substring(i);
        };
      }
      function K(t) {
        return "[object String]" === Object.prototype.toString.call(t);
      }
      null != String.prototype.codePointAt ||
        ((t, e) =>
          (64512 & t.charCodeAt(e)) == 55296
            ? (t.charCodeAt(e) - 55296) * 1024 +
              t.charCodeAt(e + 1) -
              56320 +
              65536
            : t.charCodeAt(e)),
        G(/[&<>'"]/g, Y),
        G(
          /["&\u00A0]/g,
          new Map([
            [34, "&quot;"],
            [38, "&amp;"],
            [160, "&nbsp;"],
          ])
        ),
        G(
          /[&<>\u00A0]/g,
          new Map([
            [38, "&amp;"],
            [60, "&lt;"],
            [62, "&gt;"],
            [160, "&nbsp;"],
          ])
        ),
        ((s = c || (c = {}))[(s.XML = 0)] = "XML"),
        (s[(s.HTML = 1)] = "HTML"),
        ((o = p || (p = {}))[(o.Legacy = 0)] = "Legacy"),
        (o[(o.Strict = 1)] = "Strict"),
        ((l = d || (d = {}))[(l.UTF8 = 0)] = "UTF8"),
        (l[(l.ASCII = 1)] = "ASCII"),
        (l[(l.Extensive = 2)] = "Extensive"),
        (l[(l.Attribute = 3)] = "Attribute"),
        (l[(l.Text = 4)] = "Text");
      let X = Object.prototype.hasOwnProperty;
      function Q(t, e) {
        return X.call(t, e);
      }
      function tt(t) {
        let e = Array.prototype.slice.call(arguments, 1);
        return (
          e.forEach(function (e) {
            if (e) {
              if ("object" != typeof e) throw TypeError(e + "must be object");
              Object.keys(e).forEach(function (n) {
                t[n] = e[n];
              });
            }
          }),
          t
        );
      }
      function te(t, e, n) {
        return [].concat(t.slice(0, e), n, t.slice(e + 1));
      }
      function tn(t) {
        return (
          (!(t >= 55296) || !(t <= 57343)) &&
          (!(t >= 64976) || !(t <= 65007)) &&
          (65535 & t) != 65535 &&
          (65535 & t) != 65534 &&
          (!(t >= 0) || !(t <= 8)) &&
          11 !== t &&
          (!(t >= 14) || !(t <= 31)) &&
          (!(t >= 127) || !(t <= 159)) &&
          !(t > 1114111)
        );
      }
      function tr(t) {
        return t > 65535
          ? String.fromCharCode(
              55296 + ((t -= 65536) >> 10),
              56320 + (1023 & t)
            )
          : String.fromCharCode(t);
      }
      let ti = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,
        ts = RegExp(
          ti.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source,
          "gi"
        ),
        to = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
      function tl(t) {
        return 0 > t.indexOf("\\") ? t : t.replace(ti, "$1");
      }
      function ta(t) {
        return 0 > t.indexOf("\\") && 0 > t.indexOf("&")
          ? t
          : t.replace(ts, function (t, e, n) {
              return (
                e ||
                (function (t, e) {
                  if (35 === e.charCodeAt(0) && to.test(e)) {
                    let n =
                      "x" === e[1].toLowerCase()
                        ? parseInt(e.slice(2), 16)
                        : parseInt(e.slice(1), 10);
                    return tn(n) ? tr(n) : t;
                  }
                  let n = U(t, !1);
                  return n !== t ? n : t;
                })(t, n)
              );
            });
      }
      let tu = /[&<>"]/,
        th = /[&<>"]/g,
        tc = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
      function tp(t) {
        return tc[t];
      }
      function td(t) {
        return tu.test(t) ? t.replace(th, tp) : t;
      }
      let tf = /[.?*+^$[\]\\(){}|-]/g;
      function tm(t) {
        return t.replace(tf, "\\$&");
      }
      function tg(t) {
        switch (t) {
          case 9:
          case 32:
            return !0;
        }
        return !1;
      }
      function tk(t) {
        if (t >= 8192 && t <= 8202) return !0;
        switch (t) {
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 32:
          case 160:
          case 5760:
          case 8239:
          case 8287:
          case 12288:
            return !0;
        }
        return !1;
      }
      function ty(t) {
        return N.test(t) || q.test(t);
      }
      function tx(t) {
        switch (t) {
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
          case 38:
          case 39:
          case 40:
          case 41:
          case 42:
          case 43:
          case 44:
          case 45:
          case 46:
          case 47:
          case 58:
          case 59:
          case 60:
          case 61:
          case 62:
          case 63:
          case 64:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
          case 123:
          case 124:
          case 125:
          case 126:
            return !0;
          default:
            return !1;
        }
      }
      function t_(t) {
        return (t = t.trim().replace(/\s+/g, " ")).toLowerCase().toUpperCase();
      }
      let tC = { mdurl: f, ucmicro: m };
      function tb(t, e, n) {
        let r, i, s, o;
        let l = t.posMax,
          a = t.pos;
        for (t.pos = e + 1, r = 1; t.pos < l; ) {
          if (93 === (s = t.src.charCodeAt(t.pos)) && 0 == --r) {
            i = !0;
            break;
          }
          if (((o = t.pos), t.md.inline.skipToken(t), 91 === s)) {
            if (o === t.pos - 1) r++;
            else if (n) return (t.pos = a), -1;
          }
        }
        let u = -1;
        return i && (u = t.pos), (t.pos = a), u;
      }
      function tw(t, e, n) {
        let r;
        let i = e,
          s = { ok: !1, pos: 0, str: "" };
        if (60 === t.charCodeAt(i)) {
          for (i++; i < n && 10 !== (r = t.charCodeAt(i)) && 60 !== r; ) {
            if (62 === r) {
              (s.pos = i + 1), (s.str = ta(t.slice(e + 1, i))), (s.ok = !0);
              break;
            }
            if (92 === r && i + 1 < n) {
              i += 2;
              continue;
            }
            i++;
          }
          return s;
        }
        let o = 0;
        for (
          ;
          i < n && 32 !== (r = t.charCodeAt(i)) && !(r < 32) && 127 !== r;
        ) {
          if (92 === r && i + 1 < n) {
            if (32 === t.charCodeAt(i + 1)) break;
            i += 2;
            continue;
          }
          if (40 === r && ++o > 32) return s;
          if (41 === r) {
            if (0 === o) break;
            o--;
          }
          i++;
        }
        return (
          e === i ||
            0 !== o ||
            ((s.str = ta(t.slice(e, i))), (s.pos = i), (s.ok = !0)),
          s
        );
      }
      function tv(t, e, n, r) {
        let i;
        let s = e,
          o = { ok: !1, can_continue: !1, pos: 0, str: "", marker: 0 };
        if (r) (o.str = r.str), (o.marker = r.marker);
        else {
          if (s >= n) return o;
          let r = t.charCodeAt(s);
          if (34 !== r && 39 !== r && 40 !== r) return o;
          e++, s++, 40 === r && (r = 41), (o.marker = r);
        }
        for (; s < n; ) {
          if ((i = t.charCodeAt(s)) === o.marker)
            return (
              (o.pos = s + 1), (o.str += ta(t.slice(e, s))), (o.ok = !0), o
            );
          if (40 === i && 41 === o.marker) return o;
          92 === i && s + 1 < n && s++, s++;
        }
        return (o.can_continue = !0), (o.str += ta(t.slice(e, s))), o;
      }
      let tA = {};
      function tD() {
        this.rules = tt({}, tA);
      }
      function tE() {
        (this.__rules__ = []), (this.__cache__ = null);
      }
      function tS(t, e, n) {
        (this.type = t),
          (this.tag = e),
          (this.attrs = null),
          (this.map = null),
          (this.nesting = n),
          (this.level = 0),
          (this.children = null),
          (this.content = ""),
          (this.markup = ""),
          (this.info = ""),
          (this.meta = null),
          (this.block = !1),
          (this.hidden = !1);
      }
      function tF(t, e, n) {
        (this.src = t),
          (this.env = n),
          (this.tokens = []),
          (this.inlineMode = !1),
          (this.md = e);
      }
      (tA.code_inline = function (t, e, n, r, i) {
        let s = t[e];
        return "<code" + i.renderAttrs(s) + ">" + td(s.content) + "</code>";
      }),
        (tA.code_block = function (t, e, n, r, i) {
          let s = t[e];
          return (
            "<pre" +
            i.renderAttrs(s) +
            "><code>" +
            td(t[e].content) +
            "</code></pre>\n"
          );
        }),
        (tA.fence = function (t, e, n, r, i) {
          let s;
          let o = t[e],
            l = o.info ? ta(o.info).trim() : "",
            a = "",
            u = "";
          if (l) {
            let t = l.split(/(\s+)/g);
            (a = t[0]), (u = t.slice(2).join(""));
          }
          if (
            0 ===
            (s =
              (n.highlight && n.highlight(o.content, a, u)) ||
              td(o.content)).indexOf("<pre")
          )
            return s + "\n";
          if (l) {
            let t = o.attrIndex("class"),
              e = o.attrs ? o.attrs.slice() : [];
            return (
              t < 0
                ? e.push(["class", n.langPrefix + a])
                : ((e[t] = e[t].slice()), (e[t][1] += " " + n.langPrefix + a)),
              `<pre><code${i.renderAttrs({ attrs: e })}>${s}</code></pre>
`
            );
          }
          return `<pre><code${i.renderAttrs(o)}>${s}</code></pre>
`;
        }),
        (tA.image = function (t, e, n, r, i) {
          let s = t[e];
          return (
            (s.attrs[s.attrIndex("alt")][1] = i.renderInlineAsText(
              s.children,
              n,
              r
            )),
            i.renderToken(t, e, n)
          );
        }),
        (tA.hardbreak = function (t, e, n) {
          return n.xhtmlOut ? "<br />\n" : "<br>\n";
        }),
        (tA.softbreak = function (t, e, n) {
          return n.breaks ? (n.xhtmlOut ? "<br />\n" : "<br>\n") : "\n";
        }),
        (tA.text = function (t, e) {
          return td(t[e].content);
        }),
        (tA.html_block = function (t, e) {
          return t[e].content;
        }),
        (tA.html_inline = function (t, e) {
          return t[e].content;
        }),
        (tD.prototype.renderAttrs = function (t) {
          let e, n, r;
          if (!t.attrs) return "";
          for (e = 0, r = "", n = t.attrs.length; e < n; e++)
            r += " " + td(t.attrs[e][0]) + '="' + td(t.attrs[e][1]) + '"';
          return r;
        }),
        (tD.prototype.renderToken = function (t, e, n) {
          let r = t[e],
            i = "";
          if (r.hidden) return "";
          r.block && -1 !== r.nesting && e && t[e - 1].hidden && (i += "\n"),
            (i +=
              (-1 === r.nesting ? "</" : "<") + r.tag + this.renderAttrs(r)),
            0 === r.nesting && n.xhtmlOut && (i += " /");
          let s = !1;
          if (r.block && ((s = !0), 1 === r.nesting && e + 1 < t.length)) {
            let n = t[e + 1];
            "inline" === n.type || n.hidden
              ? (s = !1)
              : -1 === n.nesting && n.tag === r.tag && (s = !1);
          }
          return i + (s ? ">\n" : ">");
        }),
        (tD.prototype.renderInline = function (t, e, n) {
          let r = "",
            i = this.rules;
          for (let s = 0, o = t.length; s < o; s++) {
            let o = t[s].type;
            void 0 !== i[o]
              ? (r += i[o](t, s, e, n, this))
              : (r += this.renderToken(t, s, e));
          }
          return r;
        }),
        (tD.prototype.renderInlineAsText = function (t, e, n) {
          let r = "";
          for (let i = 0, s = t.length; i < s; i++)
            switch (t[i].type) {
              case "text":
              case "html_inline":
              case "html_block":
                r += t[i].content;
                break;
              case "image":
                r += this.renderInlineAsText(t[i].children, e, n);
                break;
              case "softbreak":
              case "hardbreak":
                r += "\n";
            }
          return r;
        }),
        (tD.prototype.render = function (t, e, n) {
          let r = "",
            i = this.rules;
          for (let s = 0, o = t.length; s < o; s++) {
            let o = t[s].type;
            "inline" === o
              ? (r += this.renderInline(t[s].children, e, n))
              : void 0 !== i[o]
                ? (r += i[o](t, s, e, n, this))
                : (r += this.renderToken(t, s, e, n));
          }
          return r;
        }),
        (tE.prototype.__find__ = function (t) {
          for (let e = 0; e < this.__rules__.length; e++)
            if (this.__rules__[e].name === t) return e;
          return -1;
        }),
        (tE.prototype.__compile__ = function () {
          let t = this,
            e = [""];
          t.__rules__.forEach(function (t) {
            t.enabled &&
              t.alt.forEach(function (t) {
                0 > e.indexOf(t) && e.push(t);
              });
          }),
            (t.__cache__ = {}),
            e.forEach(function (e) {
              (t.__cache__[e] = []),
                t.__rules__.forEach(function (n) {
                  !n.enabled ||
                    (e && 0 > n.alt.indexOf(e)) ||
                    t.__cache__[e].push(n.fn);
                });
            });
        }),
        (tE.prototype.at = function (t, e, n) {
          let r = this.__find__(t);
          if (-1 === r) throw Error("Parser rule not found: " + t);
          (this.__rules__[r].fn = e),
            (this.__rules__[r].alt = (n || {}).alt || []),
            (this.__cache__ = null);
        }),
        (tE.prototype.before = function (t, e, n, r) {
          let i = this.__find__(t);
          if (-1 === i) throw Error("Parser rule not found: " + t);
          this.__rules__.splice(i, 0, {
            name: e,
            enabled: !0,
            fn: n,
            alt: (r || {}).alt || [],
          }),
            (this.__cache__ = null);
        }),
        (tE.prototype.after = function (t, e, n, r) {
          let i = this.__find__(t);
          if (-1 === i) throw Error("Parser rule not found: " + t);
          this.__rules__.splice(i + 1, 0, {
            name: e,
            enabled: !0,
            fn: n,
            alt: (r || {}).alt || [],
          }),
            (this.__cache__ = null);
        }),
        (tE.prototype.push = function (t, e, n) {
          this.__rules__.push({
            name: t,
            enabled: !0,
            fn: e,
            alt: (n || {}).alt || [],
          }),
            (this.__cache__ = null);
        }),
        (tE.prototype.enable = function (t, e) {
          Array.isArray(t) || (t = [t]);
          let n = [];
          return (
            t.forEach(function (t) {
              let r = this.__find__(t);
              if (r < 0) {
                if (e) return;
                throw Error("Rules manager: invalid rule name " + t);
              }
              (this.__rules__[r].enabled = !0), n.push(t);
            }, this),
            (this.__cache__ = null),
            n
          );
        }),
        (tE.prototype.enableOnly = function (t, e) {
          Array.isArray(t) || (t = [t]),
            this.__rules__.forEach(function (t) {
              t.enabled = !1;
            }),
            this.enable(t, e);
        }),
        (tE.prototype.disable = function (t, e) {
          Array.isArray(t) || (t = [t]);
          let n = [];
          return (
            t.forEach(function (t) {
              let r = this.__find__(t);
              if (r < 0) {
                if (e) return;
                throw Error("Rules manager: invalid rule name " + t);
              }
              (this.__rules__[r].enabled = !1), n.push(t);
            }, this),
            (this.__cache__ = null),
            n
          );
        }),
        (tE.prototype.getRules = function (t) {
          return (
            null === this.__cache__ && this.__compile__(),
            this.__cache__[t] || []
          );
        }),
        (tS.prototype.attrIndex = function (t) {
          if (!this.attrs) return -1;
          let e = this.attrs;
          for (let n = 0, r = e.length; n < r; n++) if (e[n][0] === t) return n;
          return -1;
        }),
        (tS.prototype.attrPush = function (t) {
          this.attrs ? this.attrs.push(t) : (this.attrs = [t]);
        }),
        (tS.prototype.attrSet = function (t, e) {
          let n = this.attrIndex(t),
            r = [t, e];
          n < 0 ? this.attrPush(r) : (this.attrs[n] = r);
        }),
        (tS.prototype.attrGet = function (t) {
          let e = this.attrIndex(t),
            n = null;
          return e >= 0 && (n = this.attrs[e][1]), n;
        }),
        (tS.prototype.attrJoin = function (t, e) {
          let n = this.attrIndex(t);
          n < 0
            ? this.attrPush([t, e])
            : (this.attrs[n][1] = this.attrs[n][1] + " " + e);
        }),
        (tF.prototype.Token = tS);
      let tM = /\r\n?|\n/g,
        tT = /\0/g,
        tI = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
        tz = /\((c|tm|r)\)/i,
        tO = /\((c|tm|r)\)/gi,
        tB = { c: "\xa9", r: "\xae", tm: "™" };
      function tR(t, e) {
        return tB[e.toLowerCase()];
      }
      let tN = /['"]/,
        tq = /['"]/g;
      function tL(t, e, n) {
        return t.slice(0, e) + n + t.slice(e + 1);
      }
      let t$ = [
        [
          "normalize",
          function (t) {
            let e;
            (e = (e = t.src.replace(tM, "\n")).replace(tT, "�")), (t.src = e);
          },
        ],
        [
          "block",
          function (t) {
            let e;
            t.inlineMode
              ? (((e = new t.Token("inline", "", 0)).content = t.src),
                (e.map = [0, 1]),
                (e.children = []),
                t.tokens.push(e))
              : t.md.block.parse(t.src, t.md, t.env, t.tokens);
          },
        ],
        [
          "inline",
          function (t) {
            let e = t.tokens;
            for (let n = 0, r = e.length; n < r; n++) {
              let r = e[n];
              "inline" === r.type &&
                t.md.inline.parse(r.content, t.md, t.env, r.children);
            }
          },
        ],
        [
          "linkify",
          function (t) {
            let e = t.tokens;
            if (t.md.options.linkify)
              for (let i = 0, s = e.length; i < s; i++) {
                if (
                  "inline" !== e[i].type ||
                  !t.md.linkify.pretest(e[i].content)
                )
                  continue;
                let s = e[i].children,
                  o = 0;
                for (let l = s.length - 1; l >= 0; l--) {
                  let a = s[l];
                  if ("link_close" === a.type) {
                    for (
                      l--;
                      s[l].level !== a.level && "link_open" !== s[l].type;
                    )
                      l--;
                    continue;
                  }
                  if ("html_inline" === a.type) {
                    var n, r;
                    (n = a.content),
                      /^<a[>\s]/i.test(n) && o > 0 && o--,
                      (r = a.content),
                      /^<\/a\s*>/i.test(r) && o++;
                  }
                  if (
                    !(o > 0) &&
                    "text" === a.type &&
                    t.md.linkify.test(a.content)
                  ) {
                    let n = a.content,
                      r = t.md.linkify.match(n),
                      o = [],
                      u = a.level,
                      h = 0;
                    r.length > 0 &&
                      0 === r[0].index &&
                      l > 0 &&
                      "text_special" === s[l - 1].type &&
                      (r = r.slice(1));
                    for (let e = 0; e < r.length; e++) {
                      let i = r[e].url,
                        s = t.md.normalizeLink(i);
                      if (!t.md.validateLink(s)) continue;
                      let l = r[e].text;
                      l = r[e].schema
                        ? "mailto:" !== r[e].schema || /^mailto:/i.test(l)
                          ? t.md.normalizeLinkText(l)
                          : t.md
                              .normalizeLinkText("mailto:" + l)
                              .replace(/^mailto:/, "")
                        : t.md
                            .normalizeLinkText("http://" + l)
                            .replace(/^http:\/\//, "");
                      let a = r[e].index;
                      if (a > h) {
                        let e = new t.Token("text", "", 0);
                        (e.content = n.slice(h, a)), (e.level = u), o.push(e);
                      }
                      let c = new t.Token("link_open", "a", 1);
                      (c.attrs = [["href", s]]),
                        (c.level = u++),
                        (c.markup = "linkify"),
                        (c.info = "auto"),
                        o.push(c);
                      let p = new t.Token("text", "", 0);
                      (p.content = l), (p.level = u), o.push(p);
                      let d = new t.Token("link_close", "a", -1);
                      (d.level = --u),
                        (d.markup = "linkify"),
                        (d.info = "auto"),
                        o.push(d),
                        (h = r[e].lastIndex);
                    }
                    if (h < n.length) {
                      let e = new t.Token("text", "", 0);
                      (e.content = n.slice(h)), (e.level = u), o.push(e);
                    }
                    e[i].children = s = te(s, l, o);
                  }
                }
              }
          },
        ],
        [
          "replacements",
          function (t) {
            let e;
            if (t.md.options.typographer)
              for (e = t.tokens.length - 1; e >= 0; e--)
                "inline" === t.tokens[e].type &&
                  (tz.test(t.tokens[e].content) &&
                    (function (t) {
                      let e = 0;
                      for (let n = t.length - 1; n >= 0; n--) {
                        let r = t[n];
                        "text" !== r.type ||
                          e ||
                          (r.content = r.content.replace(tO, tR)),
                          "link_open" === r.type && "auto" === r.info && e--,
                          "link_close" === r.type && "auto" === r.info && e++;
                      }
                    })(t.tokens[e].children),
                  tI.test(t.tokens[e].content) &&
                    (function (t) {
                      let e = 0;
                      for (let n = t.length - 1; n >= 0; n--) {
                        let r = t[n];
                        "text" === r.type &&
                          !e &&
                          tI.test(r.content) &&
                          (r.content = r.content
                            .replace(/\+-/g, "\xb1")
                            .replace(/\.{2,}/g, "…")
                            .replace(/([?!])…/g, "$1..")
                            .replace(/([?!]){4,}/g, "$1$1$1")
                            .replace(/,{2,}/g, ",")
                            .replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—")
                            .replace(/(^|\s)--(?=\s|$)/gm, "$1–")
                            .replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–")),
                          "link_open" === r.type && "auto" === r.info && e--,
                          "link_close" === r.type && "auto" === r.info && e++;
                      }
                    })(t.tokens[e].children));
          },
        ],
        [
          "smartquotes",
          function (t) {
            if (t.md.options.typographer)
              for (let e = t.tokens.length - 1; e >= 0; e--)
                "inline" === t.tokens[e].type &&
                  tN.test(t.tokens[e].content) &&
                  (function (t, e) {
                    let n;
                    let r = [];
                    for (let i = 0; i < t.length; i++) {
                      let s = t[i],
                        o = t[i].level;
                      for (n = r.length - 1; n >= 0 && !(r[n].level <= o); n--);
                      if (((r.length = n + 1), "text" !== s.type)) continue;
                      let l = s.content,
                        a = 0,
                        u = l.length;
                      t: for (; a < u; ) {
                        tq.lastIndex = a;
                        let h = tq.exec(l);
                        if (!h) break;
                        let c = !0,
                          p = !0;
                        a = h.index + 1;
                        let d = "'" === h[0],
                          f = 32;
                        if (h.index - 1 >= 0) f = l.charCodeAt(h.index - 1);
                        else
                          for (
                            n = i - 1;
                            n >= 0 &&
                            "softbreak" !== t[n].type &&
                            "hardbreak" !== t[n].type;
                            n--
                          )
                            if (t[n].content) {
                              f = t[n].content.charCodeAt(
                                t[n].content.length - 1
                              );
                              break;
                            }
                        let m = 32;
                        if (a < u) m = l.charCodeAt(a);
                        else
                          for (
                            n = i + 1;
                            n < t.length &&
                            "softbreak" !== t[n].type &&
                            "hardbreak" !== t[n].type;
                            n++
                          )
                            if (t[n].content) {
                              m = t[n].content.charCodeAt(0);
                              break;
                            }
                        let g = tx(f) || ty(String.fromCharCode(f)),
                          k = tx(m) || ty(String.fromCharCode(m)),
                          y = tk(f),
                          x = tk(m);
                        if (
                          (x ? (c = !1) : k && !(y || g) && (c = !1),
                          y ? (p = !1) : g && !(x || k) && (p = !1),
                          34 === m &&
                            '"' === h[0] &&
                            f >= 48 &&
                            f <= 57 &&
                            (p = c = !1),
                          c && p && ((c = g), (p = k)),
                          !c && !p)
                        ) {
                          d && (s.content = tL(s.content, h.index, "’"));
                          continue;
                        }
                        if (p)
                          for (n = r.length - 1; n >= 0; n--) {
                            let c = r[n];
                            if (r[n].level < o) break;
                            if (c.single === d && r[n].level === o) {
                              let o, p;
                              (c = r[n]),
                                d
                                  ? ((o = e.md.options.quotes[2]),
                                    (p = e.md.options.quotes[3]))
                                  : ((o = e.md.options.quotes[0]),
                                    (p = e.md.options.quotes[1])),
                                (s.content = tL(s.content, h.index, p)),
                                (t[c.token].content = tL(
                                  t[c.token].content,
                                  c.pos,
                                  o
                                )),
                                (a += p.length - 1),
                                c.token === i && (a += o.length - 1),
                                (u = (l = s.content).length),
                                (r.length = n);
                              continue t;
                            }
                          }
                        c
                          ? r.push({
                              token: i,
                              pos: h.index,
                              single: d,
                              level: o,
                            })
                          : p && d && (s.content = tL(s.content, h.index, "’"));
                      }
                    }
                  })(t.tokens[e].children, t);
          },
        ],
        [
          "text_join",
          function (t) {
            let e, n;
            let r = t.tokens,
              i = r.length;
            for (let t = 0; t < i; t++) {
              if ("inline" !== r[t].type) continue;
              let i = r[t].children,
                s = i.length;
              for (e = 0; e < s; e++)
                "text_special" === i[e].type && (i[e].type = "text");
              for (e = n = 0; e < s; e++)
                "text" === i[e].type && e + 1 < s && "text" === i[e + 1].type
                  ? (i[e + 1].content = i[e].content + i[e + 1].content)
                  : (e !== n && (i[n] = i[e]), n++);
              e !== n && (i.length = n);
            }
          },
        ],
      ];
      function tj() {
        this.ruler = new tE();
        for (let t = 0; t < t$.length; t++) this.ruler.push(t$[t][0], t$[t][1]);
      }
      function tP(t, e, n, r) {
        (this.src = t),
          (this.md = e),
          (this.env = n),
          (this.tokens = r),
          (this.bMarks = []),
          (this.eMarks = []),
          (this.tShift = []),
          (this.sCount = []),
          (this.bsCount = []),
          (this.blkIndent = 0),
          (this.line = 0),
          (this.lineMax = 0),
          (this.tight = !1),
          (this.ddIndent = -1),
          (this.listIndent = -1),
          (this.parentType = "root"),
          (this.level = 0);
        let i = this.src;
        for (let t = 0, e = 0, n = 0, r = 0, s = i.length, o = !1; e < s; e++) {
          let l = i.charCodeAt(e);
          if (!o) {
            if (tg(l)) {
              n++, 9 === l ? (r += 4 - (r % 4)) : r++;
              continue;
            }
            o = !0;
          }
          (10 === l || e === s - 1) &&
            (10 !== l && e++,
            this.bMarks.push(t),
            this.eMarks.push(e),
            this.tShift.push(n),
            this.sCount.push(r),
            this.bsCount.push(0),
            (o = !1),
            (n = 0),
            (r = 0),
            (t = e + 1));
        }
        this.bMarks.push(i.length),
          this.eMarks.push(i.length),
          this.tShift.push(0),
          this.sCount.push(0),
          this.bsCount.push(0),
          (this.lineMax = this.bMarks.length - 1);
      }
      function tJ(t, e) {
        let n = t.bMarks[e] + t.tShift[e],
          r = t.eMarks[e];
        return t.src.slice(n, r);
      }
      function tH(t) {
        let e = [],
          n = t.length,
          r = 0,
          i = t.charCodeAt(r),
          s = !1,
          o = 0,
          l = "";
        for (; r < n; )
          124 === i &&
            (s
              ? ((l += t.substring(o, r - 1)), (o = r))
              : (e.push(l + t.substring(o, r)), (l = ""), (o = r + 1))),
            (s = 92 === i),
            r++,
            (i = t.charCodeAt(r));
        return e.push(l + t.substring(o)), e;
      }
      function tW(t, e) {
        let n = t.eMarks[e],
          r = t.bMarks[e] + t.tShift[e],
          i = t.src.charCodeAt(r++);
        return (42 !== i && 45 !== i && 43 !== i) ||
          (r < n && !tg(t.src.charCodeAt(r)))
          ? -1
          : r;
      }
      function tV(t, e) {
        let n = t.bMarks[e] + t.tShift[e],
          r = t.eMarks[e],
          i = n;
        if (i + 1 >= r) return -1;
        let s = t.src.charCodeAt(i++);
        if (s < 48 || s > 57) return -1;
        for (;;) {
          if (i >= r) return -1;
          if ((s = t.src.charCodeAt(i++)) >= 48 && s <= 57) {
            if (i - n >= 10) return -1;
            continue;
          }
          if (41 === s || 46 === s) break;
          return -1;
        }
        return i < r && !tg((s = t.src.charCodeAt(i))) ? -1 : i;
      }
      (tj.prototype.process = function (t) {
        let e = this.ruler.getRules("");
        for (let n = 0, r = e.length; n < r; n++) e[n](t);
      }),
        (tj.prototype.State = tF),
        (tP.prototype.push = function (t, e, n) {
          let r = new tS(t, e, n);
          return (
            (r.block = !0),
            n < 0 && this.level--,
            (r.level = this.level),
            n > 0 && this.level++,
            this.tokens.push(r),
            r
          );
        }),
        (tP.prototype.isEmpty = function (t) {
          return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
        }),
        (tP.prototype.skipEmptyLines = function (t) {
          for (
            let e = this.lineMax;
            t < e && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]);
            t++
          );
          return t;
        }),
        (tP.prototype.skipSpaces = function (t) {
          for (
            let e = this.src.length;
            t < e && tg(this.src.charCodeAt(t));
            t++
          );
          return t;
        }),
        (tP.prototype.skipSpacesBack = function (t, e) {
          if (t <= e) return t;
          for (; t > e; ) if (!tg(this.src.charCodeAt(--t))) return t + 1;
          return t;
        }),
        (tP.prototype.skipChars = function (t, e) {
          for (
            let n = this.src.length;
            t < n && this.src.charCodeAt(t) === e;
            t++
          );
          return t;
        }),
        (tP.prototype.skipCharsBack = function (t, e, n) {
          if (t <= n) return t;
          for (; t > n; ) if (e !== this.src.charCodeAt(--t)) return t + 1;
          return t;
        }),
        (tP.prototype.getLines = function (t, e, n, r) {
          if (t >= e) return "";
          let i = Array(e - t);
          for (let s = 0, o = t; o < e; o++, s++) {
            let t,
              l = 0,
              a = this.bMarks[o],
              u = a;
            for (
              t = o + 1 < e || r ? this.eMarks[o] + 1 : this.eMarks[o];
              u < t && l < n;
            ) {
              let t = this.src.charCodeAt(u);
              if (tg(t)) 9 === t ? (l += 4 - ((l + this.bsCount[o]) % 4)) : l++;
              else if (u - a < this.tShift[o]) l++;
              else break;
              u++;
            }
            l > n
              ? (i[s] = Array(l - n + 1).join(" ") + this.src.slice(u, t))
              : (i[s] = this.src.slice(u, t));
          }
          return i.join("");
        }),
        (tP.prototype.Token = tS);
      let tZ =
          "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
        tU = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
        tY = RegExp(
          "^(?:" +
            tZ +
            "|" +
            tU +
            "|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"
        ),
        tG = RegExp("^(?:" + tZ + "|" + tU + ")"),
        tK = [
          [
            /^<(script|pre|style|textarea)(?=(\s|>|$))/i,
            /<\/(script|pre|style|textarea)>/i,
            !0,
          ],
          [/^<!--/, /-->/, !0],
          [/^<\?/, /\?>/, !0],
          [/^<![A-Z]/, />/, !0],
          [/^<!\[CDATA\[/, /\]\]>/, !0],
          [
            RegExp(
              "^</?(address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?=(\\s|/?>|$))",
              "i"
            ),
            /^$/,
            !0,
          ],
          [RegExp(tG.source + "\\s*$"), /^$/, !1],
        ],
        tX = [
          [
            "table",
            function (t, e, n, r) {
              let i;
              if (e + 2 > n) return !1;
              let s = e + 1;
              if (t.sCount[s] < t.blkIndent || t.sCount[s] - t.blkIndent >= 4)
                return !1;
              let o = t.bMarks[s] + t.tShift[s];
              if (o >= t.eMarks[s]) return !1;
              let l = t.src.charCodeAt(o++);
              if ((124 !== l && 45 !== l && 58 !== l) || o >= t.eMarks[s])
                return !1;
              let a = t.src.charCodeAt(o++);
              if (
                (124 !== a && 45 !== a && 58 !== a && !tg(a)) ||
                (45 === l && tg(a))
              )
                return !1;
              for (; o < t.eMarks[s]; ) {
                let e = t.src.charCodeAt(o);
                if (124 !== e && 45 !== e && 58 !== e && !tg(e)) return !1;
                o++;
              }
              let u = tJ(t, e + 1),
                h = u.split("|"),
                c = [];
              for (let t = 0; t < h.length; t++) {
                let e = h[t].trim();
                if (!e) {
                  if (0 === t || t === h.length - 1) continue;
                  return !1;
                }
                if (!/^:?-+:?$/.test(e)) return !1;
                58 === e.charCodeAt(e.length - 1)
                  ? c.push(58 === e.charCodeAt(0) ? "center" : "right")
                  : 58 === e.charCodeAt(0)
                    ? c.push("left")
                    : c.push("");
              }
              if (
                -1 === (u = tJ(t, e).trim()).indexOf("|") ||
                t.sCount[e] - t.blkIndent >= 4
              )
                return !1;
              (h = tH(u)).length && "" === h[0] && h.shift(),
                h.length && "" === h[h.length - 1] && h.pop();
              let p = h.length;
              if (0 === p || p !== c.length) return !1;
              if (r) return !0;
              let d = t.parentType;
              t.parentType = "table";
              let f = t.md.block.ruler.getRules("blockquote"),
                m = t.push("table_open", "table", 1),
                g = [e, 0];
              (m.map = g),
                (t.push("thead_open", "thead", 1).map = [e, e + 1]),
                (t.push("tr_open", "tr", 1).map = [e, e + 1]);
              for (let e = 0; e < h.length; e++) {
                let n = t.push("th_open", "th", 1);
                c[e] && (n.attrs = [["style", "text-align:" + c[e]]]);
                let r = t.push("inline", "", 0);
                (r.content = h[e].trim()),
                  (r.children = []),
                  t.push("th_close", "th", -1);
              }
              t.push("tr_close", "tr", -1), t.push("thead_close", "thead", -1);
              let k = 0;
              for (s = e + 2; s < n && !(t.sCount[s] < t.blkIndent); s++) {
                let r = !1;
                for (let e = 0, i = f.length; e < i; e++)
                  if (f[e](t, s, n, !0)) {
                    r = !0;
                    break;
                  }
                if (
                  r ||
                  !(u = tJ(t, s).trim()) ||
                  t.sCount[s] - t.blkIndent >= 4 ||
                  ((h = tH(u)).length && "" === h[0] && h.shift(),
                  h.length && "" === h[h.length - 1] && h.pop(),
                  (k += p - h.length) > 65536)
                )
                  break;
                s === e + 2 &&
                  (t.push("tbody_open", "tbody", 1).map = i = [e + 2, 0]),
                  (t.push("tr_open", "tr", 1).map = [s, s + 1]);
                for (let e = 0; e < p; e++) {
                  let n = t.push("td_open", "td", 1);
                  c[e] && (n.attrs = [["style", "text-align:" + c[e]]]);
                  let r = t.push("inline", "", 0);
                  (r.content = h[e] ? h[e].trim() : ""),
                    (r.children = []),
                    t.push("td_close", "td", -1);
                }
                t.push("tr_close", "tr", -1);
              }
              return (
                i && (t.push("tbody_close", "tbody", -1), (i[1] = s)),
                t.push("table_close", "table", -1),
                (g[1] = s),
                (t.parentType = d),
                (t.line = s),
                !0
              );
            },
            ["paragraph", "reference"],
          ],
          [
            "code",
            function (t, e, n) {
              if (t.sCount[e] - t.blkIndent < 4) return !1;
              let r = e + 1,
                i = r;
              for (; r < n; ) {
                if (t.isEmpty(r)) {
                  r++;
                  continue;
                }
                if (t.sCount[r] - t.blkIndent >= 4) {
                  i = ++r;
                  continue;
                }
                break;
              }
              t.line = i;
              let s = t.push("code_block", "code", 0);
              return (
                (s.content = t.getLines(e, i, 4 + t.blkIndent, !1) + "\n"),
                (s.map = [e, t.line]),
                !0
              );
            },
          ],
          [
            "fence",
            function (t, e, n, r) {
              let i = t.bMarks[e] + t.tShift[e],
                s = t.eMarks[e];
              if (t.sCount[e] - t.blkIndent >= 4 || i + 3 > s) return !1;
              let o = t.src.charCodeAt(i);
              if (126 !== o && 96 !== o) return !1;
              let l = i,
                a = (i = t.skipChars(i, o)) - l;
              if (a < 3) return !1;
              let u = t.src.slice(l, i),
                h = t.src.slice(i, s);
              if (96 === o && h.indexOf(String.fromCharCode(o)) >= 0) return !1;
              if (r) return !0;
              let c = e,
                p = !1;
              for (
                ;
                !(++c >= n) &&
                (!((i = l = t.bMarks[c] + t.tShift[c]) < (s = t.eMarks[c])) ||
                  !(t.sCount[c] < t.blkIndent));
              )
                if (
                  !(
                    t.src.charCodeAt(i) !== o ||
                    t.sCount[c] - t.blkIndent >= 4 ||
                    (i = t.skipChars(i, o)) - l < a ||
                    (i = t.skipSpaces(i)) < s
                  )
                ) {
                  p = !0;
                  break;
                }
              (a = t.sCount[e]), (t.line = c + (p ? 1 : 0));
              let d = t.push("fence", "code", 0);
              return (
                (d.info = h),
                (d.content = t.getLines(e + 1, c, a, !0)),
                (d.markup = u),
                (d.map = [e, t.line]),
                !0
              );
            },
            ["paragraph", "reference", "blockquote", "list"],
          ],
          [
            "blockquote",
            function (t, e, n, r) {
              let i,
                s = t.bMarks[e] + t.tShift[e],
                o = t.eMarks[e],
                l = t.lineMax;
              if (t.sCount[e] - t.blkIndent >= 4 || 62 !== t.src.charCodeAt(s))
                return !1;
              if (r) return !0;
              let a = [],
                u = [],
                h = [],
                c = [],
                p = t.md.block.ruler.getRules("blockquote"),
                d = t.parentType;
              t.parentType = "blockquote";
              let f = !1;
              for (i = e; i < n; i++) {
                let e = t.sCount[i] < t.blkIndent;
                if ((s = t.bMarks[i] + t.tShift[i]) >= (o = t.eMarks[i])) break;
                if (62 === t.src.charCodeAt(s++) && !e) {
                  let e,
                    n,
                    r = t.sCount[i] + 1;
                  32 === t.src.charCodeAt(s)
                    ? (s++, r++, (n = !1), (e = !0))
                    : 9 === t.src.charCodeAt(s)
                      ? ((e = !0),
                        (t.bsCount[i] + r) % 4 == 3
                          ? (s++, r++, (n = !1))
                          : (n = !0))
                      : (e = !1);
                  let l = r;
                  for (a.push(t.bMarks[i]), t.bMarks[i] = s; s < o; ) {
                    let e = t.src.charCodeAt(s);
                    if (tg(e))
                      9 === e
                        ? (l += 4 - ((l + t.bsCount[i] + (n ? 1 : 0)) % 4))
                        : l++;
                    else break;
                    s++;
                  }
                  (f = s >= o),
                    u.push(t.bsCount[i]),
                    (t.bsCount[i] = t.sCount[i] + 1 + (e ? 1 : 0)),
                    h.push(t.sCount[i]),
                    (t.sCount[i] = l - r),
                    c.push(t.tShift[i]),
                    (t.tShift[i] = s - t.bMarks[i]);
                  continue;
                }
                if (f) break;
                let r = !1;
                for (let e = 0, s = p.length; e < s; e++)
                  if (p[e](t, i, n, !0)) {
                    r = !0;
                    break;
                  }
                if (r) {
                  (t.lineMax = i),
                    0 !== t.blkIndent &&
                      (a.push(t.bMarks[i]),
                      u.push(t.bsCount[i]),
                      c.push(t.tShift[i]),
                      h.push(t.sCount[i]),
                      (t.sCount[i] -= t.blkIndent));
                  break;
                }
                a.push(t.bMarks[i]),
                  u.push(t.bsCount[i]),
                  c.push(t.tShift[i]),
                  h.push(t.sCount[i]),
                  (t.sCount[i] = -1);
              }
              let m = t.blkIndent;
              t.blkIndent = 0;
              let g = t.push("blockquote_open", "blockquote", 1);
              g.markup = ">";
              let k = [e, 0];
              (g.map = k),
                t.md.block.tokenize(t, e, i),
                (t.push("blockquote_close", "blockquote", -1).markup = ">"),
                (t.lineMax = l),
                (t.parentType = d),
                (k[1] = t.line);
              for (let n = 0; n < c.length; n++)
                (t.bMarks[n + e] = a[n]),
                  (t.tShift[n + e] = c[n]),
                  (t.sCount[n + e] = h[n]),
                  (t.bsCount[n + e] = u[n]);
              return (t.blkIndent = m), !0;
            },
            ["paragraph", "reference", "blockquote", "list"],
          ],
          [
            "hr",
            function (t, e, n, r) {
              let i = t.eMarks[e];
              if (t.sCount[e] - t.blkIndent >= 4) return !1;
              let s = t.bMarks[e] + t.tShift[e],
                o = t.src.charCodeAt(s++);
              if (42 !== o && 45 !== o && 95 !== o) return !1;
              let l = 1;
              for (; s < i; ) {
                let e = t.src.charCodeAt(s++);
                if (e !== o && !tg(e)) return !1;
                e === o && l++;
              }
              if (l < 3) return !1;
              if (r) return !0;
              t.line = e + 1;
              let a = t.push("hr", "hr", 0);
              return (
                (a.map = [e, t.line]),
                (a.markup = Array(l + 1).join(String.fromCharCode(o))),
                !0
              );
            },
            ["paragraph", "reference", "blockquote", "list"],
          ],
          [
            "list",
            function (t, e, n, r) {
              let i, s, o, l, a, u, h;
              let c = e,
                p = !0;
              if (
                t.sCount[c] - t.blkIndent >= 4 ||
                (t.listIndent >= 0 &&
                  t.sCount[c] - t.listIndent >= 4 &&
                  t.sCount[c] < t.blkIndent)
              )
                return !1;
              let d = !1;
              if (
                (r &&
                  "paragraph" === t.parentType &&
                  t.sCount[c] >= t.blkIndent &&
                  (d = !0),
                (h = tV(t, c)) >= 0)
              ) {
                if (
                  ((a = !0),
                  (o = t.bMarks[c] + t.tShift[c]),
                  (u = Number(t.src.slice(o, h - 1))),
                  d && 1 !== u)
                )
                  return !1;
              } else {
                if (!((h = tW(t, c)) >= 0)) return !1;
                a = !1;
              }
              if (d && t.skipSpaces(h) >= t.eMarks[c]) return !1;
              if (r) return !0;
              let f = t.src.charCodeAt(h - 1),
                m = t.tokens.length;
              a
                ? ((l = t.push("ordered_list_open", "ol", 1)),
                  1 !== u && (l.attrs = [["start", u]]))
                : (l = t.push("bullet_list_open", "ul", 1));
              let g = [c, 0];
              (l.map = g), (l.markup = String.fromCharCode(f));
              let k = !1,
                y = t.md.block.ruler.getRules("list"),
                x = t.parentType;
              for (t.parentType = "list"; c < n; ) {
                let e;
                (s = h), (i = t.eMarks[c]);
                let r = t.sCount[c] + h - (t.bMarks[c] + t.tShift[c]),
                  u = r;
                for (; s < i; ) {
                  let e = t.src.charCodeAt(s);
                  if (9 === e) u += 4 - ((u + t.bsCount[c]) % 4);
                  else if (32 === e) u++;
                  else break;
                  s++;
                }
                let d = s;
                (e = d >= i ? 1 : u - r) > 4 && (e = 1);
                let m = r + e;
                (l = t.push("list_item_open", "li", 1)).markup =
                  String.fromCharCode(f);
                let g = [c, 0];
                (l.map = g), a && (l.info = t.src.slice(o, h - 1));
                let x = t.tight,
                  _ = t.tShift[c],
                  C = t.sCount[c],
                  b = t.listIndent;
                if (
                  ((t.listIndent = t.blkIndent),
                  (t.blkIndent = m),
                  (t.tight = !0),
                  (t.tShift[c] = d - t.bMarks[c]),
                  (t.sCount[c] = u),
                  d >= i && t.isEmpty(c + 1)
                    ? (t.line = Math.min(t.line + 2, n))
                    : t.md.block.tokenize(t, c, n, !0),
                  (!t.tight || k) && (p = !1),
                  (k = t.line - c > 1 && t.isEmpty(t.line - 1)),
                  (t.blkIndent = t.listIndent),
                  (t.listIndent = b),
                  (t.tShift[c] = _),
                  (t.sCount[c] = C),
                  (t.tight = x),
                  ((l = t.push("list_item_close", "li", -1)).markup =
                    String.fromCharCode(f)),
                  (c = t.line),
                  (g[1] = c),
                  c >= n ||
                    t.sCount[c] < t.blkIndent ||
                    t.sCount[c] - t.blkIndent >= 4)
                )
                  break;
                let w = !1;
                for (let e = 0, r = y.length; e < r; e++)
                  if (y[e](t, c, n, !0)) {
                    w = !0;
                    break;
                  }
                if (w) break;
                if (a) {
                  if ((h = tV(t, c)) < 0) break;
                  o = t.bMarks[c] + t.tShift[c];
                } else if ((h = tW(t, c)) < 0) break;
                if (f !== t.src.charCodeAt(h - 1)) break;
              }
              return (
                ((l = a
                  ? t.push("ordered_list_close", "ol", -1)
                  : t.push("bullet_list_close", "ul", -1)).markup =
                  String.fromCharCode(f)),
                (g[1] = c),
                (t.line = c),
                (t.parentType = x),
                p &&
                  (function (t, e) {
                    let n = t.level + 2;
                    for (let r = e + 2, i = t.tokens.length - 2; r < i; r++)
                      t.tokens[r].level === n &&
                        "paragraph_open" === t.tokens[r].type &&
                        ((t.tokens[r + 2].hidden = !0),
                        (t.tokens[r].hidden = !0),
                        (r += 2));
                  })(t, m),
                !0
              );
            },
            ["paragraph", "reference", "blockquote"],
          ],
          [
            "reference",
            function (t, e, n, r) {
              let i,
                s = t.bMarks[e] + t.tShift[e],
                o = t.eMarks[e],
                l = e + 1;
              if (t.sCount[e] - t.blkIndent >= 4 || 91 !== t.src.charCodeAt(s))
                return !1;
              function a(e) {
                let n = t.lineMax;
                if (e >= n || t.isEmpty(e)) return null;
                let r = !1;
                if (
                  (t.sCount[e] - t.blkIndent > 3 && (r = !0),
                  t.sCount[e] < 0 && (r = !0),
                  !r)
                ) {
                  let r = t.md.block.ruler.getRules("reference"),
                    i = t.parentType;
                  t.parentType = "reference";
                  let s = !1;
                  for (let i = 0, o = r.length; i < o; i++)
                    if (r[i](t, e, n, !0)) {
                      s = !0;
                      break;
                    }
                  if (((t.parentType = i), s)) return null;
                }
                let i = t.bMarks[e] + t.tShift[e],
                  s = t.eMarks[e];
                return t.src.slice(i, s + 1);
              }
              let u = t.src.slice(s, o + 1);
              o = u.length;
              let h = -1;
              for (s = 1; s < o; s++) {
                let t = u.charCodeAt(s);
                if (91 === t) return !1;
                if (93 === t) {
                  h = s;
                  break;
                }
                if (10 === t) {
                  let t = a(l);
                  null !== t && ((u += t), (o = u.length), l++);
                } else if (92 === t && ++s < o && 10 === u.charCodeAt(s)) {
                  let t = a(l);
                  null !== t && ((u += t), (o = u.length), l++);
                }
              }
              if (h < 0 || 58 !== u.charCodeAt(h + 1)) return !1;
              for (s = h + 2; s < o; s++) {
                let t = u.charCodeAt(s);
                if (10 === t) {
                  let t = a(l);
                  null !== t && ((u += t), (o = u.length), l++);
                } else if (tg(t));
                else break;
              }
              let c = t.md.helpers.parseLinkDestination(u, s, o);
              if (!c.ok) return !1;
              let p = t.md.normalizeLink(c.str);
              if (!t.md.validateLink(p)) return !1;
              let d = (s = c.pos),
                f = l,
                m = s;
              for (; s < o; s++) {
                let t = u.charCodeAt(s);
                if (10 === t) {
                  let t = a(l);
                  null !== t && ((u += t), (o = u.length), l++);
                } else if (tg(t));
                else break;
              }
              let g = t.md.helpers.parseLinkTitle(u, s, o);
              for (; g.can_continue; ) {
                let e = a(l);
                if (null === e) break;
                (u += e),
                  (s = o),
                  (o = u.length),
                  l++,
                  (g = t.md.helpers.parseLinkTitle(u, s, o, g));
              }
              for (
                s < o && m !== s && g.ok
                  ? ((i = g.str), (s = g.pos))
                  : ((i = ""), (s = d), (l = f));
                s < o && tg(u.charCodeAt(s));
              )
                s++;
              if (s < o && 10 !== u.charCodeAt(s) && i)
                for (i = "", s = d, l = f; s < o && tg(u.charCodeAt(s)); ) s++;
              if (s < o && 10 !== u.charCodeAt(s)) return !1;
              let k = t_(u.slice(1, h));
              return (
                !!k &&
                (!!r ||
                  (void 0 === t.env.references && (t.env.references = {}),
                  void 0 === t.env.references[k] &&
                    (t.env.references[k] = { title: i, href: p }),
                  (t.line = l),
                  !0))
              );
            },
          ],
          [
            "html_block",
            function (t, e, n, r) {
              let i = t.bMarks[e] + t.tShift[e],
                s = t.eMarks[e];
              if (
                t.sCount[e] - t.blkIndent >= 4 ||
                !t.md.options.html ||
                60 !== t.src.charCodeAt(i)
              )
                return !1;
              let o = t.src.slice(i, s),
                l = 0;
              for (; l < tK.length && !tK[l][0].test(o); l++);
              if (l === tK.length) return !1;
              if (r) return tK[l][2];
              let a = e + 1;
              if (!tK[l][1].test(o)) {
                for (; a < n && !(t.sCount[a] < t.blkIndent); a++)
                  if (
                    ((i = t.bMarks[a] + t.tShift[a]),
                    (s = t.eMarks[a]),
                    (o = t.src.slice(i, s)),
                    tK[l][1].test(o))
                  ) {
                    0 !== o.length && a++;
                    break;
                  }
              }
              t.line = a;
              let u = t.push("html_block", "", 0);
              return (
                (u.map = [e, a]),
                (u.content = t.getLines(e, a, t.blkIndent, !0)),
                !0
              );
            },
            ["paragraph", "reference", "blockquote"],
          ],
          [
            "heading",
            function (t, e, n, r) {
              let i = t.bMarks[e] + t.tShift[e],
                s = t.eMarks[e];
              if (t.sCount[e] - t.blkIndent >= 4) return !1;
              let o = t.src.charCodeAt(i);
              if (35 !== o || i >= s) return !1;
              let l = 1;
              for (o = t.src.charCodeAt(++i); 35 === o && i < s && l <= 6; )
                l++, (o = t.src.charCodeAt(++i));
              if (l > 6 || (i < s && !tg(o))) return !1;
              if (r) return !0;
              s = t.skipSpacesBack(s, i);
              let a = t.skipCharsBack(s, 35, i);
              a > i && tg(t.src.charCodeAt(a - 1)) && (s = a), (t.line = e + 1);
              let u = t.push("heading_open", "h" + String(l), 1);
              (u.markup = "########".slice(0, l)), (u.map = [e, t.line]);
              let h = t.push("inline", "", 0);
              return (
                (h.content = t.src.slice(i, s).trim()),
                (h.map = [e, t.line]),
                (h.children = []),
                (t.push("heading_close", "h" + String(l), -1).markup =
                  "########".slice(0, l)),
                !0
              );
            },
            ["paragraph", "reference", "blockquote"],
          ],
          [
            "lheading",
            function (t, e, n) {
              let r;
              let i = t.md.block.ruler.getRules("paragraph");
              if (t.sCount[e] - t.blkIndent >= 4) return !1;
              let s = t.parentType;
              t.parentType = "paragraph";
              let o = 0,
                l = e + 1;
              for (; l < n && !t.isEmpty(l); l++) {
                if (t.sCount[l] - t.blkIndent > 3) continue;
                if (t.sCount[l] >= t.blkIndent) {
                  let e = t.bMarks[l] + t.tShift[l],
                    n = t.eMarks[l];
                  if (
                    e < n &&
                    (45 === (r = t.src.charCodeAt(e)) || 61 === r) &&
                    ((e = t.skipChars(e, r)), (e = t.skipSpaces(e)) >= n)
                  ) {
                    o = 61 === r ? 1 : 2;
                    break;
                  }
                }
                if (t.sCount[l] < 0) continue;
                let e = !1;
                for (let r = 0, s = i.length; r < s; r++)
                  if (i[r](t, l, n, !0)) {
                    e = !0;
                    break;
                  }
                if (e) break;
              }
              if (!o) return !1;
              let a = t.getLines(e, l, t.blkIndent, !1).trim();
              t.line = l + 1;
              let u = t.push("heading_open", "h" + String(o), 1);
              (u.markup = String.fromCharCode(r)), (u.map = [e, t.line]);
              let h = t.push("inline", "", 0);
              return (
                (h.content = a),
                (h.map = [e, t.line - 1]),
                (h.children = []),
                (t.push("heading_close", "h" + String(o), -1).markup =
                  String.fromCharCode(r)),
                (t.parentType = s),
                !0
              );
            },
          ],
          [
            "paragraph",
            function (t, e, n) {
              let r = t.md.block.ruler.getRules("paragraph"),
                i = t.parentType,
                s = e + 1;
              for (t.parentType = "paragraph"; s < n && !t.isEmpty(s); s++) {
                if (t.sCount[s] - t.blkIndent > 3 || t.sCount[s] < 0) continue;
                let e = !1;
                for (let i = 0, o = r.length; i < o; i++)
                  if (r[i](t, s, n, !0)) {
                    e = !0;
                    break;
                  }
                if (e) break;
              }
              let o = t.getLines(e, s, t.blkIndent, !1).trim();
              (t.line = s),
                (t.push("paragraph_open", "p", 1).map = [e, t.line]);
              let l = t.push("inline", "", 0);
              return (
                (l.content = o),
                (l.map = [e, t.line]),
                (l.children = []),
                t.push("paragraph_close", "p", -1),
                (t.parentType = i),
                !0
              );
            },
          ],
        ];
      function tQ() {
        this.ruler = new tE();
        for (let t = 0; t < tX.length; t++)
          this.ruler.push(tX[t][0], tX[t][1], {
            alt: (tX[t][2] || []).slice(),
          });
      }
      function t0(t, e, n, r) {
        (this.src = t),
          (this.env = n),
          (this.md = e),
          (this.tokens = r),
          (this.tokens_meta = Array(r.length)),
          (this.pos = 0),
          (this.posMax = this.src.length),
          (this.level = 0),
          (this.pending = ""),
          (this.pendingLevel = 0),
          (this.cache = {}),
          (this.delimiters = []),
          (this._prev_delimiters = []),
          (this.backticks = {}),
          (this.backticksScanned = !1),
          (this.linkLevel = 0);
      }
      (tQ.prototype.tokenize = function (t, e, n) {
        let r = this.ruler.getRules(""),
          i = r.length,
          s = t.md.options.maxNesting,
          o = e,
          l = !1;
        for (
          ;
          o < n &&
          ((t.line = o = t.skipEmptyLines(o)),
          !(o >= n) && !(t.sCount[o] < t.blkIndent));
        ) {
          if (t.level >= s) {
            t.line = n;
            break;
          }
          let e = t.line,
            a = !1;
          for (let s = 0; s < i; s++)
            if ((a = r[s](t, o, n, !1))) {
              if (e >= t.line)
                throw Error("block rule didn't increment state.line");
              break;
            }
          if (!a) throw Error("none of the block rules matched");
          (t.tight = !l),
            t.isEmpty(t.line - 1) && (l = !0),
            (o = t.line) < n && t.isEmpty(o) && ((l = !0), o++, (t.line = o));
        }
      }),
        (tQ.prototype.parse = function (t, e, n, r) {
          if (!t) return;
          let i = new this.State(t, e, n, r);
          this.tokenize(i, i.line, i.lineMax);
        }),
        (tQ.prototype.State = tP),
        (t0.prototype.pushPending = function () {
          let t = new tS("text", "", 0);
          return (
            (t.content = this.pending),
            (t.level = this.pendingLevel),
            this.tokens.push(t),
            (this.pending = ""),
            t
          );
        }),
        (t0.prototype.push = function (t, e, n) {
          this.pending && this.pushPending();
          let r = new tS(t, e, n),
            i = null;
          return (
            n < 0 &&
              (this.level--, (this.delimiters = this._prev_delimiters.pop())),
            (r.level = this.level),
            n > 0 &&
              (this.level++,
              this._prev_delimiters.push(this.delimiters),
              (this.delimiters = []),
              (i = { delimiters: this.delimiters })),
            (this.pendingLevel = this.level),
            this.tokens.push(r),
            this.tokens_meta.push(i),
            r
          );
        }),
        (t0.prototype.scanDelims = function (t, e) {
          let n = this.posMax,
            r = this.src.charCodeAt(t),
            i = t > 0 ? this.src.charCodeAt(t - 1) : 32,
            s = t;
          for (; s < n && this.src.charCodeAt(s) === r; ) s++;
          let o = s - t,
            l = s < n ? this.src.charCodeAt(s) : 32,
            a = tx(i) || ty(String.fromCharCode(i)),
            u = tx(l) || ty(String.fromCharCode(l)),
            h = tk(i),
            c = tk(l),
            p = !c && (!u || h || a),
            d = !h && (!a || c || u);
          return {
            can_open: p && (e || !d || a),
            can_close: d && (e || !p || u),
            length: o,
          };
        }),
        (t0.prototype.Token = tS);
      let t1 = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i,
        t2 = [];
      for (let t = 0; t < 256; t++) t2.push(0);
      function t3(t, e) {
        let n;
        let r = [],
          i = e.length;
        for (let s = 0; s < i; s++) {
          let i = e[s];
          if (126 !== i.marker || -1 === i.end) continue;
          let o = e[i.end];
          ((n = t.tokens[i.token]).type = "s_open"),
            (n.tag = "s"),
            (n.nesting = 1),
            (n.markup = "~~"),
            (n.content = ""),
            ((n = t.tokens[o.token]).type = "s_close"),
            (n.tag = "s"),
            (n.nesting = -1),
            (n.markup = "~~"),
            (n.content = ""),
            "text" === t.tokens[o.token - 1].type &&
              "~" === t.tokens[o.token - 1].content &&
              r.push(o.token - 1);
        }
        for (; r.length; ) {
          let e = r.pop(),
            i = e + 1;
          for (; i < t.tokens.length && "s_close" === t.tokens[i].type; ) i++;
          e !== --i &&
            ((n = t.tokens[i]), (t.tokens[i] = t.tokens[e]), (t.tokens[e] = n));
        }
      }
      "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (t) {
        t2[t.charCodeAt(0)] = 1;
      });
      var t5 = {
        tokenize: function (t, e) {
          let n = t.pos,
            r = t.src.charCodeAt(n);
          if (e || 126 !== r) return !1;
          let i = t.scanDelims(t.pos, !0),
            s = i.length,
            o = String.fromCharCode(r);
          if (s < 2) return !1;
          s % 2 && ((t.push("text", "", 0).content = o), s--);
          for (let e = 0; e < s; e += 2)
            (t.push("text", "", 0).content = o + o),
              t.delimiters.push({
                marker: r,
                length: 0,
                token: t.tokens.length - 1,
                end: -1,
                open: i.can_open,
                close: i.can_close,
              });
          return (t.pos += i.length), !0;
        },
        postProcess: function (t) {
          let e = t.tokens_meta,
            n = t.tokens_meta.length;
          t3(t, t.delimiters);
          for (let r = 0; r < n; r++)
            e[r] && e[r].delimiters && t3(t, e[r].delimiters);
        },
      };
      function t8(t, e) {
        let n = e.length;
        for (let r = n - 1; r >= 0; r--) {
          let n = e[r];
          if ((95 !== n.marker && 42 !== n.marker) || -1 === n.end) continue;
          let i = e[n.end],
            s =
              r > 0 &&
              e[r - 1].end === n.end + 1 &&
              e[r - 1].marker === n.marker &&
              e[r - 1].token === n.token - 1 &&
              e[n.end + 1].token === i.token + 1,
            o = String.fromCharCode(n.marker),
            l = t.tokens[n.token];
          (l.type = s ? "strong_open" : "em_open"),
            (l.tag = s ? "strong" : "em"),
            (l.nesting = 1),
            (l.markup = s ? o + o : o),
            (l.content = "");
          let a = t.tokens[i.token];
          (a.type = s ? "strong_close" : "em_close"),
            (a.tag = s ? "strong" : "em"),
            (a.nesting = -1),
            (a.markup = s ? o + o : o),
            (a.content = ""),
            s &&
              ((t.tokens[e[r - 1].token].content = ""),
              (t.tokens[e[n.end + 1].token].content = ""),
              r--);
        }
      }
      var t6 = {
        tokenize: function (t, e) {
          let n = t.pos,
            r = t.src.charCodeAt(n);
          if (e || (95 !== r && 42 !== r)) return !1;
          let i = t.scanDelims(t.pos, 42 === r);
          for (let e = 0; e < i.length; e++)
            (t.push("text", "", 0).content = String.fromCharCode(r)),
              t.delimiters.push({
                marker: r,
                length: i.length,
                token: t.tokens.length - 1,
                end: -1,
                open: i.can_open,
                close: i.can_close,
              });
          return (t.pos += i.length), !0;
        },
        postProcess: function (t) {
          let e = t.tokens_meta,
            n = t.tokens_meta.length;
          t8(t, t.delimiters);
          for (let r = 0; r < n; r++)
            e[r] && e[r].delimiters && t8(t, e[r].delimiters);
        },
      };
      let t4 =
          /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
        t9 = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/,
        t7 = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
        et = /^&([a-z][a-z0-9]{1,31});/i;
      function ee(t) {
        let e = {},
          n = t.length;
        if (!n) return;
        let r = 0,
          i = -2,
          s = [];
        for (let o = 0; o < n; o++) {
          let n = t[o];
          if (
            (s.push(0),
            (t[r].marker !== n.marker || i !== n.token - 1) && (r = o),
            (i = n.token),
            (n.length = n.length || 0),
            !n.close)
          )
            continue;
          e.hasOwnProperty(n.marker) ||
            (e[n.marker] = [-1, -1, -1, -1, -1, -1]);
          let l = e[n.marker][(n.open ? 3 : 0) + (n.length % 3)],
            a = r - s[r] - 1,
            u = a;
          for (; a > l; a -= s[a] + 1) {
            let e = t[a];
            if (e.marker === n.marker && e.open && e.end < 0) {
              let r = !1;
              if (
                ((e.close || n.open) &&
                  (e.length + n.length) % 3 == 0 &&
                  (e.length % 3 != 0 || n.length % 3 != 0) &&
                  (r = !0),
                !r)
              ) {
                let r = a > 0 && !t[a - 1].open ? s[a - 1] + 1 : 0;
                (s[o] = o - a + r),
                  (s[a] = r),
                  (n.open = !1),
                  (e.end = o),
                  (e.close = !1),
                  (u = -1),
                  (i = -2);
                break;
              }
            }
          }
          -1 !== u &&
            (e[n.marker][(n.open ? 3 : 0) + ((n.length || 0) % 3)] = u);
        }
      }
      let en = [
          [
            "text",
            function (t, e) {
              let n = t.pos;
              for (
                ;
                n < t.posMax &&
                !(function (t) {
                  switch (t) {
                    case 10:
                    case 33:
                    case 35:
                    case 36:
                    case 37:
                    case 38:
                    case 42:
                    case 43:
                    case 45:
                    case 58:
                    case 60:
                    case 61:
                    case 62:
                    case 64:
                    case 91:
                    case 92:
                    case 93:
                    case 94:
                    case 95:
                    case 96:
                    case 123:
                    case 125:
                    case 126:
                      return !0;
                    default:
                      return !1;
                  }
                })(t.src.charCodeAt(n));
              )
                n++;
              return (
                n !== t.pos &&
                (e || (t.pending += t.src.slice(t.pos, n)), (t.pos = n), !0)
              );
            },
          ],
          [
            "linkify",
            function (t, e) {
              if (!t.md.options.linkify || t.linkLevel > 0) return !1;
              let n = t.pos;
              if (
                n + 3 > t.posMax ||
                58 !== t.src.charCodeAt(n) ||
                47 !== t.src.charCodeAt(n + 1) ||
                47 !== t.src.charCodeAt(n + 2)
              )
                return !1;
              let r = t.pending.match(t1);
              if (!r) return !1;
              let i = r[1],
                s = t.md.linkify.matchAtStart(t.src.slice(n - i.length));
              if (!s) return !1;
              let o = s.url;
              if (o.length <= i.length) return !1;
              o = o.replace(/\*+$/, "");
              let l = t.md.normalizeLink(o);
              if (!t.md.validateLink(l)) return !1;
              if (!e) {
                t.pending = t.pending.slice(0, -i.length);
                let e = t.push("link_open", "a", 1);
                (e.attrs = [["href", l]]),
                  (e.markup = "linkify"),
                  (e.info = "auto"),
                  (t.push("text", "", 0).content = t.md.normalizeLinkText(o));
                let n = t.push("link_close", "a", -1);
                (n.markup = "linkify"), (n.info = "auto");
              }
              return (t.pos += o.length - i.length), !0;
            },
          ],
          [
            "newline",
            function (t, e) {
              let n = t.pos;
              if (10 !== t.src.charCodeAt(n)) return !1;
              let r = t.pending.length - 1,
                i = t.posMax;
              if (!e) {
                if (r >= 0 && 32 === t.pending.charCodeAt(r)) {
                  if (r >= 1 && 32 === t.pending.charCodeAt(r - 1)) {
                    let e = r - 1;
                    for (; e >= 1 && 32 === t.pending.charCodeAt(e - 1); ) e--;
                    (t.pending = t.pending.slice(0, e)),
                      t.push("hardbreak", "br", 0);
                  } else
                    (t.pending = t.pending.slice(0, -1)),
                      t.push("softbreak", "br", 0);
                } else t.push("softbreak", "br", 0);
              }
              for (n++; n < i && tg(t.src.charCodeAt(n)); ) n++;
              return (t.pos = n), !0;
            },
          ],
          [
            "escape",
            function (t, e) {
              let n = t.pos,
                r = t.posMax;
              if (92 !== t.src.charCodeAt(n) || ++n >= r) return !1;
              let i = t.src.charCodeAt(n);
              if (10 === i) {
                for (
                  e || t.push("hardbreak", "br", 0), n++;
                  n < r && tg((i = t.src.charCodeAt(n)));
                )
                  n++;
                return (t.pos = n), !0;
              }
              let s = t.src[n];
              if (i >= 55296 && i <= 56319 && n + 1 < r) {
                let e = t.src.charCodeAt(n + 1);
                e >= 56320 && e <= 57343 && ((s += t.src[n + 1]), n++);
              }
              let o = "\\" + s;
              if (!e) {
                let e = t.push("text_special", "", 0);
                i < 256 && 0 !== t2[i] ? (e.content = s) : (e.content = o),
                  (e.markup = o),
                  (e.info = "escape");
              }
              return (t.pos = n + 1), !0;
            },
          ],
          [
            "backticks",
            function (t, e) {
              let n,
                r = t.pos;
              if (96 !== t.src.charCodeAt(r)) return !1;
              let i = r;
              r++;
              let s = t.posMax;
              for (; r < s && 96 === t.src.charCodeAt(r); ) r++;
              let o = t.src.slice(i, r),
                l = o.length;
              if (t.backticksScanned && (t.backticks[l] || 0) <= i)
                return e || (t.pending += o), (t.pos += l), !0;
              let a = r;
              for (; -1 !== (n = t.src.indexOf("`", a)); ) {
                for (a = n + 1; a < s && 96 === t.src.charCodeAt(a); ) a++;
                let i = a - n;
                if (i === l) {
                  if (!e) {
                    let e = t.push("code_inline", "code", 0);
                    (e.markup = o),
                      (e.content = t.src
                        .slice(r, n)
                        .replace(/\n/g, " ")
                        .replace(/^ (.+) $/, "$1"));
                  }
                  return (t.pos = a), !0;
                }
                t.backticks[i] = n;
              }
              return (
                (t.backticksScanned = !0),
                e || (t.pending += o),
                (t.pos += l),
                !0
              );
            },
          ],
          ["strikethrough", t5.tokenize],
          ["emphasis", t6.tokenize],
          [
            "link",
            function (t, e) {
              let n, r, i, s;
              let o = "",
                l = "",
                a = t.pos,
                u = !0;
              if (91 !== t.src.charCodeAt(t.pos)) return !1;
              let h = t.pos,
                c = t.posMax,
                p = t.pos + 1,
                d = t.md.helpers.parseLinkLabel(t, t.pos, !0);
              if (d < 0) return !1;
              let f = d + 1;
              if (f < c && 40 === t.src.charCodeAt(f)) {
                for (
                  u = !1, f++;
                  f < c && (tg((n = t.src.charCodeAt(f))) || 10 === n);
                  f++
                );
                if (f >= c) return !1;
                if (
                  ((a = f),
                  (i = t.md.helpers.parseLinkDestination(t.src, f, t.posMax))
                    .ok)
                ) {
                  for (
                    o = t.md.normalizeLink(i.str),
                      t.md.validateLink(o) ? (f = i.pos) : (o = ""),
                      a = f;
                    f < c && (tg((n = t.src.charCodeAt(f))) || 10 === n);
                    f++
                  );
                  if (
                    ((i = t.md.helpers.parseLinkTitle(t.src, f, t.posMax)),
                    f < c && a !== f && i.ok)
                  )
                    for (
                      l = i.str, f = i.pos;
                      f < c && (tg((n = t.src.charCodeAt(f))) || 10 === n);
                      f++
                    );
                }
                (f >= c || 41 !== t.src.charCodeAt(f)) && (u = !0), f++;
              }
              if (u) {
                if (void 0 === t.env.references) return !1;
                if (
                  (f < c && 91 === t.src.charCodeAt(f)
                    ? ((a = f + 1),
                      (f = t.md.helpers.parseLinkLabel(t, f)) >= 0
                        ? (r = t.src.slice(a, f++))
                        : (f = d + 1))
                    : (f = d + 1),
                  r || (r = t.src.slice(p, d)),
                  !(s = t.env.references[t_(r)]))
                )
                  return (t.pos = h), !1;
                (o = s.href), (l = s.title);
              }
              if (!e) {
                (t.pos = p), (t.posMax = d);
                let e = t.push("link_open", "a", 1),
                  n = [["href", o]];
                (e.attrs = n),
                  l && n.push(["title", l]),
                  t.linkLevel++,
                  t.md.inline.tokenize(t),
                  t.linkLevel--,
                  t.push("link_close", "a", -1);
              }
              return (t.pos = f), (t.posMax = c), !0;
            },
          ],
          [
            "image",
            function (t, e) {
              let n, r, i, s, o, l, a, u;
              let h = "",
                c = t.pos,
                p = t.posMax;
              if (
                33 !== t.src.charCodeAt(t.pos) ||
                91 !== t.src.charCodeAt(t.pos + 1)
              )
                return !1;
              let d = t.pos + 2,
                f = t.md.helpers.parseLinkLabel(t, t.pos + 1, !1);
              if (f < 0) return !1;
              if ((s = f + 1) < p && 40 === t.src.charCodeAt(s)) {
                for (
                  s++;
                  s < p && (tg((n = t.src.charCodeAt(s))) || 10 === n);
                  s++
                );
                if (s >= p) return !1;
                for (
                  u = s,
                    (l = t.md.helpers.parseLinkDestination(t.src, s, t.posMax))
                      .ok &&
                      ((h = t.md.normalizeLink(l.str)),
                      t.md.validateLink(h) ? (s = l.pos) : (h = "")),
                    u = s;
                  s < p && (tg((n = t.src.charCodeAt(s))) || 10 === n);
                  s++
                );
                if (
                  ((l = t.md.helpers.parseLinkTitle(t.src, s, t.posMax)),
                  s < p && u !== s && l.ok)
                )
                  for (
                    a = l.str, s = l.pos;
                    s < p && (tg((n = t.src.charCodeAt(s))) || 10 === n);
                    s++
                  );
                else a = "";
                if (s >= p || 41 !== t.src.charCodeAt(s))
                  return (t.pos = c), !1;
                s++;
              } else {
                if (void 0 === t.env.references) return !1;
                if (
                  (s < p && 91 === t.src.charCodeAt(s)
                    ? ((u = s + 1),
                      (s = t.md.helpers.parseLinkLabel(t, s)) >= 0
                        ? (i = t.src.slice(u, s++))
                        : (s = f + 1))
                    : (s = f + 1),
                  i || (i = t.src.slice(d, f)),
                  !(o = t.env.references[t_(i)]))
                )
                  return (t.pos = c), !1;
                (h = o.href), (a = o.title);
              }
              if (!e) {
                r = t.src.slice(d, f);
                let e = [];
                t.md.inline.parse(r, t.md, t.env, e);
                let n = t.push("image", "img", 0),
                  i = [
                    ["src", h],
                    ["alt", ""],
                  ];
                (n.attrs = i),
                  (n.children = e),
                  (n.content = r),
                  a && i.push(["title", a]);
              }
              return (t.pos = s), (t.posMax = p), !0;
            },
          ],
          [
            "autolink",
            function (t, e) {
              let n = t.pos;
              if (60 !== t.src.charCodeAt(n)) return !1;
              let r = t.pos,
                i = t.posMax;
              for (;;) {
                if (++n >= i) return !1;
                let e = t.src.charCodeAt(n);
                if (60 === e) return !1;
                if (62 === e) break;
              }
              let s = t.src.slice(r + 1, n);
              if (t9.test(s)) {
                let n = t.md.normalizeLink(s);
                if (!t.md.validateLink(n)) return !1;
                if (!e) {
                  let e = t.push("link_open", "a", 1);
                  (e.attrs = [["href", n]]),
                    (e.markup = "autolink"),
                    (e.info = "auto"),
                    (t.push("text", "", 0).content = t.md.normalizeLinkText(s));
                  let r = t.push("link_close", "a", -1);
                  (r.markup = "autolink"), (r.info = "auto");
                }
                return (t.pos += s.length + 2), !0;
              }
              if (t4.test(s)) {
                let n = t.md.normalizeLink("mailto:" + s);
                if (!t.md.validateLink(n)) return !1;
                if (!e) {
                  let e = t.push("link_open", "a", 1);
                  (e.attrs = [["href", n]]),
                    (e.markup = "autolink"),
                    (e.info = "auto"),
                    (t.push("text", "", 0).content = t.md.normalizeLinkText(s));
                  let r = t.push("link_close", "a", -1);
                  (r.markup = "autolink"), (r.info = "auto");
                }
                return (t.pos += s.length + 2), !0;
              }
              return !1;
            },
          ],
          [
            "html_inline",
            function (t, e) {
              if (!t.md.options.html) return !1;
              let n = t.posMax,
                r = t.pos;
              if (60 !== t.src.charCodeAt(r) || r + 2 >= n) return !1;
              let i = t.src.charCodeAt(r + 1);
              if (
                33 !== i &&
                63 !== i &&
                47 !== i &&
                !(function (t) {
                  let e = 32 | t;
                  return e >= 97 && e <= 122;
                })(i)
              )
                return !1;
              let s = t.src.slice(r).match(tY);
              if (!s) return !1;
              if (!e) {
                var o, l;
                let e = t.push("html_inline", "", 0);
                (e.content = s[0]),
                  (o = e.content),
                  /^<a[>\s]/i.test(o) && t.linkLevel++,
                  (l = e.content),
                  /^<\/a\s*>/i.test(l) && t.linkLevel--;
              }
              return (t.pos += s[0].length), !0;
            },
          ],
          [
            "entity",
            function (t, e) {
              let n = t.pos,
                r = t.posMax;
              if (38 !== t.src.charCodeAt(n) || n + 1 >= r) return !1;
              if (35 === t.src.charCodeAt(n + 1)) {
                let r = t.src.slice(n).match(t7);
                if (r) {
                  if (!e) {
                    let e =
                        "x" === r[1][0].toLowerCase()
                          ? parseInt(r[1].slice(1), 16)
                          : parseInt(r[1], 10),
                      n = t.push("text_special", "", 0);
                    (n.content = tn(e) ? tr(e) : tr(65533)),
                      (n.markup = r[0]),
                      (n.info = "entity");
                  }
                  return (t.pos += r[0].length), !0;
                }
              } else {
                let r = t.src.slice(n).match(et);
                if (r) {
                  let n = U(r[0], !1);
                  if (n !== r[0]) {
                    if (!e) {
                      let e = t.push("text_special", "", 0);
                      (e.content = n), (e.markup = r[0]), (e.info = "entity");
                    }
                    return (t.pos += r[0].length), !0;
                  }
                }
              }
              return !1;
            },
          ],
        ],
        er = [
          [
            "balance_pairs",
            function (t) {
              let e = t.tokens_meta,
                n = t.tokens_meta.length;
              ee(t.delimiters);
              for (let t = 0; t < n; t++)
                e[t] && e[t].delimiters && ee(e[t].delimiters);
            },
          ],
          ["strikethrough", t5.postProcess],
          ["emphasis", t6.postProcess],
          [
            "fragments_join",
            function (t) {
              let e, n;
              let r = 0,
                i = t.tokens,
                s = t.tokens.length;
              for (e = n = 0; e < s; e++)
                i[e].nesting < 0 && r--,
                  (i[e].level = r),
                  i[e].nesting > 0 && r++,
                  "text" === i[e].type && e + 1 < s && "text" === i[e + 1].type
                    ? (i[e + 1].content = i[e].content + i[e + 1].content)
                    : (e !== n && (i[n] = i[e]), n++);
              e !== n && (i.length = n);
            },
          ],
        ];
      function ei() {
        this.ruler = new tE();
        for (let t = 0; t < en.length; t++) this.ruler.push(en[t][0], en[t][1]);
        this.ruler2 = new tE();
        for (let t = 0; t < er.length; t++)
          this.ruler2.push(er[t][0], er[t][1]);
      }
      function es(t) {
        let e = Array.prototype.slice.call(arguments, 1);
        return (
          e.forEach(function (e) {
            e &&
              Object.keys(e).forEach(function (n) {
                t[n] = e[n];
              });
          }),
          t
        );
      }
      function eo(t) {
        return Object.prototype.toString.call(t);
      }
      function el(t) {
        return "[object Function]" === eo(t);
      }
      function ea(t) {
        return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
      }
      (ei.prototype.skipToken = function (t) {
        let e = t.pos,
          n = this.ruler.getRules(""),
          r = n.length,
          i = t.md.options.maxNesting,
          s = t.cache;
        if (void 0 !== s[e]) {
          t.pos = s[e];
          return;
        }
        let o = !1;
        if (t.level < i) {
          for (let i = 0; i < r; i++)
            if ((t.level++, (o = n[i](t, !0)), t.level--, o)) {
              if (e >= t.pos)
                throw Error("inline rule didn't increment state.pos");
              break;
            }
        } else t.pos = t.posMax;
        !o && t.pos++, (s[e] = t.pos);
      }),
        (ei.prototype.tokenize = function (t) {
          let e = this.ruler.getRules(""),
            n = e.length,
            r = t.posMax,
            i = t.md.options.maxNesting;
          for (; t.pos < r; ) {
            let s = t.pos,
              o = !1;
            if (t.level < i) {
              for (let r = 0; r < n; r++)
                if ((o = e[r](t, !1))) {
                  if (s >= t.pos)
                    throw Error("inline rule didn't increment state.pos");
                  break;
                }
            }
            if (o) {
              if (t.pos >= r) break;
              continue;
            }
            t.pending += t.src[t.pos++];
          }
          t.pending && t.pushPending();
        }),
        (ei.prototype.parse = function (t, e, n, r) {
          let i = new this.State(t, e, n, r);
          this.tokenize(i);
          let s = this.ruler2.getRules(""),
            o = s.length;
          for (let t = 0; t < o; t++) s[t](i);
        }),
        (ei.prototype.State = t0);
      let eu = { fuzzyLink: !0, fuzzyEmail: !0, fuzzyIP: !1 },
        eh = {
          "http:": {
            validate: function (t, e, n) {
              let r = t.slice(e);
              return (n.re.http ||
                (n.re.http = RegExp(
                  "^\\/\\/" +
                    n.re.src_auth +
                    n.re.src_host_port_strict +
                    n.re.src_path,
                  "i"
                )),
              n.re.http.test(r))
                ? r.match(n.re.http)[0].length
                : 0;
            },
          },
          "https:": "http:",
          "ftp:": "http:",
          "//": {
            validate: function (t, e, n) {
              let r = t.slice(e);
              return (n.re.no_http ||
                (n.re.no_http = RegExp(
                  "^" +
                    n.re.src_auth +
                    "(?:localhost|(?:(?:" +
                    n.re.src_domain +
                    ")\\.)+" +
                    n.re.src_domain_root +
                    ")" +
                    n.re.src_port +
                    n.re.src_host_terminator +
                    n.re.src_path,
                  "i"
                )),
              n.re.no_http.test(r))
                ? (e >= 3 && ":" === t[e - 3]) || (e >= 3 && "/" === t[e - 3])
                  ? 0
                  : r.match(n.re.no_http)[0].length
                : 0;
            },
          },
          "mailto:": {
            validate: function (t, e, n) {
              let r = t.slice(e);
              return (n.re.mailto ||
                (n.re.mailto = RegExp(
                  "^" + n.re.src_email_name + "@" + n.re.src_host_strict,
                  "i"
                )),
              n.re.mailto.test(r))
                ? r.match(n.re.mailto)[0].length
                : 0;
            },
          },
        },
        ec =
          "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split(
            "|"
          );
      function ep() {
        return function (t, e) {
          e.normalize(t);
        };
      }
      function ed(t) {
        let e = (t.re = (function (t) {
            let e = {};
            (t = t || {}),
              (e.src_Any = L.source),
              (e.src_Cc = $.source),
              (e.src_Z = P.source),
              (e.src_P = N.source),
              (e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|")),
              (e.src_ZCc = [e.src_Z, e.src_Cc].join("|"));
            let n = "[><｜]";
            return (
              (e.src_pseudo_letter =
                "(?:(?!" + n + "|" + e.src_ZPCc + ")" + e.src_Any + ")"),
              (e.src_ip4 =
                "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"),
              (e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?"),
              (e.src_port =
                "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?"),
              (e.src_host_terminator =
                "(?=$|" +
                n +
                "|" +
                e.src_ZPCc +
                ")(?!" +
                (t["---"] ? "-(?!--)|" : "-|") +
                "_|:\\d|\\.-|\\.(?!$|" +
                e.src_ZPCc +
                "))"),
              (e.src_path =
                "(?:[/?#](?:(?!" +
                e.src_ZCc +
                "|" +
                n +
                "|[()[\\]{}.,\"'?!\\-;]).|\\[(?:(?!" +
                e.src_ZCc +
                "|\\]).)*\\]|\\((?:(?!" +
                e.src_ZCc +
                "|[)]).)*\\)|\\{(?:(?!" +
                e.src_ZCc +
                '|[}]).)*\\}|\\"(?:(?!' +
                e.src_ZCc +
                '|["]).)+\\"|\\\'(?:(?!' +
                e.src_ZCc +
                "|[']).)+\\'|\\'(?=" +
                e.src_pseudo_letter +
                "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" +
                e.src_ZCc +
                "|[.]|$)|" +
                (t["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") +
                ",(?!" +
                e.src_ZCc +
                "|$)|;(?!" +
                e.src_ZCc +
                "|$)|\\!+(?!" +
                e.src_ZCc +
                "|[!]|$)|\\?(?!" +
                e.src_ZCc +
                "|[?]|$))+|\\/)?"),
              (e.src_email_name =
                '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*'),
              (e.src_xn = "xn--[a-z0-9\\-]{1,59}"),
              (e.src_domain_root =
                "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})"),
              (e.src_domain =
                "(?:" +
                e.src_xn +
                "|(?:" +
                e.src_pseudo_letter +
                ")|(?:" +
                e.src_pseudo_letter +
                "(?:-|" +
                e.src_pseudo_letter +
                "){0,61}" +
                e.src_pseudo_letter +
                "))"),
              (e.src_host =
                "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))"),
              (e.tpl_host_fuzzy =
                "(?:" +
                e.src_ip4 +
                "|(?:(?:(?:" +
                e.src_domain +
                ")\\.)+(?:%TLDS%)))"),
              (e.tpl_host_no_ip_fuzzy =
                "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))"),
              (e.src_host_strict = e.src_host + e.src_host_terminator),
              (e.tpl_host_fuzzy_strict =
                e.tpl_host_fuzzy + e.src_host_terminator),
              (e.src_host_port_strict =
                e.src_host + e.src_port + e.src_host_terminator),
              (e.tpl_host_port_fuzzy_strict =
                e.tpl_host_fuzzy + e.src_port + e.src_host_terminator),
              (e.tpl_host_port_no_ip_fuzzy_strict =
                e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator),
              (e.tpl_host_fuzzy_test =
                "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" +
                e.src_ZPCc +
                "|>|$))"),
              (e.tpl_email_fuzzy =
                "(^|" +
                n +
                '|"|\\(|' +
                e.src_ZCc +
                ")(" +
                e.src_email_name +
                "@" +
                e.tpl_host_fuzzy_strict +
                ")"),
              (e.tpl_link_fuzzy =
                "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" +
                e.src_ZPCc +
                "))((?![$+<=>^`|｜])" +
                e.tpl_host_port_fuzzy_strict +
                e.src_path +
                ")"),
              (e.tpl_link_no_ip_fuzzy =
                "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" +
                e.src_ZPCc +
                "))((?![$+<=>^`|｜])" +
                e.tpl_host_port_no_ip_fuzzy_strict +
                e.src_path +
                ")"),
              e
            );
          })(t.__opts__)),
          n = t.__tlds__.slice();
        function r(t) {
          return t.replace("%TLDS%", e.src_tlds);
        }
        t.onCompile(),
          t.__tlds_replaced__ ||
            n.push(
              "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"
            ),
          n.push(e.src_xn),
          (e.src_tlds = n.join("|")),
          (e.email_fuzzy = RegExp(r(e.tpl_email_fuzzy), "i")),
          (e.link_fuzzy = RegExp(r(e.tpl_link_fuzzy), "i")),
          (e.link_no_ip_fuzzy = RegExp(r(e.tpl_link_no_ip_fuzzy), "i")),
          (e.host_fuzzy_test = RegExp(r(e.tpl_host_fuzzy_test), "i"));
        let i = [];
        function s(t, e) {
          throw Error('(LinkifyIt) Invalid schema "' + t + '": ' + e);
        }
        (t.__compiled__ = {}),
          Object.keys(t.__schemas__).forEach(function (e) {
            let n = t.__schemas__[e];
            if (null === n) return;
            let r = { validate: null, link: null };
            if (((t.__compiled__[e] = r), "[object Object]" === eo(n))) {
              if ("[object RegExp]" === eo(n.validate)) {
                var o;
                r.validate =
                  ((o = n.validate),
                  function (t, e) {
                    let n = t.slice(e);
                    return o.test(n) ? n.match(o)[0].length : 0;
                  });
              } else el(n.validate) ? (r.validate = n.validate) : s(e, n);
              el(n.normalize)
                ? (r.normalize = n.normalize)
                : n.normalize
                  ? s(e, n)
                  : (r.normalize = ep());
              return;
            }
            if ("[object String]" === eo(n)) {
              i.push(e);
              return;
            }
            s(e, n);
          }),
          i.forEach(function (e) {
            t.__compiled__[t.__schemas__[e]] &&
              ((t.__compiled__[e].validate =
                t.__compiled__[t.__schemas__[e]].validate),
              (t.__compiled__[e].normalize =
                t.__compiled__[t.__schemas__[e]].normalize));
          }),
          (t.__compiled__[""] = { validate: null, normalize: ep() });
        let o = Object.keys(t.__compiled__)
          .filter(function (e) {
            return e.length > 0 && t.__compiled__[e];
          })
          .map(ea)
          .join("|");
        (t.re.schema_test = RegExp(
          "(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + o + ")",
          "i"
        )),
          (t.re.schema_search = RegExp(
            "(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + o + ")",
            "ig"
          )),
          (t.re.schema_at_start = RegExp("^" + t.re.schema_search.source, "i")),
          (t.re.pretest = RegExp(
            "(" +
              t.re.schema_test.source +
              ")|(" +
              t.re.host_fuzzy_test.source +
              ")|@",
            "i"
          )),
          (t.__index__ = -1),
          (t.__text_cache__ = "");
      }
      function ef(t, e) {
        let n = t.__index__,
          r = t.__last_index__,
          i = t.__text_cache__.slice(n, r);
        (this.schema = t.__schema__.toLowerCase()),
          (this.index = n + e),
          (this.lastIndex = r + e),
          (this.raw = i),
          (this.text = i),
          (this.url = i);
      }
      function em(t, e) {
        let n = new ef(t, e);
        return t.__compiled__[n.schema].normalize(n, t), n;
      }
      function eg(t, e) {
        if (!(this instanceof eg)) return new eg(t, e);
        !e &&
          Object.keys(t || {}).reduce(function (t, e) {
            return t || eu.hasOwnProperty(e);
          }, !1) &&
          ((e = t), (t = {})),
          (this.__opts__ = es({}, eu, e)),
          (this.__index__ = -1),
          (this.__last_index__ = -1),
          (this.__schema__ = ""),
          (this.__text_cache__ = ""),
          (this.__schemas__ = es({}, eh, t)),
          (this.__compiled__ = {}),
          (this.__tlds__ = ec),
          (this.__tlds_replaced__ = !1),
          (this.re = {}),
          ed(this);
      }
      (eg.prototype.add = function (t, e) {
        return (this.__schemas__[t] = e), ed(this), this;
      }),
        (eg.prototype.set = function (t) {
          return (this.__opts__ = es(this.__opts__, t)), this;
        }),
        (eg.prototype.test = function (t) {
          let e, n, r, i, s, o, l, a;
          if (((this.__text_cache__ = t), (this.__index__ = -1), !t.length))
            return !1;
          if (this.re.schema_test.test(t)) {
            for (
              (l = this.re.schema_search).lastIndex = 0;
              null !== (e = l.exec(t));
            )
              if ((i = this.testSchemaAt(t, e[2], l.lastIndex))) {
                (this.__schema__ = e[2]),
                  (this.__index__ = e.index + e[1].length),
                  (this.__last_index__ = e.index + e[0].length + i);
                break;
              }
          }
          return (
            this.__opts__.fuzzyLink &&
              this.__compiled__["http:"] &&
              (a = t.search(this.re.host_fuzzy_test)) >= 0 &&
              (this.__index__ < 0 || a < this.__index__) &&
              null !==
                (n = t.match(
                  this.__opts__.fuzzyIP
                    ? this.re.link_fuzzy
                    : this.re.link_no_ip_fuzzy
                )) &&
              ((s = n.index + n[1].length),
              (this.__index__ < 0 || s < this.__index__) &&
                ((this.__schema__ = ""),
                (this.__index__ = s),
                (this.__last_index__ = n.index + n[0].length))),
            this.__opts__.fuzzyEmail &&
              this.__compiled__["mailto:"] &&
              t.indexOf("@") >= 0 &&
              null !== (r = t.match(this.re.email_fuzzy)) &&
              ((s = r.index + r[1].length),
              (o = r.index + r[0].length),
              (this.__index__ < 0 ||
                s < this.__index__ ||
                (s === this.__index__ && o > this.__last_index__)) &&
                ((this.__schema__ = "mailto:"),
                (this.__index__ = s),
                (this.__last_index__ = o))),
            this.__index__ >= 0
          );
        }),
        (eg.prototype.pretest = function (t) {
          return this.re.pretest.test(t);
        }),
        (eg.prototype.testSchemaAt = function (t, e, n) {
          return this.__compiled__[e.toLowerCase()]
            ? this.__compiled__[e.toLowerCase()].validate(t, n, this)
            : 0;
        }),
        (eg.prototype.match = function (t) {
          let e = [],
            n = 0;
          this.__index__ >= 0 &&
            this.__text_cache__ === t &&
            (e.push(em(this, n)), (n = this.__last_index__));
          let r = n ? t.slice(n) : t;
          for (; this.test(r); )
            e.push(em(this, n)),
              (r = r.slice(this.__last_index__)),
              (n += this.__last_index__);
          return e.length ? e : null;
        }),
        (eg.prototype.matchAtStart = function (t) {
          if (((this.__text_cache__ = t), (this.__index__ = -1), !t.length))
            return null;
          let e = this.re.schema_at_start.exec(t);
          if (!e) return null;
          let n = this.testSchemaAt(t, e[2], e[0].length);
          return n
            ? ((this.__schema__ = e[2]),
              (this.__index__ = e.index + e[1].length),
              (this.__last_index__ = e.index + e[0].length + n),
              em(this, 0))
            : null;
        }),
        (eg.prototype.tlds = function (t, e) {
          return (
            ((t = Array.isArray(t) ? t : [t]), e)
              ? (this.__tlds__ = this.__tlds__
                  .concat(t)
                  .sort()
                  .filter(function (t, e, n) {
                    return t !== n[e - 1];
                  })
                  .reverse())
              : ((this.__tlds__ = t.slice()), (this.__tlds_replaced__ = !0)),
            ed(this),
            this
          );
        }),
        (eg.prototype.normalize = function (t) {
          t.schema || (t.url = "http://" + t.url),
            "mailto:" !== t.schema ||
              /^mailto:/i.test(t.url) ||
              (t.url = "mailto:" + t.url);
        }),
        (eg.prototype.onCompile = function () {});
      let ek = /^xn--/,
        ey = /[^\0-\x7F]/,
        ex = /[\x2E\u3002\uFF0E\uFF61]/g,
        e_ = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input",
        },
        eC = Math.floor,
        eb = String.fromCharCode;
      function ew(t) {
        throw RangeError(e_[t]);
      }
      function ev(t, e) {
        let n = t.split("@"),
          r = "";
        return (
          n.length > 1 && ((r = n[0] + "@"), (t = n[1])),
          r +
            (function (t, e) {
              let n = [],
                r = t.length;
              for (; r--; ) n[r] = e(t[r]);
              return n;
            })((t = t.replace(ex, ".")).split("."), e).join(".")
        );
      }
      function eA(t) {
        let e = [],
          n = 0,
          r = t.length;
        for (; n < r; ) {
          let i = t.charCodeAt(n++);
          if (i >= 55296 && i <= 56319 && n < r) {
            let r = t.charCodeAt(n++);
            (64512 & r) == 56320
              ? e.push(((1023 & i) << 10) + (1023 & r) + 65536)
              : (e.push(i), n--);
          } else e.push(i);
        }
        return e;
      }
      let eD = function (t, e) {
          return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
        },
        eE = function (t, e, n) {
          let r = 0;
          for (t = n ? eC(t / 700) : t >> 1, t += eC(t / e); t > 455; r += 36)
            t = eC(t / 35);
          return eC(r + (36 * t) / (t + 38));
        },
        eS = function (t) {
          let e = [],
            n = t.length,
            r = 0,
            i = 128,
            s = 72,
            o = t.lastIndexOf("-");
          o < 0 && (o = 0);
          for (let n = 0; n < o; ++n)
            t.charCodeAt(n) >= 128 && ew("not-basic"), e.push(t.charCodeAt(n));
          for (let a = o > 0 ? o + 1 : 0; a < n; ) {
            let o = r;
            for (let e = 1, i = 36; ; i += 36) {
              var l;
              a >= n && ew("invalid-input");
              let o =
                (l = t.charCodeAt(a++)) >= 48 && l < 58
                  ? 26 + (l - 48)
                  : l >= 65 && l < 91
                    ? l - 65
                    : l >= 97 && l < 123
                      ? l - 97
                      : 36;
              o >= 36 && ew("invalid-input"),
                o > eC((2147483647 - r) / e) && ew("overflow"),
                (r += o * e);
              let u = i <= s ? 1 : i >= s + 26 ? 26 : i - s;
              if (o < u) break;
              let h = 36 - u;
              e > eC(2147483647 / h) && ew("overflow"), (e *= h);
            }
            let u = e.length + 1;
            (s = eE(r - o, u, 0 == o)),
              eC(r / u) > 2147483647 - i && ew("overflow"),
              (i += eC(r / u)),
              (r %= u),
              e.splice(r++, 0, i);
          }
          return String.fromCodePoint(...e);
        },
        eF = function (t) {
          let e = [],
            n = (t = eA(t)).length,
            r = 128,
            i = 0,
            s = 72;
          for (let n of t) n < 128 && e.push(eb(n));
          let o = e.length,
            l = o;
          for (o && e.push("-"); l < n; ) {
            let n = 2147483647;
            for (let e of t) e >= r && e < n && (n = e);
            let a = l + 1;
            for (let u of (n - r > eC((2147483647 - i) / a) && ew("overflow"),
            (i += (n - r) * a),
            (r = n),
            t))
              if ((u < r && ++i > 2147483647 && ew("overflow"), u === r)) {
                let t = i;
                for (let n = 36; ; n += 36) {
                  let r = n <= s ? 1 : n >= s + 26 ? 26 : n - s;
                  if (t < r) break;
                  let i = t - r,
                    o = 36 - r;
                  e.push(eb(eD(r + (i % o), 0))), (t = eC(i / o));
                }
                e.push(eb(eD(t, 0))), (s = eE(i, a, l === o)), (i = 0), ++l;
              }
            ++i, ++r;
          }
          return e.join("");
        };
      var eM = {
        version: "2.3.1",
        ucs2: { decode: eA, encode: (t) => String.fromCodePoint(...t) },
        decode: eS,
        encode: eF,
        toASCII: function (t) {
          return ev(t, function (t) {
            return ey.test(t) ? "xn--" + eF(t) : t;
          });
        },
        toUnicode: function (t) {
          return ev(t, function (t) {
            return ek.test(t) ? eS(t.slice(4).toLowerCase()) : t;
          });
        },
      };
      let eT = {
          default: {
            options: {
              html: !1,
              xhtmlOut: !1,
              breaks: !1,
              langPrefix: "language-",
              linkify: !1,
              typographer: !1,
              quotes: "“”‘’",
              highlight: null,
              maxNesting: 100,
            },
            components: { core: {}, block: {}, inline: {} },
          },
          zero: {
            options: {
              html: !1,
              xhtmlOut: !1,
              breaks: !1,
              langPrefix: "language-",
              linkify: !1,
              typographer: !1,
              quotes: "“”‘’",
              highlight: null,
              maxNesting: 20,
            },
            components: {
              core: { rules: ["normalize", "block", "inline", "text_join"] },
              block: { rules: ["paragraph"] },
              inline: {
                rules: ["text"],
                rules2: ["balance_pairs", "fragments_join"],
              },
            },
          },
          commonmark: {
            options: {
              html: !0,
              xhtmlOut: !0,
              breaks: !1,
              langPrefix: "language-",
              linkify: !1,
              typographer: !1,
              quotes: "“”‘’",
              highlight: null,
              maxNesting: 20,
            },
            components: {
              core: { rules: ["normalize", "block", "inline", "text_join"] },
              block: {
                rules: [
                  "blockquote",
                  "code",
                  "fence",
                  "heading",
                  "hr",
                  "html_block",
                  "lheading",
                  "list",
                  "reference",
                  "paragraph",
                ],
              },
              inline: {
                rules: [
                  "autolink",
                  "backticks",
                  "emphasis",
                  "entity",
                  "escape",
                  "html_inline",
                  "image",
                  "link",
                  "newline",
                  "text",
                ],
                rules2: ["balance_pairs", "emphasis", "fragments_join"],
              },
            },
          },
        },
        eI = /^(vbscript|javascript|file|data):/,
        ez = /^data:image\/(gif|png|jpeg|webp);/;
      function eO(t) {
        let e = t.trim().toLowerCase();
        return !eI.test(e) || ez.test(e);
      }
      let eB = ["http:", "https:", "mailto:"];
      function eR(t) {
        let e = R(t, !0);
        if (e.hostname && (!e.protocol || eB.indexOf(e.protocol) >= 0))
          try {
            e.hostname = eM.toASCII(e.hostname);
          } catch (t) {}
        return v(A(e));
      }
      function eN(t) {
        let e = R(t, !0);
        if (e.hostname && (!e.protocol || eB.indexOf(e.protocol) >= 0))
          try {
            e.hostname = eM.toUnicode(e.hostname);
          } catch (t) {}
        return C(A(e), C.defaultChars + "%");
      }
      function eq(t, e) {
        if (!(this instanceof eq)) return new eq(t, e);
        e || K(t) || ((e = t || {}), (t = "default")),
          (this.inline = new ei()),
          (this.block = new tQ()),
          (this.core = new tj()),
          (this.renderer = new tD()),
          (this.linkify = new eg()),
          (this.validateLink = eO),
          (this.normalizeLink = eR),
          (this.normalizeLinkText = eN),
          (this.utils = g),
          (this.helpers = tt({}, k)),
          (this.options = {}),
          this.configure(t),
          e && this.set(e);
      }
      (eq.prototype.set = function (t) {
        return tt(this.options, t), this;
      }),
        (eq.prototype.configure = function (t) {
          let e = this;
          if (K(t)) {
            let e = t;
            if (!(t = eT[e]))
              throw Error('Wrong `markdown-it` preset "' + e + '", check name');
          }
          if (!t) throw Error("Wrong `markdown-it` preset, can't be empty");
          return (
            t.options && e.set(t.options),
            t.components &&
              Object.keys(t.components).forEach(function (n) {
                t.components[n].rules &&
                  e[n].ruler.enableOnly(t.components[n].rules),
                  t.components[n].rules2 &&
                    e[n].ruler2.enableOnly(t.components[n].rules2);
              }),
            this
          );
        }),
        (eq.prototype.enable = function (t, e) {
          let n = [];
          Array.isArray(t) || (t = [t]),
            ["core", "block", "inline"].forEach(function (e) {
              n = n.concat(this[e].ruler.enable(t, !0));
            }, this),
            (n = n.concat(this.inline.ruler2.enable(t, !0)));
          let r = t.filter(function (t) {
            return 0 > n.indexOf(t);
          });
          if (r.length && !e)
            throw Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
          return this;
        }),
        (eq.prototype.disable = function (t, e) {
          let n = [];
          Array.isArray(t) || (t = [t]),
            ["core", "block", "inline"].forEach(function (e) {
              n = n.concat(this[e].ruler.disable(t, !0));
            }, this),
            (n = n.concat(this.inline.ruler2.disable(t, !0)));
          let r = t.filter(function (t) {
            return 0 > n.indexOf(t);
          });
          if (r.length && !e)
            throw Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
          return this;
        }),
        (eq.prototype.use = function (t) {
          let e = [this].concat(Array.prototype.slice.call(arguments, 1));
          return t.apply(t, e), this;
        }),
        (eq.prototype.parse = function (t, e) {
          if ("string" != typeof t)
            throw Error("Input data should be a String");
          let n = new this.core.State(t, this, e);
          return this.core.process(n), n.tokens;
        }),
        (eq.prototype.render = function (t, e) {
          return (
            (e = e || {}),
            this.renderer.render(this.parse(t, e), this.options, e)
          );
        }),
        (eq.prototype.parseInline = function (t, e) {
          let n = new this.core.State(t, this, e);
          return (n.inlineMode = !0), this.core.process(n), n.tokens;
        }),
        (eq.prototype.renderInline = function (t, e) {
          return (
            (e = e || {}),
            this.renderer.render(this.parseInline(t, e), this.options, e)
          );
        });
      let eL = new y.V_({
        nodes: {
          doc: { content: "block+" },
          paragraph: {
            content: "inline*",
            group: "block",
            parseDOM: [{ tag: "p" }],
            toDOM: () => ["p", 0],
          },
          blockquote: {
            content: "block+",
            group: "block",
            parseDOM: [{ tag: "blockquote" }],
            toDOM: () => ["blockquote", 0],
          },
          horizontal_rule: {
            group: "block",
            parseDOM: [{ tag: "hr" }],
            toDOM: () => ["div", ["hr"]],
          },
          heading: {
            attrs: { level: { default: 1 } },
            content: "(text | image)*",
            group: "block",
            defining: !0,
            parseDOM: [
              { tag: "h1", attrs: { level: 1 } },
              { tag: "h2", attrs: { level: 2 } },
              { tag: "h3", attrs: { level: 3 } },
              { tag: "h4", attrs: { level: 4 } },
              { tag: "h5", attrs: { level: 5 } },
              { tag: "h6", attrs: { level: 6 } },
            ],
            toDOM: (t) => ["h" + t.attrs.level, 0],
          },
          code_block: {
            content: "text*",
            group: "block",
            code: !0,
            defining: !0,
            marks: "",
            attrs: { params: { default: "" } },
            parseDOM: [
              {
                tag: "pre",
                preserveWhitespace: "full",
                getAttrs: (t) => ({
                  params: t.getAttribute("data-params") || "",
                }),
              },
            ],
            toDOM: (t) => [
              "pre",
              t.attrs.params ? { "data-params": t.attrs.params } : {},
              ["code", 0],
            ],
          },
          ordered_list: {
            content: "list_item+",
            group: "block",
            attrs: { order: { default: 1 }, tight: { default: !1 } },
            parseDOM: [
              {
                tag: "ol",
                getAttrs: (t) => ({
                  order: t.hasAttribute("start") ? +t.getAttribute("start") : 1,
                  tight: t.hasAttribute("data-tight"),
                }),
              },
            ],
            toDOM: (t) => [
              "ol",
              {
                start: 1 == t.attrs.order ? null : t.attrs.order,
                "data-tight": t.attrs.tight ? "true" : null,
              },
              0,
            ],
          },
          bullet_list: {
            content: "list_item+",
            group: "block",
            attrs: { tight: { default: !1 } },
            parseDOM: [
              {
                tag: "ul",
                getAttrs: (t) => ({ tight: t.hasAttribute("data-tight") }),
              },
            ],
            toDOM: (t) => [
              "ul",
              { "data-tight": t.attrs.tight ? "true" : null },
              0,
            ],
          },
          list_item: {
            content: "block+",
            defining: !0,
            parseDOM: [{ tag: "li" }],
            toDOM: () => ["li", 0],
          },
          text: { group: "inline" },
          image: {
            inline: !0,
            attrs: {
              src: {},
              alt: { default: null },
              title: { default: null },
            },
            group: "inline",
            draggable: !0,
            parseDOM: [
              {
                tag: "img[src]",
                getAttrs: (t) => ({
                  src: t.getAttribute("src"),
                  title: t.getAttribute("title"),
                  alt: t.getAttribute("alt"),
                }),
              },
            ],
            toDOM: (t) => ["img", t.attrs],
          },
          hard_break: {
            inline: !0,
            group: "inline",
            selectable: !1,
            parseDOM: [{ tag: "br" }],
            toDOM: () => ["br"],
          },
        },
        marks: {
          em: {
            parseDOM: [
              { tag: "i" },
              { tag: "em" },
              { style: "font-style=italic" },
              {
                style: "font-style=normal",
                clearMark: (t) => "em" == t.type.name,
              },
            ],
            toDOM: () => ["em"],
          },
          strong: {
            parseDOM: [
              { tag: "strong" },
              {
                tag: "b",
                getAttrs: (t) => "normal" != t.style.fontWeight && null,
              },
              {
                style: "font-weight=400",
                clearMark: (t) => "strong" == t.type.name,
              },
              {
                style: "font-weight",
                getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null,
              },
            ],
            toDOM: () => ["strong"],
          },
          link: {
            attrs: { href: {}, title: { default: null } },
            inclusive: !1,
            parseDOM: [
              {
                tag: "a[href]",
                getAttrs: (t) => ({
                  href: t.getAttribute("href"),
                  title: t.getAttribute("title"),
                }),
              },
            ],
            toDOM: (t) => ["a", t.attrs],
          },
          code: { parseDOM: [{ tag: "code" }], toDOM: () => ["code"] },
        },
      });
      class e$ {
        constructor(t, e) {
          (this.schema = t),
            (this.tokenHandlers = e),
            (this.stack = [
              {
                type: t.topNodeType,
                attrs: null,
                content: [],
                marks: y.vc.none,
              },
            ]);
        }
        top() {
          return this.stack[this.stack.length - 1];
        }
        push(t) {
          this.stack.length && this.top().content.push(t);
        }
        addText(t) {
          if (!t) return;
          let e = this.top(),
            n = e.content,
            r = n[n.length - 1],
            i = this.schema.text(t, e.marks),
            s;
          r &&
          (s = (function (t, e) {
            if (t.isText && e.isText && y.vc.sameSet(t.marks, e.marks))
              return t.withText(t.text + e.text);
          })(r, i))
            ? (n[n.length - 1] = s)
            : n.push(i);
        }
        openMark(t) {
          let e = this.top();
          e.marks = t.addToSet(e.marks);
        }
        closeMark(t) {
          let e = this.top();
          e.marks = t.removeFromSet(e.marks);
        }
        parseTokens(t) {
          for (let e = 0; e < t.length; e++) {
            let n = t[e],
              r = this.tokenHandlers[n.type];
            if (!r)
              throw Error(
                "Token type `" + n.type + "` not supported by Markdown parser"
              );
            r(this, n, t, e);
          }
        }
        addNode(t, e, n) {
          let r = this.top(),
            i = t.createAndFill(e, n, r ? r.marks : []);
          return i ? (this.push(i), i) : null;
        }
        openNode(t, e) {
          this.stack.push({ type: t, attrs: e, content: [], marks: y.vc.none });
        }
        closeNode() {
          let t = this.stack.pop();
          return this.addNode(t.type, t.attrs, t.content);
        }
      }
      function ej(t, e, n, r) {
        return t.getAttrs
          ? t.getAttrs(e, n, r)
          : t.attrs instanceof Function
            ? t.attrs(e)
            : t.attrs;
      }
      function eP(t, e) {
        return (
          t.noCloseToken ||
          "code_inline" == e ||
          "code_block" == e ||
          "fence" == e
        );
      }
      function eJ(t) {
        return "\n" == t[t.length - 1] ? t.slice(0, t.length - 1) : t;
      }
      function eH() {}
      class eW {
        constructor(t, e, n) {
          (this.schema = t),
            (this.tokenizer = e),
            (this.tokens = n),
            (this.tokenHandlers = (function (t, e) {
              let n = Object.create(null);
              for (let r in e) {
                let i = e[r];
                if (i.block) {
                  let e = t.nodeType(i.block);
                  eP(i, r)
                    ? (n[r] = (t, n, r, s) => {
                        t.openNode(e, ej(i, n, r, s)),
                          t.addText(eJ(n.content)),
                          t.closeNode();
                      })
                    : ((n[r + "_open"] = (t, n, r, s) =>
                        t.openNode(e, ej(i, n, r, s))),
                      (n[r + "_close"] = (t) => t.closeNode()));
                } else if (i.node) {
                  let e = t.nodeType(i.node);
                  n[r] = (t, n, r, s) => t.addNode(e, ej(i, n, r, s));
                } else if (i.mark) {
                  let e = t.marks[i.mark];
                  eP(i, r)
                    ? (n[r] = (t, n, r, s) => {
                        t.openMark(e.create(ej(i, n, r, s))),
                          t.addText(eJ(n.content)),
                          t.closeMark(e);
                      })
                    : ((n[r + "_open"] = (t, n, r, s) =>
                        t.openMark(e.create(ej(i, n, r, s)))),
                      (n[r + "_close"] = (t) => t.closeMark(e)));
                } else if (i.ignore)
                  eP(i, r)
                    ? (n[r] = eH)
                    : ((n[r + "_open"] = eH), (n[r + "_close"] = eH));
                else
                  throw RangeError(
                    "Unrecognized parsing spec " + JSON.stringify(i)
                  );
              }
              return (
                (n.text = (t, e) => t.addText(e.content)),
                (n.inline = (t, e) => t.parseTokens(e.children)),
                (n.softbreak = n.softbreak || ((t) => t.addText(" "))),
                n
              );
            })(t, n));
        }
        parse(t, e = {}) {
          let n = new e$(this.schema, this.tokenHandlers),
            r;
          n.parseTokens(this.tokenizer.parse(t, e));
          do r = n.closeNode();
          while (n.stack.length);
          return r || this.schema.topNodeType.createAndFill();
        }
      }
      function eV(t, e) {
        for (; ++e < t.length; )
          if ("list_item_open" != t[e].type) return t[e].hidden;
        return !1;
      }
      let eZ = new eW(eL, eq("commonmark", { html: !1 }), {
        blockquote: { block: "blockquote" },
        paragraph: { block: "paragraph" },
        list_item: { block: "list_item" },
        bullet_list: {
          block: "bullet_list",
          getAttrs: (t, e, n) => ({ tight: eV(e, n) }),
        },
        ordered_list: {
          block: "ordered_list",
          getAttrs: (t, e, n) => ({
            order: +t.attrGet("start") || 1,
            tight: eV(e, n),
          }),
        },
        heading: {
          block: "heading",
          getAttrs: (t) => ({ level: +t.tag.slice(1) }),
        },
        code_block: { block: "code_block", noCloseToken: !0 },
        fence: {
          block: "code_block",
          getAttrs: (t) => ({ params: t.info || "" }),
          noCloseToken: !0,
        },
        hr: { node: "horizontal_rule" },
        image: {
          node: "image",
          getAttrs: (t) => ({
            src: t.attrGet("src"),
            title: t.attrGet("title") || null,
            alt: (t.children[0] && t.children[0].content) || null,
          }),
        },
        hardbreak: { node: "hard_break" },
        em: { mark: "em" },
        strong: { mark: "strong" },
        link: {
          mark: "link",
          getAttrs: (t) => ({
            href: t.attrGet("href"),
            title: t.attrGet("title") || null,
          }),
        },
        code_inline: { mark: "code", noCloseToken: !0 },
      });
      class eU {
        constructor(t, e, n = {}) {
          (this.nodes = t), (this.marks = e), (this.options = n);
        }
        serialize(t, e = {}) {
          e = Object.assign({}, this.options, e);
          let n = new eK(this.nodes, this.marks, e);
          return n.renderContent(t), n.out;
        }
      }
      let eY = new eU(
        {
          blockquote(t, e) {
            t.wrapBlock("> ", null, e, () => t.renderContent(e));
          },
          code_block(t, e) {
            let n = e.textContent.match(/`{3,}/gm),
              r = n ? n.sort().slice(-1)[0] + "`" : "```";
            t.write(r + (e.attrs.params || "") + "\n"),
              t.text(e.textContent, !1),
              t.write("\n"),
              t.write(r),
              t.closeBlock(e);
          },
          heading(t, e) {
            t.write(t.repeat("#", e.attrs.level) + " "),
              t.renderInline(e, !1),
              t.closeBlock(e);
          },
          horizontal_rule(t, e) {
            t.write(e.attrs.markup || "---"), t.closeBlock(e);
          },
          bullet_list(t, e) {
            t.renderList(e, "  ", () => (e.attrs.bullet || "*") + " ");
          },
          ordered_list(t, e) {
            let n = e.attrs.order || 1,
              r = String(n + e.childCount - 1).length,
              i = t.repeat(" ", r + 2);
            t.renderList(e, i, (e) => {
              let i = String(n + e);
              return t.repeat(" ", r - i.length) + i + ". ";
            });
          },
          list_item(t, e) {
            t.renderContent(e);
          },
          paragraph(t, e) {
            t.renderInline(e), t.closeBlock(e);
          },
          image(t, e) {
            t.write(
              "![" +
                t.esc(e.attrs.alt || "") +
                "](" +
                e.attrs.src.replace(/[\(\)]/g, "\\$&") +
                (e.attrs.title
                  ? ' "' + e.attrs.title.replace(/"/g, '\\"') + '"'
                  : "") +
                ")"
            );
          },
          hard_break(t, e, n, r) {
            for (let i = r + 1; i < n.childCount; i++)
              if (n.child(i).type != e.type) {
                t.write("\\\n");
                return;
              }
          },
          text(t, e) {
            t.text(e.text, !t.inAutolink);
          },
        },
        {
          em: {
            open: "*",
            close: "*",
            mixable: !0,
            expelEnclosingWhitespace: !0,
          },
          strong: {
            open: "**",
            close: "**",
            mixable: !0,
            expelEnclosingWhitespace: !0,
          },
          link: {
            open: (t, e, n, r) => (
              (t.inAutolink = (function (t, e, n) {
                if (t.attrs.title || !/^\w+:/.test(t.attrs.href)) return !1;
                let r = e.child(n);
                return (
                  !!r.isText &&
                  r.text == t.attrs.href &&
                  r.marks[r.marks.length - 1] == t &&
                  (n == e.childCount - 1 || !t.isInSet(e.child(n + 1).marks))
                );
              })(e, n, r)),
              t.inAutolink ? "<" : "["
            ),
            close(t, e, n, r) {
              let { inAutolink: i } = t;
              return (
                (t.inAutolink = void 0),
                i
                  ? ">"
                  : "](" +
                    e.attrs.href.replace(/[\(\)"]/g, "\\$&") +
                    (e.attrs.title
                      ? ` "${e.attrs.title.replace(/"/g, '\\"')}"`
                      : "") +
                    ")"
              );
            },
            mixable: !0,
          },
          code: {
            open: (t, e, n, r) => eG(n.child(r), -1),
            close: (t, e, n, r) => eG(n.child(r - 1), 1),
            escape: !1,
          },
        }
      );
      function eG(t, e) {
        let n = /`+/g,
          r,
          i = 0;
        if (t.isText)
          for (; (r = n.exec(t.text)); ) i = Math.max(i, r[0].length);
        let s = i > 0 && e > 0 ? " `" : "`";
        for (let t = 0; t < i; t++) s += "`";
        return i > 0 && e < 0 && (s += " "), s;
      }
      class eK {
        constructor(t, e, n) {
          (this.nodes = t),
            (this.marks = e),
            (this.options = n),
            (this.delim = ""),
            (this.out = ""),
            (this.closed = null),
            (this.inAutolink = void 0),
            (this.atBlockStart = !1),
            (this.inTightList = !1),
            void 0 === this.options.tightLists &&
              (this.options.tightLists = !1),
            void 0 === this.options.hardBreakNodeName &&
              (this.options.hardBreakNodeName = "hard_break");
        }
        flushClose(t = 2) {
          if (this.closed) {
            if ((this.atBlank() || (this.out += "\n"), t > 1)) {
              let e = this.delim,
                n = /\s+$/.exec(e);
              n && (e = e.slice(0, e.length - n[0].length));
              for (let n = 1; n < t; n++) this.out += e + "\n";
            }
            this.closed = null;
          }
        }
        wrapBlock(t, e, n, r) {
          let i = this.delim;
          this.write(null != e ? e : t),
            (this.delim += t),
            r(),
            (this.delim = i),
            this.closeBlock(n);
        }
        atBlank() {
          return /(^|\n)$/.test(this.out);
        }
        ensureNewLine() {
          this.atBlank() || (this.out += "\n");
        }
        write(t) {
          this.flushClose(),
            this.delim && this.atBlank() && (this.out += this.delim),
            t && (this.out += t);
        }
        closeBlock(t) {
          this.closed = t;
        }
        text(t, e = !0) {
          let n = t.split("\n");
          for (let t = 0; t < n.length; t++)
            this.write(),
              !e &&
                "[" == n[t][0] &&
                /(^|[^\\])\!$/.test(this.out) &&
                (this.out = this.out.slice(0, this.out.length - 1) + "\\!"),
              (this.out += e ? this.esc(n[t], this.atBlockStart) : n[t]),
              t != n.length - 1 && (this.out += "\n");
        }
        render(t, e, n) {
          if (!this.nodes[t.type.name])
            throw Error(
              "Token type `" +
                t.type.name +
                "` not supported by Markdown renderer"
            );
          this.nodes[t.type.name](this, t, e, n);
        }
        renderContent(t) {
          t.forEach((e, n, r) => this.render(e, t, r));
        }
        renderInline(t, e = !0) {
          this.atBlockStart = e;
          let n = [],
            r = "",
            i = (e, i, s) => {
              let o = e ? e.marks : [];
              e &&
                e.type.name === this.options.hardBreakNodeName &&
                (o = o.filter((e) => {
                  if (s + 1 == t.childCount) return !1;
                  let n = t.child(s + 1);
                  return e.isInSet(n.marks) && (!n.isText || /\S/.test(n.text));
                }));
              let l = r;
              if (
                ((r = ""),
                e &&
                  e.isText &&
                  o.some((t) => {
                    let e = this.marks[t.type.name];
                    return e && e.expelEnclosingWhitespace && !t.isInSet(n);
                  }))
              ) {
                let [t, r, i] = /^(\s*)(.*)$/m.exec(e.text);
                !r || ((l += r), (e = i ? e.withText(i) : null) || (o = n));
              }
              if (
                e &&
                e.isText &&
                o.some((e) => {
                  let n = this.marks[e.type.name];
                  return (
                    n &&
                    n.expelEnclosingWhitespace &&
                    (s == t.childCount - 1 || !e.isInSet(t.child(s + 1).marks))
                  );
                })
              ) {
                let [t, i, s] = /^(.*?)(\s*)$/m.exec(e.text);
                !s || ((r = s), (e = i ? e.withText(i) : null) || (o = n));
              }
              let a = o.length ? o[o.length - 1] : null,
                u = a && !1 === this.marks[a.type.name].escape,
                h = o.length - (u ? 1 : 0);
              e: for (let t = 0; t < h; t++) {
                let e = o[t];
                if (!this.marks[e.type.name].mixable) break;
                for (let r = 0; r < n.length; r++) {
                  let i = n[r];
                  if (!this.marks[i.type.name].mixable) break;
                  if (e.eq(i)) {
                    t > r
                      ? (o = o
                          .slice(0, r)
                          .concat(e)
                          .concat(o.slice(r, t))
                          .concat(o.slice(t + 1, h)))
                      : r > t &&
                        (o = o
                          .slice(0, t)
                          .concat(o.slice(t + 1, r))
                          .concat(e)
                          .concat(o.slice(r, h)));
                    continue e;
                  }
                }
              }
              let c = 0;
              for (; c < Math.min(n.length, h) && o[c].eq(n[c]); ) ++c;
              for (; c < n.length; )
                this.text(this.markString(n.pop(), !1, t, s), !1);
              if ((l && this.text(l), e)) {
                for (; n.length < h; ) {
                  let e = o[n.length];
                  n.push(e),
                    this.text(this.markString(e, !0, t, s), !1),
                    (this.atBlockStart = !1);
                }
                u && e.isText
                  ? this.text(
                      this.markString(a, !0, t, s) +
                        e.text +
                        this.markString(a, !1, t, s + 1),
                      !1
                    )
                  : this.render(e, t, s),
                  (this.atBlockStart = !1);
              }
              (null == e ? void 0 : e.isText) &&
                e.nodeSize > 0 &&
                (this.atBlockStart = !1);
            };
          t.forEach(i), i(null, 0, t.childCount), (this.atBlockStart = !1);
        }
        renderList(t, e, n) {
          this.closed && this.closed.type == t.type
            ? this.flushClose(3)
            : this.inTightList && this.flushClose(1);
          let r =
              void 0 !== t.attrs.tight
                ? t.attrs.tight
                : this.options.tightLists,
            i = this.inTightList;
          (this.inTightList = r),
            t.forEach((i, s, o) => {
              o && r && this.flushClose(1),
                this.wrapBlock(e, n(o), t, () => this.render(i, t, o));
            }),
            (this.inTightList = i);
        }
        esc(t, e = !1) {
          return (
            (t = t.replace(/[`*\\~\[\]_]/g, (e, n) =>
              "_" == e &&
              n > 0 &&
              n + 1 < t.length &&
              t[n - 1].match(/\w/) &&
              t[n + 1].match(/\w/)
                ? e
                : "\\" + e
            )),
            e &&
              (t = t
                .replace(/^(\+[ ]|[\-*>])/, "\\$&")
                .replace(/^(\s*)(#{1,6})(\s|$)/, "$1\\$2$3")
                .replace(/^(\s*\d+)\.\s/, "$1\\. ")),
            this.options.escapeExtraCharacters &&
              (t = t.replace(this.options.escapeExtraCharacters, "\\$&")),
            t
          );
        }
        quote(t) {
          let e =
            -1 == t.indexOf('"') ? '""' : -1 == t.indexOf("'") ? "''" : "()";
          return e[0] + t + e[1];
        }
        repeat(t, e) {
          let n = "";
          for (let r = 0; r < e; r++) n += t;
          return n;
        }
        markString(t, e, n, r) {
          let i = this.marks[t.type.name],
            s = e ? i.open : i.close;
          return "string" == typeof s ? s : s(this, t, n, r);
        }
        getEnclosingWhitespace(t) {
          return {
            leading: (t.match(/^(\s+)/) || [void 0])[0],
            trailing: (t.match(/(\s+)$/) || [void 0])[0],
          };
        }
      }
    },
    79134: function (t, e, n) {
      function r(t) {
        this.content = t;
      }
      n.d(e, {
        aw: function () {
          return L;
        },
        PW: function () {
          return Z;
        },
        HY: function () {
          return i;
        },
        vc: function () {
          return a;
        },
        ZU: function () {
          return R;
        },
        NB: function () {
          return w;
        },
        e4: function () {
          return u;
        },
        V_: function () {
          return N;
        },
        p2: function () {
          return h;
        },
      }),
        (r.prototype = {
          constructor: r,
          find: function (t) {
            for (var e = 0; e < this.content.length; e += 2)
              if (this.content[e] === t) return e;
            return -1;
          },
          get: function (t) {
            var e = this.find(t);
            return -1 == e ? void 0 : this.content[e + 1];
          },
          update: function (t, e, n) {
            var i = n && n != t ? this.remove(n) : this,
              s = i.find(t),
              o = i.content.slice();
            return (
              -1 == s ? o.push(n || t, e) : ((o[s + 1] = e), n && (o[s] = n)),
              new r(o)
            );
          },
          remove: function (t) {
            var e = this.find(t);
            if (-1 == e) return this;
            var n = this.content.slice();
            return n.splice(e, 2), new r(n);
          },
          addToStart: function (t, e) {
            return new r([t, e].concat(this.remove(t).content));
          },
          addToEnd: function (t, e) {
            var n = this.remove(t).content.slice();
            return n.push(t, e), new r(n);
          },
          addBefore: function (t, e, n) {
            var i = this.remove(e),
              s = i.content.slice(),
              o = i.find(t);
            return s.splice(-1 == o ? s.length : o, 0, e, n), new r(s);
          },
          forEach: function (t) {
            for (var e = 0; e < this.content.length; e += 2)
              t(this.content[e], this.content[e + 1]);
          },
          prepend: function (t) {
            return (t = r.from(t)).size
              ? new r(t.content.concat(this.subtract(t).content))
              : this;
          },
          append: function (t) {
            return (t = r.from(t)).size
              ? new r(this.subtract(t).content.concat(t.content))
              : this;
          },
          subtract: function (t) {
            var e = this;
            t = r.from(t);
            for (var n = 0; n < t.content.length; n += 2)
              e = e.remove(t.content[n]);
            return e;
          },
          toObject: function () {
            var t = {};
            return (
              this.forEach(function (e, n) {
                t[e] = n;
              }),
              t
            );
          },
          get size() {
            return this.content.length >> 1;
          },
        }),
        (r.from = function (t) {
          if (t instanceof r) return t;
          var e = [];
          if (t) for (var n in t) e.push(n, t[n]);
          return new r(e);
        });
      class i {
        constructor(t, e) {
          if (((this.content = t), (this.size = e || 0), null == e))
            for (let e = 0; e < t.length; e++) this.size += t[e].nodeSize;
        }
        nodesBetween(t, e, n, r = 0, i) {
          for (let s = 0, o = 0; o < e; s++) {
            let l = this.content[s],
              a = o + l.nodeSize;
            if (a > t && !1 !== n(l, r + o, i || null, s) && l.content.size) {
              let i = o + 1;
              l.nodesBetween(
                Math.max(0, t - i),
                Math.min(l.content.size, e - i),
                n,
                r + i
              );
            }
            o = a;
          }
        }
        descendants(t) {
          this.nodesBetween(0, this.size, t);
        }
        textBetween(t, e, n, r) {
          let i = "",
            s = !0;
          return (
            this.nodesBetween(
              t,
              e,
              (o, l) => {
                let a = o.isText
                  ? o.text.slice(Math.max(t, l) - l, e - l)
                  : o.isLeaf
                    ? r
                      ? "function" == typeof r
                        ? r(o)
                        : r
                      : o.type.spec.leafText
                        ? o.type.spec.leafText(o)
                        : ""
                    : "";
                o.isBlock &&
                  ((o.isLeaf && a) || o.isTextblock) &&
                  n &&
                  (s ? (s = !1) : (i += n)),
                  (i += a);
              },
              0
            ),
            i
          );
        }
        append(t) {
          if (!t.size) return this;
          if (!this.size) return t;
          let e = this.lastChild,
            n = t.firstChild,
            r = this.content.slice(),
            s = 0;
          for (
            e.isText &&
            e.sameMarkup(n) &&
            ((r[r.length - 1] = e.withText(e.text + n.text)), (s = 1));
            s < t.content.length;
            s++
          )
            r.push(t.content[s]);
          return new i(r, this.size + t.size);
        }
        cut(t, e = this.size) {
          if (0 == t && e == this.size) return this;
          let n = [],
            r = 0;
          if (e > t)
            for (let i = 0, s = 0; s < e; i++) {
              let o = this.content[i],
                l = s + o.nodeSize;
              l > t &&
                ((s < t || l > e) &&
                  (o = o.isText
                    ? o.cut(Math.max(0, t - s), Math.min(o.text.length, e - s))
                    : o.cut(
                        Math.max(0, t - s - 1),
                        Math.min(o.content.size, e - s - 1)
                      )),
                n.push(o),
                (r += o.nodeSize)),
                (s = l);
            }
          return new i(n, r);
        }
        cutByIndex(t, e) {
          return t == e
            ? i.empty
            : 0 == t && e == this.content.length
              ? this
              : new i(this.content.slice(t, e));
        }
        replaceChild(t, e) {
          let n = this.content[t];
          if (n == e) return this;
          let r = this.content.slice(),
            s = this.size + e.nodeSize - n.nodeSize;
          return (r[t] = e), new i(r, s);
        }
        addToStart(t) {
          return new i([t].concat(this.content), this.size + t.nodeSize);
        }
        addToEnd(t) {
          return new i(this.content.concat(t), this.size + t.nodeSize);
        }
        eq(t) {
          if (this.content.length != t.content.length) return !1;
          for (let e = 0; e < this.content.length; e++)
            if (!this.content[e].eq(t.content[e])) return !1;
          return !0;
        }
        get firstChild() {
          return this.content.length ? this.content[0] : null;
        }
        get lastChild() {
          return this.content.length
            ? this.content[this.content.length - 1]
            : null;
        }
        get childCount() {
          return this.content.length;
        }
        child(t) {
          let e = this.content[t];
          if (!e) throw RangeError("Index " + t + " out of range for " + this);
          return e;
        }
        maybeChild(t) {
          return this.content[t] || null;
        }
        forEach(t) {
          for (let e = 0, n = 0; e < this.content.length; e++) {
            let r = this.content[e];
            t(r, n, e), (n += r.nodeSize);
          }
        }
        findDiffStart(t, e = 0) {
          return (function t(e, n, r) {
            for (let i = 0; ; i++) {
              if (i == e.childCount || i == n.childCount)
                return e.childCount == n.childCount ? null : r;
              let s = e.child(i),
                o = n.child(i);
              if (s == o) {
                r += s.nodeSize;
                continue;
              }
              if (!s.sameMarkup(o)) return r;
              if (s.isText && s.text != o.text) {
                for (let t = 0; s.text[t] == o.text[t]; t++) r++;
                return r;
              }
              if (s.content.size || o.content.size) {
                let e = t(s.content, o.content, r + 1);
                if (null != e) return e;
              }
              r += s.nodeSize;
            }
          })(this, t, e);
        }
        findDiffEnd(t, e = this.size, n = t.size) {
          return (function t(e, n, r, i) {
            for (let s = e.childCount, o = n.childCount; ; ) {
              if (0 == s || 0 == o) return s == o ? null : { a: r, b: i };
              let l = e.child(--s),
                a = n.child(--o),
                u = l.nodeSize;
              if (l == a) {
                (r -= u), (i -= u);
                continue;
              }
              if (!l.sameMarkup(a)) return { a: r, b: i };
              if (l.isText && l.text != a.text) {
                let t = 0,
                  e = Math.min(l.text.length, a.text.length);
                for (
                  ;
                  t < e &&
                  l.text[l.text.length - t - 1] ==
                    a.text[a.text.length - t - 1];
                )
                  t++, r--, i--;
                return { a: r, b: i };
              }
              if (l.content.size || a.content.size) {
                let e = t(l.content, a.content, r - 1, i - 1);
                if (e) return e;
              }
              (r -= u), (i -= u);
            }
          })(this, t, e, n);
        }
        findIndex(t, e = -1) {
          if (0 == t) return o(0, t);
          if (t == this.size) return o(this.content.length, t);
          if (t > this.size || t < 0)
            throw RangeError(`Position ${t} outside of fragment (${this})`);
          for (let n = 0, r = 0; ; n++) {
            let i = r + this.child(n).nodeSize;
            if (i >= t) {
              if (i == t || e > 0) return o(n + 1, i);
              return o(n, r);
            }
            r = i;
          }
        }
        toString() {
          return "<" + this.toStringInner() + ">";
        }
        toStringInner() {
          return this.content.join(", ");
        }
        toJSON() {
          return this.content.length
            ? this.content.map((t) => t.toJSON())
            : null;
        }
        static fromJSON(t, e) {
          if (!e) return i.empty;
          if (!Array.isArray(e))
            throw RangeError("Invalid input for Fragment.fromJSON");
          return new i(e.map(t.nodeFromJSON));
        }
        static fromArray(t) {
          if (!t.length) return i.empty;
          let e,
            n = 0;
          for (let r = 0; r < t.length; r++) {
            let i = t[r];
            (n += i.nodeSize),
              r && i.isText && t[r - 1].sameMarkup(i)
                ? (e || (e = t.slice(0, r)),
                  (e[e.length - 1] = i.withText(e[e.length - 1].text + i.text)))
                : e && e.push(i);
          }
          return new i(e || t, n);
        }
        static from(t) {
          if (!t) return i.empty;
          if (t instanceof i) return t;
          if (Array.isArray(t)) return this.fromArray(t);
          if (t.attrs) return new i([t], t.nodeSize);
          throw RangeError(
            "Can not convert " +
              t +
              " to a Fragment" +
              (t.nodesBetween
                ? " (looks like multiple versions of prosemirror-model were loaded)"
                : "")
          );
        }
      }
      i.empty = new i([], 0);
      let s = { index: 0, offset: 0 };
      function o(t, e) {
        return (s.index = t), (s.offset = e), s;
      }
      function l(t, e) {
        if (t === e) return !0;
        if (!(t && "object" == typeof t) || !(e && "object" == typeof e))
          return !1;
        let n = Array.isArray(t);
        if (Array.isArray(e) != n) return !1;
        if (n) {
          if (t.length != e.length) return !1;
          for (let n = 0; n < t.length; n++) if (!l(t[n], e[n])) return !1;
        } else {
          for (let n in t) if (!(n in e) || !l(t[n], e[n])) return !1;
          for (let n in e) if (!(n in t)) return !1;
        }
        return !0;
      }
      class a {
        constructor(t, e) {
          (this.type = t), (this.attrs = e);
        }
        addToSet(t) {
          let e,
            n = !1;
          for (let r = 0; r < t.length; r++) {
            let i = t[r];
            if (this.eq(i)) return t;
            if (this.type.excludes(i.type)) e || (e = t.slice(0, r));
            else {
              if (i.type.excludes(this.type)) return t;
              !n &&
                i.type.rank > this.type.rank &&
                (e || (e = t.slice(0, r)), e.push(this), (n = !0)),
                e && e.push(i);
            }
          }
          return e || (e = t.slice()), n || e.push(this), e;
        }
        removeFromSet(t) {
          for (let e = 0; e < t.length; e++)
            if (this.eq(t[e])) return t.slice(0, e).concat(t.slice(e + 1));
          return t;
        }
        isInSet(t) {
          for (let e = 0; e < t.length; e++) if (this.eq(t[e])) return !0;
          return !1;
        }
        eq(t) {
          return this == t || (this.type == t.type && l(this.attrs, t.attrs));
        }
        toJSON() {
          let t = { type: this.type.name };
          for (let e in this.attrs) {
            t.attrs = this.attrs;
            break;
          }
          return t;
        }
        static fromJSON(t, e) {
          if (!e) throw RangeError("Invalid input for Mark.fromJSON");
          let n = t.marks[e.type];
          if (!n)
            throw RangeError(`There is no mark type ${e.type} in this schema`);
          return n.create(e.attrs);
        }
        static sameSet(t, e) {
          if (t == e) return !0;
          if (t.length != e.length) return !1;
          for (let n = 0; n < t.length; n++) if (!t[n].eq(e[n])) return !1;
          return !0;
        }
        static setFrom(t) {
          if (!t || (Array.isArray(t) && 0 == t.length)) return a.none;
          if (t instanceof a) return [t];
          let e = t.slice();
          return e.sort((t, e) => t.type.rank - e.type.rank), e;
        }
      }
      a.none = [];
      class u extends Error {}
      class h {
        constructor(t, e, n) {
          (this.content = t), (this.openStart = e), (this.openEnd = n);
        }
        get size() {
          return this.content.size - this.openStart - this.openEnd;
        }
        insertAt(t, e) {
          let n = (function t(e, n, r, i) {
            let { index: s, offset: o } = e.findIndex(n),
              l = e.maybeChild(s);
            if (o == n || l.isText)
              return i && !i.canReplace(s, s, r)
                ? null
                : e.cut(0, n).append(r).append(e.cut(n));
            let a = t(l.content, n - o - 1, r);
            return a && e.replaceChild(s, l.copy(a));
          })(this.content, t + this.openStart, e);
          return n && new h(n, this.openStart, this.openEnd);
        }
        removeBetween(t, e) {
          return new h(
            (function t(e, n, r) {
              let { index: i, offset: s } = e.findIndex(n),
                o = e.maybeChild(i),
                { index: l, offset: a } = e.findIndex(r);
              if (s == n || o.isText) {
                if (a != r && !e.child(l).isText)
                  throw RangeError("Removing non-flat range");
                return e.cut(0, n).append(e.cut(r));
              }
              if (i != l) throw RangeError("Removing non-flat range");
              return e.replaceChild(
                i,
                o.copy(t(o.content, n - s - 1, r - s - 1))
              );
            })(this.content, t + this.openStart, e + this.openStart),
            this.openStart,
            this.openEnd
          );
        }
        eq(t) {
          return (
            this.content.eq(t.content) &&
            this.openStart == t.openStart &&
            this.openEnd == t.openEnd
          );
        }
        toString() {
          return this.content + "(" + this.openStart + "," + this.openEnd + ")";
        }
        toJSON() {
          if (!this.content.size) return null;
          let t = { content: this.content.toJSON() };
          return (
            this.openStart > 0 && (t.openStart = this.openStart),
            this.openEnd > 0 && (t.openEnd = this.openEnd),
            t
          );
        }
        static fromJSON(t, e) {
          if (!e) return h.empty;
          let n = e.openStart || 0,
            r = e.openEnd || 0;
          if ("number" != typeof n || "number" != typeof r)
            throw RangeError("Invalid input for Slice.fromJSON");
          return new h(i.fromJSON(t, e.content), n, r);
        }
        static maxOpen(t, e = !0) {
          let n = 0,
            r = 0;
          for (
            let r = t.firstChild;
            r && !r.isLeaf && (e || !r.type.spec.isolating);
            r = r.firstChild
          )
            n++;
          for (
            let n = t.lastChild;
            n && !n.isLeaf && (e || !n.type.spec.isolating);
            n = n.lastChild
          )
            r++;
          return new h(t, n, r);
        }
      }
      function c(t, e) {
        if (!e.type.compatibleContent(t.type))
          throw new u("Cannot join " + e.type.name + " onto " + t.type.name);
      }
      function p(t, e, n) {
        let r = t.node(n);
        return c(r, e.node(n)), r;
      }
      function d(t, e) {
        let n = e.length - 1;
        n >= 0 && t.isText && t.sameMarkup(e[n])
          ? (e[n] = t.withText(e[n].text + t.text))
          : e.push(t);
      }
      function f(t, e, n, r) {
        let i = (e || t).node(n),
          s = 0,
          o = e ? e.index(n) : i.childCount;
        t &&
          ((s = t.index(n)),
          t.depth > n ? s++ : t.textOffset && (d(t.nodeAfter, r), s++));
        for (let t = s; t < o; t++) d(i.child(t), r);
        e && e.depth == n && e.textOffset && d(e.nodeBefore, r);
      }
      function m(t, e) {
        return t.type.checkContent(e), t.copy(e);
      }
      function g(t, e, n) {
        let r = [];
        return (
          f(null, t, n, r),
          t.depth > n && d(m(p(t, e, n + 1), g(t, e, n + 1)), r),
          f(e, null, n, r),
          new i(r)
        );
      }
      h.empty = new h(i.empty, 0, 0);
      class k {
        constructor(t, e, n) {
          (this.pos = t),
            (this.path = e),
            (this.parentOffset = n),
            (this.depth = e.length / 3 - 1);
        }
        resolveDepth(t) {
          return null == t ? this.depth : t < 0 ? this.depth + t : t;
        }
        get parent() {
          return this.node(this.depth);
        }
        get doc() {
          return this.node(0);
        }
        node(t) {
          return this.path[3 * this.resolveDepth(t)];
        }
        index(t) {
          return this.path[3 * this.resolveDepth(t) + 1];
        }
        indexAfter(t) {
          return (
            (t = this.resolveDepth(t)),
            this.index(t) + (t != this.depth || this.textOffset ? 1 : 0)
          );
        }
        start(t) {
          return 0 == (t = this.resolveDepth(t)) ? 0 : this.path[3 * t - 1] + 1;
        }
        end(t) {
          return (
            (t = this.resolveDepth(t)),
            this.start(t) + this.node(t).content.size
          );
        }
        before(t) {
          if (!(t = this.resolveDepth(t)))
            throw RangeError("There is no position before the top-level node");
          return t == this.depth + 1 ? this.pos : this.path[3 * t - 1];
        }
        after(t) {
          if (!(t = this.resolveDepth(t)))
            throw RangeError("There is no position after the top-level node");
          return t == this.depth + 1
            ? this.pos
            : this.path[3 * t - 1] + this.path[3 * t].nodeSize;
        }
        get textOffset() {
          return this.pos - this.path[this.path.length - 1];
        }
        get nodeAfter() {
          let t = this.parent,
            e = this.index(this.depth);
          if (e == t.childCount) return null;
          let n = this.pos - this.path[this.path.length - 1],
            r = t.child(e);
          return n ? t.child(e).cut(n) : r;
        }
        get nodeBefore() {
          let t = this.index(this.depth),
            e = this.pos - this.path[this.path.length - 1];
          return e
            ? this.parent.child(t).cut(0, e)
            : 0 == t
              ? null
              : this.parent.child(t - 1);
        }
        posAtIndex(t, e) {
          e = this.resolveDepth(e);
          let n = this.path[3 * e],
            r = 0 == e ? 0 : this.path[3 * e - 1] + 1;
          for (let e = 0; e < t; e++) r += n.child(e).nodeSize;
          return r;
        }
        marks() {
          let t = this.parent,
            e = this.index();
          if (0 == t.content.size) return a.none;
          if (this.textOffset) return t.child(e).marks;
          let n = t.maybeChild(e - 1),
            r = t.maybeChild(e);
          if (!n) {
            let t = n;
            (n = r), (r = t);
          }
          let i = n.marks;
          for (var s = 0; s < i.length; s++)
            !1 !== i[s].type.spec.inclusive ||
              (r && i[s].isInSet(r.marks)) ||
              (i = i[s--].removeFromSet(i));
          return i;
        }
        marksAcross(t) {
          let e = this.parent.maybeChild(this.index());
          if (!e || !e.isInline) return null;
          let n = e.marks,
            r = t.parent.maybeChild(t.index());
          for (var i = 0; i < n.length; i++)
            !1 !== n[i].type.spec.inclusive ||
              (r && n[i].isInSet(r.marks)) ||
              (n = n[i--].removeFromSet(n));
          return n;
        }
        sharedDepth(t) {
          for (let e = this.depth; e > 0; e--)
            if (this.start(e) <= t && this.end(e) >= t) return e;
          return 0;
        }
        blockRange(t = this, e) {
          if (t.pos < this.pos) return t.blockRange(this);
          for (
            let n =
              this.depth -
              (this.parent.inlineContent || this.pos == t.pos ? 1 : 0);
            n >= 0;
            n--
          )
            if (t.pos <= this.end(n) && (!e || e(this.node(n))))
              return new C(this, t, n);
          return null;
        }
        sameParent(t) {
          return this.pos - this.parentOffset == t.pos - t.parentOffset;
        }
        max(t) {
          return t.pos > this.pos ? t : this;
        }
        min(t) {
          return t.pos < this.pos ? t : this;
        }
        toString() {
          let t = "";
          for (let e = 1; e <= this.depth; e++)
            t +=
              (t ? "/" : "") + this.node(e).type.name + "_" + this.index(e - 1);
          return t + ":" + this.parentOffset;
        }
        static resolve(t, e) {
          if (!(e >= 0 && e <= t.content.size))
            throw RangeError("Position " + e + " out of range");
          let n = [],
            r = 0,
            i = e;
          for (let e = t; ; ) {
            let { index: t, offset: s } = e.content.findIndex(i),
              o = i - s;
            if ((n.push(e, t, r + s), !o || (e = e.child(t)).isText)) break;
            (i = o - 1), (r += s + 1);
          }
          return new k(e, n, i);
        }
        static resolveCached(t, e) {
          for (let n = 0; n < y.length; n++) {
            let r = y[n];
            if (r.pos == e && r.doc == t) return r;
          }
          let n = (y[x] = k.resolve(t, e));
          return (x = (x + 1) % _), n;
        }
      }
      let y = [],
        x = 0,
        _ = 12;
      class C {
        constructor(t, e, n) {
          (this.$from = t), (this.$to = e), (this.depth = n);
        }
        get start() {
          return this.$from.before(this.depth + 1);
        }
        get end() {
          return this.$to.after(this.depth + 1);
        }
        get parent() {
          return this.$from.node(this.depth);
        }
        get startIndex() {
          return this.$from.index(this.depth);
        }
        get endIndex() {
          return this.$to.indexAfter(this.depth);
        }
      }
      let b = Object.create(null);
      class w {
        constructor(t, e, n, r = a.none) {
          (this.type = t),
            (this.attrs = e),
            (this.marks = r),
            (this.content = n || i.empty);
        }
        get nodeSize() {
          return this.isLeaf ? 1 : 2 + this.content.size;
        }
        get childCount() {
          return this.content.childCount;
        }
        child(t) {
          return this.content.child(t);
        }
        maybeChild(t) {
          return this.content.maybeChild(t);
        }
        forEach(t) {
          this.content.forEach(t);
        }
        nodesBetween(t, e, n, r = 0) {
          this.content.nodesBetween(t, e, n, r, this);
        }
        descendants(t) {
          this.nodesBetween(0, this.content.size, t);
        }
        get textContent() {
          return this.isLeaf && this.type.spec.leafText
            ? this.type.spec.leafText(this)
            : this.textBetween(0, this.content.size, "");
        }
        textBetween(t, e, n, r) {
          return this.content.textBetween(t, e, n, r);
        }
        get firstChild() {
          return this.content.firstChild;
        }
        get lastChild() {
          return this.content.lastChild;
        }
        eq(t) {
          return (
            this == t || (this.sameMarkup(t) && this.content.eq(t.content))
          );
        }
        sameMarkup(t) {
          return this.hasMarkup(t.type, t.attrs, t.marks);
        }
        hasMarkup(t, e, n) {
          return (
            this.type == t &&
            l(this.attrs, e || t.defaultAttrs || b) &&
            a.sameSet(this.marks, n || a.none)
          );
        }
        copy(t = null) {
          return t == this.content
            ? this
            : new w(this.type, this.attrs, t, this.marks);
        }
        mark(t) {
          return t == this.marks
            ? this
            : new w(this.type, this.attrs, this.content, t);
        }
        cut(t, e = this.content.size) {
          return 0 == t && e == this.content.size
            ? this
            : this.copy(this.content.cut(t, e));
        }
        slice(t, e = this.content.size, n = !1) {
          if (t == e) return h.empty;
          let r = this.resolve(t),
            i = this.resolve(e),
            s = n ? 0 : r.sharedDepth(e),
            o = r.start(s);
          return new h(
            r.node(s).content.cut(r.pos - o, i.pos - o),
            r.depth - s,
            i.depth - s
          );
        }
        replace(t, e, n) {
          return (function (t, e, n) {
            if (n.openStart > t.depth)
              throw new u("Inserted content deeper than insertion position");
            if (t.depth - n.openStart != e.depth - n.openEnd)
              throw new u("Inconsistent open depths");
            return (function t(e, n, r, s) {
              let o = e.index(s),
                l = e.node(s);
              if (o == n.index(s) && s < e.depth - r.openStart) {
                let i = t(e, n, r, s + 1);
                return l.copy(l.content.replaceChild(o, i));
              }
              if (!r.content.size) return m(l, g(e, n, s));
              if (r.openStart || r.openEnd || e.depth != s || n.depth != s) {
                let { start: t, end: o } = (function (t, e) {
                  let n = e.depth - t.openStart,
                    r = e.node(n).copy(t.content);
                  for (let t = n - 1; t >= 0; t--)
                    r = e.node(t).copy(i.from(r));
                  return {
                    start: r.resolveNoCache(t.openStart + n),
                    end: r.resolveNoCache(r.content.size - t.openEnd - n),
                  };
                })(r, e);
                return m(
                  l,
                  (function t(e, n, r, s, o) {
                    let l = e.depth > o && p(e, n, o + 1),
                      a = s.depth > o && p(r, s, o + 1),
                      u = [];
                    return (
                      f(null, e, o, u),
                      l && a && n.index(o) == r.index(o)
                        ? (c(l, a), d(m(l, t(e, n, r, s, o + 1)), u))
                        : (l && d(m(l, g(e, n, o + 1)), u),
                          f(n, r, o, u),
                          a && d(m(a, g(r, s, o + 1)), u)),
                      f(s, null, o, u),
                      new i(u)
                    );
                  })(e, t, o, n, s)
                );
              }
              {
                let t = e.parent,
                  i = t.content;
                return m(
                  t,
                  i
                    .cut(0, e.parentOffset)
                    .append(r.content)
                    .append(i.cut(n.parentOffset))
                );
              }
            })(t, e, n, 0);
          })(this.resolve(t), this.resolve(e), n);
        }
        nodeAt(t) {
          for (let e = this; ; ) {
            let { index: n, offset: r } = e.content.findIndex(t);
            if (!(e = e.maybeChild(n))) return null;
            if (r == t || e.isText) return e;
            t -= r + 1;
          }
        }
        childAfter(t) {
          let { index: e, offset: n } = this.content.findIndex(t);
          return { node: this.content.maybeChild(e), index: e, offset: n };
        }
        childBefore(t) {
          if (0 == t) return { node: null, index: 0, offset: 0 };
          let { index: e, offset: n } = this.content.findIndex(t);
          if (n < t)
            return { node: this.content.child(e), index: e, offset: n };
          let r = this.content.child(e - 1);
          return { node: r, index: e - 1, offset: n - r.nodeSize };
        }
        resolve(t) {
          return k.resolveCached(this, t);
        }
        resolveNoCache(t) {
          return k.resolve(this, t);
        }
        rangeHasMark(t, e, n) {
          let r = !1;
          return (
            e > t &&
              this.nodesBetween(
                t,
                e,
                (t) => (n.isInSet(t.marks) && (r = !0), !r)
              ),
            r
          );
        }
        get isBlock() {
          return this.type.isBlock;
        }
        get isTextblock() {
          return this.type.isTextblock;
        }
        get inlineContent() {
          return this.type.inlineContent;
        }
        get isInline() {
          return this.type.isInline;
        }
        get isText() {
          return this.type.isText;
        }
        get isLeaf() {
          return this.type.isLeaf;
        }
        get isAtom() {
          return this.type.isAtom;
        }
        toString() {
          if (this.type.spec.toDebugString)
            return this.type.spec.toDebugString(this);
          let t = this.type.name;
          return (
            this.content.size &&
              (t += "(" + this.content.toStringInner() + ")"),
            A(this.marks, t)
          );
        }
        contentMatchAt(t) {
          let e = this.type.contentMatch.matchFragment(this.content, 0, t);
          if (!e)
            throw Error("Called contentMatchAt on a node with invalid content");
          return e;
        }
        canReplace(t, e, n = i.empty, r = 0, s = n.childCount) {
          let o = this.contentMatchAt(t).matchFragment(n, r, s),
            l = o && o.matchFragment(this.content, e);
          if (!l || !l.validEnd) return !1;
          for (let t = r; t < s; t++)
            if (!this.type.allowsMarks(n.child(t).marks)) return !1;
          return !0;
        }
        canReplaceWith(t, e, n, r) {
          if (r && !this.type.allowsMarks(r)) return !1;
          let i = this.contentMatchAt(t).matchType(n),
            s = i && i.matchFragment(this.content, e);
          return !!s && s.validEnd;
        }
        canAppend(t) {
          return t.content.size
            ? this.canReplace(this.childCount, this.childCount, t.content)
            : this.type.compatibleContent(t.type);
        }
        check() {
          this.type.checkContent(this.content);
          let t = a.none;
          for (let e = 0; e < this.marks.length; e++)
            t = this.marks[e].addToSet(t);
          if (!a.sameSet(t, this.marks))
            throw RangeError(
              `Invalid collection of marks for node ${
                this.type.name
              }: ${this.marks.map((t) => t.type.name)}`
            );
          this.content.forEach((t) => t.check());
        }
        toJSON() {
          let t = { type: this.type.name };
          for (let e in this.attrs) {
            t.attrs = this.attrs;
            break;
          }
          return (
            this.content.size && (t.content = this.content.toJSON()),
            this.marks.length && (t.marks = this.marks.map((t) => t.toJSON())),
            t
          );
        }
        static fromJSON(t, e) {
          if (!e) throw RangeError("Invalid input for Node.fromJSON");
          let n = null;
          if (e.marks) {
            if (!Array.isArray(e.marks))
              throw RangeError("Invalid mark data for Node.fromJSON");
            n = e.marks.map(t.markFromJSON);
          }
          if ("text" == e.type) {
            if ("string" != typeof e.text)
              throw RangeError("Invalid text node in JSON");
            return t.text(e.text, n);
          }
          let r = i.fromJSON(t, e.content);
          return t.nodeType(e.type).create(e.attrs, r, n);
        }
      }
      w.prototype.text = void 0;
      class v extends w {
        constructor(t, e, n, r) {
          if ((super(t, e, null, r), !n))
            throw RangeError("Empty text nodes are not allowed");
          this.text = n;
        }
        toString() {
          return this.type.spec.toDebugString
            ? this.type.spec.toDebugString(this)
            : A(this.marks, JSON.stringify(this.text));
        }
        get textContent() {
          return this.text;
        }
        textBetween(t, e) {
          return this.text.slice(t, e);
        }
        get nodeSize() {
          return this.text.length;
        }
        mark(t) {
          return t == this.marks
            ? this
            : new v(this.type, this.attrs, this.text, t);
        }
        withText(t) {
          return t == this.text
            ? this
            : new v(this.type, this.attrs, t, this.marks);
        }
        cut(t = 0, e = this.text.length) {
          return 0 == t && e == this.text.length
            ? this
            : this.withText(this.text.slice(t, e));
        }
        eq(t) {
          return this.sameMarkup(t) && this.text == t.text;
        }
        toJSON() {
          let t = super.toJSON();
          return (t.text = this.text), t;
        }
      }
      function A(t, e) {
        for (let n = t.length - 1; n >= 0; n--)
          e = t[n].type.name + "(" + e + ")";
        return e;
      }
      class D {
        constructor(t) {
          (this.validEnd = t), (this.next = []), (this.wrapCache = []);
        }
        static parse(t, e) {
          var n;
          let r,
            i = new E(t, e);
          if (null == i.next) return D.empty;
          let s = (function t(e) {
            let n = [];
            do
              n.push(
                (function (e) {
                  let n = [];
                  do
                    n.push(
                      (function (e) {
                        let n = (function (e) {
                          if (e.eat("(")) {
                            let n = t(e);
                            return (
                              e.eat(")") || e.err("Missing closing paren"), n
                            );
                          }
                          if (/\W/.test(e.next))
                            e.err("Unexpected token '" + e.next + "'");
                          else {
                            let t = (function (t, e) {
                              let n = t.nodeTypes,
                                r = n[e];
                              if (r) return [r];
                              let i = [];
                              for (let t in n) {
                                let r = n[t];
                                r.groups.indexOf(e) > -1 && i.push(r);
                              }
                              return (
                                0 == i.length &&
                                  t.err(
                                    "No node type or group '" + e + "' found"
                                  ),
                                i
                              );
                            })(e, e.next).map(
                              (t) => (
                                null == e.inline
                                  ? (e.inline = t.isInline)
                                  : e.inline != t.isInline &&
                                    e.err("Mixing inline and block content"),
                                { type: "name", value: t }
                              )
                            );
                            return (
                              e.pos++,
                              1 == t.length
                                ? t[0]
                                : { type: "choice", exprs: t }
                            );
                          }
                        })(e);
                        for (;;)
                          if (e.eat("+")) n = { type: "plus", expr: n };
                          else if (e.eat("*")) n = { type: "star", expr: n };
                          else if (e.eat("?")) n = { type: "opt", expr: n };
                          else if (e.eat("{"))
                            n = (function (t, e) {
                              let n = S(t),
                                r = n;
                              return (
                                t.eat(",") && (r = "}" != t.next ? S(t) : -1),
                                t.eat("}") || t.err("Unclosed braced range"),
                                { type: "range", min: n, max: r, expr: e }
                              );
                            })(e, n);
                          else break;
                        return n;
                      })(e)
                    );
                  while (e.next && ")" != e.next && "|" != e.next);
                  return 1 == n.length ? n[0] : { type: "seq", exprs: n };
                })(e)
              );
            while (e.eat("|"));
            return 1 == n.length ? n[0] : { type: "choice", exprs: n };
          })(i);
          i.next && i.err("Unexpected trailing text");
          let o =
            ((n = (function (t) {
              let e = [[]];
              return (
                i(
                  (function t(e, s) {
                    if ("choice" == e.type)
                      return e.exprs.reduce((e, n) => e.concat(t(n, s)), []);
                    if ("seq" == e.type)
                      for (let r = 0; ; r++) {
                        let o = t(e.exprs[r], s);
                        if (r == e.exprs.length - 1) return o;
                        i(o, (s = n()));
                      }
                    else if ("star" == e.type) {
                      let o = n();
                      return r(s, o), i(t(e.expr, o), o), [r(o)];
                    } else if ("plus" == e.type) {
                      let o = n();
                      return i(t(e.expr, s), o), i(t(e.expr, o), o), [r(o)];
                    } else if ("opt" == e.type)
                      return [r(s)].concat(t(e.expr, s));
                    else if ("range" == e.type) {
                      let o = s;
                      for (let r = 0; r < e.min; r++) {
                        let r = n();
                        i(t(e.expr, o), r), (o = r);
                      }
                      if (-1 == e.max) i(t(e.expr, o), o);
                      else
                        for (let s = e.min; s < e.max; s++) {
                          let s = n();
                          r(o, s), i(t(e.expr, o), s), (o = s);
                        }
                      return [r(o)];
                    } else if ("name" == e.type) return [r(s, void 0, e.value)];
                    else throw Error("Unknown expr type");
                  })(t, 0),
                  n()
                ),
                e
              );
              function n() {
                return e.push([]) - 1;
              }
              function r(t, n, r) {
                let i = { term: r, to: n };
                return e[t].push(i), i;
              }
              function i(t, e) {
                t.forEach((t) => (t.to = e));
              }
            })(s)),
            (r = Object.create(null)),
            (function t(e) {
              let i = [];
              e.forEach((t) => {
                n[t].forEach(({ term: t, to: e }) => {
                  let r;
                  if (t) {
                    for (let e = 0; e < i.length; e++)
                      i[e][0] == t && (r = i[e][1]);
                    M(n, e).forEach((e) => {
                      r || i.push([t, (r = [])]),
                        -1 == r.indexOf(e) && r.push(e);
                    });
                  }
                });
              });
              let s = (r[e.join(",")] = new D(e.indexOf(n.length - 1) > -1));
              for (let e = 0; e < i.length; e++) {
                let n = i[e][1].sort(F);
                s.next.push({ type: i[e][0], next: r[n.join(",")] || t(n) });
              }
              return s;
            })(M(n, 0)));
          return (
            (function (t, e) {
              for (let n = 0, r = [t]; n < r.length; n++) {
                let t = r[n],
                  i = !t.validEnd,
                  s = [];
                for (let e = 0; e < t.next.length; e++) {
                  let { type: n, next: o } = t.next[e];
                  s.push(n.name),
                    i && !(n.isText || n.hasRequiredAttrs()) && (i = !1),
                    -1 == r.indexOf(o) && r.push(o);
                }
                i &&
                  e.err(
                    "Only non-generatable nodes (" +
                      s.join(", ") +
                      ") in a required position (see https://prosemirror.net/docs/guide/#generatable)"
                  );
              }
            })(o, i),
            o
          );
        }
        matchType(t) {
          for (let e = 0; e < this.next.length; e++)
            if (this.next[e].type == t) return this.next[e].next;
          return null;
        }
        matchFragment(t, e = 0, n = t.childCount) {
          let r = this;
          for (let i = e; r && i < n; i++) r = r.matchType(t.child(i).type);
          return r;
        }
        get inlineContent() {
          return 0 != this.next.length && this.next[0].type.isInline;
        }
        get defaultType() {
          for (let t = 0; t < this.next.length; t++) {
            let { type: e } = this.next[t];
            if (!(e.isText || e.hasRequiredAttrs())) return e;
          }
          return null;
        }
        compatible(t) {
          for (let e = 0; e < this.next.length; e++)
            for (let n = 0; n < t.next.length; n++)
              if (this.next[e].type == t.next[n].type) return !0;
          return !1;
        }
        fillBefore(t, e = !1, n = 0) {
          let r = [this];
          return (function s(o, l) {
            let a = o.matchFragment(t, n);
            if (a && (!e || a.validEnd))
              return i.from(l.map((t) => t.createAndFill()));
            for (let t = 0; t < o.next.length; t++) {
              let { type: e, next: n } = o.next[t];
              if (!(e.isText || e.hasRequiredAttrs()) && -1 == r.indexOf(n)) {
                r.push(n);
                let t = s(n, l.concat(e));
                if (t) return t;
              }
            }
            return null;
          })(this, []);
        }
        findWrapping(t) {
          for (let e = 0; e < this.wrapCache.length; e += 2)
            if (this.wrapCache[e] == t) return this.wrapCache[e + 1];
          let e = this.computeWrapping(t);
          return this.wrapCache.push(t, e), e;
        }
        computeWrapping(t) {
          let e = Object.create(null),
            n = [{ match: this, type: null, via: null }];
          for (; n.length; ) {
            let r = n.shift(),
              i = r.match;
            if (i.matchType(t)) {
              let t = [];
              for (let e = r; e.type; e = e.via) t.push(e.type);
              return t.reverse();
            }
            for (let t = 0; t < i.next.length; t++) {
              let { type: s, next: o } = i.next[t];
              s.isLeaf ||
                s.hasRequiredAttrs() ||
                s.name in e ||
                (r.type && !o.validEnd) ||
                (n.push({ match: s.contentMatch, type: s, via: r }),
                (e[s.name] = !0));
            }
          }
          return null;
        }
        get edgeCount() {
          return this.next.length;
        }
        edge(t) {
          if (t >= this.next.length)
            throw RangeError(`There's no ${t}th edge in this content match`);
          return this.next[t];
        }
        toString() {
          let t = [];
          return (
            !(function e(n) {
              t.push(n);
              for (let r = 0; r < n.next.length; r++)
                -1 == t.indexOf(n.next[r].next) && e(n.next[r].next);
            })(this),
            t
              .map((e, n) => {
                let r = n + (e.validEnd ? "*" : " ") + " ";
                for (let n = 0; n < e.next.length; n++)
                  r +=
                    (n ? ", " : "") +
                    e.next[n].type.name +
                    "->" +
                    t.indexOf(e.next[n].next);
                return r;
              })
              .join("\n")
          );
        }
      }
      D.empty = new D(!0);
      class E {
        constructor(t, e) {
          (this.string = t),
            (this.nodeTypes = e),
            (this.inline = null),
            (this.pos = 0),
            (this.tokens = t.split(/\s*(?=\b|\W|$)/)),
            "" == this.tokens[this.tokens.length - 1] && this.tokens.pop(),
            "" == this.tokens[0] && this.tokens.shift();
        }
        get next() {
          return this.tokens[this.pos];
        }
        eat(t) {
          return this.next == t && (this.pos++ || !0);
        }
        err(t) {
          throw SyntaxError(
            t + " (in content expression '" + this.string + "')"
          );
        }
      }
      function S(t) {
        /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
        let e = Number(t.next);
        return t.pos++, e;
      }
      function F(t, e) {
        return e - t;
      }
      function M(t, e) {
        let n = [];
        return (
          (function e(r) {
            let i = t[r];
            if (1 == i.length && !i[0].term) return e(i[0].to);
            n.push(r);
            for (let t = 0; t < i.length; t++) {
              let { term: r, to: s } = i[t];
              r || -1 != n.indexOf(s) || e(s);
            }
          })(e),
          n.sort(F)
        );
      }
      function T(t) {
        let e = Object.create(null);
        for (let n in t) {
          let r = t[n];
          if (!r.hasDefault) return null;
          e[n] = r.default;
        }
        return e;
      }
      function I(t, e) {
        let n = Object.create(null);
        for (let r in t) {
          let i = e && e[r];
          if (void 0 === i) {
            let e = t[r];
            if (e.hasDefault) i = e.default;
            else throw RangeError("No value supplied for attribute " + r);
          }
          n[r] = i;
        }
        return n;
      }
      function z(t) {
        let e = Object.create(null);
        if (t) for (let n in t) e[n] = new B(t[n]);
        return e;
      }
      class O {
        constructor(t, e, n) {
          (this.name = t),
            (this.schema = e),
            (this.spec = n),
            (this.markSet = null),
            (this.groups = n.group ? n.group.split(" ") : []),
            (this.attrs = z(n.attrs)),
            (this.defaultAttrs = T(this.attrs)),
            (this.contentMatch = null),
            (this.inlineContent = null),
            (this.isBlock = !(n.inline || "text" == t)),
            (this.isText = "text" == t);
        }
        get isInline() {
          return !this.isBlock;
        }
        get isTextblock() {
          return this.isBlock && this.inlineContent;
        }
        get isLeaf() {
          return this.contentMatch == D.empty;
        }
        get isAtom() {
          return this.isLeaf || !!this.spec.atom;
        }
        get whitespace() {
          return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
        }
        hasRequiredAttrs() {
          for (let t in this.attrs) if (this.attrs[t].isRequired) return !0;
          return !1;
        }
        compatibleContent(t) {
          return this == t || this.contentMatch.compatible(t.contentMatch);
        }
        computeAttrs(t) {
          return !t && this.defaultAttrs ? this.defaultAttrs : I(this.attrs, t);
        }
        create(t = null, e, n) {
          if (this.isText)
            throw Error("NodeType.create can't construct text nodes");
          return new w(this, this.computeAttrs(t), i.from(e), a.setFrom(n));
        }
        createChecked(t = null, e, n) {
          return (
            (e = i.from(e)),
            this.checkContent(e),
            new w(this, this.computeAttrs(t), e, a.setFrom(n))
          );
        }
        createAndFill(t = null, e, n) {
          if (((t = this.computeAttrs(t)), (e = i.from(e)).size)) {
            let t = this.contentMatch.fillBefore(e);
            if (!t) return null;
            e = t.append(e);
          }
          let r = this.contentMatch.matchFragment(e),
            s = r && r.fillBefore(i.empty, !0);
          return s ? new w(this, t, e.append(s), a.setFrom(n)) : null;
        }
        validContent(t) {
          let e = this.contentMatch.matchFragment(t);
          if (!e || !e.validEnd) return !1;
          for (let e = 0; e < t.childCount; e++)
            if (!this.allowsMarks(t.child(e).marks)) return !1;
          return !0;
        }
        checkContent(t) {
          if (!this.validContent(t))
            throw RangeError(
              `Invalid content for node ${this.name}: ${t
                .toString()
                .slice(0, 50)}`
            );
        }
        allowsMarkType(t) {
          return null == this.markSet || this.markSet.indexOf(t) > -1;
        }
        allowsMarks(t) {
          if (null == this.markSet) return !0;
          for (let e = 0; e < t.length; e++)
            if (!this.allowsMarkType(t[e].type)) return !1;
          return !0;
        }
        allowedMarks(t) {
          let e;
          if (null == this.markSet) return t;
          for (let n = 0; n < t.length; n++)
            this.allowsMarkType(t[n].type)
              ? e && e.push(t[n])
              : e || (e = t.slice(0, n));
          return e ? (e.length ? e : a.none) : t;
        }
        static compile(t, e) {
          let n = Object.create(null);
          t.forEach((t, r) => (n[t] = new O(t, e, r)));
          let r = e.spec.topNode || "doc";
          if (!n[r])
            throw RangeError(
              "Schema is missing its top node type ('" + r + "')"
            );
          if (!n.text) throw RangeError("Every schema needs a 'text' type");
          for (let t in n.text.attrs)
            throw RangeError("The text node type should not have attributes");
          return n;
        }
      }
      class B {
        constructor(t) {
          (this.hasDefault = Object.prototype.hasOwnProperty.call(
            t,
            "default"
          )),
            (this.default = t.default);
        }
        get isRequired() {
          return !this.hasDefault;
        }
      }
      class R {
        constructor(t, e, n, r) {
          (this.name = t),
            (this.rank = e),
            (this.schema = n),
            (this.spec = r),
            (this.attrs = z(r.attrs)),
            (this.excluded = null);
          let i = T(this.attrs);
          this.instance = i ? new a(this, i) : null;
        }
        create(t = null) {
          return !t && this.instance
            ? this.instance
            : new a(this, I(this.attrs, t));
        }
        static compile(t, e) {
          let n = Object.create(null),
            r = 0;
          return t.forEach((t, i) => (n[t] = new R(t, r++, e, i))), n;
        }
        removeFromSet(t) {
          for (var e = 0; e < t.length; e++)
            t[e].type == this &&
              ((t = t.slice(0, e).concat(t.slice(e + 1))), e--);
          return t;
        }
        isInSet(t) {
          for (let e = 0; e < t.length; e++) if (t[e].type == this) return t[e];
        }
        excludes(t) {
          return this.excluded.indexOf(t) > -1;
        }
      }
      class N {
        constructor(t) {
          this.cached = Object.create(null);
          let e = (this.spec = {});
          for (let n in t) e[n] = t[n];
          (e.nodes = r.from(t.nodes)),
            (e.marks = r.from(t.marks || {})),
            (this.nodes = O.compile(this.spec.nodes, this)),
            (this.marks = R.compile(this.spec.marks, this));
          let n = Object.create(null);
          for (let t in this.nodes) {
            if (t in this.marks)
              throw RangeError(t + " can not be both a node and a mark");
            let e = this.nodes[t],
              r = e.spec.content || "",
              i = e.spec.marks;
            (e.contentMatch = n[r] || (n[r] = D.parse(r, this.nodes))),
              (e.inlineContent = e.contentMatch.inlineContent),
              (e.markSet =
                "_" == i
                  ? null
                  : i
                    ? q(this, i.split(" "))
                    : "" != i && e.inlineContent
                      ? null
                      : []);
          }
          for (let t in this.marks) {
            let e = this.marks[t],
              n = e.spec.excludes;
            e.excluded = null == n ? [e] : "" == n ? [] : q(this, n.split(" "));
          }
          (this.nodeFromJSON = this.nodeFromJSON.bind(this)),
            (this.markFromJSON = this.markFromJSON.bind(this)),
            (this.topNodeType = this.nodes[this.spec.topNode || "doc"]),
            (this.cached.wrappings = Object.create(null));
        }
        node(t, e = null, n, r) {
          if ("string" == typeof t) t = this.nodeType(t);
          else if (t instanceof O) {
            if (t.schema != this)
              throw RangeError(
                "Node type from different schema used (" + t.name + ")"
              );
          } else throw RangeError("Invalid node type: " + t);
          return t.createChecked(e, n, r);
        }
        text(t, e) {
          let n = this.nodes.text;
          return new v(n, n.defaultAttrs, t, a.setFrom(e));
        }
        mark(t, e) {
          return "string" == typeof t && (t = this.marks[t]), t.create(e);
        }
        nodeFromJSON(t) {
          return w.fromJSON(this, t);
        }
        markFromJSON(t) {
          return a.fromJSON(this, t);
        }
        nodeType(t) {
          let e = this.nodes[t];
          if (!e) throw RangeError("Unknown node type: " + t);
          return e;
        }
      }
      function q(t, e) {
        let n = [];
        for (let r = 0; r < e.length; r++) {
          let i = e[r],
            s = t.marks[i],
            o = s;
          if (s) n.push(s);
          else
            for (let e in t.marks) {
              let r = t.marks[e];
              ("_" == i ||
                (r.spec.group && r.spec.group.split(" ").indexOf(i) > -1)) &&
                n.push((o = r));
            }
          if (!o) throw SyntaxError("Unknown mark type: '" + e[r] + "'");
        }
        return n;
      }
      class L {
        constructor(t, e) {
          (this.schema = t),
            (this.rules = e),
            (this.tags = []),
            (this.styles = []),
            e.forEach((t) => {
              t.tag ? this.tags.push(t) : t.style && this.styles.push(t);
            }),
            (this.normalizeLists = !this.tags.some((e) => {
              if (!/^(ul|ol)\b/.test(e.tag) || !e.node) return !1;
              let n = t.nodes[e.node];
              return n.contentMatch.matchType(n);
            }));
        }
        parse(t, e = {}) {
          let n = new W(this, e, !1);
          return n.addAll(t, e.from, e.to), n.finish();
        }
        parseSlice(t, e = {}) {
          let n = new W(this, e, !0);
          return n.addAll(t, e.from, e.to), h.maxOpen(n.finish());
        }
        matchTag(t, e, n) {
          for (
            let i = n ? this.tags.indexOf(n) + 1 : 0;
            i < this.tags.length;
            i++
          ) {
            var r;
            let n = this.tags[i];
            if (
              ((r = n.tag),
              (
                t.matches ||
                t.msMatchesSelector ||
                t.webkitMatchesSelector ||
                t.mozMatchesSelector
              ).call(t, r) &&
                (void 0 === n.namespace || t.namespaceURI == n.namespace) &&
                (!n.context || e.matchesContext(n.context)))
            ) {
              if (n.getAttrs) {
                let e = n.getAttrs(t);
                if (!1 === e) continue;
                n.attrs = e || void 0;
              }
              return n;
            }
          }
        }
        matchStyle(t, e, n, r) {
          for (
            let i = r ? this.styles.indexOf(r) + 1 : 0;
            i < this.styles.length;
            i++
          ) {
            let r = this.styles[i],
              s = r.style;
            if (
              0 == s.indexOf(t) &&
              (!r.context || n.matchesContext(r.context)) &&
              (!(s.length > t.length) ||
                (61 == s.charCodeAt(t.length) && s.slice(t.length + 1) == e))
            ) {
              if (r.getAttrs) {
                let t = r.getAttrs(e);
                if (!1 === t) continue;
                r.attrs = t || void 0;
              }
              return r;
            }
          }
        }
        static schemaRules(t) {
          let e = [];
          function n(t) {
            let n = null == t.priority ? 50 : t.priority,
              r = 0;
            for (; r < e.length; r++) {
              let t = e[r];
              if ((null == t.priority ? 50 : t.priority) < n) break;
            }
            e.splice(r, 0, t);
          }
          for (let e in t.marks) {
            let r = t.marks[e].spec.parseDOM;
            r &&
              r.forEach((t) => {
                n((t = V(t))),
                  t.mark || t.ignore || t.clearMark || (t.mark = e);
              });
          }
          for (let e in t.nodes) {
            let r = t.nodes[e].spec.parseDOM;
            r &&
              r.forEach((t) => {
                n((t = V(t))), t.node || t.ignore || t.mark || (t.node = e);
              });
          }
          return e;
        }
        static fromSchema(t) {
          return (
            t.cached.domParser ||
            (t.cached.domParser = new L(t, L.schemaRules(t)))
          );
        }
      }
      let $ = {
          address: !0,
          article: !0,
          aside: !0,
          blockquote: !0,
          canvas: !0,
          dd: !0,
          div: !0,
          dl: !0,
          fieldset: !0,
          figcaption: !0,
          figure: !0,
          footer: !0,
          form: !0,
          h1: !0,
          h2: !0,
          h3: !0,
          h4: !0,
          h5: !0,
          h6: !0,
          header: !0,
          hgroup: !0,
          hr: !0,
          li: !0,
          noscript: !0,
          ol: !0,
          output: !0,
          p: !0,
          pre: !0,
          section: !0,
          table: !0,
          tfoot: !0,
          ul: !0,
        },
        j = {
          head: !0,
          noscript: !0,
          object: !0,
          script: !0,
          style: !0,
          title: !0,
        },
        P = { ol: !0, ul: !0 };
      function J(t, e, n) {
        return null != e
          ? (e ? 1 : 0) | ("full" === e ? 2 : 0)
          : t && "pre" == t.whitespace
            ? 3
            : -5 & n;
      }
      class H {
        constructor(t, e, n, r, i, s, o) {
          (this.type = t),
            (this.attrs = e),
            (this.marks = n),
            (this.pendingMarks = r),
            (this.solid = i),
            (this.options = o),
            (this.content = []),
            (this.activeMarks = a.none),
            (this.stashMarks = []),
            (this.match = s || (4 & o ? null : t.contentMatch));
        }
        findWrapping(t) {
          if (!this.match) {
            if (!this.type) return [];
            let e = this.type.contentMatch.fillBefore(i.from(t));
            if (e) this.match = this.type.contentMatch.matchFragment(e);
            else {
              let e = this.type.contentMatch,
                n;
              return (n = e.findWrapping(t.type))
                ? ((this.match = e), n)
                : null;
            }
          }
          return this.match.findWrapping(t.type);
        }
        finish(t) {
          if (!(1 & this.options)) {
            let t = this.content[this.content.length - 1],
              e;
            t &&
              t.isText &&
              (e = /[ \t\r\n\u000c]+$/.exec(t.text)) &&
              (t.text.length == e[0].length
                ? this.content.pop()
                : (this.content[this.content.length - 1] = t.withText(
                    t.text.slice(0, t.text.length - e[0].length)
                  )));
          }
          let e = i.from(this.content);
          return (
            !t &&
              this.match &&
              (e = e.append(this.match.fillBefore(i.empty, !0))),
            this.type ? this.type.create(this.attrs, e, this.marks) : e
          );
        }
        popFromStashMark(t) {
          for (let e = this.stashMarks.length - 1; e >= 0; e--)
            if (t.eq(this.stashMarks[e]))
              return this.stashMarks.splice(e, 1)[0];
        }
        applyPending(t) {
          for (let e = 0, n = this.pendingMarks; e < n.length; e++) {
            let r = n[e];
            (this.type
              ? this.type.allowsMarkType(r.type)
              : (function (t, e) {
                  let n = e.schema.nodes;
                  for (let r in n) {
                    let i = n[r];
                    if (!i.allowsMarkType(t)) continue;
                    let s = [],
                      o = (t) => {
                        s.push(t);
                        for (let n = 0; n < t.edgeCount; n++) {
                          let { type: r, next: i } = t.edge(n);
                          if (r == e || (0 > s.indexOf(i) && o(i))) return !0;
                        }
                      };
                    if (o(i.contentMatch)) return !0;
                  }
                })(r.type, t)) &&
              !r.isInSet(this.activeMarks) &&
              ((this.activeMarks = r.addToSet(this.activeMarks)),
              (this.pendingMarks = r.removeFromSet(this.pendingMarks)));
          }
        }
        inlineContext(t) {
          return this.type
            ? this.type.inlineContent
            : this.content.length
              ? this.content[0].isInline
              : t.parentNode &&
                !$.hasOwnProperty(t.parentNode.nodeName.toLowerCase());
        }
      }
      class W {
        constructor(t, e, n) {
          (this.parser = t),
            (this.options = e),
            (this.isOpen = n),
            (this.open = 0);
          let r = e.topNode,
            i,
            s = J(null, e.preserveWhitespace, 0) | (n ? 4 : 0);
          (i = r
            ? new H(
                r.type,
                r.attrs,
                a.none,
                a.none,
                !0,
                e.topMatch || r.type.contentMatch,
                s
              )
            : n
              ? new H(null, null, a.none, a.none, !0, null, s)
              : new H(t.schema.topNodeType, null, a.none, a.none, !0, null, s)),
            (this.nodes = [i]),
            (this.find = e.findPositions),
            (this.needsBlock = !1);
        }
        get top() {
          return this.nodes[this.open];
        }
        addDOM(t) {
          3 == t.nodeType
            ? this.addTextNode(t)
            : 1 == t.nodeType && this.addElement(t);
        }
        withStyleRules(t, e) {
          let n = t.getAttribute("style");
          if (!n) return e();
          let r = this.readStyles(
            (function (t) {
              let e = /\s*([\w-]+)\s*:\s*([^;]+)/g,
                n,
                r = [];
              for (; (n = e.exec(t)); ) r.push(n[1], n[2].trim());
              return r;
            })(n)
          );
          if (!r) return;
          let [i, s] = r,
            o = this.top;
          for (let t = 0; t < s.length; t++) this.removePendingMark(s[t], o);
          for (let t = 0; t < i.length; t++) this.addPendingMark(i[t]);
          e();
          for (let t = 0; t < i.length; t++) this.removePendingMark(i[t], o);
          for (let t = 0; t < s.length; t++) this.addPendingMark(s[t]);
        }
        addTextNode(t) {
          let e = t.nodeValue,
            n = this.top;
          if (
            2 & n.options ||
            n.inlineContext(t) ||
            /[^ \t\r\n\u000c]/.test(e)
          ) {
            if (1 & n.options)
              e =
                2 & n.options
                  ? e.replace(/\r\n?/g, "\n")
                  : e.replace(/\r?\n|\r/g, " ");
            else if (
              ((e = e.replace(/[ \t\r\n\u000c]+/g, " ")),
              /^[ \t\r\n\u000c]/.test(e) && this.open == this.nodes.length - 1)
            ) {
              let r = n.content[n.content.length - 1],
                i = t.previousSibling;
              (!r ||
                (i && "BR" == i.nodeName) ||
                (r.isText && /[ \t\r\n\u000c]$/.test(r.text))) &&
                (e = e.slice(1));
            }
            e && this.insertNode(this.parser.schema.text(e)),
              this.findInText(t);
          } else this.findInside(t);
        }
        addElement(t, e) {
          let n = t.nodeName.toLowerCase(),
            r;
          P.hasOwnProperty(n) &&
            this.parser.normalizeLists &&
            (function (t) {
              for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
                let t = 1 == e.nodeType ? e.nodeName.toLowerCase() : null;
                t && P.hasOwnProperty(t) && n
                  ? (n.appendChild(e), (e = n))
                  : "li" == t
                    ? (n = e)
                    : t && (n = null);
              }
            })(t);
          let i =
            (this.options.ruleFromNode && this.options.ruleFromNode(t)) ||
            (r = this.parser.matchTag(t, this, e));
          if (i ? i.ignore : j.hasOwnProperty(n))
            this.findInside(t), this.ignoreFallback(t);
          else if (!i || i.skip || i.closeParent) {
            i && i.closeParent
              ? (this.open = Math.max(0, this.open - 1))
              : i && i.skip.nodeType && (t = i.skip);
            let e,
              r = this.top,
              s = this.needsBlock;
            if ($.hasOwnProperty(n))
              r.content.length &&
                r.content[0].isInline &&
                this.open &&
                (this.open--, (r = this.top)),
                (e = !0),
                r.type || (this.needsBlock = !0);
            else if (!t.firstChild) {
              this.leafFallback(t);
              return;
            }
            i && i.skip
              ? this.addAll(t)
              : this.withStyleRules(t, () => this.addAll(t)),
              e && this.sync(r),
              (this.needsBlock = s);
          } else
            this.withStyleRules(t, () => {
              this.addElementByRule(t, i, !1 === i.consuming ? r : void 0);
            });
        }
        leafFallback(t) {
          "BR" == t.nodeName &&
            this.top.type &&
            this.top.type.inlineContent &&
            this.addTextNode(t.ownerDocument.createTextNode("\n"));
        }
        ignoreFallback(t) {
          "BR" != t.nodeName ||
            (this.top.type && this.top.type.inlineContent) ||
            this.findPlace(this.parser.schema.text("-"));
        }
        readStyles(t) {
          let e = a.none,
            n = a.none;
          for (let r = 0; r < t.length; r += 2)
            for (let i; ; ) {
              let s = this.parser.matchStyle(t[r], t[r + 1], this, i);
              if (!s) break;
              if (s.ignore) return null;
              if (
                (s.clearMark
                  ? this.top.pendingMarks
                      .concat(this.top.activeMarks)
                      .forEach((t) => {
                        s.clearMark(t) && (n = t.addToSet(n));
                      })
                  : (e = this.parser.schema.marks[s.mark]
                      .create(s.attrs)
                      .addToSet(e)),
                !1 === s.consuming)
              )
                i = s;
              else break;
            }
          return [e, n];
        }
        addElementByRule(t, e, n) {
          let r, i, s;
          e.node
            ? (i = this.parser.schema.nodes[e.node]).isLeaf
              ? this.insertNode(i.create(e.attrs)) || this.leafFallback(t)
              : (r = this.enter(i, e.attrs || null, e.preserveWhitespace))
            : ((s = this.parser.schema.marks[e.mark].create(e.attrs)),
              this.addPendingMark(s));
          let o = this.top;
          if (i && i.isLeaf) this.findInside(t);
          else if (n) this.addElement(t, n);
          else if (e.getContent)
            this.findInside(t),
              e
                .getContent(t, this.parser.schema)
                .forEach((t) => this.insertNode(t));
          else {
            let n = t;
            "string" == typeof e.contentElement
              ? (n = t.querySelector(e.contentElement))
              : "function" == typeof e.contentElement
                ? (n = e.contentElement(t))
                : e.contentElement && (n = e.contentElement),
              this.findAround(t, n, !0),
              this.addAll(n);
          }
          r && this.sync(o) && this.open--, s && this.removePendingMark(s, o);
        }
        addAll(t, e, n) {
          let r = e || 0;
          for (
            let i = e ? t.childNodes[e] : t.firstChild,
              s = null == n ? null : t.childNodes[n];
            i != s;
            i = i.nextSibling, ++r
          )
            this.findAtPoint(t, r), this.addDOM(i);
          this.findAtPoint(t, r);
        }
        findPlace(t) {
          let e, n;
          for (let r = this.open; r >= 0; r--) {
            let i = this.nodes[r],
              s = i.findWrapping(t);
            if (
              (s &&
                (!e || e.length > s.length) &&
                ((e = s), (n = i), !s.length)) ||
              i.solid
            )
              break;
          }
          if (!e) return !1;
          this.sync(n);
          for (let t = 0; t < e.length; t++) this.enterInner(e[t], null, !1);
          return !0;
        }
        insertNode(t) {
          if (t.isInline && this.needsBlock && !this.top.type) {
            let t = this.textblockFromContext();
            t && this.enterInner(t);
          }
          if (this.findPlace(t)) {
            this.closeExtra();
            let e = this.top;
            e.applyPending(t.type),
              e.match && (e.match = e.match.matchType(t.type));
            let n = e.activeMarks;
            for (let r = 0; r < t.marks.length; r++)
              (!e.type || e.type.allowsMarkType(t.marks[r].type)) &&
                (n = t.marks[r].addToSet(n));
            return e.content.push(t.mark(n)), !0;
          }
          return !1;
        }
        enter(t, e, n) {
          let r = this.findPlace(t.create(e));
          return r && this.enterInner(t, e, !0, n), r;
        }
        enterInner(t, e = null, n = !1, r) {
          this.closeExtra();
          let i = this.top;
          i.applyPending(t), (i.match = i.match && i.match.matchType(t));
          let s = J(t, r, i.options);
          4 & i.options && 0 == i.content.length && (s |= 4),
            this.nodes.push(
              new H(t, e, i.activeMarks, i.pendingMarks, n, null, s)
            ),
            this.open++;
        }
        closeExtra(t = !1) {
          let e = this.nodes.length - 1;
          if (e > this.open) {
            for (; e > this.open; e--)
              this.nodes[e - 1].content.push(this.nodes[e].finish(t));
            this.nodes.length = this.open + 1;
          }
        }
        finish() {
          return (
            (this.open = 0),
            this.closeExtra(this.isOpen),
            this.nodes[0].finish(this.isOpen || this.options.topOpen)
          );
        }
        sync(t) {
          for (let e = this.open; e >= 0; e--)
            if (this.nodes[e] == t) return (this.open = e), !0;
          return !1;
        }
        get currentPos() {
          this.closeExtra();
          let t = 0;
          for (let e = this.open; e >= 0; e--) {
            let n = this.nodes[e].content;
            for (let e = n.length - 1; e >= 0; e--) t += n[e].nodeSize;
            e && t++;
          }
          return t;
        }
        findAtPoint(t, e) {
          if (this.find)
            for (let n = 0; n < this.find.length; n++)
              this.find[n].node == t &&
                this.find[n].offset == e &&
                (this.find[n].pos = this.currentPos);
        }
        findInside(t) {
          if (this.find)
            for (let e = 0; e < this.find.length; e++)
              null == this.find[e].pos &&
                1 == t.nodeType &&
                t.contains(this.find[e].node) &&
                (this.find[e].pos = this.currentPos);
        }
        findAround(t, e, n) {
          if (t != e && this.find)
            for (let r = 0; r < this.find.length; r++)
              null == this.find[r].pos &&
                1 == t.nodeType &&
                t.contains(this.find[r].node) &&
                e.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) &&
                (this.find[r].pos = this.currentPos);
        }
        findInText(t) {
          if (this.find)
            for (let e = 0; e < this.find.length; e++)
              this.find[e].node == t &&
                (this.find[e].pos =
                  this.currentPos - (t.nodeValue.length - this.find[e].offset));
        }
        matchesContext(t) {
          if (t.indexOf("|") > -1)
            return t.split(/\s*\|\s*/).some(this.matchesContext, this);
          let e = t.split("/"),
            n = this.options.context,
            r = !this.isOpen && (!n || n.parent.type == this.nodes[0].type),
            i = -(n ? n.depth + 1 : 0) + (r ? 0 : 1),
            s = (t, o) => {
              for (; t >= 0; t--) {
                let l = e[t];
                if ("" == l) {
                  if (t == e.length - 1 || 0 == t) continue;
                  for (; o >= i; o--) if (s(t - 1, o)) return !0;
                  return !1;
                }
                {
                  let t =
                    o > 0 || (0 == o && r)
                      ? this.nodes[o].type
                      : n && o >= i
                        ? n.node(o - i).type
                        : null;
                  if (!t || (t.name != l && -1 == t.groups.indexOf(l)))
                    return !1;
                  o--;
                }
              }
              return !0;
            };
          return s(e.length - 1, this.open);
        }
        textblockFromContext() {
          let t = this.options.context;
          if (t)
            for (let e = t.depth; e >= 0; e--) {
              let n = t.node(e).contentMatchAt(t.indexAfter(e)).defaultType;
              if (n && n.isTextblock && n.defaultAttrs) return n;
            }
          for (let t in this.parser.schema.nodes) {
            let e = this.parser.schema.nodes[t];
            if (e.isTextblock && e.defaultAttrs) return e;
          }
        }
        addPendingMark(t) {
          let e = (function (t, e) {
            for (let n = 0; n < e.length; n++) if (t.eq(e[n])) return e[n];
          })(t, this.top.pendingMarks);
          e && this.top.stashMarks.push(e),
            (this.top.pendingMarks = t.addToSet(this.top.pendingMarks));
        }
        removePendingMark(t, e) {
          for (let n = this.open; n >= 0; n--) {
            let r = this.nodes[n];
            if (r.pendingMarks.lastIndexOf(t) > -1)
              r.pendingMarks = t.removeFromSet(r.pendingMarks);
            else {
              r.activeMarks = t.removeFromSet(r.activeMarks);
              let e = r.popFromStashMark(t);
              e &&
                r.type &&
                r.type.allowsMarkType(e.type) &&
                (r.activeMarks = e.addToSet(r.activeMarks));
            }
            if (r == e) break;
          }
        }
      }
      function V(t) {
        let e = {};
        for (let n in t) e[n] = t[n];
        return e;
      }
      class Z {
        constructor(t, e) {
          (this.nodes = t), (this.marks = e);
        }
        serializeFragment(t, e = {}, n) {
          n || (n = Y(e).createDocumentFragment());
          let r = n,
            i = [];
          return (
            t.forEach((t) => {
              if (i.length || t.marks.length) {
                let n = 0,
                  s = 0;
                for (; n < i.length && s < t.marks.length; ) {
                  let e = t.marks[s];
                  if (!this.marks[e.type.name]) {
                    s++;
                    continue;
                  }
                  if (!e.eq(i[n][0]) || !1 === e.type.spec.spanning) break;
                  n++, s++;
                }
                for (; n < i.length; ) r = i.pop()[1];
                for (; s < t.marks.length; ) {
                  let n = t.marks[s++],
                    o = this.serializeMark(n, t.isInline, e);
                  o &&
                    (i.push([n, r]),
                    r.appendChild(o.dom),
                    (r = o.contentDOM || o.dom));
                }
              }
              r.appendChild(this.serializeNodeInner(t, e));
            }),
            n
          );
        }
        serializeNodeInner(t, e) {
          let { dom: n, contentDOM: r } = Z.renderSpec(
            Y(e),
            this.nodes[t.type.name](t)
          );
          if (r) {
            if (t.isLeaf)
              throw RangeError("Content hole not allowed in a leaf node spec");
            this.serializeFragment(t.content, e, r);
          }
          return n;
        }
        serializeNode(t, e = {}) {
          let n = this.serializeNodeInner(t, e);
          for (let r = t.marks.length - 1; r >= 0; r--) {
            let i = this.serializeMark(t.marks[r], t.isInline, e);
            i && ((i.contentDOM || i.dom).appendChild(n), (n = i.dom));
          }
          return n;
        }
        serializeMark(t, e, n = {}) {
          let r = this.marks[t.type.name];
          return r && Z.renderSpec(Y(n), r(t, e));
        }
        static renderSpec(t, e, n = null) {
          let r;
          if ("string" == typeof e) return { dom: t.createTextNode(e) };
          if (null != e.nodeType) return { dom: e };
          if (e.dom && null != e.dom.nodeType) return e;
          let i = e[0],
            s = i.indexOf(" ");
          s > 0 && ((n = i.slice(0, s)), (i = i.slice(s + 1)));
          let o = n ? t.createElementNS(n, i) : t.createElement(i),
            l = e[1],
            a = 1;
          if (
            l &&
            "object" == typeof l &&
            null == l.nodeType &&
            !Array.isArray(l)
          ) {
            for (let t in ((a = 2), l))
              if (null != l[t]) {
                let e = t.indexOf(" ");
                e > 0
                  ? o.setAttributeNS(t.slice(0, e), t.slice(e + 1), l[t])
                  : o.setAttribute(t, l[t]);
              }
          }
          for (let i = a; i < e.length; i++) {
            let s = e[i];
            if (0 === s) {
              if (i < e.length - 1 || i > a)
                throw RangeError(
                  "Content hole must be the only child of its parent node"
                );
              return { dom: o, contentDOM: o };
            }
            {
              let { dom: e, contentDOM: i } = Z.renderSpec(t, s, n);
              if ((o.appendChild(e), i)) {
                if (r) throw RangeError("Multiple content holes");
                r = i;
              }
            }
          }
          return { dom: o, contentDOM: r };
        }
        static fromSchema(t) {
          return (
            t.cached.domSerializer ||
            (t.cached.domSerializer = new Z(
              this.nodesFromSchema(t),
              this.marksFromSchema(t)
            ))
          );
        }
        static nodesFromSchema(t) {
          let e = U(t.nodes);
          return e.text || (e.text = (t) => t.text), e;
        }
        static marksFromSchema(t) {
          return U(t.marks);
        }
      }
      function U(t) {
        let e = {};
        for (let n in t) {
          let r = t[n].spec.toDOM;
          r && (e[n] = r);
        }
        return e;
      }
      function Y(t) {
        return t.document || window.document;
      }
    },
    60314: function (t, e, n) {
      n.d(e, {
        Bs: function () {
          return h;
        },
        C1: function () {
          return f;
        },
        H$: function () {
          return E;
        },
        Sy: function () {
          return v;
        },
        Y1: function () {
          return o;
        },
        qv: function () {
          return p;
        },
        yy: function () {
          return w;
        },
      });
      var r = n(79134),
        i = n(27748);
      let s = Object.create(null);
      class o {
        constructor(t, e, n) {
          (this.$anchor = t),
            (this.$head = e),
            (this.ranges = n || [new l(t.min(e), t.max(e))]);
        }
        get anchor() {
          return this.$anchor.pos;
        }
        get head() {
          return this.$head.pos;
        }
        get from() {
          return this.$from.pos;
        }
        get to() {
          return this.$to.pos;
        }
        get $from() {
          return this.ranges[0].$from;
        }
        get $to() {
          return this.ranges[0].$to;
        }
        get empty() {
          let t = this.ranges;
          for (let e = 0; e < t.length; e++)
            if (t[e].$from.pos != t[e].$to.pos) return !1;
          return !0;
        }
        content() {
          return this.$from.doc.slice(this.from, this.to, !0);
        }
        replace(t, e = r.p2.empty) {
          let n = e.content.lastChild,
            i = null;
          for (let t = 0; t < e.openEnd; t++) (i = n), (n = n.lastChild);
          let s = t.steps.length,
            o = this.ranges;
          for (let l = 0; l < o.length; l++) {
            let { $from: a, $to: u } = o[l],
              h = t.mapping.slice(s);
            t.replaceRange(h.map(a.pos), h.map(u.pos), l ? r.p2.empty : e),
              0 == l && k(t, s, (n ? n.isInline : i && i.isTextblock) ? -1 : 1);
          }
        }
        replaceWith(t, e) {
          let n = t.steps.length,
            r = this.ranges;
          for (let i = 0; i < r.length; i++) {
            let { $from: s, $to: o } = r[i],
              l = t.mapping.slice(n),
              a = l.map(s.pos),
              u = l.map(o.pos);
            i
              ? t.deleteRange(a, u)
              : (t.replaceRangeWith(a, u, e), k(t, n, e.isInline ? -1 : 1));
          }
        }
        static findFrom(t, e, n = !1) {
          let r = t.parent.inlineContent
            ? new h(t)
            : g(t.node(0), t.parent, t.pos, t.index(), e, n);
          if (r) return r;
          for (let r = t.depth - 1; r >= 0; r--) {
            let i =
              e < 0
                ? g(t.node(0), t.node(r), t.before(r + 1), t.index(r), e, n)
                : g(t.node(0), t.node(r), t.after(r + 1), t.index(r) + 1, e, n);
            if (i) return i;
          }
          return null;
        }
        static near(t, e = 1) {
          return (
            this.findFrom(t, e) || this.findFrom(t, -e) || new f(t.node(0))
          );
        }
        static atStart(t) {
          return g(t, t, 0, 0, 1) || new f(t);
        }
        static atEnd(t) {
          return g(t, t, t.content.size, t.childCount, -1) || new f(t);
        }
        static fromJSON(t, e) {
          if (!e || !e.type)
            throw RangeError("Invalid input for Selection.fromJSON");
          let n = s[e.type];
          if (!n) throw RangeError(`No selection type ${e.type} defined`);
          return n.fromJSON(t, e);
        }
        static jsonID(t, e) {
          if (t in s)
            throw RangeError("Duplicate use of selection JSON ID " + t);
          return (s[t] = e), (e.prototype.jsonID = t), e;
        }
        getBookmark() {
          return h.between(this.$anchor, this.$head).getBookmark();
        }
      }
      o.prototype.visible = !0;
      class l {
        constructor(t, e) {
          (this.$from = t), (this.$to = e);
        }
      }
      let a = !1;
      function u(t) {
        a ||
          t.parent.inlineContent ||
          ((a = !0),
          console.warn(
            "TextSelection endpoint not pointing into a node with inline content (" +
              t.parent.type.name +
              ")"
          ));
      }
      class h extends o {
        constructor(t, e = t) {
          u(t), u(e), super(t, e);
        }
        get $cursor() {
          return this.$anchor.pos == this.$head.pos ? this.$head : null;
        }
        map(t, e) {
          let n = t.resolve(e.map(this.head));
          if (!n.parent.inlineContent) return o.near(n);
          let r = t.resolve(e.map(this.anchor));
          return new h(r.parent.inlineContent ? r : n, n);
        }
        replace(t, e = r.p2.empty) {
          if ((super.replace(t, e), e == r.p2.empty)) {
            let e = this.$from.marksAcross(this.$to);
            e && t.ensureMarks(e);
          }
        }
        eq(t) {
          return (
            t instanceof h && t.anchor == this.anchor && t.head == this.head
          );
        }
        getBookmark() {
          return new c(this.anchor, this.head);
        }
        toJSON() {
          return { type: "text", anchor: this.anchor, head: this.head };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.anchor || "number" != typeof e.head)
            throw RangeError("Invalid input for TextSelection.fromJSON");
          return new h(t.resolve(e.anchor), t.resolve(e.head));
        }
        static create(t, e, n = e) {
          let r = t.resolve(e);
          return new this(r, n == e ? r : t.resolve(n));
        }
        static between(t, e, n) {
          let r = t.pos - e.pos;
          if (((!n || r) && (n = r >= 0 ? 1 : -1), !e.parent.inlineContent)) {
            let t = o.findFrom(e, n, !0) || o.findFrom(e, -n, !0);
            if (!t) return o.near(e, n);
            e = t.$head;
          }
          return (
            t.parent.inlineContent ||
              (0 == r
                ? (t = e)
                : (t = (o.findFrom(t, -n, !0) || o.findFrom(t, n, !0)).$anchor)
                    .pos <
                    e.pos ==
                    r < 0 || (t = e)),
            new h(t, e)
          );
        }
      }
      o.jsonID("text", h);
      class c {
        constructor(t, e) {
          (this.anchor = t), (this.head = e);
        }
        map(t) {
          return new c(t.map(this.anchor), t.map(this.head));
        }
        resolve(t) {
          return h.between(t.resolve(this.anchor), t.resolve(this.head));
        }
      }
      class p extends o {
        constructor(t) {
          let e = t.nodeAfter;
          super(t, t.node(0).resolve(t.pos + e.nodeSize)), (this.node = e);
        }
        map(t, e) {
          let { deleted: n, pos: r } = e.mapResult(this.anchor),
            i = t.resolve(r);
          return n ? o.near(i) : new p(i);
        }
        content() {
          return new r.p2(r.HY.from(this.node), 0, 0);
        }
        eq(t) {
          return t instanceof p && t.anchor == this.anchor;
        }
        toJSON() {
          return { type: "node", anchor: this.anchor };
        }
        getBookmark() {
          return new d(this.anchor);
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.anchor)
            throw RangeError("Invalid input for NodeSelection.fromJSON");
          return new p(t.resolve(e.anchor));
        }
        static create(t, e) {
          return new p(t.resolve(e));
        }
        static isSelectable(t) {
          return !t.isText && !1 !== t.type.spec.selectable;
        }
      }
      (p.prototype.visible = !1), o.jsonID("node", p);
      class d {
        constructor(t) {
          this.anchor = t;
        }
        map(t) {
          let { deleted: e, pos: n } = t.mapResult(this.anchor);
          return e ? new c(n, n) : new d(n);
        }
        resolve(t) {
          let e = t.resolve(this.anchor),
            n = e.nodeAfter;
          return n && p.isSelectable(n) ? new p(e) : o.near(e);
        }
      }
      class f extends o {
        constructor(t) {
          super(t.resolve(0), t.resolve(t.content.size));
        }
        replace(t, e = r.p2.empty) {
          if (e == r.p2.empty) {
            t.delete(0, t.doc.content.size);
            let e = o.atStart(t.doc);
            e.eq(t.selection) || t.setSelection(e);
          } else super.replace(t, e);
        }
        toJSON() {
          return { type: "all" };
        }
        static fromJSON(t) {
          return new f(t);
        }
        map(t) {
          return new f(t);
        }
        eq(t) {
          return t instanceof f;
        }
        getBookmark() {
          return m;
        }
      }
      o.jsonID("all", f);
      let m = {
        map() {
          return this;
        },
        resolve: (t) => new f(t),
      };
      function g(t, e, n, r, i, s = !1) {
        if (e.inlineContent) return h.create(t, n);
        for (
          let o = r - (i > 0 ? 0 : 1);
          i > 0 ? o < e.childCount : o >= 0;
          o += i
        ) {
          let r = e.child(o);
          if (r.isAtom) {
            if (!s && p.isSelectable(r))
              return p.create(t, n - (i < 0 ? r.nodeSize : 0));
          } else {
            let e = g(t, r, n + i, i < 0 ? r.childCount : 0, i, s);
            if (e) return e;
          }
          n += r.nodeSize * i;
        }
        return null;
      }
      function k(t, e, n) {
        let r,
          s = t.steps.length - 1;
        if (s < e) return;
        let l = t.steps[s];
        (l instanceof i.Pu || l instanceof i.FC) &&
          (t.mapping.maps[s].forEach((t, e, n, i) => {
            null == r && (r = i);
          }),
          t.setSelection(o.near(t.doc.resolve(r), n)));
      }
      class y extends i.wx {
        constructor(t) {
          super(t.doc),
            (this.curSelectionFor = 0),
            (this.updated = 0),
            (this.meta = Object.create(null)),
            (this.time = Date.now()),
            (this.curSelection = t.selection),
            (this.storedMarks = t.storedMarks);
        }
        get selection() {
          return (
            this.curSelectionFor < this.steps.length &&
              ((this.curSelection = this.curSelection.map(
                this.doc,
                this.mapping.slice(this.curSelectionFor)
              )),
              (this.curSelectionFor = this.steps.length)),
            this.curSelection
          );
        }
        setSelection(t) {
          if (t.$from.doc != this.doc)
            throw RangeError(
              "Selection passed to setSelection must point at the current document"
            );
          return (
            (this.curSelection = t),
            (this.curSelectionFor = this.steps.length),
            (this.updated = (1 | this.updated) & -3),
            (this.storedMarks = null),
            this
          );
        }
        get selectionSet() {
          return (1 & this.updated) > 0;
        }
        setStoredMarks(t) {
          return (this.storedMarks = t), (this.updated |= 2), this;
        }
        ensureMarks(t) {
          return (
            r.vc.sameSet(this.storedMarks || this.selection.$from.marks(), t) ||
              this.setStoredMarks(t),
            this
          );
        }
        addStoredMark(t) {
          return this.ensureMarks(
            t.addToSet(this.storedMarks || this.selection.$head.marks())
          );
        }
        removeStoredMark(t) {
          return this.ensureMarks(
            t.removeFromSet(this.storedMarks || this.selection.$head.marks())
          );
        }
        get storedMarksSet() {
          return (2 & this.updated) > 0;
        }
        addStep(t, e) {
          super.addStep(t, e),
            (this.updated = -3 & this.updated),
            (this.storedMarks = null);
        }
        setTime(t) {
          return (this.time = t), this;
        }
        replaceSelection(t) {
          return this.selection.replace(this, t), this;
        }
        replaceSelectionWith(t, e = !0) {
          let n = this.selection;
          return (
            e &&
              (t = t.mark(
                this.storedMarks ||
                  (n.empty
                    ? n.$from.marks()
                    : n.$from.marksAcross(n.$to) || r.vc.none)
              )),
            n.replaceWith(this, t),
            this
          );
        }
        deleteSelection() {
          return this.selection.replace(this), this;
        }
        insertText(t, e, n) {
          let r = this.doc.type.schema;
          if (null == e)
            return t
              ? this.replaceSelectionWith(r.text(t), !0)
              : this.deleteSelection();
          {
            if ((null == n && (n = e), (n = null == n ? e : n), !t))
              return this.deleteRange(e, n);
            let i = this.storedMarks;
            if (!i) {
              let t = this.doc.resolve(e);
              i = n == e ? t.marks() : t.marksAcross(this.doc.resolve(n));
            }
            return (
              this.replaceRangeWith(e, n, r.text(t, i)),
              this.selection.empty ||
                this.setSelection(o.near(this.selection.$to)),
              this
            );
          }
        }
        setMeta(t, e) {
          return (this.meta["string" == typeof t ? t : t.key] = e), this;
        }
        getMeta(t) {
          return this.meta["string" == typeof t ? t : t.key];
        }
        get isGeneric() {
          for (let t in this.meta) return !1;
          return !0;
        }
        scrollIntoView() {
          return (this.updated |= 4), this;
        }
        get scrolledIntoView() {
          return (4 & this.updated) > 0;
        }
      }
      function x(t, e) {
        return e && t ? t.bind(e) : t;
      }
      class _ {
        constructor(t, e, n) {
          (this.name = t),
            (this.init = x(e.init, n)),
            (this.apply = x(e.apply, n));
        }
      }
      let C = [
        new _("doc", {
          init: (t) => t.doc || t.schema.topNodeType.createAndFill(),
          apply: (t) => t.doc,
        }),
        new _("selection", {
          init: (t, e) => t.selection || o.atStart(e.doc),
          apply: (t) => t.selection,
        }),
        new _("storedMarks", {
          init: (t) => t.storedMarks || null,
          apply: (t, e, n, r) => (r.selection.$cursor ? t.storedMarks : null),
        }),
        new _("scrollToSelection", {
          init: () => 0,
          apply: (t, e) => (t.scrolledIntoView ? e + 1 : e),
        }),
      ];
      class b {
        constructor(t, e) {
          (this.schema = t),
            (this.plugins = []),
            (this.pluginsByKey = Object.create(null)),
            (this.fields = C.slice()),
            e &&
              e.forEach((t) => {
                if (this.pluginsByKey[t.key])
                  throw RangeError(
                    "Adding different instances of a keyed plugin (" +
                      t.key +
                      ")"
                  );
                this.plugins.push(t),
                  (this.pluginsByKey[t.key] = t),
                  t.spec.state &&
                    this.fields.push(new _(t.key, t.spec.state, t));
              });
        }
      }
      class w {
        constructor(t) {
          this.config = t;
        }
        get schema() {
          return this.config.schema;
        }
        get plugins() {
          return this.config.plugins;
        }
        apply(t) {
          return this.applyTransaction(t).state;
        }
        filterTransaction(t, e = -1) {
          for (let n = 0; n < this.config.plugins.length; n++)
            if (n != e) {
              let e = this.config.plugins[n];
              if (
                e.spec.filterTransaction &&
                !e.spec.filterTransaction.call(e, t, this)
              )
                return !1;
            }
          return !0;
        }
        applyTransaction(t) {
          if (!this.filterTransaction(t))
            return { state: this, transactions: [] };
          let e = [t],
            n = this.applyInner(t),
            r = null;
          for (;;) {
            let i = !1;
            for (let s = 0; s < this.config.plugins.length; s++) {
              let o = this.config.plugins[s];
              if (o.spec.appendTransaction) {
                let l = r ? r[s].n : 0,
                  a = r ? r[s].state : this,
                  u =
                    l < e.length &&
                    o.spec.appendTransaction.call(o, l ? e.slice(l) : e, a, n);
                if (u && n.filterTransaction(u, s)) {
                  if ((u.setMeta("appendedTransaction", t), !r)) {
                    r = [];
                    for (let t = 0; t < this.config.plugins.length; t++)
                      r.push(
                        t < s
                          ? { state: n, n: e.length }
                          : { state: this, n: 0 }
                      );
                  }
                  e.push(u), (n = n.applyInner(u)), (i = !0);
                }
                r && (r[s] = { state: n, n: e.length });
              }
            }
            if (!i) return { state: n, transactions: e };
          }
        }
        applyInner(t) {
          if (!t.before.eq(this.doc))
            throw RangeError("Applying a mismatched transaction");
          let e = new w(this.config),
            n = this.config.fields;
          for (let r = 0; r < n.length; r++) {
            let i = n[r];
            e[i.name] = i.apply(t, this[i.name], this, e);
          }
          return e;
        }
        get tr() {
          return new y(this);
        }
        static create(t) {
          let e = new b(t.doc ? t.doc.type.schema : t.schema, t.plugins),
            n = new w(e);
          for (let r = 0; r < e.fields.length; r++)
            n[e.fields[r].name] = e.fields[r].init(t, n);
          return n;
        }
        reconfigure(t) {
          let e = new b(this.schema, t.plugins),
            n = e.fields,
            r = new w(e);
          for (let e = 0; e < n.length; e++) {
            let i = n[e].name;
            r[i] = this.hasOwnProperty(i) ? this[i] : n[e].init(t, r);
          }
          return r;
        }
        toJSON(t) {
          let e = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON(),
          };
          if (
            (this.storedMarks &&
              (e.storedMarks = this.storedMarks.map((t) => t.toJSON())),
            t && "object" == typeof t)
          )
            for (let n in t) {
              if ("doc" == n || "selection" == n)
                throw RangeError(
                  "The JSON fields `doc` and `selection` are reserved"
                );
              let r = t[n],
                i = r.spec.state;
              i && i.toJSON && (e[n] = i.toJSON.call(r, this[r.key]));
            }
          return e;
        }
        static fromJSON(t, e, n) {
          if (!e) throw RangeError("Invalid input for EditorState.fromJSON");
          if (!t.schema)
            throw RangeError("Required config field 'schema' missing");
          let i = new b(t.schema, t.plugins),
            s = new w(i);
          return (
            i.fields.forEach((i) => {
              if ("doc" == i.name) s.doc = r.NB.fromJSON(t.schema, e.doc);
              else if ("selection" == i.name)
                s.selection = o.fromJSON(s.doc, e.selection);
              else if ("storedMarks" == i.name)
                e.storedMarks &&
                  (s.storedMarks = e.storedMarks.map(t.schema.markFromJSON));
              else {
                if (n)
                  for (let r in n) {
                    let o = n[r],
                      l = o.spec.state;
                    if (
                      o.key == i.name &&
                      l &&
                      l.fromJSON &&
                      Object.prototype.hasOwnProperty.call(e, r)
                    ) {
                      s[i.name] = l.fromJSON.call(o, t, e[r], s);
                      return;
                    }
                  }
                s[i.name] = i.init(t, s);
              }
            }),
            s
          );
        }
      }
      class v {
        constructor(t) {
          (this.spec = t),
            (this.props = {}),
            t.props &&
              (function t(e, n, r) {
                for (let i in e) {
                  let s = e[i];
                  s instanceof Function
                    ? (s = s.bind(n))
                    : "handleDOMEvents" == i && (s = t(s, n, {})),
                    (r[i] = s);
                }
                return r;
              })(t.props, this, this.props),
            (this.key = t.key ? t.key.key : D("plugin"));
        }
        getState(t) {
          return t[this.key];
        }
      }
      let A = Object.create(null);
      function D(t) {
        return t in A ? t + "$" + ++A[t] : ((A[t] = 0), t + "$");
      }
      class E {
        constructor(t = "key") {
          this.key = D(t);
        }
        get(t) {
          return t.config.pluginsByKey[this.key];
        }
        getState(t) {
          return t[this.key];
        }
      }
    },
    27748: function (t, e, n) {
      n.d(e, {
        Ax: function () {
          return C;
        },
        FC: function () {
          return g;
        },
        Mn: function () {
          return b;
        },
        Pu: function () {
          return m;
        },
        dR: function () {
          return v;
        },
        k9: function () {
          return y;
        },
        nd: function () {
          return x;
        },
        nj: function () {
          return w;
        },
        vs: function () {
          return o;
        },
        wx: function () {
          return B;
        },
      });
      var r = n(79134);
      class i {
        constructor(t, e, n) {
          (this.pos = t), (this.delInfo = e), (this.recover = n);
        }
        get deleted() {
          return (8 & this.delInfo) > 0;
        }
        get deletedBefore() {
          return (5 & this.delInfo) > 0;
        }
        get deletedAfter() {
          return (6 & this.delInfo) > 0;
        }
        get deletedAcross() {
          return (4 & this.delInfo) > 0;
        }
      }
      class s {
        constructor(t, e = !1) {
          if (((this.ranges = t), (this.inverted = e), !t.length && s.empty))
            return s.empty;
        }
        recover(t) {
          let e = 0,
            n = 65535 & t;
          if (!this.inverted)
            for (let t = 0; t < n; t++)
              e += this.ranges[3 * t + 2] - this.ranges[3 * t + 1];
          return this.ranges[3 * n] + e + (t - (65535 & t)) / 65536;
        }
        mapResult(t, e = 1) {
          return this._map(t, e, !1);
        }
        map(t, e = 1) {
          return this._map(t, e, !0);
        }
        _map(t, e, n) {
          let r = 0,
            s = this.inverted ? 2 : 1,
            o = this.inverted ? 1 : 2;
          for (let l = 0; l < this.ranges.length; l += 3) {
            let a = this.ranges[l] - (this.inverted ? r : 0);
            if (a > t) break;
            let u = this.ranges[l + s],
              h = this.ranges[l + o],
              c = a + u;
            if (t <= c) {
              let s = u ? (t == a ? -1 : t == c ? 1 : e) : e,
                o = a + r + (s < 0 ? 0 : h);
              if (n) return o;
              let p = t == (e < 0 ? a : c) ? null : l / 3 + (t - a) * 65536,
                d = t == a ? 2 : t == c ? 1 : 4;
              return (e < 0 ? t != a : t != c) && (d |= 8), new i(o, d, p);
            }
            r += h - u;
          }
          return n ? t + r : new i(t + r, 0, null);
        }
        touches(t, e) {
          let n = 0,
            r = 65535 & e,
            i = this.inverted ? 2 : 1,
            s = this.inverted ? 1 : 2;
          for (let e = 0; e < this.ranges.length; e += 3) {
            let o = this.ranges[e] - (this.inverted ? n : 0);
            if (o > t) break;
            let l = this.ranges[e + i];
            if (t <= o + l && e == 3 * r) return !0;
            n += this.ranges[e + s] - l;
          }
          return !1;
        }
        forEach(t) {
          let e = this.inverted ? 2 : 1,
            n = this.inverted ? 1 : 2;
          for (let r = 0, i = 0; r < this.ranges.length; r += 3) {
            let s = this.ranges[r],
              o = s - (this.inverted ? i : 0),
              l = s + (this.inverted ? 0 : i),
              a = this.ranges[r + e],
              u = this.ranges[r + n];
            t(o, o + a, l, l + u), (i += u - a);
          }
        }
        invert() {
          return new s(this.ranges, !this.inverted);
        }
        toString() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
        static offset(t) {
          return 0 == t ? s.empty : new s(t < 0 ? [0, -t, 0] : [0, 0, t]);
        }
      }
      s.empty = new s([]);
      class o {
        constructor(t = [], e, n = 0, r = t.length) {
          (this.maps = t), (this.mirror = e), (this.from = n), (this.to = r);
        }
        slice(t = 0, e = this.maps.length) {
          return new o(this.maps, this.mirror, t, e);
        }
        copy() {
          return new o(
            this.maps.slice(),
            this.mirror && this.mirror.slice(),
            this.from,
            this.to
          );
        }
        appendMap(t, e) {
          (this.to = this.maps.push(t)),
            null != e && this.setMirror(this.maps.length - 1, e);
        }
        appendMapping(t) {
          for (let e = 0, n = this.maps.length; e < t.maps.length; e++) {
            let r = t.getMirror(e);
            this.appendMap(t.maps[e], null != r && r < e ? n + r : void 0);
          }
        }
        getMirror(t) {
          if (this.mirror) {
            for (let e = 0; e < this.mirror.length; e++)
              if (this.mirror[e] == t) return this.mirror[e + (e % 2 ? -1 : 1)];
          }
        }
        setMirror(t, e) {
          this.mirror || (this.mirror = []), this.mirror.push(t, e);
        }
        appendMappingInverted(t) {
          for (
            let e = t.maps.length - 1, n = this.maps.length + t.maps.length;
            e >= 0;
            e--
          ) {
            let r = t.getMirror(e);
            this.appendMap(
              t.maps[e].invert(),
              null != r && r > e ? n - r - 1 : void 0
            );
          }
        }
        invert() {
          let t = new o();
          return t.appendMappingInverted(this), t;
        }
        map(t, e = 1) {
          if (this.mirror) return this._map(t, e, !0);
          for (let n = this.from; n < this.to; n++) t = this.maps[n].map(t, e);
          return t;
        }
        mapResult(t, e = 1) {
          return this._map(t, e, !1);
        }
        _map(t, e, n) {
          let r = 0;
          for (let n = this.from; n < this.to; n++) {
            let i = this.maps[n].mapResult(t, e);
            if (null != i.recover) {
              let e = this.getMirror(n);
              if (null != e && e > n && e < this.to) {
                (n = e), (t = this.maps[e].recover(i.recover));
                continue;
              }
            }
            (r |= i.delInfo), (t = i.pos);
          }
          return n ? t : new i(t, r, null);
        }
      }
      let l = Object.create(null);
      class a {
        getMap() {
          return s.empty;
        }
        merge(t) {
          return null;
        }
        static fromJSON(t, e) {
          if (!e || !e.stepType)
            throw RangeError("Invalid input for Step.fromJSON");
          let n = l[e.stepType];
          if (!n) throw RangeError(`No step type ${e.stepType} defined`);
          return n.fromJSON(t, e);
        }
        static jsonID(t, e) {
          if (t in l) throw RangeError("Duplicate use of step JSON ID " + t);
          return (l[t] = e), (e.prototype.jsonID = t), e;
        }
      }
      class u {
        constructor(t, e) {
          (this.doc = t), (this.failed = e);
        }
        static ok(t) {
          return new u(t, null);
        }
        static fail(t) {
          return new u(null, t);
        }
        static fromReplace(t, e, n, i) {
          try {
            return u.ok(t.replace(e, n, i));
          } catch (t) {
            if (t instanceof r.e4) return u.fail(t.message);
            throw t;
          }
        }
      }
      function h(t, e, n) {
        let i = [];
        for (let r = 0; r < t.childCount; r++) {
          let s = t.child(r);
          s.content.size && (s = s.copy(h(s.content, e, s))),
            s.isInline && (s = e(s, n, r)),
            i.push(s);
        }
        return r.HY.fromArray(i);
      }
      class c extends a {
        constructor(t, e, n) {
          super(), (this.from = t), (this.to = e), (this.mark = n);
        }
        apply(t) {
          let e = t.slice(this.from, this.to),
            n = t.resolve(this.from),
            i = n.node(n.sharedDepth(this.to)),
            s = new r.p2(
              h(
                e.content,
                (t, e) =>
                  t.isAtom && e.type.allowsMarkType(this.mark.type)
                    ? t.mark(this.mark.addToSet(t.marks))
                    : t,
                i
              ),
              e.openStart,
              e.openEnd
            );
          return u.fromReplace(t, this.from, this.to, s);
        }
        invert() {
          return new p(this.from, this.to, this.mark);
        }
        map(t) {
          let e = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return (e.deleted && n.deleted) || e.pos >= n.pos
            ? null
            : new c(e.pos, n.pos, this.mark);
        }
        merge(t) {
          return t instanceof c &&
            t.mark.eq(this.mark) &&
            this.from <= t.to &&
            this.to >= t.from
            ? new c(
                Math.min(this.from, t.from),
                Math.max(this.to, t.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.from || "number" != typeof e.to)
            throw RangeError("Invalid input for AddMarkStep.fromJSON");
          return new c(e.from, e.to, t.markFromJSON(e.mark));
        }
      }
      a.jsonID("addMark", c);
      class p extends a {
        constructor(t, e, n) {
          super(), (this.from = t), (this.to = e), (this.mark = n);
        }
        apply(t) {
          let e = t.slice(this.from, this.to),
            n = new r.p2(
              h(e.content, (t) => t.mark(this.mark.removeFromSet(t.marks)), t),
              e.openStart,
              e.openEnd
            );
          return u.fromReplace(t, this.from, this.to, n);
        }
        invert() {
          return new c(this.from, this.to, this.mark);
        }
        map(t) {
          let e = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return (e.deleted && n.deleted) || e.pos >= n.pos
            ? null
            : new p(e.pos, n.pos, this.mark);
        }
        merge(t) {
          return t instanceof p &&
            t.mark.eq(this.mark) &&
            this.from <= t.to &&
            this.to >= t.from
            ? new p(
                Math.min(this.from, t.from),
                Math.max(this.to, t.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.from || "number" != typeof e.to)
            throw RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new p(e.from, e.to, t.markFromJSON(e.mark));
        }
      }
      a.jsonID("removeMark", p);
      class d extends a {
        constructor(t, e) {
          super(), (this.pos = t), (this.mark = e);
        }
        apply(t) {
          let e = t.nodeAt(this.pos);
          if (!e) return u.fail("No node at mark step's position");
          let n = e.type.create(e.attrs, null, this.mark.addToSet(e.marks));
          return u.fromReplace(
            t,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(n), 0, e.isLeaf ? 0 : 1)
          );
        }
        invert(t) {
          let e = t.nodeAt(this.pos);
          if (e) {
            let t = this.mark.addToSet(e.marks);
            if (t.length == e.marks.length) {
              for (let n = 0; n < e.marks.length; n++)
                if (!e.marks[n].isInSet(t)) return new d(this.pos, e.marks[n]);
              return new d(this.pos, this.mark);
            }
          }
          return new f(this.pos, this.mark);
        }
        map(t) {
          let e = t.mapResult(this.pos, 1);
          return e.deletedAfter ? null : new d(e.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.pos)
            throw RangeError("Invalid input for AddNodeMarkStep.fromJSON");
          return new d(e.pos, t.markFromJSON(e.mark));
        }
      }
      a.jsonID("addNodeMark", d);
      class f extends a {
        constructor(t, e) {
          super(), (this.pos = t), (this.mark = e);
        }
        apply(t) {
          let e = t.nodeAt(this.pos);
          if (!e) return u.fail("No node at mark step's position");
          let n = e.type.create(
            e.attrs,
            null,
            this.mark.removeFromSet(e.marks)
          );
          return u.fromReplace(
            t,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(n), 0, e.isLeaf ? 0 : 1)
          );
        }
        invert(t) {
          let e = t.nodeAt(this.pos);
          return e && this.mark.isInSet(e.marks)
            ? new d(this.pos, this.mark)
            : this;
        }
        map(t) {
          let e = t.mapResult(this.pos, 1);
          return e.deletedAfter ? null : new f(e.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.pos)
            throw RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
          return new f(e.pos, t.markFromJSON(e.mark));
        }
      }
      a.jsonID("removeNodeMark", f);
      class m extends a {
        constructor(t, e, n, r = !1) {
          super(),
            (this.from = t),
            (this.to = e),
            (this.slice = n),
            (this.structure = r);
        }
        apply(t) {
          return this.structure && k(t, this.from, this.to)
            ? u.fail("Structure replace would overwrite content")
            : u.fromReplace(t, this.from, this.to, this.slice);
        }
        getMap() {
          return new s([this.from, this.to - this.from, this.slice.size]);
        }
        invert(t) {
          return new m(
            this.from,
            this.from + this.slice.size,
            t.slice(this.from, this.to)
          );
        }
        map(t) {
          let e = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1);
          return e.deletedAcross && n.deletedAcross
            ? null
            : new m(e.pos, Math.max(e.pos, n.pos), this.slice);
        }
        merge(t) {
          if (!(t instanceof m) || t.structure || this.structure) return null;
          if (
            this.from + this.slice.size != t.from ||
            this.slice.openEnd ||
            t.slice.openStart
          ) {
            if (t.to != this.from || this.slice.openStart || t.slice.openEnd)
              return null;
            {
              let e =
                this.slice.size + t.slice.size == 0
                  ? r.p2.empty
                  : new r.p2(
                      t.slice.content.append(this.slice.content),
                      t.slice.openStart,
                      this.slice.openEnd
                    );
              return new m(t.from, this.to, e, this.structure);
            }
          }
          {
            let e =
              this.slice.size + t.slice.size == 0
                ? r.p2.empty
                : new r.p2(
                    this.slice.content.append(t.slice.content),
                    this.slice.openStart,
                    t.slice.openEnd
                  );
            return new m(
              this.from,
              this.to + (t.to - t.from),
              e,
              this.structure
            );
          }
        }
        toJSON() {
          let t = { stepType: "replace", from: this.from, to: this.to };
          return (
            this.slice.size && (t.slice = this.slice.toJSON()),
            this.structure && (t.structure = !0),
            t
          );
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.from || "number" != typeof e.to)
            throw RangeError("Invalid input for ReplaceStep.fromJSON");
          return new m(e.from, e.to, r.p2.fromJSON(t, e.slice), !!e.structure);
        }
      }
      a.jsonID("replace", m);
      class g extends a {
        constructor(t, e, n, r, i, s, o = !1) {
          super(),
            (this.from = t),
            (this.to = e),
            (this.gapFrom = n),
            (this.gapTo = r),
            (this.slice = i),
            (this.insert = s),
            (this.structure = o);
        }
        apply(t) {
          if (
            this.structure &&
            (k(t, this.from, this.gapFrom) || k(t, this.gapTo, this.to))
          )
            return u.fail("Structure gap-replace would overwrite content");
          let e = t.slice(this.gapFrom, this.gapTo);
          if (e.openStart || e.openEnd)
            return u.fail("Gap is not a flat range");
          let n = this.slice.insertAt(this.insert, e.content);
          return n
            ? u.fromReplace(t, this.from, this.to, n)
            : u.fail("Content does not fit in gap");
        }
        getMap() {
          return new s([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert,
          ]);
        }
        invert(t) {
          let e = this.gapTo - this.gapFrom;
          return new g(
            this.from,
            this.from + this.slice.size + e,
            this.from + this.insert,
            this.from + this.insert + e,
            t
              .slice(this.from, this.to)
              .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
            this.gapFrom - this.from,
            this.structure
          );
        }
        map(t) {
          let e = t.mapResult(this.from, 1),
            n = t.mapResult(this.to, -1),
            r = t.map(this.gapFrom, -1),
            i = t.map(this.gapTo, 1);
          return (e.deletedAcross && n.deletedAcross) || r < e.pos || i > n.pos
            ? null
            : new g(
                e.pos,
                n.pos,
                r,
                i,
                this.slice,
                this.insert,
                this.structure
              );
        }
        toJSON() {
          let t = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert,
          };
          return (
            this.slice.size && (t.slice = this.slice.toJSON()),
            this.structure && (t.structure = !0),
            t
          );
        }
        static fromJSON(t, e) {
          if (
            "number" != typeof e.from ||
            "number" != typeof e.to ||
            "number" != typeof e.gapFrom ||
            "number" != typeof e.gapTo ||
            "number" != typeof e.insert
          )
            throw RangeError("Invalid input for ReplaceAroundStep.fromJSON");
          return new g(
            e.from,
            e.to,
            e.gapFrom,
            e.gapTo,
            r.p2.fromJSON(t, e.slice),
            e.insert,
            !!e.structure
          );
        }
      }
      function k(t, e, n) {
        let r = t.resolve(e),
          i = n - e,
          s = r.depth;
        for (; i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount; )
          s--, i--;
        if (i > 0) {
          let t = r.node(s).maybeChild(r.indexAfter(s));
          for (; i > 0; ) {
            if (!t || t.isLeaf) return !0;
            (t = t.firstChild), i--;
          }
        }
        return !1;
      }
      function y(t) {
        let e = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
        for (let n = t.depth; ; --n) {
          let r = t.$from.node(n),
            i = t.$from.index(n),
            s = t.$to.indexAfter(n);
          if (n < t.depth && r.canReplace(i, s, e)) return n;
          if (
            0 == n ||
            r.type.spec.isolating ||
            !(
              (0 == i || r.canReplace(i, r.childCount)) &&
              (s == r.childCount || r.canReplace(0, s))
            )
          )
            break;
        }
        return null;
      }
      function x(t, e, n = null, r = t) {
        let i = (function (t, e) {
            let { parent: n, startIndex: r, endIndex: i } = t,
              s = n.contentMatchAt(r).findWrapping(e);
            if (!s) return null;
            let o = s.length ? s[0] : e;
            return n.canReplaceWith(r, i, o) ? s : null;
          })(t, e),
          s =
            i &&
            (function (t, e) {
              let { parent: n, startIndex: r, endIndex: i } = t,
                s = n.child(r),
                o = e.contentMatch.findWrapping(s.type);
              if (!o) return null;
              let l = (o.length ? o[o.length - 1] : e).contentMatch;
              for (let t = r; l && t < i; t++) l = l.matchType(n.child(t).type);
              return l && l.validEnd ? o : null;
            })(r, e);
        return s
          ? i.map(_).concat({ type: e, attrs: n }).concat(s.map(_))
          : null;
      }
      function _(t) {
        return { type: t, attrs: null };
      }
      function C(t, e, n = 1, r) {
        let i = t.resolve(e),
          s = i.depth - n,
          o = (r && r[r.length - 1]) || i.parent;
        if (
          s < 0 ||
          i.parent.type.spec.isolating ||
          !i.parent.canReplace(i.index(), i.parent.childCount) ||
          !o.type.validContent(
            i.parent.content.cutByIndex(i.index(), i.parent.childCount)
          )
        )
          return !1;
        for (let t = i.depth - 1, e = n - 2; t > s; t--, e--) {
          let n = i.node(t),
            s = i.index(t);
          if (n.type.spec.isolating) return !1;
          let o = n.content.cutByIndex(s, n.childCount),
            l = r && r[e + 1];
          l && (o = o.replaceChild(0, l.type.create(l.attrs)));
          let a = (r && r[e]) || n;
          if (!n.canReplace(s + 1, n.childCount) || !a.type.validContent(o))
            return !1;
        }
        let l = i.indexAfter(s),
          a = r && r[0];
        return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type);
      }
      function b(t, e) {
        var n, r;
        let i = t.resolve(e),
          s = i.index();
        return (
          (n = i.nodeBefore),
          (r = i.nodeAfter),
          !!(n && r && !n.isLeaf && n.canAppend(r)) &&
            i.parent.canReplace(s, s + 1)
        );
      }
      function w(t, e, n) {
        let r = t.resolve(e);
        if (!n.content.size) return e;
        let i = n.content;
        for (let t = 0; t < n.openStart; t++) i = i.firstChild.content;
        for (let t = 1; t <= (0 == n.openStart && n.size ? 2 : 1); t++)
          for (let e = r.depth; e >= 0; e--) {
            let n =
                e == r.depth
                  ? 0
                  : r.pos <= (r.start(e + 1) + r.end(e + 1)) / 2
                    ? -1
                    : 1,
              s = r.index(e) + (n > 0 ? 1 : 0),
              o = r.node(e),
              l = !1;
            if (1 == t) l = o.canReplace(s, s, i);
            else {
              let t = o.contentMatchAt(s).findWrapping(i.firstChild.type);
              l = t && o.canReplaceWith(s, s, t[0]);
            }
            if (l)
              return 0 == n ? r.pos : n < 0 ? r.before(e + 1) : r.after(e + 1);
          }
        return null;
      }
      function v(t, e, n = e, i = r.p2.empty) {
        if (e == n && !i.size) return null;
        let s = t.resolve(e),
          o = t.resolve(n);
        return A(s, o, i) ? new m(e, n, i) : new D(s, o, i).fit();
      }
      function A(t, e, n) {
        return (
          !n.openStart &&
          !n.openEnd &&
          t.start() == e.start() &&
          t.parent.canReplace(t.index(), e.index(), n.content)
        );
      }
      a.jsonID("replaceAround", g);
      class D {
        constructor(t, e, n) {
          (this.$from = t),
            (this.$to = e),
            (this.unplaced = n),
            (this.frontier = []),
            (this.placed = r.HY.empty);
          for (let e = 0; e <= t.depth; e++) {
            let n = t.node(e);
            this.frontier.push({
              type: n.type,
              match: n.contentMatchAt(t.indexAfter(e)),
            });
          }
          for (let e = t.depth; e > 0; e--)
            this.placed = r.HY.from(t.node(e).copy(this.placed));
        }
        get depth() {
          return this.frontier.length - 1;
        }
        fit() {
          for (; this.unplaced.size; ) {
            let t = this.findFittable();
            t ? this.placeNodes(t) : this.openMore() || this.dropNode();
          }
          let t = this.mustMoveInline(),
            e = this.placed.size - this.depth - this.$from.depth,
            n = this.$from,
            i = this.close(t < 0 ? this.$to : n.doc.resolve(t));
          if (!i) return null;
          let s = this.placed,
            o = n.depth,
            l = i.depth;
          for (; o && l && 1 == s.childCount; )
            (s = s.firstChild.content), o--, l--;
          let a = new r.p2(s, o, l);
          return t > -1
            ? new g(n.pos, t, this.$to.pos, this.$to.end(), a, e)
            : a.size || n.pos != this.$to.pos
              ? new m(n.pos, i.pos, a)
              : null;
        }
        findFittable() {
          let t = this.unplaced.openStart;
          for (
            let e = this.unplaced.content, n = 0, r = this.unplaced.openEnd;
            n < t;
            n++
          ) {
            let i = e.firstChild;
            if (
              (e.childCount > 1 && (r = 0), i.type.spec.isolating && r <= n)
            ) {
              t = n;
              break;
            }
            e = i.content;
          }
          for (let e = 1; e <= 2; e++)
            for (let n = 1 == e ? t : this.unplaced.openStart; n >= 0; n--) {
              let t = null,
                i = (
                  n
                    ? (t = F(this.unplaced.content, n - 1).firstChild).content
                    : this.unplaced.content
                ).firstChild;
              for (let s = this.depth; s >= 0; s--) {
                let { type: o, match: l } = this.frontier[s],
                  a,
                  u = null;
                if (
                  1 == e &&
                  (i
                    ? l.matchType(i.type) ||
                      (u = l.fillBefore(r.HY.from(i), !1))
                    : t && o.compatibleContent(t.type))
                )
                  return {
                    sliceDepth: n,
                    frontierDepth: s,
                    parent: t,
                    inject: u,
                  };
                if (2 == e && i && (a = l.findWrapping(i.type)))
                  return {
                    sliceDepth: n,
                    frontierDepth: s,
                    parent: t,
                    wrap: a,
                  };
                if (t && l.matchType(t.type)) break;
              }
            }
        }
        openMore() {
          let { content: t, openStart: e, openEnd: n } = this.unplaced,
            i = F(t, e);
          return (
            !!i.childCount &&
            !i.firstChild.isLeaf &&
            ((this.unplaced = new r.p2(
              t,
              e + 1,
              Math.max(n, i.size + e >= t.size - n ? e + 1 : 0)
            )),
            !0)
          );
        }
        dropNode() {
          let { content: t, openStart: e, openEnd: n } = this.unplaced,
            i = F(t, e);
          if (i.childCount <= 1 && e > 0) {
            let s = t.size - e <= e + i.size;
            this.unplaced = new r.p2(E(t, e - 1, 1), e - 1, s ? e - 1 : n);
          } else this.unplaced = new r.p2(E(t, e, 1), e, n);
        }
        placeNodes({
          sliceDepth: t,
          frontierDepth: e,
          parent: n,
          inject: i,
          wrap: s,
        }) {
          for (; this.depth > e; ) this.closeFrontierNode();
          if (s) for (let t = 0; t < s.length; t++) this.openFrontierNode(s[t]);
          let o = this.unplaced,
            l = n ? n.content : o.content,
            a = o.openStart - t,
            u = 0,
            h = [],
            { match: c, type: p } = this.frontier[e];
          if (i) {
            for (let t = 0; t < i.childCount; t++) h.push(i.child(t));
            c = c.matchFragment(i);
          }
          let d = l.size + t - (o.content.size - o.openEnd);
          for (; u < l.childCount; ) {
            let t = l.child(u),
              e = c.matchType(t.type);
            if (!e) break;
            (++u > 1 || 0 == a || t.content.size) &&
              ((c = e),
              h.push(
                (function t(e, n, i) {
                  if (n <= 0) return e;
                  let s = e.content;
                  return (
                    n > 1 &&
                      (s = s.replaceChild(
                        0,
                        t(s.firstChild, n - 1, 1 == s.childCount ? i - 1 : 0)
                      )),
                    n > 0 &&
                      ((s = e.type.contentMatch.fillBefore(s).append(s)),
                      i <= 0 &&
                        (s = s.append(
                          e.type.contentMatch
                            .matchFragment(s)
                            .fillBefore(r.HY.empty, !0)
                        ))),
                    e.copy(s)
                  );
                })(
                  t.mark(p.allowedMarks(t.marks)),
                  1 == u ? a : 0,
                  u == l.childCount ? d : -1
                )
              ));
          }
          let f = u == l.childCount;
          f || (d = -1),
            (this.placed = S(this.placed, e, r.HY.from(h))),
            (this.frontier[e].match = c),
            f &&
              d < 0 &&
              n &&
              n.type == this.frontier[this.depth].type &&
              this.frontier.length > 1 &&
              this.closeFrontierNode();
          for (let t = 0, e = l; t < d; t++) {
            let t = e.lastChild;
            this.frontier.push({
              type: t.type,
              match: t.contentMatchAt(t.childCount),
            }),
              (e = t.content);
          }
          this.unplaced = f
            ? 0 == t
              ? r.p2.empty
              : new r.p2(
                  E(o.content, t - 1, 1),
                  t - 1,
                  d < 0 ? o.openEnd : t - 1
                )
            : new r.p2(E(o.content, t, u), o.openStart, o.openEnd);
        }
        mustMoveInline() {
          if (!this.$to.parent.isTextblock) return -1;
          let t = this.frontier[this.depth],
            e;
          if (
            !t.type.isTextblock ||
            !M(this.$to, this.$to.depth, t.type, t.match, !1) ||
            (this.$to.depth == this.depth &&
              (e = this.findCloseLevel(this.$to)) &&
              e.depth == this.depth)
          )
            return -1;
          let { depth: n } = this.$to,
            r = this.$to.after(n);
          for (; n > 1 && r == this.$to.end(--n); ) ++r;
          return r;
        }
        findCloseLevel(t) {
          n: for (let e = Math.min(this.depth, t.depth); e >= 0; e--) {
            let { match: n, type: r } = this.frontier[e],
              i = e < t.depth && t.end(e + 1) == t.pos + (t.depth - (e + 1)),
              s = M(t, e, r, n, i);
            if (s) {
              for (let n = e - 1; n >= 0; n--) {
                let { match: e, type: r } = this.frontier[n],
                  i = M(t, n, r, e, !0);
                if (!i || i.childCount) continue n;
              }
              return {
                depth: e,
                fit: s,
                move: i ? t.doc.resolve(t.after(e + 1)) : t,
              };
            }
          }
        }
        close(t) {
          let e = this.findCloseLevel(t);
          if (!e) return null;
          for (; this.depth > e.depth; ) this.closeFrontierNode();
          e.fit.childCount && (this.placed = S(this.placed, e.depth, e.fit)),
            (t = e.move);
          for (let n = e.depth + 1; n <= t.depth; n++) {
            let e = t.node(n),
              r = e.type.contentMatch.fillBefore(e.content, !0, t.index(n));
            this.openFrontierNode(e.type, e.attrs, r);
          }
          return t;
        }
        openFrontierNode(t, e = null, n) {
          let i = this.frontier[this.depth];
          (i.match = i.match.matchType(t)),
            (this.placed = S(
              this.placed,
              this.depth,
              r.HY.from(t.create(e, n))
            )),
            this.frontier.push({ type: t, match: t.contentMatch });
        }
        closeFrontierNode() {
          let t = this.frontier.pop().match.fillBefore(r.HY.empty, !0);
          t.childCount &&
            (this.placed = S(this.placed, this.frontier.length, t));
        }
      }
      function E(t, e, n) {
        return 0 == e
          ? t.cutByIndex(n, t.childCount)
          : t.replaceChild(
              0,
              t.firstChild.copy(E(t.firstChild.content, e - 1, n))
            );
      }
      function S(t, e, n) {
        return 0 == e
          ? t.append(n)
          : t.replaceChild(
              t.childCount - 1,
              t.lastChild.copy(S(t.lastChild.content, e - 1, n))
            );
      }
      function F(t, e) {
        for (let n = 0; n < e; n++) t = t.firstChild.content;
        return t;
      }
      function M(t, e, n, r, i) {
        let s = t.node(e),
          o = i ? t.indexAfter(e) : t.index(e);
        if (o == s.childCount && !n.compatibleContent(s.type)) return null;
        let l = r.fillBefore(s.content, !0, o);
        return l &&
          !(function (t, e, n) {
            for (let r = n; r < e.childCount; r++)
              if (!t.allowsMarks(e.child(r).marks)) return !0;
            return !1;
          })(n, s.content, o)
          ? l
          : null;
      }
      function T(t, e) {
        let n = [],
          r = Math.min(t.depth, e.depth);
        for (let i = r; i >= 0; i--) {
          let r = t.start(i);
          if (
            r < t.pos - (t.depth - i) ||
            e.end(i) > e.pos + (e.depth - i) ||
            t.node(i).type.spec.isolating ||
            e.node(i).type.spec.isolating
          )
            break;
          (r == e.start(i) ||
            (i == t.depth &&
              i == e.depth &&
              t.parent.inlineContent &&
              e.parent.inlineContent &&
              i &&
              e.start(i - 1) == r - 1)) &&
            n.push(i);
        }
        return n;
      }
      class I extends a {
        constructor(t, e, n) {
          super(), (this.pos = t), (this.attr = e), (this.value = n);
        }
        apply(t) {
          let e = t.nodeAt(this.pos);
          if (!e) return u.fail("No node at attribute step's position");
          let n = Object.create(null);
          for (let t in e.attrs) n[t] = e.attrs[t];
          n[this.attr] = this.value;
          let i = e.type.create(n, null, e.marks);
          return u.fromReplace(
            t,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(i), 0, e.isLeaf ? 0 : 1)
          );
        }
        getMap() {
          return s.empty;
        }
        invert(t) {
          return new I(
            this.pos,
            this.attr,
            t.nodeAt(this.pos).attrs[this.attr]
          );
        }
        map(t) {
          let e = t.mapResult(this.pos, 1);
          return e.deletedAfter ? null : new I(e.pos, this.attr, this.value);
        }
        toJSON() {
          return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value,
          };
        }
        static fromJSON(t, e) {
          if ("number" != typeof e.pos || "string" != typeof e.attr)
            throw RangeError("Invalid input for AttrStep.fromJSON");
          return new I(e.pos, e.attr, e.value);
        }
      }
      a.jsonID("attr", I);
      class z extends a {
        constructor(t, e) {
          super(), (this.attr = t), (this.value = e);
        }
        apply(t) {
          let e = Object.create(null);
          for (let n in t.attrs) e[n] = t.attrs[n];
          e[this.attr] = this.value;
          let n = t.type.create(e, t.content, t.marks);
          return u.ok(n);
        }
        getMap() {
          return s.empty;
        }
        invert(t) {
          return new z(this.attr, t.attrs[this.attr]);
        }
        map(t) {
          return this;
        }
        toJSON() {
          return { stepType: "docAttr", attr: this.attr, value: this.value };
        }
        static fromJSON(t, e) {
          if ("string" != typeof e.attr)
            throw RangeError("Invalid input for DocAttrStep.fromJSON");
          return new z(e.attr, e.value);
        }
      }
      a.jsonID("docAttr", z);
      let O = class extends Error {};
      ((O = function t(e) {
        let n = Error.call(this, e);
        return (n.__proto__ = t.prototype), n;
      }).prototype = Object.create(Error.prototype)),
        (O.prototype.constructor = O),
        (O.prototype.name = "TransformError");
      class B {
        constructor(t) {
          (this.doc = t),
            (this.steps = []),
            (this.docs = []),
            (this.mapping = new o());
        }
        get before() {
          return this.docs.length ? this.docs[0] : this.doc;
        }
        step(t) {
          let e = this.maybeStep(t);
          if (e.failed) throw new O(e.failed);
          return this;
        }
        maybeStep(t) {
          let e = t.apply(this.doc);
          return e.failed || this.addStep(t, e.doc), e;
        }
        get docChanged() {
          return this.steps.length > 0;
        }
        addStep(t, e) {
          this.docs.push(this.doc),
            this.steps.push(t),
            this.mapping.appendMap(t.getMap()),
            (this.doc = e);
        }
        replace(t, e = t, n = r.p2.empty) {
          let i = v(this.doc, t, e, n);
          return i && this.step(i), this;
        }
        replaceWith(t, e, n) {
          return this.replace(t, e, new r.p2(r.HY.from(n), 0, 0));
        }
        delete(t, e) {
          return this.replace(t, e, r.p2.empty);
        }
        insert(t, e) {
          return this.replaceWith(t, t, e);
        }
        replaceRange(t, e, n) {
          return (
            !(function (t, e, n, i) {
              if (!i.size) return t.deleteRange(e, n);
              let s = t.doc.resolve(e),
                o = t.doc.resolve(n);
              if (A(s, o, i)) return t.step(new m(e, n, i));
              let l = T(s, t.doc.resolve(n));
              0 == l[l.length - 1] && l.pop();
              let a = -(s.depth + 1);
              l.unshift(a);
              for (let t = s.depth, e = s.pos - 1; t > 0; t--, e--) {
                let n = s.node(t).type.spec;
                if (n.defining || n.definingAsContext || n.isolating) break;
                l.indexOf(t) > -1
                  ? (a = t)
                  : s.before(t) == e && l.splice(1, 0, -t);
              }
              let u = l.indexOf(a),
                h = [],
                c = i.openStart;
              for (let t = i.content, e = 0; ; e++) {
                let n = t.firstChild;
                if ((h.push(n), e == i.openStart)) break;
                t = n.content;
              }
              for (let t = c - 1; t >= 0; t--) {
                var p;
                let e = h[t],
                  n = (p = e.type).spec.defining || p.spec.definingForContent;
                if (n && !e.sameMarkup(s.node(Math.abs(a) - 1))) c = t;
                else if (n || !e.type.isTextblock) break;
              }
              for (let e = i.openStart; e >= 0; e--) {
                let a = (e + c + 1) % (i.openStart + 1),
                  p = h[a];
                if (p)
                  for (let e = 0; e < l.length; e++) {
                    let h = l[(e + u) % l.length],
                      c = !0;
                    h < 0 && ((c = !1), (h = -h));
                    let d = s.node(h - 1),
                      f = s.index(h - 1);
                    if (d.canReplaceWith(f, f, p.type, p.marks))
                      return t.replace(
                        s.before(h),
                        c ? o.after(h) : n,
                        new r.p2(
                          (function t(e, n, i, s, o) {
                            if (n < i) {
                              let r = e.firstChild;
                              e = e.replaceChild(
                                0,
                                r.copy(t(r.content, n + 1, i, s, r))
                              );
                            }
                            if (n > s) {
                              let t = o.contentMatchAt(0),
                                n = t.fillBefore(e).append(e);
                              e = n.append(
                                t.matchFragment(n).fillBefore(r.HY.empty, !0)
                              );
                            }
                            return e;
                          })(i.content, 0, i.openStart, a),
                          a,
                          i.openEnd
                        )
                      );
                  }
              }
              let d = t.steps.length;
              for (
                let r = l.length - 1;
                r >= 0 && (t.replace(e, n, i), !(t.steps.length > d));
                r--
              ) {
                let t = l[r];
                t < 0 || ((e = s.before(t)), (n = o.after(t)));
              }
            })(this, t, e, n),
            this
          );
        }
        replaceRangeWith(t, e, n) {
          return (
            !(function (t, e, n, i) {
              if (
                !i.isInline &&
                e == n &&
                t.doc.resolve(e).parent.content.size
              ) {
                let r = (function (t, e, n) {
                  let r = t.resolve(e);
                  if (r.parent.canReplaceWith(r.index(), r.index(), n))
                    return e;
                  if (0 == r.parentOffset)
                    for (let t = r.depth - 1; t >= 0; t--) {
                      let e = r.index(t);
                      if (r.node(t).canReplaceWith(e, e, n))
                        return r.before(t + 1);
                      if (e > 0) return null;
                    }
                  if (r.parentOffset == r.parent.content.size)
                    for (let t = r.depth - 1; t >= 0; t--) {
                      let e = r.indexAfter(t);
                      if (r.node(t).canReplaceWith(e, e, n))
                        return r.after(t + 1);
                      if (e < r.node(t).childCount) break;
                    }
                  return null;
                })(t.doc, e, i.type);
                null != r && (e = n = r);
              }
              t.replaceRange(e, n, new r.p2(r.HY.from(i), 0, 0));
            })(this, t, e, n),
            this
          );
        }
        deleteRange(t, e) {
          return (
            !(function (t, e, n) {
              let r = t.doc.resolve(e),
                i = t.doc.resolve(n),
                s = T(r, i);
              for (let e = 0; e < s.length; e++) {
                let n = s[e],
                  o = e == s.length - 1;
                if ((o && 0 == n) || r.node(n).type.contentMatch.validEnd)
                  return t.delete(r.start(n), i.end(n));
                if (
                  n > 0 &&
                  (o ||
                    r
                      .node(n - 1)
                      .canReplace(r.index(n - 1), i.indexAfter(n - 1)))
                )
                  return t.delete(r.before(n), i.after(n));
              }
              for (let s = 1; s <= r.depth && s <= i.depth; s++)
                if (
                  e - r.start(s) == r.depth - s &&
                  n > r.end(s) &&
                  i.end(s) - n != i.depth - s
                )
                  return t.delete(r.before(s), n);
              t.delete(e, n);
            })(this, t, e),
            this
          );
        }
        lift(t, e) {
          return (
            !(function (t, e, n) {
              let { $from: i, $to: s, depth: o } = e,
                l = i.before(o + 1),
                a = s.after(o + 1),
                u = l,
                h = a,
                c = r.HY.empty,
                p = 0;
              for (let t = o, e = !1; t > n; t--)
                e || i.index(t) > 0
                  ? ((e = !0), (c = r.HY.from(i.node(t).copy(c))), p++)
                  : u--;
              let d = r.HY.empty,
                f = 0;
              for (let t = o, e = !1; t > n; t--)
                e || s.after(t + 1) < s.end(t)
                  ? ((e = !0), (d = r.HY.from(s.node(t).copy(d))), f++)
                  : h++;
              t.step(
                new g(u, h, l, a, new r.p2(c.append(d), p, f), c.size - p, !0)
              );
            })(this, t, e),
            this
          );
        }
        join(t, e = 1) {
          return (
            !(function (t, e, n) {
              let i = new m(e - n, e + n, r.p2.empty, !0);
              t.step(i);
            })(this, t, e),
            this
          );
        }
        wrap(t, e) {
          return (
            !(function (t, e, n) {
              let i = r.HY.empty;
              for (let t = n.length - 1; t >= 0; t--) {
                if (i.size) {
                  let e = n[t].type.contentMatch.matchFragment(i);
                  if (!e || !e.validEnd)
                    throw RangeError(
                      "Wrapper type given to Transform.wrap does not form valid content of its parent wrapper"
                    );
                }
                i = r.HY.from(n[t].type.create(n[t].attrs, i));
              }
              let s = e.start,
                o = e.end;
              t.step(new g(s, o, s, o, new r.p2(i, 0, 0), n.length, !0));
            })(this, t, e),
            this
          );
        }
        setBlockType(t, e = t, n, i = null) {
          return (
            !(function (t, e, n, i, s) {
              if (!i.isTextblock)
                throw RangeError(
                  "Type given to setBlockType should be a textblock"
                );
              let o = t.steps.length;
              t.doc.nodesBetween(e, n, (e, n) => {
                var l, a;
                let u, h;
                if (
                  e.isTextblock &&
                  !e.hasMarkup(i, s) &&
                  ((l = t.doc),
                  (a = t.mapping.slice(o).map(n)),
                  (h = (u = l.resolve(a)).index()),
                  u.parent.canReplaceWith(h, h + 1, i))
                ) {
                  t.clearIncompatible(t.mapping.slice(o).map(n, 1), i);
                  let l = t.mapping.slice(o),
                    a = l.map(n, 1),
                    u = l.map(n + e.nodeSize, 1);
                  return (
                    t.step(
                      new g(
                        a,
                        u,
                        a + 1,
                        u - 1,
                        new r.p2(r.HY.from(i.create(s, null, e.marks)), 0, 0),
                        1,
                        !0
                      )
                    ),
                    !1
                  );
                }
              });
            })(this, t, e, n, i),
            this
          );
        }
        setNodeMarkup(t, e, n = null, i) {
          return (
            !(function (t, e, n, i, s) {
              let o = t.doc.nodeAt(e);
              if (!o) throw RangeError("No node at given position");
              n || (n = o.type);
              let l = n.create(i, null, s || o.marks);
              if (o.isLeaf) return t.replaceWith(e, e + o.nodeSize, l);
              if (!n.validContent(o.content))
                throw RangeError("Invalid content for node type " + n.name);
              t.step(
                new g(
                  e,
                  e + o.nodeSize,
                  e + 1,
                  e + o.nodeSize - 1,
                  new r.p2(r.HY.from(l), 0, 0),
                  1,
                  !0
                )
              );
            })(this, t, e, n, i),
            this
          );
        }
        setNodeAttribute(t, e, n) {
          return this.step(new I(t, e, n)), this;
        }
        setDocAttribute(t, e) {
          return this.step(new z(t, e)), this;
        }
        addNodeMark(t, e) {
          return this.step(new d(t, e)), this;
        }
        removeNodeMark(t, e) {
          if (!(e instanceof r.vc)) {
            let n = this.doc.nodeAt(t);
            if (!n) throw RangeError("No node at position " + t);
            if (!(e = e.isInSet(n.marks))) return this;
          }
          return this.step(new f(t, e)), this;
        }
        split(t, e = 1, n) {
          return (
            !(function (t, e, n = 1, i) {
              let s = t.doc.resolve(e),
                o = r.HY.empty,
                l = r.HY.empty;
              for (
                let t = s.depth, e = s.depth - n, a = n - 1;
                t > e;
                t--, a--
              ) {
                o = r.HY.from(s.node(t).copy(o));
                let e = i && i[a];
                l = r.HY.from(
                  e ? e.type.create(e.attrs, l) : s.node(t).copy(l)
                );
              }
              t.step(new m(e, e, new r.p2(o.append(l), n, n), !0));
            })(this, t, e, n),
            this
          );
        }
        addMark(t, e, n) {
          var r;
          let i, s, o, l;
          return (
            (r = this),
            (o = []),
            (l = []),
            r.doc.nodesBetween(t, e, (r, a, u) => {
              if (!r.isInline) return;
              let h = r.marks;
              if (!n.isInSet(h) && u.type.allowsMarkType(n.type)) {
                let u = Math.max(a, t),
                  d = Math.min(a + r.nodeSize, e),
                  f = n.addToSet(h);
                for (let t = 0; t < h.length; t++)
                  h[t].isInSet(f) ||
                    (i && i.to == u && i.mark.eq(h[t])
                      ? (i.to = d)
                      : o.push((i = new p(u, d, h[t]))));
                s && s.to == u ? (s.to = d) : l.push((s = new c(u, d, n)));
              }
            }),
            o.forEach((t) => r.step(t)),
            l.forEach((t) => r.step(t)),
            this
          );
        }
        removeMark(t, e, n) {
          var i;
          let s, o;
          return (
            (i = this),
            (s = []),
            (o = 0),
            i.doc.nodesBetween(t, e, (i, l) => {
              if (!i.isInline) return;
              o++;
              let a = null;
              if (n instanceof r.ZU) {
                let t = i.marks,
                  e;
                for (; (e = n.isInSet(t)); )
                  (a || (a = [])).push(e), (t = e.removeFromSet(t));
              } else n ? n.isInSet(i.marks) && (a = [n]) : (a = i.marks);
              if (a && a.length) {
                let n = Math.min(l + i.nodeSize, e);
                for (let e = 0; e < a.length; e++) {
                  let r = a[e],
                    i;
                  for (let t = 0; t < s.length; t++) {
                    let e = s[t];
                    e.step == o - 1 && r.eq(s[t].style) && (i = e);
                  }
                  i
                    ? ((i.to = n), (i.step = o))
                    : s.push({
                        style: r,
                        from: Math.max(l, t),
                        to: n,
                        step: o,
                      });
                }
              }
            }),
            s.forEach((t) => i.step(new p(t.from, t.to, t.style))),
            this
          );
        }
        clearIncompatible(t, e, n) {
          return (
            !(function (t, e, n, i = n.contentMatch) {
              let s = t.doc.nodeAt(e),
                o = [],
                l = e + 1;
              for (let e = 0; e < s.childCount; e++) {
                let a = s.child(e),
                  u = l + a.nodeSize,
                  h = i.matchType(a.type);
                if (h) {
                  i = h;
                  for (let e = 0; e < a.marks.length; e++)
                    n.allowsMarkType(a.marks[e].type) ||
                      t.step(new p(l, u, a.marks[e]));
                  if (a.isText && !n.spec.code) {
                    let t,
                      e = /\r?\n|\r/g,
                      i;
                    for (; (t = e.exec(a.text)); )
                      i ||
                        (i = new r.p2(
                          r.HY.from(
                            n.schema.text(" ", n.allowedMarks(a.marks))
                          ),
                          0,
                          0
                        )),
                        o.push(
                          new m(l + t.index, l + t.index + t[0].length, i)
                        );
                  }
                } else o.push(new m(l, u, r.p2.empty));
                l = u;
              }
              if (!i.validEnd) {
                let e = i.fillBefore(r.HY.empty, !0);
                t.replace(l, l, new r.p2(e, 0, 0));
              }
              for (let e = o.length - 1; e >= 0; e--) t.step(o[e]);
            })(this, t, e, n),
            this
          );
        }
      }
    },
  },
]);
//# sourceMappingURL=352.0676116c634fae96.js.map