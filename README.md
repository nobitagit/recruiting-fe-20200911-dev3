I added a new folder called container inside the src folder.
In there, I introduced a new type of component. Container components are the most outer component of a route. They handle the data flow and inject the data into their child components via props. That way, we only have one component in a component tree that holds all the data, and we achieve a clear separation of concerns.

The components inside the components folder only receive data from there parents' components and never make an API call. That way, we can reuse them in many different use cases.
I changed the Inbox component according to this approach.

I refactored the Message component to a function component because of performance reasons.
The object structure from the /loan and /till routes is a bit different, but I didn't want to change the data because we maybe need to post the data back to the server in the future, and then we have a problem with data consistency.
So I created two new components: InfoTextLoan and InfoTextTill. They handle the different data types, and if the back-end introduces even more types, we can create new components and decide in the Message component, which case should apply for them.

The api.js handles all the API calls and currently only exposes one method, which returns all inbox messages. If we need other data structures in the future, then we can easily fetch and expose them in the required way.

Normally I would update to the newest React version and use Hooks if I have to refactor a component.

I'm not too fond of the approach with the ActionButton. I think a simple UI Element shouldn't receive the whole data structure; instead, this logic should be handled in the Inbox, and the string gets past as a prop. In the way the ActionButton is implemented, it is not reusable for other components in the project that don't have the same data structure.

In general, I would speak in a real-life scenario with the back-end team if the data structure differences are really necessary. And if they can provide me with only one endpoint for the inbox data. Currently, we handle a lot of unnecessary logic in the frontend that could be avoided.
