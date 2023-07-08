import React, { useState } from "react";

const SeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const renderSeats = () => {
    const rows = 5;
    const seatsPerRow = 8;

    const seatGrid = [];

    for (let row = 1; row <= rows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatNumber = `${row}-${seat}`;
        const isSelected = selectedSeats.includes(seatNumber);

        seatGrid.push(
          <div
            key={seatNumber}
            className={`seat ${isSelected ? "selected" : ""}`}
            onClick={() => handleSeatClick(seatNumber)}
          >
            {seatNumber}
          </div>
        );
      }
    }

    return seatGrid;
  };

  return (
    <div className="seat-selector">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Choose Your Seats</h2>
        <p className="mt-2">
          Selected Seats:{" "}
          {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
        </p>
      </div>
      <div className="seat-grid grid grid-cols-8 gap-2">
        {renderSeats()}
      </div>
    </div>
  );
};

export default SeatSelector;
