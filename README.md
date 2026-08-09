# منهاجي - تطبيق إدارة الحياة والمشاريع

تطبيق ويب عصري وبسيط لإدارة أهدافك ومشاريعك ومهامك ودراستك. مصمم باللغة العربية مع التركيز على البساطة والفعالية.

## ✨ الميزات

- 📊 **Dashboard** - لمحة سريعة عن يومك
- 🎯 **الأهداف** - حدد أهدافك طويلة المدى والقصيرة
- 📁 **المشاريع** - نظم مشاريعك مع تتبع التقدم
- ✅ **المهام** - أدر مهامك اليومية بسهولة
- 📅 **التقويم** - عرض شهري وأسبوعي
- 📝 **المراجعة اليومية** - سجل تقدمك يومياً

## 🛠️ التقنيات المستخدمة

- **Next.js 15** - React Framework
- **TypeScript** - لغة البرمجة
- **Tailwind CSS** - تصميم responsive
- **shadcn/ui** - مكونات واجهة المستخدم
- **Prisma** - ORM لقاعدة البيانات
- **PostgreSQL** - قاعدة البيانات
- **Lucide Icons** - أيقونات

## 🚀 البدء السريع

### المتطلبات

- Node.js 18+
- PostgreSQL
- npm أو yarn

### التثبيت

1. انسخ المستودع:
```bash
git clone https://github.com/amrabdeljalil213/monhaji.git
cd monhaji
```

2. ثبت الحزم:
```bash
npm install
```

3. أنشئ ملف `.env.local`:
```bash
cp .env.example .env.local
```

4. حدّث قاعدة البيانات:
```bash
npx prisma db push
```

5. شغّل التطبيق:
```bash
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000) في متصفحك.

## 📁 هيكل المشروع

```
src/
├── app/
│   ├── api/               # API Routes
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Home/Dashboard
│   ├── globals.css        # Global Styles
│   └── [pages]/           # صفحات التطبيق
├── components/
│   ├── ui/                # مكونات UI الأساسية
│   ├── layout/            # مكونات التخطيط
│   ├── pages/             # صفحات التطبيق
│   ├── dialogs/           # Dialog modals
│   └── providers/         # Providers
├── lib/
│   ├── utils.ts           # دوال مساعدة
│   └── prisma.ts          # Prisma client
└── types/                 # TypeScript types
```

## 📖 الاستخدام

### إنشاء مهمة جديدة

1. اضغط على زر "إضافة مهمة" في أي صفحة
2. املأ البيانات المطلوبة
3. اختر المشروع (اختياري)
4. حدد الأولوية
5. اضغط "إضافة"

### إدارة المشاريع

1. انتقل إلى صفحة "المشاريع"
2. أنشئ مشروع جديد
3. أضف مهام للمشروع
4. تابع تقدم المشروع

### المراجعة اليومية

1. انتقل إلى صفحة "المراجعة"
2. اضغط "مراجعة جديدة"
3. اكتب ما أنجزته وتعلمته
4. اضغط "حفظ"

## 🎨 المظهر

التطبيق يدعم المظهر الفاتح والداكن تلقائياً بناءً على إعدادات نظامك. يمكنك التبديل يدوياً من خلال زر المظهر في الشريط العلوي.

## 📱 الاستجابة

التطبيق مُصمم بالكامل للعمل على جميع الأجهزة:
- 📱 Mobile
- 📲 Tablet
- 🖥️ Desktop

## 🔒 الأمان

- Validation على الـ frontend والـ backend
- Error handling شامل
- RTL support للغة العربية

## 📝 الترخيص

هذا المشروع مفتوح المصدر ومتاح للاستخدام الشخصي والتعليمي.

## 🤝 المساهمة

نرحب بالمساهمات! يمكنك:

1. Fork المشروع
2. أنشئ فرع لميزتك (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push للفرع (`git push origin feature/AmazingFeature`)
5. افتح Pull Request

## 📧 التواصل

أي أسئلة أو اقتراحات؟ تواصل معي عبر GitHub Issues.

---

صُنع بـ ❤️ لتسهيل حياتك
