(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8682],
  {
    636: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DO_NOT_IMPORT_ContextConnectorCitationCards: function () {
            return h;
          },
          DO_NOT_IMPORT_ContextConnectorDocumentParser: function () {
            return D;
          },
          DO_NOT_IMPORT_ContextConnectorPicker: function () {
            return V;
          },
          DO_NOT_IMPORT_SyncConnectorPicker: function () {
            return Y;
          },
        });
      var r = n(2946),
        a = n(61888),
        s = n(35805),
        i = n.n(s),
        l = n(93040),
        o = n(80615),
        c = n(80910),
        u = n(35250);
      function d(e) {
        let t,
          { citationMetadata: n } = e;
        switch (n.text) {
          case "Google Drive":
            t = o.Z.src;
            break;
          case "Google Docs":
            t = l.Z.src;
            break;
          case "Notion":
            t = c.Z.src;
        }
        return (0, u.jsx)("a", {
          href: n.url,
          target: "_blank",
          children: (0, u.jsxs)("div", {
            className:
              "flex flex-col gap-[2px] overflow-clip rounded-lg border border-gray-200 px-[16px] py-[12px]",
            children: [
              (0, u.jsxs)("div", {
                className: "flex items-center gap-2 pb-0.5",
                children: [
                  (0, u.jsx)(i(), {
                    className: "h-[16px] w-[16px] object-contain",
                    src: t,
                    width: 16,
                    height: 16,
                    objectFit: "contain",
                    alt: n.text,
                  }),
                  (0, u.jsx)("p", {
                    className:
                      "text-xs leading-normal text-token-text-secondary",
                    children: n.text,
                  }),
                ],
              }),
              (0, u.jsx)("p", {
                className: "text-token -text-primary line-clamp-1 text-sm",
                children: n.title,
              }),
            ],
          }),
        });
      }
      let m = ["Google Drive", "Google Docs", "Notion"];
      function p(e) {
        if (!e) return !1;
        let { type: t, text: n } = e;
        return "webpage" === t && m.includes(null != n ? n : "");
      }
      function h(e) {
        let { messages: t } = e,
          n = (0, a.compact)(
            t
              .flatMap((e) => {
                var t, n;
                return null !==
                  (t =
                    null == e ||
                    null === (n = e.message) ||
                    void 0 === n ||
                    null === (n = n.metadata) ||
                    void 0 === n
                      ? void 0
                      : n.citations) && void 0 !== t
                  ? t
                  : [];
              })
              .flatMap((e) => e.metadata)
          ),
          s = (0, a.uniqBy)(
            n.map((e) => (0, r.gP)(!0, e)).filter(p),
            (e) => e.url
          );
        return (0, u.jsx)("div", {
          className: "mt-4 grid w-full grid-cols-[50%,50%] gap-3",
          children: s.map((e) => (0, u.jsx)(d, { citationMetadata: e }, e.url)),
        });
      }
      var g = n(49305),
        f = n(70079);
      async function x(e) {
        await (null == v &&
          (v = new Promise((e, t) => {
            let n = document.createElement("script");
            (n.src = "https://js.live.net/v7.2/OneDrive.js"),
              (n.onload = e),
              (n.onerror = t),
              document.documentElement.appendChild(n);
          })),
        v);
        let t = await b(e),
          n = await A(e, t);
        return null == n
          ? null
          : Promise.all(
              n.value.map(async (t) => {
                var n, r, a, s;
                let i = "https://graph.microsoft.com/v1.0/drives/"
                    .concat(
                      encodeURIComponent(t.parentReference.driveId),
                      "/items/"
                    )
                    .concat(encodeURIComponent(t.id)),
                  l = await fetch(i, {
                    method: "GET",
                    headers: {
                      Authorization: "Bearer ".concat(e),
                      "Content-Type": "application/json",
                    },
                  }),
                  o = await l.json();
                return {
                  connector: g.PO.O365,
                  id: t.id,
                  title: null !== (n = o.name) && void 0 !== n ? n : "",
                  mimeType:
                    null !==
                      (r =
                        null === (a = o.file) || void 0 === a
                          ? void 0
                          : a.mimeType) && void 0 !== r
                      ? r
                      : "",
                  url: null !== (s = o.webUrl) && void 0 !== s ? s : "",
                };
              })
            );
      }
      async function A(e, t) {
        return new Promise((n, r) => {
          OneDrive.open({
            clientId: "e0476654-c1d5-430b-ab80-70cbd947616a",
            action: "query",
            multiSelect: !0,
            advanced: { endpointHint: t, accessToken: e },
            success: (e) => n(e),
            cancel() {
              n(null);
            },
            error(e) {
              r(e);
            },
          });
        });
      }
      let v = null;
      async function b(e) {
        let t = await fetch("https://graph.microsoft.com/v1.0/me/drive", {
          method: "GET",
          headers: {
            Authorization: "Bearer ".concat(e),
            "Content-Type": "application/json",
          },
        });
        if (!t.ok)
          return Promise.reject(
            "HTTP ".concat(t.status, " to get file picker url")
          );
        let n = await t.json();
        return "personal" === n.driveType ? "api.onedrive.com" : n.webUrl;
      }
      let y = "AIzaSyBjWFkxENpfA2b0Leq9VtNLumQs4u2VbkA",
        j = null;
      function w(e) {
        return (
          null == j &&
            (j = new Promise((e, t) => {
              let n = document.createElement("script");
              (n.src = "https://apis.google.com/js/api.js"),
                (n.onload = e),
                (n.onerror = t),
                document.documentElement.appendChild(n);
            })
              .then(() =>
                Promise.all([
                  new Promise((e) => gapi.load("client", e)),
                  new Promise((e) => gapi.load("client:picker", e)),
                ])
              )
              .then(
                () => (
                  gapi.client.setToken({ access_token: e }),
                  gapi.client.init({
                    apiKey: y,
                    scope: "https://www.googleapis.com/auth/drive.file",
                    discoveryDocs: [
                      "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
                    ],
                  })
                )
              )),
          j
        );
      }
      function O(e, t) {
        switch (e) {
          case g.PO.GDRIVE:
          case g.PO.GDRIVE_SYNC_CONNECTOR:
            return k(t, e);
          case g.PO.O365:
            return x(t);
        }
      }
      async function k(e, t) {
        return (
          await w(e),
          new Promise((n) => {
            async function r(e) {
              switch (e.action) {
                case google.picker.Action.PICKED:
                  n(
                    e.docs.map((e) => ({
                      connector: t,
                      id: e.id,
                      title: e.name,
                      mimeType: e.mimeType,
                      url: e.url,
                    }))
                  );
                  break;
                case google.picker.Action.CANCEL:
                  n(null);
              }
            }
            let a = new google.picker.DocsView(google.picker.ViewId.DOCS)
              .setIncludeFolders(!0)
              .setSelectFolderEnabled(t == g.PO.GDRIVE_SYNC_CONNECTOR)
              .setMode(google.picker.DocsViewMode.LIST);
            t == g.PO.GDRIVE_SYNC_CONNECTOR &&
              a.setMimeTypes("application/vnd.google-apps.folder"),
              new google.picker.PickerBuilder()
                .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
                .enableFeature(google.picker.Feature.SUPPORT_DRIVES)
                .setDeveloperKey(
                  t == g.PO.GDRIVE_SYNC_CONNECTOR
                    ? "AIzaSyCECDrDXDU460DD1WTHtz8jSkyuGjgsI8w"
                    : y
                )
                .setAppId(
                  t == g.PO.GDRIVE_SYNC_CONNECTOR
                    ? "203712390664"
                    : "77377267392"
                )
                .setOAuthToken(e)
                .addView(a)
                .setCallback(r)
                .build()
                .setVisible(!0);
          })
        );
      }
      async function N(e) {
        let t = await gapi.client.drive.files.get({
          fileId: e,
          fields: "name,mimeType,webViewLink",
        });
        if (200 !== t.status)
          return Promise.reject("HTTP ".concat(t.status, " for ").concat(e));
        let { name: n, mimeType: r, webViewLink: a } = t.result;
        return {
          connector: g.PO.GDRIVE,
          id: e,
          title: null != n ? n : "",
          mimeType: null != r ? r : "",
          url: null != a ? a : "",
        };
      }
      var S = n(53362),
        E = n(61236);
      function P() {
        let { 0: e, 1: t } = (0, f.useState)([]),
          n = (0, E.a)({ queryKey: ["fetchConnectorData"], queryFn: _ });
        return (
          (0, f.useEffect)(() => {
            n.isSuccess && t(n.data);
          }, [n]),
          e
        );
      }
      function _(e) {
        let { queryKey: t } = e,
          [n] = t;
        return S.Z.checkConnectorAPI().then((e) => e.connectors.filter(C));
      }
      function C(e) {
        return e.type === g.PO.GDRIVE || e.type === g.PO.O365;
      }
      function D(e) {
        let { inputValue: t, parsedDocumentHandler: n } = e,
          r = P();
        return (
          (0, f.useEffect)(() => {
            n(
              (function (e, t) {
                let n = [];
                for (let r of t) {
                  let { type: t, access_token: a } = r;
                  if (null != a)
                    switch (t) {
                      case g.PO.GDRIVE:
                        n.push(
                          ...(function (e, t) {
                            return [...e.matchAll(M)].map((e) => ({
                              url: e[0],
                              id: e[2],
                              type: g.PO.GDRIVE,
                              tryFetch: (function (e, t) {
                                return async () => (await w(t), N(e));
                              })(e[2], t),
                            }));
                          })(e, a)
                        );
                      case g.PO.O365:
                      case g.PO.GDRIVE_SYNC_CONNECTOR:
                    }
                }
                return n;
              })(t, r)
            );
          }, [t, r, n]),
          null
        );
      }
      let M =
        /\bhttps:\/\/docs\.google\.com\/(document|spreadsheets|presentation)\/d\/([\w-]+)\//gm;
      var R = n(29287),
        L = n(58819),
        T = n(14551),
        U = n(8718),
        z = n(36180),
        I = n(7137),
        B = n(1454),
        Z = n(9063),
        F = n(84692);
      function V(e) {
        let {
            displayType: t,
            modelSupportedImageMimeTypes: r,
            attachmentsProductFeature: a,
          } = e,
          s = P(),
          i = (0, Z.Z)(),
          l = (0, f.useRef)(null),
          o = (0, f.useCallback)(() => {
            l.current && l.current.click();
          }, []),
          c = (0, f.useCallback)(() => {
            var e;
            let t = null === (e = l.current) || void 0 === e ? void 0 : e.files;
            Array.from(null != t ? t : []).forEach((e) =>
              (function (e) {
                let {
                  file: t,
                  modelSupportedImageMimeTypes: n,
                  intl: r,
                  attachmentsProductFeature: a,
                } = e;
                z.Dw.uploadFile(
                  (0, U.W7)(t),
                  t,
                  T.A.Retrieval,
                  n,
                  r,
                  void 0,
                  a
                );
              })({
                file: e,
                modelSupportedImageMimeTypes: r,
                attachmentsProductFeature: a,
                intl: i,
              })
            );
          }, [r, a, i]);
        return (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsx)("input", {
              type: "file",
              ref: l,
              onChange: c,
              className: "hidden",
            }),
            (0, u.jsxs)(L.Z.Root, {
              children: [
                (0, u.jsx)(L.Z.Trigger, {
                  children:
                    "button" === t
                      ? (0, u.jsx)(R.z, {
                          size: "medium",
                          children: (0, u.jsx)(B.wzc, {}),
                        })
                      : (0, u.jsx)(B.OvN, {
                          className:
                            "icon-sm md:icon-md rounded-full bg-gray-500 text-white outline-none hover:bg-black",
                        }),
                }),
                (0, u.jsx)(L.Z.Portal, {
                  children: (0, u.jsxs)(L.Z.Content, {
                    children: [
                      s.map((e) =>
                        (0, u.jsx)(
                          L.Z.Item,
                          {
                            onClick: async () => {
                              let { access_token: t } = e;
                              if (t) {
                                let n = await O(e.type, t);
                                null != n &&
                                  n.forEach((t) => {
                                    null != t &&
                                      z.Dw.uploadFile(
                                        t.id,
                                        new File([], t.title, {
                                          type: t.mimeType,
                                        }),
                                        T.A.Retrieval,
                                        r,
                                        i,
                                        void 0,
                                        a,
                                        e.type
                                      );
                                  });
                              } else {
                                let { doOauthRedirect: t } =
                                  await Promise.resolve().then(
                                    n.bind(n, 42405)
                                  );
                                t({ id: e.id }, "#settings");
                              }
                            },
                            children: (0, u.jsxs)("div", {
                              className: "flex space-x-2",
                              children: [
                                e.type === g.PO.GDRIVE && (0, u.jsx)(I.dv9, {}),
                                e.type === g.PO.O365 && (0, u.jsx)(I.oV6, {}),
                                (0, u.jsx)("div", {
                                  children: e.access_token
                                    ? i.formatMessage(q.uploadFromMessage, {
                                        connector_name: e.name,
                                      })
                                    : i.formatMessage(q.signinWithMessage, {
                                        connector_name: e.name,
                                      }),
                                }),
                              ],
                            }),
                          },
                          e.id
                        )
                      ),
                      (0, u.jsx)(
                        L.Z.Item,
                        {
                          onClick: o,
                          children: (0, u.jsx)("div", {
                            className: "flex space-x-2",
                            children: (0, u.jsx)(F.Z, {
                              id: "ContextConnectorPicker.uploadFile",
                              defaultMessage: "Upload local file",
                            }),
                          }),
                        },
                        "upload"
                      ),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      let q = (0, n(68498).vU)({
        signinWithMessage: {
          id: "ContextConnectorPicker.signInWithMessage",
          defaultMessage: "Sign in with {connector_name}",
        },
        uploadFromMessage: {
          id: "ContextConnectorPicker.uploadWithMessage",
          defaultMessage: "Upload from {connector_name}",
        },
      });
      var H = n(18450),
        Q = n(20140),
        W = n(89899),
        G = n(42405),
        X = n(99715);
      function K(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                (0, H.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : K(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function Y(e) {
        let { getInputProps: t, openFileDialog: n, gizmoId: r } = e,
          { gdrive_sync: a, o365: s } = (0, Q.X)();
        return (0, u.jsx)("div", {
          children: (0, u.jsxs)(X.fC, {
            children: [
              (0, u.jsx)(X.xz, {
                asChild: !0,
                children: (0, u.jsx)(R.z, {
                  size: "medium",
                  children: (0, u.jsx)(F.Z, {
                    id: "aC1nyd",
                    defaultMessage: "Upload",
                  }),
                }),
              }),
              (0, u.jsxs)(X.VY, {
                side: "top",
                align: "start",
                children: [
                  (0, u.jsx)(X.ck, {
                    children: (0, u.jsxs)(W.cY, {
                      onClick: n,
                      children: [
                        (0, u.jsx)("input", J({}, t())),
                        (0, u.jsx)(F.Z, {
                          id: "fy5xdG",
                          defaultMessage: "Upload files from desktop",
                        }),
                      ],
                    }),
                  }),
                  (0, u.jsxs)(X.ck, {
                    children: [
                      a.loaded &&
                        !a.already_oauth &&
                        (0, u.jsxs)(W.cY, {
                          onClick: () => {
                            (0, G.doOauthRedirect)(
                              { id: a.id },
                              "gpts/editor/" + r
                            );
                          },
                          children: [
                            (0, u.jsx)("input", J({}, t())),
                            (0, u.jsx)(F.Z, {
                              id: "MgqCv4",
                              defaultMessage: "Connect To Google Drive",
                            }),
                          ],
                        }),
                      a.loaded &&
                        a.already_oauth &&
                        (0, u.jsxs)(W.cY, {
                          onClick: async () => {
                            await O(g.PO.GDRIVE_SYNC_CONNECTOR, a.access_token);
                          },
                          children: [
                            (0, u.jsx)("input", J({}, t())),
                            (0, u.jsx)(F.Z, {
                              id: "/EdQ8p",
                              defaultMessage: "Pick Folders From Google Drive",
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, u.jsxs)(X.ck, {
                    children: [
                      s.loaded &&
                        !s.already_oauth &&
                        (0, u.jsxs)(W.cY, {
                          onClick: () => {
                            (0, G.doOauthRedirect)(
                              { id: s.id },
                              "gpts/editor/" + r
                            );
                          },
                          children: [
                            (0, u.jsx)("input", J({}, t())),
                            (0, u.jsx)(F.Z, {
                              id: "dVKP7F",
                              defaultMessage: "Connect To One Drive",
                            }),
                          ],
                        }),
                      s.loaded &&
                        s.already_oauth &&
                        (0, u.jsxs)(W.cY, {
                          onClick: () => {},
                          children: [
                            (0, u.jsx)("input", J({}, t())),
                            (0, u.jsx)(F.Z, {
                              id: "mADD8i",
                              defaultMessage:
                                "Pick Files/Folders From One Drive",
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    13888: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ConversationTurnMessages: function () {
            return i;
          },
          ConversationTurnName: function () {
            return s;
          },
          ConversationTurnSender: function () {
            return a;
          },
        });
      var r = n(35250);
      function a(e) {
        let { isUserTurn: t, children: n } = e;
        return t ? null : (0, r.jsx)(r.Fragment, { children: n });
      }
      function s() {
        return null;
      }
      function i(e) {
        let { isUserTurn: t, children: n } = e;
        return t
          ? (0, r.jsx)("div", {
              className: "flex justify-end",
              children: (0, r.jsx)("div", {
                className:
                  "max-w-[90%] rounded-3xl bg-token-main-surface-secondary px-5 py-2.5",
                children: n,
              }),
            })
          : (0, r.jsx)(r.Fragment, { children: n });
      }
    },
    70173: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GizmosDropdownItems: function () {
            return M;
          },
          HistoryPopover: function () {
            return D;
          },
          ProfileDropdown: function () {
            return C;
          },
        });
      var r = n(94079),
        a = n(41922),
        s = n(55837),
        i = n(58819),
        l = n(55057),
        o = n(5427),
        c = n(99392),
        u = n(9182),
        d = n(70187),
        m = n(72207),
        p = n(74346),
        h = n(89899),
        g = n(85062),
        f = n(2343),
        x = n(27550),
        A = n(27570),
        v = n(47712),
        b = n(63605),
        y = n(78253),
        j = n(99715),
        w = n(22189),
        O = n(96056),
        k = n(38801),
        N = n(67852),
        S = n(41409),
        E = n(84692),
        P = n(35250);
      function _(e) {
        let { href: t, children: n, icon: r } = e,
          a = (0, S.useRouter)();
        return (0, P.jsx)(i.Z.Item, {
          icon: r,
          onSelect: () => a.push(t),
          children: n,
        });
      }
      function C() {
        let { data: e } = (0, v.rk)(),
          t = (0, v.t)(),
          { openSettings: n } = (0, A.Fr)();
        if (!t || !e) return null;
        let a = e.accountItems.length > 1,
          s = t.isWorkspaceAccount();
        return (0, P.jsxs)(i.Z.Root, {
          children: [
            (0, P.jsx)(i.Z.Trigger, {
              className: "px-2",
              children: (0, P.jsx)(r.zf, { iconSize: "gizmoConversation" }),
            }),
            (0, P.jsx)(i.Z.Portal, {
              children: (0, P.jsxs)(i.Z.Content, {
                collisionPadding: 20,
                children: [
                  a && (0, P.jsx)(f.S, { menuItemComponent: i.Z.Item }),
                  (0, P.jsx)(i.Z.Separator, {}),
                  s
                    ? (0, P.jsx)(x.b, {
                        menuItemComponent: i.Z.Item,
                        routedMenuItemComponent: _,
                      })
                    : (0, P.jsx)(g.W, { menuItemComponent: i.Z.Item }),
                  (0, P.jsx)(i.Z.Item, {
                    icon: d.RR,
                    onClick: () => n(),
                    children: (0, P.jsx)(E.Z, {
                      defaultMessage: "Settings",
                      id: "navigation.settings.0",
                    }),
                  }),
                  (0, P.jsx)(i.Z.Separator, {}),
                  (0, P.jsx)(i.Z.Item, {
                    onClick: () => {
                      k.A.logEvent(N.M.clickLogOut, { eventSource: "mouse" }),
                        (0, O.w7)();
                    },
                    icon: d.N_,
                    children: (0, P.jsx)(E.Z, {
                      defaultMessage: "Log out",
                      id: "navigation.logOut.0",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function D(e) {
        let { clientThreadId: t } = e,
          n = (0, a.V_)(),
          r = (0, b.XK)(t);
        return (0, P.jsxs)(w.fC, {
          children: [
            (0, P.jsx)(w.xz, {
              className: "rounded-lg p-2 hover:bg-token-main-surface-secondary",
              children: (0, P.jsx)(l.Oqj, {
                className: "icon-md text-token-text-secondary",
              }),
            }),
            (0, P.jsx)(w.h_, {
              children: (0, P.jsx)(w.VY, {
                sideOffset: 10,
                collisionPadding: 20,
                className:
                  "max-h-[600px] max-w-xs overflow-auto rounded-xl border border-token-border-light bg-token-main-surface-primary pl-2 shadow-xl",
                children: (0, P.jsx)(s.Z, {
                  activeId: n ? void 0 : r,
                  isPrimaryBackgroundColor: !0,
                }),
              }),
            }),
          ],
        });
      }
      function M(e) {
        let { clientThreadId: t } = e,
          n = (0, b.eV)(t),
          r = (0, v.t)(),
          { listItems: a } = (0, p._f)(!1),
          s = (0, S.useRouter)();
        return null != r && r.canInteractWithGizmos
          ? (0, P.jsxs)(P.Fragment, {
              children: [
                (0, P.jsx)(h.Cl, {}),
                a.map((e) => {
                  let { gizmo: r, section: a } = e;
                  return (0, P.jsx)(
                    R,
                    {
                      gizmo: r,
                      section: a,
                      clientThreadId: t,
                      isActive: r.gizmo.id === n,
                    },
                    r.gizmo.id
                  );
                }),
                (0, P.jsx)(h.UA, {
                  onSelect: () => {
                    s.push((0, y.cy)());
                  },
                  children: (0, P.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, P.jsx)(d.hk, { className: "icon-md" }),
                      (0, P.jsx)(E.Z, {
                        defaultMessage: "Explore GPTs",
                        id: "navigation.exploreGPTs.0",
                      }),
                    ],
                  }),
                }),
              ],
            })
          : null;
      }
      function R(e) {
        let { gizmo: t, isActive: n, clientThreadId: r } = e,
          a = (0, S.useRouter)(),
          s = (0, P.jsxs)(h.tc, {
            $as: n ? j.fF : j.Xi,
            className: "justify-between",
            onSelect: () => a.push((0, u.m_)(t)),
            children: [
              (0, P.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [
                  (0, P.jsx)(o.Z, {
                    src: t.gizmo.display.profile_picture_url,
                    isFirstParty: !1,
                    className: "icon-md flex-shrink-0",
                  }),
                  t.gizmo.display.name || c.zf,
                ],
              }),
              (0, P.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  n && (0, P.jsx)(l.$As, { className: "icon-md" }),
                  n &&
                    (0, P.jsx)(l.ob9, {
                      className: "icon-md text-token-text-tertiary",
                    }),
                ],
              }),
            ],
          });
        return n
          ? (0, P.jsxs)(j.Tr, {
              children: [
                s,
                (0, P.jsx)(j.Uv, {
                  children: (0, P.jsx)(j.tu, {
                    className:
                      "mt-2 max-h-[calc(100vh-300px)] min-w-[100px] max-w-xs overflow-auto rounded-lg border border-token-border-light bg-token-main-surface-primary shadow-lg",
                    sideOffset: -10,
                    alignOffset: -15,
                    children: (0, P.jsx)(m.GizmoInformationDropdownItems, {
                      gizmoResource: t,
                      clientThreadId: r,
                      showReportModal: function () {
                        throw Error("Function not implemented.");
                      },
                    }),
                  }),
                }),
              ],
            })
          : s;
      }
    },
    98834: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GizmoContactsEditor: function () {
            return A;
          },
        });
      var r = n(18450),
        a = n(49305),
        s = n(5427),
        i = n(9182),
        l = n(41251),
        o = n(70187),
        c = n(89899),
        u = n(32870),
        d = n(67680),
        m = n(19841),
        p = n(70079),
        h = n(9063),
        g = n(35250);
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function A(e) {
        var t, n, r;
        let { gizmoEditorData: s, updateGizmo: i } = e,
          o =
            null == s || null === (t = s.tools) || void 0 === t
              ? void 0
              : t.find((e) => e.type === a.qK.CONTACTS),
          { 0: u, 1: m } = (0, p.useState)(
            null !==
              (n =
                null == o || null === (r = o.settings) || void 0 === r
                  ? void 0
                  : r.contacts) && void 0 !== n
              ? n
              : []
          ),
          { 0: f, 1: A } = (0, p.useState)(!1),
          b = (0, h.Z)(),
          y = (e) => {
            i((t) =>
              x(
                x({}, t),
                {},
                {
                  tools: o
                    ? t.tools.map((t) =>
                        t.type === a.qK.CONTACTS
                          ? x(
                              x({}, t),
                              {},
                              {
                                settings: x(
                                  x({}, t.settings),
                                  {},
                                  { contacts: e }
                                ),
                              }
                            )
                          : t
                      )
                    : [
                        ...t.tools,
                        { type: a.qK.CONTACTS, settings: { contacts: e } },
                      ],
                }
              )
            );
          };
        return (0, g.jsxs)(l.hj, {
          children: [
            f &&
              (0, g.jsx)(d.ZP, {
                onClick: (e) => {
                  null != e &&
                    e.gizmo.id &&
                    (u.includes(e.gizmo.id)
                      ? m(u.filter((t) => t !== e.gizmo.id))
                      : m([...u, e.gizmo.id]));
                },
                onClose: () => {
                  A(!1), y(u);
                },
              }),
            (0, g.jsx)(l.lX, {
              label: "Contacts",
              description: b.formatMessage({
                id: "gizmo.contactsExplanation",
                defaultMessage: "Other GPTs that this GPT can talk to.",
              }),
            }),
            (0, g.jsx)("div", {
              className: "mb-2 space-y-1",
              children: u.map((e, t) =>
                (0, g.jsx)(
                  v,
                  {
                    gizmoId: e,
                    onRemove: () => {
                      let t = u.filter((t) => t !== e);
                      m(t), y(t);
                    },
                  },
                  t
                )
              ),
            }),
            (0, g.jsx)(c.cY, { onClick: () => A(!0), children: "Add Contact" }),
          ],
        });
      }
      function v(e) {
        var t;
        let { gizmoId: n, onRemove: r } = e,
          { data: a } = (0, i.b9)(n),
          l = !!(null == a || null === (t = a.gizmo.tags) || void 0 === t
            ? void 0
            : t.includes(u.U9.FirstParty));
        return a
          ? (0, g.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between rounded-lg bg-token-main-surface-secondary px-2",
              children: [
                (0, g.jsxs)("div", {
                  className: (0, m.default)(
                    "group flex h-10 items-center gap-2 rounded-lg px-2 font-medium"
                  ),
                  children: [
                    (0, g.jsx)(s.Z, {
                      isFirstParty: l,
                      src: a.gizmo.display.profile_picture_url,
                      className: "h-6 w-6 flex-shrink-0",
                    }),
                    (0, g.jsxs)("div", {
                      className:
                        "space-x-2 overflow-hidden text-ellipsis text-sm font-light text-token-text-secondary",
                      children: [
                        (0, g.jsx)("span", {
                          className: "font-medium text-token-text-primary",
                          children: a.gizmo.display.name,
                        }),
                        (0, g.jsx)("span", {
                          className:
                            "flex-grow truncate text-sm font-light text-token-text-secondary sm:max-w-xs lg:max-w-md",
                          children: a.gizmo.display.description,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)("button", {
                  className: "text-sm font-bold",
                  onClick: r,
                  children: (0, g.jsx)(o.v7, {
                    className:
                      "icon-md text-token-text-secondary hover:text-token-text-primary",
                  }),
                }),
              ],
            })
          : null;
      }
    },
    63577: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GizmoRolodex: function () {
            return x;
          },
        });
      var r = n(18450),
        a = n(5427),
        s = n(94063),
        i = n(67680),
        l = n(11655),
        o = n(61236),
        c = n(19841),
        u = n(70079),
        d = n(1454),
        m = n(84692),
        p = n(35250);
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let f = () =>
        (0, o.a)({
          queryKey: ["gizmoRolodex"],
          queryFn: async () => s.U.getRolodex(),
        });
      function x() {
        let { 0: e, 1: t } = (0, u.useState)(!1),
          { 0: n, 1: r } = (0, u.useState)(null),
          { data: a } = f();
        return (0, p.jsxs)(l.ZR, {
          children: [
            (0, p.jsx)("div", {
              className: "mb-2",
              children: (0, p.jsx)(m.Z, {
                id: "personalizationSettings.rolodexLabel",
                defaultMessage: "Rolodex",
              }),
            }),
            n
              ? (0, p.jsx)("div", {
                  className: "animate-slideDownAndFadeLong",
                  children: (0, p.jsx)(
                    v,
                    g(
                      g({}, n),
                      {},
                      {
                        onBack: () => {
                          r(null);
                        },
                      }
                    )
                  ),
                })
              : e
                ? (0, p.jsx)("div", {
                    className: "animate-slideDownAndFadeLong",
                    children: (0, p.jsx)(i.ZP, {
                      onClick: async (e) => {
                        null != e &&
                          e.gizmo.id &&
                          (await s.U.upsertToRolodex({ gizmoId: e.gizmo.id }),
                          t(!1));
                      },
                      onClose: () => {
                        t(!1);
                      },
                    }),
                  })
                : (0, p.jsxs)("div", {
                    role: "button",
                    className: "grid grid-cols-3 items-center gap-1",
                    children: [
                      (null != a ? a : []).map((e, t) =>
                        (0, p.jsx)(
                          A,
                          {
                            gizmo: e.gizmo,
                            rolodex: e.rolodex,
                            onClick: async () => {
                              r(e);
                            },
                          },
                          t
                        )
                      ),
                      (null != a ? a : []).length < 3 &&
                        (0, p.jsx)(A, {
                          onClick: () => {
                            t(!0);
                          },
                        }),
                    ],
                  }),
          ],
        });
      }
      function A(e) {
        let { gizmo: t, rolodex: n, onClick: r } = e,
          { 0: i, 1: l } = (0, u.useState)(!1),
          o = null == n ? void 0 : n.is_rolodex;
        return (0, p.jsx)("div", {
          className: (0, c.default)(
            "relative flex max-w-32 flex-col items-center space-y-1 rounded-xl font-medium",
            o ? "border border-brand-green-800" : "",
            i ? "border border-token-border-heavy" : ""
          ),
          onMouseOverCapture: () => {
            l(!0);
          },
          onMouseOutCapture: () => {
            l(!1);
          },
          children:
            i && t
              ? (0, p.jsxs)("div", {
                  className: "flex items-center space-x-6 p-7",
                  children: [
                    o &&
                      (0, p.jsx)(d.vPQ, {
                        onClick: r,
                        className: "icon-xl opacity-50 hover:opacity-100",
                      }),
                    o
                      ? (0, p.jsx)(d.faY, {
                          onClick: async () => {
                            await s.U.upsertToRolodex({
                              gizmoId: t.id,
                              remove: !0,
                            });
                          },
                          className: "icon-xl opacity-50 hover:opacity-100",
                        })
                      : (0, p.jsx)(d.tUt, {
                          onClick: async () => {
                            await s.U.upsertToRolodex({ gizmoId: t.id });
                          },
                          className: "icon-xl opacity-50 hover:opacity-100",
                        }),
                  ],
                })
              : t
                ? (0, p.jsx)(p.Fragment, {
                    children: (0, p.jsxs)("div", {
                      className:
                        "flex flex-col items-center p-3 hover:opacity-50",
                      children: [
                        (0, p.jsx)(a.Z, {
                          className: "mb-2 h-10 w-10",
                          isFirstParty: !1,
                          src: t.display.profile_picture_url,
                        }),
                        (0, p.jsx)("div", {
                          className: "truncate font-medium",
                          children: t.display.name,
                        }),
                      ],
                    }),
                  })
                : (0, p.jsxs)("div", {
                    className: "flex flex-col items-center p-5",
                    children: [
                      (0, p.jsx)(d.O9D, { className: "icon-lg mb-2" }),
                      (0, p.jsx)("span", {
                        children: (0, p.jsx)(m.Z, {
                          id: "gizmoRolodex.emptyLabel",
                          defaultMessage: "GPT",
                        }),
                      }),
                    ],
                  }),
        });
      }
      function v(e) {
        var t;
        let { gizmo: n, rolodex: r, onBack: i } = e,
          { 0: l, 1: o } = (0, u.useState)(
            null !== (t = null == r ? void 0 : r.usage_description) &&
            void 0 !== t
              ? t
              : ""
          );
        return (0, p.jsxs)("div", {
          className: "flex flex-col items-center p-3",
          children: [
            (0, p.jsx)(a.Z, {
              className: "mb-2 h-10 w-10",
              isFirstParty: !1,
              src: n.display.profile_picture_url,
            }),
            (0, p.jsx)("div", {
              className: "truncate font-medium",
              children: n.display.name,
            }),
            (0, p.jsx)("div", {
              className: "w-full",
              children: (0, p.jsx)("textarea", {
                rows: 5,
                value: l,
                onChange: (e) => o(e.target.value),
                placeholder: "When should your assistant talk to this GPT?",
                className:
                  "m-2 w-full resize-none rounded bg-token-main-surface-secondary text-xs text-token-text-primary",
              }),
            }),
            (0, p.jsxs)("div", {
              className: "mt-2 flex space-x-32",
              children: [
                (0, p.jsx)("div", {
                  onClick: i,
                  role: "button",
                  children: (0, p.jsx)(d.YFh, { className: "icon-md" }),
                }),
                (0, p.jsx)("div", {
                  onClick: () => {
                    s.U.upsertToRolodex({ gizmoId: n.id, usageDescription: l }),
                      i();
                  },
                  role: "button",
                  children: (0, p.jsx)(d.mW3, { className: "icon-md" }),
                }),
                (0, p.jsx)("div", {
                  onClick: async () => {
                    await s.U.upsertToRolodex({ gizmoId: n.id, remove: !0 }),
                      i();
                  },
                  role: "button",
                  children: (0, p.jsx)(d.Ybf, { className: "icon-md" }),
                }),
              ],
            }),
          ],
        });
      }
    },
    94556: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EditorEntryButton: function () {
            return ek;
          },
          EditorModal: function () {
            return eN;
          },
          EditorPageBody: function () {
            return eS;
          },
        });
      var r,
        a = n(18450),
        s = n(99945),
        i = n(29287),
        l = n(11335),
        o = n(67217),
        c = n(70187),
        u = n(21643),
        d = n(30269),
        m = n(78103),
        p = n(51362);
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      let g = {
          systemPrompt: "You are a helpful assistant.",
          userPrompt: "Make it better.",
        },
        f = (0, m.ZP)(
          (0, p.n)(() =>
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? h(Object(n), !0).forEach(function (t) {
                      (0, a.Z)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : h(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
              }
              return e;
            })({}, g)
          )
        ),
        x = {
          setSystemPrompt: (e) => {
            f.setState((t) => {
              t.systemPrompt = e;
            });
          },
          setUserPrompt: (e) => {
            f.setState((t) => {
              t.userPrompt = e;
            });
          },
          setModel: (e) => {
            f.setState((t) => {
              t.model = e;
            });
          },
        };
      var A = n(25048),
        v = n(60581),
        b = n(99715),
        y = n(61888),
        j = n(70079),
        w = n(1454),
        O = n(35250);
      function k() {
        var e;
        let { 0: t, 1: n } = (0, j.useState)(!1),
          r = f(),
          a = (0, A.NX)(),
          s = async () => {
            n(!0),
              await v.$.streamCompletion({
                completionRequest: r,
                onMessage: y.noop,
              }),
              n(!1);
          };
        return (0, O.jsxs)("div", {
          className: "flex flex-col gap-2 p-2",
          children: [
            (0, O.jsxs)("div", {
              className: "flex flex-col space-y-1",
              children: [
                (0, O.jsx)("span", { children: "User Prompt" }),
                (0, O.jsx)(u.Z, {
                  name: "userPrompt",
                  placeholder: "Your prompt...",
                  onChange: (e) => {
                    x.setUserPrompt(e.target.value);
                  },
                  value: r.userPrompt,
                }),
              ],
            }),
            (0, O.jsxs)("div", {
              className: "flex flex-col space-y-1",
              children: [
                (0, O.jsx)("span", { children: "System Prompt" }),
                (0, O.jsx)(d.Z, {
                  placeholder: "You are a helpful assistant",
                  rows: 8,
                  onChange: (e) => {
                    x.setSystemPrompt(e.target.value);
                  },
                  value: r.systemPrompt,
                }),
              ],
            }),
            (0, O.jsx)("div", {
              className: "self-start",
              children: (0, O.jsx)(N, {
                model:
                  null !== (e = r.model) && void 0 !== e ? e : "gpt-3.5-turbo",
                onChange: (e) => {
                  x.setModel(e);
                },
              }),
            }),
            (0, O.jsx)(i.z, {
              loading: t,
              color: "primary",
              onClick: s,
              className: "max-w-xs grow-0",
              children: (0, O.jsx)(w.LbG, { className: "icon-sm" }),
            }),
            (0, O.jsxs)("div", {
              className: "my-2 space-y-2 overflow-x-auto text-sm",
              children: [
                (0, O.jsx)("div", { children: "Last Request" }),
                (0, O.jsx)("pre", {
                  className: "whitespace-pre-wrap",
                  children: JSON.stringify(a.lastRequest, null, 2),
                }),
                (0, O.jsx)("div", { children: "Last Response" }),
                (0, O.jsx)("pre", {
                  className: "whitespace-pre-wrap",
                  children: a.lastResponse
                    .split("<br/>")
                    .map((e) =>
                      (0, O.jsxs)(O.Fragment, {
                        children: [e, (0, O.jsx)("br", {})],
                      })
                    ),
                }),
              ],
            }),
          ],
        });
      }
      function N(e) {
        let { model: t, onChange: n } = e;
        return (0, O.jsxs)(b.fC, {
          children: [
            (0, O.jsx)(b.xz, {
              children: (0, O.jsx)("div", {
                role: "button",
                className:
                  "rounded border-4 border-token-border-light px-4 py-2",
                children: t,
              }),
            }),
            (0, O.jsx)(b.Uv, {
              children: (0, O.jsxs)(b.VY, {
                sideOffset: 7,
                children: [
                  (0, O.jsx)(b.ck, {
                    className:
                      "border-2 bg-token-main-surface-tertiary px-4 py-2 hover:cursor-pointer hover:bg-token-main-surface-primary",
                    onClick: () => n("gpt-3.5-turbo"),
                    children: "3.5T",
                  }),
                  (0, O.jsx)(b.ck, {
                    className:
                      "border-2 bg-token-main-surface-tertiary px-4 py-2 hover:cursor-pointer hover:bg-token-main-surface-primary",
                    onClick: () => n("gpt-4-turbo-preview"),
                    children: "4T",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var S = n(55681),
        E = n(79134),
        P = n(3107),
        _ = n.n(P);
      function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : C(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let M = new E.V_({
        nodes: D(
          D({}, S.fK.spec.nodes.toObject()),
          {},
          {
            generatedText: {
              inline: !0,
              group: "inline",
              content: "text*",
              attrs: { class: { default: "generated-text" } },
              parseDOM: [{ tag: "span.generated-text" }],
              toDOM: () => ["span", { class: _()["generated-text"] }, 0],
            },
          }
        ),
        marks: D({}, S.fK.spec.marks.toObject()),
      });
      function R(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? R(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : R(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let T = new S.xj(M, S.EU.tokenizer, L({}, S.EU.tokens)),
        U = new S.nZ(L({}, S.Dm.nodes), L({}, S.Dm.marks));
      function z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : z(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let B = { documentGoal: "", comments: [] },
        Z = (0, m.ZP)((0, p.n)(() => I({}, B))),
        F = {
          upsertComment: (e) => {
            Z.setState((t) => {
              let n = t.comments.findIndex((t) => t.id === e.id);
              -1 === n
                ? t.comments.push(e)
                : (t.comments[n] = I(I({}, t.comments[n]), e));
            });
          },
          deleteComment: (e) => {
            Z.setState((t) => {
              t.comments = t.comments.filter((t) => t.id !== e);
            });
          },
          editGoal: (e) => {
            Z.setState((t) => {
              t.documentGoal = e;
            });
          },
        };
      function V(e, t) {
        let { original: n } = e,
          r = null;
        return (
          t.doc.descendants((e, t) => {
            if (r) return !1;
            if (e.text) {
              let a = e.text.indexOf(n);
              if (-1 !== a) {
                let e = t + a,
                  s = e + n.length;
                return (r = { from: e, to: s }), !1;
              }
            }
          }),
          r
        );
      }
      function q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : q(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let Q = async (e, t, n, r) => {
        let a,
          s = "",
          { from: i } = e.state.selection,
          l = e.state.selection.content(),
          o = l.content.textBetween(0, l.content.size);
        try {
          await v.$.streamCompletion({
            completionRequest: H(
              H(
                {},
                (function (e) {
                  let { fullContent: t, selectedContent: n, completion: r } = e;
                  return {
                    systemPrompt: r.systemPrompt,
                    userPrompt: "Here is the full draft:\n"
                      .concat(
                        t,
                        '\n\nThis is the text that is currently selected: "'
                      )
                      .concat(
                        n,
                        '"\n\nI want to rewrite the selected text with this guidance: '
                      )
                      .concat(
                        r.userPrompt,
                        "\n\nRespond with the plain rewritten text without quotes, nothing else."
                      ),
                  };
                })({
                  fullContent: e.state.doc.textContent,
                  selectedContent: o,
                  completion: t,
                })
              ),
              {},
              { model: t.model }
            ),
            onMessage: (t) => {
              var n, r;
              let l = e.state.tr;
              0 === s.length && l.deleteSelection(), (s += t);
              let o =
                i +
                (null !==
                  (n =
                    null === (r = a) || void 0 === r ? void 0 : r.nodeSize) &&
                void 0 !== n
                  ? n
                  : 0);
              (a = M.nodes.generatedText.create({}, M.text(s))),
                l.replaceRangeWith(i, o, a),
                e.dispatch(l);
            },
          }),
            n(o, s);
        } catch (e) {
          r(e);
        }
      };
      var W = n(25494),
        G = n(8844);
      function X(e) {
        let { comment: t, onAccept: n, onReject: r } = e;
        return (0, O.jsxs)(
          "div",
          {
            className:
              "relative flex max-w-sm flex-col space-y-2 rounded-lg border border-token-border-heavy bg-token-sidebar-surface-secondary p-4 drop-shadow-lg",
            children: [
              t.rationale &&
                (0, O.jsx)("div", {
                  className: "overflow-ellipsis break-words text-xs font-bold",
                  children: (0, O.jsxs)("span", {
                    className: "font-medium",
                    children: ["Rationale: ", t.rationale],
                  }),
                }),
              (0, O.jsxs)("div", {
                className:
                  "line-clamp-2 overflow-ellipsis break-words text-sm italic hover:line-clamp-none hover:overflow-visible",
                children: [
                  (0, O.jsx)("span", {
                    className: "font-medium",
                    children: t.author,
                  }),
                  "\xa0",
                  'replaced "'.concat(t.original, '"'),
                ],
              }),
              (0, O.jsx)("p", { className: "text-sm", children: t.completion }),
              (0, O.jsxs)("div", {
                className: "flex space-x-2",
                children: [
                  (0, O.jsx)("div", {
                    role: "button",
                    className:
                      "text-xs text-token-text-secondary hover:underline",
                    onClick: r,
                    children: (0, O.jsx)(w.q5L, { className: "icon-sm" }),
                  }),
                  (0, O.jsx)("div", {
                    role: "button",
                    className: "text-xs text-brand-green hover:underline",
                    onClick: n,
                    children: (0, O.jsx)(w.UgA, { className: "icon-sm" }),
                  }),
                ],
              }),
            ],
          },
          t.id
        );
      }
      function K(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : K(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function Y(e) {
        let { getCurrentView: t } = e,
          n = Z(),
          r = f(),
          a = (0, W.D)({
            mutationFn: (e) => v.$.syncCompletion({ completionRequest: e }),
            onSuccess: (e) => {
              e.comments.forEach((e) =>
                F.upsertComment({
                  id: (0, G.Z)(),
                  author: "Jidori",
                  original: e.originalText,
                  completion: e.replacementText,
                  rationale: e.rationale,
                  type: e.type,
                })
              );
            },
          });
        return (0, O.jsxs)("div", {
          className: "flex flex-col items-center gap-2",
          children: [
            (0, O.jsx)(d.Z, {
              value: n.documentGoal,
              name: "document-goal",
              className: "rounded-md text-sm",
              onChange: (e) => {
                F.editGoal(e.target.value);
              },
            }),
            (0, O.jsx)("div", {
              className: "mb-10 w-full space-y-2",
              children: n.comments.map((e) =>
                (0, O.jsx)(
                  X,
                  {
                    comment: e,
                    onAccept: () => {
                      let n = t();
                      n &&
                        (function (e, t) {
                          F.deleteComment(e.id);
                          let n = V(e, t.state);
                          if (!n) return;
                          let r =
                            "delete" === e.type
                              ? t.state.tr.delete(n.from, n.to)
                              : t.state.tr.replaceWith(
                                  n.from,
                                  n.to,
                                  t.state.schema.text(e.completion)
                                );
                          t.dispatch(r);
                        })(e, n);
                    },
                    onReject: () => {
                      let n = t();
                      n &&
                        (function (e, t) {
                          F.deleteComment(e.id);
                          let n = V(e, t.state);
                          if (!n) return;
                          let r = t.state.tr.replaceWith(
                            n.from,
                            n.to,
                            t.state.schema.text(e.original)
                          );
                          t.dispatch(r);
                        })(e, n);
                    },
                  },
                  e.id
                )
              ),
            }),
            (0, O.jsxs)("div", {
              className:
                "absolute bottom-0 z-10 flex w-1/4 space-x-2 rounded-xl px-2",
              children: [
                (0, O.jsx)(u.Z, {
                  value: r.userPrompt,
                  onChange: (e) => {
                    x.setUserPrompt(e.target.value);
                  },
                  name: "prompt-jidori",
                  color: "search",
                  className:
                    "grow bg-token-sidebar-surface-tertiary py-2.5 opacity-100",
                }),
                (0, O.jsx)(i.z, {
                  color: "primary",
                  className: "my-auto grow-0",
                  loading: a.isPending,
                  onClick: async () => {
                    var e, s, i;
                    let l =
                      null === (e = t()) || void 0 === e ? void 0 : e.state.doc;
                    if (!l) return;
                    let o = r.userPrompt,
                      c =
                        ((s = n.documentGoal),
                        (i = U.serialize(l, { tightLists: !0 })),
                        {
                          system:
                            "You are an expert writer editing a draft of a piece of writing. The goal of this document is: "
                              .concat(
                                s,
                                "\nCurrently, you are tasked with this job: "
                              )
                              .concat(
                                o,
                                '\n\nThe document is written in markdown. Do not edit the markdown formatting, only make changes to the text itself. If no changes are required in a section of the document, leave it alone.\nComments can be either edits or deletions of existing material. Your response should be a list of comments in JSON format with the following structure:\n{\n  comments: {\n    type: "delete" | "edit" (if delete, leave replacementText empty);\n    rationale: "string (explain the rationale behind the edit in a few words or short phrase)";\n    originalText: "string (the original string verbatim in plaintext)";\n    replacementText: "string (your suggested string in plaintext)";\n  }[]\n}\n\nReturn a list of comment objects in JSON as you edit the user\'s rough draft, pointing out issues and suggesting improvements. Here is the draft:'
                              ),
                          user: i,
                        });
                    await a.mutateAsync(
                      J(
                        J({}, r),
                        {},
                        { userPrompt: c.user, systemPrompt: c.system }
                      )
                    );
                  },
                  children: (0, O.jsx)(w.LbG, { className: "icon-sm" }),
                }),
              ],
            }),
          ],
        });
      }
      var $ = n(85452),
        ee = n(95407);
      function et(e) {
        let {
            visible: t,
            style: n,
            toggleBold: r,
            toggleItalic: a,
            view: s,
            onHide: i,
          } = e,
          { 0: l, 1: o } = (0, j.useState)(!1),
          c = f();
        if (!t) return null;
        let u = (e, t) => {
          o(!1),
            i(),
            F.upsertComment({
              id: (0, G.Z)(),
              completion: t,
              original: e,
              author: "Jidori",
            });
        };
        return (0, O.jsxs)("div", {
          style: n,
          className:
            "absolute flex items-center rounded-lg border border-token-border-heavy bg-token-sidebar-surface-secondary text-sm font-medium text-token-text-primary drop-shadow-md",
          children: [
            (0, O.jsx)("div", {
              role: "button",
              onClick: r,
              className: "border-r border-token-border-light p-2",
              children: "Bold",
            }),
            (0, O.jsx)("div", {
              role: "button",
              onClick: a,
              className: "border-l border-token-border-light p-2",
              children: "Italic",
            }),
            (0, O.jsx)("div", {
              role: "button",
              onClick: () => {
                o(!0),
                  Q(s, c, u, (e) => {
                    ee.m.danger("Error replacing selection", e), o(!1);
                  });
              },
              className: "border-l border-token-border-light p-2",
              children: l ? (0, O.jsx)($.Z, {}) : "Replace",
            }),
          ],
        });
      }
      var en = n(71307),
        er = n(60314);
      let ea = (0, en.S0)(/^\s*([-+*])\s$/, M.nodes.bullet_list),
        es = (0, en.S0)(/^\s*>\s$/, M.nodes.blockquote),
        ei = (0, en.zK)(/^```$/, M.nodes.code_block),
        el = (0, en.zK)(/^#\s$/, M.nodes.heading, () => ({ level: 1 })),
        eo = (0, en.zK)(/^##\s$/, M.nodes.heading, () => ({ level: 2 })),
        ec = (0, en.zK)(/^###\s$/, M.nodes.heading, () => ({ level: 3 })),
        eu = new en.VK(/^---$/, (e, t, n, r) => {
          let { tr: a } = e;
          if (t) {
            let e = M.nodes.paragraph.create(),
              t = M.nodes.horizontal_rule.create();
            a.replaceWith(n - 1, r, E.HY.from([t, e]));
            let s = a.mapping.map(r + 1);
            a.setSelection(er.Bs.near(a.doc.resolve(s)));
          }
          return a;
        }),
        ed = (0, en.Hw)({ rules: [ea, es, ei, el, eo, ec, eu] });
      var em = n(12498),
        ep = n(81093);
      let eh = {
        "Mod-z": ep.Yw,
        "Mod-y": ep.KX,
        "Mod-b": (0, em.w9)(M.marks.strong),
        "Mod-i": (0, em.w9)(M.marks.em),
      };
      var eg = n(56637);
      let ef = new er.H$("highlight"),
        ex = new er.Sy({
          key: ef,
          state: {
            init: () => eg.EH.empty,
            apply: (e, t, n, r) => {
              let a = e.getMeta(ef);
              if (a && a.length > 0) {
                let e = [];
                return (
                  a.forEach((t) => {
                    let n = V(t, r);
                    if (!n) return;
                    let a = eg.p.inline(n.from, n.to, {
                      class:
                        "delete" === t.type
                          ? _()["highlighted-delete"]
                          : _()["highlighted-edit"],
                    });
                    e.push(a);
                  }),
                  eg.EH.create(r.doc, e)
                );
              }
              return t.map(e.mapping, e.doc);
            },
          },
          props: {
            decorations(e) {
              return this.getState(e);
            },
          },
        });
      var eA = n(19841),
        ev = n(18004),
        eb = n(88488),
        ey = n(84692);
      function ej(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ew(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ej(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ej(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let eO = n(21389).Z.button(
        r ||
          (r = (0, s.Z)([
            "p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary",
          ]))
      );
      function ek(e) {
        let { onClick: t } = e;
        return (0, O.jsx)(l.u, {
          label: (0, O.jsx)(ey.Z, {
            id: "ConversationTurn.openEditorTooltip",
            defaultMessage: "Open in Editor",
          }),
          sideOffset: 0,
          children: (0, O.jsx)(eO, {
            onClick: t,
            children: (0, O.jsx)(c.eu, { className: "icon-md" }),
          }),
        });
      }
      function eN(e) {
        let { userMessage: t, assistantMessage: n, onClose: r } = e;
        if (
          !n ||
          "text" !== n.content.content_type ||
          0 === n.content.parts.length
        )
          return null;
        let a = "";
        t &&
          "text" === t.content.content_type &&
          t.content.parts.length > 0 &&
          (a = t.content.parts.join(""));
        let s = n.content.parts.join("");
        return (0, O.jsx)(o.Z, {
          type: "success",
          size: "custom",
          className: "max-w-7xl",
          isOpen: !0,
          onClose: r,
          primaryButton: (0, O.jsx)(i.z, {
            color: "primary",
            onClick: y.noop,
            children: "Save",
          }),
          secondaryButton: (0, O.jsx)(i.z, {
            color: "neutral",
            onClick: r,
            children: "Cancel",
          }),
          children: (0, O.jsx)(eS, {
            documentGoal: a,
            initialContent: s,
            classNames: "h-[80vh]",
          }),
        });
      }
      function eS(e) {
        let { documentGoal: t, initialContent: n, classNames: r } = e,
          a = (0, j.useRef)(null),
          { 0: s, 1: i } = (0, j.useState)(!1);
        return (
          (0, j.useEffect)(() => {
            let e = (e) => {
              "9" === e.key &&
                (e.metaKey || e.ctrlKey) &&
                (e.preventDefault(), i((e) => !e));
            };
            return (
              document.addEventListener("keydown", e),
              () => {
                document.removeEventListener("keydown", e);
              }
            );
          }, []),
          (0, O.jsxs)("div", {
            className: (0, eA.default)(
              "relative grid grid-flow-row grid-cols-8 overflow-y-auto",
              r
            ),
            children: [
              (0, O.jsx)("div", {
                className:
                  "no-scrollbar col-span-6 overflow-y-auto rounded-lg p-8",
                children: (0, O.jsx)(eE, {
                  ref: a,
                  init: { initialContent: n, documentGoal: t },
                }),
              }),
              (0, O.jsx)("div", {
                className: "col-span-2 mt-8 flex flex-col overflow-y-auto px-2",
                children: s
                  ? (0, O.jsx)(k, {})
                  : (0, O.jsx)(Y, {
                      getCurrentView: () => {
                        var e;
                        return null === (e = a.current) || void 0 === e
                          ? void 0
                          : e.getCurrentView();
                      },
                    }),
              }),
            ],
          })
        );
      }
      let eE = (0, j.forwardRef)((e, t) => {
        let { init: n } = e,
          r = (0, j.useRef)(null),
          { 0: a, 1: s } = (0, j.useState)(null),
          { 0: i, 1: l } = (0, j.useState)(!1),
          { 0: o, 1: c } = (0, j.useState)({}),
          u = (0, j.useCallback)(() => {
            if (!a) return;
            let { anchor: e, head: t } = a.state.selection,
              n = r.current.getBoundingClientRect();
            if (e !== t) {
              let e = a.coordsAtPos(t),
                r = Math.max(0, e.top - n.top - 10),
                s = e.left - n.left;
              c({ top: "".concat(r, "px"), left: "".concat(s, "px") }), l(!0);
            } else l(!1);
          }, [a]);
        return (
          (0, j.useEffect)(() => {
            if (a)
              return (
                a.dom.addEventListener("mouseup", u),
                a.dom.addEventListener("keyup", u),
                () => {
                  a.dom.removeEventListener("mouseup", u),
                    a.dom.removeEventListener("keyup", u);
                }
              );
          }, [a, u]),
          (0, j.useImperativeHandle)(t, () => ({
            getCurrentView: () => a || null,
          })),
          (0, j.useEffect)(() => {
            F.editGoal(n.documentGoal);
          }, []),
          (0, j.useEffect)(() => {
            if (!r.current) return;
            let e = er.yy.create({
                schema: M,
                doc: ((e) => {
                  if (e && 0 !== e.length) return T.parse(e);
                })(n.initialContent),
                plugins: [
                  (0, ep.m8)(),
                  ed,
                  (0, eb.h)(ew(ew({}, em.YR), eh)),
                  ex,
                ],
              }),
              t = new eg.tk(r.current, {
                state: e,
                attributes: { class: _()["jidori-editor"] },
              });
            return (
              (0, ev.Z)(t),
              t.focus(),
              s(t),
              () => {
                t.destroy();
              }
            );
          }, [n]),
          (window.editor = a),
          !(function (e) {
            let t = Z();
            (0, j.useEffect)(() => {
              if (!e || 0 === t.comments.length) return;
              let n = e.state.tr.setMeta(ef, t.comments);
              e.dispatch(n);
            }, [e, t.comments]);
          })(a),
          (0, O.jsxs)("div", {
            className: "w-full",
            children: [
              (0, O.jsx)(et, {
                visible: i,
                style: o,
                toggleBold: () => {
                  a &&
                    ((0, em.w9)(M.marks.strong)(a.state, a.dispatch),
                    a.focus());
                },
                toggleItalic: () => {
                  a && ((0, em.w9)(M.marks.em)(a.state, a.dispatch), a.focus());
                },
                onHide: () => l(!1),
                view: a,
              }),
              (0, O.jsx)("div", {
                className: (0, eA.default)(
                  "w-full cursor-text overflow-y-auto text-token-text-primary caret-token-text-primary"
                ),
                ref: r,
              }),
            ],
          })
        );
      });
      eE.displayName = "Editor";
    },
    80928: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          JidoriPromptControls: function () {
            return j;
          },
        });
      var r,
        a = n(18450),
        s = n(99945),
        i = n(58819),
        l = n(29287),
        o = n(21643),
        c = n(30269),
        u = n(67217),
        d = n(70079),
        m = n(35250);
      function p(e) {
        let { theme: t, onSave: n, onClose: r, onDelete: a } = e,
          { 0: s, 1: i } = (0, d.useState)(t.examples),
          { 0: p, 1: h } = (0, d.useState)(t.name);
        return (0, m.jsx)(u.Z, {
          type: "success",
          size: "custom",
          className: "max-w-4xl",
          isOpen: !0,
          onClose: r,
          title: "Editing theme: ".concat(p),
          hideSeparator: !0,
          showCloseButton: !0,
          primaryButton: (0, m.jsx)(l.z, {
            color: "primary",
            onClick: () => {
              n({ id: t.id, name: p, examples: s }), r();
            },
            children: "Save",
          }),
          secondaryButton: t.id
            ? (0, m.jsx)(l.z, {
                color: "neutral",
                onClick: () => {
                  a(t.id), r();
                },
                children: "Delete",
              })
            : null,
          children: (0, m.jsxs)("div", {
            className: "m-8 mt-0 flex flex-col gap-2",
            children: [
              (0, m.jsx)("span", { children: "Name" }),
              (0, m.jsx)(o.Z, {
                name: "theme-name",
                type: "text",
                value: p,
                onChange: (e) => h(e.target.value),
              }),
              (0, m.jsx)("span", { children: "Examples" }),
              (0, m.jsx)("div", {
                className: "flex flex-col gap-4",
                children: [...s, ""].map((e, t) =>
                  (0, m.jsx)(
                    c.Z,
                    {
                      rows: 5,
                      value: e,
                      onChange: (e) => {
                        let n = [...s];
                        (n[t] = e.target.value), i(n);
                      },
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        });
      }
      var h = n(60581),
        g = n(82473),
        f = n(25494),
        x = n(61236),
        A = n(1454);
      function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : v(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let y = n(21389).Z.div(
        r ||
          (r = (0, s.Z)([
            "py-1 bg-token-main-surface-primary rounded-md border border-token-border-light text-xs font-medium text-token-text-tertiary hover:bg-token-main-surface-secondary hover:text-token-text-primary px-2.5 radix-state-open:bg-token-main-surface-secondary radix-state-open:text-token-text-primary",
          ]))
      );
      function j(e) {
        let { setPromptMetadataValue: t } = e,
          { data: n } = (0, x.a)({
            queryKey: ["jidoriSettings"],
            queryFn: async () => h.$.getSettings(),
          }),
          { data: r } = (0, x.a)({
            queryKey: ["jidoriThemes"],
            queryFn: async () => h.$.getThemes(),
          }),
          a = (function () {
            let e = (0, g.NL)();
            return (0, f.D)({
              mutationFn: (e) => h.$.postSettings(e),
              onSuccess: () => {
                e.refetchQueries({ queryKey: ["jidoriSettings"] });
              },
            });
          })(),
          s = (function () {
            let e = (0, g.NL)();
            return (0, f.D)({
              mutationFn: (e) => h.$.postThemes(e),
              onSuccess: () => {
                e.refetchQueries({ queryKey: ["jidoriThemes"] });
              },
            });
          })(),
          i = (function () {
            let e = (0, g.NL)();
            return (0, f.D)({
              mutationFn: (e) => h.$.deleteTheme(e),
              onSuccess: () => {
                e.refetchQueries({ queryKey: ["jidoriThemes"] });
              },
            });
          })(),
          { 0: l, 1: o } = (0, d.useState)(null);
        return (
          (0, d.useEffect)(() => {
            n &&
              t((e) =>
                b(
                  b({}, e),
                  {},
                  {
                    jidori: b(
                      b({}, e.jidori),
                      {},
                      { language: n.language.value, length: n.length.value }
                    ),
                  }
                )
              );
          }, [n, t]),
          n
            ? (0, m.jsx)("div", {
                className:
                  "flex justify-between bg-gradient-to-t from-token-main-surface-primary to-transparent px-4 pb-3.5",
                children: (0, m.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    [n.language, n.length].map((e, n) =>
                      (0, m.jsx)(
                        O,
                        {
                          setting: e,
                          onClick: async (n) => {
                            a.mutate({ [e.type]: n }),
                              t((t) =>
                                b(
                                  b({}, t),
                                  {},
                                  {
                                    jidori: b(
                                      b({}, t.jidori),
                                      {},
                                      { [e.type]: n }
                                    ),
                                  }
                                )
                              );
                          },
                        },
                        n
                      )
                    ),
                    r &&
                      (0, m.jsx)(w, {
                        themes: r,
                        currentTheme: l,
                        addTheme: (e) => {
                          s.mutate(e);
                        },
                        deleteTheme: (e) => {
                          i.mutate(e);
                        },
                        onClick: (e) => {
                          o(e),
                            t((t) =>
                              b(
                                b({}, t),
                                {},
                                {
                                  jidori: b(
                                    b({}, t.jidori),
                                    {},
                                    { theme: e.examples }
                                  ),
                                }
                              )
                            );
                        },
                      }),
                  ],
                }),
              })
            : null
        );
      }
      function w(e) {
        let {
            onClick: t,
            currentTheme: n,
            addTheme: r,
            deleteTheme: a,
            themes: s,
          } = e,
          { 0: l, 1: o } = (0, d.useState)(!1),
          { 0: c, 1: u } = (0, d.useState)(null);
        return (0, m.jsxs)(i.Z.Root, {
          children: [
            (0, m.jsxs)(y, {
              $as: i.Z.Trigger,
              className: "pr-1.5",
              children: [n ? n.name : "Themes", (0, m.jsx)(A.bTu, {})],
            }),
            (0, m.jsx)(i.Z.Portal, {
              children: (0, m.jsxs)(i.Z.Content, {
                side: "top",
                children: [
                  s.map((e, n) =>
                    (0, m.jsxs)(
                      i.Z.Item,
                      {
                        className: "flex justify-between px-4",
                        children: [
                          (0, m.jsx)("div", {
                            className: "grow",
                            onClick: () => t(e),
                            children: e.name,
                          }),
                          (0, m.jsx)("span", {
                            className: "grow-0",
                            onClick: () => {
                              u(e), o(!0);
                            },
                            children: (0, m.jsx)(A.vPQ, {
                              className: "icon-sm",
                            }),
                          }),
                        ],
                      },
                      n
                    )
                  ),
                  (0, m.jsx)(i.Z.Item, {
                    onClick: () => {
                      o(!0);
                    },
                    className: "px-4",
                    children: "New Theme",
                  }),
                ],
              }),
            }),
            l &&
              (0, m.jsx)(p, {
                theme: null != c ? c : { examples: [], name: "" },
                onSave: (e) => {
                  r(e);
                },
                onClose: () => {
                  o(!1);
                },
                onDelete: (e) => {
                  a(e);
                },
              }),
          ],
        });
      }
      function O(e) {
        let { onClick: t, setting: n } = e;
        return (0, m.jsxs)(i.Z.Root, {
          children: [
            (0, m.jsxs)(y, {
              $as: i.Z.Trigger,
              className: "pr-1.5",
              children: [
                n.value ? n.value : n.display_name,
                (0, m.jsx)(A.bTu, {}),
              ],
            }),
            (0, m.jsx)(i.Z.Portal, {
              children: (0, m.jsx)(i.Z.Content, {
                side: "top",
                children: n.options.map((e, n) =>
                  (0, m.jsx)(
                    i.Z.Item,
                    { onClick: () => t(e.value), children: e.value },
                    n
                  )
                ),
              }),
            }),
          ],
        });
      }
    },
    25048: function (e, t, n) {
      "use strict";
      n.d(t, {
        NX: function () {
          return o;
        },
        q$: function () {
          return c;
        },
      });
      var r = n(18450),
        a = n(51362),
        s = n(78103);
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      let l = { lastRequest: {}, lastResponse: "" },
        o = (0, s.ZP)(
          (0, a.n)(() =>
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? i(Object(n), !0).forEach(function (t) {
                      (0, r.Z)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : i(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
              }
              return e;
            })({}, l)
          )
        ),
        c = {
          setLastRequest: (e) => {
            o.setState((t) => {
              t.lastRequest = e;
            });
          },
          setLastResponse: (e) => {
            o.setState((t) => {
              t.lastResponse = e;
            });
          },
          appendToResponse: (e) => {
            o.setState((t) => {
              t.lastResponse += e;
            });
          },
        };
    },
    60581: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return u;
        },
      });
      var r = n(18450),
        a = n(25048),
        s = n(4466),
        i = n(48879);
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let c = "https://jidori.g1.internal.services.openai.org";
      class u {
        static healthcheck() {
          return s.c.get("".concat(c, "/api/completion"));
        }
        static async streamCompletion(e) {
          let { completionRequest: t, onMessage: n } = e;
          a.q$.setLastRequest(t),
            a.q$.setLastResponse(""),
            await (0, i.L)("".concat(c, "/api/completion"), {
              method: "POST",
              headers: o(
                {
                  "Content-Type": "application/json",
                  Accept: "text/event-stream",
                  Connection: "keep-alive",
                },
                await s.c.getAuthedHeaders()
              ),
              body: JSON.stringify({
                system_prompt: t.systemPrompt,
                user_prompt: t.userPrompt,
                model: t.model,
              }),
              credentials: "include",
              onmessage(e) {
                a.q$.appendToResponse(e.data), n(e.data);
              },
              onclose() {
                console.log("Connection closed by the server");
              },
              onerror(e) {
                throw (console.log("There was an error from server", e), e);
              },
            });
        }
        static async getSettings() {
          return s.c.get("".concat(c, "/api/settings"));
        }
        static async syncCompletion(e) {
          let { completionRequest: t } = e;
          a.q$.setLastRequest(t), a.q$.setLastResponse("");
          let n = await s.c.post("".concat(c, "/api/completion/lr"), {
            system_prompt: t.systemPrompt,
            user_prompt: t.userPrompt,
            model: t.model,
          });
          return (
            a.q$.setLastResponse(JSON.stringify(n.message, null, 2)), n.message
          );
        }
        static async postSettings(e) {
          let { language: t, length: n } = e;
          return s.c.post("".concat(c, "/api/settings"), {
            language: t,
            length: n,
          });
        }
        static async getThemes() {
          return s.c.get("".concat(c, "/api/settings/themes"));
        }
        static async postThemes(e) {
          return s.c.post("".concat(c, "/api/settings/themes"), o({}, e));
        }
        static async deleteTheme(e) {
          return s.c.delete("".concat(c, "/api/settings/themes/").concat(e));
        }
      }
    },
    75388: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return c;
        },
      });
      var r = n(11335),
        a = n(19841),
        s = n(70079),
        i = n(15118),
        l = n(35250);
      let o = {
        [i.kQ.CONNECTING]: "Connecting",
        [i.kQ.OPEN]: "Open",
        [i.kQ.CLOSING]: "Closing",
        [i.kQ.CLOSED]: "Closed",
        [i.kQ.UNINSTANTIATED]: "Uninstantiated",
      };
      function c(e) {
        let { readyState: t, className: n } = e,
          { 0: c, 1: u } = (0, s.useState)(!0);
        return ((0, s.useEffect)(() => {
          setTimeout(() => {
            u(!0);
          }, 1e3);
        }, []),
        t !== i.kQ.OPEN && c)
          ? (0, l.jsx)("div", {
              className: (0, a.default)(
                "flex items-center gap-2 p-3 text-sm",
                n
              ),
              children: (0, l.jsx)(r.u, {
                label: o[t],
                sideOffset: 0,
                side: "right",
                children: (0, l.jsx)("div", {
                  className: (0, a.default)(
                    "h-2 w-2 rounded-full",
                    (t === i.kQ.CLOSING || t === i.kQ.CONNECTING) &&
                      "bg-yellow-500",
                    (t === i.kQ.CLOSED || t === i.kQ.UNINSTANTIATED) &&
                      "bg-red-500",
                    c ? "block" : "hidden"
                  ),
                }),
              }),
            })
          : null;
      }
    },
    25617: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return v;
        },
        q: function () {
          return b;
        },
      });
      var r = n(29287),
        a = n(8700),
        s = n(67217),
        i = n(13847),
        l = n(19841),
        o = n(51018),
        c = n.n(o),
        u = n(70079),
        d = n(1454),
        m = n(78343),
        p = n(78103),
        h = n(35601),
        g = n(19216),
        f = n(20963),
        x = n(35250);
      let A = c()(
          () =>
            Promise.all([n.e(1170), n.e(7178)])
              .then(n.bind(n, 17178))
              .then((e) => e.default),
          { ssr: !1, loadableGenerated: { webpack: () => [17178] } }
        ),
        v = (0, p.ZP)((e) => ({
          threadUserId: void 0,
          setThreadUserId: (t) => e({ threadUserId: t }),
        }));
      function b(e) {
        let { isOpen: t, onDebugClose: n } = e;
        return (0, x.jsx)(s.Z, {
          isOpen: t,
          onClose: n,
          type: "success",
          size: "fullscreen",
          className: "min-h-[50vh] max-w-[96vw]",
          rootClassName: "z-50",
          children: (0, x.jsx)(w, {}),
        });
      }
      let y = (e, t) => {
        let n = JSON.stringify(t, null, 2),
          r = new Blob([n], { type: "application/json" }),
          a = window.URL.createObjectURL(r),
          s = document.createElement("a");
        (s.href = a),
          (s.download = e),
          s.click(),
          window.URL.revokeObjectURL(a);
      };
      function j(e) {
        let { downloadFilename: t, downloadData: n } = e,
          { user: a } = (0, h.A)();
        return (0, x.jsxs)("div", {
          className: "flex justify-center gap-2",
          children: [
            a && (0, x.jsx)(k, { id: a.id }),
            (0, x.jsxs)(r.z, {
              color: "neutral",
              onClick: () => y(t, n),
              children: [
                (0, x.jsx)(d._hL, { className: "icon-sm" }),
                " Download ",
                t,
              ],
            }),
            (0, x.jsxs)(r.z, {
              color: "neutral",
              as: "link",
              to: "https://openai.enterprise.slack.com/archives/C06D0FATXSQ",
              openNewTab: !0,
              children: [
                (0, x.jsx)(d.nY6, { className: "icon-sm" }),
                " Give feedback",
              ],
            }),
          ],
        });
      }
      function w() {
        let e = (0, g.nn)(g.LW.threadId),
          t = (0, g.nn)(g.LW.turns),
          { threadUserId: n } = v(),
          { data: r, isLoading: a } = (0, f.Y)({
            threadId: e,
            threadUserId: n,
            refetchOnMount: "always",
          });
        if (!r || a) return (0, x.jsx)("div", { children: "Loading..." });
        let { thread: s } = r;
        return (0, x.jsxs)("div", {
          className: "flex flex-col gap-2 break-words py-6 font-mono text-xs",
          children: [
            (0, x.jsx)(j, { downloadFilename: "thread.json", downloadData: s }),
            (0, x.jsx)("div", {
              className: "px-6 pb-6",
              children: (0, x.jsx)(O, { data: s, collapsed: 3 }),
            }),
            t.map((e, t) => {
              var n;
              return (0, x.jsxs)(
                "div",
                {
                  className: (0, l.default)(
                    "flex flex-col gap-1 p-6",
                    e.index % 2 == 0 && "bg-token-main-surface-tertiary"
                  ),
                  children: [
                    (0, x.jsxs)("div", {
                      children: [
                        (0, x.jsx)("span", {
                          className: "font-semibold",
                          children: "[user]",
                        }),
                        " ",
                        e.user_query,
                      ],
                    }),
                    (0, x.jsxs)("div", {
                      children: [
                        (0, x.jsx)("span", {
                          className: "font-semibold",
                          children: "[model]",
                        }),
                        " ",
                        null === (n = e.model_response) || void 0 === n
                          ? void 0
                          : n.text,
                      ],
                    }),
                    (0, x.jsx)("div", {
                      className: "mt-2",
                      children: (0, x.jsx)(O, { data: e }),
                    }),
                  ],
                },
                t
              );
            }),
          ],
        });
      }
      function O(e) {
        let { data: t, collapsed: n } = e,
          { 0: r, 1: a } = (0, u.useState)(null == n || n);
        return (0, x.jsxs)("div", {
          className: "flex flex-col items-start gap-1",
          children: [
            (0, x.jsx)("button", {
              onClick: () => a(!r),
              className: "flex items-center gap-1",
              children: r
                ? (0, x.jsxs)(x.Fragment, {
                    children: [(0, x.jsx)(m.rIY, { size: 14 }), " Expand all"],
                  })
                : (0, x.jsxs)(x.Fragment, {
                    children: [
                      (0, x.jsx)(m.NsE, { size: 14 }),
                      " Collapse all",
                    ],
                  }),
            }),
            (0, x.jsx)(
              A,
              {
                json: t,
                jsonViewProps: { collapsed: r, shortenTextAfterLength: 0 },
              },
              String(r)
            ),
          ],
        });
      }
      function k(e) {
        let { id: t } = e,
          n = (0, u.useCallback)(() => {
            (0, i.v)(t);
          }, [t]);
        return (0, x.jsxs)("p", {
          className: "flex items-center gap-2",
          children: [
            (0, x.jsx)("span", {
              className: "font-semibold",
              children: "User ID:",
            }),
            (0, x.jsx)("span", {
              className: "text-gray-500 dark:text-white",
              children: t,
            }),
            (0, x.jsx)(a.Z, { onCopy: n }),
          ],
        });
      }
    },
    82074: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var r = n(29287),
        a = n(21643),
        s = n(26169),
        i = n.n(s),
        l = n(91530),
        o = n.n(l),
        c = n(70079),
        u = n(20735),
        d = n(2689),
        m = n(19216),
        p = n(72150),
        h = n(45456),
        g = n(35250);
      function f() {
        (0, h.e)();
        let [e, t] = (0, p.Z)("MACHINE_OUTPUT_FILE_1_PATH", "", i()),
          [n, s] = (0, p.Z)("MACHINE_OUTPUT_FILE_2_PATH", "", i()),
          { 0: l, 1: f } = (0, c.useState)([]),
          { 0: x, 1: A } = (0, c.useState)([]),
          v = async () => {
            async function t(e) {
              let t = await fetch("http://localhost:9000/read?path=".concat(e)),
                n = (await t.text()).split("\n"),
                r = [];
              for (let e of n) e && r.push(JSON.parse(e));
              return (
                console.log(
                  "fetched machine output file content from ".concat(e),
                  r
                ),
                r
              );
            }
            f(await t(e)), A(await t(n));
          },
          { 0: b, 1: y } = (0, c.useState)(1),
          j = 1 === b ? l : x,
          { 0: w, 1: O } = (0, c.useState)(0);
        (0, c.useEffect)(() => {
          var e;
          let t = null === (e = j[w]) || void 0 === e ? void 0 : e.thread;
          t &&
            m.P3.setThread(
              t.id,
              t.turns.map((e) => e.api_turn)
            );
        }, [j, w]);
        let k = (0, m.nn)(m.LW.turns),
          N = k.length > 0 ? k[0].user_query : "",
          S = (0, c.useCallback)(
            (e) => {
              O((t) => {
                let n = t + e;
                return 0 <= n && n < j.length ? n : t;
              });
            },
            [j.length]
          );
        return (
          (0, c.useEffect)(() => {
            let e = (e) => {
              "ArrowUp" == e.key && S(-1),
                "ArrowDown" == e.key && S(1),
                "ArrowLeft" == e.key && y(1),
                "ArrowRight" == e.key && y(2);
            };
            return (
              document.addEventListener("keydown", e),
              () => {
                document.removeEventListener("keydown", e);
              }
            );
          }, [S]),
          (0, g.jsxs)("div", {
            className: "flex h-screen w-screen flex-row",
            children: [
              (0, g.jsxs)("div", {
                className: "flex w-[400px] flex-col gap-2 border-r-[1px] p-2",
                children: [
                  (0, g.jsxs)("div", {
                    className: "flex flex-row items-baseline gap-2",
                    children: [
                      (0, g.jsx)("div", {
                        className: "whitespace-nowrap",
                        children: "file 1",
                      }),
                      (0, g.jsx)(a.Z, {
                        name: "machineOutputFile1Path",
                        className: "flex-grow",
                        value: e,
                        placeholder: "Machine output file #1",
                        onChange: (e) => t(e.target.value),
                      }),
                    ],
                  }),
                  (0, g.jsxs)("div", {
                    className: "flex flex-row items-baseline gap-2",
                    children: [
                      (0, g.jsx)("div", {
                        className: "whitespace-nowrap",
                        children: "file 2",
                      }),
                      (0, g.jsx)(a.Z, {
                        name: "machineOutputFile2Path",
                        className: "flex-grow",
                        value: n,
                        placeholder: "Machine output file #2",
                        onChange: (e) => s(e.target.value),
                      }),
                    ],
                  }),
                  (0, g.jsx)(r.z, {
                    onClick: v,
                    children: "Load/refresh files",
                  }),
                  (0, g.jsxs)("div", {
                    className: "flex flex-row items-baseline gap-2",
                    children: [
                      (0, g.jsx)("div", {
                        className: "whitespace-nowrap",
                        children: "show threads from file",
                      }),
                      (0, g.jsx)(a.Z, {
                        name: "universe",
                        className: "flex-grow",
                        value: b.toString(),
                        placeholder: "Universe",
                        type: "number",
                        onChange: (e) => {
                          let t = parseInt(e.target.value);
                          1 != t &&
                            2 != t &&
                            console.error("invalid file number", t),
                            y(t);
                        },
                      }),
                    ],
                  }),
                  (0, g.jsxs)("div", {
                    className: "flex flex-row items-baseline gap-2",
                    children: [
                      (0, g.jsx)("div", {
                        className: "whitespace-nowrap",
                        children: "thread index",
                      }),
                      (0, g.jsx)(a.Z, {
                        name: "index",
                        className: "flex-grow",
                        value: w.toString(),
                        placeholder: "Index",
                        type: "number",
                        onChange: (e) => O(parseInt(e.target.value)),
                      }),
                      (0, g.jsxs)("div", {
                        className: "whitespace-nowrap",
                        children: ["of ", j.length],
                      }),
                    ],
                  }),
                ],
              }),
              (0, g.jsx)(d.u, {
                readyState: 1,
                hasSubmittedInitialQuery: !0,
                searchQuery: N,
                followupQuery: "",
                onUpdateSearchQuery: o(),
                onUpdateFollowupQuery: o(),
                onSubmitFollowup: o(),
                onSubmitSearch: o(),
                settings: u.Z,
                onUpdateSetting: o(),
                onReset: o(),
                onRetryQuery: o(),
              }),
            ],
          })
        );
      }
    },
    75138: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return o;
        },
        l: function () {
          return l;
        },
      });
      var r = n(19841),
        a = n(83737),
        s = n(70079),
        i = n(35250);
      function l(e) {
        let {
            lines: t = 1,
            variance: n = 0,
            size: l = "base",
            width: o = 50,
            widthVariance: c = 50,
            className: u,
          } = e,
          { 0: d } = (0, s.useState)(
            Array.from(
              { length: t + Math.random() * (null != n ? n : 0) },
              () => o + Math.random() * c
            )
          ),
          m = "";
        switch (l) {
          case "sm":
            m = "h-3 mb-2 mt-0.5";
            break;
          case "base":
            m = "h-4 my-2";
            break;
          case "lg":
            m = "h-5 my-2";
        }
        return (0, i.jsx)(i.Fragment, {
          children: d.map((e, t) =>
            (0, i.jsx)(
              "div",
              {
                className: (0, r.default)(
                  "relative w-full overflow-hidden rounded-md bg-token-sidebar-surface-secondary",
                  m,
                  u
                ),
                style: { width: "".concat(e, "%") },
                children: (0, i.jsx)(a.E.div, {
                  className:
                    "absolute left-0 top-0 h-full w-full rotate-45 bg-gradient-to-r from-transparent via-black/20 to-transparent opacity-50 dark:via-white/5",
                  animate: {
                    x: ["-100%", "100%"],
                    opacity: [1, 0, 1],
                    transition: {
                      repeat: 1 / 0,
                      repeatType: "loop",
                      duration: 1.5 + t,
                    },
                  },
                }),
              },
              t
            )
          ),
        });
      }
      function o(e) {
        let {
            lines: t = 1,
            variance: n = 0,
            width: r = 50,
            widthVariance: l = 50,
            className: o,
          } = e,
          c = s.useMemo(
            () =>
              Array.from(
                { length: t + Math.random() * (null != n ? n : 0) },
                () => r + Math.random() * l
              ),
            [t, n, r, l]
          );
        return (0, i.jsx)("div", {
          className: "mt-2 flex flex-col items-start gap-2 ".concat(o),
          children: c.map((e, t) =>
            (0, i.jsx)(
              a.E.div,
              {
                className:
                  "h-[18px] rounded-md bg-token-border-light dark:bg-white/10",
                style: { width: "".concat(e, "%") },
                initial: { opacity: 1 },
                animate: { opacity: [1, 0.4] },
                transition: {
                  repeat: 1 / 0,
                  repeatType: "reverse",
                  duration: 0.85,
                  ease: "easeInOut",
                  delay: 0.07 * t,
                },
              },
              t
            )
          ),
        });
      }
    },
    35601: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return i;
        },
        c: function () {
          return s;
        },
      });
      var r = n(70079),
        a = n(20735);
      let s = (0, r.createContext)({
          searchQuery: "",
          user: null,
          userHash: null,
          settings: a.Z,
          userMetadata: {
            cf_connecting_ip: null,
            ip_city: null,
            time_zone: null,
            user_country: null,
            user_locale: null,
            user_region: null,
            user_region_code: null,
            latitude: null,
            longitude: null,
            locationAccuracy: null,
          },
        }),
        i = () => (0, r.useContext)(s);
    },
    20735: function (e, t, n) {
      "use strict";
      n.d(t, {
        Wt: function () {
          return N;
        },
        Z: function () {
          return k;
        },
        Zr: function () {
          return E;
        },
      });
      var r,
        a = n(99945),
        s = n(18450),
        i = n(67739),
        l = n(29287),
        o = n(21643),
        c = n(30269),
        u = n(282),
        d = n(88342),
        m = n(11335),
        p = n(67217),
        h = n(64276),
        g = n(19841),
        f = n(85252),
        x = n(70079),
        A = n(21389),
        v = n(20724),
        b = n(90240),
        y = n(35250);
      let j = ["children"];
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                (0, s.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : w(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let k = {
        useLocation: !1,
        suggestions: !0,
        agentSettingsOverrides: {
          model_family: v.tQ.GPT_3_5,
          eval_preset: "production",
          search_engine: v.lv.Bing,
          use_labrador: !0,
          robots_mode: v.K1.Aggressive,
          show_image_to_model: !0,
        },
        useRewrittenSnippets: !1,
        rewrittenSnippetsPrompt:
          'The next message will be the text contents of a webpage.\nSummarize the webpage into one short English sentence, no more than 300 characters, and generate an appropriate short title.\nYour summary is a broad overview that describes the main points of the webpage.\nDo not refer to the webpage itself; your response is a drop-in summary. \nThe page\'s original title is "{title}".\nBe succinct and don\'t start the summary with "The webpage".\nReply in a JSON format with the keys "title" and "summary".',
      };
      function N(e) {
        return !!(
          "object" == typeof e &&
          "boolean" == typeof e.useLocation &&
          "boolean" == typeof e.suggestions &&
          (0, v.mX)(e.agentSettingsOverrides)
        );
      }
      function S(e) {
        let { children: t } = e,
          n = (0, i.Z)(e, j);
        return (0, y.jsx)(
          d.Z.Content,
          O(
            O({}, n),
            {},
            { className: (0, g.default)("z-50", n.className), children: t }
          )
        );
      }
      function E(e) {
        var t, n, r, a, s, i, g, A, j, w, N, E;
        let { onClose: _, settings: C, onUpdateSetting: D } = e,
          { theme: M, setTheme: R } = (0, f.F)(),
          { 0: L, 1: T } = (0, x.useState)(C.rewrittenSnippetsPrompt);
        return (0, y.jsx)(p.Z, {
          isOpen: !0,
          onClose: () => {
            L !== C.rewrittenSnippetsPrompt &&
              D(O(O({}, C), {}, { rewrittenSnippetsPrompt: L })),
              _();
          },
          type: "success",
          rootClassName: "z-40",
          children: (0, y.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "theme",
                    className: "text-sm",
                    children: "Theme",
                  }),
                  (0, y.jsxs)(d.Z.Root, {
                    value: M,
                    onValueChange: (e) => {
                      e !== M && R(e);
                    },
                    children: [
                      (0, y.jsxs)(d.Z.Trigger, {
                        id: "theme",
                        children: [
                          (0, y.jsx)(d.Z.Value, {}),
                          (0, y.jsx)(d.Z.Icon, {}),
                        ],
                      }),
                      (0, y.jsx)(d.Z.Portal, {
                        children: (0, y.jsxs)(S, {
                          children: [
                            (0, y.jsx)(d.Z.Item, {
                              value: "light",
                              children: "Light",
                            }),
                            (0, y.jsx)(d.Z.Item, {
                              value: "dark",
                              children: "Dark",
                            }),
                            (0, y.jsx)(d.Z.Item, {
                              value: "system",
                              children: "System",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "location",
                    className: "text-sm",
                    children: "Use location from browser",
                  }),
                  (0, y.jsx)(u.Z, {
                    onChange: (e) => {
                      (0, b.XB)(e), D(O(O({}, C), {}, { useLocation: e }));
                    },
                    enabled: C.useLocation,
                    label: "Use location from browser",
                  }),
                ],
              }),
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "suggestions",
                    className: "text-sm",
                    children: "Enable suggestions",
                  }),
                  (0, y.jsx)(u.Z, {
                    onChange: (e) => D(O(O({}, C), {}, { suggestions: e })),
                    enabled: C.suggestions,
                    label: "Enable suggestions",
                  }),
                ],
              }),
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "ranker_model",
                    className: "text-sm",
                    children: "Model family",
                  }),
                  (0, y.jsxs)(d.Z.Root, {
                    value:
                      null !==
                        (t =
                          null === (n = C.agentSettingsOverrides) ||
                          void 0 === n
                            ? void 0
                            : n.model_family) && void 0 !== t
                        ? t
                        : k.agentSettingsOverrides.model_family,
                    onValueChange: (e) => {
                      D(
                        O(
                          O({}, C),
                          {},
                          {
                            agentSettingsOverrides: O(
                              O({}, C.agentSettingsOverrides),
                              {},
                              { model_family: e }
                            ),
                          }
                        )
                      );
                    },
                    children: [
                      (0, y.jsxs)(d.Z.Trigger, {
                        id: "model_family",
                        children: [
                          (0, y.jsx)(d.Z.Value, {}),
                          (0, y.jsx)(d.Z.Icon, {}),
                        ],
                      }),
                      (0, y.jsx)(d.Z.Portal, {
                        children: (0, y.jsxs)(S, {
                          children: [
                            (0, y.jsx)(d.Z.Item, {
                              value: v.tQ.GPT_3_5,
                              children: "GPT3.5 (Sahara-V; POR)",
                            }),
                            (0, y.jsx)(d.Z.Item, {
                              value: v.tQ.GPT_4_LITE,
                              children: "GPT4-Lite (Scallion)",
                            }),
                            (0, y.jsx)(d.Z.Item, {
                              value: v.tQ.GPT_4,
                              children: "GPT4",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "search_engine",
                    className: "text-sm",
                    children: "Search engine",
                  }),
                  (0, y.jsxs)(d.Z.Root, {
                    value:
                      null !==
                        (r =
                          null === (a = C.agentSettingsOverrides) ||
                          void 0 === a
                            ? void 0
                            : a.search_engine) && void 0 !== r
                        ? r
                        : k.agentSettingsOverrides.search_engine,
                    onValueChange: (e) => {
                      D(
                        O(
                          O({}, C),
                          {},
                          {
                            agentSettingsOverrides: O(
                              O({}, C.agentSettingsOverrides),
                              {},
                              { search_engine: e }
                            ),
                          }
                        )
                      );
                    },
                    children: [
                      (0, y.jsxs)(d.Z.Trigger, {
                        id: "search_engine",
                        children: [
                          (0, y.jsx)(d.Z.Value, {}),
                          (0, y.jsx)(d.Z.Icon, {}),
                        ],
                      }),
                      (0, y.jsx)(d.Z.Portal, {
                        children: (0, y.jsxs)(S, {
                          children: [
                            (0, y.jsx)(d.Z.Item, {
                              value: v.lv.Bing,
                              children: "Bing (POR)",
                            }),
                            (0, y.jsx)(d.Z.Item, {
                              value: v.lv.Sydney,
                              children: "Sydney",
                            }),
                            (0, y.jsx)(d.Z.Item, {
                              value: v.lv.Fortis,
                              children: "Fortis",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "use_labrador",
                    className: "text-sm",
                    children: "Internal search (Labrador)",
                  }),
                  (0, y.jsx)(u.Z, {
                    onChange: (e) =>
                      D(
                        O(
                          O({}, C),
                          {},
                          {
                            agentSettingsOverrides: O(
                              O({}, C.agentSettingsOverrides),
                              {},
                              { use_labrador: e }
                            ),
                          }
                        )
                      ),
                    enabled:
                      null !==
                        (s =
                          null === (i = C.agentSettingsOverrides) ||
                          void 0 === i
                            ? void 0
                            : i.use_labrador) && void 0 !== s
                        ? s
                        : k.agentSettingsOverrides.use_labrador,
                    label: "Internal search (Labrador)",
                  }),
                ],
              }),
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "show_image_to_model",
                    className: "text-sm",
                    children: "Image search",
                  }),
                  (0, y.jsx)(u.Z, {
                    onChange: (e) =>
                      D(
                        O(
                          O({}, C),
                          {},
                          {
                            agentSettingsOverrides: O(
                              O({}, C.agentSettingsOverrides),
                              {},
                              { show_image_to_model: e }
                            ),
                          }
                        )
                      ),
                    enabled:
                      null !==
                        (g =
                          null === (A = C.agentSettingsOverrides) ||
                          void 0 === A
                            ? void 0
                            : A.show_image_to_model) && void 0 !== g
                        ? g
                        : k.agentSettingsOverrides.show_image_to_model,
                    label: "Image search",
                  }),
                ],
              }),
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "robots_mode",
                    className: "text-sm",
                    children: "Robots mode",
                  }),
                  (0, y.jsxs)(d.Z.Root, {
                    value:
                      null !==
                        (j =
                          null === (w = C.agentSettingsOverrides) ||
                          void 0 === w
                            ? void 0
                            : w.robots_mode) && void 0 !== j
                        ? j
                        : k.agentSettingsOverrides.robots_mode,
                    onValueChange: (e) => {
                      D(
                        O(
                          O({}, C),
                          {},
                          {
                            agentSettingsOverrides: O(
                              O({}, C.agentSettingsOverrides),
                              {},
                              { robots_mode: e }
                            ),
                          }
                        )
                      );
                    },
                    children: [
                      (0, y.jsxs)(d.Z.Trigger, {
                        id: "robots_mode",
                        children: [
                          (0, y.jsx)(d.Z.Value, {}),
                          (0, y.jsx)(d.Z.Icon, {}),
                        ],
                      }),
                      (0, y.jsx)(d.Z.Portal, {
                        children: (0, y.jsxs)(S, {
                          children: [
                            (0, y.jsx)(d.Z.Item, {
                              value: v.K1.Conservative,
                              children: "Conservative",
                            }),
                            (0, y.jsx)(d.Z.Item, {
                              value: v.K1.Aggressive,
                              children: "Aggressive (POR)",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "eval_preset",
                    className: "text-sm",
                    children: "Eval preset",
                  }),
                  (0, y.jsx)(o.Z, {
                    name: "eval_preset",
                    className: "w-64",
                    value:
                      null !== (N = C.agentSettingsOverrides.eval_preset) &&
                      void 0 !== N
                        ? N
                        : k.agentSettingsOverrides.eval_preset,
                    onChange: (e) =>
                      D(
                        O(
                          O({}, C),
                          {},
                          {
                            agentSettingsOverrides: O(
                              O({}, C.agentSettingsOverrides),
                              {},
                              { eval_preset: e.target.value }
                            ),
                          }
                        )
                      ),
                  }),
                ],
              }),
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "use_rewritten_snippets",
                    className: "text-sm",
                    children: "Rewrite snippets and titles",
                  }),
                  (0, y.jsx)(u.Z, {
                    onChange: (e) =>
                      D(O(O({}, C), {}, { useRewrittenSnippets: e })),
                    enabled:
                      null !== (E = C.useRewrittenSnippets) && void 0 !== E
                        ? E
                        : k.useRewrittenSnippets,
                    label: "Rewrite snippets and titles",
                  }),
                ],
              }),
              C.useRewrittenSnippets &&
                (0, y.jsx)(P, {
                  children: (0, y.jsxs)("div", {
                    className: "w-full",
                    children: [
                      (0, y.jsx)(h._, {
                        htmlFor: "rewritten_snippets_prompt",
                        className: "text-sm",
                        children: (0, y.jsx)(m.u, {
                          label:
                            "{title} and {url} will be replaced with the original title and URL of the page. The message after the prompt will be the text of the webpage.",
                          className: "z-50",
                          side: "left",
                          children: "Rewritten snippets prompt",
                        }),
                      }),
                      (0, y.jsx)(c.Z, {
                        value: L,
                        onChange: (e) => T(e.target.value),
                        onBlur: () =>
                          D(O(O({}, C), {}, { rewrittenSnippetsPrompt: L })),
                        placeholder: "Prompt for rewriting snippets and titles",
                        className: "w-full text-xs !leading-snug",
                        rows: 8,
                      }),
                    ],
                  }),
                }),
              (0, y.jsx)(l.z, {
                onClick: () => {
                  T(k.rewrittenSnippetsPrompt), D(k);
                },
                type: "reset",
                color: "neutral",
                children: "Reset",
              }),
            ],
          }),
        });
      }
      let P = A.Z.div(
        r ||
          (r = (0, a.Z)([
            "flex justify-between items-center gap-2 min-h-[36px]",
          ]))
      );
    },
    3577: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return X;
          },
        });
      var r = n(18450),
        a = n(95407),
        s = n(43041),
        i = n(66315),
        l = n(83537),
        o = n(60309),
        c = n(68039),
        u = n.n(c),
        d = n(47247),
        m = n.n(d),
        p = n(41409),
        h = n(70079),
        g = n(15118),
        f = n(25617),
        x = n(77799),
        A = n(35601),
        v = n(73606),
        b = n(19841),
        y = n(83737),
        j = n(75388),
        w = n(5224),
        O = n(55057),
        k = n(1454),
        N = n(36270),
        S = n(10987),
        E = n(35250);
      function P(e) {
        var t;
        let {
            currentQuery: n,
            onUpdateCurrentQuery: r,
            onTypeaheadOpenChange: a,
            onSubmit: s,
          } = e,
          l = (0, h.useRef)(""),
          { 0: o, 1: c } = (0, h.useState)(!1);
        (0, h.useEffect)(() => {
          i.U.addTiming("sonic.web.home.consolePrimarySearchInput.mounted");
        }, []);
        let { 0: u, 1: d } = (0, h.useState)(null),
          m = (0, N.o)({ query: l.current });
        (0, h.useEffect)(() => {
          0 === m.length && d(null), c(m.length > 0);
        }, [m]),
          (0, h.useEffect)(() => {
            null == a || a(o);
          }, [o, a]);
        let p = (e) => {
            r(e), s(e);
          },
          g = (e) => {
            let { value: t, delta: n, shouldUpdateQuery: a = !0 } = e;
            if (void 0 === t && void 0 === n)
              throw Error("changeSelectedIndex requires either value or delta");
            let s = null;
            void 0 !== n
              ? null === u
                ? (s = -1 === n ? m.length - 1 : 0)
                : ((s = u + n) < 0 || s >= m.length) && (s = null)
              : void 0 !== t && (s = t),
              d(s),
              a && (null === s ? r(l.current) : r(m[s]));
          };
        return (0, E.jsxs)("div", {
          className: "relative",
          children: [
            (0, E.jsx)("div", {
              className: "relative h-snc-3",
              children: (0, E.jsx)(S.Q, {
                className: "bg-token-main-surface-tertiary ",
                value: n,
                expandDirection: "down",
                submitButtonIcon: (0, E.jsx)(O.WmV, {
                  className: "rotate-90 text-token-main-surface-tertiary",
                }),
                leftIcon: (0, E.jsx)(k.jRj, {
                  className: (0, b.default)(
                    "h-5 w-5",
                    (null === (t = l.current) || void 0 === t
                      ? void 0
                      : t.trim().length) > 0
                      ? "text-token-text-primary"
                      : "text-token-text-tertiary"
                  ),
                }),
                onSubmit: s,
                autoFocus: !0,
                spellCheck: !1,
                placeholder: "Search...",
                onChange: (e) => {
                  r(e.target.value), (l.current = e.target.value);
                },
                onKeyDown: (e) => {
                  o &&
                    ("ArrowUp" === e.key
                      ? (e.preventDefault(), g({ delta: -1 }))
                      : "ArrowDown" === e.key
                        ? (e.preventDefault(), g({ delta: 1 }))
                        : "Escape" === e.key && c(!1));
                },
              }),
            }),
            o &&
              (0, E.jsx)("div", {
                className: "absolute left-0 right-0 top-full mt-[14px]",
                onMouseLeave: () => g({ value: null, shouldUpdateQuery: !1 }),
                children: m.map((e, t) =>
                  (0, E.jsx)(
                    _,
                    {
                      typeahead: e,
                      typedQuery: l.current,
                      onHover: () => g({ value: t, shouldUpdateQuery: !1 }),
                      onSubmit: p,
                      isSelected: t === u,
                    },
                    t
                  )
                ),
              }),
          ],
        });
      }
      function _(e) {
        let {
            typeahead: t,
            typedQuery: n,
            onHover: r,
            onSubmit: a,
            isSelected: s,
          } = e,
          i = t.startsWith(n),
          l = i ? n : t,
          o = i ? t.slice(n.length) : "";
        return (0, E.jsx)(y.E.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "w-full",
          children: (0, E.jsxs)(
            "button",
            {
              className: (0, b.default)(
                "flex w-full items-center gap-3.5 rounded-lg px-5 py-3.5 transition-colors",
                s ? "text-token-text-primary" : "text-token-text-tertiary"
              ),
              onClick: (e) => {
                e.stopPropagation(), a(t);
              },
              onMouseEnter: () => r(t),
              children: [
                (0, E.jsx)("div", {
                  className: "flex h-5 w-5 items-center justify-center",
                  children: (0, E.jsx)(O.w9k, {}),
                }),
                (0, E.jsxs)("div", {
                  className: "flex-grow text-left",
                  children: [
                    (0, E.jsx)("span", { children: l }),
                    (0, E.jsx)("span", {
                      className: "font-semibold",
                      children: o,
                    }),
                  ],
                }),
              ],
            },
            t
          ),
        });
      }
      function C(e) {
        let {
            readyState: t,
            currentQuery: n,
            onSubmit: r,
            onUpdateCurrentQuery: a,
          } = e,
          { 0: s, 1: i } = (0, h.useState)(!1);
        return (0, E.jsxs)("div", {
          className:
            "relative flex h-full w-full flex-col justify-between overflow-hidden bg-token-main-surface-primary p-snc-3",
          children: [
            (0, E.jsx)(y.E.div, {
              className: (0, b.default)(
                "pointer-events-none absolute left-0 right-0 top-[calc(50%-120px)] flex flex-col items-center justify-center text-2xl font-medium transition-colors duration-500"
              ),
              animate: { opacity: s ? 0 : 1 },
              transition: { duration: w.Lc },
              children: (0, E.jsx)(v.nI, { className: "h-11 w-11" }),
            }),
            (0, E.jsx)("div", {
              className: "m-auto w-full max-w-[640px] flex-shrink-0 pb-9",
              children: (0, E.jsxs)("div", {
                className: "relative",
                children: [
                  (0, E.jsx)(P, {
                    currentQuery: n,
                    onUpdateCurrentQuery: a,
                    onSubmit: (e) => {
                      0 !== e.trim().length && (r(e), i(!0));
                    },
                  }),
                  (0, E.jsx)(j._, {
                    className: "absolute -right-8 top-[50%] -translate-y-1/2",
                    readyState: t,
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var D = n(2689);
      function M(e) {
        let {
            readyState: t,
            initialQuery: n,
            hasSubmittedInitialQuery: r,
            onSubmitSearch: a,
            onSubmitFollowup: s,
            onRetryQuery: i,
            onReset: l,
            onUpdateSetting: o,
          } = e,
          { settings: c } = (0, A.A)(),
          { 0: u, 1: d } = (0, h.useState)(null != n ? n : ""),
          { 0: m, 1: p } = (0, h.useState)(""),
          g = (0, h.useRef)(null != n ? n : "");
        (0, h.useEffect)(() => {
          n !== g.current && ((g.current = n), d(null != n ? n : ""), p(""));
        }, [n]);
        let f = (e) => {
            d(e);
          },
          v = () => {
            a(u), p("");
          },
          { 0: b, 1: y } = (0, h.useState)(!r);
        return (
          (0, h.useEffect)(() => {
            b && r
              ? setTimeout(() => {
                  y(!1);
                }, 1e3 * w.Lc)
              : r || y(!0);
          }, [r, n, b]),
          (0, h.useEffect)(
            () =>
              (0, x.eR)(document, {
                keydown: (e) => {
                  "k" === e.key &&
                    e.metaKey &&
                    e.shiftKey &&
                    (e.preventDefault(), d(""), p(""), l());
                },
              }),
            [l]
          ),
          b
            ? (0, E.jsx)(C, {
                readyState: t,
                currentQuery: u,
                onSubmit: v,
                onUpdateCurrentQuery: f,
              })
            : (0, E.jsx)(D.u, {
                readyState: t,
                hasSubmittedInitialQuery: r,
                searchQuery: u,
                followupQuery: m,
                onUpdateSearchQuery: f,
                onUpdateFollowupQuery: (e) => {
                  p(e);
                },
                onRetryQuery: i,
                onSubmitSearch: v,
                onSubmitFollowup: (e) => {
                  s(null != e ? e : m), p("");
                },
                settings: c,
                onUpdateSetting: o,
                onReset: (e) => {
                  d(null != e ? e : ""), p(""), l(e);
                },
              })
        );
      }
      var R = n(20735),
        L = n(83216),
        T = n(68399),
        U = n(19216),
        z = n(68952),
        I = n(4466),
        B = n(49593);
      function Z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Z(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Z(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var V = n(34796),
        q = n(45456),
        H = n(90240),
        Q = n(78375);
      function W(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? W(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : W(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function X(e) {
        let { user: t, initialQuery: n, socketUrl: r, userMetadata: c } = e,
          d = (0, h.useRef)(n ? { query: n } : null),
          x = (0, h.useRef)(n ? "url_query" : "search_input"),
          v = (0, T.W6)(T.bM.isSettingsModalOpen),
          b = (0, T.W6)(T.bM.isDebugModalOpen),
          [y, j] = (0, V.r)(),
          { 0: O, 1: k } = (0, h.useState)(null),
          { 0: N, 1: S } = (0, h.useState)(),
          { 0: P, 1: _ } = (0, h.useState)(null != n),
          C = (0, U.nn)(U.LW.threadId),
          D = (0, U.nn)(U.LW.lastTurn),
          Z = (0, p.useRouter)(),
          { 0: W, 1: X } = (0, h.useState)(null),
          J = (0, l.gb)({ namespace: l.dG.SonicHome, opts: { debug: !0 } });
        (0, h.useEffect)(() => {
          i.U.addTiming("sonic.web.home.mounted");
        }, []),
          (0, q.e)(),
          (0, h.useEffect)(() => {
            (async function () {
              t && X((await (0, o.FB)(t.id)).slice(0, 6));
            })();
          }, [t]);
        let { readyState: Y, postQuery: $ } = (function (e) {
            let { threadId: t, socketUrl: n, onTurnSubmitted: r } = e,
              { 0: s, 1: l } = (0, h.useState)(!1),
              { 0: o, 1: c } = (0, h.useState)(!0),
              { 0: u, 1: d } = (0, h.useState)(!0),
              m = (0, h.useRef)(0),
              p = (0, h.useRef)(!1);
            (0, h.useEffect)(
              () => (
                (p.current = !0),
                () => {
                  p.current = !1;
                }
              ),
              []
            );
            let f = (0, h.useCallback)(async () => {
                if (m.current > 50)
                  return (
                    a.m.danger("Failed to fetch websocket url", {
                      hasCloseButton: !0,
                    }),
                    i.U.addError("Failed to fetch websocket url, giving up", {
                      attempts: m.current,
                    }),
                    ""
                  );
                try {
                  let e = await I.c.get("".concat(w.rq, "/register-websocket"));
                  return (m.current = 0), e.wss_url;
                } catch (e) {
                  throw (
                    (i.U.addError("Failed to fetch websocket url, retrying", {
                      cause: e,
                    }),
                    (m.current += 1),
                    e)
                  );
                }
              }, []),
              { readyState: x } = (0, g.ZP)(
                !s && n ? n : f,
                {
                  retryOnError: !0,
                  shouldReconnect: () => !0 === p.current && u,
                  reconnectAttempts: 50,
                  reconnectInterval: (e) =>
                    Math.min(1e3 * Math.pow(1.3, e), 5e3),
                  onMessage: (e) => {
                    !(function (e, t) {
                      if (e.thread_id !== t) return;
                      let n =
                        "append_turn" === e.delta.type ||
                        "set_turn" === e.delta.type
                          ? e.delta.turn.index
                          : e.delta.turn_index;
                      if (null === n) throw Error();
                      switch (e.delta.type) {
                        case "append_turn": {
                          let n = e.delta;
                          U.P3.appendTurn(t, n.turn);
                          break;
                        }
                        case "set_search_results": {
                          let t = e.delta;
                          U.P3.updateTurn(n, (e) => {
                            e.search_results = t.search_results;
                          });
                          break;
                        }
                        case "set_model_response": {
                          let t = e.delta;
                          U.P3.updateTurn(
                            n,
                            (e) => (e.model_response = t.model_response)
                          );
                          break;
                        }
                        case "append_model_response_text": {
                          let t = e.delta;
                          U.P3.updateTurn(n, (e) => {
                            if (!e.model_response) throw Error();
                            (e.model_response.text += t.text),
                              t.citations_delta
                                ? (e.model_response.citations = [
                                    ...e.model_response.citations,
                                    ...t.citations,
                                  ])
                                : (e.model_response.citations = t.citations);
                          });
                          break;
                        }
                        case "set_weather_widget": {
                          let t = e.delta;
                          U.P3.updateTurn(n, (e) => {
                            e.weather_widget = t.weather_widget;
                          });
                          break;
                        }
                        case "set_calculator_widget": {
                          let t = e.delta;
                          U.P3.updateTurn(n, (e) => {
                            e.calculator_widget = t.calculator_widget;
                          });
                          break;
                        }
                        case "set_sports_widget": {
                          let t = e.delta;
                          U.P3.updateTurn(n, (e) => {
                            e.sports_widget = t.sports_widget;
                          });
                          break;
                        }
                        case "set_finance_widget": {
                          let t = e.delta;
                          U.P3.updateTurn(n, (e) => {
                            e.finance_widget = t.finance_widget;
                          });
                          break;
                        }
                        case "set_finance_widget_histories": {
                          let t = e.delta;
                          U.P3.updateTurn(n, (e) => {
                            if (null === e.finance_widget) throw Error();
                            e.finance_widget = F(
                              F({}, e.finance_widget),
                              {},
                              { histories: t.histories }
                            );
                          });
                          break;
                        }
                        case "set_timezone_widget": {
                          let t = e.delta;
                          U.P3.updateTurn(n, (e) => {
                            e.timezone_widget = t.timezone_widget;
                          });
                          break;
                        }
                        case "set_news_widget": {
                          let t = e.delta;
                          U.P3.updateTurn(n, (e) => {
                            e.news_widget = t.news_widget;
                          });
                          break;
                        }
                        case "set_turn_execution_status": {
                          let t = e.delta;
                          U.P3.updateTurn(n, (e) => {
                            (e.execution_status = t.execution_status),
                              (e.error = t.error);
                          });
                          break;
                        }
                        case "set_image_results": {
                          let t = e.delta;
                          U.P3.updateTurn(n, (e) => {
                            e.image_results = t.image_results;
                          });
                          break;
                        }
                        default:
                          i.U.addError("Unsupported delta type", {
                            delta: e.delta,
                          });
                      }
                    })(JSON.parse(e.data), t);
                  },
                  onError: (e) => {
                    i.U.addError("Websocket error", { event: e });
                  },
                  onClose: () => {
                    console.debug("[ws] Connection closed"), l(!0);
                  },
                  onReconnectStop: () => {
                    a.m.danger(
                      "Websocket connection attempts failed, pausing reconnects",
                      { hasCloseButton: !0 }
                    );
                  },
                },
                o
              ),
              A = (0, h.useCallback)(() => {
                x !== g.kQ.OPEN &&
                  (c(!1),
                  (m.current = 0),
                  setTimeout(() => {
                    c(!0);
                  }, 0));
              }, [x]);
            return (
              (0, h.useEffect)(
                () =>
                  (0, z.R)({
                    onHidden: () => {
                      console.debug("[ws] onHidden"), d(!1);
                    },
                    onVisible: () => {
                      console.debug("[ws] onVisible, set reconnect to true"),
                        d(!0),
                        A();
                    },
                  }),
                [A]
              ),
              {
                readyState: x,
                postQuery: (0, h.useCallback)(
                  async (e) => {
                    let { threadId: t } = e,
                      n = !!t;
                    return (
                      t || (t = await (0, B.gK)()),
                      (0, B.dN)({
                        threadId: t,
                        query: e.query,
                        agentSettingsOverrides: e.agentSettingsOverrides,
                        metadata: e.metadata,
                      })
                        .then(() => (null == r ? void 0 : r({ isFollowup: n })))
                        .catch((e) =>
                          i.U.addError("Failed to postThreadTurn", { cause: e })
                        ),
                      { threadId: t }
                    );
                  },
                  [r]
                ),
              }
            );
          })({
            socketUrl: r,
            threadId: C,
            onTurnSubmitted: (0, h.useCallback)(
              (e) => {
                let { isFollowup: t } = e;
                t ||
                  J.logTiming("search_query_submitted", {
                    context: { source: er() },
                  });
              },
              [J]
            ),
          }),
          { newQueryStarted: ee } = (function (e) {
            let { profiler: t, querySource: n } = e,
              r = (0, h.useRef)(G({}, K)),
              a = (0, U.nn)(U.LW.firstTurn);
            return (
              (0, h.useEffect)(() => {
                var e, s, i;
                if (null == a) return;
                r.current.turn ||
                  ((r.current.turn = !0),
                  t.logTiming("ttf_message", { context: { source: n } })),
                  r.current.modelResponse ||
                    u()(
                      null === (e = a.model_response) || void 0 === e
                        ? void 0
                        : e.text
                    ) ||
                    ((r.current.modelResponse = !0),
                    t.logTiming("ttf_model_response", {
                      context: { source: n },
                    })),
                  r.current.searchResults ||
                    u()(
                      null === (s = a.search_results) || void 0 === s
                        ? void 0
                        : s.entries
                    ) ||
                    ((r.current.searchResults = !0),
                    t.logTiming("ttf_search_results", {
                      context: { source: n },
                    }));
                let l = (0, Q.K)(a);
                !r.current.widget &&
                  ["in_progress", "done"].includes(
                    null !== (i = null == l ? void 0 : l.status) && void 0 !== i
                      ? i
                      : ""
                  ) &&
                  ((r.current.widget = !0),
                  t.logTiming("ttf_widget", {
                    context: {
                      source: n,
                      widgetType: null == l ? void 0 : l.type,
                    },
                  }));
              }, [a, t, n]),
              {
                newQueryStarted: (0, h.useCallback)(() => {
                  r.current = G({}, K);
                }, []),
              }
            );
          })({ profiler: J, querySource: er() }),
          et = (0, h.useMemo)(() => {
            let e = (function (e) {
              let t = s.bX.getCookie(s.cn.LastLocation);
              if (((0, H.XB)(e), t && e))
                try {
                  return JSON.parse(t);
                } catch {}
              return H.PX;
            })(y.useLocation);
            return G(G({}, c), e);
          }, [c, y.useLocation]),
          en = (0, h.useCallback)(
            async (e, t) => {
              try {
                let n = null === t ? "query" : "followup",
                  r = er();
                "query" === n && (J.reset(), ee(), k(e), S(e));
                let a = await $({
                  threadId: t,
                  query: e,
                  agentSettingsOverrides: y.agentSettingsOverrides,
                  metadata: et,
                });
                if ("query" === n) {
                  let t = a.threadId;
                  U.P3.newThread(t),
                    L.Y.logEvent(L.M.searchQuerySubmitted, {
                      thread_id: t,
                      source: r,
                      user_hash: W,
                      query: e,
                    });
                } else
                  "followup" === n &&
                    L.Y.logEvent(L.M.searchFollowupSubmitted, {
                      thread_id: t,
                      turn_index: D.index,
                    });
              } catch (e) {
                i.U.addError(Error("Error posting user action", { cause: e })),
                  a.m.danger("Failed to submit");
              }
            },
            [D, $, J, y.agentSettingsOverrides, ee, W, et]
          );
        function er() {
          return x.current;
        }
        let ea = (e, t) => {
            let { isFollowup: n = !1 } = t;
            if (Y !== g.kQ.OPEN) {
              a.m.danger("Websocket connection is not open");
              return;
            }
            en(null != e ? e : "", n ? C : null), _(!0);
          },
          es = (e) => {
            U.P3.clearThread(), (x.current = "search_input");
            let t = new URLSearchParams(window.location.search);
            e ? t.set("q", e) : t.delete("q");
            let n = "/search";
            t.size > 0 && (n += "?".concat(t.toString())),
              Z.replace(n, void 0, { shallow: !0 }),
              e ? (en(e, null), _(!0)) : _(!1);
          };
        return (
          (0, h.useEffect)(() => {
            var e;
            Y === g.kQ.OPEN &&
              (null != n &&
                (null === (e = d.current) || void 0 === e
                  ? void 0
                  : e.query) !== n &&
                (U.P3.clearThread(), (d.current = { query: n })),
              null == d.current ||
                d.current.submitted ||
                ((async function () {
                  null == d.current ||
                    d.current.submitted ||
                    ((d.current.submitted = !0),
                    await en(d.current.query, null));
                })(),
                _(!0)));
          }, [Y, t.id, n, en, P]),
          (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsxs)(m(), {
                children: [
                  (0, E.jsx)("title", {
                    children:
                      P && N
                        ? "".concat(N, " - ChatGPT Search")
                        : "ChatGPT Search",
                  }),
                  (0, E.jsx)("link", {
                    rel: "icon",
                    type: "image/x-icon",
                    sizes: "48x48",
                    href: "https://cdn.oaistatic.com/_next/static/media/favicon.5712d7f1.ico",
                  }),
                  (0, E.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "https://cdn.oaistatic.com/_next/static/media/favicon-32x32.243e9a8b.png",
                  }),
                  (0, E.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "https://cdn.oaistatic.com/_next/static/media/favicon-16x16.41efb442.png",
                  }),
                ],
              }),
              (0, E.jsx)(A.c.Provider, {
                value: {
                  searchQuery: null != O ? O : "",
                  user: t,
                  userHash: W,
                  settings: y,
                  userMetadata: et,
                },
                children: (0, E.jsx)(M, {
                  initialQuery: n,
                  readyState: Y,
                  hasSubmittedInitialQuery: P,
                  onSubmitFollowup: (e) => ea(e, { isFollowup: !0 }),
                  onReset: es,
                  onSubmitSearch: (e) => {
                    es(e);
                  },
                  onRetryQuery: (e) => {
                    if (null == N) {
                      a.m.danger("No previous query to retry");
                      return;
                    }
                    e ? ea(e, { isFollowup: !0 }) : es(N);
                  },
                  onUpdateSetting: j,
                }),
              }),
              b &&
                (0, E.jsx)(f.q, {
                  isOpen: !0,
                  onDebugClose: () => T.vm.toggleDebugModalOpen(),
                }),
              v &&
                (0, E.jsx)(R.Zr, {
                  onClose: () => T.vm.toggleSettingsModalOpen(),
                  settings: y,
                  onUpdateSetting: j,
                }),
            ],
          })
        );
      }
      let K = { turn: !1, searchResults: !1, modelResponse: !1, widget: !1 };
    },
    47072: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return eZ;
          },
        });
      var r = n(51533),
        a = n(19841),
        s = n(91530),
        i = n.n(s),
        l = n(70079),
        o = n(2689),
        c = n(34796),
        u = n(45456),
        d = n(29287),
        m = n(85452),
        p = n(1454),
        h = n(18450),
        g = n(11335),
        f = n(95407),
        x = n(77799),
        A = n(61888),
        v = n(20724),
        b = n(55057),
        y = n(22189),
        j = n(67739),
        w = n(8143),
        O = n(35250);
      let k = ["minHeight", "maxHeight", "className"];
      function N(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                (0, h.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : N(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let E = (0, l.forwardRef)(function (e, t) {
        let { minHeight: n = 24, maxHeight: r, className: s } = e,
          i = (0, j.Z)(e, k),
          o = (0, l.useRef)(null),
          c = null != t ? t : o,
          [u] = (0, w.f)(c);
        return (
          (0, l.useEffect)(() => {
            let e =
              null != u
                ? u
                : "function" != typeof c && (null == c ? void 0 : c.current);
            if (e) {
              e.style.height = "0px";
              let t = e.scrollHeight;
              null != n && t < n ? (t = n) : null != r && t > r && (t = r),
                (e.style.height = "".concat(t, "px"));
            }
          }, [u, c, i.value, n, r]),
          (0, O.jsx)(
            "textarea",
            S(
              S({}, i),
              {},
              {
                className: (0, a.default)("hide-scrollbar resize-none", s),
                ref: c,
              }
            )
          )
        );
      });
      function P(e) {
        let { result: t, className: n } = e;
        switch (t) {
          case "waiting":
            return (0, O.jsx)(p.Q8x, {
              className: (0, a.default)(
                "stroke-[4] text-token-text-quaternary opacity-50",
                n
              ),
            });
          case "pending":
            return (0, O.jsx)(m.Z, { className: n });
          case "passed":
            return (0, O.jsx)(p.UgA, {
              className: (0, a.default)("stroke-[4] text-green-500", n),
            });
          case "failed":
            return (0, O.jsx)(p.q5L, {
              className: (0, a.default)("stroke-[4] text-red-500", n),
            });
        }
      }
      var _ = n(4466),
        C = n(82473),
        D = n(61236),
        M = n(25494),
        R = n(98486),
        L = n(66315),
        T = n(79208),
        U = n(8844),
        z = n(5224),
        I = n(49593);
      function B(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? B(Object(n), !0).forEach(function (t) {
                (0, h.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : B(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let F = (e) => {
          let t = (0, C.NL)(),
            n = null == e ? void 0 : e.sort();
          return (0, D.a)({
            queryKey: ["evals", { tags: n }],
            queryFn: async () => {
              let e = new URLSearchParams();
              if (n) for (let t of n) e.append("tags", t);
              return _.c
                .get("".concat(z.rq, "/evals/evals?").concat(e.toString()))
                .then((e) => {
                  for (let n of e) t.setQueryData(["eval", n.id], n);
                  return e;
                });
            },
          });
        },
        V = (e) =>
          (0, D.a)({
            queryKey: ["eval", e],
            queryFn: async () =>
              _.c.get("".concat(z.rq, "/evals/evals/").concat(e)),
          }),
        q = new Map(),
        H = (e, t) => {
          var n;
          let r = q.get(e);
          return (
            null == r &&
              ((r = (0, A.debounce)(
                (t) =>
                  _.c.post(
                    "".concat(z.rq, "/evals/evals"),
                    Z(Z({}, t), {}, { id: e })
                  ),
                500,
                { trailing: !0 }
              )),
              q.set(e, r)),
            null === (n = r) || void 0 === n ? void 0 : n(t)
          );
        },
        Q = (e) => {
          let t = (0, C.NL)();
          return (0, M.D)({
            mutationKey: ["eval", e],
            mutationFn: async (n) => {
              let r = Z(Z({}, n), {}, { id: e });
              t.setQueryData(["evals"], (t) =>
                t ? t.map((t) => (t.id === e ? r : t)) : t
              ),
                t.setQueryData(["eval", e], r),
                await H(e, n);
            },
          });
        },
        W = () => {
          let e = (0, C.NL)();
          return (0, M.D)({
            mutationFn: async (e) => {},
            onSettled: (t, n, r) => {
              var a;
              let s = "sonic_eval_".concat((0, U.Z)()),
                i = Z(Z({}, r), {}, { id: s }),
                l = null === (a = r.tags) || void 0 === a ? void 0 : a.sort();
              e.setQueryData(["evals", { tags: l }], (e) =>
                e ? [i, ...e] : e
              ),
                e.setQueryData(["eval", s], i);
            },
          });
        },
        G = (e) => {
          let t = (0, C.NL)();
          return (0, M.D)({
            mutationKey: ["eval", e],
            mutationFn: async () =>
              _.c.delete("".concat(z.rq, "/evals/evals/").concat(e)),
            onSettled: () => {
              t.setQueryData(["evals"], (t) =>
                t ? t.filter((t) => t.id !== e) : t
              ),
                t.setQueryData(["eval", e], void 0);
            },
          });
        },
        X = (0, A.memoize)((e) => {
          let { queryClient: t, settings: n } = e;
          return T.Ue({
            fetcher: async (e) => {
              let r = (0, A.compact)(
                  await Promise.all(e.map((e) => t.getQueryData(["eval", e])))
                ),
                a = new Date(Date.now()),
                s = n && (0, I.lw)(n.agentSettingsOverrides),
                i = _.c.streamedJsonPost(
                  "".concat(z.rq, "/evals/batched_runs"),
                  Z(Z({}, s), {}, { eval_ids: r.map((e) => e.id) })
                ),
                l = [];
              try {
                for await (let e of i)
                  if (e.id && e.status && e.eval_run_ids) {
                    t.setQueryData(["batched_run", e.id], e);
                    let n = t.getQueryData(["user_batched_runs"]);
                    n &&
                      !n.includes(e.id) &&
                      t.setQueryData(["user_batched_runs"], [e.id, ...n]);
                  } else if (e.id && e.batch_id && e.eval_id) {
                    let n = t.getQueryData(["eval_run", e.eval_id, "latest"]);
                    (!n ||
                      n.batch_id === e.batch_id ||
                      null == n.created_at ||
                      new Date(n.created_at) < a) &&
                      t.setQueryData(["eval_run", e.eval_id, "latest"], e),
                      t.setQueryData(["eval_run", e.eval_id, e.batch_id], e),
                      l.push(e);
                  }
              } catch (e) {
                f.m.danger("Failed to read eval run stream"),
                  L.U.addError("Failed to read eval run stream", { cause: e });
              }
              return l;
            },
            resolver: T.rp("eval_id"),
            scheduler: T.ck(500),
          });
        }),
        K = (e, t) => {
          let n = (0, C.NL)(),
            r = X(
              (0, l.useMemo)(() => ({ queryClient: n, settings: t }), [n, t])
            );
          return () => (
            e.forEach((e) => {
              n.setQueryData(["eval_run", e, "latest"], {
                id: "",
                eval_id: e,
                batch_id: "",
                conversation_id: "",
                status: "in_progress",
                steps: [],
              });
            }),
            Promise.all(e.map((e) => r.fetch(e)))
          );
        },
        J = (e, t, n) => {
          let r = K(e ? [e] : [], n);
          return (0, D.a)({
            queryKey: ["eval_run", e, null != t ? t : "latest"],
            queryFn: async () =>
              t
                ? await _.c.get(
                    ""
                      .concat(z.rq, "/evals/eval_runs/")
                      .concat(e, "/")
                      .concat(t)
                  )
                : (await r())[0],
            enabled: !!e,
            initialData: null,
          });
        };
      function Y() {
        return (0, D.a)({
          queryKey: ["tags"],
          queryFn: async () =>
            (0, A.sortBy)(await _.c.get("".concat(z.rq, "/evals/tags"))),
        });
      }
      async function $(e) {
        try {
          let t = await _.c.get(
              "".concat(z.rq, "/evals/batched_runs/").concat(e, "/csv"),
              { skipJsonTransform: !0 }
            ),
            n = await t.blob(),
            r = window.URL.createObjectURL(n),
            a = document.createElement("a");
          (a.href = r),
            (a.download = "eval_batch_".concat(e, ".csv")),
            a.click(),
            window.URL.revokeObjectURL(r);
        } catch (e) {
          f.m.danger("Failed to download CSV: ".concat(e));
        }
      }
      function ee(e) {
        return (0, D.a)({
          queryKey: ["batched_run", e],
          queryFn: async () => {
            if (e)
              return await _.c.get(
                "".concat(z.rq, "/evals/batched_runs/").concat(e)
              );
          },
        });
      }
      function et(e, t) {
        e.setQueryData(["eval_run", t.eval_id, t.batch_id], t);
        let n = e.getQueryData(["eval_run", t.eval_id, "latest"]),
          r = (null == n ? void 0 : n.created_at) && new Date(n.created_at),
          a = t.created_at && new Date(t.created_at);
        e.setQueryData(
          ["eval_run", t.eval_id, "latest"],
          n && (!r || !a || a > r) ? t : n
        );
      }
      function en(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function er(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? en(Object(n), !0).forEach(function (t) {
                (0, h.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : en(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let ea = ["model_response"];
      function es(e) {
        var t, n;
        let {
            criterion: r,
            gradingResult: s,
            isEditing: i,
            onSetIsEditing: o,
            onUpdateCriterion: c,
            autoFocus: u,
            onBlur: d,
          } = e,
          { 0: m, 1: h } = (0, l.useState)(r);
        (0, l.useEffect)(() => {
          h(r);
        }, [r]);
        let f = (e, t) => {
            h(e), null == c || c(e, t);
          },
          x = "pending" !== s && void 0 !== s ? s.thoughts : void 0,
          { 0: v, 1: y } = (0, l.useState)(!1),
          j = (0, l.useRef)(null);
        return (0, O.jsx)(g.E, {
          label: x,
          disabled: !x || i,
          wide: !0,
          side: "right",
          sideOffset: 20,
          align: "start",
          className: "w-full",
          children: (0, O.jsx)("div", {
            className: (0, a.default)("flex w-full gap-2", i && "pl-4"),
            children: i
              ? (0, O.jsxs)(O.Fragment, {
                  children: [
                    null != m
                      ? (0, O.jsx)(g.u, {
                          label: "Remove criterion",
                          side: "top",
                          sideOffset: 4,
                          children: (0, O.jsx)("button", {
                            className:
                              "mt-2 text-token-text-tertiary hover:text-red-500",
                            onClick: (e) => {
                              e.stopPropagation(),
                                h({ prompt: "" }),
                                null == c || c(null);
                            },
                            children: (0, O.jsx)(p.Ybf, {}),
                          }),
                        })
                      : (0, O.jsx)("div", { className: "h-4 w-4" }),
                    (0, O.jsx)(E, {
                      value:
                        null !== (t = null == m ? void 0 : m.prompt) &&
                        void 0 !== t
                          ? t
                          : "",
                      onChange: (e) =>
                        f(er(er({}, m), {}, { prompt: e.target.value })),
                      className:
                        "peer w-full rounded-xl bg-token-main-surface-primary text-sm",
                      placeholder: "Evaluation criterion...",
                      onFocus: () => y(!0),
                      onBlur: () => {
                        y(!1), null == d || d(m);
                      },
                      onKeyDown: (e) => {
                        "Enter" === e.key &&
                          (e.preventDefault(), e.currentTarget.blur());
                      },
                      onClick: (e) => e.stopPropagation(),
                      onPaste: (e) => {
                        e.preventDefault();
                        let [t, ...n] = e.clipboardData
                            .getData("text")
                            .split("\n"),
                          r = e.target,
                          a =
                            r.value.slice(0, r.selectionStart) +
                            t +
                            r.value.slice(r.selectionEnd);
                        f(
                          er(er({}, m), {}, { prompt: a }),
                          (0, A.compact)(
                            n.map((e) => ({
                              prompt: e,
                              visible_assistant_message_fields: ea,
                            }))
                          )
                        );
                        let s = r.selectionStart + t.length;
                        requestAnimationFrame(() => {
                          r.setSelectionRange(s, s);
                        });
                      },
                      autoFocus: u,
                      ref: j,
                    }),
                    (0, O.jsx)("button", {
                      className:
                        "text-token-text-tertiary hover:text-token-text-primary",
                      onClick: () => {
                        var e;
                        return null === (e = j.current) || void 0 === e
                          ? void 0
                          : e.focus();
                      },
                      children: (0, O.jsx)(b.nWS, {}),
                    }),
                    (0, O.jsx)(ei, {
                      open: v,
                      criterion: null != m ? m : { prompt: "" },
                      onUpdateCriterion: (e) => {
                        f(e);
                      },
                    }),
                  ],
                })
              : (0, O.jsxs)(O.Fragment, {
                  children: [
                    (0, O.jsx)("div", {
                      className: "flex-grow",
                      children: null == m ? void 0 : m.prompt,
                    }),
                    (0, O.jsx)(P, {
                      className: "mt-1 shrink-0",
                      result: s
                        ? "pending" === s
                          ? "pending"
                          : s.passed
                            ? "passed"
                            : "failed"
                        : "waiting",
                    }),
                    (0, O.jsx)(g.u, {
                      label:
                        null != m && m.visible_assistant_message_fields
                          ? "Visible fields: ".concat(
                              null == m ||
                              null ===
                                (n = m.visible_assistant_message_fields) ||
                              void 0 === n
                                ? void 0
                                : n.join(", ")
                            )
                          : "All fields visible",
                      align: "end",
                      children: (0, O.jsx)("button", {
                        className:
                          "text-token-text-tertiary hover:text-token-text-primary",
                        onClick: () => {
                          o(!0),
                            requestAnimationFrame(() => {
                              var e;
                              null === (e = j.current) ||
                                void 0 === e ||
                                e.focus();
                            });
                        },
                        children: (0, O.jsx)(b.nWS, {}),
                      }),
                    }),
                  ],
                }),
          }),
        });
      }
      function ei(e) {
        var t;
        let { open: n, criterion: r, onUpdateCriterion: a } = e,
          s = (0, D.a)({
            queryKey: ["grader_response_fields"],
            queryFn: async () =>
              await _.c.get("".concat(z.rq, "/evals/grader_response_fields")),
          });
        return (0, O.jsxs)(y.fC, {
          open: n,
          children: [
            (0, O.jsx)(y.ee, { className: "min-h-full" }),
            (0, O.jsx)(y.h_, {
              children: (0, O.jsxs)(y.VY, {
                side: "right",
                sideOffset: 30,
                onOpenAutoFocus: (e) => e.preventDefault(),
                className:
                  "z-10 rounded-lg bg-token-main-surface-primary p-4 text-token-text-primary shadow-md",
                onMouseDown: (e) => e.preventDefault(),
                children: [
                  (0, O.jsx)(y.Eh, {
                    className: " h-4 w-10 fill-token-main-surface-primary",
                    style: {
                      filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1))",
                    },
                  }),
                  (0, O.jsx)("div", {
                    className: "mb-4 text-sm text-token-text-secondary",
                    children:
                      "(If none are checked, all fields are visible to grader)",
                  }),
                  (0, O.jsxs)("div", {
                    className:
                      "mb-4 grid w-fit grid-cols-[auto,auto] items-center gap-x-4 gap-y-1",
                    children: [
                      s.isLoading && (0, O.jsx)(m.Z, {}),
                      null === (t = s.data) || void 0 === t
                        ? void 0
                        : t.map((e) => {
                            var t, n;
                            return (0, O.jsxs)(O.Fragment, {
                              children: [
                                (0, O.jsx)("div", {
                                  className: "text-sm font-medium",
                                  children: e,
                                }),
                                (0, O.jsx)("input", {
                                  type: "checkbox",
                                  checked:
                                    null !==
                                      (t =
                                        null ===
                                          (n =
                                            r.visible_assistant_message_fields) ||
                                        void 0 === n
                                          ? void 0
                                          : n.includes(e)) && void 0 !== t
                                      ? t
                                      : ea.includes(e),
                                  onChange: (t) => {
                                    var n, s;
                                    if (t.target.checked)
                                      a(
                                        er(
                                          er({}, r),
                                          {},
                                          {
                                            visible_assistant_message_fields: [
                                              ...(null !==
                                                (n =
                                                  r.visible_assistant_message_fields) &&
                                              void 0 !== n
                                                ? n
                                                : ea),
                                              e,
                                            ],
                                          }
                                        )
                                      );
                                    else {
                                      let t = (
                                        null !==
                                          (s =
                                            r.visible_assistant_message_fields) &&
                                        void 0 !== s
                                          ? s
                                          : ea
                                      ).filter((t) => t !== e);
                                      a(
                                        er(
                                          er({}, r),
                                          {},
                                          {
                                            visible_assistant_message_fields: t,
                                          }
                                        )
                                      );
                                    }
                                  },
                                }),
                              ],
                            });
                          }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function el(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? el(Object(n), !0).forEach(function (t) {
                (0, h.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : el(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function ec(e) {
        let {
            step: t,
            stepResult: n,
            isEditing: r,
            onSetIsEditing: a,
            onUpdateStep: s,
            showCriterion: i = !0,
            autoFocus: o,
          } = e,
          c = (e) =>
            "pending" === n
              ? "pending"
              : null == n
                ? void 0
                : n.grading_results.find(
                    (t) => t.criterion.prompt === e.prompt
                  ),
          { 0: u, 1: d } = (0, l.useState)(t.user_action.query_fragment),
          m = (e) => {
            d(e),
              s(
                eo(
                  eo({}, t),
                  {},
                  {
                    user_action: eo(
                      eo({}, t.user_action),
                      {},
                      { query_fragment: e }
                    ),
                  }
                )
              );
          },
          h = r ? [...t.criteria, null] : t.criteria,
          f = "submit" === t.user_action.type && "" === u && o,
          x = !f && o;
        return (0, O.jsxs)("div", {
          className: "relative flex flex-col",
          children: [
            (0, O.jsx)("div", {
              className: "flex font-medium",
              children: r
                ? (0, O.jsxs)("div", {
                    className: "flex w-full gap-2",
                    children: [
                      (0, O.jsx)(g.u, {
                        label: "Remove step",
                        side: "top",
                        sideOffset: 4,
                        children: (0, O.jsx)("button", {
                          className: "mt-3 text-red-500 hover:text-red-700",
                          onClick: () => {
                            s(null);
                          },
                          children: (0, O.jsx)(p.Ybf, {}),
                        }),
                      }),
                      (0, O.jsx)(E, {
                        value: u,
                        onChange: (e) => m(e.target.value),
                        className:
                          "mb-2 w-full rounded-lg bg-token-main-surface-primary text-base",
                        placeholder:
                          "submit" === t.user_action.type
                            ? "Search prompt..."
                            : "Followup prompt...",
                        onClick: (e) => e.stopPropagation(),
                        autoFocus: f,
                      }),
                    ],
                  })
                : t.user_action.query_fragment,
            }),
            i &&
              (0, O.jsx)("div", {
                className: "flex flex-col gap-1",
                children:
                  null == h
                    ? void 0
                    : h.map((e, n) =>
                        (0, O.jsx)(
                          es,
                          {
                            criterion: e,
                            gradingResult: null != e ? c(e) : void 0,
                            isEditing: r,
                            onSetIsEditing: a,
                            onUpdateCriterion: (r, a) => {
                              let i = t.criteria;
                              (i =
                                null == e && null != r
                                  ? t.criteria.concat(r)
                                  : t.criteria
                                      .map((e, t) => (t === n ? r : e))
                                      .filter((e) => null != e)),
                                a && (i = i.concat(a)),
                                s(eo(eo({}, t), {}, { criteria: i }));
                            },
                            autoFocus: x && 0 === n,
                            onBlur: (e) => {
                              (null == e || "" === e.prompt) &&
                                s(
                                  eo(
                                    eo({}, t),
                                    {},
                                    {
                                      criteria: (0, A.compact)(
                                        t.criteria.map((e, t) =>
                                          t === n ? null : e
                                        )
                                      ),
                                    }
                                  )
                                );
                            },
                          },
                          "step-".concat(n)
                        )
                      ),
              }),
          ],
        });
      }
      var eu = n(18460),
        ed = n(98825),
        em = n(82133);
      function ep(e) {
        return "hsl(".concat(
          (function (e) {
            let t = 0;
            for (let n = 0; n < e.length; n++)
              t = (t << 5) - t + e.charCodeAt(n);
            return ((t % 360) + 360) % 360;
          })(e),
          ", 50%, 90%)"
        );
      }
      let eh = ["tag"];
      function eg(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ef(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eg(Object(n), !0).forEach(function (t) {
                (0, h.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eg(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let ex = (e) =>
        (0, O.jsx)(
          eu.c.Input,
          ef(
            ef({}, e),
            {},
            { inputClassName: "focus:ring-0 !text-token-text-primary" }
          )
        );
      function eA(e) {
        let {
            tags: t,
            onTagsChange: n,
            placeholder: r,
            isEditable: s,
            classNames: i,
          } = e,
          { data: l, isLoading: o } = Y(),
          c = s ? em.Z : ed.ZP,
          u = (function () {
            let e = (0, C.NL)();
            return (0, M.D)({
              mutationKey: ["tags"],
              mutationFn: async (t) => {
                e.setQueryData(["tags"], (e) => (e ? [...e, t] : e));
              },
            });
          })();
        return (0, O.jsx)(c, {
          classNames: ef(
            ef({}, i),
            {},
            {
              input: (e) => {
                var t;
                return (0, a.default)(
                  "text-sm",
                  null == i || null === (t = i.input) || void 0 === t
                    ? void 0
                    : t.call(i, e)
                );
              },
              multiValue: (e) => {
                var t;
                return (0, a.default)(
                  "!rounded-lg",
                  null == i || null === (t = i.multiValue) || void 0 === t
                    ? void 0
                    : t.call(i, e)
                );
              },
              menu: (e) => {
                var t;
                return (0, a.default)(
                  "bg-token-main-surface-primary snc-accent-border",
                  null == i || null === (t = i.menu) || void 0 === t
                    ? void 0
                    : t.call(i, e)
                );
              },
              control: (e) => {
                var t;
                return (0, a.default)(
                  "snc-accent-border",
                  null == i || null === (t = i.control) || void 0 === t
                    ? void 0
                    : t.call(i, e)
                );
              },
              menuList: (e) => {
                var t;
                return (0, a.default)(
                  "bg-token-main-surface-primary",
                  null == i || null === (t = i.menuList) || void 0 === t
                    ? void 0
                    : t.call(i, e)
                );
              },
              multiValueRemove: (e) => {
                var t;
                return (0, a.default)(
                  "text-gray-600",
                  null == i || null === (t = i.multiValueRemove) || void 0 === t
                    ? void 0
                    : t.call(i, e)
                );
              },
            }
          ),
          styles: {
            control: (e) =>
              ef(
                ef({}, e),
                {},
                { backgroundColor: "var(--token-main-surface-primary)" }
              ),
            option: (e, t) =>
              ef(
                ef({}, e),
                {},
                {
                  backgroundColor: t.isFocused
                    ? "var(--snc-hover)"
                    : "transparent",
                }
              ),
            multiValue: (e, t) =>
              ef(ef({}, e), {}, { backgroundColor: ep(t.data.value) }),
          },
          components: { Input: ex },
          isClearable: !1,
          placeholder: null != r ? r : "Select tags",
          className: "select-none",
          value: t.map((e) => ({ label: e, value: e })),
          isMulti: !0,
          isLoading: o,
          allowCreateWhileLoading: !1,
          options: null == l ? void 0 : l.map((e) => ({ label: e, value: e })),
          onCreateOption: (e) => {
            let r = (0, A.snakeCase)(e).toLowerCase();
            n((0, A.sortBy)([...t, r])), u.mutate(e);
          },
          onChange: (e) => {
            n((0, A.sortBy)(e.map((e) => e.value)));
          },
        });
      }
      function ev(e) {
        let { tag: t } = e,
          n = (0, j.Z)(e, eh);
        return (0, l.createElement)(
          "div",
          ef(
            ef({}, n),
            {},
            {
              key: t,
              className: (0, a.default)(
                "select-none rounded-lg bg-token-main-surface-tertiary px-2 py-1 text-xs font-medium !leading-none text-gray-700",
                n.className
              ),
              style: ef({ backgroundColor: ep(t) }, n.style),
            }
          ),
          t
        );
      }
      var eb = n(19216);
      function ey(e) {
        let { threadId: t, threadUserId: n, refetchOnMount: r } = e;
        return (0, D.a)({
          queryKey: ["thread", t, n],
          queryFn: async () => {
            if (!t) return { thread: null, turns: null };
            let e = await (0, I.Nv)({
                threadId: t,
                threadUserId: n,
                routePrefix: "/admin/evals",
              }),
              r = e.turns;
            return { thread: e, turns: r };
          },
          enabled: !!t,
          refetchOnMount: r,
        });
      }
      function ej(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ew(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ej(Object(n), !0).forEach(function (t) {
                (0, h.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ej(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function eO(e) {
        var t, n, r, s, i, o;
        let {
            evalId: c,
            evalRunId: u,
            settings: m,
            setSelected: h,
            isSelected: b,
            initialEditState: y,
          } = e,
          j = J(c, void 0, m),
          w = (function (e) {
            let t = (0, C.NL)();
            return (0, D.a)({
              queryKey: ["eval_run", e],
              queryFn: async () => {
                let n = await _.c.get(
                  "".concat(z.rq, "/evals/eval_runs/").concat(e)
                );
                return et(t, n), n;
              },
            });
          })(null != u ? u : ""),
          k = null != u ? w : j,
          { 0: N, 1: S } = (0, l.useState)(null != y && y),
          M = null === (t = V(c)) || void 0 === t ? void 0 : t.data,
          R = (e) => {
            if (k.data) return k.data.steps[e] || "pending";
          },
          L = Q(c),
          T = G(c),
          { 0: U, 1: I } = (0, l.useState)(null);
        (0, l.useEffect)(() => {
          I(null != M ? M : null);
        }, [M]);
        let { 0: B, 1: Z } = (0, l.useState)(!1),
          F = (e) => {
            I(e), Z(!0);
          },
          q = (0, l.useCallback)(() => {
            B &&
              (null == U
                ? (T.mutate(), f.m.info("Test case deleted"))
                : (L.mutate(U), f.m.info("Test case updated")),
              Z(!1));
          }, [U, L, B, T]),
          H = (0, l.useCallback)(
            (e) => {
              e != N && (q(), S(e));
            },
            [N, q]
          );
        (0, l.useEffect)(() => {
          b || H(!1);
        }, [b, H]),
          (0, l.useEffect)(() => {
            if (b)
              return (0, x.eR)(document, {
                keydown: (e) => {
                  "Enter" !== e.key || e.shiftKey || H(!N);
                },
              });
          }, [b, N, c, H]);
        let W =
            !b && U && U.steps.length > 0
              ? [U.steps[0]]
              : null == U
                ? void 0
                : U.steps,
          X =
            (null === (n = k.data) || void 0 === n ? void 0 : n.status) ===
            "done"
              ? k.data.steps.every((e) =>
                  null == e ? void 0 : e.grading_results.every((e) => e.passed)
                )
                ? "passed"
                : "failed"
              : (null === (r = k.data) || void 0 === r ? void 0 : r.status) ===
                  "in_progress"
                ? "pending"
                : "waiting",
          K =
            (null === (s = k.data) ||
            void 0 === s ||
            null === (s = s.steps[0]) ||
            void 0 === s
              ? void 0
              : s.conversation.id) != null,
          { refetch: Y } = ey({
            threadId:
              null === (i = k.data) ||
              void 0 === i ||
              null === (i = i.steps[0]) ||
              void 0 === i
                ? void 0
                : i.conversation.id,
          });
        return (0, O.jsxs)("div", {
          className: (0, a.default)(
            "relative flex w-full cursor-pointer items-start gap-snc-1 px-snc-1 text-left transition-colors hover:border-token-border-heavy hover:bg-[var(--snc-hover)]",
            b ? "border-y bg-token-main-surface-secondary py-snc-1" : "py-2"
          ),
          onClick: () => h(!0),
          onDoubleClick: () => H(!0),
          children: [
            (0, O.jsx)("div", {
              className: "flex flex-col gap-2 leading-none",
              children: (0, O.jsx)("button", {
                className: "text-token-text-tertiary",
                onClick: (e) => {
                  e.stopPropagation(), H(!1);
                },
                children: b
                  ? (0, O.jsx)(p.bTu, { className: "icon-lg" })
                  : (0, O.jsx)(P, { result: X, className: "icon-lg" }),
              }),
            }),
            (0, O.jsxs)("div", {
              className: "flex flex-grow flex-col gap-2",
              children: [
                null == W
                  ? void 0
                  : W.map((e, t) =>
                      (0, O.jsx)(
                        ec,
                        {
                          step: e,
                          stepResult: R(t),
                          isEditing: N,
                          onSetIsEditing: H,
                          onUpdateStep: (e) => {
                            F((n) => {
                              var r;
                              let a = (0, A.compact)(
                                (null !== (r = null == n ? void 0 : n.steps) &&
                                void 0 !== r
                                  ? r
                                  : []
                                ).map((n, r) => (r === t ? e : n))
                              );
                              return null == n || 0 === a.length
                                ? null
                                : ew(ew({}, n), {}, { steps: a });
                            });
                          },
                          showCriterion: b,
                          autoFocus: 0 === t,
                        },
                        t
                      )
                    ),
                N
                  ? (0, O.jsxs)("div", {
                      className: "flex",
                      children: [
                        (0, O.jsx)(g.u, {
                          label: "Add new step",
                          side: "right",
                          sideOffset: 4,
                          children: (0, O.jsx)(d.z, {
                            color: "neutral",
                            onClick: (e) => {
                              e.stopPropagation(),
                                F((e) => {
                                  var t;
                                  return null == e
                                    ? e
                                    : ew(
                                        ew({}, e),
                                        {},
                                        {
                                          steps: (null !==
                                            (t =
                                              null == e ? void 0 : e.steps) &&
                                          void 0 !== t
                                            ? t
                                            : []
                                          ).concat({
                                            user_action: {
                                              query_fragment: "",
                                              type: "text",
                                              conversation_id: null,
                                              metadata: {},
                                              agent_settings_overrides: {
                                                model_family: v.tQ.GPT_3_5,
                                                search_engine: v.lv.Bing,
                                                use_labrador: !0,
                                                robots_mode: v.K1.Conservative,
                                                show_image_to_model: !1,
                                                eval_preset: "production",
                                              },
                                            },
                                            criteria: [],
                                          }),
                                        }
                                      );
                                });
                            },
                            children: (0, O.jsx)(p.OvN, {}),
                          }),
                        }),
                        (0, O.jsx)("div", {
                          className: "absolute bottom-snc-1 right-snc-1",
                          children: (0, O.jsx)(g.u, {
                            label: "Delete test case",
                            side: "right",
                            children: (0, O.jsx)("button", {
                              className: "text-red-500",
                              onClick: (e) => {
                                e.stopPropagation(), T.mutate();
                              },
                              children: (0, O.jsx)(p.Ybf, {}),
                            }),
                          }),
                        }),
                      ],
                    })
                  : null,
                N
                  ? (0, O.jsx)(g.u, {
                      label: "Eval Notes",
                      side: "right",
                      sideOffset: 4,
                      children: (0, O.jsx)(E, {
                        value: null == U ? void 0 : U.notes,
                        onChange: (e) => {
                          F((t) =>
                            null == t
                              ? t
                              : ew(ew({}, t), {}, { notes: e.target.value })
                          );
                        },
                        placeholder: "Eval Notes...",
                        className:
                          "w-full rounded-lg bg-token-main-surface-primary text-sm",
                      }),
                    })
                  : (null == U ? void 0 : U.notes) &&
                    b &&
                    (0, O.jsxs)("div", {
                      className: "text-sm italic",
                      children: ["Notes: ", null == U ? void 0 : U.notes],
                    }),
                (0, O.jsx)(ek, {
                  tags:
                    null !== (o = null == U ? void 0 : U.tags) && void 0 !== o
                      ? o
                      : [],
                  onUpdateTags: (e) => {
                    F((t) => (null == t ? t : ew(ew({}, t), {}, { tags: e })));
                  },
                  isEditing: N,
                }),
              ],
            }),
            (0, O.jsxs)("div", {
              className: "flex flex-col gap-2 pt-1 leading-none",
              children: [
                (0, O.jsx)(g.u, {
                  label: "Run single test case",
                  side: "right",
                  sideOffset: 4,
                  children: (0, O.jsx)("button", {
                    className: "text-green-500 hover:text-token-text-primary",
                    onClick: (e) => {
                      q(), e.stopPropagation(), h(!0), k.refetch();
                    },
                    children: (0, O.jsx)(p.KCr, { className: "stroke-[2]" }),
                  }),
                }),
                b &&
                  (0, O.jsx)(g.u, {
                    label: N
                      ? "Save test case (Enter)"
                      : "Edit test case (Enter)",
                    side: "right",
                    sideOffset: 4,
                    children: (0, O.jsx)("button", {
                      className:
                        "text-token-text-tertiary hover:text-token-text-primary",
                      onClick: (e) => {
                        e.stopPropagation(), H(!N);
                      },
                      children: N
                        ? (0, O.jsx)(p.mW3, {})
                        : (0, O.jsx)(p.vPQ, {}),
                    }),
                  }),
                b &&
                  K &&
                  (0, O.jsx)(g.u, {
                    label: "Re-fetch test run",
                    side: "right",
                    sideOffset: 4,
                    children: (0, O.jsx)("div", {
                      className:
                        "text-token-text-tertiary hover:text-token-text-primary",
                      onClick: () => Y(),
                      children: (0, O.jsx)(p.Bw1, {}),
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      function ek(e) {
        let { tags: t, onUpdateTags: n, isEditing: r } = e;
        return r
          ? (0, O.jsx)("div", {
              children: (0, O.jsx)(eA, {
                isEditable: !0,
                tags: t,
                onTagsChange: (e) => n(e),
                placeholder: "Add tags...",
              }),
            })
          : (0, O.jsx)("div", {
              className: "flex flex-wrap items-center gap-1",
              children: t.map((e) => (0, O.jsx)(ev, { tag: e }, e)),
            });
      }
      function eN(e) {
        var t, n, r, s, i;
        let {
            batchId: o,
            settings: c,
            selectedEvalId: u,
            setSelectedEvalId: h,
          } = e,
          g = ee(o),
          f = (function (e) {
            let t = (0, C.NL)();
            return (0, R.h)({
              queries: e.map((e) => ({
                queryKey: ["eval_run", e],
                queryFn: async () => {
                  let n = await _.c.get(
                    "".concat(z.rq, "/evals/eval_runs/").concat(e)
                  );
                  return et(t, n), n;
                },
              })),
              combine: (e) => ({
                runs: (0, A.compact)(e.map((e) => e.data)),
                refetch: () => {
                  e.forEach((e) => e.refetch());
                },
                isLoading: e.some((e) => e.isLoading),
              }),
            });
          })(
            null !==
              (t =
                null === (n = g.data) || void 0 === n
                  ? void 0
                  : n.eval_run_ids) && void 0 !== t
              ? t
              : []
          ),
          x = f.runs,
          v =
            ((i = x.map((e) => e.eval_id)),
            (0, R.h)({
              queries: i.map((e) => ({
                queryKey: ["eval", e],
                queryFn: async () =>
                  await _.c.get("".concat(z.rq, "/evals/evals/").concat(e)),
              })),
              combine: (e) => (0, A.compact)(e.map((e) => e.data)),
            })),
          b = new Map();
        for (let e of x) b.set(e.eval_id, e);
        (0, l.useEffect)(() => {
          var e;
          (null === (e = g.data) || void 0 === e ? void 0 : e.status) ===
            "done" &&
            x.some(
              (e) => "in_progress" === e.status || "enqueued" === e.status
            ) &&
            f.refetch();
        }, [
          g,
          null === (r = g.data) || void 0 === r ? void 0 : r.status,
          x,
          f,
        ]);
        let {
          numSuccessfulRuns: y,
          numSuccessfulCriteria: j,
          numCriteria: w,
        } = (0, l.useMemo)(() => {
          let e = 0,
            t = 0,
            n = 0;
          for (let r of x) {
            let a = !0;
            for (let e of r.steps)
              for (let r of e.grading_results) n++, r.passed ? t++ : (a = !1);
            a && e++;
          }
          return {
            numSuccessfulRuns: e,
            numSuccessfulCriteria: t,
            numCriteria: n,
          };
        }, [x]);
        return (0, O.jsxs)("div", {
          className: "flex w-full flex-col items-stretch overflow-y-auto",
          children: [
            (0, O.jsxs)("div", {
              className: "grid grid-cols-[auto,1fr] gap-2 p-snc-1",
              children: [
                (0, O.jsx)("div", {
                  className: "font-medium",
                  children: "Batch",
                }),
                (0, O.jsx)("div", {
                  className: "font-mono text-xs",
                  children: o,
                }),
                (0, O.jsx)("div", {
                  className: "font-medium",
                  children: "Status",
                }),
                (0, O.jsx)("div", {
                  className: "font-mono text-xs",
                  children:
                    null === (s = g.data) || void 0 === s ? void 0 : s.status,
                }),
                (0, O.jsx)("div", {
                  className: "font-medium",
                  children: "Evals",
                }),
                (0, O.jsxs)("div", {
                  className: (0, a.default)(
                    "flex font-mono text-xs",
                    y === v.length ? "text-green-500" : "text-red-500"
                  ),
                  children: [
                    f.isLoading && (0, O.jsx)(m.Z, {}),
                    y,
                    "/",
                    v.length,
                    " (",
                    ((y / v.length) * 100).toFixed(1),
                    "%)",
                  ],
                }),
                (0, O.jsx)("div", {
                  className: "font-medium",
                  children: "Criteria",
                }),
                (0, O.jsxs)("div", {
                  className: (0, a.default)(
                    "flex font-mono text-xs",
                    j === w ? "text-green-500" : "text-red-500"
                  ),
                  children: [
                    f.isLoading && (0, O.jsx)(m.Z, {}),
                    j,
                    "/",
                    w,
                    " (",
                    ((j / w) * 100).toFixed(1),
                    "%)",
                  ],
                }),
                (0, O.jsxs)(d.z, {
                  onClick: () => $(o),
                  className: "col-span-2",
                  children: [(0, O.jsx)(p._hL, {}), "Download Batched Run CSV"],
                }),
              ],
            }),
            v.map((e) => {
              var t;
              return (0, O.jsx)(
                eO,
                {
                  settings: c,
                  evalId: e.id,
                  evalRunId:
                    null === (t = b.get(e.id)) || void 0 === t ? void 0 : t.id,
                  setSelected: (t) => {
                    h((n) => (t ? e.id : n !== e.id ? n : void 0));
                  },
                  isSelected: e.id === u,
                },
                e.id
              );
            }),
          ],
        });
      }
      function eS(e) {
        let { selectedBatchId: t, setSelectedBatchId: n, className: r } = e,
          { data: s } = (0, D.a)({
            queryKey: ["user_batched_runs"],
            queryFn: async () =>
              (await _.c.get("".concat(z.rq, "/evals/batched_runs"))).items,
          });
        return (0, O.jsxs)("div", {
          className: (0, a.default)("w-24 overflow-y-auto", r),
          children: [
            (0, O.jsx)("div", {
              className: (0, a.default)(
                "cursor-pointer p-2 hover:bg-token-main-surface-secondary",
                void 0 == t && "bg-token-main-surface-tertiary font-medium"
              ),
              onClick: () => n(void 0),
              children: "All/latest",
            }),
            null == s
              ? void 0
              : s.map((e) =>
                  (0, O.jsx)(
                    eE,
                    {
                      batchId: e,
                      selected: t === e,
                      setSelected: (t) => {
                        n(t ? e : void 0);
                      },
                    },
                    e
                  )
                ),
          ],
        });
      }
      function eE(e) {
        var t;
        let { batchId: n, selected: r, setSelected: s } = e,
          i = ee(n),
          l =
            (null === (t = i.data) || void 0 === t ? void 0 : t.created_at) &&
            new Date(i.data.created_at);
        return (0, O.jsx)("div", {
          className: (0, a.default)(
            "cursor-pointer p-2 text-xs hover:bg-token-main-surface-secondary",
            r && "bg-token-main-surface-tertiary font-medium"
          ),
          onClick: () => s(!r),
          children:
            l &&
            (0, O.jsxs)("div", {
              children: [
                (0, O.jsx)("div", {
                  children: null == l ? void 0 : l.toLocaleDateString(),
                }),
                (0, O.jsx)("div", {
                  children: null == l ? void 0 : l.toLocaleTimeString(),
                }),
              ],
            }),
        });
      }
      var eP = n(17178);
      function e_(e) {
        let { evalRun: t } = e,
          n = V(t.eval_id).data;
        return (0, O.jsxs)("div", {
          className: "flex flex-col gap-10",
          children: [
            null == n
              ? void 0
              : n.steps.map((e, n) => {
                  let r = t.steps[n];
                  return (0, O.jsxs)(
                    "div",
                    {
                      children: [
                        (0, O.jsxs)("div", {
                          className:
                            "flex items-center gap-2 text-xl font-medium",
                          children: [
                            (0, O.jsx)(P, {
                              result: r.grading_results.every((e) => e.passed)
                                ? "passed"
                                : "failed",
                            }),
                            e.user_action.query_fragment,
                          ],
                        }),
                        r.grading_results.map((e, t) =>
                          (0, O.jsx)(eC, { result: e }, t)
                        ),
                      ],
                    },
                    n
                  );
                }),
            t.turn_template &&
              (0, O.jsxs)("div", {
                className: "flex flex-grow flex-col",
                children: [
                  (0, O.jsx)("div", {
                    className: "flex items-center gap-1 font-medium",
                    children: "Turn Settings",
                  }),
                  (0, O.jsx)(eP.default, { json: t.turn_template }),
                ],
              }),
            null != t.batch_id &&
              (0, O.jsxs)(d.z, {
                onClick: () => $(t.batch_id),
                children: [(0, O.jsx)(p._hL, {}), "Download Batched Run CSV"],
              }),
          ],
        });
      }
      function eC(e) {
        let { result: t } = e,
          { 0: n, 1: r } = (0, l.useState)(!1);
        return (0, O.jsxs)("div", {
          className: "ml-8",
          children: [
            (0, O.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [
                (0, O.jsx)(P, { result: t.passed ? "passed" : "failed" }),
                t.criterion.prompt,
                (0, O.jsx)("button", {
                  onClick: () => r((e) => !e),
                  children: n ? (0, O.jsx)(p.Tfp, {}) : (0, O.jsx)(p.bTu, {}),
                }),
              ],
            }),
            !n &&
              (0, O.jsxs)("div", {
                className: "ml-8 flex flex-col gap-2",
                children: [
                  (0, O.jsx)("div", {
                    children: (0, O.jsx)("p", {
                      className: "whitespace-pre-wrap text-sm",
                      children: t.thoughts,
                    }),
                  }),
                  (0, O.jsxs)("div", {
                    children: [
                      (0, O.jsx)("div", {
                        className: "font-medium",
                        children: "Grader Details",
                      }),
                      (0, O.jsx)("p", {
                        className: "whitespace-pre-wrap text-sm",
                        children: t.prompt,
                      }),
                      (0, O.jsx)(eP.default, { json: t.grading_object }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      function eD(e) {
        let {
          run: t,
          settings: n,
          selectedBatchId: r,
          setSelectedBatchId: a,
        } = e;
        return (0, O.jsx)("div", {
          className: "flex gap-4 border-t p-snc-1",
          children: (0, O.jsx)("div", {
            className: "flex flex-col",
            children: (0, O.jsxs)("div", {
              className: "grid grid-cols-[auto,auto] gap-1",
              children: [
                (0, O.jsx)("div", {
                  className: "font-medium",
                  children: "Status",
                }),
                (0, O.jsx)("div", {
                  className: "font-mono text-xs",
                  children: t.status,
                }),
                null != t.batch_id &&
                  (0, O.jsxs)(d.z, {
                    onClick: () => $(t.batch_id),
                    className: "col-span-2",
                    children: [
                      (0, O.jsx)(p._hL, {}),
                      "Download Batched Run CSV",
                    ],
                  }),
                null != t.batch_id &&
                  t.batch_id !== r &&
                  (0, O.jsxs)(d.z, {
                    onClick: () => a(t.batch_id),
                    className: "col-span-2",
                    children: [(0, O.jsx)(p.rDJ, {}), "View Runs in Batch"],
                  }),
              ],
            }),
          }),
        });
      }
      var eM = n(16131),
        eR = n(75138),
        eL = n(20735),
        eT = n(72150);
      let eU = "audited";
      function ez() {
        return (0, O.jsx)("div", { children: (0, O.jsx)(eR.l, { lines: 3 }) });
      }
      function eI(e) {
        return Array.isArray(e) && e.every((e) => "string" == typeof e);
      }
      function eB(e) {
        var t, n, r, s;
        let {
            settings: i,
            onUpdateSettings: o,
            selectedEvalId: c,
            setSelectedEvalId: u,
          } = e,
          { data: m, isLoading: h } = Y(),
          f = W(),
          { 0: x, 1: A } = (0, l.useState)(""),
          [y, j] = (0, eT.Z)("SONIC_EVAL_TAGS", [eU], eI);
        (0, l.useEffect)(() => {
          !h &&
            m &&
            m.length &&
            1 === y.length &&
            y[0] === eU &&
            (m.includes(eU) ? j([eU]) : j([m[0]]));
        }, [h]);
        let w = F(y),
          k =
            null == w || null === (t = w.data) || void 0 === t
              ? void 0
              : t.filter((e) =>
                  e.steps.some(
                    (e) =>
                      !x ||
                      e.user_action.query_fragment.toLowerCase().includes(x)
                  )
                ),
          { 0: N, 1: S } = (0, l.useState)(!1),
          E = K(
            (null != k ? k : []).map((e) => e.id),
            i
          );
        function P(e) {
          return (
            1 === e.steps.length && "" === e.steps[0].user_action.query_fragment
          );
        }
        return (
          (0, l.useEffect)(() => {
            if (w.data && !c && w.data.length > 0 && P(w.data[0])) {
              var e;
              u(null === (e = w.data[0]) || void 0 === e ? void 0 : e.id);
            }
          }, [w.data, c, u]),
          (0, O.jsxs)("div", {
            className: "flex flex-col overflow-y-auto",
            children: [
              (0, O.jsxs)("div", {
                className:
                  "pb-[calc(var(--snc-1)/2] flex h-[76px] items-center p-snc-1 font-medium",
                children: [
                  "Evals",
                  (null == w ? void 0 : w.data) != null
                    ? " (".concat(w.data.length, ")")
                    : "",
                ],
              }),
              (0, O.jsxs)("div", {
                className: "flex flex-col gap-2 p-snc-1",
                children: [
                  (0, O.jsx)(eA, {
                    classNames: { control: () => "!rounded-full pl-4 pr-1" },
                    tags: y,
                    onTagsChange: j,
                    placeholder: "Find tags...",
                  }),
                  (0, O.jsx)("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children:
                      null == m
                        ? void 0
                        : m.map((e) =>
                            (0, O.jsx)(
                              ev,
                              {
                                tag: e,
                                className: (0, a.default)(
                                  "cursor-pointer px-2.5 py-1.5 text-sm",
                                  !y.includes(e) && "opacity-60"
                                ),
                                onClick: (t) => {
                                  if (t.shiftKey) {
                                    y.includes(e)
                                      ? j(y.filter((t) => t !== e))
                                      : j([...y, e]);
                                    return;
                                  }
                                  1 === y.length && y.includes(e)
                                    ? j([])
                                    : j([e]);
                                },
                              },
                              e
                            )
                          ),
                  }),
                ],
              }),
              (0, O.jsxs)("div", {
                className:
                  "flex items-center justify-between gap-2 p-snc-1 pt-0",
                children: [
                  (0, O.jsx)("div", {
                    className: "flex",
                    children: (0, O.jsx)(g.u, {
                      label: "Add new eval",
                      side: "top",
                      sideOffset: 4,
                      children: (0, O.jsx)(d.z, {
                        color: "neutral",
                        onClick: (e) => {
                          e.stopPropagation(),
                            f.mutate({
                              steps: [
                                {
                                  user_action: {
                                    query_fragment: "",
                                    type: "submit",
                                    conversation_id: null,
                                    metadata: {},
                                    agent_settings_overrides: {
                                      model_family: v.tQ.GPT_3_5,
                                      search_engine: v.lv.Bing,
                                      use_labrador: !0,
                                      robots_mode: v.K1.Conservative,
                                      show_image_to_model: !1,
                                      eval_preset: "production",
                                    },
                                  },
                                  criteria: [],
                                },
                              ],
                              tags: [...y],
                            }),
                            u(void 0);
                        },
                        disabled:
                          (null === (n = w.data) || void 0 === n
                            ? void 0
                            : n[0]) && P(w.data[0]),
                        children: (0, O.jsx)(p.OvN, {}),
                      }),
                    }),
                  }),
                  (0, O.jsx)("input", {
                    type: "text",
                    value: x,
                    className:
                      "snc-accent-border flex-grow rounded-lg bg-token-main-surface-primary py-1 pl-4 pr-1 focus:outline-0 focus:ring-0",
                    onChange: (e) => A(e.target.value),
                    placeholder: "Filter...",
                  }),
                  (0, O.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, O.jsx)(g.u, {
                        label: "Edit settings",
                        side: "top",
                        sideOffset: 4,
                        children: (0, O.jsx)(d.z, {
                          onClick: () => S(!0),
                          color: "neutral",
                          children: (0, O.jsx)(b.KAl, { className: "icon-sm" }),
                        }),
                      }),
                      (0, O.jsx)(g.u, {
                        label: "Run all test cases",
                        side: "top",
                        sideOffset: 4,
                        children: (0, O.jsx)(d.z, {
                          disabled: !(null != k && k.length),
                          onClick: () => {
                            if (!k) return;
                            let e = k.length;
                            (!(e > 50) ||
                              window.confirm(
                                "Are you sure you want to run ".concat(
                                  e,
                                  " evals?"
                                )
                              )) &&
                              E();
                          },
                          className:
                            "flex items-center justify-self-end py-1.5",
                          children: (0, O.jsx)(eM.Z, {
                            value:
                              null !== (r = null == k ? void 0 : k.length) &&
                              void 0 !== r
                                ? r
                                : 0,
                            one: "Run 1 eval",
                            other: "Run ".concat(
                              null !== (s = null == k ? void 0 : k.length) &&
                              void 0 !== s
                                ? s
                                : 0,
                              " evals"
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              w.isLoading
                ? (0, O.jsx)("div", {
                    className: "flex flex-col gap-snc-1 px-snc-2",
                    children: Array.from({ length: 5 }).map((e, t) =>
                      (0, O.jsx)(ez, {}, t)
                    ),
                  })
                : null == k
                  ? void 0
                  : k.map((e, t) => {
                      var n;
                      return (0, O.jsx)(
                        eO,
                        {
                          settings: i,
                          evalId: e.id,
                          setSelected: (t) => {
                            u((n) => (t ? e.id : n !== e.id ? n : void 0));
                          },
                          isSelected: e.id === c || P(e),
                          initialEditState: P(e),
                        },
                        null !== (n = e.id) && void 0 !== n
                          ? n
                          : "new-".concat(t)
                      );
                    }),
              N &&
                (0, O.jsx)(eL.Zr, {
                  onClose: () => S(!1),
                  settings: i,
                  onUpdateSetting: o,
                }),
            ],
          })
        );
      }
      function eZ() {
        var e, t;
        (0, u.e)();
        let { 0: n, 1: r } = (0, l.useState)(void 0),
          { 0: a, 1: s } = (0, l.useState)(void 0),
          [i, o] = (0, c.r)(),
          d = null === (e = J(n, a)) || void 0 === e ? void 0 : e.data,
          m =
            null == d || null === (t = d.steps[0]) || void 0 === t
              ? void 0
              : t.conversation.id;
        return (0, O.jsxs)("div", {
          className: "flex h-screen w-screen",
          children: [
            (0, O.jsxs)("div", {
              className: "flex w-[600px] flex-shrink-0 border-r",
              children: [
                (0, O.jsx)(eS, {
                  selectedBatchId: a,
                  setSelectedBatchId: (e) => {
                    r(void 0), s(e);
                  },
                  className: "h-full flex-shrink-0 border-r",
                }),
                null != a
                  ? (0, O.jsx)(eN, {
                      batchId: a,
                      settings: i,
                      selectedEvalId: n,
                      setSelectedEvalId: r,
                    })
                  : (0, O.jsx)(eB, {
                      settings: i,
                      onUpdateSettings: o,
                      selectedEvalId: n,
                      setSelectedEvalId: r,
                    }),
              ],
            }),
            (0, O.jsxs)("div", {
              className: "flex flex-grow flex-col overflow-hidden",
              children: [
                (null == d ? void 0 : d.exception) &&
                  (0, O.jsxs)("div", {
                    className: "h-ful w-full flex-grow overflow-auto",
                    children: [
                      (0, O.jsx)("h2", { children: "Error in backend" }),
                      (0, O.jsx)("pre", {
                        children: d.exception.traceback.join(""),
                      }),
                    ],
                  }),
                d &&
                  m &&
                  (0, O.jsxs)(O.Fragment, {
                    children: [
                      (0, O.jsx)("div", {
                        className: "h-full w-full flex-grow overflow-auto",
                        children: (0, O.jsx)(eV, {
                          settings: i,
                          onUpdateSettings: o,
                          evalRun: d,
                          threadId: m,
                        }),
                      }),
                      (0, O.jsx)(eD, {
                        run: d,
                        settings: i,
                        selectedBatchId: a,
                        setSelectedBatchId: s,
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function eF(e) {
        let { value: t, children: n } = e;
        return (0, O.jsx)(r.ck, {
          value: t,
          className: (0, a.default)(
            "flex shrink-0 cursor-pointer items-center justify-center rounded-full border px-2 py-0.5",
            "border-token-border-secondary bg-token-main-surface-primary text-token-text-secondary",
            "radix-state-checked:border-token-text-tertiary radix-state-checked:bg-token-text-primary radix-state-checked:font-medium radix-state-checked:text-token-main-surface-primary"
          ),
          children: n,
        });
      }
      function eV(e) {
        let t,
          { threadId: n, evalRun: a, settings: s, onUpdateSettings: c } = e,
          { 0: u, 1: d } = (0, l.useState)("chat"),
          { refetch: m } = (function (e) {
            let { threadId: t, threadUserId: n } = e,
              r = ey({ threadId: t, threadUserId: n }),
              a = r.data;
            return (
              (0, l.useEffect)(() => {
                if (t) {
                  var e;
                  eb.P3.setThread(
                    t,
                    null !== (e = null == a ? void 0 : a.turns) && void 0 !== e
                      ? e
                      : []
                  );
                }
              }, [t, a]),
              { refetch: r.refetch, isLoading: r.isLoading, isError: r.isError }
            );
          })({ threadId: n, threadUserId: void 0 });
        switch (
          ((0, l.useEffect)(() => {
            m();
          }, [m, a.status]),
          u)
        ) {
          case "chat":
            t = (0, O.jsx)(o.u, {
              readyState: 1,
              hasSubmittedInitialQuery: !0,
              searchQuery: "",
              followupQuery: "",
              onUpdateSearchQuery: i(),
              onUpdateFollowupQuery: i(),
              onSubmitFollowup: i(),
              onSubmitSearch: i(),
              settings: s,
              onUpdateSetting: c,
              onReset: i(),
              onRetryQuery: i(),
            });
            break;
          case "details":
            t = (0, O.jsx)(e_, { evalRun: a });
        }
        return (0, O.jsxs)("div", {
          className: "relative flex h-full flex-col",
          children: [
            (0, O.jsx)("div", {
              className: "border-b p-2",
              children: (0, O.jsxs)(r.fC, {
                value: u,
                onValueChange: (e) => d(e),
                className: "flex gap-1",
                children: [
                  (0, O.jsx)(eF, { value: "chat", children: "Chat" }),
                  (0, O.jsx)(eF, { value: "details", children: "Details" }),
                ],
              }),
            }),
            t,
          ],
        });
      }
    },
    31863: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          FeedbackPage: function () {
            return E;
          },
        });
      var r,
        a,
        s = n(99945),
        i = n(85452),
        l = n(70187),
        o = n(61236),
        c = n(2428),
        u = n.n(c),
        d = n(26169),
        m = n.n(d),
        p = n(91530),
        h = n.n(p),
        g = n(41409),
        f = n(70079),
        x = n(21389),
        A = n(25617),
        v = n(20735),
        b = n(49593),
        y = n(2689),
        j = n(68399),
        w = n(19216),
        O = n(20963),
        k = n(45456),
        N = n(35250);
      function S(e) {
        return m()(e) && ["link", "message", "turn"].includes(e)
          ? e
          : "message";
      }
      function E() {
        (0, k.e)();
        let e = S((0, g.useRouter)().query.type);
        return "turn" === e
          ? (0, N.jsx)(_, {})
          : "link" === e
            ? (0, N.jsx)(P, {})
            : (0, N.jsx)("div", { children: "Unsupported feedback type" });
      }
      function P() {
        var e, t;
        let n = (0, w.nn)(w.LW.firstTurn),
          r = (0, g.useRouter)(),
          [a, s] = u()(r.query.ids) ? r.query.ids : [],
          i = S(r.query.type),
          { data: l, isLoading: c } = (0, o.a)({
            queryKey: ["searchLinkFeedback", a, s],
            queryFn: () => (0, b.zq)(a, s),
            enabled: !!a && !!s,
          });
        return c || !l
          ? (0, N.jsx)(M, {})
          : (0, N.jsx)(C, {
              type: i,
              threadId: l.search_link.thread_id,
              threadUserId: s,
              searchQuery:
                null !== (e = null == n ? void 0 : n.user_query) && void 0 !== e
                  ? e
                  : "",
              rating: l.search_link_to_user.rating,
              tags:
                null !== (t = l.search_link_to_user.tags) && void 0 !== t
                  ? t
                  : [],
              feedbackText: l.search_link_to_user.text,
              highlightUrl: l.search_link.url,
            });
      }
      function _() {
        var e, t;
        let n = (0, w.nn)(w.LW.firstTurn),
          r = (0, g.useRouter)(),
          [a, s] = u()(r.query.ids) ? r.query.ids : [],
          i = S(r.query.type),
          { data: l, isLoading: c } = (0, o.a)({
            queryKey: ["searchTurnFeedback", a, s],
            queryFn: () => (0, b.a2)(a, s),
            enabled: !!a && !!s,
          });
        return c || !l
          ? (0, N.jsx)(M, {})
          : (0, N.jsx)(C, {
              type: i,
              threadId: l.search_turn.thread_id,
              threadUserId: s,
              searchQuery:
                null !== (e = null == n ? void 0 : n.user_query) && void 0 !== e
                  ? e
                  : "",
              highlightTurnIndex: l.search_turn.turn_index,
              rating: null == l ? void 0 : l.search_turn_to_user.rating,
              tags:
                null !==
                  (t = null == l ? void 0 : l.search_turn_to_user.tags) &&
                void 0 !== t
                  ? t
                  : [],
              feedbackText: null == l ? void 0 : l.search_turn_to_user.text,
            });
      }
      function C(e) {
        let {
            type: t,
            threadId: n,
            threadUserId: r,
            searchQuery: a,
            highlightTurnIndex: s,
            highlightUrl: i,
            rating: o,
            tags: c,
            feedbackText: u,
          } = e,
          { setThreadUserId: d } = (0, A.R)();
        (0, f.useEffect)(() => {
          d(r);
        }, [d, r]);
        let { refetch: m, isLoading: p } = (0, O.v)({
          threadId: n,
          threadUserId: r,
        });
        (0, f.useEffect)(() => {
          m();
        }, [m, n, r]);
        let g = "thumbsUp" === o ? l.go : l.W2,
          x = (0, j.W6)(j.bM.isDebugModalOpen);
        return (0, N.jsxs)("div", {
          className: "flex h-screen w-screen flex-col p-5",
          children: [
            p && (0, N.jsx)(M, {}),
            (0, N.jsxs)("div", {
              className: "flex gap-4",
              children: [
                (0, N.jsx)(D, {
                  className: "flex flex-col gap-2",
                  children: (0, N.jsxs)("div", {
                    className: "flex items-center gap-2 font-medium",
                    children: [
                      "link" === t
                        ? "\uD83D\uDD17 Link Feedback"
                        : "\uD83D\uDD0D Message Feedback",
                      ":",
                      (0, N.jsx)(g, { className: "h-5 w-5" }),
                    ],
                  }),
                }),
                (0, N.jsxs)(D, {
                  children: [
                    (0, N.jsx)("span", {
                      className: "font-medium",
                      children: "Query:",
                    }),
                    " ",
                    a,
                  ],
                }),
                (0, N.jsxs)(D, {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, N.jsxs)("div", {
                      children: [
                        (0, N.jsx)("span", {
                          className: "font-medium",
                          children: "Feedback:",
                        }),
                        " ",
                        u,
                      ],
                    }),
                    (0, N.jsx)("div", {
                      className: "flex gap-1",
                      children: c.map((e) => (0, N.jsx)(R, { children: e }, e)),
                    }),
                  ],
                }),
              ],
            }),
            (0, N.jsx)("div", {
              className: "mt-4 h-full w-full flex-grow overflow-auto",
              children: (0, N.jsx)(y.u, {
                readyState: 1,
                hasSubmittedInitialQuery: !0,
                searchQuery: a,
                followupQuery: "",
                onUpdateSearchQuery: h(),
                onUpdateFollowupQuery: h(),
                onSubmitFollowup: h(),
                onSubmitSearch: h(),
                settings: v.Z,
                onUpdateSetting: h(),
                onReset: h(),
                onRetryQuery: h(),
                highlightTurnIndex: s,
                highlightUrl: i,
              }),
            }),
            x &&
              (0, N.jsx)(A.q, {
                isOpen: !0,
                onDebugClose: () => j.vm.toggleDebugModalOpen(),
              }),
          ],
        });
      }
      let D = x.Z.div(
        r ||
          (r = (0, s.Z)([
            "rounded-md border border-token-border-medium p-3 flex-1",
          ]))
      );
      function M() {
        return (0, N.jsx)("div", {
          className: "mt-3 flex justify-center",
          children: (0, N.jsx)(i.Z, {}),
        });
      }
      let R = x.Z.div(
        a ||
          (a = (0, s.Z)([
            "rounded-md border bg-token-main-surface-tertiary px-1 text-xs text-token-text-primary",
          ]))
      );
    },
    10987: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return d;
        },
      });
      var r = n(18450),
        a = n(67739),
        s = n(77799),
        i = n(19841),
        l = n(70079),
        o = n(35250);
      let c = [
        "value",
        "expandDirection",
        "submitButtonIcon",
        "className",
        "leftIcon",
        "onSubmit",
        "shouldFocusOnKeyEvent",
        "disabled",
        "onKeyDown",
      ];
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        let {
            value: t,
            expandDirection: n,
            submitButtonIcon: d,
            className: m,
            leftIcon: p,
            onSubmit: h,
            shouldFocusOnKeyEvent: g,
            disabled: f,
            onKeyDown: x,
          } = e,
          A = (0, a.Z)(e, c),
          v = (0, l.useRef)(null),
          b = (0, l.useCallback)(
            (e) => {
              null == x || x(e),
                "Enter" === e.key && h && (e.preventDefault(), h(t));
            },
            [x, h, t]
          );
        (0, l.useEffect)(() => {
          if (null != g)
            return (0, s.eR)(document, {
              keydown: (e) => {
                if (null != g && g(e)) {
                  var t, n;
                  e.preventDefault(),
                    null === (t = v.current) || void 0 === t || t.focus(),
                    null === (n = v.current) || void 0 === n || n.select();
                }
              },
            });
        }, [g]);
        let { 0: y, 1: j } = (0, l.useState)(!1),
          { 0: w, 1: O } = (0, l.useState)(0),
          { 0: k, 1: N } = (0, l.useState)(0),
          S = (0, l.useCallback)(() => {
            if (!v.current) return;
            let e = v.current.style.height,
              t = v.current.value,
              n = v.current.selectionStart,
              r = v.current.selectionEnd;
            (v.current.style.height = "0px"),
              (v.current.value = ""),
              N(v.current.scrollHeight),
              (v.current.value = t),
              (v.current.selectionStart = n),
              (v.current.selectionEnd = r),
              O(v.current.scrollHeight),
              (v.current.style.height = e);
          }, []);
        (0, l.useEffect)(() => (0, s.eR)(window, { resize: S }), [S]),
          (0, l.useEffect)(() => {
            S();
          }, [t, S]);
        let E = t.trim().length > 0;
        return (0, o.jsxs)("div", {
          className: (0, i.default)(
            "relative flex h-fit min-h-snc-3 w-full gap-3 overflow-hidden rounded-3xl px-3",
            "up" === n ? "items-end" : "items-start",
            m
          ),
          onClick: () => {
            var e;
            null === (e = v.current) || void 0 === e || e.focus(), j(!0);
          },
          children: [
            (0, o.jsx)("div", {
              className: (0, i.default)(
                "flex-grow overflow-x-hidden",
                "py-[0.66rem]"
              ),
              children: (0, o.jsx)(
                "textarea",
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? u(Object(n), !0).forEach(function (t) {
                          (0, r.Z)(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : u(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                })(
                  {
                    ref: v,
                    type: "text",
                    name: "query",
                    value: t,
                    className: (0, i.default)(
                      "transition-height ellipsis m-0 w-full min-w-32 flex-shrink-0 flex-grow resize-none overflow-hidden overflow-y-auto border-0 bg-transparent p-0 placeholder-gray-500 outline-none focus:ring-0",
                      (!y || w < 480) && "hide-scrollbar",
                      "up" === n ? "-mb-1" : "-mb-2 2xl:mb-[-0.4375rem]",
                      p ? "pl-11" : "pl-2"
                    ),
                    onKeyDown: b,
                    onFocus: () => {
                      j(!0);
                    },
                    onBlur: () => {
                      v.current && (v.current.scrollTop = 0), j(!1);
                    },
                    autoComplete: "off",
                    spellCheck: !1,
                    disabled: f,
                    style: {
                      height: y
                        ? "clamp("
                            .concat(k, "px, ")
                            .concat(w, "px, ")
                            .concat(480, "px)")
                        : "".concat(k, "px"),
                    },
                  },
                  A
                )
              ),
            }),
            (0, o.jsx)("div", {
              className: "flex h-snc-3 flex-shrink-0 items-center",
              children:
                E || null != h
                  ? (0, o.jsx)("div", {
                      className: "flex items-center",
                      children: (0, o.jsx)("button", {
                        disabled: f,
                        onClick: () => (null == h ? void 0 : h(t)),
                        className: (0, i.default)(
                          "flex h-7 w-7 items-center justify-center rounded-full",
                          E && !f
                            ? "bg-token-text-primary text-token-main-surface-primary hover:opacity-80"
                            : "bg-gray-300 text-token-main-surface-tertiary hover:bg-token-border-light hover:text-token-text-secondary disabled:hover:bg-token-main-surface-tertiary disabled:hover:text-token-text-tertiary dark:bg-gray-700"
                        ),
                        children: d,
                      }),
                    })
                  : null,
            }),
            p &&
              (0, o.jsx)("div", {
                className: (0, i.default)(
                  "absolute left-5 flex h-snc-3 items-center justify-center",
                  "up" === n ? "bottom-0" : "top-0"
                ),
                children: p,
              }),
          ],
        });
      }
    },
    83216: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return s;
        },
        Y: function () {
          return i;
        },
      });
      var r,
        a = n(38801);
      let s =
          (((r = {}).searchTurnFeedbackButtonShown =
            "Search Turn Feedback Button Shown"),
          (r.searchTurnFeedbackSubmitted = "Search Turn Feedback Submitted"),
          (r.searchLinkFeedbackSubmitted = "Search Link Feedback Submitted"),
          (r.searchLinkShown = "Search Link Shown"),
          (r.searchLinkClicked = "Search Link Clicked"),
          (r.searchQuerySubmitted = "Search Query Submitted"),
          (r.searchFollowupSubmitted = "Search Followup Submitted"),
          (r.searchCitationHovered = "Search Citation Hovered"),
          (r.searchCitationClicked = "Search Citation Clicked"),
          r),
        i = {
          logEvent(e, t) {
            a.A.logEvent(e, t);
          },
        };
    },
    49593: function (e, t, n) {
      "use strict";
      n.d(t, {
        LC: function () {
          return v;
        },
        NK: function () {
          return A;
        },
        Nv: function () {
          return h;
        },
        _l: function () {
          return b;
        },
        a2: function () {
          return f;
        },
        dN: function () {
          return m;
        },
        gK: function () {
          return d;
        },
        k4: function () {
          return g;
        },
        lw: function () {
          return p;
        },
        mO: function () {
          return u;
        },
        zq: function () {
          return x;
        },
      });
      var r = n(18450),
        a = n(20735),
        s = n(4466),
        i = n(5224),
        l = n(20724);
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let u = async (e) => {
        let { queryKey: t } = e,
          [n, r] = t;
        if (r.length < 2) return [];
        let a = new URLSearchParams({ query_fragment: r });
        return s.c
          .get("".concat(i.rq, "/suggestions?").concat(a.toString()))
          .then((e) => e.suggestions)
          .catch(() => []);
      };
      async function d() {
        return (await s.c.post("".concat(i.rq, "/threads"), {})).thread.id;
      }
      async function m(e) {
        let {
            threadId: t,
            query: n,
            agentSettingsOverrides: r,
            metadata: a,
          } = e,
          l = p(r);
        return s.c.post(
          "".concat(i.rq, "/threads/").concat(t, "/turns?blocking=false"),
          c(c({}, l), {}, { turn: { user_query: n }, user_metadata: a })
        );
      }
      function p(e) {
        var t;
        return {
          settings_overrides: {
            search_results: {
              search_engines: (
                null !== (t = e.use_labrador) && void 0 !== t
                  ? t
                  : a.Z.agentSettingsOverrides.use_labrador
              )
                ? { bing: { robots_mode: e.robots_mode } }
                : {
                    bing: {
                      robots_mode: e.robots_mode,
                      ranking_model: null,
                      rrf_alpha: 1,
                      rrf_input_threshold: 0,
                    },
                    labrador: null,
                  },
            },
            image_search_results: { robots_mode: e.robots_mode },
            model_response: { enable_multimodal: e.show_image_to_model },
          },
          base_config: (function (e) {
            switch (e) {
              case l.tQ.GPT_3_5:
                return "sahara";
              case l.tQ.GPT_4_LITE:
                return "scallion";
              case l.tQ.GPT_4:
                return "gpt4";
            }
          })(e.model_family || l.tQ.GPT_3_5),
          eval_preset: e.eval_preset,
        };
      }
      async function h(e) {
        let { threadId: t, threadUserId: n, routePrefix: r } = e,
          a = i.rq;
        r && (a += r);
        let l = new URL("".concat(a, "/threads/").concat(t, "/with_turns"));
        return (
          n && l.searchParams.append("thread_user_id", n),
          await s.c.get(l.toString())
        );
      }
      async function g(e) {
        let t = new FormData();
        return (
          t.append(
            "feedback",
            JSON.stringify({
              thread_id: e.threadId,
              turn_index: e.turnIndex,
              rating: e.rating,
              search_query: e.searchQuery,
              text: e.text,
              tags: e.tags,
              user_email: e.userEmail,
            })
          ),
          e.screenshot &&
            t.append(
              "file",
              new File([e.screenshot], "screenshot.jpeg", {
                type: "image/jpeg",
              })
            ),
          s.c.post("".concat(i.rq, "/feedback/turns"), t)
        );
      }
      async function f(e, t) {
        return s.c.get(
          "".concat(i.rq, "/feedback/turns/").concat(e, "/").concat(t)
        );
      }
      async function x(e, t) {
        return s.c.get(
          "".concat(i.rq, "/feedback/links/").concat(e, "/").concat(t)
        );
      }
      async function A(e) {
        let t = new FormData();
        return (
          e.screenshot &&
            t.append(
              "file",
              new File([e.screenshot], "screenshot.jpeg", {
                type: "image/jpeg",
              })
            ),
          t.append(
            "feedback",
            JSON.stringify({
              thread_id: e.threadId,
              url: e.url,
              title: e.title,
              snippet: e.snippet,
              rewritten_snippet: e.rewrittenSnippet,
              rating: e.rating,
              search_query: e.searchQuery,
              text: e.text,
              tags: e.tags,
              user_email: e.userEmail,
            })
          ),
          s.c.post("".concat(i.rq, "/feedback/links"), t)
        );
      }
      function v(e) {
        s.c.post("".concat(i.rq, "/pre_search"), {
          query_fragment: e.query,
          metadata: e.metadata,
          type: "text",
        });
      }
      async function* b(e, t) {
        for await (let n of s.c.streamedJsonPost("".concat(i.rq, "/snippets"), {
          urls: e,
          prompt: t,
        }))
          yield n;
      }
    },
    2689: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return rx;
        },
      });
      var r,
        a,
        s,
        i,
        l,
        o,
        c,
        u,
        d,
        m,
        p,
        h,
        g,
        f,
        x,
        A,
        v,
        b,
        y,
        j,
        w,
        O,
        k,
        N,
        S,
        E,
        P,
        _,
        C,
        D,
        M,
        R,
        L,
        T,
        U,
        z,
        I,
        B,
        Z,
        F,
        V,
        q,
        H,
        Q,
        W,
        G,
        X,
        K,
        J,
        Y,
        $ = n(99945),
        ee = n(73606),
        et = n(69920),
        en = n(19841),
        er = n(70079),
        ea = n(21389),
        es = n(94079),
        ei = n(58819),
        el = n(55057),
        eo = n(70187),
        ec = n(85252),
        eu = n(41409),
        ed = n(1454),
        em = n(67217),
        ep = n(35805),
        eh = n.n(ep),
        eg = {
          src: "https://cdn.oaistatic.com/_next/static/media/popup-blocked.a4e77057.png",
          height: 40,
          width: 118,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAFVBMVEXx8/nq7PL8/P+7vsS+wcfe4enV2OEVeXw2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNgZGQAQSYGZmZWFgZmNiYGRkYGBpAIAAIUACasMdr/AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        };
      function ef() {
        return (ef = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ex = (e) =>
          er.createElement(
            "svg",
            ef(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                fill: "none",
                viewBox: "0 0 24 24",
              },
              e
            ),
            s ||
              (s = er.createElement("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M19.5 8V5.5a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2H9",
              })),
            i ||
              (i = er.createElement("circle", {
                cx: 16,
                cy: 16,
                r: 4,
                stroke: "currentColor",
                strokeWidth: 2,
              })),
            l ||
              (l = er.createElement("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeWidth: 2,
                d: "m19 19 2 2",
              }))
          ),
        eA = n(35250);
      function ev(e) {
        let { query: t } = e,
          n = (0, er.useRef)({}),
          { 0: r, 1: a } = (0, er.useState)(!1);
        function s(e, t) {
          let r = "compare_".concat(e),
            s = n.current[r];
          s && (s.close(), delete n.current[r]);
          let i = Math.max(window.outerWidth / 2, 500),
            l = Math.max(window.outerHeight - 300, 500),
            o = window.screenY + 300,
            c = window.screenX + e * i;
          (s = n.current[r] =
            window.open(
              t,
              r,
              "width="
                .concat(i, ",height=")
                .concat(l, ",top=")
                .concat(o, ",left=")
                .concat(c)
            )) || a(!0);
        }
        return (0, eA.jsxs)(eA.Fragment, {
          children: [
            (0, eA.jsx)(ey, {
              onClick: () => {
                s(0, "https://google.com/search?q=".concat(t)),
                  s(1, "https://perplexity.ai/search?q=".concat(t));
              },
              icon: (0, eA.jsx)(ex, { className: "icon-md" }),
              children: "Compare",
            }),
            r &&
              (0, eA.jsx)(em.Z, {
                isOpen: !0,
                type: "danger",
                onClose: () => a(!1),
                title: "Popup Blocked",
                description: (0, eA.jsxs)("div", {
                  children: [
                    "Your browser is blocking popups. Please allow popups for this site and try again.",
                    (0, eA.jsxs)("div", {
                      className: "mt-3 text-xs",
                      children: [
                        (0, eA.jsx)(eh(), {
                          className: "mx-auto",
                          src: eg,
                          alt: "Popup blocked screenshot",
                        }),
                        "In Chrome, this setting can be accessed by clicking on the button in the locations bar (the left-most button in the image above).",
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
      }
      var eb = n(68399);
      let ey = ei.Z.Item;
      function ej() {
        let { theme: e, setTheme: t } = (0, ec.F)();
        switch (e) {
          case "system":
            return (0, eA.jsx)(ey, {
              onClick: (e) => {
                e.preventDefault(), t("dark");
              },
              icon: (0, eA.jsx)(ed.Y1U, { className: "icon-sm" }),
              children: "System Theme",
            });
          case "dark":
            return (0, eA.jsx)(ey, {
              onClick: (e) => {
                e.preventDefault(), t("light");
              },
              icon: (0, eA.jsx)(ed.wOW, { className: "icon-sm" }),
              children: "Dark Mode",
            });
          default:
            return (0, eA.jsx)(ey, {
              onClick: (e) => {
                e.preventDefault(), t("system");
              },
              icon: (0, eA.jsx)(ed.kXG, { className: "icon-sm" }),
              children: "Light",
            });
        }
      }
      function ew(e) {
        let { className: t, iconSize: n, searchQuery: r } = e,
          a = (0, eu.useRouter)();
        return (0, eA.jsxs)(ei.Z.Root, {
          children: [
            (0, eA.jsx)(ei.Z.Trigger, {
              className: "group border-0 bg-transparent p-0",
              children: (0, eA.jsx)(es.zf, { iconSize: n, className: t }),
            }),
            (0, eA.jsx)(ei.Z.Portal, {
              children: (0, eA.jsxs)(ei.Z.Content, {
                collisionPadding: 10,
                children: [
                  (0, eA.jsx)(ej, {}),
                  (0, eA.jsx)(ey, {
                    onClick: () => eb.vm.toggleDebugModalOpen(),
                    icon: (0, eA.jsx)(eo.WP, { className: "icon-sm" }),
                    children: "Debug",
                  }),
                  (0, eA.jsx)(ey, {
                    onClick: () => eb.vm.toggleSettingsModalOpen(),
                    icon: (0, eA.jsx)(el.KAl, { className: "icon-sm" }),
                    children: "Settings",
                  }),
                  (0, eA.jsx)(ev, { query: r }),
                  (0, eA.jsx)(ei.Z.Separator, {}),
                  (0, eA.jsx)(ey, {
                    onClick: () =>
                      a.push("/auth/logout", void 0, { shallow: !0 }),
                    icon: (0, eA.jsx)(eo.N_, { className: "icon-sm" }),
                    children: "Log out",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var eO = n(75388),
        ek = n(61082),
        eN = n(62456),
        eS = n(5099),
        eE = n(44260),
        eP = n(83737),
        e_ = n(24343),
        eC = n(61888),
        eD = n(75138),
        eM = n(82473),
        eR = n(61236),
        eL = n(98486),
        eT = n(79208),
        eU = n(35601),
        ez = n(49593);
      let eI = (0, eC.memoize)((e, t) =>
        eT.Ue({
          fetcher: async (n) => {
            let r = new Map();
            for await (let a of (0, ez._l)(n, e))
              a && r.set(a.url, a),
                t.setQueryData(["snippet", { url: a.url, prompt: e }], a);
            return (0, eC.compact)(n.map((e) => r.get(e)));
          },
          resolver: eT.rp("url"),
          scheduler: eT.ck(500),
        })
      );
      function eB(e) {
        let {
          downloadedImageUrls: t,
          imageDimensionsByUrl: n,
          erroredImageUrls: r,
        } = eZ((0, eC.compact)([e]));
        return null == e
          ? { isErrored: !1, isDownloaded: !1, imageDimensions: void 0 }
          : {
              isErrored: r.has(e),
              isDownloaded: t.has(e),
              imageDimensions: n.get(e),
            };
      }
      function eZ(e) {
        let t = (0, er.useRef)(new Set()),
          { 0: n, 1: r } = (0, er.useState)(new Set()),
          { 0: a, 1: s } = (0, er.useState)(new Map());
        return (
          (0, er.useEffect)(() => {
            e.forEach((e) => {
              if (t.current.has(e)) return;
              t.current.add(e);
              let n = new Image();
              (n.onload = () => {
                s((t) =>
                  new Map(t).set(e, { width: n.width, height: n.height })
                );
              }),
                (n.onerror = () => {
                  r((t) => new Set(t).add(e));
                }),
                (n.src = e);
            });
          }, [e]),
          {
            downloadedImageUrls: new Set(a.keys()),
            imageDimensionsByUrl: a,
            erroredImageUrls: n,
          }
        );
      }
      function eF(e) {
        let { image: t, className: n } = e,
          { isDownloaded: r } = eB(t.thumbnail_url);
        return (0, eA.jsx)("button", {
          className: (0, en.default)(
            "relative aspect-square overflow-hidden",
            n
          ),
          onClick: () => {
            eb.vm.setFocusedImage(t);
          },
          children: r
            ? (0, eA.jsx)(eP.E.div, {
                animate: { opacity: 1 },
                initial: {
                  width: "100%",
                  height: "100%",
                  translateX: 0,
                  translateY: 0,
                  opacity: 0,
                },
                whileHover: {
                  width: "105%",
                  height: "105%",
                  translateX: "-2.5%",
                  translateY: "-2.5%",
                },
                transition: { duration: 0.3, ease: "easeInOut" },
                children: (0, eA.jsx)("img", {
                  src: t.thumbnail_url,
                  alt: t.content_url,
                  className:
                    "h-full w-full bg-token-main-surface-tertiary object-cover",
                }),
              })
            : (0, eA.jsx)("div", {
                className:
                  "h-full w-full animate-pulse bg-token-main-surface-tertiary",
              }),
        });
      }
      let eV = ea.Z.a(
          o ||
            (o = (0, $.Z)([
              "w-full rounded-full border p-2.5 font-medium border border-token-border-medium flex justify-center items-center hover:opacity-70",
            ]))
        ),
        eq = (0, ea.Z)(eV)(
          c ||
            (c = (0, $.Z)([
              "bg-token-text-primary text-token-main-surface-primary",
            ]))
        );
      function eH() {
        var e, t, n;
        let r = (0, eb.W6)(eb.bM.getFocusedImageCitation),
          a = () => {
            eb.vm.setFocusedImage(void 0);
          },
          s = (0, eS.d)(
            null !== (e = null == r ? void 0 : r.url) && void 0 !== e ? e : ""
          ),
          i = (function (e) {
            let t = (0, eM.NL)(),
              n = (0, eU.A)().settings,
              r = null == n ? void 0 : n.rewrittenSnippetsPrompt,
              a = eI(r, t);
            return (0, eR.a)({
              queryKey: ["snippet", { url: e, prompt: r }],
              queryFn: async () => await a.fetch(e),
            });
          })(
            null !== (t = null == r ? void 0 : r.url) && void 0 !== t ? t : ""
          ),
          l = null == r ? void 0 : r.content_url.split("/").pop(),
          { imageDimensions: o, isErrored: c } = eB(
            null == r ? void 0 : r.content_url
          ),
          u = i.isLoading || s.isLoading;
        return (0, eA.jsx)(e_.M, {
          children:
            r &&
            (0, eA.jsx)(eN.ZP.Root, {
              isOpen: !0,
              onClose: a,
              children: (0, eA.jsx)(eP.E.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.1 },
                children: (0, eA.jsx)(eN.ZP.Overlay, {
                  children: (0, eA.jsx)(eP.E.div, {
                    className: "h-full",
                    initial: { translateX: "-100%" },
                    animate: { translateX: 0 },
                    transition: { duration: 0.3, ease: "easeInOut" },
                    children: (0, eA.jsxs)(eE.VY, {
                      className:
                        "relative left-0 flex h-full w-full flex-col gap-5 overflow-y-auto bg-token-main-surface-primary p-[--snc-1] sm:w-1/3 sm:min-w-[600px] sm:p-[--snc-2]",
                      children: [
                        (0, eA.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            (0, eA.jsxs)("div", {
                              className: "overflow-hidden",
                              children: [
                                (0, eA.jsx)("a", {
                                  className:
                                    "block truncate font-medium text-token-link hover:opacity-80",
                                  href: r.content_url,
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: l,
                                }),
                                o &&
                                  (0, eA.jsxs)("div", {
                                    className:
                                      "truncate text-sm text-token-text-tertiary sm:text-base",
                                    children: [o.width, " x ", o.height],
                                  }),
                              ],
                            }),
                            (0, eA.jsx)("button", {
                              onClick: a,
                              className: "outline-none hover:opacity-70",
                              children: (0, eA.jsx)(eo.v7, {
                                className: "icon-lg",
                              }),
                            }),
                          ],
                        }),
                        null != o
                          ? (0, eA.jsx)("a", {
                              className:
                                "flex justify-center bg-black font-medium text-token-link hover:opacity-90",
                              href: r.content_url,
                              target: "_blank",
                              rel: "noreferrer",
                              children: (0, eA.jsx)(eP.E.img, {
                                src: r.content_url,
                                alt: r.title,
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                className:
                                  "w-full object-fill hover:opacity-90",
                                style: {
                                  maxHeight: o.height,
                                  maxWidth: o.width,
                                },
                              }),
                            })
                          : c
                            ? (0, eA.jsx)("div", {
                                className:
                                  "h-[400px] w-full bg-token-main-surface-tertiary",
                              })
                            : (0, eA.jsx)("div", {
                                className:
                                  "h-[400px] w-full animate-pulse bg-token-main-surface-tertiary",
                              }),
                        u
                          ? (0, eA.jsx)("div", {
                              children: (0, eA.jsx)(eD.l, {
                                lines: 4,
                                variance: 1,
                              }),
                            })
                          : (0, eA.jsxs)("div", {
                              className: "flex flex-col gap-0.5",
                              children: [
                                (0, eA.jsxs)("div", {
                                  className: "flex justify-between",
                                  children: [
                                    (0, eA.jsx)("a", {
                                      href: r.url,
                                      className: "flex-grow hover:opacity-70",
                                      target: "_blank",
                                      rel: "noreferrer",
                                      children: s.data,
                                    }),
                                    (0, eA.jsx)(ek.Z, {
                                      url: r.content_url,
                                      className: "flex-shrink-0",
                                      size: 24,
                                    }),
                                  ],
                                }),
                                (0, eA.jsx)("a", {
                                  href: r.url,
                                  className: "font-medium hover:opacity-70",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: r.title,
                                }),
                                (0, eA.jsx)("div", {
                                  className: "text-token-text-tertiary",
                                  children:
                                    null === (n = i.data) || void 0 === n
                                      ? void 0
                                      : n.snippet,
                                }),
                              ],
                            }),
                        (0, eA.jsxs)("div", {
                          className: "flex flex-col gap-2 sm:flex-row",
                          children: [
                            (0, eA.jsx)(eV, {
                              href: r.content_url,
                              target: "_blank",
                              rel: "noreferrer",
                              children: "Open Image",
                            }),
                            (0, eA.jsx)(eq, {
                              href: r.url,
                              target: "_blank",
                              rel: "noreferrer",
                              children: "View Source",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
        });
      }
      var eQ = n(18450),
        eW = n(11335);
      function eG(e) {
        let {
          label: t,
          labelSide: n = "right",
          className: r,
          onClick: a,
          children: s,
        } = e;
        return (0, eA.jsx)(eW.E, {
          label: t,
          sideOffset: 0,
          side: n,
          disabled: !t,
          children: (0, eA.jsx)("button", {
            onClick: a,
            className: (0, en.default)(
              "flex items-center justify-center p-1.5 text-token-text-tertiary hover:text-token-text-primary",
              r
            ),
            children: s,
          }),
        });
      }
      function eX() {
        return (eX = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var eK = (e) =>
        er.createElement(
          "svg",
          eX(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          u ||
            (u = er.createElement(
              "g",
              { id: "map-pin", stroke: "currentcolor", strokeWidth: 2 },
              er.createElement("path", {
                id: "Ellipse 32766",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M20 11c0 6.329-8 10.5-8 10.5S4 17.28 4 11c0-4.57 3.582-8 8-8",
              }),
              er.createElement("circle", {
                id: "Ellipse 32767",
                cx: 12,
                cy: 11,
                r: 3,
              }),
              er.createElement("path", {
                id: "Vector 2883",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M16.5 2 21 6.5M21 2l-4.5 4.5",
              })
            ))
        );
      function eJ() {
        return (eJ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var eY = (e) =>
          er.createElement(
            "svg",
            eJ(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                fill: "none",
                viewBox: "0 0 24 24",
              },
              e
            ),
            d ||
              (d = er.createElement(
                "g",
                { id: "map-pin", stroke: "currentcolor", strokeWidth: 2 },
                er.createElement("path", {
                  id: "Ellipse 32766",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M20 11c0 6.329-8 10.5-8 10.5S4 17.28 4 11c0-4.57 3.582-8 8-8",
                }),
                er.createElement("circle", {
                  id: "Ellipse 32767",
                  cx: 12,
                  cy: 11,
                  r: 3,
                }),
                er.createElement("path", {
                  id: "Vector 2884",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M16 5.095 17.667 7 21 2",
                })
              ))
          ),
        e$ = n(90240);
      function e0(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function e1(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e0(Object(n), !0).forEach(function (t) {
                (0, eQ.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : e0(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function e2(e) {
        let { settings: t, onUpdateSettings: n } = e,
          { setTheme: r, resolvedTheme: a } = (0, ec.F)();
        return (0, eA.jsxs)(eA.Fragment, {
          children: [
            (0, eA.jsx)(eG, {
              label: "Debug Modal (Internal)",
              onClick: () => eb.vm.toggleDebugModalOpen(),
              children: (0, eA.jsx)(eo.WP, { className: "icon-md-heavy" }),
            }),
            (0, eA.jsx)(eG, {
              label: t.useLocation
                ? "Disable location services"
                : "Enable location services",
              onClick: () => {
                n(e1(e1({}, t), {}, { useLocation: !t.useLocation })),
                  t.useLocation || (0, e$.XB)(!0);
              },
              children: t.useLocation
                ? (0, eA.jsx)(eY, { className: "icon-md-heavy" })
                : (0, eA.jsx)(eK, { className: "icon-md-heavy" }),
            }),
            (0, eA.jsxs)(eG, {
              label: "Set theme to ".concat("dark" === a ? "light" : "dark"),
              onClick: () => {
                r("dark" === a ? "light" : "dark");
              },
              children: [
                "dark" === a &&
                  (0, eA.jsx)(el.NWY, { className: "icon-md-heavy" }),
                "light" === a &&
                  (0, eA.jsx)(el.kLh, { className: "icon-md-heavy" }),
              ],
            }),
            (0, eA.jsx)(eG, {
              label: "Search Settings",
              onClick: () => eb.vm.toggleSettingsModalOpen(),
              children: (0, eA.jsx)(el.KAl, { className: "icon-md-heavy" }),
            }),
          ],
        });
      }
      function e5(e) {
        let { side: t } = e;
        return (0, eA.jsx)("div", {
          className: (0, en.default)(
            "absolute left-0 right-0 h-[calc(100%+var(--snc-1))] w-full",
            "from-token-main-surface-primary from-[calc(100%-2*var(--snc-1))]",
            "top" === t ? "top-0 bg-gradient-to-b" : "bottom-0 bg-gradient-to-t"
          ),
        });
      }
      var e6 = n(77799);
      function e4() {
        return (e4 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var e3 = (e) =>
          er.createElement(
            "svg",
            e4(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 22,
                height: 22,
                fill: "none",
                viewBox: "0 0 22 22",
              },
              e
            ),
            m ||
              (m = er.createElement(
                "g",
                { id: "arrow-send" },
                er.createElement("path", {
                  id: "vector",
                  fill: "currentcolor",
                  fillRule: "evenodd",
                  d: "M16.813 10.387a.867.867 0 0 1 0 1.226l-4.333 4.333a.867.867 0 0 1-1.226-1.226l2.854-2.853H5.8a.867.867 0 1 1 0-1.734h8.308L11.254 7.28a.867.867 0 0 1 1.226-1.226z",
                  clipRule: "evenodd",
                })
              ))
          ),
        e9 = n(36270);
      function e8(e) {
        let { currentQuery: t, onUpdateCurrentQuery: n, onSubmit: r } = e,
          a = (0, er.useRef)(null),
          s = (0, et.w$)(),
          { 0: i, 1: l } = (0, er.useState)(!1),
          o = (0, e9.o)({ query: t }).find(
            (e) => e.length > t.length && e.startsWith(t)
          ),
          c = (0, er.useCallback)(
            (e) => {
              if ("Enter" === e.key && r) {
                var s;
                e.preventDefault(),
                  r(t),
                  null === (s = a.current) || void 0 === s || s.blur();
              }
              ("Tab" === e.key || "ArrowUp" === e.key) &&
                o &&
                (e.preventDefault(), n(o));
            },
            [r, t, o, n]
          );
        return (
          (0, er.useEffect)(
            () =>
              (0, e6.eR)(document, {
                keydown: (e) => {
                  e.metaKey &&
                    "k" === e.key &&
                    a.current &&
                    (e.preventDefault(), a.current.focus());
                },
              }),
            [a]
          ),
          (0, eA.jsxs)("div", {
            className: "relative w-full",
            children: [
              (0, eA.jsx)(e7, {
                type: "text",
                className: "pointer-events-none w-full",
                disabled: !0,
              }),
              (0, eA.jsx)(e7, {
                type: "text",
                $transparentBg: !0,
                className:
                  "pointer-events-none absolute inset-0 text-token-text-tertiary",
                value: i && o ? o : "",
                disabled: !0,
              }),
              (0, eA.jsx)(e7, {
                ref: a,
                type: "text",
                $transparentBg: !0,
                name: "query",
                className: "peer absolute inset-0",
                value: t,
                autoComplete: "off",
                spellCheck: !1,
                placeholder: "Search...",
                onKeyDown: c,
                onChange: (e) => n(e.target.value),
                onFocus: () => l(!0),
                onBlur: () => l(!1),
              }),
              r &&
                (0, eA.jsx)("button", {
                  onClick: () => (null == r ? void 0 : r(t)),
                  className: (0, en.default)(
                    "absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-gray-300 text-token-main-surface-tertiary hover:bg-token-border-light hover:text-token-text-secondary peer-focus:bg-token-text-primary peer-focus:text-token-main-surface-primary peer-focus:hover:opacity-80 dark:bg-gray-700"
                  ),
                  children: (0, eA.jsx)(e3, { className: "icon-lg-heavy" }),
                }),
              (0, eA.jsx)("div", {
                className:
                  "absolute left-3 top-1/2 -translate-y-1/2 px-0.5 md:left-5 md:px-0",
                children: s
                  ? (0, eA.jsx)(ed.jRj, { className: "icon-md-heavy" })
                  : (0, eA.jsx)(ew, {
                      iconSize: "gizmoConversation",
                      className:
                        "border-2 border-transparent group-hover:border-token-text-primary group-data-[state='open']:border-token-text-primary",
                      searchQuery: t,
                    }),
              }),
            ],
          })
        );
      }
      let e7 = ea.Z.input(
        p ||
          (p = (0, $.Z)([
            "text-ellipsis rounded-full py-3 pl-12 pr-14 placeholder-gray-500 outline-none focus:border-token-text-primary focus:ring-0 md:border-0\n",
            "",
          ])),
        (e) => {
          let { $transparentBg: t } = e;
          return t ? "bg-transparent" : "bg-token-main-surface-tertiary";
        }
      );
      var te = n(67739),
        tt = n(58734),
        tn = n(19323),
        tr = n.n(tn),
        ta = n(81479),
        ts = n(83216),
        ti = n(19216),
        tl = n(78375);
      function to(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? to(Object(n), !0).forEach(function (t) {
                (0, eQ.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : to(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let tu = {
          calculator: "Calculator",
          finance: "Finance",
          news: "News",
          "sports-schedule": "Sports Schedule",
          "sports-standings": "Sports Standings",
          "time-difference": "Timezone",
          weather: "Weather",
        },
        td = {
          turn: {
            thumbsDown: [
              { label: "Too verbose", group: "Response" },
              { label: "Too short", group: "Response" },
              { label: "Not enough information", group: "Response" },
              { label: "Inaccurate", group: "Response" },
              { label: "Subject ambiguity", group: "Response" },
              { label: "Location issue", group: "Response" },
              { label: "Bad search results", group: "Response" },
              { label: "Bad response", group: "Response" },
              {
                label: "Issue with followup",
                group: "Response",
                match: (e) => {
                  var t;
                  return (null !== (t = e.index) && void 0 !== t ? t : 0) > 0;
                },
              },
              ...Object.keys(tu).map(function (e) {
                return {
                  label: "No ".concat(tu[e], " widget"),
                  group: "Widget",
                  match: (t) => {
                    var n;
                    return (
                      (null === (n = (0, tl.K)(t)) || void 0 === n
                        ? void 0
                        : n.type) !== e
                    );
                  },
                };
              }),
              {
                label: (e) =>
                  "Shouldn't show ".concat(tu[(0, tl.K)(e).type], " widget"),
                group: "Widget",
                match: (e) => !!(0, tl.K)(e),
              },
              {
                label: (e) =>
                  "Issue with ".concat(tu[(0, tl.K)(e).type], " widget"),
                group: "Widget",
                match: (e) => !!(0, tl.K)(e),
              },
            ],
            thumbsUp: [
              { label: "Accurate", value: "Accurate" },
              { label: "Up-to-date", value: "Up-to-date" },
              { label: "Good search results", value: "Good search results" },
              {
                label: (e) =>
                  "Like the ".concat(tu[(0, tl.K)(e).type], " widget"),
                match: (e) => !!(0, tl.K)(e),
              },
            ],
          },
          link: {
            thumbsDown: [
              { label: "Not relevant", value: "Not relevant" },
              { label: "Out-of-date", value: "Out-of-date" },
              { label: "Ranked too high", value: "Ranked too high" },
              { label: "Ranked too low", value: "Ranked too low" },
              { label: "Bad source", value: "Bad source" },
            ],
            thumbsUp: [
              { label: "Relevant", value: "Relevant" },
              { label: "Up-to-date", value: "Up-to-date" },
              { label: "Ranked appropriately", value: "Ranked appropriately" },
              { label: "Good source", value: "Good source" },
            ],
          },
        };
      async function tm(e) {
        var t;
        let n =
            null !== (t = e.element) && void 0 !== t
              ? t
              : document.getElementById("__next"),
          r = await tr()(n, {
            backgroundColor: e.isDarkMode ? null : "#ffffff",
          }),
          a = document.createElement("canvas"),
          s = a.getContext("2d"),
          i = (r.height / r.width) * 1440;
        return (
          (a.width = 1440),
          (a.height = i),
          null == s || s.drawImage(r, 0, 0, 1440, i),
          new Promise((e) => {
            a.toBlob(
              (t) => {
                e(t);
              },
              "image/jpeg",
              0.8
            );
          })
        );
      }
      function tp(e) {
        let {
            onSubmit: t,
            turn: n,
            thumbsUpTooltip: r,
            thumbsDownTooltip: a,
            screenshotElement: s,
            type: i,
          } = e,
          { 0: l, 1: o } = (0, er.useState)(null),
          { 0: c, 1: u } = (0, er.useState)(null),
          d = (0, et.Gv)();
        return (0, eA.jsxs)("div", {
          onClick: (e) => {
            e.preventDefault(), e.stopPropagation();
          },
          children: [
            (0, eA.jsx)("div", {
              className: "flex items-center gap-2",
              children: [
                {
                  tooltip: null != r ? r : "Good",
                  rating: "thumbsUp",
                  Icon: eo.ib,
                  FilledIcon: eo.go,
                },
                {
                  tooltip: null != a ? a : "Bad",
                  rating: "thumbsDown",
                  Icon: eo.Q7,
                  FilledIcon: eo.W2,
                },
              ].map((e) => {
                let { tooltip: t, rating: n, Icon: r, FilledIcon: a } = e;
                return (0, eA.jsx)(
                  eW.u,
                  {
                    label: t,
                    sideOffset: 0,
                    className: "flex",
                    children: (0, eA.jsx)("button", {
                      className:
                        "block text-token-text-tertiary hover:text-token-text-primary",
                      onClick: async () => {
                        o(await tm({ element: s, isDarkMode: d })), u(n);
                      },
                      disabled: c === n,
                      children:
                        c === n
                          ? (0, eA.jsx)(a, { className: "h-4 w-4" })
                          : (0, eA.jsx)(r, { className: "h-4 w-4" }),
                    }),
                  },
                  n
                );
              }),
            }),
            c &&
              (0, eA.jsx)(
                ta.Z,
                {
                  multiple: !0,
                  onSubmit: (e) =>
                    t(tc(tc({}, e), {}, { screenshot: l, currentRating: c })),
                  onCancel: () => {
                    o(null), u(null);
                  },
                  tagOptions: (function (e) {
                    let { type: t, turn: n, rating: r } = e;
                    return td[t][r]
                      .filter((e) => !e.match || !n || e.match(n))
                      .map((e) => {
                        var t;
                        let r = e.label;
                        if ("function" == typeof r) {
                          if (!n) return null;
                          r = r(n);
                        }
                        return tc(
                          tc({}, e),
                          {},
                          {
                            label: r,
                            value:
                              null !== (t = e.value) && void 0 !== t ? t : r,
                          }
                        );
                      })
                      .filter((e) => null !== e);
                  })({ type: i, rating: c, turn: n }),
                  modalOnly: !0,
                  modalTitle: (0, eA.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      "thumbsUp" === c
                        ? (0, eA.jsx)(eo.go, { className: "mt-[-2px]" })
                        : (0, eA.jsx)(eo.W2, { className: "mb-[-2px]" }),
                      " ",
                      "Provide feedback",
                    ],
                  }),
                },
                c
              ),
          ],
        });
      }
      function th(e) {
        let { turn: t } = e,
          n = (0, ti.nn)(ti.LW.threadId),
          { user: r } = (0, eU.A)();
        (0, er.useEffect)(() => {
          if (n) {
            if (null === t.index) throw Error();
            ts.Y.logEvent(ts.M.searchTurnFeedbackButtonShown, {
              turn_index: t.index,
              thread_id: n,
            });
          }
        }, []);
        let a = async (e) => {
          if (n && e.currentRating) {
            if (null === t.index) throw Error();
            ts.Y.logEvent(ts.M.searchTurnFeedbackSubmitted, {
              turn_index: t.index,
              thread_id: n,
              rating: e.currentRating,
              tags: e.tags,
              text: e.textFeedback,
            }),
              await (0, ez.k4)({
                turnIndex: t.index,
                threadId: n,
                rating: e.currentRating,
                searchQuery: t.user_query,
                tags: e.tags,
                text: e.textFeedback,
                screenshot: e.screenshot,
                userEmail: null == r ? void 0 : r.email,
              });
          }
        };
        return (0, eA.jsx)(tp, {
          onSubmit: a,
          type: "turn",
          turn: t,
          thumbsUpTooltip: "Good response",
          thumbsDownTooltip: "Bad response",
        });
      }
      function tg(e) {
        let { url: t, title: n, snippet: r, turnIndex: a } = e,
          s = (0, ti.nn)(ti.LW.threadId),
          { user: i, searchQuery: l } = (0, eU.A)(),
          o = (0, eU.A)().settings,
          c = (0, eM.NL)(),
          u = o.useRewrittenSnippets
            ? c.getQueryData(["snippet", { url: t }])
            : void 0,
          d = async (e) => {
            s &&
              e.currentRating &&
              i &&
              (ts.Y.logEvent(ts.M.searchLinkFeedbackSubmitted, {
                thread_id: s,
                rating: e.currentRating,
                url: t,
                tags: e.tags,
                text: e.textFeedback,
                turn_index: a,
              }),
              await (0, ez.NK)({
                url: t,
                title: n,
                snippet: r,
                rewrittenSnippet: u,
                threadId: s,
                rating: e.currentRating,
                searchQuery: l,
                tags: e.tags,
                text: e.textFeedback,
                screenshot: e.screenshot,
                userEmail: null == i ? void 0 : i.email,
              }));
          };
        return (0, eA.jsx)(tp, {
          onSubmit: d,
          type: "link",
          thumbsUpTooltip: "Good link",
          thumbsDownTooltip: "Bad link",
        });
      }
      function tf() {
        return (tf = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tx = (e) =>
        er.createElement(
          "svg",
          tf(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          h ||
            (h = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5",
            })),
          g ||
            (g = er.createElement("path", {
              fill: "currentColor",
              d: "M5.344 18.769c0 1.107.549 1.809 1.332 1.809.594 0 1.017-.396 1.134-1.035l1.656.549c-.396 1.215-1.332 2.016-2.781 2.016-1.818 0-3.105-1.395-3.105-3.339s1.287-3.339 3.105-3.339c1.449 0 2.385.801 2.78 2.016l-1.655.549c-.117-.639-.54-1.035-1.134-1.035-.783 0-1.332.702-1.332 1.809m4.082 2.259.963-1.278c.549.621 1.278.909 1.935.909.54 0 .9-.198.9-.567 0-.414-.46-.468-1.45-.666-.944-.189-1.98-.54-1.98-1.854 0-1.323 1.144-2.142 2.575-2.142 1.134 0 2.025.441 2.538.999l-.954 1.188a2.17 2.17 0 0 0-1.63-.738c-.476 0-.8.18-.8.513 0 .369.396.432 1.179.594 1.008.207 2.268.486 2.268 1.926 0 1.395-1.224 2.196-2.718 2.196-1.053 0-2.286-.414-2.826-1.08m5.52 0 .962-1.278c.55.621 1.278.909 1.935.909.54 0 .9-.198.9-.567 0-.414-.459-.468-1.449-.666-.945-.189-1.98-.54-1.98-1.854 0-1.323 1.143-2.142 2.574-2.142 1.134 0 2.025.441 2.538.999l-.954 1.188a2.17 2.17 0 0 0-1.629-.738c-.477 0-.8.18-.8.513 0 .369.395.432 1.178.594 1.008.207 2.268.486 2.268 1.926 0 1.395-1.224 2.196-2.718 2.196-1.053 0-2.286-.414-2.826-1.08",
            })),
          f ||
            (f = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M9 8v2",
            }))
        );
      function tA() {
        return (tA = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tv = (e) =>
        er.createElement(
          "svg",
          tA(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          x ||
            (x = er.createElement("path", {
              fill: "currentColor",
              d: "M9.199 22v-.576c-.252.387-.846.675-1.63.675-1.7 0-2.951-1.35-2.951-3.294 0-1.953 1.278-3.366 3.078-3.366 1.413 0 2.34.747 2.736 1.935L9 17.833c-.144-.693-.612-1.089-1.296-1.089-.936 0-1.584.81-1.584 2.043s.648 2.043 1.61 2.043c.739 0 1.234-.495 1.315-1.161H7.615v-1.233h2.916V22zm4.228-6.462V22h-1.503v-6.462zM16.331 22h-1.476v-6.462h4.527v1.287h-3.05v1.467h2.537v1.26h-2.538z",
            })),
          A ||
            (A = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5",
            })),
          v ||
            (v = er.createElement("path", {
              fill: "currentColor",
              d: "M6 5h2l-.862 1.724A.5.5 0 0 1 6.691 7H6zM9 5h3l-.862 1.724a.5.5 0 0 1-.447.276H8.566a.35.35 0 0 1-.313-.507zM13 5h3l-.862 1.724a.5.5 0 0 1-.447.276h-2.125a.35.35 0 0 1-.313-.507zM17 5h1v2h-1.434a.35.35 0 0 1-.313-.507z",
            }))
        );
      function tb() {
        return (tb = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ty = (e) =>
        er.createElement(
          "svg",
          tb(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          b ||
            (b = er.createElement("path", {
              fill: "currentColor",
              d: "M4.108 21.991v-1.296c.252.036.414.054.648.054.63 0 .918-.225.918-.873v-4.338h1.503v4.563c0 1.359-.864 1.953-2.232 1.953a5 5 0 0 1-.837-.063m5.51-2.241V22H8.113v-6.462h2.727c1.521 0 2.466.72 2.466 2.106 0 1.377-.945 2.106-2.466 2.106zm0-1.26h1.142c.711 0 1.071-.315 1.071-.846s-.36-.837-1.07-.837H9.616zm8.66 3.51v-.576c-.252.387-.846.675-1.629.675-1.701 0-2.952-1.35-2.952-3.294 0-1.953 1.278-3.366 3.078-3.366 1.413 0 2.34.747 2.736 1.935l-1.431.459c-.144-.693-.612-1.089-1.296-1.089-.936 0-1.584.81-1.584 2.043s.648 2.043 1.611 2.043c.738 0 1.233-.495 1.314-1.161h-1.431v-1.233h2.916V22z",
            })),
          y ||
            (y = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h7.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 19 8.828V11m-4-6v2.5a.5.5 0 0 0 .5.5H18m-2-1 .5-.5",
            }))
        );
      function tj() {
        return (tj = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tw = (e) =>
        er.createElement(
          "svg",
          tj(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          j ||
            (j = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M19 11a7 7 0 1 0-14 0",
            })),
          w ||
            (w = er.createElement("path", {
              fill: "currentColor",
              d: "M6.889 22H5.71l-1.224-4.086V22H2.794v-6.462h2.475l1.053 3.708 1.053-3.708h2.448V22h-1.71v-4.086zm8.027 0H13.26v-1.467h-2.907v-1.296l2.358-3.699h2.205v3.6h.891v1.395h-.89zm-2.997-2.862h1.296V17.05zm6.336-3.6h2.034L22.62 22h-1.791l-.414-1.17h-2.34L17.67 22h-1.746zm.99 1.953-.675 1.926h1.35z",
            })),
          O ||
            (O = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M14.5 11a2.5 2.5 0 0 0-5 0",
            }))
        );
      function tO() {
        return (tO = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tk = (e) =>
        er.createElement(
          "svg",
          tO(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          k ||
            (k = er.createElement("path", {
              fill: "currentColor",
              d: "M6.246 22h-1.08l-1.422-4.473V22h-1.43v-6.462H4.41l1.314 4.239 1.314-4.239H9.1V22H7.67v-4.473zm3.584-3.231c0-1.953 1.287-3.33 3.096-3.33 1.818 0 3.096 1.377 3.096 3.33s-1.278 3.33-3.096 3.33c-1.81 0-3.096-1.377-3.096-3.33m4.689 0c0-1.242-.657-2.025-1.593-2.025s-1.584.783-1.584 2.025.648 2.025 1.584 2.025 1.593-.783 1.593-2.025M19.789 22H18.23l-2.367-6.462h1.602l1.566 4.527 1.566-4.527h1.548z",
            })),
          N ||
            (N = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5",
            })),
          S ||
            (S = er.createElement("path", {
              fill: "currentColor",
              d: "M6 5h2l-.862 1.724A.5.5 0 0 1 6.691 7H6zM9 5h3l-.862 1.724a.5.5 0 0 1-.447.276H8.566a.35.35 0 0 1-.313-.507zM13 5h3l-.862 1.724a.5.5 0 0 1-.447.276h-2.125a.35.35 0 0 1-.313-.507zM17 5h1v2h-1.434a.35.35 0 0 1-.313-.507z",
            }))
        );
      function tN() {
        return (tN = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tS = (e) =>
        er.createElement(
          "svg",
          tN(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          E ||
            (E = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M19 11a7 7 0 1 0-14 0",
            })),
          P ||
            (P = er.createElement("path", {
              fill: "currentColor",
              d: "M6.952 22h-1.18L4.55 17.914V22H2.857v-6.462h2.475l1.053 3.708 1.053-3.708h2.448V22h-1.71v-4.086zm5.579-2.061V22h-1.764v-6.462h2.826c1.593 0 2.574.756 2.574 2.205 0 1.44-.981 2.196-2.574 2.196zm0-1.467h.972c.62 0 .918-.279.918-.729 0-.459-.297-.729-.918-.729h-.972zm6.437 3.636c-1.413 0-2.475-.711-2.646-2.034l1.737-.252c.054.522.414.819.882.819.414 0 .765-.198.765-.648 0-.441-.37-.594-.882-.594h-.567V18.04h.549c.477 0 .8-.162.8-.567 0-.36-.242-.576-.665-.576-.477 0-.765.342-.828.783l-1.638-.153c.144-1.143 1.044-2.097 2.547-2.097 1.43 0 2.322.819 2.322 1.917 0 .648-.396 1.152-.846 1.341.549.252.936.702.936 1.467 0 1.08-.963 1.953-2.466 1.953",
            })),
          _ ||
            (_ = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M14.5 11a2.5 2.5 0 0 0-5 0",
            }))
        );
      function tE() {
        return (tE = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tP = (e) =>
        er.createElement(
          "svg",
          tE(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          C ||
            (C = er.createElement("path", {
              fill: "currentColor",
              d: "M6.844 22h-1.08l-1.422-4.473V22H2.91v-6.462h2.097l1.314 4.239 1.314-4.239h2.06V22h-1.43v-4.473zm5.383-2.25V22h-1.503v-6.462h2.727c1.521 0 2.466.72 2.466 2.106 0 1.377-.945 2.106-2.466 2.106zm0-1.26h1.143c.711 0 1.071-.315 1.071-.846s-.36-.837-1.07-.837h-1.144zM20.485 22H19.09v-1.512h-2.97v-1.125l2.493-3.825h1.88v3.744h1.018v1.206h-1.026zm-2.98-2.718h1.549v-2.403z",
            })),
          D ||
            (D = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5",
            })),
          M ||
            (M = er.createElement("path", {
              fill: "currentColor",
              d: "M6 5h2l-.862 1.724A.5.5 0 0 1 6.691 7H6zM9 5h3l-.862 1.724a.5.5 0 0 1-.447.276H8.566a.35.35 0 0 1-.313-.507zM13 5h3l-.862 1.724a.5.5 0 0 1-.447.276h-2.125a.35.35 0 0 1-.313-.507zM17 5h1v2h-1.434a.35.35 0 0 1-.313-.507z",
            }))
        );
      function t_() {
        return (t_ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tC = (e) =>
        er.createElement(
          "svg",
          t_(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          R ||
            (R = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M19 11a7 7 0 1 0-14 0",
            })),
          L ||
            (L = er.createElement("path", {
              fill: "currentColor",
              d: "M2.647 18.769c0-1.944 1.296-3.339 3.16-3.339 1.871 0 3.167 1.395 3.167 3.339s-1.296 3.339-3.168 3.339c-1.863 0-3.159-1.395-3.159-3.339m4.554 0c0-1.125-.567-1.809-1.395-1.809-.819 0-1.386.684-1.386 1.809s.567 1.809 1.386 1.809c.828 0 1.395-.684 1.395-1.809M13.924 22v-.513c-.26.351-.828.621-1.557.621-1.728 0-2.979-1.35-2.979-3.294s1.287-3.384 3.141-3.384c1.485 0 2.44.774 2.835 1.998l-1.683.54c-.117-.648-.522-1.008-1.143-1.008-.819 0-1.386.72-1.386 1.827 0 1.116.567 1.836 1.413 1.836.594 0 1.008-.369 1.125-.855h-1.242v-1.395h3.006V22zm6.654 0v-.513c-.261.351-.828.621-1.557.621-1.728 0-2.98-1.35-2.98-3.294s1.288-3.384 3.142-3.384c1.485 0 2.439.774 2.835 1.998l-1.683.54c-.117-.648-.522-1.008-1.143-1.008-.82 0-1.386.72-1.386 1.827 0 1.116.567 1.836 1.413 1.836.594 0 1.008-.369 1.125-.855h-1.242v-1.395h3.006V22z",
            })),
          T ||
            (T = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M14.5 11a2.5 2.5 0 0 0-5 0",
            }))
        );
      function tD() {
        return (tD = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tM = (e) =>
        er.createElement(
          "svg",
          tD(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          U ||
            (U = er.createElement("path", {
              fill: "currentColor",
              d: "M5.315 19.75V22H3.812v-6.462h2.727c1.52 0 2.466.72 2.466 2.106 0 1.377-.945 2.106-2.466 2.106zm0-1.26h1.143c.71 0 1.07-.315 1.07-.846s-.36-.837-1.07-.837H5.315zM9.63 22v-6.462h2.295c2.052 0 3.303 1.26 3.303 3.231S13.978 22 11.925 22zm1.467-1.269h.828c1.161 0 1.818-.774 1.818-1.962s-.657-1.962-1.827-1.962h-.819zM17.434 22h-1.476v-6.462h4.527v1.287h-3.05v1.467h2.537v1.26h-2.538z",
            })),
          z ||
            (z = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h7.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 19 8.828V11m-4-6v2.5a.5.5 0 0 0 .5.5H18m-2-1 .5-.5",
            }))
        );
      function tR() {
        return (tR = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tL = (e) =>
        er.createElement(
          "svg",
          tR(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          I ||
            (I = er.createElement("path", {
              fill: "currentColor",
              d: "M4.493 19.75V22H2.99v-6.462h2.727c1.521 0 2.466.72 2.466 2.106 0 1.377-.945 2.106-2.466 2.106zm0-1.26h1.143c.711 0 1.071-.315 1.071-.846s-.36-.837-1.07-.837H4.492zm9.904-2.952V22h-1.305l-2.844-4.167V22h-1.44v-6.462h1.503l2.646 3.951v-3.951zM19.711 22v-.576c-.252.387-.846.675-1.63.675-1.7 0-2.951-1.35-2.951-3.294 0-1.953 1.278-3.366 3.078-3.366 1.413 0 2.34.747 2.736 1.935l-1.431.459c-.144-.693-.612-1.089-1.296-1.089-.936 0-1.584.81-1.584 2.043s.648 2.043 1.61 2.043c.739 0 1.234-.495 1.315-1.161h-1.431v-1.233h2.916V22z",
            })),
          B ||
            (B = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h7.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 19 8.828V11m-4-6v2.5a.5.5 0 0 0 .5.5H18m-2-1 .5-.5",
            }))
        );
      function tT() {
        return (tT = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tU = (e) =>
        er.createElement(
          "svg",
          tT(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          Z ||
            (Z = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h8.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 19 7.828V11",
            })),
          F ||
            (F = er.createElement("path", {
              fill: "currentColor",
              d: "M4.757 19.858V22H2.993v-6.462h2.826c1.593 0 2.574.774 2.574 2.16 0 .918-.468 1.602-1.287 1.935L8.59 22H6.575l-1.27-2.142zm0-1.395h.972c.62 0 .918-.288.918-.72 0-.459-.297-.729-.918-.729h-.972zm6.217-2.925h2.034L15.34 22h-1.79l-.415-1.17h-2.34L10.39 22H8.643zm.99 1.953-.675 1.926h1.35zm5.607 2.367V22h-1.764v-6.462h2.826c1.593 0 2.574.774 2.574 2.16 0 .918-.468 1.602-1.287 1.935L21.405 22H19.39l-1.269-2.142zm0-1.395h.972c.621 0 .918-.288.918-.72 0-.459-.297-.729-.918-.729h-.972zM12 5h-2v2h1.5a.5.5 0 0 0 .5-.5zM10 7H8.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H10zM12 9.5a.5.5 0 0 0-.5-.5H10v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5z",
            }))
        );
      function tz() {
        return (tz = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tI = (e) =>
        er.createElement(
          "svg",
          tz(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          V ||
            (V = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M19 11a7 7 0 1 0-14 0",
            })),
          q ||
            (q = er.createElement("path", {
              fill: "currentColor",
              d: "M5.915 15.538h1.45l.908 3.834.9-3.834h1.791L9.264 22H7.57l-.954-3.816L5.663 22H3.971l-1.7-6.462h1.835l.91 3.834zm6.807 0h2.034L17.087 22h-1.79l-.415-1.17h-2.34L12.137 22h-1.746zm.99 1.953-.675 1.926h1.35zM20.394 22h-1.81l-2.34-6.462h1.882l1.395 4.158 1.404-4.158h1.809z",
            })),
          H ||
            (H = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M14.5 11a2.5 2.5 0 0 0-5 0",
            }))
        );
      function tB() {
        return (tB = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tZ = (e) =>
        er.createElement(
          "svg",
          tB(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          Q ||
            (Q = er.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h8.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 19 7.828V11",
            })),
          W ||
            (W = er.createElement("path", {
              fill: "currentColor",
              d: "M9.882 20.506V22H4.59v-1.314l3.006-3.654h-2.97v-1.494h5.22v1.305l-2.961 3.663zm2.96-4.968V22H11.08v-6.462zm3.146 4.401V22h-1.764v-6.462h2.826c1.593 0 2.574.756 2.574 2.205 0 1.44-.98 2.196-2.574 2.196zm0-1.467h.972c.621 0 .918-.279.918-.729 0-.459-.297-.729-.918-.729h-.972zM12 5h-2v2h1.5a.5.5 0 0 0 .5-.5zM10 7H8.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H10zM12 9.5a.5.5 0 0 0-.5-.5H10v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5z",
            }))
        );
      function tF(e) {
        let { searchResult: t, className: n } = e;
        switch (t.content_type) {
          case "application/pdf":
            return (0, eA.jsx)(tM, { className: n });
          case "image/gif":
            return (0, eA.jsx)(tv, { className: n });
          case "image/jpeg":
            return (0, eA.jsx)(ty, { className: n });
          case "image/png":
            return (0, eA.jsx)(tL, { className: n });
          case "audio/mpeg":
            return (0, eA.jsx)(tS, { className: n });
          case "audio/m4a":
            return (0, eA.jsx)(tw, { className: n });
          case "audio/ogg":
            return (0, eA.jsx)(tC, { className: n });
          case "audio/wav":
            return (0, eA.jsx)(tI, { className: n });
          case "video/mp4":
            return (0, eA.jsx)(tP, { className: n });
          case "video/quicktime":
            return (0, eA.jsx)(tk, { className: n });
          case "application/zip":
            return (0, eA.jsx)(tZ, { className: n });
          case "application/x-rar-compressed":
            return (0, eA.jsx)(tU, { className: n });
          case "text/css":
            return (0, eA.jsx)(tx, { className: n });
        }
        switch (new URL(t.url).pathname.split(".").pop()) {
          case "pdf":
            return (0, eA.jsx)(tM, { className: n });
          case "gif":
            return (0, eA.jsx)(tv, { className: n });
          case "jpg":
          case "jpeg":
            return (0, eA.jsx)(ty, { className: n });
          case "png":
            return (0, eA.jsx)(tL, { className: n });
          case "mp3":
            return (0, eA.jsx)(tS, { className: n });
          case "m4a":
            return (0, eA.jsx)(tw, { className: n });
          case "ogg":
            return (0, eA.jsx)(tC, { className: n });
          case "wav":
            return (0, eA.jsx)(tI, { className: n });
          case "mp4":
            return (0, eA.jsx)(tP, { className: n });
          case "mov":
            return (0, eA.jsx)(tk, { className: n });
          case "zip":
            return (0, eA.jsx)(tZ, { className: n });
          case "rar":
            return (0, eA.jsx)(tU, { className: n });
          case "css":
            return (0, eA.jsx)(tx, { className: n });
          default:
            return null;
        }
      }
      function tV(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tq(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tV(Object(n), !0).forEach(function (t) {
                (0, eQ.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tV(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function tH(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tQ(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tH(Object(n), !0).forEach(function (t) {
                (0, eQ.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tH(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let tW = ["turnIndex", "groupPosition", "rawPosition"];
      function tG(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tX(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tG(Object(n), !0).forEach(function (t) {
                (0, eQ.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tG(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function tK(e) {
        let { searchResult: t } = e;
        return t.pub_date
          ? (0, eA.jsxs)("span", {
              className: "text-token-text-tertiary",
              children: [
                new Date(1e3 * t.pub_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
                " — ",
              ],
            })
          : null;
      }
      function tJ(e) {
        return { ease: "easeOut", duration: 0.15, delay: (e + 1) * 0.09 };
      }
      function tY(e) {
        let {
            secondaryResults: t,
            rawPosition: n,
            groupPosition: r,
            turnIndex: a,
            showFeedbackButtons: s,
            highlightUrl: i,
          } = e,
          l = (0, et.w$)();
        return (0, eA.jsx)("div", {
          className: "ml-7 mt-snc-1 flex flex-col gap-5",
          children: t.map((e, t) =>
            (0, eA.jsx)(
              eP.E.div,
              {
                className: "group relative",
                initial: l ? { opacity: 0, translateY: 4 } : {},
                animate: l ? { opacity: 1, translateY: 0 } : {},
                transition: tJ(t),
                children: (0, eA.jsxs)(
                  t0,
                  {
                    href: e.url,
                    turnIndex: a,
                    groupPosition: [r[0], t],
                    rawPosition: n + t,
                    target: "_blank",
                    rel: "noreferrer",
                    className: (0, en.default)(
                      "block group-hover:text-token-link",
                      { "bg-yellow-100 dark:bg-yellow-900": i === e.url }
                    ),
                    children: [
                      (0, eA.jsx)("div", {
                        className:
                          "line-clamp-2 text-sm font-medium group-hover:text-token-link",
                        children: e.title,
                      }),
                      (0, eA.jsxs)("div", {
                        className:
                          "mt-1 line-clamp-1 text-xs font-normal text-token-text-tertiary",
                        children: [
                          (0, eA.jsx)(tF, {
                            searchResult: e,
                            className:
                              "mr-1 mt-1 inline h-5 w-5 -translate-y-1",
                          }),
                          (0, eA.jsx)(tK, { searchResult: e }),
                          e.snippet,
                        ],
                      }),
                      s &&
                        (0, eA.jsx)("div", {
                          className:
                            "invisible absolute right-0 top-0 py-0.5 group-hover:visible",
                          children: (0, eA.jsx)(tg, {
                            url: e.url,
                            title: e.title,
                            snippet: e.snippet,
                            turnIndex: a,
                          }),
                        }),
                    ],
                  },
                  t
                ),
              },
              t
            )
          ),
        });
      }
      function t$(e) {
        var t;
        let {
            searchResult: n,
            groupPosition: r,
            rawPosition: a,
            showFeedbackButtons: s,
            showUserHash: i,
            highlightUrl: l,
            turnIndex: o,
          } = e,
          [c, u] =
            "search_result_group" === n.type
              ? [n.entries[0], n.entries.slice(1)]
              : [n, []],
          d = (0, er.useRef)(null),
          { userHash: m } = (0, eU.A)(),
          p = i
            ? (0, eA.jsx)("div", {
                className: "mt-0.5 h-4 w-4 flex-shrink-0 rounded",
                style: { backgroundColor: "#" + m },
              })
            : (0, eA.jsx)(ek.Z, {
                url: c.url,
                className:
                  "mt-0.5 h-4 w-4 rounded bg-token-main-surface-primary object-cover",
                size: 32,
              }),
          h =
            null !== (t = (0, eS.d)(c.url).data) && void 0 !== t
              ? t
              : (0, tt.p)(c.url, "short"),
          g = l === c.url;
        return (
          (0, er.useEffect)(() => {
            g &&
              d.current &&
              d.current.scrollIntoView({ behavior: "smooth", block: "center" });
          }, [g]),
          (0, eA.jsx)("div", {
            ref: d,
            className: "link-result px-snc-results-content-padding xl:px-0",
            children: (0, eA.jsxs)("div", {
              className: "flex w-full min-w-0 flex-col overflow-y-auto",
              children: [
                (0, eA.jsxs)(t0, {
                  turnIndex: o,
                  href: c.url,
                  groupPosition: r,
                  rawPosition: a,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "group flex gap-3",
                  children: [
                    p,
                    (0, eA.jsxs)("div", {
                      className: "flex-grow flex-row",
                      children: [
                        (0, eA.jsx)("div", {
                          className:
                            "line-clamp-1 flex h-5 items-center text-xs text-token-text-tertiary",
                          children: h,
                        }),
                        (0, eA.jsx)("div", {
                          className: (0, en.default)(
                            "line-clamp-2 text-sm font-medium group-hover:text-token-link",
                            { "bg-yellow-100 dark:bg-yellow-900": g }
                          ),
                          children: c.title,
                        }),
                        (0, eA.jsxs)("div", {
                          className:
                            "mt-1 line-clamp-2 text-xs text-token-text-tertiary",
                          children: [
                            (0, eA.jsx)(tF, {
                              searchResult: c,
                              className:
                                "mr-1 mt-1 inline h-5 w-5 -translate-y-1",
                            }),
                            (0, eA.jsx)(tK, { searchResult: c }),
                            c.snippet,
                          ],
                        }),
                        s &&
                          (0, eA.jsx)("div", {
                            className:
                              "invisible absolute right-0 top-0 py-0.5 group-hover:visible",
                            children: (0, eA.jsx)(tg, {
                              url: c.url,
                              title: c.title,
                              snippet: c.snippet,
                              turnIndex: o,
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                u &&
                  u.length > 0 &&
                  (0, eA.jsx)(tY, {
                    secondaryResults: u,
                    rawPosition: a,
                    groupPosition: r,
                    turnIndex: o,
                    showFeedbackButtons: s,
                    highlightUrl: l,
                  }),
              ],
            }),
          })
        );
      }
      let t0 = (0, er.forwardRef)(function (e, t) {
        let n = (0, ti.nn)(ti.LW.threadId),
          { turnIndex: r, groupPosition: a, rawPosition: s } = e,
          i = (0, te.Z)(e, tW);
        function l(t) {
          e.href &&
            n &&
            ts.Y.logEvent(t, {
              url: e.href,
              thread_id: n,
              turn_index: r,
              group_position: a,
              raw_position: s,
            });
        }
        return (
          (0, er.useEffect)(() => {
            l(ts.M.searchLinkShown);
          }, []),
          (0, eA.jsx)(
            "a",
            tX(
              tX({ ref: t }, i),
              {},
              {
                onClick: (t) => {
                  var n;
                  null === (n = e.onClick) || void 0 === n || n.call(e, t),
                    t.stopPropagation(),
                    l(ts.M.searchLinkClicked);
                },
              }
            )
          )
        );
      });
      function t1(e) {
        let {
            className: t,
            highlightUrl: n,
            showFeedbackButtons: r = !0,
            animateInResults: a = !0,
          } = e,
          s = (0, et.aj)(),
          { searchResults: i, numTotalSearchResults: l } = (function (e) {
            let { searchResults: t, numTotalSearchResults: n } = (function (e) {
                let t = (0, ti.nn)(ti.LW.turns),
                  n = (0, eC.compact)(
                    t.toReversed().flatMap((e) => {
                      var t;
                      return null === (t = e.search_results) ||
                        void 0 === t ||
                        null === (t = t.entries) ||
                        void 0 === t
                        ? void 0
                        : t.map((t) => ({ entry: t, index: e.index }));
                    })
                  );
                return {
                  searchResults: null != e ? n.slice(0, e) : n,
                  numTotalSearchResults: n.length,
                };
              })(void 0),
              r = (0, eU.A)().settings,
              a = null == r ? void 0 : r.useRewrittenSnippets,
              s = (function (e) {
                let t =
                    !(arguments.length > 1) ||
                    void 0 === arguments[1] ||
                    arguments[1],
                  n = (0, eM.NL)(),
                  r = (0, eU.A)().settings,
                  a = null == r ? void 0 : r.rewrittenSnippetsPrompt,
                  s = eI(a, n);
                return (0, eL.h)({
                  queries: e.map((n) => ({
                    queryKey: ["snippet", { url: n, prompt: a }],
                    queryFn: async () => await s.fetch(n),
                    enabled: e.length > 0 && t,
                  })),
                  combine: (e) => {
                    let t = new Map();
                    for (let n of e) n.data && t.set(n.data.url, n.data);
                    return t;
                  },
                });
              })(
                t
                  .flatMap((e) =>
                    "search_result_group" === e.entry.type
                      ? e.entry.entries
                      : [e.entry]
                  )
                  .map((e) => e.url),
                a
              );
            return a
              ? {
                  searchResults: (0, eC.compact)(
                    t.map((e) => {
                      let t = (function (e, t) {
                        if ("search_result_group" === e.type) {
                          let n = (0, eC.compact)(e.entries.map(t));
                          return 0 === n.length
                            ? void 0
                            : tq(tq({}, e), {}, { entries: n });
                        }
                        return t(e);
                      })(e.entry, (e) => {
                        var t, n, r, a;
                        return s.has(e.url)
                          ? tQ(
                              tQ({}, e),
                              {},
                              {
                                title:
                                  null !==
                                    (t =
                                      null === (n = s.get(e.url)) ||
                                      void 0 === n
                                        ? void 0
                                        : n.title) && void 0 !== t
                                    ? t
                                    : e.title,
                                snippet:
                                  null !==
                                    (r =
                                      null === (a = s.get(e.url)) ||
                                      void 0 === a
                                        ? void 0
                                        : a.snippet) && void 0 !== r
                                    ? r
                                    : e.snippet,
                              }
                            )
                          : void 0;
                      });
                      if (t) return { index: e.index, entry: t };
                    })
                  ),
                  numTotalSearchResults: n,
                }
              : { searchResults: t, numTotalSearchResults: n };
          })(),
          o = l > 0,
          c = (0, er.useRef)((0, eC.random)(0, 2));
        return (0, eA.jsxs)("div", {
          className: (0, en.default)(t, "flex flex-col gap-snc-1"),
          children: [
            s &&
              o &&
              (0, eA.jsx)("div", {
                className: "py-2 font-medium text-token-text-primary",
                children: "Sources",
              }),
            (0, eA.jsx)("div", {
              className: "flex w-full flex-col gap-snc-2",
              children:
                o &&
                i.map((e, t) => {
                  var s;
                  return (0, eA.jsx)(
                    eP.E.div,
                    {
                      initial: a ? { opacity: 0, translateY: 4 } : {},
                      animate: a ? { opacity: 1, translateY: 0 } : {},
                      transition: tJ(t),
                      children: (0, eA.jsx)(
                        t$,
                        {
                          groupPosition: [t, 0],
                          rawPosition:
                            0 === t
                              ? 0
                              : i
                                  .slice(0, t)
                                  .reduce(
                                    (e, t) =>
                                      e +
                                      ("search_result_group" === t.entry.type
                                        ? t.entry.entries.length
                                        : 0),
                                    0
                                  ),
                          searchResult: e.entry,
                          showUserHash: c.current === t,
                          showFeedbackButtons: r,
                          highlightUrl: n,
                          turnIndex:
                            null !== (s = e.index) && void 0 !== s ? s : 0,
                        },
                        t
                      ),
                    },
                    ""
                      .concat(e.index, "-")
                      .concat(
                        "search_result_group" === e.entry.type
                          ? e.entry.domain
                          : e.entry.url
                      )
                  );
                }),
            }),
          ],
        });
      }
      var t2 = n(92226),
        t5 = n(79864),
        t6 = n(35936),
        t4 = n(2946),
        t3 = n(90572),
        t9 = n(66315),
        t8 = n(47567);
      function t7(e) {
        let { children: t, className: n } = e,
          r = (0, er.useRef)(null),
          a = (0, er.useRef)(!1),
          s = (0, er.useRef)(0),
          i = (0, er.useRef)(0),
          l = (0, er.useRef)(0),
          { 0: o, 1: c } = (0, er.useState)(!1),
          { 0: u, 1: d } = (0, er.useState)(0),
          { 0: m, 1: p } = (0, er.useState)(0);
        (0, er.useEffect)(
          () => () => {
            window.cancelAnimationFrame(l.current);
          },
          []
        );
        let h = () => {
            g(),
              setTimeout(() => {
                c(!1), (a.current = !1);
              });
          },
          g = () => {
            if (!r.current || 0.5 > Math.abs(i.current)) {
              window.cancelAnimationFrame(l.current);
              return;
            }
            (r.current.scrollLeft -= i.current),
              (i.current *= 0.95),
              (l.current = window.requestAnimationFrame(g));
          };
        return (0, eA.jsx)("div", {
          className: (0, en.default)("overflow-x-auto", n, {
            "cursor-grab": !o,
            "cursor-grabbing": o,
          }),
          ref: r,
          onPointerDown: (e) => {
            r.current &&
              (e.preventDefault(),
              d(e.pageX - r.current.offsetLeft),
              p(r.current.scrollLeft),
              c(!0),
              (s.current = e.pageX),
              (i.current = 0),
              window.cancelAnimationFrame(l.current));
          },
          onPointerMove: (e) => {
            if (!r.current || !o) return;
            e.preventDefault();
            let t = e.pageX - r.current.offsetLeft;
            (r.current.scrollLeft = m - (t - u)),
              (a.current = !0),
              (i.current = e.pageX - s.current),
              (s.current = e.pageX);
          },
          onPointerUp: h,
          onPointerLeave: h,
          onClickCapture: (e) => {
            a.current && (e.stopPropagation(), e.preventDefault());
          },
          children: t,
        });
      }
      function ne(e) {
        let { images: t, children: n } = e;
        return t.length >= 4
          ? (0, eA.jsx)(nn, {
              images: t,
              numVisible: Math.min(4 * Math.floor(t.length / 4), 8),
              children: n,
            })
          : t.length >= 1
            ? (0, eA.jsx)(nt, { image: t[0], children: n })
            : (0, eA.jsx)(eA.Fragment, { children: n });
      }
      function nt(e) {
        let { image: t, children: n } = e;
        return (0, eA.jsxs)("div", {
          className: "w-full",
          children: [
            (0, eA.jsx)(
              eF,
              {
                image: t,
                className:
                  "relative float-right mb-snc-2 ml-snc-2 mr-snc-results-content-padding mt-snc-results-content-inset min-w-[120px] max-w-[22%] overflow-hidden rounded-xl",
              },
              t.content_url
            ),
            n,
          ],
        });
      }
      function nn(e) {
        let { images: t, numVisible: n = 8, children: r } = e,
          { downloadedImageUrls: a } = eZ(t.map((e) => e.thumbnail_url)),
          s = t.filter((e) => a.has(e.thumbnail_url));
        return (0, eA.jsxs)("div", {
          className: "flex flex-col",
          children: [
            (0, eA.jsx)(nr, {
              className: "px-snc-results-padding",
              children: s
                .slice(0, n)
                .map((e, t) =>
                  (0, eA.jsx)(
                    eF,
                    {
                      image: e,
                      className: (0, en.default)(
                        "min-w-full overflow-hidden md:w-[calc((100%-0.25rem*3)/4)] md:min-w-[inherit]",
                        0 === t && "rounded-tl-xl",
                        3 === t && "rounded-tr-xl",
                        t === n - 4 && "rounded-bl-xl",
                        t === n - 1 && "rounded-br-xl"
                      ),
                    },
                    e.thumbnail_url
                  )
                ),
            }),
            r,
          ],
        });
      }
      function nr(e) {
        let { className: t, children: n } = e;
        return (0, et.w$)()
          ? (0, eA.jsx)("div", {
              className: (0, en.default)(
                "mb-6 flex flex-wrap gap-1 overflow-hidden",
                t
              ),
              children: n,
            })
          : (0, eA.jsx)(t7, {
              className: (0, en.default)(
                "no-scrollbar -mx-4 flex gap-2 px-4 pb-snc-2",
                t
              ),
              children: n,
            });
      }
      var na = n(93686);
      function ns(e) {
        let { data: t } = e;
        if (t.expression && void 0 !== t.result && null !== t.result) {
          let e = Number(t.result);
          return (0, eA.jsxs)("div", {
            children: [
              (0, eA.jsx)("div", {
                className: "tracking-wide text-token-text-tertiary",
                children: "".concat(t.expression, "="),
              }),
              (0, eA.jsx)("div", {
                className: "text-3xl font-medium",
                children: e.toLocaleString((0, na.BH)(null, !0), {
                  maximumFractionDigits: 6,
                }),
              }),
            ],
          });
        }
        return null;
      }
      var ni = n(56115);
      function nl(e) {
        let { data: t } = e;
        if (null === t.articles) throw Error();
        let n = (0, eS.u)(t.articles.map((e) => e.source_url));
        return (0, eA.jsxs)("div", {
          children: [
            (0, eA.jsx)("h2", {
              className: "pb-4 text-base font-medium",
              children: "Top stories",
            }),
            (0, eA.jsx)("div", {
              className: "flex flex-col gap-5",
              children: t.articles.map((e) => {
                var t;
                return (0, eA.jsxs)(
                  "div",
                  {
                    className: "flex items-start gap-10",
                    children: [
                      (0, eA.jsxs)("div", {
                        className: "flex-grow",
                        children: [
                          (0, eA.jsx)("a", {
                            href: e.source_url,
                            target: "_blank",
                            className:
                              "line-clamp-3 inline-block cursor-pointer text-base text-token-link hover:underline",
                            children: e.title,
                          }),
                          (0, eA.jsxs)("div", {
                            className: "flex items-center gap-2 text-sm",
                            children: [
                              (0, eA.jsx)(ek.Z, {
                                url: e.source_url,
                                className: "h-4 w-4 rounded",
                                size: 32,
                              }),
                              (0, eA.jsxs)("span", {
                                className: "text-sm text-token-text-tertiary",
                                children: [
                                  null !== (t = n.get(e.source_url)) &&
                                  void 0 !== t
                                    ? t
                                    : (0, tt.p)(e.source_url, "short"),
                                  e.published_on &&
                                    (0, eA.jsxs)("span", {
                                      children: [
                                        "\xa0—\xa0",
                                        (0, ni.Z)(
                                          new Date(e.published_on),
                                          "MMM d, yyyy"
                                        ),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.image_url &&
                        (0, eA.jsx)("img", {
                          alt: e.title,
                          className:
                            "aspect-square h-20 w-20 flex-shrink-0 rounded-lg object-cover",
                          src: e.image_url,
                        }),
                    ],
                  },
                  e.source_url
                );
              }),
            }),
          ],
        });
      }
      var no = n(11265),
        nc = n(91304);
      let nu = (
        (null ===
          (r = Intl.DateTimeFormat(void 0, {
            timeZoneName: "long",
          }).formatToParts(new Date())) ||
        void 0 === r ||
        null === (r = r.find((e) => "timeZoneName" == e.type)) ||
        void 0 === r
          ? void 0
          : r.value) || Intl.DateTimeFormat().resolvedOptions().timeZone
      ).replace(/Daylight|Standard/g, "");
      function nd(e) {
        let [t, n] = e.split(":");
        return "".concat(t.padStart(2, "0"), ":").concat(n);
      }
      let nm = { T: "Top", B: "Bot" };
      function np(e) {
        let { data: t } = e,
          { 0: n, 1: r } = (0, er.useState)(!0);
        if (!t.games.length) return null;
        let a = t.league.league_url;
        function s(e) {
          return (
            "live" === e.status || ("complete" === e.status && null != e.points)
          );
        }
        return (0, eA.jsxs)(eA.Fragment, {
          children: [
            (0, eA.jsxs)("h2", {
              className: "text-xl font-medium",
              children: [t.league.display_name, " Schedule"],
            }),
            a &&
              (0, eA.jsx)("a", {
                href: a,
                target: "_blank",
                rel: "noreferrer",
                className: "text-sm text-token-link hover:opacity-80",
                children: a,
              }),
            (0, eA.jsx)("hr", { className: "mt-6 border-token-border-light" }),
            (0, eA.jsx)(no.Z.Root, {
              size: "compact",
              children: (0, eA.jsx)(no.Z.Body, {
                children: (0, eA.jsx)(e_.M, {
                  children: t.games.slice(0, n ? 6 : void 0).map((e, n) => {
                    var r;
                    return (0, eA.jsxs)(
                      ng,
                      {
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -30 },
                        transition: { duration: 0.2 },
                        children: [
                          (0, eA.jsx)(nh, {
                            className: "w-[180px]",
                            children: (function (e) {
                              var n, r;
                              switch (e.status) {
                                case "scheduled":
                                  return (0, eA.jsxs)(eA.Fragment, {
                                    children: [
                                      (function (e) {
                                        let t = new Date(1e3 * e);
                                        return (0, nc.Z)(t)
                                          ? "Today"
                                          : (0, ni.Z)(t, "MMMM d");
                                      })(e.scheduled),
                                      (0, eA.jsx)("br", {}),
                                      ((n = e.scheduled),
                                      (0, ni.Z)(new Date(1e3 * n), "h:mm a")),
                                    ],
                                  });
                                case "live":
                                  return (0, eA.jsxs)(eA.Fragment, {
                                    children: [
                                      "Now",
                                      (0, eA.jsx)("br", {}),
                                      (function (e, t) {
                                        if (!t.live_details) return null;
                                        if ("nba" === e) {
                                          var n;
                                          let e = t.live_details;
                                          return ""
                                            .concat(
                                              5 === (n = e.quarter)
                                                ? "OT"
                                                : "Q".concat(n),
                                              " "
                                            )
                                            .concat(nd(e.time));
                                        }
                                        if ("mlb" === e) {
                                          let e = t.live_details;
                                          if (e.current_inning_half)
                                            return ""
                                              .concat(
                                                nm[e.current_inning_half],
                                                " "
                                              )
                                              .concat(
                                                (function (e) {
                                                  let t = [
                                                      "th",
                                                      "st",
                                                      "nd",
                                                      "rd",
                                                    ],
                                                    n = e % 100;
                                                  return (
                                                    e +
                                                    (t[(n - 20) % 10] ||
                                                      t[n] ||
                                                      "th")
                                                  );
                                                })(e.current_inning)
                                              );
                                        } else if ("nhl" === e) {
                                          let e = t.live_details;
                                          return "P"
                                            .concat(e.period, " ")
                                            .concat(nd(e.time));
                                        }
                                        return null;
                                      })(t.league.id, e),
                                    ],
                                  });
                                case "complete":
                                  return (0, eA.jsxs)("div", {
                                    children: [
                                      "Final",
                                      (0, eA.jsx)("br", {}),
                                      (0, eA.jsx)("div", {
                                        className: "text-token-text-secondary",
                                        children:
                                          void 0 === (r = e.scheduled)
                                            ? ""
                                            : (0, ni.Z)(
                                                new Date(1e3 * r),
                                                "EEE, MMM d"
                                              ),
                                      }),
                                    ],
                                  });
                              }
                            })(e),
                          }),
                          (0, eA.jsx)(nh, {
                            children: (0, eA.jsxs)("div", {
                              className: "w-full max-w-[280px]",
                              children: [
                                (0, eA.jsxs)("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    (0, eA.jsx)("span", {
                                      children: e.away.name,
                                    }),
                                    s(e) &&
                                      (0, eA.jsx)("span", {
                                        children: e.points.away,
                                      }),
                                  ],
                                }),
                                (0, eA.jsxs)("div", {
                                  className:
                                    "mt-2 flex items-center justify-between",
                                  children: [
                                    e.home.name,
                                    s(e) &&
                                      (0, eA.jsx)("span", {
                                        children: e.points.home,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, eA.jsx)(nh, {
                            textAlign: "right",
                            className: "text-token-text-secondary",
                            children:
                              null === (r = e.broadcasts) ||
                              void 0 === r ||
                              null ===
                                (r = r.find((e) => "National" === e.locale)) ||
                              void 0 === r
                                ? void 0
                                : r.network,
                          }),
                        ],
                      },
                      n
                    );
                  }),
                }),
              }),
            }),
            (0, eA.jsx)("hr", { className: "border-token-border-light" }),
            (0, eA.jsxs)("div", {
              className: "mt-6 flex items-center justify-between",
              children: [
                t.games.length > 6 &&
                  (0, eA.jsx)("button", {
                    className: "flex items-center text-sm font-medium",
                    onClick: () => r(!n),
                    children: n
                      ? (0, eA.jsxs)(eA.Fragment, {
                          children: [
                            "Show more ",
                            (0, eA.jsx)(el.eOB, { className: "mb-[-2px]" }),
                          ],
                        })
                      : (0, eA.jsxs)(eA.Fragment, {
                          children: [
                            "Show less ",
                            (0, eA.jsx)(el.BZB, { className: "mb-[-2px]" }),
                          ],
                        }),
                  }),
                (0, eA.jsx)("div", {
                  className: "text-xs text-token-text-tertiary",
                  children: nu,
                }),
              ],
            }),
          ],
        });
      }
      let nh = (0, ea.Z)(no.Z.Cell)(G || (G = (0, $.Z)(["py-5 align-middle"]))),
        ng = (0, eP.E)(no.Z.Row);
      var nf = n(28541),
        nx = n.n(nf);
      let nA = ["East", "Central", "West"];
      function nv(e) {
        let { data: t } = e,
          { 0: n, 1: r } = (0, er.useState)(0),
          a = nx()(t.conferences[n].divisions, (e) => {
            var t;
            let n = nA.indexOf(null !== (t = e.name) && void 0 !== t ? t : "");
            return -1 === n ? 1 / 0 : n;
          }),
          s =
            t.conferences.length > 1
              ? t.conferences.map((e, t) =>
                  (0, eA.jsx)(
                    "button",
                    {
                      className: (0, en.default)(
                        n === t
                          ? "text-token-text-primary"
                          : "text-token-text-tertiary",
                        "text-sm font-medium"
                      ),
                      onClick: () => r(t),
                      children: e.name,
                    },
                    e.name
                  )
                )
              : null;
        return (0, eA.jsxs)(eA.Fragment, {
          children: [
            s && (0, eA.jsx)("div", { className: "flex gap-4", children: s }),
            (0, eA.jsx)("div", {
              className: "mt-5",
              children: a.map((e) =>
                e.name
                  ? (0, eA.jsxs)(
                      "div",
                      {
                        className: "mt-5",
                        children: [
                          (0, eA.jsx)("div", {
                            className: "pb-2 text-sm font-medium",
                            children: e.name,
                          }),
                          (0, eA.jsx)(nw, {
                            league: t.league.id,
                            teams: e.teams,
                          }),
                        ],
                      },
                      e.name
                    )
                  : (0, eA.jsx)(nw, { league: t.league.id, teams: e.teams })
              ),
            }),
          ],
        });
      }
      let nb = (0, ea.Z)(no.Z.HeaderCell)(
          X ||
            (X = (0, $.Z)([
              "text-token-text-tertiary text-xs dark:bg-token-main-surface-tertiary",
            ]))
        ),
        ny = {
          wins: { column: "W", label: "Wins", format: (e) => e.wins },
          losses: { column: "L", label: "Losses", format: (e) => e.losses },
          ties: { column: "T", label: "Ties", format: (e) => e.ties },
          win_percentage: {
            column: "PCT",
            label: "Win %",
            format: (e) => e.win_percentage.toFixed(3),
          },
          games_behind: {
            column: "GB",
            label: "Games Behind",
            format: (e) =>
              e.games_behind && null !== e.games_behind.conference
                ? 0 === e.games_behind.conference
                  ? "—"
                  : Math.round(100 * e.games_behind.conference) / 100
                : "",
          },
          conference_record: {
            column: "Conf",
            label: "Conference Record",
            format: (e) => {
              let t = e.records.find((e) => "conference" === e.record_type);
              return t ? "".concat(t.wins, "-").concat(t.losses) : "";
            },
          },
          home_record: {
            column: "Home",
            label: "Home Record",
            format: (e) => {
              let t = e.records.find((e) => "home" === e.record_type);
              return t ? "".concat(t.wins, "-").concat(t.losses) : "";
            },
          },
          away_record: {
            column: "Away",
            label: "Away Record",
            format: (e) => {
              let t = e.records.find((e) => "away" === e.record_type);
              return t ? "".concat(t.wins, "-").concat(t.losses) : "";
            },
          },
          l10_record: {
            column: "L10",
            label: "Last 10 Record",
            format: (e) => {
              let t = e.records.find((e) => "last_10" === e.record_type);
              return t ? "".concat(t.wins, "-").concat(t.losses) : "";
            },
          },
          streak: {
            column: "Strk",
            label: "Streak",
            format: (e) => {
              var t, n;
              return e.streak
                ? ""
                    .concat(
                      (null === (t = e.streak) || void 0 === t
                        ? void 0
                        : t.kind) === "win"
                        ? "W"
                        : "L"
                    )
                    .concat(
                      null === (n = e.streak) || void 0 === n
                        ? void 0
                        : n.length
                    )
                : "";
            },
          },
          ot_losses: {
            column: "OTL",
            label: "Overtime Losses",
            format: (e) => e.overtime_losses,
          },
          points: { column: "PTS", label: "Points", format: (e) => e.points },
        },
        nj = {
          nba: [
            "wins",
            "losses",
            "win_percentage",
            "games_behind",
            "l10_record",
            "streak",
          ],
          wnba: [
            "wins",
            "losses",
            "win_percentage",
            "games_behind",
            "l10_record",
            "streak",
          ],
          nhl: [
            "wins",
            "losses",
            "ot_losses",
            "win_percentage",
            "points",
            "conference_record",
            "home_record",
            "l10_record",
            "streak",
          ],
          mlb: ["wins", "losses", "win_percentage", "streak", "l10_record"],
          epl: ["wins", "win_percentage", "losses", "ties"],
          nfl: [],
          ncaaf: [],
          ncaab: [],
          wncaab: [],
        };
      function nw(e) {
        let { league: t, teams: n } = e,
          r = nj[t];
        return (0, eA.jsxs)(no.Z.Root, {
          size: "compact",
          children: [
            (0, eA.jsxs)(no.Z.Header, {
              children: [
                (0, eA.jsx)(nb, { children: "Team" }),
                (0, eA.jsx)(nb, {}),
                r.map((e) =>
                  (0, eA.jsx)(
                    nb,
                    {
                      textAlign: "center",
                      className: "px-1",
                      children: (0, eA.jsx)("span", {
                        title: ny[e].label,
                        children: ny[e].column,
                      }),
                    },
                    e
                  )
                ),
              ],
            }),
            (0, eA.jsx)(no.Z.Body, {
              children: n.map((e, t) =>
                (0, eA.jsxs)(
                  no.Z.Row,
                  {
                    children: [
                      (0, eA.jsxs)(no.Z.Cell, {
                        children: [
                          (0, eA.jsx)("div", {
                            className:
                              "mr-4 w-4 tabular-nums text-token-text-tertiary",
                            children: t + 1,
                          }),
                          (0, eA.jsx)("span", {
                            className: "whitespace-nowrap",
                            children: e.name,
                          }),
                        ],
                      }),
                      (0, eA.jsx)(no.Z.Cell, { className: "w-full" }),
                      r.map((t) =>
                        (0, eA.jsx)(
                          no.Z.Cell,
                          {
                            textAlign: "center",
                            className: "whitespace-nowrap px-1 tabular-nums",
                            children: ny[t].format(e),
                          },
                          t
                        )
                      ),
                    ],
                  },
                  e.name
                )
              ),
            }),
          ],
        });
      }
      var nO = n(28294),
        nk = n(87751),
        nN = n(72541);
      function nS(e) {
        let { data: t } = e,
          {
            targetTime: n,
            sourceTime: r,
            humanReadableTargetTime: a,
            humanReadableSourceTime: s,
            humanReadableTimeDifference: i,
          } = (0, er.useMemo)(() => {
            var e;
            let n = (0, nk.Z)(t.target_time, t.target_location.timezone),
              r =
                t.source_time &&
                null !== (e = t.source_location) &&
                void 0 !== e &&
                e.timezone
                  ? (0, nk.Z)(t.source_time, t.source_location.timezone)
                  : null,
              a = (0, nN.Z)(n, "h:mmaaa", {
                timeZone: t.target_location.timezone,
              }),
              s =
                r && t.source_location
                  ? (0, nN.Z)(r, "h:mmaaa", {
                      timeZone: t.source_location.timezone,
                    })
                  : null,
              i = r ? (0, nO.Z)(n, r) : 0,
              l = r
                ? ""
                    .concat(i > 0 ? "+" : "–", " ")
                    .concat(Math.abs(i), " hours")
                : null;
            return {
              targetTime: n,
              sourceTime: r,
              humanReadableTargetTime: a,
              humanReadableSourceTime: s,
              humanReadableTimeDifference: l,
            };
          }, [
            t.source_location,
            t.source_time,
            t.target_location.timezone,
            t.target_time,
          ]),
          l = r ? (0, tl.F)(t.source_location, r) : null,
          o = (0, tl.F)(t.target_location, n);
        return s
          ? (0, eA.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, eA.jsx)(nE, {
                  humanReadableTime: s,
                  humanReadableLocation: l,
                  compact: !0,
                }),
                (0, eA.jsxs)("div", {
                  className:
                    "relative flex-grow text-center text-token-text-tertiary",
                  children: [
                    (0, eA.jsx)("div", {
                      className:
                        "absolute left-0 top-1/2 z-0 h-[1px] w-full border-t border-token-border-medium before:absolute before:right-0 before:block before:h-[5px] before:w-[5px] before:translate-y-[-3px] before:rounded-full before:bg-token-text-tertiary after:block after:h-[5px] after:w-[5px] after:translate-y-[-3px] after:rounded-full after:bg-token-text-tertiary",
                    }),
                    (0, eA.jsx)("span", {
                      className:
                        "absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-token-border-medium bg-token-main-surface-primary px-3 py-0.5 text-xs",
                      children: i,
                    }),
                  ],
                }),
                (0, eA.jsx)(nE, {
                  className: "text-right",
                  humanReadableTime: a,
                  humanReadableLocation: o,
                  compact: !0,
                }),
              ],
            })
          : (0, eA.jsx)(nE, { humanReadableTime: a, humanReadableLocation: o });
      }
      function nE(e) {
        let {
          humanReadableTime: t,
          humanReadableLocation: n,
          className: r,
          compact: a,
        } = e;
        return (0, eA.jsxs)("div", {
          className: (0, en.default)(a && "w-28", r),
          children: [
            (0, eA.jsx)("div", {
              className: (0, en.default)(
                "font-medium",
                a ? "text-base" : "text-lg"
              ),
              children: t,
            }),
            n &&
              (0, eA.jsx)("div", {
                className: (0, en.default)(
                  "text-token-text-tertiary",
                  a ? "text-sm" : "text-base"
                ),
                children: n,
              }),
          ],
        });
      }
      var nP = n(65998),
        n_ = n(95430),
        nC = n(25771);
      function nD(e) {
        let t = new Date(e);
        return (0, ni.Z)(t, "EEE, MMM d h:mm a");
      }
      function nM(e) {
        let t = new Date(e);
        return (0, ni.Z)(t, "MMM dd, yyyy");
      }
      function nR(e) {
        let t = new Date(e);
        return (0, ni.Z)(t, "MMM yyyy");
      }
      function nL(e) {
        let t = new Date(e);
        return (0, ni.Z)(t, "MMM dd");
      }
      nP.kL.register(
        nP.qi,
        nP.uw,
        nP.f$,
        nP.ZL,
        nP.Dx,
        nP.u,
        nP.ST,
        nP.od,
        nP.jn,
        n_.ZP
      );
      let nT = {
        "1d": {
          label: "1D",
          formatTimestampLabel: function (e) {
            let t = new Date(e);
            return (0, ni.Z)(t, "h:mm a");
          },
          formatTimestampTooltip: nD,
          maxTicksLimit: 6,
          lineTension: 0,
        },
        "5d": {
          label: "5D",
          formatTimestampLabel: nL,
          formatTimestampTooltip: nD,
          maxTicksLimit: 6,
          lineTension: 0,
        },
        "1m": {
          label: "1M",
          formatTimestampLabel: nL,
          formatTimestampTooltip: function (e) {
            let t = new Date(e);
            return (0, ni.Z)(t, "EEE, MMM dd");
          },
          maxTicksLimit: 6,
          lineTension: 0.1,
        },
        "6m": {
          label: "6M",
          formatTimestampLabel: nR,
          formatTimestampTooltip: nM,
          maxTicksLimit: 5,
          lineTension: 0.1,
        },
        ytd: {
          label: "YTD",
          formatTimestampLabel: nR,
          formatTimestampTooltip: nM,
          maxTicksLimit: 5,
          lineTension: 0.1,
        },
        "1y": {
          label: "1Y",
          formatTimestampLabel: nR,
          formatTimestampTooltip: nM,
          maxTicksLimit: 5,
          lineTension: 0.2,
        },
        "5y": {
          label: "5Y",
          formatTimestampLabel: function (e) {
            let t = new Date(e);
            return (0, ni.Z)(t, "yyyy");
          },
          formatTimestampTooltip: nM,
          maxTicksLimit: 5,
          lineTension: 0.2,
        },
      };
      function nU(e) {
        let { isUp: t, histories: n, onSelectHistoryInterval: r } = e,
          { 0: a, 1: s } = (0, er.useState)(
            n.quotes["1d"].length > 0 ? "1d" : "5d"
          ),
          i = n.quotes[a],
          l = Object.keys(n.quotes),
          o = nT[a],
          { formatTimestampTooltip: c, maxTicksLimit: u } = o,
          d = (0, er.useMemo)(() => {
            let { formatTimestampLabel: e, lineTension: n } = o;
            return {
              labels: i.map((t) => e(t.timestamp)),
              datasets: [
                {
                  data: i.map((e) => e.close),
                  borderColor: t ? "#10A37F" : "#FF0000",
                  borderWidth: 2,
                  pointRadius: 0,
                  lineTension: null != n ? n : 0.4,
                },
              ],
            };
          }, [o, i, t]);
        return (0, eA.jsxs)("div", {
          className: "flex h-[280px] flex-col gap-3 pb-10",
          children: [
            (0, eA.jsx)("div", {
              className:
                "flex items-center justify-between text-xs font-medium text-token-text-tertiary",
              children: l.map((e) =>
                (0, eA.jsx)(
                  "button",
                  {
                    onClick: () => {
                      s(e), null == r || r(e);
                    },
                    className: (0, en.default)(
                      "uppercase hover:text-token-text-secondary",
                      { "font-extrabold !text-token-text-primary": a === e }
                    ),
                    children: nT[e].label,
                  },
                  e
                )
              ),
            }),
            (0, eA.jsx)(nC.x1, {
              options: {
                responsive: !0,
                maintainAspectRatio: !1,
                interaction: { intersect: !1, mode: "index" },
                animation: { duration: 200 },
                scales: {
                  x: {
                    afterBuildTicks: (e) => {
                      if (e.ticks.length > u) {
                        let t = Math.ceil(e.ticks.length / (u - 1));
                        e.ticks = e.ticks.filter(
                          (n, r) =>
                            r > 0 && (r % t == 0 || r === e.ticks.length - 1)
                        );
                      }
                    },
                    grid: { display: !1 },
                    ticks: { align: "end" },
                  },
                  y: {
                    ticks: { maxTicksLimit: 7, stepSize: 1 },
                    border: { display: !1 },
                  },
                },
                plugins: {
                  tooltip: {
                    animation: !1,
                    callbacks: {
                      title: function (e) {
                        let t = e[0];
                        return t ? c(i[t.dataIndex].timestamp) : "";
                      },
                      label: (e) => e.formattedValue,
                    },
                  },
                  crosshair: {
                    line: { color: "#000", width: 0.5, dashPattern: [3, 1] },
                    zoom: { enabled: !1 },
                  },
                },
              },
              data: d,
            }),
          ],
        });
      }
      let nz = {
        "1d": "today",
        "5d": "past 5 days",
        "1m": "past month",
        "6m": "past 6 months",
        ytd: "year to date",
        "1y": "past year",
        "5y": "past 5 years",
      };
      function nI(e) {
        var t;
        let { data: n } = e,
          { 0: r, 1: a } = (0, er.useState)();
        if (!n.price || !n.asset) return null;
        let s =
            null === (t = n.histories) ||
            void 0 === t ||
            null === (t = t.quotes) ||
            void 0 === t ||
            null === (t = t[null != r ? r : ""]) ||
            void 0 === t
              ? void 0
              : t[0],
          i = s
            ? {
                changePercentage: ((n.price.price - s.close) / s.close) * 100,
                changeAmount: n.price.price - s.close,
                changeLabel: nz[null != r ? r : ""],
                isUp: n.price.price > s.close,
              }
            : {
                changePercentage: 100 * n.price.changePercent,
                changeAmount: n.price.change,
                changeLabel: "today",
                isUp: n.price.change > 0,
              };
        return (0, eA.jsxs)(eA.Fragment, {
          children: [
            (0, eA.jsx)(nB, { data: n, priceChange: i }),
            n.histories &&
              (0, eA.jsx)("div", {
                className: "mt-6",
                children: (0, eA.jsx)(nU, {
                  isUp: i.isUp,
                  histories: n.histories,
                  onSelectHistoryInterval: (e) => a(e),
                }),
              }),
          ],
        });
      }
      function nB(e) {
        let { data: t, priceChange: n } = e;
        if (!t.price || !t.asset) return null;
        let {
          isUp: r,
          changePercentage: a,
          changeLabel: s,
          changeAmount: i,
        } = n;
        return (0, eA.jsxs)("div", {
          className: "flex justify-between",
          children: [
            (0, eA.jsxs)("div", {
              children: [
                (0, eA.jsx)("div", {
                  className: "text-xl font-medium",
                  children: t.asset.ticker,
                }),
                (0, eA.jsx)("div", {
                  className: "text-token-text-tertiary",
                  children: t.asset.name,
                }),
              ],
            }),
            (0, eA.jsxs)("div", {
              children: [
                (0, eA.jsxs)("div", {
                  className: "text-right text-xl font-medium",
                  children: ["$", t.price.price.toFixed(2)],
                }),
                (0, eA.jsx)("div", {
                  className: "flex items-center gap-1",
                  children: (0, eA.jsxs)("span", {
                    className: (0, en.default)(
                      "flex items-center gap-1",
                      r ? "text-green-600" : "text-red-500"
                    ),
                    children: [
                      r ? (0, eA.jsx)(ed.iRh, {}) : (0, eA.jsx)(ed.tv1, {}),
                      "$",
                      i.toFixed(2),
                      " (",
                      Math.abs(a).toFixed(2),
                      "%) ",
                      s,
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var nZ = n(29924),
        nF = n(68498),
        nV = n(84692);
      let nq = {
          foggy: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/cloud-foggy.cce9a5f0.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEVMaXHx7+/X4Onk7fPs7vHf5OrR3+jI1d7p3t7W5e/w9vjY3+vP3unO3eXI1t/u9/vY4+zs7vD+/v7o9f5W9IPqAAAAEnRSTlMARymmNW/bqAX9vhT7Z5LPwH7S+gbIAAAACXBIWXMAACxLAAAsSwGlPZapAAAAO0lEQVR4nCWLSxLAIAjFngoI/kvvf9cONZNFNgF+NEyNoqls58RAbu983AlHhpgVRedhJrNDVw3yvQF8NBwBhP52cx8AAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          cloudy: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/cloudy.663b016c.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMaXH8/Pzn7fDs7u/j4+P19fXj4+P39/fk5+fV3uH///+xxPMrAAAACnRSTlMA+4BqEr8l2kxPaipc6QAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADBJREFUeJxFy7ERwCAAw0DZhiR4/4E50qDmK8FtJON3thN43koy+KiGTz0Flm3nzhsYzgC8rUV38QAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "heavy-snow": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/heavy-snow.f2709a7f.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEX////e3uGZnp52qeLj6+/4+vunp7fp6em9xs5MaXH09veSwPTa4eXh6emcoKDj8f/s7OyUxOnu7u5RkOxVk/fi7vWOs+4kug0OAAAAF3RSTlP+IjEjrPIKAQYA0fRGYEH+Rf5cokX6fecDTcUAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA9SURBVHicJca3AcAwDAMwWlEh7fT2/6kZgglQiVQJpb339yZ0BrZxTWgBPMf4A0SDZnf3RRBtNVNBzGSWPkvLAepx2SliAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "light-snow": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/light-snow.eb08e0be.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEXFy9ji6u7i5+np7O2qrq74+vve3uFMaXH///+NoLiXxez09vfj7/vo7vFVk/dRkOyLuviOs+7NXBiYAAAAEnRSTlMEp0ZdDvIiAP4o9NH8qkWi/X2AI/mKAAAACXBIWXMAACxLAAAsSwGlPZapAAAAPUlEQVR4nCXLQQ7AIAwDQQcS7AAt7f8/W0W9rOayIAiQlbbWewPsof2cxAhpz/lDigE2M7t6PZnpLLg7wA89NgGYdptNnQAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          sleet: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sleet.8fade61a.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEXZ2dn+/v6uyNPe6fH39/fd3+Hm6Or6+vppnN9mmtzc5Ofu7u600wyKAAAADHRSTlMB/gup0yJG8FBSYFzt9rSBAAAACXBIWXMAACxLAAAsSwGlPZapAAAANElEQVR4nCWLQRIAIQjDQkHQ9f//dWB7aQ4JgMQsI7L/llkIVpkN/VAL0t39a2mfs6eSun8WZACr86JPXwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          drizzle: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-drizzle.9b674b1d.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEVMaXHp6eb6+fj5690MpPL6+vr9/vng7fLX29//mQo1k+Tb3+IAiu8vj+/o5eX4iSf/mQ/09ffgUQD206em4vn3smny9/3////9xXClYpFaAAAAF3RSTlMAL/f8UOH9sSDvE0gwEFsngMEZruHmjgB2LmoAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA9SURBVHicRYtJDoAgFMUq0wdxnh73P6khMbGbblr4GZ6zbN1RqZWVHOW8vw+yk5J2YLnMrPZ4CuHb5hF4AUAGAb26FY2ZAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-drizzle.1a496fe5.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVMaXEOpPSjtrbr6esyken/xnv5nCL////u7u37/PsAiu/K09v4x3nr8PHk6+6n4/n2+//y7+z5vmv29vbx8fHP6vL32ab/w1vS25v///P979Xlo6R0AAAAGXRSTlMAUA6FEQ8o/nH7MB25rZvhkVPf+F26pWIJJNRGlwAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAD5JREFUeJwdi0cSgDAMxBRSbNMCoQ38/6GMo8PqsgIn9923+3GryTuXzClmx9cKKo7CEOu1rJOfxhB6BCkBP0FKAaR6tM9fAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          hazy: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-hazy.1212b33b.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXHugBzhWwDs///1v33qagDru4Dyum7f2M7l4+L/lAbrvoL1qlTqYwD/nAvWv7Ha6//zyY3e7v3g0cDum1Dztl3/okj9tz2HhjCLAAAAFnRSTlMAj1YO5DH9/jI7Spn6fnJ9av6WhvPtBTp/2wAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADdJREFUeJxjYEACrHxcIIpTWFRcnJuBgUOIhZ2dXZCTgUOAhZ2NjYeDgYGZX0RMjBGimJcJSS8AOAMBfzCOZQYAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-hazy.e42f94c5.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEXZ0cnd1cPmy5Xh0bPO3u/P2t/T2dzzl0LD4Pv4yHPmt3jgz7D/nSbdzrzOzsbP3/H8myXS4Or50Yz+x3L76FKQAAAAEnRSTlMBxvWgNl6hGyYr1dd2ikSCbq0qLqViAAAACXBIWXMAACxLAAAsSwGlPZapAAAAN0lEQVR4nGNgQABOTgjNx8TMwsrKwMDBKMTNzybIwsDBLMTEyMbLwcDAziUszAVWxi7Aw46kFwAneQEz/FbbXwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "mostly-cloudy": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-mostly-cloudy.a840397c.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEVMaXHu7ev+lwfURgDV3OH67eL4+frh6e38+/j8hh7lTAD/kAD22bTT29vh4eH2+f3y9vr1wY748uz////9pRz6yIS95W8zAAAAE3RSTlMATKMSN/zsh/kmCvrRHSO1ueDywr9d+QAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADhJREFUeJxjYEAGXJxgipGfR4QJRLMJc4hyczLwcQhzsLIKMjPwsgkLCwsLMDAwsLCzs7OzILQCAC9HAXOMIefaAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-mostly-cloudy.4513b8c0.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEVMaXH/xFHa4uf/rz79yGXIyL35r1rr7/H6+/rp7e/k6ur1+f/2yo7726D2xnTi6ev/////+u5gzpT1AAAAEHRSTlMAk2O7RgswcfqLYrmW6fmEa2Ed4QAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADZJREFUeJxNyzEWgCAMwNCILW0VpNz/sjxd5C+ZAjuRL3b3A0Uj05+zYunus8GVLwNKjDD91wUqGwFXywTtSwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "mostly-sunny": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-mostly-sunny.78621f10.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEVMaXH5nBrtjBzx7uvguYXrskT47d/VplzqoCzsnzv06NH07uP2uFzqzJ79xnPx3bz0fQTtj0H4s2L/+vT/lwJPWFwgAAAAE3RSTlMAslatZiz7CS41vsuwb/1Nq7z5UMCx3gAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADlJREFUeJwli0kSwCAMgHBNYqtd9P9vdVQuXABAhI2a6fJz3c4noOY2nIHoO/5egOS/3MOJYzzf3icxXQFiwQEEBwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-mostly-sunny.736077bc.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXH6tUj38+/7ulHww3ba7PHj6PL/yVHX0NDroUz29fX+7c/1yn39x2Hq7Oz5z4rdnlfqmTe9tKf7tEv++Ov///3/22z/y1DpObbjAAAAFHRSTlMAfdpIMxsyAREmn/xw6334cns66xhuD7QAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA8SURBVHicJYxJEoAgDMCCFGxxQVDg/z91Bi6ZXBIA9gURggJ2+dgScHYX7gi6fdl5m3KMVwCtT7EVzsEPMR0BgZo07vwAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          shower: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-shower.0b97732f.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEVMaXF/xOvi5eL5+fnj7fL8+/fg4uSZp8VBm9kxtPL5693e5ub/mQ/4iSf09fj/kgD9oBTgUQD206fy9/3m8PT3smn68Of////9xXApPI/3AAAAF3RSTlMAICfhtPk+BxJS/F2AJ8H55Rmujq/m/PJz1pwAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA/SURBVHicHcs5EsAgDMBAATYYcpBznP+/NAMq1C2Myny8r2MFcnL9+kZIrq29J1Hd3XdgEXkkD1FrDZOaWYEfRNYB6Q9nGIEAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-shower.facfcd4c.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVMaXHy8O/7+/T40I//xnv5nCL///86ndfu7u38/PzR2trj6/AwtfQ0r+3j6u40te+wsLD/w1tmsuX5vmrk7/MxtPD2+//l7vPl8PP////979XrmuW/AAAAGXRSTlMAWPyvDyj8EXH6HJ1eHYlTDWIK37dIka21pov5hQAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAD9JREFUeJwdikcSgDAMxDbVNh0SyvL/hzJGB+kiwMm/w5V2rxpjKhmBZvFtBcrKSgW2pd/POACYp3MVnw8R7wdBSAIQ2ljlHQAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          sunny: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-sunny.8f75dd58.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEXknjbppDztkir7jQr1egj7nBH/owD/jwAI3XxvAAAABnRSTlMCMFeutLBMu4FdAAAACXBIWXMAACxLAAAsSwGlPZapAAAAKklEQVR4nGNgQABGRkZGMM3EysoEYjEys7Exgxks7OwQBhMLC1gKrhgKAAu7AFJ7ETTdAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-sunny.f60bb6f9.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXH1v3D6ulvFgkP2uFXsmzr8t0v8xmrMfzP6rEH9yWTuvXP/xkn/1lq115VcAAAADHRSTlMAMoQabnfvVyjR6B8qesGIAAAACXBIWXMAACxLAAAsSwGlPZapAAAAK0lEQVR4nGNgQABGRgjNzcUOYbDwMkEZPGxM7CBZZk4eHjawMmZWVg4kvQASXQCSOldqFwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "rain-thunder": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/rain-thunder.8b5abb7a.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXNw9B+krL7/Pz39/fX19vm6ez6+vrj6/Lg4OPs0K4YrvLU7ff1bADTeyX29/f////Btcd9AAAAD3RSTlMBCfzTFUbwWyXYRa5SiOOynbklAAAACXBIWXMAACxLAAAsSwGlPZapAAAAOElEQVR4nB3LSRIAMAgCQcSYPcX/f5tSLsOlAcAMtXCP7OiSN2B2kfSWRxQnEOesNdLs/W4pK/4BJNQBG1L8cOMAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          rain: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/rain.6bc7337d.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXF3qdH7/PzZ7PODxeTd3+Hm6er39/fm6er5+foisPUhrfD49/cgr/D///9qKVE6AAAADnRSTlMACPmuFiJG1V3tUUXMR/A5NykAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA4SURBVHicHcu3EQAxDANBEHTSG/Rfroa65KIFADPcqrvma0sdQFIkv0BuSWIC5e6+xrz/E1eZjT8maQESAQOY8gAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          snow: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/snow.e2194b7c.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEVMaXGN1Psxp/hPs/lau/wuoucto/FexP9evvmAz/0+sfl3yfhPtPtmu/ZDtvtHt/tmvvljvfhg/tIuAAAAEnRSTlMAIJRn1QsnBlKQen6NbJ6elpekN1BtAAAACXBIWXMAACxLAAAsSwGlPZapAAAAOklEQVR4nD3LWxLAEBAF0cZwjUck+9+s4iP9e6rhT8E9CKjeu1dgvmbfBNIwG+nQau05lEuMJd9NEmwpuwE7RoxDNwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          thunder: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/thunder.f75568ad.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEVMaXH39fP+lBDs7O7TyLv49/f19/nZx7r8+/bt6uf4+frvzrH0sWXqfi3/3rb76NDe+P+/Tw/+///8wX6n34SZAAAAEnRSTlMA6v1LOrx3HP5B89z8o/79JxDTdaDoAAAACXBIWXMAACxLAAAsSwGlPZapAAAAPElEQVR4nEWLQRKAIAzEFmhpCwq6/v+vDlzIJZcEOIRqLJdGJgMKx6SroXr+6Kx4er6apwDsFhFb9bvnHzLNAYBRzT9nAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          tornado: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/tornado.6612217c.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXGo2fSv2eqRzu+o1e2b0/Kj1/PG5/ma2P+m2PK34fa44vWR0PGq2/MewmsRAAAADnRSTlMAhxJAIFt9TAqQqGpynBOM39IAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA0SURBVHicJYxLEgAgCIV4Wtr3/tdtGtnACsAotjKzga0dPdYAv9LswHCFfoBPtYpTxv7gAR7+AMKl7nQqAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          windy: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/windy.d9e0363e.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEW94POs2/Ki1/PB5/y/5fbD5fe54vay3PGx3fOq1/GRzu7K5PCn3fjA5viLAA2MAAAADnRSTlMBgGwcWHGGEpsnT2smuyrvXT0AAAAJcEhZcwAALEsAACxLAaU9lqkAAAA0SURBVHicLYs5EsAgEMPkvUIC/P+7TJh1IxUywEMv62LVMNLxlCJ24CbJPuAtjdm1qeX/HxboAJu7C/1QAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          sunrise: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sunrise.056c05b5.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXftz71qDg6pNlNndYypv09ouY1pvh0orb4nBM+pvBri6r/jQNyhZ/qnS3qmi3/mADlX7U+AAAAD3RSTlMBLQ4imVN9fLSgb56AWVnzZBNUAAAACXBIWXMAACxLAAAsSwGlPZapAAAAN0lEQVR4nEWKuREAIAzDbCcQfvbfloMGNVIh4EOSz6uUeYt9707Aoo3RwqDs7p4FKNWadG+ZCTge/wDyQVGlxAAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          sunset: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sunset.9f5aac2d.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXHcMCjqSxf0XgniKB7pPCr9kh3eKh//fgX/mBDyaxnYKBrdKBzfJx7/hwDgXfcQAAAADnRSTlMAjzTIqipBkfavU2trqNYYnJ0AAAAJcEhZcwAALEsAACxLAaU9lqkAAAA0SURBVHicRcpJDgAgCMDAKriAy/+fazAxzqWXwlfNajT3vXsGXETEoaSrwFTVNe7UWizPARyTAMEJAoIMAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
        },
        nH = {
          foggy: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/cloud-foggy.dd7950de.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXHf4eOruL+Ypa67usTm5ubf39+VoquPn6q0vsSaqLCtuMDq6ujFztW5xtCPn6uRnabg5ObH1N3X3+Oyv8n1+PqntL7KY4WZAAAAFXRSTlMAaLyIEUc5qP0r26LDz/rca377qWRo9xTkAAAACXBIWXMAACxLAAAsSwGlPZapAAAAO0lEQVR4nGNgQABWHjYQxcnNK8rIysjAwMkkJiIoKsrGwMTFwcUnJMzCwMLMwcHBL8DCwMDMDgKccM0ANnEBkRXS2wYAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          cloudy: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/cloudy.13ac82a6.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVMaXHc3NzPz8/e3t7u7u75+fnR0dHo6OjX19fe3t7x8fHk5OTm5ubo6Oj5+fnt7e0uc/DEAAAADXRSTlMA/XpcaQ77tv1Cb9MfIkBT6wAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADdJREFUeJxFyzkSwDAIxVB9wHhJcO5/28y4sZpXCW4toh373h14n5IqYH2ZqXLm0JDkMM3M/M4/IhUA6UOO2WUAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "heavy-snow": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/heavy-snow.77bb418a.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEVMaXHk4uHo6OhwpeHa29vv6eno6Oi6v8Omq6zT0tJTku3j5+zP3erE0NlVk/eOtfKEtPSMuOHs7Ove39+MvOHz8e6k8HZVAAAAE3RSTlMAVO0i9Rs9BzKgosT++UV2/OnNNeiaQQAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADxJREFUeJwdy1sWgCAIQMGrokAvK2r/W+3Q/A+AKr9xr/NQKPXdzqXRa8j+XI0uIRHSYbi7lzxmZpk0wQc9ngGuSrmKlgAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "light-snow": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/light-snow.4e32b952.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXHa29vm5ubj4uLS0tLv6emkrKzJ0tze3+CoqKhwpeHr6+tVk/eOtfKEtPTF0NmMuOHj5+xTku3P3eri4uKNvOHz8e6rhQOcAAAAFHRSTlMA8j1TnBspBPwOItpFdvz56cSi/oEGpbQAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA+SURBVHicHctJEsAgCADBQUFAs2//f2oquXeD4w7glLHPk0Mdz7kcHYuQ9d46JldEiEFRVa2fbq3l3zLT4QVAZwGodCO9+wAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          sleet: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sleet.2f675d2a.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVMaXF2napvpOvLz9Ta2trp6enq6urn5+ft7e3i4uL////r6+vb29vh4eHi4uHw8PB5K4TQAAAADnRSTlMACU6d/Bs98MxTCw3oxHQRcAcAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA5SURBVHicRYs5EsAwCMQEmMM57P//1kOabCMVWvgXVdGcuXfd4LnGWO+FPy3pEGZmsyNV1e8lIgIHKTYBDXUvtesAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          drizzle: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-drizzle.8254e660.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEVMaXH548XW0s//jVXX2dbLzcwTr//QzMjk5OEig9b/mQ/4iSfh0csAl//gWwDj1cz/lAD/oBH20Ky0y9TU09Pi5Of7p038y4yNxt/X2dr/wF3z6Nv/166B/Q6lAAAAGnRSTlMA/v4JNqFO+h0SgCdPLxm5+eX5suOF5azc01JpvPsAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA+SURBVHicHYtHEsAgEICw7ppmYnr5/zszyoETQMU1634uHeDv1zxzj25WyndMqIhYk4HhWkPwNR5jbBOkBPxIZwHXAmz+EgAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-drizzle.43491efc.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXEYt/+Qi4m2s7GinZqOiYr8qDjPuZCZmZkbg8+np6cFov//xl+IiIX8xXG4ubu7uLXlxItgm7Pzs1l6kpuyuMPkz66koqED/17FAAAAFnRSTlMATv34bIQoD/wSWi9jorn+TKHc3rGJE/oGPgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADxJREFUeJwdizcSACEMxES04XIA/v9TBm8hNVpYE+Pdnn25hqufWahDNfQvE9V7HREkvf+RrN6csxOUAkw9sgGXAUXxAAAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          hazy: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-hazy.2df474ab.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEW6ssn8nCX/1m2ksbuhrbHkyJPouXiUq8f/hBGdrb3MxLLPvqHxtX/QwKDAwL/Ds6Kerr67u7DSsab60oz+yHP7bsd7AAAAE3RSTlMBci6jXvXVJh02xqAm16iKgkQXSjmzBQAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADdJREFUeJxNi7cRACAMxJ5om5z2n5XjKECNGgl4aH3dXRRrAQozN2MEFKcLpRIw/Fo+nYiV4u/dKtMBQxhFTzIAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-hazy.9cb51a20.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXGj2v7qYwDnuX7GtqTqagDugBzGuq/vdgO2vr70qFOwwM/zt16vwtPnu4X/nAvrtnLttWnvnFDpsHH0vXL/okjvwYP9tz0ATiGzAAAAFHRSTlMADn6ZgjGPO1At+pbtavty5/vz4UwJX/4AAAAJcEhZcwAALEsAACxLAaU9lqkAAAA3SURBVHicY2BAAqz8HCCKnYVHXJyZgYGTW0BEUESMnYGTV1iET4yLnYGBkUVIVJQNopgJrBgKADyPAafnOGHHAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "mostly-cloudy": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-mostly-cloudy.f8a30a6d.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXH/37nY1NL4hR7jVQD/nQ3OysXMzc7g4uXR0dL/hxb+lgnZ0s3Y2Nj80Zfi4eLh4d3yzqzZ29z6sWva2tfu28vu4dL/wm7WbrWOAAAAFXRSTlMA/v4qDf3vex36IqOwNc6tPPjm3U1ZQW0wAAAACXBIWXMAACxLAAAsSwGlPZapAAAAOUlEQVR4nE3LNxKAQAzAQF20DVwk/f+nzNCAmq0E/+Ly0ltNK3DMy90poGZ5uD2i2Zs/N6CIiOi3Pi6qAV7Z72GJAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-mostly-cloudy.372053e6.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEVMaXGpqqr0qlX3wWmJiYmxsbD9ymmVlZWYmZvRxaP/xFKzuMD/skLHwLeQkJDWpWbryIe3s6w42Ym7AAAAEXRSTlMA+zD5fXhG/V0HlLC7/miR5vutVYAAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA2SURBVHicTcsxFoAgDMDQIC1tFdTe/7I8WPQvmQJ/re3o9Z4EoZmj9gMvZiUfcFsccBG541snJrsBJDZVFUcAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "mostly-sunny": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-mostly-sunny.8818b6bb.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEXkyV/h0r3pjB36jwrvoz7awJfgzr3QpFZMaXHsqDbMycbcr2/6s07/wlzx0qzhv5D6nSPxjTj/r1L/mAH24MY3KmZcAAAAE3RSTlMBvletNFL8BwAto2Cw/vZosrr6L00b5gAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAD1JREFUeJwly0kWgCAQA9EADZ2oTOL9z+pTVrWpD4LuBAHKTF9zuFIUwd7qGuZwpXU/gaDiLOXY85l/t/kLQjkB4np/vZYAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-mostly-sunny.94f2fdd6.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXH/uk34t2Otraz3qE791ob/y129ztnwsXalp7P4njRdof/9x2Clop3GvrPuzpeMk577skj3xXaop6X/22n/zE/FsZnr06/G5/DAAAAAE3RSTlMAfGyXLTFICx0pdBPqy9j8b+n3C8VrfgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADlJREFUeJxNy8kBgCAMAMEFAkkUBcWj/059yvwHfjljClgtPhIQr7B2B93fMxQB3Z52HwKox8Wm+wEuYQFeO6Nk0AAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          shower: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-shower.adb87269.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEVMaXHYzMP548XV1tfX2dbk5OAzuPwog8HHzc/R0dHVz8//mQ/j1cz/jVXgWwD4iSfm5ub8y4z20Kz/lADi5Oetzt7Mx8b7p03/oBH/wF3/167z6NvZyNklAAAAGXRSTlMA+v7bNiFLC6b7UIC5CRknFaz5+YXJ/uXlacy84gAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAD1JREFUeJwdi8cRwDAMgHCVlOb0uv+eOZsHL4DK2Jz25e6BGD7/bIU5mFvfayKZnc4PQKeHaqyx5NwmEAF+Rh4BwPnsOpEAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-shower.87b75170.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXH8qDyrq6uClJumop5NwPuHh4eenp3bv4uzr7CPjYu6ubgeeMOPiog8uPX2slP/xWfsxIKyucixsbD/xF/nyJrj0regh7WSAAAAFXRSTlMAKEbTcBy2/hAr/f0RlW3cuZVr7mXUpzeuAAAACXBIWXMAACxLAAAsSwGlPZapAAAAPUlEQVR4nB2LNxLAMAzD6EpZSnNJ/v/UnIwBWEjAke02+vLGad8TBJGkvXdApiqZATlTqrX5qFxln4DD/QM3LwFknr/kaAAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          sunny: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-sunny.8f75dd58.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEXknjbppDztkir7jQr1egj7nBH/owD/jwAI3XxvAAAABnRSTlMCMFeutLBMu4FdAAAACXBIWXMAACxLAAAsSwGlPZapAAAAKklEQVR4nGNgQABGRkZGMM3EysoEYjEys7Exgxks7OwQBhMLC1gKrhgKAAu7AFJ7ETTdAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-sunny.622ae977.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXH3sF7zr1r9t0v82If2oj3/vV38vVfnlE39rkL/ymX/vWf80nD/xkn/1lojtAibAAAADXRSTlMAMB/uMXGCaxXO51ZWNZhLrwAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAC5JREFUeJxjYEAAFhYIzcTFA2Gw87FBGbzMbNyMDAwMHJy8vMwgBgMHKysTkl4AFcAAqJORPzcAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "rain-thunder": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/rain-thunder.42051352.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEXSydTh5+zgvpjD19zp6eno5+ft7e2hrsnZ2dnp6en7cwDcgSYssezi4uIAwP/c29vh4eLx8fDFpJwQAAAAEHRSTlMBUNGiPvDMC/wbUoZFxEHoL8gBPgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADlJREFUeJxFizkSwCAMxATYXpwL+P9nM6SJGqkR/FiEbRdfKwTps/d5ixw7PMFaq7UAup7z+C5JwAsrVgFMRu2jwQAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          rain: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/rain.32e741db.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEXR2uPj4eElt/vs7Ozp6enp6enn5+eUtdTG09fa2dkptPYmt//t7e3h4eHb29vi4uHw8PDOSTekAAAAD3RSTlMBUkTLGz7wCqL8H0/OxOjxNS5OAAAACXBIWXMAACxLAAAsSwGlPZapAAAAOElEQVR4nEWLORLAIAzEBNheQw74/2szpEGN1AgO3ppvl1jrFljM3ucj7N0RBp6ZWQDVeo3/kgR8KjMBQHX4xtYAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          snow: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/snow.daca4237.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEWKvv9uqfx/v/5ln/xqpvxoqftio/10sPtrr/t8tv50rv10qv9Cc1mwAAAADHRSTlMBghzIb0mRSVtbkZG9AjS5AAAACXBIWXMAACxLAAAsSwGlPZapAAAAKUlEQVR4nGNgQAAmRkYmEM3OzcLCxsrAwMDJyMzMyIHMYOeCSsEVQwEAE24AiBHVbDAAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          thunder: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/thunder.72b79dd9.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXHo5uLk5uj7kg7a1tXq6enmpmDi1M/r6ujMzc7V1dbu7u7e//+/Tw/avKHtfyvs9fzdy7bV2t/o7vbs7Ozy8/TqyqTx4NGqzpCQAAAAFXRSTlMAQv79MLT8Fjn0/m0fENOeb/z85dzw+NVjAAAACXBIWXMAACxLAAAsSwGlPZapAAAAP0lEQVR4nEWLMRaAIAzFPtDSFlFArd7/pj5cyJIlARbKrNPhcr8FCPEZZ2RBf1MuxTfUI2UzU0AaEcms93/+ADgrAZ45qbIPAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          tornado: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/tornado.d7942f85.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXGfzuGg0euJyOeZzemh0uql0umbzuq72+99ueGv1taQyuiZ0OvV4+oMlWRNAAAADnRSTlMAD4ZAjm2kfUwdA1pdJfUXBaMAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA3SURBVHicJYy3DcBADMSorA/ef11D9jUsSBxs4V9odz8gGXUqBSxV/QBiWnq/ytwXsLEYjpyDFyBvAMyVE7UXAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          windy: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/windy.f087e077.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEWv2eyayuGUyeWgzeO12+2x1ue21uWz2OqkzeOizuOWyuSHxOGh1vGv1ukZT1qGAAAADnRSTlMBhWx+HFhtfxKbJ08mu5/+1zIAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA0SURBVHicLYu5EcAwDMOgP4rt/df1JSc2QAECPMyyfuxqpRxPs4gTuJqJLuAV6ZxaZeT7XxoXAKuBvPgJAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          sunrise: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sunrise.056c05b5.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXftz71qDg6pNlNndYypv09ouY1pvh0orb4nBM+pvBri6r/jQNyhZ/qnS3qmi3/mADlX7U+AAAAD3RSTlMBLQ4imVN9fLSgb56AWVnzZBNUAAAACXBIWXMAACxLAAAsSwGlPZapAAAAN0lEQVR4nEWKuREAIAzDbCcQfvbfloMGNVIh4EOSz6uUeYt9707Aoo3RwqDs7p4FKNWadG+ZCTge/wDyQVGlxAAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          sunset: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sunset.9f5aac2d.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXHcMCjqSxf0XgniKB7pPCr9kh3eKh//fgX/mBDyaxnYKBrdKBzfJx7/hwDgXfcQAAAADnRSTlMAjzTIqipBkfavU2trqNYYnJ0AAAAJcEhZcwAALEsAACxLAaU9lqkAAAA0SURBVHicRcpJDgAgCMDAKriAy/+fazAxzqWXwlfNajT3vXsGXETEoaSrwFTVNe7UWizPARyTAMEJAoIMAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
        };
      function nQ(e) {
        let { weatherCode: t, isDarkMode: n, isNight: r } = e,
          a = (n ? nH : nq)[
            (function (e) {
              if (e >= 200 && e < 300)
                return 211 === e || 212 === e || 221 === e
                  ? "thunder"
                  : "rain-thunder";
              if (e >= 300 && e < 500)
                return e >= 300 && e <= 311 ? "drizzle" : "shower";
              if (e >= 500 && e < 600)
                return e >= 500 && e <= 504
                  ? "rain"
                  : 511 === e
                    ? "heavy-snow"
                    : "shower";
              if (e >= 600 && e < 700)
                return 611 === e || 612 === e || 613 === e
                  ? "sleet"
                  : 600 === e || 615 === e || 620 === e
                    ? "light-snow"
                    : 602 === e || 622 === e
                      ? "heavy-snow"
                      : "snow";
              if (e >= 700 && e < 800)
                return 701 === e || 741 === e
                  ? "hazy"
                  : 771 === e
                    ? "windy"
                    : 781 === e
                      ? "tornado"
                      : "foggy";
              if (e >= 800 && e < 900) {
                if (800 === e) return "sunny";
                if (801 === e) return "mostly-sunny";
                if (802 === e) return "mostly-cloudy";
              }
              return "cloudy";
            })(t)
          ];
        return a.night && r ? a.night : a.default;
      }
      function nW(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function nG(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? nW(Object(n), !0).forEach(function (t) {
                (0, eQ.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : nW(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function nX(e, t) {
        return "fahrenheit" === e
          ? Math.round((9 * t) / 5 + 32)
          : Math.round(((t - 32) * 5) / 9);
      }
      function nK(e) {
        let { weatherResults: t } = e,
          n = (0, et.Gv)(),
          { daily: r, hourly: a } = t,
          s = r[0],
          i =
            1 ===
            r.map((e) => new Date(1e3 * (e.timestamp + t.location.timezone)))
              .length,
          l =
            i && null !== s.temperature.min && null !== s.temperature.max
              ? s
              : null;
        return (0, eA.jsxs)(eA.Fragment, {
          children: [
            (0, eA.jsxs)("div", {
              className: "flex items-center gap-4",
              children: [
                (0, eA.jsxs)("div", {
                  className: "flex-grow",
                  children: [
                    (0, eA.jsx)("div", {
                      className: "font-medium",
                      children: (0, tl.F)(t.location),
                    }),
                    (0, eA.jsx)("div", {
                      className: "text-sm text-token-text-tertiary",
                      children: "".concat(
                        (function (e) {
                          let t = e.daily.map(
                            (t) =>
                              new Date(
                                1e3 * (t.timestamp + e.location.timezone)
                              )
                          );
                          return 1 === t.length || e.hourly.length > 0
                            ? n$(t[0], { alwaysShowDate: !0 })
                            : 7 === t.length
                              ? (0, nc.Z)(t[0])
                                ? "This week"
                                : "Week of ".concat((0, ni.Z)(t[0], "MMM do"))
                              : ""
                                  .concat(n$(t[0]), " - ")
                                  .concat(n$(t[t.length - 1]));
                        })(t)
                      ),
                    }),
                  ],
                }),
                l &&
                  (0, eA.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, eA.jsxs)("div", {
                        className:
                          "grid grid-cols-2 grid-rows-2 gap-x-1 text-left text-sm",
                        children: [
                          (0, eA.jsx)("span", { children: "High" }),
                          (0, eA.jsx)("span", {
                            children: "".concat(
                              nX("fahrenheit", l.temperature.max),
                              "\xb0F"
                            ),
                          }),
                          (0, eA.jsx)("span", { children: "Low" }),
                          (0, eA.jsx)("span", {
                            children: "".concat(
                              nX("fahrenheit", l.temperature.min),
                              "\xb0F"
                            ),
                          }),
                        ],
                      }),
                      (0, eA.jsx)("div", {
                        children: (0, eA.jsx)(eh(), {
                          alt: l.description.description,
                          src: nQ({
                            weatherCode: l.description.id,
                            isDarkMode: n,
                            isNight: l.night,
                          }).src,
                          width: 44,
                          height: 44,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            a.length > 0 &&
              i &&
              (0, eA.jsx)(t7, {
                className:
                  "no-scrollbar -mx-snc-results-content-padding mt-4 flex select-none gap-2 px-snc-results-content-padding",
                children: a.map((e) =>
                  (0, eA.jsx)(
                    nY,
                    { weatherData: e, timezone: t.location.timezone },
                    e.timestamp
                  )
                ),
              }),
            r.length > 1 &&
              (0, eA.jsx)(t7, {
                className:
                  "no-scrollbar -mx-snc-results-content-padding mt-4 flex select-none gap-2 px-snc-results-content-padding",
                children: r.map((e) =>
                  (0, eA.jsx)(
                    nJ,
                    { weatherData: e, timezone: t.location.timezone },
                    e.timestamp
                  )
                ),
              }),
          ],
        });
      }
      function nJ(e) {
        let { weatherData: t, timezone: n } = e,
          r = (0, et.Gv)(),
          a = t.description,
          s = new Date(1e3 * (t.timestamp + n));
        return null === t.temperature.min || null === t.temperature.max
          ? null
          : (0, eA.jsxs)("div", {
              className:
                "flex min-w-[98px] flex-col items-center rounded-lg border border-token-border-light bg-token-main-surface-primary py-4",
              children: [
                (0, eA.jsx)(eh(), {
                  draggable: !1,
                  alt: a.description,
                  src: nQ({
                    weatherCode: a.id,
                    isDarkMode: r,
                    isNight: t.night,
                  }).src,
                  width: 44,
                  height: 44,
                }),
                (0, eA.jsxs)("div", {
                  children: [
                    (0, eA.jsx)("div", {
                      className: "mt-3 text-center text-sm font-medium",
                      children: n$(s),
                    }),
                    (0, eA.jsxs)("div", {
                      className:
                        "flex space-x-1 text-xs text-token-text-tertiary",
                      children: [
                        (0, eA.jsx)("span", {
                          children: " ".concat(
                            nX("fahrenheit", t.temperature.min),
                            "\xb0F"
                          ),
                        }),
                        (0, eA.jsx)("span", { children: "/" }),
                        (0, eA.jsx)("span", {
                          children: " ".concat(
                            nX("fahrenheit", t.temperature.max),
                            "\xb0F"
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
      }
      function nY(e) {
        let { weatherData: t, timezone: n } = e,
          r = (0, et.Gv)(),
          a = (0, nF.vU)({
            sunrise: { id: "weatherWidget.sunrise", defaultMessage: "Sunrise" },
            sunset: { id: "weatherWidget.sunset", defaultMessage: "Sunset" },
          });
        if (t.timestamp < Date.now() / 1e3 - 3600) return null;
        if ("type" in t)
          return ["sunrise", "sunset"].includes(t.type)
            ? (0, eA.jsxs)("div", {
                className:
                  "flex min-w-[98px] flex-col items-center rounded-lg border border-token-border-light bg-token-main-surface-primary py-3",
                children: [
                  (0, eA.jsx)(eh(), {
                    draggable: !1,
                    alt: t.type,
                    src: (function (e) {
                      let { sunrise: t, isDarkMode: n } = e,
                        r = n ? nH : nq;
                      return t ? r.sunrise.default : r.sunset.default;
                    })({ sunrise: "sunrise" === t.type, isDarkMode: r }).src,
                    width: 44,
                    height: 44,
                  }),
                  (0, eA.jsx)("div", {
                    className: "mt-3 text-sm font-medium",
                    children:
                      "sunrise" === t.type
                        ? (0, eA.jsx)(nV.Z, nG({}, a.sunrise))
                        : (0, eA.jsx)(nV.Z, nG({}, a.sunset)),
                  }),
                  (0, eA.jsx)("div", {
                    className: "text-xs text-token-text-tertiary",
                    children: n0(t.timestamp, "h:mma", n),
                  }),
                ],
              })
            : null;
        let s = t.description;
        return null === t.temperature.current
          ? null
          : (0, eA.jsxs)("div", {
              className:
                "flex min-w-[98px] flex-col items-center rounded-lg border border-token-border-light bg-token-main-surface-primary py-3",
              children: [
                (0, eA.jsx)(eh(), {
                  draggable: !1,
                  alt: s.description,
                  src: nQ({
                    weatherCode: s.id,
                    isDarkMode: r,
                    isNight: t.night,
                  }).src,
                  width: 44,
                  height: 44,
                }),
                (0, eA.jsx)("div", {
                  className: "mt-3 text-sm font-medium",
                  children: "".concat(
                    nX("fahrenheit", t.temperature.current),
                    "\xb0F"
                  ),
                }),
                (0, eA.jsx)("div", {
                  className: "text-xs text-token-text-tertiary",
                  children: n0(t.timestamp, "ha", n),
                }),
              ],
            });
      }
      function n$(e) {
        let { alwaysShowDate: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ((0, nc.Z)(e)) {
          let n = "Today";
          return t ? "".concat(n, ", ").concat((0, ni.Z)(e, "MMM do")) : n;
        }
        if ((0, nZ.Z)(e)) {
          let n = "Tomorrow";
          return t ? "".concat(n, ", ").concat((0, ni.Z)(e, "MMM do")) : n;
        }
        return (0, ni.Z)(e, "EE");
      }
      function n0(e, t, n) {
        let r = new Date(
          1e3 * e + (n - -(60 * new Date().getTimezoneOffset())) * 1e3
        );
        return (0, ni.Z)(r, t);
      }
      function n1(e) {
        let { widget: t } = e;
        switch (null == t ? void 0 : t.type) {
          case "finance":
            return (0, eA.jsx)(nI, { data: t.data });
          case "sports-standings":
            return (0, eA.jsx)(nv, { data: t.data });
          case "sports-schedule":
            return (0, eA.jsx)(np, { data: t.data });
          case "time-difference":
            return (0, eA.jsx)(nS, { data: t.data });
          case "calculator":
            return (0, eA.jsx)(ns, { data: t.data });
          case "news":
            return (0, eA.jsx)(nl, { data: t.data });
          case "weather":
            return (0, eA.jsx)(nK, { weatherResults: t.data });
          default:
            return null;
        }
      }
      function n2(e) {
        let { tldr: t } = e;
        return (0, eA.jsx)("a", {
          href: t.url,
          target: "_blank",
          className: "group/tldr",
          children: (0, eA.jsx)("div", {
            className:
              "flex max-w-full shrink items-start justify-between gap-16 px-snc-results-content-padding",
            children: (0, eA.jsxs)("div", {
              className: "flex shrink flex-col overflow-hidden",
              children: [
                (0, eA.jsx)("div", {
                  className:
                    "shrink font-medium leading-none md:leading-normal",
                  children: t.display_title,
                }),
                (0, eA.jsx)("div", {
                  className:
                    "truncate text-token-link [overflow-wrap:anywhere] group-hover/tldr:underline",
                  children: t.url,
                }),
              ],
            }),
          }),
        });
      }
      function n5(e) {
        return "fatal_system_error" === e.execution_status;
      }
      function n6(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function n4(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? n6(Object(n), !0).forEach(function (t) {
                (0, eQ.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : n6(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let n3 = (0, er.forwardRef)(function (e, t) {
        let {
          turn: n,
          isHighlighted: r,
          onRetryQuery: a,
          onInlineSuggestionClicked: s,
        } = e;
        if (null === n.index) throw Error();
        let i = n.index > 0;
        return (0, eA.jsxs)(
          eP.E.div,
          n4(
            n4(
              { ref: t, className: "flex flex-col gap-snc-1" },
              i
                ? {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.33, ease: "easeInOut" },
                  }
                : {}
            ),
            {},
            {
              children: [
                i && (0, eA.jsx)(n9, { text: n.user_query }),
                n5(n)
                  ? (0, eA.jsx)(n8, {
                      text: "Something went wrong. Please try again.",
                      canRetry: !0,
                      onRetry: () => a(n.user_query),
                    })
                  : (0, eA.jsx)(n7, {
                      turn: n,
                      isHighlighted: r,
                      onInlineSuggestionClicked: s,
                    }),
              ],
            }
          )
        );
      });
      function n9(e) {
        let { text: t } = e;
        return (0, eA.jsx)("div", {
          className:
            "text-bubble inline-flex justify-end px-snc-results-content-padding",
          children: (0, eA.jsx)("div", {
            className:
              "max-w-[calc(100%-5rem)] rounded-3xl rounded-br-lg bg-token-main-surface-tertiary px-snc-1 py-2.5",
            children: (0, eA.jsx)(rt, { text: t }),
          }),
        });
      }
      function n8(e) {
        let { text: t, onRetry: n, canRetry: r } = e;
        return (0, eA.jsx)("div", {
          children: (0, eA.jsx)(t5.Z, {
            type: "danger",
            className:
              "my-0 border border-token-border-light bg-transparent text-token-text-secondary",
            iconClassName: "text-red-500",
            children: (0, eA.jsxs)("div", {
              className:
                "flex w-full items-center justify-between text-red-500",
              children: [
                t,
                r &&
                  (0, eA.jsx)("button", {
                    onClick: () => n(),
                    className: "red-500 font-medium text-token-text-primary",
                    children: "Retry",
                  }),
              ],
            }),
          }),
        });
      }
      function n7(e) {
        var t, n;
        let { turn: r, isHighlighted: a, onInlineSuggestionClicked: s } = e;
        if (null === r.index) throw Error();
        let i = (0, er.useRef)(null),
          l = (0, ti.nn)(ti.LW.threadId),
          o =
            null !==
              (t =
                null === (n = r.model_response) || void 0 === n
                  ? void 0
                  : n.text) && void 0 !== t
              ? t
              : "",
          {
            processedText: c,
            displayedCitations: u,
            imageCitations: d,
            tldr: m,
          } = (function (e, t) {
            var n, r;
            let a;
            let s = "",
              i = 0,
              l = [],
              o = (
                null !==
                  (n =
                    null === (r = t.model_response) || void 0 === r
                      ? void 0
                      : r.citations) && void 0 !== n
                  ? n
                  : []
              )
                .toSorted(
                  (e, t) => e.start_idx - t.start_idx || e.end_idx - t.end_idx
                )
                .map((t, n) => {
                  let r = { type: t4.Zn.Standard };
                  return (
                    "webpage" === t.type
                      ? (r.metadata = {
                          title: t.title,
                          url: t.url,
                          type: "webpage",
                        })
                      : "image" === t.type
                        ? l.push(t)
                        : "tldr" === t.type && (a = t),
                    t.start_idx > i &&
                      ((s += e.slice(i, t.start_idx)), (i = t.end_idx)),
                    "" != s && (s += "&#8203;"),
                    (s += "``【oaicite:".concat(n, "】``&#8203;")),
                    t.end_idx > i && (i = t.end_idx),
                    r
                  );
                }),
              c = e.indexOf("【", Math.max(e.lastIndexOf("】"), i));
            return {
              processedText: (s += e.slice(i, -1 == c ? void 0 : c)),
              displayedCitations: o,
              imageCitations: l,
              tldr: a,
            };
          })(o, r),
          p = (0, tl.K)(r),
          h =
            "in_progress" === r.execution_status || null === r.execution_status,
          g = (0, eS.u)(
            u.reduce((e, t) => {
              var n, r;
              return t.type === t4.Zn.Standard &&
                (null === (n = t.metadata) || void 0 === n
                  ? void 0
                  : n.type) !== "file" &&
                (null === (r = t.metadata) || void 0 === r ? void 0 : r.url) !=
                  null
                ? [...e, t.metadata.url]
                : e;
            }, [])
          );
        return (
          (0, er.useEffect)(() => {
            a &&
              i.current &&
              i.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }, [a]),
          (0, eA.jsx)(eA.Fragment, {
            children: (0, eA.jsxs)("div", {
              ref: i,
              className: (0, en.default)(
                "group flex flex-col gap-snc-results-padding",
                {
                  "-mx-2 rounded-md bg-yellow-100 px-2 py-4 dark:bg-yellow-900":
                    a,
                }
              ),
              children: [
                null != p &&
                  (0, eA.jsx)(re, {
                    children: (0, eA.jsx)("div", {
                      className: "px-snc-results-content-padding",
                      children: (0, eA.jsx)(n1, { widget: p }),
                    }),
                  }),
                null != m &&
                  0 === r.index &&
                  null == p &&
                  (0, eA.jsx)(re, { children: (0, eA.jsx)(n2, { tldr: m }) }),
                (0, eA.jsxs)("div", {
                  children: [
                    (0, eA.jsx)(ne, {
                      images: d,
                      children: (0, eA.jsx)(t4.h7.Provider, {
                        value: {
                          clientThreadId: t2.Zq,
                          displayType: t4.QU.expandAll,
                          displayedCitations: u,
                          isActivelyStreaming: h,
                          message: {
                            id: "",
                            author: { role: t2.uU.Assistant, name: "Search" },
                            content: { content_type: t2.PX.Text, parts: [o] },
                          },
                          attributions: g,
                          onCitationClicked: (e) => {
                            if (null === r.index) throw Error();
                            l &&
                              "webpage" === e.type &&
                              ts.Y.logEvent(ts.M.searchCitationClicked, {
                                thread_id: l,
                                url: e.url,
                                title: e.title,
                                pub_date: e.pub_date,
                                turn_index: r.index,
                              });
                          },
                          onCitationHovered: (e) => {
                            if (null === r.index) throw Error();
                            l &&
                              "webpage" === e.type &&
                              ts.Y.logEvent(ts.M.searchCitationHovered, {
                                thread_id: l,
                                url: e.url,
                                title: e.title,
                                pub_date: e.pub_date,
                                turn_index: r.index,
                              });
                          },
                        },
                        children: (0, eA.jsx)("div", {
                          className: "px-snc-results-content-padding",
                          children: (0, eA.jsx)(rt, {
                            text: c,
                            onInlineSuggestionClicked: s,
                            isActivelyStreaming: h,
                          }),
                        }),
                      }),
                    }),
                    !h &&
                      (0, eA.jsx)("div", {
                        className:
                          "hidden px-snc-results-content-padding md:block",
                        children: (0, eA.jsx)(th, { turn: r }),
                      }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      let re = ea.Z.div(
        K ||
          (K = (0, $.Z)([
            "md:border-b-[0.5px] border-token-border-medium pb-snc-results-padding",
          ]))
      );
      function rt(e) {
        let {
          text: t,
          onInlineSuggestionClicked: n,
          isActivelyStreaming: r = !1,
        } = e;
        return (0, eA.jsx)(rn, {
          className: (0, en.default)(
            "relative text-token-text-primary",
            "" === t && r && "result-thinking",
            r && "result-streaming"
          ),
          onInlineSuggestionClicked: n,
          children: t,
        });
      }
      function rn(e) {
        let {
            size: t = "medium",
            children: n,
            className: r,
            onInlineSuggestionClicked: a,
          } = e,
          { resolvedTheme: s } = (0, ec.F)(),
          i = (0, er.useMemo)(
            () =>
              n4(
                n4({}, t6.ff),
                {},
                {
                  a: (e) => {
                    let { href: t, children: r } = e;
                    if (t && /^turn[0-9]+ifs[0-9]+$/.test(t) && null != a) {
                      if (1 !== r.length)
                        return (
                          t9.U.addError(
                            "Found an IFS with markup or other special content inside of its link text, ignoring the IFS",
                            { rawText: n }
                          ),
                          (0, eA.jsx)(eA.Fragment, { children: r })
                        );
                      let e = r[0];
                      if ("string" != typeof e) throw Error();
                      return (0, eA.jsx)("span", {
                        role: "button",
                        className:
                          "text-token-text-secondary underline-offset-2 hover:underline",
                        onClick: () => a(e),
                        children: r,
                      });
                    }
                    return (0, eA.jsx)("a", {
                      href: t ? (0, t6.H)(t) : void 0,
                      children: r,
                    });
                  },
                  ol: (e) => {
                    let { start: t = 1, children: n } = e;
                    return (0, eA.jsx)("ol", {
                      children: er.Children.map(n, (e, n) => {
                        if ((0, er.isValidElement)(e)) {
                          let r = e.props.children;
                          return (0, eA.jsxs)(
                            "li",
                            {
                              children: [
                                (0, eA.jsxs)("span", {
                                  className: "mr-2 text-token-text-secondary",
                                  children: [t + n, "."],
                                }),
                                r,
                              ],
                            },
                            n
                          );
                        }
                        return e;
                      }),
                    });
                  },
                }
              ),
            [n, a]
          );
        return (0, eA.jsx)(t3.S, {
          name: "formatted_text_error",
          fallback: () => (0, eA.jsx)(eA.Fragment, { children: n }),
          children: (0, eA.jsx)(t8.D, {
            rehypePlugins: t6.Yu,
            remarkPlugins: t6.Hf,
            linkTarget: "_new",
            className: (0, en.default)(
              r,
              "prose w-full break-words dark:prose-invert",
              "dark" === s ? "dark" : "light",
              "small" === t && "prose-xs"
            ),
            transformLinkUri: t6.H,
            components: i,
            children: n,
          }),
        });
      }
      function rr(e) {
        var t;
        let {
            lastFollowupTurnRef: n,
            onRetryQuery: r,
            highlightTurnIndex: a,
            onInlineSuggestionClicked: s,
          } = e,
          i = (0, ti.nn)(ti.LW.turns),
          l = (0, ti.nn)(ti.LW.firstTurn);
        return null != l && n5(l)
          ? (0, eA.jsx)(rs, { onRetryClick: r })
          : (0, eA.jsx)("div", {
              className: "flex w-full flex-col gap-2",
              children:
                null != l &&
                ((null === (t = l.model_response) || void 0 === t
                  ? void 0
                  : t.text) != null ||
                  null != (0, tl.K)(l))
                  ? i.map((e, t) =>
                      (0, eA.jsx)(
                        n3,
                        {
                          ref: t > 0 && t === i.length - 1 ? n : void 0,
                          turn: e,
                          isHighlighted: e.index === a,
                          onRetryQuery: r,
                          onInlineSuggestionClicked: s,
                        },
                        t
                      )
                    )
                  : (0, eA.jsx)(ra, {}),
            });
      }
      function ra() {
        return (0, eA.jsx)("div", {
          className: "px-snc-results-content-padding",
          children: (0, eA.jsx)(eD.H, { lines: 6, variance: 3 }),
        });
      }
      function rs(e) {
        let { onRetryClick: t } = e;
        return (0, eA.jsx)("div", {
          className: "flex h-full w-full items-center justify-center",
          children: (0, eA.jsxs)("button", {
            className:
              "flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-full hover:bg-token-main-surface-secondary",
            onClick: () => t(),
            children: [
              (0, eA.jsx)(el.muB, { className: "flex-shrink-0" }),
              "Retry",
            ],
          }),
        });
      }
      var ri = n(15118),
        rl = n(10987);
      function ro(e) {
        let {
            readyState: t,
            hasSubmittedInitialQuery: n,
            currentQuery: r,
            onUpdateCurrentQuery: a,
            onSubmit: s,
          } = e,
          i = (0, ti.nn)(ti.LW.firstTurn),
          l = null != i && n5(i),
          o = t !== ri.kQ.OPEN || !r || l;
        return (0, eA.jsx)(rl.Q, {
          value: r,
          expandDirection: "up",
          className:
            "md:snc-accent-border border border-token-border-heavy bg-token-main-surface-primary focus:border-token-text-primary md:border-0 md:bg-token-main-surface-tertiary",
          submitButtonIcon: (0, eA.jsx)(el.WmV, { className: "icon-lg-heavy" }),
          onSubmit: () => !o && s(r),
          shouldFocusOnKeyEvent: (e) => "u" === e.key && e.metaKey,
          disabled: l,
          placeholder: "Ask a follow-up...",
          autoFocus: !n,
          onChange: (e) => {
            a(e.target.value);
          },
        });
      }
      function rc(e) {
        let { children: t, scrollContainerRef: n, scrollBottomSpacing: r } = e;
        return (0, eA.jsx)("div", {
          ref: n,
          className:
            "hide-scrollbar relative px-0 pt-[calc(var(--snc-results-padding)+4rem)] md:h-full md:overflow-y-auto",
          style: { paddingBottom: r },
          children: t,
        });
      }
      function ru(e) {
        let {
            scrollContainerRef: t,
            lastFollowupTurnRef: n,
            scrollBottomSpacing: r,
            readyState: a,
            hasSubmittedInitialQuery: s,
            followupQuery: i,
            highlightTurnIndex: l,
            onSubmitFollowup: o,
            onUpdateFollowupQuery: c,
            onRetryQuery: u,
          } = e,
          d = (0, et.w$)();
        return (0, eA.jsxs)(eA.Fragment, {
          children: [
            (0, eA.jsx)(rc, {
              scrollContainerRef: d ? t : void 0,
              scrollBottomSpacing: d ? r : 0,
              children: (0, eA.jsx)(rr, {
                lastFollowupTurnRef: n,
                onRetryQuery: u,
                highlightTurnIndex: l,
                onInlineSuggestionClicked: o,
              }),
            }),
            (0, eA.jsxs)("div", {
              className:
                "bottom-0 left-0 right-0 flex flex-col justify-end px-snc-results-padding pb-snc-results-padding pt-8 md:absolute md:block md:pt-0",
              children: [
                d && (0, eA.jsx)(e5, { side: "bottom" }),
                (0, eA.jsx)(ro, {
                  readyState: a,
                  hasSubmittedInitialQuery: s,
                  currentQuery: i,
                  onUpdateCurrentQuery: c,
                  onSubmit: o,
                }),
              ],
            }),
          ],
        });
      }
      function rd() {
        let e = (function () {
            let e = (0, ti.nn)(ti.LW.turns);
            return (0, eC.compact)(
              e.toReversed().flatMap((e) => {
                var t;
                return null === (t = e.image_results) || void 0 === t
                  ? void 0
                  : t.entries;
              })
            );
          })(),
          { downloadedImageUrls: t } = eZ(e.map((e) => e.thumbnail_url)),
          n = e.filter((e) => t.has(e.thumbnail_url)),
          r = n.length;
        return (
          r > 8
            ? (r = 4 * Math.floor(r / 4))
            : r > 4 && (r = 2 * Math.floor(r / 2)),
          (0, eA.jsx)(rc, {
            children: (0, eA.jsx)("div", {
              className:
                "mx-snc-results-padding grid grid-cols-4 items-center justify-center gap-2.5 overflow-hidden rounded-xl",
              children: n
                .slice(0, r)
                .map((e) => (0, eA.jsx)(eF, { image: e }, e.url)),
            }),
          })
        );
      }
      let rm =
        (((a = {}).Answer = "answer"),
        (a.Images = "images"),
        (a.Sources = "sources"),
        a);
      function rp(e) {
        let { selectedTab: t, onChangeTab: n } = e,
          r = (0, et.aj)();
        return (
          (0, er.useEffect)(() => {
            t === rm.Sources && r && n(rm.Answer);
          }, [r, n, t]),
          (0, eA.jsxs)("div", {
            className: "flex gap-6",
            children: [
              (0, eA.jsx)(rh, {
                $selected: t === rm.Answer,
                disabled: t === rm.Answer,
                onClick: () => n(rm.Answer),
                children: "Answer",
              }),
              !r &&
                (0, eA.jsx)(rh, {
                  $selected: t === rm.Sources,
                  disabled: t === rm.Sources,
                  onClick: () => n(rm.Sources),
                  children: "Sources",
                }),
              (0, eA.jsx)(rh, {
                $selected: t === rm.Images,
                disabled: t === rm.Images,
                onClick: () => n(rm.Images),
                children: "Images",
              }),
            ],
          })
        );
      }
      let rh = ea.Z.button(
        J ||
          (J = (0, $.Z)([
            "w-full rounded-full py-2 flex justify-center items-center font-medium text-base \n",
            "",
          ])),
        (e) => {
          let { $selected: t } = e;
          return t
            ? "text-token-text-primary pointer-events-none"
            : "text-token-text-tertiary hover:text-token-text-primary";
        }
      );
      function rg(e) {
        let { highlightUrl: t } = e;
        return (0, eA.jsx)(rc, {
          children: (0, eA.jsx)("div", {
            className: "links-body flex flex-col gap-snc-1 pb-snc-1",
            children: (0, eA.jsx)(t1, {
              highlightUrl: t,
              animateInResults: !1,
            }),
          }),
        });
      }
      var rf = n(62014);
      function rx(e) {
        let {
            readyState: t,
            hasSubmittedInitialQuery: n,
            searchQuery: r,
            followupQuery: a,
            onUpdateSearchQuery: s,
            onUpdateFollowupQuery: i,
            onSubmitSearch: l,
            onSubmitFollowup: o,
            settings: c,
            onReset: u,
            onUpdateSetting: d,
            onRetryQuery: m,
            highlightUrl: p,
            highlightTurnIndex: h,
          } = e,
          g = (0, et.w$)(),
          f = (0, et.aj)(),
          { 0: x, 1: A } = (0, er.useState)(rm.Answer),
          {
            scrollContainerRef: v,
            lastFollowupTurnRef: b,
            scrollBottomSpacing: y,
          } = (function () {
            let e = (0, er.useRef)(null),
              t = (0, er.useRef)(null),
              { 0: n, 1: r } = (0, er.useState)(null),
              a = (0, ti.nn)(ti.LW.firstTurn),
              s = null != a && n5(a),
              i = (0, ti.nn)(ti.LW.numTurns);
            function l() {
              null != e.current && null != t.current
                ? r({
                    bottomSpacing: Math.max(
                      0,
                      e.current.getBoundingClientRect().height -
                        t.current.getBoundingClientRect().height
                    ),
                    followupTurnIndex:
                      (0, rf.S)(ti.nn.getState().thread).turns.length - 1,
                  })
                : r(null);
            }
            (0, er.useEffect)(() => {
              let t = new ResizeObserver(l);
              return (
                e.current && t.observe(e.current),
                () => {
                  t.disconnect();
                }
              );
            }, []),
              (0, er.useEffect)(() => {
                l();
                let e = new ResizeObserver(l);
                return (
                  t.current && e.observe(t.current),
                  () => {
                    e.disconnect();
                  }
                );
              }, [i]),
              (0, er.useEffect)(() => {
                (null == n ? void 0 : n.followupTurnIndex) != null &&
                  e.current &&
                  e.current.scrollTo({
                    top: e.current.scrollHeight,
                    behavior: "smooth",
                  });
              }, [null == n ? void 0 : n.followupTurnIndex]);
            let o = s ? 0 : "10rem";
            return {
              scrollContainerRef: e,
              lastFollowupTurnRef: t,
              scrollBottomSpacing:
                null != n
                  ? "max(calc("
                      .concat(n.bottomSpacing, "px - 10rem), ")
                      .concat(o, ")")
                  : o,
            };
          })();
        return (0, eA.jsxs)("div", {
          ref: g ? void 0 : v,
          className:
            "flex h-full w-full justify-center overflow-y-auto bg-token-main-surface-primary dark:bg-black md:overflow-y-hidden dark:md:bg-token-main-surface-primary",
          children: [
            (0, eA.jsxs)(rA, {
              children: [
                (0, eA.jsxs)("button", {
                  onClick: () => u(),
                  className: "hover:text-token-text-secondary",
                  children: [
                    (0, eA.jsx)(ee.nI, { className: "h-8 w-8" }),
                    (0, eA.jsx)(eO._, { readyState: t }),
                  ],
                }),
                (0, eA.jsx)("div", {
                  className: "flex flex-col items-center gap-2",
                  children: (0, eA.jsx)(e2, {
                    settings: c,
                    onUpdateSettings: d,
                  }),
                }),
              ],
            }),
            (0, eA.jsx)("div", {
              className: "relative grow",
              children: (0, eA.jsxs)("div", {
                className:
                  "absolute bottom-0 left-1/2 top-0 flex w-full max-w-[640px] -translate-x-1/2 xl:max-w-[1060px] xl:translate-x-[-47%] 2xl:max-w-[1100px]",
                children: [
                  (0, eA.jsxs)("div", {
                    className: (0, en.default)(
                      "relative flex w-full flex-col md:border-x-[0.5px] md:border-token-border-medium",
                      "xl:w-[63%]"
                    ),
                    children: [
                      (0, eA.jsxs)("header", {
                        className:
                          "relative flex flex-shrink-0 flex-col items-center gap-snc-1 overflow-y-visible px-snc-2 pt-snc-1",
                        children: [
                          (0, eA.jsx)(rp, { selectedTab: x, onChangeTab: A }),
                          (0, eA.jsxs)("div", {
                            className:
                              "absolute left-0 right-0 top-full z-10 flex px-snc-results-padding pt-4",
                            children: [
                              g && (0, eA.jsx)(e5, { side: "top" }),
                              (0, eA.jsx)(e8, {
                                currentQuery: r,
                                onUpdateCurrentQuery: s,
                                onSubmit: (e) => {
                                  A(rm.Answer), l(e);
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      x === rm.Answer &&
                        (0, eA.jsx)(ru, {
                          scrollContainerRef: v,
                          lastFollowupTurnRef: b,
                          scrollBottomSpacing: y,
                          readyState: t,
                          hasSubmittedInitialQuery: n,
                          followupQuery: a,
                          highlightTurnIndex: h,
                          onSubmitFollowup: o,
                          onUpdateFollowupQuery: i,
                          onRetryQuery: m,
                        }),
                      x === rm.Images && (0, eA.jsx)(rd, {}),
                      x === rm.Sources && (0, eA.jsx)(rg, { highlightUrl: p }),
                    ],
                  }),
                  f &&
                    (0, eA.jsx)("div", {
                      className: "w-[37%]",
                      children: (0, eA.jsx)("aside", {
                        className:
                          "links-body hide-scrollbar relative h-full overflow-x-hidden pb-10 pl-snc-results-padding pt-snc-1",
                        children: (0, eA.jsx)(t1, { highlightUrl: p }),
                      }),
                    }),
                ],
              }),
            }),
            (0, eA.jsx)(rA, {
              children: (0, eA.jsx)(ew, {
                className: "h-8 w-8",
                searchQuery: r,
              }),
            }),
            (0, eA.jsx)(eH, {}),
          ],
        });
      }
      let rA = ea.Z.div(
        Y ||
          (Y = (0, $.Z)([
            "w-10 m-snc-1 flex-col justify-between items-center hidden md:flex",
          ]))
      );
    },
    68399: function (e, t, n) {
      "use strict";
      n.d(t, {
        W6: function () {
          return l;
        },
        bM: function () {
          return o;
        },
        vm: function () {
          return c;
        },
      });
      var r = n(18450),
        a = n(78103);
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      let i = {
          isSettingsModalOpen: !1,
          isDebugModalOpen: !1,
          focusedImage: void 0,
        },
        l = (0, a.ZP)()(() =>
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? s(Object(n), !0).forEach(function (t) {
                    (0, r.Z)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : s(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
            }
            return e;
          })({}, i)
        ),
        o = {
          isSettingsModalOpen: (e) => e.isSettingsModalOpen,
          isDebugModalOpen: (e) => e.isDebugModalOpen,
          getFocusedImageCitation: (e) => e.focusedImage,
        },
        c = {
          toggleSettingsModalOpen() {
            l.setState((e) => ({
              isSettingsModalOpen: !e.isSettingsModalOpen,
            }));
          },
          toggleDebugModalOpen() {
            l.setState((e) => ({ isDebugModalOpen: !e.isDebugModalOpen }));
          },
          setFocusedImage(e) {
            l.setState({ focusedImage: e });
          },
        };
    },
    19216: function (e, t, n) {
      "use strict";
      n.d(t, {
        LW: function () {
          return d;
        },
        P3: function () {
          return m;
        },
        nn: function () {
          return u;
        },
      });
      var r = n(18450),
        a = n(51362),
        s = n(66315),
        i = n(78103);
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let c = { thread: null },
        u = (0, i.ZP)((0, a.n)(() => o({}, c))),
        d = {
          threadId: (e) => {
            var t, n;
            return null !==
              (t = null === (n = e.thread) || void 0 === n ? void 0 : n.id) &&
              void 0 !== t
              ? t
              : null;
          },
          turns: (e) => {
            var t, n;
            return null !==
              (t =
                null === (n = e.thread) || void 0 === n ? void 0 : n.turns) &&
              void 0 !== t
              ? t
              : [];
          },
          firstTurn: (e) => (null != e.thread ? e.thread.turns[0] : void 0),
          lastTurn: (e) =>
            null != e.thread
              ? e.thread.turns[e.thread.turns.length - 1]
              : void 0,
          numTurns: (e) => {
            var t, n;
            return null !==
              (t =
                null === (n = e.thread) || void 0 === n
                  ? void 0
                  : n.turns.length) && void 0 !== t
              ? t
              : 0;
          },
        },
        m = {
          newThread(e) {
            u.setState((t) => {
              t.thread = { id: e, turns: [] };
            });
          },
          appendTurn(e, t) {
            u.setState((n) => {
              let r = n.thread;
              if (!r) {
                s.U.addError("got appendTurn with no current thread");
                return;
              }
              if (r.id !== e) {
                s.U.addError("got appendTurn for wrong thread", {
                  threadId: e,
                  newThreadId: r.id,
                });
                return;
              }
              r.turns.push(t);
            });
          },
          updateTurn(e, t) {
            u.setState((n) => {
              let r = n.thread;
              if (!r) {
                s.U.addError("got updateTurn with no current thread");
                return;
              }
              let a = r.turns[e];
              if (!a) {
                s.U.addError("turn not found", {
                  turnIndex: e,
                  turns: r.turns,
                });
                return;
              }
              t(a);
            });
          },
          clearThread() {
            u.setState(() => o({}, c));
          },
          setThread(e, t) {
            u.setState((n) => {
              n.thread = { id: e, turns: t };
            });
          },
        };
    },
    20724: function (e, t, n) {
      "use strict";
      var r, a, s;
      n.d(t, {
        K1: function () {
          return o;
        },
        lv: function () {
          return l;
        },
        mX: function () {
          return c;
        },
        tQ: function () {
          return i;
        },
      });
      let i =
          (((r = {}).GPT_3_5 = "gpt-3.5"),
          (r.GPT_4_LITE = "gpt-4-lite"),
          (r.GPT_4 = "gpt-4"),
          r),
        l =
          (((a = {}).Bing = "bing"),
          (a.Sydney = "sydney"),
          (a.Fortis = "fortis"),
          a),
        o =
          (((s = {}).Conservative = "conservative"),
          (s.Aggressive = "aggressive"),
          s);
      function c(e) {
        return (
          "object" == typeof e &&
          (!e.rerank_labrador || "string" == typeof e.rerank_labrador)
        );
      }
    },
    72150: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(70079);
      function a(e, t, n) {
        let { 0: a, 1: s } = (0, r.useState)(() => {
          try {
            let t = JSON.parse(window.localStorage.getItem(e) || "");
            if (!n(t)) throw Error("Invalid data");
            return t;
          } catch (e) {
            return t;
          }
        });
        return (
          (0, r.useEffect)(() => {
            window.localStorage.setItem(e, JSON.stringify(a));
          }, [e, a]),
          [a, s]
        );
      }
    },
    20963: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return l;
        },
        v: function () {
          return o;
        },
      });
      var r = n(61236),
        a = n(70079),
        s = n(49593),
        i = n(19216);
      function l(e) {
        let { threadId: t, threadUserId: n, refetchOnMount: a } = e;
        return (0, r.a)({
          queryKey: ["thread", t, n],
          queryFn: async () => {
            if (!t) return { thread: null, turns: null };
            let e = await (0, s.Nv)({ threadId: t, threadUserId: n }),
              r = e.turns;
            return { thread: e, turns: r };
          },
          enabled: !!t,
          refetchOnMount: a,
        });
      }
      function o(e) {
        let { threadId: t, threadUserId: n } = e,
          r = l({ threadId: t, threadUserId: n }),
          s = r.data;
        return (
          (0, a.useEffect)(() => {
            if (t) {
              var e;
              i.P3.setThread(
                t,
                null !== (e = null == s ? void 0 : s.turns) && void 0 !== e
                  ? e
                  : []
              );
            }
          }, [t, s]),
          { refetch: r.refetch, isLoading: r.isLoading, isError: r.isError }
        );
      }
    },
    34796: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return s;
        },
      });
      var r = n(20735),
        a = n(72150);
      function s() {
        return (0, a.Z)("SONIC_SETTINGS_20240411", r.Z, r.Wt);
      }
    },
    45456: function (e, t, n) {
      "use strict";
      function r() {
        var e;
        null === (e = document.querySelector("html")) ||
          void 0 === e ||
          e.classList.add("snc");
      }
      n.d(t, {
        e: function () {
          return r;
        },
      });
    },
    36270: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return l;
        },
      });
      var r = n(61236),
        a = n(70079),
        s = n(35601),
        i = n(49593);
      function l(e) {
        let { query: t, enabled: n = !0 } = e,
          l = (0, a.useRef)([]),
          o = (0, a.useRef)(0),
          c = (0, a.useRef)(null),
          u = (0, a.useRef)(null),
          { settings: d, userMetadata: m } = (0, s.A)(),
          p = !d.suggestions || !n || !t || c.current === t,
          { data: h = [], isFetched: g } = (0, r.a)({
            queryKey: ["typeahead", t],
            queryFn: i.mO,
            enabled: !p,
            networkMode: "offlineFirst",
          });
        return (
          !p &&
            g &&
            (l.current[0] && l.current[0] === h[0]
              ? o.current++
              : (o.current = 1),
            o.current >= 3 &&
              u.current !== h[0] &&
              ((u.current = h[0]), (0, i.LC)({ query: h[0], metadata: m })),
            (c.current = t),
            (l.current = h)),
          n ? h : l.current
        );
      }
    },
    90240: function (e, t, n) {
      "use strict";
      n.d(t, {
        PX: function () {
          return a;
        },
        XB: function () {
          return s;
        },
      });
      var r = n(43041);
      let a = { latitude: null, longitude: null, locationAccuracy: null };
      function s(e) {
        if (!e) {
          i();
          return;
        }
        navigator.geolocation.getCurrentPosition(
          (e) => {
            r.bX.setCookie(
              r.cn.LastLocation,
              JSON.stringify({
                latitude: e.coords.latitude,
                longitude: e.coords.longitude,
                locationAccuracy: e.coords.accuracy,
              }),
              { maxAge: 2592e3 }
            );
          },
          () => {
            i();
          }
        );
      }
      function i() {
        r.bX.setCookie(r.cn.LastLocation, JSON.stringify(a), {
          maxAge: 2592e3,
        });
      }
    },
    78375: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return s;
        },
        K: function () {
          return a;
        },
      });
      var r = n(72541);
      function a(e) {
        var t, n, r, a, s, i, l;
        if (null !== (t = e.finance_widget) && void 0 !== t && t.price)
          return {
            type: "finance",
            status: e.finance_widget.status,
            data: e.finance_widget,
          };
        if (
          null !== (n = e.weather_widget) &&
          void 0 !== n &&
          n.forecast_response
        )
          return {
            type: "weather",
            status: e.weather_widget.status,
            data: e.weather_widget.forecast_response,
          };
        if (null !== (r = e.calculator_widget) && void 0 !== r && r.expression)
          return {
            type: "calculator",
            status: "done",
            data: {
              expression: e.calculator_widget.expression,
              status: e.calculator_widget.status,
              result: e.calculator_widget.result,
            },
          };
        if (null !== (a = e.sports_widget) && void 0 !== a && a.standings)
          return {
            type: "sports-standings",
            status: e.sports_widget.status,
            data: e.sports_widget.standings,
          };
        if (
          null !== (s = e.sports_widget) &&
          void 0 !== s &&
          s.schedule &&
          e.sports_widget.schedule.games.length > 0
        )
          return {
            type: "sports-schedule",
            status: e.sports_widget.status,
            data: e.sports_widget.schedule,
          };
        if (null !== (i = e.timezone_widget) && void 0 !== i && i.time_at)
          return {
            type: "time-difference",
            status: e.timezone_widget.status,
            data: e.timezone_widget.time_at,
          };
        if (null !== (l = e.news_widget) && void 0 !== l && l.articles)
          return {
            type: "news",
            status: e.news_widget.status,
            data: e.news_widget,
          };
        return null;
      }
      function s(e, t) {
        if (!e) return null;
        let n = [];
        return (e.name && n.push(e.name),
        e.state && e.name !== e.state && n.push(e.state),
        !e.name && e.country && e.country === e.name && n.push(e.country),
        n.length > 0)
          ? n.join(", ")
          : t && e.timezone && "string" == typeof e.timezone
            ? (0, r.Z)(t, "zzz", { timeZone: e.timezone })
            : null;
      }
    },
    63667: function (e, t, n) {
      "use strict";
      let r;
      n.r(t),
        n.d(t, {
          DO_NOT_IMPORT_VoiceModeButton: function () {
            return X;
          },
          DO_NOT_IMPORT_VoiceModeLayout: function () {
            return ey;
          },
        });
      var a,
        s,
        i,
        l,
        o = n(85452),
        c = n(55057),
        u = n(89899),
        d = n(95407),
        m = n(52392),
        p = n(63605),
        h = n(34594),
        g = n(19841),
        f = n(70079),
        x = n(9063);
      let A =
          (((a = {}).StateUpdate = "state_update"),
          (a.ActionRequest = "action_request"),
          (a.ConversationUpdate = "conversation_update"),
          (a.RelayMessage = "relay_message"),
          (a.Unknown = "unknown"),
          a),
        v =
          (((s = {}).StartListeningIntently = "start_listening"),
          (s.StopListeningIntently = "stop_listening"),
          (s.HaltAllActivity = "stop_speaking"),
          (s.ResumeListening = "resume_listening"),
          (s.RelayMessage = "relay_message"),
          s),
        b =
          (((i = {}).Idle = "idle"),
          (i.Connected = "connected"),
          (i.Halted = "halted"),
          (i.Listening = "listening"),
          (i.ListeningIntently = "listening_intently"),
          (i.Thinking = "thinking"),
          (i.Speaking = "speaking"),
          i);
      var y = n(18450),
        j = n(61107),
        w = n(4466);
      class O {
        static async getVoiceToken(e) {
          return w.c.post(
            "".concat("https://chat.openai.com/voice", "/get_token"),
            e
          );
        }
      }
      var k = n(78103),
        N = n(25229),
        S = n(51362);
      class E {
        log(e) {}
        debug() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          this.log("debug", ...t);
        }
        error() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          this.log("error", ...t);
        }
      }
      let P = new E();
      function _(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                (0, y.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : _(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let D = {
          conversationId: null,
          isActivityHalted: !1,
          isStarting: !1,
          dev: { room: null },
          credentials: { token: null, url: null, e2eeKey: null },
          server: {
            actions: null,
            connectionState: null,
            remoteState: null,
            messages: [],
          },
        },
        M = (0, k.ZP)((0, N.XR)((0, S.n)(() => D)));
      function R() {
        return M(
          (e) =>
            !!(
              e.credentials.token &&
              e.credentials.url &&
              e.credentials.e2eeKey &&
              e.server.remoteState
            )
        );
      }
      function L(e) {
        let { voiceName: t, voiceMainLanguage: n } = (0, j.SK)(),
          r = M((e) => e.isStarting),
          a = R(),
          s = (0, f.useCallback)(() => {
            a && T(null);
          }, [a]);
        return {
          startVoiceMode: (0, f.useCallback)(
            async (r) => {
              if (!a) {
                M.setState((e) => {
                  e.isStarting = !0;
                });
                try {
                  let a = await O.getVoiceToken(
                    C({ voice: t, language_code: n }, r)
                  );
                  a &&
                    a.token &&
                    a.url &&
                    a.e2ee_key &&
                    T({
                      conversationId: e,
                      credentials: C(C({}, a), {}, { e2eeKey: a.e2ee_key }),
                    });
                } catch (e) {
                  throw (
                    (P.debug("failed to get voice token", e),
                    M.setState((e) => {
                      e.isStarting = !1;
                    }),
                    e)
                  );
                }
              }
            },
            [a, t, n, e]
          ),
          stopVoiceMode: s,
          isVoiceModeStarting: r,
          isVoiceModeActive: a,
        };
      }
      function T(e) {
        if (e) {
          let { credentials: t, conversationId: n } = e;
          P.debug("setting credentials", e),
            M.setState((e) => {
              (e.conversationId = n), (e.credentials = t);
            });
          return;
        }
        P.debug("clearing credentials"), U();
      }
      function U() {
        M.setState(D);
      }
      var z = n(67431),
        I = n(98431);
      function B(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Z() {
        let e = (0, I.fZ)(),
          t = (0, f.useRef)({
            debug: function () {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
              return P.debug("[".concat(e.name, "]"), ...n);
            },
            encoder: new TextEncoder(),
            decoder: new TextDecoder(),
          }).current;
        return (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? B(Object(n), !0).forEach(function (t) {
                  (0, y.Z)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : B(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
          }
          return e;
        })({ room: e }, t);
      }
      function F(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                (0, y.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : F(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var q = n(13106);
      function H(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                (0, y.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : H(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let W = (0, f.memo)(function () {
        return (
          !(function () {
            let { room: e, debug: t, decoder: n } = Z(),
              r = (function () {
                let { debug: e } = Z(),
                  t = M((e) => e.conversationId);
                return (0, f.useCallback)(async () => {
                  if (t) {
                    e("refetch conversationId ".concat(t));
                    try {
                      await (0, p.Um)(t, !0);
                    } catch (n) {
                      let t = "failed to update conversation";
                      e(t, n), d.m.danger(t);
                    }
                  }
                }, [t, e]);
              })();
            (0, f.useEffect)(() => {
              let a = async (n) => {
                  let { new_state: r } = n,
                    a = [b.Listening, b.ListeningIntently];
                  t("new state", r),
                    a.includes(r)
                      ? (t("unmuting microphone"),
                        await e.localParticipant.setMicrophoneEnabled(!0))
                      : (t("muting microphone"),
                        await e.localParticipant.setMicrophoneEnabled(!1)),
                    M.setState((e) => {
                      e.server.remoteState = r;
                    });
                },
                s = async (s) => {
                  let i;
                  try {
                    (i = JSON.parse(n.decode(s))), t("data recevied", i);
                  } catch (e) {
                    t("error parsing data", e);
                    return;
                  }
                  switch (
                    (M.setState(
                      (e) => (
                        e.server.messages.push(
                          V(
                            V({}, i),
                            {},
                            { timestamp: new Date(), source: "remote" }
                          )
                        ),
                        e
                      )
                    ),
                    i.type)
                  ) {
                    case A.StateUpdate:
                      t("state update", i.payload);
                      let { new_state: l, delay_s: o } = i.payload;
                      l === b.Thinking &&
                        o &&
                        (t(
                          ""
                            .concat(e.name, " delay thinking state by ")
                            .concat(o, " seconds")
                        ),
                        a({ new_state: b.ListeningIntently, delay_s: o }),
                        await new Promise((e) => setTimeout(e, 1e3 * o))),
                        a(i.payload);
                      break;
                    case A.ConversationUpdate:
                      t("conversation update", i.payload), await r();
                  }
                },
                i = (e, n) => {
                  t("track published", e, n);
                },
                l = () => {
                  t("disconnected"), U();
                };
              return (
                e.on(z.TQ.DataReceived, s),
                e.on(z.TQ.TrackPublished, i),
                e.on(z.TQ.Disconnected, l),
                () => {
                  e.off(z.TQ.DataReceived, s),
                    e.off(z.TQ.TrackPublished, i),
                    e.off(z.TQ.Disconnected, l);
                }
              );
            }, [!1, e, r, t, n]);
          })(),
          (function () {
            let { room: e } = Z();
            (0, f.useEffect)(() => {
              M.setState((t) => {
                t.dev.room = e;
              });
            }, [e]);
          })(),
          (function () {
            let { room: e } = Z(),
              t = (0, I.z1)(e);
            (0, f.useEffect)(() => {
              M.setState((e) => {
                e.server.connectionState = t;
              });
            }, [t]);
          })(),
          (function () {
            let { room: e, debug: t, encoder: n } = Z();
            (0, f.useEffect)(() => {
              let r = !!M.getState().server.actions;
              if (e && !r) {
                let r = async (r) => {
                  t("publishing action", r);
                  let a = { type: A.ActionRequest, payload: { action: r } };
                  await e.localParticipant.publishData(
                    n.encode(JSON.stringify(a)),
                    { reliable: !0 }
                  ),
                    M.setState((e) => {
                      e.server.messages.push(
                        Q(
                          Q({}, a),
                          {},
                          { timestamp: new Date(), source: "local" }
                        )
                      );
                    });
                };
                M.setState((e) => {
                  e.server.actions = {
                    [v.StartListeningIntently]: () =>
                      r(v.StartListeningIntently),
                    [v.StopListeningIntently]: () => r(v.StopListeningIntently),
                    [v.HaltAllActivity]: () => r(v.HaltAllActivity),
                    [v.ResumeListening]: () => r(v.ResumeListening),
                    [v.RelayMessage]: () => r(v.RelayMessage),
                  };
                });
              }
            }, [e, t, n]);
          })(),
          (function () {
            let e = R();
            (0, f.useEffect)(
              () => (
                q.tN.setState({ isVoiceActive: e }),
                () => {
                  q.tN.setState({ isVoiceActive: !1 });
                }
              ),
              [e]
            );
          })(),
          !(function () {
            let { room: e, debug: t } = Z(),
              n = e.getActiveDevice("audioinput"),
              r = e.getActiveDevice("audiooutput");
            (0, f.useEffect)(() => {
              t("devices: input ".concat(n, ", output ").concat(r)),
                (async function () {
                  let a = async () => {
                      "default" !== n &&
                        (t("switching audio input to default"),
                        await e.switchActiveDevice("audioinput", "default"));
                    },
                    s = async () => {
                      "default" !== r &&
                        (t("switching audio output to default"),
                        await e.switchActiveDevice("audiooutput", "default"));
                    };
                  await Promise.all([a(), s()]);
                })();
            }, [n, r, t, e]),
              (0, f.useEffect)(() => {
                async function n() {
                  t("audio devices changed"),
                    Promise.all(
                      ["audioinput", "audiooutput"].map(async (n) => {
                        let r = await z.du.getLocalDevices(n),
                          a = e.getActiveDevice(n);
                        if (!r.find((e) => e.deviceId === a)) {
                          let a = r.find((e) => "default" === e.deviceId),
                            s = null;
                          a ? (s = a.deviceId) : r[0] && (s = r[0].deviceId),
                            t("switching ".concat(n, " to ").concat(s)),
                            s && (await e.switchActiveDevice(n, s));
                        }
                      })
                    );
                }
                if (navigator)
                  return (
                    navigator.mediaDevices.addEventListener("devicechange", n),
                    () => {
                      navigator.mediaDevices.removeEventListener(
                        "devicechange",
                        n
                      );
                    }
                  );
              }, [e, t]);
          })(),
          null
        );
      });
      var G = n(35250);
      function X(e) {
        var t, n;
        let {
            iconClassName: r = "icon-sm",
            className: a,
            conversationId: s,
          } = e,
          i =
            null === (t = (0, h.sB)(h.tz.VoiceMode)) || void 0 === t
              ? void 0
              : t.value,
          l = (0, p.XK)(s),
          o = (0, m.Bv)(s),
          c =
            null === (n = p.iN.getCurrentNode(s)) || void 0 === n
              ? void 0
              : n.id;
        return l && i && o
          ? (0, G.jsx)(K, {
              conversationId: l,
              className: a,
              iconClassName: r,
              modelId: o,
              parentMessageId: c,
            })
          : null;
      }
      let K = (0, f.memo)(function (e) {
        let {
            conversationId: t,
            className: n,
            iconClassName: r,
            modelId: a,
            parentMessageId: s,
          } = e,
          {
            isVoiceModeActive: i,
            isVoiceModeStarting: l,
            toggleVoiceMode: m,
          } = (function (e, t, n) {
            let r = (0, x.Z)(),
              {
                startVoiceMode: a,
                isVoiceModeStarting: s,
                isVoiceModeActive: i,
              } = L(e);
            return {
              isVoiceModeActive: i,
              isVoiceModeStarting: s,
              toggleVoiceMode: (0, f.useCallback)(async () => {
                try {
                  await a({
                    conversation_id: e,
                    parent_message_id: n,
                    model_slug: t,
                  });
                } catch (e) {
                  d.m.danger(
                    r.formatMessage({
                      id: "useVoiceModeButtonAction.error",
                      defaultMessage: "Failed to start voice mode",
                    })
                  );
                }
              }, [a, e, n, t, r]),
            };
          })(t, a, s);
        return i
          ? null
          : (0, G.jsx)(u.y4, {
              disabled: l,
              onClick: m,
              className: (0, g.default)("w-fit", n),
              children: l
                ? (0, G.jsx)(o.Z, { className: r })
                : (0, G.jsx)(c.VWR, { className: r }),
            });
      });
      var J = n(92386),
        Y = n(24343),
        $ = n(83737),
        ee = n(29287);
      function et() {
        return (0, G.jsxs)("div", {
          className: "flex flex-row items-center gap-2",
          children: [
            (0, G.jsx)(c.uAs, { className: "icon-sm" }),
            (0, G.jsx)(en, {}),
          ],
        });
      }
      function en() {
        let e;
        let t = M((e) => e.server.remoteState);
        if (!t) return null;
        switch (t) {
          case b.Listening:
          case b.ListeningIntently:
            e = "Listening";
            break;
          case b.Thinking:
            e = "Thinking";
            break;
          case b.Speaking:
            e = "Speaking";
            break;
          default:
            e = null;
        }
        return e ? (0, G.jsx)("div", { className: "mr-2", children: e }) : null;
      }
      function er(e) {
        let { conversationId: t } = e,
          n = (0, p.XK)(t);
        return n
          ? (0, G.jsxs)("div", {
              className: "flex flex-row items-center gap-3",
              children: [
                (0, G.jsx)(et, {}),
                (0, G.jsx)(es, {}),
                (0, G.jsx)(ea, { conversationId: n }),
              ],
            })
          : null;
      }
      function ea(e) {
        let { conversationId: t } = e,
          { stopVoiceMode: n } = L(t);
        return (0, G.jsx)(ei, {
          color: "none",
          onClick: n,
          className:
            "overflow-hidden rounded-full border-none p-0 text-token-text-primary",
          children: (0, G.jsx)(c.niP, { className: "icon-2xl" }),
        });
      }
      function es() {
        let { isActivityHalted: e, toggleVoiceActivity: t } = (function () {
            let e = M((e) => e.isActivityHalted),
              t = M((e) => e.server.actions);
            return {
              toggleVoiceActivity: (0, f.useCallback)(() => {
                M.getState().isActivityHalted
                  ? (null == t || t[v.ResumeListening](),
                    M.setState((e) => {
                      e.isActivityHalted = !1;
                    }))
                  : (null == t || t[v.HaltAllActivity](),
                    M.setState((e) => {
                      e.isActivityHalted = !0;
                    }));
              }, [t]),
              isActivityHalted: e,
            };
          })(),
          n = null;
        return (
          (n = e ? c.o1U : c.STQ),
          (0, G.jsx)(ei, {
            color: "none",
            className:
              "overflow-hidden rounded-full border-none p-0 text-token-text-primary",
            onClick: t,
            children: (0, G.jsx)(n, { className: "icon-2xl" }),
          })
        );
      }
      let ei = (0, $.E)(ee.z);
      var el = n(99503),
        eo = n(56115);
      function ec() {
        let e = M((e) => e.server.messages);
        return (0, G.jsx)($.E.div, {
          className:
            "hidden h-full max-w-[400px] overflow-hidden border-l border-l-token-sidebar-surface-secondary bg-token-main-surface-secondary pt-16 shadow-inner md:block",
          initial: { opacity: 0, x: 420, width: "0px" },
          animate: { opacity: 1, x: 0, width: "400px" },
          exit: { opacity: 0, x: 420, width: "0px" },
          transition: { type: "tween" },
          children: (0, G.jsx)(Y.M, {
            children: e.length
              ? (0, G.jsxs)($.E.div, {
                  className: "flex h-full w-full flex-col",
                  initial: { opacity: 0, x: -100 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: -100 },
                  children: [
                    (0, G.jsxs)("div", {
                      children: [
                        (0, G.jsx)("h3", {
                          className:
                            "p-4 py-2 text-lg font-semibold text-token-text-secondary",
                          children: "Room Stats",
                        }),
                        (0, G.jsx)(eu, {}),
                      ],
                    }),
                    (0, G.jsx)("h3", {
                      className:
                        "p-4 py-2 text-lg font-semibold text-token-text-secondary",
                      children: "Messages",
                    }),
                    (0, G.jsx)("div", {
                      className: "grow overflow-hidden",
                      children: (0, G.jsx)(J.I, {
                        children: (0, G.jsx)($.E.ul, {
                          className:
                            "pointer-events-none flex w-full flex-col gap-4 pb-24 pt-4",
                          initial: "initial",
                          animate: "animate",
                          exit: "exit",
                          variants: ex,
                          transition: {
                            delayChildren: 0.25,
                            staggerChildren: 0.05,
                          },
                          children: e.map((e, t) =>
                            (0, G.jsx)(ef, { index: t, message: e }, t)
                          ),
                        }),
                      }),
                    }),
                  ],
                })
              : null,
          }),
        });
      }
      function eu() {
        let e = M((e) => e.dev.room);
        if (!e) return null;
        let t = e.numParticipants,
          n = e.activeSpeakers;
        return (0, G.jsx)("div", {
          className: "px-4 pb-8",
          children: (0, G.jsxs)("div", {
            className: "flex flex-col flex-nowrap gap-2",
            children: [
              (0, G.jsx)(ed, {}),
              (0, G.jsx)(eh, { text: "Attendees" }),
              (0, G.jsx)(eg, { name: "Participants", text: t }),
              (0, G.jsx)(eg, { name: "Speakers", text: n.length }),
              (0, G.jsx)(em, {}),
            ],
          }),
        });
      }
      function ed() {
        let e = M((e) => e.server.connectionState),
          t = M((e) => e.dev.room),
          { 0: n, 1: r } = (0, f.useState)("Unknown"),
          a = null == t ? void 0 : t.localParticipant;
        return (
          (0, f.useEffect)(() => {
            if (a) {
              let e = (e) => {
                r(e);
              };
              return (
                a.on("connectionQualityChanged", e),
                () => {
                  a.off("connectionQualityChanged", e);
                }
              );
            }
          }, [a]),
          (0, G.jsxs)(G.Fragment, {
            children: [
              (0, G.jsx)(eh, { text: "Connection" }),
              (0, G.jsx)(eg, { name: "Quality", text: String(n) }),
              (0, G.jsx)(eg, { name: "State", text: String(e) }),
            ],
          })
        );
      }
      function em() {
        let e = M((e) => e.dev.room),
          { 0: t, 1: n } = (0, f.useState)(null),
          { 0: r, 1: a } = (0, f.useState)(null),
          s = null == e ? void 0 : e.getActiveDevice("audioinput"),
          i = null == e ? void 0 : e.getActiveDevice("audiooutput");
        return (
          (0, f.useEffect)(() => {
            (async function () {
              var e, t;
              let r = await z.du.getLocalDevices("audioinput"),
                l = await z.du.getLocalDevices("audiooutput"),
                o = r.find((e) => e.deviceId === s),
                c = l.find((e) => e.deviceId === i);
              n(
                null !== (e = null == o ? void 0 : o.label) && void 0 !== e
                  ? e
                  : "Unknown"
              ),
                a(
                  null !== (t = null == c ? void 0 : c.label) && void 0 !== t
                    ? t
                    : "Unknown"
                );
            })();
          }, [s, i]),
          (0, G.jsxs)(G.Fragment, {
            children: [
              (0, G.jsx)(eh, { text: "Devices" }),
              (0, G.jsx)(eg, {
                icon: c.ZO8,
                name: "Input",
                text: null != t ? t : "Unknown",
              }),
              (0, G.jsx)(eg, {
                icon: c.VWR,
                name: "Output",
                text: null != r ? r : "Unknown",
              }),
              (0, G.jsx)(eh, { text: "Monitors" }),
              (0, G.jsx)(eg, {
                name: "Mic level",
                icon: el.Z,
                text: "unknown",
                content: (0, G.jsx)(ep, {}),
              }),
            ],
          })
        );
      }
      function ep() {
        let e = M((e) => {
          var t;
          return null === (t = e.dev.room) || void 0 === t
            ? void 0
            : t.localParticipant.audioLevel;
        });
        return (0, G.jsx)("div", {
          className: "flex flex-row flex-nowrap items-center gap-1",
          children: (0, G.jsx)("div", {
            className: "flex flex-row flex-nowrap items-center gap-1",
            children: Array.from({ length: 10 }).map((t, n) =>
              (0, G.jsx)(
                "div",
                {
                  className: "h-2 w-2 rounded-full ".concat(
                    (null != e ? e : 0) > 0.1 * n
                      ? "bg-gray-500"
                      : "bg-token-main-surface-tertiary"
                  ),
                },
                n
              )
            ),
          }),
        });
      }
      function eh(e) {
        let { text: t } = e;
        return (0, G.jsx)("h4", {
          className: "text-md font-semibold",
          children: t,
        });
      }
      function eg(e) {
        var t;
        return (0, G.jsxs)("div", {
          className: "flex flex-row flex-nowrap items-center gap-2",
          children: [
            (0, G.jsx)("span", {
              className: "opacity-85",
              children: e.icon
                ? (0, G.jsx)(e.icon, { className: "h-[0.75rem] w-[0.75rem]" })
                : "".concat(e.name, ":"),
            }),
            null !== (t = e.content) && void 0 !== t
              ? t
              : (0, G.jsx)("span", {
                  className:
                    "line-clamp-1 rounded-lg bg-token-main-surface-tertiary p-0.5 px-1 font-mono text-xs",
                  children: e.text,
                }),
          ],
        });
      }
      function ef(e) {
        let { index: t, message: n } = e,
          { 0: r, 1: a } = (0, f.useState)(!1),
          s = null;
        switch (n.source) {
          case "remote":
            s = c.veu;
            break;
          case "local":
            s = c.Hf3;
        }
        return (0, G.jsx)($.E.div, {
          className: "w-full border-t border-token-main-surface-tertiary p-4",
          variants: ex,
          children: (0, G.jsxs)("div", {
            className:
              "flex w-full flex-col gap-2 rounded-lg bg-token-main-surface-secondary",
            children: [
              (0, G.jsxs)("div", {
                className:
                  "font-mono text-[0.65rem] font-semibold text-token-text-secondary",
                children: [
                  (0, G.jsxs)("div", {
                    className:
                      "flex w-full flex-row flex-nowrap items-center justify-between",
                    children: [
                      (0, G.jsxs)("div", {
                        className:
                          "flex flex-row flex-nowrap items-center gap-1",
                        children: [
                          (0, G.jsx)(s, {
                            className: "h-3 w-3 text-token-text-secondary",
                          }),
                          (0, G.jsx)("span", {
                            children: " | "
                              .concat(t + 1, " | ")
                              .concat((0, eo.Z)(n.timestamp, "H:m:s:SS")),
                          }),
                        ],
                      }),
                      (0, G.jsx)("div", {
                        className:
                          "flex flex-row flex-nowrap items-center gap-2",
                        children: (0, G.jsx)(ee.z, {
                          className: "rounded-full p-0.5",
                          color: "none",
                          size: "xsmall",
                          onClick: () => a((e) => !e),
                          children: (0, G.jsx)(c.eOB, {
                            className: "transform transition-transform ".concat(
                              r ? "rotate-180" : ""
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, G.jsx)("div", {
                    className: "mt-1 text-xs font-bold",
                    children: n.type,
                  }),
                ],
              }),
              (0, G.jsx)(Y.M, {
                children: r
                  ? (0, G.jsx)($.E.pre, {
                      initial: { opacity: 0, transform: "blur(4px)" },
                      animate: { opacity: 1, transform: "blur(0px)" },
                      exit: { opacity: 0, transform: "blur(4px)" },
                      className:
                        "overflow-x-auto rounded-md bg-token-main-surface-tertiary p-2 text-xs text-token-text-secondary",
                      children: JSON.stringify(n.payload, null, 2),
                    })
                  : null,
              }),
            ],
          }),
        });
      }
      let ex = {
        hidden: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
      };
      function eA(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ev(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eA(Object(n), !0).forEach(function (t) {
                (0, y.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eA(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      (l = Worker),
        (r = class extends l {
          constructor(e, t) {
            let n = String(e);
            super(
              n.includes("://") && !n.startsWith(location.origin)
                ? URL.createObjectURL(
                    new Blob(
                      [
                        "importScripts=((i)=>(...a)=>i(...a.map((u)=>''+new URL(u,\""
                          .concat(n, '"))))(importScripts);importScripts("')
                          .concat(n, '")'),
                      ],
                      { type: "text/javascript" }
                    )
                  )
                : e,
              t
            );
          }
        });
      let eb = (0, f.memo)(function () {
        let e = (0, f.useRef)({ keyProvider: new z.P6() }).current,
          { 0: t, 1: a } = (0, f.useState)(!1),
          { token: s, url: i, e2eeKey: l } = M((e) => e.credentials),
          o = (function () {
            let e = (0, f.useCallback)(() => {
              P.debug("connected to room");
              let e = M.subscribe(
                (e) => !!e.server.remoteState,
                (t) => {
                  t &&
                    (M.setState((e) => {
                      e.isStarting = !1;
                    }),
                    e());
                }
              );
            }, []);
            return {
              onConnected: e,
              onDisconnected: (0, f.useCallback)(() => {
                P.debug("disconnected from room"), U();
              }, []),
              onError: (0, f.useCallback)((e) => {
                d.m.danger("Something went wrong"),
                  P.error("an error occured within the room", e),
                  U();
              }, []),
              onEncryptionError: (0, f.useCallback)((e) => {
                d.m.danger("Something went wrong"),
                  P.error("an encryption error occured within the room", e),
                  U();
              }, []),
            };
          })();
        return ((0, f.useEffect)(() => {
          let n = s && i && l;
          !t && n
            ? e.keyProvider.setKey(l).then(() => {
                a(!0);
              })
            : t && !n && a(!1);
        }, [s, i, l, t, e]),
        t && s && i)
          ? (0, G.jsxs)(
              I.IC,
              ev(
                ev({}, o),
                {},
                {
                  connect: !0,
                  token: s,
                  serverUrl: i,
                  audio: {
                    deviceId: { ideal: "default", exact: "default" },
                    noiseSuppression: !0,
                    echoCancellation: !0,
                  },
                  options: {
                    e2ee: {
                      keyProvider: e.keyProvider,
                      worker: new r(n.tu(new URL(n.p + n.u(1087), n.b))),
                    },
                  },
                  children: [(0, G.jsx)(W, {}), (0, G.jsx)(I.Z5, {})],
                }
              )
            )
          : null;
      });
      function ey(e) {
        let { conversationId: t, renderTurns: n } = e,
          { 0: r, 1: a } = (0, f.useState)(!1),
          s = R();
        return (0, G.jsxs)(G.Fragment, {
          children: [
            (0, G.jsx)(Y.M, {
              children: s
                ? (0, G.jsx)($.E.div, {
                    className:
                      "fixed left-0 top-0 z-50 flex h-full w-full flex-col bg-token-main-surface-primary",
                    initial: "hidden",
                    animate: "visible",
                    exit: "hidden",
                    variants: ej,
                    children: (0, G.jsxs)($.E.div, {
                      className: "relative h-full w-full",
                      variants: ej,
                      children: [
                        (0, G.jsxs)($.E.div, {
                          variants: ej,
                          className: "flex h-full w-full flex-nowrap gap-2",
                          children: [
                            (0, G.jsx)("div", {
                              className: "flex h-full w-full flex-col",
                              children: (0, G.jsx)(J.I, {
                                children: (0, G.jsx)("div", {
                                  className: "pointer-events-none pb-24 pt-9",
                                  children: n(),
                                }),
                              }),
                            }),
                            (0, G.jsx)(Y.M, {
                              children: r ? (0, G.jsx)(ec, {}) : null,
                            }),
                          ],
                        }),
                        (0, G.jsx)($.E.div, {
                          className:
                            "absolute left-0 top-0 flex w-full justify-end p-4",
                          variants: ej,
                          children: (0, G.jsx)(er, { conversationId: t }),
                        }),
                        (0, G.jsx)($.E.div, {
                          className:
                            "absolute bottom-0 right-0 flex w-full justify-end p-4",
                          variants: ej,
                          children: (0, G.jsx)(u.y4, {
                            onClick: () => a((e) => !e),
                            children: (0, G.jsx)(c.FxN, {}),
                          }),
                        }),
                      ],
                    }),
                  })
                : null,
            }),
            (0, G.jsx)(eb, {}),
          ],
        });
      }
      let ej = {
        hidden: { opacity: 0, transform: "blur(4px)" },
        visible: { transform: "blur(0px)", opacity: 1 },
      };
    },
    3107: function (e) {
      e.exports = {
        "jidori-editor": "ProseMirror_jidori-editor__qe4qb",
        "generated-text": "ProseMirror_generated-text___vj5n",
        "highlighted-edit": "ProseMirror_highlighted-edit__XlnRz",
        dark: "ProseMirror_dark__iBd2U",
        "highlighted-delete": "ProseMirror_highlighted-delete__p_chl",
      };
    },
  },
]);
//# sourceMappingURL=sso.f3cb6fa051f7241b.js.map
