const username = 'Qkari17';
const repositoriesContainer = document.querySelector('.repository--js');
import starIcon from './images/star-01.svg';
import browser from './images/browser-1.svg';
import github from './images/github.svg';

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(response => {
    for (let repository of response) {
      const { name, html_url, description, stargazers_count, topics } = repository;

      const descriptionText = description ? description : 'No description available';
      const topicsHTML = topics.length
        ? topics.map(topic => `<span class="px-2 py-1 text-lg font-bold bg-gray-400/10 rounded-sm">${topic}</span>`).join('')
        : '<span class="text-gray-400">No topics available</span>';

      const element = `
        <div class="flex flex-col overflow-hidden rounded-2xl border-1 border-t-0 backdrop-blur border-gray-900 from-white/15 to-white/4 bg-gradient-to-br shadow-[rgba(255,255,255,0.2)_0px_-2px_0px_0px] group">
          <div class="flex h-11 px-4 gap-1.5 items-center bg-white1 border-1 border-t-0 backdrop-blur border-gray-900 from-white/15 to-white/4 bg-gradient-to-br shadow-[rgba(255,255,255,0.2)_0px_-2px_0px_0px]">
            <span class="h-3 w-3 rounded-full bg-gray-900 opacity-50 group-hover:bg-red-400 group-hover:opacity-100 duration-300 ease-in-out"></span>
            <span class="h-3 w-3 rounded-full bg-gray-900 opacity-50 group-hover:bg-amber-400 group-hover:opacity-100 duration-500 ease-in-out"></span>
            <span class="h-3 w-3 rounded-full bg-gray-900 opacity-50 group-hover:bg-green-500 group-hover:opacity-100 duration-700 ease-in-out"></span>
          </div>
          <div class="p-5 flex flex-col gap-10">
            <div class="flex flex-col gap-4">
              <div class="flex gap-4">
                <h1 class="font-bold text-2xl">${name}</h1>
                <span class="flex px-2 py-0.5 rounded-md bg-gray-400/10 gap-0.5 items-center">
                  <img src="${starIcon}" class="h-4 w-4">
                  <p class="text-gray-400">${stargazers_count}</p>
                </span>
              </div>
              <p class="text-xl text-gray-400">${descriptionText}</p>
              <div class="flex gap-2">${topicsHTML}</div>
            </div>
            <div class="flex flex-col gap-4 items-start">
            <a href="https://github.com/Qkari17" target="_blank" rel="noopener noreferrer" class="border-1 border-gray-700 bg-gray-900 px-5 py-4 flex gap-2 text-cyan-500 rounded-lg font-bold hover:bg-white/10"><img src="${github}"  class="w-6 h-6">View demo</a>
              <a href="${html_url}" target="_blank" rel="noopener noreferrer" class="border-1 border-gray-700 bg-gray-900 px-5 py-4 flex gap-2 text-cyan-500 rounded-lg font-bold hover:bg-white/10">
                <img src="${browser}" class="w-6 h-6">Source code
              </a>
            </div>
          </div>
        </div>`;

      repositoriesContainer.insertAdjacentHTML('beforeend', element);
    }
  })
  .catch(error => console.error('Error fetching data:', error));
