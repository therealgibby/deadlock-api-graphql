export const queryTypeDefs = `
    type Query {
        hero(id: ID, class_name: String): Hero
        heroes(limit: Int, offset: Int): [Hero]
        item( id: ID, class_name: String): Item
        items(itemType: String, limit: Int, offset: Int): [Item]
    }
`;
