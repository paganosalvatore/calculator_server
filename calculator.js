/*document.addEventListener('DOMContentLoaded', function () {
    
    const display = document.getElementById('type');
    let buttons = document.querySelectorAll(".button");
    let vett = "";
    let result = "";
    let flag = 0;
    let last;
    buttons.forEach( button => {
        button.addEventListener("click", e=>{
            
            let target = e.target;                  
            if(target.id == "type"){
                vett = "";
            }else if(target.id == "canc"){ //canc
                    document.getElementById("type").innerHTML= "type number or operator";
                    vett = "";

            } else if( target.id == "ce"){//ce
                    vett = vett.slice(0,vett.length-1);
                    document.getElementById("type").innerHTML = vett;

            } else if(target.id == "="){//risultato
                    //FARE LA FETCH QUI
                    const serverUrl= "https://localhost:3333/compito_calc?display=" + encodeURIComponent(vett);

                    fetch(serverUrl)
                        .then(response => {
                            return response.json();
                        })
                        .then(message => {
                            console.log(message);
                            const result = message.result;
                            inputArea.value += `${button.innerText}${result}`;
                        })
                    // result = eval(vett);
                    // document.getElementById("type").innerHTML= result;
                    // vett = "";
            } else if(target.id == "+"){// primo char no +
                     if(vett == ""){
                        document.getElementById("type").innerHTML= "error";
                    } else if( vett != ""){
                        if(vett[vett.lenght-1] == "+"){
                        document.getElementById("type").innerHTML= "";
                       } else{
                        vett+=target.id; 
                        document.getElementById("type").innerHTML= vett; 
                    }                  
            } else if(target.id == "-"){// primo char no -
                    if(vett == ""){
                        document.getElementById("type").innerHTML= "error";
                        
                    } else if( vett != ""){
                        vett+=target.id;
                        document.getElementById("type").innerHTML= vett;
                    }
            } else if(target.id == "/"){// primo char no /
                    if( vett == ""){
                        document.getElementById("type").innerHTML= "error";
                        
                    } else if(vett != ""){
                        vett+=target.id;
                        document.getElementById("type").innerHTML= vett;
                    }
            } else if(target.id == "*"){// primo char no *
                    if( vett == ""){
                        document.getElementById("type").innerHTML= "error";
                        
                    } else if(vett != ""){
                        vett+=target.id;
                        document.getElementById("type").innerHTML= vett;
                    }
            } else if(target.id == "."){// primo char no .
                        if(vett == ""){
                            
                            document.getElementById("type").innerHTML= "error";
                            
                        } else if(vett != ""){
                            vett+=target.id;
                            document.getElementById("type").innerHTML= vett;
                        }
            }  else{
                    vett+=target.id;
                    document.getElementById("type").innerHTML= vett;
            }
        }})
        })
        })*/












        document.addEventListener('DOMContentLoaded', function () {
            const display = document.getElementById('type');
            let buttons = document.querySelectorAll(".button");
            let vett = "";
            let result = "";
            let flag = 0;
            buttons.forEach( button => {
                button.addEventListener("click", e=>{
                    let target = e.target;                  
                    if(target.id == "type"){
                        vett = "";
                    }else if(target.id == "canc"){ //canc
                            document.getElementById("type").innerHTML= "type number or operator";
                            vett = "";
                    } else if( target.id == "ce"){//ce
                            vett = vett.slice(0,vett.length-1);
                            document.getElementById("type").innerHTML = vett;
                    } else if(target.id == "="){//risultato
                        console.log(vett);
                        fetch(`http://localhost:3333/calc?display=${encodeURIComponent(vett)}`)
                        .then(response => {
                            return response.json();
                        })
                        .then(message => {
                            console.log(message);
                            const result = message.result;
                            document.getElementById("type").innerHTML=result;
                        })

                    } else if(target.id == "+"){// primo char no +
                             if(vett == ""){
                                document.getElementById("type").innerHTML= "error";
                                
                            } else if( vett != ""){
                                vett+=target.id;
                                document.getElementById("type").innerHTML= vett;
                            }                  
                    } else if(target.id == "-"){// primo char no -
                            if(vett == ""){
                                document.getElementById("type").innerHTML= "error";
                                
                            } else if( vett != ""){
                                vett+=target.id;
                                document.getElementById("type").innerHTML= vett;
                            }
                    } else if(target.id == "/"){// primo char no /
                            if( vett == ""){
                                document.getElementById("type").innerHTML= "error";
                                
                            } else if(vett != ""){
                                vett+=target.id;
                                document.getElementById("type").innerHTML= vett;
                            }
                    } else if(target.id == "*"){// primo char no *
                            if( vett == ""){
                                document.getElementById("type").innerHTML= "error";
                                
                            } else if(vett != ""){
                                vett+=target.id;
                                document.getElementById("type").innerHTML= vett;
                            }
                    } else if(target.id == "."){// primo char no .
                                if(vett == ""){
                                    document.getElementById("type").innerHTML= "error";
                                    
                                } else if(vett != ""){
                                    vett+=target.id;
                                    document.getElementById("type").innerHTML= vett;
                                }
                    }  else{
                            vett+=target.id;
                            document.getElementById("type").innerHTML= vett;
                    }
                })
                })
                })