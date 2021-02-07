import React, { Component } from "react";
import { CSVReader } from 'react-papaparse'
import TutorialDataService from "../http-common/tutorial.service";
// let map = new Map();

export default class AddTutorial extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onChangeTitle = this.onChangeTitle.bind(this);
  //   this.onChangeDescription = this.onChangeDescription.bind(this);
  //   this.saveTutorial = this.saveTutorial.bind(this);
  //   this.newTutorial = this.newTutorial.bind(this);

  //   this.state = {
  //     id: null,
  //     title: "",
  //     description: "", 
  //     published: false,

  //     submitted: false
  //   };
  // }

  // onChangeTitle(e) {
  //   this.setState({
  //     title: e.target.value
  //   });
  // }

  // onChangeDescription(e) {
  //   this.setState({
  //     description: e.target.value
  //   });
  // }

  // saveTutorial() {
  //   var data = {
  //     title: this.state.title,
  //     description: this.state.description
  //   };

  //   TutorialDataService.create(data)
  //     .then(response => {
  //       this.setState({
  //         id: response.data.id,
  //         title: response.data.title,
  //         description: response.data.description,
  //         published: response.data.published,

  //         submitted: true
  //       });
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }

  // newTutorial() {
  //   this.setState({
  //     id: null,
  //     title: "",
  //     description: "",
  //     published: false,

  //     submitted: false
  //   });
  // }
  filteredArr (arr) {
    return arr.filter(function (el) {
      return el != null && el !== '';
    });
  }
  handleOnDrop = (data) => {
    console.log('---------------------------');
    console.log(111, data);
    const listLength = data[0].data.length
    const validData = data.map(item => {
      if (!item.data) {
        return console.error(item)
      }
      
      const data = this.filteredArr(item.data)

      return data.length === listLength ? data : null
    })

    const newValidData = this.filteredArr(validData)
    const fieldNames = newValidData[0];
    const formattedData = newValidData.map((item, index) => {
      let data;
      if (index !== 0) {
     
        data = newValidData[0].reduce((obj, el, index) => ({
          ...obj,
          [fieldNames[index]]: item[index],
        }), {});

      }
      return data;
    })

    console.log(this.filteredArr(formattedData));


    TutorialDataService.create(this.filteredArr(formattedData))
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
  };
  render() {
    return (


            <CSVReader 
              onDrop={this.handleOnDrop}
              onError={this.handleOnError}
              noDrag
              style={{}}
              config={{}}
              addRemoveButton
              className="btn btn-success"
              onRemoveFile={this.handleOnRemoveFile}
            >
              <span>Click to upload.</span>
            </CSVReader>

    );
  }
}
