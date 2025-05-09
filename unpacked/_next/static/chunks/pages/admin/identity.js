(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2571],
  {
    7560: function (e, t, n) {
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
        i = n(18450),
        s = n(72583),
        r = n(49305),
        a = n(41641),
        l = n(77825),
        d = n(77311),
        c = n(19841),
        u = n(47247),
        f = n.n(u),
        p = n(70079),
        g = n(84692),
        m = n(9063),
        b = n(68498),
        x = n(29287),
        y = n(282),
        j = n(58819),
        v = n(11265),
        h = n(1454),
        O = n(80801),
        w = n(37259),
        S = n(35250);
      function M(e, t) {
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
            ? M(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : M(Object(n)).forEach(function (t) {
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
        return (0, S.jsxs)(j.Z.Root, {
          children: [
            (0, S.jsx)(j.Z.Trigger, {
              children: (0, S.jsx)(h.K9M, { className: "icon-sm" }),
            }),
            (0, S.jsx)(j.Z.Portal, {
              children: (0, S.jsxs)(j.Z.Content, {
                children: [
                  (0, S.jsx)(j.Z.Item, {
                    onClick: t,
                    children: (0, S.jsx)(
                      g.Z,
                      I({}, Z.ssoDropdownRemoveButtonText)
                    ),
                  }),
                  (0, S.jsx)(j.Z.Item, {
                    onClick: n,
                    children: (0, S.jsx)(
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
          o = (0, m.Z)(),
          { mutateAsync: i } = (0, w.Bd)(n),
          { 0: s, 1: r } = (0, p.useState)(!1),
          { 0: a, 1: l } = (0, p.useState)();
        return (0, S.jsxs)(S.Fragment, {
          children: [
            (0, S.jsxs)(v.Z.Root, {
              className: "w-full table-auto",
              children: [
                (0, S.jsxs)(v.Z.Header, {
                  children: [
                    (0, S.jsx)(v.Z.HeaderCell, {
                      className: "bg-token-main-surface-primary",
                      children: (0, S.jsx)(g.Z, I({}, Z.domainTableHeader)),
                    }),
                    (0, S.jsx)(v.Z.HeaderCell, {
                      className: "bg-token-main-surface-primary",
                      children: (0, S.jsx)(g.Z, I({}, Z.statusTableHeader)),
                    }),
                    (0, S.jsx)(v.Z.HeaderCell, {
                      className: "bg-token-main-surface-primary",
                    }),
                  ],
                }),
                (0, S.jsx)(v.Z.Body, {
                  children: t.map((e, t) =>
                    (0, S.jsxs)(
                      "tr",
                      {
                        onClick: () => l(e),
                        className: "cursor-pointer",
                        children: [
                          (0, S.jsx)(v.Z.Cell, { children: e.hostname }),
                          (0, S.jsx)(v.Z.Cell, {
                            children: o.formatMessage(w.sd[e.status]),
                          }),
                          (0, S.jsx)(v.Z.Cell, {
                            textAlign: "right",
                            children: (0, S.jsx)("div", {
                              onClick: (e) => e.stopPropagation(),
                              children: (0, S.jsx)(k, {
                                onRemoveDomainClick: () => {
                                  i({ domainId: e.id });
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
            (0, S.jsxs)(x.z, {
              color: "neutral",
              className: "mt-6 font-medium text-token-text-secondary",
              onClick: () => {
                r(!0);
              },
              children: [
                (0, S.jsx)(h.OvN, { className: "icon-sm" }),
                (0, S.jsx)(g.Z, I({}, Z.addDomainButton)),
              ],
            }),
            (0, S.jsx)(
              O.Z,
              {
                isOpen: s || void 0 !== a,
                onClose: () => {
                  r(!1), l(void 0);
                },
                workspaceId: n,
                currentDomain: s ? void 0 : a,
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
      var P = n(68406),
        T = n(21643),
        D = n(62456),
        L = n(67217),
        E = n(95407),
        A = n(97823);
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
          r = (0, m.Z)();
        return (0, S.jsxs)(S.Fragment, {
          children: [
            (0, S.jsx)(A.Li, {
              children: (0, S.jsx)(g.Z, N({}, H.setupSSOContent)),
            }),
            (0, S.jsxs)("div", {
              className: "mb-6 flex flex-col space-y-4",
              children: [
                (0, S.jsx)(P.Z, {
                  label: "Assertion Consumer Service (ACS) URL",
                  value: o,
                  onCopied: () => {
                    E.m.success(r.formatMessage(H.copiedACSToClipboard), {
                      duration: 3,
                    });
                  },
                }),
                (0, S.jsx)(P.Z, {
                  label: "Entity ID",
                  value: i,
                  onCopied: () => {
                    E.m.success(r.formatMessage(H.copiedEntityToClipboard), {
                      duration: 3,
                    });
                  },
                }),
                n &&
                  (0, S.jsx)(P.Z, {
                    label: r.formatMessage(H.idpSignInURL),
                    value: s,
                    onCopied: () => {
                      E.m.success(r.formatMessage(H.copiedIDPUrlToClipboard), {
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
          { mutateAsync: r } = (0, w.Fc)(t),
          { mutateAsync: a } = (0, w.OR)(t),
          { mutateAsync: l } = (0, w.DD)(t),
          d = (0, p.useRef)(null),
          u = null == n ? void 0 : n.connection,
          { 0: f, 1: b } = (0, p.useState)(
            null == u ? void 0 : u.sign_in_endpoint
          ),
          { 0: y, 1: j } = (0, p.useState)(null == u ? void 0 : u.cert),
          v = null === n ? U.CREATE : U.EDIT,
          O = async (e, t) => {
            let n = await r({ signInEndpoint: e, cert: t });
            await l({ connectionId: n.id, active: !0 }), i();
          },
          M =
            v === U.CREATE
              ? (0, S.jsx)(D.ZP.Button, {
                  title: s.formatMessage(H.doneButton),
                  color: "primary",
                  disabled: void 0 === f || void 0 === y,
                  onClick: async () => {
                    void 0 !== f && void 0 !== y && (await O(f, y));
                  },
                })
              : n &&
                (0, S.jsx)(D.ZP.Button, {
                  title: s.formatMessage(H.doneButton),
                  color: "primary",
                  onClick: async () => {
                    await l({
                      connectionId: null == n ? void 0 : n.id,
                      cert: y,
                      signInEndpoint: f,
                      active: !0,
                    }),
                      i();
                  },
                }),
          I =
            null === n
              ? (0, S.jsx)(D.ZP.Button, {
                  title: s.formatMessage(H.cancelButton),
                  color: "light",
                  onClick: () => i(),
                })
              : (0, S.jsx)(x.z, {
                  as: "link",
                  color: "danger",
                  className:
                    "bg-transparent font-bold text-red-500 hover:bg-transparent",
                  onClick: async () => {
                    await a({ connectionId: null == n ? void 0 : n.id }), i();
                  },
                  children: s.formatMessage(H.deleteButton),
                });
        return (0, S.jsx)(L.Z, {
          isOpen: o,
          type: "success",
          title: s.formatMessage(v === U.CREATE ? H.createTitle : H.editTitle),
          primaryButton: M,
          secondaryButton: I,
          onClose: i,
          children: (0, S.jsxs)("form", {
            onSubmit: (e) => e.preventDefault(),
            children: [
              (0, S.jsx)(w.z0, {
                children: (0, S.jsx)(g.Z, N({}, H.createInstructionsManual)),
              }),
              (0, S.jsx)("label", {
                className: "mb-2 flex items-center text-sm",
                children: (0, S.jsx)(g.Z, N({}, H.signInLabel)),
              }),
              (0, S.jsx)("div", {
                className: "mb-4",
                children: (0, S.jsx)(T.Z, {
                  className: "w-full appearance-none rounded border px-3 py-2",
                  name: "Sign-In URL",
                  type: "text",
                  placeholder: "https://your.idp.here/saml2?idpid=123456",
                  value: null != f ? f : "",
                  onChange: (e) => {
                    b(e.target.value);
                  },
                }),
              }),
              (0, S.jsxs)("div", {
                className: "mb-4",
                children: [
                  (0, S.jsxs)("div", {
                    className: "mb-2 flex items-center justify-between",
                    children: [
                      (0, S.jsx)("label", {
                        className: "text-sm",
                        children: (0, S.jsx)(g.Z, N({}, H.certLabel)),
                      }),
                      (0, S.jsx)("input", {
                        ref: d,
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
                      (0, S.jsx)(x.z, {
                        color: "light",
                        onClick: () => d.current.click(),
                        children: (0, S.jsx)("div", {
                          className: "flex items-center",
                          children: (0, S.jsx)(h.Yjd, { className: "icon-sm" }),
                        }),
                      }),
                    ],
                  }),
                  (0, S.jsx)("textarea", {
                    rows: 10,
                    className: (0, c.default)(
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
      function V(e, t) {
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
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? V(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : V(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let z = (e) => {
          let { title: t, footer: n, children: o } = e;
          return (0, S.jsxs)(A.i9, {
            children: [
              (0, S.jsx)(A.A4, { children: (0, S.jsx)(g.Z, X({}, t)) }),
              (0, S.jsx)("div", { children: o }),
              (0, S.jsx)(A.Li, { children: n }),
            ],
          });
        },
        q = (e) => {
          let { icon: t, title: n, body: o, toggle: i } = e;
          return (0, S.jsxs)(A.i9, {
            children: [
              (0, S.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, S.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, S.jsx)(t, { className: "icon-sm" }),
                      (0, S.jsx)(A.A4, { children: (0, S.jsx)(g.Z, X({}, n)) }),
                    ],
                  }),
                  (0, S.jsx)("div", { children: i }),
                ],
              }),
              (0, S.jsx)(A.Li, { children: o }),
            ],
          });
        };
      function G(e) {
        var t, n, o, i;
        let { currentWorkspaceId: u } = e,
          b = (0, m.Z)(),
          { data: j, isLoading: v } = (0, w.f_)(u),
          { mutateAsync: h } = (0, w.DD)(u),
          { variables: O, mutateAsync: M } = (0, w.Ji)(u),
          I = (null == j ? void 0 : j.sso_connection) !== null,
          k =
            null == j
              ? void 0
              : j.domains.some((e) => e.status === r.pT.VERIFIED),
          Z = I ? W.ssoEditButton : W.ssoAddButton,
          { 0: P, 1: T } = (0, p.useState)(!1),
          D =
            (null == j || null === (t = j.sso_connection) || void 0 === t
              ? void 0
              : t.status) === "ACTIVE",
          L =
            null == j || null === (n = j.sso_connection) || void 0 === n
              ? void 0
              : n.id,
          E = j
            ? (0, S.jsxs)(A.$V, {
                children: [
                  (0, S.jsx)(z, {
                    title: W.domainSubtitle,
                    footer: (0, S.jsx)(S.Fragment, {
                      children: (0, S.jsx)(g.Z, X({}, W.verifyDomainInfoText)),
                    }),
                    children: (0, S.jsx)(C, {
                      domains: j.domains,
                      workspaceId: u,
                    }),
                  }),
                  (0, S.jsx)(q, {
                    icon: a.Z,
                    title: W.autoProvisionTitle,
                    body: (0, S.jsx)(S.Fragment, {
                      children: (0, S.jsx)(g.Z, X({}, W.autoProvisionBody)),
                    }),
                    toggle: (0, S.jsx)(y.Z, {
                      disabled: !k,
                      enabled:
                        null !==
                          (o = null == O ? void 0 : O.shouldAutoProvision) &&
                        void 0 !== o
                          ? o
                          : j.should_auto_provision,
                      onChange: (e) => {
                        M({ shouldAutoProvision: e });
                      },
                      label: b.formatMessage(W.toggleAutoProvisionLabel),
                    }),
                  }),
                  (0, S.jsxs)(A.i9, {
                    children: [
                      (0, S.jsxs)("div", {
                        className: "mb-4 flex items-center justify-between",
                        children: [
                          (0, S.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, S.jsx)(l.Z, {
                                className: (0, c.default)(
                                  "icon-sm",
                                  D
                                    ? "text-blue-600"
                                    : "text-token-text-tertiary"
                                ),
                              }),
                              (0, S.jsx)(A.A4, {
                                children: (0, S.jsx)(g.Z, X({}, W.ssoTitle)),
                              }),
                            ],
                          }),
                          I &&
                            (0, S.jsx)("div", {
                              children: (0, S.jsx)(y.Z, {
                                enabled: D,
                                onChange: () => {
                                  h({ connectionId: L, active: !D });
                                },
                                label: b.formatMessage(W.ssoToggleActive),
                              }),
                            }),
                        ],
                      }),
                      k && (0, S.jsx)(_, { acsId: j.acs_id, hasSSO: I }),
                      (0, S.jsxs)("div", {
                        children: [
                          (0, S.jsx)(x.z, {
                            as: "button",
                            color: "primary",
                            disabled: !k,
                            onClick: () => {
                              T(!0);
                            },
                            className: "font-medium",
                            children: (0, S.jsx)(g.Z, X({}, Z)),
                          }),
                          (0, S.jsx)(F, {
                            workspaceId: u,
                            data: j.sso_connection,
                            isOpen: P,
                            onClose: () => T(!1),
                          }),
                        ],
                      }),
                    ],
                  }),
                  j.sso_connection &&
                    (0, S.jsx)(q, {
                      icon: d.Z,
                      title: W.enforceSSOTitle,
                      body: (0, S.jsx)(S.Fragment, {
                        children: (0, S.jsx)(g.Z, X({}, W.enforceSSOBody)),
                      }),
                      toggle: (0, S.jsx)(y.Z, {
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
        return (0, S.jsxs)(S.Fragment, {
          children: [
            (0, S.jsx)(f(), {
              children: (0, S.jsx)("title", {
                children: b.formatMessage(W.title),
              }),
            }),
            (0, S.jsx)(s.yG, { title: b.formatMessage(W.title) }),
            (0, S.jsx)(s.hb, { showSpinner: v, children: E }),
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
        return (0, S.jsx)(
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
        return (0, S.jsx)(s.ZP, {
          mobilePageTitle: "Identity",
          requireOwnerPrivileges: !0,
          children: e,
        });
      };
    },
    97823: function (e, t, n) {
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
        r,
        a,
        l,
        d,
        c,
        u = n(99945),
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
          r ||
            (r = (0, u.Z)([
              "flex flex-col divide-y divide-token-border-light border-y border-token-border-light",
            ]))
        ),
        x = f.Z.div(
          a || (a = (0, u.Z)(["flex flex-col gap-3 w-full m-auto md:m-0"]))
        ),
        y = f.Z.div(l || (l = (0, u.Z)(["text-sm"]))),
        j = f.Z.div(d || (d = (0, u.Z)(["flex justify-between py-4 gap-4"]))),
        v = f.Z.hr(c || (c = (0, u.Z)(["max-w-xl border-token-border-light"])));
    },
    95285: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/admin/identity",
        function () {
          return n(7560);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [4736, 2583, 2888, 9774, 179], function () {
      return e((e.s = 95285));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=identity-a7fccc1a29dbf599.js.map
