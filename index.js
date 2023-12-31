// rpg random password generator
function generatePassword(pwlen,bool_lower,bool_upper,bool_num,bool_sym){
    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVXXYZ";
    const numberChars="0123456789";
    const symbolChars="`~!@#$%^&*()-_=+[]\\;',./{}|:<>?\"";

    let allowedChars="";
    let password_generated="";

    // if true, execute first-right of `?`, else, execute second-right 
    allowedChars+= bool_lower ? lowercaseChars : "";

    allowedChars+= bool_upper ? uppercaseChars : "";

    allowedChars+= bool_num ? numberChars : "";

    allowedChars+= bool_sym ? symbolChars : "";

    if(allowedChars.length===0){
        return ``
    }
    for(let i=0;i<pwlen;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length)
        password_generated+=allowedChars[randomIndex];

    }
    return password_generated;

}

// return all `.main-content` elements, and execute the code within for each `.main-content` element.
document.querySelectorAll("main").forEach(i=>{

    // options. first because we have to call the function when the website first loads.
    // password length
    const passLenInput=i.querySelector(".password-len-input");
    let passLength=passLenInput.value;
    // include lower
    const includeLower=i.querySelector(".include-lower");
    let includeLowercase=includeLower.checked;
    // include upper
    const includeUpper=i.querySelector(".include-upper");
    let includeUppercase=includeUpper.checked;
    // include numbers
    const includeNums=i.querySelector(".include-numbs");
    let includeNumbers=includeNums.checked;
    // include symbols
    const includeSymbs=i.querySelector(".include-symbs");
    let includeSymbols=includeSymbs.checked;

    // password-block. 
    // inside `options` because I want to update the values in real-time when the user interacts with any of the options
    const inputField=i.querySelector(".password");
    
    const inputFieldColor=inputField.style.backgroundColor;

    const errorColor="rgb(255,51,51)";

    let activeColor=inputFieldColor;

    // call `generatePassword` with default parameters when website loads
    inputField.value=generatePassword(passLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);

    let passwordText=inputField.value;
    // on input passlength
    passLenInput.addEventListener("input",()=>{
        passLength=passLenInput.value;
        // call with updated values
        inputField.value=generatePassword(passLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);
        // update the content to be copied to clipboard.
        passwordText=inputField.value;

        // error when 0 boxes checked
        if (passwordText.length===0){
            activeColor = errorColor;
            inputField.value=`Password cannot generate 0 characters`;
            passwordText=inputField.value;
        }
        else{
            activeColor=inputFieldColor;
        }
        // ---

        // loading screen animation
        loadingLine.style.width="100%";
        
        setTimeout(()=>{
            loadingLine.style.width="0";
        },100);
        // ---

        inputField.style.backgroundColor=activeColor;
    });

    // on click lowercase
    includeLower.addEventListener("click",()=>{
        includeLowercase= !includeLowercase;

        inputField.value=generatePassword(passLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);

        passwordText=inputField.value;

        if (passwordText.length===0){
            activeColor = errorColor;
            inputField.value=`Password cannot generate 0 characters`;
            passwordText=inputField.value;
        }
        else{
            activeColor=inputFieldColor;
        }

        loadingLine.style.width="100%";
        
        setTimeout(()=>{
            loadingLine.style.width="0";
        },100);

        inputField.style.backgroundColor=activeColor;
    });
    
    // on click uppercase
    includeUpper.addEventListener("click",()=>{
        includeUppercase=!includeUppercase;

        inputField.value=generatePassword(passLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);

        passwordText=inputField.value;

        if (passwordText.length===0){
            activeColor = errorColor;
            inputField.value=`Password cannot generate 0 characters`;
            passwordText=inputField.value;
        }
        else{
            activeColor=inputFieldColor;
        }

        loadingLine.style.width="100%";
        
        setTimeout(()=>{
            loadingLine.style.width="0";
        },100);

        inputField.style.backgroundColor=activeColor;
    });

    // on click numbers
    includeNums.addEventListener("click",()=>{
        includeNumbers=!includeNumbers;

        inputField.value=generatePassword(passLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);

        passwordText=inputField.value;

        if (passwordText.length===0){
            activeColor = errorColor;
            inputField.value=`Password cannot generate 0 characters`;
            passwordText=inputField.value;
        }
        else{
            activeColor=inputFieldColor;
        }

        loadingLine.style.width="100%";
        
        setTimeout(()=>{
            loadingLine.style.width="0";
        },100);

        inputField.style.backgroundColor=activeColor;
    });

    // on click symbols
    includeSymbs.addEventListener("click",()=>{
        includeSymbols=!includeSymbols;

        inputField.value=generatePassword(passLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);
        
        passwordText=inputField.value;

        if (passwordText.length===0){
            activeColor = errorColor;
            inputField.value=`Password cannot generate 0 characters`;
            passwordText=inputField.value;
        }
        else{
            activeColor=inputFieldColor;
        }

        loadingLine.style.width="100%";
        
        setTimeout(()=>{
            loadingLine.style.width="0";
        },100);

        inputField.style.backgroundColor=activeColor;
    });


    // password-block
    // on click password text. select entire input field (equivalent to double-clicking)
    inputField.addEventListener("focus",()=>inputField.select());

    const copyButton=i.querySelector(".copy-button");

    const refreshButton=i.querySelector(".refresh-button");

    const loadingLine=i.querySelector(".loading-line");
   

    // on click clipboard 
    copyButton.addEventListener("click",()=>{
        
        inputField.select(); // for user feedback only. no real function.

        navigator.clipboard.writeText(passwordText); 

        inputField.value="Copied!";
        
        inputField.style.backgroundColor="#eee";

        setTimeout(()=>{
            inputField.value=passwordText;
            inputField.style.backgroundColor=activeColor;
        },2000);

   
    });

    // on click refresh
    refreshButton.addEventListener("click",()=>{
        // call function `generatePassword` with modified parameters
        inputField.value=generatePassword(passLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);

        passwordText=inputField.value;

        if (passwordText.length===0){
            activeColor = errorColor; 
            inputField.value=`Password cannot generate 0 characters`;
            passwordText=inputField.value;
        }
        else{
            activeColor=inputFieldColor;
        }
        
        // set color
        inputField.style.backgroundColor=activeColor;

        loadingLine.style.width="100%";
        
        setTimeout(()=>{
            loadingLine.style.width="0";
    
        },100);
    });
});

// adjust the element and the content depending on the width
function adjust(){
    const width=window.innerWidth || document.documentElement.clientWidth;
    const height=window.innerHeight || document.documentElement.clientHeight;
    const descLen=document.querySelector(".desc_len");
    const descLow=document.querySelector(".desc_low");
    const descUpp=document.querySelector(".desc_upp");
    const descNum=document.querySelector(".desc_num");
    const descSym=document.querySelector(".desc_sym");
    
    function smaller(arg1,arg2,arg3,arg4,arg5){
        arg1.innerHTML="<h3>Length</h3>";
        arg2.innerHTML="<h3>Lowercase</h3>";
        arg3.innerHTML="<h3>Uppercase</h3>";
        arg4.innerHTML="<h3>Numbers</h3>";
        arg5.innerHTML="<h3>Symbols</h3>";
    }
    function bigger(arg1,arg2,arg3,arg4,arg5){
        arg1.innerHTML="<h2>Password Length</h2>";
        arg2.innerHTML="<h2>Include Lowercase Characters</h2>";
        arg3.innerHTML="<h2>Include Uppercase Characters</h2>";
        arg4.innerHTML="<h2>Include Numbers</h2>";
        arg5.innerHTML="<h2>Include Symbols</h2>";
    }

    if (width<=800){
        smaller(descLen,descLow,descUpp,descNum,descSym);
    } else{
        bigger(descLen,descLow,descUpp,descNum,descSym);
    }

    if (height>=1000){
        bigger(descLen,descLow,descUpp,descNum,descSym);
    }


}

// event listener for loading the site, and resizing
window.addEventListener("load",adjust);
window.addEventListener("resize",adjust);
