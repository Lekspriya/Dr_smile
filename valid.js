// to display district matched with state
var subjectObject = {
   "Andhra Pradesh":["Anantapur","Chittoor","East Godavari","Alluri Sitarama Raju","Anakapalli","Annamaya","Bapatla","Eluru","Guntur","Kadapa","Kakinada","Konaseema","Krishna","Kurnool","Manyam","N T Rama Rao"," Nandyal","Nellore","Palnadu","Prakasam","Sri Balaji","Sri Satya Sai","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari"],
    "Kerala": ["Kollam","Trivandrum","Ernakulam","Alappuzha","Malappuram"],
    "Tamilnadu": ["Chennai","Coimbatore","Madurai","Trichy","Cuddalore"]
  }
window.onload = function()
 {
    var subjectSel = document.getElementById("state");
    var topicSel = document.getElementById("district");
    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
    topicSel.length = 1;
    var z = subjectObject[this.value];
    for (var i = 0; i < z.length; i++) {
        topicSel.options[topicSel.options.length] = new Option(z[i], z[i]);
      }
    }
  }

// to validate firstname and lastname
function valname()
 {             
    var letters=/^[A-za-z]+$/;
    let name=document.getElementById('fname');

    if(name.value.trim()===""){
      setError(name,"**mandatory field");
    }
    else if(!letters.test(name.value.trim())){
      setError(name,'**only Alphabets')
    }
    else{
      setSuccess(name)
    }
 }

 function valname1()
 {             
    var letters=/^[A-za-z]+$/;
    let name=document.getElementById('lname');

    if(name.value.trim()===""){
      setError(name,"**mandatory field");
    }
    else if(!letters.test(name.value.trim())){
      setError(name,'**only Alphabets')
    }
    else{
      setSuccess(name)
    }
 }


// to confirm password
function checkpass(){
    let pass=document.getElementById("pass").value;
    let confirm_pass=document.getElementById("pass1");
    if(confirm_pass.value.trim()==='')
    {
      setError(confirm_pass,"**please confirm the password");          
     }  
    else if(!confirm_pass.value.match(pass))
      {  
         setError(confirm_pass,"**incorrect password");
      }
      else{
        setSuccess(confirm_pass);
      }
    }


//to print message
function setSuccess(input)
    {
        let submit=document.getElementById("check");
        const formcontrol=input.parentElement;
        const small=formcontrol.querySelector('small');
        small.className='smallhidden';
        small.innerText='';
        submit.disabled= false;
      }


function setError(input,message)
{
  let submit=document.getElementById("check");
  const formcontrol=input.parentElement;
  const small=formcontrol.querySelector('small');
  small.className='smallshown';
  small.innerText=message;
  submit.disabled= true;
}


//to submit
function validate(){
  valid_mail();
  pass_valid();
  valname();
  valname1();
  phone();
  valid_user();
}