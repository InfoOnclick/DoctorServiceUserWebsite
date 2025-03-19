import { useState } from "react";
import { assets } from "../assets/assets";

const UserProfile2 = () => {
  const [formData, setFormData] = useState({
    firstName: "Mohamed",
    lastName: "Noufal",
    email: "mohamednoufal@gmail.com",
    address: "Palayamkottai",
    contact: "8270207078",
    city: "Tirunelveli",
    state: "State",
    profileImage: "https://via.placeholder.com/100",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, profileImage: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-100 p-4">
      <div className="shadow-lg rounded-xl w-full max-w-lg sm:max-w-xl md:max-w-2xl p-6 bg-white">
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-lg mb-6 w-full text-center bg-indigo-100">
              <h3 className="font-semibold text-lg">Basic Information</h3>
              {/* <p className="text-sm opacity-80">Information about User</p> */}
            </div>

            <label htmlFor="profileImage" className="cursor-pointer">
              <img
                src={assets.profile_pic}
                alt="Profile"
                className="w-32 h-32 sm:w-44 sm:h-44 rounded-full border-2 border-gray-300 object-cover"
              />
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* User Details */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm font-medium">First Name</label>
              <p className="bg-gray-100 p-2 rounded">{formData.firstName}</p>
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <p className="bg-gray-100 p-2 rounded">{formData.email}</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm font-medium">Last Name</label>
              <p className="bg-gray-100 p-2 rounded">{formData.lastName}</p>
            </div>
            <div>
              <label className="text-sm font-medium">Phone</label>
              <p className="bg-gray-100 p-2 rounded">{formData.contact}</p>
            </div>
          </div>

          {/* Address Information */}
          <div className="p-3 rounded-lg mt-6 mb-4 w-full text-center bg-indigo-100">
            <h3 className="font-semibold text-lg">Address Information</h3>
            {/* <p className="text-sm opacity-80">Information about User</p> */}
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm font-medium">Address</label>
              <p className="bg-gray-100 p-2 rounded">{formData.address}</p>
            </div>
            <div>
              <label className="text-sm font-medium">City</label>
              <p className="bg-gray-100 p-2 rounded">{formData.city}</p>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium">State</label>
            <p className="bg-gray-100 p-2 rounded">{formData.state}</p>
          </div>

          {/* <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
          >
            Save Changes
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default UserProfile2;
