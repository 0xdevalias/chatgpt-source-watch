"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7493],
  {
    98643: function (n, e, t) {
      t.d(e, {
        n: function () {
          return i;
        },
      });
      function i(n, e) {
        var t, i;
        return "boolean" == typeof (null == e ? void 0 : e.enabled)
          ? e.enabled
          : null ===
              (i =
                null === (t = null == n ? void 0 : n.__default) || void 0 === t
                  ? void 0
                  : t.enabled) ||
              void 0 === i ||
              i;
      }
    },
    59801: function (n, e, t) {
      t.r(e),
        t.d(e, {
          schemaFilter: function () {
            return o;
          },
        });
      var i = t(38104),
        r = t(98643);
      function o(n, e) {
        function t(t) {
          var o = t.event.event;
          if (n && o) {
            var u = n[o];
            if ((0, r.n)(n, u)) {
              var a = (function (n, e) {
                if (!n || !Object.keys(n)) return {};
                var t,
                  i,
                  r = n.integrations
                    ? Object.keys(n.integrations).filter(function (e) {
                        return !1 === n.integrations[e];
                      })
                    : [],
                  o = [];
                return (
                  (null !== (t = e.remotePlugins) && void 0 !== t
                    ? t
                    : []
                  ).forEach(function (n) {
                    r.forEach(function (e) {
                      (n.name.includes(e) || e.includes(n.name)) &&
                        o.push(n.name);
                    });
                  }),
                  (null !== (i = e.remotePlugins) && void 0 !== i
                    ? i
                    : []
                  ).reduce(function (n, e) {
                    return (
                      e.settings.subscriptions &&
                        o.includes(e.name) &&
                        e.settings.subscriptions.forEach(function (t) {
                          return (n[
                            "".concat(e.name, " ").concat(t.partnerAction)
                          ] = !1);
                        }),
                      n
                    );
                  }, {})
                );
              })(u, e);
              t.updateEvent(
                "integrations",
                (0, i.pi)(
                  (0, i.pi)(
                    (0, i.pi)({}, t.event.integrations),
                    null == u ? void 0 : u.integrations
                  ),
                  a
                )
              );
            } else
              t.updateEvent(
                "integrations",
                (0, i.pi)((0, i.pi)({}, t.event.integrations), {
                  All: !1,
                  "Segment.io": !0,
                })
              );
          }
          return t;
        }
        return {
          name: "Schema Filter",
          version: "0.1.0",
          isLoaded: function () {
            return !0;
          },
          load: function () {
            return Promise.resolve();
          },
          type: "before",
          page: t,
          alias: t,
          track: t,
          identify: t,
          group: t,
        };
      }
    },
  },
]);
