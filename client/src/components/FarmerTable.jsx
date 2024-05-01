import React from 'react';
import { useTable } from 'react-table';

const data = [
  { action: 'Harvesting fresh beans', actionBy: 'Farmer', actionOn: 'Coffee', actionBtn: 'Harvest'},
  { action: 'Processing of beans', actionBy: 'Farmer', actionOn: 'Coffee', actionBtn: 'Process'},
  { action: 'Unit Packaging', actionBy: 'Farmer', actionOn: 'Coffee', actionBtn: 'Pack'},
  { action: 'Sell to distributer', actionBy: 'Farmer', actionOn: 'Distributor', actionBtn: 'Sell' }
];

const columns = [
  { Header: 'Action', accessor: 'action' },
  { Header: 'Action By', accessor: 'actionBy' },
  { Header: 'Action On', accessor: 'actionOn' },
  {
    Header: 'Action Button',
    accessor: 'actionBtn',
    Cell: ({ row }) => (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32">
        {row.values.actionBtn}
      </button>
    )
  }
];

const FarmerList = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  return (
    <table {...getTableProps()} className="table-auto w-full  mb-24">
      
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} className="px-4 py-2 text-left">
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="border-b">
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()} className="px-4 py-2">
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FarmerList;
