<template>
    <h1>产品</h1>

    <p>
        <el-button type="primary" @click="showAddDialog = true">增加</el-button>
        <el-button type="primary" @click="delSelected()">删除所选</el-button>
    </p>

    <!-- 
        ref="tableData"：设置一个名为tableData的引用，用于将表格所选行传入
        show-summary：在表格尾部展示合计行
        :summary-method="getSummaries"：通过编写getSummaries方法代码实现自定义合计规则
    -->
    <el-table show-summary :summary-method="getSummaries" border :data="goods" ref="tableData" style="display: flex;">
        <el-table-column fixes="left" type="selection" width="50px"></el-table-column>
        <el-table-column width="100" label="产品ID" prop="id"></el-table-column>
        <el-table-column width="100" label="产品名" prop="name"></el-table-column>
        <el-table-column width="100" label="价格" prop="price"></el-table-column>
        <el-table-column width="100" label="库存" prop="stock"></el-table-column>
        <el-table-column width="120" label="操作">
            <!-- scope 包含了当前行的数据以及一些其他信息，比如索引、行对象等，我们可以通过 scope 来访问到当前行的数据，比如 scope.row、scope.column 等 -->
            <template #default="scope">
                <el-button type="success" @click="showEdit(scope.row)" size="small" circle icon="edit"></el-button>
                <el-button type="danger" @click="del(scope.row.id)" size="small" circle icon="delete"></el-button>
            </template>
        </el-table-column>
    </el-table>

    <!-- 新增的弹出框 -->
    <el-dialog style="width: 40%;height:350px;" v-model="showAddDialog" @closed="dialogClosed()">
        <el-form label-width="auto" style="max-width: 80%;">
            <el-form-item label="产品名称：">
                <!-- 在组件中会自动加载ref，所以不需要.value -->
                <el-input v-model="addForm.name"></el-input>
            </el-form-item>
            <el-form-item label="产品价格：">
                <el-input-number v-model="addForm.price"></el-input-number>
            </el-form-item>
            <el-form-item label="库存：">
                <el-input-number v-model="addForm.stock"></el-input-number>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="margin: auto;" @click="doAdd()">增加</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>

    <!-- 修改的弹出框 -->
    <el-dialog style="width: 40%;height:350px;" v-model="showEditDialog" @closed="dialogClosed()">
        <el-form label-width="auto" style="max-width: 80%;">
            <el-form-item label="产品ID：">
                <el-input readonly v-model="addForm.id"></el-input>
            </el-form-item>
            <el-form-item label="产品名称：">
                <el-input v-model="addForm.name"></el-input>
            </el-form-item>
            <el-form-item label="产品价格：">
                <el-input-number v-model="addForm.price"></el-input-number>
            </el-form-item>
            <el-form-item label="库存：">
                <el-input-number v-model="addForm.stock"></el-input-number>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="margin: auto;" @click="doModify()">确定</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<!-- setup 组合式API 的标识 -->
<!-- 原先的是选项式API -->
<script setup>
    /*
    ref 是vue中的一个响应式函数
    响应式：即类似于双向绑定，一起动作
    在选项式API中的数据默认是响应式的，组合式API是非响应式的
    所以需要使用ref函数使其变成响应式的
    */
	import { onMounted, ref } from 'vue'   
    import { ElMessage,ElMessageBox } from 'element-plus'//导入信息弹出框依赖包

    //保存页面和修改页面的开关
    let showAddDialog = ref(false);
    let showEditDialog = ref(false);
    //变量存储当前处理行数据
    let addForm = ref({name:'',price:100,stock:10}); 
    //变量存储页面展示的所有数据
    let goods = ref([]);
    //创建一个响应式引用
    let tableData = ref();

    //删除所选
    const delSelected =()=>{
        let rows = tableData.value.getSelectionRows();
        goods.value = goods.value.filter(item=> !rows.includes(item));
        save();
    }
	//删除指定id行，点击有 确认删除 信息弹出框
    const del = id =>{
        //打开确认对话框，显示指定的信息和标题
        ElMessageBox.confirm(
            '确认删除吗',//参数一：提示内容
            '警告',//参数二：提示标题
            {
                confirmButtonText:'确认',//确认按钮的文字
                cancelButtonText:'取消',//取消按钮的文字
                type:'warning'//样式
            }
        )
        .then(()=>{//ok事件
            //使用了ref后goods不单单只是个数组了，所以需要.value
            goods.value.forEach((item,i) => {
                if(item.id == id){
                    //删除i位置开始的1个数据
                    goods.value.splice(i,1);
                }
            })
            save();
            //信息弹出框关闭后弹出的提示信息
            ElMessage({
                type: 'success',//表示操作成功的提示信息
                message: '删除成功',
            })
        })
        .catch(()=>{//取消事件
            ElMessage({
                type: 'info',//表示普通的提示信息
                message: '取消删除',
            })
        })
    }
    //尾部合计行
    const getSummaries = param=>{
        /*
        //解包
        const datat = {'a':123,'b':'asd'};
        const {a,b} = datat;
        console.log(a); //123
        console.log(b); //'asd'
        */
        //解包传过来的参数
        //columns 表示table中所有td列的信息，td的html属性之类的
        //data 就是数据，实际上就是carts
        const {column,data} = param;
        let sum = 0;
        data.forEach(item=>{
            sum += item.stock;
        })
        //返回的数组元素依次从左往右放入尾部合计行
        return ['','','','总库存',sum]
    }
    //弹窗关闭时清空addForm
    const dialogClosed = () =>{
        addForm.value = {id:'',name:'',price:100,stock:10};
    }
	//添加
    const doAdd = ()=>{
        if(goods.value.length > 0){
            //会自动增加id字段，动态增加
        addForm.value.id = goods.value[goods.value.length-1].id +1;
        }else{
            addForm.value.id = 1;
        }
        goods.value.push(addForm.value);
        showAddDialog.value = false;
        save();
    }
    //打开修改框
    const showEdit = row =>{
        showEditDialog.value = true;
        addForm.value.id = row.id;
        addForm.value.name = row.name;
        addForm.value.price = row.price;
        addForm.value.stock = row.stock;
    }
    //保存修改
    const doModify = ()=>{
        //item 就是当前遍历的那行数据
        goods.value.forEach((item,i)=>{
            if(item.id == addForm.value.id){
                item.name = addForm.value.name;
                item.price = addForm.value.price;
                item.stock = addForm.value.stock;
            }
        })
        showEditDialog.value = false;
        save();
    }
    //保存到浏览器的本地存储中
    const save = ()=>{
        const str = JSON.stringify(goods.value);
        localStorage.setItem("goods",str);
    }
    //onMounted() 钩子函数，组件被挂载到 DOM 后执行特定的代码 
    //类似于java中的构造函数 在页面执行前会自动调用
    onMounted(()=>{
        const str = localStorage.getItem("goods");
        //首次进入的时候localStorage为空。goods.value为空会报错，所以不能赋值
        if(str){
            //将localStorage中的数据赋值到goods中去，用于展示在页面中
            goods.value = JSON.parse(str);
        }
    })
</script>