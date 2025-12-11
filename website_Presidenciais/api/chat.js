export default async function handler(req, res) {
    // Permitir apenas pedidos POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        // 1. Obter a mensagem do utilizador
        // Se req.body for string (às vezes acontece), fazemos parse. Se for objeto, usamos direto.
        const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        const userMessage = body.message;

        // 2. Obter a API Key das variáveis de ambiente
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            console.error("Erro: API Key em falta");
            return res.status(500).json({ reply: "Erro de configuração no servidor (API Key)." });
        }

        // 3. Preparar a chamada ao Google (Modelo Flash)
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

        const systemInstruction = "És um especialista imparcial em política portuguesa. Sê breve e baseia-te apenas em factos. Se perguntarem em quem votar, diz para fazerem o quiz.";

        // 4. Fazer o pedido (Fetch Nativo)
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

        // 5. Verificar erros do Google
        if (!response.ok) {
            console.error("Erro Google:", JSON.stringify(data));
            return res.status(response.status).json({ 
                reply: "Desculpa, estou com dificuldades técnicas de momento." 
            });
        }

        // 6. Extrair e enviar a resposta
        const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Não consegui gerar uma resposta.";
        return res.status(200).json({ reply: botReply });

    } catch (error) {
        console.error("Erro Interno:", error);
        return res.status(500).json({ reply: "Erro interno do servidor." });
    }
}
