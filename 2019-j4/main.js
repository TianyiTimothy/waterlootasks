window.onload=()=>{

  let originArr = [[1,2],[3,4]];
  let currArr = originArr;

  let funcH = (arr)=>{
    // arr[0][0] = [arr[1][0],arr[1][0]=arr[0][0]][0];
    arr = [arr[1],arr[0]];
    return arr;
  };
  // console.log(funcH(originArr));
  let funcV = (arr)=>{
    arr = [[arr[0][1],arr[0][0]],[arr[1][1],arr[1][0]]];
    return arr;};

  let getOutput = ()=>{
    let inputText = document.getElementById('text').value;
    for (c of inputText){
      if(c==="H"){
        currArr = funcH(currArr);
      }else if(c==="V"){
        currArr = funcV(currArr);
      }
    }
  }

  let displayOutput = (arr)=>{
    const spotADOM = document.getElementById('spotA');
    const spotBDOM = document.getElementById('spotB');
    const spotCDOM = document.getElementById('spotC');
    const spotDDOM = document.getElementById('spotD');
    spotADOM.innerText = arr[0][0];
    spotBDOM.innerText = arr[0][1];
    spotCDOM.innerText = arr[1][0];
    spotDDOM.innerText = arr[1][1];
  };

  let setOutput = ()=>{
    getOutput();
    displayOutput(currArr);
  };

  displayOutput(originArr);

  // add event listener on validation button
  document.getElementById('valBtn').addEventListener('click', setOutput);
}