import React, {FormHTMLAttributes, SyntheticEvent, useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {getInterviews, updateInterviewStatus, uploadResume} from "../actions/interview.action";
import {Interview} from "../shared/models/interview";
import "./Interviews.scss"
import {Button, Input, Space} from "antd";
import { Pagination } from 'antd';
import {RouteComponentProps} from "react-router-dom";
import {interviewsReducer} from "../reducers/interviews.reducer";

const Interviews = (props: RouteComponentProps) => {

    const {Search} = Input;

    const dispatch = useDispatch();
    const dispatch1 = useDispatch();
    const dispatch2 = useDispatch();

    const allInterviewsState = useSelector((state:any)=>state);
    const allInterviews = allInterviewsState.interview;

    const [interviewState, setInterviewState] = useState(allInterviews);
    const [keyword, setKeyword] = useState('');

    useEffect(()=>{
        dispatch(getInterviews());
    },[dispatch])

    useEffect(()=>{
        setInterviewState(allInterviews);
    }, [allInterviews])

    useEffect(()=>{
        searchHandler(keyword);
    }, [keyword])


    const changeHandler = (event: SyntheticEvent) =>{
        const inputEle = event.target as HTMLInputElement;
        const word = inputEle.value;
        setKeyword(word);
    }

    const searchHandler = (keyword: string) => {
        if(keyword) {
            let filteredInterview = allInterviews.filter((i:Interview) => {
                if(i.candidate.toLowerCase().startsWith(keyword)
                || i.phone.startsWith(keyword))
                    return i;
            })
            setInterviewState(filteredInterview);

        } else {
            setInterviewState(allInterviews);
        }
    }

    const filterClickHandler = (event: SyntheticEvent) => {
        const e = event.target as HTMLInputElement;
        const f = e.innerText.toLowerCase();
        if(f) {
            switch (f){
                case 'appointments':
                    return setInterviewState(allInterviews);
                default:
                    let buttonFilter = allInterviews.filter((i:Interview)=>{
                        return i.status == f;
                    })
                    return setInterviewState(buttonFilter);
            }
        } else {
            setInterviewState(allInterviews);
        }
    }

    const [opt, setOpt] = useState(1);
    const [opt1, setOpt1] = useState(1);

    const headerSortingHandler = (event: SyntheticEvent) => {
        const e = event.target as HTMLInputElement;
        const f = e.innerText.toLowerCase();

        if(f=='time'){
                switch (opt) {
                    case 1:
                        console.log('case 1', opt);
                        let timeSortingAsc = [...allInterviews];
                        timeSortingAsc.sort((a: Interview, b: Interview) => {
                            if (a.appointment < b.appointment)
                                return -1;
                            if (a.appointment > b.appointment)
                                return 1;
                            return 0;
                        });
                        setInterviewState(timeSortingAsc);
                        setOpt(2);
                        break;
                    case 2:
                        console.log('case 2', opt);
                        let timeSortingDes = [...allInterviews];
                        timeSortingDes.sort((a: Interview, b: Interview) => {
                            if (a.appointment > b.appointment)
                                return -1;
                            if (a.appointment < b.appointment)
                                return 1;
                            return 0;
                        });
                        setOpt(0);
                        setInterviewState(timeSortingDes);
                        break;
                    case 0:
                        console.log('case 0', opt);
                        setOpt(1);
                        setInterviewState(allInterviews);
                }
        } else if(f=='candidate') {
            switch (opt1) {
                case 1:
                    console.log('case 1', opt1);
                    let candidateSortingAsc = [...allInterviews];
                    candidateSortingAsc.sort((a: Interview, b: Interview) => {
                        if (a.candidate < b.candidate)
                            return -1;
                        if (a.candidate > b.candidate)
                            return 1;
                        return 0;
                    });
                    setInterviewState(candidateSortingAsc);
                    setOpt1(2);
                    break;
                case 2:
                    console.log('case 2', opt1);
                    let candidateSortingDes = [...allInterviews];
                    candidateSortingDes.sort((a: Interview, b: Interview) => {
                        if (a.candidate > b.candidate)
                            return -1;
                        if (a.candidate < b.candidate)
                            return 1;
                        return 0;
                    });
                    setOpt1(0);
                    setInterviewState(candidateSortingDes);
                    break;
                case 0:
                    console.log('case 0', opt1);
                    setOpt1(1);
                    setInterviewState(allInterviews);
            }
    }}

    const [page, setPage] = useState({
        minValue: 0,
        maxValue: 5
    });


    const paginationHandler = (page:any, pageSize:any) => {
        if(interviewState.length <= pageSize){
            setPage({
                minValue: 0,
                maxValue: pageSize
        })
        } else {
            setPage({
                minValue: (page-1) * pageSize,
                maxValue: (page-1) * pageSize + pageSize
            })
        }
    }

    const [formdata, setFormdata] = useState({});

    useEffect(()=>{

    }, [formdata])

    return(
        <>
            <div>
                <h4>All Appointment</h4>
                <Button onClick={filterClickHandler}>Appointments</Button>
                <Button onClick={filterClickHandler}>Pending</Button>
                <Button onClick={filterClickHandler}>Canceled</Button>
                <Button onClick={filterClickHandler}>Pass</Button>
                <Button onClick={filterClickHandler}>Fail</Button>
            </div>
            <div className="search-bar">
                <Space>
                    <Search placeholder="search by Name / Phone" onSearch={searchHandler} onChange={changeHandler} style={{ width: 300 }}/>
                </Space>
            </div>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th onClick={headerSortingHandler}>Time</th>
                        <th onClick={headerSortingHandler}>Candidate</th>
                        <th>Phone</th>
                        <th>Scheduler</th>
                        <th>Status</th>
                        <th>Resume</th>
                    </tr>
                </thead>
                <tbody>
                {
                    interviewState &&
                    interviewState.length > 0 &&
                    interviewState.slice(page.minValue, page.maxValue)
                    .map((i: Interview) => (
                        <tr key={i.id}>
                            <td>{i.id}</td>
                            <td>
                                {i.appointment.toString().substring(0, 10)}{' '}{i.appointment.toString().substring(11, 16)}</td>
                            <td>{i.candidate}</td>
                            <td>{i.phone}</td>
                            <td>{i.scheduler}</td>
                            <td>
                                <select
                                    onChange={(event: SyntheticEvent) => {
                                    const s = (event.target as HTMLSelectElement).value;
                                    dispatch1(updateInterviewStatus(i.id, s));
                                    }}
                                    defaultValue={i.status}
                                    id="status"
                                >
                                    <option value="pending">Pending</option>
                                    <option value="pass">Pass</option>
                                    <option value="fail">Fail</option>
                                    <option value="canceled">Canceled</option>
                                </select>
                            </td>
                            <td>
                                <div>
                                    {
                                        !i.resume &&
                                        <form>
                                            <input
                                                onChange={(event: SyntheticEvent) => {
                                                    let formData = new FormData();
                                                    // @ts-ignore
                                                    let fileData = (event.target as HTMLInputElement).files[0];
                                                    formData.append('file', fileData);
                                                    setFormdata(formData);
                                                }}
                                                type="file" name="file">
                                            </input>
                                        </form>
                                    }
                                </div>
                                <a href={`http://127.0.0.1:8090/Documents/Training/SchedulerSystem/resumeFolder/${i.resume}`}><button>○</button></a>
                                <button onClick={()=>dispatch2(uploadResume(i.id, formdata))}>↑</button>
                                <a href={`http://127.0.0.1:8090/Documents/Training/SchedulerSystem/resumeFolder/${i.resume}`}><button>↓</button></a>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <Pagination
                onChange={paginationHandler}
                defaultCurrent={1}
                showSizeChanger
                defaultPageSize={5}
                pageSizeOptions={['5', '10', '25']}
                total={interviewState?.length}
            />
            <div>
                <Button onClick={()=>{props.history.push('/add-interview')}}>New Interview</Button>
            </div>
        </>

    )
}

export default connect()(Interviews);