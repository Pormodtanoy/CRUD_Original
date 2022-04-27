<script>
      function  submit(){
        let tx1 = document.querySelector('#name').value;
        let tx2 = document.querySelector('#eid').value;
        let tx3 = document.querySelector('#selected').value; 
        let tx4 = document.querySelector('#date').value;
        let tx5 = document.querySelector('#note').value;
        var sd = [tx1,tx2,tx3,tx4,tx5];   //sending data in arry
        let info = document.querySelector('#result');
        info.innerHTML = "Making new entry...";

        function onFailure(error){
          info.innerHTML ="<span style='color:red'>"+error+"</span>";
        };
        
        function onSuccess(response){
          info.innerHTML = "<span style='color:green'>"+response+"</span>";

        };
        google.script.run.withFailureHandler(onFailure)
                         .withSuccessHandler(onSuccess)
                         .newEntry(sd);

      };
    </script>
