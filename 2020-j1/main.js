window.onload=()=>{
  // HI CHRISTINE~

  let setOutput = (val)=>{
    document.getElementById("output").innerText = val;
  }

  let calHappiness = ()=>{
    // get inputs
    let s = document.getElementById('small').value === "" ? 0 : parseInt(document.getElementById('small').value);
    let m = document.getElementById('medium').value === "" ? 0 : parseInt(document.getElementById('medium').value);
    let l = document.getElementById('large').value === "" ? 0 : parseInt(document.getElementById('large').value);
    let happiness = 0;
    // calculate
    happiness = s+(2*m)+(3*l);

    if(happiness>10){
      setOutput("happy");
    }else if(happiness>=0){
      setOutput("sad");
    }else{
      // did not validate for single treats. too busy finding a job. hope that's fine.
      setOutput("REALLY REALLY SAD to live in a world with NEGATIVE TREATS");
    }
  }
  
  // add event listener on validation button
  document.getElementById('valBtn').addEventListener('click', calHappiness);
}