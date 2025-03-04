import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Switcher from '@/components/ui/Switcher'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { FormSectionBaseProps } from '../types'
import ComputeCtcDrawer from '../../ComputeCtc/components/ComputeCtcDrawer'

type PayRollProps = FormSectionBaseProps


const PayRollSection = ({ control, errors }: PayRollProps) => {
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
                        invalid={Boolean(errors.pan)}
                        errorMessage={errors.pan?.message}
                    >
                        <Controller name="pan" control={control} render={({ field }) => <Input type="text" {...field} />} />
                    </FormItem>
                    <div className="flex items-center justify-between gap-8">
                        <FormItem>
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
                        </FormItem>
                        <FormItem
                            label="PF No."
                            invalid={Boolean(errors.pfNumber)}
                            errorMessage={errors.pfNumber?.message}
                        >
                            <Controller name="pfNumber" control={control} render={({ field }) => <Input type="text" {...field} />} />
                        </FormItem>
                    </div>
                    <div className="flex items-center justify-between gap-8">
                        <FormItem>
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
                        </FormItem>

                        <FormItem
                            label="ESI Number"
                            invalid={Boolean(errors.esiNumber)}
                            errorMessage={errors.esiNumber?.message}
                        >
                            <Controller name="esiNumber" control={control} render={({ field }) => <Input type="text" {...field} />} />
                        </FormItem>

                    </div>
                    <div className="flex items-center justify-between gap-8">
                        <FormItem>
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
                        </FormItem>

                        <FormItem
                            label="PT Location"
                            invalid={Boolean(errors.ptLocation)}
                            errorMessage={errors.ptLocation?.message}
                        >
                            <Controller name="ptLocation" control={control} render={({ field }) => <Input type="text" {...field} />} />
                        </FormItem>

                    </div>
                    <FormItem
                        label="GL Code"
                        invalid={Boolean(errors.glCode)}
                        errorMessage={errors.glCode?.message}
                    >
                        <Controller name="glCode" control={control} render={({ field }) => <Input type="text" {...field} />} />
                    </FormItem>
                    <FormItem
                        label="Pay Mode"
                        invalid={Boolean(errors.payMode)}
                        errorMessage={errors.payMode?.message}
                    >
                        <Controller name="payMode" control={control} render={({ field }) => <Input type="text" {...field} />} />
                    </FormItem>
                    <FormItem
                        label="Applied From"
                        invalid={Boolean(errors.appliedFrom)}
                        errorMessage={errors.appliedFrom?.message}
                    >
                        <Controller name="appliedFrom" control={control} render={({ field }) => <Input type="text" {...field} />} />
                    </FormItem>
                    <FormItem
                        label="Pay Group"
                        invalid={Boolean(errors.payGroup)}
                        errorMessage={errors.payGroup?.message}
                    >
                        <Controller name="payGroup" control={control} render={({ field }) => <Input type="text" {...field} />} />
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
