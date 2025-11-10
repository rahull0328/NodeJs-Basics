# Node.js Coding Practice

<br/>

## Q. What will happen when that code will be executed?

```js
var EventEmitter = require("events");

var eventObj = new EventEmitter();

eventObj.on("event1", function () {
  console.log("Event1 fired!");
  process.nextTick(function () {
    eventObj.emit("event2");
  });
});

eventObj.on("event2", function () {
  console.log("Event2 fired!");
  process.nextTick(function () {
    eventObj.emit("event3");
  });
});

eventObj.on("event3", function () {
  console.log("Event3 fired!");
  process.nextTick(function () {
    eventObj.emit("event1");
  });
});

eventObj.emit("event1");
```

<details><summary><b>Answer</b></summary>

```js
Event1 fired!
Event2 fired!
Event3 fired!
...
...
...
Event1 fired!
Event2 fired!
Event3 fired!
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Rewrite the code sample without try/catch block

```js
async function getData(req, res) {
  try {
    const a = await functionA();
    const b = await functionB();
    res.send("some result");
  } catch (error) {
    res.send(error.stack);
  }
}
```

<details><summary><b>Answer</b></summary>

```js
async function getData() {
  const a = await functionA().catch((error) => console.log(error));
  const b = await functionB().catch((error) => console.log(error));
  if (a && b) {
    console.log("some result");
  }
}
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>