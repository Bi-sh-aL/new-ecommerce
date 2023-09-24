import React,{useRef, useState, useEffect} from "react";
import "./count.scss";

function Countdown() {
    const [days, setDays] = useState('00')
    const [hour, setHour] = useState('00')
    const [mins, setMins] = useState('00')
    const [secs, setSecs] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date('Jan 01, 2024 00:00:00').getTime()
        interval = setInterval(()=>{
            const now = new Date().getTime()
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000*60*60*24))
            const hours = Math.floor((distance % (1000*60*60*24) / (1000*60*60)))
            const minutes = Math.floor((distance % (1000*60*60) / (1000*60)))
            const seconds = Math.floor((distance % (1000*60) /1000 ))

            if(distance < 0){
                clearInterval(interval.current)

            }
            else{
                setDays(days)
                setHour(hours)
                setMins(minutes)
                setSecs(seconds)
            }
        },1000)
    }

    useEffect(()=>{
        startTimer();
        return()=>{
            clearInterval(interval.current)
        }
    },[])
  return (
    <div className="count my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://wp.alithemes.com/html/guza/demos/assets/imgs/page/homepage2/banner-sale.png"
              alt=""
              className="w-100"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 my-auto py-4">
            <span className="text-uppercase my-4">sale upto 60%</span>
            <h2>Blue classic long sleeves shirt</h2>
            <section className="d-flex gap-4 py-3 text-center" >
            <div className="border border-dark p-3 time">
                <p>{days}</p>
                <small>Days</small>
            </div>
            <div className="border border-dark p-3 time">
                <p>{hour}</p>
                <small>Hour</small>
            </div>
            <div className="border border-dark p-3 time">
                <p>{mins}</p>
                <small>Min</small>
            </div>
            <div className="border border-dark p-3 time">
                <p>{secs}</p>
                <small>Sec</small>
            </div>
            </section>
            <a href="#" className="btn btn-dark mt-3 px-4">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
