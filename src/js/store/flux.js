const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			Agenda:[],
			contacts:[],
			contactToEdit: {
				id: "",
				name: "",
				phone: "",
				email: "",
				address: ""
			},
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				console.log("Se carga la api desde flux")
				setStore ({contacts:[]});
				
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch(`https://playground.4geeks.com/contact/agendas/Sergio/contacts`)
					.then((response) => response.json())
					.then((data)=> setStore({contacts : data.contacts }))
				
			},
			
			setContacts: (contacts) => { 
				setStore({ contacts: contacts })
			},
			
			createContactList: async () => {
				const actions = getActions();
				await fetch(
					"https://playground.4geeks.com/contact/agendas/Sergio", { 
						method: "POST",
					}
				);
				actions.getContacts(); 
			},

			getContacts: async () => {
				const actions = getActions();				
					const response = await fetch(
						"https://playground.4geeks.com/contact/agendas/Sergio"
					);
					if (!response.ok) {
				actions.createContactList();
					} else {
						createContactList();
					}
					const data = await response.json();
					setStore({
						Contacts: data.contacts,
					})
					
				
			},

			postContact: async (inputName, inputPhone, inputEmail, inputAddress) => {
				const actions = getActions();
				const response = await fetch("https://playground.4geeks.com/contact/agendas/Sergio/contacts", {
					method: "POST",
					body: JSON.stringify({
						name: inputName,
						phone: inputPhone,
						email: inputEmail,
						address: inputAddress
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				if (response.ok) {
					alert("contacto creado correctamente")
					actions.getContacts();
				}else {
					alert("no se puede crear");
				}

			},

			setIdForUpdate: async (id, name, address, phone, email)=>{
				setStore({
					contact2: {
						id: id,
						name: name,
						phone: phone,
						email: email,
						address: address
					},
				})
			},


			putContact: async (inputName, inputPhone, inputEmail, inputAddress) => {
				const actions = getActions();
				const store = getStore();
				
				const response = await fetch('https://playground.4geeks.com/contact/agendas/Sergio/contacts' + `${store.contactToEdit.id}`, {
					method: "PUT",
					body: JSON.stringify({
						name: inputName,
						phone: inputPhone,
						email: inputEmail,
						address: inputAddress
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				if (response.ok) {
					alert("contacto actualizado correctamente")
					actions.getContacts();
				}else {
					alert("no se puede actualizar");
				}
			},

			deleteContact: async (id) => {
				const actions = getActions();
				const response = await fetch('https://playground.4geeks.com/contact/agendas/Sergio/contacts/' + `${id}`,{
					method: "DELETE",
				})
				if (!response.ok) {
					alert("no se puede eliminar");
				}else {
					actions.getContacts();
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;