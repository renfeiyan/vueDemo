<template>
    <div>
      <button @click="drawerVisible = true">显示抽屉</button>
      <Drawer :drawerVisible="drawerVisible" direction="left" :width="400" v-model="drawerVisible"
      :mask="true" background="white" @close="drawerVisible  = false"  :drawer-visible.sync="drawerVisible"
      :title="title">
      <p v-for="item in list" slot="content">{{item}}</p>
        <button @click="value = true" slot='btn'>显示抽屉2</button>
      </Drawer>

      <Drawer :drawerVisible="value" direction="left" v-model='value'
      :mask="true" background="white" @close="visible1 = false"  :drawer-visible.sync="value"
      :title="title" :drawerIndex='2'>
        <p slot="content">我是第二个抽屉内容</p>
      </Drawer>

    </div>
</template>

<script>
  import Drawer from './Drawer' 

 export default {
    name:'drawerSelf',
    data(){
      return {
        value:false,
        drawerVisible:false,
        title:'我是抽屉标题',
        list:['我是主体内容1','我是主体内容2','我是主体内容3','我是主体内容4','我是主体内容5','我是主体内容6',]
      }
    },
    methods:{
    
    },
    components:{
      Drawer
    }
  
 }
</script>

<style >


</style>