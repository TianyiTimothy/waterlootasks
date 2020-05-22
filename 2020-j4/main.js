window.onload=()=>{


  let validate = ()=>{
    // get T & S
    let T = document.getElementById('text').value;
    let S = document.getElementById('string').value;

    let cyclicArr = getCyclicArrOf(T);

    // 遍历数组，判断是否包含
    for (text of cyclicArr){
      if(S.indexOf(text)!=-1){
        return true;
      }
    }
    return false;
  };
  
  let setOutput = ()=>{

    let output;
    if(validate()==true){
      output = 'yes';
    }else{
      output = 'no';
    }
    // set output
    let outputDOM = document.getElementById('output');
    outputDOM.innerText = output;
  };


  let getCyclicArrOf = (str)=>{
    // length could be loop times
    let len = str.length;
    let arr = [];
    arr.push(str);
    for(let i=0;i<len-1;i++){
      str = str.substring(1,len)+str.substring(0,1);
      arr.push(str);
    }
    return arr;
  }

  // add event listener on validation button
  document.getElementById('valBtn').addEventListener('click', setOutput);
}