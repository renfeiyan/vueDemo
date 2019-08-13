import Vue from 'vue'
import Vuex from 'vuex'
import createlogger from './logger'
import axios from 'axios'

Vue.prototype.axios = axios

Vue.use(Vuex)
const Http = new Vue;  //声明vue常量

const store = new Vuex.Store({
    state:{
        num:6,
        students:[
            {name:"lala",sex:"男"},
            {name:"bala",sex:"男"},
            {name:"xiha",sex:"女"},
            {name:"enlala",sex:"女"},
            {name:"wuhaha",sex:"女"}
        ]
    },
    //突变，罗列所有可能改变state的方法
    mutations:{
        increment(state,n){
            state.num +=n;
        },
        minus(state){
            state.num--
        },
        /*todos 开始了 */
        init(state,todos){
            state.todos = todos;
        }
    },
    actions:{
        init(){
            // Http.axios.get('/Dapi/getAll').then(res=>{
            //     console.log(res.data.result);
            //  }).catch(res=>{
            //      console.log(res+'获取数据失败');
            //  })
            //要打开 node app.js 服务器
        }
        
    },
    plugins:[createlogger],
    getters:{
        Sexnan: state =>{
            return state.students.filter(students =>{
               return students.sex == "男"
            })
        }
    }
})

//向外暴露全局store
export default store;


//vuex天生任何组件都可以“通天”，没有connect和provider，仅需要在computed中使用store.state.**字样，或者在methods中使用store.state.commit(**)即可.