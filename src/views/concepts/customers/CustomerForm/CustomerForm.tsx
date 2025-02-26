// import { useEffect } from 'react'
// import { Form } from '@/components/ui/Form'
// import Container from '@/components/shared/Container'
// import BottomStickyBar from '@/components/template/BottomStickyBar'
// import OverviewSection from './OverviewSection'
// import AddressSection from './AddressSection'
// import TagsSection from './TagsSection'
// import ProfileImageSection from './ProfileImageSection'
// import AccountSection from './AccountSection'
// import isEmpty from 'lodash/isEmpty'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import type { ZodType } from 'zod'
// import type { CommonProps } from '@/@types/common'
// import type { CustomerFormSchema } from './types'
// import AdditionalInformation from './AdditionalInformation'
// import PayRoll from './PayrollSection'
// import PermanentAddress from './PermanentAddress'
// import CurrentAddress from './CurrentAddress'
// import UpdatePhone from './UpdatePhone'
// import FamilyDetails from './FamilyDetails'
// import EducationDetails from './EducationDetails'
// import PastEmploymentDetails from './PastEmploymentDetails'

// type CustomerFormProps = {
//     onFormSubmit: (values: CustomerFormSchema) => void
//     defaultValues?: CustomerFormSchema
//     newCustomer?: boolean
// } & CommonProps

// const validationSchema: ZodType<CustomerFormSchema> = z.object({
//     employeeNumber: z.string().min(1, { message: 'Employee Number required' }),
//     loginId: z.string().min(1, { message: 'Login ID required' }),
//     salutation: z.array(z.object({ value: z.string(), label: z.string() })),
//     firstName: z.string().min(1, { message: 'First name required' }),
//     middleName: z.string().min(1, { message: 'Middle name required' }),
//     lastName: z.string().min(1, { message: 'Last name required' }),
//     dateOfBirth: z.string().min(1, { message: 'Date of Birth required' }),
//     gender: z.array(z.object({ value: z.string(), label: z.string() })),

//     email: z
//         .string()
//         .min(1, { message: 'Email required' })
//         .email({ message: 'Invalid email' }),
//     dialCode: z.string().min(1, { message: 'Please select your country code' }),
//     phoneNumber: z
//         .string()
//         .min(1, { message: 'Please input your mobile number' }),

//     dateOfJoin: z.string().min(1, { message: 'Date of join required' }),
//     effectiveFrom: z.string().min(1, { message: 'Effective from required' }),
//     position: z.string().min(1, { message: 'Position required' }),
//     orgStructure: z.string().min(1, { message: 'Organization structure required' }),
//     location: z.string().min(1, { message: 'Location required' }),
//     department: z.string().min(1, { message: 'Department required' }),
//     designation: z.string().min(1, { message: 'Designation required' }),
//     grade: z.string().min(1, { message: 'Grade required' }),
//     costCenter: z.string().min(1, { message: 'Cost center required' }),
//     officialEmail: z.string().email({ message: 'Invalid email' }),
//     reportingManager: z.string().min(1, { message: 'Reporting Manager required' }),
//     functionalManager: z.string().min(1, { message: 'Functional Manager required' }),
//     action: z.string().min(1, { message: 'Action required' }),
//     actionReason: z.string().min(1, { message: 'Action Rerason required' }),

//     calendar: z.string().min(1, { message: 'Calendar required' }),
//     attendance: z.string().min(1, { message: 'Attendance required' }),
//     shiftType: z.string().min(1, { message: 'Shift Type required' }),
//     shiftGroup: z.string().min(1, { message: 'Shift Group required' }),
//     employmentStatus: z.string().min(1, { message: 'Employment Status required' }),
//     confirmationDueDate: z.string().min(1, { message: 'Confirmation Due Date required' }),
//     fullPartTime: z.string().min(1, { message: 'Full/Part Time required' }),
//     contractType: z.string().min(1, { message: 'Contract Type required' }),
//     contractEndDate: z.string().min(1, { message: 'Contract End Date required' }),
//     contractor: z.string().min(1, { message: 'Contractor required' }),
//     experienceCategory: z.string().min(1, { message: 'Experience Category required' }),
//     experienceInMonth: z.string().min(1, { message: 'Experience in Month required' }),
//     noticePeriodInDays: z.string().min(1, { message: 'Notice Period in Days required' }),
//     secretary: z.string().min(1, { message: 'Secretary required' }),
//     oldEmployeeNumber: z.string().min(1, { message: 'Old Employee Number required' }),
//     originalHireDate: z.string().min(1, { message: 'Original Hire Date required' }),

//     pan: z.string().min(1, { message: 'PAN required' }),
//     pfNumber: z.string().min(1, { message: 'PF Number required' }),
//     esiNumber: z.string().min(1, { message: 'ESI Number required' }),
//     ptLocation: z.string().min(1, { message: 'PT Location required' }),
//     glCode: z.string().min(1, { message: 'GL Code required' }),
//     payMode: z.string().min(1, { message: 'Pay Mode required' }),
//     appliedFrom: z.string().min(1, { message: 'Applied From required' }),
//     payGroup: z.string().min(1, { message: 'Pay Group required' }),

//     country: z.string().min(1, { message: 'Please select a country' }),
//     address: z.string().min(1, { message: 'Addrress required' }),
//     postcode: z.string().min(1, { message: 'Postcode required' }),
//     city: z.string().min(1, { message: 'City required' }),
//     img: z.string(),
//     tags: z.array(z.object({ value: z.string(), label: z.string() })),
// })

// const CustomerForm = (props: CustomerFormProps) => {
//     const {
//         onFormSubmit,
//         defaultValues = {},
//         newCustomer = false,
//         children,
//     } = props

//     const {
//         handleSubmit,
//         reset,
//         formState: { errors },
//         control,
//     } = useForm<CustomerFormSchema>({
//         defaultValues: {
//             ...{
//                 banAccount: false,
//                 accountVerified: true,
//             },
//             ...defaultValues,
//         },
//         resolver: zodResolver(validationSchema),
//     })

//     useEffect(() => {
//         if (!isEmpty(defaultValues)) {
//             reset(defaultValues)
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [JSON.stringify(defaultValues)])

//     const onSubmit = (values: CustomerFormSchema) => {
//         onFormSubmit?.(values)
//     }

//     return (
//         <Form
//             className="flex w-full h-full"
//             containerClassName="flex flex-col w-full justify-between"
//             onSubmit={handleSubmit(onSubmit)}
//         >
//             <Container>
//                 <div className="flex flex-col md:flex-row gap-4">
//                     <div className="gap-4 flex flex-col flex-auto">
//                         <OverviewSection control={control} errors={errors} />
//                         <AddressSection control={control} errors={errors} />
//                         <AdditionalInformation control={control} errors={errors} />
//                         <PayRoll control={control} errors={errors} />

//                         {/* <PermanentAddress control={control} errors={errors} />
//                         <CurrentAddress control={control} errors={errors} />
//                         <UpdatePhone control={control} errors={errors} />

//                         <FamilyDetails control={control} errors={errors} />
//                         <EducationDetails control={control} errors={errors} />
//                         <PastEmploymentDetails control={control} errors={errors} /> */}
//                     </div>
//                     <div className="md:w-[370px] gap-4 flex flex-col">
//                         <ProfileImageSection
//                             control={control}
//                             errors={errors}
//                         />
//                         {/* <TagsSection control={control} errors={errors} /> */}
//                         {!newCustomer && (
//                             <AccountSection control={control} errors={errors} />
//                         )}
//                     </div>
//                 </div>
//             </Container>
//             <BottomStickyBar>{children}</BottomStickyBar>
//         </Form>
//     )
// }

// export default CustomerForm    





import { useEffect } from 'react'
import { Form } from '@/components/ui/Form'
import Container from '@/components/shared/Container'
import BottomStickyBar from '@/components/template/BottomStickyBar'
import OverviewSection from './OverviewSection'
import AddressSection from './AddressSection'
import TagsSection from './TagsSection'
import ProfileImageSection from './ProfileImageSection'
import AccountSection from './AccountSection'
import isEmpty from 'lodash/isEmpty'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import type { ZodType } from 'zod'
import type { CommonProps } from '@/@types/common'
import type { CustomerFormSchema } from './types'
import AdditionalInformation from './AdditionalInformation'
import PayRoll from './PayrollSection'
import { useState } from 'react'
import Steps from '@/components/ui/Steps'
import Button from '@/components/ui/Button'
type CustomerFormProps = {
    onFormSubmit: (values: CustomerFormSchema) => void
    defaultValues?: CustomerFormSchema
    newCustomer?: boolean
} & CommonProps

const validationSchema: ZodType<CustomerFormSchema> = z.object({
    employeeNumber: z.string().min(1, { message: 'Employee Number required' }),
    loginId: z.string().min(1, { message: 'Login ID required' }),
    salutation: z.array(z.object({ value: z.string(), label: z.string() })),
    firstName: z.string().min(1, { message: 'First name required' }),
    middleName: z.string().min(1, { message: 'Middle name required' }),
    lastName: z.string().min(1, { message: 'Last name required' }),
    dateOfBirth: z.string().min(1, { message: 'Date of Birth required' }),
    gender: z.array(z.object({ value: z.string(), label: z.string() })),

    email: z
        .string()
        .min(1, { message: 'Email required' })
        .email({ message: 'Invalid email' }),
    dialCode: z.string().min(1, { message: 'Please select your country code' }),
    phoneNumber: z
        .string()
        .min(1, { message: 'Please input your mobile number' }),

    // dateOfJoin: z.string().min(1, { message: 'Date of join required' }),
    // effectiveFrom: z.string().min(1, { message: 'Effective from required' }),
    // position: z.string().min(1, { message: 'Position required' }),
    // orgStructure: z.string().min(1, { message: 'Organization structure required' }),
    // location: z.string().min(1, { message: 'Location required' }),
    // department: z.string().min(1, { message: 'Department required' }),
    // designation: z.string().min(1, { message: 'Designation required' }),
    // grade: z.string().min(1, { message: 'Grade required' }),
    // costCenter: z.string().min(1, { message: 'Cost center required' }),
    // officialEmail: z.string().email({ message: 'Invalid email' }),
    // reportingManager: z.string().min(1, { message: 'Reporting Manager required' }),
    // functionalManager: z.string().min(1, { message: 'Functional Manager required' }),
    // action: z.string().min(1, { message: 'Action required' }),
    // actionReason: z.string().min(1, { message: 'Action Rerason required' }),

    // calendar: z.string().min(1, { message: 'Calendar required' }),
    // attendance: z.string().min(1, { message: 'Attendance required' }),
    // shiftType: z.string().min(1, { message: 'Shift Type required' }),
    // shiftGroup: z.string().min(1, { message: 'Shift Group required' }),
    // employmentStatus: z.string().min(1, { message: 'Employment Status required' }),
    // confirmationDueDate: z.string().min(1, { message: 'Confirmation Due Date required' }),
    // fullPartTime: z.string().min(1, { message: 'Full/Part Time required' }),
    // contractType: z.string().min(1, { message: 'Contract Type required' }),
    // contractEndDate: z.string().min(1, { message: 'Contract End Date required' }),
    // contractor: z.string().min(1, { message: 'Contractor required' }),
    // experienceCategory: z.string().min(1, { message: 'Experience Category required' }),
    // experienceInMonth: z.string().min(1, { message: 'Experience in Month required' }),
    // noticePeriodInDays: z.string().min(1, { message: 'Notice Period in Days required' }),
    // secretary: z.string().min(1, { message: 'Secretary required' }),
    // oldEmployeeNumber: z.string().min(1, { message: 'Old Employee Number required' }),
    // originalHireDate: z.string().min(1, { message: 'Original Hire Date required' }),

    // pan: z.string().min(1, { message: 'PAN required' }),
    // pfNumber: z.string().min(1, { message: 'PF Number required' }),
    // esiNumber: z.string().min(1, { message: 'ESI Number required' }),
    // ptLocation: z.string().min(1, { message: 'PT Location required' }),
    // glCode: z.string().min(1, { message: 'GL Code required' }),
    // payMode: z.string().min(1, { message: 'Pay Mode required' }),
    // appliedFrom: z.string().min(1, { message: 'Applied From required' }),
    // payGroup: z.string().min(1, { message: 'Pay Group required' }),

    country: z.string().min(1, { message: 'Please select a country' }),
    address: z.string().min(1, { message: 'Addrress required' }),
    postcode: z.string().min(1, { message: 'Postcode required' }),
    city: z.string().min(1, { message: 'City required' }),
    img: z.string(),
    tags: z.array(z.object({ value: z.string(), label: z.string() })),
})

const CustomerForm = (props: CustomerFormProps) => {
    const {
        onFormSubmit,
        defaultValues = {},
        newCustomer = false,
        children,
    } = props

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<CustomerFormSchema>({
        defaultValues: {
            ...{
                banAccount: false,
                accountVerified: true,
            },
            ...defaultValues,
        },
        resolver: zodResolver(validationSchema),
    })

    useEffect(() => {
        if (!isEmpty(defaultValues)) {
            reset(defaultValues)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(defaultValues)])

    const onSubmit = (values: CustomerFormSchema) => {
        onFormSubmit?.(values)
    }

    const [step, setStep] = useState(0)

    const steps = [
        { component: <OverviewSection control={control} errors={errors} /> },
        { component: <AddressSection control={control} errors={errors} /> },
        { component: <AdditionalInformation control={control} errors={errors} /> },
        { component: <PayRoll control={control} errors={errors} /> }
    ]

    const onChange = (nextStep: number) => {
        if (nextStep < 0) {
            setStep(0)
        } else if (nextStep > 3) {
            setStep(3)
        } else {
            setStep(nextStep)
        }
    }

    const onNext = () => onChange(step + 1)

    const onPrevious = () => onChange(step - 1)


    return (
        <Form
            className="flex w-full h-full"
            containerClassName="flex flex-col w-full justify-between"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div>
                <Steps current={step}>
                    <Steps.Item title="Personal" />
                    <Steps.Item title="Organization" />
                    <Steps.Item title="additional Information" />
                    <Steps.Item title="Payroll" />
                </Steps>
                <Container>
                    <div className="flex flex-col md:flex-row gap-4 mt-10">
                        <div className="gap-4 flex flex-col flex-auto">
                            {steps[step].component}
                        </div>
                        <div className="md:w-[370px] gap-4 flex flex-col">
                            <ProfileImageSection
                                control={control}
                                errors={errors}
                            />
                        </div>
                    </div>
                </Container>
                <div className="mt-4 text-right">
                    <Button
                        className="mx-2"
                        disabled={step === 0}
                        onClick={onPrevious}
                    >
                        Previous
                    </Button>
                    <Button disabled={step === 3} variant="solid" onClick={onNext}>
                        {step === 3 ? 'Completed' : 'Next'}
                    </Button>
                </div>
            </div>
            {/* <Container>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="gap-4 flex flex-col flex-auto">

                    </div>
                    <div className="md:w-[370px] gap-4 flex flex-col">
                        <ProfileImageSection
                            control={control}
                            errors={errors}
                        />
                        <TagsSection control={control} errors={errors} />
                        {!newCustomer && (
                            <AccountSection control={control} errors={errors} />
                        )}
                    </div>
                </div>
            </Container> */}
            <BottomStickyBar>{children}</BottomStickyBar>
        </Form>
    )
}

export default CustomerForm    