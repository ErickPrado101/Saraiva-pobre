const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/analyze-product', async (req, res) => {
  const userInput = req.body.userInput;

  // Lógica para interagir com o ChatGPT (substitua YOUR_OPENAI_API_KEY)
  const apiKey = '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';
  const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

  try {
    const response = await axios.post(apiUrl, {
      prompt: userInput,
      max_tokens: 50
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    const analyzedProduct = response.data.choices[0].text.trim();
    res.json({ analyzedProduct });
  } catch (error) {
    res.status(500).json({ error: 'Error analyzing product description' });
  }
});

module.exports = router;
