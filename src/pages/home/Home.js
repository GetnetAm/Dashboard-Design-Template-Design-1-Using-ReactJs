import React from 'react'
// import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
// import { AreaChart, LineChart,line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import "./Home.css"
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
function Home() {

  // const data = [
  //   {
  //     name: 'Jun',
  //     "payment": 3000,
    
  //   },
  //   {
  //     name: 'Feb',
  //     "payment": 10000,
    
  //   },
  //   {
  //     name: 'March',
  //     "payment": 100,
    
  //   },
  //   {
  //     name: 'May',
  //     "payment": 400,
    
  //   },
  //   {
  //     name: 'Junl',
  //     "payment": 4000,
    
  //   },
  //   {
  //     name: 'Sep',
  //     "payment": 6000,
    
  //   },
  //   {
    
  //   },

   
  // ];
  // return (
  //   <main>
  //   <div className='main-container'>
  //       <div className='main-title'>
  //         <h3>Dashboard</h3>

  //       </div>

  //       <div className='main-cards'>

  //         <div className='card'>
  //         <div className='card-inner'>
  //           <h3>Products</h3>
  //           <CardGiftcardIcon className='card_icon'/>

  //         </div>
  //         <h1>300</h1>

  //       </div>

  //       <div className='card'>
  //         <div className='card-inner'>
  //           <h3>Customers</h3>
  //           <CardGiftcardIcon className='card_icon'/>

  //         </div>
  //         <h1>5000</h1>

  //       </div>

  //       <div className='card'>
  //         <div className='card-inner'>
  //           <h3>Categories</h3>
  //           <CardGiftcardIcon className='card_icon'/>

  //         </div>
  //         <h1>1000</h1>

  //       </div>

      


  //       </div>
      
  //   </div>

  //   <div className='chart'>
  //     <div className='line graph'>
  //   <h3 className="chartTitle">Reports</h3>
  // <ResponsiveContainer width="100%" height="600px" aspect={4 / 3}>
  //  <LineChart data={data}>
  //      <XAxis dataKey="name" stroke='#5550bd'/>
  //      {/* <Line type="monotone" dataKey="uv" stroke='#5550bd'/> */}
  //      <YAxis dataKey="payment" stroke='#5550bd' type="monotone" />
  //      <Tooltip />
  //      <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" /> 

  //  </LineChart>

  // </ResponsiveContainer>
  // </div>
  // <div className='graph'>
  // <ResponsiveContainer width="100%" height="100%">
  //       <AreaChart
  //         width={500}
  //         height={400}
  //         data={data}
  //         margin={{
  //           top: 10,
  //           right: 30,
  //           left: 0,
  //           bottom: 0,
  //         }}
  //       >
  //         <CartesianGrid strokeDasharray="3 3" />
  //         <XAxis dataKey="name" />
  //         <YAxis />
  //         <Tooltip />
  //         <defs>
  //           <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
  //             <stop  stopColor="green" stopOpacity={1} />
  //             <stop  stopColor="red" stopOpacity={1} />
  //           </linearGradient>
  //         </defs>
  //         <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
  //       </AreaChart>
  //     </ResponsiveContainer>


  // </div>
  // </div>

  //   </main>
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
 

return (
<main className='main-container'>
    <div className='main-title'>
        <h3>DASHBOARD</h3>
    </div>

    <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
                <h3>PRODUCTS</h3>
                <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>300</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>CATEGORIES</h3>
                <BsFillGrid3X3GapFill className='card_icon'/>
            </div>
            <h1>12</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>CUSTOMERS</h3>
                <BsPeopleFill className='card_icon'/>
            </div>
            <h1>33</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>ALERTS</h3>
                <BsFillBellFill className='card_icon'/>
            </div>
            <h1>42</h1>
        </div>
    </div>

    <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>

    </div>
</main>
  )
}

export default Home
