import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './shelf.css'
import axios from 'axios'
import { SneakerShelf } from './sneakershelf'

export const Shelf = () => {
  const location = useLocation();
  const username = location.state.username
  return (
    <div className="shelfpage">
      <h1>Welcome to your shelf, {username}</h1>
      <SneakerShelf username ={username}/>
    </div>

  )
  }