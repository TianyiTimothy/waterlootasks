window.onload = () => {

  // vars
  let originArr = [[1, 2], [3, 4]];
  let userInputTextDOM = document.getElementById('userInputText');
  let currArr;
  let userInputText;

  let init = ()=>{
    currArr = originArr;
    userInputText = '';
  }


  let funcH = (arr) => {
    // arr[0][0] = [arr[1][0],arr[1][0]=arr[0][0]][0];
    arr = [arr[1], arr[0]];
    return arr;
  };
  // console.log(funcH(originArr));
  let funcV = (arr) => {
    arr = [[arr[0][1], arr[0][0]], [arr[1][1], arr[1][0]]];
    return arr;
  };

  let getOutput = () => {
    let inputText = document.getElementById('text').value;
    if(inputText===''){
      inputText = userInputText===''?'HV':userInputText;
    }
    init();
    showUserInputText(inputText);
    for (c of inputText) {
      if (c === "H") {
        currArr = funcH(currArr);
      } else if (c === "V") {
        currArr = funcV(currArr);
      }
    }
  }

  let displayOutput = (arr) => {
    const spotADOM = document.getElementById('spotA');
    const spotBDOM = document.getElementById('spotB');
    const spotCDOM = document.getElementById('spotC');
    const spotDDOM = document.getElementById('spotD');
    spotADOM.innerText = arr[0][0];
    spotBDOM.innerText = arr[0][1];
    spotCDOM.innerText = arr[1][0];
    spotDDOM.innerText = arr[1][1];
  };

  let goClick = () => {
    getOutput();
    displayOutput(currArr);
  };

  init();
  displayOutput(originArr);

  // additional below
  let hClick = () => {
    currArr = funcH(currArr);
    displayOutput(currArr);
    showUserInputText('H');
  };
  let vClick = () => {
    currArr = funcV(currArr);
    displayOutput(currArr);
    showUserInputText('V');
  };
  let showUserInputText = (text)=>{
    userInputText += text;
    // show it in html.. really miss data binding stuff
    userInputTextDOM.innerHTML = userInputText;
  }


  // add event listener on validation button
  document.getElementById('goBtn').addEventListener('click', goClick);
  document.getElementById('hBtn').addEventListener('click', hClick);
  document.getElementById('vBtn').addEventListener('click', vClick);
}