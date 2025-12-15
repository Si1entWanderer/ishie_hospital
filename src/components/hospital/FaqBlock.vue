<script setup lang="ts">
import {computed} from 'vue';
import { FAQ_TEXTS, THERAPY_MARKS, ACTIVE_THERAPIES } from '@/assets/ts/constants'

import BlockWrapper from '@/components/common/BlockWrapper.vue'

const activeTherapies = computed(() => THERAPY_MARKS.filter(mark => ACTIVE_THERAPIES.includes(mark.id)))
</script>

<template>
    <BlockWrapper :class="$style.FaqBlock">
        <h2
            v-html="FAQ_TEXTS[0]?.title"
            :class="$style.title"
        />

        <div
            v-html="FAQ_TEXTS[0]?.description"
            :class="$style.description"
        />

        <ul :class="$style.therapies">
            <li
                v-for="therapy in activeTherapies"
                :key="therapy.id"
                :class="$style.therapy"
            >
                <img
                    :src="therapy.image"
                    :class="$style.image"
                />

                <div :class="$style.content">
                    <h4
                        :class="$style.therapyName"
                        v-html="therapy.name"
                    />

                    <p
                        :class="$style.therapyDescription"
                        v-html="therapy.description"
                    />
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

.title {
    margin-top: 0;
    margin-bottom: 0;
    color: $pink-0;

    @include text(t1);
}

.description {
    margin-top: 0;
    margin-bottom: 0;
    color: $dark-0;

    @include text(p1);
}

.therapies {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0;
    padding: 0;
}

.therapy {
    display: flex;
    align-items: center;
    gap: 24px;
}

.image {
    flex-shrink: 0;
    width: 120px;
    height: auto;
    aspect-ratio: 1/1;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.therapyName {
    margin: 0;
    color: $dark-0;

    @include text(p2);
}

.therapyDescription {
    margin: 0;
    color: $dark-0;

    @include text(p3);
}
</style>
