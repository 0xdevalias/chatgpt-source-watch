"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [874],
  {
    10874: function (e, t, i) {
      i.r(t),
        i.d(t, {
          __N_SSP: function () {
            return tW;
          },
          default: function () {
            return tH;
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
        p = i(89691),
        m = i(39827),
        h = i(25660),
        f = i(88128),
        g = i(73017),
        x = i(33925),
        v = i(16244),
        y = i(49508),
        b = i(5572),
        j = i(10518),
        w = i(91530),
        P = i.n(w),
        N = i(70079),
        T = i(21389),
        k = i(35250);
      let z = T.Z.a(c || (c = (0, g.Z)(["bold underline"]))),
        O = T.Z.textarea(
          d ||
            (d = (0, g.Z)([
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
      var G =
        (((a = G || {})[(a.Initial = 0)] = "Initial"),
        (a[(a.AppealForm = 1)] = "AppealForm"),
        (a[(a.SubmittedConfirmation = 2)] = "SubmittedConfirmation"),
        a);
      function S(e) {
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
          { 0: u, 1: p } = (0, N.useState)(G.Initial),
          m = async () => {
            await y.U.postGizmoAppeal(t, c, i, n),
              p(G.SubmittedConfirmation),
              null == s || s();
          };
        switch (u) {
          case G.Initial:
            return (0, k.jsx)(v.Z, {
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
              primaryButton: (0, k.jsx)(x.ZP.Button, {
                title: "Continue",
                color: "primary",
                onClick: l,
              }),
              secondaryButton: a
                ? (0, k.jsx)(x.ZP.Button, {
                    title: "Appeal",
                    onClick: () => p(G.AppealForm),
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
          case G.AppealForm:
            return (0, k.jsx)(v.Z, {
              title: "Appeal",
              isOpen: !0,
              onClose: l,
              showCloseButton: !0,
              shouldIgnoreClickOutside: !0,
              primaryButton: (0, k.jsx)(x.ZP.Button, {
                title: "Submit",
                color: "primary",
                onClick: m,
                disabled: 0 === c.trim().length,
              }),
              secondaryButton: (0, k.jsx)(x.ZP.Button, {
                title: "Back",
                onClick: () => p(G.Initial),
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
          case G.SubmittedConfirmation:
            return (0, k.jsx)(k.Fragment, {});
        }
      }
      function M(e) {
        let { onClose: t } = e;
        return (0, k.jsx)(v.Z, {
          title: "Appeal submitted",
          isOpen: !0,
          onClose: t,
          showCloseButton: !0,
          primaryButton: (0, k.jsx)(x.ZP.Button, {
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
          { data: n } = (0, p.b9)(t, !0),
          r = async () => {
            await y.U.postGizmoCancelAppeal(t);
          };
        return (0, k.jsx)(v.Z, {
          isOpen: !0,
          onClose: P(),
          primaryButton: (0, k.jsx)(x.ZP.Button, {
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
          ? (0, k.jsx)(M, {
              onClose: () => {
                a(!1), null == n || n();
              },
            })
          : (0, k.jsxs)(k.Fragment, {
              children: [
                (null == t ? void 0 : t.showModal) == C.AppealSent &&
                  (0, k.jsx)(E, { gizmoId: t.gizmoId, onClose: i }),
                (null == t ? void 0 : t.showModal) == C.AppealAvailable &&
                  (0, k.jsx)(S, {
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
      var L = i(8402),
        Z = i(28373),
        D = i(99715),
        U = i(61236),
        R = i(61888),
        B = i(1454),
        V = i(32004);
      let F = (e) => {
          let { gizmoId: t, limit: i, cursor: n } = e;
          return (0, U.a)({
            queryFn: async () => y.U.listVersions({ gizmoId: t }),
            queryKey: [
              "gizmo",
              "versions",
              { gizmoId: t, limit: i, cursor: n },
            ],
          });
        },
        q = (0, N.memo)(function (e) {
          let { gizmoId: t } = e,
            { value: i } = (0, j.sB)(j.tz.GizmoVersionHistory);
          return t && i ? (0, k.jsx)(W, { gizmoId: t }) : null;
        });
      function W(e) {
        let { gizmoId: t } = e,
          { 0: i, 1: n } = (0, N.useState)(!1),
          { data: r } = F({ gizmoId: t }),
          o = () => {
            n(!i);
          };
        return (0, k.jsxs)(k.Fragment, {
          children: [
            (0, k.jsxs)("div", {
              className:
                "flex flex-row items-center space-x-2 hover:cursor-pointer",
              onClick: o,
              children: [
                (0, k.jsx)(B.TCC, { className: "icon-sm" }),
                (0, k.jsx)("span", {
                  children: (0, k.jsx)(V.Z, {
                    id: "gizmoVersionHistory.buttonLabel",
                    defaultMessage: "History",
                  }),
                }),
              ],
            }),
            (0, k.jsx)("div", {
              className: "fixed inset-0 z-10 overflow-hidden ".concat(
                i ? "" : "hidden"
              ),
              children: (0, k.jsx)("div", {
                className: "absolute inset-0 z-20 overflow-hidden",
                children: (0, k.jsx)("section", {
                  className: "absolute inset-y-0 left-0 flex max-w-fit",
                  children: (0, k.jsx)("div", {
                    className: "relative w-screen max-w-xs",
                    children: (0, k.jsxs)("div", {
                      className:
                        "flex h-full flex-col overflow-y-scroll bg-token-sidebar-surface-primary py-6 shadow-xl",
                      children: [
                        (0, k.jsx)("header", {
                          className: "px-4 sm:px-6",
                          children: (0, k.jsxs)("div", {
                            className:
                              "flex items-start justify-between space-x-3",
                            children: [
                              (0, k.jsx)("h2", {
                                className: "text-lg font-medium leading-7",
                                children: (0, k.jsx)(V.Z, {
                                  id: "gizmoVersionHistory.sidebarTitle",
                                  defaultMessage: "Version History",
                                }),
                              }),
                              (0, k.jsx)("div", {
                                className: "flex h-7 items-center",
                                children: (0, k.jsx)("button", {
                                  onClick: o,
                                  className:
                                    "transition duration-150 ease-in-out",
                                  children: (0, k.jsx)(B.iYc, {
                                    className: "icon-md",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, k.jsx)("div", {
                          className: "relative flex-1 px-4 py-6 sm:px-6",
                          children:
                            null == r
                              ? void 0
                              : r.items.map((e, t) =>
                                  (0, k.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "flex flex-row items-center justify-between rounded-lg p-2",
                                      children: [
                                        (0, k.jsx)("span", {
                                          className:
                                            "hover:cursor-pointer hover:bg-token-sidebar-surface-tertiary",
                                          children: new Date(
                                            e.updated_at
                                          ).toLocaleTimeString(void 0, {
                                            hour: "numeric",
                                            minute: "numeric",
                                          }),
                                        }),
                                        (0, k.jsx)(H, {}),
                                      ],
                                    },
                                    t
                                  )
                                ),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }
      function H() {
        return (0, k.jsx)(k.Fragment, {
          children: (0, k.jsxs)(D.fC, {
            children: [
              (0, k.jsx)(D.xz, {
                asChild: !0,
                children: (0, k.jsx)("button", {
                  color: "neutral",
                  className:
                    "rounded-lg px-3 py-2 text-token-text-primary duration-100 ease-in active:scale-[0.9]",
                  children: (0, k.jsx)(L.Yr, { className: "icon-md" }),
                }),
              }),
              (0, k.jsx)(D.Uv, {
                children: (0, k.jsx)(D.VY, {
                  className:
                    "popover z-40 min-w-[180px] max-w-xs rounded-lg border border-token-border-light shadow-lg",
                  side: "bottom",
                  align: "start",
                  children: (0, k.jsxs)(Z.UA, {
                    disabled: !1,
                    onClick: R.noop,
                    children: [
                      (0, k.jsx)(L.Nt, { className: "icon-md" }),
                      (0, k.jsx)(V.Z, {
                        id: "gizmoVersionHistory.revertLabel",
                        defaultMessage: "Revert to this version",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var Y = i(42005),
        K = i(65455),
        J = i(24668),
        X = i(9417),
        Q = i(99784),
        $ = i(78e3),
        ee = i(30640),
        et = i(84126),
        ei = i(39496),
        en = i(51533),
        er = i(91128),
        eo = i(53197),
        ea = i(39352),
        el = i(81622),
        es = i(19841),
        ec = i(12366),
        ed = i.n(ec),
        eu = i(70671),
        ep = i(99424),
        em = i(22433),
        eh = i(7557),
        ef = i(1703),
        eg = i(36607),
        ex = i(24077);
      function ev(e) {
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
      var ey = i(94968);
      function eb(e) {
        let { onSelectExample: t } = e,
          i = (0, eu.Z)(),
          n = (0, N.useRef)(null);
        return (0, k.jsxs)("select", {
          onChange: (e) => {
            "label" !== e.target.value &&
              (t(ew[parseInt(e.target.value)].spec),
              (n.current.value = "label"));
          },
          className:
            "h-8 rounded-lg border border-token-border-medium bg-transparent px-2 py-0 text-sm",
          ref: n,
          children: [
            (0, k.jsx)("option", {
              value: "label",
              children: i.formatMessage(ej.examples),
            }),
            ew.map((e, t) =>
              (0, k.jsx)(
                "option",
                { value: t, children: i.formatMessage(e.displayName) },
                t
              )
            ),
          ],
        });
      }
      let ej = (0, ey.vU)({
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
        ew = [
          {
            displayName: ej.weatherExampleTitle,
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
            displayName: ej.petStoreExampleTitle,
            spec: '# Taken from https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml\n\nopenapi: "3.0.0"\ninfo:\n  version: 1.0.0\n  title: Swagger Petstore\n  license:\n    name: MIT\nservers:\n  - url: https://petstore.swagger.io/v1\npaths:\n  /pets:\n    get:\n      summary: List all pets\n      operationId: listPets\n      tags:\n        - pets\n      parameters:\n        - name: limit\n          in: query\n          description: How many items to return at one time (max 100)\n          required: false\n          schema:\n            type: integer\n            maximum: 100\n            format: int32\n      responses:\n        \'200\':\n          description: A paged array of pets\n          headers:\n            x-next:\n              description: A link to the next page of responses\n              schema:\n                type: string\n          content:\n            application/json:    \n              schema:\n                $ref: "#/components/schemas/Pets"\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\n    post:\n      summary: Create a pet\n      operationId: createPets\n      tags:\n        - pets\n      responses:\n        \'201\':\n          description: Null response\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\n  /pets/{petId}:\n    get:\n      summary: Info for a specific pet\n      operationId: showPetById\n      tags:\n        - pets\n      parameters:\n        - name: petId\n          in: path\n          required: true\n          description: The id of the pet to retrieve\n          schema:\n            type: string\n      responses:\n        \'200\':\n          description: Expected response to a valid request\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Pet"\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\ncomponents:\n  schemas:\n    Pet:\n      type: object\n      required:\n        - id\n        - name\n      properties:\n        id:\n          type: integer\n          format: int64\n        name:\n          type: string\n        tag:\n          type: string\n    Pets:\n      type: array\n      maxItems: 100\n      items:\n        $ref: "#/components/schemas/Pet"\n    Error:\n      type: object\n      required:\n        - code\n        - message\n      properties:\n        code:\n          type: integer\n          format: int32\n        message:\n          type: string',
          },
          {
            displayName: ej.blankExampleTitle,
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
      var eP = i(15193),
        eN = i(61161),
        eT = i(28928),
        ek = i(23340);
      function ez(e) {
        let { clientThreadId: t } = e,
          i = (0, Q.oq)(t),
          n = (0, ek.Bv)(t),
          r = (0, Q.U0)(t, i),
          o = [...Array(r).keys()].map((e) =>
            (0, k.jsx)(
              eT.Z,
              {
                isFinalTurn: e === r - 1,
                turnIndex: e,
                clientThreadId: t,
                conversationLeafId: i,
                onChangeItemInView: R.noop,
                onChangeRating: R.noop,
                onRequestMoreCompletions: R.noop,
                onRequestCompletion: R.noop,
                currentModelId: null != n ? n : "",
              },
              e
            )
          );
        return (0, k.jsx)(k.Fragment, { children: o });
      }
      function eO(e) {
        let { clientThreadIds: t } = e;
        return (0, k.jsx)(k.Fragment, {
          children: t.map((e) => (0, k.jsx)(ez, { clientThreadId: e }, e)),
        });
      }
      var eC = i(78623),
        e_ = i(50709),
        eI = i(50484),
        eG = i(18405),
        eS = i(4579),
        eM = i(8869),
        eE = i(91786),
        eA = i(91225),
        eL = i(83737),
        eZ = i(8844),
        eD = i(33782),
        eU = i(37345),
        eR = i(22824);
      function eB() {
        return (0, k.jsxs)("div", {
          className: "flex items-center",
          children: [
            (0, k.jsx)("div", {
              className: "border-token-border-secondary flex-grow border-b",
            }),
            (0, k.jsxs)("div", {
              className:
                "flex flex-shrink-0 items-center gap-2 px-2 py-6 text-sm text-token-text-tertiary",
              children: [(0, k.jsx)(B.V7f, {}), "GPT updated"],
            }),
            (0, k.jsx)("div", {
              className: "border-token-border-secondary flex-grow border-b",
            }),
          ],
        });
      }
      let eV = (((l = {}).TestGizmoAction = "test_gizmo_action"), l),
        eF = new eM.V(),
        eq = N.memo(function (e) {
          var t;
          let { gizmoEditorData: i, isSavingDraft: n, showTitle: r = !0 } = e,
            { 0: o, 1: a } = (0, N.useState)(() => (0, Q.OX)()),
            { 0: l, 1: s } = (0, N.useState)([]);
          (0, N.useEffect)(() => {
            s((e) => (e[e.length - 1] === o ? e : [...e, o]));
          }, [o]);
          let c = l.slice(0, -1);
          (0, Q.ax)(o, { kind: em.OL.GizmoTest, gizmo_id: i.id }),
            (0, N.useEffect)(() => {
              Q.tQ.updateConversationMode(o, {
                kind: em.OL.GizmoTest,
                gizmo_id: i.id,
              });
            }, [o, i.id]);
          let d = (0, Q.UL)(o),
            u =
              null === (t = i.files) || void 0 === t
                ? void 0
                : t.map((e) => e.file_id).join();
          (0, N.useEffect)(() => {
            null != Q.tQ.getServerThreadId(o) && a((0, Q.OX)());
          }, [i.id, i.instructions, i.tools, u, o]),
            (0, N.useEffect)(() => {
              (0, Q.Zz)(o) &&
                Q.iN.hasThread(o) &&
                d.lastModelUsed !== ek.mx &&
                Q.tQ.updateInitialThreadDataForNewThread(o, ek.mx, []);
            }, [o, d, i]);
          let p = (0, eG.tN)((e) => e.activeSidebar),
            m = (0, N.useMemo)(
              () => ({ gizmoEditorData: i, mode: "test" }),
              [i]
            ),
            { 0: h, 1: f } = (0, N.useState)(0),
            g = () => {
              f((e) => e - 360);
            },
            x = i.id,
            v = (function (e) {
              var t;
              let i =
                  null === (t = (0, J.t)()) || void 0 === t
                    ? void 0
                    : t.isFree(),
                n = (0, eD.Z)(e, void 0, R.noop, []);
              return (0, N.useCallback)(
                async (t, r, o) => {
                  let a = Q.tQ.getThreadCurrentLeafId(e),
                    l = (0, eZ.Z)();
                  Q.tQ.updateTree(e, (e) => {
                    e.addNodeToEnd(a, {
                      id: l,
                      children: [],
                      parentId: a,
                      message: {
                        id: l,
                        author: { role: em.uU.User },
                        content: {
                          content_type: em.PX.Text,
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
                                  tool_name: (0, eN.VN)(r),
                                },
                              },
                            },
                          },
                        },
                      },
                    });
                  });
                  let s = {
                      conversationMode: { kind: em.OL.GizmoTest, gizmo_id: t },
                    },
                    c = (0, J.N$)(),
                    d = await (0, eE.Ob)(i),
                    u = null;
                  (0, eE.Rr)(c, d, em.OL.GizmoTest) &&
                    (u = await eE.ZP.getEnforcementToken(d));
                  let p = null;
                  (0, eA.u7)(c, d) && (p = await eA.ZP.getEnforcementToken(d)),
                    n({
                      model: ek.mx,
                      completionType: em.Os.Next,
                      parentNodeId: l,
                      metadata: {},
                      focusOnNewCompletion: !0,
                      arkoseToken: u,
                      turnstileToken: p,
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
                (0, eS.LW)(eF, {
                  test_gizmo_action: (e) => {
                    let { rootDomain: t, operationName: i } = e;
                    x && v(x, t, i);
                  },
                }),
              [v, x]
            ),
            (0, k.jsx)(eU.D.Provider, {
              value: m,
              children: (0, k.jsxs)("div", {
                className: (0, es.default)(
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
                                    g(), s([]), a((0, Q.OX)());
                                  },
                                  className: "flex items-center gap-2",
                                  children: [
                                    "Preview",
                                    (0, k.jsx)(eL.E.div, {
                                      className: "text-token-text-primary",
                                      animate: { rotate: h },
                                      transition: { duration: 0.3 },
                                      children: (0, k.jsx)(L.u8, {
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
                        className: (0, es.default)(
                          "relative grow overflow-auto px-2",
                          n && "pointer-events-none"
                        ),
                        children: (0, k.jsx)(e_.Z, {
                          clientThreadId: o,
                          hideHeader: !0,
                          renderEmptyState: (0, k.jsxs)("div", {
                            className: "relative h-full w-full",
                            children: [
                              null != c &&
                                c.length > 0 &&
                                (0, k.jsx)("div", {
                                  className: "h-full w-full opacity-20",
                                  children: (0, k.jsxs)(eI.I, {
                                    children: [
                                      (0, k.jsx)(eO, { clientThreadIds: c }),
                                      (0, k.jsx)(eB, {}),
                                    ],
                                  }),
                                }),
                              (0, k.jsx)("div", {
                                className:
                                  "absolute left-0 top-0 h-full w-full",
                                children: (0, k.jsx)(eR.r, {
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
                                  children: (0, k.jsx)(eO, {
                                    clientThreadIds: c,
                                  }),
                                }),
                                (0, k.jsx)(eB, {}),
                              ],
                            }),
                        }),
                      }),
                    ],
                  }),
                  "debug" === p &&
                    (0, k.jsx)(eC.fv, {
                      clientThreadId: o,
                      slideOver: !1,
                      onClose: () => eG.vm.toggleActiveSidebar("debug"),
                      isOpen: !0,
                    }),
                ],
              }),
            })
          );
        }),
        eW = ["oauth_client_id", "oauth_client_secret"],
        eH = ["api_key"];
      function eY(e, t) {
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
      function eK(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eY(Object(i), !0).forEach(function (t) {
                (0, m.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : eY(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      let eJ = "".concat(
        "https://chat.openai.com",
        "/g/g-TYEliDU6A-actionsgpt"
      );
      function eX(e) {
        let { children: t } = e;
        return (0, k.jsx)("label", {
          className: "mb-1 block text-sm font-medium",
          children: t,
        });
      }
      function eQ(e) {
        var t, i, n, r, o, a, l, s, c, d, u, p, m, h;
        let { jitPluginTool: f, onUpdateTool: g, onClose: x } = e,
          { 0: y, 1: b } = (0, N.useState)({
            apiKeyValue: "",
            oauthClientIdValue: "",
            oauthClientSecretValue: "",
            oauthAuthUrlValue:
              null !==
                (t =
                  null == f ||
                  null === (i = f.metadata) ||
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
                  null == f ||
                  null === (r = f.metadata) ||
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
                  null == f ||
                  null === (a = f.metadata) ||
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
                  null == f ||
                  null === (s = f.metadata) ||
                  void 0 === s ||
                  null === (s = s.auth) ||
                  void 0 === s
                    ? void 0
                    : s.type) && void 0 !== l
                ? l
                : em.Jv.None,
            httpAuthTypeValue:
              null !==
                (c =
                  null == f ||
                  null === (d = f.metadata) ||
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
                  null == f ||
                  null === (p = f.metadata) ||
                  void 0 === p ||
                  null === (p = p.auth) ||
                  void 0 === p
                    ? void 0
                    : p.custom_auth_header) && void 0 !== u
                ? u
                : "",
            tokenExchangeMethodValue:
              null !==
                (m =
                  null == f ||
                  null === (h = f.metadata) ||
                  void 0 === h ||
                  null === (h = h.auth) ||
                  void 0 === h
                    ? void 0
                    : h.token_exchange_method) && void 0 !== m
                ? m
                : "default_post",
          });
        function j(e) {
          b((t) => eK(eK({}, t), e));
        }
        return (0, k.jsxs)(v.Z, {
          type: "success",
          isOpen: !0,
          title: "Authentication",
          primaryButton: (0, k.jsx)(eh.z, {
            color: "dark",
            onClick: () => {
              g(
                y.authTypeValue === em.Jv.None
                  ? { type: em.Jv.None }
                  : y.authTypeValue === em.Jv.OAuth
                    ? {
                        type: em.Jv.OAuth,
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
                        type: em.Jv.ServiceHTTP,
                        authorization_type: y.httpAuthTypeValue,
                        custom_auth_header: y.customHeaderValue,
                        api_key: y.apiKeyValue,
                      }
              ),
                x();
            },
            children: "Save",
          }),
          secondaryButton: (0, k.jsx)(eh.z, {
            color: "neutral",
            onClick: x,
            children: "Cancel",
          }),
          onClose: x,
          children: [
            (0, k.jsxs)("div", {
              className: "mb-4",
              children: [
                (0, k.jsx)(eX, { children: "Authentication Type" }),
                (0, k.jsxs)(ex.Z.Root, {
                  onValueChange: (e) => {
                    j({ authTypeValue: e });
                  },
                  value: y.authTypeValue,
                  className: "flex gap-4",
                  children: [
                    (0, k.jsx)(Z.Xb, { label: "None", value: em.Jv.None }),
                    (0, k.jsx)(Z.Xb, {
                      label: "API Key",
                      value: em.Jv.ServiceHTTP,
                    }),
                    (0, k.jsx)(Z.Xb, { label: "OAuth", value: em.Jv.OAuth }),
                  ],
                }),
              ],
            }),
            "service_http" === y.authTypeValue
              ? (0, k.jsxs)(k.Fragment, {
                  children: [
                    (0, k.jsx)(eX, { children: "API Key" }),
                    (0, k.jsx)(eP.yt, {
                      placeholder: "<HIDDEN>",
                      type: "password",
                      value: y.apiKeyValue,
                      onChange: (e) => {
                        j({ apiKeyValue: e.target.value });
                      },
                      className: "mb-2",
                    }),
                    (0, k.jsx)(eX, { children: "Auth Type" }),
                    (0, k.jsxs)(ex.Z.Root, {
                      className: "mb-2 flex gap-6 overflow-hidden rounded-lg",
                      value: y.httpAuthTypeValue,
                      required: !0,
                      onValueChange: (e) => {
                        j({ httpAuthTypeValue: e });
                      },
                      children: [
                        (0, k.jsx)(Z.Xb, { value: "basic", label: "Basic" }),
                        (0, k.jsx)(Z.Xb, { value: "bearer", label: "Bearer" }),
                        (0, k.jsx)(Z.Xb, { value: "custom", label: "Custom" }),
                      ],
                    }),
                    "custom" === y.httpAuthTypeValue &&
                      (0, k.jsxs)("div", {
                        className: "mt-2",
                        children: [
                          (0, k.jsx)(eX, { children: "Custom Header Name" }),
                          (0, k.jsx)(eP.yt, {
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
                      (0, k.jsx)(eX, { children: "Client ID" }),
                      (0, k.jsx)(eP.yt, {
                        placeholder: "<HIDDEN>",
                        type: "password",
                        value: y.oauthClientIdValue,
                        onChange: (e) => {
                          j({ oauthClientIdValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, k.jsx)(eX, { children: "Client Secret" }),
                      (0, k.jsx)(eP.yt, {
                        placeholder: "<HIDDEN>",
                        type: "password",
                        value: y.oauthClientSecretValue,
                        onChange: (e) => {
                          j({ oauthClientSecretValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, k.jsx)(eX, { children: "Authorization URL" }),
                      (0, k.jsx)(eP.yt, {
                        value: y.oauthAuthUrlValue,
                        onChange: (e) => {
                          j({ oauthAuthUrlValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, k.jsx)(eX, { children: "Token URL" }),
                      (0, k.jsx)(eP.yt, {
                        value: y.oauthTokenUrlValue,
                        onChange: (e) => {
                          j({ oauthTokenUrlValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, k.jsx)(eX, { children: "Scope" }),
                      (0, k.jsx)(eP.yt, {
                        value: y.oauthScopeValue,
                        onChange: (e) => {
                          j({ oauthScopeValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, k.jsx)(eX, { children: "Token Exchange Method" }),
                      (0, k.jsxs)(ex.Z.Root, {
                        value: y.tokenExchangeMethodValue,
                        required: !0,
                        onValueChange: (e) => {
                          j({ tokenExchangeMethodValue: e });
                        },
                        children: [
                          (0, k.jsx)(Z.Xb, {
                            value: "default_post",
                            label: "Default (POST request)",
                          }),
                          (0, k.jsx)(Z.Xb, {
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
      function e$(e) {
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
            (0, k.jsx)(Z.cY, {
              color: "dark",
              loading: o,
              onClick: l,
              children: "Import",
            }),
            (0, k.jsx)(Z.cY, {
              color: "neutral",
              onClick: i,
              children: "Cancel",
            }),
          ],
        });
      }
      function e0(e) {
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
                            children: (0, k.jsx)(Z.cY, {
                              color: "neutral",
                              onClick: () => {
                                t &&
                                  eF.publish({
                                    kind: eV.TestGizmoAction,
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
      function e1(e) {
        let { validationResponse: t } = e;
        return (0, k.jsxs)("div", {
          children: [
            (0, k.jsx)(eP.lX, { label: "Available actions" }),
            (0, k.jsx)(e0, {
              rootDomain: t.success ? t.spec.root_domain : void 0,
              operations: t.success ? t.spec.operations : void 0,
            }),
          ],
        });
      }
      function e2(e) {
        var t, i, n, r, o, a, l;
        let {
            currentlyEditingActionDomain: s,
            gizmoEditorData: c,
            updateGizmo: d,
            onClose: u,
          } = e,
          { 0: p, 1: m } = (0, N.useState)(s),
          f = (0, N.useRef)(p);
        (0, N.useEffect)(() => {
          f.current = p;
        }, [p]);
        let g =
            null == c || null === (t = c.tools) || void 0 === t
              ? void 0
              : t.find(
                  (e) => e.type === h.qK.JIT_PLUGIN && e.metadata.domain === p
                ),
          { 0: x } = (0, N.useState)(() => null == g),
          v =
            null !==
              (i =
                null == g || null === (n = g.metadata) || void 0 === n
                  ? void 0
                  : n.raw_spec) && void 0 !== i
              ? i
              : "",
          { 0: b, 1: j } = (0, N.useState)(!1),
          { 0: w, 1: P } = (0, N.useState)(!1);
        function T(e) {
          d((t) =>
            eK(
              eK({}, t),
              {},
              {
                tools: g
                  ? t.tools.map((t) =>
                      t.type === h.qK.JIT_PLUGIN && t.metadata.domain === p
                        ? eK(
                            eK({}, t),
                            {},
                            {
                              metadata: eK(
                                eK(eK({}, t.metadata), e),
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
                        metadata: eK(
                          eK(
                            {
                              raw_spec: "",
                              domain: null != p ? p : "Unknown domain",
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
            (0, R.debounce)(async function (e) {
              let t = await y.U.validateOpenAPISpec(e);
              O(t);
              let i = t.success ? t.spec.root_domain : void 0;
              if (i) {
                if (i !== f.current) {
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
                  eK(
                    eK({}, e),
                    {},
                    {
                      tools: e.tools.map((e) =>
                        e.type === h.qK.JIT_PLUGIN &&
                        e.metadata.domain === f.current
                          ? eK(
                              eK({}, e),
                              {},
                              {
                                metadata: eK(
                                  eK({}, e.metadata),
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
                  m(i);
              }
              if (t.success && t.known_auth && t.known_privacy_policy && g) {
                let e = eK({ type: em.Jv.OAuth }, t.known_auth);
                (0, R.isEqual)(g.metadata.auth, e) ||
                  T({ auth: eK({ type: em.Jv.OAuth }, t.known_auth) }),
                  g.metadata.privacy_policy_url !== t.known_privacy_policy &&
                    T({ privacy_policy_url: t.known_privacy_policy });
              }
            }, 1e3)
          ),
          _ = null != z ? (z.success ? z.warnings : z.errors) : void 0;
        (0, N.useEffect)(() => {
          "" === v ? (O(void 0), C.cancel()) : C(v);
        }, [C, v]);
        let I = (e) => {
          try {
            T({ raw_spec: JSON.stringify(JSON.parse(e), null, 2) });
          } catch {
            try {
              T({
                raw_spec: ef.ZP.stringify(ef.ZP.parse(e), {
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
                  children: (0, k.jsx)(eh.z, {
                    color: "neutral",
                    onClick: u,
                    children: (0, k.jsx)(L.L7, { className: "icon-md" }),
                  }),
                }),
                null != g &&
                  (0, k.jsx)("div", {
                    className: "absolute right-0 top-6",
                    children: (0, k.jsx)(eh.z, {
                      color: "neutral",
                      onClick: () => {
                        window.confirm(
                          "Are you sure you want to delete this action?"
                        ) &&
                          (d((e) =>
                            eK(
                              eK({}, e),
                              {},
                              {
                                tools: e.tools.filter(
                                  (e) =>
                                    e.type !== h.qK.JIT_PLUGIN ||
                                    e.metadata.domain !== p
                                ),
                              }
                            )
                          ),
                          u());
                      },
                      className: "text-red-500",
                      children: (0, k.jsx)(L.a_, { className: "icon-md" }),
                    }),
                  }),
                (0, k.jsx)("div", {
                  className: "text-xl font-medium",
                  children: x ? "Add actions" : "Edit actions",
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
            (0, k.jsxs)(eP.hj, {
              className: "relative",
              children: [
                (0, k.jsx)(eP.lX, { label: "Authentication" }),
                (0, k.jsx)(ev, {
                  onClick: () => {
                    j(!0);
                  },
                  content: (function (e) {
                    switch (e) {
                      case em.Jv.None:
                        return "None";
                      case em.Jv.OAuth:
                        return "OAuth";
                      case em.Jv.ServiceHTTP:
                        return "API Key";
                    }
                  })(
                    null !==
                      (r =
                        null == g ||
                        null === (o = g.metadata) ||
                        void 0 === o ||
                        null === (o = o.auth) ||
                        void 0 === o
                          ? void 0
                          : o.type) && void 0 !== r
                      ? r
                      : em.Jv.None
                  ),
                  button: (0, k.jsx)("button", {
                    color: "neutral",
                    className: "flex items-center gap-2 px-3",
                    children: (0, k.jsx)(L.RR, { className: "icon-sm" }),
                  }),
                }),
                b &&
                  (0, k.jsx)(eQ, {
                    jitPluginTool: g,
                    onUpdateTool: (e) => {
                      switch (e.type) {
                        case em.Jv.None:
                          T({ auth: { type: em.Jv.None } });
                          break;
                        case em.Jv.OAuth: {
                          let { oauth_client_id: t, oauth_client_secret: i } =
                            e;
                          T({
                            auth: (0, ep.Z)(e, eW),
                            oauth_client_id: t,
                            oauth_client_secret: i,
                          });
                          break;
                        }
                        case em.Jv.ServiceHTTP: {
                          let { api_key: t } = e;
                          T({ auth: (0, ep.Z)(e, eH), api_key: t });
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
                        ? (0, k.jsx)(e$, {
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
                              (0, k.jsx)(Z.cY, {
                                color: "neutral",
                                onClick: () => {
                                  P(!0);
                                },
                                children: "Import from URL",
                              }),
                              (0, k.jsx)(eb, {
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
                          value: v,
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
                            "" !== v
                              ? (0, k.jsx)(Z.cY, {
                                  onClick: () => {
                                    I(v);
                                  },
                                  children: "Format",
                                })
                              : (0, k.jsxs)(Z.cY, {
                                  as: "a",
                                  to: eJ,
                                  openNewTab: !0,
                                  children: [
                                    (0, k.jsx)(V.Z, {
                                      id: "gizmo.actions.actionsGptHelp",
                                      defaultMessage:
                                        "Get help from ActionsGPT",
                                    }),
                                    (0, k.jsx)(L.fe, { className: "icon-md" }),
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
            null != z && (0, k.jsx)(e1, { validationResponse: z }),
            (0, k.jsxs)("div", {
              className: "mt-4",
              children: [
                (0, k.jsx)(eP.lX, {
                  label: "Privacy policy",
                  description:
                    "Privacy policy is required for all public GPTs.",
                }),
                (0, k.jsx)(eg.Z, {
                  name: "privacyPolicyUrl",
                  value:
                    null !==
                      (a =
                        null == g || null === (l = g.metadata) || void 0 === l
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
      var e3 = i(43383),
        e8 = i(82245),
        e4 = i(22189),
        e5 = i(5667),
        e7 = i(74908),
        e6 = i(68832),
        e9 = i(47559),
        te = i(93031);
      function tt(e, t) {
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
      function ti(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tt(Object(i), !0).forEach(function (t) {
                (0, m.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : tt(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      function tn(e) {
        window.history.length > 1 ? e.back() : e.push((0, ei.L7)());
      }
      function tr(e) {
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
          m = (0, $.ec)($.F_.isBusinessWorkspace),
          f = (0, eu.Z)(),
          { 0: g, 1: x } = (0, N.useState)(
            (0, p.Sg)(r)
              ? m
                ? b.Zz.Workspace
                : b.Zz.Marketplace
              : r.sharingRecipient
          ),
          v = (0, N.useMemo)(
            () =>
              (null == o ? void 0 : o.gizmo.sharing_targets) == null ||
              o.gizmo.sharing_targets.some(
                (e) => e.recipient === g && e.allowed
              ),
            [null == o ? void 0 : o.gizmo.sharing_targets, g]
          ),
          { data: w, isLoading: P } = (0, p.WL)(),
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
            (0, R.throttle)((e, t) => y.U.generateCategory(e, t), 1e3)
          ),
          I =
            null != w && w.is_verified
              ? void 0
              : f.formatMessage(tf.displayNameRequiredHint);
        g !== b.Zz.Marketplace || null == I || P || x(b.Zz.Link);
        let G =
            m &&
            !(
              null !== (t = r.sharingTargets) &&
              void 0 !== t &&
              t.some((e) => e.recipient === b.Zz.Link)
            ),
          S = (0, te.bw)(r, g, T),
          M = S.includes(te.hs.MissingPublicActionPrivacyPolicyURL),
          E = r.tools.find(
            (e) => e.type === h.qK.JIT_PLUGIN && !e.metadata.privacy_policy_url
          ),
          A = (0, $.ec)((e) => e.currentWorkspace),
          D = (0, J.hz)(),
          U = (0, p.Z1)();
        (0, N.useEffect)(() => {
          if (!(null != D && D.includes(X.L0.GizmoStore))) {
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
        }, [r.instructions, r.name, D, T]);
        let B = null == D ? void 0 : D.includes(X.L0.GizmoStore),
          { value: F } = (0, j.sB)(j.tz.GizmoAppeals);
        return (0, k.jsxs)("div", {
          children: [
            (0, k.jsx)("div", {
              className: "mb-2 text-sm font-medium text-token-text-tertiary",
              children: (0, k.jsx)(V.Z, ti({}, tf.publishTo)),
            }),
            (0, k.jsxs)("div", {
              className: "flex flex-col gap-3 text-sm",
              children: [
                (0, k.jsxs)(en.fC, {
                  value: g,
                  onValueChange: (e) => x(e),
                  className: "space-y-2",
                  children: [
                    r.sharingTargets &&
                      r.sharingTargets.map((e, t) =>
                        (0, k.jsx)(
                          Z.Xb,
                          {
                            value: e.recipient,
                            disabled:
                              e.recipient === b.Zz.Marketplace && null != I,
                            tooltipText:
                              e.recipient === b.Zz.Marketplace
                                ? (null != I ? I : B)
                                  ? f.formatMessage(
                                      tf.publicSharingHintStoreEnabled
                                    )
                                  : f.formatMessage(tf.publicSharingHint)
                                : void 0,
                            label: (0, eN.MI)(e.recipient, A, f),
                          },
                          t
                        )
                      ),
                    G &&
                      (0, k.jsxs)(k.Fragment, {
                        children: [
                          (0, k.jsx)(Z.Xb, {
                            value: b.Zz.Link,
                            disabled: !0,
                            tooltipText: f.formatMessage(
                              tf.workspaceDisabledHint
                            ),
                            label: (0, eN.MI)(b.Zz.Link, A, f),
                          }),
                          (0, k.jsx)(Z.Xb, {
                            value: b.Zz.Marketplace,
                            disabled: !0,
                            tooltipText: f.formatMessage(
                              tf.workspaceDisabledHint
                            ),
                            label: (0, eN.MI)(b.Zz.Marketplace, A, f),
                          }),
                        ],
                      }),
                  ],
                }),
                M &&
                  (0, k.jsx)("div", {
                    className: "text-xs text-red-500",
                    children: (0, k.jsx)(
                      V.Z,
                      ti(
                        ti({}, tf.actionNeedsPrivacyPolicyURL),
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
                g !== b.Zz.Private &&
                  (0, k.jsx)(e9.QT, {
                    gizmoAvatar: r.profilePictureUrl,
                    gizmoName: r.name,
                    canEdit: !0,
                  }),
                g === b.Zz.Marketplace &&
                  (null == D ? void 0 : D.includes(X.L0.GizmoStore)) &&
                  (O
                    ? (0, k.jsx)("div", {
                        className: "text-xs text-red-500",
                        children: (0, k.jsx)(V.Z, ti({}, tf.categoryError)),
                      })
                    : (0, k.jsxs)(k.Fragment, {
                        children: [
                          (0, k.jsxs)("div", {
                            className:
                              "flex items-center justify-between text-sm font-medium text-token-text-tertiary",
                            children: [
                              (0, k.jsx)(V.Z, ti({}, tf.categoryLabel)),
                              (0, k.jsx)(e6.u, {
                                label: (0, k.jsx)("span", {
                                  className: "w-36 text-xs",
                                  children: (0, k.jsx)(
                                    V.Z,
                                    ti({}, tf.categoryLabelTooltip)
                                  ),
                                }),
                                side: "top",
                                children: (0, k.jsx)(L.VX, {
                                  className: "icon-sm",
                                }),
                              }),
                            ],
                          }),
                          (0, k.jsx)(tm, {
                            category: null != T ? T : "",
                            categories:
                              null !==
                                (i =
                                  null === (n = U.data) || void 0 === n
                                    ? void 0
                                    : n.categories) && void 0 !== i
                                ? i
                                : [],
                            setCategory: z,
                          }),
                        ],
                      })),
                v
                  ? (0, k.jsx)(Z.cY, {
                      color: "primary",
                      disabled: S.length > 0,
                      loading: d,
                      onClick: async () => {
                        try {
                          u(!0);
                          let e = await a(g, T);
                          if (null == e) return;
                          1 === e.gizmo.live_version
                            ? ed().push((0, p.m_)(e))
                            : s({ type: "published", publishedGizmo: e });
                        } finally {
                          u(!1);
                        }
                      },
                      className: "w-full",
                      children: (0, k.jsx)(V.Z, ti({}, tf.privacyConfirm)),
                    })
                  : F
                    ? (0, k.jsxs)(k.Fragment, {
                        children: [
                          (0, k.jsx)("div", {
                            className:
                              "flex items-center justify-between text-sm text-token-text-secondary",
                            children: (0, k.jsx)(
                              V.Z,
                              ti({}, tf.appealNeededLabel)
                            ),
                          }),
                          (0, k.jsx)(Z.cY, {
                            color: "primary",
                            onClick: async () => {
                              await l(g, T);
                            },
                            className: "w-full",
                            children: (0, k.jsx)(V.Z, ti({}, tf.appealButton)),
                          }),
                        ],
                      })
                    : (0, k.jsx)("div", {
                        className:
                          "flex items-center justify-between text-sm text-token-text-secondary",
                        children: (0, k.jsx)(V.Z, ti({}, tf.recipientBlocked)),
                      }),
              ],
            }),
          ],
        });
      }
      function to(e) {
        return "".concat("https://chat.openai.com").concat((0, p.m_)(e));
      }
      function ta(e) {
        let { publishedGizmo: t } = e,
          i = to(t);
        return (0, k.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [
            (0, k.jsx)("div", {
              className: "font-medium",
              children: (0, k.jsx)(V.Z, ti({}, tf.publishedTitle)),
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
                    (0, e7.v)(to(t));
                  },
                  className:
                    "text-token-text-secondary transition hover:text-token-text-primary",
                  children: (0, k.jsx)(L.dS, { className: "icon-sm" }),
                }),
              ],
            }),
            (0, k.jsx)(Z.cY, {
              color: "primary",
              as: "link",
              to: i,
              className: "w-full",
              children: (0, k.jsx)(V.Z, ti({}, tf.viewGPT)),
            }),
          ],
        });
      }
      function tl(e) {
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
              ? (0, k.jsx)(tr, {
                  gizmo: t,
                  publishedGizmo: i,
                  promoteGizmo: n,
                  appealGizmo: r,
                  setStep: l,
                  showActionsModal: o,
                })
              : (0, k.jsx)(ta, { publishedGizmo: a.publishedGizmo }),
        });
      }
      function ts(e) {
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
          u = null != i ? (0, te.bw)(i) : [],
          m = (0, eu.Z)();
        (null == i || r) && u.push(te.hs.Loading),
          o && u.push(te.hs.UploadingProfilePic),
          a && u.push(te.hs.GeneratingProfilePic);
        let h = (0, p.Sg)(i);
        return (0, k.jsxs)(e4.fC, {
          modal: !0,
          children: [
            (0, k.jsx)(e4.xz, {
              asChild: !0,
              children: (0, k.jsx)(Z.cY, {
                color: "primary",
                className: "cursor-pointer whitespace-nowrap",
                disabled: void 0 === i.id,
                tooltip: u.length > 0 ? u.map(te.sw).join("\n") : void 0,
                children: (0, k.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    c && !h
                      ? m.formatMessage(tf.publishChanges)
                      : m.formatMessage(tf.save),
                    (0, k.jsx)(L.ud, {}),
                  ],
                }),
              }),
            }),
            (0, k.jsx)(e4.h_, {
              children: (0, k.jsx)(e4.VY, {
                side: "bottom",
                align: "end",
                sideOffset: 8,
                children: (0, k.jsx)(tl, {
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
      function tc(e) {
        let { gizmoEditorData: t, publishedGizmo: i, revertDraft: n } = e,
          r = (0, eu.Z)(),
          { 0: o, 1: a } = (0, N.useState)(!1),
          l = (0, J.hz)();
        return (null != l && l.includes("debug")) ||
          (null == t ? void 0 : t.id) != null
          ? (0, k.jsxs)(k.Fragment, {
              children: [
                (0, k.jsxs)(D.fC, {
                  children: [
                    (0, k.jsx)(D.xz, {
                      asChild: !0,
                      children: (0, k.jsx)(Z.cY, {
                        children: (0, k.jsx)(L.Yr, { className: "icon-md" }),
                      }),
                    }),
                    (0, k.jsx)(D.Uv, {
                      children: (0, k.jsxs)(D.VY, {
                        className:
                          "popover min-w-[180px] max-w-xs rounded-lg border border-token-border-light bg-token-main-surface-primary shadow-lg",
                        side: "top",
                        align: "end",
                        sideOffset: 6,
                        children: [
                          null != i &&
                            (0, k.jsxs)(Z.UA, {
                              onClick: () => {
                                (0, e7.v)(to(i));
                              },
                              children: [
                                (0, k.jsx)(L.HN, { className: "icon-md" }),
                                (0, k.jsx)(V.Z, ti({}, tf.copyLink)),
                              ],
                            }),
                          null != n &&
                            (0, k.jsxs)(Z.UA, {
                              onClick: () => {
                                window.confirm(
                                  r.formatMessage(tf.revertConfirm)
                                ) && n();
                              },
                              children: [
                                (0, k.jsx)(L.Nt, { className: "icon-md" }),
                                (0, k.jsx)(V.Z, ti({}, tf.revertMenuItem)),
                              ],
                            }),
                          (null == l ? void 0 : l.includes("debug")) &&
                            (0, k.jsxs)(Z.UA, {
                              onClick: () => {
                                eG.vm.toggleActiveSidebar("debug");
                              },
                              children: [
                                (0, k.jsx)(L.WP, { className: "icon-md" }),
                                "Debug (Internal only)",
                              ],
                            }),
                          (null == t ? void 0 : t.id) != null &&
                            (0, k.jsxs)(Z.UA, {
                              color: "danger",
                              onClick: () => {
                                a(!0);
                              },
                              children: [
                                (0, k.jsx)(L.a_, { className: "icon-md" }),
                                (0, k.jsx)(V.Z, ti({}, tf.deleteGPT)),
                              ],
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                o &&
                  (0, k.jsx)(e8.b, {
                    gizmoId: t.id,
                    onSuccess: () => tn(ed()),
                    onClose: () => {
                      a(!1);
                    },
                  }),
              ],
            })
          : null;
      }
      let td = T.Z.div(u || (u = (0, g.Z)(["flex items-center gap-1"])));
      function tu(e) {
        let { gizmoEditorData: t } = e,
          i = (0, $.ec)((e) => {
            var t;
            return null === (t = e.currentWorkspace) || void 0 === t
              ? void 0
              : t.name;
          });
        switch (t.sharingRecipient) {
          case b.Zz.Private:
            return (0, k.jsxs)(td, {
              children: [
                (0, k.jsx)(L.LX, { className: "icon-xs" }),
                (0, k.jsx)(V.Z, ti({}, tf.onlyMe)),
              ],
            });
          case b.Zz.Link:
            return (0, k.jsxs)(td, {
              children: [
                (0, k.jsx)(L.HN, { className: "icon-xs" }),
                (0, k.jsx)(V.Z, ti({}, tf.anyoneWithLink)),
              ],
            });
          case b.Zz.Workspace:
            return (0, k.jsxs)(td, {
              children: [(0, k.jsx)(L.oq, { className: "icon-xs" }), i],
            });
          case b.Zz.Marketplace:
            return (0, k.jsxs)(td, {
              children: [
                (0, k.jsx)(L.hk, { className: "icon-xs" }),
                (0, k.jsx)(V.Z, ti({}, tf.public)),
              ],
            });
        }
        return (0, k.jsx)("div", {});
      }
      function tp(e) {
        let { gizmoEditorData: t } = e;
        return (0, k.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            null != t.profilePictureUrl
              ? (0, k.jsx)(e3.Z, {
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
                  children: t.name || (0, k.jsx)(V.Z, ti({}, tf.newGPT)),
                }),
                (0, k.jsx)("div", {
                  className: "text-xs text-token-text-secondary",
                  children: (0, p.Sg)(t)
                    ? (0, k.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, k.jsx)("div", {
                            className:
                              "h-1.5 w-1.5 rounded-full bg-token-text-tertiary",
                          }),
                          (0, k.jsx)(V.Z, ti({}, tf.draft)),
                        ],
                      })
                    : (0, k.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, k.jsx)("div", {
                            className:
                              "h-1.5 w-1.5 rounded-full bg-brand-green",
                          }),
                          (0, k.jsx)(V.Z, ti({}, tf.published)),
                          " \xb7 ",
                          (0, k.jsx)(tu, { gizmoEditorData: t }),
                        ],
                      }),
                }),
              ],
            }),
          ],
        });
      }
      function tm(e) {
        let { category: t, categories: i, setCategory: n } = e;
        return (0, k.jsxs)(e5.fC, {
          value: t,
          onValueChange: (e) => n(e),
          children: [
            (0, k.jsx)(e5.xz, {
              className:
                "flex justify-between rounded-xl bg-gray-50 p-3 font-medium dark:bg-gray-900",
              children: t
                ? (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsx)(e5.B4, {}),
                      (0, k.jsx)(e5.JO, { children: (0, k.jsx)(L.ud, {}) }),
                    ],
                  })
                : (0, k.jsx)("div", {
                    className: "flex w-full justify-center",
                    children: (0, k.jsx)(Y.Z, {}),
                  }),
            }),
            (0, k.jsx)(e5.h_, {
              children: (0, k.jsx)(e5.VY, {
                className:
                  "h-64 w-[var(--radix-select-trigger-width)] rounded-xl border bg-token-main-surface-primary p-1 py-2 dark:border-gray-600",
                position: "popper",
                sideOffset: 2,
                children: (0, k.jsx)("div", {
                  className: "overflow-y-auto",
                  children: i.map((e) =>
                    (0, k.jsxs)(
                      e5.ck,
                      {
                        className:
                          "flex w-full cursor-pointer justify-between rounded-lg p-2 pl-4 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700",
                        value: e.id,
                        children: [
                          (0, k.jsx)(e5.eT, { children: e.title }),
                          (0, k.jsx)(e5.wU, {
                            className: "text-green-600",
                            children: (0, k.jsx)(L.oS, {}),
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
      function th(e) {
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
          showActionsModal: p,
        } = e;
        return (0, k.jsxs)("div", {
          className: (0, es.default)(
            "relative flex h-14 w-full items-center justify-between gap-2 border-b border-token-border-medium px-3",
            d
          ),
          children: [
            (0, k.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, k.jsx)("a", {
                  className: "cursor-pointer text-token-text-primary",
                  onClick: () => tn(ed()),
                  children: (0, k.jsx)(L.L7, { className: "icon-lg" }),
                }),
                (0, k.jsx)(tp, { gizmoEditorData: t }),
              ],
            }),
            (0, k.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                c,
                (0, k.jsx)(tc, {
                  gizmoEditorData: t,
                  publishedGizmo: o,
                  revertDraft: s,
                }),
                (0, k.jsx)(ts, {
                  gizmo: t,
                  publishedGizmo: o,
                  isLoading: i,
                  isUploadingProfilePic: n,
                  isGeneratingProfilePic: r,
                  promoteGizmo: a,
                  appealGizmo: l,
                  hasUnpublishedChanges: u,
                  showActionsModal: p,
                }),
              ],
            }),
          ],
        });
      }
      let tf = (0, ey.vU)({
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
      function tg(e, t) {
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
      function tx(e) {
        let { upsertDraftError: t } = e,
          i = (function (e, t) {
            let i = e.response,
              n = (0, ee.Ot)(e);
            if (!Array.isArray(i)) return n;
            let r = (0, R.compact)(
              i.map((e) => {
                if ("value_error.any_str.max_length" === e.type)
                  switch (e.loc[1]) {
                    case "display":
                      switch (e.loc[2]) {
                        case "name":
                          return t.formatMessage(eP.sY.nameTooLong, {
                            length: e.ctx.limit_value,
                          });
                        case "description":
                          return t.formatMessage(eP.sY.descriptionTooLong, {
                            length: e.ctx.limit_value,
                          });
                      }
                      break;
                    case "instructions":
                      return t.formatMessage(eP.sY.instructionsTooLong, {
                        length: e.ctx.limit_value,
                      });
                  }
                if ("string" == typeof e.msg) return e.msg;
              })
            );
            return r.length > 0 ? r.join("\n") : n;
          })(t, (0, eu.Z)());
        return (0, k.jsxs)("div", {
          className: "flex items-center gap-2 text-red-500",
          children: [
            (0, k.jsx)("div", {
              children: (0, k.jsx)(
                V.Z,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? tg(Object(i), !0).forEach(function (t) {
                          (0, m.Z)(e, t, i[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(i)
                          )
                        : tg(Object(i)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(i, t)
                            );
                          });
                  }
                  return e;
                })({}, ty.errorSavingDraft)
              ),
            }),
            null != i &&
              (0, k.jsx)(e6.u, {
                label: i,
                children: (0, k.jsx)(B.H33, { className: "icon-sm" }),
              }),
          ],
        });
      }
      function tv(e) {
        let {
          isSavingDraft: t,
          hasUnpublishedChanges: i,
          upsertDraftError: n,
          className: r,
        } = e;
        return n instanceof ee.Q0
          ? (0, k.jsx)(tx, { upsertDraftError: n })
          : i
            ? (0, k.jsxs)("div", {
                className: (0, es.default)("flex items-center gap-2", r),
                children: [
                  (0, k.jsx)("span", {
                    className: "text-token-text-secondary",
                    children: "Unpublished changes",
                  }),
                  (0, k.jsx)("div", {
                    className: "w-4 text-token-text-tertiary",
                    children: t && (0, k.jsx)(Y.Z, {}),
                  }),
                ],
              })
            : null;
      }
      let ty = (0, ey.vU)({
        errorSavingDraft: {
          id: "gizmo.errorSavingDraft",
          defaultMessage: "Error saving draft",
        },
      });
      var tb = i(87106),
        tj = i(13038),
        tw = i(45072);
      function tP(e, t) {
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
      function tN(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tP(Object(i), !0).forEach(function (t) {
                (0, m.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : tP(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      async function tT(e) {
        let t;
        for (let i of e)
          if (
            "gizmo_editor.generate_profile_pic" === i.author.name &&
            "multimodal_text" === i.content.content_type
          )
            for (let e of i.content.parts)
              "object" == typeof e && "asset_pointer" in e && (t = e);
        if (null != t) {
          let e = (0, tb.Iy)(t.asset_pointer),
            i = await tj.Z.getFileDownloadLink(e);
          if (i.status === h.KF.Success)
            return { id: e, permalink: i.download_url };
        }
      }
      async function tk(e, t, i) {
        var n, r;
        let o = (function (e, t) {
            let i = Q.tQ.getThreadCurrentLeafId(e),
              n = Q.tQ.getTree(e),
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
            .reduce((e, t) => tN(tN({}, e), t), {}),
          l = await tT(o);
        if ((0, R.isEmpty)(a) && null == l) return;
        let {
          name: s,
          context: c,
          description: d,
          profile_pic_file_id: u,
          prompt_starters: p,
        } = a;
        if (null != u)
          try {
            let t = await tj.Z.getFileDownloadLink(u, e.id);
            t.status === h.KF.Success &&
              (l = { id: u, permalink: t.download_url });
          } catch (e) {
            console.error(
              "Error while retrieving profile pic in update: ".concat(e)
            ),
              K.m.warning(
                "Something went wrong updating your GPT's profile picture.",
                { duration: 3 }
              );
          }
        let m = {
          name: "string" == typeof s ? s : void 0,
          description: "string" == typeof d ? d : void 0,
          instructions: "string" == typeof c ? c : void 0,
          promptStarters: Array.isArray(p) ? p : void 0,
          profilePictureId: null === (n = l) || void 0 === n ? void 0 : n.id,
          profilePictureUrl:
            null === (r = l) || void 0 === r ? void 0 : r.permalink,
        };
        return (0, R.pickBy)(m, (e) => null != e);
      }
      function tz(e, t, i, n) {
        var r, o, a, l, s, c, d, u, p, m, h;
        let f = i.current,
          g = n.current;
        if ((0, R.isEqual)(f, g)) return;
        let x = {};
        f.name !== (null == g ? void 0 : g.name) && (x.name = f.name),
          (null !== (r = f.description) && void 0 !== r ? r : "") !==
            (null !== (o = null == g ? void 0 : g.description) && void 0 !== o
              ? o
              : "") &&
            (x.description =
              null !== (m = f.description) && void 0 !== m ? m : ""),
          f.instructions !==
            (null !== (a = null == g ? void 0 : g.instructions) && void 0 !== a
              ? a
              : "") &&
            (x.context =
              null !== (h = f.instructions) && void 0 !== h ? h : "");
        let v = new Set(
            null !==
              (l =
                null == g || null === (s = g.files) || void 0 === s
                  ? void 0
                  : s.map((e) => e.file_id)) && void 0 !== l
              ? l
              : []
          ),
          y = new Set(
            null !==
              (c =
                null === (d = f.files) || void 0 === d
                  ? void 0
                  : d.map((e) => e.file_id)) && void 0 !== c
              ? c
              : []
          ),
          b = (null !== (u = f.files) && void 0 !== u ? u : []).filter(
            (e) => !v.has(e.file_id)
          ),
          j = (
            null !== (p = null == g ? void 0 : g.files) && void 0 !== p ? p : []
          ).filter((e) => !y.has(e.file_id));
        if ((0, R.isEmpty)(x) && 0 === b.length && 0 === j.length) return;
        let w = [];
        if (!(0, R.isEmpty)(x)) {
          let e =
            "Explicitly update the GPT's behavior to the following exact fields:\n\n    ".concat(
              JSON.stringify(x, null, 2),
              '\n\n    "Do not call update_behavior yet. Instead, use these updated fields as the GPT\'s current behavior, and in the next call to update_behavior, incorporate these changes."\n    '
            );
          w.push(tw.Cv.getTextAsMessage(e, em.uU.System));
        }
        j.length > 0 &&
          w.push(
            tw.Cv.getTextAsMessage(
              "The user has removed the following files from the GPT. You can no longer reference these files: ".concat(
                j.map((e) => e.file_id).join(", ")
              ),
              em.uU.System
            )
          ),
          b.length > 0 &&
            w.push(
              tw.Cv.getTextAsMessage(
                "The user is adding these files to the GPT. The GPT may reference these files. The file IDs are: ".concat(
                  b.map((e) => e.file_id).join(", ")
                ),
                em.uU.System,
                {
                  attachments: b.map((e) => ({
                    id: e.file_id,
                    name: e.name,
                    size: e.size,
                  })),
                }
              )
            ),
          w.length > 0 &&
            Q.tQ.updateTree(e, (e) => {
              let i = e.getNodeByIdOrMessageId(t).parentId;
              for (let n of w) {
                let r = (0, eZ.Z)();
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
      var tO = i(21643),
        tC = i(47934);
      function t_(e, t) {
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
      function tI(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? t_(Object(i), !0).forEach(function (t) {
                (0, m.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : t_(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      let tG = N.memo(function (e) {
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
          d = (0, tC.gF)((e) =>
            e.files.filter((e) => e.status === tO.X.Ready && null != e.gizmoId)
          ),
          u = (0, N.useCallback)(
            (e, t) => {
              !(function (e, t, i) {
                if (0 === i.length) return;
                let n = (0, eZ.Z)(),
                  r =
                    "The user is uploading files in their next message. If you need to reference these in calls to update_behavior, you will use the following File ID(s), in order: ".concat(
                      i.map((e) => '"'.concat(e.fileId, '"')).join(", ")
                    );
                Q.tQ.updateTree(e, (e) => {
                  let i = e.getNodeByIdOrMessageId(t).parentId;
                  e.insertNodeBefore(t, {
                    id: n,
                    children: [],
                    parentId: i,
                    message: tw.Cv.getTextAsMessage(r, em.uU.System),
                    metadata: { isClientCreatedSystemMessage: !0 },
                  });
                });
              })(e, t, d),
                tz(e, t, o, l),
                (function (e, t) {
                  let i =
                      "Remember, you should be calling either update_behavior or generate_profile_pic after most messages from the user. Your personality should be neutral and separate from the GPT you are creating.",
                    n = Q.tQ.getThreadCurrentLeafId(e),
                    r = Q.tQ.getTree(e),
                    o = r.getNodeByIdOrMessageId(n);
                  for (; null != o && o.message.author.role !== em.uU.User; ) {
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
                  Q.tQ.updateTree(e, (e) => {
                    let n = e.getNodeByIdOrMessageId(t).parentId;
                    e.insertNodeBefore(t, {
                      id: (0, eZ.Z)(),
                      children: [],
                      parentId: n,
                      message: tw.Cv.getTextAsMessage(i, em.uU.System, {
                        exclude_after_next_user_message: !0,
                      }),
                      metadata: { isClientCreatedSystemMessage: !0 },
                    });
                  });
                })(e, t),
                i((e) => {
                  var t;
                  return tI(
                    tI({}, e),
                    {},
                    {
                      files: [
                        ...(null !== (t = e.files) && void 0 !== t ? t : []),
                        ...(0, R.compact)(
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
                (l.current = (0, R.cloneDeep)(o.current));
            },
            [o, l, d, i]
          ),
          p = (0, eG.tN)((e) => e.activeSidebar);
        return (0, k.jsx)(eU.D.Provider, {
          value: c,
          children: (0, k.jsxs)("div", {
            className: "relative flex h-full grow overflow-auto",
            children: [
              (0, k.jsx)("div", {
                className: "grow",
                children: (0, k.jsx)(e_.Z, {
                  clientThreadId: n,
                  onCompletionFinished: r,
                  preRequestCompletion: u,
                  hideHeader: !0,
                  prependThreadChildren: (0, k.jsx)("div", {
                    className: "h-8",
                  }),
                }),
              }),
              "debug" === p &&
                (0, k.jsx)(eC.fv, {
                  clientThreadId: n,
                  slideOver: !1,
                  onClose: () => eG.vm.toggleActiveSidebar("debug"),
                  isOpen: !0,
                }),
            ],
          }),
        });
      });
      function tS(e, t) {
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
      function tM(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tS(Object(i), !0).forEach(function (t) {
                (0, m.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : tS(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      var tE =
        (((s = tE || {}).MAGIC_MAKER = "magic"),
        (s.ADVANCED = "advanced"),
        (s.PREVIEW = "preview"),
        s);
      function tA(e) {
        let { value: t, label: i } = e;
        return (0, k.jsx)(en.ck, {
          value: t,
          className:
            "text-md w-1/3 flex-grow rounded-lg border-token-border-light p-1.5 font-medium text-token-text-tertiary transition hover:text-token-text-primary radix-state-checked:border radix-state-checked:bg-token-main-surface-primary radix-state-checked:text-token-text-primary radix-state-checked:shadow-[0_0_2px_rgba(0,0,0,.03)] md:w-1/2",
          children: i,
        });
      }
      function tL(e) {
        let { className: t, editorTab: i, setEditorTab: n } = e;
        return (0, k.jsxs)(en.fC, {
          className: (0, es.default)(
            "flex w-full overflow-hidden rounded-xl bg-token-main-surface-secondary p-1.5 md:w-1/2",
            t
          ),
          value: i,
          onValueChange: (e) => {
            n(e);
          },
          children: [
            (0, k.jsx)(tA, { value: tE.MAGIC_MAKER, label: "Create" }),
            (0, k.jsx)(tA, { value: tE.ADVANCED, label: "Configure" }),
            (0, k.jsx)("div", {
              className: "flex w-1/3 md:hidden",
              children: (0, k.jsx)(tA, { value: tE.PREVIEW, label: "Preview" }),
            }),
          ],
        });
      }
      let tZ = {
          id: void 0,
          instructions: "",
          name: "",
          description: "",
          profilePictureId: void 0,
          profilePictureUrl: void 0,
          promptStarters: [],
          tools: [{ type: h.qK.DALLE }],
          files: [],
          trainingDisabled: !1,
          liveVersion: 0,
        },
        tD = tM(
          tM({}, tZ),
          {},
          { tools: [...tZ.tools, { type: h.qK.BROWSER }] }
        );
      function tU(e) {
        var t, i, n, r, o, a;
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
          promptStarters:
            null !== (r = e.gizmo.display.prompt_starters) && void 0 !== r
              ? r
              : [],
          tools: e.tools,
          files: e.files,
          trainingDisabled:
            null !== (o = e.gizmo.training_disabled) && void 0 !== o && o,
          sharingRecipient: e.gizmo.share_recipient,
          sharingTargets: e.gizmo.sharing_targets,
          liveVersion:
            null !== (a = e.gizmo.live_version) && void 0 !== a ? a : 0,
        };
      }
      let tR = (e) => {
        let { gizmo: t, onNewGizmoId: i } = e,
          n = (0, f.C)(X.L0.BrowseAvailable),
          r = (0, eu.Z)(),
          o = (0, N.useRef)(null != t ? tU(t) : n ? tD : tZ),
          a = (0, N.useRef)(t),
          l = (0, N.useRef)(o.current),
          { 0: s, 1: c } = (0, N.useState)(() => o.current),
          { 0: d, 1: u } = (0, N.useState)(() => (0, Q.OX)()),
          { 0: m } = (0, N.useState)(() => ({
            context_message: (function (e) {
              var t, i, n;
              let r = new Set();
              for (let t of e.tools) r.add(t.type);
              let o = null !== (t = e.name) && void 0 !== t ? t : "",
                a = null !== (i = e.description) && void 0 !== i ? i : "",
                l = null !== (n = e.instructions) && void 0 !== n ? n : "",
                s = Array.from(r).join(","),
                c = "" === o && "" === a && "" === l,
                d = null != e.profilePictureUrl;
              return c
                ? "The GPT you are about to has the following abilities: ".concat(
                    s,
                    "."
                  )
                : "This is the GPT's current set of fields:\n\nname: "
                    .concat(o, "\n\ndescription: ")
                    .concat(a, "\n\ncontext: ")
                    .concat(l, "\n\nabilities: ")
                    .concat(s, "\n\n")
                    .concat(
                      d
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
          (0, Q.ax)(e, {
            kind: em.OL.GizmoMagicCreate,
            gizmo_id: t.id,
            behavior_overrides: i,
          }),
            (0, N.useEffect)(() => {
              Q.tQ.updateConversationMode(e, {
                kind: em.OL.GizmoMagicCreate,
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
            let t = Q.tQ.getTree(e);
            if (
              t.findNode((e) => {
                var t;
                return (
                  e.message.author.role === em.uU.User ||
                  (null === (t = e.metadata) || void 0 === t
                    ? void 0
                    : t.isClientCreatedSystemMessage) === !0
                );
              }) ||
              (Q.tQ.deleteNodesByFilter(e, (e) => {
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
            let i = Q.tQ.getThreadCurrentLeafId(e);
            if (!t.hasNodeOrMessageId(i)) return;
            let r = (0, eZ.Z)();
            Q.tQ.updateTree(e, (e) => {
              e.addNode(r, n, i, em.uU.Assistant, {
                isPlaceholderTemplateAssistantWelcomeMessage: !0,
              });
            }),
              Q.tQ.setThreadCurrentLeafId(e, r);
          }, [e, n]);
          let r = (0, Q.UL)(e);
          (0, N.useEffect)(() => {
            (0, Q.Zz)(e) &&
              Q.iN.hasThread(e) &&
              r.lastModelUsed !== ek.Mw &&
              Q.tQ.updateInitialThreadDataForNewThread(e, ek.Mw, []);
          }, [e, r, r.lastModelUsed]);
        })(d, l.current, m);
        let { data: g } = (0, p.kg)(o.current.id),
          x = (0, p.N_)(),
          { isPending: v, error: y } = x,
          j = (0, p.ZJ)(),
          w = (0, N.useMemo)(() => {
            var e, t, i, n, r, o;
            return (
              null != g &&
              (!(
                s.name === g.gizmo.display.name &&
                s.description === g.gizmo.display.description &&
                s.instructions === g.gizmo.instructions &&
                ((r = s.tools),
                (o = g.tools),
                r.length === o.length &&
                  r.every((e) => o.some((t) => t.type === e.type))) &&
                (0, R.isEqual)(
                  null !==
                    (e =
                      null === (t = s.files) || void 0 === t
                        ? void 0
                        : t.map((e) => e.file_id)) && void 0 !== e
                    ? e
                    : [],
                  null !==
                    (i =
                      null === (n = g.files) || void 0 === n
                        ? void 0
                        : n.map((e) => e.file_id)) && void 0 !== i
                    ? i
                    : []
                )
              ) ||
                s.profilePictureUrl != g.gizmo.display.profile_picture_url ||
                s.profilePictureId != g.gizmo.display.profile_pic_id)
            );
          }, [s, g]),
          P = async () => {
            let e = o.current;
            try {
              let t = await x.mutateAsync({ editorData: e, gizmoId: e.id });
              if (((a.current = t), null == o.current.id)) {
                let e = t.gizmo.id;
                (o.current = tM(
                  tM({}, o.current),
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
                null !== (t = (0, ee.Ot)(i)) && void 0 !== t
                  ? t
                  : r.formatMessage(ty.errorSavingDraft);
              throw (K.m.warning(e, { duration: 2 }), i);
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
            (0, R.debounce)(() => P(), 2e3, { trailing: !0 })
          );
        function G(e) {
          let t =
            "function" == typeof e ? e(o.current) : (0, te.x$)(o.current, e);
          (0, R.isEqual)(t, o.current) || ((o.current = t), c(o.current), O());
        }
        let S = (0, N.useRef)(),
          M = async (e) => {
            if (null == e) {
              $(!1);
              return;
            }
            try {
              let t = await tk(o.current, e, S.current);
              null != t && (G(t), (l.current = (0, R.cloneDeep)(o.current)));
            } catch (e) {
              console.error(e),
                K.m.warning("Something went wrong generating your GPT", {
                  duration: 3,
                });
            } finally {
              (S.current = Q.tQ.getThreadCurrentLeafId(e)), $(!1);
            }
          },
          E = (function (e, t, i) {
            var n;
            Q.tQ.initThread(e, {
              kind: em.OL.GizmoMagicCreate,
              gizmo_id: void 0,
              behavior_overrides: i,
            });
            let r = (0, eD.Z)(e, void 0, t, []),
              o = (0, J.hz)(),
              a =
                null === (n = (0, J.t)()) || void 0 === n ? void 0 : n.isFree();
            return async (t, n, l) => {
              if (0 === l.length) return;
              let s = Q.tQ.getThreadCurrentLeafId(e);
              for (let t of l) {
                let i = (0, eZ.Z)();
                Q.tQ.updateTree(e, (e) => {
                  e.addNodeToEnd(s, {
                    id: i,
                    children: [],
                    parentId: s,
                    message: tw.Cv.getTextAsMessage(t, em.uU.System),
                    metadata: { isClientCreatedSystemMessage: !0 },
                  });
                }),
                  Q.tQ.setThreadCurrentLeafId(e, i),
                  (s = i);
              }
              let c = s;
              tz(e, c, t, n);
              let d = {
                  conversationMode: {
                    kind: em.OL.GizmoMagicCreate,
                    gizmo_id: t.current.id,
                    behavior_overrides: i,
                  },
                },
                u = await (0, eE.Ob)(a),
                p = null;
              (0, eE.Rr)(o, u, em.OL.GizmoMagicCreate) &&
                (p = await eE.ZP.getEnforcementToken(u));
              let m = null;
              (0, eA.u7)(o, u) && (m = await eA.ZP.getEnforcementToken(u)),
                r({
                  model: ek.Mw,
                  completionType: em.Os.Next,
                  parentNodeId: c,
                  metadata: {},
                  focusOnNewCompletion: !0,
                  arkoseToken: p,
                  turnstileToken: m,
                  preflightTime: 0,
                  completionMetadata: d,
                });
            };
          })(d, M, m),
          { 0: L, 1: Z } = (0, N.useState)(void 0);
        (0, N.useEffect)(() => {
          Z(
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
        let D = async (e, t) => {
            let i = (0, te.bw)(o.current, e, t);
            if (i.length > 0) {
              K.m.warning(
                "Could not save GPT:\n\n".concat(
                  i.map((e) => "- ".concat((0, te.sw)(e))).join("\n")
                ),
                { duration: 3 }
              );
              return;
            }
            let n = await P(),
              r = n.gizmo.id;
            try {
              return (
                er.A.logEvent(eo.M.promoteGizmo, {
                  gizmo_id: n.gizmo.id,
                  sharing_recipient: e,
                  editor_tab: B,
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
                      el.E.setQueryData((0, p.Vw)(r).queryKey, e),
                        el.E.invalidateQueries({ queryKey: ["gizmos"] }),
                        el.E.invalidateQueries({
                          queryKey: ["gizmo", { gizmoId: r }],
                        }),
                        el.E.invalidateQueries({
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
                Z({
                  gizmoId: r,
                  sharingRecipient: e,
                  moderationType: _.PublishBlocked,
                  violationType: i ? I.BrandName : I.Other,
                  showModal: C.AppealAvailable,
                });
              } else
                console.error(t),
                  K.m.warning("Error saving GPT", { duration: 2 });
            }
          },
          U = x.isPending || j.isPending,
          { 0: B, 1: V } = (0, N.useState)(() => {
            let e = ea.m.getItem(ea.F.GizmoEditorTab);
            return Object.values(tE).includes(e) ? e : tE.MAGIC_MAKER;
          }),
          { width: F } = (function () {
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
          null != F && F >= 768 && B === tE.PREVIEW && V(tE.MAGIC_MAKER);
        }, [F, B]);
        let { 0: W, 1: H } = (0, N.useState)(!1),
          { 0: Y, 1: $ } = (0, N.useState)(!1),
          { 0: et, 1: ei } = (0, N.useState)(void 0);
        return (0, k.jsxs)("div", {
          className: "flex h-screen w-full flex-col items-center",
          children: [
            (0, k.jsx)(th, {
              gizmoEditorData: s,
              isLoading: U,
              hasUnpublishedChanges: w,
              isUploadingProfilePic: W,
              isGeneratingProfilePic: Y,
              publishedGizmo: g,
              promoteGizmo: async (e, t) => {
                let i = await D(e, t);
                return (
                  (o.current = tM(
                    tM({}, o.current),
                    {},
                    { sharingRecipient: e }
                  )),
                  c(o.current),
                  ea.m.setItem(ea.F.GizmoEditorTab, B),
                  i
                );
              },
              appealGizmo: async (e, t) => {
                null != L &&
                  Z(
                    tM(
                      tM({}, L),
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
                null != g && w
                  ? () => {
                      let e = el.E.getQueryData(
                        (0, p.Vw)(o.current.id).queryKey
                      );
                      if (null != e) {
                        let t = tU(e);
                        (o.current = t), c(t), P();
                      }
                    }
                  : void 0,
              draftMessage: (0, k.jsx)(tv, {
                hasUnpublishedChanges: w,
                isSavingDraft: v,
                upsertDraftError: y,
                className: "text-sm",
              }),
              showActionsModal: (e) => {
                ei(e);
              },
              className: "flex-shrink-0",
            }),
            L &&
              (0, k.jsx)(A, {
                appealState: L,
                onAppealClose: () =>
                  Z(tM(tM({}, L), {}, { showModal: C.None })),
                onAppealSubmitted: () =>
                  Z(tM(tM({}, L), {}, { showModal: C.AppealSent })),
              }),
            (0, k.jsxs)("div", {
              className: "relative flex w-full grow overflow-hidden",
              children: [
                (0, k.jsx)("div", {
                  className: "flex w-full justify-center md:w-1/2",
                  children: (0, k.jsx)("div", {
                    className: "h-full grow overflow-hidden",
                    children:
                      void 0 !== et
                        ? (0, k.jsx)(e2, {
                            currentlyEditingActionDomain: et,
                            gizmoEditorData: s,
                            updateGizmo: G,
                            onClose: () => {
                              ei(void 0);
                            },
                          })
                        : (0, k.jsxs)("div", {
                            className: "flex h-full flex-col px-2 pt-2",
                            children: [
                              (0, k.jsxs)("div", {
                                className:
                                  "flex w-full flex-row justify-center",
                                children: [
                                  (0, k.jsx)("div", {
                                    className:
                                      "absolute left-0 m-auto ml-4 mt-3 font-medium",
                                    children: (0, k.jsx)(q, {
                                      gizmoId: null == t ? void 0 : t.gizmo.id,
                                    }),
                                  }),
                                  (0, k.jsx)(tL, {
                                    editorTab: B,
                                    setEditorTab: V,
                                    className: "mb-2 flex-shrink-0 self-center",
                                  }),
                                ],
                              }),
                              (0, k.jsx)("div", {
                                className: "grow overflow-hidden",
                                children:
                                  B === tE.MAGIC_MAKER
                                    ? (0, k.jsx)("div", {
                                        className: "h-full w-full pb-5",
                                        children: (0, k.jsx)(
                                          tG,
                                          {
                                            gizmoEditorData: s,
                                            updateGizmo: G,
                                            completionCallbackResponse: M,
                                            clientThreadId: d,
                                            gizmoEditorDataRef: o,
                                            magicMakerBehaviorOverrides: m,
                                            magicMakerConversationGizmoEditorDataRef:
                                              l,
                                            requireGizmoId: z,
                                          },
                                          d
                                        ),
                                      })
                                    : B === tE.ADVANCED
                                      ? (0, k.jsx)(eP.cK, {
                                          gizmoEditorData: s,
                                          updateGizmo: G,
                                          generateProfilePic: () => {
                                            $(!0),
                                              E(o, l, [
                                                "Generate a new profile picture for this GPT using gizmo_editor generate_profile_pic. Do not prompt the user for any clarification. Do not send extra text outside of the tool function call. DO NOT CALL update_behavior or otherwise update GPT behavior in your response.",
                                              ]);
                                          },
                                          setIsUploadingProfilePic: H,
                                          isGeneratingProfilePic: Y,
                                          setIsGeneratingProfilePic: $,
                                          requireGizmoId: z,
                                          onShowActionsEditor: (e) => {
                                            ei(e);
                                          },
                                        })
                                      : (0, k.jsx)(eq, {
                                          gizmoEditorData: s,
                                          isSavingDraft: v,
                                          showTitle: !1,
                                        }),
                              }),
                            ],
                          }),
                  }),
                }),
                (0, k.jsx)("div", {
                  className: (0, es.default)(
                    "hidden w-1/2 justify-center border-l border-token-border-medium bg-token-main-surface-secondary pt-4",
                    B !== tE.PREVIEW && "md:flex"
                  ),
                  children: (0, k.jsx)("div", {
                    className: "flex-grow pb-5",
                    children: (0, k.jsx)("div", {
                      className: "h-full",
                      children: (0, k.jsx)(eq, {
                        gizmoEditorData: s,
                        isSavingDraft: v,
                      }),
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      function tB(e) {
        let { businessWorkspaceId: t, gizmoId: i } = e,
          { data: n } = (0, p.b9)(i, !0),
          r = (0, $.ec)($.F_.accountUserId),
          o = (0, $.aF)(),
          a = null == o ? void 0 : o.id,
          l = null != n && null != r && null != a && (0, eN.k1)(n, r, a, t);
        return null != n && l ? (0, k.jsx)(tR, { gizmo: n }) : null;
      }
      function tV(e) {
        let { onNewGizmoId: t } = e;
        return (0, k.jsx)(tR, { gizmo: void 0, onNewGizmoId: t });
      }
      function tF(e) {
        let { gizmoId: t, remixSourceId: i } = e,
          n = (0, ec.useRouter)(),
          r = (0, J.t)(),
          o = (0, $.ec)($.F_.businessWorkspaceId),
          a = (0, N.useRef)(void 0),
          l = t;
        return (
          null != t && a.current === t && (l = void 0),
          (0, et.yx)({
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
                            tB,
                            { businessWorkspaceId: o, gizmoId: l },
                            l
                          )
                        : (0, k.jsx)(tV, {
                            remixSourceId: i,
                            onNewGizmoId: (e) => {
                              (a.current = e),
                                window.history.replaceState(
                                  window.history.state,
                                  "",
                                  (0, ei.AA)(e)
                                );
                            },
                          }),
                  })
                : (0, k.jsx)("div", {
                    className: "flex min-h-screen items-center justify-center",
                    children: (0, k.jsx)(Y.Z, {}),
                  }),
          })
        );
      }
      var tq = i(19892),
        tW = !0;
      function tH() {
        var e;
        let t = (0, J.t)();
        (e = null == t || t.canCreateGizmos()),
          (0, N.useEffect)(() => {
            e ||
              ed().replace((0, tq.M5)(tq.LT.NO_ACCESS), void 0, {
                shallow: !0,
              });
          }, [e]);
        let i = (0, ec.useRouter)(),
          n = i.query.slug,
          r = n ? (0, p.CR)(n) : void 0,
          { remixFrom: o } = i.query,
          a = null == t ? void 0 : t.features.includes(X.PL),
          l = null == t ? void 0 : t.isFree();
        return ((0, N.useEffect)(() => {
          a &&
            (0, eE.Ob)(l).then((e) => {
              eE.ZP.initializeAndGatherData(e);
            });
        }, [a, l]),
        (0, N.useEffect)(() => {
          null == t || t.canCreateGizmos() || i.push("/");
        }, [t, i]),
        null != t && t.canCreateGizmos())
          ? (0, k.jsx)(tF, { gizmoId: r, remixSourceId: o })
          : null;
      }
    },
    15193: function (e, t, i) {
      i.d(t, {
        yt: function () {
          return eu;
        },
        lX: function () {
          return ex;
        },
        hj: function () {
          return em;
        },
        B1: function () {
          return eh;
        },
        cK: function () {
          return ej;
        },
        rv: function () {
          return eg;
        },
        sY: function () {
          return eN;
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
        p = i(68832),
        m = i(37493),
        h = i(99715),
        f = i(70079),
        g = i(76483),
        x = i(1454),
        v = i(70671),
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
      function G() {
        return (0, C.jsx)("div", {
          className:
            "relative flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-token-border-medium",
          children: (0, C.jsx)(k.Z, { className: "h-1/4 w-1/4" }),
        });
      }
      function S(e) {
        let {
            gizmoEditorData: t,
            onFileChange: i,
            generateProfilePic: n,
            isGeneratingProfilePic: r,
            setIsGeneratingProfilePic: o,
          } = e,
          a = (0, v.Z)(),
          { 0: l, 1: s } = (0, f.useState)(void 0),
          d = (0, f.useRef)(i);
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
        (0, f.useEffect)(() => {
          d.current = i;
        });
        let { open: p, getInputProps: m } = (0, g.uI)(
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
                    ? (0, C.jsx)(G, {})
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
                            children: (0, C.jsx)(x.OvN, {
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
                        onClick: p,
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
            (0, C.jsx)("input", I({}, m())),
          ],
        });
      }
      var M = i(8402),
        E = i(65455),
        A = i(23340),
        L = i(13038),
        Z = i(9417),
        D = i(78e3),
        U = i(10518),
        R = i(24343),
        B = i(83737),
        V = i(61888),
        F = i(84261),
        q = i.n(F),
        W = i(7137),
        H = i(32004),
        Y = i(94968),
        K = i(21389),
        J = i(91128),
        X = i(53197);
      function Q(e, t) {
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
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Q(Object(i), !0).forEach(function (t) {
                (0, l.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : Q(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      function ee(e) {
        var t;
        let {
            gizmoEditorData: i,
            requireGizmoId: n,
            currentModelConfig: r,
            updateGizmo: o,
          } = e,
          a = (0, v.Z)(),
          { 0: l, 1: s } = (0, f.useState)(0),
          d = (0, f.useRef)(new Map()),
          u = (0, T.Zp)(r, void 0),
          p = async (e) => {
            J.A.logEvent(X.M.uploadFile, {
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
                              return $(
                                $({}, e),
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
                            $(
                              $(
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
                            d.current.set(e, $($({}, i), {}, { progress: t })),
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
          { getInputProps: m, open: h } = (0, g.uI)(
            $(
              {
                disabled: !1,
                noClick: !0,
                onDropAccepted: p,
                multiple: !0,
                maxSize: b.xC,
                maxFiles: 10,
              },
              (0, T.Z8)(u)
            )
          ),
          x =
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
                  return $(
                    $({}, t),
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
            x.every((t) => t.file_id !== e.fileId)
          ),
          [z, _] = (0, V.partition)(
            k,
            (e) =>
              null != r &&
              (0, T._0)(r, e.file.type, e.file.name) === c.Cd.CodeInterpreter
          ),
          [I, G] = (0, V.partition)(
            x,
            (e) =>
              null != r &&
              null != e.type &&
              (0, T._0)(r, e.type, e.name) === c.Cd.CodeInterpreter
          ),
          S = (0, f.useRef)(I.length);
        return (
          (0, f.useEffect)(() => {
            I.length > S.current &&
              o((e) => {
                var t, i;
                return null !== (t = e.tools) &&
                  void 0 !== t &&
                  t.some((e) => e.type === c.qK.PYTHON)
                  ? e
                  : $(
                      $({}, e),
                      {},
                      {
                        tools: [
                          ...(null !== (i = e.tools) && void 0 !== i ? i : []),
                          { type: c.qK.PYTHON },
                        ],
                      }
                    );
              }),
              (S.current = I.length);
          }, [I.length]),
          (0, C.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
              (0, C.jsx)("div", {
                className: "rounded-lg text-token-text-tertiary",
                children: (0, C.jsx)(H.Z, $({}, et.knowledgeWarning)),
              }),
              _.length > 0 || G.length > 0
                ? (0, C.jsxs)("div", {
                    className: "flex flex-wrap gap-2",
                    children: [_.map(y), G.map(j)],
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
                  children: [(0, C.jsx)("input", $({}, m())), "Upload files"],
                }),
              }),
            ],
          })
        );
      }
      let et = (0, Y.vU)({
        knowledgeWarning: {
          id: "gizmo.knowledgeWarning",
          defaultMessage:
            "If you upload files under Knowledge, conversations with your GPT may include file contents. Files can be downloaded when Code Interpreter is enabled",
        },
      });
      var ei = i(16244);
      function en(e) {
        let { placeholder: t, text: i, onChange: n, onClose: r } = e;
        return (0, C.jsx)(ei.Z, {
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
      function er(e, t) {
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
      function eo(e) {
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
              children: (0, C.jsx)(p.u, { side: "top", label: a, children: s }),
            })
          : s;
      }
      function ea(e) {
        let { enabledTools: t, onEnabledToolsChange: i } = e,
          n = (0, d.C)(Z.L0.BrowseAvailable),
          { value: r } = (0, U.sB)(U.tz.GizmoMemory),
          o = (0, v.Z)();
        return (0, C.jsxs)("div", {
          className: "flex flex-col items-start gap-2",
          children: [
            (0, C.jsx)(eo, {
              label: "Web Browsing",
              toolType: c.qK.BROWSER,
              enabledTools: t,
              onEnabledToolsChange: i,
              disabled: !n,
              disabledTooltip: n
                ? void 0
                : (0, C.jsx)(
                    H.Z,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? er(Object(i), !0).forEach(function (t) {
                              (0, l.Z)(e, t, i[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(i)
                              )
                            : er(Object(i)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(i, t)
                                );
                              });
                      }
                      return e;
                    })({}, el.disabledBrowsingToolTip)
                  ),
            }),
            (0, C.jsx)(eo, {
              label: "DALL\xb7E Image Generation",
              toolType: c.qK.DALLE,
              enabledTools: t,
              onEnabledToolsChange: i,
            }),
            (0, C.jsx)(eo, {
              label: (0, C.jsxs)("div", {
                className: "flex items-center",
                children: [
                  "Code Interpreter",
                  (0, C.jsx)(eg, {
                    description: o.formatMessage(el.codeInterpreterTooltip),
                  }),
                ],
              }),
              toolType: c.qK.PYTHON,
              enabledTools: t,
              onEnabledToolsChange: i,
            }),
            r &&
              (0, C.jsx)(eo, {
                label: (0, C.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    "Memory",
                    (0, C.jsx)(eg, {
                      description: o.formatMessage(el.memoryTooltip),
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
      let el = (0, Y.vU)({
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
      var es = i(93031);
      function ec(e, t) {
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
      function ed(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ec(Object(i), !0).forEach(function (t) {
                (0, l.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
              : ec(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  );
                });
        }
        return e;
      }
      let eu = K.Z.input(
          n ||
            (n = (0, s.Z)([
              "w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 border focus:ring-blue-400 border-token-border-medium h-9 bg-token-main-surface-primary",
            ]))
        ),
        ep = K.Z.div(r || (r = (0, s.Z)(["text-sm text-red-500"]))),
        em = K.Z.div(o || (o = (0, s.Z)(["mb-6"]))),
        eh = K.Z.textarea(
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
      function eg(e) {
        let { description: t } = e;
        return (0, C.jsx)(p.u, {
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
            void 0 !== n && (n ? (0, C.jsx)(W.H_v, {}) : (0, C.jsx)(W.iUH, {})),
            i
              ? (0, C.jsx)(p.u, {
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
      function ev(e) {
        let { children: t, collapsed: i, initial: n } = e;
        return (0, C.jsx)(R.M, {
          initial: n,
          children:
            !i &&
            (0, C.jsx)(B.E.div, {
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
      function ey(e) {
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
              children: (0, C.jsx)(M.RR, { className: "icon-sm" }),
            }),
          ],
        });
      }
      function eb(e) {
        var t, i, n;
        let { gizmo: r, onShowActionsEditor: o, isDisabled: a } = e,
          l = (0, v.Z)(),
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
                              (0, C.jsx)(ey, {
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
              ).length >= m.L5
                ? (0, C.jsx)("div", {
                    children: l.formatMessage(eN.maxActionsReached, {
                      number: m.L5,
                    }),
                  })
                : (0, C.jsx)(O.cY, {
                    disabled: a,
                    onClick: () => {
                      o("Unknown domain");
                    },
                    className: "mt-2",
                    children: (0, C.jsx)(H.Z, ed({}, eN.createActionLabel)),
                  }),
            ],
          });
        return a
          ? (0, C.jsx)(p.u, {
              side: "top",
              label: l.formatMessage(eN.disabledCustomActionsTooltip),
              children: s,
            })
          : s;
      }
      function ej(e) {
        var t, i, n, r, o, a, l, s;
        let {
            gizmoEditorData: u,
            updateGizmo: p,
            generateProfilePic: h,
            setIsUploadingProfilePic: g,
            isGeneratingProfilePic: x,
            setIsGeneratingProfilePic: y,
            requireGizmoId: b,
            onShowActionsEditor: j,
          } = e,
          w = (0, A.B9)(),
          P = A.mx,
          N =
            null !== (t = null == u ? void 0 : u.tools) && void 0 !== t
              ? t
              : [],
          T = P ? w[P] : void 0,
          { 0: k, 1: z } = (0, f.useState)(!1),
          { 0: _, 1: I } = (0, f.useState)(!0),
          G =
            null !== (i = null == u ? void 0 : u.promptStarters) && void 0 !== i
              ? i
              : [],
          E = [...G, ...(G.length < 12 ? [""] : [])],
          R = (0, es.bw)(u),
          B = (0, D.ec)(D.F_.isBusinessWorkspace),
          F = (0, d.C)(Z.L0.WorkspaceGPTCustomActions),
          q = (0, v.Z)(),
          { value: W } = (0, U.sB)(U.tz.GizmoContacts),
          { value: Y } = (0, U.sB)(U.tz.GizmoIntents);
        return (0, C.jsxs)("div", {
          className:
            "flex h-full grow flex-col overflow-y-auto px-2 pt-6 text-sm",
          children: [
            (0, C.jsxs)("div", {
              className: "grow",
              children: [
                (0, C.jsxs)(em, {
                  children: [
                    (0, C.jsx)(S, {
                      gizmoEditorData: u,
                      generateProfilePic: h,
                      isGeneratingProfilePic: x,
                      setIsGeneratingProfilePic: y,
                      onFileChange: async (e) => {
                        if (
                          null != e &&
                          "uploading" !== e &&
                          null != e.fileId
                        ) {
                          let t = await L.Z.getFileDownloadLink(e.fileId);
                          t.status === c.KF.Success &&
                            p({
                              profilePictureId:
                                null != e.fileId ? e.fileId : void 0,
                              profilePictureUrl: t.download_url,
                            });
                        } else
                          p({
                            profilePictureId: void 0,
                            profilePictureUrl: void 0,
                          });
                        g("uploading" === e);
                      },
                    }),
                    (0, C.jsx)(ex, {
                      label: "Name",
                      description: "The name of your GPT",
                    }),
                    (0, C.jsx)(eu, {
                      type: "text",
                      placeholder: "Name your GPT",
                      value:
                        null !== (n = null == u ? void 0 : u.name) &&
                        void 0 !== n
                          ? n
                          : "",
                      onChange: (e) => {
                        p({ name: e.target.value });
                      },
                      onBlurCapture: () =>
                        p((e) => ed(ed({}, e), {}, { name: e.name.trim() })),
                    }),
                    R.includes(es.hs.GizmoNameTooLong)
                      ? (0, C.jsx)(ep, {
                          className: "mt-1",
                          children: (0, C.jsx)(
                            H.Z,
                            ed(
                              ed({}, eN.nameTooLong),
                              {},
                              { values: { length: m.aI } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, C.jsxs)(em, {
                  className: "mt-4",
                  children: [
                    (0, C.jsx)(ex, {
                      label: "Description",
                      description: "Short description of what this GPT does",
                    }),
                    (0, C.jsx)(eu, {
                      type: "text",
                      placeholder:
                        "Add a short description about what this GPT does",
                      value:
                        null !== (r = null == u ? void 0 : u.description) &&
                        void 0 !== r
                          ? r
                          : "",
                      onChange: (e) => p({ description: e.target.value }),
                      onBlurCapture: () =>
                        p((e) => {
                          var t, i;
                          return ed(
                            ed({}, e),
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
                    R.includes(es.hs.GizmoDescriptionTooLong)
                      ? (0, C.jsx)(ep, {
                          className: "mt-1",
                          children: (0, C.jsx)(
                            H.Z,
                            ed(
                              ed({}, eN.descriptionTooLong),
                              {},
                              { values: { length: m.P_ } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, C.jsxs)(em, {
                  children: [
                    (0, C.jsx)(ex, {
                      label: "Instructions",
                      description:
                        "What does this GPT do? How does it behave? What should it avoid doing?",
                    }),
                    (0, C.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, C.jsx)(eh, {
                          className: "resize-none",
                          rows: 8,
                          value: null == u ? void 0 : u.instructions,
                          onChange: (e) => p({ instructions: e.target.value }),
                          onBlurCapture: () =>
                            p((e) =>
                              ed(
                                ed({}, e),
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
                          onClick: () => z(!0),
                          children: (0, C.jsx)(M.j5, { className: "icon-sm" }),
                        }),
                      ],
                    }),
                    R.includes(es.hs.GizmoInstructionsTooLong)
                      ? (0, C.jsx)(ep, {
                          className: "mt-1",
                          children: (0, C.jsx)(
                            H.Z,
                            ed(
                              ed({}, eN.instructionsTooLong),
                              {},
                              { values: { length: m.vi } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, C.jsxs)(em, {
                  children: [
                    (0, C.jsx)(ex, {
                      label: "Conversation starters",
                      description:
                        "Examples for the user to start the conversation",
                    }),
                    (0, C.jsx)("div", {
                      className: "flex flex-col gap-1",
                      children: E.map((e, t) =>
                        (0, C.jsxs)(
                          "div",
                          {
                            className: "flex items-center",
                            children: [
                              (0, C.jsx)(eu, {
                                className: "rounded-r-none",
                                value: e,
                                type: "text",
                                onChange: (e) => {
                                  let i = e.target.value;
                                  p((e) => {
                                    var n;
                                    return ed(
                                      ed({}, e),
                                      {},
                                      {
                                        promptStarters: (0, V.compact)(
                                          t >=
                                          (null !== (n = G.length) &&
                                          void 0 !== n
                                            ? n
                                            : 0)
                                            ? [...(null != G ? G : []), i]
                                            : G.map((e, n) => {
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
                                  p((e) =>
                                    ed(
                                      ed({}, e),
                                      {},
                                      {
                                        promptStarters: G.filter(
                                          (e, i) => i !== t
                                        ),
                                      }
                                    )
                                  ),
                                children: (0, C.jsx)(M.v7, {
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
                (0, C.jsxs)(em, {
                  children: [
                    (0, C.jsx)(ex, {
                      label: "Knowledge",
                      description: q.formatMessage(eN.knowledgeExplanation),
                    }),
                    (0, C.jsx)(ee, {
                      gizmoEditorData: u,
                      requireGizmoId: b,
                      currentModelConfig: T,
                      updateGizmo: p,
                    }),
                  ],
                }),
                (0, C.jsxs)(em, {
                  children: [
                    (0, C.jsx)(ex, {
                      label: "Capabilities",
                      description: "Functionality this GPT can use",
                    }),
                    (0, C.jsx)(ea, {
                      enabledTools: N,
                      onEnabledToolsChange: (e) => p({ tools: e }),
                    }),
                  ],
                }),
                (0, C.jsxs)(em, {
                  children: [
                    (0, C.jsx)(ex, {
                      label: "Actions",
                      description: "APIs this GPT can use",
                    }),
                    (0, C.jsx)(eb, {
                      isDisabled: !!(B && !F),
                      gizmo: u,
                      onShowActionsEditor: j,
                    }),
                  ],
                }),
                !B &&
                  ((null !==
                    (a =
                      null === (l = u.files) || void 0 === l
                        ? void 0
                        : l.length) && void 0 !== a
                    ? a
                    : 0) > 0 ||
                    (null == u || null === (s = u.tools) || void 0 === s
                      ? void 0
                      : s.some((e) => e.type === c.qK.JIT_PLUGIN))) &&
                  (0, C.jsxs)(em, {
                    children: [
                      (0, C.jsx)(ex, {
                        label: "Additional Settings",
                        collapsed: !!_,
                        onClick: () => {
                          I((e) => !e);
                        },
                      }),
                      (0, C.jsx)(ev, {
                        collapsed: _,
                        initial: !1,
                        children: (0, C.jsx)(O.f8, {
                          className: "mx-3 my-1",
                          labelClassName: "w-full cursor-pointer",
                          label:
                            "Use conversation data in your GPT to improve our models",
                          id: "improve-chatgpt",
                          checked: !u.trainingDisabled,
                          onChange: () => {
                            p({ trainingDisabled: !u.trainingDisabled });
                          },
                        }),
                      }),
                    ],
                  }),
                W && (0, C.jsx)(eP, { gizmoEditorData: u, updateGizmo: p }),
                Y && (0, C.jsx)(ew, { gizmoEditorData: u, updateGizmo: p }),
              ],
            }),
            k &&
              (0, C.jsx)(en, {
                text: null !== (o = u.instructions) && void 0 !== o ? o : "",
                onChange: (e) => {
                  p({ instructions: e });
                },
                onClose: () => z(!1),
                placeholder:
                  "What does this GPT do? How does it behave? What should it avoid doing?",
              }),
          ],
        });
      }
      let ew = q()(
          () =>
            i
              .e(8682)
              .then(i.bind(i, 26359))
              .then((e) => e.GizmoIntentEditor),
          { loadableGenerated: { webpack: () => [26359] } }
        ),
        eP = q()(
          () =>
            i
              .e(8682)
              .then(i.bind(i, 43459))
              .then((e) => e.GizmoContactsEditor),
          { loadableGenerated: { webpack: () => [43459] } }
        ),
        eN = (0, Y.vU)({
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
          return p;
        },
        sw: function () {
          return m;
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
      let p =
        (((n = {})[(n.Loading = 0)] = "Loading"),
        (n[(n.UploadingProfilePic = 1)] = "UploadingProfilePic"),
        (n[(n.GeneratingProfilePic = 2)] = "GeneratingProfilePic"),
        (n[(n.GizmoNameTooLong = 3)] = "GizmoNameTooLong"),
        (n[(n.GizmoDescriptionTooLong = 4)] = "GizmoDescriptionTooLong"),
        (n[(n.GizmoInstructionsTooLong = 5)] = "GizmoInstructionsTooLong"),
        (n[(n.NameEmpty = 6)] = "NameEmpty"),
        (n[(n.MissingPublicActionPrivacyPolicyURL = 7)] =
          "MissingPublicActionPrivacyPolicyURL"),
        (n[(n.MissingCategory = 8)] = "MissingCategory"),
        n);
      function m(e) {
        switch (e) {
          case p.Loading:
            return "Loading";
          case p.UploadingProfilePic:
            return "Uploading profile picture";
          case p.GeneratingProfilePic:
            return "Generating profile picture";
          case p.GizmoNameTooLong:
            return "GPT name too long";
          case p.GizmoDescriptionTooLong:
            return "GPT description too long";
          case p.GizmoInstructionsTooLong:
            return "GPT instructions too long";
          case p.NameEmpty:
            return "GPT name cannot be empty";
          case p.MissingPublicActionPrivacyPolicyURL:
            return "Public actions require valid privacy policy URLs";
          case p.MissingCategory:
            return "Public GPTs must have a category";
          default:
            return (0, l.Z)(e), "";
        }
      }
      function h(e, t, i) {
        var n, r, l, c, d, u;
        let m = e.name.length > s.aI,
          h =
            (null !==
              (n =
                null === (r = e.description) || void 0 === r
                  ? void 0
                  : r.length) && void 0 !== n
              ? n
              : 0) > s.P_,
          f =
            (null !==
              (l =
                null === (c = e.instructions) || void 0 === c
                  ? void 0
                  : c.length) && void 0 !== l
              ? l
              : 0) > s.vi,
          g = [];
        if (
          ((null == e ? void 0 : e.name) === "" && g.push(p.NameEmpty),
          m && g.push(p.GizmoNameTooLong),
          h && g.push(p.GizmoDescriptionTooLong),
          f && g.push(p.GizmoInstructionsTooLong),
          null != t && [a.Zz.Link, a.Zz.Marketplace].includes(t))
        )
          for (let t of null === (d = e.tools) || void 0 === d
            ? void 0
            : d.filter((e) => e.type === o.qK.JIT_PLUGIN)) {
            let e =
              null === (u = t.metadata) || void 0 === u
                ? void 0
                : u.privacy_policy_url;
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
              g.push(p.MissingPublicActionPrivacyPolicyURL);
              break;
            }
          }
        return (
          t === a.Zz.Marketplace && null == i && g.push(p.MissingCategory), g
        );
      }
    },
  },
]);
//# sourceMappingURL=874-a3f01f1e610e6fb7.js.map
