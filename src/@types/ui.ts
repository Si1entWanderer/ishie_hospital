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
