import { createContainer, Container } from "brandi";
import { useInjection } from "brandi-react";
import { TOKENS } from "./tokens";
import { TokenValue } from "brandi";
import { HttpCarService } from "../services/http/http-car.service";
import { CarService } from "../services/user-services/car.service";

function Register(): Container {
  const container = createContainer();

  container
    .bind(TOKENS.httpCarService)
    .toInstance(HttpCarService)
    .inTransientScope();

  container.bind(TOKENS.carService).toInstance(CarService).inTransientScope();

  //   container
  //     .bind(TOKENS.httpCategoryService)
  //     .toInstance(HttpCategoryService)
  //     .inTransientScope();

  //   container
  //     .bind(TOKENS.httpVenueService)
  //     .toInstance(HttpVenueService)
  //     .inTransientScope();

  //   container.bind(TOKENS.userService).toInstance(UserService).inTransientScope();

  return container;
}

function Resolver<T extends TokenValue<unknown>>(token: T): any {
  const obj = useInjection(token);

  return obj;
}

// https://brandi.js.org/brandi-react
export const di = {
  Register,
  Resolver,
};
