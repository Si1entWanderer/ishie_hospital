<script setup lang="ts">
import { computed, ref, useCssModule } from 'vue'

import { EIcons } from '@/assets/ts/enums'

import VTransitionAutoHeight from '@/components/ui/VTransitionAutoHeight.vue'
import VIcon from '@/components/ui/VIcon.vue'

interface IProps {
    label?: string
    isCollapsable?: boolean
    isOpenedByDefault?: boolean
    count?: number
}

const { label, isCollapsable = false, isOpenedByDefault = true, count } = defineProps<IProps>()

const $style = useCssModule()

const isExpanded = ref(isOpenedByDefault)

const classList = computed(() => ({
    [$style._expanded as string]: isExpanded.value || !isCollapsable,
}))

function onExpand() {
    if (isCollapsable) {
        isExpanded.value = !isExpanded.value
    }
}
</script>

<template>
    <div :class="[$style.VAdminInputWrapper, classList]">
        <div
            :class="$style.header"
            @click="onExpand"
        >
            <VIcon
                v-if="isCollapsable"
                :name="EIcons.solarArrowRight"
                :class="$style.arrow"
            />

            <div
                v-if="label"
                :class="$style.label"
            >
                {{ label }}
            </div>

            <Transition name="fade">
                <div
                    v-if="count"
                    :class="$style.count"
                >
                    {{ count }}
                </div>
            </Transition>
        </div>

        <VTransitionAutoHeight :modelValue="isExpanded">
            <div
                v-show="isExpanded"
                :class="$style.body"
            >
                <slot />
            </div>
        </VTransitionAutoHeight>
    </div>
</template>

<style module lang="scss">
.VAdminInputWrapper {
    background-color: var(--color-admin-input-wrapper-background);

    &._expanded {
        .arrow {
            transform: rotate(90deg);
        }
    }
}

.header {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px;
    color: var(--color-admin-text-tertiary);
    cursor: pointer;
}

.arrow {
    color: var(--color-admin-icon-default);
    transition: 0.3s transform;
}

.label {
    @include text-admin(caption-m);
}

.body {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 8px 8px 8px;
}

.count {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14px;
    width: 14px;
    margin-left: auto;
    border-radius: 8px;
    background-color: var(--color-admin-block-count-background);
    color: var(--color-admin-block-count-text);

    @include text-admin(small);
}
</style>
