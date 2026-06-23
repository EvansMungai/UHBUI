# --- Stage 1: Build and Test ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run test -- --watch=false --code-coverage
RUN npm run build -- --configuration=production

# --- Stage 2: SonarQube Cloud Code Quality Analysis ---
FROM sonarsource/sonar-scanner-cli:latest AS sonar
WORKDIR /usr/src
COPY --from=build /app /usr/src

# SonarQube Cloud requires a token and host URL argument
ARG SONAR_HOST_URL="https://sonarcloud.io"
ARG SONAR_TOKEN

RUN sonar-scanner \
  -Dsonar.host.url=${SONAR_HOST_URL} \
  -Dsonar.token=${SONAR_TOKEN}

# --- Stage 3: Production Environment ---
FROM nginx:alpine
COPY --from=build /app/dist/my-angular-frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]