(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [880],
  {
    68039: function (e, n, t) {
      var i = t(790),
        o = t(65064),
        r = t(43735),
        u = t(2428),
        d = t(71701),
        c = t(7757),
        s = t(92403),
        f = t(56868),
        l = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (null == e) return !0;
        if (
          d(e) &&
          (u(e) ||
            "string" == typeof e ||
            "function" == typeof e.splice ||
            c(e) ||
            f(e) ||
            r(e))
        )
          return !e.length;
        var n = o(e);
        if ("[object Map]" == n || "[object Set]" == n) return !e.size;
        if (s(e)) return !i(e).length;
        for (var t in e) if (l.call(e, t)) return !1;
        return !0;
      };
    },
    68952: function (e, n, t) {
      "use strict";
      t.d(n, {
        R: function () {
          return r;
        },
      });
      let i = ["moz", "ms", "o", "webkit"];
      function o(e) {
        return e ? e + "Hidden" : "hidden";
      }
      function r(e) {
        let n = (function () {
            for (let e = 0; e < i.length; e++)
              if (o(i[e]) in document) return i[e];
            return null;
          })(),
          t = (n || "") + "visibilitychange";
        function r(t) {
          return "boolean" == typeof t
            ? t
              ? e.onVisible()
              : e.onHidden()
            : document[o(n)]
              ? e.onHidden()
              : e.onVisible();
        }
        return (
          document.addEventListener(t, r, !1),
          document.addEventListener("focus", e.onVisible, !1),
          document.addEventListener("blur", e.onHidden, !1),
          window.addEventListener("focus", e.onVisible, !1),
          window.addEventListener("blur", e.onHidden, !1),
          () => {
            document.removeEventListener(t, r, !1),
              document.removeEventListener("focus", e.onVisible, !1),
              document.removeEventListener("blur", e.onHidden, !1),
              window.removeEventListener("focus", e.onVisible, !1),
              window.removeEventListener("blur", e.onHidden, !1);
          }
        );
      }
    },
    8143: function (e, n, t) {
      "use strict";
      t.d(n, {
        f: function () {
          return r;
        },
      });
      var i = t(61888),
        o = t(70079);
      function r(e) {
        let { 0: n, 1: t } = (0, o.useState)(null);
        return "function" == typeof e
          ? [
              n,
              (e) => {
                e && t(e);
              },
            ]
          : [e.current, i.noop];
      }
    },
  },
]);
//# sourceMappingURL=880.3d0c76fc8142e491.js.map
