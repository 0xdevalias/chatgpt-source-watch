"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1992],
  {
    11992: function (e, t, n) {
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return tH;
          },
          default: function () {
            return tJ;
          },
        });
      var r,
        i,
        o,
        a,
        s,
        l,
        c,
        u,
        d,
        p,
        m,
        f,
        h,
        g,
        v,
        x,
        b = n(37097),
        y = n(50134),
        j = n(6939),
        w = n(36112),
        P = n(4399),
        k = n.n(P),
        T = n(82256),
        N = n(61302),
        z = n(90038),
        O = n(3554),
        C = n(21120),
        I = n(14711),
        _ = n(52336),
        G = n(14765),
        M = n(91530),
        S = n.n(M),
        A = n(70079),
        E = n(21389),
        Z = n(35250),
        D = E.Z.a(c || (c = (0, z.Z)(["bold underline"]))),
        L = E.Z.textarea(
          u ||
            (u = (0, z.Z)([
              "w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32",
            ]))
        );
      function U(e) {
        var t,
          n = e.gizmoId,
          r = e.sharingRecipient,
          i = e.categories,
          o = e.moderationType,
          a = e.violationType,
          s = e.appealAvailable,
          l = e.onClose,
          c = e.onAppealSubmitted,
          u = (0, A.useState)(""),
          d = u[0],
          h = u[1],
          g = (0, A.useState)(f.Initial),
          v = g[0],
          x = g[1],
          b =
            ((t = (0, y.Z)(
              k().mark(function e() {
                return k().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), I.U.postGizmoAppeal(n, d, r, i);
                      case 2:
                        x(f.SubmittedConfirmation), null == c || c();
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return t.apply(this, arguments);
            });
        switch (v) {
          case f.Initial:
            return (0, Z.jsx)(C.Z, {
              title: (function (e) {
                switch (e) {
                  case p.PublishBlocked:
                    return "Your changes couldn’t be published";
                  case p.RemovedFromMarketplace:
                    return "Your GPT has been removed from the marketplace";
                  case p.RemovedFromPublic:
                    return "Your GPT has been removed from public view";
                  case p.Recategorized:
                    return "Your GPT has been recategorized";
                }
              })(o),
              isOpen: !0,
              onClose: l,
              showCloseButton: !0,
              primaryButton: (0, Z.jsx)(O.ZP.Button, {
                title: "Continue",
                color: "primary",
                onClick: l,
              }),
              secondaryButton: s
                ? (0, Z.jsx)(O.ZP.Button, {
                    title: "Appeal",
                    onClick: function () {
                      return x(f.AppealForm);
                    },
                  })
                : void 0,
              type: "warning",
              children: (0, Z.jsx)("div", {
                className: "flex flex-col gap-2 text-sm",
                children: (function (e, t) {
                  var n = t
                    ? (0, Z.jsx)("p", {
                        children:
                          "Alternatively you may appeal this decision and we will get back to you as soon as possible. Or you can publish to “Only me” and use this GPT privately.",
                      })
                    : void 0;
                  switch (e) {
                    case m.BrandName:
                      return (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsxs)("p", {
                            children: [
                              "Your GPT’s name is restricted for public sharing. If this is your organization’s name, please verify your website via the",
                              " ",
                              (0, Z.jsx)(D, {
                                href: "/#settings/BuilderProfile",
                                children: "Builder profile in Settings",
                              }),
                              ".",
                            ],
                          }),
                          n,
                        ],
                      });
                    case m.WrongCategory:
                      return (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)("p", {
                            children:
                              "Your GPT’s category is restricted for public sharing. Please select a different category.",
                          }),
                          n,
                        ],
                      });
                    case m.Other:
                      return (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)("p", {
                            children:
                              "Your GPT isn’t ready for public sharing yet. Usually, it’s a quick fix.",
                          }),
                          (0, Z.jsx)("p", {
                            children: "Here’s what you can do",
                          }),
                          (0, Z.jsxs)("ul", {
                            className: "list-disc pl-5",
                            children: [
                              (0, Z.jsxs)("li", {
                                children: [
                                  (0, Z.jsx)("b", {
                                    children: "Review your info:",
                                  }),
                                  " Check that your description, name, and profile picture meet our",
                                  " ",
                                  (0, Z.jsx)(D, {
                                    target: "_blank",
                                    href: "https://openai.com/brand",
                                    rel: "noreferrer",
                                    children: "brand",
                                  }),
                                  " ",
                                  "and",
                                  " ",
                                  (0, Z.jsx)(D, {
                                    target: "_blank",
                                    href: "https://openai.com/policies/usage-policies",
                                    rel: "noreferrer",
                                    children: "usage",
                                  }),
                                  " ",
                                  "guidelines.",
                                ],
                              }),
                              (0, Z.jsxs)("li", {
                                children: [
                                  (0, Z.jsx)("b", { children: "Share again:" }),
                                  " Once updated, go ahead and share your GPT.",
                                ],
                              }),
                            ],
                          }),
                          (0, Z.jsx)("p", {
                            children:
                              "Feel free to use your GPT privately for now by publishing to “only me”.",
                          }),
                          n,
                        ],
                      });
                  }
                })(a, s),
              }),
            });
          case f.AppealForm:
            return (0, Z.jsx)(C.Z, {
              title: "Appeal",
              isOpen: !0,
              onClose: l,
              showCloseButton: !0,
              shouldIgnoreClickOutside: !0,
              primaryButton: (0, Z.jsx)(O.ZP.Button, {
                title: "Submit",
                color: "primary",
                onClick: b,
                disabled: 0 === d.trim().length,
              }),
              secondaryButton: (0, Z.jsx)(O.ZP.Button, {
                title: "Back",
                onClick: function () {
                  return x(f.Initial);
                },
              }),
              type: "warning",
              children: (0, Z.jsxs)("div", {
                className: "flex flex-col gap-2 text-sm",
                children: [
                  (0, Z.jsx)("p", {
                    children:
                      "Please provide a reason for why you believe this GPT doesn’t violate our policies and should be published",
                  }),
                  (0, Z.jsx)(L, {
                    value: d,
                    onChange: function (e) {
                      return h(e.target.value);
                    },
                  }),
                ],
              }),
            });
          case f.SubmittedConfirmation:
            return (0, Z.jsx)(Z.Fragment, {});
        }
      }
      function R(e) {
        var t = e.onClose;
        return (0, Z.jsx)(C.Z, {
          title: "Appeal submitted",
          isOpen: !0,
          onClose: t,
          showCloseButton: !0,
          primaryButton: (0, Z.jsx)(O.ZP.Button, {
            title: "Close",
            color: "primary",
            onClick: t,
          }),
          type: "success",
          children: (0, Z.jsx)("div", {
            className: "flex flex-col gap-2 text-sm",
            children: (0, Z.jsx)("div", {
              children:
                "Your appeal has been submitted. We will get back to you as soon as possible.",
            }),
          }),
        });
      }
      function B(e) {
        var t,
          n = e.gizmoId,
          r = e.onClose,
          i = (0, b.b9)(n, !0).data,
          o =
            ((t = (0, y.Z)(
              k().mark(function e() {
                return k().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), I.U.postGizmoCancelAppeal(n);
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return t.apply(this, arguments);
            });
        return (0, Z.jsx)(C.Z, {
          isOpen: !0,
          onClose: S(),
          primaryButton: (0, Z.jsx)(O.ZP.Button, {
            title: "Cancel appeal",
            color: "primary",
            onClick: function () {
              o(), null == r || r();
            },
          }),
          type: "warning",
          children: (0, Z.jsxs)("div", {
            className: "flex flex-col gap-2 text-sm",
            children: [
              (0, Z.jsx)("h2", {
                className: "text-lg font-semibold",
                children: "Reviewing your appeal",
              }),
              (0, Z.jsxs)("p", {
                children: [
                  "During the review you can continue using “",
                  null == i ? void 0 : i.gizmo.display.name,
                  "” as your private GPT, but won’t be able to update it or share it with others.",
                ],
              }),
            ],
          }),
        });
      }
      function F(e) {
        var t = e.appealState,
          n = e.onAppealClose,
          r = e.onAppealSubmitted,
          i = (0, G.sB)(G.tz.GizmoAppeals).value,
          o = (0, A.useState)(!1),
          a = o[0],
          s = o[1];
        return a
          ? (0, Z.jsx)(R, {
              onClose: function () {
                s(!1), null == r || r();
              },
            })
          : (0, Z.jsxs)(Z.Fragment, {
              children: [
                (null == t ? void 0 : t.showModal) == d.AppealSent &&
                  (0, Z.jsx)(B, { gizmoId: t.gizmoId, onClose: n }),
                (null == t ? void 0 : t.showModal) == d.AppealAvailable &&
                  (0, Z.jsx)(U, {
                    gizmoId: t.gizmoId,
                    sharingRecipient: t.sharingRecipient,
                    categories: t.categories,
                    moderationType: t.moderationType,
                    violationType: t.violationType,
                    appealAvailable: i,
                    onClose: function () {
                      return null == n ? void 0 : n();
                    },
                    onAppealSubmitted: function () {
                      return s(!0);
                    },
                  }),
              ],
            });
      }
      ((r = d || (d = {}))[(r.None = 0)] = "None"),
        (r[(r.AppealAvailable = 1)] = "AppealAvailable"),
        (r[(r.AppealSent = 2)] = "AppealSent"),
        ((i = p || (p = {}))[(i.None = 0)] = "None"),
        (i[(i.PublishBlocked = 1)] = "PublishBlocked"),
        (i[(i.RemovedFromMarketplace = 2)] = "RemovedFromMarketplace"),
        (i[(i.RemovedFromPublic = 3)] = "RemovedFromPublic"),
        (i[(i.RemovedFromPrivate = 4)] = "RemovedFromPrivate"),
        (i[(i.Recategorized = 5)] = "Recategorized"),
        ((o = m || (m = {}))[(o.BrandName = 0)] = "BrandName"),
        (o[(o.WrongCategory = 1)] = "WrongCategory"),
        (o[(o.Other = 2)] = "Other"),
        ((a = f || (f = {}))[(a.Initial = 0)] = "Initial"),
        (a[(a.AppealForm = 1)] = "AppealForm"),
        (a[(a.SubmittedConfirmation = 2)] = "SubmittedConfirmation");
      var V = n(63866),
        q = n(4748),
        W = n(7144),
        K = n(1890),
        Y = n(22004),
        H = n(73582),
        J = n(88654),
        X = n(83380),
        Q = n(28818),
        $ = n(51533),
        ee = n(1755),
        et = n(99893),
        en = n(69101),
        er = n(13135),
        ei = n(19841),
        eo = n(61888),
        ea = n(10721),
        es = n.n(ea),
        el = n(70671),
        ec = n(80459),
        eu = n(11591),
        ed = n(91559),
        ep = n(5063),
        em = n(32004),
        ef = n(1703),
        eh = n(998),
        eg = n(40103);
      function ev(e) {
        var t = e.content,
          n = e.button,
          r = e.onClick;
        return (0, Z.jsxs)("div", {
          className:
            "flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",
          onClick: r,
          children: [
            (0, Z.jsx)("div", { className: "h-9 grow px-3 py-2", children: t }),
            (0, Z.jsx)("div", { className: "w-px bg-token-border-medium" }),
            n,
          ],
        });
      }
      var ex = n(94968);
      function eb(e) {
        var t = e.onSelectExample,
          n = (0, el.Z)(),
          r = (0, A.useRef)(null);
        return (0, Z.jsxs)("select", {
          onChange: function (e) {
            "label" !== e.target.value &&
              (t(ej[parseInt(e.target.value)].spec),
              (r.current.value = "label"));
          },
          className:
            "h-8 rounded-lg border border-token-border-medium bg-transparent px-2 py-0 text-sm",
          ref: r,
          children: [
            (0, Z.jsx)("option", {
              value: "label",
              children: n.formatMessage(ey.examples),
            }),
            ej.map(function (e, t) {
              return (0, Z.jsx)(
                "option",
                { value: t, children: n.formatMessage(e.displayName) },
                t
              );
            }),
          ],
        });
      }
      var ey = (0, ex.vU)({
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
        ej = [
          {
            displayName: ey.weatherExampleTitle,
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
            displayName: ey.petStoreExampleTitle,
            spec: '# Taken from https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml\n\nopenapi: "3.0.0"\ninfo:\n  version: 1.0.0\n  title: Swagger Petstore\n  license:\n    name: MIT\nservers:\n  - url: https://petstore.swagger.io/v1\npaths:\n  /pets:\n    get:\n      summary: List all pets\n      operationId: listPets\n      tags:\n        - pets\n      parameters:\n        - name: limit\n          in: query\n          description: How many items to return at one time (max 100)\n          required: false\n          schema:\n            type: integer\n            maximum: 100\n            format: int32\n      responses:\n        \'200\':\n          description: A paged array of pets\n          headers:\n            x-next:\n              description: A link to the next page of responses\n              schema:\n                type: string\n          content:\n            application/json:    \n              schema:\n                $ref: "#/components/schemas/Pets"\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\n    post:\n      summary: Create a pet\n      operationId: createPets\n      tags:\n        - pets\n      responses:\n        \'201\':\n          description: Null response\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\n  /pets/{petId}:\n    get:\n      summary: Info for a specific pet\n      operationId: showPetById\n      tags:\n        - pets\n      parameters:\n        - name: petId\n          in: path\n          required: true\n          description: The id of the pet to retrieve\n          schema:\n            type: string\n      responses:\n        \'200\':\n          description: Expected response to a valid request\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Pet"\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\ncomponents:\n  schemas:\n    Pet:\n      type: object\n      required:\n        - id\n        - name\n      properties:\n        id:\n          type: integer\n          format: int64\n        name:\n          type: string\n        tag:\n          type: string\n    Pets:\n      type: array\n      maxItems: 100\n      items:\n        $ref: "#/components/schemas/Pet"\n    Error:\n      type: object\n      required:\n        - code\n        - message\n      properties:\n        code:\n          type: integer\n          format: int32\n        message:\n          type: string',
          },
          {
            displayName: ey.blankExampleTitle,
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
        ],
        ew = n(70249),
        eP = n(9559),
        ek = n(91845),
        eT = n(46514);
      function eN(e) {
        var t = e.clientThreadId,
          n = (0, Y.oq)(t),
          r = (0, eT.Bv)(t),
          i = (0, Y.U0)(t, n),
          o = (0, j.Z)(Array(i).keys()).map(function (e) {
            return (0, Z.jsx)(
              ek.Z,
              {
                isFinalTurn: e === i - 1,
                turnIndex: e,
                clientThreadId: t,
                conversationLeafId: n,
                onChangeItemInView: eo.noop,
                onChangeRating: eo.noop,
                onRequestMoreCompletions: eo.noop,
                onRequestCompletion: eo.noop,
                currentModelId: null != r ? r : "",
              },
              e
            );
          });
        return (0, Z.jsx)(Z.Fragment, { children: o });
      }
      function ez(e) {
        var t = e.clientThreadIds;
        return (0, Z.jsx)(Z.Fragment, {
          children: t.map(function (e) {
            return (0, Z.jsx)(eN, { clientThreadId: e }, e);
          }),
        });
      }
      var eO = n(75499),
        eC = n(83002),
        eI = n(13366),
        e_ = n(18008),
        eG = n(58272),
        eM = n(99304),
        eS = n(50828),
        eA = n(80058),
        eE = n(83737),
        eZ = n(1454),
        eD = n(8844),
        eL = n(66241),
        eU = n(90439),
        eR = n(12556);
      function eB() {
        return (0, Z.jsxs)("div", {
          className: "flex items-center",
          children: [
            (0, Z.jsx)("div", {
              className: "border-token-border-secondary flex-grow border-b",
            }),
            (0, Z.jsxs)("div", {
              className:
                "flex flex-shrink-0 items-center gap-2 px-2 py-6 text-sm text-token-text-tertiary",
              children: [(0, Z.jsx)(eZ.V7f, {}), "GPT updated"],
            }),
            (0, Z.jsx)("div", {
              className: "border-token-border-secondary flex-grow border-b",
            }),
          ],
        });
      }
      ((s = h || (h = {}))[(s.MAGIC = 1)] = "MAGIC"),
        (s[(s.SANDBOX = 2)] = "SANDBOX"),
        ((g || (g = {})).TestGizmoAction = "test_gizmo_action");
      var eF = new eM.V(),
        eV = A.memo(function (e) {
          var t,
            n,
            r,
            i,
            o = e.gizmoEditorData,
            a = e.isSavingDraft,
            s = e.showTitle,
            l = (0, A.useState)(function () {
              return (0, Y.OX)();
            }),
            c = l[0],
            u = l[1],
            d = (0, A.useState)([]),
            p = d[0],
            m = d[1];
          (0, A.useEffect)(
            function () {
              m(function (e) {
                return e[e.length - 1] === c ? e : [].concat((0, j.Z)(e), [c]);
              });
            },
            [c]
          );
          var f = p.slice(0, -1);
          (0, Y.ax)(c, { kind: eu.OL.GizmoTest, gizmo_id: o.id }),
            (0, A.useEffect)(
              function () {
                Y.tQ.updateConversationMode(c, {
                  kind: eu.OL.GizmoTest,
                  gizmo_id: o.id,
                });
              },
              [c, o.id]
            );
          var h = (0, Y.UL)(c),
            g =
              null === (i = o.files) || void 0 === i
                ? void 0
                : i
                    .map(function (e) {
                      return e.file_id;
                    })
                    .join();
          (0, A.useEffect)(
            function () {
              null != Y.tQ.getServerThreadId(c) && u((0, Y.OX)());
            },
            [o.id, o.instructions, o.welcomeMessage, o.tools, g, c]
          ),
            (0, A.useEffect)(
              function () {
                (0, Y.Zz)(c) &&
                  Y.iN.hasThread(c) &&
                  h.lastModelUsed !== eT.mx &&
                  Y.tQ.updateInitialThreadDataForNewThread(c, eT.mx, []);
              },
              [c, h, o]
            );
          var v = (0, e_.tN)(function (e) {
              return e.activeSidebar;
            }),
            x = (0, A.useMemo)(
              function () {
                return { gizmoEditorData: o, mode: "test" };
              },
              [o]
            ),
            b = (0, A.useState)(0),
            w = b[0],
            P = b[1],
            T = function () {
              P(function (e) {
                return e - 360;
              });
            },
            N = o.id,
            z =
              ((n = (0, H.m0)()),
              (r = (0, eL.Z)(c, void 0, eo.noop, [])),
              (0, A.useCallback)(
                ((t = (0, y.Z)(
                  k().mark(function e(t, i, o) {
                    var a, s, l, u, d, p, m, f, h;
                    return k().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = Y.tQ.getThreadCurrentLeafId(c)),
                              (s = (0, eD.Z)()),
                              Y.tQ.updateTree(c, function (e) {
                                e.addNodeToEnd(a, {
                                  id: s,
                                  children: [],
                                  parentId: a,
                                  message: {
                                    id: s,
                                    author: { role: eu.uU.User },
                                    content: {
                                      content_type: eu.PX.Text,
                                      parts: [
                                        "Call the "
                                          .concat(i, " API with the ")
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
                                              tool_name: (0, eP.VN)(i),
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                });
                              }),
                              (l = {
                                conversationMode: {
                                  kind: eu.OL.GizmoTest,
                                  gizmo_id: t,
                                },
                              }),
                              (u = [eu.S.GPT_4]),
                              (e.next = 7),
                              (0, eS.Ob)(n)
                            );
                          case 7:
                            return (
                              (d = e.sent),
                              (e.next = 10),
                              (0, eS.Rr)((0, W.N$)(), d, eu.OL.GizmoTest)
                            );
                          case 10:
                            if (((p = e.sent), (m = null), !p)) {
                              e.next = 16;
                              break;
                            }
                            return (e.next = 15), eS.ZP.getEnforcementToken(d);
                          case 15:
                            m = e.sent;
                          case 16:
                            if (
                              ((f = (0, eA.u7)((0, W.N$)(), u)), (h = null), !f)
                            ) {
                              e.next = 22;
                              break;
                            }
                            return (e.next = 21), eA.ZP.getEnforcementToken(u);
                          case 21:
                            h = e.sent;
                          case 22:
                            r({
                              model: eT.mx,
                              completionType: eu.Os.Next,
                              parentNodeId: s,
                              metadata: {},
                              focusOnNewCompletion: !0,
                              arkoseToken: m,
                              turnstileToken: h,
                              preflightTime: 0,
                              completionMetadata: l,
                            });
                          case 23:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                function (e, n, r) {
                  return t.apply(this, arguments);
                }),
                [c, r, n]
              ));
          return (
            (0, A.useEffect)(
              function () {
                return (0, eG.LW)(eF, {
                  test_gizmo_action: function (e) {
                    var t = e.rootDomain,
                      n = e.operationName;
                    N && z(N, t, n);
                  },
                });
              },
              [z, N]
            ),
            (0, Z.jsx)(eU.D.Provider, {
              value: x,
              children: (0, Z.jsxs)("div", {
                className: (0, ei.default)(
                  "flex h-full w-full",
                  a && "cursor-wait opacity-80 transition"
                ),
                children: [
                  (0, Z.jsxs)("div", {
                    className: "flex grow flex-col",
                    children: [
                      (0, Z.jsx)("div", {
                        className: "relative mb-2 flex-shrink-0",
                        children: (0, Z.jsx)("div", {
                          className: "flex justify-center py-1",
                          children:
                            (void 0 === s || s) &&
                            (0, Z.jsxs)("div", {
                              className:
                                "group flex items-center gap-2 text-lg font-medium",
                              children: [
                                (0, Z.jsx)("div", { className: "icon-md" }),
                                (0, Z.jsxs)("button", {
                                  onClick: function () {
                                    T(), m([]), u((0, Y.OX)());
                                  },
                                  className: "flex items-center gap-2",
                                  children: [
                                    "Preview",
                                    (0, Z.jsx)(eE.E.div, {
                                      className: "text-token-text-primary",
                                      animate: { rotate: w },
                                      transition: { duration: 0.3 },
                                      children: (0, Z.jsx)(ep.u8, {
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
                      (0, Z.jsx)("div", {
                        className: (0, ei.default)(
                          "relative grow overflow-auto px-2",
                          a && "pointer-events-none"
                        ),
                        children: (0, Z.jsx)(eC.Z, {
                          clientThreadId: c,
                          hideHeader: !0,
                          renderEmptyState: (0, Z.jsxs)("div", {
                            className: "relative h-full w-full",
                            children: [
                              null != f &&
                                f.length > 0 &&
                                (0, Z.jsx)("div", {
                                  className: "h-full w-full opacity-20",
                                  children: (0, Z.jsxs)(eI.I, {
                                    children: [
                                      (0, Z.jsx)(ez, { clientThreadIds: f }),
                                      (0, Z.jsx)(eB, {}),
                                    ],
                                  }),
                                }),
                              (0, Z.jsx)("div", {
                                className:
                                  "absolute left-0 top-0 h-full w-full",
                                children: (0, Z.jsx)(eR.r, {
                                  gizmo: o,
                                  isOwner: !0,
                                  hideOwner: !0,
                                }),
                              }),
                            ],
                          }),
                          prependThreadChildren:
                            f.length > 0 &&
                            (0, Z.jsxs)(Z.Fragment, {
                              children: [
                                (0, Z.jsx)("div", {
                                  className: "opacity-50",
                                  children: (0, Z.jsx)(ez, {
                                    clientThreadIds: f,
                                  }),
                                }),
                                (0, Z.jsx)(eB, {}),
                              ],
                            }),
                        }),
                      }),
                    ],
                  }),
                  "debug" === v &&
                    (0, Z.jsx)(eO.fv, {
                      clientThreadId: c,
                      slideOver: !1,
                      onClose: function () {
                        return e_.vm.toggleActiveSidebar("debug");
                      },
                      isOpen: !0,
                    }),
                ],
              }),
            })
          );
        }),
        eq = n(49668),
        eW = ["oauth_client_id", "oauth_client_secret"],
        eK = ["api_key"];
      function eY(e, t) {
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
      function eH(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eY(Object(n), !0).forEach(function (t) {
                (0, w.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eY(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var eJ = "".concat(
        "https://chat.openai.com",
        "/g/g-TYEliDU6A-actionsgpt"
      );
      function eX(e) {
        var t = e.children;
        return (0, Z.jsx)("label", {
          className: "mb-1 block text-sm font-medium",
          children: t,
        });
      }
      function eQ(e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          l,
          c,
          u,
          d,
          p,
          m,
          f,
          h,
          g,
          v,
          x,
          b,
          y,
          j,
          w = e.jitPluginTool,
          P = e.onUpdateTool,
          k = e.onClose,
          T = (0, A.useState)({
            apiKeyValue: "",
            oauthClientIdValue: "",
            oauthClientSecretValue: "",
            oauthAuthUrlValue:
              null !==
                (t =
                  null == w
                    ? void 0
                    : null === (n = w.metadata) || void 0 === n
                      ? void 0
                      : null === (r = n.auth) || void 0 === r
                        ? void 0
                        : r.client_url) && void 0 !== t
                ? t
                : "",
            oauthTokenUrlValue:
              null !==
                (i =
                  null == w
                    ? void 0
                    : null === (o = w.metadata) || void 0 === o
                      ? void 0
                      : null === (a = o.auth) || void 0 === a
                        ? void 0
                        : a.authorization_url) && void 0 !== i
                ? i
                : "",
            oauthScopeValue:
              null !==
                (s =
                  null == w
                    ? void 0
                    : null === (l = w.metadata) || void 0 === l
                      ? void 0
                      : null === (c = l.auth) || void 0 === c
                        ? void 0
                        : c.scope) && void 0 !== s
                ? s
                : "",
            authTypeValue:
              null !==
                (u =
                  null == w
                    ? void 0
                    : null === (d = w.metadata) || void 0 === d
                      ? void 0
                      : null === (p = d.auth) || void 0 === p
                        ? void 0
                        : p.type) && void 0 !== u
                ? u
                : eu.Jv.None,
            httpAuthTypeValue:
              null !==
                (m =
                  null == w
                    ? void 0
                    : null === (f = w.metadata) || void 0 === f
                      ? void 0
                      : null === (h = f.auth) || void 0 === h
                        ? void 0
                        : h.authorization_type) && void 0 !== m
                ? m
                : "basic",
            customHeaderValue:
              null !==
                (g =
                  null == w
                    ? void 0
                    : null === (v = w.metadata) || void 0 === v
                      ? void 0
                      : null === (x = v.auth) || void 0 === x
                        ? void 0
                        : x.custom_auth_header) && void 0 !== g
                ? g
                : "",
            tokenExchangeMethodValue:
              null !==
                (b =
                  null == w
                    ? void 0
                    : null === (y = w.metadata) || void 0 === y
                      ? void 0
                      : null === (j = y.auth) || void 0 === j
                        ? void 0
                        : j.token_exchange_method) && void 0 !== b
                ? b
                : "default_post",
          }),
          N = T[0],
          z = T[1];
        function O(e) {
          z(function (t) {
            return eH(eH({}, t), e);
          });
        }
        return (0, Z.jsxs)(C.Z, {
          type: "success",
          isOpen: !0,
          title: "Authentication",
          primaryButton: (0, Z.jsx)(ed.z, {
            color: "dark",
            onClick: function () {
              P(
                N.authTypeValue === eu.Jv.None
                  ? { type: eu.Jv.None }
                  : N.authTypeValue === eu.Jv.OAuth
                    ? {
                        type: eu.Jv.OAuth,
                        client_url: N.oauthAuthUrlValue,
                        authorization_url: N.oauthTokenUrlValue,
                        authorization_content_type:
                          "application/x-www-form-urlencoded",
                        scope: N.oauthScopeValue,
                        token_exchange_method: N.tokenExchangeMethodValue,
                        oauth_client_id: N.oauthClientIdValue,
                        oauth_client_secret: N.oauthClientSecretValue,
                      }
                    : {
                        type: eu.Jv.ServiceHTTP,
                        authorization_type: N.httpAuthTypeValue,
                        custom_auth_header: N.customHeaderValue,
                        api_key: N.apiKeyValue,
                      }
              ),
                k();
            },
            children: "Save",
          }),
          secondaryButton: (0, Z.jsx)(ed.z, {
            color: "neutral",
            onClick: k,
            children: "Cancel",
          }),
          onClose: k,
          children: [
            (0, Z.jsxs)("div", {
              className: "mb-4",
              children: [
                (0, Z.jsx)(eX, { children: "Authentication Type" }),
                (0, Z.jsxs)(eg.Z.Root, {
                  onValueChange: function (e) {
                    O({ authTypeValue: e });
                  },
                  value: N.authTypeValue,
                  className: "flex gap-4",
                  children: [
                    (0, Z.jsx)(eq.Xb, { label: "None", value: eu.Jv.None }),
                    (0, Z.jsx)(eq.Xb, {
                      label: "API Key",
                      value: eu.Jv.ServiceHTTP,
                    }),
                    (0, Z.jsx)(eq.Xb, { label: "OAuth", value: eu.Jv.OAuth }),
                  ],
                }),
              ],
            }),
            "service_http" === N.authTypeValue
              ? (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(eX, { children: "API Key" }),
                    (0, Z.jsx)(ew.yt, {
                      placeholder: "<HIDDEN>",
                      type: "password",
                      value: N.apiKeyValue,
                      onChange: function (e) {
                        O({ apiKeyValue: e.target.value });
                      },
                      className: "mb-2",
                    }),
                    (0, Z.jsx)(eX, { children: "Auth Type" }),
                    (0, Z.jsxs)(eg.Z.Root, {
                      className: "mb-2 flex gap-6 overflow-hidden rounded-lg",
                      value: N.httpAuthTypeValue,
                      required: !0,
                      onValueChange: function (e) {
                        O({ httpAuthTypeValue: e });
                      },
                      children: [
                        (0, Z.jsx)(eq.Xb, { value: "basic", label: "Basic" }),
                        (0, Z.jsx)(eq.Xb, { value: "bearer", label: "Bearer" }),
                        (0, Z.jsx)(eq.Xb, { value: "custom", label: "Custom" }),
                      ],
                    }),
                    "custom" === N.httpAuthTypeValue &&
                      (0, Z.jsxs)("div", {
                        className: "mt-2",
                        children: [
                          (0, Z.jsx)(eX, { children: "Custom Header Name" }),
                          (0, Z.jsx)(ew.yt, {
                            value: N.customHeaderValue,
                            onChange: function (e) {
                              O({ customHeaderValue: e.target.value });
                            },
                            className: "mb-2",
                            placeholder: "X-Api-Key",
                          }),
                        ],
                      }),
                  ],
                })
              : "oauth" === N.authTypeValue
                ? (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)(eX, { children: "Client ID" }),
                      (0, Z.jsx)(ew.yt, {
                        placeholder: "<HIDDEN>",
                        type: "password",
                        value: N.oauthClientIdValue,
                        onChange: function (e) {
                          O({ oauthClientIdValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, Z.jsx)(eX, { children: "Client Secret" }),
                      (0, Z.jsx)(ew.yt, {
                        placeholder: "<HIDDEN>",
                        type: "password",
                        value: N.oauthClientSecretValue,
                        onChange: function (e) {
                          O({ oauthClientSecretValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, Z.jsx)(eX, { children: "Authorization URL" }),
                      (0, Z.jsx)(ew.yt, {
                        value: N.oauthAuthUrlValue,
                        onChange: function (e) {
                          O({ oauthAuthUrlValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, Z.jsx)(eX, { children: "Token URL" }),
                      (0, Z.jsx)(ew.yt, {
                        value: N.oauthTokenUrlValue,
                        onChange: function (e) {
                          O({ oauthTokenUrlValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, Z.jsx)(eX, { children: "Scope" }),
                      (0, Z.jsx)(ew.yt, {
                        value: N.oauthScopeValue,
                        onChange: function (e) {
                          O({ oauthScopeValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, Z.jsx)(eX, { children: "Token Exchange Method" }),
                      (0, Z.jsxs)(eg.Z.Root, {
                        value: N.tokenExchangeMethodValue,
                        required: !0,
                        onValueChange: function (e) {
                          O({ tokenExchangeMethodValue: e });
                        },
                        children: [
                          (0, Z.jsx)(eq.Xb, {
                            value: "default_post",
                            label: "Default (POST request)",
                          }),
                          (0, Z.jsx)(eq.Xb, {
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
        var t = e.onImport,
          n = e.onClose,
          r = (0, A.useState)(""),
          i = r[0],
          o = r[1],
          a = (0, A.useState)(!1),
          s = a[0],
          l = a[1];
        function c() {
          return (c = (0, y.Z)(
            k().mark(function e() {
              var r, o;
              return k().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (e.prev = 0), (o = new URL(i)), (e.next = 7);
                        break;
                      case 4:
                        return (
                          (e.prev = 4), (e.t0 = e.catch(0)), e.abrupt("return")
                        );
                      case 7:
                        if (!(null !== (r = o) && void 0 !== r && r.hostname)) {
                          e.next = 18;
                          break;
                        }
                        return (
                          l(!0),
                          (e.prev = 9),
                          (e.next = 12),
                          I.U.fetchOpenAPISpec(i)
                        );
                      case 12:
                        t(e.sent.content), n();
                      case 15:
                        return (e.prev = 15), l(!1), e.finish(15);
                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [0, 4],
                  [9, , 15, 18],
                ]
              );
            })
          )).apply(this, arguments);
        }
        return (0, Z.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            (0, Z.jsx)("input", {
              name: "url",
              value: i,
              onChange: function (e) {
                o(e.target.value);
              },
              placeholder: "https://...",
              className:
                "h-8 rounded border border-token-border-light px-2 text-sm",
              autoFocus: !0,
            }),
            (0, Z.jsx)(eq.cY, {
              color: "dark",
              loading: s,
              onClick: function () {
                return c.apply(this, arguments);
              },
              children: "Import",
            }),
            (0, Z.jsx)(eq.cY, {
              color: "neutral",
              onClick: n,
              children: "Cancel",
            }),
          ],
        });
      }
      function e0(e) {
        var t = e.rootDomain,
          n = e.operations;
        return null == n || 0 === n.length
          ? (0, Z.jsx)("div", {
              className: "text-sm text-token-text-tertiary",
              children: "Operations in your schema will show here.",
            })
          : (0, Z.jsx)("table", {
              className: "w-full text-sm",
              children: (0, Z.jsxs)("tbody", {
                children: [
                  (0, Z.jsxs)("tr", {
                    className:
                      "border-b border-token-border-light text-left text-xs text-token-text-tertiary",
                    children: [
                      (0, Z.jsx)("th", {
                        className: "py-1 font-normal",
                        children: "Name",
                      }),
                      (0, Z.jsx)("th", {
                        className: "py-1 font-normal",
                        children: "Method",
                      }),
                      (0, Z.jsx)("th", {
                        className: "py-1 font-normal",
                        children: "Path",
                      }),
                      (0, Z.jsx)("th", { className: "py-1 font-normal" }),
                    ],
                  }),
                  n.map(function (e) {
                    return (0, Z.jsxs)(
                      "tr",
                      {
                        className: "border-b border-token-border-light",
                        children: [
                          (0, Z.jsx)("td", {
                            className: "py-2",
                            children: e.operationName,
                          }),
                          (0, Z.jsx)("td", {
                            className: "py-2 uppercase",
                            children: e.method,
                          }),
                          (0, Z.jsx)("td", {
                            className: "py-2",
                            children: e.path,
                          }),
                          (0, Z.jsx)("td", {
                            className: "py-2",
                            children: (0, Z.jsx)(eq.cY, {
                              color: "neutral",
                              onClick: function () {
                                t &&
                                  eF.publish({
                                    kind: g.TestGizmoAction,
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
                    );
                  }),
                ],
              }),
            });
      }
      function e1(e) {
        var t = e.validationResponse;
        return (0, Z.jsxs)("div", {
          children: [
            (0, Z.jsx)(ew.lX, { label: "Available actions" }),
            (0, Z.jsx)(e0, {
              rootDomain: t.success ? t.spec.root_domain : void 0,
              operations: t.success ? t.spec.operations : void 0,
            }),
          ],
        });
      }
      function e2(e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          l,
          c = e.currentlyEditingActionDomain,
          u = e.gizmoEditorData,
          d = e.updateGizmo,
          p = e.onClose,
          m = (0, A.useState)(c),
          f = m[0],
          h = m[1],
          g = (0, A.useRef)(f);
        (0, A.useEffect)(
          function () {
            g.current = f;
          },
          [f]
        );
        var v =
            null == u
              ? void 0
              : null === (t = u.tools) || void 0 === t
                ? void 0
                : t.find(function (e) {
                    return (
                      e.type === T.qK.JIT_PLUGIN && e.metadata.domain === f
                    );
                  }),
          x = (0, A.useState)(function () {
            return null == v;
          })[0],
          b =
            null !==
              (n =
                null == v
                  ? void 0
                  : null === (r = v.metadata) || void 0 === r
                    ? void 0
                    : r.raw_spec) && void 0 !== n
              ? n
              : "",
          w = (0, A.useState)(!1),
          P = w[0],
          N = w[1],
          z = (0, A.useState)(!1),
          O = z[0],
          C = z[1];
        function _(e) {
          d(function (t) {
            return eH(
              eH({}, t),
              {},
              {
                tools: v
                  ? t.tools.map(function (t) {
                      return t.type === T.qK.JIT_PLUGIN &&
                        t.metadata.domain === f
                        ? eH(
                            eH({}, t),
                            {},
                            {
                              metadata: eH(
                                eH(eH({}, t.metadata), e),
                                {},
                                { json_schema: void 0 }
                              ),
                            }
                          )
                        : t;
                    })
                  : [].concat((0, j.Z)(t.tools), [
                      {
                        type: T.qK.JIT_PLUGIN,
                        metadata: eH(
                          eH(
                            {
                              raw_spec: "",
                              domain: null != f ? f : "Unknown domain",
                              action_id: "",
                            },
                            e
                          ),
                          {},
                          { json_schema: void 0 }
                        ),
                      },
                    ]),
              }
            );
          });
        }
        var G = (0, A.useState)(),
          M = G[0],
          S = G[1],
          E = (0, A.useState)(function () {
            var e;
            return (0, eo.debounce)(
              ((e = (0, y.Z)(
                k().mark(function e(t) {
                  var n, r, i, o;
                  return k().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), I.U.validateOpenAPISpec(t);
                        case 2:
                          if (
                            (S((n = e.sent)),
                            !(r = n.success ? n.spec.root_domain : void 0))
                          ) {
                            e.next = 13;
                            break;
                          }
                          if (
                            !(r !== g.current) ||
                            !(null == u
                              ? void 0
                              : null === (i = u.tools) || void 0 === i
                                ? void 0
                                : i.find(function (e) {
                                    return (
                                      e.type === T.qK.JIT_PLUGIN &&
                                      e.metadata.domain === r
                                    );
                                  }))
                          ) {
                            e.next = 11;
                            break;
                          }
                          return (
                            S({
                              success: !1,
                              errors: [
                                "Action sets cannot have duplicate domains - ".concat(
                                  r,
                                  " already exists on another action"
                                ),
                              ],
                            }),
                            e.abrupt("return")
                          );
                        case 11:
                          d(function (e) {
                            return eH(
                              eH({}, e),
                              {},
                              {
                                tools: e.tools.map(function (e) {
                                  return e.type === T.qK.JIT_PLUGIN &&
                                    e.metadata.domain === g.current
                                    ? eH(
                                        eH({}, e),
                                        {},
                                        {
                                          metadata: eH(
                                            eH({}, e.metadata),
                                            {},
                                            { domain: r }
                                          ),
                                        }
                                      )
                                    : e;
                                }),
                              }
                            );
                          }),
                            h(r);
                        case 13:
                          n.success &&
                            n.known_auth &&
                            n.known_privacy_policy &&
                            v &&
                            ((o = eH({ type: eu.Jv.OAuth }, n.known_auth)),
                            (0, eo.isEqual)(v.metadata.auth, o) ||
                              _({
                                auth: eH({ type: eu.Jv.OAuth }, n.known_auth),
                              }),
                            v.metadata.privacy_policy_url !==
                              n.known_privacy_policy &&
                              _({
                                privacy_policy_url: n.known_privacy_policy,
                              }));
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function (t) {
                return e.apply(this, arguments);
              }),
              1e3
            );
          })[0],
          D = null != M ? (M.success ? M.warnings : M.errors) : void 0;
        (0, A.useEffect)(
          function () {
            "" === b ? (S(void 0), E.cancel()) : E(b);
          },
          [E, b]
        );
        var L = function (e) {
          try {
            _({ raw_spec: JSON.stringify(JSON.parse(e), null, 2) });
          } catch (t) {
            try {
              _({
                raw_spec: ef.ZP.stringify(ef.ZP.parse(e), {
                  lineWidth: 120,
                  indent: 2,
                }),
              });
            } catch (e) {}
          }
        };
        return (0, Z.jsxs)("div", {
          className: "h-full overflow-auto px-4 pb-12 text-sm",
          children: [
            (0, Z.jsxs)("div", {
              className:
                "relative flex flex-col items-center px-16 py-6 text-center",
              children: [
                (0, Z.jsx)("div", {
                  className: "absolute left-0 top-6",
                  children: (0, Z.jsx)(ed.z, {
                    color: "neutral",
                    onClick: p,
                    children: (0, Z.jsx)(ep.L7, { className: "icon-md" }),
                  }),
                }),
                null != v &&
                  (0, Z.jsx)("div", {
                    className: "absolute right-0 top-6",
                    children: (0, Z.jsx)(ed.z, {
                      color: "neutral",
                      onClick: function () {
                        window.confirm(
                          "Are you sure you want to delete this action?"
                        ) &&
                          (d(function (e) {
                            return eH(
                              eH({}, e),
                              {},
                              {
                                tools: e.tools.filter(function (e) {
                                  return (
                                    e.type !== T.qK.JIT_PLUGIN ||
                                    e.metadata.domain !== f
                                  );
                                }),
                              }
                            );
                          }),
                          p());
                      },
                      className: "text-red-500",
                      children: (0, Z.jsx)(ep.a_, { className: "icon-md" }),
                    }),
                  }),
                (0, Z.jsx)("div", {
                  className: "text-xl font-medium",
                  children: x ? "Add actions" : "Edit actions",
                }),
                (0, Z.jsx)("div", {
                  className: "text-sm text-token-text-tertiary",
                  children:
                    "Let your GPT retrieve information or take actions outside of ChatGPT.",
                }),
                (0, Z.jsx)("div", {
                  className: "text-sm text-token-text-tertiary",
                  children: (0, Z.jsx)("a", {
                    href: "https://help.openai.com/en/articles/8554397-creating-a-gpt",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "font-medium",
                    children: "Learn more.",
                  }),
                }),
              ],
            }),
            (0, Z.jsxs)(ew.hj, {
              className: "relative",
              children: [
                (0, Z.jsx)(ew.lX, { label: "Authentication" }),
                (0, Z.jsx)(ev, {
                  onClick: function () {
                    N(!0);
                  },
                  content: (function (e) {
                    switch (e) {
                      case eu.Jv.None:
                        return "None";
                      case eu.Jv.OAuth:
                        return "OAuth";
                      case eu.Jv.ServiceHTTP:
                        return "API Key";
                    }
                  })(
                    null !==
                      (i =
                        null == v
                          ? void 0
                          : null === (o = v.metadata) || void 0 === o
                            ? void 0
                            : null === (a = o.auth) || void 0 === a
                              ? void 0
                              : a.type) && void 0 !== i
                      ? i
                      : eu.Jv.None
                  ),
                  button: (0, Z.jsx)("button", {
                    color: "neutral",
                    className: "flex items-center gap-2 px-3",
                    children: (0, Z.jsx)(ep.RR, { className: "icon-sm" }),
                  }),
                }),
                P &&
                  (0, Z.jsx)(eQ, {
                    jitPluginTool: v,
                    onUpdateTool: function (e) {
                      switch (e.type) {
                        case eu.Jv.None:
                          _({ auth: { type: eu.Jv.None } });
                          break;
                        case eu.Jv.OAuth:
                          var t = e.oauth_client_id,
                            n = e.oauth_client_secret;
                          _({
                            auth: (0, ec.Z)(e, eW),
                            oauth_client_id: t,
                            oauth_client_secret: n,
                          });
                          break;
                        case eu.Jv.ServiceHTTP:
                          var r = e.api_key;
                          _({ auth: (0, ec.Z)(e, eK), api_key: r });
                      }
                    },
                    onClose: function () {
                      N(!1);
                    },
                  }),
              ],
            }),
            (0, Z.jsxs)("div", {
              children: [
                (0, Z.jsxs)("div", {
                  className: "mb-1 flex h-8 items-center justify-between",
                  children: [
                    (0, Z.jsx)("label", {
                      className: "font-medium text-token-text-primary",
                      children: "Schema",
                    }),
                    (0, Z.jsx)("div", {
                      className: "flex items-center",
                      children: O
                        ? (0, Z.jsx)(e$, {
                            onImport: function (e) {
                              L(e);
                            },
                            onClose: function () {
                              C(!1);
                            },
                          })
                        : (0, Z.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, Z.jsx)(eq.cY, {
                                color: "neutral",
                                onClick: function () {
                                  C(!0);
                                },
                                children: "Import from URL",
                              }),
                              (0, Z.jsx)(eb, {
                                onSelectExample: function (e) {
                                  _({ raw_spec: e });
                                },
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
                (0, Z.jsxs)("div", {
                  className:
                    "mb-8 overflow-hidden rounded-lg border border-token-border-light",
                  children: [
                    (0, Z.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, Z.jsx)("textarea", {
                          value: b,
                          onChange: function (e) {
                            _({ raw_spec: e.target.value });
                          },
                          spellCheck: !1,
                          placeholder: "Enter your OpenAPI schema here",
                          className:
                            "block h-96 w-full border-none bg-transparent p-2 font-mono text-xs text-token-text-primary",
                        }),
                        (0, Z.jsx)("div", {
                          className: "absolute bottom-2 right-2 flex gap-2",
                          children:
                            "" !== b
                              ? (0, Z.jsx)(eq.cY, {
                                  onClick: function () {
                                    L(b);
                                  },
                                  children: "Format",
                                })
                              : (0, Z.jsxs)(eq.cY, {
                                  as: "a",
                                  to: eJ,
                                  openNewTab: !0,
                                  children: [
                                    (0, Z.jsx)(em.Z, {
                                      id: "gizmo.actions.actionsGptHelp",
                                      defaultMessage:
                                        "Get help from ActionsGPT",
                                    }),
                                    (0, Z.jsx)(ep.fe, { className: "icon-md" }),
                                  ],
                                }),
                        }),
                      ],
                    }),
                    null != D &&
                      (null == D ? void 0 : D.length) > 0 &&
                      (0, Z.jsx)("div", {
                        className:
                          "border-t border-token-border-light p-2 text-red-500",
                        children: D.map(function (e, t) {
                          return (0, Z.jsx)("div", { children: e }, t);
                        }),
                      }),
                  ],
                }),
              ],
            }),
            null != M && (0, Z.jsx)(e1, { validationResponse: M }),
            (0, Z.jsxs)("div", {
              className: "mt-4",
              children: [
                (0, Z.jsx)(ew.lX, {
                  label: "Privacy policy",
                  description:
                    "Privacy policy is required for all public GPTs.",
                }),
                (0, Z.jsx)(eh.Z, {
                  name: "privacyPolicyUrl",
                  value:
                    null !==
                      (s =
                        null == v
                          ? void 0
                          : null === (l = v.metadata) || void 0 === l
                            ? void 0
                            : l.privacy_policy_url) && void 0 !== s
                      ? s
                      : "",
                  placeholder: "https://api.example-weather-app.com/privacy",
                  onChange: function (e) {
                    _({ privacy_policy_url: e.target.value });
                  },
                }),
              ],
            }),
          ],
        });
      }
      var e3 = n(79505),
        e5 = n(87942),
        e6 = n(99715),
        e4 = n(22189),
        e8 = n(5667),
        e9 = n(37178),
        e7 = n(90166),
        te = n(10466),
        tt = n(57664);
      function tn(e, t) {
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
      function tr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tn(Object(n), !0).forEach(function (t) {
                (0, w.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tn(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function ti(e) {
        window.history.length > 1 ? e.back() : e.push((0, Q.L7)());
      }
      function to(e) {
        var t,
          n,
          r,
          i = e.gizmo,
          o = e.publishedGizmo,
          a = e.promoteGizmo,
          s = e.appealGizmo,
          l = e.setStep,
          c = e.showActionsModal,
          u = (0, A.useState)(!1),
          d = u[0],
          p = u[1],
          m = (0, H.ec)(H.F_.isBusinessWorkspace),
          f = (0, el.Z)(),
          h = (0, A.useState)(
            (0, b.Sg)(i)
              ? m
                ? _.Zz.Workspace
                : _.Zz.Marketplace
              : i.sharingRecipient
          ),
          g = h[0],
          v = h[1],
          x = (0, A.useMemo)(
            function () {
              return (
                (null == o ? void 0 : o.gizmo.sharing_targets) == null ||
                o.gizmo.sharing_targets.some(function (e) {
                  return e.recipient === g && e.allowed;
                })
              );
            },
            [null == o ? void 0 : o.gizmo.sharing_targets, g]
          ),
          j = (0, b.WL)(),
          w = j.data,
          P = j.isLoading,
          N = (0, A.useState)(
            null != o && o.gizmo.display.categories.length > 0
              ? o.gizmo.display.categories[0]
              : void 0
          ),
          z = N[0],
          O = N[1];
        (0, A.useEffect)(
          function () {
            O(null == o ? void 0 : o.gizmo.display.categories[0]);
          },
          [null == o ? void 0 : o.gizmo.display.categories]
        );
        var C = (0, A.useState)(void 0),
          M = C[0],
          S = C[1],
          E = (0, A.useRef)(
            (0, eo.throttle)(function (e, t) {
              return I.U.generateCategory(e, t);
            }, 1e3)
          ),
          D =
            null != w && w.is_verified
              ? void 0
              : f.formatMessage(tg.displayNameRequiredHint);
        g !== _.Zz.Marketplace || null == D || P || v(_.Zz.Link);
        var L =
            m &&
            !(
              null !== (t = i.sharingTargets) &&
              void 0 !== t &&
              t.some(function (e) {
                return e.recipient === _.Zz.Link;
              })
            ),
          U = (0, tt.bw)(i, g, z),
          R = U.includes(tt.hs.MissingPublicActionPrivacyPolicyURL),
          B = i.tools.find(function (e) {
            return e.type === T.qK.JIT_PLUGIN && !e.metadata.privacy_policy_url;
          }),
          F = (0, H.ec)(function (e) {
            return e.currentWorkspace;
          }),
          V = (0, W.hz)(),
          q = (0, b.Z1)();
        (0, A.useEffect)(
          function () {
            if (!(null != V && V.includes(K.L0.GizmoStore))) {
              O("other");
              return;
            }
            var e = !0;
            return (
              (0, y.Z)(
                k().mark(function t() {
                  var n;
                  return k().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (((t.prev = 0), !(null != z))) {
                              t.next = 3;
                              break;
                            }
                            return t.abrupt("return");
                          case 3:
                            return (
                              (t.next = 5), E.current(i.name, i.instructions)
                            );
                          case 5:
                            (n = t.sent),
                              e && null == z && (n ? O(n.id) : S(!0)),
                              (t.next = 12);
                            break;
                          case 9:
                            (t.prev = 9),
                              (t.t0 = t.catch(0)),
                              e && null == z && S(!0);
                          case 12:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 9]]
                  );
                })
              )(),
              function () {
                e = !1;
              }
            );
          },
          [i.instructions, i.name, V, z]
        );
        var Y = null == V ? void 0 : V.includes(K.L0.GizmoStore),
          J = (0, G.sB)(G.tz.GizmoAppeals).value;
        return (0, Z.jsxs)("div", {
          children: [
            (0, Z.jsx)("div", {
              className: "mb-2 text-sm font-medium text-token-text-tertiary",
              children: (0, Z.jsx)(em.Z, tr({}, tg.publishTo)),
            }),
            (0, Z.jsxs)("div", {
              className: "flex flex-col gap-3 text-sm",
              children: [
                (0, Z.jsxs)($.fC, {
                  value: g,
                  onValueChange: function (e) {
                    return v(e);
                  },
                  className: "space-y-2",
                  children: [
                    i.sharingTargets &&
                      i.sharingTargets.map(function (e, t) {
                        return (0, Z.jsx)(
                          eq.Xb,
                          {
                            value: e.recipient,
                            disabled:
                              e.recipient === _.Zz.Marketplace && null != D,
                            tooltipText:
                              e.recipient === _.Zz.Marketplace
                                ? (null != D ? D : Y)
                                  ? f.formatMessage(
                                      tg.publicSharingHintStoreEnabled
                                    )
                                  : f.formatMessage(tg.publicSharingHint)
                                : void 0,
                            label: (0, eP.MI)(e.recipient, F, f),
                          },
                          t
                        );
                      }),
                    L &&
                      (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(eq.Xb, {
                            value: _.Zz.Link,
                            disabled: !0,
                            tooltipText: f.formatMessage(
                              tg.workspaceDisabledHint
                            ),
                            label: (0, eP.MI)(_.Zz.Link, F, f),
                          }),
                          (0, Z.jsx)(eq.Xb, {
                            value: _.Zz.Marketplace,
                            disabled: !0,
                            tooltipText: f.formatMessage(
                              tg.workspaceDisabledHint
                            ),
                            label: (0, eP.MI)(_.Zz.Marketplace, F, f),
                          }),
                        ],
                      }),
                  ],
                }),
                R &&
                  (0, Z.jsx)("div", {
                    className: "text-xs text-red-500",
                    children: (0, Z.jsx)(
                      em.Z,
                      tr(
                        tr({}, tg.actionNeedsPrivacyPolicyURL),
                        {},
                        {
                          values: {
                            fixlink: function (e) {
                              return (0, Z.jsx)("button", {
                                onClick: function () {
                                  c(null == B ? void 0 : B.metadata.action_id);
                                },
                                className: "underline",
                                children: e,
                              });
                            },
                          },
                        }
                      )
                    ),
                  }),
                g !== _.Zz.Private &&
                  (0, Z.jsx)(te.QT, {
                    gizmoAvatar: i.profilePictureUrl,
                    gizmoName: i.name,
                    canEdit: !0,
                  }),
                g === _.Zz.Marketplace &&
                  (null == V ? void 0 : V.includes(K.L0.GizmoStore)) &&
                  (M
                    ? (0, Z.jsx)("div", {
                        className: "text-xs text-red-500",
                        children: (0, Z.jsx)(em.Z, tr({}, tg.categoryError)),
                      })
                    : (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsxs)("div", {
                            className:
                              "flex items-center justify-between text-sm font-medium text-token-text-tertiary",
                            children: [
                              (0, Z.jsx)(em.Z, tr({}, tg.categoryLabel)),
                              (0, Z.jsx)(e7.u, {
                                label: (0, Z.jsx)("span", {
                                  className: "w-36 text-xs",
                                  children: (0, Z.jsx)(
                                    em.Z,
                                    tr({}, tg.categoryLabelTooltip)
                                  ),
                                }),
                                side: "top",
                                children: (0, Z.jsx)(ep.VX, {
                                  className: "icon-sm",
                                }),
                              }),
                            ],
                          }),
                          (0, Z.jsx)(tf, {
                            category: null != z ? z : "",
                            categories:
                              null !==
                                (n =
                                  null === (r = q.data) || void 0 === r
                                    ? void 0
                                    : r.categories) && void 0 !== n
                                ? n
                                : [],
                            setCategory: O,
                          }),
                        ],
                      })),
                x
                  ? (0, Z.jsx)(eq.cY, {
                      color: "primary",
                      disabled: U.length > 0,
                      loading: d,
                      onClick: (0, y.Z)(
                        k().mark(function e() {
                          var t;
                          return k().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0), p(!0), (e.next = 4), a(g, z)
                                    );
                                  case 4:
                                    if (null != (t = e.sent)) {
                                      e.next = 7;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 7:
                                    1 === t.gizmo.live_version
                                      ? es().push((0, b.m_)(t))
                                      : l({
                                          type: "published",
                                          publishedGizmo: t,
                                        });
                                  case 8:
                                    return (e.prev = 8), p(!1), e.finish(8);
                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, , 8, 11]]
                          );
                        })
                      ),
                      className: "w-full",
                      children: (0, Z.jsx)(em.Z, tr({}, tg.privacyConfirm)),
                    })
                  : J
                    ? (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)("div", {
                            className:
                              "flex items-center justify-between text-sm text-token-text-secondary",
                            children: (0, Z.jsx)(
                              em.Z,
                              tr({}, tg.appealNeededLabel)
                            ),
                          }),
                          (0, Z.jsx)(eq.cY, {
                            color: "primary",
                            onClick: (0, y.Z)(
                              k().mark(function e() {
                                return k().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), s(g, z);
                                      case 2:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            ),
                            className: "w-full",
                            children: (0, Z.jsx)(em.Z, tr({}, tg.appealButton)),
                          }),
                        ],
                      })
                    : (0, Z.jsx)("div", {
                        className:
                          "flex items-center justify-between text-sm text-token-text-secondary",
                        children: (0, Z.jsx)(em.Z, tr({}, tg.recipientBlocked)),
                      }),
              ],
            }),
          ],
        });
      }
      function ta(e) {
        return "".concat("https://chat.openai.com").concat((0, b.m_)(e));
      }
      function ts(e) {
        var t = e.publishedGizmo,
          n = ta(t);
        return (0, Z.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [
            (0, Z.jsx)("div", {
              className: "font-medium",
              children: (0, Z.jsx)(em.Z, tr({}, tg.publishedTitle)),
            }),
            (0, Z.jsxs)("div", {
              className:
                "flex gap-1 rounded bg-token-main-surface-secondary px-2 py-1",
              children: [
                (0, Z.jsx)("div", {
                  className: "text-ellipsis break-all line-clamp-1",
                  children: n,
                }),
                (0, Z.jsx)("button", {
                  onClick: function () {
                    (0, e9.v)(ta(t));
                  },
                  className:
                    "text-token-text-secondary transition hover:text-token-text-primary",
                  children: (0, Z.jsx)(ep.dS, { className: "icon-sm" }),
                }),
              ],
            }),
            (0, Z.jsx)(eq.cY, {
              color: "primary",
              as: "link",
              to: n,
              className: "w-full",
              children: (0, Z.jsx)(em.Z, tr({}, tg.viewGPT)),
            }),
          ],
        });
      }
      function tl(e) {
        var t = e.gizmo,
          n = e.publishedGizmo,
          r = e.promoteGizmo,
          i = e.appealGizmo,
          o = e.showActionsModal,
          a = (0, A.useState)({ type: "privacy" }),
          s = a[0],
          l = a[1];
        return (0, Z.jsx)("div", {
          className:
            "w-60 rounded-lg border border-token-border-medium bg-token-main-surface-primary p-4 text-sm",
          children:
            "privacy" === s.type
              ? (0, Z.jsx)(to, {
                  gizmo: t,
                  publishedGizmo: n,
                  promoteGizmo: r,
                  appealGizmo: i,
                  setStep: l,
                  showActionsModal: o,
                })
              : (0, Z.jsx)(ts, { publishedGizmo: s.publishedGizmo }),
        });
      }
      function tc(e) {
        var t,
          n = e.gizmo,
          r = e.publishedGizmo,
          i = e.isLoading,
          o = e.isUploadingProfilePic,
          a = e.isGeneratingProfilePic,
          s = e.promoteGizmo,
          l = e.appealGizmo,
          c = e.hasUnpublishedChanges,
          u = e.showActionsModal,
          d = null != n ? (0, tt.bw)(n) : [],
          p = (0, el.Z)();
        (null == n || i) && d.push(tt.hs.Loading),
          o && d.push(tt.hs.UploadingProfilePic),
          a && d.push(tt.hs.GeneratingProfilePic);
        var m = (0, b.Sg)(n);
        return (0, Z.jsxs)(e4.fC, {
          modal: !0,
          children: [
            (0, Z.jsx)(e4.xz, {
              asChild: !0,
              children: (0, Z.jsx)(eq.cY, {
                color: "primary",
                className: "cursor-pointer whitespace-nowrap",
                disabled: void 0 === n.id,
                tooltip: d.length > 0 ? d.map(tt.sw).join("\n") : void 0,
                children: (0, Z.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    c && !m
                      ? p.formatMessage(tg.publishChanges)
                      : p.formatMessage(tg.save),
                    (0, Z.jsx)(ep.ud, {}),
                  ],
                }),
              }),
            }),
            (0, Z.jsx)(e4.h_, {
              children: (0, Z.jsx)(e4.VY, {
                side: "bottom",
                align: "end",
                sideOffset: 8,
                children: (0, Z.jsx)(tl, {
                  gizmo: n,
                  publishedGizmo: r,
                  promoteGizmo: s,
                  appealGizmo: l,
                  showActionsModal: u,
                }),
              }),
            }),
          ],
        });
      }
      function tu(e) {
        var t = e.gizmoEditorData,
          n = e.publishedGizmo,
          r = e.revertDraft,
          i = (0, el.Z)(),
          o = (0, A.useState)(!1),
          a = o[0],
          s = o[1],
          l = (0, W.hz)();
        return (null != l && l.includes("debug")) ||
          (null == t ? void 0 : t.id) != null
          ? (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsxs)(e6.fC, {
                  children: [
                    (0, Z.jsx)(e6.xz, {
                      asChild: !0,
                      children: (0, Z.jsx)(eq.cY, {
                        children: (0, Z.jsx)(ep.Yr, { className: "icon-md" }),
                      }),
                    }),
                    (0, Z.jsx)(e6.Uv, {
                      children: (0, Z.jsxs)(e6.VY, {
                        className:
                          "popover min-w-[180px] max-w-xs rounded-lg border border-token-border-light bg-token-main-surface-primary shadow-lg",
                        side: "top",
                        align: "end",
                        sideOffset: 6,
                        children: [
                          null != n &&
                            (0, Z.jsxs)(eq.UA, {
                              onClick: function () {
                                (0, e9.v)(ta(n));
                              },
                              children: [
                                (0, Z.jsx)(ep.HN, { className: "icon-md" }),
                                (0, Z.jsx)(em.Z, tr({}, tg.copyLink)),
                              ],
                            }),
                          null != r &&
                            (0, Z.jsxs)(eq.UA, {
                              onClick: function () {
                                window.confirm(
                                  i.formatMessage(tg.revertConfirm)
                                ) && r();
                              },
                              children: [
                                (0, Z.jsx)(ep.Nt, { className: "icon-md" }),
                                (0, Z.jsx)(em.Z, tr({}, tg.revertMenuItem)),
                              ],
                            }),
                          (null == l ? void 0 : l.includes("debug")) &&
                            (0, Z.jsxs)(eq.UA, {
                              onClick: function () {
                                e_.vm.toggleActiveSidebar("debug");
                              },
                              children: [
                                (0, Z.jsx)(ep.WP, { className: "icon-md" }),
                                "Debug (Internal only)",
                              ],
                            }),
                          (null == t ? void 0 : t.id) != null &&
                            (0, Z.jsxs)(eq.UA, {
                              color: "danger",
                              onClick: function () {
                                s(!0);
                              },
                              children: [
                                (0, Z.jsx)(ep.a_, { className: "icon-md" }),
                                (0, Z.jsx)(em.Z, tr({}, tg.deleteGPT)),
                              ],
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                a &&
                  (0, Z.jsx)(e5.b, {
                    gizmoId: t.id,
                    onSuccess: function () {
                      return ti(es());
                    },
                    onClose: function () {
                      s(!1);
                    },
                  }),
              ],
            })
          : null;
      }
      var td = E.Z.div(v || (v = (0, z.Z)(["flex items-center gap-1"])));
      function tp(e) {
        var t = e.gizmoEditorData,
          n = (0, H.ec)(function (e) {
            var t;
            return null === (t = e.currentWorkspace) || void 0 === t
              ? void 0
              : t.name;
          });
        switch (t.sharingRecipient) {
          case _.Zz.Private:
            return (0, Z.jsxs)(td, {
              children: [
                (0, Z.jsx)(ep.LX, { className: "icon-xs" }),
                (0, Z.jsx)(em.Z, tr({}, tg.onlyMe)),
              ],
            });
          case _.Zz.Link:
            return (0, Z.jsxs)(td, {
              children: [
                (0, Z.jsx)(ep.HN, { className: "icon-xs" }),
                (0, Z.jsx)(em.Z, tr({}, tg.anyoneWithLink)),
              ],
            });
          case _.Zz.Workspace:
            return (0, Z.jsxs)(td, {
              children: [(0, Z.jsx)(ep.oq, { className: "icon-xs" }), n],
            });
          case _.Zz.Marketplace:
            return (0, Z.jsxs)(td, {
              children: [
                (0, Z.jsx)(ep.hk, { className: "icon-xs" }),
                (0, Z.jsx)(em.Z, tr({}, tg.public)),
              ],
            });
        }
        return (0, Z.jsx)("div", {});
      }
      function tm(e) {
        var t = e.gizmoEditorData;
        return (0, Z.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            null != t.profilePictureUrl
              ? (0, Z.jsx)(e3.Z, {
                  isFirstParty: !1,
                  src: t.profilePictureUrl,
                  className: "h-8 w-8",
                })
              : (0, Z.jsx)("div", {
                  className:
                    "h-8 w-8 rounded-full border-2 border-dashed border-token-border-medium",
                }),
            (0, Z.jsxs)("div", {
              children: [
                (0, Z.jsx)("div", {
                  className: "text-sm font-medium",
                  children: t.name || (0, Z.jsx)(em.Z, tr({}, tg.newGPT)),
                }),
                (0, Z.jsx)("div", {
                  className: "text-xs text-token-text-secondary",
                  children: (0, b.Sg)(t)
                    ? (0, Z.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, Z.jsx)("div", {
                            className:
                              "h-1.5 w-1.5 rounded-full bg-token-text-tertiary",
                          }),
                          (0, Z.jsx)(em.Z, tr({}, tg.draft)),
                        ],
                      })
                    : (0, Z.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, Z.jsx)("div", {
                            className:
                              "h-1.5 w-1.5 rounded-full bg-brand-green",
                          }),
                          (0, Z.jsx)(em.Z, tr({}, tg.published)),
                          " \xb7 ",
                          (0, Z.jsx)(tp, { gizmoEditorData: t }),
                        ],
                      }),
                }),
              ],
            }),
          ],
        });
      }
      function tf(e) {
        var t = e.category,
          n = e.categories,
          r = e.setCategory;
        return (0, Z.jsxs)(e8.fC, {
          value: t,
          onValueChange: function (e) {
            return r(e);
          },
          children: [
            (0, Z.jsx)(e8.xz, {
              className:
                "flex justify-between rounded-xl bg-gray-50 p-3 font-medium dark:bg-gray-900",
              children: t
                ? (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)(e8.B4, {}),
                      (0, Z.jsx)(e8.JO, { children: (0, Z.jsx)(ep.ud, {}) }),
                    ],
                  })
                : (0, Z.jsx)("div", {
                    className: "flex w-full justify-center",
                    children: (0, Z.jsx)(V.Z, {}),
                  }),
            }),
            (0, Z.jsx)(e8.h_, {
              children: (0, Z.jsx)(e8.VY, {
                className:
                  "h-64 w-[var(--radix-select-trigger-width)] rounded-xl border bg-token-main-surface-primary p-1 py-2 dark:border-gray-600",
                position: "popper",
                sideOffset: 2,
                children: (0, Z.jsx)("div", {
                  className: "overflow-y-auto",
                  children: n.map(function (e) {
                    return (0, Z.jsxs)(
                      e8.ck,
                      {
                        className:
                          "flex w-full cursor-pointer justify-between rounded-lg p-2 pl-4 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700",
                        value: e.id,
                        children: [
                          (0, Z.jsx)(e8.eT, { children: e.title }),
                          (0, Z.jsx)(e8.wU, {
                            className: "text-green-600",
                            children: (0, Z.jsx)(ep.oS, {}),
                          }),
                        ],
                      },
                      e.id
                    );
                  }),
                }),
              }),
            }),
          ],
        });
      }
      function th(e) {
        var t = e.gizmoEditorData,
          n = e.isLoading,
          r = e.isUploadingProfilePic,
          i = e.isGeneratingProfilePic,
          o = e.publishedGizmo,
          a = e.promoteGizmo,
          s = e.appealGizmo,
          l = e.revertDraft,
          c = e.draftMessage,
          u = e.className,
          d = e.hasUnpublishedChanges,
          p = e.showActionsModal;
        return (0, Z.jsxs)("div", {
          className: (0, ei.default)(
            "relative flex h-14 w-full items-center justify-between gap-2 border-b border-token-border-medium px-3",
            u
          ),
          children: [
            (0, Z.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, Z.jsx)("a", {
                  className: "cursor-pointer text-token-text-primary",
                  onClick: function () {
                    return ti(es());
                  },
                  children: (0, Z.jsx)(ep.L7, { className: "icon-lg" }),
                }),
                (0, Z.jsx)(tm, { gizmoEditorData: t }),
              ],
            }),
            (0, Z.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                c,
                (0, Z.jsx)(tu, {
                  gizmoEditorData: t,
                  publishedGizmo: o,
                  revertDraft: l,
                }),
                (0, Z.jsx)(tc, {
                  gizmo: t,
                  publishedGizmo: o,
                  isLoading: n,
                  isUploadingProfilePic: r,
                  isGeneratingProfilePic: i,
                  promoteGizmo: a,
                  appealGizmo: s,
                  hasUnpublishedChanges: d,
                  showActionsModal: p,
                }),
              ],
            }),
          ],
        });
      }
      var tg = (0, ex.vU)({
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
      function tv(e, t) {
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
      function tx(e) {
        var t = (function (e, t) {
          var n = e.response,
            r = (0, J.Ot)(e);
          if (!Array.isArray(n)) return r;
          var i = (0, eo.compact)(
            n.map(function (e) {
              if ("value_error.any_str.max_length" === e.type)
                switch (e.loc[1]) {
                  case "display":
                    switch (e.loc[2]) {
                      case "name":
                        return t.formatMessage(ew.sY.nameTooLong, {
                          length: e.ctx.limit_value,
                        });
                      case "description":
                        return t.formatMessage(ew.sY.descriptionTooLong, {
                          length: e.ctx.limit_value,
                        });
                      case "welcome_message":
                        return t.formatMessage(ew.sY.welcomeMessageTooLong, {
                          length: e.ctx.limit_value,
                        });
                    }
                    break;
                  case "instructions":
                    return t.formatMessage(ew.sY.instructionsTooLong, {
                      length: e.ctx.limit_value,
                    });
                }
              if ("string" == typeof e.msg) return e.msg;
            })
          );
          return i.length > 0 ? i.join("\n") : r;
        })(e.upsertDraftError, (0, el.Z)());
        return (0, Z.jsxs)("div", {
          className: "flex items-center gap-2 text-red-500",
          children: [
            (0, Z.jsx)("div", {
              children: (0, Z.jsx)(
                em.Z,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? tv(Object(n), !0).forEach(function (t) {
                          (0, w.Z)(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : tv(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                })({}, ty.errorSavingDraft)
              ),
            }),
            null != t &&
              (0, Z.jsx)(e7.u, {
                label: t,
                children: (0, Z.jsx)(eZ.H33, { className: "icon-sm" }),
              }),
          ],
        });
      }
      function tb(e) {
        var t = e.isSavingDraft,
          n = e.hasUnpublishedChanges,
          r = e.upsertDraftError,
          i = e.className;
        return r instanceof J.Q0
          ? (0, Z.jsx)(tx, { upsertDraftError: r })
          : n
            ? (0, Z.jsxs)("div", {
                className: (0, ei.default)("flex items-center gap-2", i),
                children: [
                  (0, Z.jsx)("span", {
                    className: "text-token-text-secondary",
                    children: "Unpublished changes",
                  }),
                  (0, Z.jsx)("div", {
                    className: "w-4 text-token-text-tertiary",
                    children: t && (0, Z.jsx)(V.Z, {}),
                  }),
                ],
              })
            : null;
      }
      var ty = (0, ex.vU)({
          errorSavingDraft: {
            id: "gizmo.errorSavingDraft",
            defaultMessage: "Error saving draft",
          },
        }),
        tj = n(55161),
        tw = n(95412),
        tP = n(86178);
      function tk(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return tT(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n)
                )
                  return Array.from(e);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return tT(e, t);
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (s = !0), (o = e);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function tT(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function tN(e, t) {
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
      function tz(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tN(Object(n), !0).forEach(function (t) {
                (0, w.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tN(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function tO() {
        return (tO = (0, y.Z)(
          k().mark(function e(t) {
            var n, r, i, o, a, s, l, c, u;
            return k().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    r = tk(t);
                    try {
                      for (r.s(); !(i = r.n()).done; )
                        if (
                          ((o = i.value),
                          "gizmo_editor.generate_profile_pic" ===
                            o.author.name &&
                            "multimodal_text" === o.content.content_type)
                        ) {
                          a = tk(o.content.parts);
                          try {
                            for (a.s(); !(s = a.n()).done; )
                              (l = s.value),
                                "object" == typeof l &&
                                  "asset_pointer" in l &&
                                  (n = l);
                          } catch (e) {
                            a.e(e);
                          } finally {
                            a.f();
                          }
                        }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                    if (!(null != n)) {
                      e.next = 9;
                      break;
                    }
                    return (
                      (c = (0, tj.Iy)(n.asset_pointer)),
                      (e.next = 6),
                      tw.Z.getFileDownloadLink(c)
                    );
                  case 6:
                    if ((u = e.sent).status !== T.KF.Success) {
                      e.next = 9;
                      break;
                    }
                    return e.abrupt("return", {
                      id: c,
                      permalink: u.download_url,
                    });
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function tC() {
        return (tC = (0, y.Z)(
          k().mark(function e(t, n, r) {
            var i, o, a, s, l, c, u, d, p, m, f, h, g;
            return k().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (s = (a = (function (e, t) {
                          for (
                            var n = Y.tQ.getThreadCurrentLeafId(e),
                              r = Y.tQ.getTree(e),
                              i = [],
                              o = r.getNodeByIdOrMessageId(n);
                            null != o && (null == t || o.id !== t);
                          )
                            i.unshift(o.message),
                              (o =
                                "" !== o.parentId
                                  ? r.getNodeByIdOrMessageId(o.parentId)
                                  : void 0);
                          return i;
                        })(n, r))
                          .filter(function (e) {
                            return (
                              "gizmo_editor.update_behavior" === e.recipient
                            );
                          })
                          .flatMap(function (e) {
                            return "text" === e.content.content_type
                              ? e.content.parts
                              : "code" === e.content.content_type
                                ? [e.content.text]
                                : [];
                          })
                          .map(function (e) {
                            return JSON.parse(e);
                          })
                          .reduce(function (e, t) {
                            return tz(tz({}, e), t);
                          }, {})),
                        (e.next = 4),
                        (function (e) {
                          return tO.apply(this, arguments);
                        })(a)
                      );
                    case 4:
                      if (((l = e.sent), !((0, eo.isEmpty)(s) && null == l))) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt("return");
                    case 7:
                      if (
                        ((c = s.name),
                        (u = s.context),
                        (d = s.description),
                        (p = s.welcome_message),
                        (m = s.profile_pic_file_id),
                        (f = s.prompt_starters),
                        !(null != m))
                      ) {
                        e.next = 20;
                        break;
                      }
                      return (
                        (e.prev = 9),
                        (e.next = 12),
                        tw.Z.getFileDownloadLink(m, t.id)
                      );
                    case 12:
                      (h = e.sent).status === T.KF.Success &&
                        (l = { id: m, permalink: h.download_url }),
                        (e.next = 20);
                      break;
                    case 16:
                      (e.prev = 16),
                        (e.t0 = e.catch(9)),
                        console.error(
                          "Error while retrieving profile pic in update: ".concat(
                            e.t0
                          )
                        ),
                        q.m.warning(
                          "Something went wrong updating your GPT's profile picture.",
                          { duration: 3 }
                        );
                    case 20:
                      return (
                        (g = {
                          name: "string" == typeof c ? c : void 0,
                          description: "string" == typeof d ? d : void 0,
                          instructions: "string" == typeof u ? u : void 0,
                          welcomeMessage: "string" == typeof p ? p : void 0,
                          promptStarters: Array.isArray(f) ? f : void 0,
                          profilePictureId:
                            null === (i = l) || void 0 === i ? void 0 : i.id,
                          profilePictureUrl:
                            null === (o = l) || void 0 === o
                              ? void 0
                              : o.permalink,
                        }),
                        e.abrupt(
                          "return",
                          (0, eo.pickBy)(g, function (e) {
                            return null != e;
                          })
                        )
                      );
                    case 22:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[9, 16]]
            );
          })
        )).apply(this, arguments);
      }
      function tI(e, t, n, r) {
        var i,
          o,
          a,
          s,
          l,
          c,
          u,
          d,
          p,
          m,
          f,
          h,
          g,
          v,
          x = n.current,
          b = r.current;
        if (!(0, eo.isEqual)(x, b)) {
          var y = {};
          x.name !== (null == b ? void 0 : b.name) && (y.name = x.name),
            (null !== (i = x.description) && void 0 !== i ? i : "") !==
              (null !== (o = null == b ? void 0 : b.description) && void 0 !== o
                ? o
                : "") &&
              (y.description =
                null !== (h = x.description) && void 0 !== h ? h : ""),
            x.instructions !==
              (null !== (a = null == b ? void 0 : b.instructions) &&
              void 0 !== a
                ? a
                : "") &&
              (y.context =
                null !== (g = x.instructions) && void 0 !== g ? g : ""),
            (null !== (s = x.welcomeMessage) && void 0 !== s ? s : "") !==
              (null !== (l = null == b ? void 0 : b.welcomeMessage) &&
              void 0 !== l
                ? l
                : "") &&
              (y.welcome_message =
                null !== (v = x.welcomeMessage) && void 0 !== v ? v : "");
          var j = new Set(
              null !==
                (c =
                  null == b
                    ? void 0
                    : null === (u = b.files) || void 0 === u
                      ? void 0
                      : u.map(function (e) {
                          return e.file_id;
                        })) && void 0 !== c
                ? c
                : []
            ),
            w = new Set(
              null !==
                (d =
                  null === (p = x.files) || void 0 === p
                    ? void 0
                    : p.map(function (e) {
                        return e.file_id;
                      })) && void 0 !== d
                ? d
                : []
            ),
            P = (null !== (m = x.files) && void 0 !== m ? m : []).filter(
              function (e) {
                return !j.has(e.file_id);
              }
            ),
            k = (
              null !== (f = null == b ? void 0 : b.files) && void 0 !== f
                ? f
                : []
            ).filter(function (e) {
              return !w.has(e.file_id);
            });
          if (!(0, eo.isEmpty)(y) || 0 !== P.length || 0 !== k.length) {
            var T = [];
            if (!(0, eo.isEmpty)(y)) {
              var N =
                "Explicitly update the GPT's behavior to the following exact fields:\n\n    ".concat(
                  JSON.stringify(y, null, 2),
                  '\n\n    "Do not call update_behavior yet. Instead, use these updated fields as the GPT\'s current behavior, and in the next call to update_behavior, incorporate these changes."\n    '
                );
              T.push(tP.Cv.getTextAsMessage(N, eu.uU.System));
            }
            k.length > 0 &&
              T.push(
                tP.Cv.getTextAsMessage(
                  "The user has removed the following files from the GPT. You can no longer reference these files: ".concat(
                    k
                      .map(function (e) {
                        return e.file_id;
                      })
                      .join(", ")
                  ),
                  eu.uU.System
                )
              ),
              P.length > 0 &&
                T.push(
                  tP.Cv.getTextAsMessage(
                    "The user is adding these files to the GPT. The GPT may reference these files. The file IDs are: ".concat(
                      P.map(function (e) {
                        return e.file_id;
                      }).join(", ")
                    ),
                    eu.uU.System,
                    {
                      attachments: P.map(function (e) {
                        return { id: e.file_id, name: e.name, size: e.size };
                      }),
                    }
                  )
                ),
              T.length > 0 &&
                Y.tQ.updateTree(e, function (e) {
                  var n,
                    r = e.getNodeByIdOrMessageId(t).parentId,
                    i = tk(T);
                  try {
                    for (i.s(); !(n = i.n()).done; ) {
                      var o = n.value,
                        a = (0, eD.Z)();
                      e.insertNodeBefore(t, {
                        id: a,
                        children: [],
                        parentId: r,
                        message: o,
                        metadata: { isClientCreatedSystemMessage: !0 },
                      }),
                        (r = a);
                    }
                  } catch (e) {
                    i.e(e);
                  } finally {
                    i.f();
                  }
                });
          }
        }
      }
      var t_ = n(7525),
        tG = n(14402);
      function tM(e, t) {
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
      function tS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tM(Object(n), !0).forEach(function (t) {
                (0, w.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tM(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var tA = A.memo(function (e) {
        var t = e.gizmoEditorData,
          n = e.updateGizmo,
          r = e.clientThreadId,
          i = e.completionCallbackResponse,
          o = e.gizmoEditorDataRef,
          a = e.magicMakerBehaviorOverrides,
          s = e.magicMakerConversationGizmoEditorDataRef,
          l = e.requireGizmoId,
          c = (0, A.useMemo)(
            function () {
              return {
                gizmoEditorData: t,
                gizmoId: t.id,
                mode: "magic",
                behaviorOverrides: a,
                getGizmoId: l,
              };
            },
            [l, t, a]
          ),
          u = (0, tG.gF)(function (e) {
            return e.files.filter(function (e) {
              return e.status === t_.X.Ready && null != e.gizmoId;
            });
          }),
          d = (0, A.useCallback)(
            function (e, t) {
              !(function (e, t, n) {
                if (0 !== n.length) {
                  var r = (0, eD.Z)(),
                    i =
                      "The user is uploading files in their next message. If you need to reference these in calls to update_behavior, you will use the following File ID(s), in order: ".concat(
                        n
                          .map(function (e) {
                            return '"'.concat(e.fileId, '"');
                          })
                          .join(", ")
                      );
                  Y.tQ.updateTree(e, function (e) {
                    var n = e.getNodeByIdOrMessageId(t).parentId;
                    e.insertNodeBefore(t, {
                      id: r,
                      children: [],
                      parentId: n,
                      message: tP.Cv.getTextAsMessage(i, eu.uU.System),
                      metadata: { isClientCreatedSystemMessage: !0 },
                    });
                  });
                }
              })(e, t, u),
                tI(e, t, o, s),
                (function (e, t) {
                  for (
                    var n =
                        "Remember, you should be calling either update_behavior or generate_profile_pic after most messages from the user. Your personality should be neutral and separate from the GPT you are creating.",
                      r = Y.tQ.getThreadCurrentLeafId(e),
                      i = Y.tQ.getTree(e),
                      o = i.getNodeByIdOrMessageId(r);
                    null != o && o.message.author.role !== eu.uU.User;
                  ) {
                    if (
                      "text" === o.message.content.content_type &&
                      o.message.content.parts[0] === n
                    )
                      return;
                    o =
                      "" !== o.parentId
                        ? i.getNodeByIdOrMessageId(o.parentId)
                        : void 0;
                  }
                  Y.tQ.updateTree(e, function (e) {
                    var r = e.getNodeByIdOrMessageId(t).parentId;
                    e.insertNodeBefore(t, {
                      id: (0, eD.Z)(),
                      children: [],
                      parentId: r,
                      message: tP.Cv.getTextAsMessage(n, eu.uU.System, {
                        exclude_after_next_user_message: !0,
                      }),
                      metadata: { isClientCreatedSystemMessage: !0 },
                    });
                  });
                })(e, t),
                n(function (e) {
                  var t;
                  return tS(
                    tS({}, e),
                    {},
                    {
                      files: [].concat(
                        (0, j.Z)(
                          null !== (t = e.files) && void 0 !== t ? t : []
                        ),
                        (0, j.Z)(
                          (0, eo.compact)(
                            u.map(function (e) {
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
                          )
                        )
                      ),
                    }
                  );
                }),
                (s.current = (0, eo.cloneDeep)(o.current));
            },
            [o, s, u, n]
          ),
          p = (0, e_.tN)(function (e) {
            return e.activeSidebar;
          });
        return (0, Z.jsx)(eU.D.Provider, {
          value: c,
          children: (0, Z.jsxs)("div", {
            className: "relative flex h-full grow overflow-auto",
            children: [
              (0, Z.jsx)("div", {
                className: "grow",
                children: (0, Z.jsx)(eC.Z, {
                  clientThreadId: r,
                  onCompletionFinished: i,
                  preRequestCompletion: d,
                  hideHeader: !0,
                  prependThreadChildren: (0, Z.jsx)("div", {
                    className: "h-8",
                  }),
                }),
              }),
              "debug" === p &&
                (0, Z.jsx)(eO.fv, {
                  clientThreadId: r,
                  slideOver: !1,
                  onClose: function () {
                    return e_.vm.toggleActiveSidebar("debug");
                  },
                  isOpen: !0,
                }),
            ],
          }),
        });
      });
      function tE(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function tZ(e, t) {
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
      function tD(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tZ(Object(n), !0).forEach(function (t) {
                (0, w.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tZ(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function tL(e) {
        var t = e.value,
          n = e.label;
        return (0, Z.jsx)($.ck, {
          value: t,
          className:
            "text-md w-1/3 flex-grow rounded-lg border-token-border-light p-1.5 font-medium text-token-text-tertiary transition hover:text-token-text-primary radix-state-checked:border radix-state-checked:bg-token-main-surface-primary radix-state-checked:text-token-text-primary radix-state-checked:shadow-[0_0_2px_rgba(0,0,0,.03)] md:w-1/2",
          children: n,
        });
      }
      function tU(e) {
        var t = e.className,
          n = e.editorTab,
          r = e.setEditorTab;
        return (0, Z.jsxs)($.fC, {
          className: (0, ei.default)(
            "flex w-full overflow-hidden rounded-xl bg-token-main-surface-secondary p-1.5 md:w-1/2",
            t
          ),
          value: n,
          onValueChange: function (e) {
            r(e);
          },
          children: [
            (0, Z.jsx)(tL, { value: x.MAGIC_MAKER, label: "Create" }),
            (0, Z.jsx)(tL, { value: x.ADVANCED, label: "Configure" }),
            (0, Z.jsx)("div", {
              className: "flex w-1/3 md:hidden",
              children: (0, Z.jsx)(tL, { value: x.PREVIEW, label: "Preview" }),
            }),
          ],
        });
      }
      ((l = x || (x = {})).MAGIC_MAKER = "magic"),
        (l.ADVANCED = "advanced"),
        (l.PREVIEW = "preview");
      var tR = {
          id: void 0,
          instructions: "",
          name: "",
          description: "",
          profilePictureId: void 0,
          profilePictureUrl: void 0,
          welcomeMessage: "",
          promptStarters: [],
          tools: [{ type: T.qK.DALLE }],
          files: [],
          trainingDisabled: !1,
          liveVersion: 0,
        },
        tB = tD(
          tD({}, tR),
          {},
          { tools: [].concat((0, j.Z)(tR.tools), [{ type: T.qK.BROWSER }]) }
        );
      function tF(e) {
        var t, n, r, i, o, a, s;
        return {
          id: e.gizmo.id,
          instructions: e.gizmo.instructions,
          name: e.gizmo.display.name,
          description:
            null !== (t = e.gizmo.display.description) && void 0 !== t ? t : "",
          profilePictureId:
            null !== (n = e.gizmo.display.profile_pic_id) && void 0 !== n
              ? n
              : void 0,
          profilePictureUrl:
            null !== (r = e.gizmo.display.profile_picture_url) && void 0 !== r
              ? r
              : void 0,
          welcomeMessage:
            null !== (i = e.gizmo.display.welcome_message) && void 0 !== i
              ? i
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
            null !== (s = e.gizmo.live_version) && void 0 !== s ? s : 0,
        };
      }
      var tV = function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          l,
          c,
          u,
          f,
          h,
          g,
          v,
          j,
          w,
          P = e.gizmo,
          z = e.onNewGizmoId,
          O = (0, N.C)(K.L0.BrowseAvailable),
          C = (0, el.Z)(),
          I = (0, A.useRef)(null != P ? tF(P) : O ? tB : tR),
          G = (0, A.useRef)(P),
          M = (0, A.useRef)(I.current),
          S = (0, A.useState)(function () {
            return I.current;
          }),
          E = S[0],
          D = S[1],
          L = (0, A.useState)(function () {
            return (0, Y.OX)();
          }),
          U = L[0];
        L[1];
        var R = (0, A.useState)(function () {
          return {
            context_message: (function (e) {
              var t,
                n,
                r,
                i,
                o,
                a = new Set(),
                s = tk(e.tools);
              try {
                for (s.s(); !(o = s.n()).done; ) {
                  var l = o.value;
                  a.add(l.type);
                }
              } catch (e) {
                s.e(e);
              } finally {
                s.f();
              }
              var c = null !== (t = e.name) && void 0 !== t ? t : "",
                u = null !== (n = e.description) && void 0 !== n ? n : "",
                d = null !== (r = e.instructions) && void 0 !== r ? r : "",
                p = Array.from(a).join(","),
                m = null !== (i = e.welcomeMessage) && void 0 !== i ? i : "",
                f = null != e.profilePictureUrl;
              return "" === c && "" === u && "" === d && "" === m
                ? "The GPT you are about to has the following abilities: ".concat(
                    p,
                    "."
                  )
                : "This is the GPT's current set of fields:\n\nname: "
                    .concat(c, "\n\ndescription: ")
                    .concat(u, "\n\ncontext: ")
                    .concat(d, "\n\nabilities: ")
                    .concat(p, "\n\nwelcome_message: ")
                    .concat(m, "\n\n")
                    .concat(
                      f
                        ? "The GPT has a profile picture."
                        : "This GPT does not have a profile picture. You must generate a profile picture when you next update your behavior.",
                      "\n"
                    );
            })(I.current),
            model_slug: "unused",
            enabled_tools: [
              { tool_id: null != P ? "gizmo_editor" : "gizmo_creator" },
            ],
          };
        })[0];
        (t = M.current),
          (0, Y.ax)(U, {
            kind: eu.OL.GizmoMagicCreate,
            gizmo_id: t.id,
            behavior_overrides: R,
          }),
          (0, A.useEffect)(
            function () {
              Y.tQ.updateConversationMode(U, {
                kind: eu.OL.GizmoMagicCreate,
                gizmo_id: t.id,
                behavior_overrides: R,
              });
            },
            [U, t.id, R]
          ),
          (n = (0, A.useState)(function () {
            var e = null == t.id,
              n =
                null != t.id &&
                "" !== t.name &&
                null != t.description &&
                "" !== t.instructions &&
                null != t.profilePictureUrl;
            return e
              ? 'Hi! I\'ll help you build a new GPT. You can say something like, "make a creative who helps generate visuals for new products" or "make a software engineer who helps format my code."\n\nWhat would you like to make?'
              : n
                ? "Welcome back! Is there anything ".concat(
                    t.name,
                    " should be doing better? Anything you'd like to change?"
                  )
                : "You're back! Let's continue where we left off...";
          })[0]),
          (0, A.useEffect)(
            function () {
              var e = Y.tQ.getTree(U);
              if (
                !e.findNode(function (e) {
                  var t;
                  return (
                    e.message.author.role === eu.uU.User ||
                    (null === (t = e.metadata) || void 0 === t
                      ? void 0
                      : t.isClientCreatedSystemMessage) === !0
                  );
                }) &&
                (Y.tQ.deleteNodesByFilter(U, function (e) {
                  var t;
                  return (
                    (null === (t = e.metadata) || void 0 === t
                      ? void 0
                      : t.isPlaceholderTemplateAssistantWelcomeMessage) === !0
                  );
                }),
                null != n && 0 !== n.length)
              ) {
                var t = Y.tQ.getThreadCurrentLeafId(U);
                if (e.hasNodeOrMessageId(t)) {
                  var r = (0, eD.Z)();
                  Y.tQ.updateTree(U, function (e) {
                    e.addNode(r, n, t, eu.uU.Assistant, {
                      isPlaceholderTemplateAssistantWelcomeMessage: !0,
                    });
                  }),
                    Y.tQ.setThreadCurrentLeafId(U, r);
                }
              }
            },
            [U, n]
          ),
          (r = (0, Y.UL)(U)),
          (0, A.useEffect)(
            function () {
              (0, Y.Zz)(U) &&
                Y.iN.hasThread(U) &&
                r.lastModelUsed !== eT.Mw &&
                Y.tQ.updateInitialThreadDataForNewThread(U, eT.Mw, []);
            },
            [U, r, r.lastModelUsed]
          );
        var B = (0, b.kg)(I.current.id).data,
          V = (0, b.N_)(),
          X = V.isPending,
          Q = V.error,
          $ = (0, b.ZJ)(),
          ea = (0, A.useMemo)(
            function () {
              var e, t, n, r, i, o;
              return (
                null != B &&
                (!(
                  E.name === B.gizmo.display.name &&
                  E.description === B.gizmo.display.description &&
                  E.welcomeMessage === B.gizmo.display.welcome_message &&
                  E.instructions === B.gizmo.instructions &&
                  ((i = E.tools),
                  (o = B.tools),
                  i.length === o.length &&
                    i.every(function (e) {
                      return o.some(function (t) {
                        return t.type === e.type;
                      });
                    })) &&
                  (0, eo.isEqual)(
                    null !==
                      (e =
                        null === (t = E.files) || void 0 === t
                          ? void 0
                          : t.map(function (e) {
                              return e.file_id;
                            })) && void 0 !== e
                      ? e
                      : [],
                    null !==
                      (n =
                        null === (r = B.files) || void 0 === r
                          ? void 0
                          : r.map(function (e) {
                              return e.file_id;
                            })) && void 0 !== n
                      ? n
                      : []
                  )
                ) ||
                  E.profilePictureUrl != B.gizmo.display.profile_picture_url ||
                  E.profilePictureId != B.gizmo.display.profile_pic_id)
              );
            },
            [E, B]
          ),
          es =
            ((i = (0, y.Z)(
              k().mark(function e() {
                var t, n, r, i, o, a, s, l;
                return k().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = I.current),
                            (e.prev = 1),
                            (e.next = 4),
                            V.mutateAsync({ editorData: t, gizmoId: t.id })
                          );
                        case 4:
                          (n = e.sent),
                            (G.current = n),
                            null == I.current.id &&
                              ((r = n.gizmo.id),
                              (I.current = tD(
                                tD({}, I.current),
                                {},
                                {
                                  id: r,
                                  sharingTargets: n.gizmo.sharing_targets,
                                }
                              )),
                              D(I.current),
                              null == z || z(r)),
                            (i = (function (e, t) {
                              var n =
                                ("undefined" != typeof Symbol &&
                                  e[Symbol.iterator]) ||
                                e["@@iterator"];
                              if (!n) {
                                if (
                                  Array.isArray(e) ||
                                  (n = (function (e, t) {
                                    if (e) {
                                      if ("string" == typeof e) return tE(e, t);
                                      var n = Object.prototype.toString
                                        .call(e)
                                        .slice(8, -1);
                                      if (
                                        ("Object" === n &&
                                          e.constructor &&
                                          (n = e.constructor.name),
                                        "Map" === n || "Set" === n)
                                      )
                                        return Array.from(e);
                                      if (
                                        "Arguments" === n ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          n
                                        )
                                      )
                                        return tE(e, t);
                                    }
                                  })(e))
                                ) {
                                  n && (e = n);
                                  var r = 0,
                                    i = function () {};
                                  return {
                                    s: i,
                                    n: function () {
                                      return r >= e.length
                                        ? { done: !0 }
                                        : { done: !1, value: e[r++] };
                                    },
                                    e: function (e) {
                                      throw e;
                                    },
                                    f: i,
                                  };
                                }
                                throw TypeError(
                                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                );
                              }
                              var o,
                                a = !0,
                                s = !1;
                              return {
                                s: function () {
                                  n = n.call(e);
                                },
                                n: function () {
                                  var e = n.next();
                                  return (a = e.done), e;
                                },
                                e: function (e) {
                                  (s = !0), (o = e);
                                },
                                f: function () {
                                  try {
                                    a || null == n.return || n.return();
                                  } finally {
                                    if (s) throw o;
                                  }
                                },
                              };
                            })(
                              n.tools.filter(function (e) {
                                return e.type === T.qK.JIT_PLUGIN;
                              })
                            ));
                          try {
                            for (
                              a = function () {
                                var e = o.value,
                                  t = I.current.tools.find(function (t) {
                                    return (
                                      t.type === T.qK.JIT_PLUGIN &&
                                      t.metadata.domain === e.metadata.domain
                                    );
                                  });
                                t &&
                                  t.metadata.action_id !==
                                    e.metadata.action_id &&
                                  ((t.metadata.action_id =
                                    e.metadata.action_id),
                                  D(I.current));
                              },
                                i.s();
                              !(o = i.n()).done;
                            )
                              a();
                          } catch (e) {
                            i.e(e);
                          } finally {
                            i.f();
                          }
                          return e.abrupt("return", n);
                        case 12:
                          throw (
                            ((e.prev = 12),
                            (e.t0 = e.catch(1)),
                            (l =
                              null !== (s = (0, J.Ot)(e.t0)) && void 0 !== s
                                ? s
                                : C.formatMessage(ty.errorSavingDraft)),
                            q.m.warning(l, { duration: 2 }),
                            e.t0)
                          );
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 12]]
                );
              })
            )),
            function () {
              return i.apply(this, arguments);
            }),
          ec = (0, A.useRef)(),
          ed =
            ((o = (0, y.Z)(
              k().mark(function e() {
                return k().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!(null != I.current.id)) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return", I.current.id);
                      case 2:
                        return (
                          null == ec.current &&
                            (ec.current = es()
                              .then(function (e) {
                                return e.gizmo.id;
                              })
                              .catch(function (e) {
                                throw ((ec.current = void 0), e);
                              })),
                          e.abrupt("return", ec.current)
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return o.apply(this, arguments);
            }),
          ep = (0, A.useState)(function () {
            return (0, eo.debounce)(
              function () {
                return es();
              },
              2e3,
              { trailing: !0 }
            );
          })[0];
        function em(e) {
          var t =
            "function" == typeof e ? e(I.current) : (0, tt.x$)(I.current, e);
          (0, eo.isEqual)(t, I.current) ||
            ((I.current = t), D(I.current), ep());
        }
        var ef = (0, A.useRef)(),
          eh =
            ((a = (0, y.Z)(
              k().mark(function e(t) {
                var n;
                return k().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (null != t) {
                            e.next = 3;
                            break;
                          }
                          return eM(!1), e.abrupt("return");
                        case 3:
                          return (
                            (e.prev = 3),
                            (e.next = 6),
                            (function (e, t, n) {
                              return tC.apply(this, arguments);
                            })(I.current, t, ef.current)
                          );
                        case 6:
                          null != (n = e.sent) &&
                            (em(n), (M.current = (0, eo.cloneDeep)(I.current))),
                            (e.next = 14);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(3)),
                            console.error(e.t0),
                            q.m.warning(
                              "Something went wrong generating your GPT",
                              { duration: 3 }
                            );
                        case 14:
                          return (
                            (e.prev = 14),
                            (ef.current = Y.tQ.getThreadCurrentLeafId(t)),
                            eM(!1),
                            e.finish(14)
                          );
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 10, 14, 18]]
                );
              })
            )),
            function (e) {
              return a.apply(this, arguments);
            }),
          eg =
            (Y.tQ.initThread(U, {
              kind: eu.OL.GizmoMagicCreate,
              gizmo_id: void 0,
              behavior_overrides: R,
            }),
            (s = (0, eL.Z)(U, void 0, eh, [])),
            (l = (0, W.hz)()),
            (c = (0, H.m0)()),
            (u = (0, y.Z)(
              k().mark(function e(t, n, r) {
                var i, o, a, u, d, p, m, f, h, g, v, x;
                return k().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (0 !== r.length) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        (i = Y.tQ.getThreadCurrentLeafId(U)), (o = tk(r));
                        try {
                          for (
                            u = function () {
                              var e = a.value,
                                t = (0, eD.Z)();
                              Y.tQ.updateTree(U, function (n) {
                                n.addNodeToEnd(i, {
                                  id: t,
                                  children: [],
                                  parentId: i,
                                  message: tP.Cv.getTextAsMessage(
                                    e,
                                    eu.uU.System
                                  ),
                                  metadata: {
                                    isClientCreatedSystemMessage: !0,
                                  },
                                });
                              }),
                                Y.tQ.setThreadCurrentLeafId(U, t),
                                (i = t);
                            },
                              o.s();
                            !(a = o.n()).done;
                          )
                            u();
                        } catch (e) {
                          o.e(e);
                        } finally {
                          o.f();
                        }
                        return (
                          (d = i),
                          tI(U, d, t, n),
                          (p = {
                            conversationMode: {
                              kind: eu.OL.GizmoMagicCreate,
                              gizmo_id: t.current.id,
                              behavior_overrides: R,
                            },
                          }),
                          (m = [eu.S.GPT_4]),
                          (e.next = 11),
                          (0, eS.Ob)(c)
                        );
                      case 11:
                        return (
                          (f = e.sent),
                          (e.next = 14),
                          (0, eS.Rr)(l, f, eu.OL.GizmoMagicCreate)
                        );
                      case 14:
                        if (((h = e.sent), (g = null), !h)) {
                          e.next = 20;
                          break;
                        }
                        return (e.next = 19), eS.ZP.getEnforcementToken(f);
                      case 19:
                        g = e.sent;
                      case 20:
                        if (((v = (0, eA.u7)(l, m)), (x = null), !v)) {
                          e.next = 26;
                          break;
                        }
                        return (e.next = 25), eA.ZP.getEnforcementToken(m);
                      case 25:
                        x = e.sent;
                      case 26:
                        s({
                          model: eT.Mw,
                          completionType: eu.Os.Next,
                          parentNodeId: d,
                          metadata: {},
                          focusOnNewCompletion: !0,
                          arkoseToken: g,
                          turnstileToken: x,
                          preflightTime: 0,
                          completionMetadata: p,
                        });
                      case 27:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e, t, n) {
              return u.apply(this, arguments);
            }),
          ev = (0, A.useState)(void 0),
          ex = ev[0],
          eb = ev[1];
        (0, A.useEffect)(
          function () {
            eb(
              (function (e) {
                if (e) {
                  var t,
                    n =
                      (null === (t = e.gizmo.appeal_info) || void 0 === t
                        ? void 0
                        : t.state.kind) === "appeal_sent",
                    r = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : [],
                        n = new Set(
                          t
                            .filter(function (e) {
                              return e.allowed;
                            })
                            .map(function (e) {
                              return e.recipient;
                            })
                        );
                      if (!e || n.has(e)) return p.None;
                      var r = n.has(_.Zz.Private) || n.has(_.Zz.Workspace),
                        i = n.has(_.Zz.Link) || n.has(_.Zz.Marketplace);
                      return e === _.Zz.Marketplace && i
                        ? p.RemovedFromMarketplace
                        : !i && r
                          ? p.RemovedFromPublic
                          : p.RemovedFromPrivate;
                    })(e.gizmo.share_recipient, e.gizmo.sharing_targets);
                  return {
                    sharingRecipient: e.gizmo.share_recipient,
                    categories: e.gizmo.categories,
                    gizmoId: e.gizmo.id,
                    moderationType: r,
                    violationType: m.Other,
                    showModal: n
                      ? d.AppealSent
                      : r !== p.None
                        ? d.AppealAvailable
                        : d.None,
                  };
                }
              })(P)
            );
          },
          [null == P ? void 0 : P.gizmo.id]
        );
        var ey =
            ((f = (0, y.Z)(
              k().mark(function e(t, n) {
                var r, i, o, a, s;
                return k().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!((r = (0, tt.bw)(I.current, t, n)).length > 0)) {
                            e.next = 4;
                            break;
                          }
                          return (
                            q.m.warning(
                              "Could not save GPT:\n\n".concat(
                                r
                                  .map(function (e) {
                                    return "- ".concat((0, tt.sw)(e));
                                  })
                                  .join("\n")
                              ),
                              { duration: 3 }
                            ),
                            e.abrupt("return")
                          );
                        case 4:
                          return (e.next = 6), es();
                        case 6:
                          return (
                            (o = (i = e.sent).gizmo.id),
                            (e.prev = 8),
                            ee.A.logEvent(et.M.promoteGizmo, {
                              gizmo_id: i.gizmo.id,
                              sharing_recipient: t,
                              editor_tab: ek,
                            }),
                            (e.next = 12),
                            $.mutateAsync(
                              {
                                gizmoId: i.gizmo.id,
                                data: {
                                  sharingRecipient: t,
                                  categories: null == n ? void 0 : [n],
                                },
                              },
                              {
                                onSuccess: function (e) {
                                  er.E.setQueryData((0, b.Vw)(o).queryKey, e),
                                    er.E.invalidateQueries({
                                      queryKey: ["gizmos"],
                                    }),
                                    er.E.invalidateQueries({
                                      queryKey: ["gizmo", { gizmoId: o }],
                                    }),
                                    er.E.invalidateQueries({
                                      queryKey: [
                                        "gizmo",
                                        "userActionSettings",
                                        { gizmoId: o },
                                      ],
                                    });
                                },
                              }
                            )
                          );
                        case 12:
                          return (a = e.sent), e.abrupt("return", a);
                        case 16:
                          (e.prev = 16),
                            (e.t0 = e.catch(8)),
                            e.t0 instanceof _.DC
                              ? ((s = !!e.t0.response.is_flagged_brand_name),
                                eb({
                                  gizmoId: o,
                                  sharingRecipient: t,
                                  moderationType: p.PublishBlocked,
                                  violationType: s ? m.BrandName : m.Other,
                                  showModal: d.AppealAvailable,
                                }))
                              : (console.error(e.t0),
                                q.m.warning("Error saving GPT", {
                                  duration: 2,
                                }));
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[8, 16]]
                );
              })
            )),
            function (e, t) {
              return f.apply(this, arguments);
            }),
          ej = V.isPending || $.isPending,
          eP = (0, A.useState)(function () {
            var e = en.m.getItem(en.F.GizmoEditorTab);
            return Object.values(x).includes(e) ? e : x.MAGIC_MAKER;
          }),
          ek = eP[0],
          eN = eP[1],
          ez = ((g = (h = (0, A.useState)({ width: null, height: null }))[0]),
          (v = h[1]),
          (0, A.useLayoutEffect)(function () {
            var e = function () {
              v({ width: window.innerWidth, height: window.innerHeight });
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          g).width;
        (0, A.useEffect)(
          function () {
            null != ez && ez >= 768 && ek === x.PREVIEW && eN(x.MAGIC_MAKER);
          },
          [ez, ek]
        );
        var eO = (0, A.useState)(!1),
          eC = eO[0],
          eI = eO[1],
          e_ = (0, A.useState)(!1),
          eG = e_[0],
          eM = e_[1],
          eE = (0, A.useState)(void 0),
          eZ = eE[0],
          eU = eE[1];
        return (0, Z.jsxs)("div", {
          className: "flex h-screen w-full flex-col items-center",
          children: [
            (0, Z.jsx)(th, {
              gizmoEditorData: E,
              isLoading: ej,
              hasUnpublishedChanges: ea,
              isUploadingProfilePic: eC,
              isGeneratingProfilePic: eG,
              publishedGizmo: B,
              promoteGizmo:
                ((j = (0, y.Z)(
                  k().mark(function e(t, n) {
                    var r;
                    return k().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), ey(t, n);
                          case 2:
                            return (
                              (r = e.sent),
                              (I.current = tD(
                                tD({}, I.current),
                                {},
                                { sharingRecipient: t }
                              )),
                              D(I.current),
                              en.m.setItem(en.F.GizmoEditorTab, ek),
                              e.abrupt("return", r)
                            );
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                function (e, t) {
                  return j.apply(this, arguments);
                }),
              appealGizmo:
                ((w = (0, y.Z)(
                  k().mark(function e(t, n) {
                    return k().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null != ex) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            eb(
                              tD(
                                tD({}, ex),
                                {},
                                {
                                  sharingRecipient: t,
                                  categories: null == n ? void 0 : [n],
                                  showModal: d.AppealAvailable,
                                }
                              )
                            );
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                function (e, t) {
                  return w.apply(this, arguments);
                }),
              revertDraft:
                null != B && ea
                  ? function () {
                      var e = er.E.getQueryData(
                        (0, b.Vw)(I.current.id).queryKey
                      );
                      if (null != e) {
                        var t = tF(e);
                        (I.current = t), D(t), es();
                      }
                    }
                  : void 0,
              draftMessage: (0, Z.jsx)(tb, {
                hasUnpublishedChanges: ea,
                isSavingDraft: X,
                upsertDraftError: Q,
                className: "text-sm",
              }),
              showActionsModal: function (e) {
                eU(e);
              },
              className: "flex-shrink-0",
            }),
            ex &&
              (0, Z.jsx)(F, {
                appealState: ex,
                onAppealClose: function () {
                  return eb(tD(tD({}, ex), {}, { showModal: d.None }));
                },
                onAppealSubmitted: function () {
                  return eb(tD(tD({}, ex), {}, { showModal: d.AppealSent }));
                },
              }),
            (0, Z.jsxs)("div", {
              className: "relative flex w-full grow overflow-hidden",
              children: [
                (0, Z.jsx)("div", {
                  className: "flex w-full justify-center md:w-1/2",
                  children: (0, Z.jsx)("div", {
                    className: "h-full grow overflow-hidden",
                    children:
                      void 0 !== eZ
                        ? (0, Z.jsx)(e2, {
                            currentlyEditingActionDomain: eZ,
                            gizmoEditorData: E,
                            updateGizmo: em,
                            onClose: function () {
                              eU(void 0);
                            },
                          })
                        : (0, Z.jsxs)("div", {
                            className: "flex h-full flex-col px-2 pt-2",
                            children: [
                              (0, Z.jsx)(tU, {
                                editorTab: ek,
                                setEditorTab: eN,
                                className: "mb-2 flex-shrink-0 self-center",
                              }),
                              (0, Z.jsx)("div", {
                                className: "grow overflow-hidden",
                                children:
                                  ek === x.MAGIC_MAKER
                                    ? (0, Z.jsx)("div", {
                                        className: "h-full w-full pb-5",
                                        children: (0, Z.jsx)(
                                          tA,
                                          {
                                            gizmoEditorData: E,
                                            updateGizmo: em,
                                            completionCallbackResponse: eh,
                                            clientThreadId: U,
                                            gizmoEditorDataRef: I,
                                            magicMakerBehaviorOverrides: R,
                                            magicMakerConversationGizmoEditorDataRef:
                                              M,
                                            requireGizmoId: ed,
                                          },
                                          U
                                        ),
                                      })
                                    : ek === x.ADVANCED
                                      ? (0, Z.jsx)(ew.cK, {
                                          gizmoEditorData: E,
                                          updateGizmo: em,
                                          generateProfilePic: function () {
                                            eM(!0),
                                              eg(I, M, [
                                                "Generate a new profile picture for this GPT using gizmo_editor generate_profile_pic. Do not prompt the user for any clarification. Do not send extra text outside of the tool function call. DO NOT CALL update_behavior or otherwise update GPT behavior in your response.",
                                              ]);
                                          },
                                          setIsUploadingProfilePic: eI,
                                          isGeneratingProfilePic: eG,
                                          setIsGeneratingProfilePic: eM,
                                          requireGizmoId: ed,
                                          onShowActionsEditor: function (e) {
                                            eU(e);
                                          },
                                        })
                                      : (0, Z.jsx)(eV, {
                                          gizmoEditorData: E,
                                          isSavingDraft: X,
                                          showTitle: !1,
                                        }),
                              }),
                            ],
                          }),
                  }),
                }),
                (0, Z.jsx)("div", {
                  className: (0, ei.default)(
                    "hidden w-1/2 justify-center border-l border-token-border-medium bg-token-main-surface-secondary pt-4",
                    ek !== x.PREVIEW && "md:flex"
                  ),
                  children: (0, Z.jsx)("div", {
                    className: "flex-grow pb-5",
                    children: (0, Z.jsx)("div", {
                      className: "h-full",
                      children: (0, Z.jsx)(eV, {
                        gizmoEditorData: E,
                        isSavingDraft: X,
                      }),
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      function tq(e) {
        var t = e.businessWorkspaceId,
          n = e.gizmoId,
          r = (0, b.b9)(n, !0).data,
          i = (0, H.ec)(H.F_.accountUserId),
          o = (0, H.aF)(),
          a = null == o ? void 0 : o.id,
          s = null != r && null != i && null != a && (0, eP.k1)(r, i, a, t);
        return null != r && s ? (0, Z.jsx)(tV, { gizmo: r }) : null;
      }
      function tW(e) {
        var t = e.onNewGizmoId;
        return (0, Z.jsx)(tV, { gizmo: void 0, onNewGizmoId: t });
      }
      function tK(e) {
        var t = e.gizmoId,
          n = e.remixSourceId,
          r = (0, ea.useRouter)(),
          i = (0, W.t)(),
          o = (0, H.ec)(H.F_.businessWorkspaceId),
          a = (0, A.useRef)(void 0),
          s = t;
        return (
          null != t && a.current === t && (s = void 0),
          (0, X.yx)({
            resetThreadAction: function () {
              r.push("/");
            },
          }),
          (0, Z.jsx)("div", {
            children:
              null != i && i.data
                ? (0, Z.jsx)("div", {
                    children:
                      void 0 != s
                        ? (0, Z.jsx)(
                            tq,
                            { businessWorkspaceId: o, gizmoId: s },
                            s
                          )
                        : (0, Z.jsx)(tW, {
                            remixSourceId: n,
                            onNewGizmoId: function (e) {
                              (a.current = e),
                                window.history.replaceState(
                                  window.history.state,
                                  "",
                                  (0, Q.AA)(e)
                                );
                            },
                          }),
                  })
                : (0, Z.jsx)("div", {
                    className: "flex min-h-screen items-center justify-center",
                    children: (0, Z.jsx)(V.Z, {}),
                  }),
          })
        );
      }
      var tY = n(85958),
        tH = !0;
      function tJ() {
        var e,
          t = (0, W.t)();
        (e = null == t || t.canCreateGizmos()),
          (0, A.useEffect)(
            function () {
              e ||
                es().replace((0, tY.M5)(tY.LT.NO_ACCESS), void 0, {
                  shallow: !0,
                });
            },
            [e]
          );
        var n = (0, ea.useRouter)(),
          r = n.query.slug,
          i = r ? (0, b.CR)(r) : void 0,
          o = n.query.remixFrom,
          a = null == t ? void 0 : t.features.includes(K.PL),
          s = (0, H.m0)();
        return ((0, A.useEffect)(
          function () {
            a &&
              (0, eS.Ob)(s).then(function (e) {
                eS.ZP.initializeAndGatherData(e);
              });
          },
          [a, s]
        ),
        (0, A.useEffect)(
          function () {
            null == t || t.canCreateGizmos() || n.push("/");
          },
          [t, n]
        ),
        null != t && t.canCreateGizmos())
          ? (0, Z.jsx)(tK, { gizmoId: i, remixSourceId: o })
          : null;
      }
    },
    70249: function (e, t, n) {
      n.d(t, {
        yt: function () {
          return ev;
        },
        lX: function () {
          return eP;
        },
        hj: function () {
          return eb;
        },
        B1: function () {
          return ey;
        },
        cK: function () {
          return ez;
        },
        rv: function () {
          return ew;
        },
        sY: function () {
          return eI;
        },
      });
      var r,
        i,
        o,
        a,
        s = n(50134),
        l = n(6939),
        c = n(36112),
        u = n(90038),
        d = n(4399),
        p = n.n(d),
        m = n(82256),
        f = n(61302),
        h = n(73558),
        g = n(90166),
        v = n(25736),
        x = n(99715),
        b = n(70079),
        y = n(76483),
        j = n(1454),
        w = n(70671),
        P = n(68919),
        k = n(41845),
        T = n(60624),
        N = n(49685),
        z = n(7525),
        O = n(31609),
        C = n(55161),
        I = n(63866),
        _ = n(79505),
        G = n(49668),
        M = n(35250);
      function S(e, t) {
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
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                (0, c.Z)(e, t, n[t]);
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
      function E() {
        return (0, M.jsx)("div", {
          className:
            "relative flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-token-border-medium",
          children: (0, M.jsx)(I.Z, { className: "h-1/4 w-1/4" }),
        });
      }
      function Z(e) {
        var t = e.gizmoEditorData,
          n = e.onFileChange,
          r = e.generateProfilePic,
          i = e.isGeneratingProfilePic,
          o = e.setIsGeneratingProfilePic,
          a = (0, w.Z)(),
          l = (0, b.useState)(void 0),
          c = l[0],
          u = l[1],
          d = (0, b.useRef)(n);
        function f() {
          return (f = (0, s.Z)(
            p().mark(function e(t) {
              var n, r;
              return p().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(t.length > 0)) {
                        e.next = 9;
                        break;
                      }
                      return o(!1), (e.next = 4), (0, C.WI)(t[0], 512);
                    case 4:
                      (n = e.sent),
                        u({
                          tempId: (r = (0, O.W7)(n)),
                          file: n,
                          status: z.X.Uploading,
                          progress: 1,
                          fileId: null,
                          cdnUrl: null,
                        }),
                        d.current("uploading"),
                        (0, O.lU)(r, n, a, m.Ei.ProfilePicture, {
                          onFileCreated: function (e, t, n) {
                            u(function (r) {
                              return "initial" !== r &&
                                (null == r ? void 0 : r.tempId) === e &&
                                r.status === z.X.Uploading
                                ? A(
                                    A({}, r),
                                    {},
                                    { progress: 10, fileId: t, cdnUrl: n }
                                  )
                                : r;
                            });
                          },
                          onFileUploadProgress: function (e, t) {
                            u(function (n) {
                              return "initial" !== n &&
                                (null == n ? void 0 : n.tempId) === e &&
                                n.status === z.X.Uploading
                                ? A(A({}, n), {}, { progress: t })
                                : n;
                            });
                          },
                          onFileUploaded: function (e, t, n) {
                            u(function (t) {
                              return "initial" !== t &&
                                (null == t ? void 0 : t.tempId) === e
                                ? (d.current(t),
                                  A(
                                    A({}, t),
                                    {},
                                    {
                                      status: z.X.Ready,
                                      progress: 100,
                                      fileSpec: A(
                                        {
                                          name: t.file.name,
                                          id: t.fileId,
                                          size: t.file.size,
                                        },
                                        null != n ? n : {}
                                      ),
                                    }
                                  ))
                                : t;
                            });
                          },
                          onError: function (e) {
                            u(function (t) {
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
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        (0, b.useEffect)(function () {
          d.current = n;
        });
        var h = (0, y.uI)(
            A(
              {
                disabled: !1,
                noClick: !0,
                onDropAccepted: function (e) {
                  return f.apply(this, arguments);
                },
                onDropRejected: function (e) {
                  return (0, T.UJ)(e, a, z.A.ProfilePicture);
                },
                multiple: !0,
                maxSize: k.xC,
              },
              (0, C.Z8)(C.KL)
            )
          ),
          g = h.open,
          v = h.getInputProps;
        return (0, M.jsxs)("div", {
          className: "flex w-full items-center justify-center gap-4",
          children: [
            (0, M.jsxs)(x.fC, {
              children: [
                (0, M.jsx)(x.xz, {
                  className: "h-20 w-20",
                  children: i
                    ? (0, M.jsx)(E, {})
                    : null != c && "initial" != c && c.status != z.X.Ready
                      ? (0, M.jsxs)("div", {
                          className:
                            "relative h-full w-full overflow-hidden rounded-full",
                          children: [
                            (0, M.jsx)(N.l, { file: c.file }),
                            c.status === z.X.Uploading && c.progress < 90
                              ? (0, M.jsx)("div", {
                                  className:
                                    "absolute inset-0 flex items-center justify-center bg-black/5 text-white",
                                  children: (0, M.jsx)(P.Z, {
                                    percentage: c.progress,
                                    className: "h-6 w-6",
                                  }),
                                })
                              : null,
                          ],
                        })
                      : (null == t ? void 0 : t.profilePictureUrl) != null &&
                          (null == t ? void 0 : t.profilePictureUrl) !== ""
                        ? (0, M.jsx)(_.Z, {
                            isFirstParty: !1,
                            src: t.profilePictureUrl,
                          })
                        : (0, M.jsx)("div", {
                            className:
                              "flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-token-border-medium",
                            children: (0, M.jsx)(j.OvN, {
                              className: "text-4xl",
                            }),
                          }),
                }),
                (0, M.jsx)(x.Uv, {
                  children: (0, M.jsxs)(x.VY, {
                    className:
                      "flex min-w-[100px] max-w-xs flex-col rounded-xl border border-gray-400 bg-token-main-surface-primary shadow-lg dark:border-gray-700",
                    sideOffset: 7,
                    children: [
                      (0, M.jsx)(G.UA, {
                        onClick: g,
                        children: "Upload Photo",
                      }),
                      (0, M.jsx)(G.UA, {
                        onClick: r,
                        children: "Use DALL\xb7E",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, M.jsx)("input", A({}, v())),
          ],
        });
      }
      var D = n(5063),
        L = n(4748),
        U = n(46514),
        R = n(95412),
        B = n(1890),
        F = n(73582),
        V = n(14765),
        q = n(19841),
        W = n(24343),
        K = n(83737),
        Y = n(61888),
        H = n(5397),
        J = n.n(H),
        X = n(7137),
        Q = n(32004),
        $ = n(94968),
        ee = n(21389),
        et = n(3125),
        en = n(1755),
        er = n(99893);
      function ei(e, t) {
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
            ? ei(Object(n), !0).forEach(function (t) {
                (0, c.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ei(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function ea(e) {
        var t,
          n,
          r = e.gizmoEditorData,
          i = e.requireGizmoId,
          o = e.currentModelConfig,
          a = e.updateGizmo,
          c = (0, w.Z)(),
          u = (0, b.useState)(0),
          d = (u[0], u[1]),
          f = (0, b.useRef)(new Map()),
          h = (0, C.Zp)(o, void 0),
          g =
            ((t = (0, s.Z)(
              p().mark(function e(t) {
                var n;
                return p().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          en.A.logEvent(er.M.uploadFile, {
                            client: "web",
                            eventSource: "mouse",
                            intent: "gizmo",
                          }),
                          (e.next = 3),
                          i()
                        );
                      case 3:
                        if (((n = e.sent), !(t.length > 0))) {
                          e.next = 7;
                          break;
                        }
                        return (
                          (e.next = 7),
                          Promise.all(
                            t.map(function (e) {
                              var t = (0, O.W7)(e);
                              f.current.set(t, {
                                tempId: t,
                                gizmoId: n,
                                file: e,
                                status: z.X.Uploading,
                                progress: 1,
                                fileId: null,
                                cdnUrl: null,
                              }),
                                (0, O.cT)(
                                  (0, O.W7)(e),
                                  e,
                                  c,
                                  { kind: m.Ei.Gizmo, gizmoId: n },
                                  {
                                    onFileUploaded: function (e, t, n, r) {
                                      var i = f.current.get(e);
                                      null != i &&
                                        null != i.fileId &&
                                        (a(function (e) {
                                          var t;
                                          return eo(
                                            eo({}, e),
                                            {},
                                            {
                                              files: [].concat(
                                                (0, l.Z)(
                                                  null !== (t = e.files) &&
                                                  void 0 !== t
                                                    ? t
                                                    : []
                                                ),
                                                [
                                                  {
                                                    file_id: i.fileId,
                                                    name: i.file.name,
                                                    size: i.file.size,
                                                    type: i.file.type,
                                                    last_modified:
                                                      i.file.lastModified,
                                                    file_size_tokens:
                                                      null == r
                                                        ? void 0
                                                        : r.fileTokenSize,
                                                  },
                                                ]
                                              ),
                                            }
                                          );
                                        }),
                                        f.current.delete(e),
                                        d(function (e) {
                                          return e + 1;
                                        }));
                                    },
                                    onFileCreated: function (t, r, i) {
                                      f.current.set(
                                        t,
                                        eo(
                                          eo(
                                            {
                                              tempId: t,
                                              gizmoId: n,
                                              file: e,
                                              status: z.X.Uploading,
                                              progress: 1,
                                            },
                                            f.current.get(t)
                                          ),
                                          {},
                                          { fileId: r, cdnUrl: i }
                                        )
                                      ),
                                        d(function (e) {
                                          return e + 1;
                                        });
                                    },
                                    onFileUploadProgress: function (e, t) {
                                      var n = f.current.get(e);
                                      (null == n ? void 0 : n.status) ===
                                        z.X.Uploading &&
                                        f.current.set(
                                          e,
                                          eo(eo({}, n), {}, { progress: t })
                                        ),
                                        d(function (e) {
                                          return e + 1;
                                        });
                                    },
                                    onError: function (e) {
                                      f.current.delete(e);
                                    },
                                  },
                                  {
                                    usesRetrievalIndex:
                                      null != o &&
                                      (0, C._0)(o, e.type, e.name) ===
                                        m.Cd.Retrieval,
                                  }
                                );
                            })
                          )
                        );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return t.apply(this, arguments);
            }),
          v = (0, y.uI)(
            eo(
              {
                disabled: !1,
                noClick: !0,
                onDropAccepted: g,
                multiple: !0,
                maxSize: k.xC,
                maxFiles: 10,
              },
              (0, C.Z8)(h)
            )
          ),
          x = v.getInputProps,
          j = v.open,
          P =
            null !== (n = null == r ? void 0 : r.files) && void 0 !== n
              ? n
              : [];
        function T(e) {
          return (0, M.jsx)(
            N.Z,
            {
              onRemoveFileClick: function () {
                f.current.delete(e.tempId),
                  d(function (e) {
                    return e + 1;
                  });
              },
              file: e.file,
              loadingPercentage:
                e.status === z.X.Uploading ? e.progress : void 0,
            },
            e.tempId
          );
        }
        function I(e) {
          return (0, M.jsx)(
            N.Z,
            {
              file: e.name,
              fileId: e.file_id,
              onRemoveFileClick: function () {
                return a(function (t) {
                  var n;
                  return eo(
                    eo({}, t),
                    {},
                    {
                      files:
                        null == t
                          ? void 0
                          : null === (n = t.files) || void 0 === n
                            ? void 0
                            : n.filter(function (t) {
                                return t.file_id !== e.file_id;
                              }),
                    }
                  );
                });
              },
              gizmoId: null == r ? void 0 : r.id,
            },
            e.file_id
          );
        }
        var _ = Array.from(f.current.values()).filter(function (e) {
            return P.every(function (t) {
              return t.file_id !== e.fileId;
            });
          }),
          S = (0, Y.partition)(_, function (e) {
            return (
              null != o &&
              (0, C._0)(o, e.file.type, e.file.name) === m.Cd.CodeInterpreter
            );
          }),
          A = (0, et.Z)(S, 2),
          E = A[0],
          Z = A[1],
          D = (0, Y.partition)(P, function (e) {
            return (
              null != o &&
              null != e.type &&
              (0, C._0)(o, e.type, e.name) === m.Cd.CodeInterpreter
            );
          }),
          L = (0, et.Z)(D, 2),
          U = L[0],
          R = L[1],
          B = (0, b.useRef)(U.length);
        return (
          (0, b.useEffect)(
            function () {
              U.length > B.current &&
                a(function (e) {
                  var t, n;
                  return null !== (t = e.tools) &&
                    void 0 !== t &&
                    t.some(function (e) {
                      return e.type === m.qK.PYTHON;
                    })
                    ? e
                    : eo(
                        eo({}, e),
                        {},
                        {
                          tools: [].concat(
                            (0, l.Z)(
                              null !== (n = e.tools) && void 0 !== n ? n : []
                            ),
                            [{ type: m.qK.PYTHON }]
                          ),
                        }
                      );
                }),
                (B.current = U.length);
            },
            [U.length]
          ),
          (0, M.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
              (0, M.jsx)("div", {
                className: "rounded-lg text-token-text-tertiary",
                children: (0, M.jsx)(Q.Z, eo({}, es.knowledgeWarning)),
              }),
              Z.length > 0 || R.length > 0
                ? (0, M.jsxs)("div", {
                    className: "flex flex-wrap gap-2",
                    children: [Z.map(T), R.map(I)],
                  })
                : null,
              E.length > 0 || U.length > 0
                ? (0, M.jsxs)("div", {
                    children: [
                      (0, M.jsx)("div", {
                        className: "mb-2 text-xs text-token-text-tertiary",
                        children:
                          "The following files are only available for Code Interpreter:",
                      }),
                      (0, M.jsxs)("div", {
                        className: "flex flex-wrap gap-2",
                        children: [E.map(T), U.map(I)],
                      }),
                    ],
                  })
                : null,
              (0, M.jsx)("div", {
                children: (0, M.jsxs)(G.cY, {
                  onClick: j,
                  children: [(0, M.jsx)("input", eo({}, x())), "Upload files"],
                }),
              }),
            ],
          })
        );
      }
      var es = (0, $.vU)({
          knowledgeWarning: {
            id: "gizmo.knowledgeWarning",
            defaultMessage:
              "If you upload files under Knowledge, conversations with your GPT may include file contents. Files can be downloaded when Code Interpreter is enabled",
          },
        }),
        el = n(21120);
      function ec(e) {
        var t = e.placeholder,
          n = e.text,
          r = e.onChange,
          i = e.onClose;
        return (0, M.jsx)(el.Z, {
          className: "!max-h-[100vh] !max-w-[80vw]",
          type: "success",
          isOpen: !0,
          onClose: i,
          primaryButton: (0, M.jsx)(G.cY, { onClick: i, children: "Close" }),
          children: (0, M.jsx)("textarea", {
            className:
              "h-[70vh] w-full resize-none rounded-lg bg-token-main-surface-primary dark:border-gray-700",
            value: n,
            onChange: function (e) {
              r(e.target.value);
            },
            placeholder: t,
          }),
        });
      }
      function eu(e, t) {
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
      function ed(e) {
        var t = e.label,
          n = e.toolType,
          r = e.enabledTools,
          i = e.onEnabledToolsChange,
          o = e.disabled,
          a = e.disabledTooltip,
          s = function (e) {
            return r.some(function (t) {
              return t.type === e;
            });
          },
          c = (0, M.jsx)(G.f8, {
            labelClassName: "w-full cursor-pointer",
            id: n,
            label: t,
            checked: !o && s(n),
            disabled: o,
            onChange: function () {
              s(n)
                ? i(
                    r.filter(function (e) {
                      return e.type !== n;
                    })
                  )
                : i([].concat((0, l.Z)(r), [{ type: n }]));
            },
          });
        return null != a
          ? (0, M.jsx)("div", {
              className: "opacity-70",
              children: (0, M.jsx)(g.u, { side: "top", label: a, children: c }),
            })
          : c;
      }
      function ep(e) {
        var t = e.enabledTools,
          n = e.onEnabledToolsChange,
          r = (0, f.C)(B.L0.BrowseAvailable),
          i = (0, V.sB)(V.tz.GizmoMemory).value,
          o = (0, w.Z)();
        return (0, M.jsxs)("div", {
          className: "flex flex-col items-start gap-2",
          children: [
            (0, M.jsx)(ed, {
              label: "Web Browsing",
              toolType: m.qK.BROWSER,
              enabledTools: t,
              onEnabledToolsChange: n,
              disabled: !r,
              disabledTooltip: r
                ? void 0
                : (0, M.jsx)(
                    Q.Z,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? eu(Object(n), !0).forEach(function (t) {
                              (0, c.Z)(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : eu(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                      }
                      return e;
                    })({}, em.disabledBrowsingToolTip)
                  ),
            }),
            (0, M.jsx)(ed, {
              label: "DALL\xb7E Image Generation",
              toolType: m.qK.DALLE,
              enabledTools: t,
              onEnabledToolsChange: n,
            }),
            (0, M.jsx)(ed, {
              label: (0, M.jsxs)("div", {
                className: "flex items-center",
                children: [
                  "Code Interpreter",
                  (0, M.jsx)(ew, {
                    description: o.formatMessage(em.codeInterpreterTooltip),
                  }),
                ],
              }),
              toolType: m.qK.PYTHON,
              enabledTools: t,
              onEnabledToolsChange: n,
            }),
            i &&
              (0, M.jsx)(ed, {
                label: (0, M.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    "Memory",
                    (0, M.jsx)(ew, {
                      description: o.formatMessage(em.memoryTooltip),
                    }),
                  ],
                }),
                toolType: m.qK.MEMORY,
                enabledTools: t,
                onEnabledToolsChange: n,
              }),
          ],
        });
      }
      var em = (0, $.vU)({
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
        }),
        ef = n(57664);
      function eh(e, t) {
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
      function eg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eh(Object(n), !0).forEach(function (t) {
                (0, c.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eh(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var ev = ee.Z.input(
          r ||
            (r = (0, u.Z)([
              "w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 border focus:ring-blue-400 border-token-border-medium h-9 bg-token-main-surface-primary",
            ]))
        ),
        ex = ee.Z.div(i || (i = (0, u.Z)(["text-sm text-red-500"]))),
        eb = ee.Z.div(o || (o = (0, u.Z)(["mb-6"]))),
        ey = ee.Z.textarea(
          a ||
            (a = (0, u.Z)([
              "w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32",
            ]))
        );
      function ej() {
        return (0, M.jsx)("div", {
          className:
            "ml-2 flex h-3.5 w-3.5 cursor-default items-center justify-center rounded-full border border-token-border-medium text-[0.5rem] font-medium leading-none text-token-text-tertiary",
          children: "?",
        });
      }
      function ew(e) {
        var t = e.description;
        return (0, M.jsx)(g.u, {
          wide: !0,
          label: t,
          delayDuration: 0,
          children: (0, M.jsx)(ej, {}),
        });
      }
      function eP(e) {
        var t = e.label,
          n = e.description,
          r = e.collapsed,
          i = e.onClick,
          o = (0, M.jsx)("label", {
            className: "block font-medium text-token-text-primary",
            children: t,
          });
        return (0, M.jsxs)("div", {
          className: "mb-1.5 flex items-center",
          onClick: i,
          children: [
            void 0 !== r && (r ? (0, M.jsx)(X.H_v, {}) : (0, M.jsx)(X.iUH, {})),
            n
              ? (0, M.jsx)(g.u, {
                  label: n,
                  sideOffset: 4,
                  side: "top",
                  delayDuration: 0,
                  children: o,
                })
              : (0, M.jsx)(M.Fragment, { children: o }),
          ],
        });
      }
      function ek(e) {
        var t = e.children,
          n = e.collapsed,
          r = e.initial;
        return (0, M.jsx)(W.M, {
          initial: r,
          children:
            !n &&
            (0, M.jsx)(K.E.div, {
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
      function eT(e) {
        var t,
          n = e.actionTool,
          r = e.onShowActionsEditor,
          i = e.isDisabled,
          o =
            "metadata" in n
              ? null === (t = n.metadata) || void 0 === t
                ? void 0
                : t.domain
              : void 0;
        return (0, M.jsxs)("div", {
          className:
            "flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",
          onClick: r,
          children: [
            (0, M.jsx)("div", {
              className: "h-9 grow px-3 py-2",
              children:
                null != o
                  ? o
                  : (0, M.jsx)("span", {
                      className: "text-red-500",
                      children: "Invalid action",
                    }),
            }),
            (0, M.jsx)("div", { className: "w-px bg-token-border-medium" }),
            (0, M.jsx)("button", {
              disabled: i,
              className:
                "flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none",
              children: (0, M.jsx)(D.RR, { className: "icon-sm" }),
            }),
          ],
        });
      }
      function eN(e) {
        var t,
          n,
          r,
          i = e.gizmo,
          o = e.onShowActionsEditor,
          a = e.isDisabled,
          s = (0, w.Z)(),
          l = (0, M.jsxs)("div", {
            className: "space-y-1",
            children: [
              null == i
                ? void 0
                : null === (t = i.tools) || void 0 === t
                  ? void 0
                  : t.map(function (e, t) {
                      var n;
                      return e.type !== m.qK.JIT_PLUGIN
                        ? null
                        : (0, M.jsxs)(
                            "div",
                            {
                              children: [
                                (0, M.jsx)(eT, {
                                  isDisabled: a,
                                  actionTool: e,
                                  onShowActionsEditor: function () {
                                    return o(e.metadata.domain);
                                  },
                                }),
                                (null === (n = e.metadata.auth) || void 0 === n
                                  ? void 0
                                  : n.type) === "oauth" &&
                                  (0, M.jsx)(h.Z, {
                                    label: "Callback URL",
                                    value: ""
                                      .concat(
                                        "https://chat.openai.com",
                                        "/aip/"
                                      )
                                      .concat(
                                        e.metadata.action_id,
                                        "/oauth/callback"
                                      ),
                                    onCopied: function () {
                                      L.m.success("Copied to clipboard", {
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
                (n =
                  null == i
                    ? void 0
                    : null === (r = i.tools) || void 0 === r
                      ? void 0
                      : r.filter(function (e) {
                          return e.type === m.qK.JIT_PLUGIN;
                        })) && void 0 !== n
                ? n
                : []
              ).length >= v.L5
                ? (0, M.jsx)("div", {
                    children: s.formatMessage(eI.maxActionsReached, {
                      number: v.L5,
                    }),
                  })
                : (0, M.jsx)(G.cY, {
                    disabled: a,
                    onClick: function () {
                      o("Unknown domain");
                    },
                    className: "mt-2",
                    children: (0, M.jsx)(Q.Z, eg({}, eI.createActionLabel)),
                  }),
            ],
          });
        return a
          ? (0, M.jsx)(g.u, {
              side: "top",
              label: s.formatMessage(eI.disabledCustomActionsTooltip),
              children: l,
            })
          : l;
      }
      function ez(e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          c,
          u,
          d,
          h,
          g = e.gizmoEditorData,
          x = e.updateGizmo,
          y = e.generateProfilePic,
          j = e.setIsUploadingProfilePic,
          P = e.isGeneratingProfilePic,
          k = e.setIsGeneratingProfilePic,
          T = e.requireGizmoId,
          N = e.onShowActionsEditor,
          z = (0, U.B9)(),
          O = U.mx,
          C =
            null !== (o = null == g ? void 0 : g.tools) && void 0 !== o
              ? o
              : [],
          I = O ? z[O] : void 0,
          _ = (0, b.useState)(!1),
          S = _[0],
          A = _[1],
          E = (0, b.useState)(!1),
          L = E[0],
          W = E[1],
          K = (0, b.useState)(!0),
          H = K[0],
          J = K[1],
          X =
            null !== (a = null == g ? void 0 : g.promptStarters) && void 0 !== a
              ? a
              : [],
          $ = [].concat((0, l.Z)(X), (0, l.Z)(X.length < 12 ? [""] : [])),
          ee = (0, ef.bw)(g),
          et = (0, F.ec)(F.F_.isBusinessWorkspace),
          en = (0, f.C)(B.L0.WorkspaceGPTCustomActions),
          er = (0, w.Z)(),
          ei = (0, V.sB)(V.tz.GizmoContacts).value,
          eo = (0, V.sB)(V.tz.GizmoIntents).value;
        return (0, M.jsxs)("div", {
          className:
            "flex h-full grow flex-col overflow-y-auto px-2 pt-6 text-sm",
          children: [
            (0, M.jsxs)("div", {
              className: "grow",
              children: [
                (0, M.jsxs)(eb, {
                  children: [
                    (0, M.jsx)(Z, {
                      gizmoEditorData: g,
                      generateProfilePic: y,
                      isGeneratingProfilePic: P,
                      setIsGeneratingProfilePic: k,
                      onFileChange:
                        ((t = (0, s.Z)(
                          p().mark(function e(t) {
                            var n;
                            return p().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      !(
                                        null != t &&
                                        "uploading" !== t &&
                                        null != t.fileId
                                      )
                                    ) {
                                      e.next = 7;
                                      break;
                                    }
                                    return (
                                      (e.next = 3),
                                      R.Z.getFileDownloadLink(t.fileId)
                                    );
                                  case 3:
                                    (n = e.sent).status === m.KF.Success &&
                                      x({
                                        profilePictureId:
                                          null != t.fileId ? t.fileId : void 0,
                                        profilePictureUrl: n.download_url,
                                      }),
                                      (e.next = 8);
                                    break;
                                  case 7:
                                    x({
                                      profilePictureId: void 0,
                                      profilePictureUrl: void 0,
                                    });
                                  case 8:
                                    j("uploading" === t);
                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )),
                        function (e) {
                          return t.apply(this, arguments);
                        }),
                    }),
                    (0, M.jsx)(eP, {
                      label: "Name",
                      description: "The name of your GPT",
                    }),
                    (0, M.jsx)(ev, {
                      type: "text",
                      placeholder: "Name your GPT",
                      value:
                        null !== (c = null == g ? void 0 : g.name) &&
                        void 0 !== c
                          ? c
                          : "",
                      onChange: function (e) {
                        x({ name: e.target.value });
                      },
                      onBlurCapture: function () {
                        return x(function (e) {
                          return eg(eg({}, e), {}, { name: e.name.trim() });
                        });
                      },
                    }),
                    ee.includes(ef.hs.GizmoNameTooLong)
                      ? (0, M.jsx)(ex, {
                          className: "mt-1",
                          children: (0, M.jsx)(
                            Q.Z,
                            eg(
                              eg({}, eI.nameTooLong),
                              {},
                              { values: { length: v.aI } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, M.jsxs)(eb, {
                  className: "mt-4",
                  children: [
                    (0, M.jsx)(eP, {
                      label: "Description",
                      description: "Short description of what this GPT does",
                    }),
                    (0, M.jsx)(ev, {
                      type: "text",
                      placeholder:
                        "Add a short description about what this GPT does",
                      value:
                        null !== (u = null == g ? void 0 : g.description) &&
                        void 0 !== u
                          ? u
                          : "",
                      onChange: function (e) {
                        return x({ description: e.target.value });
                      },
                      onBlurCapture: function () {
                        return x(function (e) {
                          var t, n;
                          return eg(
                            eg({}, e),
                            {},
                            {
                              description:
                                null !==
                                  (t =
                                    null === (n = e.description) || void 0 === n
                                      ? void 0
                                      : n.trim()) && void 0 !== t
                                  ? t
                                  : "",
                            }
                          );
                        });
                      },
                    }),
                    ee.includes(ef.hs.GizmoDescriptionTooLong)
                      ? (0, M.jsx)(ex, {
                          className: "mt-1",
                          children: (0, M.jsx)(
                            Q.Z,
                            eg(
                              eg({}, eI.descriptionTooLong),
                              {},
                              { values: { length: v.P_ } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, M.jsxs)(eb, {
                  children: [
                    (0, M.jsx)(eP, {
                      label: "Instructions",
                      description:
                        "What does this GPT do? How does it behave? What should it avoid doing?",
                    }),
                    (0, M.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, M.jsx)(ey, {
                          className: "resize-none",
                          rows: 8,
                          value: null == g ? void 0 : g.instructions,
                          onChange: function (e) {
                            return x({ instructions: e.target.value });
                          },
                          onBlurCapture: function () {
                            return x(function (e) {
                              return eg(
                                eg({}, e),
                                {},
                                { instructions: e.instructions.trim() }
                              );
                            });
                          },
                          placeholder:
                            "What does this GPT do? How does it behave? What should it avoid doing?",
                        }),
                        (0, M.jsx)("button", {
                          className:
                            "absolute bottom-3 right-2 text-token-text-tertiary",
                          onClick: function () {
                            return A(!0);
                          },
                          children: (0, M.jsx)(D.j5, { className: "icon-sm" }),
                        }),
                      ],
                    }),
                    ee.includes(ef.hs.GizmoInstructionsTooLong)
                      ? (0, M.jsx)(ex, {
                          className: "mt-1",
                          children: (0, M.jsx)(
                            Q.Z,
                            eg(
                              eg({}, eI.instructionsTooLong),
                              {},
                              { values: { length: v.vi } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, M.jsxs)(eb, {
                  className: "hidden",
                  children: [
                    (0, M.jsx)(eP, {
                      label: "Welcome Message",
                      description: "How this GPT starts conversations.",
                    }),
                    (0, M.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, M.jsx)(ey, {
                          className: (0, q.default)("h-16 resize-none"),
                          value: null == g ? void 0 : g.welcomeMessage,
                          onChange: function (e) {
                            return x({ welcomeMessage: e.target.value });
                          },
                          placeholder: "How this GPT starts conversations.",
                        }),
                        (0, M.jsx)("button", {
                          className:
                            "absolute bottom-3 right-2 text-token-text-tertiary",
                          onClick: function () {
                            return W(!0);
                          },
                          children: (0, M.jsx)(D.j5, { className: "icon-sm" }),
                        }),
                      ],
                    }),
                    ee.includes(ef.hs.GizmoWelcomeMessageTooLong)
                      ? (0, M.jsx)(ex, {
                          className: "mt-1",
                          children: (0, M.jsx)(
                            Q.Z,
                            eg(
                              eg({}, eI.welcomeMessageTooLong),
                              {},
                              { values: { length: v.Lu } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, M.jsxs)(eb, {
                  children: [
                    (0, M.jsx)(eP, {
                      label: "Conversation starters",
                      description:
                        "Examples for the user to start the conversation",
                    }),
                    (0, M.jsx)("div", {
                      className: "flex flex-col gap-1",
                      children: $.map(function (e, t) {
                        return (0, M.jsxs)(
                          "div",
                          {
                            className: "flex items-center",
                            children: [
                              (0, M.jsx)(ev, {
                                className: "rounded-r-none",
                                value: e,
                                type: "text",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  x(function (e) {
                                    var r;
                                    return eg(
                                      eg({}, e),
                                      {},
                                      {
                                        promptStarters: (0, Y.compact)(
                                          t >=
                                          (null !== (r = X.length) &&
                                          void 0 !== r
                                            ? r
                                            : 0)
                                            ? [].concat(
                                                (0, l.Z)(null != X ? X : []),
                                                [n]
                                              )
                                            : X.map(function (e, r) {
                                                if (r === t) {
                                                  if ("" === n) return;
                                                  return n;
                                                }
                                                return e;
                                              })
                                        ),
                                      }
                                    );
                                  });
                                },
                              }),
                              (0, M.jsx)("button", {
                                className:
                                  "flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none border border-l-0 border-token-border-medium",
                                onClick: function () {
                                  return x(function (e) {
                                    return eg(
                                      eg({}, e),
                                      {},
                                      {
                                        promptStarters: X.filter(function (
                                          e,
                                          n
                                        ) {
                                          return n !== t;
                                        }),
                                      }
                                    );
                                  });
                                },
                                children: (0, M.jsx)(D.v7, {
                                  className: "icon-sm",
                                }),
                              }),
                            ],
                          },
                          t
                        );
                      }),
                    }),
                  ],
                }),
                (0, M.jsxs)(eb, {
                  children: [
                    (0, M.jsx)(eP, {
                      label: "Knowledge",
                      description: er.formatMessage(eI.knowledgeExplanation),
                    }),
                    (0, M.jsx)(ea, {
                      gizmoEditorData: g,
                      requireGizmoId: T,
                      currentModelConfig: I,
                      updateGizmo: x,
                    }),
                  ],
                }),
                (0, M.jsxs)(eb, {
                  children: [
                    (0, M.jsx)(eP, {
                      label: "Capabilities",
                      description: "Functionality this GPT can use",
                    }),
                    (0, M.jsx)(ep, {
                      enabledTools: C,
                      onEnabledToolsChange: function (e) {
                        return x({ tools: e });
                      },
                    }),
                  ],
                }),
                (0, M.jsxs)(eb, {
                  children: [
                    (0, M.jsx)(eP, {
                      label: "Actions",
                      description: "APIs this GPT can use",
                    }),
                    (0, M.jsx)(eN, {
                      isDisabled: !!(et && !en),
                      gizmo: g,
                      onShowActionsEditor: N,
                    }),
                  ],
                }),
                !et &&
                  ((null !==
                    (n =
                      null === (r = g.files) || void 0 === r
                        ? void 0
                        : r.length) && void 0 !== n
                    ? n
                    : 0) > 0 ||
                    (null == g
                      ? void 0
                      : null === (i = g.tools) || void 0 === i
                        ? void 0
                        : i.some(function (e) {
                            return e.type === m.qK.JIT_PLUGIN;
                          }))) &&
                  (0, M.jsxs)(eb, {
                    children: [
                      (0, M.jsx)(eP, {
                        label: "Additional Settings",
                        collapsed: !!H,
                        onClick: function () {
                          J(function (e) {
                            return !e;
                          });
                        },
                      }),
                      (0, M.jsx)(ek, {
                        collapsed: H,
                        initial: !1,
                        children: (0, M.jsx)(G.f8, {
                          className: "mx-3 my-1",
                          labelClassName: "w-full cursor-pointer",
                          label:
                            "Use conversation data in your GPT to improve our models",
                          id: "improve-chatgpt",
                          checked: !g.trainingDisabled,
                          onChange: function () {
                            x({ trainingDisabled: !g.trainingDisabled });
                          },
                        }),
                      }),
                    ],
                  }),
                !ei && (0, M.jsx)(eC, { gizmoEditorData: g, updateGizmo: x }),
                eo && (0, M.jsx)(eO, { gizmoEditorData: g, updateGizmo: x }),
              ],
            }),
            L &&
              (0, M.jsx)(ec, {
                text: null !== (d = g.welcomeMessage) && void 0 !== d ? d : "",
                onChange: function (e) {
                  x({ welcomeMessage: e });
                },
                onClose: function () {
                  return W(!1);
                },
                placeholder: "How this GPT starts conversations.",
              }),
            S &&
              (0, M.jsx)(ec, {
                text: null !== (h = g.instructions) && void 0 !== h ? h : "",
                onChange: function (e) {
                  x({ instructions: e });
                },
                onClose: function () {
                  return A(!1);
                },
                placeholder:
                  "What does this GPT do? How does it behave? What should it avoid doing?",
              }),
          ],
        });
      }
      var eO = J()(
          function () {
            return n
              .e(8682)
              .then(n.bind(n, 84972))
              .then(function (e) {
                return e.GizmoIntentEditor;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [84972];
              },
            },
          }
        ),
        eC = J()(
          function () {
            return n
              .e(8682)
              .then(n.bind(n, 79669))
              .then(function (e) {
                return e.GizmoContactsEditor;
              });
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [79669];
              },
            },
          }
        ),
        eI = (0, $.vU)({
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
    57664: function (e, t, n) {
      n.d(t, {
        bw: function () {
          return g;
        },
        hs: function () {
          return i;
        },
        sw: function () {
          return h;
        },
        x$: function () {
          return f;
        },
      });
      var r,
        i,
        o = n(36112),
        a = n(3125),
        s = n(82256),
        l = n(52336),
        c = n(67311),
        u = n(25736);
      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function p(e, t) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : p(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function f(e, t) {
        return null == t
          ? e
          : ((t = (function e(t) {
              return "object" == typeof t && null != t
                ? Array.isArray(t)
                  ? t.map(e)
                  : Object.fromEntries(
                      Object.entries(t).map(function (t) {
                        var n = (0, a.Z)(t, 2);
                        return [n[0], e(n[1])];
                      })
                    )
                : null === t
                  ? void 0
                  : t;
            })(t)),
            m(m({}, e), t));
      }
      function h(e) {
        switch (e) {
          case i.Loading:
            return "Loading";
          case i.UploadingProfilePic:
            return "Uploading profile picture";
          case i.GeneratingProfilePic:
            return "Generating profile picture";
          case i.GizmoNameTooLong:
            return "GPT name too long";
          case i.GizmoDescriptionTooLong:
            return "GPT description too long";
          case i.GizmoWelcomeMessageTooLong:
            return "GPT welcome message too long";
          case i.GizmoInstructionsTooLong:
            return "GPT instructions too long";
          case i.NameEmpty:
            return "GPT name cannot be empty";
          case i.MissingPublicActionPrivacyPolicyURL:
            return "Public actions require valid privacy policy URLs";
          case i.MissingCategory:
            return "Public GPTs must have a category";
          default:
            return (0, c.Z)(e), "";
        }
      }
      function g(e, t, n) {
        var r = e.name.length > u.aI,
          o =
            (null !==
              (m =
                null === (f = e.description) || void 0 === f
                  ? void 0
                  : f.length) && void 0 !== m
              ? m
              : 0) > u.P_,
          a =
            (null !==
              (h =
                null === (g = e.welcomeMessage) || void 0 === g
                  ? void 0
                  : g.length) && void 0 !== h
              ? h
              : 0) > u.Lu,
          c =
            (null !==
              (v =
                null === (x = e.instructions) || void 0 === x
                  ? void 0
                  : x.length) && void 0 !== v
              ? v
              : 0) > u.vi,
          p = [];
        if (
          ((null == e ? void 0 : e.name) === "" && p.push(i.NameEmpty),
          r && p.push(i.GizmoNameTooLong),
          o && p.push(i.GizmoDescriptionTooLong),
          c && p.push(i.GizmoInstructionsTooLong),
          a && p.push(i.GizmoWelcomeMessageTooLong),
          null != t && [l.Zz.Link, l.Zz.Marketplace].includes(t))
        ) {
          var m,
            f,
            h,
            g,
            v,
            x,
            b,
            y,
            j = (function (e, t) {
              var n =
                ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
              if (!n) {
                if (
                  Array.isArray(e) ||
                  (n = (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return d(e, t);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      if (
                        ("Object" === n &&
                          e.constructor &&
                          (n = e.constructor.name),
                        "Map" === n || "Set" === n)
                      )
                        return Array.from(e);
                      if (
                        "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      )
                        return d(e, t);
                    }
                  })(e))
                ) {
                  n && (e = n);
                  var r = 0,
                    i = function () {};
                  return {
                    s: i,
                    n: function () {
                      return r >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[r++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: i,
                  };
                }
                throw TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              }
              var o,
                a = !0,
                s = !1;
              return {
                s: function () {
                  n = n.call(e);
                },
                n: function () {
                  var e = n.next();
                  return (a = e.done), e;
                },
                e: function (e) {
                  (s = !0), (o = e);
                },
                f: function () {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (s) throw o;
                  }
                },
              };
            })(
              null === (b = e.tools) || void 0 === b
                ? void 0
                : b.filter(function (e) {
                    return e.type === s.qK.JIT_PLUGIN;
                  })
            );
          try {
            for (j.s(); !(y = j.n()).done; ) {
              var w,
                P = y.value,
                k =
                  null === (w = P.metadata) || void 0 === w
                    ? void 0
                    : w.privacy_policy_url;
              if (
                null == k ||
                !(function (e) {
                  try {
                    return new URL(e), !0;
                  } catch (e) {
                    return !1;
                  }
                })(k)
              ) {
                p.push(i.MissingPublicActionPrivacyPolicyURL);
                break;
              }
            }
          } catch (e) {
            j.e(e);
          } finally {
            j.f();
          }
        }
        return (
          t === l.Zz.Marketplace && null == n && p.push(i.MissingCategory), p
        );
      }
      ((r = i || (i = {}))[(r.Loading = 0)] = "Loading"),
        (r[(r.UploadingProfilePic = 1)] = "UploadingProfilePic"),
        (r[(r.GeneratingProfilePic = 2)] = "GeneratingProfilePic"),
        (r[(r.GizmoNameTooLong = 3)] = "GizmoNameTooLong"),
        (r[(r.GizmoDescriptionTooLong = 4)] = "GizmoDescriptionTooLong"),
        (r[(r.GizmoWelcomeMessageTooLong = 5)] = "GizmoWelcomeMessageTooLong"),
        (r[(r.GizmoInstructionsTooLong = 6)] = "GizmoInstructionsTooLong"),
        (r[(r.NameEmpty = 7)] = "NameEmpty"),
        (r[(r.MissingPublicActionPrivacyPolicyURL = 8)] =
          "MissingPublicActionPrivacyPolicyURL"),
        (r[(r.MissingCategory = 9)] = "MissingCategory");
    },
  },
]);
//# sourceMappingURL=1992-af69aabaa65d6a75.js.map
