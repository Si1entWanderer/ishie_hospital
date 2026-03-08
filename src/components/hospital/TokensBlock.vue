<script setup lang="ts">
import { computed } from 'vue'

import { TOKENS_PAGE_DATA, THERAPY_MARKS, ACTIVE_THERAPIES } from '@/assets/ts/constants'
import { ETitleTag } from '@/assets/ts/enums'

import BlockWrapper from '@/components/common/BlockWrapper.vue'
import PatientAward from '@/components/patient/PatientAward.vue'
import TextBlock from '@/components/common/TextBlock.vue'

const activeTherapies = computed(() =>
    THERAPY_MARKS.filter((mark) => ACTIVE_THERAPIES.includes(mark.id)),
)
const textContent = {
    id: 1,
    title: TOKENS_PAGE_DATA.title,
    description: TOKENS_PAGE_DATA.description,
}
</script>

<template>
    <BlockWrapper :class="$style.FaqBlock">
        <TextBlock :data="textContent" :title-tag="ETitleTag.h2" />

        <ul :class="$style.therapies">
            <li v-for="therapy in activeTherapies" :key="therapy.id" :class="$style.therapy">
                <PatientAward :mark="therapy" :class="$style.image" />

                <div :class="$style.content">
                    <h4 :class="$style.therapyName" v-html="therapy.name" />

                    <p :class="$style.therapyDescription" v-html="therapy.description" />
                </div>
            </li>
        </ul>
    </BlockWrapper>
</template>

<style lang="scss" module>
.FaqBlock {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 40px;

    @include respond-to(mobile) {
        padding: 24px;
    }
}

.therapies {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    @include respond-to(mobile) {
        gap: 32px;
    }
}

.therapy {
    display: flex;
    align-items: center;
    gap: 24px;

    @include respond-to(mobile) {
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
}

.image {
    flex-shrink: 0;
    width: 130px;

    @include respond-to(mobile) {
        width: 200px;
    }
}

.content {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.therapyName {
    margin: 0;
    color: $dark-0;

    @include text(p2-b);
}

.therapyDescription {
    margin: 0;
    color: $dark-0;

    @include text(p3);
}
</style>
