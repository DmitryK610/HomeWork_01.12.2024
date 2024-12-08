<template>

    <div class=" user_info">
    <h1>Форма регистрации</h1>
    <form @submit.prevent="logIn">
      <div>
        <label for="name"> Имя:</label>
        <input type="text" v-model="user.name" required />
      </div>
      <div>
        <label for="email"> Электронная почта:</label>
        <input type="email" v-model="user.email" required />
      </div>
      <div>
        <label for="password"> Пароль (минимум 6 символов):</label>
        <input type="password" v-model="user.password" rules="min:6" required />
      </div>
      <div>
      <input type="submit"></input>
      </div>
      
    </form>
   
  </div>

    </template>
    <script lang="ts">
    import { defineComponent, ref } from 'vue'
    

export default defineComponent({
  
  
 data() {
    return{
    user: {
      name: '',
      email: '',
      password: '',

    }
  }
},
   methods:{
    logIn(){
  if (this.user.name && this.user.email && this.user.password.length >=6){
   
         this.$router.push({path: '/registration', query: this.user});
     
   } else {
    alert('Пожалуйста, заполните все поля и укажите пароль длиной не менее 6 символов.' );
   }
},
saveData() {
      localStorage.setItem('user', JSON.stringify(this.user ));
      
}
},

});
</script>