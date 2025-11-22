import type { TTextBlock } from "@/@types/blocks"
import { ESex } from "@/assets/ts/enums"

export type TPatient = {
    id: string,
    name: string,
    image: string,
    sex?: ESex,
    birthDate?: string,
    residentalAddress?: string,
    examination?: TTextBlock[],
}
