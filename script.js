      let submit=document.getElementById('submit');  // element stores in submit
       let addTask=document.getElementById('addTask');   //gets input for task and stored
        let todoList=document.getElementById('todoList'); //pending task 
        let donelist=document.getElementById('donelist'); //completed task

       let list=new Array();   //keep task texts
       
       submit.addEventListener('click', (event)=>{
           if(addTask.value !='')
           {
           list.push(addTask.value);                     //push task in array
          todoList.innerHTML +='<li id="'+(list.length-1)+'"><button onClick="complete('+(list.length-1)+')">'+addTask.value+'</button ></li>';
          addTask.value='';
           }
       });

       function complete (id){
               donelist.innerHTML+='<li>'+list[id]+'</li>';
               document.getElementById(id).style.display="none";
       }