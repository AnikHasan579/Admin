import React from 'react'
import './Dashboard.css'
import {Chart as ChartJS} from "chart.js/auto";
import {Bar,Pie, Line,Bubble,Radar} from "react-chartjs-2";



const Dashboard = () => {
  return (
 
<div > 

<div class="row row-cols row-cols-md-3 g-4">
  <div class="col">
    <div class="text">
      <div class="card-body">
        <h5 class="card-title1">26K (-12.4%)</h5>
        <p class="card-text1"><i class="fa fa-user" aria-hidden="true"></i> User</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="text">
      
      <div class="card-body">
        <h5 class="card-title1">$6.200 (40.9% )</h5>
        <p class="card-text1"><i class="fa fa-usd" aria-hidden="true"></i> Income</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
  <div class="text">
    <div class="card-body">
      <h5 class="card-title1">2.49 (84.7% )</h5>
      <p class="card-text1"><i class="fa fa-commenting" aria-hidden="true"></i> Conversion Rate</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>

  <div class="col">
  <div class="text">
    <div class="card-body">
      <h5 class="card-title1">44K (-23.6% )</h5>
      <p class="card-text1">Sessions</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
</div>
<br/>
<br/>
<br/>
    <div class="card">
      <div class="coll">
        <div class="card h-100">
        <Line     
          data={{
            labels: 
            ['AFG','AGO','ALB','ARE','ARG','ARM','AUS','AUT','AZE','BDI'],
            datasets: [{
              label: 'First Dataset',
              data: [3102.63,
                8691.02,
                158.47,
                246.54,
                4689.91,
                138.29,
                674.44,
                232.64,
                416.34,
                3961.54
                ],
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
              label: 'Second Dataset',
              data: [780, 480, 400, 1900, 9600, 2790, 100],
              fill: true,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgb(54, 162, 235)',
              pointBackgroundColor: 'rgb(54, 162, 235)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(54, 162, 235)'
            }],
          }}
          
          />
      <div class="card-body">
      <h5 class="card-title">Line Chart</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      
    </div>
    </div>
    </div>
    </div>
    <div > 
<div class="row row-cols row-cols-md-3 g-4">
  <div class="col">
    <div class="text1">
      <div class="card-body">
        <h5 class="card-title1"><i class="fa fa-envelope-o"></i>-Mail</h5>
        <p class="card-text1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="text1">
      
      <div class="card-body">
        <h5 class="card-title1"><i class="fa fa-facebook"></i>-Book</h5>
        <p class="card-text1">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>

  <div class="col">
  <div class="text1">
    <div class="card-body">
      <h5 class="card-title1"><i class="fa fa-address-book-o" aria-hidden="true"></i>-Address</h5>
      <p class="card-text1">This is a wider card with supporting text below as a natural lead-in to additional content. This card has</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
    </div>  
    </div> 
    <br/>
    <iframe className='youtube' width="100%" height="315" src="https://www.youtube.com/embed/eo4Zj-7Ex4o?si=92opXvssbVbADgf8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   
    </div> 
   
  )
} 

export default Dashboard
