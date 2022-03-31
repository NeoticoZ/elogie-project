import { AuthContextProvider } from "./hooks/useAuth";
import AppRoutes from "./routes";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>

      <GlobalStyles />
    </>
  );
}

export default App;
