import React, { useState } from "react";

export default function Calculator() {
  const [copper, setCopper] = useState(0);
  const [silver, setSilver] = useState(0);
  const [electrum, setElectrum] = useState(0);
  const [gold, setGold] = useState(0);
  const [platinum, setPlatinum] = useState(0);

  const convert = 104.00

  const calculate = () => {
    return (
      (copper / 100 + silver / 10 + electrum / 2 + platinum * 10 + gold) *
      convert
    );
  };

  return (
    <div style={{paddingLeft: "2em"}}>
      <h1>D&D 5e Gold to Cash Converter</h1>
      <p>One Gold(GP) = ${convert.toFixed(2)}</p>

      <label for="copper">Copper(CP): </label>
      <input
        type="number"
        id="copper"
        name="copper"
        value={copper}
        onChange={(e) => setCopper(e.target.value)}
      />
      <br></br>
      <label for="silver">Silver(SP): </label>
      <input
        type="number"
        id="silver"
        name="silver"
        value={silver}
        onChange={(e) => setSilver(e.target.value)}
      />
      <br></br>
      <label for="electrum">Electrum(EP): </label>
      <input
        type="number"
        id="electrum"
        name="electrum"
        value={electrum}
        onChange={(e) => setElectrum(e.target.value)}
      />
      <br></br>
      <label for="gold">Gold(GP): </label>
      <input
        type="number"
        id="gold"
        name="gold"
        value={gold}
        onChange={(e) => setGold(e.target.value)}
      />
      <br></br>
      <label for="platinum">Platinum(PP): </label>
      <input
        type="number"
        id="platinum"
        name="platinum"
        value={platinum}
        onChange={(e) => setPlatinum(e.target.value)}
      />
      <p>{(copper+silver+electrum+gold+platinum) === 0 ? "0 Pieces " : ""}
        {copper > 0 ? copper + " CP " : ""}
        {silver > 0 ? silver + " SP " : ""}
        {electrum > 0 ? electrum + " EP " : ""}
        {gold > 0 ? gold + " GP " : ""}
        {platinum > 0 ? platinum + " PP" : ""} = ${calculate().toFixed(2)}
      </p>
    </div>
  );
}
