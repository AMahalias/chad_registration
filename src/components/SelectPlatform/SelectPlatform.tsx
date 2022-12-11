import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './selectPlatform.scss';
import { getRandomDigits } from '../../utils/fetch';

type Props = {
  list: string[];
};

export const SelectPlatform: React.FC<Props> = ({ list }) => {
  const [listOfOptions, setListOfOptins] = useState<string[]>(list);
  const [selectedOption, setSelectedOption] = useState('');
  const [newOption, setNewOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selectedOption === newOption) {
      setListOfOptins([...listOfOptions, selectedOption]);
    }
  }, [selectedOption, newOption, listOfOptions]);

  return (
    <div className="select">
      <label className='select_label'>Platform</label>
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
            {listOfOptions.map(listItem => {
              if (listItem === 'Other') {
                return (
                  <input 
                    key={`input-${getRandomDigits()}`}
                    className='select_input' 
                    type="text"
                    value={newOption} 
                    onChange={(event) => setNewOption(event.target.value)}
                    placeholder='Other' 
                  />
                )
              }

              return (
                <li 
                  className={classNames('select_item', { 'is-chosen': selectedOption === listItem})} 
                  key={`${listItem}-${getRandomDigits()}`} 
                  onClick={() => setSelectedOption(listItem)}
                >
                  {listItem}
                </li>
              ) 
            })}
          </ul>
        )}
    </div>
  );
};
