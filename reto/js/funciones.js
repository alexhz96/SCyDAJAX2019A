$(function(){
    
    var config={
        func : function(resp){
            if (resp!=1){
                $.liga('mensaje','ban');
            }
            else{
                $("#divTabla").load('tabla.php');
                $("#algocual").load('selector.php');
            }
        }
    };
    
    $('form').liga('AJAX',config);
    });