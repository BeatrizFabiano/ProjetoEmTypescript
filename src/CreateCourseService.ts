/** tipagem
 * name - string
 * duration - number 
 * educator - string
 */

interface Course {
  name: string;
  duration: number;
  educator: string;
}

class CreateCourseService {

  //___EXISTE UMA FORMA MAIS PRODUTIVA DE PASSAR A TIPAGEM DO PARÂMETRO:
  // CONSTRUIR UM OBJETO "interface" 
  execute(name: string, duration: number, educator: string) {
    console.log(name, duration, educator)
  }
}

export default new CreateCourseService();