import type { Control, FieldErrors } from 'react-hook-form'

export type PermanentAddressFields = {
    // permanentAddress1: string
}

export type PassportDetailsSchema = PermanentAddressFields

export type FormSectionBaseProps = {
    control: Control<PassportDetailsSchema>
    errors: FieldErrors<PassportDetailsSchema>
}
