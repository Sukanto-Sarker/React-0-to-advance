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
