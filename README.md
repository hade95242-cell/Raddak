# 🧠 Raddak — الرد التلقائي على فيسبوك (نسخة Netlify)

هذا المشروع جاهز للنشر على Netlify ويحتوي على واجهة أمامية + وظائف خلفية (Netlify Functions).

---

## ⚙️ الإعداد السريع

1. ارفع جميع هذه الملفات إلى GitHub داخل مستودع جديد باسم **Raddak**  
2. ادخل إلى [https://www.netlify.com](https://www.netlify.com)  
3. سجّل الدخول عبر GitHub  
4. اختر المستودع **Raddak** واضغط Deploy Site  
5. بعد انتهاء النشر، أضف المتغيرات البيئية (Environment Variables) التالية من إعدادات الموقع:
APP_ID=1370171848072321  
APP_SECRET=55a7403b0d5cfca0fbb23720c2eea689  
WEBHOOK_VERIFY_TOKEN=raddak_verify_2025  
SESSION_SECRET=raddak_session_key  
BASE_URL=https://<your-site-name>.netlify.app  
DATABASE_URL=postgres://username:password@host:5432/dbname

6. بعد النشر، الموقع رح يشتغل على رابط مثل:  
   👉 https://raddak.netlify.app  

7. لربط تطبيق فيسبوك:
   - OAuth Redirect:  
     `https://<your-site>.netlify.app/.netlify/functions/callback`
   - Webhook URL:  
     `https://<your-site>.netlify.app/.netlify/functions/webhook`
   - Verify Token:  
     `raddak_verify_2025`

---

## 📂 محتويات المشروع

- public/index.html — الصفحة الرئيسية  
- public/dashboard.html — لوحة التحكم  
- netlify/functions — كود الرد التلقائي (backend)

---

© 2025 جميع الحقوق محفوظة — **Raddak**
