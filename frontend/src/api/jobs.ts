import axios from "axios";
import type { Job } from "../types/job";


const API_URL =
  "http://localhost:5050/api/jobs";


interface JobsResponse {
  jobs: Job[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}


export async function getJobs(
  page = 1,
  limit = 12
): Promise<JobsResponse> {

  const response =
    await axios.get(
      `${API_URL}?page=${page}&limit=${limit}`
    );


  return response.data;

}