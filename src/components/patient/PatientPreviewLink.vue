<script setup lang="ts">
import { computed, useCssModule } from 'vue'
import { format } from 'date-fns'

import type { IPatient } from '@/@types/patient'
import type { TSize } from '@/@types/ui'

import PatientAvatar from '@/components/patient/PatientAvatar.vue'

const DATE_ADDED_LABEL = 'Дата добавления'

interface IProps {
    data: IPatient
    size?: TSize
}

const props = withDefaults(defineProps<IProps>(), {
    size: 'medium',
})

const $style = useCssModule()

const classList = computed(() => [$style[`_size-${props.size}`]])
const dateAddedValue = computed(() => format(props.data?.registrationDate || 0, 'dd.MM.y'))
</script>

<template>
    <RouterLink :class="[$style.PatientPreviewLink, classList]" :to="`/patients/${data.id}`">
        <PatientAvatar :class="$style.avatar" :image="data.image" hide-icon />

        <Transition name="fade">
            <div v-if="size === 'medium'" :class="$style.content">
                <span :class="$style.name"> {{ data.name }}&nbsp;→ </span>
            </div>

            <div v-else-if="size === 'large'" :class="$style.content">
                <div :class="$style.name" v-html="data.name" :title="data.name" />

                <dl :class="$style.row">
                    <dt :class="$style.label" v-html="DATE_ADDED_LABEL" />

                    <dd :class="$style.text" v-html="dateAddedValue" />
                </dl>
            </div>
        </Transition>
    </RouterLink>
</template>

<style lang="scss" module>
.PatientPreviewLink {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    border-radius: 24px;
    background-color: $main-300;
    transition: 0.3s box-shadow;
    text-decoration: none;

    &:hover {
        box-shadow: inset 0 0 0 4px $main-200;
    }

    &._size-large {
        gap: 20px;

        .name {
            overflow: hidden;
            text-overflow: ellipsis;

            @include text(p1-b);
        }
    }
}

.avatar {
    --avatar-border-size: 6px;

    flex-shrink: 0;
    width: 64px;
}

.content {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.name {
    color: $dark-0;

    @include text(p3);
}

.row {
    margin: 0;
}

.label {
    color: $dark-0;

    @include text(l3);
}

.text {
    margin-left: 0;
    color: $dark-0;

    @include text(p3-b);
}
</style>
