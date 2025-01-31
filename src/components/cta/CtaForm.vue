<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseBtn from '@/components/base/BaseBtn.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const name = ref('')
const phone = ref('')
const details = ref('')

const isNameValid = ref(true)
const isNameFocused = ref(false)
const isNameIcon = ref(false)
const nameErrorMsg = ref('')

const isPhoneValid = ref(true)
const isPhoneFocused = ref(false)
const isPhoneIcon = ref(false)
const phoneErrorMsg = ref('')

const isDetailsFocused = ref(false)

const isSubmitDisabled = computed(() => !isNameValid.value || !isPhoneValid.value)

const forbiddenInput = ['<script>', 'SELECT', 'DROP TABLE', 'INSERT']
function nameValidator() {
  name.value = name.value.replace(/[^a-zA-Z0-9 ]/g, '')
  isNameValid.value = true
  isNameIcon.value = false
  if (!name.value) {
    isNameValid.value = false
    nameErrorMsg.value = t('cta.required')
  } else if (name.value.length < 2 || name.value.length > 30) {
    isNameValid.value = false
    nameErrorMsg.value = t('cta.name-error')
  } else isNameValid.value = true

  isNameIcon.value = true
}

function nameBlur() {
  nameValidator()
  if (name.value) isNameFocused.value = true
  else isNameFocused.value = false
}

function phoneValidator() {
  phone.value = phone.value.replace(/[^0-9+]/g, '')
  isPhoneValid.value = true
  isPhoneIcon.value = false
  if (!phone.value) {
    isPhoneValid.value = false
    phoneErrorMsg.value = t('cta.required')
  } else if (phone.value.slice(0, 3) !== '+38' || phone.value.length !== 13) {
    isPhoneValid.value = false
    phoneErrorMsg.value = t('cta.phone-error')
  } else isPhoneValid.value = true

  isPhoneIcon.value = true
}

function phoneBlur() {
  phoneValidator()
  if (phone.value) isPhoneFocused.value = true
  else isPhoneFocused.value = false
}

function detailsBlur() {
  if (details.value) isDetailsFocused.value = true
  else isDetailsFocused.value = false
}

function preventNonNumeric(event: KeyboardEvent) {
  const key = event.key
  if (!/[0-9+]/.test(key) && key !== 'Backspace' && key !== 'ArrowLeft' && key !== 'ArrowRight') {
    event.preventDefault()
  }
}
function sanitizeInput(data: string) {
  return data
    .replace(/<[^>]*>?/gm, '')
    .replace(/javascript:/gi, '')
    .replace(/['"();]/g, '')
}
function containsForbidden(input:string) {
  return forbiddenInput.some((word) => input.toLowerCase().includes(word.toLowerCase()))
}
function handlePaste(event: ClipboardEvent) {
event.preventDefault()
const pastedData = event.clipboardData?.getData('text')

if(pastedData) details.value = sanitizeInput(pastedData)
detailsVlidator()

}
function detailsVlidator() {
  details.value = sanitizeInput(details.value)
  if(containsForbidden(details.value)) details.value = 'Your message contains disallowed words.'
}

const emit = defineEmits<{
  (event: 'formSubmit', payload: { name: string; phone: string; details: string | null }): void
  (event: 'close'): void
}>()

function submitHandler() {
  nameValidator()
  phoneValidator()
  details.value = details.value.replace(/[^a-zA-Z0-9 ]/g, '')
  if (!isNameValid.value || !isPhoneValid.value) return

  emit('formSubmit', { name: name.value, phone: phone.value, details: details.value })
}
function closeHandler() {
  emit('close')
}
</script>
<template>
  <div class="form">
    <form class="form__content" @submit.prevent="submitHandler">
      <div class="form__left">
        <div class="form__field">
          <input
            class="form__input"
            type="text"
            id="name"
            name="name"
            autocomplete="name"
            minlength="2"
            maxlength="30"
            pattern="[a-zA-Z0-9 ]+"
            v-model.trim="name"
            @focus="isNameFocused = true"
            @blur="nameBlur"
            @input="nameValidator"
          />

          <p v-show="!isNameValid" class="form__error-msg">
            <span class="form__overline">{{ nameErrorMsg }}</span>
          </p>
          <BaseIcon
            v-show="isNameIcon && isNameValid"
            class="form__input-icon"
            name="success"
            path="icons"
          />
          <BaseIcon
            v-show="isNameIcon && !isNameValid"
            class="form__input-icon"
            name="error"
            path="icons"
          />
          <label class="form__label" :class="{ focused: isNameFocused }" for="name"
            >{{ t('cta.label-name') }}*</label
          >
        </div>
        <div class="form__field">
          <input
            class="form__input"
            type="tel"
            id="phone"
            name="phone"
            autocomplete="phone"
            minlength="13"
            maxlength="13"
            v-model="phone"
            @focus="isPhoneFocused = true"
            @blur="phoneBlur"
            @input="phoneValidator"
            @keypress="preventNonNumeric"
          />
          <p v-show="!isPhoneValid" class="form__error-msg">
            <span class="form__overline">{{ phoneErrorMsg }}</span>
          </p>
          <BaseIcon
            v-show="isPhoneIcon && isPhoneValid"
            class="form__input-icon"
            name="success"
            path="icons"
          />
          <BaseIcon
            v-show="isPhoneIcon && !isPhoneValid"
            class="form__input-icon"
            name="error"
            path="icons"
          />
          <label class="form__label" :class="{ focused: isPhoneFocused }" for="phone"
            >{{ t('cta.label-phone') }}*</label
          >
        </div>
      </div>
      <div class="form__right">
        <div class="form__field form__field--textarea">
          <textarea
            class="form__input form__input--textarea"
            name="details"
            id="details"
            autocomplete="off"
            maxlength="500"
            v-model.trim="details"
            @input="detailsVlidator"
            @paste="handlePaste"
            @focus="isDetailsFocused = true"
            @blur="detailsBlur"
          ></textarea>
          <label
            class="form__label form__label--textarea"
            :class="{ focused: isDetailsFocused }"
            for="details"
            >{{ t('cta.label-info') }}*</label
          >
        </div>
      </div>
      <div class="form__info">
        <div class="form__info-wrapper">
          <p class="form__text">{{ t('cta.info-text') }}</p>
          <p class="form__text">
            <span>{{ t('cta.privacy-text') }}</span>
            <RouterLink class="form__text-link" :to="{ name: 'privacy' }">{{
              t('cta.privacy-link')
            }}</RouterLink>
          </p>
        </div>
      </div>
      <BaseBtn
        class="form__btn"
        mode="primary"
        size="small"
        text="send"
        type="submit"
        :disabled="isSubmitDisabled"
      />
    </form>
    <BaseIcon @click="closeHandler" class="form__close" name="close" path="icons" />
  </div>
</template>
<style scoped lang="scss">
.form {
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &__content {
    width: 100%;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-s);
  }
  &__left {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-s);
  }
  &__right {
  }
  &__field {
    position: relative;
    font-family: 'Roboto', serif;
    font-weight: 300;
    font-style: normal;
    font-size: 1rem;
    line-height: 1.5rem;
    &--textarea {
      height: 100%;
    }
  }
  &__label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 24px;
    color: $placeholder;
    transition: all 0.5s ease-in-out;
    &--textarea {
      top: 12px;
      transform: none;
    }
  }

  &__input {
    display: block;
    width: 100%;
    height: 56px;

    border: 1px solid $input-default;
    border-radius: $radius;
    padding: 8px 24px 0;
    text-overflow: ellipsis;
    color: $primary;
    &:hover {
      border: 1px solid $primary;
    }
    &:focus {
      border: 1px solid $accent;
    }
  }
  &__input--textarea {
    height: 100%;
    resize: none;
    padding: 24px 24px 0;
  }
  &__input-icon {
    position: absolute;
    right: 24px;
    left: auto;
    top: 50%;
    transform: translateY(-50%);
  }
  &__error-msg {
    display: flex;
    position: absolute;
    transform: translateY(10%);

    color: $error;
  }
  &__overline {
    @include overline-dark();
  }
  &__info {
    @include overline-dark();
  }
  &__info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
  }
  &__text {
    color: $tertiary;
  }

  &__text-link {
    font-style: italic;
    &:hover {
      color: $primary;
    }
    &:active {
      color: $accent;
    }
  }

  &__close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: $tertiary;
    cursor: pointer;
    &:hover {
      color: $primary;
    }
    &:active {
      color: $accent;
    }
  }
  &__btn[disabled] {
    pointer-events: none;
    opacity: 0.4;
  }
}
::v-deep(input:-webkit-autofill) {
  background-color: $bg-globe !important; /* Match regular input background */
  border: 1px solid $input-default !important; /* Match regular input border */
  color: $primary !important; /* Match regular input text color */
  -webkit-text-fill-color: $primary !important; /* Force text color */
  box-shadow: 0 0 0px 1000px $bg-globe inset !important; /* Override yellow autofill */
  transition: background-color 0s ease-in-out 0s;
}
::v-deep(input:-webkit-autofill:focus) {
  border: 1px solid $accent !important;
  caret-color: $primary;
}
.focused {
  top: 12px;
  font-size: 12px;
  line-height: 12px;
}

@media (max-width: 48rem) {
  .form {
    &__btn {
      width: 100%;
    }
  }
}

@media (min-width: 64rem) {
  .form {
    &__content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: var(--grid-gutter-width);
      row-gap: var(--spacing-m);
      padding: 0 calc(var(--grid-column-width) + var(--grid-gutter-width));
    }
  }
}
</style>
