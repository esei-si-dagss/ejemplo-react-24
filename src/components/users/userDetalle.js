import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';

import { useParams, useNavigate } from "react-router-dom";
import userService from '../../services/userService';

export default function UserDetalle(props) {
    const navigate = useNavigate();
    const params = useParams();

    const [user, setUser] = useState({ id: 0, name: "", email: "", address: {}, company: {} });

    useEffect(() => {
        userService.buscarPorId(params.id).then(res => setUser(res.data));
    }, []); // Carga en primer renderizado


    return (
        <React.Fragment>
            <div>
                <div className="field">
                    <label htmlFor="id" className="font-bold">ID</label>
                    <InputText id="id" value={user.id} readOnly  />
                </div>
                <div className="field">
                    <label htmlFor="name" className="font-bold">Name</label>
                    <InputText id="name" value={user.name} readOnly  />
                </div>
                <div className="field">
                    <label htmlFor="email" className="font-bold">e-mail</label>
                    <InputText id="email" value={user.email} readOnly  />
                </div>
                <div className="field">
                    <label htmlFor="ciudad" className="font-bold">City</label>
                    <InputText id="ciudad" value={user.address.city} readOnly  />
                </div>
                <div className="field">
                    <label htmlFor="empresa" className="font-bold">Company</label>
                    <InputText id="empresa" value={user.company.name} readOnly  />
                </div>
            </div>

            <Divider />

            <div className="p-p-3">
                <Button label="Volver" icon="pi pi-check"
                    onClick={() => { navigate("/users") }} />
            </div>
        </React.Fragment >
    )
}