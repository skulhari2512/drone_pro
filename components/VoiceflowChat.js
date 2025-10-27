// components/VoiceflowChat.js
import { useEffect } from 'react'

const VoiceflowChat = () => {
  useEffect(() => {
    // Load Voiceflow chat widget script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = function() {
      window.voiceflow.chat.load({
        verify: { projectID: '6720e59340606e4a546ac60e' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      })
    }
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs'
    document.body.appendChild(script)

    // Cleanup
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return null // This component doesn't render anything visible
}

export default VoiceflowChat