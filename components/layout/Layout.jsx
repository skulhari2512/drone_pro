import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  useEffect(() => {
    // Load Voiceflow chat widget
    const script = document.createElement('script');
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type = "text/javascript";
    script.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '68ff12c2fab11e098f3328e3' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };
    document.body.appendChild(script);

    // Cleanup function to remove script if component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="App min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;