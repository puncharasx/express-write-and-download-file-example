# Description

ตัวอย่างวิธีการเขียนไฟล์ลงบนเครื่องโดยใช้ Express.js และ Client สามารถดาวน์โหลดไฟล์ออกมาได้

# Installation

Clone Repository ลงบนเครื่องโดยใช้คำสั่ง
```
git clone https://github.com/puncharasx/express-write-and-download-file-example.git
```

หลังจาก Clone สำเร็จให้ Install package สำหรับโปรเจคนี้ลงบนเครื่อง (อย่าลืม cd เข้า directory โปรเจคนี้ก่อนนะครับ)

```
npm install
```

คำสั่งสำหรับการทดสอบ

```
npm run dev
```

# Usage
หลังจาก `npm run dev` เสร็จ ให้ลองเข้า `http://localhost:8081/write` เพื่อ write file ลงบนเครื่อง เมื่อ write file สำเร็จจะได้ไฟล์อยู่ใน `src/files/test.txt` หลังจากนั้นไปที่ `http://localhost:8081/download` จะดาวน์โหลดไฟล์ `test.txt` ลงบนเครื่อง client อัตโนมัติ


