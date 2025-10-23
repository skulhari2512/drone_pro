export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, userId } = req.body;

  if (!message || !userId) {
    return res.status(400).json({ error: 'Message and userId required' });
  }

  try {
    const response = await fetch(
      `https://general-runtime.voiceflow.com/state/user/${userId}/interact`,
      {
        method: 'POST',
        headers: {
          'Authorization': process.env.VOICEFLOW_API_KEY,
          'Content-Type': 'application/json',
          'versionID': process.env.VOICEFLOW_VERSION_ID || 'production'
        },
        body: JSON.stringify({
          action: {
            type: 'text',
            payload: message
          },
          config: {
            tts: false,
            stripSSML: true
          }
        })
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Voiceflow API Error:', error);
    res.status(500).json({ error: 'Failed to communicate with Voiceflow' });
  }
}