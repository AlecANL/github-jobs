import { Card } from './components/Card.js';

const $jobLists = document.getElementById('job-lists'),
  $loader = document.getElementById('loader');

let isLoader = true;

async function getJobList() {
  const api = 'https://jobs.github.com/positions.json?search=node';
  const cors = `https://api.allorigins.win/get?url=${encodeURIComponent(api)}`;

  const response = await fetch(cors);
  const data = await response.json();
  return JSON.parse(data.contents);
}

async function getRandomJobList(limit = 5) {
  const random = Math.floor(Math.random() * 30);
  const jobs = await getJobList();
  const results = jobs.slice(random, random + limit);
  return results;
}

function hasLoader() {
  if (!isLoader) {
    return ($loader.style.display = 'none');
  }
  return ($loader.style.display = 'block');
}

function loadComponent(objJob, $container) {
  const el = document.createElement('div');
  el.innerHTML = Card(objJob);
  $container.appendChild(el.firstElementChild);
}

async function render() {
  const jobs = await getRandomJobList();
  if (jobs) {
    isLoader = false;
    hasLoader();
    console.log(jobs);
    jobs.forEach(el => loadComponent(el, $jobLists));
  }
}

window.addEventListener('DOMContentLoaded', render);
