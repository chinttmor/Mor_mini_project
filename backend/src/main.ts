import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { useRequestLogging } from './middleware/morgan'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Mini project API')
  .setDescription('Not much to describe')
  .setVersion('1.0')
  .addTag('')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
useRequestLogging(app);
  await app.listen(3000);
}
bootstrap();
