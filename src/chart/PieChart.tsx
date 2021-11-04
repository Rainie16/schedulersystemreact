import React, {useEffect, useState} from 'react';
import {Pie} from 'react-chartjs-2'
import "./PieChart.scss"
import BarChart from "./BarChart";
import {useDispatch, useSelector} from "react-redux";
import {amountByScheduler} from "../actions/chart.action";

const PieChart = () => {

    const dispatch = useDispatch();
    const amountState = useSelector((state:any)=>state?.chart);

    console.log('amountState', amountState);

    useEffect(()=>{
        dispatch(amountByScheduler())
    }, [])

    // const [scheduler, setScheduler] = useState([]);
    // const [total, setTotal] = useState([
    //     {
    //     data: [],
    //     backgroundColor: []
    //     }
    //
    // ]);

    let s = []
    let t = []
    let c = []

    if(amountState){
        for(let data of amountState) {
            s.push(data[0])
            t.push(data[1])
            c.push('#' + Math.floor(16777216*Math.random()).toString(16))
        }
    }

    let dataobj = [{
        data: t,
        backgroundColor: c
    }]

    console.log("sssssss", s)
    console.log("tttttttt", t)

    return (
        <div className="pie-chart">
            <h4>Interviews amount for each scheduler</h4>
            <Pie
                    data = {{
                    labels:s,
                    datasets: dataobj,
                }}
                    height='50%'
            />
            <br/>
        </div>
    );
}

export default PieChart;