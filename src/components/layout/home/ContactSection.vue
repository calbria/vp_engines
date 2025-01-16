<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseBtn from '@/components/base/BaseBtn.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import BaseLink from '@/components/base/BaseLink.vue'

const { t } = useI18n()
const isPrevVisible = ref(true)
function showMap() {
  isPrevVisible.value = false
}
</script>
<template>
  <section class="contact">
    <div class="contact__container container">
      <div class="contact__content">
        <div class="contact__content-text">
          <SectionHeader
            class="contact__title"
            :title="t('home.contacts.title')"
            :subtitle="t('home.contacts.subtitle')"
          />
        </div>
        <div class="contact__info">
          <div class="contact__menu-block">
            <div class="contact__menu">
              <h5 class="contact__menu-title">{{ t('common.address') }}:</h5>
              <div class="contact__address contact__menu-text">
                <BaseLink
                  type="outer"
                  destination="https://maps.app.goo.gl/HG8oG2uVhTJVXAAv9"
                  icon-name="pin"
                  :text="t('common.street')"
                />
                <span>{{ t('common.sity') }}</span>
              </div>
            </div>
            <div class="contact__menu">
              <h5 class="contact__menu-title">{{ t('common.working-hours') }}:</h5>
              <div class="contact__time">
                <span class="contact__menu-text">{{ t('common.days') }}</span>
                <span class="contact__menu-text">9.00-18.00</span>
              </div>
            </div>
          </div>
          <div class="contact__menu-block">
            <div class="contact__menu">
              <h5 class="contact__menu-title">{{ t('common.contacts') }}:</h5>
              <div class="contact__address contact__menu-text">
                <BaseLink
                  type="outer"
                  destination="mailto:vovk.pavel1995@gmail.com"
                  icon-name="mail"
                text="vovk.pavel1995@gmail.com"
                />
                <BaseLink type="outer" destination="tel:+380963167243" icon-name="call" text="+38(096) 316 72 43" />
              </div>
            </div>
            <div class="contact__menu">
              <h5 class="contact__menu-title">{{ t('common.social') }}:</h5>
              <div class="contact__social">
								<BaseLink type="outer"
									destination="https://studio.youtube.com/channel/UCP5bm6hD8vBEaTHnCUQ5kHg/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D"
									icon-name="youtube" />
								<BaseLink type="outer" destination="https://t.me/Pavel190695" icon-name="telegram" />
								<BaseLink type="outer" destination="https://www.instagram.com/vaghub.od/" icon-name="instagram" />
							</div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact__media">
        <Transition name="fade">
          <div v-if="isPrevVisible" class="contact__map-block">
            <BaseBtn
              @click="showMap"
              class="contact__btn"
              mode="secondary"
              size="large"
              text="map"
            />
          </div>
        </Transition>
        <iframe
          v-if="!isPrevVisible"
          class="contact__map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2753.105490547142!2d30.6989441!3d46.367295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6337f3229248d%3A0xaa13a7b838fbbcf9!2sVAGhub%20CAR%20Service%20Odessa!5e0!3m2!1sen!2sua!4v1737028021769!5m2!1sen!2sua"
          width="800"
          height="600"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.contact {
  &__container {
    padding: var(--spacing-m) 0;
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-m);
  }
  &__media {
    width: 100%;
    aspect-ratio: 3 / 4;
    overflow: hidden;
  }
  &__map {
    height: 100%;
    width: 100%;
  }
  &__map-block {
    width: 100%;
    height: 100%;
    background-image: url('/images/map_prev.png');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;

    align-items: center;
    justify-content: center;
  }
  &__img {
    width: 100%;
    object-fit: cover;
  }
  &__content {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-s);
  }
  &__content-text {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xs);
  }
  &__info {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-s);
  }
  &__menu {
    color: $primary;
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xs);
  }
  &__menu-block {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xs);

  }
  &__menu-title {
    @include h4-dark();
  }
  &__menu-text {
    @include normal-dark();
  }
  &__address,
  &__time, &__social {
    color: $secondary;
  }

  &__time {
    display: flex;
    column-gap: var(--spacing-l);
  }
  &__address {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }
  &__social {

    display: flex;
    column-gap: var(--spacing-xs);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@media (min-width: 48rem) {
  .contact {
    &__media {
      aspect-ratio: 4 / 3;
    }
    &__info {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: var(--grid-gutter-width);
    }
  }
}
@media (min-width: 64rem) {
  .contact {
    &__container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: var(--grid-gutter-width);
      align-items: center;
    }
    &__media {
      order: initial;

      height: 100%;
    }

    &__content {
      justify-content: center;
    }

    &__info {
      display: flex;
      flex-direction: row;
      column-gap: var(--grid-gutter-width);
      justify-content: space-between;
    }
    &__menu-block {

      display: flex;
      flex-direction: column;
      row-gap: var(--spacing-xs);
    }
  }
}
@media (min-width: 80rem) {
  .contact {
    &__menu-block {
      width: calc(var(--grid-column-width) * 3 + var(--grid-gutter-width) * 2);
      display: flex;
      flex-direction: column;
      row-gap: var(--spacing-xs);
    }
  }
}
</style>
