;(this['webpackJsonpnatural-events'] =
  this['webpackJsonpnatural-events'] || []).push([
  [0],
  {
    20: function (e, t, n) {},
    25: function (e, t, n) {
      n.r(t)
      var r = n(2),
        c = n.n(r),
        a = n(5),
        s = n.n(a),
        i = (n(20), n(6)),
        u = n(9)
      var o = {status: 'idle', data: null, error: null}
      function j(e) {
        var t = r.useRef(Object(u.a)(Object(u.a)({}, o), e)),
          n = r.useReducer(function (e, t) {
            return Object(u.a)(Object(u.a)({}, e), t)
          }, t.current),
          c = Object(i.a)(n, 2),
          a = c[0],
          s = a.status,
          j = a.data,
          l = a.error,
          d = (function (e) {
            var t = r.useRef(!1)
            return (
              r.useLayoutEffect(function () {
                return (
                  (t.current = !0),
                  function () {
                    return (t.current = !1)
                  }
                )
              }, []),
              r.useCallback(
                function () {
                  return t.current ? e.apply(void 0, arguments) : void 0
                },
                [e],
              )
            )
          })(c[1]),
          b = r.useCallback(
            function (e) {
              return d({data: e, status: 'resolved'})
            },
            [d],
          ),
          f = r.useCallback(
            function (e) {
              return d({error: e, status: 'rejected'})
            },
            [d],
          ),
          g = r.useCallback(
            function () {
              return d(t.current)
            },
            [d],
          ),
          v = r.useCallback(
            function (e) {
              if (!e || !e.then)
                throw new Error(
                  "The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?",
                )
              return (
                d({status: 'pending'}),
                e.then(
                  function (e) {
                    return b(e), e
                  },
                  function (e) {
                    return f(e), Promise.reject(e)
                  },
                )
              )
            },
            [d, b, f],
          )
        return {
          isIdle: 'idle' === s,
          isLoading: 'pending' === s,
          isError: 'rejected' === s,
          isSuccess: 'resolved' === s,
          setData: b,
          setError: f,
          error: l,
          status: s,
          data: j,
          run: v,
          reset: g,
        }
      }
      var l = n(3)
      function d(e) {
        var t = e.description,
          n = e.children
        return Object(l.jsxs)('div', {
          className: 'icon',
          children: [
            Object(l.jsx)('div', {className: 'event-card', children: t}),
            n,
          ],
        })
      }
      var b = n(10)
      function f() {
        return Object(l.jsxs)('div', {
          className: 'loading',
          children: [
            Object(l.jsx)(b.a, {className: 'spinner'}),
            Object(l.jsx)('h1', {children: 'Loading...'}),
          ],
        })
      }
      function g(e) {
        e.show
        var t = Object(r.useState)(!0),
          n = Object(i.a)(t, 2),
          c = n[0],
          a = n[1]
        return (
          Object(r.useEffect)(function () {
            var e = setTimeout(function () {
              a(!1)
            }, 1500)
            return function () {
              return clearTimeout(e)
            }
          }, []),
          c
            ? Object(l.jsx)('div', {
                className: 'info',
                children: 'No events in this category',
              })
            : null
        )
      }
      var v = n(15),
        O = n(4),
        h = n(14),
        x = n(8),
        m = n(13),
        p = {
          6: Object(l.jsx)(O.g, {}),
          7: Object(l.jsx)(O.b, {}),
          16: Object(l.jsx)(x.a, {}),
          9: Object(l.jsx)(x.b, {}),
          14: Object(l.jsx)(O.d, {}),
          19: Object(l.jsx)(O.a, {}),
          15: Object(l.jsx)(O.e, {}),
          17: Object(l.jsx)(O.f, {}),
          18: Object(l.jsx)(b.b, {}),
          12: Object(l.jsx)(O.c, {}),
          13: Object(l.jsx)(m.a, {}),
          8: Object(l.jsx)(h.a, {}),
          10: Object(l.jsx)(x.c, {}),
        },
        y = n(24)
      function C(e) {
        var t = e.category,
          n = j({data: []}),
          c = n.isLoading,
          a = n.data.events,
          s = n.run
        function u(e, n, r) {
          var c = Object(i.a)(e, 2),
            a = c[0],
            s = c[1]
          return Object(l.jsx)(
            d,
            {lat: s, lng: a, description: n.title, children: p[t]},
            n.id + r,
          )
        }
        return (
          Object(r.useEffect)(
            function () {
              t &&
                s(
                  y(
                    'https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/'.concat(
                      t,
                    ),
                  ).then(function (e) {
                    return e.json()
                  }),
                )
            },
            [t, s],
          ),
          Object(l.jsxs)(r.Fragment, {
            children: [
              c && Object(l.jsx)(f, {}),
              0 === (null === a || void 0 === a ? void 0 : a.length) &&
                Object(l.jsx)(g, {}),
              Object(l.jsx)(v.a, {
                bootstrapURLKeys: {
                  key: 'AIzaSyDegPKE2C98YV8MQLwIs0Lm9bDpWWwHWAM',
                },
                defaultCenter: {lat: 45, lng: 0},
                defaultZoom: 1,
                children:
                  null === a || void 0 === a
                    ? void 0
                    : a
                        .map(function (e, t) {
                          if (
                            e.geometries.length > 1 ||
                            Array.isArray(e.geometries[0].coordinates[0])
                          )
                            return (e.geometries.length > 1
                              ? e.geometries.map(function (e) {
                                  return e.coordinates
                                })
                              : e.geometries[0].coordinates[0]
                            ).map(function (t, n) {
                              return c ? null : u(t, e, n)
                            })
                          var n = e.geometries[0].coordinates
                          return c ? null : u(n, e, t)
                        })
                        .flat(),
              }),
            ],
          })
        )
      }
      function E(e) {
        e.category
        var t = e.setCategory,
          n = j({data: {categories: []}}),
          c = n.data.categories,
          a = n.run
        return (
          Object(r.useEffect)(
            function () {
              a(
                fetch(
                  'https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories',
                ).then(function (e) {
                  return e.json()
                }),
              )
            },
            [a],
          ),
          Object(l.jsxs)('header', {
            children: [
              Object(l.jsx)('h1', {children: 'Earth Natural Events'}),
              Object(l.jsxs)('select', {
                name: 'categories',
                'aria-label': 'Select natural event',
                onChange: function (e) {
                  t(e.target.value)
                },
                children: [
                  Object(l.jsx)('option', {
                    value: '',
                    children: 'Select event type',
                  }),
                  null === c || void 0 === c
                    ? void 0
                    : c.map(function (e) {
                        var t = e.id,
                          n = e.title
                        return Object(l.jsx)(
                          'option',
                          {value: t, children: n},
                          t,
                        )
                      }),
                ],
              }),
            ],
          })
        )
      }
      var L = function () {
          var e = Object(r.useState)(null),
            t = Object(i.a)(e, 2),
            n = t[0],
            c = t[1]
          return Object(l.jsxs)(r.Fragment, {
            children: [
              Object(l.jsx)(E, {category: n, setCategory: c}),
              Object(l.jsx)(C, {category: n}),
            ],
          })
        },
        k = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 26))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  c = t.getFCP,
                  a = t.getLCP,
                  s = t.getTTFB
                n(e), r(e), c(e), a(e), s(e)
              })
        }
      s.a.render(
        Object(l.jsx)(c.a.StrictMode, {children: Object(l.jsx)(L, {})}),
        document.getElementById('root'),
      ),
        k()
    },
  },
  [[25, 1, 2]],
])
//# sourceMappingURL=main.bb6b5704.chunk.js.map
