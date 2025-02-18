//to valid phone number
function phone()
    {
      var num=/([0-9])$/;
      let phone=document.getElementById('phonen');
      let len=phone.value.length;
      if(phone.value.trim()===""){
        setError(phone,"**mandatory field");
      }
      else if(!num.test(phone.value.trim())){
        setError(phone,'**only numbers');
      }
      else if(len<10)
        {
          setError(phone,'**check your number');
        }
        else{
            setSuccess(phone);
        }
    }

    //to valid email
    function valid_mail()  
    {  
       var model=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       var email=document.getElementById('email');
        if(email.value.trim()===""){
            setError(email,"**mandatory field");
        }
        else if (!model.test(email.value.trim())) 
          {  
            setError(email,"**please check your email");
          }  
          else
          {  
            setSuccess(email);
          }
    }
    
    //to valid password in register
    function pass_valid()  
    {  
       var pattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
       var pass=document.getElementById('pass');
        if(pass.value.trim()===""){
            setError(pass,"**mandatory field");
        }
        else if (!pass.value.match(pattern)) 
          {  
            setError(pass,"**field contain at least one numeric digit and a special character");
          }  
          else
          {  
            setSuccess(pass);
          }
    }

     //to valid password in login
     function valid_pass()  
     {  
        var pass=document.getElementById('pass');
        var len=pass.value.length;
         if(pass.value.trim()===""){
             setError(pass,"**mandatory field");
         }
         else if (len<8) 
           {  
             setError(pass,"**password should be more than 8 characters");
           }  
           else
           {  
             setSuccess(pass);
           }
     }
 

    //to valid username
    function valid_user()  
    {  
        var user=document.getElementById('uname');
        var len= user.value.length;
        if(user.value.trim()===""){
            setError(user,"**mandatory field");
        }
        else if (len<5) 
          {  
            setError(user,"**username should contain more than 5 letters");
          }  
          else if (len>15) 
          {  
            setError(user,"**username should contain less than 15 letters");
          }  
          else
          {  
            setSuccess(user);
          }
    }

    //to validate login
    function validate_login(){
      valid_pass();
      valid_user();
    }

    