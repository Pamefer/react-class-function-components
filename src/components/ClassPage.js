import React, { Component } from 'react';
import Picture from './smallComponents/Picture';
import ClassButton from './smallComponents/ClassButton';

class ClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [
        {id: 1, src: 'http://via.placeholder.com/200x100'},
        {id: 2, src: 'http://via.placeholder.com/400x200'},
        {id: 3, src: 'http://via.placeholder.com/600x100'}
      ],
      currentPic: null
    };
    this.setCurrentPic = this.setCurrentPic.bind(this);
  }
  setCurrentPic(id) {
    this.setState({currentPic: id});
  }
  render () {
    return (
      <div>
        <div className='squares'>
          {this.state.pictures.map((picture) => {
            return (
              <Picture key={picture.id} src={picture.src}>
                <ClassButton
                  pictureSrc={picture.src}
                  setCurrentPic={this.setCurrentPic}
                  id={picture.id}
                />
              </Picture>
            )
          })}
        </div>
        <div>
          <p>Current selected picture ID is {this.state.currentPic}</p>
        </div>
      </div>
    )
  }
}
export default ClassPage;
