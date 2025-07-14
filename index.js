let list = document.querySelectorAll(".s-list select")
let From = document.getElementById("from_select")
let To = document.getElementById("To_select")
let Button = document.getElementById("button")
let Amount = document.getElementById("amount")
let ExchRate = document.getElementById("exchange-rate")
let img2 = document.getElementById("img2")
let v1;
for (let i = 0; i< list.length; i++) {
  let option;
  for(currency_code in country_list){
     option = `<option value="${currency_code}">${currency_code}</option>`
    list[i].insertAdjacentHTML("beforeend",option) 
  }
  list[i].addEventListener("change", e=>{
    loadFlag(e.target)
  })
    }
    function loadFlag(element){
      for(code in country_list){
        if(code==From.value){
          img1.src=`https://flagsapi.com/${country_list[code]}/flat/64.png`
        }
      }
      for(code in country_list){
        if(code==To.value){
          img2.src=`https://flagsapi.com/${country_list[code]}/flat/64.png`
        }
      }
    }



async function getCurrency(){
  let FromCurrency = await fetch(`https://v6.exchangerate-api.com/v6/f4f757be77806139331ea0a7/latest/${From.value}`);
  response= await FromCurrency.json()
  Exchange = response.conversion_rates[To.value]
  givenValue= Amount.value*Exchange
  ExchRate.innerHTML=Amount.value+ " "+ From.value+" = "+givenValue+" "+To.value;
}
Button.addEventListener("click", getCurrency)

// getCurrency()
