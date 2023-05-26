import { useSelector } from "react-redux";
import FileSaver from "file-saver";
import * as XLSX from "xlsx";

const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const fileExtension = ".xlsx";
const Heading = [
  {
    firstName: "Title",
    email: "List",
    address: "CreatedAt",
    lastName: "Descriptin",
  },
];
const ExportExcelFile = () => {
  const todos = useSelector((state) => state.todos);
  const exportToCSV = (csvData, fileName, wscols) => {
    const ws = XLSX.utils.json_to_sheet(Heading, {
      header: ["title", "descriptin", "list", "createdAt"],
      skipHeader: true,
      origin: 0, //ok
    });
    ws["!cols"] = 5;
    XLSX.utils.sheet_add_json(ws, todos, {
      header: ["title", "descriptin", "list", "createdAt"],
      skipHeader: true,
      origin: -1, //ok
    });
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    // saveAsExcelFile(excelBuffer, `Tasks`);
    FileSaver.saveAs(data, "Tasks" + fileExtension);
  };
  return <button onClick={() => exportToCSV()}>ExportExcelFile</button>;
};

export default ExportExcelFile;
