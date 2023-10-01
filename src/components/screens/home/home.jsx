import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../providers/AuthProvider.jsx'
import CreateCarForm from './car-form/car-form.jsx'
import CarItem from './car-item/car-item.jsx'
import { cars as carsData } from './cars.data.js'

function Home() {
	// useMemo для получения фильтра без постоянного рендера (пока не изменятся данные)

	// const filteredCars = useMemo(() => cars.filter(car => car.price > 20000), [])

	const [cars, setCars] = useState(carsData)

	console.log(cars)

	// useEffect

	useEffect(() => {
		console.log('Hey')
	}, [cars])

	const { user, setUser } = useContext(AuthContext)

	return (
		<>
			<div>
				<h1>Cars-Catalog</h1>

				{user ? (
					<>
						<h2>Welcome {user.name}</h2>
						<button onClick={() => setUser(null)}>Logout</button>
					</>
				) : (
					<button onClick={() => setUser({ name: 'birnares' })}>Login</button>
				)}
				<CreateCarForm setCars={setCars} />
				<div>
					{cars.length ? (
						cars.map(car => <CarItem key={car.id} car={car} />)
					) : (
						<p>There are no cars</p>
					)}
				</div>
			</div>
		</>
	)
}

export default Home
