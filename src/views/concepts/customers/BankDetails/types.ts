import type { Control, FieldErrors } from 'react-hook-form'

export type PermanentAddressFields = {
    // permanentAddress1: string
}

export type BankDetailsSchema = PermanentAddressFields

export type FormSectionBaseProps = {
    control: Control<BankDetailsSchema>
    errors: FieldErrors<BankDetailsSchema>
}
