import { useState } from 'react'
import styles from './CarForm.module.css'

// useState

const clearData = {
	name: '',
	price: '',
	image: '',
}

// eslint-disable-next-line react/prop-types
const CreateCarForm = ({ setCars }) => {
	// const [name, setName] = useState('')
	// const [price, setPrice] = useState('')
	// const [image, setImage] = useState('')
	// сокращаем код

	const [data, setData] = useState(clearData)

	const createCar = e => {
		e.preventDefault()
		setCars(prev => [
			...prev,
			{
				id: prev.length + 1,
				...data,
			},
		])
		setData(clearData)
	}

	// https://youtu.be/k35Jt-VnzO8?t=2735
	return (
		<form className={styles.form}>
			<input
				placeholder='Name'
				onChange={e =>
					setData(prev => ({
						...prev,
						name: e.target.value,
					}))
				}
				value={data.name}
			/>
			<input
				placeholder='Price'
				onChange={e =>
					setData(prev => ({
						...prev,
						price: e.target.value,
					}))
				}
				value={data.price}
			/>
			<input
				placeholder='Image'
				onChange={e =>
					setData(prev => ({
						...prev,
						image: e.target.value,
					}))
				}
				value={data.image}
			/>

			<button className='btn' onClick={e => createCar(e)}>
				Create
			</button>
		</form>
	)
}
export default CreateCarForm
