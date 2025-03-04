import Card from '@/components/ui/Card'
import Tabs from '@/components/ui/Tabs'
import Loading from '@/components/shared/Loading'
import { apiGetCustomer } from '@/services/CustomersService'
import useSWR from 'swr'
import { useParams } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import { Employee, GetEmployeesListResponse } from '../EmployeeList/types'
import PersonalInfoSection from './components/PersonalInfoSection'
import OrganizationSection from './components/OrganizationSection'
import PayRollSection from './components/PayrollSection'
import AdditionalInformation from './components/AdditionalInformation'
import EmployeeDetailHeader from './components/EmployeeDetailHeader'

const { TabNav, TabList, TabContent } = Tabs

const Details = () => {
    const { name } = useParams()

    const { data, isLoading } = useSWR(
        ['/api/customers', { name: name as string }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) => apiGetCustomer<GetEmployeesListResponse, { name: string }>(params),
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
            evalidateOnFocus: false,
        },
    )

    // const employeeData = data?.data || []
    const employeeData: Employee | undefined = data?.data

    return (
        <Loading loading={isLoading}>
            {!isEmpty(employeeData) && (
                <div className="flex flex-col xl:flex-row gap-4">
                    <Card className="w-full">
                        <EmployeeDetailHeader data={employeeData}/>
                        <Tabs defaultValue="personal">
                            <TabList>
                                <TabNav value="personal">Personal</TabNav>
                                <TabNav value="organization">Organization</TabNav>
                                <TabNav value="additionalInfo">Additional Information</TabNav>
                                <TabNav value="payroll">Payroll</TabNav>
                            </TabList>
                            <div className="p-4">
                                <TabContent value="personal">
                                    {<PersonalInfoSection data={employeeData} />}
                                </TabContent>
                                <TabContent value="organization">
                                    <OrganizationSection data={employeeData} />
                                </TabContent>
                                <TabContent value="additionalInfo">
                                    <AdditionalInformation data={employeeData} />
                                </TabContent>
                                <TabContent value="payroll">
                                    <PayRollSection data={employeeData} />
                                </TabContent>
                            </div>
                        </Tabs>
                    </Card>
                </div>
            )}
        </Loading>
    )
}

export default Details