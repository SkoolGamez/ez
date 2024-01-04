(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [270],
  {
    2779: function (t, r) {
      var i;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var e = {}.hasOwnProperty;
        function n() {
          for (var t = [], r = 0; r < arguments.length; r++) {
            var i = arguments[r];
            if (i) {
              var a = typeof i;
              if ("string" === a || "number" === a) t.push(i);
              else if (Array.isArray(i)) {
                if (i.length) {
                  var s = n.apply(null, i);
                  s && t.push(s);
                }
              } else if ("object" === a) {
                if (
                  i.toString !== Object.prototype.toString &&
                  !i.toString.toString().includes("[native code]")
                ) {
                  t.push(i.toString());
                  continue;
                }
                for (var c in i) e.call(i, c) && i[c] && t.push(c);
              }
            }
          }
          return t.join(" ");
        }
        t.exports
          ? ((n.default = n), (t.exports = n))
          : void 0 !==
              (i = function () {
                return n;
              }.apply(r, [])) && (t.exports = i);
      })();
    },
    6858: function (t, r, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[locale]/districts",
        function () {
          return i(2295);
        },
      ]);
    },
    8491: function (t, r, i) {
      "use strict";
      i.d(r, {
        q: function () {
          return l;
        },
      });
      var e = i(2322);
      i(2784);
      var n = i(848),
        a = i.n(n),
        s = i(9374);
      let c = (0, s.n)(a(), "detailsContentWrapper"),
        l = (t) => {
          let { label: r, className: i, children: n, centerLabel: a = !1 } = t;
          return (0, e.jsxs)("div", {
            className: "".concat(c(), " ").concat(i),
            children: [
              (0, e.jsxs)("div", {
                className: c("header"),
                "data-center": a,
                children: ["[", r, "]"],
              }),
              n,
            ],
          });
        };
    },
    2295: function (t, r, i) {
      "use strict";
      i.r(r),
        i.d(r, {
          __N_SSG: function () {
            return R;
          },
          default: function () {
            return X;
          },
        });
      var e = i(2322),
        n = i(2784),
        a = i(2285),
        s = i(489),
        c = i(9374),
        l = i(957),
        d = i.n(l);
      let o = (0, c.n)(d(), "contentWrapper"),
        _ = (t) => {
          let {
            children: r,
            className: i = "",
            style: n = {},
            as: a = "div",
            ...c
          } = t;
          return (0, e.jsx)(a, {
            role: "presentation",
            className: (0, s.Z)(d().contentWrapper, i, o("")),
            style: n,
            ...c,
            children: r,
          });
        };
      var p = i(3762),
        u = i.n(p),
        f = i(9603),
        m = i.n(f),
        h = i(5126),
        g = i(3702),
        C = i(3367),
        v = i(8491);
      let x = (0, c.n)(m(), "districtCard"),
        N = (t) => {
          let {
              as: r = "div",
              className: i = "",
              style: c = {},
              id: l,
              status: d,
              image: o,
              ..._
            } = t,
            [p, u] = (0, n.useState)(Math.floor(100 * Math.random())),
            { translate: f } = (0, h.$G)();
          return (
            (0, n.useEffect)(() => {
              let t;
              return (
                d === a.Ie.OFFLINE &&
                  (t = setInterval(() => {
                    u((t) => (100 === t ? 1 : t + 1));
                  }, 100)),
                () => {
                  d === a.Ie.OFFLINE && clearInterval(t);
                }
              );
            }, []),
            (0, e.jsxs)(r, {
              className: (0, s.Z)(x(), i),
              style: c,
              "data-status": d,
              ..._,
              children: [
                (0, e.jsx)("div", {
                  className: x("image"),
                  children: (0, e.jsx)("img", { src: o, alt: "" }),
                }),
                (0, e.jsx)(v.q, {
                  label: d,
                  className: x("info"),
                  children:
                    d === a.Ie.ONLINE
                      ? (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: x("ip"),
                              children: _.ip,
                            }),
                            (0, e.jsx)("h2", {
                              className: x("id"),
                              children: l,
                            }),
                            (0, e.jsx)("div", {
                              className: x("description"),
                              children: _.description,
                            }),
                            (0, e.jsx)(C.z, {
                              className: x("button"),
                              onClick: () => {},
                              children: (0, e.jsx)("p", {
                                children: f("district_selector_button_label"),
                              }),
                            }),
                          ],
                        })
                      : (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsxs)("p", {
                              children: [
                                f("district_selector_offline_scanning"),
                                "...",
                              ],
                            }),
                            (0, e.jsx)(g.r, {
                              className: x("scanningBar"),
                              progressValue: p,
                              hideBackground: !0,
                            }),
                            (0, e.jsx)("p", { children: "..." }),
                            (0, e.jsx)("p", { children: "..." }),
                          ],
                        }),
                }),
              ],
            })
          );
        };
      var k = i(3231),
        W = i(3562),
        j = i(4145),
        A = i(5239),
        S = i(12),
        I = i.n(S),
        O = i(3670),
        D = i(2779),
        F = i.n(D);
      let P = { DURATION_IN: 0.3, DURATION_OUT: 0.1 },
        b = (t) => {
          var r, i;
          let {
              as: a = O.E.div,
              children: s,
              id: c,
              className: l = "",
              contentClassName: d = "",
              style: o = {},
              enter: _ = {},
              exit: p = {},
              show: u = !1,
              ...f
            } = t,
            m = n.useRef(null),
            h = {
              enter: {
                ..._,
                transition: {
                  duration: P.DURATION_IN,
                  ...(null !== (r = _.transition) && void 0 !== r ? r : {}),
                },
              },
              exit: {
                ...p,
                transition: {
                  duration: P.DURATION_OUT,
                  ...(null !== (i = p.transition) && void 0 !== i ? i : {}),
                },
              },
            };
          n.useEffect(() => {
            u && g("enter");
          }, [u]);
          let g = (t) => {
            var r, i;
            if (!m.current) return;
            let e = "";
            switch (t) {
              case "enter":
                e = "enter";
                break;
              case "exit":
                e = "exit";
            }
            let n =
              null !==
                (i =
                  null === (r = h[t].transition) || void 0 === r
                    ? void 0
                    : r.delay) && void 0 !== i
                ? i
                : 0;
            setTimeout(() => {
              m.current && (m.current.dataset.animState = e);
            }, 1e3 * n);
          };
          return (0, e.jsxs)(
            a,
            {
              ref: m,
              initial: "initial",
              exit: "exit",
              variants: h,
              onAnimationStart: g,
              className: F()(I().flickerAnimationWrapper, l),
              style: {
                ...o,
                "--anim-duration-in": "".concat(P.DURATION_IN, "s"),
                "--anim-duration-out": "".concat(P.DURATION_OUT, "s"),
              },
              ...f,
              children: [
                (0, e.jsx)("div", {
                  "aria-hidden": !0,
                  className: I().flickerAnimationWrapper__bg,
                }),
                (0, e.jsx)("div", {
                  className: F()(I().flickerAnimationWrapper__content, d),
                  children: s,
                }),
              ],
            },
            c
          );
        };
      var E = i(6635);
      let y = () => {
        let t = Math.floor(1e6 * Math.random())
          .toString()
          .padStart(6, "0");
        return t;
      };
      var w = i(6927),
        T = i(6176),
        U = i(3615),
        L = i(2182);
      let M = (0, c.n)(u(), "districtSelectorPage");
      var R = !0;
      function X(t) {
        let { districts: r = [] } = t,
          i = (0, W.m_)(),
          s = (0, E.EV)((t) => t.api),
          { translate: c } = (0, h.$G)(),
          l = (0, T.qr)((t) => t.isApplicationLocked),
          d = !l,
          [o, p] = n.useState([]);
        (0, w.n)(() => {
          let t = Math.max(16 - r.length, 0),
            i = [...Array(t)],
            e = i.map(() => ({
              status: a.Ie.OFFLINE,
              image: "/images/district-offline-".concat(
                (0, U.XF)(0, 2),
                ".png"
              ),
              id: "".concat(y()),
            }));
          p(e);
        }),
          n.useEffect(() => {
            if (d) {
              let t = async () => {
                await (0, L.D)(500);
                let t = Math.max(16, r.length),
                  e = r.filter((t) => t.status === a.Ie.ONLINE).length;
                i(
                  c("console_district_loading", {
                    args: [t, e, t - e],
                    fallback: "Fetching districts",
                  })
                );
              };
              t();
            }
          }, [d]);
        let u = (t) => {
          let r = (null == t ? void 0 : t.status) === a.Ie.ONLINE;
          i(
            c("console_map_district_clicked", {
              args: [null == t ? void 0 : t.id],
              fallback: "Access attempt district ".concat(
                null == t ? void 0 : t.id,
                " clicked"
              ),
            })
          ),
            r
              ? i(
                  c("console_map_district_online", {
                    args: [null == t ? void 0 : t.id],
                    fallback: "District ".concat(
                      null == t ? void 0 : t.id,
                      " is online"
                    ),
                  })
                )
              : (i(
                  c("console_map_district_offline", {
                    args: [null == t ? void 0 : t.id],
                    fallback: "District ".concat(
                      null == t ? void 0 : t.id,
                      " is offline"
                    ),
                  })
                ),
                i(
                  c("console_map_district_logged", {
                    fallback: "Unauthorised access attempt logged",
                  })
                ));
        };
        return (
          (0, j.q)(() => {
            s.set({ mapInTransitionFrom: "district-selector" });
          }),
          (0, e.jsx)(_, {
            as: "main",
            className: M(),
            children: (0, e.jsx)("ul", {
              className: M("grid"),
              children: (0, e.jsxs)(A.M, {
                children: [
                  r.map((t, r) =>
                    (0, e.jsx)(
                      b,
                      {
                        id: t.id,
                        enter: { transition: { delay: 0.1 * r } },
                        className: M("districtCardFlickerWrapper"),
                        contentClassName: M(
                          "districtCardFlickerWrapperContent"
                        ),
                        show: d,
                        children: (0, e.jsx)(e.Fragment, {
                          children:
                            t.status === a.Ie.ONLINE
                              ? (0, e.jsx)(
                                  k.U,
                                  {
                                    href: "/districts/".concat(
                                      t.id.replace("#", "")
                                    ),
                                    onClick: () => u(t),
                                    style: { display: "flex", width: "100%" },
                                    children: (0, e.jsx)(N, { ...t }),
                                  },
                                  t.id
                                )
                              : (0, e.jsx)(
                                  N,
                                  { as: "li", ...t, onClick: () => u(t) },
                                  t.id
                                ),
                        }),
                      },
                      t.id
                    )
                  ),
                  o.map((t, r) =>
                    (0, e.jsx)(
                      b,
                      {
                        id: "fake-district-card-".concat(r),
                        enter: { transition: { delay: 0.1 * r } },
                        className: M("districtCardFlickerWrapper"),
                        contentClassName: M(
                          "districtCardFlickerWrapperContent"
                        ),
                        show: d,
                        children: (0, e.jsx)(
                          N,
                          { as: "li", onClick: () => u(t), ...t },
                          "fake-district-card-".concat(r)
                        ),
                      },
                      "fake-district-card-".concat(r)
                    )
                  ),
                ],
              }),
            }),
          })
        );
      }
    },
    2182: function (t, r, i) {
      "use strict";
      i.d(r, {
        D: function () {
          return e;
        },
      });
      let e = function () {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
        return new Promise((r) => {
          setTimeout(r, t);
        });
      };
    },
    957: function (t) {
      t.exports = {
        contentWrapper: "ContentWrapper_contentWrapper__EEHX_",
        contentWrapper__inner: "ContentWrapper_contentWrapper__inner__iWrOc",
      };
    },
    848: function (t) {
      t.exports = {
        detailsContentWrapper:
          "DetailsContentWrapper_detailsContentWrapper__vXfg6",
        detailsContentWrapper__header:
          "DetailsContentWrapper_detailsContentWrapper__header__mOccI",
      };
    },
    9603: function (t) {
      t.exports = {
        districtCard: "DistrictCard_districtCard__Jlxs3",
        districtCard__header: "DistrictCard_districtCard__header__UtW4t",
        districtCard__image: "DistrictCard_districtCard__image__TXZZq",
        districtCard__info: "DistrictCard_districtCard__info__lS932",
        districtCard__status: "DistrictCard_districtCard__status__h_DBO",
        districtCard__description:
          "DistrictCard_districtCard__description__rPap3",
        districtCard__button: "DistrictCard_districtCard__button__MOrRA",
        districtCard__scanningBar:
          "DistrictCard_districtCard__scanningBar__wVju2",
      };
    },
    12: function (t) {
      t.exports = {
        flickerAnimationWrapper:
          "FlickerAnimationWrapper_flickerAnimationWrapper__r_g9s",
        flickerAnimationWrapper__bg:
          "FlickerAnimationWrapper_flickerAnimationWrapper__bg__VCPS2",
        flickerAnimationWrapper__content:
          "FlickerAnimationWrapper_flickerAnimationWrapper__content__wsLPC",
        reveal: "FlickerAnimationWrapper_reveal__uOdCU",
      };
    },
    3762: function (t) {
      t.exports = {
        districtSelectorPage:
          "DistrictSelectorPage_districtSelectorPage__QNAs_",
        districtSelectorPage__grid:
          "DistrictSelectorPage_districtSelectorPage__grid__gLYNf",
        districtSelectorPage__districtCardFlickerWrapper:
          "DistrictSelectorPage_districtSelectorPage__districtCardFlickerWrapper__Add3k",
        districtSelectorPage__districtCardFlickerWrapperContent:
          "DistrictSelectorPage_districtSelectorPage__districtCardFlickerWrapperContent__HP_O0",
      };
    },
  },
  function (t) {
    t.O(0, [774, 888, 179], function () {
      return t((t.s = 6858));
    }),
      (_N_E = t.O());
  },
]);
