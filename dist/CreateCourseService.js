"use strict";
/** tipagem
 * name - string
 * duration - number
 * educator - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
    execute({ duration = 8, educator, name }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService();
