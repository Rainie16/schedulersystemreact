import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2'
import {useDispatch, useSelector} from "react-redux";
import {passRate} from "../actions/bar.action";

const BarChart = () => {

    const barChartState = useSelector((state:any)=>state.bar);
    console.log('barChartState', barChartState)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(passRate());
    },[dispatch])

    const [label, setLabel] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        if(barChartState) {
            let l = Object.keys(barChartState);
            console.log('llllllllll', l)
            let t = Object.values(barChartState);
            console.log('tttttttt', t)
            let dataobj = [{
                label: 'pass rate',
                backgroundColor: 'rgba(75,192,192,1)',
                data: t
            }]
            // @ts-ignore
            setLabel(l);
            // @ts-ignore
            setData(dataobj)
        }

    },[barChartState])

    return (
        <div>
            <h4>Interview passing rate</h4>
            <Bar
                data = {{
                    labels:label,
                    datasets:data
                }}
                height='50%'
            />
            <br/>
        </div>
    );
}

export default BarChart;