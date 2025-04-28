# 📅 Task Manager Project - Full Plan

---

## 🔥 מטרות הפרויקט:

- בניית מערכת ניהול משימות (Task Manager) מודרנית.
- פיתוח Fullstack: NestJS + Vue 3 + PostgreSQL.
- פריסה מלאה עם Docker, GitHub Actions, AWS EC2.
- אוטומציה: בדיקות Health Production + בדיקות E2E עם Playwright.

---

## 🛠️ שלבי עבודה עיקריים:

### שלב 1: תשתיות (שבועות 1–2)

- [x] פתיחת ריפוזיטורי GitHub.
- [x] הקמת תיקיות `backend/` ו-`frontend/`.
- [x] יצירת פרויקט NestJS (`nest new backend`).
- [x] יצירת פרויקט Vue 3 עם Vite ו-TypeScript (`npm create vite@latest frontend`).
- [x] Commit ראשון - מבנה בסיסי.
- [x] סקירה בסיסית של NestJS ו-Vue 3.
- [x] כתיבת קובץ plan.md (תיעוד מסלול עבודה).

---

### שלב 2: Backend Development (שבועות 2–4)

- [ ] בניית Entity `User` עם DTO.
- [ ] בניית `UsersService` (לוגיקת יצירה ואחזור).
- [ ] בניית `UsersController` עם Endpoints.
- [ ] חיבור ל-PostgreSQL עם TypeORM.
- [ ] בדיקות רישום משתמש דרך Postman.

---

### שלב 3: Dockerization (שבוע 4)

- [ ] כתיבת Dockerfile ל-Backend.
- [ ] יצירת `docker-compose.yml` ל-Backend + DB.
- [ ] בדיקה מקומית שהכל רץ עם Docker Compose.

---

### שלב 4: Frontend Development (שבועות 4–5)

- [ ] בניית דף התחברות (Login) ב-Vue 3.
- [ ] חיבור API `/auth/register` לפרונט.
- [ ] שמירת טוקן ב-LocalStorage.
- [ ] בניית Route Guards (הגנת ניווט לפי התחברות).
- [ ] שיפור עיצוב בסיסי עם TailwindCSS.

---

### שלב 5: Authentication Flow (שבוע 5)

- [ ] בניית `/auth/login` עם JWT ב-Backend.
- [ ] חיבור ל-Login דרך הפרונטנד.
- [ ] פונקציות Login ו-Logout.
- [ ] בדיקה שהאבטחה עובדת תקין.

---

### שלב 6: Projects & Tasks Management (שבוע 6)

- [ ] בניית Entities `Project` ו-`Task`.
- [ ] בניית CRUD מלא ל-Projects ו-Tasks.
- [ ] בניית דף ניהול פרויקטים ומשימות בפרונטנד.
- [ ] בניית Kanban Board בסיסי להצגת משימות לפי סטטוס.

---

### שלב 7: DevOps ו-CI/CD (שבוע 7)

- [ ] פתיחת חשבון DockerHub.
- [ ] כתיבת GitHub Actions ל-Build & Push ל-DockerHub.
- [ ] בדיקת הרצת הפייפליין.

---

### שלב 8: פריסה ל-AWS EC2 (שבוע 8)

- [ ] פתיחת שרת EC2 באמזון (Free Tier).
- [ ] התקנת Docker + Docker Compose בשרת.
- [ ] פריסה של Docker Images בשרת.
- [ ] בדיקת גישה חיצונית לשרת דרך דומיין/כתובת IP.

---

### שלב 9: Monitoring + בדיקות אוטומטיות (שבוע 9)

- [ ] בניית API Health (`/api/health`) ב-Backend.
- [ ] יצירת Scheduled GitHub Action לבדוק בריאות כל 5 דקות.
- [ ] התקנת Playwright לפרויקט.
- [ ] כתיבת בדיקות End-to-End לפרונט (רישום, התחברות, מעבר מסכים).
- [ ] שילוב בדיקות Playwright בפייפליין CI.

---

### שלב 10: Polish & Professional Touch (שבוע 10)

- [ ] שדרוג עיצוב ב-TailwindCSS.
- [ ] הוספת Toast Notifications ו-Loading Indicators.
- [ ] כתיבת README מקצועי לפרויקט.
- [ ] בדיקות סופיות ותיקוני באגים.
- [ ] Commit אחרון "Production Ready 🚀".

---

## 📋 עקרונות עבודה:

- כל שלב
