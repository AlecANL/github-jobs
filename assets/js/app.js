import { Card, OptionSearch, getRandomJobList } from './index.js';

const $jobLists = document.getElementById('jobs-container'),
  $loader = document.getElementById('loader'),
  $asideSearchOptions = document.getElementById('aside-country');

let currentJobs;
let isLoader = true;

const exampleQuery = {
  full_time: 'full_time',
  search: 'search',
  location: 'location',
};

function hasLoader() {
  if (!isLoader) {
    return ($loader.style.display = 'none');
  }
  return ($loader.style.display = 'block');
}

function loadComponent(job, component) {
  const el = document.createElement('div');
  el.innerHTML = component(job);
  return el.firstElementChild;
}

async function render(query, param, component, $container) {
  const jobs = await getRandomJobList(query, param);
  currentJobs = jobs;
  if (jobs) {
    isLoader = false;
    hasLoader();
    console.log(currentJobs);
    // jobs.forEach(el => loadComponent(el, $jobLists));
    currentJobs.forEach(job => {
      $container.append(loadComponent(job, component));
    });
  }
}

function showDetailsByJob(e) {
  const id = e.target.dataset.id;
  if (!id) {
    return;
  }
  console.log(id);
  const jobs = currentJobs.find(job => job.id === id);
  console.log(jobs);
}

document.addEventListener('DOMContentLoaded', function () {
  render('search', 'nonde', Card, $jobLists);
  $jobLists.addEventListener('click', showDetailsByJob);
});
