import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
  ]);

  const currentProject = photos.filter(project => project.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i});// current photo
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
     {isModalOpen && <Modal currentProject={currentProject}/>}
      <div className="flex-row">
        {currentProject.map((image, i) => (
          <img
            src={require(`../../assets/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;