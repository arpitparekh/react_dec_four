import React from 'react';

export default function FormComp({
  clickKaro,
  nameChange,
  emailChange,
  passwordChange,
  uName,
  uEmail,
  uPassword,
}) {
  // componenet name should be in capital letter
  // syntax of jsx
  return (
    <form style={{ padding: '20px' }} action="#" onSubmit={clickKaro}>
      <label>Name</label>
      <br />
      <input type="text" onChange={nameChange} value={uName} />
      <br />

      <label>Email</label>
      <br />
      <input type="email" onChange={emailChange} value={uEmail} />
      <br />

      <label>Password</label>
      <br />
      <input type="password" onChange={passwordChange} value={uPassword} />
      <br />

      <button>Submit</button>
    </form>
  );
}
