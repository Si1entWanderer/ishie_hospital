<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'

import {
    FILEDS_DEFAULT_VALUES,
    LOCALSTORAGE_FORM_KEY,
    LOCALSTORAGE_NAME_KEY,
    FORM_FIELDS,
    MAINPAGE_BUTTON_TEXT,
} from '@/assets/ts/constants'

import { createAndDownloadTextFile } from '@/utils/createAndDownloadTextFile'

import CheckupBlock, { type TCheckupBlockEmit } from '@/components/hospital/CheckupBlock.vue'
import VButton from '@/components/ui/VButton.vue'

const DOWNLOAD_BUTTON_TEXT = 'Скачать'
const CLEAR_BUTTON_TEXT = 'Очистить'

type TFieldsValues = {
    [key: string]: (string | number)[]
}

const fieldsValues = ref<TFieldsValues>(FILEDS_DEFAULT_VALUES)
const nameValue = ref('')

const downloadFileText = computed(() => {
    const blocks = []

    if (nameValue.value) {
        blocks.push(`Пациент ${nameValue.value}`)
    }

    FORM_FIELDS.forEach((field) => {
        const key = field.pk
        const values = fieldsValues.value[key]

        if (values?.length) {
            const valuesNamesString = field.variants
                .filter((variant) => values.includes(variant.pk))
                .map((variant) => variant.label)
                .join('\r\n')

            blocks.push(`${field.label}\r\n\r\n${valuesNamesString}`)
        }
    })

    return blocks.join('\r\n\r\n\r\n\r\n')
})

function onChange({ key, value }: TCheckupBlockEmit) {
    if (fieldsValues.value[key]?.includes(value)) {
        fieldsValues.value[key] = fieldsValues.value[key].filter((item) => item !== value)
    } else {
        fieldsValues.value[key]?.push(value)
    }

    localStorage.setItem(LOCALSTORAGE_FORM_KEY, JSON.stringify(fieldsValues.value))
}

function onClearClick() {
    Object.keys(fieldsValues.value).forEach((key) => {
        fieldsValues.value[key] = []
    })
    nameValue.value = ''
    localStorage.removeItem(LOCALSTORAGE_FORM_KEY)
    localStorage.removeItem(LOCALSTORAGE_NAME_KEY)
}

function onDownloadClick() {
    const fileName = nameValue.value ? `${nameValue.value}.txt` : 'checkup.txt'
    createAndDownloadTextFile(downloadFileText.value, fileName)
}

function onNameInput(value: string) {
    nameValue.value = value
    localStorage.setItem(LOCALSTORAGE_NAME_KEY, value)
}

onMounted(() => {
    const localStorageFormValue = localStorage.getItem(LOCALSTORAGE_FORM_KEY)
    const localStorageNameValue = localStorage.getItem(LOCALSTORAGE_NAME_KEY)

    if (localStorageFormValue) {
        fieldsValues.value = JSON.parse(localStorageFormValue)
    }

    if (localStorageNameValue) {
        nameValue.value = localStorageNameValue
    }
})
</script>

<template>
    <div :class="$style.CheckupPage">
        <div :class="[$style.container, 'container']">
            <div :class="$style.buttons">
                <VButton :class="[$style.button, $style._back]" tag="router-link" to="/">
                    {{ MAINPAGE_BUTTON_TEXT }}
                </VButton>

                <VButton :class="$style.button" @click="onClearClick">
                    {{ CLEAR_BUTTON_TEXT }}
                </VButton>

                <VButton :class="$style.button" @click="onDownloadClick">
                    {{ DOWNLOAD_BUTTON_TEXT }}
                </VButton>
            </div>
            <CheckupBlock
                :values="fieldsValues"
                :nameValue="nameValue"
                @change="onChange"
                @change:name="onNameInput"
            />
        </div>
    </div>
</template>

<style lang="scss" module>
.CheckupPage {
    //
}

.container {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.buttons {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 24px;

    @include respond-to(mobile) {
        gap: 8px 4px;
    }
}

.button {
    @include respond-to(mobile) {
        flex-grow: 1;
    }

    &._back {
        margin-right: auto;

        @include respond-to(mobile) {
            width: 100%;
            margin-right: 0;
        }
    }
}
</style>
