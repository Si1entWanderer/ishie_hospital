export type TCheckboxVariant = {
    pk: string | number
    label: string
}

export type TCheckboxGroupData = {
    pk: string
    label: string
    variants: TCheckboxVariant[]
}

export type TCheckboxValues = {
    [key: string]: (string | number)[]
}

export enum EButtonStyles {
    default = 'default',
    filled = 'filled',
}

export type EButtonTag = 'a' | 'button'
