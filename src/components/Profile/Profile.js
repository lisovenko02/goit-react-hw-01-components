import { Avatar, Card, Description, List, ListItems, Text, UserName, UserInformation } from "./Profile.styled"

export const Profile = ({user: {username, tag, location, avatar, stats: {followers, views, likes}}}) => 
{
    return (<Card>
        <Description>
        <Avatar src={avatar} alt="User avatar"></Avatar>
        <UserName>{username}</UserName>
        <Text>{tag}</Text>
        <Text>{location}</Text>
        </Description>
        <List>
            <ListItems>
                <UserInformation fontSize="bold">Followers</UserInformation>
                <UserInformation>{followers}</UserInformation>
            </ListItems>
            <ListItems>
                <UserInformation fontSize="bold">Views</UserInformation>
                <UserInformation>{views}</UserInformation>
            </ListItems>
            <ListItems>
                <UserInformation fontSize="bold">Likes</UserInformation>
                <UserInformation>{likes}</UserInformation>
            </ListItems>
        </List>
        </Card>)
}