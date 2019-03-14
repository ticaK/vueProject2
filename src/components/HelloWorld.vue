<template>
  <div class="hello">
    <h1 @click="nekiKlik">{{ msg }}</h1>
    <button @click="handleClick">Click me</button>

    <p>{{zivotinja}}</p>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type:String,
      default:"cao"
    },

    zivotinja: {
      type:String,
      default:"zivotinja"
    }
  },
  methods:{
    handleClick(){
      console.log('Child clicked');
      this.$emit('button-clicked')
  },
  nekiKlik(){
      console.log('h is clicked');
      const lastName="kop";
       this.$emit('h-clicked',lastName); //emitujemo event sa nekim podatkom
  }
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
