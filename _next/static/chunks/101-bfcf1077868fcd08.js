"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [101],
  {
    2260: function (e, t, i) {
      i.d(t, {
        F: function () {
          return a;
        },
        Z: function () {
          return n;
        },
      });
      var s = i(686);
      let n = new s.Z(),
        a = {
          WEBGL_ASSET_LOADED: "WEBGL_ASSET_LOADED",
          WEBGL_ASSET_LOAD_ERROR: "WEBGL_ASSET_LOAD_ERROR",
        };
    },
    3197: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return j;
          },
        });
      var s,
        n = i(686);
      class a extends n.v {
        _bind() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          for (let e of t) {
            if (!this[e])
              throw Error("The function ".concat(e, " is not defined"));
            this[e] = this[e].bind(this);
          }
        }
      }
      var r = i(9477);
      class o extends a {
        tick() {
          let e = this._clock.getElapsedTime();
          (this.delta = e - this.elapsed),
            (this.elapsed = e),
            this.emit("tick", this.elapsed, this.delta),
            (this.rafId = window.requestAnimationFrame(this.tick));
        }
        destroy() {
          window.cancelAnimationFrame(this.rafId);
        }
        constructor() {
          super(),
            (this._clock = new r.SUY()),
            (this.start = this._clock.startTime),
            (this.elapsed = 0),
            (this.delta = 0.06),
            this._bind("tick"),
            (this.rafId = window.requestAnimationFrame(this.tick));
        }
      }
      (s || (s = {})).JUMP = "jump";
      var h = i(2260),
        l = i(7836),
        d = i(2854),
        c = JSON.parse('[{"key":"ascii","url":"/images/ascii.png"}]');
      let m = new r.dpR(),
        u = new l.E(),
        p = new d._();
      p.setDecoderPath("/draco/"), u.setDRACOLoader(p);
      let g = (e) => RegExp("^.*\\.(".concat(e, ")$"), "i"),
        w = g("jpg|png|gif"),
        v = g("gltf|glb"),
        f = g("dow"),
        y = g("json"),
        b = g("mp4"),
        M = function (e) {
          let t = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
            i = new Uint8Array(e.slice(0, 8));
          for (let e = 0; e < 8; e++) if (i[e] !== t[e]) return !1;
          return !0;
        },
        E = function (e) {
          let t = new Uint8Array([255, 216]),
            i = new Uint8Array(e.slice(0, 2));
          for (let e = 0; e < 2; e++) if (i[e] !== t[e]) return !1;
          return !0;
        },
        S = function (e) {
          let t = new Uint8Array([0, 0, 0, 24]),
            i = new Uint8Array([0, 0, 0, 32]),
            s = new Uint8Array([102, 116, 121, 112]),
            n = new Uint8Array(e.slice(0, 4));
          for (let e = 0; e < 4; e++)
            if (n[e] !== t[e] && n[e] !== i[e] && n[e] !== s[e]) return !1;
          return !0;
        };
      class L {
        init() {
          return this.loadInitialManifest(c);
        }
        loadInitialManifest(e) {
          return new Promise((t, i) => {
            this.loadManifest(e, "global").then(
              () => {
                t();
              },
              () => {
                i();
              }
            );
          });
        }
        loadManifest(e, t) {
          let i = e.map(
            (e) =>
              new Promise((i, s) => {
                let n = () => {
                    i();
                  },
                  a = () => {},
                  o = (e) => {
                    s();
                  };
                if (y.test(e.url))
                  this.loadJSON(e.url).then((e) => {
                    this.loadManifest(e, t).then(i, s);
                  });
                else if (w.test(e.url)) {
                  if (e.preloadOnly) {
                    let t = new Image();
                    (t.src = e.url.split("?")[0]),
                      (t.onload = (e) => {
                        i();
                      }),
                      (t.onerror = (e) => {
                        s();
                      });
                  } else
                    this.getTexture(e.key)
                      ? i()
                      : m.load(
                          e.url.split("?")[0],
                          (i) => {
                            this.addTexture(e.key, i, t), n();
                          },
                          a,
                          o
                        );
                } else if (b.test(e.url)) {
                  this.getVideo(e.key) && i();
                  let n = document.createElement("video");
                  (n.preload = "auto"),
                    (n.loop = !0),
                    (n.src = e.url.split("?")[0]),
                    (n.onloadedmetadata = () => {
                      this.addVideo(e.key, n, t), i();
                    }),
                    (n.onerror = s);
                } else if (v.test(e.url))
                  this.getModel(e.key)
                    ? i()
                    : u.load(
                        e.url.split("?")[0],
                        (i) => {
                          let s = 1024;
                          (i.scene.userData.hasAnimations =
                            i.animations.length > 0),
                            (i.scene.userData.isDraco =
                              void 0 !==
                              i.parser.extensions.KHR_draco_mesh_compression),
                            i.parser.associations.forEach((e, t) => {
                              t.isTexture &&
                                (s = Math.max(
                                  s,
                                  t.source.data.width,
                                  t.source.data.height
                                ));
                            }),
                            (i.scene.userData.biggestTexture = s),
                            this.addAnimations(e.key, i.animations, t),
                            this.addModel(e.key, i.scene, t),
                            n();
                        },
                        a,
                        o
                      );
                else if (f.test(e.url)) {
                  let h = new r.hH6();
                  h.setResponseType("arraybuffer"),
                    h.load(
                      e.url,
                      (a) => {
                        let h = a.slice(0, a.byteLength - 100),
                          l = a.slice(a.byteLength - 100),
                          d = new ArrayBuffer(h.byteLength + l.byteLength),
                          c = new Uint8Array(h),
                          m = new Uint8Array(l),
                          p = new Uint8Array(d);
                        if (
                          (p.set(m, 0), p.set(c, l.byteLength), M(p) || E(p))
                        ) {
                          M(p)
                            ? (e.key = e.key.replace(".dow", ".png"))
                            : E(p) && (e.key = e.key.replace(".dow", ".jpg"));
                          let a = new Blob([p]),
                            o = URL.createObjectURL(a),
                            h = new Image();
                          (h.onload = () => {
                            let s = new r.xEZ(h);
                            this.addTexture(e.key, s, t), n(), i();
                          }),
                            (h.onerror = (e) => {
                              s();
                            }),
                            (h.src = o);
                        } else if (S(p)) {
                          e.key = e.key.replace(".dow", ".mp4");
                          let n = new Blob([p], { type: "video/mp4" }),
                            a = URL.createObjectURL(n),
                            r = document.createElement("video");
                          (r.preload = "auto"),
                            (r.src = a),
                            (r.loop = !0),
                            (r.onloadedmetadata = () => {
                              this.addVideo(e.key, r, t), i();
                            }),
                            (r.onerror = s);
                        } else {
                          let s = new TextDecoder(),
                            a = s.decode(p);
                          a.includes("glTF") &&
                            ((e.key = e.key.replace("dow", "glb")),
                            u.parse(
                              p.buffer,
                              "",
                              (s) => {
                                let a = 1024;
                                (s.scene.userData.hasAnimations =
                                  s.animations.length > 0),
                                  (s.scene.userData.isDraco =
                                    void 0 !==
                                    s.parser.extensions
                                      .KHR_draco_mesh_compression),
                                  s.parser.associations.forEach((e, t) => {
                                    t.isTexture &&
                                      (a = Math.max(
                                        a,
                                        t.source.data.width,
                                        t.source.data.height
                                      ));
                                  }),
                                  (s.scene.userData.biggestTexture = a),
                                  this.addModel(e.key, s.scene, t),
                                  n(),
                                  i();
                              },
                              o
                            ));
                        }
                      },
                      a,
                      o
                    );
                }
              })
          );
          return Promise.all(i).then(
            () => {},
            (e) => {
              throw Error("Could not load all assets." + (e || ""));
            }
          );
        }
        loadJSON(e) {
          return new Promise((t, i) => {
            let s = new XMLHttpRequest();
            s.overrideMimeType("application/json"),
              s.open("GET", e, !0),
              (s.onreadystatechange = function () {
                if (4 === s.readyState && 200 === s.status) {
                  if ("" != s.responseText && "{}" !== s.responseText)
                    try {
                      let e = JSON.parse(s.responseText);
                      t(e);
                    } catch (t) {
                      throw Error("Non parsable json manifest: " + e);
                    }
                  else i();
                }
              }),
              (s.onerror = () => {
                i();
              }),
              s.send(null);
          });
        }
        add(e, t, i, s) {
          this.libraries[i].has(e) ||
            (this.namespaceWeakMap.set(t, s), this.libraries[i].set(e, t));
        }
        get(e, t) {
          return this.libraries[t].has(e) ? this.libraries[t].get(e) : void 0;
        }
        addTexture(e, t, i) {
          this.add(e, t, "texture", i);
        }
        getTexture(e) {
          return this.get(e, "texture");
        }
        removeTexture(e) {
          if (this.libraries.texture.has(e)) {
            let t = this.getTexture(e);
            null == t || t.dispose(), this.libraries.texture.delete(e);
          }
        }
        addVideo(e, t, i) {
          let s = new r.fO1(t);
          this.add(e, s, "video", i);
        }
        getVideo(e) {
          return this.get(e, "video");
        }
        removeVideo(e) {
          if (this.libraries.video.has(e)) {
            let t = this.getVideo(e);
            null == t || t.source.data.pause(),
              (t.source.data.src = ""),
              t.source.data.load(),
              null == t || t.source.data.remove(),
              this.libraries.video.delete(e);
          }
        }
        preloadVideo(e) {
          let { key: t, url: i, namespace: s } = e;
          return new Promise((e, n) => {
            let a = document.createElement("video");
            (a.preload = "auto"),
              (a.src = i),
              (a.onloadedmetadata = () => e(a)),
              (a.onerror = n),
              this.addVideo(t, a, s || "global");
          });
        }
        addModel(e, t, i) {
          this.add(e, t, "model", i);
        }
        getModel(e) {
          return this.get(e, "model");
        }
        removeModel(e) {
          if (this.libraries.model.has(e)) {
            let t = this.libraries.model.get(e);
            if (t) {
              let e = [];
              for (
                t.traverse((t) => {
                  e.push(t);
                }),
                  e.forEach((e) => {
                    e.material &&
                      (Object.keys(e.material).forEach((t) => {
                        e.material[t] &&
                          null !== e.material[t] &&
                          "function" == typeof e.material[t].dispose &&
                          e.material[t].dispose();
                      }),
                      e.material.dispose()),
                      e.geometry && e.geometry.dispose();
                  });
                t.children.length > 0;

              )
                t.remove(t.children[0]);
            }
            this.libraries.model.delete(e);
          }
        }
        addAnimations(e, t, i) {
          this.add(e, t, "animation", i);
        }
        getAnimations(e) {
          return this.get(e, "animation");
        }
        removeAnimations(e) {
          this.libraries.animation.has(e) && this.libraries.animation.delete(e);
        }
        addCameras(e, t, i) {
          this.add(e, t, "camera", i);
        }
        getCameras(e) {
          return this.get(e, "camera");
        }
        removeCameras(e) {
          this.libraries.camera.has(e) && this.libraries.camera.delete(e);
        }
        addMaterial(e, t) {
          this.libraries.material.has(e), this.libraries.material.set(e, t);
        }
        getMaterial(e) {
          return this.libraries.material.get(e);
        }
        removeMaterial(e) {
          if (this.libraries.material.has(e)) {
            let t = this.libraries.material.get(e);
            t.dispose(), this.libraries.material.delete(e);
          }
        }
        unloadManifest(e) {
          e.forEach((e) => {
            this.removeTexture(e.key), this.removeModel(e.key);
          });
        }
        unloadNamespace(e) {
          let t = [];
          this.libraries.texture.forEach((i, s) => {
            this.namespaceWeakMap.has(i) &&
              this.namespaceWeakMap.get(i) === e &&
              (t.push(s), this.namespaceWeakMap.delete(i));
          }),
            t.forEach((e) => {
              this.removeTexture(e);
            });
          let i = [];
          this.libraries.model.forEach((t, s) => {
            this.namespaceWeakMap.has(t) &&
              this.namespaceWeakMap.get(t) === e &&
              (i.push(s), this.namespaceWeakMap.delete(t));
          }),
            i.forEach((e) => {
              this.removeModel(e);
            });
          let s = [];
          this.libraries.animation.forEach((t, i) => {
            this.namespaceWeakMap.has(t) &&
              this.namespaceWeakMap.get(t) === e &&
              (s.push(i), this.namespaceWeakMap.delete(t));
          }),
            s.forEach((e) => {
              this.removeAnimations(e);
            });
        }
        constructor() {
          (this.libraries = {
            texture: new Map(),
            model: new Map(),
            animation: new Map(),
            material: new Map(),
            camera: new Map(),
            video: new Map(),
          }),
            (this.namespaceWeakMap = new WeakMap());
        }
      }
      let k = "quality-changed",
        T = "high";
      class x extends n.Z {
        _onVisibilityChange() {
          document.hidden || (this.lastFrameHidden = !0);
        }
        addFrame(e) {
          if (this.lastFrameHidden) {
            this.lastFrameHidden = !1;
            return;
          }
          this.frames++, (this.elapsedTime += e);
        }
        readQualityFromFrames() {
          let e;
          let t = this.getAverageFPS();
          return (
            (e = t < 40 ? "low" : T) !== this.quality &&
              ((this.quality = e), this.emit(k, this.quality)),
            this.quality
          );
        }
        getAverageFPS() {
          return this.frames / (0.001 * this.elapsedTime);
        }
        get isHighQuality() {
          return this.quality === T;
        }
        get isLowQuality() {
          return "low" === this.quality;
        }
        clear() {
          (this.frames = 0), (this.elapsedTime = 0);
        }
        constructor() {
          super(),
            (this.frames = 0),
            (this.elapsedTime = 0),
            (this.quality = T),
            (this.lastFrameHidden = !1),
            (this._onVisibilityChange = this._onVisibilityChange.bind(this)),
            document.addEventListener(
              "visibilitychange",
              this._onVisibilityChange
            );
        }
      }
      class z extends a {
        addEventListeners() {
          this.element.addEventListener("contextmenu", (e) =>
            e.preventDefault()
          ),
            this.element.addEventListener("mousedown", this.onDown, !1),
            this.element.addEventListener("mouseup", this.onUp, !1),
            this.element.addEventListener("mousemove", this.onMove, !1),
            this.element.addEventListener("touchstart", this.onDown, !1),
            this.element.addEventListener("touchend", this.onUp, !1),
            this.element.addEventListener("touchmove", this.onMove, {
              passive: !1,
            }),
            this.element.addEventListener("click", this.onClick, !1),
            this.element.addEventListener(
              "touchstart",
              this.removeMouseEventListeners,
              !1
            );
        }
        removeEventListeners() {
          this.element.removeEventListener("mousedown", this.onDown, !1),
            this.element.removeEventListener("mouseup", this.onUp, !1),
            this.element.removeEventListener("mousemove", this.onMove, !1),
            this.element.removeEventListener("touchstart", this.onDown, !1),
            this.element.removeEventListener("touchend", this.onUp, !1),
            this.element.removeEventListener("touchmove", this.onMove, !1),
            this.element.removeEventListener("click", this.onClick, !1),
            this.element.removeEventListener(
              "touchstart",
              this.removeMouseEventListeners,
              !1
            );
        }
        removeMouseEventListeners() {
          this.element.removeEventListener("mousedown", this.onDown, !1),
            this.element.removeEventListener("mouseup", this.onUp, !1),
            this.element.removeEventListener("mousemove", this.onMove, !1),
            this.element.removeEventListener(
              "touchstart",
              this.removeMouseEventListeners,
              !1
            );
        }
        onDown(e) {
          let { clientX: t, clientY: i } = e.changedTouches
            ? e.changedTouches[0]
            : e;
          (this.position.x = this.normalizeX(t - this.sizes.left)),
            (this.position.y = -this.normalizeY(i - this.sizes.top)),
            (this.gesture.startX = t),
            (this.gesture.startY = i),
            (this.gesture.startTime = this.time.elapsed),
            (this.isDown = !0),
            this.emit("down");
        }
        onMove(e) {
          e.preventDefault(), (this.isTouchMove = void 0 !== e.changedTouches);
          let { clientX: t, clientY: i } = e.changedTouches
            ? e.changedTouches[0]
            : e;
          (this.position.x = this.normalizeX(t - this.sizes.left)),
            (this.position.y = -this.normalizeY(i - this.sizes.top)),
            (this.position.x !== this.lastPosition.x ||
              this.position.y !== this.lastPosition.y) &&
              (this.hasMoved = !0),
            this.lastPosition.copy(this.position),
            this.emit("move");
        }
        onUp(e) {
          let { clientX: t, clientY: i } =
            e.changedTouches && e.changedTouches.length > 0
              ? e.changedTouches[0]
              : e;
          if (
            ((this.position.x = this.normalizeX(t - this.sizes.left)),
            (this.position.y = -this.normalizeY(i - this.sizes.top)),
            (this.isDown = !1),
            this.emit("up"),
            this.time.elapsed >
              this.gesture.startTime + this.swipeLimits.timeMS)
          )
            return;
          let s = t - this.gesture.startX,
            n = i - this.gesture.startY,
            a = Math.abs(s / n),
            r = Math.abs(n / s);
          Math.abs(a > r ? s : n) < this.swipeLimits.distance ||
            (a > r
              ? Math.sign(s) >= 0
                ? this.emit("swipeRight")
                : this.emit("swipeLeft")
              : Math.sign(n) >= 0
              ? this.emit("swipeDown")
              : this.emit("swipeUp"));
        }
        onClick() {
          this.emit("click");
        }
        normalizeX(e) {
          return (e / this.sizes.width) * 2 - 1;
        }
        normalizeY(e) {
          return (e / this.sizes.height) * 2 - 1;
        }
        destroy() {
          this.removeEventListeners();
        }
        constructor(e) {
          super(),
            (this.position = new r.FM8()),
            (this.lastPosition = new r.FM8()),
            (this.isDown = !1),
            (this.gesture = { startX: 0, startY: 0, startTime: 0 }),
            (this.isTouchMove = !1),
            (this.swipeLimits = { timeMS: 300, distance: 50 }),
            (this.hasMoved = !1),
            (this.element = e);
          let t = new j();
          (this.sizes = t.sizes),
            (this.time = t.time),
            this._bind(
              "onDown",
              "onUp",
              "onMove",
              "removeMouseEventListeners",
              "onClick"
            ),
            this.addEventListeners();
        }
      }
      let P = new r.Pa4(),
        R = new r.Pa4(),
        A = new r.Pa4(),
        C = (e) => e && e.isOrthographicCamera;
      class _ extends a {
        registerElement(e) {
          var t;
          (this.el = e),
            null === (t = this.el.parentElement) ||
              void 0 === t ||
              t.addEventListener("resize", this.onResize),
            (this.resizeObserver = new ResizeObserver(this.onResize)),
            this.resizeObserver.observe(this.el);
        }
        clearElementReference() {
          this.el = void 0;
        }
        onResize() {
          if (this.el)
            (this.currentRect = this.el.getBoundingClientRect()),
              (this.width = Math.ceil(this.currentRect.width)),
              (this.height = Math.ceil(this.currentRect.height)),
              (this.top = Math.ceil(this.currentRect.top)),
              (this.left = Math.ceil(this.currentRect.left)),
              clearTimeout(this.retryTimeout),
              (this.retryTimeout = window.setTimeout(() => {
                let e = this.el;
                if (!e) return;
                let t = e.getBoundingClientRect();
                (this.currentRect.width !== t.width ||
                  this.currentRect.height !== t.height) &&
                  ((this.currentRect = t), this.onResize());
              }, 100));
          else {
            (this.width = window.innerWidth),
              (this.height = window.innerHeight),
              (this.left = 0),
              (this.top = 0);
            return;
          }
          (this.aspectRatio = this.width / this.height),
            (this.pixelRatio = Math.min(window.devicePixelRatio, 2)),
            this.emit("resize"),
            h.Z.emit("resize");
        }
        getCurrentViewport(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : R,
            i = this.width / this.height;
          t instanceof r.Pa4 ? A.copy(t) : A.set(...t);
          let s = e.getWorldPosition(P).distanceTo(A);
          if (C(e))
            return {
              width: this.width / e.zoom,
              height: this.height / e.zoom,
              factor: 1,
              distance: s,
              aspect: i,
            };
          {
            let t = (e.fov * Math.PI) / 180,
              n = 2 * Math.tan(t / 2) * s,
              a = n * (this.width / this.height);
            return {
              width: a,
              height: n,
              factor: this.width / a,
              distance: s,
              aspect: i,
            };
          }
        }
        destroy() {
          window.removeEventListener("resize", this.onResize),
            window.removeEventListener("orientationchange", this.onResize, !1),
            clearTimeout(this.retryTimeout),
            this.resizeObserver &&
              this.el &&
              this.resizeObserver.unobserve(this.el);
        }
        constructor() {
          super(),
            (this.retryTimeout = 0),
            (this.width = window.innerWidth),
            (this.height = window.innerHeight),
            (this.aspectRatio = this.width / this.height),
            (this.pixelRatio = Math.min(window.devicePixelRatio, 2)),
            this._bind("onResize"),
            window.addEventListener("resize", this.onResize),
            window.addEventListener("orientationchange", this.onResize, !1);
        }
      }
      let D = null;
      class F {
        async init() {
          this.isActive && (await this.loadTweakpane(), await this.loadStats());
        }
        async loadStats() {
          let e = (await i.e(929).then(i.t.bind(i, 1929, 23))).default;
          (this.libs["stats.js"] = e),
            (this.stats = this.libs["stats.js"]()),
            this.stats.showPanel(0),
            (this.showFPS = !0),
            document.body.appendChild(this.stats.dom);
        }
        async loadTweakpane() {
          let e = (await i.e(596).then(i.bind(i, 7302))).Pane;
          (this.libs.tweakpane = e), this.createPane();
        }
        createPane() {
          this.pane = new this.libs.tweakpane({
            title: "Settings",
            expanded: !1,
            container: this.tweakPaneElement,
          });
        }
        beginFPSmeasure() {
          this.stats.begin();
        }
        endFPSmeasure() {
          this.stats.end();
        }
        reset() {
          if (this.isActive) {
            try {
              var e;
              null === (e = this.tweakPaneElement.parentNode) ||
                void 0 === e ||
                e.removeChild(this.tweakPaneElement),
                this.pane.dispose();
            } catch (e) {}
            this.createPane();
          }
        }
        destroy() {
          if (
            (this.stats && document.body.removeChild(this.stats.dom),
            (D = null),
            this.isActive)
          ) {
            this.tweakPaneElement.parentNode &&
              this.tweakPaneElement.parentNode.removeChild(
                this.tweakPaneElement
              );
            try {
              this.pane.dispose();
            } catch (e) {}
          }
        }
        constructor() {
          if (
            ((this.libs = { tweakpane: void 0, "stats.js": void 0 }),
            (this.isActive = !1),
            (this.showFPS = !1),
            (this.stats = void 0),
            (this.pane = void 0),
            (this.params = {}),
            D)
          )
            return D.reset(), D;
          (D = this), (this.tweakPaneElement = document.createElement("div"));
          let e = new URLSearchParams(window.location.search),
            t = Object.fromEntries(e.entries());
          (this.params = (function (e) {
            let t = {};
            for (let s in e) {
              var i;
              t[s] =
                (Number.isNaN(Number((i = e[s]))) ||
                "string" != typeof i ||
                "" === i.trim()
                  ? null !== i &&
                    ("true" === i.toLowerCase() ||
                      "false" === i.toLowerCase()) &&
                    (i = "true" === i.toLowerCase())
                  : (i = Number(i)),
                i);
            }
            return t;
          })(t)),
            (this.isActive =
              this.params.hasOwnProperty("debug") &&
              "false" !== this.params.debug);
        }
      }
      var O = i(2794);
      let U = new Map([
        [
          O.xs.LandingPage,
          {
            id: O.xs.LandingPage,
            assetsManifest: [
              {
                key: "landing-pattern.png",
                url: "/images/landingpage-pattern.png",
              },
              { key: "logo-v1.png", url: "/images/logo-v1.png" },
            ],
            component: async () =>
              (await i.e(535).then(i.bind(i, 5535))).default,
          },
        ],
        [
          O.xs.GlitchScene,
          {
            id: O.xs.GlitchScene,
            assetsManifest: [],
            component: async () =>
              (await Promise.all([i.e(514), i.e(912)]).then(i.bind(i, 3912)))
                .default,
          },
        ],
        [
          O.xs.Map,
          {
            id: O.xs.Map,
            assetsManifest: [
              { key: "city", url: "/models/city4.glb" },
              { key: "cityascii", url: "/images/city-ascii.png" },
              { key: "waterglyph", url: "/images/waterglyph.png" },
              { key: "mapascii", url: "/images/mapascii.png" },
              { key: "nodataascii", url: "/images/nodata.png" },
            ],
            component: async () =>
              (await Promise.all([i.e(739), i.e(62)]).then(i.bind(i, 7062)))
                .default,
          },
        ],
      ]);
      class N extends a {
        get activeSceneId() {
          var e;
          return null === (e = this.activeSceneConfig) || void 0 === e
            ? void 0
            : e.id;
        }
        async init(e) {
          await this.transitionToNewScene(e);
        }
        async transitionToNewScene(e) {
          let { component: t, ...i } = this.scenes.get(e);
          if (((this.nextSceneName = e), this.activeScene)) {
            var s;
            await this.activeScene.beforeTransitionOut(),
              await this.activeScene.transitionOut(),
              await this.activeScene.afterTransitionOut(),
              !1 ==
                !!(null === (s = this.activeSceneConfig) || void 0 === s
                  ? void 0
                  : s.keepAlive) &&
                (this.activeScene.dispose(),
                (this.activeScene = null),
                (this.activeSceneConfig = null));
          }
          this.emit("sceneLoadBegin"), (this.loading = !0);
          let n = await t(),
            a = new n(i);
          (this.activeScene = a), (this.activeSceneConfig = i);
          try {
            await this.activeScene.init();
          } catch (e) {
            console.error(e);
          }
          this.emit("sceneLoadEnd"),
            (this.loading = !1),
            await this.activeScene.beforeTransitionIn(),
            await this.activeScene.transitionIn(),
            await this.activeScene.afterTransitionIn();
        }
        update(e, t) {
          this.activeScene.update(e, t);
        }
        resize() {
          this.activeScene.camera &&
            ((this.activeScene.camera.aspect =
              this.experience.sizes.aspectRatio),
            this.activeScene.camera.updateProjectionMatrix());
        }
        constructor() {
          super(),
            (this.scenes = U),
            (this.activeSceneConfig = null),
            (this.loading = !1),
            (this.nextSceneName = ""),
            (this.experience = new j());
        }
      }
      var W = i(6635);
      let B = null;
      class j extends a {
        async init() {
          this.debug.isActive && (await this.debug.init()),
            await this.assetManager.init(),
            await this.sceneManager.init(W.h.getState().scene),
            this.emit("ready"),
            this.time.on("tick", this.update),
            this.performanceMonitor.on(k, this.onPerformanceQualityChanged),
            (this.unsubscribeToStoreFunction = W.h.subscribe(
              this.onStoreStateChanged
            ));
        }
        resize() {
          this.sceneManager.resize();
        }
        update(e, t) {
          this.debug.showFPS && this.debug.beginFPSmeasure(),
            this.sceneManager.loading || this.sceneManager.update(e, t),
            this.debug.showFPS && this.debug.endFPSmeasure(),
            this.emit("postUpdate");
        }
        onPerformanceQualityChanged(e) {}
        onStoreStateChanged(e) {
          e.scene !== this.sceneManager.nextSceneName &&
            this.sceneManager.transitionToNewScene(e.scene);
        }
        onSceneManagerSceneLoadBegin() {
          W.h.setState({ isLoading: !0 });
        }
        onSceneManagerSceneLoadEnd() {
          this.sizes.onResize(), W.h.setState({ isLoading: !1 });
        }
        destroy() {
          this.unsubscribeToStoreFunction && this.unsubscribeToStoreFunction(),
            this.pointer.destroy(),
            this.debug.destroy(),
            this.sizes.off("resize"),
            this.time.off("tick"),
            this.sceneManager.activeScene &&
              "function" == typeof this.sceneManager.activeScene.dispose &&
              (this.sceneManager.activeScene.dispose(),
              (this.sceneManager.activeScene = null)),
            this.sizes.destroy(),
            this.time.destroy(),
            (B = null);
        }
        get scene() {
          return this.sceneManager.activeScene.scene;
        }
        get camera() {
          return this.sceneManager.activeScene.camera;
        }
        constructor() {
          if ((super(), (this.isPaused = !1), B)) return B;
          (B = this), (this.sizes = new _()), (this.time = new o());
          let e = document.getElementById("webglInputElement");
          (this.pointer = new z(e)),
            (this.assetManager = new L()),
            (this.sceneManager = new N()),
            (this.performanceMonitor = new x()),
            (this.debug = new F()),
            this._bind(
              "resize",
              "update",
              "onPerformanceQualityChanged",
              "onStoreStateChanged",
              "onSceneManagerSceneLoadBegin",
              "onSceneManagerSceneLoadEnd"
            ),
            this.sizes.on("resize", this.resize),
            this.sceneManager.on(
              "sceneLoadBegin",
              this.onSceneManagerSceneLoadBegin
            ),
            this.sceneManager.on(
              "sceneLoadEnd",
              this.onSceneManagerSceneLoadEnd
            );
        }
      }
    },
  },
]);
