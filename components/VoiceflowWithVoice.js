// components/VoiceflowWithVoice.js
import { useEffect, useState } from 'react'

export default function VoiceflowWithVoice() {
  const [isListening, setIsListening] = useState(false)
  const [recognition, setRecognition] = useState(null)

  useEffect(() => {
    // Load Voiceflow widget
    (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '68ff12c2fab11e098f3328e2' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: '68ff12c2fab11e098f3328e3',
          allowDangerousHTML: true,
          assistant: {
            extensions: ['microphone'],
            speech: {
              enabled: true
            }
          }
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; 
      v.type = "text/javascript"; 
      s.parentNode.insertBefore(v, s);
    })(document, 'script');

    // Setup Web Speech API as backup
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-AU';

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('Voice input:', transcript);
        
        // Send to Voiceflow
        if (window.voiceflow && window.voiceflow.chat) {
          window.voiceflow.chat.interact({
            type: 'text',
            payload: transcript
          });
        }
        
        setIsListening(false);
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }

    // Add custom microphone button to Voiceflow widget
    const addMicButton = setInterval(() => {
      const inputContainer = document.querySelector('.vfrc-footer');
      if (inputContainer && !document.querySelector('#custom-mic-btn')) {
        const micButton = document.createElement('button');
        micButton.id = 'custom-mic-btn';
        micButton.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" x2="12" y1="19" y2="22"/>
          </svg>
        `;
        micButton.style.cssText = `
          position: absolute;
          right: 60px;
          bottom: 10px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: #667eea;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          z-index: 1000;
        `;
        
        micButton.onclick = () => {
          if (recognition) {
            if (isListening) {
              recognition.stop();
              micButton.style.background = '#667eea';
            } else {
              recognition.start();
              micButton.style.background = '#ef4444';
              setIsListening(true);
            }
          } else {
            alert('Speech recognition not supported in this browser. Please use Chrome or Edge.');
          }
        };
        
        inputContainer.appendChild(micButton);
        clearInterval(addMicButton);
      }
    }, 500);

    return () => {
      clearInterval(addMicButton);
      if (recognition) {
        recognition.stop();
      }
    };
  }, [recognition, isListening])

  return null
}