import { useState } from "react";
import "./index.css";

const options = [
  { title: "Nothing special (0%)", id: 0 },
  { title: "It was okay (5%)", id: 5 },
  { title: "It was good (10%)", id: 10 },
  { title: "Absolutely amazing (20%)", id: 20 },
];

export default function App() {
  const [amount, setAmount] = useState(0);
  const [curTip, setCurTip] = useState(0);
  const [curFriendTip, setCurFriendTip] = useState(0);

  let tipTotal = (curTip + curFriendTip) / 100;

  console.log(tipTotal);

  function handleCurFriendTip(e) {
    setCurFriendTip(Number(e.target.value));
  }

  function handleCurTip(e) {
    setCurTip(Number(e.target.value));
  }

  return (
    <div className="container">
      <BillAmount amount={amount} onAmount={setAmount} />
      <TipCalcMe onCurTip={handleCurTip} curTip={curTip} />
      <TipCalcFriend
        onCurFriendTip={handleCurFriendTip}
        curFriendTip={curFriendTip}
      />
      <Output
        amount={amount}
        onAmount={setAmount}
        curTip={curTip}
        setCurTip={setCurTip}
        setCurFriendTip={setCurFriendTip}
        tipTotal={tipTotal}
      />
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

function TipCalcMe({ onCurTip, curTip }) {
  return (
    <div className="tip-con">
      <p>How did you like the service ?</p>
      <select value={curTip} onChange={onCurTip}>
        <Options />
      </select>
    </div>
  );
}

function TipCalcFriend({ curFriendTip, onCurFriendTip }) {
  return (
    <div className="tip-con">
      <p>How did your friend like the service ?</p>
      <select value={curFriendTip} onChange={onCurFriendTip}>
        <Options />
      </select>
    </div>
  );
}

function Options() {
  return options.map((opt) => <option value={opt.id}>{opt.title}</option>);
}

function Output({ amount, onAmount, setCurTip, tipTotal, setCurFriendTip }) {
  function BtnReset() {
    onAmount(0);
    setCurFriendTip("");
    setCurTip("");
  }

  return (
    <div>
      <h3>{`You pay ${amount + amount * tipTotal}€ (${amount}€ + ${
        amount * tipTotal
      }€)  `}</h3>
      <button onClick={BtnReset}>Reset</button>
    </div>
  );
}
