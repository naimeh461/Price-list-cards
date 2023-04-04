import React, { useState, PureComponent} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import axios from "axios";
const PhoneBar = () => {
    const [Phone,setPhone]= useState([])
    axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then(data => {
        const loadedData = data.data.data;
        const phonesData = loadedData.map( phone =>{
            const parts = phone.slug.split("-");
            const price = parseInt(parts[1]);
            const phoneInfo ={
                name: phone.phone_name,
                price: price
            }
            return phoneInfo;
        })
        setPhone(phonesData)
    })
    return (
        <div>
        <BarChart width={1000} height={500} data={Phone}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
        </BarChart>
        </div>
    );
};

export default PhoneBar;