
   let sumOfCost;
   let remainingMOney;
   let incomeInput;

document.getElementById("Calculate-button").addEventListener("click", function() {

    incomeInput = getInputElementById("income-input");
   const softwareInput = getInputElementById("Software-input");
   const courseInput = getInputElementById("course-input");
   const internetInput = getInputElementById("internet-input");
   // Total Cost
   sumOfCost = softwareInput + courseInput + internetInput;
   remainingMOney = incomeInput - sumOfCost;
   getTextFieldById("total-expenses").innerText = sumOfCost.toFixed(2);
   getTextFieldById("total-balance").innerText = remainingMOney.toFixed(2); 
   classListRemoveHidden("history-content");


   const createDiv = document.createElement("div");
   createDiv.innerHTML = `
   <p class="text-xs text-indigo-300 font-medium">${new Date().toLocaleDateString()}</p>
   <p class="text-xs">Total Balance: ${incomeInput.toFixed(2)}</p>
   <p class="text-xs">Total Cost: ${sumOfCost.toFixed(2)}</p>
   <p class="text-xs">Remain Money: ${remainingMOney.toFixed(2)}</p>
   
   `

   document.getElementById("expense-history-stored").appendChild(createDiv);
})



document.getElementById("saving-button").addEventListener("click", function(event){
   
  const savingInput = getInputElementById("saving-input");
  const saving = (remainingMOney * savingInput) / 100;
  const currentSaving = getTextFieldById("saving-amount").innerText = saving.toFixed(2);
  const remainingBalance = remainingMOney - currentSaving;
  getTextFieldById("remaining-balance").innerText = remainingBalance.toFixed(2); 
})




document.getElementById("assistant-button").addEventListener("click", function (){
   tabSwitch("Assistant");
})
 document.getElementById("history-button").addEventListener("click", function (){
   tabSwitch("History");

})


