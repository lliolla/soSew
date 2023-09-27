import React from 'react'

const Card = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">
        Shoes!
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor autem porro, quod doloribus ipsam vitae praesentium est officiis, sunt neque dicta maxime dolores commodi impedit tempora fugit quas omnis delectus.</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
        <div className="badge badge-outline">adulte</div> 
        <div className="badge badge-outline">chemise</div>
      </div>
    </div>
  </div>
  )
}

export default Card