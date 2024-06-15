//finding elements
const saveIndexElm=document.querySelector("#save_index")
const inputToDoELm = document.querySelector("#input_todo");
let inputValue =null;
const addToDoButton = document.querySelector("#add_todo_button")
const massegeElm = document.querySelector(".massege")
const listElm = document.querySelector(".list")
const deleteAllToDoElm = document.querySelector("#delete_alltodo_button")
const saveToDoElm = document.querySelector("#save_todo")




//addEventListener
addToDoButton.addEventListener("click",saveToDoList)
inputToDoELm.addEventListener("change",()=>{
    inputValue=inputToDoELm.value
})
deleteAllToDoElm.addEventListener("click",deleteAllToDo)
saveToDoElm.addEventListener("click",updateToDo)
listElm.addEventListener("click",()=>{
    inputToDoELm.focus()
})

//function

function saveToDoList(){
    if(inputValue){
        massegeElm.innerText=""
        let checkLocalStorage = localStorage.getItem("allToDolist")
        let toDoList =[];
        if(checkLocalStorage){
            toDoList = JSON.parse(checkLocalStorage);
            toDoList.push(inputValue);
            localStorage.setItem("allToDolist",JSON.stringify(toDoList))
            inputToDoELm.value=""
            inputValue=null;
            showUi()
        }else{
            toDoList.push(inputValue);
            localStorage.setItem("allToDolist",JSON.stringify(toDoList)) 
            inputToDoELm.value=""
            inputValue=null;
            showUi()
        }
    }else{
        massegeElm.innerText="this field is requerid"
    }
}

function showUi(){
    let checkLocalStorage = JSON.parse(localStorage.getItem("allToDolist"))
    if(checkLocalStorage){
        let toDoList=checkLocalStorage;
        item = "";
        toDoList.map((list,index)=>{
            item +=`<li><span class="index_task">${index}</span><span class="task-name">${list}</span><button type="button" class="edit_task" onclick="editTask(${index})"><i class="fas fa-edit"></i>edit</button><button type="button" class="delete-task" onclick="deleteTask(${index})"><i class="fas fa-trash"></i>delete</button>  </li>`
        })
        listElm.innerHTML= item
    }
    if(checkLocalStorage.length === 0){
        massegeElm.innerText="no data"
    }
}
showUi()


function deleteTask(id){
    let checkLocalStorage = JSON.parse(localStorage.getItem("allToDolist"));
    let toDoList= checkLocalStorage;
    toDoList.splice(id,1)
    localStorage.setItem("allToDolist",JSON.stringify(toDoList)) 
    showUi()
    if(toDoList.length === 0){
        massegeElm.innerText="no data"
    }
}

function deleteAllToDo(){
    let toDoList=[]
    localStorage.setItem("allToDolist",JSON.stringify(toDoList)) 
    showUi()
}

function editTask(id){
    let checkLocalStorage = JSON.parse(localStorage.getItem("allToDolist"));
    let toDoList= checkLocalStorage;
    toDoList.map((list,index)=>{
       if(index === id){
        inputToDoELm.value=list
       }
    })
    addToDoButton.style.display="none"
    saveToDoElm.style.display="inline-block"
    saveIndexElm.value=id
    showUi()
}


function updateToDo(){
    let checkLocalStorage = JSON.parse(localStorage.getItem("allToDolist"));
    let toDoList= checkLocalStorage;
    toDoList.splice(saveIndexElm.value,1,inputToDoELm.value)
    localStorage.setItem("allToDolist",JSON.stringify(toDoList)) 
    addToDoButton.style.display="inline-block"
    saveToDoElm.style.display="none"
    showUi()
    inputToDoELm.value=""
    inputValue="";
}








// // finding elements


// const saveIndexElm = document.querySelector("#save_index");
// const inputToDoElm = document.querySelector("#input_todo");
// let inputValue = null;
// const addToDoButton = document.querySelector("#add_todo_button");
// const massegeElm = document.querySelector(".massege");
// const listElm = document.querySelector(".list");
// const deleteAllElm = document.querySelector("#delete_alltodo_button");
// const saveToDoElm = document.querySelector("#save_todo");





// //addEventLlistener 
// addToDoButton.addEventListener("click", saveToDo)
// inputToDoElm.addEventListener("change", () => {
//     inputValue = inputToDoElm.value;
// })

// deleteAllElm.addEventListener("click",deleteAllTOdO)
// saveToDoElm.addEventListener("click",updateToDo)




// //function
// function saveToDo() {
//     if (inputValue) {
//         massegeElm.innerText=""
//         let checkLocalStorage = localStorage.getItem("allTODoList");
//         let toDoList = [];
//         if(checkLocalStorage){
//             toDoList=JSON.parse(checkLocalStorage);
//             toDoList.push(inputValue);
//             localStorage.setItem("allTODoList",JSON.stringify(toDoList))
//             inputToDoElm.value=""
//             inputValue = null;
//             showUi();
//         }else{
//             toDoList.push(inputValue);
//             localStorage.setItem("allTODoList",JSON.stringify(toDoList))
//             inputToDoElm.value=""
//             inputValue = null;
//             showUi();
//         }
//     } else {
//         massegeElm.innerText = "this field is requerid"
//     }
// }

// function showUi(){
//     let checkLocalStorage =JSON.parse( localStorage.getItem("allTODoList"))
//     let item = ""
//     if(checkLocalStorage){
//         checkLocalStorage.map((list,index)=>{
//             item += ` <li><span class="task-number">${index}</span><span class="task-name">${list}</span><button type="button" class="edit_task" onclick="editTask(${index})"><i class="fas fa-edit"></i>Edit</button><button type="button" class="delete-task" onclick="deleteTask(${index})"><i class="fas fa-trash-alt"></i>Delete</button>
//             </li>`
//         })
//         listElm.innerHTML=item
//     }if(checkLocalStorage.length===0){
//         massegeElm.innerText = "no data"
//     }
// }
// showUi()

// function deleteTask(id){
//     let checkLocalStorage =JSON.parse( localStorage.getItem("allTODoList"));
//     let toDoList=checkLocalStorage;
//     toDoList.splice(id,1);
//     localStorage.setItem("allTODoList",JSON.stringify(toDoList))
//     showUi()
//     if(toDoList.length ===0){
//         massegeElm.innerText = "no data"
//     }
//  }

//  function deleteAllTOdO(){
//     let checkLocalStorage =JSON.parse( localStorage.getItem("allTODoList"));
//     let toDoList=[];
//     localStorage.setItem("allTODoList",JSON.stringify(toDoList))
//     showUi()
//  }

//  function editTask(id){
//     let checkLocalStorage =JSON.parse( localStorage.getItem("allTODoList"));
//     let toDoList=checkLocalStorage;
//     toDoList.map((list,index)=>{
//         if(index === id){
//             return inputToDoElm.value = list;
//         }
//     })
//     addToDoButton.style.display="none"
//     saveToDoElm.style.display="inline-block"
//     saveIndexElm.value = id;
//  }

//  function updateToDo(){
//     let checkLocalStorage =JSON.parse( localStorage.getItem("allTODoList"));
//     let toDoList=checkLocalStorage;
//     toDoList.splice(saveIndexElm.value,1,inputToDoElm.value)
//     localStorage.setItem("allTODoList",JSON.stringify(toDoList))
//     addToDoButton.style.display="inline-block"
//     saveToDoElm.style.display="none"
//     inputToDoElm.value="";
//     inputValue="";
//     showUi()
//  }
