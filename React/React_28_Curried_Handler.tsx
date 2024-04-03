import React, { useState } from 'react';

const Form = () => {
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');
  const [textarea1, setTextarea1] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(input1, input2, textarea1);
  };

  const handleChange =
    (stateFn: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      stateFn(value);
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        onChange={handleChange(setInput1)}
        value={input1}
      />
      <input
        type="text"
        name="email"
        placeholder="Enter your email"
        onChange={handleChange(setInput2)}
        value={input2}
      />
      <textarea
        placeholder="Enter some notes"
        name="notes"
        onChange={handleChange(setTextarea1)}
        value={textarea1}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
