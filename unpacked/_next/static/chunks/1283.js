(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1283],
  {
    68039: function (e, n, t) {
      var i = t(790),
        o = t(65064),
        r = t(43735),
        u = t(2428),
        d = t(71701),
        s = t(7757),
        c = t(92403),
        l = t(56868),
        f = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (null == e) return !0;
        if (
          d(e) &&
          (u(e) ||
            "string" == typeof e ||
            "function" == typeof e.splice ||
            s(e) ||
            l(e) ||
            r(e))
        )
          return !e.length;
        var n = o(e);
        if ("[object Map]" == n || "[object Set]" == n) return !e.size;
        if (c(e)) return !i(e).length;
        for (var t in e) if (f.call(e, t)) return !1;
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
  },
]);
//# sourceMappingURL=1283.38400fb374e8789e.js.map