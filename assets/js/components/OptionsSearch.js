export function OptionSearch() {
  return `
               <div class="options">
                <div class="form-control">
                  <input
                    type="radio"
                    name="city"
                    id="london"
                    aria-label="option london"
                  />
                  <label for="london"> London</label>
                </div>
                <div class="form-control">
                  <input
                    type="radio"
                    name="city"
                    id="amsterdan"
                    aria-label="option amsterdan"
                  />
                  <label for="amsterdan">Amsterdan</label>
                </div>
                <div class="form-control">
                  <input
                    type="radio"
                    name="city"
                    id="ny"
                    aria-label="option new york"
                  />
                  <label for="ny">New York</label>
                </div>
                <div class="form-control">
                  <input
                    type="radio"
                    name="city"
                    id="berlin"
                    aria-label="option berlin"
                  />
                  <label for="berlin">Berlin</label>
                </div>
              </div>
    `;
}
