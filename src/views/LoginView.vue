<script setup lang='ts'>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router';

const role = ref('')
const password = ref('')
const user = useUserStore()
const router = useRouter()

function submitHandler() {
  if(role.value === 'admin' && password.value === 'pass123') {
    user.login('admin')
    router.push({name: 'admin'})
  } else {
    alert('Invalid credentials')
  }
}
</script>

<template>
<main>
  <h1>This is a login page</h1>
  <form @submit.prevent="submitHandler">
    <input type="text" placeholder="User Role" v-model="role">
    <input type="password" placeholder="Password" v-model="password">
    <button type="submit">Submit</button>
  </form>
</main>
</template>

<style scoped lang='scss'></style>

