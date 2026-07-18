import AppRoutes from "@/routes/AppRoutes";
import { Provider } from "@/context/Provider";
function App(): React.ReactNode {
  return (
    <Provider>
      <AppRoutes />
    </Provider>
  );
}

export default App;
