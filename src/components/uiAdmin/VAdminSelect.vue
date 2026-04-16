<script setup lang="ts">
import type { ISelectOption } from '@/@types/uiAdmin'

import { computed, ref, useCssModule } from 'vue'

import VTransitionAutoHeight from '../ui/VTransitionAutoHeight.vue'
import { useClickOutside } from '@/composables/useClickOutside'

const DEFAULT_PLACEHOLDER = 'Выберите вариант…'

interface IProps {
    options: ISelectOption[]
    modelValue: string | number | null
    placeholder?: string
}

const { options, modelValue, placeholder = DEFAULT_PLACEHOLDER } = defineProps<IProps>()

const emit = defineEmits<{
    'update:modelValue': [string | number]
}>()

const $style = useCssModule()

const isOpened = ref(false)
const selectRef = ref<HTMLElement | null>(null)

const currentPlaceholder = computed(() => {
    if (modelValue) {
        const currentOption = options.find((option) => option.value === modelValue)
        return currentOption ? currentOption.label : placeholder
    }
    return placeholder
})

const classList = computed(() => ({
    [$style._active as string]: modelValue,
}))

function onChange(value: string | number) {
    emit('update:modelValue', value)
    isOpened.value = !isOpened.value
}

function onPreviewClick() {
    isOpened.value = !isOpened.value
}

function getItemClassList(value: string | number | null) {
    return {
        [$style._active as string]: value === modelValue,
    }
}

useClickOutside(selectRef, () => {
    isOpened.value = false
})
</script>

<template>
    <div
        :class="[$style.VAdminSelect, classList]"
        ref="selectRef"
    >
        <div
            :class="$style.preview"
            @click="onPreviewClick"
        >
            {{ currentPlaceholder }}
        </div>

        <div :class="$style.options">
            <VTransitionAutoHeight :modelValue="isOpened">
                <ul :class="$style.list">
                    <li
                        v-for="option in options"
                        :key="option.value"
                        :class="[$style.listItem, getItemClassList(option.value)]"
                        @click="onChange(option.value)"
                    >
                        {{ option.label }}
                    </li>
                </ul>
            </VTransitionAutoHeight>
        </div>

        <select
            :class="$style.input"
            :value="modelValue"
        >
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<style module lang="scss">
.VAdminSelect {
    position: relative;

    &._active {
        .preview {
            color: var(--color-admin-text-primary);
        }
    }
}

.preview {
    padding: 8px 12px;
    border: 1px solid var(--color-admin-input-stroke);
    background-color: var(--color-admin-input-background);
    color: var(--color-admin-input-placeholder);
    cursor: pointer;

    @include text-admin(body);
}

.input {
    display: none;
}

.options {
    position: absolute;
    top: calc(100% + 12px);
    left: 0;
    width: 100%;
    z-index: 2;
}

.list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    border: 1px solid var(--color-admin-input-stroke);
    background-color: var(--color-admin-input-background);
    list-style: none;
}

.listItem {
    padding: 6px 12px;
    color: var(--color-admin-text-tertiary);
    cursor: pointer;
    transition: 0.3s background-color;

    @include text-admin(body);

    &:hover {
        background-color: var(--color-admin-input-hover);
    }

    &._active {
        background-color: var(--color-admin-input-hover);
        color: var(--color-admin-text-primary);
    }
}
</style>
