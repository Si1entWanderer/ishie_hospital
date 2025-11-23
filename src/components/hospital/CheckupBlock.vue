<script setup lang="ts">
import type { TCheckboxValues } from '@/@types/ui'

import { FORM_FIELDS } from '@/assets/ts/constants'

import BlockWrapper from '@/components/common/BlockWrapper.vue'
import VCheckboxGroup from '@/components/ui/VCheckboxGroup.vue'

export type TCheckupBlockEmit = {
    key: string
    value: string
}

const TITLE = 'Чекап Иши_j'
const NAME_LABEL = 'Имя пациента:'

defineProps<{
    values: TCheckboxValues
    nameValue: string
}>()

const emit = defineEmits<{
    change: [TCheckupBlockEmit]
    'change:name': [value: string]
}>()

function onInput(event: Event) {
    const target = event.target as HTMLInputElement
    emit('change:name', target.value)
}
</script>

<template>
    <BlockWrapper :class="$style.CheckupBlock">
        <h2 :class="$style.title">
            {{ TITLE }}
        </h2>

        <div :class="$style.form">
            <div :class="$style.name">
                <p :class="$style.label">
                    {{ NAME_LABEL }}
                </p>

                <input
                    :class="$style.input"
                    :value="nameValue"
                    placeholder="ishie_j"
                    @input="onInput"
                    type="text"
                />
            </div>

            <VCheckboxGroup
                v-for="field in FORM_FIELDS"
                :class="$style.group"
                :key="field.pk"
                :data="field"
                :values="values"
                @change="emit('change', { key: field.pk, value: $event })"
            />
        </div>
    </BlockWrapper>
</template>

<style lang="scss" module>
.CheckupBlock {
    //
}

.title {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 8px 24px;
    border-bottom: 2px solid $pink-100;
    color: $pink-0;

    @include text(t2);
}

.form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    padding: 40px;

    @include respond-to(mobile) {
        grid-template-columns: 1fr;
        padding: 24px;
    }
}

.group {
    grid-column: span 1;
}

.name {
    grid-column: span 2;
    display: flex;
    justify-content: flex-start;
    gap: 12px;

    @include respond-to(mobile) {
        grid-column: span 1;
        flex-direction: column;
    }
}

.label {
    margin: 0;
    color: $pink-0;

    @include text(t2);
}

.input {
    border: none;
    border-bottom: 2px solid $pink-100;
    color: $dark-0;

    @include text(l1);

    &::placeholder {
        color: $dark-100;
    }

    &:focus {
        outline: none;
    }
}
</style>
