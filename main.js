var input = document.getElementById('todo-input');
var addb = document.getElementById('addb');
var todos = document.getElementById('todos');
var dones = document.getElementById('dones');
var invalid = document.getElementById('invalid');
invalid.style.color = "red"
var borders = document.createElement('style')
borders.innerHTML = ".redb {border-color: red;}";
document.body.appendChild(borders);






addb.addEventListener('click', function(){

if (input.value == "") {
invalid.classList.remove("invalid-feedback");
input.classList.add("redb");
} 
else {
    invalid.classList.add("invalid-feedback");
    input.classList.remove("redb")

    var task = document.createElement("div");

    task.innerHTML = input.value;
    task.classList.add("task");
    var buttondiv = document.createElement("div")
    var del = document.createElement("button")
    var done = document.createElement("button")
    del.innerHTML = "Delete";
    done.innerHTML = "Move to Done";
    del.id ='del';
    done.id ='done';
    buttondiv.appendChild(del);
    buttondiv.appendChild(done);
    task.appendChild(buttondiv);
    todos.appendChild(task);
    

    var move = document.createElement("button")
    move.innerHTML = "Move Back";
    move.id ='move';
    


    del.addEventListener('click', function(e){

        if (e.target.id = 'del') {
            e.currentTarget.parentNode.parentNode.remove();
    
        }  
    });

    done.addEventListener('click', function(e){

        if (e.target.id = 'done') {
            dones.appendChild(e.currentTarget.parentNode.parentNode);
            done.replaceWith(move)
            
            }  
    });

    move.addEventListener('click', function(e){

        if (e.target.id = 'move') {
            todos.appendChild(e.currentTarget.parentNode.parentNode);
            move.replaceWith(done)
    
        }  
    });

    
    document.getElementById('todo-input').value = '';


}


    

    
    

   

})