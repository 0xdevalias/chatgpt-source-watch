"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9214],
  {
    8596: function (e, t, r) {
      r.r(t),
        r.d(t, {
          remoteMiddlewares: function () {
            return s;
          },
        });
      var n = r(38104),
        a = r(89034),
        i = r(47019),
        c = r(71265);
      function s(e, t, r) {
        var s;
        return (0, n.mG)(this, void 0, void 0, function () {
          var u,
            o = this;
          return (0, n.Jh)(this, function (l) {
            switch (l.label) {
              case 0:
                if ((0, a.s)()) return [2, []];
                return (
                  (u = (0, c.Kg)()),
                  [
                    4,
                    Promise.all(
                      Object.entries(
                        null !== (s = t.enabledMiddleware) && void 0 !== s
                          ? s
                          : {}
                      )
                        .filter(function (e) {
                          return e[0], e[1];
                        })
                        .map(function (e) {
                          return e[0];
                        })
                        .map(function (t) {
                          return (0, n.mG)(o, void 0, void 0, function () {
                            var a, c, s, o;
                            return (0, n.Jh)(this, function (n) {
                              switch (n.label) {
                                case 0:
                                  (c = a = t.replace("@segment/", "")),
                                    r && (c = btoa(a).replace(/=/g, "")),
                                    (s = ""
                                      .concat(u, "/middleware/")
                                      .concat(c, "/latest/")
                                      .concat(c, ".js.gz")),
                                    (n.label = 1);
                                case 1:
                                  return (
                                    n.trys.push([1, 3, , 4]), [4, (0, i.v)(s)]
                                  );
                                case 2:
                                  return (
                                    n.sent(),
                                    [2, window["".concat(a, "Middleware")]]
                                  );
                                case 3:
                                  return (
                                    (o = n.sent()),
                                    e.log("error", o),
                                    e.stats.increment(
                                      "failed_remote_middleware"
                                    ),
                                    [3, 4]
                                  );
                                case 4:
                                  return [2];
                              }
                            });
                          });
                        })
                    ),
                  ]
                );
              case 1:
                return [2, l.sent().filter(Boolean)];
            }
          });
        });
      }
    },
  },
]);
//# sourceMappingURL=remoteMiddleware.32ab39c72c4d4509.js.map
