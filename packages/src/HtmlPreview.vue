<template>
  <div>
    <iframe
      :src="src"
      :width="width"
      :height="height"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '400',
    },
  },
};
</script>