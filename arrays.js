let userNumbers = [1,2,3,5,8,9,10];
// array.map is used to operate mathematical operation on each element present in an array

let newUserNumbers = userNumbers.map(function(n){
    return n * 2;
});
console.log(newUserNumbers);

let newArray = userNumbers.map(function(n){
    return n/2;
});
console.log(newArray);
// array.reduce method is used to find the total addtion of  all elements of an array.

let totalOfarray = newArray.reduce(function(acc,n){
    if(acc==0){
        return acc + 2;
    }
    else{
        return n/acc;
    }
});
console.log(totalOfarray);
let newConcatArray = newArray.concat(newUserNumbers);
console.log(newConcatArray);

selectElement = document.getElementById('countryOfBirth');
inputElement = document.getElementById('countryName');
inputElement.setAttribute("list",'listOfCountries');

let arrayList = ['India','Pakistan','China','SriLanka','Maladivs','Bangladesh'];

function createSelectOptions (){
    for(i=0;i<arrayList.length;i++){
        let optionElement = document.createElement('option');
        optionElement.text = arrayList[i];
        selectElement.add(optionElement);        
    }
}
createSelectOptions();

function createDatalist(){
    let dataListElement = document.createElement('datalist');
    dataListElement.setAttribute("id",'listOfCountries');
    for(gg=0;gg<arrayList.length;gg++){
        let option = document.createElement('option');
        option.value=arrayList[gg];
        dataListElement.appendChild(option);
    }
    inputElement.appendChild(dataListElement);
}
createDatalist();

selectElement.addEventListener('change',function(e){
    window.alert(e.target +"the value stored in it is "+e.target.value);
});

inputElement.addEventListener('input',function (event){
    console.log(event); 
    console.log(event.inputType);
    if(event.inputType == "insertReplacementText" || event.inputType == null ){
    window.alert(`${event.target.value}is the value stored in it.... `);
    }
});