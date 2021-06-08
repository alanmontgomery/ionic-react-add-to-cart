import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import AddToCartButton from "./AddToCartButton";

import styles from "./Product.module.css";

const Product = ({ product }) => {

	const handleAdd = (product) => {

		console.log(`Product added: ${ product.name }`);
		console.log({product});

		//	Do something
		//	Update Main Cart
		//	Global State Stuff
		//	API Call
		//	etc etc
	}

	return (
		<IonCard>
			<IonCardHeader>
				<IonCardTitle>{ product.name }</IonCardTitle>
				<IonCardSubtitle>{ product.description }</IonCardSubtitle>
			</IonCardHeader>
			<IonCardContent>
				<IonGrid>
					<IonRow className="ion-margin-bottom">
						<IonCol size="5">
							<img src={ product.image } alt="product" />
						</IonCol>

						<IonCol size="7">

							<IonText>
								<IonCardSubtitle>Product Features</IonCardSubtitle>
								{ product.features.map((feature, index) => {
									return <p key={ index }>{ feature }</p>;
								})}
							</IonText>
						</IonCol>
					</IonRow>

					<IonRow className={ styles.priceContainer }>
						<div className={ styles.price }>{ product.price }</div>
						<AddToCartButton icon={ true } customOnClick={ () => handleAdd(product) } />
					</IonRow>
				</IonGrid>
			</IonCardContent>
		</IonCard>
	);
}

export default Product;