exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.trim() : "";
    
    // Vamos pedir a lista de modelos disponíveis para a tua chave
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ reply: `ERRO DE CHAVE: ${data.error?.message}` })
      };
    }

    // Filtra apenas os modelos que servem para "generateContent" (Chat)
    const availableModels = data.models
      .filter(m => m.supportedGenerationMethods.includes("generateContent"))
      .map(m => m.name.replace("models/", "")) // Limpa o nome
      .join(", ");

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        reply: `DIAGNÓSTICO: A tua chave funciona! Os modelos que podes usar são: [ ${availableModels} ]. Diz-me quais aparecem aqui.` 
      }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "Erro grave de conexão." }),
    };
  }
};
