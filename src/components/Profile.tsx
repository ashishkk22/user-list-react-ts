import React from "react";
import { PeopleType } from "../constants/peopleData";
type ProfileProps = {
  person: PeopleType;
};
const Profile = ({ person }: ProfileProps) => {
  return (
    <div className="ml-8 p-4 rounded-">
      <div className="w-[22rem] rounded-[3rem] bg-white shadow-xl flex flex-col justify-center items-center ">
        <img
          className="h-6/12 w-6/12 rounded-full"
          src={person.avatar}
          alt=""
        />
        <div className="p-6 text-center">
          <h5 className="mb-3 text-xl font-medium leading-tight text-neutral-800">
            {person.first_name + " " + person.last_name}
            <sup className="text-green-500 ml-1">●</sup>
          </h5>
          <p className="mb-3 text-base text-neutral-600">{person.email}</p>
          <h5 className="mb-3 text-xl font-medium leading-tight text-neutral-800">
            Your Plan : Standard
          </h5>
          <button className="bg-lightYellow hover:bg-darkYellow text-white font-bold py-3 px-16 rounded">
            Active User
          </button>
        </div>
        <div className="w-9/12 mb-3">
          <div className="text-left text-lg">Plan Uses</div>
          <div className="w-full bg-orange-100 rounded-full h-1.5 ">
            <hr
              className="bg-darkYellow h-1.5 rounded-full my-2"
              style={{ width: "75%" }}
            />
          </div>
          <div className="flex my-4 items-center mt-8">
            <div className="flex flex-col divide-solid mx-2">
              <div className="text-3xl font-bold text-left">2,450</div>
              <div className="mb-4 text-base text-neutral-600 whitespace-nowrap">
                Clicks reviewed
              </div>
            </div>
            <div className="mx-4">
              <hr className="left-1/2 -ml-0.5 w-0.2 h-16 bg-neutral-600 mb-4 opacity-50" />
            </div>
            <div className="flex flex-col divide-solid">
              <div className="text-3xl font-bold text-left">5000</div>
              <div className="mb-4 text-base text-neutral-600 whitespace-nowrap">
                Monthly clicks
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
