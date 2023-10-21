import React, { useEffect, useState } from "react";
import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const Users = () => {
  const [iseLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [loadedUsers, setLoadedUsers] = useState(false)


  useEffect(()=> {
    const sendRequest = async () => {
      setIsLoading(true)
      try{
        const response = await fetch('http://localhost:5000/api/users')
        const responseData = await response.json()

        if(!response.ok){
          throw new Error(responseData.message)
        }

        setLoadedUsers(responseData.users)
        console.log(responseData);
    }catch(err){
      setError(err.message)
    }
    setIsLoading(false)
    }
    sendRequest()
  },[])

  const errorHandler = () => {
    setError(null)
  }


  return <>
  <ErrorModal error={error} onClear={errorHandler} />
  {iseLoading && (
    <div className="center">
      <LoadingSpinner />
    </div>
  )}
  {!iseLoading && loadedUsers && <UsersList items={loadedUsers} />}
  </>;
};

export default Users;
