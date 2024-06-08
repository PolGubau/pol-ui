'use client';
import { useEffect, useRef, memo, useState } from 'react';
import { createRoot, Root } from 'react-dom/client';
import tailwindConfig from '../../tailwind.config';

const ComponentFrame = memo(
  ({ children: Component }: { children: React.ReactNode }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const rootRef = useRef<Root | null>(null);
    const [iframeLoaded, setIframeLoaded] = useState(false);

    useEffect(() => {
      const iframe = iframeRef.current;
      if (!iframe) return;

      const onLoad = () => {
        const doc = iframe.contentDocument;
        const body = doc?.body;

        if (!doc || !body) {
          console.error('Document or body not found');
          return;
        }

        // Clear existing content
        body.innerHTML = '';

        const isProduction = process.env.NODE_ENV === 'production';

        if (isProduction) {
          // In production, load Tailwind CSS from the built file
          const link = doc.createElement('link');
          link.rel = 'stylesheet';
          link.href = '/styles/tailwind.css'; // Adjust path as necessary
          doc.head.appendChild(link);

          // Create a div to mount the React component
          const mountDiv = doc.createElement('div');
          body.appendChild(mountDiv);

          // Initialize the root only once
          if (!rootRef.current) {
            rootRef.current = createRoot(mountDiv);
          }

          // Set iframe loaded state
          setIframeLoaded(true);
        } else {
          // In development, load Tailwind CSS from CDN
          const link = doc.createElement('link');
          link.rel = 'stylesheet';
          link.href =
            'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
          doc.head.appendChild(link);

          const script = doc.createElement('script');
          script.src = 'https://cdn.tailwindcss.com';
          script.onload = () => {
            const tailwindConfigScript = doc.createElement('script');
            tailwindConfigScript.innerHTML = `
            tailwind.config = ${JSON.stringify(tailwindConfig)};
          `;
            doc.head.appendChild(tailwindConfigScript);

            // Create a div to mount the React component
            const mountDiv = doc.createElement('div');
            body.appendChild(mountDiv);

            // Initialize the root only once
            if (!rootRef.current) {
              rootRef.current = createRoot(mountDiv);
            }

            // Set iframe loaded state
            setIframeLoaded(true);
          };
          doc.head.appendChild(script);
        }
      };

      // Attach onLoad event
      iframe.addEventListener('load', onLoad);

      // Cleanup function to run when the component is unmounted or dependencies change
      return () => {
        iframe.removeEventListener('load', onLoad);
        if (rootRef.current) {
          rootRef.current.unmount();
        }
      };
    }, []);

    useEffect(() => {
      if (iframeLoaded && rootRef.current) {
        rootRef.current.render(Component as JSX.Element);
      }
    }, [Component, iframeLoaded]);

    return (
      <iframe
        className="overflow-hidden"
        ref={iframeRef}
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    );
  },
);

export default ComponentFrame;
