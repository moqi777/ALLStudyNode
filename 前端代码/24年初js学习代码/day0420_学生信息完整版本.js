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
    //将页面元素清空
    document.querySelector("#tbd").innerHTML ="";
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
                <button onclick='updateSave(this)'>修改</button>
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
    if(sno == "" || isNaN(sno)){
        alert("学号不能为空，且必须是数字");
        return;
    }
    if(name == ""){
        alert("姓名不能为空");
        return;
    }
    if(age == "" || isNaN(age)){
        alert("年龄不能为空，且必须是数字");
        return;
    }

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
    
    let isLegal = snoLegal(stuList,stu);//判断id是否合法
    //如果合法，正常操作
    if(isLegal){
        stuList.push(stu);
        localStorage.setItem("stuList",JSON.stringify(stuList));

        location.reload();//刷新页面

        popup.style.display="none";
        overdiv.style.display="none";
    }else{//不合法，弹出提示框
        alert("该学号已存在或不合法，请重新输入学号");
    }
}

//根据输入框姓名查询localStorage中该学生，然后将查询到的含有输入信息的学生展现出来
const searchOrShow =() =>{
    //将列表清空
    document.querySelector("#tbd").innerHTML = "";
    //获取到输入框元素
    let keyword = document.querySelector("#keyword").value;
    let str = localStorage.getItem("stuList");
    let stuList = JSON.parse(str);
    //遍历localStorage
    for(let i = 0;i <= stuList.length;i++){
        //indexOf(iten)
        //数组调用：从头到尾检索数组，返回对应第一个item的下标，没有找到返回-1
        //字符串调用：返回指定字符串在字符串中首次出现的位置，没有找到返回-1
        if(stuList[i].name.indexOf(keyword) >= 0){
                let html = `<tr>
                <td>${stuList[i].sno}</td>
                <td contenteditable>${stuList[i].name}</td>
                <td contenteditable>${stuList[i].age}</td>
                    <td>
                        <button onclick='updateSave(this)'>修改</button>
                    <button onclick='del(this)'>删除</button>
                </td>
            </tr>`;
            document.querySelector("#tbd").innerHTML += html;
        }
    }
}

//将查询到的学生姓名标红
const searchOrRed =() =>{
    //获取到输入框元素
    let keyword = document.querySelector("#keyword").value;
    //获取到当前页面的表单元素
    let tbd = document.querySelector("#tbd");
    //获取到所有的tr
    let trs = tbd.children;
    //先清除效果(初始化一次)
    init()
    //遍历trs
    for(let i=0;i < trs.length;i++){
        //tr下标为1的子节点为name，匹配到了查询词
        if(trs[i].children[1].innerHTML.indexOf(keyword) >=0){
            let td = trs[i].children[1].innerHTML//此处的td是表单中name的全称，而我们只需要将输入框部分标红即可
            let fistIndex = td.indexOf(keyword);//输入框内容在name全称中的起始下标
            let endIndex = fistIndex+keyword.length;//输入框内容在name全称中的末尾下标
            //截取字符串
            let strFist = td.substring(0,fistIndex);
            let strEnd = td.substring(endIndex);
            
            //替换该html
            trs[i].children[1].innerHTML = `${strFist}<span style="color: red;font-weight:bold;">${keyword}</span>${strEnd}`;
        }
    }
}

let clearAll = () =>{
    localStorage.removeItem("stuList"); 
    location.reload();//刷新页面
}

let updateSave =(obj) =>{
    td = obj.parentNode;//得到按钮的父元素
    //previousElementSibling 得到 前一个兄弟元素
    let age = td.previousElementSibling.innerHTML;
    let nameTd = td.previousElementSibling.previousElementSibling;
    let name = nameTd.innerHTML;
    let sno = nameTd.previousElementSibling.innerHTML;
    let str = localStorage.getItem("stuList");//获取本地存储中的学生数据
    let stuList = JSON.parse(str);//把数字符串转成json对象数组
    if(null == stuList){
        stuList = [];//如果初始没有数据，初始化一个空数组
    }
    let stu = {
        sno:sno,
        name:name,
        age:age
    };
    for(let i=0;i<stuList.length;i++){
        if(stuList[i].sno == stu.sno){
            stuList[i].name = stu.name;
            stuList[i].age = stu.age;
            break;
        }
    }
    localStorage.setItem("stuList",JSON.stringify(stuList));
}

let del = (obj) =>{
    td = obj.parentNode;//获取到该按钮父元素
    sno = td.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    let stus = localStorage.getItem("stuList");//获取本地存储中的学生数据
    if(stus != null){
        //删除本地中的数据
        stus = JSON.parse(stus);//将其序列化
        stus.forEach((stu,index) =>{
            if(stu.sno == sno){
                //array.splice(start, deleteCount)
                //start 是要删除元素的起始位置
                //deleteCount 是要删除的元素数量。
                stus.splice(index,1);
            }
        })
    
        //将删除后的stus重新装入
        localStorage.setItem("stuList",JSON.stringify(stus));
    }

    /*
    //将页面中的该行也删除
    tr = td.parentNode;//获取到该行的元素
    //removeChild 通过父元素.removeChild 删除子元素
    tr.parentNode.removeChild(tr);//删除该行元素
    */
   //直接刷新页面
   location.reload();
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

//根据传入的本地数据和添加数据判断sno是否合法
const snoLegal =(stuList,stu) =>{
    for(let i=0;i<stuList.length;i++){
        if(stuList[i].sno >= stu.sno){
            return false;
        }
    }
    return true;
}