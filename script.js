

//creating a close button and append it to each list item
var listItem = document.getElementsByTagName("LI");
var i;
for(i = 0;i < listItem.length; i++){
    var closeBtn = document.createElement("SPAN");
    var txt = document.createTextNode("Delete");
    closeBtn.className = "close"; 
    closeBtn.appendChild(txt);
    listItem[i].appendChild(closeBtn);
}
var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++){
    
    close[i].addEventListener("click",()=>{
        var div = this.parentElement;
        div.style.display = "none";
    });
}
// add a checked symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener("click",function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle("checked");
    }
},false);

function addTodoItem(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("todo-input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ""){
        alert("The input can not be EMPTY!!");
    } else{
        document.getElementById("todo-list").appendChild(li);
    }
    document.getElementById("todo-input").value = "";
    var closeBtn= document.createElement("SPAN");
    var txt = document.createTextNode("Delete");
    closeBtn.className ="close";
    closeBtn.appendChild(txt);
    li.appendChild(closeBtn);
    for(i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}






