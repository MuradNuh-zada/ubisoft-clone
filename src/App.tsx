import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";

function App(): React.ReactNode {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
