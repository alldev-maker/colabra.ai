<template>
    <div class="mb-1">
        <div :class="[opened ? 'bg-ui-backgroundTertiary' : '']" class="rounded-md px-1 w-full h-full" @click="$emit('click')" >
            <slot>Navlink</slot>
        </div>

        <div v-if="opened">
            <slot name="popup"/>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        opened: {
            type: Boolean,
            default: false
        }
    }
})
</script>
