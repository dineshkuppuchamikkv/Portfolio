import   { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectOnReload() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Prevent the default browser behavior
      event.preventDefault();
      // Redirect to the index page
      navigate('/Main');
    };

    // Add event listener for beforeunload
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [navigate]);

  return null; // This component doesn't render anything
}

export default RedirectOnReload;
