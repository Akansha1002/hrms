import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Switcher from '@/components/ui/Switcher'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import { Select } from '@/components/ui/Select'
import { FormSectionBaseProps } from '../types'

type AdditionalInformationProps = FormSectionBaseProps

const calendarOptions = [
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'optionalHoliday', label: 'OP-Optional Holiday' },
    { value: 'us', label: 'US' },
    { value: 'victoria', label: 'Victoria' },
    { value: 'visakhapatnam', label: 'Visakhapatnam' }
];

const attendanceOptions = [
    { value: 'securityCard', label: 'Security Card' },
    { value: 'deskHomeMobile', label: 'Desk/Home/Mobile' },
    { value: 'tracker', label: 'Tracker' }
];

const shiftTypeOptions = [
    { value: 'custom', label: 'Custom' },
    { value: 'general', label: 'General' },
    { value: 'evening', label: 'Evening' },
    { value: 'generalAus', label: 'General-Aus' }
];

const shiftGroupOptions = [
    { value: 'telecomWireless', label: 'Telecom Wireless' },
    { value: 'telecomWireline', label: 'Telecom Wireline' },
    { value: 'robotics', label: 'Robotics' },
    { value: 'it', label: 'IT' },
    { value: 'accounts', label: 'Accounts' }
];

const employmentStatusOptions = [
    { value: 'probationer', label: 'Probationer' },
    { value: 'traineeTelecomEngineer', label: 'Trainee Telecom Engineer' },
    { value: 'confirmed', label: 'Confirmed' },
    { value: 'consultant', label: 'Consultant' }
];

const employmentTypeOptions = [
    { value: 'fullTime', label: 'Full Time' },
    { value: 'partTime', label: 'Part Time' },
    { value: 'partTimerEvening', label: 'Part Timer Evening' },
    { value: 'partTimerMorning', label: 'Part Timer Morning' }
];



const AdditionalInformation = ({ control, errors }: AdditionalInformationProps) => {
    return (
        <Card>
            <h4 className="mb-6">Additional Information </h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="Calendar"
                    invalid={Boolean(errors.calendar)}
                    errorMessage={errors.calendar?.message}
                >
                    <Controller
                        name="calendar" control={control}
                        render={({ field }) =>
                            <Select
                                options={calendarOptions}
                                onChange={(option) => field.onChange(option)}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Attendance"
                    invalid={Boolean(errors.attendance)}
                    errorMessage={errors.attendance?.message}
                >
                    <Controller
                        name="attendance"
                        control={control}
                        render={({ field }) =>
                            <Select
                                options={attendanceOptions}
                                onChange={(option) => field.onChange(option)}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Shift Type"
                    invalid={Boolean(errors.shiftType)}
                    errorMessage={errors.shiftType?.message}
                >
                    <Controller
                        name="shiftType"
                        control={control}
                        render={({ field }) =>
                            <Select
                                options={shiftTypeOptions}
                                onChange={(option) => field.onChange(option)}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Shift Group"
                    invalid={Boolean(errors.shiftGroup)}
                    errorMessage={errors.shiftGroup?.message}
                >
                    <Controller
                        name="shiftGroup"
                        control={control}
                        render={({ field }) =>
                            <Select
                                options={shiftGroupOptions}
                                onChange={(option) => field.onChange(option)}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Employment Status"
                    invalid={Boolean(errors.employmentStatus)}
                    errorMessage={errors.employmentStatus?.message}
                >
                    <Controller
                        name="employmentStatus"
                        control={control}
                        render={({ field }) =>
                            <Select
                                options={employmentStatusOptions}
                                onChange={(option) => field.onChange(option)}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Confirmation Due Date"
                    invalid={Boolean(errors.confirmationDueDate)}
                    errorMessage={errors.confirmationDueDate?.message}
                >
                    <Controller
                        name="confirmationDueDate"
                        control={control}
                        render={({ field }) =>
                            <Input
                                type="date"
                                {...field}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Full/Part Time"
                    invalid={Boolean(errors.fullPartTime)}
                    errorMessage={errors.fullPartTime?.message}
                >
                    <Controller
                        name="fullPartTime"
                        control={control}
                        render={({ field }) =>
                            <Select
                                options={employmentTypeOptions}
                                onChange={(option) => field.onChange(option)}
                            />
                        }
                    />
                </FormItem>
                <FormItem label="Contract Type" invalid={Boolean(errors.contractType)} errorMessage={errors.contractType?.message}>
                    <Controller name="contractType" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Contract End Date" invalid={Boolean(errors.contractEndDate)} errorMessage={errors.contractEndDate?.message}>
                    <Controller name="contractEndDate" control={control} render={({ field }) => <Input type="date" {...field} />} />
                </FormItem>
                <FormItem label="Contractor" invalid={Boolean(errors.contractor)} errorMessage={errors.contractor?.message}>
                    <Controller name="contractor" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Experience Category" invalid={Boolean(errors.experienceCategory)} errorMessage={errors.experienceCategory?.message}>
                    <Controller name="experienceCategory" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Experience in Months" invalid={Boolean(errors.experienceInMonth)} errorMessage={errors.experienceInMonth?.message}>
                    <Controller name="experienceInMonth" control={control} render={({ field }) => <Input type="number" {...field} />} />
                </FormItem>
                <FormItem label="Notice Period (Days)" invalid={Boolean(errors.noticePeriodInDays)} errorMessage={errors.noticePeriodInDays?.message}>
                    <Controller name="noticePeriodInDays" control={control} render={({ field }) => <Input type="number" {...field} />} />
                </FormItem>
                <FormItem label="Secretary" invalid={Boolean(errors.secretary)} errorMessage={errors.secretary?.message}>
                    <Controller name="secretary" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <div className="flex items-center justify-between gap-8">
                    <FormItem>
                        <Controller
                            name="reEmployed"
                            control={control}
                            render={({ field }) => (
                                <div className="flex items-center justify-between gap-8">
                                    <div className="flex items-center justify-between gap-1">
                                        <Switcher
                                            checked={field.value}
                                            onChange={(checked) => {
                                                field.onChange(checked);
                                            }}
                                        />
                                        <p>Re-Employed</p>
                                    </div>
                                </div>
                            )}
                        />
                    </FormItem>

                    <FormItem
                        label="Old Employee No"
                        invalid={Boolean(errors.oldEmployeeNumber)}
                        errorMessage={errors.oldEmployeeNumber?.message}
                    >
                        <Controller name="oldEmployeeNumber" control={control} render={({ field }) => <Input type="text" {...field} />} />
                    </FormItem>
                </div>
                <div className="flex items-center justify-between gap-8">
                    <FormItem>
                        <Controller
                            name="systemUser"
                            control={control}
                            render={({ field }) => (
                                <div className="flex items-center justify-between gap-8">
                                    <div className="flex items-center justify-between gap-1">
                                        <Switcher
                                            checked={field.value}
                                            onChange={(checked) => {
                                                field.onChange(checked);
                                            }}
                                        />
                                        <p>System User</p>
                                    </div>
                                </div>
                            )}
                        />
                    </FormItem>

                    <FormItem
                        label="Original Hire Date"
                        invalid={Boolean(errors.originalHireDate)}
                        errorMessage={errors.originalHireDate?.message}
                    >
                        <Controller name="originalHireDate" control={control} render={({ field }) => <Input type="date" {...field} />} />
                    </FormItem>
                </div>
            </div>
        </Card>
    )
}

export default AdditionalInformation
