import React, { useContext, useEffect } from 'react'
import { Context } from "../store/appContext";
import { Link, } from "react-router-dom";

import "../../styles/home.css";


export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getContacts();

	}, []);



	return (

		<div className="text-center mt-5">
			{

				Array.isArray(store.contacts) && store.contacts?.map((item, index) => {
					return (<li key={item.id}>{item.name}



					</li>
					)
				})

			}
		</div>



	);
};
