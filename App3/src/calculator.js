import React from "react";
export function Calculator() {
  const n1 = 20;
  const n2 = 4;
  const calculate = (op) => {
    let c = `${n1} ${op} ${n2}`;
    let r = eval(c);
    alert(`${c} = ${r}`);
  };
  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <span>{}</span>&nbsp;
      <button onClick={() => calculate("+")}>+</button>&nbsp;
      <button onClick={() => calculate("-")}>-</button>&nbsp;
      <button onClick={() => calculate("*")}>*</button>&nbsp;
      <button onClick={() => calculate("/")}>/</button>&nbsp;
      <span>{}</span>
    </div>
  );
}
