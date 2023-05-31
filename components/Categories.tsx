import { FC } from 'react';
import Category from './Category'
import API from '@/api/Api'

const getCategories = async () => {
  try {
    const response = await API.get('categories');
    return response
  } catch (e) {
    console.log(e)
    return []
  }
}
const Categories: FC = async () => {
  const categoriesData: any = await getCategories()
  return (
    <div>
      <p className="text-md	font-semibold my-3" > Catergories </p>
      <div className="category-list">
        {
          categoriesData.length === 0
            ? <div className="no-highlights"> No Highlights are Available </div>
            :

            categoriesData.map(({ name, activities }: any, i: number) => (
              <Category
                key={name + i}
                name={name}
                activities={activities}
              />
            ))
        }
      </div>
    </div>
  )
}

export default Categories