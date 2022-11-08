import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/pages/landing";
import { MapViewPage } from "./components/pages/map-view";
import { CreateOverlayPage } from "./components/pages/create-overlay";
import { ProfilePage } from "./components/pages/profile";
import { SettingsPage} from "./components/pages/settings";
import { UserDashboardPage } from "./components/pages/user-dashboard";
import MainNavbar from "./components/Navbar";

const App = () => {
  return (
    <div className="custom-overlay-app">
      <MainNavbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="map-view/:overlayId" element={<MapViewPage />} />
        <Route path="create" element={<CreateOverlayPage />} />
        <Route path="profile/:profileId" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="dashboard" element={<UserDashboardPage />} />
      </Routes>
    </div>
  )
}

export default App;