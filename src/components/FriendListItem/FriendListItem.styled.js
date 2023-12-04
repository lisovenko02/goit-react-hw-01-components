import styled from 'styled-components';


export const ListItems = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    list-style: none;
    gap: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    padding: 15px;
    margin: 10px;
    background-color: #ffffff;
    border-radius: 8px;
    transition: box-shadow 0.3s ease;
`

export const Avatar = styled.img`
    width: 48px;
    border-radius: 4px;
    border: 2px solid rgb(128, 128, 128);
    padding: 15px;
`
export const Span = styled.span
    `color: ${props => {
            return props.color;
        }}`

export const FriendName = styled.p`
    font-family: 'Lato', Arial, sans-serif;
    font-style: 24px;
`