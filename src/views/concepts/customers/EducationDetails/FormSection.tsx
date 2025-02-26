import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'

type EducationDetailsProps = FormSectionBaseProps


const FormSection = ({ control, errors }: EducationDetailsProps) => {
    return (
        <Card>
            <h4 className="mb-6">Education Details</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="Type of Establishment"
                    invalid={Boolean(errors.typeOfEstablishment)}
                    errorMessage={errors.typeOfEstablishment?.message}
                >
                    <Controller name="typeOfEstablishment" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="Name of Establishment"
                    invalid={Boolean(errors.nameOfEstablishment)}
                    errorMessage={errors.nameOfEstablishment?.message}
                >
                    <Controller name="nameOfEstablishment" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="Discipline"
                    invalid={Boolean(errors.discipline)}
                    errorMessage={errors.discipline?.message}
                >
                    <Controller name="discipline" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="Passing Year"
                    invalid={Boolean(errors.passingYear)}
                    errorMessage={errors.passingYear?.message}
                >
                    <Controller name="passingYear" control={control} render={({ field }) => <Input type="number" {...field} />} />
                </FormItem>
                <FormItem
                    label="Grade"
                    invalid={Boolean(errors.grade)}
                    errorMessage={errors.grade?.message}
                >
                    <Controller name="grade" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="Level"
                    invalid={Boolean(errors.level)}
                    errorMessage={errors.level?.message}
                >
                    <Controller name="level" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="Subject"
                    invalid={Boolean(errors.subject)}
                    errorMessage={errors.subject?.message}
                >
                    <Controller name="subject" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="Major Field"
                    invalid={Boolean(errors.majorField)}
                    errorMessage={errors.majorField?.message}
                >
                    <Controller name="majorField" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="Minor Field"
                    invalid={Boolean(errors.minorField)}
                    errorMessage={errors.minorField?.message}
                >
                    <Controller name="minorField" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="Affiliated To"
                    invalid={Boolean(errors.affiliatedTo)}
                    errorMessage={errors.affiliatedTo?.message}
                >
                    <Controller name="affiliatedTo" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="Address of Institute"
                    invalid={Boolean(errors.addressOfInstitute)}
                    errorMessage={errors.addressOfInstitute?.message}
                >
                    <Controller name="addressOfInstitute" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="Attended From"
                    invalid={Boolean(errors.attendedFrom)}
                    errorMessage={errors.attendedFrom?.message}
                >
                    <Controller name="attendedFrom" control={control} render={({ field }) => <Input type="date" {...field} />} />
                </FormItem>
                <FormItem
                    label="Attended To"
                    invalid={Boolean(errors.attendedTo)}
                    errorMessage={errors.attendedTo?.message}
                >
                    <Controller name="attendedTo" control={control} render={({ field }) => <Input type="date" {...field} />} />
                </FormItem>
                <FormItem
                    label="Company Sponsored"
                    invalid={Boolean(errors.companySponsored)}
                    errorMessage={errors.companySponsored?.message}
                >
                    <Controller name="companySponsored" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="Amount"
                    invalid={Boolean(errors.amount)}
                    errorMessage={errors.amount?.message}
                >
                    <Controller name="amount" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="Currency"
                    invalid={Boolean(errors.currency)}
                    errorMessage={errors.currency?.message}
                >
                    <Controller name="currency" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="Reimbursement Date"
                    invalid={Boolean(errors.reimbursementDate)}
                    errorMessage={errors.reimbursementDate?.message}
                >
                    <Controller name="reimbursementDate" control={control} render={({ field }) => <Input type="date" {...field} />} />
                </FormItem>
                <FormItem
                    label="Explain Breaks During Education"
                    invalid={Boolean(errors.breaksDuringEducation)}
                    errorMessage={errors.breaksDuringEducation?.message}
                >
                    <Controller name="breaksDuringEducation" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
            </div>
        </Card>
    )
}

export default FormSection
