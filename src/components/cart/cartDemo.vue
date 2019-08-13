<template>
    <div id="cart">
        {{newsList}}
        <table>
            <tr>
                <th>货物名称</th>
                <th>单价</th>
                <th>数量</th>
                <th>金额</th>
            </tr>
            <tr is="cart-bar" v-for="item in newsList" :item="item"></tr>
            <tr>
                <td>总额</td>
                <td colspan="3">{{total}}</td>
            </tr>
        </table>
    </div>
</template>
  
<script>

import cartBar from './cartBar'

export default {
    name: 'cart',
    data(){
      return{
       newsList:[]
      }
    },
    created :function () {
        var that = this;
        that.axios.get('../../../static/api/cart.json').then(function(response){
            console.log(response.data.cart);
            that.newsList=response.data.cart;
        }).catch(function(response){
            console.log(response);
        })
    },
    components:{
       cartBar
    },
    computed:{
       "total":function(){
           var sum = 0 ;
           this.newsList.forEach(function(element) {
               sum+=element.money;
           });
           return sum;
       }
    }
}
</script>
  
<style>
  table,tr,td,th{
      border:1px solid black;
  }
  td{
      width:200px;
      line-height: 20px;
      text-align: center;
  }
</style>
  