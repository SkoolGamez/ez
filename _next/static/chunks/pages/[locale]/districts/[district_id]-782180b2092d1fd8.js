(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [206],
  {
    4475: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[locale]/districts/[district_id]",
        function () {
          return n(2731);
        },
      ]);
    },
    8491: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return r;
        },
      });
      var a = n(2322);
      n(2784);
      var o = n(848),
        i = n.n(o),
        s = n(9374);
      let d = (0, s.n)(i(), "detailsContentWrapper"),
        r = (e) => {
          let { label: t, className: n, children: o, centerLabel: i = !1 } = e;
          return (0, a.jsxs)("div", {
            className: "".concat(d(), " ").concat(n),
            children: [
              (0, a.jsxs)("div", {
                className: d("header"),
                "data-center": i,
                children: ["[", t, "]"],
              }),
              o,
            ],
          });
        };
    },
    9863: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return f;
        },
      });
      var a = n(2322),
        o = n(2784),
        i = n(2112),
        s = n.n(i),
        d = n(9374),
        r = n(8491),
        l = n(2285),
        c = n(3367),
        _ = n(7510),
        p = n(2794),
        m = n(5239),
        u = n(5126),
        N = n(9985),
        g = n(2152);
      let h = (0, d.n)(s(), "mapNode"),
        f = o.forwardRef((e, t) => {
          let {
              status: n,
              newNode: i = !1,
              completed: s = !1,
              logOnClick: d,
              handleRouteOnClick: f,
              type: y = l.jl.DEFAULT,
              participants: x,
              fileType: v,
              ...I
            } = e,
            [k, j] = (0, o.useState)(0),
            { translate: b } = (0, u.$G)(),
            C = (0, o.useRef)(null),
            [w, E] = (0, o.useState)(!0),
            [S, M] = (0, o.useState)(!1),
            P = (e) => {
              var t, n, a, o, i;
              e.stopPropagation(),
                e.preventDefault(),
                E(
                  p.bF.test(
                    null !==
                      (a =
                        null === (t = C.current) || void 0 === t
                          ? void 0
                          : t.value) && void 0 !== a
                      ? a
                      : ""
                  )
                ),
                p.bF.test(
                  null !==
                    (o =
                      null === (n = C.current) || void 0 === n
                        ? void 0
                        : n.value) && void 0 !== o
                    ? o
                    : ""
                ) &&
                  ((0, g.G5)(
                    null === (i = C.current) || void 0 === i ? void 0 : i.value,
                    "mind experience"
                  ),
                  M(!0));
            },
            T = () => {
              E(!0),
                j(1),
                setTimeout(() => {
                  j(0);
                }, 100);
            },
            L = (0, o.useRef)(null),
            O = (0, N.q)(L, t);
          (0, o.useEffect)(
            () => (
              2 === k &&
                L.current &&
                (window.addEventListener("click", U),
                window.addEventListener("touchstart", U)),
              () => {
                window.removeEventListener("click", U),
                  window.removeEventListener("touchstart", U);
              }
            ),
            [k, O]
          );
          let U = (e) => {
              let t = e.target;
              L.current.contains(t) || T();
            },
            D = (e) => {
              "Enter" === e.key && P(e);
            };
          return (
            (0, o.useEffect)(
              () => (
                C.current && C.current.addEventListener("keyup", D),
                () => {
                  C.current && C.current.removeEventListener("keyup", D);
                }
              ),
              [C, k]
            ),
            (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)("div", {
                ref: O,
                className: h(),
                "data-locked": n,
                "data-new": i,
                "data-completed": s,
                "data-type": y,
                "data-expanded": k,
                onClick:
                  2 === k && y !== l.jl.EMAIL_SIGNUP
                    ? f
                    : (e) => {
                        0 === k
                          ? (d(e),
                            j(1),
                            n === l.Ie.ONLINE
                              ? setTimeout(() => {
                                  j(2);
                                }, 100)
                              : setTimeout(() => {
                                  j(0);
                                }, 3e3))
                          : y !== l.jl.EMAIL_SIGNUP &&
                            (j(1),
                            setTimeout(() => {
                              j(0);
                            }, 100));
                      },
                ...I,
                children: [
                  (0, a.jsxs)("div", {
                    className: h("innerContainer"),
                    children: [
                      (0, a.jsxs)("div", {
                        className: h("nodeImageContainer"),
                        children: [
                          n === l.Ie.ONLINE &&
                            (0, a.jsx)("img", {
                              src: "/images/node-online-active-icon.gif",
                              className: h("nodeImageBorder"),
                            }),
                          y !== l.jl.EMAIL_SIGNUP &&
                            (0, a.jsx)("img", {
                              src:
                                n === l.Ie.ONLINE
                                  ? "/images/map-node-unlocked-0.png"
                                  : "/images/map-node-locked-".concat(
                                      k,
                                      ".png"
                                    ),
                              className: h("nodeImage"),
                            }),
                          n === l.Ie.ONLINE &&
                            0 === k &&
                            (0, a.jsx)("img", {
                              src:
                                y === l.jl.EMAIL_SIGNUP
                                  ? "/images/node-mail-icon.gif"
                                  : "/images/node-online-inactive-icon.gif",
                              className: h("nodeImageOnlineInner"),
                            }),
                        ],
                      }),
                      2 === k
                        ? (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsxs)(r.q, {
                                className: h("expandedNodeStatus"),
                                label: b("status_online"),
                                centerLabel: !0,
                                children: [
                                  (0, a.jsxs)("p", {
                                    children: [
                                      (0, a.jsxs)("span", {
                                        children: [
                                          " ",
                                          b("stream_node_players_label"),
                                        ],
                                      }),
                                      ".....",
                                      (0, a.jsx)("span", { children: x }),
                                    ],
                                  }),
                                  (0, a.jsxs)("p", {
                                    children: [
                                      (0, a.jsxs)("span", {
                                        children: [
                                          " ",
                                          b("stream_node_type_label"),
                                        ],
                                      }),
                                      ".....",
                                      (0, a.jsx)("span", { children: v }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)(c.z, {
                                onClick: f,
                                className: h("button"),
                                children: (0, a.jsx)("p", {
                                  className: h("buttonText"),
                                  children: b("stream_node_button_label"),
                                }),
                              }),
                            ],
                          })
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsxs)("p", {
                                className: h("nodeStatus"),
                                children: ["[", n, "]"],
                              }),
                              i &&
                                !s &&
                                (0, a.jsx)("p", {
                                  className: h("nodeType"),
                                  children: b("stream_node_new_label"),
                                }),
                              s &&
                                (0, a.jsx)("p", {
                                  className: h("nodeType"),
                                  children: b("stream_node_completed_label"),
                                }),
                            ],
                          }),
                    ],
                  }),
                  (0, a.jsx)(m.M, {
                    children:
                      2 === k &&
                      y === l.jl.EMAIL_SIGNUP &&
                      (0, a.jsx)(
                        _.R,
                        {
                          id: "outside-window-key",
                          className: h("emailSignUpWindow"),
                          ref: O,
                          title: b("newsletter_title"),
                          theme: _.$.GrayOnGray,
                          children: S
                            ? (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)("p", {
                                    className: h("emailSubmittedCopy"),
                                    children: b("newsletter_thank_you"),
                                  }),
                                  (0, a.jsx)(c.z, {
                                    onClick: T,
                                    children: b("newsletter_close_cta"),
                                  }),
                                ],
                              })
                            : (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)("p", {
                                    className: h("emailSignUpCopy"),
                                    children: b("newsletter_text"),
                                  }),
                                  (0, a.jsx)("input", {
                                    ref: C,
                                    "data-invalid-email": !w,
                                    className: h("emailSignUp"),
                                    type: "email",
                                    placeholder: b("newsletter_email"),
                                  }),
                                  !w &&
                                    (0, a.jsx)("p", {
                                      className: h("emailInvalid"),
                                      children: b("newsletter_invalid_email"),
                                    }),
                                  (0, a.jsxs)("div", {
                                    className: h("emailSignUpButtonContainer"),
                                    children: [
                                      (0, a.jsx)(c.z, {
                                        onClick: P,
                                        children: b("newsletter_signup_cta"),
                                      }),
                                      (0, a.jsx)(c.z, {
                                        variant: "secondary",
                                        onClick: T,
                                        children: b("newsletter_close_cta"),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                        },
                        "outside-window-key"
                      ),
                  }),
                ],
              }),
            })
          );
        });
      f.displayName = "MapNode";
    },
    2731: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return b;
          },
          default: function () {
            return C;
          },
        });
      var a = n(2322),
        o = n(2784),
        i = n(2285),
        s = n(8513),
        d = n.n(s),
        r = n(5632),
        l = n(3562),
        c = n(6635),
        _ = n(9477),
        p = n(3197),
        m = n(6176),
        u = n(9863),
        N = n(9723),
        g = n(7062),
        h = n(5126),
        f = n(5522),
        y = n(2893),
        x = n(2794);
      let v = (e) => {
        let { districtId: t } = e,
          n = (0, m.qr)((e) => e.userId),
          a = 0,
          i = 2e3,
          s = (e) => {
            switch (e.type) {
              case y.t.MessageType.UPDATE_POSITION:
              case y.t.MessageType.UPDATE_STATE:
                let t = [...e.payload.users];
                c.h.setState({
                  playerPositions: t
                    .filter((e) => {
                      var t;
                      return (
                        e.uuid !==
                        (null == d
                          ? void 0
                          : null === (t = d.getCurrentUser()) || void 0 === t
                          ? void 0
                          : t.uuid)
                      );
                    })
                    .map((e) => ({
                      id: e.uuid,
                      position: new _.Pa4(e.x, 0, e.y),
                    })),
                });
                break;
              case y.t.MessageType.CONNECTION_LOST:
                console.log("Connection with District Room lost");
                return;
            }
          },
          d = (0, m.qr)((e) => e.socketLink),
          r = () => {
            try {
              let e = d.joinDistrictRoom(
                f.R.RoomName.DISTRICTROOM,
                {
                  metadata: { districtId: t },
                  uuid: n,
                  accessToken: "SuperSecretPWord",
                },
                s
              );
              e.then((e) => e)
                .then((e) => {})
                .catch((e) => {
                  console.log("Unable to connect to district room. Error:", e);
                });
            } catch (e) {
              console.log("Unable to join a district room. Error:", e),
                console.log("Reattemping connection..."),
                a < x.dh
                  ? (a++,
                    console.log("Retrying in ".concat(i / 1e3, " seconds...")),
                    setTimeout(r, i),
                    (i *= 2))
                  : console.log("Could not join district room. Error:", e);
            }
          };
        return (
          (0, o.useEffect)(() => {
            if (!d || !n) return;
            r();
            let e = new p.default();
            return (
              e.on("postUpdate", () => {
                if (d && c.h.getState().myPositionChanged) {
                  c.h.setState({ myPositionChanged: !1 });
                  let e = c.h.getState().myPosition;
                  d.setUserPosition(e.x, e.z).catch(() => {});
                }
              }),
              () => {
                e && e.off("postUpdate"), d && d.leaveRoom();
              }
            );
          }, [d, n]),
          null
        );
      };
      var I = n(2182),
        k = n(1737),
        j = n(6461),
        b = !0;
      function C(e) {
        let { district: t } = e,
          n = (0, r.useRouter)(),
          s = (0, l.m_)(),
          f = o.useRef([]),
          y = (0, c.EV)((e) => e.streamNodes),
          x = (0, c.EV)((e) => e.api),
          b = (0, m.qr)((e) => e.hasMapZoomedIn),
          C = (0, m.qr)((e) => e.setHasMapZoomedIn),
          w = (0, m.qr)((e) => e.isApplicationLocked),
          E = !w,
          { translate: S } = (0, h.$G)();
        o.useEffect(() => {
          if (E) {
            let e = async () => {
              var e;
              await (0, I.D)(500);
              let n = N.length,
                a = (
                  null !== (e = null == t ? void 0 : t.streamNodes) &&
                  void 0 !== e
                    ? e
                    : []
                ).filter((e) => e.status === i.Ie.ONLINE).length,
                o = null == t ? void 0 : t.description,
                d = (0, k.K)(null == t ? void 0 : t.consoleInfo);
              s(
                S("console_map_district_loading", {
                  fallback: "Loading district information...",
                })
              ),
                (0, j.xb)(o) || s(o),
                (0, j.xb)(d) || s(d),
                s(S("console_map_loading_map", { fallback: "Generating map" })),
                s(
                  S("console_map_loading nodes", {
                    args: [a, n - a],
                    fallback: "Fetching nodes and connections/traffic",
                  })
                );
            };
            e();
          }
        }, [E]),
          (0, o.useEffect)(() => {
            if (t) {
              let e = [
                ...t.streamNodes.map((e) => ({
                  id: e.id,
                  position: new _.Pa4(),
                  x: 0,
                  y: 0,
                  displayMode: 0,
                  status: e.status,
                  type: e.type,
                  isDecrypted: x.isNodeDecrypted(e.id),
                  participants: e.isMultiplayer ? e.participants : 1,
                  fileType: e.assetFileExtension,
                })),
                ...Array.from({ length: N.length - t.streamNodes.length }).map(
                  (e, n) => ({
                    id: N[t.streamNodes.length + n],
                    position: new _.Pa4(),
                    x: 0,
                    y: 0,
                    displayMode: 3,
                    status: i.Ie.OFFLINE,
                    isDecrypted: !1,
                    participants: 1,
                    fileType: "text",
                  })
                ),
              ];
              c.h.setState({ streamNodes: e });
            }
          }, [t]),
          (0, o.useEffect)(() => {
            let e = new p.default();
            return (
              e.on("postUpdate", () => {
                c.h.getState().streamNodes.forEach((e, t) => {
                  let n = f.current[t];
                  n &&
                    ((n.style.display =
                      0 !== e.x &&
                      0 !== e.y &&
                      e.displayMode === g.NodeDisplayMode.InsideFrame
                        ? "block"
                        : "none"),
                    (n.style.transform = "translate3D("
                      .concat(Math.round(e.x - 38), "px, ")
                      .concat(Math.round(e.y - 48), "px,0)")));
                });
              }),
              () => {
                e && e.off("postUpdate");
              }
            );
          }, []);
        let M = (e) => {
            s(
              S("console_map_node_connect", {
                args: [e.id],
                fallback: "Connection attempt node ".concat(e.id),
              })
            );
            let t = S(
              "console_map_node_status_".concat(e.status.toLowerCase()),
              { fallback: e.status.toLowerCase() }
            );
            s(
              S("console_map_node_status", {
                args: [e.id, t],
                fallback: "Node ".concat(e.id, " ").concat(t),
              })
            );
          },
          P = (e) => {
            switch (e.status) {
              case i.Ie.ONLINE:
                s(
                  S("console_map_node_connected", {
                    args: [e.id],
                    fallback: "Connection authorised",
                  })
                );
                let t = n.asPath.concat("/".concat(e.id));
                n.push(t);
                break;
              case i.Ie.OFFLINE:
                s(
                  S("console_map_node_unknown", {
                    fallback: "Node status unknown",
                  })
                ),
                  x.trigger.invoke({ type: c.zn.ZoomToNode, value: e.id });
                break;
              case i.Ie.LOCKED:
                s(
                  S("console_map_node_locked", {
                    fallback: "Unauthorised connection attempt logged",
                  })
                ),
                  x.trigger.invoke({ type: c.zn.ZoomToNode, value: e.id });
                break;
              default:
                s(
                  S("console_map_node_unknown", {
                    fallback: "Node status unknown",
                  })
                );
            }
          },
          T = (e) => {
            e.type === c.zn.MapZoomCompleted
              ? C(!0)
              : e.type === c.zn.ClickedAmbientNode &&
                (s(
                  S("console_map_node_unreachable", {
                    fallback:
                      "Node Unreachable - System failure to establish connection for breach protocol",
                  })
                ),
                setTimeout(() => {
                  s(
                    S("console_map_node_access_denied", {
                      fallback: "Access denied, data extraction aborted",
                    })
                  );
                }, 500));
          };
        return (
          (0, o.useEffect)(
            () => (
              x.trigger.add(T),
              () => {
                x.trigger.remove(T);
              }
            ),
            []
          ),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(v, { districtId: null == t ? void 0 : t.uuid }),
              (0, a.jsx)("div", {
                className: d().uiNodes,
                "data-zoomed-in": b,
                children: (0, a.jsx)(a.Fragment, {
                  children: (0, a.jsx)("ul", {
                    children: (null != y ? y : []).map((e) =>
                      (0, a.jsx)(
                        u.V,
                        {
                          logOnClick: (t) => {
                            t.stopPropagation(), M(e);
                          },
                          handleRouteOnClick: (t) => {
                            t.stopPropagation(), P(e);
                          },
                          ref: (e) => f.current.push(e),
                          status: e.status,
                          type: e.type,
                          completed: e.isDecrypted,
                          participants: e.participants,
                          fileType: e.fileType,
                        },
                        e.id
                      )
                    ),
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    848: function (e) {
      e.exports = {
        detailsContentWrapper:
          "DetailsContentWrapper_detailsContentWrapper__vXfg6",
        detailsContentWrapper__header:
          "DetailsContentWrapper_detailsContentWrapper__header__mOccI",
      };
    },
    2112: function (e) {
      e.exports = {
        mapNode: "MapNode_mapNode__ciCvo",
        mapNode__emailSignUpWindow: "MapNode_mapNode__emailSignUpWindow__5cxGN",
        mapNode__center: "MapNode_mapNode__center__ChjcC",
        mapNode__innerContainer: "MapNode_mapNode__innerContainer__dOEh3",
        mapNode__cont: "MapNode_mapNode__cont__WJPMX",
        mapNode__nodeImageContainer:
          "MapNode_mapNode__nodeImageContainer__TzFEJ",
        mapNode__nodeImageBorder: "MapNode_mapNode__nodeImageBorder__Sx_sq",
        mapNode__nodeImage: "MapNode_mapNode__nodeImage__I_W1m",
        mapNode__nodeImageOnlineInner:
          "MapNode_mapNode__nodeImageOnlineInner__vELTJ",
        mapNode__emailSubmittedCopy:
          "MapNode_mapNode__emailSubmittedCopy__IaA10",
        mapNode__emailSignUpCopy: "MapNode_mapNode__emailSignUpCopy__ROIPx",
        mapNode__emailSignUp: "MapNode_mapNode__emailSignUp__Lcn5K",
        mapNode__emailInvalid: "MapNode_mapNode__emailInvalid__9T1uN",
        mapNode__emailSignUpButtonContainer:
          "MapNode_mapNode__emailSignUpButtonContainer__wVO2O",
        mapNode__expandedNodeStatus:
          "MapNode_mapNode__expandedNodeStatus__nQs11",
        mapNode__button: "MapNode_mapNode__button__ZAoBf",
        mapNode__nodeStatus: "MapNode_mapNode__nodeStatus__5_J2p",
        mapNode__nodeType: "MapNode_mapNode__nodeType__jXzZw",
      };
    },
    8513: function (e) {
      e.exports = {
        districtPage: "DistrictPage_districtPage___9xv7",
        uiNodes: "DistrictPage_uiNodes__sb6MQ",
        node: "DistrictPage_node__OCUmL",
        nodeIcon: "DistrictPage_nodeIcon__Go39o",
        overFrame: "DistrictPage_overFrame__D3jhk",
        nodeLabel: "DistrictPage_nodeLabel__QN6OP",
        "connect-lost-background-overlay":
          "DistrictPage_connect-lost-background-overlay__D_HQa",
        "connection-lost-copy-container":
          "DistrictPage_connection-lost-copy-container__xLy1z",
        "connection-lost-icon-container":
          "DistrictPage_connection-lost-icon-container__bHtBe",
        "conection-lost-icon": "DistrictPage_conection-lost-icon__L_mdT",
      };
    },
  },
  function (e) {
    e.O(0, [520, 739, 62, 101, 774, 888, 179], function () {
      return e((e.s = 4475));
    }),
      (_N_E = e.O());
  },
]);
