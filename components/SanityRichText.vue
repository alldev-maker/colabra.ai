<template>
    <div id="sanity-content">
        <slot name="before"/>
        <SanityContent
            v-if="isValidBlock(blocks)"
            :blocks="blocks"
            :serializers="{...sr, ...serializers}"/>
        <slot name="after"/>
    </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import ImageSr from './sr/ImageSr.vue'
import YouTubeSr from './sr/YouTubeSr.vue'
import CodeSr from './sr/CodeSr.vue'

export default defineComponent({
    props: {
        blocks: {
            required: true,
            type: Array
        },
        serializers: {
            type: Object,
            default: () => ({})
        }
    },
    setup(){
        const sr = ref({
            types: {
                image: ImageSr,
                youtube: YouTubeSr,
                code: CodeSr
            }
        })

        const isValidBlock = (block) => {
            return block && Array.isArray(block)
        }
        return {sr, isValidBlock}
    }
})
</script>

<style scoped>
#sanity-content a{
    font-weight: bold;
    @apply text-ui-primary;
}

#sanity-content a:hover{
    text-decoration: underline;
    text-decoration-color: var(--color-ui-primary-dark);
}

#sanity-content ul{
    list-style-type: square;
    list-style: inside;
}

#sanity-content h2{
    @apply mt-10 font-sans;
}
</style>