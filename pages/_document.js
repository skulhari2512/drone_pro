// pages/_document.js - FIXED VOICE INTEGRATION
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en-AU">
      <Head>
        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://cdn.voiceflow.com" />
        <link rel="dns-prefetch" href="https://general-runtime.voiceflow.com" />
        
        {/* Preconnect for Faster Loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.voiceflow.com" />
        <link rel="preconnect" href="https://general-runtime.voiceflow.com" />
        
        {/* Optimized Font Loading */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet"
        />

        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#0066FF" />
        <meta name="msapplication-TileColor" content="#0066FF" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PB40LHNC8J"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PB40LHNC8J', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `,
          }}
        />

        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Drone Career Pro",
              "description": "Professional drone pilot training and CASA certification provider in Australia",
              "url": "https://www.dronecareerpro.com",
              "logo": "https://www.dronecareerpro.com/logo.png",
              "image": "https://www.dronecareerpro.com/og-image.jpg",
              "telephone": "+61433926394",
              "email": "cooper@dronecareerpro.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AU",
                "addressRegion": "WA",
                "addressLocality": "Perth"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61581470906278",
                "https://x.com/dronecareepro",
                "https://linkedin.com/company/dronecareerpro",
                "https://instagram.com/dronecareerpro"
              ],
              "areaServed": "AU",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Drone Pilot Training Courses",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Course",
                      "name": "Commercial Drone Pilot Certification",
                      "description": "CASA-approved RePL licence training",
                      "provider": {
                        "@type": "Organization",
                        "name": "Drone Career Pro"
                      }
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Drone Career Pro",
              "url": "https://www.dronecareerpro.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.dronecareerpro.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* Voiceflow Chat Widget - FIXED VOICE CONFIGURATION */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '68ff12c2fab11e098f3328e3' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    launch: {
                      event: {
                        type: 'launch'
                      }
                    },
                    render: {
                      mode: 'embedded',
                      target: document.body
                    },
                    autostart: false,
                    allowDangerousHTML: true,
                    assistant: {
                      title: 'Drone Career Assistant',
                      description: 'How can I help you today?',
                      avatar: 'https://www.dronecareerpro.com/logo.png',
                      // ✅ FIXED: Use extensions array, not object
                      extensions: ['microphone'],
                      // ✅ FIXED: Add speech configuration
                      speech: {
                        enabled: true,
                        input: true,
                        output: true
                      }
                    }
                  });
                  
                  // ✅ Log when widget loads successfully
                  console.log('Voiceflow widget loaded with voice support');
                }
                v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
                v.type = "text/javascript";
                s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `,
          }}
        />

        {/* Custom Voiceflow Styling */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Speed up widget loading animation */
              #voiceflow-chat {
                transition: all 0.2s ease-in-out !important;
              }
              
              /* Custom widget styling */
              .vfrc-widget--launcher {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
                box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4) !important;
              }
              
              .vfrc-widget--launcher:hover {
                transform: scale(1.05) !important;
                box-shadow: 0 6px 25px rgba(102, 126, 234, 0.6) !important;
              }
              
              /* Header styling */
              .vfrc-header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
              }
              
              /* Message bubbles */
              .vfrc-message--user {
                background: #667eea !important;
              }
              
              .vfrc-message--agent {
                background: #f3f4f6 !important;
                color: #1f2937 !important;
              }
              
              /* Input field */
              .vfrc-input {
                border: 2px solid #e5e7eb !important;
                border-radius: 24px !important;
              }
              
              .vfrc-input:focus {
                border-color: #667eea !important;
                box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
              }
              
              /* Send button */
              .vfrc-button--send {
                background: #667eea !important;
              }
              
              .vfrc-button--send:hover {
                background: #764ba2 !important;
              }
              
              /* ✅ Voice/Microphone button styling */
              .vfrc-button--microphone {
                background: #667eea !important;
              }
              
              .vfrc-button--microphone:hover {
                background: #764ba2 !important;
              }
              
              .vfrc-button--microphone.active {
                background: #ef4444 !important;
                animation: pulse 1.5s ease-in-out infinite;
              }
              
              @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.7; }
              }
            `,
          }}
        />
      </body>
    </Html>
  )
}