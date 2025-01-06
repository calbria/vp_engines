<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BaseIcon from '@/components/base/BaseIcon.vue'
import BaseLink from '@/components/base/BaseLink.vue'

const { t } = useI18n()

const menu_1 = ['working-process', 'repair', 'tuning', 'expertise']
const menu_2 = ['about', 'blog', 'projects', 'contacts']
</script>
<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__wrapper">
        <BaseIcon class="footer__logo" name="logo_footer" path="logo" />
        <div class="footer__content">
          <div class="footer__menu">
            <h5 class="footer__title">{{ t('common.menu') }}:</h5>
            <div class="footer__menu-content">
              <ul class="footer__menu-list">
                <li v-for="item in menu_1" :key="item">
                  <BaseLink type="inner" :destination="item" :text="t(`common.${item}`)" />
                </li>
              </ul>
              <ul class="footer__menu-list">
                <li v-for="item in menu_2" :key="item">
                  <BaseLink type="inner" :destination="item" :text="t(`common.${item}`)" />
                </li>
              </ul>
            </div>
            <div class="footer__menu-divider"></div>
          </div>

          <div class="footer__block">
            <div class="footer__menu">
              <h5 class="footer__title">{{ t('common.address') }}:</h5>
              <div class="footer__contact">
                <BaseLink
                  type="outer"
                  destination="https://maps.app.goo.gl/HG8oG2uVhTJVXAAv9"
                  icon-name="pin"
                  :text="t('common.street')"
                />
                <span>{{ t('common.sity') }}</span>
              </div>
            </div>
            <div class="footer__menu">
              <h5 class="footer__title">{{ t('common.working-hours') }}:</h5>
              <div class="footer__time">
                <span>{{ t('common.days') }}</span>
                <span>9.00-18.00</span>
              </div>
            </div>
          </div>
          <div class="footer__block">
            <div class="footer__menu">
              <h5 class="footer__title">{{ t('common.contacts') }}:</h5>
              <div class="footer__contact">
                <BaseLink
                  type="outer"
                  destination="mailto:vovkpavel1995@gmail.com"
                  icon-name="mail"
                  text="vovkpavel1995@gmail.com"
                />
                <BaseLink
                  type="outer"
                  destination="tel:+380963167243"
                  icon-name="call"
                  text="+38(096) 316 72 43"
                />
              </div>
            </div>
            <div class="footer__menu">
              <h5 class="footer__title">{{ t('common.social') }}:</h5>
              <div class="footer__social">
                <BaseLink
                  type="outer"
                  destination="https://studio.youtube.com/channel/UCP5bm6hD8vBEaTHnCUQ5kHg/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D"
                  icon-name="youtube"
                />
                <BaseLink
                  type="outer"
                  destination="https://t.me/Pavel190695"
                  icon-name="telegram"
                />
                <BaseLink
                  type="outer"
                  destination="https://www.instagram.com/vaghub.od/"
                  icon-name="instagram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="div">© Copyright 2024 VP Engines</div>
        <div class="div">
          <BaseLink type="inner" destination="priivacy" :text="t(`common.privacy`)" />
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped lang="scss">
.footer {
  @include small-dark();
  color: $tertiary;
  background-color: $bg-black;
  &__wrapper {
    padding: var(--spacing-l) 0;
    border-bottom: 1px solid $divider;
  }
  &__logo {
    padding-bottom: var(--spacing-l);
    width: 240px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
  &__menu {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xs);
  }
  &__menu-content {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xxs);
  }
  &__menu-divider {
    width: 100%;
    height: 1px;
    background-color: $divider;
  }
  &__menu-list {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xxs)
  }
  &__title {
    @include menu();
    color: $primary;

    &--invisible {
      opacity: 0;
    }
  }
  &__block {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
  }
  &__contact {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-xxs);
  }
  &__time {
    display: flex;
    column-gap: 7.25rem;
  }
  &__social {
    display: flex;
    align-items: center;
    column-gap: 1.5rem;
  }
  &__bottom {
      padding: var(--spacing-s) 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: var(--spacing-xxs);
    }
}
@media (min-width: 48rem) {
  .footer {

    &__content {
      
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: var(--grid-gutter-width);
      row-gap: var(--spacing-s);
    }
    &__menu {
      grid-column: span 2;
    }
    &__menu-content {

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: var(--grid-gutter-width);
  }
    &__block {
      grid-column: span 1;
    }
    &__bottom {

      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
}
@media (min-width: 80rem) {
  .footer {
    &__logo {
      width: 309px;
    }
    &__content {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: var(--grid-gutter-width);
      row-gap: var(--spacing-s);
    }
    &__menu-content {
      flex-grow: 1;
  
  }
  &__menu-list {

    justify-content: space-between;
  
  }
  &__menu-divider {
display: none;
  }

  }
}
</style>
