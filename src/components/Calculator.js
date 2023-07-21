import { useState } from "react";
import Square from "./Square";
import math from "mathjs";

function Calculator() {
  const [calc, setCalc] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    let c = calc + e.target.innerHTML;
    setCalc(c);
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    let result = calc;
    if (result) {
      result = math.eval(result);
      result = math.format(result, { precision: 14 });
      result = String(result);
      console.log(result);
      setCalc(result);
    }
  };

  // const handleOperation = (e) => {
  //   e.preventDefault();
  //   if (n1.current === "") {
  //     n1.current = calc;
  //     setCalc("");
  //   } else if (n2.current === "") {
  //     op.current = true;
  //     n2.current = calc;
  //     handleCalculate();
  //     if (op.current) {
  //       setCalc("");
  //       op.current = false;
  //     }
  //   }
  //   os.current = e.target.innerHTML;
  // };

  const handleClear = (e) => {
    e.preventDefault();
    setCalc("");
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td colSpan="4">
              <input type="text" value={calc} readOnly></input>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <Square id={"C"} onClick={handleClear} />
            </td>
            <td>
              <Square id={"%"} onClick={handleClick} />
            </td>
            <td>
              <Square id={"/"} onClick={handleClick} />
            </td>
          </tr>
          <tr>
            <td>
              <Square id={7} onClick={handleClick} />
            </td>
            <td>
              <Square id={8} onClick={handleClick} />
            </td>
            <td>
              <Square id={9} onClick={handleClick} />
            </td>
            <td>
              <Square id={"*"} onClick={handleClick} />
            </td>
          </tr>
          <tr>
            <td>
              <Square id={4} onClick={handleClick} />
            </td>
            <td>
              <Square id={5} onClick={handleClick} />
            </td>
            <td>
              <Square id={6} onClick={handleClick} />
            </td>
            <td>
              <Square id={"+"} onClick={handleClick} />
            </td>
          </tr>
          <tr>
            <td>
              <Square id={1} onClick={handleClick} />
            </td>
            <td>
              <Square id={2} onClick={handleClick} />
            </td>
            <td>
              <Square id={3} onClick={handleClick} />
            </td>
            <td>
              <Square id={"-"} onClick={handleClick} />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <Square id={0} onClick={handleClick} />
            </td>
            <td>
              <Square id={"."} onClick={handleClick} />
            </td>
            <td>
              <Square id={"="} onClick={handleCalculate} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Calculator;