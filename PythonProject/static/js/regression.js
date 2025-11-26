console.log("reg.js loaded");

let anal_btn;
let elements;
let timegap;
let closeBtn;

// coin 정보들 불러오기
async function get_coin_name() {
  elements = window.document.getElementById("coinname");
  timegap = document.getElementById("timegap");
  res_contain = document.getElementById("res_contain");
  closeBtn = document.getElementById("closeBtn");

  const conn = await fetch("/coin_name");
  const coinnames = await conn.json();
  let intHtml = "";
  for (let i = 0; i < coinnames.kor_name.length; i++) {
    intHtml += `<option ${i == 0 ? "selected" : ""} value= "${
      coinnames.eng_name[i]
    }">${coinnames.kor_name[i]}(${coinnames.eng_name[i]})
    </option>`;
  }
  elements.innerHTML = intHtml;
  anal_btn = document.getElementById("anal_btn");
  addEvent();
}

function addEvent() {
  closeBtn.addEventListener("click", function () {
    res_contain.style.display = "none";
  });

  anal_btn.addEventListener("click", async function () {
    const coinname = elements.value;
    const timegaps = timegap.value;
    const padding = await fetch("/user_data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ coinname, timegaps }),
    }).catch(() => {
      console.error("Error fetching data:");
    });

    if (padding) {
      const info_data = await padding.json();
      console.log("info data:", info_data);

      let inHtml = "";
      let today_date = new Date();
      today_date.setDate(today_date.getDate() + 1);
      today_date_str = today_date.toLocaleString("ko-kr");
      let ghtml = `

    <div id="graph_section">
        <h2>모델 성능 그래프</h2>
        <div id ="graph_div">
        <img src="/static/${info_data["graph"][0]} ">
        <img src="/static/${info_data["graph"][1]} ">
        <div>
    </div>
      <h2>모델 성능 지표</h2>
      <p>현재가 오차(${(info_data["err_rate"]["cur"] * 100).toFixed(2)} %)</p>
      <p>최고가 오차(${(info_data["err_rate"]["high"] * 100).toFixed(2)} %)</p>
      <p>최저가 오차(${(info_data["err_rate"]["low"] * 100).toFixed(2)} %)</p>

    `;
      // <img style ='witdth:13rem' src="/static/${info_data["graph"][2]} ">
      document.getElementById("anal_data").innerHTML = ghtml;

      for (let data of info_data["ypred"]) {
        inHtml += `<div style='border:2px solid darkgray padding:0.5rem'>
        ${today_date_str} :<br>
        <h2>예측 가격</h2>
        <p style = 'padding:0.5rem; color:green'> 현재가 : ${data[0]}</p>
        <p style = 'padding:0.5rem; color:red'> 최고가 : ${data[1]}</p>
        <p style = 'padding:0.5rem ; color:blue'> 최저가 : ${data[2]}</p>
        </div>
        `;
        today_date.setDate(today_date.getDate() + 1);
        today_date_str = today_date.toLocaleString("ko-kr");
      }
      document.getElementById("result").innerHTML = inHtml;
      res_contain.style.display = "block";
    }
  });
}
