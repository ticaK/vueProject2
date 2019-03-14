<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/settings">Settings</router-link>
    <router-view/>
    <HelloWorld
     @button-clicked="handleBUttonClicked" msg="Hello"
     @h-clicked="nekiKlik1"  zivotinja="slon"/>
     Name:<input type="text" v-model="name"/><br>
     Last name:<input type="text" v-model="last"/><br>
     Age:<input type="number" v-model="age"/><br>
     
    {{fullName}}
     
  </div> 
  <!-- ovo je samo zakomentarisano da vidimo kako radi -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  data(){
    return{
      name:"",
      last:"",
      age:0
    
    }
  },
  computed:{
    fullName(){
      return `${this.name} ${this.last} -${this.age}`
    }

  },

  watch: {
    name(newValue, oldValue){
      if(newValue==="Aleksandra"){
        alert('hey')
      }
    }
    // moraju se zvati po onome sto hocemo da gledamo- name
  },
  // u computed se pisu funkcije,ali ne primaju parametre, ali se pozivaju kao obicne promjenjive, ne idu ()
  components: {
    HelloWorld
  },
  methods:{
    handleBUttonClicked(){
      console.log('Parent clicked');
    },
    nekiKlik1(lastName){
      //nekiKlik1 ocekuje parametar, mozemo ga nazvati kako hocemo, ne mora lastName, a pokupice kop 
      console.log(lastName);
    }
  },

beforeCreate(){
  console.log('before create');
},
created(){
  console.log('created'); //sada mozemo pristupiti podatku name,ali nemamo ref
  
},
beforeMount() {
  console.log('before mount');
    
  },
  mounted(){
  console.log('mounted');//imamo ref(imamo dom i mozemo raditi sa njim)
  },
  beforeUpdate(){

  },
  updated(){

  },
  beforeDestroy() {
    
  },
  destroyed(){
    
  }





}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
