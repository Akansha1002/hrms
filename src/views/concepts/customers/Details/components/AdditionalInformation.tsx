import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Switcher from '@/components/ui/Switcher'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import { Select } from '@/components/ui/Select'
import { Employee } from '../../EmployeeList/types'

interface AdditionalInfoSectionProps {
    data: Employee
}

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



const AdditionalInformation = () => {
    return (
        <Card>
            <h4 className="mb-6">Additional Information </h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="Calendar"
                >
                    <Select
                        options={calendarOptions}
                    />
                </FormItem>
                <FormItem
                    label="Attendance"
                >
                    <Select
                        options={attendanceOptions}
                    />
                </FormItem>
                <FormItem
                    label="Shift Type"
                >
                    <Select
                        options={shiftTypeOptions}
                    />
                </FormItem>
                <FormItem
                    label="Shift Group"
                >
                    <Select
                        options={shiftGroupOptions}
                    />
                </FormItem>
                <FormItem
                    label="Employment Status"
                >
                    <Select
                        options={employmentStatusOptions}
                    />
                </FormItem>
                <FormItem
                    label="Confirmation Due Date"
                >
                    <Input
                        type="date"
                    />
                </FormItem>
                <FormItem
                    label="Full/Part Time"
                >
                    <Select
                        options={employmentTypeOptions}
                    />
                </FormItem>
                <FormItem
                    label="Contract Type"
                >
                    <Input
                        type="text"
                    />
                </FormItem>
                <FormItem
                    label="Contract End Date"
                >
                    <Input
                        type="date"
                    />
                </FormItem>
                <FormItem
                    label="Contractor"
                >
                    <Input
                        type="text"
                    />
                </FormItem>
                <FormItem
                    label="Experience Category"
                >
                    <Input
                        type="text"
                    />
                </FormItem>
                <FormItem
                    label="Experience in Months"
                >
                    <Input
                        type="number"
                    />
                </FormItem>
                <FormItem
                    label="Notice Period (Days)"
                >
                    <Input
                        type="number"
                    />
                </FormItem>
                <FormItem
                    label="Secretary"
                >
                    <Input
                        type="text"
                    />
                </FormItem>
                <div className="flex items-center justify-between gap-8">
                    <FormItem>
                        <div className="flex items-center justify-between gap-8">
                            <div className="flex items-center justify-between gap-1">
                                <Switcher
                                />
                                <p>Re-Employed</p>
                            </div>
                        </div>
                    </FormItem>
                    {/* <FormItem>
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
                    </FormItem> */}
                    <FormItem
                        label="Old Employee No"
                    >
                        <Input
                            type="text"
                        />
                    </FormItem>
                </div>
                <div className="flex items-center justify-between gap-8">
                    <FormItem>
                        <div className="flex items-center justify-between gap-8">
                            <div className="flex items-center justify-between gap-1">
                                <Switcher
                                />
                                <p>System User</p>
                            </div>
                        </div>
                    </FormItem>

                    <FormItem
                        label="Original Hire Date"
                    >
                        <Input
                            type="date"
                        />
                    </FormItem>
                </div>
            </div>
        </Card>
    )
}

export default AdditionalInformation
