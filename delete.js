<script>
      function  delet(){
        let txt = document.querySelector('#id').value;
        let info = document.querySelector('#result');
        if (txt === ""){
        info.innerHTML = "<span style='color:red'>Please enter id to delete!</span>";
         }else{

        function onFailure(error){
          info.innerHTML ="<span style='color:red'>"+error+"</span>";
        };
        
        function onSuccess(response){
          info.innerHTML = "<span style='color:green'>"+response+"</span>";
        };

        info.innerHTML = "Deleting detail...";
        google.script.run.withFailureHandler(onFailure)
                         .withSuccessHandler(onSuccess)
                         .deleteId(txt);
      }
    };
    </script>
