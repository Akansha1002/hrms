import Button from '@/components/ui/Button'
import { TbUserPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import useFamilyDetailList from '../hooks/useFamilyDetailList'

const FamilyDetailListActionTools = () => {
    const navigate = useNavigate()

    const { familyDetailList } = useFamilyDetailList()

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <Button
                variant="solid"
                icon={<TbUserPlus className="text-xl" />}
                onClick={() => navigate('/concepts/customers/family-details/create')}
            >
                Add new
            </Button>
        </div>
    )
}

export default FamilyDetailListActionTools