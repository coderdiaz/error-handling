import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./app.module";

const APP_PORT = process.env.APP_PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(APP_PORT);
}

bootstrap();
