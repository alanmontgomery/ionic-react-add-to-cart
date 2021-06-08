import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Product from '../components/Product';
import { products } from './products';

const Home = () => {

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Add To Cart Animation</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				{ products.map(product => {

					return <Product key={ product.id } product={ product } />;
				})}
			</IonContent>
		</IonPage>
	);
};

export default Home;
