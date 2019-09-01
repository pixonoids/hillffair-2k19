(function(){
    var fields = document.getElementsByTagName("input"), i;
  for(i = 0; i < fields.length; i++){
     window.document.reload= function(){
       fields.forEach(function(){
         if(this.value != ""){
           $(this).parent().find('.label').addClass('active');
         }
       });
     }
     if(fields[i].type.toLowerCase() === 'text'){
       this.value=" ";
       fields[i].defaultVal = fields[i].value;
       fields[i].addEventListener("focus", function(){
         if(this.value == this.defaultVal){
           this.value = "";
         }
       });
  
       fields[i].addEventListener("blur", function(){
         if(this.value.trim() == "")
           this.value = "";
       });
     }
   }
  
  function validate(form){
   var status = true,e;
   var emailpattern = new RegExp("[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,5}");
  
       name = form.name.value.trim(),
       team = form.team.value.trim(),
       email = form.email.value.trim(),
       phone = form.phone.value.trim(),
       college = form.college.value.trim(),
       city = form.city.value.trim(),
       event = "";
       
  
       if(name.length < 3){
         status = false;
         $(form.name).parent().addClass("empty").children(".invalid-message").html("Not Valid");
       }
       else{
         $(form.name).parent().addClass("empty").children(".invalid-message").html("");
       }
  
       if(team.length < 3){
         status = false;
         $(form.team).parent().addClass("empty").children(".invalid-message").html("Not Valid");
       }
       else{
         $(form.team).parent().addClass("empty").children(".invalid-message").html("");
       }
  
       if(!(emailpattern.test(email) && email.indexOf(" ") == -1)){
         $(form.email).parent().addClass("empty").children(".invalid-message").html("Not Valid");
         status = false;
       }
       else{
         $(form.email).parent().addClass("empty").children(".invalid-message").html("");
       }
  
       if(college.length < 2){
         status = false;
         $(form.college).parent().addClass("empty").children(".invalid-message").html("Not Valid");
       }
       else{
         $(form.college).parent().addClass("empty").children(".invalid-message").html("");
       }
  
       if(phone.length != 10){
         status = false;
         $(form.phone).parent().addClass("empty").children(".invalid-message").html("Not Valid");
       }
       else{
         $(form.phone).parent().addClass("empty").children(".invalid-message").html("");
       }
  
       if(city.length < 2){
         status = false;
         $(form.city).parent().addClass("empty").children(".invalid-message").html("Not Valid");
       }
       else{
         $(form.city).parent().addClass("empty").children(".invalid-message").html("");
       }
  
       var events = document.getElementById('eventsOpt');
       if(events.selectedIndex > 0){
          event = events.options[events.selectedIndex].value;
       }
       else{
         status = false;
         $(events).parent().addClass("empty").children(".invalid-message").html("Not Valid");
       }
  
       return status;
  };
  
       var regForm = document.getElementById('regForm');
       regForm.addEventListener('submit',function(e){
         var res = validate(this);
  
           console.log(res);
         if(res){
           var submitButton = document.getElementById('submitButton');
           submitButton.disabled = true;
           submitButton.value = "Registering..";
           var objectToSend = {
             "name" : name,
             "team" : team,
             "email" : email,
             "phone" : phone,
             "college" : college,
             "city" : city,
             "event" : event
           };
           console.log(objectToSend);
  
           var xmlhttp = new XMLHttpRequest();
           xmlhttp.open("POST", "/adduser");
           xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
           xmlhttp.send(JSON.stringify(objectToSend));
  
           console.log(JSON.stringify(objectToSend));
           xmlhttp.onreadystatechange = function(){
             if(xmlhttp.readyState == 4){
               console.log('xmlhttp.responseText');
               var stat = JSON.parse(xmlhttp.responseText);
               console.log(stat);
               if(stat == 500){
                 console.log("Huge Error");
               }
               else{
                 submitButton.disabled = false;
                 submitButton.value = "Registered";
                 $("#name").val("");
                 $("#team").val("");
                 $("#email").val("");
                 $("#phone").val("");
                 $("#college").val("");
                 $("#city").val(""); 
                 $('#eventOpt').selectedIndex=-1;
                //  $('.confirm').addClass('yes');
                //  $(".container-form .btn").click(function(){
                  // event.preventDefault();
                  $(".container").toggleClass("log-in");
                // });
                 setTimeout(function(){
                   window.location.reload(1);
                 }, 2000);            
               }
             }
           }
         }
         else{
           console.log("Error");
         }
   
   e.preventDefault();
   });
  })();