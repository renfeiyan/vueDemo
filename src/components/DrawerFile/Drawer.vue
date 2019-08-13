<template>
  <div >
      <div v-if="drawerVisible" class="mask" @click="close" :style="{'z-index':maskIndex}"></div>
      <div class="drawer" v-if="drawerVisible">
         <div class="drawer-body" :class="direction"
              :style="{'width':width+'px','background':background,'z-index':dawerBodyIndex}">
          <div class="drawer-header">
            <div class="close-btn" @click="close">x</div>
            {{title}}
          </div>
          <slot name="content"></slot>
          <slot name="btn"></slot>
        </div>
      </div>
  </div>
</template>



<script>
 export default {
    name:'Drawer',
    data(){
      return {
        maskzindex:100 , 
        dawerBodyzindex: 101, 
      }
    },
    props: {
      // 是否显示drawer
      drawerVisible: Boolean,
      // drawer方向  可选择 right left
      direction: {
        type: String,
        default:"right"
      },
      // drawer宽度
      width: {
        type: Number,
        default:300
      },
      // drawer背景色
      background: {
        type: String,
        default: "#ffffff"
      },
      // 是否显示遮罩层
      mask: {
        type: Boolean,
        default: false
      },
      title:{
        type:String,
        default:''
      },
      // 层次
      drawerIndex: {
        type: Number,
        default:1
      },
 },
    methods:{
      close(){
        // alert(this.maskIndex  --- 'this.dawerBodyIndex' = this.dawerBodyIndex)
        this.$emit("update:drawerVisible",false)  //子组件向父组件传值，并抛出新的属性值
        this.$emit("close")
      }
  },
  computed:{
    maskIndex:function(drawerIndex){
       return this.maskzindex + this.drawerIndex - 1 ;
    },
    dawerBodyIndex:function(drawerIndex){
      return this.dawerBodyzindex + this.drawerIndex - 1 ;
    }
  }
 }
</script>

<style >
    .drawer{
    position: absolute;
    height:100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    /* z-index: 100 !important; */
    }
    .drawer .drawer-body {
    height: 100%;
    position: absolute;
    /* z-index: 101; */
    background-color: white;
    }
    .mask {
    height: 100%;
    width: 100%;
    position: absolute;
    /* z-index: 100; */
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.5;
    }
    .drawer-header{
      width:100%;
      height:30px;
      padding: 0 3px;
      font-size: 18px;
      font-weight: bold;
      line-height: 30px;
      border-bottom: 1px solid grey;
    }
    .close-btn{
      padding-right:30px;
      float: right;
    }
    .right,.left{
      height:100%;
      /* z-index: 100 !important;  */
      position: absolute;
    }
    .right{
      right:0;
      animation:rightMove 0.3s;
    }
   @keyframes rightMove 
      {
      0%   {right:-300px;}
      100% {right:0;}
      }
      .left{
      left:0;
      animation:leftMove 0.3s;
    }
   @keyframes leftMove 
      {
      0%   {left:-300px;}
      100% {left:0;}
      }
    

</style>