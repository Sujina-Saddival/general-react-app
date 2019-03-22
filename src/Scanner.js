import React, { Component } from 'react'
import Quagga from 'quagga';

class Scanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: 'No result',
    }
  }
 
  componentDidMount() {
		var _scannerIsRunning = false;
    Quagga.init({
			numOfWorkers: 4,
			inputStream: {
				name: "Live",
				type: "LiveStream",
				target: document.querySelector('#scanner-container'),
				constraints: {
						width: 480,
						height: 320,
						facingMode: "environment"
				},
		},
		frequency: 10,
		decoder: {
			readers: [
				'code_128_reader'
			],
			patchSize: "large",
			debug: {
					drawBoundingBox: false,
					showFrequency: false,
					drawScanline: false,
					showPattern: false
			},
			multiple: false,
			drawScanline: true,
		},
        },
        function(err) {
            if (err) {
                return console.log(err);
            }
						Quagga.start();
						_scannerIsRunning = true;
						// Quagga.stop();
        }
		);
		Quagga.onProcessed(function (result) {
			var drawingCtx = Quagga.canvas.ctx.overlay,
			drawingCanvas = Quagga.canvas.dom.overlay;

			if (result) {
					if (result.boxes) {
							drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
							result.boxes.filter(function (box) {
									return box !== result.box;
							}).forEach(function (box) {
									Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
							});
					}

					if (result.box) {
							Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
					}

					if (result.codeResult && result.codeResult.code) {
							Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
					}
			}
	});

	Quagga.onDetected(function (result) {
			Quagga.stop()
			console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);
	});
}

  render(){
    return(
			<div id="scanner-container"></div>
    )
  }
}

export default Scanner;