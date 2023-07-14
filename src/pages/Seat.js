import React, { useState } from 'react';
import screens from '../assets/screens.png'
const Seat = () => {
  const seats = Array.from({ length: 64 }, (i, index) => index);
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleCheckboxChange = (event) => {
    const { checked, id } = event.target;
    const updatedSeats = [...selectedSeats];

    if (checked) {
      updatedSeats.push(id);
    } else {
      const index = updatedSeats.indexOf(id);
      if (index !== -1) {
        updatedSeats.splice(index, 1);
      }
    }

    setSelectedSeats(updatedSeats);
  };

  const isSeatSelected = (id) => selectedSeats.includes(id);

  return (
    <div className="bg-red-950 flex flex-col justify-center items-center h-screen">
      <div className="flex flex-wrap justify-center max-w-[700px] mx-auto">
        <img src={screens}></img>
        {seats.map((item) => {
          const row = rows[Math.floor(item / 8)];
          const seatNumber = (item % 8) + 1;
          const seatId = `${row}${seatNumber}`;
          const isChecked = isSeatSelected(seatId);
          const isDisabled = isChecked;

          return (
            <div className="m-2" key={item}>
              <label
                className={`block text-center text-xs text-stone-200 font-semibold`}
                htmlFor={seatId}
              >
                {seatId}
              </label>
              <br></br>
              <input
                className={`appearance-none rounded-md focus:ring-0 h-8 w-8 ${isChecked ? 'bg-stone-500' : 'bg-white'
                  }`}
                type="checkbox"
                id={seatId}
                onChange={handleCheckboxChange}
                checked={isChecked}
              />
            </div>
          );
        })}
      </div>
      <button className="active:translate-y-1 text-white font-bold bg-gradient-to-r from-red-500 to-red-800 py-2 w-[600px] rounded mt-4">Book Seat</button>
    </div>
  );
};

export default Seat;
