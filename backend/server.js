const express = require('express');
const cors = require('cors');
const https = require('https');
const app = express();

app.use(cors());
app.use(express.json());

const TELEGRAM_BOT_TOKEN = '8509739110:AAFRfSlRo5abxIoG8zy512JVKLFdL2DllbI';
const TELEGRAM_CHAT_ID = '15409340119';  

app.post('/api/send-order', (req, res) => {
  const { name, phone, service, comment } = req.body;
  const message = `🆕 НОВАЯ ЗАЯВКА\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n📋 Услуга: ${service}\n💬 Комментарий: ${comment || '—'}`;

  const options = {
    hostname: 'api.telegram.org',
    path: `/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  };

  const telegramReq = https.request(options, (telegramRes) => {
    let data = '';
    telegramRes.on('data', (chunk) => { data += chunk; });
    telegramRes.on('end', () => {
      const json = JSON.parse(data);
      if (json.ok) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    });
  });

  telegramReq.on('error', () => {
    res.json({ success: false });
  });

  telegramReq.write(JSON.stringify({
    chat_id: TELEGRAM_CHAT_ID,
    text: message,
    parse_mode: 'HTML'
  }));
  telegramReq.end();
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});