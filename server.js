const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware для обработки JSON и URL-encoded запросов
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Настройка статики для HTML, CSS, JS
app.use(express.static("public"));

// Маршрут для корневой страницы
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html")); // Укажите путь к вашему HTML-файлу
});

// Маршрут для обработки формы
app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  // Настройка Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com", // Ваша почта
      pass: "your-email-password", // Пароль от почты или App Password
    },
  });

  const mailOptions = {
    from: email,
    to: "a.sec85@mail.ru", // Ваша почта
    subject: `Сообщение от ${name}`,
    text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Ваше сообщение успешно отправлено!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Ошибка при отправке сообщения.");
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
