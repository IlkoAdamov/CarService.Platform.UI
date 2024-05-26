// import { EndPoints } from "../../models/end-point.model";
import http from "./http-common";
import { Car, EndPoints } from "../../models/index";
import { AxiosResponse } from "axios";

export class HttpCarService {
  //   private config = {
  //     headers: {
  //       Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
  //     },
  //   };

  public getAll = async () => {
    return http.get<Car>(`${EndPoints.car.base}`);
  };
}
