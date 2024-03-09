import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import AuthPage from "./Modules/Auth/Pages/AuthPage";
import { DashboardPage } from "./Modules/Dashboard/Pages";
import {QueryClientProvider, QueryClient } from 'react-query';
import { UnitPage } from "./Modules/Stock/Units/Pages";

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="auth" element={<AuthPage />} />
      <Route path="modules" element={<DashboardPage />}>
        <Route path="stock">
          <Route path="ncms" element={null} />
          <Route path="products" element={null} />
          <Route path="units" element={<UnitPage/>} />
        </Route>
      </Route>
    </Route>
  )
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
    mutations: {
      retry: 1,
    },
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={browserRouter} />
    </QueryClientProvider>
  // </React.StrictMode>
);
