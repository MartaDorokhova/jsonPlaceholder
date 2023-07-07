import { useEffect, useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [toDos, setToDos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setToDos(loadedProducts);
			})
			.finally(() => setIsLoading(false));
	}, []);
	return (
		<div className={styles.app}>
			<p>Список дел:</p>
			{isLoading ? (
				<div>......</div>
			) : (
				toDos.map(({ id, title }) => (
					<div className={styles.deal} key={id}>
						<div className={styles.number}>{id}</div> - {title}
					</div>
				))
			)}
		</div>
	);
};
