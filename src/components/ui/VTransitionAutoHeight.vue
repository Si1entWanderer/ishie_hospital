<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

interface IProps {
    modelValue: boolean
    duration?: number
}

const { modelValue, duration = 0.3 } = defineProps<IProps>()

const content = ref<HTMLElement | null>(null)
const fixedHeight = ref<number>(0)

function onEnter(el: Element, done: () => void) {
    if (!content.value) {
        done()
        return
    }
    const height = content.value.offsetHeight

    const target = el as HTMLElement

    gsap.fromTo(
        el,
        {
            height: 0,
            overflow: 'hidden',
        },
        {
            height,
            duration: duration,
            ease: 'power2.out',
            onComplete: () => {
                target.style.height = 'auto'
                target.style.overflow = ''
                fixedHeight.value = target.offsetHeight
                done()
            },
        },
    )
}

function onLeave(el: Element, done: () => void) {
    if (!content.value) {
        done()
        return
    }

    const height = content.value.offsetHeight

    gsap.fromTo(
        el,
        {
            height: fixedHeight.value || height,
            overflow: 'hidden',
        },
        {
            height: 0,
            duration: duration * 0.8,
            ease: 'power2.in',
            onComplete: done,
        },
    )
}

onMounted(() => {
    if (modelValue && content.value) {
        fixedHeight.value = content.value.offsetHeight
    }
})
</script>

<template>
    <transition
        @enter="onEnter"
        @leave="onLeave"
        :css="false"
    >
        <div
            v-show="modelValue"
            ref="container"
            :class="$style.VTransitionAutoHeight"
        >
            <div
                :class="$style.inner"
                ref="content"
            >
                <slot />
            </div>
        </div>
    </transition>
</template>

<style lang="scss" module>
.VTransitionAutoHeight {
    display: block;
}

.inner {
    display: block;
}
</style>
