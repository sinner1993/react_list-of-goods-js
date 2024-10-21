import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [sort, setSort] = useState([...goodsFromServer]);
  const [isActive, setIsActive] = useState('');

  const arrayIsEquall = (arr1, arr2) => {
    return JSON.stringify(arr1) !== JSON.stringify(arr2);
  };

  const handle = good => {
    let newSort;

    setIsActive(good);

    switch (good) {
      case 'abc':
        newSort = [...sort].sort();
        break;
      case 'length':
        newSort = [...sort].sort((a, b) => a.length - b.length);
        break;
      case 'reverse':
        newSort = [...sort].reverse();
        break;
      default:
        newSort = [...goodsFromServer];
    }

    setSort(newSort);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${isActive !== 'abc' && 'is-light'}`}
          onClick={() => handle('abc')}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${isActive !== 'length' && 'is-light'}`}
          onClick={() => handle('length')}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${isActive !== 'reverse' && 'is-light'}`}
          onClick={() => handle('reverse')}
        >
          Reverse
        </button>
        {arrayIsEquall(sort, goodsFromServer) && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => handle('')}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {sort.map(good => {
          return (
            <li key={good} data-cy="Good">
              {good}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
