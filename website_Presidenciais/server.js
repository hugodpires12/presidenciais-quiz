import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuração básica
const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(cors());
app.use(express.json());

// 1. Servir o Frontend (Ficheiros estáticos)
app.use(express.static(__dirname));

// 2. A API do Chat (O teu Backend)
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ reply: "Erro: API Key não configurada no servidor." });
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    role: "user",
                    parts: [{ text: `És um especialista em política portuguesa imparcial. Responde curto.\n\nUser: ${message}` }]
                }]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Erro Google:", data);
            return res.status(500).json({ reply: "Erro técnico no Google AI." });
        }

        const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sem resposta.";
        res.json({ reply: botReply });

    } catch (error) {
        console.error("Erro Server:", error);
        res.status(500).json({ reply: "Erro interno do servidor." });
    }
});

// Iniciar o Servidor
app.listen(PORT, () => {
    console.log(`Servidor a correr na porta ${PORT}`);
});
