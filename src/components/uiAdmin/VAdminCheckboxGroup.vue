<script setup lang="ts">
import type { ICheckboxOption } from '@/@types/uiAdmin'
import { EIcons } from '@/assets/ts/enums'

import VIcon from '@/components/ui/VIcon.vue'

interface IProps {
    options: ICheckboxOption[]
    modelValue: (string | number)[]
    name: string
}

const { options, modelValue } = defineProps<IProps>()

const emit = defineEmits<{
    'update:modelValue': [value: (string | number)[]]
}>()

function onChange(value: string | number) {
    const isInModelValues = modelValue.includes(value)

    const newValues = isInModelValues
        ? modelValue.filter((val) => val !== value)
        : [...modelValue, value]

    emit('update:modelValue', newValues)
}
</script>

<template>
    <ul :class="$style.VAdminCheckboxGroup">
        <li
            v-for="option in options"
            :key="option.value"
        >
            <label :class="$style.option">
                <input
                    type="checkbox"
                    :class="$style.input"
                    :value="option.value"
                    :checked="modelValue.includes(option.value)"
                    @change="onChange(option.value)"
                />

                <div :class="$style.checkbox">
                    <VIcon
                        :name="EIcons.check"
                        :class="$style.icon"
                    />
                </div>

                <span>
                    {{ option.label }}
                </span>
            </label>
        </li>
    </ul>
</template>

<style module lang="scss">
.VAdminCheckboxGroup {
    border: 1px solid var(--color-admin-input-stroke);
    background-color: var(--color-admin-input-background);
    color: var(--color-admin-input-value);
    margin: 0;
    padding: 12px;
    list-style: none;
}

.option {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 8px;
    cursor: pointer;
    transition: 0.3s background-color;

    &:hover {
        background-color: var(--color-admin-input-hover);
    }
}

.input {
    display: none;

    &:checked + .checkbox {
        background-color: var(--color-admin-input-check-active);
        border-color: var(--color-admin-input-check-active-stroke);

        .icon {
            opacity: 1;
        }
    }
}

.checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border: 1px solid var(--color-admin-input-stroke);
    background-color: var(--color-admin-input-background);
    border-radius: 6px;
    transition:
        0.3s background-color,
        border-color;
}

.icon {
    --icon-size: 12px;
    opacity: 0;
    transition: 0.3s opacity;

    color: var(--color-admin-input-check-icon);
}
</style>
