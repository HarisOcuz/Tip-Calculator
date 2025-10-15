import { useState } from "react";
import "./index.css";

// const faqs = [
//   {
//     title: "Where are these chairs assembled?",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
//   },
//   {
//     title: "How long do I have to return my chair?",
//     text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
//   },
//   {
//     title: "Do you ship to countries outside the EU?",
//     text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
//   },
// ];

// export default function App() {
//   return (
//     <div>
//       <Accordion data={faqs} />
//     </div>
//   );
// }

// function Accordion({ data }) {
//   const [curOpen, setCurOpen] = useState(null);

//   return (
//     <div className="accordion">
//       {data.map((el, i) => (
//         <AccordionItem
//           curOpen={curOpen}
//           onOpen={setCurOpen}
//           title={el.title}
//           num={i}
//           key={el.title}
//         >
//           {el.text}
//         </AccordionItem>
//       ))}
//     </div>
//   );
// }
// function AccordionItem({ num, title, curOpen, onOpen, children }) {
//   const isActive = num === curOpen;
//   function handleIsActive() {
//     onOpen(isActive ? null : num);
//     // if (curOpen === num) onOpen(null);
//   }

//   return (
//     <div className={`item ${isActive ? "open" : ""}`} onClick={handleIsActive}>
//       <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
//       <p className="text">{title}</p>
//       <p className="icon">{isActive ? "-" : "+"}</p>
//       {isActive ? <div className="content-box">{children}</div> : ""}
//     </div>
//   );
// }

const options = [
  "Nothing special (0%)",
  "It was good (10%)",
  "Absolutely amazing (20%)",
];

export default function App() {
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <BillAmount amount={amount} onAmount={setAmount} />
      <TipCalcMe />
      <TipCalcFriend />
      <Output amount={amount} onAmount={setAmount} />
    </div>
  );
}

function BillAmount({ amount, onAmount }) {
  function handleAmount(e) {
    onAmount(Number(e.target.value));
  }

  return (
    <div className="bill-con">
      <p>How much was the total bill ?</p>
      <input type="text" value={amount} onChange={handleAmount} />
    </div>
  );
}

function TipCalcMe() {
  return (
    <div className="tip-con">
      <p>How did you like the service ?</p>
      <select>
        <Options />
      </select>
    </div>
  );
}

function TipCalcFriend() {
  return (
    <div className="tip-con">
      <p>How did your friend like the service ?</p>
      <select>
        <Options />
      </select>
    </div>
  );
}

function Options() {
  return options.map((opt) => <option>{opt}</option>);
}

function Output({ amount, onAmount }) {
  function BtnReset() {
    onAmount(0);
  }

  return (
    <div>
      <h3>{`Your pay ${amount} (${amount} + TIP) `}</h3>
      <button onClick={BtnReset}>Reset</button>
    </div>
  );
}

// Total bil radi moze se unijeti iznos, drop-down opcije takodjer rade, value iz bill se prenosi skroz do outputa. I reset dugme radi, vraca bill na 0
