<template>
    <div>
        <template v-if="code && language==='html'">
            <div class="mb-10" v-html="code"/>
        </template>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        code: {
            type: String,
            default: null
        },
        language: {
            type: String,
            default: 'html'
        }
    }
})
</script>
