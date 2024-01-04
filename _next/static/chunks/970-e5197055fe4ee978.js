"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [970],
  {
    7209: function (t, e, i) {
      var s = (function () {
          if ("undefined" != typeof Map) return Map;
          function t(t, e) {
            var i = -1;
            return (
              t.some(function (t, s) {
                return t[0] === e && ((i = s), !0);
              }),
              i
            );
          }
          return (function () {
            function e() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(e.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (e.prototype.get = function (e) {
                var i = t(this.__entries__, e),
                  s = this.__entries__[i];
                return s && s[1];
              }),
              (e.prototype.set = function (e, i) {
                var s = t(this.__entries__, e);
                ~s
                  ? (this.__entries__[s][1] = i)
                  : this.__entries__.push([e, i]);
              }),
              (e.prototype.delete = function (e) {
                var i = this.__entries__,
                  s = t(i, e);
                ~s && i.splice(s, 1);
              }),
              (e.prototype.has = function (e) {
                return !!~t(this.__entries__, e);
              }),
              (e.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (e.prototype.forEach = function (t, e) {
                void 0 === e && (e = null);
                for (var i = 0, s = this.__entries__; i < s.length; i++) {
                  var n = s[i];
                  t.call(e, n[1], n[0]);
                }
              }),
              e
            );
          })();
        })(),
        n =
          "undefined" != typeof window &&
          "undefined" != typeof document &&
          window.document === document,
        o =
          void 0 !== i.g && i.g.Math === Math
            ? i.g
            : "undefined" != typeof self && self.Math === Math
            ? self
            : "undefined" != typeof window && window.Math === Math
            ? window
            : Function("return this")(),
        r =
          "function" == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(o)
            : function (t) {
                return setTimeout(function () {
                  return t(Date.now());
                }, 1e3 / 60);
              },
        h = [
          "top",
          "right",
          "bottom",
          "left",
          "width",
          "height",
          "size",
          "weight",
        ],
        l = "undefined" != typeof MutationObserver,
        a = (function () {
          function t() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (t, e) {
                var i = !1,
                  s = !1,
                  n = 0;
                function o() {
                  i && ((i = !1), t()), s && l();
                }
                function h() {
                  r(o);
                }
                function l() {
                  var t = Date.now();
                  if (i) {
                    if (t - n < 2) return;
                    s = !0;
                  } else (i = !0), (s = !1), setTimeout(h, 20);
                  n = t;
                }
                return l;
              })(this.refresh.bind(this), 0));
          }
          return (
            (t.prototype.addObserver = function (t) {
              ~this.observers_.indexOf(t) || this.observers_.push(t),
                this.connected_ || this.connect_();
            }),
            (t.prototype.removeObserver = function (t) {
              var e = this.observers_,
                i = e.indexOf(t);
              ~i && e.splice(i, 1),
                !e.length && this.connected_ && this.disconnect_();
            }),
            (t.prototype.refresh = function () {
              this.updateObservers_() && this.refresh();
            }),
            (t.prototype.updateObservers_ = function () {
              var t = this.observers_.filter(function (t) {
                return t.gatherActive(), t.hasActive();
              });
              return (
                t.forEach(function (t) {
                  return t.broadcastActive();
                }),
                t.length > 0
              );
            }),
            (t.prototype.connect_ = function () {
              n &&
                !this.connected_ &&
                (document.addEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.addEventListener("resize", this.refresh),
                l
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (t.prototype.disconnect_ = function () {
              n &&
                this.connected_ &&
                (document.removeEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (t.prototype.onTransitionEnd_ = function (t) {
              var e = t.propertyName,
                i = void 0 === e ? "" : e;
              h.some(function (t) {
                return !!~i.indexOf(t);
              }) && this.refresh();
            }),
            (t.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new t()), this.instance_
              );
            }),
            (t.instance_ = null),
            t
          );
        })(),
        c = function (t, e) {
          for (var i = 0, s = Object.keys(e); i < s.length; i++) {
            var n = s[i];
            Object.defineProperty(t, n, {
              value: e[n],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return t;
        },
        u = function (t) {
          return (t && t.ownerDocument && t.ownerDocument.defaultView) || o;
        },
        p = m(0, 0, 0, 0);
      function d(t) {
        return parseFloat(t) || 0;
      }
      function f(t) {
        for (var e = [], i = 1; i < arguments.length; i++)
          e[i - 1] = arguments[i];
        return e.reduce(function (e, i) {
          return e + d(t["border-" + i + "-width"]);
        }, 0);
      }
      var v =
        "undefined" != typeof SVGGraphicsElement
          ? function (t) {
              return t instanceof u(t).SVGGraphicsElement;
            }
          : function (t) {
              return (
                t instanceof u(t).SVGElement && "function" == typeof t.getBBox
              );
            };
      function m(t, e, i, s) {
        return { x: t, y: e, width: i, height: s };
      }
      var g = (function () {
          function t(t) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = m(0, 0, 0, 0)),
              (this.target = t);
          }
          return (
            (t.prototype.isActive = function () {
              var t = (function (t) {
                if (!n) return p;
                if (v(t)) {
                  var e;
                  return m(0, 0, (e = t.getBBox()).width, e.height);
                }
                return (function (t) {
                  var e = t.clientWidth,
                    i = t.clientHeight;
                  if (!e && !i) return p;
                  var s = u(t).getComputedStyle(t),
                    n = (function (t) {
                      for (
                        var e = {},
                          i = 0,
                          s = ["top", "right", "bottom", "left"];
                        i < s.length;
                        i++
                      ) {
                        var n = s[i],
                          o = t["padding-" + n];
                        e[n] = d(o);
                      }
                      return e;
                    })(s),
                    o = n.left + n.right,
                    r = n.top + n.bottom,
                    h = d(s.width),
                    l = d(s.height);
                  if (
                    ("border-box" === s.boxSizing &&
                      (Math.round(h + o) !== e &&
                        (h -= f(s, "left", "right") + o),
                      Math.round(l + r) !== i &&
                        (l -= f(s, "top", "bottom") + r)),
                    t !== u(t).document.documentElement)
                  ) {
                    var a = Math.round(h + o) - e,
                      c = Math.round(l + r) - i;
                    1 !== Math.abs(a) && (h -= a),
                      1 !== Math.abs(c) && (l -= c);
                  }
                  return m(n.left, n.top, h, l);
                })(t);
              })(this.target);
              return (
                (this.contentRect_ = t),
                t.width !== this.broadcastWidth ||
                  t.height !== this.broadcastHeight
              );
            }),
            (t.prototype.broadcastRect = function () {
              var t = this.contentRect_;
              return (
                (this.broadcastWidth = t.width),
                (this.broadcastHeight = t.height),
                t
              );
            }),
            t
          );
        })(),
        _ = function (t, e) {
          var i,
            s,
            n,
            o,
            r,
            h =
              ((i = e.x),
              (s = e.y),
              (n = e.width),
              (o = e.height),
              c(
                (r = Object.create(
                  ("undefined" != typeof DOMRectReadOnly
                    ? DOMRectReadOnly
                    : Object
                  ).prototype
                )),
                {
                  x: i,
                  y: s,
                  width: n,
                  height: o,
                  top: s,
                  right: i + n,
                  bottom: o + s,
                  left: i,
                }
              ),
              r);
          c(this, { target: t, contentRect: h });
        },
        b = (function () {
          function t(t, e, i) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new s()),
              "function" != typeof t)
            )
              throw TypeError(
                "The callback provided as parameter 1 is not a function."
              );
            (this.callback_ = t),
              (this.controller_ = e),
              (this.callbackCtx_ = i);
          }
          return (
            (t.prototype.observe = function (t) {
              if (!arguments.length)
                throw TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof u(t).Element))
                  throw TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) ||
                  (e.set(t, new g(t)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (t.prototype.unobserve = function (t) {
              if (!arguments.length)
                throw TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof u(t).Element))
                  throw TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) &&
                  (e.delete(t),
                  e.size || this.controller_.removeObserver(this));
              }
            }),
            (t.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (t.prototype.gatherActive = function () {
              var t = this;
              this.clearActive(),
                this.observations_.forEach(function (e) {
                  e.isActive() && t.activeObservations_.push(e);
                });
            }),
            (t.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var t = this.callbackCtx_,
                  e = this.activeObservations_.map(function (t) {
                    return new _(t.target, t.broadcastRect());
                  });
                this.callback_.call(t, e, t), this.clearActive();
              }
            }),
            (t.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (t.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            t
          );
        })(),
        y = "undefined" != typeof WeakMap ? new WeakMap() : new s(),
        w = function t(e) {
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw TypeError("1 argument required, but only 0 present.");
          var i = a.getInstance(),
            s = new b(e, i, this);
          y.set(this, s);
        };
      ["observe", "unobserve", "disconnect"].forEach(function (t) {
        w.prototype[t] = function () {
          var e;
          return (e = y.get(this))[t].apply(e, arguments);
        };
      });
      var S = void 0 !== o.ResizeObserver ? o.ResizeObserver : w;
      e.Z = S;
    },
    9979: function (t, e, i) {
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var s in i)
                  Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
              }
              return t;
            }).apply(this, arguments);
      }
      function n(t, e, i) {
        return Math.max(t, Math.min(e, i));
      }
      i.d(e, {
        Z: function () {
          return a;
        },
      });
      class o {
        advance(t) {
          var e, i, s, o;
          if (!this.isRunning) return;
          let r = !1;
          if (this.lerp)
            (this.value =
              ((i = this.value),
              (s = this.to),
              (1 - (o = 1 - Math.exp(-60 * this.lerp * t))) * i + o * s)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (r = !0));
          else {
            this.currentTime += t;
            let e = n(0, this.currentTime / this.duration, 1);
            r = e >= 1;
            let i = r ? 1 : this.easing(e);
            this.value = this.from + (this.to - this.from) * i;
          }
          null == (e = this.onUpdate) || e.call(this, this.value, r),
            r && this.stop();
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          t,
          e,
          {
            lerp: i = 0.1,
            duration: s = 1,
            easing: n = (t) => t,
            onStart: o,
            onUpdate: r,
          }
        ) {
          (this.from = this.value = t),
            (this.to = e),
            (this.lerp = i),
            (this.duration = s),
            (this.easing = n),
            (this.currentTime = 0),
            (this.isRunning = !0),
            null == o || o(),
            (this.onUpdate = r);
        }
      }
      class r {
        constructor({ wrapper: t, content: e, autoResize: i = !0 } = {}) {
          if (
            ((this.resize = () => {
              this.onWrapperResize(), this.onContentResize();
            }),
            (this.onWrapperResize = () => {
              this.wrapper === window
                ? ((this.width = window.innerWidth),
                  (this.height = window.innerHeight))
                : ((this.width = this.wrapper.clientWidth),
                  (this.height = this.wrapper.clientHeight));
            }),
            (this.onContentResize = () => {
              (this.scrollHeight = this.content.scrollHeight),
                (this.scrollWidth = this.content.scrollWidth);
            }),
            (this.wrapper = t),
            (this.content = e),
            i)
          ) {
            var s;
            let t;
            let e =
              ((s = this.resize),
              function () {
                let e = arguments,
                  i = this;
                clearTimeout(t),
                  (t = setTimeout(function () {
                    s.apply(i, e);
                  }, 250));
              });
            this.wrapper !== window &&
              ((this.wrapperResizeObserver = new ResizeObserver(e)),
              this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(e)),
              this.contentResizeObserver.observe(this.content);
          }
          this.resize();
        }
        destroy() {
          var t, e;
          null == (t = this.wrapperResizeObserver) || t.disconnect(),
            null == (e = this.contentResizeObserver) || e.disconnect();
        }
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      }
      class h {
        constructor() {
          this.events = {};
        }
        emit(t, ...e) {
          let i = this.events[t] || [];
          for (let t = 0, s = i.length; t < s; t++) i[t](...e);
        }
        on(t, e) {
          var i;
          return (
            (null == (i = this.events[t]) ? void 0 : i.push(e)) ||
              (this.events[t] = [e]),
            () => {
              var i;
              this.events[t] =
                null == (i = this.events[t])
                  ? void 0
                  : i.filter((t) => e !== t);
            }
          );
        }
        off(t, e) {
          var i;
          this.events[t] =
            null == (i = this.events[t]) ? void 0 : i.filter((t) => e !== t);
        }
        destroy() {
          this.events = {};
        }
      }
      class l {
        constructor(
          t,
          {
            wheelMultiplier: e = 1,
            touchMultiplier: i = 2,
            normalizeWheel: s = !1,
          }
        ) {
          (this.onTouchStart = (t) => {
            let { clientX: e, clientY: i } = t.targetTouches
              ? t.targetTouches[0]
              : t;
            (this.touchStart.x = e),
              (this.touchStart.y = i),
              (this.lastDelta = { x: 0, y: 0 });
          }),
            (this.onTouchMove = (t) => {
              let { clientX: e, clientY: i } = t.targetTouches
                  ? t.targetTouches[0]
                  : t,
                s = -(e - this.touchStart.x) * this.touchMultiplier,
                n = -(i - this.touchStart.y) * this.touchMultiplier;
              (this.touchStart.x = e),
                (this.touchStart.y = i),
                (this.lastDelta = { x: s, y: n }),
                this.emitter.emit("scroll", { deltaX: s, deltaY: n, event: t });
            }),
            (this.onTouchEnd = (t) => {
              this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: t,
              });
            }),
            (this.onWheel = (t) => {
              let { deltaX: e, deltaY: i } = t;
              this.normalizeWheel &&
                ((e = n(-100, e, 100)), (i = n(-100, i, 100))),
                (e *= this.wheelMultiplier),
                (i *= this.wheelMultiplier),
                this.emitter.emit("scroll", { deltaX: e, deltaY: i, event: t });
            }),
            (this.element = t),
            (this.wheelMultiplier = e),
            (this.touchMultiplier = i),
            (this.normalizeWheel = s),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new h()),
            this.element.addEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.addEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.addEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.addEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
        on(t, e) {
          return this.emitter.on(t, e);
        }
        destroy() {
          this.emitter.destroy(),
            this.element.removeEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.removeEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.removeEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.removeEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
      }
      class a {
        constructor({
          wrapper: t = window,
          content: e = document.documentElement,
          wheelEventsTarget: i = t,
          eventsTarget: n = i,
          smoothWheel: a = !0,
          smoothTouch: c = !1,
          syncTouch: u = !1,
          syncTouchLerp: p = 0.1,
          __iosNoInertiaSyncTouchLerp: d = 0.4,
          touchInertiaMultiplier: f = 35,
          duration: v,
          easing: m = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          lerp: g = !v && 0.1,
          infinite: _ = !1,
          orientation: b = "vertical",
          gestureOrientation: y = "vertical",
          touchMultiplier: w = 1,
          wheelMultiplier: S = 1,
          normalizeWheel: E = !1,
          autoResize: O = !0,
        } = {}) {
          (this.onVirtualScroll = ({ deltaX: t, deltaY: e, event: i }) => {
            if (i.ctrlKey) return;
            let n = i.type.includes("touch"),
              o = i.type.includes("wheel");
            if (
              ("both" === this.options.gestureOrientation &&
                0 === t &&
                0 === e) ||
              ("vertical" === this.options.gestureOrientation && 0 === e) ||
              ("horizontal" === this.options.gestureOrientation && 0 === t) ||
              (n &&
                "vertical" === this.options.gestureOrientation &&
                0 === this.scroll &&
                !this.options.infinite &&
                e <= 0)
            )
              return;
            let r = i.composedPath();
            if (
              (r = r.slice(0, r.indexOf(this.rootElement))).find((t) => {
                var e;
                return (
                  (null == t.hasAttribute
                    ? void 0
                    : t.hasAttribute("data-lenis-prevent")) ||
                  (n &&
                    (null == t.hasAttribute
                      ? void 0
                      : t.hasAttribute("data-lenis-prevent-touch"))) ||
                  (o &&
                    (null == t.hasAttribute
                      ? void 0
                      : t.hasAttribute("data-lenis-prevent-wheel"))) ||
                  (null == (e = t.classList) ? void 0 : e.contains("lenis"))
                );
              })
            )
              return;
            if (this.isStopped || this.isLocked) return void i.preventDefault();
            if (
              ((this.isSmooth =
                ((this.options.smoothTouch || this.options.syncTouch) && n) ||
                (this.options.smoothWheel && o)),
              !this.isSmooth)
            )
              return (this.isScrolling = !1), void this.animate.stop();
            i.preventDefault();
            let h = e;
            "both" === this.options.gestureOrientation
              ? (h = Math.abs(e) > Math.abs(t) ? e : t)
              : "horizontal" === this.options.gestureOrientation && (h = t);
            let l = n && this.options.syncTouch,
              a = n && "touchend" === i.type && Math.abs(h) > 1;
            a && (h = this.velocity * this.options.touchInertiaMultiplier),
              this.scrollTo(
                this.targetScroll + h,
                s(
                  { programmatic: !1 },
                  l && {
                    lerp: a
                      ? this.syncTouchLerp
                      : this.options.__iosNoInertiaSyncTouchLerp,
                  }
                )
              );
          }),
            (this.onScroll = () => {
              if (!this.isScrolling) {
                let t = this.animatedScroll;
                (this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.velocity = 0),
                  (this.direction = Math.sign(this.animatedScroll - t)),
                  this.emit();
              }
            }),
            (window.lenisVersion = "1.0.27"),
            (t !== document.documentElement && t !== document.body) ||
              (t = window),
            (this.options = {
              wrapper: t,
              content: e,
              wheelEventsTarget: i,
              eventsTarget: n,
              smoothWheel: a,
              smoothTouch: c,
              syncTouch: u,
              syncTouchLerp: p,
              __iosNoInertiaSyncTouchLerp: d,
              touchInertiaMultiplier: f,
              duration: v,
              easing: m,
              lerp: g,
              infinite: _,
              gestureOrientation: y,
              orientation: b,
              touchMultiplier: w,
              wheelMultiplier: S,
              normalizeWheel: E,
              autoResize: O,
            }),
            (this.animate = new o()),
            (this.emitter = new h()),
            (this.dimensions = new r({
              wrapper: t,
              content: e,
              autoResize: O,
            })),
            this.toggleClass("lenis", !0),
            (this.velocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isSmooth = u || a || c),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener("scroll", this.onScroll, {
              passive: !1,
            }),
            (this.virtualScroll = new l(n, {
              touchMultiplier: w,
              wheelMultiplier: S,
              normalizeWheel: E,
            })),
            this.virtualScroll.on("scroll", this.onVirtualScroll);
        }
        destroy() {
          this.emitter.destroy(),
            this.options.wrapper.removeEventListener("scroll", this.onScroll, {
              passive: !1,
            }),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.toggleClass("lenis", !1),
            this.toggleClass("lenis-smooth", !1),
            this.toggleClass("lenis-scrolling", !1),
            this.toggleClass("lenis-stopped", !1),
            this.toggleClass("lenis-locked", !1);
        }
        on(t, e) {
          return this.emitter.on(t, e);
        }
        off(t, e) {
          return this.emitter.off(t, e);
        }
        setScroll(t) {
          this.isHorizontal
            ? (this.rootElement.scrollLeft = t)
            : (this.rootElement.scrollTop = t);
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit("scroll", this);
        }
        reset() {
          (this.isLocked = !1),
            (this.isScrolling = !1),
            (this.velocity = 0),
            this.animate.stop();
        }
        start() {
          (this.isStopped = !1), this.reset();
        }
        stop() {
          (this.isStopped = !0), this.animate.stop(), this.reset();
        }
        raf(t) {
          let e = t - (this.time || t);
          (this.time = t), this.animate.advance(0.001 * e);
        }
        scrollTo(
          t,
          {
            offset: e = 0,
            immediate: i = !1,
            lock: s = !1,
            duration: o = this.options.duration,
            easing: r = this.options.easing,
            lerp: h = !o && this.options.lerp,
            onComplete: l = null,
            force: a = !1,
            programmatic: c = !0,
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || a) {
            if (["top", "left", "start"].includes(t)) t = 0;
            else if (["bottom", "right", "end"].includes(t)) t = this.limit;
            else {
              var u;
              let i;
              if (
                ("string" == typeof t
                  ? (i = document.querySelector(t))
                  : null != (u = t) && u.nodeType && (i = t),
                i)
              ) {
                if (this.options.wrapper !== window) {
                  let t = this.options.wrapper.getBoundingClientRect();
                  e -= this.isHorizontal ? t.left : t.top;
                }
                let s = i.getBoundingClientRect();
                t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
              }
            }
            if ("number" == typeof t) {
              if (
                ((t += e),
                (t = Math.round(t)),
                this.options.infinite
                  ? c && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (t = n(0, t, this.limit)),
                i)
              )
                return (
                  (this.animatedScroll = this.targetScroll = t),
                  this.setScroll(this.scroll),
                  this.reset(),
                  void (null == l || l(this))
                );
              if (!c) {
                if (t === this.targetScroll) return;
                this.targetScroll = t;
              }
              this.animate.fromTo(this.animatedScroll, t, {
                duration: o,
                easing: r,
                lerp: h,
                onStart: () => {
                  s && (this.isLocked = !0), (this.isScrolling = !0);
                },
                onUpdate: (t, e) => {
                  (this.isScrolling = !0),
                    (this.velocity = t - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = t),
                    this.setScroll(this.scroll),
                    c && (this.targetScroll = t),
                    e || this.emit(),
                    e &&
                      requestAnimationFrame(() => {
                        this.reset(), this.emit(), null == l || l(this);
                      });
                },
              });
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === window
            ? this.options.content
            : this.options.wrapper;
        }
        get limit() {
          return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
        get isHorizontal() {
          return "horizontal" === this.options.orientation;
        }
        get actualScroll() {
          return this.isHorizontal
            ? this.rootElement.scrollLeft
            : this.rootElement.scrollTop;
        }
        get scroll() {
          var t;
          return this.options.infinite
            ? ((this.animatedScroll % (t = this.limit)) + t) % t
            : this.animatedScroll;
        }
        get progress() {
          return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isSmooth() {
          return this.__isSmooth;
        }
        set isSmooth(t) {
          this.__isSmooth !== t &&
            ((this.__isSmooth = t), this.toggleClass("lenis-smooth", t));
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(t) {
          this.__isScrolling !== t &&
            ((this.__isScrolling = t), this.toggleClass("lenis-scrolling", t));
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(t) {
          this.__isStopped !== t &&
            ((this.__isStopped = t), this.toggleClass("lenis-stopped", t));
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(t) {
          this.__isLocked !== t &&
            ((this.__isLocked = t), this.toggleClass("lenis-locked", t));
        }
        get className() {
          let t = "lenis";
          return (
            this.isStopped && (t += " lenis-stopped"),
            this.isLocked && (t += " lenis-locked"),
            this.isScrolling && (t += " lenis-scrolling"),
            this.isSmooth && (t += " lenis-smooth"),
            t
          );
        }
        toggleClass(t, e) {
          this.rootElement.classList.toggle(t, e),
            this.emitter.emit("className change", this);
        }
      }
    },
    1577: function (t, e, i) {
      i.d(e, {
        H: function () {
          return p;
        },
      });
      var s = i(3972);
      let n = (t) => "object" == typeof t && t.mix,
        o = (t) => (n(t) ? t.mix : void 0);
      var r = i(1687),
        h = i(3617),
        l = i(2972);
      function a(t, e) {
        let i = (0, r.c)(e()),
          s = () => i.set(e());
        return (
          s(),
          (0, h.L)(() => {
            let e = () => l.Wi.update(s, !1, !0),
              i = t.map((t) => t.on("change", e));
            return () => {
              i.forEach((t) => t()), (0, l.Pn)(s);
            };
          }),
          i
        );
      }
      var c = i(3105),
        u = i(226);
      function p(t, e, i, n) {
        if ("function" == typeof t)
          return (function (t) {
            (u.S1.current = []), t();
            let e = a(u.S1.current, t);
            return (u.S1.current = void 0), e;
          })(t);
        let r =
          "function" == typeof e
            ? e
            : (function (...t) {
                let e = !Array.isArray(t[0]),
                  i = e ? 0 : -1,
                  n = t[0 + i],
                  r = t[1 + i],
                  h = t[2 + i],
                  l = t[3 + i],
                  a = (0, s.s)(r, h, { mixer: o(h[0]), ...l });
                return e ? a(n) : a;
              })(e, i, n);
        return Array.isArray(t) ? d(t, r) : d([t], ([t]) => r(t));
      }
      function d(t, e) {
        let i = (0, c.h)(() => []);
        return a(t, () => {
          i.length = 0;
          let s = t.length;
          for (let e = 0; e < s; e++) i[e] = t[e].get();
          return e(i);
        });
      }
    },
  },
]);
