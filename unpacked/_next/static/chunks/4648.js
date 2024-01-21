"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4648],
  {
    54648: function (e, t, n) {
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return nC;
          },
          default: function () {
            return nI;
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
        b,
        y,
        j,
        w,
        P,
        k,
        T = n(37097),
        N = n(50134),
        z = n(6939),
        O = n(36112),
        C = n(4399),
        I = n.n(C),
        _ = n(82256),
        G = n(61302),
        M = n(90038),
        S = n(3554),
        A = n(21120),
        E = n(14711),
        Z = n(52336),
        D = n(14765),
        L = n(70079),
        U = n(21389),
        R = n(35250),
        B = U.Z.a(u || (u = (0, M.Z)(["bold underline"]))),
        F = U.Z.textarea(
          d ||
            (d = (0, M.Z)([
              "w-full text-sm overflow-y-auto rounded-lg border bg-transparent px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium dark:bg-gray-800 bg-white h-32",
            ]))
        );
      function V(e) {
        var t,
          n = e.gizmoId,
          r = e.sharingRecipient,
          i = e.moderationType,
          o = e.violationType,
          a = e.appealAvailable,
          s = e.onClose,
          l = e.onAppealSubmitted,
          c = (0, L.useState)(""),
          u = c[0],
          d = c[1],
          p = (0, L.useState)(h.Initial),
          g = p[0],
          v = p[1],
          x =
            ((t = (0, N.Z)(
              I().mark(function e() {
                return I().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), E.U.postGizmoAppeal(n, u, r);
                      case 2:
                        v(h.SubmittedConfirmation), null == l || l();
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
        switch (g) {
          case h.Initial:
            return (0, R.jsx)(A.Z, {
              title: (function (e) {
                switch (e) {
                  case m.PublishBlocked:
                    return "Your changes couldn’t be published";
                  case m.RemovedFromMarketplace:
                    return "Your GPT has been removed from the marketplace";
                  case m.RemovedFromPublic:
                    return "Your GPT has been removed from public view";
                  case m.Recategorized:
                    return "Your GPT has been recategorized";
                }
              })(i),
              isOpen: !0,
              onClose: s,
              closeButton: (0, R.jsx)(S.ZP.CloseButton, { onClose: s }),
              primaryButton: (0, R.jsx)(S.ZP.Button, {
                title: "Continue",
                color: "primary",
                onClick: s,
              }),
              secondaryButton: a
                ? (0, R.jsx)(S.ZP.Button, {
                    title: "Appeal",
                    onClick: function () {
                      return v(h.AppealForm);
                    },
                  })
                : void 0,
              type: "warning",
              children: (0, R.jsx)("div", {
                className: "flex flex-col gap-2 text-sm",
                children: (function (e, t) {
                  var n = t
                    ? (0, R.jsx)("p", {
                        children:
                          "Alternatively you may appeal this decision and we will get back to you in a few days. Or you can publish to “Only me” and use this GPT privately.",
                      })
                    : void 0;
                  switch (e) {
                    case f.BrandName:
                      return (0, R.jsxs)(R.Fragment, {
                        children: [
                          (0, R.jsxs)("p", {
                            children: [
                              "Your GPT’s name is restricted for public sharing. If this is your organization’s name, please verify your website via the",
                              " ",
                              (0, R.jsx)(B, {
                                href: "/#settings/BuilderProfile",
                                children: "Builder profile in Settings",
                              }),
                              ".",
                            ],
                          }),
                          n,
                        ],
                      });
                    case f.WrongCategory:
                      return (0, R.jsxs)(R.Fragment, {
                        children: [
                          (0, R.jsx)("p", {
                            children:
                              "Your GPT’s category is restricted for public sharing. Please select a different category.",
                          }),
                          n,
                        ],
                      });
                    case f.Other:
                      return (0, R.jsxs)(R.Fragment, {
                        children: [
                          (0, R.jsx)("p", {
                            children:
                              "Your GPT isn’t ready for public sharing yet. Usually, it’s a quick fix.",
                          }),
                          (0, R.jsx)("p", {
                            children: "Here’s what you can do",
                          }),
                          (0, R.jsxs)("ul", {
                            className: "list-disc pl-5",
                            children: [
                              (0, R.jsxs)("li", {
                                children: [
                                  (0, R.jsx)("b", {
                                    children: "Review your info:",
                                  }),
                                  " Check that your description, name, and profile picture meet our",
                                  " ",
                                  (0, R.jsx)(B, {
                                    target: "_blank",
                                    href: "https://openai.com/brand",
                                    rel: "noreferrer",
                                    children: "brand",
                                  }),
                                  " ",
                                  "and",
                                  " ",
                                  (0, R.jsx)(B, {
                                    target: "_blank",
                                    href: "https://openai.com/policies/usage-policies",
                                    rel: "noreferrer",
                                    children: "usage",
                                  }),
                                  " ",
                                  "guidelines.",
                                ],
                              }),
                              (0, R.jsxs)("li", {
                                children: [
                                  (0, R.jsx)("b", { children: "Share again:" }),
                                  " Once updated, go ahead and share your GPT.",
                                ],
                              }),
                            ],
                          }),
                          (0, R.jsx)("p", {
                            children:
                              "Feel free to use your GPT privately for now by publishing to “only me”.",
                          }),
                          n,
                        ],
                      });
                  }
                })(o, a),
              }),
            });
          case h.AppealForm:
            return (0, R.jsx)(A.Z, {
              title: "Appeal",
              isOpen: !0,
              onClose: s,
              closeButton: (0, R.jsx)(S.ZP.CloseButton, { onClose: s }),
              primaryButton: (0, R.jsx)(S.ZP.Button, {
                title: "Submit",
                color: "primary",
                onClick: x,
                disabled: 0 === u.trim().length,
              }),
              secondaryButton: (0, R.jsx)(S.ZP.Button, {
                title: "Back",
                onClick: function () {
                  return v(h.Initial);
                },
              }),
              type: "warning",
              children: (0, R.jsxs)("div", {
                className: "flex flex-col gap-2 text-sm",
                children: [
                  (0, R.jsx)("p", {
                    children:
                      "Please provide a reason for why you believe this GPT doesn’t violate our policies and should be published",
                  }),
                  (0, R.jsx)(F, {
                    value: u,
                    onChange: function (e) {
                      return d(e.target.value);
                    },
                  }),
                ],
              }),
            });
          case h.SubmittedConfirmation:
            return (0, R.jsx)(R.Fragment, {});
        }
      }
      function q(e) {
        var t = e.onClose;
        return (0, R.jsx)(A.Z, {
          title: "Appeal submitted",
          isOpen: !0,
          onClose: t,
          closeButton: (0, R.jsx)(S.ZP.CloseButton, { onClose: t }),
          type: "success",
          children: (0, R.jsx)("div", {
            className: "flex flex-col gap-2 text-sm",
            children: (0, R.jsx)("div", {
              children:
                "Your appeal has been submitted. We will get back to you as soon as possible.",
            }),
          }),
        });
      }
      function W(e) {
        var t,
          n = e.gizmoId,
          r = e.onClose,
          i = (0, T.b9)(n, !0).data,
          o =
            ((t = (0, N.Z)(
              I().mark(function e() {
                return I().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), E.U.postGizmoCancelAppeal(n);
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
        return (0, R.jsx)(A.Z, {
          isOpen: !0,
          onClose: function () {
            null == r || r();
          },
          primaryButton: (0, R.jsx)(S.ZP.Button, {
            title: "Cancel appeal",
            color: "primary",
            onClick: o,
          }),
          type: "warning",
          children: (0, R.jsxs)("div", {
            className: "flex flex-col gap-2 text-sm",
            children: [
              (0, R.jsx)("h2", {
                className: "text-lg font-semibold",
                children: "Reviewing your appeal",
              }),
              (0, R.jsxs)("p", {
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
      function H(e) {
        var t = e.appealState,
          n = e.onAppealClose,
          r = e.onAppealSubmitted,
          i = (0, D.sB)(D.tz.GizmoAppeals).value,
          o = (0, L.useState)(!1),
          a = o[0],
          s = o[1];
        return a
          ? (0, R.jsx)(q, {
              onClose: function () {
                s(!1), null == r || r();
              },
            })
          : (0, R.jsxs)(R.Fragment, {
              children: [
                (null == t ? void 0 : t.showModal) == p.AppealSent &&
                  (0, R.jsx)(W, { gizmoId: t.gizmoId }),
                (null == t ? void 0 : t.showModal) == p.AppealAvailable &&
                  (0, R.jsx)(V, {
                    gizmoId: t.gizmoId,
                    sharingRecipient: t.sharingRecipient,
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
      ((r = p || (p = {}))[(r.None = 0)] = "None"),
        (r[(r.AppealAvailable = 1)] = "AppealAvailable"),
        (r[(r.AppealSent = 2)] = "AppealSent"),
        ((i = m || (m = {}))[(i.None = 0)] = "None"),
        (i[(i.PublishBlocked = 1)] = "PublishBlocked"),
        (i[(i.RemovedFromMarketplace = 2)] = "RemovedFromMarketplace"),
        (i[(i.RemovedFromPublic = 3)] = "RemovedFromPublic"),
        (i[(i.RemovedFromPrivate = 4)] = "RemovedFromPrivate"),
        (i[(i.Recategorized = 5)] = "Recategorized"),
        ((o = f || (f = {}))[(o.BrandName = 0)] = "BrandName"),
        (o[(o.WrongCategory = 1)] = "WrongCategory"),
        (o[(o.Other = 2)] = "Other"),
        ((a = h || (h = {}))[(a.Initial = 0)] = "Initial"),
        (a[(a.AppealForm = 1)] = "AppealForm"),
        (a[(a.SubmittedConfirmation = 2)] = "SubmittedConfirmation");
      var K = n(63866),
        Y = n(4748),
        J = n(7144),
        Q = n(1890),
        X = n(19954),
        $ = n(73582),
        ee = n(88654),
        et = n(83380),
        en = n(28818),
        er = n(51533),
        ei = n(69101),
        eo = n(13135),
        ea = n(19841),
        es = n(61888),
        el = n(10721),
        ec = n.n(el),
        eu = n(70671),
        ed = n(80459),
        ep = n(11591),
        em = n(91559),
        ef = n(5063),
        eh = n(32004),
        eg = n(1703),
        ev = n(998),
        ex = n(40103);
      function eb(e) {
        var t = e.content,
          n = e.button,
          r = e.onClick;
        return (0, R.jsxs)("div", {
          className:
            "flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",
          onClick: r,
          children: [
            (0, R.jsx)("div", { className: "h-9 grow px-3 py-2", children: t }),
            (0, R.jsx)("div", { className: "w-px bg-token-border-medium" }),
            n,
          ],
        });
      }
      var ey = n(94968);
      function ej(e) {
        var t = e.onSelectExample,
          n = (0, eu.Z)(),
          r = (0, L.useRef)(null);
        return (0, R.jsxs)("select", {
          onChange: function (e) {
            "label" !== e.target.value &&
              (t(eP[parseInt(e.target.value)].spec),
              (r.current.value = "label"));
          },
          className:
            "h-8 rounded-lg border border-token-border-medium bg-transparent px-2 py-0 text-sm",
          ref: r,
          children: [
            (0, R.jsx)("option", {
              value: "label",
              children: n.formatMessage(ew.examples),
            }),
            eP.map(function (e, t) {
              return (0, R.jsx)(
                "option",
                { value: t, children: n.formatMessage(e.displayName) },
                t
              );
            }),
          ],
        });
      }
      var ew = (0, ey.vU)({
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
        eP = [
          {
            displayName: ew.weatherExampleTitle,
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
            displayName: ew.petStoreExampleTitle,
            spec: '# Taken from https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml\n\nopenapi: "3.0.0"\ninfo:\n  version: 1.0.0\n  title: Swagger Petstore\n  license:\n    name: MIT\nservers:\n  - url: https://petstore.swagger.io/v1\npaths:\n  /pets:\n    get:\n      summary: List all pets\n      operationId: listPets\n      tags:\n        - pets\n      parameters:\n        - name: limit\n          in: query\n          description: How many items to return at one time (max 100)\n          required: false\n          schema:\n            type: integer\n            maximum: 100\n            format: int32\n      responses:\n        \'200\':\n          description: A paged array of pets\n          headers:\n            x-next:\n              description: A link to the next page of responses\n              schema:\n                type: string\n          content:\n            application/json:    \n              schema:\n                $ref: "#/components/schemas/Pets"\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\n    post:\n      summary: Create a pet\n      operationId: createPets\n      tags:\n        - pets\n      responses:\n        \'201\':\n          description: Null response\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\n  /pets/{petId}:\n    get:\n      summary: Info for a specific pet\n      operationId: showPetById\n      tags:\n        - pets\n      parameters:\n        - name: petId\n          in: path\n          required: true\n          description: The id of the pet to retrieve\n          schema:\n            type: string\n      responses:\n        \'200\':\n          description: Expected response to a valid request\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Pet"\n        default:\n          description: unexpected error\n          content:\n            application/json:\n              schema:\n                $ref: "#/components/schemas/Error"\ncomponents:\n  schemas:\n    Pet:\n      type: object\n      required:\n        - id\n        - name\n      properties:\n        id:\n          type: integer\n          format: int64\n        name:\n          type: string\n        tag:\n          type: string\n    Pets:\n      type: array\n      maxItems: 100\n      items:\n        $ref: "#/components/schemas/Pet"\n    Error:\n      type: object\n      required:\n        - code\n        - message\n      properties:\n        code:\n          type: integer\n          format: int32\n        message:\n          type: string',
          },
          {
            displayName: ew.blankExampleTitle,
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
        ek = n(73558),
        eT = n(90166),
        eN = n(25736),
        ez = n(99715),
        eO = n(76483),
        eC = n(1454),
        eI = n(68919),
        e_ = n(41845),
        eG = n(60624),
        eM = n(49685),
        eS = n(7525),
        eA = n(31609),
        eE = n(55161),
        eZ = n(79505),
        eD = n(49668);
      function eL(e, t) {
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
      function eU(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eL(Object(n), !0).forEach(function (t) {
                (0, O.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eL(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function eR() {
        return (0, R.jsx)("div", {
          className:
            "relative flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-black border-token-border-medium",
          children: (0, R.jsx)(K.Z, { className: "h-1/4 w-1/4" }),
        });
      }
      function eB(e) {
        var t = e.gizmoEditorData,
          n = e.onFileChange,
          r = e.generateProfilePic,
          i = e.isGeneratingProfilePic,
          o = e.setIsGeneratingProfilePic,
          a = (0, eu.Z)(),
          s = (0, L.useState)(void 0),
          l = s[0],
          c = s[1],
          u = (0, L.useRef)(n);
        function d() {
          return (d = (0, N.Z)(
            I().mark(function e(t) {
              var n, r;
              return I().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(t.length > 0)) {
                        e.next = 9;
                        break;
                      }
                      return o(!1), (e.next = 4), (0, eE.WI)(t[0], 512);
                    case 4:
                      (n = e.sent),
                        c({
                          tempId: (r = (0, eA.W7)(n)),
                          file: n,
                          status: eS.X.Uploading,
                          progress: 1,
                          fileId: null,
                          cdnUrl: null,
                        }),
                        u.current("uploading"),
                        (0, eA.lU)(r, n, a, _.Ei.ProfilePicture, {
                          onFileCreated: function (e, t, n) {
                            c(function (r) {
                              return "initial" !== r &&
                                (null == r ? void 0 : r.tempId) === e &&
                                r.status === eS.X.Uploading
                                ? eU(
                                    eU({}, r),
                                    {},
                                    { progress: 10, fileId: t, cdnUrl: n }
                                  )
                                : r;
                            });
                          },
                          onFileUploadProgress: function (e, t) {
                            c(function (n) {
                              return "initial" !== n &&
                                (null == n ? void 0 : n.tempId) === e &&
                                n.status === eS.X.Uploading
                                ? eU(eU({}, n), {}, { progress: t })
                                : n;
                            });
                          },
                          onFileUploaded: function (e, t) {
                            c(function (n) {
                              return "initial" !== n &&
                                (null == n ? void 0 : n.tempId) === e
                                ? (u.current(n),
                                  eU(
                                    eU({}, n),
                                    {},
                                    {
                                      status: eS.X.Ready,
                                      progress: 100,
                                      fileSpec: eU(
                                        {
                                          name: n.file.name,
                                          id: n.fileId,
                                          size: n.file.size,
                                        },
                                        null != t ? t : {}
                                      ),
                                    }
                                  ))
                                : n;
                            });
                          },
                          onError: function (e) {
                            c(function (t) {
                              if (
                                "initial" !== t &&
                                (null == t ? void 0 : t.tempId) === e
                              ) {
                                u.current(void 0);
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
        (0, L.useEffect)(function () {
          u.current = n;
        });
        var p = (0, eO.uI)(
            eU(
              {
                disabled: !1,
                noClick: !0,
                onDropAccepted: function (e) {
                  return d.apply(this, arguments);
                },
                onDropRejected: function (e) {
                  return (0, eG.UJ)(e, a, eS.A.ProfilePicture);
                },
                multiple: !0,
                maxSize: e_.xC,
              },
              (0, eE.Z8)(eE.KL)
            )
          ),
          m = p.open,
          f = p.getInputProps;
        return (0, R.jsxs)("div", {
          className: "flex w-full items-center justify-center gap-4",
          children: [
            (0, R.jsxs)(ez.fC, {
              children: [
                (0, R.jsx)(ez.xz, {
                  className: "h-20 w-20",
                  children: i
                    ? (0, R.jsx)(eR, {})
                    : null != l && "initial" != l && l.status != eS.X.Ready
                      ? (0, R.jsxs)("div", {
                          className:
                            "relative h-full w-full overflow-hidden rounded-full",
                          children: [
                            (0, R.jsx)(eM.l, { file: l.file }),
                            l.status === eS.X.Uploading && l.progress < 90
                              ? (0, R.jsx)("div", {
                                  className:
                                    "absolute inset-0 flex items-center justify-center bg-black/5 text-white",
                                  children: (0, R.jsx)(eI.Z, {
                                    percentage: l.progress,
                                    className: "h-6 w-6",
                                  }),
                                })
                              : null,
                          ],
                        })
                      : (null == t ? void 0 : t.profilePictureUrl) != null &&
                          (null == t ? void 0 : t.profilePictureUrl) !== ""
                        ? (0, R.jsx)(eZ.Z, {
                            isFirstParty: !1,
                            src: t.profilePictureUrl,
                          })
                        : (0, R.jsx)("div", {
                            className:
                              "flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-black border-token-border-medium",
                            children: (0, R.jsx)(eC.OvN, {
                              className: "text-4xl",
                            }),
                          }),
                }),
                (0, R.jsx)(ez.Uv, {
                  children: (0, R.jsxs)(ez.VY, {
                    className:
                      "flex min-w-[100px] max-w-xs flex-col rounded-xl border border-gray-400 bg-token-surface-primary shadow-lg dark:border-gray-700",
                    sideOffset: 7,
                    children: [
                      (0, R.jsx)(eD.UA, {
                        onClick: m,
                        children: "Upload Photo",
                      }),
                      (0, R.jsx)(eD.UA, {
                        onClick: r,
                        children: "Use DALL\xb7E",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, R.jsx)("input", eU({}, f())),
          ],
        });
      }
      var eF = n(46514),
        eV = n(32062),
        eq = n(70737),
        eW = n(97296),
        eH = n(7137),
        eK = n(3125),
        eY = n(25349),
        eJ = n(99893);
      function eQ(e, t) {
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
      function eX(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eQ(Object(n), !0).forEach(function (t) {
                (0, O.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eQ(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function e$(e) {
        var t,
          n,
          r = e.gizmoEditorData,
          i = e.requireGizmoId,
          o = e.currentModelConfig,
          a = e.updateGizmo,
          s = (0, eu.Z)(),
          l = (0, L.useState)(0),
          c = (l[0], l[1]),
          u = (0, L.useRef)(new Map()),
          d = (0, eE.Zp)(o, void 0),
          p =
            ((t = (0, N.Z)(
              I().mark(function e(t) {
                var n;
                return I().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          eY.A.logEvent(eJ.M.uploadFile, {
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
                              var t = (0, eA.W7)(e);
                              u.current.set(t, {
                                tempId: t,
                                gizmoId: n,
                                file: e,
                                status: eS.X.Uploading,
                                progress: 1,
                                fileId: null,
                                cdnUrl: null,
                              }),
                                (0, eA.cT)(
                                  (0, eA.W7)(e),
                                  e,
                                  s,
                                  { kind: _.Ei.Gizmo, gizmoId: n },
                                  {
                                    onFileUploaded: function (e, t, n) {
                                      var r = u.current.get(e);
                                      null != r &&
                                        null != r.fileId &&
                                        (a(function (e) {
                                          var t;
                                          return eX(
                                            eX({}, e),
                                            {},
                                            {
                                              files: [].concat(
                                                (0, z.Z)(
                                                  null !== (t = e.files) &&
                                                  void 0 !== t
                                                    ? t
                                                    : []
                                                ),
                                                [
                                                  {
                                                    file_id: r.fileId,
                                                    name: r.file.name,
                                                    size: r.file.size,
                                                    type: r.file.type,
                                                    last_modified:
                                                      r.file.lastModified,
                                                    file_size_tokens:
                                                      null == n
                                                        ? void 0
                                                        : n.fileTokenSize,
                                                  },
                                                ]
                                              ),
                                            }
                                          );
                                        }),
                                        u.current.delete(e),
                                        c(function (e) {
                                          return e + 1;
                                        }));
                                    },
                                    onFileCreated: function (t, r, i) {
                                      u.current.set(
                                        t,
                                        eX(
                                          eX(
                                            {
                                              tempId: t,
                                              gizmoId: n,
                                              file: e,
                                              status: eS.X.Uploading,
                                              progress: 1,
                                            },
                                            u.current.get(t)
                                          ),
                                          {},
                                          { fileId: r, cdnUrl: i }
                                        )
                                      ),
                                        c(function (e) {
                                          return e + 1;
                                        });
                                    },
                                    onFileUploadProgress: function (e, t) {
                                      var n = u.current.get(e);
                                      (null == n ? void 0 : n.status) ===
                                        eS.X.Uploading &&
                                        u.current.set(
                                          e,
                                          eX(eX({}, n), {}, { progress: t })
                                        ),
                                        c(function (e) {
                                          return e + 1;
                                        });
                                    },
                                    onError: function (e) {
                                      u.current.delete(e);
                                    },
                                  },
                                  {
                                    usesRetrievalIndex:
                                      null != o &&
                                      (0, eE._0)(o, e.type, e.name) ===
                                        _.Cd.Retrieval,
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
          m = (0, eO.uI)(
            eX(
              {
                disabled: !1,
                noClick: !0,
                onDropAccepted: p,
                multiple: !0,
                maxSize: e_.xC,
                maxFiles: 10,
              },
              (0, eE.Z8)(d)
            )
          ),
          f = m.getInputProps,
          h = m.open,
          g =
            null !== (n = null == r ? void 0 : r.files) && void 0 !== n
              ? n
              : [];
        function v(e) {
          return (0, R.jsx)(
            eM.Z,
            {
              onRemoveFileClick: function () {
                u.current.delete(e.tempId),
                  c(function (e) {
                    return e + 1;
                  });
              },
              file: e.file,
              loadingPercentage:
                e.status === eS.X.Uploading ? e.progress : void 0,
            },
            e.tempId
          );
        }
        function x(e) {
          return (0, R.jsx)(
            eM.Z,
            {
              file: e.name,
              fileId: e.file_id,
              onRemoveFileClick: function () {
                return a(function (t) {
                  var n;
                  return eX(
                    eX({}, t),
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
        var b = Array.from(u.current.values()).filter(function (e) {
            return g.every(function (t) {
              return t.file_id !== e.fileId;
            });
          }),
          y = (0, es.partition)(b, function (e) {
            return (
              null != o &&
              (0, eE._0)(o, e.file.type, e.file.name) === _.Cd.CodeInterpreter
            );
          }),
          j = (0, eK.Z)(y, 2),
          w = j[0],
          P = j[1],
          k = (0, es.partition)(g, function (e) {
            return (
              null != o &&
              null != e.type &&
              (0, eE._0)(o, e.type, e.name) === _.Cd.CodeInterpreter
            );
          }),
          T = (0, eK.Z)(k, 2),
          O = T[0],
          C = T[1],
          G = (0, L.useRef)(O.length);
        return (
          (0, L.useEffect)(
            function () {
              O.length > G.current &&
                a(function (e) {
                  var t, n;
                  return null !== (t = e.tools) &&
                    void 0 !== t &&
                    t.some(function (e) {
                      return e.type === _.qK.PYTHON;
                    })
                    ? e
                    : eX(
                        eX({}, e),
                        {},
                        {
                          tools: [].concat(
                            (0, z.Z)(
                              null !== (n = e.tools) && void 0 !== n ? n : []
                            ),
                            [{ type: _.qK.PYTHON }]
                          ),
                        }
                      );
                }),
                (G.current = O.length);
            },
            [O.length]
          ),
          (0, R.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
              (0, R.jsx)("div", {
                className: "rounded-lg text-gray-500",
                children: (0, R.jsx)(eh.Z, eX({}, e0.knowledgeWarning)),
              }),
              P.length > 0 || C.length > 0
                ? (0, R.jsxs)("div", {
                    className: "flex flex-wrap gap-2",
                    children: [P.map(v), C.map(x)],
                  })
                : null,
              w.length > 0 || O.length > 0
                ? (0, R.jsxs)("div", {
                    children: [
                      (0, R.jsx)("div", {
                        className: "mb-2 text-xs text-gray-500",
                        children:
                          "The following files are only available for Code Interpreter:",
                      }),
                      (0, R.jsxs)("div", {
                        className: "flex flex-wrap gap-2",
                        children: [w.map(v), O.map(x)],
                      }),
                    ],
                  })
                : null,
              (0, R.jsx)("div", {
                children: (0, R.jsxs)(eD.cY, {
                  onClick: h,
                  children: [(0, R.jsx)("input", eX({}, f())), "Upload files"],
                }),
              }),
            ],
          })
        );
      }
      var e0 = (0, ey.vU)({
        knowledgeWarning: {
          id: "gizmo.knowledgeWarning",
          defaultMessage:
            "If you upload files under Knowledge, conversations with your GPT may include file contents. Files can be downloaded when Code Interpreter is enabled",
        },
      });
      function e1(e) {
        var t = e.placeholder,
          n = e.text,
          r = e.onChange,
          i = e.onClose;
        return (0, R.jsx)(A.Z, {
          className: "!max-h-[100vh] !max-w-[80vw]",
          type: "success",
          isOpen: !0,
          onClose: i,
          primaryButton: (0, R.jsx)(eD.cY, { onClick: i, children: "Close" }),
          children: (0, R.jsx)("textarea", {
            className:
              "h-[70vh] w-full resize-none rounded-lg dark:border-gray-700 dark:bg-gray-800",
            value: n,
            onChange: function (e) {
              r(e.target.value);
            },
            placeholder: t,
          }),
        });
      }
      function e2(e, t) {
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
      function e3(e) {
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
          l = (0, R.jsx)(eD.f8, {
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
                : i([].concat((0, z.Z)(r), [{ type: n }]));
            },
          });
        return null != a
          ? (0, R.jsx)("div", {
              className: "opacity-70",
              children: (0, R.jsx)(eT.u, {
                side: "top",
                label: a,
                children: l,
              }),
            })
          : l;
      }
      function e4(e) {
        var t = e.enabledTools,
          n = e.onEnabledToolsChange,
          r = (0, G.C)(Q.L0.BrowseAvailable),
          i = (0, D.sB)(D.tz.GizmoMemory).value,
          o = (0, eu.Z)();
        return (0, R.jsxs)("div", {
          className: "flex flex-col items-start gap-2",
          children: [
            (0, R.jsx)(e3, {
              label: "Web Browsing",
              toolType: _.qK.BROWSER,
              enabledTools: t,
              onEnabledToolsChange: n,
              disabled: !r,
              disabledTooltip: r
                ? void 0
                : (0, R.jsx)(
                    eh.Z,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? e2(Object(n), !0).forEach(function (t) {
                              (0, O.Z)(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : e2(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                      }
                      return e;
                    })({}, e5.disabledBrowsingToolTip)
                  ),
            }),
            (0, R.jsx)(e3, {
              label: "DALL\xb7E Image Generation",
              toolType: _.qK.DALLE,
              enabledTools: t,
              onEnabledToolsChange: n,
            }),
            (0, R.jsx)(e3, {
              label: (0, R.jsxs)("div", {
                className: "flex items-center",
                children: [
                  "Code Interpreter",
                  (0, R.jsx)(tc, {
                    description: o.formatMessage(e5.codeInterpreterTooltip),
                  }),
                ],
              }),
              toolType: _.qK.PYTHON,
              enabledTools: t,
              onEnabledToolsChange: n,
            }),
            i &&
              (0, R.jsx)(e3, {
                label: (0, R.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    "Memory",
                    (0, R.jsx)(tc, {
                      description: o.formatMessage(e5.memoryTooltip),
                    }),
                  ],
                }),
                toolType: _.qK.MEMORY,
                enabledTools: t,
                onEnabledToolsChange: n,
              }),
          ],
        });
      }
      var e5 = (0, ey.vU)({
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
        e8 = n(67311);
      function e9(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function e6(e, t) {
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
      function e7(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e6(Object(n), !0).forEach(function (t) {
                (0, O.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : e6(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function te(e) {
        switch (e) {
          case g.Loading:
            return "Loading";
          case g.UploadingProfilePic:
            return "Uploading profile picture";
          case g.GeneratingProfilePic:
            return "Generating profile picture";
          case g.GizmoNameTooLong:
            return "GPT name too long";
          case g.GizmoDescriptionTooLong:
            return "GPT description too long";
          case g.GizmoWelcomeMessageTooLong:
            return "GPT welcome message too long";
          case g.GizmoInstructionsTooLong:
            return "GPT instructions too long";
          case g.NameEmpty:
            return "GPT name cannot be empty";
          case g.MissingPublicActionPrivacyPolicyURL:
            return "Public actions require valid privacy policy URLs";
          case g.MissingCategory:
            return "Public GPTs must have a category";
          default:
            return (0, e8.Z)(e), "";
        }
      }
      function tt(e, t, n) {
        var r = e.name.length > eN.aI,
          i =
            (null !==
              (l =
                null === (c = e.description) || void 0 === c
                  ? void 0
                  : c.length) && void 0 !== l
              ? l
              : 0) > eN.P_,
          o =
            (null !==
              (u =
                null === (d = e.welcomeMessage) || void 0 === d
                  ? void 0
                  : d.length) && void 0 !== u
              ? u
              : 0) > eN.Lu,
          a =
            (null !==
              (p =
                null === (m = e.instructions) || void 0 === m
                  ? void 0
                  : m.length) && void 0 !== p
              ? p
              : 0) > eN.vi,
          s = [];
        if (
          ((null == e ? void 0 : e.name) === "" && s.push(g.NameEmpty),
          r && s.push(g.GizmoNameTooLong),
          i && s.push(g.GizmoDescriptionTooLong),
          a && s.push(g.GizmoInstructionsTooLong),
          o && s.push(g.GizmoWelcomeMessageTooLong),
          null != t && [Z.Zz.Link, Z.Zz.Marketplace].includes(t))
        ) {
          var l,
            c,
            u,
            d,
            p,
            m,
            f,
            h,
            v = (function (e, t) {
              var n =
                ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
              if (!n) {
                if (
                  Array.isArray(e) ||
                  (n = (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return e9(e, t);
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
                        return e9(e, t);
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
              null === (f = e.tools) || void 0 === f
                ? void 0
                : f.filter(function (e) {
                    return e.type === _.qK.JIT_PLUGIN;
                  })
            );
          try {
            for (v.s(); !(h = v.n()).done; ) {
              var x,
                b = h.value,
                y =
                  null === (x = b.metadata) || void 0 === x
                    ? void 0
                    : x.privacy_policy_url;
              if (
                null == y ||
                !(function (e) {
                  try {
                    return new URL(e), !0;
                  } catch (e) {
                    return !1;
                  }
                })(y)
              ) {
                s.push(g.MissingPublicActionPrivacyPolicyURL);
                break;
              }
            }
          } catch (e) {
            v.e(e);
          } finally {
            v.f();
          }
        }
        return (
          t === Z.Zz.Marketplace && null == n && s.push(g.MissingCategory), s
        );
      }
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
                (0, O.Z)(e, t, n[t]);
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
      ((s = g || (g = {}))[(s.Loading = 0)] = "Loading"),
        (s[(s.UploadingProfilePic = 1)] = "UploadingProfilePic"),
        (s[(s.GeneratingProfilePic = 2)] = "GeneratingProfilePic"),
        (s[(s.GizmoNameTooLong = 3)] = "GizmoNameTooLong"),
        (s[(s.GizmoDescriptionTooLong = 4)] = "GizmoDescriptionTooLong"),
        (s[(s.GizmoWelcomeMessageTooLong = 5)] = "GizmoWelcomeMessageTooLong"),
        (s[(s.GizmoInstructionsTooLong = 6)] = "GizmoInstructionsTooLong"),
        (s[(s.NameEmpty = 7)] = "NameEmpty"),
        (s[(s.MissingPublicActionPrivacyPolicyURL = 8)] =
          "MissingPublicActionPrivacyPolicyURL"),
        (s[(s.MissingCategory = 9)] = "MissingCategory");
      var ti = U.Z.input(
          v ||
            (v = (0, M.Z)([
              "w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 border focus:ring-blue-400 border-token-border-medium dark:bg-gray-700 h-9 dark:bg-gray-800",
            ]))
        ),
        to = U.Z.div(x || (x = (0, M.Z)(["text-sm text-red-500"]))),
        ta = U.Z.div(b || (b = (0, M.Z)(["mb-6"]))),
        ts = U.Z.textarea(
          y ||
            (y = (0, M.Z)([
              "w-full text-sm overflow-y-auto rounded-lg border bg-transparent px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium dark:bg-gray-800 bg-white h-32",
            ]))
        );
      function tl() {
        return (0, R.jsx)("div", {
          className:
            "ml-2 flex h-3.5 w-3.5 cursor-default items-center justify-center rounded-full border border-token-border-medium text-[0.5rem] font-medium leading-none text-gray-500 ",
          children: "?",
        });
      }
      function tc(e) {
        var t = e.description;
        return (0, R.jsx)(eT.u, {
          wide: !0,
          label: t,
          delayDuration: 0,
          children: (0, R.jsx)(tl, {}),
        });
      }
      function tu(e) {
        var t = e.label,
          n = e.description,
          r = e.collapsed,
          i = e.onClick,
          o = (0, R.jsx)("label", {
            className: "block font-medium text-token-text-primary",
            children: t,
          });
        return (0, R.jsxs)("div", {
          className: "mb-1.5 flex items-center",
          onClick: i,
          children: [
            void 0 !== r &&
              (r ? (0, R.jsx)(eH.H_v, {}) : (0, R.jsx)(eH.iUH, {})),
            n
              ? (0, R.jsx)(eT.u, {
                  label: n,
                  sideOffset: 4,
                  side: "top",
                  delayDuration: 0,
                  children: o,
                })
              : (0, R.jsx)(R.Fragment, { children: o }),
          ],
        });
      }
      function td(e) {
        var t = e.children,
          n = e.collapsed,
          r = e.initial;
        return (0, R.jsx)(eq.M, {
          initial: r,
          children:
            !n &&
            (0, R.jsx)(eW.E.div, {
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
      function tp(e) {
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
        return (0, R.jsxs)("div", {
          className:
            "flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",
          onClick: r,
          children: [
            (0, R.jsx)("div", {
              className: "h-9 grow px-3 py-2",
              children:
                null != o
                  ? o
                  : (0, R.jsx)("span", {
                      className: "text-red-500",
                      children: "Invalid action",
                    }),
            }),
            (0, R.jsx)("div", { className: "w-px bg-token-border-medium" }),
            (0, R.jsx)("button", {
              disabled: i,
              className:
                "flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none",
              children: (0, R.jsx)(ef.RR, { className: "icon-sm" }),
            }),
          ],
        });
      }
      function tm(e) {
        var t,
          n,
          r,
          i = e.gizmo,
          o = e.onShowActionsEditor,
          a = e.isDisabled,
          s = (0, eu.Z)(),
          l = (0, R.jsxs)("div", {
            className: "space-y-1",
            children: [
              null == i
                ? void 0
                : null === (t = i.tools) || void 0 === t
                  ? void 0
                  : t.map(function (e, t) {
                      var n;
                      return e.type !== _.qK.JIT_PLUGIN
                        ? null
                        : (0, R.jsxs)(
                            "div",
                            {
                              children: [
                                (0, R.jsx)(tp, {
                                  isDisabled: a,
                                  actionTool: e,
                                  onShowActionsEditor: function () {
                                    return o(e.metadata.domain);
                                  },
                                }),
                                (null === (n = e.metadata.auth) || void 0 === n
                                  ? void 0
                                  : n.type) === "oauth" &&
                                  (0, R.jsx)(ek.Z, {
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
                                      Y.m.success("Copied to clipboard", {
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
                          return e.type === _.qK.JIT_PLUGIN;
                        })) && void 0 !== n
                ? n
                : []
              ).length >= eN.L5
                ? (0, R.jsx)("div", {
                    children: s.formatMessage(th.maxActionsReached, {
                      number: eN.L5,
                    }),
                  })
                : (0, R.jsx)(eD.cY, {
                    disabled: a,
                    onClick: function () {
                      o("Unknown domain");
                    },
                    className: "mt-2",
                    children: (0, R.jsx)(eh.Z, tr({}, th.createActionLabel)),
                  }),
            ],
          });
        return a
          ? (0, R.jsx)(eT.u, {
              side: "top",
              label: s.formatMessage(th.disabledCustomActionsTooltip),
              children: l,
            })
          : l;
      }
      function tf(e) {
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
          d = e.gizmoEditorData,
          p = e.updateGizmo,
          m = e.generateProfilePic,
          f = e.setIsUploadingProfilePic,
          h = e.isGeneratingProfilePic,
          v = e.setIsGeneratingProfilePic,
          x = e.requireGizmoId,
          b = e.onShowActionsEditor,
          y = (0, eF.B9)(),
          j = eF.mx,
          w =
            null !== (o = null == d ? void 0 : d.tools) && void 0 !== o
              ? o
              : [],
          P = j ? y[j] : void 0,
          k = (0, L.useState)(!1),
          T = k[0],
          O = k[1],
          C = (0, L.useState)(!1),
          M = C[0],
          S = C[1],
          A = (0, L.useState)(!0),
          E = A[0],
          Z = A[1],
          D =
            null !== (a = null == d ? void 0 : d.promptStarters) && void 0 !== a
              ? a
              : [],
          U = [].concat((0, z.Z)(D), (0, z.Z)(D.length < 12 ? [""] : [])),
          B = tt(d),
          F = (0, $.ec)($.F_.isBusinessWorkspace),
          V = (0, G.C)(Q.L0.WorkspaceGPTCustomActions),
          q = (0, eu.Z)();
        return (0, R.jsxs)("div", {
          className:
            "flex h-full grow flex-col overflow-y-auto px-2 pt-6 text-sm",
          children: [
            (0, R.jsxs)("div", {
              className: "grow",
              children: [
                (0, R.jsxs)(ta, {
                  children: [
                    (0, R.jsx)(eB, {
                      gizmoEditorData: d,
                      generateProfilePic: m,
                      isGeneratingProfilePic: h,
                      setIsGeneratingProfilePic: v,
                      onFileChange:
                        ((t = (0, N.Z)(
                          I().mark(function e(t) {
                            var n;
                            return I().wrap(function (e) {
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
                                      eV.ZP.getFileDownloadLink(t.fileId)
                                    );
                                  case 3:
                                    (n = e.sent).status === _.KF.Success &&
                                      p({
                                        profilePictureId:
                                          null != t.fileId ? t.fileId : void 0,
                                        profilePictureUrl: n.download_url,
                                      }),
                                      (e.next = 8);
                                    break;
                                  case 7:
                                    p({
                                      profilePictureId: void 0,
                                      profilePictureUrl: void 0,
                                    });
                                  case 8:
                                    f("uploading" === t);
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
                    (0, R.jsx)(tu, {
                      label: "Name",
                      description: "The name of your GPT",
                    }),
                    (0, R.jsx)(ti, {
                      type: "text",
                      placeholder: "Name your GPT",
                      value:
                        null !== (s = null == d ? void 0 : d.name) &&
                        void 0 !== s
                          ? s
                          : "",
                      onChange: function (e) {
                        p({ name: e.target.value });
                      },
                      onBlurCapture: function () {
                        return p(function (e) {
                          return tr(tr({}, e), {}, { name: e.name.trim() });
                        });
                      },
                    }),
                    B.includes(g.GizmoNameTooLong)
                      ? (0, R.jsx)(to, {
                          className: "mt-1",
                          children: (0, R.jsx)(
                            eh.Z,
                            tr(
                              tr({}, th.nameTooLong),
                              {},
                              { values: { length: eN.aI } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, R.jsxs)(ta, {
                  className: "mt-4",
                  children: [
                    (0, R.jsx)(tu, {
                      label: "Description",
                      description: "Short description of what this GPT does",
                    }),
                    (0, R.jsx)(ti, {
                      type: "text",
                      placeholder:
                        "Add a short description about what this GPT does",
                      value:
                        null !== (l = null == d ? void 0 : d.description) &&
                        void 0 !== l
                          ? l
                          : "",
                      onChange: function (e) {
                        return p({ description: e.target.value });
                      },
                      onBlurCapture: function () {
                        return p(function (e) {
                          var t, n;
                          return tr(
                            tr({}, e),
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
                    B.includes(g.GizmoDescriptionTooLong)
                      ? (0, R.jsx)(to, {
                          className: "mt-1",
                          children: (0, R.jsx)(
                            eh.Z,
                            tr(
                              tr({}, th.descriptionTooLong),
                              {},
                              { values: { length: eN.P_ } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, R.jsxs)(ta, {
                  children: [
                    (0, R.jsx)(tu, {
                      label: "Instructions",
                      description:
                        "What does this GPT do? How does it behave? What should it avoid doing?",
                    }),
                    (0, R.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, R.jsx)(ts, {
                          className: "resize-none",
                          rows: 8,
                          value: null == d ? void 0 : d.instructions,
                          onChange: function (e) {
                            return p({ instructions: e.target.value });
                          },
                          onBlurCapture: function () {
                            return p(function (e) {
                              return tr(
                                tr({}, e),
                                {},
                                { instructions: e.instructions.trim() }
                              );
                            });
                          },
                          placeholder:
                            "What does this GPT do? How does it behave? What should it avoid doing?",
                        }),
                        (0, R.jsx)("button", {
                          className:
                            "absolute bottom-3 right-2 text-token-text-tertiary",
                          onClick: function () {
                            return O(!0);
                          },
                          children: (0, R.jsx)(ef.j5, { className: "icon-sm" }),
                        }),
                      ],
                    }),
                    B.includes(g.GizmoInstructionsTooLong)
                      ? (0, R.jsx)(to, {
                          className: "mt-1",
                          children: (0, R.jsx)(
                            eh.Z,
                            tr(
                              tr({}, th.instructionsTooLong),
                              {},
                              { values: { length: eN.vi } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, R.jsxs)(ta, {
                  className: "hidden",
                  children: [
                    (0, R.jsx)(tu, {
                      label: "Welcome Message",
                      description: "How this GPT starts conversations.",
                    }),
                    (0, R.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, R.jsx)(ts, {
                          className: (0, ea.default)("h-16 resize-none"),
                          value: null == d ? void 0 : d.welcomeMessage,
                          onChange: function (e) {
                            return p({ welcomeMessage: e.target.value });
                          },
                          placeholder: "How this GPT starts conversations.",
                        }),
                        (0, R.jsx)("button", {
                          className:
                            "absolute bottom-3 right-2 text-token-text-tertiary",
                          onClick: function () {
                            return S(!0);
                          },
                          children: (0, R.jsx)(ef.j5, { className: "icon-sm" }),
                        }),
                      ],
                    }),
                    B.includes(g.GizmoWelcomeMessageTooLong)
                      ? (0, R.jsx)(to, {
                          className: "mt-1",
                          children: (0, R.jsx)(
                            eh.Z,
                            tr(
                              tr({}, th.welcomeMessageTooLong),
                              {},
                              { values: { length: eN.Lu } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, R.jsxs)(ta, {
                  children: [
                    (0, R.jsx)(tu, {
                      label: "Conversation starters",
                      description:
                        "Examples for the user to start the conversation",
                    }),
                    (0, R.jsx)("div", {
                      className: "flex flex-col gap-1",
                      children: U.map(function (e, t) {
                        return (0, R.jsxs)(
                          "div",
                          {
                            className: "flex items-center",
                            children: [
                              (0, R.jsx)(ti, {
                                className: "rounded-r-none",
                                value: e,
                                type: "text",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  p(function (e) {
                                    var r;
                                    return tr(
                                      tr({}, e),
                                      {},
                                      {
                                        promptStarters: (0, es.compact)(
                                          t >=
                                          (null !== (r = D.length) &&
                                          void 0 !== r
                                            ? r
                                            : 0)
                                            ? [].concat(
                                                (0, z.Z)(null != D ? D : []),
                                                [n]
                                              )
                                            : D.map(function (e, r) {
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
                              (0, R.jsx)("button", {
                                className:
                                  "flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none border border-l-0 border-token-border-medium",
                                onClick: function () {
                                  return p(function (e) {
                                    return tr(
                                      tr({}, e),
                                      {},
                                      {
                                        promptStarters: D.filter(function (
                                          e,
                                          n
                                        ) {
                                          return n !== t;
                                        }),
                                      }
                                    );
                                  });
                                },
                                children: (0, R.jsx)(ef.v7, {
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
                (0, R.jsxs)(ta, {
                  children: [
                    (0, R.jsx)(tu, {
                      label: "Knowledge",
                      description: q.formatMessage(th.knowledgeExplanation),
                    }),
                    (0, R.jsx)(e$, {
                      gizmoEditorData: d,
                      requireGizmoId: x,
                      currentModelConfig: P,
                      updateGizmo: p,
                    }),
                  ],
                }),
                (0, R.jsxs)(ta, {
                  children: [
                    (0, R.jsx)(tu, {
                      label: "Capabilities",
                      description: "Functionality this GPT can use",
                    }),
                    (0, R.jsx)(e4, {
                      enabledTools: w,
                      onEnabledToolsChange: function (e) {
                        return p({ tools: e });
                      },
                    }),
                  ],
                }),
                (0, R.jsxs)(ta, {
                  children: [
                    (0, R.jsx)(tu, {
                      label: "Actions",
                      description: "APIs this GPT can use",
                    }),
                    (0, R.jsx)(tm, {
                      isDisabled: !!(F && !V),
                      gizmo: d,
                      onShowActionsEditor: b,
                    }),
                  ],
                }),
                !F &&
                  ((null !==
                    (n =
                      null === (r = d.files) || void 0 === r
                        ? void 0
                        : r.length) && void 0 !== n
                    ? n
                    : 0) > 0 ||
                    (null == d
                      ? void 0
                      : null === (i = d.tools) || void 0 === i
                        ? void 0
                        : i.some(function (e) {
                            return e.type === _.qK.JIT_PLUGIN;
                          }))) &&
                  (0, R.jsxs)(ta, {
                    children: [
                      (0, R.jsx)(tu, {
                        label: "Additional Settings",
                        collapsed: !!E,
                        onClick: function () {
                          Z(function (e) {
                            return !e;
                          });
                        },
                      }),
                      (0, R.jsx)(td, {
                        collapsed: E,
                        initial: !1,
                        children: (0, R.jsx)(eD.f8, {
                          className: "mx-3 my-1",
                          labelClassName: "w-full cursor-pointer",
                          label:
                            "Use conversation data in your GPT to improve our models",
                          id: "improve-chatgpt",
                          checked: !d.trainingDisabled,
                          onChange: function () {
                            p({ trainingDisabled: !d.trainingDisabled });
                          },
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            M &&
              (0, R.jsx)(e1, {
                text: null !== (c = d.welcomeMessage) && void 0 !== c ? c : "",
                onChange: function (e) {
                  p({ welcomeMessage: e });
                },
                onClose: function () {
                  return S(!1);
                },
                placeholder: "How this GPT starts conversations.",
              }),
            T &&
              (0, R.jsx)(e1, {
                text: null !== (u = d.instructions) && void 0 !== u ? u : "",
                onChange: function (e) {
                  p({ instructions: e });
                },
                onClose: function () {
                  return O(!1);
                },
                placeholder:
                  "What does this GPT do? How does it behave? What should it avoid doing?",
              }),
          ],
        });
      }
      var th = (0, ey.vU)({
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
        }),
        tg = n(9559),
        tv = n(85695);
      function tx(e) {
        var t = e.clientThreadId,
          n = (0, X.oq)(t),
          r = (0, X.UL)(t),
          i = (0, eF.Bv)(r.lastModelUsed, t),
          o = (0, X.U0)(t, n),
          a = (0, z.Z)(Array(o).keys()).map(function (e) {
            return (0, R.jsx)(
              tv.Z,
              {
                isFinalTurn: e === o - 1,
                turnIndex: e,
                clientThreadId: t,
                conversationLeafId: n,
                onChangeItemInView: es.noop,
                onChangeRating: es.noop,
                onRequestMoreCompletions: es.noop,
                onRequestCompletion: es.noop,
                currentModelId: null != i ? i : "",
              },
              e
            );
          });
        return (0, R.jsx)(R.Fragment, { children: a });
      }
      function tb(e) {
        var t = e.clientThreadIds;
        return (0, R.jsx)(R.Fragment, {
          children: t.map(function (e) {
            return (0, R.jsx)(tx, { clientThreadId: e }, e);
          }),
        });
      }
      var ty = n(75499),
        tj = n(99642),
        tw = n(13366),
        tP = n(18008),
        tk = n(58272),
        tT = n(99304),
        tN = n(84623),
        tz = n(8844),
        tO = n(65654),
        tC = n(90439),
        tI = n(67404);
      function t_() {
        return (0, R.jsxs)("div", {
          className: "flex items-center",
          children: [
            (0, R.jsx)("div", {
              className: "border-token-border-secondary flex-grow border-b",
            }),
            (0, R.jsxs)("div", {
              className:
                "flex flex-shrink-0 items-center gap-2 px-2 py-6 text-sm text-token-text-tertiary",
              children: [(0, R.jsx)(eC.V7f, {}), "GPT updated"],
            }),
            (0, R.jsx)("div", {
              className: "border-token-border-secondary flex-grow border-b",
            }),
          ],
        });
      }
      ((l = j || (j = {}))[(l.MAGIC = 1)] = "MAGIC"),
        (l[(l.SANDBOX = 2)] = "SANDBOX"),
        ((w || (w = {})).TestGizmoAction = "test_gizmo_action");
      var tG = new tT.V(),
        tM = L.memo(function (e) {
          var t,
            n,
            r,
            i = e.gizmoEditorData,
            o = e.isSavingDraft,
            a = e.showTitle,
            s = (0, L.useState)(function () {
              return (0, X.OX)();
            }),
            l = s[0],
            c = s[1],
            u = (0, L.useState)([]),
            d = u[0],
            p = u[1];
          (0, L.useEffect)(
            function () {
              p(function (e) {
                return e[e.length - 1] === l ? e : [].concat((0, z.Z)(e), [l]);
              });
            },
            [l]
          );
          var m = d.slice(0, -1);
          (0, X.ax)(l);
          var f = (0, X.UL)(l);
          (0, L.useEffect)(
            function () {
              null != i.id &&
                X.tQ.setNewThreadConversationModeMetadata(l, {
                  kind: ep.OL.GizmoTest,
                  gizmo_id: i.id,
                });
            },
            [l, i.id]
          );
          var h =
            null === (r = i.files) || void 0 === r
              ? void 0
              : r
                  .map(function (e) {
                    return e.file_id;
                  })
                  .join();
          (0, L.useEffect)(
            function () {
              null != X.tQ.getServerThreadId(l) && c((0, X.OX)());
            },
            [i.id, i.instructions, i.welcomeMessage, i.tools, h, l]
          ),
            (0, L.useEffect)(
              function () {
                (0, X.Zz)(l) &&
                  X.iN.hasThread(l) &&
                  f.lastModelUsed !== eF.mx &&
                  (X.tQ.getOrInitThread(l),
                  X.tQ.updateInitialThreadDataForNewThread(l, eF.mx, []));
              },
              [l, f, i]
            );
          var g = (0, tP.tN)(function (e) {
              return e.activeSidebar;
            }),
            v = (0, L.useMemo)(
              function () {
                return { gizmoEditorData: i, mode: "test" };
              },
              [i]
            ),
            x = (0, L.useState)(0),
            b = x[0],
            y = x[1],
            j = function () {
              y(function (e) {
                return e - 360;
              });
            },
            w = i.id,
            P =
              ((n = (0, tO.Z)(l, void 0, es.noop, es.noop, es.noop, [])),
              (0, L.useCallback)(
                ((t = (0, N.Z)(
                  I().mark(function e(t, r, i) {
                    var o, a, s, c, u, d;
                    return I().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((o = X.tQ.getThreadCurrentLeafId(l)),
                              (a = (0, tz.Z)()),
                              X.tQ.updateTree(l, function (e) {
                                e.addNodeToEnd(o, {
                                  id: a,
                                  children: [],
                                  parentId: o,
                                  message: {
                                    id: a,
                                    author: { role: ep.uU.User },
                                    content: {
                                      content_type: ep.PX.Text,
                                      parts: [
                                        "Call the "
                                          .concat(r, " API with the ")
                                          .concat(i, " operation"),
                                      ],
                                    },
                                    recipient: "all",
                                    metadata: {
                                      jit_plugin_data: {
                                        from_client: {
                                          user_action: {
                                            data: {
                                              type: "test",
                                              operation: i,
                                              tool_name: (0, tg.VN)(r),
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                });
                              }),
                              (s = {
                                conversationMode: {
                                  kind: ep.OL.GizmoTest,
                                  gizmo_id: t,
                                },
                              }),
                              (c = [eF.S.GPT_4]),
                              (u = (0, tN.Rr)((0, J.N$)(), c, ep.OL.GizmoTest)),
                              (d = null),
                              !u)
                            ) {
                              e.next = 11;
                              break;
                            }
                            return (e.next = 10), tN.ZP.getEnforcementToken(c);
                          case 10:
                            d = e.sent;
                          case 11:
                            n({
                              model: eF.mx,
                              completionType: ep.Os.Next,
                              parentNodeId: a,
                              metadata: {},
                              focusOnNewCompletion: !0,
                              arkoseToken: d,
                              preflightTime: 0,
                              completionMetadata: s,
                            });
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                function (e, n, r) {
                  return t.apply(this, arguments);
                }),
                [l, n]
              ));
          return (
            (0, L.useEffect)(
              function () {
                return (0, tk.LW)(tG, {
                  test_gizmo_action: function (e) {
                    var t = e.rootDomain,
                      n = e.operationName;
                    w && P(w, t, n);
                  },
                });
              },
              [P, w]
            ),
            (0, R.jsx)(tC.D.Provider, {
              value: v,
              children: (0, R.jsxs)("div", {
                className: (0, ea.default)(
                  "flex h-full w-full",
                  o && "cursor-wait opacity-80 transition"
                ),
                children: [
                  (0, R.jsxs)("div", {
                    className: "flex grow flex-col",
                    children: [
                      (0, R.jsx)("div", {
                        className: "relative mb-2 flex-shrink-0",
                        children: (0, R.jsx)("div", {
                          className: "flex justify-center py-1",
                          children:
                            (void 0 === a || a) &&
                            (0, R.jsxs)("div", {
                              className:
                                "group flex items-center gap-2 text-lg font-medium",
                              children: [
                                (0, R.jsx)("div", { className: "icon-md" }),
                                (0, R.jsxs)("button", {
                                  onClick: function () {
                                    j(), p([]), c((0, X.OX)());
                                  },
                                  className: "flex items-center gap-2",
                                  children: [
                                    "Preview",
                                    (0, R.jsx)(eW.E.div, {
                                      className: "text-token-text-primary",
                                      animate: { rotate: b },
                                      transition: { duration: 0.3 },
                                      children: (0, R.jsx)(ef.u8, {
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
                      (0, R.jsx)("div", {
                        className: (0, ea.default)(
                          "relative grow overflow-auto px-2",
                          o && "pointer-events-none"
                        ),
                        children: (0, R.jsx)(tj.Z, {
                          initialThreadData: f,
                          clientThreadId: l,
                          hideHeader: !0,
                          renderEmptyState: (0, R.jsxs)("div", {
                            className: "relative h-full w-full",
                            children: [
                              null != m &&
                                m.length > 0 &&
                                (0, R.jsx)("div", {
                                  className: "h-full w-full opacity-20",
                                  children: (0, R.jsxs)(tw.I, {
                                    children: [
                                      (0, R.jsx)(tb, { clientThreadIds: m }),
                                      (0, R.jsx)(t_, {}),
                                    ],
                                  }),
                                }),
                              (0, R.jsx)("div", {
                                className:
                                  "absolute left-0 top-0 h-full w-full",
                                children: (0, R.jsx)(tI.r, {
                                  gizmo: i,
                                  isOwner: !0,
                                  hideOwner: !0,
                                }),
                              }),
                            ],
                          }),
                          prependThreadChildren:
                            m.length > 0 &&
                            (0, R.jsxs)(R.Fragment, {
                              children: [
                                (0, R.jsx)("div", {
                                  className: "opacity-50",
                                  children: (0, R.jsx)(tb, {
                                    clientThreadIds: m,
                                  }),
                                }),
                                (0, R.jsx)(t_, {}),
                              ],
                            }),
                        }),
                      }),
                    ],
                  }),
                  "debug" === g &&
                    (0, R.jsx)(ty.fv, {
                      clientThreadId: l,
                      slideOver: !1,
                      onClose: function () {
                        return tP.vm.toggleActiveSidebar("debug");
                      },
                      isOpen: !0,
                    }),
                ],
              }),
            })
          );
        }),
        tS = ["oauth_client_id", "oauth_client_secret"],
        tA = ["api_key"];
      function tE(e, t) {
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
      function tZ(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tE(Object(n), !0).forEach(function (t) {
                (0, O.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tE(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var tD = "".concat(
        "https://chat.openai.com",
        "/g/g-TYEliDU6A-actionsgpt"
      );
      function tL(e) {
        var t = e.children;
        return (0, R.jsx)("label", {
          className: "mb-1 block text-sm font-medium",
          children: t,
        });
      }
      function tU(e) {
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
          T = (0, L.useState)({
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
                : ep.Jv.None,
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
            return tZ(tZ({}, t), e);
          });
        }
        return (0, R.jsxs)(A.Z, {
          type: "success",
          isOpen: !0,
          title: "Authentication",
          primaryButton: (0, R.jsx)(em.z, {
            color: "dark",
            onClick: function () {
              P(
                N.authTypeValue === ep.Jv.None
                  ? { type: ep.Jv.None }
                  : N.authTypeValue === ep.Jv.OAuth
                    ? {
                        type: ep.Jv.OAuth,
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
                        type: ep.Jv.ServiceHTTP,
                        authorization_type: N.httpAuthTypeValue,
                        custom_auth_header: N.customHeaderValue,
                        api_key: N.apiKeyValue,
                      }
              ),
                k();
            },
            children: "Save",
          }),
          secondaryButton: (0, R.jsx)(em.z, {
            color: "neutral",
            onClick: k,
            children: "Cancel",
          }),
          onClose: k,
          children: [
            (0, R.jsxs)("div", {
              className: "mb-4",
              children: [
                (0, R.jsx)(tL, { children: "Authentication Type" }),
                (0, R.jsxs)(ex.Z.Root, {
                  onValueChange: function (e) {
                    O({ authTypeValue: e });
                  },
                  value: N.authTypeValue,
                  className: "flex gap-4",
                  children: [
                    (0, R.jsx)(eD.Xb, { label: "None", value: ep.Jv.None }),
                    (0, R.jsx)(eD.Xb, {
                      label: "API Key",
                      value: ep.Jv.ServiceHTTP,
                    }),
                    (0, R.jsx)(eD.Xb, { label: "OAuth", value: ep.Jv.OAuth }),
                  ],
                }),
              ],
            }),
            "service_http" === N.authTypeValue
              ? (0, R.jsxs)(R.Fragment, {
                  children: [
                    (0, R.jsx)(tL, { children: "API Key" }),
                    (0, R.jsx)(ti, {
                      placeholder: "<HIDDEN>",
                      type: "password",
                      value: N.apiKeyValue,
                      onChange: function (e) {
                        O({ apiKeyValue: e.target.value });
                      },
                      className: "mb-2",
                    }),
                    (0, R.jsx)(tL, { children: "Auth Type" }),
                    (0, R.jsxs)(ex.Z.Root, {
                      className: "mb-2 flex gap-6 overflow-hidden rounded-lg",
                      value: N.httpAuthTypeValue,
                      required: !0,
                      onValueChange: function (e) {
                        O({ httpAuthTypeValue: e });
                      },
                      children: [
                        (0, R.jsx)(eD.Xb, { value: "basic", label: "Basic" }),
                        (0, R.jsx)(eD.Xb, { value: "bearer", label: "Bearer" }),
                        (0, R.jsx)(eD.Xb, { value: "custom", label: "Custom" }),
                      ],
                    }),
                    "custom" === N.httpAuthTypeValue &&
                      (0, R.jsxs)("div", {
                        className: "mt-2",
                        children: [
                          (0, R.jsx)(tL, { children: "Custom Header Name" }),
                          (0, R.jsx)(ti, {
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
                ? (0, R.jsxs)(R.Fragment, {
                    children: [
                      (0, R.jsx)(tL, { children: "Client ID" }),
                      (0, R.jsx)(ti, {
                        placeholder: "<HIDDEN>",
                        type: "password",
                        value: N.oauthClientIdValue,
                        onChange: function (e) {
                          O({ oauthClientIdValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, R.jsx)(tL, { children: "Client Secret" }),
                      (0, R.jsx)(ti, {
                        placeholder: "<HIDDEN>",
                        type: "password",
                        value: N.oauthClientSecretValue,
                        onChange: function (e) {
                          O({ oauthClientSecretValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, R.jsx)(tL, { children: "Authorization URL" }),
                      (0, R.jsx)(ti, {
                        value: N.oauthAuthUrlValue,
                        onChange: function (e) {
                          O({ oauthAuthUrlValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, R.jsx)(tL, { children: "Token URL" }),
                      (0, R.jsx)(ti, {
                        value: N.oauthTokenUrlValue,
                        onChange: function (e) {
                          O({ oauthTokenUrlValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, R.jsx)(tL, { children: "Scope" }),
                      (0, R.jsx)(ti, {
                        value: N.oauthScopeValue,
                        onChange: function (e) {
                          O({ oauthScopeValue: e.target.value });
                        },
                        className: "mb-2",
                      }),
                      (0, R.jsx)(tL, { children: "Token Exchange Method" }),
                      (0, R.jsxs)(ex.Z.Root, {
                        value: N.tokenExchangeMethodValue,
                        required: !0,
                        onValueChange: function (e) {
                          O({ tokenExchangeMethodValue: e });
                        },
                        children: [
                          (0, R.jsx)(eD.Xb, {
                            value: "default_post",
                            label: "Default (POST request)",
                          }),
                          (0, R.jsx)(eD.Xb, {
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
      function tR(e) {
        var t = e.onImport,
          n = e.onClose,
          r = (0, L.useState)(""),
          i = r[0],
          o = r[1],
          a = (0, L.useState)(!1),
          s = a[0],
          l = a[1];
        function c() {
          return (c = (0, N.Z)(
            I().mark(function e() {
              var r, o;
              return I().wrap(
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
                          E.U.fetchOpenAPISpec(i)
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
        return (0, R.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            (0, R.jsx)("input", {
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
            (0, R.jsx)(eD.cY, {
              color: "dark",
              loading: s,
              onClick: function () {
                return c.apply(this, arguments);
              },
              children: "Import",
            }),
            (0, R.jsx)(eD.cY, {
              color: "neutral",
              onClick: n,
              children: "Cancel",
            }),
          ],
        });
      }
      function tB(e) {
        var t = e.rootDomain,
          n = e.operations;
        return null == n || 0 === n.length
          ? (0, R.jsx)("div", {
              className: "text-sm text-token-text-tertiary",
              children: "Operations in your schema will show here.",
            })
          : (0, R.jsx)("table", {
              className: "w-full text-sm",
              children: (0, R.jsxs)("tbody", {
                children: [
                  (0, R.jsxs)("tr", {
                    className:
                      "border-b border-token-border-light text-left text-xs text-token-text-tertiary",
                    children: [
                      (0, R.jsx)("th", {
                        className: "py-1 font-normal",
                        children: "Name",
                      }),
                      (0, R.jsx)("th", {
                        className: "py-1 font-normal",
                        children: "Method",
                      }),
                      (0, R.jsx)("th", {
                        className: "py-1 font-normal",
                        children: "Path",
                      }),
                      (0, R.jsx)("th", { className: "py-1 font-normal" }),
                    ],
                  }),
                  n.map(function (e) {
                    return (0, R.jsxs)(
                      "tr",
                      {
                        className: "border-b border-token-border-light",
                        children: [
                          (0, R.jsx)("td", {
                            className: "py-2",
                            children: e.operationName,
                          }),
                          (0, R.jsx)("td", {
                            className: "py-2 uppercase",
                            children: e.method,
                          }),
                          (0, R.jsx)("td", {
                            className: "py-2",
                            children: e.path,
                          }),
                          (0, R.jsx)("td", {
                            className: "py-2",
                            children: (0, R.jsx)(eD.cY, {
                              color: "neutral",
                              onClick: function () {
                                t &&
                                  tG.publish({
                                    kind: w.TestGizmoAction,
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
      function tF(e) {
        var t = e.validationResponse;
        return (0, R.jsxs)("div", {
          children: [
            (0, R.jsx)(tu, { label: "Available actions" }),
            (0, R.jsx)(tB, {
              rootDomain: t.success ? t.spec.root_domain : void 0,
              operations: t.success ? t.spec.operations : void 0,
            }),
          ],
        });
      }
      function tV(e) {
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
          m = (0, L.useState)(c),
          f = m[0],
          h = m[1],
          g = (0, L.useRef)(f);
        (0, L.useEffect)(
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
                      e.type === _.qK.JIT_PLUGIN && e.metadata.domain === f
                    );
                  }),
          x = (0, L.useState)(function () {
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
          y = (0, L.useState)(!1),
          j = y[0],
          w = y[1],
          P = (0, L.useState)(!1),
          k = P[0],
          T = P[1];
        function O(e) {
          d(function (t) {
            return tZ(
              tZ({}, t),
              {},
              {
                tools: v
                  ? t.tools.map(function (t) {
                      return t.type === _.qK.JIT_PLUGIN &&
                        t.metadata.domain === f
                        ? tZ(
                            tZ({}, t),
                            {},
                            { metadata: tZ(tZ({}, t.metadata), e) }
                          )
                        : t;
                    })
                  : [].concat((0, z.Z)(t.tools), [
                      {
                        type: _.qK.JIT_PLUGIN,
                        metadata: tZ(
                          {
                            raw_spec: "",
                            domain: null != f ? f : "Unknown domain",
                            action_id: "",
                          },
                          e
                        ),
                      },
                    ]),
              }
            );
          });
        }
        var C = (0, L.useState)(),
          G = C[0],
          M = C[1],
          S = (0, L.useState)(function () {
            var e;
            return (0, es.debounce)(
              ((e = (0, N.Z)(
                I().mark(function e(t) {
                  var n, r, i, o;
                  return I().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), E.U.validateOpenAPISpec(t);
                        case 2:
                          if (
                            (M((n = e.sent)),
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
                                      e.type === _.qK.JIT_PLUGIN &&
                                      e.metadata.domain === r
                                    );
                                  }))
                          ) {
                            e.next = 11;
                            break;
                          }
                          return (
                            M({
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
                            return tZ(
                              tZ({}, e),
                              {},
                              {
                                tools: e.tools.map(function (e) {
                                  return e.type === _.qK.JIT_PLUGIN &&
                                    e.metadata.domain === g.current
                                    ? tZ(
                                        tZ({}, e),
                                        {},
                                        {
                                          metadata: tZ(
                                            tZ({}, e.metadata),
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
                            ((o = tZ({ type: ep.Jv.OAuth }, n.known_auth)),
                            (0, es.isEqual)(v.metadata.auth, o) ||
                              O({
                                auth: tZ({ type: ep.Jv.OAuth }, n.known_auth),
                              }),
                            v.metadata.privacy_policy_url !==
                              n.known_privacy_policy &&
                              O({
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
          A = null != G ? (G.success ? G.warnings : G.errors) : void 0;
        (0, L.useEffect)(
          function () {
            "" === b ? (M(void 0), S.cancel()) : S(b);
          },
          [S, b]
        );
        var Z = function (e) {
          try {
            O({ raw_spec: JSON.stringify(JSON.parse(e), null, 2) });
          } catch (t) {
            try {
              O({
                raw_spec: eg.ZP.stringify(eg.ZP.parse(e), {
                  lineWidth: 120,
                  indent: 2,
                }),
              });
            } catch (e) {}
          }
        };
        return (0, R.jsxs)("div", {
          className: "h-full overflow-auto px-4 pb-12 text-sm",
          children: [
            (0, R.jsxs)("div", {
              className:
                "relative flex flex-col items-center px-16 py-6 text-center",
              children: [
                (0, R.jsx)("div", {
                  className: "absolute left-0 top-6",
                  children: (0, R.jsx)(em.z, {
                    color: "neutral",
                    onClick: p,
                    children: (0, R.jsx)(ef.L7, { className: "icon-md" }),
                  }),
                }),
                null != v &&
                  (0, R.jsx)("div", {
                    className: "absolute right-0 top-6",
                    children: (0, R.jsx)(em.z, {
                      color: "neutral",
                      onClick: function () {
                        window.confirm(
                          "Are you sure you want to delete this action?"
                        ) &&
                          (d(function (e) {
                            return tZ(
                              tZ({}, e),
                              {},
                              {
                                tools: e.tools.filter(function (e) {
                                  return (
                                    e.type !== _.qK.JIT_PLUGIN ||
                                    e.metadata.domain !== f
                                  );
                                }),
                              }
                            );
                          }),
                          p());
                      },
                      className: "text-red-500",
                      children: (0, R.jsx)(ef.a_, { className: "icon-md" }),
                    }),
                  }),
                (0, R.jsx)("div", {
                  className: "text-xl font-medium",
                  children: x ? "Add actions" : "Edit actions",
                }),
                (0, R.jsx)("div", {
                  className: "text-sm text-token-text-tertiary",
                  children:
                    "Let your GPT retrieve information or take actions outside of ChatGPT.",
                }),
                (0, R.jsx)("div", {
                  className: "text-sm text-token-text-tertiary",
                  children: (0, R.jsx)("a", {
                    href: "https://help.openai.com/en/articles/8554397-creating-a-gpt",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "font-medium",
                    children: "Learn more.",
                  }),
                }),
              ],
            }),
            (0, R.jsxs)(ta, {
              className: "relative",
              children: [
                (0, R.jsx)(tu, { label: "Authentication" }),
                (0, R.jsx)(eb, {
                  onClick: function () {
                    w(!0);
                  },
                  content: (function (e) {
                    switch (e) {
                      case ep.Jv.None:
                        return "None";
                      case ep.Jv.OAuth:
                        return "OAuth";
                      case ep.Jv.ServiceHTTP:
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
                      : ep.Jv.None
                  ),
                  button: (0, R.jsx)("button", {
                    color: "neutral",
                    className: "flex items-center gap-2 px-3",
                    children: (0, R.jsx)(ef.RR, { className: "icon-sm" }),
                  }),
                }),
                j &&
                  (0, R.jsx)(tU, {
                    jitPluginTool: v,
                    onUpdateTool: function (e) {
                      switch (e.type) {
                        case ep.Jv.None:
                          O({ auth: { type: ep.Jv.None } });
                          break;
                        case ep.Jv.OAuth:
                          var t = e.oauth_client_id,
                            n = e.oauth_client_secret;
                          O({
                            auth: (0, ed.Z)(e, tS),
                            oauth_client_id: t,
                            oauth_client_secret: n,
                          });
                          break;
                        case ep.Jv.ServiceHTTP:
                          var r = e.api_key;
                          O({ auth: (0, ed.Z)(e, tA), api_key: r });
                      }
                    },
                    onClose: function () {
                      w(!1);
                    },
                  }),
              ],
            }),
            (0, R.jsxs)("div", {
              children: [
                (0, R.jsxs)("div", {
                  className: "mb-1 flex h-8 items-center justify-between",
                  children: [
                    (0, R.jsx)("label", {
                      className: "font-medium text-token-text-primary",
                      children: "Schema",
                    }),
                    (0, R.jsx)("div", {
                      className: "flex items-center",
                      children: k
                        ? (0, R.jsx)(tR, {
                            onImport: function (e) {
                              Z(e);
                            },
                            onClose: function () {
                              T(!1);
                            },
                          })
                        : (0, R.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, R.jsx)(eD.cY, {
                                color: "neutral",
                                onClick: function () {
                                  T(!0);
                                },
                                children: "Import from URL",
                              }),
                              (0, R.jsx)(ej, {
                                onSelectExample: function (e) {
                                  O({ raw_spec: e });
                                },
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
                (0, R.jsxs)("div", {
                  className:
                    "mb-8 overflow-hidden rounded-lg border border-token-border-light",
                  children: [
                    (0, R.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, R.jsx)("textarea", {
                          value: b,
                          onChange: function (e) {
                            O({ raw_spec: e.target.value });
                          },
                          spellCheck: !1,
                          placeholder: "Enter your OpenAPI schema here",
                          className:
                            "block h-96 w-full border-none bg-transparent p-2 font-mono text-xs text-token-text-primary",
                        }),
                        (0, R.jsx)("div", {
                          className: "absolute bottom-2 right-2 flex gap-2",
                          children:
                            "" !== b
                              ? (0, R.jsx)(eD.cY, {
                                  onClick: function () {
                                    Z(b);
                                  },
                                  children: "Format",
                                })
                              : (0, R.jsxs)(eD.cY, {
                                  as: "a",
                                  to: tD,
                                  openNewTab: !0,
                                  children: [
                                    (0, R.jsx)(eh.Z, {
                                      id: "gizmo.actions.actionsGptHelp",
                                      defaultMessage:
                                        "Get help from ActionsGPT",
                                    }),
                                    (0, R.jsx)(ef.fe, { className: "icon-md" }),
                                  ],
                                }),
                        }),
                      ],
                    }),
                    null != A &&
                      (null == A ? void 0 : A.length) > 0 &&
                      (0, R.jsx)("div", {
                        className:
                          "border-t border-token-border-light p-2 text-red-500",
                        children: A.map(function (e, t) {
                          return (0, R.jsx)("div", { children: e }, t);
                        }),
                      }),
                  ],
                }),
              ],
            }),
            null != G && (0, R.jsx)(tF, { validationResponse: G }),
            (0, R.jsxs)("div", {
              className: "mt-4",
              children: [
                (0, R.jsx)(tu, {
                  label: "Privacy policy",
                  description:
                    "Privacy policy is required for all public GPTs.",
                }),
                (0, R.jsx)(ev.Z, {
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
                    O({ privacy_policy_url: e.target.value });
                  },
                }),
              ],
            }),
          ],
        });
      }
      var tq = n(87942),
        tW = n(22189),
        tH = n(36530),
        tK = n(37178),
        tY = n(34490);
      function tJ(e, t) {
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
            ? tJ(Object(n), !0).forEach(function (t) {
                (0, O.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tJ(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function tX(e) {
        window.history.length > 1 ? e.back() : e.push((0, en.L7)());
      }
      function t$(e) {
        var t,
          n,
          r,
          i = e.gizmo,
          o = e.publishedGizmo,
          a = e.promoteGizmo,
          s = e.appealGizmo,
          l = e.setStep,
          c = e.showActionsModal,
          u = (0, L.useState)(!1),
          d = u[0],
          p = u[1],
          m = (0, $.ec)($.F_.isBusinessWorkspace),
          f = (0, eu.Z)(),
          h = (0, L.useState)(
            (0, T.Sg)(i)
              ? m
                ? Z.Zz.Workspace
                : Z.Zz.Marketplace
              : i.sharingRecipient
          ),
          v = h[0],
          x = h[1],
          b = (0, L.useMemo)(
            function () {
              return (
                (null == o ? void 0 : o.gizmo.sharing_targets) == null ||
                o.gizmo.sharing_targets.some(function (e) {
                  return e.recipient === v && e.allowed;
                })
              );
            },
            [null == o ? void 0 : o.gizmo.sharing_targets, v]
          ),
          y = (0, T.WL)(),
          j = y.data,
          w = y.isLoading,
          P = (0, L.useState)(
            null != o && o.gizmo.display.categories.length > 0
              ? o.gizmo.display.categories[0]
              : void 0
          ),
          k = P[0],
          z = P[1];
        (0, L.useEffect)(
          function () {
            z(null == o ? void 0 : o.gizmo.display.categories[0]);
          },
          [null == o ? void 0 : o.gizmo.display.categories]
        );
        var O = (0, L.useState)(void 0),
          C = O[0],
          G = O[1],
          M = (0, L.useRef)(
            (0, es.throttle)(function (e, t) {
              return E.U.generateCategory(e, t);
            }, 1e3)
          ),
          S =
            null != j && j.is_verified
              ? void 0
              : f.formatMessage(ne.displayNameRequiredHint);
        v !== Z.Zz.Marketplace || null == S || w || x(Z.Zz.Link);
        var A =
            m &&
            !(
              null !== (t = i.sharingTargets) &&
              void 0 !== t &&
              t.some(function (e) {
                return e.recipient === Z.Zz.Link;
              })
            ),
          U = tt(i, v, k),
          B = U.includes(g.MissingPublicActionPrivacyPolicyURL),
          F = i.tools.find(function (e) {
            return e.type === _.qK.JIT_PLUGIN && !e.metadata.privacy_policy_url;
          }),
          V = (0, $.ec)(function (e) {
            return e.currentWorkspace;
          }),
          q = (0, J.hz)(),
          W = (0, T.Z1)();
        (0, L.useEffect)(
          function () {
            if (!(null != q && q.includes(Q.L0.GizmoStore))) {
              z("other");
              return;
            }
            var e = !0;
            return (
              (0, N.Z)(
                I().mark(function t() {
                  var n;
                  return I().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (((t.prev = 0), !(null != k))) {
                              t.next = 3;
                              break;
                            }
                            return t.abrupt("return");
                          case 3:
                            return (
                              (t.next = 5), M.current(i.name, i.instructions)
                            );
                          case 5:
                            (n = t.sent),
                              e && null == k && (n ? z(n.id) : G(!0)),
                              (t.next = 12);
                            break;
                          case 9:
                            (t.prev = 9),
                              (t.t0 = t.catch(0)),
                              e && null == k && G(!0);
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
          [i.instructions, i.name, q, k]
        );
        var H = null == q ? void 0 : q.includes(Q.L0.GizmoStore),
          K = (0, D.sB)(D.tz.GizmoAppeals).value;
        return (0, R.jsxs)("div", {
          children: [
            (0, R.jsx)("div", {
              className: "mb-2 text-sm font-medium text-token-text-tertiary",
              children: (0, R.jsx)(eh.Z, tQ({}, ne.publishTo)),
            }),
            (0, R.jsxs)("div", {
              className: "flex flex-col gap-3 text-sm",
              children: [
                (0, R.jsxs)(er.fC, {
                  value: v,
                  onValueChange: function (e) {
                    return x(e);
                  },
                  className: "space-y-2",
                  children: [
                    i.sharingTargets &&
                      i.sharingTargets.map(function (e, t) {
                        return (0, R.jsx)(
                          eD.Xb,
                          {
                            value: e.recipient,
                            disabled:
                              e.recipient === Z.Zz.Marketplace && null != S,
                            tooltipText:
                              e.recipient === Z.Zz.Marketplace
                                ? (null != S ? S : H)
                                  ? f.formatMessage(
                                      ne.publicSharingHintStoreEnabled
                                    )
                                  : f.formatMessage(ne.publicSharingHint)
                                : void 0,
                            label: (0, tg.MI)(e.recipient, V, f),
                          },
                          t
                        );
                      }),
                    A &&
                      (0, R.jsxs)(R.Fragment, {
                        children: [
                          (0, R.jsx)(eD.Xb, {
                            value: Z.Zz.Link,
                            disabled: !0,
                            tooltipText: f.formatMessage(
                              ne.workspaceDisabledHint
                            ),
                            label: (0, tg.MI)(Z.Zz.Link, V, f),
                          }),
                          (0, R.jsx)(eD.Xb, {
                            value: Z.Zz.Marketplace,
                            disabled: !0,
                            tooltipText: f.formatMessage(
                              ne.workspaceDisabledHint
                            ),
                            label: (0, tg.MI)(Z.Zz.Marketplace, V, f),
                          }),
                        ],
                      }),
                  ],
                }),
                B &&
                  (0, R.jsx)("div", {
                    className: "text-xs text-red-500",
                    children: (0, R.jsx)(
                      eh.Z,
                      tQ(
                        tQ({}, ne.actionNeedsPrivacyPolicyURL),
                        {},
                        {
                          values: {
                            fixlink: function (e) {
                              return (0, R.jsx)("button", {
                                onClick: function () {
                                  c(null == F ? void 0 : F.metadata.action_id);
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
                v !== Z.Zz.Private &&
                  (0, R.jsx)(tY.QT, {
                    gizmoAvatar: i.profilePictureUrl,
                    gizmoName: i.name,
                    canEdit: !0,
                  }),
                v === Z.Zz.Marketplace &&
                  (null == q ? void 0 : q.includes(Q.L0.GizmoStore)) &&
                  (C
                    ? (0, R.jsx)("div", {
                        className: "text-xs text-red-500",
                        children: (0, R.jsx)(eh.Z, tQ({}, ne.categoryError)),
                      })
                    : (0, R.jsxs)(R.Fragment, {
                        children: [
                          (0, R.jsxs)("div", {
                            className:
                              "flex items-center justify-between text-sm font-medium text-token-text-tertiary",
                            children: [
                              (0, R.jsx)(eh.Z, tQ({}, ne.categoryLabel)),
                              (0, R.jsx)(eT.u, {
                                label: (0, R.jsx)("span", {
                                  className: "w-36 text-xs",
                                  children: (0, R.jsx)(
                                    eh.Z,
                                    tQ({}, ne.categoryLabelTooltip)
                                  ),
                                }),
                                side: "top",
                                children: (0, R.jsx)(ef.VX, {
                                  className: "icon-sm",
                                }),
                              }),
                            ],
                          }),
                          (0, R.jsx)(t6, {
                            category: null != k ? k : "",
                            categories:
                              null !==
                                (n =
                                  null === (r = W.data) || void 0 === r
                                    ? void 0
                                    : r.categories) && void 0 !== n
                                ? n
                                : [],
                            setCategory: z,
                          }),
                        ],
                      })),
                b
                  ? (0, R.jsx)(eD.cY, {
                      color: "primary",
                      disabled: U.length > 0,
                      loading: d,
                      onClick: (0, N.Z)(
                        I().mark(function e() {
                          var t;
                          return I().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0), p(!0), (e.next = 4), a(v, k)
                                    );
                                  case 4:
                                    if (null != (t = e.sent)) {
                                      e.next = 7;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 7:
                                    1 === t.gizmo.live_version
                                      ? ec().push((0, T.m_)(t))
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
                      children: (0, R.jsx)(eh.Z, tQ({}, ne.privacyConfirm)),
                    })
                  : K
                    ? (0, R.jsxs)(R.Fragment, {
                        children: [
                          (0, R.jsx)("div", {
                            className:
                              "flex items-center justify-between text-sm text-token-text-secondary",
                            children: (0, R.jsx)(
                              eh.Z,
                              tQ({}, ne.appealNeededLabel)
                            ),
                          }),
                          (0, R.jsx)(eD.cY, {
                            color: "primary",
                            onClick: (0, N.Z)(
                              I().mark(function e() {
                                return I().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), s(v);
                                      case 2:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            ),
                            className: "w-full",
                            children: (0, R.jsx)(eh.Z, tQ({}, ne.appealButton)),
                          }),
                        ],
                      })
                    : (0, R.jsx)("div", {
                        className:
                          "flex items-center justify-between text-sm text-token-text-secondary",
                        children: (0, R.jsx)(eh.Z, tQ({}, ne.recipientBlocked)),
                      }),
              ],
            }),
          ],
        });
      }
      function t0(e) {
        return "".concat("https://chat.openai.com").concat((0, T.m_)(e));
      }
      function t1(e) {
        var t = e.publishedGizmo,
          n = t0(t);
        return (0, R.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [
            (0, R.jsx)("div", {
              className: "font-medium",
              children: (0, R.jsx)(eh.Z, tQ({}, ne.publishedTitle)),
            }),
            (0, R.jsxs)("div", {
              className:
                "flex gap-1 rounded bg-token-surface-secondary px-2 py-1",
              children: [
                (0, R.jsx)("div", {
                  className: "text-ellipsis break-all line-clamp-1",
                  children: n,
                }),
                (0, R.jsx)("button", {
                  onClick: function () {
                    (0, tK.S)(t0(t));
                  },
                  className:
                    "text-token-text-secondary transition hover:text-token-text-primary",
                  children: (0, R.jsx)(ef.dS, { className: "icon-sm" }),
                }),
              ],
            }),
            (0, R.jsx)(eD.cY, {
              color: "primary",
              as: "link",
              to: n,
              className: "w-full",
              children: (0, R.jsx)(eh.Z, tQ({}, ne.viewGPT)),
            }),
          ],
        });
      }
      function t2(e) {
        var t = e.gizmo,
          n = e.publishedGizmo,
          r = e.promoteGizmo,
          i = e.appealGizmo,
          o = e.showActionsModal,
          a = (0, L.useState)({ type: "privacy" }),
          s = a[0],
          l = a[1];
        return (0, R.jsx)("div", {
          className:
            "w-60 rounded-lg border border-token-border-medium bg-token-surface-primary p-4 text-sm",
          children:
            "privacy" === s.type
              ? (0, R.jsx)(t$, {
                  gizmo: t,
                  publishedGizmo: n,
                  promoteGizmo: r,
                  appealGizmo: i,
                  setStep: l,
                  showActionsModal: o,
                })
              : (0, R.jsx)(t1, { publishedGizmo: s.publishedGizmo }),
        });
      }
      function t3(e) {
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
          d = null != n ? tt(n) : [],
          p = (0, eu.Z)();
        (null == n || i) && d.push(g.Loading),
          o && d.push(g.UploadingProfilePic),
          a && d.push(g.GeneratingProfilePic);
        var m = (0, T.Sg)(n);
        return (0, R.jsxs)(tW.fC, {
          modal: !0,
          children: [
            (0, R.jsx)(tW.xz, {
              asChild: !0,
              children: (0, R.jsx)(eD.cY, {
                color: "primary",
                className: "cursor-pointer whitespace-nowrap",
                disabled: void 0 === n.id,
                tooltip: d.length > 0 ? d.map(te).join("\n") : void 0,
                children: (0, R.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    c && !m
                      ? p.formatMessage(ne.publishChanges)
                      : p.formatMessage(ne.save),
                    (0, R.jsx)(ef.ud, {}),
                  ],
                }),
              }),
            }),
            (0, R.jsx)(tW.h_, {
              children: (0, R.jsx)(tW.VY, {
                side: "bottom",
                align: "end",
                sideOffset: 8,
                children: (0, R.jsx)(t2, {
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
      function t4(e) {
        var t = e.gizmoEditorData,
          n = e.publishedGizmo,
          r = e.revertDraft,
          i = (0, eu.Z)(),
          o = (0, L.useState)(!1),
          a = o[0],
          s = o[1],
          l = (0, J.hz)();
        return (null != l && l.includes("debug")) ||
          (null == t ? void 0 : t.id) != null
          ? (0, R.jsxs)(R.Fragment, {
              children: [
                (0, R.jsxs)(ez.fC, {
                  children: [
                    (0, R.jsx)(ez.xz, {
                      asChild: !0,
                      children: (0, R.jsx)(eD.cY, {
                        children: (0, R.jsx)(ef.Yr, { className: "icon-md" }),
                      }),
                    }),
                    (0, R.jsx)(ez.Uv, {
                      children: (0, R.jsxs)(ez.VY, {
                        className:
                          "min-w-[180px] max-w-xs rounded-lg border border-gray-100 bg-token-surface-primary shadow-lg dark:border-gray-700",
                        side: "top",
                        align: "end",
                        sideOffset: 6,
                        children: [
                          null != n &&
                            (0, R.jsxs)(eD.UA, {
                              onClick: function () {
                                (0, tK.S)(t0(n));
                              },
                              children: [
                                (0, R.jsx)(ef.HN, { className: "icon-md" }),
                                (0, R.jsx)(eh.Z, tQ({}, ne.copyLink)),
                              ],
                            }),
                          null != r &&
                            (0, R.jsxs)(eD.UA, {
                              onClick: function () {
                                window.confirm(
                                  i.formatMessage(ne.revertConfirm)
                                ) && r();
                              },
                              children: [
                                (0, R.jsx)(ef.Nt, { className: "icon-md" }),
                                (0, R.jsx)(eh.Z, tQ({}, ne.revertMenuItem)),
                              ],
                            }),
                          (null == l ? void 0 : l.includes("debug")) &&
                            (0, R.jsxs)(eD.UA, {
                              onClick: function () {
                                tP.vm.toggleActiveSidebar("debug");
                              },
                              children: [
                                (0, R.jsx)(ef.WP, { className: "icon-md" }),
                                "Debug (Internal only)",
                              ],
                            }),
                          (null == t ? void 0 : t.id) != null &&
                            (0, R.jsxs)(eD.UA, {
                              color: "danger",
                              onClick: function () {
                                s(!0);
                              },
                              children: [
                                (0, R.jsx)(ef.a_, { className: "icon-md" }),
                                (0, R.jsx)(eh.Z, tQ({}, ne.deleteGPT)),
                              ],
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                a &&
                  (0, R.jsx)(tq.b, {
                    gizmoId: t.id,
                    onSuccess: function () {
                      return tX(ec());
                    },
                    onClose: function () {
                      s(!1);
                    },
                  }),
              ],
            })
          : null;
      }
      var t5 = U.Z.div(P || (P = (0, M.Z)(["flex items-center gap-1"])));
      function t8(e) {
        var t = e.gizmoEditorData,
          n = (0, $.ec)(function (e) {
            var t;
            return null === (t = e.currentWorkspace) || void 0 === t
              ? void 0
              : t.name;
          });
        switch (t.sharingRecipient) {
          case Z.Zz.Private:
            return (0, R.jsxs)(t5, {
              children: [
                (0, R.jsx)(ef.LX, { className: "icon-xs" }),
                (0, R.jsx)(eh.Z, tQ({}, ne.onlyMe)),
              ],
            });
          case Z.Zz.Link:
            return (0, R.jsxs)(t5, {
              children: [
                (0, R.jsx)(ef.HN, { className: "icon-xs" }),
                (0, R.jsx)(eh.Z, tQ({}, ne.anyoneWithLink)),
              ],
            });
          case Z.Zz.Workspace:
            return (0, R.jsxs)(t5, {
              children: [(0, R.jsx)(ef.oq, { className: "icon-xs" }), n],
            });
          case Z.Zz.Marketplace:
            return (0, R.jsxs)(t5, {
              children: [
                (0, R.jsx)(ef.hk, { className: "icon-xs" }),
                (0, R.jsx)(eh.Z, tQ({}, ne.public)),
              ],
            });
        }
        return (0, R.jsx)("div", {});
      }
      function t9(e) {
        var t = e.gizmoEditorData;
        return (0, R.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            null != t.profilePictureUrl
              ? (0, R.jsx)(eZ.Z, {
                  isFirstParty: !1,
                  src: t.profilePictureUrl,
                  className: "h-8 w-8",
                })
              : (0, R.jsx)("div", {
                  className:
                    "h-8 w-8 rounded-full border-2 border-dashed border-token-border-medium",
                }),
            (0, R.jsxs)("div", {
              children: [
                (0, R.jsx)("div", {
                  className: "text-sm font-medium",
                  children: t.name || (0, R.jsx)(eh.Z, tQ({}, ne.newGPT)),
                }),
                (0, R.jsx)("div", {
                  className: "text-xs text-token-text-secondary",
                  children: (0, T.Sg)(t)
                    ? (0, R.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, R.jsx)("div", {
                            className:
                              "h-1.5 w-1.5 rounded-full bg-token-text-tertiary",
                          }),
                          (0, R.jsx)(eh.Z, tQ({}, ne.draft)),
                        ],
                      })
                    : (0, R.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          (0, R.jsx)("div", {
                            className:
                              "h-1.5 w-1.5 rounded-full bg-brand-green",
                          }),
                          (0, R.jsx)(eh.Z, tQ({}, ne.published)),
                          " \xb7 ",
                          (0, R.jsx)(t8, { gizmoEditorData: t }),
                        ],
                      }),
                }),
              ],
            }),
          ],
        });
      }
      function t6(e) {
        var t = e.category,
          n = e.categories,
          r = e.setCategory;
        return (0, R.jsxs)(tH.fC, {
          value: t,
          onValueChange: function (e) {
            return r(e);
          },
          children: [
            (0, R.jsx)(tH.xz, {
              className:
                "flex justify-between rounded-xl bg-gray-50 p-3 font-medium dark:bg-gray-900",
              children: t
                ? (0, R.jsxs)(R.Fragment, {
                    children: [
                      (0, R.jsx)(tH.B4, {}),
                      (0, R.jsx)(tH.JO, { children: (0, R.jsx)(ef.ud, {}) }),
                    ],
                  })
                : (0, R.jsx)("div", {
                    className: "flex w-full justify-center",
                    children: (0, R.jsx)(K.Z, {}),
                  }),
            }),
            (0, R.jsx)(tH.h_, {
              children: (0, R.jsx)(tH.VY, {
                className:
                  "h-64 w-[var(--radix-select-trigger-width)] rounded-xl border bg-white p-1 py-2 dark:border-gray-600 dark:bg-gray-800",
                position: "popper",
                sideOffset: 2,
                children: (0, R.jsx)("div", {
                  className: "overflow-y-auto",
                  children: n.map(function (e) {
                    return (0, R.jsxs)(
                      tH.ck,
                      {
                        className:
                          "flex w-full cursor-pointer justify-between rounded-lg p-2 pl-4 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700",
                        value: e.id,
                        children: [
                          (0, R.jsx)(tH.eT, { children: e.title }),
                          (0, R.jsx)(tH.wU, {
                            className: "text-green-600",
                            children: (0, R.jsx)(ef.oS, {}),
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
      function t7(e) {
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
        return (0, R.jsxs)("div", {
          className: (0, ea.default)(
            "relative flex h-14 w-full items-center justify-between gap-2 border-b border-token-border-medium px-3",
            u
          ),
          children: [
            (0, R.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, R.jsx)("a", {
                  className: "cursor-pointer text-token-text-primary",
                  onClick: function () {
                    return tX(ec());
                  },
                  children: (0, R.jsx)(ef.L7, { className: "icon-lg" }),
                }),
                (0, R.jsx)(t9, { gizmoEditorData: t }),
              ],
            }),
            (0, R.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                c,
                (0, R.jsx)(t4, {
                  gizmoEditorData: t,
                  publishedGizmo: o,
                  revertDraft: l,
                }),
                (0, R.jsx)(t3, {
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
      var ne = (0, ey.vU)({
        privacyConfirm: {
          id: "gizmo.confirmPublish",
          defaultMessage: "Confirm",
        },
        recipientBlocked: {
          id: "gizmo.recipientBlocked",
          defaultMessage:
            "Because this GPT previously may have violated our policies, you cannot publish it at this level.",
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
      function nt(e, t) {
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
      function nn(e) {
        var t = (function (e, t) {
          var n = e.response,
            r = (0, ee.Ot)(e);
          if (!Array.isArray(n)) return r;
          var i = (0, es.compact)(
            n.map(function (e) {
              if ("value_error.any_str.max_length" === e.type)
                switch (e.loc[1]) {
                  case "display":
                    switch (e.loc[2]) {
                      case "name":
                        return t.formatMessage(th.nameTooLong, {
                          length: e.ctx.limit_value,
                        });
                      case "description":
                        return t.formatMessage(th.descriptionTooLong, {
                          length: e.ctx.limit_value,
                        });
                      case "welcome_message":
                        return t.formatMessage(th.welcomeMessageTooLong, {
                          length: e.ctx.limit_value,
                        });
                    }
                    break;
                  case "instructions":
                    return t.formatMessage(th.instructionsTooLong, {
                      length: e.ctx.limit_value,
                    });
                }
              if ("string" == typeof e.msg) return e.msg;
            })
          );
          return i.length > 0 ? i.join("\n") : r;
        })(e.upsertDraftError, (0, eu.Z)());
        return (0, R.jsxs)("div", {
          className: "flex items-center gap-2 text-red-500",
          children: [
            (0, R.jsx)("div", {
              children: (0, R.jsx)(
                eh.Z,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? nt(Object(n), !0).forEach(function (t) {
                          (0, O.Z)(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : nt(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                })({}, ni.errorSavingDraft)
              ),
            }),
            null != t &&
              (0, R.jsx)(eT.u, {
                label: t,
                children: (0, R.jsx)(eC.H33, { className: "icon-sm" }),
              }),
          ],
        });
      }
      function nr(e) {
        var t = e.isSavingDraft,
          n = e.hasUnpublishedChanges,
          r = e.upsertDraftError,
          i = e.className;
        return r instanceof ee.Q0
          ? (0, R.jsx)(nn, { upsertDraftError: r })
          : n
            ? (0, R.jsxs)("div", {
                className: (0, ea.default)("flex items-center gap-2", i),
                children: [
                  (0, R.jsx)("span", {
                    className: "text-token-text-secondary",
                    children: "Unpublished changes",
                  }),
                  (0, R.jsx)("div", {
                    className: "w-4 text-token-text-tertiary",
                    children: t && (0, R.jsx)(K.Z, {}),
                  }),
                ],
              })
            : null;
      }
      var ni = (0, ey.vU)({
          errorSavingDraft: {
            id: "gizmo.errorSavingDraft",
            defaultMessage: "Error saving draft",
          },
        }),
        no = n(86178);
      function na(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return ns(e, t);
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
                  return ns(e, t);
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
      function ns(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function nl(e, t) {
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
      function nc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? nl(Object(n), !0).forEach(function (t) {
                (0, O.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : nl(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function nu() {
        return (nu = (0, N.Z)(
          I().mark(function e(t) {
            var n, r, i, o, a, s, l, c, u;
            return I().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    r = na(t);
                    try {
                      for (r.s(); !(i = r.n()).done; )
                        if (
                          ((o = i.value),
                          "gizmo_editor.generate_profile_pic" ===
                            o.author.name &&
                            "multimodal_text" === o.content.content_type)
                        ) {
                          a = na(o.content.parts);
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
                      (c = (0, eE.Iy)(n.asset_pointer)),
                      (e.next = 6),
                      eV.ZP.getFileDownloadLink(c)
                    );
                  case 6:
                    if ((u = e.sent).status !== _.KF.Success) {
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
      function nd() {
        return (nd = (0, N.Z)(
          I().mark(function e(t, n, r) {
            var i, o, a, s, l, c, u, d, p, m, f, h, g;
            return I().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (s = (a = (function (e, t) {
                          for (
                            var n = X.tQ.getThreadCurrentLeafId(e),
                              r = X.tQ.getTree(e),
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
                            return nc(nc({}, e), t);
                          }, {})),
                        (e.next = 4),
                        (function (e) {
                          return nu.apply(this, arguments);
                        })(a)
                      );
                    case 4:
                      if (((l = e.sent), !((0, es.isEmpty)(s) && null == l))) {
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
                        eV.ZP.getFileDownloadLink(m, t.id)
                      );
                    case 12:
                      (h = e.sent).status === _.KF.Success &&
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
                        Y.m.warning(
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
                          (0, es.pickBy)(g, function (e) {
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
      function np(e, t, n, r) {
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
        if (!(0, es.isEqual)(x, b)) {
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
          if (!(0, es.isEmpty)(y) || 0 !== P.length || 0 !== k.length) {
            var T = [];
            if (!(0, es.isEmpty)(y)) {
              var N =
                "Explicitly update the GPT's behavior to the following exact fields:\n\n    ".concat(
                  JSON.stringify(y, null, 2),
                  '\n\n    "Do not call update_behavior yet. Instead, use these updated fields as the GPT\'s current behavior, and in the next call to update_behavior, incorporate these changes."\n    '
                );
              T.push(no.Cv.getTextAsMessage(N, ep.uU.System));
            }
            k.length > 0 &&
              T.push(
                no.Cv.getTextAsMessage(
                  "The user has removed the following files from the GPT. You can no longer reference these files: ".concat(
                    k
                      .map(function (e) {
                        return e.file_id;
                      })
                      .join(", ")
                  ),
                  ep.uU.System
                )
              ),
              P.length > 0 &&
                T.push(
                  no.Cv.getTextAsMessage(
                    "The user is adding these files to the GPT. The GPT may reference these files. The file IDs are: ".concat(
                      P.map(function (e) {
                        return e.file_id;
                      }).join(", ")
                    ),
                    ep.uU.System,
                    {
                      attachments: P.map(function (e) {
                        return { id: e.file_id, name: e.name, size: e.size };
                      }),
                    }
                  )
                ),
              T.length > 0 &&
                X.tQ.updateTree(e, function (e) {
                  var n,
                    r = e.getNodeByIdOrMessageId(t).parentId,
                    i = na(T);
                  try {
                    for (i.s(); !(n = i.n()).done; ) {
                      var o = n.value,
                        a = (0, tz.Z)();
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
      var nm = n(14402);
      function nf(e, t) {
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
      function nh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? nf(Object(n), !0).forEach(function (t) {
                (0, O.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : nf(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var ng = L.memo(function (e) {
        var t = e.gizmoEditorData,
          n = e.updateGizmo,
          r = e.clientThreadId,
          i = e.completionCallbackResponse,
          o = e.gizmoEditorDataRef,
          a = e.magicMakerBehaviorOverrides,
          s = e.magicMakerConversationGizmoEditorDataRef,
          l = e.requireGizmoId;
        (0, X.ax)(r);
        var c = (0, X.UL)(r),
          u = null == t.id,
          d =
            null != t.id &&
            "" !== t.name &&
            null != t.description &&
            "" !== t.instructions &&
            null != t.profilePictureUrl,
          p = (0, L.useState)(
            u
              ? 'Hi! I\'ll help you build a new GPT. You can say something like, "make a creative who helps generate visuals for new products" or "make a software engineer who helps format my code."\n\nWhat would you like to make?'
              : d
                ? "Welcome back! Is there anything ".concat(
                    t.name,
                    " should be doing better? Anything you'd like to change?"
                  )
                : "You're back! Let's continue where we left off..."
          )[0];
        (0, L.useEffect)(
          function () {
            X.tQ.getOrInitThread(r);
            var e = X.tQ.getTree(r);
            if (
              !e.findNode(function (e) {
                var t;
                return (
                  e.message.author.role === ep.uU.User ||
                  (null === (t = e.metadata) || void 0 === t
                    ? void 0
                    : t.isClientCreatedSystemMessage) === !0
                );
              }) &&
              (X.tQ.deleteNodesByFilter(r, function (e) {
                var t;
                return (
                  (null === (t = e.metadata) || void 0 === t
                    ? void 0
                    : t.isPlaceholderTemplateAssistantWelcomeMessage) === !0
                );
              }),
              null != p && 0 !== p.length)
            ) {
              var t = X.tQ.getThreadCurrentLeafId(r);
              if (e.hasNodeOrMessageId(t)) {
                var n = (0, tz.Z)();
                X.tQ.updateTree(r, function (e) {
                  e.addNode(n, p, t, ep.uU.Assistant, {
                    isPlaceholderTemplateAssistantWelcomeMessage: !0,
                  });
                }),
                  X.tQ.setThreadCurrentLeafId(r, n);
              }
            }
          },
          [r, p]
        ),
          (0, L.useEffect)(
            function () {
              (0, X.Zz)(r) &&
                X.iN.hasThread(r) &&
                c.lastModelUsed !== eF.Mw &&
                (X.tQ.getOrInitThread(r),
                X.tQ.updateInitialThreadDataForNewThread(r, eF.Mw, []));
            },
            [r, c, c.lastModelUsed]
          );
        var m = (0, L.useMemo)(
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
          f = (0, nm.gF)(function (e) {
            return e.files.filter(function (e) {
              return e.status === eS.X.Ready && null != e.gizmoId;
            });
          }),
          h = (0, L.useCallback)(
            function (e, t) {
              !(function (e, t, n) {
                if (0 !== n.length) {
                  var r = (0, tz.Z)(),
                    i =
                      "The user is uploading files in their next message. If you need to reference these in calls to update_behavior, you will use the following File ID(s), in order: ".concat(
                        n
                          .map(function (e) {
                            return '"'.concat(e.fileId, '"');
                          })
                          .join(", ")
                      );
                  X.tQ.updateTree(e, function (e) {
                    var n = e.getNodeByIdOrMessageId(t).parentId;
                    e.insertNodeBefore(t, {
                      id: r,
                      children: [],
                      parentId: n,
                      message: no.Cv.getTextAsMessage(i, ep.uU.System),
                      metadata: { isClientCreatedSystemMessage: !0 },
                    });
                  });
                }
              })(e, t, f),
                np(e, t, o, s),
                (function (e, t) {
                  for (
                    var n =
                        "Remember, you should be calling either update_behavior or generate_profile_pic after most messages from the user. Your personality should be neutral and separate from the GPT you are creating.",
                      r = X.tQ.getThreadCurrentLeafId(e),
                      i = X.tQ.getTree(e),
                      o = i.getNodeByIdOrMessageId(r);
                    null != o && o.message.author.role !== ep.uU.User;
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
                  X.tQ.updateTree(e, function (e) {
                    var r = e.getNodeByIdOrMessageId(t).parentId;
                    e.insertNodeBefore(t, {
                      id: (0, tz.Z)(),
                      children: [],
                      parentId: r,
                      message: no.Cv.getTextAsMessage(n, ep.uU.System, {
                        exclude_after_next_user_message: !0,
                      }),
                      metadata: { isClientCreatedSystemMessage: !0 },
                    });
                  });
                })(e, t),
                n(function (e) {
                  var t;
                  return nh(
                    nh({}, e),
                    {},
                    {
                      files: [].concat(
                        (0, z.Z)(
                          null !== (t = e.files) && void 0 !== t ? t : []
                        ),
                        (0, z.Z)(
                          (0, es.compact)(
                            f.map(function (e) {
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
                (s.current = (0, es.cloneDeep)(o.current));
            },
            [o, s, f, n]
          ),
          g = (0, tP.tN)(function (e) {
            return e.activeSidebar;
          });
        return (0, R.jsx)(tC.D.Provider, {
          value: m,
          children: (0, R.jsxs)("div", {
            className: "relative flex h-full grow overflow-auto",
            children: [
              (0, R.jsx)("div", {
                className: "grow",
                children: (0, R.jsx)(tj.Z, {
                  initialThreadData: c,
                  clientThreadId: r,
                  onCompletionFinished: i,
                  preRequestCompletion: h,
                  hideHeader: !0,
                  prependThreadChildren: (0, R.jsx)("div", {
                    className: "h-8",
                  }),
                }),
              }),
              "debug" === g &&
                (0, R.jsx)(ty.fv, {
                  clientThreadId: r,
                  slideOver: !1,
                  onClose: function () {
                    return tP.vm.toggleActiveSidebar("debug");
                  },
                  isOpen: !0,
                }),
            ],
          }),
        });
      });
      function nv(e, t) {
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
      function nx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? nv(Object(n), !0).forEach(function (t) {
                (0, O.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : nv(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function nb(e) {
        var t = e.value,
          n = e.label;
        return (0, R.jsx)(er.ck, {
          value: t,
          className:
            "text-md w-1/3 flex-grow rounded-lg border-token-border-light p-1.5 font-medium text-token-text-tertiary transition hover:text-token-text-primary radix-state-checked:border radix-state-checked:bg-token-surface-primary radix-state-checked:text-token-text-primary radix-state-checked:shadow-[0_0_2px_rgba(0,0,0,.03)] radix-state-checked:dark:bg-token-surface-secondary md:w-1/2",
          children: n,
        });
      }
      function ny(e) {
        var t = e.className,
          n = e.editorTab,
          r = e.setEditorTab;
        return (0, R.jsxs)(er.fC, {
          className: (0, ea.default)(
            "flex w-full overflow-hidden rounded-xl bg-token-surface-secondary p-1.5 dark:bg-token-surface-tertiary md:w-1/2",
            t
          ),
          value: n,
          onValueChange: function (e) {
            r(e);
          },
          children: [
            (0, R.jsx)(nb, { value: k.MAGIC_MAKER, label: "Create" }),
            (0, R.jsx)(nb, { value: k.ADVANCED, label: "Configure" }),
            (0, R.jsx)("div", {
              className: "flex w-1/3 md:hidden",
              children: (0, R.jsx)(nb, { value: k.PREVIEW, label: "Preview" }),
            }),
          ],
        });
      }
      ((c = k || (k = {})).MAGIC_MAKER = "magic"),
        (c.ADVANCED = "advanced"),
        (c.PREVIEW = "preview");
      var nj = {
          id: void 0,
          instructions: "",
          name: "",
          description: "",
          profilePictureId: void 0,
          profilePictureUrl: void 0,
          welcomeMessage: "",
          promptStarters: [],
          tools: [{ type: _.qK.DALLE }],
          files: [],
          trainingDisabled: !1,
          liveVersion: 0,
        },
        nw = nx(
          nx({}, nj),
          {},
          { tools: [].concat((0, z.Z)(nj.tools), [{ type: _.qK.BROWSER }]) }
        );
      function nP(e) {
        var t, n, r, i, o, a;
        return {
          id: e.gizmo.id,
          instructions: e.gizmo.instructions,
          name: e.gizmo.display.name,
          description:
            null !== (t = e.gizmo.display.description) && void 0 !== t ? t : "",
          profilePictureId: void 0,
          profilePictureUrl:
            null !== (n = e.gizmo.display.profile_picture_url) && void 0 !== n
              ? n
              : void 0,
          welcomeMessage:
            null !== (r = e.gizmo.display.welcome_message) && void 0 !== r
              ? r
              : "",
          promptStarters:
            null !== (i = e.gizmo.display.prompt_starters) && void 0 !== i
              ? i
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
      var nk = function (e) {
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
          h,
          g = e.gizmo,
          v = e.onNewGizmoId,
          x = (0, G.C)(Q.L0.BrowseAvailable),
          b = (0, eu.Z)(),
          y = (0, L.useRef)(null != g ? nP(g) : x ? nw : nj),
          j = (0, L.useRef)(g),
          w = (0, L.useRef)(y.current),
          P = (0, L.useState)(function () {
            return y.current;
          }),
          z = P[0],
          O = P[1],
          C = (0, L.useState)(function () {
            return (0, X.OX)();
          }),
          _ = C[0];
        C[1];
        var M = (0, T.kg)(y.current.id).data,
          S = (0, T.N_)(),
          A = S.isPending,
          E = S.error,
          D = (0, T.ZJ)(),
          U = (0, L.useMemo)(
            function () {
              var e, t, n, r, i, o;
              return (
                null != M &&
                (!(
                  z.name === M.gizmo.display.name &&
                  z.description === M.gizmo.display.description &&
                  z.welcomeMessage === M.gizmo.display.welcome_message &&
                  z.instructions === M.gizmo.instructions &&
                  ((i = z.tools),
                  (o = M.tools),
                  i.length === o.length &&
                    i.every(function (e) {
                      return o.some(function (t) {
                        return t.type === e.type;
                      });
                    })) &&
                  (0, es.isEqual)(
                    null !==
                      (e =
                        null === (t = z.files) || void 0 === t
                          ? void 0
                          : t.map(function (e) {
                              return e.file_id;
                            })) && void 0 !== e
                      ? e
                      : [],
                    null !==
                      (n =
                        null === (r = M.files) || void 0 === r
                          ? void 0
                          : r.map(function (e) {
                              return e.file_id;
                            })) && void 0 !== n
                      ? n
                      : []
                  )
                ) ||
                  z.profilePictureUrl != M.gizmo.display.profile_picture_url)
              );
            },
            [z, M]
          ),
          B =
            ((t = (0, N.Z)(
              I().mark(function e() {
                var t, n, r, i, o;
                return I().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = y.current),
                            (e.prev = 1),
                            (e.next = 4),
                            S.mutateAsync({ editorData: t, gizmoId: t.id })
                          );
                        case 4:
                          return (
                            (n = e.sent),
                            (j.current = n),
                            null == y.current.id &&
                              ((r = n.gizmo.id),
                              (y.current = nx(
                                nx({}, y.current),
                                {},
                                {
                                  id: r,
                                  sharingTargets: n.gizmo.sharing_targets,
                                }
                              )),
                              O(y.current),
                              null == v || v(r)),
                            e.abrupt("return", n)
                          );
                        case 10:
                          throw (
                            ((e.prev = 10),
                            (e.t0 = e.catch(1)),
                            (o =
                              null !== (i = (0, ee.Ot)(e.t0)) && void 0 !== i
                                ? i
                                : b.formatMessage(ni.errorSavingDraft)),
                            Y.m.warning(o, { duration: 2 }),
                            e.t0)
                          );
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 10]]
                );
              })
            )),
            function () {
              return t.apply(this, arguments);
            }),
          F = (0, L.useRef)(),
          V =
            ((n = (0, N.Z)(
              I().mark(function e() {
                return I().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!(null != y.current.id)) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return", y.current.id);
                      case 2:
                        return (
                          null == F.current &&
                            (F.current = B()
                              .then(function (e) {
                                return e.gizmo.id;
                              })
                              .catch(function (e) {
                                throw ((F.current = void 0), e);
                              })),
                          e.abrupt("return", F.current)
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return n.apply(this, arguments);
            }),
          q = (0, L.useState)(function () {
            return (0, es.debounce)(
              function () {
                return B();
              },
              2e3,
              { trailing: !0 }
            );
          })[0];
        function W(e) {
          var t,
            n,
            r =
              "function" == typeof e
                ? e(y.current)
                : ((t = y.current),
                  null == (n = e)
                    ? t
                    : ((n = (function e(t) {
                        return "object" == typeof t && null != t
                          ? Array.isArray(t)
                            ? t.map(e)
                            : Object.fromEntries(
                                Object.entries(t).map(function (t) {
                                  var n = (0, eK.Z)(t, 2);
                                  return [n[0], e(n[1])];
                                })
                              )
                          : null === t
                            ? void 0
                            : t;
                      })(n)),
                      e7(e7({}, t), n)));
          (0, es.isEqual)(r, y.current) || ((y.current = r), O(y.current), q());
        }
        var K = (0, L.useState)(function () {
            return {
              context_message: (function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a = new Set(),
                  s = na(e.tools);
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
              })(y.current),
              model_slug: "unused",
              enabled_tools: [
                { tool_id: null != g ? "gizmo_editor" : "gizmo_creator" },
              ],
            };
          })[0],
          $ = (0, L.useRef)(),
          et =
            ((r = (0, N.Z)(
              I().mark(function e(t) {
                var n;
                return I().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (null != t) {
                            e.next = 3;
                            break;
                          }
                          return eP(!1), e.abrupt("return");
                        case 3:
                          return (
                            (e.prev = 3),
                            (e.next = 6),
                            (function (e, t, n) {
                              return nd.apply(this, arguments);
                            })(y.current, t, $.current)
                          );
                        case 6:
                          null != (n = e.sent) &&
                            (W(n), (w.current = (0, es.cloneDeep)(y.current))),
                            (e.next = 14);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(3)),
                            console.error(e.t0),
                            Y.m.warning(
                              "Something went wrong generating your GPT",
                              { duration: 3 }
                            );
                        case 14:
                          return (
                            (e.prev = 14),
                            ($.current = X.tQ.getThreadCurrentLeafId(t)),
                            eP(!1),
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
              return r.apply(this, arguments);
            }),
          en =
            (X.tQ.getOrInitThread(_),
            (i = (0, tO.Z)(_, void 0, es.noop, es.noop, et, [])),
            (o = (0, J.hz)()),
            (a = (0, N.Z)(
              I().mark(function e(t, n, r) {
                var a, s, l, c, u, d, p, m, f;
                return I().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (0 !== r.length) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        (a = X.tQ.getThreadCurrentLeafId(_)), (s = na(r));
                        try {
                          for (
                            c = function () {
                              var e = l.value,
                                t = (0, tz.Z)();
                              X.tQ.updateTree(_, function (n) {
                                n.addNodeToEnd(a, {
                                  id: t,
                                  children: [],
                                  parentId: a,
                                  message: no.Cv.getTextAsMessage(
                                    e,
                                    ep.uU.System
                                  ),
                                  metadata: {
                                    isClientCreatedSystemMessage: !0,
                                  },
                                });
                              }),
                                X.tQ.setThreadCurrentLeafId(_, t),
                                (a = t);
                            },
                              s.s();
                            !(l = s.n()).done;
                          )
                            c();
                        } catch (e) {
                          s.e(e);
                        } finally {
                          s.f();
                        }
                        if (
                          ((u = a),
                          np(_, u, t, n),
                          (d = {
                            conversationMode: {
                              kind: ep.OL.GizmoMagicCreate,
                              gizmo_id: t.current.id,
                              behavior_overrides: K,
                            },
                          }),
                          (p = [eF.S.GPT_4]),
                          (m = (0, tN.Rr)(o, p, ep.OL.GizmoMagicCreate)),
                          (f = null),
                          !m)
                        ) {
                          e.next = 15;
                          break;
                        }
                        return (e.next = 14), tN.ZP.getEnforcementToken(p);
                      case 14:
                        f = e.sent;
                      case 15:
                        i({
                          model: eF.Mw,
                          completionType: ep.Os.Next,
                          parentNodeId: u,
                          metadata: {},
                          focusOnNewCompletion: !0,
                          arkoseToken: f,
                          preflightTime: 0,
                          completionMetadata: d,
                        });
                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e, t, n) {
              return a.apply(this, arguments);
            }),
          er = (0, L.useState)(void 0),
          el = er[0],
          ec = er[1];
        (0, L.useEffect)(
          function () {
            ec(
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
                      if (!e || n.has(e)) return m.None;
                      var r = n.has(Z.Zz.Private) || n.has(Z.Zz.Workspace),
                        i = n.has(Z.Zz.Link) || n.has(Z.Zz.Marketplace);
                      return e === Z.Zz.Marketplace && i
                        ? m.RemovedFromMarketplace
                        : !i && r
                          ? m.RemovedFromPublic
                          : m.RemovedFromPrivate;
                    })(e.gizmo.share_recipient, e.gizmo.sharing_targets);
                  return {
                    sharingRecipient: e.gizmo.share_recipient,
                    gizmoId: e.gizmo.id,
                    moderationType: r,
                    violationType: f.Other,
                    showModal: n
                      ? p.AppealSent
                      : r !== m.None
                        ? p.AppealAvailable
                        : p.None,
                  };
                }
              })(g)
            );
          },
          [g]
        );
        var ed =
            ((s = (0, N.Z)(
              I().mark(function e(t, n) {
                var r, i, o, a, s;
                return I().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!((r = tt(y.current, t, n)).length > 0)) {
                            e.next = 4;
                            break;
                          }
                          return (
                            Y.m.warning(
                              "Could not save GPT:\n\n".concat(
                                r
                                  .map(function (e) {
                                    return "- ".concat(te(e));
                                  })
                                  .join("\n")
                              ),
                              { duration: 3 }
                            ),
                            e.abrupt("return")
                          );
                        case 4:
                          return (e.next = 6), B();
                        case 6:
                          return (
                            (o = (i = e.sent).gizmo.id),
                            (e.prev = 8),
                            (e.next = 11),
                            D.mutateAsync(
                              {
                                gizmoId: i.gizmo.id,
                                data: {
                                  sharingRecipient: t,
                                  categories: null == n ? void 0 : [n],
                                },
                              },
                              {
                                onSuccess: function (e) {
                                  eo.E.setQueryData((0, T.Vw)(o).queryKey, e),
                                    eo.E.invalidateQueries({
                                      queryKey: ["gizmos"],
                                    }),
                                    eo.E.invalidateQueries({
                                      queryKey: ["gizmo", { gizmoId: o }],
                                    }),
                                    eo.E.invalidateQueries({
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
                        case 11:
                          return (a = e.sent), e.abrupt("return", a);
                        case 15:
                          (e.prev = 15),
                            (e.t0 = e.catch(8)),
                            e.t0 instanceof Z.DC
                              ? ((s = !!e.t0.response.is_flagged_brand_name),
                                ec({
                                  gizmoId: o,
                                  sharingRecipient: t,
                                  moderationType: m.PublishBlocked,
                                  violationType: s ? f.BrandName : f.Other,
                                  showModal: p.AppealAvailable,
                                }))
                              : (console.error(e.t0),
                                Y.m.warning("Error saving GPT", {
                                  duration: 2,
                                }));
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[8, 15]]
                );
              })
            )),
            function (e, t) {
              return s.apply(this, arguments);
            }),
          em = S.isPending || D.isPending,
          ef = (0, L.useState)(function () {
            var e = ei.m.getItem(ei.F.GizmoEditorTab);
            return Object.values(k).includes(e) ? e : k.MAGIC_MAKER;
          }),
          eh = ef[0],
          eg = ef[1],
          ev = ((c = (l = (0, L.useState)({ width: null, height: null }))[0]),
          (u = l[1]),
          (0, L.useLayoutEffect)(function () {
            var e = function () {
              u({ width: window.innerWidth, height: window.innerHeight });
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          c).width;
        (0, L.useEffect)(
          function () {
            null != ev && ev >= 768 && eh === k.PREVIEW && eg(k.MAGIC_MAKER);
          },
          [ev, eh]
        );
        var ex = (0, L.useState)(!1),
          eb = ex[0],
          ey = ex[1],
          ej = (0, L.useState)(!1),
          ew = ej[0],
          eP = ej[1],
          ek = (0, L.useState)(void 0),
          eT = ek[0],
          eN = ek[1];
        return (0, R.jsxs)("div", {
          className: "flex h-screen w-full flex-col items-center",
          children: [
            (0, R.jsx)(t7, {
              gizmoEditorData: z,
              isLoading: em,
              hasUnpublishedChanges: U,
              isUploadingProfilePic: eb,
              isGeneratingProfilePic: ew,
              publishedGizmo: M,
              promoteGizmo:
                ((d = (0, N.Z)(
                  I().mark(function e(t, n) {
                    var r;
                    return I().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), ed(t, n);
                          case 2:
                            return (
                              (r = e.sent),
                              (y.current = nx(
                                nx({}, y.current),
                                {},
                                { sharingRecipient: t }
                              )),
                              O(y.current),
                              ei.m.setItem(ei.F.GizmoEditorTab, eh),
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
                  return d.apply(this, arguments);
                }),
              appealGizmo:
                ((h = (0, N.Z)(
                  I().mark(function e(t) {
                    return I().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null != el) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            ec(
                              nx(
                                nx({}, el),
                                {},
                                {
                                  sharingRecipient: t,
                                  showModal: p.AppealAvailable,
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
                function (e) {
                  return h.apply(this, arguments);
                }),
              revertDraft:
                null != M && U
                  ? function () {
                      var e = eo.E.getQueryData(
                        (0, T.Vw)(y.current.id).queryKey
                      );
                      if (null != e) {
                        var t = nP(e);
                        (y.current = t), O(t), B();
                      }
                    }
                  : void 0,
              draftMessage: (0, R.jsx)(nr, {
                hasUnpublishedChanges: U,
                isSavingDraft: A,
                upsertDraftError: E,
                className: "text-sm",
              }),
              showActionsModal: function (e) {
                eN(e);
              },
              className: "flex-shrink-0",
            }),
            el &&
              (0, R.jsx)(H, {
                appealState: el,
                onAppealClose: function () {
                  return ec(nx(nx({}, el), {}, { showModal: p.None }));
                },
              }),
            (0, R.jsxs)("div", {
              className: "relative flex w-full grow overflow-hidden",
              children: [
                (0, R.jsx)("div", {
                  className: "flex w-full justify-center md:w-1/2",
                  children: (0, R.jsx)("div", {
                    className: "h-full grow overflow-hidden",
                    children:
                      void 0 !== eT
                        ? (0, R.jsx)(tV, {
                            currentlyEditingActionDomain: eT,
                            gizmoEditorData: z,
                            updateGizmo: W,
                            onClose: function () {
                              eN(void 0);
                            },
                          })
                        : (0, R.jsxs)("div", {
                            className: "flex h-full flex-col px-2 pt-2",
                            children: [
                              (0, R.jsx)(ny, {
                                editorTab: eh,
                                setEditorTab: eg,
                                className: "mb-2 flex-shrink-0 self-center",
                              }),
                              (0, R.jsx)("div", {
                                className: "grow overflow-hidden",
                                children:
                                  eh === k.MAGIC_MAKER
                                    ? (0, R.jsx)("div", {
                                        className: "h-full w-full pb-5",
                                        children: (0, R.jsx)(
                                          ng,
                                          {
                                            gizmoEditorData: z,
                                            updateGizmo: W,
                                            completionCallbackResponse: et,
                                            clientThreadId: _,
                                            gizmoEditorDataRef: y,
                                            magicMakerBehaviorOverrides: K,
                                            magicMakerConversationGizmoEditorDataRef:
                                              w,
                                            requireGizmoId: V,
                                          },
                                          _
                                        ),
                                      })
                                    : eh === k.ADVANCED
                                      ? (0, R.jsx)(tf, {
                                          gizmoEditorData: z,
                                          updateGizmo: W,
                                          generateProfilePic: function () {
                                            eP(!0),
                                              en(y, w, [
                                                "Generate a new profile picture for this GPT using gizmo_editor generate_profile_pic. Do not prompt the user for any clarification. Do not send extra text outside of the tool function call. DO NOT CALL update_behavior or otherwise update GPT behavior in your response.",
                                              ]);
                                          },
                                          setIsUploadingProfilePic: ey,
                                          isGeneratingProfilePic: ew,
                                          setIsGeneratingProfilePic: eP,
                                          requireGizmoId: V,
                                          onShowActionsEditor: function (e) {
                                            eN(e);
                                          },
                                        })
                                      : (0, R.jsx)(tM, {
                                          gizmoEditorData: z,
                                          isSavingDraft: A,
                                          showTitle: !1,
                                        }),
                              }),
                            ],
                          }),
                  }),
                }),
                (0, R.jsx)("div", {
                  className: (0, ea.default)(
                    "hidden w-1/2 justify-center border-l border-token-border-medium bg-token-surface-secondary pt-4",
                    eh !== k.PREVIEW && "md:flex"
                  ),
                  children: (0, R.jsx)("div", {
                    className: "flex-grow pb-5",
                    children: (0, R.jsx)("div", {
                      className: "h-full",
                      children: (0, R.jsx)(tM, {
                        gizmoEditorData: z,
                        isSavingDraft: A,
                      }),
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      function nT(e) {
        var t = e.businessWorkspaceId,
          n = e.gizmoId,
          r = (0, T.b9)(n, !0).data,
          i = (0, $.ec)($.F_.accountUserId),
          o = (0, $.aF)(),
          a = null == o ? void 0 : o.id,
          s = null != r && null != i && null != a && (0, tg.k1)(r, i, a, t);
        return null != r && s ? (0, R.jsx)(nk, { gizmo: r }) : null;
      }
      function nN(e) {
        var t = e.onNewGizmoId;
        return (0, R.jsx)(nk, { gizmo: void 0, onNewGizmoId: t });
      }
      function nz(e) {
        var t = e.gizmoId,
          n = e.remixSourceId,
          r = (0, el.useRouter)(),
          i = (0, J.t)(),
          o = (0, $.ec)($.F_.businessWorkspaceId),
          a = (0, L.useRef)(void 0),
          s = t;
        return (
          null != t && a.current === t && (s = void 0),
          (0, et.yx)({
            resetThreadAction: function () {
              r.push("/");
            },
          }),
          (0, R.jsx)("div", {
            children:
              null != i && i.data
                ? (0, R.jsx)("div", {
                    children:
                      void 0 != s
                        ? (0, R.jsx)(
                            nT,
                            { businessWorkspaceId: o, gizmoId: s },
                            s
                          )
                        : (0, R.jsx)(nN, {
                            remixSourceId: n,
                            onNewGizmoId: function (e) {
                              (a.current = e),
                                window.history.replaceState(
                                  window.history.state,
                                  "",
                                  (0, en.AA)(e)
                                );
                            },
                          }),
                  })
                : (0, R.jsx)("div", {
                    className: "flex min-h-screen items-center justify-center",
                    children: (0, R.jsx)(K.Z, {}),
                  }),
          })
        );
      }
      var nO = n(85958),
        nC = !0;
      function nI() {
        var e,
          t = (0, J.t)();
        (e = null == t || t.canCreateGizmos()),
          (0, L.useEffect)(
            function () {
              e ||
                ec().replace((0, nO.M5)(nO.LT.NO_ACCESS), void 0, {
                  shallow: !0,
                });
            },
            [e]
          );
        var n = (0, el.useRouter)(),
          r = n.query.slug,
          i = r ? (0, T.CR)(r) : void 0,
          o = n.query.remixFrom,
          a = null == t ? void 0 : t.features.includes(Q.PL);
        return ((0, L.useEffect)(
          function () {
            a && tN.ZP.initializeAndGatherData();
          },
          [a]
        ),
        (0, L.useEffect)(
          function () {
            null == t || t.canCreateGizmos() || n.push("/");
          },
          [t, n]
        ),
        null != t && t.canCreateGizmos())
          ? (0, R.jsx)(nz, { gizmoId: i, remixSourceId: o })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=4648-5b21345d26e5f4e4.js.map
