import styled from 'styled-components';

export const Card = styled.section`
    background-color: gray;
    width: 600px;
    text-align: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 50px;
    border-radius: 30px;
`
export const Text = styled.h2`
    padding: 60px;
  
`
export const List = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    gap: 0;
    list-style: none;
    margin: 0;
    padding: 0;
`

export const ListItems = styled.li`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: aquamarine;
    margin: 0;
    padding: 10px;
    border: 3px solid black;
`

export const ItemsInformation = styled.span`
    font-size: ${props => {
        return props.size;
    }}
`