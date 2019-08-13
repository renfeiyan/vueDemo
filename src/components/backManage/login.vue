<template>
    <div class=boxItem>
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm"></el-form>
            <el-form-item prop="userName">
                <el-input type="text" v-model="loginForm.userName" autocomplete="off" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <el-input type="password" v-model="loginForm.pass" autocomplete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
            </el-form-item>
         </el-form>



    </div>
</template>

<script>
import api from '@/axios/api.js' 
export default {
    name:'login',
    data(){
        return{ 
            newsListShow:[], //total
            // picListShow:[],  //pictures
            // titleListShow:[],  //title
            // dateListShow:[] , //date
            ruleForm: {
                pass: '',
                checkPass: '',
                age: ''
            }
        }
    },
    created(){
        this.setNewsApi();
    },
    methods:{
        setNewsApi:function(){
            api.getNews('/news/index', 'type=top&key=123456')
            .then(res => {
                console.log(res);
                this.newsListShow = res.articles;
            });
        }
}
}
</script>

<style scoped>
.boxItem{
    width:400px;
    position:absolute;
    top:50%;
    left:50%;
    border:1px solid red;
    transform: translate(-50%, -50%);
}

</style>