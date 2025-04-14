import React, { useState } from 'react'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import DATA from '../../../data'

const columns = [
    {
        accessorKey: "task",
        header: "Task",
        cell: (props) => <p>{props.getValue()}</p>
    },

    {
        accessorKey: "status",
        header: "Status",
        cell: (props) => <p>{props.getValue()?.name}</p>
    },
    {
        accessorKey: "due",
        header: "Due",
        cell: (props) => <p>{props.getValue()?.toLocaleTimeString()}</p>
    },
    {
        accessorKey: "notes",
        header: "Notes",
        cell: (props) => <p>{props.getValue()}</p>
    }

]


const CategoryTansatck = () => {
    const [data, setData] = useState(DATA)
    const table = useReactTable({
        data, columns,
        getCoreRowModel: getCoreRowModel()
    })
    // console.log(table.getRowModel())
    return (
        <div>
            <table className="min-w-full text-sm text-left border border-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-gray-700 font-semibold">
                    {
                        table.getHeaderGroups().map(headerGroup => <tr key={headerGroup.id}>
                          {
                            headerGroup.headers.map(header => <th className='px-4 py-3 border-b' key={header.id}>
                               {header.column.columnDef.header}
                            </th>)
                          }

                        </tr>


                        )
                    }

                </thead>
                <tbody className="divide-y divide-gray-200">
                    {
                        table.getRowModel().rows.map(row => <tr className="hover:bg-gray-50" key={row.id}>
                          {
                            row.getVisibleCells().map(cell=> <td key={cell.id} className='px-4 py-4'>
                            {
                                flexRender(
                                    cell.column.columnDef.cell, cell.getContext()
                                )
                            }
                            </td>)
                          }
                            </tr>
        )
                    }
                   
                </tbody>
            </table>
        </div>
    )
}

export default CategoryTansatck