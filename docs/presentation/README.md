<div dir="rtl">

<p><a href="../../README.md">← חזרה לעמוד הפרויקט</a> · <a href="../workflows/WORKFLOWS.md">11 תהליכי האוטומציה</a></p>

# מצפן ERP | מהמסך לתוצאה

**סיור בארבע תחנות במערכת שנבנתה.** בכל תחנה מופיעים פעולה עסקית, החיבור הטכנולוגי שלה והתוצאה בצילום. התמונות נחתכו לשטח הרלוונטי; פרטי קשר הוסתרו. לחיצה על תמונה פותחת את הקובץ בגודל מלא.

<p><a href="#manage">01 · ניהול</a> &nbsp; / &nbsp; <a href="#knowledge">02 · ידע ושירות</a> &nbsp; / &nbsp; <a href="#documents">03 · מסמכים</a> &nbsp; / &nbsp; <a href="#decide">04 · טיפול</a></p>

---

<a id="manage"></a>

## 01 · רואים את העסק ופועלים על הנתונים

**נקודת הכניסה של המנהל:** מצב הלידים, המשימות והמסמכים במקום אחד. רשימות וטפסים מאפשרים לעבור מתמונת המצב לניהול הרשומות.

<p align="center"><a href="01-dashboard.png"><img src="01-dashboard.png" alt="דשבורד מצפן ERP עם מדדי פעילות ופריטים לטיפול" width="1100"></a></p>

<table>
<tr><th align="right">מה המנהל רואה</th><th align="right">מה קורה מאחורי המסך</th></tr>
<tr><td>לידים לפי סטטוס, משימות פתוחות וחשבונית שהופקה.</td><td>Base44 קורא נתונים דרך erpGateway ו־Flow 10, מתוך Airtable.</td></tr>
</table>

<details>
<summary><strong>מהדשבורד לפרטים: לידים, קטלוג ומקור הנתונים</strong></summary>

### לידים עם הקשר וסטטוס

שתי רשומות ההדגמה מציגות ליד חדש וליד שהשיב. פרטי הקשר הוסתרו בצילום; הסטטוסים והנתונים העסקיים נשמרו.

<p align="center"><a href="02-leads.png"><img src="02-leads.png" alt="לידים בממשק: חדש והשיב, עם פרטי קשר מוסתרים" width="1100"></a></p>

### קטלוג מוצרים

שמות, קטגוריות, מחירים וזמינות מוצגים בטבלת הניהול. הקטלוג ב־Airtable נפרד ממאגר הידע של בוט השירות.

<p align="center"><a href="03-products.png"><img src="03-products.png" alt="קטלוג המוצרים בממשק הניהול" width="1100"></a></p>

### אותן רשומות, במקור הנתונים

צילום Airtable מציג את טבלת Leads ואת לשוניות שש הטבלאות. זו המחשה של שכבת הנתונים, לא מסד נפרד שהממשק יצר לעצמו.

<p align="center"><a href="07-airtable.png"><img src="07-airtable.png" alt="Airtable: טבלת לידים ולשוניות הטבלאות העסקיות" width="1100"></a></p>

</details>

---

<a id="knowledge"></a>

## 02 · הידע של העסק הופך לשירות

**הלקוח שואל על החזרות, ואז על אוזניות.** בוט השירות הוא המקום שבו מסמכי המדיניות והקטלוג מקבלים ביטוי בשיחה.

<table>
<tr><th align="right">מקור הידע</th><th align="right">הכנה</th><th align="right">שימוש</th></tr>
<tr><td>מסמכי מדיניות + קטלוג מוצרים</td><td>Flows 3–4: טעינה למאגרי חיפוש</td><td>Flow 5: סוכן השירות בטלגרם</td></tr>
</table>

<p align="center"><a href="06-telegram-support.png"><img src="06-telegram-support.png" alt="שיחת בוט השירות: תשובה על מדיניות החזרות והצגת שלושה דגמי אוזניות" width="1000"></a><br><sub>תשובות מתוך שיחת ההדגמה. תוכן המדיניות מוצג כדוגמת ידע עסקי, לא כייעוץ משפטי.</sub></p>

**מה לומדים כאן:** אותו ערוץ שירות מטפל בשאלת מדיניות ובשאלת מוצר. מבנה החיבור למאגרי הידע מתועד בנפרד במפת התהליכים; צילום התשובה לבדו אינו יומן של קריאות הכלים.

---

<a id="documents"></a>

## 03 · מרשומה עסקית למסמך שנשמר

**Flow 7 בודק את נתוני החשבונית; Flow 8 מפיק את המסמך ושומר אותו ב־Drive.** בממשק נשמרים הסכומים, סטטוס ההפקה וקישור לפתיחה.

<p align="center"><a href="04-invoice.png"><img src="04-invoice.png" alt="INV-0001 בממשק: סכום, מע״מ, סך הכול וקישור למסמך" width="1100"></a></p>

<table>
<tr><th align="center">לפני מע״מ</th><th align="center">מע״מ בדוגמה</th><th align="center">סך הכול</th><th align="center">תוצאה</th></tr>
<tr><td align="center">1,000 ₪</td><td align="center">180 ₪</td><td align="center">1,180 ₪</td><td align="center">מסמך דמו שהופק</td></tr>
</table>

<details>
<summary><strong>הקובץ בצד השני של הקישור: Google Drive</strong></summary>

<p align="center"><a href="08-drive.png"><img src="08-drive.png" alt="הקובץ invoice-INV-0001.html ברשימת הקבצים ב־Google Drive" width="1100"></a></p>

השם `invoice-INV-0001.html` מופיע בדרייב. הפלט בגרסה הזו הוא **HTML**, והסטטוס **Issued אינו מעיד שהתקבל תשלום**.

</details>

---

<a id="decide"></a>

## 04 · ממידע לפריט שדורש טיפול

**התוספת האישית, Flow 11:** תקציר יזום לבוט המנהל. בדוגמה מופיעים הליד שהשיב, הסיבה להתראה והצעת הפעולה. ההחלטה והביצוע נשארים אצל המנהל.

<p align="center"><a href="09-manager-digest.png"><img src="09-manager-digest.png" alt="תקציר טיפול שנשלח למנהל דרך Telegram" width="850"></a></p>

<details>
<summary><strong>כלי משלים: עוזר ניסוח בתוך האפליקציה</strong></summary>

הצ׳אט הפנימי מסייע בהסברים ובכתיבה. בדוגמה מתבקשת הודעת המשך מנומסת. הוא **אינו** אותו סוכן כמו בוט המנהל ואינו קורא את הנתונים החיים.

<p align="center"><a href="05-app-chat.png"><img src="05-app-chat.png" alt="הצ׳אט בתוך Base44 מנסח הודעת המשך מנומסת" width="556"></a></p>

</details>

---

**הסיפור המלא:** נתונים נשמרים, תהליכים פועלים עליהם, מסמכים ותשובות נוצרים, והמנהל מקבל תמונת מצב והצעות לטיפול.

<p><a href="../../README.md"><strong>חזרה לסיכום הפרויקט</strong></a> · <a href="../workflows/WORKFLOWS.md"><strong>איך זה עובד ב־n8n?</strong></a></p>

</div>
