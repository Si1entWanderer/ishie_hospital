<script setup lang="ts">
import { computed, ref, useCssModule } from 'vue'

import { EIcons } from '@/assets/ts/enums'

import VButton from '@/components/ui/VButton.vue'
import VIconButton from '@/components/ui/VIconButton.vue'
import VNavigation from '@/components/ui/VNavigation.vue'

const BACK_BUTTON_TEXT = '← К списку больных'

const emit = defineEmits<{
    clickPrev: []
    clickNext: []
}>()

const $style = useCssModule()

const isLinkCopied = ref(false)
const timeout = ref<number | null>(null)

const shareButtonClassList = computed(() => ({
    [$style._withTooltip]: isLinkCopied.value,
}))

function onPrintClick() {
    window.print()
}

async function onShareClick() {
    try {
        const textToCopy = window.location.href
        await navigator.clipboard.writeText(textToCopy)
        isLinkCopied.value = true
    } catch (err) {
        console.error('Failed to copy text: ', err)
    } finally {
        if (timeout.value) {
            clearTimeout(timeout.value)
        }

        timeout.value = setTimeout(() => {
            isLinkCopied.value = false
        }, 1500)
    }
}
</script>

<template>
    <div :class="$style.ActionsBlock">
        <RouterLink :class="$style.back" to="/">
            <VButton :class="$style.backButton">
                {{ BACK_BUTTON_TEXT }}
            </VButton>
        </RouterLink>

        <div :class="$style.actions">
            <VIconButton :icon="EIcons.print" @click="onPrintClick" />

            <VIconButton
                :icon="EIcons.share"
                :class="[$style.share, shareButtonClassList]"
                @click="onShareClick"
            />

            <VNavigation @click-prev="emit('clickPrev')" @click-next="emit('clickNext')" />
        </div>
    </div>
</template>

<style lang="scss" module>
.ActionsBlock {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include respond-to(mobile) {
        flex-direction: column;
        align-items: flex-end;
        gap: 12px;
    }
}

.back {
    text-decoration: none;

    @include respond-to(mobile) {
        width: 100%;
    }
}

.backButton {
    width: 100%;
}

.actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.share {
    &::before {
        content: 'Ссылка скопирована';
        position: absolute;
        top: -12px;
        right: 0;
        padding: 8px 12px;
        border: 4px solid $pink-100;
        border-radius: 12px;
        background-color: white;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-100%);
        transition: 0.3s opacity;
        white-space: nowrap;

        @include text(p4);
    }

    &._withTooltip {
        &::before {
            opacity: 1;
        }
    }
}
</style>
