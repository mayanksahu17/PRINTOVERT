import axios from 'axios';
import API_BASE_URL from './config';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // You can set other headers if needed, such as authorization headers, etc.
  },
});

const loginUser = async (userData) => {
  try {
    const response = await api.post('/login', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const logoutUser = async () => {
  try {
    const response = await api.post('/logout');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const refreshToken = async () => {
  try {
    const response = await api.post('/refresh-token');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const getCurrentUser = async () => {
  try {
    const response = await api.get('/current-user');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const updateUserAccount = async (userData) => {
  try {
    const response = await api.patch('/update-account', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


const changePassword = async (passwordData) => {
    try {
      const response = await api.post('/change-password', passwordData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  const getUserCredentials = async () => {
    try {
      const response = await api.get('/credencials');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  const uploadImage = async (id, imageData) => {
    try {
      const response = await api.post(`/image/${id}`, imageData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  const getAllImages = async (id) => {
    try {
      const response = await api.get(`/all-image/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  const getAllUserTickets = async (id) => {
    try {
      const response = await api.get(`/${id}/tickets`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  const getAllUserTransactions = async (id) => {
    try {
      const response = await api.get(`/${id}/transactions`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  const getAllOrderedProducts = async (id) => {
    try {
      const response = await api.get(`/${id}/cart`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  const createTicket = async (id, ticketData) => {
    try {
      const response = await api.post(`/${id}/create-ticket`, ticketData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  

export {
  loginUser,
  registerUser,
  logoutUser,
  refreshToken,
  getCurrentUser,
  updateUserAccount,
  changePassword,
  getUserCredentials,
  uploadImage,
  getAllImages,
  getAllUserTickets,
  getAllUserTransactions,
  getAllOrderedProducts,
  createTicket,
};

