import { Link } from 'react-router-dom';

export default function NextButton() {

  return (
    <div className="start-button">
      <Link to="/home">
        <button className="next-button">Start</button>
      </Link>
    </div>
  );
};
