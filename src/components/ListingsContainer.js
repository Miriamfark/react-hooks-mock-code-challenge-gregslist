import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard"


function ListingsContainer({ searchTerm }) {

  const [listings, setListings] = useState()

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then((r)=>r.json())
    .then((data)=>setListings(data))
  }, [])

  let filteredArray;
  if(listings)
  filteredArray = listings.filter((listing)=>{
    return listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  })

  console.log(filteredArray)

  let listingsArray
  if (listings) {
    listingsArray=filteredArray.map((listing)=> {
      return <ListingCard
       key={listing.id} 
       description={listing.description} 
       image={listing.image} 
       location={listing.location} 
       id={listing.id}
       onDeleteListing={handleDeleteListing}
        />
    })
  }

  function handleDeleteListing(id) {
    let updatedArray;
    if (listings) {
      updatedArray = listings.filter((listing)=>{
        return listing.id !== id
      })
      setListings(updatedArray)
    }
  }

  return (
    <main>
      <ul className="cards">
        {listingsArray}
      </ul>
    </main>
  );
}

export default ListingsContainer;
