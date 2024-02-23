(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2571],
  {
    3219: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return J;
          },
          default: function () {
            return K;
          },
        });
      var o,
        i = n(39827),
        s = n(9112),
        a = n(25660),
        r = n(70079);
      let l = r.forwardRef(function ({ title: e, titleId: t, ...n }, o) {
          return r.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: o,
                "aria-labelledby": t,
              },
              n
            ),
            e ? r.createElement("title", { id: t }, e) : null,
            r.createElement("path", {
              d: "M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z",
            })
          );
        }),
        d = r.forwardRef(function ({ title: e, titleId: t, ...n }, o) {
          return r.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: o,
                "aria-labelledby": t,
              },
              n
            ),
            e ? r.createElement("title", { id: t }, e) : null,
            r.createElement("path", {
              fillRule: "evenodd",
              d: "M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
              clipRule: "evenodd",
            })
          );
        });
      var c = n(77311),
        u = n(19841),
        f = n(80483),
        p = n.n(f),
        g = n(32004),
        m = n(70671),
        b = n(94968),
        x = n(7557),
        y = n(14591),
        j = n(70917),
        v = n(95250),
        h = n(1454),
        w = n(62733),
        O = n(41068),
        M = n(35250);
      function S(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : S(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function k(e) {
        let { onRemoveDomainClick: t, onVerifyDomainClick: n } = e;
        return (0, M.jsxs)(j.Z.Root, {
          children: [
            (0, M.jsx)(j.Z.Trigger, {
              children: (0, M.jsx)(h.K9M, { className: "icon-sm" }),
            }),
            (0, M.jsx)(j.Z.Portal, {
              children: (0, M.jsxs)(j.Z.Content, {
                children: [
                  (0, M.jsx)(j.Z.Item, {
                    onClick: t,
                    children: (0, M.jsx)(
                      g.Z,
                      I({}, Z.ssoDropdownRemoveButtonText)
                    ),
                  }),
                  (0, M.jsx)(j.Z.Item, {
                    onClick: n,
                    children: (0, M.jsx)(
                      g.Z,
                      I({}, Z.ssoDropdownVerifyButtonText)
                    ),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function C(e) {
        let { domains: t, workspaceId: n } = e,
          { mutateAsync: o } = (0, O.Bd)(n),
          { 0: i, 1: s } = (0, r.useState)(!1),
          { 0: a, 1: l } = (0, r.useState)();
        return (0, M.jsxs)(M.Fragment, {
          children: [
            (0, M.jsxs)(v.Z.Root, {
              className: "w-full table-auto",
              children: [
                (0, M.jsxs)(v.Z.Header, {
                  children: [
                    (0, M.jsx)(v.Z.HeaderCell, {
                      className: "bg-token-main-surface-primary",
                      children: (0, M.jsx)(g.Z, I({}, Z.domainTableHeader)),
                    }),
                    (0, M.jsx)(v.Z.HeaderCell, {
                      className: "bg-token-main-surface-primary",
                      children: (0, M.jsx)(g.Z, I({}, Z.statusTableHeader)),
                    }),
                    (0, M.jsx)(v.Z.HeaderCell, {
                      className: "bg-token-main-surface-primary",
                    }),
                  ],
                }),
                (0, M.jsx)(v.Z.Body, {
                  children: t.map((e, t) =>
                    (0, M.jsxs)(
                      "tr",
                      {
                        onClick: () => l(e),
                        className: "cursor-pointer",
                        children: [
                          (0, M.jsx)(v.Z.Cell, { children: e.hostname }),
                          (0, M.jsx)(v.Z.Cell, { children: O.sd[e.status] }),
                          (0, M.jsx)(v.Z.Cell, {
                            textAlign: "right",
                            children: (0, M.jsx)("div", {
                              onClick: (e) => e.stopPropagation(),
                              children: (0, M.jsx)(k, {
                                onRemoveDomainClick: () => {
                                  o({ domainId: e.id });
                                },
                                onVerifyDomainClick: () => {
                                  l(e);
                                },
                              }),
                            }),
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
            (0, M.jsxs)(x.z, {
              color: "neutral",
              className: "mt-6 font-medium text-token-text-secondary",
              onClick: () => {
                s(!0);
              },
              children: [
                (0, M.jsx)(h.OvN, { className: "icon-sm" }),
                (0, M.jsx)(g.Z, I({}, Z.addDomainButton)),
              ],
            }),
            (0, M.jsx)(
              w.Z,
              {
                isOpen: i || void 0 !== a,
                onClose: () => {
                  s(!1), l(void 0);
                },
                workspaceId: n,
                currentDomain: i ? void 0 : a,
                domains: t,
              },
              null == a ? void 0 : a.id
            ),
          ],
        });
      }
      let Z = (0, b.vU)({
        ssoDropdownRemoveButtonText: {
          id: "workspaceIdentity.ssoDropdownRemoveButtonText",
          defaultMessage: "Remove Domain",
        },
        ssoDropdownVerifyButtonText: {
          id: "workspaceIdentity.ssoDropdownVerifyButtonText",
          defaultMessage: "Verify",
        },
        domainTableHeader: {
          id: "workspaceIdentity.domainTableHeader",
          defaultMessage: "Domain",
        },
        statusTableHeader: {
          id: "workspaceIdentity.statusTableHeader",
          defaultMessage: "Status",
        },
        addDomainButton: {
          id: "workspaceIdentity.addDomainButton.0",
          defaultMessage: "Add domain",
        },
      });
      var P = n(65897),
        T = n(33925),
        L = n(16244),
        D = n(36607),
        E = n(65455),
        A = n(41594);
      function B(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? B(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
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
      let R = async (e) =>
        new Promise((t, n) => {
          let o = new FileReader();
          o.readAsText(e),
            (o.onload = function (e) {
              var n;
              t(null === (n = e.target) || void 0 === n ? void 0 : n.result);
            }),
            (o.onerror = n);
        });
      function _(e) {
        let { acsId: t, hasSSO: n } = e,
          o = "https://auth0.openai.com/login/callback?connection=".concat(t),
          i = "urn:auth0:openai:".concat(t),
          s = ""
            .concat(location.host, "/auth/login?sso=true&connection=")
            .concat(t),
          a = (0, m.Z)();
        return (0, M.jsxs)(M.Fragment, {
          children: [
            (0, M.jsx)(A.Li, {
              children: (0, M.jsx)(g.Z, N({}, H.setupSSOContent)),
            }),
            (0, M.jsxs)("div", {
              className: "mb-6 flex flex-col space-y-4",
              children: [
                (0, M.jsx)(P.Z, {
                  label: a.formatMessage(H.acsURLLabel),
                  value: o,
                  onCopied: () => {
                    E.m.success(a.formatMessage(H.copiedACSToClipboard), {
                      duration: 3,
                    });
                  },
                }),
                (0, M.jsx)(P.Z, {
                  label: a.formatMessage(H.entityIDLabel),
                  value: i,
                  onCopied: () => {
                    E.m.success(a.formatMessage(H.copiedEntityToClipboard), {
                      duration: 3,
                    });
                  },
                }),
                n &&
                  (0, M.jsx)(P.Z, {
                    label: a.formatMessage(H.idpSignInURL),
                    value: s,
                    onCopied: () => {
                      E.m.success(a.formatMessage(H.copiedIDPUrlToClipboard), {
                        duration: 3,
                      });
                    },
                  }),
              ],
            }),
          ],
        });
      }
      var U =
        (((o = U || {})[(o.CREATE = 1)] = "CREATE"),
        (o[(o.EDIT = 2)] = "EDIT"),
        o);
      function F(e) {
        let { workspaceId: t, data: n, isOpen: o, onClose: i } = e,
          s = (0, m.Z)(),
          { mutateAsync: a } = (0, O.Fc)(t),
          { mutateAsync: l } = (0, O.OR)(t),
          { mutateAsync: d } = (0, O.DD)(t),
          c = (0, r.useRef)(null),
          f = null == n ? void 0 : n.connection,
          { 0: p, 1: b } = (0, r.useState)(
            null == f ? void 0 : f.sign_in_endpoint
          ),
          { 0: y, 1: j } = (0, r.useState)(null == f ? void 0 : f.cert),
          v = null === n ? U.CREATE : U.EDIT,
          w = async (e, t) => {
            let n = await a({ signInEndpoint: e, cert: t });
            await d({ connectionId: n.id, active: !0 }), i();
          },
          S =
            v === U.CREATE
              ? (0, M.jsx)(T.ZP.Button, {
                  title: s.formatMessage(H.doneButton),
                  color: "primary",
                  disabled: void 0 === p || void 0 === y,
                  onClick: async () => {
                    void 0 !== p && void 0 !== y && (await w(p, y));
                  },
                })
              : n &&
                (0, M.jsx)(T.ZP.Button, {
                  title: s.formatMessage(H.doneButton),
                  color: "primary",
                  onClick: async () => {
                    await d({
                      connectionId: null == n ? void 0 : n.id,
                      cert: y,
                      signInEndpoint: p,
                      active: !0,
                    }),
                      i();
                  },
                }),
          I =
            null === n
              ? (0, M.jsx)(T.ZP.Button, {
                  title: s.formatMessage(H.cancelButton),
                  color: "light",
                  onClick: () => i(),
                })
              : (0, M.jsx)(x.z, {
                  as: "link",
                  color: "danger",
                  className:
                    "bg-transparent font-bold text-red-500 hover:bg-transparent",
                  onClick: async () => {
                    await l({ connectionId: null == n ? void 0 : n.id }), i();
                  },
                  children: s.formatMessage(H.deleteButton),
                });
        return (0, M.jsx)(L.Z, {
          isOpen: o,
          type: "success",
          title: s.formatMessage(v === U.CREATE ? H.createTitle : H.editTitle),
          primaryButton: S,
          secondaryButton: I,
          onClose: i,
          children: (0, M.jsxs)("form", {
            onSubmit: (e) => e.preventDefault(),
            children: [
              (0, M.jsx)(O.z0, {
                children: (0, M.jsx)(g.Z, N({}, H.createInstructionsManual)),
              }),
              (0, M.jsx)("label", {
                className: "mb-2 flex items-center text-sm",
                children: (0, M.jsx)(g.Z, N({}, H.signInLabel)),
              }),
              (0, M.jsx)("div", {
                className: "mb-4",
                children: (0, M.jsx)(D.Z, {
                  className: "w-full appearance-none rounded border px-3 py-2",
                  name: "Sign-In URL",
                  type: "text",
                  placeholder: "https://your.idp.here/saml2?idpid=123456",
                  value: null != p ? p : "",
                  onChange: (e) => {
                    b(e.target.value);
                  },
                }),
              }),
              (0, M.jsxs)("div", {
                className: "mb-4",
                children: [
                  (0, M.jsxs)("div", {
                    className: "mb-2 flex items-center justify-between",
                    children: [
                      (0, M.jsx)("label", {
                        className: "text-sm",
                        children: (0, M.jsx)(g.Z, N({}, H.certLabel)),
                      }),
                      (0, M.jsx)("input", {
                        ref: c,
                        type: "file",
                        accept: ".csv,.cer,.pem,text/plain",
                        className: "hidden",
                        onChange: async (e) => {
                          var t;
                          null !== (t = e.target.files) &&
                            void 0 !== t &&
                            t[0] &&
                            j(await R(e.target.files[0]));
                        },
                      }),
                      (0, M.jsx)(x.z, {
                        color: "light",
                        onClick: () => c.current.click(),
                        children: (0, M.jsx)("div", {
                          className: "flex items-center",
                          children: (0, M.jsx)(h.Yjd, { className: "icon-sm" }),
                        }),
                      }),
                    ],
                  }),
                  (0, M.jsx)("textarea", {
                    rows: 10,
                    className: (0, u.default)(
                      "w-full resize-none overflow-y-auto rounded border border-gray-300 px-3 py-2",
                      "outline-none focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600",
                      "text-token-text-primary placeholder-gray-500 dark:bg-gray-700"
                    ),
                    placeholder: "-----BEGIN CERTIFICATE-----",
                    value: null != y ? y : "",
                    onChange: (e) => {
                      j(e.target.value);
                    },
                  }),
                ],
              }),
            ],
          }),
        });
      }
      let H = (0, b.vU)({
        setupSSOContent: {
          id: "workspaceIdentity.setupSSOContent",
          defaultMessage:
            "Anyone using email addresses with a verified domain can log in via SAML SSO.",
        },
        createInstructionsXML: {
          id: "ssoModal.createInstructionsXML",
          defaultMessage:
            "If your Identity Provider offers a metadata URL or an XML file, add it here for the quickest setup option.",
        },
        createInstructionsManual: {
          id: "ssoModal.createInstructionsManual",
          defaultMessage:
            "Copy your Sign-in endpoint (SSO URL) and the public X.509 certificate from your Identity Provider.",
        },
        createTitle: {
          id: "ssoModal.createTitle",
          defaultMessage: "Create SAML SSO Configuration",
        },
        editTitle: {
          id: "ssoModal.editTitle",
          defaultMessage: "Edit SAML SSO Configuration",
        },
        ssoMetadataLabel: {
          id: "ssoModal.ssoMetadataLabel",
          defaultMessage: "App Federation Metadata URL",
        },
        signInLabel: { id: "ssoModal.signInLabel", defaultMessage: "SSO URL" },
        certLabel: {
          id: "ssoModal.certLabel",
          defaultMessage: "X.509 Signing Certificate",
        },
        doneButton: { id: "ssoModal.doneButton", defaultMessage: "Done" },
        nextButton: { id: "ssoModal.nextButton", defaultMessage: "Next" },
        deleteButton: {
          id: "ssoModal.deleteButton",
          defaultMessage: "Delete configuration",
        },
        cancelButton: { id: "ssoModal.cancelButton", defaultMessage: "Cancel" },
        acsURLLabel: {
          id: "workspaceIdentity.acsURLLabel",
          defaultMessage: "Assertion Consumer Service (ACS) URL",
        },
        entityIDLabel: {
          id: "workspaceIdentity.entityIDLabel",
          defaultMessage: "Entity ID",
        },
        idpSignInURL: {
          id: "workspaceIdentity.idpSignInURL",
          defaultMessage: "IDP Tile URL",
        },
        copiedACSToClipboard: {
          id: "workspaceIdentity.copiedACSToClipboard",
          defaultMessage: "Copied ACS URL to clipboard",
        },
        copiedEntityToClipboard: {
          id: "workspaceIdentity.copiedEntityToClipboard",
          defaultMessage: "Copied entity ID to clipboard",
        },
        copiedIDPUrlToClipboard: {
          id: "workspaceIdentity.copiedIDPUrlToClipboard",
          defaultMessage: "Copied IDP URL to clipboard",
        },
        orDivider: { id: "workspaceIdentity.orDivider", defaultMessage: "or" },
        certExtractFailed: {
          id: "workspaceIdentity.certExtractFailed",
          defaultMessage: "Unable to find X.509 Certificate in provided XML",
        },
        ssoUrlExtractFailed: {
          id: "workspaceIdentity.ssoUrlExtractFailed",
          defaultMessage:
            "Unable to find Entity ID (sign-in endpoint) in provided XML",
        },
        ssoLearnMoreLink: {
          id: "workspaceIdentity.ssoLearnMoreLink",
          defaultMessage: "Learn more",
        },
      });
      function z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
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
      let X = (e) => {
          let { title: t, footer: n, children: o } = e;
          return (0, M.jsxs)(A.i9, {
            children: [
              (0, M.jsx)(A.A4, { children: (0, M.jsx)(g.Z, V({}, t)) }),
              (0, M.jsx)("div", { children: o }),
              (0, M.jsx)(A.Li, { children: n }),
            ],
          });
        },
        q = (e) => {
          let { icon: t, title: n, body: o, toggle: i } = e;
          return (0, M.jsxs)(A.i9, {
            children: [
              (0, M.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, M.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, M.jsx)(t, { className: "icon-sm" }),
                      (0, M.jsx)(A.A4, { children: (0, M.jsx)(g.Z, V({}, n)) }),
                    ],
                  }),
                  (0, M.jsx)("div", { children: i }),
                ],
              }),
              (0, M.jsx)(A.Li, { children: o }),
            ],
          });
        };
      function G(e) {
        var t, n, o, i;
        let { currentWorkspaceId: f } = e,
          b = (0, m.Z)(),
          { data: j, isLoading: v } = (0, O.f_)(f),
          { mutateAsync: h } = (0, O.DD)(f),
          { variables: w, mutateAsync: S } = (0, O.Ji)(f),
          I = (null == j ? void 0 : j.sso_connection) !== null,
          k =
            null == j
              ? void 0
              : j.domains.some((e) => e.status === a.pT.VERIFIED),
          Z = I ? W.ssoEditButton : W.ssoAddButton,
          { 0: P, 1: T } = (0, r.useState)(!1),
          L =
            (null == j || null === (t = j.sso_connection) || void 0 === t
              ? void 0
              : t.status) === "ACTIVE",
          D =
            null == j || null === (n = j.sso_connection) || void 0 === n
              ? void 0
              : n.id,
          E = j
            ? (0, M.jsxs)(A.$V, {
                children: [
                  (0, M.jsx)(X, {
                    title: W.domainSubtitle,
                    footer: (0, M.jsx)(M.Fragment, {
                      children: (0, M.jsx)(g.Z, V({}, W.verifyDomainInfoText)),
                    }),
                    children: (0, M.jsx)(C, {
                      domains: j.domains,
                      workspaceId: f,
                    }),
                  }),
                  (0, M.jsx)(q, {
                    icon: l,
                    title: W.autoProvisionTitle,
                    body: (0, M.jsx)(M.Fragment, {
                      children: (0, M.jsx)(g.Z, V({}, W.autoProvisionBody)),
                    }),
                    toggle: (0, M.jsx)(y.Z, {
                      disabled: !k,
                      enabled:
                        null !==
                          (o = null == w ? void 0 : w.shouldAutoProvision) &&
                        void 0 !== o
                          ? o
                          : j.should_auto_provision,
                      onChange: (e) => {
                        S({ shouldAutoProvision: e });
                      },
                      label: b.formatMessage(W.toggleAutoProvisionLabel),
                    }),
                  }),
                  (0, M.jsxs)(A.i9, {
                    children: [
                      (0, M.jsxs)("div", {
                        className: "mb-4 flex items-center justify-between",
                        children: [
                          (0, M.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, M.jsx)(d, {
                                className: (0, u.default)(
                                  "icon-sm",
                                  L
                                    ? "text-blue-600"
                                    : "text-token-text-tertiary"
                                ),
                              }),
                              (0, M.jsx)(A.A4, {
                                children: (0, M.jsx)(g.Z, V({}, W.ssoTitle)),
                              }),
                            ],
                          }),
                          I &&
                            (0, M.jsx)("div", {
                              children: (0, M.jsx)(y.Z, {
                                enabled: L,
                                onChange: () => {
                                  h({ connectionId: D, active: !L });
                                },
                                label: b.formatMessage(W.ssoToggleActive),
                              }),
                            }),
                        ],
                      }),
                      k && (0, M.jsx)(_, { acsId: j.acs_id, hasSSO: I }),
                      (0, M.jsxs)("div", {
                        children: [
                          (0, M.jsx)(x.z, {
                            as: "button",
                            color: "primary",
                            disabled: !k,
                            onClick: () => {
                              T(!0);
                            },
                            className: "font-medium",
                            children: (0, M.jsx)(g.Z, V({}, Z)),
                          }),
                          (0, M.jsx)(F, {
                            workspaceId: f,
                            data: j.sso_connection,
                            isOpen: P,
                            onClose: () => T(!1),
                          }),
                        ],
                      }),
                    ],
                  }),
                  j.sso_connection &&
                    (0, M.jsx)(q, {
                      icon: c.Z,
                      title: W.enforceSSOTitle,
                      body: (0, M.jsx)(M.Fragment, {
                        children: (0, M.jsx)(g.Z, V({}, W.enforceSSOBody)),
                      }),
                      toggle: (0, M.jsx)(y.Z, {
                        disabled: !k,
                        enabled:
                          null ===
                            (i = j.sso_connection.auth0_enforced_clients) ||
                          void 0 === i
                            ? void 0
                            : i.includes("chat"),
                        onChange: (e) => {
                          h({
                            connectionId: j.sso_connection.id,
                            enforcedClients: e ? ["chat"] : [],
                          });
                        },
                        label: b.formatMessage(W.enforceSSOLabel),
                      }),
                    }),
                ],
              })
            : null;
        return (0, M.jsxs)(M.Fragment, {
          children: [
            (0, M.jsx)(p(), {
              children: (0, M.jsx)("title", {
                children: b.formatMessage(W.title),
              }),
            }),
            (0, M.jsx)(s.yG, { title: b.formatMessage(W.title) }),
            (0, M.jsx)(s.hb, { showSpinner: v, children: E }),
          ],
        });
      }
      let W = (0, b.vU)({
        title: {
          id: "workspaceIdentity.title",
          defaultMessage: "Identity & Provisioning",
        },
        domainSubtitle: {
          id: "workspaceIdentity.domainSubtitle",
          defaultMessage: "Domain management",
        },
        ssoTitle: {
          id: "workspaceIdentity.ssoTitle",
          defaultMessage: "Single Sign On",
        },
        ssoToggleActive: {
          id: "WorkspaceIdentityPage.ssoToggleActive",
          defaultMessage: "Enable SSO for this workspace",
        },
        ssoAddButton: {
          id: "workspaceIdentity.ssoAddButton",
          defaultMessage: "Add SAML SSO",
        },
        ssoEditButton: {
          id: "workspaceIdentity.ssoEditButton",
          defaultMessage: "Edit SAML SSO",
        },
        autoProvisionTitle: {
          id: "workspaceIdentity.autoProvisionSubtitle",
          defaultMessage: "Automatic account creation",
        },
        autoProvisionBody: {
          id: "workspaceIdentity.autoProvisionBody",
          defaultMessage:
            "Automatically create ChatGPT Enterprise accounts for new users who log in with a verified domain.",
        },
        toggleAutoProvisionLabel: {
          id: "workspaceIdentity.toggleAutoProvisionLabel",
          defaultMessage: "Toggle to enable or disable auto provisioning",
        },
        enforceSSOTitle: {
          id: "workspaceIdentity.enforceSSOTitle",
          defaultMessage: "Enforce SSO log in",
        },
        enforceSSOBody: {
          id: "workspaceIdentity.enforceSSOBody",
          defaultMessage:
            "When SSO is active, users will no longer be able to use social logins and will be redirected to your SSO portal.",
        },
        enforceSSOLabel: {
          id: "workspaceIdentity.enforceSSOLabel",
          defaultMessage: "Toggle to enable or disable SSO enforcement",
        },
        verifyDomainInfoText: {
          id: "workspaceIdentity.verifyDomainInfoText",
          defaultMessage:
            "Verify ownership of an email domain to access advanced security features including single sign-on.",
        },
        learnMoreLink: {
          id: "workspaceIdentity.learnMoreLink",
          defaultMessage: "Learn more",
        },
      });
      function $(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      var J = !0;
      function K(e) {
        return (0, M.jsx)(
          G,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? $(Object(n), !0).forEach(function (t) {
                    (0, i.Z)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : $(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
            }
            return e;
          })({}, e)
        );
      }
      K.getLayout = function (e) {
        return (0, M.jsx)(s.ZP, {
          mobilePageTitle: "Identity",
          requireOwnerPrivileges: !0,
          children: e,
        });
      };
    },
    41594: function (e, t, n) {
      "use strict";
      n.d(t, {
        $V: function () {
          return p;
        },
        A4: function () {
          return g;
        },
        Li: function () {
          return y;
        },
        W8: function () {
          return v;
        },
        i$: function () {
          return m;
        },
        i9: function () {
          return x;
        },
        qQ: function () {
          return b;
        },
        vi: function () {
          return j;
        },
      });
      var o,
        i,
        s,
        a,
        r,
        l,
        d,
        c,
        u = n(73017),
        f = n(21389);
      let p = f.Z.div(
          o ||
            (o = (0, u.Z)([
              "text-base text-token-text-primary flex flex-col gap-10 my-10",
            ]))
        ),
        g = f.Z.div(i || (i = (0, u.Z)(["text-xl font-medium"]))),
        m = f.Z.div(s || (s = (0, u.Z)(["text-base font-medium"]))),
        b = f.Z.div(
          a ||
            (a = (0, u.Z)([
              "flex flex-col divide-y divide-token-border-light border-y border-token-border-light",
            ]))
        ),
        x = f.Z.div(
          r || (r = (0, u.Z)(["flex flex-col gap-3 w-full m-auto md:m-0"]))
        ),
        y = f.Z.div(l || (l = (0, u.Z)(["text-sm"]))),
        j = f.Z.div(d || (d = (0, u.Z)(["flex justify-between py-4 gap-4"]))),
        v = f.Z.hr(c || (c = (0, u.Z)(["max-w-xl border-token-border-light"])));
    },
    91524: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/identity",
        function () {
          return n(3219);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [9112, 2888, 9774, 179], function () {
      return e((e.s = 91524));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=identity-df6e3f3857210a85.js.map
