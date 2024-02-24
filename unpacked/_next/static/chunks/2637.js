"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2637],
  {
    42637: function (e, t, i) {
      i.r(t),
        i.d(t, {
          __N_SSP: function () {
            return tR;
          },
          default: function () {
            return tB;
          },
        });
      var n,
        r,
        o,
        a,
        l,
        s,
        c,
        d,
        u,
        m = i(89691),
        p = i(39827),
        h = i(25660),
        g = i(88128),
        f = i(73017),
        v = i(33925),
        x = i(16244),
        y = i(49508),
        b = i(5572),
        j = i(27282),
        w = i(91530),
        P = i.n(w),
        N = i(70079),
        T = i(21389),
        k = i(35250);
      let z = T.Z.a(c || (c = (0, f.Z)(["bold underline"]))),
        O = T.Z.textarea(
          d ||
            (d = (0, f.Z)([
              "w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32",
            ]))
        ),
        C =
          (((n = {})[(n.None = 0)] = "None"),
          (n[(n.AppealAvailable = 1)] = "AppealAvailable"),
          (n[(n.AppealSent = 2)] = "AppealSent"),
          n),
        _ =
          (((r = {})[(r.None = 0)] = "None"),
          (r[(r.PublishBlocked = 1)] = "PublishBlocked"),
          (r[(r.RemovedFromMarketplace = 2)] = "RemovedFromMarketplace"),
          (r[(r.RemovedFromPublic = 3)] = "RemovedFromPublic"),
          (r[(r.RemovedFromPrivate = 4)] = "RemovedFromPrivate"),
          (r[(r.Recategorized = 5)] = "Recategorized"),
          r),
        I =
          (((o = {})[(o.BrandName = 0)] = "BrandName"),
          (o[(o.WrongCategory = 1)] = "WrongCategory"),
          (o[(o.Other = 2)] = "Other"),
          o);
      var M =
        (((a = M || {})[(a.Initial = 0)] = "Initial"),
        (a[(a.AppealForm = 1)] = "AppealForm"),
        (a[(a.SubmittedConfirmation = 2)] = "SubmittedConfirmation"),
        a);
      function G(e) {
        let {
            gizmoId: t,
            sharingRecipient: i,
            categories: n,
            moderationType: r,
            violationType: o,
            appealAvailable: a,
            onClose: l,
            onAppealSubmitted: s,
          } = e,
          { 0: c, 1: d } = (0, N.useState)(""),
          { 0: u, 1: m } = (0, N.useState)(M.Initial),
          p = async () => {
            await y.U.postGizmoAppeal(t, c, i, n),
              m(M.SubmittedConfirmation),
              null == s || s();
          };
        switch (u) {
          case M.Initial:
            return (0, k.jsx)(x.Z, {
              title: (function (e) {
                switch (e) {
                  case _.PublishBlocked:
                    return "Your changes couldn’t be published";
                  case _.RemovedFromMarketplace:
                    return "Your GPT has been removed from the marketplace";
                  case _.RemovedFromPublic:
                    return "Your GPT has been removed from public view";
                  case _.Recategorized:
                    return "Your GPT has been recategorized";
                }
              })(r),
              isOpen: !0,
              onClose: l,
              showCloseButton: !0,
              primaryButton: (0, k.jsx)(v.ZP.Button, {
                title: "Continue",
                color: "primary",
                onClick: l,
              }),
              secondaryButton: a
                ? (0, k.jsx)(v.ZP.Button, {
                    title: "Appeal",
                    onClick: () => m(M.AppealForm),
                  })
                : void 0,
              type: "warning",
              children: (0, k.jsx)("div", {
                className: "flex flex-col gap-2 text-sm",
                children: (function (e, t) {
                  let i = t
                    ? (0, k.jsx)("p", {
                        children:
                          "Alternatively you may appeal this decision and we will get back to you as soon as possible. Or you can publish to “Only me” and use this GPT privately.",
                      })
                    : void 0;
                  switch (e) {
                    case I.BrandName:
                      return (0, k.jsxs)(k.Fragment, {
                        children: [
                          (0, k.jsxs)("p", {
                            children: [
                              "Your GPT’s name is restricted for public sharing. If this is your organization’s name, please verify your website via the",
                              " ",
                              (0, k.jsx)(z, {
                                href: "/#settings/BuilderProfile",
                                children: "Builder profile in Settings",
                              }),
                              ".",
                            ],
                          }),
                          i,
                        ],
                      });
                    case I.WrongCategory:
                      return (0, k.jsxs)(k.Fragment, {
                        children: [
                          (0, k.jsx)("p", {
                            children:
                              "Your GPT’s category is restricted for public sharing. Please select a different category.",
                          }),
                          i,
                        ],
                      });
                    case I.Other:
                      return (0, k.jsxs)(k.Fragment, {
                        children: [
                          (0, k.jsx)("p", {
                            children:
                              "Your GPT isn’t ready for public sharing yet. Usually, it’s a quick fix.",
                          }),
                          (0, k.jsx)("p", {
                            children: "Here’s what you can do",
                          }),
                          (0, k.jsxs)("ul", {
                            className: "list-disc pl-5",
                            children: [
                              (0, k.jsxs)("li", {
                                children: [
                                  (0, k.jsx)("b", {
                                    children: "Review your info:",
                                  }),
                                  " Check that your description, name, and profile picture meet our",
                                  " ",
                                  (0, k.jsx)(z, {
                                    target: "_blank",
                                    href: "https://openai.com/brand",
                                    rel: "noreferrer",
                                    children: "brand",
                                  }),
                                  " ",
                                  "and",
                                  " ",
                                  (0, k.jsx)(z, {
                                    target: "_blank",
                                    href: "https://openai.com/policies/usage-policies",
                                    rel: "noreferrer",
                                    children: "usage",
                                  }),
                                  " ",
                                  "guidelines.",
                                ],
                              }),
                              (0, k.jsxs)("li", {
                                children: [
                                  (0, k.jsx)("b", { children: "Share again:" }),
                                  " Once updated, go ahead and share your GPT.",
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsx)("p", {
                            children:
                              "Feel free to use your GPT privately for now by publishing to “only me”.",
                          }),
                          i,
                        ],
                      });
                  }
                })(o, a),
              }),
            });
          case M.AppealForm:
            return (0, k.jsx)(x.Z, {
              title: "Appeal",
              isOpen: !0,
              onClose: l,
              showCloseButton: !0,
              shouldIgnoreClickOutside: !0,
              primaryButton: (0, k.jsx)(v.ZP.Button, {
                title: "Submit",
                color: "primary",
                onClick: p,
                disabled: 0 === c.trim().length,
              }),
              secondaryButton: (0, k.jsx)(v.ZP.Button, {
                title: "Back",
                onClick: () => m(M.Initial),
              }),
              type: "warning",
              children: (0, k.jsxs)("div", {
                className: "flex flex-col gap-2 text-sm",
                children: [
                  (0, k.jsx)("p", {
                    children:
                      "Please provide a reason for why you believe this GPT doesn’t violate our policies and should be published",
                  }),
                  (0, k.jsx)(O, {
                    value: c,
                    onChange: (e) => d(e.target.value),
                  }),
                ],
              }),
            });
          case M.SubmittedConfirmation:
            return (0, k.jsx)(k.Fragment, {});
        }
      }
      function S(e) {
        let { onClose: t } = e;
        return (0, k.jsx)(x.Z, {
          title: "Appeal submitted",
          isOpen: !0,
          onClose: t,
          showCloseButton: !0,
          primaryButton: (0, k.jsx)(v.ZP.Button, {
            title: "Close",
            color: "primary",
            onClick: t,
          }),
          type: "success",
          children: (0, k.jsx)("div", {
            className: "flex flex-col gap-2 text-sm",
            children: (0, k.jsx)("div", {
              children:
                "Your appeal has been submitted. We will get back to you as soon as possible.",
            }),
          }),
        });
      }
      function E(e) {
        let { gizmoId: t, onClose: i } = e,
          { data: n } = (0, m.b9)(t, !0),
          r = async () => {
            await y.U.postGizmoCancelAppeal(t);
          };
        return (0, k.jsx)(x.Z, {
          isOpen: !0,
          onClose: P(),
          primaryButton: (0, k.jsx)(v.ZP.Button, {
            title: "Cancel appeal",
            color: "primary",
            onClick: () => {
              r(), null == i || i();
            },
          }),
          type: "warning",
          children: (0, k.jsxs)("div", {
            className: "flex flex-col gap-2 text-sm",
            children: [
              (0, k.jsx)("h2", {
                className: "text-lg font-semibold",
                children: "Reviewing your appeal",
              }),
              (0, k.jsxs)("p", {
                children: [
                  "During the review you can continue using “",
                  null == n ? void 0 : n.gizmo.display.name,
                  "” as your private GPT, but won’t be able to update it or share it with others.",
                ],
              }),
            ],
          }),
        });
      }
      function A(e) {
        let { appealState: t, onAppealClose: i, onAppealSubmitted: n } = e,
          { value: r } = (0, j.sB)(j.tz.GizmoAppeals),
          { 0: o, 1: a } = (0, N.useState)(!1);
        return o
          ? (0, k.jsx)(S, {
              onClose: () => {
                a(!1), null == n || n();
              },
            })
          : (0, k.jsxs)(k.Fragment, {
              children: [
                (null == t ? void 0 : t.showModal) == C.AppealSent &&
                  (0, k.jsx)(E, { gizmoId: t.gizmoId, onClose: i }),
                (null == t ? void 0 : t.showModal) == C.AppealAvailable &&
                  (0, k.jsx)(G, {
                    gizmoId: t.gizmoId,
                    sharingRecipient: t.sharingRecipient,
                    categories: t.categories,
                    moderationType: t.moderationType,
                    violationType: t.violationType,
                    appealAvailable: r,
                    onClose: () => (null == i ? void 0 : i()),
                    onAppealSubmitted: () => a(!0),
                  }),
              ],
            });
      }
      var L = i(42005),
        Z = i(65455),
        D = i(24668),
        U = i(9417),
        R = i(45772),
        B = i(78e3),
        F = i(30640),
        V = i(84126),
        q = i(39496),
        W = i(51533),
        K = i(91128),
        Y = i(53197),
        H = i(39352),
        J = i(81622),
        X = i(19841),
        Q = i(61888),
        $ = i(12366),
        ee = i.n($),
        et = i(70671),
        ei = i(99424),
        en = i(22433),
        er = i(7557),
        eo = i(8402),
        ea = i(32004),
        el = i(1703),
        es = i(36607),
        ec = i(24077);
      function ed(e) {
        let { content: t, button: i, onClick: n } = e;
        return (0, k.jsxs)("div", {
          className:
            "flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",
          onClick: n,
          children: [
            (0, k.jsx)("div", { className: "h-9 grow px-3 py-2", children: t }),
            (0, k.jsx)("div", { className: "w-px bg-token-border-medium" }),
            i,
          ],
        });
      }
      var eu = i(94968);
      function em(e) {
        let { onSelectExample: t } = e,
          i = (0, et.Z)(),
          n = (0, N.useRef)(null);
        return (0, k.jsxs)("select", {
          onChange: (e) => {
            "label" !== e.target.value &&
              (t(eh[parseInt(e.target.value)].spec),
              (n.current.value = "label"));
          },
          className:
            "h-8 rounded-lg border border-token-border-medium bg-transparent px-2 py-0 text-sm",
          ref: n,
          children: [
            (0, k.jsx)("option", {
              value: "label",
              children: i.formatMessage(ep.examples),
            }),
            eh.map((e, t) =>
              (0, k.jsx)(
                "option",
                { value: t, children: i.formatMessage(e.displayName) },
                t
              )
            ),
          ],
        });
      }
      let ep = (0, eu.vU)({
          examples: {
            id: "gizmo.actions.examples",
            defaultMessage: "Examples",
          },
          weatherExampleTitle: {
            id: "gizmo.actions.weatherExampleTitle",
            defaultMessage: "Weather (JSON)",
          },
          petStoreExampleTitle: {
            id: "gizmo.actions.petStoreExampleTitle",
            defaultMessage: "Pet Store (YAML)",
          },
          blankExampleTitle: {
            id: "gizmo.actions.blankExampleTitle",
            defaultMessage: "Blank Template",
          },
        }),
        eh = [
          {
            displayName: ep.weatherExampleTitle,
            spec: JSON.stringify(
              {
                openapi: "3.1.0",
                info: {
                  title: "Get weather data",
                  description: "Retrieves current weather data for a location.",
                  version: "v1.0.0",
                },
                servers: [{ url: "https://weather.example.com" }],
                paths: {
                  "/location": {
                    get: {
                      description: "Get temperature for a specific location",
                      operationId: "GetCurrentWeather",
                      parameters: [
                        {
                          name: "location",
                          in: "query",
                          description:
                            "The city and state to retrieve the weather for",
                          required: !0,
                          schema: { type: "string" },
                        },
                      ],
                      deprecated: !1,
                    },
                  },
                },
                components: { schemas: {} },
              },
              null,
              2
            ),
          },
          {
            displayName: ep.petStoreExampleTitle,
            spec: '# Taken from https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml\n\nopenapi: "3.0.0"\ninfo:\n  version: 1.0.0\n  title: Swagger Petstore\n  license:\n    name: MIT\nservers:\n  - url: https://petstore.swagger.io/v1\npaths:\n  /pets:\n    get:\n      summary: List all pets\n      operationId: listPets\n      tags:\n        - pets\n      parameters:\n        - name: limit\n          in: query\n          description: How many items to return at one time (max 100)\n          required: false\n          schema:\n            type: integer\n            maximum: 100\n            format: int32\n      responses:\n        \'200\':\n          description: A paged array of pets\n          headers:\n            x-next:\n              description: A link to the next page of responses\n              schema:\n                type: string\n          content:\n            application/json:    \n              schema:\n                $ref: "#/components/schemas/Pets"\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\n    post:\n      summary: Create a pet\n      operationId: createPets\n      tags:\n        - pets\n      responses:\n        \'201\':\n          description: Null response\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\n  /pets/{petId}:\n    get:\n      summary: Info for a specific pet\n      operationId: showPetById\n      tags:\n        - pets\n      parameters:\n        - name: petId\n          in: path\n          required: true\n          description: The id of the pet to retrieve\n          schema:\n            type: string\n      responses:\n        \'200\':\n          description: Expected response to a valid request\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Pet"\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\ncomponents:\n  schemas:\n    Pet:\n      type: object\n      required:\n        - id\n        - name\n      properties:\n        id:\n          type: integer\n          format: int64\n        name:\n          type: string\n        tag:\n          type: string\n    Pets:\n      type: array\n      maxItems: 100\n      items:\n        $ref: "#/components/schemas/Pet"\n    Error:\n      type: object\n      required:\n        - code\n        - message\n      properties:\n        code:\n          type: integer\n          format: int32\n        message:\n          type: string',
          },
          {
            displayName: ep.blankExampleTitle,
            spec: JSON.stringify(
              {
                openapi: "3.1.0",
                info: {
                  title: "Untitled",
                  description: "Your OpenAPI specification",
                  version: "v1.0.0",
                },
                servers: [{ url: "" }],
                paths: {},
                components: { schemas: {} },
              },
              null,
              2
            ),
          },
        ];
      var eg = i(15193),
        ef = i(61161),
        ev = i(38823),
        ex = i(23340);
      function ey(e) {
        let { clientThreadId: t } = e,
          i = (0, R.oq)(t),
          n = (0, ex.Bv)(t),
          r = (0, R.U0)(t, i),
          o = [...Array(r).keys()].map((e) =>
            (0, k.jsx)(
              ev.Z,
              {
                isFinalTurn: e === r - 1,
                turnIndex: e,
                clientThreadId: t,
                conversationLeafId: i,
                onChangeItemInView: Q.noop,
                onChangeRating: Q.noop,
                onRequestMoreCompletions: Q.noop,
                onRequestCompletion: Q.noop,
                currentModelId: null != n ? n : "",
              },
              e
            )
          );
        return (0, k.jsx)(k.Fragment, { children: o });
      }
      function eb(e) {
        let { clientThreadIds: t } = e;
        return (0, k.jsx)(k.Fragment, {
          children: t.map((e) => (0, k.jsx)(ey, { clientThreadId: e }, e)),
        });
      }
      var ej = i(78623),
        ew = i(50709),
        eP = i(50484),
        eN = i(18405),
        eT = i(4579),
        ek = i(8869),
        ez = i(91786),
        eO = i(91225),
        eC = i(83737),
        e_ = i(1454),
        eI = i(8844),
        eM = i(33782),
        eG = i(37345),
        eS = i(22824);
      function eE() {
        return (0, k.jsxs)("div", {
          className: "flex items-center",
          children: [
            (0, k.jsx)("div", {
              className: "border-token-border-secondary flex-grow border-b",
            }),
            (0, k.jsxs)("div", {
              className:
                "flex flex-shrink-0 items-center gap-2 px-2 py-6 text-sm text-token-text-tertiary",
              children: [(0, k.jsx)(e_.V7f, {}), "GPT updated"],
            }),
            (0, k.jsx)("div", {
              className: "border-token-border-secondary flex-grow border-b",
            }),
          ],
        });
      }
      let eA = (((l = {}).TestGizmoAction = "test_gizmo_action"), l),
        eL = new ek.V(),
        eZ = N.memo(function (e) {
          var t;
          let { gizmoEditorData: i, isSavingDraft: n, showTitle: r = !0 } = e,
            { 0: o, 1: a } = (0, N.useState)(() => (0, R.OX)()),
            { 0: l, 1: s } = (0, N.useState)([]);
          (0, N.useEffect)(() => {
            s((e) => (e[e.length - 1] === o ? e : [...e, o]));
          }, [o]);
          let c = l.slice(0, -1);
          (0, R.ax)(o, { kind: en.OL.GizmoTest, gizmo_id: i.id }),
            (0, N.useEffect)(() => {
              R.tQ.updateConversationMode(o, {
                kind: en.OL.GizmoTest,
                gizmo_id: i.id,
              });
            }, [o, i.id]);
          let d = (0, R.UL)(o),
            u =
              null === (t = i.files) || void 0 === t
                ? void 0
                : t.map((e) => e.file_id).join();
          (0, N.useEffect)(() => {
            null != R.tQ.getServerThreadId(o) && a((0, R.OX)());
          }, [i.id, i.instructions, i.welcomeMessage, i.tools, u, o]),
            (0, N.useEffect)(() => {
              (0, R.Zz)(o) &&
                R.iN.hasThread(o) &&
                d.lastModelUsed !== ex.mx &&
                R.tQ.updateInitialThreadDataForNewThread(o, ex.mx, []);
            }, [o, d, i]);
          let m = (0, eN.tN)((e) => e.activeSidebar),
            p = (0, N.useMemo)(
              () => ({ gizmoEditorData: i, mode: "test" }),
              [i]
            ),
            { 0: h, 1: g } = (0, N.useState)(0),
            f = () => {
              g((e) => e - 360);
            },
            v = i.id,
            x = (function (e) {
              var t;
              let i =
                  null === (t = (0, D.t)()) || void 0 === t
                    ? void 0
                    : t.isFree(),
                n = (0, eM.Z)(e, void 0, Q.noop, []);
              return (0, N.useCallback)(
                async (t, r, o) => {
                  let a = R.tQ.getThreadCurrentLeafId(e),
                    l = (0, eI.Z)();
                  R.tQ.updateTree(e, (e) => {
                    e.addNodeToEnd(a, {
                      id: l,
                      children: [],
                      parentId: a,
                      message: {
                        id: l,
                        author: { role: en.uU.User },
                        content: {
                          content_type: en.PX.Text,
                          parts: [
                            "Call the "
                              .concat(r, " API with the ")
                              .concat(o, " operation"),
                          ],
                        },
                        recipient: "all",
                        metadata: {
                          jit_plugin_data: {
                            from_client: {
                              user_action: {
                                data: {
                                  type: "test",
                                  operation: o,
                                  tool_name: (0, ef.VN)(r),
                                },
                              },
                            },
                          },
                        },
                      },
                    });
                  });
                  let s = {
                      conversationMode: { kind: en.OL.GizmoTest, gizmo_id: t },
                    },
                    c = [en.S.GPT_4],
                    d = (0, D.N$)(),
                    u = await (0, ez.Ob)(i),
                    m = null;
                  (0, ez.Rr)(d, u, en.OL.GizmoTest) &&
                    (m = await ez.ZP.getEnforcementToken(u));
                  let p = (0, eO.u7)(d, c),
                    h = null;
                  p && (h = await eO.ZP.getEnforcementToken(c)),
                    n({
                      model: ex.mx,
                      completionType: en.Os.Next,
                      parentNodeId: l,
                      metadata: {},
                      focusOnNewCompletion: !0,
                      arkoseToken: m,
                      turnstileToken: h,
                      preflightTime: 0,
                      completionMetadata: s,
                    });
                },
                [e, n, i]
              );
            })(o);
          return (
            (0, N.useEffect)(
              () =>
                (0, eT.LW)(eL, {
                  test_gizmo_action: (e) => {
                    let { rootDomain: t, operationName: i } = e;
                    v && x(v, t, i);
                  },
                }),
              [x, v]
            ),
            (0, k.jsx)(eG.D.Provider, {
              value: p,
              children: (0, k.jsxs)("div", {
                className: (0, X.default)(
                  "flex h-full w-full",
                  n && "cursor-wait opacity-80 transition"
                ),
                children: [
                  (0, k.jsxs)("div", {
                    className: "flex grow flex-col",
                    children: [
                      (0, k.jsx)("div", {
                        className: "relative mb-2 flex-shrink-0",
                        children: (0, k.jsx)("div", {
                          className: "flex justify-center py-1",
                          children:
                            r &&
                            (0, k.jsxs)("div", {
                              className:
                                "group flex items-center gap-2 text-lg font-medium",
                              children: [
                                (0, k.jsx)("div", { className: "icon-md" }),
                                (0, k.jsxs)("button", {
                                  onClick: () => {
                                    f(), s([]), a((0, R.OX)());
                                  },
                                  className: "flex items-center gap-2",
                                  children: [
                                    "Preview",
                                    (0, k.jsx)(eC.E.div, {
                                      className: "text-token-text-primary",
                                      animate: { rotate: h },
                                      transition: { duration: 0.3 },
                                      children: (0, k.jsx)(eo.u8, {
                                        className:
                                          "icon-md invisible group-hover:visible",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        }),
                      }),
                      (0, k.jsx)("div", {
                        className: (0, X.default)(
                          "relative grow overflow-auto px-2",
                          n && "pointer-events-none"
                        ),
                        children: (0, k.jsx)(ew.Z, {
                          clientThreadId: o,
                          hideHeader: !0,
                          renderEmptyState: (0, k.jsxs)("div", {
                            className: "relative h-full w-full",
                            children: [
                              null != c &&
                                c.length > 0 &&
                                (0, k.jsx)("div", {
                                  className: "h-full w-full opacity-20",
                                  children: (0, k.jsxs)(eP.I, {
                                    children: [
                                      (0, k.jsx)(eb, { clientThreadIds: c }),
                                      (0, k.jsx)(eE, {}),
                                    ],
                                  }),
                                }),
                              (0, k.jsx)("div", {
                                className:
                                  "absolute left-0 top-0 h-full w-full",
                                children: (0, k.jsx)(eS.r, {
                                  gizmo: i,
                                  isOwner: !0,
                                  hideOwner: !0,
                                }),
                              }),
                            ],
                          }),
                          prependThreadChildren:
                            c.length > 0 &&
                            (0, k.jsxs)(k.Fragment, {
                              children: [
                                (0, k.jsx)("div", {
                                  className: "opacity-50",
                                  children: (0, k.jsx)(eb, {
                                    clientThreadIds: c,
                                  }),
                                }),
                                (0, k.jsx)(eE, {}),
                              ],
                            }),
                        }),
                      }),
                    ],
                  }),
                  "debug" === m &&
                    (0, k.jsx)(ej.fv, {
                      clientThreadId: o,
                      slideOver: !1,
                      onClose: () => eN.vm.toggleActiveSidebar("debug"),
                      isOpen: !0,
                    }),
                ],
              }),
            })
          );
        });
      var eD = i(28373);
      let eU = ["oauth_client_id", "oauth_client_secret"],
        eR = ["api_key"];
      function eB(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function eF(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eB(Object(i), !0).forEach(function (t) {
                (0, p.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : eB(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      let eV = "".concat(
        "https://chat.openai.com",
        "/g/g-TYEliDU6A-actionsgpt"
      );
      function eq(e) {
        let { children: t } = e;
        return (0, k.jsx)("label", {
          className: "mb-1 block text-sm font-medium",
          children: t,
        });
      }
      function eW(e) {
        var t, i, n, r, o, a, l, s, c, d, u, m, p, h;
        let { jitPluginTool: g, onUpdateTool: f, onClose: v } = e,
          { 0: y, 1: b } = (0, N.useState)({
            apiKeyValue: "",
            oauthClientIdValue: "",
            oauthClientSecretValue: "",
            oauthAuthUrlValue:
              null !==
                (t =
                  null == g ||
                  null === (i = g.metadata) ||
                  void 0 === i ||
                  null === (i = i.auth) ||
                  void 0 === i
                    ? void 0
                    : i.client_url) && void 0 !== t
                ? t
                : "",
            oauthTokenUrlValue:
              null !==
                (n =
                  null == g ||
                  null === (r = g.metadata) ||
                  void 0 === r ||
                  null === (r = r.auth) ||
                  void 0 === r
                    ? void 0
                    : r.authorization_url) && void 0 !== n
                ? n
                : "",
            oauthScopeValue:
              null !==
                (o =
                  null == g ||
                  null === (a = g.metadata) ||
                  void 0 === a ||
                  null === (a = a.auth) ||
                  void 0 === a
                    ? void 0
                    : a.scope) && void 0 !== o
                ? o
                : "",
            authTypeValue:
              null !==
                (l =
                  null == g ||
                  null === (s = g.metadata) ||
                  void 0 === s ||
                  null === (s = s.auth) ||
                  void 0 === s
                    ? void 0
                    : s.type) && void 0 !== l
                ? l
                : en.Jv.None,
            httpAuthTypeValue:
              null !==
                (c =
                  null == g ||
                  null === (d = g.metadata) ||
                  void 0 === d ||
                  null === (d = d.auth) ||
                  void 0 === d
                    ? void 0
                    : d.authorization_type) && void 0 !== c
                ? c
                : "basic",
            customHeaderValue:
              null !==
                (u =
                  null == g ||
                  null === (m = g.metadata) ||
                  void 0 === m ||
                  null === (m = m.auth) ||
                  void 0 === m
                    ? void 0
                    : m.custom_auth_header) && void 0 !== u
                ? u
                : "",
            tokenExchangeMethodValue:
              null !==
                (p =
                  null == g ||
                  null === (h = g.metadata) ||
                  void 0 === h ||
                  null === (h = h.auth) ||
                  void 0 === h
                    ? void 0
                    : h.token_exchange_method) && void 0 !== p
                ? p
                : "default_post",
          });
        function j(e) {
          b((t) => eF(eF({}, t), e));
        }
        return (0, k.jsxs)(x.Z, {
          type: "success",
          isOpen: !0,
          title: "Authentication",
          primaryButton: (0, k.jsx)(er.z, {
            color: "dark",
            onClick: () => {
              f(
                y.authTypeValue === en.Jv.None
                  ? { type: en.Jv.None }
                  : y.authTypeValue === en.Jv.OAuth
                    ? {
                        type: en.Jv.OAuth,
                        client_url: y.oauthAuthUrlValue,
                        authorization_url: y.oauthTokenUrlValue,
                        authorization_content_type:
                          "application/x-www-form-urlencoded",
                        scope: y.oauthScopeValue,
                        token_exchange_method: y.tokenExchangeMethodValue,
                        oauth_client_id: y.oauthClientIdValue,
                        oauth_client_secret: y.oauthClientSecretValue,
                      }
                    : {
                        type: en.Jv.ServiceHTTP,
                        authorization_type: y.httpAuthTypeValue,
                        custom_auth_header: y.customHeaderValue,
                        api_key: y.apiKeyValue,
                      }
              ),
                v();
            },
            children: "Save",
          }),
          secondaryButton: (0, k.jsx)(er.z, {
            color: "neutral",
            onClick: v,
            children: "Cancel",
          }),
          onClose: v,
          children: [
            (0, k.jsxs)("div", {
              className: "mb-4",
              children: [
                (0, k.jsx)(eq, { children: "Authentication Type" }),
                (0, k.jsxs)(ec.Z.Root, {
                  onValueChange: (e) => {
                    j({ authTypeValue: e });
                  },
                  value: y.authTypeValue,
                  className: "flex gap-4",
                  children: [
                    (0, k.jsx)(eD.Xb, { label: "None", value: en.Jv.None }),
                    (0, k.jsx)(eD.Xb, {
                      label: "API Key",
                      value: en.Jv.ServiceHTTP,
                    }),
                    (0, k.jsx)(eD.Xb, { label: "OAuth", value: en.Jv.OAuth }),
                  ],
                }),
              ],
            }),
            "service_http" === y.authTypeValue
              ? (0, k.jsxs)(k.Fragment, {
                  children: [
                    (0, k.jsx)(eq, { children: "API Key" }),
                    (0, k.jsx)(eg.yt, {
                      placeholder: "<HIDDEN>",
                      type: "password",
                      value: y.apiKeyValue,
                      onChange: (e) => {
                        j({ apiKeyValue: e.target.value });
                      },
                      className: "mb-2",
                    }),
                    (0, k.jsx)(eq, { children: "Auth Type" }),
                    (0, k.jsxs)(ec.Z.Root, {
                      className: "mb-2 flex gap-6 overflow-hidden rounded-lg",
                      value: y.httpAuthTypeValue,
                      required: !0,
                      onValueChange: (e) => {
                        j({ httpAuthTypeValue: e });
                      },
                      children: [
                        (0, k.jsx)(eD.Xb, { value: "basic", label: "Basic" }),
                        (0, k.jsx)(eD.Xb, { value: "bearer", label: "Bearer" }),
                        (0, k.jsx)(eD.Xb, { value: "custom", label: "Custom" }),
                      ],
                    }),
                    "custom" === y.httpAuthTypeValue &&
                      (0, k.jsxs)("div", {
                        className: "mt-2",
                        children: [
                          (0, k.jsx)(eq, { children: "Custom Header Name" }),
                          (0, k.jsx)(eg.yt, {
                            value: y.customHeaderValue,
                            onChange: (e) => {
                              j({ customHeaderValue: e.target.value });
                            },
                            className: "mb-2",
                            placeholder: "X-Api-Key",
                          }),
                        ],
                      }),
                  ],
                })
              : "oauth" === y.authTypeValue
                ? (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsx)(eq, { children: "Client ID" }),
                      (0, k.jsx)(eg.yt, {
                        placeholder: "<HIDDEN>",
                        type: "password",
                        value: y.oauthClientIdValue,
                        onChange: (e) => {
                          j({ oauthClientIdValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, k.jsx)(eq, { children: "Client Secret" }),
                      (0, k.jsx)(eg.yt, {
                        placeholder: "<HIDDEN>",
                        type: "password",
                        value: y.oauthClientSecretValue,
                        onChange: (e) => {
                          j({ oauthClientSecretValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, k.jsx)(eq, { children: "Authorization URL" }),
                      (0, k.jsx)(eg.yt, {
                        value: y.oauthAuthUrlValue,
                        onChange: (e) => {
                          j({ oauthAuthUrlValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, k.jsx)(eq, { children: "Token URL" }),
                      (0, k.jsx)(eg.yt, {
                        value: y.oauthTokenUrlValue,
                        onChange: (e) => {
                          j({ oauthTokenUrlValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, k.jsx)(eq, { children: "Scope" }),
                      (0, k.jsx)(eg.yt, {
                        value: y.oauthScopeValue,
                        onChange: (e) => {
                          j({ oauthScopeValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, k.jsx)(eq, { children: "Token Exchange Method" }),
                      (0, k.jsxs)(ec.Z.Root, {
                        value: y.tokenExchangeMethodValue,
                        required: !0,
                        onValueChange: (e) => {
                          j({ tokenExchangeMethodValue: e });
                        },
                        children: [
                          (0, k.jsx)(eD.Xb, {
                            value: "default_post",
                            label: "Default (POST request)",
                          }),
                          (0, k.jsx)(eD.Xb, {
                            value: "basic_auth_header",
                            label: "Basic authorization header",
                          }),
                        ],
                      }),
                    ],
                  })
                : null,
          ],
        });
      }
      function eK(e) {
        let { onImport: t, onClose: i } = e,
          { 0: n, 1: r } = (0, N.useState)(""),
          { 0: o, 1: a } = (0, N.useState)(!1);
        async function l() {
          var e;
          let r;
          try {
            r = new URL(n);
          } catch {
            return;
          }
          if (null !== (e = r) && void 0 !== e && e.hostname) {
            a(!0);
            try {
              let e = await y.U.fetchOpenAPISpec(n);
              t(e.content), i();
            } finally {
              a(!1);
            }
          }
        }
        return (0, k.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            (0, k.jsx)("input", {
              name: "url",
              value: n,
              onChange: (e) => {
                r(e.target.value);
              },
              placeholder: "https://...",
              className:
                "h-8 rounded border border-token-border-light px-2 text-sm",
              autoFocus: !0,
            }),
            (0, k.jsx)(eD.cY, {
              color: "dark",
              loading: o,
              onClick: l,
              children: "Import",
            }),
            (0, k.jsx)(eD.cY, {
              color: "neutral",
              onClick: i,
              children: "Cancel",
            }),
          ],
        });
      }
      function eY(e) {
        let { rootDomain: t, operations: i } = e;
        return null == i || 0 === i.length
          ? (0, k.jsx)("div", {
              className: "text-sm text-token-text-tertiary",
              children: "Operations in your schema will show here.",
            })
          : (0, k.jsx)("table", {
              className: "w-full text-sm",
              children: (0, k.jsxs)("tbody", {
                children: [
                  (0, k.jsxs)("tr", {
                    className:
                      "border-b border-token-border-light text-left text-xs text-token-text-tertiary",
                    children: [
                      (0, k.jsx)("th", {
                        className: "py-1 font-normal",
                        children: "Name",
                      }),
                      (0, k.jsx)("th", {
                        className: "py-1 font-normal",
                        children: "Method",
                      }),
                      (0, k.jsx)("th", {
                        className: "py-1 font-normal",
                        children: "Path",
                      }),
                      (0, k.jsx)("th", { className: "py-1 font-normal" }),
                    ],
                  }),
                  i.map((e) =>
                    (0, k.jsxs)(
                      "tr",
                      {
                        className: "border-b border-token-border-light",
                        children: [
                          (0, k.jsx)("td", {
                            className: "py-2",
                            children: e.operationName,
                          }),
                          (0, k.jsx)("td", {
                            className: "py-2 uppercase",
                            children: e.method,
                          }),
                          (0, k.jsx)("td", {
                            className: "py-2",
                            children: e.path,
                          }),
                          (0, k.jsx)("td", {
                            className: "py-2",
                            children: (0, k.jsx)(eD.cY, {
                              color: "neutral",
                              onClick: () => {
                                t &&
                                  eL.publish({
                                    kind: eA.TestGizmoAction,
                                    rootDomain: t,
                                    operationName: e.operationName,
                                  });
                              },
                              children: "Test",
                            }),
                          }),
                        ],
                      },
                      e.operationName
                    )
                  ),
                ],
              }),
            });
      }
      function eH(e) {
        let { validationResponse: t } = e;
        return (0, k.jsxs)("div", {
          children: [
            (0, k.jsx)(eg.lX, { label: "Available actions" }),
            (0, k.jsx)(eY, {
              rootDomain: t.success ? t.spec.root_domain : void 0,
              operations: t.success ? t.spec.operations : void 0,
            }),
          ],
        });
      }
      function eJ(e) {
        var t, i, n, r, o, a, l;
        let {
            currentlyEditingActionDomain: s,
            gizmoEditorData: c,
            updateGizmo: d,
            onClose: u,
          } = e,
          { 0: m, 1: p } = (0, N.useState)(s),
          g = (0, N.useRef)(m);
        (0, N.useEffect)(() => {
          g.current = m;
        }, [m]);
        let f =
            null == c || null === (t = c.tools) || void 0 === t
              ? void 0
              : t.find(
                  (e) => e.type === h.qK.JIT_PLUGIN && e.metadata.domain === m
                ),
          { 0: v } = (0, N.useState)(() => null == f),
          x =
            null !==
              (i =
                null == f || null === (n = f.metadata) || void 0 === n
                  ? void 0
                  : n.raw_spec) && void 0 !== i
              ? i
              : "",
          { 0: b, 1: j } = (0, N.useState)(!1),
          { 0: w, 1: P } = (0, N.useState)(!1);
        function T(e) {
          d((t) =>
            eF(
              eF({}, t),
              {},
              {
                tools: f
                  ? t.tools.map((t) =>
                      t.type === h.qK.JIT_PLUGIN && t.metadata.domain === m
                        ? eF(
                            eF({}, t),
                            {},
                            {
                              metadata: eF(
                                eF(eF({}, t.metadata), e),
                                {},
                                { json_schema: void 0 }
                              ),
                            }
                          )
                        : t
                    )
                  : [
                      ...t.tools,
                      {
                        type: h.qK.JIT_PLUGIN,
                        metadata: eF(
                          eF(
                            {
                              raw_spec: "",
                              domain: null != m ? m : "Unknown domain",
                              action_id: "",
                            },
                            e
                          ),
                          {},
                          { json_schema: void 0 }
                        ),
                      },
                    ],
              }
            )
          );
        }
        let { 0: z, 1: O } = (0, N.useState)(),
          { 0: C } = (0, N.useState)(() =>
            (0, Q.debounce)(async function (e) {
              let t = await y.U.validateOpenAPISpec(e);
              O(t);
              let i = t.success ? t.spec.root_domain : void 0;
              if (i) {
                if (i !== g.current) {
                  var n;
                  if (
                    null == c || null === (n = c.tools) || void 0 === n
                      ? void 0
                      : n.find(
                          (e) =>
                            e.type === h.qK.JIT_PLUGIN &&
                            e.metadata.domain === i
                        )
                  ) {
                    O({
                      success: !1,
                      errors: [
                        "Action sets cannot have duplicate domains - ".concat(
                          i,
                          " already exists on another action"
                        ),
                      ],
                    });
                    return;
                  }
                }
                d((e) =>
                  eF(
                    eF({}, e),
                    {},
                    {
                      tools: e.tools.map((e) =>
                        e.type === h.qK.JIT_PLUGIN &&
                        e.metadata.domain === g.current
                          ? eF(
                              eF({}, e),
                              {},
                              {
                                metadata: eF(
                                  eF({}, e.metadata),
                                  {},
                                  { domain: i }
                                ),
                              }
                            )
                          : e
                      ),
                    }
                  )
                ),
                  p(i);
              }
              if (t.success && t.known_auth && t.known_privacy_policy && f) {
                let e = eF({ type: en.Jv.OAuth }, t.known_auth);
                (0, Q.isEqual)(f.metadata.auth, e) ||
                  T({ auth: eF({ type: en.Jv.OAuth }, t.known_auth) }),
                  f.metadata.privacy_policy_url !== t.known_privacy_policy &&
                    T({ privacy_policy_url: t.known_privacy_policy });
              }
            }, 1e3)
          ),
          _ = null != z ? (z.success ? z.warnings : z.errors) : void 0;
        (0, N.useEffect)(() => {
          "" === x ? (O(void 0), C.cancel()) : C(x);
        }, [C, x]);
        let I = (e) => {
          try {
            T({ raw_spec: JSON.stringify(JSON.parse(e), null, 2) });
          } catch {
            try {
              T({
                raw_spec: el.ZP.stringify(el.ZP.parse(e), {
                  lineWidth: 120,
                  indent: 2,
                }),
              });
            } catch {}
          }
        };
        return (0, k.jsxs)("div", {
          className: "h-full overflow-auto px-4 pb-12 text-sm",
          children: [
            (0, k.jsxs)("div", {
              className:
                "relative flex flex-col items-center px-16 py-6 text-center",
              children: [
                (0, k.jsx)("div", {
                  className: "absolute left-0 top-6",
                  children: (0, k.jsx)(er.z, {
                    color: "neutral",
                    onClick: u,
                    children: (0, k.jsx)(eo.L7, { className: "icon-md" }),
                  }),
                }),
                null != f &&
                  (0, k.jsx)("div", {
                    className: "absolute right-0 top-6",
                    children: (0, k.jsx)(er.z, {
                      color: "neutral",
                      onClick: () => {
                        window.confirm(
                          "Are you sure you want to delete this action?"
                        ) &&
                          (d((e) =>
                            eF(
                              eF({}, e),
                              {},
                              {
                                tools: e.tools.filter(
                                  (e) =>
                                    e.type !== h.qK.JIT_PLUGIN ||
                                    e.metadata.domain !== m
                                ),
                              }
                            )
                          ),
                          u());
                      },
                      className: "text-red-500",
                      children: (0, k.jsx)(eo.a_, { className: "icon-md" }),
                    }),
                  }),
                (0, k.jsx)("div", {
                  className: "text-xl font-medium",
                  children: v ? "Add actions" : "Edit actions",
                }),
                (0, k.jsx)("div", {
                  className: "text-sm text-token-text-tertiary",
                  children:
                    "Let your GPT retrieve information or take actions outside of ChatGPT.",
                }),
                (0, k.jsx)("div", {
                  className: "text-sm text-token-text-tertiary",
                  children: (0, k.jsx)("a", {
                    href: "https://help.openai.com/en/articles/8554397-creating-a-gpt",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "font-medium",
                    children: "Learn more.",
                  }),
                }),
              ],
            }),
            (0, k.jsxs)(eg.hj, {
              className: "relative",
              children: [
                (0, k.jsx)(eg.lX, { label: "Authentication" }),
                (0, k.jsx)(ed, {
                  onClick: () => {
                    j(!0);
                  },
                  content: (function (e) {
                    switch (e) {
                      case en.Jv.None:
                        return "None";
                      case en.Jv.OAuth:
                        return "OAuth";
                      case en.Jv.ServiceHTTP:
                        return "API Key";
                    }
                  })(
                    null !==
                      (r =
                        null == f ||
                        null === (o = f.metadata) ||
                        void 0 === o ||
                        null === (o = o.auth) ||
                        void 0 === o
                          ? void 0
                          : o.type) && void 0 !== r
                      ? r
                      : en.Jv.None
                  ),
                  button: (0, k.jsx)("button", {
                    color: "neutral",
                    className: "flex items-center gap-2 px-3",
                    children: (0, k.jsx)(eo.RR, { className: "icon-sm" }),
                  }),
                }),
                b &&
                  (0, k.jsx)(eW, {
                    jitPluginTool: f,
                    onUpdateTool: (e) => {
                      switch (e.type) {
                        case en.Jv.None:
                          T({ auth: { type: en.Jv.None } });
                          break;
                        case en.Jv.OAuth: {
                          let { oauth_client_id: t, oauth_client_secret: i } =
                            e;
                          T({
                            auth: (0, ei.Z)(e, eU),
                            oauth_client_id: t,
                            oauth_client_secret: i,
                          });
                          break;
                        }
                        case en.Jv.ServiceHTTP: {
                          let { api_key: t } = e;
                          T({ auth: (0, ei.Z)(e, eR), api_key: t });
                        }
                      }
                    },
                    onClose: () => {
                      j(!1);
                    },
                  }),
              ],
            }),
            (0, k.jsxs)("div", {
              children: [
                (0, k.jsxs)("div", {
                  className: "mb-1 flex h-8 items-center justify-between",
                  children: [
                    (0, k.jsx)("label", {
                      className: "font-medium text-token-text-primary",
                      children: "Schema",
                    }),
                    (0, k.jsx)("div", {
                      className: "flex items-center",
                      children: w
                        ? (0, k.jsx)(eK, {
                            onImport: (e) => {
                              I(e);
                            },
                            onClose: () => {
                              P(!1);
                            },
                          })
                        : (0, k.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, k.jsx)(eD.cY, {
                                color: "neutral",
                                onClick: () => {
                                  P(!0);
                                },
                                children: "Import from URL",
                              }),
                              (0, k.jsx)(em, {
                                onSelectExample: (e) => {
                                  T({ raw_spec: e });
                                },
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
                (0, k.jsxs)("div", {
                  className:
                    "mb-8 overflow-hidden rounded-lg border border-token-border-light",
                  children: [
                    (0, k.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, k.jsx)("textarea", {
                          value: x,
                          onChange: (e) => {
                            T({ raw_spec: e.target.value });
                          },
                          spellCheck: !1,
                          placeholder: "Enter your OpenAPI schema here",
                          className:
                            "block h-96 w-full border-none bg-transparent p-2 font-mono text-xs text-token-text-primary",
                        }),
                        (0, k.jsx)("div", {
                          className: "absolute bottom-2 right-2 flex gap-2",
                          children:
                            "" !== x
                              ? (0, k.jsx)(eD.cY, {
                                  onClick: () => {
                                    I(x);
                                  },
                                  children: "Format",
                                })
                              : (0, k.jsxs)(eD.cY, {
                                  as: "a",
                                  to: eV,
                                  openNewTab: !0,
                                  children: [
                                    (0, k.jsx)(ea.Z, {
                                      id: "gizmo.actions.actionsGptHelp",
                                      defaultMessage:
                                        "Get help from ActionsGPT",
                                    }),
                                    (0, k.jsx)(eo.fe, { className: "icon-md" }),
                                  ],
                                }),
                        }),
                      ],
                    }),
                    null != _ &&
                      (null == _ ? void 0 : _.length) > 0 &&
                      (0, k.jsx)("div", {
                        className:
                          "border-t border-token-border-light p-2 text-red-500",
                        children: _.map((e, t) =>
                          (0, k.jsx)("div", { children: e }, t)
                        ),
                      }),
                  ],
                }),
              ],
            }),
            null != z && (0, k.jsx)(eH, { validationResponse: z }),
            (0, k.jsxs)("div", {
              className: "mt-4",
              children: [
                (0, k.jsx)(eg.lX, {
                  label: "Privacy policy",
                  description:
                    "Privacy policy is required for all public GPTs.",
                }),
                (0, k.jsx)(es.Z, {
                  name: "privacyPolicyUrl",
                  value:
                    null !==
                      (a =
                        null == f || null === (l = f.metadata) || void 0 === l
                          ? void 0
                          : l.privacy_policy_url) && void 0 !== a
                      ? a
                      : "",
                  placeholder: "https://api.example-weather-app.com/privacy",
                  onChange: (e) => {
                    T({ privacy_policy_url: e.target.value });
                  },
                }),
              ],
            }),
          ],
        });
      }
      var eX = i(43383),
        eQ = i(82245),
        e$ = i(99715),
        e0 = i(22189),
        e1 = i(5667),
        e2 = i(74908),
        e3 = i(68832),
        e4 = i(47559),
        e8 = i(93031);
      function e5(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function e7(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e5(Object(i), !0).forEach(function (t) {
                (0, p.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : e5(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      function e9(e) {
        window.history.length > 1 ? e.back() : e.push((0, q.L7)());
      }
      function e6(e) {
        var t, i, n;
        let {
            gizmo: r,
            publishedGizmo: o,
            promoteGizmo: a,
            appealGizmo: l,
            setStep: s,
            showActionsModal: c,
          } = e,
          { 0: d, 1: u } = (0, N.useState)(!1),
          p = (0, B.ec)(B.F_.isBusinessWorkspace),
          g = (0, et.Z)(),
          { 0: f, 1: v } = (0, N.useState)(
            (0, m.Sg)(r)
              ? p
                ? b.Zz.Workspace
                : b.Zz.Marketplace
              : r.sharingRecipient
          ),
          x = (0, N.useMemo)(
            () =>
              (null == o ? void 0 : o.gizmo.sharing_targets) == null ||
              o.gizmo.sharing_targets.some(
                (e) => e.recipient === f && e.allowed
              ),
            [null == o ? void 0 : o.gizmo.sharing_targets, f]
          ),
          { data: w, isLoading: P } = (0, m.WL)(),
          { 0: T, 1: z } = (0, N.useState)(
            null != o && o.gizmo.display.categories.length > 0
              ? o.gizmo.display.categories[0]
              : void 0
          );
        (0, N.useEffect)(() => {
          z(null == o ? void 0 : o.gizmo.display.categories[0]);
        }, [null == o ? void 0 : o.gizmo.display.categories]);
        let { 0: O, 1: C } = (0, N.useState)(void 0),
          _ = (0, N.useRef)(
            (0, Q.throttle)((e, t) => y.U.generateCategory(e, t), 1e3)
          ),
          I =
            null != w && w.is_verified
              ? void 0
              : g.formatMessage(td.displayNameRequiredHint);
        f !== b.Zz.Marketplace || null == I || P || v(b.Zz.Link);
        let M =
            p &&
            !(
              null !== (t = r.sharingTargets) &&
              void 0 !== t &&
              t.some((e) => e.recipient === b.Zz.Link)
            ),
          G = (0, e8.bw)(r, f, T),
          S = G.includes(e8.hs.MissingPublicActionPrivacyPolicyURL),
          E = r.tools.find(
            (e) => e.type === h.qK.JIT_PLUGIN && !e.metadata.privacy_policy_url
          ),
          A = (0, B.ec)((e) => e.currentWorkspace),
          L = (0, D.hz)(),
          Z = (0, m.Z1)();
        (0, N.useEffect)(() => {
          if (!(null != L && L.includes(U.L0.GizmoStore))) {
            z("other");
            return;
          }
          let e = !0;
          return (
            (async () => {
              try {
                if (null != T) return;
                let t = await _.current(r.name, r.instructions);
                e && null == T && (t ? z(t.id) : C(!0));
              } catch (t) {
                e && null == T && C(!0);
              }
            })(),
            () => {
              e = !1;
            }
          );
        }, [r.instructions, r.name, L, T]);
        let R = null == L ? void 0 : L.includes(U.L0.GizmoStore),
          { value: F } = (0, j.sB)(j.tz.GizmoAppeals);
        return (0, k.jsxs)("div", {
          children: [
            (0, k.jsx)("div", {
              className: "mb-2 text-sm font-medium text-token-text-tertiary",
              children: (0, k.jsx)(ea.Z, e7({}, td.publishTo)),
            }),
            (0, k.jsxs)("div", {
              className: "flex flex-col gap-3 text-sm",
              children: [
                (0, k.jsxs)(W.fC, {
                  value: f,
                  onValueChange: (e) => v(e),
                  className: "space-y-2",
                  children: [
                    r.sharingTargets &&
                      r.sharingTargets.map((e, t) =>
                        (0, k.jsx)(
                          eD.Xb,
                          {
                            value: e.recipient,
                            disabled:
                              e.recipient === b.Zz.Marketplace && null != I,
                            tooltipText:
                              e.recipient === b.Zz.Marketplace
                                ? (null != I ? I : R)
                                  ? g.formatMessage(
                                      td.publicSharingHintStoreEnabled
                                    )
                                  : g.formatMessage(td.publicSharingHint)
                                : void 0,
                            label: (0, ef.MI)(e.recipient, A, g),
                          },
                          t
                        )
                      ),
                    M &&
                      (0, k.jsxs)(k.Fragment, {
                        children: [
                          (0, k.jsx)(eD.Xb, {
                            value: b.Zz.Link,
                            disabled: !0,
                            tooltipText: g.formatMessage(
                              td.workspaceDisabledHint
                            ),
                            label: (0, ef.MI)(b.Zz.Link, A, g),
                          }),
                          (0, k.jsx)(eD.Xb, {
                            value: b.Zz.Marketplace,
                            disabled: !0,
                            tooltipText: g.formatMessage(
                              td.workspaceDisabledHint
                            ),
                            label: (0, ef.MI)(b.Zz.Marketplace, A, g),
                          }),
                        ],
                      }),
                  ],
                }),
                S &&
                  (0, k.jsx)("div", {
                    className: "text-xs text-red-500",
                    children: (0, k.jsx)(
                      ea.Z,
                      e7(
                        e7({}, td.actionNeedsPrivacyPolicyURL),
                        {},
                        {
                          values: {
                            fixlink: (e) =>
                              (0, k.jsx)("button", {
                                onClick: () => {
                                  c(null == E ? void 0 : E.metadata.action_id);
                                },
                                className: "underline",
                                children: e,
                              }),
                          },
                        }
                      )
                    ),
                  }),
                f !== b.Zz.Private &&
                  (0, k.jsx)(e4.QT, {
                    gizmoAvatar: r.profilePictureUrl,
                    gizmoName: r.name,
                    canEdit: !0,
                  }),
                f === b.Zz.Marketplace &&
                  (null == L ? void 0 : L.includes(U.L0.GizmoStore)) &&
                  (O
                    ? (0, k.jsx)("div", {
                        className: "text-xs text-red-500",
                        children: (0, k.jsx)(ea.Z, e7({}, td.categoryError)),
                      })
                    : (0, k.jsxs)(k.Fragment, {
                        children: [
                          (0, k.jsxs)("div", {
                            className:
                              "flex items-center justify-between text-sm font-medium text-token-text-tertiary",
                            children: [
                              (0, k.jsx)(ea.Z, e7({}, td.categoryLabel)),
                              (0, k.jsx)(e3.u, {
                                label: (0, k.jsx)("span", {
                                  className: "w-36 text-xs",
                                  children: (0, k.jsx)(
                                    ea.Z,
                                    e7({}, td.categoryLabelTooltip)
                                  ),
                                }),
                                side: "top",
                                children: (0, k.jsx)(eo.VX, {
                                  className: "icon-sm",
                                }),
                              }),
                            ],
                          }),
                          (0, k.jsx)(ts, {
                            category: null != T ? T : "",
                            categories:
                              null !==
                                (i =
                                  null === (n = Z.data) || void 0 === n
                                    ? void 0
                                    : n.categories) && void 0 !== i
                                ? i
                                : [],
                            setCategory: z,
                          }),
                        ],
                      })),
                x
                  ? (0, k.jsx)(eD.cY, {
                      color: "primary",
                      disabled: G.length > 0,
                      loading: d,
                      onClick: async () => {
                        try {
                          u(!0);
                          let e = await a(f, T);
                          if (null == e) return;
                          1 === e.gizmo.live_version
                            ? ee().push((0, m.m_)(e))
                            : s({ type: "published", publishedGizmo: e });
                        } finally {
                          u(!1);
                        }
                      },
                      className: "w-full",
                      children: (0, k.jsx)(ea.Z, e7({}, td.privacyConfirm)),
                    })
                  : F
                    ? (0, k.jsxs)(k.Fragment, {
                        children: [
                          (0, k.jsx)("div", {
                            className:
                              "flex items-center justify-between text-sm text-token-text-secondary",
                            children: (0, k.jsx)(
                              ea.Z,
                              e7({}, td.appealNeededLabel)
                            ),
                          }),
                          (0, k.jsx)(eD.cY, {
                            color: "primary",
                            onClick: async () => {
                              await l(f, T);
                            },
                            className: "w-full",
                            children: (0, k.jsx)(ea.Z, e7({}, td.appealButton)),
                          }),
                        ],
                      })
                    : (0, k.jsx)("div", {
                        className:
                          "flex items-center justify-between text-sm text-token-text-secondary",
                        children: (0, k.jsx)(ea.Z, e7({}, td.recipientBlocked)),
                      }),
              ],
            }),
          ],
        });
      }
      function te(e) {
        return "".concat("https://chat.openai.com").concat((0, m.m_)(e));
      }
      function tt(e) {
        let { publishedGizmo: t } = e,
          i = te(t);
        return (0, k.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [
            (0, k.jsx)("div", {
              className: "font-medium",
              children: (0, k.jsx)(ea.Z, e7({}, td.publishedTitle)),
            }),
            (0, k.jsxs)("div", {
              className:
                "flex gap-1 rounded bg-token-main-surface-secondary px-2 py-1",
              children: [
                (0, k.jsx)("div", {
                  className: "text-ellipsis break-all line-clamp-1",
                  children: i,
                }),
                (0, k.jsx)("button", {
                  onClick: () => {
                    (0, e2.v)(te(t));
                  },
                  className:
                    "text-token-text-secondary transition hover:text-token-text-primary",
                  children: (0, k.jsx)(eo.dS, { className: "icon-sm" }),
                }),
              ],
            }),
            (0, k.jsx)(eD.cY, {
              color: "primary",
              as: "link",
              to: i,
              className: "w-full",
              children: (0, k.jsx)(ea.Z, e7({}, td.viewGPT)),
            }),
          ],
        });
      }
      function ti(e) {
        let {
            gizmo: t,
            publishedGizmo: i,
            promoteGizmo: n,
            appealGizmo: r,
            showActionsModal: o,
          } = e,
          { 0: a, 1: l } = (0, N.useState)({ type: "privacy" });
        return (0, k.jsx)("div", {
          className:
            "w-60 rounded-lg border border-token-border-medium bg-token-main-surface-primary p-4 text-sm",
          children:
            "privacy" === a.type
              ? (0, k.jsx)(e6, {
                  gizmo: t,
                  publishedGizmo: i,
                  promoteGizmo: n,
                  appealGizmo: r,
                  setStep: l,
                  showActionsModal: o,
                })
              : (0, k.jsx)(tt, { publishedGizmo: a.publishedGizmo }),
        });
      }
      function tn(e) {
        var t;
        let {
            gizmo: i,
            publishedGizmo: n,
            isLoading: r,
            isUploadingProfilePic: o,
            isGeneratingProfilePic: a,
            promoteGizmo: l,
            appealGizmo: s,
            hasUnpublishedChanges: c,
            showActionsModal: d,
          } = e,
          u = null != i ? (0, e8.bw)(i) : [],
          p = (0, et.Z)();
        (null == i || r) && u.push(e8.hs.Loading),
          o && u.push(e8.hs.UploadingProfilePic),
          a && u.push(e8.hs.GeneratingProfilePic);
        let h = (0, m.Sg)(i);
        return (0, k.jsxs)(e0.fC, {
          modal: !0,
          children: [
            (0, k.jsx)(e0.xz, {
              asChild: !0,
              children: (0, k.jsx)(eD.cY, {
                color: "primary",
                className: "cursor-pointer whitespace-nowrap",
                disabled: void 0 === i.id,
                tooltip: u.length > 0 ? u.map(e8.sw).join("\n") : void 0,
                children: (0, k.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    c && !h
                      ? p.formatMessage(td.publishChanges)
                      : p.formatMessage(td.save),
                    (0, k.jsx)(eo.ud, {}),
                  ],
                }),
              }),
            }),
            (0, k.jsx)(e0.h_, {
              children: (0, k.jsx)(e0.VY, {
                side: "bottom",
                align: "end",
                sideOffset: 8,
                children: (0, k.jsx)(ti, {
                  gizmo: i,
                  publishedGizmo: n,
                  promoteGizmo: l,
                  appealGizmo: s,
                  showActionsModal: d,
                }),
              }),
            }),
          ],
        });
      }
      function tr(e) {
        let { gizmoEditorData: t, publishedGizmo: i, revertDraft: n } = e,
          r = (0, et.Z)(),
          { 0: o, 1: a } = (0, N.useState)(!1),
          l = (0, D.hz)();
        return (null != l && l.includes("debug")) ||
          (null == t ? void 0 : t.id) != null
          ? (0, k.jsxs)(k.Fragment, {
              children: [
                (0, k.jsxs)(e$.fC, {
                  children: [
                    (0, k.jsx)(e$.xz, {
                      asChild: !0,
                      children: (0, k.jsx)(eD.cY, {
                        children: (0, k.jsx)(eo.Yr, { className: "icon-md" }),
                      }),
                    }),
                    (0, k.jsx)(e$.Uv, {
                      children: (0, k.jsxs)(e$.VY, {
                        className:
                          "popover min-w-[180px] max-w-xs rounded-lg border border-token-border-light bg-token-main-surface-primary shadow-lg",
                        side: "top",
                        align: "end",
                        sideOffset: 6,
                        children: [
                          null != i &&
                            (0, k.jsxs)(eD.UA, {
                              onClick: () => {
                                (0, e2.v)(te(i));
                              },
                              children: [
                                (0, k.jsx)(eo.HN, { className: "icon-md" }),
                                (0, k.jsx)(ea.Z, e7({}, td.copyLink)),
                              ],
                            }),
                          null != n &&
                            (0, k.jsxs)(eD.UA, {
                              onClick: () => {
                                window.confirm(
                                  r.formatMessage(td.revertConfirm)
                                ) && n();
                              },
                              children: [
                                (0, k.jsx)(eo.Nt, { className: "icon-md" }),
                                (0, k.jsx)(ea.Z, e7({}, td.revertMenuItem)),
                              ],
                            }),
                          (null == l ? void 0 : l.includes("debug")) &&
                            (0, k.jsxs)(eD.UA, {
                              onClick: () => {
                                eN.vm.toggleActiveSidebar("debug");
                              },
                              children: [
                                (0, k.jsx)(eo.WP, { className: "icon-md" }),
                                "Debug (Internal only)",
                              ],
                            }),
                          (null == t ? void 0 : t.id) != null &&
                            (0, k.jsxs)(eD.UA, {
                              color: "danger",
                              onClick: () => {
                                a(!0);
                              },
                              children: [
                                (0, k.jsx)(eo.a_, { className: "icon-md" }),
                                (0, k.jsx)(ea.Z, e7({}, td.deleteGPT)),
                              ],
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                o &&
                  (0, k.jsx)(eQ.b, {
                    gizmoId: t.id,
                    onSuccess: () => e9(ee()),
                    onClose: () => {
                      a(!1);
                    },
                  }),
              ],
            })
          : null;
      }
      let to = T.Z.div(u || (u = (0, f.Z)(["flex items-center gap-1"])));
      function ta(e) {
        let { gizmoEditorData: t } = e,
          i = (0, B.ec)((e) => {
            var t;
            return null === (t = e.currentWorkspace) || void 0 === t
              ? void 0
              : t.name;
          });
        switch (t.sharingRecipient) {
          case b.Zz.Private:
            return (0, k.jsxs)(to, {
              children: [
                (0, k.jsx)(eo.LX, { className: "icon-xs" }),
                (0, k.jsx)(ea.Z, e7({}, td.onlyMe)),
              ],
            });
          case b.Zz.Link:
            return (0, k.jsxs)(to, {
              children: [
                (0, k.jsx)(eo.HN, { className: "icon-xs" }),
                (0, k.jsx)(ea.Z, e7({}, td.anyoneWithLink)),
              ],
            });
          case b.Zz.Workspace:
            return (0, k.jsxs)(to, {
              children: [(0, k.jsx)(eo.oq, { className: "icon-xs" }), i],
            });
          case b.Zz.Marketplace:
            return (0, k.jsxs)(to, {
              children: [
                (0, k.jsx)(eo.hk, { className: "icon-xs" }),
                (0, k.jsx)(ea.Z, e7({}, td.public)),
              ],
            });
        }
        return (0, k.jsx)("div", {});
      }
      function tl(e) {
        let { gizmoEditorData: t } = e;
        return (0, k.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            null != t.profilePictureUrl
              ? (0, k.jsx)(eX.Z, {
                  isFirstParty: !1,
                  src: t.profilePictureUrl,
                  className: "h-8 w-8",
                })
              : (0, k.jsx)("div", {
                  className:
                    "h-8 w-8 rounded-full border-2 border-dashed border-token-border-medium",
                }),
            (0, k.jsxs)("div", {
              children: [
                (0, k.jsx)("div", {
                  className: "text-sm font-medium",
                  children: t.name || (0, k.jsx)(ea.Z, e7({}, td.newGPT)),
                }),
                (0, k.jsx)("div", {
                  className: "text-xs text-token-text-secondary",
                  children: (0, m.Sg)(t)
                    ? (0, k.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, k.jsx)("div", {
                            className:
                              "h-1.5 w-1.5 rounded-full bg-token-text-tertiary",
                          }),
                          (0, k.jsx)(ea.Z, e7({}, td.draft)),
                        ],
                      })
                    : (0, k.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, k.jsx)("div", {
                            className:
                              "h-1.5 w-1.5 rounded-full bg-brand-green",
                          }),
                          (0, k.jsx)(ea.Z, e7({}, td.published)),
                          " \xb7 ",
                          (0, k.jsx)(ta, { gizmoEditorData: t }),
                        ],
                      }),
                }),
              ],
            }),
          ],
        });
      }
      function ts(e) {
        let { category: t, categories: i, setCategory: n } = e;
        return (0, k.jsxs)(e1.fC, {
          value: t,
          onValueChange: (e) => n(e),
          children: [
            (0, k.jsx)(e1.xz, {
              className:
                "flex justify-between rounded-xl bg-gray-50 p-3 font-medium dark:bg-gray-900",
              children: t
                ? (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsx)(e1.B4, {}),
                      (0, k.jsx)(e1.JO, { children: (0, k.jsx)(eo.ud, {}) }),
                    ],
                  })
                : (0, k.jsx)("div", {
                    className: "flex w-full justify-center",
                    children: (0, k.jsx)(L.Z, {}),
                  }),
            }),
            (0, k.jsx)(e1.h_, {
              children: (0, k.jsx)(e1.VY, {
                className:
                  "h-64 w-[var(--radix-select-trigger-width)] rounded-xl border bg-token-main-surface-primary p-1 py-2 dark:border-gray-600",
                position: "popper",
                sideOffset: 2,
                children: (0, k.jsx)("div", {
                  className: "overflow-y-auto",
                  children: i.map((e) =>
                    (0, k.jsxs)(
                      e1.ck,
                      {
                        className:
                          "flex w-full cursor-pointer justify-between rounded-lg p-2 pl-4 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700",
                        value: e.id,
                        children: [
                          (0, k.jsx)(e1.eT, { children: e.title }),
                          (0, k.jsx)(e1.wU, {
                            className: "text-green-600",
                            children: (0, k.jsx)(eo.oS, {}),
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
              }),
            }),
          ],
        });
      }
      function tc(e) {
        let {
          gizmoEditorData: t,
          isLoading: i,
          isUploadingProfilePic: n,
          isGeneratingProfilePic: r,
          publishedGizmo: o,
          promoteGizmo: a,
          appealGizmo: l,
          revertDraft: s,
          draftMessage: c,
          className: d,
          hasUnpublishedChanges: u,
          showActionsModal: m,
        } = e;
        return (0, k.jsxs)("div", {
          className: (0, X.default)(
            "relative flex h-14 w-full items-center justify-between gap-2 border-b border-token-border-medium px-3",
            d
          ),
          children: [
            (0, k.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, k.jsx)("a", {
                  className: "cursor-pointer text-token-text-primary",
                  onClick: () => e9(ee()),
                  children: (0, k.jsx)(eo.L7, { className: "icon-lg" }),
                }),
                (0, k.jsx)(tl, { gizmoEditorData: t }),
              ],
            }),
            (0, k.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                c,
                (0, k.jsx)(tr, {
                  gizmoEditorData: t,
                  publishedGizmo: o,
                  revertDraft: s,
                }),
                (0, k.jsx)(tn, {
                  gizmo: t,
                  publishedGizmo: o,
                  isLoading: i,
                  isUploadingProfilePic: n,
                  isGeneratingProfilePic: r,
                  promoteGizmo: a,
                  appealGizmo: l,
                  hasUnpublishedChanges: u,
                  showActionsModal: m,
                }),
              ],
            }),
          ],
        });
      }
      let td = (0, eu.vU)({
        privacyConfirm: {
          id: "gizmo.confirmPublish",
          defaultMessage: "Confirm",
        },
        recipientBlocked: {
          id: "gizmo.recipientBlocked",
          defaultMessage:
            "Because this GPT violates our policies, you will have to submit an appeal for it to be sharable.",
        },
        appealNeededLabel: {
          id: "gizmo.appealNeededLabel",
          defaultMessage:
            "Because this GPT previously may have violated our policies, you will have to submit an appeal to make it available at this level.",
        },
        appealButton: { id: "gizmo.appealButton", defaultMessage: "Appeal" },
        workspaceDisabledHint: {
          id: "gizmo.workspaceDisabledHint",
          defaultMessage:
            "Your workspace administrator has disabled this setting",
        },
        publicSharingHint: {
          id: "gizmo.publicSharingHint",
          defaultMessage: "This GPT may appear in the GPT Store (coming soon)",
        },
        publicSharingHintStoreEnabled: {
          id: "gizmo.publicSharingHintStoreEnabled",
          defaultMessage: "Your GPT will appear in the Explore GPTs page",
        },
        displayNameRequiredHint: {
          id: "gizmo.displayNameRequiredHint",
          defaultMessage:
            "To publish your GPTs to the Explore GPTs page, set up your builder profile.",
        },
        save: { id: "gizmo.save", defaultMessage: "Save" },
        publishChanges: {
          id: "gizmo.publishChanges",
          defaultMessage: "Update",
        },
        deleteGPT: { id: "gizmo.delete", defaultMessage: "Delete GPT" },
        actionNeedsPrivacyPolicyURL: {
          id: "gizmo.actionNeedsPrivacyPolicyURL",
          defaultMessage:
            "Public actions require valid privacy policy URLs. Click <fixlink>here</fixlink> to update.",
        },
        publishTo: { id: "gizmo.publishTo", defaultMessage: "Publish to" },
        publishedTitle: {
          id: "gizmo.publishedTitle",
          defaultMessage: "Published!",
        },
        viewGPT: { id: "gizmo.viewGPT", defaultMessage: "View GPT" },
        revertMenuItem: {
          id: "gizmo.revertMenuItem",
          defaultMessage: "Revert...",
        },
        onlyMe: { id: "gizmo.onlyMe", defaultMessage: "Only me" },
        anyoneWithLink: {
          id: "gizmo.anyoneWithLink",
          defaultMessage: "Anyone with a link",
        },
        public: { id: "gizmo.public", defaultMessage: "Everyone" },
        newGPT: { id: "gizmo.newGPT", defaultMessage: "New GPT" },
        draft: { id: "gizmo.draft", defaultMessage: "Draft" },
        published: { id: "gizmo.published", defaultMessage: "Published" },
        revertConfirm: {
          id: "gizmo.revertConfirm",
          defaultMessage:
            "Are you sure you want to revert to the last saved version?",
        },
        copyLink: { id: "gizmo.copyLink", defaultMessage: "Copy link" },
        categoryLabel: {
          id: "gizmo.categoryLabel",
          defaultMessage: "Category",
        },
        categoryLabelTooltip: {
          id: "gizmo.categoryLabelTooltip",
          defaultMessage:
            "Your GPT may appear in this category on the Explore page",
        },
        categoryError: {
          id: "gizmo.categoryError",
          defaultMessage: "Error generating category",
        },
      });
      function tu(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function tm(e) {
        let { upsertDraftError: t } = e,
          i = (function (e, t) {
            let i = e.response,
              n = (0, F.Ot)(e);
            if (!Array.isArray(i)) return n;
            let r = (0, Q.compact)(
              i.map((e) => {
                if ("value_error.any_str.max_length" === e.type)
                  switch (e.loc[1]) {
                    case "display":
                      switch (e.loc[2]) {
                        case "name":
                          return t.formatMessage(eg.sY.nameTooLong, {
                            length: e.ctx.limit_value,
                          });
                        case "description":
                          return t.formatMessage(eg.sY.descriptionTooLong, {
                            length: e.ctx.limit_value,
                          });
                        case "welcome_message":
                          return t.formatMessage(eg.sY.welcomeMessageTooLong, {
                            length: e.ctx.limit_value,
                          });
                      }
                      break;
                    case "instructions":
                      return t.formatMessage(eg.sY.instructionsTooLong, {
                        length: e.ctx.limit_value,
                      });
                  }
                if ("string" == typeof e.msg) return e.msg;
              })
            );
            return r.length > 0 ? r.join("\n") : n;
          })(t, (0, et.Z)());
        return (0, k.jsxs)("div", {
          className: "flex items-center gap-2 text-red-500",
          children: [
            (0, k.jsx)("div", {
              children: (0, k.jsx)(
                ea.Z,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? tu(Object(i), !0).forEach(function (t) {
                          (0, p.Z)(e, t, i[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(i)
                          )
                        : tu(Object(i)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(i, t)
                            );
                          });
                  }
                  return e;
                })({}, th.errorSavingDraft)
              ),
            }),
            null != i &&
              (0, k.jsx)(e3.u, {
                label: i,
                children: (0, k.jsx)(e_.H33, { className: "icon-sm" }),
              }),
          ],
        });
      }
      function tp(e) {
        let {
          isSavingDraft: t,
          hasUnpublishedChanges: i,
          upsertDraftError: n,
          className: r,
        } = e;
        return n instanceof F.Q0
          ? (0, k.jsx)(tm, { upsertDraftError: n })
          : i
            ? (0, k.jsxs)("div", {
                className: (0, X.default)("flex items-center gap-2", r),
                children: [
                  (0, k.jsx)("span", {
                    className: "text-token-text-secondary",
                    children: "Unpublished changes",
                  }),
                  (0, k.jsx)("div", {
                    className: "w-4 text-token-text-tertiary",
                    children: t && (0, k.jsx)(L.Z, {}),
                  }),
                ],
              })
            : null;
      }
      let th = (0, eu.vU)({
        errorSavingDraft: {
          id: "gizmo.errorSavingDraft",
          defaultMessage: "Error saving draft",
        },
      });
      var tg = i(87106),
        tf = i(13038),
        tv = i(45072);
      function tx(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function ty(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tx(Object(i), !0).forEach(function (t) {
                (0, p.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : tx(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      async function tb(e) {
        let t;
        for (let i of e)
          if (
            "gizmo_editor.generate_profile_pic" === i.author.name &&
            "multimodal_text" === i.content.content_type
          )
            for (let e of i.content.parts)
              "object" == typeof e && "asset_pointer" in e && (t = e);
        if (null != t) {
          let e = (0, tg.Iy)(t.asset_pointer),
            i = await tf.Z.getFileDownloadLink(e);
          if (i.status === h.KF.Success)
            return { id: e, permalink: i.download_url };
        }
      }
      async function tj(e, t, i) {
        var n, r;
        let o = (function (e, t) {
            let i = R.tQ.getThreadCurrentLeafId(e),
              n = R.tQ.getTree(e),
              r = [],
              o = n.getNodeByIdOrMessageId(i);
            for (; null != o && (null == t || o.id !== t); )
              r.unshift(o.message),
                (o =
                  "" !== o.parentId
                    ? n.getNodeByIdOrMessageId(o.parentId)
                    : void 0);
            return r;
          })(t, i),
          a = o
            .filter((e) => "gizmo_editor.update_behavior" === e.recipient)
            .flatMap((e) =>
              "text" === e.content.content_type
                ? e.content.parts
                : "code" === e.content.content_type
                  ? [e.content.text]
                  : []
            )
            .map((e) => JSON.parse(e))
            .reduce((e, t) => ty(ty({}, e), t), {}),
          l = await tb(o);
        if ((0, Q.isEmpty)(a) && null == l) return;
        let {
          name: s,
          context: c,
          description: d,
          welcome_message: u,
          profile_pic_file_id: m,
          prompt_starters: p,
        } = a;
        if (null != m)
          try {
            let t = await tf.Z.getFileDownloadLink(m, e.id);
            t.status === h.KF.Success &&
              (l = { id: m, permalink: t.download_url });
          } catch (e) {
            console.error(
              "Error while retrieving profile pic in update: ".concat(e)
            ),
              Z.m.warning(
                "Something went wrong updating your GPT's profile picture.",
                { duration: 3 }
              );
          }
        let g = {
          name: "string" == typeof s ? s : void 0,
          description: "string" == typeof d ? d : void 0,
          instructions: "string" == typeof c ? c : void 0,
          welcomeMessage: "string" == typeof u ? u : void 0,
          promptStarters: Array.isArray(p) ? p : void 0,
          profilePictureId: null === (n = l) || void 0 === n ? void 0 : n.id,
          profilePictureUrl:
            null === (r = l) || void 0 === r ? void 0 : r.permalink,
        };
        return (0, Q.pickBy)(g, (e) => null != e);
      }
      function tw(e, t, i, n) {
        var r, o, a, l, s, c, d, u, m, p, h, g, f, v;
        let x = i.current,
          y = n.current;
        if ((0, Q.isEqual)(x, y)) return;
        let b = {};
        x.name !== (null == y ? void 0 : y.name) && (b.name = x.name),
          (null !== (r = x.description) && void 0 !== r ? r : "") !==
            (null !== (o = null == y ? void 0 : y.description) && void 0 !== o
              ? o
              : "") &&
            (b.description =
              null !== (g = x.description) && void 0 !== g ? g : ""),
          x.instructions !==
            (null !== (a = null == y ? void 0 : y.instructions) && void 0 !== a
              ? a
              : "") &&
            (b.context =
              null !== (f = x.instructions) && void 0 !== f ? f : ""),
          (null !== (l = x.welcomeMessage) && void 0 !== l ? l : "") !==
            (null !== (s = null == y ? void 0 : y.welcomeMessage) &&
            void 0 !== s
              ? s
              : "") &&
            (b.welcome_message =
              null !== (v = x.welcomeMessage) && void 0 !== v ? v : "");
        let j = new Set(
            null !==
              (c =
                null == y || null === (d = y.files) || void 0 === d
                  ? void 0
                  : d.map((e) => e.file_id)) && void 0 !== c
              ? c
              : []
          ),
          w = new Set(
            null !==
              (u =
                null === (m = x.files) || void 0 === m
                  ? void 0
                  : m.map((e) => e.file_id)) && void 0 !== u
              ? u
              : []
          ),
          P = (null !== (p = x.files) && void 0 !== p ? p : []).filter(
            (e) => !j.has(e.file_id)
          ),
          N = (
            null !== (h = null == y ? void 0 : y.files) && void 0 !== h ? h : []
          ).filter((e) => !w.has(e.file_id));
        if ((0, Q.isEmpty)(b) && 0 === P.length && 0 === N.length) return;
        let T = [];
        if (!(0, Q.isEmpty)(b)) {
          let e =
            "Explicitly update the GPT's behavior to the following exact fields:\n\n    ".concat(
              JSON.stringify(b, null, 2),
              '\n\n    "Do not call update_behavior yet. Instead, use these updated fields as the GPT\'s current behavior, and in the next call to update_behavior, incorporate these changes."\n    '
            );
          T.push(tv.Cv.getTextAsMessage(e, en.uU.System));
        }
        N.length > 0 &&
          T.push(
            tv.Cv.getTextAsMessage(
              "The user has removed the following files from the GPT. You can no longer reference these files: ".concat(
                N.map((e) => e.file_id).join(", ")
              ),
              en.uU.System
            )
          ),
          P.length > 0 &&
            T.push(
              tv.Cv.getTextAsMessage(
                "The user is adding these files to the GPT. The GPT may reference these files. The file IDs are: ".concat(
                  P.map((e) => e.file_id).join(", ")
                ),
                en.uU.System,
                {
                  attachments: P.map((e) => ({
                    id: e.file_id,
                    name: e.name,
                    size: e.size,
                  })),
                }
              )
            ),
          T.length > 0 &&
            R.tQ.updateTree(e, (e) => {
              let i = e.getNodeByIdOrMessageId(t).parentId;
              for (let n of T) {
                let r = (0, eI.Z)();
                e.insertNodeBefore(t, {
                  id: r,
                  children: [],
                  parentId: i,
                  message: n,
                  metadata: { isClientCreatedSystemMessage: !0 },
                }),
                  (i = r);
              }
            });
      }
      var tP = i(21643),
        tN = i(47934);
      function tT(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function tk(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tT(Object(i), !0).forEach(function (t) {
                (0, p.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : tT(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      let tz = N.memo(function (e) {
        let {
            gizmoEditorData: t,
            updateGizmo: i,
            clientThreadId: n,
            completionCallbackResponse: r,
            gizmoEditorDataRef: o,
            magicMakerBehaviorOverrides: a,
            magicMakerConversationGizmoEditorDataRef: l,
            requireGizmoId: s,
          } = e,
          c = (0, N.useMemo)(
            () => ({
              gizmoEditorData: t,
              gizmoId: t.id,
              mode: "magic",
              behaviorOverrides: a,
              getGizmoId: s,
            }),
            [s, t, a]
          ),
          d = (0, tN.gF)((e) =>
            e.files.filter((e) => e.status === tP.X.Ready && null != e.gizmoId)
          ),
          u = (0, N.useCallback)(
            (e, t) => {
              !(function (e, t, i) {
                if (0 === i.length) return;
                let n = (0, eI.Z)(),
                  r =
                    "The user is uploading files in their next message. If you need to reference these in calls to update_behavior, you will use the following File ID(s), in order: ".concat(
                      i.map((e) => '"'.concat(e.fileId, '"')).join(", ")
                    );
                R.tQ.updateTree(e, (e) => {
                  let i = e.getNodeByIdOrMessageId(t).parentId;
                  e.insertNodeBefore(t, {
                    id: n,
                    children: [],
                    parentId: i,
                    message: tv.Cv.getTextAsMessage(r, en.uU.System),
                    metadata: { isClientCreatedSystemMessage: !0 },
                  });
                });
              })(e, t, d),
                tw(e, t, o, l),
                (function (e, t) {
                  let i =
                      "Remember, you should be calling either update_behavior or generate_profile_pic after most messages from the user. Your personality should be neutral and separate from the GPT you are creating.",
                    n = R.tQ.getThreadCurrentLeafId(e),
                    r = R.tQ.getTree(e),
                    o = r.getNodeByIdOrMessageId(n);
                  for (; null != o && o.message.author.role !== en.uU.User; ) {
                    if (
                      "text" === o.message.content.content_type &&
                      o.message.content.parts[0] === i
                    )
                      return;
                    o =
                      "" !== o.parentId
                        ? r.getNodeByIdOrMessageId(o.parentId)
                        : void 0;
                  }
                  R.tQ.updateTree(e, (e) => {
                    let n = e.getNodeByIdOrMessageId(t).parentId;
                    e.insertNodeBefore(t, {
                      id: (0, eI.Z)(),
                      children: [],
                      parentId: n,
                      message: tv.Cv.getTextAsMessage(i, en.uU.System, {
                        exclude_after_next_user_message: !0,
                      }),
                      metadata: { isClientCreatedSystemMessage: !0 },
                    });
                  });
                })(e, t),
                i((e) => {
                  var t;
                  return tk(
                    tk({}, e),
                    {},
                    {
                      files: [
                        ...(null !== (t = e.files) && void 0 !== t ? t : []),
                        ...(0, Q.compact)(
                          d.map((e) => {
                            var t;
                            return (
                              null != e.fileId && {
                                file_id: e.fileId,
                                name: e.file.name,
                                size: e.file.size,
                                type: e.file.type,
                                last_modified: e.file.lastModified,
                                file_size_tokens:
                                  null === (t = e.fileSpec) || void 0 === t
                                    ? void 0
                                    : t.fileTokenSize,
                              }
                            );
                          })
                        ),
                      ],
                    }
                  );
                }),
                (l.current = (0, Q.cloneDeep)(o.current));
            },
            [o, l, d, i]
          ),
          m = (0, eN.tN)((e) => e.activeSidebar);
        return (0, k.jsx)(eG.D.Provider, {
          value: c,
          children: (0, k.jsxs)("div", {
            className: "relative flex h-full grow overflow-auto",
            children: [
              (0, k.jsx)("div", {
                className: "grow",
                children: (0, k.jsx)(ew.Z, {
                  clientThreadId: n,
                  onCompletionFinished: r,
                  preRequestCompletion: u,
                  hideHeader: !0,
                  prependThreadChildren: (0, k.jsx)("div", {
                    className: "h-8",
                  }),
                }),
              }),
              "debug" === m &&
                (0, k.jsx)(ej.fv, {
                  clientThreadId: n,
                  slideOver: !1,
                  onClose: () => eN.vm.toggleActiveSidebar("debug"),
                  isOpen: !0,
                }),
            ],
          }),
        });
      });
      function tO(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function tC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tO(Object(i), !0).forEach(function (t) {
                (0, p.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : tO(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      var t_ =
        (((s = t_ || {}).MAGIC_MAKER = "magic"),
        (s.ADVANCED = "advanced"),
        (s.PREVIEW = "preview"),
        s);
      function tI(e) {
        let { value: t, label: i } = e;
        return (0, k.jsx)(W.ck, {
          value: t,
          className:
            "text-md w-1/3 flex-grow rounded-lg border-token-border-light p-1.5 font-medium text-token-text-tertiary transition hover:text-token-text-primary radix-state-checked:border radix-state-checked:bg-token-main-surface-primary radix-state-checked:text-token-text-primary radix-state-checked:shadow-[0_0_2px_rgba(0,0,0,.03)] md:w-1/2",
          children: i,
        });
      }
      function tM(e) {
        let { className: t, editorTab: i, setEditorTab: n } = e;
        return (0, k.jsxs)(W.fC, {
          className: (0, X.default)(
            "flex w-full overflow-hidden rounded-xl bg-token-main-surface-secondary p-1.5 md:w-1/2",
            t
          ),
          value: i,
          onValueChange: (e) => {
            n(e);
          },
          children: [
            (0, k.jsx)(tI, { value: t_.MAGIC_MAKER, label: "Create" }),
            (0, k.jsx)(tI, { value: t_.ADVANCED, label: "Configure" }),
            (0, k.jsx)("div", {
              className: "flex w-1/3 md:hidden",
              children: (0, k.jsx)(tI, { value: t_.PREVIEW, label: "Preview" }),
            }),
          ],
        });
      }
      let tG = {
          id: void 0,
          instructions: "",
          name: "",
          description: "",
          profilePictureId: void 0,
          profilePictureUrl: void 0,
          welcomeMessage: "",
          promptStarters: [],
          tools: [{ type: h.qK.DALLE }],
          files: [],
          trainingDisabled: !1,
          liveVersion: 0,
        },
        tS = tC(
          tC({}, tG),
          {},
          { tools: [...tG.tools, { type: h.qK.BROWSER }] }
        );
      function tE(e) {
        var t, i, n, r, o, a, l;
        return {
          id: e.gizmo.id,
          instructions: e.gizmo.instructions,
          name: e.gizmo.display.name,
          description:
            null !== (t = e.gizmo.display.description) && void 0 !== t ? t : "",
          profilePictureId:
            null !== (i = e.gizmo.display.profile_pic_id) && void 0 !== i
              ? i
              : void 0,
          profilePictureUrl:
            null !== (n = e.gizmo.display.profile_picture_url) && void 0 !== n
              ? n
              : void 0,
          welcomeMessage:
            null !== (r = e.gizmo.display.welcome_message) && void 0 !== r
              ? r
              : "",
          promptStarters:
            null !== (o = e.gizmo.display.prompt_starters) && void 0 !== o
              ? o
              : [],
          tools: e.tools,
          files: e.files,
          trainingDisabled:
            null !== (a = e.gizmo.training_disabled) && void 0 !== a && a,
          sharingRecipient: e.gizmo.share_recipient,
          sharingTargets: e.gizmo.sharing_targets,
          liveVersion:
            null !== (l = e.gizmo.live_version) && void 0 !== l ? l : 0,
        };
      }
      let tA = (e) => {
        let { gizmo: t, onNewGizmoId: i } = e,
          n = (0, g.C)(U.L0.BrowseAvailable),
          r = (0, et.Z)(),
          o = (0, N.useRef)(null != t ? tE(t) : n ? tS : tG),
          a = (0, N.useRef)(t),
          l = (0, N.useRef)(o.current),
          { 0: s, 1: c } = (0, N.useState)(() => o.current),
          { 0: d, 1: u } = (0, N.useState)(() => (0, R.OX)()),
          { 0: p } = (0, N.useState)(() => ({
            context_message: (function (e) {
              var t, i, n, r;
              let o = new Set();
              for (let t of e.tools) o.add(t.type);
              let a = null !== (t = e.name) && void 0 !== t ? t : "",
                l = null !== (i = e.description) && void 0 !== i ? i : "",
                s = null !== (n = e.instructions) && void 0 !== n ? n : "",
                c = Array.from(o).join(","),
                d = null !== (r = e.welcomeMessage) && void 0 !== r ? r : "",
                u = "" === a && "" === l && "" === s && "" === d,
                m = null != e.profilePictureUrl;
              return u
                ? "The GPT you are about to has the following abilities: ".concat(
                    c,
                    "."
                  )
                : "This is the GPT's current set of fields:\n\nname: "
                    .concat(a, "\n\ndescription: ")
                    .concat(l, "\n\ncontext: ")
                    .concat(s, "\n\nabilities: ")
                    .concat(c, "\n\nwelcome_message: ")
                    .concat(d, "\n\n")
                    .concat(
                      m
                        ? "The GPT has a profile picture."
                        : "This GPT does not have a profile picture. You must generate a profile picture when you next update your behavior.",
                      "\n"
                    );
            })(o.current),
            model_slug: "unused",
            enabled_tools: [
              { tool_id: null != t ? "gizmo_editor" : "gizmo_creator" },
            ],
          }));
        !(function (e, t, i) {
          (0, R.ax)(e, {
            kind: en.OL.GizmoMagicCreate,
            gizmo_id: t.id,
            behavior_overrides: i,
          }),
            (0, N.useEffect)(() => {
              R.tQ.updateConversationMode(e, {
                kind: en.OL.GizmoMagicCreate,
                gizmo_id: t.id,
                behavior_overrides: i,
              });
            }, [e, t.id, i]);
          let { 0: n } = (0, N.useState)(() => {
            let e = null == t.id,
              i =
                null != t.id &&
                "" !== t.name &&
                null != t.description &&
                "" !== t.instructions &&
                null != t.profilePictureUrl;
            return e
              ? 'Hi! I\'ll help you build a new GPT. You can say something like, "make a creative who helps generate visuals for new products" or "make a software engineer who helps format my code."\n\nWhat would you like to make?'
              : i
                ? "Welcome back! Is there anything ".concat(
                    t.name,
                    " should be doing better? Anything you'd like to change?"
                  )
                : "You're back! Let's continue where we left off...";
          });
          (0, N.useEffect)(() => {
            let t = R.tQ.getTree(e);
            if (
              t.findNode((e) => {
                var t;
                return (
                  e.message.author.role === en.uU.User ||
                  (null === (t = e.metadata) || void 0 === t
                    ? void 0
                    : t.isClientCreatedSystemMessage) === !0
                );
              }) ||
              (R.tQ.deleteNodesByFilter(e, (e) => {
                var t;
                return (
                  (null === (t = e.metadata) || void 0 === t
                    ? void 0
                    : t.isPlaceholderTemplateAssistantWelcomeMessage) === !0
                );
              }),
              null == n || 0 === n.length)
            )
              return;
            let i = R.tQ.getThreadCurrentLeafId(e);
            if (!t.hasNodeOrMessageId(i)) return;
            let r = (0, eI.Z)();
            R.tQ.updateTree(e, (e) => {
              e.addNode(r, n, i, en.uU.Assistant, {
                isPlaceholderTemplateAssistantWelcomeMessage: !0,
              });
            }),
              R.tQ.setThreadCurrentLeafId(e, r);
          }, [e, n]);
          let r = (0, R.UL)(e);
          (0, N.useEffect)(() => {
            (0, R.Zz)(e) &&
              R.iN.hasThread(e) &&
              r.lastModelUsed !== ex.Mw &&
              R.tQ.updateInitialThreadDataForNewThread(e, ex.Mw, []);
          }, [e, r, r.lastModelUsed]);
        })(d, l.current, p);
        let { data: f } = (0, m.kg)(o.current.id),
          v = (0, m.N_)(),
          { isPending: x, error: y } = v,
          j = (0, m.ZJ)(),
          w = (0, N.useMemo)(() => {
            var e, t, i, n, r, o;
            return (
              null != f &&
              (!(
                s.name === f.gizmo.display.name &&
                s.description === f.gizmo.display.description &&
                s.welcomeMessage === f.gizmo.display.welcome_message &&
                s.instructions === f.gizmo.instructions &&
                ((r = s.tools),
                (o = f.tools),
                r.length === o.length &&
                  r.every((e) => o.some((t) => t.type === e.type))) &&
                (0, Q.isEqual)(
                  null !==
                    (e =
                      null === (t = s.files) || void 0 === t
                        ? void 0
                        : t.map((e) => e.file_id)) && void 0 !== e
                    ? e
                    : [],
                  null !==
                    (i =
                      null === (n = f.files) || void 0 === n
                        ? void 0
                        : n.map((e) => e.file_id)) && void 0 !== i
                    ? i
                    : []
                )
              ) ||
                s.profilePictureUrl != f.gizmo.display.profile_picture_url ||
                s.profilePictureId != f.gizmo.display.profile_pic_id)
            );
          }, [s, f]),
          P = async () => {
            let e = o.current;
            try {
              let t = await v.mutateAsync({ editorData: e, gizmoId: e.id });
              if (((a.current = t), null == o.current.id)) {
                let e = t.gizmo.id;
                (o.current = tC(
                  tC({}, o.current),
                  {},
                  { id: e, sharingTargets: t.gizmo.sharing_targets }
                )),
                  c(o.current),
                  null == i || i(e);
              }
              for (let e of t.tools.filter((e) => e.type === h.qK.JIT_PLUGIN)) {
                let t = o.current.tools.find(
                  (t) =>
                    t.type === h.qK.JIT_PLUGIN &&
                    t.metadata.domain === e.metadata.domain
                );
                t &&
                  t.metadata.action_id !== e.metadata.action_id &&
                  ((t.metadata.action_id = e.metadata.action_id), c(o.current));
              }
              return t;
            } catch (i) {
              var t;
              let e =
                null !== (t = (0, F.Ot)(i)) && void 0 !== t
                  ? t
                  : r.formatMessage(th.errorSavingDraft);
              throw (Z.m.warning(e, { duration: 2 }), i);
            }
          },
          T = (0, N.useRef)(),
          z = async () =>
            null != o.current.id
              ? o.current.id
              : (null == T.current &&
                  (T.current = P()
                    .then((e) => e.gizmo.id)
                    .catch((e) => {
                      throw ((T.current = void 0), e);
                    })),
                T.current),
          { 0: O } = (0, N.useState)(() =>
            (0, Q.debounce)(() => P(), 2e3, { trailing: !0 })
          );
        function M(e) {
          let t =
            "function" == typeof e ? e(o.current) : (0, e8.x$)(o.current, e);
          (0, Q.isEqual)(t, o.current) || ((o.current = t), c(o.current), O());
        }
        let G = (0, N.useRef)(),
          S = async (e) => {
            if (null == e) {
              el(!1);
              return;
            }
            try {
              let t = await tj(o.current, e, G.current);
              null != t && (M(t), (l.current = (0, Q.cloneDeep)(o.current)));
            } catch (e) {
              console.error(e),
                Z.m.warning("Something went wrong generating your GPT", {
                  duration: 3,
                });
            } finally {
              (G.current = R.tQ.getThreadCurrentLeafId(e)), el(!1);
            }
          },
          E = (function (e, t, i) {
            R.tQ.initThread(e, {
              kind: en.OL.GizmoMagicCreate,
              gizmo_id: void 0,
              behavior_overrides: i,
            });
            let n = (0, eM.Z)(e, void 0, t, []),
              r = (0, D.hz)(),
              o = (0, B.m0)();
            return async (t, a, l) => {
              if (0 === l.length) return;
              let s = R.tQ.getThreadCurrentLeafId(e);
              for (let t of l) {
                let i = (0, eI.Z)();
                R.tQ.updateTree(e, (e) => {
                  e.addNodeToEnd(s, {
                    id: i,
                    children: [],
                    parentId: s,
                    message: tv.Cv.getTextAsMessage(t, en.uU.System),
                    metadata: { isClientCreatedSystemMessage: !0 },
                  });
                }),
                  R.tQ.setThreadCurrentLeafId(e, i),
                  (s = i);
              }
              let c = s;
              tw(e, c, t, a);
              let d = {
                  conversationMode: {
                    kind: en.OL.GizmoMagicCreate,
                    gizmo_id: t.current.id,
                    behavior_overrides: i,
                  },
                },
                u = [en.S.GPT_4],
                m = await (0, ez.Ob)(o),
                p = null;
              (0, ez.Rr)(r, m, en.OL.GizmoMagicCreate) &&
                (p = await ez.ZP.getEnforcementToken(m));
              let h = (0, eO.u7)(r, u),
                g = null;
              h && (g = await eO.ZP.getEnforcementToken(u)),
                n({
                  model: ex.Mw,
                  completionType: en.Os.Next,
                  parentNodeId: c,
                  metadata: {},
                  focusOnNewCompletion: !0,
                  arkoseToken: p,
                  turnstileToken: g,
                  preflightTime: 0,
                  completionMetadata: d,
                });
            };
          })(d, S, p),
          { 0: L, 1: V } = (0, N.useState)(void 0);
        (0, N.useEffect)(() => {
          V(
            (function (e) {
              var t;
              if (!e) return;
              let i =
                  (null === (t = e.gizmo.appeal_info) || void 0 === t
                    ? void 0
                    : t.state.kind) === "appeal_sent",
                n = (function (e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    i = new Set(
                      t.filter((e) => e.allowed).map((e) => e.recipient)
                    );
                  if (!e || i.has(e)) return _.None;
                  let n = i.has(b.Zz.Private) || i.has(b.Zz.Workspace),
                    r = i.has(b.Zz.Link) || i.has(b.Zz.Marketplace);
                  return e === b.Zz.Marketplace && r
                    ? _.RemovedFromMarketplace
                    : !r && n
                      ? _.RemovedFromPublic
                      : _.RemovedFromPrivate;
                })(e.gizmo.share_recipient, e.gizmo.sharing_targets);
              return {
                sharingRecipient: e.gizmo.share_recipient,
                categories: e.gizmo.categories,
                gizmoId: e.gizmo.id,
                moderationType: n,
                violationType: I.Other,
                showModal: i
                  ? C.AppealSent
                  : n !== _.None
                    ? C.AppealAvailable
                    : C.None,
              };
            })(t)
          );
        }, [null == t ? void 0 : t.gizmo.id]);
        let q = async (e, t) => {
            let i = (0, e8.bw)(o.current, e, t);
            if (i.length > 0) {
              Z.m.warning(
                "Could not save GPT:\n\n".concat(
                  i.map((e) => "- ".concat((0, e8.sw)(e))).join("\n")
                ),
                { duration: 3 }
              );
              return;
            }
            let n = await P(),
              r = n.gizmo.id;
            try {
              return (
                K.A.logEvent(Y.M.promoteGizmo, {
                  gizmo_id: n.gizmo.id,
                  sharing_recipient: e,
                  editor_tab: $,
                }),
                await j.mutateAsync(
                  {
                    gizmoId: n.gizmo.id,
                    data: {
                      sharingRecipient: e,
                      categories: null == t ? void 0 : [t],
                    },
                  },
                  {
                    onSuccess(e) {
                      J.E.setQueryData((0, m.Vw)(r).queryKey, e),
                        J.E.invalidateQueries({ queryKey: ["gizmos"] }),
                        J.E.invalidateQueries({
                          queryKey: ["gizmo", { gizmoId: r }],
                        }),
                        J.E.invalidateQueries({
                          queryKey: [
                            "gizmo",
                            "userActionSettings",
                            { gizmoId: r },
                          ],
                        });
                    },
                  }
                )
              );
            } catch (t) {
              if (t instanceof b.DC) {
                let i = !!t.response.is_flagged_brand_name;
                V({
                  gizmoId: r,
                  sharingRecipient: e,
                  moderationType: _.PublishBlocked,
                  violationType: i ? I.BrandName : I.Other,
                  showModal: C.AppealAvailable,
                });
              } else
                console.error(t),
                  Z.m.warning("Error saving GPT", { duration: 2 });
            }
          },
          W = v.isPending || j.isPending,
          { 0: $, 1: ee } = (0, N.useState)(() => {
            let e = H.m.getItem(H.F.GizmoEditorTab);
            return Object.values(t_).includes(e) ? e : t_.MAGIC_MAKER;
          }),
          { width: ei } = (function () {
            let { 0: e, 1: t } = (0, N.useState)({ width: null, height: null });
            return (
              (0, N.useLayoutEffect)(() => {
                let e = () => {
                  t({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  e(),
                  window.addEventListener("resize", e),
                  () => {
                    window.removeEventListener("resize", e);
                  }
                );
              }, []),
              e
            );
          })();
        (0, N.useEffect)(() => {
          null != ei && ei >= 768 && $ === t_.PREVIEW && ee(t_.MAGIC_MAKER);
        }, [ei, $]);
        let { 0: er, 1: eo } = (0, N.useState)(!1),
          { 0: ea, 1: el } = (0, N.useState)(!1),
          { 0: es, 1: ec } = (0, N.useState)(void 0);
        return (0, k.jsxs)("div", {
          className: "flex h-screen w-full flex-col items-center",
          children: [
            (0, k.jsx)(tc, {
              gizmoEditorData: s,
              isLoading: W,
              hasUnpublishedChanges: w,
              isUploadingProfilePic: er,
              isGeneratingProfilePic: ea,
              publishedGizmo: f,
              promoteGizmo: async (e, t) => {
                let i = await q(e, t);
                return (
                  (o.current = tC(
                    tC({}, o.current),
                    {},
                    { sharingRecipient: e }
                  )),
                  c(o.current),
                  H.m.setItem(H.F.GizmoEditorTab, $),
                  i
                );
              },
              appealGizmo: async (e, t) => {
                null != L &&
                  V(
                    tC(
                      tC({}, L),
                      {},
                      {
                        sharingRecipient: e,
                        categories: null == t ? void 0 : [t],
                        showModal: C.AppealAvailable,
                      }
                    )
                  );
              },
              revertDraft:
                null != f && w
                  ? () => {
                      let e = J.E.getQueryData(
                        (0, m.Vw)(o.current.id).queryKey
                      );
                      if (null != e) {
                        let t = tE(e);
                        (o.current = t), c(t), P();
                      }
                    }
                  : void 0,
              draftMessage: (0, k.jsx)(tp, {
                hasUnpublishedChanges: w,
                isSavingDraft: x,
                upsertDraftError: y,
                className: "text-sm",
              }),
              showActionsModal: (e) => {
                ec(e);
              },
              className: "flex-shrink-0",
            }),
            L &&
              (0, k.jsx)(A, {
                appealState: L,
                onAppealClose: () =>
                  V(tC(tC({}, L), {}, { showModal: C.None })),
                onAppealSubmitted: () =>
                  V(tC(tC({}, L), {}, { showModal: C.AppealSent })),
              }),
            (0, k.jsxs)("div", {
              className: "relative flex w-full grow overflow-hidden",
              children: [
                (0, k.jsx)("div", {
                  className: "flex w-full justify-center md:w-1/2",
                  children: (0, k.jsx)("div", {
                    className: "h-full grow overflow-hidden",
                    children:
                      void 0 !== es
                        ? (0, k.jsx)(eJ, {
                            currentlyEditingActionDomain: es,
                            gizmoEditorData: s,
                            updateGizmo: M,
                            onClose: () => {
                              ec(void 0);
                            },
                          })
                        : (0, k.jsxs)("div", {
                            className: "flex h-full flex-col px-2 pt-2",
                            children: [
                              (0, k.jsx)(tM, {
                                editorTab: $,
                                setEditorTab: ee,
                                className: "mb-2 flex-shrink-0 self-center",
                              }),
                              (0, k.jsx)("div", {
                                className: "grow overflow-hidden",
                                children:
                                  $ === t_.MAGIC_MAKER
                                    ? (0, k.jsx)("div", {
                                        className: "h-full w-full pb-5",
                                        children: (0, k.jsx)(
                                          tz,
                                          {
                                            gizmoEditorData: s,
                                            updateGizmo: M,
                                            completionCallbackResponse: S,
                                            clientThreadId: d,
                                            gizmoEditorDataRef: o,
                                            magicMakerBehaviorOverrides: p,
                                            magicMakerConversationGizmoEditorDataRef:
                                              l,
                                            requireGizmoId: z,
                                          },
                                          d
                                        ),
                                      })
                                    : $ === t_.ADVANCED
                                      ? (0, k.jsx)(eg.cK, {
                                          gizmoEditorData: s,
                                          updateGizmo: M,
                                          generateProfilePic: () => {
                                            el(!0),
                                              E(o, l, [
                                                "Generate a new profile picture for this GPT using gizmo_editor generate_profile_pic. Do not prompt the user for any clarification. Do not send extra text outside of the tool function call. DO NOT CALL update_behavior or otherwise update GPT behavior in your response.",
                                              ]);
                                          },
                                          setIsUploadingProfilePic: eo,
                                          isGeneratingProfilePic: ea,
                                          setIsGeneratingProfilePic: el,
                                          requireGizmoId: z,
                                          onShowActionsEditor: (e) => {
                                            ec(e);
                                          },
                                        })
                                      : (0, k.jsx)(eZ, {
                                          gizmoEditorData: s,
                                          isSavingDraft: x,
                                          showTitle: !1,
                                        }),
                              }),
                            ],
                          }),
                  }),
                }),
                (0, k.jsx)("div", {
                  className: (0, X.default)(
                    "hidden w-1/2 justify-center border-l border-token-border-medium bg-token-main-surface-secondary pt-4",
                    $ !== t_.PREVIEW && "md:flex"
                  ),
                  children: (0, k.jsx)("div", {
                    className: "flex-grow pb-5",
                    children: (0, k.jsx)("div", {
                      className: "h-full",
                      children: (0, k.jsx)(eZ, {
                        gizmoEditorData: s,
                        isSavingDraft: x,
                      }),
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      function tL(e) {
        let { businessWorkspaceId: t, gizmoId: i } = e,
          { data: n } = (0, m.b9)(i, !0),
          r = (0, B.ec)(B.F_.accountUserId),
          o = (0, B.aF)(),
          a = null == o ? void 0 : o.id,
          l = null != n && null != r && null != a && (0, ef.k1)(n, r, a, t);
        return null != n && l ? (0, k.jsx)(tA, { gizmo: n }) : null;
      }
      function tZ(e) {
        let { onNewGizmoId: t } = e;
        return (0, k.jsx)(tA, { gizmo: void 0, onNewGizmoId: t });
      }
      function tD(e) {
        let { gizmoId: t, remixSourceId: i } = e,
          n = (0, $.useRouter)(),
          r = (0, D.t)(),
          o = (0, B.ec)(B.F_.businessWorkspaceId),
          a = (0, N.useRef)(void 0),
          l = t;
        return (
          null != t && a.current === t && (l = void 0),
          (0, V.yx)({
            resetThreadAction: () => {
              n.push("/");
            },
          }),
          (0, k.jsx)("div", {
            children:
              null != r && r.data
                ? (0, k.jsx)("div", {
                    children:
                      void 0 != l
                        ? (0, k.jsx)(
                            tL,
                            { businessWorkspaceId: o, gizmoId: l },
                            l
                          )
                        : (0, k.jsx)(tZ, {
                            remixSourceId: i,
                            onNewGizmoId: (e) => {
                              (a.current = e),
                                window.history.replaceState(
                                  window.history.state,
                                  "",
                                  (0, q.AA)(e)
                                );
                            },
                          }),
                  })
                : (0, k.jsx)("div", {
                    className: "flex min-h-screen items-center justify-center",
                    children: (0, k.jsx)(L.Z, {}),
                  }),
          })
        );
      }
      var tU = i(19892),
        tR = !0;
      function tB() {
        var e;
        let t = (0, D.t)();
        (e = null == t || t.canCreateGizmos()),
          (0, N.useEffect)(() => {
            e ||
              ee().replace((0, tU.M5)(tU.LT.NO_ACCESS), void 0, {
                shallow: !0,
              });
          }, [e]);
        let i = (0, $.useRouter)(),
          n = i.query.slug,
          r = n ? (0, m.CR)(n) : void 0,
          { remixFrom: o } = i.query,
          a = null == t ? void 0 : t.features.includes(U.PL),
          l = null == t ? void 0 : t.isFree();
        return ((0, N.useEffect)(() => {
          a &&
            (0, ez.Ob)(l).then((e) => {
              ez.ZP.initializeAndGatherData(e);
            });
        }, [a, l]),
        (0, N.useEffect)(() => {
          null == t || t.canCreateGizmos() || i.push("/");
        }, [t, i]),
        null != t && t.canCreateGizmos())
          ? (0, k.jsx)(tD, { gizmoId: r, remixSourceId: o })
          : null;
      }
    },
    15193: function (e, t, i) {
      i.d(t, {
        yt: function () {
          return em;
        },
        lX: function () {
          return ex;
        },
        hj: function () {
          return eh;
        },
        B1: function () {
          return eg;
        },
        cK: function () {
          return ew;
        },
        rv: function () {
          return ev;
        },
        sY: function () {
          return eT;
        },
      });
      var n,
        r,
        o,
        a,
        l = i(39827),
        s = i(73017),
        c = i(25660),
        d = i(88128),
        u = i(65897),
        m = i(68832),
        p = i(37493),
        h = i(99715),
        g = i(70079),
        f = i(76483),
        v = i(1454),
        x = i(70671),
        y = i(47483),
        b = i(41098),
        j = i(5278),
        w = i(28144),
        P = i(21643),
        N = i(82429),
        T = i(87106),
        k = i(42005),
        z = i(43383),
        O = i(28373),
        C = i(35250);
      function _(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(i), !0).forEach(function (t) {
                (0, l.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : _(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      function M() {
        return (0, C.jsx)("div", {
          className:
            "relative flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-token-border-medium",
          children: (0, C.jsx)(k.Z, { className: "h-1/4 w-1/4" }),
        });
      }
      function G(e) {
        let {
            gizmoEditorData: t,
            onFileChange: i,
            generateProfilePic: n,
            isGeneratingProfilePic: r,
            setIsGeneratingProfilePic: o,
          } = e,
          a = (0, x.Z)(),
          { 0: l, 1: s } = (0, g.useState)(void 0),
          d = (0, g.useRef)(i);
        async function u(e) {
          if (e.length > 0) {
            o(!1);
            let t = await (0, T.WI)(e[0], 512),
              i = (0, N.W7)(t);
            s({
              tempId: i,
              file: t,
              status: P.X.Uploading,
              progress: 1,
              fileId: null,
              cdnUrl: null,
            }),
              d.current("uploading"),
              (0, N.lU)(i, t, a, c.Ei.ProfilePicture, {
                onFileCreated(e, t, i) {
                  s((n) =>
                    "initial" !== n &&
                    (null == n ? void 0 : n.tempId) === e &&
                    n.status === P.X.Uploading
                      ? I(I({}, n), {}, { progress: 10, fileId: t, cdnUrl: i })
                      : n
                  );
                },
                onFileUploadProgress(e, t) {
                  s((i) =>
                    "initial" !== i &&
                    (null == i ? void 0 : i.tempId) === e &&
                    i.status === P.X.Uploading
                      ? I(I({}, i), {}, { progress: t })
                      : i
                  );
                },
                onFileUploaded(e, t, i) {
                  s((t) =>
                    "initial" !== t && (null == t ? void 0 : t.tempId) === e
                      ? (d.current(t),
                        I(
                          I({}, t),
                          {},
                          {
                            status: P.X.Ready,
                            progress: 100,
                            fileSpec: I(
                              {
                                name: t.file.name,
                                id: t.fileId,
                                size: t.file.size,
                              },
                              null != i ? i : {}
                            ),
                          }
                        ))
                      : t
                  );
                },
                onError(e) {
                  s((t) => {
                    if (
                      "initial" !== t &&
                      (null == t ? void 0 : t.tempId) === e
                    ) {
                      d.current(void 0);
                      return;
                    }
                    return t;
                  });
                },
              });
          }
        }
        (0, g.useEffect)(() => {
          d.current = i;
        });
        let { open: m, getInputProps: p } = (0, f.uI)(
          I(
            {
              disabled: !1,
              noClick: !0,
              onDropAccepted: u,
              onDropRejected: (e) => (0, j.UJ)(e, a, P.A.ProfilePicture),
              multiple: !0,
              maxSize: b.xC,
            },
            (0, T.Z8)(T.KL)
          )
        );
        return (0, C.jsxs)("div", {
          className: "flex w-full items-center justify-center gap-4",
          children: [
            (0, C.jsxs)(h.fC, {
              children: [
                (0, C.jsx)(h.xz, {
                  className: "h-20 w-20",
                  children: r
                    ? (0, C.jsx)(M, {})
                    : null != l && "initial" != l && l.status != P.X.Ready
                      ? (0, C.jsxs)("div", {
                          className:
                            "relative h-full w-full overflow-hidden rounded-full",
                          children: [
                            (0, C.jsx)(w.l, { file: l.file }),
                            l.status === P.X.Uploading && l.progress < 90
                              ? (0, C.jsx)("div", {
                                  className:
                                    "absolute inset-0 flex items-center justify-center bg-black/5 text-white",
                                  children: (0, C.jsx)(y.Z, {
                                    percentage: l.progress,
                                    className: "h-6 w-6",
                                  }),
                                })
                              : null,
                          ],
                        })
                      : (null == t ? void 0 : t.profilePictureUrl) != null &&
                          (null == t ? void 0 : t.profilePictureUrl) !== ""
                        ? (0, C.jsx)(z.Z, {
                            isFirstParty: !1,
                            src: t.profilePictureUrl,
                          })
                        : (0, C.jsx)("div", {
                            className:
                              "flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-token-border-medium",
                            children: (0, C.jsx)(v.OvN, {
                              className: "text-4xl",
                            }),
                          }),
                }),
                (0, C.jsx)(h.Uv, {
                  children: (0, C.jsxs)(h.VY, {
                    className:
                      "flex min-w-[100px] max-w-xs flex-col rounded-xl border border-gray-400 bg-token-main-surface-primary shadow-lg dark:border-gray-700",
                    sideOffset: 7,
                    children: [
                      (0, C.jsx)(O.UA, {
                        onClick: m,
                        children: "Upload Photo",
                      }),
                      (0, C.jsx)(O.UA, {
                        onClick: n,
                        children: "Use DALL\xb7E",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, C.jsx)("input", I({}, p())),
          ],
        });
      }
      var S = i(8402),
        E = i(65455),
        A = i(23340),
        L = i(13038),
        Z = i(9417),
        D = i(78e3),
        U = i(27282),
        R = i(19841),
        B = i(24343),
        F = i(83737),
        V = i(61888),
        q = i(84261),
        W = i.n(q),
        K = i(7137),
        Y = i(32004),
        H = i(94968),
        J = i(21389),
        X = i(91128),
        Q = i(53197);
      function $(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? $(Object(i), !0).forEach(function (t) {
                (0, l.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : $(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      function et(e) {
        var t;
        let {
            gizmoEditorData: i,
            requireGizmoId: n,
            currentModelConfig: r,
            updateGizmo: o,
          } = e,
          a = (0, x.Z)(),
          { 0: l, 1: s } = (0, g.useState)(0),
          d = (0, g.useRef)(new Map()),
          u = (0, T.Zp)(r, void 0),
          m = async (e) => {
            X.A.logEvent(Q.M.uploadFile, {
              client: "web",
              eventSource: "mouse",
              intent: "gizmo",
            });
            let t = await n();
            e.length > 0 &&
              (await Promise.all(
                e.map((e) => {
                  let i = (0, N.W7)(e);
                  d.current.set(i, {
                    tempId: i,
                    gizmoId: t,
                    file: e,
                    status: P.X.Uploading,
                    progress: 1,
                    fileId: null,
                    cdnUrl: null,
                  }),
                    (0, N.cT)(
                      (0, N.W7)(e),
                      e,
                      a,
                      { kind: c.Ei.Gizmo, gizmoId: t },
                      {
                        onFileUploaded: (e, t, i, n) => {
                          let r = d.current.get(e);
                          null != r &&
                            null != r.fileId &&
                            (o((e) => {
                              var t;
                              return ee(
                                ee({}, e),
                                {},
                                {
                                  files: [
                                    ...(null !== (t = e.files) && void 0 !== t
                                      ? t
                                      : []),
                                    {
                                      file_id: r.fileId,
                                      name: r.file.name,
                                      size: r.file.size,
                                      type: r.file.type,
                                      last_modified: r.file.lastModified,
                                      file_size_tokens:
                                        null == n ? void 0 : n.fileTokenSize,
                                    },
                                  ],
                                }
                              );
                            }),
                            d.current.delete(e),
                            s((e) => e + 1));
                        },
                        onFileCreated: (i, n, r) => {
                          d.current.set(
                            i,
                            ee(
                              ee(
                                {
                                  tempId: i,
                                  gizmoId: t,
                                  file: e,
                                  status: P.X.Uploading,
                                  progress: 1,
                                },
                                d.current.get(i)
                              ),
                              {},
                              { fileId: n, cdnUrl: r }
                            )
                          ),
                            s((e) => e + 1);
                        },
                        onFileUploadProgress: (e, t) => {
                          let i = d.current.get(e);
                          (null == i ? void 0 : i.status) === P.X.Uploading &&
                            d.current.set(
                              e,
                              ee(ee({}, i), {}, { progress: t })
                            ),
                            s((e) => e + 1);
                        },
                        onError: (e) => {
                          d.current.delete(e);
                        },
                      },
                      {
                        usesRetrievalIndex:
                          null != r &&
                          (0, T._0)(r, e.type, e.name) === c.Cd.Retrieval,
                      }
                    );
                })
              ));
          },
          { getInputProps: p, open: h } = (0, f.uI)(
            ee(
              {
                disabled: !1,
                noClick: !0,
                onDropAccepted: m,
                multiple: !0,
                maxSize: b.xC,
                maxFiles: 10,
              },
              (0, T.Z8)(u)
            )
          ),
          v =
            null !== (t = null == i ? void 0 : i.files) && void 0 !== t
              ? t
              : [];
        function y(e) {
          return (0, C.jsx)(
            w.Z,
            {
              onRemoveFileClick: () => {
                d.current.delete(e.tempId), s((e) => e + 1);
              },
              file: e.file,
              loadingPercentage:
                e.status === P.X.Uploading ? e.progress : void 0,
            },
            e.tempId
          );
        }
        function j(e) {
          return (0, C.jsx)(
            w.Z,
            {
              file: e.name,
              fileId: e.file_id,
              onRemoveFileClick: () =>
                o((t) => {
                  var i;
                  return ee(
                    ee({}, t),
                    {},
                    {
                      files:
                        null == t || null === (i = t.files) || void 0 === i
                          ? void 0
                          : i.filter((t) => t.file_id !== e.file_id),
                    }
                  );
                }),
              gizmoId: null == i ? void 0 : i.id,
            },
            e.file_id
          );
        }
        let k = Array.from(d.current.values()).filter((e) =>
            v.every((t) => t.file_id !== e.fileId)
          ),
          [z, _] = (0, V.partition)(
            k,
            (e) =>
              null != r &&
              (0, T._0)(r, e.file.type, e.file.name) === c.Cd.CodeInterpreter
          ),
          [I, M] = (0, V.partition)(
            v,
            (e) =>
              null != r &&
              null != e.type &&
              (0, T._0)(r, e.type, e.name) === c.Cd.CodeInterpreter
          ),
          G = (0, g.useRef)(I.length);
        return (
          (0, g.useEffect)(() => {
            I.length > G.current &&
              o((e) => {
                var t, i;
                return null !== (t = e.tools) &&
                  void 0 !== t &&
                  t.some((e) => e.type === c.qK.PYTHON)
                  ? e
                  : ee(
                      ee({}, e),
                      {},
                      {
                        tools: [
                          ...(null !== (i = e.tools) && void 0 !== i ? i : []),
                          { type: c.qK.PYTHON },
                        ],
                      }
                    );
              }),
              (G.current = I.length);
          }, [I.length]),
          (0, C.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
              (0, C.jsx)("div", {
                className: "rounded-lg text-token-text-tertiary",
                children: (0, C.jsx)(Y.Z, ee({}, ei.knowledgeWarning)),
              }),
              _.length > 0 || M.length > 0
                ? (0, C.jsxs)("div", {
                    className: "flex flex-wrap gap-2",
                    children: [_.map(y), M.map(j)],
                  })
                : null,
              z.length > 0 || I.length > 0
                ? (0, C.jsxs)("div", {
                    children: [
                      (0, C.jsx)("div", {
                        className: "mb-2 text-xs text-token-text-tertiary",
                        children:
                          "The following files are only available for Code Interpreter:",
                      }),
                      (0, C.jsxs)("div", {
                        className: "flex flex-wrap gap-2",
                        children: [z.map(y), I.map(j)],
                      }),
                    ],
                  })
                : null,
              (0, C.jsx)("div", {
                children: (0, C.jsxs)(O.cY, {
                  onClick: h,
                  children: [(0, C.jsx)("input", ee({}, p())), "Upload files"],
                }),
              }),
            ],
          })
        );
      }
      let ei = (0, H.vU)({
        knowledgeWarning: {
          id: "gizmo.knowledgeWarning",
          defaultMessage:
            "If you upload files under Knowledge, conversations with your GPT may include file contents. Files can be downloaded when Code Interpreter is enabled",
        },
      });
      var en = i(16244);
      function er(e) {
        let { placeholder: t, text: i, onChange: n, onClose: r } = e;
        return (0, C.jsx)(en.Z, {
          className: "!max-h-[100vh] !max-w-[80vw]",
          type: "success",
          isOpen: !0,
          onClose: r,
          primaryButton: (0, C.jsx)(O.cY, { onClick: r, children: "Close" }),
          children: (0, C.jsx)("textarea", {
            className:
              "h-[70vh] w-full resize-none rounded-lg bg-token-main-surface-primary dark:border-gray-700",
            value: i,
            onChange: (e) => {
              n(e.target.value);
            },
            placeholder: t,
          }),
        });
      }
      function eo(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function ea(e) {
        let {
            label: t,
            toolType: i,
            enabledTools: n,
            onEnabledToolsChange: r,
            disabled: o,
            disabledTooltip: a,
          } = e,
          l = (e) => n.some((t) => t.type === e),
          s = (0, C.jsx)(O.f8, {
            labelClassName: "w-full cursor-pointer",
            id: i,
            label: t,
            checked: !o && l(i),
            disabled: o,
            onChange: () => {
              l(i) ? r(n.filter((e) => e.type !== i)) : r([...n, { type: i }]);
            },
          });
        return null != a
          ? (0, C.jsx)("div", {
              className: "opacity-70",
              children: (0, C.jsx)(m.u, { side: "top", label: a, children: s }),
            })
          : s;
      }
      function el(e) {
        let { enabledTools: t, onEnabledToolsChange: i } = e,
          n = (0, d.C)(Z.L0.BrowseAvailable),
          { value: r } = (0, U.sB)(U.tz.GizmoMemory),
          o = (0, x.Z)();
        return (0, C.jsxs)("div", {
          className: "flex flex-col items-start gap-2",
          children: [
            (0, C.jsx)(ea, {
              label: "Web Browsing",
              toolType: c.qK.BROWSER,
              enabledTools: t,
              onEnabledToolsChange: i,
              disabled: !n,
              disabledTooltip: n
                ? void 0
                : (0, C.jsx)(
                    Y.Z,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? eo(Object(i), !0).forEach(function (t) {
                              (0, l.Z)(e, t, i[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(i)
                              )
                            : eo(Object(i)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(i, t)
                                );
                              });
                      }
                      return e;
                    })({}, es.disabledBrowsingToolTip)
                  ),
            }),
            (0, C.jsx)(ea, {
              label: "DALL\xb7E Image Generation",
              toolType: c.qK.DALLE,
              enabledTools: t,
              onEnabledToolsChange: i,
            }),
            (0, C.jsx)(ea, {
              label: (0, C.jsxs)("div", {
                className: "flex items-center",
                children: [
                  "Code Interpreter",
                  (0, C.jsx)(ev, {
                    description: o.formatMessage(es.codeInterpreterTooltip),
                  }),
                ],
              }),
              toolType: c.qK.PYTHON,
              enabledTools: t,
              onEnabledToolsChange: i,
            }),
            r &&
              (0, C.jsx)(ea, {
                label: (0, C.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    "Memory",
                    (0, C.jsx)(ev, {
                      description: o.formatMessage(es.memoryTooltip),
                    }),
                  ],
                }),
                toolType: c.qK.MEMORY,
                enabledTools: t,
                onEnabledToolsChange: i,
              }),
          ],
        });
      }
      let es = (0, H.vU)({
        disabledBrowsingToolTip: {
          defaultMessage:
            "Web browsing is disabled for your workspace. Contact your admin to enable it.",
          id: "GizmoEditorModelPicker.disabledBrowsingToolTip",
        },
        codeInterpreterTooltip: {
          id: "GizmoEditorModelPicker.codeInterpreterTooltip",
          defaultMessage:
            "Allow this GPT to run code. When enabled, this GPT can analyze data, work with files you’ve uploaded, do math, and more.",
        },
        memoryTooltip: {
          id: "GizmoEditorModelPicker.memoryTooltip",
          defaultMessage:
            "Allow this GPT to pick up on users details and preferences to tailor its responses to them. When enabled, users will need to have memory on to use this GPT.",
        },
      });
      var ec = i(93031);
      function ed(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function eu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ed(Object(i), !0).forEach(function (t) {
                (0, l.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : ed(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      let em = J.Z.input(
          n ||
            (n = (0, s.Z)([
              "w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 border focus:ring-blue-400 border-token-border-medium h-9 bg-token-main-surface-primary",
            ]))
        ),
        ep = J.Z.div(r || (r = (0, s.Z)(["text-sm text-red-500"]))),
        eh = J.Z.div(o || (o = (0, s.Z)(["mb-6"]))),
        eg = J.Z.textarea(
          a ||
            (a = (0, s.Z)([
              "w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32",
            ]))
        );
      function ef() {
        return (0, C.jsx)("div", {
          className:
            "ml-2 flex h-3.5 w-3.5 cursor-default items-center justify-center rounded-full border border-token-border-medium text-[0.5rem] font-medium leading-none text-token-text-tertiary",
          children: "?",
        });
      }
      function ev(e) {
        let { description: t } = e;
        return (0, C.jsx)(m.u, {
          wide: !0,
          label: t,
          delayDuration: 0,
          children: (0, C.jsx)(ef, {}),
        });
      }
      function ex(e) {
        let { label: t, description: i, collapsed: n, onClick: r } = e,
          o = (0, C.jsx)("label", {
            className: "block font-medium text-token-text-primary",
            children: t,
          });
        return (0, C.jsxs)("div", {
          className: "mb-1.5 flex items-center",
          onClick: r,
          children: [
            void 0 !== n && (n ? (0, C.jsx)(K.H_v, {}) : (0, C.jsx)(K.iUH, {})),
            i
              ? (0, C.jsx)(m.u, {
                  label: i,
                  sideOffset: 4,
                  side: "top",
                  delayDuration: 0,
                  children: o,
                })
              : (0, C.jsx)(C.Fragment, { children: o }),
          ],
        });
      }
      function ey(e) {
        let { children: t, collapsed: i, initial: n } = e;
        return (0, C.jsx)(B.M, {
          initial: n,
          children:
            !i &&
            (0, C.jsx)(F.E.div, {
              initial: "collapsed",
              animate: "open",
              exit: "collapsed",
              variants: {
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              },
              children: t,
            }),
        });
      }
      function eb(e) {
        var t;
        let { actionTool: i, onShowActionsEditor: n, isDisabled: r } = e,
          o =
            "metadata" in i
              ? null === (t = i.metadata) || void 0 === t
                ? void 0
                : t.domain
              : void 0;
        return (0, C.jsxs)("div", {
          className:
            "flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",
          onClick: n,
          children: [
            (0, C.jsx)("div", {
              className: "h-9 grow px-3 py-2",
              children:
                null != o
                  ? o
                  : (0, C.jsx)("span", {
                      className: "text-red-500",
                      children: "Invalid action",
                    }),
            }),
            (0, C.jsx)("div", { className: "w-px bg-token-border-medium" }),
            (0, C.jsx)("button", {
              disabled: r,
              className:
                "flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none",
              children: (0, C.jsx)(S.RR, { className: "icon-sm" }),
            }),
          ],
        });
      }
      function ej(e) {
        var t, i, n;
        let { gizmo: r, onShowActionsEditor: o, isDisabled: a } = e,
          l = (0, x.Z)(),
          s = (0, C.jsxs)("div", {
            className: "space-y-1",
            children: [
              null == r || null === (t = r.tools) || void 0 === t
                ? void 0
                : t.map((e, t) => {
                    var i;
                    return e.type !== c.qK.JIT_PLUGIN
                      ? null
                      : (0, C.jsxs)(
                          "div",
                          {
                            children: [
                              (0, C.jsx)(eb, {
                                isDisabled: a,
                                actionTool: e,
                                onShowActionsEditor: () => o(e.metadata.domain),
                              }),
                              (null === (i = e.metadata.auth) || void 0 === i
                                ? void 0
                                : i.type) === "oauth" &&
                                (0, C.jsx)(u.Z, {
                                  label: "Callback URL",
                                  value: ""
                                    .concat("https://chat.openai.com", "/aip/")
                                    .concat(
                                      e.metadata.action_id,
                                      "/oauth/callback"
                                    ),
                                  onCopied: () => {
                                    E.m.success("Copied to clipboard", {
                                      duration: 3,
                                    });
                                  },
                                }),
                            ],
                          },
                          t
                        );
                  }),
              (null !==
                (i =
                  null == r || null === (n = r.tools) || void 0 === n
                    ? void 0
                    : n.filter((e) => e.type === c.qK.JIT_PLUGIN)) &&
              void 0 !== i
                ? i
                : []
              ).length >= p.L5
                ? (0, C.jsx)("div", {
                    children: l.formatMessage(eT.maxActionsReached, {
                      number: p.L5,
                    }),
                  })
                : (0, C.jsx)(O.cY, {
                    disabled: a,
                    onClick: () => {
                      o("Unknown domain");
                    },
                    className: "mt-2",
                    children: (0, C.jsx)(Y.Z, eu({}, eT.createActionLabel)),
                  }),
            ],
          });
        return a
          ? (0, C.jsx)(m.u, {
              side: "top",
              label: l.formatMessage(eT.disabledCustomActionsTooltip),
              children: s,
            })
          : s;
      }
      function ew(e) {
        var t, i, n, r, o, a, l, s, u;
        let {
            gizmoEditorData: m,
            updateGizmo: h,
            generateProfilePic: f,
            setIsUploadingProfilePic: v,
            isGeneratingProfilePic: y,
            setIsGeneratingProfilePic: b,
            requireGizmoId: j,
            onShowActionsEditor: w,
          } = e,
          P = (0, A.B9)(),
          N = A.mx,
          T =
            null !== (t = null == m ? void 0 : m.tools) && void 0 !== t
              ? t
              : [],
          k = N ? P[N] : void 0,
          { 0: z, 1: _ } = (0, g.useState)(!1),
          { 0: I, 1: M } = (0, g.useState)(!1),
          { 0: E, 1: B } = (0, g.useState)(!0),
          F =
            null !== (i = null == m ? void 0 : m.promptStarters) && void 0 !== i
              ? i
              : [],
          q = [...F, ...(F.length < 12 ? [""] : [])],
          W = (0, ec.bw)(m),
          K = (0, D.ec)(D.F_.isBusinessWorkspace),
          H = (0, d.C)(Z.L0.WorkspaceGPTCustomActions),
          J = (0, x.Z)(),
          { value: X } = (0, U.sB)(U.tz.GizmoContacts),
          { value: Q } = (0, U.sB)(U.tz.GizmoIntents);
        return (0, C.jsxs)("div", {
          className:
            "flex h-full grow flex-col overflow-y-auto px-2 pt-6 text-sm",
          children: [
            (0, C.jsxs)("div", {
              className: "grow",
              children: [
                (0, C.jsxs)(eh, {
                  children: [
                    (0, C.jsx)(G, {
                      gizmoEditorData: m,
                      generateProfilePic: f,
                      isGeneratingProfilePic: y,
                      setIsGeneratingProfilePic: b,
                      onFileChange: async (e) => {
                        if (
                          null != e &&
                          "uploading" !== e &&
                          null != e.fileId
                        ) {
                          let t = await L.Z.getFileDownloadLink(e.fileId);
                          t.status === c.KF.Success &&
                            h({
                              profilePictureId:
                                null != e.fileId ? e.fileId : void 0,
                              profilePictureUrl: t.download_url,
                            });
                        } else
                          h({
                            profilePictureId: void 0,
                            profilePictureUrl: void 0,
                          });
                        v("uploading" === e);
                      },
                    }),
                    (0, C.jsx)(ex, {
                      label: "Name",
                      description: "The name of your GPT",
                    }),
                    (0, C.jsx)(em, {
                      type: "text",
                      placeholder: "Name your GPT",
                      value:
                        null !== (n = null == m ? void 0 : m.name) &&
                        void 0 !== n
                          ? n
                          : "",
                      onChange: (e) => {
                        h({ name: e.target.value });
                      },
                      onBlurCapture: () =>
                        h((e) => eu(eu({}, e), {}, { name: e.name.trim() })),
                    }),
                    W.includes(ec.hs.GizmoNameTooLong)
                      ? (0, C.jsx)(ep, {
                          className: "mt-1",
                          children: (0, C.jsx)(
                            Y.Z,
                            eu(
                              eu({}, eT.nameTooLong),
                              {},
                              { values: { length: p.aI } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, C.jsxs)(eh, {
                  className: "mt-4",
                  children: [
                    (0, C.jsx)(ex, {
                      label: "Description",
                      description: "Short description of what this GPT does",
                    }),
                    (0, C.jsx)(em, {
                      type: "text",
                      placeholder:
                        "Add a short description about what this GPT does",
                      value:
                        null !== (r = null == m ? void 0 : m.description) &&
                        void 0 !== r
                          ? r
                          : "",
                      onChange: (e) => h({ description: e.target.value }),
                      onBlurCapture: () =>
                        h((e) => {
                          var t, i;
                          return eu(
                            eu({}, e),
                            {},
                            {
                              description:
                                null !==
                                  (t =
                                    null === (i = e.description) || void 0 === i
                                      ? void 0
                                      : i.trim()) && void 0 !== t
                                  ? t
                                  : "",
                            }
                          );
                        }),
                    }),
                    W.includes(ec.hs.GizmoDescriptionTooLong)
                      ? (0, C.jsx)(ep, {
                          className: "mt-1",
                          children: (0, C.jsx)(
                            Y.Z,
                            eu(
                              eu({}, eT.descriptionTooLong),
                              {},
                              { values: { length: p.P_ } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, C.jsxs)(eh, {
                  children: [
                    (0, C.jsx)(ex, {
                      label: "Instructions",
                      description:
                        "What does this GPT do? How does it behave? What should it avoid doing?",
                    }),
                    (0, C.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, C.jsx)(eg, {
                          className: "resize-none",
                          rows: 8,
                          value: null == m ? void 0 : m.instructions,
                          onChange: (e) => h({ instructions: e.target.value }),
                          onBlurCapture: () =>
                            h((e) =>
                              eu(
                                eu({}, e),
                                {},
                                { instructions: e.instructions.trim() }
                              )
                            ),
                          placeholder:
                            "What does this GPT do? How does it behave? What should it avoid doing?",
                        }),
                        (0, C.jsx)("button", {
                          className:
                            "absolute bottom-3 right-2 text-token-text-tertiary",
                          onClick: () => _(!0),
                          children: (0, C.jsx)(S.j5, { className: "icon-sm" }),
                        }),
                      ],
                    }),
                    W.includes(ec.hs.GizmoInstructionsTooLong)
                      ? (0, C.jsx)(ep, {
                          className: "mt-1",
                          children: (0, C.jsx)(
                            Y.Z,
                            eu(
                              eu({}, eT.instructionsTooLong),
                              {},
                              { values: { length: p.vi } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, C.jsxs)(eh, {
                  className: "hidden",
                  children: [
                    (0, C.jsx)(ex, {
                      label: "Welcome Message",
                      description: "How this GPT starts conversations.",
                    }),
                    (0, C.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, C.jsx)(eg, {
                          className: (0, R.default)("h-16 resize-none"),
                          value: null == m ? void 0 : m.welcomeMessage,
                          onChange: (e) =>
                            h({ welcomeMessage: e.target.value }),
                          placeholder: "How this GPT starts conversations.",
                        }),
                        (0, C.jsx)("button", {
                          className:
                            "absolute bottom-3 right-2 text-token-text-tertiary",
                          onClick: () => M(!0),
                          children: (0, C.jsx)(S.j5, { className: "icon-sm" }),
                        }),
                      ],
                    }),
                    W.includes(ec.hs.GizmoWelcomeMessageTooLong)
                      ? (0, C.jsx)(ep, {
                          className: "mt-1",
                          children: (0, C.jsx)(
                            Y.Z,
                            eu(
                              eu({}, eT.welcomeMessageTooLong),
                              {},
                              { values: { length: p.Lu } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, C.jsxs)(eh, {
                  children: [
                    (0, C.jsx)(ex, {
                      label: "Conversation starters",
                      description:
                        "Examples for the user to start the conversation",
                    }),
                    (0, C.jsx)("div", {
                      className: "flex flex-col gap-1",
                      children: q.map((e, t) =>
                        (0, C.jsxs)(
                          "div",
                          {
                            className: "flex items-center",
                            children: [
                              (0, C.jsx)(em, {
                                className: "rounded-r-none",
                                value: e,
                                type: "text",
                                onChange: (e) => {
                                  let i = e.target.value;
                                  h((e) => {
                                    var n;
                                    return eu(
                                      eu({}, e),
                                      {},
                                      {
                                        promptStarters: (0, V.compact)(
                                          t >=
                                          (null !== (n = F.length) &&
                                          void 0 !== n
                                            ? n
                                            : 0)
                                            ? [...(null != F ? F : []), i]
                                            : F.map((e, n) => {
                                                if (n === t) {
                                                  if ("" === i) return;
                                                  return i;
                                                }
                                                return e;
                                              })
                                        ),
                                      }
                                    );
                                  });
                                },
                              }),
                              (0, C.jsx)("button", {
                                className:
                                  "flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none border border-l-0 border-token-border-medium",
                                onClick: () =>
                                  h((e) =>
                                    eu(
                                      eu({}, e),
                                      {},
                                      {
                                        promptStarters: F.filter(
                                          (e, i) => i !== t
                                        ),
                                      }
                                    )
                                  ),
                                children: (0, C.jsx)(S.v7, {
                                  className: "icon-sm",
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
                (0, C.jsxs)(eh, {
                  children: [
                    (0, C.jsx)(ex, {
                      label: "Knowledge",
                      description: J.formatMessage(eT.knowledgeExplanation),
                    }),
                    (0, C.jsx)(et, {
                      gizmoEditorData: m,
                      requireGizmoId: j,
                      currentModelConfig: k,
                      updateGizmo: h,
                    }),
                  ],
                }),
                (0, C.jsxs)(eh, {
                  children: [
                    (0, C.jsx)(ex, {
                      label: "Capabilities",
                      description: "Functionality this GPT can use",
                    }),
                    (0, C.jsx)(el, {
                      enabledTools: T,
                      onEnabledToolsChange: (e) => h({ tools: e }),
                    }),
                  ],
                }),
                (0, C.jsxs)(eh, {
                  children: [
                    (0, C.jsx)(ex, {
                      label: "Actions",
                      description: "APIs this GPT can use",
                    }),
                    (0, C.jsx)(ej, {
                      isDisabled: !!(K && !H),
                      gizmo: m,
                      onShowActionsEditor: w,
                    }),
                  ],
                }),
                !K &&
                  ((null !==
                    (l =
                      null === (s = m.files) || void 0 === s
                        ? void 0
                        : s.length) && void 0 !== l
                    ? l
                    : 0) > 0 ||
                    (null == m || null === (u = m.tools) || void 0 === u
                      ? void 0
                      : u.some((e) => e.type === c.qK.JIT_PLUGIN))) &&
                  (0, C.jsxs)(eh, {
                    children: [
                      (0, C.jsx)(ex, {
                        label: "Additional Settings",
                        collapsed: !!E,
                        onClick: () => {
                          B((e) => !e);
                        },
                      }),
                      (0, C.jsx)(ey, {
                        collapsed: E,
                        initial: !1,
                        children: (0, C.jsx)(O.f8, {
                          className: "mx-3 my-1",
                          labelClassName: "w-full cursor-pointer",
                          label:
                            "Use conversation data in your GPT to improve our models",
                          id: "improve-chatgpt",
                          checked: !m.trainingDisabled,
                          onChange: () => {
                            h({ trainingDisabled: !m.trainingDisabled });
                          },
                        }),
                      }),
                    ],
                  }),
                !X && (0, C.jsx)(eN, { gizmoEditorData: m, updateGizmo: h }),
                Q && (0, C.jsx)(eP, { gizmoEditorData: m, updateGizmo: h }),
              ],
            }),
            I &&
              (0, C.jsx)(er, {
                text: null !== (o = m.welcomeMessage) && void 0 !== o ? o : "",
                onChange: (e) => {
                  h({ welcomeMessage: e });
                },
                onClose: () => M(!1),
                placeholder: "How this GPT starts conversations.",
              }),
            z &&
              (0, C.jsx)(er, {
                text: null !== (a = m.instructions) && void 0 !== a ? a : "",
                onChange: (e) => {
                  h({ instructions: e });
                },
                onClose: () => _(!1),
                placeholder:
                  "What does this GPT do? How does it behave? What should it avoid doing?",
              }),
          ],
        });
      }
      let eP = W()(
          () =>
            i
              .e(8682)
              .then(i.bind(i, 26359))
              .then((e) => e.GizmoIntentEditor),
          { loadableGenerated: { webpack: () => [26359] } }
        ),
        eN = W()(
          () =>
            i
              .e(8682)
              .then(i.bind(i, 43459))
              .then((e) => e.GizmoContactsEditor),
          { loadableGenerated: { webpack: () => [43459] } }
        ),
        eT = (0, H.vU)({
          nameTooLong: {
            id: "gizmo.nameTooLong",
            defaultMessage:
              "GPT names cannot be longer than {length} characters.",
          },
          knowledgeExplanation: {
            id: "gizmo.knowledgeExplanation",
            defaultMessage: "Additional files for this GPT to reference.",
          },
          descriptionTooLong: {
            id: "gizmo.descriptionTooLong",
            defaultMessage:
              "GPT descriptions cannot be longer than {length} characters.",
          },
          instructionsTooLong: {
            id: "gizmo.instructionsTooLong",
            defaultMessage:
              "GPT instructions cannot be longer than {length} characters.",
          },
          welcomeMessageTooLong: {
            id: "gizmo.welcomeMessageTooLong",
            defaultMessage:
              "GPT welcome messages cannot be longer than {length} characters.",
          },
          disabledCustomActionsTooltip: {
            id: "gizmo.disabledCustomActionsTooltip",
            defaultMessage:
              "Custom actions are disabled for your workspace. Contact your admin to enable them.",
          },
          createActionLabel: {
            id: "gizmo.createActionLabel",
            defaultMessage: "Create new action",
          },
          maxActionsReached: {
            id: "gizmo.maxActionsReached",
            defaultMessage: "GPTs can have a maximum of {number} actions",
          },
        });
    },
    93031: function (e, t, i) {
      i.d(t, {
        bw: function () {
          return h;
        },
        hs: function () {
          return m;
        },
        sw: function () {
          return p;
        },
        x$: function () {
          return u;
        },
      });
      var n,
        r = i(39827),
        o = i(25660),
        a = i(5572),
        l = i(44183),
        s = i(37493);
      function c(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(i), !0).forEach(function (t) {
                (0, r.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : c(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      function u(e, t) {
        return null == t
          ? e
          : ((t = (function e(t) {
              return "object" == typeof t && null != t
                ? Array.isArray(t)
                  ? t.map(e)
                  : Object.fromEntries(
                      Object.entries(t).map((t) => {
                        let [i, n] = t;
                        return [i, e(n)];
                      })
                    )
                : null === t
                  ? void 0
                  : t;
            })(t)),
            d(d({}, e), t));
      }
      let m =
        (((n = {})[(n.Loading = 0)] = "Loading"),
        (n[(n.UploadingProfilePic = 1)] = "UploadingProfilePic"),
        (n[(n.GeneratingProfilePic = 2)] = "GeneratingProfilePic"),
        (n[(n.GizmoNameTooLong = 3)] = "GizmoNameTooLong"),
        (n[(n.GizmoDescriptionTooLong = 4)] = "GizmoDescriptionTooLong"),
        (n[(n.GizmoWelcomeMessageTooLong = 5)] = "GizmoWelcomeMessageTooLong"),
        (n[(n.GizmoInstructionsTooLong = 6)] = "GizmoInstructionsTooLong"),
        (n[(n.NameEmpty = 7)] = "NameEmpty"),
        (n[(n.MissingPublicActionPrivacyPolicyURL = 8)] =
          "MissingPublicActionPrivacyPolicyURL"),
        (n[(n.MissingCategory = 9)] = "MissingCategory"),
        n);
      function p(e) {
        switch (e) {
          case m.Loading:
            return "Loading";
          case m.UploadingProfilePic:
            return "Uploading profile picture";
          case m.GeneratingProfilePic:
            return "Generating profile picture";
          case m.GizmoNameTooLong:
            return "GPT name too long";
          case m.GizmoDescriptionTooLong:
            return "GPT description too long";
          case m.GizmoWelcomeMessageTooLong:
            return "GPT welcome message too long";
          case m.GizmoInstructionsTooLong:
            return "GPT instructions too long";
          case m.NameEmpty:
            return "GPT name cannot be empty";
          case m.MissingPublicActionPrivacyPolicyURL:
            return "Public actions require valid privacy policy URLs";
          case m.MissingCategory:
            return "Public GPTs must have a category";
          default:
            return (0, l.Z)(e), "";
        }
      }
      function h(e, t, i) {
        var n, r, l, c, d, u, p, h;
        let g = e.name.length > s.aI,
          f =
            (null !==
              (n =
                null === (r = e.description) || void 0 === r
                  ? void 0
                  : r.length) && void 0 !== n
              ? n
              : 0) > s.P_,
          v =
            (null !==
              (l =
                null === (c = e.welcomeMessage) || void 0 === c
                  ? void 0
                  : c.length) && void 0 !== l
              ? l
              : 0) > s.Lu,
          x =
            (null !==
              (d =
                null === (u = e.instructions) || void 0 === u
                  ? void 0
                  : u.length) && void 0 !== d
              ? d
              : 0) > s.vi,
          y = [];
        if (
          ((null == e ? void 0 : e.name) === "" && y.push(m.NameEmpty),
          g && y.push(m.GizmoNameTooLong),
          f && y.push(m.GizmoDescriptionTooLong),
          x && y.push(m.GizmoInstructionsTooLong),
          v && y.push(m.GizmoWelcomeMessageTooLong),
          null != t && [a.Zz.Link, a.Zz.Marketplace].includes(t))
        )
          for (let t of null === (p = e.tools) || void 0 === p
            ? void 0
            : p.filter((e) => e.type === o.qK.JIT_PLUGIN)) {
            let e =
              null === (h = t.metadata) || void 0 === h
                ? void 0
                : h.privacy_policy_url;
            if (
              null == e ||
              !(function (e) {
                try {
                  return new URL(e), !0;
                } catch (e) {
                  return !1;
                }
              })(e)
            ) {
              y.push(m.MissingPublicActionPrivacyPolicyURL);
              break;
            }
          }
        return (
          t === a.Zz.Marketplace && null == i && y.push(m.MissingCategory), y
        );
      }
    },
  },
]);
//# sourceMappingURL=2637-2b9d4453bf39911d.js.map
