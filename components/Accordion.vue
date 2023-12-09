<template>
    <div>
        <CollapsibleText
            v-for="data in dataList"
            :key="data.label"
            :label="data.label"
            :opened="value == data.label"
            @signal:click="$emit('input', resolveValue(data.label))">
                {{ data.description }}
        </CollapsibleText>
    </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
    props: {
        dataList: {     // [{label: String, description: String}, ...]
            type: Array,
            default: () => ([])
        },
        value: {
            type: String,
            default: ""
        },
        allowAllClose: { // can all the items be in a closed state?
            type: Boolean,
            default: false
        }
    },
    emits: ['input'],
    setup(props) {
        const resolveValue = (v) => {
            if (props.value === v)
                return (props.allowAllClose) ? null : v
            return v
        }

        return {resolveValue}
    },
})
</script>
