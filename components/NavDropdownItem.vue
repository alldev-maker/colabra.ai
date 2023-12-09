<template>
    <div class="group popup-parent cursor-pointer relative md:px-1 md:py-3 flex justify-center rounded-md flex-col gap-2 hover:text-ui-primary text-ui-typo">
        <span class=" group-hover:bg-ui-backgroundTertiary nav-link">
            <slot>Navlink</slot>
        </span>

        <div ref="popupRef" class="popup" @click="hidePopup(), $emit('signal:close')">
            <slot name="popup" />
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
    setup() {
        const popupRef = ref(null)
        const hidePopup = () => {
            const hidden = 'hidden'
            const popup = popupRef.value

            popup.classList.add(hidden)
            window.setTimeout(()=>popup.classList.remove(hidden), 20)
        }
        return {popupRef, hidePopup}
    },
})
</script>

<style scoped>
.popup-parent{
    -webkit-tap-highlight-color: transparent;
}

.popup{
    @apply top-12 -left-1;
    @apply md:absolute overflow-hidden;
    @apply group-hover:p-3 group-hover:border group-hover:w-full;
    @apply group-hover:h-auto group-hover:overflow-visible;
    @apply group-hover:transition-none group-hover:opacity-100;
    @apply duration-200 pointer-events-none;
    @apply bg-white rounded md:rounded-md border-gray-200;
    @apply md:p-3 md:w-max w-full md:h-auto h-0 border-0 opacity-0;
}

@screen md{
    .popup{
        @apply group-hover:w-max;
        box-shadow: 0px 10px 36px rgba(0, 0, 0, 0.1);
        @apply group-hover:pointer-events-auto;
    }
}

</style>

