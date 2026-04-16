import { onMounted, onBeforeUnmount, type Ref } from 'vue'
import type { TMouseHandler } from '@/@types/ui'

export function useClickOutside(target: Ref<HTMLElement | null>, handler: TMouseHandler) {
    const listener = (event: MouseEvent) => {
        const el = target.value
        if (!el) return

        // если клик внутри элемента — игнорируем
        if (el.contains(event.target as Node)) return

        handler(event)
    }

    onMounted(() => {
        document.addEventListener('click', listener)
    })

    onBeforeUnmount(() => {
        document.removeEventListener('click', listener)
    })
}
