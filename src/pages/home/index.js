import { useEffect, useState } from "react";
import { Container } from "./styles";
import { Card } from "../../components/card";
import { getCurrentTime } from "../../functions/get-current-time";

export function Home(){
 const [time, setTime] = useState();
 
 useEffect(() => {
  const interval = setInterval(() =>{
      const CurrentTime = getCurrentTime();
    setTime(CurrentTime);
    }, 1000);
    return ()=> clearInterval(interval);
},[]);
    

    return (
        <Container>
           <Card number={time?.hours} />
           <Card number={time?.minutes}/>
           <Card number={time?.seconds}/>
        </Container>
    )
}