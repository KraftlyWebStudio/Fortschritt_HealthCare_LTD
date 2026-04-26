import axios from "axios";
import { ContactFormData } from "../validators/contact";
import { env } from "../validators/env";

const API_BASE_URL = env.BACKEND_URL || "http://localhost:5001";

/**
 * Submits the contact form to the backend
 * @param data Validated contact form data
 */
export const submitContactForm = async (data: ContactFormData) => {
  const response = await axios.post(`${API_BASE_URL}/api/contact`, data);
  return response.data;
};
