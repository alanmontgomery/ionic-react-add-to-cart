import { CreateAnimation, IonButton, IonIcon } from '@ionic/react';
import { useRef, useState } from 'react';

import styles from "./AddToCartButton.module.css";
import { cartOutline } from "ionicons/icons";

const AddToCartButton = ({ icon = true, color = "primary", customOnClick = null }) => {

	const iconRef = useRef();
  	const [ hidden, setHidden ] = useState(true);

	const floatStyle = {

		display: hidden ? "none" : "",
		position: "absolute"
	};

	const floatGrowAnimation = {

		property: "transform",
		fromValue: "translateY(0) scale(1)",
		toValue: "translateY(-55px) scale(1.2)"
    };

	const colorAnimation = {
    	
		property: "color",
      	fromValue: "white",
      	toValue: `var(--ion-color-${ color }`
    };

	const mainAnimation = {
		
		duration: 700,
		iterations: "1",
		fromTo: [ floatGrowAnimation, colorAnimation ],
		easing: "cubic-bezier(0.25, 0.7, 0.25, 0.7)"
	};

	const handleClick = async () => {

		setHidden(false);
		await iconRef.current.animation.play();
		setHidden(true);
		customOnClick && customOnClick();
	}

	return (
		<div className={ styles.buttonContainer }>
			<IonButton color={ color } className={ styles.button } onClick={ handleClick }>
          		{ !icon && "Add to cart" }
				{ icon && <IonIcon icon={ cartOutline } /> }
        	</IonButton>

			<CreateAnimation ref={ iconRef } { ...mainAnimation }>
					<IonIcon icon={ cartOutline } size="large" style={ floatStyle } />
				</CreateAnimation>
		</div>
	);
}

export default AddToCartButton;