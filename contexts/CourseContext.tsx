import React, { createContext, useContext, useState } from 'react';

// 1. Define the type for your context value
interface CourseContextType {
  selectedCourseId: string;
  setSelectedCourseId: (id: string) => void;
}

// 2. Create the context with default value `undefined` for strict checks
const CourseContext = createContext<CourseContextType | undefined>(undefined);

// 3. Provider component
export function CourseProvider({ children }: { children: React.ReactNode }) {
  const [selectedCourseId, setSelectedCourseId] = useState('');

  return (
    <CourseContext.Provider value={{ selectedCourseId, setSelectedCourseId }}>
      {children}
    </CourseContext.Provider>
  );
}

// 4. Custom hook to access the context
export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
};
