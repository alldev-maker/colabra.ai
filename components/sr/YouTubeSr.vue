<template>
<div class="mb-10">
    <div style="position: relative; padding-bottom: 56.25%; height: 0;">
        <iframe
            v-if="url"
            class="w-full"
            :src="ytEmbedded(url)"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"/>
    </div>
</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        url: {
            type: String,
            default: null
        }
    },
    setup() {
        const ytEmbedded = (link) => {
            const _url = new URL(link)
            let id = null
            
            if (_url.hostname === "youtu.be" || _url.host === "youtu.be") id = _url.pathname.slice(1)
            else id = _url.searchParams.get('v')
            
            if (id) return `https://www.youtube.com/embed/${id}`
            return ''
        }
        return {ytEmbedded}
    },
})
</script>
