import { CardGenerate } from "components/FriendListItem/FriendListItem";
import { List } from "./FriendList.styled";

export const FriendList = ({friends})=> {
    return (
        <List>
            {friends.map((friend) => 
                    <CardGenerate key={friend.id} informationCard={friend} />
                )}
        </List>
    )
};