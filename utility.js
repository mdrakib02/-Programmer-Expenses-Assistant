
// Functionality only for receive fresh id 

function getOnlyFreshId(id) {
    return document.getElementById(id);
}
//  functionality for receive id with their input values
function getInputElementById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
 }
// functionality for id with their text field
 function getTextFieldById(id){
    const textField = document.getElementById(id);
    return textField;
 }
// functionality for remove classlist hidden
 function classListRemoveHidden(id){
   const element = document.getElementById(id);
   return element.classList.remove("hidden");
 }
// functionality  for tab switch 
 function tabSwitch(tab){
  const historyButton =  getOnlyFreshId("history-button");
  const assistantButton =  getOnlyFreshId("assistant-button");
  const assistantSections = getOnlyFreshId("assistant-sections");
 const expenseHistory = getOnlyFreshId("expense-history")
  if(tab === "Assistant"){
    expenseHistory.classList.add("hidden");
    assistantSections.classList.remove("hidden");
    assistantButton.classList.add("text-white", "bg-gradient-to-r", "from-blue-500", "to-purple-600");
    historyButton.classList.remove("text-white", "bg-gradient-to-r", "from-blue-500", "to-purple-600");  
  

 }
 else if(tab === "History"){
    expenseHistory.classList.remove("hidden");
    assistantSections.classList.add("hidden");
    assistantButton.classList.remove("text-white", "bg-gradient-to-r", "from-blue-500", "to-purple-600");
    historyButton.classList.add("text-white", "bg-gradient-to-r", "from-blue-500", "to-purple-600");  

 }

}


 
 
 