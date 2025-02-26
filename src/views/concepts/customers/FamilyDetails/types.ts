import type { Control, FieldErrors } from 'react-hook-form'

export type PermanentAddressFields = {
    // permanentAddress1: string
}

export type FamilyDetailsSchema = PermanentAddressFields

export type FormSectionBaseProps = {
    control: Control<FamilyDetailsSchema>
    errors: FieldErrors<FamilyDetailsSchema>
}
