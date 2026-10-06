"use server";

import { authHeader } from "../authHeader";

const url = process.env.SERVER_URL;

export const getApplicationDetails = async (appicationId) => {
  const res = await fetch(`${url}/applications/${appicationId}`);
  return res.json();
};

export const getApplications = async (
  userId,
  searchQuery = "",
  sortBy = "newest",
) => {
  const headers = await authHeader();

  const res = await fetch(
    `${url}/applications?userId=${userId}&searchQuery=${searchQuery}&sortby=${sortBy}`,
    { headers },
  );

  return res.json();
};

export async function getRecruiterApplications() {
  const headers = await authHeader();
  const res = await fetch(`${url}/recruiter/applications`, { headers });
  return res.json();
}
