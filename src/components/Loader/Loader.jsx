import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



const Loader = () => {
  return (<Skeleton count={30}/>);
}

export default Loader;