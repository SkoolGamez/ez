(self.__BUILD_MANIFEST = (function (s, c, e, a, t, i) {
  return {
    __rewrites: {
      afterFiles: [
        {
          has: [
            { type: s, key: "o", value: "(?<orgid>\\d*)" },
            { type: s, key: "p", value: "(?<projectid>\\d*)" },
          ],
          source: "/monitoring(/?)",
          destination: void 0,
        },
      ],
      beforeFiles: [],
      fallback: [],
    },
    "/": ["static/chunks/pages/index-8bae8a75a641578c.js"],
    "/404": ["static/chunks/pages/404-31d088764bcfe889.js"],
    "/_error": ["static/chunks/pages/_error-c74939ae173d425d.js"],
    "/experience": ["static/chunks/pages/experience-cec4df2049321215.js"],
    "/map": [
      c,
      e,
      a,
      t,
      "static/css/4255ba6ec1408798.css",
      "static/chunks/pages/map-54f7326fe5789a35.js",
    ],
    "/[locale]": [
      i,
      "static/chunks/970-e5197055fe4ee978.js",
      "static/css/2601fb6d0a763b76.css",
      "static/chunks/pages/[locale]-408c7d11b65d1295.js",
    ],
    "/[locale]/districts": [
      "static/css/2daf171fe984075c.css",
      "static/chunks/pages/[locale]/districts-ea26ef9368c29e01.js",
    ],
    "/[locale]/districts/[district_id]": [
      c,
      e,
      a,
      t,
      "static/css/603f80a7440bd4f8.css",
      "static/chunks/pages/[locale]/districts/[district_id]-782180b2092d1fd8.js",
    ],
    "/[locale]/districts/[district_id]/[node_id]": [
      i,
      "static/chunks/251-f1eb2f10726bad36.js",
      "static/css/34cbce3771346bf5.css",
      "static/chunks/pages/[locale]/districts/[district_id]/[node_id]-e4152953db916198.js",
    ],
    "/[locale]/email-confirmation": [
      "static/css/b41da785ce06fad1.css",
      "static/chunks/pages/[locale]/email-confirmation-4e1cdcc8003b1647.js",
    ],
    sortedPages: [
      "/",
      "/404",
      "/_app",
      "/_error",
      "/experience",
      "/map",
      "/[locale]",
      "/[locale]/districts",
      "/[locale]/districts/[district_id]",
      "/[locale]/districts/[district_id]/[node_id]",
      "/[locale]/email-confirmation",
    ],
  };
})(
  "query",
  "static/chunks/520-633eaa6ab613780c.js",
  "static/chunks/739-a319cc0219182dcf.js",
  "static/chunks/62-e030ea14c83c05ec.js",
  "static/chunks/101-bfcf1077868fcd08.js",
  "static/chunks/544-4b55307ae7e5d897.js"
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
