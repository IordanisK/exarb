import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './Navbar';

import styles from "./styles.module.css";

const Main = () => {

	return (
		<div className={styles.main_container}>
			<div>
				<Navbar />
				<Header />
				<AboutUs />
				<SpecialMenu />
				<Chef />
				<Intro />
				<Laurels />
				<Gallery />
				<FindUs />
				<Footer />
			</div>
		</div>
	);
};

export default Main;