import { Employee } from "../../EmployeeList/types"
import Tag from '@/components/ui/Tag'
import Dropdown from '@/components/ui/Dropdown'
import Button from '@/components/ui/Button'
import { useParams } from "react-router-dom"
import useSWR from "swr"
import { apiUpdateEmployeeWorkflowState } from "@/services/CustomersService"

interface EmployeeDetailHeaderProps {
    data: Employee
}

const EmployeeDetailHeader = ({ data }: EmployeeDetailHeaderProps) => {
    const { id } = useParams()

    const { mutate } = useSWR(null, null, {
        revalidateOnFocus: false,
        revalidateIfStale: false,
    });

    const handleWorkflowUpdate = async (workflowState: string) => {
        if (!id) return;
        if (workflowState === "Pending HR Manager") {
            try {
                await apiUpdateEmployeeWorkflowState(id, workflowState);
                mutate();
            } catch (error) {
                console.error("Error updating workflow state", error);
            }
        }
    };

    const Toggle = <Button variant="solid">Actions</Button>

    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-4">
            <div className="flex gap-4">
                <h3>{data?.employee_name}</h3>
                <Tag>
                    <span>{data?.workflow_state}</span>
                </Tag>
            </div>
            {data?.workflow_state !== "Onboarded" && (
                <div>
                    <Dropdown renderTitle={Toggle}>
                        {data?.workflow_state === "Pending" && (
                            <Dropdown.Item
                                eventKey="a"
                                onClick={() => handleWorkflowUpdate("Verification from HR Manager")}
                            >
                                Send to HR Manager
                            </Dropdown.Item>
                        )}
                        {data?.workflow_state === "Pending Employee End" && (
                            <Dropdown.Item eventKey="b">Send to HR User</Dropdown.Item>
                        )}
                        {data?.workflow_state === "Verification from HR Manager" && (
                            <>
                                <Dropdown.Item eventKey="c">Approve</Dropdown.Item>
                                <Dropdown.Item eventKey="d">Reject</Dropdown.Item>
                            </>
                        )}
                        <Dropdown.Item eventKey="b">Help</Dropdown.Item>
                    </Dropdown>
                </div>
            )}
        </div>
    )
}

export default EmployeeDetailHeader