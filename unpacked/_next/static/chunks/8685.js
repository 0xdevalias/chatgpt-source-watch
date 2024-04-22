"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8685],
  {
    20140: function (A, a, t) {
      t.d(a, {
        X: function () {
          return e;
        },
      });
      var d = t(49305),
        i = t(53362),
        l = t(70079);
      function e() {
        let { 0: A, 1: a } = (0, l.useState)({
          gdrive: { already_oauth: !1, id: "", loaded: !1 },
          o365: { already_oauth: !1, id: "", loaded: !1 },
        });
        return (
          (0, l.useEffect)(() => {
            (async () => {
              try {
                var A, t, l, e;
                let o = [d.PO.GDRIVE_SYNC_CONNECTOR, d.PO.O365],
                  [g, n] = await Promise.all(
                    o.map((A) => i.Z.getConnectorAccessTokenAPI(A))
                  );
                a({
                  gdrive: {
                    already_oauth:
                      null !== (A = null == g ? void 0 : g.already_oauthed) &&
                      void 0 !== A &&
                      A,
                    id:
                      null !== (t = null == g ? void 0 : g.id) && void 0 !== t
                        ? t
                        : "",
                    loaded: !0,
                  },
                  o365: {
                    already_oauth:
                      null !== (l = null == n ? void 0 : n.already_oauthed) &&
                      void 0 !== l &&
                      l,
                    id:
                      null !== (e = null == n ? void 0 : n.id) && void 0 !== e
                        ? e
                        : "",
                    loaded: !0,
                  },
                });
              } catch (A) {
                a({
                  gdrive: { already_oauth: !1, id: "", loaded: !1 },
                  o365: { already_oauth: !1, id: "", loaded: !1 },
                });
              }
            })();
          }, []),
          A
        );
      }
    },
    93040: function (A, a) {
      a.Z = {
        src: "https://cdn.oaistatic.com/_next/static/media/google_docs.c047218b.png",
        height: 470,
        width: 342,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAHlBMVEVAhPVAhPVMaXEXZtEfbNdPjvV4qfmdv/mOtvgbbuLPyNIVAAAABXRSTlP+8gCLiCIUfDMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAArSURBVHicHYlBDgAwCIPoXNX9/8OLcoEEBMRheBdsW5BVOepeVaJ9aAL0AQ73AIdc13MxAAAAAElFTkSuQmCC",
        blurWidth: 6,
        blurHeight: 8,
      };
    },
    80615: function (A, a) {
      a.Z = {
        src: "https://cdn.oaistatic.com/_next/static/media/google_drive.b2f6c9f4.png",
        height: 105,
        width: 118,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAbFBMVEVMaXH5vwQ3g/1ChPIepk/4vQb/wwEjceIvmXw3rlAGWcAZZ9Y3s0g6fvISgj00qlYzok7asQs1qlczhTBdd9f5nxLbojD/0AD/KgCYY5LvQDQ4tVZFiff/zAQ7iv4voXadphogmUz2Rj3/qQzEtNENAAAAG3RSTlMAOjz5OcD889L9JapY+fq3jIvK+vnKzlck5KVk4j03AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nAXBhQHAIADAsOIwdwVm//+4BOiasQfQ4bmtANpzMMlAFYIWNq34y0u5fDOlq2Oe3oPCRaXyvv1QCQMEpdEdlgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 7,
      };
    },
    80910: function (A, a) {
      a.Z = {
        src: "https://cdn.oaistatic.com/_next/static/media/notion.9433d9c5.png",
        height: 250,
        width: 250,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEWCgoKLi4vd3d2MjIyxsbHQ0NCUlJSrq6ubm5uUlJT///+8vLyoqKivr6+xsbGZmZkpKSng4OCXl5ePj4/Y2NigoKAPDw9tbW3ExMTU1NQ0NDS4uLhOTk5WVlbnfTX1AAAAGnRSTlPe0HX8/XPE+v3OAaDgzcPO+v7913T//////s/EkFMAAAAJcEhZcwAACxMAAAsTAQCanBgAAABFSURBVHicFcZHEoAwEAMwp24KEMo4Dfj/Nxl0Ety2LiI6AY8VmpaBGtgtFVCPyXAXoI42W49/zrCPCP0KOxmRsrmU9+4DdzUDa9FnBgAAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
  },
]);
//# sourceMappingURL=8685.849d0ed1685138f4.js.map
