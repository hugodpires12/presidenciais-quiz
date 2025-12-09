const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async function(event, context) {
  // Apenas aceita pedidos POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);
    const userMessage = data.message;

    // Acede à chave de forma segura (configurada no painel do Netlify)
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-001" });

    // --- AQUI ESTÁ A "ALMA" DA TUA GEM ---
    // Cola aqui o prompt que usaste para criar a tua Gem no site
    const systemInstruction = `
      És um especialista imparcial em política portuguesa.
      O teu objetivo é esclarecer dúvidas sobre os partidos e candidatos do quiz.
      Sê breve, direto e educado.
      Baseia-te apenas em factos reais e nos programas eleitorais.
      Se te perguntarem "em quem devo votar", recusa responder e diz para fazerem o quiz.
      Responde sempre em Português de Portugal.
    `;

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemInstruction }],
        },
        {
          role: "model",
          parts: [{ text: "Entendido. Estou pronto para responder como especialista imparcial." }],
        },
      ],
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    const text = response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: text }),
    };

  } catch (error) {
    console.error("Erro:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erro ao comunicar com o Gemini" }),
    };
  }

};

