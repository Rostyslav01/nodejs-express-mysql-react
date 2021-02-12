import React, { useState } from "react";
import { CSVReader } from 'react-papaparse'

import TutorialDataService from "../http-common/tutorial.service";
import fileValidator from "../utils/file-validator";


const AddTutorial = () => {
  const [invalidFileError, setInvalidFileError] = useState(false)

  const handleOnDrop = (data) => {
    console.log(data)
    const {formattedData, error} = fileValidator(data)
    setInvalidFileError(error)

    if (!error) {
      try {
        TutorialDataService.create(formattedData)
      } catch (e) {
        console.error(e)
      }
    }

  };

  const handleOnError = (err, file, inputElem, reason) => {
    setInvalidFileError(true)
  };

  const handleOnRemoveFile = (data) => {
    setInvalidFileError(false)
  };

  return (
      <>
        <CSVReader
            onDrop={handleOnDrop}
            onError={handleOnError}
            noDrag
            style={{}}
            config={{}}
            addRemoveButton
            className="btn btn-success"
            onRemoveFile={handleOnRemoveFile}
        >
          <span>Click to upload</span>
        </CSVReader>
        {invalidFileError && <h1>zalypa</h1>}
      </>
  )
}

export default AddTutorial
