<template>
    <h1>购物车</h1>
    <p>
        <el-button type="primary" @click="showAddDialog=true">增加</el-button>&nbsp;
        <el-button type="primary" @click="deleteAll()">删除选中</el-button>
    </p>
    <el-table :span-method="mergeRows" show-summary :summary-method="getSummaries" :data="carts" border style="width: 100%;display:flex;" ref="tableData">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column width="100" label="产品编号" prop="pid"></el-table-column>
        <el-table-column width="100" label="缩略图">
            <template #default="scope">
                <el-image
                    style="width: 53px; height: 46px"
                    :src="scope.row.img"
                    :zoom-rate="1.2"
                    :max-scale="7"
                    :min-scale="0.2"
                    :preview-src-list="scope.row.bigImg"
                    :initial-index="0"
                    fit="cover"
                    :preview-teleported="true"
                />
            </template>
        </el-table-column>
        <el-table-column width="100" label="名称" prop="pname"></el-table-column>
        <el-table-column width="80" label="单价" prop="price"></el-table-column>
        <el-table-column width="175" label="数量">
            <template #default="scope">
                <el-input-number v-model="scope.row.num" style="width: 80;"/>
            </template>
        </el-table-column>
        <el-table-column label="合计">
            <template #default="scope">
                ￥{{ scope.row.price*scope.row.num }}
            </template>
        </el-table-column>
        <el-table-column label="操作" width="90">
            <template #default="scope">
                <el-button type="success" size="small" circle icon="edit" @click="showUpdateDialog(scope.row)"></el-button>
                <el-button type="danger" size="small" circle icon="delete" @click="del(scope.row.pid)"></el-button>
            </template>
        </el-table-column>
    </el-table>

        <!-- 新增的弹出框 -->
        <el-dialog style="width: 40%;height:350px;" v-model="showAddDialog" @closed="addForm = {price:0,num:0,img:'https://s2.loli.net/2024/05/25/cRYFyPbldeNQUEw.jpg'};">
            <el-form label-width="auto" style="max-width: 80%;">
                <el-form-item label="名称：">
                    <el-input v-model="addForm.pname"></el-input>
                </el-form-item>
                <el-form-item label="产品图片：">
                    <el-image style="width: 53px; height: 46px" :src="addForm.img" :fit="fit" />
                </el-form-item>
                <el-form-item label="单价：">
                    <el-input-number v-model="addForm.price"></el-input-number>
                </el-form-item>
                <el-form-item label="数量：">
                    <el-input-number v-model="addForm.num"></el-input-number>
                </el-form-item>
                <el-form-item label="合计：">
                    {{ addForm.price*addForm.num }}
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="margin: auto;" @click="doAdd()">确定</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

            <!-- 修改的弹出框 -->
            <el-dialog style="width: 40%;height:350px;" v-model="showUpdate" @closed="addForm = {price:0,num:0,img:'https://s2.loli.net/2024/05/25/cRYFyPbldeNQUEw.jpg'};">
                <el-form label-width="auto" style="max-width: 80%;">
                    <el-form-item label="产品编号：：">
                        <el-input v-model="addForm.pid" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="名称：">
                        <el-input v-model="addForm.pname"></el-input>
                    </el-form-item>
                    <el-form-item label="单价：">
                        <el-input-number v-model="addForm.price"></el-input-number>
                    </el-form-item>
                    <el-form-item label="数量：">
                        <el-input-number v-model="addForm.num"></el-input-number>
                    </el-form-item>
                    <el-form-item label="合计：">
                        {{ addForm.price*addForm.num }}
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="margin: auto;" @click="update()">确定</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage,ElMessageBox } from 'element-plus';

    var carts = ref([]);
    var showAddDialog = ref(false);
    var showUpdate = ref(false);
    var addForm = ref({price:0,num:0,img:'https://s2.loli.net/2024/05/25/cRYFyPbldeNQUEw.jpg'});
    var tableData = ref();
    carts.value = [
        {pid:1,img:'https://s2.loli.net/2024/05/25/cRYFyPbldeNQUEw.jpg',pname:'cpu',price:1200,num:1,bigImg:['https://s2.loli.net/2024/05/25/sLG4nm5eoiZ9XDN.jpg']},
        {pid:2,img:'https://s2.loli.net/2024/05/25/SeMjRLtPVG3lh79.jpg',pname:'16G内存条',price:360,num:2,bigImg:['https://s2.loli.net/2024/05/25/hCZ7QzFujeLbTX9.jpg']},
        {pid:3,img:'https://s2.loli.net/2024/05/25/s1xE9wvFmHdZWIq.jpg',pname:'1T固态硬盘',price:460,num:1,bigImg:['https://s2.loli.net/2024/05/25/mvldMXQeRnrWo2P.jpg']},
        {pid:4,img:'https://s2.loli.net/2024/05/25/K93ZLxmHnfIsD4O.jpg',pname:'七彩虹显卡',price:360,num:2,bigImg:['https://s2.loli.net/2024/05/25/5Qd3K7XArUhm1gT.jpg']},
        {pid:5,img:'https://s2.loli.net/2024/05/25/LdKfCPYsvwH3jA2.jpg',pname:'笔记本电脑',price:500,num:2,bigImg:['https://s2.loli.net/2024/05/25/XvEWGVLAdjOiUbI.jpg']}
    ]

    const doAdd = () =>{
        if(carts.value.length > 0){
            addForm.value.pid = carts.value[carts.value.length-1].pid+1;
        }else{
            addForm.value.pid = 1;
        }
        carts.value.push(addForm.value);
        showAddDialog.value = false;
    }

    const showUpdateDialog=row=>{
        showUpdate.value = true;
        addForm.value.pid = row.pid;
        addForm.value.pname = row.pname;
        addForm.value.price = row.price;
        addForm.value.num = row.num;
    }

    const update=()=>{
        carts.value.forEach(item=>{
            if(item.pid==addForm.value.pid){
                item.pname = addForm.value.pname;
                item.price = addForm.value.price;
                item.num = addForm.value.num;  
            }
            showUpdate.value = false;
        })
    }

    const del = pid =>{
        ElMessageBox.confirm(
            '确认删除吗',
            '警告',
            {
                confirmButtonText:'确认',
                cancelButtonText:'取消',
                type:'warning'
            }
        )
        .then(()=>{
            carts.value.forEach((item,i)=>{
                if(item.pid==pid){
                    carts.value.splice(i,1);
                }
            })
            ElMessage({
                type:'success',
                message:'删除成功'
            })
        })
        .catch(()=>[
            ElMessage({
                type:'info',
                message:'删除失败'
            })
        ])
    }

    //表尾合计行自定义规则
    const getSummaries = params =>{
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
        const {columns,data} = params;
        // console.log(columns);
        // console.log(data);
        let sum = 0;
        data.forEach(item =>{
            sum += item.price * item.num;
        })
        //返回的数组元素依次从左往右放入尾部合计行
        return ['','','','','','合计',"￥"+sum];
    }

    //合并行或列
    const mergeRows = params =>{
        //row行：column列（垂直方向），
        const {row,column,rowIndex,columnIndex} = params;
    }

    const deleteAll = ()=>{
        let rows = tableData.value.getSelectionRows();
        carts.value = carts.value.filter(item=> !rows.includes(item));
    }

       //保存到浏览器的本地存储中
       const save = ()=>{
        const str = JSON.stringify(carts.value);
        localStorage.setItem("carts",str);
    }
</script>