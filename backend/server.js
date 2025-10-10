const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Kết nối MySQL (qua XAMPP)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cinema',
});

// Kiểm tra kết nối
db.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối MySQL:', err);
    } else {
        console.log('Đã kết nối MySQL thành công!');
    }
});

// --- API GET: Lấy toàn bộ dữ liệu từ 1 bảng
app.get('/api/user', (req, res) => {
    const sql = 'SELECT * FROM user';
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(result);
    });
});

// --- API POST: Thêm 1 row mới vào bảng
app.post('/api/user', (req, res) => {
    const { fullname, email, password } = req.body; // dữ liệu gửi từ frontend
    const sql = 'INSERT INTO user (fullname, email, password) VALUES (?, ?, ?)';
    db.query(sql, [fullname, email, password], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Thêm người dùng thành công!', id: result.insertId });
    });
});

// --- Server lắng nghe
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
