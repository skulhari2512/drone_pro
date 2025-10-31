// pages/api/voiceflow.js
export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  const { message, userId, action } = req.body;
  if (!userId) return res.status(400).json({ error: 'userId is required' });

  const VF_API_KEY = process.env.VOICEFLOW_API_KEY;
  const VF_VERSION_ID = process.env.VOICEFLOW_VERSION_ID || 'production';
  const VF_API_URL = process.env.VOICEFLOW_API_URL || 'https://ap-general-runtime.voiceflow.com'; // ✅ use closest region

  if (!VF_API_KEY)
    return res.status(500).json({ error: 'Voiceflow not configured' });

  try {
    const response = await fetch(
      `${VF_API_URL}/state/user/${encodeURIComponent(userId)}/interact`,
      {
        method: 'POST',
        headers: {
          Authorization: VF_API_KEY,
          'Content-Type': 'application/json',
          versionID: VF_VERSION_ID
        },
        body: JSON.stringify({
          action: action || { type: 'text', payload: message },
          config: { tts: false, stripSSML: true } // ✅ simpler config
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
