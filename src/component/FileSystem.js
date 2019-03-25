import React, { Component } from 'react';

const electron = window.require('electron');
const fs = electron.remote.require('fs');
const { dialog } = electron.remote;

class FileSystem extends Component {
  constructor(porps) {
    super(porps);
    this.addFile = this.addFile.bind(this);
  }

  addFile(e) {
    const a = this;
    debugger;
    const content = 'Some text to save into the file';
    dialog.showOpenDialog((fileName) => {
      if (fileName === undefined) {
        console.log("You didn't save the file");
        return;
      }

      // fileName is a string that contains the path and filename created in the save file dialog.
      fs.readFile(fileName[0], 'utf-8', (err, data) => {
        if (err) {
          alert(`An error ocurred creating the file ${err.message}`);
        }

        alert('The content is', data);
      });
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addFile()}>Add File</button>
      </div>
    );
  }
}

export default FileSystem;
