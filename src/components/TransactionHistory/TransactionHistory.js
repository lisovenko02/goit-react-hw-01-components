import { Table, TableBody, TableHead } from "./TransactionHistory.styled";

export const TransactionHistory = ({items}) => {
    return (
        <Table>
            <TableHead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TableHead>

            {items.map(item => 
                <TableBody key={item.id}>
                <tr>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            </TableBody>)}
        </Table>
    )};