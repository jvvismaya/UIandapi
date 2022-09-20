function validateform(){
    var name = document.getElementById("name").value
    var pwd= document.getElementById("pwd").value

    if(name==""){
        alert(' Username is required');
        
    }
    else if(name.length < 5){
        alert('Username should be atleast 6 characters')
    }
    else if(pwd==""){
        alert('Password is required');
    }
    else{
        alert('submitted sucessfully');
    }
    console.log('The Username is ' + name);
    console.log('The Password is ' + pwd);

 }