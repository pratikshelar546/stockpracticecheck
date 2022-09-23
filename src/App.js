import "./styles.css";

function values() {
  var price = Number(inital.value);
  var stock = Number(stockPrice.value);
  var current = Number(currentPrice.value);
  profitCalculate(price, stock, current);
}
function profitCalculate(inital, stock, current) {
  if (current > inital) {
    //profit
    console.log("profit");
    let profit = (current - inital) * stock;
    let profitPercent = (profit / inital) * 100;
    ot.style.color = "green";
    ot.innerText =
      "yehhh! Your profit is " +
      profit +
      " And percentage of profit is " +
      profitPercent +
      "%";
  } else if (inital > current) {
    //loss
    console.log("loss");
    let loss = (inital - current) * stock;
    let lossPercentage = (loss / (inital * stock)) * 100;
    ot.style.color = "red";
    ot.innerText =
      "Your loss is " +
      loss +
      " and percentage of loss is " +
      lossPercentage +
      "%";
  } else {
    ot.style.color = "yellow";
    ot.innerText = "no pain no gain";
  }
}
export default function App() {
  function clickhandler() {
    const pro = values();
    return pro;
  }
  return (
    <div className="container">
      <div className="App">
        <h1>Stocks Practice</h1>

        <p>Enter initial price in ₹</p>
        <input
          type="number"
          id="inital"
          className="inital"
          placeholder="₹ Enter initial price "
        />
        <p>Enter number of stocks</p>
        <input
          type="number"
          id="stockPrice"
          className="stockPrice"
          placeholder="Enter number of stocks here"
        />
        <p>Enter current price in ₹</p>
        <input
          type="number"
          id="currentPrice"
          className="inital-price"
          placeholder="₹ Enter current price "
        />
        <input
          type="button"
          id="click"
          value="calculate"
          onClick={clickhandler}
        />
        <div id="ot" className="ot"></div>
      </div>
    </div>
  );
}
