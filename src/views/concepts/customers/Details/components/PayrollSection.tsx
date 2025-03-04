import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Switcher from '@/components/ui/Switcher'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'
import ComputeCtcDrawer from '../../ComputeCtc/components/ComputeCtcDrawer'
import { Employee } from '../../EmployeeList/types'

interface PayrollSectionProps {
    data: Employee
}

const PayRollSection = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleOnClick = () => {
        setDrawerOpen(true);
    }

    return (
        <>
            <Card>
                <h4 className="mb-6">Payroll</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <FormItem
                        label="PAN"
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
                                    <p>PF Applicable</p>
                                </div>
                            </div>
                        </FormItem>
                        {/* <FormItem>
                            <Controller
                                name="pfApplicable"
                                control={control}
                                render={({ field }) => (
                                    <div className="flex items-center justify-between gap-8">
                                        <div className="flex items-center justify-between gap-1">
                                            <Switcher
                                                checked={field.value}
                                                onChange={(checked) => {
                                                    field.onChange(checked)
                                                }}
                                            />
                                            <p>PF Applicable</p>
                                        </div>
                                    </div>
                                )}
                            />
                        </FormItem> */}
                        <FormItem
                            label="PF No."
                        >
                            <Input
                                type="text"
                            />
                        </FormItem>
                    </div>
                    <div className="flex items-center justify-between gap-8">
                        {/* <FormItem>
                            <Controller
                                name="esiApplicable"
                                control={control}
                                render={({ field }) => (
                                    <div className="flex items-center justify-between gap-8">
                                        <div className="flex items-center justify-between gap-1">
                                            <Switcher
                                                checked={field.value}
                                                onChange={(checked) => {
                                                    field.onChange(checked)
                                                }}
                                            />
                                            <p>ESI Applicable</p>
                                        </div>
                                    </div>
                                )}
                            />
                        </FormItem> */}
                        <FormItem>
                            <div className="flex items-center justify-between gap-8">
                                <div className="flex items-center justify-between gap-1">
                                    <Switcher
                                    />
                                    <p>ESI Applicable</p>
                                </div>
                            </div>
                        </FormItem>
                        <FormItem
                            label="ESI Number"
                        >
                            <Input
                                type="text"
                            />
                        </FormItem>

                    </div>
                    <div className="flex items-center justify-between gap-8">
                        {/* <FormItem>
                            <Controller
                                name="ptApplicable"
                                control={control}
                                render={({ field }) => (
                                    <div className="flex items-center justify-between gap-8">
                                        <div className="flex items-center justify-between gap-1">
                                            <Switcher
                                                checked={field.value}
                                                onChange={(checked) => {
                                                    field.onChange(checked)
                                                }}
                                            />
                                            <p>PT Applicable</p>
                                        </div>
                                    </div>
                                )}
                            />
                        </FormItem> */}
                        <FormItem>
                            <div className="flex items-center justify-between gap-8">
                                <div className="flex items-center justify-between gap-1">
                                    <Switcher
                                    />
                                    <p>PT Applicable</p>
                                </div>
                            </div>
                        </FormItem>
                        <FormItem
                            label="PT Location"
                        >
                            <Input
                                type="text"
                            />
                        </FormItem>
                    </div>
                    <FormItem
                        label="GL Code"
                    >
                        <Input
                            type="text"
                        />
                    </FormItem>
                    <FormItem
                        label="Pay Mode"
                    >
                        <Input
                            type="text"
                        />
                    </FormItem>
                    <FormItem
                        label="Applied From"
                    >
                        <Input
                            type="text"
                        />
                    </FormItem>
                    <FormItem
                        label="Pay Group"
                    >
                        <Input
                            type="text"
                        />
                    </FormItem>
                    <FormItem className="inline-flex flex-wrap xl:flex gap-2">
                        <Button variant="solid" onClick={handleOnClick}>
                            Compute CTC
                        </Button>
                    </FormItem>
                </div>
            </Card>
            <ComputeCtcDrawer
                open={drawerOpen}
                onDrawerOpen={setDrawerOpen}
            />
        </>
    )
}

export default PayRollSection
