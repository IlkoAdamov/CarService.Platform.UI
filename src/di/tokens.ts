import { token } from "brandi";
import { HttpCarService } from "../services/http/http-car.service";
import { CarService } from "../services/user-services/car.service";

export const TOKENS = {
  httpCarService: token<HttpCarService>("HttpCarService"),

  carService: token<CarService>("CarService"),

  //   httpCategoryService: token<HttpCategoryService>("HttpCategoryService"),
  //   httpVenueService: token<HttpVenueService>("HttpVenueService"),
  //   userService: token<UserService>("UserService"),
};
