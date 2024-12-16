import { useState } from "react";
import Header from "../components/Header";
import CreatePost from "../components/CreatePost";
import PaymentHistory from "../components/PaymentHistory";
import Notifications from "../components/Notifications";
import Psychologists from "../components/Psychologist";
import PsychologistCard from "../components/PsychologistCard";
import OverviewCrads from "../components/OverviewCrads";
import Patients from "../components/Patients"; // Import Patients component
import PatientCard from "../components/PatientCard"; // Import PatientCard component
import AppointmentsCard from "../components/AppointmentsCard";

function Home() {
  const [selectedPsychologist, setSelectedPsychologist] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null); // State for selected patient

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side */}
        <div className="space-y-6">
          <OverviewCrads />
          <div>
          {/* Patients List */}
          <Patients onSelect={setSelectedPatient} />
          {/* Patient Details */}
          {selectedPatient && <PatientCard data={selectedPatient} />}
          </div>
        </div>
        {/* Right Side */}
        <div className="space-y-6">
        <AppointmentsCard/>
        {/* Create Post */}
        <CreatePost />
        <div>
          {/* Pending Psychologists */}
          <Psychologists onSelect={setSelectedPsychologist} />
          {/* Psychologist Details */}
          {selectedPsychologist && <PsychologistCard data={selectedPsychologist} />}
          </div>
        {/* Payment History and Notifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PaymentHistory />
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
