import { useState } from 'react'
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import CustomerForm from '../CustomerForm'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import sleep from '@/utils/sleep'
import { TbTrash } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import type { EmployeeFormSchema } from '../CustomerForm'

const CustomerEdit = () => {
    const navigate = useNavigate()

    const [discardConfirmationOpen, setDiscardConfirmationOpen] =
        useState(false)
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleFormSubmit = async (values: EmployeeFormSchema) => {
        console.log('Submitted values', values)
        setIsSubmiting(true)
        await sleep(800)
        setIsSubmiting(false)
        toast.push(
            <Notification type="success">Customer created!</Notification>,
            { placement: 'top-center' },
        )
        navigate('/concepts/customers/employee-list')
    }

    const handleConfirmDiscard = () => {
        setDiscardConfirmationOpen(true)
        toast.push(
            <Notification type="success">Employee discardd!</Notification>,
            { placement: 'top-center' },
        )
        navigate('/concepts/customers/employee-list')
    }

    const handleDiscard = () => {
        setDiscardConfirmationOpen(true)
    }

    const handleCancel = () => {
        setDiscardConfirmationOpen(false)
    }

    return (
        <>
            <CustomerForm
                newEmployee
                defaultValues={{
                    employeeNumber: '',
                    loginId: '',
                    salutation: [],
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    dateOfBirth: '',
                    gender: [],

                    // email: '',
                    img: '',
                    // phoneNumber: '',
                    // dialCode: '',

                    dateOfJoin: '',
                    effectiveFrom: '',
                    position: '',
                    orgStructure: '',
                    location: '',
                    department: '',
                    designation: '',
                    grade: '',
                    costCenter: '',
                    officialEmail: '',
                    reportingManager: '',
                    functionalManager: '',
                    action: '',
                    actionReason: '',

                    calendar: '',
                    attendance: '',
                    shiftType: '',
                    shiftGroup: '',
                    employmentStatus: '',
                    confirmationDueDate: '',
                    fullPartTime: '',
                    contractType: '',
                    contractEndDate: '',
                    contractor: '',
                    experienceCategory: '',
                    experienceInMonth: '',
                    noticePeriodInDays: '',
                    secretary: '',
                    oldEmployeeNumber: '',
                    originalHireDate: '',

                    pan: '',
                    pfNumber: '',
                    esiNumber: '',
                    ptLocation: '',
                    glCode: '',
                    payMode: '',
                    appliedFrom: '',
                    payGroup: '',

                    country: '',
                    address: '',
                    city: '',
                    postcode: '',
                }}
                onFormSubmit={handleFormSubmit}
            >
                <Container>
                    <div className="flex items-center justify-between px-8">
                        <span></span>
                        <div className="flex items-center">
                            <Button
                                className="ltr:mr-3 rtl:ml-3"
                                type="button"
                                customColorClass={() =>
                                    'border-error ring-1 ring-error text-error hover:border-error hover:ring-error hover:text-error bg-transparent'
                                }
                                icon={<TbTrash />}
                                onClick={handleDiscard}
                            >
                                Discard
                            </Button>
                            <Button
                                variant="solid"
                                type="submit"
                                loading={isSubmiting}
                            >
                                Create
                            </Button>
                        </div>
                    </div>
                </Container>
            </CustomerForm>
            <ConfirmDialog
                isOpen={discardConfirmationOpen}
                type="danger"
                title="Discard changes"
                onClose={handleCancel}
                onRequestClose={handleCancel}
                onCancel={handleCancel}
                onConfirm={handleConfirmDiscard}
            >
                <p>
                    Are you sure you want discard this? This action can&apos;t
                    be undo.{' '}
                </p>
            </ConfirmDialog>
        </>
    )
}

export default CustomerEdit
