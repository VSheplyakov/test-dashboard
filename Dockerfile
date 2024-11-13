# Крок 1: Базовий образ для Node.js
FROM node:16 AS build

# Крок 2: Додати робочу директорію
WORKDIR /app

# Крок 3: Копіюємо файли та встановлюємо залежності
COPY package*.json ./
RUN npm install

# Крок 4: Копіюємо решту файлів і будуємо проєкт
COPY . .
RUN npm run build

# Крок 5: Використовуємо lightweight image для сервака
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Крок 6: Експонуємо порт для Nginx
EXPOSE 80

# Крок 7: Запускаємо Nginx
CMD ["nginx", "-g", "daemon off;"]