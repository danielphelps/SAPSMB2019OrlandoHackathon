import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WebCam from 'react-webcam';

export class Items extends React.Component 
{

  setRef = webcam => {
    this.webcam = webcam;
  };

  constructor(props) 
  {
    super(props);
    this.state = {Items: [], CurrentSelection: 0, reaction: ""};
    this.loadData();
  }

  loadData = () => {
     fetch("https://cfdemosummit18.cfapps.us10.hana.ondemand.com/GetItems").then(res => {
      if(res.ok) {
          return res.json();
      } else {
          console.log("problem getting items...");
          console.log(res);
      }
    }).then(json => {
       console.log(json);
       this.setState({Items: json.value});
    });
  }

  componentWillReceiveProps = (props) => 
  {

  }

  componentWillMount = () => 
  {
      //fetch(fullUrl, {credentials: 'include'}
  }

  capture = () => 
  {
    const imageSrc = this.webcam.getScreenshot();
    fetch("http://localhost:5000/dothing", {
        method: 'POST',
        body: imageSrc
    }).then(res => {
      if(res.ok) {
        return res.json() ;
      }  
      else 
      {
        console.log(res);
      }
    }).then(json => {
      this.setState({reaction: json});
    });
    console.log(imageSrc);
  };
   
  sleep = (time) => 
  {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  onChange = (index) => 
  {
      this.setState({CurrentSelection: index}, () => {
          this.sleep(1000).then(() => 
          {
              console.log("waited 1000 somethings.");
              this.capture();
          });
      });
  }

  onClickItem = (index) => 
  {
      console.log("onClickItem", index);
  }

  onClickThumb = (index) => 
  {
      console.log("onClickThumb", index);
  }

  render() 
  {
    var items = this.state.Items;
    console.log("rendering!");
    return <div>
        <WebCam audio={false} 
                ref={this.setRef}
                screenshotFormat="image/jpeg"></WebCam>

            <Carousel 
                  selectedItem={this.state.CurrentSelection}
                  showArrows={true} 
                  onChange={this.onChange}
                  onClickItem={this.onClickItem} 
                  onClickThumb={this.onClickThumb}
                  width={800}>
        {items.map((x, i) => {
          var imageUrl = x.U_ImageURL;
          console.log("ImageURL: ", imageUrl)
          return <div width="50">
            <img src={imageUrl}/>
            <p className="legend"></p>
          </div>;
        })}
      </Carousel>
       </div>;
  }
}

export default Items;
