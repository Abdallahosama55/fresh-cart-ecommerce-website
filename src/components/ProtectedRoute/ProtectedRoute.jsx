import React, { Fragment } from 'react'
import { useContext,useEffect } from 'react'
import { authcontext } from '../../context/AuthntictionContext'
import { Navigate, useNavigate } from 'react-router-dom'

function ProtectedRoute({children}) {

  const { token } = useContext(authcontext);

  useEffect(() => {
    // Perform any necessary actions to retrieve the token from browser storage
    // and set it in the authContext
  }, []);

  if (localStorage.getItem('tkn') === null) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
}



export default ProtectedRoute