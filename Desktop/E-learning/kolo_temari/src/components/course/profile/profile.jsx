import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaCreditCard, FaBell, FaImage, FaShieldAlt } from "react-icons/fa";
import "./profile.css";

export const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("profile");
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [newImage, setNewImage] = useState(null);

  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "A passionate learner and software developer with a keen interest in web technologies and AI.",
  });

  const [securityDetails, setSecurityDetails] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "**** **** **** 1234",
    billingAddress: "1234 Elm Street, Springfield, USA",
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const [privacyDetails, setPrivacyDetails] = useState({
    profileVisibility: "Public",
    dataSharing: "Enabled",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(URL.createObjectURL(file));
      setImage(URL.createObjectURL(file));
    }
  };

  const handleImageSubmit = (e) => {
    e.preventDefault();
    // Handle image upload logic here
    alert("Profile picture updated!");
  };

  const handleSecuritySubmit = (e) => {
    e.preventDefault();
    // Handle security details update logic here
    alert("Security settings updated!");
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Handle payment details update logic here
    alert("Payment settings updated!");
  };

  const handleNotificationSubmit = (e) => {
    e.preventDefault();
    // Handle notification settings update logic here
    alert("Notification settings updated!");
  };

  const handlePrivacySubmit = (e) => {
    e.preventDefault();
    // Handle privacy settings update logic here
    alert("Privacy settings updated!");
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <div className="sidebar">
          <div className="profile-image">
            <img src={image} alt="User" />
            <h3>{userDetails.name}</h3>
            <p>{userDetails.email}</p>
          </div>
          <ul className="sidebar-menu">
            <li
              className={selectedTab === "profile" ? "active" : ""}
              onClick={() => setSelectedTab("profile")}
            >
              <FaUser /> Profile
            </li>
            <li
              className={selectedTab === "security" ? "active" : ""}
              onClick={() => setSelectedTab("security")}
            >
              <FaLock /> Security
            </li>
            <li
              className={selectedTab === "payment" ? "active" : ""}
              onClick={() => setSelectedTab("payment")}
            >
              <FaCreditCard /> Payment
            </li>
            <li
              className={selectedTab === "notification" ? "active" : ""}
              onClick={() => setSelectedTab("notification")}
            >
              <FaBell /> Notification
            </li>
            <li
              className={selectedTab === "view-picture" ? "active" : ""}
              onClick={() => setSelectedTab("view-picture")}
            >
              <FaImage /> View Profile Picture
            </li>
            <li
              className={selectedTab === "privacy" ? "active" : ""}
              onClick={() => setSelectedTab("privacy")}
            >
              <FaShieldAlt /> Privacy
            </li>
          </ul>
        </div>
        <div className="content">
          {selectedTab === "profile" && (
            <div className="profile-details">
              <h2>Profile</h2>
              <form>
                <label>
                  Name:
                  <input
                    type="text"
                    value={userDetails.name}
                    onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    value={userDetails.email}
                    onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                  />
                </label>
                <label>
                  Bio:
                  <textarea
                    value={userDetails.bio}
                    onChange={(e) => setUserDetails({ ...userDetails, bio: e.target.value })}
                  />
                </label>
                <button type="submit">Save Changes</button>
              </form>
            </div>
          )}

          {selectedTab === "security" && (
            <div className="profile-details">
              <h2>Security</h2>
              <form onSubmit={handleSecuritySubmit}>
                <label>
                  Current Password:
                  <input
                    type="password"
                    value={securityDetails.currentPassword}
                    onChange={(e) => setSecurityDetails({ ...securityDetails, currentPassword: e.target.value })}
                  />
                </label>
                <label>
                  New Password:
                  <input
                    type="password"
                    value={securityDetails.newPassword}
                    onChange={(e) => setSecurityDetails({ ...securityDetails, newPassword: e.target.value })}
                  />
                </label>
                <label>
                  Confirm New Password:
                  <input
                    type="password"
                    value={securityDetails.confirmPassword}
                    onChange={(e) => setSecurityDetails({ ...securityDetails, confirmPassword: e.target.value })}
                  />
                </label>
                <button type="submit">Update Password</button>
              </form>
            </div>
          )}

          {selectedTab === "payment" && (
            <div className="profile-details">
              <h2>Payment</h2>
              <form onSubmit={handlePaymentSubmit}>
                <label>
                  Card Number:
                  <input
                    type="text"
                    value={paymentDetails.cardNumber}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                  />
                </label>
                <label>
                  Billing Address:
                  <input
                    type="text"
                    value={paymentDetails.billingAddress}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, billingAddress: e.target.value })}
                  />
                </label>
                <button type="submit">Update Payment Details</button>
              </form>
            </div>
          )}

          {selectedTab === "notification" && (
            <div className="profile-details">
              <h2>Notification</h2>
              <form onSubmit={handleNotificationSubmit}>
                <label>
                  Email Notifications:
                  <select
                    value={notifications.emailNotifications ? "Enabled" : "Disabled"}
                    onChange={(e) => setNotifications({ ...notifications, emailNotifications: e.target.value === "Enabled" })}
                  >
                    <option value="Enabled">Enabled</option>
                    <option value="Disabled">Disabled</option>
                  </select>
                </label>
                <label>
                  SMS Notifications:
                  <select
                    value={notifications.smsNotifications ? "Enabled" : "Disabled"}
                    onChange={(e) => setNotifications({ ...notifications, smsNotifications: e.target.value === "Enabled" })}
                  >
                    <option value="Enabled">Enabled</option>
                    <option value="Disabled">Disabled</option>
                  </select>
                </label>
                <button type="submit">Save Notification Settings</button>
              </form>
            </div>
          )}

          {selectedTab === "view-picture" && (
            <div className="profile-details">
              <h2>View Profile Picture</h2>
              <div className="profile-image-large">
                <img src={image} alt="User" />
              </div>
              <form onSubmit={handleImageSubmit}>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                <button type="submit">Upload New Picture</button>
              </form>
            </div>
          )}

          {selectedTab === "privacy" && (
            <div className="profile-details">
              <h2>Privacy</h2>
              <form onSubmit={handlePrivacySubmit}>
                <label>
                  Profile Visibility:
                  <select
                    value={privacyDetails.profileVisibility}
                    onChange={(e) => setPrivacyDetails({ ...privacyDetails, profileVisibility: e.target.value })}
                  >
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                    <option value="Friends">Friends</option>
                  </select>
                </label>
                <label>
                  Data Sharing:
                  <select
                    value={privacyDetails.dataSharing}
                    onChange={(e) => setPrivacyDetails({ ...privacyDetails, dataSharing: e.target.value })}
                  >
                    <option value="Enabled">Enabled</option>
                    <option value="Disabled">Disabled</option>
                  </select>
                </label>
                <button type="submit">Update Privacy Settings</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
