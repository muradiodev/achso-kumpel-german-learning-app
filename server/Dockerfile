FROM node:24-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY src ./src
# deploy.sh puts the current release manifest here before the build.
COPY version.json ./

# The SQLite file lives on a volume mounted at /data.
ENV DATABASE_FILE=/data/achsokumpel.db \
    VERSION_FILE=/app/version.json \
    PORT=8787

RUN mkdir -p /data && chown node:node /data
USER node

EXPOSE 8787
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1:8787/health || exit 1
CMD ["node", "src/index.js"]
