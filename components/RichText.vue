<template>
  <div>
    <div
      v-if="document"
      class="body"
      :class="{ 'anchor-underline': anchorUnderline }"
    >
      <RichTextRenderer :document="document" />
    </div>
    <div
      v-else
      class="body"
      :class="{ 'anchor-underline': anchorUnderline }"
      v-html="html"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    html: {
      type: String,
      default: '',
    },
    anchorUnderline: {
      type: Boolean,
      default: true,
    },
    document: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="postcss" scoped>
.body >>> p {
  @apply mb-5 text-lg;
}

.body >>> p:last-child {
  @apply mb-0;
}

.body >>> h1,
.body >>> h2,
.body >>> h3,
.body >>> h4,
.body >>> h5,
.body >>> h6 {
  @apply mt-10 mb-3 font-semibold;
  &:first-child {
    @apply mt-0;
  }
}

.body >>> h3,
.body >>> h4,
.body >>> h5,
.body >>> h6 {
  @apply mt-6  mb-2 font-sans;
}

.body >>> h2 {
  @apply text-2xl;
}

.body >>> h3 {
  @apply text-xl;
}

.body >>> h4 {
  @apply text-lg;
}

.body >>> img {
  @apply rounded-md border border-ui-border;
}

.body >>> a {
  @apply text-ui-primary font-semibold no-underline;
  &:hover {
    @apply underline;
  }
}

.body >>> ul {
  @apply list-disc pl-5 mb-10;
}

.body >>> ul > li > p {
  @apply m-0;
}

.body >>> ul > li > ul {
  list-style-type: circle;
  @apply m-0;
}
</style>
