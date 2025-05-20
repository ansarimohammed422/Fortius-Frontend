import { createContext, useContext, useState } from 'react';

// Step 1: Create context
const AppointmentContext = createContext();

// Step 2: Make Provider component
export const AppointmentProvider = ({ children }) => {
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    number: ''
  });

  return (
    <AppointmentContext.Provider value={{ appointmentData, setAppointmentData }}>
      {children}
    </AppointmentContext.Provider>
  );
};

// Step 3: Custom hook to use the context easily
export const useAppointment = () => useContext(AppointmentContext);
