<template>
    <div class="home">
        <Drawer :list="list" position="right" title="4328537">
            姓名：<input type="text">哈哈哈方哥写的学习一下
        </Drawer>
    </div>
</template>
      
<script>
import Drawer from './newDrawer.vue'      
export default {
    name: 'drawerDemo',
    components: {
        Drawer
    },
    data(){
        return{
            list:['你是猪猪一号','你是猪猪二号','当然你是猪猪三号'],
        }
    },
    methods:{
      
    }
}
</script>
<style>
.home{
    width: 100%;
    height: 100%;
}
</style>
      