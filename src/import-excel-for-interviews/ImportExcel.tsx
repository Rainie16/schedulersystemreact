import React, {SyntheticEvent} from 'react';
import {useDispatch} from "react-redux";
import {importExcel} from "../actions/interview.action";

const ImportExcel = () => {

    const dispatch = useDispatch();

    return (
        <form>
            <input
                onChange={(event:SyntheticEvent)=>{
                    let formData = new FormData();
                    // @ts-ignore
                    let fileData = (event.target as HTMLInputElement).files[0];
                    console.log('fileDate', fileData);
                    formData.append('file',fileData);
                    console.log('formData', formData);
                    dispatch(importExcel(formData));
                }}
                type="file" name="file"
            />
        </form>
    );
}

export default ImportExcel;