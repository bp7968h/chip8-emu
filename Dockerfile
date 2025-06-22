# First stage to compile to WASM
FROM rust:latest AS wasm-core-build
RUN rustup target add wasm32-unknown-unknown && cargo install wasm-pack
WORKDIR /app
COPY chip8-core ./chip8-core
WORKDIR /app/chip8-core
RUN wasm-pack build --release

# Second stage, install frontend dependencies and build
FROM node:20 AS frontend-build
WORKDIR /app
COPY --from=wasm-core-build /app/chip8-core/pkg ./pkg
COPY package.json package-lock.json ./
RUN npm install
COPY src ./src
COPY public ./public
COPY index.html ./index.html
COPY eslint.config.js ./eslint.config.js
COPY tsconfig.json ./tsconfig.json
COPY tsconfig.app.json ./tsconfig.app.json
COPY tsconfig.node.json ./tsconfig.node.json
COPY vite.config.ts ./vite.config.ts
RUN npm run build

# Third stage: serve built app using nginx
FROM nginx:alpine AS nginx-serve
COPY --from=frontend-build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]