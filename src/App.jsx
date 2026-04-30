import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import FriendDetails from "./pages/FriendDetails";
import NotFound from "./pages/NotFound";


<Route path="/friend/:id" element={<FriendDetails />} />
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/friend/:id" element={<FriendDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;