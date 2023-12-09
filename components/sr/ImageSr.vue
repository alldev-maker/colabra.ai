<template>
    <div class="mb-5 border border-gray-200 rounded-md overflow-hidden">
        <img class="" :alt="alt" :src="$urlFor(asset)"/>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        alt: {
            type: String,
            default: '',
        },
        asset: {
            type: Object,
            default: null
        }
    }
})
</script>
