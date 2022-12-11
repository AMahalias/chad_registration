import { FC } from 'react';
import { List as ListType } from '../../types/List';
import './list.scss';

type Props = { list: ListType[] };

export const List: FC<Props> = ({ list }) => (
  <ul className="list">
    {list.map(elem => (
      <li className="list-item" key={elem.id}>
        <div className="list_item-title">
          {elem.name}
        </div>

        <div className="list_item-text">
          {elem.text}
        </div>
      </li>
    ))}
  </ul>
);
