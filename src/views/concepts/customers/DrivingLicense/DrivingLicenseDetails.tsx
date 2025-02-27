import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'

type LicenseDetailsProps = FormSectionBaseProps


const DrivingLicenseDetails = ({ control, errors }: LicenseDetailsProps) => {
    return (
        <Card>
            <h4 className="mb-6">Driving License</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="Name as in Driving License"
                    invalid={Boolean(errors.nameAsInLicense)}
                    errorMessage={errors.nameAsInLicense?.message}
                >
                    <Controller
                        name="nameAsInLicense"
                        control={control}
                        render={({ field }) =>
                            <Input type="text"
                                {...field}
                            />
                        }
                    />
                </FormItem>

                <FormItem
                    label="Driving License No."
                    invalid={Boolean(errors.licenseNo)}
                    errorMessage={errors.licenseNo?.message}
                >
                    <Controller
                        name="licenseNo"
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
                    label="Valid Till"
                    invalid={Boolean(errors.validTill)}
                    errorMessage={errors.validTill?.message}
                >
                    <Controller
                        name="validTill"
                        control={control}
                        render={({ field }) =>
                            <Input type="date" {...field} />
                        }
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default DrivingLicenseDetails
