var showPopupBtn;//增加数据按钮变量
var overdiv;
var popup;

//window.onload 是窗口加载完成后的事件
//因为是导入的js文件，html文件从上向下扫描，需要等到html扫描完后再执行js代码。或者直接在html页面中将js的导入放在页面最末尾也可以
window.onload=()=>{
    showPopupBtn = document.getElementById("showPopupBtn");
    overdiv = document.getElementById("overdiv");
    popup = document.getElementById("popup");
    //给按钮绑定单击事件
    //add()的话当代码执行到该行的时候直接就会执行add()这个函数
    //add的话择只会将单击事件绑定这个函数，单击按钮后才会执行该函数
    //或者直接在html标签中绑定点击事件，在弹出窗的保存/退出/AI生成按钮中就是使用该方法绑定按钮事件    onclick="函数"
    showPopupBtn.onclick = add;
    init();
}

// 当页面初次加载时
//从本地存储中，读取本地所有学生数据
//将数据追加到页面上
const init =() =>{
    let str = localStorage.getItem("stuList");
    let stuList = JSON.parse(str);
    if(null == stuList){
        stuList = [];
    }
    stuList.forEach(obj =>{
        let html = `<tr>
        <td>${obj.sno}</td>
        <td contenteditable>${obj.name}</td>
        <td contenteditable>${obj.age}</td>
        <td>
            <button onclick='save(this)'>保存</button>
            <button onclick='del(this)'>删除</button>
        </td>
    </tr>`;
    document.querySelector("#tbd").innerHTML += html;
    })
}

//定义增加函数
const add = () =>{
    //显示div
    popup.style.display="block";
    overdiv.style.display="block";
}

//退出弹出层的事件函数
const quit = () =>{
    popup.style.display="none";
    overdiv.style.display="none";
}
//退出弹出层中保存按钮的事件函数
const save = () =>{
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const sno = document.querySelector("#sno").value;

    //得到本地存储中现有的学生数据
    let str =localStorage.getItem("stuList");
    let stuList = JSON.parse(str); 
    if(null == stuList){
        stuList = [];
    }
    let stu = {
        sno:sno,
        name:name,
        age:age
    }
    stuList.push(stu);
    localStorage.setItem("stuList",JSON.stringify(stuList));
    location.reload();//刷新页面

    popup.style.display="none";
    overdiv.style.display="none";
}

//弹出层中的AI生成按钮的事件函数
const genSno1 = () =>{
    //查找id=tdy 中所有的tr子元素
    let trs = document.querySelectorAll("#tbd > tr");

    if(trs.length==0){
        num = 1;
    }else{  
        //firstElementChild  得到标签的第一个子标签
        //得到页面中最后一条数据的学号，加一赋值给num
        num = parseInt(trs[trs.length-1].firstElementChild.innerHTML) +1;
    }
    //给文本框复制用value
    document.querySelector("#sno").value = num;
}

//第二种方法，两种皆可
const genSno2 = () =>{
    let tbd = document.querySelector("#tbd");
    let sno = 1;
    //得到最后一个子元素也就是最后一个tr
    let lastTr = tbd.lastElementChild;
    //
    if(null != lastTr){
        td = lastTr.firstElementChild;//得到第一个子元素td
        sno = parseInt(td.innerHTML) +1;
    }
    document.querySelector("#sno").value = sno;
}