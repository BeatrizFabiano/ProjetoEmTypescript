import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "Node.js",
    educator: "Adele",
    duration: 10
  });

  CreateCourseService.execute({
    name: "React.js",
    educator: "Mason",
  })
  return response.send();
}