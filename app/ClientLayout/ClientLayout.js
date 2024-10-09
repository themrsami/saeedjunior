'use client'; // Client-side component
import Progress from '../components/Progress';
import PageLoader from '../components/PageLoader';
import { useEffect, useState } from 'react'; // Import useState for managing internal states
import { useAppContext } from '../Context/AppContext';
import { usePathname } from 'next/navigation'; // Correct usage for Next.js 14+

const titleMap = {
  '/': 'HOME',
  '/about': 'ABOUT',
  '/work': 'Work',
  '/vfx': 'VFX FOR MOTION',
  '/motion': 'MOTION GRAPHICS',
  '/graphics': 'GRAPHIC DESIGN',
  '3danimation': '3D ANIMATION',
  // Add more routes as needed
};

const ClientLayout = ({ children }) => {
  const { isLoading, setIsLoading, pageLoader, setPageLoader } = useAppContext();
  const pathname = usePathname(); // Track the current pathname
  const [isTransitioning, setIsTransitioning] = useState(false); // State to manage transitions

  useEffect(() => {
    // Show Progress on initial load
    setIsLoading(true);
    setIsTransitioning(true); // Begin transition

    const timeout = setTimeout(() => {
      setIsLoading(false); // Hide Progress after a delay
      setIsTransitioning(false); // End transition
    }, 2200); // Adjust the duration as needed

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [setIsLoading]);

  useEffect(() => {
    // Show PageLoader when the pathname changes (indicating navigation)
    setPageLoader(true);
    setIsTransitioning(true); // Begin transition for page loader

    const timeout = setTimeout(() => {
      setPageLoader(false); // Hide PageLoader after a delay
      setIsTransitioning(false); // End transition
    }, 1500); // Adjust duration based on your needs

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [pathname, setPageLoader]); // Dependency on pathname

  // Get the title based on the current pathname
  const currentTitle = titleMap[pathname] || 'Default Title'; // Fallback title

  // Don't render children until loading is complete
  if (isLoading || pageLoader || isTransitioning) {
    return (
      <div>
        {isLoading && <Progress />} {/* Render Progress on initial load */}
        {pageLoader && <PageLoader title={currentTitle} />} {/* Render PageLoader with title prop */}
      </div>
    );
  }

  return <div>{children}</div>; // Render children only when not loading
};

export default ClientLayout;
