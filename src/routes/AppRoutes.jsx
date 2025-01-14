import { Routes, Route, Navigate } from "react-router-dom";
import GetStarted from '../components/GetStarted';
import FeatureEmergencySOS from '../components/FeatureEmergencySOS';
import FeatureLiveLoc from '../components/FeatureLiveLoc';
import FeatureAudVidRec from '../components/FeatureAudVidRec';
import FeatureHelplines from '../components/FeatureHelplines';
import LoginSignupPage from '../components/LoginSignupPage';
import AddContacts from '../components/AddContacts';
import Home from '../components/Home';
import Home1 from '../components/Home1';
import sendPushNotification from "../components/Pushnotification"
import GestureSOS from "../components/GestureSOS"



const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/getStarted" />} />
      <Route path="/getStarted" element={<GetStarted />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home1" element={<Home1 />} />
      <Route path="/featureEmergencySOS" element={<FeatureEmergencySOS />} />
      <Route path="/featureLiveLoc" element={<FeatureLiveLoc />} />
      <Route path="/featureAudVidRec" element={<FeatureAudVidRec />} />
      <Route path="/featureHelplines" element={<FeatureHelplines />} />
      <Route path="/loginSignupPage" element={<LoginSignupPage />} />
      <Route path="/addContacts" element={<AddContacts />} />


      <Route path="/home1" element={<Home1 />} />
      <Route path="/gestureSOS" element={<GestureSOS />} />
      <Route path="/pushNotification" element={<sendPushNotification />} />


    </Routes>
  );
};

export default AppRoute;
