// pages/api/voiceflow.js
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, userId, action } = req.body;

  // Validate required fields
  if (!userId) {
    return res.status(400).json({ error: 'userId is required' });
  }

  // Check if API key is configured
  if (!process.env.VOICEFLOW_API_KEY) {
    console.error('VOICEFLOW_API_KEY is not configured');
    return res.status(500).json({ error: 'Voiceflow is not configured' });
  }

  try {
    const response = await fetch(
      `https://general-runtime.voiceflow.com/state/user/${encodeURIComponent(userId)}/interact`,
      {
        method: 'POST',
        headers: {
          'Authorization': process.env.VOICEFLOW_API_KEY,
          'Content-Type': 'application/json',
          'versionID': process.env.VOICEFLOW_VERSION_ID || 'production'
        },
        body: JSON.stringify({
          action: action || { type: 'text', payload: message },
          config: {
            tts: false,
            stripSSML: true,
            stopAll: true,
            excludeTypes: ['block', 'debug', 'flow']
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Voiceflow API Error:', response.status, errorText);
      throw new Error(`Voiceflow API error: ${response.status}`);
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error('Voiceflow API Error:', error);
    return res.status(500).json({ 
      error: 'Failed to communicate with Voiceflow',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}