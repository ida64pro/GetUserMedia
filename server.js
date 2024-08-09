const express = require('express');
const multer = require('multer');
const path = require('path');

// Инициализация приложения
const app = express();

// Настройка хранения изображений в папке img
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'img');
    },
    filename: function (req, file, cb) {
        cb(null, 'webcam-image.png'); // Вы можете изменить имя файла, если нужно
    }
});

const upload = multer({ storage: storage });

// Обработка POST-запроса на загрузку изображения
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({ message: 'Image uploaded successfully' });
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
