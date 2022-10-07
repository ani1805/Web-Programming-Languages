window.onload = function() {

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input element 
    // they are initially hidden
    
    //username
    var span1 = document.createElement("span");
    var username = document.getElementById("username");
    username.parentNode.appendChild(span1);
    span1.style.display = "none"; //hide the span element

    // validation condition for all the three input elements
    var rest_email=/^([a-zA-Z0-9_\.\-])+\@([a-zA-Z0-9\-])+\.+([a-zA-Z0-9]{2,4})+$/;
    var rest_pass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*+])[A-Za-z\d@$!%*?&]{6,}$/;
    var rest_username=/^[a-zA-Z_0-9]+$/;

    //username validation
    const username_validation=()=> 
    {
          if(username.value)
          {
            if(rest_username.test(username.value))
            {
                span1.className="ok";
                span1.textContent="OK";
            }
            else
            {
                span1.className="error";
                span1.textContent="Error";
            }
            span1.style.display="block";
          }
    }

    username.onfocus = function()
    {
        span1.style.display="block";
        span1.className="info";
        span1.textContent="username can contain only alphanumeric characters i.e. (A-Z or a-z or 0-9)";
    }

    username.onblur = function()
    {
        span1.style.display="none";
        username_validation();
    }

    //email
    var email=document.getElementById("email");
    var span2=document.createElement("span");
    email.parentNode.appendChild(span2);
    span2.style.display="none";
    //email validation
    const email_validation=()=> 
    {
        if(email.value)
        {
            if(rest_email.test(email.value))
            {
                span2.className="ok";
                span2.textContent="OK";
            }
            else
            {
                span2.className="error";
                span2.textContent="Error";
            }
            span2.style.display="block";
        }
    }

    email.onfocus=function()
    {
        span2.textContent="Please provide valid email address. Example: abc@def.xyz";
        span2.className="info";
        span2.style.display="block";
    }
    email.onblur=function()
    {
        span2.style.display="none";
        email_validation();
    }

    //password
    var password=document.getElementById("password");
    var span3=document.createElement("span");
    password.parentNode.appendChild(span3);
    span3.style.display="none";
    //password validation
    const pass_validation=()=>
    {
        if(password.value)
        {
            if(rest_pass.test(password.value))
            {
                span3.className="ok";
                span3.textContent="OK";
            }
            else
            {
                span3.className="error";
                span3.textContent="Error";
            }
            span3.style.display="block";
        }
    }

    password.onfocus=function()
    {
        span3.textContent="Password should be at least six characters long";
        span3.className="info";
        span3.style.display="block";
    }
    password.onblur=function()
    {
        span3.style.display="none";
        pass_validation();
    }
    
   
}
