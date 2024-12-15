const username = 'Qkari17'
const repositoriesContainer = document.querySelector('.repository--js')

fetch(`https://api.github.com/users/${username}/repos`)
.then(response => response.json())
.then(response => {
    for (let repository of response){
        const {name,html_url,description,stargazers_count,topics} = repository;
    const element = `<div class="flex flex-col overflow-hidden rounded-2xl border-1 border-t-0 backdrop-blur border-gray-900 from-white/15 to-white/4 bg-gradient-to-br shadow-[rgba(255,255,255,0.2)_0px_-2px_0px_0px]">
            <div class="flex h-11 px-4 gap-1.5 items-center bg-white1 border-1 border-t-0 backdrop-blur border-gray-900 from-white/15 to-white/4 bg-gradient-to-br shadow-[rgba(255,255,255,0.2)_0px_-2px_0px_0px]">
            <span class="h-3 w-3 rounded-full bg-gray-900 opacity-50"></span>
            <span class="h-3 w-3 rounded-full bg-gray-900 opacity-50"></span>
            <span class="h-3 w-3 rounded-full bg-gray-900 opacity-50"></span>
          </div>
            <div class=" p-5 flex flex-col gap-10">
              <div class="flex flex-col gap-4">
                <div class="flex gap-4"><h1 class="font-bold text-2xl">${name}</h1><span class="flex px-2 py-0.5 rounded-md bg-gray-400/10 gap-0.5 items-center"><img src="star-01 1.svg" class="h-4 w-4 "><p class="text-gray-400 ">${stargazers_count}</p></span></div>
                <p class="text-xl text-gray-400">${description}</p>
                <div class="flex gap-2">
                  <span class="px-2 py-1 text-lg font-bold bg-gray-400/10 rounded-sm">${topics}</span>
                </div>
            </div>
            <div class="flex flex-col gap-4 items-start">
              <a href="https://github.com/Qkari17" target="_blank" rel="noopener noreferrer" class="border-1 border-gray-700 bg-gray-900 px-5 py-4 flex gap-2 text-cyan-500 rounded-lg font-bold"><img src="browser 1.svg" class="w-6 h-6">View demo</a>
              <a href="${html_url}" target="_blank" rel="noopener noreferrer" class="border-1 border-gray-700 bg-gray-900 px-5 py-4 flex gap-2 text-cyan-500 rounded-lg font-bold"><img src="github.svg" class="w-6 h-6">Source code</a>
            </div>
            </div>
          </div>`
          repositoriesContainer.insertAdjacentHTML('beforeend', element)
    }
})
.catch((e) =>console.log(e))
