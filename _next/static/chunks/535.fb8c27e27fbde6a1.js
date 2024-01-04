"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [535],
  {
    2182: function (e, t, i) {
      i.d(t, {
        D: function () {
          return s;
        },
      });
      let s = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
        return new Promise((t) => {
          setTimeout(t, e);
        });
      };
    },
    4552: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return h;
        },
        h: function () {
          return n;
        },
      });
      var s,
        n,
        a = i(9477),
        o = i(6090),
        r = i(3197),
        l = i(2001);
      ((s = n || (n = {})).Image = "image"),
        (s.Video = "video"),
        (s.Model = "model"),
        (s.PointCloud = "pointcloud");
      class h {
        applySettingsFromJSON(e) {
          Object.keys(e).forEach((t) => {
            void 0 !== this.defaultSettings[t] && (this.settings[t] = e[t]);
          }),
            (this.isActive = this.settings.display),
            this.applySettings(),
            this.parseChannels();
          for (let e = 0; e < 4; e++)
            this.channelsTimelines[e].time(-1),
              this.channelsTimelines[e].time(0.01);
        }
        setMask(e) {}
        async setSource(e) {}
        setSourceTextureAspect(e) {}
        update(e, t) {}
        getSettingsDiff() {
          let e = {};
          return (
            Object.keys(this.settings).forEach((t) => {
              JSON.stringify(this.settings[t]) !==
                JSON.stringify(this.defaultSettings[t]) &&
                (e[t] = this.settings[t]);
            }),
            e
          );
        }
        getAllSettingsKeys() {
          return Object.keys(this.defaultSettings);
        }
        createUI() {
          this.resetSettings(),
            this.isDebug &&
              (this.settingsFolder.on("change", () => {
                this.applySettings();
              }),
              this.settingsFolder
                .addBinding(this.settings, "solo")
                .on("change", () => {
                  this.settings.solo &&
                    this.settingsUI.onSettingsSolo.invoke(this.settingsType);
                }));
        }
        parseChannels() {
          this.channelsTimelines.forEach((e) => e.clear());
          for (let e = 1; e < 5; e++) {
            if (
              void 0 === this.settings["channel" + e] ||
              "" === this.settings["channel" + e]
            )
              continue;
            let t = this.settings["channel" + e].replaceAll(" ", "").split(",");
            "" !== t[0] &&
              t.forEach((t) => {
                let i = t.split(":");
                if (i[0].includes(".")) {
                  let t = i[0].split("."),
                    s = t[0],
                    n = t[1],
                    a = i[1].split(">"),
                    o = a.length,
                    r = 1 / o;
                  a.forEach((t, i) => {
                    void 0 !== this.settings[s] &&
                      (0 === i
                        ? this.channelsTimelines[e - 1].to(
                            this.settings[s],
                            { [n]: t, duration: 0 },
                            0
                          )
                        : this.channelsTimelines[e - 1].to(
                            this.settings[s],
                            { [n]: t, duration: r },
                            (i - 1) * r
                          ));
                  });
                } else {
                  let t = i[0],
                    s = i[1].split(">"),
                    n = s.length,
                    a = 1 / (n - 1);
                  s.forEach((i, s) => {
                    void 0 !== this.settings[t] &&
                      (0 === s
                        ? this.channelsTimelines[e - 1].to(
                            this.settings,
                            { [t]: i, duration: 0 },
                            0
                          )
                        : this.channelsTimelines[e - 1].to(
                            this.settings,
                            { [t]: i, duration: a },
                            (s - 1) * a
                          ));
                  });
                }
              });
          }
        }
        updateChannelTimeline(e, t) {
          this.channelsTimelines[e].time(0),
            this.channelsTimelines[e].time(Math.floor(25 * t) / 25 + 0.01);
        }
        getAssetType(e) {
          return e.includes("png") || e.includes("jpg")
            ? n.Image
            : e.includes("mp4")
            ? n.Video
            : e.includes("glb")
            ? n.Model
            : e.includes("ply")
            ? n.PointCloud
            : void 0;
        }
        destroy() {
          this.settingsUI.onSettingsReset.remove(this.resetSettings),
            this.settingsUI.onSettingsUpdated.removeAll(),
            this.settingsUI.onSettingsSolo.remove(this.handleSettingsSolo),
            this.settingsFolder &&
              (this.settingsFolder.children.forEach((e) => {
                e.dispose();
              }),
              this.settingsFolder.dispose());
        }
        resize(e) {}
        constructor(e = { name: "No name", settingsType: o.a.None }) {
          (this.name = ""),
            (this.settingsType = o.a.None),
            (this.isActive = !1),
            (this.group = new a.ZAu()),
            (this.lookAtCamera = !1),
            (this.settings = {}),
            (this.channelsTimelines = []),
            (this.applySettings = () => {}),
            (this.resetSettings = () => {
              let e = JSON.parse(JSON.stringify(this.defaultSettings));
              (this.isActive = !1),
                (this.settings.channel1 = ""),
                (this.settings.channel2 = ""),
                (this.settings.channel3 = ""),
                (this.settings.channel4 = ""),
                (this.settings = Object.assign(this.settings, e)),
                this.parseChannels(),
                this.applySettings();
            }),
            (this.handleSettingsSolo = (e) => {
              this.settingsType === e
                ? ((this.settingsFolder.title = "SOLO: " + this.name),
                  (this.settings.display = !0),
                  (this.settings.displayOverride = !0))
                : ((this.settingsFolder.title = this.name),
                  (this.settings.displayOverride = !1),
                  (this.settings.solo = !1),
                  this.settingsFolder.refresh()),
                this.applySettings();
            }),
            (this.assetManager = new r.default().assetManager),
            (this.settingsUI = new o.Z()),
            (this.name = e.name),
            (this.settingsType = e.settingsType),
            (this.channelsTimelines = []);
          for (let e = 0; e < 4; e++)
            this.channelsTimelines.push(
              l.ZP.timeline({
                paused: !0,
                duration: 1,
                onUpdate: () => {
                  this.applySettings();
                },
              })
            );
          let t = new r.default();
          (this.isDebug = t.debug.isActive),
            this.isDebug &&
              (this.settingsFolder = t.debug.pane.addFolder({
                title: this.name,
                expanded: !1,
              })),
            this.settingsUI.onSettingsReset.add(this.resetSettings),
            this.settingsUI.onSettingsSolo.add(this.handleSettingsSolo),
            this.settingsUI.onSettingsUpdated.add((e) => {
              e.type === this.settingsType &&
                this.applySettingsFromJSON(e.settings);
            });
        }
      }
    },
    5535: function (e, t, i) {
      i.r(t),
        i.d(t, {
          IMAGES_FOLDER: function () {
            return I;
          },
          MODELS_PATH: function () {
            return k;
          },
          VIDEOS_FOLDER: function () {
            return F;
          },
          default: function () {
            return q;
          },
        });
      var s,
        n,
        a,
        o,
        r = i(1322),
        l = i(9477),
        h = i(4210),
        c = i(4458),
        d = i(7531);
      let u = {
        uniforms: {
          tDiffuse: { type: "t", value: 0, texture: null },
          tAscii: { type: "t", value: 0, texture: null },
          posterizeGamma: { value: 0.3 },
          posterizeColors: { value: 21 },
          asciiAmount: { value: 0 },
          asciiUvSize: { value: 1 },
          resolution: {
            value: new l.FM8(window.innerWidth, window.innerHeight),
          },
          time: { value: 0 },
          verticalPixelSmudgeAmount: { value: 0 },
          verticalPixelSmudgeStepUp: { value: 200 },
          verticalPixelSmudgeStepDown: { value: 1e3 },
          horisontalPixelSmudgeAmount: { value: 0 },
          horisontalPixelSmudgeStepUp: { value: 20 },
          horisontalPixelSmudgeStepDown: { value: 20 },
          invertAmount: { value: 0 },
          globalStrength: { value: 0 },
          hsvCorrection: { value: new l.Pa4(1, 1, 1) },
          scrollAmount: { value: 0 },
          scanlinesAmount: { value: 0 },
          saturation: { value: 1 },
        },
        vertexShader:
          "\n    varying vec2 vUv;\n    //varying vec2 screenPosition;\n\n    void main() {\n\n      vUv = vec2( uv.x, uv.y );\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n    }\n  ",
        fragmentShader:
          "\n    precision highp float;\n\n    uniform sampler2D tDiffuse;\n    uniform sampler2D tAscii;\n    uniform float asciiAmount;\n    uniform float asciiUvSize;\n    uniform float posterizeColors;\n    uniform float posterizeGamma;\n    uniform float time;\n    uniform float globalStrength;\n    uniform float verticalPixelSmudgeAmount;\n    uniform float verticalPixelSmudgeStepUp;\n    uniform float verticalPixelSmudgeStepDown;\n    uniform float horisontalPixelSmudgeAmount;\n    uniform float horisontalPixelSmudgeStepUp;\n    uniform float horisontalPixelSmudgeStepDown;\n    uniform vec2 resolution;\n    varying vec2 vUv;\n    uniform vec3 hsvCorrection;\n    uniform float invertAmount;\n    uniform float scrollAmount;\n    uniform float scanlinesAmount;\n\n\n    vec4 posterize(vec4 inputColor){\n      float gamma = posterizeGamma;\n      float numColors = max(1.0,posterizeColors);\n\n      vec3 c = inputColor.rgb;\n      c = pow(c, vec3(gamma, gamma, gamma));\n      c = c * numColors;\n      c = floor(c);\n      c = c / numColors;\n      c = pow(c, vec3(1.0/gamma));\n\n      return vec4(c, inputColor.a);\n    }\n\n    vec3 rgb2hsv(vec3 c)\n    {\n        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n        float d = q.x - min(q.w, q.y);\n        float e = 1.0e-10;\n        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n    }\n\n    vec3 hsv2rgb(vec3 c)\n    {\n        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n    }\n\n    float random(vec2 c){\n      return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);\n    }\n\n    vec3 mod289(vec3 x) {\n      return x - floor(x * (1.0 / 289.0)) * 289.0;\n    }\n\n    vec4 mod289(vec4 x) {\n      return x - floor(x * (1.0 / 289.0)) * 289.0;\n    }\n\n    vec4 permute(vec4 x) {\n          return mod289(((x*34.0)+1.0)*x);\n    }\n\n    vec4 taylorInvSqrt(vec4 r)\n    {\n      return 1.79284291400159 - 0.85373472095314 * r;\n    }\n\n    float snoise3(vec3 v)\n      {\n      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n    // First corner\n      vec3 i  = floor(v + dot(v, C.yyy) );\n      vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n    // Other corners\n      vec3 g = step(x0.yzx, x0.xyz);\n      vec3 l = 1.0 - g;\n      vec3 i1 = min( g.xyz, l.zxy );\n      vec3 i2 = max( g.xyz, l.zxy );\n\n      //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n      //   x1 = x0 - i1  + 1.0 * C.xxx;\n      //   x2 = x0 - i2  + 2.0 * C.xxx;\n      //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n      vec3 x1 = x0 - i1 + C.xxx;\n      vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n      vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n    // Permutations\n      i = mod289(i);\n      vec4 p = permute( permute( permute(\n                  i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n    // Gradients: 7x7 points over a square, mapped onto an octahedron.\n    // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n      float n_ = 0.142857142857; // 1.0/7.0\n      vec3  ns = n_ * D.wyz - D.xzx;\n\n      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n      vec4 x_ = floor(j * ns.z);\n      vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n      vec4 x = x_ *ns.x + ns.yyyy;\n      vec4 y = y_ *ns.x + ns.yyyy;\n      vec4 h = 1.0 - abs(x) - abs(y);\n\n      vec4 b0 = vec4( x.xy, y.xy );\n      vec4 b1 = vec4( x.zw, y.zw );\n\n      //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n      //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n      vec4 s0 = floor(b0)*2.0 + 1.0;\n      vec4 s1 = floor(b1)*2.0 + 1.0;\n      vec4 sh = -step(h, vec4(0.0));\n\n      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n      vec3 p0 = vec3(a0.xy,h.x);\n      vec3 p1 = vec3(a0.zw,h.y);\n      vec3 p2 = vec3(a1.xy,h.z);\n      vec3 p3 = vec3(a1.zw,h.w);\n\n    //Normalise gradients\n      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n      p0 *= norm.x;\n      p1 *= norm.y;\n      p2 *= norm.z;\n      p3 *= norm.w;\n\n    // Mix final noise value\n      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n      m = m * m;\n      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                    dot(p2,x2), dot(p3,x3) ) );\n      }\n\n    void main() {\n      float strength = globalStrength;\n\n      vec2 scaledUv = vUv;\n\n      vec3 originalColor = texture2D(tDiffuse, vUv).rgb;\n\n      scaledUv = vUv;\n\n      //Shuffle\n      float shuffleAmount = 1.0;\n      float tileSizeBase = asciiUvSize;\n      float gridSizeX = floor(resolution.x/tileSizeBase);\n      float gridSizeY = floor(resolution.y/tileSizeBase);\n\n      float positionInTileX = mod(scaledUv.x,1.0 / gridSizeX);\n      float positionInTileY = mod(scaledUv.y,1.0 / gridSizeY);\n\n      float tileX = floor(scaledUv.x * gridSizeX);\n      float tileY = floor(scaledUv.y * gridSizeY);\n\n      float rnd = random(vec2(tileX+time*0.0001,tileY));\n      float offsetTileX = floor( mod(rnd,1.0) * 2.0);\n      float offsetTileY = floor( mod(rnd,1.0) * 2.0);\n\n      //keep in center\n      offsetTileX *= 1.0 - 2.0 * step(0.5, mod(random(vec2(tileX,tileY)),1.0));\n      offsetTileY *= 1.0 - 2.0 * step(0.5, mod(random(vec2(tileX,tileY)),1.0));\n\n      float shuffledX = (tileX + offsetTileX)/gridSizeX + positionInTileX;\n      float shuffledY = (tileY + offsetTileY)/gridSizeY + positionInTileY;\n\n      vec2 shuffledUv = mix(vUv,vec2(shuffledX, shuffledY), shuffleAmount);\n\n      //too much?\n      float colorDistance = 1.0-smoothstep(0.0,0.3,distance(vec3(0.4,0.0,0.4), originalColor));\n      scaledUv.y *= 1.0+colorDistance*0.1;\n\n      vec4 asciiTexel = texture2D(tAscii,shuffledUv*vec2(gridSizeX/16.0,gridSizeY/16.0));\n\n      vec2 distortedUv = vUv;\n      distortedUv.y += random(vec2(floor(vUv.x*verticalPixelSmudgeStepUp)/verticalPixelSmudgeStepUp,0.0)) * 0.1 * verticalPixelSmudgeAmount * globalStrength * (originalColor.r+0.3);\n      distortedUv.y -= random(vec2(floor(vUv.x*verticalPixelSmudgeStepDown)/verticalPixelSmudgeStepDown,0.0)) * 0.1 * verticalPixelSmudgeAmount * globalStrength * (originalColor.b+0.3);\n\n      distortedUv.x += random(vec2(floor(vUv.y*horisontalPixelSmudgeStepUp)/horisontalPixelSmudgeStepUp,0.0)) * 0.1 * horisontalPixelSmudgeAmount * globalStrength * (originalColor.r+0.3);\n      distortedUv.x -= random(vec2(floor(vUv.y*horisontalPixelSmudgeStepDown)/horisontalPixelSmudgeStepDown,0.0)) * 0.1 * horisontalPixelSmudgeAmount * globalStrength * (originalColor.b+0.3);\n\n      //distortedUv.x += random(vec2(vUv.y,0.0)) * 0.1 * horisontalPixelSmudgeAmount * globalStrength * originalColor.r;\n      //distortedUv.x -= random(vec2(floor(vUv.y*100.0)/100.0,0.0)) * 0.1 * horisontalPixelSmudgeAmount * globalStrength * originalColor.b;\n\n      //shuffledUv.y += random(vec2(floor(vUv.x * verticalPixelSmudgeStepUp)/verticalPixelSmudgeStepUp,0.0));\n\n      //extra effect while rotating camera\n      //distortedUv.y += random(vec2(floor(vUv.x * verticalPixelSmudgeStepUp)/verticalPixelSmudgeStepUp,0.0))*scrollAmount*0.05;\n\n      vec4 texel = mix(texture2D( tDiffuse, distortedUv), texture2D( tDiffuse, shuffledUv) , asciiAmount * step(0.8,(asciiTexel.r+asciiTexel.g+asciiTexel.b)*0.33));\n\n      gl_FragColor = LinearTosRGB(texel);\n      gl_FragColor = posterize(gl_FragColor);\n      gl_FragColor.a = 1.0;\n\n      //color correction\n      vec3 fragHSV = rgb2hsv(gl_FragColor.rgb);\n\n      fragHSV.xyz *= hsvCorrection.xyz;\n\n      gl_FragColor.rgb = hsv2rgb(fragHSV);\n\n      gl_FragColor.rgb = mix(gl_FragColor.rgb,1.0-gl_FragColor.rgb, invertAmount);\n\n      float density = 2.0;\n      vec2 sl = vec2(sin(vUv.x * resolution.x * density), cos(vUv.y * resolution.y * density * 0.5 + fract(time*0.6)*3.14));\n	    float scanlines = step(0.8, sl.y) + step(0.8, sl.x);\n      gl_FragColor.rgb -= scanlines*0.05*scanlinesAmount;\n\n    }\n  ",
      };
      var m = i(6090),
        g = i(3197),
        v = i(2001),
        f = i(6635);
      class p {
        applySettingsFromJSON(e) {
          Object.keys(e).forEach((t) => {
            void 0 !== this.defaultSettings[t] && (this.settings[t] = e[t]);
          }),
            this.applySettings(),
            this.parseChannels();
        }
        getSettingsDiff() {
          let e = {};
          return (
            Object.keys(this.settings).forEach((t) => {
              JSON.stringify(this.settings[t]) !==
                JSON.stringify(this.defaultSettings[t]) &&
                (e[t] = this.settings[t]);
            }),
            e
          );
        }
        createUI() {
          let e = new g.default();
          e.debug.isActive &&
            ((this.settingsFolder = this.settingsUI.pane.addFolder({
              title: "Post FX",
              expanded: !1,
            })),
            this.settingsFolder.on("change", () => {
              this.applySettings();
            }),
            this.settingsFolder.addBinding(
              this.settings,
              "verticalPixelSmudgeAmount",
              { min: 0, max: 120 }
            ),
            this.settingsFolder.addBinding(
              this.settings,
              "verticalPixelSmudgeStepUp",
              { min: 10, max: 2e3 }
            ),
            this.settingsFolder.addBinding(
              this.settings,
              "verticalPixelSmudgeStepDown",
              { min: 10, max: 2e3 }
            ),
            this.settingsFolder.addBinding(
              this.settings,
              "horisontalPixelSmudgeAmount",
              { min: 0, max: 120 }
            ),
            this.settingsFolder.addBinding(
              this.settings,
              "horisontalPixelSmudgeStepUp",
              { min: 10, max: 2e3 }
            ),
            this.settingsFolder.addBinding(
              this.settings,
              "horisontalPixelSmudgeStepDown",
              { min: 10, max: 2e3 }
            ),
            this.settingsFolder.addBinding(this.settings, "asciiAmount", {
              min: 0,
              max: 1,
            }),
            this.settingsFolder.addBinding(this.settings, "asciiUvSize", {
              min: 6,
              max: 50,
              step: 1,
            }),
            this.settingsFolder.addBinding(this.settings, "posterizeColors", {
              min: 2,
              max: 255,
              step: 1,
            }),
            this.settingsFolder.addBinding(this.settings, "posterizeGamma", {
              min: 0.1,
              max: 1,
            }),
            this.settingsFolder.addBinding(this.settings, "hsvCorrection", {
              min: 0,
              max: 2,
            }));
        }
        updateChannelTimeline(e, t) {
          this.blockIncomingChannels ||
            (this.channelsTimelines[e].time(0),
            this.channelsTimelines[e].time(t + 0.01),
            this.applySettings(),
            (this.currentChannelAmount[e] = t));
        }
        setSceneAndCamera(e, t) {
          (this.scene = e),
            (this.camera = t),
            (this.renderPass.camera = t),
            (this.renderPass.scene = e);
        }
        setProgress(e) {
          this.compositingPass.uniforms.globalStrength.value = e;
        }
        setSaturation(e) {
          (this.compositingPass.uniforms.hsvCorrection.value.z =
            1 - 0.8 * (1 - e)),
            (this.compositingPass.uniforms.hsvCorrection.value.y = e);
        }
        applySettings() {
          (this.compositingPass.uniforms.globalStrength.value =
            this.settingsUI.shared.globalStrength),
            (this.compositingPass.uniforms.verticalPixelSmudgeAmount.value =
              this.settings.verticalPixelSmudgeAmount),
            (this.compositingPass.uniforms.verticalPixelSmudgeStepUp.value =
              this.settings.verticalPixelSmudgeStepUp),
            (this.compositingPass.uniforms.verticalPixelSmudgeStepDown.value =
              this.settings.verticalPixelSmudgeStepDown),
            (this.compositingPass.uniforms.horisontalPixelSmudgeAmount.value =
              this.settings.horisontalPixelSmudgeAmount),
            (this.compositingPass.uniforms.horisontalPixelSmudgeStepUp.value =
              this.settings.horisontalPixelSmudgeStepUp),
            (this.compositingPass.uniforms.horisontalPixelSmudgeStepDown.value =
              this.settings.horisontalPixelSmudgeStepDown),
            (this.compositingPass.uniforms.asciiAmount.value =
              this.settings.asciiAmount),
            (this.compositingPass.uniforms.asciiUvSize.value =
              this.settings.asciiUvSize),
            (this.compositingPass.uniforms.posterizeColors.value =
              this.settings.posterizeColors),
            (this.compositingPass.uniforms.posterizeGamma.value =
              this.settings.posterizeGamma),
            (this.compositingPass.uniforms.invertAmount.value =
              this.settings.invertAmount),
            (this.compositingPass.uniforms.scanlinesAmount.value =
              this.settings.scanlinesAmount);
        }
        reset() {}
        render(e, t) {
          (this.compositingPass.uniforms.time.value = e),
            (this.compositingPass.uniforms.verticalPixelSmudgeAmount.value =
              this.settings.verticalPixelSmudgeAmount),
            (this.compositingPass.uniforms.horisontalPixelSmudgeAmount.value =
              this.settings.horisontalPixelSmudgeAmount +
              this.extraGlitch *
                this.settings.randomGlitchHorisontalPixelSmudgeAmount),
            this.genericComposer.render(t),
            this.renderer.setRenderTarget(null);
        }
        setMask(e) {}
        resize(e, t) {
          this.genericComposer.setSize(e, t),
            this.compositingPass.uniforms.resolution.value.set(e, t);
        }
        startGlitchTimeline() {
          this.glitchTimeline && this.glitchTimeline.kill(),
            (this.glitchTimeline = v.ZP.timeline({ duration: 7, repeat: -1 })),
            this.glitchTimeline.call(() => {
              (this.settings.horisontalPixelSmudgeStepUp =
                10 + 4 * Math.random()),
                (this.settings.horisontalPixelSmudgeStepDown =
                  14 + 5 * Math.random()),
                (this.settings.randomGlitchHorisontalPixelSmudgeAmount =
                  1 + 2 * Math.random()),
                (this.compositingPass.uniforms.horisontalPixelSmudgeStepUp.value =
                  this.settings.horisontalPixelSmudgeStepUp),
                (this.compositingPass.uniforms.horisontalPixelSmudgeStepDown.value =
                  this.settings.horisontalPixelSmudgeStepDown);
            }, 0),
            this.glitchTimeline.to(this, { extraGlitch: 1, duration: 0 }, 2),
            this.glitchTimeline.to(
              this,
              { extraGlitch: 0, duration: 0.2, ease: "steps(3)" },
              2.05
            );
        }
        stopGlitchTimeline() {
          (this.settings.randomGlitchHorisontalPixelSmudgeAmount = 0),
            (this.settings.verticalPixelSmudgeStepUp = 10),
            (this.settings.verticalPixelSmudgeStepDown = 53),
            (this.compositingPass.uniforms.verticalPixelSmudgeStepUp.value =
              this.settings.verticalPixelSmudgeStepUp),
            (this.compositingPass.uniforms.verticalPixelSmudgeStepDown.value =
              this.settings.verticalPixelSmudgeStepDown),
            this.glitchTimeline && this.glitchTimeline.kill(),
            (this.extraGlitch = 0);
        }
        setScrollAmount(e) {
          this.compositingPass.uniforms.scrollAmount.value = e > 0.01 ? 1 : 0;
        }
        dispose() {
          f.h.getState().api.trigger.remove(this.onTrigger),
            this.glitchTimeline && this.glitchTimeline.kill(),
            this.settingsFolder &&
              (this.settingsFolder.children.forEach((e) => {
                e.dispose();
              }),
              this.settingsFolder.dispose());
        }
        constructor(e) {
          (this.channelsTimelines = []),
            (this.scene = {}),
            (this.camera = {}),
            (this.currentChannelAmount = [0, 0, 0, 0]),
            (this.blockIncomingChannels = !1),
            (this.extraGlitch = 0),
            (this.isDecryptionMode = !1),
            (this.parseChannels = () => {
              this.channelsTimelines.forEach((e) => e.clear());
              for (let e = 1; e < 5; e++) {
                if (void 0 === this.settings["channel" + e]) continue;
                let t = this.settings["channel" + e]
                  .replaceAll(" ", "")
                  .split(",");
                "" !== t[0] &&
                  t.forEach((t) => {
                    let i = t.split(":");
                    if (i[0].includes(".")) {
                      let t = i[0].split("."),
                        s = t[0],
                        n = t[1],
                        a = i[1].split(">"),
                        o = a.length,
                        r = 1 / o;
                      a.forEach((t, i) => {
                        void 0 !== this.settings[s] &&
                          (0 === i
                            ? this.channelsTimelines[e - 1].to(
                                this.settings[s],
                                { [n]: t, duration: 0 },
                                0
                              )
                            : this.channelsTimelines[e - 1].to(
                                this.settings[s],
                                { [n]: t, duration: r },
                                (i - 1) * r
                              ));
                      });
                    } else {
                      let t = i[0],
                        s = i[1].split(">"),
                        n = s.length,
                        a = 1 / n;
                      s.forEach((i, s) => {
                        void 0 !== this.settings[t] &&
                          (0 === s
                            ? this.channelsTimelines[e - 1].to(
                                this.settings,
                                { [t]: i, duration: 0 },
                                0
                              )
                            : this.channelsTimelines[e - 1].to(
                                this.settings,
                                { [t]: i, duration: a },
                                (s - 1) * a
                              ));
                      });
                    }
                  });
              }
            }),
            (this.onTrigger = (e) => {}),
            (this.settingsUI = new m.Z()),
            (this.renderer = e),
            f.h.getState().api;
          for (let e = 0; e < 4; e++)
            this.channelsTimelines.push(
              v.ZP.timeline({ paused: !0, duration: 1 })
            );
          (this.renderTargetGeneric = new l.dd2(
            window.innerWidth,
            window.innerHeight,
            {
              minFilter: l.wem,
              magFilter: l.wem,
              format: l.wk1,
              stencilBuffer: !0,
              colorSpace: l.GUF,
              type: l.cLu,
            }
          )),
            (this.genericComposer = new h.x(
              this.renderer,
              this.renderTargetGeneric
            )),
            this.genericComposer.setPixelRatio(1),
            (this.renderPass = new c.C(
              this.scene,
              this.camera,
              void 0,
              void 0,
              1
            )),
            (this.renderPass.clear = !0),
            (this.renderPass.needsSwap = !1),
            (this.compositingPass = new d.T(u));
          let t = new g.default().assetManager.getTexture("ascii");
          t && ((t.wrapS = t.wrapT = l.rpg), (t.colorSpace = l.KI_)),
            (this.compositingPass.uniforms.tAscii.value = t),
            (this.compositingPass.renderToScreen = !1),
            this.genericComposer.addPass(this.renderPass),
            this.genericComposer.addPass(this.compositingPass),
            (this.defaultSettings = {
              rgbWaveTimescale: 0,
              rgbWaveAmount: 0,
              verticalPixelSmudgeAmount: 0,
              verticalPixelSmudgeStepUp: 200,
              verticalPixelSmudgeStepDown: 2e3,
              horisontalPixelSmudgeAmount: 0,
              horisontalPixelSmudgeStepUp: 10,
              horisontalPixelSmudgeStepDown: 15,
              randomGlitchHorisontalPixelSmudgeAmount: 4,
              asciiAmount: 1,
              asciiUvSize: 18,
              posterizeColors: 21,
              posterizeGamma: 0.3,
              blockNoiseAmount: 1,
              blockNoiseTimescale: 1,
              invertAmount: 0,
              scanlinesAmount: 0,
              hsvCorrection: { x: 1, y: 1, z: 1 },
              channel1: "",
              channel2: "",
              channel3: "",
              channel4: "",
            }),
            (this.settings = JSON.parse(JSON.stringify(this.defaultSettings))),
            this.settingsUI.onSettingsUpdated.add((e) => {
              e.type === m.a.Post &&
                (this.applySettingsFromJSON(e.settings), this.applySettings());
            }),
            this.createUI(),
            this.parseChannels(),
            f.h.getState().api.trigger.add(this.onTrigger);
        }
      }
      var x = i(7836),
        S = i(4552);
      let y = new x.E(),
        b = ["rectplane.gltf", "splitplane.gltf", "voronoiplane.gltf"];
      ((s = a || (a = {})).Image = "image"), (s.Video = "video");
      class T extends S.Z {
        createUI() {
          super.createUI(),
            this.isDebug &&
              (this.settingsFolder.addBinding(this.settings, "display"),
              this.settingsFolder
                .addBinding(this.settings, "currentPlaneMeshName", {
                  label: "mesh",
                  options: b.map((e) => ({ text: e, value: e })),
                })
                .on("change", () => {
                  this.loadMesh();
                }),
              this.settingsFolder.addBinding(this.settings, "lookAtCamera"),
              this.settingsFolder.addBinding(this.settings, "planeThreshold", {
                min: 0,
                max: 1,
              }),
              this.settingsFolder.addBinding(this.settings, "defaultColor"),
              this.settingsFolder.addBinding(
                this.settings,
                "blockNoiseTimescale",
                { min: 0, max: 6 }
              ),
              this.settingsFolder.addBinding(
                this.settings,
                "blockNoiseAmount",
                { min: 0, max: 1 }
              ),
              this.settingsFolder.addBinding(this.settings, "quadOffset"),
              this.settingsFolder.addBinding(this.settings, "quadExtraNoise", {
                min: 0,
                max: 1,
              }),
              this.settingsFolder.addBinding(this.settings, "shuffleGridSize", {
                min: 1,
                max: 100,
              }),
              this.settingsFolder.addBinding(this.settings, "shuffleAmount", {
                min: 0,
                max: 4,
              }),
              this.settingsFolder.addBinding(
                this.settings,
                "shuffleKeepInCenter"
              ),
              this.settingsFolder.addBinding(this.settings, "quadRandomColor", {
                min: 0,
                max: 1,
              }));
        }
        async setSource(e) {
          if (this.getAssetType(e) === S.h.Image) {
            delete this.planeMaterial.defines.USE_COLOR,
              (this.planeMaterial.needsUpdate = !0);
            let t = this.assetManager.getTexture(e);
            t && (this.planeMaterial.uniforms.sourceTexture.value = t);
          } else if (this.getAssetType(e) === S.h.Video) {
            delete this.planeMaterial.defines.USE_COLOR,
              (this.planeMaterial.needsUpdate = !0);
            let t = this.assetManager.getVideo(e);
            t &&
              (t.source.data.play(),
              (this.planeMaterial.uniforms.sourceTexture.value = t));
          }
        }
        setSourceTextureAspect(e) {
          this.planeMaterial.uniforms.sourceAspect.value = e;
        }
        loadMesh() {
          y.load(
            "/models/" + this.settings.currentPlaneMeshName,
            (e) => {
              let t = e.scene.children[0];
              this.baseMesh &&
                (this.baseMesh.geometry.dispose(),
                this.group.remove(this.baseMesh)),
                (this.baseMesh = t);
              let i = t.geometry.getAttribute("position"),
                s = [],
                n = new l.Ilk();
              for (let e = 0; e < i.count; e += 4)
                n.setHex(16777215 * Math.random()),
                  s.push(n.r, n.g, n.b),
                  s.push(n.r, n.g, n.b),
                  s.push(n.r, n.g, n.b),
                  s.push(n.r, n.g, n.b);
              t.geometry.setAttribute("randomColor", new l.a$l(s, 3)),
                t.geometry.applyMatrix4(
                  new l.yGw().makeTranslation(new l.Pa4(0, 0, 0.01))
                ),
                (t.rotation.x = 0.5 * Math.PI),
                t.scale.setScalar(2),
                (t.renderOrder = 100),
                (t.material = this.planeMaterial),
                this.applySettings(),
                this.group.add(t);
            },
            () => {},
            (e) => {
              console.warn("can' find model", e);
            }
          );
        }
        update(e) {
          this.planeMaterial.uniforms.time.value = e;
        }
        resize(e) {
          (this.planeMaterial.uniforms.resolution.value.x = e.width),
            (this.planeMaterial.uniforms.resolution.value.y = e.height);
        }
        constructor() {
          super({ name: "Plane", settingsType: m.a.Plane }),
            (this.type = a.Image),
            (this.applySettings = () => {
              this.baseMesh &&
                ((this.baseMesh.visible = this.settings.display),
                void 0 !== this.settings.displayOverride &&
                  (this.baseMesh.visible = this.settings.displayOverride)),
                (this.lookAtCamera = this.settings.lookAtCamera),
                (this.planeMaterial.uniforms.globalStrength.value =
                  this.settingsUI.shared.globalStrength),
                (this.planeMaterial.uniforms.sourceThreshold.value =
                  this.settings.planeThreshold),
                this.planeMaterial.uniforms.shuffleGridSize.value.copy(
                  this.settings.shuffleGridSize
                ),
                (this.planeMaterial.uniforms.shuffleAmount.value =
                  this.settings.shuffleAmount),
                (this.planeMaterial.uniforms.shuffleKeepInCenter.value = this
                  .settings.shuffleKeepInCenter
                  ? 1
                  : 0),
                (this.planeMaterial.uniforms.quadExtraNoise.value =
                  this.settings.quadExtraNoise),
                (this.planeMaterial.uniforms.quadRandomColor.value =
                  this.settings.quadRandomColor),
                (this.planeMaterial.uniforms.blockNoiseTimescale.value =
                  this.settings.blockNoiseTimescale),
                (this.planeMaterial.uniforms.blockNoiseAmount.value =
                  this.settings.blockNoiseAmount),
                this.planeMaterial.uniforms.quadOffset.value.copy(
                  this.settings.quadOffset
                ),
                this.planeMaterial.uniforms.defaultColor.value.set(
                  this.settings.defaultColor
                ),
                (this.planeMaterial.uniforms.saturation.value =
                  this.settings.saturation);
            }),
            (this.lookAtCamera = !0),
            (this.defaultSettings = {
              display: !1,
              solo: !1,
              lookAtCamera: !0,
              defaultColor: "#000000",
              currentPlaneMeshName: b[1],
              planeThreshold: 0,
              blockNoiseTimescale: 0.2,
              blockNoiseAmount: 1,
              shuffleGridSize: { x: 30, y: 17 },
              shuffleAmount: 0,
              shuffleKeepInCenter: !0,
              quadRandomColor: 0,
              quadOffset: { x: 0, y: 0, z: 0 },
              quadExtraNoise: 0.2,
              saturation: 1,
              channel1: "",
              channel2: "",
              channel3: "",
              channel4: "",
            }),
            (this.settingsUI = new m.Z()),
            this.settingsUI.onSharedUpdated.add(() => {
              this.planeMaterial.uniforms.globalStrength.value =
                this.settingsUI.shared.globalStrength;
            }),
            (this.planeMaterial = new l.FIo({
              transparent: !0,
              uniforms: {
                sourceTexture: { value: new l.xEZ() },
                defaultColor: { value: new l.Ilk(this.settings.defaultColor) },
                sourceAspect: { value: 1 },
                resolution: { value: new l.FM8(100, 100) },
                isBloomRender: { value: 0 },
                time: { value: 0 },
                globalStrength: { value: 1 },
                blockNoiseTimescale: { value: 1 },
                blockNoiseAmount: { value: 0 },
                rgbWaveTimescale: { value: 0.1 },
                rgbWaveAmount: { value: 1 },
                shakeTimescale: { value: 1 },
                shakeAmount: { value: 0 },
                whiteNoiseAmount: { value: 0.4 },
                verticalPixelSmudgeAmount: { value: 0 },
                quadOffset: { value: new l.Pa4(0, 0, 0) },
                quadRandomColor: { value: 0 },
                quadExtraNoise: { value: 0.2 },
                shuffleGridSize: { value: new l.FM8(30, 17) },
                shuffleAmount: { value: 0 },
                shuffleKeepInCenter: { value: 1 },
                sourceThreshold: { value: 1 },
                linesAmount: { value: 0 },
                saturation: { value: 1 },
              },
              depthWrite: !0,
              vertexShader:
                "precision highp float;\nprecision mediump int;\n#define GLSLIFY 1\n\nconst float PI = 3.1415926535897932384626433832795;\n\nuniform mat4 modelMatrix; // optional\nuniform mat4 viewMatrix; // optional\nuniform mat4 projectionMatrix; // optional\n\nattribute vec3 position;\nattribute vec3 randomColor;\nattribute vec2 uv;\nvarying vec2 vUv;\nvarying vec3 vRandomColor;\nuniform float time;\nuniform vec3 quadOffset;\nuniform float quadExtraNoise;\nuniform float globalStrength;\nuniform sampler2D maskTexture;\n\nfloat random(vec2 c){\n  return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec4 quat_from_axis_angle(vec3 axis, float angle)\n{\n  vec4 qr;\n  float half_angle = (angle * 0.5);\n  qr.x = axis.x * sin(half_angle);\n  qr.y = axis.y * sin(half_angle);\n  qr.z = axis.z * sin(half_angle);\n  qr.w = cos(half_angle);\n  return qr;\n}\n\nvec3 rotate_vertex_position(vec3 position, vec3 axis, float angle)\n{\n  vec4 q = quat_from_axis_angle(axis, angle);\n  vec3 v = position.xyz;\n  return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);\n}\n\nvoid main()	{\n\n  float maskColor = step(0.2,texture2D(maskTexture, uv).r)*0.4;\n\n  vUv = uv;\n  vRandomColor = randomColor;\n  vec3 distortedPosition = position;\n\n  distortedPosition.xz *= 1.0 + randomColor.r * quadOffset.xy * smoothstep(randomColor.g + 0.01,randomColor.g+0.06, globalStrength);\n  distortedPosition.y +=  randomColor.r * quadOffset.z * smoothstep(randomColor.g + 0.01,randomColor.g+0.06, globalStrength);\n\n  float extraNoiseOffset = floor(sin(time*20.3 + randomColor.r*10.0) * sin(time*5.3 + randomColor.r*5.0) * quadExtraNoise)* 0.01 * globalStrength;\n  distortedPosition.x += extraNoiseOffset;\n\n  vec4 modelPosition = modelMatrix * vec4(distortedPosition,1.0);\n\n  gl_Position = projectionMatrix * viewMatrix * modelPosition;\n}\n",
              fragmentShader:
                'precision highp float;\nprecision mediump int;\n#define GLSLIFY 1\n\nconst float PI = 3.1415926535897932384626433832795;\n\nuniform vec3 defaultColor;\nuniform float time;\nuniform float sourceAspect;\nuniform float sourceThreshold;\nuniform float globalStrength;\nuniform float blockNoiseTimescale;\nuniform float blockNoiseAmount;\nuniform float rgbWaveTimescale;\nuniform float rgbWaveAmount;\nuniform float whiteNoiseAmount;\nuniform float quadRandomColor;\nuniform float shuffleAmount;\nuniform vec2 shuffleGridSize;\nuniform float shuffleKeepInCenter;\nuniform float linesAmount;\nuniform float saturation;\n\nuniform float verticalPixelSmudgeAmount;\n\nuniform vec2 resolution;\nuniform float isBloomRender;\nuniform sampler2D sourceTexture;\nuniform sampler2D maskTexture;\nvarying vec2 vUv;\nvarying vec3 vRandomColor;\n\nfloat random(vec2 c){\n  return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n      return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}\n\nvec2 rotate(vec2 v, float a)\n{\n	float s = sin(a + PI);\n	float c = cos(a + PI);\n	mat2 m = mat2(c, -s, s, c);\n	return m * v;\n}\n\nvec3 rgb2hsv(vec3 c)\n{\n    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n    float d = q.x - min(q.w, q.y);\n    float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n}\n\nvec3 hsv2rgb(vec3 c)\n{\n    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nconst float interval = 3.0;\n\nvoid main() {\n	float strength = globalStrength;\n\n  float gridSizeX = shuffleGridSize.x;\n  float gridSizeY = shuffleGridSize.y;\n\n  float positionInTileX = mod(vUv.x,1.0 / gridSizeX);\n  float positionInTileY = mod(vUv.y,1.0 / gridSizeY);\n\n  float tileX = floor(vUv.x * gridSizeX);\n  float tileY = floor(vUv.y * gridSizeY);\n\n  float rnd = random(vec2(tileX,tileY));\n  float offsetTileX = floor( mod(rnd,1.0) * strength * shuffleAmount * gridSizeX);\n  float offsetTileY = floor( mod(rnd,1.0) * strength * shuffleAmount * gridSizeY);\n\n  //shift offset from center\n  if(shuffleKeepInCenter > 0.0) {\n    offsetTileX *=  1.0 - 2.0 * step(0.5, mod(random(vec2(tileX,tileY)),1.0));\n    offsetTileY *=  1.0 - 2.0 * step(0.5, mod(random(vec2(tileX,tileY)),1.0));\n  }\n\n  float shuffledX = (tileX + offsetTileX)/gridSizeX + positionInTileX;\n  float shuffledY = (tileY + offsetTileY)/gridSizeY + positionInTileY;\n\n  vec2 shuffledUv = vec2(shuffledX, shuffledY);\n\n  //shuffledUv = mix(shuffledUv, vUv, 1.0);\n\n  vec2 scaledUv = shuffledUv * 1.2 - 0.1;\n  scaledUv.y *= sourceAspect;\n  scaledUv.y -= sourceAspect*0.25*step(1.01,sourceAspect);\n\n  //vertical pixel "smudge"\n  //scaledUv.y += random(vec2(vUv.x,0.0)) * 0.1 * verticalPixelSmudgeAmount*strength;\n  //scaledUv.y -= random(vec2(floor(vUv.x*100.0)/100.0,0.0)) * 0.1 * verticalPixelSmudgeAmount*strength;\n\n  scaledUv.y = 1.0-scaledUv.y;\n\n  vec2 clampedUv = scaledUv;\n  clampedUv.x = clamp(clampedUv.x,0.0,1.0);\n  clampedUv.y = clamp(clampedUv.y,0.0,1.0);\n\n  float y = clampedUv.y * resolution.y;\n\n  float rgbDiff = (6.0 + sin(time * 500.0 * rgbWaveTimescale + scaledUv.y * 40.0) * (20.0 * strength + 1.0)) / resolution.x * rgbWaveAmount;\n  float rgbUvX = scaledUv.x;\n\n  float bnTime = floor(time * 1.0 * blockNoiseTimescale) * 200.0;\n  float noiseX = step((snoise3(vec3(0.0, scaledUv.x * 3.0, bnTime)) + 1.0) / 2.0, 0.12 + strength * 0.3);\n  float noiseY = step((snoise3(vec3(0.0, scaledUv.y * 3.0, bnTime)) + 1.0) / 2.0, 0.12 + strength * 0.3);\n  float bnMask = noiseX * noiseY * blockNoiseAmount;\n  float bnUvX = scaledUv.x + sin(bnTime) * 0.2 * strength;\n  float bnR = texture2D(sourceTexture, vec2(bnUvX + rgbDiff, scaledUv.y)).r * bnMask;\n  float bnG = texture2D(sourceTexture, vec2(bnUvX, scaledUv.y)).g * bnMask;\n  float bnB = texture2D(sourceTexture, vec2(bnUvX - rgbDiff, scaledUv.y)).b * bnMask;\n  vec4 blockNoise = vec4(bnR, bnG, bnB, 1.0);\n\n  float bnTime2 = floor(time * 5.0 * blockNoiseTimescale) * 300.0;\n  float noiseX2 = step((snoise3(vec3(0.0, scaledUv.x * 2.0, bnTime2)) + 1.0) / 2.0, 0.12 + strength * 0.5);\n  float noiseY2 = step((snoise3(vec3(0.0, scaledUv.y * 18.0, bnTime2)) + 1.0) / 2.0, 0.12 + strength * 0.3);\n  float bnMask2 = noiseX2 * noiseY2 * blockNoiseAmount;\n  float bnR2 = texture2D(sourceTexture, vec2(bnUvX + rgbDiff, scaledUv.y)).r * bnMask2;\n  float bnG2 = texture2D(sourceTexture, vec2(bnUvX, scaledUv.y)).g * bnMask2;\n  float bnB2 = texture2D(sourceTexture, vec2(bnUvX - rgbDiff, scaledUv.y)).b * bnMask2;\n  vec4 blockNoise2 = vec4(bnR2, bnG2, bnB2, 1.0);\n\n  float isInside = step(0.0,scaledUv.x)*step(0.0,1.0-scaledUv.x)*step(0.0,scaledUv.y)*step(0.0,1.0-scaledUv.y);\n\n  gl_FragColor = texture2D(sourceTexture,clampedUv) * (isInside - bnMask - bnMask2) + (blockNoise + blockNoise2)*blockNoiseAmount*strength;\n\n  gl_FragColor.rgb = mix(gl_FragColor.rgb, vRandomColor, quadRandomColor * strength);\n\n  vec3 fragHSV = rgb2hsv(gl_FragColor.rgb);\n\n  fragHSV.y *= saturation;\n\n   gl_FragColor.rgb = hsv2rgb(fragHSV);\n\n  float intensity = (gl_FragColor.r+gl_FragColor.g+gl_FragColor.b)*0.33;\n\n  if(isInside + bnMask + bnMask2 < 0.9 || intensity < sourceThreshold*globalStrength || gl_FragColor.a < 0.1) {\n    discard;\n  }\n}\n',
              defines: { USE_COLOR: "" },
            })),
            this.createUI(),
            this.loadMesh();
        }
      }
      var A = i(0),
        w = i(2260);
      let P = new x.E(),
        C = ["rectplane.gltf", "splitplane.gltf", "voronoiplane.gltf"];
      ((n = o || (o = {})).Image = "image"), (n.Video = "video");
      class U extends S.Z {
        createUI() {
          super.createUI(),
            this.isDebug &&
              (this.settingsFolder.addBinding(this.settings, "display"),
              this.settingsFolder
                .addBinding(this.settings, "currentPlaneMeshName", {
                  label: "mesh",
                  options: C.map((e) => ({ text: e, value: e })),
                })
                .on("change", () => {
                  this.loadMesh();
                }),
              this.settingsFolder.addBinding(this.settings, "lookAtCamera"),
              this.settingsFolder.addBinding(this.settings, "planeThreshold", {
                min: 0,
                max: 1,
              }),
              this.settingsFolder.addBinding(this.settings, "defaultColor"),
              this.settingsFolder.addBinding(
                this.settings,
                "blockNoiseTimescale",
                { min: 0, max: 6 }
              ),
              this.settingsFolder.addBinding(
                this.settings,
                "blockNoiseAmount",
                { min: 0, max: 1 }
              ),
              this.settingsFolder.addBinding(
                this.settings,
                "rgbWaveTimescale",
                { min: 0, max: 1 }
              ),
              this.settingsFolder.addBinding(this.settings, "rgbWaveAmount", {
                min: 0,
                max: 10,
              }),
              this.settingsFolder.addBinding(this.settings, "shakeTimescale", {
                min: 0,
                max: 1,
              }),
              this.settingsFolder.addBinding(this.settings, "shakeAmount", {
                min: 0,
                max: 1,
              }),
              this.settingsFolder.addBinding(
                this.settings,
                "whiteNoiseAmount",
                { min: 0, max: 2 }
              ),
              this.settingsFolder.addBinding(this.settings, "linesAmount", {
                min: 0,
                max: 1,
              }),
              this.settingsFolder.addBinding(
                this.settings,
                "verticalPixelSmudgeAmount",
                { min: 0, max: 20 }
              ),
              this.settingsFolder.addBinding(this.settings, "quadOffset"),
              this.settingsFolder.addBinding(this.settings, "quadExtraNoise", {
                min: 0,
                max: 1,
              }),
              this.settingsFolder.addBinding(this.settings, "shuffleGridSize", {
                min: 1,
                max: 100,
              }),
              this.settingsFolder.addBinding(this.settings, "shuffleAmount", {
                min: 0,
                max: 4,
              }),
              this.settingsFolder.addBinding(
                this.settings,
                "shuffleKeepInCenter"
              ),
              this.settingsFolder.addBinding(this.settings, "quadRandomColor", {
                min: 0,
                max: 1,
              }));
        }
        setMask(e) {}
        async setSource(e) {
          if (this.getAssetType(e) === S.h.Image) {
            delete this.planeMaterial.defines.USE_COLOR,
              (this.planeMaterial.needsUpdate = !0);
            let t = this.assetManager.getTexture(e);
            t && (this.planeMaterial.uniforms.sourceTexture.value = t);
          } else if (this.getAssetType(e) === S.h.Video) {
            delete this.planeMaterial.defines.USE_COLOR,
              (this.planeMaterial.needsUpdate = !0);
            let t = this.assetManager.getVideo(e);
            t &&
              (t.source.data.play(),
              (this.planeMaterial.uniforms.sourceTexture.value = t));
          }
        }
        setSourceTextureAspect(e) {
          this.planeMaterial.uniforms.sourceAspect.value = e;
        }
        loadMesh() {
          P.load(
            "/models/" + this.settings.currentPlaneMeshName,
            (e) => {
              let t = e.scene.children[0];
              this.baseMesh &&
                (this.baseMesh.geometry.dispose(),
                this.group.remove(this.baseMesh)),
                (this.baseMesh = t);
              let i = t.geometry.getAttribute("position"),
                s = [],
                n = new l.Ilk();
              for (let e = 0; e < i.count; e += 4)
                n.setHex(16777215 * Math.random()),
                  s.push(n.r, n.g, n.b),
                  s.push(n.r, n.g, n.b),
                  s.push(n.r, n.g, n.b),
                  s.push(n.r, n.g, n.b);
              t.geometry.setAttribute("randomColor", new l.a$l(s, 3)),
                t.geometry.applyMatrix4(
                  new l.yGw().makeTranslation(new l.Pa4(0, 0, 0.01))
                ),
                (t.rotation.x = 0.5 * Math.PI),
                t.scale.setScalar(2),
                (t.material = this.planeMaterial),
                this.applySettings(),
                this.group.add(t);
            },
            () => {},
            (e) => {
              console.warn("can' find model", e);
            }
          );
        }
        update(e) {
          this.planeMaterial.uniforms.time.value = e;
        }
        resize(e) {
          (this.planeMaterial.uniforms.resolution.value.x = e.width),
            (this.planeMaterial.uniforms.resolution.value.y = e.height);
        }
        constructor() {
          super({ name: "Landingnoise", settingsType: m.a.LandingNoise }),
            (this.type = o.Image),
            (this.applySettings = () => {
              this.baseMesh &&
                ((this.baseMesh.visible = this.settings.display),
                void 0 !== this.settings.displayOverride &&
                  (this.baseMesh.visible = this.settings.displayOverride)),
                (this.lookAtCamera = this.settings.lookAtCamera),
                (this.planeMaterial.uniforms.globalStrength.value =
                  this.settingsUI.shared.globalStrength),
                (this.planeMaterial.uniforms.sourceThreshold.value =
                  this.settings.planeThreshold),
                this.planeMaterial.uniforms.shuffleGridSize.value.copy(
                  this.settings.shuffleGridSize
                ),
                (this.planeMaterial.uniforms.shuffleAmount.value =
                  this.settings.shuffleAmount),
                (this.planeMaterial.uniforms.shuffleKeepInCenter.value = this
                  .settings.shuffleKeepInCenter
                  ? 1
                  : 0),
                (this.planeMaterial.uniforms.quadExtraNoise.value =
                  this.settings.quadExtraNoise),
                (this.planeMaterial.uniforms.quadRandomColor.value =
                  this.settings.quadRandomColor),
                (this.planeMaterial.uniforms.blockNoiseTimescale.value =
                  this.settings.blockNoiseTimescale),
                (this.planeMaterial.uniforms.blockNoiseAmount.value =
                  this.settings.blockNoiseAmount),
                (this.planeMaterial.uniforms.rgbWaveTimescale.value =
                  this.settings.rgbWaveTimescale),
                (this.planeMaterial.uniforms.rgbWaveAmount.value =
                  this.settings.rgbWaveAmount),
                (this.planeMaterial.uniforms.shakeTimescale.value =
                  this.settings.shakeTimescale),
                (this.planeMaterial.uniforms.shakeAmount.value =
                  this.settings.shakeAmount),
                (this.planeMaterial.uniforms.whiteNoiseAmount.value =
                  this.settings.whiteNoiseAmount),
                (this.planeMaterial.uniforms.linesAmount.value =
                  this.settings.linesAmount),
                (this.planeMaterial.uniforms.verticalPixelSmudgeAmount.value =
                  this.settings.verticalPixelSmudgeAmount),
                this.planeMaterial.uniforms.quadOffset.value.copy(
                  this.settings.quadOffset
                ),
                this.planeMaterial.uniforms.defaultColor.value.set(
                  this.settings.defaultColor
                );
            }),
            (this.lookAtCamera = !0),
            (this.defaultSettings = {
              display: !0,
              solo: !1,
              lookAtCamera: !0,
              defaultColor: "#000000",
              currentPlaneMeshName: C[1],
              planeThreshold: 0.2,
              rgbWaveTimescale: 0.1,
              rgbWaveAmount: 0,
              shakeTimescale: 1,
              shakeAmount: 0,
              blockNoiseTimescale: 0.2,
              blockNoiseAmount: 0.8,
              whiteNoiseAmount: 0,
              verticalPixelSmudgeAmount: 0,
              horisontalPixelSmudgeAmount: 0,
              linesAmount: 0,
              shuffleGridSize: { x: 4, y: 4 },
              shuffleAmount: 0.5,
              shuffleKeepInCenter: !0,
              quadRandomColor: 0,
              quadOffset: { x: 0, y: 0, z: 0 },
              quadExtraNoise: 0,
              channel1: "",
              channel2: "",
              channel3: "",
              channel4: "",
            }),
            (this.settingsUI = new m.Z()),
            this.settingsUI.onSharedUpdated.add(() => {
              this.planeMaterial.uniforms.globalStrength.value =
                this.settingsUI.shared.globalStrength;
            }),
            (this.planeMaterial = new l.FIo({
              transparent: !1,
              uniforms: {
                sourceTexture: { value: new l.xEZ() },
                defaultColor: { value: new l.Ilk(0) },
                sourceAspect: { value: 1 },
                resolution: { value: new l.FM8(100, 100) },
                time: { value: 0 },
                globalStrength: { value: 1 },
                blockNoiseTimescale: { value: 1 },
                blockNoiseAmount: { value: 0.5 },
                rgbWaveTimescale: { value: 0.1 },
                rgbWaveAmount: { value: 0 },
                shakeTimescale: { value: 1 },
                shakeAmount: { value: 0 },
                whiteNoiseAmount: { value: 0 },
                verticalPixelSmudgeAmount: { value: 0 },
                quadOffset: { value: new l.Pa4(0, 0, 0) },
                quadRandomColor: { value: 0 },
                quadExtraNoise: { value: 0.2 },
                shuffleGridSize: { value: new l.FM8(15, 15) },
                shuffleAmount: { value: 1 },
                shuffleKeepInCenter: { value: 1 },
                sourceThreshold: { value: 0.4 },
                linesAmount: { value: 0 },
                opacity: { value: 0 },
              },
              depthWrite: !0,
              blending: l.WMw,
              vertexShader:
                "precision highp float;\nprecision mediump int;\n#define GLSLIFY 1\n\nconst float PI = 3.1415926535897932384626433832795;\n\nuniform mat4 modelMatrix; // optional\nuniform mat4 viewMatrix; // optional\nuniform mat4 projectionMatrix; // optional\n\nattribute vec3 position;\nattribute vec3 randomColor;\nattribute vec2 uv;\nvarying vec2 vUv;\nvarying vec3 vRandomColor;\nuniform float time;\nuniform vec3 quadOffset;\nuniform float quadExtraNoise;\nuniform float globalStrength;\nuniform sampler2D maskTexture;\n\nfloat random(vec2 c){\n  return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec4 quat_from_axis_angle(vec3 axis, float angle)\n{\n  vec4 qr;\n  float half_angle = (angle * 0.5);\n  qr.x = axis.x * sin(half_angle);\n  qr.y = axis.y * sin(half_angle);\n  qr.z = axis.z * sin(half_angle);\n  qr.w = cos(half_angle);\n  return qr;\n}\n\nvec3 rotate_vertex_position(vec3 position, vec3 axis, float angle)\n{\n  vec4 q = quat_from_axis_angle(axis, angle);\n  vec3 v = position.xyz;\n  return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);\n}\n\nvoid main()	{\n\n  vUv = uv * 2.0;\n\n  vec3 distortedPosition = position;\n\n  distortedPosition.xz *= 1.0 + randomColor.r * quadOffset.xy * smoothstep(randomColor.g + 0.01,randomColor.g+0.06, globalStrength);\n  distortedPosition.y +=  randomColor.r * quadOffset.z * smoothstep(randomColor.g + 0.01,randomColor.g+0.06, globalStrength);\n\n  float extraNoiseOffset = floor(sin(time*20.3 + randomColor.r*10.0) * sin(time*5.3 + randomColor.r*5.0) * quadExtraNoise)* 0.01 * globalStrength;\n  distortedPosition.x += extraNoiseOffset;\n\n  vec4 modelPosition = modelMatrix * vec4(distortedPosition,1.0);\n\n  gl_Position = projectionMatrix * viewMatrix * modelPosition;\n}\n",
              fragmentShader:
                'precision highp float;\nprecision mediump int;\n#define GLSLIFY 1\n\nconst float PI = 3.1415926535897932384626433832795;\n\nuniform vec3 defaultColor;\nuniform float time;\nuniform float sourceAspect;\nuniform float sourceThreshold;\nuniform float globalStrength;\nuniform float blockNoiseTimescale;\nuniform float blockNoiseAmount;\nuniform float rgbWaveTimescale;\nuniform float rgbWaveAmount;\nuniform float shakeTimescale;\nuniform float shakeAmount;\nuniform float whiteNoiseAmount;\nuniform float quadRandomColor;\nuniform float shuffleAmount;\nuniform vec2 shuffleGridSize;\nuniform float shuffleKeepInCenter;\nuniform float linesAmount;\nuniform float opacity;\n\nuniform float verticalPixelSmudgeAmount;\n\nuniform vec2 resolution;\nuniform float isBloomRender;\nuniform sampler2D sourceTexture;\n\nvarying vec2 vUv;\nvarying vec3 vRandomColor;\n\nfloat random(vec2 c){\n  return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n      return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}\n\nvec2 rotate(vec2 v, float a)\n{\n	float s = sin(a + PI);\n	float c = cos(a + PI);\n	mat2 m = mat2(c, -s, s, c);\n	return m * v;\n}\n\nconst float interval = 3.0;\n\nvoid main() {\n	//gl_FragColor = vec4(texture2D(sourceTexture,vUv).rgb,1.0);\n\n  float strength = globalStrength;//smoothstep(interval * 0.5, interval, interval - mod(time, interval));\n  vec2 shake = vec2(strength * 18.0 + 0.5) * vec2(\n    random(vec2(time*shakeTimescale)) * 2.0 - 1.0,\n    random(vec2(time * 2.0*shakeTimescale)) * 2.0 - 1.0\n  ) / resolution * shakeAmount;\n\n  float gridSizeX = shuffleGridSize.x;\n  float gridSizeY = shuffleGridSize.y;\n\n  float positionInTileX = mod(vUv.x,1.0 / gridSizeX);\n  float positionInTileY = mod(vUv.y,1.0 / gridSizeY);\n\n  float tileX = floor(vUv.x * gridSizeX);\n  float tileY = floor(vUv.y * gridSizeY);\n\n  float rnd = random(vec2(tileX,tileY));\n  float offsetTileX = floor( mod(rnd,1.0) * strength * shuffleAmount * gridSizeX);\n  float offsetTileY = floor( mod(rnd,1.0) * strength * shuffleAmount * gridSizeY);\n\n  //shift offset from center\n  if(shuffleKeepInCenter > 0.0) {\n    offsetTileX *=  1.0 - 2.0 * step(0.5, mod(random(vec2(tileX,tileY)),1.0));\n    offsetTileY *=  1.0 - 2.0 * step(0.5, mod(random(vec2(tileX,tileY)),1.0));\n  }\n\n  float shuffledX = (tileX + offsetTileX)/gridSizeX + positionInTileX;\n  float shuffledY = (tileY + offsetTileY)/gridSizeY + positionInTileY;\n\n  vec2 shuffledUv = vec2(shuffledX, shuffledY);\n\n  //shuffledUv = mix(shuffledUv, vUv, 1.0-mask);\n\n  vec2 scaledUv = shuffledUv * 1.2 - 0.1;\n  scaledUv.y *= sourceAspect;\n  scaledUv.y -= sourceAspect*0.25*step(1.01,sourceAspect);\n\n  //vertical pixel "smudge"\n  scaledUv.y += random(vec2(vUv.x,0.0)) * 0.1 * verticalPixelSmudgeAmount*strength;\n\n  scaledUv.y -= random(vec2(floor(vUv.x*100.0)/100.0,0.0)) * 0.1 * verticalPixelSmudgeAmount*strength;\n\n  scaledUv.y = 1.0-scaledUv.y;\n\n  vec2 clampedUv = scaledUv;\n  clampedUv.x = clamp(clampedUv.x,0.0,1.0);\n  clampedUv.y = clamp(clampedUv.y,0.0,1.0);\n\n  float y = clampedUv.y * resolution.y;\n\n  float rgbDiff = (6.0 + sin(time * 500.0 * rgbWaveTimescale + scaledUv.y * 40.0) * (20.0 * strength + 1.0)) / resolution.x * rgbWaveAmount;\n  float rgbUvX = scaledUv.x;\n\n  //float whiteNoise = (random(scaledUv + mod(time, 10.0)) * 2.0 - 1.0) * (0.15 + strength * 0.15) * whiteNoiseAmount;\n\n  float bnTime = floor(time * 1.0 * blockNoiseTimescale) * 200.0;\n  float noiseX = step((snoise3(vec3(0.0, scaledUv.x * 3.0, bnTime)) + 1.0) / 2.0, 0.12 + strength * 0.3);\n  float noiseY = step((snoise3(vec3(0.0, scaledUv.y * 3.0, bnTime)) + 1.0) / 2.0, 0.12 + strength * 0.3);\n  float bnMask = noiseX * noiseY * blockNoiseAmount;\n  float bnUvX = scaledUv.x + sin(bnTime) * 0.2 * strength;\n  float bnR = texture2D(sourceTexture, vec2(bnUvX + rgbDiff, scaledUv.y)).r * bnMask;\n  float bnG = texture2D(sourceTexture, vec2(bnUvX, scaledUv.y)).g * bnMask;\n  float bnB = texture2D(sourceTexture, vec2(bnUvX - rgbDiff, scaledUv.y)).b * bnMask;\n  vec4 blockNoise = vec4(bnR, bnG, bnB, 1.0);\n\n  float bnTime2 = floor(time * 5.0 * blockNoiseTimescale) * 300.0;\n  float noiseX2 = step((snoise3(vec3(0.0, scaledUv.x * 2.0, bnTime2)) + 1.0) / 2.0, 0.12 + strength * 0.5);\n  float noiseY2 = step((snoise3(vec3(0.0, scaledUv.y * 18.0, bnTime2)) + 1.0) / 2.0, 0.12 + strength * 0.3);\n  float bnMask2 = noiseX2 * noiseY2 * blockNoiseAmount;\n  float bnR2 = texture2D(sourceTexture, vec2(bnUvX + rgbDiff, scaledUv.y)).r * bnMask2;\n  float bnG2 = texture2D(sourceTexture, vec2(bnUvX, scaledUv.y)).g * bnMask2;\n  float bnB2 = texture2D(sourceTexture, vec2(bnUvX - rgbDiff, scaledUv.y)).b * bnMask2;\n  vec4 blockNoise2 = vec4(bnR2, bnG2, bnB2, 1.0);\n\n  float isInside = step(0.0,scaledUv.x)*step(0.0,1.0-scaledUv.x)*step(0.0,scaledUv.y)*step(0.0,1.0-scaledUv.y);\n\n  gl_FragColor.rgb = defaultColor * (isInside - bnMask - bnMask2);\n  gl_FragColor.rgb += (blockNoise.rgb + blockNoise2.rgb)*blockNoiseAmount*opacity;\n  gl_FragColor.a = opacity;\n\n  float intensity = (gl_FragColor.r+gl_FragColor.g+gl_FragColor.b)*0.33;\n\n  if(isInside + bnMask + bnMask2 < 0.9 || intensity < sourceThreshold || gl_FragColor.a < 0.1) {\n    discard;\n  }\n}\n',
              defines: { USE_COLOR: "" },
            })),
            this.createUI(),
            this.loadMesh();
        }
      }
      let M = new l.Ilk();
      class z extends S.Z {
        async setSource(e) {}
        clear() {
          this.particleMeshes.forEach((e) => {
            e.geometry.dispose(), this.group.remove(e);
          }),
            (this.particleMeshes.length = 0);
        }
        createParticles() {
          let e = new l.Pa4(),
            t = [
              new l.Pa4(-0.3, 0.1, 0),
              new l.Pa4(-0.2, 0.4, 0),
              new l.Pa4(-0.1, 0.1, 0),
              new l.Pa4(0, 0, 0),
              new l.Pa4(0.05, -0.1, 0),
              new l.Pa4(0.1, 0.1, 0),
              new l.Pa4(0.2, -0.1, 0),
              new l.Pa4(0.3, 0, 0),
            ],
            i = t.length,
            s = new l.lb7(new Float32Array(3 * i), 3, !1, 1),
            n = new l.lb7(new Float32Array(3 * i), 3, !1, 1),
            a = new l.lb7(new Float32Array(2 * i), 2, !1, 2);
          for (let o = 0; o < i; o++) {
            e.copy(t[o]),
              (e.x *= 5),
              (e.y *= 5),
              s.setXYZ(o, e.x, e.y, e.z - 0.2);
            let i = M.set(0);
            n.setXYZ(o, i.r, i.g, i.b),
              a.setXY(o, Math.random(), Math.random());
          }
          let o = new l._12(0.2, 0.4, 1, 1),
            r = new l.L5s().copy(o);
          r.setAttribute("particlePosition", s),
            r.setAttribute("particleColor", n),
            r.setAttribute("particleRandom", a);
          let h = new l.SPe(r, this.particlesMaterialFront, i);
          (h.renderOrder = 1e3), this.particleMeshes.push(h), this.group.add(h);
        }
        createUI() {
          super.createUI();
        }
        destroy() {
          (this.particleMeshes.length = 0), super.destroy();
        }
        update(e) {}
        constructor() {
          super({ name: "Landing quads", settingsType: m.a.LandingQuads }),
            (this.group = new l.ZAu()),
            (this.particleMeshes = []),
            (this.applySettings = () => {
              this.particlesMaterialFront &&
                ((this.particlesMaterialFront.uniforms.displaceAmount.value =
                  this.settings.displaceAmount),
                (this.particlesMaterialFront.uniforms.reduce.value =
                  this.settings.reduce));
            }),
            (this.defaultSettings = {
              display: !0,
              solo: !1,
              useVertexColors: 0,
              displaceAmount: 0,
              reduce: 1,
            }),
            (this.particlesMaterialFront = new l.jyz({
              transparent: !1,
              depthWrite: !1,
              depthTest: !1,
              uniforms: {
                time: { value: 0 },
                particleScale: { value: new l.Pa4(6, 6, 6) },
                displaceAmount: { value: this.settings.displaceAmount },
                reduce: { value: this.settings.reduce },
              },
              blending: l.bdR,
              vertexShader:
                "precision highp float;\n#define GLSLIFY 1\n\n#define PI 3.1415926535897932384626433832795\n\nattribute float opacity;\nattribute vec3 particleColor;\nattribute vec3 particlePosition;\nattribute vec2 particleRandom;\n\nvarying vec3 vColor;\nvarying float vOpacity;\nvarying vec2 vUv;\n\nuniform float time;\n\nuniform float reduce;\n\nvoid main()\n{\n  vec3 worldPos;\n  vec3 worldNormal;\n\n  float isHidden = 0.0;\n  vec3 displacedParticlePos = particlePosition;\n\n  isHidden += 1.0-step(reduce, particleRandom.x);\n\n  //scale\n  vec3 scaledPosition = position;\n  scaledPosition.y += 1.0*reduce;\n  vec3 displacedPosition = scaledPosition + displacedParticlePos + vec3(0.0,100.0,0.0)*isHidden;\n\n  worldPos = vec3(modelMatrix * vec4( displacedPosition, 1.0 )).xyz;\n  vec4 worldViewPosition = viewMatrix * vec4(worldPos,1.0);\n\n	gl_Position = projectionMatrix * worldViewPosition;\n\n}\n",
              fragmentShader:
                "precision highp float;\n#define GLSLIFY 1\n\nvarying vec3 vColor;\nvarying vec2 vUv;\nvarying float vOpacity;\n\nvoid main() {\n  gl_FragColor = vec4( vec3(1.0,0.0,0.0),1.0);\n\n}\n",
              side: l.ehD,
            })),
            this.createUI(),
            this.applySettings(),
            this.createParticles();
        }
      }
      let k = "/models/",
        I = "/images/",
        F = "/videos/",
        _ = new l.Ilk(),
        D = [T],
        N = { [m.a.Plane]: T },
        E = [
          [14474203, 14474203],
          [197379, 197379],
          [0, 0],
        ];
      class q extends A.Q {
        async init() {
          var e;
          await this.load();
          let t = this.experience.assetManager.getTexture(
            "landing-pattern.png"
          );
          return (
            t &&
              ((t.minFilter = t.magFilter = l.TyD),
              (t.wrapS = t.wrapT = l.rpg)),
            this.patternPlane.setSource("landing-pattern.png"),
            (this.settingsUI = new m.Z()),
            this.experience.debug.isActive &&
              (this.initSettingsUI(),
              this.applySettings(),
              this.createAllModules()),
            this.settingsUI.onSettingsUpdated.add((e) => {
              if (e.type === m.a.All)
                Object.keys(e.settings).forEach((t) => {
                  void 0 !== this.defaultSettings[t] &&
                    (this.settings[t] = e.settings[t]);
                }),
                  this.initSettingsUI(),
                  this.applySettings();
              else {
                let t = N[e.type];
                if (
                  t &&
                  !this.activeEffects.find((t) => t.settingsType === e.type)
                ) {
                  let i = new t();
                  this.activeEffects.push(i),
                    this.scene.add(i.group),
                    i.applySettingsFromJSON(e.settings);
                }
              }
            }),
            this.settingsUI.onSettingsReset.add(() => {
              this.settings = JSON.parse(JSON.stringify(this.defaultSettings));
            }),
            this.settingsUI.setPreset("landingpage", !0),
            null === (e = this.settingsFolder) || void 0 === e || e.refresh(),
            await this.loadAsset("logo-v1.png"),
            w.Z.emit(w.F.WEBGL_ASSET_LOADED, { assetUrl: "" }),
            Promise.resolve()
          );
        }
        transitionIn() {
          return Promise.resolve();
        }
        transitionOut() {
          return Promise.resolve();
        }
        startIntroGlitch() {
          let e = {
              globalTimescale: 1,
              post: {
                verticalPixelSmudgeAmount: 16.95,
                verticalPixelSmudgeStepUp: 53.14,
                verticalPixelSmudgeStepDown: 75,
                horisontalPixelSmudgeAmount: 0,
                asciiAmount: 0,
                asciiUvSize: 16,
                posterizeColors: 48,
                posterizeGamma: 0.86,
              },
              plane: {
                planeThreshold: 0.1,
                defaultColor: "#000000",
                blockNoiseTimescale: 0,
                rgbWaveTimescale: 0,
                rgbWaveAmount: 0,
                shakeTimescale: 0,
                shakeAmount: 0,
                whiteNoiseAmount: 0,
                shuffleAmount: 0,
                quadExtraNoise: 0,
              },
            },
            t = {
              globalTimescale: 0.91,
              post: { verticalPixelSmudgeAmount: 5.21 },
              plane: { planeThreshold: 0 },
            },
            i = {
              post: { verticalPixelSmudgeAmount: 0 },
              plane: { planeThreshold: 0 },
            };
          this.settingsUI.applyPresetSettings(e);
          let s = v.ZP.timeline({
            onUpdate: () => {
              this.settingsUI.setGlobalStrength(e.globalTimescale),
                this.settingsUI.applyPresetSettings(e);
            },
            onComplete: () => {
              (this.isRunningIntro = !1),
                this.postEffectManager.startGlitchTimeline();
            },
          });
          s.to(
            e.post,
            {
              duration: 0.2,
              verticalPixelSmudgeAmount: t.post.verticalPixelSmudgeAmount,
            },
            0.2
          ),
            s.to(
              e.plane,
              { duration: 0.2, planeThreshold: t.plane.planeThreshold },
              0.2
            ),
            s.to(e, { duration: 0.2, globalTimescale: t.globalTimescale }, 0.2),
            s.to(
              e.post,
              {
                duration: 0.2,
                verticalPixelSmudgeAmount: i.post.verticalPixelSmudgeAmount,
              },
              0.4
            ),
            s.to(
              e.plane,
              { duration: 0.1, planeThreshold: i.plane.planeThreshold },
              0.4
            ),
            (this.timeline = s);
        }
        afterTransitionOut() {
          return new Promise((e, t) => {
            this.experience.debug.reset(), e();
          });
        }
        exitFullGlitch() {
          this.drawImageScaled(!1),
            (this.canvasTexture.needsUpdate = !0),
            this.settingsUI.applyPresetSettings({
              globalTimescale: 0.91,
              post: {
                verticalPixelSmudgeAmount: 0,
                verticalPixelSmudgeStepUp: 53.14,
                verticalPixelSmudgeStepDown: 75,
                asciiAmount: 0,
                asciiUvSize: 16,
                posterizeColors: 48,
                posterizeGamma: 0.86,
                scanlinesAmount: 0,
              },
              plane: {
                planeThreshold: 0,
                blockNoiseTimescale: 0.33,
                blockNoiseAmount: 0,
                rgbWaveTimescale: 0,
                rgbWaveAmount: 0,
                shakeTimescale: 0,
                shakeAmount: 0,
                whiteNoiseAmount: 0,
                shuffleAmount: 0,
                quadExtraNoise: 0,
                quadOffset: { x: 0, y: 0, z: 0 },
                quadRandomColor: 0,
                saturation: 1,
              },
              landingquads: { reduce: 1 },
            });
        }
        gotoFullGlitch() {
          this.drawImageScaled(!0), (this.canvasTexture.needsUpdate = !0);
          let e = {
              globalTimescale: 0.91,
              post: {
                verticalPixelSmudgeAmount: 0,
                verticalPixelSmudgeStepUp: 53.14,
                verticalPixelSmudgeStepDown: 75,
                asciiAmount: 0,
                asciiUvSize: 16,
                posterizeColors: 48,
                posterizeGamma: 0.86,
                scanlinesAmount: 0,
              },
              plane: {
                planeThreshold: 0,
                blockNoiseTimescale: 0.33,
                blockNoiseAmount: 0,
                rgbWaveTimescale: 0,
                rgbWaveAmount: 0,
                shakeTimescale: 0,
                shakeAmount: 0,
                whiteNoiseAmount: 0,
                shuffleAmount: 0,
                quadExtraNoise: 0,
                quadOffset: { x: 0, y: 0, z: 0 },
                quadRandomColor: 0,
                saturation: 1,
              },
              landingquads: { reduce: 1 },
            },
            t = {
              globalTimescale: 0.87,
              post: {
                verticalPixelSmudgeAmount: 17,
                verticalPixelSmudgeStepUp: 10,
                verticalPixelSmudgeStepDown: 31,
                asciiAmount: 0.66,
                scanlinesAmount: 1,
              },
              plane: {
                planeThreshold: 0,
                blockNoiseAmount: 0.29,
                quadOffset: { x: 0.71, y: 0, z: 0.01 },
                quadRandomColor: 0.005,
                saturation: 0,
              },
            },
            i = v.ZP.timeline({
              onUpdate: () => {
                this.settingsUI.applyPresetSettings(e);
              },
              onComplete: () => {
                this.postEffectManager.startGlitchTimeline();
              },
            });
          i.to(e, { duration: 0.2, globalTimescale: t.globalTimescale }, 0),
            i.to(e.plane, { duration: 1, saturation: t.plane.saturation }, 0),
            i.to(
              e.post,
              {
                duration: 0.2,
                verticalPixelSmudgeAmount: t.post.verticalPixelSmudgeAmount,
                verticalPixelSmudgeStepUp: t.post.verticalPixelSmudgeStepUp,
                verticalPixelSmudgeStepDown: t.post.verticalPixelSmudgeStepDown,
                asciiAmount: t.post.asciiAmount,
                scanlinesAmount: t.post.scanlinesAmount,
              },
              0.2
            ),
            i.to(
              e.plane,
              {
                duration: 0.2,
                planeThreshold: t.plane.planeThreshold,
                blockNoiseAmount: t.plane.blockNoiseAmount,
                quadRandomColor: t.plane.quadRandomColor,
              },
              0.2
            ),
            i.to(
              e.plane.quadOffset,
              {
                duration: 0.2,
                x: t.plane.quadOffset.x,
                z: t.plane.quadOffset.z,
              },
              0.2
            ),
            i.to(e.landingquads, { duration: 0.1, reduce: 0 }, 0.2),
            i.to(
              e.landingquads,
              { duration: 0.5, reduce: 1, ease: "steps(5)" },
              0.3
            );
        }
        createAllModules() {
          D.forEach((e) => {
            let t = new e();
            t.settingsType === m.a.BackgroundQuads ||
            t.settingsType === m.a.SurfaceAscii
              ? this.camera.add(t.group)
              : this.scene.add(t.group),
              this.activeEffects.push(t);
          });
        }
        getAllEffects() {
          return this.activeEffects;
        }
        initSettingsUI() {
          this.settingsFolder && this.settingsFolder.dispose(),
            this.experience.debug.isActive &&
              (this.settingsFolder = this.settingsUI.pane.addFolder({
                title: "General",
                expanded: !1,
                index: 0,
              }));
        }
        createBackground() {
          this.bgMaterial = new l.jyz({
            uniforms: {
              color1: { value: new l.Ilk(this.settings.color1) },
              color2: { value: new l.Ilk(this.settings.color2) },
            },
            vertexShader:
              "precision highp float;\nprecision mediump int;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\n\nvoid main()	{\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
            fragmentShader:
              "precision highp float;\nprecision mediump int;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\n\nuniform vec3 color1;\nuniform vec3 color2;\n\nvoid main() {\n	vec3 color = mix(color1, color2, vUv.y);\n	gl_FragColor = vec4(color,1.0);\n}\n",
          });
          let e = new l.Kj0(new l._12(100, 100, 1, 1), this.bgMaterial);
          (this.backPlane = e), (e.position.z = -105), this.camera.add(e);
        }
        async loadAsset(e) {
          "" !== e &&
            void 0 !== e &&
            ((this.currentAssetUrl = e),
            e.includes(".jpg") || e.includes(".png")
              ? await this.loadImage(e)
              : e.includes(".mp4")
              ? await this.loadVideo(e)
              : (e.includes(".glb") ||
                  e.includes(".gltf") ||
                  e.includes(".ply")) &&
                (await this.loadModel(e)));
        }
        async loadImage(e) {
          let t = e.startsWith("https") ? e : I + e;
          return (
            e.startsWith("blob") && (t = e),
            new Promise((e, i) => {
              this.experience.assetManager
                .loadManifest([{ key: t, url: t }], "streamnode-content")
                .then(() => {
                  let i = this.experience.assetManager.getTexture(t);
                  i &&
                    ((this.currentImageAsset = i.source.data),
                    this.drawImageScaled(!1),
                    (this.canvasTexture = new l.ROQ(this.canvas)),
                    (this.canvasTexture.colorSpace = l.KI_),
                    this.experience.assetManager.removeTexture(t),
                    this.experience.assetManager.addTexture(
                      t,
                      this.canvasTexture,
                      "streamnode-content"
                    ),
                    this.activeEffects.forEach((e) => {
                      e.setSource(t), e.setSourceTextureAspect(1);
                    })),
                    e();
                })
                .catch(() => {
                  i();
                });
            })
          );
        }
        async loadVideo(e) {
          let t = e.startsWith("https") ? e : F + e;
          return (
            e.startsWith("blob") && (t = e),
            new Promise((e, i) => {
              this.experience.assetManager
                .loadManifest([{ key: t, url: t }], "streamnode-content")
                .then(() => {
                  let i = this.experience.assetManager.getVideo(t);
                  if (i) {
                    let e =
                      i.source.data.videoWidth / i.source.data.videoHeight;
                    this.activeEffects.forEach((i) => {
                      i.setSource(t), i.setSourceTextureAspect(e);
                    });
                  }
                  e();
                })
                .catch(() => {
                  i();
                });
            })
          );
        }
        async loadModel(e) {
          let t = e.startsWith("https") ? e : k + e;
          return (
            e.startsWith("blob") && (t = e),
            this.experience.assetManager.unloadNamespace("streamnode-content"),
            new Promise((e, i) => {
              this.experience.assetManager
                .loadManifest([{ key: t, url: t }], "streamnode-content")
                .then(() => {
                  this.activeEffects.forEach((e) => {
                    e.setSource(t);
                  }),
                    e();
                })
                .catch(() => {
                  i();
                });
            })
          );
        }
        update(e, t) {
          if (this.isDestroyed) return;
          let i = l.M8C.clamp(this.experience.sizes.width / 2500, 0, 0.9);
          l.M8C.clamp(this.experience.sizes.height / 700, 0, 0.9),
            (this.camera.position.z = 3 - l.M8C.mapLinear(i, 0.5, 1, 0, 1.2)),
            (this.camera.position.y = 0 + l.M8C.mapLinear(i, 0.5, 1, 0, 0.3)),
            (this.cameraTarget.y = this.camera.position.y),
            this.camera.lookAt(this.cameraTarget),
            (this.time = e),
            this.patternPlane.update(
              this.time * this.settingsUI.shared.globalTimescale
            ),
            this.activeEffects.forEach((e) => {
              e.update(this.time * this.settingsUI.shared.globalTimescale, t),
                e.lookAtCamera
                  ? e.group.lookAt(this.camera.position)
                  : e.group.rotation.set(0, 0, 0);
            }),
            this.postEffectManager.render(this.time, t);
        }
        dispose() {
          this.unsubscribeToStoreFunction && this.unsubscribeToStoreFunction(),
            this.timeline && (this.timeline.kill(), (this.timeline = void 0)),
            f.h.getState().api.trigger.remove(this.onTrigger),
            this.experience.sizes.clearElementReference(),
            this.experience.sizes.off("resize", this.onResizeHandler),
            super.dispose(),
            (this.isDestroyed = !0),
            this.postEffectManager.dispose && this.postEffectManager.dispose(),
            this.settingsFolder &&
              (this.settingsFolder.children.forEach((e) => {
                e.dispose();
              }),
              this.settingsFolder.dispose()),
            this.settingsUI.onSettingsUpdated.removeAll(),
            this.settingsUI.onSettingsReset.removeAll(),
            this.activeEffects.forEach((e) => {
              e.destroy();
            });
        }
        constructor(e) {
          var t;
          super(e),
            (t = this),
            (this.cameraTarget = new l.Pa4()),
            (this.isDestroyed = !1),
            (this.time = 0),
            (this.activeEffects = []),
            (this.isRunningIntro = !0),
            (this.currentColorMode = -1),
            (this.landingGlitchMode = f.dl.NotSet),
            (this.onStoreStateChanged = () => {
              let e = f.h.getState();
              if (e.landingGlitchMode !== this.landingGlitchMode) {
                if (this.isRunningIntro) return;
                e.landingGlitchMode === f.dl.Hero
                  ? this.postEffectManager.startGlitchTimeline()
                  : this.postEffectManager.stopGlitchTimeline(),
                  e.landingGlitchMode === f.dl.Full
                    ? this.gotoFullGlitch()
                    : this.landingGlitchMode === f.dl.Full &&
                      this.exitFullGlitch(),
                  (this.landingGlitchMode = e.landingGlitchMode);
              }
              if (e.landingColorMode !== this.currentColorMode) {
                this.currentColorMode = e.landingColorMode;
                let t = { value: 0 };
                1 === this.currentColorMode
                  ? this.postEffectManager.setSaturation(0)
                  : this.postEffectManager.setSaturation(1);
                let i = new l.Ilk(this.bgMaterial.uniforms.color1.value),
                  s = new l.Ilk(E[this.currentColorMode][0]),
                  n = new l.Ilk(this.bgMaterial.uniforms.color2.value),
                  a = new l.Ilk(E[this.currentColorMode][1]);
                v.ZP.to(t, {
                  value: 1,
                  duration: 0.5,
                  onUpdate: () => {
                    this.bgMaterial.uniforms.color1.value.copy(
                      _.lerpColors(i, s, t.value)
                    ),
                      this.bgMaterial.uniforms.color2.value.copy(
                        _.lerpColors(n, a, t.value)
                      ),
                      1 === this.currentColorMode
                        ? (this.patternPlane.planeMaterial.uniforms.opacity.value =
                            0.3 * t.value)
                        : (this.patternPlane.planeMaterial.uniforms.opacity.value =
                            1 - 0.2 * t.value);
                  },
                });
              }
            }),
            (this.onTrigger = (e) => {
              e.type === f.zn.LandingIntroGlitch && this.startIntroGlitch();
            }),
            (this.applySettings = () => {
              this.bgMaterial;
            }),
            (this.drawImageScaled = function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                i = t.canvas,
                s = Math.min(
                  i.width / t.currentImageAsset.width,
                  i.height / t.currentImageAsset.height
                ),
                n = (i.width - t.currentImageAsset.width * s) / 2,
                a = (i.height - t.currentImageAsset.height * s) / 2;
              t.ctx.clearRect(0, 0, i.width, i.height),
                (t.ctx.fillStyle = "#666666"),
                e && t.ctx.fillRect(0, 0, i.width, i.height),
                t.ctx.drawImage(
                  t.currentImageAsset,
                  0,
                  0,
                  t.currentImageAsset.width,
                  t.currentImageAsset.height,
                  n,
                  a,
                  t.currentImageAsset.width * s,
                  t.currentImageAsset.height * s
                );
            }),
            (this.onResizeHandler = () => {
              let e = Math.ceil(this.experience.sizes.width),
                t = Math.ceil(this.experience.sizes.height);
              (this.camera.aspect = e / t),
                this.camera.updateProjectionMatrix(),
                r.Z.getRenderer().setSize(e, t),
                this.postEffectManager.resize(e, t),
                this.activeEffects.forEach((e) => {
                  e.resize(this.experience.sizes);
                }),
                this.backPlane.scale.set(e / 1e3, t / 1e3, 1),
                (this.backPlane.position.z =
                  -(0.1 * t) /
                  (2 * Math.tan(this.camera.fov * (Math.PI / 360))));
            }),
            (this.canvas = document.createElement("canvas")),
            (this.ctx = this.canvas.getContext("2d")),
            (this.canvas.width = 2048),
            (this.canvas.height = 2048),
            (this.camera = new l.cPb(
              40,
              window.innerWidth / window.innerHeight,
              0.1,
              300
            )),
            (this.camera.position.z = 4),
            (this.camera.position.y = 0.1),
            (this.cameraTarget.y = 0.1),
            (this.scene = new l.xsS()),
            (this.scene = new l.xsS()),
            (this.scene.background = new l.Ilk(0)),
            this.scene.add(this.camera),
            this.camera.lookAt(this.cameraTarget),
            this.experience.sizes.registerElement(
              r.Z.getRenderer().domElement.parentElement
            ),
            this.experience.sizes.on("resize", this.onResizeHandler),
            (this.defaultSettings = {
              animateCamera: !0,
              color1: E[0][0],
              color2: E[0][1],
            }),
            (this.settings = JSON.parse(JSON.stringify(this.defaultSettings))),
            this.createBackground(),
            (this.postEffectManager = new p(r.Z.getRenderer())),
            this.postEffectManager.setSceneAndCamera(this.scene, this.camera),
            (this.patternPlane = new U()),
            (this.patternPlane.group.position.z = -0.1),
            (this.patternPlane.planeMaterial.uniforms.opacity.value = 1),
            this.scene.add(this.patternPlane.group),
            (this.landingQuads = new z()),
            (this.landingQuads.group.position.z = 0.5),
            this.scene.add(this.landingQuads.group),
            (this.unsubscribeToStoreFunction = f.h.subscribe(
              this.onStoreStateChanged
            )),
            f.h.getState().api.trigger.add(this.onTrigger),
            this.onResizeHandler();
        }
      }
    },
    0: function (e, t, i) {
      i.d(t, {
        Q: function () {
          return o;
        },
      });
      var s = i(3197),
        n = i(6461),
        a = i(2182);
      class o {
        get name() {
          return this.config.id;
        }
        load() {
          let { debounce: e } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.isLoaded = !1;
          let t = (0, n.hj)(e) ? (0, a.D)(e) : Promise.resolve(),
            i = this.experience.assetManager.loadManifest(
              this.config.assetsManifest,
              this.config.id
            );
          return new Promise((e, s) => {
            Promise.all([t, i])
              .then(() => {
                (this.isLoaded = !0), e();
              })
              .catch((e) => {
                s(e);
              });
          });
        }
        beforeTransitionIn() {
          return Promise.resolve();
        }
        afterTransitionIn() {
          return Promise.resolve();
        }
        beforeTransitionOut() {
          return Promise.resolve();
        }
        afterTransitionOut() {
          return Promise.resolve();
        }
        addEventListeners() {}
        removeEventListeners() {}
        resize() {
          if (!this.isLoaded) return;
        }
        _bind() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          for (let e of t) {
            if (!this[e])
              throw Error("The function ".concat(e, " is not defined"));
            this[e] = this[e].bind(this);
          }
        }
        dispose() {
          this.removeEventListeners();
          let e = [];
          for (
            this.scene.traverse((t) => {
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
            this.scene.children.length > 0;

          )
            this.scene.remove(this.scene.children[0]);
          this.experience.assetManager.unloadNamespace(this.config.id);
        }
        constructor(e) {
          (this.isLoaded = !1),
            (this.config = e),
            (this.experience = new s.default());
        }
      }
    },
    6090: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return c;
        },
        a: function () {
          return n;
        },
      });
      var s,
        n,
        a = i(29),
        o = i(7172),
        r = i(3197);
      let l = "default";
      ((s = n || (n = {})).All = "all"),
        (s.None = "none"),
        (s.Plane = "plane"),
        (s.Ascii = "ascii"),
        (s.Columns = "columns"),
        (s.Stream = "stream"),
        (s.Post = "post"),
        (s.Grid = "grid"),
        (s.PointCloud = "point-cloud"),
        (s.Lines = "lines"),
        (s.SurfaceQuads = "surface-quads"),
        (s.BackgroundQuads = "background-quads"),
        (s.SurfaceAscii = "surface-ascii"),
        (s.LandingNoise = "landing-noise"),
        (s.LandingQuads = "landingquads");
      let h = null;
      class c {
        reset() {
          this.resetToDefault(),
            this.onSettingsUpdated.removeAll(),
            this.onSharedUpdated.removeAll(),
            this.onSettingsReset.removeAll();
        }
        initPresetSettings() {
          Object.keys(o.Z);
        }
        setPreset() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : l,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          (this.currentPresetName !== e || t) &&
            ((this.currentPresetName = e),
            this.resetToDefault(),
            Object.keys(o.Z).includes(e)
              ? this.applyPresetSettings(o.Z[e])
              : this.applyPresetSettings(o.Z[l]));
        }
        initSharedUI() {
          this.pane
            .addBinding(this.shared, "globalTimescale", { min: 0, max: 4 })
            .on("change", () => {
              this.onSharedUpdated.invoke();
            });
        }
        applyPresetSettings(e) {
          Object.keys(e).forEach((t) => {
            this.onSettingsUpdated.invoke({ type: t, settings: e[t] });
          }),
            this.onSettingsUpdated.invoke({ type: n.All, settings: e }),
            this.debug.isActive && this.pane.refresh();
        }
        resetToDefault() {
          this.onSettingsReset.invoke(),
            this.debug.isActive && this.pane.refresh();
        }
        setGlobalStrength(e) {
          (this.shared.globalStrength = e),
            this.onSharedUpdated.invoke(),
            this.debug.isActive &&
              this.globalStrengthController &&
              this.globalStrengthController.refresh();
        }
        getElement() {
          return this.pane.element;
        }
        constructor() {
          if (
            ((this.shared = { globalStrength: 1, globalTimescale: 1 }),
            (this.onSharedUpdated = new a.Z()),
            (this.onSettingsUpdated = new a.Z()),
            (this.onSettingsReset = new a.Z()),
            (this.onSettingsSolo = new a.Z()),
            h)
          )
            return h;
          h = this;
          let e = new r.default();
          (this.debug = e.debug),
            (this.pane = this.debug.pane),
            this.debug.isActive &&
              (this.initPresetSettings(), this.initSharedUI());
        }
      }
    },
    4210: function (e, t, i) {
      i.d(t, {
        x: function () {
          return r;
        },
      });
      var s = i(9477);
      let n = {
        name: "CopyShader",
        uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } },
        vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
        fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`,
      };
      var a = i(7531),
        o = i(4604);
      class r {
        constructor(e, t) {
          if (
            ((this.renderer = e),
            (this._pixelRatio = e.getPixelRatio()),
            void 0 === t)
          ) {
            let i = e.getSize(new s.FM8());
            (this._width = i.width),
              (this._height = i.height),
              ((t = new s.dd2(
                this._width * this._pixelRatio,
                this._height * this._pixelRatio,
                { type: s.cLu }
              )).texture.name = "EffectComposer.rt1");
          } else (this._width = t.width), (this._height = t.height);
          (this.renderTarget1 = t),
            (this.renderTarget2 = t.clone()),
            (this.renderTarget2.texture.name = "EffectComposer.rt2"),
            (this.writeBuffer = this.renderTarget1),
            (this.readBuffer = this.renderTarget2),
            (this.renderToScreen = !0),
            (this.passes = []),
            (this.copyPass = new a.T(n)),
            (this.copyPass.material.blending = s.jFi),
            (this.clock = new s.SUY());
        }
        swapBuffers() {
          let e = this.readBuffer;
          (this.readBuffer = this.writeBuffer), (this.writeBuffer = e);
        }
        addPass(e) {
          this.passes.push(e),
            e.setSize(
              this._width * this._pixelRatio,
              this._height * this._pixelRatio
            );
        }
        insertPass(e, t) {
          this.passes.splice(t, 0, e),
            e.setSize(
              this._width * this._pixelRatio,
              this._height * this._pixelRatio
            );
        }
        removePass(e) {
          let t = this.passes.indexOf(e);
          -1 !== t && this.passes.splice(t, 1);
        }
        isLastEnabledPass(e) {
          for (let t = e + 1; t < this.passes.length; t++)
            if (this.passes[t].enabled) return !1;
          return !0;
        }
        render(e) {
          void 0 === e && (e = this.clock.getDelta());
          let t = this.renderer.getRenderTarget(),
            i = !1;
          for (let t = 0, s = this.passes.length; t < s; t++) {
            let s = this.passes[t];
            if (!1 !== s.enabled) {
              if (
                ((s.renderToScreen =
                  this.renderToScreen && this.isLastEnabledPass(t)),
                s.render(
                  this.renderer,
                  this.writeBuffer,
                  this.readBuffer,
                  e,
                  i
                ),
                s.needsSwap)
              ) {
                if (i) {
                  let t = this.renderer.getContext(),
                    i = this.renderer.state.buffers.stencil;
                  i.setFunc(t.NOTEQUAL, 1, 4294967295),
                    this.copyPass.render(
                      this.renderer,
                      this.writeBuffer,
                      this.readBuffer,
                      e
                    ),
                    i.setFunc(t.EQUAL, 1, 4294967295);
                }
                this.swapBuffers();
              }
              void 0 !== o.F &&
                (s instanceof o.F ? (i = !0) : s instanceof o.M && (i = !1));
            }
          }
          this.renderer.setRenderTarget(t);
        }
        reset(e) {
          if (void 0 === e) {
            let t = this.renderer.getSize(new s.FM8());
            (this._pixelRatio = this.renderer.getPixelRatio()),
              (this._width = t.width),
              (this._height = t.height),
              (e = this.renderTarget1.clone()).setSize(
                this._width * this._pixelRatio,
                this._height * this._pixelRatio
              );
          }
          this.renderTarget1.dispose(),
            this.renderTarget2.dispose(),
            (this.renderTarget1 = e),
            (this.renderTarget2 = e.clone()),
            (this.writeBuffer = this.renderTarget1),
            (this.readBuffer = this.renderTarget2);
        }
        setSize(e, t) {
          (this._width = e), (this._height = t);
          let i = this._width * this._pixelRatio,
            s = this._height * this._pixelRatio;
          this.renderTarget1.setSize(i, s), this.renderTarget2.setSize(i, s);
          for (let e = 0; e < this.passes.length; e++)
            this.passes[e].setSize(i, s);
        }
        setPixelRatio(e) {
          (this._pixelRatio = e), this.setSize(this._width, this._height);
        }
        dispose() {
          this.renderTarget1.dispose(),
            this.renderTarget2.dispose(),
            this.copyPass.dispose();
        }
      }
    },
    4604: function (e, t, i) {
      i.d(t, {
        F: function () {
          return n;
        },
        M: function () {
          return a;
        },
      });
      var s = i(8304);
      class n extends s.w {
        constructor(e, t) {
          super(),
            (this.scene = e),
            (this.camera = t),
            (this.clear = !0),
            (this.needsSwap = !1),
            (this.inverse = !1);
        }
        render(e, t, i) {
          let s, n;
          let a = e.getContext(),
            o = e.state;
          o.buffers.color.setMask(!1),
            o.buffers.depth.setMask(!1),
            o.buffers.color.setLocked(!0),
            o.buffers.depth.setLocked(!0),
            this.inverse ? ((s = 0), (n = 1)) : ((s = 1), (n = 0)),
            o.buffers.stencil.setTest(!0),
            o.buffers.stencil.setOp(a.REPLACE, a.REPLACE, a.REPLACE),
            o.buffers.stencil.setFunc(a.ALWAYS, s, 4294967295),
            o.buffers.stencil.setClear(n),
            o.buffers.stencil.setLocked(!0),
            e.setRenderTarget(i),
            this.clear && e.clear(),
            e.render(this.scene, this.camera),
            e.setRenderTarget(t),
            this.clear && e.clear(),
            e.render(this.scene, this.camera),
            o.buffers.color.setLocked(!1),
            o.buffers.depth.setLocked(!1),
            o.buffers.color.setMask(!0),
            o.buffers.depth.setMask(!0),
            o.buffers.stencil.setLocked(!1),
            o.buffers.stencil.setFunc(a.EQUAL, 1, 4294967295),
            o.buffers.stencil.setOp(a.KEEP, a.KEEP, a.KEEP),
            o.buffers.stencil.setLocked(!0);
        }
      }
      class a extends s.w {
        constructor() {
          super(), (this.needsSwap = !1);
        }
        render(e) {
          e.state.buffers.stencil.setLocked(!1),
            e.state.buffers.stencil.setTest(!1);
        }
      }
    },
    8304: function (e, t, i) {
      i.d(t, {
        T: function () {
          return r;
        },
        w: function () {
          return n;
        },
      });
      var s = i(9477);
      class n {
        constructor() {
          (this.isPass = !0),
            (this.enabled = !0),
            (this.needsSwap = !0),
            (this.clear = !1),
            (this.renderToScreen = !1);
        }
        setSize() {}
        render() {
          console.error(
            "THREE.Pass: .render() must be implemented in derived pass."
          );
        }
        dispose() {}
      }
      let a = new s.iKG(-1, 1, 1, -1, 0, 1),
        o = new s.u9r();
      o.setAttribute("position", new s.a$l([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
        o.setAttribute("uv", new s.a$l([0, 2, 0, 0, 2, 0], 2));
      class r {
        constructor(e) {
          this._mesh = new s.Kj0(o, e);
        }
        dispose() {
          this._mesh.geometry.dispose();
        }
        render(e) {
          e.render(this._mesh, a);
        }
        get material() {
          return this._mesh.material;
        }
        set material(e) {
          this._mesh.material = e;
        }
      }
    },
    4458: function (e, t, i) {
      i.d(t, {
        C: function () {
          return a;
        },
      });
      var s = i(9477),
        n = i(8304);
      class a extends n.w {
        constructor(e, t, i = null, n = null, a = null) {
          super(),
            (this.scene = e),
            (this.camera = t),
            (this.overrideMaterial = i),
            (this.clearColor = n),
            (this.clearAlpha = a),
            (this.clear = !0),
            (this.clearDepth = !1),
            (this.needsSwap = !1),
            (this._oldClearColor = new s.Ilk());
        }
        render(e, t, i) {
          let s, n;
          let a = e.autoClear;
          (e.autoClear = !1),
            null !== this.overrideMaterial &&
              ((n = this.scene.overrideMaterial),
              (this.scene.overrideMaterial = this.overrideMaterial)),
            null !== this.clearColor &&
              (e.getClearColor(this._oldClearColor),
              e.setClearColor(this.clearColor)),
            null !== this.clearAlpha &&
              ((s = e.getClearAlpha()), e.setClearAlpha(this.clearAlpha)),
            !0 == this.clearDepth && e.clearDepth(),
            e.setRenderTarget(this.renderToScreen ? null : i),
            !0 === this.clear &&
              e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
            e.render(this.scene, this.camera),
            null !== this.clearColor && e.setClearColor(this._oldClearColor),
            null !== this.clearAlpha && e.setClearAlpha(s),
            null !== this.overrideMaterial && (this.scene.overrideMaterial = n),
            (e.autoClear = a);
        }
      }
    },
    7531: function (e, t, i) {
      i.d(t, {
        T: function () {
          return a;
        },
      });
      var s = i(9477),
        n = i(8304);
      class a extends n.w {
        constructor(e, t) {
          super(),
            (this.textureID = void 0 !== t ? t : "tDiffuse"),
            e instanceof s.jyz
              ? ((this.uniforms = e.uniforms), (this.material = e))
              : e &&
                ((this.uniforms = s.rDY.clone(e.uniforms)),
                (this.material = new s.jyz({
                  name: void 0 !== e.name ? e.name : "unspecified",
                  defines: Object.assign({}, e.defines),
                  uniforms: this.uniforms,
                  vertexShader: e.vertexShader,
                  fragmentShader: e.fragmentShader,
                }))),
            (this.fsQuad = new n.T(this.material));
        }
        render(e, t, i) {
          this.uniforms[this.textureID] &&
            (this.uniforms[this.textureID].value = i.texture),
            (this.fsQuad.material = this.material),
            this.renderToScreen
              ? e.setRenderTarget(null)
              : (e.setRenderTarget(t),
                this.clear &&
                  e.clear(
                    e.autoClearColor,
                    e.autoClearDepth,
                    e.autoClearStencil
                  )),
            this.fsQuad.render(e);
        }
        dispose() {
          this.material.dispose(), this.fsQuad.dispose();
        }
      }
    },
  },
]);
