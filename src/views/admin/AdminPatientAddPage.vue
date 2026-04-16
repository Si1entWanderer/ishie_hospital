<script setup lang="ts">
import { computed, ref } from 'vue'

import AdminBlock from '@/components/admin/AdminBlock.vue'
import AdminHeader from '@/components/admin/AdminHeader.vue'
import VAdminButton from '@/components/uiAdmin/VAdminButton.vue'
import VAdminSelect from '@/components/uiAdmin/VAdminSelect.vue'
import VAdminInputWrapper from '@/components/uiAdmin/VAdminInputWrapper.vue'
import VAdminCheckboxGroup from '@/components/uiAdmin/VAdminCheckboxGroup.vue'
import VAdminInput from '@/components/uiAdmin/VAdminInput.vue'

const TITLE = 'Добавить пациента'
const SAVE_BUTTON_TEXT = 'Сохранить'
const THERAPY_BLOCK_TITLE = 'Терапия'
const PATIENTS_BLOCK_TITLE = 'Данные клиента'

const options = [
    {
        label: 'Опция 1',
        value: 'option1',
    },
    {
        label: 'Опция 2',
        value: 'option2',
    },
    {
        label: 'Опция 3',
        value: 'option3',
    },
]

const selectedOption = ref(null)
const selectedCheckboxes = ref<(string | number)[]>([])
const inputValue = ref<string | number>('')

const selectedCheckboxesCount = computed(() => selectedCheckboxes.value.length)
</script>

<template>
    <div :class="$style.AdminPatientAddPage">
        <AdminHeader :title="TITLE">
            <VAdminButton>
                {{ SAVE_BUTTON_TEXT }}
            </VAdminButton>
        </AdminHeader>

        <div :class="$style.body">
            <AdminBlock :title="THERAPY_BLOCK_TITLE">
                <VAdminInputWrapper label="❤️‍🔥 I.Возраст сердечка">
                    <VAdminSelect
                        :options="options"
                        v-model="selectedOption"
                    />
                </VAdminInputWrapper>

                <VAdminInputWrapper
                    label="💗 II. Основной диагноз"
                    is-collapsable
                    :count="selectedCheckboxesCount"
                >
                    <VAdminCheckboxGroup
                        :options="options"
                        v-model="selectedCheckboxes"
                        name="main-diagnosis"
                        @update:model-value="selectedCheckboxes = $event"
                    />
                </VAdminInputWrapper>

                <VAdminInputWrapper
                    label="✨ III. Группа риска"
                    is-collapsable
                    :count="selectedCheckboxesCount"
                >
                    <VAdminCheckboxGroup
                        :options="options"
                        v-model="selectedCheckboxes"
                        name="group-risk"
                        @update:model-value="selectedCheckboxes = $event"
                    />
                </VAdminInputWrapper>

                <VAdminInputWrapper
                    label="🌸 IV. Симптомы, замеченные врачом"
                    is-collapsable
                    :count="selectedCheckboxesCount"
                >
                    <VAdminCheckboxGroup
                        :options="options"
                        v-model="selectedCheckboxes"
                        name="simptoms"
                        @update:model-value="selectedCheckboxes = $event"
                    />
                </VAdminInputWrapper>

                <VAdminInputWrapper
                    label="💉 V. Назначения врача"
                    is-collapsable
                    :count="selectedCheckboxesCount"
                >
                    <VAdminCheckboxGroup
                        :options="options"
                        v-model="selectedCheckboxes"
                        name="recepies"
                        @update:model-value="selectedCheckboxes = $event"
                    />
                </VAdminInputWrapper>

                <VAdminInputWrapper label="💞 VI. Уровень сердечной нагрузки">
                    <VAdminSelect
                        :options="options"
                        v-model="selectedOption"
                    />
                </VAdminInputWrapper>
            </AdminBlock>

            <AdminBlock :title="PATIENTS_BLOCK_TITLE">
                <VAdminInputWrapper label="Пол">
                    <VAdminSelect
                        :options="options"
                        v-model="selectedOption"
                    />
                </VAdminInputWrapper>

                <VAdminInputWrapper label="Ник">
                    <VAdminInput
                        :model-value="inputValue"
                        placeholder="Отображаемое имя"
                    />
                </VAdminInputWrapper>

                <VAdminInputWrapper label="Дата рождения">
                    <VAdminInput
                        :model-value="inputValue"
                        placeholder="10.10.2001"
                    />
                </VAdminInputWrapper>

                <VAdminInputWrapper label="Адрес регистрации">
                    <VAdminInput
                        :model-value="inputValue"
                        placeholder="Twitch-канал Ishie_j"
                    />
                </VAdminInputWrapper>

                <VAdminInputWrapper
                    label="💉 V. Назначения врача"
                    is-collapsable
                    :count="selectedCheckboxesCount"
                >
                    <VAdminCheckboxGroup
                        :options="options"
                        v-model="selectedCheckboxes"
                        name="therapy"
                        @update:model-value="selectedCheckboxes = $event"
                    />
                </VAdminInputWrapper>
            </AdminBlock>
        </div>
    </div>
</template>

<style module lang="scss">
.AdminPatientAddPage {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.body {
    display: flex;
    flex-direction: column;
    gap: 32px;
    flex-grow: 1;
    padding: 24px var(--padding-admin-container-horizontal);
}
</style>
