var listask=document.getElementById("listasks");



function callApi2(){

    listask.replaceChildren();
    $.get("https://immense-plateau-68535.herokuapp.com/list",function(data){
        console.log(data)
    for (let i = 0; i < data.data.length; i++) {
     var task = document.createElement("div");
        task.classList.add("list")
        task.innerHTML=data.data[i];
        task.appendChild(document.createElement("hr"))
        console.log(data.data[i])
        listask.appendChild(task)
    }

    });

}

function addTask(){
    listask.replaceChildren();
    let task=document.getElementById("task-item").value;

    $.post("https://immense-plateau-68535.herokuapp.com/add",
    {
        todoitem: task+ "- Cristian"
    },
    function(data){
        console.log(data)
        callApi2();
    });
    
}
