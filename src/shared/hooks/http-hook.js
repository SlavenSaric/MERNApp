import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const activeHttpRequest = useRef([])

  const sendRequest = useCallback(async (url, method = 'GET', body = null, headers= {}) => {
    try{
        setIsLoading(true)
        const HttpAbortCtrll = new AbortController()
        activeHttpRequest.current.push(HttpAbortCtrll)
        const response = await fetch(url, {
            method,
            headers,
            body,
            signal: HttpAbortCtrll.signal
        })

        const responseData = await response.json();
        if(!response.ok){
            throw new Error(responseData.message)
        }
        return responseData
    }
    catch(err){
        setError(err.message)
    }
    setIsLoading(false)
   }, [])  


   const clearError = () => {
        setError(?null)
   }

   useEffect(() => {
    return () => {
        activeHttpRequest.current.forEach(abortCtrl => abortCtrl.abortCtrl.abort())
    }
   }, [])

   return {isLoading, error, sendRequest, clearError}

};
