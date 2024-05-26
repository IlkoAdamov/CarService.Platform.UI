import { useSelector } from "react-redux";
import { DataSource, StoreKey } from "../../../../../models";
import { RiGalleryView2 } from "react-icons/ri";
import { Divider } from "@mui/material";
import DataGrid from "../../../../shared/data-grid";
import style from "./style.module.scss";

function WorkspaceView() {
  const dataSource: DataSource = {
    data: useSelector((store: any) => store[StoreKey.CAR].collection),
    columns: [
      {
        accessorKey: "id",
        header: "Number",
        size: 150,
      },
      {
        accessorKey: "vin",
        header: "VIN",
        size: 250,
      },
      {
        accessorKey: "brand",
        header: "Brand",
        size: 250,
      },
      {
        accessorKey: "model",
        header: "Model",
        size: 250,
      },
      {
        accessorKey: "fuel",
        header: "Fuel type",
        size: 250,
      },
      {
        accessorKey: "power",
        header: "Horsepower (Kw)",
        size: 250,
      },
      {
        accessorKey: "horse_power",
        header: "Horsepower (hP)",
        size: 250,
      },
      {
        accessorKey: "plate",
        header: "Plate",
        size: 250,
      },
    ],
    elevation: 0,
    color: "rgb(117, 111, 111)",
    fontStyle: "italic",
  };
  return (
    <div>
      <div className={style.title}>
        <div className={style.icon}>
          <RiGalleryView2 fontSize="30" />
        </div>
        <div className={style.text}>VIEW ALL VEHICLES</div>
      </div>
      <Divider />
      <DataGrid dataSource={dataSource} />
    </div>
  );
}

export default WorkspaceView;
