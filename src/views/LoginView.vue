<script setup lang='ts'>
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router';
import BaseBtn from '@/components/base/BaseBtn.vue';

const role = ref('')
const password = ref('')
const isRoleValid = ref(true)
const isPassValid = ref(true)
const user = useUserStore()
const router = useRouter()

const isSubmitDisabled = computed(() => !isPassValid.value || !isRoleValid.value)

function submitHandler() {
	user.login(role.value, password.value)
	if (user.isAuthenticated) {
		router.push({ name: 'admin' })
	} else {
		alert('Invalid credentials')
	}
}
</script>

<template>
	<main class="login main-content">
		<div class="login__container container">
			<div class="login__wrapper">
				<h1 class="login__title">This is a login page</h1>
				<form @submit.prevent="submitHandler" class="login__form">
					<input type="text" placeholder="User Role" v-model="role" class="login__input">
					<input type="password" placeholder="Password" v-model="password" class="login__input">
					<BaseBtn
        class="login__btn"
        mode="primary"
        size="small"
        text="send"
        type="submit"
        :disabled="isSubmitDisabled"
      />
				</form>
			</div>
		</div>
	</main>
</template>

<style scoped lang='scss'>
.login {
	background-color: $bg-white;
	height: 100vh;

	&__container {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	&__wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: var(--spacing-s);
	}
	&__title {
		color: $primary-inv;
		@include h3-dark();
	}
	&__form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: var(--spacing-xxs);
	}
	&__input {
		display: inline-block;
		width: 100%;
		padding: 0.5rem 1rem;
		border: 1px solid $divider-light;
		border-radius: $radius;
		color: $primary-inv;
		@include normal-light();
	}
	&__input::placeholder {
		color: $placeholder-inv;
	}
	&__input:focus {
		border-color: $primary-inv;
	}
}
</style>
