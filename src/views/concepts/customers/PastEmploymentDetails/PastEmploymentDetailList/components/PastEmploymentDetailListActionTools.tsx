import Button from '@/components/ui/Button'
import { TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import usePastEmploymentDetailList from '../hooks/usePastEmploymentDetailList'

const PastEmploymentDetailListActionTools = () => {
    const navigate = useNavigate()

    const { pastEmploymentDetailList } = usePastEmploymentDetailList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <Button
                variant="solid"
                icon={<TbUserPlus className="text-xl" />}
                onClick={() => navigate('/concepts/customers/pastEmployment-details/create')}
            >
                Add new
            </Button>
        </div>
    )
}

export default PastEmploymentDetailListActionTools