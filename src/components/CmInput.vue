<script setup lang="ts">
import type { IInputProps } from '~/types/custom-input';

const props = withDefaults(defineProps<IInputProps>(), {
  label: '',
  isRequired: false,
  labelPosition: '',
  modelValue: '',
  type: 'text',
  size: 'md',
  width: '100%',
  maxlength: '',
  placeholder: '입력해 주세요.',
  prefixIcon: '',
  validMessage: '',
  readonly: false,
  disabled: false,
  useShowPassword: false,
  useComma: false,
  useCount: false,
  useDelete: true,
  isSearch: false,
});
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'blur'): void;
  (e: 'keypressEnter'): void;
  (e: 'focus'): void;
  (e: 'search'): void;
}>();
const inputModelValueRef = ref<HTMLInputElement | null>(null);
const showingPassword = ref<boolean>(false);

const onlyNumbers = (targetNum: string) => {
  return targetNum.replace(/[^0-9]/g, '');
};

const getInputType = computed(() => {
  if (props.type === 'text') {
    return 'text';
  }
  if (props.type === 'number') {
    return 'text';
  }
  if (props.type === 'password') {
    return 'password';
  }
});

const getInputValue = (e: Event) => {
  const event = e.target as HTMLInputElement;
  let formatValue: string | number = event.value;
  if (props.type === 'number') {
    formatValue = onlyNumbers(event.value);
  }
  if (props.type === 'number' && props.useComma) {
    formatValue = onlyNumbers(event.value);
  }
  emit('update:modelValue', formatValue);
};

const clearInput = () => {
  emit('update:modelValue', '');
  inputModelValueRef.value?.focus();
};

const showPassword = () => {
  showingPassword.value = !showingPassword.value;

  inputModelValueRef.value?.getAttribute('type') === 'password'
    ? inputModelValueRef.value?.setAttribute('type', 'text')
    : inputModelValueRef.value?.setAttribute('type', 'password');
};

const focusInput = () => {
  inputModelValueRef.value?.focus();
};

defineExpose({
  focusInput,
});
</script>

<template>
  <div :class="props.labelPosition === 'row' ? 'cm-input--row' : 'cm-input'">
    <label
    v-if="props.label !==''" class='textfield__label'
      :class="[{'is-required' : props.isRequired}, `textfield__label--${props.size}`]"
      >
      {{ props.label }}
    </label>
    <div class="cm-input__wrapper">
      <div class="cm-input__input">
        <span
          v-if="props.prefixIcon"
          class="textfield__prefix-icon"
          @click="inputModelValueRef?.focus()"
        >
          <Icon :name="props.prefixIcon" width="20" height="20" alt="" />
        </span>

        <input
          ref="inputModelValueRef"
          :value="modelValue"
          :type="getInputType"
          :readonly="props.readonly"
          :disabled="props.disabled"
          :placeholder="props.placeholder"
          :class="[
            `input--${props.size}`,
            { 'use-prefix': props.prefixIcon },
            { 'use-suffix': props.useDelete },
            { 'is-error': props.validMessage }
          ]"
          @blur="emit('blur')"
          @keypress.enter="emit('keypressEnter')"
          @focus="emit('focus')"
          @input="getInputValue"
        />
        <button
          v-if="
            props.useDelete &&
            modelValue &&
            !props.useShowPassword &&
            !props.useCount &&
            !props.disabled &&
            !props.readonly &&
            !props.isSearch
          "
          type="button"
          class="textfield__suffix-icon"
          @click="clearInput"
        >
          <Icon
            name="delete__circle--eae"
            width="16"
            height="16"
            alt="내용 초기화"
          />
        </button>
      </div>
      <div v-if="props.validMessage" class="textfield__valid">
        <Icon name="caution__full--ea3" width="24" height="24" alt="" />
        <p>
          {{ props.validMessage }}
        </p>
      </div>
    </div>
  </div>
</template>
