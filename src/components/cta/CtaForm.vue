<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseBtn from '@/components/base/BaseBtn.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'

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

function nameValidator() {

  isNameValid.value = true
  isNameIcon.value = false
if(!name.value) {
  isNameValid.value = false
  nameErrorMsg.value = 'This field is required'
} else if(name.value.length < 2 || name.value.length > 50 ) {
    isNameValid.value = false
  nameErrorMsg.value = 'Please enter more than 2 and less than 50 symbols'
} else isNameValid.value = true
  
isNameIcon.value = true

}


function nameBlur() {
 nameValidator()
if(name.value) isNameFocused.value = true
else isNameFocused.value = false
}


function phoneValidator() {
console.log('Validate phone');
isPhoneValid.value = true
isPhoneIcon.value = false
if(!phone.value) {
  isPhoneValid.value = false
  phoneErrorMsg.value = 'This field is required'
} else if(phone.value.slice(0, 3) !== '+38' || phone.value.length !== 13) {
    isPhoneValid.value = false
  phoneErrorMsg.value = 'Please enter the valid phone number starting with +38'
} else isPhoneValid.value = true

isPhoneIcon.value = true

}

function phoneBlur() {
phoneValidator()
if(phone.value) isPhoneFocused.value = true
else isPhoneFocused.value = false
}

function detailsBlur() {
if(details.value) isDetailsFocused.value = true
else isDetailsFocused.value = false
}

function preventNonNumeric (event: KeyboardEvent) {
      const key = event.key;
      if (!/[0-9+]/.test(key) && key !== 'Backspace' && key !== 'ArrowLeft' && key !== 'ArrowRight') {
        event.preventDefault();
      }
    };

const emit = defineEmits(['formSubmit', 'close'])
function submitHandler() {
  nameValidator()
  phoneValidator()
  if(!isNameValid.value || !isPhoneValid.value) return
  console.log({ name: name.value, phone: phone.value, details: details.value })
  emit('formSubmit')
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
          type="text" id="name"  
          name="name"
          autocomplete="name"
          v-model.trim="name" 
          @focus="isNameFocused = true"
          @blur="nameBlur"
          @input="nameValidator"/>
         
         <span v-show="!isNameValid" class="form__error-msg">{{nameErrorMsg}}</span>
         <BaseIcon v-show="isNameIcon && isNameValid" class="form__input-icon" name="success" path="icons"/>
         <BaseIcon v-show="isNameIcon && !isNameValid" class="form__input-icon" name="error" path="icons"/>
          <label class="form__label" :class="{'focused': isNameFocused}" for="name">Name*</label>
        </div>
        <div class="form__field">
          <input 
          class="form__input" 
          type="tel" id="phone"
          name="phone" 
          autocomplete="phone" 
          v-model="phone" 
          @focus="isPhoneFocused = true"
          @blur="phoneBlur"
       @input="phoneValidator"
          @keypress="preventNonNumeric"/>
         <span v-show="!isPhoneValid" class="form__error-msg">{{phoneErrorMsg}}</span>
         <BaseIcon v-show="isPhoneIcon && isPhoneValid" class="form__input-icon" name="success" path="icons"/>
         <BaseIcon v-show="isPhoneIcon && !isPhoneValid" class="form__input-icon" name="error" path="icons"/>
          <label class="form__label" :class="{'focused': isPhoneFocused}" for="phone">Phone*</label>
        </div>
      </div>
      <div class="form__right">
        <div class="form__field">
          <textarea
            class="form__input"
            name="details"
            id="details"
            v-model.trim="details"
            @focus="isDetailsFocused = true"
            @blur="detailsBlur"
          ></textarea>
          <label class="form__label" :class="{'focused': isDetailsFocused}"  for="details">Additional info</label>
        </div>
      </div>
      <BaseBtn class="form__btn" mode="primary" size="small" text="send" type="submit" :disabled="isSubmitDisabled"/>
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
  }
  &__left {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-s);
  }
  &__field {
    position: relative;
    font-family: 'Roboto', serif;
    font-weight: 300;
    font-style: normal;
    font-size: 1rem;
    line-height: 1.25rem;
  }
  &__label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 24px;
    color: $placeholder;
    transition: all 0.5s ease-in-out;
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
  &__input-icon {
    position: absolute;
    right: 24px;
    left: auto;
    top: 50%;
    transform: translateY(-50%);
  }
  &__error-msg {
    position: absolute;
    transform: translateY(50%);
    font-size: 12px;
      line-height: 12px;
      color: $error;
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
    &__btn {
      grid-column: 2 / 3;
    }
  }
}
</style>
