FROM node:16 as vue-build
WORKDIR /app
COPY . ./
RUN rm yarn.lock && yarn
RUN yarn build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=vue-build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]