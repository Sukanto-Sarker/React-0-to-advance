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




using like api ar js file  then import it and then map it throw component