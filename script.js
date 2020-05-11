$(document).ready(function(){
    var today = moment().format('dddd, MMMM D, YYYY');
    console.log(today);
    
    $("#currentDay").append(today);
    
    var presentHour =  moment().format('HH');
    console.log(presentHour);
    presentHour = presentHour.replace(/^[0]+/g,"");
    console.log(presentHour);
     
    updateCalendar();
    
    function updateCalendar(){
        $("#textarea-" + presentHour).addClass( "present" );
            for (var h=9; h < presentHour;  h++ ){
            console.log("updateCal past hour=" + h);
            $("#textarea-" + h).addClass("past");
        }
        
        var prenum = presentHour+1
        console.log("inside update" + prenum);
        presentHour = parseInt(presentHour, 10)
        var tempNum =presentHour+1;
        console.log("inside update after convert" +tempNum);
    
        for (var h= presentHour +1; h < 18; h++ ){
            console.log("updateCal future hour=" + h);
            $("#textarea-" + h).addClass("future");
        }
    
        Object.keys(localStorage).forEach(function(key){
            console.log(" ls task = " + localStorage.getItem(key));
            var task = localStorage.getItem(key);
            console.log("ls key" + key);
            $("#textarea-" + key).val(task);
        });
    }
    
    $("button").click(function(){
        console.log("clicked save button");
        var clickedBtn= $(this).attr("id")
        
        console.log("button id" + clickedBtn);
        console.log("#textarea-"+clickedBtn);
        var task = $("#textarea-" + clickedBtn).val();
        console.log(task);
        //save to local storage
        localStorage.setItem(clickedBtn,task);
    });
});