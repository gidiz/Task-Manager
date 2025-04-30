# 📅 Task Manager Project - Full Plan

---

## 🎯 מטרות הפרויקט:
- מערכת ניהול משימות (Task Manager) מודרנית.
- פיתוח Fullstack: NestJS + Vue 3 + PostgreSQL.
- פיצול לשירותים (Service-Based Architecture).
- תקשורת אסינכרונית עם RabbitMQ.
- פריסה ב-Docker ו-Kubernetes.
- תהליכי CI/CD עם GitHub Actions.
- ניטור, בדיקות UI, ותיעוד.

---

## 🛠️ שלבי עבודה עיקריים:

### שלב 1: תשתית הפרויקט (שבוע 1)
- [x] פתיחת ריפוזיטורי GitHub
- [x] יצירת תיקיות `frontend/` ו-`backend/`
- [x] יצירת פרויקט NestJS
- [x] יצירת פרויקט Vue 3 עם Vite
- [x] Commit ראשון
- [x] סקירה על NestJS ו-Vue3
- [x] יצירת `plan.md` (תיעוד התקדמות)

### שלב 2: NestJS בסיס (שבוע 2)
- [ ] יצירת Entity `User` + DTO
- [ ] בניית `UsersService` בסיסי
- [ ] יצירת API `auth/register` ב־Controller
- [ ] חיבור ל־PostgreSQL עם TypeORM
- [ ] בדיקות ראשוניות עם Postman

### שלב 3: Dockerization (שבוע 3)
- [ ] יצירת Dockerfile ל־Backend
- [ ] כתיבת docker-compose כולל PostgreSQL
- [ ] בדיקה שהמערכת רצה מקומית עם Docker

### שלב 4: Frontend בסיסי (שבוע 4)
- [ ] דף התחברות + טופס הרשמה
- [ ] שמירת Token ב־LocalStorage
- [ ] Route Guard לפי התחברות
- [ ] עיצוב בסיסי עם TailwindCSS

### שלב 5: Authentication מלא (שבוע 5)
- [ ] יצירת API `auth/login` עם JWT
- [ ] פונקציות Login / Logout מלאות
- [ ] בדיקה כוללת עם שמירת session

### שלב 6: Tasks CRUD (שבוע 6)
- [ ] יצירת Entity `Task`
- [ ] יצירת שירות `TasksService`
- [ ] בניית דפי ניהול משימות
- [ ] Kanban Board להצגת סטטוסים

### שלב 6.5: שילוב RabbitMQ
- [ ] התקנת RabbitMQ ב־docker-compose
- [ ] שליחת `task_created` מ־tasks-service
- [ ] צריכת האירוע ב־notifications-service
- [ ] הדפסת ההתראה כפעולה התחלתית

### שלב 6.6: פיצול לשירותים
- [ ] חלוקת קוד ל־`tasks-service` ו־`notifications-service`
- [ ] Dockerfile עצמאי לכל שירות
- [ ] הפעלת RabbitMQ בין השירותים

### שלב 7: CI/CD (שבוע 7)
- [ ] כתיבת GitHub Actions ל־Build ו־Push
- [ ] העלאה ל־DockerHub

### שלב 8: פריסה ל-AWS (שבוע 8)
- [ ] יצירת שרת EC2 באמזון
- [ ] התקנת Docker ו־Docker Compose
- [ ] העלאת קונטיינרים לאוויר

### שלב 9: ניטור ובדיקות (שבוע 9)
- [ ] יצירת Endpoint `/health`
- [ ] GitHub Action לבדיקה כל 5 דקות
- [ ] התקנת Playwright
- [ ] כתיבת בדיקות UI End-to-End

### שלב 10: Polish ו־QA (שבוע 10)
- [ ] Toasts, Loaders, UX עדין
- [ ] README מקצועי כולל תמונות ופקודות
- [ ] בדיקה סופית ו־Commit אחרון

### שלב 11: פריסה ב-Kubernetes (שבוע 11)
- [ ] Docker Image לכל שירות
- [ ] כתיבת קובצי Deployment ו־Service
- [ ] Namespace ייעודי לפרויקט
- [ ] שימוש ב־ConfigMap / Secret
- [ ] RabbitMQ ו־PostgreSQL ב־K8s
- [ ] הרצה מלאה ב־Minikube או AWS EKS

---

## ✅ הערות:

- תעדכן `[x]` ליד כל משימה שבוצעה.
- תתחזק את הקובץ הזה בכל יום עבודה.
- תעשה commit לקובץ עם הודעה ברורה.
