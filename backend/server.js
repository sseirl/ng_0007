const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const TELEGRAM_BOT_TOKEN = '8509739110:AAFRfSlRo5abxIoG8zy512JVKLFdL2DllbI';
const TELEGRAM_CHAT_ID = '5409340119';  

app.get('/api/send-order', (req, res) => {
  res.json({ message: 'Сервер работает. Используйте POST.' });
});

app.post('/api/send-order', async (req, res) => {
  const { name, phone, service, comment } = req.body;

  const message = `🆕 НОВАЯ ЗАЯВКА\n\n Имя: ${name}\n Телефон: ${phone}\n Услуга: ${service}\n💬 Комментарий: ${comment || '—'}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });

    const data = await response.json();

    if (data.ok) {
      res.json({ success: true, message: 'Заявка отправлена' });
    } else {
      console.error('Telegram error:', data);
      res.json({ success: false, error: 'Chat ID неверный или бот не в группе' });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
