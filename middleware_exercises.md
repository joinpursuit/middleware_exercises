# Middleware Exercises helps me

_Just like our 'Utility Server' project, create a new Express app and make base routes for each of these functionalities. Separate out each route into a separate module._

**Note:** Even though many of these functionalities could _technically_ be created without middleware, as our projects ramp up in complexity, it is **far** cleaner to implement your app's routing with middeware.

## `/animal` - Valid animal tester.

Create an array or an object and fill it with strings representing animal species (e.g. `'zebra'`, `'tiger'`, etc.).

When you query your `localhost` app at the route `/animal`, appending an animal's name (e.g. `localhost:3000/animal/lion`), you should return a boolean as a response - `true` or `false` depending on whether their second parameter (`lion`) can be found in your animal list. Your response should be in this format:

```js
{
  status: "success",
  message: true
}
```

Create a middleware function, `isAnimal`, to check if the requested animal is in the list and route the user's request accordingly. As your user doesn't need to update, delete, or add information, this can be a GET request.

## `/random` - Random number picker.

The user should be able to query `/random` with **two** additional request parameters: A floor and a ceiling, both integers. Create a route that accepts a GET request to pick a random number between the floor and the ceiling.

For example, the request at `localhost:3000/random?floor=10&ceil=23` should return a random number between 10 and 23. The response should look like this:

```js
{
  status: "success",
  range: [10, 23],
  randPick: 17
}
```

In order to help us pick a random number, we first need to assemble an array with each number in between the numbers in our range. Create a middleware function `generateSpread` which assembles an array of all integers between the two inputs. Once you've assembled this array, send your response with a random choice from it.

## `/queue` - Queue manager.

Create an array full of strings representing people's names in some kind of line (or _queue_). Account for three additional URL parameters: `/peek`, `/enqueue`, and `/dequeue`. These should access and modify the array in the **same ways** that you'd access and modify a queue. For our purposes, the **end** of the array will represent the **front** of the queue. For example, with the array `['xavier', 'michelle', 'corey', 'reed']`:

- `localhost:3000/queue/peek` would return the response:

```js
{
 status: "success",
 data: "reed"
}
```

- `localhost:3000/queue/enqueue?name=elle` would return the response:

```js
{
  status: "success",
  enqueued: "elle"
}
```

And should add `"elle"` to the queue at the end. Behind the scenes, the queue is:

```js
["elle", "xavier", "michelle", "corey", "reed"];
```

- `localhost:3000/queue/dequeue` would return the response:

```js
{
  status: "success",
  dequeued: "reed"
}
```

And should modify the array to be:

```js
["elle", "xavier", "michelle", "corey"];
```

Create a middleware function, `handleQueue`, that performs the appropriate action on the array depending on which URL parameters are queried.
