/* Kobi ERP: read-only workflow showcase. No expressions or external actions are executed. */
(() => {
'use strict';
const NS='http://www.w3.org/2000/svg';
const repo='https://github.com/Kobiyaacov/Kobi-ERP-AI-Automation';
const fileNames=['01-leads-intake.json','02-sales-cold-emails.json','03-policies-embedding.json','04-products-embedding.json','05-customer-service-agent.json','06-sales-reply-checker.json','07-invoice-validation.json','08-invoice-maker-drive.json','09-manager-agent.json','10-app-api.json','11-smart-treatment-center.json'];
const groups={sales:{label:'מכירות',color:'var(--sales)'},knowledge:{label:'ידע ושירות',color:'var(--knowledge)'},documents:{label:'חשבוניות',color:'var(--documents)'},management:{label:'ניהול וממשק',color:'var(--management)'}};
const paths={
 workflow:'<circle cx="4" cy="12" r="2.5"/><circle cx="19" cy="5" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M6.5 12h3c3.5 0 2-7 7-7M9.5 12c3.5 0 2 7 7 7"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1.4"/><rect x="14" y="3" width="7" height="7" rx="1.4"/><rect x="3" y="14" width="7" height="7" rx="1.4"/><rect x="14" y="14" width="7" height="7" rx="1.4"/>',
 layers:'<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
 eye:'<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
 search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
 expand:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m8 0h5v-5"/>',
 fit:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m8 0h5v-5"/><rect x="8" y="8" width="8" height="8" rx="1"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/>',
 help:'<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 4 3c-1 .5-1 1-1 2m0 3v.1"/>',
 menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
 external:'<path d="M14 3h7v7m-9 2 9-9M10 4H4v16h16v-6"/>',
 code:'<path d="m8 5-6 7 6 7m8-14 6 7-6 7m-3-16-2 18"/>',
 list:'<path d="M8 5h13M8 12h13M8 19h13M3 5h.1M3 12h.1M3 19h.1"/>',
 image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="1.5"/><path d="m3 17 5-5 4 4 4-7 5 8"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',
 x:'<path d="m6 6 12 12M6 18 18 6"/>',
 play:'<path d="m8 4 12 8-12 8Z"/>',pause:'<path d="M8 4v16M16 4v16"/>',
 reset:'<path d="M3 9h5M3 9V4m0 5a9 9 0 1 1 .5 7"/>',
 mouse:'<rect x="7" y="2" width="10" height="19" rx="5"/><path d="M12 3v5"/>',
 link:'<path d="m9 15 6-6m-5-4 2-2a5 5 0 0 1 7 7l-2 2M7 12l-2 2a5 5 0 0 0 7 7l2-2"/>',
 download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
 arrow:'<path d="M20 12H4m6-6-6 6 6 6"/>',
 check:'<path d="m4 12 5 5L20 6"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l-4 3"/>',
 bolt:'<path d="m13 1-9 13h7l-1 9 10-14h-7Z"/>',
 webhook:'<path d="M9 10 6 16m7-6 4 6M7 17h10"/><path d="M8 7a4 4 0 1 1 7 3M7 12a4 4 0 1 0 3 6m5 0a4 4 0 1 0 3-6"/>',
 airtable:'<g stroke="none"><path fill="#ffcb32" d="m2 7 10-4 10 4-10 4Z"/><path fill="#ed3b60" d="M2 9v10l8-4v-4Z"/><path fill="#25b8e8" d="m12 12 10-4v10l-10 4Z"/></g>',
 gmail:'<g fill="none" stroke-width="3.8"><path stroke="#4285f4" d="M3 8v12"/><path stroke="#34a853" d="M21 8v12"/><path stroke="#ea4335" d="m3 5 9 7 9-7"/><path stroke="#fbbc04" d="M21 5v5"/><path stroke="#c5221f" d="M3 5v5"/></g>',
 telegram:'<g stroke="none"><circle cx="12" cy="12" r="11" fill="#28a8e8"/><path fill="white" d="m4 11 15-6-3 15-5-4-3 2 .5-5L17 7l-10 6Z"/></g>',
 drive:'<g stroke="none"><path fill="#0f9d58" d="M8 2 1 15h7l7-13Z"/><path fill="#fbbc04" d="m15 2 8 13h-7L8 2Z"/><path fill="#4285f4" d="m1 15 4 7h15l3-7Z"/></g>',
 ai:'<rect x="3" y="7" width="18" height="13" rx="5"/><path d="M12 3v4m-3 8h6M8 11v1m8-1v1"/><circle cx="12" cy="2" r="1"/>',
 model:'<path d="M12 3c5-5 12 2 8 7 5 5-2 12-7 8-5 5-12-2-8-7C0 6 7-1 12 3Z"/><path d="m7 7 5-2 5 4 1 6-6 4-6-4Z"/><circle cx="12" cy="12" r="3"/>',
 form:'<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4V2h6v2M8 10h8M8 14h8M8 18h5"/>',
 branch:'<path d="M4 7h16m-5-4 5 4-5 4M4 7v10h16m-5-4 5 4-5 4"/>',
 route:'<path d="M3 12h6M9 12V5h12m-4-4 4 4-4 4M9 12v7h12m-4-4 4 4-4 4"/>',
 edit:'<path d="m14 4 6 6M4 15 16 3a2 2 0 0 1 4 4L8 19H4Z M4 9V4h5m11 11v6H4"/>',
 document:'<path d="M5 2h9l5 5v15H5ZM14 2v6h5M8 12h8M8 16h8"/>',
 vector:'<path d="m12 2 10 6v9l-10 6-10-6V8Z"/><circle cx="11" cy="11" r="4"/><path d="m14 14 4 4"/>',
 embed:'<path d="m12 2 8 5v10l-8 5-8-5V7Z M12 6v12m-5-9 10 6m0-6L7 15"/>',
 split:'<circle cx="5" cy="6" r="3"/><circle cx="5" cy="18" r="3"/><path d="m8 7 13 14M8 17 21 3"/>',
 merge:'<path d="M3 4h5l8 8h5M3 20h5l8-8m1-4 4 4-4 4"/>',
 aggregate:'<rect x="3" y="3" width="5" height="5" rx="1"/><rect x="3" y="16" width="5" height="5" rx="1"/><path d="m8 5 8 7-8 7"/><rect x="16" y="8" width="6" height="8" rx="1"/>',
 chain:'<path d="M5 5h12a3 3 0 0 1 0 6H7a3 3 0 0 0 0 6h12m-4-4 4 4-4 4"/>',
 shield:'<path d="m12 2 9 4v7c0 5-9 9-9 9s-9-4-9-9V6Z m-5 10 4 4 6-7"/>'
};
function icon(name){return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name]||paths.workflow}</svg>`;}
const $=id=>document.getElementById(id);
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function mountIcons(){document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));}
function svgEl(tag,attrs){const el=document.createElementNS(NS,tag);Object.entries(attrs||{}).forEach(([k,v])=>el.setAttribute(k,String(v)));return el;}
let data=null,models=[],current=null,group='all',query='',tab='canvas',geom=[],edges=[],bounds=null,zoom=1,pan={x:0,y:0},selected=null,timer=null,walk=[],walkIndex=0,drag=null,toastTimer=null,loadId=0,imgZoom=1;
const manifest=JSON.parse($('project-data').textContent);
function notify(text){$('toast').textContent=text;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,3400);}
function saveTheme(theme){document.documentElement.dataset.theme=theme;try{localStorage.setItem('kobi-workspace-theme',theme);}catch{} }
try{saveTheme(localStorage.getItem('kobi-workspace-theme')||'dark');}catch{saveTheme('dark');}
function nodeStyle(node){const t=node.type;
 if(t.endsWith('stickyNote'))return {icon:'document',kind:'note',color:'#e7cf86'};
 if(t.includes('airtable'))return {icon:'airtable',kind:'square',color:'#33b9dd'};
 if(t.endsWith('.gmail'))return {icon:'gmail',kind:'square',color:'#f36f62'};
 if(t.includes('telegram'))return {icon:'telegram',kind:'square',color:'#35aee9'};
 if(t.endsWith('scheduleTrigger'))return {icon:'clock',kind:'round',color:'#e4e1ea'};
 if(t.endsWith('.webhook')||t.endsWith('respondToWebhook'))return {icon:'webhook',kind:'square',color:'#fc668d'};
 if(t.includes('lmChat'))return {icon:'model',kind:'round',color:'#dfd9eb'};
 if(t.includes('embeddings'))return {icon:'model',kind:'round',color:'#dfd9eb'};
 if(t.includes('documentDefault'))return {icon:'embed',kind:'round',color:'#c6b6df'};
 if(t.includes('textSplitter'))return {icon:'split',kind:'round',color:'#e3dfe9'};
 if(t.includes('vectorStore'))return {icon:'vector',kind:'wide',color:'#d2c4e8'};
 if(t.endsWith('.agent'))return {icon:'ai',kind:'wide',color:'#e3dfe9'};
 if(t.includes('chainLlm'))return {icon:'chain',kind:'wide',color:'#e3dfe9'};
 if(t.endsWith('.if'))return {icon:'branch',kind:'square',color:'#37ca84'};
 if(t.endsWith('.switch'))return {icon:'route',kind:'square',color:'#68b3f0'};
 if(t.endsWith('.formTrigger'))return {icon:'form',kind:'round',color:'#34cad0'};
 if(t.endsWith('.set'))return {icon:'edit',kind:'square',color:'#a58ae6'};
 if(t.endsWith('.html'))return {icon:'code',kind:'square',color:'#f4935b'};
 if(t.endsWith('.convertToFile'))return {icon:'document',kind:'square',color:'#75b3ea'};
 if(t.endsWith('.googleDrive'))return {icon:'drive',kind:'square',color:'#75b3ea'};
 if(t.endsWith('.merge'))return {icon:'merge',kind:'square',color:'#74cbd1'};
 if(t.endsWith('.aggregate'))return {icon:'aggregate',kind:'square',color:'#75b3ea'};
 return {icon:'workflow',kind:'square',color:'#b6afcb'};
}
function subtype(node){const p=node.parameters||{},t=node.type;if(t.includes('airtable'))return `${p.operation||'record'}: record`;if(t.endsWith('.gmail'))return p.operation==='getAll'?'get many: message':'send: message';if(t.endsWith('.telegram'))return 'send: message';if(t.endsWith('.googleDrive'))return 'upload: file';if(t.endsWith('.set'))return p.mode==='raw'?'raw':'manual';if(t.includes('vectorStore'))return p.mode==='insert'?'insert documents':'retrieve as tool';if(t.includes('lmChat'))return 'Chat Model';if(t.includes('embeddings'))return 'Embeddings';if(t.endsWith('.webhook'))return 'POST';return t.split('.').pop().replace(/([a-z])([A-Z])/g,'$1 $2');}
function explanation(node){const p=node.parameters||{},t=node.type;const special={
 'Find Last Invoice Number':'חיפוש חשבונית שכבר קיבלה מספר, במיון יורד. זהו הקלט לביטוי המספור הבא.',
 'Find Pending Invoice':'חיפוש חשבונית בסטטוס New לצורך אימות הנתונים.',
 'Validate Invoice':'בדיקה שסכום החשבונית חיובי ושמזהה הלקוח אינו ריק. הפלט מתפצל לפי תוצאת התנאי.',
 'App Secret Check':'בדיקת כותרת ההרשאה לפני ניתוב הבקשה. הסוד האמיתי הוסר מהעותק הציבורי.',
 'Owner Check':'בדיקת מזהה הצ׳אט המורשה לפני פנייה לסוכן המנהל. המזהה הוחלף במציין מקום.',
 'Mark Contacted':'עדכון רשומת הליד ל־Contacted בענף ההצלחה של שליחת המייל.',
 'Mark Replied':'עדכון רשומת הליד ל־Replied לאחר התאמת כתובת השולח.',
 'Mark Issued + Save Link':'שמירת קישור הצפייה במסמך ועדכון הסטטוס ל־Issued. הפקה אינה אישור תשלום.',
 'Build Manager Digest':'הרכבת הודעת התקציר מתוך הפריטים שאוחדו, עם הסיבה לטיפול והצעת פעולה.',
 'Normalize Treatment Item':'המרת רשומות מסוגים שונים למבנה משותף: סוג, כותרת, עדיפות, סיבה ופעולה מומלצת.',
 'Send a message':'ענף הודעת השגיאה כפי שנמסר בייצוא. הגדרות החיבור אינן כלולות בעותק הציבורי.'
 };if(special[node.name])return special[node.name];
 if(t.includes('airtable'))return p.operation==='search'?'קריאת רשומות מ־Airtable לפי הטבלה, הנוסחה והמגבלה שמופיעות בהגדרות.':p.operation==='create'?'יצירת רשומה בטבלה, בהתאם למיפויי השדות שבקובץ.':'עדכון הרשומה המתאימה לפי המזהה ומיפויי השדות.';
 if(t.endsWith('scheduleTrigger'))return 'הטריגר המתוזמן של התהליך. תדירות ההפעלה המקורית מופיעה ב־rule; האתר אינו מפעיל תזמון.';
 if(t.includes('telegramTrigger'))return 'נקודת הכניסה להודעות Telegram בבוט שהוגדר בסביבת העבודה.';
 if(t.endsWith('.telegram'))return 'שליחת התשובה או התקציר לשיחה המוגדרת. כאן מוצגות ההגדרות בלבד, ללא שליחה.';
 if(t.endsWith('.gmail'))return p.operation==='getAll'?'קריאת הודעות Gmail לפי מסנן החיפוש ומגבלת הכמות.':'שליחת תוכן ההודעה לנמען שממופה בקובץ. ההדגמה באתר אינה שולחת מיילים.';
 if(t.includes('vectorStore'))return p.mode==='insert'?'קליטת המסמכים והייצוגים הווקטוריים למאגר הידע תחת המפתח המוגדר.':'כלי חיפוש סמנטי במאגר הידע, המחובר לסוכן AI.';
 if(t.includes('embeddings'))return 'מודל יצירת Embeddings שמחובר למאגר הווקטורי. החיבור האישי הוסר מהעותק הציבורי.';
 if(t.includes('lmChat'))return 'מודל השפה המחובר לרכיב הראשי בקו AI מקווקו. המודל אינו מופעל באתר ההמחשה.';
 if(t.endsWith('.agent')||t.includes('chainLlm'))return 'רכיב ה־AI מקבל את הטקסט וההנחיות שמופיעים בהגדרות. כלי עזר ומודלים מחוברים אליו בקווים מקווקווים.';
 if(t.endsWith('.formTrigger'))return 'טופס העלאת הקובץ בסביבת n8n. כאן ניתן לראות את הגדרת הטופס, לא להעלות מידע למערכת.';
 if(t.includes('documentDefault'))return 'טעינת תוכן הקובץ למסמכים, בהתאם לסוג הנתונים ול־loader שבייצוא.';
 if(t.includes('textSplitter'))return 'חלוקת הטקסט למקטעים בגודל המוגדר, עם חפיפה בין המקטעים.';
 if(t.endsWith('.if'))return 'פיצול התהליך לפי התנאים המוגדרים: true או false.';
 if(t.endsWith('.switch'))return 'ניתוב הבקשה לפי הערך של action לענף הקריאה, היצירה, העדכון או הצ׳אט.';
 if(t.endsWith('.set'))return 'הכנת שדות וביטויים לשלב הבא. הערכים מוצגים כפי שהם בקובץ ואינם מחושבים בדפדפן.';
 if(t.endsWith('.merge'))return 'איחוד ענפי התהליך לפי ההגדרות ומספר הכניסות.';
 if(t.endsWith('.aggregate'))return 'איסוף הפריטים למערך משותף לקראת בניית התקציר.';
 if(t.endsWith('.html'))return 'בניית מסמך HTML מתבנית ומנתוני החשבונית. זהו מסמך דמו לימודי.';
 if(t.endsWith('.convertToFile'))return 'המרת תוכן ה־HTML לקובץ, בשם שמוגדר בביטוי.';
 if(t.endsWith('.googleDrive'))return 'העלאת קובץ המסמך ל־Google Drive בסביבת העבודה.';
 if(t.endsWith('respondToWebhook'))return 'החזרת תשובת HTTP לפנייה לממשק, בהתאם לגוף התשובה ולסטטוס המוגדר.';
 if(t.endsWith('.webhook'))return 'קבלת בקשת POST ממערכת חיצונית. נתיב החיבור הפרטי אינו מפורסם כאן.';
 return 'הרכיב כפי שמופיע בקובץ ה־JSON שפורסם. ההגדרות לקריאה בלבד.';
}
async function readText(url){const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),15000);try{const r=await fetch(url,{signal:controller.signal});if(!r.ok)throw new Error('HTTP '+r.status);return await r.text();}finally{clearTimeout(timeout);}}
async function boot(){mountIcons();try{
 const [source,...modelTexts]=await Promise.all([readText(manifest.source),...fileNames.map(f=>readText('models/'+f))]);
 const doc=new DOMParser().parseFromString(source,'text/html'),script=doc.getElementById('project-data');if(!script)throw new Error('Source data not found');data=JSON.parse(script.textContent);models=modelTexts.map(JSON.parse);
 if(data.flows.length!==11||models.length!==11)throw new Error('Incomplete workflow collection');
 renderNav();renderFilters();renderCards();applyRoute();
 }catch(err){$('cards').innerHTML=`<div class="empty"><h2>לא הצלחנו לטעון את התהליכים</h2><p>ייתכן שעדכון האתר עדיין מתפרסם. אפשר לנסות שוב או לפתוח את התיעוד.</p><button class="small-btn" id="retry">ניסיון נוסף</button> <a class="small-btn" href="${repo}/blob/main/docs/workflows/WORKFLOWS.md">תיעוד ב־GitHub</a></div>`;$('retry').onclick=()=>location.reload();$('flow-nav').innerHTML='<p class="loading-copy">הנתונים עדיין אינם זמינים.</p>';console.error('Workspace load failed',err);}}
function renderNav(){$('flow-nav').innerHTML=Object.entries(groups).map(([key,g])=>`<div class="nav-group-name" style="--cat:${g.color}"><span class="group-dot"></span>${g.label}</div>`+data.flows.filter(f=>f.group===key).map(f=>`<button class="nav-flow" data-flow="${f.num}"><span class="nav-num">${String(f.num).padStart(2,'0')}</span><span>${esc(f.title)}</span></button>`).join('')).join('');}
function renderFilters(){$('filters').innerHTML=[['all',{label:'הכול',color:'var(--orange)'}],...Object.entries(groups)].map(([k,g])=>`<button class="filter" data-group="${k}" aria-pressed="${group===k}" style="--cat:${g.color}"><span class="filter-dot"></span>${g.label}<span class="filter-count">${k==='all'?11:data.flows.filter(f=>f.group===k).length}</span></button>`).join('');}
function mini(model){const all=model.nodes.filter(n=>!n.type.endsWith('stickyNote'));const connections=model.connections;const incoming=new Set();Object.values(connections).forEach(p=>p.main?.forEach(out=>out.forEach(e=>incoming.add(e.node))));let node=all.find(n=>connections[n.name]?.main&&!incoming.has(n.name));const primary=[],seen=new Set();while(node&&primary.length<4&&!seen.has(node.name)){primary.push(node);seen.add(node.name);const next=connections[node.name]?.main?.[0]?.[0]?.node;node=all.find(n=>n.name===next);}if(!primary.length)primary.push(...all.slice(0,1));const w=primary.length*57-13,x0=(254-w)/2;return `<svg viewBox="0 0 254 72" aria-hidden="true">`+primary.map((n,i)=>{const x=x0+i*57,st=nodeStyle(n);return (i?`<path class="mini-wire" d="M${x-13} 33h13"/><circle cx="${x-13}" cy="33" r="1.5" fill="var(--line2)"/>`:'')+`<rect class="mini-box" x="${x}" y="11" width="44" height="44" rx="${st.kind==='round'?22:7}"/><svg x="${x+10}" y="21" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${st.color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${paths[st.icon]}</svg>`;}).join('')+'</svg>';}
function renderCards(){const matches=data.flows.filter(f=>(group==='all'||f.group===group)&&(`${f.num} ${f.title} ${f.en} ${f.desc}`).toLowerCase().includes(query.toLowerCase().trim()));$('results-count').textContent=matches.length+' תהליכים';$('cards').innerHTML=matches.length?matches.map(f=>{const m=models[f.num-1],g=groups[f.group],count=m.nodes.filter(n=>!n.type.endsWith('stickyNote')).length;return `<button class="flow-card" data-flow="${f.num}" style="--cat:${g.color}" aria-label="פתיחת תהליך ${f.num}: ${esc(f.title)}"><div class="card-head"><span class="card-flow-num">FLOW <b>${String(f.num).padStart(2,'0')}</b></span><span class="card-node-count">${count} רכיבים</span></div><div class="mini-canvas">${mini(m)}</div><div class="card-body"><h2 class="card-title">${esc(f.title)}</h2><p class="card-desc">${esc(f.desc)}</p></div><div class="card-foot"><span class="cat-tag">${g.label}</span>${f.num===11?'<span class="featured-ribbon">התוספת האישית</span>':''}<span class="open-flow">פתיחה בעורך ${icon('arrow')}</span></div></button>`;}).join(''):`<div class="empty"><h2>לא נמצאו תהליכים</h2><p>נסו שם אחר, מספר תהליך או תחום פעילות אחר.</p><button class="small-btn" id="clear-search">איפוס החיפוש</button></div>`;const clear=$('clear-search');if(clear)clear.onclick=()=>{query='';group='all';$('search').value='';renderFilters();renderCards();};}
function navigate(num){location.hash=num?'flow-'+num:'overview';if((num||null)===current)applyRoute();}
function applyRoute(){if(!data)return;const match=location.hash.match(/flow[-=]?(\d+)/i),num=match?Number(match[1]):null;if(num>=1&&num<=11)openFlow(num);else showOverview();}
function showOverview(){stopDemo();current=null;$('overview').hidden=false;$('editor').hidden=true;$('breadcrumb-title').textContent='Workflows';$('overview-btn').classList.add('selected');document.querySelectorAll('.nav-flow').forEach(b=>b.classList.remove('selected'));$('sidebar').classList.remove('open');document.title='מצפן ERP | Automation Workspace';}
function openFlow(num){stopDemo();current=num;loadId++;const f=data.flows[num-1],m=models[num-1];$('overview').hidden=true;$('editor').hidden=false;$('overview-btn').classList.remove('selected');document.querySelectorAll('.nav-flow').forEach(b=>b.classList.toggle('selected',Number(b.dataset.flow)===num));$('sidebar').classList.remove('open');$('breadcrumb-title').textContent=m.name;$('editor-number').textContent=String(num).padStart(2,'0');$('editor-title').textContent=f.title;$('editor-subtitle').textContent=f.en+' / '+groups[f.group].label;$('node-count').textContent=m.nodes.filter(n=>!n.type.endsWith('stickyNote')).length+' רכיבים · מה־JSON';$('pager-count').textContent=num+' / 11';$('prev-flow').disabled=num===1;$('next-flow').disabled=num===11;$('status-text').textContent='תצוגה אינטראקטיבית של קובץ הפרויקט';$('inspector').hidden=true;selected=null;prepareGraph(m);setTab('canvas');renderStory(f);renderShot(f);$('json-content').innerHTML=highlightJSON(JSON.stringify(m,null,2));$('download-json').href='models/'+fileNames[num-1];$('download-json').download=fileNames[num-1];document.title=f.title+' | מצפן ERP';requestAnimationFrame(()=>fit());}
function setTab(next){tab=next;document.querySelectorAll('[data-tab]').forEach(b=>{const yes=b.dataset.tab===next;b.classList.toggle('active',yes);b.setAttribute('aria-selected',String(yes));b.tabIndex=yes?0:-1;});for(const key of ['canvas','story','shot','json'])$(key+'-pane').hidden=next!==key;if(next!=='canvas')stopDemo();else requestAnimationFrame(()=>fit());}
function prepareGraph(model){const live=model.nodes.filter(n=>!n.type.endsWith('stickyNote')),minX=Math.min(...live.map(n=>n.position[0])),minY=Math.min(...live.map(n=>n.position[1]));geom=model.nodes.map(n=>{const s=nodeStyle(n),note=s.kind==='note',w=note?280:s.kind==='wide'?228:104,h=note?165:s.kind==='wide'?88:104;return {node:n,name:n.name,s,x:(n.position[0]-minX)*.8+100,y:(n.position[1]-minY)*.8+100,w,h};});edges=[];for(const [source,ports] of Object.entries(model.connections)){for(const [kind,outputs]of Object.entries(ports)){outputs.forEach((items,index)=>items.forEach(item=>{if(geom.some(g=>g.name===source)&&geom.some(g=>g.name===item.node))edges.push({source,target:item.node,kind,index,targetIndex:item.index||0});}));}}computeBounds();drawGraph();}
function computeBounds(){const live=geom.filter(g=>g.s.kind!=='note');bounds={x:Math.min(...live.map(g=>g.x))-60,y:Math.min(...live.map(g=>g.y))-55,maxX:Math.max(...live.map(g=>g.x+g.w))+70,maxY:Math.max(...live.map(g=>g.y+g.h))+92};bounds.w=bounds.maxX-bounds.x;bounds.h=bounds.maxY-bounds.y;}
function branchCount(g){if(g.node.type.endsWith('.if'))return 2;if(g.node.type.endsWith('.switch'))return g.node.parameters.rules?.values?.length||1;return Math.max(1,...edges.filter(e=>e.source===g.name&&e.kind==='main').map(e=>e.index+1));}
function portPoint(g,kind,index,input){if(kind!=='main'){const kinds=[...new Set(edges.filter(e=>(input?e.target:e.source)===g.name&&e.kind!=='main').map(e=>e.kind))];const slot=Math.max(0,kinds.indexOf(kind));return {x:g.x+g.w*(slot+1)/(kinds.length+1),y:input?g.y+g.h:g.y};}const count=input?Math.max(1,...edges.filter(e=>e.target===g.name&&e.kind==='main').map(e=>e.targetIndex+1)):branchCount(g);return {x:input?g.x:g.x+g.w,y:g.y+g.h*(index+1)/(count+1)};}
function drawEdges(){const labelsSeen=new Set();const svg=$('edges');svg.innerHTML='<defs><marker id="arrowhead" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 8 4 0 8Z" fill="#74727c"/></marker></defs>';for(const [i,e] of edges.entries()){const a=geom.find(g=>g.name===e.source),b=geom.find(g=>g.name===e.target),p=portPoint(a,e.kind,e.index,false),q=portPoint(b,e.kind,e.targetIndex,true),d=e.kind==='main'?Math.max(45,Math.abs(q.x-p.x)*.5):Math.max(50,Math.abs(q.y-p.y)*.5);const path=e.kind==='main'?`M${p.x} ${p.y}C${p.x+d} ${p.y},${q.x-d} ${q.y},${q.x} ${q.y}`:`M${p.x} ${p.y}C${p.x} ${p.y-d},${q.x} ${q.y+d},${q.x} ${q.y}`;svg.append(svgEl('path',{d:path,class:'wire'+(e.kind!=='main'?' ai':''),'data-edge':i,...(e.kind==='main'?{'marker-end':'url(#arrowhead)'}:{})}));if(e.kind!=='main'&&!labelsSeen.has(e.target+e.kind)){labelsSeen.add(e.target+e.kind);const text=svgEl('text',{x:q.x,y:q.y+23,class:'port-label','text-anchor':'middle'});text.textContent={ai_languageModel:'Chat Model',ai_embedding:'Embeddings',ai_document:'Document',ai_tool:'Tool',ai_textSplitter:'Text Splitter'}[e.kind]||e.kind;svg.append(text);}else if(branchCount(a)>1){let labels=a.node.type.endsWith('.if')?['true','false']:a.node.parameters.rules?.values?.map(v=>v.outputKey)||['success','error'];const text=svgEl('text',{x:p.x+12,y:p.y-10,class:'port-label'});text.textContent=labels[e.index]||'';svg.append(text);}}}
function drawGraph(){const host=$('nodes');host.innerHTML='';drawEdges();for(const g of geom){if(g.s.kind==='note'){/* Notes are available in JSON; avoid shrinking the main canvas around distant sticky notes. */continue;}const el=document.createElement('button');el.className='node '+g.s.kind;el.dataset.name=g.name;el.setAttribute('aria-label',g.name+': פתיחת פרטי הרכיב');el.style.cssText=`left:${g.x}px;top:${g.y}px;width:${g.w}px;height:${g.h}px;--node-color:${g.s.color}`;el.innerHTML=`<span class="node-symbol">${icon(g.s.icon)}</span>${g.s.kind==='wide'?`<span class="node-wide-name">${esc(g.name)}</span>`:''}<span class="node-label">${g.s.kind==='wide'?'':esc(g.name)}<span class="node-sub">${g.s.kind==='wide'&&edges.some(e=>e.target===g.name&&e.kind!=='main')?'':esc(subtype(g.node))}</span></span><span class="node-status">${icon('check')}</span>`;if(/Trigger|\.webhook$/.test(g.node.type))el.innerHTML+=`<span class="bolt-marker">${icon('bolt')}</span>`;const incoming=edges.filter(e=>e.target===g.name),outgoing=edges.filter(e=>e.source===g.name),seen=new Set();for(const [es,input] of [[incoming,true],[outgoing,false]])for(const e of es){const key=e.kind+':'+(input?e.targetIndex:e.index)+':'+input;if(seen.has(key))continue;seen.add(key);const p=portPoint(g,e.kind,input?e.targetIndex:e.index,input),port=document.createElement('span');port.className='port'+(e.kind!=='main'?' ai-port':'');port.style.left=(p.x-g.x)+'px';port.style.top=(p.y-g.y)+'px';el.append(port);}el.addEventListener('click',()=>{if(!drag?.moved)inspect(g.name);});host.append(el);}drawMiniMap();}
function drawMiniMap(){const s=$('minimap');s.innerHTML='';const sc=Math.min(180/bounds.w,95/bounds.h),ox=10-bounds.x*sc,oy=10-bounds.y*sc;for(const e of edges){const a=geom.find(g=>g.name===e.source),b=geom.find(g=>g.name===e.target);s.append(svgEl('path',{d:`M${ox+(a.x+a.w/2)*sc} ${oy+(a.y+a.h/2)*sc}L${ox+(b.x+b.w/2)*sc} ${oy+(b.y+b.h/2)*sc}`}));}for(const g of geom.filter(g=>g.s.kind!=='note'))s.append(svgEl('rect',{x:ox+g.x*sc,y:oy+g.y*sc,width:g.w*sc,height:g.h*sc,rx:2,class:g.s.kind==='wide'?'map-agent':''}));}
function transform(){$('world').style.transform=`translate(${pan.x}px,${pan.y}px) scale(${zoom})`;$('zoom-label').textContent=Math.round(zoom*100)+'%';$('canvas').style.backgroundSize=20*zoom+'px '+20*zoom+'px';$('canvas').style.backgroundPosition=pan.x+'px '+pan.y+'px';}
function fit(){if(!current||!bounds||tab!=='canvas')return;const r=$('canvas').getBoundingClientRect();if(!r.width||!r.height)return;const iw=$('inspector').hidden?0:$('inspector').getBoundingClientRect().width;const width=Math.max(250,r.width-iw),height=Math.max(180,r.height-115);zoom=Math.min(1.22,Math.max(.22,Math.min((width-70)/bounds.w,(height-35)/bounds.h)));pan={x:(width-bounds.w*zoom)/2-bounds.x*zoom,y:(height-bounds.h*zoom)/2-bounds.y*zoom+15};transform();}
function zoomAt(factor,x,y){const next=Math.min(2.3,Math.max(.22,zoom*factor));pan.x=x-(x-pan.x)*(next/zoom);pan.y=y-(y-pan.y)*(next/zoom);zoom=next;transform();}
function inspect(name){const g=geom.find(n=>n.name===name);if(!g)return;selected=name;$('inspector').hidden=false;$('inspector-icon').innerHTML=icon(g.s.icon);$('inspector-name').textContent=g.name;$('inspector-type').textContent=subtype(g.node);$('inspector-description').textContent=explanation(g.node);document.querySelectorAll('.node').forEach(n=>n.classList.toggle('selected',n.dataset.name===name));$('inspector-params').innerHTML=Object.entries(g.node.parameters||{}).map(([key,value])=>{let text=typeof value==='object'?JSON.stringify(value,null,2):String(value);const expr=text.startsWith('=');return `<div class="param"><label>${esc(key)}${expr?'<span class="chip">Expression</span>':''}</label><pre class="${expr?'is-expression':''}" tabindex="0">${esc(text)}</pre></div>`;}).join('')||'<p>הרכיב משתמש בהגדרות ברירת המחדל שבייצוא.</p>';$('inspector-scroll')?.scrollTo(0,0);}
function closeInspector(){$('inspector').hidden=true;selected=null;document.querySelectorAll('.node.selected').forEach(n=>n.classList.remove('selected'));}
function renderStory(f){$('story-pane').innerHTML=`<div class="story-content"><div class="story-hero"><div class="story-meta"><small>${icon('bolt')}מה מפעיל את התהליך?</small><strong>${esc(f.trigger)}</strong></div><div class="story-meta"><small>${icon('check')}מה אמור להתקבל?</small><strong>${esc(f.result)}</strong></div></div><div class="story-steps">${f.nodes.map((n,i)=>`<div class="story-step"><span class="step-index">${String(i+1).padStart(2,'0')}</span><div><strong>${esc(n.label)}</strong><p>${esc(n.detail)}</p></div></div>`).join('')}</div><div class="story-note">${icon('info')}<span>${esc(f.note)}</span></div><p class="story-disclaimer">הסבר עסקי מקוצר. בקנבס מוצגים הרכיבים והענפים כפי שהם בקובץ ה־JSON.</p></div>`;}
function renderShot(f){const src=data.shots[String(f.num)];$('shot-pane').innerHTML=src?`<div class="shot-content"><div class="shot-head"><div><h2>כך זה נראה ב־n8n</h2><p>צילום מסביבת העבודה שנשמר במהלך הפרויקט. הקנבס בעורך מציג את הייצוא שפורסם.</p></div><button class="small-btn" id="enlarge-shot">${icon('expand')}פתיחה בגודל מלא</button></div><button class="screenshot-button" id="shot-image-button" aria-label="הגדלת צילום התהליך"><img src="${src}" alt="צילום מקורי של תהליך ${f.num}: ${esc(f.title)}"></button><p class="shot-foot">לחצו על הצילום להגדלה.</p></div>`:`<div class="empty"><h2>אין צילום שמור לתהליך הזה</h2><p>הרכיבים והחיבורים זמינים במלואם בלשונית Editor מתוך קובץ ה־JSON.</p><button class="small-btn" id="return-editor">חזרה לעורך</button></div>`;for(const id of ['enlarge-shot','shot-image-button'])if($(id))$(id).onclick=()=>showImage(src);if($('return-editor'))$('return-editor').onclick=()=>setTab('canvas');}
function showImage(src){if(!src?.startsWith('data:image/'))return;imgZoom=1;$('large-image').src=src;$('image-dialog').showModal();requestAnimationFrame(sizeImage);}
function sizeImage(){const img=$('large-image');const width=$('image-dialog').clientWidth-40;img.style.width=(width*imgZoom)+'px';}
function highlightJSON(text){const re=/"(?:\\.|[^"\\])*"|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/gi;let result='',last=0;for(const m of text.matchAll(re)){result+=esc(text.slice(last,m.index));const token=m[0],cls=token[0]==='"'?(/^\s*:/.test(text.slice(m.index+token.length))?'json-key':'json-string'):/^(true|false|null)$/i.test(token)?'json-bool':'json-number';result+=`<span class="${cls}">${esc(token)}</span>`;last=m.index+token.length;}return result+esc(text.slice(last));}
function walkPath(){const main=edges.filter(e=>e.kind==='main'),branches=main.filter(e=>e.index===0),roots=geom.filter(g=>g.s.kind!=='note'&&main.some(e=>e.source===g.name)&&!main.some(e=>e.target===g.name)).map(g=>g.name);const reachable=new Set(roots),pending=[...roots];while(pending.length){const name=pending.shift();for(const e of branches.filter(e=>e.source===name))if(!reachable.has(e.target)){reachable.add(e.target);pending.push(e.target);}}const degree=new Map([...reachable].map(n=>[n,branches.filter(e=>e.target===n&&reachable.has(e.source)).length])),queue=[...reachable].filter(n=>degree.get(n)===0),result=[];while(queue.length){const name=queue.shift();result.push(name);for(const e of branches.filter(e=>e.source===name&&reachable.has(e.target))){degree.set(e.target,degree.get(e.target)-1);if(degree.get(e.target)===0)queue.push(e.target);}}return result;}
function tick(){if(walkIndex>=walk.length){clearInterval(timer);timer=null;$('execute-label').textContent='Execute demo';$('execute').querySelector('svg').outerHTML=icon('play');$('status-text').textContent='ההמחשה הסתיימה · לא בוצעו פעולות חיצוניות';document.querySelectorAll('.node.current,.wire.current').forEach(n=>n.classList.remove('current'));notify('ההמחשה הסתיימה. לא נשלחו הודעות ולא שונו נתונים.');return;}
 const name=walk[walkIndex++];document.querySelectorAll('.node.current').forEach(n=>{n.classList.remove('current');n.classList.add('done');});document.querySelectorAll('.wire.current').forEach(n=>{n.classList.remove('current');n.classList.add('lit');});const node=[...document.querySelectorAll('.node')].find(n=>n.dataset.name===name);node?.classList.add('current');edges.forEach((e,i)=>{if(e.target===name)$('edges').querySelector(`[data-edge="${i}"]`)?.classList.add('current');if(e.target===name&&e.kind!=='main'){const sub=[...document.querySelectorAll('.node')].find(n=>n.dataset.name===e.source);sub?.classList.add('current');}});$('status-text').textContent=`המחשה ${walkIndex}/${walk.length} · ${name} · ענף ראשי, לא הרצה`;}
function stopDemo(){if(timer)clearInterval(timer);timer=null;$('execute-label').textContent='Execute demo';const ico=$('execute').querySelector('svg');if(ico)ico.outerHTML=icon('play');document.querySelectorAll('.node.current,.node.done').forEach(n=>n.classList.remove('current','done'));document.querySelectorAll('.wire.current,.wire.lit').forEach(n=>n.classList.remove('current','lit'));}
$('execute').onclick=()=>{if(timer){stopDemo();$('status-text').textContent='ההמחשה נעצרה';return;}closeInspector();stopDemo();walk=walkPath();walkIndex=0;fit();$('execute-label').textContent='Stop demo';$('execute').querySelector('svg').outerHTML=icon('pause');tick();timer=setInterval(tick,1050);};
$('canvas').addEventListener('pointerdown',e=>{if(e.button!==0&&e.button!==1)return;const element=e.target.closest('.node'),g=element?geom.find(n=>n.name===element.dataset.name):null;drag={pointer:e.pointerId,startX:e.clientX,startY:e.clientY,moved:false,g,panX:pan.x,panY:pan.y,x:g?.x,y:g?.y};$('canvas').setPointerCapture(e.pointerId);$('canvas').classList.add('dragging');});
$('canvas').addEventListener('pointermove',e=>{if(!drag||drag.pointer!==e.pointerId)return;const dx=e.clientX-drag.startX,dy=e.clientY-drag.startY;if(Math.abs(dx)+Math.abs(dy)>4)drag.moved=true;if(!drag.moved)return;if(drag.g){drag.g.x=drag.x+dx/zoom;drag.g.y=drag.y+dy/zoom;const el=[...document.querySelectorAll('.node')].find(n=>n.dataset.name===drag.g.name);el.style.left=drag.g.x+'px';el.style.top=drag.g.y+'px';drawEdges();computeBounds();drawMiniMap();}else{pan={x:drag.panX+dx,y:drag.panY+dy};transform();}});
$('canvas').addEventListener('pointerup',e=>{if(!drag)return;const saved=drag;$('canvas').classList.remove('dragging');try{$('canvas').releasePointerCapture(e.pointerId);}catch{}if(!saved.moved&&saved.g)inspect(saved.g.name);setTimeout(()=>{if(drag===saved)drag=null;},0);});
$('canvas').addEventListener('pointercancel',()=>{drag=null;$('canvas').classList.remove('dragging');});
$('canvas').addEventListener('wheel',e=>{if(tab!=='canvas')return;e.preventDefault();const r=$('canvas').getBoundingClientRect();zoomAt(Math.exp(-e.deltaY*.0015),e.clientX-r.left,e.clientY-r.top);},{passive:false});
$('zoom-in').onclick=()=>{const r=$('canvas').getBoundingClientRect();zoomAt(1.2,r.width/2,r.height/2);};$('zoom-out').onclick=()=>{const r=$('canvas').getBoundingClientRect();zoomAt(1/1.2,r.width/2,r.height/2);};$('fit').onclick=fit;$('reset-positions').onclick=()=>{stopDemo();closeInspector();prepareGraph(models[current-1]);fit();notify('מיקום הרכיבים שוחזר לקובץ המקור.');};
$('inspector-close').onclick=closeInspector;$('overview-btn').onclick=()=>navigate(null);$('prev-flow').onclick=()=>navigate(current-1);$('next-flow').onclick=()=>navigate(current+1);
$('search').addEventListener('input',e=>{query=e.target.value;if(data)renderCards();});
$('filters').addEventListener('click',e=>{const b=e.target.closest('[data-group]');if(!b)return;group=b.dataset.group;renderFilters();renderCards();});
for(const id of ['cards','flow-nav'])$(id).addEventListener('click',e=>{const b=e.target.closest('[data-flow]');if(b)navigate(Number(b.dataset.flow));});
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>setTab(b.dataset.tab));
document.querySelector('.editor-tabs').addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight'].includes(e.key))return;e.preventDefault();const buttons=[...document.querySelectorAll('[data-tab]')],i=buttons.findIndex(b=>b.classList.contains('active')),next=(i+(e.key==='ArrowRight'?1:-1)+buttons.length)%buttons.length;setTab(buttons[next].dataset.tab);buttons[next].focus();});
$('theme-btn').onclick=()=>saveTheme(document.documentElement.dataset.theme==='light'?'dark':'light');
$('fullscreen-btn').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{notify('הדפדפן אינו מאפשר כאן מסך מלא.');}};
function showAbout(){$('about-dialog').showModal();}$('about-btn').onclick=showAbout;$('help-btn').onclick=showAbout;$('close-about').onclick=()=>$('about-dialog').close();
for(const id of ['about-dialog','image-dialog'])$(id).addEventListener('click',e=>{if(e.target===$(id)){const r=$(id).getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$(id).close();}});
$('image-plus').onclick=()=>{imgZoom=Math.min(4,imgZoom+.5);sizeImage();};$('image-minus').onclick=()=>{imgZoom=Math.max(.5,imgZoom-.5);sizeImage();};$('image-close').onclick=()=>$('image-dialog').close();
$('menu-btn').onclick=()=>$('sidebar').classList.toggle('open');
document.addEventListener('click',e=>{if($('sidebar').classList.contains('open')&&!e.target.closest('.sidebar')&&!e.target.closest('#menu-btn'))$('sidebar').classList.remove('open');});
$('share-btn').onclick=async()=>{try{await navigator.clipboard.writeText(location.href);notify('הקישור הישיר לתהליך הועתק.');}catch{notify('הקישור הישיר נמצא בשורת הכתובת של הדפדפן.');}};
window.addEventListener('hashchange',applyRoute);let resizeTimer;window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(fit,80);});
document.addEventListener('keydown',e=>{if(e.target.matches('input,textarea')||document.querySelector('dialog[open]'))return;if(e.key==='/'){e.preventDefault();if(current){navigate(null);requestAnimationFrame(()=>$('search').focus());}else $('search').focus();}if(e.key.toLowerCase()==='f'&&!e.ctrlKey&&!e.metaKey&&current){e.preventDefault();fit();}if(e.key==='Escape'){if(!$('inspector').hidden)closeInspector();else if(timer)stopDemo();else if(current)navigate(null);else $('sidebar').classList.remove('open');}});
boot();
})();
