<template>
    <div class="colorBox">
      <div class="colorpickBox" :style="{backgroundColor:'rgb('+col.r+','+ col.g +','+ col.b+')'}"></div>
      <p>{{col.r}}-{{col.g}}-{{col.b}}</p>
      红：<input type="range" min="0" max="300" v-model="col.r">{{col.r}}<br>
      绿：<input type="range" min="0" max="300" v-model="col.g">{{col.g}}<br>
      蓝：<input type="range" min="0" max="300" v-model="col.b">{{col.b}}<br>
    </div>
 
</template>

<script>
export default {
  name: 'color',
  data(){
    return{
       col:{
        r:159,
        g:81,
        b:156
      }
    }
  },
  props:["number"]
}
</script>

<style>
.colorpickBox{
  width:200px;
  height:200px;
}
</style>
