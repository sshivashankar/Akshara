'use client';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
export default function Dashboard(){const [events,setEvents]=useState<any[]>([]);useEffect(()=>{fetch(process.env.NEXT_PUBLIC_API_URL+'/api/events').then(r=>r.json()).then(setEvents);const s=io(process.env.NEXT_PUBLIC_SOCKET_URL!);s.emit('join_room',{room:'global'});return ()=>s.disconnect();},[]);return <main className='p-8'><h2 className='text-2xl'>Dashboard</h2><div className='grid gap-4 mt-4'>{events.map(e=><div key={e.id} className='card p-4'>{e.title} ({e.joinCode})</div>)}</div></main>}
