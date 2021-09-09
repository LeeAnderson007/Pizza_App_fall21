import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pizzas = () => {
    const [pizzas, setPizzas] = useState([]);

    return (
        <div>
            <h1> Here are our Pizzas</h1>
        </div>
    );
};

export default Pizzas;