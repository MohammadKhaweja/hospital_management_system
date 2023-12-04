import axios from "axios";

const API_URL = "http://localhost/hospital_management_system/backend";

// const post = async ({ route, body }) => {
//   try {
//     const response = await axios.post(`${API_URL}${route}.php`, body);

//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const signUpUser = async (
//   email,
//   password,
//   userType,
//   name,
//   gender,
//   phoneNumber
// ) => {
//   post({
//     route: "/sign_up/signup",
//     body: {
//       email,
//       password,
//       userType,
//       name,
//       gender,
//       phoneNumber,
//     },
//   });
// };

// Function to sign up with username, password, and user role
export const signUpUser = async (
  email,
  password,
  userType,
  name,
  gender,
  phoneNumber
) => {
  try {
    const response = await axios.post(`${API_URL}/sign_up/signup.php`, {
      email,
      password,
      userType,
      name,
      gender,
      phoneNumber,
    });
    const token = response.data.token; // Get the token from the response
    // Store the token securely (e.g., in local storage)
    localStorage.setItem("token", token); // Store in local storage
    console.log(response.data);
    return token; // Return the token for further handling if needed
  } catch (error) {
    console.log("error");
    throw new Error(error.response.data.message);
  }
};

// Function to sign in with username and password

export const signInUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/sign_up/signin.php`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getUsers = async (userType) => {
  try {
    const response = await axios.post(`${API_URL}/users/get_users.php`, {
      userType,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateUser = async (id, email, gender, name, phoneNumber) => {
  try {
    const response = await axios.post(`${API_URL}/users/update_user.php`, {
      id,
      email,
      gender,
      name,
      phoneNumber,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.post(`${API_URL}/users/delete_user.php`, {
      id,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const addAdminRoom = async (room_name, room_status) => {
  try {
    const response = await axios.post(`${API_URL}/rooms/add_room.php`, {
      room_name,
      room_status,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getAdminRooms = async (room_status) => {
  try {
    const response = await axios.post(`${API_URL}/rooms/get_rooms.php`, {
      room_status,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteAdminRooms = async (room_id) => {
  try {
    const response = await axios.post(`${API_URL}/rooms/delete_room.php`, {
      room_id,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const deleteFreeRoom = async (room_id) => {
  try {
    const response = await axios.post(`${API_URL}/rooms/delete_free_room.php`, {
      room_id,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updatePatientRoom = async (room_number, patient_id) => {
  try {
    const response = await axios.post(`${API_URL}/patients/update_room.php`, {
      room_number,
      patient_id,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const updateRoomName = async (room_id, room_name) => {
  try {
    const response = await axios.post(`${API_URL}/rooms/update_room_name.php`, {
      room_id,
      room_name,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getPatients = async () => {
  try {
    const response = await axios.get(`${API_URL}/doctors/get_patients.php`, {});
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const prescribeMedication = async (patient_id, diagnosis) => {
  try {
    const response = await axios.post(
      `${API_URL}/doctors/assign_medications.php`,
      {
        patient_id,
        diagnosis,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const assignToPatient = async (patient_id, assigned_dr) => {
  try {
    const response = await axios.post(
      `${API_URL}/doctors/assign_to_patient.php`,
      {
        patient_id,
        assigned_dr,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const unAssignToPatient = async (patient_id) => {
  try {
    const response = await axios.post(
      `${API_URL}/doctors/unassign_to_patient.php`,
      {
        patient_id,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
