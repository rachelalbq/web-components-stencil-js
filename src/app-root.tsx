import { Component, Host, State, h } from '@stencil/core'
import { Character } from './models/character';

@Component({
    tag: 'app-root',
    styleUrl: './app-root.css',
    shadow: true
})

export class AppRoot {

    @State() searchQuery: string = '';
    @State() totalPages: number = 1;
    @State() activePage: number = 1;
    @State() data: Character[] = [
        { name: 'Abner Jenkins', series: ['Iron Man: Armor Wars', 'Old Man Hawkeye', 'Fantastic Four Visionaries: Walter Simonson Vol. 1'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Amora', series: ['Green Goblin'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Barry Norman Osborn', series: ['Spider-Island: Deadly Foes', 'Peter Parker: The Spectacular Spider-Man', 'The Amazing Spider-Man'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Bill Foster', series: ['Avengers Annual', 'Marvel Universe by Chris Claremont', 'Marvel Masterworks: Luke Cage, Power Man Vol. 2'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Bruce Banner', series: ['Marvel Universe Avengers: Ultron Revolution', 'Hulk', 'Secret Avengers'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Daniel Ketch', series: ['Ghost Rider', 'The Punisher', 'Marvel Comics Presents'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Harry Osborn', series: ['Spider-Island: Deadly Foes', 'Peter Parker, the Spectacular Spider-Man', 'The Amazing Spider-Man'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'James Rhodes', series: ['New Avengers', 'Secret Avengers', 'Gambit'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Jason Macendale', series: ['Spider-Man: Hobgoblin Lives', 'Spider-Man: The Mutant Agenda', 'The Amazing Spider-Man'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Joseph Green', series: ['Age of Heroes', 'Avengers: The Initiative Annual', 'Avengers: The Initiative'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Julia Carpenter', series: ['Amazing Spider- Man'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Kate Bishop', series: ['Death’s Head', 'Superior Spider-Man', 'War of the Realms: Journey Into Mystery'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Melati Kusuma', series: ['Fear Itself: Youth in Revolt', 'Avengers: The Initiativ'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Melvin Potter', series: ['Daredevil Saga', 'Daredevil', 'Marvel Masterworks: Daredevil Vol. 3'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Paul Norbert Ebersol', series: ['Thunderbolts', 'Captain America', 'Marvel Two-in-One'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Rachel Leighton', series: ['Domino: Hotshots', 'Domino', 'Captain America'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Scott Lang', series: ['Ant-Man', 'Giant-Man', 'Infinity Wars'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Steve Rogers', series: ['New Avengers', 'Captain America Special', 'Secret Empire: United We Stand'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Tony Stark', series: ['New Avengers', 'Indestructible Hulk', 'Ultimate Fallout'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },
        { name: 'Wanda Maximoff', series: ['New Avengers'], events: ['AvX', 'Demon in the Bottle', 'Dynasty M'] },

    ];


    handleSearch(event: CustomEvent) {
        this.searchQuery = event.detail;
        this.activePage = 1
    }

    handlePageChange(event: CustomEvent) {
        this.activePage = event.detail;
    }

    render() {
        const filteredCharacters = this.data.filter(character =>
            character.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );

        const startIndex = (this.activePage - 1) * 4;
        const visibleCharacters = filteredCharacters.slice(startIndex, startIndex + 4);
        this.totalPages = Math.ceil(filteredCharacters.length / 4);

        return (
            <Host>
                <header>
                    <img class="logo" src="https://www.objective.com.br/wp-content/uploads/2020/11/logo.svg" alt="logo da objective" />
                    <div class="d-flex">
                        <p><strong>Nome do candidato </strong>Teste de Front-end</p>
                        <span>RA</span>
                    </div>
                </header>

                <main>
                    <h1>Busca de personagens</h1>
                    <input-component
                        title="Nome do personagem"
                        placeholder="Search"
                        icon="search-icon"
                        onInputEvent={(event) => this.handleSearch(event)}
                    ></input-component>

                    <div class="character-list">
                        {visibleCharacters.map(character =>
                            <card-component
                                data={character}
                            ></card-component>
                        )}
                    </div>
                </main>

                <footer>
                    <pagination-component
                        totalPages={this.totalPages}
                        activePage={this.activePage}
                        onPageChange={(event) => this.handlePageChange(event)}
                    ></pagination-component>
                </footer>
            </Host>
        );
    }
}