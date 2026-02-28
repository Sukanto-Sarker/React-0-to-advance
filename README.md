নিচে AboutMe.jsx ফাইলের জন্য বাংলা নোট দেওয়া হলো—README বা নোট হিসেবে ব্যবহার করার জন্য একদম পারফেক্ট।

📝 নোট: AboutMe.jsx

AboutMe একটি reusable React functional component।
এই component টি props ব্যবহার করে বাইরে থেকে ডাটা গ্রহণ করে এবং সেই ডাটা অনুযায়ী UI দেখায়।

📌 উদ্দেশ্য

একই UI বারবার না লিখে ব্যবহার করা

আলাদা আলাদা ব্যক্তির তথ্য একই component দিয়ে দেখানো

React-এ props কিভাবে কাজ করে তা বোঝানো

🧩 ব্যবহৃত Props
Prop	টাইপ	কাজ
name	string	ব্যক্তির নাম
src	string	ছবির URL
exp	number	কাজের অভিজ্ঞতা (বছর)
tec	number	টেকনোলজির সংখ্যা
⚙️ কিভাবে কাজ করে

App.jsx থেকে props পাঠানো হয়

AboutMe component এ props destructuring করা হয়

props পরিবর্তন হলে UI নিজে থেকেই আপডেট হয়

📄 Component কোড
export default function AboutMe({ name, src, exp, tec }) {
  return (
    <div className="card">
      <img src={src} alt={name} width="200" />
      <h2>{name}</h2>
      <p>Experience: {exp} years</p>
      <p>Technologies: {tec}</p>
    </div>
  )
}

✅ গুরুত্বপূর্ণ বিষয়

AboutMe একটি stateless component

এটি শুধুমাত্র props এর উপর নির্ভরশীল

সহজে reuse করা যায়
 <AboutMe  name="SUKANTO SARKER"
    src="https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740&q=80" 
    exp={20}
    tec={9}
    />

    <AboutMe  name="Ridoy Ahmed"
    src="https://images.unsplash.com/photo-1615109398623-88346a601842?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww" 
    exp={30}
    tec={7}
    />

    <AboutMe  name="Robin Miah"
    src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg" 
    exp={50}
    tec={3}
    />

কোড পরিষ্কার ও scalable হয়

চাও তো আমি এটাকে:

একদম ছোট exam note

code comment আকারে

অথবা class-6/7 লেভেলে সহজ ভাষায়

লিখে দিতে পারি 😄
বললেই হলো 👌



📝 নোট: React Props + Array + map()

এই উদাহরণে আমরা দেখছি কীভাবে
একটি JS file (API এর মতো data source) থেকে ডাটা এনে
props ব্যবহার করে একই component বারবার render করা যায়।

📌 মূল ধারণা

ডাটা আলাদা JS file এ রাখা হয় (যেন API থেকে আসছে)

সেই ডাটা array of objects

map() ব্যবহার করে প্রতিটা object থেকে props পাঠানো হয়

Component শুধু props গ্রহণ করে UI দেখায়

# 📂 Data Source (API-like JS File)

এই ফাইলে আমরা component এর জন্য প্রয়োজনীয় ডাটা আলাদা করে রাখি।  
এটি দেখতে অনেকটা **API response** এর মতো, কিন্তু এখানে লোকালি JS file ব্যবহার করা হয়েছে।

---

## 📁 File Location
`src/info.js`

---

## 📦 Data Structure

ডাটা রাখা হয়েছে একটি **array of objects** আকারে।  
প্রতিটি object একজন ব্যক্তির তথ্য প্রকাশ করে।

```js
const peopleInfo = [
  {
    id: 1,
    name: "SUKANTO SARKER",
    src: "https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg",
    exp: 20,
    tec: 9,
  },
  {
    id: 2,
    name: "Ridoy Ahmed",
    src: "https://images.unsplash.com/photo-1615109398623-88346a601842",
    exp: 30,
    tec: 7,
  },
  {
    id: 3,
    name: "Robin Miah",
    src: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg",
    exp: 50,
    tec: 3,
  },
];

export default peopleInfo;

# 🔁 App.jsx & AboutMe.jsx – Props Flow Explanation

এখানে আমরা দেখছি কীভাবে  
একটি **array (API-like data)** থেকে ডাটা নিয়ে  
`map()` ব্যবহার করে **reusable component** render করা হয়।

👉 এখানে প্রতিটা object = একজন ব্যক্তির তথ্য  
👉 পুরো array = props এর source

---

## 📄 App.jsx

```jsx
import AboutMe from "./AboutMe";
import peopleInfo from "./info";

export default function App() {
  return (
    <>
      {peopleInfo.map((person) => (
        <AboutMe
          key={person.id}
          name={person.name}
          src={person.src}
          exp={person.exp}
          tec={person.tec}
        />
      ))}
    </>
  );
}


❓ এখানে কী হচ্ছে?

peopleInfo একটি array

map() প্রতিটা object ঘুরে দেখে

প্রতিবার AboutMe component call হয়

object এর value গুলো props হিসেবে পাঠানো হয়

key React এর জন্য mandatory

performance ভালো হয়

warning / error এড়ানো যায়



# 🧠 React `useReducer` Hook — বাংলা নোট

## 📌 `useReducer` কী?

`useReducer` হলো React-এর একটি Hook, যা **জটিল state management** করার জন্য ব্যবহার করা হয়।

এটি `useState` এর বিকল্প, বিশেষ করে যখন:

* একাধিক state একসাথে থাকে
* state update আগের state-এর উপর নির্ভর করে
* অনেক ধরনের action দিয়ে state পরিবর্তন করতে হয়

---

## 🧩 Basic Syntax

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

### এখানে —

* **reducer** → state কিভাবে পরিবর্তন হবে তা নির্ধারণ করে
* **initialState** → শুরুতে state-এর মান
* **state** → বর্তমান state
* **dispatch** → action পাঠানোর function

---

## ⚙️ Reducer Function Structure

```js
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "RESET":
      return { ...state, count: 0 };

    default:
      return state;
  }
}
```

---

## 🎯 Example Initial State

```js
const initialState = {
  count: 0,
};
```

---

## 🚀 Dispatch কিভাবে কাজ করে

```js
dispatch({ type: "INCREMENT" });
```

➡️ `dispatch` action পাঠায় → reducer সেই action অনুযায়ী state পরিবর্তন করে।

---

## 🧠 `useState` vs `useReducer`

| useState               | useReducer                  |
| ---------------------- | --------------------------- |
| ছোট state এর জন্য ভালো | জটিল state এর জন্য ভালো     |
| সহজ syntax             | structure বেশি পরিষ্কার     |
| কম logic               | বেশি logic handle করতে পারে |

---

## ⭐ Best Practice

✔ reducer ও initialState component-এর বাইরে লিখো
✔ সবসময় `default: return state` রাখো
✔ action type clear নাম দাও (INCREMENT, RESET ইত্যাদি)

---

## 🔥 এক লাইনে মনে রাখো

> **useReducer = state + action + reducer logic**


# 🧠 React `useReducer` Todo App — বাংলা নোট (README.md)

## 📌 Overview

এই উদাহরণে React-এর **`useReducer` Hook** ব্যবহার করে একটি **Todo App** তৈরি করা হয়েছে।

### ✨ Features

* ➕ নতুন Task যোগ করা
* ✏️ Task Edit করা
* ❌ Task Delete করা
* 🧠 `useReducer` দিয়ে state management

---

## 🧩 ব্যবহৃত Hooks

```js
useState()
useReducer()
```

### 🔹 `useState`

ব্যবহার করা হয়েছে:

* Input text (`text`)
* Edit mode (`editId`) handle করার জন্য

### 🔹 `useReducer`

ব্যবহার করা হয়েছে:

* Todo list (tasks array) manage করার জন্য

---

## ⚙️ Initial State

```js
const [tasks, dispatch] = useReducer(todoReducer, []);
```

➡️ শুরুতে tasks একটি খালি array।

---

## 🧠 Reducer Function

```js
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload);

    case "EDIT_TASK":
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.text }
          : task
      );

    default:
      return state;
  }
}
```

---

## 🚀 Actions ব্যাখ্যা

### ➕ ADD_TASK

নতুন task list-এ যোগ করে।

```js
dispatch({
  type: "ADD_TASK",
  payload: { id: Date.now(), text }
});
```

---

### ❌ DELETE_TASK

নির্দিষ্ট task remove করে।

```js
dispatch({
  type: "DELETE_TASK",
  payload: task.id
});
```

---

### ✏️ EDIT_TASK

নির্দিষ্ট task update করে।

```js
dispatch({
  type: "EDIT_TASK",
  payload: { id, text }
});
```

---

## 🧩 Submit Function Logic

```js
if (!text) return;
```

* Input খালি হলে কিছু করবে না

```js
if (editId) {
  // edit mode
} else {
  // add mode
}
```

* editId থাকলে → Edit
* না থাকলে → Add

---

## 🎯 UI Flow

1️⃣ User input এ task লিখে
2️⃣ Add button চাপলে task যোগ হয়
3️⃣ Edit চাপলে input এ text আসে
4️⃣ Save চাপলে task update হয়
5️⃣ Delete চাপলে task মুছে যায়

---

## ⭐ কেন এখানে `useReducer` ব্যবহার করা হয়েছে?

কারণ:

* একই state (tasks) এর উপর multiple actions আছে
* Logic এক জায়গায় cleanভাবে রাখা যায়
* Code scalable ও readable হয়

---

## 🔥 এক লাইনে মনে রাখো

> **useReducer = complex state + multiple actions + clean logic**
# React Context API — Counter Example (বাংলা নোট)

এই নোটে আমরা **React Context API** একটি সহজ Counter example দিয়ে বুঝবো।

---

## 📌 Context API কী?

React Context API ব্যবহার করা হয় **একই data অনেক component-এ share করার জন্য**, যাতে বারবার props পাঠাতে না হয় (prop drilling এড়ানোর জন্য)।

যখন ব্যবহার করা ভালো:

* অনেক component একই data ব্যবহার করে
* Global data দরকার (theme, user, auth, counter ইত্যাদি)

---

## 🧠 Context API এর ৩টি অংশ

1️⃣ **Context** → data রাখার container
2️⃣ **Provider** → data provide করে
3️⃣ **Consumer / Custom Hook** → data ব্যবহার করে

---

## 📁 Folder Structure

```
src/
 └── context/
      ├── CounterContext.jsx
      ├── useCounter.js
      ├── CounterDisplay.jsx
      └── CounterBtn.jsx
```

---

## 1️⃣ Context + Provider তৈরি

### `CounterContext.jsx`

```jsx
import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prev => prev + 1);
  }

  function decrement() {
    setCount(prev => prev - 1);
  }

  function reset() {
    setCount(0);
  }

  const name = "Counter App";

  return (
    <CounterContext.Provider
      value={{ count, increment, decrement, reset, name }}
    >
      {children}
    </CounterContext.Provider>
  );
}
```

### ✔ এখানে কী হচ্ছে?

* `createContext()` → global store তৈরি করছে
* `Provider` → data share করছে
* `value` → সব child component এই data পাবে

---

## 2️⃣ Custom Hook তৈরি (Best Practice)

### `useCounter.js`

```js
import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export function useCounter() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounter must be used inside CounterProvider");
  }

  return context;
}
```

### ✔ কেন custom hook ব্যবহার করি?

* কোড clean হয়
* বারবার `useContext` লিখতে হয় না
* reusable logic
* professional React pattern

---

## 3️⃣ Component এ Context ব্যবহার

### `CounterDisplay.jsx`

```jsx
import { useCounter } from "./useCounter";

export default function CounterDisplay() {
  const { count } = useCounter();

  return <h1>Counter value: {count}</h1>;
}
```

---

### `CounterBtn.jsx`

```jsx
import { useCounter } from "./useCounter";

export default function CounterBtn() {
  const { increment, decrement, reset } = useCounter();

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
```

---

## 4️⃣ App কে Provider দিয়ে wrap করা

### `main.jsx`

```jsx
import { createRoot } from "react-dom/client";
import App from "./App";
import { CounterProvider } from "./context/CounterContext";

createRoot(document.getElementById("root")).render(
  <CounterProvider>
    <App />
  </CounterProvider>
);
```

---

## 5️⃣ App Component

```jsx
import CounterDisplay from "./context/CounterDisplay";
import CounterBtn from "./context/CounterBtn";

export default function App() {
  return (
    <>
      <CounterDisplay />
      <CounterBtn />
    </>
  );
}
```

---

## 🔥 গুরুত্বপূর্ণ নিয়ম

### ✔ Context একবারই তৈরি করতে হবে

❌ ভুল:

```js
createContext() // অনেক ফাইলে
```

✔ সঠিক:

```js
createContext() // এক ফাইলে
```

---

### ✔ Provider ছাড়া hook ব্যবহার করা যাবে না

না হলে error আসবে:

```
useCounter must be used inside CounterProvider
```

---

### ✔ Custom Hook ব্যবহার করা ভালো

❌

```js
useContext(CounterContext)
```

✔

```js
useCounter()
```

---

## 🚀 Flow Diagram (সহজ ধারণা)

```
CounterProvider
        ↓
   Context Value
        ↓
   useCounter()
        ↓
 Components (Display / Buttons)
```

---

## ⭐ সংক্ষেপে

* Context API global data share করে
* Provider data দেয়
* Custom hook data নেয়
* prop drilling কমায়
* code clean ও scalable হয়

---

## 🎯 Final Idea

```
createContext → Provider → Custom Hook → Components
```

এটাই React Context API এর basic flow।


# React `useEffect` — বাংলা নোট (API Fetch Example)

এই নোটে আমরা **React useEffect Hook** বুঝবো একটি সহজ API fetch example দিয়ে।

---

## 📌 useEffect কী?

`useEffect` হলো React Hook যা ব্যবহার করা হয়:

* side effect handle করতে
* API call করতে
* data fetch করতে
* timer / event listener ব্যবহার করতে
* component load হলে কিছু run করাতে

সহজভাবে:

> Component render হওয়ার পরে কিছু কাজ করতে চাইলে → `useEffect`

---

## 🧠 Basic Syntax

```js
useEffect(() => {
  // code এখানে চলবে
}, []);
```

---

## ⭐ Second Parameter (Dependency Array)

| Syntax    | কখন run হবে                              |
| --------- | ---------------------------------------- |
| `[]`      | শুধু প্রথম render এ (component load হলে) |
| `[value]` | value change হলে                         |
| কিছু না   | প্রতিবার render এ                        |

---

## 🚀 Example — API Fetch (JSONPlaceholder)

আমরা free API ব্যবহার করছি:

```
https://jsonplaceholder.typicode.com/posts
```

---

## 🧩 Example Code

```jsx
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h2>Posts List</h2>

      {posts.slice(0, 5).map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
```

---

## 🔍 এখানে কী হচ্ছে?

### 1️⃣ State তৈরি

```js
const [posts, setPosts] = useState([]);
```

API থেকে data রাখার জন্য।

---

### 2️⃣ useEffect চালানো

```js
useEffect(() => {
  fetch(...)
}, []);
```

✔ Component load হলে একবার run হবে
✔ API call করবে

---

### 3️⃣ Data set করা

```js
setPosts(data);
```

API data state এ save হচ্ছে।

---

### 4️⃣ UI তে দেখানো

```js
posts.map(...)
```

Data screen এ render হচ্ছে।

---

## 🎯 কেন useEffect দরকার?

যদি useEffect না ব্যবহার করো:

```js
fetch(...)
```

❌ প্রতিবার render এ API call হবে
❌ infinite loop হতে পারে

useEffect এটা prevent করে।

---

## 🔥 Real Life Use Cases

* API fetch
* Login check
* Theme load
* LocalStorage read
* Timer / Interval
* Event listener

---

## ⚠️ Common Mistakes

### ❌ Mistake 1 — Dependency array ভুলে যাওয়া

```js
useEffect(() => {
  fetchData();
});
```

➡️ infinite render হতে পারে।

---

### ❌ Mistake 2 — State dependency ভুল দেওয়া

```js
useEffect(() => {
  fetchData();
}, [posts]); // ❌ endless loop হতে পারে
```

---

## ⭐ Best Practice

✔ API call → useEffect
✔ One-time fetch → `[]`
✔ Cleanup দরকার হলে return ব্যবহার

Example:

```js
useEffect(() => {
  const timer = setInterval(() => {
    console.log("running...");
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

---

## 🧠 E
# React `useMemo` Hook — বাংলা নোট (Counter Example)

এই নোটে আমরা **React `useMemo` Hook** বুঝবো একটি সহজ example দিয়ে।

---

## 📌 useMemo কী?

`useMemo` হলো React Hook যা ব্যবহার করা হয় **calculated value memory তে save (memoize)** করার জন্য।

সহজভাবে:

> একই calculation বারবার না করে আগের result ব্যবহার করা = `useMemo`

---

## 🧠 কেন useMemo ব্যবহার করি?

React component re-render হলে ভিতরের সব code আবার run হয়।

যদি heavy calculation থাকে, তাহলে:

❌ App slow হয়ে যেতে পারে
❌ অপ্রয়োজনীয় calculation বারবার হবে

`useMemo` এই সমস্যা solve করে।

---

## 🧩 Example Code

```jsx
import React from "react";
import { useState, useMemo } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("Calculation...........");
    return count * 2;
  }, [count]);

  return (
    <>
      <h1>UseMemo Hook</h1>
      <h2>Count: {count}</h2>
      <h2>Memoized Value: {result}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
```

---

## 🔍 এখানে কী হচ্ছে?

### 1️⃣ State তৈরি

```js
const [count, setCount] = useState(0);
```

Count value store করার জন্য।

---

### 2️⃣ useMemo ব্যবহার

```js
const result = useMemo(() => {
  return count * 2;
}, [count]);
```

✔ `count` change হলে calculation হবে
✔ না হলে আগের result ব্যবহার করবে

---

### 3️⃣ Dependency Array

```js
[count]
```

মানে:

* count change → useMemo run
* count change না হলে → run হবে না

---

## 🚀 Flow (সহজ ধারণা)

```
Component Render
        ↓
   useMemo check
        ↓
Dependency changed?
   ↓          ↓
 Yes         No
  ↓           ↓
Recalculate   Old value use
```

---

## ⭐ Console Output বুঝা

প্রথম render:

```
Calculation...........
```

Button click করলে:

```
Calculation...........
```

কারণ `count` change হচ্ছে।

---

## 🔥 useMemo এর মূল কাজ

* Expensive calculation optimize করা
* Performance improve করা
* Unnecessary re-calculation বন্ধ করা

---

## ⚠️ Common Mistakes

### ❌ Dependency array না দেওয়া

```js
useMemo(() => count * 2);
```

এটা ভুল — dependency না দিলে benefit পাওয়া যায় না।

---

### ❌ ছোট calculation এ useMemo ব্যবহার

```js
count * 2
```

এটা simple calculation — সবসময় useMemo দরকার নেই।

---

## 🧠 কখন useMemo ব্যবহার করবো?

✔ Large list filtering
✔ Sorting data
✔ Heavy calculation
✔ Data transformation
✔ Performance optimization

---

## 🔄 useMemo vs useCallback

| Hook          | কী save করে |
| ------------- | ----------- |
| `useMemo`     | Value       |
| `useCallback` | Function    |

---

## 🎯 Easy Rule

```
useMemo = value memory তে রাখে
```

---

## ⭐ Summary

* `useMemo` calculated value memoize করে
* dependency change হলে only run হয়
* performance improve করে
* unnecessary calculation বন্ধ করে

---

## 🧩 Final Idea

```
useMemo → Calculate once → Reuse result
```

এটাই React `useMemo` Hook এর মূল concept।
# React Custom Hook — বাংলা নোট (README.md)

এই নোটে আমরা **React Custom Hook** শিখবো সহজভাবে।
Example হিসেবে ব্যবহার করা হয়েছে:

* 🧮 Simple Counter Custom Hook
* 🌐 API Fetch Custom Hook

---

## 📌 Custom Hook কী?

Custom Hook হলো এমন একটি function যেখানে React Hook ব্যবহার করে **reusable logic** তৈরি করা হয়।

সহজভাবে:

> একই logic বারবার না লিখে এক জায়গায় লিখে reuse করা = Custom Hook

---

## 🧠 কেন Custom Hook ব্যবহার করি?

✔ Code clean থাকে
✔ Logic reusable হয়
✔ Component ছোট ও readable হয়
✔ Real project structure follow করা যায়

---

## ⭐ Rule (সবচেয়ে গুরুত্বপূর্ণ)

Custom Hook এর নাম সবসময়:

```js id="2ozf4p"
useSomething
```

Example:

```js id="e4n4dc"
useCounter
useFetch
useAuth
```

---

# 🧮 Example 1 — Counter Custom Hook

## 📁 `useCounter.js`

```js id="cb7n4q"
import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
```

---

## 📁 Component এ ব্যবহার

```jsx id="y1rsm8"
import { useCounter } from "./useCounter";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
```

---

## 🧠 Flow

```id="74du5e"
Component
   ↓
useCounter()
   ↓
State + Logic
   ↓
UI Update
```

---

# 🌐 Example 2 — API Fetch Custom Hook

## 📁 `useFetch.js`

```js id="tqun2i"
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const res = await fetch(url);
        const result = await res.json();

        setData(result);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}
```

---

## 📁 Component এ ব্যবহার

```jsx id="br6myf"
import { useFetch } from "./useFetch";

export default function Posts() {
  const { data, loading, error } =
    useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      {data.slice(0, 5).map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
}
```

---

## 🧠 Flow

```id="2i8vpk"
Component Load
      ↓
useFetch(url)
      ↓
API Call
      ↓
State Update
      ↓
UI Render
```

---

## 🔥 Biggest Advantage

একই hook দিয়ে যেকোনো API ব্যবহার করা যায়:

```js id="a2c0qo"
useFetch("https://api.example.com/users")
useFetch("https://api.example.com/posts")
```

---

## ⚠️ Common Mistakes

❌ Hook নাম `use` দিয়ে শুরু না করা
❌ Component এর বাইরে hook call করা
❌ Dependency array ভুল দেওয়া

---

## ⭐ Best Practice Structure

```id="7a8uwn"
src/
 ├── hooks/
 │     ├── useCounter.js
 │     └── useFetch.js
 └── components/
```

---

## 🎯 Summary

* Custom Hook = reusable logic
* UI component আলাদা থাকে
* Code clean হয়
* Real project এ widely used

---

## 🧩 Final Idea

```id="n23zze"
Custom Hook = Logic Reuse + Clean Code + Better Structure
```
