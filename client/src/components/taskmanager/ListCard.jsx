/* eslint-disable react/prop-types */
import './listcard.scss';
import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight, BiTrash } from 'react-icons/bi';
import { arrowClick, deleteItem } from '../../redux/taskSlice';
import { useDispatch } from 'react-redux';

const ListCard = (props) => {
  const { item } = props;

  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState('');

  const ArrowClick = (string) => {
    dispatch(arrowClick(item, string));
  };

  const handleDelete = () => {
    dispatch(deleteItem(item._id));
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      <ul className={` ${item.status === 'done' ? 'completed menu' : 'menu'}`}>
        <li>
          <p>{item.task}</p>
        </li>
        <li>
          <p>{item.status}</p>
        </li>
        <li>
          <button disabled={item.status === 'backlog'} onClick={() => ArrowClick('left')}>
            <BiChevronLeft />
          </button>
          <button disabled={item.status === 'done'} onClick={() => ArrowClick('right')}>
            <BiChevronRight />
          </button>
          <button onClick={handleDelete}>
            <BiTrash />
          </button>
        </li>
        <li>
          
        </li>
      </ul>
    </div>
  );
};

export default ListCard;