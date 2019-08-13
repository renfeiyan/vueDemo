<template>
    <div>
        我得值是——{{num}}
        <button @click="add">点我增加</button>
        <input type="text" v-model.number="n" value="增加多少"/>
        <h4>我是通过getters过滤获取到的 {{Sexnan}}</h4>
        <div class="todos">
            <p>
                新增加一个todos:
                <input placeholder="请写在这里" type="text"/>
                <input value="点我添加" type="button"/>
            </p>
            <hr>
            <p>
                现有todos:
               <ul>
                    <li is="TodoLi"></li>
                </ul> 
            </p>
            <hr>
            总共4个，已做3个，未作1个

        </div>
    </div>
</template>
  
<script>
    import TodoLi from './todoLI.vue'
export default {
    name: 'vuexDemo',
    data(){
      return{
        n:1
      }
    },
   computed:{
       num(){
           return this.$store.state.num  
       },
       Sexnan(){
           return this.$store.getters.Sexnan
       }
    },
    methods:{
        add(){
            this.$store.commit("increment",this.n)
        }
    },
    components:{
        TodoLi
    },
    created(){
        this.$store.dispatch("init");
    }
}
</script>
  
<style scoped>
  .todos{
      border:1px solid red;
      padding:30px;
  }
</style>
  