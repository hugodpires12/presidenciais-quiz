exports.handler = async function(event, context) {
  // Apenas aceita POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const userBody = JSON.parse(event.body);
    const userMessage = userBody.message;
    const apiKey = process.env.GEMINI_API_KEY;

    // URL direta da API do Google (Modelo 1.5 Flash)
    // Usamos fetch nativo, sem precisar de bibliotecas extra
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

    // Instrução de Sistema (A personalidade do teu bot)
    const systemInstruction = "És um especialista imparcial em política portuguesa. Sê breve e baseia-te apenas em factos. Se perguntarem em quem votar, diz para fazerem o quiz.";

    // Prepara o pedido
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
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

    // Verifica se o Google deu erro
    if (!response.ok) {
      console.error("Erro do Google:", JSON.stringify(data));
      return {
        statusCode: response.status,
        body: JSON.stringify({ reply: `Erro técnico (${data.error?.message || 'Desconhecido'})` })
      };
    }

    // Extrai a resposta
    const botReply = data.candidates[0].content.parts[0].text;

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: botReply }),
    };

  } catch (error) {
    console.error("Erro grave:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "Erro de conexão ao servidor." }),
    };
  }
};

