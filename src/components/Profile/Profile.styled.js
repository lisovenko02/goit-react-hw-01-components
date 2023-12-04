import styled from 'styled-components';

export const Card = styled.div`
    width: 600px;
    margin: auto;
    margin-bottom: 50px;
    text-align: center;

    border-radius: 8px;
    box-shadow: 2px;
        
`
export const Description = styled.div`
    background-color: aquamarine;
    padding: 50px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border: 3px solid black;
    border-bottom: none;
`
export const Avatar = styled.img`
    width: 200px;
    border-radius: 50%;
    border: 5px solid green;
    padding: 10px;
`
export const UserName = styled.p`
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 20px;
`
export const Text = styled.p`
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 36px;
    color: rgba(149, 137, 137, 0.803);
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
`

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border: 3px solid black;
    background-color: gray;
`
export const UserInformation = styled.span`
    font-weight: ${props => {
        return props.fontSize;
    }}
`

export const ListItems = styled.li`
    display: flex;
    flex-direction: column;
    
    border-color: black;
    padding: 5px;
`
