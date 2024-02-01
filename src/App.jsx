import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Therapists from "./pages/Therapists";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient({
  // refetching happens after 0 seconds now
  //so whenever value is changed or when there is switching btwn pages
  //thereby causing component to unmount,then data will be refetched from db

  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools
          initialIsOpen={false}
        />
        {/* Global style is added as sibling of all other components */}
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route
                index
                element={
                  <Navigate
                    replace
                    to="therapists"
                  />
                }
              />
              <Route
                element={<Therapists />}
                path="/therapists"
              />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor:
                "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
