import { RemoveRedEye, RemoveRedEyeOutlined, VisibilityOff, VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useState } from "react";


const UserProfile3 = () => {
  const [formData, setFormData] = useState({
    firstName: "Nur E",
    lastName: "Jahan",
    email: "nurejahan562@gmail.com",
    address: "Mirpur 10",
    contact: "017236873683",
    city: "Kurigram",
    state: "Rangpur",
    password: "sbsdjfe@@##",
    profileImage: "https://via.placeholder.com/100", // Placeholder for profile picture
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-6">
        {/* Tabs */}
        <div className="flex border-b pb-2">
          {["My Profile", "Notification", "Appearance", "Security", "Help"].map(
            (tab, index) => (
              <button
                key={index}
                className={`text-gray-500 px-4 py-2 text-sm font-medium ${
                  tab === "My Profile" ? "text-blue-600 border-b-2 border-blue-600" : ""
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex flex-col items-center">
            <label htmlFor="profileImage" className="cursor-pointer">
              <img
                src={formData.profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
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

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="w-full p-2 border rounded mt-1 bg-gray-100"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium">Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm font-medium">City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
              >
                <option value="Kurigram">Kurigram</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-1"
              >
                <option value="Rangpur">Rangpur</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
              </select>
            </div>
          </div>

          <div className="mt-4 relative">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1 pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-10 text-gray-600"
            >
           <VisibilityOffOutlined/>
              {/* <VisibilityOutlined/> */}
            </button>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile3;
