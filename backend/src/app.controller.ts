import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Quiz } from './decorators/quiz.decorator';
import { QuizType } from './validation/validationSchema/quizSchema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): void {
  //   return this.appService.insert_Data_To_Student_Table();
  // }
  @Post('/test')
  async test(@Quiz() quiz: QuizType){
    console.log(quiz)
  }

}
