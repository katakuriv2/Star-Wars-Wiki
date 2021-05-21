      const results = document.querySelector('#results');
      const inpt_search = document.querySelector('#inpt_search');
      const ul_list = document.getElementById('list');

      let catg = '';
      let data = [];

      inpt_search.addEventListener('keyup', (e) => {

      const text = inpt_search.value;

      if (data.length <= 0 || text.length <= 0) {
          displayResultsfather(data, catg);
          return;
    }

      const key_by_search = (catg == 'films' ? 'title' : 'name');

      list_clear(ul_list);

      for (let i = 0; i < data.length; ++i) {
          const element_v = data[i];

            if ((element_v[key_by_search]).toLowerCase().indexOf(text.toLowerCase()) != -1) {
                const el_al = document.createElement('a');
                el_al.setAttribute('id', i.toString());
                el_al.classList.add(['list-group-item', 'list-group-item-action']);
                el_al.append(element_v[key_by_search]);

                el_al.addEventListener('click', e => {
                    const id = e['srcElement']['id'];
                    inpt_search.value = data[id][key_by_search];
                    list_clear(ul_list);
                    displayResultsfather([data[id]], catg);
                });

                ul_list.append(el_al);
            }

        }
    });

    function list_clear(el_ul) {
        while (el_ul.firstChild) {
            el_ul.removeChild(ul_list.firstChild)
        }
    }

    async function asyncFetch(value) {
        const res = await fetch(`https://swapi.dev/api/${value}`);
        data = (await res.json())['results'];
        displayResultsfather(data, value);
    }

    function displayResultsfather(data, value) {
        let output = '';

        list_clear(ul_list);

    if (value === 'films') {
        data.forEach((item) => {
            output += `
          <div class="card p-3 m-3" style="opacity: .8">
            <h4 class="card-title text-center">${item.title}</h4>
            <div class="card-content">
              <span style="text-decoration: underline">Produtor</span>: ${item.producer}<br>
              <span style="text-decoration: underline">Diretor</span>: ${item.director}<br>
              <span style="text-decoration: underline">Data de Lançamento</span>: ${item.release_date}<br>
              <p class="text-center">${item.opening_crawl}</p>
            </div>
          </div>
      `
        })
    } else if (value === 'people') {
        data.forEach((item) => {
            output += `
          <div class="card p-3 m-3" style="opacity: .8">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
              <span style="text-decoration: underline">Altura</span>: ${item.height}<br>
              <span style="text-decoration: underline">Ano de Nascimento</span>: ${item.birth_year}<br>
              <span style="text-decoration: underline">Cor da Pele</span>: ${item.skin_color}<br>
              <span style="text-decoration: underline">Cor dos Olhos</span>: ${item.eye_color}<br>
              <span style="text-decoration: underline">Cor do Cabelo</span>: ${item.hair_color}<br>
              <span style="text-decoration: underline">Gênero</span>: ${item.gender}<br>
            </div>
          </div>
      `
        })
    } else if (value === 'vehicles') {
        data.forEach((item) => {
            output += `
          <div class="card p-3 m-3" style="opacity: .8">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
              <span style="text-decoration: underline">Capacidade</span>: ${item.cargo_capacity}<br>
              <span style="text-decoration: underline">Modelo</span>: ${item.model}<br>
              <span style="text-decoration: underline">Fabricante</span>: ${item.manufacturer}<br>
              <span style="text-decoration: underline">Classe do Veículo</span>: ${item.vehicle_class}<br>
            </div>
          </div>
      `
        })
    } else if (value === 'planets') {
        data.forEach((item) => {
            output += `
          <div class="card p-3 m-3" style="opacity: .8">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
              <span style="text-decoration: underline">Clima</span>: ${item.climate}<br>
              <span style="text-decoration: underline">Diâmetro</span>: ${item.diameter}<br>
              <span style="text-decoration: underline">Gravidade</span>: ${item.gravity}<br>
              <span style="text-decoration: underline">Período Orbital</span>: ${item.orbital_period}<br>
              <span style="text-decoration: underline">População</span>: ${item.population}<br>
              <span style="text-decoration: underline">Superfície com Água</span>: ${item.surface_water}<br>
              <span style="text-decoration: underline">Terreno</span>: ${item.terrain}<br>
            </div>
          </div>
      `
        })
    } else if (value === 'starships') {
        data.forEach((item) => {
            output += `
          <div class="card p-3 m-3" style="opacity: .8">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
              <span style="text-decoration: underline">Modelo</span>: ${item.model}<br>
              <span style="text-decoration: underline">Fabricante</span>: ${item.manufacturer}<br>
              <span style="text-decoration: underline">Valor</span>: ${item.cost_in_credits}<br>
              <span style="text-decoration: underline">Comprimento</span>: ${item.length}<br>
              <span style="text-decoration: underline">Velocidade Máxima</span>: ${item.max_atmosphering_speed}<br>
              <span style="text-decoration: underline">Tripulação</span>: ${item.crew}<br>
              <span style="text-decoration: underline">Passageiros</span>: ${item.passengers}<br>
            </div>
          </div>
      `
        })
    } else if (value === 'species') {
        data.forEach((item) => {
            output += `
          <div class="card p-3 m-3" style="opacity: .8">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content">
              <span style="text-decoration: underline">Classificação</span>: ${item.classification}<br>
              <span style="text-decoration: underline">Designação</span>: ${item.designation}<br>
              <span style="text-decoration: underline">Altura Média</span>: ${item.average_height}<br>
              <span style="text-decoration: underline">Cor da Pele</span>: ${item.skin_colors}<br>
              <span style="text-decoration: underline">Cor do Cabelo</span>: ${item.hair_colors}<br>
              <span style="text-decoration: underline">Cor dos Olhos</span>: ${item.eye_colors}<br>
              <span style="text-decoration: underline">Tempo Médio de Vida</span>: ${item.average_lifespan}<br>
              <span style="text-decoration: underline">Idioma Falado</span>: ${item.language}<br>
            </div>
          </div>
      `
        })
    }
    results.innerHTML = output;
};

document.querySelector("#buttons").addEventListener('click', (e) => {
    catg = (e.target)['lastElementChild']['attributes'][2].value;
    inpt_search.value = '';

    asyncFetch(catg);
});