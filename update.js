<script>
      function update(){
        let txt = document.querySelector('#id').value;
        let tx1 = document.querySelector('#name').value;
        let tx2 = document.querySelector('#eid').value;
        let tx3 = document.querySelector('#selected').value; 
        let tx4 = document.querySelector('#date').value;
        let tx5 = document.querySelector('#note').value;
        var sd = [txt,tx1,tx2,tx3,tx4,tx5];   //sending data in arry
        let info = document.querySelector('#result');
        if (txt === ""){
        info.innerHTML = "<span style='color:red'>Please enter id to update!</span>";
         }else{

        function onFailure(error){
          info.innerHTML = "<span style='color:red'>"+error+"</span>";;
        };
        
        function onSuccess(response){
          info.innerHTML = "<span style='color:green'>"+response+"</span>";;

        };
        info.innerHTML = "Updating detail...";
        google.script.run.withFailureHandler(onFailure)
                         .withSuccessHandler(onSuccess)
                         .updateId(sd);}

      };
    </script>
