<template>
  <!-- TODO: might need to remove this -->
  <div class="mb-10" v-html="$md.render(body.markup)"></div>
</template>

<script>
export default {
  props: {
    body: {
      type: Object,
      required: true,
    },
  },
}
</script>
