let addLine = () => {
    //查找id=tdy 中所有的tr子元素
    let trs = document.querySelectorAll("#tdy > tr");
    //num = trs.length +1;

    if(trs.length==0){
        num = 1;
    }else{
        //firstElementChild  得到标签的第一个子标签
        //得到页面中最后一条数据的学号，加一赋值给num
        num = parseInt(trs[trs.length-1].firstElementChild.innerHTML) +1;
    }

    let html = `<tr>
        <td>${num}</td>
        <td contenteditable>草丛盖伦${num}</td>
        <td contenteditable>${num+20}</td>
        <td>
            <button onclick='save(this)'>保存</button>
            <button onclick='del(this)'>删除</button>
        </td>
    </tr>`;
    document.querySelector("#tdy").innerHTML += html;
}
let save = (obj) => {
    td = obj.parentNode;//得到按钮的父元素
    //previousElementSibling 得到 前一个兄弟元素
    let age = td.previousElementSibling.innerHTML;
    let nameTd = td.previousElementSibling.previousElementSibling;
    let name = nameTd.innerHTML;
    let sno = nameTd.previousElementSibling.innerHTML;
    let str = localStorage.getItem("stus");//获取本地存储中的学生数据
    let stuList = JSON.parse(str);//把数字符串转成json对象数组
    if(null == stuList){
        stuList = [];//如果初始没有数据，初始化一个空数组
    }
    let stu = {
        sno:sno,
        name:name,
        age:age
    };
    saveOrUpdate(stuList,stu);//不存在就保存，存在就修改
    localStorage.setItem("stus",JSON.stringify(stuList));
}

//窗口加载完成后，自动执行这个事件
window.onload = ()=>{
    let str = localStorage.getItem("stus");
    let stuList = JSON.parse(str);//把字符串转为json对象数组
    if(null == stuList){//没有数据
        return;
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
    document.querySelector("#tdy").innerHTML += html;
    })
}

//不存在就保存，存在就修改
const saveOrUpdate = (stuList,stu) => {
    let isExist = false;
    for(let i=0;i<stuList.length;i++){
        if(stuList[i].sno == stu.sno){
            stuList[i].name = stu.name;
            stuList[i].age = stu.age;
            isExist = true;//存在
        }
    }
    if(!isExist){//不存在，则保存新的数据
        stuList.push(stu);
    }
}

let del = (obj) =>{
    td = obj.parentNode;//获取到该按钮父元素
    sno = td.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    let stus = localStorage.getItem("stus");//获取本地存储中的学生数据
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
        localStorage.setItem("stus",JSON.stringify(stus));
    }

    //将页面中的该行也删除
    tr = td.parentNode;//获取到该行的元素
    //removeChild 通过父元素.removeChild 删除子元素
    tr.parentNode.removeChild(tr);//删除该行元素
}

let clearAll = () =>{
    localStorage.removeItem("stus");
    location.reload();//刷新页面
}