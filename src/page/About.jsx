import { useQuery } from "@tanstack/react-query";


import useAxios from "../hooks/useAxios";
import ServiceItem from "./ServiceItem";


const About = () => {

  const axios=useAxios()
//   useEffect(()=>{
// fetch('http://localhost:5000/api/v1/services')
// .then(res=> res.json())
// .then(data=> setServices(data))
//   },[])

const getservices=async()=>{
 const res = await axios.get('/services');
return res
}
const {data,isLoading,isError,error}=useQuery({
  queryKey:['service'],
  queryFn:getservices
})
if(isLoading){
  return <p>Loading...</p>
}
if(isError){
  return <p>somthing is worng:{error}</p>
}
console.log(data?.data);
  
  
    return (
        <div>
          about  
          {
            data?.data?.map( item=> <ServiceItem key={item._id } item={item}></ServiceItem>)
          }
        </div>
    );
};

export default About;