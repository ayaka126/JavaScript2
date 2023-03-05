let result = document.getElementById("result")

function getEqual(button){//=を押下したら計算する
    result.innerHTML = eval(result.innerHTML);
}

function getClear(button){//ACを押下したら0になる
    result.innerHTML = "0";
}

function getCalc(button){//演算子が連続の場合は上書きする、それ以外は追加する
    if (result.innerHTML.slice(-1) == "+" ||
        result.innerHTML.slice(-1) == "-" ||
        result.innerHTML.slice(-1) == "*" ||
        result.innerHTML.slice(-1) == "/"){
        const f = result.innerHTML.slice(0,-1);//fは表示画面の末尾削除した値
        result.innerHTML = f + button.value;//画面表示はfに、押下したボタンの値を加える
    }else{result.innerHTML += button.value}//それ以外は表示の値に演算子を加える
} 

function getDot(button){//.を連続で押せないようにする
    if (result.innerHTML.slice(-1) == "."){
        button = disabled;
    }else{result.innerHTML += button.value}
}

function getNumber(button){//表示されている数字が0の時はクリックされた数字だけ表示する
    if (result.innerHTML == "0" || result.innerHTML == "00"){
        result.innerHTML = button.value;
    }else{
        result.innerHTML += button.value;
    }
}