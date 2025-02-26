import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'

type PassportFormProps = FormSectionBaseProps


const PassportForm = ({ control, errors }: PassportFormProps) => {
    return (
        <Card>
            <h4 className="mb-6">Passport</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="Name as in Passport"
                    invalid={Boolean(errors.nameAsInPassport)}
                    errorMessage={errors.nameAsInPassport?.message}
                >
                    <Controller
                        name="nameAsInPassport"
                        control={control}
                        render={({ field }) =>
                            <Input type="text"
                                {...field}
                            />
                        }
                    />
                </FormItem>

                <FormItem
                    label="Passport No."
                    invalid={Boolean(errors.passportNo)}
                    errorMessage={errors.passportNo?.message}
                >
                    <Controller
                        name="passportNo"
                        control={control}
                        render={({ field }) =>
                            <Input type="text" {...field} />
                        }
                    />
                </FormItem>

                <FormItem
                    label="Place of Issue"
                    invalid={Boolean(errors.placeOfIssue)}
                    errorMessage={errors.placeOfIssue?.message}
                >
                    <Controller
                        name="placeOfIssue"
                        control={control}
                        render={({ field }) =>
                            <Input type="text" {...field} />
                        }
                    />
                </FormItem>

                <FormItem
                    label="Issue Date"
                    invalid={Boolean(errors.issueDate)}
                    errorMessage={errors.issueDate?.message}
                >
                    <Controller
                        name="issueDate"
                        control={control}
                        render={({ field }) =>
                            <Input type="date" {...field} />
                        }
                    />
                </FormItem>

                <FormItem
                    label="Expiry/Renewal Date"
                    invalid={Boolean(errors.expiryRenewalDate)}
                    errorMessage={errors.expiryRenewalDate?.message}
                >
                    <Controller
                        name="expiryRenewalDate"
                        control={control}
                        render={({ field }) =>
                            <Input type="date" {...field} />
                        }
                    />
                </FormItem>

                <FormItem
                    label="ECNR Required"
                    invalid={Boolean(errors.ecnrRequired)}
                    errorMessage={errors.ecnrRequired?.message}
                >
                    <Controller
                        name="ecnrRequired"
                        control={control}
                        render={({ field }) =>
                            <Input type="text" {...field} />
                        }
                    />
                </FormItem>

                <FormItem
                    label="Date of Birth"
                    invalid={Boolean(errors.dateOfBirth)}
                    errorMessage={errors.dateOfBirth?.message}
                >
                    <Controller
                        name="dateOfBirth"
                        control={control}
                        render={({ field }) =>
                            <Input type="date" {...field} />
                        }
                    />
                </FormItem>

                <FormItem
                    label="Place of Birth"
                    invalid={Boolean(errors.placeOfBirth)}
                    errorMessage={errors.placeOfBirth?.message}
                >
                    <Controller
                        name="placeOfBirth"
                        control={control}
                        render={({ field }) =>
                            <Input type="text" {...field} />
                        }
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default PassportForm
