import React, { useContext, useState } from "react";
import { database } from "./config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { BalanceContext } from "../context/BalanceContext";

const Register = () => {
    const { balance } = useContext(BalanceContext);
    const [data, setData] = useState([]);
    const collectionRef = firebase.firestore().collection(database, "Users");
    const handleInput = (e) => {
        let newInput = { [e.target.name]: e.target.value };
        setData({ ...data, ...newInput });
    };
    const handleSubmit = () => {
        setDoc(doc(collectionRef, {
            Email: data.Email,
            Password: data.Password,
            TLP: data.TelephoneNumber,
            Balance: balance,
        }))
            .then(() => {
                alert("data added");
            })
            .catch((err) => {
                alert(err.message);
            });
        if (localStorage.getItem("userId")) {
            window.location.href = "/"
        }
    };

    return (
        <div>
            <input
                name="Email"
                placeholder="Email"
                onChange={(e) => {
                    handleInput(e);
                }}
            />
            <input
                name="TelephoneNumber"
                placeholder="Telephone Number"
                onChange={(e) => {
                    handleInput(e);
                }}
            />
            <input
                name="Password"
                placeholder="Password"
                onChange={(e) => {
                    handleInput(e);
                }}
            />
            <button onClick={handleSubmit}>Register</button>
        </div>
    );
};

export default Register;
