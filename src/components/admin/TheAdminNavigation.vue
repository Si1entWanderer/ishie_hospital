<script setup lang="ts">
const SITE_TITLE = 'Клиника имени Иши_j'
</script>

<template>
    <nav :class="$style.TheAdminNavigation">
        <div :class="$style.title">{{ SITE_TITLE }}</div>

        <nav :class="$style.navigation">
            <ul :class="$style.list">
                <li :class="$style.item">
                    <router-link
                        to="/admin/main"
                        :class="$style.link"
                        >Панель</router-link
                    >
                </li>
                <li :class="$style.item">
                    <router-link
                        to="/admin/patients"
                        :class="$style.link"
                    >
                        Пациенты
                    </router-link>
                </li>
                <li :class="$style.item">
                    <router-link
                        to="/admin/add-patient"
                        :class="$style.link"
                    >
                        Добавить пациента
                    </router-link>
                </li>
                <li :class="$style.item">
                    <router-link
                        to="/admin/therapy-settings"
                        :class="$style.link"
                    >
                        Настройки терапий
                    </router-link>
                </li>
            </ul>
        </nav>
    </nav>
</template>

<style module lang="scss">
.TheAdminNavigation {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    padding: 24px 16px;
}

.title {
    color: var(--color-admin-text-primary);

    @include text-admin(h2-sb);
}

.list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
}

.link {
    display: flex;
    color: var(--color-admin-text-tertiary);
    padding: 8px 12px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
        background-color: var(--color-admin-navigation-hover);
        box-shadow: 0 0 0 1px var(--color-admin-navigation-hover-stroke);
    }

    &:global {
        &.router-link-active {
            background-color: var(--color-admin-navigation-active);
            box-shadow: 0 0 0 1px var(--color-admin-navigation-active-stroke);
            color: var(--color-admin-text-primary);
        }
    }
}
</style>
