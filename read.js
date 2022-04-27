<script>
      function  read(){
        let txt = document.querySelector('#id').value;
        let info = document.querySelector('#result');
        if (txt === ""){
        info.innerHTML = "<span style='color:red'>Please enter id to read!</span>";
         }else{
        
        function onFailure(error){
          info.innerHTML = "<span style='color:red'>"+error+"</span>";;
        };
        
        function onSuccess(response){
          info.innerHTML = "<span style='color:green'>"+response[0]+"</span>";;
          document.getElementById('name').value = response[1];
          document.getElementById('eid').value = response[2];
          document.getElementById('selected').value = response[3];
          document.getElementById('date').value = response[4];
          document.getElementById('note').value = response[5];
        };
        info.innerHTML = "Reading detail...";
        google.script.run.withFailureHandler(onFailure)
                         .withSuccessHandler(onSuccess)
                         .readId(txt);}


      };
    </script>
