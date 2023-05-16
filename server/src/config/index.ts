import { join } from "node:path";

export default {
    localhost: process.env.LOCALHOST,
    port: parseInt(process.env.PORT, 10) || 3003,
    dirPublic: join(__dirname, '../public/pages/'),
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 27017
    },
    secretUser: process.env.SECRET_USER
};