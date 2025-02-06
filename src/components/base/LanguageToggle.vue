<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useLanguageStore } from '@/stores/languageStore'

const { locale } = useI18n()
const lang: string[] = ['ua', 'ru']
function changeLang(lang: string) {
	locale.value = lang
	localStorage.setItem('language', lang)
}
</script>
<template>
	<div class="lang" v-for="(item, index) in lang" :key="item">
		<button class="lang__btn" :class="{ 'current-lang': item === locale }" @click="changeLang(item)" type="button"
			:aria-label="`Switch language to ${item}`" aria-live="polite">
			<span class="lang__btn-text">
				{{ item.toLocaleUpperCase() }}
			</span>
		</button>
		<span class="lang__divider lang__btn-text" v-if="index < lang.length - 1">|</span>
	</div>
</template>
<style scoped lang="scss">
.lang {

	&__btn {

		height: 2.25rem;
		padding-inline: 0.25rem;

		&:hover {
			color: $primary;
		}

		&:active {
			color: $accent;
		}
	}

	&__btn-text {
		@include menu();
	}

	&__divider {
		position: relative;
		bottom: 1px;
	}
}

.current-lang {
	color: $primary;
}
</style>
