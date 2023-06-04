import React,{useState} from 'react';
import './ContentCard.css'; // Import the CSS file for styles
import Profile from './Profile';
const Card = ({ heading, content }) => {
    const [isCardClicked, setIsCardClicked] = useState(false);

    const handleClick = () => {
    setIsCardClicked(true);
    }; 
    if (isCardClicked) {
        return <Profile heading={heading} content={content} />;
      }
    
  return (
    <div className="card" onClick={handleClick} >
      <div className="card-content">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-description">{content}</p>
      </div>
    </div>
  );
};



const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card
          key={index}
          heading={card.heading}
          content={card.content}
        />
      ))}
    </div>
  );
};
const CardGrid = () => {
    const rows = 5;
    const columns = 5;
  
    const generateCards = () => {
      const cards = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          const card = {
            heading: `Card ${row * columns + col + 1}`,
            content: 'Lorem ipsum dolor sit amet.',
          };
          cards.push(card);
        }
      }
      return cards;
    };
  
    return (
      <div className="grid-container">
        {generateCards().map((card, index) => (
          <Card key={index} heading={card.heading} content={card.content} />
        ))}
      </div>
    );
  };
const ContentCard = () => {
  const cards = [
    {
      heading: 'Card 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      heading: 'Card 2',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more cards as needed
  ];

  
  return (
    <div className="app">
      <h1>Card Grid</h1>
      <CardGrid />
    </div>
  );
};

export default ContentCard;
