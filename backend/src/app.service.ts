import { Injectable } from '@nestjs/common';
import fs = require('fs');
import path = require('path');
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  insert_Data_To_Student_Table(): void{
   const filePath = path.join(process.cwd(), '/src/questions.json');
   const json = fs.readFileSync(filePath,"utf8");
   const data = JSON.parse(json);
   Object.keys(data).forEach(key =>{
    console.log('Quiz '+ key + data[key].question)
   });
  }
}
