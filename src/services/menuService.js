import API from './api';

export const getAllRangeMenus = async () => {
  try {
    const response = await API.get('/range-menus');
    return response.data;
  } catch (error) {
    console.error("Error fetching range menus:", error);
    throw error;
  }
};
