import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const DEFAULT_MAIN_HEADING = 'CampSpots'

// create context
const MainHeadingContext = createContext({ mainHeading: DEFAULT_MAIN_HEADING, setMainHeading: () => {} });

const MainHeadingContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [mainHeading, setMainHeading] = useState(DEFAULT_MAIN_HEADING);

  const context = useMemo(() => ({
    mainHeading,
    setMainHeading
  }), [mainHeading, setMainHeading])

  return (
    // the Provider gives access to the context to its children
    <MainHeadingContext.Provider value={context}>
      {children}
    </MainHeadingContext.Provider>
  );
};

const useMainHeading = (mainHeading = '') => {
    const {setMainHeading} = useContext(MainHeadingContext);

    useEffect(() => {
      const newMainHeading = `${DEFAULT_MAIN_HEADING}${mainHeading ? ' - ': ''}${mainHeading}`
      setMainHeading(newMainHeading)
      
      return () => setMainHeading(DEFAULT_MAIN_HEADING)
    }, [mainHeading])

}

export {MainHeadingContext, MainHeadingContextProvider, useMainHeading}