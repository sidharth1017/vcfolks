import axios from "axios";

const API_URL = "http://localhost:5500";

export const getReports = async (category, subcategory, year, selectedAuthors) => {
  try {
    const response = await axios.get(`/api/get-all-report?`, {
      params: { category, subcategory, year, selectedAuthors },
    });
        return response.data;
  } catch (error) {
    console.error("Error fetching reports:", error);
    throw error;
  }
};
