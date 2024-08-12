<template>
  <img
    :src="imgSrc"
    class="cm-icon"
    :alt="props.alt"
    :style="`width: ${props.width}px; height: ${props.height}px`"
  />
</template>

<script setup>
import { useDark } from '@vueuse/core';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  darkName: {
    type: String,
    required: false,
    default: '',
  },
  extension: {
    type: String,
    default: 'svg',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
});

const isDark = useDark();

const imgSrc = computed(() => {
  if (isDark.value && props.darkName !== '') {
    return `/icon/${props.darkName}.${props.extension}`;
  } else {
    return `/icon/${props.name}.${props.extension}`;
  }
});
</script>
