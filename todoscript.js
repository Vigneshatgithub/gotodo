$(document).ready(function(){
    
   var taskList=[]; 
    var store=localStorage.getItem("taskListSto");
   taskList=store != null ? JSON.parse(store) : [];
//    console.log("inside main");
//    console.log(taskList);
    display();

   
    

$('#inputTaskItem').on("enterKey",function(e){
   var userInput=$('#inputTaskItem').val();
  //  console.log("inside enter key event handler");
  //  console.log(userInput);
    addItem(userInput);
    $('#inputTaskItem').val("");
    
    
});
    function addItem(userInput)
    {   
       // console.log("inside add item");
        taskList.push({task:userInput, done:false});
        
        localStorage.setItem("taskListSto",JSON.stringify(taskList));
     //   console.log(taskList);
        display();
      
    }
    function display(){
       // console.log("inside display call");
       // $("#array-disp").html(taskList);
        $("#list-disp").empty();
     //   taskList.reverse();
        
        listlength= (taskList.length > 0) ? "Total " + taskList.length + " task(s)" : "No tasks :)";
        $("#list-total").text(listlength);
        
        $.each(taskList,function(index,value){
            var liid="elem"+index;
            
        var element='<li class="list-group-item" data-index="' + index + '" data-task="' + value.done + '" id="' + liid + '">' + value.task +  '</li>'; 
          
          //  console.log(value);
          //  $(element).appendTo("#list-disp");
            $("#list-disp").append(element);
        });
                  
    }
    
$('#inputTaskItem').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
        
    }
    
     
    
});

    
    
/*    
 $("#list-disp > li").click(function(){    
     //   var lid="#"+this.id;
     //   $(lid).toggleClass("list-bg");
     
    });
*/
    
    $("#clear-list").click(function(){
        taskList.length=0;
       localStorage.removeItem("taskListSto");
        display();
        console.log(taskList);
    });
    
    $("#list-disp").on("click","li",function(){    
        var lid="#"+this.id;
        
        //console.log(taskList[$(lid).attr("data-index")].done);
        if(taskList[$(lid).attr("data-index")].done==false)
        {
            taskList[$(lid).attr("data-index")].done=true;
            $(lid).attr("data-task","true");
        }
        else
        {
            taskList[$(lid).attr("data-index")].done=false;
            $(lid).attr("data-task","false");
        }
        /*
        taskList[$(lid).attr("data-index")].done=taskList[$(lid).attr("data-index")].done==false ? true : false;*/
        //console.log(taskList[$(lid).attr("data-index")].done);
        
        //$(lid).toggleClass("list-bg");
        
        localStorage.setItem("taskListSto",JSON.stringify(taskList));
     
    });
    
    });
   
   
