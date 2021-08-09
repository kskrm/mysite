$("#changer").click(function(){
                
    if($("#title").css("display") == "none"){
        $("#title").fadeIn("slow");
    }else{
         $("#title").fadeOut("slow");
     }
 })
            
$("#circle").click(function(){
    $("#circle").animate({
        width:"400px",
        height:"400px",
        marginLeft:"100px"
    },2000,function(){
        $("#circle").css("background-color","red");
    });
})
            
$(function(){
    $("#draggable").draggable();
});