(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8009],
  {
    88009: function (t) {
      window,
        (t.exports = (function (t) {
          var e = {};
          function a(n) {
            if (e[n]) return e[n].exports;
            var i = (e[n] = { i: n, l: !1, exports: {} });
            return t[n].call(i.exports, i, i.exports, a), (i.l = !0), i.exports;
          }
          return (
            (a.m = t),
            (a.c = e),
            (a.d = function (t, e, n) {
              a.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: n });
            }),
            (a.r = function (t) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (a.t = function (t, e) {
              if (
                (1 & e && (t = a(t)),
                8 & e || (4 & e && "object" == typeof t && t && t.__esModule))
              )
                return t;
              var n = Object.create(null);
              if (
                (a.r(n),
                Object.defineProperty(n, "default", {
                  enumerable: !0,
                  value: t,
                }),
                2 & e && "string" != typeof t)
              )
                for (var i in t)
                  a.d(
                    n,
                    i,
                    function (e) {
                      return t[e];
                    }.bind(null, i)
                  );
              return n;
            }),
            (a.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return a.d(e, "a", e), e;
            }),
            (a.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (a.p = ""),
            a((a.s = 2))
          );
        })([
          function (t, e, a) {
            "use strict";
            a.r(e);
            var n =
              "function" == typeof fetch
                ? fetch.bind()
                : function (t, e) {
                    return (
                      (e = e || {}),
                      new Promise(function (a, n) {
                        var i = new XMLHttpRequest();
                        for (var r in (i.open(e.method || "get", t, !0),
                        e.headers))
                          i.setRequestHeader(r, e.headers[r]);
                        (i.withCredentials = "include" == e.credentials),
                          (i.onload = function () {
                            a(
                              (function t() {
                                var e,
                                  a = [],
                                  n = [],
                                  r = {};
                                return (
                                  i
                                    .getAllResponseHeaders()
                                    .replace(
                                      /^(.*?):[^\S\n]*([\s\S]*?)$/gm,
                                      function (t, i, s) {
                                        a.push((i = i.toLowerCase())),
                                          n.push([i, s]),
                                          (e = r[i]),
                                          (r[i] = e ? e + "," + s : s);
                                      }
                                    ),
                                  {
                                    ok: 2 == ((i.status / 100) | 0),
                                    status: i.status,
                                    statusText: i.statusText,
                                    url: i.responseURL,
                                    clone: t,
                                    text: function () {
                                      return Promise.resolve(i.responseText);
                                    },
                                    json: function () {
                                      return Promise.resolve(
                                        i.responseText
                                      ).then(JSON.parse);
                                    },
                                    blob: function () {
                                      return Promise.resolve(
                                        new Blob([i.response])
                                      );
                                    },
                                    headers: {
                                      keys: function () {
                                        return a;
                                      },
                                      entries: function () {
                                        return n;
                                      },
                                      get: function (t) {
                                        return r[t.toLowerCase()];
                                      },
                                      has: function (t) {
                                        return t.toLowerCase() in r;
                                      },
                                    },
                                  }
                                );
                              })()
                            );
                          }),
                          (i.onerror = n),
                          i.send(e.body);
                      })
                    );
                  };
            e.default = n;
          },
          function (t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var n = (function () {
                function t(t, e) {
                  for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(t, n.key, n);
                  }
                }
                return function (e, a, n) {
                  return a && t(e.prototype, a), n && t(e, n), e;
                };
              })(),
              i = (function () {
                function t(e, a) {
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw TypeError("Cannot call a class as a function");
                  })(this, t),
                    (this.pluginName = e);
                }
                return (
                  n(t, [
                    {
                      key: "track",
                      value: function (t, e) {
                        window.analytics.track(t, e, {
                          integration: { name: this.pluginName },
                        });
                      },
                    },
                  ]),
                  t
                );
              })();
            e.default = i;
          },
          function (t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }),
              (e.YouTubeAnalytics = e.VimeoAnalytics = void 0);
            var n = r(a(3)),
              i = r(a(4));
            function r(t) {
              return t && t.__esModule ? t : { default: t };
            }
            (e.VimeoAnalytics = n.default), (e.YouTubeAnalytics = i.default);
          },
          function (t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var n = (function () {
                function t(t, e) {
                  for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(t, n.key, n);
                  }
                }
                return function (e, a, n) {
                  return a && t(e.prototype, a), n && t(e, n), e;
                };
              })(),
              i = r(a(0));
            function r(t) {
              return t && t.__esModule ? t : { default: t };
            }
            var s = (function (t) {
              function e(t, a) {
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw TypeError("Cannot call a class as a function");
                })(this, e);
                var n = (function (t, e) {
                  if (!t)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e && ("object" == typeof e || "function" == typeof e)
                    ? e
                    : t;
                })(
                  this,
                  (e.__proto__ || Object.getPrototypeOf(e)).call(
                    this,
                    "VimeoAnalytics"
                  )
                );
                return (
                  (n.authToken = a),
                  (n.player = t),
                  (n.metadata = {
                    content: {},
                    playback: { videoPlayer: "Vimeo" },
                  }),
                  (n.mostRecentHeartbeat = 0),
                  (n.isPaused = !1),
                  n
                );
              }
              return (
                (function (t, e) {
                  if ("function" != typeof e && null !== e)
                    throw TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                n(e, [
                  {
                    key: "initialize",
                    value: function () {
                      var t = this,
                        e = {
                          loaded: this.retrieveMetadata,
                          play: this.trackPlay,
                          pause: this.trackPause,
                          ended: this.trackEnded,
                          timeupdate: this.trackHeartbeat,
                        };
                      for (var a in e) this.registerHandler(a, e[a]);
                      this.player
                        .getVideoId()
                        .then(function (e) {
                          t.retrieveMetadata({ id: e });
                        })
                        .catch(console.error);
                    },
                  },
                  {
                    key: "registerHandler",
                    value: function (t, e) {
                      var a = this;
                      this.player.on(t, function (t) {
                        a.updateMetadata(t), e.call(a, t);
                      });
                    },
                  },
                  {
                    key: "trackPlay",
                    value: function () {
                      this.isPaused
                        ? (this.track(
                            "Video Playback Resumed",
                            this.metadata.playback
                          ),
                          (this.isPaused = !1))
                        : (this.track(
                            "Video Playback Started",
                            this.metadata.playback
                          ),
                          this.track(
                            "Video Content Started",
                            this.metadata.content
                          ));
                    },
                  },
                  {
                    key: "trackEnded",
                    value: function () {
                      this.track(
                        "Video Playback Completed",
                        this.metadata.playback
                      ),
                        this.track(
                          "Video Content Completed",
                          this.metadata.content
                        );
                    },
                  },
                  {
                    key: "trackHeartbeat",
                    value: function () {
                      var t = this.mostRecentHeartbeat,
                        e = this.metadata.playback.position;
                      e !== t &&
                        e - t >= 10 &&
                        (this.track(
                          "Video Content Playing",
                          this.metadata.content
                        ),
                        (this.mostRecentHeartbeat = Math.floor(e)));
                    },
                  },
                  {
                    key: "trackPause",
                    value: function () {
                      (this.isPaused = !0),
                        this.track(
                          "Video Playback Paused",
                          this.metadata.playback
                        );
                    },
                  },
                  {
                    key: "retrieveMetadata",
                    value: function (t) {
                      var e = this;
                      return new Promise(function (a, n) {
                        var r = t.id;
                        (0, i.default)("https://api.vimeo.com/videos/" + r, {
                          headers: { Authorization: "Bearer " + e.authToken },
                        })
                          .then(function (t) {
                            return t.ok ? t.json() : n(t);
                          })
                          .then(function (t) {
                            (e.metadata.content.title = t.name),
                              (e.metadata.content.description = t.description),
                              (e.metadata.content.publisher = t.user.name),
                              (e.metadata.playback.position = 0),
                              (e.metadata.playback.totalLength = t.duration);
                          })
                          .catch(function (t) {
                            return (
                              console.error(
                                "Request to Vimeo API Failed with: ",
                                t
                              ),
                              n(t)
                            );
                          });
                      });
                    },
                  },
                  {
                    key: "updateMetadata",
                    value: function (t) {
                      var e = this;
                      return new Promise(function (a, n) {
                        e.player
                          .getVolume()
                          .then(function (n) {
                            n && (e.metadata.playback.sound = 100 * n),
                              (e.metadata.playback.position = t.seconds),
                              a();
                          })
                          .catch(n);
                      });
                    },
                  },
                ]),
                e
              );
            })(r(a(1)).default);
            e.default = s;
          },
          function (t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var n = (function () {
                function t(t, e) {
                  for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      "value" in n && (n.writable = !0),
                      Object.defineProperty(t, n.key, n);
                  }
                }
                return function (e, a, n) {
                  return a && t(e.prototype, a), n && t(e, n), e;
                };
              })(),
              i = r(a(0));
            function r(t) {
              return t && t.__esModule ? t : { default: t };
            }
            var s = (function (t) {
              function e(t, a) {
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw TypeError("Cannot call a class as a function");
                })(this, e);
                var n = (function (t, e) {
                  if (!t)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e && ("object" == typeof e || "function" == typeof e)
                    ? e
                    : t;
                })(
                  this,
                  (e.__proto__ || Object.getPrototypeOf(e)).call(
                    this,
                    "YoutubeAnalytics"
                  )
                );
                return (
                  (n.player = t),
                  (n.apiKey = a),
                  (n.playerLoaded = !1),
                  (n.playbackStarted = !1),
                  (n.contentStarted = !1),
                  (n.isPaused = !1),
                  (n.isBuffering = !1),
                  (n.isSeeking = !1),
                  (n.lastRecordedTime = {
                    timeReported: Date.now(),
                    timeElapsed: 0,
                  }),
                  (n.metadata = [
                    { playback: { video_player: "youtube" }, content: {} },
                  ]),
                  (n.playlistIndex = 0),
                  n
                );
              }
              return (
                (function (t, e) {
                  if ("function" != typeof e && null !== e)
                    throw TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                })(e, t),
                n(e, [
                  {
                    key: "initialize",
                    value: function () {
                      (window.segmentYoutubeOnStateChange =
                        this.onPlayerStateChange.bind(this)),
                        (window.segmentYoutubeOnReady =
                          this.onPlayerReady.bind(this)),
                        this.player.addEventListener(
                          "onReady",
                          "segmentYoutubeOnReady"
                        ),
                        this.player.addEventListener(
                          "onStateChange",
                          "segmentYoutubeOnStateChange"
                        );
                    },
                  },
                  {
                    key: "onPlayerReady",
                    value: function (t) {
                      this.retrieveMetadata();
                    },
                  },
                  {
                    key: "onPlayerStateChange",
                    value: function (t) {
                      var e = this.player.getCurrentTime();
                      switch (
                        (this.metadata[this.playlistIndex] &&
                          ((this.metadata[
                            this.playlistIndex
                          ].playback.position = this.metadata[
                            this.playlistIndex
                          ].content.position =
                            e),
                          (this.metadata[this.playlistIndex].playback.quality =
                            this.player.getPlaybackQuality()),
                          (this.metadata[this.playlistIndex].playback.sound =
                            this.player.isMuted()
                              ? 0
                              : this.player.getVolume())),
                        t.data)
                      ) {
                        case -1:
                          if (this.playerLoaded) break;
                          this.retrieveMetadata(), (this.playerLoaded = !0);
                          break;
                        case YT.PlayerState.BUFFERING:
                          this.handleBuffer();
                          break;
                        case YT.PlayerState.PLAYING:
                          this.handlePlay();
                          break;
                        case YT.PlayerState.PAUSED:
                          this.handlePause();
                          break;
                        case YT.PlayerState.ENDED:
                          this.handleEnd();
                      }
                      this.lastRecordedTime = {
                        timeReported: Date.now(),
                        timeElapsed: 1e3 * this.player.getCurrentTime(),
                      };
                    },
                  },
                  {
                    key: "retrieveMetadata",
                    value: function () {
                      var t = this;
                      return new Promise(function (e, a) {
                        var n = t.player.getVideoData(),
                          r = t.player.getPlaylist() || [n.video_id],
                          s = r.join();
                        (0, i.default)(
                          "https://www.googleapis.com/youtube/v3/videos?id=" +
                            s +
                            "&part=snippet,contentDetails&key=" +
                            t.apiKey
                        )
                          .then(function (t) {
                            if (!t.ok) {
                              var e = Error(
                                "Segment request to Youtube API failed (likely due to a bad API Key. Events will still be sent but will not contain video metadata)"
                              );
                              throw ((e.response = t), e);
                            }
                            return t.json();
                          })
                          .then(function (a) {
                            t.metadata = [];
                            for (var n = 0, i = 0; i < r.length; i++) {
                              var s = a.items[i];
                              t.metadata.push({
                                content: {
                                  title: s.snippet.title,
                                  description: s.snippet.description,
                                  keywords: s.snippet.tags,
                                  channel: s.snippet.channelTitle,
                                  airdate: s.snippet.publishedAt,
                                },
                              }),
                                (n += (function (t) {
                                  var e = t.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
                                  return (
                                    3600 *
                                      (parseInt(
                                        (e = e.slice(1).map(function (t) {
                                          if (null != t)
                                            return t.replace(/\D/, "");
                                        }))[0]
                                      ) || 0) +
                                    60 * (parseInt(e[1]) || 0) +
                                    (parseInt(e[2]) || 0)
                                  );
                                })(s.contentDetails.duration));
                            }
                            for (i = 0; i < r.length; i++)
                              t.metadata[i].playback = {
                                total_length: n,
                                video_player: "youtube",
                              };
                            e();
                          })
                          .catch(function (e) {
                            (t.metadata = r.map(function (t) {
                              return {
                                playback: { video_player: "youtube" },
                                content: {},
                              };
                            })),
                              a(e);
                          });
                      });
                    },
                  },
                  {
                    key: "handleBuffer",
                    value: function () {
                      var t = this.determineSeek();
                      this.playbackStarted ||
                        ((this.playbackStarted = !0),
                        this.track(
                          "Video Playback Started",
                          this.metadata[this.playlistIndex].playback
                        )),
                        t &&
                          !this.isSeeking &&
                          ((this.isSeeking = !0),
                          this.track(
                            "Video Playback Seek Started",
                            this.metadata[this.playlistIndex].playback
                          )),
                        this.isSeeking &&
                          (this.track(
                            "Video Playback Seek Completed",
                            this.metadata[this.playlistIndex].playback
                          ),
                          (this.isSeeking = !1));
                      var e = this.player.getPlaylist();
                      e &&
                        0 === this.player.getCurrentTime() &&
                        this.player.getPlaylistIndex() !== this.playlistIndex &&
                        ((this.contentStarted = !1),
                        this.playlistIndex === e.length - 1 &&
                          0 === this.player.getPlaylistIndex() &&
                          (this.track(
                            "Video Playback Completed",
                            this.metadata[this.player.getPlaylistIndex()]
                              .playback
                          ),
                          this.track(
                            "Video Playback Started",
                            this.metadata[this.player.getPlaylistIndex()]
                              .playback
                          ))),
                        this.track(
                          "Video Playback Buffer Started",
                          this.metadata[this.playlistIndex].playback
                        ),
                        (this.isBuffering = !0);
                    },
                  },
                  {
                    key: "handlePlay",
                    value: function () {
                      this.contentStarted ||
                        ((this.playlistIndex = this.player.getPlaylistIndex()),
                        -1 === this.playlistIndex && (this.playlistIndex = 0),
                        this.track(
                          "Video Content Started",
                          this.metadata[this.playlistIndex].content
                        ),
                        (this.contentStarted = !0)),
                        this.isBuffering &&
                          (this.track(
                            "Video Playback Buffer Completed",
                            this.metadata[this.playlistIndex].playback
                          ),
                          (this.isBuffering = !1)),
                        this.isPaused &&
                          (this.track(
                            "Video Playback Resumed",
                            this.metadata[this.playlistIndex].playback
                          ),
                          (this.isPaused = !1));
                    },
                  },
                  {
                    key: "handlePause",
                    value: function () {
                      var t = this.determineSeek();
                      this.isBuffering &&
                        (this.track(
                          "Video Playback Buffer Completed",
                          this.metadata[this.playlistIndex].playback
                        ),
                        (this.isBuffering = !1)),
                        this.isPaused ||
                          (t
                            ? (this.track(
                                "Video Playback Seek Started",
                                this.metadata[this.playlistIndex].playback
                              ),
                              (this.isSeeking = !0))
                            : (this.track(
                                "Video Playback Paused",
                                this.metadata[this.playlistIndex].playback
                              ),
                              (this.isPaused = !0)));
                    },
                  },
                  {
                    key: "handleEnd",
                    value: function () {
                      this.track(
                        "Video Content Completed",
                        this.metadata[this.playlistIndex].content
                      ),
                        (this.contentStarted = !1);
                      var t = this.player.getPlaylistIndex(),
                        e = this.player.getPlaylist();
                      ((e && t === e.length - 1) || -1 === t) &&
                        (this.track(
                          "Video Playback Completed",
                          this.metadata[this.playlistIndex].playback
                        ),
                        (this.playbackStarted = !1));
                    },
                  },
                  {
                    key: "determineSeek",
                    value: function () {
                      return (
                        Math.abs(
                          (this.isPaused || this.isBuffering
                            ? 0
                            : Date.now() - this.lastRecordedTime.timeReported) -
                            (1e3 * this.player.getCurrentTime() -
                              this.lastRecordedTime.timeElapsed)
                        ) > 2e3
                      );
                    },
                  },
                ]),
                e
              );
            })(r(a(1)).default);
            e.default = s;
          },
        ]));
    },
  },
]);
//# sourceMappingURL=8009.c6c0f36a9a82d8dd.js.map
