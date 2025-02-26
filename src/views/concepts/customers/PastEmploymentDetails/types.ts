import type { Control, FieldErrors } from 'react-hook-form'

export type PermanentAddressFields = {
    // permanentAddress1: string
}

export type PastEmploymentDetailsSchema = PermanentAddressFields

export type FormSectionBaseProps = {
    control: Control<PastEmploymentDetailsSchema>
    errors: FieldErrors<PastEmploymentDetailsSchema>
}
