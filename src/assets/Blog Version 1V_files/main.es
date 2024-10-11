import __vite__cjsImport0_react_jsxDevRuntime from "/BlogT/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=38a67bc4"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/BlogT/node_modules/.vite/deps/react.js?v=38a67bc4"; const StrictMode = __vite__cjsImport1_react["StrictMode"];
import __vite__cjsImport2_reactDom_client from "/BlogT/node_modules/.vite/deps/react-dom_client.js?v=38a67bc4"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import App from "/BlogT/src/App.tsx";
import "/BlogT/src/index.css?t=1728660843240";
import {
  createHashRouter,
  RouterProvider
} from "/BlogT/node_modules/.vite/deps/react-router-dom.js?v=38a67bc4";
import Home from "/BlogT/src/pages/home/index.ts";
import About from "/BlogT/src/pages/about/index.ts";
import Blogs from "/BlogT/src/pages/blogs/index.ts?t=1728660843240";
import Contact from "/BlogT/src/pages/contact/index.ts";
import Services from "/BlogT/src/pages/services/index.ts";
const router = createHashRouter(
  [
    {
      path: "/",
      element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
        fileName: "/home/aliberth/Training/BlogTest/src/main.tsx",
        lineNumber: 18,
        columnNumber: 12
      }, this),
      children: [
        {
          path: "/",
          element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
            fileName: "/home/aliberth/Training/BlogTest/src/main.tsx",
            lineNumber: 22,
            columnNumber: 14
          }, this)
        },
        {
          path: "/blogs",
          element: /* @__PURE__ */ jsxDEV(Blogs, {}, void 0, false, {
            fileName: "/home/aliberth/Training/BlogTest/src/main.tsx",
            lineNumber: 26,
            columnNumber: 14
          }, this)
        },
        {
          path: "/about",
          element: /* @__PURE__ */ jsxDEV(About, {}, void 0, false, {
            fileName: "/home/aliberth/Training/BlogTest/src/main.tsx",
            lineNumber: 30,
            columnNumber: 14
          }, this)
        },
        {
          path: "/contact",
          element: /* @__PURE__ */ jsxDEV(Contact, {}, void 0, false, {
            fileName: "/home/aliberth/Training/BlogTest/src/main.tsx",
            lineNumber: 34,
            columnNumber: 14
          }, this)
        },
        {
          path: "/services",
          element: /* @__PURE__ */ jsxDEV(Services, {}, void 0, false, {
            fileName: "/home/aliberth/Training/BlogTest/src/main.tsx",
            lineNumber: 38,
            columnNumber: 14
          }, this)
        }
      ]
    }
  ]
);
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(StrictMode, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "/home/aliberth/Training/BlogTest/src/main.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/home/aliberth/Training/BlogTest/src/main.tsx",
    lineNumber: 46,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBaUJhO0FBakJiLFNBQVNBLGtCQUFrQjtBQUMzQixTQUFTQyxrQkFBa0I7QUFDM0IsT0FBT0MsU0FBUztBQUNoQixPQUFPO0FBQ1A7QUFBQSxFQUNFQztBQUFBQSxFQUNBQztBQUFBQSxPQUNLO0FBQ1AsT0FBT0MsVUFBVTtBQUNqQixPQUFPQyxXQUFXO0FBQ2xCLE9BQU9DLFdBQVc7QUFDbEIsT0FBT0MsYUFBYTtBQUNwQixPQUFPQyxjQUFjO0FBRXJCLE1BQU1DLFNBQVNQO0FBQUFBLEVBQWlCO0FBQUEsSUFDOUI7QUFBQSxNQUNFUSxNQUFNO0FBQUEsTUFDTkMsU0FBUyx1QkFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSTtBQUFBLE1BQ2JDLFVBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRUYsTUFBSztBQUFBLFVBQ0xDLFNBQVMsdUJBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFLO0FBQUEsUUFDaEI7QUFBQSxRQUNBO0FBQUEsVUFDRUQsTUFBSztBQUFBLFVBQ0xDLFNBQVMsdUJBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFNO0FBQUEsUUFDakI7QUFBQSxRQUNBO0FBQUEsVUFDRUQsTUFBSztBQUFBLFVBQ0xDLFNBQVMsdUJBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFNO0FBQUEsUUFDakI7QUFBQSxRQUNBO0FBQUEsVUFDRUQsTUFBSztBQUFBLFVBQ0xDLFNBQVMsdUJBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFRO0FBQUEsUUFDbkI7QUFBQSxRQUNBO0FBQUEsVUFDRUQsTUFBSztBQUFBLFVBQ0xDLFNBQVMsdUJBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFTO0FBQUEsUUFDcEI7QUFBQSxNQUFDO0FBQUEsSUFFTDtBQUFBLEVBQUM7QUFDRjtBQUdEWCxXQUFXYSxTQUFTQyxlQUFlLE1BQU0sQ0FBRSxFQUFFQztBQUFBQSxFQUMzQyx1QkFBQyxjQUNDLGlDQUFDLGtCQUFlLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBK0IsS0FEakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBQ0YiLCJuYW1lcyI6WyJTdHJpY3RNb2RlIiwiY3JlYXRlUm9vdCIsIkFwcCIsImNyZWF0ZUhhc2hSb3V0ZXIiLCJSb3V0ZXJQcm92aWRlciIsIkhvbWUiLCJBYm91dCIsIkJsb2dzIiwiQ29udGFjdCIsIlNlcnZpY2VzIiwicm91dGVyIiwicGF0aCIsImVsZW1lbnQiLCJjaGlsZHJlbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsibWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyaWN0TW9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnRzeCdcbmltcG9ydCAnLi9pbmRleC5jc3MnXG5pbXBvcnQge1xuICBjcmVhdGVIYXNoUm91dGVyLFxuICBSb3V0ZXJQcm92aWRlcixcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvaG9tZS9pbmRleC50cyc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9wYWdlcy9hYm91dC9pbmRleC50cyc7XG5pbXBvcnQgQmxvZ3MgZnJvbSAnLi9wYWdlcy9ibG9ncy9pbmRleC50cyc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL3BhZ2VzL2NvbnRhY3QvaW5kZXgudHMnO1xuaW1wb3J0IFNlcnZpY2VzIGZyb20gJy4vcGFnZXMvc2VydmljZXMvaW5kZXgudHMnO1xuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVIYXNoUm91dGVyKFtcbiAge1xuICAgIHBhdGg6IFwiL1wiLFxuICAgIGVsZW1lbnQ6IDxBcHAvPixcbiAgICBjaGlsZHJlbjpbXG4gICAgICB7XG4gICAgICAgIHBhdGg6XCIvXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxIb21lLz5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6XCIvYmxvZ3NcIixcbiAgICAgICAgZWxlbWVudDogPEJsb2dzLz5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6XCIvYWJvdXRcIixcbiAgICAgICAgZWxlbWVudDogPEFib3V0Lz5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6XCIvY29udGFjdFwiLFxuICAgICAgICBlbGVtZW50OiA8Q29udGFjdC8+XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOlwiL3NlcnZpY2VzXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxTZXJ2aWNlcy8+XG4gICAgICB9LFxuICAgIF1cbiAgfSxcbl0pO1xuXG5cbmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSEpLnJlbmRlcihcbiAgPFN0cmljdE1vZGU+XG4gICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICA8L1N0cmljdE1vZGU+LFxuKVxuIl0sImZpbGUiOiIvaG9tZS9hbGliZXJ0aC9UcmFpbmluZy9CbG9nVGVzdC9zcmMvbWFpbi50c3gifQ==