# Deadlock GraphQL API

This API was built using the [public Deadlock API](https://deadlock-api.com/).

## Environment Variables

```
PORT={Port to host on}
HERO_URL={The public Deadlock API endpoint for all heroes}
ITEM_URL={The public Deadlock API endpoint for all items}
```

## Example Queries

Heroes and 4 Abilities query:

```graphql
query {
	heroes {
		id
		name
		items {
			signature1 {
				name
			}
			signature2 {
				name
			}
			signature3 {
				name
			}
			signature4 {
				name
			}
		}
	}
}
```

Hero query (Infernus):

```graphql
query {
	hero(id: "1") {
		id
		name
		description {
			lore
		}
	}
}
```

Items query:

```graphql
query {
	items(itemType: "ability") {
		id
		name
		image_webp
	}
}
```

### itemType includes:

-   "weapon"
-   "ability"
-   "upgrade"

Item query:

```graphql
query {
	item(id: "2976789773") {
		id
		name
	}
}
```
