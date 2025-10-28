// components/VoiceflowChat.js
import { useEffect } from 'react'

export default function VoiceflowChat() {
  useEffect(() => {
    console.log('🤖 VoiceflowChat component mounted')
    
    // Voiceflow chat widget script
    (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      
      v.onload = function() {
        console.log('✅ Voiceflow script loaded successfully')
        
        if (window.voiceflow && window.voiceflow.chat) {
          console.log('✅ Voiceflow object found, loading chat...')
          
          window.voiceflow.chat.load({
            verify: { projectID: '68ff12c2fab11e098f3328e2' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: {
              url: "https://runtime-api.voiceflow.com"
            }
          });
          
          console.log('✅ Voiceflow chat.load() called')
        } else {
          console.error('❌ Voiceflow object not found')
        }
      }
      
      v.onerror = function() {
        console.error('❌ Failed to load Voiceflow script')
      }
      
      v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; 
      v.type = "text/javascript"; 
      
      console.log('📝 Appending Voiceflow script to DOM')
      s.parentNode.insertBefore(v, s);
      
    })(document, 'script');
  }, [])

  return null
}