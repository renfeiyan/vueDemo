<template>
    <tr class="cartBar">
       <td>{{item.name}}</td>
       <td>{{item.price}}</td>
       <td>
           <button @click="add">+</button>
           {{item.amount}}
           <button @click="down">-</button>
        </td>
        <td>{{item.money}}</td>
    </tr>
</template>
  
<script>
export default {
    name: 'cartBar',
    data(){
      return{
       money:""
      }
    },
   props:["item"],
   methods:{
       add(){
           if(this.item.amount>=0){
            this.item.amount++;
            this.item.money = this.item.price * this.item.amount;
           }
       },
       down(){
        if(this.item.amount>0){
            this.item.amount--;
            this.item.money = this.item.price * this.item.amount;
        }
                
       }
   },
   watch:{

   }
    
}
</script>
  
<style>
  
</style>
  