import React, {useEffect, useState} from 'react';
import {Pie} from 'react-chartjs-2'
import "./PieChart.scss"
import BarChart from "./BarChart";
import {useDispatch, useSelector} from "react-redux";
import {amountByScheduler} from "../actions/chart.action";

const PieChart = () => {

    const dispatch = useDispatch();
    const userState = useSelector((state:any)=>state);
    const amountState = useSelector((state:any)=>state?.chart);

    console.log('amountState', amountState);
    console.log('userState', userState);

    useEffect(()=>{
        if(userState?.user?.user?.user?.role?.role=='hr')
            dispatch(amountByScheduler())
        else {
            alert("summary charts are only available for hr")
        }
    }, [])

    const [label, setLabel] = useState([]);
    const [data, setData] = useState([]);

    useEffect(()=>{
        let l = []
        let d = []
        let c = []
        if(amountState){
            for(let data of amountState) {
                l.push(data[0])
                d.push(data[1])
                c.push('#' + Math.floor(16777216*Math.random()).toString(16))
            }
        }

        let dataobj = [{
            data: d,
            backgroundColor: c
        }]
        // @ts-ignore
        setLabel(l);

        // @ts-ignore
        setData(dataobj)


        console.log("sssssss", l)
        console.log("dataobj", dataobj)
    }, [amountState])

    return (
        <div className="pie-chart">
            <h4>Interviews amount for each scheduler</h4>
            <Pie
                    data = {{
                    labels:label,
                    datasets:data,
                }}
                    height='50%'
            />
            <br/>
        </div>
    );
}

export default PieChart;