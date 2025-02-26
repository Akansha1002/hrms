import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'

type EmploymentDetailsProps = FormSectionBaseProps


const EmploymentDetails = ({ control, errors }: EmploymentDetailsProps) => {
    return (
        <Card>
            <h4 className="mb-6">Past Employment Details</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="Company Name"
                    invalid={Boolean(errors.companyName)}
                    errorMessage={errors.companyName?.message}
                >
                    <Controller
                        name="companyName"
                        control={control}
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                </FormItem>

                <FormItem
                    label="Address"
                    invalid={Boolean(errors.address)}
                    errorMessage={errors.address?.message}
                >
                    <Controller
                        name="address"
                        control={control}
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                </FormItem>

                <FormItem
                    label="From Date"
                    invalid={Boolean(errors.fromDate)}
                    errorMessage={errors.fromDate?.message}
                >
                    <Controller
                        name="fromDate"
                        control={control}
                        render={({ field }) => <Input type="date" {...field} />}
                    />
                </FormItem>

                <FormItem
                    label="To Date"
                    invalid={Boolean(errors.toDate)}
                    errorMessage={errors.toDate?.message}
                >
                    <Controller
                        name="toDate"
                        control={control}
                        render={({ field }) => <Input type="date" {...field} />}
                    />
                </FormItem>

                <FormItem
                    label="Job Title"
                    invalid={Boolean(errors.jobTitle)}
                    errorMessage={errors.jobTitle?.message}
                >
                    <Controller
                        name="jobTitle"
                        control={control}
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                </FormItem>

                <FormItem
                    label="Salary on Leaving"
                    invalid={Boolean(errors.salaryOnLeaving)}
                    errorMessage={errors.salaryOnLeaving?.message}
                >
                    <Controller
                        name="salaryOnLeaving"
                        control={control}
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                </FormItem>

                <FormItem
                    label="Currency"
                    invalid={Boolean(errors.currency)}
                    errorMessage={errors.currency?.message}
                >
                    <Controller
                        name="currency"
                        control={control}
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                </FormItem>

                <FormItem
                    label="Designation on Joining"
                    invalid={Boolean(errors.designationOnJoining)}
                    errorMessage={errors.designationOnJoining?.message}
                >
                    <Controller
                        name="designationOnJoining"
                        control={control}
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                </FormItem>

                <FormItem
                    label="Number of People Reporting"
                    invalid={Boolean(errors.numberOfPeopleReporting)}
                    errorMessage={errors.numberOfPeopleReporting?.message}
                >
                    <Controller
                        name="numberOfPeopleReporting"
                        control={control}
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                </FormItem>

                <FormItem
                    label="Designation on Leaving"
                    invalid={Boolean(errors.designationOnLeaving)}
                    errorMessage={errors.designationOnLeaving?.message}
                >
                    <Controller
                        name="designationOnLeaving"
                        control={control}
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                </FormItem>

                <FormItem
                    label="Industry Type"
                    invalid={Boolean(errors.industryType)}
                    errorMessage={errors.industryType?.message}
                >
                    <Controller
                        name="industryType"
                        control={control}
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                </FormItem>

                <FormItem
                    label="Contact Number"
                    invalid={Boolean(errors.contactNumber)}
                    errorMessage={errors.contactNumber?.message}
                >
                    <Controller
                        name="contactNumber"
                        control={control}
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                </FormItem>

                <FormItem
                    label="Roles"
                    invalid={Boolean(errors.roles)}
                    errorMessage={errors.roles?.message}
                >
                    <Controller
                        name="roles"
                        control={control}
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                </FormItem>

                <FormItem
                    label="Key Experience"
                    invalid={Boolean(errors.keyExperience)}
                    errorMessage={errors.keyExperience?.message}
                >
                    <Controller
                        name="keyExperience"
                        control={control}
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                </FormItem>

                <FormItem
                    label="Reason for Leaving"
                    invalid={Boolean(errors.reasonForLeaving)}
                    errorMessage={errors.reasonForLeaving?.message}
                >
                    <Controller
                        name="reasonForLeaving"
                        control={control}
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                </FormItem>

                <FormItem
                    label="Breaks in Career"
                    invalid={Boolean(errors.breaksInCareer)}
                    errorMessage={errors.breaksInCareer?.message}
                >
                    <Controller
                        name="breaksInCareer"
                        control={control}
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                </FormItem>

                <FormItem
                    label="No. of Months Experience"
                    invalid={Boolean(errors.noOfMonthsExperience)}
                    errorMessage={errors.noOfMonthsExperience?.message}
                >
                    <Controller
                        name="noOfMonthsExperience"
                        control={control}
                        render={({ field }) => <Input type="text" {...field} />}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default EmploymentDetails
