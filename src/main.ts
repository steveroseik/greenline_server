import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from "firebase-admin";
import * as dotenv from "dotenv";
dotenv.config();

async function bootstrap() {

  admin.initializeApp({
    credential: admin.credential.cert({
      privateKey: process.env.private_key,
      projectId: process.env.project_id,
      clientEmail: process.env.client_email
    })
  })

  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
export default admin;
bootstrap();
