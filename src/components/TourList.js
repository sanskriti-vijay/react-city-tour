import React from 'react';
import '../styles/components/tourlist.scss';
import Tour from './Tour';
import {tourData} from './tourData';

class TourList extends React.Component {
state={
  tours: tourData
};

removeTour = id => {
  console.log(id);
  const {tours} = this.state;
  const sortedTours = tours.filter(tour => 
    tour.id !== id
  );
  this.setState({
    tours: sortedTours
  });
};

  render() {
    const {tours} = this.state;
    
    return (
      <section className='tourlist'>
        {tours.map((tour)  => (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        )
        
        )}
      </section>
  
    )
  }
}

export default TourList;