<script setup lang="ts">
import { computed } from 'vue'
import type { TCheckboxGroupData, TCheckboxValues } from '@/@types/ui'

const props = defineProps<{
    data: TCheckboxGroupData
    values: TCheckboxValues
}>()

const emit = defineEmits<{
    change: [value: string]
}>()

const getIsVariantChecked = computed(() => (variantPk: string | number) => {
    return props.values?.[props.data.pk]?.includes(variantPk)
})

function onChecked(event: Event) {
    const target = event.target as HTMLInputElement
    emit('change', target.value)
}
</script>

<template>
    <div :class="$style.VCheckboxGroup">
        <p :class="$style.title">
            {{ data?.label }}
        </p>

        <div :class="$style.list">
            <label v-for="variant in data.variants" :class="$style.checkbox" :key="variant.pk">
                <input
                    :class="$style.input"
                    :name="data.pk"
                    :value="variant.pk"
                    :checked="getIsVariantChecked(variant.pk)"
                    type="checkbox"
                    @change="onChecked"
                />

                <div :class="$style.check"></div>

                <div :class="$style.label">
                    {{ variant.label }}
                </div>
            </label>
        </div>
    </div>
</template>

<style lang="scss" module>
.VCheckboxGroup {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.title {
    margin: 0;
    color: $pink-0;

    @include text(t2);
}

.list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-left: 8px;
}

.checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    &:active {
        .check {
            transform: scale(0.9);
        }
    }
}

.label {
    color: $dark-0;
}

.check {
    position: relative;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border: 2px solid $pink-100;
    border-radius: 4px;
    transition: 0.3s transform;

    &:after {
        content: '💗';
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 50%;
        top: 50%;
        width: 24px;
        height: 24px;
        font-size: 14px;
        line-height: 1;
        transform: translate(-50%, -50%);
        transition: 0.3s opacity;
        opacity: 0;
    }
}

.input {
    display: none;

    &:checked + .check {
        &:after {
            opacity: 1;
        }
    }
}
</style>
