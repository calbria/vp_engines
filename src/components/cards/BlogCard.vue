<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="card">
    <div class="card__wrapper">
      <div class="card__media">
        <img src="/images/blog/preview.png" alt="preview" class="card__img" />
      </div>
      <div class="card__content">
        <p class="card__date">25.02.2025</p>
        <p class="card__tag">автолюбителям</p>
        <h3 class="card__title">Сколько стоит капремонт:</h3>
        <p class="card__text">
          Точного ответа на этот вопрос не существует. Сумма формируется из стоимости работ по
          восстановлению, стоимости станочных работ (если необходимо) и стоимости запчастей. Все
          составляющие зависят от конкретной модели двигателя и характера неисправностей.
        </p>
        <RouterLink to="#" class="card__link">читать ...</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
	&__wrapper {
		
	}
}
</style>
