import { useEffect } from "react";
import { Box } from "@mui/material";
import Header from "./components/frame/header/header";
import "./style/global.scss";
import Body from "./components/frame/body/body";
import { TOKENS } from "./di/tokens";
import { di } from "./di/container";
import { useDispatch } from "react-redux";
import { carAction } from "./store/slices/car-slice";
import { CarService } from "./services/user-services/car.service";

function App() {
  const dispatch = useDispatch();

  let carService: CarService = di.Resolver(TOKENS.carService) as CarService;

  useEffect(() => {
    carService.getAllDetails().then((result) => {
      if (result.status === 200) dispatch(carAction(result.data));
      else console.error("show notification for error ... ");
    });
  }, []);

  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
