import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'

type CorporateBankProps = FormSectionBaseProps


const CorporateBank = ({ control, errors }: CorporateBankProps) => {
    return (
        <Card>
            <h4 className="mb-6">Corporate Bank</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem label="Bank Name" invalid={Boolean(errors.bankName)} errorMessage={errors.bankName?.message}>
                    <Controller name="bankName" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem label="Bank Address" invalid={Boolean(errors.bankAddress)} errorMessage={errors.bankAddress?.message}>
                    <Controller name="bankAddress" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem label="Branch Name" invalid={Boolean(errors.branchName)} errorMessage={errors.branchName?.message}>
                    <Controller name="branchName" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem label="Account #" invalid={Boolean(errors.accountNumber)} errorMessage={errors.accountNumber?.message}>
                    <Controller name="accountNumber" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem label="Name of Account Holder" invalid={Boolean(errors.accountHolderName)} errorMessage={errors.accountHolderName?.message}>
                    <Controller name="accountHolderName" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem label="Sort Code" invalid={Boolean(errors.sortCode)} errorMessage={errors.sortCode?.message}>
                    <Controller name="sortCode" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem label="Type of Transfer" invalid={Boolean(errors.transferType)} errorMessage={errors.transferType?.message}>
                    <Controller name="transferType" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem label="% on Net Pay" invalid={Boolean(errors.netPayPercentage)} errorMessage={errors.netPayPercentage?.message}>
                    <Controller name="netPayPercentage" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem label="SWIFT Code" invalid={Boolean(errors.swiftCode)} errorMessage={errors.swiftCode?.message}>
                    <Controller name="swiftCode" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem label="Bank URL" invalid={Boolean(errors.bankUrl)} errorMessage={errors.bankUrl?.message}>
                    <Controller name="bankUrl" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem label="Country of the Bank" invalid={Boolean(errors.bankCountry)} errorMessage={errors.bankCountry?.message}>
                    <Controller name="bankCountry" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem label="Bank Phone #" invalid={Boolean(errors.bankPhone)} errorMessage={errors.bankPhone?.message}>
                    <Controller name="bankPhone" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem label="Contact Person" invalid={Boolean(errors.contactPerson)} errorMessage={errors.contactPerson?.message}>
                    <Controller name="contactPerson" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem label="Account Type" invalid={Boolean(errors.accountType)} errorMessage={errors.accountType?.message}>
                    <Controller name="accountType" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem label="Currency" invalid={Boolean(errors.currency)} errorMessage={errors.currency?.message}>
                    <Controller name="currency" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem label="Salary Account" invalid={Boolean(errors.salaryAccount)} errorMessage={errors.salaryAccount?.message}>
                    <Controller name="salaryAccount" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem label="IFS No." invalid={Boolean(errors.ifsNo)} errorMessage={errors.ifsNo?.message}>
                    <Controller name="ifsNo" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
            </div>
        </Card>
    )
}

export default CorporateBank 
