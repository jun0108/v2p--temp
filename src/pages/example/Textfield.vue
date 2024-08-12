<script setup lang="ts">
const input = ref({
  default: '',
  readonly: 'readonly 상태입니다',
  disabled: 'disabled 상태입니다',
  isError: '유효성 검사',
});
</script>
<template>
  <div>
    <h2 class="text-3xl font-600">Textfield</h2>

    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-500"> input </mark>
      <div class="flex-col space-y-3">
        <CmInput v-model="input.default" label="기본 상태(세로형)" isRequired/>
        <CmInput
          v-model="input.default"
          label="기본 상태(가로형)"
          labelPosition="row"
        />
        <CmInput v-model="input.default" label="sm size" size="sm" />
        <CmInput v-model="input.default" label="md size" />
        <CmInput v-model="input.default" label="lg size" size="lg" />
        <CmInput v-model="input.readonly" label="readonly" readonly />
        <CmInput v-model="input.disabled" label="disabled" disabled />
        <CmInput
          v-model="input.isError"
          label="validate"
          validMessage="에러입니다"
        />
      </div>
    </div>

    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-500"> textarea </mark>
      <div class="flex-col space-y-3">
        <CmTextarea v-model="input.default" label="기본 상태(세로형)" />
        <CmTextarea
          v-model="input.default"
          label="기본 상태(가로형)"
          labelPosition="row"
        />
        <CmTextarea v-model="input.default" placeholder="sm size" size="sm" />
        <CmTextarea v-model="input.default" placeholder="md size" />
        <CmTextarea v-model="input.default" placeholder="lg size" size="lg" />
        <CmTextarea v-model="input.readonly" readonly />
        <CmTextarea v-model="input.disabled" disabled />
        <CmTextarea v-model="input.isError" validMessage="에러입니다" />
      </div>
    </div>
  </div>
</template>

<style></style>
