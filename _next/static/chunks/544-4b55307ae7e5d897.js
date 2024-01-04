"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [544],
  {
    1544: function (t, e, n) {
      n.d(e, {
        j: function () {
          return q;
        },
      });
      var l,
        a = n(7035);
      function r(t, e, n) {
        var l;
        if ("string" == typeof t) {
          let r = document;
          e &&
            ((0, a.k)(!!e.current, "Scope provided, but no element detected."),
            (r = e.current)),
            n
              ? ((null !== (l = n[t]) && void 0 !== l) ||
                  (n[t] = r.querySelectorAll(t)),
                (t = n[t]))
              : (t = r.querySelectorAll(t));
        } else t instanceof Element && (t = [t]);
        return Array.from(t || []);
      }
      var i = n(6578),
        s = n(2972),
        u = n(9907);
      let o = (0, u.X)(() => void 0 !== window.ScrollTimeline);
      class h {
        constructor(t) {
          this.animations = t.filter(Boolean);
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let n = 0; n < this.animations.length; n++)
            this.animations[n][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!o() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let n;
                  let l = () => {
                    let { currentTime: l } = e,
                      a = null === l ? 0 : l.value,
                      r = a / 100;
                    n !== r && t(r), (n = r);
                  };
                  return s.Wi.update(l, !0), () => (0, s.Pn)(l);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        stop() {
          this.runAll("stop");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      var f = n(3715),
        c = n(8650),
        p = n(3384),
        m = n(4422),
        d = n(4197),
        y = n(7047),
        g = n(779),
        A = n(1429),
        v = n(5254),
        w = n(4125),
        k = n(7475),
        b = n(5815);
      function M(t, e, n, l) {
        var a;
        return "number" == typeof e
          ? e
          : e.startsWith("-") || e.startsWith("+")
          ? Math.max(0, t + parseFloat(e))
          : "<" === e
          ? n
          : null !== (a = l.get(e)) && void 0 !== a
          ? a
          : t;
      }
      let E = (t, e, n) => {
        let l = e - t;
        return ((((n - t) % l) + l) % l) + t;
      };
      var S = n(9554),
        x = n(4866),
        C = n(5339);
      function N(t, e) {
        return t.at !== e.at
          ? t.at - e.at
          : null === t.value
          ? 1
          : null === e.value
          ? -1
          : 0;
      }
      function O(t, e) {
        return e.has(t) || e.set(t, {}), e.get(t);
      }
      function T(t, e) {
        return e[t] || (e[t] = []), e[t];
      }
      let W = (t) => "number" == typeof t,
        _ = (t) => t.every(W);
      function R(t, e, n, l) {
        let s = r(t, l),
          u = s.length;
        (0, a.k)(!!u, "No valid element provided.");
        let o = [];
        for (let t = 0; t < u; t++) {
          let l = s[t];
          i.R.has(l) ||
            (function (t) {
              let e = {
                  presenceContext: null,
                  props: {},
                  visualState: {
                    renderState: {
                      transform: {},
                      transformOrigin: {},
                      style: {},
                      vars: {},
                      attrs: {},
                    },
                    latestValues: {},
                  },
                },
                n = (0, c.v)(t)
                  ? new p.e(e, { enableHardwareAcceleration: !1 })
                  : new m.W(e, { enableHardwareAcceleration: !0 });
              n.mount(t), i.R.set(t, n);
            })(l);
          let a = i.R.get(l),
            r = { ...n };
          "function" == typeof r.delay && (r.delay = r.delay(t, u)),
            o.push(...(0, f.w)(a, { ...e, transition: r }, {}));
        }
        return new h(o);
      }
      let j = (t) => Array.isArray(t) && Array.isArray(t[0]),
        q = function (t, e, n) {
          let a;
          return (
            (a = j(t)
              ? (function (t, e, n) {
                  let l = [],
                    a = (function (
                      t,
                      { defaultTransition: e = {}, ...n } = {},
                      l
                    ) {
                      let a = e.duration || 0.3,
                        i = new Map(),
                        s = new Map(),
                        u = {},
                        o = new Map(),
                        h = 0,
                        f = 0,
                        c = 0;
                      for (let n = 0; n < t.length; n++) {
                        let i = t[n];
                        if ("string" == typeof i) {
                          o.set(i, f);
                          continue;
                        }
                        if (!Array.isArray(i)) {
                          o.set(i.name, M(f, i.at, h, o));
                          continue;
                        }
                        let [p, m, d = {}] = i;
                        void 0 !== d.at && (f = M(f, d.at, h, o));
                        let k = 0,
                          N = (t, n, l, r = 0, i = 0) => {
                            let s = Array.isArray(t) ? t : [t],
                              {
                                delay: u = 0,
                                times: o = (0, v.Y)(s),
                                type: h = "keyframes",
                                ...p
                              } = n,
                              { ease: m = e.ease || "easeOut", duration: d } =
                                n,
                              b = "function" == typeof u ? u(r, i) : u,
                              M = s.length;
                            if (M <= 2 && "spring" === h) {
                              let t = 100;
                              if (2 === M && _(s)) {
                                let e = s[1] - s[0];
                                t = Math.abs(e);
                              }
                              let e = { ...p };
                              void 0 !== d && (e.duration = (0, A.w)(d));
                              let n = (function (t, e = 100) {
                                let n = (0, y.S)({ keyframes: [0, e], ...t }),
                                  l = Math.min((0, g.i)(n), g.E);
                                return {
                                  type: "keyframes",
                                  ease: (t) => n.next(l * t).value / e,
                                  duration: (0, A.X)(l),
                                };
                              })(e, t);
                              (m = n.ease), (d = n.duration);
                            }
                            null != d || (d = a);
                            let N = f + b,
                              O = N + d;
                            1 === o.length && 0 === o[0] && (o[1] = 1);
                            let T = o.length - s.length;
                            T > 0 && (0, w.c)(o, T),
                              1 === s.length && s.unshift(null),
                              (function (t, e, n, l, a, r) {
                                !(function (t, e, n) {
                                  for (let l = 0; l < t.length; l++) {
                                    let a = t[l];
                                    a.at > e &&
                                      a.at < n &&
                                      ((0, x.cl)(t, a), l--);
                                  }
                                })(t, a, r);
                                for (let s = 0; s < e.length; s++) {
                                  var i;
                                  t.push({
                                    value: e[s],
                                    at: (0, C.C)(a, r, l[s]),
                                    easing:
                                      ((i = s),
                                      (0, S.N)(n) ? n[E(0, n.length, i)] : n),
                                  });
                                }
                              })(l, s, m, o, N, O),
                              (k = Math.max(b + d, k)),
                              (c = Math.max(O, c));
                          };
                        if ((0, b.i)(p)) {
                          let t = O(p, s);
                          N(m, d, T("default", t));
                        } else {
                          let t = r(p, l, u),
                            e = t.length;
                          for (let n = 0; n < e; n++) {
                            let l = t[n],
                              a = O(l, s);
                            for (let t in m)
                              N(
                                m[t],
                                d[t] ? { ...d, ...d[t] } : { ...d },
                                T(t, a),
                                n,
                                e
                              );
                          }
                          (h = f), (f += k);
                        }
                      }
                      return (
                        s.forEach((t, l) => {
                          for (let a in t) {
                            let r = t[a];
                            r.sort(N);
                            let s = [],
                              u = [],
                              o = [];
                            for (let t = 0; t < r.length; t++) {
                              let { at: e, value: n, easing: l } = r[t];
                              s.push(n),
                                u.push((0, k.Y)(0, c, e)),
                                o.push(l || "easeOut");
                            }
                            0 !== u[0] &&
                              (u.unshift(0),
                              s.unshift(s[0]),
                              o.unshift("easeInOut")),
                              1 !== u[u.length - 1] &&
                                (u.push(1), s.push(null)),
                              i.has(l) ||
                                i.set(l, { keyframes: {}, transition: {} });
                            let h = i.get(l);
                            (h.keyframes[a] = s),
                              (h.transition[a] = {
                                ...e,
                                duration: c,
                                ease: o,
                                times: u,
                                ...n,
                              });
                          }
                        }),
                        i
                      );
                    })(t, e, n);
                  return (
                    a.forEach(({ keyframes: t, transition: e }, n) => {
                      let a;
                      (a = (0, b.i)(n)
                        ? (0, d.D)(n, t.default, e.default)
                        : R(n, t, e)),
                        l.push(a);
                    }),
                    new h(l)
                  );
                })(t, e, l)
              : "object" != typeof e || Array.isArray(e)
              ? (0, d.D)(t, e, n)
              : R(t, e, n, l)),
            l && l.animations.push(a),
            a
          );
        };
    },
  },
]);
