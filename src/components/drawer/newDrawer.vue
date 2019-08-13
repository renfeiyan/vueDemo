<template>
    <div class="container" @click="showMask" ref="container">
        <button @click.stop="showDrawer" class="btn control">点击此处</button>
        <div class="contentBox" v-if="isActive" :class="position" @click.stop="showDrawer">
            <p class="title">{{title}}</p>
            <slot></slot>
        </div>
    </div>
</template>
      
      <script>
        export default {
          name: 'newDrawer',
          data() {
            return {
              isActive: false
            }
          },
          props: {
            list: Array,
            position: {type: String, default: 'right'},
            title: String
          },
          methods: {
              //显示遮罩层
            showMask() {
              // debugger   //打断点
              // console.log(this)   //打印
              this.isActive = false
              this.$refs.container.style.backgroundColor = 'black'
            },
      //显示抽屉内容
            showDrawer() {
              this.isActive = true
              this.$refs.container.style.backgroundColor = 'pink'
              this.$refs.container.style.top = '0'
            }
          }
        }
      </script>

      <style scoped>
        .container {
          width: 100%;
          height: 100%;
          /*background-color: #fff;*/
          position: absolute;
          margin-top: 50px;
          /*opacity: 0.7;*/
        }
      
        .contentBox {
          background-color: #fff;
          border-right: 1px solid #ccc;
          border-left: 1px solid #cccccc;
          float: right;
          min-width: 300px;
          /*min-height: 300px;*/
          height: 100%;
        }
      
        /*控制上下左右居中*/
        .control {
          position: absolute;
          top: 10%;
          left: 50%;
          transform: translate(50%, 50%);
        }
      
        .btn {
          margin-right: 20px;
          width: 100px;
          height: 40px;
          display: inline-block;
          border-radius: 3px;
          margin-bottom: 20px;
        }
        .left {
          height: 100%;
          position: absolute;
          left: 0;
        }
        .right {
          height: 100%;
          position: absolute;
          right: 0;
        }
      
        .top {
          position: absolute;
          width: 100%;
          top: 0;
          height: 300px;
        }
      
        .bottom {
          position: absolute;
          width: 100%;
          bottom: 0;
          height: 300px;
        }
      
        .title {
          font-size: 20px;
          color: black;
          font-weight: 600;
          border-bottom: 1px solid #ccc;
          padding: 10px;
        }
      
        .content {
          margin: 10px 0;
          font-size: 14px;
          color: rgb(53, 38, 38);
          padding-left: 10px;
        }
      </style>
      