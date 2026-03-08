import type { EIcons } from '@/assets/ts/enums'

export interface IBentoLink {
    id: number
    label: string
    icon: EIcons
    href?: string
}
