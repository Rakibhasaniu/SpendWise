import { checkUser } from '@/lib/checkUser';
import React from 'react';

const Navbar = () => {
  const user = checkUser();
  console.log("user",user)
  return (
    <div>
      <h1>Navbar</h1>
    </div>
  );
};

export default Navbar;