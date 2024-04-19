//Primer forma para tipar array
const languages: Array<string> = [];
//Segunda forma para tipar array
const languages2: string[] = [];
// si quiero tener dos tipos de datos diferentes
const languages3: (string | number)[] = [];
//Matrices
const languages4: string[][] = []

//Matriz ejemplo 2
// Union type
type CellValue = "X" | "O" | "";
//tupla
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];

const gameBoard: GameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];


