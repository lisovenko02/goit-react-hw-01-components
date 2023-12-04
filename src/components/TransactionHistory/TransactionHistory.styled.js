import styled from 'styled-components';

export const Table = styled.table`
    background-color: #fff;
    width: 600px;
    text-align: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 50px;
    table-layout: fixed;
    border: 2px solid black;
`

export const TableHead = styled.thead`
    background-color: #0099cc;
    color: white;
    font-size: 20px;
`   

export const TableBody = styled.tbody`
   background-color: #fff;

  &:nth-child(even) {
    background-color: #dcdcdc;
  }
    td {
    text-align: center;
    padding: 10px;
    font-size: 16px;
  }

`
