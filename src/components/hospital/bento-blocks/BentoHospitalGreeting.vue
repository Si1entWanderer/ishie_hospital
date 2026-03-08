<script setup lang="ts">
import { EButtonStyles } from '@/@types/ui'

import MAINPAGE_IMAGE from '@/assets/images/banner/mainpage-banner.jpg'
import { SOCIAL_LINKS } from '@/assets/ts/constants'
import { EIcons } from '@/assets/ts/enums'

import VButton from '@/components/ui/VButton.vue'

const GREETING_TEXT = '💗 ДОБРО ПОЖАЛОВАТЬ В&nbsp;КЛИНИКУ ISHIE_J 💗'
const GREETING_TEXT_MOBILE = '💗 ДОБРО ПОЖАЛОВАТЬ 💗<br/>В&nbsp;КЛИНИКУ ISHIE_J'
const [twitchSocial, telegramSocial] = SOCIAL_LINKS
</script>

<template>
    <div :class="$style.BentoHospitalGreeting">
        <div :class="$style.inner">
            <img :class="$style.image" :src="MAINPAGE_IMAGE" />

            <div :class="$style.content">
                <VButton
                    :class="[$style.button, $style._twitch]"
                    :style="EButtonStyles.filled"
                    :href="twitchSocial?.href"
                    tag="a"
                    target="_blank"
                >
                    <span>
                        {{ twitchSocial?.name }}
                    </span>

                    <svg :class="$style.icon">
                        <use :xlink:href="EIcons.twitch" />
                    </svg>
                </VButton>

                <VButton
                    :class="[$style.button, $style._telegram]"
                    :style="EButtonStyles.filled"
                    :href="telegramSocial?.href"
                    tag="a"
                    target="_blank"
                >
                    <span>
                        {{ telegramSocial?.name }}
                    </span>

                    <svg :class="$style.icon">
                        <use :xlink:href="EIcons.telegram" />
                    </svg>
                </VButton>

                <div :class="$style.title" v-html="GREETING_TEXT" />
            </div>
        </div>

        <div :class="$style.contentMobile">
            <VButton
                :class="[$style.button, $style._twitch]"
                :style="EButtonStyles.filled"
                :href="twitchSocial?.href"
                tag="a"
                target="_blank"
            >
                <span>
                    {{ twitchSocial?.name }}
                </span>

                <svg :class="$style.icon">
                    <use :xlink:href="EIcons.twitch" />
                </svg>
            </VButton>

            <VButton
                :class="[$style.button, $style._telegram]"
                :style="EButtonStyles.filled"
                :href="telegramSocial?.href"
                tag="a"
                target="_blank"
            >
                <span>
                    {{ telegramSocial?.name }}
                </span>

                <svg :class="$style.icon">
                    <use :xlink:href="EIcons.telegram" />
                </svg>
            </VButton>

            <div :class="$style.title" v-html="GREETING_TEXT_MOBILE" />
        </div>
    </div>
</template>

<style lang="scss" module>
.BentoHospitalGreeting {
    //
}

.inner {
    position: relative;
    width: 100%;
    height: 100%;

    @include respond-to(mobile) {
        height: auto;
        aspect-ratio: 1/1;
    }
}

.image {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 32px;
}

.content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: flex-end;
    align-content: flex-end;
    justify-content: flex-end;
    height: 100%;
    padding: 24px;

    @include respond-to(mobile) {
        display: none;
    }
}

.contentMobile {
    display: none;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 24px;

    @include respond-to(mobile) {
        display: flex;
    }

    .button {
        flex-grow: 1;
    }
}

.button {
    &._twitch {
        --fill-color: #{$twitch};
    }

    &._telegram {
        --fill-color: #{$telegram};
    }
}

.icon {
    width: 24px;
    height: 24px;
}

.title {
    display: flex;
    justify-content: center;
    flex-basis: 100%;
    padding: 12px 24px;
    border-radius: 24px;
    background-color: $main-0;
    color: white;
    text-align: center;

    @include text(p2-b);

    @include respond-to(mobile) {
        padding: 12px 20px;
    }
}
</style>
