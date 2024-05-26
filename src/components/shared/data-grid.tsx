import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo } from "react";
import { DataSource } from "../../models";

function DataGrid({ dataSource }: { dataSource: DataSource }) {
  const columns = useMemo<MRT_ColumnDef<any>[]>(() => dataSource.columns, []);
  const data = dataSource.data;

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    muiTablePaperProps: {
      elevation: dataSource.elevation,
    },
    muiTableHeadCellProps: {
      sx: (theme) => ({
        color: dataSource.color,
      }),
    },
    muiTableBodyCellProps: {
      sx: (theme) => ({
        color: dataSource.color,
        fontStyle: dataSource.fontStyle,
      }),
    },
  });
  return (
    <div>
      <MaterialReactTable table={table} />
    </div>
  );
}

export default DataGrid;
