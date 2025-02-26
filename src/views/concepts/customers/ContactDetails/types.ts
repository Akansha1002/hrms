import type { Control, FieldErrors } from 'react-hook-form'

export type PermanentAddressFields = {
    // permanentAddress1: string
}

export type ContactDetailsSchema = PermanentAddressFields

export type FormSectionBaseProps = {
    control: Control<ContactDetailsSchema>
    errors: FieldErrors<ContactDetailsSchema>
}
