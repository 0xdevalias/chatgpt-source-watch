"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8119],
  {
    36265: function (t, n, e) {
      e.r(n),
        e.d(n, {
          form: function () {
            return i;
          },
          link: function () {
            return o;
          },
        });
      var r = e(10620);
      function o(t, n, e, o) {
        var i = this;
        return (
          t &&
            (t instanceof Element
              ? [t]
              : "toArray" in t
                ? t.toArray()
                : t
            ).forEach(function (t) {
              t.addEventListener(
                "click",
                function (u) {
                  var c,
                    a,
                    f = n instanceof Function ? n(t) : n,
                    l = e instanceof Function ? e(t) : e,
                    s =
                      t.getAttribute("href") ||
                      t.getAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        "href"
                      ) ||
                      t.getAttribute("xlink:href") ||
                      (null === (c = t.getElementsByTagName("a")[0]) ||
                      void 0 === c
                        ? void 0
                        : c.getAttribute("href")),
                    h = (0, r.FJ)(
                      i.track(f, l, null != o ? o : {}),
                      null !== (a = i.settings.timeout) && void 0 !== a
                        ? a
                        : 500
                    );
                  ("_blank" === t.target && s) ||
                    u.ctrlKey ||
                    u.shiftKey ||
                    u.metaKey ||
                    (u.button && 1 == u.button) ||
                    !s ||
                    (u.preventDefault
                      ? u.preventDefault()
                      : (u.returnValue = !1),
                    h
                      .catch(console.error)
                      .then(function () {
                        window.location.href = s;
                      })
                      .catch(console.error));
                },
                !1
              );
            }),
          this
        );
      }
      function i(t, n, e, o) {
        var i = this;
        return (
          t &&
            (t instanceof HTMLFormElement && (t = [t]),
            t.forEach(function (t) {
              if (!(t instanceof Element))
                throw TypeError(
                  "Must pass HTMLElement to trackForm/trackSubmit."
                );
              var u = function (u) {
                  u.preventDefault ? u.preventDefault() : (u.returnValue = !1);
                  var c,
                    a = n instanceof Function ? n(t) : n,
                    f = e instanceof Function ? e(t) : e;
                  (0, r.FJ)(
                    i.track(a, f, null != o ? o : {}),
                    null !== (c = i.settings.timeout) && void 0 !== c ? c : 500
                  )
                    .catch(console.error)
                    .then(function () {
                      t.submit();
                    })
                    .catch(console.error);
                },
                c = window.jQuery || window.Zepto;
              c ? c(t).submit(u) : t.addEventListener("submit", u, !1);
            })),
          this
        );
      }
    },
  },
]);
//# sourceMappingURL=auto-track.fa6fc1112abad268.js.map
