import React from 'react'
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import PrimaryTopMenu from "./PrimaryTopMenu";
function App() {
	return (
		<div>
			<Header/>
			<PrimaryTopMenu/>
			<Main />
			<Footer/>
		</div>
	);
}
export default App