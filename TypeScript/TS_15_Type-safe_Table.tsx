export interface Column<
  TObject extends object,
  Accessor extends keyof TObject = keyof TObject
> {
  label: Accessor;
}

interface TableProps<TObject extends object> {
  columns: Column<TObject>[];
  rows: TObject[];
}

// Define a generic Table component using the TableProps interface
function Table<TObject extends object>({ columns, rows }: TableProps<TObject>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{String(column.label)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex}>{String(row[column.label])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

// =================================Implementation=========================

interface Finances {
  profit: number;
  losses: number;
}

const columns: Column<Finances>[] = [
  {
    label: 'profit',
  },
  {
    label: 'losses',
  },
];

<Table
  columns={columns}
  rows={[
    {
      profit: 25,
      losses: 40,
    },
  ]}
/>;
