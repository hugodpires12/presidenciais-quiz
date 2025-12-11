export default async function handler(req, res) {
  // 1. Validar Método (Apenas POST)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Na Vercel, o 'req.body' já vem pronto, não precisas de JSON.parse()
    const { message: userMessage } = req.body;
    
    // Ler a chave
    const apiKey = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.trim() : "";

    if (!apiKey) {
      return res.status(500).json({ reply: "Erro: API Key não configurada na Vercel." });
    }

    // URL do Google (Modelo 1.5 Flash ou Pro, dependendo do que a tua chave suporta)
    // Vamos usar o 1.5-flash como base
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const systemInstruction = "És um especialista imparcial em política portuguesa. Sê breve e baseia-te apenas em factos. Se perguntarem em quem votar, diz para fazerem o quiz.";

    // Chamada ao Google
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: `${systemInstruction}\n\nPergunta do utilizador: ${userMessage}` }]
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro Google:", data);
      return res.status(response.status).json({ 
        reply: `Erro técnico: ${data.error?.message || 'Desconhecido'}` 
      });
    }

    const botReply = data.candidates[0].content.parts[0].text;

    // Resposta de Sucesso para o teu site
    return res.status(200).json({ reply: botReply });

  } catch (error) {
    console.error("Erro Vercel:", error);
    return res.status(500).json({ reply: "Erro interno do servidor." });
  }
}
