import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PreviousRoute() {
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState<any>();

  useEffect(() => {
    setPreviousLocation(location);
  }, [location]);

  return previousLocation;
}

export default PreviousRoute;
