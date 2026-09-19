# Kobi-ERP-AI-Automation
I-powered ERP automation project built with n8n, Airtable, Base44, OpenAI, Telegram, Gmail and Google Drive.
מעולה אחי. עכשיו **שלב 2: README מקצועי**. זה העמוד הראשון שהמרצה יראה, אז שווה להשקיע בו 5 דקות.

ב־GitHub תלחץ על `README.md` → אייקון העיפרון **Edit**, תמחק את מה שיש ותדביק את זה:

````markdown
# Kobi ERP – AI & Automation

פרויקט גמר בקורס **מיישם AI ואוטומציה**.

מערכת ERP חכמה לעסק אלקטרוניקה, המשלבת ניהול נתונים, אוטומציות, סוכני AI, RAG וממשק ניהול בענן.

## מטרת הפרויקט

יצירת מערכת מרכזית לניהול פעילות העסק, תוך אוטומציה של תהליכים כגון:

- ניהול לידים ולקוחות
- ניהול הזמנות ומוצרים
- הפקת חשבוניות
- שליחת מיילים אוטומטיים
- זיהוי תשובות מלקוחות
- שירות לקוחות באמצעות AI
- סוכן AI למנהל העסק
- ניהול משימות
- מרכז טיפול חכם
- צ'אט AI מתוך ממשק הניהול

## ארכיטקטורה

המערכת בנויה משלוש שכבות עיקריות:

### Data
**Airtable**

משמש כמקור האמת של המערכת ומכיל את טבלאות:

- Leads
- Customers
- Orders
- Products
- Invoice
- Tasks

### Automation & AI
**n8n Cloud**

אחראי על תהליכי האוטומציה, Webhooks, סוכני AI, RAG והאינטגרציות בין השירותים.

הפרויקט כולל **11 Workflows**.

### Management Interface
**Base44**

אפליקציית ניהול בעברית וב־RTL הכוללת:

- Dashboard
- Leads
- Customers
- Orders
- Products
- Invoices
- Tasks
- Smart Treatment Center
- AI Chat

## טכנולוגיות ושירותים

- n8n
- Airtable
- Base44
- OpenAI
- Telegram
- Gmail
- Google Drive
- RAG / Embeddings
- REST API / Webhooks

## דוגמת Flow

```text
Base44
   ↓
n8n Webhook
   ↓
Business Logic / AI
   ↓
Airtable
   ↓
Gmail / Telegram / Google Drive
````

לדוגמה:

```text
יצירת ליד
→ Airtable
→ סוכן המכירות
→ Gmail
→ זיהוי תשובת הלקוח
→ עדכון Status
→ Smart Treatment Center
```

## יכולות AI

המערכת כוללת מספר שימושים ב־AI:

* סוכן שירות לקוחות המחובר ל־RAG
* סוכן מנהל לקבלת מידע עסקי
* סוכן מכירות ליצירת הודעות
* צ'אט AI מתוך אפליקציית הניהול

## אבטחה

Credentials, API Keys ו־Secrets אינם נשמרים בקוד הציבורי.

החיבורים לשירותים החיצוניים מנוהלים באמצעות Credentials של n8n ו־Server-side Secrets של Base44.

## מבנה Repository

```text
Kobi-ERP-AI-Automation/
│
├── workflows/
│   └── n8n workflow files
│
├── docs/
│   ├── screenshots/
│   └── architecture/
│
└── README.md
```

## סטטוס

✅ מערכת עובדת מקצה לקצה
✅ Airtable מחובר
✅ n8n Workflows פעילים
✅ Base44 מחובר ל־Production Webhook
✅ Telegram Agents עובדים
✅ Gmail Automation עובד
✅ RAG עובד
✅ Google Drive Invoice Flow עובד
✅ Customers & Orders מחוברים
✅ AI Chat עובד

```

אחרי שאתה מדביק, למטה תלחץ **Commit changes**.

**זה הכול כרגע.**

אחרי שאתה אומר לי שה־README נשמר, עוברים לדבר הבא: **להעלות את 11 ה־Workflows ל־GitHub בלי להדליף שום Secret.** ושם נעשה את זה בזהירות, כי זו הנקודה היחידה שבה אפשר להפוך GitHub יפה לפצצת API קטנה 😄
```
