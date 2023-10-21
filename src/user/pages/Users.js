import React, { useEffect, useState } from "react";
import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Users = () => {
  const {isLoading, error, sendRequest, clearError} = useHttpClient()
  const [loadedUsers, setLoadedUsers] = useState(false)


  useEffect(()=> {
    const fetchUsers = async () => {
      try{
        const responseData = await sendRequest('http://localhost:5000/api/users')
        
        setLoadedUsers(responseData.users)
        console.log(responseData);
    }catch(err){
    }
    }
    fetchUsers()
  },[sendRequest])




  return <>
  <ErrorModal error={error} onClear={clearError} />
  {isLoading && (
    <div className="center">
      <LoadingSpinner />
    </div>
  )}
  {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
  </>;
};

export default Users;
