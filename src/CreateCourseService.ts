/** tipagem
 * name - string
 * duration - number 
 * educator - string
 */

interface Course {
  name: string;
  duration?: number;// a interrogação torna a "duration" como dado opcional
  educator: string;
}

class CreateCourseService {

  //___EXISTE UMA FORMA MAIS PRODUTIVA DE PASSAR A TIPAGEM DO PARÂMETRO:
  // CONSTRUIR UM OBJETO "interface" 
  // execute(name: string, duration: number, educator: string) {
  //   console.log(name, duration, educator)
  // }
  //AQUI JÁ É COM A INTERFACE
  // execute(data: Course) {
  //   console.log(data.name, data.duration, data.educator)
  // }
  execute({ duration = 8, educator, name }: Course) { // quando eu coloco "duration = 8" eu estabeleço um valor defaut para esse parametro já que ele é opcional
    console.log(name, duration, educator)
  }
}

export default new CreateCourseService();