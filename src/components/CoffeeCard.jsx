import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, price, quantity, photo } = coffee;

  const handleDelete = (_id) => {
    // console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(result.isConfirmed);

        // start deleting the coffeeMore actions
        fetch(
          `https://coffee-store-server-henna-eta.vercel.app/coffees/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log('After delete', data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              // remove the coffee from the state
              const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm border-2">
      <figure>
        <img src={photo} alt="Pictures" />
      </figure>
      <div className="flex w-full justify-around">
        <div className="mt-14 md:mt-12">
          <h2>{name}</h2>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical mt-8 md:mt-4 space-y-2">
            <Link to={`/coffee/${_id}`}>
              <button className="btn join-item">View</button>
            </Link>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn join-item">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
