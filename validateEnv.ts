import { cleanEnv, str, port } from 'envalid';

export function validateEnv() {
  cleanEnv(process.env, {
    POSTGRES_HOST: str(),
    POSTGRES_PORT: port(),
    POSTGRES_USER: str(),
    POSTGRES_PASSWORD: str(),
    POSTGRES_DB: str(),
    PORT: port(),
  });
}
