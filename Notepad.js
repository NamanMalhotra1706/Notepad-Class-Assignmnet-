const textContent = document.querySelector("textarea");

const SaveButton = document.querySelector(".save");
const DeleteButton =  document.querySelector(".delete");

const Content ="";

SaveButton.addEventListener("click",function(){
    // console.log(textContent.value);
    localStorage.setItem(Content,textContent.value);
    alert("Text Save Successfully");
});

// Using Enter press
// SaveButton.addEventListener("keypress",function(event){
//     // console.log(textContent.value);
//     if(event.key==="Enter"){
//         event.preventDefault();
//     localStorage.setItem(Content,textContent.value);
//     }
// });

DeleteButton.addEventListener("click",function(){
    // console.log(textContent.value);
    localStorage.removeItem(Content);
    textContent.value="";
    alert("Text Delete Successfully");

});

textContent.value = localStorage.getItem(Content);