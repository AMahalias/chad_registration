import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './selectPlatform.scss';
import { getRandomDigits } from '../../utils/fetch';
import { DebounceInput } from 'react-debounce-input';

type Props = {
  list: string[];
};

export const SelectPlatform: React.FC<Props> = ({ list }) => {
  const [listOfOptions, setListOfOptions] = useState<string[]>(list);
  const [selectedOption, setSelectedOption] = useState('');
  const [newOption, setNewOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (newOption.length > 0) {
      setListOfOptions([...listOfOptions, newOption]);
      setSelectedOption('');
    }
  }, [newOption, listOfOptions]);

  return (
    <div className="select">
      <label className='select_label'>Platform</label>
      {(selectedOption === 'Other') ? (
        <DebounceInput 
          key={`input-${getRandomDigits()}`}
          minLength={2}
          debounceTimeout={300}
          className='select_input' 
          type="text"
          value={newOption} 
          onChange={(event) => setNewOption(event.target.value)}
          placeholder='Enter your platform here'
        />
        ) : (
        <>
          <div 
            className={classNames('select_button', {
              'is-open' : isOpen || newOption.length 
            })} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption || 'Select platform'}
          </div>
          
          {isOpen && (
            <ul className='select_options'>
              {listOfOptions.map(listItem => (
                <li 
                  className={classNames('select_item', { 'is-chosen': selectedOption === listItem})} 
                  key={`${listItem}-${getRandomDigits()}`} 
                  onClick={() => {
                    setSelectedOption(listItem);
                    setIsOpen(!isOpen);
                  }}
                >
                  {listItem}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};
