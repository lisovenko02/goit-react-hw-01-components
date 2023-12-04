import { Card, ItemsInformation, List, ListItems, Text } from "./Statistics.styled"

export const Statistics = ({data}) => {
    return (
        <Card>
            <Text>Upload stats</Text>
            <List>
            {data.map(arr => (
            <ListItems key={arr.id}>
            <ItemsInformation size="24px">{arr.label}</ItemsInformation>
            <ItemsInformation >{arr.percentage}%</ItemsInformation>
            </ListItems>
            ))}
            </List>
        </Card>
    )
}