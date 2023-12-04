import { Avatar, FriendName, Span, ListItems } from "./FriendListItem.styled"

export const CardGenerate = ({informationCard: { isOnline, avatar, name }}) => {
    return (
            <ListItems >
            <Span color={isOnline ? "green"  : "red"}>*</Span>
            <Avatar src={avatar} alt="User avatar"></Avatar>
            <FriendName>{name}</FriendName>
            </ListItems>
    );
};
