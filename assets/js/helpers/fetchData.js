const api = 'https://jobs.github.com/positions.json?';

export async function getJobsLists(url = '', query = '', param = '') {
  const API = encodeURIComponent(`${url}?${query}=${param}`);
  const cors = `https://api.allorigins.win/get?url=${API}`;
  try {
    const jobs = await fetch(cors);
    const response = await jobs.json();
    const responseJobs = JSON.parse(response.contents);
    return responseJobs;
  } catch (err) {
    console.error(err);
  }
}

export async function getRandomJobList(query, param, limit = 5) {
  const random = Math.floor(Math.random() * 30);
  const jobs = await getJobsLists(api, query, param);
  const results = jobs.slice(random, random + limit);
  //   currentJobs = results;
  return results;
}
