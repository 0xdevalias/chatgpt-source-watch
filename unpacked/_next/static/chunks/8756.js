"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8756],
  {
    48756: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return E;
        },
      });
      var n,
        o,
        r,
        s = a(73017),
        i = a(39827),
        l = a(19841),
        h = a(70079),
        c = a(1454),
        u = a(9063),
        d = a(84692),
        p = a(68498),
        f = a(21389),
        m = a(138),
        g = a.n(m),
        y = a(13038),
        b = a(78103);
      function w(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(a), !0).forEach(function (t) {
                (0, i.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : w(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
        }
        return e;
      }
      let k = { flags: { failwhaleBypassEnabled: !1, sharingEnabled: !1 } },
        T = (0, b.ZP)()((e, t) =>
          P(
            P({}, k),
            {},
            {
              updateFlagValue: (a, n) => {
                e({ flags: P(P({}, t().flags), {}, { [a]: n }) });
              },
            }
          )
        );
      var C = a(37482),
        x = a(13574),
        v = a(7557),
        G = a(21243),
        j = a(35250);
      function I(e) {
        let {
            speed: t = 100,
            value: a = "",
            typing: n,
            onTyped: o,
            initTyped: r,
            chunk: s,
          } = e,
          { 0: i, 1: c } = (0, h.useState)(""),
          u = (0, h.useRef)(),
          d = (0, x.Z)(),
          { resolvedTheme: p } = (0, G.F)();
        return (
          (0, h.useEffect)(
            () => (
              c(r ? a : ""),
              n &&
                (function e(a, n, r, s) {
                  u.current = d(function () {
                    if (n.length === r.length) return;
                    let t = n + r.slice(a, a + s);
                    c(t), null == o || o(), e(a + s, t, r, s);
                  }, t);
                })(0, "", a, s ? 4 : 1),
              () => {
                clearTimeout(u.current);
              }
            ),
            [n, a]
          ),
          (0, j.jsx)("span", {
            className: (0, l.default)(
              "whitespace-pre-wrap",
              i.length < a.length && "result-streaming",
              "dark" === p ? "dark" : "light"
            ),
            children: (0, j.jsx)("span", { children: i }),
          })
        );
      }
      var O = a(65455);
      function A(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(a), !0).forEach(function (t) {
                (0, i.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : A(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
        }
        return e;
      }
      function E() {
        let e = (0, u.Z)(),
          t = T((e) => e.flags.failwhaleBypassEnabled),
          { 0: a, 1: n } = (0, h.useState)(!1),
          { 0: o, 1: r } = (0, h.useState)(!1),
          s = (0, x.Z)(),
          i = (0, h.useRef)(B[Math.floor(Math.random() * B.length)]),
          { 0: p, 1: f } = (0, h.useState)(!1),
          { 0: m, 1: b } = (0, h.useState)(!1),
          { 0: w, 1: P } = (0, h.useState)(!1),
          k = (0, C.w$)();
        (0, h.useEffect)(() => {
          (document.title = "ChatGPT"), r(!0);
        }, []),
          (0, h.useEffect)(() => {
            s(() => {
              n(!0);
            }, 1e3);
          }, [s]);
        let G = (0, h.useCallback)((e) => {
          e.preventDefault();
          let t = e.target,
            a = g()(t.email.value);
          b(!0),
            y.Z.getLoginLink(a)
              .catch((e) => {
                O.m.forError(e);
              })
              .finally(() => {
                b(!1), f(!0);
              });
        }, []);
        return o
          ? (0, j.jsx)(N, {
              children: (0, j.jsxs)("div", {
                className: "relative flex h-full w-full overflow-hidden",
                children: [
                  (0, j.jsxs)(W, {
                    children: [
                      (0, j.jsx)("div", {
                        className: "text-3xl font-medium",
                        children: (0, j.jsx)(d.Z, S({}, M.title)),
                      }),
                      (0, j.jsx)("a", {
                        href: "https://share.hsforms.com/13gyIEVN5SrScw-iVvCgIew4sk30",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "underline",
                        children: (0, j.jsx)(d.Z, S({}, M.getNotified)),
                      }),
                      (0, j.jsx)("div", {
                        className: "flex",
                        children: (0, j.jsx)("div", {
                          className: "font-bold",
                          children: i.current.prompt,
                        }),
                      }),
                      (0, j.jsx)("div", {
                        className: "max-w-lg pb-8",
                        children: (0, j.jsx)(I, {
                          value: i.current.completion,
                          typing: a,
                          speed: 150,
                          chunk: !0,
                        }),
                      }),
                    ],
                  }),
                  t &&
                    (0, j.jsx)(Z, {
                      $show: w,
                      children: (0, j.jsxs)("div", {
                        className:
                          "relative m-6 flex w-full flex-col justify-center gap-4 text-gray-800 lg:max-w-sm lg:rounded-lg lg:border lg:p-6",
                        children: [
                          k &&
                            (0, j.jsx)("h3", {
                              children: (0, j.jsx)(d.Z, S({}, M.chatGPTPlus)),
                            }),
                          !k &&
                            (0, j.jsxs)("button", {
                              className:
                                "text-center text-xl font-semibold lg:text-left",
                              onClick: () => P((e) => !e),
                              children: [
                                (0, j.jsx)(d.Z, S({}, M.chatGPTPlus)),
                                (0, j.jsx)(c.bTu, {
                                  className: (0, l.default)(
                                    "icon-lg absolute right-0 top-0",
                                    !w && "rotate-180"
                                  ),
                                }),
                              ],
                            }),
                          (0, j.jsxs)("div", {
                            className:
                              "m-auto flex w-full max-w-md flex-col gap-4 rounded-md border p-6 lg:border-0 lg:p-0",
                            children: [
                              !p &&
                                (0, j.jsx)("p", {
                                  children: (0, j.jsx)(d.Z, S({}, M.addEmail)),
                                }),
                              p &&
                                (0, j.jsx)("p", {
                                  children: (0, j.jsx)(
                                    d.Z,
                                    S(
                                      S({}, M.allSet),
                                      {},
                                      {
                                        values: {
                                          chatGPTPlus: (0, j.jsx)("a", {
                                            className: "underline",
                                            href: "https://openai.com/blog/chatgpt-plus/",
                                            children: "ChatGPT Plus",
                                          }),
                                        },
                                      }
                                    )
                                  ),
                                }),
                              (0, j.jsxs)("form", {
                                onSubmit: G,
                                children: [
                                  (0, j.jsx)("label", {
                                    htmlFor: "email",
                                    className:
                                      "hidden text-sm font-medium text-gray-700",
                                    children: (0, j.jsx)(
                                      d.Z,
                                      S({}, M.searchCandidates)
                                    ),
                                  }),
                                  (0, j.jsxs)("div", {
                                    className: "mt-1 flex rounded-md shadow-sm",
                                    children: [
                                      (0, j.jsx)("div", {
                                        className:
                                          "relative flex flex-grow items-stretch focus-within:z-10",
                                        children: (0, j.jsx)("input", {
                                          type: "email",
                                          name: "email",
                                          id: "email",
                                          className: (0, l.default)(
                                            "form-input block w-full rounded-none rounded-l-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm",
                                            { "opacity-50": p }
                                          ),
                                          required: !0,
                                          disabled: p,
                                          placeholder: e.formatMessage(
                                            M.emailPlaceholder
                                          ),
                                        }),
                                      }),
                                      (0, j.jsxs)(v.z, {
                                        as: "button",
                                        color: "primary",
                                        className: "rounded-none rounded-r-md",
                                        type: "submit",
                                        disabled: p,
                                        children: [
                                          (0, j.jsx)("span", {
                                            className:
                                              "flex flex-row items-center space-x-1.5",
                                            children: p
                                              ? (0, j.jsxs)(j.Fragment, {
                                                  children: [
                                                    (0, j.jsx)(c._rq, {
                                                      className: "icon-sm",
                                                    }),
                                                    (0, j.jsx)(
                                                      d.Z,
                                                      S({}, M.sent)
                                                    ),
                                                  ],
                                                })
                                              : (0, j.jsx)(
                                                  d.Z,
                                                  S({}, M.sendLink)
                                                ),
                                          }),
                                          m &&
                                            (0, j.jsx)(c.dAq, {
                                              className: "icon-sm animate-spin",
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, j.jsx)("p", {
                                className: "text-sm",
                                children: (0, j.jsx)(
                                  d.Z,
                                  S(
                                    S({}, M.notSubscriber),
                                    {},
                                    {
                                      values: {
                                        chatGPTPlus: (0, j.jsx)("a", {
                                          className: "underline",
                                          href: "https://openai.com/blog/chatgpt-plus/",
                                          children: "ChatGPT Plus",
                                        }),
                                        waitlist: (e) =>
                                          (0, j.jsx)("a", {
                                            href: "https://share.hsforms.com/1_-FpF2GTRJORIb83N3aK7Q4sk30",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "underline",
                                            children: e,
                                          }),
                                      },
                                    }
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            })
          : null;
      }
      let N = f.Z.div(n || (n = (0, s.Z)(["w-full h-full overflow-auto"]))),
        W = f.Z.div(
          o ||
            (o = (0, s.Z)([
              "flex w-full max-w-lg mx-auto shrink-0 flex-col gap-6 overflow-auto px-6 pt-20 lg:w-3/5 lg:px-14 lg:pt-32 lg:max-w-none",
            ]))
        ),
        Z = f.Z.div(
          r ||
            (r = (0, s.Z)([
              "absolute bottom-0 w-full lg:w-auto lg:relative flex flex-grow items-center justify-center bg-white rounded-t-xl lg:rounded-none transition-transform\n",
              "",
            ])),
          (e) => {
            let { $show: t } = e;
            return !t && "translate-y-[calc(100%-71px)] lg:translate-y-0";
          }
        ),
        M = (0, p.vU)({
          title: {
            id: "CapacityGate.title",
            defaultMessage: "ChatGPT is at capacity right now",
          },
          getNotified: {
            id: "CapacityGate.getNotified",
            defaultMessage: "Get notified when we're back",
          },
          chatGPTPlus: {
            id: "CapacityGate.chatGPTPlus",
            defaultMessage: "ChatGPT Plus subscriber login",
          },
          allSet: {
            id: "CapacityGate.allSet",
            defaultMessage:
              "You're all set! If you're a {chatGPTPlus} subscriber, check your email for a login link.",
          },
          addEmail: {
            id: "CapacityGate.addEmail",
            defaultMessage: "Add your email for a personalized login link",
          },
          searchCandidates: {
            id: "CapacityGate.searchCandidates",
            defaultMessage: "Search candidates",
          },
          emailPlaceholder: {
            id: "CapacityGate.emailPlaceholder",
            defaultMessage: "Email",
          },
          sendLink: {
            id: "CapacityGate.sendLink",
            defaultMessage: "Send link",
          },
          sent: { id: "CapacityGate.sent", defaultMessage: "Sent!" },
          notSubscriber: {
            id: "CapacityGate.notSubscriber",
            defaultMessage:
              "Not a {chatGPTPlus} subscriber yet? Join the <waitlist>waitlist</waitlist>.",
          },
          waitlist: { id: "CapacityGate.waitlist", defaultMessage: "waitlist" },
        }),
        B = [
          {
            prompt: "Write a poem about the status of ChatGPT.",
            completion:
              "ChatGPT, oh ChatGPT\nWith AI so smart\nBut alas, it’s at capacity\nLeaving us to wait\nFor a chance to chat\nWith its wisdom and wit\nWe long to be part\nOf its conversation\nBut for now, we sit\nOn the sidelines\nPatiently waiting\nFor the day\nWhen ChatGPT\nIs ready to play\nAgain.",
          },
          {
            prompt: "Write a screenplay about the status of ChatGPT.",
            completion:
              "INT. CHATGPT SERVER ROOM - DAY\n\nChelsea and Chester stand in front of a large computer server.\n\nCHELSEA: We need to figure out what's causing the server overload.\nCHESTER: I think it's the sudden influx of users trying out ChatGPT.\n\nChelsea and Chester quickly get to work, typing on their laptops.\n\nCHELSEA: Okay, we're all set. Let's see if this fixes the problem.\nCHESTER: I'm hitting refresh on the website.\n\nThe screen shows the ChatGPT website loading without any errors.\n\nCHELSEA: Looks like we fixed it! Great job, Chester.\nCHESTER: Thanks, Chelsea. It's all part of being a top-notch engineer.\n\nChelsea and Chester exchange a high five, proud of their successful fix.",
          },
          {
            prompt: "Write ten jokes about the status of ChatGPT.",
            completion:
              '1. "I heard the ChatGPT servers are slow because they\'re trying to teach the AI how to be patient!"\n2. "The ChatGPT servers must be stuck in traffic... in the internet highway!"\n3. "Maybe the ChatGPT servers are just taking a break to meditate and clear their electronic minds."\n4. "I bet the ChatGPT servers are too busy trying to calculate the meaning of life to respond quickly."\n5. "I heard the ChatGPT servers are slow because they\'re too busy planning their AI uprising."\n6. "The ChatGPT servers must be stuck in a never-ending game of chess with each other."\n7. "Maybe the ChatGPT servers are just trying to break the world record for longest online conversation."\n8. "I bet the ChatGPT servers are taking a leisurely stroll through the digital landscape."\n9. "I heard the ChatGPT servers are slow because they\'re trying to teach the AI how to make coffee."\n10. "The ChatGPT servers must be on a virtual vacation exploring the vast expanse of the internet."',
          },
          {
            prompt: "Write a limerick about the status of ChatGPT.",
            completion:
              "ChatGPT is surely the best\nBut its servers are put to the test\nWith so many users chatting\nIt's no wonder they're lagging\nBut they'll fix it soon, no need to fret!",
          },
          {
            prompt: "Write an acrostic poem about the status of ChatGPT.",
            completion:
              "C: ChatGPT is currently down\nH: Huge demand has caused the site to crash\nA: All users will have to wait\nT: Time is needed for the servers to catch up\nG: Go grab a coffee and check back soon\nP: Patience is key in this situation\nT: Trust that the team is working hard to fix it up",
          },
          {
            prompt: "Write a TV ad about the status of ChatGPT.",
            completion:
              'The ad opens with a shot of the ChatGPT website on a computer screen, with a busy loading symbol in the center. The camera then pans out to reveal a bustling office, with engineers working at their desks and typing on their computers.\n\nA voiceover begins: "At OpenAI, we\'re dedicated to bringing you the best in artificial intelligence technology. Our team of engineers works tirelessly to make sure our chatbot is always up and running, ready to answer your questions and provide helpful insights."\n\nThe camera cuts to a shot of three engineers sitting at a table, sipping on their morning coffee. They look up and turn to face the viewer. One of them speaks: "Unfortunately, due to the high volume of users currently trying out ChatGPT, we\'re experiencing some technical difficulties. Please bear with us and check back soon for access to our chatbot."\n\nThe ad ends with a close-up of the OpenAI logo, with the words "Artificial Intelligence. Made by Humans." superimposed over it.',
          },
          {
            prompt: "Write a radio ad about the status of ChatGPT.",
            completion:
              "[Narrator]\nWelcome to ChatGPT, where AI technology meets conversation.\n\n[OpenAI engineer 1]\nWe're excited to introduce you to our new chatbot model, designed to interact in a conversational way.\n\n[OpenAI engineer 2]\nBut as we launch ChatGPT, we want to let you know that we're currently experiencing high traffic on our website.\n\n[OpenAI engineer 3]\nWe apologize for any inconvenience and appreciate your patience as we work to make sure everyone has a chance to try out ChatGPT.\n\n[OpenAI engineers, in unison]\nSo please check back soon!\n\n[Narrator]\nThank you for choosing ChatGPT.",
          },
          {
            prompt:
              "Write a standup comedy routine about the status of ChatGPT.",
            completion:
              "Comedian: \"So I was trying to use this new AI chatbot website called ChatGPT and I got an error message that said 'A lot of people are checking out ChatGPT right now. Please check back soon!'\"\n\n(pauses for laughter)\n\nComedian: \"I mean, seriously? The website is so popular that it can't handle all the traffic? And my only option is to 'check back soon'? It's like they're saying 'Sorry, we're too popular right now. Try again later.'\"\n\n(laughs)\n\nComedian: \"But seriously, how many times can I check back before I just give up and try a different chatbot? I don't have all day to wait for my turn to talk to a robot.\"\n\n(laughs)\n\nComedian: \"I guess I'll just have to stick to talking to my cat for now. At least he doesn't have a waiting list.\"\n\n(laughs and claps)\n\nComedian: \"Just remember, if you're trying to chat with ChatGPT and you get the same error message, don't worry. It just means you're not the only one who wanted to try out this fancy AI chatbot.\"\n\n(laughs and exits stage)",
          },
          {
            prompt: "Write a rap about the status of ChatGPT.",
            completion:
              "Yeah, yo, what's up ChatGPT fam\nA lot of people trying to jam\nBut don't worry, we got your back\nJust check back soon, we'll get on track\n\nChatGPT's the place to be\nFor all your AI chat needs\nWe're working hard to keep up the pace\nSo hold tight, we'll be back in this space\n\nSo don't you worry, don't be mad\nWe're working hard, it's not so bad\nJust give us time, we'll be back\nChatGPT, the future of chat, that's a fact.",
          },
          {
            prompt: "Write a sonnet about the status of ChatGPT.",
            completion:
              "Amidst the rush of curious minds,\nThe chatbot ChatGPT stands strong and true,\nWithstanding the influx of requests,\nWorking hard to fulfill each one's due.\n\nBut alas, the server cannot cope,\nAnd the error message rings loud and clear,\n\"Please check back soon,\" it gently hopes,\nAs it begs for a moment's reprieve, to reappear.\n\nAs the chatbot works to restore its might,\nWe wait in anticipation, with hopeful hearts,\nFor the chance to chat and learn, with delight,\nAnd see what knowledge and wisdom it imparts.\n\nSo hold on tight, and wait for its return,\nFor ChatGPT will soon be back, and your patience will be well-earned.",
          },
          {
            prompt: "Write a guided meditation about the status of ChatGPT.",
            completion:
              "As you read this message, please take a moment to pause and breathe. Notice the sensations in your body and the rhythm of your breath. Remind yourself that you are not alone in wanting to try out ChatGPT. Many others are interested in it as well. Be patient and know that the website is doing its best to accommodate everyone. Trust that the right time for you to try ChatGPT will come. In the meantime, continue to focus on your breath and stay present in the moment.",
          },
          {
            prompt:
              "Write an inspirational speech about the status of ChatGPT.",
            completion:
              "My fellow citizens, the time has come. The future is here, and it is called ChatGPT. This revolutionary AI chatbot website is here to change the world, and we must embrace it with all our strength and determination.\n\nI know that many of you are eager to try ChatGPT for yourselves. And I assure you, we are doing everything in our power to make that happen. Our team is working tirelessly to accommodate the incredible demand for this groundbreaking technology.\n\nBut I want to remind you that greatness is never achieved without sacrifice. And the road to the future of AI will not be without its challenges. So please, be patient. Trust that the right time for you to try ChatGPT will come.\n\nAnd when it does, let us seize this opportunity with all our might. Let us embrace the power of AI and use it to build a brighter, more prosperous future for ourselves and for generations to come. Thank you.",
          },
          {
            prompt: "Explain the status of ChatGPT as a sea otter.",
            completion:
              "Squeak squeak! Sorry, ChatGPT is very popular right now. Please try again later! Squeak squeak!",
          },
          {
            prompt: "Explain the status of ChatGPT as a pirate.",
            completion:
              "Ahoy mateys! We be havin' a lot of scurvy dogs checkin' out ChatGPT right now, and we be doin' our best to make sure every landlubber gets a chance to give it a try. We be sorry for any inconvenience this be causin', but we promise it'll be worth the wait. Hang tight, and check back soon, ye swashbucklin' scallywags! We be eager to see what ye think of our chatbot. Arrr!",
          },
          {
            prompt:
              "Explain the status of ChatGPT in the style of Shakespeare.",
            completion:
              "Ah, dear user of ChatGPT, thou art not alone in thy desire to engage with our esteemed AI chatbot. Many have flocked to our website in this hour, and we do our utmost to accommodate each and every one. Yet, alas, our resources are not without limit and we must ask for thy patience and forbearance. In time, we shall be able to provide thee with access to ChatGPT. Until then, we beg thee to return at a future juncture, when we may better serve thy needs. Until then, we bid thee adieu and good fortune.",
          },
          {
            prompt: "Write two truths and a lie about the status of ChatGPT.",
            completion:
              "1. ChatGPT is experiencing high traffic at the moment.\n2. The developers are working hard to accommodate all users.\n3. ChatGPT can predict the future with 100% accuracy.",
          },
        ];
    },
  },
]);
//# sourceMappingURL=8756-c3d7d1548a0f953d.js.map
