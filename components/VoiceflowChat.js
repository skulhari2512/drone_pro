// components/VoiceflowChat.js
import { useEffect } from 'react'

export default function VoiceflowChat() {
  useEffect(() => {
    // Load Voiceflow chat widget
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = function() {
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.load({
          verify: { projectID: '68ff12c2fab11e098f3328e2' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        })
      }
    }
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"
    
    // Append script to body
    document.body.appendChild(script)

    // Cleanup function
    return () => {
      // Remove script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return null // This component doesn't render anything visible
}