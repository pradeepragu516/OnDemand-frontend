import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DateScheduleModal = ({ onClose, onConfirm, selectedDate, setSelectedDate }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const handleConfirm = () => {
    if (selectedDate && selectedTimeSlot) {
      onConfirm({ date: selectedDate, time: selectedTimeSlot });
    } else {
      alert('Please select both a date and time slot.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-2xl relative">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Choose Appointment</h2>

        {/* Date Picker */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={setSelectedDate}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholderText="Select a date"
          />
        </div>

        {/* Time Slot Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time Slot</label>
          <select
            value={selectedTimeSlot}
            onChange={(e) => setSelectedTimeSlot(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a time slot</option>
            <option value="9am">9:00 AM - 11:00 AM</option>
            <option value="11am">11:00 AM - 1:00 PM</option>
            <option value="2pm">2:00 PM - 4:00 PM</option>
            <option value="4pm">4:00 PM - 6:00 PM</option>
            <option value="6pm">6:00 PM - 8:00 PM</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={onClose}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Confirm
          </button>
        </div>

        {/* Close Button (X) */}
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default DateScheduleModal;