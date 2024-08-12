<script setup lang="ts">
import type { ITextareaProps } from '~/types/custom-textarea';

const props = withDefaults(defineProps<ITextareaProps>(), {
  label: '',
  isRequired: false,
  labelPosition: '',
  modelValue: '',
  size: 'md',
  width: '100%',
  maxlength: '',
  placeholder: '입력해 주세요.',
  validMessage: '',
  readonly: false,
  disabled: false,
  useCount: false,
  useDelete: true,
  useResize: true,
});
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'blur'): void;
  (e: 'focus'): void;
}>();
const textareaValueRef = ref<HTMLInputElement | null>(null);

const textareaValue = (e: Event) => {
  const event = e.target as HTMLInputElement;
  emit('update:modelValue', event.value);
};

const clearInput = () => {
  emit('update:modelValue', '');
  textareaValueRef.value?.focus();
};

const focusTextarea = () => {
  textareaValueRef.value?.focus();
};

defineExpose({
  focusTextarea,
});
</script>

<template>
  <div
    :class="props.labelPosition === 'row' ? 'cm-textarea--row' : 'cm-textarea'"
  >
    <label
    v-if="props.label !==''" class='textfield__label'
      :class="[{'is-required' : props.isRequired}, `textfield__label--${props.size}`]"
      >
      {{ props.label }}
    </label>
    <div class="cm-textarea__wrapper">
      <div class="cm-textarea__input">
        <textarea
          ref="textareaValueRef"
          :value="modelValue"
          :readonly="props.readonly"
          :disabled="props.disabled"
          :placeholder="props.placeholder"
          :class="[{ 'is-resize': props.useResize },{ 'is-error': props.validMessage}]"
          @blur="emit('blur')"
          @focus="emit('focus')"
        />
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
